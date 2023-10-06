package br.com.api.ifjobs.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;

//import java.util.List;

//import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
// import org.springframework.stereotype.Repository;

import br.com.api.ifjobs.models.Curso;

// @Repository
public interface CursoRepository extends CrudRepository<Curso, Integer>{
    
    //verifica se entidade existe
    boolean existsById (Integer id);

    // retornar curso pelo id
    Curso findById(int id);

    // listar curso de determinado estudante
    @Query(value = "SELECT * FROM curso WHERE curriculo_id = :curriculo", nativeQuery = true) 
    List<Curso> listarCurso(int curriculo); 


    //List<Curso> findByNomeContains(String nome); // listar cursos em uma pesquisa

    //List<Curso> findAll();// listar cursos

    //@Query(value = "SELECT * FROM curso", nativeQuery = true) 
    //List<Curso> listarEmpresas();
}
