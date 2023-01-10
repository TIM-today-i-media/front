import { GetStaticProps, NextPage } from "next";
import { Home } from "../components";
import { listProps } from "../types";
import CustomAxios from "../utils/lib/CustomAxios";

export const HomePage:NextPage<{list:listProps[]}> = ({list}) => {
  return (
    <>
      <Home list={list}/>
    </>
  )
}

export const getStaticProps:GetStaticProps  = async () => {
  try {
      const {data} = await CustomAxios.post(`/${process.env.NEXT_PUBLIC_NOTION_DATABASE_ID}/query`,{});
      console.log(data.results);
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

export default HomePage