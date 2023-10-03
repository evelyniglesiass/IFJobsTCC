package br.com.api.ifjobs.security.domain.enums;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public enum Funcao {
    
    EMPRESA(Nomes.EMPRESA), 
    ESTUDANTE(Nomes.ESTUDANTE);

    public static class Nomes{

        public Nomes(){}

        public static final String EMPRESA = "ROLE_EMPRESA";

        public static final String ESTUDANTE = "ROLE_ESTUDANTE";
    }

    private final String role;
}
