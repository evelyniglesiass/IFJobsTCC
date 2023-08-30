package br.com.api.ifjobs.Entidades;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.OneToOne;

@Entity
public class Estudante{

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

    public Estudante(){
    }
    
    public Estudante(Integer id, Integer idade, String nomeUsuario, String nome, Integer telefone, String email,
            String cidade, String senha) {
        this.id = id;
        this.idade = idade;
        this.nomeUsuario = nomeUsuario;
        this.nome = nome;
        this.telefone = telefone;
        this.email = email;
        this.cidade = cidade;
        this.senha = senha;
    }

    @Override
    public String toString() {
        return "Estudante [id=" + id + ", idade=" + idade + ", nomeUsuario=" + nomeUsuario + ", nome=" + nome
                + ", telefone=" + telefone + ", email=" + email + ", cidade=" + cidade + ", senha=" + senha + "]";
    }

    public Integer getId(){
        return this.id;
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

}