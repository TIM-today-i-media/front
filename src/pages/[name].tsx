import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { listProps } from "../types";
import CustomAxios from "../utils/lib/CustomAxios";

export const HomeDetailPage:NextPage<{data:listProps}> = ({data}) => {
  return (
    <>
      {/* <Home list={list}/> */}
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
      console.log(data);

      return {
        props: {
          data
        },
      };
    } catch (e) {
      console.log(e);
      return { props: {} };
    }
}

export default HomeDetailPage