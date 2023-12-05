package br.com.api.ifjobs.services;

import org.springframework.stereotype.Service;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Service
public class SenhaService {

    private String senha;

    public boolean verificarSenha(String s) {
        if (s.matches("^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9a-zA-Z]).{8,}$")) {
            return true;

        } else {
            return false;

        }
    }

}
