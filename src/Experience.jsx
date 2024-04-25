import { OrbitControls } from "@react-three/drei";
import { World } from "./world/World";
import Lights from "./lights/Lights";
import Environments from "./environments/Environments";

const Experience = () => {
    return (
        <>
            <Lights/>
            <Environments/>
            <OrbitControls makeDefault />
            <World />
        </>
    )
}

export default Experience;