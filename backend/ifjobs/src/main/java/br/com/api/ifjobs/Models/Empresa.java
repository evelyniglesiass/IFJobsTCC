package br.com.api.ifjobs.models;

import java.util.ArrayList;
import java.util.List;

//imports spring
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

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
	
	@Column(nullable = false, length = 250)
	@NotBlank
	private String nome;

	@Column(nullable = false, length = 250)
    private String nomeUsuario;
	
	@Column(nullable = true, length = 500)
	private String descricao;
	
	@Column(nullable = false, length = 250)
	private String cidade;
	
	@Column(nullable = false, length = 250)
	@Email(message = "Insira um email válido!")
	private String email;

	@Column(nullable = false)
    private String telefone;

	@Column(nullable = false, length = 250)
	private String senha;

	@OneToMany(mappedBy = "empresa", cascade = CascadeType.PERSIST)
	private List<Vaga> vagasPublicadas = new ArrayList<>();
	
}