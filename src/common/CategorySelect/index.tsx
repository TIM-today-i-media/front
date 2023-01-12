import { CategorySelectProps } from "../../types/common";
import * as S from "./styled";

const CategorySelect = ({name,onClick,isClick}:CategorySelectProps) => {
    return(
        <S.Wrapper style={{color:isClick ? "#77A0DF":"#353535"}} onClick={onClick}>
            {name}
        </S.Wrapper>
    )
}

export default CategorySelect