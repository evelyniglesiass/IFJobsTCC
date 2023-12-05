package br.com.api.ifjobs.security.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;

import br.com.api.ifjobs.models.Empresa;
import br.com.api.ifjobs.models.Estudante;
import br.com.api.ifjobs.repository.EmpresaRepository;
import br.com.api.ifjobs.repository.EstudanteRepository;
import br.com.api.ifjobs.security.UsuarioSecurity;

@Service
public class BuscarUsuarioSecurityService implements UserDetailsService {

    @Autowired
    private EmpresaRepository empresaRepository;

    @Autowired
    private EstudanteRepository estudanteRepository;

    @Override
    public UserDetails loadUserByUsername(String email) {

        if (empresaRepository.existsByEmail(email)) {

            Empresa empresa = empresaRepository.findByEmail(email);

            return new UsuarioSecurity(empresa);
        } else {

            Estudante estudante = estudanteRepository.findByEmail(email);

            return new UsuarioSecurity(estudante);
        }
    }
}
