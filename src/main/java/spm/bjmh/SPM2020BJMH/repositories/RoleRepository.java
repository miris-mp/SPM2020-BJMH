package spm.bjmh.SPM2020BJMH.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import spm.bjmh.SPM2020BJMH.models.user.Role;

import java.util.Optional;

public interface RoleRepository extends MongoRepository<Role, String> {

    Role findByRole(String s);
}
