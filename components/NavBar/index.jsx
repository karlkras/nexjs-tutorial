import React from 'react'
import Link from "next/link";
import Providers from "@/app/providers";

const linkList = [
  { label: "About", href: "/about" },
  { label: "About Info", href: "/about/info" },
  { label: "Client", href: "/client" },
  { label: "Drinks", href: "/drinks" },
  { label: "Tasks", href: "/tasks" },
  { label: "Prisma", href: "/prisma-example" }
];

const NavBar = ({children}) => {
  return (
    <>
      <nav className='bg-base-300 py-4'>
        <div className="navbar px-8 max-w-6xl mx-auto flex-col sm:flex-row">
          <Link href={"/"} className="btn btn-primary">
            Next.js
          </Link>
          <ul className="menu menu-horizontal md:ml-8">
            {linkList.map(aLink => (
              <li key={aLink.label}>
                <Link href={aLink.href} className="capitalize">{aLink.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <main className="px-8 py-20 max-w-6xl mx-auto">
        <Providers>
          {children}
        </Providers>
      </main>
    </>
  )
}
export default NavBar
