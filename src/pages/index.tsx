import CustomAxios from "../utils/lib/CustomAxios";
export default function Home({list}) {
  return (
    <>
      
    </>
  )
}

export async function getStaticProps() {
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