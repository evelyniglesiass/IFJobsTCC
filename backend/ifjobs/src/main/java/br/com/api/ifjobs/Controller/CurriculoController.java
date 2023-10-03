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
    @PostMapping()
    public ResponseEntity<?> cadastrar(@Valid @RequestBody Curriculo c, @PathVariable int estudante){ 
        Estudante est = estRep.findById(estudante);
        return curSer.cadastrar(c, est);

    }

    // editar currículo
    @PutMapping()
    public ResponseEntity<?> editar(@Valid @RequestBody Curriculo c, @PathVariable int estudante){ 
        Estudante est = estRep.findById(estudante);
        return curSer.editar(c, est);

    }

    // excluir currículo
    @DeleteMapping() 
    public ResponseEntity<Resposta> remover(@PathVariable int id, @PathVariable int estudante){ 
        Estudante est = estRep.findById(estudante);
        return curSer.remover(id, est);

    }

    // listar currículo de um estudante
    @GetMapping("/listar/estudante/{estudante}")//ver se precisa
    public List<CurriculoDTO> listarId(@PathVariable int estudante) {
        return CurriculoDTO.converterLista(curRep.listarCurriculo(estudante));

    }
    
}
