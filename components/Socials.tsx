import Link from 'next/link'
import { FaGithub } from 'react-icons/fa'
import { FiLinkedin } from 'react-icons/fi'
import { RiTwitterXFill } from 'react-icons/ri'

const Socials = () => {
  return (
    <div className="" id='socials'>
      <h3 className="text-2xl font-semibold mt-8 pb-4">Find me on</h3>
      <div className="flex items-center space-x-3">
        <div className="flex items-center gap-2">
          <Link href="https://github.com/Sudhir-Rai07" className="flex gap-2 items-center text-sm text-foreground/80 hover:underline hover:text-accent transition duration-200" target="_blank"><FaGithub size={20} /> GitHub</Link>
        </div>
        <div className="flex items-center gap-2">
          <Link href="https://www.linkedin.com/in/sudhirrai0/" className="flex gap-2 items-center text-sm text-foreground/80 hover:underline hover:text-accent transition duration-200" target="_blank"><FiLinkedin size={20} /> LinkedIn</Link>
        </div>
        <div className="flex items-center gap-2">
          <Link href="https://x.com/sudhirrai0" className="flex gap-2 items-center text-sm text-foreground/80 hover:underline hover:text-accent transition duration-200" target="_blank"><RiTwitterXFill size={20} /> Twitter</Link>
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-semibold mt-8 pb-4">Contact</h3>
        <p className='text-foreground/80'>You can reach me out at <Link href="mailto:sudhirrai128@gmail.com" className="text-accent hover:underline">sudhirrai128@gmail.com</Link></p>
      </div>
    </div>
  )
}

export default Socials