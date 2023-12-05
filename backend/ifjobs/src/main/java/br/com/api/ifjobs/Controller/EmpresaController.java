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
import br.com.api.ifjobs.services.EmpresaService;

@RestController
@RequestMapping("/empresas")
public class EmpresaController {

    @Autowired
    private EmpresaService empSer;

    // cadastro de empresas
    @PostMapping()
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<?> cadastrar(@Valid @RequestBody Empresa empresa) {
        return empSer.cadastrar(empresa);
    }

    // edicão de empresas
    @Secured("ROLE_EMPRESA")
    @PutMapping()
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<?> editar(@Valid @RequestBody Empresa empresa) {
        return empSer.editar(empresa);
    }

    // exclusão de empresa
    @Secured("ROLE_EMPRESA")
    @DeleteMapping()
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<Resposta> remover() {
        return empSer.remover();
    }

    // pesquisa de empresas por nome
    @Secured("ROLE_ESTUDANTE")
    @GetMapping("/listar/pesquisa/{nome}")
    public List<EmpresaDTO> listarPorNome(@PathVariable String nome) {
        return empSer.listarPorNome(nome);
    }

    // pesquisa de empresas por nome sem a logada
    @Secured("ROLE_EMPRESA")
    @GetMapping("/listar/pesquisa/sem/{nome}")
    public List<EmpresaDTO> listarPorNomeSemLogada(@PathVariable String nome) {
        return empSer.listarPorNomeSemLogada(nome);
    }

    // listagem de empresas (onde a própia empresa não aparece)
    @Secured("ROLE_EMPRESA")
    @GetMapping("/listar/empresa")
    public List<EmpresaDTO> listarTodosEmpresa() {
        return empSer.listarTodosEmpresa();
    }

    // listagem de empresas (visão do estudante)
    @Secured("ROLE_ESTUDANTE")
    @GetMapping("/listar/estudante")
    public List<EmpresaDTO> listarTodosEstudante() {
        return empSer.listarTodosEstudante();
    }

    // listar empresa expecífico
    @Secured({ "ROLE_ESTUDANTE", "ROLE_EMPRESA" })
    @GetMapping("/listar/id/{id}")
    public EmpresaDTO listarPorId(@PathVariable int id) {
        return empSer.listarPorId(id);
    }
}
