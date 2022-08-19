import TagList from "./TagList"

export default function BlogItem() {
    const imgURL = "https://i.imgur.com/1zOCcXt.jpeg"


    return (<div className="bg-cyan-50 rounded-lg shadow-xl h-52 my-4 flex flex-row  overflow-hidden">
        <img src={imgURL} className="w-52 rounded-none h-52" />
        <div className="flex flex-col w-full">
            <div className="px-4 space-y-2 mt-2 grow-0">
                <h1 className="text-3xl">Title</h1>
                <div className="flex flex-row justify-between">
                    <p className="w-auto">date</p>
                    <p className="w-auto text-end">Author</p>
                </div>
            </div>
            <div className="">
                <TagList tags={["ae2","ic2","create","blood Magic"]}/>
            </div>
        </div>
    </div>)
}