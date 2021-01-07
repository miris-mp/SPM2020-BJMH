package spm.bjmh.SPM2020BJMH.controllers.request;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.experimental.Accessors;

@Getter
@Setter
@Accessors(chain = true)
@NoArgsConstructor
@JsonIgnoreProperties(ignoreUnknown = true)
public class UserSignupRequest {
    private String email;

    private String password;

    private String firstName;

    private String lastName;

    private String mobileNumber;

    private String roleName;
}

