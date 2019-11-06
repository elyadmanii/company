package com.company.web.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.company.web.entity.Company;
import com.company.web.service.CompanyService;

@Service
public class ComapanyServiceImp implements CompanyService {

	List<Company> companies = new ArrayList<>();

	@Override
	public void save(Company company) {
		companies.add(company);
	}

	@Override
	public void update(Company company) {
		// TODO Auto-generated method stub
	}

	@Override
	public void delete(String siren) {
		// TODO Auto-generated method stub
	}

	@Override
	public List<Company> getAll() {
		return companies;
	}

}
