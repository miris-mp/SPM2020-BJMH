package spm.bjmh.SPM2020BJMH.services;

import spm.bjmh.SPM2020BJMH.dto.model.user.UserDto;

public interface UserService {
    /** register a new user **/
    UserDto signup(UserDto userDto);

    /** Search existing user **/
    UserDto findUserByEmail(String email);

    /** Update profile of a user **/
    UserDto updateProfile(UserDto userDto);

    /** Update password **/
    UserDto changePassword(UserDto userDto, String newPassword);


}
