# 🎂 3D Scroll Animation with React Three Fiber

An interactive **3D scroll experience** built with React and WebGL.
The project demonstrates how to combine **scroll-driven animations**, **camera transitions**, and **passive object rotation** in a clean and stable way using nested transformation groups.

---

# 🛠️ Tech Stack & Environment

This project is built using the **Vite** build tool for lightning-fast development and optimized production bundles.

* **Framework:** React 19
* **3D Rendering:** React Three Fiber
* **3D Engine:** Three.js
* **Utilities:** @react-three/drei
* **Animations:** Framer Motion 12 (optional UI animations)
* **Effects:** Canvas-Confetti
* **Build Tool:** Vite 7 (ES Modules)

---

# 🚀 Getting Started

Since this project uses **Vite**, the commands are slightly different from standard React apps.

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

The development server will start and you can access the app at:

```
http://localhost:5173
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

---

# 📦 Core Concept

This project demonstrates **scroll-based animation control** in a 3D environment.

The user scrolls through multiple sections while:

* the **camera moves**
* the **3D cake rotates**
* the **model position interpolates**
* **passive idle rotation activates on certain sections**

---

# 🎯 Animation Architecture

To avoid animation conflicts, the scene uses **two nested groups**.

```
ScrollGroup (scroll controlled transforms)
    └── SpinGroup (passive idle rotation)
            └── CakeModel
```

### Responsibilities

| Group       | Responsibility                                     |
| ----------- | -------------------------------------------------- |
| ScrollGroup | Handles scroll interpolation (position + rotation) |
| SpinGroup   | Handles passive idle spinning                      |
| Model       | GLTF mesh                                          |

This prevents rotation conflicts between **scroll interpolation** and **idle rotation**.

---

# 📜 Scroll System

The project uses **ScrollControls** and **useScroll** from `@react-three/drei`.

Scroll progress is normalized from:

```
0 → 1
```

Each section controls a different animation phase.

Example:

```js
const page1 = scroll.curve(0.0, 0.2)
const page2 = scroll.curve(0.2, 0.5)
const page3 = scroll.curve(0.5, 0.9)
```

---

# 🎥 Camera Motion

Camera positions interpolate between predefined views.

Example camera states:

```
Front View
Top View
Right View
```

Interpolation example:

```js
camTarget.lerpVectors(frontView, topView, page2)
camera.position.lerp(camTarget, 0.08)
```

This produces smooth cinematic camera transitions.

---

# 🔄 Object Rotation

Object rotations use **quaternions** to avoid gimbal lock.

```js
meshRef.current.quaternion.slerp(targetQuaternion, 0.1)
```

Quaternion interpolation ensures smooth rotation blending.

---

# 🌪 Passive Idle Rotation

Idle spinning activates only when the user is near the start or end of the scroll.

```js
if (scroll.offset < 0.15 || scroll.offset > 0.85) {
    spinGroup.current.rotation.y += delta * 0.6
}
```

This creates a subtle **product showcase style rotation**.

---

# 📁 Project Structure

```
src
│
├── components
│   ├── BirthdayCake.jsx
│   ├── RotatingMesh.jsx
│   └── CakeModel.jsx
│
├── models
│   └── cake.glb
│
├── App.jsx
└── main.jsx
```

---

# 🎂 Features

✔ Scroll-driven camera transitions
✔ Smooth quaternion-based rotations
✔ Passive idle animation
✔ GLTF 3D model loading
✔ HTML overlays synced with scroll
✔ Modular animation architecture

---

# 💡 Best Practices Used

### 1. Nested Transform Groups

Instead of applying multiple rotations on the same object:

```
groupA → scroll animation
groupB → passive rotation
```

This prevents animation interference.

---

### 2. Interpolation for Smooth Motion

```
lerp()   → positions
slerp()  → rotations
```

This creates smooth cinematic movement.

---

### 3. Scroll Normalization

Scroll progress always stays between:

```
0 → 1
```

Making animation logic predictable.

---

# 📚 Useful Libraries

This project uses the following ecosystem tools:

* **React Three Fiber** – React renderer for Three.js
* **Three.js** – WebGL rendering engine
* **Drei** – Helper utilities for R3F
* **Framer Motion** – UI animations
* **Canvas Confetti** – celebratory visual effects

---

# ✨ Possible Improvements

Future enhancements could include:

* GPU particle effects
* GSAP scroll timelines
* physics-based object motion
* post-processing (bloom / depth of field)
* interactive UI controls

---

# 📄 License

This project uses (LICENCE)[LICENCE] is open-source and available for experimentation, learning, and portfolio use.
