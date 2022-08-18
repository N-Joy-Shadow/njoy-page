import Image from "next/image"
import { useTestStore } from "../zustand/testStore"

export default function Aside() {
    return (<aside className="m-2 top-0 sticky rounded-xl bg-cyan-200 p-6 w-80 shadow-xl">
        <Image className="" layout="fill" src="" width={64} height={64}/>
        <div className="divide-y-2 divide-cyan-100">
            <p>test2</p>
            <p>Hi side </p>
            <p></p>
        </div>
    </aside>)
}