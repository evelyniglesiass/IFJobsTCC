package br.com.api.ifjobs.models;

import java.time.LocalDate;

import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonFormat;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
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
    @Enumerated(EnumType.STRING)
	private Niveis nivel;

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
    
}
