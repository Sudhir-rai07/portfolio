"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const Navbar = () => {
    const pathname = usePathname()
    const isContact = pathname === "/contact"
    
    return (
        <header className=''>
            <nav className='flex flex-row justify-between items-center py-4 px-4 border-b'>
                <Link href='/' className='text-2xl'><span className='text-accent font-semibold'>/</span><span className='text-accent font-semibold'>/</span>SR</Link>

                <div className='ml-auto'>
                    <Link href='/contact' className={`mx-2 text-sm ${isContact ? "text-accent" : "text-muted-foreground hover:text-accent"}`}>CONTACT</Link>
                </div>
            </nav>
        </header>
    )
}

export default Navbar