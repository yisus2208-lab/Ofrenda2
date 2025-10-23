import * as THREE from "..//js/three.module.js";
export default function E01({X,Y,Z}){//no colocar valor a x,y,z}
//bolita de la taza
var geometry01 = new THREE.CapsuleGeometry(3,0.1,26,56);
var material01 = new THREE.MeshLambertMaterial({color:0x704214,side: THREE.DoubleSide});
var mesh01 = new THREE.Mesh(geometry01,material01);
mesh01.position.set(0,3,0);
//scene.add(mesh01);
//boquilla de la taza
var geometry02 = new THREE.CylinderGeometry( 2.5, 2, 3, 32 );
var material02 = new THREE.MeshLambertMaterial({color:0x704214,side: THREE.DoubleSide});
var mesh02 = new THREE.Mesh(geometry02,material02);
mesh02.position.set(0,5,0);
//scene.add(mesh02);
//oreja de la taza
var geometry03 = new THREE.TorusGeometry( 2, 0.4, 16, 100 ); 
var material03 = new THREE.MeshLambertMaterial({color:0x704214,side: THREE.DoubleSide});
var mesh03 = new THREE.Mesh(geometry03,material03);
mesh03.position.set(-2.5,3.6,0);
//scene.add(mesh03);

//simulacion de cafe
var geometry04 = new THREE.CircleGeometry( 2, 32 );
var material04 = new THREE.MeshLambertMaterial({color:0x000000,side: THREE.DoubleSide});
var mesh04 = new THREE.Mesh(geometry04,material04);
mesh04.position.set(0,6.52,0);
mesh04.rotation.set(1.57,0,0);
//scene.add(mesh04);

 var taza = new THREE.Group();
     taza.add(mesh01,mesh02,mesh03,mesh04);
     taza.position.set(X,Y,Z);//No colocae valor a x,y,z
     return taza;
}
