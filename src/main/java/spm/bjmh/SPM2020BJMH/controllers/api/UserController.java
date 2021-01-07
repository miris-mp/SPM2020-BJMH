package spm.bjmh.SPM2020BJMH.controllers.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import spm.bjmh.SPM2020BJMH.controllers.request.UserSignupRequest;
import spm.bjmh.SPM2020BJMH.dto.model.user.UserDto;
import spm.bjmh.SPM2020BJMH.dto.response.Response;
import spm.bjmh.SPM2020BJMH.services.UserService;

import javax.validation.Valid;

@RestController
@RequestMapping("api/v1/user")
@CrossOrigin("*")
public class UserController {
    @Autowired
    private UserService userService;


    @GetMapping("/welcome")
    public String welcome() {
        return "EVVIENNE CA";
    }

    /**
     * Handles the incoming POST API "/user/signup"
     *
     * @param userSignupRequest
     * @return
     */
    @PostMapping(value = "/signup", produces = "application/json")
    public Response signup(@RequestBody @Valid UserSignupRequest userSignupRequest) {
        return Response.ok().setPayload(registerUser(userSignupRequest));
    }

    private UserDto registerUser(UserSignupRequest userSignupRequest) {
        UserDto userDto = new UserDto()
                .setEmail(userSignupRequest.getEmail())
                .setPassword(userSignupRequest.getPassword())
                .setFirstName(userSignupRequest.getFirstName())
                .setLastName(userSignupRequest.getLastName())
                .setMobileNumber(userSignupRequest.getMobileNumber())
                .setRoleName(userSignupRequest.getRoleName());

        return userService.signup(userDto);
    }
}
