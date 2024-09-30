import Container from '@/components/global/Container'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from '@/components/ui/alert-dialog'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { useCartContext } from '@/contexts/CartContext'
import { DataArrivals } from '@/lib/DataArrivals'
import { formatCurrency, formatProductType } from '@/lib/utils'
import { Product } from '@/types'
import { Eye } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function ProductInCart() {
  const { cart, setCart } = useCartContext()
  const [selectedProducts, setSelectedProducts] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [products, setProducts] = useState<Product[]>([])
  const navigate = useNavigate()
  useEffect(() => {
    const fetchedProducts: Product[] = []

    cart.forEach((productId) => {
      const product = DataArrivals.find((product) => product.id.toString() === productId)
      if (product) {
        fetchedProducts.push(product)
      }
    })

    setProducts(fetchedProducts)
    setIsLoading(false)
  }, [cart])

  const handleCheckboxChange = (productId: string) => {
    setSelectedProducts((prevSelected) =>
      prevSelected.includes(productId) ? prevSelected.filter((id) => id !== productId) : [...prevSelected, productId]
    )
  }

  const handleViewDetail = (productId: string) => {
    navigate(`/productDetails/` + productId)
  }

  const handleDeleteSelected = () => {
    const updatedCart = cart.filter((productId) => !selectedProducts.includes(productId))
    setCart(updatedCart)
    setSelectedProducts([])
  }

  const handleSelectAll = () => {
    if (selectedProducts.length === products.length) {
      setSelectedProducts([])
    } else {
      setSelectedProducts(products.map((product) => product.id.toString()))
    }
  }
  const selectedProductDetails = products.filter((product) => selectedProducts.includes(product.id.toString()))

  return (
    <Container>
      {cart.length === 0 ? (
        <div>Your cart is empty</div>
      ) : isLoading ? (
        <div>Loading</div>
      ) : products ? (
        <div className='flex flex-col gap-8'>
          <Table className='table-fixed'>
            <TableHeader>
              <TableRow>
                <TableHead className='w-12'>
                  <Checkbox
                    checked={selectedProducts.length === products.length && products.length > 0}
                    onCheckedChange={handleSelectAll}
                  />
                </TableHead>
                <TableHead className='w-24 font-bold text-center'>Image</TableHead>
                <TableHead className='w-64 font-bold'>Name Product</TableHead>
                <TableHead className='w-64 font-bold'>Shop Name</TableHead>
                <TableHead className='w-24 font-bold text-center'>Size</TableHead>
                <TableHead className='w-24 font-bold text-center'>Cond</TableHead>
                <TableHead className='w-28 font-bold text-center'>Price</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {products.map((product) => (
                <TableRow key={product.id}>
                  <TableCell className='w-12' onClick={() => handleCheckboxChange(product.id.toString())}>
                    <Checkbox checked={selectedProducts.includes(product.id.toString())} />
                  </TableCell>
                  <TableCell className='w-24 h-36'>
                    <img src={product.mainImage} className='object-cover w-full h-full' />
                  </TableCell>
                  <TableCell className='w-64 cursor-pointer' onClick={() => handleViewDetail(product.id.toString())}>{product.name} {product.sale > 0 && <Badge className='bg-red-500 hover:bg-red-600 px-1'>-{product.sale}%</Badge>}</TableCell>
                  <TableCell className='w-64'>{formatProductType(product.shopName)}</TableCell>
                  <TableCell className='w-24 text-center'>{product.size}</TableCell>
                  <TableCell className='w-24 text-center'>{product.cond}%</TableCell>
                  <TableCell className='w-28 text-center'>
                    {formatCurrency(product.price - (product.price * product.sale) / 100)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell colSpan={6} className='font-bold py-4'>
                  Total Price
                </TableCell>
                <TableCell className='font-bold text-center'>
                  {formatCurrency(
                    products.reduce(
                      (total, product) => total + (product.price - (product.price * product.sale) / 100),
                      0
                    )
                  )}
                </TableCell>
              </TableRow>
            </TableFooter>
          </Table>
          <div className='flex justify-between'>
            <AlertDialog>
              <AlertDialogTrigger>
                <Button variant='destructive' disabled={selectedProducts.length === 0}>
                  Delete {selectedProducts.length} selected
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    Are you sure you want to remove {selectedProducts.length} items from your cart? You can still add
                    them back to your cart from the shop.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction className='bg-red-500 hover:bg-red-600' onClick={handleDeleteSelected}>
                    Continue
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
            <Link to='/checkout' state={{ selectedProducts: selectedProductDetails }}>
              <Button disabled={selectedProducts.length === 0}>Checkout {selectedProducts.length} products</Button>
            </Link>
          </div>
        </div>
      ) : (
        <div>Product not found</div>
      )}
    </Container>
  )
}
