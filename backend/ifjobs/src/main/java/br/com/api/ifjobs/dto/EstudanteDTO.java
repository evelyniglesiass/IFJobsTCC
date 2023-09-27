package br.com.api.ifjobs.dto;

import java.util.List;
import java.util.stream.Collectors;

import br.com.api.ifjobs.models.Estudante;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class EstudanteDTO {

    private Integer id; 
    private String nome;
    private Integer idade;
    private String nomeUsuario;
    private String email;
    private String telefone; 
    private String cidade;

    public EstudanteDTO(Estudante estudante) {
        this.id = estudante.getId();
        this.nome = estudante.getNome();
        this.idade = estudante.getIdade();
        this.nomeUsuario = estudante.getNomeUsuario();
        this.email = estudante.getEmail();
        this.telefone = estudante.getTelefone();
        this.cidade = estudante.getCidade();
    }

    public static List<EstudanteDTO> converterLista(List<Estudante> listaEstudante) {
        return listaEstudante.stream().map(EstudanteDTO::new).collect(Collectors.toList());
    }

    // public EstudanteDTO converter(Estudante estudante) {
    //     BeanUtils.copyProperties(estudante, this, "senha", "curriculo", "vagas");
    //     return this;
    // }

    // public List<EstudanteDTO> converterLista(List<Estudante> listaEstudante) {
    //     EstudanteDTO estDTO = new EstudanteDTO();
    //     List<EstudanteDTO> estDTOLista = new ArrayList<>();
    //     listaEstudante.forEach(e -> {
    //         estDTOLista.add(estDTO.converter(e));
    //     });
    //     return estDTOLista;
    // }
   
}
