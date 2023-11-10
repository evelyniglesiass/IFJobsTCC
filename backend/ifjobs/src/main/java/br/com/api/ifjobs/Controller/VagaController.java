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

import br.com.api.ifjobs.dto.VagaDTO;
import br.com.api.ifjobs.models.Resposta;
import br.com.api.ifjobs.models.Vaga;
import br.com.api.ifjobs.services.VagaService;
 
@RestController
@RequestMapping("/vagas")
public class VagaController {

    @Autowired 
    private VagaService vagSer; 

    // cadastrar vaga
    @Secured("ROLE_EMPRESA")
    @PostMapping()
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<?> cadastrar(@Valid @RequestBody Vaga vaga){ 
        return vagSer.cadastrar(vaga);
    }

    // editar vaga
    @Secured("ROLE_EMPRESA")
    @PutMapping()
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<?> editar(@Valid @RequestBody Vaga vaga){ 
        return vagSer.editar(vaga);
    }

    // excluir vaga
    @Secured("ROLE_EMPRESA")
    @DeleteMapping("/{id}") 
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<Resposta> remover(@PathVariable int id){ 
        return vagSer.remover(id);
    }

    // listar todas as vagas
    @Secured({"ROLE_ESTUDANTE", "ROLE_EMPRESA"})
     @GetMapping("/listar")
    public List<VagaDTO> listarTodas() {
        return vagSer.listarTodas(); 
    }

    // listar vagas de uma empresa
    @Secured({"ROLE_ESTUDANTE", "ROLE_EMPRESA"})
    @GetMapping("/listar/{id}")
    public List<VagaDTO> listarPorEmpresa(@PathVariable int id) {
        return vagSer.listarPorEmpresa(id);
    }

    // pesquisa por titulo
    @Secured({"ROLE_ESTUDANTE", "ROLE_EMPRESA"})
    @GetMapping("/listar/pesquisa/{titulo}")
    public List<VagaDTO> listarPorTitulo(@PathVariable String titulo) {
        return vagSer.listarPorTitulo(titulo);
    }

}
