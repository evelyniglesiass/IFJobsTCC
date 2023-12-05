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
import br.com.api.ifjobs.repository.EstudanteRepository;
import br.com.api.ifjobs.security.service.UsuarioAutenticadoService;

@Service
public class CurriculoService {

    @Autowired
    private CurriculoRepository curRep;

    @Autowired
    private EstudanteRepository estRep;

    @Autowired
    private Resposta r;

    @Autowired
    private UsuarioAutenticadoService usuarioAutenticadoService;

    // método para cadastrar curriculos
    public ResponseEntity<?> cadastrar(Curriculo c) {

        Estudante e = usuarioAutenticadoService.getEstudante();

        if (curRep.existsByEstudante(e)) {
            r.setMensagem("Esse usuário já possui um currículo!");
            throw new ResponseStatusException(HttpStatus.CONFLICT, r.getMensagem());
        }

        c.setEstudante(e);
        curRep.save(c);
        e.setCurriculo(c);
        r.setMensagem("Cadastro feito com sucesso!");
        return new ResponseEntity<>(r, HttpStatus.CREATED);

    }

    // método para editar curriculos
    public ResponseEntity<?> editar(Curriculo c) {

        Estudante e = usuarioAutenticadoService.getEstudante();

        c.setId(e.getCurriculo().getId());

        if (!(curRep.existsById(e.getCurriculo().getId()))) {
            r.setMensagem("Currículo não encontrado!");
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, r.getMensagem());
        }

        c.setEstudante(e);
        curRep.save(c);
        r.setMensagem("Edição feita com sucesso!");
        return new ResponseEntity<>(r, HttpStatus.OK);

    }

    // método para remover curriculo
    public ResponseEntity<Resposta> remover() {

        Estudante e = usuarioAutenticadoService.getEstudante();

        if (!(curRep.existsByEstudante(e))) {
            r.setMensagem("Currículo não encontrado!");
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, r.getMensagem());
        }

        Curriculo c = curRep.findByEstudante(e);
        e.setCurriculo(null);
        curRep.deleteById(c.getId());
        r.setMensagem("Currículo removido com sucesso!");
        return new ResponseEntity<>(r, HttpStatus.OK);

    }

    // listar
    public CurriculoDTO listar(int id) {

        Estudante e = estRep.findById(id).get();

        if (!(curRep.existsByEstudante(e))) {
            r.setMensagem("Currículo não encontrado!");
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, r.getMensagem());
        }

        Curriculo curriculo = curRep.findByEstudante(e);

        return CurriculoDTO
                .builder()
                .id(curriculo.getId())
                .resumo(curriculo.getResumo())
                .build();

    }
}
