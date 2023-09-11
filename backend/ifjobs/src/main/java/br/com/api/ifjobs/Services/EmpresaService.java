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
    private EmpresaRepository er;

    @Autowired
    private Resposta r;

    //Método de listagem de empresas
    public Iterable<Empresa> listar(){
        return er.findAll();
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

        } else if(e.getEmail().equals("")){
            r.setMensagem("O email é obrigatório!");
            return new ResponseEntity<Resposta>(r, HttpStatus.BAD_REQUEST);

        } else if(e.getSenha().equals("")){
            r.setMensagem("A senha é obrigatória!");
            return new ResponseEntity<Resposta>(r, HttpStatus.BAD_REQUEST);

        } else if(e.getTelefone().equals("")){
            r.setMensagem("O telefone é obrigatório!");
            return new ResponseEntity<Resposta>(r, HttpStatus.BAD_REQUEST);

        } else if(e.getCidade().equals("")){
            r.setMensagem("A cidade é obrigatória!");
            return new ResponseEntity<Resposta>(r, HttpStatus.BAD_REQUEST);

        //Salvando empresa
        } else{
            return new ResponseEntity<Empresa>(er.save(e), HttpStatus.CREATED);
        }
    }
}
