import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { ErrorLayoutComponent } from './core/layouts/error-layout/error-layout.component';
import { Err404 } from 'src/app/shared/_models/http.model';
import { MainLayoutComponent } from './core/layouts/main-layout/main-layout.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'auth',
    loadChildren: () => import('./features/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'home',
    loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule),
    canActivate: [AuthGuard],
    component: MainLayoutComponent
  },
  {
    path: 'artist',
    loadChildren: () => import('./features/artist/artist.module').then(m => m.ArtistModule),
    canActivate: [AuthGuard],
    component: MainLayoutComponent
  },
  {
    path: 'about',
    loadChildren: () => import('./features/about/about.module').then(m => m.AboutModule),
    canActivate: [AuthGuard],
    component: MainLayoutComponent
  },
  { path: 'error', component: ErrorLayoutComponent, data: Err404 },
  { path: '**', redirectTo: 'error', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
