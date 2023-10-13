package br.com.api.ifjobs.dto;

import java.util.List;
import java.util.stream.Collectors;

import br.com.api.ifjobs.models.Idioma;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class IdiomaDTO {
    
    private Integer id;
	private String descricao;

    public IdiomaDTO(Idioma idioma) {
        this.id = idioma.getId();
        this.descricao = idioma.getDescricao();
    }

    public static List<IdiomaDTO> converterLista(List<Idioma> listaIdioma) {
        return listaIdioma.stream().map(IdiomaDTO::new).collect(Collectors.toList());
    }
}
