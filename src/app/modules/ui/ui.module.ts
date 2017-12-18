import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatInputModule, MatListModule, MatToolbarModule, MatCardModule, MatIconModule, MatProgressSpinnerModule, MatSelectModule, MatOptionModule, MatTabsModule, MatFormFieldModule, MatTableModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule, 
    MatButtonModule, 
    MatInputModule, 
    MatListModule, 
    MatToolbarModule, 
    MatCardModule, 
    MatIconModule, 
    MatProgressSpinnerModule,
    MatTabsModule,
    MatFormFieldModule,
    MatTableModule
  ],
  exports: [
    MatButtonModule, 
    MatInputModule, 
    MatListModule, 
    MatToolbarModule, 
    MatCardModule, 
    MatIconModule, 
    MatProgressSpinnerModule, 
    MatSelectModule, 
    MatOptionModule,
    MatTabsModule,
    MatFormFieldModule,
    MatTableModule
  ],
  declarations: []
})
export class UiModule { }
