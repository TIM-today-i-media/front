import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { fieldStateAtom, filterCategoryArrayAtom, filterObjectAtom, isfilterCategoryBtnAtom } from "../../atom";
import { ListBox } from "../../common"
import { FilterQeuryType, listProps } from "../../types"
import CustomAxios from "../../utils/lib/CustomAxios";
import * as S from "./styled";

const Home = ({list}:{list:listProps[]}) => {    
    const [isfilterSubmitBtn , setIsfilterSubmitBtn] = useRecoilState<boolean>(isfilterCategoryBtnAtom);
    const [field, setField] = useRecoilState(fieldStateAtom);

    const [filterObjectArray, setFilterObjectArray] = useRecoilState(filterObjectAtom);

    useEffect(() => {
        if(!isfilterSubmitBtn) return;
        
        async function a(){
            // if(field){
            //     setQeuryObject([...qeuryObject,{
            //         "property": "Tag",
            //         "select": {
            //             "equals": field
            //         }
            //     }])
            // }

            try {

            const {data} = await CustomAxios.post(`/${process.env.NEXT_PUBLIC_NOTION_DATABASE_ID}/query`,{
                "filter": {
                    "and": filterObjectArray
                }
            });
            console.log(data);
            } catch (e) {
                console.log(e);
                // setQeuryObject([])
                setIsfilterSubmitBtn(false)
            }
        }
        a()
    },[isfilterSubmitBtn])
    return (
        <S.Wrapper>
            <S.ListWrapper>
            {
                list.map((i,index) => (
                        <ListBox
                            key={index}
                            cover={i.cover}
                            title={i.properties.Name.title[0]?.text.content}
                            category={i.properties.Category.multi_select}
                        />
                ))
            }
            </S.ListWrapper>
        </S.Wrapper>
    )
}

export default Home