import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationRoutes } from './enums/application-routes.enum';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: ApplicationRoutes.Patient },
  {
    path: ApplicationRoutes.Patient,
    loadChildren: () => import('./patient/patient.module').then((module: any) => module.PatientModule),
  },
  { path: '**', redirectTo: ApplicationRoutes.Patient },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
