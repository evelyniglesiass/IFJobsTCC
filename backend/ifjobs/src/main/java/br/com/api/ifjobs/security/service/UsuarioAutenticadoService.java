package br.com.api.ifjobs.security.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import br.com.api.ifjobs.models.Empresa;
import br.com.api.ifjobs.models.Estudante;
import br.com.api.ifjobs.repository.EmpresaRepository;
import br.com.api.ifjobs.repository.EstudanteRepository;
import br.com.api.ifjobs.security.UsuarioSecurity;

import static java.util.Objects.isNull;

@Service
public class UsuarioAutenticadoService {
    
    @Autowired
    private EmpresaRepository empresaRepository;

    @Autowired
    private EstudanteRepository estudanteRepository;

    private UsuarioSecurity getUser(){

        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        UsuarioSecurity usuarioSecurity = (UsuarioSecurity) authentication.getPrincipal();

        return usuarioSecurity;
    }

    public Empresa getEmpresa(){

        UsuarioSecurity user = getUser();

        if(isNull(user)){
            return null;
        }

        return empresaRepository.findById(user.getId()).get();//ver método
    }

    public Estudante getEstudante(){

        UsuarioSecurity user = getUser();

        if(isNull(user)){
            return null;
        }

        return estudanteRepository.findById(user.getId()).get();
    }
}
