package br.com.api.ifjobs.requests;

import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonFormat;

import br.com.api.ifjobs.models.Curriculo;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

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
public class ExperienciaProfissionalRequest {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false)
    private Integer id;

    @NotBlank(message = "Insira a empresa na qual você trabalhou!")
    @Column(nullable = false, length = 50)
    private String empresa;

    @NotBlank(message = "Insira seu cargo!")
    @Column(nullable = false, length = 50)
    private String cargo;

    @NotNull(message = "Insira a data inicial de sua experiência profissional!")
    @Column(nullable = false)
    @DateTimeFormat(pattern = "dd-MM-yyyy")
    @JsonFormat(pattern = "dd-MM-yyyy")
    private String dataInicial;

    @NotNull(message = "Insira a data final da sua experiência profissional!")
    @Column(nullable = false)
    @DateTimeFormat(pattern = "dd-MM-yyyy")
    @JsonFormat(pattern = "dd-MM-yyyy")
    private String dataFinal;

    @NotBlank(message = "Insira detalhes sobre a sua experiência profissional na descrição!")
    @Column(nullable = false, length = 500)
    private String descricao;

    @ManyToOne
    @JoinColumn(name = "curriculo_id", nullable = false)
    private Curriculo curriculo;

}
