package br.com.api.ifjobs.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import br.com.api.ifjobs.models.Curriculo;
import br.com.api.ifjobs.models.Estudante;

public interface CurriculoRepository extends CrudRepository<Curriculo, Integer> {

    // verifica se entidade existe
    boolean existsById(Integer id);

    // retorna curriculo de um estudante
    Curriculo findByEstudante(Estudante estudante);

    // verifica se estudnate tem curriculo
    boolean existsByEstudante(Estudante estudante);

    // listar curriculo de determinado estudante
    List<Curriculo> findAllByEstudante(Estudante estudante);

}
