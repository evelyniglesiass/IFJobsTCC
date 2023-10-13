package br.com.api.ifjobs.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import br.com.api.ifjobs.dto.IdiomaDTO;
import br.com.api.ifjobs.models.Curriculo;
import br.com.api.ifjobs.models.Estudante;
import br.com.api.ifjobs.models.Idioma;
import br.com.api.ifjobs.models.Resposta;
import br.com.api.ifjobs.repository.CurriculoRepository;
import br.com.api.ifjobs.repository.EstudanteRepository;
import br.com.api.ifjobs.repository.IdiomaRepository;
import br.com.api.ifjobs.security.service.UsuarioAutenticadoService;


@Service
public class IdiomaService {

    @Autowired
    private IdiomaRepository idiRep;
    
    @Autowired
    private CurriculoRepository curRep;

    @Autowired
    private EstudanteRepository estRep;

    @Autowired
    private Resposta r;

    @Autowired
    private UsuarioAutenticadoService usuarioAutenticadoService;

    // método para cadastrar experiencia profissional
    public ResponseEntity<?> cadastrar(Idioma i){
        
        Estudante estudante = usuarioAutenticadoService.getEstudante();

        if(!(curRep.existsByEstudante(estudante))){
            r.setMensagem("Currículo não encontrado!");
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, r.getMensagem());

        }
        
        i.setCurriculo(estudante.getCurriculo());
        estudante.getCurriculo().getIdiomas().add(i);
        idiRep.save(i);
        r.setMensagem("Cadastro feito com sucesso!");
        return new ResponseEntity<>(r, HttpStatus.CREATED);

    }

    // método para editar experiencia profissional
    public ResponseEntity<?> editar(Idioma i){
        
        Estudante estudante = usuarioAutenticadoService.getEstudante();

        if(!(idiRep.existsById(i.getId()))){
            r.setMensagem("Idioma não encontrado!");
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, r.getMensagem());
        }
        
        if(!(curRep.existsByEstudante(estudante))){
            r.setMensagem("Currículo não encontrado!");
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, r.getMensagem());
        }

        i.setCurriculo(estudante.getCurriculo());
        idiRep.save(i);
        r.setMensagem("Edição feita com sucesso!");
        return new ResponseEntity<>(r, HttpStatus.OK);

    }

    // método para remover experiencia
    public ResponseEntity<Resposta> remover(int id) {
        
        if(!(idiRep.existsById(id))){
            r.setMensagem("Idioma não encontrado!");
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, r.getMensagem());
        }

        Idioma i = idiRep.findById(id).get();
        idiRep.delete(i);
        r.setMensagem("Idioma removido com sucesso!");
        return new ResponseEntity<>(r, HttpStatus.OK);

    }

    public List<IdiomaDTO> listarIdioma(int id){

        Estudante est = estRep.findById(id).get();
        Curriculo cur = curRep.findById(est.getCurriculo().getId()).get();
        return IdiomaDTO.converterLista(idiRep.listarIdioma(cur.getId()));

    }
    
}
