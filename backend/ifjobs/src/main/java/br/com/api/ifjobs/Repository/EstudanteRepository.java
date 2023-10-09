package br.com.api.ifjobs.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import br.com.api.ifjobs.models.Estudante;
 
public interface EstudanteRepository extends CrudRepository<Estudante, Integer>{
 
    // verifica se entidade existe
    boolean existsById (Integer id);

    // consultas básicas
    @Query(value = "SELECT * FROM estudante WHERE id <> :id", nativeQuery = true) 
    Estudante findById(int id); // retornar estudante pelo id
    
    int countById(int id); // retornar 1 se o estudante existir

    // validação
    boolean existsByNomeUsuario(String nomeUsuario); // verifica se nome de usuário existe
    boolean existsByEmail(String email); // verifica se email existe

    int countByNomeUsuario(String nome); // validar nome de usuário
    int countByEmail(String email); // validar email  

    @Query(value = "SELECT Count(nome_usuario) FROM estudante WHERE nome_usuario = :usuario AND id <> :id", nativeQuery = true) 
    int existeUsuario(String usuario, int id); // validar nome de usuario para edição

    @Query(value = "SELECT Count(email) FROM estudante WHERE email = :email AND id <> :id", nativeQuery = true) 
    int existeEmail(String email, int id); // validar email para edição

    // listar
    @Query(value = "SELECT * FROM estudante WHERE id <> :id", nativeQuery = true) 
    List<Estudante> listarEstudantes(int id); // listar estudantes menos o logado

    @Query(value = "SELECT * FROM estudante WHERE id = :id", nativeQuery = true) 
    List<Estudante> listarEstudante(int id); // listar estudante com determinado id

    List<Estudante> findAll(); // listar todos os estudantes
    List<Estudante> findByNomeContains(String nome); // listar estudantes por pesquisa

    Estudante findByEmail(String email); // precisa? ver isso
} 
