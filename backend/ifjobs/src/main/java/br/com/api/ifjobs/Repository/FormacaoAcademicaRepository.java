package br.com.api.ifjobs.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;

//import java.util.List;

//import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
// import org.springframework.stereotype.Repository;

import br.com.api.ifjobs.models.FormacaoAcademica;

// @Repository
public interface FormacaoAcademicaRepository extends CrudRepository<FormacaoAcademica, Integer>{
    
    //verifica se entidade existe
    boolean existsById (Integer id);

    // retornar formacao pelo id
    FormacaoAcademica findById(int id); 

     // listar formacao de um determinado estudante
    @Query(value = "SELECT * FROM formacao_academica WHERE curriculo_id = :curriculo", nativeQuery = true) 
    List<FormacaoAcademica> listarFormacao(int curriculo);
    
    //List<FormacaoAcademica> findByNomeContains(String nome); // listar empresas em uma pesquisa

    //List<FormacaoAcademica> findAll();// listar formacao

    //@Query(value = "SELECT * FROM formacao", nativeQuery = true) 
    //List<FormacaoAcademica> listarFormacoesAcademicas();
}
