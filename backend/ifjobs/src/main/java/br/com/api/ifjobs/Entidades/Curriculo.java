package br.com.api.ifjobs.Entidades;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

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
