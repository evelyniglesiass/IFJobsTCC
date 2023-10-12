package br.com.api.ifjobs.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import br.com.api.ifjobs.models.Estudante;
 
public interface EstudanteRepository extends CrudRepository<Estudante, Integer>{
 
    // verifica se entidade existe
    boolean existsById (Integer id);
    
    // validação
    boolean existsByNomeUsuario(String nomeUsuario); // verifica se nome de usuário existe
    boolean existsByEmail(String email); // verifica se email existe  

    // listar
    @Query(value = "SELECT * FROM estudante WHERE id <> :id", nativeQuery = true) 
    List<Estudante> listarEstudantes(int id); // listar estudantes menos o logado

    List<Estudante> findAll(); // listar todos os estudantes
    List<Estudante> findByNomeContains(String nome); // listar estudantes por pesquisa

    Estudante findByEmail(String email); // pro login
} 
