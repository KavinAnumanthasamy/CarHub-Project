package com.ust.CarhubServices.controller;

import com.ust.CarhubServices.entity.CarService;
import com.ust.CarhubServices.service.CarServiceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/car-services")
public class CarServiceController {
    @Autowired
    private CarServiceService carServiceService;

    @GetMapping
    public List<CarService> getAllCarServices() {
        return carServiceService.getAllCarServices();
    }

    @PostMapping
    public CarService createCarService(@RequestBody CarService carService) {
        return carServiceService.createCarService(carService);
    }
}