import { Routes, RouterModule } from '@angular/router'
import { NgModule } from '@angular/core'
import { MapClickParentComponent } from './map-click-parent.component'

const routes: Routes = [
    {
        path: '',
        component: MapClickParentComponent,
        data: { navigation: 'true', breadcrumb: 'Admin', state: 'admin', title: 'Pump Trakr | Admin' },
    }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})

export class MapClickParentRoutingModule { }

