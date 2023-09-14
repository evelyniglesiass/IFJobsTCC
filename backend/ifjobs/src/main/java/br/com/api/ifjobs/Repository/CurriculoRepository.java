package br.com.api.ifjobs.repository;

import org.springframework.data.repository.CrudRepository;

import br.com.api.ifjobs.models.Curriculo;
import br.com.api.ifjobs.models.Estudante; 

public interface CurriculoRepository extends CrudRepository<Curriculo, Integer>{

    Curriculo findById(int id); // retornar curriculo pelo id
    int countById(int id); // retornar 1 se o curriculo existir
    Curriculo findByEstudante(Estudante estudante); // retornar curriculo de um estudante
    
}
