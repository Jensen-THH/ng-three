import { NgtCoreModule } from '@angular-three/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgtMeshModule } from '@angular-three/core/meshes';
import { NgtMeshBasicMaterialModule } from '@angular-three/core/materials';
import { NgtBoxGeometryModule } from '@angular-three/core/geometries';
import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
import { AppComponent } from './app.component';
import { CubeComponent } from './cube/cube.component';
// import { NgtCoreModule } from '@angular-three/core/lib/canvas';

@NgModule({
  declarations: [
    AppComponent,CubeComponent
  ],
  imports: [
    NgtCoreModule,
    BrowserModule,
    NgtMeshModule,
    AppRoutingModule,
    NgtMeshBasicMaterialModule,
    NgtBoxGeometryModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
