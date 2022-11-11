import React from "react";

class About extends React.Component{
    render () {
        return(
        <>
   
        <section id="about" class="about">

            <div class="container aos-init aos-animate" data-aos="fade-up">
                <div class="row gx-0">

                    <div class="col-lg-6 d-flex flex-column justify-content-center aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
                        <div class="content">
                            <h3>Quem nós somos</h3>
                            <p>A SefazNacional nasceu para auxiliar você a se manter informado sobre qualquer mudança de status junto ao Sefaz do seu estado.<br/>
                                Com isso você fica sabendo antes de potenciais problemas e mantem o seu negócio protegido.
                            </p>
                            <h3>Como Funciona</h3>
                            <p>Você se cadastra no nosso site e nossos bots irão fazer checagens (diária,semanal, mensal) de acordo com a sua necessidade e que cabe no seu bolso.</p>
                            <div class="text-center text-lg-start">
                                <a href="#pricing" class="btn-read-more d-inline-flex align-items-center justify-content-center align-self-center">
                                    <span>Compre já</span>                    <i class="bi bi-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-6 d-flex align-items-center aos-init aos-animate" data-aos="zoom-out" data-aos-delay="200">
                    <img src="assets/img/Fluxograma-de-Processo.jpg" class="img-fluid" alt=""/>
                    </div>

                </div>
            </div>

        </section>
        </>
     )
    }
}

export default About