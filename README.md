# ru-unesp-admin
Projeto de TCC - Interface web para adição de cardápio e outras funções relacionadas ao RU.

Projeto em andamento com previsão de término para Dezembro/2017.

# Instalação

1. Necessário possuir [node.js](https://nodejs.org/en/) e o [Angular CLI](https://github.com/angular/angular-cli)

2. Clonar o repositórioe instalar as dependências do `npm`
```
git clone https://github.com/luizcieslak/ru-unesp-admin.git
cd ru-unesp-admin
npm install
```

3. Criar um `environment.ts` dentro da pasta `src/environments` . Em seguida, adicionar as seguintes informações:
```
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase:{
    apiKey: "AIzaSyDBehRyedcZh1tRknKB_H1Foz52n-sGmE0",
    authDomain: "unespru-test.firebaseapp.com",
    databaseURL: "https://unespru-test.firebaseio.com",
    projectId: "unespru-test",
    storageBucket: "unespru-test.appspot.com",
    messagingSenderId: "1034227533456"
  }
};
```

4. Para executar, execute o comando `ng serve` no terminal dentro da pasta `ru-unesp-admin`.

# Licença

Este software segue as regras da GNU General Public License v3.0. [ver mais](https://www.gnu.org/licenses/gpl-3.0.en.html)
