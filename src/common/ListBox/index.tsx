import { CoverProps, listProps, MultiSelectProps } from "../../types"
import * as S from "./styled";
import Image from "next/image";
import { CategoryBox } from "..";

const ListBox = ({cover,title,category}:{cover:CoverProps,title:string,category:MultiSelectProps[] }) => {
    
    return (
        <S.Wrapper>
            {
                cover ? (
                    <Image 
                    src={cover.external.url}
                    alt="포스터 이미지"
                    width={100}
                    height={330}
                    objectFit="cover" 
                    />
                ) : (
                    <S.WhiteBox />
                )
            }
            <S.Decs>
                <S.Title>{title}</S.Title>
                <S.Categorys>
                    {
                        category.map((i) => (
                            <CategoryBox 
                                key={i.id}
                                color={i.color}
                                name={i.name}
                            />
                        ))
                    }
                </S.Categorys>           
            </S.Decs>
        </S.Wrapper>
    )
}

export default ListBox