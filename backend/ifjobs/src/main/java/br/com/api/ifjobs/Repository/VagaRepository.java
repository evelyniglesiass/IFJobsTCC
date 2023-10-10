package br.com.api.ifjobs.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import br.com.api.ifjobs.models.Vaga; 

public interface VagaRepository extends CrudRepository<Vaga, Integer>{

    // verifica se entidade existe
    boolean existsById (Integer id);

    // consultas básicas
    int countById(int id); // retornar 1 se a vaga existir
    
    // listar
    @Query(value = "SELECT * FROM vaga WHERE empresa_id = :id AND status = 1", nativeQuery = true)
    List<Vaga> listarVagasEmpresa(int id); // listar vagas de determinada empresa

    @Query(value = "SELECT * FROM vaga WHERE status = 1", nativeQuery = true) 
    List<Vaga> listarVagas(); // listar vagas para o curso do estudante logado

    List<Vaga> findByTituloContains(String titulo); // listar vagas por pesquisa

} 
