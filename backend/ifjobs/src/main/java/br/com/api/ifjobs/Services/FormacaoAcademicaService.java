package br.com.api.ifjobs.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import br.com.api.ifjobs.dto.FormacaoAcademicaDTO;
import br.com.api.ifjobs.models.Curriculo;
import br.com.api.ifjobs.models.Estudante;
import br.com.api.ifjobs.models.FormacaoAcademica;
import br.com.api.ifjobs.models.Resposta;
import br.com.api.ifjobs.repository.CurriculoRepository;
import br.com.api.ifjobs.repository.FormacaoAcademicaRepository;
import br.com.api.ifjobs.security.service.UsuarioAutenticadoService;

@Service
public class FormacaoAcademicaService {
    
    @Autowired
    private FormacaoAcademicaRepository forAcaRep;

    @Autowired
    private CurriculoRepository curRep;

    @Autowired
    private Resposta r;

    @Autowired
    private UsuarioAutenticadoService usuarioAutenticadoService;

    

    //Método de cadastro de formações 
    public ResponseEntity<?> cadastrar(FormacaoAcademica fa){
        
        Estudante estudante = usuarioAutenticadoService.getEstudante();
        
        if(!(curRep.existsById(estudante.getCurriculo().getId()))){
            r.setMensagem("Currículo não encontrado!");
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, r.getMensagem());
        }
        
        if(fa.getDataFinal().compareTo(fa.getDataInicial()) < 0){
            r.setMensagem("A data inicial precisa ser anterior a data final!");
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, r.getMensagem());
        } 

            fa.setCurriculo(estudante.getCurriculo());
            forAcaRep.save(fa);
            return new ResponseEntity<>(r, HttpStatus.CREATED);
    }


    //Método de edicão de formacões academicas
    public ResponseEntity<?> editar(FormacaoAcademica fa){
        
        Estudante estudante = usuarioAutenticadoService.getEstudante();
        
        if(!(forAcaRep.existsById(fa.getId()))){
            r.setMensagem("Experiência profissional não encontrada!");
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, r.getMensagem());
        } 
        
        if(!(curRep.existsById(estudante.getCurriculo().getId()))){
            r.setMensagem("Currículo não encontrado!");
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, r.getMensagem()); 
        }
        
        if(fa.getDataFinal().compareTo(fa.getDataInicial()) < 0){
            r.setMensagem("A data inicial precisa ser anterior a data final!");
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, r.getMensagem());
        }
            fa.setCurriculo(estudante.getCurriculo());
            forAcaRep.save(fa);
            return new ResponseEntity<>(r, HttpStatus.OK);
    }

    //Método para remover formacão
    public ResponseEntity<Resposta> remover() {
        
        Estudante estudante = usuarioAutenticadoService.getEstudante();
        
        if(!(forAcaRep.existsById(estudante.getCurriculo().getFormAcad().get()))){
            r.setMensagem("Formação acadêmica não encontrada!");
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, r.getMensagem());

        }

            FormacaoAcademica forAca = forAcaRep.findById(estudante.getCurriculo().getFormAcad().get());
            forAcaRep.delete(forAca);
            r.setMensagem("Formação removido com sucesso!");
            return new ResponseEntity<>(r, HttpStatus.OK);
    }

    public List<FormacaoAcademicaDTO> listarFormacao(int id){
        Estudante est = estRep.findById(id).get();
        Curriculo cur = curRep.findByEstudante(est);
        return FormacaoAcademicaDTO.converterLista(forAcaRep.listarFormacao(cur.getId()));
    }
}
