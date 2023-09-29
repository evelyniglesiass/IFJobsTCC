package br.com.api.ifjobs.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import br.com.api.ifjobs.models.Curriculo;
import br.com.api.ifjobs.models.ExperienciaProfissional;
import br.com.api.ifjobs.models.Resposta;
import br.com.api.ifjobs.repository.ExperienciaProfissionalRepository;

@Service
public class ExperienciaProfissionalService {

    @Autowired
    private ExperienciaProfissionalRepository expRep; 

    @Autowired
    private Resposta r;

    // método para cadastrar experiencia profissional
    public ResponseEntity<?> cadastrar(ExperienciaProfissional e, Curriculo c){
        
        if(e.getDescricao().equals("")){
            r.setMensagem("A descrição é obrigatória!");
            return new ResponseEntity<>(r, HttpStatus.BAD_REQUEST);

        }else if(e.getEmpresa().equals("")){
            r.setMensagem("A empresa é obrigatória!");
            return new ResponseEntity<>(r, HttpStatus.BAD_REQUEST);

        }else if(e.getCargo().equals("")){
            r.setMensagem("O cargo é obrigatório!");
            return new ResponseEntity<>(r, HttpStatus.BAD_REQUEST);

        }else if(e.getDataInicial() == null){
            r.setMensagem("A data inicial é obrigatória!");
            return new ResponseEntity<>(r, HttpStatus.BAD_REQUEST);

        }else if(e.getDataFinal() == null){
            r.setMensagem("A data final é obrigatória!");
            return new ResponseEntity<>(r, HttpStatus.BAD_REQUEST);

        }else if(e.getDataFinal().compareTo(e.getDataInicial()) < 0){
            r.setMensagem("A data inicial precisa ser anterior a data final!");
            return new ResponseEntity<>(r, HttpStatus.BAD_REQUEST);

        }
        else{
            e.setCurriculo(c);
            expRep.save(e);
            r.setMensagem("Cadastro feito com sucesso!");
            return new ResponseEntity<>(r, HttpStatus.CREATED);

        }
        
    }

    // método para editar experiencia profissional
    public ResponseEntity<?> editar(ExperienciaProfissional e, Curriculo c){
        
        if(e.getDescricao().equals("")){
            r.setMensagem("A descrição é obrigatória!");
            return new ResponseEntity<>(r, HttpStatus.BAD_REQUEST);

        }else if(e.getEmpresa().equals("")){
            r.setMensagem("A empresa é obrigatória!");
            return new ResponseEntity<>(r, HttpStatus.BAD_REQUEST);

        }else if(e.getCargo().equals("")){
            r.setMensagem("O cargo é obrigatório!");
            return new ResponseEntity<>(r, HttpStatus.BAD_REQUEST);

        }else if(e.getDataInicial() == null){
            r.setMensagem("A data inicial é obrigatória!");
            return new ResponseEntity<>(r, HttpStatus.BAD_REQUEST);

        }else if(e.getDataFinal() == null){
            r.setMensagem("A data final é obrigatória!");
            return new ResponseEntity<>(r, HttpStatus.BAD_REQUEST);

        }else if(e.getDataFinal().compareTo(e.getDataInicial()) < 0){
            r.setMensagem("A data inicial precisa ser anterior a data final!");
            return new ResponseEntity<>(r, HttpStatus.BAD_REQUEST);
            
        }
        else{
            e.setCurriculo(c);
            expRep.save(e);
            r.setMensagem("Edição feita com sucesso!");
            return new ResponseEntity<>(r, HttpStatus.OK);

        }
    }

    // método para remover experiencia
    public ResponseEntity<Resposta> remover(int id) {
        
        if(expRep.countById(id) == 0){
            r.setMensagem("O id informado não existe!");
            return new ResponseEntity<>(r, HttpStatus.NOT_FOUND);

        } else{
            ExperienciaProfissional exp = expRep.findById(id);
            expRep.delete(exp);
            r.setMensagem("Experiência Profissional removida com sucesso!");
            return new ResponseEntity<>(r, HttpStatus.OK);

        }
    }
    
}
