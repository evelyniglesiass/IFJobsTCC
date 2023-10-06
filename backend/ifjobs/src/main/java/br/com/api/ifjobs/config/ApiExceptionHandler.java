package br.com.api.ifjobs.config;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.validation.ObjectError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import javax.servlet.http.HttpServletRequest;
import java.util.LinkedHashMap;
import java.util.Map;
import java.util.Optional;

import static java.time.LocalDateTime.now;
import static org.springframework.http.HttpStatus.BAD_REQUEST;

@ControllerAdvice
public class ApiExceptionHandler {

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<Map<String, Object>> handlerMethodArgumentNotValidException(MethodArgumentNotValidException ex,
                                                                                      HttpServletRequest request){

        HttpStatus status = BAD_REQUEST;
        String message = extrairErro(ex);

        Map<String, Object> body = new LinkedHashMap<>();
        body.put("timestamp", now());
        body.put("status", status.value());
        body.put("error", status.getReasonPhrase());
        body.put("message", message);
        body.put("path", request.getServletPath());

        return new ResponseEntity<>(body, status);
    }

    private String extrairErro(MethodArgumentNotValidException ex) {

        Optional<ObjectError> erroOpt = ex.getBindingResult().getAllErrors()
                .stream()
                .findFirst();

        FieldError erro;

        if(erroOpt.isPresent()){

            erro = (FieldError) erroOpt.get();
        }
        else{
            return "Erro de validação.";
        }

        return erro.getField() + " " + erro.getDefaultMessage();
    }
}