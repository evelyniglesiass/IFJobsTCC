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

@Entity
public class ExperienciaProfissional {
    
    @Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(nullable = false)
    private Integer id;

    @Column(nullable = false, length = 500)
	private String descricao;

    @Column(nullable = false, length = 250)
	private String empresa;

    @Column(nullable = false, length = 250)
	private String cargo;

    @Temporal(TemporalType.TIMESTAMP)
	@Column(nullable = false)
	private LocalDateTime dataInicial;

    @Temporal(TemporalType.TIMESTAMP)
	@Column(nullable = false)
	private LocalDateTime dataFinal;

    @ManyToOne
    @JoinColumn(name="curriculo_id", nullable=false)    
    private Curriculo curriculo;

    public ExperienciaProfissional(){
    }

    public ExperienciaProfissional(Integer id, String descricao, String empresa, String cargo,
            LocalDateTime dataInicial, LocalDateTime dataFinal, Curriculo curriculo) {
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

    public Integer getId() {
        return id;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public String getEmpresa() {
        return empresa;
    }

    public void setEmpresa(String empresa) {
        this.empresa = empresa;
    }

    public String getCargo() {
        return cargo;
    }

    public void setCargo(String cargo) {
        this.cargo = cargo;
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
