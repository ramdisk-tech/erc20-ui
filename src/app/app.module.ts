import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { AssetDialogComponent } from './asset-dialog/asset-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { TransferFromComponent } from './transfer-from/transfer-from.component';
import { TransferDialogComponent } from './transfer-dialog/transfer-dialog.component';
import { BurnDialogComponent } from './burn-dialog/burn-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    AssetDialogComponent,
    TransferFromComponent,
    TransferDialogComponent,
    BurnDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, HttpClientModule, BrowserAnimationsModule, MatTableModule,MatInputModule,MatButtonModule,MatPaginatorModule,
    MatDialogModule,FormsModule, ReactiveFormsModule,MatSnackBarModule,MatIconModule,MatToolbarModule,MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
