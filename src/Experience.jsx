import {OrbitControls} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
// import {useRef} from "react";
import { MathUtils } from "three";
import World from "./world/World";

const Experience = () => {
    // const boxRef = useRef(null);
    // const boxRef2 = useRef(null);
    // const boxRef3 = useRef(null);
    // const boxRef4 = useRef(null);
    // const boxRef5 = useRef(null);
    // const boxRef6 = useRef(null);
    // const boxRef7 = useRef(null);

    /*useFrame((state, delta)=>{
        boxRef.current.position.y = Math.cos(state.clock.getElapsedTime());
        boxRef.current.position.x = state.clock.getElapsedTime();
        
        boxRef2.current.position.x = -10
        boxRef2.current.position.y = 5
        
        boxRef3.current.position.x = -5
        
        boxRef4.current.position.x = -5
        boxRef4.current.position.y = 5
        
        boxRef5.current.position.y = 0
        
        boxRef6.current.position.y = 5
        
        boxRef7.current.position.x = 5
    })*/

    return (
        <>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 5]} intensity={2} />
            <OrbitControls makeDefault />
            <World />
        {/* <mesh ref={boxRef}>
                <coneGeometry args={[2, 4, 32]} />
                <meshStandardMaterial color="blue"/>
            </mesh>
        <mesh ref={boxRef2}>
                <coneGeometry args={[2, 4, 32]} />
                <meshPhongMaterial/>
            </mesh>
        <mesh ref={boxRef3}>
            <coneGeometry args={[2, 4, 32]} /> 
                <meshLambertMaterial color="red" />
            </mesh>
        <mesh ref={boxRef4}>
                <coneGeometry args={[2, 4, 32]} />
                <meshMatcapMaterial color="white" />
            </mesh>
        <mesh ref={boxRef5}>
                <coneGeometry args={[2, 4, 32]} />
                <meshNormalMaterial color="black" />
            </mesh>
        <mesh ref={boxRef6}>
                <coneGeometry args={[2, 4, 32]} />
                <meshPhysicalMaterial color="yellow" />
            </mesh>
        <mesh ref={boxRef7}>
                <coneGeometry args={[2, 4, 32]} />
                <meshToonMaterial color="brown" />
            </mesh> */}
        </>

    )
}

export default Experience;

//const Experience = ({title, subtitle}) => {
//    return (
//        <>
//            <h1 className = "title"> {title} </h1>
//            <span> {subtitle} </span>
//        </>
//    )
//}
//
//export default Experience;