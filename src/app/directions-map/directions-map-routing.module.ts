import { Routes, RouterModule } from '@angular/router'
import { NgModule } from '@angular/core'
import { DirectionsMapComponent } from './directions-map.component'

const routes: Routes = [
    {
        path: '',
        component: DirectionsMapComponent,
        data: { navigation: 'true', breadcrumb: 'Admin', state: 'admin', title: 'Pump Trakr | Admin' },
    }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})

export class DirectionsMapRoutingModule { }

