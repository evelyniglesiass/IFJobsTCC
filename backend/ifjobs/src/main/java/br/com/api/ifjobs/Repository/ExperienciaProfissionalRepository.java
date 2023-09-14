package br.com.api.ifjobs.repository;

import org.springframework.data.repository.CrudRepository;

import br.com.api.ifjobs.models.ExperienciaProfissional;

public interface ExperienciaProfissionalRepository extends CrudRepository<ExperienciaProfissional, Integer>{

    ExperienciaProfissional findById(int id); // retornar experiencia pelo id
    int countById(int id); // retornar 1 se a experiencia existir
    
} 
