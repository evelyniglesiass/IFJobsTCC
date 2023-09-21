package br.com.api.ifjobs.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import br.com.api.ifjobs.models.Empresa;
import br.com.api.ifjobs.models.Resposta;
import br.com.api.ifjobs.repository.EmpresaRepository;

@Service
public class EmpresaService {
    
    @Autowired
    private EmpresaRepository empRep;

    @Autowired
    private Resposta r;

    //Método de listagem de empresas
    public Iterable<Empresa> listar(){
        return empRep.findAll();
    }

    //Método para cadastrar empresas
    public ResponseEntity<?> cadastrar(Empresa e){
        
        //Verificando campos nulos
        if(e.getNome().equals("")){ 
            r.setMensagem("O nome é obrigatório!");
            return new ResponseEntity<Resposta>(r, HttpStatus.BAD_REQUEST);

        } else if(e.getNomeUsuario().equals("")){
            r.setMensagem("O nome de usuário é obrigatório!");
            return new ResponseEntity<Resposta>(r, HttpStatus.BAD_REQUEST);
        
        } else if(empRep.countByNomeUsuario(e.getNomeUsuario()) == 1){
            r.setMensagem("O nome de usuário já existe!");
            return new ResponseEntity<>(r, HttpStatus.BAD_REQUEST);

        } else if(e.getEmail().equals("")){
            r.setMensagem("O email é obrigatório!");
            return new ResponseEntity<Resposta>(r, HttpStatus.BAD_REQUEST);

        } else if(e.getSenha().equals("")){
            r.setMensagem("A senha é obrigatória!");
            return new ResponseEntity<Resposta>(r, HttpStatus.BAD_REQUEST);


        }else if(!(e.getSenha().matches("^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9a-zA-Z]).{8,}$"))){
            r.setMensagem("Sua senha precisa ter pelo menos 8 caracteres, uma letra minúscula, uma letra maiúscula e um número!");
            return new ResponseEntity<Resposta>(r, HttpStatus.BAD_REQUEST);

        } else if(e.getTelefone().equals("")){
            r.setMensagem("O telefone é obrigatório!");
            return new ResponseEntity<Resposta>(r, HttpStatus.BAD_REQUEST);
        
        } else if(e.getTelefone().toString().length() < 11 || e.getTelefone().toString().length() > 11){
            r.setMensagem("Insira todos os dígitos de seu telefone!");
            return new ResponseEntity<Resposta>(r, HttpStatus.BAD_REQUEST);

        } else if(e.getCidade().equals("")){
            r.setMensagem("A cidade é obrigatória!");
            return new ResponseEntity<Resposta>(r, HttpStatus.BAD_REQUEST);

        //Salvando empresa
        } else{
            return new ResponseEntity<Empresa>(empRep.save(e), HttpStatus.CREATED);
        }
    }

    //Método para editar empresas
    public ResponseEntity<?> editar(Empresa e){
        
        //Verificando campos nulos
        if(e.getNome().equals("")){ 
            r.setMensagem("O nome é obrigatório!");
            return new ResponseEntity<Resposta>(r, HttpStatus.BAD_REQUEST);

        } else if(e.getNomeUsuario().equals("")){
            r.setMensagem("O nome de usuário é obrigatório!");
            return new ResponseEntity<Resposta>(r, HttpStatus.BAD_REQUEST);
        
        } else if(empRep.countByNomeUsuario(e.getNomeUsuario()) == 1){
            r.setMensagem("O nome de usuário já existe!");
            return new ResponseEntity<>(r, HttpStatus.BAD_REQUEST);

        } else if(e.getEmail().equals("")){
            r.setMensagem("O email é obrigatório!");
            return new ResponseEntity<Resposta>(r, HttpStatus.BAD_REQUEST);

        } else if(e.getSenha().equals("")){
            r.setMensagem("A senha é obrigatória!");
            return new ResponseEntity<Resposta>(r, HttpStatus.BAD_REQUEST);


        }else if(!(e.getSenha().matches("^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9a-zA-Z]).{8,}$"))){
            r.setMensagem("Sua senha precisa ter pelo menos 8 caracteres, uma letra minúscula, uma letra maiúscula e um número!");
            return new ResponseEntity<Resposta>(r, HttpStatus.BAD_REQUEST);

        } else if(e.getTelefone().equals("")){
            r.setMensagem("O telefone é obrigatório!");
            return new ResponseEntity<Resposta>(r, HttpStatus.BAD_REQUEST);
        
        } else if(e.getTelefone().toString().length() < 11 || e.getTelefone().toString().length() > 11){
            r.setMensagem("Insira todos os dígitos de seu telefone!");
            return new ResponseEntity<Resposta>(r, HttpStatus.BAD_REQUEST);

        } else if(e.getCidade().equals("")){
            r.setMensagem("A cidade é obrigatória!");
            return new ResponseEntity<Resposta>(r, HttpStatus.BAD_REQUEST);

        //Salvando empresa
        } else{
            return new ResponseEntity<Empresa>(empRep.save(e), HttpStatus.OK);
        }
    }

    //Método para remover empresa
    public ResponseEntity<Resposta> remover(int id) {
        
        if(empRep.countById(id) == 0){
            r.setMensagem("O id informado não existe!");
            return new ResponseEntity<>(r, HttpStatus.NOT_FOUND);

        } else{
            Empresa emp = empRep.findById(id);
            empRep.delete(emp);
            r.setMensagem("Empresa removida com sucesso!");
            return new ResponseEntity<>(r, HttpStatus.OK);

        }
    }
}
