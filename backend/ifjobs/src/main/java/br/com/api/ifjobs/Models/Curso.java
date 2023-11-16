package br.com.api.ifjobs.models;

import java.time.LocalDate;

import javax.persistence.Id;

import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonFormat;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Past;

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
public class Curso {
    
    @Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(nullable = false)
    private Integer id;

    @NotBlank(message = "Insira o título de seu curso!")
    @Column(nullable = false, length = 250)
	private String titulo;

    @NotBlank(message = "Insira detalhes sobre seu curso na descrição!")
    @Column(nullable = false, length = 500)
	private String descricao;

    @Column(nullable = false, length = 250)
	private String cidade;

    @NotBlank(message = "Insira a instituição do seu curso!")
    @Column(nullable = false, length = 250)
	private String instituicao;

    @NotBlank(message = "Insira a carga horária do seu curso!")
    @Column(nullable = false, length = 250)
	private String cargaHoraria;

    @NotNull(message = "Insira a data inicial do seu curso!")
    @Past(message = "A data inicial do seu curso deve ser igual ou anterior a data atual!")
	@Column(nullable = false)
    @DateTimeFormat(pattern = "dd-MM-yyyy")
    @JsonFormat(pattern = "dd-MM-yyyy")
	private LocalDate dataInicial;

    @NotNull(message = "Insira a data final do seu curso!")
	@Column(nullable = false)
    @DateTimeFormat(pattern = "dd-MM-yyyy")
    @JsonFormat(pattern = "dd-MM-yyyy")
	private LocalDate dataFinal;

    @ManyToOne
    @JoinColumn(name="curriculo_id", nullable=false)    
    private Curriculo curriculo;

}
