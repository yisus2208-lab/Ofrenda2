import * as THREE from "..//js/three.module.js";
export default function E01({X,Y,Z}){//no colocar valor a x,y,z}
//base
var panBase = new THREE.SphereGeometry(2, 32, 32, 0, 6.283, 0, 1.571); 
var material01 = new THREE.MeshLambertMaterial ({
    color:0xa18262, side: THREE.DoubleSide
}); 
var mesh01 = new THREE.Mesh(panBase,material01);
//scene.add(mesh01);
mesh01.position.set(0,0,0);

// huesito central 
var pan = new THREE.SphereGeometry(0.7,16,16);
var material02 = new THREE.MeshLambertMaterial ({
    color:0x7A4F38, side: THREE.DoubleSide
}); 
var mesh02 = new THREE.Mesh(pan,material02);
//scene.add(mesh02);
mesh02.position.set(0,1.5,0);

// huesito1
var huesito = new THREE.SphereGeometry(0.5,16,16);
var mesh03 = new THREE.Mesh(huesito,material02);
//scene.add(mesh03);
mesh03.position.set(1.8,0.5,0);

// huesito2
var mesh04 = new THREE.Mesh(huesito,material02);
//scene.add(mesh04);
mesh04.position.set(-1.8,0.5,0);

// huesito3
var mesh05 = new THREE.Mesh(huesito,material02);
//scene.add(mesh05);
mesh05.position.set(0,0.5,1.8);

// huesito4
var mesh06 = new THREE.Mesh(huesito,material02);
//scene.add(mesh06);
mesh06.position.set(0,0.5,-1.8);

var pan2 = new THREE.Group();
     pan2.add(mesh01,mesh02,mesh03,mesh04,mesh05,mesh06);
     pan2.position.set(X,Y,Z);//No colocae valor a x,y,z
     return pan2;
}