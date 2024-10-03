import Container from './Container'
import Logo from '@/assets/Logo.png'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList
} from '@/components/ui/navigation-menu'
import { Button } from '../ui/button'
import { Search, ShoppingCart } from 'lucide-react'
import { useCartContext } from '@/contexts/CartContext'
import { Link } from 'react-router-dom'
import ProfileButton from '../local/Profile/ProfileButton'

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
                  <NavigationMenuLink href='/favorite'>Favorite</NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem className='relative after:absolute after:bg-gray-500 after:h-0.5 after:w-0 after:left-0 after:-bottom-1 after:hover:w-full after:duration-300'>
                  <NavigationMenuLink href='/compare'>Compare</NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <div className='flex-1 flex gap-4 mb-2 justify-end'>
            <Button variant='outline' size='icon'>
              <Search className='h-6 w-6' />
            </Button>
            <Button variant='outline' size='icon' className='relative shrink-0'>
              <Link to='/cart'>
                <ShoppingCart className='h-6 w-6' />
                {!!quantityInCart && (
                  <div className='bg-red-500 text-slate-50 absolute rounded-full w-4 h-4 text-xs flex justify-center items-center -top-1.5 -right-1.5'>
                    {quantityInCart}
                  </div>
                )}
              </Link>
            </Button>
            <ProfileButton className='shrink-0'/>
          </div>
        </div>
      </Container>
    </header>
  )
}
