import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  public form = new FormGroup({
    name: new FormControl(""),
    email: new FormControl(""),
    password: new FormControl(""),
  });

  onSubmit(): void {
    console.log(this.form.value);
  }
}
