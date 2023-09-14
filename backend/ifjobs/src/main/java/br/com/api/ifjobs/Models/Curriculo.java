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
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;

import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Curriculo {
    
    @Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(nullable = false)
    private Integer id; 

    @Column(nullable = false, length = 500)
    private String resumo;

    @Column(nullable = false, length = 250)
    private List<String> habilidades = new ArrayList<>(); 

    @Column(nullable = false, length = 250)
    private List<String> idiomas = new ArrayList<>();

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "estudante_id")    
    private Estudante estudante; 

    @OneToMany(mappedBy = "curriculo", cascade = CascadeType.REMOVE)
    private List<Curso> cursos = new ArrayList<>();

    @OneToMany(mappedBy = "curriculo", cascade = CascadeType.REMOVE)
    private List<ExperienciaProfissional> expProf = new ArrayList<>();

    @OneToMany(mappedBy = "curriculo", cascade = CascadeType.REMOVE)
    private List<FormacaoAcademica> formAcad = new ArrayList<>();

    public Curriculo(){
    }

    public Curriculo(Integer id, String resumo, List<String> habilidades, List<String> idiomas, Estudante estudante,
            List<Curso> cursos, List<ExperienciaProfissional> expProf, List<FormacaoAcademica> formAcad) {
        this.id = id;
        this.resumo = resumo;
        this.habilidades = habilidades;
        this.idiomas = idiomas;
        this.estudante = estudante;
        this.cursos = cursos;
        this.expProf = expProf;
        this.formAcad = formAcad;
    }

    @Override
    public String toString() {
        return "Curriculo [id=" + id + ", resumo=" + resumo + ", habilidades=" + habilidades + ", idiomas=" + idiomas
                + ", estudante=" + estudante + ", cursos=" + cursos + ", expProf=" + expProf + ", formAcad=" + formAcad
                + "]";
    }
        
}
