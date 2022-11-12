import React, { useState } from "react";
import styles from './Register.module.css'
import Link from 'next/link';
//import internal from "stream";
//import { Interface } from "readline";
import { v4 } from 'uuid';

const ConfirmRegister = () => {
	
	
	const [token, setToken] = useState("");
	
	const [errorCode, setErrorCode] = useState("");



	async function handleSubmit (event){

		event.preventDefault();
		console.log("handleSubmit Ok");
		
		if (token.length < 10) return;


		const response = await fetch('/api/user/ConfirmRegister', {
			method: 'GET',
			body: JSON.stringify(token)
		})

		if (!response.ok){
			throw new Error(response.statusText);
		}
		return await response.json();

	};


	return(
		<>
		<div className={styles.wrap_login1}>
			<div className={styles.wrap_login}>
				
				<form className={styles.form_login} onSubmit={handleSubmit}> 

					{/* <div style={{align-items: "center"; text-align: "center"}}> */}
					<div className={styles.div_logo}>
						<Link href="#">
							{/* <img src="assets/img/og1_logo_v2.png" width={50} height={50} alt="" /> */}
							{/* <br/> */}
							<h4 className={styles.nomeLogo}>
								{/* <span className={styles.corVemelhaLogo}>Sefaz</span><span>Nacional</span> */}
								<span className={styles.corAzul}>Confirm Register</span>
							</h4>
						</Link>
					</div>
					<br/>
			

					<div className={styles.divInputLogin} >
						<input className={styles.inputLogin} 
							type="text"
							placeholder="Validation mail Code"
						/>	
					</div>
					<span className={styles.corVemelhaLogo}>
						{errorCode}
					</span>

					
					<div >
						<div >
							<div></div>
							<button className={styles.btnLogin} type="submit">
								Cadastrar
							</button>
						</div>
					</div>

					<div>
						<span>
							Esqueceu a senha?
						</span>

						<Link href="/recovery">
							Recuperar
						</Link>
					</div>

					<div >
						<span >
							Já possui uma conta?
						</span>

						<Link href="/login">
							Login
						</Link>
					</div> 

				</form>
			</div>
		</div>
		</>
	)
}

export default ConfirmRegister