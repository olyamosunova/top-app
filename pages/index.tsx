import React, {useState} from "react";
import {Htag, Button, P, Tag, Rating} from "../components";
import {withLayout} from "../layout/Layout";
import {GetStaticProps} from "next";
import axios from "axios";
import {MenuItem} from "../interfaces/menu.interface";

function Home({menu} : HomeProps): JSX.Element {
    const [rating, setRating] = useState<number>(4);

  return (
    <>
      <Htag tag={'h1'}>Текст</Htag>
        <Button
            appearance="primary"
            arrow="right"
        >Кнопка</Button>
        <Button appearance="ghost" arrow="down">Кнопка</Button>
        <P size="s">Всем привет</P>
        <P>Всем привет</P>
        <P size="l">Всем привет</P>
      <Tag size="s">Ghost</Tag>
      <Tag size="m" color="red">Red</Tag>
      <Tag size="s" color="green">Green</Tag>
      <Tag color="primary">Primary</Tag>
      <Tag color="grey">Grey</Tag>
        <Rating rating={rating} isEditable={true} setRating={setRating} />
    </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
    const firstCategory = 0;
    const {data: menu} = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
        firstCategory
    });

    return {
        props: {
            menu,
            firstCategory
        }
    };
};

interface HomeProps extends Record<string, unknown> {
    menu: MenuItem[];
    firstCategory: number;
}
