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
    private String habilidades;//ver como transformar em list

    @Column(nullable = false, length = 250)
    private String idiomas;//ver como transformar em list

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "estudante_id")    
    private Estudante estudante;

    @OneToMany(mappedBy = "", cascade = CascadeType.PERSIST)//parei aqui
    private List<Curso> itens = new ArrayList<>();


    public Curriculo(){
    }

    public Curriculo(Integer id, String resumo, String habilidades, String idiomas) {
        this.id = id;
        this.resumo = resumo;
        this.habilidades = habilidades;
        this.idiomas = idiomas;
    }

    @Override
    public String toString() {
        return "Curriculo [id=" + id + ", resumo=" + resumo + ", habilidades=" + habilidades + ", idiomas=" + idiomas
                + "]";
    }

    
}
