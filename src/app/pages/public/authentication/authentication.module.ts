import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { NbAuthModule } from "@nebular/auth";
import {
  NbButtonModule,
  NbCheckboxModule,
  NbInputModule,
} from "@nebular/theme";
import { AuthenticationRoutingModule } from "./authentication-routing.module";
import { LoginComponent } from "./login/login.component";

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    FormsModule,
    RouterModule,
    NbInputModule,
    NbButtonModule,
    NbCheckboxModule,
    NbAuthModule,
  ],
})
export class AuthenticationModule {}
