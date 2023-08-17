import '../Components/InfoComponent.scss'; 

const InfoComponent = () => {
 
  return (
    <div className='container-info accordion'>
        <div class="accordion-item">
            <h2 class="accordion-header">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#accordionUm" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                    Sobre o site
                </button>
            </h2>
            <div id="accordionUm" class="accordion-collapse collapse show">
                <div class="accordion-body">
                    <p>O IFJobs é um site feito para integrar estudantes e empresas.</p>
                </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accordionDois" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                    Sobre o IFSul
                </button>
            </h2>
            <div id="accordionDois" class="accordion-collapse collapse">
                <div class="accordion-body">
                    <p>O Instituto Federal de Educação, Ciência e Tecnologia Sul-rio-grandense é uma instituição pública federal brasileira, vinculada ao Ministério da Educação, que compõe a Rede Federal de Educação Profissional, Científica e Tecnológica.</p>
                    <p>O Instituto Federal de Educação, Ciência e Tecnologia Sul-rio-grandense é uma instituição pública federal brasileira, vinculada ao Ministério da Educação, que compõe a Rede Federal de Educação Profissional, Científica e Tecnológica.</p>
                </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accordionTres" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                    Cursos
                </button>
            </h2>
            <div id="accordionTres" class="accordion-collapse collapse">
            <div class="accordion-body">
                <p>Temos os cursos Informática, Plasticos, Mecânica e Eventos.</p>
            </div>
            </div>
        </div>
    </div>
  )
}

export default InfoComponent