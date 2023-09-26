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

import br.com.api.ifjobs.models.Curriculo;
import br.com.api.ifjobs.models.Estudante;
import br.com.api.ifjobs.models.FormacaoAcademica;
import br.com.api.ifjobs.models.Resposta;
import br.com.api.ifjobs.repository.CurriculoRepository;
import br.com.api.ifjobs.repository.EstudanteRepository;
import br.com.api.ifjobs.services.FormacaoAcademicaService;

@RestController
public class FormacaoAcademicaController {
    
    @Autowired
    private FormacaoAcademicaService formAcaSer;

    @Autowired
    private EstudanteRepository estRep;

    @Autowired
    private CurriculoRepository curRep;
    
    //cadastro de formacões academicas
    @PostMapping("/cadastrar/formacaoAcademica/{estudante}")
    public ResponseEntity<?> cadastrar(@RequestBody FormacaoAcademica formacaoAcademica, @PathVariable int estudante){
        Estudante est = estRep.findById(estudante);
        Curriculo cur = curRep.findByEstudante(est);
        return formAcaSer.cadastrar(formacaoAcademica, cur);
    }

    //edicao de formacões academicas
    @PutMapping("/editar/formacaoAcademica/{estudante}")
    public ResponseEntity<?> editar(@RequestBody FormacaoAcademica formacaoAcademica, @PathVariable int estudante){ 
        Estudante est = estRep.findById(estudante);
        Curriculo cur = curRep.findByEstudante(est);
        return formAcaSer.editar(formacaoAcademica, cur);
    }

    //exclusão de formacões academicas
    @DeleteMapping("/remover/formacaoAcademica/{id}") 
    public ResponseEntity<Resposta> remover(@PathVariable int id){ 
        return formAcaSer.remover(id);
    }

    //Listagem de formacões academicas
    @GetMapping("/listar/formacaoAcademica")
    public Iterable<FormacaoAcademica> listar(){
        return formAcaSer.listar();
    }
}
