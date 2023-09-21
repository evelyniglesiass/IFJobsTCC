package br.com.api.ifjobs.repository;

import org.springframework.data.repository.CrudRepository;
// import org.springframework.stereotype.Repository;

import br.com.api.ifjobs.models.Empresa;


// @Repository
public interface EmpresaRepository extends CrudRepository<Empresa, Integer>{

    Empresa findById(int id); // retornar empresa pelo id
    int countByNomeUsuario(String nome); // validar nome de usuário
    int countById(int id); // retornar 1 se a empresa existir
    int countByEmail(String email); // validar email  
    
}
