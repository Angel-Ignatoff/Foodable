package com.example.demo;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import java.sql.Connection;

@Controller
public class AppController {


	@GetMapping("")
	public String viewHomePage() {
		return "index";
	}				

	@GetMapping("/register")
	public String showSignUpForm(Model model) {
		model.addAttribute("user", new User());
		return "signup_from";

	}
}
