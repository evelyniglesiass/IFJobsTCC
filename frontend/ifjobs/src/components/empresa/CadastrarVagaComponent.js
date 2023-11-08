import '../../App.scss';

// Component para cadastro de empresas
const CadastrarVagaComponent = () => {
  return (
    <div className='container-cadastro'>

        <h3>Insira as informações da sua vaga!</h3>

        <form>
            <div class="txt-form-group"> 
                <input type="text" class="form-control" id="titulo-vaga-cadastrar" placeholder="Título" />
            </div>

            <div class="txt-form-group"> 
                <input type="text" class="form-control" id="cidade-vaga" placeholder="Cidade" />
            </div>

            <div class="txt-form-group"> 
                <textarea type="text" class="form-control" id="descricao-vaga-cadastrar" placeholder="Descrição" />
            </div>

            <div class="txt-form-group"> 
                <input type="number" class="form-control" id="salario-cadastrar" placeholder="Salário" />
            </div>

            <div class="txt-form-group"> 
                <input type="number" class="form-control" id="idade-cadastrar" placeholder="Idade" />
            </div>
            
            <button type="submit" class="txt btn btn-primary">Cadastrar</button>
        </form>

    </div> 
  )
}
export default CadastrarVagaComponent