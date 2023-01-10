import { listProps } from "../../types";
import * as S from "./styled";
import Image from "next/image";
import { useRouter } from "next/router";

const HomeDetail = ({data}:{data:listProps}) => {
    const router = useRouter();
    console.log(data);

    const  handleOstClick = () => {
        window.open(data.properties.Ost.url)
    }
    
    return(
        <S.Wrapper>
            <S.LeftWrapper>
                <Image 
                    src={data?.cover?.external?.url || data?.cover?.file?.url || ""} 
                    alt={"디테일 페이지"} 
                    objectFit={'cover'}
                    layout="fill"
                />
            </S.LeftWrapper>
            <S.RightWrapper>
                <S.TopWrapper> 
                    <S.TopLeft onClick={() => router.back() }>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
                    </svg>

                    </S.TopLeft>
                    <S.TopCenter>
                        <S.Title>{data?.properties?.Name?.title[0]?.text?.content}</S.Title>
                        <span>{`${data?.properties?.Date?.date?.start}`}{data?.properties?.Date?.date?.end &&`~${data?.properties?.Date?.date?.end}`}</span>
                    </S.TopCenter>
                    <div/>
                </S.TopWrapper>
                <S.OstWrapper>
                    <span onClick={handleOstClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                    </svg>
                    OST
                    </span>
                    
                </S.OstWrapper>
                <S.DecsWrapper>
                    <S.Decs>
                        {"장르 : "}
                        {
                            data?.properties.Category.multi_select.map((i) => (
                                <span key={i.id}>{i.name} </span>
                            ))
                        }
                    </S.Decs>
                    <S.Decs>
                        {"평점 : "}
                        {
                            data?.properties.Grade.multi_select.map((i) => (
                                <span key={i.id}>{i.name} </span>
                            ))
                        }
                    </S.Decs>
                    <S.DecsLong>
                        <span>{"설명"}</span>
                        <div>
                        {
                            data?.properties?.Described?.rich_text[0]?.text?.content
                        }
                        </div>
                    </S.DecsLong>
                    <S.DecsLong>
                        <span>{"후기"}</span>
                        <div>
                        {
                            data?.properties?.Review?.rich_text[0]?.text?.content
                        }
                        </div>
                    </S.DecsLong>
                       <S.DecsLong>
                        <span>{"명대사"}</span>
                        <pre>
                        {
                            data?.properties?.FamousLine?.rich_text[0]?.text?.content
                        }
                        </pre>
                    </S.DecsLong>
                </S.DecsWrapper>
            </S.RightWrapper>
        </S.Wrapper>
    )
}

export default HomeDetail