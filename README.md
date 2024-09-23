This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

Sauvegarde de l'historique car localstorge qui va nous permettre de sauvegarder nos echange avec le chat bot 

## fine tuning

Le fine-tuning permet de cibler les réponses d'une IA. Par exemple, sans entraînement spécifique, si vous demandez à une IA sur un site de vente de perceuses une marque de chaussures, elle pourrait répondre par des marques comme Nike ou Adidas. Cependant, avec un tableau de données d'entraînement, on peut indiquer à l'IA de répondre uniquement dans le domaine des perceuses. Dans ce cas, elle indiquera simplement que la demande ne correspond pas à son domaine, qui est axé sur les perceuses.

## Gemini et ses reponse

J'ai donné comme instruction de répondre de manière familière et simplement, aussi je lui ai donné comme reponse des suggestion de manga . Je lui ai donné une instruction.

## Erreur Rencontrer 

En terme d'erreur si on pose une question trop vite au bot cela va ramner a une erreur mais une fois charger a nouveau la page cela disparait et quand on pose trop de question la page descend toute seul mais seulement quand l'historique est plein.


## Explication du projet 

j'ai develloper uen ia avec une base de gemini pour quelle puisse me repondre sur les mangas j'y est ajouter un prompt et le fine tuning par la suite je lui ai appliquer des consignes pour quelle ne reponde exclusivement au sujet choisi et de maniere amical, j'ai choisi ce sujet en particulier car il est assez large de choix et permet a l'ia d'y repondre de maniere brievement pour les solutions apporter sont la faciliter et les reponse simple que l'ia va donner, les resultats sont plus tôt pas mal elle repond clairement au questions poser, pour les perspectives d'améliorations il faut ameliorer le css pour lui donner une meilleujr verison de chatbot et integrer les autres forme de manga tel que les animes et light novel.

## Les techonologies Utiliser

Pour les technologie utiliser nous avons L'API de Gemini qui va nous permettre de crée notre ia ensuite j'ai utliser Next.js et react pour faire le travail j'ai utliser Next.js pour une gestion centraliser et il permet de créer des applications web rapide et optimiser pour le SEO et j'ai tuliser React pour une gestion efficace et dynamiques.