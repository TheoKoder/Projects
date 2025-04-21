import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { FormComponent } from './components/form/form/form.component';
import { HomeComponent } from './pages/home/home.component';
import { AssetsComponent } from './pages/assets/assets.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { AdminComponent } from './components/admin/admin.component';
import { EmployeePageComponent } from './pages/employee-page/employee-page.component';
import { EmployeeDetailsComponent } from './pages/employee-details/employee-details.component';

export const routes: Routes = [
    {path: '',redirectTo: 'login', pathMatch: 'full'},
    {path: 'login', component: LoginPageComponent}, 
    // Catch-all route 
    //{ path: '**', redirectTo: 'login' },
    {
        path: '', 
        component: HomeComponent, // Parent layout with sidenav
        children: [
            { path: 'employee-page', component: EmployeePageComponent },
            { path: 'employee-details', component: EmployeeDetailsComponent }, 
            { path: 'admin', component: AdminComponent },
          { path: 'assets', redirectTo: 'asset', pathMatch: 'full' } // Default route
        ]
      },
    {path: 'asset', component:AssetsComponent},
    
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
