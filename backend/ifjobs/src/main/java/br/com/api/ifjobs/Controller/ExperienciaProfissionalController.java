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
import br.com.api.ifjobs.models.ExperienciaProfissional;
import br.com.api.ifjobs.repository.CurriculoRepository;
import br.com.api.ifjobs.repository.EstudanteRepository;
import br.com.api.ifjobs.services.ExperienciaProfissionalService;

@RestController
public class ExperienciaProfissionalController {

    @Autowired
    private ExperienciaProfissionalService expSer;

    @Autowired
    private CurriculoRepository curRep;

    @Autowired
    private EstudanteRepository estRep;

    @PostMapping("/cadastrar/experiencia/{estudante}")
    public ResponseEntity<?> cadastrar(@RequestBody ExperienciaProfissional experiencia, @PathVariable int estudante){ 
        Estudante est = estRep.findById(estudante);
        Curriculo cur = curRep.findByEstudante(est);
        return expSer.cadastrar(experiencia, cur);
    }

    @PutMapping("/editar/experiencia/{estudante}")
    public ResponseEntity<?> editar(@RequestBody ExperienciaProfissional experiencia, @PathVariable int estudante){ 
        Estudante est = estRep.findById(estudante);
        Curriculo cur = curRep.findByEstudante(est);
        return expSer.editar(experiencia, cur); 
    }
    
}
