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

        }else if(!(e.getNome().matches("[A-Z][a-zA-Z']*\s[A-Z][a-zA-Z']*"))){
            r.setMensagem("Os nomes devem começar com letra maiúscula!");
            return new ResponseEntity<Resposta>(r, HttpStatus.BAD_REQUEST);

        }else if(e.getNomeUsuario().equals("")){
            r.setMensagem("O nome de usuário é obrigatório!");
            return new ResponseEntity<>(r, HttpStatus.BAD_REQUEST);
        } else if(er.countByNomeUsuario(e.getNomeUsuario()) == 1){
            r.setMensagem("O nome de usuário já existe!");
            return new ResponseEntity<>(r, HttpStatus.BAD_REQUEST);
        }else if(e.getIdade() < 0){
            r.setMensagem("Informe uma idade válida!");
            return new ResponseEntity<>(r, HttpStatus.BAD_REQUEST);
        }else if(e.getTelefone().length() < 11 || e.getTelefone().length() > 11 ){
            r.setMensagem("Informe um telefone válido!");
            return new ResponseEntity<>(r, HttpStatus.BAD_REQUEST);
        }else if(e.getEmail().equals("")){
            r.setMensagem("O email é obrigatório!");
            return new ResponseEntity<>(r, HttpStatus.BAD_REQUEST);
        }else if(er.countByEmail(e.getEmail()) == 1){
            r.setMensagem("Esse email já foi cadastrado!");//trocar por causa do @email
            return new ResponseEntity<>(r, HttpStatus.BAD_REQUEST);

        }else if(!(e.getSenha().matches("/^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/"))){
            r.setMensagem("Sua senha precisa ter pelo menos 8 caracteres, uma letra minúscula, uma letra maiúscula e um número!");
            return new ResponseEntity<>(r, HttpStatus.BAD_REQUEST);

        }else if(e.getCidade().equals("")){
            r.setMensagem("A cidade é obrigatória!");
            return new ResponseEntity<>(r, HttpStatus.BAD_REQUEST);
        }else{
            return new ResponseEntity<>(er.save(e), HttpStatus.CREATED);
        }

    }

    // método para editar estudantes
    public ResponseEntity<?> editar(Estudante e){

        if(e.getNome().equals("")){
            r.setMensagem("O nome é obrigatório!");
            return new ResponseEntity<>(r, HttpStatus.BAD_REQUEST);
        }else if(e.getNomeUsuario().equals("")){
            r.setMensagem("O nome de usuário é obrigatório!");
            return new ResponseEntity<>(r, HttpStatus.BAD_REQUEST);

        }else if(e.getIdade() < 0 || !(e.getIdade().toString().matches("[0-9]{1,3}"))){
            r.setMensagem("Informe uma idade válida!");
            return new ResponseEntity<>(r, HttpStatus.BAD_REQUEST);

        }else if(e.getTelefone().length() < 11 || e.getTelefone().length() > 11 ){
            r.setMensagem("Informe um telefone válido!");
            return new ResponseEntity<>(r, HttpStatus.BAD_REQUEST);
        }else if(e.getEmail().equals("")){
            r.setMensagem("O email é obrigatório!");
            return new ResponseEntity<>(r, HttpStatus.BAD_REQUEST);

        }else if(e.getSenha().equals("") || e.getSenha().length() > 8){
            r.setMensagem("A senha precisa ter entre 1 e 8 caracteres!");
            return new ResponseEntity<>(r, HttpStatus.BAD_REQUEST);

        } else if(!(e.getSenha().matches("/^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/"))){
            r.setMensagem("Sua senha precia conter pelo menos uma letra maiúscula, uma letra minúscula e um número!");
            return new ResponseEntity<>(r, HttpStatus.BAD_REQUEST);
        }
        else if(e.getCidade().equals("")){
            r.setMensagem("A cidade é obrigatória!");
            return new ResponseEntity<>(r, HttpStatus.BAD_REQUEST);
        }else{
            return new ResponseEntity<>(er.save(e), HttpStatus.OK);
        }

    }

}
