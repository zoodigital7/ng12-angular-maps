import { Routes, RouterModule } from '@angular/router'
import { NgModule } from '@angular/core'
import { AutocompleteComponent } from './autocomplete.component'

const routes: Routes = [
    {
        path: '',
        component: AutocompleteComponent,
        data: { navigation: 'true', breadcrumb: 'Admin', state: 'admin', title: 'Pump Trakr | Admin' },
    }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})

export class AutocompleteRoutingModule { }

