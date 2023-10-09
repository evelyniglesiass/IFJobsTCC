package br.com.api.ifjobs.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import br.com.api.ifjobs.models.Curriculo;
import br.com.api.ifjobs.models.ExperienciaProfissional;
import br.com.api.ifjobs.models.Resposta;
import br.com.api.ifjobs.repository.CurriculoRepository;
import br.com.api.ifjobs.repository.ExperienciaProfissionalRepository;

@Service
public class ExperienciaProfissionalService {

    @Autowired
    private ExperienciaProfissionalRepository expRep;
    
    @Autowired
    private CurriculoRepository curRep;

    @Autowired
    private Resposta r;

    // método para cadastrar experiencia profissional
    public ResponseEntity<?> cadastrar(ExperienciaProfissional e, Curriculo c){
        
        if(!(curRep.existsById(c.getId()))){
            r.setMensagem("Currículo não encontrado!");
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, r.getMensagem());
            
        } else if(e.getDataFinal().compareTo(e.getDataInicial()) < 0){
            r.setMensagem("A data inicial precisa ser anterior a data final!");
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, r.getMensagem());

        }else{

            e.setCurriculo(c);
            expRep.save(e);
            c.getExpProf().add(e);
            r.setMensagem("Cadastro feito com sucesso!");
            return new ResponseEntity<>(r, HttpStatus.CREATED);
        }

    }

    // método para editar experiencia profissional
    public ResponseEntity<?> editar(ExperienciaProfissional e, Curriculo c){
        
        if(!(expRep.existsById(e.getId()))){
            r.setMensagem("Experiência profissional não encontrada!");
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, r.getMensagem());
            
        }else if(!(curRep.existsById(c.getId()))){
            r.setMensagem("Currículo não encontrado!");
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, r.getMensagem());

        }else if(e.getDataFinal().compareTo(e.getDataInicial()) < 0){
            r.setMensagem("A data inicial precisa ser anterior a data final!");
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, r.getMensagem());

        }else{

            e.setCurriculo(c);
            expRep.save(e);
            r.setMensagem("Edição feita com sucesso!");
            return new ResponseEntity<>(r, HttpStatus.OK);
        } 
    }

    // método para remover experiencia
    public ResponseEntity<Resposta> remover(int id) {
        
        if(!(expRep.existsById(id))){
            r.setMensagem("Experiência profissional não encontrada!");
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, r.getMensagem());

        }else{

            ExperienciaProfissional exp = expRep.findById(id);
            expRep.delete(exp);
            r.setMensagem("Experiência Profissional removida com sucesso!");
            return new ResponseEntity<>(r, HttpStatus.OK);
        }
    }
    
}
