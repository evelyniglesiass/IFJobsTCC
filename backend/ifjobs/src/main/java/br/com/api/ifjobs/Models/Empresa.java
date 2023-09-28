package br.com.api.ifjobs.models;

import java.util.ArrayList;
import java.util.List;

//imports spring
import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.validation.constraints.Email;
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