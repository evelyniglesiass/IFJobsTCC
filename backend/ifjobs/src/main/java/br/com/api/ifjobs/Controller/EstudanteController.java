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

import br.com.api.ifjobs.dto.EstudanteDTO;
import br.com.api.ifjobs.models.Estudante;
import br.com.api.ifjobs.models.Resposta;
import br.com.api.ifjobs.services.EstudanteService;

@RestController
@RequestMapping("/estudantes")
public class EstudanteController {  

    @Autowired
    private EstudanteService estSer;

    // cadastrar estudante
    @PostMapping()
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<?> cadastrar(@Valid @RequestBody Estudante estudante){ 
        return estSer.cadastrar(estudante); 
    }

    // editar estudante
    @Secured("ROLE_ESTUDANTE")
    @PutMapping()
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<?> editar(@Valid @RequestBody Estudante estudante){ 
        return estSer.editar(estudante);
    }

    // excluir estudante
    @Secured("ROLE_ESTUDANTE")
    @DeleteMapping()
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<Resposta> remover(){ 
        return estSer.remover();
    }

    // listagem todos estudantes (visão da empresa)
    @Secured("ROLE_EMPRESA")
    @GetMapping("/listar/empresa")
    public List<EstudanteDTO> listarTodosEmpresa() {
        return estSer.listarTodosEmpresa();
    }

    // listagem de estudantes (visão estudante onde ele proprio não aparece)
    @Secured("ROLE_ESTUDANTE")
    @GetMapping("/listar/estudante")
    public List<EstudanteDTO> listarTodosEstudante() {
        return estSer.listarTodosEstudante();
    }

    // pesquisa por nome
    @Secured({"ROLE_ESTUDANTE", "ROLE_EMPRESA"})
    @GetMapping("/listar/pesquisa/{nome}")
    public List<EstudanteDTO> listarPesquisa(@PathVariable String nome) {
        return estSer.listarPorNome(nome);
    }

    // listar estudante expecífico
    @Secured({"ROLE_ESTUDANTE", "ROLE_EMPRESA"})
    @GetMapping("/listar/id/{id}")
    public List<EstudanteDTO> listarId(@PathVariable int id) {
        return estSer.listarPorId(id);
    }

    // candidatura
    @Secured("ROLE_ESTUDANTE")
    @PutMapping("/candidatura/{vaga}")
    public ResponseEntity<?> candidatura(@PathVariable int vaga){ 
        return estSer.candidatura(vaga);

    }

    // remover candidatura
    @Secured("ROLE_ESTUDANTE")
    @PutMapping("/remover/candidatura/{vaga}")
    public ResponseEntity<?> removerCandidatura(@PathVariable int vaga){ 
        return estSer.removerCandidatura(vaga);

    }
  
}
