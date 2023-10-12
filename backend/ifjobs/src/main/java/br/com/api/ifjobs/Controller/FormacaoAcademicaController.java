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

import br.com.api.ifjobs.dto.FormacaoAcademicaDTO;
import br.com.api.ifjobs.models.FormacaoAcademica;
import br.com.api.ifjobs.models.Resposta;
import br.com.api.ifjobs.services.FormacaoAcademicaService;

@RestController
@RequestMapping("/formacoes")
public class FormacaoAcademicaController {
    
    @Autowired
    private FormacaoAcademicaService formAcaSer;
    
    //cadastro de formacões academicas
    @Secured("ROLE_EMPRESA")
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<?> cadastrar(@Valid @RequestBody FormacaoAcademica formacaoAcademica){
        return formAcaSer.cadastrar(formacaoAcademica);
    }

    //edicao de formacões academicas
    @Secured("ROLE_EMPRESA")
    @PutMapping()
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<?> editar(@Valid @RequestBody FormacaoAcademica formacaoAcademica){ 
        return formAcaSer.editar(formacaoAcademica);
    }

    //exclusão de formacões academicas
    @Secured("ROLE_EMPRESA")
    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.OK) 
    public ResponseEntity<Resposta> remover(@PathVariable int id){ 
        return formAcaSer.remover(id);
    }

    //Listagem de formacões academicas de um determinado currículo
    @Secured({"ROLE_ESTUDANTE", "ROLE_EMPRESA"})
    @GetMapping("/listar/{id}") // id do estudante
    public List<FormacaoAcademicaDTO> listarFormacao(@PathVariable Integer id){
        return formAcaSer.listarFormacao(id);
    }
}
