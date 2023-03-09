
package com.foodable.foodableapp.controller;

import com.foodable.foodableapp.entity.FoodPackage;
import com.foodable.foodableapp.service.FoodPackageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
//annotation needed to give access permission to  frontend.
@CrossOrigin("*") 
@RestController
@RequestMapping("/food")
public class FoodPackageController {

    private final FoodPackageService foodPackageService;

    @Autowired
    public FoodPackageController(FoodPackageService foodPackageService) {
        this.foodPackageService = foodPackageService;
    }
    // http;//localhost;8080/api/food/
    @GetMapping(value = "/")
    public ResponseEntity<List<FoodPackage>> getAll(
            @RequestParam(value = "packageType", required = true) String packageType
    ) {
        List<FoodPackage> foodPackages = new ArrayList<>();

        // call service conditionally if packageType is all will return all data otherwise filtered data
        if(packageType.equalsIgnoreCase("ALL")) {
            foodPackages = foodPackageService.getAll();
        }else {
            foodPackages = foodPackageService.getFoodsByType(packageType);
        }

        return ResponseEntity.ok(foodPackages);
    }
}