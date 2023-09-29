package br.com.api.ifjobs.security.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.api.ifjobs.models.Empresa;

@Service
public class BuscarUsuarioService {

    @Autowired
    private UsuarioAutenticadoService usuarioAutenticadoService;
    
    public Empresa buscar(){

        return usuarioAutenticadoService.getEmpresa();
    }
}
