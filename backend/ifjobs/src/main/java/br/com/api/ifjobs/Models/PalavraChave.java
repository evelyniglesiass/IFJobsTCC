package br.com.api.ifjobs.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.validation.constraints.Size;

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
public class PalavraChave {

    @Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(nullable = false)
    private Integer id;
    
    @Size(min = 1, message = "Insira palavras chave sobre sua vaga!")
	@Column(nullable = false, length = 250)
    private String palavra;

    @ManyToOne
    @JoinColumn(name="vaga_id", nullable=false)    
    private Vaga vaga;
}
