package br.com.api.ifjobs.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity; 
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.api.ifjobs.dto.CurriculoDTO;
import br.com.api.ifjobs.models.Curriculo;
import br.com.api.ifjobs.models.Estudante;
import br.com.api.ifjobs.models.Resposta;
import br.com.api.ifjobs.repository.CurriculoRepository;
import br.com.api.ifjobs.repository.EstudanteRepository; 
import br.com.api.ifjobs.services.CurriculoService;

@RestController
public class CurriculoController {

    @Autowired
    private CurriculoRepository curRep;

    @Autowired
    private CurriculoService curSer;

    @Autowired 
    private EstudanteRepository estRep;

    //cadastrar currículo
    @PostMapping("/cadastrar/curriculo/{estudante}")
    public ResponseEntity<?> cadastrar(@RequestBody Curriculo c, @PathVariable int estudante){ 
        Estudante est = estRep.findById(estudante);
        return curSer.cadastrar(c, est);

    }

    //editar currículo
    @PutMapping("/editar/curriculo/{estudante}")
    public ResponseEntity<?> editar(@RequestBody Curriculo c, @PathVariable int estudante){ 
        Estudante est = estRep.findById(estudante);
        return curSer.editar(c, est);

    }

    //excluir currículo
    @DeleteMapping("/remover/curriculo/{id}/{estudante}") 
    public ResponseEntity<Resposta> remover(@PathVariable int id, @PathVariable int estudante){ 
        Estudante est = estRep.findById(estudante);
        return curSer.remover(id, est);

    }

    //listar currículo de um estudante
    @GetMapping("/listar/curriculo/estudante/{estudante}")
    public List<CurriculoDTO> listarId(@PathVariable int estudante) {
        return CurriculoDTO.converterLista(curRep.listarCurriculo(estudante));

    }
    
}
