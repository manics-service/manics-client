import { NgModule }             from '@angular/core';   
import { Routes, RouterModule } from '@angular/router';
import { NavigationComponent } from "./pages/login-page/navigation/navigation.component";
import { LoginComponent } from './pages/login-page/login/login.component'


const routes: Routes = [
    { path: '', component: NavigationComponent },
    { path: 'login',  component: LoginComponent}
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}