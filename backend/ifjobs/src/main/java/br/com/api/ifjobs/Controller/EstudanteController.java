package br.com.api.ifjobs.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping; 
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.api.ifjobs.dto.EstudanteDTO;
import br.com.api.ifjobs.models.Estudante;
import br.com.api.ifjobs.models.Resposta;
import br.com.api.ifjobs.models.Vaga;
import br.com.api.ifjobs.repository.EstudanteRepository;
import br.com.api.ifjobs.repository.VagaRepository;
import br.com.api.ifjobs.services.EstudanteService;

@RestController
@RequestMapping("/estudantes")
public class EstudanteController {  

    @Autowired
    private EstudanteService estSer;

    @Autowired
    private EstudanteRepository estRep;

    @Autowired
    private VagaRepository vagRep;

    // cadastrar estudante
    @PostMapping()
    public ResponseEntity<?> cadastrar(@Valid @RequestBody Estudante estudante){ 
        return estSer.cadastrar(estudante); 
    }

    // editar estudante
    @PutMapping()
    public ResponseEntity<?> editar(@Valid @RequestBody Estudante estudante){ 
        return estSer.editar(estudante);
    }

    // candidatura
    @PutMapping("/candidatura/{estudante}/{vaga}")
    public ResponseEntity<?> candidatura(@PathVariable int estudante, @PathVariable int vaga){ 
        Estudante est = estRep.findById(estudante);
        Vaga vag = vagRep.findById(vaga);
        return estSer.candidatura(est, vag);

    }

    // excluir estudante
    @DeleteMapping() 
    public ResponseEntity<Resposta> remover(@PathVariable int id){ 
        return estSer.remover(id);
    }

    // listagem todos estudantes (visão da empresa)
    @GetMapping("/listar")
    public List<EstudanteDTO> listarTodos() {
        return EstudanteDTO.converterLista(estRep.findAll());

    }

    // listagem de estudantes (visão estudante onde ele proprio não aparece)
    @GetMapping("/listar/{id}")
    public List<EstudanteDTO> listarEstudantes(@PathVariable int id) {
        return EstudanteDTO.converterLista(estRep.listarEstudantes(id));

    }

    // pesquisa por nome
    @GetMapping("/listar/pesquisa/{nome}")
    public List<EstudanteDTO> listarPesquisa(@PathVariable String nome) {
        return EstudanteDTO.converterLista(estRep.findByNomeContains(nome));

    }

    // listar estudante expecífico
    @GetMapping("/listar/id/{id}")
    public List<EstudanteDTO> listarId(@PathVariable int id) {
        return EstudanteDTO.converterLista(estRep.listarEstudante(id));

    }
  
}
