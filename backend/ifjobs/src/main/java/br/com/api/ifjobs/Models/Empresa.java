package br.com.api.ifjobs.models;

import java.util.ArrayList;
import java.util.List;

//imports spring
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

import org.hibernate.validator.constraints.Length;

import br.com.api.ifjobs.security.domain.Permissao;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Empresa {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(nullable = false)
	private Integer id;
	
	@NotBlank(message = "Insira o nome de sua empresa!")
	@Column(nullable = false, length = 250)
	@NotBlank
	private String nome;

	@NotBlank(message = "Insira seu nome de usuário!")
	@Column(nullable = false, length = 250)
    private String nomeUsuario;
	
	@Column(nullable = true, length = 500)
	private String descricao;
	
	@NotBlank(message = "Insira sua cidade!")
	@Column(nullable = false, length = 250)
	private String cidade;
	
	@Column(nullable = false, length = 250)
	@NotBlank(message = "Insira seu email!")
	@Email(message = "Insira um email válido!")
	private String email;

	@NotBlank(message = "Insira seu telefone!")
	@Length(max = 11, min = 11, message = "Insira um telefone válido!")
	@Column(nullable = false)
    private String telefone;

	@NotBlank(message = "Insira sua senha!")
	@Column(nullable = false, length = 250)
	private String senha;

	@OneToMany(mappedBy = "empresa", cascade = CascadeType.PERSIST)
	private List<Vaga> vagasPublicadas = new ArrayList<>();
	
	@OneToMany(mappedBy = "empresa", fetch = FetchType.EAGER, cascade = CascadeType.ALL) // mudei p all
    @Column(nullable = false)
    private List<Permissao> permissoes;
}