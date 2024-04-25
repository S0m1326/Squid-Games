import { Environment } from "@react-three/drei"

export default function Environments() {
    return <>
        <Environment
            files={"/assets/hdris/qwantani_puresky_4k.hdr"}
            preset={null}
            background={true}
        />
    </>
}