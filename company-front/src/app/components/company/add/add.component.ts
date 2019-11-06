import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CompanyService } from 'src/app/services/company.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  addForm: FormGroup;
  submitted = false;
  loading = false;


  constructor(private formBuilder: FormBuilder,
    private comapyService: CompanyService,
    private router: Router) { }

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      siren: ['', Validators.required],
      name: ['', Validators.required]
    });
  }

  get f() {
    return this.addForm.controls;
  }


  save() {
    this.submitted = true;

    if (this.addForm.invalid) {
      return;
    }
    this.loading = true;
    this.comapyService.save(this.addForm.value).subscribe(
      data => {
        this.router.navigate(['companies']);
      }, error => {

      })
  }
}
