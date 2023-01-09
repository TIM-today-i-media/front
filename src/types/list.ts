export interface listProps {
    cover:{
        external : {
            url:string
        }
    }
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
        title:[
            text:{
                content:string
            }
        ]
    }

}

export interface TextProps {
        text:{
            content:string
        }
}
export interface MultiSelectProps {
        id:string,
        name:string,
        color:string,
}