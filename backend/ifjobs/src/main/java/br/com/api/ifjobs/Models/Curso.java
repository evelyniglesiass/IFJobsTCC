package br.com.api.ifjobs.models;

import java.time.LocalDateTime;

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
public class Curso {
    
    @Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(nullable = false)
    private Integer id;

    @Column(nullable = false, length = 500)
	private String descricao;

    @Column(nullable = false, length = 250)
	private String instituicao;

    @Column(nullable = false, length = 250)
	private String cidade;

    @Column(nullable = false, length = 250)
	private String cargaHoraria;

    @Temporal(TemporalType.TIMESTAMP)
	@Column(nullable = false)
	private LocalDateTime dataInicial;

    @Temporal(TemporalType.TIMESTAMP)
	@Column(nullable = false)
	private LocalDateTime dataFinal;

    @ManyToOne
    @JoinColumn(name="curriculo_id", nullable=false)    
    private Curriculo curriculo;

    public Curso(){
    }

    public Curso(Integer id, String descricao, String instituicao, String cidade, String cargaHoraria,
            LocalDateTime dataInicial, LocalDateTime dataFinal, Curriculo curriculo) {
        this.id = id;
        this.descricao = descricao;
        this.instituicao = instituicao;
        this.cidade = cidade;
        this.cargaHoraria = cargaHoraria;
        this.dataInicial = dataInicial;
        this.dataFinal = dataFinal;
        this.curriculo = curriculo;
    }

    @Override
    public String toString() {
        return "Curso [id=" + id + ", descricao=" + descricao + ", instituicao=" + instituicao + ", cidade=" + cidade
                + ", cargaHoraria=" + cargaHoraria + ", dataInicial=" + dataInicial + ", dataFinal=" + dataFinal
                + ", curriculo=" + curriculo + "]";
    }

}
