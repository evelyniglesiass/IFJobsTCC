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
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
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
	@Enumerated(EnumType.STRING)
	private Cursos curso;

	@Column(nullable = false)
	private Double salario;

	@Column(nullable = false)
    private Integer idadeMinima;

	@Column(nullable = false, length = 250)
    private List<String> palavrasChave = new ArrayList<>();
	
	@Column(nullable = false, length = 50)
    private String cidade;

	@Temporal(TemporalType.DATE)
	@Column(nullable = false)
	@DateTimeFormat(pattern = "dd-MM-yyyy")
    @JsonFormat(pattern = "dd-MM-yyyy")
	private LocalDate dataPublicacao;

	@ManyToOne 
	@JoinColumn(name = "empresa_id") 
	private Empresa empresa;

	@ManyToMany(mappedBy = "vagas", cascade = CascadeType.REMOVE)
    private List<Estudante> estudantes = new ArrayList<>();
	
}
