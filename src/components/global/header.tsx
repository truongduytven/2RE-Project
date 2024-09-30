import Container from './Container'
import Logo from '@/assets/Logo.png'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList
} from '@/components/ui/navigation-menu'
import { Button } from '../ui/button'
import { Search } from 'lucide-react'
import { useCartContext } from '@/contexts/CartContext'

export default function Header() {
  const { quantityInCart } = useCartContext()
  return (
    <header className='w-full mt-5'>
      <Container>
        <div className='flex w-full h-20 justify-between items-end'>
          <div className='flex-1'>
            <img src={Logo} className='w-24 h-24' />
          </div>
          <div className='flex-1 flex justify-center'>
            <NavigationMenu>
              <NavigationMenuList className='flex gap-6 justify-center items-center mb-2'>
                <NavigationMenuItem className='relative after:absolute after:bg-gray-500 after:h-0.5 after:w-0 after:left-0 after:-bottom-1 after:hover:w-full after:duration-300'>
                  <NavigationMenuLink href='/'>Home</NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem className='relative after:absolute after:bg-gray-500 after:h-0.5 after:w-0 after:left-0 after:-bottom-1 after:hover:w-full after:duration-300'>
                  <NavigationMenuLink href='/shop'>Shop</NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem className='relative after:absolute after:bg-gray-500 after:h-0.5 after:w-0 after:left-0 after:-bottom-1 after:hover:w-full after:duration-300'>
                  <NavigationMenuLink href='/product'>Product</NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem className='relative after:absolute after:bg-gray-500 after:h-0.5 after:w-0 after:left-0 after:-bottom-1 after:hover:w-full after:duration-300'>
                  <NavigationMenuLink href='/cart'>Cart</NavigationMenuLink>
                  {!!quantityInCart && (
                    <div className='bg-red-500 text-slate-50 absolute rounded-full w-4 h-4 text-sm flex justify-center items-center -top-2 -right-4'>
                      {quantityInCart}
                    </div>
                  )}
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <div className='flex-1 flex gap-6 mb-2 justify-end'>
            <Button variant='outline' size='icon'>
              <Search className='h-4 w-4' />
            </Button>
            <Button>Sign In</Button>
          </div>
        </div>
      </Container>
    </header>
  )
}
