const TechPage = () => {
    return (
        <div className="text-2xl font-light tracking-wide leading-10 text-center md:text-left">
            <div className="text-4xl font-medium mb-8">Portfolio Deployment Details</div>
            <div className="mb-16">
                <div className="mt-4"><a className="font-bold">Devops: </a>The infrastructure for this portfolio is deployed entirely on AWS. The app is running on a managed EKS cluster, using Route53 and AWS Application Load Balancer to manage ingress traffic.</div>
                <div className="mt-6" ><a className="font-light">link: </a><a target="_blank" className="underline" href="https://github.com/easternlai/elai-portfolio-devops">devops github repo</a></div>
            </div>
            <div className="mb-20">
                <div className="mt-2"><a className="font-bold">Dev: </a>The portfolio web app was built with React Nextjs and uses Tailwind for styling.  </div>
                <div className="mt-6" ><a className="font-light">link: </a><a target="_blank" className="underline" href="https://github.com/easternlai/elai-portfolio-app">NextJs github repo</a></div>
            </div>
            <div className="mb-16">
                <div className="mt-2"><a className="font-bold">CI/CD: </a>Github Actions is used to automate the deployment of the web app. When a pull request is made to the main branch, GHA will trigger the creation of a new docker image that is then pushed to AWS ECR and deployed to Kubernetes.</div>
                <div className="mt-6" ><a className="font-light">link: </a><a target="_blank" className="underline" href="https://github.com/easternlai/elai-portfolio-app/blob/main/.github/workflows/git_to_eks.yaml">github workflow</a></div>
            </div>
        </div >
    )
}

export default TechPage;