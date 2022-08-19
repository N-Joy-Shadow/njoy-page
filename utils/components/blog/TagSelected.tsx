import { useTagStore } from "../../zustand/TagStore";
import TagList from "./TagList";

export default function TagSelectedList() {
    const value = useTagStore((x) => x.TagList)
    return(<TagList tags={value} isSelected={true}/>)
}