package com.ust.CarhubServices.service;

import com.ust.CarhubServices.entity.CarService;
import com.ust.CarhubServices.repository.CarServiceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CarServiceService {
    @Autowired
    private CarServiceRepository carServiceRepository;

    public List<CarService> getAllCarServices() {
        return carServiceRepository.findAll();
    }

    public CarService createCarService(CarService carService) {
        return carServiceRepository.save(carService);
    }
}
