package com.foodable.foodableapp.service.impl;

import com.foodable.foodableapp.entity.FoodPackage;
import com.foodable.foodableapp.repository.FoodPackageRepository;
import com.foodable.foodableapp.service.FoodPackageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FoodPackageServiceImpl implements FoodPackageService {

    private final FoodPackageRepository foodPackageRepository;

    @Autowired
    public FoodPackageServiceImpl(FoodPackageRepository foodPackageRepository) {
        this.foodPackageRepository = foodPackageRepository;
    }

    @Override
    public List<FoodPackage> getFoodsByType(String type) {
        // filter food packages with type and return data
        return foodPackageRepository.findAllByPackageType(type);
    }

    @Override
    public List<FoodPackage> getAll() {
        // get all packages without filtering
        return foodPackageRepository.findAll();
    }


}
