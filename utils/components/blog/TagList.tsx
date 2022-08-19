import { PropaneSharp } from "@mui/icons-material"
import Tag from "./Tag"

interface TagListProps{
    tags? : string[]
    isSelected? : boolean
}

export default function TagList(props : TagListProps) {

    return(<div className="grid grid-flow-col auto-cols-max gap-3 m-4">
        {props.tags ? 
            props.tags.map((x,i) => (<Tag tag={x} key={i} isSelected={props.isSelected}/>))
        :null}
    </div>)
}