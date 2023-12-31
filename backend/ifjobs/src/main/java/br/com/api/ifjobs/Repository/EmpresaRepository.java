package br.com.api.ifjobs.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import br.com.api.ifjobs.models.Empresa;

public interface EmpresaRepository extends CrudRepository<Empresa, Integer> {

    // verifica se entidade existe pelo id
    boolean existsById(Integer id);

    // verifica se email existe
    boolean existsByEmail(String email);

    // verifica se nome de usuário existe
    boolean existsByNomeUsuario(String nomeUsuario);

    // encontrar por email
    Empresa findByEmail(String email);

    // listar empresa por nome
    List<Empresa> findByNomeContainsIgnoreCase(String nome);

    // listar empresas
    List<Empresa> findAll();

    // listar empresas por id
    List<Empresa> findAllById(int id);

    // listar empresas menos o logado
    @Query(value = "SELECT * FROM empresa WHERE empresa.id <> :id", nativeQuery = true)
    List<Empresa> listarEmpresas(int id);

    // listar pesquisa por nome sem a logada
    List<Empresa> findAllByNomeContainingAndIdNot(String nome, int id);

    // Validacao
    @Query(value = "SELECT Count(nome_usuario) FROM empresa WHERE nome_usuario = :usuario AND id <> :id", nativeQuery = true)
    int existeUsuario(String usuario, int id); // validar nome de usuario para edição

    @Query(value = "SELECT Count(email) FROM empresa WHERE email = :email AND id <> :id", nativeQuery = true)
    int existeEmail(String email, int id); // validar email para edição

}
