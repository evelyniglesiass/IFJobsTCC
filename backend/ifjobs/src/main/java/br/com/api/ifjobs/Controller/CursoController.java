package br.com.api.ifjobs.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.api.ifjobs.models.Curso;
import br.com.api.ifjobs.services.CursoService;

@RestController
public class CursoController {
    
    @Autowired
    private CursoService cs;
    
    //Listagem de cursos
    @GetMapping("/listarCursos")
    public Iterable<Curso> listar(){
        return cs.listar();
    }
}
