package br.com.api.ifjobs.security.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableGlobalMethodSecurity(prePostEnabled = true, securedEnabled = true, jsr250Enabled = true)
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public SecurityFilterChain configure(HttpSecurity http) throws Exception {

        http
                .csrf().disable().cors()
                .and()
                .authorizeRequests().antMatchers(HttpMethod.POST, "/empresas").permitAll()
                .and()
                .authorizeRequests().antMatchers(HttpMethod.POST, "/estudantes").permitAll()
                .and()
                .authorizeRequests().anyRequest().authenticated()
                .and()
                .httpBasic()
                .authenticationEntryPoint(
                        (request, response, authException) -> response.setStatus(HttpStatus.UNAUTHORIZED.value()))
                .and()
                .logout()
                .logoutSuccessHandler((request, response, authentication) -> response.setStatus(HttpStatus.OK.value()));

        return http.build();
    }
}
