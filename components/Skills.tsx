import Image from 'next/image'

const SkillsAr = [
    "AWS", "React", "Next.js", "Node.js", "Express", "PostgreSQL", "MongoDB", "TypeScript", "JavaScript", "Python", "Docker", "REST APIs", "Git", "GitHub", "Linux"
]

const Skills = () => {
  return (
    <div className='' id='skills'>
        <Image
                  src="/wave-divider.svg"
                  alt="Wave divider"
                  width={140}
                  height={1}
                  className="mt-6"
                />
        <h3 className="text-2xl font-semibold pb-4">Skills</h3>
        <p className='text-muted-foreground/80'>Here are the frameworks, libraries, services and runtimes I have experience with. This is not a complete list! I&apos;m constantly gaining new skills, and hence it can be a little bit outdated.</p>

        <div className="flex flex-wrap gap-4 mt-4">
            {SkillsAr.map((skill, index) => (
                <div key={index} className="px-4 py-2 bg-foreground/10 text-foreground/80 hover:bg-accent/20 hover:text-accent transition-colors duration-200 rounded-md text-sm font-medium">
                    {skill}
                </div>
            ))}
        </div>

            {/* Maybe some day else */}
        {/* <p className='text-foreground/80 mt-4'>Apart from these, I also have experience with operations as I am working as a <span className='text-accent'>Windows server administrator @Wipro </span>.</p>
        <div>
            <ul className='list-disc text-sm'>
                <li className='text-foreground/80 mt-1'>I have experience in managing and maintaining Windows Server environments, including Active Directory, Group Policy, DNS and other services.</li>
                <li className='text-foreground/80 mt-1'>I am skilled in troubleshooting and resolving server-related issues, ensuring optimal performance and uptime.</li>
                <li className='text-foreground/80 mt-1'>I have experience in implementing security measures and best practices to protect server infrastructure from potential threats.</li>
            </ul>
        </div> */}
    </div>
  )
}

export default Skills