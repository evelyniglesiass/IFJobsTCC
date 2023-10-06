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

import br.com.api.ifjobs.dto.EmpresaDTO;
import br.com.api.ifjobs.models.Empresa;
import br.com.api.ifjobs.models.Resposta;
import br.com.api.ifjobs.repository.EmpresaRepository;
import br.com.api.ifjobs.services.EmpresaService;

@RestController
@RequestMapping("/empresas")
public class EmpresaController {
    
    @Autowired
    private EmpresaService empSer;

    @Autowired
    private EmpresaRepository empRep;

    //cadastro de empresas
    @PostMapping()
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<?> cadastrar(@Valid @RequestBody Empresa empresa){ 
        return empSer.cadastrar(empresa); 
    }

    //edicão de empresas
    @Secured("ROLE_EMPRESA")
    @PutMapping()
    public ResponseEntity<?> editar(@Valid @RequestBody Empresa empresa){ 
        return empSer.editar(empresa);
    }

    //exclusão de empresa
    @DeleteMapping()
    public ResponseEntity<Resposta> remover(@PathVariable int id){ 
        return empSer.remover(id);
    }

    //pesquisa de empresas por nome
    @GetMapping("/listar/pesquisa/{nome}")
    public List<EmpresaDTO> listarPesquisa(@PathVariable String nome) {
        return EmpresaDTO.converterLista(empRep.findByNomeContains(nome)); 
   }

    //listar empresa expecífica
    @GetMapping("/listar/id/{id}")
    public List<EmpresaDTO> listarId(@PathVariable int id){
        return EmpresaDTO.converterLista(empRep.listarEmpresas(id));
    }

    //listagem de empresas (onde a própia empresa não aparece)
    @GetMapping("/listar/{id}")
    public List<EmpresaDTO> listarEmpresas(@PathVariable int id) {
        return EmpresaDTO.converterLista(empRep.listarEmpresas(id));

    }

    //listagem de empresas (visão do estudante)
    @GetMapping("/listar")
    public List<EmpresaDTO> listarTodas() {
        return EmpresaDTO.converterLista(empRep.findAll());

    }
}
