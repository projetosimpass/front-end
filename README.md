# SimPASSFE

**SimPASSFE** é a interface de front-end de um sistema de gerenciamento de eventos, desenvolvido com **Angular 18.1.2**. Esta aplicação facilita a criação e gerenciamento de eventos, oferecendo uma plataforma completa para organizadores e participantes, com funções que permitem a criação de eventos, venda de ingressos, pesquisa de eventos e compra de ingressos.

## Funcionalidades

- **Criação de Eventos**: Organizadores podem criar eventos personalizados com título, descrição, data, local, e preços de ingressos.
- **Gestão de Ingressos**: Ferramenta para gerenciar a venda de ingressos, definir quantidades e valores, além de acompanhar as vendas em tempo real.
- **Compra de Ingressos**: Participantes podem visualizar eventos, filtrar por localização ou categoria e realizar a compra de ingressos via diferentes métodos de pagamento.
- **Autenticação**: Login seguro com suporte para OAuth 2.0 (Google, Facebook).
- **Notificações**: Sistema de notificação para lembrar os participantes sobre eventos futuros ou alterações importantes.
- **Sistema de Check-in**: Check-in rápido via QR Code para gerenciar a entrada no evento.

---

## Servidor de Desenvolvimento

Para rodar o projeto em modo de desenvolvimento, execute o comando:
```bash
ng serve
```

## Servidor de Desenvolvimento

Para rodar o projeto em modo de desenvolvimento, execute o comando `ng` serve. Depois, acesse `http://localhost:4200/` no navegador. A aplicação recarregará automaticamente sempre que houver alterações no código-fonte.

## Geração de Componentes

Para gerar novos componentes, utilize o comando:
```bash
ng generate component component-name
```
Você também pode criar diretivas, pipes, serviços, classes, guards, interfaces, enums e módulos usando comandos semelhantes.

## Compilação

Para compilar o projeto, execute `ng build`. Os artefatos da build serão armazenados no diretório `dist/`.

## Mais Informações

Para mais detalhes sobre o Angular CLI, utilize ng help ou visite a página [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli)

## Lembrando

Para vocês conseguirem fazer commit do seu trabalho, ira precisar criar uma branch com seu nome. e fazer a pull request.
