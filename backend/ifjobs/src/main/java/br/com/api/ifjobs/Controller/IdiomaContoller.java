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

import br.com.api.ifjobs.dto.IdiomaDTO;
import br.com.api.ifjobs.models.Idioma;
import br.com.api.ifjobs.models.Resposta;
import br.com.api.ifjobs.services.IdiomaService;

@RestController
@RequestMapping("/idiomas")
public class IdiomaContoller {

    @Autowired
    private IdiomaService idiSer;

    // cadastrar idioma
    @Secured("ROLE_ESTUDANTE")
    @PostMapping()
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<?> cadastrar(@Valid @RequestBody Idioma idioma) {
        return idiSer.cadastrar(idioma);
    }

    // editar idioma
    @Secured("ROLE_ESTUDANTE")
    @PutMapping()
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<?> editar(@Valid @RequestBody Idioma idioma) {
        return idiSer.editar(idioma);
    }

    // remover idioma
    @Secured("ROLE_ESTUDANTE")
    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<Resposta> remover(@PathVariable int id) {
        return idiSer.remover(id);
    }

    // listar idioma de um determinado currículo
    @Secured({ "ROLE_ESTUDANTE", "ROLE_EMPRESA" })
    @GetMapping("/listar/{id}") // id do estudante
    public List<IdiomaDTO> listarIdioma(@PathVariable int id) {
        return idiSer.listarIdioma(id);
    }
}
