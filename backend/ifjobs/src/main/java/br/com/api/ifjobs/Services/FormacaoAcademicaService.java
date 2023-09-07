package br.com.api.ifjobs.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.api.ifjobs.models.FormacaoAcademica;
import br.com.api.ifjobs.repository.FormacaoAcademicaRepository;

@Service
public class FormacaoAcademicaService {
    
    @Autowired
    private FormacaoAcademicaRepository far;

    //Método de listagem de empresas
    public Iterable<FormacaoAcademica> listar(){
        return far.findAll();
    }
}
