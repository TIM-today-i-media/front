import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import HomeDetail from "../components/HomeDetail";
import { listProps } from "../types";
import CustomAxios from "../utils/lib/CustomAxios";

export const HomeDetailPage:NextPage<{detailData:listProps}> = ({detailData}) => {
  return (
    <>
      <HomeDetail data={detailData} />
    </>
  )
}
export const getStaticPaths: GetStaticPaths = () => {
    return {
      paths: [],
      fallback: true,
    };
  };

export const getStaticProps:GetStaticProps  = async (ctx) => {
    const name = ctx?.params?.name
    
    try {
      const {data} = await CustomAxios.post(`/${process.env.NEXT_PUBLIC_NOTION_DATABASE_ID}/query`,{
        "filter": {
            "property": "Name",
            "title":{
                "equals":name
            }   
        }
      });
      const detailData = data.results[0]

      return {
        props: {
          detailData
        },
      };
    } catch (e) {
      console.log(e);
      return { props: {} };
    }
}

export default HomeDetailPage