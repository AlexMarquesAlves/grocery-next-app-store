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
        <h2></h2>
      </div>

      {children}
    </>
  )
}
