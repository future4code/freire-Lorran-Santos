enum ROLE {
  ADMIN = 'admin',
  USER = 'user',
}
type Usuario = {
  name: string;
  email: string;
  role: ROLE;
};

const usuarios: Usuario[] = [
  { name: 'Rogério', email: 'roger@email.com', role: ROLE.USER },
  { name: 'Ademir', email: 'ademir@email.com', role: ROLE.ADMIN },
  { name: 'Aline', email: 'aline@email.com', role: ROLE.USER },
  { name: 'Jéssica', email: 'jessica@email.com', role: ROLE.USER },
  { name: 'Adilson', email: 'adilson@email.com', role: ROLE.USER },
  { name: 'Carina', email: 'carina@email.com', role: ROLE.ADMIN },
];

const listaAdmins = (arr: Usuario[]): string[] => {
  const admins: Usuario[] = arr.filter((item) => {
    if (item.role === ROLE.ADMIN) {
      return item.email;
    }
  });
  const emailsAdmins: string[] = admins.map((item) => item.email);
  return emailsAdmins;
};

console.log(listaAdmins(usuarios));
