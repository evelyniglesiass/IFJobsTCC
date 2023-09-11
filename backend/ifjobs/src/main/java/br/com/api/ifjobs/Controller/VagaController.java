package br.com.api.ifjobs.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.api.ifjobs.models.Empresa;
import br.com.api.ifjobs.models.Vaga;
import br.com.api.ifjobs.repository.EmpresaRepository;
import br.com.api.ifjobs.repository.VagaRepository;
import br.com.api.ifjobs.services.VagaService;

@RestController
public class VagaController {

    @Autowired
    private VagaService vs;

    //@Autowired
    //private VagaRepository vr;

    @Autowired
    private EmpresaRepository er;

    @PostMapping("/cadastrar/vaga/{empresa}")
    public ResponseEntity<?> cadastrar(@RequestBody Vaga v, @PathVariable int empresa){ 
        Empresa emp = er.findById(empresa);
        return vs.cadastrar(v, emp);
    }
    
}
