# Exercício 1

### A-
```sql
ALTER TABLE Actor DROP COLUMN salary;
```
Esse comando elimina o valor **salary**.

### B-
```sql
ALTER TABLE Actor CHANGE gender sex VARCHAR(6);
```
Esse comnado altera o nome do valor de **gender** para **sex**.

### C-
```sql
ALTER TABLE Actor CHANGE gender gender VARCHAR(255);
```
Esse comando altera a quantidade de caracteres do valor **gender**.

### D-
```sql
  ALTER TABLE Actor CHANGE gender gender VARCHAR(100);
```

# Exercício 2
### A-
```sql
UPDATE Actor
SET 
	name = "Moacyr Franco",
	birth_date = "2022-06-02"
WHERE id = "003";
```
### B-
```sql
UPDATE Actor
SET name = "JULIANA PAES"
WHERE id = "006";
```
```sql
UPDATE Actor
SET name = "Juliana Paes"
WHERE id = "006";
```

### C-
```sql
UPDATE Actor
SET 
	name = "Murilo Benício",
	salary = 800000,
	birth_date  = "1980-03-15",
	gender = "male"
WHERE id = "005";
```
# Exercício 3

### A-
```sql
DELETE FROM Actor WHERE name = "Fernanda Montenegro";
```

### B-
```sql
DELETE FROM Actor WHERE gender = "male" AND salary > 1000000;
```
