import React from "react";

class Hero extends React.Component{
    render () {
        return(
            <>
            <section id="hero" class="hero d-flex align-items-center">

                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 d-flex flex-column justify-content-center">
                        <h1 data-aos="fade-up" class="aos-init aos-animate">Evite multas e autuações</h1>
                        <h2 data-aos="fade-up" data-aos-delay="400" class="aos-init aos-animate">Deixe que a SefazNacional protege seu negócio pra você</h2>
                        <div data-aos="fade-up" data-aos-delay="600" class="aos-init aos-animate">
                            <div class="text-center text-lg-start">
                            <a href="#about" class="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center">
                                <span>Mais</span>
                                <i class="bi bi-arrow-right"></i>
                            </a>
                            </div>
                        </div>
                        </div>
                        <div class="col-lg-6 hero-img aos-init aos-animate" data-aos="zoom-out" data-aos-delay="200">
                        <img src="assets/img/fluxograma1.jpg" class="img-fluid" alt=""/>
                        </div>
                    </div>
                </div>

            </section>
            </>
        
     )
    }
}

export default Hero