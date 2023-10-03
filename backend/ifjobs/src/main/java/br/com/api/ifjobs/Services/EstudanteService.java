package br.com.api.ifjobs.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

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

        }else if(estRep.countByNomeUsuario(e.getNomeUsuario()) == 1 || empRep.countByNomeUsuario(e.getNomeUsuario()) == 1){
            r.setMensagem("O nome de usuário já existe!");
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, r.getMensagem());

        }else if(estRep.countByEmail(e.getEmail()) == 1 || empRep.countByEmail(e.getEmail()) == 1){
            r.setMensagem("Esse email já foi cadastrado!");
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, r.getMensagem());

        }else if(!ss.verificarSenha(ss.getSenha())){
            r.setMensagem("Sua senha precisa ter pelo menos 8 caracteres, uma letra minúscula, uma letra maiúscula e um número!");
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, r.getMensagem());

        }else{

            e.setPermissoes(List.of(Permissao.builder().funcao(Funcao.ESTUDANTE).estudante(e).build()));
            e.setSenha(passwordEncoder.encode(e.getSenha()));

            estRep.save(e);
            r.setMensagem("Cadastro feito com sucesso!");
            return new ResponseEntity<>(r, HttpStatus.CREATED);

        }

    }

    // método para editar estudantes
    public ResponseEntity<?> editar(Estudante e){

        Estudante estudante = usuarioAutenticadoService.getEstudante();

        ss.setSenha(e.getSenha());

        if(!(estRep.existsById(e.getId()))){
            r.setMensagem("Usuário não encontrado!");
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, r.getMensagem());
            
        } else if(e.getIdade() < 0){
            r.setMensagem("Informe uma idade válida!");
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, r.getMensagem());

        }else if(estRep.existeUsuario(e.getNomeUsuario(), e.getId()) != 0){
            r.setMensagem("O nome de usuário já existe!");
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, r.getMensagem());

        }else if(estRep.existeEmail(e.getEmail(), e.getId()) != 0){
            r.setMensagem("Esse email já foi cadastrado!");
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, r.getMensagem());

        }else if(!ss.verificarSenha(ss.getSenha())){
            r.setMensagem("Sua senha precisa ter pelo menos 8 caracteres, uma letra minúscula, uma letra maiúscula e um número!");
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, r.getMensagem());

        }else{
            estRep.save(estudante);
            r.setMensagem("Edição feita com sucesso!");
            return new ResponseEntity<>(r, HttpStatus.OK);

        }
    }

    // método para remover estudante
    public ResponseEntity<Resposta> remover(int id) {

        if(!(estRep.existsById(id))){
            r.setMensagem("Usuário não encontrado!");
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, r.getMensagem());
            
        }else{
            Estudante est = estRep.findById(id);
            estRep.delete(est);
            r.setMensagem("Estudante removido com sucesso!");
            return new ResponseEntity<>(r, HttpStatus.OK);

        }
    }

    // método para candidatura
    public ResponseEntity<Resposta> candidatura(Estudante e, Vaga v) {
        
        if(!(estRep.existsById(e.getId()))){
            r.setMensagem("Usuário não encontrado!");
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, r.getMensagem());
            
        }else if(!(vagRep.existsById(v.getId()))){
            r.setMensagem("Vaga não encontrada!");
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, r.getMensagem());
            
        }else{
            e.getVagas().add(v);
            v.getEstudantes().add(e);
            r.setMensagem("Candidatura realizada com sucesso!");
            return new ResponseEntity<>(r, HttpStatus.OK);

        }
    }

    // método para remover candidatura
    public ResponseEntity<Resposta> removerCandidatura(Estudante e, Vaga v) {
        
        if(!(estRep.existsById(e.getId()))){
            r.setMensagem("Usuário não encontrado!");
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, r.getMensagem());
            
        }else if(!(vagRep.existsById(v.getId()))){
            r.setMensagem("Vaga não encontrada!");
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, r.getMensagem());
            
        }else{
            e.getVagas().remove(v);
            v.getEstudantes().remove(e);
            r.setMensagem("Candidatura removida com sucesso!");
            return new ResponseEntity<>(r, HttpStatus.OK);

        }
    }

}
