import Link from 'next/link'

const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="border-t border-foreground/10 mt-16">
            <div className="container w-full lg:max-w-[90%] px-4 md:px-24 py-8">
                <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                    <div>
                        <p className="text-base font-semibold">Sudhir R</p>
                        <p className="text-sm text-foreground/70">Building reliable and modern web experiences.</p>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-sm">
                        <a href="#" className="text-foreground/80 hover:text-accent transition-colors duration-200">Home</a>
                        <a href="#skills" className="text-foreground/80 hover:text-accent transition-colors duration-200">Skills</a>
                        <a href="#experience" className="text-foreground/80 hover:text-accent transition-colors duration-200">Experience</a>
                        <Link
                            href="mailto:sudhirrai128@gmail.com"
                            className="text-foreground/80 hover:text-accent transition-colors duration-200"
                        >
                            Contact
                        </Link>
                    </div>
                </div>


                {/* Nice but not needed here */}
                {/* <div className="mt-6 flex flex-col gap-3 border-t border-foreground/10 pt-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-foreground/70">© {currentYear} Sudhir R. All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm">
            <Link href="https://github.com/Sudhir-rai07" target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-accent transition-colors duration-200">GitHub</Link>
            <Link href="https://www.linkedin.com/in/sudhirrai0/" target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-accent transition-colors duration-200">LinkedIn</Link>
            <Link href="https://x.com/sudhirrai0" target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-accent transition-colors duration-200">X</Link>
          </div>
        </div> */}
            </div>
        </footer>
    )
}

export default Footer