package br.com.api.ifjobs.repository;

import org.springframework.data.repository.CrudRepository;
// import org.springframework.stereotype.Repository;

import br.com.api.ifjobs.models.Curriculo;
import br.com.api.ifjobs.models.Estudante;


// @Repository
public interface CurriculoRepository extends CrudRepository<Curriculo, Integer>{

    Curriculo findByEstudante(Estudante estudante);
    
}
