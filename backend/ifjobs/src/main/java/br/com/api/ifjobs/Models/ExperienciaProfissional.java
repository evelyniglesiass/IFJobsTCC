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
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Past;
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
public class ExperienciaProfissional {
    
    @Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(nullable = false)
    private Integer id;

    @NotBlank(message = "Insira detalhes sobre a sua experiência profissional na descrição!")
    @Column(nullable = false, length = 500) 
	private String descricao;

    @NotBlank(message = "Insira a empresa na qual você trabalhou!")
    @Column(nullable = false, length = 50)
	private String empresa;

    @NotBlank(message = "Insira seu cargo!")
    @Column(nullable = false, length = 50)
	private String cargo;

    @NotNull(message = "Insira a data inicial de sua experiência profissional!")
    @Past(message = "A data inicial da sua experiência profissional deve ser igual ou anterior a data atual!")
	@Column(nullable = false)
    @DateTimeFormat(pattern = "dd-MM-yyyy")
    @JsonFormat(pattern = "dd-MM-yyyy")
	private LocalDate dataInicial;

    @NotNull(message = "Insira a data final da sua experiência profissional!")
	@Column(nullable = false)
    @DateTimeFormat(pattern = "dd-MM-yyyy")
    @JsonFormat(pattern = "dd-MM-yyyy")
	private LocalDate dataFinal;

    @ManyToOne
    @JoinColumn(name="curriculo_id", nullable = false)    
    private Curriculo curriculo;
    
}
