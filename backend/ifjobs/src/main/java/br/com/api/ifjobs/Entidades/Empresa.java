package br.com.api.ifjobs.Entidades;

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

@Entity
public class Empresa {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(nullable = false)
	private Integer id;
	
	@Column(nullable = false, length = 250)
	private String nome;

	@Column(nullable = false, length = 250)
    private String nomeUsuario;
	
	@Column(nullable = false, length = 500)
	private String descricao;
	
	@Column(nullable = false, length = 250)
	private String cidade;
	
	@Column(nullable = false, length = 250)
	private String email;

	@Column(nullable = false)
    private Integer telefone;

	@Column(nullable = false, length = 250)
	private String senha;

	@OneToMany(mappedBy = "empresa", cascade = CascadeType.PERSIST)
	private List<Vaga> itens = new ArrayList<>();

	public Empresa() {
	}

	public Empresa(Integer id, String nome, String nomeUsuario, String descricao, String cidade, String email,
			Integer telefone, String senha, List<Vaga> itens) {
		this.id = id;
		this.nome = nome;
		this.nomeUsuario = nomeUsuario;
		this.descricao = descricao;
		this.cidade = cidade;
		this.email = email;
		this.telefone = telefone;
		this.senha = senha;
		this.itens = itens;
	}

	@Override
	public String toString() {
		return "Empresa [id=" + id + ", nome=" + nome + ", nomeUsuario=" + nomeUsuario + ", descricao=" + descricao
				+ ", cidade=" + cidade + ", email=" + email + ", telefone=" + telefone + ", senha=" + senha + ", itens="
				+ itens + "]";
	}

	public Integer getId() {
		return id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getNomeUsuario() {
		return nomeUsuario;
	}

	public void setNomeUsuario(String nomeUsuario) {
		this.nomeUsuario = nomeUsuario;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

	public String getCidade() {
		return cidade;
	}

	public void setCidade(String cidade) {
		this.cidade = cidade;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public Integer getTelefone() {
		return telefone;
	}

	public void setTelefone(Integer telefone) {
		this.telefone = telefone;
	}

	public String getSenha() {
		return senha;
	}

	public void setSenha(String senha) {
		this.senha = senha;
	}
	
	public List<Vaga> getItens() {
		return itens;
	}

	public void setItens(List<Vaga> itens) {
		this.itens = itens;
	}
	
}