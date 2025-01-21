import React from 'react'
import Link from 'next/link'
import { Button, buttonVariants } from './ui/button'

const MobileNav = () => {
  return (
    <div>
        <ul className="flex flex-col gap-4">
           
            <li>
            <Link href="/projects" className="">Projects</Link>
            </li>
            <li>
            <Link href="/contact" className="">Contact</Link>
            </li>
            <div className="buttons gap-2 flex text-xsm">
            </div>
        </ul>
    </div>
  )
}

export default MobileNav
