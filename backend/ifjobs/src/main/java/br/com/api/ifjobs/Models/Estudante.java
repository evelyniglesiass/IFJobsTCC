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
import jakarta.validation.constraints.Email;
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

    @Column(nullable = false, length = 50) 
    private String nome;

    @Column(nullable = false) 
    private Integer idade;

    @Column(nullable = false, length = 50)
    private String nomeUsuario;

    @Column(nullable = false, length = 100)
    @Email(message = "Insira um email válido!")
    private String email;

    @Column(nullable = false, length = 50)
    private String senha;

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