/* ============================================================
   360 International — Three.js interactive product showcase
   ------------------------------------------------------------
   - Two scenes: hero (decorative) + showcase (tab-switchable)
   - Procedurally-built products (no external GLB assets)
   - Neon rim lighting keyed to the brand gradient
   - OrbitControls with damping + auto-rotate
   ============================================================ */

import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

/* ---------- Product metadata (drives side panel) ---------- */
const PRODUCT_META = {
  vacuum:  { category: "Smart home · Robotics",  region: "AU · NZ · APAC",   channel: "Tier-1 retail + e-commerce" },
  drone:   { category: "Aerial · Creator tools", region: "AU · NZ",          channel: "Specialty + e-commerce" },
  scooter: { category: "Micro-mobility",         region: "AU · NZ · SG",     channel: "Mobility retail + online" },
  printer: { category: "Maker · Prosumer",       region: "AU · NZ",          channel: "Specialty + direct" },
  gimbal:  { category: "Creator accessories",    region: "APAC-wide",        channel: "Tech retail + e-commerce" },
  mower:   { category: "Outdoor · Robotics",     region: "AU · NZ",          channel: "Home improvement retail" },
};

/* ---------- Shared materials (brightened for visibility) ---------- */
const mat = {
  // Product body materials — intentionally light for readability
  bodyWhite:   new THREE.MeshStandardMaterial({ color: 0xf3f4f8, metalness: 0.25, roughness: 0.4 }),
  bodyCream:   new THREE.MeshStandardMaterial({ color: 0xeadfd0, metalness: 0.2,  roughness: 0.55 }),
  bodyGray:    new THREE.MeshStandardMaterial({ color: 0xa8adb8, metalness: 0.45, roughness: 0.4 }),
  bodyDark:    new THREE.MeshStandardMaterial({ color: 0x454a57, metalness: 0.6,  roughness: 0.35 }),
  // Accents / trims
  midGray:     new THREE.MeshStandardMaterial({ color: 0x7a8190, metalness: 0.6,  roughness: 0.35 }),
  chrome:      new THREE.MeshStandardMaterial({ color: 0xe2e5ec, metalness: 1.0,  roughness: 0.12 }),
  black:       new THREE.MeshStandardMaterial({ color: 0x2a2d38, metalness: 0.55, roughness: 0.35 }),
  rubber:      new THREE.MeshStandardMaterial({ color: 0x1a1c22, metalness: 0.0,  roughness: 0.9 }),
  // Emissive neons
  accent:      new THREE.MeshStandardMaterial({ color: 0x00e0ff, emissive: 0x00e0ff, emissiveIntensity: 0.9, metalness: 0.3, roughness: 0.2 }),
  violet:      new THREE.MeshStandardMaterial({ color: 0x9c82ff, emissive: 0x7c5cff, emissiveIntensity: 0.8, metalness: 0.3, roughness: 0.25 }),
  pink:        new THREE.MeshStandardMaterial({ color: 0xff7ad4, emissive: 0xff4ec7, emissiveIntensity: 0.8, metalness: 0.3, roughness: 0.25 }),
  // Brand / material-specific
  glass:       new THREE.MeshPhysicalMaterial({ color: 0xbfd2ea, metalness: 0.1, roughness: 0.1, transmission: 0.75, thickness: 0.4, ior: 1.35, opacity: 0.55, transparent: true }),
  bambuOrange: new THREE.MeshStandardMaterial({ color: 0xff7a28, metalness: 0.2, roughness: 0.5 }),
  navimowGreen:new THREE.MeshStandardMaterial({ color: 0x8fe59b, metalness: 0.25, roughness: 0.5 }),
};

/* ---------- Model factories ---------- */
function makeRoborock() {
  const g = new THREE.Group();
  // Main disc body — white like a real Roborock
  const body = new THREE.Mesh(new THREE.CylinderGeometry(1.05, 1.05, 0.22, 64), mat.bodyWhite);
  body.position.y = 0.11; g.add(body);
  // Bumper ring around bottom
  const ring = new THREE.Mesh(new THREE.CylinderGeometry(1.06, 1.06, 0.04, 64), mat.bodyDark);
  ring.position.y = 0.02; g.add(ring);
  // LIDAR puck on top
  const lidar = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.3, 0.14, 48), mat.bodyDark);
  lidar.position.y = 0.29; g.add(lidar);
  const lidarCap = new THREE.Mesh(new THREE.CylinderGeometry(0.23, 0.28, 0.04, 48), mat.chrome);
  lidarCap.position.y = 0.38; g.add(lidarCap);
  // Accent glow ring
  const glow = new THREE.Mesh(new THREE.TorusGeometry(1.02, 0.015, 16, 96), mat.accent);
  glow.rotation.x = Math.PI / 2; glow.position.y = 0.2; g.add(glow);
  // Front camera / sensor strip
  const sensor = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.08, 0.04), mat.bodyDark);
  sensor.position.set(0, 0.16, 1.02); g.add(sensor);
  const lens = new THREE.Mesh(new THREE.SphereGeometry(0.05, 24, 24), mat.accent);
  lens.position.set(0, 0.16, 1.05); g.add(lens);
  // Two top buttons
  const btnGeo = new THREE.CylinderGeometry(0.06, 0.06, 0.02, 24);
  const b1 = new THREE.Mesh(btnGeo, mat.midGray); b1.position.set(-0.1, 0.225, -0.35); g.add(b1);
  const b2 = new THREE.Mesh(btnGeo, mat.midGray); b2.position.set(0.1, 0.225, -0.35); g.add(b2);
  // Bottom shadow plate (subtle)
  const shadow = new THREE.Mesh(new THREE.CircleGeometry(1.25, 48), new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.25 }));
  shadow.rotation.x = -Math.PI / 2; shadow.position.y = -0.01; g.add(shadow);
  return g;
}

function makePotensicDrone() {
  const g = new THREE.Group();
  // Central body — light gray/white like a consumer drone
  const body = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.22, 0.9), mat.bodyWhite);
  body.position.y = 0.15; g.add(body);
  // Top camera hump
  const hump = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.12, 0.5), mat.bodyGray);
  hump.position.set(0, 0.3, 0); g.add(hump);
  // Gimbal camera underneath
  const gimbal = new THREE.Mesh(new THREE.SphereGeometry(0.12, 24, 24), mat.bodyDark);
  gimbal.position.set(0, 0, 0.38); g.add(gimbal);
  const lens = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.08, 0.04, 24), mat.accent);
  lens.rotation.x = Math.PI / 2; lens.position.set(0, -0.02, 0.48); g.add(lens);
  // Four arms + motors + props
  const armLen = 0.85;
  const propGeo = new THREE.BoxGeometry(0.9, 0.02, 0.06);
  const armGeo = new THREE.CylinderGeometry(0.05, 0.05, armLen, 16);
  const motorGeo = new THREE.CylinderGeometry(0.09, 0.09, 0.1, 24);
  const positions = [[1,1],[1,-1],[-1,1],[-1,-1]];
  const propellers = [];
  positions.forEach(([x, z]) => {
    const arm = new THREE.Mesh(armGeo, mat.bodyGray);
    arm.position.set(x * armLen/2 * 0.7, 0.15, z * armLen/2 * 0.7);
    arm.rotation.z = Math.PI / 2;
    arm.rotation.y = x * z > 0 ? Math.PI / 4 : -Math.PI / 4;
    g.add(arm);
    const ex = x * armLen * 0.6, ez = z * armLen * 0.6;
    const motor = new THREE.Mesh(motorGeo, mat.bodyDark);
    motor.position.set(ex, 0.2, ez); g.add(motor);
    const prop = new THREE.Mesh(propGeo, mat.chrome);
    prop.position.set(ex, 0.27, ez);
    g.add(prop);
    propellers.push(prop);
  });
  // Landing skids
  const skidGeo = new THREE.CylinderGeometry(0.025, 0.025, 0.18, 12);
  [[-0.3, 0.3], [0.3, 0.3], [-0.3, -0.3], [0.3, -0.3]].forEach(([x, z]) => {
    const skid = new THREE.Mesh(skidGeo, mat.bodyDark);
    skid.position.set(x, -0.02, z); g.add(skid);
  });
  // LED tips
  const ledGeo = new THREE.SphereGeometry(0.03, 12, 12);
  const leds = [mat.accent, mat.accent, mat.pink, mat.pink];
  positions.forEach(([x, z], i) => {
    const led = new THREE.Mesh(ledGeo, leds[i]);
    led.position.set(x * armLen * 0.6, 0.15, z * armLen * 0.6);
    g.add(led);
  });
  g.userData.propellers = propellers;
  return g;
}

function makeScooter() {
  const g = new THREE.Group();
  // Deck — chrome/silver base
  const deck = new THREE.Mesh(new THREE.BoxGeometry(0.45, 0.08, 1.6), mat.bodyGray);
  deck.position.y = 0.22; g.add(deck);
  // Deck grip texture plate (rubber non-slip)
  const grip = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.02, 1.55), mat.rubber);
  grip.position.y = 0.27; g.add(grip);
  // Rear wheel
  const wheelGeo = new THREE.CylinderGeometry(0.28, 0.28, 0.18, 32);
  const rearWheel = new THREE.Mesh(wheelGeo, mat.rubber);
  rearWheel.rotation.z = Math.PI / 2;
  rearWheel.position.set(0, 0.28, -0.75); g.add(rearWheel);
  const rearHub = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 0.2, 24), mat.chrome);
  rearHub.rotation.z = Math.PI / 2;
  rearHub.position.copy(rearWheel.position); g.add(rearHub);
  // Front wheel
  const frontWheel = new THREE.Mesh(wheelGeo, mat.rubber);
  frontWheel.rotation.z = Math.PI / 2;
  frontWheel.position.set(0, 0.28, 0.75); g.add(frontWheel);
  const frontHub = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 0.2, 24), mat.chrome);
  frontHub.rotation.z = Math.PI / 2;
  frontHub.position.copy(frontWheel.position); g.add(frontHub);
  // Accent disc on front wheel
  const disc = new THREE.Mesh(new THREE.TorusGeometry(0.18, 0.008, 12, 48), mat.accent);
  disc.rotation.y = Math.PI / 2; disc.position.copy(frontWheel.position); g.add(disc);
  // Stem (vertical pole)
  const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.055, 1.3, 20), mat.chrome);
  stem.position.set(0, 0.9, 0.75);
  stem.rotation.x = -0.12; g.add(stem);
  // Handlebar (horizontal)
  const barGeo = new THREE.CylinderGeometry(0.04, 0.04, 0.6, 20);
  const bar = new THREE.Mesh(barGeo, mat.chrome);
  bar.rotation.z = Math.PI / 2;
  bar.position.set(0, 1.5, 0.67); g.add(bar);
  // Grips
  const gripGeo = new THREE.CylinderGeometry(0.06, 0.06, 0.14, 16);
  [-0.28, 0.28].forEach((x) => {
    const gr = new THREE.Mesh(gripGeo, mat.rubber);
    gr.rotation.z = Math.PI / 2;
    gr.position.set(x, 1.5, 0.67); g.add(gr);
  });
  // Display/LED on stem
  const display = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.1, 0.04), mat.accent);
  display.position.set(0, 1.4, 0.72); g.add(display);
  return g;
}

function makeBambuLab() {
  const g = new THREE.Group();
  const h = 1.3, w = 1.2, d = 1.2;
  // Frame uprights — iconic Bambu orange
  const postGeo = new THREE.BoxGeometry(0.08, h, 0.08);
  [[-w/2, -d/2], [w/2, -d/2], [-w/2, d/2], [w/2, d/2]].forEach(([x, z]) => {
    const p = new THREE.Mesh(postGeo, mat.bambuOrange);
    p.position.set(x, h/2, z); g.add(p);
  });
  // Top + bottom rails
  const railHGeo = new THREE.BoxGeometry(w, 0.08, 0.08);
  const railDGeo = new THREE.BoxGeometry(0.08, 0.08, d);
  [0, h].forEach((y) => {
    [-d/2, d/2].forEach((z) => {
      const r = new THREE.Mesh(railHGeo, mat.bambuOrange);
      r.position.set(0, y, z); g.add(r);
    });
    [-w/2, w/2].forEach((x) => {
      const r = new THREE.Mesh(railDGeo, mat.bambuOrange);
      r.position.set(x, y, 0); g.add(r);
    });
  });
  // Enclosure panels (glassy sides)
  const sideGeo = new THREE.PlaneGeometry(w - 0.08, h - 0.08);
  const back = new THREE.Mesh(new THREE.PlaneGeometry(w - 0.08, h - 0.08), mat.glass);
  back.position.set(0, h/2, -d/2 + 0.001); g.add(back);
  const left = new THREE.Mesh(sideGeo, mat.glass);
  left.rotation.y = Math.PI / 2;
  left.position.set(-w/2 + 0.001, h/2, 0); g.add(left);
  const right = new THREE.Mesh(sideGeo, mat.glass);
  right.rotation.y = -Math.PI / 2;
  right.position.set(w/2 - 0.001, h/2, 0); g.add(right);
  // Print bed
  const bed = new THREE.Mesh(new THREE.BoxGeometry(w - 0.25, 0.04, d - 0.25), mat.chrome);
  bed.position.set(0, 0.3, 0); g.add(bed);
  // X gantry
  const gantry = new THREE.Mesh(new THREE.BoxGeometry(w - 0.12, 0.06, 0.1), mat.bodyGray);
  gantry.position.set(0, 1.02, 0); g.add(gantry);
  // Print head
  const head = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.16, 0.18), mat.accent);
  head.position.set(0.1, 0.98, 0); g.add(head);
  const nozzle = new THREE.Mesh(new THREE.ConeGeometry(0.03, 0.08, 16), mat.chrome);
  nozzle.position.set(0.1, 0.86, 0); g.add(nozzle);
  // Printed object
  const obj = new THREE.Mesh(new THREE.DodecahedronGeometry(0.14), mat.violet);
  obj.position.set(0, 0.42, 0); g.add(obj);
  // Screen
  const screen = new THREE.Mesh(new THREE.BoxGeometry(0.26, 0.16, 0.02), mat.accent);
  screen.position.set(w/2 - 0.12, h - 0.25, d/2 + 0.04); g.add(screen);
  return g;
}

function makeGimbal() {
  const g = new THREE.Group();
  // Handle — matte gray
  const handle = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.11, 0.85, 28), mat.bodyGray);
  handle.position.y = 0.425; g.add(handle);
  // Handle grip rings (accent)
  for (let i = 0; i < 3; i++) {
    const ring = new THREE.Mesh(new THREE.TorusGeometry(0.11, 0.006, 8, 32), mat.accent);
    ring.rotation.x = Math.PI / 2;
    ring.position.y = 0.25 + i * 0.1; g.add(ring);
  }
  // Base pivot
  const pivot = new THREE.Mesh(new THREE.SphereGeometry(0.13, 24, 24), mat.chrome);
  pivot.position.y = 0.92; g.add(pivot);
  // Vertical axis arm
  const axis1 = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.45, 0.12), mat.bodyWhite);
  axis1.position.set(0, 1.18, 0); g.add(axis1);
  // Horizontal cross arm
  const axis2 = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.1, 0.1), mat.bodyWhite);
  axis2.position.set(0.15, 1.38, 0); g.add(axis2);
  // Phone mount bracket
  const mount = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.3, 0.45), mat.bodyDark);
  mount.position.set(0.45, 1.38, 0); g.add(mount);
  // Phone
  const phone = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.55, 0.3), mat.bodyDark);
  phone.position.set(0.48, 1.38, 0); g.add(phone);
  // Phone screen (glow)
  const screen = new THREE.Mesh(new THREE.BoxGeometry(0.012, 0.48, 0.24), mat.accent);
  screen.position.set(0.495, 1.38, 0); g.add(screen);
  // Joystick on handle
  const joy = new THREE.Mesh(new THREE.SphereGeometry(0.035, 16, 16), mat.violet);
  joy.position.set(0, 0.72, 0.115); g.add(joy);
  return g;
}

function makeNavimow() {
  const g = new THREE.Group();
  // Main body (beveled box)
  const body = new THREE.Mesh(new THREE.BoxGeometry(1.5, 0.35, 1.0), mat.navimowGreen);
  body.position.y = 0.3; g.add(body);
  // Front rounded hood
  const hood = new THREE.Mesh(new THREE.CylinderGeometry(0.45, 0.45, 1.0, 32, 1, false, 0, Math.PI), mat.navimowGreen);
  hood.rotation.z = Math.PI / 2; hood.rotation.y = Math.PI / 2;
  hood.position.set(0.7, 0.42, 0); hood.scale.set(1, 0.65, 1); g.add(hood);
  // Top panel (dark touchscreen)
  const panel = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.03, 0.7), mat.bodyDark);
  panel.position.y = 0.48; g.add(panel);
  // Camera/sensor
  const sensor = new THREE.Mesh(new THREE.SphereGeometry(0.1, 24, 24), mat.accent);
  sensor.position.set(0.6, 0.5, 0); g.add(sensor);
  // Wheels
  const bigWheel = new THREE.CylinderGeometry(0.3, 0.3, 0.18, 28);
  const smallWheel = new THREE.CylinderGeometry(0.15, 0.15, 0.12, 24);
  const rearL = new THREE.Mesh(bigWheel, mat.rubber);
  rearL.rotation.z = Math.PI / 2; rearL.position.set(-0.55, 0.25, 0.55); g.add(rearL);
  const rearR = new THREE.Mesh(bigWheel, mat.rubber);
  rearR.rotation.z = Math.PI / 2; rearR.position.set(-0.55, 0.25, -0.55); g.add(rearR);
  const frontL = new THREE.Mesh(smallWheel, mat.rubber);
  frontL.rotation.z = Math.PI / 2; frontL.position.set(0.55, 0.15, 0.4); g.add(frontL);
  const frontR = new THREE.Mesh(smallWheel, mat.rubber);
  frontR.rotation.z = Math.PI / 2; frontR.position.set(0.55, 0.15, -0.4); g.add(frontR);
  // Accent stripe
  const stripe = new THREE.Mesh(new THREE.BoxGeometry(1.51, 0.04, 0.02), mat.accent);
  stripe.position.set(0, 0.32, 0.51); g.add(stripe);
  const stripe2 = stripe.clone(); stripe2.position.z = -0.51; g.add(stripe2);
  return g;
}

const FACTORIES = {
  vacuum:  makeRoborock,
  drone:   makePotensicDrone,
  scooter: makeScooter,
  printer: makeBambuLab,
  gimbal:  makeGimbal,
  mower:   makeNavimow,
};

/* ---------- Scene factory ---------- */
function createScene(canvasHost, { autoRotate = true, productKey = "vacuum", allowControls = true }) {
  const scene = new THREE.Scene();
  scene.background = null;

  const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
  camera.position.set(2.8, 2.0, 3.2);

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setClearColor(0x000000, 0);
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.25;
  canvasHost.appendChild(renderer.domElement);

  // Lighting — bright base + soft hemisphere fill + theme-keyed rim accents
  scene.add(new THREE.AmbientLight(0xffffff, 0.9));
  const hemi = new THREE.HemisphereLight(0xffffff, 0x3a3f55, 0.9);
  scene.add(hemi);
  // Strong key light (top-front)
  const key = new THREE.DirectionalLight(0xffffff, 2.0);
  key.position.set(3, 6, 4); scene.add(key);
  // Front fill so we never see a silhouetted product
  const fill = new THREE.DirectionalLight(0xffffff, 1.1);
  fill.position.set(-2, 2, 5); scene.add(fill);
  // Neon rim accents (subtle — just for color wash)
  const cyanRim = new THREE.PointLight(0x00e0ff, 1.4, 12);
  cyanRim.position.set(-3, 2.5, -2); scene.add(cyanRim);
  const violetRim = new THREE.PointLight(0x7c5cff, 1.2, 12);
  violetRim.position.set(3, -1.5, -2.5); scene.add(violetRim);
  const pinkRim = new THREE.PointLight(0xff4ec7, 1.0, 10);
  pinkRim.position.set(-1, -2, 3); scene.add(pinkRim);

  // Stage platform — glowing ring on a subtle reflective plane
  const stage = new THREE.Group();
  const plane = new THREE.Mesh(
    new THREE.CircleGeometry(4, 64),
    new THREE.MeshStandardMaterial({ color: 0x1c1f2a, metalness: 0.6, roughness: 0.7 })
  );
  plane.rotation.x = -Math.PI / 2; plane.position.y = -0.5; stage.add(plane);
  const ring = new THREE.Mesh(
    new THREE.TorusGeometry(1.6, 0.008, 16, 128),
    new THREE.MeshBasicMaterial({ color: 0x00e0ff })
  );
  ring.rotation.x = -Math.PI / 2; ring.position.y = -0.49; stage.add(ring);
  const ring2 = new THREE.Mesh(
    new THREE.TorusGeometry(2.1, 0.004, 12, 128),
    new THREE.MeshBasicMaterial({ color: 0x7c5cff })
  );
  ring2.rotation.x = -Math.PI / 2; ring2.position.y = -0.49; stage.add(ring2);
  scene.add(stage);

  // Product container
  const productGroup = new THREE.Group();
  scene.add(productGroup);

  let currentProduct = null;
  function setProduct(key) {
    if (currentProduct) productGroup.remove(currentProduct);
    const factory = FACTORIES[key] || FACTORIES.vacuum;
    currentProduct = factory();
    currentProduct.position.y = -0.3;
    productGroup.add(currentProduct);
  }
  setProduct(productKey);

  // Controls
  let controls;
  if (allowControls) {
    controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.08;
    controls.enableZoom = false;
    controls.enablePan = false;
    controls.minPolarAngle = Math.PI * 0.15;
    controls.maxPolarAngle = Math.PI * 0.62;
    controls.autoRotate = autoRotate;
    controls.autoRotateSpeed = 0.6;
    // Pause auto-rotate while user drags
    renderer.domElement.addEventListener("pointerdown", () => (controls.autoRotate = false));
    renderer.domElement.addEventListener("pointerup", () => (controls.autoRotate = autoRotate));
  }

  // Resize
  const resize = () => {
    const w = canvasHost.clientWidth;
    const h = canvasHost.clientHeight;
    renderer.setSize(w, h, false);
    camera.aspect = w / Math.max(h, 1);
    camera.updateProjectionMatrix();
  };
  resize();
  const ro = new ResizeObserver(resize); ro.observe(canvasHost);

  // Animation loop (only when visible, to save battery)
  let rafId = null, visible = true;
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => (visible = e.isIntersecting));
  }, { threshold: 0.01 });
  io.observe(canvasHost);

  const clock = new THREE.Clock();
  function tick() {
    rafId = requestAnimationFrame(tick);
    if (!visible) return;
    const t = clock.getElapsedTime();
    // Spin propellers (if present)
    if (currentProduct?.userData?.propellers) {
      currentProduct.userData.propellers.forEach((p, i) => {
        p.rotation.y += (i % 2 === 0 ? 0.9 : -0.9);
      });
    }
    // Stage rings subtle pulse
    ring.material.opacity = 0.5 + Math.sin(t * 1.4) * 0.25;
    ring2.material.opacity = 0.35 + Math.cos(t * 1.1) * 0.2;
    ring.material.transparent = true; ring2.material.transparent = true;
    controls?.update();
    renderer.render(scene, camera);
  }
  tick();

  return {
    setProduct,
    destroy: () => {
      cancelAnimationFrame(rafId);
      ro.disconnect(); io.disconnect();
      renderer.dispose();
      renderer.domElement.remove();
    },
  };
}

/* ---------- Bootstrapping both scenes ---------- */
function init() {
  // Hero scene (decorative, smaller)
  const heroHost = document.querySelector('.scene-canvas[data-scene="hero"]');
  if (heroHost) {
    createScene(heroHost, { productKey: heroHost.dataset.product || "vacuum", autoRotate: true });
  }

  // Showcase scene (interactive tabs)
  const showcaseHost = document.querySelector('.scene-canvas[data-scene="showcase"]');
  if (showcaseHost) {
    const scene = createScene(showcaseHost, {
      productKey: showcaseHost.dataset.product || "vacuum",
      autoRotate: true,
    });

    const tabs = document.querySelectorAll(".showcase__tab");
    const dCat = document.getElementById("scCategory");
    const dReg = document.getElementById("scRegion");
    const dCh  = document.getElementById("scChannel");

    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        const key = tab.dataset.product;
        tabs.forEach((t) => { t.classList.remove("is-active"); t.setAttribute("aria-selected", "false"); });
        tab.classList.add("is-active");
        tab.setAttribute("aria-selected", "true");
        scene.setProduct(key);
        const meta = PRODUCT_META[key];
        if (meta && dCat && dReg && dCh) {
          dCat.textContent = meta.category;
          dReg.textContent = meta.region;
          dCh.textContent  = meta.channel;
        }
      });
    });
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
