import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { FlexLayoutModule } from '@angular/flex-layout'

import { MatToolbarModule } from '@angular/material/toolbar'
import { MatExpansionModule } from '@angular/material/expansion'
import { MatCardModule } from '@angular/material/card'
import { MatTreeModule } from '@angular/material/tree'
import { MatButtonModule } from '@angular/material/button'
import { MatListModule } from '@angular/material/list'
import { MatIconModule } from '@angular/material/icon'
import { MatRippleModule } from '@angular/material/core'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatTabsModule } from '@angular/material/tabs'
import { MatSelectModule } from '@angular/material/select'
import { MatCheckboxModule } from '@angular/material/checkbox'
import { MatDialogModule } from '@angular/material/dialog'
import { MatMenuModule } from '@angular/material/menu'
import { MatProgressBarModule } from '@angular/material/progress-bar'
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { MatSidenavModule } from '@angular/material/sidenav'

@NgModule({
  declarations: [],
  imports: [
    CommonModule,

    FlexLayoutModule,

    MatToolbarModule,
    MatExpansionModule,
    MatCardModule,
    MatTreeModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatRippleModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
    MatSelectModule,
    MatCheckboxModule,
    MatDialogModule,
    MatMenuModule,
    MatProgressBarModule,
    MatSnackBarModule,
    MatSidenavModule
  ],
  exports: [
    FlexLayoutModule,

    MatToolbarModule,
    MatExpansionModule,
    MatCardModule,
    MatTreeModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatRippleModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
    MatSelectModule,
    MatCheckboxModule,
    MatDialogModule,
    MatMenuModule,
    MatProgressBarModule,
    MatSnackBarModule,
    MatSidenavModule
  ]
})
export class MaterialFlexModule { }
