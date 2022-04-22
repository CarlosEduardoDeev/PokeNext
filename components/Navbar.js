
import  Head  from "next/head"
import  Link  from "next/link"
import Image from 'next/image'
import styles from '../styles/Navbar.module.css'


export default function Navbar(){
    return(
        <>
        <Head>
             <title>Pokedex</title>
           <link rel = "shortcut icon"  href = "/images/favicon.ico"/>
       </Head>
    
      
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <Image src="/images/pokeball.png" width="40" height="40"/>
                <h1>Pokedex</h1>
            </div>
            <ul className={styles.items}>
                <li><Link href='/'><a>Home</a></Link></li>
                <li><Link href='/about'><a>Sobre</a></Link></li>
            </ul>

        </nav>
        </>
    )
}