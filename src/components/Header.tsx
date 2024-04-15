import { LayoutGrid } from 'lucide-react'
import Image from 'next/image'
import { ReactNode } from 'react'

interface HeaderProps {
  children: ReactNode
}

export function Header({ children }: HeaderProps) {
  return (
    <>
      <div>
        <Image
          src="/logo.png"
          alt="cesta de compras"
          width={150}
          height={100}
        />
      </div>
      <div>
        <h2 className="flex gap-2 items-center border rounded-full px-10 p-2 bg-slate-200">
          <LayoutGrid className="w-5 h-5" /> Category
        </h2>
      </div>

      {children}
    </>
  )
}
