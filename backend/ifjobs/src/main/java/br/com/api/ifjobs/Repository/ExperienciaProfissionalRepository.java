package br.com.api.ifjobs.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import br.com.api.ifjobs.models.ExperienciaProfissional;

public interface ExperienciaProfissionalRepository extends CrudRepository<ExperienciaProfissional, Integer> {

    // verifica se entidade existe
    boolean existsById(Integer id);

    // listar
    @Query(value = "SELECT * FROM experiencia_profissional WHERE curriculo_id = :curriculo", nativeQuery = true)
    List<ExperienciaProfissional> listarExperiencia(int curriculo); // listar experiencia de um determinado estudante

}
