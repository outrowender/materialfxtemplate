import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HomeHeaderComponent } from './layout/home-header/home-header.component'
import { Routes, RouterModule } from '@angular/router'
import { LogComponent } from './log/log.component'
import { MaterialFlexModule } from '../material-flex/material-flex.module'
import { HomeComponent } from './home.component'
import { SharedModule } from '../shared/shared.module'
import { SidebarComponent } from './layout/sidebar/sidebar.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', redirectTo: 'logs', pathMatch: 'full' },
      { path: 'logs', component: LogComponent }
    ]
  }
]

@NgModule({
  declarations: [
    HomeHeaderComponent,
    LogComponent,
    HomeComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    MaterialFlexModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class HomeModule { }
