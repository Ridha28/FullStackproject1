package com.nextax.nextax.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nextax.nextax.model.Tax;
import com.nextax.nextax.model.UserData;
import com.nextax.nextax.service.UserDataService;

@RestController
@RequestMapping("/userdata")
public class UserDataController {

    @Autowired
    private UserDataService userDataService;

    @PostMapping("/calculate")
    public void calculateTax(@RequestBody Tax tax) {
        userDataService.calculateAndSaveTax(tax);
    }

    @GetMapping("/{id}")
    public UserData getUserData(@PathVariable Long id) {
        return userDataService.getUserData(id);
    }
}