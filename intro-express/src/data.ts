type Post = {
  postId: number;
  title: string;
  body: string;
};

type User = {
  userId: number;
  name: string;
  phone: string;
  email: string;
  website: string;
  post: Post[];
};

export const users: User[] = [
  {
    userId: 1,
    name: "Fulano",
    phone: "(00) 9999-9999",
    email: "email@email.com",
    website: "siteOriginal.com.br",
    post: [
      {
        title: "titulo",
        body: "Aqui é um post",
        postId: 110,
      },
    ],
  },
  {
    userId: 2,
    name: "Ciclano",
    phone: "(99) 9999-0000",
    email: "email@email.com",
    website: "siteNaoOriginal.com.br",
    post: [
      {
        title: "titulo do Post",
        body: "Aqui é um post sobre games",
        postId: 112,
      },
      {
        title: "titulo do Post",
        body: "Aqui é um post de games",
        postId: 112.2,
      },
    ],
  },

  {
    userId: 3,
    name: "Beltrano",
    phone: "(55) 1234-8765",
    email: "email@email.com",
    website: "siteFalso.com.br",
    post: [{ title: "titulo", body: "Animes existem nesse post", postId: 113 }],
  },
  {
    userId: 4,
    name: "Alano",
    phone: "(18) 5678-1234",
    email: "email@email.com",
    website: "TentativaDeSite.com.br",
    post: [{ title: "titulo", body: "Apenas Forza Horizon", postId: 114 }],
  },
];
