import Link from "next/link";

export default function Home() {
  return (
    <div className="text-center md:text-left md:mt-8 text-2xl font-light leading-10">
      <div className="text-4xl font-medium md:text-5xl">Hello, I&apos;m Eastern.</div>
      <div className="mt-4 md:mt-8 tracking-wider">I am a versatile cloud engineer with extensive experience leading projects that have advanced production infrastructures and large corporate environments.</div>
      <div className="mt-4 md:mt-8 tracking-wider">As a fun project I decided to deploy this site using trending technologies and services including Kubernetes, AWS, Terraform, Docker, Github, NextJS, and much more.</div>
      <div className="mt-4 md:mt-8 tracking-wider ">Please visit the <a className="tracking-tight underline" href='/tech'>tech stack page</a> for more details.</div>
    </div>
  );
}
