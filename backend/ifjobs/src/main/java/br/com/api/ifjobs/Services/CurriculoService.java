package br.com.api.ifjobs.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import br.com.api.ifjobs.models.Curriculo;
import br.com.api.ifjobs.models.Estudante;
import br.com.api.ifjobs.models.Resposta;
import br.com.api.ifjobs.repository.CurriculoRepository;
 
@Service
public class CurriculoService {

    @Autowired
    private CurriculoRepository curRep; 

    @Autowired
    private Resposta r;

    // método para cadastrar curriculos
    public ResponseEntity<?> cadastrar(Curriculo c, Estudante e){
        
        if(curRep.validarCurriculo(e.getId()) != 0){
            r.setMensagem("Esse usuário já possui um currículo!");
            return new ResponseEntity<>(r, HttpStatus.BAD_REQUEST);

        }else if(c.getResumo().equals("")){
            r.setMensagem("O resumo é obrigatório!");
            return new ResponseEntity<>(r, HttpStatus.BAD_REQUEST);

        }else if(c.getHabilidades().isEmpty()){
            r.setMensagem("Você precisa inserir pelo menos uma habilidade!");
            return new ResponseEntity<>(r, HttpStatus.BAD_REQUEST);

        }else if(c.getIdiomas().isEmpty()){
            r.setMensagem("Você precisa inserir pelo menos um idioma!");
            return new ResponseEntity<>(r, HttpStatus.BAD_REQUEST);

        }else{
            c.setEstudante(e);
            e.setCurriculo(c);
            return new ResponseEntity<>(curRep.save(c), HttpStatus.CREATED);

        }
        
    }

    // método para editar curriculos 
    public ResponseEntity<?> editar(Curriculo c, Estudante e){
        
        if(c.getResumo().equals("")){
            r.setMensagem("O resumo é obrigatório!");
            return new ResponseEntity<>(r, HttpStatus.BAD_REQUEST);

        }else if(c.getHabilidades().isEmpty()){
            r.setMensagem("Você precisa inserir pelo menos uma habilidade!");
            return new ResponseEntity<>(r, HttpStatus.BAD_REQUEST);

        }else if(c.getIdiomas().isEmpty()){
            r.setMensagem("Você precisa inserir pelo menos um idioma!");
            return new ResponseEntity<>(r, HttpStatus.BAD_REQUEST);

        }else{
            c.setEstudante(e);
            e.setCurriculo(c);
            return new ResponseEntity<>(curRep.save(c), HttpStatus.OK);

        }
        
    }

    // método para remover curriculo
    public ResponseEntity<Resposta> remover(int id, Estudante e) {
        
        if(curRep.countById(id) == 0){
            r.setMensagem("O id informado não existe!");
            return new ResponseEntity<>(r, HttpStatus.NOT_FOUND);

        } else{
            Curriculo cur = curRep.findById(id);
            e.setCurriculo(null);
            curRep.delete(cur);
            r.setMensagem("Currículo removido com sucesso!");
            return new ResponseEntity<>(r, HttpStatus.OK);

        }
    }
    
}
