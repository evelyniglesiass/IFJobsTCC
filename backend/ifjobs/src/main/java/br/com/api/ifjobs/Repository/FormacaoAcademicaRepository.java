package br.com.api.ifjobs.repository;

//import java.util.List;

//import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
// import org.springframework.stereotype.Repository;

import br.com.api.ifjobs.models.FormacaoAcademica;

// @Repository
public interface FormacaoAcademicaRepository extends CrudRepository<FormacaoAcademica, Integer>{
    
    FormacaoAcademica findById(int id); // retornar formacao pelo id

    int countById(int id); // retornar 1 se a formacao existir

    //List<FormacaoAcademica> findByNomeContains(String nome); // listar empresas em uma pesquisa

    //List<FormacaoAcademica> findAll();// listar formacao

    //@Query(value = "SELECT * FROM formacao", nativeQuery = true) 
    //List<FormacaoAcademica> listarFormacoesAcademicas();
}
