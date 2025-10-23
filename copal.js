
import * as THREE from "..//js/three.module.js";
export default function E01({X,Y,Z}){//no colocar valor a x,y,z}
// COPAL 

// Material negro grisáceo
var materialCopal = new THREE.MeshBasicMaterial ({
    color:0x1E1E1E, side: THREE.DoubleSide
});

// 🔹 Base 
var baseCopal = new THREE.CylinderGeometry(1.5, 2, 5, 32); 
var mesh01 = new THREE.Mesh(baseCopal, materialCopal);
//scene.add(mesh01);
mesh01.position.set(0, 0, 0);

// Cuerpo 
var cuerpoCopal = new THREE.SphereGeometry(3, 32, 32, 0, 6.283, 0, 1.571);
var mesh02 = new THREE.Mesh(cuerpoCopal, materialCopal);
//scene.add(mesh02);
mesh02.position.set(0, 2.3, 0);

// Parte superior 
var parte1 = new THREE.SphereGeometry(2.5, 32, 32);
var mesh03 = new THREE.Mesh(parte1, materialCopal);
mesh03.scale.set(1.6, 0.6, 1.6);
//scene.add(mesh03);
mesh03.position.set(0, 3.8, 0);

var parte2 = new THREE.SphereGeometry(2, 32, 32);
var mesh04 = new THREE.Mesh(parte2, materialCopal);
mesh04.scale.set(1.4, 0.5, 1.4);
//scene.add(mesh04);
mesh04.position.set(0, 4.3, 0);

var parte3 = new THREE.SphereGeometry(1.6, 32, 32);
var mesh05 = new THREE.Mesh(parte3, materialCopal);
mesh05.scale.set(1.2, 0.5, 1.2);
//scene.add(mesh05);
mesh05.position.set(0, 4.7, 0);

// Humo 
var materialHumo = new THREE.MeshBasicMaterial({ color: 0xFFFFFF, side: THREE.DoubleSide });

// Humo 1
var curva1 = new THREE.TorusGeometry(0.8, 0.2, 16, 100, 3.2);
var mesh06 = new THREE.Mesh(curva1, materialHumo);
mesh06.rotation.set(1.571, 0, 0.785); 
mesh06.position.set(0.7, 6, 0);
//scene.add(mesh06);

// Humo 2
var curva2 = new THREE.TorusGeometry(0.8, 0.2, 16, 100, 3.2);
var mesh07 = new THREE.Mesh(curva2, materialHumo);
mesh07.rotation.set(1.571, 0, -0.785); 
mesh07.position.set(-0.7, 6.5, 0);
//scene.add(mesh07);

var copal = new THREE.Group();
     copal.add(mesh01,mesh02,mesh03,mesh04,mesh05,mesh06,mesh07 );
     copal.position.set(X,Y,Z);//No colocae valor a x,y,z
     return copal;
}