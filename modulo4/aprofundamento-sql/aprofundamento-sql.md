SELECT * FROM Actor;

DESCRIBE Actor;

SET SQL_SAFE_UPDATES = 0;

# Exercício 1 
-- a) Deleta a coluna 'salary' da tabela Actor

-- b) Altera a coluna de 'gender' para 'sex' sendo uma string de 6 caracteres

-- c) Altera a coluna o tipo da coluna 'gender' para o tipo varchar de 255 caracteres

-- d) Alterar o tipo da coluna gender para varchar de 100 caracteres

ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

# Exercício 2
-- a) Escreva uma query que atualize o nome e a data de nascimento do ator com o id 003

UPDATE Actor 
SET name = "Alguma coisa", birth_date = "1929-10-20"
WHERE id = "003";

-- b) Escreva uma query que atualize o nome da atriz Juliana Paes para JULIANA PAES
-- Então, escreva outra query para voltar ao nome anterior.

UPDATE Actor 
SET name = "JULIANA PAES"
WHERE name = "Juliana Paes";

UPDATE Actor 
SET name = "Juliana Paes"
WHERE name = "JULIANA PAES";

-- c) Escreva uma query que atualize todas as informações do ator com o id 005

UPDATE Actor
SET name = "Kakaroto", salary = "8000", birth_date = "1984-01-01", gender = "sayajin"
WHERE id = "005";

-- d) Escreva uma query em que você tente atualizar um dado da tabela que não existe
-- (com um id inválido, por exemplo). Teste, anote e explique o resultado.
-- 0 linhas afetadas

UPDATE Actor 
SET name = "Teste"
WHERE id = "100";


-- a) Escreva uma query que apague a atriz com o nome Fernanda Montenegro

DELETE FROM Actor WHERE name = "Fernanda Montenegro";

-- b) Escreva uma query que apague todos os atores (do gênero male) com o salário maior
-- do que R$1.000.000,00

DELETE FROM Actor WHERE gender = "male" AND salary > 1000000;


# Exercício 4

-- a) Escreva uma query que pegue o maior salário de todos os atores e atrizes

SELECT MAX(salary) FROM Actor;

-- b) Escreva uma query que pegue o menor salário das atrizes
SELECT MIN(salary) FROM Actor WHERE gender = "female";

-- c) Escreva uma query que pegue a quantidade de atrizes
SELECT COUNT(*) FROM Actor WHERE gender = "female";

-- d) Escreva uma query que pegue a soma de todos os salários
SELECT SUM(salary) FROM Actor;


# Exercício 5

-- a) Releia a última query. Teste-a. Explique o resultado com as suas palavras
-- Conta quantos atores tem de cada genero e agrupa eles ex: 
-- 2 male | 2 female

-- b) Faça uma query que retorne somente o id e o nome dos atores em ordem decrescente alfabética
SELECT id, name FROM Actor
ORDER BY name ASC;

-- C) Faça uma query que retorne todos os atores ordenados pelo salário
SELECT * FROM Actor
ORDER BY salary ASC;

-- d) Faça uma query que retorne os atores com os três maiores salarios
SELECT name FROM Actor
ORDER BY salary DESC
LIMIT 3;

-- e) Faça uma query que retorne a média de salário por gênero
SELECT gender, AVG(salary) FROM Actor
GROUP BY gender;


# Exercício 6
SELECT * FROM filmes;

-- a) Altere a tabela de Movie e adicione um novo parâmetro: playing_limit_date que indique
-- a data limite em que o filme será passado no cinema. 
ALTER TABLE filmes
ADD playing_limit_date DATE ;

-- b) Altere a tabela de Movie para que o parâmetro rating possa aceitar valores não inteiros,
-- como, por exemplo, uma avaliação 8.5.
ALTER TABLE filmes
CHANGE imdb imdb FLOAT NOT NULL;



-- c) Atualize dois filmes de tal forma que tenhamos um que ainda esteja em cartaz e um que já tenha saído
UPDATE filmes
SET playing_limit_date = "2007-11-01"
WHERE name = "Tropa de Elite";

UPDATE filmes 
SET playing_limit_date = "2022-10-15"
WHERE id = "001";

-- d) Delete algum dos filmes, mas guarde o id. Tente fazer uma query para atualizar a sinopse desse filme
-- que você acabou de deletar (usando o mesmo id). Anote o resultado e explique.
-- 0 Linhas afetadas pois não encontrou a linha coerente com o id sugerido

DELETE FROM filmes WHERE id = "002";

UPDATE filmes 
SET sinopsis = "Teste de sinopse"
WHERE id = "002";






