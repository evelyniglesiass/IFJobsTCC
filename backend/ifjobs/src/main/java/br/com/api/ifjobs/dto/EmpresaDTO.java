package br.com.api.ifjobs.dto;

import java.util.List;
import java.util.stream.Collectors;

import br.com.api.ifjobs.models.Empresa;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class EmpresaDTO {
    
    private Integer id;
	private String nome;
    private String nomeUsuario;
	private String descricao;
	private String cidade;
	private String email;
    private String telefone;
	private String senha;

    public EmpresaDTO(Empresa empresa){

        this.id = empresa.getId();
        this.nome = empresa.getNome();
        this.nomeUsuario = empresa.getDescricao();
        this.descricao = empresa.getDescricao();
        this.cidade = empresa.getCidade();
        this.email = empresa.getEmail();
        this.telefone = empresa.getTelefone();
        this.senha = empresa.getSenha();
    }

    public static List<EmpresaDTO> converterLista(List<Empresa> listaEmpresa){
        return listaEmpresa.stream().map(EmpresaDTO::new).collect(Collectors.toList());
    }
}
