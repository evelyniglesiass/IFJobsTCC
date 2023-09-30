package br.com.api.ifjobs.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import br.com.api.ifjobs.models.Empresa;
import br.com.api.ifjobs.models.Resposta;
import br.com.api.ifjobs.repository.EmpresaRepository;

@Service
public class EmpresaService {
    
    @Autowired
    private EmpresaRepository empRep;

    @Autowired
    private Resposta r;

    @Autowired
    private SenhaService ss;
    

    //Método de listagem de empresas
    public Iterable<Empresa> listar(){
        return empRep.findAll();
    }

    //Método para cadastrar empresas
    public ResponseEntity<?> cadastrar(Empresa e){
        //pegando senha para validação
        ss.setSenha(e.getSenha()); 
        
        if(empRep.countByNomeUsuario(e.getNomeUsuario()) == 1){
            r.setMensagem("O nome de usuário já existe!");
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, r.getMensagem());

        }else if(!ss.verificarSenha(ss.getSenha())){
            r.setMensagem("Sua senha precisa ter pelo menos 8 caracteres, uma letra minúscula, uma letra maiúscula e um número!");
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, r.getMensagem());
        
        }else if(empRep.countByEmail(e.getEmail()) == 1){
            r.setMensagem("Esse email já foi cadastrado!");
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, r.getMensagem());

        } else{
            r.setMensagem("Cadastro feito com sucesso!");
            return new ResponseEntity<Empresa>(empRep.save(e), HttpStatus.CREATED);
        }
    }

    //Método para editar empresas
    public ResponseEntity<?> editar(Empresa e){
        //pegando senha para validação
        ss.setSenha(e.getSenha()); 
        
        if(!(empRep.existsById(e.getId()))){
            r.setMensagem("Usuário não encontrado!");
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, r.getMensagem());

        } else if(empRep.countByNomeUsuario(e.getNomeUsuario()) == 1){
            r.setMensagem("O nome de usuário já existe!");
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, r.getMensagem());

        } else if(!ss.verificarSenha(ss.getSenha())){
            r.setMensagem("Sua senha precisa ter pelo menos 8 caracteres, uma letra minúscula, uma letra maiúscula e um número!");
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, r.getMensagem());

        } else if(e.getTelefone().toString().length() < 11 || e.getTelefone().toString().length() > 11){
            r.setMensagem("Insira todos os dígitos de seu telefone!");
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, r.getMensagem());

        } else{
            r.setMensagem("Edição feita com sucesso!");
            return new ResponseEntity<Empresa>(empRep.save(e), HttpStatus.OK);
        }
    }

    //Método para remover empresa
    public ResponseEntity<Resposta> remover(int id) {
        
        if(!(empRep.existsById(id))){
            r.setMensagem("Usuário não encontrado!");
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, r.getMensagem());

        } else{
            Empresa emp = empRep.findById(id);
            empRep.delete(emp);
            r.setMensagem("Empresa removida com sucesso!");
            return new ResponseEntity<>(r, HttpStatus.OK);

        }
    }
}
