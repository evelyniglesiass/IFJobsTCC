package br.com.api.ifjobs.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import br.com.api.ifjobs.models.Curriculo;
import br.com.api.ifjobs.models.FormacaoAcademica;
import br.com.api.ifjobs.models.Resposta;
import br.com.api.ifjobs.repository.CurriculoRepository;
import br.com.api.ifjobs.repository.FormacaoAcademicaRepository;

@Service
public class FormacaoAcademicaService {
    
    @Autowired
    private FormacaoAcademicaRepository forAcaRep;

    @Autowired
    private CurriculoRepository curRep;

    @Autowired
    private Resposta r;

    //Método de listagem de formações acadêmicas
    public Iterable<FormacaoAcademica> listar(){
        return forAcaRep.findAll();
    }

    //Método de cadastro de formações 
    public ResponseEntity<?> cadastrar(FormacaoAcademica fa, Curriculo c){
                
        if(!(curRep.existsById(c.getId()))){
            r.setMensagem("Currículo não encontrado!");
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, r.getMensagem());
            
        } else if(fa.getDataFinal().compareTo(fa.getDataInicial()) < 0){
            r.setMensagem("A data inicial precisa ser anterior a data final!");
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, r.getMensagem());

        } else{
            fa.setCurriculo(c);
            return new ResponseEntity<FormacaoAcademica>(forAcaRep.save(fa), HttpStatus.CREATED);
        }
    }


    //Método de edicão de formacões academicas
    public ResponseEntity<?> editar(FormacaoAcademica fa, Curriculo c){
        
        if(!(forAcaRep.existsById(fa.getId()))){
            r.setMensagem("Experiência profissional não encontrada!");
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, r.getMensagem());
            
        } else if(!(curRep.existsById(c.getId()))){
            r.setMensagem("Currículo não encontrado!");
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, r.getMensagem());
            
        } else if(fa.getDataFinal().compareTo(fa.getDataInicial()) < 0){
            r.setMensagem("A data inicial precisa ser anterior a data final!");
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, r.getMensagem());

        } else{
            fa.setCurriculo(c);
            return new ResponseEntity<FormacaoAcademica>(forAcaRep.save(fa), HttpStatus.OK);
        }
    }

    //Método para remover formacão
    public ResponseEntity<Resposta> remover(int id) {
        
        if(!(forAcaRep.existsById(id))){
            r.setMensagem("Formação acadêmica não encontrada!");
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, r.getMensagem());

        } else{
            FormacaoAcademica forAca = forAcaRep.findById(id);
            forAcaRep.delete(forAca);
            r.setMensagem("Formação removido com sucesso!");
            return new ResponseEntity<>(r, HttpStatus.OK);

        }
    }
}
