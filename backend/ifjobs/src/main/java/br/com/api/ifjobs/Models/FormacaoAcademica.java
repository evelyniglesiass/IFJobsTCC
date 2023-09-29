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
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;
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

    @NotBlank(message = "Insira detalhes sobre sua formação acadêmica na descrição!")
    @Valid
    @Column(nullable = false, length = 500)
	private String descricao;

    @NotBlank(message = "Insira a instituição de sua formação acadêmica!")
    @Valid
    @Column(nullable = false, length = 250)
	private String instituiçao;

    @NotBlank(message = "Insira a cidade de sua formação acadêmica!")
    @Valid
    @Column(nullable = false, length = 250)
	private String cidade;

    @NotBlank(message = "Insira o nível de sua formação acadêmica!")
    @Valid
    @Column(nullable = false, length = 250)
    @Enumerated(EnumType.STRING)
	private Niveis nivel;

    @NotBlank(message = "Insira a data inicial de sua formação acadêmica!")
    @Valid
	@Column(nullable = false)
    @DateTimeFormat(pattern = "dd-MM-yyyy")
    @JsonFormat(pattern = "dd-MM-yyyy")
	private LocalDate dataInicial;

    @NotBlank(message = "Insira a data final de sua formação acadêmica!")
    @Valid
	@Column(nullable = false)
    @DateTimeFormat(pattern = "dd-MM-yyyy")
    @JsonFormat(pattern = "dd-MM-yyyy")
	private LocalDate dataFinal;

    @ManyToOne
    @JoinColumn(name="curriculo_id", nullable=false)    
    private Curriculo curriculo;
    
}
