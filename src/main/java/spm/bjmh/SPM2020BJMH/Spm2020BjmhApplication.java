package spm.bjmh.SPM2020BJMH;


import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;
import spm.bjmh.SPM2020BJMH.models.user.Role;
import spm.bjmh.SPM2020BJMH.models.user.User;
import spm.bjmh.SPM2020BJMH.repositories.RoleRepository;
import spm.bjmh.SPM2020BJMH.repositories.UserRepository;

import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;

import spm.bjmh.SPM2020BJMH.models.user.UserRoles;


@SpringBootApplication
@EnableMongoRepositories
public class Spm2020BjmhApplication {

	public static void main(String[] args) {
		SpringApplication.run(Spm2020BjmhApplication.class, args);
	}

	@Bean
	CommandLineRunner init(RoleRepository roleRepository, UserRepository userRepository) {
		return args -> {
			//Create Admin and Passenger Roles
			Role adminRole = roleRepository.findByRole("ADMIN");
			if (adminRole == null) {
				adminRole = new Role();
				adminRole.setRole("ADMIN");
				roleRepository.save(adminRole);
			}

			Role userRole = roleRepository.findByRole("DRIVER");
			if (userRole == null) {
				userRole = new Role();
				userRole.setRole("DRIVER");
				roleRepository.save(userRole);
			}

			//Create an Admin user
			User admin = userRepository.findByEmail("admin.agencya@gmail.com");
			if (admin == null) {
				admin = new User()
						.setEmail("admin.agencya@gmail.com")
						.setPassword("$2a$10$7PtcjEnWb/ZkgyXyxY1/Iei2dGgGQUbqIIll/dt.qJ8l8nQBWMbYO") // "123456"
						.setFirstName("John")
						.setLastName("Doe")
						.setMobileNumber("9425094250")
						.setRoles(new HashSet<>(Arrays.asList(adminRole)));
				userRepository.save(admin);
			}
		};
	}
}
