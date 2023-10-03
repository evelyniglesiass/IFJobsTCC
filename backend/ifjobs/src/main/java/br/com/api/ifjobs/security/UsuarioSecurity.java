package br.com.api.ifjobs.security;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import br.com.api.ifjobs.models.Empresa;
import br.com.api.ifjobs.models.Estudante;

public class UsuarioSecurity implements UserDetails {
    
    private Integer id;
    private String email;
    private String senha;
    private List<SimpleGrantedAuthority> permissoes;

    public UsuarioSecurity(Empresa usuario) {

        this.id = usuario.getId();
        this.email = usuario.getEmail();
        this.senha = usuario.getSenha();
        this.permissoes = usuario.getPermissoes()
                .stream()
                .map(permissao -> new SimpleGrantedAuthority(permissao.getFuncao().getRole()))
                .collect(Collectors.toList());
    }

    public UsuarioSecurity(Estudante usuario) {

        this.id = usuario.getId();
        this.email = usuario.getEmail();
        this.senha = usuario.getSenha();
        this.permissoes = usuario.getPermissoes()
                .stream()
                .map(permissao -> new SimpleGrantedAuthority(permissao.getFuncao().getRole()))
                .collect(Collectors.toList());
    }

    public Integer getId() {
        return id;
    }

    @Override
    public List<SimpleGrantedAuthority> getAuthorities() {
        return this.permissoes;
    }

    @Override
    public String getPassword() {
        return this.senha;
    }

    @Override
    public String getUsername() {
        return this.email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
