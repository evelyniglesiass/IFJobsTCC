package br.com.api.ifjobs.dto;

import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

import br.com.api.ifjobs.models.ExperienciaProfissional;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor; 
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ExperienciaProfissionalDTO {

    private Integer id;
	private String descricao;
	private String empresa;
	private String cargo;
	private LocalDate dataInicial;
    private LocalDate dataFinal;

    public ExperienciaProfissionalDTO(ExperienciaProfissional experiencia) {
        this.id = experiencia.getId();
        this.descricao = experiencia.getDescricao();
        this.empresa = experiencia.getEmpresa();
        this.cargo = experiencia.getCargo();
        this.dataInicial = experiencia.getDataInicial();
        this.dataFinal = experiencia.getDataFinal();
    }

    public static List<ExperienciaProfissionalDTO> converterLista(List<ExperienciaProfissional> listaExperiencia) {
        return listaExperiencia.stream().map(ExperienciaProfissionalDTO::new).collect(Collectors.toList());
    }
    
}
