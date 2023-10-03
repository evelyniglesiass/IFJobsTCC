package br.com.api.ifjobs.security.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.api.ifjobs.security.controller.response.UsuarioResponse;

@Service
public class BuscarUsuarioService {

    @Autowired
    private UsuarioAutenticadoService usuarioAutenticadoService;
    
    public UsuarioResponse buscar(){
        
        return usuarioAutenticadoService.getResponse();
    }
}
