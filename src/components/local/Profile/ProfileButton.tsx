import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"
import { LogIn, UserIcon, UserPen } from "lucide-react"
import { Link } from "react-router-dom"
type Props = {
  className?: string
}

export default function ProfileButton({ className }: Props) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='outline' size='icon' className={cn('mr-2', className)} aria-label='Shopping Cart'>
          <UserIcon className='w-6 h-6' />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-56'>
        <DropdownMenuGroup>
          <DropdownMenuItem asChild className='cursor-pointer'>
            <Link to='/auth/sign-in'>
              <LogIn className='w-4 h-4 mr-2' />
              <span>Đăng nhập</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild className='cursor-pointer'>
            <Link to='/auth/sign-up'>
              <UserPen className='w-4 h-4 mr-2' />
              <span>Đăng ký</span>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
