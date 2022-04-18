import { NgtVector3 } from '@angular-three/core';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-scene',
  templateUrl: './scene.component.html',
  styleUrls: ['./scene.component.scss']
})
export class SceneComponent implements OnInit {
  @Input() position?: NgtVector3;
  constructor() { }

  ngOnInit(): void {
  }
  onAnimate(mesh: THREE.Object3D) {
    mesh.rotation.x = mesh.rotation.y += 0.01;
}

}
