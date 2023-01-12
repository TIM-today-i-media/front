import * as S from "./styled";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CategorySelect } from "..";
import { CategoryArray } from "../../utils/CategoryArray";
import { useRecoilState } from "recoil";
import { fieldStateAtom, filterObjectAtom, isfilterCategoryBtnAtom } from "../../atom";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  const [filterToggleBtn, setFilterToggleBtn ] = useState(false);
  const [filterCategoryArray, setFilterCategoryArray ] = useState<string[]>([]);
  const [isfilterSubmitBtn , setIsfilterSubmitBtn] = useRecoilState<boolean>(isfilterCategoryBtnAtom);
  const [field, setField] = useRecoilState(fieldStateAtom);
  const [filterObjectArray, setFilterObjectArray] = useRecoilState(filterObjectAtom);
  const [searchValue, SetSearchValue] = useState<string>("");

  const handleClick = () => {
    if(!searchValue) return router.push('/');
    router.push(`/search/${searchValue}`)
  }
  
const handleCategorySelectClick = (name:string) => {
  if(!filterCategoryArray.includes(name)){
    setFilterCategoryArray([...filterCategoryArray, name])
    setFilterObjectArray([...filterObjectArray, {
      property: "Category",
      multi_select: {
      contains: name,
    },
    }])
  }else {
    const arr = filterCategoryArray.filter((i) => i !== name);
    const arr2 = filterObjectArray.filter((i) => i.multi_select.contains !== name);
    setFilterCategoryArray(arr);
    setFilterObjectArray(arr2);
  }
}

const handleSubmitBtnClick = () => {
  if(filterCategoryArray.length === 0 && !field) return router.push("/")
  const filterQuery = filterCategoryArray.join(' ')
  router.push(`/filter/${filterQuery} ${field}`)
  setIsfilterSubmitBtn(true)
}

const handleClickTogglrBtn = () => {
  setFilterToggleBtn(pre => !pre)
  setFilterCategoryArray([])
}

  return (
    <S.HeaderWapper>  
      <S.LeftWapper>
        <Link href="/">TIM</Link>
      </S.LeftWapper>
       <S.CenterWrapper>
        <S.InputWapper>
          <input type="text" placeholder="영화/드라마 이름을 입력하세요" value={searchValue} onChange={(e) => SetSearchValue(e.target.value)}
              onKeyDown={(e:any) => {if (e.key === 'Enter'){handleClick()}}}
           />
          <label >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
          </label>
        </S.InputWapper>
        <S.FilterBtn onClick={handleClickTogglrBtn}>카테고리</S.FilterBtn>
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
                <S.TagBtns>
                  <input defaultChecked type="radio" value={""} id="전체" name="분야" onClick={() => setField("")}/>
                  <label htmlFor="전체" style={{borderBottomLeftRadius:"6px"}}>전체</label>
                  <input type="radio" value={field} id="영화" name="분야" onClick={() => setField("영화")}/>
                  <label htmlFor="영화">영화</label>
                  <input type="radio" value={field} id="드라마" name="분야" onClick={() => setField("드라마")}/>
                  <label htmlFor="드라마">드라마</label>
                </S.TagBtns>
                <S.SubmitBtn>
                  <button onClick={handleSubmitBtnClick}>검색</button>
                </S.SubmitBtn>
              </S.BoxBottom>
            </S.FilterBox>
          }
           
        
        </S.CenterWrapper>
      <div/>
    </S.HeaderWapper>
  )
}

export default Header