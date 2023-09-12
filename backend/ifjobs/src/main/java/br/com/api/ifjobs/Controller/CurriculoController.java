package br.com.api.ifjobs.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.api.ifjobs.models.Curriculo;
import br.com.api.ifjobs.models.Estudante;
import br.com.api.ifjobs.repository.EstudanteRepository;
import br.com.api.ifjobs.services.CurriculoService;

@RestController
public class CurriculoController {

    @Autowired
    private CurriculoService cs;

    //@Autowired
    //private CurriculoRepository cr;

    @Autowired
    private EstudanteRepository er;

    @PostMapping("/cadastrar/curriculo/{estudante}")
    public ResponseEntity<?> cadastrar(@RequestBody Curriculo c, @PathVariable int estudante){ 
        Estudante est = er.findById(estudante);
        return cs.cadastrar(c, est);
    }

    @PutMapping("/editar/curriculo/{estudante}")
    public ResponseEntity<?> editar(@RequestBody Curriculo c, @PathVariable int estudante){ 
        Estudante est = er.findById(estudante);
        return cs.cadastrar(c, est);
    }
    
}
