package br.com.api.ifjobs.models;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonFormat;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToMany; 
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;

import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Vaga {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(nullable = false)
	private Integer id;

	@Column(nullable = false) // ver se falta algum parâmetro
	private boolean status;
	
	@Column(nullable = false, length = 50)
	private String titulo;
	
	@Column(nullable = false, length = 500)
	private String descricao;
	
	@Column(nullable = false) // ver se falta algum parâmetro
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

	public Vaga() {
	}

	public Vaga(Integer id, boolean status, String titulo, String descricao, Cursos curso, Double salario,
			Integer idadeMinima, List<String> palavrasChave, String cidade, LocalDate dataPublicacao,
			Empresa empresa, List<Estudante> estudantes) {
		this.id = id;
		this.status = status;
		this.titulo = titulo;
		this.descricao = descricao;
		this.curso = curso;
		this.salario = salario;
		this.idadeMinima = idadeMinima;
		this.palavrasChave = palavrasChave;
		this.cidade = cidade;
		this.dataPublicacao = dataPublicacao;
		this.empresa = empresa;
		this.estudantes = estudantes;
	}

	@Override
	public String toString() {
		return "Vaga [id=" + id + ", status=" + status + ", titulo=" + titulo + ", descricao=" + descricao + ", curso="
				+ curso + ", salario=" + salario + ", idadeMinima=" + idadeMinima + ", palavrasChave=" + palavrasChave
				+ ", cidade=" + cidade + ", dataPublicacao=" + dataPublicacao + ", empresa=" + empresa + ", estudantes="
				+ estudantes + "]";
	}
	
}
