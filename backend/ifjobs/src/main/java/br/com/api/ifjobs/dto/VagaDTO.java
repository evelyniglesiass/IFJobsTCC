package br.com.api.ifjobs.dto;

import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

import br.com.api.ifjobs.models.Cursos;
import br.com.api.ifjobs.models.Vaga;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class VagaDTO {

	private Integer id;
	private boolean status;
	private String titulo;
	private String descricao;
	private Cursos curso;
	private Double salario;
    private Integer idadeMinima;
    private String cidade;
	private LocalDate dataPublicacao; 

    public VagaDTO(Vaga vaga) {
        this.id = vaga.getId();
        this.status = vaga.isStatus();
        this.titulo = vaga.getTitulo();
        this.descricao = vaga.getDescricao();
        this.curso = vaga.getCurso();
        this.salario = vaga.getSalario();
        this.idadeMinima = vaga.getIdadeMinima();
        this.cidade = vaga.getCidade();
        this.dataPublicacao = vaga.getDataPublicacao();
    }

    public static List<VagaDTO> converterLista(List<Vaga> listaVaga) {
        return listaVaga.stream().map(VagaDTO::new).collect(Collectors.toList());
    }
    
}
