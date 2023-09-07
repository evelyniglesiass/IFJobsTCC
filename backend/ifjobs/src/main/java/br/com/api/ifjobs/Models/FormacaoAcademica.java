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
public class FormacaoAcademica {
    
    @Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(nullable = false)
    private Integer id;

    @Column(nullable = false, length = 500)
	private String descricao;

    @Column(nullable = false, length = 250)
	private String instituiçao;

    @Column(nullable = false, length = 250)
	private String cidade;

    @Column(nullable = false, length = 250)
	private String nivel; //talvez enum?

    @Temporal(TemporalType.TIMESTAMP)
	@Column(nullable = false)
	private LocalDateTime dataInicial;

    @Temporal(TemporalType.TIMESTAMP)
	@Column(nullable = false)
	private LocalDateTime dataFinal;

    @ManyToOne
    @JoinColumn(name="curriculo_id", nullable=false)    
    private Curriculo curriculo;

    public FormacaoAcademica(){
    }

    public FormacaoAcademica(Integer id, String descricao, String instituiçao, String cidade, String nivel,
            LocalDateTime dataInicial, LocalDateTime dataFinal, Curriculo curriculo) {
        this.id = id;
        this.descricao = descricao;
        this.instituiçao = instituiçao;
        this.cidade = cidade;
        this.nivel = nivel;
        this.dataInicial = dataInicial;
        this.dataFinal = dataFinal;
        this.curriculo = curriculo;
    }

    @Override
    public String toString() {
        return "FormacaoAcademica [id=" + id + ", descricao=" + descricao + ", instituiçao=" + instituiçao + ", cidade="
                + cidade + ", nivel=" + nivel + ", dataInicial=" + dataInicial + ", dataFinal=" + dataFinal
                + ", curriculo=" + curriculo + "]";
    }
    
}
