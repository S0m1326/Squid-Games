import { BakeShadows, OrbitControls } from "@react-three/drei";
import { World } from "./world/World";
import Lights from "./lights/Lights";
import Environments from "./environments/Environments";
import { Perf } from "r3f-perf";

const Experience = () => {
    return (
        <>
            <Perf position="top-left" />
            <Lights/>
            <BakeShadows/>
            <Environments/>
            <OrbitControls makeDefault />
            <World />
        </>
    )
}

export default Experience;