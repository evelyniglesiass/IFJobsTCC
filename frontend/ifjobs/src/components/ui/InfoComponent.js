import '../../App.scss';

// Component com informações na tela de login
const InfoComponent = () => {
 
  return (
    <div className='container-info accordion'>
        <section class="accordion-item">
            <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accordionUm" aria-expanded="false" aria-controls="panelsStayOpen-collapseOne">
                    Sobre o site
                </button>
            </h2>
            <article id="accordionUm" class="accordion-collapse collapse">
                <div class="accordion-body">
                    <p> O foco principal desse site é proporcionar a você, estudantes do IFSul Câmpus Sapucaia do Sul, uma ferramenta simples e 
                        personalizada às necessidades específicas apresentadas pelo nosso câmpus. Aqui você pode encontrar vagas de estágio referentes 
                        ao seu cursos de maneira mais prática, além de te prover com dicas durante o preenchimento do currículo que estará 
                        presente em seu perfil. Isso aprimorará o processo de divulgação de vagas já existente em nossa escola e proporcionará aos estudantes 
                        e às empresas uma experiência de candidatura a vagas mais agradável e amena, visto que as concentra juntamente com o 
                        perfil de cada estudante em um só lugar!
                    </p>
                </div>
            </article>
        </section>
        <section class="accordion-item">
            <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accordionDois" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                    Sobre o IFSul Sapucaia
                </button>
            </h2>
            <article id="accordionDois" class="accordion-collapse collapse">
                <div class="accordion-body">
                    <p>O Câmpus Sapucaia do Sul foi o primeiro do Instituto Federal Sul-rio-grandense estabelecido fora da cidade de Pelotas. 
                        Suas atividades começaram em 26 de fevereiro de 1996, quando era uma Unidade de Ensino Descentralizada (Uned) da então
                         Escola Técnica Federal de Pelotas. Em 1999, foi transformado em Centro Federal de Educação Tecnológica (Cefet) e em 
                         2008, foi oficializado como câmpus do Instituto Federal de Educação, Ciência e Tecnologia Sul-Rio-Grandense (IFSul).
                         A comunidade acadêmica é formada por cerca de 1400 estudantes, 50 servidores técnico-administrativos e 90 docentes, 
                         além de 29 servidores terceirizados. 
                    </p>                
                </div>
            </article>
        </section>
        <section class="accordion-item">
            <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accordionTres" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                    Sobre os cursos do IFSul
                </button>
            </h2>
            <article id="accordionTres" class="accordion-collapse collapse">
                <div class="accordion-body">
                    <p>Possui oferta de quatro cursos técnicos integrados ao ensino médio: Eventos, Desenvolvimento de Sistemas, 
                        Plásticos e Mecânica, além do Técnico em Administração (ofertado na modalidade EJA). Possui ainda dois 
                        cursos de graduação, em Engenharia Mecânica e em Análise e Desenvolvimento de Sistemas, e uma pós-graduação, 
                        a Especialização em Educação.
                    </p>
                </div>
            </article>
        </section>
    </div>
  )
}

export default InfoComponent