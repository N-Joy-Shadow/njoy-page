import { useTestStore } from "../zustand/testStore"

export default function Aside() {
    const value = useTestStore((x) => x.value)
    return(<aside>
        <p>Hi i'm side {value}</p>
    </aside>)
}