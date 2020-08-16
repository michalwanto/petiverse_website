var scene, camera, renderer, car;

init();

function init() {
  const assetPath = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/2666677/";

  scene = new THREE.Scene();
  scene.background = new THREE.Color("white");

  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.set(0, 1, 3);

  const ambient = new THREE.HemisphereLight(0xffffbb, 0x080820, 0.5);
  scene.add(ambient);

  const light = new THREE.DirectionalLight(0xffffff, 0.7);
  light.castShadow = true;
  light.shadow.mapSize.width = 1024;
  light.shadow.mapSize.height = 1024;
  light.shadow.near = 1;
  light.shadow.far = 100;
  const shadowSize = 5;
  light.shadow.left = -shadowSize;
  light.shadow.right = shadowSize;
  light.shadow.top = shadowSize;
  light.shadow.bottom = -shadowSize;
  light.position.set(-1, 10, 6);
  scene.add(light);

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(900, 500);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFShadowMap;
  document.body.appendChild(renderer.domElement);

  const controls = new THREE.OrbitControls(camera, renderer.domElement);
  controls.target.set(0, 0, 0);
  controls.update();

  //Load meshes here
  const loader = new THREE.GLTFLoader();
  loader.load("testsofa.glb", function (object) {
    object.scene.traverse(function (child) {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
    scene.add(object.scene);
    car = new THREE.Object3D();
    scene.add(car);
    car.add(object.scene);
  });

  window.addEventListener("resize", resize, false);

  update();
}

function update() {
  requestAnimationFrame(update);
  renderer.render(scene, camera);
}

function resize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}
