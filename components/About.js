import React from "react";
import Image from "next/image";

export default function About() {
    return (
        <section id="about" className="dark-bg">
            <div className="flex">
                <div className="flex-full">
                    <AboutCard
                        title="Software Dev"
                        icon="/icons/design.svg"
                        description="I create small scale software projects for people with bigger goals."
                        />
                    <AboutCard
                        title="Web Development"
                        icon="/icons/code.svg"
                        description="I develop responsive and elegant web applications."
                         />
                    <AboutCard
                        title="Data Visualization"
                        icon="/icons/phone.svg"
                        description="I clean, analyze and visualize data and provide important findings and insights"
                        />
                </div>
                
                <div className="flex-full about-text">
                    <h5 className="gray">Introduce</h5>
                    <h1 className="white">Hello, I&#39;m Shouvik Ahmed Antu</h1>
                    <h3 className="white">Code can&apos;t lie, comments can!</h3>
                    <p className="gray">I am an international student from Bangladesh currently studying at Willamette university. I am double majoring in Computer Science and Mathematics. I&apos;m currently based in Salem, Oregon. I have a passion for developing high-quality software that is both easy to use and maintainable.<br/><br/>
                    I am naturally persevered, self-confident, quietly curios, innovative and constantly challenging my skills.</p>
                </div>
            </div>
        </section>
    )
}


function AboutCard ({title, icon, description}) {
    return(
        <div className="light-bg about-card">
            <div className="flex justify-space">
                <h3 className="green">{title}</h3>
                <Image src={icon} width={28} height={28} alt={title} />
            </div>
            <p className="white pg">{description}</p>  
        </div>
    )
}