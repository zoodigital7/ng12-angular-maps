import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'map'
  },
  {
    path: 'map',
    loadChildren: () => import('./map/map.module').then(m => m.MapModule)
  },
  {
    path: 'directions-map',
    loadChildren: () => import('./directions-map/directions-map.module').then(m => m.DirectionsMapModule)
  },
  {
    path: 'autocomplete',
    loadChildren: () => import('./autocomplete/autocomplete.module').then(m => m.AutocompleteModule)
  },
  {
    path: 'geolocation-input-output',
    loadChildren: () => import('./map-click-parent/map-click-parent.module').then(m => m.MapClickParentModule)
  },
  {
    path: 'map-click-geolocation',
    pathMatch: 'full',
    loadChildren: () => import('./map-click-geolocation/map-click-geolocation.module').then(m => m.MapClickGeolocationModule)
  },
  {
    path: 'map-click-parent',
    pathMatch: 'full',
    loadChildren: () => import('./map-click-parent/map-click-parent.module').then(m => m.MapClickParentModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
