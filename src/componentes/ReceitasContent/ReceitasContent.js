import "./ReceitasContent.css"

function ReceitasContent(){
    return(
        <>
            <div className="receitas">
                    <h1 className="principal-titulo">Medicamentos sob prescrição</h1>
                    <hr className="principal-hr"></hr>
            </div>
            
                
            <h1 className="receita-title-a">Receita A</h1>

            <div className="receita-alfa">
                <div className="receita-card">
                    <ul>
                        <li>Portaria 344/98;</li>
                        <li>5 ampolas ou tratamento para 30 dias;</li>
                        <li>Um medicamento ou substância;</li>
                        <li>Validade 30 dias;</li>
                        <li>Abrangência Nacional;</li>
                        <li>Talão fornecido pela autoridade sanitária;</li>
                    </ul>
                </div>
                <div>
                    <img className="receita-img" src="./imagens/Receitas/receitaA.png"></img>
                </div>

            </div>

            <h1 className="receita-title-b">Receita B1</h1>
            <section className="receita-beta">
                <div className="receita-card">
                    <ul>
                        <li>Portaria 344/98;</li>
                        <li>5 ampolas ou tratamento para 60 dias;</li>
                        <li>Um medicamento ou substância;</li>
                        <li>Validade 30 dias;</li>
                        <li>Abrangência dentro do Estado do emitente;</li>
                        <li>Talão impresso pelo prescritor. Sequência numérica fornecida pela autoridade sanitária;</li>
                    </ul>
                </div>
                <div>
                    <img className="receita-img" src="./imagens/Receitas/receitaB.png"></img>
                </div>

            </section>
            
            <h1 className="receita-title-a">Receita B2</h1>
            <section className="receita-alfa">
            
                <div className="receita-card">
                    <ul>
                        <li>Portaria 344/98;</li>
                        <li>60 dias para Sibutramina e 30 dias para as demais substâncias;</li>
                        <li>Um medicamento ou substância;</li>
                        <li>Validade 30 dias;</li>
                        <li>Abrangência dentro do Estado do emitente;</li>
                        <li>Talão impresso pelo prescritor. Sequência numérica fornecida pela autoridade sanitária;</li>
                        <li>Deve acompanhar Termo de responsabilidade do prescritor;</li>
                    </ul>
                </div>
                <div>
                    <img className="receita-img" src="./imagens/Receitas/receitaB2.png"></img>
                </div>
            </section>
            {/*
            <section className="receita-text">
                <p>No caso das substâncias constantes da lista B2, a Anvisa publicou a RDC Anvisa nº 58/2007, que dispõe sobre o aperfeiçoamento do controle e fiscalização de substâncias psicotrópicas anorexígenas e dá outras providências.</p>
                <p>Desde então, a prescrição, aviamento ou dispensação de medicamentos ou fórmulas medicamentosas que contenham substâncias psicotrópicas anorexígenas estão sujeitos à Notificação de Receita B2 (Figura 6).</p>
                <p>Tendo em vista a necessidade de atualização do Anexo I da Portaria SVS/MS nº 344/1998 (listas de substâncias entorpecentes, psicotrópicas, precursoras e outras sob controle especial), a Anvisa publicou a RDC nº 13/2010, que remanejou a substância sibutramina da lista C1 para a B2. Desta forma, a venda de medicamentos contendo sibutramina somente poderá ser efetuada mediante apresentação e retenção da Notificação de Receita B2.</p>
                <p>Além das medidas de intenso controle sobre as substâncias constantes da lista B2, já estabelecidas pelas RDC Anvisa nº 58/2007 e 13/2010, a Anvisa publicou a RDC nº 50/2014, que dispõe sobre as medidas de controle de comercialização, prescrição e dispensação de medicamentos que contenham as substâncias anfepramona, femproporex, mazindol e sibutramina, seus sais e isômeros, bem como intermediários e dá outras providências, e a RDC nº 133/2016, que altera a RDC Anvisa nº 50/2014.</p>
                <p> A RDC Anvisa nº 133/2016 veda a prescrição e a dispensação de medicamentos que contenham as substâncias abaixo acima das Doses Diárias Recomendadas (DDR):</p>
                <p> I - Femproporex: 50,0 mg/dia;</p>
                <p>  II - Fentermina: 60,0 mg/dia;</p>
                <p>  III - Anfepramona: 120,0 mg/dia;</p>
                <p>  IV - Mazindol: 3,00 mg/dia;</p>
                <p>  V - Sibutramina: 15,0 mg/dia.</p>
                <p>Além disso, a prescrição dessas substâncias deve estar acompanhada, obrigatoriamente, do Termo de Responsabilidade do Prescritor (Figuras 7 e 8).</p>
                <p>Esse termo deverá ser preenchido pelo prescritor, paciente e farmácia (caso o medicamento seja manipulado) em três vias, sendo que:</p>
                <p>1ª via: deverá ser arquivada no prontuário do paciente;</p>
                <p>  2ª via: deverá ser arquivada na farmácia ou drogaria dispensadora;</p>
                <p>  3ª via: deverá ser mantida com o paciente.</p>
                <p>Conforme a RDC Anvisa nº 133/2016, a Notificação de Receita B2 pode conter a quantidade de medicamento correspondente a, no máximo, 30 dias de tratamento. A sibutramina é a única substância que pode conter a quantidade de medicamento correspondente a, no máximo, 60 dias de tratamento.</p>
            </section>
            */}
            
            <h1 className="receita-title-b">Receita C1</h1>
            <section className="receita-beta">

                <div className="receita-card">
                    <ul>
                        <li>Portaria 344/98;</li>
                        <li>Receituário de Controle Especial em duas vias (Branca)</li>
                        <li>5 ampolas ou tratamento para 60 dias;</li>
                        <li>Antiparkinsoniano e Anticonvulsivante tratamento para 180 dias;</li>
                        <li>Três medicamentos ou substâncias;</li>
                        <li>Validade 30 dias;</li>
                        <li>Abrangência Nacional;</li>
                        <li>Pode também ser prescrito em Receita Comum, desde que contenha todos os dados obrigatórios previstos.;</li>
                        <li>A primeira via é sujeita a retenção;</li>
                    </ul>
                </div>
                <div>
                    <img className="receita-img" src="./imagens/Receitas/receitaBranca.png"></img>
                </div>
            </section>

            <h1 className="receita-title-a">Receita C2</h1>
            <section className="receita-alfa">

                <div className="receita-card">
                    <ul>
                        <li>Portaria 344/98;</li>
                        <li>Notificação de Receita Especial de Retinoides sistêmicos (Branca)</li>
                        <li>5 ampolas ou tratamento para 30 dias;</li>
                        <li>Um medicamento ou substância;</li>
                        <li>Validade de 30 dias ou 7 dias para mulheresem idade fértil;</li>
                        <li>Dentro do Estado emitente;</li>
                        <li>Talão impresso pelo prescritor. Sequência numérica fornecida pela autoridade sanitária;</li>
                        <li>Deve acompanhar Termo de Consentimento Pós-Informação, assinado pelo usuário;</li>
                    </ul>
                </div>
                <div>
                    <img className="receita-img" src="./imagens/Receitas/receitaC2.png"></img>
                </div>
            </section>

            <h1 className="receita-title-b">Receita C5</h1>
            <section className="receita-beta">

                <div className="receita-card">
                    <ul>
                        <li>Portaria 344/98;</li>
                        <li>Receituário de Controle Especial em duas vias (Branca);</li>
                        <li>5 ampolas ou tratamento para 60 dias;</li>
                        <li>Três medicamentos ou substâncias;</li>
                        <li>Validade de 30 dias;</li>
                        <li>Abrangência Nacional;</li>
                        <li>Pode também ser prescrito em Receita Comum, desde que conste todos os dados obrigatórios previstos;</li>
                        <li>As prescrições devem conter também o CPF do prescritor e o CID da doença;</li>
                    </ul>
                </div>
                <div>
                    <img className="receita-img" src="./imagens/Receitas/receitaBranca.png"></img>
                </div>

            </section>

            <h1 className="receita-title-a">Receita Antimicrobianos</h1>
            <section className="receita-alfa">

                <div className="receita-card">
                    <ul>
                        <li>RDC 20/11;</li>
                        <li>Receita em duas vias (sem modelo específico) (Branca);</li>
                        <li>Tratamento para 30 dias;</li>
                        <li>Três medicamentos ou substâncias;</li>
                        <li>Validade de 10 dias;</li>
                        <li>Abrangência Nacional;</li>
                        <li>Em situações de tratamento prolongado, a receita poderá ser utilizada para aquisições posteriores dentro de um período de 90 dias a contar da data de sua emissão</li>
                        <li>As prescrições devem conter também o CPF do prescritor e o CID da doença;</li>
                    </ul>
                </div>
                <div>
                    <img className="receita-img" src="./imagens/Receitas/receitaAntimicrobiano.png"></img>
                </div>
            </section>
            {/* 
            <section className="receita-text">
                <p>O farmacêutico possui papel fundamental na promoção do uso racional de antimicrobianos e deve contribuir no combate às infecções e à resistência bacteriana (CRF-SP, 2011).</p>
                <p>Assim, é essencial que o profissional domine o disposto na RDC Anvisa nº 20/2011, que regulamenta o controle de medicamentos à base de substâncias antimicrobianas.</p>
                <p>Essa resolução é válida para antimicrobianos de uso oral, dermatológico, ginecológico, oftálmico e otorrinolaringológico, incluindo os manipulados, e se aplica a farmácias e drogarias privadas e públicas que disponibilizem medicamentos mediante ressarcimento (ex.: Programa Farmácia Popular do Brasil).</p>
                <p>A prescrição dos medicamentos abrangidos pela RDC Anvisa nº 20/2011 deverá ser realizada por profissionais legalmente habilitados. O receituário deve ser escrito de forma legível, sem rasuras e em duas vias, sendo que:</p>
                <p> <b>1ª via: </b> será devolvida ao paciente com anotação comprovando atendimento;</p>
                <p> <b>2ª via: </b> será retida no estabelecimento farmacêutico.</p>
                <p>Apesar de não existir um modelo de receituário específico para a prescrição de antimicrobianos, a receita deve conter, obrigatoriamente, as informações que constam no modelo apresentado.</p>
                <p>Conforme determina a RDC Anvisa nº 20/2011, a dispensação de antimicrobianos deve atender essencialmente ao que foi prescrito. Nas situações em que não for possível a dispensação da quantidade exata por motivos de inexistência no mercado de apresentação farmacêutica com a quantidade adequada ao tratamento, deve ocorrer a dispensação da quantidade superior mais próxima ao prescrito, de maneira a promover o tratamento completo ao paciente, evitando-se desse modo, a resistência bacteriana e promovendo uma melhor relação risco-benefício para o paciente. </p>
                <p>Em situações de tratamento prolongado, a receita deverá conter a indicação de uso contínuo, com a quantidade a ser utilizada para cada 30 dias. Ela poderá ser usada para aquisições posteriores dentro de um período de 90 dias a contar da data de sua emissão. Assim, cada dispensação deve ser realizada de modo que o medicamento seja suficiente para 30 dias de tratamento no mínimo, sendo também permitida a dispensação de todo medicamento em um único atendimento, ou seja, a venda de toda a quantidade para uso por 90 dias.</p>
                <p>Caso queira comprar a quantidade suficiente para um mês, o paciente poderá realizar todas as compras no mesmo estabelecimento ou em locais diferentes a cada mês. Realizando todas as compras em um mesmo estabelecimento, o farmacêutico deve reter a segunda via da receita no primeiro atendimento e atestar cada dispensação mensal na parte da frente (anverso) de ambas as vias. Se o paciente optar por comprar em outra farmácia ou drogaria, a cada compra o farmacêutico deve conferir que a prescrição é para um tratamento prolongado e que já houve uma venda anterior. Deve então fazer uma cópia da via do paciente e atestar o novo atendimento no anverso de ambas as vias.</p>
                <p>Importante salientar que a receita contendo antimicrobiano poderá conter a prescrição de outras categorias de medicamentos, exceto aqueles sujeitos ao controle da Portaria SVS/MS nº 344/1998.</p>
                <p>A receita é válida em todo o território nacional por dez dias a contar da data de sua emissão. Por fim, não existe previsão na legislação vigente da existência de receituário de emergência para a dispensação de antimicrobianos, devendo a prescrição ser realizada em receituário privativo do prescritor ou de estabelecimento de saúde.</p>
            </section>
            */}
        </>
    )
}

export default ReceitasContent;