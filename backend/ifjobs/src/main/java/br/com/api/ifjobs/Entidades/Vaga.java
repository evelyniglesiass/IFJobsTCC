package br.com.api.ifjobs.Entidades;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;

@Entity
public class Vaga {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(nullable = false)
	private Integer id;

	@Column(nullable = false)//ver se falta algum parâmetro
	private boolean status;
	
	@Column(nullable = false, length = 250)
	private String titulo;
	
	@Column(nullable = false, length = 500)
	private String descricao;
	
	@Column(nullable = false)//ver
	private Cursos curso;

	@Column(nullable = false)
	private double salario;

	@Column(nullable = false)
    private Integer idadeMinima;

	@Column(nullable = false, length = 250)
    private List<String> palavrasChave = new ArrayList<>();
	
	@Column(nullable = false, length = 250)
    private String cidade;

	@Temporal(TemporalType.TIMESTAMP)
	@Column(nullable = false)
	private LocalDateTime dataPublicacao;

	@ManyToOne 
	@JoinColumn(name = "empresa_id") 
	private Empresa empresa;

	public Vaga() {
	}

	public Vaga(Integer id, boolean status, String titulo, String descricao, Cursos curso, double salario,
			Integer idadeMinima, List<String> palavrasChave, String cidade, LocalDateTime dataPublicacao,
			Empresa empresa) {
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
	}

	@Override
	public String toString() {
		return "Vaga [id=" + id + ", status=" + status + ", titulo=" + titulo + ", descricao=" + descricao + ", curso="
				+ curso + ", salario=" + salario + ", idadeMinima=" + idadeMinima + ", palavrasChave=" + palavrasChave
				+ ", cidade=" + cidade + ", dataPublicacao=" + dataPublicacao + ", empresa=" + empresa + "]";
	}

	public Integer getId() {
		return id;
	}


	public boolean isStatus() {
		return status;
	}

	public void setStatus(boolean status) {
		this.status = status;
	}

	public String getTitulo() {
		return titulo;
	}

	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

	public Cursos getCurso() {
		return curso;
	}

	public void setCurso(Cursos curso) {
		this.curso = curso;
	}

	public double getSalario() {
		return salario;
	}

	public void setSalario(double salario) {
		this.salario = salario;
	}

	public Integer getIdadeMinima() {
		return idadeMinima;
	}

	public void setIdadeMinima(Integer idadeMinima) {
		this.idadeMinima = idadeMinima;
	}

	public List<String> getPalavrasChave() {
		return palavrasChave;
	}

	public void setPalavrasChave(List<String> palavrasChave) {
		this.palavrasChave = palavrasChave;
	}

	public String getCidade() {
		return cidade;
	}

	public void setCidade(String cidade) {
		this.cidade = cidade;
	}

	public LocalDateTime getDataPublicacao() {
		return dataPublicacao;
	}

	public void setDataPublicacao(LocalDateTime dataPublicacao) {
		this.dataPublicacao = dataPublicacao;
	}

	public Empresa getEmpresa() {
		return empresa;
	}

	public void setEmpresa(Empresa empresa) {
		this.empresa = empresa;
	}

}
