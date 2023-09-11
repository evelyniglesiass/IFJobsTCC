package br.com.api.ifjobs.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.api.ifjobs.models.Vaga;
import br.com.api.ifjobs.services.VagaService;

@RestController
public class VagaController {

    @Autowired
    private VagaService vs;

    @PostMapping("/cadastrar/vaga")
    public ResponseEntity<?> cadastrar(@RequestBody Vaga v){ 
        return vs.cadastrar(v);
    }
    
}
