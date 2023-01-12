import { listProps } from "../../types";
import * as S from "./styled";
import Image from "next/image";
import { useRouter } from "next/router";
import { CategoryBox } from "../../common";

const HomeDetail = ({data}:{data:listProps}) => {
    const router = useRouter();

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
                    {/* <S.TopCenter>
                        <S.Title>{data?.properties?.Name?.title[0]?.text?.content}</S.Title>
                        <span>{`${data?.properties?.Date?.date?.start}`}{data?.properties?.Date?.date?.end &&`~${data?.properties?.Date?.date?.end}`}</span>
                    </S.TopCenter>
                    <div style={{width:"10px"}}></div> */}
                </S.TopWrapper>

                <S.MiddleWrapper>
                    <S.MiddleTop>
                        <S.TitleWrapper>
                            <S.Title>{data?.properties?.Name?.title[0]?.text?.content}</S.Title>
                            <span>{`${data?.properties?.Date?.date?.start}`}{data?.properties?.Date?.date?.end &&`~${data?.properties?.Date?.date?.end}`}</span>
                        </S.TitleWrapper>
                        <S.OstWrapper onClick={handleOstClick}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                            </svg>
                           <span>OST</span>
                        </S.OstWrapper>
                    </S.MiddleTop>
                    <S.MiddleBottom>
                        <S.CategoryBtns>
                            {
                                data?.properties.Category.multi_select.map((i) => (
                                    <CategoryBox  key={i.id} color={i.color} name={i.name}/>
                                ))
                            }
                        </S.CategoryBtns>
                        <S.Grade>
                        {"평점 "}
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                        </svg>
                        {
                            data?.properties.Grade.multi_select.map((i) => (
                                <span key={i.id}>{i.name} </span>
                            ))
                        }
                        </S.Grade>
                    </S.MiddleBottom>
                </S.MiddleWrapper>

                <S.DecsWrapper>
                    <S.DecsLong>
                        <span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                            <path fillRule="evenodd" d="M4.5 7.5a3 3 0 013-3h9a3 3 0 013 3v9a3 3 0 01-3 3h-9a3 3 0 01-3-3v-9z" clipRule="evenodd" />
                        </svg>
                        {"설명"}
                        </span>
                        <div>
                        {
                            data?.properties?.Described?.rich_text[0]?.text?.content
                        }
                        </div>
                    </S.DecsLong>
                    <S.DecsLong>
                        <span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                            <path fillRule="evenodd" d="M4.5 7.5a3 3 0 013-3h9a3 3 0 013 3v9a3 3 0 01-3 3h-9a3 3 0 01-3-3v-9z" clipRule="evenodd" />
                        </svg>
                        {"후기"}
                        </span>
                        <div>
                        {
                            data?.properties?.Review?.rich_text[0]?.text?.content
                        }
                        </div>
                    </S.DecsLong>
                       <S.DecsLong>
                        <span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                            <path fillRule="evenodd" d="M4.5 7.5a3 3 0 013-3h9a3 3 0 013 3v9a3 3 0 01-3 3h-9a3 3 0 01-3-3v-9z" clipRule="evenodd" />
                        </svg>
                        {"명대사"}
                        </span>
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