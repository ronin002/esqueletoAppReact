import React from "react";
import styles from './Header.module.css';
import Link from 'next/link'
import Image from "next/image";
import Logo from './../../../public/home/img/og1_logo_v2.png'

class Header extends React.Component{
    render () {
        
        const hasUser = false ;

        return(
        <>
            <header id="header" className={styles.header}  >
                <div class="container-fluid container-xl d-flex align-items-center justify-content-between">
                  
                    <Link href="#"  >
                        <Image src={Logo} width={25} height={25} alt="" />
                        <span className={styles.corVermelha}>Your</span><span className={styles.corAzul}>Company</span>
                    </Link>
              

                    <nav id="navbar" className={styles.nav} >
                        <ul className={styles.ul} >
                           <li className={styles.li} ><Link className={styles.liLink} href="#hero" >Home</Link></li>
                           <li className={styles.li}><Link className={styles.liLink}  href="#about" >Sobre</Link></li>

                            <li className={styles.li}><Link className={styles.liLink}  href="#pricing" >Preços</Link></li>

                            {/* <li class="dropdown">
                                <Link href="#f" >
                                <span>Produtos</span> 
                                <i class="bi bi-chevron-down"></i>
                                </Link>
                                <ul>
                                    <li><Link href="#e" >Sefaz Nacional</Link></li>
                                </ul>
                            </li> */}
                            
                             <li className={styles.li}><Link className={styles.liLink}  href="#contact">Contato</Link></li>
                        
                            { !hasUser ?
                                <>
                                    <li className={styles.li}><Link className={styles.liLink} href="./../../../user/login/" >Login</Link></li>
                                    <li className={styles.li}><Link className={styles.liLink}   href="./../../../user/register/" >Cadastre-se</Link></li>
                                </>
                            :
                                <>
                                    <Link href="#" className={styles.liLink}  id="imgAvatarUser" >
                                        <img src="#" height="50" width="50" alt="" />
                                    </Link>
                                </>
                            } 
                        
                        </ul>
                        <i class="bi bi-list mobile-nav-toggle"></i>
                    </nav>

                </div>
            </header>
        </>
     )
    }
}

export default Header