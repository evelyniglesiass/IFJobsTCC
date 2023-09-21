package br.com.api.ifjobs.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

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
    public ResponseEntity<?> cadastrar(Curso c){
        
        //Verificando campos nulos
        if(c.getDescricao().equals("")){
            r.setMensagem("A descrição é obrigatória!");
            return new ResponseEntity<Resposta>(r, HttpStatus.BAD_REQUEST);

        } else if(c.getInstituicao().equals("")){
            r.setMensagem("O nome da instituição é obrigatório!");
            return new ResponseEntity<Resposta>(r, HttpStatus.BAD_REQUEST);

        } else if(c.getDataInicial().equals("")){
            r.setMensagem("A data inicial é obrigatória!");
            return new ResponseEntity<Resposta>(r, HttpStatus.BAD_REQUEST);

        } else if(c.getDataFinal().equals("")){
            r.setMensagem("A data final é obrigatória!");
            return new ResponseEntity<Resposta>(r, HttpStatus.BAD_REQUEST);
        
        }else if(c.getDataFinal().compareTo(c.getDataInicial()) < 0){
            r.setMensagem("A data inicial precisa ser anterior a data final!");
            return new ResponseEntity<>(r, HttpStatus.BAD_REQUEST);

        } else if(c.getCidade().equals("")){
            r.setMensagem("O nome da cidade é obrigatório!");
            return new ResponseEntity<Resposta>(r, HttpStatus.BAD_REQUEST);

        } else if(c.getCargaHoraria().equals("")){
            r.setMensagem("A carga horária é obrigatória!");
            return new ResponseEntity<Resposta>(r, HttpStatus.BAD_REQUEST);
        
        //Salvando curso
        } else{
            return new ResponseEntity<Curso>(curRep.save(c), HttpStatus.CREATED);
        }
    }

    //Método para editar cursos
    public ResponseEntity<?> editar(Curso c){
        
        //Verificando campos nulos
        if(c.getDescricao().equals("")){
            r.setMensagem("A descrição é obrigatória!");
            return new ResponseEntity<Resposta>(r, HttpStatus.BAD_REQUEST);

        } else if(c.getInstituicao().equals("")){
            r.setMensagem("O nome da instituição é obrigatório!");
            return new ResponseEntity<Resposta>(r, HttpStatus.BAD_REQUEST);

        } else if(c.getDataInicial().equals("")){
            r.setMensagem("A data inicial é obrigatória!");
            return new ResponseEntity<Resposta>(r, HttpStatus.BAD_REQUEST);

        } else if(c.getDataFinal().equals("")){
            r.setMensagem("A data final é obrigatória!");
            return new ResponseEntity<Resposta>(r, HttpStatus.BAD_REQUEST);
        
        }else if(c.getDataFinal().compareTo(c.getDataInicial()) < 0){
            r.setMensagem("A data inicial precisa ser anterior a data final!");
            return new ResponseEntity<>(r, HttpStatus.BAD_REQUEST);

        } else if(c.getCidade().equals("")){
            r.setMensagem("O nome da cidade é obrigatório!");
            return new ResponseEntity<Resposta>(r, HttpStatus.BAD_REQUEST);

        } else if(c.getCargaHoraria().equals("")){
            r.setMensagem("A carga horária é obrigatória!");
            return new ResponseEntity<Resposta>(r, HttpStatus.BAD_REQUEST);
        
        //Salvando curso
        } else{
            return new ResponseEntity<Curso>(curRep.save(c), HttpStatus.OK);
        }
    }

    //Método para remover curso
    public ResponseEntity<Resposta> remover(int id) {
        
        if(curRep.countById(id) == 0){
            r.setMensagem("O id informado não existe!");
            return new ResponseEntity<>(r, HttpStatus.NOT_FOUND);

        } else{
            Curso cur = curRep.findById(id);
            curRep.delete(cur);
            r.setMensagem("Curso removido com sucesso!");
            return new ResponseEntity<>(r, HttpStatus.OK);

        }
    }
}
