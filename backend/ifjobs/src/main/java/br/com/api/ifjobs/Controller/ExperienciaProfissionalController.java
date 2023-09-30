package br.com.api.ifjobs.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping; 
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.api.ifjobs.dto.ExperienciaProfissionalDTO;
import br.com.api.ifjobs.models.Curriculo;
import br.com.api.ifjobs.models.Estudante;
import br.com.api.ifjobs.models.ExperienciaProfissional;
import br.com.api.ifjobs.models.Resposta;
import br.com.api.ifjobs.repository.CurriculoRepository;
import br.com.api.ifjobs.repository.EstudanteRepository;
import br.com.api.ifjobs.repository.ExperienciaProfissionalRepository;
import br.com.api.ifjobs.services.ExperienciaProfissionalService;
import jakarta.validation.Valid;

@RestController
public class ExperienciaProfissionalController {

    @Autowired
    private ExperienciaProfissionalRepository expRep;

    @Autowired
    private ExperienciaProfissionalService expSer;

    @Autowired
    private CurriculoRepository curRep;

    @Autowired
    private EstudanteRepository estRep;

    //cadastrar experiência
    @PostMapping("/cadastrar/experiencia/{estudante}")
    public ResponseEntity<?> cadastrar(@Valid @RequestBody ExperienciaProfissional experiencia, @PathVariable int estudante){ 
        Estudante est = estRep.findById(estudante);
        Curriculo cur = curRep.findByEstudante(est);
        return expSer.cadastrar(experiencia, cur);
    }

    //editar experiência
    @PutMapping("/editar/experiencia/{estudante}")
    public ResponseEntity<?> editar(@Valid @RequestBody ExperienciaProfissional experiencia, @PathVariable int estudante){ 
        Estudante est = estRep.findById(estudante);
        Curriculo cur = curRep.findByEstudante(est);
        return expSer.editar(experiencia, cur); 
    }

    //excluir experiência
    @DeleteMapping("/remover/experiencia/{id}") 
    public ResponseEntity<Resposta> remover(@PathVariable int id){ 
        return expSer.remover(id);
    }

    //listar experiências de um determinado currículo
    @GetMapping("/listar/experiencias/estudante/{estudante}")
    public List<ExperienciaProfissionalDTO> listarExperincia(@PathVariable int estudante) {
        Estudante est = estRep.findById(estudante);
        Curriculo cur = curRep.findByEstudante(est);
        return ExperienciaProfissionalDTO.converterLista(expRep.listarExperiencia(cur.getId()));

    }
    
}
