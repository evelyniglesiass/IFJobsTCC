package br.com.api.ifjobs.dto;

import java.util.List;
import java.util.stream.Collectors;

import br.com.api.ifjobs.models.Habilidade;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class HabilidadeDTO {

    private Integer id;
    private String descricao;

    public HabilidadeDTO(Habilidade habilidade) {
        this.id = habilidade.getId();
        this.descricao = habilidade.getDescricao();
    }

    public static List<HabilidadeDTO> converterLista(List<Habilidade> listaHabilidade) {
        return listaHabilidade.stream().map(HabilidadeDTO::new).collect(Collectors.toList());
    }
}
