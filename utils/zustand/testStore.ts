import create from "zustand"


export interface TestStoreProps {
    value: number,
    inc: (by: number) => void
}

export const useTestStore = create<TestStoreProps>((set) =>({
    value : 0,
    inc : (v) => set((state) => ({ value : v}))
}))