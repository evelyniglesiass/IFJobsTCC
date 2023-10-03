package br.com.api.ifjobs.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.api.ifjobs.dto.CursoDTO;
import br.com.api.ifjobs.models.Curriculo;
import br.com.api.ifjobs.models.Curso;
import br.com.api.ifjobs.models.Estudante;
import br.com.api.ifjobs.models.Resposta;
import br.com.api.ifjobs.repository.CurriculoRepository;
import br.com.api.ifjobs.repository.CursoRepository;
import br.com.api.ifjobs.repository.EstudanteRepository;
import br.com.api.ifjobs.services.CursoService;

@RestController
@RequestMapping("/cursos")
public class CursoController {
    
    @Autowired
    private CursoService curSer;

    @Autowired
    private CurriculoRepository curRep;

    @Autowired
    private CursoRepository cursoRep;

    @Autowired
    private EstudanteRepository estRep;
    
    //cadastro de cursos
    @PostMapping()
    public ResponseEntity<?> cadastrar(@Valid @RequestBody Curso curso, @PathVariable int estudante){
        Estudante est = estRep.findById(estudante);
        Curriculo cur = curRep.findByEstudante(est);
        return curSer.cadastrar(curso, cur);
    }

    //edicao de cursos
    @PutMapping()
    public ResponseEntity<?> editar(@Valid @RequestBody Curso curso, @PathVariable int estudante){ 
        Estudante est = estRep.findById(estudante);
        Curriculo cur = curRep.findByEstudante(est);
        return curSer.editar(curso, cur);
    }

    //exclusão de cursos
    @DeleteMapping() 
    public ResponseEntity<Resposta> remover(@PathVariable int id){ 
        return curSer.remover(id);
    }

    //Listagem de cursos de um determinado currículo
    @GetMapping("/listar/estudante/{estudante}")//ver se precisa
    public List<CursoDTO> listarCurso(@PathVariable int estudante){
        Estudante est = estRep.findById(estudante);
        Curriculo cur = curRep.findByEstudante(est);
        return CursoDTO.converterLista(cursoRep.listarCurso(cur.getId()));
    }
}
