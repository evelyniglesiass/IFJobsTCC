package br.com.api.ifjobs.requests;

import java.util.ArrayList;
import java.util.List;

import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonFormat;

import br.com.api.ifjobs.models.Cursos;
import br.com.api.ifjobs.models.Empresa;
import br.com.api.ifjobs.models.Estudante;
import br.com.api.ifjobs.models.PalavraChave;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

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
public class VagaRequest {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(nullable = false)
	private Integer id;

	@Column(nullable = false) 
	private boolean status;
	
	@NotBlank(message = "Insira o título de sua vaga!")
	@Column(nullable = false, length = 50)
	private String titulo;
	
	@NotBlank(message = "Insira a descrição de sua vaga!")
	@Column(nullable = false, length = 500)
	private String descricao;

	@NotNull(message = "Insira o salário que sua vaga oferece!")
	@Column(nullable = false)
	private Double salario;
	
	@NotNull(message = "Insira para qual curso a vaga será ofertada!")
	@Column(nullable = false) 
	@Enumerated(EnumType.STRING)
	private Cursos curso;

	@NotNull(message = "Insira a idade mínima para a vaga!")
	@Column(nullable = false)
    private Integer idadeMinima;

	@NotBlank(message = "Insira a cidade onde será a vaga!")
	@Column(nullable = false, length = 50)
    private String cidade;

    @OneToMany(mappedBy = "vaga", cascade = CascadeType.ALL)
    private List<PalavraChave> palavrasChave = new ArrayList<>();

	@Column(nullable = false)
	@DateTimeFormat(pattern = "dd-MM-yyyy")
    @JsonFormat(pattern = "dd-MM-yyyy")
	private String dataPublicacao;

	@ManyToOne
	@JoinColumn(name = "empresa_id") 
	private Empresa empresa;

	@ManyToMany(mappedBy = "vagas", cascade = CascadeType.ALL)
    private List<Estudante> estudantes = new ArrayList<>();
	
}
