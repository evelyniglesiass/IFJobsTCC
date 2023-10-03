package br.com.api.ifjobs.security.controller.response;

import javax.persistence.Column;
import javax.validation.constraints.Email;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
public class UsuarioResponse {
    
    private String nome;

    private String nomeUsuario;
	
	private String descricao;
	
	private String cidade;
	
	private String email;

    private String telefone;
    
    private Integer idade;
}
