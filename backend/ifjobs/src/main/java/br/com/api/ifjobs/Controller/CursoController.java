package br.com.api.ifjobs.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import br.com.api.ifjobs.dto.CursoDTO;
import br.com.api.ifjobs.models.Curso;
import br.com.api.ifjobs.models.Resposta;
import br.com.api.ifjobs.services.CursoService;

@RestController
@RequestMapping("/cursos")
public class CursoController {
    
    @Autowired
    private CursoService curSer;
    
    //cadastro de cursos
    @Secured("ROLE_ESTUDANTE")
    @PostMapping()
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<?> cadastrar(@Valid @RequestBody Curso curso){
        return curSer.cadastrar(curso);
    }

    //edicao de cursos
    @Secured("ROLE_ESTUDANTE")
    @PutMapping()
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<?> editar(@Valid @RequestBody Curso curso){ 
        return curSer.editar(curso);
    }

    //exclusão de cursos
    @Secured("ROLE_ESTUDANTE")
    @DeleteMapping("/{id}") 
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<Resposta> remover(@PathVariable int id){ 
        return curSer.remover(id);
    }

    //listagem de cursos de um determinado currículo
    @Secured({"ROLE_ESTUDANTE", "ROLE_EMPRESA"})
    @GetMapping("/listar/{id}") 
    public List<CursoDTO> listarCurso(@PathVariable int id){
        return curSer.listar(id);
    }
}
