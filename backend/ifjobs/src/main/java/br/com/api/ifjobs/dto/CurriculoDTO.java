package br.com.api.ifjobs.dto;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import br.com.api.ifjobs.models.Curriculo; 
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
public class CurriculoDTO {

    private Integer id; 
    private String resumo;
    private List<String> habilidades = new ArrayList<>(); 
    private List<String> idiomas = new ArrayList<>();

    public CurriculoDTO(Curriculo curriculo) {
        this.id = curriculo.getId();
        this.resumo = curriculo.getResumo();
        this.habilidades = curriculo.getHabilidades();
        this.idiomas = curriculo.getIdiomas();
    }

    public static List<CurriculoDTO> converterLista(List<Curriculo> listaCurriculo) {
        return listaCurriculo.stream().map(CurriculoDTO::new).collect(Collectors.toList());
    }
    
}