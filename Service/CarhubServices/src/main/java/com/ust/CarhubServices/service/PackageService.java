package com.ust.CarhubServices.service;


import com.ust.CarhubServices.entity.Package;
import com.ust.CarhubServices.entity.CarService;
import com.ust.CarhubServices.repository.PackageRepository;
import com.ust.CarhubServices.repository.CarServiceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PackageService {
    @Autowired
    private PackageRepository packageRepository;

    @Autowired
    private CarServiceRepository carServiceRepository;

    public List<Package> getAllPackages() {
        return packageRepository.findAll();
    }

    public Package createPackage(Package carPackage, List<Long> carServiceIds) {
        List<CarService> carServices = carServiceRepository.findAllById(carServiceIds);
        carPackage.setCarServices(carServices);
        carPackage.setTotalPrice(carServices.stream().mapToDouble(CarService::getPrice).sum());
        return packageRepository.save(carPackage);
    }
}
