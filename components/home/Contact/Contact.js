import React from "react";

class Contact extends React.Component{
    render () {
        return(
        <>
            <section id="contact" class="contact">

                <div class="container" data-aos="fade-up">

                    <header class="section-header">
                    {/* <h2>Contato</h2> */}
                    <p>Entre em contato</p>
                    </header>

                    <div class="row gy-4">

                    <div class="col-lg-6">

                        <div class="row gy-4">
                        <div class="col-md-6">
                            <div class="info-box">
                            <i class="bi bi-geo-alt"></i>
                            <h3>Endereço</h3>
                            <p>Av. Nestor Sampaio,<br/>Aracaju, Sergipe</p>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="info-box">
                            <i class="bi bi-telephone"></i>
                            <h3>Telefone:</h3>
                            <p>+55 79 9 9110 9067<br/></p>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="info-box">
                            <i class="bi bi-envelope"></i>
                            <h3>Email Us</h3>
                            <p>info@og1.com<br/>contact@og1.com</p>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="info-box">
                            <i class="bi bi-clock"></i>
                            <h3>Horário de Funcionamento</h3>
                            <p>Seg - Sex<br/>9:00AM - 05:00PM</p>
                            </div>
                        </div>
                        </div>

                    </div>

                    <div class="col-lg-6">
                        <form action="forms/contact.php" method="post" class="php-email-form">
                        <div class="row gy-4">

                            <div class="col-md-6">
                            <input type="text" name="name" class="form-control" placeholder="Nome" required/>
                            </div>

                            <div class="col-md-6 ">
                            <input type="email" class="form-control" name="email" placeholder="Email" required/>
                            </div>

                            <div class="col-md-6">
                            <input type="text" class="form-control" name="subject" placeholder="Empresa" required/>
                            </div>

                            <div class="col-md-6">
                            <input type="text" class="form-control" name="subject" placeholder="CNPJ" required/>
                            </div>

                            <div class="col-md-12">
                            <input type="text" class="form-control" name="subject" placeholder="Assunto" required/>
                            </div>


                            <div class="col-md-12">
                            <textarea class="form-control" name="message" rows="6" placeholder="Mensagem" required></textarea>
                            </div>
                            <button type="submit">Enviar Mensagem</button>
                            <div class="col-md-12 text-center">
                            <div class="loading">Carregando</div>
                            <div class="error-message"></div>
                            <div class="sent-message">Sua mensagem foi enviada. Obrigado!</div>

                            
                            </div>

                        </div>
                        </form>

                    </div>

                    </div>

                </div>

            </section>
            
        </>
     )
    }
}

export default Contact