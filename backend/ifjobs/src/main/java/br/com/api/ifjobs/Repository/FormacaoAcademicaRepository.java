package br.com.api.ifjobs.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;

import org.springframework.data.repository.CrudRepository;

import br.com.api.ifjobs.models.FormacaoAcademica;

public interface FormacaoAcademicaRepository extends CrudRepository<FormacaoAcademica, Integer>{
    
    // verifica se entidade existe
    boolean existsById (Integer id);

    // listar
    @Query(value = "SELECT * FROM formacao_academica WHERE curriculo_id = :curriculo", nativeQuery = true) 
    List<FormacaoAcademica> listarFormacao(int curriculo); // listar formacao de um determinado estudante
}
