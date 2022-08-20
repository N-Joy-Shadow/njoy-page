import { pushTags, removeTags, useTagStore } from "../../zustand/TagStore"

interface TagProps {
    tag?: string
    isSelected? : boolean
}

export default function Tag(props: TagProps) {
    const isSelected = props.isSelected ?? false
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { TagList,TagChange} = useTagStore()
    const handleOnClick = () =>{
        if(!isSelected){
            // eslint-disable-next-line react-hooks/rules-of-hooks
            TagChange(pushTags(TagList,props.tag ?? "none"))
        }
        else{
            console.log(TagList)
            TagChange(removeTags(TagList,props.tag ?? "none"))
        }
    }



    return (<div className="rounded-lg outline outline-2 outline-cyan-500 bg-cyan-300 px-2 py-1 w-auto h-auto shadow-xl
                    flex flex-row tag-container select-none"
                    onClick={handleOnClick}>
        <p className="text-center text-white select-none">#{props.tag ?? "None"}</p>
        <p className="w-auto h-auto text-center rounded-full text-white
        tag select-none
        ">{isSelected ? "-": "+"}</p>
        <style jsx>{`
                .tag-container > .tag{
                    width : 0;
                    visibility: collapse;
                    transition : all, 0.3s;
                    opacity: 0;
                }
                .tag-container:hover > .tag {
                    visibility: visible;
                    margin-left : 0.5rem;
                    margin-right : 0.5rem;
                    opacity: 1.0;
                }
            `}
        </style>
    </div>)
}