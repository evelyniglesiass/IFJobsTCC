package br.com.api.ifjobs.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import br.com.api.ifjobs.dto.CursoDTO;
import br.com.api.ifjobs.models.Curriculo;
import br.com.api.ifjobs.models.Curso;
import br.com.api.ifjobs.models.Estudante;
import br.com.api.ifjobs.models.Resposta;
import br.com.api.ifjobs.repository.CurriculoRepository;
import br.com.api.ifjobs.repository.CursoRepository;
import br.com.api.ifjobs.repository.EstudanteRepository;
import br.com.api.ifjobs.security.service.UsuarioAutenticadoService;

@Service
public class CursoService {
    
    @Autowired
    private CursoRepository curRep;

    @Autowired
    private CurriculoRepository curriculoRep;

    @Autowired
    private EstudanteRepository estRep;

    @Autowired
    private Resposta r;

    @Autowired
    private UsuarioAutenticadoService usuarioAutenticadoService;


    //Método para cadastrar cursos
    public ResponseEntity<?> cadastrar(Curso c){
        
        Estudante e = usuarioAutenticadoService.getEstudante();
        
        if(!(curriculoRep.existsById(e.getCurriculo().getId()))){
            r.setMensagem("Currículo não encontrado!");
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, r.getMensagem());
        }

        if(c.getDataFinal().compareTo(c.getDataInicial()) < 0){
            r.setMensagem("A data inicial precisa ser anterior a data final!");
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, r.getMensagem());

        }

        c.setCurriculo(e.getCurriculo());
        e.getCurriculo().getCursos().add(c);
        curRep.save(c);
        r.setMensagem("Cadastro feito com sucesso!");
        return new ResponseEntity<>(r, HttpStatus.CREATED);

    }

    //Método para editar cursos
    public ResponseEntity<?> editar(Curso c){
    
        Estudante e = usuarioAutenticadoService.getEstudante();

        if(!(curriculoRep.existsByEstudante(e))){
            r.setMensagem("Currículo não encontrado!");
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, r.getMensagem());

        } 
        
        if(c.getDataFinal().compareTo(c.getDataInicial()) < 0){
            r.setMensagem("A data inicial precisa ser anterior a data final!");
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, r.getMensagem());

        } 

        c.setCurriculo(e.getCurriculo());
        curRep.save(c);
        r.setMensagem("Edição feita com sucesso!");
        return new ResponseEntity<>(r, HttpStatus.OK);

    }

    //Método para remover curso
    public ResponseEntity<Resposta> remover(int id) {
        
        if(!(curRep.existsById(id))){
            r.setMensagem("Curso não encontrado!");
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, r.getMensagem());
        }

        Curso c = curRep.findById(id).get();
        curRep.delete(c);
        r.setMensagem("Curso removido com sucesso!");
        return new ResponseEntity<>(r, HttpStatus.OK);

    }

    public List<CursoDTO> listar(int id){

        Estudante est = estRep.findById(id).get();
        Curriculo cur = curriculoRep.findById(est.getCurriculo().getId()).get();
        return CursoDTO.converterLista(curRep.listarCurso(cur.getId()));

    }
}
