package br.com.api.ifjobs.models;

import java.util.ArrayList;
import java.util.List;

import org.hibernate.validator.constraints.Length;

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
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
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
    @Column(nullable = false, length = 50) 
    private String nome;

    @NotNull(message = "Insira sua idade!")
    @Column(nullable = false) 
    private Integer idade;

    @NotBlank(message = "Insira seu nome de usuário!")
    @Column(nullable = false, length = 50)
    private String nomeUsuario;

    @Column(nullable = false, length = 100)
    @NotBlank(message = "Insira seu email!")
    @Email(message = "Insira um email válido!")
    private String email;

    @NotBlank(message = "Insira sua senha!")
    @Column(nullable = false, length = 50)
    private String senha;

    @Length(max = 11, min = 11, message = "Insira um telefone válido!")
    @Column(nullable = true, length = 11) 
    private String telefone; 

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