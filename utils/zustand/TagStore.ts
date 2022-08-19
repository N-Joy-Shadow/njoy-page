import create from "zustand"

interface TagStoreProps {
    TagList : string[],
    TagChange : (tag :string[]) => void
}

export const useTagStore = create<TagStoreProps>((set) =>({
    TagList : [],
    TagChange : (tag : string[]) => set((state) => ({ TagList : tag}))
}))


export function pushTags(tags : string[], tag : string) : string[]{
    if(isExistTag(tags,tag)){
        let new_tags = [...tags]
        new_tags.push(tag) 
        return new_tags
    }
    else{
        return tags
    }
}

export function removeTags(tags: string[], tag : string) : string[]{
    let index = tags.indexOf(tag)
    const new_tags = tags.splice(index,1)
    return new_tags
}

function isExistTag(tags : string[],tag : string){
    if(tags == undefined){
        return false
    }
    let old_tags = [...tags]
    if(old_tags.indexOf(tag) == -1){
        return true
    }
    return false
}