package br.com.api.ifjobs.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import br.com.api.ifjobs.models.Estudante;
import br.com.api.ifjobs.models.Resposta;
import br.com.api.ifjobs.repository.EstudanteRepository;

@Service
public class EstudanteService {

    @Autowired
    private EstudanteRepository er;

    @Autowired
    private Resposta r;

    // método para cadastrar estudantes
    public ResponseEntity<?> cadastrar(Estudante e){
        
        if(e.getNome().equals("")){
            r.setMensagem("O nome é obrigatório!");
            return new ResponseEntity<>(r, HttpStatus.BAD_REQUEST);
        }else if(e.getNomeUsuario().equals("")){
            r.setMensagem("O nome de usuário é obrigatório!");
            return new ResponseEntity<>(r, HttpStatus.BAD_REQUEST);
        } else if(er.countByNomeUsuario(e.getNomeUsuario()) == 1){
            r.setMensagem("O nome de usuário já existe!");
            return new ResponseEntity<>(r, HttpStatus.BAD_REQUEST);
        }else if(e.getIdade() < 0){
            r.setMensagem("Informe uma idade válida");
            return new ResponseEntity<>(r, HttpStatus.BAD_REQUEST);
        }else if(e.getTelefone().length() < 11 || e.getTelefone().length() > 11 ){
            r.setMensagem("Informe um telefone válido!");
            return new ResponseEntity<>(r, HttpStatus.BAD_REQUEST);
        }else if(e.getEmail().equals("")){
            r.setMensagem("O email é obrigatório!");
            return new ResponseEntity<>(r, HttpStatus.BAD_REQUEST);
        }else if(er.countByEmail(e.getEmail()) == 1){
            r.setMensagem("Esse email já foi cadastrado!");
            return new ResponseEntity<>(r, HttpStatus.BAD_REQUEST);
        }else if(e.getSenha().equals("") || e.getSenha().length() > 8){
            r.setMensagem("A senha precisa ter entre 1 e 8 caracteres!");
            return new ResponseEntity<>(r, HttpStatus.BAD_REQUEST);
        }else if(e.getCidade().equals("")){
            r.setMensagem("A cidade é obrigatória!");
            return new ResponseEntity<>(r, HttpStatus.BAD_REQUEST);
        }else{
            return new ResponseEntity<>(er.save(e), HttpStatus.CREATED);
        }

    }

}
