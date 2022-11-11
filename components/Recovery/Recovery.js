import React, { useState } from "react";
import styles from './Recovery.module.css'
import Link from 'next/link';

class Recovery extends React.Component{
    render () {
        
        const hasUser = false ;

        return(
			<>

			<div className={styles.wrap_login1}>
				<div className={styles.wrap_login}>
					
					<form className={styles.form_login}> 
					
						
						{/* <div style={{align-items: "center"; text-align: "center"}}> */}
						<div className={styles.div_logo}>
							<Link href="/">
								<img src="assets/img/og1_logo_v2.png" width={50} height={50} alt="" />
								<br/>
								<h4 className={styles.nomeLogo}>
									<span className={styles.corVemelhaLogo}>Your</span><span>Company</span>
								</h4>
							</Link>
						</div>
						<br/>
						<span class="login100-form-title p-b-48">
							<i class="zmdi zmdi-font"></i>
						</span>

						<div className={styles.divInputLogin} >
							<input className={styles.inputLogin} type="text" id="email" name="email" placeholder="Email"  />	
						</div>

						<div class="container-login100-form-btn">
							<div class="wrap-login100-form-btn">
								<div class="login100-form-bgbtn"></div>
								<button className={styles.btnLogin} type="submit">
									Recuperar senha
								</button>
							</div>
						</div>

						<div class="text-center p-t-115">
							<span class="txt1">
								Não possui uma conta ainda?
							</span>

							<Link class="txt2" href="/register">
								Cadastre-se
							</Link>
						</div> 

						
	
					</form>
				</div>
			</div>
        </>
     )
    }
}

export default Recovery