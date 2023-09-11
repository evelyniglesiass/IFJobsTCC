package br.com.api.ifjobs.models;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToOne;

import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
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
    private String telefone;

    @Column(nullable = false, length = 250)
    private String email;

    @Column(nullable = false, length = 250)
    private String cidade;

    @Column(nullable = false, length = 250)
    private String senha;

	@OneToOne(mappedBy = "estudante")
    private Curriculo curriculo;

    @ManyToMany(cascade = CascadeType.REMOVE)
    @JoinTable(name = "candidatura", 
        joinColumns = {@JoinColumn(name = "estudante_id")}, 
        inverseJoinColumns = {@JoinColumn(name = "vaga_id")})
    private List<Vaga> vagas = new ArrayList<>();

    public Estudante(){
    }

    public Estudante(Integer id, Integer idade, String nomeUsuario, String nome, String telefone, String email,
            String cidade, String senha, Curriculo curriculo, List<Vaga> vagas) {
        this.id = id;
        this.idade = idade;
        this.nomeUsuario = nomeUsuario;
        this.nome = nome;
        this.telefone = telefone;
        this.email = email;
        this.cidade = cidade;
        this.senha = senha;
        this.curriculo = curriculo;
        this.vagas = vagas;
    }

    @Override
    public String toString() {
        return "Estudante [id=" + id + ", idade=" + idade + ", nomeUsuario=" + nomeUsuario + ", nome=" + nome
                + ", telefone=" + telefone + ", email=" + email + ", cidade=" + cidade + ", senha=" + senha
                + ", curriculo=" + curriculo + ", vagas=" + vagas + "]";
    }

}