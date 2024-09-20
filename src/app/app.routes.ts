import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { RecuperacaoComponent } from './pages/recuperacao/recuperacao.component';

export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
    },
    {
        path: 'registro',
        component: RegistroComponent,
    },
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'perfil',
        component: PerfilComponent,
    },
    {
        path: 'recuperacao',
        component: RecuperacaoComponent,
    }
];
