package br.com.api.ifjobs.Entidades;

import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;

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

    public Integer getId() {
        return id;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public String getInstituicao() {
        return instituicao;
    }

    public void setInstituicao(String instituicao) {
        this.instituicao = instituicao;
    }

    public String getCidade() {
        return cidade;
    }

    public void setCidade(String cidade) {
        this.cidade = cidade;
    }

    public String getCargaHoraria() {
        return cargaHoraria;
    }

    public void setCargaHoraria(String cargaHoraria) {
        this.cargaHoraria = cargaHoraria;
    }

    public LocalDateTime getDataInicial() {
        return dataInicial;
    }

    public void setDataInicial(LocalDateTime dataInicial) {
        this.dataInicial = dataInicial;
    }

    public LocalDateTime getDataFinal() {
        return dataFinal;
    }

    public void setDataFinal(LocalDateTime dataFinal) {
        this.dataFinal = dataFinal;
    }

    public Curriculo getCurriculo() {
        return curriculo;
    }

    public void setCurriculo(Curriculo curriculo) {
        this.curriculo = curriculo;
    }

    
}
