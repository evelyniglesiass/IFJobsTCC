package br.com.api.ifjobs.services;

import java.time.LocalDate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import br.com.api.ifjobs.models.Empresa;
import br.com.api.ifjobs.models.Resposta;
import br.com.api.ifjobs.models.Vaga;
import br.com.api.ifjobs.repository.EmpresaRepository;
import br.com.api.ifjobs.repository.VagaRepository;

@Service
public class VagaService {

    @Autowired
    private VagaRepository vagRep; 

    @Autowired
    private EmpresaRepository empRep; 

    @Autowired
    private Resposta r;

    // método para cadastrar vagas
    public ResponseEntity<?> cadastrar(Vaga v, Empresa e){
        
        if(!(empRep.existsById(e.getId()))){
            r.setMensagem("Empresa não encontrado!");
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, r.getMensagem());
            
        } else if(v.getIdadeMinima() < 0){
            r.setMensagem("Insira uma idade válida!");
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, r.getMensagem());

        }else if(v.getSalario() < 0){
            r.setMensagem("Insira um valor válido para o salário!");
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, r.getMensagem());

        }else{
            v.setStatus(true);
            v.setEmpresa(e);
            v.setDataPublicacao(LocalDate.now());
            vagRep.save(v);
            r.setMensagem("Cadastro feito com sucesso!");
            return new ResponseEntity<>(r, HttpStatus.CREATED);
        }
        
    }

    // método para editar vagas
    public ResponseEntity<?> editar(Vaga v, Empresa e){
        
        if(!(vagRep.existsById(v.getId()))){
            r.setMensagem("Vaga não encontrada!");
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, r.getMensagem());
            
        } else if(!(empRep.existsById(e.getId()))){
            r.setMensagem("Empresa não encontrado!");
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, r.getMensagem());
            
        } else if(v.getSalario() < 0){
            r.setMensagem("Insira um valor válido para o salário!");
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, r.getMensagem());
        
        }else if(v.getIdadeMinima() < 0){
            r.setMensagem("Insira uma idade válida!");
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, r.getMensagem());

        }else{
            v.setStatus(true);
            v.setEmpresa(e);
            vagRep.save(v);
            r.setMensagem("Edição feita com sucesso!");
            return new ResponseEntity<>(r, HttpStatus.OK);
        }
        
    }

    // método para remover vaga
    public ResponseEntity<Resposta> remover(int id) {
        
        if(!(vagRep.existsById(id))){
            r.setMensagem("Vaga não encontrada!");
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, r.getMensagem());

        } else{
            Vaga vag = vagRep.findById(id);
            vagRep.delete(vag);
            r.setMensagem("Vaga removida com sucesso!");
            return new ResponseEntity<>(r, HttpStatus.OK);
        }
    }
    
}
