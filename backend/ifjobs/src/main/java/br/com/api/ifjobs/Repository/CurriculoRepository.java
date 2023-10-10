package br.com.api.ifjobs.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import br.com.api.ifjobs.models.Curriculo;
import br.com.api.ifjobs.models.Estudante; 
 
public interface CurriculoRepository extends CrudRepository<Curriculo, Integer>{

    // verifica se entidade existe
    boolean existsById (Integer id);

    int countById(int id); // retornar 1 se o curriculo existir
    
    Curriculo findByEstudante(Estudante estudante); // retornar curriculo de um estudante

    @Query(value = "SELECT count(id) FROM curriculo WHERE estudante_id = :estudante", nativeQuery = true) 
    int validarCurriculo(int estudante); // verificar se o estudante já possui curriculo

    //( O mesmo de cima, Evelyn!!!!)
    //( O mesmo de cima, Evelyn!!!!)
    //( O mesmo de cima, Evelyn!!!!)
    //( O mesmo de cima, Evelyn!!!!)
    //( O mesmo de cima, Evelyn!!!!)
    boolean existsByEstudante(Estudante estudante);

    // listar
    @Query(value = "SELECT * FROM curriculo WHERE estudante_id = :estudante", nativeQuery = true) 
    List<Curriculo> listarCurriculo(int estudante); // listar curriculo de determinado estudante

    //Listar( O mesmo de cima, Evelyn!!!!)
    //Listar( O mesmo de cima, Evelyn!!!!)
    //Listar( O mesmo de cima, Evelyn!!!!)
//Listar( O mesmo de cima, Evelyn!!!!)
    //Listar( O mesmo de cima, Evelyn!!!!)
    List<Curriculo> findAllByEstudante(Estudante estudante);

}
