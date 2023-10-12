package br.com.api.ifjobs.controller;

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

import br.com.api.ifjobs.dto.CurriculoDTO; 
import br.com.api.ifjobs.models.Curriculo;
import br.com.api.ifjobs.models.Resposta;
import br.com.api.ifjobs.services.CurriculoService;

@RestController
@RequestMapping("/curriculos")
public class CurriculoController {

    @Autowired
    private CurriculoService curSer;


    // cadastrar currículo
    @Secured("ROLE_ESTUDANTE")
    @PostMapping()
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<?> cadastrar(@Valid @RequestBody Curriculo c){ 
        return curSer.cadastrar(c);
    }

    // editar currículo
    @Secured("ROLE_ESTUDANTE")
    @PutMapping()
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<?> editar(@Valid @RequestBody Curriculo c){ 
        return curSer.editar(c);
    }

    // excluir currículo
    @Secured("ROLE_ESTUDANTE")
    @DeleteMapping() 
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<Resposta> remover(){ 
        return curSer.remover();
    }

    // listar currículo de um estudante
    @Secured({"ROLE_ESTUDANTE", "ROLE_EMPRESA"})
    @GetMapping("/listar/{id}") // id do estudante
    public CurriculoDTO consultarCurriculo(@PathVariable int id) {
        return curSer.listar(id);
    }
    
}
