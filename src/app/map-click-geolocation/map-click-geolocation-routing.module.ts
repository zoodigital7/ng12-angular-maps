import { Routes, RouterModule } from '@angular/router'
import { NgModule } from '@angular/core'
import { MapClickGeolocationComponent } from './map-click-geolocation.component'

const routes: Routes = [
    {
        path: '',
        component: MapClickGeolocationComponent,
        data: { navigation: 'true', breadcrumb: 'Admin', state: 'admin', title: 'Pump Trakr | Admin' },
    }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})

export class MapClickGeolocationRoutingModule { }

