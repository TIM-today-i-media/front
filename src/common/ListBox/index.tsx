import { CoverProps, listProps, MultiSelectProps } from "../../types"
import * as S from "./styled";
import Image from "next/image";

const ListBox = ({cover,title,category}:{cover:CoverProps,title:string,category:MultiSelectProps[] }) => {
    
    return (
        <S.Wrapper>
            {
                cover ? (
                    <Image 
                    src={cover.external.url}
                    alt="포스터 이미지"
                    width={100}
                    height={310}
                    objectFit="cover" 
                    />
                ) : (
                    <S.WhiteBox />
                )
            }
            <S.Decs>
                <S.Title>{title}</S.Title>
                <S.Categorys>
                    <S.Category>{category[0]?.name || ""}</S.Category>
                    {
                        category[1] && <S.Category>{category[1].name}</S.Category>
                    }
                    {
                        category[2] && <S.Category>{category[2].name}</S.Category>
                    }
                </S.Categorys>           
            </S.Decs>
        </S.Wrapper>
    )
}

export default ListBox