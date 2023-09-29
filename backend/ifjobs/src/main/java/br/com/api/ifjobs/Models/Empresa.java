package br.com.api.ifjobs.models;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.validation.Valid;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
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
    @Valid
	@Column(nullable = false, length = 250)
	private String nome;

	@NotBlank(message = "Insira seu nome de usuário!")
    @Valid
	@Column(nullable = false, length = 250)
    private String nomeUsuario;
	
    @Valid
	@Column(nullable = true, length = 500)
	private String descricao;
	
	@NotBlank(message = "Insira sua cidade!")
    @Valid
	@Column(nullable = false, length = 250)
	private String cidade;
	
	@NotBlank(message = "Insira seu email!")
    @Valid
	@Column(nullable = false, length = 250)
	@Email(message = "Insira um email válido!")
	private String email;

	@NotBlank(message = "Insira seu telefone!")
    @Valid
	@Column(nullable = false)
    private String telefone;

	@NotBlank(message = "Insira sua senha!")
    @Valid
	@Column(nullable = false, length = 250)
	private String senha;

	@OneToMany(mappedBy = "empresa", cascade = CascadeType.PERSIST)
	private List<Vaga> vagasPublicadas = new ArrayList<>();
	
}