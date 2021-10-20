import axios from "axios";

/*
- Recebrr o codigo via string
- Recuperar o access_token no github
- Verificar se o Usuário existe no banco de DB
- ----- SIM = Gera um toker
- ----- NAO = Cria no DB, gera um token
- Retornar o token com as infos do usuário loggado
*/

class AuthenticateUserService {
  async execute(code: string) {
    const url = "https://github.com/login/oauth/access_token";

    const response = await axios.post(url, null, {
      params: {
        client_id: process.env.GITHUB_CLIENT_ID,
        client_secret: process.env.GITHUB_CLIENT_SECRET,
        code,
      },
      headers: {
        Accept: "application/json",
      },
    });

    return response.data;
  }
}

export { AuthenticateUserService };
