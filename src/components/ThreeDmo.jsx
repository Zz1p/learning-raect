import React, {Component} from 'react';
import * as THREE from "three";

class ThreeDmo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dom: 0
    }
  }
  componentDidMount() {
    this.init()
  }

  init() {
    // 创建场景
    const scene = new THREE.Scene();
    // 创建透视相机（一般都是用透视相机）
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(document.clientWidth , window.innerHeight);
    document.getElementById('container').appendChild(renderer.domElement)
  }

  render() {
    return (
        <div id="container">
        </div>
    );
  }
}

export default ThreeDmo;
