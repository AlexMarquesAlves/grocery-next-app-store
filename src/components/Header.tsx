import { LayoutGrid, Search } from 'lucide-react'
import Image from 'next/image'
import { ReactNode } from 'react'

interface HeaderProps {
  children: ReactNode
}

export function Header({ children }: HeaderProps) {
  return (
    <>
      <div className="p-5 shadow-md">
        <div className="flex items-center gap-8">
          <Image
            src="/logo.png"
            alt="cesta de compras"
            width={150}
            height={100}
          />

          <h2 className="flex gap-2 items-center border rounded-full px-10 p-2 bg-slate-200">
            <LayoutGrid className="w-5 h-5" /> Category
          </h2>

          <div className="md:flex gap-3 items-center border rounded-full p-2 m-5 hidden">
            <Search />
            <input
              className="outline-none"
              type="text"
              placeholder="Search..."
            />
          </div>
        </div>
      </div>

      <div>
        <button></button>
      </div>
      {children}
    </>
  )
}
