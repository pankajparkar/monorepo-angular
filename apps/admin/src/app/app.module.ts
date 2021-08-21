import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

import { AppComponent } from './app.component';
// import { RouterModule, Routes } from '@angular/router';

// const routes: Routes = [
//   {path: 'product/list', component: ProductListComponent,},
//   {path: 'product/details/1', component: ProductComponent},
//   {path: '', redirectTo: 'product/list', pathMatch: 'full' },
// ];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    MatListModule, MatDividerModule, MatIconModule, MatCardModule,
    // RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
