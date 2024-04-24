import React, { useRef } from 'react'
import { useGLTF, useTexture } from '@react-three/drei'

export function World(props) {
  const { nodes, materials } = useGLTF('/assets/models/world/Nivel1.glb')
  const PATH = '/assets/textures/floor/'

  const propsTexture = useTexture({
    map: PATH + "clay_plaster_diff_1k.jpg",
    displacementMap: PATH + "clay_plaster_disp_1k.png",
    normalMap: PATH + "clay_plaster_nor_gl_1k.jpg",
    roughnessMap: PATH + "clay_plaster_rough_1k.jpg"
  })

  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Planeta.geometry} 
      material={nodes.Planeta.material} />
        
        {/* <meshStandardMaterial
          map={propsTexture.map}
          displacementMap={propsTexture.displacementMap}
          normalMap={propsTexture.normalMap}
          roughnessMap={propsTexture.roughnessMap}
        /> */}
      {/* </mesh> */}
      <mesh
        geometry={nodes.CuerpoBase.geometry}
        material={nodes.CuerpoBase.material}
      />
      <mesh
        geometry={nodes.Base.geometry}
        material={nodes.Base.material}
      />
      <mesh geometry={nodes.Cueva.geometry} 
      material={nodes.Cueva.material} />
        {/* <meshStandardMaterial
          map={propsTexture.map}
          displacementMap={propsTexture.displacementMap}
          normalMap={propsTexture.normalMap}
          roughnessMap={propsTexture.roughnessMap}
        /> */}
      {/* </mesh> */}
      <mesh geometry={nodes.Montaña.geometry} 
      material={nodes.Montaña.material} />
        {/* <meshStandardMaterial
          map={propsTexture.map}
          displacementMap={propsTexture.displacementMap}
          normalMap={propsTexture.normalMap}
          roughnessMap={propsTexture.roughnessMap}
        /> */}
      {/* </mesh> */}
    </group>
  )
}

useGLTF.preload('/assets/models/world/Nivel1.glb');