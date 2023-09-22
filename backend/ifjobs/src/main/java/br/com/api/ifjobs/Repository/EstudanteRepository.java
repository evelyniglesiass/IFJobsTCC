package br.com.api.ifjobs.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import br.com.api.ifjobs.models.Estudante;

public interface EstudanteRepository extends CrudRepository<Estudante, Integer>{

    Estudante findById(int id); // retornar estudante pelo id
    int countById(int id); // retornar 1 se o estudante existir
    int countByNomeUsuario(String nome); // validar nome de usuário
    int countByEmail(String email); // validar email   

    @Query(value = "SELECT Count(nome_usuario) FROM estudante WHERE nome_usuario = :usuario AND id <> :id", nativeQuery = true) 
    int existeUsuario(String usuario, int id); // validar nome de usuario

    @Query(value = "SELECT Count(email) FROM estudante WHERE email = :email AND id <> :id", nativeQuery = true) 
    int existeEmail(String email, int id); // validar email

    @Query(value = "SELECT id, cidade, email,idade, nome, nome_usuario, senha, telefone FROM estudante", nativeQuery = true) 
    List<Estudante> listarEstudantes(); // validar email

    List<Estudante> findByNomeContains(String nome); // listar estudantes em uma pesquisa
    List<Estudante> findAll(); // listar estudantes

} 
