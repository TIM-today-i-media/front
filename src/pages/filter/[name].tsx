import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { Header } from "../../common";
import { Home } from "../../components";
import { listProps } from "../../types";
import CustomAxios from "../../utils/lib/CustomAxios";

export const FilterPage:NextPage<{list:listProps[]}> = ({list}) => {
  return (
    <>
      <Shead seoTitle={'메인페이지'} />
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
    const names = ctx?.params?.name as string
    const ArrayNames = names.split(" ");
    let objectArray:object[] = []
    ArrayNames.map((i) => {
      if(i === "영화" || i === "드라마"){
        objectArray.push({
          "property": "Tag",
          "select": {
              "equals": i,
          },
        })
      }
      else {
        objectArray.push({
          "property": "Category",
          "multi_select": {
            "contains": i,
          },
        })
      }
      })

    try {
      const {data} = await CustomAxios.post(`/${process.env.NEXT_PUBLIC_NOTION_DATABASE_ID}/query`,{
        "filter": {
            "and": objectArray
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

export default FilterPage