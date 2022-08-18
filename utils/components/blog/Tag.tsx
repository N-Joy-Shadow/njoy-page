interface TagProps {
    tag?: string
}

export default function Tag(props: TagProps) {

    return (<div className="rounded-lg outline outline-2 outline-cyan-400 bg-cyan-200 px-2 py-1 w-auto h-auto shadow-xl
                    flex flex-row tag-container select-none">
        <p className="text-center text-white select-none">#{props.tag ?? "None"}</p>
        <div className="w-auto h-auto text-center rounded-full hidden text-white
        tag select-none
        ">+</div>
        <style jsx>{
            `
            .tag-container > .tag{
                transition : all, 0.5s;
             }
            .tag-container:hover > .tag {
                display : block;
                margin-left : 0.5rem;
            }
            `
        }
        </style>
    </div>)
}