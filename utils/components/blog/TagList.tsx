import Tag from "./Tag"

interface TagListProps{
    tags? : string[]
}

export default function TagList(props : TagListProps) {

    return(<div className="grid grid-flow-col auto-cols-max gap-3 m-4">
        {props.tags ? 
            props.tags.map((x,i) => (<Tag tag={x} key={i}/>))
        :null}
    </div>)
}