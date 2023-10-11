package br.com.api.ifjobs.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import br.com.api.ifjobs.dto.CurriculoDTO;
import br.com.api.ifjobs.models.Curriculo;
import br.com.api.ifjobs.models.Estudante;
import br.com.api.ifjobs.models.Resposta;
import br.com.api.ifjobs.repository.CurriculoRepository;
import br.com.api.ifjobs.security.service.UsuarioAutenticadoService;
 
@Service
public class CurriculoService {

    @Autowired
    private CurriculoRepository curRep; 

    @Autowired
    private Resposta r;

    @Autowired
    private UsuarioAutenticadoService usuarioAutenticadoService;

    // método para cadastrar curriculos
    public ResponseEntity<?> cadastrar(Curriculo c){

        Estudante e = usuarioAutenticadoService.getEstudante();
        
        if(curRep.existsById(e.getCurriculo().getId())){
            r.setMensagem("Esse usuário já possui um currículo!");
            throw new ResponseStatusException(HttpStatus.CONFLICT, r.getMensagem());
        }

        c.setEstudante(e);
        e.setCurriculo(c);
        curRep.save(c);
        r.setMensagem("Cadastro feito com sucesso!");
        return new ResponseEntity<>(r, HttpStatus.CREATED);
        
    }

    // método para editar curriculos 
    public ResponseEntity<?> editar(Curriculo c){

        Estudante e = usuarioAutenticadoService.getEstudante(); // ver se precisa find by id
        
        if(!(curRep.existsById(e.getCurriculo().getId()))){
            r.setMensagem("Currículo não encontrado!");
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, r.getMensagem());
        }

        // e.setCurriculo(c); necessário? dá erro com ele
        e.setCurriculo(c);
        c.setEstudante(e);
        curRep.save(c);
        r.setMensagem("Edição feita com sucesso!");
        return new ResponseEntity<>(r, HttpStatus.OK);
        
    }

    // método para remover curriculo
    public ResponseEntity<Resposta> remover() {
        
        Estudante e = usuarioAutenticadoService.getEstudante();

        if(!(curRep.existsById(e.getCurriculo().getId()))){
            r.setMensagem("Currículo não encontrado!");
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, r.getMensagem());
        }

        e.setCurriculo(null);
        curRep.deleteById(e.getCurriculo().getId());
        r.setMensagem("Currículo removido com sucesso!");
        return new ResponseEntity<>(r, HttpStatus.OK);

    }
    

    //listar
    public CurriculoDTO listar(){

        Estudante e = usuarioAutenticadoService.getEstudante();

        Curriculo curriculo = curRep.findByEstudante(e);

        return CurriculoDTO
            .builder()
            .id(curriculo.getId())
            .idiomas(curriculo.getIdiomas())
            .resumo(curriculo.getResumo())
            .habilidades(curriculo.getHabilidades())    
            .build();

    }
}
