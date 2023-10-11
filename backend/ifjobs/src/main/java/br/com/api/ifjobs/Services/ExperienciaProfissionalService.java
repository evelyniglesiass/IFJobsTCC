package br.com.api.ifjobs.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import br.com.api.ifjobs.dto.ExperienciaProfissionalDTO;
import br.com.api.ifjobs.models.Curriculo;
import br.com.api.ifjobs.models.Estudante;
import br.com.api.ifjobs.models.ExperienciaProfissional;
import br.com.api.ifjobs.models.Resposta;
import br.com.api.ifjobs.repository.CurriculoRepository;
import br.com.api.ifjobs.repository.ExperienciaProfissionalRepository;
import br.com.api.ifjobs.security.service.UsuarioAutenticadoService;


@Service
public class ExperienciaProfissionalService {

    @Autowired
    private ExperienciaProfissionalRepository expRep;
    
    @Autowired
    private CurriculoRepository curRep;

    @Autowired
    private Resposta r;

    @Autowired
    private UsuarioAutenticadoService usuarioAutenticadoService;

    // método para cadastrar experiencia profissional
    public ResponseEntity<?> cadastrar(ExperienciaProfissional e){
        
        Estudante estudante = usuarioAutenticadoService.getEstudante();

        if(!(curRep.existsById(estudante.getCurriculo().getId()))){
            r.setMensagem("Currículo não encontrado!");
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, r.getMensagem());
        }
        
        if(e.getDataFinal().compareTo(e.getDataInicial()) < 0){
            r.setMensagem("A data inicial precisa ser anterior a data final!");
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, r.getMensagem());
        }

        e.setCurriculo(estudante.getCurriculo());
        expRep.save(e);
        estudante.getCurriculo().getExpProf().add(e);
        r.setMensagem("Cadastro feito com sucesso!");
        return new ResponseEntity<>(r, HttpStatus.CREATED);

    }

    // método para editar experiencia profissional
    public ResponseEntity<?> editar(ExperienciaProfissional e){
        
        Estudante estudante = usuarioAutenticadoService.getEstudante();

        if(!(expRep.existsById(e.getId()))){
            r.setMensagem("Experiência profissional não encontrada!");
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, r.getMensagem());
        }
        
        if(!(curRep.existsById(estudante.getCurriculo().getId()))){
            r.setMensagem("Currículo não encontrado!");
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, r.getMensagem());
        }
        
        if(e.getDataFinal().compareTo(e.getDataInicial()) < 0){
            r.setMensagem("A data inicial precisa ser anterior a data final!");
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, r.getMensagem());
        }

        e.setCurriculo(estudante.getCurriculo());
        expRep.save(e);
        r.setMensagem("Edição feita com sucesso!");
        return new ResponseEntity<>(r, HttpStatus.OK);

    }

    // método para remover experiencia
    public ResponseEntity<Resposta> remover(int id) {
        
        if(!(expRep.existsById(id))){
            r.setMensagem("Experiência profissional não encontrada!");
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, r.getMensagem());
        }

        ExperienciaProfissional e = expRep.findById(id).get();
        expRep.delete(e);
        r.setMensagem("Experiência Profissional removida com sucesso!");
        return new ResponseEntity<>(r, HttpStatus.OK);

    }

    public List<ExperienciaProfissionalDTO> listarExperiencia(){

        Estudante estudante = usuarioAutenticadoService.getEstudante();
        Curriculo cur = curRep.findById(estudante.getCurriculo().getId()).get()
        ;
        return ExperienciaProfissionalDTO.converterLista(expRep.listarExperiencia(cur.getId()));

    }
    
}
