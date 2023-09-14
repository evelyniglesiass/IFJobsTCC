package br.com.api.ifjobs.repository;

import org.springframework.data.repository.CrudRepository;

import br.com.api.ifjobs.models.Estudante;

public interface EstudanteRepository extends CrudRepository<Estudante, Integer>{

    Estudante findById(int id); // retornar estudante pelo id
    int countById(int id); // retornar 1 se o estudante existir
    int countByNomeUsuario(String nome); // validar nome de usuário
    int countByEmail(String email); // validar email  

} 
