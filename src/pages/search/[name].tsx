import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { Header, Shead } from "../../common";
import { Home } from "../../components";
import { listProps } from "../../types";
import CustomAxios from "../../utils/lib/CustomAxios";

export const SearchPage:NextPage<{list:listProps[]}> = ({list}) => {
  return (
    <>
      <Shead seoTitle={'검색페이지'} />
      <Header />
      <Home list={list}/>
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
    const name = ctx?.params?.name as string

    try {
      const {data} = await CustomAxios.post(`/${process.env.NEXT_PUBLIC_NOTION_DATABASE_ID}/query`,{
        "filter": {
          "property": "Name",
          "title":{
              "contains":name
          }   
      }
      });
      const list = data.results
      
      return {
        props: {
          list
        },
      };
    } catch (e) {
      console.log(e);
      return { props: {} };
    }
}

export default SearchPage