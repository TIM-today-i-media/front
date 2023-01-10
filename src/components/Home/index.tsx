import { ListBox } from "../../common"
import { listProps } from "../../types"
import * as S from "./styled";

const Home = ({list}:{list:listProps[]}) => {
    return (
        <>
            {
                list.map((i,index) => (
                    <>
                        <ListBox
                            key={index}
                            cover={i.cover}
                            title={i.properties.Name.title[0]?.text.content}
                            category={i.properties.Category.multi_select}
                        />
                    </>
                ))
            }
        </>
    )
}

export default Home