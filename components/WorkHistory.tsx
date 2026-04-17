import Image from 'next/image'
import { title } from 'process'

const experienceData = [
    {
        title: 'Windows Server Administrator',
        company: 'Wipro',
        location: 'Coimbatore',
        duration: 'Sep 2025 - Present',
        description: 'Server administrator with hands on experience in managing and maintaining Windows Servers. Monitoring, Troubleshooting windows server performance. Experience in Active Directory, Group Policy, DNS, DHCP, and other Windows Server technologies.'
    },
    {
        title: 'Backend Developer',
        company: 'Evenza',
        location: 'Remote',
        duration: 'Mar 2025 - Aug 2025',
        description: 'Backend developer with experience in building and maintaining web applications using Node.js, Express, and PostgreSQL. Worked on developing RESTful APIs, database design, and server-side logic implementation.'
    },
    {
        title: 'Full Stack Developer',
        company: '5ireChain',
        location: 'Remote',
        duration: 'Dec 2024 - Feb 2025',
        description: 'Full stack developer with experience in building web applications using React, Next.js, Node.js, and PostgreSQL. Worked on developing user interfaces, server-side logic, and database management.'
    }
]
const WorkHistory = () => {
    return (
        <div id='experience'>
            <Image
                src="/wave-divider.svg"
                alt="Wave divider"
                width={140}
                height={1}
                className="mt-6"
            />

            <h3 className="text-2xl font-semibold pb-4">Work History</h3> 
            <p className='text-muted-foreground mb-2'>Below you will find a summary of my past employment experience. Additionally, if you require, you can download my resume.</p>

           <div className='space-y-6'>
             {/* <div className='border-l-2 border-accent relative pl-6 pb-6'>
                <div className='absolute -left-2.25 top-0 h-4 w-4 rounded-full bg-accent border-4 border-background'></div>
                <h4 className='text-lg font-semibold'>Windows Server Administrator</h4>
                <p className='text-sm text-accent'>Wipro • Coimbatore </p>
                <p className='text-muted-foreground text-sm mb-3'>Sep 2025 - Present</p>
                <p className='text-muted-foreground text-sm'>
                    Server administrator with hands on experience in managing and maintaining Windows Servers. Monitoring, Troubleshooting windows server performance. Experience in Active Directory, Group Policy, DNS, DHCP, and other Windows Server technologies.
                </p>
            </div> */}

            {experienceData.map((exp, index) => (
                <div key={index} className='border-l-2 border-accent relative pl-6 pb-6'>
                    <div className='absolute -left-2.25 top-0 h-4 w-4 rounded-full bg-accent border-4 border-background'></div>
                    <h4 className='text-lg font-semibold'>{exp.title}</h4>
                    <p className='text-sm text-accent'>{exp.company} • {exp.location}</p>
                    <p className='text-muted-foreground text-sm mb-3'>{exp.duration}</p>
                    <p className='text-muted-foreground text-sm'>{exp.description}</p>
                </div>
            ))}
           </div>
        </div>
    )
}

export default WorkHistory