package br.com.api.ifjobs.services;

import java.time.LocalDate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import br.com.api.ifjobs.models.Empresa;
import br.com.api.ifjobs.models.Resposta;
import br.com.api.ifjobs.models.Vaga;
import br.com.api.ifjobs.repository.VagaRepository;

@Service
public class VagaService {

    @Autowired
    private VagaRepository vagRep; 

    @Autowired
    private Resposta r;

    // método para cadastrar vagas
    public ResponseEntity<?> cadastrar(Vaga v, Empresa e){
        
        if(v.getTitulo().equals("")){
            r.setMensagem("O titulo é obrigatório!");
            return new ResponseEntity<>(r, HttpStatus.BAD_REQUEST);

        }else if(v.getDescricao().equals("")){
            r.setMensagem("A descrição é obrigatória!");
            return new ResponseEntity<>(r, HttpStatus.BAD_REQUEST);

        }else if(v.getSalario() < 0){
            r.setMensagem("Insira um valor válido para o salário!");
            return new ResponseEntity<>(r, HttpStatus.BAD_REQUEST);
        
        }else if(v.getIdadeMinima() < 0){
            r.setMensagem("Insira um valor válido para a idade mínima!");
            return new ResponseEntity<>(r, HttpStatus.BAD_REQUEST);

        }else if(v.getPalavrasChave().isEmpty()){
            r.setMensagem("Você precisa ter no minimo uma palavra chave!");
            return new ResponseEntity<>(r, HttpStatus.BAD_REQUEST);

        }else if(v.getCidade().equals("")){
            r.setMensagem("A cidade é obrigatória!");
            return new ResponseEntity<>(r, HttpStatus.BAD_REQUEST);

        }else if(v.getCurso() == null){
            r.setMensagem("O curso é obrigatório!");
            return new ResponseEntity<>(r, HttpStatus.BAD_REQUEST);

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
        
        if(v.getTitulo().equals("")){
            r.setMensagem("O titulo é obrigatório!");
            return new ResponseEntity<>(r, HttpStatus.BAD_REQUEST);

        }else if(v.getDescricao().equals("")){
            r.setMensagem("A descrição é obrigatória!");
            return new ResponseEntity<>(r, HttpStatus.BAD_REQUEST);

        }else if(v.getSalario() < 0){
            r.setMensagem("Insira um valor válido para o salário!");
            return new ResponseEntity<>(r, HttpStatus.BAD_REQUEST);
        
        }else if(v.getIdadeMinima() < 0){
            r.setMensagem("Insira um valor válido para a idade mínima!");
            return new ResponseEntity<>(r, HttpStatus.BAD_REQUEST);

        }else if(v.getPalavrasChave().isEmpty()){
            r.setMensagem("Você precisa ter no minimo uma palavra chave!");
            return new ResponseEntity<>(r, HttpStatus.BAD_REQUEST);

        }else if(v.getCidade().equals("")){
            r.setMensagem("A cidade é obrigatória!");
            return new ResponseEntity<>(r, HttpStatus.BAD_REQUEST);

        }else if(v.getCurso() == null){
            r.setMensagem("O curso é obrigatório!");
            return new ResponseEntity<>(r, HttpStatus.BAD_REQUEST);

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
        
        if(vagRep.countById(id) == 0){
            r.setMensagem("O id informado não existe!");
            return new ResponseEntity<>(r, HttpStatus.NOT_FOUND);

        } else{
            Vaga vag = vagRep.findById(id);
            vagRep.delete(vag);
            r.setMensagem("Vaga removida com sucesso!");
            return new ResponseEntity<>(r, HttpStatus.OK);

        }
    }
    
}
