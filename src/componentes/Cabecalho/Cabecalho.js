import './Cabecalho.css'

function Cabecalho(){
    return(
    <>
        <header className="cabecalho">
            <section className="cabecalho-itens">
                <div className="cabecalho-itens-logo">
                    <img className="cabecalho-itens-imagem" src='./imagens/logo.webp' alt='Logo do posso Dispensar?'></img>
                </div>
                <div className="cabecalho-itens-anchors">
                    <a className="cabecalho-itens-anchors-a" href='/'>Home</a>
                    <a className="cabecalho-itens-anchors-a" href='/lista'>Lista</a>
                    <a className="cabecalho-itens-anchors-a" href='/calculadora'>Calculadora</a>
                    <a className="cabecalho-itens-anchors-a" href='/receitas'>Prescrição</a>
                </div>  
            </section>   
        </header>
    </>
    )
}

export default Cabecalho;