package br.com.api.ifjobs.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import br.com.api.ifjobs.models.Curriculo;
import br.com.api.ifjobs.models.Estudante;
import br.com.api.ifjobs.models.Resposta;
import br.com.api.ifjobs.repository.CurriculoRepository;
import br.com.api.ifjobs.repository.EstudanteRepository;
 
@Service
public class CurriculoService {

    @Autowired
    private CurriculoRepository curRep; 

    @Autowired
    private EstudanteRepository estRep; 

    @Autowired
    private Resposta r;

    // método para cadastrar curriculos
    public ResponseEntity<?> cadastrar(Curriculo c, Estudante e){
        
        if(!(estRep.existsById(e.getId()))){
            r.setMensagem("Estudante não encontrado!");
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, r.getMensagem());
            
        }else if(curRep.validarCurriculo(e.getId()) != 0){
            r.setMensagem("Esse usuário já possui um currículo!");
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, r.getMensagem());

        }else{
            c.setEstudante(e);
            e.setCurriculo(c);
            curRep.save(c);
            r.setMensagem("Cadastro feito com sucesso!");
            return new ResponseEntity<>(r, HttpStatus.CREATED);
            
        }
        
    }

    // método para editar curriculos 
    public ResponseEntity<?> editar(Curriculo c, Estudante e){
        
        if(!(curRep.existsById(c.getId()))){
            r.setMensagem("Currículo não encontrado!");
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, r.getMensagem());

        } else if(!(estRep.existsById(e.getId()))){
            r.setMensagem("Estudante não encontrado!");
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, r.getMensagem());

        } else{
            c.setEstudante(e);
            // e.setCurriculo(c); necessário? dá erro com ele
            curRep.save(c);
            r.setMensagem("Edição feita com sucesso!");
            return new ResponseEntity<>(r, HttpStatus.OK);
        }
        
    }

    // método para remover curriculo
    public ResponseEntity<Resposta> remover(int id, Estudante e) {
        
        if(!(curRep.existsById(id))){
            r.setMensagem("Currículo não encontrado!");
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, r.getMensagem());

        } else if(!(estRep.existsById(e.getId()))){
            r.setMensagem("Estudante não encontrado!");
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, r.getMensagem());

        }else{
            Curriculo cur = curRep.findById(id);
            e.setCurriculo(null);
            curRep.delete(cur);
            r.setMensagem("Currículo removido com sucesso!");
            return new ResponseEntity<>(r, HttpStatus.OK);

        }
    }
    
}
