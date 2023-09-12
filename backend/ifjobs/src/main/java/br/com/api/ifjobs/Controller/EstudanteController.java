package br.com.api.ifjobs.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.api.ifjobs.models.Estudante;
import br.com.api.ifjobs.services.EstudanteService;

@RestController
public class EstudanteController {

    @Autowired
    private EstudanteService es;

    @PostMapping("/cadastrar/estudante")
    public ResponseEntity<?> cadastrar(@RequestBody Estudante e){ 
        return es.cadastrar(e);
    }

    @PutMapping("/editar/estudante")
    public ResponseEntity<?> editar(@RequestBody Estudante e){ 
        return es.editar(e);
    }
  
}
