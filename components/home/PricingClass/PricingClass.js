import React from "react";

class PricingClass  extends React.Component{
    render () {
        return(
        <>
            <section id="pricing" class="pricing">
                
                <div class="container aos-init aos-animate" data-aos="fade-up">

                    <header class="section-header">
                        <h2>Temos planos especiais para escritórios de contabilidade</h2>
                        <p>Confira nossos preços</p>
                    </header>

                    <div class="row gy-4 aos-init aos-animate" data-aos="fade-left">

                        <div class="col-lg-4 col-md-6 aos-init aos-animate" data-aos="zoom-in" data-aos-delay="100">
                            <div class="box">
                                <h3 style={{color: "#07d5c0"}}>Semanal - Free nos primeiros 2 meses</h3>
                                <div class="price"><sup>R$</sup>10<span> / mês</span></div>
                                <img src="/assets/img/pricing-free.png" class="img-fluid" alt="" />
                                <ul>
                                    <li>01 Consulta semanal para 1 CNPJ</li>
                                    <li>01 Estado/UF</li> 
                                    <li>Reports por e-mail e SMS</li>
                                    <li>Suporte horário comercial</li>
                                
                                </ul>
                                <a href="#" class="btn-buy">Compre agora</a>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6 aos-init aos-animate" data-aos="zoom-in" data-aos-delay="200">
                            <div class="box">

                                <h3 style={{color: "#65c600"}}>Diário</h3>
                                <div class="price"><sup>R$</sup>30<span> / mês </span></div>
                                <img src="/assets/img/pricing-starter.png" class="img-fluid" alt="" />
                                <ul>
                                    <li>01 Consulta diária para 1 CNPJ</li>
                                    <li>01 Estado(UF)</li> 
                                    <li>Reports por e-mail e SMS</li>
                                    <li>Suporte horário comercial</li>
                                </ul>
                                <a href="#" class="btn-buy">Compre agora</a>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6 aos-init aos-animate" data-aos="zoom-in" data-aos-delay="300">
                            <div class="box">
                                <span class="featured">Melhor Plano</span>
                                <h3 style={{color: "#ff901c"}}>Diário - Contabilidade</h3>
                                <div class="price"><sup>R$</sup>10<span> / CNPJ (acima de 10)</span></div>
                                <img src="/assets/img/pricing-business.png" class="img-fluid" alt="" />
                                <ul>
                                    <li>01 Consulta diária até 05 CNPJ</li>
                                    <li>01 Estado(UF)</li> 
                                    <li>Reports por e-mail e SMS</li>
                                    <li>Suporte horário comercial</li>
                                </ul>
                                <a href="#" class="btn-buy">Compre agora</a>
                            </div>
                        </div>

                        

                    </div>

                    {/* <div class="row gy-4 aos-init aos-animate" data-aos="fade-left">

                        <div class="col-lg-4 col-md-6 aos-init aos-animate" data-aos="zoom-in" data-aos-delay="100">
                            <div class="box">
                                <h3 style={{color: "#07d5c0"}}>Quinzenal</h3>
                                <div class="price"><sup>R$</sup>30<span> / mês</span></div>
                                <img src="/assets/img/pricing-free.png" class="img-fluid" alt="" />
                                <ul>
                                    <li>01 Consulta quinzenal para 1 CNPJ</li>
                                    <li>01 Estado/UF</li> 
                                    <li>Reports por e-mail e SMS</li>
                                    <li>Suporte horário comercial</li>
                                
                                </ul>
                                <a href="#" class="btn-buy">Compre agora</a>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6 aos-init aos-animate" data-aos="zoom-in" data-aos-delay="200">
                            <div class="box">

                                <h3 style={{color: "#65c600"}}>Semanal</h3>
                                <div class="price"><sup>R$</sup>50<span> / mês </span></div>
                                <img src="/assets/img/pricing-starter.png" class="img-fluid" alt="" />
                                <ul>
                                    <li>01 Consulta semanal para 1 CNPJ</li>
                                    <li>01 Estado(UF)</li> 
                                    <li>Reports por e-mail e SMS</li>
                                    <li>Suporte horário comercial</li>
                                </ul>
                                <a href="#" class="btn-buy">Compre agora</a>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6 aos-init aos-animate" data-aos="zoom-in" data-aos-delay="300">
                            <div class="box">
                                <span class="featured">Melhor Plano</span>
                                <h3 style={{color: "#ff901c"}}>Diário</h3>
                                <div class="price"><sup>$</sup>100<span> / mês</span></div>
                                <img src="/assets/img/pricing-business.png" class="img-fluid" alt="" />
                                <ul>
                                    <li>01 Consulta diária para 1 CNPJ</li>
                                    <li>01 Estado(UF)</li> 
                                    <li>Reports por e-mail e SMS</li>
                                    <li>Suporte horário comercial</li>
                                </ul>
                                <a href="#" class="btn-buy">Compre agora</a>
                            </div>
                        </div>

                        

                    </div> */}


                    {/* <div class="row gy-4 aos-init aos-animate" data-aos="fade-left">

                        <div class="col-lg-4 col-md-6 aos-init aos-animate" data-aos="zoom-in" data-aos-delay="100">
                            <div class="box">
                                <h3 style={{color: "#07d5c0"}}>Filiais</h3>
                                <div class="price"><sup>R$</sup>175<span> / mês</span></div>
                                <img src="/assets/img/pricing-filial.png" class="img-fluid" alt="" />
                                <ul>
                                    <li>2 - Consultas diárias e 2 CNPJ's</li>
                                    <li>02 Estados(UF)</li>
                                    <li>Reports por e-mail e SMS</li>
                                    <li>Suporte horário comercial</li>
                                </ul>
                                <a href="#" class="btn-buy">Compre agora</a>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6 aos-init aos-animate" data-aos="zoom-in" data-aos-delay="200">
                            <div class="box">

                                <h3 style={{color: "#65c600"}}>Bussiness</h3>
                                <div class="price"><sup>R$</sup>350<span> / mês </span></div>
                                <img src="/assets/img/pricing_filial_bussiness.png" class="img-fluid" alt="" />
                                <ul>
                                    <li>5 - Consultas diárias e 5 CNPJ's</li>
                                    <li>03 Estados(UF)</li>
                                    <li>Reports por e-mail e SMS</li>
                                    <li>Suporte horário comercial</li>
                                    <li>4hs de suporte extendido</li>
                                </ul>
                                <a href="#" class="btn-buy">Compre agora</a>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6 aos-init aos-animate" data-aos="zoom-in" data-aos-delay="300">
                            <div class="box">
                                <span class="featured">Ultimate</span>
                                <h3 style={{color: "#ff901c"}}>Ultimate</h3>
                                <div class="price"><sup>R$</sup>850<span> / mês</span></div>
                                <img src="/assets/img/pricing-ultimate.png" class="img-fluid" alt="" />
                                <ul>
                                    <li>15 - Consultas diárias e 15 CNPJ's</li>
                                    <li>05 Estados(UF)</li>
                                    <li>Reports por e-mail e SMS</li>
                                    <li>Suporte horário comercial</li>
                                    <li>8hs de suporte extendido</li>
                                    
                                </ul>
                                <a href="#" class="btn-buy">Compre agora</a>
                            </div>
                        </div>
                        
                    </div> */}

                </div>

            </section>
        </>
     )
    }
}

export default PricingClass;
