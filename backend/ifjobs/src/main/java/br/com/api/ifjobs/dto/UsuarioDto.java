package br.com.api.ifjobs.dto;

import br.com.api.ifjobs.models.Empresa;
import br.com.api.ifjobs.models.Estudante;
import br.com.api.ifjobs.security.controller.response.UsuarioResponse;

public class UsuarioDto {
 
    public static UsuarioResponse toResponseFromEmpresa(Empresa empresa){

        return UsuarioResponse
            .builder()
            .nome(empresa.getNome())
            .nomeUsuario(empresa.getNomeUsuario())
            .descricao(empresa.getDescricao())
            .cidade(empresa.getCidade())
            .email(empresa.getEmail())
            .telefone(empresa.getTelefone())
            .build();
    }

    public static UsuarioResponse toResponseFromEstudante(Estudante estudante){

         return UsuarioResponse
            .builder()
            .nome(estudante.getNome())
            .nomeUsuario(estudante.getNomeUsuario())
            .cidade(estudante.getCidade())
            .email(estudante.getEmail())
            .telefone(estudante.getTelefone())
            .idade(estudante.getIdade())
            .build();
    }
}
