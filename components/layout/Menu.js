import Link from "next/link"
// import { useRouter } from "next/router"

export default function Menu() {
    // const router = useRouter()


    return (
        <>

                <ul className="main-menu__list">
                    <li className="">
                        <Link href="/">Home </Link>
                        
                    </li>
                    <li>
                        <Link href="/about">About Us</Link>
                    </li>
                    
                    <li className="">
                        <Link href="/services">Services</Link>
                     
                    </li>
                    <li className="">
                        <Link href="/projects">projects</Link>
                        {/* <ul>
                            <li><Link href="projects">Projects</Link></li>
                            <li><Link href="project-details">Project Details</Link></li>
                        </ul> */}
                    </li>
                    <li className="">
                        <Link href="/team">Team</Link>
                        
                    </li>
                    <li className="">
                        <Link href="/blog">Blog</Link>
                        
                    </li>
                    <li>
                        <Link href="/contact">Contact</Link>
                    </li>
                </ul>
        </>
    )
}
