import './HomeContent.css'

function HomeContent(){
    
    return(
        <>
            <section className="quemSomos">
                <div className="quemSomos-card">
                    <h1>Bem-vindo ao Posso Dispensar?</h1>
                    <p className="quemSomos-card-p">Um guia prático para farmacêuticos e atendentes, com dicas e orientações para uma dispensação segura e responsável de medicamentos. Aqui, você encontra informações valiosas, ferramentas como nossa calculadora de posologia, e apoio para tomar decisões no balcão.</p>
                </div>
            </section>
            <section className="calculadoraHome">
                <div>
                    <img className= "calculadora-img" src="/imagens/Farmaceutico.webp" alt="Farmaceutico fazendo o calculo da posologia"></img>
                </div>
                <div className="calculadora-contend">
                    <div className="calculadora-card">
                        <p>Ajuste a dosagem de forma prática e segura! Com nossa calculadora de posologia, você pode determinar a dose ideal em segundos, garantindo precisão no atendimento farmacêutico.</p>
                    </div>
                    <div className="calculadoraHome-anchor">
                        <a className="calculadoraHome-anchor-a" href="/calculadora">Acesse a nossa calculadora</a>
                    </div>
                </div>
            </section>
            <section className="novidade">

            </section>
            <section className="faq">
            </section>
        </>
    )
}

export default HomeContent;