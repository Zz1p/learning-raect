import React, {Component} from 'react';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
import * as THREE from "three";
import line from './line'

class ThreeDmo extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.init()
    this.animate();
  }

  init() {
    // 创建场景
    this.scene = new THREE.Scene();
    // 创建透视相机（一般都是用透视相机）
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
    // 创建渲染器
    this.renderer = new THREE.WebGLRenderer();
    // 设置渲染器的宽高，第三个参数填false可以以一半的分辨率来进行渲染
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('container').appendChild(this.renderer.domElement)

    /**
     * @type {BoxGeometry}
     */
    // 创建立方体对象 宽，高，长
    const geometry = new THREE.BoxGeometry(100, 100, 100);
    // 创建一个球体几何对象
    const ball = new THREE.SphereGeometry(60, 40, 40);
    // 选择材质，颜色
    const material = new THREE.MeshPhongMaterial({color: '#f40'});
    // 创建一个网格对象
    this.cube = new THREE.Mesh(geometry, material);
    this.cube2 = new THREE.Mesh(ball, material);
    this.cube2.position.set(120, 0, 0)
    this.scene.add(this.cube);
    this.scene.add(this.cube2);
    this.scene.add(line);
    // 设置点光源 可以让物体有立体感
    const point = new THREE.PointLight(0xffffff);
    // 设置点光源位置
    point.position.set(400, 200, 300);
    // 点光源添加到场景中
    this.scene.add(point);

    // 设置环境光 设置整个空间的明暗效果
    const ambient = new THREE.AmbientLight(0x444444);
    this.scene.add(ambient);

    this.camera.position.set(200, 300, 200);
    this.camera.lookAt(this.scene.position);
    // 创建控件对象,可以用鼠标控制角度，大小
    const controls = new OrbitControls(this.camera, this.renderer.domElement);
  }

  animate = () => {
    requestAnimationFrame(this.animate);
    this.cube.rotation.x += 0.01;
    this.cube.rotation.y += 0.01;
    this.renderScene()
  }

  renderScene = () => {
    this.renderer.render(this.scene, this.camera);
  }

  render() {
    return (
        <div id="container">
        </div>
    );
  }
}

export default ThreeDmo;
