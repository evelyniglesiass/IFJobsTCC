package br.com.api.ifjobs.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.api.ifjobs.models.Curso;
import br.com.api.ifjobs.models.Resposta;
import br.com.api.ifjobs.services.CursoService;

@RestController
public class CursoController {
    
    @Autowired
    private CursoService curSer;
    
    //cadastro de cursos
    @PostMapping("/cadastrar/curso")
    public ResponseEntity<?> cadastrar(@RequestBody Curso curso){
        return curSer.cadastrar(curso);
    }

    //edicao de cursos
    @PutMapping("/editar/curso")
    public ResponseEntity<?> editar(@RequestBody Curso curso){ 
        return curSer.editar(curso);
    }

    //exclusão de cursos
    @DeleteMapping("/remover/curso/{id}") 
    public ResponseEntity<Resposta> remover(@PathVariable int id){ 
        return curSer.remover(id);
    }

    //Listagem de cursos
    @GetMapping("/listar/curso")
    public Iterable<Curso> listar(){
        return curSer.listar();
    }
}
