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
    private EstudanteRepository estRep;    

    @Autowired
    private Resposta r;

    // método para cadastrar estudantes
    public ResponseEntity<?> cadastrar(Estudante e){ 
        
        if(e.getNome().equals("")){
            r.setMensagem("O nome é obrigatório!");
            return new ResponseEntity<>(r, HttpStatus.BAD_REQUEST);

        }else if(e.getIdade() < 0){
            r.setMensagem("Informe uma idade válida!");
            return new ResponseEntity<>(r, HttpStatus.BAD_REQUEST);

        }else if(e.getNomeUsuario().equals("")){
            r.setMensagem("O nome de usuário é obrigatório!");
            return new ResponseEntity<>(r, HttpStatus.BAD_REQUEST);

        }else if(estRep.countByNomeUsuario(e.getNomeUsuario()) == 1){
            r.setMensagem("O nome de usuário já existe!");
            return new ResponseEntity<>(r, HttpStatus.BAD_REQUEST);

        }else if(e.getEmail().equals("")){
            r.setMensagem("O email é obrigatório!");
            return new ResponseEntity<>(r, HttpStatus.BAD_REQUEST);

        }else if(estRep.countByEmail(e.getEmail()) == 1){
            r.setMensagem("Esse email já foi cadastrado!");
            return new ResponseEntity<>(r, HttpStatus.BAD_REQUEST);

        }else if(!(e.getSenha().matches("^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$"))){
            r.setMensagem("Sua senha precisa no mínimo 8 caracteres, uma letra minúscula, uma letra maiúscula e um número!");
            return new ResponseEntity<>(r, HttpStatus.BAD_REQUEST);

        }else if(e.getTelefone().length() < 11 || e.getTelefone().length() > 11){
            r.setMensagem("Informe um telefone válido!");
            return new ResponseEntity<>(r, HttpStatus.BAD_REQUEST);

        }else{
            return new ResponseEntity<>(estRep.save(e), HttpStatus.CREATED);

        }

    }

    // método para editar estudantes
    public ResponseEntity<?> editar(Estudante e){

        if(e.getNome().equals("")){
            r.setMensagem("O nome é obrigatório!");
            return new ResponseEntity<>(r, HttpStatus.BAD_REQUEST);

        }else if(e.getIdade() < 0){
            r.setMensagem("Informe uma idade válida!");
            return new ResponseEntity<>(r, HttpStatus.BAD_REQUEST);

        }else if(e.getNomeUsuario().equals("")){
            r.setMensagem("O nome de usuário é obrigatório!");
            return new ResponseEntity<>(r, HttpStatus.BAD_REQUEST);

        }else if(estRep.existeUsuario(e.getNomeUsuario(), e.getId()) != 0){
            r.setMensagem("O nome de usuário já existe!");
            return new ResponseEntity<>(r, HttpStatus.BAD_REQUEST);

        }else if(e.getEmail().equals("")){
            r.setMensagem("O email é obrigatório!");
            return new ResponseEntity<>(r, HttpStatus.BAD_REQUEST);

        }else if(estRep.existeEmail(e.getEmail(), e.getId()) != 0){
            r.setMensagem("Esse email já foi cadastrado!");
            return new ResponseEntity<>(r, HttpStatus.BAD_REQUEST);

        }else if(!(e.getSenha().matches("^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$"))){
            r.setMensagem("Sua senha precisa ter 8 caracteres, uma letra minúscula, uma letra maiúscula e um número!");
            return new ResponseEntity<>(r, HttpStatus.BAD_REQUEST);

        }else if(e.getTelefone().length() < 11 || e.getTelefone().length() > 11){
            r.setMensagem("Informe um telefone válido!");
            return new ResponseEntity<>(r, HttpStatus.BAD_REQUEST);

        }else{
            return new ResponseEntity<>(estRep.save(e), HttpStatus.OK);

        }
    }

    // método para remover estudante
    public ResponseEntity<Resposta> remover(int id) {
        
        if(estRep.countById(id) == 0){
            r.setMensagem("O id informado não existe!");
            return new ResponseEntity<>(r, HttpStatus.NOT_FOUND);

        }else{
            Estudante est = estRep.findById(id);
            estRep.delete(est);
            r.setMensagem("Estudante removido com sucesso!");
            return new ResponseEntity<>(r, HttpStatus.OK);

        }
    }

}
