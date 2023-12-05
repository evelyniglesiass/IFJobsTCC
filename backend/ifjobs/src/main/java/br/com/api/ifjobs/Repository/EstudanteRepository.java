package br.com.api.ifjobs.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import br.com.api.ifjobs.models.Estudante;

public interface EstudanteRepository extends CrudRepository<Estudante, Integer> {

    // verifica se entidade existe
    boolean existsById(Integer id);

    // validação
    boolean existsByNomeUsuario(String nomeUsuario); // verifica se nome de usuário existe

    boolean existsByEmail(String email); // verifica se email existe

    @Query(value = "SELECT Count(nome_usuario) FROM estudante WHERE nome_usuario = :usuario AND id <> :id", nativeQuery = true)
    int existeUsuario(String usuario, int id); // validar nome de usuario para edição

    @Query(value = "SELECT Count(email) FROM estudante WHERE email = :email AND id <> :id", nativeQuery = true)
    int existeEmail(String email, int id); // validar email para edição

    // listar
    @Query(value = "SELECT * FROM estudante WHERE id <> :id", nativeQuery = true)
    List<Estudante> listarEstudantes(int id); // listar estudantes menos o logado

    List<Estudante> findAll(); // listar todos os estudantes

    List<Estudante> findByNomeContainsIgnoreCase(String nome); // listar estudantes por pesquisa

    // listar pesquisa estudantes menos o logado
    List<Estudante> findAllByNomeContainingAndIdNot(String nome, int id);

    Estudante findByEmail(String email); // pro login

    // Candidatura
    @Query(value = "Select * From estudante Left Join candidatura On estudante.id = candidatura.estudante_id Where estudante.id = candidatura.estudante_id And candidatura.vaga_id = :id", nativeQuery = true)
    List<Estudante> listarEstudantesCandidatura(int id); // listar estudantes candidatos a uma vaga / pegar id da vaga

}
