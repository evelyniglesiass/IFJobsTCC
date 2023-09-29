package br.com.api.ifjobs.models;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonFormat;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToMany; 
import jakarta.persistence.ManyToOne;
import jakarta.validation.Valid;
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
public class Vaga {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(nullable = false)
	private Integer id;

	@NotBlank(message = "Insira o status de sua vaga!")
    @Valid
	@Column(nullable = false) 
	private boolean status;
	
	@NotBlank(message = "Insira o título de sua vaga!")
    @Valid
	@Column(nullable = false, length = 50)
	private String titulo;
	
	@NotBlank(message = "Insira a descrição de sua vaga!")
    @Valid
	@Column(nullable = false, length = 500)
	private String descricao;

	@NotBlank(message = "Insira o salário que sua vaga oferece!")
    @Valid
	@Column(nullable = false)
	private Double salario;
	
	@NotBlank(message = "Insira para qual curso a vaga será ofertada!")
    @Valid
	@Column(nullable = false) 
	@Enumerated(EnumType.STRING)
	private Cursos curso;

	@NotBlank(message = "Insira a idade mínima para a vaga!")
    @Valid
	@Column(nullable = false)
    private Integer idadeMinima;

	@NotBlank(message = "Insira a cidade onde será a vaga!")
    @Valid
	@Column(nullable = false, length = 50)
    private String cidade;

	@NotBlank(message = "Insira palavras chave sobre sua vaga!")
    @Valid
	@Column(nullable = false, length = 250)
    private List<String> palavrasChave = new ArrayList<>();

	@Column(nullable = false)
	@DateTimeFormat(pattern = "dd-MM-yyyy")
    @JsonFormat(pattern = "dd-MM-yyyy")
	private LocalDate dataPublicacao;

	@ManyToOne 
	@JoinColumn(name = "empresa_id") 
	private Empresa empresa;

	@ManyToMany(mappedBy = "vagas", cascade = CascadeType.ALL)
    private List<Estudante> estudantes = new ArrayList<>();
	
}
