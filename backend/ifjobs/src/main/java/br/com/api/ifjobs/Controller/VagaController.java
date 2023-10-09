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

import br.com.api.ifjobs.dto.VagaDTO;
import br.com.api.ifjobs.models.Empresa;
import br.com.api.ifjobs.models.Resposta;
import br.com.api.ifjobs.models.Vaga;
import br.com.api.ifjobs.repository.EmpresaRepository;
import br.com.api.ifjobs.repository.VagaRepository;
import br.com.api.ifjobs.services.VagaService;
 
@RestController
@RequestMapping("/vagas")
public class VagaController {

    @Autowired 
    private VagaRepository vagRep; 

    @Autowired 
    private VagaService vagSer; 

    @Autowired
    private EmpresaRepository empRep;

    // cadastrar vaga
    @Secured("ROLE_EMPRESA")
    @PostMapping()
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<?> cadastrar(@Valid @RequestBody Vaga vaga, @PathVariable int empresa){ 
        Empresa emp = empRep.findById(empresa);
        return vagSer.cadastrar(vaga, emp);
    }

    // editar vaga
    @Secured("ROLE_EMPRESA")
    @PutMapping()
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<?> editar(@Valid @RequestBody Vaga vaga, @PathVariable int empresa){ 
        Empresa emp = empRep.findById(empresa);
        return vagSer.cadastrar(vaga, emp);
    }

    // excluir vaga
    @Secured("ROLE_EMPRESA")
    @DeleteMapping() 
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<Resposta> remover(@PathVariable int id){ 
        return vagSer.remover(id);
    }

    // listar todas as vagas
    @GetMapping("/listar")
    public List<VagaDTO> listarVagaCurso() {
        return VagaDTO.converterLista(vagRep.listarVagas());

    }

    // listar vagas de uma empresa
    @GetMapping("/listar/empresa/{empresa}")
    public List<VagaDTO> listarId(@PathVariable int empresa) {
        return VagaDTO.converterLista(vagRep.listarVagasEmpresa(empresa));

    }

    // pesquisa por titulo
    @GetMapping("/listar/pesquisa/{titulo}")
    public List<VagaDTO> listarPesquisa(@PathVariable String titulo) {
        return VagaDTO.converterLista(vagRep.findByTituloContains(titulo));

    }

}
