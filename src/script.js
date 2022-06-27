import * as THREE from 'three'
import './style.css'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Objects
 */
const group = new THREE.Group()
group.position.y = 1
group.scale.y = 2
group.rotation.y = 1
scene.add(group)

const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({
        color: 0xff0000,
        wireframe: true
    })
)
group.add(cube1)

const cube2 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({
        color: 0x00ff00,
        wireframe: true
    })
)
cube2.position.x = -2
group.add(cube2)

const cube3 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({
        color: 0x0000ff,
        wireframe: true
    })
)
cube3.position.x = 2
group.add(cube3)

const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({
    color: 0xff0000,
    wireframe: true
})
const mesh = new THREE.Mesh(geometry, material)
// scene.add(mesh)

// Position
// mesh.position.x = 0.7
// mesh.position.y = -0.6
// mesh.position.z = 1
mesh.position.set(0.7, -0.6, 1)

// distance between the center of the scene and object position
console.log(mesh.position.length())

// normalization, reduce the vector to 1
// mesh.position.normalize()

// Scale
// mesh.scale.x = 2
// mesh.scale.y = 0.5
// mesh.scale.z = 0.5
mesh.scale.set(2, 0.5, 0.5)

// Rotation & Quaternion
// use reorder() to change the rotation order, 'xyz' is default
mesh.rotation.reorder('YXZ')
mesh.rotation.y = Math.PI / 2
mesh.rotation.x = Math.PI / 4

/**
 * Axes Helper
 */
const axesHelper = new THREE.AxesHelper(5)
scene.add(axesHelper)

/**
 * Sizes
 */
const sizes = {
    width: 800,
    height: 600
}

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
// camera.position.z = 3
camera.position.set(1, 1, 5)
scene.add(camera)

camera.lookAt(mesh.position)

// distance from the mesh to camera
console.log(mesh.position.distanceTo(camera.position))

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)