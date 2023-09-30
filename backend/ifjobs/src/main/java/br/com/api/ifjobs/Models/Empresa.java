package br.com.api.ifjobs.models;

import java.util.ArrayList;
import java.util.List;

import org.hibernate.validator.constraints.Length;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
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
	@Column(nullable = false, length = 250)
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
	
}