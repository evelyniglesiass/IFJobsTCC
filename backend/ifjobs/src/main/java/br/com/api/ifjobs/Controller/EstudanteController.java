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

import br.com.api.ifjobs.models.Estudante;
import br.com.api.ifjobs.models.Resposta;
import br.com.api.ifjobs.repository.EstudanteRepository;
import br.com.api.ifjobs.services.EstudanteService;
import jakarta.validation.Valid;

@RestController
public class EstudanteController {  

    @Autowired
    private EstudanteService estSer;

    @Autowired
    private EstudanteRepository estRep;

    @PostMapping("/cadastrar/estudante")
    public ResponseEntity<?> cadastrar(@Valid @RequestBody Estudante estudante){ 
        return estSer.cadastrar(estudante); 
    }

    @PutMapping("/editar/estudante")
    public ResponseEntity<?> editar(@Valid @RequestBody Estudante estudante){ 
        return estSer.editar(estudante);
    }

    @DeleteMapping("/remover/estudante/{id}") 
    public ResponseEntity<Resposta> remover(@PathVariable int id){ 
        return estSer.remover(id);
    }

    @GetMapping("/listar/pesquisa/{nome}")
    public List<Estudante> listarPesquisa(@PathVariable String nome) {
        return estRep.findByNomeContains(nome); 

    }

    @GetMapping("/listar/estudantes")
    public List<Estudante> listarEstudantes() {
        return estRep.listarEstudantes();
    }
  
}
