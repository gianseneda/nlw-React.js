import { RepositoryItem } from "./RepositoryItem";
import { useState, useEffect } from "react";
import "../styles/repositories.scss";

//useEffect dispara função quando algo acontece na aplicação, por exemplo

// https://api.github.com/orgs/rocketseat/repos

export function RepositoryList() {
  const [repositories, setRepositories] = useState([]); //estado inicial é uma lista, no caso, vazia, então []

  useEffect(() => {
    fetch("https://api.github.com/orgs/rocketseat/repos")
      .then((response) => response.json())
      .then((data) => setRepositories(data));
  }, []); //função e quando executar (neste caso, quando houver mudança no array repositories) - NUNCA deixar sem o último parâmetro pois ele vai executar em loop

  return (
    <section className="repository-list">
      <h1>Lista de Repositórios</h1>
      <ul>
        {repositories.map((repository) => {
          return (
            <RepositoryItem key={repository.name} repository={repository} />
          );
        })}
      </ul>
    </section>
  );
}

//key é necessário no MAP para que ele se localize melhor com uma chave única. Nesse caso, o nome é sempre único
