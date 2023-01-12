import React from "react";
import Head from "next/head";
import { NextPage } from "next";

const Shead: NextPage<{seoTitle : string}> = ({seoTitle}) => {
  return (
        <Head>
        <title>{`TIM | ${seoTitle}`}</title>
        <meta name="description" content="TIM"/>
        <meta name="author" content="hawnbinyoo"/>
        <meta name="keyword" content="frontend, react"/>
        </Head>
    )
}

export default Shead