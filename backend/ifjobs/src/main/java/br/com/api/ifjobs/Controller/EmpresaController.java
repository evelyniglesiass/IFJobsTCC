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

import br.com.api.ifjobs.dto.EmpresaDTO;
import br.com.api.ifjobs.models.Empresa;
import br.com.api.ifjobs.models.Resposta;
import br.com.api.ifjobs.repository.EmpresaRepository;
import br.com.api.ifjobs.services.EmpresaService;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/empresas")
public class EmpresaController {
    
    @Autowired
    private EmpresaService empSer;

    @Autowired
    private EmpresaRepository empRep;

    //cadastro de empresas
    @PostMapping()
    public ResponseEntity<?> cadastrar(@Valid @RequestBody Empresa empresa){ 
        return empSer.cadastrar(empresa); 
    }

    //edicão de empresas
    @PutMapping()
    public ResponseEntity<?> editar(@Valid @RequestBody Empresa empresa){ 
        return empSer.editar(empresa);
    }

    //exclusão de empresa
    @DeleteMapping()
    public ResponseEntity<Resposta> remover(@PathVariable int id){ 
        return empSer.remover(id);
    }

    //pesquisa de empresas
    //@GetMapping("/listar/pesquisa/{nome}")
    //public List<Empresa> listarPesquisa(@PathVariable String nome) {
     //   return empRep.findByNomeContains(nome); 

   // }

    //listar empresa por id
    @GetMapping("/listar/id/{id}")
    public List<EmpresaDTO> listarId(@PathVariable int id){
        return EmpresaDTO.converterLista(empRep.listarEmpresas(id));
    }

    //listagem de empresas por empresas
    @GetMapping("/listar/{id}")
    public List<EmpresaDTO> listarEmpresas(@PathVariable int id) {
        return EmpresaDTO.converterLista(empRep.listarEmpresas(id));

    }

    //listagem de empresas por estudantes
    @GetMapping("/listar")
    public List<EmpresaDTO> listarTodas() {
        return EmpresaDTO.converterLista(empRep.findAll());

    }
}
