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
    private VagaRepository vr; 

    @Autowired
    private Resposta r;

    // método para cadastrar vagas
    public ResponseEntity<?> cadastrar(Vaga v, Empresa emp){
        
        if(v.getTitulo().equals("")){
            r.setMensagem("O titulo é obrigatório!");
            return new ResponseEntity<>(r, HttpStatus.BAD_REQUEST);
        }else if(v.getDescricao().equals("")){
            r.setMensagem("A descrição é obrigatória!");
            return new ResponseEntity<>(r, HttpStatus.BAD_REQUEST);
        }else if(v.isStatus() == false){
            r.setMensagem("O status é obrigatório!");
            return new ResponseEntity<>(r, HttpStatus.BAD_REQUEST);
        }else if(v.getSalario() < 0){
            r.setMensagem("O salário é obrigatório!");
            return new ResponseEntity<>(r, HttpStatus.BAD_REQUEST);
        }else if(v.getIdadeMinima() < 0){
            r.setMensagem("A idade minima é obrigatória!");
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
            v.setEmpresa(emp);
            v.setDataPublicacao(LocalDate.now());
            return new ResponseEntity<>(vr.save(v), HttpStatus.CREATED);
        }
        
    }
    
}
