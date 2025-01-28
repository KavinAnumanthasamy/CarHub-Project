import { Routes } from '@angular/router';
import { ServiceCatalogComponent } from './components/service-catalog/service-catalog.component';
import { ViewServicesComponent } from './components/view-services/view-services.component';
import { ViewPackagesComponent } from './components/view-packages/view-packages.component';
import { MainpageComponent } from './components/mainpage/mainpage.component';

export const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main', component: MainpageComponent },
  { path: 'service-catalog', component: ServiceCatalogComponent },
  { path: 'view-services', component: ViewServicesComponent },
  { path: 'view-packages', component: ViewPackagesComponent }
];
