import { Routes } from '@angular/router';
import { ServiceCatalogComponent } from './components/service-catalog/service-catalog.component';
import { AddServiceComponent } from './components/add-service/add-service.component';
import { AddPackageComponent } from './components/add-package/add-package.component';
import { ViewServicesComponent } from './components/view-services/view-services.component';
import { ViewPackagesComponent } from './components/view-packages/view-packages.component';
import { MainpageComponent } from './components/mainpage/mainpage.component';

export const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main', component: MainpageComponent },
  { path: 'services', component: ServiceCatalogComponent },
  { path: 'view-services', component: ViewServicesComponent },
  { path: 'view-packages', component: ViewPackagesComponent },
  { path: 'add-service', component: AddServiceComponent },
  { path: 'add-package', component: AddPackageComponent }
];
