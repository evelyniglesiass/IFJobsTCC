package br.com.api.ifjobs.repository;

import org.springframework.data.repository.CrudRepository;
//import org.springframework.stereotype.Repository;

import br.com.api.ifjobs.models.Estudante;

//@Repository
public interface EstudanteRepository extends CrudRepository<Estudante, Integer>{

    Estudante findById(int id); // retornar estudante pelo id
    int countByNomeUsuario(String nome); // validar nome de usuário
    int countByEmail(String email); // validar email 

} 
