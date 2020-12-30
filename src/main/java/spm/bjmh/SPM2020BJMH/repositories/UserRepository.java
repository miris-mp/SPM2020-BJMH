package spm.bjmh.SPM2020BJMH.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import spm.bjmh.SPM2020BJMH.models.user.User;

public interface UserRepository extends MongoRepository<User, String> {
    Boolean existsByEmail(String email);
    User findByEmail(String email);
}
