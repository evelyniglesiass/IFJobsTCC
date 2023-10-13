package br.com.api.ifjobs.dto;

import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

import br.com.api.ifjobs.models.FormacaoAcademica;
import br.com.api.ifjobs.models.Niveis;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class FormacaoAcademicaDTO {
    
    private Integer id;
    private String descricao;
    private String instituicao;
    private String cidade;
    private Niveis nivel;
    private LocalDate dataInicial;
    private LocalDate dataFinal;

    public FormacaoAcademicaDTO(FormacaoAcademica formacao){
        this.id = formacao.getId();
        this.descricao = formacao.getDescricao();
        this.instituicao = formacao.getInstituicao();
        this.cidade = formacao.getCidade();
        this.nivel = formacao.getNivel();
        this.dataInicial = formacao.getDataInicial();
        this.dataFinal = formacao.getDataFinal();
    }

    public static List<FormacaoAcademicaDTO> converterLista(List<FormacaoAcademica> listaFormacao){
        return listaFormacao.stream().map(FormacaoAcademicaDTO::new).collect(Collectors.toList());
    }
}
