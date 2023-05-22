import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LivresComponent } from './livres/livres.component';
import { AddLivreComponent } from './add-livre/add-livre.component';
import { FormsModule } from '@angular/forms';
import { UpdateLivreComponent } from './update-livre/update-livre.component';
import { ListeTypesComponent } from './liste-types/liste-types.component';
import { RechercheParTypeComponent } from './recherche-par-type/recherche-par-type.component';

import { RechercheParTitreComponent } from './recherche-par-titre/recherche-par-titre.component';
import { UpdateTypeComponent } from './update-type/update-type.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './services/token.interceptor';
import { SearchFilterPipe } from './search-filter.pipe';
import { RegisterComponent } from './register/register.component';
import { AllUsersComponent } from './all-users/all-users.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { AddUserComponent } from './add-user/add-user.component';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [
    AppComponent,
    LivresComponent,
    AddLivreComponent,
    UpdateLivreComponent,
    ListeTypesComponent,
    RechercheParTypeComponent,
    RechercheParTitreComponent,
    UpdateTypeComponent,
    LoginComponent,
    ForbiddenComponent,
    SearchFilterPipe,
    RegisterComponent,
    AllUsersComponent,
    EditUserComponent,
    AddUserComponent,
    ProfileComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    
  ],
  providers: [{ provide : HTTP_INTERCEPTORS,
    useClass : TokenInterceptor,
    multi : true}
     ],
    
  bootstrap: [AppComponent]
})
export class AppModule { }
