package br.com.api.ifjobs.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping; 
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import br.com.api.ifjobs.dto.ExperienciaProfissionalDTO;
import br.com.api.ifjobs.models.ExperienciaProfissional;
import br.com.api.ifjobs.models.Resposta;
import br.com.api.ifjobs.services.ExperienciaProfissionalService;

@RestController
@RequestMapping("/experiencias")
public class ExperienciaProfissionalController {

    @Autowired
    private ExperienciaProfissionalService expSer;

    // cadastrar experiência
    @Secured("ROLE_ESTUDANTE")
    @PostMapping()
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<?> cadastrar(@Valid @RequestBody ExperienciaProfissional experiencia){ 
        return expSer.cadastrar(experiencia);
    }

    // editar experiência
    @Secured("ROLE_ESTUDANTE")
    @PutMapping()
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<?> editar(@Valid @RequestBody ExperienciaProfissional experiencia){ 
        return expSer.editar(experiencia); 
    }

    // excluir experiência
    @Secured("ROLE_ESTUDANTE")
    @DeleteMapping() 
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<Resposta> remover(){ 
        return expSer.remover();
    }

    // listar experiências de um determinado currículo
    @GetMapping("/listar")
    public List<ExperienciaProfissionalDTO> listarExperincia() {
        return expSer.listarExperiencia();
    }
    
}
