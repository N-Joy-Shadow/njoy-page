import SearchBar from "./main/searchBar.tsx";

export default function Navbar() {

    //a element 수정 필요
    return (
        <nav className="bg-cyan-300 p-4 flex flex-row w-full">
            <div className="flex justify-between ">
                <div>
                    <p className="text-start text-xl">NJoyShadow</p>
                </div>
                <div className="">
                    <SearchBar />
                </div>
            </div>
        </nav>
    )
}