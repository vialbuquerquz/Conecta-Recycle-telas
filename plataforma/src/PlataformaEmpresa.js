import './Plataforma.css';

function PlataformaEmpresa(){
    return(
        <div>
            <div>
                <img className="menubento" 
                    src="https://github.com/MateusAbdias/imagensConectaRecycle/blob/main/plataforma/147ec461-cdc1-49ba-98cb-ad7e9b120732.png?raw=true">
                </img>

                <img className="logo" 
                    src="https://github.com/MateusAbdias/imagensConectaRecycle/blob/main/logo.png?raw=true">
                </img>

                <img className="notificacion" 
                    src="https://github.com/MateusAbdias/imagensConectaRecycle/blob/main/plataforma/61b07a6c-d831-4451-abf5-d8a9fb83e678.png?raw=true">
                </img>
            </div>
                <h1 className="titulo">Bem vindo Culture Fest</h1>
                <p> O que você deseja fazer hoje? </p>
                    <div>
                        <button className="validar">
                            <font color="#ffffff">
                                <p>Validar<br></br> descarte </p>
                            </font>
                        </button>  
                    </div>

                    <div>
                        <button className="vouchers">
                            <font color="#ffffff">
                                <p>Meus <br></br> vouchers </p>
                            </font>
                        </button>  
                    </div>

                    <div>
                        <button className="certificado">
                            <font color="#ffffff">
                                <p>Solicitação de <br></br> certificado de <br></br> participação</p>
                            </font>
                        </button>  
                    </div>

                    <div>
                        <button className="coleta">
                            <font color="#ffffff">
                                <p>Solicitar <br></br> coleta</p>
                            </font>
                        </button>  
                    </div>

                    <div>
                        <button className="cadastrar">
                                <font color="#ffffff">
                                    <p>Cadastrar <br></br> ponto de coleta</p>
                                </font>
                        </button>
                    </div>

                    <div>
                        <button className="evento">
                                <font color="#ffffff">
                                    <p>Informe <br></br> um evento</p>
                                </font>
                        </button>
                    </div>

                    <div>
                        <button className="consultoria">
                                <font color="#ffffff">
                                    <p>Solicitar<br></br> consultoria</p>
                                </font>
                        </button>
                    </div>

                    <div>
                        <button className="revisao">
                                <font color="#ffffff">
                                    <p>Solicitar <br></br>revisão de PEV</p>
                                </font>
                        </button>
                    </div>
        </div>


    )
}

export default PlataformaEmpresa