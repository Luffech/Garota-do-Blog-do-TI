// lib/posts.ts

export interface Post {
  slug: string;
  title: string;
  summary: string;
  content: string;
  date: string;
}

const posts: Post[] = [
  {
    slug: "primeiro-post",
    title: "Meu Primeiro Escândalo com Next.js",
    summary: "Queridinhos, ouvi dizer que um certo alguém teve seu primeiro contato com a elite. E parece que foi amor à primeira vista.",
    content: "Spotted: um novo dev se rendendo aos encantos do Next.js. Dizem por aí que o sistema de roteamento e a renderização no servidor são tão eficientes que tornam qualquer aplicação absurdamente rápida e popular. Será que esse romance vai durar? Eu estarei observando.",
    date: "15 de Setembro, 2025",
  },
  {
    slug: "server-vs-client-components",
    title: "Server vs. Client: A Batalha dos Componentes",
    summary: "A fofoca da vez no App Router é a rivalidade do ano. De que lado você está?",
    content: "Parece que a alta sociedade do Next.js está dividida. De um lado, os Server Components, discretos e poderosos, buscando dados direto do cofre. Do outro, os Client Components, cheios de interatividade e drama, brilhando no navegador. A questão é: quem realmente manda no pedaço? Escolha seu lado com sabedoria.",
    date: "14 de Setembro, 2025",
  },
  {
    slug: "estilizando-com-tailwind",
    title: "O Segredo do Look Perfeito: Tailwind CSS",
    summary: "Achou que aquele design impecável era sorte? Pense de novo. Descobri o segredo por trás das interfaces mais cobiçadas.",
    content: "Alguns nascem com estilo, outros usam Tailwind. A última tendência é abandonar o CSS tradicional e se vestir com classes utilitárias diretamente no HTML. É prático, é rápido, é o segredo para um visual moderno e consistente que vai deixar todos os outros frameworks com inveja. Cuidado, CSS, seu reinado pode estar ameaçado.",
    date: "13 de Setembro, 2025",
  },
];

export function getAllPosts(): Post[] {
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug);
}