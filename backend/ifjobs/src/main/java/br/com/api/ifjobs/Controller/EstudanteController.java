package br.com.api.ifjobs.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.api.ifjobs.models.Estudante;
import br.com.api.ifjobs.models.Resposta;
import br.com.api.ifjobs.services.EstudanteService;

@RestController
public class EstudanteController { 

    @Autowired
    private EstudanteService estSer;

    @PostMapping("/cadastrar/estudante")
    public ResponseEntity<?> cadastrar(@RequestBody Estudante estudante){ 
        return estSer.cadastrar(estudante); 
    }

    @PutMapping("/editar/estudante")
    public ResponseEntity<?> editar(@RequestBody Estudante estudante){ 
        return estSer.editar(estudante);
    }

    @DeleteMapping("/remover/estudante/{id}") 
    public ResponseEntity<Resposta> remover(@PathVariable int id){ 
        return estSer.remover(id);
    }
  
}
