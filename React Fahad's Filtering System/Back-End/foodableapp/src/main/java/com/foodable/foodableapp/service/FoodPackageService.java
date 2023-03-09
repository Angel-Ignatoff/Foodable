package com.foodable.foodableapp.service;

import com.foodable.foodableapp.entity.FoodPackage;

import java.util.List;

public interface FoodPackageService {

    List<FoodPackage> getFoodsByType(String type);

    List<FoodPackage> getAll();

}
