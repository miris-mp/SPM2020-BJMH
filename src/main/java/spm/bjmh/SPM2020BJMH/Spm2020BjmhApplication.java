package spm.bjmh.SPM2020BJMH;


import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;


@SpringBootApplication
@EnableMongoRepositories
public class Spm2020BjmhApplication {

	public static void main(String[] args) {
		SpringApplication.run(Spm2020BjmhApplication.class, args);
	}
}
