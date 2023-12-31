package br.com.api.ifjobs.security.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.api.ifjobs.security.controller.response.UsuarioResponse;
import br.com.api.ifjobs.security.service.BuscarUsuarioService;

@RestController
@RequestMapping("/login")
public class LoginController {

    @Autowired
    private BuscarUsuarioService buscarUsuarioService;

    @PostMapping
    public UsuarioResponse login() {
        return buscarUsuarioService.buscar();
    }
}
