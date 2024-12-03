import './ListaContent.css'

const anticonvulsivantes = [
    { Principio: 'Ácido Valpróico/ Valproato de sódio', Referencia:'Depakene', id: 1},
    { Principio: 'Carbamazepina', Referencia:'Tegretol', id: 2},
    { Principio: 'Divalproato de sódio', Referencia:'Depakote', id: 3},
    { Principio: 'Etossuximida', Referencia:'Etoxin', id: 4},
    { Principio: 'Fenitoína', Referencia:'Hidantal', id: 5},
    { Principio: 'Fenobarbital', Referencia:'Gardenal', id: 6},
    { Principio: 'Gabapentina', Referencia:'Neurotin', id: 7},
    { Principio: 'Lacosamida', Referencia:'Vimpat', id: 8},
    { Principio: 'Lamotrigina', Referencia:'Lamictal', id: 9},
    { Principio: 'Oxcarbamazepina', Referencia:'Trileptal', id: 10},
    { Principio: 'Pregabalina', Referencia:'Lyrica', id: 11},
    { Principio: 'Primodona', Referencia:'Primid', id: 12},
    { Principio: 'Topiramato', Referencia:'Topamax', id: 13},
    { Principio: 'Vigabamatrina', Referencia:'Sabil', id: 14},
  ];

  const antiparkinsonianos = [
    { Principio: 'Amantatina', Referencia:'Mantidan', id: 1},
    { Principio: 'Biperideno', Referencia:'Akineton', id: 2},
    { Principio: 'Carbidopa + Levodopa + Entacapona', Referencia:'Stalevo', id: 3},
    { Principio: 'Pergolina', Referencia:'Celance', id: 4},
    { Principio: 'Pramiprexol', Referencia:'Sifrol', id: 5},
    { Principio: 'Selegilina', Referencia:'Jumexil', id: 6},
    { Principio: 'Tolcapone', Referencia:'Tasmar', id: 7},
  ];

function ListaContent(){

    const listaAnticonvulsivantes = anticonvulsivantes.map(anticonvulsivantes =>
        <li key={anticonvulsivantes.id}>
          {anticonvulsivantes.Principio} - <b>{anticonvulsivantes.Referencia}</b>
        </li>
      );
      
    const listaAntiparkinsonianos = antiparkinsonianos.map(antiparkinsonianos =>
        <li key={antiparkinsonianos.id}>
          {antiparkinsonianos.Principio} - <b>{antiparkinsonianos.Referencia}</b>
        </li>
      );
      
    
    return(
        <>
            <h1 className="principal-titulo">lista de medicamentos anticonvulsivantes e antiparkinsonianos </h1>
            <hr className="principal-hr"></hr>
            <section className="principal-cards">
                <section className="principal-card">
                        <div className="principal-card-titulo">
                            <h2>Lista de anticonvulsivantes</h2>
                        </div>
                        <div>
                            <ul className="principal-card-itens">
                                {listaAnticonvulsivantes}
                            </ul>
                        </div>
                </section>
                <section className="principal-card">
                    <div className="principal-card-titulo">
                        <h2>Lista de antiparkinsonianos</h2>
                    </div>
                    <div>
                        <ul className="principal-card-itens">
                            {listaAntiparkinsonianos}
                        </ul>
                    </div>
                </section>
            </section>
        </>
    )
}

export default ListaContent;