import * as THREE from "..//js/three.module.js";
export default function E01({X,Y,Z}){//no colocar valor a x,y,z}
 //Vela
  var geometry01 = new THREE.CylinderGeometry(0.8,0.8,5,32,40);
 var material01 = new THREE.MeshLambertMaterial({color:0xffffff, side: THREE.DoubleSide});
 var mesh01 = new THREE.Mesh(geometry01,material01);
mesh01.position.set(0,2.5,0);
 //scene.add(mesh01);
 
//Pabilo
  var geometry02 = new THREE.CylinderGeometry(0.1,0.1,0.5,32,40);
 var material02 = new THREE.MeshLambertMaterial({color:0x8B4513, side: THREE.DoubleSide});
 var mesh02 = new THREE.Mesh(geometry02,material02);
mesh02.position.set(0,5.2,0);
 //scene.add(mesh02);

 //Fuego 
 var geometry03 = new THREE.ConeGeometry(0.1,0.8,32,4);
 var material03 = new THREE.MeshLambertMaterial({color:0xff6600, side: THREE.DoubleSide});
 var mesh03 = new THREE.Mesh(geometry03,material03);
mesh03.position.set(0,6,0);
 //scene.add(mesh03);

 var vela2 = new THREE.Group();
     vela2.add(mesh01,mesh02,mesh03);
     vela2.position.set(X,Y,Z);//No colocae valor a x,y,z
     return vela2;
}