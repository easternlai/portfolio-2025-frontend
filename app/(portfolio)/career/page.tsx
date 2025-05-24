const CareerPage = () => {
    const companies = [
        {
            title: "Senior Systems Engineer",
            team: "ITops",
            tenure: "Aprl 2024 to Present",
            role: "Learneo is an enterprise of learning and productivity-focused companies, with subsidiaries including Course Hero, QuillBot, and CliffsNotes, that leverage AI and technology to support students, professionals, and lifelong learners.",
            name: "Learneo",
            about: "."
        },
        {
            title: "Site Reliability Engineer",
            team: "Cloud Team",
            tenure: "Mar 2022 to Jan 2024",
            role: "A member of the cloud team responsible for the production infrastructure in AWS. Our primary focus was to apply infrastructure as code principles in every deployment to improve consistency, efficiency, and security throughout the environment.",
            name: "Papa",
            about: "An app-based platform that provides senior citizens access for on-demand assistance and companionship."
        },
        {
            title: "Senior System Administrator",
            team: "Infrastructure Engineering Team",
            tenure: "Aug 2018 to Jan 2022",
            role: "The chief responsibility for this role was the design, development, implementation, integration, automation and improvement of web applications and access management solutions including Single Sign On & Federation, Directory Services, Multifactor Authentication, and Web Access Management. The position also required working in the infrastructure engineering group to expand and maintain the IT systems environment.",
            name: "iRhythm Technologies",
            about: "A digital healthcare company redefining the way cardiac arrhythmias are clinically diagnosed by combining biosensing technology with cloud-based data analytics."
        },
        {
            title: "Network Administrator",
            team: "Production Systems",
            tenure: "Jul 2016 to Aug 2018",
            role: "The central duty of this position was to architect and stabilize the network infrastructure for production and AWS environments. Additional responsibilities include working in the systems engineering group tasked with the expansion, maintenance, and support of production systems environment.",
            name: "endpoint Clinical",
            about: "An interactive response technology IRT systems and solutions provider that supports the life sciences industry."
        },
        {
            title: "System Administrator",
            team: "IT",
            tenure: "Jul 2016 to Aug 2018",
            role: "The position involved working in the systems administration team responsible for all technologies including maintaining the LAMP stack environment and support of internal web services. Other duties included serving as the lead technical resource for network operations, security systems, VoiP services, and conference room technologies.",
            name: "Bently Enterprises",
            about: "A multi-enterprise corporation with operations spanning various industries ranging from commercial real-estate to whiskey distilleration."
        }

    ]
    return (
        <div className="text-center md:text-left">
            <div className="text-4xl font-medium mb-8">Work History</div>
            {companies.map((company, index) => {
                return (
                    <div key={index} className="mb-24 text-2xl font-light tracking-wider leading-10">
                        <div className="text-3xl font-medium">{company.title}</div>
                        <div>{company.name} | {company.tenure}</div>
                        <div className="mt-4"><a className="font-medium">My role: </a>{company.role}</div>
                        <div className="mt-4"><a className="font-medium">About {company.name.split(" ")[0]}:</a> {company.about}</div>
                    </div>
                )
            })}
        </div>
    )
}
export default CareerPage