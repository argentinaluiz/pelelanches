import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatIconModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';


import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';


  

@NgModule({
    imports: [MatButtonModule, MatToolbarModule, FlexLayoutModule, MatSidenavModule, MatIconModule, MatMenuModule, MatCardModule, MatListModule,MatFormFieldModule,MatInputModule,MatSelectModule, MatTableModule, MatCheckboxModule],
    
    exports: [MatButtonModule, MatToolbarModule,  FlexLayoutModule, MatSidenavModule, MatIconModule, MatMenuModule, MatCardModule, MatListModule,MatFormFieldModule,MatInputModule,MatSelectModule, MatTableModule, MatCheckboxModule ]
})

export class MaterialModule { } 