package br.com.api.ifjobs.models;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonFormat;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;

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

	@Column(nullable = false) 
	private boolean status;
	
	@Column(nullable = false, length = 50)
	private String titulo;
	
	@Column(nullable = false, length = 500)
	private String descricao;

	@Column(nullable = false)
	private Double salario;
	
	@Column(nullable = false) 
	@Enumerated(EnumType.STRING)
	private Cursos curso;

	@Column(nullable = false)
    private Integer idadeMinima;

	@Column(nullable = false, length = 50)
    private String cidade;

	@Column(nullable = false, length = 250)
	@ElementCollection(targetClass=String.class)
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
