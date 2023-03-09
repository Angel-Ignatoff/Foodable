package com.Foodable.Foodable;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@EnableJpaAuditing

public class FoodableApplication {

	public static void main(String[] args) {
		SpringApplication.run(FoodableApplication.class, args);
	}

}
