import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {PanelModule} from 'primeng/panel';
import {MatSidenav}from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { MatTreeModule } from '@angular/material/tree';
//import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormField } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table'; 
import {MatInputModule} from '@angular/material/input';
import { HeaderComponent } from './components/header/header.component';
import { FormComponent } from './components/form/form/form.component';
import { LoginComponent } from './components/login/login.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { HomeComponent } from './pages/home/home.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { TagLeftMenuComponent } from "./components/tag-left-menu/tag-left-menu.component";
import { TreeViewComponent } from './components/tree-view/tree-view.component';
import { SingleSlotComponent } from './single-slot/Multi-slot/single-slot.component';
import { AssetsComponent } from './pages/assets/assets.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { AdminComponent } from './components/admin/admin.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { EmployeePageComponent } from './pages/employee-page/employee-page.component';
import { EmployeeDetailsComponent } from './pages/employee-details/employee-details.component';
//import {MultiSlotCompomnent } from './multi-slot/multi-slot/multi-slot.component';


@NgModule({
  declarations: [
    LoginComponent,
    LoginPageComponent, 
    HeaderComponent, 
    HomeComponent,
    FormComponent,
    TagLeftMenuComponent,
    TreeViewComponent,
    SingleSlotComponent,
    AssetsComponent,
    EmployeeComponent,
    AdminComponent,
    SearchBarComponent,
    EmployeePageComponent,
    EmployeeDetailsComponent,
   // MultiSlotCompomnent
  ],
  providers: [],
  imports: [
    CommonModule,
    RouterModule,
    MatSidenav,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatFormField,
    MatTreeModule,
    MatTableModule,
    PanelModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatExpansionModule,
    MatGridListModule
    
],
  exports:[HeaderComponent]
})
export class SharedModule { }
