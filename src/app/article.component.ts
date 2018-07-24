import {Component, OnInit} from '@angular/core';
import {LicenseService} from './article.service';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  // Component properties
  generatedKey: String;
  validationKey: String;
  processValidation: boolean;
  statusCode: number;
  initializedValue: boolean;
  valueChanged: boolean;

  constructor(private licenseService: LicenseService) {
  }

  ngOnInit() {
    // console.log(this);
    this.initializedValue = false;
    this.valueChanged = false;
    this.validationKey = '';
  }

  validateForm() {

    console.log(this);

    if (this.generatedKey == null || this.generatedKey === '') {
      this.validationKey = '';
      this.generatedKey = '';
      this.processValidation = false;
      this.statusCode = 500;
    }
  }

  onArticleFormSubmit() {
    if (this.generatedKey == null || this.generatedKey === '') {
      this.statusCode = 404;
    }
    this.processValidation = true;

    if (!this.initializedValue) {
      this.initializedValue = true;
    }

    this.validateForm();
    if (this.processValidation) {
      this.getGenerateKey();
    }
  }

  getGenerateKey() {
    this.licenseService.generare(this.generatedKey)
      .subscribe(data => {

        this.statusCode = 200;
        this.validationKey = data;
        this.processValidation = true;
        this.valueChanged = false;
      }, errorCode => {
        this.statusCode = 404;
        this.processValidation = false;
      });
  }

  copyToClipboard(element) {
    element.select();
    document.execCommand('copy');
    element.setSelectionRange(0, 0);
  }
}
