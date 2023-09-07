package br.com.api.ifjobs.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.api.ifjobs.models.Curso;
import br.com.api.ifjobs.repository.CursoRepository;

@Service
public class CursoService {
    
    @Autowired
    private CursoRepository cr;

    //Método de listagem de cursos
    public Iterable<Curso> listar(){
        return cr.findAll();
    }
}
