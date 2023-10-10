package br.com.api.ifjobs.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import br.com.api.ifjobs.dto.EstudanteDTO;
import br.com.api.ifjobs.models.Estudante;
import br.com.api.ifjobs.models.Resposta;
import br.com.api.ifjobs.models.Vaga;
import br.com.api.ifjobs.repository.EmpresaRepository;
import br.com.api.ifjobs.repository.EstudanteRepository;
import br.com.api.ifjobs.security.domain.Permissao;
import br.com.api.ifjobs.security.domain.enums.Funcao;
import br.com.api.ifjobs.security.service.UsuarioAutenticadoService;
import br.com.api.ifjobs.repository.VagaRepository;

@Service 
public class EstudanteService { 

    @Autowired
    private EstudanteRepository estRep;  
    
    @Autowired
    private EmpresaRepository empRep; 

    @Autowired
    private VagaRepository vagRep; 

    @Autowired
    private Resposta r;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private UsuarioAutenticadoService usuarioAutenticadoService;
    
    @Autowired
    private SenhaService ss;

    // método para cadastrar estudantes
    public ResponseEntity<?> cadastrar(Estudante e){ 

        ss.setSenha(e.getSenha());
        
        if(e.getIdade() < 0){ 
            r.setMensagem("Informe uma idade válida!");
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, r.getMensagem());

        }
        
        if(estRep.existsByNomeUsuario(e.getNomeUsuario()) || empRep.existsByNomeUsuario(e.getNomeUsuario())){
            r.setMensagem("O nome de usuário já existe!");
            throw new ResponseStatusException(HttpStatus.CONFLICT, r.getMensagem());

        }
        
        if(estRep.existsByEmail(e.getEmail()) || empRep.existsByEmail(e.getEmail())){
            r.setMensagem("Esse email já foi cadastrado!");
            throw new ResponseStatusException(HttpStatus.CONFLICT, r.getMensagem());

        }
        
        if(!ss.verificarSenha(ss.getSenha())){
            r.setMensagem("Sua senha precisa ter pelo menos 8 caracteres, uma letra minúscula, uma letra maiúscula e um número!");
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, r.getMensagem());

        }

            e.setPermissoes(List.of(Permissao.builder().funcao(Funcao.ESTUDANTE).estudante(e).build()));
            e.setSenha(passwordEncoder.encode(e.getSenha()));

            estRep.save(e);
            r.setMensagem("Cadastro feito com sucesso!");
            return new ResponseEntity<>(r, HttpStatus.CREATED);
    }

    // método para editar estudantes
    public ResponseEntity<?> editar(Estudante e){

        //Estudante estudante = usuarioAutenticadoService.getEstudante();

        ss.setSenha(e.getSenha());

        if(!(estRep.existsById(e.getId()))){
            r.setMensagem("Usuário não encontrado!");
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, r.getMensagem());
            
        }
        
        if(e.getIdade() < 0){
            r.setMensagem("Informe uma idade válida!");
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, r.getMensagem());

        }
        
        if(estRep.existsByNomeUsuario(e.getNomeUsuario()) || empRep.existsByNomeUsuario(e.getNomeUsuario())){
            r.setMensagem("O nome de usuário já existe!");
            throw new ResponseStatusException(HttpStatus.CONFLICT, r.getMensagem());

        }
        
        if(estRep.existsByEmail(e.getEmail())){
            r.setMensagem("Esse email já foi cadastrado!");
            throw new ResponseStatusException(HttpStatus.CONFLICT, r.getMensagem());

        }
        
        if(!ss.verificarSenha(ss.getSenha())){
            r.setMensagem("Sua senha precisa ter pelo menos 8 caracteres, uma letra minúscula, uma letra maiúscula e um número!");
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, r.getMensagem());

        }
            estRep.save(e);
            r.setMensagem("Edição feita com sucesso!");
            return new ResponseEntity<>(r, HttpStatus.OK);
    }

    // método para remover estudante
    public ResponseEntity<Resposta> remover() {

        Estudante estudante = usuarioAutenticadoService.getEstudante();
        
        if(!(estRep.existsById(estudante.getId()))){
            r.setMensagem("Usuário não encontrado!");
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, r.getMensagem());
            
        }
            Estudante est = estRep.findById(estudante.getId()).get();
            estRep.delete(est);
            r.setMensagem("Estudante removido com sucesso!");
            return new ResponseEntity<>(r, HttpStatus.OK);
    }

    // método para candidatura
    public ResponseEntity<Resposta> candidatura(int v) {
        
        Estudante estudante = usuarioAutenticadoService.getEstudante();
        Vaga vaga = vagRep.findById(v).get();

        if(!(estRep.existsById(estudante.getId()))){
            r.setMensagem("Usuário não encontrado!");
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, r.getMensagem());
            
        }
        
        if(!(vagRep.existsById(vaga.getId()))){
            r.setMensagem("Vaga não encontrada!");
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, r.getMensagem());
            
        }
            estudante.getVagas().add(vaga);
            vaga.getEstudantes().add(estudante);
            r.setMensagem("Candidatura realizada com sucesso!");
            return new ResponseEntity<>(r, HttpStatus.OK);
    }

    // método para remover candidatura
    public ResponseEntity<Resposta> removerCandidatura(Estudante e, Vaga v) {
        
        Estudante estudante = usuarioAutenticadoService.getEstudante();

        if(!(estRep.existsById(estudante.getId()))){
            r.setMensagem("Usuário não encontrado!");
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, r.getMensagem());
            
        }
        
        if(!(vagRep.existsById(v.getId()))){
            r.setMensagem("Vaga não encontrada!");
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, r.getMensagem());
            
        }
            e.getVagas().remove(v);
            v.getEstudantes().remove(e);
            r.setMensagem("Candidatura removida com sucesso!");
            return new ResponseEntity<>(r, HttpStatus.OK);
    }

    public List<EstudanteDTO> listarTodosEmpresa(){
        return EstudanteDTO.converterLista(estRep.findAll());
    }

    public List<EstudanteDTO> listarTodosEstudante(){
        Estudante estudante = usuarioAutenticadoService.getEstudante();
        return EstudanteDTO.converterLista(estRep.listarEstudantes(estudante.getId()));
    }

    public List<EstudanteDTO> listarPorNome(String nome){
        return EstudanteDTO.converterLista(estRep.findByNomeContains(nome));
    }

    public List<EstudanteDTO> listarPorId(int id){
        Estudante e = estRep.findById(id).get();
        return EstudanteDTO
            .builder()
            .id(e.getId())
            .nome(e.getNome())
            .idade(e.getIdade())
            .nomeUsuario(e.getNomeUsuario())
            .email(e.getEmail())
            .senha(e.getSenha())
            .telefone(e.getTelefone())
            .cidade(e.getCidade())
            .build();
    }
}
