package com.company.web.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.company.web.entity.Company;
import com.company.web.service.CompanyService;

@RestController
@RequestMapping("/api/companies")
@CrossOrigin(origins = "http://localhost:4200")
public class CompanyRest {

	@Autowired
	private CompanyService companyService;

	@RequestMapping(value = "/company", method = RequestMethod.POST)
	public void save(@RequestBody Company company) {
		companyService.save(company);
	}

	@RequestMapping(value = "/company", method = RequestMethod.GET)
	public List<Company> getAll() {
		return companyService.getAll();
	}

}
