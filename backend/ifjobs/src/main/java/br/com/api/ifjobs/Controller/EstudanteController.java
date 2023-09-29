package br.com.api.ifjobs.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping; 
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import br.com.api.ifjobs.dto.EstudanteDTO;
import br.com.api.ifjobs.models.Estudante;
import br.com.api.ifjobs.models.Resposta;
import br.com.api.ifjobs.repository.EstudanteRepository;
import br.com.api.ifjobs.services.EstudanteService;

@RestController
public class EstudanteController {  

    @Autowired
    private EstudanteService estSer;

    @Autowired
    private EstudanteRepository estRep;

    //cadastro de estudantes
    @PostMapping("/cadastrar/estudante")
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<?> cadastrar(@Valid @RequestBody Estudante estudante){ 
        return estSer.cadastrar(estudante); 
    }

    //edição de estudantes
    @PutMapping("/editar/estudante")
    public ResponseEntity<?> editar(@Valid @RequestBody Estudante estudante){ 
        return estSer.editar(estudante);
    }

    //exclusão de estudantes
    @DeleteMapping("/remover/estudante/{id}") 
    public ResponseEntity<Resposta> remover(@PathVariable int id){ 
        return estSer.remover(id);
    }

    //listagem de estudantes por empresas
    @GetMapping("/listar/estudantes")
    @ResponseStatus(HttpStatus.OK)
    public List<EstudanteDTO> listarTodos() {
        return EstudanteDTO.converterLista(estRep.findAll());

    }

    //listagem de estudantes por um estudante
    @GetMapping("/listar/estudantes/{id}")
    public List<EstudanteDTO> listarEstudantes(@PathVariable int id) {
        return EstudanteDTO.converterLista(estRep.listarEstudantes(id));

    }

    //pesquisar estudante por nome
    @GetMapping("/listar/estudantes/pesquisa/{nome}")
    public List<EstudanteDTO> listarPesquisa(@PathVariable String nome) {
        return EstudanteDTO.converterLista(estRep.findByNomeContains(nome));

    }

    //listar estudante por id
    @GetMapping("/listar/estudantes/id/{id}")
    public List<EstudanteDTO> listarId(@PathVariable int id) {
        return EstudanteDTO.converterLista(estRep.listarEstudante(id));

    }
  
}
