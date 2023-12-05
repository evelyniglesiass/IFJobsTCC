package br.com.api.ifjobs.services;

import java.time.LocalDate;
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
import br.com.api.ifjobs.repository.EstudanteRepository;
import br.com.api.ifjobs.repository.ExperienciaProfissionalRepository;
import br.com.api.ifjobs.requests.ExperienciaProfissionalRequest;
import br.com.api.ifjobs.security.service.UsuarioAutenticadoService;

@Service
public class ExperienciaProfissionalService {

    @Autowired
    private ExperienciaProfissionalRepository expRep;

    @Autowired
    private CurriculoRepository curRep;

    @Autowired
    private EstudanteRepository estRep;

    @Autowired
    private Resposta r;

    @Autowired
    private UsuarioAutenticadoService usuarioAutenticadoService;

    // método para cadastrar experiencia profissional
    public ResponseEntity<?> cadastrar(ExperienciaProfissionalRequest e) {

        Estudante estudante = usuarioAutenticadoService.getEstudante();
        ExperienciaProfissional experiencia = new ExperienciaProfissional();
        LocalDate dataInicial = LocalDate.parse(e.getDataInicial());
        LocalDate dataFinal = LocalDate.parse(e.getDataFinal());
        experiencia.setCargo(e.getCargo());
        experiencia.setCurriculo(e.getCurriculo());
        experiencia.setDataFinal(dataFinal);
        experiencia.setDataInicial(dataInicial);
        experiencia.setDescricao(e.getDescricao());
        experiencia.setEmpresa(e.getEmpresa());
        experiencia.setId(e.getId());

        if (!(curRep.existsById(estudante.getCurriculo().getId()))) {
            r.setMensagem("Currículo não encontrado!");
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, r.getMensagem());

        }

        if (experiencia.getDataFinal().compareTo(experiencia.getDataInicial()) < 0) {
            r.setMensagem("A data inicial precisa ser anterior a data final!");
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, r.getMensagem());

        }

        experiencia.setCurriculo(estudante.getCurriculo());
        estudante.getCurriculo().getExpProf().add(experiencia);
        expRep.save(experiencia);
        r.setMensagem("Cadastro feito com sucesso!");
        return new ResponseEntity<>(r, HttpStatus.CREATED);

    }

    // método para editar experiencia profissional
    public ResponseEntity<?> editar(ExperienciaProfissionalRequest e) {

        Estudante estudante = usuarioAutenticadoService.getEstudante();
        ExperienciaProfissional experiencia = new ExperienciaProfissional();
        LocalDate dataInicial = LocalDate.parse(e.getDataInicial());
        LocalDate dataFinal = LocalDate.parse(e.getDataFinal());
        experiencia.setCargo(e.getCargo());
        experiencia.setCurriculo(e.getCurriculo());
        experiencia.setDataFinal(dataFinal);
        experiencia.setDataInicial(dataInicial);
        experiencia.setDescricao(e.getDescricao());
        experiencia.setEmpresa(e.getEmpresa());
        experiencia.setId(e.getId());

        if (!(curRep.existsByEstudante(estudante))) {
            r.setMensagem("Currículo não encontrado!");
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, r.getMensagem());
        }

        if (experiencia.getDataFinal().compareTo(experiencia.getDataInicial()) < 0) {
            r.setMensagem("A data inicial precisa ser anterior a data final!");
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, r.getMensagem());
        }

        experiencia.setCurriculo(estudante.getCurriculo());
        expRep.save(experiencia);
        r.setMensagem("Edição feita com sucesso!");
        return new ResponseEntity<>(r, HttpStatus.OK);

    }

    // método para remover experiencia
    public ResponseEntity<Resposta> remover(int id) {

        if (!(expRep.existsById(id))) {
            r.setMensagem("Experiência profissional não encontrada!");
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, r.getMensagem());
        }

        ExperienciaProfissional e = expRep.findById(id).get();
        expRep.delete(e);
        r.setMensagem("Experiência Profissional removida com sucesso!");
        return new ResponseEntity<>(r, HttpStatus.OK);

    }

    public List<ExperienciaProfissionalDTO> listarExperiencia(int id) {

        Estudante est = estRep.findById(id).get();
        Curriculo cur = curRep.findById(est.getCurriculo().getId()).get();
        return ExperienciaProfissionalDTO.converterLista(expRep.listarExperiencia(cur.getId()));

    }

}
