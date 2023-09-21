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

import br.com.api.ifjobs.models.FormacaoAcademica;
import br.com.api.ifjobs.models.Resposta;
import br.com.api.ifjobs.services.FormacaoAcademicaService;

@RestController
public class FormacaoAcademicaController {
    
    @Autowired
    private FormacaoAcademicaService formAcaSer;
    
    //cadastro de formacões academicas
    @PostMapping("/cadastrar/formacaoAcademica")
    public ResponseEntity<?> cadastrar(@RequestBody FormacaoAcademica formacaoAcademica){
        return formAcaSer.cadastrar(formacaoAcademica);
    }

    //edicao de formacões academicas
    @PutMapping("/editar/formacaoAcademica")
    public ResponseEntity<?> editar(@RequestBody FormacaoAcademica formacaoAcademica){ 
        return formAcaSer.editar(formacaoAcademica);
    }

    //exclusão de formacões academicas
    @DeleteMapping("/remover/formacaoAcademica/{id}") 
    public ResponseEntity<Resposta> remover(@PathVariable int id){ 
        return formAcaSer.remover(id);
    }

    //Listagem de empresas
    @GetMapping("/listar/formacaoAcademica")
    public Iterable<FormacaoAcademica> listar(){
        return formAcaSer.listar();
    }
}
