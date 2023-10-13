package br.com.api.ifjobs.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import br.com.api.ifjobs.models.Habilidade;

public interface HabilidadeRepository extends CrudRepository<Habilidade, Integer>{
    
    // verifica se entidade existe
    boolean existsById (Integer id);
 
    // listar
    @Query(value = "SELECT * FROM habilidade WHERE curriculo_id = :curriculo", nativeQuery = true) 
    List<Habilidade> listarHabilidade(int curriculo); // listar habilidade de um determinado estudante
    
}
