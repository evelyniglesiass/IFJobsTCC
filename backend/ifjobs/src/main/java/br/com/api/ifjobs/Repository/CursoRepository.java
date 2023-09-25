package br.com.api.ifjobs.repository;

//import java.util.List;

//import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
// import org.springframework.stereotype.Repository;

import br.com.api.ifjobs.models.Curso;

// @Repository
public interface CursoRepository extends CrudRepository<Curso, Integer>{
    
    Curso findById(int id); // retornar curso pelo id

    int countById(int id); // retornar 1 se o curso existir

    //List<Curso> findByNomeContains(String nome); // listar cursos em uma pesquisa

    //List<Curso> findAll();// listar cursos

    //@Query(value = "SELECT * FROM curso", nativeQuery = true) 
    //List<Curso> listarEmpresas();
}
