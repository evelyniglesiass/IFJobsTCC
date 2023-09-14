package br.com.api.ifjobs.repository;

import org.springframework.data.repository.CrudRepository;

import br.com.api.ifjobs.models.Vaga; 

public interface VagaRepository extends CrudRepository<Vaga, Integer>{

    Vaga findById(int id); // retornar vaga pelo id
    int countById(int id); // retornar 1 se a vaga existir
        
} 
