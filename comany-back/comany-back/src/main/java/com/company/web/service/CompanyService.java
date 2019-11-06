package com.company.web.service;

import java.util.List;

import com.company.web.entity.Company;

public interface CompanyService {

	void save(Company company);

	void update(Company company);

	void delete(String siren);

	List<Company> getAll();
}
