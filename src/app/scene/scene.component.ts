import { NgtVector3, NgtDestroyed, NgtCanvasStore, NgtLoader } from '@angular-three/core';
import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject, Input, OnInit } from '@angular/core';
import { fromEvent, map, startWith, switchMap, take, tap, takeUntil, withLatestFrom } from 'rxjs';
import * as THREE from 'three';

@Component({
  selector: 'app-scene',
  templateUrl: './scene.component.html',
  styleUrls: ['./scene.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [NgtDestroyed]
})
export class SceneComponent implements OnInit {
  @Input() position?: NgtVector3;
  starPositions: NgtVector3[] = Array.from({ length: 200 }).fill(undefined)
    .map(() => [
      THREE.MathUtils.randFloatSpread(100),
      THREE.MathUtils.randFloatSpread(100),
      THREE.MathUtils.randFloatSpread(100),
    ]);
  jensen?: THREE.Mesh;
  camera?: THREE.Mesh;
  onAnimate(mesh: THREE.Object3D) {
    mesh.rotation.x = mesh.rotation.y += 0.01;
  }
  constructor(
    @Inject(DOCUMENT) private readonly doc: Document,
    private readonly loaderService: NgtLoader,
    private readonly canvasStore: NgtCanvasStore,
    private readonly destroyService: NgtDestroyed
  ) { }
  avatarTexture$ = this.loaderService.use(THREE.TextureLoader, "/assets/js.jpg")
  ngOnInit(): void {
    this.canvasStore.scene$.pipe(
      take(1),
      switchMap((scene) => this.loaderService.use(THREE.TextureLoader, "https://raw.githubusercontent.com/fireship-io/threejs-scroll-animation-demo/main/space.jpg")
        .pipe(
          take(1),
          tap(space => {
            if (scene) {
              scene.background = space;

            }
          })
        ))
    ).subscribe();
    fromEvent(this.doc, 'scroll').pipe(
      map(() =>
        this.doc.body.getBoundingClientRect().top),
      startWith(0),
      takeUntil(this.destroyService),
      withLatestFrom(this.canvasStore.camera$),
    ).subscribe(([top, camera]) => {
      if(this.jensen){
        this.jensen.rotation.y += 0.01;
      this.jensen.rotation.z += 0.05;
      }

      if(camera){
        camera.position.z = top * -0.01
        camera.position.x = top * -0.0002;
        camera.position.y = top * -0.0002;
      }
    })
  }



  onTorusAnimateReady(torus: THREE.Object3D) {
    torus.rotation.x += 0.01
    torus.rotation.y += 0.01
    torus.rotation.z += 0.01

  }

}

