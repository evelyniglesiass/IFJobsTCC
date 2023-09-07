package br.com.api.ifjobs.repository;

import org.springframework.data.repository.CrudRepository;
// import org.springframework.stereotype.Repository;

import br.com.api.ifjobs.models.FormacaoAcademica;

// @Repository
public interface FormacaoAcademicaRepository extends CrudRepository<FormacaoAcademica, Integer>{
    
}
