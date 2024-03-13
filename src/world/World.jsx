import { useGLTF, useTexture } from "@react-three/drei"
import { Mesh, RepeatWrapping } from "three";

export default function World(props) {
    const {nodes, materials} = useGLTF("/assets/models/world/WorldSquidGames.glb");
    const PATH = "/assets/textures/floor/";
    
    const propsTexture = useTexture({
        // map: PATH + "/land/coast_sand_01_diff_1k.jpg",
        // displacementMap: PATH + "/land/coast_sand_01_disp_1k.png",
        // normalMap: PATH + "/land/coast_sand_01_nor_gl_1k.jpg",
        // roughnessMap: PATH + "/land/coast_sand_01_rough_1k.jpg",

        // map: PATH + "/metal/metal_plate_diff_1k.jpg",
        // displacementMap: PATH + "/metal/metal_plate_disp_1k.png",
        // normalMap: PATH + "/metal/metal_plate_nor_gl_1k.jpg",
        // roughnessMap: PATH + "/metal/metal_plate_rough_1k.jpg",

        map: PATH + "/grass/leafy_grass_diff_1k.jpg",
        displacementMap: PATH + "/grass/leafy_grass_disp_1k.png",
        metalnessMap: PATH +"/grass/leafy_grass_mask_1k.png",
        normalMap: PATH + "/grass/leafy_grass_nor_gl_1k.jpg",
        roughnessMap: PATH + "/grass/leafy_grass_rough_1k.jpg",
    })

    propsTexture.map.repeat.set(4, 64);
    propsTexture.map.wrapS = propsTexture.map.wrapT = RepeatWrapping;

    propsTexture.displacementMap.repeat.set(4, 64);
    propsTexture.displacementMap.wrapS = propsTexture.displacementMap.wrapT = RepeatWrapping;

    propsTexture.metalnessMap.repeat.set(4, 64);
    propsTexture.metalnessMap.wrapS = propsTexture.metalnessMap.wrapT = RepeatWrapping;

    propsTexture.normalMap.repeat.set(4, 64);
    propsTexture.normalMap.wrapS = propsTexture.normalMap.wrapT = RepeatWrapping;

    propsTexture.roughnessMap.repeat.set(4, 64);
    propsTexture.roughnessMap.wrapS = propsTexture.roughnessMap.wrapT = RepeatWrapping;

    return (
        <group {...props} dispose={null}>
          <group>
            <mesh geometry={nodes.Walls.geometry} material={materials.Material} />
            <mesh geometry={nodes.Floor.geometry}>
            <meshStandardMaterial {...propsTexture}/>
            </mesh>
          </group>
        </group>
    );
}

useGLTF.preload("/assets/models/world/WorldSquidGames.glb");
