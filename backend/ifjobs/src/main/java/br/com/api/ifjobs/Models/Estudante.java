package br.com.api.ifjobs.models;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToOne;
import jakarta.validation.Valid;
import jakarta.validation.constraints.Email;
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
public class Estudante{

    @Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(nullable = false)
    private Integer id; 

    @NotBlank(message = "Insira seu nome!")
    @Valid
    @Column(nullable = false, length = 50) 
    private String nome;

    @NotBlank(message = "Insira sua idade!")
    @Valid
    @Column(nullable = false) 
    private Integer idade;

    @NotBlank(message = "Insira seu nome de usuário!")
    @Valid
    @Column(nullable = false, length = 50)
    private String nomeUsuario;

    @NotBlank(message = "Insira seu email!")
    @Valid
    @Column(nullable = false, length = 100)
    @Email(message = "Insira um email válido!")
    private String email;

    @NotBlank(message = "Insira sua senha!")
    @Valid
    @Column(nullable = false, length = 50)
    private String senha;

    @NotBlank(message = "Insira seu telefone!")
    @Valid
    @Column(nullable = true, length = 11) 
    private String telefone; 

    @NotBlank(message = "Insira sua cidade!")
    @Valid
    @Column(nullable = true, length = 50)
    private String cidade;

	@OneToOne(mappedBy = "estudante", cascade = CascadeType.ALL)
    private Curriculo curriculo;

    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(name = "candidatura", 
        joinColumns = {@JoinColumn(name = "estudante_id")}, 
        inverseJoinColumns = {@JoinColumn(name = "vaga_id")})
    private List<Vaga> vagas = new ArrayList<>();

}