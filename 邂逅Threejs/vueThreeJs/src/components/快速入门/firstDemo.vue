<template>
  <div class="first"></div>
</template>

<script setup>
import * as THREE from "three";
import { onMounted } from "vue";

//创建一个三维场景
const scene = new THREE.Scene();

//创建一个几何体:参数为x,y,z的坐标
const geometry = new THREE.BoxGeometry(50, 50, 50);

//然后给物体添加材质
const material = new THREE.MeshBasicMaterial({
  color: "orange",
});

const cube = new THREE.Mesh(geometry, material);

//将组合好的模型添加到场景中
scene.add(cube);

const height = 500;
const width = 800;
//如果想观察到模型,需要一个摄像机
const camera = new THREE.PerspectiveCamera(30, width / height, 100, 3000);

//设置摄的机的位置
camera.position.set(292, 223, 185);
//调整摄像机要拍摄的角度
camera.lookAt(0, 0, 0);

//然后创建一个画布,将模型和摄像机放置在里面
const renderer = new THREE.WebGLRenderer();
renderer.setSize(width, height);
renderer.render(scene, camera);

//最后插入网页
onMounted(() => {
  document.querySelector(".first").appendChild(renderer.domElement);
});
</script>

<style lang="scss" scoped></style>
