import Image from 'next/image'

const educationData = [
    {
        degree: 'Master of Technology',
        institution: 'BiTS Pilani',
        location: 'Coimbatore',
        duration: 'Mar 2026 - Present',
        major: 'Computer System and Infrastructure'
    },
    {
        degree: 'Bachelor of Computer Applications',
        institution: 'CIMAGE',
        location: 'Patna',
        duration: 'July 2022 - May 2025',
        major: 'Computer Applications'
    }

]

const Education = () => {
    return (
        <div>
            <Image
                src="/wave-divider.svg"
                alt="Wave divider"
                width={140}
                height={1}
                className="mt-6"
            />
            <h2 className="text-3xl font-semibold mt-3">Education</h2>
            <p className='text-muted-foreground'>My academic background and qualifications.</p>
            <div className="space-y-6 mt-4">
                {educationData.map((edu, index) => (
                    <div key={index} className='border-l-2 border-accent relative pl-6 pb-6'>
                        <div className='absolute -left-2.25 top-0 h-4 w-4 rounded-full bg-accent border-4 border-background'></div>
                        <h3 className="text-xl font-bold">{edu.degree}</h3>
                        <div className="flex justify-between">
                            <p className="text-sm text-accent">{edu.institution}, {edu.location}</p>
                            <p className="text-sm text-muted-foreground">{edu.duration}</p>
                        </div>
                        <p className="text-sm text-muted-foreground">{edu.major}</p>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Education