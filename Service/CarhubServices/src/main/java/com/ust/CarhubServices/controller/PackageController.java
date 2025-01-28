package com.ust.CarhubServices.controller;

import com.ust.CarhubServices.entity.Package;
import com.ust.CarhubServices.service.PackageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/packages")
public class PackageController {
    @Autowired
    private PackageService packageService;

    @GetMapping
    public List<Package> getAllPackages() {
        return packageService.getAllPackages();
    }

    @PostMapping
    public Package createPackage(@RequestBody Package carPackage, @RequestParam List<Long> carServiceIds) {
        return packageService.createPackage(carPackage, carServiceIds);
    }
}
