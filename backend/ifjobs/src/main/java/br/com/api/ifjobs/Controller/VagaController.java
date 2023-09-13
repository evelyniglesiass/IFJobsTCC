package br.com.api.ifjobs.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.api.ifjobs.models.Empresa;
import br.com.api.ifjobs.models.Vaga;
import br.com.api.ifjobs.repository.EmpresaRepository;
import br.com.api.ifjobs.services.VagaService;
 
@RestController
public class VagaController {

    @Autowired
    private VagaService vagSer; 

    @Autowired
    private EmpresaRepository empRep;

    @PostMapping("/cadastrar/vaga/{empresa}")
    public ResponseEntity<?> cadastrar(@RequestBody Vaga vaga, @PathVariable int empresa){ 
        Empresa emp = empRep.findById(empresa);
        return vagSer.cadastrar(vaga, emp);
    }

    @PutMapping("/editar/vaga/{empresa}")
    public ResponseEntity<?> editar(@RequestBody Vaga vaga, @PathVariable int empresa){ 
        Empresa emp = empRep.findById(empresa);
        return vagSer.cadastrar(vaga, emp);
    }
    
}
