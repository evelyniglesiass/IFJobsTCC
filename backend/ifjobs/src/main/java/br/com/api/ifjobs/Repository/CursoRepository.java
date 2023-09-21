package br.com.api.ifjobs.repository;

import org.springframework.data.repository.CrudRepository;
// import org.springframework.stereotype.Repository;

import br.com.api.ifjobs.models.Curso;

// @Repository
public interface CursoRepository extends CrudRepository<Curso, Integer>{
    
    Curso findById(int id); // retornar curso pelo id
    int countById(int id); // retornar 1 se o curso existir
    int countByNomeUsuario(String nome); // validar nome de usuário
    int countByEmail(String email); // validar email  
}
