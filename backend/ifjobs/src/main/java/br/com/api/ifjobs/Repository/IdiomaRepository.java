package br.com.api.ifjobs.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import br.com.api.ifjobs.models.Idioma;

public interface IdiomaRepository extends CrudRepository<Idioma, Integer> {

    // verifica se entidade existe
    boolean existsById(Integer id);

    // listar
    @Query(value = "SELECT * FROM idioma WHERE curriculo_id = :curriculo", nativeQuery = true)
    List<Idioma> listarIdioma(int curriculo); // listar Idioma de um determinado estudante

}
