export interface listProps {
    cover: CoverProps
    properties:PropertiesProps
}

export interface PropertiesProps {
    Grade:{
        multi_select: MultiSelectProps[]
    },
    Review:{
        rich_text:TextProps[]
    },
    Described:{
        rich_text:TextProps[]
    },
    Date:{
        data:{
            start:string,
            end:string,
        }
    },
    Ost:{
        url:string
    }
    Category:{
        multi_select: MultiSelectProps[]
    }
    Tag:{
        select:{
            name:string,
            color:string,
        }
    }
    Name:{
        title:TextProps[]
    }

}

export interface TextProps {
        text:{
            content:string
        }
}
export interface MultiSelectProps {
        color:string,
        id:string,
        name:string,
}
export interface CoverProps {
    external : {
        url:string
    }
    file? : {
        url:string
    }
}