package br.com.api.ifjobs.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import br.com.api.ifjobs.models.Estudante;

public interface EstudanteRepository extends CrudRepository<Estudante, Integer>{
 
    // consultas básicas
    Estudante findById(int id); // retornar estudante pelo id
    int countById(int id); // retornar 1 se o estudante existir

    // validação
    int countByNomeUsuario(String nome); // validar nome de usuário
    int countByEmail(String email); // validar email  

    @Query(value = "SELECT Count(nome_usuario) FROM estudante WHERE nome_usuario = :usuario AND id <> :id", nativeQuery = true) 
    int existeUsuario(String usuario, int id); // validar nome de usuario

    @Query(value = "SELECT Count(email) FROM estudante WHERE email = :email AND id <> :id", nativeQuery = true) 
    int existeEmail(String email, int id); // validar email

    // listar
    @Query(value = "SELECT * FROM estudante WHERE id <> :id", nativeQuery = true) 
    List<Estudante> listarEstudantes(int id); // listar estudantes menos o logado

    @Query(value = "SELECT * FROM estudante WHERE id = :id", nativeQuery = true) 
    List<Estudante> listarEstudante(int id); // listar estudante com determinado id

    List<Estudante> findAll(); // listar todos os estudantes
    List<Estudante> findByNomeContains(String nome); // listar estudantes em uma pesquisa

    Estudante findByEmail(String email);
} 
