package br.com.api.ifjobs.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import br.com.api.ifjobs.models.PalavraChave;

public interface PalavraChaveRepository extends CrudRepository<PalavraChave, Integer> {

    // verifica se entidade existe
    boolean existsById(Integer id);

    // listar
    @Query(value = "SELECT * FROM palavra_chave WHERE vaga_id = :vaga", nativeQuery = true)
    List<PalavraChave> listarPalavraChave(int vaga); // listar PalavraChave de uma determinada vaga

}
