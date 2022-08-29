# Exercício 1 

CREATE TABLE Actor	(
	id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);
-- a) id é um varchar porque pode ser uma sequencia de números e letras
--  name é um varchar por ser uma string, date é usado para o tipo data e gender
--  é um varchar por ser uma string de 6 caracteres



-- b) O comando SHOW DATABASES serve para visualizar as bases de dados existentes já 
-- O comando SHOW TABLES serve para visualizar as tabelas de dados existentes no banco
-- de dados

SHOW DATABASES;
SHOW TABLES;

-- c) O comando DESCRIBE mostra a descição completa da tabela, mostrando os tipos de dados
-- de cada coluna

DESCRIBE Actor;

# Exercício 2
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES ( "001", "Tony Ramos", 400000, "1948-08-25", "male");

-- a)
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES ( "002", "Glória Pires", 1200000, "1963-08-23", "female");

DELETE FROM Actor WHERE id = "001";
SELECT * FROM Actor;

-- b) Entrada duplicada '002' de chave 'Primária'

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES ( "002", "Teste", 100000, "1963-08-23", "female");

-- c) valor da coluna não combina com o valor  da linha 1
INSERT INTO Actor (id, name, salary)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

-- d) Campo 'name' não tem um valor pré definido
INSERT INTO Actor (id, salary, birth_date, gender)
VALUES(
  "004",
  400000,
  "1949-04-18", 
  "male"
);

-- e) Valor data incorreto: '1950' da coluna 'birth_date' (data sem aspas)
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  1979-03-26, 
  "female"
);

-- f) Criar mais atores
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004", 
  "Antônio Fagundes",
  400000,
  "1949-04-18", 
  "male"
);
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);

# Exercício 3
SELECT * FROM Actor;
SELECT id, salary FROM Actor;
SELECT id, name FROM Actor WHERE gender = "male";

-- a)
SELECT * FROM Actor WHERE gender = "female";

-- b) 
SELECT salary FROM Actor WHERE name = "Tony Ramos";

-- c) 
SELECT * FROM Actor WHERE gender = "invalid";

-- d)
SELECT id, name, salary FROM Actor WHERE salary <= 500000;

-- e) Coluna 'nome' desconhecida na 'lista de campos'
SELECT id, nome from Actor WHERE id = "002";

# Exercício 4
-- a) mostra a tabela onde o elemento da coluna "name" começa com a letra A ou J e que tenha o salário
-- maior que 300000
SELECT * FROM Actor WHERE name LIKE "A%" OR name LIKE "J%" AND salary > 300000;

-- b) 
SELECT * FROM Actor WHERE name NOT LIKE "A%" AND salary > 350000.00;

-- c)
SELECT * FROM Actor WHERE name LIKE "%G%" OR name LIKE "%g%";

-- d)
SELECT * FROM Actor 
WHERE name LIKE "%A%" OR name LIKE "%a%" OR name LIKE "%G%" OR name LIKE "%g%" AND
salary BETWEEN 350000 AND 900000;

# Exercício 5
-- a)
CREATE TABLE filmes (
	id VARCHAR(250) PRIMARY KEY,
	name VARCHAR(250) NOT NULL,
    sinopsis TEXT NOT NULL,
    release_date DATE NOT NULL,
    imdb FLOAT NOT NULL
);

INSERT INTO filmes (id, name, sinopsis, release_date, imdb)
VALUES (
"004",
 "Tropa de Elite",
 "Nascimento, capitão da Tropa de Elite do Rio de Janeiro, é designado para chefiar uma das equipes que tem como missão apaziguar o Morro do Turano. Ele precisa cumprir as ordens enquanto procura por um substituto para ficar em seu lugar. Em meio a um tiroteio, Nascimento e sua equipe resgatam Neto e Matias, dois aspirantes a oficiais da PM. Ansiosos para entrar em ação e impressionados com a eficiência de seus salvadores, os dois se candidatam ao curso de formação da Tropa de Elite.",
 "2007-10-05",
 8
 );
 SELECT * FROM filmes;
 
# Exercício 6
-- a)
SELECT id, name, imdb FROM filmes WHERE id = 004;

-- b) 
SELECT * FROM filmes WHERE name = "Tropa de Elite";

-- c)
SELECT id, name, sinopsis FROM filmes WHERE imdb >= 7;

# Exercício 7
-- a)
SELECT * FROM filmes WHERE name = "%vida%";

-- b)
SELECT * FROM filmes
WHERE name LIKE "%A%" OR sinopsis LIKE "%PRECISA%";

-- c)
SELECT * FROM filmes
WHERE release_date < "2022-08-22";

-- d)
SELECT * FROM filmes 
WHERE name LIKE "%b%" OR sinopsis LIKE "%VIDA%" AND imdb > 7;

