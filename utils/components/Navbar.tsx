import SearchBar from "./main/searchBar";

export default function Navbar() {

    //a element 수정 필요
    return (
        <nav className="bg-cyan-200 p-4 flex flex-row w-full justify-between">

            <div className="">
                <p className=" text-xl text-white text-center align-middle">NJoyShadow</p>

            </div>
            <div className="w-80">
                <SearchBar />
            </div>

        </nav>
    )
}