import {Component, OnInit} from '@angular/core';

import {LicenseService} from './article.service';
import {LicenseEntity} from './article';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  // Component properties
  allLicenses: LicenseEntity[];
  generatedKey: string;
  validationKey: string;
  processValidation: boolean;
  statusCode: number;

  constructor(private licenseService: LicenseService) {
  }

  ngOnInit() {
    // console.log(this);
    this.validationKey = '';
  }

  onArticleFormSubmit() {
    // this.preProcessConfigurations();
    console.log(this);
    if (this.generatedKey == null) {
      this.processValidation = false;
      return;
    }

    this.licenseService.generare(this.generatedKey).subscribe(data => this.test(data));
    this.licenseService.generare(this.generatedKey)
      .subscribe(
        successCode => {
          this.statusCode = Number(successCode);
          this.processValidation = true;
        },
        errorCode => {
          this.statusCode = errorCode;
          this.processValidation = false;
        }
        );

  }

  test(data) {
    this.validationKey = data;
  }
}




