import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { ExamplesModule } from './examples/examples.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { WelcomeComponent } from './main/welcome/welcome.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { BeforeLoginService } from './services/before-login.service';
import { AfterLoginService } from './services/after-login.service';
import { NgxSpinnerModule } from "ngx-spinner";
import { ToastrModule, ToastNoAnimationModule } from 'ngx-toastr';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        WelcomeComponent,
        FooterComponent
    ],
    imports: [
        BrowserAnimationsModule,
        NgbModule,
        FormsModule,
        RouterModule,
        AppRoutingModule,
        ComponentsModule,
        ExamplesModule,
        NgApexchartsModule,
        HttpClientModule,
        NgxSpinnerModule,
        ToastrModule.forRoot(),
        ToastNoAnimationModule.forRoot(),
    ],
    providers: [
        HttpClient,
        BeforeLoginService,
        AfterLoginService
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    bootstrap: [AppComponent]
})
export class AppModule { }
