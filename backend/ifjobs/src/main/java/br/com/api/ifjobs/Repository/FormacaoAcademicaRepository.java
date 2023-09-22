package br.com.api.ifjobs.repository;

import org.springframework.data.repository.CrudRepository;
// import org.springframework.stereotype.Repository;

import br.com.api.ifjobs.models.FormacaoAcademica;

// @Repository
public interface FormacaoAcademicaRepository extends CrudRepository<FormacaoAcademica, Integer>{
    
    FormacaoAcademica findById(int id); // retornar formacao pelo id
    int countById(int id); // retornar 1 se a formacao existir
    // int countByNomeUsuario(String nome); // validar nome de usuário
    // int countByEmail(String email); // validar email 
}
