import { useState } from 'react'
import Container from './Container'
import Logo from '@/assets/Logo.png'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList
} from '@/components/ui/navigation-menu'
import { Button } from '../ui/button'
import { Search, SearchIcon, ShoppingCart, X } from 'lucide-react' // Import cancel icon
import { useCartContext } from '@/contexts/CartContext'
import { Link } from 'react-router-dom'
import ProfileButton from '../local/Profile/ProfileButton'

export default function Header() {
  const { quantityInCart } = useCartContext()
  const [isSearchMode, setIsSearchMode] = useState(false) // Manage search mode
  const [searchQuery, setSearchQuery] = useState('') // Store search input

  return (
    <header className='w-full mt-5'>
      <Container>
        <div className='flex w-full h-20 justify-between items-end'>
          {/* Logo */}
          <div className='flex-1'>
            <Link to='/'>
              <img src={Logo} className='w-24 h-24' />
            </Link>
          </div>

          {/* Navigation Menu or Search Bar */}
          <div className='flex-1 flex justify-center'>
            {isSearchMode ? (
              // Search Input
              <div className='flex relative w-full items-center gap-2'>
                <input
                  type='text'
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder='Search...'
                  className='w-full border border-gray-300 rounded-lg py-2 px-4'
                />
                <Button
                  variant='ghost'
                  size='icon'
                  className='absolute right-0'
                  onClick={() => setIsSearchMode(false)} // Cancel search
                >
                  <SearchIcon />
                </Button>
              </div>
            ) : (
              // Navigation Menu
              <NavigationMenu>
                <NavigationMenuList className='flex gap-6 justify-center items-center mb-2'>
                  <NavigationMenuItem className='relative after:absolute after:bg-gray-500 after:h-0.5 after:w-0 after:left-0 after:-bottom-1 after:hover:w-full after:duration-300'>
                    <NavigationMenuLink href='/'>Home</NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem className='relative after:absolute after:bg-gray-500 after:h-0.5 after:w-0 after:left-0 after:-bottom-1 after:hover:w-full after:duration-300'>
                    <NavigationMenuLink href='/products'>Products</NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem className='relative after:absolute after:bg-gray-500 after:h-0.5 after:w-0 after:left-0 after:-bottom-1 after:hover:w-full after:duration-300'>
                    <NavigationMenuLink href='/favorite'>Favorite</NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem className='relative after:absolute after:bg-gray-500 after:h-0.5 after:w-0 after:left-0 after:-bottom-1 after:hover:w-full after:duration-300'>
                    <NavigationMenuLink href='/compare'>Compare</NavigationMenuLink>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            )}
          </div>

          {/* Action Buttons */}
          <div className='flex-1 flex gap-4 mb-2 justify-end'>
            {/* Search Button */}
            {isSearchMode ? (
              <Button variant='outline' onClick={() => setIsSearchMode(false)}>
                Cancel
              </Button>
            ) : (
              <Button variant='outline' size='icon' onClick={() => setIsSearchMode(true)}>
                <Search className='h-6 w-6' />
              </Button>
            )}

            {/* Cart Button */}
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

            {/* Profile Button */}
            <ProfileButton className='shrink-0' />
          </div>
        </div>
      </Container>
    </header>
  )
}
