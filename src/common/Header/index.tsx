import * as S from "./styled";
import { useRouter } from "next/router";
import Link from "next/link";
import { useState } from "react";
import { CategorySelect } from "..";
import { CategoryArray } from "../../utils/CategoryArray";

const Header = () => {
  const router = useRouter();
  const [filterToggleBtn, setFilterToggleBtn ] = useState(false);
  const [filterCategoryArray, setFilterCategoryArray ] = useState<string[]>([]);
//   const [currentPage, setCurrentPage] = useRecoilState(AtomCurrentPage);
//   const [searchValue, SetSearchValue] = useRecoilState<{value: string,isClick:boolean}>(AtomSearchValue);

//   const handleClick = () => {
//     if(!searchValue.value) return toast('검색어를 입력해주세요.', {type:"warning"})
//     SetSearchValue({...searchValue , isClick:true})   
//   }
const handleCategorySelectClick = (name:string) => {
  if(!filterCategoryArray.includes(name)){
    setFilterCategoryArray([...filterCategoryArray, name])
  }else {
    const arr = filterCategoryArray.filter((i) => i !== name);
    setFilterCategoryArray(arr);
  }
}

  return (
    <S.HeaderWapper>  
      <S.LeftWapper>
        <Link href="/">TIM</Link>
      </S.LeftWapper>
       <S.CenterWrapper>
        <S.InputWapper>
          {/* <input type="text" value={searchValue.value} onChange={(e) => SetSearchValue({...searchValue,value:e.target.value})}  placeholder="검색어를 입력해주세요"  */}
          {/* onKeyDown={(e:any) => {if (e.key === 'Enter'){handleClick()}}} */}
          {/* /> */}
          <input type="text"  placeholder="영화/드라마 이름을 입력하세요" />
          <label >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
          </label>
        </S.InputWapper>
        <S.FilterBtn onClick={() => setFilterToggleBtn(pre => !pre)}>카테고리</S.FilterBtn>
          {
            filterToggleBtn &&
            <S.FilterBox>
              <S.BoxTop>
              {
                CategoryArray.map((i,index) => (
                    <CategorySelect    
                        onClick={() => handleCategorySelectClick(i)} 
                        key={index} 
                        name={i}
                        isClick={filterCategoryArray.includes(i)}
                    />
                ))
              }
              </S.BoxTop>
              <S.BoxBottom>

              </S.BoxBottom>
            </S.FilterBox>
          }
           
        
        </S.CenterWrapper>
      <div/>
    </S.HeaderWapper>
  )
}

export default Header