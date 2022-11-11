import React, { useState } from "react";
import styles from './Login.module.css';
import Link from 'next/link';

const Login = () => {

		const [email, setEmail] = useState();
		const [pwd1, setPwd1] = useState();

		const handleSubmit = (event) => {
			event.preventDefault();
		}

        return(
        <>

			<div className={styles.wrap_login1}>

				<div className={styles.wrap_login}>
					
					<form className={styles.form_login} onSubmit={handleSubmit}> 
					
						
						{/* <div style={{align-items: "center"; text-align: "center"}}> */}
						<div className={styles.div_logo}>
							<Link href="#">
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
							
							<input className={styles.inputLogin} 
								type="text" 
								placeholder="Email"
								onChange={(e) => setEmail(e.target.value)}  
							/>
						</div>

						
						<div  className={styles.divInputLogin} >
							<span class="btn-show-pass">
								<i class="zmdi zmdi-eye"></i>
							</span>
							<input className={styles.inputLogin} 
								type="password" 
								placeholder="Password"
								onChange={(e) => setPwd1(e.target.value)}
							/>
						</div>

						<div class="container-login100-form-btn">
							<div class="wrap-login100-form-btn">
								<div class="login100-form-bgbtn"></div>
								<button className={styles.btnLogin} type="submit">
									Login
								</button>
							</div>
						</div>

						<div class="text-center p-t-115">
							<span class="txt1">
								Esqueceu a senha?
							</span>

							<Link class="txt2" href="/recovery">
								Recuperar
							</Link>
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

export default Login;