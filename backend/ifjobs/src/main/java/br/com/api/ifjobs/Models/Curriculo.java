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
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;
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

    @NotBlank(message = "Insira detalhes sobre você em seu resumo!")
    @Valid
    @Column(nullable = false, length = 500)
    private String resumo;

    @NotBlank(message = "Insira pelo menos uma habilidade!")
    @Valid
    @Column(nullable = false, length = 250)
    private List<String> habilidades = new ArrayList<>(); 

    @NotBlank(message = "Insira pelo menos um idioma!")
    @Valid
    @Column(nullable = false, length = 250)
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
