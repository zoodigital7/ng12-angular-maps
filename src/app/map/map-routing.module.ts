import { Routes, RouterModule } from '@angular/router'
import { NgModule } from '@angular/core'
import { MapComponent } from './map.component'

const routes: Routes = [
    {
        path: '',
        component: MapComponent,
        data: { navigation: 'true', breadcrumb: 'Admin', state: 'admin', title: 'Pump Trakr | Admin' },
    }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})

export class MapRoutingModule { }

