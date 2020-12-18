package spm.bjmh.SPM2020BJMH.models.user;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.IndexDirection;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Set;

@Document(collection = "user")
public class User {
    @Id
    private String id;

    @Indexed(unique = true, direction = IndexDirection.DESCENDING)
    private String email;

    private String password;

    private String firstName;

    private String lastName;

    private String mobileNumber;

    @DBRef
    private Set<Role> roles;
}
