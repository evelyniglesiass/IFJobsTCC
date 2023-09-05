package br.com.api.ifjobs.Entidades;

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

@Entity
public class Candidatura {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(nullable = false)
    private Integer id;

    @ManyToMany(cascade = CascadeType.REMOVE)
    @JoinTable(name = "candidatura", 
        joinColumns = {@JoinColumn(name = "estudante_id")}, 
        inverseJoinColumns = {@JoinColumn(name = "vaga_id")})
    private List<Estudante> estudantes = new ArrayList<>();

    @ManyToMany(cascade = CascadeType.REMOVE)
    @JoinTable(name = "candidatura", 
        joinColumns = {@JoinColumn(name = "estudante_id")}, 
        inverseJoinColumns = {@JoinColumn(name = "vaga_id")})
    private List<Vaga> vagas = new ArrayList<>();

    public Candidatura(Integer id, List<Estudante> estudantes, List<Vaga> vagas) {
        this.id = id;
        this.estudantes = estudantes;
        this.vagas = vagas;
    }

    @Override
    public String toString() {
        return "Candidatura [id=" + id + ", estudantes=" + estudantes + ", vagas=" + vagas + "]";
    }

    public Integer getId() {
        return id;
    }

    public List<Estudante> getEstudantes() {
        return estudantes;
    }

    public void setEstudantes(List<Estudante> estudantes) {
        this.estudantes = estudantes;
    }

    public List<Vaga> getVagas() {
        return vagas;
    }

    public void setVagas(List<Vaga> vagas) {
        this.vagas = vagas;
    }

}
