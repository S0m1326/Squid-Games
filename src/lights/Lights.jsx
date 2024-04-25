import { Color } from "three";

const Lights = () => {
    return <>
        <ambientLight
                //color={new Color("FF7D33")}
                //intensity={1}
            />
        <directionalLight
                castShadow={true}
                position={[10, 10, 5]}
                color={new Color(0xE77502)}
                intensity={5}
            />
        {/* <pointLight
                position={[4, 2, 0]}
                color={new Color("FF0000")}
                intensity={8}
            /> */}
        {/* <spotLight
            position={[0, 3, 0]}
            color={new Color(0x0446A0)}
            angle={Math.PI / 3}
            intensity={20}
            /> */}
        <hemisphereLight
            position={[2, 30, -2]}
            skyColor={new Color(0xE77502)}
            groundColor={new Color(0xE77502)}
            intensity={1}
            />
    </>
}

export default Lights;