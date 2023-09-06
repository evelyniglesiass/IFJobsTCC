package br.com.api.ifjobs.Models;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToOne;

@Entity
public class Estudante{

    @Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(nullable = false)
    private Integer id;

    @Column(nullable = false)
    private Integer idade;

    @Column(nullable = false, length = 250)
    private String nomeUsuario;

    @Column(nullable = false, length = 250)
    private String nome;

    @Column(nullable = false)
    private Integer telefone;

    @Column(nullable = false, length = 250)
    private String email;

    @Column(nullable = false, length = 250)
    private String cidade;

    @Column(nullable = false, length = 250)
    private String senha;

	@OneToOne(mappedBy = "estudante")
    private Curriculo curriculo;

    @ManyToMany(mappedBy = "estudantes", cascade = CascadeType.REMOVE)
    private List<Candidatura> candidaturas = new ArrayList<>();

    public Estudante(){
    }

    public Estudante(Integer id, Integer idade, String nomeUsuario, String nome, Integer telefone, String email,
            String cidade, String senha, Curriculo curriculo, List<Candidatura> candidaturas) {
        this.id = id;
        this.idade = idade;
        this.nomeUsuario = nomeUsuario;
        this.nome = nome;
        this.telefone = telefone;
        this.email = email;
        this.cidade = cidade;
        this.senha = senha;
        this.curriculo = curriculo;
        this.candidaturas = candidaturas;
    }

    @Override
    public String toString() {
        return "Estudante [id=" + id + ", idade=" + idade + ", nomeUsuario=" + nomeUsuario + ", nome=" + nome
                + ", telefone=" + telefone + ", email=" + email + ", cidade=" + cidade + ", senha=" + senha
                + ", curriculo=" + curriculo + ", candidaturas=" + candidaturas + "]";
    }

    public Integer getId() {
        return id;
    }

    public Integer getIdade() {
        return idade;
    }

    public void setIdade(Integer idade) {
        this.idade = idade;
    }

    public String getNomeUsuario() {
        return nomeUsuario;
    }

    public void setNomeUsuario(String nomeUsuario) {
        this.nomeUsuario = nomeUsuario;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public Integer getTelefone() {
        return telefone;
    }

    public void setTelefone(Integer telefone) {
        this.telefone = telefone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getCidade() {
        return cidade;
    }

    public void setCidade(String cidade) {
        this.cidade = cidade;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

    public Curriculo getCurriculo() {
        return curriculo;
    }

    public void setCurriculo(Curriculo curriculo) {
        this.curriculo = curriculo;
    }

    public List<Candidatura> getCandidaturas() {
        return candidaturas;
    }

    public void setCandidaturas(List<Candidatura> candidaturas) {
        this.candidaturas = candidaturas;
    }
    
    
}