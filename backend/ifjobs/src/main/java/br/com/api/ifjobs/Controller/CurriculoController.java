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

import br.com.api.ifjobs.dto.CurriculoDTO;
import br.com.api.ifjobs.models.Curriculo;
import br.com.api.ifjobs.models.Estudante;
import br.com.api.ifjobs.models.Resposta;
import br.com.api.ifjobs.repository.CurriculoRepository;
import br.com.api.ifjobs.repository.EstudanteRepository; 
import br.com.api.ifjobs.services.CurriculoService;

@RestController
@RequestMapping("/curriculos")
public class CurriculoController {

    @Autowired
    private CurriculoRepository curRep;

    @Autowired
    private CurriculoService curSer;

    @Autowired 
    private EstudanteRepository estRep;

    // cadastrar currículo
    @Secured("ROLE_ESTUDANTE")
    @PostMapping()
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<?> cadastrar(@Valid @RequestBody Curriculo c, @PathVariable int estudante){ 
        Estudante est = estRep.findById(estudante);
        return curSer.cadastrar(c, est);

    }

    // editar currículo
    @Secured("ROLE_ESTUDANTE")
    @PutMapping()
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<?> editar(@Valid @RequestBody Curriculo c, @PathVariable int estudante){ 
        Estudante est = estRep.findById(estudante);
        return curSer.editar(c, est);

    }

    // excluir currículo
    @Secured("ROLE_ESTUDANTE")
    @DeleteMapping() 
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<Resposta> remover(@PathVariable int id, @PathVariable int estudante){ 
        Estudante est = estRep.findById(estudante);
        return curSer.remover(id, est);

    }

    // listar currículo de um estudante
    @GetMapping("/listar/{estudante}")
    public List<CurriculoDTO> listarId(@PathVariable int estudante) {
        return CurriculoDTO.converterLista(curRep.listarCurriculo(estudante));

    }
    
}
