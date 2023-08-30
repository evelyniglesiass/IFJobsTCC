package br.com.api.ifjobs.Entidades;

import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;

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

    public FormacaoAcademica(){
    }

    public FormacaoAcademica(Integer id, String descricao, String instituiçao, String cidade, String nivel,
            LocalDateTime dataInicial, LocalDateTime dataFinal) {
        this.id = id;
        this.descricao = descricao;
        this.instituiçao = instituiçao;
        this.cidade = cidade;
        this.nivel = nivel;
        this.dataInicial = dataInicial;
        this.dataFinal = dataFinal;
    }

    @Override
    public String toString() {
        return "FormacaoAcademica [id=" + id + ", descricao=" + descricao + ", instituiçao=" + instituiçao + ", cidade="
                + cidade + ", nivel=" + nivel + ", dataInicial=" + dataInicial + ", dataFinal=" + dataFinal + "]";
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

    public String getInstituiçao() {
        return instituiçao;
    }

    public void setInstituiçao(String instituiçao) {
        this.instituiçao = instituiçao;
    }

    public String getCidade() {
        return cidade;
    }

    public void setCidade(String cidade) {
        this.cidade = cidade;
    }

    public String getNivel() {
        return nivel;
    }

    public void setNivel(String nivel) {
        this.nivel = nivel;
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

    
}