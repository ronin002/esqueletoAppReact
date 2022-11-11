import React, { useState } from "react";
import styles from './Register.module.css'
import Link from 'next/link';

const Register = () => {
	
	
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [pwd1, setPwd1] = useState("");
	const [pwd2, setPwd2] = useState("");
	
	/*
	const [inputs, setInputs] = useState({});

	const handleChange = (e) =>{
		const name = e.target.name;
		const value = e.target.value;
		setInputs(values=>({values, [name]: value}));
	}
	*/
	const [errorName, setErrorName] = useState("");
	const [errorEmail, setErrorEmail] = useState("");
	const [errorPwd, setErrorPwd] = useState("");
	

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log("handleSubmit Ok");
		
		if (validate() !== true) return;

	};

	function validate(){

		if (validaNome() === false) return false;
		if (validaEmail() === false) return false;
		if (validaPassword() === false) return false;
		
		console.log("VALIDA OK");

		return true;
	}

	function validaNome(){
		setErrorName("");
		if (name.length <=3){
			setErrorName("⚠ Nome precisar ter 3 ou mais caracteres");
			return false;
		} 
		return true;
	}

	function validaEmail () {

		setErrorEmail("");
		if(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}/.test(email))
		{
			return true;
		}
		else
		{
			setErrorEmail("⚠ E-mail inválido!");
			return false;
		}
		
	};

	function validaPassword() {
		
		var re = {
			'capital' : /[A-Z]/,
			'nocapital' : /[a-z]/,
			'digit'   : /[0-9]/,
			'special'    : /[#$^+=!*()@%&]/,
			'full'    : /.{7,}/
		};

		let errPwd = "";
		setErrorPwd(errPwd);

		if (!re.capital .test(pwd1)) errPwd = "A senha precisa conter caracteres maiúsculos \n";
		if (!re.nocapital .test(pwd1)) errPwd = "A senha precisa conter caracteres minúsculos \n";
		if (!re.digit  .test(pwd1)) errPwd += "A senha precisa conter número \n";
		if (!re.special .test(pwd1)) errPwd += "Senha  precisa conter caracteres especiais \n";
		if (!re.full   .test(pwd1)) errPwd += "Senha precisa ter entre 7 a 16 caracteres \n";

		
		
		if (pwd1 === pwd2 && errPwd === ""){
			return true;
		}
		else{
			console.log('pwd1:' + pwd1);
			console.log('pwd2:' + pwd2);
			errPwd += "As senhas não coincidem \n";
		}
		
		errPwd = "⚠" + errPwd;

		setErrorPwd(errPwd);
		return false;

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
								<span className={styles.corAzul}>Registro</span>
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
							placeholder="Name"
							onChange={(e) => setName(e.target.value)}  
						/>	
					</div>
					<span className={styles.corVemelhaLogo}>
						{errorName}
					</span>

					<div className={styles.divInputLogin} >
						<input className={styles.inputLogin} 
							type="text" 
							placeholder="Email"
							onChange={(e)=>setEmail(e.target.value)}  />	
					</div>
					<span className={styles.corVemelhaLogo}>
						{errorEmail}
					</span>
					
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

					<div  className={styles.divInputLogin} >
						<span class="btn-show-pass">
							<i class="zmdi zmdi-eye"></i>
						</span>
						<input className={styles.inputLogin} 
							type="password" 
							placeholder="Confirme Password" 
							onChange={(e) => setPwd2(e.target.value)}  
						/>	
					</div>

					<span className={styles.corVemelhaLogo}>
						{errorEmail}
						{errorPwd}<br/>
					</span>

					<div class="container-login100-form-btn">
						<div class="wrap-login100-form-btn">
							<div class="login100-form-bgbtn"></div>
							<button className={styles.btnLogin} type="submit">
								Cadastrar
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
							Já possui uma conta?
						</span>

						<Link class="txt2" href="/login">
							Login
						</Link>
					</div> 

				</form>
			</div>
		</div>
		</>
	)
}

export default Register