import { NgtCoreModule } from '@angular-three/core';
import { NgtAmbientLightModule, NgtPointLightModule } from '@angular-three/core/lights';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgtMeshModule } from '@angular-three/core/meshes';
import { NgtMeshBasicMaterialModule, NgtMeshStandardMaterialModule } from '@angular-three/core/materials';
import { NgtBoxGeometryModule, NgtCircleGeometryModule, NgtRingGeometryModule,NgtSphereGeometryModule,NgtTorusGeometryModule } from '@angular-three/core/geometries';
import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
import { AppComponent } from './app.component';
import { CubeComponent } from './cube/cube.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { SceneComponent } from './scene/scene.component';
// import { NgtCoreModule } from '@angular-three/core/lib/canvas';

@NgModule({
  declarations: [
    AppComponent,CubeComponent, PortfolioComponent, SceneComponent
  ],
  imports: [
    NgtCoreModule,
    BrowserModule,
    NgtMeshModule,
    AppRoutingModule,
    NgtMeshBasicMaterialModule,
    NgtBoxGeometryModule,
    NgtTorusGeometryModule,
    NgtSphereGeometryModule,
    NgtMeshStandardMaterialModule,
    NgtPointLightModule,
    NgtAmbientLightModule,
    NgtRingGeometryModule,
    NgtCircleGeometryModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
