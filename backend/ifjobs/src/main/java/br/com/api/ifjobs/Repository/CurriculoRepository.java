package br.com.api.ifjobs.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import br.com.api.ifjobs.models.Curriculo;
import br.com.api.ifjobs.models.Estudante; 

public interface CurriculoRepository extends CrudRepository<Curriculo, Integer>{

    // consultas básicas
    Curriculo findById(int id); // retornar curriculo pelo id
    int countById(int id); // retornar 1 se o curriculo existir
    Curriculo findByEstudante(Estudante estudante); // retornar curriculo de um estudante

    // listar
    @Query(value = "SELECT * FROM curriculo WHERE estudante_id = :estudante", nativeQuery = true) 
    List<Curriculo> listarCurriculo(int estudante); // listar curriculo de determinado estudante

}
