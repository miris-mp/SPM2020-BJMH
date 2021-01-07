package spm.bjmh.SPM2020BJMH.dto.mapper;

import spm.bjmh.SPM2020BJMH.dto.model.user.RoleDto;
import spm.bjmh.SPM2020BJMH.dto.model.user.UserDto;
import spm.bjmh.SPM2020BJMH.models.user.User;

import java.util.HashSet;
import java.util.stream.Collectors;
import org.modelmapper.ModelMapper;

public class UserMapper {

    public static UserDto toUserDto(User user) {
        return new UserDto()
                .setEmail(user.getEmail())
                .setFirstName(user.getFirstName())
                .setLastName(user.getLastName())
                .setMobileNumber(user.getMobileNumber())
                .setRoles(new HashSet<RoleDto>(user
                        .getRoles()
                        .stream()
                        .map(role -> new ModelMapper().map(role, RoleDto.class))
                        .collect(Collectors.toSet())));
    }
}
