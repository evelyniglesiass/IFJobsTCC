package br.com.api.ifjobs.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import br.com.api.ifjobs.dto.HabilidadeDTO;
import br.com.api.ifjobs.models.Curriculo;
import br.com.api.ifjobs.models.Estudante;
import br.com.api.ifjobs.models.Habilidade;
import br.com.api.ifjobs.models.Resposta;
import br.com.api.ifjobs.repository.CurriculoRepository;
import br.com.api.ifjobs.repository.EstudanteRepository;
import br.com.api.ifjobs.repository.HabilidadeRepository;
import br.com.api.ifjobs.security.service.UsuarioAutenticadoService;


@Service
public class HabilidadeService {

    @Autowired
    private HabilidadeRepository habRep;
    
    @Autowired
    private CurriculoRepository curRep;

    @Autowired
    private EstudanteRepository estRep;

    @Autowired
    private Resposta r;

    @Autowired
    private UsuarioAutenticadoService usuarioAutenticadoService;

    // método para cadastrar experiencia profissional
    public ResponseEntity<?> cadastrar(Habilidade h){
        
        Estudante estudante = usuarioAutenticadoService.getEstudante();

        if(!(curRep.existsById(estudante.getCurriculo().getId()))){
            r.setMensagem("Currículo não encontrado!");
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, r.getMensagem());

        }
        
        h.setCurriculo(estudante.getCurriculo());
        estudante.getCurriculo().getHabilidades().add(h);
        habRep.save(h);
        r.setMensagem("Cadastro feito com sucesso!");
        return new ResponseEntity<>(r, HttpStatus.CREATED);

    }

    // método para editar experiencia profissional
    public ResponseEntity<?> editar(Habilidade h){
        
        Estudante estudante = usuarioAutenticadoService.getEstudante();

        if(!(habRep.existsById(h.getId()))){
            r.setMensagem("Habilidade não encontrada!");
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, r.getMensagem());
        }
        
        if(!(curRep.existsById(estudante.getCurriculo().getId()))){
            r.setMensagem("Currículo não encontrado!");
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, r.getMensagem());
        }

        h.setCurriculo(estudante.getCurriculo());
        habRep.save(h);
        r.setMensagem("Edição feita com sucesso!");
        return new ResponseEntity<>(r, HttpStatus.OK);

    }

    // método para remover experiencia
    public ResponseEntity<Resposta> remover(int id) {
        
        if(!(habRep.existsById(id))){
            r.setMensagem("Habilidade não encontrada!");
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, r.getMensagem());
        }

        Habilidade h = habRep.findById(id).get();
        habRep.delete(h);
        r.setMensagem("Habilidade removida com sucesso!");
        return new ResponseEntity<>(r, HttpStatus.OK);

    }

    public List<HabilidadeDTO> listarHabilidade(int id){

        Estudante est = estRep.findById(id).get();
        Curriculo cur = curRep.findById(est.getCurriculo().getId()).get();
        return HabilidadeDTO.converterLista(habRep.listarHabilidade(cur.getId()));

    }
    
}
