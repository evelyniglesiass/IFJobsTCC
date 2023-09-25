package br.com.api.ifjobs.models;

import java.time.LocalDate;

import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonFormat;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType; 
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Temporal; 
import jakarta.persistence.TemporalType;

import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class ExperienciaProfissional {
    
    @Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(nullable = false)
    private Integer id;

    @Column(nullable = false, length = 500)
	private String descricao;

    @Column(nullable = false, length = 50)
	private String empresa;

    @Column(nullable = false, length = 50)
	private String cargo;

    @Temporal(TemporalType.DATE)
	@Column(nullable = false)
    @DateTimeFormat(pattern = "dd-MM-yyyy")
    @JsonFormat(pattern = "dd-MM-yyyy")
	private LocalDate dataInicial;

    @Temporal(TemporalType.DATE)
	@Column(nullable = false)
    @DateTimeFormat(pattern = "dd-MM-yyyy")
    @JsonFormat(pattern = "dd-MM-yyyy")
	private LocalDate dataFinal;

    @ManyToOne
    @JoinColumn(name="curriculo_id", nullable=false)    
    private Curriculo curriculo;

    public ExperienciaProfissional(){
    }

    public ExperienciaProfissional(Integer id, String descricao, String empresa, String cargo,
            LocalDate dataInicial, LocalDate dataFinal, Curriculo curriculo) {
        this.id = id;
        this.descricao = descricao;
        this.empresa = empresa;
        this.cargo = cargo;
        this.dataInicial = dataInicial;
        this.dataFinal = dataFinal;
        this.curriculo = curriculo;
    }

    @Override
    public String toString() {
        return "ExperienciaProfissional [id=" + id + ", descricao=" + descricao + ", empresa=" + empresa + ", cargo="
                + cargo + ", dataInicial=" + dataInicial + ", dataFinal=" + dataFinal + ", curriculo=" + curriculo
                + "]";
    }
    
}
