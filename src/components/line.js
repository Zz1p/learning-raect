import * as THREE from "three";


var points = [];
points.push( new THREE.Vector3( - 10, 0, 0 ) );
points.push( new THREE.Vector3( 0, 10, 0 ) );
points.push( new THREE.Vector3( 10, 0, 0 ) );

var material = new THREE.LineBasicMaterial( { color: 0x0000ff } );
var geometry = new THREE.BufferGeometry().setFromPoints( points );

var line = new THREE.Line( geometry, material );

export default line;
