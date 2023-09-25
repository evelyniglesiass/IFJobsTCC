package br.com.api.ifjobs.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
// import org.springframework.stereotype.Repository;

import br.com.api.ifjobs.models.Empresa;

// @Repository
public interface EmpresaRepository extends CrudRepository<Empresa, Integer>{

    Empresa findById(int id); // retornar empresa pelo id

    int countByNomeUsuario(String nome); // validar nome de usuário

    int countById(int id); // retornar 1 se a empresa existir

    int countByEmail(String email); // validar email  

    List<Empresa> findByNomeContains(String nome); // listar empresas em uma pesquisa

    List<Empresa> findAll();// listar empresas

    @Query(value = "SELECT * FROM empresa", nativeQuery = true) 
    List<Empresa> listarEmpresas();
    
}
