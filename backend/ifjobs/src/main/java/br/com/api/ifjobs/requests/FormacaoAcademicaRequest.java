package br.com.api.ifjobs.requests;

import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonFormat;

import br.com.api.ifjobs.models.Curriculo;
import br.com.api.ifjobs.models.Niveis;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
//import javax.validation.constraints.Past;

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
public class FormacaoAcademicaRequest {
    
    @Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(nullable = false)
    private Integer id;

    @NotBlank(message = "Insira detalhes sobre sua formação acadêmica na descrição!")
    @Column(nullable = false, length = 500)
	private String descricao;

    @NotBlank(message = "Insira a instituição de sua formação acadêmica!")
    @Column(nullable = true, length = 50)
	private String instituicao;

    @NotBlank(message = "Insira a cidade de sua formação acadêmica!")
    @Column(nullable = false, length = 50)
	private String cidade;

    @NotNull(message = "Insira o nível de sua formação acadêmica!")
    @Column(nullable = false, length = 250)
    @Enumerated(EnumType.STRING)
	private Niveis nivel;

    @NotNull(message = "Insira a data inicial de sua formação acadêmica!")
    //@Past(message = "A data inicial da sua formação acadêmica deve ser igual ou anterior a data atual!")
	@Column(nullable = false)
    @DateTimeFormat(pattern = "dd-MM-yyyy")
    @JsonFormat(pattern = "dd-MM-yyyy")
	private String dataInicial;

    @NotNull(message = "Insira a data final de sua formação acadêmica!")
	@Column(nullable = false)
    @DateTimeFormat(pattern = "dd-MM-yyyy")
    @JsonFormat(pattern = "dd-MM-yyyy")
	private String dataFinal;

    @ManyToOne
    @JoinColumn(name="curriculo_id", nullable = false)    
    private Curriculo curriculo;
    
}
