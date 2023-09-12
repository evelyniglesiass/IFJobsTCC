package br.com.api.ifjobs.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import br.com.api.ifjobs.models.FormacaoAcademica;
import br.com.api.ifjobs.models.Resposta;
import br.com.api.ifjobs.repository.FormacaoAcademicaRepository;

@Service
public class FormacaoAcademicaService {
    
    @Autowired
    private FormacaoAcademicaRepository far;

    @Autowired
    private Resposta r;

    //Método de listagem de formações acadêmicas
    public Iterable<FormacaoAcademica> listar(){
        return far.findAll();
    }

    public ResponseEntity<?> cadastrar(FormacaoAcademica fa){
        
        //Verificando campos nulos
        if(fa.getNivel().equals("")){
            r.setMensagem("O nível da formação é obrigatório!");
            return new ResponseEntity<Resposta>(r, HttpStatus.BAD_REQUEST);

        } else if(fa.getInstituiçao().equals("")){
            r.setMensagem("O nome da instituição é obrigatório!");
            return new ResponseEntity<Resposta>(r, HttpStatus.BAD_REQUEST);

        } else if(fa.getCidade().equals("")){
            r.setMensagem("A cidade é obrigatória!");
            return new ResponseEntity<Resposta>(r, HttpStatus.BAD_REQUEST);

        } else if(fa.getDataInicial().equals("")){
            r.setMensagem("A data inicial é obrigatória!");
            return new ResponseEntity<Resposta>(r, HttpStatus.BAD_REQUEST);

        } else if(fa.getDataFinal().equals("")){
            r.setMensagem("A data final é obrigatória!");
            return new ResponseEntity<Resposta>(r, HttpStatus.BAD_REQUEST);

        }else if(fa.getDataFinal().compareTo(fa.getDataInicial()) < 0){
            r.setMensagem("A data inicial precisa ser anterior a data final!");
            return new ResponseEntity<>(r, HttpStatus.BAD_REQUEST);

        //Salvando formação acadêmica
        } else{
            return new ResponseEntity<FormacaoAcademica>(far.save(fa), HttpStatus.CREATED);
        }
    }
}
