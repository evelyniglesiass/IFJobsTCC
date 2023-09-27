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

import br.com.api.ifjobs.dto.VagaDTO;
import br.com.api.ifjobs.models.Empresa;
import br.com.api.ifjobs.models.Resposta;
import br.com.api.ifjobs.models.Vaga;
import br.com.api.ifjobs.repository.EmpresaRepository;
import br.com.api.ifjobs.repository.VagaRepository;
import br.com.api.ifjobs.services.VagaService;
 
@RestController
public class VagaController {

    @Autowired 
    private VagaRepository vagRep; 

    @Autowired 
    private VagaService vagSer; 

    @Autowired
    private EmpresaRepository empRep;

    @PostMapping("/cadastrar/vaga/{empresa}")
    public ResponseEntity<?> cadastrar(@RequestBody Vaga vaga, @PathVariable int empresa){ 
        Empresa emp = empRep.findById(empresa);
        return vagSer.cadastrar(vaga, emp);
    }

    @PutMapping("/editar/vaga/{empresa}")
    public ResponseEntity<?> editar(@RequestBody Vaga vaga, @PathVariable int empresa){ 
        Empresa emp = empRep.findById(empresa);
        return vagSer.cadastrar(vaga, emp);
    }

    @DeleteMapping("/remover/vaga/{id}") 
    public ResponseEntity<Resposta> remover(@PathVariable int id){ 
        return vagSer.remover(id);
    }

    @GetMapping("/listar/vagas")
    public List<VagaDTO> listarVagaCurso() {
        return VagaDTO.converterLista(vagRep.listarVagas());

    }

    @GetMapping("/listar/vagas/empresa/{empresa}")
    public List<VagaDTO> listarId(@PathVariable int empresa) {
        return VagaDTO.converterLista(vagRep.listarVagasEmpresa(empresa));

    }
    
}
