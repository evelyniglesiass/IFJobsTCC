package br.com.api.ifjobs.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import br.com.api.ifjobs.dto.PalavraChaveDTO;
import br.com.api.ifjobs.models.PalavraChave;
import br.com.api.ifjobs.models.Resposta;
import br.com.api.ifjobs.models.Vaga;
import br.com.api.ifjobs.repository.PalavraChaveRepository;
import br.com.api.ifjobs.repository.VagaRepository;

@Service
public class PalavraChaveService {

    @Autowired
    private PalavraChaveRepository palChaRep;

    @Autowired
    private VagaRepository vagRep;

    @Autowired
    private Resposta r;

    // método para cadastrar palavra chave
    public ResponseEntity<?> cadastrar(PalavraChave pc, int idVaga) {

        if (!(vagRep.existsById(idVaga))) {
            r.setMensagem("Vaga não encontrada!");
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, r.getMensagem());

        }

        Vaga v = vagRep.findById(idVaga).get();

        pc.setVaga(v);
        v.getPalavrasChave().add(pc);
        palChaRep.save(pc);

        r.setMensagem("Cadastro feito com sucesso!");
        return new ResponseEntity<>(r, HttpStatus.CREATED);

    }

    // método para editar palavra chave
    public ResponseEntity<?> editar(PalavraChave pc, int idVaga) {

        if (!(palChaRep.existsById(pc.getId()))) {
            r.setMensagem("Palavra Chave não encontrada!");
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, r.getMensagem());
        }

        if (!(vagRep.existsById(idVaga))) {
            r.setMensagem("Vaga não encontrada!");
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, r.getMensagem());
        }

        pc.setVaga(vagRep.findById(idVaga).get());
        palChaRep.save(pc);

        r.setMensagem("Edição feita com sucesso!");
        return new ResponseEntity<>(r, HttpStatus.OK);

    }

    // método para remover palavra chave
    public ResponseEntity<Resposta> remover(int id) {

        if (!(palChaRep.existsById(id))) {
            r.setMensagem("Palavra chave não encontrada!");
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, r.getMensagem());
        }

        PalavraChave pc = palChaRep.findById(id).get();
        palChaRep.delete(pc);

        r.setMensagem("Palavra chave removida com sucesso!");
        return new ResponseEntity<>(r, HttpStatus.OK);

    }

    public List<PalavraChaveDTO> listarPalavraChave(int idVaga) {

        Vaga vaga = vagRep.findById(idVaga).get();
        return PalavraChaveDTO.converterLista(palChaRep.listarPalavraChave(vaga.getId()));

    }

}
