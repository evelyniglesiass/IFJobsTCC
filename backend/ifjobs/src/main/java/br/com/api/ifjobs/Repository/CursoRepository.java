package br.com.api.ifjobs.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;


import org.springframework.data.repository.CrudRepository;

import br.com.api.ifjobs.models.Curso;

public interface CursoRepository extends CrudRepository<Curso, Integer>{
    
    //verifica se entidade existe
    boolean existsById (Integer id);
    
    // listar curso de determinado estudante
    @Query(value = "SELECT * FROM curso WHERE curriculo_id = :curriculo", nativeQuery = true) 
    List<Curso> listarCurso(int curriculo); 

}
