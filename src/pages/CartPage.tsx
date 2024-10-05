import ProductInCart from "@/components/local/Cart/ProductInCart";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

export default function CartPage() {
  return (
    <div className='w-full min-h-screen flex flex-col gap-20 my-10'>
      <div className='w-full flex justify-center'>
        <div className='flex flex-col justify-center items-center'>
          <div className='volkov-font text-4xl mb-5'>Shopping cart</div>
          <Breadcrumb className='text-sm'>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href='/'>Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href='/products'>Product</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem className='font-bold'>Shopping cart</BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
      <div className='w-full flex justify-center'>
        <ProductInCart />
      </div>
    </div>
  )
}
