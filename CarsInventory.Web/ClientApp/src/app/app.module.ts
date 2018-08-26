import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CreateComponent } from './create/create.component';
import { IndexComponent } from './index/index.component';
import { DetailComponent } from './detail/detail.component';
import { EditComponent } from './edit/edit.component';
import { CarService } from './car.service';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeleteComponent } from './delete/delete.component';
import { DeleteService } from './delete/delete.service';
import { DetailService } from './detail/detail.service';
import { CreateService } from './create/create.service';
import { EditService } from './edit/edit.service';

const routes: Routes = [{ path: 'index', component: IndexComponent },
{ path: 'detail', component: DetailComponent },
{ path: 'delete', component: DetailComponent },
{ path: 'edit', component: EditComponent },
{ path: 'create', component: CreateComponent }];

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    IndexComponent,
    DetailComponent,
    EditComponent,
    DeleteComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    NgbModule.forRoot()
  ],
  providers: [CarService, DeleteService, DetailService, CreateService, EditService],
  bootstrap: [AppComponent],
  entryComponents: [DeleteComponent]
})

export class AppModule { }
