package br.com.api.ifjobs.services;

import java.time.LocalDate;
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
import br.com.api.ifjobs.repository.EstudanteRepository;
import br.com.api.ifjobs.repository.FormacaoAcademicaRepository;
import br.com.api.ifjobs.requests.FormacaoAcademicaRequest;
import br.com.api.ifjobs.security.service.UsuarioAutenticadoService;

@Service
public class FormacaoAcademicaService {
    
    @Autowired
    private FormacaoAcademicaRepository forAcaRep;

    @Autowired
    private CurriculoRepository curRep;

    @Autowired
    private EstudanteRepository estRep;

    @Autowired
    private Resposta r;

    @Autowired
    private UsuarioAutenticadoService usuarioAutenticadoService;

    

    //Método de cadastro de formações 
    public ResponseEntity<?> cadastrar(FormacaoAcademicaRequest fa){
        
        Estudante estudante = usuarioAutenticadoService.getEstudante();
        FormacaoAcademica formacao = new FormacaoAcademica();
        LocalDate dataInicial = LocalDate.parse(fa.getDataInicial());
        LocalDate dataFinal = LocalDate.parse(fa.getDataFinal());
        formacao.setCidade(fa.getCidade());
        formacao.setCurriculo(fa.getCurriculo());
        formacao.setDataFinal(dataFinal);
        formacao.setDataInicial(dataInicial);
        formacao.setDescricao(fa.getDescricao());
        formacao.setInstituicao(fa.getInstituicao());
        formacao.setNivel(fa.getNivel());
        formacao.setId(fa.getId());
        
        if(!(curRep.existsById(estudante.getCurriculo().getId()))){
            r.setMensagem("Currículo não encontrado!");
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, r.getMensagem());
        }
        
        if(formacao.getDataFinal().compareTo(formacao.getDataInicial()) < 0){
            r.setMensagem("A data inicial precisa ser anterior a data final!");
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, r.getMensagem());
        } 

        formacao.setCurriculo(estudante.getCurriculo());
        forAcaRep.save(formacao);
        estudante.getCurriculo().getFormAcad().add(formacao);
        return new ResponseEntity<>(r, HttpStatus.CREATED);

    }


    //Método de edicão de formacões academicas
    public ResponseEntity<?> editar(FormacaoAcademicaRequest fa){
        
        Estudante estudante = usuarioAutenticadoService.getEstudante();
        FormacaoAcademica formacao = new FormacaoAcademica();
        LocalDate dataInicial = LocalDate.parse(fa.getDataInicial());
        LocalDate dataFinal = LocalDate.parse(fa.getDataFinal());
        formacao.setCidade(fa.getCidade());
        formacao.setCurriculo(fa.getCurriculo());
        formacao.setDataFinal(dataFinal);
        formacao.setDataInicial(dataInicial);
        formacao.setDescricao(fa.getDescricao());
        formacao.setInstituicao(fa.getInstituicao());
        formacao.setNivel(fa.getNivel());
        formacao.setId(fa.getId());
        
        if(!(curRep.existsByEstudante(estudante))){
            r.setMensagem("Currículo não encontrado!");
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, r.getMensagem()); 
        }
        
        if(fa.getDataFinal().compareTo(fa.getDataInicial()) < 0){
            r.setMensagem("A data inicial precisa ser anterior a data final!");
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, r.getMensagem());
        }

        formacao.setCurriculo(estudante.getCurriculo());
        forAcaRep.save(formacao);
        r.setMensagem("Edição feita com sucesso!");
        return new ResponseEntity<>(r, HttpStatus.OK);

    }

    //Método para remover formacão
    public ResponseEntity<Resposta> remover(int id) {
                
        if(!(forAcaRep.existsById(id))){
            r.setMensagem("Formação acadêmica não encontrada!");
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, r.getMensagem());
        }

        FormacaoAcademica f = forAcaRep.findById(id).get();
        forAcaRep.delete(f);
        r.setMensagem("Formação removido com sucesso!");
        return new ResponseEntity<>(r, HttpStatus.OK);

    }

    public List<FormacaoAcademicaDTO> listarFormacao(int id){

        Estudante est = estRep.findById(id).get();
        Curriculo cur = curRep.findById(est.getCurriculo().getId()).get();
        return FormacaoAcademicaDTO.converterLista(forAcaRep.listarFormacao(cur.getId()));

    }

}
