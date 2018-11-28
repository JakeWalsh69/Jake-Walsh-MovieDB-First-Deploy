package controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import repository.MovieRespository;

@SpringBootApplication(scanBasePackages = {"controller", "model", "repository"})
@EnableJpaRepositories({"repository"})
@Configuration
@EnableAutoConfiguration
@EntityScan(basePackageClasses = Application.class)
public class Application implements CommandLineRunner{

    @Autowired
    private MovieRespository movieRespository;

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }

    @Override
    public void run(String... args) throws Exception {

    }
}