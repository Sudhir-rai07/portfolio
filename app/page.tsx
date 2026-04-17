
import Education from "@/components/Education"
import Skills from "@/components/Skills"
import Socials from "@/components/Socials"
import WorkHistory from "@/components/WorkHistory"
import { Download } from "lucide-react"
import Image from "next/image"

const page = () => {
  return (
    <main className="flex-1">
      <section className="container w-full lg:max-w-[90%] mt-12 px-4 md:lg:px-24">
        <h2 className="md:text-6xl text-4xl font-mono font-semibold">Hey, I am <span className='text-accent font-semibold'>Sudhir R</span>!</h2>
        <p className="text-lg text-foreground/80 mt-4">
          Software developer with experience in Frontend and Backend technologies like React, Next.js, Node.js, Express, PostgreSQL, and more. Skilled in building scalable and efficient & innovative web applications. I am always eager to learn new technologies and improve my skills.
        </p>
        <Image
          src="/wave-divider.svg"
          alt="Wave divider"
          width={140}
          height={1}
          className=""
        />

        <div className="pt-2 flex items-center gap-2">
          <div className="h-8 w-8 shrink-0 rounded-full bg-accent/10 flex items-center justify-center">
            <Download className="text-accent" size={15} />
          </div>
          <a href="/Sudhir_R_Resume.docx" download="Sudhir_R_Resume.docx" className="text-sm leading-none font-medium text-accent hover:underline">
            Resume
          </a>
        </div>

        <Socials />
        <Skills />
        <WorkHistory />
        <Education />
      </section>
    </main>
  )
}

export default page