package br.com.api.ifjobs.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import br.com.api.ifjobs.models.Curso;

@Repository
public interface CursoRepository extends CrudRepository<Curso, Integer>{
    
}
