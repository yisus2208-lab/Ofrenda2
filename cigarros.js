import * as THREE from "..//js/three.module.js";
export default function E01({X,Y,Z}){//no colocar valor a x,y,z}
    
//cigarros
    var geometry02 = new THREE.BoxGeometry (20, 30, 10, 50, 8, 6.28);
    var texture = new THREE.TextureLoader().load("./image/cigarros.jpeg");
    var material02 = new THREE.MeshBasicMaterial({map: texture });
    var mesh02 = new THREE.Mesh(geometry02,material02);
    //scene.add(mesh02);
    mesh02.position.set(1,32.5,-7);
    texture.wrapS=THREE.RepeatWrapping;
    texture.wrapT=THREE.RepeatWrapping;

    var cigarros = new THREE.Group();
        cigarros.add(mesh02);
        cigarros.position.set(X,Y,Z);//No colocae valor a x,y,z
        return cigarros;
}