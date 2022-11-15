# Exercício 1

### A- 
**VARCHAR(n)**: É uma string com no máximo N de caracteres.

**Date**: É a representação de datas no formato (YYYY-MM-DD).

### B-
O comando **show databases** mostra as datas.
O comando **show tables** mostra uma tabela.

### C-
O comando **DESCRIBE** serve para verificar estrutura de tabelas e tipos de campos.

# Exercício 2

### A-
```sql
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Glória Pires",
  1200000,
  "1963-08-23", 
  "female"
);
```
### B-
ID que já existe e se ele é primary key:
os **ID** são únicos.

### C- 
A contagem de colunas não corresponde à contagem de valores na linha. Eu adicionei os valores  **birth_date, gender** que estavam faltando, eu só não entendi poque que eu tive que mudar o ID!

### D- 
Ficou faltando o valor de **name** a tabela tem o **NOT NULL** que deixa o valor **name** obrigatório. Eu acrecentei o valor de **name**.

### E- 
A data estava sem as aspas. Eu coloquei as aspas.

### F-
```sql
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "007", 
  "Barbara Borges",
  100000,
  "1980-10-21", 
  "female"
);
```

```sql
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "008", 
  "Tarciso Meira",
  650000,
  "1933-01-06", 
  "male"
);
```

# Exercício 3

### A-

```sql
SELECT * FROM Actor WHERE gender = "female"
```

### B-
```sql
SELECT * FROM Actor WHERE name = "Tony Ramos"
```
### C-
```sql
SELECT * FROM Actor WHERE gender = "NULL"
```
O valor **gender** é obrigatório, portanto não existe nenhum inválido.

### D-
```sql
SELECT id, name FROM Actor where salary = 500000 or salary > 500000;
```

### E- 
O valor nome não existe, e sim **name**, então eu corrigi e ficou assim:
```sql
SELECT id, name from Actor WHERE id = "002";
``` 

# Exercício 4

### A-
```sql
SELECT * FROM Actor
WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000
```
Essa query seleciona todos os atores e filtra apenas os atores onde os nomes começam com a letra A ou J através do comparador **LIKE** e **OR**, depois usa o operador lógico **AND** para selecionar os atores com salário maior que 300000.

### B-
```sql
SELECT * FROM Actor
WHERE name NOT LIKE "A%" AND salary > 350000
```
### C-
```sql
SELECT * FROM Actor
WHERE name LIKE "%G%" OR "%g%"
```
### D-
```sql
SELECT * FROM Actor
WHERE 
	(name LIKE "%g%" OR name LIKE "%G%" OR name LIKE "%a%" OR name LIKE "%A%")
  AND salary BETWEEN 350000 AND 900000;
```
# Exercício 5

### A-
```sql
CREATE TABLE Movie (
	id VARCHAR(255) PRIMARY KEY,
    title VARCHAR(255) NOT NULL UNIQUE,
    synopsis TEXT NOT NULL,
    release_Date DATE NOT NULL,
    rating INT NOT NULL
)
```
Essa tabela de filmes tem um **id** com 255 caracteres no máximo, e mais 4 valores obrigatórios sendo o valor **title** também com no máximo de 255 caracteres.

### B-
```sql
INSERT INTO Movie (id, title, synopsis, release_date, rating)
VALUES(
  "001", 
  "Se Eu Fosse Você",
  "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
  "2006/01/06", 
  7
  );
```
### C-
```sql
INSERT INTO Movie (id, title, synopsis, release_date, rating)
VALUES(
  "002", 
  "Doce de mãe",
  "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
  "2012/12/27", 
  10
);
```
### D-
```sql
INSERT INTO Movie (id, title, synopsis, release_date, rating)
VALUES(
	"003", 
	"Dona Flor e Seus Dois Maridos",
	"Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
	"2017/11/02", 
	8
  );
```
### E-
```sql
INSERT INTO Movie (id, title, synopsis, release_date, rating)
VALUES(
	"004", 
	"A Vida é Bela",
	"Durante a Segunda Guerra na Itália, o judeu Guido e seu filho Giosué são levados para um campo de concentração nazista. Afastado da mulher, ele tem que usar sua imaginação para fazer o menino acreditar que estão participando de uma grande brincadeira, com o intuito de protegê-lo do terror e da violência que os cercam.",
	"1999/02/05", 
	10
  );
```





