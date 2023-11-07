import '../../App.scss';

// Component para cadastro de empresas
const CadastrarVagaComponent = () => {
  return (
    <div className='container-cadastro'>

        <h3>Seja bem-vindo!</h3>

        <form>
            <div class="txt-form-group"> 
                <input type="text" class="form-control" id="titulo" placeholder="Título" />
            </div>

            <div class="txt-form-group"> 
                <input type="text" class="form-control" id="cidade-vaga" placeholder="Cidade" />
            </div>

            <div class="txt-form-group"> 
                <textarea type="text" class="form-control" id="descricao-vaga" placeholder="Descrição" />
            </div>

            <div class="txt-form-group"> 
                <input type="number" class="form-control" id="salario" placeholder="Salário" />
            </div>

            <div class="txt-form-group"> 
                <input type="number" class="form-control" id="idade" placeholder="Idade" />
            </div>
            
            <button type="submit" class="txt btn btn-primary">Cadastrar</button>
        </form>

    </div> 
  )
}
export default CadastrarVagaComponent