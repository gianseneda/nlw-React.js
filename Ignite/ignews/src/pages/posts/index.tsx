import styles from "./styles.module.scss";
import Head from "next/head";
import { GetStaticProps } from "next";
import Prismic from "@prismicio/client";
import { getPrismicClient } from "../../services/prismic";

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>
      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="#">
            <time>12 de março de 2021</time>
            <strong>Utilizando Path Mapping no TypeScript</strong>
            <p>
              Lidar com importação de arquivos em uma aplicação de médio a
              grande porte com Node.js é trabalhoso. A IDE às vezes não é auto
              suficiente e começa a bugar nessa hora. Temos também o problema do
              "SlashPathHell": ../../../path/to/file.js, onde colocamos várias
              "../" para descer ou subir de nível nos diretórios.
            </p>
          </a>
          <a href="#">
            <time>12 de março de 2021</time>
            <strong>Utilizando Path Mapping no TypeScript</strong>
            <p>
              Lidar com importação de arquivos em uma aplicação de médio a
              grande porte com Node.js é trabalhoso. A IDE às vezes não é auto
              suficiente e começa a bugar nessa hora. Temos também o problema do
              "SlashPathHell": ../../../path/to/file.js, onde colocamos várias
              "../" para descer ou subir de nível nos diretórios.
            </p>
          </a>
          <a href="#">
            <time>12 de março de 2021</time>
            <strong>Utilizando Path Mapping no TypeScript</strong>
            <p>
              Lidar com importação de arquivos em uma aplicação de médio a
              grande porte com Node.js é trabalhoso. A IDE às vezes não é auto
              suficiente e começa a bugar nessa hora. Temos também o problema do
              "SlashPathHell": ../../../path/to/file.js, onde colocamos várias
              "../" para descer ou subir de nível nos diretórios.
            </p>
          </a>
        </div>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const response = await prismic.query(
    [Prismic.predicates.at("document.type", "Post")],
    {
      fetch: ["Post.title", "Post.content"],
      pageSize: 100,
    }
  );

  console.log(JSON.stringify(response, null, 2));

  return {
    props: {},
  };
};
