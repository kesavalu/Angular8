import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styles: [
    `
      .whiteClr {
        color: white;
      }
    `
  ]
})
export class AppComponent {
  username = "";
  contents = [];
  isPresent = true;
  i: number = 0;
  applyCss = false;
  onReset() {
    if (this.username) this.username = "";
  }
  onToggle(event: Event) {
    console.log(event, new Date());
    this.contents.push(new Date());
    this.isPresent = !this.isPresent;
    if (this.contents.length > 4) {
      this.applyCss = true;
    } else {
      this.applyCss = false;
    }
  }
}
