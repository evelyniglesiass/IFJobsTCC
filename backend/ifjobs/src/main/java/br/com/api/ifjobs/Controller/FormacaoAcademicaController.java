package br.com.api.ifjobs.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.api.ifjobs.models.FormacaoAcademica;
import br.com.api.ifjobs.services.FormacaoAcademicaService;

@RestController
public class FormacaoAcademicaController {
    
    @Autowired
    private FormacaoAcademicaService fas;
    
    //Listagem de empresas
    @GetMapping("/listarFormacoesAcademicas")
    public Iterable<FormacaoAcademica> listar(){
        return fas.listar();
    }
}
