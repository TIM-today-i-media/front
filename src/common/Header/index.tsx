import * as S from "./styled";
import { useRouter } from "next/router";
import Link from "next/link";

const Header = () => {
  const router = useRouter();
//   const [currentPage, setCurrentPage] = useRecoilState(AtomCurrentPage);
//   const [searchValue, SetSearchValue] = useRecoilState<{value: string,isClick:boolean}>(AtomSearchValue);

//   const handleClick = () => {
//     if(!searchValue.value) return toast('검색어를 입력해주세요.', {type:"warning"})
//     SetSearchValue({...searchValue , isClick:true})   
//   }

  return (
    <S.HeaderWapper>  
      <S.LeftWapper>
        <Link href="/">TIM</Link>
      </S.LeftWapper>
      { 
        <S.CenterWapper>
          {/* <input type="text" value={searchValue.value} onChange={(e) => SetSearchValue({...searchValue,value:e.target.value})}  placeholder="검색어를 입력해주세요"  */}
          {/* onKeyDown={(e:any) => {if (e.key === 'Enter'){handleClick()}}} */}
          {/* /> */}
          <input type="text"  placeholder="Search" />
          <label >o</label>
        </S.CenterWapper>
      }
      <S.RightWapper>
      </S.RightWapper>
    </S.HeaderWapper>
  )
}

export default Header