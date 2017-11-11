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

3. Criar um arquivo na pasta raiz chamado `firebase-config.ts`. Em seguida, adicionar as seguintes informações:
```
export const FirebaseConfig = {
    apiKey: "AIzaSyDBehRyedcZh1tRknKB_H1Foz52n-sGmE0",
    authDomain: "unespru-test.firebaseapp.com",
    databaseURL: "https://unespru-test.firebaseio.com",
    projectId: "unespru-test",
    storageBucket: "unespru-test.appspot.com",
    messagingSenderId: "1034227533456"
};
```

4. Para executar, execute o comando `ng serve` no terminal dentro da pasta `ru-unesp-admin`.

# Licença

Este software segue as regras da GNU General Public License v3.0. [ver mais](https://www.gnu.org/licenses/gpl-3.0.en.html)
