package br.com.api.ifjobs.models;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

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
public class Curriculo {
    
    @Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(nullable = false)
    private Integer id; 

    @Column(nullable = false, length = 500)
    private String resumo;

    @Column(nullable = false, length = 250)
    @ElementCollection(targetClass=String.class)
    private List<String> habilidades = new ArrayList<>(); 

    @Column(nullable = false, length = 250)
    @ElementCollection(targetClass=String.class)
    private List<String> idiomas = new ArrayList<>();

    @OneToOne(cascade = CascadeType.PERSIST)
    @JoinColumn(name = "estudante_id")    
    private Estudante estudante; 

    @OneToMany(mappedBy = "curriculo", cascade = CascadeType.ALL)
    private List<Curso> cursos = new ArrayList<>();

    @OneToMany(mappedBy = "curriculo", cascade = CascadeType.ALL)
    private List<ExperienciaProfissional> expProf = new ArrayList<>();

    @OneToMany(mappedBy = "curriculo", cascade = CascadeType.ALL)
    private List<FormacaoAcademica> formAcad = new ArrayList<>();
        
}
