import './CalculadoraContent.css'
import { useState } from 'react';



function CalculadoraContent(){
  
  const [forma, setForma] = useState("");
  const [densidade, setDensidade] = useState("")
  const [horario, sethorario] = useState("");
  const [value, setValue] = useState("");
  const [periodo, setPeriodo] = useState("");
  const [resposta, setResposta] = useState("***");
  const [isGotas, setIsGotas] = useState(false);
 
  const handleSubmit = (e) => {
    
    
    
    e.preventDefault(); 
    console.log(forma, horario, value);
    
    if (forma === 'comprimido') {
      const numero = horario*value*periodo;
      const string = `O paciente precisará de ${numero} ${forma}(s)`;
      setResposta(string);
    }
    
    if (forma === 'gota') {
      setDensidade(true);
      const numero = (horario*value*periodo)/(densidade);
      const string = `O paciente precisará de ${numero} mL`;
      setResposta(string);
    }
    
    if (forma === 'solucao') {
      const numero = horario*value*periodo;
      const string = `O paciente precisará de ${numero} mL`;
      setResposta(string);
    }
    
    setForma("");
    setValue("");
    sethorario("");
    setPeriodo("");
    setDensidade("");
    setIsGotas(false);
  }


  const handleFirstSelectChange = (e) => {

    const value = e.target.value;
    setForma(value);

    if (value === 'gota') {
      setIsGotas(true);
    } else {
      setIsGotas(false);
    }

  }

  const onButtonClick = (e) => {
    e.preventDefault();

    window.open('./densidade', '_blank', 'noopener')
}
  
  return(
    <div className="principal">
            <h1 className='principal-titulo'>Calculadora de posologia</h1>
            <hr className="principal-hr"></hr>
            <section className="calculadora">
                <form action="" method="get" className="calculadora-form" onSubmit={handleSubmit}>

                    <div className="calculadora-form">
                      <label className="calculadora-form-label" htmlFor="formaFarmaceutica">Selecione a forma farmacêutica:</label>
                      <select value= {forma} id="formaFarmaceutica" name="formaFarmaceutica" onChange={handleFirstSelectChange}>
                        <option value="">-</option>
                        <option  value="comprimido">Comprimido</option>
                        <option value="solucao">Solução</option>
                        <option value="gota">Gotas</option>
                      </select>
                    </div>

                    <div className="calculadora-form">
                      <label htmlFor="horario" className="calculadora-form-label">Selecione o horário:</label>
                      <select value= {horario} id="horario" name="horario" onChange={(e) => {sethorario(e.target.value)}}>
                        <option value="">-</option>
                        <option value="1">01 vez ao dia</option>
                        <option value="2">12 em 12 horas</option>
                        <option value="3">08 em 08 horas</option>
                        <option value="4">06 em 06 horas</option>
                        <option value="5">04 em 04 horas</option>
                        <option value="6">02 em 02 horas</option>
                      </select>
                    </div>
                    
                    <div className="calculadora-form">
                      <label className="calculadora-form-label" htmlFor="densidade">Selecione a densidade: </label>
                      <select disabled = {!isGotas} value= {densidade} id="densidade" name="densidade" onChange={(e) => setDensidade(e.target.value)}>
                          <option value="">-</option>
                          <option value="20">1 ml = 20 gotas</option>
                          <option value="22">1 ml = 22 gotas</option>
                          <option value="25">1 ml = 25 gotas</option>
                          <option value="30">1 ml = 30 gotas</option>
                          <option value="33">1 ml = 33 gotas</option>
                          <option value="40">1 ml = 40 gotas</option>
                      </select>
                      <button onClick={onButtonClick} disabled = {!isGotas} className='calculadora-form-button'>Verifique a tabela de conversão</button>
                    </div>

                    <div className="calculadora-form">
                      <label htmlFor="numero" className="calculadora-form-label">Digite a quantidade (cp/mL/gotas): </label>
                      <input value= {value} type="number" name="numero" id="numero" onChange={(e) => setValue(e.target.value)}/>
                    </div>


                    <div className="calculadora-form">
                      <label htmlFor="numero" className="calculadora-form-label">Digite o período (dias): </label>
                      <input value= {periodo} type="number" name="numero" id="numero" onChange={(e) => setPeriodo(e.target.value)}/>
                    </div>

                    <div className="calculadora-form">
                      <input className="calculadora-form-input" type="submit" value="Calcule!" />
                    </div>
                    <div>
                      <h1 className='calculadora-resposta'>{resposta}</h1>
                  </div>
                  </form>
            </section>
        </div>
    )
}

export default CalculadoraContent;