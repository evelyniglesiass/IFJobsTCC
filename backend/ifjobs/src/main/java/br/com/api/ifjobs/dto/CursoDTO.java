package br.com.api.ifjobs.dto;

import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

import br.com.api.ifjobs.models.Curso;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class CursoDTO {
    
    private Integer id;
    private String descricao;
    private String cidade;
    private String instituicao;
    private String cargaHoraria;
    private LocalDate dataInicial;
    private LocalDate dataFinal;

    public CursoDTO(Curso curso){
        this.id = curso.getId();
        this.descricao = curso.getDescricao();
        this.cidade = curso.getCidade();
        this.instituicao = curso.getInstituicao();
        this.cargaHoraria = curso.getCargaHoraria();
        this.dataInicial = curso.getDataInicial();
        this.dataFinal = curso.getDataFinal();
    }

    public static List<CursoDTO> converterLista(List<Curso> listaCurso){
        return listaCurso.stream().map(CursoDTO::new).collect(Collectors.toList());
    }

}
