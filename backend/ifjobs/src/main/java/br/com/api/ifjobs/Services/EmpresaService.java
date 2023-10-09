package br.com.api.ifjobs.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import br.com.api.ifjobs.models.Empresa;
import br.com.api.ifjobs.models.Resposta;
import br.com.api.ifjobs.repository.EmpresaRepository;
import br.com.api.ifjobs.repository.EstudanteRepository;
import br.com.api.ifjobs.security.domain.Permissao;
import br.com.api.ifjobs.security.domain.enums.Funcao;
import br.com.api.ifjobs.security.service.UsuarioAutenticadoService;

@Service
public class EmpresaService {
    
    @Autowired
    private EmpresaRepository empRep;

    @Autowired
    private EstudanteRepository estRep;

    @Autowired
    private Resposta r;
    
    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private UsuarioAutenticadoService usuarioAutenticadoService;

    @Autowired
    private SenhaService ss;
    

    //Método para cadastrar empresas 
    public ResponseEntity<?> cadastrar(Empresa e){

        //pegando senha para validação
        ss.setSenha(e.getSenha()); 
        
        if(empRep.existsByNomeUsuario(e.getNomeUsuario()) || estRep.existsByNomeUsuario(e.getNomeUsuario())){
            r.setMensagem("O nome de usuário já existe!");
            throw new ResponseStatusException(HttpStatus.CONFLICT, r.getMensagem());

        }else if(!(ss.verificarSenha(ss.getSenha()))){
            r.setMensagem("Sua senha precisa ter pelo menos 8 caracteres, uma letra minúscula, uma letra maiúscula e um número!");
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, r.getMensagem());
        
        }else if(empRep.existsByEmail(e.getEmail()) || estRep.existsByNomeUsuario(e.getEmail())){
            r.setMensagem("Esse email já foi cadastrado!");
            throw new ResponseStatusException(HttpStatus.CONFLICT, r.getMensagem());

        } else{

            e.setPermissoes(List.of(Permissao.builder().funcao(Funcao.EMPRESA).empresa(e).build()));
            e.setSenha(passwordEncoder.encode(e.getSenha()));

            empRep.save(e);

            r.setMensagem("Cadastro feito com sucesso!");
            return new ResponseEntity<>(r, HttpStatus.CREATED);
        }
    }

    //Método para editar empresas
    public ResponseEntity<?> editar(Empresa e){

        Empresa empresa = usuarioAutenticadoService.getEmpresa();

        //pegando senha para validação
        ss.setSenha(empresa.getSenha()); 
        
        if(!(empRep.existsById(empresa.getId()))){
            r.setMensagem("Usuário não encontrado!");
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, r.getMensagem());

        } else if(empRep.existsByNomeUsuario(empresa.getNomeUsuario()) || estRep.existsByNomeUsuario(e.getNomeUsuario())){
            r.setMensagem("O nome de usuário já existe!");
            throw new ResponseStatusException(HttpStatus.CONFLICT, r.getMensagem());

        } else if(!(ss.verificarSenha(ss.getSenha()))){
            r.setMensagem("Sua senha precisa ter pelo menos 8 caracteres, uma letra minúscula, uma letra maiúscula e um número!");
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, r.getMensagem());

        } else if(empRep.existsByEmail(empresa.getEmail()) || estRep.existsByNomeUsuario(e.getEmail())){
            r.setMensagem("Esse email já foi cadastrado!");
            throw new ResponseStatusException(HttpStatus.CONFLICT, r.getMensagem());

        } else{
            empRep.save(empresa);
            r.setMensagem("Edição feita com sucesso!");
            return new ResponseEntity<>(r, HttpStatus.OK);
        }
    }

    //Método para remover empresa
    public ResponseEntity<Resposta> remover(int id) {
        
        if(!(empRep.existsById(id))){
            r.setMensagem("Usuário não encontrado!");
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, r.getMensagem());

        } else{
            Empresa emp = empRep.findById(id);
            empRep.delete(emp);
            r.setMensagem("Empresa removida com sucesso!");
            return new ResponseEntity<>(r, HttpStatus.OK);

        }
    }
}
