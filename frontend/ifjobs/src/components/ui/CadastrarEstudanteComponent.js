import '../../App.scss';

const CadastrarEstudanteComponent = () => {

  return (
    <div className='container-cadastro'>

        <h3>Cadastrar estudante:</h3>
        <form>
            <div class="txt form-group">
                <input type="text" class="form-control" id="nome" placeholder="Nome" />
            </div>
            <div class="txt form-group">
                <input type="text" class="form-control" id="usuario" placeholder="Nome de usuário" />
            </div>
            <div class="txt form-group">
                <input type="text" class="form-control" id="idade" placeholder="Idade" />
            </div>
            <div class="txt form-group">
                <input type="text" class="form-control" id="telefone" placeholder="Telefone" />
            </div>
            <div class="txt form-group">
                <input type="email" class="form-control" id="email" placeholder="E-mail" />
            </div>
            <div class="txt form-group">
                <input type="password" class="form-control" id="senha" placeholder="Senha" />
            </div>
            <div class="txt form-group">
                <input type="text" class="form-control" id="cidade" placeholder="Cidade" />
            </div>
            <button type="submit" class="txt btn btn-primary">Cadastrar</button>
        </form>

    </div> 
  )
}

export default CadastrarEstudanteComponent