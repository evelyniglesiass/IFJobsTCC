package br.com.api.ifjobs.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import br.com.api.ifjobs.dto.EmpresaDTO;
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
        }
        
        if(!(ss.verificarSenha(ss.getSenha()))){
            r.setMensagem("Sua senha precisa ter pelo menos 8 caracteres, uma letra minúscula, uma letra maiúscula e um número!");
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, r.getMensagem());
        }
        
        if(empRep.existsByEmail(e.getEmail()) || estRep.existsByNomeUsuario(e.getEmail())){
            r.setMensagem("Esse email já foi cadastrado!");
            throw new ResponseStatusException(HttpStatus.CONFLICT, r.getMensagem());
        }

        e.setPermissoes(List.of(Permissao.builder().funcao(Funcao.EMPRESA).empresa(e).build()));
        e.setSenha(passwordEncoder.encode(e.getSenha()));
        empRep.save(e);
        r.setMensagem("Cadastro feito com sucesso!");
        return new ResponseEntity<>(r, HttpStatus.CREATED);
        
    }

    //Método para editar empresas
    public ResponseEntity<?> editar(Empresa e){

        Empresa empresa = usuarioAutenticadoService.getEmpresa();

        e.setId(empresa.getId()); // acho q assim da

        //pegando senha para validação
        ss.setSenha(e.getSenha()); 
        
        if(!(empRep.existsById(e.getId()))){
            r.setMensagem("Usuário não encontrado!");
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, r.getMensagem());
        }
        
        if(empRep.existeUsuario(e.getNomeUsuario(), empresa.getId()) != 0 || estRep.existeUsuario(e.getNomeUsuario(), 0) != 0){
            r.setMensagem("O nome de usuário já existe!");
            throw new ResponseStatusException(HttpStatus.CONFLICT, r.getMensagem());
        } 
        
        if(!(ss.verificarSenha(ss.getSenha()))){
            r.setMensagem("Sua senha precisa ter pelo menos 8 caracteres, uma letra minúscula, uma letra maiúscula e um número!");
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, r.getMensagem());
        } 
        
        if(empRep.existeEmail(e.getEmail(), empresa.getId()) != 0 || estRep.existeEmail(e.getEmail(), 0) != 0){
            r.setMensagem("Esse email já foi cadastrado!");
            throw new ResponseStatusException(HttpStatus.CONFLICT, r.getMensagem());
        }

        empresa.setPermissoes(List.of(Permissao.builder().funcao(Funcao.EMPRESA).empresa(e).build()));
        e.setSenha(passwordEncoder.encode(e.getSenha()));

        empRep.save(e);
        r.setMensagem("Edição feita com sucesso!");
        return new ResponseEntity<>(r, HttpStatus.OK);

    }

    //Método para remover empresa
    public ResponseEntity<Resposta> remover() {
        
        Empresa empresa = usuarioAutenticadoService.getEmpresa();
        empRep.delete(empresa);
        r.setMensagem("Empresa removida com sucesso!");
        return new ResponseEntity<>(r, HttpStatus.OK);

    }

    //pesquisa por nome
    public List<EmpresaDTO> listarPorNome(String nome){
        return EmpresaDTO.converterLista(empRep.findByNomeContainsIgnoreCase(nome)); 
    }

    public List<EmpresaDTO> listarPorNomeSemLogada(int id, String nome){
        return EmpresaDTO.converterLista(empRep.listarPorNomeSemLogada(id, nome)); 
    }

    //listar todos visão empresa
    public List<EmpresaDTO> listarTodosEmpresa(){
        Empresa empresa = usuarioAutenticadoService.getEmpresa();
        return EmpresaDTO.converterLista(empRep.listarEmpresas(empresa.getId()));
    }

    //listar todos visao estudante
    public List<EmpresaDTO> listarTodosEstudante(){
        return EmpresaDTO.converterLista(empRep.findAll());
    }

    //listar empresa especifica por id
    public EmpresaDTO listarPorId(int id){

        Empresa e = empRep.findById(id).get();
 
        return EmpresaDTO
            .builder()
            .id(e.getId())
            .nome(e.getNome())
            .nomeUsuario(e.getNomeUsuario())
            .descricao(e.getDescricao())
            .cidade(e.getCidade())
            .email(e.getEmail())
            .telefone(e.getTelefone())
            .senha(e.getSenha())
            .build();

    }

}
