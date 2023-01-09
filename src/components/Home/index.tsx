import { ListBox } from "../../common"
import { listProps } from "../../types"

const Home = ({list}:{list:listProps[]}) => {
    return (
        <>
            {
                list.map((i,index) => (
                    <>
                        <ListBox
                            key={index}
                            cover={i.cover}
                            properties={i.properties}
                        />
                    </>
                ))
            }
        </>
    )
}

export default Home