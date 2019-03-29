/*
Every Angular app has at least one module, the root module.
You bootstrap that module to launch the application.

app modul merupakan pendefinisian dari seluruh komponen
service provider, filter dan dependency lainnya
*/

//JavaScript imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpClientModule }    from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

//routing module
import { AppRoutingModule } from './app-routing.module';

//components
import { AppComponent } from './app.component'; //root component
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';

import { InMemoryDataService } from './in-memory-data.service';


/*
App Module => nama class yang bersifat sebagai rootmodule
sebuah class yang ditandai dengan decorator @NgModule
Decorator adalah suatu kode yang digunakan untuk mendefinisikan jenis suatu class pada javascript

decorator mengikat metadata
3 metadata utama: imports, declaration, bootstrap
*/

@NgModule({
  //deklarasi komponen (ALL COMPONENTS)
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    HeroSearchComponent
  ],
  //import module => menampung module apa saja yang akan digunakan
  imports: [
    BrowserModule, //module yang berfungsi untuk menghandle mekanisme pertukaran data pada browser (DOM rendering, sanitization, and location)
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false}
    )
  ],
  //providers menjelaskan daftar services yang digunakan oleh aplikasi
  providers: [
    // no need to place any providers due to the `providedIn` flag...
  ],
  //komponen yang berperan sebagai root saja (seperti index.html) => yang pertama klai diakses oleh user saat membuka aplikasi
  bootstrap: [AppComponent]

  //export tidak digunakan di root component
})
export class AppModule { }
