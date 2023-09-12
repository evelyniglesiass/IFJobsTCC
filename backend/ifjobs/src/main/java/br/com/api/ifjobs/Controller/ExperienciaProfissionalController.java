package br.com.api.ifjobs.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
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
    private ExperienciaProfissionalService es;

    // @Autowired
    // private ExperienciaProfissionalRepository er;

    @Autowired
    private CurriculoRepository cr;

    @Autowired
    private EstudanteRepository estr;

    @PostMapping("/cadastrar/experiencia/{estudante}")
    public ResponseEntity<?> cadastrar(@RequestBody ExperienciaProfissional e, @PathVariable int estudante){ 
        Estudante est = estr.findById(estudante);
        Curriculo cur = cr.findByEstudante(est);
        return es.cadastrar(e, cur);
    }
    
}
