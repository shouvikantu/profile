import React from "react";
import Image from "next/image";
import NavBar from "./Navbar";

export default function Header() {
    return (
        <header>
            <NavBar />
            <div className="header flex light-bg">
                <div>
                    <button>Student | Developer | Problem-solver</button>
                    <h1 className="white">Talk is cheap.</h1>
                    <h1 className="white">Show me the code!</h1>
                    <p className="gray">I design and code beautiful simple things, and I love what I do.</p>
                    <a className="green" href="mailto:sahmed@willamette.edu">Let&#39;s connect!</a>
                </div>
                <Image src="/images/shouvik.png" height={524} width={476} alt="Shouvik"  /> 
            </div>
        </header>
    )
}