import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SensorListComponent } from "./components/sensor-list/sensor-list.component";
import { SensorRegisterComponent } from './components/sensor-register/sensor-register.component';
import { ErrorListComponent } from './components/error-list/error-list.component';

const routes: Routes = [
  {path:'', component: SensorListComponent},
  {path: 'sensorList', component: SensorListComponent},
  {path: 'sensorRegister', component: SensorRegisterComponent},
  {path: 'errorList', component: ErrorListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
