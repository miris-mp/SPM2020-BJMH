package spm.bjmh.SPM2020BJMH.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;
import spm.bjmh.SPM2020BJMH.dto.model.user.UserDto;
import spm.bjmh.SPM2020BJMH.models.user.Role;
import spm.bjmh.SPM2020BJMH.models.user.User;
import spm.bjmh.SPM2020BJMH.models.user.UserRoles;
import spm.bjmh.SPM2020BJMH.repositories.RoleRepository;
import spm.bjmh.SPM2020BJMH.repositories.UserRepository;

@Component
public class UserServiceImpl implements UserService {
    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private final UserRepository userRepository;

    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public UserDto signup(UserDto userDto) {
        Role userRole;
        User user = userRepository.findByEmail(userDto.getEmail());
        if (user == null) {
            if (userDto.getRoleName() == "ADMIN") {
                userRole = roleRepository.findByRole(UserRoles.ADMIN.name());
            } else if (userDto.getRoleName() == "DRIVER") {

            } else {
                System.out.println(userDto.getRoleName());
            }
        }
        return null;
    }

    @Override
    public UserDto findUserByEmail(String email) {
        return null;
    }

    @Override
    public UserDto updateProfile(UserDto userDto) {
        return null;
    }

    @Override
    public UserDto changePassword(UserDto userDto) {
        return null;
    }
}
