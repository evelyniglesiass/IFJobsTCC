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
import org.springframework.web.bind.annotation.ResponseStatus;

import br.com.api.ifjobs.dto.PalavraChaveDTO;
import br.com.api.ifjobs.models.PalavraChave;
import br.com.api.ifjobs.models.Resposta;
import br.com.api.ifjobs.services.PalavraChaveService;

public class PalavraChaveController {
    @Autowired
    private PalavraChaveService palChaSer;

    // cadastrar palavra chave
    @Secured("ROLE_ESTUDANTE")
    @PostMapping("/{idVaga}")
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<?> cadastrar(@Valid @RequestBody  PalavraChave palavra, @PathVariable int idVaga){ 
        return palChaSer.cadastrar(palavra, idVaga);
    }

    // editar palavra chave
    @Secured("ROLE_ESTUDANTE")
    @PutMapping("/{idVaga}")
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<?> editar(@Valid @RequestBody  PalavraChave palavra, @PathVariable int idVaga){ 
        return palChaSer.editar(palavra, idVaga); 
    }

    // remover palavra chave
    @Secured("ROLE_ESTUDANTE")
    @DeleteMapping("/{id}") 
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<Resposta> remover(@PathVariable int id){ 
        return palChaSer.remover(id);
    }

    // listar palavra chaves de uma determinada vaga
    @Secured({"ROLE_ESTUDANTE", "ROLE_EMPRESA"})
    @GetMapping("/listar/{idVaga}") 
    public List<PalavraChaveDTO> listarPalavraChave(@PathVariable int idVaga) {
        return palChaSer.listarPalavraChave(idVaga);
    }
}
