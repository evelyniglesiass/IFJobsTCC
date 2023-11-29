package br.com.api.ifjobs.services;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import br.com.api.ifjobs.dto.VagaDTO;
import br.com.api.ifjobs.models.Empresa;
import br.com.api.ifjobs.models.Resposta;
import br.com.api.ifjobs.models.Vaga;
import br.com.api.ifjobs.repository.VagaRepository;
import br.com.api.ifjobs.requests.VagaRequest;
import br.com.api.ifjobs.security.service.UsuarioAutenticadoService;

@Service
public class VagaService {

    @Autowired
    private VagaRepository vagRep; 

    @Autowired
    private Resposta r;

    @Autowired
    private UsuarioAutenticadoService usuarioAutenticadoService;

    // método para cadastrar vagas
    public ResponseEntity<?> cadastrar(VagaRequest v){
        
        Empresa empresa = usuarioAutenticadoService.getEmpresa();
        Vaga vaga = new Vaga();
        LocalDate dataPublicacao = LocalDate.parse(v.getDataPublicacao());
        vaga.setCidade(v.getCidade());
        vaga.setCurso(v.getCurso());
        vaga.setDataPublicacao(dataPublicacao);
        vaga.setDescricao(v.getDescricao());
        vaga.setEmpresa(v.getEmpresa());
        vaga.setEstudantes(v.getEstudantes());
        vaga.setId(v.getId());
        vaga.setIdadeMinima(v.getIdadeMinima());
        //vaga.setPalavrasChave(v.getPalavrasChave());
        vaga.setSalario(v.getSalario());
        vaga.setStatus(v.isStatus());
        vaga.setTitulo(v.getTitulo());

        
        if(vaga.getIdadeMinima() < 0){
            r.setMensagem("Insira uma idade válida!");
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, r.getMensagem());
        }
        
        if(vaga.getSalario() < 0){
            r.setMensagem("Insira um valor válido para o salário!");
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, r.getMensagem());

        }

        vaga.setStatus(true);
        vaga.setEmpresa(empresa);
        vaga.setDataPublicacao(LocalDate.now());
        empresa.getVagasPublicadas().add(vaga);
        vagRep.save(vaga);

        r.setMensagem("Cadastro feito com sucesso!");
        return new ResponseEntity<>(r, HttpStatus.CREATED);

    }

    // método para editar vagas 
    public ResponseEntity<?> editar(VagaRequest v){
        
        Empresa empresa = usuarioAutenticadoService.getEmpresa();
        Vaga vaga = new Vaga();
        LocalDate dataPublicacao = LocalDate.parse(v.getDataPublicacao());
        vaga.setCidade(v.getCidade());
        vaga.setCurso(v.getCurso());
        vaga.setDataPublicacao(dataPublicacao);
        vaga.setDescricao(v.getDescricao());
        vaga.setEmpresa(v.getEmpresa());
        vaga.setEstudantes(v.getEstudantes());
        vaga.setId(v.getId());
        vaga.setIdadeMinima(v.getIdadeMinima());
        vaga.setPalavrasChave(v.getPalavrasChave());
        vaga.setSalario(v.getSalario());
        vaga.setStatus(v.isStatus());
        vaga.setTitulo(v.getTitulo());

        Vaga vagaAnt = vagRep.findById(vaga.getId()).get();

        if(!(vagRep.existsById(vaga.getId()))){
            r.setMensagem("Vaga não encontrada!");
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, r.getMensagem());
        }
        
        if(vaga.getSalario() < 0){
            r.setMensagem("Insira um valor válido para o salário!");
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, r.getMensagem());
        }
        
        if(vaga.getIdadeMinima() < 0){
            r.setMensagem("Insira uma idade válida!");
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, r.getMensagem());

        }

        vaga.setStatus(true);
        vaga.setDataPublicacao(vagaAnt.getDataPublicacao());
        vaga.setEmpresa(empresa);
        vagRep.save(vaga);

        r.setMensagem("Edição feita com sucesso!");
        return new ResponseEntity<>(r, HttpStatus.OK);
        
    }

    // método para remover vaga
    public ResponseEntity<Resposta> remover(int id) {
        
        if(!(vagRep.existsById(id))){
            r.setMensagem("Vaga não encontrada!");
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, r.getMensagem());

        }

        Vaga v = vagRep.findById(id).get();
        vagRep.delete(v);

        r.setMensagem("Vaga removida com sucesso!");
        return new ResponseEntity<>(r, HttpStatus.OK);

    }

    // listar todas as vagas disponiveis
    public List<VagaDTO> listarTodas(){
        return VagaDTO.converterLista(vagRep.listarVagas()); 
    }

    // listar vags de uma empresa
    public List<VagaDTO> listarPorEmpresa(int id){
        return VagaDTO.converterLista(vagRep.listarVagasEmpresa(id));
    }

    // pesquisar por titulo da vaga
    public List<VagaDTO> listarPorTitulo(String titulo){
        return VagaDTO.converterLista(vagRep.findByTituloContainsIgnoreCase(titulo));
    }

    // pesquisar vaga especifica
    public VagaDTO listarVaga(int id){

        if(!vagRep.existsById(id)){
            r.setMensagem("Vaga não encontrada!");
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, r.getMensagem());

        }

        Vaga v = vagRep.findById(id).get();

        return VagaDTO
            .builder()
            .id(v.getId())
            .status(v.isStatus())
            .titulo(v.getTitulo())
            .descricao(v.getDescricao())
            .curso(v.getCurso())
            .salario(v.getSalario())
            .idadeMinima(v.getIdadeMinima())
            .cidade(v.getCidade())
            .build();
    }
    
}
