package br.com.api.ifjobs.dto;

import java.util.List;
import java.util.stream.Collectors;

import br.com.api.ifjobs.models.PalavraChave;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class PalavraChaveDTO {

    private Integer id;
    private String palavra;

    public PalavraChaveDTO(PalavraChave palavraChave) {
        this.id = palavraChave.getId();
        this.palavra = palavraChave.getPalavra();
    }

    public static List<PalavraChaveDTO> converterLista(List<PalavraChave> listaPalavraChave) {
        return listaPalavraChave.stream().map(PalavraChaveDTO::new).collect(Collectors.toList());
    }
}
