package spm.bjmh.SPM2020BJMH.models.driver;

import org.springframework.data.mongodb.core.mapping.Document;

@Document("Car")
public class Car {
    private String licensePlateNumber;
    private Integer driver;
    private String model;

    public Car(String licensePlateNumber, Integer driver, String model) {
        this.licensePlateNumber = licensePlateNumber;
        this.driver = driver;
        this.model = model;
    }

    public String getLicensePlateNumber() {
        return licensePlateNumber;
    }

    public void setLicensePlateNumber(String licensePlateNumber) {
        this.licensePlateNumber = licensePlateNumber;
    }

    public Integer getDriver() {
        return driver;
    }

    public void setDriver(Integer driver) {
        this.driver = driver;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }
}
