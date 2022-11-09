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






