import { LayoutGrid, Search, ShoppingBag } from 'lucide-react'
import Image from 'next/image'
import { ReactNode } from 'react'
import { Button } from './ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

interface HeaderProps {
  children: ReactNode
}

export function Header({ children }: HeaderProps) {
  return (
    <>
      <div className="p-5 shadow-md flex justify-between">
        <div className="flex items-center gap-8">
          <Image
            src="/logo.png"
            alt="cesta de compras"
            width={150}
            height={100}
          />

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <h2 className="hidden md:flex gap-2 items-center border rounded-full px-10 p-2 bg-slate-200 cursor-pointer">
                <LayoutGrid className="w-5 h-5" /> Category
              </h2>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Browse Category</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <div className="md:flex gap-3 items-center border rounded-full p-2 m-5 hidden">
            <Search />
            <input
              className="outline-none"
              type="text"
              placeholder="Search..."
            />
          </div>
        </div>

        <div className="flex gap-5 items-center ">
          <h2 className="flex gap-2 items-center text-lg">
            <ShoppingBag /> 0
          </h2>
          <Button>Login</Button>
        </div>
      </div>

      {children}
    </>
  )
}
