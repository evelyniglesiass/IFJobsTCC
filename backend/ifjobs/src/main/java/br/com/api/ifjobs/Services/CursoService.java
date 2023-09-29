package br.com.api.ifjobs.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import br.com.api.ifjobs.models.Curriculo;
import br.com.api.ifjobs.models.Curso;
import br.com.api.ifjobs.models.Resposta;
import br.com.api.ifjobs.repository.CursoRepository;

@Service
public class CursoService {
    
    @Autowired
    private CursoRepository curRep;

    @Autowired
    private Resposta r;

    //Método de listagem de cursos
    public Iterable<Curso> listar(){
        return curRep.findAll();
    }

    //Método para cadastrar cursos
    public ResponseEntity<?> cadastrar(Curso c, Curriculo cur){
        
        if(c.getDataFinal().compareTo(c.getDataInicial()) < 0){
            r.setMensagem("A data inicial precisa ser anterior a data final!");
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, r.getMensagem());

        } else{
            c.setCurriculo(cur);
            r.setMensagem("Cadastro feito com sucesso!");
            return new ResponseEntity<Curso>(curRep.save(c), HttpStatus.CREATED);
        }
    }

    //Método para editar cursos
    public ResponseEntity<?> editar(Curso c, Curriculo cur){
        
       if(c.getDataFinal().compareTo(c.getDataInicial()) < 0){
            r.setMensagem("A data inicial precisa ser anterior a data final!");
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, r.getMensagem());

        } else{
            c.setCurriculo(cur);
            r.setMensagem("Edição feita com sucesso!");
            return new ResponseEntity<Curso>(curRep.save(c), HttpStatus.OK);
        }
    }

    //Método para remover curso
    public ResponseEntity<Resposta> remover(int id) {
        
        if(curRep.countById(id) == 0){
            r.setMensagem("O id informado não existe!");
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, r.getMensagem());

        } else{
            Curso cur = curRep.findById(id);
            curRep.delete(cur);
            r.setMensagem("Curso removido com sucesso!");
            return new ResponseEntity<>(r, HttpStatus.OK);

        }
    }
}
