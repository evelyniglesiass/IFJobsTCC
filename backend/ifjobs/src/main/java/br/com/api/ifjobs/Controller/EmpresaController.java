package br.com.api.ifjobs.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.api.ifjobs.models.Empresa;
import br.com.api.ifjobs.services.EmpresaService;

@RestController
public class EmpresaController {
    
    @Autowired
    private EmpresaService empSer;
    
    @PostMapping("/cadastrar/empresa")
    public ResponseEntity<?> cadastrar(@RequestBody Empresa empresa){ 
        return empSer.cadastrar(empresa); 
    }

    //Listagem de empresas
    @GetMapping("/listarEmpresas")
    public Iterable<Empresa> listar(){
        return empSer.listar();
    }

    //Teste
    @GetMapping("/")
    public String rota(){
        return "API funcionando!";
    }
}
