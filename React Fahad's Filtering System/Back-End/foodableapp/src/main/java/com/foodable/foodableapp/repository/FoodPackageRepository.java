package com.foodable.foodableapp.repository;

import com.foodable.foodableapp.entity.FoodPackage;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FoodPackageRepository extends JpaRepository<FoodPackage, Long> {

    /**
     * This method will query data in Database and return results accordingly.
     * Query data with type halal, vegan, vegetarian
     *
     * @param type
     * @return
     */
    List<FoodPackage> findAllByPackageType(String type);

}






