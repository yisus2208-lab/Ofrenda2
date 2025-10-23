import * as THREE from "..//js/three.module.js";
export default function E01({X,Y,Z}){//no colocar valor a x,y,z}
    
//cuerpo 
    var geometry02 = new THREE.BoxGeometry (45, 50, 2, 50, 8, 6.28);
    var texture = new THREE.TextureLoader().load("./image/madera2.jpeg");
    var material02 = new THREE.MeshBasicMaterial({map: texture });
    var mesh02 = new THREE.Mesh(geometry02,material02);
    //scene.add(mesh02);
    mesh02.position.set(1,32.5,-7);
    texture.wrapS=THREE.RepeatWrapping;
    texture.wrapT=THREE.RepeatWrapping;

 
    //foto 
    var geometry06 = new THREE.BoxGeometry (30,35,2.1, 50, 8, 6.28, );
    var texture02 = new THREE.TextureLoader().load("./image/chabelo.jpeg");
    var material05 = new THREE.MeshBasicMaterial({map: texture02 });
    var mesh06 = new THREE.Mesh(geometry06,material05);
    //scene.add(mesh06);
    mesh06.position.set(1,32,-6.9);
    texture.wrapS=THREE.RepeatWrapping;
    texture.wrapT=THREE.RepeatWrapping;

    var cuadro = new THREE.Group();
            cuadro.add(mesh02,mesh06);
            cuadro.position.set(X,Y,Z);//No colocae valor a x,y,z
            return cuadro;
    
}