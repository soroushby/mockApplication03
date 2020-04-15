import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from "@angular/core";
import { Validators ,} from '@angular/forms';

@Component({
    selector: "app-contact-us",
    templateUrl: "./contact-us.component.html",
    styleUrls: ["./contact-us.component.scss"]
})
export class ContactUsComponent implements OnInit {
    constructor(private fb:FormBuilder) {}
contactForm:any;
    ngOnInit() {
        this.contactForm = this.fb.group({
            name: ["", Validators.required],
            email: ["", Validators.required],
          message:["",Validators.required]
           
        });
      
    }
}
