package br.com.api.ifjobs.Models;

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

@Entity
public class Curriculo {
    
    @Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(nullable = false)
    private Integer id;

    @Column(nullable = false, length = 500)
    private String resumo;

    @Column(nullable = false, length = 250)
    private List<Vaga> habilidades = new ArrayList<>();

    @Column(nullable = false, length = 250)
    private List<String> idiomas = new ArrayList<>();

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "estudante_id")    
    private Estudante estudante;

    @OneToMany(mappedBy = "curriculo", cascade = CascadeType.PERSIST)
    private List<Curso> cursos = new ArrayList<>();

    @OneToMany(mappedBy = "curriculo", cascade = CascadeType.PERSIST)
    private List<ExperienciaProfissional> expProf = new ArrayList<>();

    @OneToMany(mappedBy = "curriculo", cascade = CascadeType.PERSIST)
    private List<FormacaoAcademica> formAcad = new ArrayList<>();

    public Curriculo(){
    }

    public Curriculo(Integer id, String resumo, List<Vaga> habilidades, List<String> idiomas, Estudante estudante,
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

    public Integer getId() {
        return id;
    }

    public String getResumo() {
        return resumo;
    }

    public void setResumo(String resumo) {
        this.resumo = resumo;
    }

    public List<Vaga> getHabilidades() {
        return habilidades;
    }

    public void setHabilidades(List<Vaga> habilidades) {
        this.habilidades = habilidades;
    }

    public List<String> getIdiomas() {
        return idiomas;
    }

    public void setIdiomas(List<String> idiomas) {
        this.idiomas = idiomas;
    }

    public Estudante getEstudante() {
        return estudante;
    }

    public void setEstudante(Estudante estudante) {
        this.estudante = estudante;
    }

    public List<Curso> getCursos() {
        return cursos;
    }

    public void setCursos(List<Curso> cursos) {
        this.cursos = cursos;
    }

    public List<ExperienciaProfissional> getExpProf() {
        return expProf;
    }

    public void setExpProf(List<ExperienciaProfissional> expProf) {
        this.expProf = expProf;
    }

    public List<FormacaoAcademica> getFormAcad() {
        return formAcad;
    }

    public void setFormAcad(List<FormacaoAcademica> formAcad) {
        this.formAcad = formAcad;
    }

    

    
}
