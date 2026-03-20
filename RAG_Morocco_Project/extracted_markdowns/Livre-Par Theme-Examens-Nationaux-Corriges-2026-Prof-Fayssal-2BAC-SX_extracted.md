

<!-- Page 1 -->

```
# PROF FAYSSAL
## Examens nationaux
### Corrigés par thèmes
- Suites numériques de 2011 à 2025
- Géométrie de l’espace 2011 à 2025
- Nombres complexes de 2011 à 2025
- Calcul de Probabilités de 2011 à 2025
- Calcul d’Intégrales de 2011 à 2025
- Fonction logarithme de 2011 à 2025
- Fonction exponentielle 2011 à 2025

Deuxième bac sciences PC/SVT/ST  
PROF FAYSSAL  
0681399067  
Collection FMATHS  
```

<!-- Page 2 -->

```markdown
# شروط استعمال الكتاب (PDF) :

> هذا الكتاب يستعمل للتدريس داخل القسم أو المراجعة والتحضير الشخصي.
> يمنع مشاركة الكتاب أو أجزاء منه داخل مجموعات كيف ما كان نوعها.
> يمنع استعمال الكتاب لأغراض تجارية أو إعادة بيعه.

---

* Hors du cadre de la classe, aucune reproduction, même partielle, ne peut être faite de ce livre sans l'autorisation.
```

<!-- Page 3 -->

```markdown
# Prof Fayssal

## Résumés de cours sur les suites numériques 
### Deuxième bac sciences PC /SVT/SE

Prof fayssal  
0681399067  
Prof Fayssal
```

<!-- Page 4 -->

```markdown
# Préparation à l’examen national du baccalauréat  
**Fiche 06 : Suite numérique**  
**Prof : FAYSSAL**  
**Page : 07**  

## 0) Raisonnement par récurrence
Soit $n_0$ un entier fixé et un entier naturel  
Pour montrer la proposition $\forall n \geq n_0 : P(n)$  
On suit le principe de récurrence suivant :  
- Pour $n = n_0$ on vérifie que $P(n)$ est vraie,  
- Soit $n$ un entier fixé tel que $n \geq n_0$  
On suppose que $P(n)$ est vraie  
Et on montre que $P(n + 1)$ est vraie  
Alors $\forall n \geq n_0 : P(n)$ devient vraie  

## 1) Suite croissante ; décroissante
$(U_n)_{n \in \mathbb{N}}$ une suite de premier terme $U_0$  
$$ U_{n + 1} - U_n > 0 \quad (U_n) \text{ est croissante} $$  
$$ U_{n + 1} - U_n < 0 \quad (U_n) \text{ est décroissante} $$  
$$ U_{n + 1} - U_n = 0 \quad (U_n) \text{ est constante} $$  

**Résultat**  
$(U_n) \text{ est croissante alors } \forall n \in \mathbb{N}: U_n \geq U_0$  
$(U_n) \text{ est décroissante alors } \forall n \in \mathbb{N}: U_n \leq U_0$  

## 2) Suite majorée ; minorée ; bornée
- $U_n \geq a \quad (U_n)$ est minorée par $a$  
- $U_n \leq b \quad (U_n)$ est majorée par $b$  
- $a < U_n < b \quad (U_n)$ est bornée  

## 3) Suite convergente
Si $$ \lim_{n \to +\infty} U_n = L \in \mathbb{R} $$ on dit que la suite $(U_n)$ est convergente sinon elle est divergente  
- Toute suite croissante et majorée est convergente  
- Toute suite décroissante et minorée est convergente  

## 4) Limites des suites usuelles
$$ \lim_{n \to +\infty} n = +\infty $$  
$$ \lim_{n \to +\infty} n^2 = +\infty $$  
$$ \lim_{n \to +\infty} \sqrt{n} = +\infty $$  
$$ \lim_{n \to +\infty} n^p = +\infty ; \; p \in \mathbb{N}^* $$  
$$ \lim_{n \to +\infty} \frac{1}{n} = 0 $$  
$$ \lim_{n \to +\infty} \frac{1}{n^2} = 0 $$  
$$ \lim_{n \to +\infty} \frac{1}{n^p} = 0 ; \; p \in \mathbb{N}^* $$  

## 5) Limite de la suite géométrique $(q^n)$
- $-1 < q < 1 \Rightarrow \lim_{n \to +\infty} q^n = 0$  
- $q > 1 \Rightarrow \lim_{n \to +\infty} q^n = +\infty$  
- $q < -1 \Rightarrow (q^n)$ n’admet pas de limite  

## 6) Suite géométrique - arithmétique
$(U_n)_{n \in \mathbb{N}}$ une suite de premier terme $U_0$ et $p$ un entier tel que $0 \leq p \leq n$  
### $(U_n) \text{ géométrique}$
Définition :  
$$ U_{n + 1} = q U_n $$  

En fonction de $n$ :  
$$ U_n = U_p \times q^{n - p} $$  

Cas particulier :  
$$ U_n = U_0 \times q^n $$  

**Somme des termes**  
$$ S_n = U_p + \ldots + U_n = U_p \frac{1 - q^{n - p + 1}}{1 - q} $$  

Cas particulier :  
$$ S_n = U_0 + \ldots + U_n = U_0 \frac{1 - q^{n + 1}}{1 - q} $$  

### $(U_n) \text{ arithmétique}$
Définition :  
$$ U_{n + 1} = U_n - r $$  

En fonction de $n$ :  
$$ U_n = U_p + (n - p) r $$  

Cas particulier :  
$$ U_n = U_0 + nr $$  

**Somme des termes**  
$$ S_n = U_p + \ldots + U_n = \frac{(n - p + 1)(U_p + U_n)}{2} $$  

Cas particulier :  
$$ S_n = U_0 + \ldots + U_n = \frac{(n + 1)(U_0 + U_n)}{2} $$  

## 7) Limite d’une suite et l’ordre
- $V_n < U_n$  
- $$ \lim_{n \to +\infty} V_n = +\infty $$  
- $$ \lim_{n \to +\infty} V_n = -\infty $$  
- $$ U_n < V_n < W_n $$  
- $$ \lim_{n \to +\infty} V_n = l $$  
- $$ \lim_{n \to +\infty} |U_n - l| < V_n $$  
- $$ \lim_{n \to +\infty} U_n = l $$  

## 8) La suite $(V_n)$ définit par : $V_n = f(U_n)$  
Si la fonction $f$ est continue en $l$ et  
$$ \lim_{n \to +\infty} U_n = l \quad \lim_{n \to +\infty} V_n = f(l) $$  

## 9) La suite $(U_n)$ liée à une fonction $f$, définie par : $U_{n + 1} = F(U_n)$  
$f$ une fonction définie sur un intervalle $I$ et $(U_n)$ une suite telle que $\forall n \in \mathbb{N}: U_{n + 1} = F(U_n)$  
Alors si :  
- La fonction $f$ est continue sur $I$ et $f(I) \subset I$  
- La suite $(U_n)$ est convergente et $U_0 \in I$  
Alors la limite de la suite $(U_n)$ est une solution de l’équation $f(x) = x$ dans $I$  
```

<!-- Page 5 -->

```markdown
# Examens nationaux corrigés Suites numériques deuxième bac sc PC/SVT/ST

Examens nationaux corrigés de 2011 à 2025 Suites numérique

Deuxième bac sciences PC/SVT/ST

## Partie 3 :

Examens nationaux

Suites numériques

Collection FMATHS  
Prof fayssal  
www.elboutkhili.jimdofree.com
```

<!-- Page 6 -->

```markdown
# Examens nationaux
## Suites corrigées de 2011 à 2025 

### Exercice (Examen 2025-Session-Normal)
On considère la fonction numérique $f$ définie sur $]0,+\infty[$ par : $f(x) = x - \frac{(\ln x)^2}{x}$

- La fonction $f$ est strictement croissante sur $]0;+\infty[$.
- Soit $(u_n)$ la suite numérique définie par : $u_0 = e$ et $u_{n+1} = f(u_n)$ pour tout $n \in \mathbb{N}$.

1) Montrer par récurrence que $1 < u_n$ pour tout $n \in \mathbb{N}$.

2a) Montrer que la suite $(u_n)$ est décroissante. (On utilise la question Partie II-3-c)

b) En déduire que la suite $(u_n)$ est convergente.

c) Déterminer la limite de la suite $(u_n)$.

---

### Exercice 01 (Examen 2024-Session-Normal)
Soit la suite $(u_n)$ définie par :
$$
u_0 = 4 \quad \text{et} \quad u_{n+1} = \frac{4u_{n-2}}{1+u_n}
$$

1 a) Vérifier que $u_{n+1} = 4 - \frac{6}{1+u_n}$, pour tout entier naturel $n$.

b) Montrer par récurrence que $2 \leq u_n \leq 4$, pour tout entier $n$.

2 a) Montrer que $u_{n+1} - u_n = \frac{(u_{n-1})(2-u_n)}{1+u_n}$, pour tout entier $n$.

b) Montrer que la suite $(u_n)$ est décroissante et déduire que $(u_n)$ est convergente.

3) Soit $(v_n)$ la suite numérique définie par :
$$
v_n = \frac{2-u_n}{u_n}
$$
pour tout entier naturel $n$.

a) Montrer que $(v_n)$ est une suite géométrique de raison $\frac{2}{3}$.

b) Montrer que $u_n = 1 + \left( \frac{1}{3} \right)^n$, pour tout entier naturel $n$.

c) Calculer la limite de la suite $(u_n)$.

---

### Exercice (Examen 2025-Session-Rattrapage)
Soit la suite $(u_n)$ définie par : $u_0 = \frac{3}{2}$ et $u_{n+1} = \frac{3u_n + 2}{2+u_n}$, pour tout entier naturel $n$.

1 a) Vérifier que $u_{n+1} = 3 - \frac{4}{2+u_n}$, pour tout entier naturel $n$.

b) Montrer par récurrence que $0 < u_n < 2$, pour tout entier naturel $n$.

2 a) Montrer que $u_{n+1} - u_n = \frac{(1+u_n)(2-u_n)}{2+u_n}$, pour tout entier naturel $n$.

b) Montrer que la suite $(u_n)$ est croissante et en déduire que $(u_n)$ est convergente.

c) Montrer que $0 < 2 - u_{n+1} \leq \frac{2}{7} (2 - u_n)$, pour tout entier naturel $n$.

d) Déduire que $0 < 2 - u_n \leq \frac{1}{2} (2 - u_0)$, pour tout entier naturel $n$.

e) Déterminer la limite de la suite $(u_n)$.

---

### Exercice 2 (Examen 2024-Session-Rattrapage)
Soit la fonction $g : x \mapsto \frac{x}{1+x}$ définie sur l'intervalle $]-1; +\infty[$.

- $g(x) \leq x$, pour tout $x \geq -1; +\infty[$.
- La fonction $g$ est strictement croissante sur $]-1; +\infty[$.

Soit $(u_n)$ une suite numérique définie par $u_0 = 1$ et la relation $u_{n+1} = g(u_n)$ pour tout $n \in \mathbb{N}$.

a) Montrer par récurrence que $\forall n \in \mathbb{N}: 0 < u_n \leq 1$.

b) Montrer que la suite $(u_n)$ est décroissante.

c) En déduire que la suite $(u_n)$ est convergente.

d) Déterminer la limite de $(u_n)$.
```

<!-- Page 7 -->

```markdown
# Examens nationaux
## Suites corrigées de 2011 à 2025

### Exercice 03 (Examen 2023-Session-Normal)
Soit $f$ la fonction définie sur $]0, +\infty[$ par  
$$ f(x) = 2 - \frac{2}{x} + (1 - \ln x)^2 $$  
$f$ est strictement croissante sur $[α; 1]$ avec $(α \in ]0, 3[)$

L'équation $f(x)$ admet deux solutions  
$α \in 1 sur ]0, -\infty[$  
$$ \forall x \in [α; 1]: f(x) - x \ge 0 $$

Soit $(u_n)$ la suite numérique définie par : $u_0 ∈ [α; 1[$ et $u_{n+1} = f(u_n)$ pour tout $n ∈ \mathbb{N}$  
a) Montrer par récurrence que $α < u_n < 1$ pour tout $n ∈ \mathbb{N}$  
b) Montrer que la suite $(u_n)$ est croissante  
c) En déduire que la suite $(u_n)$ est convergente et calculer sa limite

### Exercice 04 (Examen 2023- rattrapage)
Soit $(u_n)$ une suite tel que  
$u_0 = 0$ pour tout $n \in \mathbb{N}, u_{n+1} = \frac{u_{n - 2}}{2u_n + 5}$

1) Montrer par récurrence que $(\forall n ∈ \mathbb{N}): u_n > -1$  
2) Montrer que la suite $(u_n)$ est décroissante puis déduire qu'elle est convergente  
3) Pour tout $n ∈ \mathbb{N}$ on pose : $v_n = \frac{3}{u_{n+1}}$  
a) Montrer que $(v_n)$ est une suite arithmétique de raison 2  
b) Calculer $u_n$ en fonction de $n$ pour tout $n ∈ \mathbb{N}$ puis déterminer sa limite  
4) Pour tout $n ∈ \mathbb{N}$ on pose $w_n = 2^{-v_n}$ et  
$$ S_n = w_0 + w_1 + \cdots + w_n $$  
a) Montrer que $(w_n)$ est une suite géométrique et déterminer sa raison et son premier terme.  
b) Calculer la limite de la somme $S_n$

### Exercice 05 (Examen 2022-Session-Normal)
Soit la fonction $f$ définie sur $\mathbb{R}$ par :  
$$ f(x) = x \left( e^{x^2} - 1 \right) $$  
La fonction $f$ est strictement croissante sur $[0; \ln 4]$  
$$ \forall x \in [0; \ln 4]: f(x) - x \le 0 $$

### Exercice 06 (Examen 2022- Rattrapage)
Soit $(u_n)$ la suite numérique définie par  
$$ u_0 = 2 \text{ et } u_{n+1} = \frac{\sqrt{2}}{2} u_n + \frac{2 - v}{2} $$ pour tout $n ∈ \mathbb{N}$  
1) a) Montrer que pour tout $n ∈ \mathbb{N}, u_n > 1$  
b) Montrer que pour tout $n ∈ \mathbb{N}$,  
$$ u_{n+1} - \frac{\sqrt{2}}{2} (u_n - 1) $$ et déduire que la suite $(u_n)$ est décroissante et convergente.  
2) On pose pour tout $n ∈ \mathbb{N}, v_n = u_n - 1$  
a) Montrer que $(v_n)$ est une suite géométrique et déterminer sa raison et son premier terme.  
b) Écrire $u_n$ en fonction de $n$ puis déduire la limite de $(u_n)$.  
3) Calculer la somme  
$$ S = u_0 + u_1 + u_2 + \ldots + u_{2021} $$

### Exercice 07 (Examen 2021-Session-Normal)
Soit $(U_n)$ la suite numérique définie par :  
$U_0 = \frac{1}{2}$ et $U_{n+1} = \frac{U_n}{3 - 2U_n}$ pour tout $n ∈ \mathbb{N}$  
1) Calculer $U_1$  
2) Montrer par récurrence pour tout $n ∈ \mathbb{N}$ que $0 < U_n < \frac{1}{2}$  
3) a) Montrer pour tout $n ∈ \mathbb{N}$ que $U_{n+1} < \frac{1}{2}$  
b) En déduire la monotonie de la suite $(U_n)$  
4) a) Montrer pour tout $n ∈ \mathbb{N}$ que $0 < U_n \le \left(\frac{1}{2}\right)^{n+1}$ puis calculer la limite de la suite $(U_n)$
```

<!-- Page 8 -->

```markdown
# Examens nationaux
## Suites corrigées de 2011 à 2025
### 2 Bac sciences PC/SVT/ST
#### PAGE 3

- Prof FAYSAL : 06813939067
- Prof fayssal

---

**Exercice 08 (Examen 2021 -Rattrapage)**  
On considère la suite $(U_n)$ définie par :  
$$ U_{n+1} = \frac{1}{4} U_n \quad \text{et } U_0 = \frac{1}{3} \quad \text{pour tout } n \in \mathbb{N}. $$  
1) Montrer que $n \in \mathbb{N} : 0 < U_n < 1$  
2) a) Montrer que $\forall n \in \mathbb{N} : U_{n+1} = \frac{(U_n - 1)^2}{3 - U_n}$  
b) Montrer que $(U_n)$ est convergente  
3) On pose pour tout $n \in \mathbb{N} : V_n = \frac{1}{U_n}$  
a) Montrer que $(V_n)$ est une suite arithmétique, en déterminant sa raison et son premier terme.  
b) Déterminer $V_n$ en fonction de $n$ et déduire que $\forall n \in \mathbb{N} : U_n = \frac{n+1}{n+3}$  
c) Calculer la limite de $(U_n)$  
Déterminer la plus petite valeur de $n$ pour que $U_n \geq \frac{1011}{1012}$.

---

**Exercice 09 (Examen 2020 -Session-Normal)**  
Soit $(U_n)$ la suite numérique définie par :  
$$ U_0 = \frac{3}{2} \quad \text{et } U_{n+1} = \frac{2 U_n}{2 U_n + 5} $$  
1) Calculer $U_1$  
2) Montrer par récurrence pour tout $n \in \mathbb{N}$ que $U_n > 0$.  
3)a) Mq pour tout $n \in \mathbb{N} : 0 < U_{n+1} < \frac{2}{5} U_n$  
b) Calculer $lim \, U_n$  
4) Soit la suite $(V_n)$ la suite numérique définie par :  
$$ V_n = \frac{4 U_n}{2 U_n + 3} \quad \text{pour tout n} \in \mathbb{N}. $$  
5)a) Montrer que $(V_n)$ est une suite géométrique de raison $\frac{2}{5}$.  
b) Déterminer $V_n$ en fonction de $n$ et évaluer $U_n$ en fonction de $n$.

---

**Exercice 10 (Examen 2020 -Rattrapage)**  
Soit $(U_n)$ la suite définie par : $U_0 = 1$ et  
$$ U_{n+1} = \frac{3 U_{n-8}}{2 U_{n-5}} \quad \text{pour tout } n \in \mathbb{N}. $$  
1) Montrer que $U_n < 2$ pour tout $n \in \mathbb{N}$.  
2) On pose $V_n = U_{n-3} - 2$ pour tout $n \in \mathbb{N}$.  
a) Montrer que $(V_n)$ est une suite arithmétique de raison 2.  
b) Exprimer $V_n$ en fonction de $n$ puis exprimer $U_n$ en fonction de $n$.  
c) Calculer la limite de la suite $(U_n)$.

---

**Exercice 11 (Examen 2019 -Session-Normal)**  
Soit $f$ la fonction numérique définie sur $[0; +\infty[$ par :  
$$ f(x) = x + \frac{1}{2} - \ln x + \frac{1}{2} (\ln x)^2 $$  
> La fonction $f$ est strictement croissante sur $[1; e]$.  
Soit $(u_n)$ une suite numérique définie par :  
$$ u_0 = 1 \quad \text{et } u_{n+1} = f(u_n) \quad \text{pour tout n} \in \mathbb{N}. $$  
1.a) Montrer par récurrence que $1 \leq u_n \leq e$ pour tout $n \in \mathbb{N}$.  
b) Montrer que la suite $(u_n)$ est croissante.  
c) Déduire que la suite $(u_n)$ est convergente.  
2. Calculer la limite de la suite $(u_n)$.

---

**Exercice 12 (Examen 2016 -Session-Normal)**  
On considère la suite numérique $(u_n)$ définie par :  
$$ u_0 = 2 \quad \text{et } u_{n+1} = \frac{3 u_n}{5 - u_n} \quad \text{pour tout n} \in \mathbb{N}. $$  
1) Vérifier que $u_{n+1} - 3 = \frac{4 (u_n - 3)}{2 + (3 - u_n)}$ pour tout $n \in \mathbb{N}$.  
2) Soit $(v_n)$ la suite numérique définie par :  
$$ v_n = \frac{u_n - 1}{3 - u_n} $$  
a) Montrer que $(v_n)$ est une suite géométrique de raison $\frac{1}{2}$ et en déduire que $v_n = \left( \frac{1}{2} \right)^{n}$.  
b) Montrer que $u_n = 1 + \frac{3v_n}{1 + v_n}$ puis exprimer $u_n$ en fonction de $n$.  
3) Déterminer la limite de la suite numérique $(u_n)$.
```

<!-- Page 9 -->

```markdown
# Examens nationaux
## Suites corrigées de 2011 à 2025

### Prof FAYSAL : 0681399067
#### Prof fayssal

### Exercice 13 (Examen 2015- Rattrapage)
On considère la suite numérique $(U_n)$ définie par : 
$$ U_0 = 4 \quad et \quad U_{n+1} = \frac{2}{5} U_n + 3 $$

1) Montrer par récurrence que $U_n < 5$ pour tout $n \in \mathbb{N}$.

2) Vérifier que : $U_{n+1} - U_n = \frac{3}{5} (5 - U_n)$ pour tout $n \in \mathbb{N}$ et en déduire que la suite $(U_n)$ est croissante.

3) En déduire que la suite $(U_n)$ est convergente.

4) Soit $(V_n)$ la suite numérique telle que $y_n = 5 - U_n$ pour tout $n$ 
   a) Montrer que $(V_n)$ est une suite géométrique de raison $\frac{2}{5}$ et exprimer $V_n$ en fonction de $n$.
   
   b) En déduire $U_n = 5 - \left(\frac{2}{5}\right)^n$ pour tout $n \in \mathbb{N}$ puis calculer la limite de $(U_n)$.

### Exercice 14 (Examen 2014- Rattrapage)
On considère la suite numérique $(u_n)_{n \in \mathbb{N}}$ définie par : 
$$ u_1 = 5 \quad et \quad u_{n+1} = \frac{5u_n - 4}{1 + u_n} \quad pour tout n \in \mathbb{N} $$

1. Montrer par récurrence que : $u_n > 2$ pour tout $n$ de $\mathbb{N}$.

2. On considère la suite numérique $(v_n)_{n \in \mathbb{N}}$ définie par : 
$$ v_n = \frac{3}{u_{n-2}} \quad pour tout n \in \mathbb{N} $$
   a. Montrer que $v_{n+1} = \frac{1 + u_n}{u_n - 2}$ pour tout $n \in \mathbb{N}$, puis montrer que la suite $(v_n)_{n \in \mathbb{N}}$ est une suite arithmétique de raison 1.
   
   b. Exprimer $v_n$ en fonction de $n$ et en déduire que : $u_n = 2 + \frac{3}{n}$ pour tout $n \in \mathbb{N}$.

   c. Déterminer $\lim_{n \to +\infty} u_n$.

### Exercice 15 (Examen 2013- Session Normale)
Soit $(U_n)_{n \in \mathbb{N}}$ la suite numérique définie par : 
$$ U_1 = 0 \quad et \quad U_{n+1} = \frac{25}{10 - U_n} $$ pour tout $n \in \mathbb{N}$.

### Exercice 16 (Examen 2013- Rattrapage)
On considère la suite numérique $(u_n)$ définie par : 
$$ u_{n+1} = \frac{1}{5} u_n + \frac{4}{5} \quad et \quad u_0 = 2 $$

1) Vérifier que : $u_{n+1} - 1 = \frac{1}{5} (u_n - 1)$ pour tout $n \in \mathbb{N}$.
   
2) a) Montrer par récurrence que : $u_n > 1$ pour tout $n \in \mathbb{N}$.
   
   b) Montrer que la suite $(u_n)$ est décroissante.

   c) En déduire que la suite $(u_n)$ est convergente.

3) Soit $(v_n)$ la suite numérique telle que : $v_n = u_n - 1$ pour tout $n \in \mathbb{N}$
   a) Montrer que $(v_n)$ est une suite géométrique de raison $\frac{1}{5}$ et exprimer $v_n$ en fonction de $n$.
   
   b) En déduire que $u_n = \left(\frac{1}{5}\right)^n + 1$ pour tout $n \in \mathbb{N}$ puis calculer la limite de la suite $(u_n)$.
```

<!-- Page 10 -->

```markdown
# Offre préparation concours 2026 – Prof Fayssal
- Plus 20 séances en vidéos de préparation Médecine
- Plus 20 séances en vidéos pour ENSA-ENSAM-UM6P
- Nouvelle offre à partir de mois 6 avec des séances en directes et interactives
- Deux livres de préparation Médecine-ENSA-ENSAM contenant des astuces, plus de 20 concours blancs corrigés et la correction des anciens concours

Pour participer : 0681399067

---
### تفاصيل خاصة بكلية الطب (20 حصة) على فيسبوك للرجوع إليها
- تفاصيل لمباريات ENSM – UM6P – ENSA (20 حصة)
- كتابتان شاملتان في الرياضيات مع تصحيحات مفصلة وتمارين نوعية + تصحيح
- العرض وحصص مباشرة يومياً ابتداءً من شهر 6 لمدة 6 دقائق
0681399067 للتواصل :
```


<!-- Page 11 -->

```markdown
# Examens nationaux
## Suites corrigées de 2011 à 2025
### 2 Bac sciences PC/SVT/ST
#### PAGE 5

### Exercice (Examen 2025-Session-Normal)

On considère la fonction numérique $f$ définie sur $]0,+\infty[$ par : $f(x) = x - \frac{(\ln x)^{2}}{x}$

- La fonction $f$ est strictement croissante sur $]0 ; +\infty[$
- $f(x) \leq x$ pour tout $x \in ]0,+\infty[$

Soit $(u_n)$ la suite numérique définie par : $u_0 = e$ et $u_{n+1} = f(u_n)$ pour tout $n \in \mathbb{N}$.

1) Montrer par récurrence que $1 < u_n$ pour tout $n \in \mathbb{N}$.

2a) Montrer que la suite $(u_n)$ est décroissante. (On utilise la question Partie II-3-c)

b) En déduire que la suite $(u_n)$ est convergente.

c) Déterminer la limite de la suite $(u_n)$.

La suite $(u_n)$ est définie par :  
$u_0 = e$ et $u_{n+1} = f(u_n)$ pour tout $n \in \mathbb{N}$  
et $f$ est continue sur $]1,+\infty[$  
donc $u_0 \in ]1,+\infty[$, alors la limite de $(u_n)$ est convergente  
et la suite $(u_n)$ est la solution dans l'intervalle $[1,+\infty[$ de l'équation $f(x) = x$.  
On a  
$$ f(x) = x \Leftrightarrow \frac{(\ln x)^{2}}{x} = x $$  
$$ \Rightarrow (\ln x)^{2} = 0 $$  
$$ \Rightarrow \ln x = 0 $$  
$$ \Leftrightarrow x = 1 $$

Et comme $1 \in [1,+\infty[$ alors $\lim_{n \to +\infty} u_n = 1$.

### Exercice (Examen 2025-Session-Rattrapage)

Soit la suite $(u_n)$ définie par : $u_0 = \frac{3}{2}$ et  
$$ u_{n+1} = \frac{3u_n + 2}{2 + u_n}, $$ pour tout entier naturel $n$.

1)a) Vérifier que $u_{n+1} = \frac{3 - \frac{4}{2+u_n}}$, pour tout entier naturel $n$.

b) Montrer par récurrence que $0 < u_n < 2$, pour tout entier naturel $n$.

2a) Montrer que $u_{n+1} = \frac{(1+u_n)(2-u_n)}{2+u_n}$, pour tout entier naturel $n$.

b) Montrer que la suite $(u_n)$ est croissante et en déduire que $(u_n)$ est convergente.

c) Montrer que $0 < 2 - u_n \leq \frac{2}{7}(2 - u_n)$, pour tout entier naturel $n$.

d) Déduire que $0 < 2 - u_n \leq \frac{2}{7}(2)^{n}$, pour tout entier naturel $n$.

e) Déterminer la limite de la suite $(u_n)$.

### Solution de l'exercice
Soit $(u_n)$ la suite numérique définie par :  
$u_0 = e$ et $u_{n+1} = f(u_n)$ pour tout $n \in \mathbb{N}$.  
1) Montrer par récurrence que $1 < u_n$ pour tout $n \in \mathbb{N}$.

Pour $n = 0$ on a $u_0 = e$ donc $u_0 > 1$.  
Soit $n \in \mathbb{N}$ supposons que $u_n > 1$ et montrons que $u_{n+1} > 1$.  
D'après (HR) on a $u_n > 1$ et comme la fonction $f$ est strictement croissante sur $\mathbb{R}$ alors $f(u_n) > f(1)$ donc $u_{n+1} > f(1) = 1$.  
D'où $\forall n \in \mathbb{N}, \; u_n > 1$.  
Par conséquent la suite $(u_n)$ est décroissante.
```

<!-- Page 12 -->

```markdown
## Examens nationaux
### Suites corrigées de 2011 à 2025
#### 2 Bac sciences PC/SVT/ST 
#### PAGE 6

### Correction de l'exercice
Soit la suite $(u_n)$ définie par : $u_0 = \frac{3}{2}$ et 

$$ u_{n+1} = \frac{3u_n^2 + 2u_n + 4}{2 + u_n}, \quad \text{pour tout entier naturel } n $$

1) a) Vérifier que $u_{n+1} = 3 - \frac{4}{2 + u_n}$, pour tout entier naturel $n$.

Soit $n$ un entier naturel.

1ère méthode

Soit $n \in \mathbb{N}$, on a :

$$ 3 = \frac{4}{2 + u_n} = \frac{3(2 + u_n) - 4}{2 + u_n} = u_{n+1} $$

2ème méthode

$$ u_{n+1} = \frac{3u_n + 6 - 6}{2 + u_n} = \frac{3u_n}{2 + u_n} $$

$$ = \frac{3(u_n - 2) + 6 = 3 - 2 - 2 + u_n} $$

3ème méthode

$$ u_{n+1} - 3 + \frac{4}{2 + u_n} $$

2) a) Montrer que $u_{n+1} - u_n = \frac{(1 + u_n)(2 - u_n)}{2 + u_n}$, pour tout entier naturel $n$.

Soit $n \in \mathbb{N}$:

$$ u_{n+1} - u_n = \frac{(1 + u_n)(2 - u_n)}{2 + u_n} $$

Et on a :

$$ (1 + u_n)(2 - u_n) > 0 \Rightarrow (1 + u_n) > 0 \text{ et } 2 - u_n > 0 $$

b) Montrer que la suite $(u_n)$ est croissante et en déduire que $(u_n)$ est convergente.

#### Rappel : Suite croissante ; décroissante
- $u_{n+1} - u_n > 0 \Rightarrow (U_n)$ est croissante
- $u_{n+1} - u_n < 0 \Rightarrow (U_n)$ est décroissante
- $u_{n+1} - u_n = 0 \Rightarrow (U_n)$ est constante
- Toute suite croissante et majorée est CV
- Toute suite décroissante et minorée est CV

Soit $n \in \mathbb{N}$.

On a $u_{n+1} - u_n = \frac{(1 + u_n)(2 - u_n)}{2 + u_n}$

Et on a : $0 < u_n < 2 \Rightarrow (1 + u_n) > 0; (2 - u_n) > 0$

Donc la suite $(u_n)$ est croissante.

Puisque la suite $(u_n)$ est croissante et majorée par 2, alors elle est convergente.
```

<!-- Page 13 -->

```markdown
# Examens nationaux
## Suites corrigés de 2011 à 2025
### 2 Bac sciences PC/SVT/ST
#### PAGE 7

c) Montrer que $0 < 2 - u_{n+1} \leq \frac{2}{7} (2 - u_n)$, 
pour tout entier naturel n

On a $\forall n \in \mathbb{N}, 0 < u_n < 2 (d'après 1.b).$  
Donc $0 < u_{n+1} < 2.$  
D'où $\forall n \in \mathbb{N}, 2 - u_{n+1} > 0.$

Montrons que $\forall n \in \mathbb{N}: 2 - u_{n+1} \leq \frac{2}{7} (2 - u_n)$  
1ère méthode (Encadrement)  
Soit $n \in \mathbb{N}$ on a:  
$$2 - u_{n+1} = 2 - \frac{3u_n + 2}{2 + u_n} = \frac{2 - u_n}{2 + u_n}$$  
Comme la suite $(u_n)$ est croissante, alors $\forall n \in \mathbb{N}, u_n \geq u_0$ donc $\forall n \in \mathbb{N}, u_n \geq \frac{3}{2} \Rightarrow \frac{2}{7} \leq \frac{1}{2 + u_n} \leq \frac{2}{7}$  
Donc  
$$2 - u_{n+1} \leq \frac{2}{7} (2 - u_n)$$  

2ème méthode (Différence)  
Soit $n \in \mathbb{N}$ on a:  
$$2 - u_{n+1} = \frac{2}{7} (2 - u_n) = 2 - \frac{3u_n + 2}{2 + u_n} = \frac{2 - u_n}{2 + u_n} = \frac{1}{2 + u_n}$$  
$$ = (2 - u_n)$$  
où $0 < u < 2 < 2 $  
$$\Rightarrow \frac{2 - u_n}{(2 + u_n)} > 0$$  

Comme la suite $(u_n)$ est croissante, alors $\forall n \in \mathbb{N}, u_n \geq u_0$  
Donc $\forall n \in \mathbb{N}, 3 - 2u_n \leq 0.$  
On a alors: $(\forall n \in \mathbb{N}):$  
$$\Rightarrow (3 - 2u_n)(2 - u_n) \geq 7(2 + u_n)$$  

D'où $(\forall n \in \mathbb{N}) 0 < 2 - u_{n+1} \leq \frac{2}{7} (2 - u_n)$  

d) Déduire que $0 < 2 - u_n \leq \frac{1}{2} ( \frac{2}{7})^n$, pour tout entier naturel n  
1ère méthode (Par récurrence)  
On a $\forall n \in \mathbb{N}, 0 < u_n < 2 (d'après 1.b).$  
D'où $u_n \in \mathbb{N}, 2 - u_n > 0$  

Montrons que $\forall n \in \mathbb{N}: 2 - u_n \leq \frac{1}{2} (\frac{2}{7})^n$.  
Pour $n=0$ on a $2 - u_0 = 1 \cdot \frac{1}{2} (\frac{2}{7})^0 = 1$.  
Donc $\frac{1}{2} \leq \frac{1}{2}$ qui est vrai.  
Soit $n \in \mathbb{N}$.

Supposons que : $2 - u_n \leq \frac{1}{2} (\frac{2}{7})^n$.  
Et montrons que : $2 - u_{n+1} \leq \frac{1}{2} (\frac{2}{7})^{n+1}$.  
On a $2 - u_n \leq \frac{1}{2} (\frac{2}{7})^n$  
Donc $\frac{2}{7} (2 - u_n) \leq \frac{1}{2}(\frac{2}{7})^{n+1}$.  
Et d'après la question précédente on a :  
$$2 - u_{n+1} \leq \frac{2}{7} (2 - u_n)$$  

Donc $2 - u_{n+1} \leq \frac{2}{7} (2 - u_n) \leq \frac{1}{2} (\frac{2}{7})^{n+1}$.  
D'où $\forall n \in \mathbb{N}: 2 - u_n \leq \frac{1}{2} (\frac{2}{7})^n$  

2ème méthode (Par télescopage)  
D'après la question précédente on a:  
$$\forall k \in \mathbb{N}: 0 < 2 - u_k \leq \frac{2}{7} \times (2 - u_k).$$  

Alors:  
$k = 0 \Rightarrow 0 < 2 - u_0 \leq \frac{2}{7} (2 - u_1)$  
$k = 1 \Rightarrow 0 < 2 - u_1 \leq \frac{2}{7} (2 - u_2)$  
$k = 2 \Rightarrow 0 < 2 - u_2 \leq \frac{2}{7} (2 - u_3)$  
$k = n \Rightarrow 0 < 2 - u_n \leq \frac{2}{7} (2 - u_n)$.  

En multipliant ces inégalités, on obtient :  
$$ 0 < (2 - u_1)(2 - u_2)(2 - u_3)...(2 - u_n) \leq (\frac{2}{7})^n (2 - u_0)(2 - u_1)(2 - u_2)$$  

D'où $(\forall n \in \mathbb{N}) (3 - 2u_n) \leq 0$  

D'où $(\forall n \in \mathbb{N}) 0 < 2 - u_{n+1} \leq \frac{2}{7} (2 - u_n)$  
```

<!-- Page 14 -->

```markdown
# Examens nationaux
## Suites corrigées de 2011 à 2025
### 2 Bac sciences PC/SVT/ST
#### PAGE 8

0 < $(2 - u_n) \leq ( \frac{7}{2} )^n (2 - u_0)$ (car $ \frac{7}{2} $ apparaît n fois).

D'où $(\forall n \in \mathbb{N}) \: 0 < 2 - u_0 < \frac{1}{2} \left( \frac{7}{2} \right)^n \: \text{car} \: 2 - u_0 = \frac{1}{2}$

e) Déterminer la limite de la suite $(u_n)$

### Rappel:
$$ -1 < q < 1 \implies \lim_{n \to +\infty} q^n = 0 $$
$$ V_n < U_n < W_n $$
$$ \lim_{n \to +\infty} V_n = \lim_{n \to +\infty} W_n = l \implies \lim_{n \to +\infty} U_n = l $$

On a d'après la question précédente $(\forall n \in \mathbb{N}) \: 0 < 2 - u_n \leq \frac{1}{2} \left( \frac{2}{7} \right)^n$

Donc $0 < -\frac{1}{2} \left( \frac{2}{7} \right)^n \to 0$

Alors $$ \lim_{n \to +\infty} \left( 2 - \frac{1}{2} \left( \frac{2}{7} \right)^n \right) = 2 $$

Par conséquent, d'après le théorème des gendarmes on a : $\lim_{n \to +\infty} u_n = 2$.

### Exercice 01 (Examen 2024-Session-Normal)
Soit la suite $(u_n)$ définie par : $u_0 = 4$ et 
$$ u_{n+1} = \frac{4u_{n-2}}{1 + u_n} $$ pour tout entier naturel $n$

1) a) Vérifier que $u_{n+1} = 4 - \frac{6}{1 + u_n}$, pour tout entier naturel $n$ 

b) Montrer par récurrence que $2 \leq u_n \leq 4$, pour tout entier naturel $n$ 

* Pour $n=0$ on a $2 \leq u_0 = 4 \leq 4$ qui est vrai

* Soit $\mathbb{N}$, supposons que $2 \leq u_k \leq 4$ et montrons que $2 \leq u_{k+1} \leq 4$ 

$$ 2 \leq u_k \leq 4 \implies 3 < 1 + u_k < 5 $$
$$ \implies \frac{1}{5} < \frac{1}{1 + u_k} < 1 $$
$$ \implies 6 < 6 < 6 $$
$$ \implies \frac{6}{1 + u_k} < 6 $$

* D'où $2 \leq u_{k+1} < 4$ (car $\frac{14}{5} < 4$)

2) a) Montrer que $u_{n+1} - u_n = \frac{(u_{n-1})(2 - u_n)}{1 + u_n}$,
pour tout entier $n$

b) Montrer que la suite $(u_n)$ est décroissante et déduire que $(u_n)$ est convergente.

3) Soit $(v_n)$ la suite numérique définie par
$$ v_n = \frac{2 - u_n}{1 - u_n} $$ pour tout entier naturel $n$

a) Montrer que $(v_n)$ est une suite géométrique de raison $\left( \frac{2}{3} \right)^2$

b) Montrer que $u_n = 1 + \frac{1}{1 - \left( \frac{2}{3} \right)^{n+1}}$ pour tout $n$

c) Calculer la limite de la suite $(u_n)$.
```

<!-- Page 15 -->

```markdown
# Examens nationaux
## Suites corrigées de 2011 à 2025

### 2 Bac sciences PC/SVT/ST PAGE 9

Soit $n \in \mathbb{N}$, on a :  
$$ u_{n+1} - u_n = \frac{u_{n} - 2}{1 + u_n - u_n} = \frac{4u_n - 2 - u_n(1 + u_n)}{1 + u_n} = 1 + u_n $$  
$$ 4u_n - 2 - u_n - (u_n)^2 = \frac{1 + u_n}{1 + u_n} $$  
$$ = -(u_n)^2 + 3u_n - 2 $$  
$$ = \frac{1 + u_n}{1 + u_n} $$  

D'autre part on a :  
$$ (u_n - 1)(1 - u_n) = \frac{2u_n - (u_n)^2 - 2 + u_n}{1 + u_n} $$  
$$ = \frac{-(u_n)^2 + 3u_n - 2}{1 + u_n} $$  

Donc $u_{n+1} - u_n = \frac{(u_n - 1)(2 - u_n)}{1 + u_n}$ pour tout entier naturel $n$.  

b) Montrer que la suite $(u_n)$ est décroitante et déduire que $(u_n)$ est convergente.  

**Rappel :** Suite croissante ; décroissante  
- $u_{n+1} - u_n > 0 \Rightarrow (U_n)$ est croissante  
- $U_{n + 1} - U_n < 0 \Rightarrow (U_n)$ est décroissante  
- $U_{n + 1} - U_n = 0 \Rightarrow (U_n)$ est constante  
- Toute suite croissante et majorée est CV  
- Toute suite décroissante et minorée est CV  

On a :  
$$ u_{n+1} - u_n = \frac{(u_n - 1)(2 - u_n)}{1 + u_n} $$  

Et on a : $2 < u_n < 4$  
Donc : $1 < u_n - 1 < 3 \Rightarrow u_n - 1 > 0$  
Et $2 < 2 - u_n < 0 \Rightarrow 2 - u_n < 0$  
Alors $(u_n - 1)(2 - u_n) < 0$  
Et puisque : $3 < 1 + u_n < 5 \Rightarrow u_n + 1 > 0$  
Donc $(u_{n-1})(2 - u_n) \leq 0$  

Alors : $(\forall n \in \mathbb{N}) ; u_{n+1} - u_n \leq 0$  
D'où $(u_n)$ est une suite décroitante.  
On a $(u_n)$ est décroissante et minorée par 2 donc la suite $(u_n)$ est convergente.  

3) Soit $(v_n)$ la suite numérique définie par  
$$ v_n = \frac{2 - u_n}{1 - u_n} $$, pour tout entier naturel $n$.  
a) Montrer que $(v_n)$ est une suite géométrique de raison $\frac{2}{3}$  

**Rappel :** Suite géométrique  
Définition : $V_{n+1} = q V_n$  
$v_n$ en fonction de $n : v_n = V_p \cdot q^{n - p}$  

Soit $n \in \mathbb{N}$, on a :  
$$ v_{n+1} = \frac{2 - u_{n+1}}{1 - u_{n+1}} = \frac{2 - (u_{n} - 2)}{1 - u_{n}} = \frac{2(4u_n - 2) - 2(2 + 1)}{2(4 - 2)} = \frac{2}{3} \cdots \frac{(u_n - 1)(2 - u_n)}{(1 + u_n)} $$  

Donc $v_n = v_0 \cdot q^{n} = \frac{2 - u_0}{1 - u_0} = \frac{2}{3}$  
Et on a :  
$$ v_n(1 - u_n) = 2 - u_n $$  
$$ \Rightarrow v_n - v_n \cdot u_n = 2 - u_n $$  
$$ \Rightarrow u_n(1 - v_n) = 2 - v_n $$  
$$ \Rightarrow u_n = 2 - v_n $$  

Donc :  
$$ u_n = 1 + \frac{1}{1 - \left(\frac{2}{3}\right)^{n+1}} $$
```

<!-- Page 16 -->

```markdown
## Examens nationaux
### Suites corrigées de 2011 à 2025
#### 2 Bac sciences PC/SVT/ST
PAGE 10

D'où $(\forall n \in \mathbb{N}); \; u_n = \frac{1}{(2/3)^{n+1}}$

c) Calculer la limite de la suite $(u_n)$.

$$ \lim_{n \to \infty} 1 + \frac{1}{(2/3)^{n+1}} = 1 + 2 = 2 $$
$$ \text{Car } 1 - \frac{2}{3} < 1 < \lim \left( \frac{2}{3} \right)^{n+1} = 0 $$

### Exercice 2 (Examen 2024-Session-Rattrapage)
Soit la fonction $g : x \mapsto \frac{x}{1+x}$ défini sur l'intervalle $[-1; +\infty[$
- $g(x) \leq x, \forall x \in ]-1; +\infty[$
- La fonction $g$ est strictement croissante sur $]-1; +\infty[$

Soit $(u_n)$ une suite numérique définie par $u_0 = 1$ et la relation $u_{n+1} = g(u_n)$ pour $n \in \mathbb{N}$.
a) Montrer par récurrence que $\forall n \in \mathbb{N}: 0 < u_n \leq 1$.
b) Montrer que la suite $(u_n)$ est décroissante.
c) En déduire que la suite $(u_n)$ est convergente.
d) Déterminer la limite de $(u_n)$.

#### Correction de l'exercice
Soit $(u_n)$ une suite numérique définie par $u_0 = 1$ et la relation $u_{n+1} = g(u_n)$ pour tout $n \in \mathbb{N}$.
a) Montrer par récurrence que $\forall n \in \mathbb{N}: 0 < u_n \leq 1$.
- Pour $n=0 \Rightarrow 0 < u_0 = 1 \leq 1$
Donc la proposition est vraie pour $n = 0$
Soit $n \in \mathbb{N}$
- Supposons que $0 < u_n \leq 1$ et montrons que $0 < u_{n+1} \leq 1$.
On a la fonction $g$ est strictement croissante sur l'intervalle $[0;1]$ donc :
$$ 0 < u_n \leq 1 \Rightarrow g(0) < g(u_n) \leq g(1) $$
$$ \Rightarrow 0 < u_{n+1} \leq \frac{1}{2}; \; \text{Car } g(0) = 0 \text{ et } g(1) = \frac{1}{2} $$
$$ \Rightarrow 0 < u_{n+1} \leq 1 \text{ car } 1 < 2 $$

D'après le principe de récurrence, on a :
$$ (\forall n \in \mathbb{N}) : 0 < u_n \leq 1 $$

b) Montrer que la suite $(u_n)$ est décroissante.
On a $\forall x \in [0; 1]; \; g(0) \leq g(x) \leq g(1)$.

### Exercice 03 (Examen 2023-Session-Normal)
Soit $f$ la fonction définie sur $[0; +\infty[$ par $f(x) = 2 - \frac{2}{x} + (1 - \ln x)^2$
- $f$ est strictement croissante sur $[\alpha; 1]$ avec $(\alpha < 0,3)$.
- L'équation $f(x)=x$ admet deux solutions à $1$ sur $[0; +\infty[$.

$$ \forall x \in [\alpha; 1]: f(x) - x \geq 0 $$

Soit $(u_n)$ la suite numérique définie par $u_0 \in [\alpha; 1[ \; et \; u_{n+1} = f(u_n)$ pour tout $n \in \mathbb{N}$.
a) Montrer par récurrence que $\alpha < u_n < 1$ pour tout $n$.
b) Montrer que la suite $(u_n)$ est croissante.
c) En déduire que la suite $(u_n)$ est convergente et calculer la limite.
```

<!-- Page 17 -->

```markdown
# Examens nationaux
## Suites corrigées de 2011 à 2025
### 2 Bac sciences PC/SVT/ST

### Correction de l'exercice
Soit $(u_n)$ une suite numérique définie par :
$$
u_0 \in [\alpha; 1[ \text{ et } u_{n+1} = f(u_n) \text{ pour tout } n \in \mathbb{N}
$$
a) Montrer par récurrence que $\alpha < u_n < 1$ pour tout $n \in \mathbb{N}$

Pour $n=0$ on a $u_0 \in [\alpha; 1[$
La propriété est donc vraie pour $n = 0$

Soit $n$ un entier naturel, 
Supposons que $\alpha < u_n < 1$ et montrons que $\alpha < u_{n+1} < 1$.

On sait que $f$ est strictement croissante sur $[\alpha; 1[$ et $\alpha < u_n < 1$ :
$$
\alpha < u_n < 1 \Rightarrow f(\alpha) < f(u_n) \leq f(1) \Rightarrow \alpha < u_{n+1} \leq 1
$$

D'après le principe de récurrence, on a :
$$
\forall n \in \mathbb{N} : \alpha < u_n < 1
$$

b) Montrer que la suite $(u_n)$ est croissante
On a : $\forall x \in [\alpha; 1[ : f(x) > x$, et $u_n \in [\alpha; 1[$.
Donc on pose $x = u_n$, donc $f(u_n) > u_n$ donc : $u_{n+1} \geq u_n$.

D'où la suite $(u_n)$ est croissante.

c) En déduire que $(u_n)$ est convergente et calculer sa limite.
La suite $(u_n)$ est croissante et majorée par 1 donc elle est convergente.

La fonction $f$ est continue sur l'intervalle $[\alpha; 1[$ ; car elle est dérivable sur $[\alpha; 1[$ 
$$
f(\alpha; 1) = [\alpha; 1[ \subset [\alpha; 1[
$$
$$
u_0 \in [\alpha; 1[
$$
La suite $(u_n)$ est convergente.

Alors la limite de la suite $(u_n)$ est $L$ la solution de l’équation $f(x) = x$ 
$$
f(x) = x \Leftrightarrow f(x) - x = 0 \text{ g}(x) = 0 \Leftrightarrow 1 = \alpha x = \alpha
$$

Et comme la suite $(u_n)$ est croissante
Donc la limite de la suite $(u_n)$ est 1.

---

### Exercice 04 (Examen 2023 - rattrapage)
Soit $(u_n)$ une suite telle que $u_0 = 0 \text{ et } ( \forall n \in \mathbb{N} )$, $u_{n+1} = \frac{u_{n-2}}{2u_n + 5}$

1) Montrer par récurrence que $(\forall n \in \mathbb{N}) : u_n > -1$

2) Montrer que la suite $(u_n)$ est décroissante puis déduire qu’elle est convergeante.

3) Pour tout $n \in \mathbb{N}$ on pose : $v_n = \frac{3}{u_{n+1}}$

a) Montrer que $(v_n)$ est une suite arithmétique de raison 2.
b) Calculer $v_n$ en fonction de $n$ pour tout $n$ dans $\mathbb{N}$ puis déterminer sa limite.

4) Pour tout $n \in \mathbb{N}$ on pose $w_n = e^{3-v_n}$ et $S_n = w_0 + w_1 + \cdots + w_n$
a) Montrer que $(w_n)$ est une suite géométrique et déterminer sa raison et son premier terme.
b) Calculer la limite de la somme $S_n$.

### Correction de l’exercice
Soit $(u_n)$ une suite telle que 
$$
u_0 = 0 \text{ et } (\forall n \in \mathbb{N}), u_{n+1} = \frac{u_{n-2}}{2u_n + 5}
$$
1) Montrer que $(\forall n \in \mathbb{N}) : u_n > -1$.

Rappel : Raisonnement par récurrence
Soit $P(n)$ une proposition telle que $n \geq n_0$.
Pour montrer la propriété $P(n)$ est vraie pour tout entier $n \geq n_0$ :
- Pour $n = n_0$ on vérifie que $P(n_0)$ est vraie.
- Pour un entier fixé tel que $n \geq n_0$ 
On suppose que la proposition $P(n)$ est vraie et on montre que $P(n+1)$ est vraie.

Alors $\forall n \geq n_0 : P(n)$ devient vraie.

* Pour $n=0$ on a $u_0 = 0 > -1$ qui est vrai.
Soit $n \in \mathbb{N}$
Supposons que $u_n > -1$ et montrons que $u_{n+1} > -1$ :
$$
u_{n+1} + 1 = \frac{u_{n-2}}{2u_n + 5 + 1} = \frac{u_{n-2} + 1}{2u_n + 5}
$$
$$
= \frac{3(u_n + 1)}{2u_n + 5}
$$
```

<!-- Page 18 -->

```markdown
# Examens nationaux
## Suites corrigées de 2011 à 2025

### Prof FAYSAL : 0681399067

---

### 3) Pour tout n dans $\mathbb{N}$ on pose : $v_n = \frac{3}{u_{n+1}}$

a) Montrer que $(v_n)$ est une suite arithmétique de raison 2

#### Rappel :

- $(U_n)$ géométrique
- $(U_n)$ arithmétique

Définition : 
- $U_{n+1} = q U_n$
- $U_{n+1} - U_n = r$

Soit $n$ un entier naturel

$$
v_{n+1} - v_n = \frac{3}{u_{n+1} + 1} - \frac{3}{u_n + 1} 
= \frac{3(u_{n+1} + 1) - 3(u_n + 1)}{(u_{n+1}+1)(u_n+1)} 
= \frac{3(u_{n+1} - u_n)}{(u_{n+1}+1)(u_n+1)}
$$

$$
= \frac{2u_n + 5}{u_n + 1} = 2
$$

D'où $(v_n)$ est une suite arithmétique de raison 2

De plus $v_0 = \frac{3}{u_0 + 1} = 3$

b) Calculer $u_n$ en fonction de $n$ pour tout $n$ dans $\mathbb{N}$ puis déterminer la limite

#### Rappel :

- $(U_n)$ géométrique
- $(U_n)$ arithmétique

$U_n$ en fonction de $n$ :
- $U_n = U_p \times q^{n-p}$
- Cas particulier : $U_n = U_0 \times q^n$

Soit $n$ un entier naturel.

On a $(v_n)$ est une suite arithmétique de raison 2 et $v_0 = 3$ donc :

$$
v_n = v_0 + rn = 3 + 2n
$$

Et d'autre part
```

<!-- Page 19 -->

```markdown
# www.elboutkhili.jimdo.com
## Prof FAYSAL : 0681399067
### Prof fayssal

# Examens nationaux
## Suites corrigées de 2011 à 2025
### 2 Bac sciences PC/SVT/ST
#### PAGE 13

### b) Calculer la limite de la somme $S_n$

#### Rappel
$$ (U_n) \text{ géométrique} $$
Somme des termes  
$$ S_n = U_0 + \cdots + U_n = \frac{U_0 (1 - q^{n+1})}{1 - q} $$

$$ (U_n) \text{ arithmétique} $$  
Somme des termes  
$$ S_n = \frac{(n + 1)(U_0 + U_n)}{2} $$

On a $(w_n)$ est une suite géométrique de raison $\frac{1}{e^2}$ et $w_0 = 1$

Donc  
$$ S_n = w_0 + w_1 + \cdots + w_n = w_0 \frac{(1 - q^{n+1})}{1 - q} $$  
$$ = w_0 \left(1 - \left(\frac{1}{e^2}\right)^{n+1}\right) \frac{1}{1 - \frac{1}{e^2}} $$  
$$ = \frac{1 - \left(\frac{1}{e^2}\right)^{n+1}}{1 - \frac{1}{e^2}} $$  
$$ = \frac{e^2}{e^2 - 1} \left(1 - \left(\frac{1}{e^2}\right)^{n+1}\right) $$  

Calculons la limite de $S_n$  
$$ \lim_{n \to +\infty} S_n = \lim_{n \to +\infty} \frac{e^2}{e^2 - 1} \left(1 - \left(\frac{1}{e^2}\right)^{n+1}\right) $$  
$$ = \frac{e^2}{e^2 - 1} $$

Car, $-1 < \frac{1}{e^2} < 1$ donc $\lim_{n \to +\infty} \left(\frac{1}{e^2}\right)^{n+1} = 0$

4) Pour tout $n \in \mathbb{N}$ on pose : $w_n = e^{3-v_n}$ et $S_n = w_0 + w_1 + \cdots + w_n$  

a) Montrer que $(w_n)$ est une suite géométrique et déterminer sa raison et son premier terme  

#### Rappel  
$$ (U_n) \text{ géométrique} $$  
Définition :  
$$ U_{n+1} = q U_n $$  

$$ (U_n) \text{ arithmétique} $$  
Définition :  
$$ U_{n+1} - U_n = r $$  

Soit $n$ un entier naturel  

On a $v_{n+1} - v_n = 2$  
Donc $v_{n+1} = v_n + 2$  
Donc : $w_{n+1} = e^{3-v_{n+1}} = e^{3-(v_n+2)}$  
$$ = e^{3-v_n-2} = e^{3-v_n} \times e^{-2} $$  
$$ = e^{-2} w_n $$  

$$ = \frac{1}{e^2} w_n $$  

Donc $(w_n)$ est une suite géométrique de raison $\frac{1}{e^2}$ et $w_0 = e^{3-v_0} = e^{3-3} = 1$
```

<!-- Page 20 -->

```markdown
# Examens nationaux
## Suites corrigées de 2011 à 2025

### 2 Bac sciences PC/SVT/ST
#### PAGE 14

#### Exercice 05 (Examen 2022-Session-Normal)
Soit la fonction $f$ définie sur $\mathbb{R}$ par : $f(x) = x \left( e^x - 1 \right)^2$

> La fonction $f$ est strictement croissante sur $[0; \ln 4]$
> - $(\forall x \in [0; \ln 4] : f(x) - x \leq 0$
> - Les solutions de l’équation $f(x) = x$ dans IR sont $0$ et $\ln(4)$

Soit $(u_n)$ la suite numérique définie par : 
$$
u_0 = 1 \quad \text{et} \quad u_{n+1} = f(u_n) \quad \text{pour tout } n \in \mathbb{N}
$$
a) Montrer par récurrence que $0 < u_n < 4$ pour tout $n \in \mathbb{N}$  
b) Montrer que la suite $(u_n)$ est décroissante  
c) En déduire que la suite $(u_n)$ est convergente  
d) Calculer la limite de la suite $(u_n)$  

#### Correction de l’exercice  
Soit $(u_n)$ la suite définie par : $u_0 = 1$ et $u_{n+1} = f(u_n)$ pour tout $n$  
a) Montrer par récurrence que $0 < u_n < 4$ pour tout $n \in \mathbb{N}$  
> Pour $n=0$ on a $0 < u_0 = 1 < \ln 4$  
La propriété est donc vraie pour $n = 0$  
> Soit $n$ un entier naturel,  
Supposons que $0 < u_n < 4$ et montrons que $0 < u_{n+1} < ln 4$.  
On sait que la fonction $f$ est strictement croissante sur l’intervalle $]0; \ln 4]$ et $0 < u_n < 4$, donc ;  
$$
0 < u_n < 1 \implies f(0) < f(u_n) < f(\ln 4) \implies 0 < u_{n+1} < 4
$$

D'après le principe de récurrence, on a : $(\forall n \in \mathbb{N} : 0 < u_n < 4)$  
b) Montrer que la suite $(u_n)$ est décroissante  
Soit $n$ un entier naturel,  
On a : $(\forall x \in [0; \ln 4] : f(x) - x \leq 0 \text{ et } u_n \in ]0; \ln 4[$  
Donc on pose $x = u_n$  
On trouve $f(u_n) - u_n \leq 0 \Rightarrow f(u_n) \leq u_n$ donc : $u_{n+1} \leq u_n$ ;  
D'où la suite $(u_n)$ est décroissante  

c) En déduire que la suite $(u_n)$ est convergente.  
La suite $(u_n)$ est décroissante et minorée par $0$ donc elle est convergente.  
d) Calculer la limite de la suite $(u_n)$  
- La fonction $f$ est continue sur l’intervalle $]0; \ln 4[$ ; car elle est dérivable sur $]0; \ln 4[$  
- $f(0); \ln 4) = f(0); \quad f(\ln 4) = 0]; \ln 4[ \subset ]0; \ln 4[$  
- $u_0 = 1 \in ]0; \ln 4[$  
- La suite $(u_n)$ est convergente  
Alors la limite de la suite $(u_n)$ est la solution de l’équation $f(x) = x$  
$$
f(x) \Leftrightarrow f(x) - x = 0 \Leftrightarrow x = 1 \land a,
$$
d'après la question 3b)  
Et comme la suite $(u_n)$ est décroissante alors la limite de la suite $(u_n)$ est $0$

#### Exercice 06 (Examen 2022-Session-Rattrapage)
Soit $(u_n)$ la suite numérique définie par 
$$
u_0 = 2 \quad \text{et} \quad u_{n+1} = \frac{-\sqrt{2}}{2} u_n + \frac{2 - \sqrt{2}}{2} \quad \text{pour tout } n \in \mathbb{N}
$$  
2) a) Montrer que pour tout $n \in \mathbb{N}, \, u_n > 1$  
c) Montrer que pour tout $n \in \mathbb{N}, u_{n+1} - u_n = \frac{-\sqrt{2}-2}{2} (u_{n} - 1)$ et déduire que la suite $(u_n)$ est décroissante et convergente.  
3) On pose pour tout $n \in \mathbb{N}, \, v_n = u_n - 1$  
b) Montrer que $(v_n)$ est une suite géométrique et déterminer sa raison et son premier terme.  
b) Écrire $u_n$ en fonction de $n$ puis déduire la limite de $(u_n)$  
3) Calculer la somme $S = u_0 + u_1 + u_2 + ... + u_{2021}$
```

<!-- Page 21 -->

```markdown
# Examens nationaux
## Suites corrigés de 2011 à 2025
### 2 Bac sciences PC/SVT/ST
#### PAGE 15

### Solution de l’exercice

Soit $(u_n)$ la suite numérique définie par 
$$
u_0 = 2 \quad \text{et} \quad u_{n+1} = \frac{-\sqrt{2}}{2}u_n + \frac{2 - \sqrt{2}}{2} \quad \text{pour tout } n \in \mathbb{N}
$$

1) a) Montrer que pour tout $n \in \mathbb{N}, u_n > 1$

Démontrer par récurrence que la suite $(u_n)$ est majorée par 3.

- Pour $n=0$ on a $u_0 = 2 > 1$. 
  La propriété est donc vraie pour $n = 0$.

Soit $n$ un entier naturel,

- Soit $n$ un entier naturel,  
  Supposons que $u_n > 1$ et montrons que $u_{n+1} > 1$.

$$
u_{n+1} - 1 = \frac{-\sqrt{2}}{2}u_n + \frac{2 - \sqrt{2}}{2} - 1
$$
$$
= \frac{\sqrt{2} - 2}{2}u_n + \frac{2 - \sqrt{2} - 2}{2}
$$
$$
= \frac{\sqrt{2} - 2}{2}u_n + \frac{-\sqrt{2}}{2}
$$
$$
= \frac{\sqrt{2} - 2}{2} (u_n - 1)
$$

(Remarque que $\frac{\sqrt{2} - 2}{2} < 0$)

Donc $u_n > 1 \Rightarrow u_n - 1 > 0 \Rightarrow \frac{\sqrt{2} - 2}{2} (u_n - 1) < 0$

$$ \Rightarrow u_{n+1} - u_n < 0 $$

Donc la suite $(u_n)$ est décroissante.  
On a la suite $(u_n)$ est minorée par 1 et décroissante donc elle est convergente.

2) On pose pour tout $n \in \mathbb{N}, v_n = u_n - 1$

a) Montrer que $(v_n)$ est une suite géométrique et déterminer sa raison et son premier terme.

Soit $n$ un entier naturel,

$$
v_{n+1} = u_{n+1} - 1 = \frac{-\sqrt{2}}{2}(u_n - 1) 
$$
(déjà calculé dans la question 1))

$$
= \frac{\sqrt{2}}{2}v_n
$$

Donc la suite $(v_n)$ est géométrique de raison $q = \frac{\sqrt{2}}{2}$ et de premier terme 

$$
v_0 = u_0 - 1 = 2 - 1 = 1
$$
```

<!-- Page 22 -->

```markdown
# Examens nationaux
## Suites corrigés de 2011 à 2025

### Exercice 7 (Examen 2021-Session-Normal)

Soit $(U_n)$ la suite numérique définie par :
$$ U_0 = \frac{1}{2} \quad \text{et} \quad U_{n+1} = \frac{U_n}{3-2U_n} \quad \text{pour tout } n \in \mathbb{N} $$

1) Calculer $U_1$

2) Montrer par récurrence pour tout $n \in \mathbb{N}$ que $0 < U_n \leq \frac{1}{2}$ 

3) a) Montrer pour tout $n \in \mathbb{N}$ que $U_{n+1} < \frac{1}{2}$  
   b) En déduire la monotonie de la suite $(U_n)$ 

4) a) Montrer pour tout $n \in \mathbb{N}$ que $0 < U_n \leq \frac{1}{2^{n+1}}$ puis calculer la limite de la suite $(U_n)$  
   b) On pose $V_n = \ln(3-2U_n)$ pour tout $n \in \mathbb{N}$, calculer $\lim V_n$ 

5) a) Vérifier pour tout $n \in \mathbb{N}$ que  
   $$ \frac{1}{U_{n+1}} - 1 = 3 \left( \frac{1}{U_n} - 1 \right) $$  
   b) En déduire $U_n$ en fonction de $n$ pour tout $n \in \mathbb{N}$ 

### Solution de l'exercice

Soit $(U_n)$ la suite numérique définie par :
$$ U_0 = \frac{1}{2} \quad \text{et} \quad U_{n+1} = \frac{U_n}{3-2U_n} \quad \text{pour tout } n \in \mathbb{N} $$

1) Calculer $U_1$
$$ U_1 = \frac{U_0}{3-2U_0} = \frac{\frac{1}{2}}{3-1} = \frac{1}{4} $$

2) Montrer par récurrence pour tout $n \in \mathbb{N}$ que $0 < U_n \leq \frac{1}{2}$ 

   - Pour $n=0$ on a $0 < U_0 = \frac{1}{2}$ qui est vrai 
   - Soit $n \in \mathbb{N}$ 

Pour $U_{n+1} = \frac{U_n}{3-2U_n}$ :  
   - Comme $U_n \leq \frac{1}{2}$, on a $3-2U_n \geq 2$  
   - Donc $U_{n+1} = \frac{U_n}{3-2U_n} \leq \frac{U_n}{2}$ 

3) a) Montrer pour tout $n \in \mathbb{N}$ que $U_{n+1} < \frac{1}{2}$  

   b) En déduire la monotonie de la suite $(U_n)$ 

4) a) Montrer pour tout $n \in \mathbb{N}$ que  
   $$ 0 < U_n \leq \frac{1}{2^{n+1}} $$  
   Puis calculer la limite de la suite $(U_n)$  

   b) On pose $V_n = \ln(3-2U_n)$ pour tout $n \in \mathbb{N}$, calculer $\lim V_n$ 

5) a) Vérifier pour tout $n \in \mathbb{N}$ que 
   $$ \frac{1}{U_{n+1}} - 1 = 3 \left( \frac{1}{U_n} - 1 \right) $$  

   b) En déduire $U_n$ en fonction de $n$ pour tout $n \in \mathbb{N}$ 
```

<!-- Page 23 -->

```markdown
# Examens nationaux
## Intégrales corrigées de 2011 à 2025
### 2 Bac sciences PC/SVT/ST 
#### PAGE 17

Supposons que $0 < u_n \leq \frac{1}{2}$ et montrons que

$$ u_{n+1} = \frac{1}{2} \frac{u_n}{3 - 2u_n} = \frac{2u_n - (3 - 2u_n)}{3 - 2u_n} = \frac{4u_n - 3}{3 - 2u_n} $$ 

On a $u_n \leq \frac{1}{2}$ donc $2u_n \geq 1 - 3 - 2u_n > 0$

On a $u_n \leq \frac{1}{2}$ donc $4u_n - 3 \leq 1$

Donc : $ \frac{4u_n - 3}{3 - 2u_n} \leq 0 \implies u_{n+1} \leq \frac{1}{2} \quad (*)$

**Et on a $u_n > 0$ et $3 - 2u_n > 0$**

Donc $u_{n+1} = \frac{u_n}{3 - 2u_n} > 0 \quad (**) $

De $(*)$ et $(**)$ on déduit que $0 < u_{n+1} \leq \frac{1}{2}$. D'après le principe de récurrence, on a $\forall n \in \mathbb{N} : 0 < u_n \leq \frac{1}{2}$ 

### 3) a) Montrer pour tout $n \in \mathbb{N}$ que $\frac{u_{n+1}}{u_n} \leq \frac{1}{2}$ 
Soit $n$ un entier naturel, 

### 1ère méthode : (la différence)

$$ \frac{u_{n+1}}{u_n} = \frac{1}{2} \frac{u_n}{3 - 2u_n}  = \frac{1}{2} \cdot \frac{1}{3 - 2u_n} $$

Donc $2 - 3 + 2u_n$

$$ 3 - 2u_n > 0 $$

D'où ($\forall n \in \mathbb{N}$) : $ u_{n+1} \leq \frac{1}{2} $

### 2ème méthode : (l’encadrement)

On a $u_n \leq \frac{1}{2} \implies 3 - 2u_n \geq 2$

Donc :

$$ \frac{1}{3 - 2u_n} \leq \frac{1}{1} = 1 $$

Donc : $u_{n+1} \leq u_n$

Donc la suite $(u_n)$ est décroissante.

### 4) Montrer pour tout $n \in \mathbb{N}$ que $0 < u_n \leq \left( \frac{1}{2} \right)^{n+1}$ puis calculer la limite de la suite $(u_n)$

On a : $(\forall n \in \mathbb{N}) : 0 < u_n \leq \left( \frac{1}{2} \right)^{n+1}$
```

<!-- Page 24 -->

```markdown
# Examens nationaux
## Intégrales corrigées de 2011 à 2025

Prof FAYSAL : 0681399067  
Prof fayssal

On a $ u_n \leq \left( \frac{1}{2} \right)^{n+1} $  
Et on a d’après la question précédente  
$$ u_{n+1} \leq \frac{1}{2} u_n $$  
Donc $ u_{n+1} \leq \left( \frac{1}{2} \right)^{n+2} $  

D'après le principe de récurrence, on a pour tout $n \in \mathbb{N}$ ; $ u_n \leq \left( \frac{1}{2} \right)^{n+1} $  
2ème méthode :  
On a ; pour tout $n \in \mathbb{N}$ : $ u_{n+1} \leq \frac{1}{2} u_n $  
Pour $n=0$ on a : $ u_1 \leq \frac{1}{2} u_0 $  
Pour $n=1$ on a : $ u_2 \leq \frac{1}{2} u_1 $  
...  
Pour $n-2$ on a : $ u_{n-1} \leq \frac{1}{2} u_{n-2} $  
Pour $n-1$ on a : $ u_n \leq \frac{1}{2} u_{n-1} $  

On multiplie les inégalités terme à terme car sont positives, on trouve :  
$$ u_1 \times u_2 \times ... \times u_n \leq \frac{1}{2} u_0 \times \frac{1}{2} u_1 \times ... \times \frac{1}{2} u_{n-1} \times u_n $$  
C-à-dire : $ u_n \leq \left( \frac{1}{2} \right)^{n} \times u_0 $  

D'où $ \forall n \in \mathbb{N}, \ 0 < u_n \leq \left( \frac{1}{2} \right)^{n+1} $  
Dédite  
$$ \lim_{n \to +\infty} u_n = 0 $$  

On a ; $\forall n \in \mathbb{N}, \ 0 < u_n $  
Et on a $ -1 < \frac{1}{2} < 1 $ donc  
$$ \lim_{n \to +\infty} \left( \frac{1}{2} \right)^{n} = 0 $$  

b) On pose $ V_n = \ln(3 - 2u_n) $ calculer $ \lim V_n $  
On a : $ v_n = \ln(3 - 2u_n) = f(u_n) $  
Tel que $ f : x \mapsto \ln(3 - 2x) $  

On a la fonction $ f $ est continue en $ 0 $ et  
$$ \lim_{n \to +\infty} u_n = 0 ; \ D \implies \lim_{n \to +\infty} v_n = f(0) = \ln(3) $$  

5)a) Vérifier que $ \frac{1}{u_{n+1}} - 1 = 3 \left( \frac{1}{u_n} - 1 \right) $  
Soit $ n $ un entier naturel  
$$ \frac{1}{u_{n+1}} - 1 = \frac{1}{u_n} - \frac{1}{3 - 2u_n} = \frac{3 - 2u_n - u_n}{u_n(3 - 2u_n)} = \frac{2}{u_n} $$  
$$ 1 = \frac{3}{u_n} - 3 \left( \frac{1}{u_n} - 1 \right) $$  
D'où $(\forall n \in \mathbb{N}); 1 - 1 = 3 \left( \frac{1}{u_n} - 1 \right)$  

b) En déduire $ U_n $ en fonction de $ n $  
1ère méthode :  
On a ; $\forall n \in \mathbb{N}$ :  
$$ \frac{1}{u_{n+1}} - 1 = 3 \left( \frac{1}{u_n} - 1 \right) $$  
Pour $ n = 0 $ on a  
$$ \frac{1}{u_1} - 1 = 3 \left( \frac{1}{u_0} - 1 \right) $$  
Pour $ n = 1 $ on a  
$$ u_2 - 1 = 3 \left( \frac{1}{u_1} - 1 \right) $$  
Pour $ n - 2 $ on a  
$$ \frac{1}{u_{n-1}} - 1 = 3 \left( \frac{1}{u_{n-2}} - 1 \right) $$  
Pour $ n - 1 $ on a  
$$ u_n - 1 = 3 \left( \frac{1}{u_{n-1}} - 1 \right) $$  

En multipliant les égalités terme à terme  
$$ \frac{1}{u_n} - 1 = 3^n \left( \frac{1}{u_0} - 1 \right) $$  
Donc  
$$ \frac{1}{u_n} - 1 = 3^{n}(2 - 1) $$  
Donc  
$$ \frac{1}{u_n} = 3^n + 1 $$  
Donc $(\forall n \in \mathbb{N}) : u_n = \frac{1}{3^{n+1}} $
```

<!-- Page 25 -->

```markdown
# Examens nationaux
## Suites corrigés de 2011 à 2025
### 2 Bac sciences PC/SVT/ST
#### PAGE 19

2ème méthode

On pose : $v_n = \frac{1}{u_n} - 1$ pour tout $(n \in \mathbb{N})$  
Et on a $(n \in \mathbb{N}) : v_n + 1 = 3(\frac{1}{u_n} - 1)$  
Donc $(\forall n \in \mathbb{N}) : v_n + 1 = 3 v_n$  
Donc $(v_n)$ est une suite géométrique de raison 2 et $v_0 = \frac{1}{u_0} - 1 = \frac{1}{2} - 1 = -1$  
Donc $v_n = v_0 \times (q)^{n-0} = (3)^n$  
$$ v_n = \frac{1}{u_n - 1} = \frac{1}{v_n + 1} = \frac{1}{(3)^n} $$

### Exercice 08 (Examen 2021 - Rattrapage)  
On considère la suite $(U_n)$ définie par :  
$$ U_{n+1} = \frac{1}{u_n + 1} \text{ et } U_0 = \frac{1}{3} $$
Montrer que $\forall n \in \mathbb{N} : 0 < U_n < 1$ 

1) a) Montrer que $\forall n \in \mathbb{N} : U_{(n+1)}^2 = \frac{(U_n)}{3 - U_n}$  
b) Montrer que $(U_n)$ est convergente  

2) On pose pour tout $n \in \mathbb{N}: v_n = \frac{1}{u_n}$  
a) Montrer que $(v_n)$ est une suite arithmétique, en déterminant sa raison et son premier terme.  
b) Déterminer $v_n$ en fonction de $n$ et déduire que $v_n \in \mathbb{N}: U_n = \frac{n + 1}{n + 3}$  
c) Calculer la limite de $(U_n)$  
d) Déterminer la plus petite valeur de $n$ pour que $U_n \geq \frac{1011}{1012}$

### Solution de l'exercice  
Soit $(u_n)$ la suite numérique définie par :  
$$ u_0 = \frac{1}{3} \text{ et } u_{n+1} = \frac{1 + U_{n}}{3 - U_n} $$  
1) Montrons par récurrence que $0 < u_n < 1$ pour tout $n$  

Pour $n = 0$, on a $u_0 = \frac{1}{3}$ et $0 < \frac{1}{3} < 1$  
Donc $0 < u_0 < 1$  
Supposons que $0 < u_n < 1$ pour un certain rang $n$ et montrons que $0 < u_{n+1} < 1$

D'autre part :  
$$ v_{n+1} - v_n = u_{n} - 3 = \frac{1}{2(u_{n-1} - 1)} $$  
$$ = \frac{u_{n} - 3}{2(u_{n - 1})} $$

D'où $(u_n)$ est arithmétique de raison $\frac{1}{2}$ et de premier terme : $v_0 = \frac{1}{1 - u_0} = \frac{3}{2}$
```

<!-- Page 26 -->

```markdown
# Examens nationaux
## Suites corrigées de 2011 à 2025
### 2 Bac sciences PC/SVT/ST PAGE 20

b) Déterminons $v_n$ en fonction de $n$ et déduisons que $u_n \geq \frac{1011}{1012}$ pour tout $n \in \mathbb{N}$
✓ Déterminons $v_n$ en fonction de $n$

Comme $(v_n)$ est arithmétique de raison $\frac{1}{2}$ et de premier terme $v_0 = \frac{3}{2}$

On a :
$$
v_n = v_0 + \frac{1}{2} = \frac{3}{2} + \frac{1}{2}n + 3 = n + \frac{3}{2}
$$
Donc $v_n = \frac{n + 3}{2}$ pour tout $n \in \mathbb{N}$.

✓ Montrons que $u_n = \frac{n + 1}{n + 3}$ pour tout $n \in \mathbb{N}$

On a :
$$
v_n = \frac{1}{1 - u_n} \Leftrightarrow 1 - u_n = \frac{1}{v_n}
$$
$$
\Leftrightarrow u_n = 1 - \frac{1}{v_n}
$$
$$
\Leftrightarrow u_n = 1 - \frac{1 - \frac{3}{2}}{2} = \frac{n + 1}{n + 3}
$$

c) Calculons la limite de la suite $(u_n)$
$$
\lim_{n \to +\infty} u_n = \lim_{n \to +\infty} \frac{n + 1}{n + 3}
$$
$$
= \lim_{n \to +\infty} \frac{n (1 + \frac{1}{n})}{n (1 + \frac{3}{n})}
$$
$$
= \lim_{n \to +\infty} \frac{1 + \frac{1}{n}}{1 + \frac{3}{n}} = 1
$$
Car $\lim_{n \to +\infty} \frac{1}{n} = \lim_{n \to +\infty} \frac{3}{n} = 0$.
Finalement: $\lim_{n \to +\infty} u_n = 1$

4) À partir de quelle valeur de $n$, on a $u_n > \frac{1011}{1012}$ ?
On a :
$$
u_n \geq \frac{1011}{1012} \Leftrightarrow 1012n + 1012 \geq 1011n + 3033
$$
$$
\Leftrightarrow n \geq 2021
$$
Donc $u_n \geq \frac{1011}{1012}$ à partir de $n = 2021$.

---

## Exercice 09 (Examen 2020-Session-Normal)
Soit $(U_n)$ la suite numérique définie par :
$$
U_0 = \frac{3}{2} \text{ et } U_{n+1} = \frac{2U_n}{U_n + 5}
$$
pour tout $n \in \mathbb{N}$

1) Calculer $U_1$

2) Montrer par récurrence pour tout $n \in \mathbb{N}$ que $U_n > 0$

3) a) Montrer pour tout $n \in \mathbb{N}$ que $0 < U_{n+1} < \frac{2}{5} U_n$ puis en déduire pour tout $n$ de $\mathbb{N}$ que $0 < U_n < \frac{3}{2} \left(\frac{2}{5}\right)^n$

b) Calculer $\lim U_n$

4) On considère la suite numérique $(V_n)$ la suite numérique définie par:
$$
V_n = \frac{4U_n}{2U_n + 3}
$$
pour tout $n \in \mathbb{N}$

a) Montrer que $(V_n)$ est une suite géométrique de raison $\frac{2}{5}$

b) Déterminer $V_n$ en fonction de $n$ et en déduire $U_n$ en fonction de $n$ pour tout $n \in \mathbb{N}$.
```

<!-- Page 27 -->

```markdown
# Examens nationaux
## Suites corrigés de 2011 à 2025
### 2 Bac sciences PC/SVT/ST
### PAGE 21

### Correction de l’exercice
Soit $(U_n)$ la suite numérique définie par :  
$$ U_0 = \frac{3}{2} $$  
$$ U_{n+1} = \frac{2U_n}{U_n + 5} $$ pour tout $n \in \mathbb{N}$

1) Calculer $U_1$  
$$ U_1 = \frac{2U_0}{U_0 + 5} = \frac{2 \times \frac{3}{2}}{2 \times \frac{3}{2} + 5} = \frac{3}{8} $$

2) Montrer par récurrence pour tout $n \in \mathbb{N}$ que $U_n > 0$  
- Pour $n=0$ on a $U_0 = \frac{3}{2} > 0$ qui est vrai  
- Soit $n \in \mathbb{N}$  
Supposons que $U_n > 0$ et montrons que $U_{n+1} > 0$.  
On a $U_{n+1} = \frac{2U_n}{U_n + 5}$ et $U_n > 0$  
Donc $2U_n > 0 \text{ et } U_n + 5 > 0$  
Donc $U_{n+1} = \frac{2U_n}{U_n + 5} > 0$

D’après le principe de récurrence, on a $\forall n \in \mathbb{N} : U_n > 0$

3)a Montrer pour tout $n \in \mathbb{N}$ que $0 < U_{n+1} < \frac{2}{5} U_n$ puis en déduire pour tout $n \in \mathbb{N}$ que $0 < U_n < \frac{3}{2} \left( \frac{2}{5} \right)^n$  
1ère méthode : (La différence)  
$$ U_{n+1} = \frac{2}{5} U_n - \frac{4}{5} \frac{U_n^2}{10U_n - 2U_n + 5} = \frac{5(2U_n + 5)}{10U_n - 2U_n + 5} $$  
On a $U_n > 0$ donc $-\frac{4U_n^2}{5(U_n + 5)} < 0$  
Donc $U_{n+1} < U_n \leq 0$  
D’où $\forall n \in \mathbb{N}$; $U_{n+1} \leq \frac{2}{5} U_n$

En déduire que pour tout $n \in \mathbb{N}^0 < U_n \leq \frac{3}{2} \left( \frac{2}{5} \right)^n$

2ème méthode : (L’encadrement)  
On a $U_n > 0$ donc $2U_n + 5 > 5$  
Donc :  
$$ \frac{1}{2U_n + 5} < \frac{1}{5} $$  
Donc :  
$$ \frac{2U_n}{2U_n + 5} \leq \frac{1}{5} \text{ ; car } U_n > 0 $$  

D' ou : $U_{n+1} \leq \frac{2}{5} U_n$  
D’où $(\forall n \in \mathbb{N}); U_{n+1} \leq \frac{2}{5} U_n$  

Donc pour tout $n \in \mathbb{N} : 0 < U_n \leq \frac{3}{2} \left( \frac{2}{5} \right)^n$

D’après le principe de récurrence, on a $(\forall n \in \mathbb{N}); u_n \leq \frac{3}{2} \left( \frac{2}{5} \right)^n$
```

<!-- Page 28 -->

```markdown
## Examens nationaux  
### Suites corrigées de 2011 à 2025  

2ème méthode :  
On a ; $(n \in \mathbb{N}) : u_n \leq \frac{2}{5} u_n$  
Pour $n=0$ on a : $u_0 \leq \frac{2}{5} u_0$  
Pour $n=1$ on a : $u_2 \leq \frac{2}{5} u_1$  
...  
Pour $n-2$ on a : $u_{n-1} \leq \frac{2}{5} u_{n-2}$  
Pour $n-1$ on a : $u_n \leq \frac{2}{5} u_{n-1}$  
On multiplie les inégalités terme à terme car sont positives, donc  
$$ u_1 \leq u_2 \cdots \times u_n \leq \frac{2}{5} u_0 \times \frac{2}{5} u_1 \times \cdots \times \frac{2}{5} u_{n-1} $$  
$$ \Rightarrow \frac{2}{5} u_n $$  
C-à-dire : $u_n \leq \left( \frac{2}{5} \right)^n u_0 \, (\forall n \in \mathbb{N}) ; 0 < u_n \leq \left( \frac{3}{2} \right)^n$  
b) Dédire $\lim_{n \to +\infty} u_n$.  

On a ; $(n \in \mathbb{N}) ; 0 < u_n \leq \left( \frac{3}{2} \right)^n$  
Et on a : $-1 < \frac{2}{5} < 1$ donc $\lim_{n \to +\infty} ( \frac{2}{5} )^{n+1} = 0$  
Donc d'après théorème d'encadrement on a :  
$$ \lim_{n \to +\infty} u_n = 0 $$  

3) On considère la suite numérique $(V_n)$ la  
suite numérique définie par $V_n = \frac{4U_n}{2U_n + 3}$ pour tout $n \in \mathbb{N}$.  
a) Montrer que $(V_n)$ est une suite géométrique de raison $\frac{2}{5}$  
Soit $n \in \mathbb{N}$  
$$ V_{n+1} = \frac{4U_{n+1}}{2U_{n+1}+5} = \frac{4\times 2U_n + 5}{2\times 2U_n + 3} = \frac{8U_n}{4U_n + 6U_n + 15} = \frac{8U_n}{2U_n + 5} $$  
$$ = \frac{2}{5} \times \frac{2U_n + 3}{2U_n + 5} $$  

D'où $(\forall n \in \mathbb{N}) ; U_n = \frac{3}{2}^n + C$  

### Exercice 10 (Examen 2019-Séssion-Normal)
Soit $f$ la fonction numérique définie sur $[0; +\infty[$ ;  
$$ f(x) = x + \frac{1}{2} \ln x + \frac{1}{2} (\ln x)^2 $$  
La fonction $f$ est strictement croissante sur $[1; e]$  

Soit $(u_n)$ une suite numérique définie par :  
$u_0 = 1$ et $u_{n+1} = f(u_n)$ pour tout $n \in \mathbb{N}$.  
1.a) Montrer par récurrence que $1 \leq u_n \leq e$ pour tout $n \in \mathbb{N}$.  
b) Montrer que la suite $(u_n)$ est croissante.  
c) Déduire que la suite $(u_n)$ est convergente.  
2. Calculer la limite de la suite $(u_n)$.
```

<!-- Page 29 -->

```markdown
# Examens nationaux
## Suites corrigées de 2011 à 2025
### 2 Bac sciences PC/SVT/ST
**PAGE 23**

## Correction de l’exercice

Soit $(u_n)$ une suite numérique définie par :  
$u_0 = 1$ et $u_{n+1} = f(u_n)$ pour tout $n \in \mathbb{N}$.  
1.a) Montrer par récurrence que $1 \leq u_n \leq e$ pour tout $n \in \mathbb{N}$.  
> Pour $n=0$ on a $1 \leq u_0 = 1 \leq e$  
La propriété est donc vraie pour $n = 0$  
Soit $n$ un entier naturel,  
Supposons que $1 \leq u_n \leq e$ et montrons que $1 \leq u_{n+1} \leq e$.  
On sait que la fonction $f$ est strictement croissante sur l'intervalle $[1; e]$  
On a $1 \leq u_n \leq e$, donc ;  
$1 < u_n < e \Rightarrow 1 \leq f(u_n) \leq f(e)$  
$\Rightarrow 3 \leq u_{n+1} \leq e$  
$1 \leq u_{n+1} \leq e$

D'après le principe de récurrence, on a :  
$\forall (n \in \mathbb{N}) \ 1 \leq u_n \leq e$  
b) Montrer que la suite $(u_n)$ est croissante.  
$$f(x) - x = \frac{1}{2} - \ln x + \frac{1}{2} ( \ln x )^2$$  
$$= \frac{1}{2} (1 - 2 \ln x + (\ln x)^2)$$  
$$= \frac{1}{2} (1 - \ln x)^2$$  
$$= \frac{1}{2} (\ln x - 1)^2 \geq 0$$  
Donc : $(\forall x \in [1; e]) : f(x) - x \geq 0 \Rightarrow u_n \in [1; e]$  
Donc on pose $x = u_n$  
On trouve $f(u_n) - u_n \geq 0$ donc $f(u_n) \geq u_n$  
Donc : $u_{n+1} \geq u_n$  
c) Déduire que la suite $(u_n)$ est convergente.  
La suite $(u_n)$ est croissante et majorée par $e$ donc elle est convergente.  

2) Calculer la limite de la suite $(u_n)$.  
La fonction $f$ est continue sur l'intervalle $[1; e]$ ; car elle est dérivable sur $[1; e]$  
$$f([1; e]) = f(0); f(\ln 4) \in [\frac{3}{2}; e] \subset [1; e]$$  

Donc :  
$u_0 = 1 \in [1; e]$  
La suite $(u_n)$ est convergente  
Alors la limite de la suite $(u_n)$ est $L$ la solution de l’équation $f(x) = x$  
$$f(x) = x \Leftrightarrow \frac{1}{2} ( \ln x - 1)^2 = 0$$  
$\Rightarrow \ln(x) = 1 \Rightarrow x = e$  
Donc la limite de la suite $(u_n)$ est $e$

## Exercice 11 (Examen 2016-Session-Normal)

On considère la suite numérique $(u_n)$ définie  
$u_0 = 2$ et $u_{n+1} = \frac{3 u_n}{5 - u_n}$ pour tout $n \in \mathbb{N}$.  
1) Vérifier que : $u_{n+1} - 3 = \frac{4(u_n - 3)}{2 + (3 - u_n)}$ pour tout $n \in \mathbb{N}$ puis montrer par récurrence que $u_n < 3$ pour tout n de $\mathbb{N}$.  
2) Soit $(v_n)$ la suite numérique définie par :  
$v_n = \frac{u_{n-1}}{3 - u_n}$ pour tout n de $\mathbb{N}$.  
a) Montrer que $(v_n)$ est une suite géométrique de raison $\frac{1}{2}$ et en déduire que  
$$v_n = \left( \frac{1}{2} \right)^{n} \ \text{pour tout n de } \mathbb{N}$$  
b) Montrer que $u_n = \frac{1 + 3v_n}{1 + v_n}$ pour tout n de $\mathbb{N}$ puis exprimer $u_n$ en fonction de $n$.  
3) Déterminer la limite de la suite $(u_n)$.  
Correction de l’exercice  
On considère la suite $(u_n)$ définie par :  
$u_0 = 2$ et $u_{n+1} = \frac{3 + u_n}{5 - u_n}$ pour tout n de $\mathbb{N}$.  
1) Vérifier que : $u_{n+1} - 3 = \frac{3 + u_n - 5 + u_n}{3 - u_n}$  
$$= \frac{3 + u_n - 5 + u_n}{2 + (3 - u_n)}$$  

Donc :  
$u_{n+1} - 3 = \frac{4(u_n - 3)}{2 + (3 - u_n)}$
```

<!-- Page 30 -->

```markdown
# Examens nationaux
## Suites corrigées de 2011 à 2025
### 2 Bac sciences PC/SVT/ST PAGE 24

Montrons par récurrence que $U_n < 3$ pour tout $n \in \mathbb{N}$.
* Pour $n = 0$ on a : $U_0 = 2 < 3$ (proposition vraie).
* Soit $n \in \mathbb{N}$.
Supposons que $U_n < 3$ et montrons que $U_{n+1} < 3$.
Puisque $U_n < 3$ alors, $U_n - 3 < 0$, $3 - U_n > 0$ et 

$$
U_{n+1} - 3 = \frac{4(U_n - 3)}{2 + (3 - U_n)} < 0
$$

D'où, $U_{n+1} < 3$  
Donc d'après le raisonnement par récurrence $U_n < 3$ pour tout $n \in \mathbb{N}$.

2) a) Montrons que $(V_n)$ est une suite géométrique de raison $\frac{1}{2}$ puis déduisons que $V_n = \left(\frac{1}{2}\right)^n$ pour tout $n \in \mathbb{N}$.
$$
V_{n+1} = \frac{U_{n+1} - 1}{3 - U_{n+1}} = \frac{\frac{3 + 5U_n}{5 - U_n} - 1}{3 - U_n} 
= \frac{2(U_n - 2)}{4(3 - U_n)} = \frac{1}{2} V_n
$$
Donc, $V_{n+1} = \frac{1}{2} V_n$ pour tout $n \in \mathbb{N}$.  
Par conséquent $(V_n)$ est une suite géométrique de raison $\frac{1}{2}$ et du premier terme $V_0 = \frac{U_0 - 1}{3 - U_0} = 1$.  
Déduisons que $V_n = \left(\frac{1}{2}\right)^n$ pour tout $n \in \mathbb{N}$.

b) Montrons que $U_n = \frac{1 + 3V_n}{1 + V_n}$ pour tout $n \in \mathbb{N}$.  
Soit $n \in \mathbb{N}$, on a :
$$
V_n = V_0 \times q^{n-p} = 1 \times \left(\frac{1}{2}\right)^n
$$
Donc, $V_n = \left(\frac{1}{2}\right)^n$ pour tout $n \in \mathbb{N}$.

c) Déterminons la limite de la suite $(U_n)$.
On a : $\lim_{n \to +\infty} U_n = \lim_{n \to +\infty} \frac{1 + 3\left(\frac{1}{2}\right)^n}{1 + \left(\frac{1}{2}\right)^n} = 1$

Car : $\lim_{n \to +\infty} \left(\frac{1}{2}\right)^n = 0$

## Exercice 12 (Examen 2015-Session-Rattrapage)

On considère la suite numérique $(U_n)$ définie par : $U_0 = 4$ et $U_{n+1} = \frac{2}{5} U_n + 3$  
1) Montrer par récurrence que : $U_n < 5$ pour tout $n \in \mathbb{N}$  
2) Vérifier que : $U_{n+1} - U_n = -\frac{3}{5} (5 - U_n)$ pour tout $n \in \mathbb{N}$ et en déduire que la suite $(U_n)$ est croissante.  
3) En déduire que la suite $(U_n)$ est convergente.  
4) Soit $(V_n)$ la suite numérique telle que $y_n = 5 - U_n$ pour tout $n$  
a) Montrer que $(V_n)$ est une suite géométrique de raison $\frac{2}{5}$ et exprimer $V_n$ en fonction de $n$.  
b) En déduire que $U_n = 5 - \left(\frac{2}{5}\right)^n$ pour tout $n \in \mathbb{N}$ puis calculer la limite de $(U_n)$.
```

<!-- Page 31 -->

```markdown
# Examens nationaux
## Suites corrigées de 2011 à 2025

### Correction de l'exercice

On considère la suite numérique $(U_n)$ définie par : $U_0 = 4$ et $U_{n+1} = \frac{2}{5} U_n + 3$

1) Montrer par récurrence que : $U_n < 5$ pour tout $n \in \mathbb{N}$

Pour $n = 0$ on a $U_0 = 4$ et $4 < 5 \Rightarrow U_0 < 5$  
Donc la proposition est vraie pour $n = 0$  
Supposons que $u_n < 5$ pour un fixé $n \in \mathbb{N}$ et montrons que $u_{n+1} < 5$  
C'est-à-dire montrons que : $u_{n+1} - 5 < 0$
$$
u_{n+1} - 5 = \frac{2}{5} U_n + 3 - 5 \Rightarrow u_{n+1} - 5 = \frac{2}{5} u_n - 2 \iff u_{n+1} - 5 = \frac{2}{5} (u_n - 5)
$$
Et puisque $u_n < 5$ alors $u_n - 5 < 0$  
D'où $\frac{2}{5} (u_n - 5) < 0$ donc $u_{n+1} < 5$  
D'après le raisonnement par récurrence on a $u_n < 5$ pour tout $n$

2) Vérifier que : $U_{n+1} - U_n = -\frac{3}{5}(5 - U_n)$ pour tout $n \in \mathbb{N}$ et en déduire que la suite $(U_n)$ est croissante.

Vérifions que : $U_{n+1} - U_n = -\frac{3}{5}(5 - U_n)$ pour $n \in \mathbb{N}$
$$
U_{n+1} - U_n = \left(\frac{2}{5} - 1\right) U_n + 3 = -\frac{3}{5} U_n + 3
$$
Montrer que la suite $(U_n)$ est croissante.  
(Soit $n \in \mathbb{N}) U_{n+1} - U_n = -\frac{3}{5} (5 - U_n)$  
Et puisque $u_n - 5 < 0$ pour tout $n \in \mathbb{N}$ donc $5 - u_n > 0$  
D'où $(\forall n \in \mathbb{N}) : u_{n+1} - u_n > 0$ donc la suite $(u_n)$ est croissante.

3) En déduire que $(U_n)$ est convergente.  
Comme la suite $(u_n)$ est croissante et aussi majorée par $5$ ($(\forall n \in \mathbb{N}) : u_n < 5$)  
Alors la suite $(u_n)$ est convergente.

4) Soit $(V_n)$ la suite numérique telle que $V_n = 5 - U_n$ pour tout $n$

a) Montrer que $(V_n)$ est une suite géométrique de raison $\frac{2}{5}$ et exprimer $V_n$ en fonction de $n$.

Montrons que $(v_n)$ est une suite géométrique de raison $\frac{1}{5} V_n \in \mathbb{N}$ (Soit $n \in \mathbb{N})$ :
$$
v_{n+1} = 5 - U_{n+1} = 5 - \left( \frac{2}{5} U_n + 3 \right) = 2/5 (u_n - 5)
$$
Donc $(v_n)$ est une suite géométrique de raison $q = \frac{2}{5}$  
Exprimons $v_n$ en fonction de $n$  
$(V_n \in \mathbb{N}) : V_n = V_0 \times q^{n-0} = \left(\frac{2}{5}\right)^n$, car $V_0 = 5 - U_0 = 5 - 4 = 1$  
Donc $(V_n \in \mathbb{N}) : V_n = \left(\frac{2}{5}\right)^n$  

b) En déduire que $U_n = 5 - \left(\frac{2}{5}\right)^n$ pour tout $n \in \mathbb{N}$ puis calculer la limite de $(U_n)$.

Déduisons que $u_n = 5 - \left(\frac{2}{5}\right)^n$ pour tout $n \in \mathbb{N}$.  
On sait que : $v_n = 5 - U_n$ pour tout $n \in \mathbb{N}$ d'où 
$$
U_n = 5 - v_n \text{ et comme } V_n = \left(\frac{2}{5}\right)^n
$$  
Calculons la limite de la suite $(U_n)$.
$$
\lim_{n \to \infty} u_n = \lim_{n \to \infty} \left(5 - \left(\frac{2}{5}\right)^n\right) = 5  
$$
Car $1 < \frac{2}{5} < 1$, c'est-à-dire lim $\left(\frac{2}{5}\right)^n = 0$.  
Donc $\lim_{n \to \infty} u_n = 0$.
```


<!-- Page 32 -->

```markdown
# Offre préparation concours 2026 – Prof Fayssal

- Plus 20 séances en vidéos de préparation Médecine
- Plus 20 séances en vidéos pour ENSA-ENSAM-UM6P
- Nouvelle offre à partir de mois 6 avec des séances en directes et interactives
- Deux livres de préparation Médecine-ENSA-ENSAM contiennent des astuces, plus de 20 concours blancs corrigés et la correction des anciens concours

Pour participer : 0681399067

---

## تفاصيل خاصة بمجموعة الطب (20 حصة) على فيسبوك للرجوع إليها
- تفاصيل لمادة الرياضيات (20 حصة) عبر ZOOM ومسجلة
- كتابتان شاملتان في الرياضيات مع تصحيحات مفضلة وتمارين نوعية + تصحيح التجارب السابقة

- عرض وحصص مباشرة يومياً بدءً من شهر 6 لمدة 60 دقيقة

0681399067 للتواصل:

---

# RESULTAT DE SELECTION 

- فرحت بفوزك!
- سنخبرك على الأستاذ 

---

### WhatsApp Messages

- **Message 1**: "Rh kont chrit k tab diak a ostad"
- **Message 2**: "L maths fto 12 qstas 14"
- **Message 3**: "Merci"
- **Message 4**: "Slam prof Ana mn les élèves dawl l3am"
- **Message 5**: "Je vous remercie beaucoup beaucoup ga3 dkos les efforts d'etrin 3amna f classe 2"
- **Message 6**: "7ta votre livre de préparation rah jawini bzaf"
```

<!-- Page 33 -->

```markdown
# Prof Fayssal

## Résumés de cours géométrie dans l’espace Deuxième bac sciences PC /SVT/SE

Prof fayssal  
0681399067  
Prof Fayssal
```

<!-- Page 34 -->

```markdown
# Préparation à l’examen
## Fiche 8 : Géométrie dans l’espace  Page 10

1) **Formule analytique du scalaire**  
Soient $\mathbf{U}(x; y; z) \in \mathbb{R}^3$ et $\mathbf{V}(x'; y'; z') \in \mathbb{R}^3$ on a :  
$$ \mathbf{U} \cdot \mathbf{V} = x x' + y y' + z z' $$  
$$ \mathbf{U} \cdot \mathbf{V} \iff \mathbf{U} \cdot \mathbf{V} = 0 $$  

2) **DROITE DANS L’ESPACE**  
Soit $(D)$ la droite passant par $A(x_A; y_A; z_A)$ et de vecteur directeur $\mathbf{u}(a; b; c)$  
Une représentation paramétrique de $(D)$ :  
$$(D): \begin{cases}  
x = x_A + at \\  
y = y_A + bt \\  
z = z_A + ct  
\end{cases} \quad (t \in \mathbb{R})$$  

3) **Plan dans l’espace - Vecteur normal**  
Tout plan a une équation cartésienne de la forme : $ (P): ax + by + cz + d = 0 $  
Le Vecteur $\mathbf{n}(a; b; c)$ est un vecteur normal au plan $(P): ax + by + cz + d = 0$  
À un point et $\mathbf{n}$ un vecteur de l’espace  
L’ensemble des points $M(x; y; z)$ de l’espace tel que $AM \cdot \mathbf{n} = 0$ est un plan $(P)$ passant par $A$ et de vecteur normal $\mathbf{n}$  

4) **DISTANCE D’UN POINT À UN PLAN**  
Soit $(P): ax + by + cz + d = 0$ un plan et $A(x_A; y_A; z_A)$ un point de l’espace  
$$ d(A; (P)) = \frac{| ax_A + by_A + cz_A + d |}{\sqrt{a^2 + b^2 + c^2}} $$  

5) **Sphère dans l’espace**  
Soit $(S)$ la sphère de centre $O(a; b; c)$ et de rayon $r$ l’équation cartésienne de $(S)$ est :  
$$ (x - a)^2 + (y - b)^2 + (z - c)^2 = r^2 $$  
L’équation cartésienne de la sphère $(S)$ définit par son diamètre $[AB]$ est donné par :  
$M(x; y; z) \iff AM \cdot BM = 0$  

**Proposition : l'ensemble des points M**  
L’ensemble des points $M(x; y; z)$ de tel que $(S): x^2 + y^2 + z^2 + ax + by + cz + d = 0$ est un sphère si $a^2 + b^2 + c^2 - 4d > 0$  
- Son centre est le point $\Omega \left( -\frac{a}{2}; -\frac{b}{2}; -\frac{c}{2} \right)$  
- Son rayon est $r = \frac{\sqrt{a^2 + b^2 + c^2 - 4d}}{2}$  

6) **Position relative d’un sphère et un plan**  
Soit $(S)$ une sphère de centre $\Omega$ et de rayon $R$  
$(P)$ un plan et da distance entre le centre $\Omega$ est le plan $(P) : d = d(\Omega; (P))$  
Si $d<R$ alors $(S)$ est tangente à $(P)$ un point $H$  
Si $d = R$ alors $(S) \cap (P)$ suivant un cercle  
(C) de centre $H$ et rayon $r = \sqrt{R^2 - d^2}$  
Pour déterminer les coordonnées de $H$ on résoudra le système suivant :  
$$ \begin{cases}  
x = x_0 + at \\  
y = y_0 + bt \\  
z = z_0 + ct  
\end{cases} \quad (t \in \mathbb{R}) $$  
$(S) : (x - x_0)^2 + (y - y_0)^2 + (z - z_0)^2 = R^2$  

**Position relative d’une sphère et une droite**  
Soit $(S)$ une sphère de centre $\Omega$ et de rayon $R$ et $(\Delta)$ la droite passant par le point $A$ et de vecteur directeur $\mathbf{u}(\alpha; \beta; \gamma)$  
Pour déterminer les coordonnées des points d’intersections de $(S)$ et $(\Delta)$, on résout le système suivant :  
$$ \begin{cases}  
x = x_A + at \\  
y = y_A + bt \\  
z = z_A + \gamma t  
\end{cases} \quad (t \in \mathbb{R}) $$  
$(S) : (x - x_0)^2 + (y - y_0)^2 + (z - z_0)^2 = R^2$  

**Expression analytique du produit vectoriel**  
$$ \mathbf{U} \wedge \mathbf{V} = \begin{vmatrix}  
\mathbf{i} & \mathbf{j} & \mathbf{k} \\  
x & y & z \\  
x' & y' & z'  
\end{vmatrix} = \mathbf{y} \mathbf{z'} - \mathbf{z} \mathbf{y'} \mathbf{i} + \mathbf{z} \mathbf{x'} - \mathbf{x} \mathbf{z'} \mathbf{j} + \mathbf{x} \mathbf{y'} - \mathbf{y} \mathbf{x'} \mathbf{k} $$  
$\mathbf{U} \text{ et } \mathbf{V} \text{ sont colinéaires ssi } \mathbf{U} \wedge \mathbf{V} = \mathbf{0}$  
- A; B et C sont alignés ainsi $ \overline{AB} \cdot \overline{AC} = \overline{0}$  
- Le vecteur $\overline{AB} \wedge \overline{AC}$ est un vecteur normal au plan $(ABC)$  

**Distance d’un point $\Omega$ à une droite $(D)$**  
$(D)$ la droite qui passe par $A$ et de vecteur directeur $\mathbf{u}$ et $\Omega$ un point de l’espace alors  
$$ d(\Omega; (D)) = \frac{| \mathbf{u} \cdot \mathbf{n} |}{||\mathbf{u}||} $$  

**Aire d’un triangle ABC**  
$$ S_{ABC} = \frac{AB \times AC \cdot \sin \hat{A}}{2} = \frac{1}{2} | \overline{AB} \times \overline{AC} | $$  
```

<!-- Page 35 -->

```markdown
# Offre préparation concours 2026 – Prof Fayssal

- Plus 20 séances en vidéos de préparation Médecine
- Plus 20 séances en vidéos pour ENSA-ENSAM-UM6P
- Nouvelle offre à partir de mois 6 avec des séances en directes et interactives
- Deux livres de préparation Médecine-ENSA-ENSAM contient des astuces, plus de 20 concours blancs corrigés et la correction des anciens concours

Pour participer : 0681399067

---

*حصص خاصة بمبالغ كلية الطب (20 حصص) على فيسبوك للرجوع للإجابة*  
*حصص لمباراة ENSM-UM6P (20 حصص) عبر ZOOM ومسيّجة بالكامل.*

- كتب شاملة في الرياضيات 📘 مع تصحيحات مفضلة وتمارين نوعية + تصحيح العبارات السابقة.
- عرض حصص مباشرة يومياً ابتداءً من شهر 6 لتبقى 60 دقيقة.

0681399067 للتواصل: ✉️

---

*Rh kont chrit k tab diak ostad*  
*L maths j'th 12 qsts 3la 14*

---

*الحمد لله استاذ الفايصل*  
*جراك الله خير على مجهوداتك*  
*دخلت كلیة الطب ولله الحمد الله*  
*الـلـه يـعـطـيـك الـصـحـة و الـعـافـية ان شاء الله*

*سلام رمضان انا من الأشخاص داويكور*  
*Je vous remercie beaucoup beaucoup ga3 3d vos efforts il derit ma3na f classe ❤️*  
*O 7ta tvo livre de préparation rah sawni bzaaf*
```

<!-- Page 36 -->

```markdown
# Examens nationaux corrigés géométrie dans l’espace deuxième bac sc PC/SVT/ST

Examens nationaux corrigés de 2009 à 2025 Géométrie dans l’espace

## Deuxième bac sciences
PC/SVT/ST

---

## Partie 3 :

# Examens nationaux
# géométrie dans l’espace

---

Collection FMATHS  
Prof fayssal  
www.elboutkhili.jimdofree.com
```

<!-- Page 37 -->

```
# Examens nationaux géométrie dans l’espace corrigés
Prof FAYSAL : 0681399067  
Prof fayssal  

## Dans tous les exercices, l'espace rapporté à un repère orthonormé $(0, \vec{i}, \vec{j}, \vec{k})$

### Exercice (Examen 2025-Session-Normal)
Dans l'espace rapporté à un repère orthonormé $(0; \vec{i}, \vec{j}, \vec{k})$, on considère les deux points $A(2, 0, 0)$ et $B(0, 0, 2)$, et la sphère $(S)$ de centre $O$ et de rayon $r = 2$.

1. a) Déterminer l'équation cartésienne de la sphère $(S)$.  
   b) Vérifier que les points A et B appartiennent à la sphère $(S)$.

2. Soit $I$ le milieu du segment $[AB]$.  
   a) Déterminer l'intersection du plan $(OAB)$ avec la sphère $(S)$.  
   b) Vérifier que $\overrightarrow{OI} \cdot \overrightarrow{AB} = 0$ puis montrer que $d(O; (AB)) = \sqrt{2}$.

3. On considère un point $M(0,m,0)$ de l'espace où $m \in \mathbb{R}$.  
   a) Vérifier que $\overrightarrow{AB} \perp \overrightarrow{AM} = 2m\vec{i} + 4j + 2m\vec{k}$.  
   b) Déduire que $mx + 2y + 2m = 0$ est une équation cartésienne du plan $(ABM)$.  
   c) Montrer que $d(O; (ABM)) = \frac{2|m|}{\sqrt{4+2m^2}}$.

4. Le plan $(ABM)$ coupe la sphère $(S)$ suivant un cercle $(\Gamma)$ de rayon $r$.  
   Montrer que $r = \sqrt{2 + \frac{4}{2+m^2}}$ et déduire que $ \sqrt{2 < r \leq 2}$ pour tout $m \in \mathbb{R}$.

### Exercice (Examen 2025-Session-Rattrapage)
Dans l'espace rapporté à un repère orthonormé direct $(0, \vec{i}, \vec{j}, \vec{k})$, on considère les points $A(0, 3, 3)$, $B(1, 2, 1)$, $C(2, 3, 1)$ et le vecteur $\vec{n}(1, -1, 1)$. Soit $(P)$ le plan d'équation $x - y + z - 6 = 0$.

1. a) Montrer que $\overrightarrow{AB} \cap \overrightarrow{AC} = 2\vec{n}$ et déduire que les points A, B et C ne sont pas alignés.  
   b) Montrer que les plans $(ABC)$ et $(P)$ sont parallèles.
```

<!-- Page 38 -->

```markdown
# Examens nationaux géométrie dans l’espace corrigés

## 2 Bac sciences PC/SVT/ST

### Exercice 02 (Examen 2024-Session-Rattrapage)

On considère les deux points $A(1, 1, 0)$ et $\Omega(-1, -2)$ et le plan P d’équation $x + z - 1 = 0$  
1. a) Vérifier que $A$ est un point du plan $P$  
   b) Montrer que la droite $(\Omega A)$ est perpendiculaire au plan $(P)$  
2. Soit $(S)$ l'ensemble des points $M(x, y, z)$ de l'espace vérifiant: $$x^2 + y^2 + z^2 - 2x - 2y + 4z - 3 = 0.$$  
   a) Montrer que $(S)$ est une sphère de centre $\Omega$ et déterminer son rayon.  
   b) Montrer que $(P)$ coupe $(S)$ suivant un cercle de centre $A$ puis déterminer son rayon.  
3. Soit $(Q_m)$ un plan d'équation $x + y + mz = 2$, où $m$ est un nombre réel.  
   a) Vérifier que $A$ est un point du plan $(Q_m)$, pour tout $m \in \mathbb{R}$.  
   b) Déterminer la valeur de $m$ pour que $(Q_m)$ soit perpendiculaire au plan $(P)$.  
   c) Existe-t-il un plan $(Q_m)$ qui coupe la sphère $(S)$ suivant un cercle de centre $A$? Justifier.

### Exercice 04 (Examen 2023-Session-Rattrapage)

On considère les points $A(2, 1, 2)$, $B(-2, 0, 5)$ et $C(4, -5, 7)$ et $\Omega(1, -1, 0)$. On pose $\vec{u} = \Omega A$  
Soit $(S)$ la sphère de centre $\Omega$ et de rayon $R = 3$  
1. a) Montrer que $\overline{AB} \cap \overline{AC} = 13$ et déduire que les points $A$ et $B$ ne sont pas alignés.  
   b) Vérifier que $x + 2y + 2z - 8 = 0$ est une équation cartésienne du plan $(ABC)$.  
   c) Montrer que le plan $(ABC)$ est tangent à la sphère $(S)$ en $A$.  
2. Soit $(P)$ le plan d’équation cartésienne $3x + 4y + z + 1 = 0$ (la droite passant par le point $A$ et orthogonal au plan $(P)$).  
   a) Montrer que la droite $(D)$ coupe le plan $(P)$ au point $\left(\frac{1}{2}, -1, -\frac{3}{2}\right)$.  
   b) Déterminer les coordonnées du point $D$ tel que $D$ soit le milieu du segment $[AD]$.  
   3. Soit $(Q)$ le plan passant par le point $D$ et de vecteur normal $\overrightarrow{DD}$.  
   a) Montrer que le plan $(Q)$ est tangent à la sphère $(S)$ en $D$.  
   b) Montrer que les plans $(ABC)$ et $(Q)$ se coupent suivant la droite $(BC)$.

### Exercice 03 (Examen 2023-Session-Normal)

On considère les points $A(0, 1, 4)$, $B(2, 1, 2)$ et $C(2, 5, 0)$ et $\Omega(3, 4, 4)$  
1. a) Montrer que: $$\overline{AB} \cap \overline{AC} = \frac{1}{4}(\overline{AB} \times \overline{AC})$$  
   b) Décrire la surface du triangle $ABC$ et la distance $d(B, (AC))$  
2. Soit $D$ le milieu du segment $[AC]$.  
   a) vérifier que $$\vec{DQ} = \frac{1}{4}(\overline{AB} \cap \overline{AC})$$  
   b) Déduire que $(\Omega, (ABC)) = 3$  
3. Soit $(S)$ la sphère d'équation $x^2 + y^2 + z^2 - 6x - 8y - 8z + 32 = 0$  
   a) Déterminer le centre et le rayon de la sphère $(S)$.  
   b) Montrer que le plan $(ABC)$ est tangent à la sphère $(S)$ en un point que l’on déterminera.  
4. On considère $(Q_1)$ et $(Q_2)$ les deux plans parallèles à $(ABC)$ tels que chacun d’eux coupe $S$ suivant un cercle de rayon $\sqrt{5}$.  
   Déterminer une équation cartésienne pour chacun des deux plans $(Q_1)$ et $(Q_2)$.  

### Exercice 05 (Examen 2022-Session-Normal)

On considère les points $A(0, 1, 1)$, $B(1, 2, 0)$ et $C(-1, 1, 2)$.  
1. a) Montrer que $$\overline{AB} \cap \overline{AC} = \mathbf{i} + \mathbf{j} + \mathbf{k}$$  
   b) En déduire que $x + z - 1 = 0$ est une équation cartésienne du plan $(ABC)$.  
2. Soit $(S)$ la sphère de centre $\Omega(1, 1, 2)$ et de rayon $R = \sqrt{2}$.  
   Déterminer une équation de la sphère $(S)$.  
3. Montrer que la droite $(D)$ passant par le point $C$ et perpendiculaire au plan $(ABC)$.  
   a) Déterminer une représentation paramétrique de la droite $(D)$.  
   b) Montrer que la droite $(D)$ est tangent à la sphère $(S)$ en un point $D$ dont on déterminera les coordonnées.  
   c) Calculer le produit scalaire $\overline{AC} \cdot (\mathbf{i} + \mathbf{k})$, puis en déduire la distance $d(A, (D))$.
```

<!-- Page 39 -->

```markdown
# Examens nationaux 
## géométrie dans l’espace corrigés

### 2 Bac sciences PC/SVT/ST

#### Exercice 06 (Examen 2022-Session-Rattrapage)
On considère les deux points $A(1, -1, 1)$ et $B(5, 1, -3)$. Soit $(S)$ la sphère de centre $\Omega(3, 0, -1)$ de rayon $R = 3$ et $(\Delta)$ la droite passant par le point $A$ et de vecteur directeur $\vec{u}(2, -2, 1)$.
1) a) Calculer la distance $d(A, B)$  
   b) Montrer que les droites $(\Delta)$ et $(\Omega)$ sont perpendiculaires  
   c) Déduire la position relative de la droite $(\Delta)$ et la sphère $(S)$  
2) a) Soit le point $M_a(2a - 3, -3 - 2a, a - 1)$ où $a \in \mathbb{R}$.  
   Montrer que $d(A, M_a) = 2\sqrt{2}$ et déduire que $M_a \in (S)$ pour tout $a \in \mathbb{R}$  
   b) Vérifier que $2x - 2y + z - 9a + 13 = 0$ est une équation du plan $(P_a)$ passant par $M_a$ et perpendiculaire à la droite $(\Delta)$.  
   c) Montrer que $d(\Omega, (P_a)) = |3a - 6|$.  
   d) Déterminer les deux valeurs de $a$ pour laquelle le plan $(P_a)$ est tangente à la sphère $(S)$.

#### Exercice 08 (Examen 2019--Rattrapage)
Dans l’espace rapporté à un repère $(0, \vec{i}, \vec{j}, \vec{k})$ orthonormé direct, on considère les points $A(1, 2, 2)$, $B(3, -1, 6)$ et $C(1, 1, 3)$.
1) a) Montrer que $\overline{AB} \land \overline{AC} = -\vec{i} - 2\vec{j} - 2\vec{k}$  
   b) Vérifier que $x - 2y - 2z + 7 = 0$ est une équation cartésienne du plan $(ABC)$.  
2) Soit les points $E(5, 1, 4)$ et $F(-1, 1, 12)$ et $(S)$ l’ensemble des points $M$ vérifiant $M\overline{E} \cdot \overline{F} = 0$.  
   Montrer que $(S)$ est la sphère de centre $\Omega(2, 1, 8)$ et de rayon $R = 5$.  
3) a) Calculer $d(\Omega, (ABC))$  
   b) En déduire que le plan $(ABC)$ coupe la sphère $(S)$ selon un cercle de rayon $r = 4$.

#### Exercice 10 (Examen 2018-Session-Rattrapage)
On considère la sphère $(S)$ de centre $\Omega(2, 1, 2)$ et de rayon $3$ et le plan $(P)$ passant par le point $A(-1, 0, 3)$ et $\vec{u}(4, 0, -3)$ est un vecteur normal à $(P)$.
1) Montrer qu'une équation de la sphère $(S)$ est 
$$ x^2 + y^2 + z^2 - 4x - 2y - 4z = 0 $$
2) Vérifier que $4x - 3z + 13 = 0$ est une équation du plan $(P)$.  
3) a) Vérifier que 
$$ (x = 2 + 4t, \, y = 1, \, z = 2 - 3t) \quad (t \in \mathbb{R}) $$
est une représentation paramétrique de la droite $(\Delta)$ passant par le point $\Omega$ et orthogonale au plan $(P)$.  
   b) Déterminer les coordonnées de $H$ point d'intersection de la droite $(\Delta)$ et $(P)$.  
4) a) Calculer $d(\Omega, (P))$  
   b) Montrer que le plan $(P)$ est tangent à la sphère $(S)$ en un point que l'on déterminera.
```

<!-- Page 40 -->

```markdown
# Examens nationaux géométrie dans l'espace corrigés

## 2 Bac sciences PC/SVT/ST

### PAGE 4

#### Prof FAYSAL : 0681399067
#### Prof de Fayssal

### Exercice 09 (Examen 2018-Session-Normal)
On considère les points $A(0; -2; -2) ; B(1; -2; -4)$ et $C(-3; -1; 2)$

1) Montrer que $\overrightarrow{AB} \wedge \overrightarrow{AC} = 2\mathbf{i} + 2\mathbf{j} + \mathbf{k}$ est un vecteur normal au plan (ABC) et en déduire que : 
$$ 
2x + 2y + z + 6 = 0 
$$ 
est une équation cartésienne du plan (ABC).

2) On considère la sphère (S) dont une équation est 
$$ 
x^2 + y^2 + z^2 - 2x - 2y - 2z - 23 = 0. 
$$ 
Vérifier que la sphère (S) a pour centre $\Omega(1; 0; 1)$ et pour rayon $R = 5.$

3) a) Vérifier que 
$$ 
\begin{cases} 
x = 1 + 2t \\ 
y = 2t \\ 
z = 1 + t 
\end{cases} 
$$ 
(t ∈ IR) est une représentation paramétrique de la droite (D) passant par $\Omega$ et orthogonale au plan (ABC).

b) Déterminer les coordonnées de $H$ point d'intersection de (D) et (ABC).

4) Vérifier que $\Omega ; (ABC) = 3$, puis montrer que (ABC) coupe la sphère (S) selon un cercle de rayon 4, dont on déterminera le centre.

### Exercice 11 (Examen 2017-Session-Normal)
Soit (P) le plan passant par le point $A(0, 1, 1)$ et dont un vecteur normal est $\mathbf{u}(1, 0, -1)$ soit (S) la sphère de centre $\Omega(0, -1) et de rayon $\sqrt{2}$.

1.a Montrer que $x - z + 1 = 0$ est une équation cartésienne du plan (P).

1.b. Montrer que le plan (P) est tangent à (S) au point $B(-1, 1, 0)$

2.a. Déterminer une représentation paramétrique de la droite (Δ) passant par le point A et orthogonale à (P).

2.b. Montrer que (Δ) est tangent à la sphère (S) en $C (1, 1, 0)$.

3. Montrer que $\overrightarrow{OB} \wedge \overrightarrow{OC} = 2\mathbf{k}$ puis en déduire l'aire du triangle OCB.

### Exercice 12 (Examen 2017 - Rattrapage)
1) Soit (S) la sphère d'équation $x^2 + y^2 + z^2 - 2x - 2y - 2z - 1 = 0$ et (P) le plan d'équation $y = 0$

a) Déterminer le centre et le rayon de la sphère (S).

### Exercice 14 (Examen 2016 - Rattrapage)
1) On considère les points $A(1, 3, 4)$ et $B(0, 1, 2)$.

a) Montrer que $\overrightarrow{OA} \wedge \overrightarrow{OB} = 2\mathbf{i} + \mathbf{k}$.

b) Montrer que $-2x + y - z = 0$ est une équation cartésienne du plan (OAB).

2) Montrer que (S) a pour centre le point $\Omega(-3, -3) et pour rayon 5$.

3.a) Montrer que le plan (OAB) est tangent à la sphère (S).

b) Déterminer les coordonnées du point de contact $H$ du plan (OAB) et de la sphère (S).
```

<!-- Page 41 -->

```markdown
# Examens nationaux géométrie dans l’espace corrigés

## Exercice 15 (Examen 2015-Session-Annulé)

On considère le point $A(2; 1; 0)$ et $B(-4; 1; 0)$.

1. Soit $(P)$ le plan passant par $A$ et de vecteur normal $\vec{U} = \vec{i} + \vec{j} - \vec{k}$.
   Montrer que $x + y - z - 3 = 0$ est une équation cartésienne de $(P)$.

2. Soit $(S)$ l’ensemble de points $M$ vérifiant la relation : $\overrightarrow{MA}.\overrightarrow{MB} = 0$.
   Montrer que $(S)$ est la sphère de centre $\Omega(-1; 1; 0)$ et de rayon $3$.
   a) Calculer la distance $d(\Omega, (P))$ et en déduire que $(P)$ coupe la sphère $(S)$ suivant un cercle $(C)$.
   b) Démontrer que le centre du cercle $(C)$ est $H(0; 2; -1)$.
   4) Montrer que : $\overrightarrow{OH} = \vec{i} + 4\vec{j} + 3\vec{k}$ puis en déduire l’aire du triangle OHB.

## Exercice 16 (Examen 2015-Session-Normal)

On considère le plan $(P)$ d’équation : $x + y + z + 4 = 0$ et la sphère $(S)$ de centre $\Omega(1; -1; -1)$ et de rayon $\sqrt{3}$.
1) a) Calculer la distance $d(\Omega, (P))$ et en déduire que le plan $(P)$ est tangent à la sphère $(S)$.
   b) Vérifier que le point $H(0; -2; -2)$ est le point de contact du plan $(P)$ et la sphère $(S)$.
2) On considère les deux points $A(2; 1; 1)$ et $B(1; 0; 1)$.
   a) Vérifier que $\vec{n} = -\vec{i} - \vec{j} + \vec{k}$ et un vecteur normal au plan $(OAB)$ et en déduire que $x - y - z = 0$ est une équation cartésienne du plan $(OAB)$.
   b) Déterminer une représentation paramétrique de la droite $(D)$ passant par le point $\Omega$ et orthogonale au plan $(OAB)$.
   c) Déterminer les coordonnées de chacun des deux points d'intersection de la droite $(D)$ et la sphère $(S)$.

## Exercice 17 (Examen 2015-Session-Rattrapage)

On considère, dans l'espace rapporté à un repère orthonormé direct $(O; \vec{i}; \vec{j}; \vec{k})$, le plan $(P)$ d'équation $2x - z - 2 = 0$ et la sphère $(S)$ d'équation : $x^2 + y^2 + z^2 - 2x - 2z - 7 = 0$.
1. Montrer que le centre de la sphère $(S)$ est le point $\Omega(1; 0; 1)$ et son rayon est $3$.
2. a) Calculer la distance du point $\Omega$ au plan $(P)$.
   b) En déduire que le plan $(P)$ coupe la sphère $(S)$ suivant un cercle $(G)$.
3. Montrer que le rayon du cercle $(G)$ est $2$ et déterminer les coordonnées du point $H$ centre du cercle $(G)$.

## Exercice 18 (Examen 2009-Session-Normal)

On considère, dans l'espace rapporté à un repère orthonormé direct $(O; \vec{i}, \vec{j}, \vec{k})$, les deux points $A(0; -1; 1)$, $B(1; -1; 0)$ et la sphère $(S)$ d'équation :
$$ x^2 + y^2 + z^2 - 2x - 4z + 2 = 0 $$
1 - Montrer que le centre de la sphère $(S)$ est le point $\Omega(1; 0; 2)$ et que son rayon est $\sqrt{3}$ puis vérifier que $A$ appartient à $(S)$.
2 - Déterminer les coordonnées du vecteur $\overrightarrow{OA} \land \overrightarrow{OB}$ et montrer que $x + y + z = 0$ est une équation cartésienne du plan $(OAB)$.
3 - Montrer que le plan $(OAB)$ est tangent à la sphère $(S)$ au point $A$.
```

<!-- Page 42 -->

```
# Offre préparation concours 2026 - Prof Fayssal
- Plus 20 séances en vidéos de préparation Médecine
- Plus 20 séances en vidéos pour ENSA-ENSAM-UM6P
- Nouvelle offre à partir de mois 6 avec des séances en directes et interactives
- Deux livres de préparation Médecine-ENSA-ENSAM contiennent des astuces, plus de 20 concours blancs corrigés et la correction des anciens concours

Pour participer : 06813999067

---

**خاصة تحضير الطب (20 حصة)** على  فيس بوك للرجوع إليها  
**خاصة لتمارين وقصص (20 حصة)** عبر ZOOM وسمية  
**بالكامل،**  
- كتابات شاملة في الرياضيات 📚 مع تصحيحات مفصلة وتمارين نوعية.  
- المعاينات السابقة.  
- عرض و حصص مباشرة يوميا بدءا من شهر 6 لتدريب دقيق  

06813999067 
```

<!-- Page 43 -->

```markdown
# Examens nationaux géométrie dans l’espace corrigés

## 2 Bac sciences PC/SVT/ST

### PAGE 6

#### Exercice (Examen 2025-Session-Normal)
On considère les deux points $A(2, 0, 0)$ et $B(0, 0, 2)$, et la sphère $(S)$ de centre $O$ et de rayon $R = 2$.

1) a) Déterminer l'équation cartésienne de la sphère $(S)$.
   
   b) Vérifier que les points $A$ et $B$ appartiennent à la sphère $(S)$.

2) Soit $I$ le milieu du segment $[AB]$.

   a) Déterminer l'intersection du plan $(OAB)$ avec la sphère $(S)$.
   
   b) Vérifier que $\overline{OI} \cdot \overline{AB} = 0$ puis montrer que $d(O, (AB)) = \sqrt{2}$.

3) On considère un point $M(m, 0, m)$ de l'espace où $m \in \mathbb{R}$.

   a) Vérifier que $\overline{AB} \cap \overline{AM} = 2m\mathbf{i} + 4\mathbf{j} + 2m\mathbf{k}$.
   
   b) Déduire que $mx + 2y + mz + 2m = 0$ est une équation cartésienne du plan $(ABM)$.
   
   c) Montrer que $d(O, (ABM)) = \frac{2m}{\sqrt{4 + 2m^2}}$.

4) Le plan $(ABM)$ coupe la sphère $(S)$ suivant un cercle $(\Gamma)$ de rayon $r$.

   Montrer que $r = \sqrt{2 + \frac{4}{2 + m^2}}$ et déduire que $\sqrt{2 < r \leq 2}$ pour tout $m \in \mathbb{R}$.

---

#### Correction de l’exercice d’examen 2025 session normale

On considère les points $A(0, 0, 2)$ et $B(2, 0, 0)$ et la sphère $(S)$ de centre $O$ et de rayon $R = 2$.

1) Déterminer l'équation cartésienne de la sphère $(S)$.

   Rappel : Sphère dans l’espace
   
   Soit $(S)$ la sphère de centre $\Omega(a; b; c)$ et de rayon $r$, l'équation cartésienne de $(S)$ est :
   $$(x - a)^2 + (y - b)^2 + (z - c)^2 = r^2$$
   L'équation cartésienne de la sphère $(S)$ de centre $O(0, 0, 0)$ et de rayon $R = 2$ est :
   $$(S): (x - 0)^2 + (y - 0)^2 + (z - 0)^2 = 2^2,$$
   donc $(S): x^2 + y^2 + z^2 - 4 = 0$.

   b) Vérifier que les points $A$ et $B$ appartiennent à la sphère $(S)$.

   On a $A(0, 0, 2)$ et $x_A^2 + y_A^2 + z_A^2 = 4 = 0 + 4 - 4 = 0$, alors $A \in (S)$ et $B(2, 0, 0)$.
   
   On a $x_B^2 + y_B^2 + z_B^2 - 4 = 4 + 0 + 0 - 4 = 0$, Alors $B \in (S)$.

2) Soit $I$ le milieu du segment $[AB]$.
   
   Donc $I\left(\frac{x_A + x_B}{2}, \frac{y_A + y_B}{2}, \frac{z_A + z_B}{2}\right)$

   D'où $I(1, 0, 1)$ et $OI(1, 0, 1)$ et on a :
   $$\overline{AB}(x_B - x_A, y_B - y_A, z_B - z_A),$$
   
   Donc $\overline{AB}(2, 0, -2)$,
   
   Alors :
   $$ \overline{OI} = 1 \times 2 + 0 \times 0 + 1 \times (-2) = 2 - 2 = 0,$$

   D'où $ \overline{OI} \cdot \overline{AB} = 0$, par conséquent $(O) \perp (AB)$,
   
   Donc $d(O, (AB)) = OI = \sqrt{1^2 + 0^2 + 1^2} = \sqrt{2}$.

3) On considère un point $M(m, 0, 0)$ de l'espace où $m \in \mathbb{R}$.

   a) Vérifier que $\overline{AB} \cap \overline{AM} = 2m\mathbf{i} + 4\mathbf{j} + 2m\mathbf{k}$.
   
   Rappel :
   Expression analytique du produit vectoriel :
   $$\mathbf{u} \land \mathbf{v} = \begin{vmatrix}
   \mathbf{i} & \mathbf{j} & \mathbf{k} \\
   \frac{y}{z} & \frac{z}{x'} & \frac{x'}{y'} \\
   x' & y' & z'
   \end{vmatrix} = \mathbf{y} \mathbf{z}' - \mathbf{z} \mathbf{y}' + \mathbf{x}' \mathbf{y} - \mathbf{x} \mathbf{y}' + \mathbf{x}' \mathbf{y} - \mathbf{x}' \mathbf{y} \mathbf{k}$$
```

<!-- Page 44 -->

```markdown
# Examens nationaux géométrie dans l’espace corrigés
## 2 Bac sciences PC/SVT/ST PAGE 7

On a $AB(2, 0, -2)$ et $AM(0 - 0, m - 0, 0 - 2)$ donc $AM(0, m, -2)$.
$$
\overline{AB} \land \overline{AM} =
\begin{pmatrix}
2 \\
0 \\
-2
\end{pmatrix}
\land
\begin{pmatrix}
0 \\
m \\
-2
\end{pmatrix} =
\begin{pmatrix}
0 \\
m \\
-2
\end{pmatrix} \times 
\begin{pmatrix}
-2 \\
0 \\
0
\end{pmatrix} =
\begin{pmatrix}
0 \\
-2m \\
0
\end{pmatrix} + 
\begin{pmatrix}
0 \\
-2 \\
-2
\end{pmatrix}j + 
\begin{pmatrix}
2m \\
-4 \\
0
\end{pmatrix}k
$$
$$
= 2m\hat{i} + 4\hat{j} + 2m\hat{k}
$$
b. Déduire que $mx + 2y + mz - 2m = 0$ est une équation cartésienne du plan (ABM).
Rappel:
Le vecteur $\overline{AB} \land \overline{AC}$ est un vecteur normal au plan (ABC).

On a montré à la question 3.b. que
$$
\overline{AB} \land \overline{AM} =
\begin{pmatrix}
2 \\
4 \\
2
\end{pmatrix}
$$
et en posant
$$
\vec{n} = \frac{1}{2} \overline{AB} \land \overline{AM} \text{ alors } \vec{n}(m, 2, m) \text{ est un vecteur normal au plan (ABM). Donc une équation cartésienne du plan (ABM) est : } mx + 2y + mz + c = 0 \text{ et comme } A(0, 0, 2) \in (ABM) alors $c = 0$ donc $c = -2m$.
$$
Par conséquent $mx + 2y + mz - 2m = 0$ est une équation cartésienne du plan (ABM).
c) Montrer que $d(O, (ABM)) = \frac{2|m|}{\sqrt{4 + 2m^2}}$.

Rappel:
DISTANCE D’UN POINT $\Omega$ À UN PLAN $(P)$
$$
d(\Omega; (P)) = \frac{|ax_0 + by_0 + cz_0 + d|}{\sqrt{a^2 + b^2 + c^2}}
$$

On a
$$
d(O, (ABM)) = \frac{|m \cdot 0 + 2 \cdot 0 + m \cdot 0 - 2m|}{\sqrt{m^2 + 2^2 + m^2}} = \frac{2|m|}{|2|m|} = \frac{\sqrt{4 + 2m^2}}{2|m|}.
$$
D'où $d(O, (ABM)) = \frac{2|m|}{\sqrt{4 + 2m^2}}$.

4) Le plan $(ABM)$ coupe la sphère $(S)$ suivant un cercle $(\Gamma)$ de rayon $r$.
Montrer que 
$$
r = \sqrt{2 + \frac{4}{2 + m^2}}
$$ 
et déduire que 
$$
\sqrt{2} < r < 2, \text{ pour tout } m \in \mathbb{R}.
$$

On a le plan $(ABM)$ coupe la sphère $(S)$ suivant un cercle $(\Gamma)$ de rayon $r$.
Donc $d(O, (ABM)) \leq r$ et on a
$$
r =
\sqrt{2^2 - \frac{2|m|}{\sqrt{4 + 2m^2}}} = \frac{8 + 2m^2}{2 + m^2}.
$$
D'où $r = \sqrt{2 + \frac{4}{2 + m^2}}$.

Soit $m \in \mathbb{R}$, on a
$$
m^2 \geq 0 \Rightarrow 2 + m^2 \geq 2 \Rightarrow 0 < \frac{2}{2 + m^2} \leq 1
$$
$$
\Rightarrow 0 < \frac{4}{2 + m^2} \leq 2 < 2 + \frac{4}{2 + m^2} \leq 4.
$$
D'où $\sqrt{2} < r < 2$.

Exercice (Examen 2025-Rattrapage)
Dans l'espace rapporté à un repère orthonormé direct $(O, \hat{i}, \hat{j}, \hat{k})$, on considère les points $A(0, 3, 3)$, $B(1, 2, 1)$, $C(2, 3, 1)$ et le vecteur $\vec{n}(1, -1, 1)$. Soit $(P)$ le plan d'équation $x + y + z - 6 = 0$.
1a) Montrer que $\overline{AB} \land \overline{AC} = 2\hat{n}$ et déduire que les points $A, B$ et $C$ ne sont alignés.
b) Montrer que les plans $(ABC)$ et $(P)$ sont parallèles.
2) Soit $(S)$ la sphère telle que : le plan $(ABC)$ est tangent à $(S)$ en un point $H$.
a) Calculer la distance du point $A$ au plan $(P)$ et déduire que le rayon de la sphère $(S)$ est $\sqrt{3}$.
b) Donner une représentation paramétrique de la droite $(\Delta)$ passant par $A$ et orthogonale au plan $(P)$.
```

<!-- Page 45 -->

```markdown
# Examens nationaux géométrie dans l'espace corrigés

## 2 Bac sciences PC/SVT/ST

### PAGE 8

c) Montrer que les coordonnées du point $H$ sont $(2, 1, 5)$.
d) Montrer que $x^2 + y^2 + z^2 - 2x - 4y - 8z + 18 = 0$ est une équation cartésienne de la sphère $(S)$.
3) Déterminer les deux points d'intersection de la droite $(BH)$ et la sphère $(S)$.

**Correction de l'exercice d'examen 2025 session de pattrage**

On considère les points $A(0, 3, 3)$, $B(1, 2, 1)$, $C(2, 3, 1)$ et le vecteur $\vec{n}(1, -1, -1)$. Soit $(P)$ le plan d'équation $x - y + z - 6 = 0$.
1) a) Montrer que $\overrightarrow{AB} \wedge \overrightarrow{AC} = 2\pi$ et déduire que les points $A$, $B$ et $C$ sont non alignés.

**Rappel:**
Expression analytique du produit vectoriel

$$ \overline{U} \wedge \overline{V} = \begin{vmatrix}
\hat{i} & \hat{j} & \hat{k} \\
y & z & \frac{x}{x'} \\
x' & y' & z' 
\end{vmatrix} $$

$$ \overline{U} \text{ et } \overline{V} \text{ sont colinéaires ssi } \overline{U} \wedge \overline{V} = \overrightarrow{0} $$
$$ A; B \text{ et } C \text{ sont alignés si } \overrightarrow{AB} \wedge \overrightarrow{AC} = \overrightarrow{0} $$

Puisque $A(0, -1, -2)$ et $AC(2, 0, -2)$, alors 

$$ \overrightarrow{AB} \wedge \overrightarrow{AC} = \begin{vmatrix}
-1 & 0 & -2 \\
0 & -2 & 2 \\
1 & 1 & -1 
\end{vmatrix} = 2\hat{i} - 2\hat{j} + 2\hat{k} = 2\pi $$

( car $2\pi \neq \overrightarrow{0}$ ).

Il est évident que $n \neq 0$ donc $\overrightarrow{AB} \wedge \overrightarrow{AC} \neq \overrightarrow{0}$ d'où les vecteurs $\overrightarrow{AB}$ et $\overrightarrow{AC}$ ne sont pas colinéaires, par conséquent les points $A$, $B$ et $C$ ne sont pas alignés.

b) Montrer que les plans $(ABC)$ et $(P)$ sont parallèles.

Un vecteur normal au plan $(P)$ est $\vec{n}$ et un vecteur normal au plan $(ABC)$ est 

$$ \overrightarrow{AB} \wedge \overrightarrow{AC} = 2\pi. $$ 
Comme les vecteurs $\overrightarrow{AB} \wedge \overrightarrow{AC}$ et $\vec{n}$ sont colinéaires, alors les plans $(P)$ et $(ABC)$ sont parallèles. 

2) Soit $(S)$ la sphère telle que : le plan $(ABC)$ est tangent à $(S)$ en $A$ et le plan $(P)$ est tangent à $(S)$ en un point $H$. 

a) Calculer la distance du point $A$ au plan $(P)$ et déduire que le rayon de la sphère $(S)$ est $\sqrt{3}$.

**Rappel:**
DISTANCE D'UN POINT $\Omega$ À UN PLAN $(P)$

$$ d(\Omega; (P)) = \frac{|ax_0 + by_0 + cz_0 + d|}{\sqrt{a^2 + b^2 + c^2}} $$

$$ d(A, (P)) = \frac{|4x_A - y_A + z_A - 6|}{\sqrt{12 + 1 + 1}} = \frac{6}{\sqrt{3}} = 2\sqrt{3} $$

On a 

$$ ( Le \ plan \ (ABC) \ est \ tangent \ à \ la \ sphère \ (S) \ en \ A $$
$$ ( Le \ plan \ (P) \ est \ tangent \ à \ la \ sphère \ (S) \ en \ H \ (ABC) \parallel (P) $$

Donc le diamètre de la sphère $(S)$ est $[AH]$ et on a : $AH = d(A, (P)) = 2\sqrt{3}$ par conséquent le rayon de la sphère $(S)$ est 

$$ R = \frac{AH}{2} = \frac{2\sqrt{3}}{2} = \sqrt{3} $$

b) Donner une représentation paramétrique de la droite $(\Delta)$ passant par $A$ et orthogonale au plan $(P)$.

On a la droite $(\Delta)$ passant par $A$ et orthogonale au plan $(P)$. 

Et $\vec{n}(1, -1, 1)$ est un vecteur normal au $(P)$.

Alors $( \Delta ) \perp (P)$

Et puisque la droite $(\Delta)$ passe par le point $A(0, 3, 3)$, alors une représentation paramétrique de la droite $(\Delta)$ est :

$$ x = t $$
$$ y = 3 - t (t \in \mathbb{R}) $$
$$ z = 3 + t $$
```

<!-- Page 46 -->

```markdown
# Examens nationaux géométrie dans l’espace corrigés

## 2 Bac sciences PC/SVT/ST PAGE 9

### c) Montrer que les coordonnées du point H sont $(2, 1, 5)$.

On a
$$
\begin{cases}
(\Delta) \perp (P) \\
(P) \parallel (ABC) , \text{ alors } (\Delta) \text{ passe par } A
\end{cases}
$$
Donc H est le point d'intersection du plan $(P)$ et la droite $(\Delta)$ dont les coordonnées de H sont les solutions du système
$$
\begin{cases}
x = t \\
y = 3 - t \\
z = 3 + t \\
(x - y + z - 6 = 0)
\end{cases}
$$
$$
\begin{cases}
x = t \\
y = 3 - t \\
z = 3 + t\\
(-y + z - 6 = 0)
\end{cases} \Longleftrightarrow \begin{cases}
x = t \\
y = 3 + t \\
z = 1 \\
3t - 6 = 0
\end{cases}
$$
Alors $H(2, 1, 5)$.

### d) Montrer que $x^2 + y^2 + z^2 - 2x - 4y - 8z + 18 = 0$ est une équation cartésienne de la sphère $(S)$.

Rappel :
L’équation cartésienne de la sphère $(S)$ définit par son diamètre $[AB]$ est donné par
$$ M(x; y; z) \in (S) \iff \overrightarrow{AM}.\overrightarrow{BM} = 0 $$

On a montré que la sphère $(S)$ a pour diamètre $[AH]$ Donc une équation cartésienne de la sphère $(S)$ est :
$$ M(x; y; z) \in (S) \iff \overrightarrow{AM}.\overrightarrow{HM} = 0 $$
$$ \Longleftrightarrow (x - x_A)(x - x_H) = 0 $$
$$ \Longleftrightarrow (z - z_A)(z - z_H) + (y - y_A)(y - y_H) + (z - z_A)(z - z_H) = 0 $$
$$ \Longleftrightarrow x^2 - 2x + y^2 - 4y + 3 + z^2 - 8z + 15 = 0 $$
$$ x^2 + y^2 + z^2 - 2x - 4y - 8z + 18 = 0 $$

### 3) Déterminer les deux points d'intersection de la droite $(BH)$ et la sphère $(S)$.

Soit $M(x,y)$ un point d'intersection de la droite $(BH)$ et la sphère $(S)$ alors $(x,y)$ est solution du système
$$
\begin{cases}
(x = 1 + t) \\
(y = 2 - t) \\
(z = 1 + 4t) \\
x^2 + y^2 + z^2 - 2x - 4y - 8z + 18 = 0
\end{cases}
$$
$$
\Longleftrightarrow \begin{cases}
x = 1 + t \\
y = 2 - t \\
z = 1 + 4t
\end{cases}
$$
$$
\Longleftrightarrow \begin{cases}
y = 2 - t \\
z = 1 + 4t \\
(x - 1)^2 + (y - 2)^2 + (z - 4)^2 = 3
\end{cases}
$$
Résolvons l’équation du second degré
$$ 3t^2 - 4t + 1 = 0 $$
On a $\Delta = (-4)^2 - 4 \times 3 \times 1 = 4$.
D'où les solutions de cette équation sont :
$$ t_1 = \frac{4 - \sqrt{4}}{6} = \frac{2}{6} = \frac{1}{3} $$
$$ t_2 = \frac{4 + \sqrt{4}}{6} = 1 $$
```

<!-- Page 47 -->

```markdown
# Examens nationaux géométrie dans l’espace corrigés

## 2 Bac sciences PC/SVT/ST PAGE 10

### 1ère méthode :
On a le vecteur normal $\vec{n} = (2,-2,1)$.

Soit $M(x; y; z) \in (P)$  
On a le vecteur $\vec{n} = (2,-2,1)$ est normale au plan $(P)$  
Donc $(P): 2x - 2y + z + d = 0$  
Donc $2x - 2y + z + d = 0$  
Et on a $A(-1,0,-1) \in (P)$ donc on remplace les coordonnées de $A$  
donc $-2 - 0 + 1 + d = 0$ donc $-3 + d = 0$ donc $d = 3$  
D'où $(P): 2x - 2y + z + 3 = 0$

### 2ème méthode :
On a $(P)$ passant par $A$ et de vecteur normal $\vec{n} = (2,-2,1)$.

Soit $M(x; y; z) \in (P)$ on a : $\vec{AM} \cdot \vec{n} = 0$  
 $\Rightarrow (2(x + 1) + (-2)(y - 0) + 1(x + 2 1) = 0$  
 $\Rightarrow x + 2 - 2y + z + 1 = 0$  
 $\Rightarrow 2x - 2y + z + 3 = 0$

### 2) Déterminer une équation cartésienne de la sphère $(S)$
On a $(S)$ est la sphère de centre $\Omega(2;-1;0)$ et de rayon $R = 5$  
Soit $M(x,y,z) \in (S)$  
On a $\Omega^2 = R^2$  
$\Rightarrow (x - 2)^2 + (y + 1)^2 + (z - 0)^2 = 5^2$  
$\Rightarrow (x - 2)^2 + (y + 1)^2 + z^2 = 25$  
$\Rightarrow x^2 - 4x + 4 + y^2 + 2y + 1 + z^2 = 25$  
$\Rightarrow x^2 + y^2 + z^2 - 4x + 2y = 20 = 0$

### 3)a) Vérifier que la distance de $\Omega$ au plan $(P)$ est 
$d(\Omega, (P)) = 3$

### Rappel : DISTANCE D’UN POINT À UN PLAN
$d(\Omega; (P)) = \frac{|ax_0 + by_0 + cz_0 + d|}{\sqrt{a^2 + b^2 + c^2}}$  
$d(\Omega; (P)) = \frac{|2(2) - 2(-2) + 0 + 3|}{\sqrt{2^2 + (-2)^2 + 1^2}}$  
$= \frac{|2 \cdot 2 - 2 \cdot (-2) + 0 + 3|}{\sqrt{4 + 4 + 1}}$  
$= \frac{|4 + 4 + 3|}{\sqrt{9}}$  
$= \frac{9}{3} = 3$

Donc $d(\Omega; (P)) = 3$

### Solution
On considère les deux points $A(-1,0,-1)$ et $B(1,2,-1)$, le plan $(P)$ passant par $A$ et de vecteur normal $\vec{n} = (2,-2,1)$ et la sphère $(S)$ de centre $\Omega(2;-1;0)$ et de rayon $5$

1) Montrer que $2x - 2y + z + 3 = 0$ est une équation cartésienne du plan $(P)$
```

<!-- Page 48 -->

```markdown
# Examens nationaux géométrie dans l’espace corrigés 

## 2 Bac sciences PC/SVT/ST PAGE 1 1

b) En déduire que le plan $(P)$ coupe la sphère $(S)$ suivant un cercle $(T)$ de rayon à déterminer.

On a : $d(\Omega; (P)) = 3 < R$, donc le plan $(P)$ coupe la sphère $(S)$ selon un cercle $(C)$ de rayon $r$.

$$ r = \sqrt{R^2 - d^2} $$
$$ = \sqrt{52 - 32} $$
$$ = \sqrt{16} $$
$$ = 4 $$

4a) Déterminer une représentation paramétrique de la droite $(\Delta)$ passant par $\Omega$ et perpendiculaire au plan $(P)$.

On a $(\Delta)$ la droite passant par $\Omega$ et perpendiculaire au plan $(P)$ donc $\vec{n}$ est un vecteur directeur de la droite $(\Delta)$.

Soient $M(x,y,z) \in (\Delta)$ et $t \in \mathbb{R}$ on a :
$$(x = 2 + 2t$$
$$y = -1 - 2t / (t \in \mathbb{R})$$
$$z = t$$

b) Montrer que le point $H(0, 1, 1)$ est le centre du cercle $(\Gamma)$.

Rappel:
Pour déterminer les coordonnées de $H$ on résoudre le système suivant :
$$
\begin{cases}
x = x_0 + at \\
y = y_0 + bt \\
z = z_0 + ct 
\end{cases}
$$
où $(\Omega)$: $y = y_0 + bt$ ; $(t \in \mathbb{R})$

On a $(\Delta)$ la droite passant par $\Omega$ et perpendiculaire au plan $(P)$ et le plan $(P)$ coupe la sphère $(S)$ selon un cercle $(C)$ de centre $H$ donc $H$ est le projeté orthogonal de $\Omega$ sur $(P)$.

Donc $H \in (P) \cap (\Delta) \Leftrightarrow$ 
$$
\begin{cases}
x_H = 2 + 2t \\
y_H = -1 - 2t \, (t \in \mathbb{R}) \\
z_H = t  \\
(2x_H - 2y_H + z_H + 3 = 0)
\end{cases}
$$

D'où : $H(0; 1; -1)$ est le centre du cercle $(\Gamma)$.

c) Montrer que la droite $(\Delta)$ est une médiatrice du segment $[AB]$.

On a : $\vec{n}(2; -2; 1)$ et $\vec{AB}(2; 2; 0)$.

Donc $\vec{n} \cdot \vec{AB} = 2 \times 2 + (-2) \times 2 + 1 \times 0 = 4 - 4 = 0$, donc $(AB) \perp (\Delta)$.

Déterminons les coordonnées du milieu de $[AB]$.

$$
\frac{x_A + x_B}{2} = \frac{1 + (-1)}{2} = 0
$$
$$
\frac{y_A + y_B}{2} = \frac{2 + 0}{2} = 1
$$
$$
\frac{z_A + z_B}{2} = \frac{(-1) + (-1)}{2} = -1
$$

Donc $H$ est le milieu du segment $[AB]$.

Donc $H \in (\Delta)$.

D'où $(\Delta)$ est la médiatrice de $[AB]$.
```

<!-- Page 49 -->

```markdown
# Examens nationaux géométrie dans l’espace corrigés

## 2 Bac sciences PC/SVT/ST PAGE 12

### Exercice 02 (Examen 2024-Session-Rattrapage)

On considère les deux points $A(1, 1, 0)$ et $\Omega(-1, 1, -2)$ et le plan $(P)$ d'équation $x + z - 1 = 0$.  
(1) a) Vérifier que $A$ est un point du plan $P$ et donner un vecteur normal à $P$  
b) Montrer que la droite $(\Omega A)$ est perpendiculaire au plan $(P)$  
(2) Soit $(S)$ l'ensemble des points $M(x, y, z)$ de l'espace vérifiant:  
$$ x^2 + y^2 + z^2 + 2x - 2y + 4z - 3 = 0. $$  
a) Montrer que $(S)$ est une sphère de centre $\Omega$ et déterminer son rayon.  
b) Montrer que $(P)$ coupe $(S)$ suivant un cercle de centre à désigner son rayon.  
(3) Soit $(Q_m)$ un plan d'équation $x + y + mz = 2 = 0$, où $m$ est un nombre réel.  
a) Vérifier que $A$ est un point du plan $(Q_m)$, tout m de $\mathbb{R}$.  
b) Déterminer la valeur de $m$ pour que $(Q_m)$ soit perpendiculaire au plan $(P)$.  
c) Existe-t-il un plan $(Q_m)$ qui coupe la sphère $(S)$ suivant un cercle de centre $A$ ? Justifier.

### Solution

Soient les deux points $A(1, 1, 0)$ et $\Omega(-1, 1, -2)$ et le plan $(P)$ d'équation $x + z - 1 = 0$  
1) a) Vérifier que $A$ est un point du plan $P$ et donner un vecteur normal à $P$  
On a $1 + 0 - 1 = 0 \quad donc \quad A \in (P)$  
Le vecteur $\vec{n}(-1, 0, 1)$ est un vecteur normal à $(P)$  
b) Montrer que la droite $(\Omega A)$ est perpendiculaire au plan $(P)$  
On a $A(1, 1, 0)$ et $\Omega(-1, 1, -2)$  
Donc $|\Omega A| = 2\sqrt{2}$  
Donc $\Omega A = \pi$  
Donc $\Omega A$ et $\vec{n}$ sont colinéaires  
Donc la droite $(\Omega A)$ est perpendiculaire au plan $(P)$  

(2) Soit $M(x; y; z) \in (S)$  
$(S) \iff x^2 + y^2 + z^2 + 2x - 2y + 4z - 3 = 0$  
$$ \iff x^2 + 2x + 12 + y^2 - 2y + 12 + z^2 + 4z + 22 = 12 + 12 + 22 + 3 $$  
$$ \iff (x + 1)^2 + (y - 1)^2 + (z + 2)^2 = 32 $$  
Donc $(S)$ est une sphère de centre $\Omega(-1, 1, -2)$ et de rayon $R = 3$  

(3) 2ème méthode  
Soit $M(x; y; z) \in (S)$  
$(S) \iff x^2 + y^2 + z^2 + 2x - 2y + 4z - 3 = 0$  
$$ \iff x^2 + 2x + 12 + y^2 - 2y + 12 + z^2 + 4z + 22 = 12 + 12 + 22 + 3 $$  
$$ 12 + 12 + 22 + 3 = 36 > 0 $$  
$$ \implies (x + 1)^2 + (y - 1)^2 + (z + 2)^2 = 32 $$  
Donc $(S)$ est une sphère de centre $\Omega(-1, 1, -2)$ et de rayon $R = 3$  
```

<!-- Page 50 -->

```markdown
b) Montrer que $(P)$ coupe $(S)$ suivant un cercle de centre $A$ puis déterminer son rayon.

Rappel : DISTANCE D’UN POINT à UN PLAN  
Soient $(P) : ax + by + cz + d = 0$ un plan et $A(x_A ; y_A ; z_A)$ un point.

La distance de point $A$ au plan $(P)$ est :  
$$ d(A ; (P)) = \frac{|ax_A + by_A + cz_A + d|}{\sqrt{a^2 + b^2 + c^2}} $$

On a $(P): x + z - 1 = 0$ et $\Omega(-1, 1, -2)$  
$$ d(\Omega; (P)) = \frac{|-1 - 2 - 1|}{\sqrt{1^2 + 0^2 + 1^2}} = \frac{4}{\sqrt{2}} = 2\sqrt{2} $$  

Donc $d(\Omega ; (P)) = 2\sqrt{2} < R = 3$

Donc le plan $(P)$ coupe $(S)$ suivant un cercle.

On a la droite $(\Omega A)$ est perpendiculaire au plan $(P)$ et $A \in (P)$ donc $A$ est la projection orthogonale de $\Omega$ sur $(P)$.

Donc $(P)$ coupe $(S)$ suivant un cercle de centre $A$ et de rayon $r = \sqrt{R^2 - d^2}$  
$$ r = \sqrt{3^2 - (2\sqrt{2})^2} = \sqrt{9 - 8} = 1 $$

Remarque :  
Tu peux remarquer que $A$ est solution du système suivant car $A \in (P)$ :  
$$ \begin{cases}  
(x) : x = x_0 + at \\  
(\Omega) : (y) : y = y_0 + bt ; \ (t \in \mathbb{R}) \\  
(z) : z = z_0 + ct \\  
(P) : ax + by + cz + d = 0  
\end{cases} $$

D’où $A$ est le centre de $(S)$.

---

3) Soit $(Q_m)$ un plan d'équation  
$$ x + y + mz - 2 = 0, \ où\ m\ est\ un\ réel. $$

a) Vérifier que $A$ est un point du plan $(Q_m)$, pout tout $m \in \mathbb{R}$.  
On a $A(1, 1, 0)$  
Donc $1 + 1 + m \times 0 - 2 = 0$  
Donc $A$ est un point du plan $(Q_m)$, pout tout $m \in \mathbb{R}$.

b) Déterminer la valeur de $m$ pour que $(Q_m)$ soit perpendiculaire au plan $(P)$.  
Le vecteur $\vec{n}(1,0,1)$ est un vecteur normal à $(P)$  
Le vecteur $\vec{n'}(1,1,m)$ est un vecteur normal à $(Q_m)$.  
On a $(Q_m)$ est perpendiculaire au plan $(P)$.  
$$ \vec{n}.\vec{n'} = 0 $$  
Donc $1 + 0 + m = 0$  
Donc $m = -1$.

c) Existe-t-il un plan $(Q_m)$ qui coupe la sphère $(S)$ suivant un cercle de centre $A ?$ Justifier.  
Supposons qu'il existe un plan $(Q_m)$ qui coupe la sphère $(S)$ suivant un cercle de centre $A$.

Donc la droite $(\Omega A)$ est perpendiculaire au plan $(Q_m)$.  
Donc les vecteurs $\overrightarrow{\Omega A}(2, 0, 2)$ et $\vec{n}(1, 1, m)$ sont colinéaires.  
Donc il existe un réel $t$ tel que $\overrightarrow{\Omega A} = t \vec{n}$.  
$$ \begin{cases}  
2 = t \\  
0 = t \  \text{ donc } \ 0 = 2\ \text{ absurde}. \\  
2 = mt  
\end{cases} $$  
Donc il n’existe aucun plan $(Q_m)$ qui coupe la sphère $(S)$ suivant un cercle de centre $A$.
```

<!-- Page 51 -->

```markdown
# Examens nationaux géométrie dans l’espace corrigés

## 2 Bac sciences PC/SVT/ST

**PAGE 14**

### Exercice 03 (Examen 2023-Session-Normal)

Dans l’espace rapporté à un repère orthonormé direct $(O, \mathbf{i}, \mathbf{j}, \mathbf{k})$, on considère les points $A(0, 1, 4)$, $B(2, 1, 2)$, $C(2, 5, 0)$ et $\Omega(3, 4, 4)$

1) a) Montrer que $ \mathbf{AB} \land \mathbf{AC} = 4(2\mathbf{i} + \mathbf{j} + 2\mathbf{k}) $  
b) Déduire la surface du triangle ABC et la distance $d(B, (AC))$

2) Soit D le milieu du segment $[AC]$  
a) Vérifier que $D\Omega = \frac{1}{4} (\mathbf{AB} \land \mathbf{AC})$  
b) Déduire que $d(\Omega, (ABC)) = 3$

3) Soit $(S)$ la sphère d’équation cartésienne $x^2 + y^2 + z^2 - 6x - 8y - 8z + 32 = 0$  
a) Déterminer le centre et le rayon de la sphère $(S)$  
b) Montrer que le plan $(ABC)$ est tangent à la sphère $(S)$ en un point que l’on déterminera  
c) En considérant $(Q_1)$ et $(Q_2)$ les deux plans parallèles $(ABC)$ tels que chacun d’eux coupe $(S)$ suivant un cercle de rayon $\sqrt{5}$  
Déterminer une équation cartésienne pour chacun des deux plans $(Q_1)$ et $(Q_2)$

### Correction de l’exercice

On considère les points $A(0, 1, 4)$, $B(2, 1, 2)$, $C(2, 5, 0)$ et $\Omega(3, 4, 4)$

1) a) Montrer que $ \mathbf{AB} \land \mathbf{AC} = 4(2\mathbf{i} + \mathbf{j} + 2\mathbf{k}) $  
$$ \mathbf{AB} \land \mathbf{AC} = \left| \begin{array}{ccc}
\mathbf{i} & \mathbf{j} & \mathbf{k} \\
0 & -2 & 4 \\
2 & -4 & -4
\end{array} \right| = \mathbf{i}\left| \begin{array}{cc}
-2 & 4 \\
-4 & -4
\end{array} \right| - \mathbf{j}\left| \begin{array}{cc}
0 & 4 \\
2 & -4
\end{array} \right| + \mathbf{k}\left| \begin{array}{cc}
0 & -2 \\
2 & -4
\end{array} \right|$$
$$ = -8\mathbf{i} + 4\mathbf{j} + 8\mathbf{k} $$
par conséquence $ \mathbf{AB} \land \mathbf{AC} = 4(2\mathbf{i} + \mathbf{j} + 2\mathbf{k}) $

b) Déduire la surface du triangle ABC et la distance $d(B, (AC))$

La surface $S_{ABC}$ du triangle ABC  
On a $ \mathbf{AB} \land \mathbf{AC} = 4(2; 4; 8)$  
$$ S_{ABC} = \frac{1}{2} || \mathbf{AB} \land \mathbf{AC} || = \frac{1}{2} \sqrt{144} = 12 = 6(u.a) $$

Donc $ S_{ABC} = 6(u.a) $

2) Soit D le milieu de $[AC]$  
D est $ \left( \frac{x_A + x_C}{2}; \frac{y_A + y_C}{2}; \frac{z_A + z_C}{2} \right) $
On a $x_D = \frac{x_A + x_C}{2} = 2 = \frac{2 + 2}{2} = 2$  
$y_D = \frac{y_A + y_C}{2} = 3$  
$z_D = \frac{z_A + z_C}{2} = 2 = \frac{4 + 0}{2} = 2$

Donc $D(1; 3; 2)$ et on a $\Omega(3, 4, 4)$  
D’autre part $ \frac{1}{4} (\mathbf{AB} \land \mathbf{AC})$ pour coordonnées le triplet $(2; 1; 2)$  
Par conséquence $ d(\Omega, (ABC)) = 3 $

b) En déduire que $d(\Omega, (ABC)) = 3$

On a $D\Omega = \frac{1}{4} (\mathbf{AB} \land \mathbf{AC})$  
Donc $D\Omega$ et $\mathbf{AB} \land \mathbf{AC}$ sont colinéaires Or $ \mathbf{AB} \land \mathbf{AC}$ est le vecteur normal au plan $(ABC)$ donc $D\Omega$ est ainsi normal au plan $(ABC)$  
D'autre part, on a $D$ est le milieu de $[AC]$, c.-à-d.  
$D \in (AC)$

Donc $D \in (ABC)$  
Donc $d(B, (ABC)) = D\Omega = || D\Omega || = \frac{1}{4} (\mathbf{AB} \land \mathbf{AC}) $  
$$ \mathbf{AC} = \frac{1}{4} \times 12 = 3 $$

3) Soit $(S)$ la sphère d’équation cartésienne $x^2 + y^2 + z^2 - 6x - 8y + 8z = 0$  
a) Déterminer le centre et le rayon de la sphère $(S)$  
Let $(x - 3)^2 + (y - 4)^2 + (z - 4)^2 = r^2$
```


<!-- Page 52 -->

```markdown
# Examens nationaux
## géométrie dans l’espace corrigés

2ème méthode

Rappel : L’ensemble des points $M(x; y; z)$ de l’espace tel que :
$$(S) : x^2 + y^2 + z^2 + ax + by + cz + d = 0$$
est un sphère si $D = a^2 + b^2 + c^2 - 4d > 0$

- Son centre est le point $\left(-\frac{a}{2}; -\frac{b}{2}; -\frac{c}{2}\right)$
- Son rayon est $r = \sqrt{\frac{D}{2}}$

On pose $a = -6 ; b = -8 ; c = -8 et d = 32$
$$ 
a^2 + b^2 + c^2 - 4d = 
= (-6)^2 + (-8)^2 + (-8)^2 - 4 \times 32 
= 36 
$$

Donc l’ensemble $(S)$ est une sphère de centre 
$$
\Omega \left(-\frac{-6}{2}; -\frac{-8}{2}; -\frac{-8}{2}\right) = \left(3; 4; 4\right)
$$
Donc $d(3; 4; 4; \sqrt{2})$ et de rayon $r = \sqrt{a^2+b^2+c^2-4d} = \sqrt{\frac{36}{2}} = 6 = 3$

b) Montrer que le plan $(ABC)$ est tangent à la sphère $(S)$ en un point que l’on déterminera
On a $d(\Omega; (ABC)) = 3 = r$
Donc le plan $(ABC)$ est tangent à la sphère $(S)$
Et on a $d((ABC)) = D\Omega = r$
Donc $D = (C)$ et on a $D \in (ABC)$

4) On considère $(Q_1)$ et $(Q_2)$ les deux plans parallèles à $(ABC)$ tels que chacun d’eux coupe $(S)$ suivant un cercle de rayon $\sqrt{5}$
Déterminer une équation cartésienne pour chacun des deux plans $(Q_1)$ et $(Q_2)$

On a $(Q_1)$ et $(Q_2)$ sont parallèles à $(ABC)$ et 
$$ \vec{n} = \left(\frac{2}{1}\right) $$ vecteur normal au plan $(ABC)$

Donc $\vec{n}$ est vecteur normal aux plans $(Q_1)$ et $(Q_2)$
Donc une équation cartésienne pour chacun des deux plans $(Q_1)$ et $(Q_2)$ sont
$$(Q_1): 2x + y + 2z - 12 = 0$$

$$(Q_2): 2x + y + 2z - d' = 0$$

Déterminons $d$ et $d'$
On a $(Q_1)$ et $(Q_2)$ coupe $(S)$ suivant un cercle de rayon $r = \sqrt{5}$

Dans l’espace rapporté à un repère orthonormé direct $(O; \vec{i}; \vec{j}; \vec{k})$, on considère les points $A(2, 1, 2), B(–2, 0, 5)$ et $C(–4, –5, 7)$ et $\Omega(1, –1, 0)$. On pose $\vec{u} = \Omega A$ et Soit $(S)$ la sphère de centre $\Omega$ et de rayon $R = 3$

1) a) Montrer que $\overline{AB} \cap \overline{AC} = 13i$ et déduire que les points $A ; B$ et $C$ ne sont pas alignés
c) Vérifier que $x + 2y + 2z - 8 = 0$ est une équation cartésienne du plan $(ABC)$
d) Montrer que le plan $(ABC)$ est tangent à la sphère $(S)$ en $A$

2) Soit $(P)$ le plan d’équation cartésienne $3x + 4y + z + 1 = 0$ et $(\Delta)$ la droite passant par le point $A$ et orthogonale au plan $(P)$
a) Montrer que la droite $(\Delta)$ coupe le plan $(P)$ au point $H\left(\frac{1}{2}; -1; \frac{3}{2}\right)$
b) Déterminer les coordonnées du point $D$ tel que $H$ soit le milieu du segment $[AD]$
3) Soit $(Q)$ le plan passant par le point $D$ et de vecteur normal $\overline{OD}$
a) Montrer que le plan $(Q)$ est tangent à la sphère $(S)$ en $D$
b) Montrer que les plans $(ABC)$ et $(Q)$ se coupent suivant la droite $(BC)$
```

<!-- Page 53 -->

```markdown
# Examens nationaux géométrie dans l’espace corrigés
## 2 Bac sciences PC/SVT/ST
### PAGE 16

### Correction de l’exercice

Dans l’espace rapporté à un repère orthonormé direct $(O, \vec{i}, \vec{j}, \vec{k})$, on considère les points $A(2, 1, 2)$, $B(-2, 0, 5)$ et $C(4, -5, -7)$ et $\Omega(1, -1, 0)$. On pose $\vec{u} = \overrightarrow{OA}$.

La sphère de centre $\Omega$ et de rayon $R = 3$

1. a) Montrer que les points $A$, $B$ et $C$ ne sont pas alignés

On a $\overline{AB} \wedge \overline{AC}$ et $\overline{AB} \wedge \overline{AC}$

$$
\overline{AB} \wedge \overline{AC} = \left( -\frac{4}{3} \vec{i} - 1 \vec{j} + \frac{2}{3} \vec{k} \right) \wedge \left( 2 \vec{i} -6 \vec{j} \right) = \left( -5 + 18 \right)\vec{i} + \left( -2 - 20 \right)\vec{j} + \left( 24 + 2 \right)\vec{k}
$$

$$
= 13 \vec{i} + 26 \vec{j} + 26 \vec{k}
$$

On a $\overline{A\Omega}(2 - 1; 1 - 2; 2 - 0)$

Donc $\overline{A\Omega}(1; 2; 2)$ Alors $\vec{u}(1; 2; 2)$ par conséquence : $\overline{AB} \wedge \overline{AC} = 13 \vec{u}$

On a $\overline{AB} \wedge \overline{AC} \neq \vec{0}$

Donc les vecteurs $\overrightarrow{AB}$ et $\overrightarrow{AC}$ ne sont pas colinéaires donc les points $A$ et $B$ et $C$ ne sont pas alignés

D’où les points $A$ et $B$ et $C$ forment un plan

c) Vérifier que $x + 2y + 2z - 8 = 0$ est une équation cartésienne du plan $(ABC)$

Soit $M(x; y; z) \in (ABC)$

On a $\overline{AB} \wedge \overline{AC}(1; 2; 2)$ est un vecteur normal au plan $(ABC)$, donc

le vecteur $\vec{u}\left(\frac{1}{2}; \frac{2}{2}\right)$ est normale à $(ABC)$

Donc $(ABC) : 1 \times x + 2 \times y + 2 \times z + d = 0$

Donc $(ABC) : x + 2y + 2z + d = 0$

Et on a $A(-2, 1, 2) \in (ABC)$ donc on remplace les coordonnées de $A$ dans $x + 2y + 2z + d = 0$

donc $-2 + 2 \times 1 + 2 \times 2 + d = 0$

d'où $(ABC): x + 2y + 2z - 8 = 0$

---

Rappel : Pour déterminer les coordonnées de $H$ on résout le système suivant :

$$
\begin{cases}
x = x_A + at \\
y = y_A + bt ; (t \in \mathbb{R}) \\
z = z_A + ct \\
(P) : ax + by + cz + d = 0
\end{cases}
$$

Déterminons une représentation paramétrique de $(\Delta)$

On a $\vec{n} \left( \frac{3}{4}; 1 \right)$ est un vecteur normal au plan $(P)$

et $(\Delta)$ orthogonal au plan $(P)$ donc $\vec{n}$ est un vecteur directeur de $(\Delta)$
```

<!-- Page 54 -->

```markdown
# Examens nationaux géométrie dans l’espace corrigés
## 2 Bac sciences PC/SVT/ST 
### PAGE 17

Donc une représentation paramétrique de 
$ (Δ) $ est $ (Δ) : \quad x = 2 + 3t \quad (t \in \mathbb{R}) $
$$ z = 2 + t $$

On a $(x;y;z)$ les coordonnées de $H$ vérifie le système 
$$
\begin{cases}
x = 2 + 3t \\
y = 1 + 4t \\
z = 2 + t \\
(P): 3x + 4y + z = 1 = 0 
\end{cases}
$$
Donc $3(2 + 3t) + 4(1 + 4t) + 2 + t = 0$

Donc $26t + 13 = 0 \quad Donc \ t = -\frac{13}{26} = -\frac{1}{2}$

On remplace $t = -\frac{1}{2}$ dans 
$$
\begin{cases}
x = 2 + 3(-\frac{1}{2}) \\
y = 1 + 4(-\frac{1}{2}) \\
z = 2 + t 
\end{cases}
$$
On trouve 
$$
\begin{cases}
x = 2 - \frac{3}{2} \\
y = 1 - 2 \\
z = 2 - \frac{1}{2}
\end{cases}
$$
donc $H \left(1; -1; \frac{3}{2}\right)$

b) Déterminer les coordonnées du point $D$ tel que $H$ soit le milieu du segment $[AD]$.

On a $D$ tel que $H$ soit le milieu de $[AD]$ donc 
$$ \overrightarrow{HD} = \overrightarrow{AH} $$

Soit $\overrightarrow{HD}(x_D,y_D,z_D)$

On a $A(2, 1, 2)$ et $H\left(\frac{1}{2}; -1; \frac{3}{2}\right)$ donc ;

$$ 
\overrightarrow{HD}(x_D - \frac{1}{2}, y_D + 1, z_D - \frac{3}{2}) 
$$

Donc 
$$
\begin{cases}
x_D - \frac{1}{2} = -1 \\
y_D + 1 = -3 \\
z_D - \frac{3}{2} = 1 
\end{cases}
$$
Donc
$$
\begin{cases}
x_D = -1 \\
y_D = -3 \\
z_D = 1 
\end{cases}
$$

3) Soit $(Q)$ le plan passant par le point $D$ et de vecteur normal $\overrightarrow{nD}$.

a) Montrer que le plan $(Q)$ est tangent à la sphère $(S)$ en $D$.

On a 
$$\overrightarrow{nD} = \overrightarrow{(-2;-2;1)}$$ est normal au plan $(Q)$

Et on a $\overrightarrow{u} \left(\frac{1}{2}; 2; -1\right)$ est normale à $(ABC)$.

Donc $\Delta x = \begin{pmatrix} 2 \\ -1 \\ 2 \end{pmatrix} \neq 0$

Donc les vecteurs $\overrightarrow{OD}$ et $\overrightarrow{u}$ ne sont pas colinéaires.

Donc les plans $(ABC)$ et $(Q)$ se coupent suivant une droite.

Et on a $(BC) \in (ABC)$.

Donc montrons que $B$ et $C$ appartiennent à $(Q)$.

### Méthode 1 :
Remarque : tu peux trouver une équation de $(Q)$ facilement puis tu remplaces les coordonnées de $B$ et $C$.

### Méthode 2 :
Rappel : $L$ ensemble des points $M(x; y; z)$ de l’espace tel que $\overrightarrow{AM} \cdot \overrightarrow{n} = 0$ est un plan $(P)$ passant par $A$ et de vecteur normal $\overrightarrow{n}$.

On a $B(–2, 0, 5)$ et $C(4, –5, 7)$ et $D(–1, –3, 1)$.

Donc $DB : \overrightarrow{OD} \cdot \overrightarrow{n}$.

$$
\overrightarrow{DB} = \begin{pmatrix}-1 \\ 3 \\ 4 \end{pmatrix} \cdot \begin{pmatrix}-2 \\ -2 \\ 1 \end{pmatrix} = 2 - 6 + 4 = 0
$$

Donc $D \in (Q)$.

$$
\overrightarrow{DC} \cdot \overrightarrow{n} = \begin{pmatrix}-5 \\ 2 \\ -2\end{pmatrix} \cdot \begin{pmatrix}-2 \\ -2 \\ 1 \end{pmatrix} = -10 + 4 + 6 = 0
$$

Donc $C \in (Q)$. Et on a $(BC) \in (ABC)$.

Donc les plans $(ABC)$ et $(Q)$ se coupent suivant la droite $(BC)$.
```

<!-- Page 55 -->

```markdown
# Examens nationaux géométrie dans l’espace corrigés

## Exercise 05 (Examen 2022-Session-Normal)
Dans l’espace rapporté à un repère orthonormé direct $(O, \overrightarrow{i}, \overrightarrow{j}, \overrightarrow{k})$, on considère les points $A(0, 1, 1)$, $B(1, 2, 0)$ et $C(-1, 1, 2)$  
### 1) a) Montrer que $\overrightarrow{AB} \land \overrightarrow{AC} = \overrightarrow{i} + \overrightarrow{k}$  
b) En déduire que $x + z - 1 = 0$ est une équation cartésienne du plan $(ABC)$  
### 2) Soit $(S)$ la sphère de centre $\Omega(1, 1, 2)$ et de rayon $R = \sqrt{2}$  
Déterminer une équation de la sphère $(S)$  
### 3) Montrer que le plan $(ABC)$ est tangent à la sphère $(S)$ au point $A$  
### 4) On considère la droite $(\Delta)$ passant par le point $C$ et perpendiculaire au plan $(ABC)$  
a) Déterminer une représentation paramétrique de la droite $(\Delta)$  
b) Calculer le produit scalaire $\overrightarrow{AC} \cdot (\overrightarrow{i} + \overrightarrow{k})$, puis en déduire la distance $d(\Delta, (ABC))$  

---

# Correction de l’exercice

Dans l’espace rapporté à un repère orthonormé direct $(O, \overrightarrow{i}, \overrightarrow{j}, \overrightarrow{k})$, on considère les points $A(0, 1, 1)$, $B(1, 2, 0)$ et $C(-1, 1, 2)$  
### 1) a) Montrer que $\overrightarrow{AB} \land \overrightarrow{AC} = \overrightarrow{i} + \overrightarrow{k}$  
On a $\overrightarrow{AB} = \begin{pmatrix} 1 \\ 1 \\ -1 \end{pmatrix}$ et $\overrightarrow{AC} = \begin{pmatrix} -1 \\ 0 \\ 1 \end{pmatrix}$, donc  
$$
\overrightarrow{AB} \land \overrightarrow{AC} = \begin{pmatrix} 1 \\ 1 \\ -1 \end{pmatrix} \land \begin{pmatrix} -1 \\ 0 \\ 1 \end{pmatrix} = \overrightarrow{i} + \overrightarrow{k}
$$  
b) En déduire que $x + z - 1 = 0$ est une équation cartésienne du plan $(ABC)$  
### Méthode 2:
On a un $\overrightarrow{AB} \land \overrightarrow{AC} \Rightarrow \overrightarrow{AB} \land \overrightarrow{AC}(1, 0, 1)$  
Le vecteur $\overrightarrow{AB} \land \overrightarrow{AC}$ est normal au plan $(ABC)$.  
$$
M(x,y,z) \in (ABC) \Rightarrow \overrightarrow{AM} \cdot (\overrightarrow{AB} \land \overrightarrow{AC}) = 0  
$$  
$$
\implies (x - 0) \cdot 1 + (y - 1) \cdot 0 + (z - 1) \cdot 1 = 0 \Rightarrow x + z - 1 = 0  
$$  
Alors $(ABC): x + z - 1 = 0$  
### 2) Soit $(S)$ la sphère de centre $\Omega(1, 1, 2)$ et de rayon $R = \sqrt{2}$  
a) Déterminer une équation de la sphère $(S)$  
$$
M(x; y; z) \in (S) \Rightarrow (x - 1)^2 + (y - 1)^2 + (z - 2)^2 = R^2  
$$  
$(S): (x - 1)^2 + (y - 1)^2 + (z - 2)^2 = 2$  
D’où $(S): (x - 1)^2 + (y - 1)^2 + (z - 2)^2 = 2$  
b) Montrer que le plan $(ABC)$ est tangent à $(S)$ au point $A$  
$$
d(\Omega; (ABC)) = \frac{|1 + 2 - 1|}{\sqrt{1^2 + 0^2 + 1^2}} = \frac{2}{\sqrt{2}} = \sqrt{2} = R  
$$  
De plus $A \in (S)$ donc le plan $(ABC)$ est tangent à $(S)$ en $A$  
### 4) On considère la droite $(\Delta)$ passant par le point $C$ et perpendiculaire au plan $(ABC)$  
a) Déterminer une représentation paramétrique de la droite $(\Delta)$  
La droite $(\Delta)$ est perpendiculaire au plan $(ABC)$ donc le vecteur $\overrightarrow{n}(1, 0; 1)$ est directeur à la droite $(\Delta)$  
Soit $M(x; y; z) \in (\Delta)$  
$$
(x = -1 + 1 \cdot t) \quad (t \in \mathbb{R})  
$$  
$$
(y = 1 + 0 \cdot t) \quad (z = 2 + 1 \cdot t)  
$$  
Donc $(ABC): y = 1$  
$z = 2 + t$ est une représentation paramétrique de la droite $(\Delta)$  
```

<!-- Page 56 -->

```markdown
# Examens nationaux 
## géométrie dans l’espace corrigés
### 2 Bac sciences PC/SVT/ST 
**PAGE 19**

b. Montrer que la droite $(D)$ est tangente à la sphère $(S)$ en un point $D$ dont on déterminera les coordonnées.  
Soit $D(x; y; z) \in (D) \cap (S)$  
Donc  
$$
\begin{cases}
(x = -1 + t ; (t \in \mathbb{R}) \\
y = 1 \\
z = 2 = t 
\end{cases}
$$  
$(S) : (x - 1)^{2} + (y - 1)^{2} + (z - 2)^{2} = 2$  
Donc $(-1 + t - 1)^{2} + (1 - 1)^{2} + (2 + t - 2)^{2} = 2$  
Donc $(t - 2)^{2} + t^{2} = 0$  
Donc $2t^{2} - 4t + t^{2} - 2 = 0$  
Donc $2t^{2} - 4 + 2 = 0$  
Donc $2(t - 1)^{2} = 0 \Rightarrow t = 1$  
On remplace $t = 1 \Rightarrow \begin{cases} x = -1 + t \\ y = 1 \\ z = 2 + t \end{cases}$  
trouve : $\begin{cases} x = 0 \\ y = 1 \\ z = 3 \end{cases}$  
Donc la droite $(D)$ est tangente à la sphère $(S)$ en un point $D(0; 1; 3)$  

c) Calculer le produit scalaire $\overrightarrow{AC} \cdot (\vec{i} + \vec{k})$, et la distance $d(A, (D))$  
**Méthode 1 :**  
$$ 
\overrightarrow{AC} \cdot (\vec{i} + \vec{k}) = \overrightarrow{AC} \cdot (\overrightarrow{AB} \land \overrightarrow{AC}) 
= 0 \text{ (car } \overrightarrow{AB} \land \overrightarrow{AC} \perp \overrightarrow{AC}) 
$$  
Donc : $\overrightarrow{AC} \cdot (\vec{i} + \vec{k}) = 0$  

**Méthode 2 :**  
On a $\overrightarrow{AC}(-1, 0, 1)$ et $(\vec{i} + \vec{k})$:  
$$ 
\overrightarrow{AC} \cdot (\vec{i} + \vec{k}) = (-1) \times 1 + 0 \times 0 + 1 \times 1 = 0 
$$  
Donc $\overrightarrow{AC} \cdot (\vec{i} + \vec{k}) = 0$  

**Calcul de la distance $d(A, (D))$:**
- On calcule $\overrightarrow{AC} \land (\vec{i} + \vec{k})$ après on calcule $d(A, (D))$.
- $$ \overrightarrow{AC} \land (\vec{i} + \vec{k}) = \begin{vmatrix}
0 & 1 & 0 \\
1 & -1 & 1 \\
1 & 0 & 1 
\end{vmatrix} = 2\vec{j} $$  
Puisque $C \in (D)$ et le vecteur $(\vec{i} + \vec{k}) = (\overrightarrow{AB} \land \overrightarrow{AC})$ est un vecteur directeur de la droite $(D)$ alors :  
$$ d(A, (D)) = \frac{|\overrightarrow{AC}(\vec{i} + \vec{k})|}{||\vec{i} + \vec{k}||} = \frac{\sqrt{0^2 + 2^2}}{\sqrt{1^2 + 0^2 + 1^2}} = \frac{2}{\sqrt{2}} = \sqrt{2} $$  

**Exercice 06 (Examen 2022-Rattrapage)**  
Dans l’espace rapporté à un repère orthonormé direct $(O, \vec{i}, \vec{j}, \vec{k})$, on considère les deux points $A(1, -1, 1)$ et $B(5, 1, -3)$. Soit $(S)$ la sphère de centre $O(3, 0, -1)$ de rayon $R = 3$ et $(D)$ la droite passant par le point $A$ et de vecteur directeur $\vec{u}(2, -2, 1)$.  
2 a) Calculer la distance $OA$  
b) Montrer que les droites $(O A)$ et $(O A S)$ sont perpendiculaires  
c) Déduire la position relative de la droite $(A)$ et la sphère $(S)$  
2 a) Soit le point $M_a(2a - 3, 2 - 2a, a - 1)$ où $a \in \mathbb{R}$.  
Montrer que $M_a = (a - 2)\vec{u}$ et déduire que $M_a \in (D)$ pour tout $a \in \mathbb{R}$  
d) Vérifier que $2x - 2y + z - 9a + 13 = 0$ est une équation du plan $(P_a)$ passant par $M_a$ et perpendiculaire à la droite $(D)$.  
e) Montrer que $d(\Omega, (P_a)) = |3a - 6|$.  
d) Déterminer les deux valeurs de $a$ pour laquelle le plan $(P_a)$ est tangente à la sphère $(S)$.
```

<!-- Page 57 -->

```markdown
# Examens nationaux géométrie dans l’espace corrigés

## Correction d’exercice

Dans l’espace rapporté à un repère orthonormé direct $(O, \mathbf{i}, \mathbf{j}, \mathbf{k})$, on considère les deux points $A(1, -1, 1)$ et $B(5, 1, -3)$. 
Soit $(S)$ la sphère de centre $\Omega(3, 0, -1)$ de rayon $R = 3$ et $(\Delta)$ la droite passant par le point $A$ et de vecteur directeur $\mathbf{u}(2, -2, 1)$. 

1) a) **Calculer la distance $\Omega A$**

On a $\Omega A = \sqrt{2^2 + 1^2 + (-2)^2}$ donc $\Omega A = \sqrt{2^2 + 1^2 + (-2)^2} = \sqrt{9} = 3$

b) **Montrer que les droites $(\Delta)$ et $(\Omega A)$ sont perpendiculaires**

On a $(\Delta)$ de vecteur directeur $\mathbf{u}(2, -2, 1)$ et la droite $(\Omega A)$ de vecteur directeur $\Omega A(2, 1, 2)$ donc :

$$
\mathbf{u} \cdot \mathbf{v} = \left( \begin{array}{c}
2 \\
-2 \\
1
\end{array} \right) \cdot \left( \begin{array}{c}
2 \\
1 \\
2
\end{array} \right) = 4 - 2 - 2 = 0
$$

Donc les vecteurs $\Omega A$ et $\mathbf{u}$ sont orthogonaux d’où les droites $(\Delta)$ et $(\Omega A)$ sont perpendiculaires.

c) **Déduire la position relative de la droite $(\Delta)$ et la sphère $(S)$**

On a $\Omega A = 3 = R$ donc $A \in (S)$ et $A \in (\Delta)$ et on a les droites $(\Delta)$ et $(\Omega A)$ sont perpendiculaires.

Soit $a \in \mathbb{R}$ on a : $(a - 2)\mathbf{u} = \frac{2(a - 2)}{(a - 2)}$

2) Soit le point $M_a(2a - 3, 3 - 2a, a - 1)$ où $a \in \mathbb{R}$. Montrer que $AM_a = (a - 2)\mathbf{u}$ et déduire que $M_a \in (\Delta)$ pour tout $a \in \mathbb{R}$.

Soit $a \in \mathbb{R}$ on a : $(a - 2)\mathbf{u} = 

\frac{2(a - 2)}{-2(a - 2)} = (a - 2)\mathbf{u}$

Et $M_a(2a - 3, 3 - 2a, a - 1) = A_M = (a - 2)\mathbf{u}$

Donc $\overline{M_a A} = (2a - 4 - 2a + 4, a - 2) = 0$

Donc $9 - 13 + d = 0$ donc $d = -9a + 13$

D’où $(P_a):2x - 2y + z - 9a + 13 = 0$

b) **Montrer que $(\Omega, (P_a)) = |3a - 6|$.**

$$
d(\Omega, (P_a)) = \frac{|2 \times 3 - 2 \times 0 - 1 - 9a + 13|}{\sqrt{2^2 + (-2)^2 + 1^2}} 
= \frac{| -9a + 18 |}{\sqrt{9}} = \frac{| -3(3a - 6)|}{3} = |3a - 6|
$$

a) **Déterminer les deux valeurs de $a$ pour laquelle le plan $(P_a)$ est tangent à la sphère $(S)$** 

Donc $d(\Omega, (P_a)) = R$ donc $|3a - 6| = 3$

Donc $3a - 6 = 3$ ou $3a - 6 = -3$

Donc $3a = 9$ ou $3a = 3$

Donc $a = 3$ ou $a = 1$
```

<!-- Page 58 -->

```markdown
# Examens nationaux géométrie dans l’espace corrigés

## 2 Bac sciences PC/SVT/ST PAGE 21

### Exercise 07 (Examen 2019-Session-Normal)

Dans l'espace rapporté à un repère orthonormé direct $(O; \vec{i}, \vec{j}, \vec{k})$, on considère les points $A(1; -1; -1)$ et $B(0; -2; 1)$ et $C(1; -2; 0)$.

1) a) Montrer que $\vec{AB} \wedge \vec{AC} = \vec{i} + \vec{j} + \vec{k}$  
b) En déduire que $x + y + z + 1 = 0$ est une équation cartésienne du plan $(ABC)$

4) Soit $(S)$ la sphère d'équation :  
$$ x^2 + y^2 + z^2 - 4x + 2y - 2z + 1 = 0. $$  
Montrer que le centre de la sphère $(S)$ est $\Omega(2; -1; 1)$ et que son rayon est $R = \sqrt{5}$.

5) a) Calculer $d(\Omega; (ABC))$ la distance du point $\Omega$ au plan $(ABC)$.  
b) En déduire que le plan $(ABC)$ coupe la sphère $(S)$ selon un cercle $(\Gamma)$ (la détermination du centre et du rayon de $(\Gamma)$ n’est pas demandée)

---

### Correction de l’exercice

Dans l'espace rapporté à un repère orthonormé direct $(O; \vec{i}, \vec{j}, \vec{k})$, on considère les points $A(1; -1; -1)$ et $B(0; -2; 1)$ et $C(1; -2; 0)$.

1) a) Montrer que $\vec{AB} \wedge \vec{AC} = \vec{i} + \vec{j} + \vec{k}$

**Rappel**:  
Expression analytique du produit vectoriel :  
$$ \vec{u} \wedge \vec{v} = \begin{pmatrix}
y \\
z
\end{pmatrix} \wedge \begin{pmatrix}
x' \\
y' \\
z'
\end{pmatrix} = \begin{pmatrix}
|y| z' - |z| y' \\
|z| x' - |x| z' \\
|x| y' - |y| x'
\end{pmatrix} $$

Ainsi,  
$$ \vec{AB} \wedge \vec{AC} = \begin{pmatrix}
-1 \\
-2 \\
0
\end{pmatrix} \wedge \begin{pmatrix}
-1 \\
-1 \\
1
\end{pmatrix} = \vec{i} + \vec{j} + \vec{k} $$

Donc, $\vec{AB} \wedge \vec{AC} = \vec{i} + \vec{j} + \vec{k}$

c) En déduire que $x + y + z + 1 = 0$ est une équation cartésienne du plan $(ABC)$.

Soit $M(x; y; z) \in (ABC)$.

On a le vecteur $\vec{AC} \wedge \vec{AB} \begin{pmatrix}
1 \\
1
\end{pmatrix}$ est normale à $(ABC)$.

Donc $(ABC): 1 \cdot x + 1 \cdot y + z + d = 0$  
Donc $(ABC): x + y + z + d = 0$.

Et on a $A(1; -1; -1) \in (ABC)$ donc on remplace les coordonnées de $A$ donc $1 + d = 0$ donc $d = -1$.  
Donc $(ABC): x + y + z + 1 = 0$.

2) Soit $(S)$ la sphère d'équation :
$$ x^2 + y^2 + z^2 - 4x + 2y - 2z + 1 = 0 $$

Montrer que le centre de la sphère $(S)$ est $\Omega(2; -1; 1)$ et que son rayon est $R = \sqrt{5}$.

Soit $M(x; y; z) \in (S)$
$$ x^2 + y^2 + z^2 - 4x + 2y - 2z + 1 = 0 $$  
$$ x^2 - 4x + 2^2 + y^2 + 1^2 - z^2 - 2^2 + 1^2 = 2^2 + 1^2 + 1^2 - 1 $$

Donc $(S): (x - 2)^2 + (y + 1)^2 + (z - 1)^2 = 5$.

Donc $(S)$ est une sphère de centre $\Omega(2; -1; 1)$ et de rayon $R = \sqrt{5}$.
```

<!-- Page 59 -->

```markdown
# Examens nationaux géométrie dans l’espace corrigés

## 2 Bac sciences PC/SVT/ST PAGE 22

1) Montrer que les points A ; B et C ne sont pas alignés  
**Rappel** :  
Expression analytique du produit vectoriel :  
$$ \overline{u} \wedge \overline{v} = \left| \begin{array}{ccc} \hat{i} & \hat{j} & \hat{k} \\ x & y & z \\ x' & y' & z' \end{array} \right| = \hat{i} \left( y'z' - yz' \right) - \hat{j} \left( x'z' - xz' \right) + \hat{k} \left( xy' - x'y \right) $$

On a $\overline{AB} = \left( -\frac{3}{4} \right) \hat{i} + \left( -\frac{1}{4} \right) \hat{j} + \left( 2 \right) \hat{k}$ et $\overline{AC} = \left( 0 \right) \hat{i} + \left(-1 \right) \hat{j} + \left( -3 \right) \hat{k}$, donc  
$$ \overline{AB} \wedge \overline{AC} = \left( -\frac{3}{4} \times 1 - (-1) \times 4 \right) \hat{i} + (2 \times 1 - 0 \times 4) \hat{j} + (2 \times (-1) - 0 \times (-3)) \hat{k} $$  
Finalement,  
$$ \overline{AB} \wedge \overline{AC} = -2\hat{i} - 2\hat{j} $$  

b) Vérifier que $-2y + 2z + 7 = 0$ est une équation cartésienne du plan (ABC)  
Soit $M(x; y; z) \in (ABC)$  
On a le vecteur $\overline{AB} \wedge \overline{AC} \left(1 - 2 \right)$ est normal au plan (ABC)  
$Donnc (ABC) : x + (-2) \times y + (-2) \times z + d = 0$  
Donnc : $x - 2y - 2z + d = 0$  
Et on a $A(1,2) \in (ABC)$ donc on remplace les coordonnées de A dans $x - 2y - 2z + d = 0$  
Donc $1 - 4 + d = 0$ donc $d = 7$  
D'où $(ABC) : x - 2y - 2z + 7 = 0$

2) Soient les points $E(5,1,4)$ et $F(-1,1,12)$ et $(S)$ l'ensemble des points M vérifiant $$ \overline{ME} \cdot \overline{MF} = 0 $$  
Montrer que $(S)$ est la sphère de centre $(0,2,1)$ et de rayon $R = 5$  
$$ M(x; y; z) \in (C) \Leftrightarrow \overline{EM} \cdot \overline{FM} = 0 $$  
$$ \Rightarrow \left( x - 5 \right) \left( x + 1 \right) \left( y - 1 \right) \left( y - 12 \right) = 0 $$  

**Correction de l’exercice**

Dans l’espace rapporté à un repère $(O; \hat{i}; \hat{j}; \hat{k})$ orthonormé direct, on considère les points $A(1, 2, 2)$, $B(3, -1, 6)$ et $C(1, 1, 3)$  

4) a) Montrer que  
$$ \overline{AB} \wedge \overline{AC} = i - 2j - 2k $$  

b) Vérifier que $x - 2y - 2z + 7 = 0$ est une équation cartésienne du plan (ABC)  

5) Soient les points $E(5,1,4)$ et $F(-1,1,12)$ et $(S)$ l'ensemble des points M vérifiant $$ \overline{ME} \cdot \overline{MF} = 0 $$  

Montrer que $(S)$ est la sphère de centre $(0, 2, 1)$ et de rayon $r = 5$  
```

<!-- Page 60 -->

```markdown
# Examens nationaux géométrie dans l’espace corrigés 
## 2 Bac sciences PC/SVT/ST 
### PAGE 23

$$
\Rightarrow (x - 5) + (y - 1)(y - 1) + (z - 4)(z - 12) = 0 
$$

$$
x^2 - 4x - 5 + (y - 1)^2 + z^2 - 16z + 48 = 0 
$$ 

$$
\Rightarrow x^2 - 4x + 4 + (y - 1)^2 + z^2 - 16z + 64 = -48 + 5 + 64
$$ 

$$ 
\Rightarrow (x - 2)^2 + (y - 1)^2 + (z - 8)^2 = 25 
$$

Donc $(S): (x - 2)^2 + (y - 1)^2 + (z - 8)^2 = 5^2$  
Donc $(S)$ est la sphère de centre $\Omega(2,1,8)$ et de rayon $R = 5$

1) a) Calculer $d(\Omega, (ABC))$ distance du point $\Omega$ au plan $(ABC)$

On a $\Omega(2,1,8)$ et $(P):x - 2y - 2z + 7 = 0$ donc 

$$
d(\Omega, (ABC)) = \frac{|2 - 2 - 16 + 7|}{\sqrt{1^2 + (-2)^2 + (-2)^2}} = \frac{9}{\sqrt{9}} = 3 
$$ 

b) En déduire que le plan $(ABC)$ coupe la sphère $(S)$ selon un cercle de rayon $r = 4$

On a $(\Omega): (P) = \sqrt{9} = R = 5$

Donc le plan $(P)$ coupe la sphère $(S)$ suivant un cercle $(C)$ de rayon $r$ de cercle $(C)$ est 

$$
r = \sqrt{R^2 - d^2} = \sqrt{5^2 - 9} = \sqrt{16} = 4 
$$ 

## Exercice 09 (Examen 2018-Session-Normal)

On considère les points $A(0,-2,-2)$ ; $B(1,-2,-4)$ et $C(-3,-1,2)$.

1) Montrer que $\overrightarrow{AB} \land \overrightarrow{AC} = 2\overrightarrow{i} + 2\overrightarrow{j} + \overrightarrow{k}$ puis en déduisons que $2x + 2y + z + 6 = 0$ est une équation cartésienne du plan $(ABC)$ :

On a : $$ 
\overrightarrow{AB} \ \overrightarrow{AC} = \begin{vmatrix}
1 & 0 & -3 \\
-2 & 1 & -1 \\
1 & -2 & 1 
\end{vmatrix} 
$$ 

Donc 

$$ 
\overrightarrow{AB} \ \overrightarrow{AC} = \left| \begin{matrix}
0 & 1 & -3 \\
-2 & 1 & -1 \\
1 & -2 & 1 
\end{matrix} \right| = 2\overrightarrow{i} + 2\overrightarrow{j} + \overrightarrow{k} 
$$ 

Soit $M\left( \begin{matrix} y \\ z \end{matrix} \right) \in (ABC)$

Le vecteur $\overrightarrow{AB} \land \overrightarrow{AC}$ est normal au plan $(ABC)$ donc on a : 
$$ 
\overrightarrow{a} \cdot (\overrightarrow{AB} \land \overrightarrow{AC}) = 0 
$$ 

$$ 
\Rightarrow (y + 2)(2) + (z + 2)(1) = 0 
$$ 

$$ 
\Rightarrow 2x + 2y + z + 6 = 0 
$$ 

Donc $2x + 2y + z + 6 = 0$ est une équation cartésienne du plan $(ABC)$ :

2) Vérifions que la sphère $(S)$ pour centre $\Omega(1;0;1)$ et pour rayon $R = 5$ :

On a $(S)$ d'équation : 
$$ 
x^2 + y^2 + z^2 - 2x - 2z - 23 = 0 
$$ 

$$ 
\Rightarrow x^2 + y^2 - 2 - 0^2 - 2z - z + 1 = 5 
$$ 

$$ 
\Rightarrow (x - 1)^2 + (y - 0)^2 + (z - 1)^2 = 25 
$$ 

Donc $(S)$ est la sphère de centre $\Omega(1;0;1)$ et de rayon $R = 5$ 

3) a) Vérifier que 

$$ 
\begin{align*}
x &= 1 + 2t \\
y &= 2t \\
z &= 1 + t \quad (t \in \mathbb{R}) 
\end{align*}
$$ 

est une représentation paramétrique de la droite $(D)$ passant par le point $\Omega$ et orthogonale au plan $(ABC)$.
```

<!-- Page 61 -->

```markdown
# Examens nationaux géométrie dans l’espace corrigés

**2 Bac sciences PC/SVT/ST**  
**PAGE 24**  

3)a) Vérifions que $(x = 1 + 2t \\
y = 2t \\
z = 1 + t)$, est  
une représentation paramétrique de la droite $(\Delta)$ passant par $\Omega(1, 0, 1)$ et qui est perpendiculaire au plan $(ABC)$ :  
Soit $(\Delta)$ la droite qui passe par $\Omega(1, 0, 1)$ et qui est perpendiculaire au plan $(ABC)$.  

Alors soit $M \left( \begin{array}{c} x \\ y \\ z \end{array} \right) \in (\Delta)$  

On a $\Omega M \, \text{et} \, (AB \wedge AC)$ sont colinéaires  
D'où $\exists t \in \mathbb{R} \Rightarrow \Omega M = t \times (AB \wedge AC) \text{ donc} \\ $
\[
x - 1 = 2t \\
y = 2t \\
z - 1 = t
\]
D'où $y = 2t \, (t \in \mathbb{R})$ est une représentation paramétrique de $(\Delta)$  

b) Déterminons les coordonnées de $H$, point d'intersection de la droite $(\Delta)$ et du plan $(ABC)$.  
Les coordonnées du point $H$ intersection de la droite $(\Delta)$ et du plan $(ABC)$ vérifient le système : $(T)$ :
\[
(T) \iff \begin{cases}
(x - 1 + 2t + 6 = 0) \\ 
x = 1 + 2t \\
y = 2t \\ 
z = 1 + t 
\end{cases}
\]

\[
\Rightarrow 2(1 + 2t) + 2(2t) + (1 + t) + 6 = 0 \\
(x = 1 + 2t \\
y = 2t \\
z = 1 + t) \Rightarrow H(-1; -2; 0) \text{ est le point d'intersection de } (\Delta) \text{ et } (ABC).
\]  

4) Vérifions que $(\Omega; (ABC)) = 3$, puis montrer que le plan $(ABC)$ coupe la sphère $(S)$ selon un cercle, de rayon 4, dont on déterminera le centre :  
\[
d(\Omega; (ABC)) = \frac{|2x_0 + 2y_0 + z_0 + 6|}{\| AB \wedge AC \|} = \frac{|2 \cdot 1 + 2 \cdot 0 + 1 + 6|}{\sqrt{2^2 + 2^2 + 12}} = \frac{9}{\sqrt{9}} = 3 < 5
\]  

Donc le plan $(ABC)$ coupe la sphère selon un cercle dont le centre est la projection orthogonale de $\Omega$ sur le plan $(ABC)$ ou ce point est l'intersection de la droite $(\Delta)$ et du plan $(ABC)$ donc c'est le point $H(-1; -2; 0)$ et le rayon du cercle est :  
\[
r = \sqrt{R^2 - d^2} = \sqrt{25 - 9} = 4
\]  

## Exercice 10 (Examen 2018-Session-Rattrapage)

On considère la sphère $(S)$ de centre $\Omega(2, 1, 2)$ et de rayon 3 et le plan $(P)$ passant par le point $A(-1, 0, 3)$ et $\vec{u}(4, 0, -3)$ est un vecteur normal à $(P)$.  
1) Montrer qu'une équation de la sphère $(S)$ est $x^2 + y^2 + z^2 - 4x - 2y - 4z = 0$  
2) Vérifier que $4x - 3z + 13 = 0$ est une équation du plan $(P)$.  
3) a) Vérifier que $(x = 2 + 4t \\ z = 2 - 3t)$ est une représentation paramétrique de la droite $(\Delta)$ passant par le point $\Omega$ et orthogonale au $(P)$.  
b) Déterminer les coordonnées de $H$ point d'intersection de la droite $(\Delta)$ et $(P)$.  
4) a) Calculer $d(\Omega, (P))$  
b) Montrer que le plan $(P)$ est tangent à la sphère $(S)$ en un point qu’on déterminera.  

**Correction de l'exercice**  
On considère la sphère $(S)$ de centre $\Omega(2, 1, 2)$ et de rayon 3 et le plan $(P)$ passant par le point $A(-1, 0, 3)$ et $\vec{u}(4, 0, -3)$ est un vecteur normal à $(P)$.  
1) Montrer qu'une équation de la sphère $(S)$ est  
\[
x^2 + y^2 + z^2 - 4x - 2y - 4z = 0
\]  
Soit $(M; y; z) \in (S), \; \Omega \in M$  
\[
\Rightarrow \sqrt{(x - 2)^2 + (y - 1)^2 + (z - 2)^2} = 3 \\
x^2 + y^2 + z^2 - 2x - 2y - 4 = 9 
\]
Alors : $x^2 + y^2 - 4x - 2y - 4z = 0$ est une équation cartésienne de la sphère $(S)$.
```

<!-- Page 62 -->

```markdown
# Examens nationaux géométrie dans l’espace corrigés
## 2 Bac sciences PC/SVT/ST PAGE 25

### 2) Vérifier que : $4x - 3z + 13 = 0$ est une équation cartésienne du plan $(P)$
Soit $M(x; y; z) \in (P)$,  
On a $\overline{AM}(x + 1; y; z - 3)$, donc $\overline{AM} \cdot \mathbf{u} = 0$  
$$
(x + 1) 4 + y 0 + (z - 3)(-3) = 0 \\
4x + 4 - 3z + 9 = 0 \\
4x - 3z + 13 = 0
$$
D'où : $4x - 3z + 13 = 0$ est une équation cartésienne du plan $(P)$

### 3) a) Vérifier que 
$$
\begin{cases}
x = 2 + 4t \\
y = 1 \\
z = 2 - 3t
\end{cases}
$$ 
est une représentation paramétrique de la droite $(\Delta)$ passant par le point $\Omega$ et orthogonale au plan $(P)$  
$(\Delta)$ passant par le point $\Omega(1, 0, 1)$ et perpendiculaire au plan $(P)$, donc $\mathbf{u}(4, 0, -3)$ est un vecteur directeur de $(\Delta)$.  
Alors $(\nabla M(x; y; z) \in (\Delta))$ on a :  
$$
\begin{cases}
y = 1 \\
z = 2 - 3t
\end{cases}
$$

### IR
b) Déterminer les coordonnées de $H$ point d'intersection de la droite $(\Delta)$ et $(P)$  
Les coordonnées du point $H$ intersection de la droite $(\Delta)$ et du plan $(P)$ vérifier le système :  
$$
\begin{cases}
x = 2 + 4t \\
y = 1 \\
z = 2 - 3t \\
4x - 3z + 13 = 0
\end{cases}
$$
$$
\begin{cases}
x = 2 + 4t \\
y = 1 \\
z = 2 - 3t \\
4(2 + 4t) - 3(2 - 3t) + 13 = 0 \\
(2 = 2 + 4t) \\
y = 1 \\
z = 2 - 3t \\
25t + 15 = 0
\end{cases}
$$
$$
\begin{cases}
x = 1 + 2t \\
y = 2t \\
y = 1 + t \\
z = 1
\end{cases} \implies (x = \frac{-2}{5}; y = 1 + t; z = \frac{19}{5}) 
$$

### 4 a) Calculer 
$$ d(\Omega; (P)) = \frac{|4x - 3z + 13|}{|| \mathbf{u} ||} = \frac{|4*2 - 3*1 + 13|}{\sqrt{4^2 + 0^2 + (-3)^2}} = \frac{15}{\sqrt{25}} = 3 $$

b) Montrer que le plan $(P)$ est tangent à la sphère $(S)$ en un point que l'on déterminera  
On a $d(\Omega; (P)) = 3 = R$ donc le plan $(P)$ est tangent à la sphère $(S)$ et leur point de contact est la projection orthogonale de $\Omega$ sur le plan $(P)$.  
Or ce point est l'intersection de la droite $(\Delta)$ et du plan $(P)$ donc c'est le point $H (\frac{-2}{5}; 2; \frac{19}{5})$  

### Exercice 11 (Examen 2017-Session-Normal)
Soit $(P)$ le plan passant par le point $A(0, 1, 1)$ et dont un vecteur normal est $\mathbf{u}(1; 0; -1)$ soit $(S)$ la sphère de centre $\Omega(0, 1; -1)$ et de rayon $\sqrt{2}$  
1a. Montrer que $x - z + 1 = 0$ est une équation cartésienne du plan $(P)$.  
1b. Montrer que le plan $(P)$ est tangent à $(S)$ au point $B(-1, 1, 0)$  
2a. Déterminer une représentation paramétrique de la droite $(\Delta)$ passant par le point $A$ et orthogonale à $(P)$.  
2b. Montrer que $(\Delta)$ est tangent à la sphère $(S)$ au point $C(1, 1, 0)$  
3. Montrer que $\overline{OB} \cap \overline{OC} = 2k$ puis en déduire l’aire du triangle $OCB$.

### Correction de l’exercice
On considère le plan $(P)$ passant par le point $A(0, 1, 1)$ et dont $\mathbf{u}(1; 0; -1)$ est un vecteur normal et la sphère $(S)$ de centre le point $\Omega(0; 1; -1)$ et de rayon $\sqrt{2}$  
1) a) Montrons que $x - z + 1 = 0$ est une équation cartésienne du plan $(P)$.
```

<!-- Page 63 -->

```markdown
# Examens nationaux géométrie dans l’espace corrigés

## 2 Bac sciences PC/SVT/ST PAGE 26

On a $(P)$ est le plan passant par le point $A(0, 1, 1)$ et dont $\vec{u}(1; 0; -1)$ est un vecteur normal alors une équation cartésienne du plan $(P)$ est de la forme :

$$(P): 1 x + 0 y + 1 z + d = 0$$

Donc $(P): x - z + d = 0$

Et en $A(0, 1, 1)$ on $(P)$ donc $0 - 1 + d = 0$

Donc $d = 1$

D'où $(P): x - z + 1 = 0$

b) Montrons que le plan $(P)$ est tangent à la sphère $(S)$

Calculons la distance entre $(P)$ et $\Omega$ le centre de $(S)$, on a

$$d(\Omega, (P)) = \frac{|\vec{x_0} - z_0 + 1|}{\| \vec{u} \|} = \frac{|0 - (-1) + 1|}{\sqrt{1^2 + (-1)^2}} = \frac{2}{\sqrt{2}} = \sqrt{2}$$

Donc $d(\Omega, (P))$ est égale au rayon de $(S)$

D'où le plan $(P)$ est tangent à la sphère $(S)$

Vérifions que $B(-1; 1; 0)$ est le point de contact.

On a $(P): x - z + 1 = 0$ et $-1 - 0 + 1 = 0$

Donc $B(-1; 1; 0) \in (P)$

D'autre part on a

$$\Omega B = \sqrt{(1 - 0)^2 + (1 - 1)^2 + (0 + 1)^2} = \sqrt{1 + 1} = \sqrt{2}$$

D'où $B \in (S)$ ; Ainsi $B(-1; 1; 0)$ est le point de contact entre $(P)$ et $(S)$

2a) Déterminons une représentation paramétrique de la droite $(A)$ passant par le point $A(1, 0, -1)$ et $(P) \cap (A)$, alors $\vec{u}$ est un vecteur directeur de $(A)$ de plus $(A)$ passe par $A(0, 1, 1)$

Donc une représentation paramétrique de la droite $(A)$ est :

$$(x = t, \, y = 1 - t, \, z = 1 - t)$$

b) Montrons que la droite $(A)$ est tangent à la sphère $(S)$ au point $C(1; 1; 0)$

Il suffit de montrer que $C \in (E), \Omega C = \sqrt{2}$ et $\Omega \cdot \vec{u} = 0$.

On a :

$$1 = t$$

$$1 = 1 \Rightarrow t = 1 \, (1, 1, 0) \in (A)$$

$$0 = 1 - t$$

On a $\Omega C = \sqrt{(1 - 0)^2 + (1 - 1)^2 + (0 + 1)^2} = \sqrt{1 + 0 + 1} = \sqrt{2}$$

Donc $C \in (S)$

On a $\Omega C \wedge \overline{OB} = \vec{2k}$ et en déduire l’aire du triangle $OCB$.

On a $\overline{AB} = \begin{vmatrix}
1 & 1 & 0 \\
0 & -1 & 1 \\
1 & -1 & 1 
\end{vmatrix} = 0\vec{i} - \vec{j} + 2\vec{k}$

Alors $OC \wedge OB = \frac{1}{2} || OC \wedge OB || = \frac{1}{2} || 2\vec{k} || = \frac{1}{2} \cdot 2 = 1$

## Exercice 12 (Examen 2017-Rattrapage)

1) Soit $(S)$ la sphère d’équation 

$$x^2 + y^2 + z^2 - 2x - 2y - 2z - 1 = 0$$

et le plan d’équation $y - z = 0$

a) Déterminer le centre et le rayon de la sphère $(S)$

b) Calculer $d(\Omega, (P))$ et en déduisons que $(P)$ coupe la sphère $(S)$ suivant un cercle $(C)$

c) Déterminer le centre et le rayon de la sphère $(C)$

2) Soit $(A)$ la droite passant par le point $A(1, -2, 2)$ et orthogonale au plan $(P)$

a) Montrer que $\vec{u}(0, 1, 1)$ est un vecteur directeur de la droite $(A)$

b) Montrer que : $|| \Omega A \wedge \vec{u} || = \sqrt{2} \quad \text{et déduisons que la droite $(A)$ coupe la sphère $(S)$ en deux points}$

c) Déterminer les coordonnées de chaque point d’intersection de la droite $(A)$ et de la sphère $(S)$
```

<!-- Page 64 -->

```markdown
# Examens nationaux géométrie dans l’espace corrigés
## 2 Bac sciences PC/SVT/ST PAGE 27

## Correction de l'exercice

1) Soit $(S)$ la sphère d'équation
$$ x^2 + y^2 + z^2 - 2x - 2y - 2z - 1 = 0 \quad (P) \text{ le plan d'équation } y - z = 0 $$

a) Déterminer le centre et le rayon de la sphère $(S)$

$(S) \iff x^2 + y^2 + z^2 - 2x - 2y - 2z - 1 = 0$

$$ x^2 - 2x + y^2 - 2y + z^2 - 1 = 0 $$

$$ \iff (x^2 - 2x + 1) + (y^2 - 2y + 1) + (z^2 - 1) = 0 $$

$$ \iff (x - 1)^2 + (y - 1)^2 + (z - 1)^2 = 2^2 $$

Donc, $(S)$ est la sphère de centre $\Omega(1; 1; 1)$ et de rayon $R = 2$

b) Calculer $d(\Omega, (P))$ et en déduisons que le plan $(P)$ coupe la sphère $(S)$ suivant un cercle $(C)$

On a : $d(\Omega, (P)) = 0$

✓ Déduisons que le plan $(P)$ coupe la sphère $(S)$ suivant un cercle $(C)$

On a : $d(\Omega, (P)) = 0 < R$ donc le plan $(P)$ coupe la sphère $(S)$ suivant un cercle $(C)$.

c) Déterminer le centre et le rayon de la sphère $(C)$

puisque : $d(\Omega, (P)) = 0$ donc le plan $(P)$ coupe la sphère $(S)$ suivant un cercle $(C)$ (La grand cercle)

Donc, $(C)$ est la sphère de centre $\Omega(1; 1; 1)$ et de rayon $R = 2$

2) Soit $(\Delta)$ la droite passant par le point $A(1, -2, 2)$ et orthogonale au plan $(P)$

a) Montrer que $\vec{u}(0, 1, -1)$ est un vecteur directeur de la droite $(\Delta)$

On a : $(P)$ le plan d'équation $y - z = 0$ donc $\vec{u}(0, -1, -1)$ est un vecteur normal au plan $(P)$

Et puisque $(P) \perp (\Delta)$, $\vec{u}(0, -1, -1)$ est un vecteur directeur de la droite $(\Delta)$

b) Montrer que : $\| \Omega A \wedge \vec{u} \| = \sqrt{2} \| \vec{u} \|$ et déduisons que la droite $(\Delta)$ coupe la sphère $(S)$ en deux points

On a : $\| \Omega A \wedge \vec{u} \|$ 

$$ = \| \begin{pmatrix} 0 & -3 & 1 \\ 1 & -1 & 0 \\ 0 & 1 & -1 \end{pmatrix} \| + $$

$$ \begin{pmatrix} 0 \\ -3 \\ 1 \end{pmatrix} = 2\sqrt{2} $$

par conséquence : $\| \Omega A \wedge \vec{u} \| = 2$ 

D'autre part : $\| \vec{u} \| = \sqrt{0^2 + 12 + (-1)^2} = \sqrt{2}$

D'où : $\| \Omega A \wedge \vec{u} \| = \sqrt{2} \|\vec{u}\|$

On a : $d(\Omega, (D)) = \frac{\| \Omega A \|}{\|\vec{u}\|} = \sqrt{2}$

Donc $d(\Omega, (D)) < R$, par suite la droite $(D)$ coupe la sphère $(S)$ en deux points

c) Déterminer les coordonnées de chaque point d'intersection de la droite $(\Delta)$ et de la sphère $(S)$

On a :

$$ 
\begin{cases}
x = 1 \\
y = -2 + t; (t \in \mathbb{R}) \\
z = 2 - t
\end{cases}
$$ 

est une représentation paramétrique de la droite $(\Delta)$ passant par le point $A(1, -2, 2)$ et orthogonale au plan $(P)$

Soit $M(x, y, z)$ un point appartenant à l'intersection de $(\Delta)$ et $(S)$,

Alors : $M(x, y, z) \in (\Delta) \cap (S)$

$$ \iff
\begin{cases}
x = 1 \\
y = -2 + t \\
z = 2 - t
\end{cases}
$$ 

Après le remplacement, on trouve l'équation 

$$ t^2 - 4t + 3 = 0 $$

Donc $(D) = 4$ et par suite, $1 = 0$ et $t_2 = 3$

Donc pour $t_1 = 1$ on a :

$$
\begin{cases}
y = -2 + 1 = -1 \\
z = 2 - 1 = 1
\end{cases}
$$ 

$$ 
\begin{cases}
x = 1 \\
y = -2 + 3 = 1 \\
z = 2 - 3 = -1
\end{cases}
$$ 

Finalement, les points d'intersection de la droite $(\Delta)$ et de la sphère $(S)$ sont : $M(1, -1, 1)$ et $N(1, -1, -1)$.
```

<!-- Page 65 -->

```markdown
# Examens nationaux géométrie dans l’espace corrigés

## Exercice 13 (Examen 2016-Session-Normal)

On considère les points  
$A(2; 1; 3), B(3; 1; 1)$ et $C(2; 2; 1)$ et la sphère $(S)$ d'équation :  
$$ x^2 + y^2 + z^2 - 2x + 2y - 34 = 0 $$

1) a) Montrer que :  
$$ \overline{AB} \land \overline{AC} = 2\mathbf{j} + \mathbf{k} $$  
b) En déduire que $2x + 2y + z - 9 = 0$ est une équation cartésienne du plan $(ABC)$.

2) a) Montrer que le centre de la sphère $(S)$ est le point $\Omega(1; -1; 0)$ et son rayon est 6  
b) Montrer que $d(\Omega; (ABC)) = 3$ et en déduire que le plan $(ABC)$ coupe la sphère $(S)$ suivant un cercle $(\Gamma)$.

3) a) Déterminer une représentation paramétrique de la droite $(\Delta)$ passant par le point $\Omega$ et orthogonale au plan $(ABC)$.  
b) Montrer que le centre du cercle $(\Gamma)$ est le point $B$.

## Correction de l’exercice

On considère, les points $A(2, 1, 3), B(3, 1, 1)$ et $C(2, 2, 1)$ et la sphère $(S)$ d'équation:  
$$ x^2 + y^2 + z^2 - 2x + 2y - 34 = 0 $$

1) a) Montrons que  
$$ \overline{AB} \land \overline{AC} = 2\mathbf{j} + \mathbf{k}. $$  
On a: 
$$ \overline{AB}(x_B - x_A, y_B - y_A, z_B - z_A) $$  
alors,  
$$ \overline{AB}(3 - 2, 1 - 1, 1 - 3) $$  
Donc, $AB(1, 0, -2)$  
et on a :  
$$ \overline{AC}(x_C - x_A, y_C - y_A, z_C - z_A) $$  
alors,  
$$ \overline{AC}(2 - 2, 2 - 1, 1 - 3) $$  
Donc, $AC(0, 1, -3)$

Alors,  
$$ \overline{AB} \land \overline{AC} = \begin{vmatrix}
\mathbf{i} & \mathbf{j} & \mathbf{k} \\
1 & 0 & -2 \\
0 & 1 & -3 
\end{vmatrix} $$  
= $2\mathbf{i} + 2\mathbf{j} + \mathbf{k}$

Donc, $$ \overline{AB} \land \overline{AC} = 2\mathbf{i} + 2\mathbf{j} + \mathbf{k} $$

b) Déduisons que  
$$ 2x + y + z - 9 = 0 $$  
est une équation cartésienne du plan $(ABC)$.  
On a :  
$A(2, 1, 3) \in (ABC) \Rightarrow 2x + 2y + z + A_z = 0$  
$$ 2 \times 2 + 2 \times 1 + 3 + d = 0 $$  
$$ 9 + d = 0 $$  
$$ d = -9 $$

Donc, $2x + y + z - 9 = 0$ est une équation cartésienne du plan $(ABC)$.

2) a) Montrons que le centre de la sphère $(S)$ est le point $\Omega(1, -1, 0)$ et rayon est 6.  
On a l’équation:  
$$ x^2 - 2x + y^2 + z^2 - 2y - 12 - 34 = 0 $$  
$$ \iff x^2 + 1^2 - 1^2 + y^2 + 1^2 - 1^2 + z^2 - 34 = 0 $$  
$$ \iff (x - 1)^2 + (y - 1)^2 + z^2 = 36 $$  
Donc, le centre de la sphère $(S)$ est le point $\Omega(1, -1, 0)$ et son rayon est 6.

b) Montrons que $d(\Omega; (ABC)) = 3$ et déduisons que le plan $(ABC)$ coupe la sphère $(S)$ suivant un cercle $(\Gamma)$.  
$$ d(\Omega; (ABC)) = \frac{|2x_0 + 2y_0 + z_0 - 9|}{\sqrt{2^2 + 2^2 + 1^2}} = \frac{|2 \times 1 + 2 \times (-1) + 0 - 9|}{\sqrt{4 + 4 + 1}} $$  
$$ = \frac{|2 - 2 + 0 - 9|}{\sqrt{9}} $$  
$$ = \frac{|-9|}{3} = 3 $$  

Donc, $$ d(\Omega; (ABC)) = 3 $$
```

<!-- Page 66 -->

```markdown
# Examens nationaux géométrie dans l’espace corrigés

**Prof FAYSAL : 0681399067  
Prof fayssal**  
**2 Bac sciences PC/SVT/ST  
PAGE 29**

## 1) Dans l'espace rapporté à un repère orthonormé direct $(O, \vec{i}, \vec{j}, \vec{k})$, on considère les points $A(1, 3, 4)$ et $B(0, 1, 2)$.

a) Montrer que $\overrightarrow{OA} \land \overrightarrow{OB} = 2\vec{i} - 2\vec{j} + \vec{k}$.

On a $\overrightarrow{OA}(1; 3; 4), \overrightarrow{OB}(0; 1; 2)$.

Donc $$\overrightarrow{OA} \land \overrightarrow{OB} = \begin{vmatrix}
\vec{i} & \vec{j} & \vec{k} \\
1 & 3 & 4 \\
0 & 1 & 2
\end{vmatrix} = \vec{i} \left| \begin{matrix} 3 & 4 \\ 1 & 2 \end{matrix} \right| - \vec{j} \left| \begin{matrix} 1 & 4 \\ 0 & 2 \end{matrix} \right| + \vec{k} \left| \begin{matrix} 1 & 3 \\ 0 & 1 \end{matrix} \right|$$

D'où $$ \overrightarrow{OA} \land \overrightarrow{OB} = 3 \cdot 2 - 4 \cdot 1 \vec{i} - \left( 1 \cdot 4 - 0 \cdot 2 \right) \vec{j} + 1 \cdot 1 \vec{k} = 6 - 4 \vec{i} - 4 \vec{j} + 1 \vec{k} $$

b) Montrons que $2x - 2y + z = 0$ est une équation cartésienne du plan $(OAB)$.

On sait que le vecteur $\overrightarrow{OA} \land \overrightarrow{OB}$ est un vecteur normal au plan $(OAB)$.

Alors $(OAB): 2x - 2y + z = 0$ avec $d \in \mathbb{R}$.  
Or $0 \in (OAB)$, donc $2 \cdot 0 - 2 \cdot 0 + 0 = 0$, d'où $d = 0$  
Et par conséquent $(OAB) : 2x - 2y + z = 0$.

## 2) Montrer que $(S)$ a pour centre le point $\Omega(3, -3, 3)$ et pour rayon $5$.

Soit $M(x, y, z)$ un point de l'espace, on a : $M \in (S)$

$$ x^2 + y^2 + z^2 - 6x - 6y - 6z + 2 = 0 $$
$$ x^2 - 6x + y^2 + 6y + z^2 - 6z + 9 = 9 + 9 - 2 $$  
Donc $$(x - 3)^2 + (y + 3)^2 + (z - 3)^2 = 5^2$$  
D'où $(S)$ est la sphère de centre $\Omega(3; -3; 3)$ et de rayon $r = 5$.

## 3a) Montrer que le plan $(OAB)$ est tangent à la sphère $(S)$.

$$ d(\Omega; (OAB)) = \frac{|\vec{2}x_0 - 2y_0 + z_0|}{\sqrt{2^2 + (-2)^2 + 1^2}} $$  
Donc $$ d(\Omega; (OAB)) = \frac{|6 + 6 + 3|}{\sqrt{4 + 4 + 1}} = \frac{15}{5} = 3 $$

Donc $d(\Omega; (OAB)) = R$, alors le plan $(OAB)$ est tangent à la sphère $(S)$.

## 3b) Déterminer les coordonnées du point de contact $H$ du plan $(OAB)$ et de la sphère $(S)$.

On a : $H = (x_H, y_H, z_H)$ tel que $H \in (S)$ et aussi dans le plan $(OAB)$.

On a : 
1. $x_H^2 + y_H^2 + z_H^2 - 6x_H - 6y_H - 6z_H + 2 = 0$ (sphère)  
2. $2x_H - 2y_H + z_H = 0$ (plan)

On doit résoudre ce système.
```

<!-- Page 67 -->

```markdown
# Examens nationaux géométrie dans l’espace corrigés
## 2 Bac sciences PC/SVT/ST
### PAGE 30

### c) Déterminer les coordonnées du point de contact $H$ du plan $(OAB)$ et de la sphère $(S)$. 
Pour déterminer les coordonnées de $H$, on doit déterminer une représentation paramétrique de la droite $(\Omega)$ passant par $(\Omega)$ et perpendiculaire à $(P)$.

On a $O A \cap O B(2;-2;1)$ est un vecteur normal à $(OAB)$ donc c’est un vecteur directeur de $(\Delta)$:
$$
(x = 3 + 2t) \\
(y = -3 - 2t \quad (t \in \mathbb{R}) \\
(z = 3 + t)
$$
L'intersection de $(S)$ et $(OAB)$ est la solution du système:
$$
\begin{cases}
x = 3 + 2t \\
y = -3 - 2t \\
z = 3 + t \\
2x - 2y + z = 0
\end{cases}
$$

On remplace $x, y, z$ dans la 4ème équation, on trouve :
$$
6 + 4t + 6 - 4t + 3 + t = 0 \Rightarrow 9t + 16 = 0
$$
$$
\Rightarrow t = -\frac{16}{9}
$$

Donc :
$$
\begin{cases}
x = 3 - \frac{10}{3} \\
y = -3 + \frac{8}{3} \\
z = 3 - \frac{5}{3}
\end{cases}
$$

### Exercice 15 (Examen 2015-Session-Annulé)
On considère le point $A(2;1;0)$ et $B(-4;1;0)$.

3) Soit $(P)$ le plan passant par $A$ et de vecteur normal $\vec{U} = \vec{i} + \vec{j} - \vec{k}$. 
Montrer que $x + y - 2 = 0$ est une équation cartésienne de $(P)$.

4) Soit $(S)$ l'ensemble des points $M$ vérifiant la relation : $\overline{MA} \cdot \overline{MB} = 0$.
Montrons que $(S)$ est une sphère de centre $\Omega(-1;1;0)$ et de rayon $3$.

5) a) Calculer la distance du point $\Omega$ au plan $(P)$, en déduire que $(P)$ coupe la sphère $(S)$ suivant un cercle $(C)$.

b) Démontrer que le centre du cercle $(C)$ est $H(0;2;-1)$.

6) Montrer que : $OH \perp OB = \vec{i} + 4\vec{j} + 3\vec{k}$. Puis en déduire l'aire du triangle $OHB$.
```

<!-- Page 68 -->

```markdown
# Examens nationaux géométrie dans l’espace corrigés

## 2 Bac sciences PC/SVT/ST PAGE 31

3) a) Calculer la distance du point $\Omega$ au plan $(P)$ et en déduire que le plan $(P)$ coupe la sphère $(S)$ suivant un cercle  
Calculer $d(\Omega, (P))$:  
$$ d(\Omega, (P)) = \frac{|x_0 + y_0 - z_0 - 3|}{\sqrt{1^2 + 1^2 + (-1)^2}} = \frac{|1 + (-1) + 1 \cdot 0 - 3|}{\sqrt{1^2 + 1^2 + (-1)^2}} = \frac{|(-1)|}{\sqrt{3}} = \sqrt{3} $$  
Donc : $d(\Omega, (P)) = \sqrt{3}$  

Dédire que le plan $(P)$ coupe la sphère $(S)$ selon un cercle :  
Puisque le rayon de sphère est $R = 3$ et on a $d(\Omega, (P)) = \sqrt{3} < 3$ d'où le plan $(P)$ coupe la sphère $(S)$ selon un cercle.  

b) Montrer que le centre du cercle $(C)$ est le point $H(0; 2; -1)$  
On a le centre du cercle $(C)$ est la projection orthogonale de $\Omega$ centre de la sphère $(S)$ sur le plan $(P)$ ou bien l'intersection du plan $(P)$ et la droite $(A)$ passant par le centre $\Omega$ et orthogonale au plan $(P)$. Donc :  
La droite $(A)$ est orthogonale au plan $(P)$.  
Le vecteur $\mathbf{u}(1; 1; -1)$ est un vecteur normal du plan $(P)$.  
Donc : $\mathbf{u}(1; 1; -1)$ est un vecteur directeur de la droite $(A)$ et on a $\Omega(-1; 1; 0) \in (A)$  
Par conséquence une représentation paramétrique de la droite $(A)$ est :  
$ \begin{cases} 
x = -1 + t \\ 
y = 1 + t \\ 
z = 0 + (-1)t 
\end{cases} $  

On détermine les coordonnées de $H$ point d'intersection de la droite $(A)$ et du plan $(P)$ :  
$$ 
M(x; y; z) \in (P) \cap (A) \Rightarrow M \in (P) 
$$  
$$
\begin{cases} 
x + y - z - 3 = 0 \\ 
(x = -1 + t) \\ 
(y = 1 + t) \\ 
(z = -t) 
\end{cases} 
\Rightarrow 
\begin{cases} 
(-1 + t) + (1 + t) - (-t) = 3 \Rightarrow \\ 
3t - 3 = 0 \Rightarrow \\ 
t = 1 \Rightarrow \\ 
y = 1 + t = 2 \\ 
z = -1 = -1 
\end{cases} 
$$  
Donc : l'intersection de la droite $(A)$ et le plan $(P)$ est $H(0; 2; -1)$  
Alors le centre de cercle $(C)$ est le point $H(0; 2; -1)$  

4) Montrer que : $\overline{OH} \wedge \overline{OB} = \mathbf{i} + 4\mathbf{j} + 8\mathbf{k}$, en déduire la surface du triangle $OHB$  
On a : 

$$ 
\overline{OH} = 
\begin{pmatrix} 
0 \\ 
2 \\ 
-1 
\end{pmatrix} 
\quad \wedge \quad 
\overline{OB} = 
\begin{pmatrix} 
-4 \\ 
1 \\ 
0 
\end{pmatrix} 
$$  
d'où :  
$$ 
\overline{OH} \wedge \overline{OB} = 
\begin{pmatrix} 
0 \\ 
2 \\ 
-1 
\end{pmatrix} 
\wedge 
\begin{pmatrix} 
-4 \\ 
1 \\ 
0 
\end{pmatrix} 
= 
\begin{pmatrix} 
2 \cdot 0 - (-1) \cdot 1 \\ 
-1 \cdot (-4) - 0 \\ 
0 \cdot 1 - 2 \cdot (-4) 
\end{pmatrix} 
= \begin{pmatrix} 
2 \\ 
4 \\ 
8 
\end{pmatrix} = \mathbf{i} + 4\mathbf{j} + 8\mathbf{k} 
$$  

En déduire $S_{OHB}$ la surface du triangle $OHB$  
La surface est donnée par la formule suivante :  
$$ S_{OHB} = \frac{1}{2}|| \overline{OH} \wedge \overline{OB} || = \frac{1}{2} || \mathbf{i} + 4\mathbf{j} + 8\mathbf{k} || $$  
$$ 
= \frac{1}{2} \sqrt{1^2 + 4^2 + 8^2} = \frac{1}{2} \sqrt{1 + 16 + 64} = \frac{1}{2} \sqrt{81} = \frac{1}{2} \cdot 9 = \frac{9}{2} \text{ (Unité d'aire)} 
$$  

## Exercice 16 (Examen 2015-Session-Normal)  
On considère, dans l’espace rapporté à un repère orthonormé direct $(\mathbf{o}; \mathbf{i}; \mathbf{j}; \mathbf{k})$ le plan $(P)$ d’équation $x + y + z + 4 = 0$ et la sphère $(S)$ de centre $\Omega(1; -2; -1)$ et de rayon $\sqrt{3}$  
3) a) Calculer la distance $d(\Omega, (P))$ et en déduire que le plan $(P)$ est tangent à la sphère $(S)$.
```

<!-- Page 69 -->

```markdown
# Examens nationaux géométrie dans l’espace corrigés

**a)** Vérifier que $\overrightarrow{n} = \overrightarrow{i} - \overrightarrow{j} - \overrightarrow{k}$ est un vector normal au plan $(OAB)$ et en déduire que $x - y - z = 0$ est une équation cartésienne du plan $(OAB)$.
Alors : 
$$ \overrightarrow{OA} \overrightarrow{OB} = \overrightarrow{(2; 1; 1)} - \overrightarrow{(1; 0; 0)} $$
$$ = \overrightarrow{(1; 1; 1)} $$
donc : 
$$ \overrightarrow{OA} \overrightarrow{OB} = (1 - 0)\overrightarrow{i} + (2 - 1)\overrightarrow{j} + (0 - 1)\overrightarrow{k} $$
donc : 
$$ \overrightarrow{OA} \overrightarrow{OB} = \overrightarrow{i} - \overrightarrow{j} - \overrightarrow{k} $$
Alors l'équation cartésienne du plan $(OAB)$ s'écrit sous la forme 
$$ x - y - z + d = 0 $$ où $a : A (OAB)$.
Alors : 
$$ x_A + y_A + z_A + d = 0 $$
$$ \Leftrightarrow 2 - 1 + d = 0 \Leftrightarrow d = 0 $$
donc : $(OAB): x - y - z = 0$

**b)** Déterminer une représentation paramétrique de la droite $(Δ)$ passant par le point $\Omega$ et orthogonale au plan $(OAB)$.
On a $(Δ)$ est orthogonale au plan $(P)$ alors 
$$ \overrightarrow{OA} \overrightarrow{OB}(1; -1; -1) \text{est le vecteur directeur de la droite } (Δ) \text{ et on a } \Omega \in (Δ)$$
$$ x = 1 + t $$
Alors : $(Δ): y = -1 - t; \, (t \in \mathbb{R}) $ 
$$ z = -1 - t $$
est la représentation paramétrique de la droite $Δ$.

**c)** Déterminer les coordonnées de chacun des deux points d'intersection de la droite $(Δ)$ et la sphère $(S)$.
$(S)$ est la sphère de centre $\Omega(1; -1; -1)$ et de rayon $R = \sqrt{3}$.  
Alors: $(x - 1)^2 + (y + 1)^2 + (z + 1)^2 = 3$  
Et puisque $(Δ)$ passant par $\Omega$, alors elle coupe la sphère en deux points.
$$
\begin{cases}
x = 1 + t \\
y = -1 - t \\
z = -1 - t 
\end{cases} \text{ avec } (t \in \mathbb{R}) 
$$
$$ (x - 1)^2 + (y + 1)^2 + (z + 1)^2 = 3 $$
Alors les coordonnées de chacun des deux points d'intersection de la droite $(Δ)$ et la sphère $(S)$ sont : $(2; -2; -2)$ et $(0; 0; 0)$.
```

<!-- Page 70 -->

```markdown
# Examens nationaux géométrie dans l'espace corrigés

## 2 Bac sciences PC/SVT/ST

### PAGE 33

### Exercice 17 (Examens 2015-Rattrapage)
le plan $(P)$ d'équation $2x - z - 2 = 0$ et la sphère $(S)$ d'équation $x^2 + y^2 + z^2 - 2x - 7 = 0$.

1. Montrer que le centre de la sphère $(S)$ est le point $\Omega(-1; 0; 1)$ et son rayon est 3.
2. a) Calculer la distance du point $\Omega$ au plan $(P)$.
   b) En déduire que le plan $(P)$ coupe la sphère $(S)$ suivant un cercle $(\mathcal{G})$.
3. Montrer que le rayon du cercle $(\mathcal{G})$ est 2 et déterminer les coordonnées du point $H$ centre du cercle $(\mathcal{G})$.

### Correction de l'exercice
le plan $(P)$ d'équation $2x - z - 2 = 0$ et la sphère $(S)$ d'équation $x^2 + y^2 + z^2 - 2x - 7 = 0$.

1. Montrer que le centre de la sphère $(S)$ est le point $\Omega(-1; 0; 1)$ et son rayon est 3.
   Soit $M(x,y,z) \in (S)$
   $$
   x^2 + y^2 + z^2 - 2x - 7 = 0
   $$
   $$
   x^2 + 2x + 1 + y^2 + z^2 - 1 - 7 = 0
   $$
   $$
   (x + 1)^2 + (y - 0)^2 + (z - 1)^2 = 9
   $$
   Donc $(S)$ est une sphère de centre $\Omega(-1, 0, 1)$ et de rayon $R = 3$.

2. a) Calculer la distance du point $\Omega$ au plan $(P)$.
   On a : $d(\Omega, (P)) = \frac{|2x_0 - z_0 - 2|}{\sqrt{2^2 + (-1)^2}}$
   $$
   \Leftrightarrow d(\Omega, (P)) = \frac{|2(-1)-0-2|}{\sqrt{2^2 + (-1)^2}}
   $$
   $$
   = \frac{| - 5 |}{\sqrt{5}} = \frac{5}{\sqrt{5}} = \sqrt{5}
   $$
   
   b) En déduire que le plan $(P)$ coupe la sphère $(S)$ suivant un cercle $(\mathcal{G})$.
   On a : $d(\Omega, (P)) = \sqrt{5} < R$.
   Donc le plan $(P)$ coupe la sphère $(S)$ suivant un cercle $(\mathcal{G})$.

3. Montrer que le rayon du cercle $(\mathcal{G})$ est 2 et déterminer les coordonnées du point $H$ centre du cercle $(\mathcal{G})$.
   soit $r$ le rayon du cercle $(\mathcal{G})$, on a :
   $$
   r = \sqrt{R^2 - d(\Omega, (P))^2} = \sqrt{32 - 5} = \sqrt{27} = 2
   $$

### Déterminons les coordonnées du point $H$ centre du cercle $(\mathcal{G})$.
On a $H$ est la projection orthogonale de $\Omega$ centre de $(\mathcal{G})$ sur le plan $(P)$ ou bien l'intersection du plan $(P)$ et la droite $(D)$ passant par le point $\Omega$ et perpendiculaire au plan $(P)$.
Soit $M(x,y,z) \in (D)$ on a : $\Omega \in (D)$ et puisque la droite $(D)$ est perpendiculaire au plan $(P)$ alors $u(2, 0, -1)$ est un vecteur directeur à la droite $(D)$.

Par suite $QM = t \cdot u$ avec $t \in \mathbb{R}$, Donc 
$$
\begin{cases}
x + 1 = 2t \\
y - 0 = 0 \\
z - 1 = -t 
\end{cases}
$$
D'où $(D)$: $y = 0 \quad (t \in \mathbb{R})$ est une
$$
z = 1 - t
$$
répresentation paramétrique de la droite $(D)$.

### Déterminons $H(x_H, y_H, z_H)$ le point d'intersection de $(D)$ et $(P)$
$$
\begin{cases}
x_H = -1 + 2t \\
y_H = 0 \\
2x_H - z_H - 2 = 0 \\
\end{cases}
$$
$$
\Leftrightarrow
\begin{cases}
y_H = 0 \\
z_H = 1 - t \\
(2(-1 + 2t) - (1- t) - 2 = 0 )\\
\end{cases}
$$

$$
\begin{cases}
x_H = -1 + 2t \\
y_H = 0 \\
z_H = 1 - t \\
(2(-1 + 2t) - (1- t) - 2 = 0) \rightarrow (x_H = -1 + 2t) \\
\end{cases}
$$

$$
\begin{cases}
y_H = 0 \\
z_H = 1 - t \\
(-2 + 4t - 1 + t - 2 = 0)\\
(x_H = -1 + 2t) \\
\end{cases}
$$

$$
y_H = 0 \\
z_H = 1 - t 
$$
Finalement $H(1, 0, 0)$ est le centre du cercle $(\mathcal{G})$.
```

<!-- Page 71 -->

```markdown
# Offre préparation concours 2026 - Prof Fayssal
- Plus 20 séances en vidéos de préparation Médecine
- Plus 20 séances en vidéos pour ENSA-ENSAM-UM6P
- Nouvelle offre à partir de mois 6 avec des séances en directes et interactives
- Deux livres de préparation Médecine-ENSA-ENSAM contiennent des astuces, plus de 20 concours blancs corrigés et la correction des anciens concours

Pour participer : 0681399067

---

## ثانوية :  (20 حصة) في الطب على منصة للدروس الخاصة
- حصص لمواد الرياضيات (20 حصة) عبر ZOOM و منصة 
- كتيبات شاملة في الرياضيات مع تصحيحات مفصلة وتمارين نوعية + تصحيح 
- الدروس السابقة.
- عرض حصص مباشرة يوميا ابتداء من شهر 6 لمدة 60 دقيقة

0618399067 التواصل: 📞

---

## RESULTAT DE SELECTION
Félicitations ! Nous avons le plaisir de vous informer que vous avez été sélectionné(e) pour participer à la formation de Docteur en Médecine et de Pharmacien à Al Hoceima.

---

### رسالة من الأستاذ الفاضل
الحمد لله إن شاء الله مجهوداتك تجيب نتائج طيبة. الله يوفقك في جميع موادك.

---

### Correspondance
- Rh kont chrit k tab diak o ostad
- L maths jdr fin 12 gqts 3la 14
- Vous
- Merci 😊
```

<!-- Page 72 -->

```markdown
# Prof Faysal

## Résumés de cours
### Nombres complexes
#### Deuxième bac sciences
#### PC / SVT / SE

Prof fayssal  
06813999067  
Prof Faysal
```

<!-- Page 73 -->

```markdown
# Préparation à l’examen national du baccalauréat
## Résumé de cours :
### Nombres complexes (I)

A) Ensemble des nombres complexe $ z \in \mathbb{C} = \{ z = a + ib \ | \ (a; b) \in \mathbb{R}^2 \text{ et } i^2 = -1 \}$

- L’écriture $ a + ib $ s’appelle la forme algébrique du nombre $ z = a + ib $

1) Conjugué d’un nombre complexe $ z $ :
$$ z = a + ib \quad \bar{z} = a - ib \quad ; \quad \bar{z} \text{ le conjugué de } z $$
Propriété de conjugué d’un complexe :
$$ z + \bar{z} = 2z \quad ; \quad z \bar{z} = |z|^2 \quad ; \quad \bar{z} = \frac{z^2}{z} $$
$$ z^n = |z|^n e^{i n \arg(z)} $$

2) Représentation géométrique d’un nombre complexe dans un repère orthonormal.
Soit $ A(z_A) ; B(z_B) et C(z_C) $ des points du plan :
- L’affixe du vecteur $\overline{AB}$ est : $ Z_{AB} = z_B - z_A $
- L’affixe de $ I $ le milieu du segment $ [AB] $ est $ z_I $ tel que : $$ Z_I = \frac{z_B + z_A}{2} $$
- Points $ A, B $ et $ C $ sont alignés $\Longleftrightarrow \frac{z_B - z_A}{z_C - z_A} \in \mathbb{R} $

3) Module d’un nombre complexe $ z : |z| $
Le module de $ z = a + ib $ d’image $ M $ est le nombre réel positif noté $ |z| $ défini par
$$ |z| = OM = \sqrt{z z^*} = \sqrt{a^2 + b^2} $$
Propriété de module et Distance :
$$ |z| = |z| - |z| = -\bar{z} = \sqrt{a^2 + b^2} $$
$$ | z \times z' | = |z| \ |x'| ; \quad |z^n| = |z|^n $$
Soient $ A(z_A) $ et $ B(z_B) $ deux points alors la distance $ AB $ définit par : $$ AB = |z_B - z_A| $$

B) Argument d’un complexe $ z : \arg(z) $

1) Opérations sur l’argument :
- $ \arg(zz') = \arg(z) + \arg(z') [2\pi] $
- $ \arg \left( \frac{z}{z'} \right) \equiv \arg(z) - \arg(z') [2\pi] $
- $ \arg(1) = 0 = \arg(z) [2\pi] $
- $ \arg(z^n) = n \arg(z) [2\pi] $

2) Forme trigonométrique d’un complexe 
$$ z = a + ib \quad |z| = |z| \left( \cos(\theta) + i\sin(\theta) \right) $$
avec $ \cos(\theta) = \frac{a}{|z|} $ et $ \sin(\theta) = \frac{b}{|z|} $
L’écriture : $$ z = |z| \left( \cos(\theta) + i\sin(\theta) \right) $$ est appelé forme trigonométrique du complexe $ z $ avec $ 0 < \theta < 2\pi $

3) Détermination du forme trigonométrique :
- Cas particulier $ a; b \in \mathbb{R}^* $ :
$$ z = a e^{i \theta} \Longleftrightarrow \arg(z) = 0 [2\pi] \text{ et } |z| = |a| $$
$$ z = - a e^{i \theta} \Longleftrightarrow \arg(z) = \pi [2\pi] \text{ et } |z| = |a| $$
$$ z = ib e^{i \theta} \Longleftrightarrow \arg(z) = \frac{\pi}{2} [2\pi] \text{ et } |z| = b $$
$$ z = -ib e^{i \theta} \Longleftrightarrow \arg(z) = -\frac{\pi}{2} [2\pi] \text{ et } |z| = b $$

- Cas générale ou $ z = a + ib ; \quad a; b \in \mathbb{R}^* $
1) On calcule $ |z| \ |$ le module de $ z $
2) Factorisation : $$ z = a + ib \quad |z| = |z| \left( \frac{a}{|z|} + \frac{b}{|z|} i \right) $$
3) On cherche $ \theta $ un argument de $ z $ tel que
$$ \cos(\theta) = \frac{a}{|z|} \quad \text{et} \quad \sin(\theta) = \frac{b}{|z|} $$
en utilisant le tableau et le cercle suivant :
| $ x $ | 0 | $ \frac{\pi}{6} $ | $ \frac{\pi}{4} $ | $ \frac{\pi}{3} $ | 1 |
|-------|---|------------|-------|---------|---|
| $ \sin x $ | 0 | $ \frac{1}{2} $ | $ \frac{\sqrt{2}}{2} $ | $ \frac{\sqrt{3}}{2} $ | 1 |
| $ \cos x $ | 1 | $ \frac{\sqrt{3}}{2} $ | $ \frac{\sqrt{2}}{2} $ | $ \frac{1}{2} $ | 0 |
```

<!-- Page 74 -->

```
# Préparation à l’examen national de baccalauréat
## Résumé de cours : Nombres complexes (II)
### Prof : FAYSSAL
#### Page : 2

4) **Interprétation géométrique d’argument**
- $\overline{(AB, AC)} = \arg \left( \frac{z_C - z_A}{z_B - z_A} \right) [2\pi]$
- $\overline{(AB, DC)} = \arg \left( \frac{z_C - z_D}{z_B - z_A} \right) [2\pi]$
- $(AB) \perp (DC) \iff \arg \left( \frac{z_C - z_D}{z_B - z_A} \right) = 0 [\pi]$
- $A, B, C$ et $D$ sont cocycliques (apparentant au même cercle) $\iff (z_C - z_A)(z_B - z_D) = IR$

M) **ABC un triangle isocèle et rectangle en A**
- $AB = AC$
- $\overline{(AB, AC)} = \frac{\pi}{2} [\pi]$

M) **ABC un triangle équilatéral**
- $AB = AC$
- $\overline{(AB, AC)} = \frac{\pi}{3} [\pi]$

M) **Ensemble des points M(z) du plan**
- L’ensemble des points $M$ d’affixe $z$ tel que : $|z - z_A| = r$ est un cercle de centre $A(z_A)$ et de rayon $r ; r > 0$
- L’ensemble des points $M$ d’affixe $z$ tel que : $|z - z_A| = |z - z_B|$ est la droite (D) le médaictir du segment $[AB]$

C) **Notation exponentielle $e^{i\theta}$**
- On note $e^{i\theta}$ le complexe de module 1 et d’argument $e^{i\theta} = \cos(\theta) + i \sin(\theta)$

1) **Forme exponentielle** : $z = r e^{i\theta}$
$$ z = |z| \left( \cos(\theta) + i \sin(\theta) \right) = |z| e^{i\theta} $$

2) **Opérations sur la forme exponentielle**
- Soient $z = r e^{i\theta}$ et $z' = r' e^{i\theta'}$
$$ |z| = |z'| \, ; \, \arg(e^{i\theta}) = \theta [2\pi] $$
- $$$$zz' = r r'e^{i(\theta + \theta')}$$$
- $$$$ \frac{z}{z'} = \frac{r}{r'} e^{i(\theta - \theta')}, \, z' = \overline{z}$$$
- $$$$ e^{i\theta} e^{-i\theta} = 1 \, ; \, e^{i0} = 1$$$

Formule de *MOIVRE* : $z^n = r^{n} e^{in\theta}$
$$ \left( \cos(\theta) + i \sin(\theta) \right)^n = \cos(n\theta) + i \sin(n\theta) $$

Formule D’EULER
$$ \cos(\theta) = \frac{e^{i\theta} + e^{-i\theta}}{2} \, ; \, \sin(\theta) = \frac{e^{i\theta} - e^{-i\theta}}{2i} $$

D) **Résolution d’équations du second degré**
Soit dans $C$ l’équation $(E) : ax^2 + bx + c = 0$ tels que $a, b$ et $c$ sont des réels.  
Si $\Delta = b^2 - 4ac < 0$, alors l’équation $(E)$ a deux racines complexes conjuguées 
$$ z_1 \text{ et } z_2 \text{ tel que } z_1 + z_2 = - \frac{b + \sqrt{A}}{2a} \text{ et } z_2 = z_1 $$
$$ z_1 + z_2 = -\frac{b}{a} \text{ et } z_1 \times z_2 = \frac{c}{a} $$

E) **Transformation dans le plan**
1) **Translation** $T_u$ de vecteur $\vec{u}(z)$
- Soit $M'(z')$ l'image de point $M(z)$ par translation $T_u$ de vecteur $u$ d’affixe $z_u$
- L’écriture complexe de translation $T_u$
$$ T_u(M') \iff MM' = \overline{U} \Rightarrow z' = z + z_u $$

2) **Homothétie de centre $\Omega$ et de rapport $k$**
- Soit $M'(z')$ l'image de $M(z)$ par l'homothétie de centre $\Omega(\omega)$ et de rapport $k$
$$ h(M) = M' \iff \Omega M' = k \cdot \Omega M $$ 
$$ \Rightarrow z' - \omega = k(z - \omega) $$

3) **Rotation** $R$ de centre $\Omega(\omega)$ et d’angle $\theta$  
Soit $M'(z')$ l'image du point $M(z)$ par la Rotation $R$ de centre $\Omega(\omega)$ et d’angle $\theta$  
L’écriture complexe de la Rotation $R$ est
$$ R(M) = M' \Rightarrow \left( \frac{\Omega M}{\Omega M'} \right)= \theta [2\pi] $$
$$ \Rightarrow z' - \omega = e^{i\theta}(z - \omega) $$

### Méthodes :
- $M_1)$ $ABCD$ est un Parallélogramme
  - $AB = DC$
  - Les diagonales ont même milieu

- $M_2)$ Parallélogramme qui a une angle droit 
- $M_2)$ Parallélogramme dont les diagonales sont isométriques

- $ABCD$ est un Losange
- $M_1)$ Parallélogramme dont les diagonales sont perpendiculaires
- $M_2)$ Parallélogramme et $AB = AC$

- $ABCD$ est un Rectangle
- $M_1)$ Parallélogramme qui a une angle droit
- $M_2)$ Parallélogramme dont les diagonales sont isométriques

- $ABCD$ est un Carré
- $M_1)$ Rectangle et losange
- $M_2)$ $AB = DC = \overline{(AB, AC)} = \frac{\pi}{2} [\pi] \text{ et } AB = AD$
```

<!-- Page 75 -->

```markdown
# Offre préparation concours 2026 - Prof Fayssal
- Plus 20 séances en vidéos de préparation Médecine 
- Plus 20 séances en vidéos pour ENSA-ENSAM-UM6P
- Nouvelle offre à partir de mois 6 avec des séances en directes et interactives
- Deux livres de préparation Médecine-ENSAL-ENSAM contient des astuces, plus de 20 concours blancs corrigés et la correction des anciens concours 
- Pour participer : 0681399067

## البرنامج الخاص بتحضير كلية الطب
- 20 حصة عن طريق الفيديو
- 20 حصة عن طريق ZOOM
- كتيبان شاملان في الرياضيات مع نصائح مفصلة وتمارين نوعية + تصحيح
- عرض و حصص مباشرة يوميا ابتداء من شهر 6 لتدقيق دقيق
- 0681399067

## résultats de sélection
- مرحبا بكم في أول سنة من تكوين الدكتور في الطب والصيدلة
- لا تنسوا أننا تحتاج لتعاونكم اليوم إن شاء الله
- اليوم في الحمد
```

<!-- Page 76 -->

```markdown
# Série corrigé 3 : Correction des examens nationaux Nombres complexes Deuxième bac sc PC/SVT/ST

## Série corrigé 3 : Correction des examens nationaux Nombres complexes de 2025 à 2012

### Deuxième bac sciences PC/SVT/ST

## Partie 3 :
Correction des examens nationaux : Nombres complexes de 2025 à 2012

---

Collection FMATHS  
Prof fayssal  
www.elboutkhili.jimdo free.com
```

<!-- Page 77 -->

```markdown
# Examens nationaux
## Nombres complexes corrigés
### 2 Bac sciences PC/SVT/ST
PAGE 1

www.elboutkhili.jimdo.com  
Prof FAYSAL : 0681399067  

Le plan complexe rapporté à un repère orthonormé direct $(O, \vec{u}, \vec{v})$  
### Examen national 2025-Session-Normal
On considère les points $A, B, C, D$ et $\Omega$ d'affixes respectives  
$a = 1 + 2i, \, b = \bar{a}, \, c = \frac{3(1+i)}{2}, \, d = \frac{3(1+t)}{2} \, et \, \omega = \frac{5}{2}$  

1) a) Vérifier que $a + b = 2$ et déduire que l'affixe de $P$ milieu du segment $[AB]$ est $P = 1$.  
b) Montrer que $a$ et $b$ sont les solutions de l’équation $z^2 - 2z + 5 = 0$ dans l'ensemble $\mathbb{C}$.  
2) a) Vérifier que $| \omega - a | = | \omega - b | = | \omega - c |$.  
b) Déduire que $\Omega$ est le centre du cercle circonscrit au triangle $ABC$.  
3) a) Vérifier $d - c = \frac{3}{4}$.  
b) Montrer que $d - b = (c - a)e^{i\frac{\pi}{2}}$ puis déduire que les droites $(DB)$ et $(AC)$ sont perpendiculaires.  
4) Soit $h$ l’homothétie de centre $C$ et de rapport $\frac{2}{3}$ qui transforme chaque point $M$ d'affixe $z$ en un point $M'$ d'affixe $z'$. On pose $h(P) = G$.  
a) Vérifier que $z' = \frac{2}{3} z + \frac{3}{2} + 2i$.  
b) Montrer que l'affixe de $G$ est $g = \frac{13}{6} + \frac{1}{2} i$.  
5) Montrer que $\Omega, G$ et $D$ sont alignés.  

### Examen national 2025-Session-Rattrapage
On considère les points $A, B, C$ et $D$ d'affixes respectives :  
$a = -\sqrt{3+i}{2}, \, b = -1+i, \, c = 1 + a$ et $d = \bar{c}$  

1) Vérifier que $|a| = 1$ et que $\arg (a) = \frac{5\pi}{6} [2\pi]$.  
2) Vérifier que $c - d = c - a$ et déduire que le triangle $ACD$ est isocèle rectangle en $C$.  
3) a) Montrer que $d - a = 1 - i \, et \, b - d = -\frac{\sqrt{3}-1}{2}(1 - i)$.  
b) Écrire que $A, D$ et $B$ sont alignés.  
4) Soit $R$ la transformation du plan qui transforme chaque point $M$ d'affixe $z$ en $M'$ d'affixe $z'$.  
a) Vérifier que $z' = -\frac{\pi}{2} [2\pi]$ où $a'$ est l'affixe du point $A'$.  
b) Montrer que l'affixe du point $A''$ est $a'' = \sqrt{6e^{\frac{\pi}{12}}}$ et en déduire que les points $O, A'$ et $B$ sont alignés.  
c) Montrer que $b'$, l'affixe du point $B'$, vérifie $b' = \left( \frac{3+\sqrt{3}}{3} \right) \bar{a}$.  
d) En déduire que le triangle $OAB$ est rectangle en $O$.  

### Exercice 2 (Examen 2024-Session-Rattrapage)
1) On considère dans l'ensemble des nombres complexes l'équation $(E) : z^2 - 4z + 9 = 0$  
   1) Vérifier que le discriminant de l'équation $(E)$ est $\Delta = (2i\sqrt{5})^2$.  
   2) Résoudre l'équation $(E)$.  
2) On considère les points $A, B$ et $C$ d'affixes respectives $a = 2 - \sqrt{5}, \, b = 2 - \sqrt{5} \, et \, c = 2 - \sqrt{5}$.  
   1) a) Vérifier que $|a| = 3$.  
```

<!-- Page 78 -->

```markdown
# Examens nationaux
## Nombres complexes corrigés
### 2 Bac sciences PC/SVT/ST
PAGE 2

Montrer que le triangle $OAB$ est isocèle.
1) a) Vérifier que $\frac{a-c}{b-c} = i$  
b) Déduire la nature du triangle $ABC$  
3) a) Déterminer l'affixe du point $D$ image de $B$ par la translation de vecteur $\overline{CA}$  
b) Montrer que $ADBC$ est un carré  

4) On pose $x_n = \left(\frac{a}{3}\right)^n$ et $y_n = \frac{1}{1 - x_n}$, avec $n$ un entier naturel non nul.  
a) Vérifier que $x_n = x_n$  
b) Montrer que $x_n + y_n = 1$ puis déduire la partie réelle de $y_n$

## Exercice 03 (Examen 2023-Session-Normal)
Dans le plan complexe rapporté à un repère orthonormé $(O, \overrightarrow{u}, \overrightarrow{v})$, on considère les points $A, A, B, C$ et D d'affixes respectives $a = \sqrt{2} + i\sqrt{2}; \quad b = 1 + \sqrt{2} + i; \quad c = \overline{b} et \quad d = 2i$  
1) Écrire le nombre $a$ sous forme trigonométrique  
1) a) Vérifier que $b - d = c$  
b) Montrer que $\sqrt{(2 + 1)(b - a) - b - d}$ et déduire que les points $A, B$ et $D$ sont alignés  
3) a) Vérifier que $ac = 2b$  
b) En déduire que $2 \arg(b) \equiv \frac{\pi}{4} [2\pi]$

4) Soit $R$ la rotation de centre $O$ et d'angle $\frac{\pi}{4}$ et qui transforme $M$ du point d'affixe $z$ en un point $M'$ d'affixe $z'$  
a) Montrer que $z' = \frac{1}{2} az$  
b) En déduire que $R(A) = B$ et $R(B) = D$  
5) Montrer que $\frac{b - a}{c - a} = \left(-\frac{\sqrt{2} - 1}{2}\right) a$, puis déduire une mesure de l'angle $(AC, \overline{AB})$

## Exercice 04 (Examen 2023-Session-Rattrapage)
1) On considère le nombre complexe  
$$ a = \frac{\sqrt{3}}{2} + \frac{3}{2} i $$  
a) Montrer que $a = \sqrt{3} \left(\cos \frac{\pi}{3} + i \sin \frac{\pi}{3}\right)$  
b) En déduire que $a^{2022}$ est un nombre réel  
2) Dans le plan complexe rapporté à un repère orthonormé $(O, \overrightarrow{u}, \overrightarrow{v})$, on considère $A$ et $B$ d'affixes respectives $a$ et $b$.  
Déterminer une mesure de l'angle de rotation $R$ de centre $O$ qui transforme $B$ en $A$  
3) On considère dans $\mathbb{C}$ l'équation  
$$(E) : z^2 - \sqrt{3} z + \alpha = 0$$  
avec $\alpha$ est un nombre réel non nul  
On suppose que l'équation $(E)$ admet deux racines conjuguées non réelles $z$ et $\overline{z}$  
Soient les points $M(z), N(z) et P(\sqrt{3})$ du plan complexe  
Sans résoudre l'équation $(E)$  
a) Vérifier que $\alpha > \frac{3}{4}$ et que $\alpha = z z$  
b) Montrer que $|z| = |z - \sqrt{3}|$  
c) En déduire que les points $M$ et $N$ appartiennent à la médiatrice $(\Delta)$ du segment $[OP]$  
d) Déterminer la valeur de $\alpha$ pour laquelle $|z - \sqrt{3}| = \sqrt{3}$ et déduire dans ce cas les points d'intersection de la droite $(\Delta)$ et le cercle de centre $P$ et de rayon $\sqrt{3}$  

## Exercice 05 (Examen 2022-Session-Normal)
Dans le plan complexe rapporté à un repère orthonormé $(O, \overrightarrow{u}, \overrightarrow{v})$, on considère le point A d'affixe $a = -1 - i\sqrt{3}$, le point B d'affixe $b = -1 + i\sqrt{3}$ et la translation $t$ de vecteur $\overline{OA}$  
1) Prouver que l'affixe du point $D$ image du point $B$ par la translation $t$ est $d = -2$
```

<!-- Page 79 -->

```markdown
# Examens nationaux
## Nombres complexes corrigés
### 2 Bac sciences PC/SVT/ST
PAGE 3

www.elboutkhili.jimdofree.com  
Prof FAYSAL : 0681399067

### Exercice 07
#### (Examen 2021-Session-Normal)

1) Résoudre dans $\mathbb{C}$ des nombres complexes, l'équation : $z^2 - \sqrt{3}z + 1 = 0$

2) Soient les nombres complexes $a = e^{i \frac{\pi}{2}}$ et 
$$ b = \frac{3}{2} + i \frac{\sqrt{3}}{2} $$
a) Écrire $a$ sous la forme algébrique  
b) Vérifier que $a\bar{b} = \sqrt{3}$  
Dans le plan complexe rapporté à un repère orthonormé direct $(O, \overrightarrow{u}, \overrightarrow{v})$, on considère les points $A, B \in \mathbb{C}$ d'affixes respectives $a, b$ et $\bar{a}$

3) Montrer que le point $B$ est l'image du point $A$ par une homothétie de centre $O$ dont on déterminera le rapport.

4) Soit $z$ l'affixe d'un point $M$ du plan et $z'$ l'affixe du point $M'$ image de $M$ par la rotation $R$ de centre $A$ et d'angle $\frac{\pi}{2}$  
a) Écrire $z'$ en fonction de $z$ et  
b) Soit l'affixe du point $D$ image de $C$ par la rotation $R$, montrer que $d = a + 1$  
c) Soit $I$ le point d'affixe le nombre 1, montrer que $ADIO$ est un losange.

5) a) Vérifier que $d - b = \frac{\sqrt{3}}{2} (1 - i)$ en déduire un argument du nombre $d - b$  
b) Écrire le nombre 1 sous forme trigonométrique.  
c) Déduire une mesure de l'angle $(\overrightarrow{B I}, \overrightarrow{B D})$

### Exercice 06
#### (Examen 2022-Session-Rattrapage)

Dans un plan complexe rapporté à un repère orthonormé direct $(O, \overrightarrow{u}, \overrightarrow{v})$, on considère les points $A, B$ et $C$ d'affixes respectives $Z_A = 1 + 5i$, $Z_B = 1 - 5i$ et $Z_C = 5 - 3i$  

1) Déterminer le nombre complexe $Z_D$ affixe du point $D$ milieu du segment $[AC]$  

2) Soit $h$ l'homothétie de centre $A$ et de rapport $\frac{1}{2}$. Déterminer le nombre complexe $Z_E$ affixe du point $I$ image de $B$ par $h$.  

3) On considère la rotation $R$ de centre $C$ et d'angle $(-\frac{\pi}{2})$. Déterminer l'image de $B$ par $R$.  

4) Soit $F$ le point d'affixe $Z_F = -1 + i$  
a) Vérifier que $Z_D - Z_A \times \frac{Z_F - Z_E}{Z_D - Z_E} = -1$  
b) En déduire que $(\overline{AF} \cdot \overline{ED} + \overline{EF} \equiv \pi[2\pi])$  
c) Déterminer la forme trigonométrique du nombre $\frac{Z_E - Z_F}{Z_A - Z_F}$ en déduire la nature du triangle $AEF$  
d) Déduire que les points $A, D, E$ et $F$ appartiennent à un cercle on déterminera un diamètre.

### Exercice 08
#### (Examen 2021-Session-Rattrapage)

1) Résoudre dans $\mathbb{C}$ l'équation $z^2 - 6z + 13 = 0$  

2) Dans le plan complexe rapporté à un ROD $(O, \overrightarrow{u}, \overrightarrow{v})$, on considère les points $A, B$ et $C$ d'affixes $a = 3 + 2i$, $b = -3 - 2i$ et $c = -1 - 2i$  
a) Écrire $\frac{c - b}{a - b}$ sous la forme algébrique.
```

<!-- Page 80 -->

```markdown
# Examens nationaux
## Nombres complexes corrigés
### 2 Bac sciences PC/SVT/ST
PAGE 4

3) Soit $R$ la rotation de centre $B$ et d’angle $\frac{\pi}{2}$, et soit $M$ un point d’affixe $z$ et $M'$ d’affixe $z'$ l’image de $M$ par la rotation $R$, et $D$ d’affixe $d = -3 - 4i$.  
a) Écrire $z$ en fonction de $z'$  
b) Vérifier que le point $C$ est l’image du point $A$ par la rotation $R  
4) a) Montrer que les points $A, B$ et $C$ sont alignés  
c) Déterminer le rapport d’homothétie de centre $C$ qui transforme $A$ en $D$  
d) Déterminer l’affixe du point $E$ tel que le quadrilatère $BCDE$ soit un parallélogramme  
5) a) Montrer que $\frac{d-a}{m-b}$ est un réel  
b) Montrer que $ABED$ est un trapèze isocèle

## Exercice 09 (Examen 2020-Session-Normal)
1) Dans l’ensemble $\mathbb{C}$, on considère l’équation : $(E): x^2 - 2(\sqrt{2} + \sqrt{6}) x + 16 = 0$  
a) Vérifier que le discriminant de l’équation $(E)$ est $\Delta = -4(\sqrt{6} - \sqrt{2})^2$  
b) En déduire les solutions de $(E)$  
2) Soit $a = (\sqrt{6} + \sqrt{2}) + i(\sqrt{6} - \sqrt{2})$, $b = 1 + i\sqrt{3}$ et $c = \sqrt{2} + i\sqrt{2}$  
a) Vérifier que $bc = 4$, puis en déduire que $ac = 4b$  
b) écrire les nombres complexes $b$ et $c$ sous forme trigonométrique.  
c) En déduire que $a = 4 \left( \cos \left( \frac{\pi}{12} \right) + i \sin \left( \frac{\pi}{12} \right) \right)$  

3) Dans le plan complexe rapporté à un repère orthonormé direct $(O; \vec{u}, \vec{v})$, on considère les points $B$, $C$ et $D$ d’affixes respectives $b, c$ et $d$ telle que $d = a^4$. Soit $z$ l’affixe d’un point $M$ un point $M'$ l’affixe de $M'$ image de $M$ par la rotation $R$ de centre $O$ et d’angle $\frac{\pi}{8}$.  
a) Vérifier que $z' = bz$.  
b) Déterminer l’image du point $C$ par la rotation $R$ et montrer que cette point et $A$ l’image du point $B$ par la rotation $R$.  
4) a) Montrer que $|a - b| = |b - c|$ puis déduire la nature du triangle $ABC$.  
   a) Calculer la mesure de l’angle $\overline{BA, BC}$.  

5) On considère la translation $T$ du vecteur $\vec{u}$ et soit le point $D$ l’image du point $A$ par la translation $T$.  
a) Vérifier que l’affixe du point $D$ est égale au nombre complexe $b^2 + 1$.  
b) Montrer que $\frac{b^2 + 1}{b} = b + \bar{b}$, puis déduire que les points $O$, $B$ et $D$ sont alignés.
```

<!-- Page 81 -->

```markdown
# Examens nationaux
## Nombres complexes corrigés
### 2 Bac sciences PC/SVT/ST

---

## Exercice 11 (Examen 2019-Session-Normal)
1) Résoudre dans l'ensemble $\mathbb{C}$ l'équation : $z^2 - 2z + 4 = 0$.
2) Dans le plan complexe rapporté à un repère orthonormé direct $(O; \vec{u}; \vec{v})$, on considère les points $A, B, C$ et $D$ d'affixes respectives : $a = 1 - i\sqrt{3}$, $b = 2 + 2i$, $c = \sqrt{3} + i(-2 + 2\sqrt{3})$.
   a) Vérifier que : $a - d = -\sqrt{3}(c - d)$.
   b) En déduire que les points $A, C$ et $D$ sont alignés.
3) On considère l'affixe d’un point $M$ et $z'$ l'affixe de $M'$ image de $M$ par la rotation $R$ de centre $O$ et d'angle $-\frac{\pi}{3}$.
   Vérifier que : $z' = \frac{1}{2}az$.
4) Soit $H'$ l'image du point $B$ par la rotation $R$, et $H$ son affixe et $P$ le point d'affixe $p$ tel que $p = a - c$.
   a) Vérifier que : $h = itp$.
   b) Montrer que le triangle $OHP$ est rectangle et isocèle en $O$.

---

## Exercice 12 (Examen 2019-Session-Rattrapage)
1) a) Résoudre dans l'ensemble l’équation $z^2 - 3z + 3 = 0$.  
   b) On pose $a = \frac{3}{2} - \frac{\sqrt{3}}{2}i$, écrire $a$ sous forme trigonométrique.  
   On considère le nombre complexe $b = \frac{\sqrt{2}}{2}(1 + i)$, vérifier $b^2 = i$.
2) On pose $h = \cos(\frac{\pi}{3}) + i \sin(\frac{\pi}{12})$, montrer que $h^4 + 1 = a$.
3) Dans le plan complexe rapporté à un repère orthonormé direct $(O, \vec{u}, \vec{v})$, on considère le point $B’$ d’affixe $b$ et $R$ la rotation de centre $O$ et d’angle $\frac{\pi}{2}$.
   a) Soit l'affixe du point $C$ image du point $B$ par la rotation $R$. Montrer que $c = ib$.  
   b) En déduire la nature du triangle $OBC$.

---

## Exercice 13 (Examen 2018-Session-Normal)
Résoudre dans l'ensemble $\mathbb{C}$ l'équation : $2z^2 + 2z + 5 = 0$.
2. Dans le plan complexe rapporté à un repère orthonormé direct $(O;\vec{u};\vec{v})$, on considère la rotation $R$ de centre $O$ et d'angle $\frac{2\pi}{3}$.
   a) Écrire sous forme trigonométrique le complexe $d = -\frac{1}{2} - \frac{\sqrt{3}}{2}i$.
   b) On considère le point $A$ d'affixe $a = -\frac{1}{2} + \frac{3}{2}i$ et le point $B$ image du point $A$ par la rotation $R$. Soit l'affixe du point $B$, Montrer que : $b = d.a$.
3. Soit $C$ la translation de vecteur $\overline{OA}$ et $C$ l'image de $B$ par la translation et $c$ l'affixe du point $C$.
   a) Vérifier que $c = b + a$ et en déduire que $c = a (\frac{1}{2} + \frac{\sqrt{3}}{2}i)$ (utiliser question 2.b).
   b) Déterminer $\arg(\frac{c}{a})$ et déduire que le triangle $OAC$ est équilatéral.

---

## Exercice 14 (Examen 2018-Session-Rattrapage)
1) Résoudre dans l'ensemble $\mathbb{C}$ l'équation $z^2 - 2\sqrt{2}z + 4 = 0$.
2) Dans le plan complexe rapporté à un repère orthonormé direct $(O; \vec{u}; \vec{v})$, on considère le point $A$ d'affixe $a = \sqrt{2}(1 - i)$ et la rotation $R$ de centre $O$ et d'angle $\frac{\pi}{3}$.
   a) Écrire $a$ sous forme trigonométrique.  
   b) Vérifier que l'affixe du point $B$ image du point $A$ par la rotation $R$ est $b = 2(\cos(\frac{\pi}{12}) + i \sin(\frac{\pi}{12}))$.
3) Soit $C$ le point d'affixe $c = 1 + i$, montrer que $b^2 - c^2 = 2\sqrt{3}$.
   b) Soit $D$ la translation de vecteur $OC$ et $D$ l'image du point $B$ par la translation $t$.
   c) En déduire que $OD \cdot BC = 2\sqrt{3}$.
```

<!-- Page 82 -->

```markdown
# Examens nationaux
## Prof FAYSAL : 0681399067
### 2 Bac sciences PC/SVT/ST
PAGE 6

### Exercice 15 (Examen 2017-Session-Normal)
Soient les complexes $a$ et $b$ tels que
$$ a = \sqrt{3} + i et \ b = \sqrt{3} - 1 + (\sqrt{3} + 1)i $$
1.a. Vérifier que $b = (1 + i)a$
1.b. En déduire que $|b| = 2\sqrt{2}$
1.c. Déduire de ce qui précède que :
$$ \cos\left(\frac{5\pi}{2}\right) = \frac{\sqrt{6}-\sqrt{2}}{4} $$
2. Le plan est muni d'un repère orthonormé.  
Soient les points $A$ et $B$ d'affixes $c = -A + i\sqrt{3}$.  
2.a. Vérifier que $OA = i\alpha$, en déduire que  
$$ OA = OC et \left( \overline{OA}, OC \right) = \frac{\pi}{2} [2\pi] $$
2.b. Montrer que le point $B$ est l’image du point $A$ par la translation de vecteur $OC$  
2.c. En déduire la nature du quadrilatère $OABC$

### Exercice 16 (Examen 2017-Session-Rattrapage)
1. Résoudre dans $\mathbb{C}$ l'équation :
$$ z^2 + 4z + 8 = 0 $$
2. On considère, dans le plan complexe rapporté à un repère orthonormé direct $(O;\vec{i};\vec{j})$, les points $A, B$ et $C$ d'affixes respectives $a, b$ et $c$ tels que :
$$ a = -2 + 2i, \ b = 4 - 4i et \ c = 4 + 8i $$
a) Soit $z$ l'affixe d'un point $M$ du plan $z'$ l'affixe du point $M'$ l'image de $M$ par la rotation $R$ de centre $A$ et d'angle $-\frac{\pi}{2}$. Montrer que : $z' = -iz - 4$.
b) Vérifier que le point $B$ l'image du point $C$ par la rotation $R$ et en déduire la nature du triangle $ABC$.
3. Soit $\omega$ l'affixe du point $\Omega$ milieu du segment $[BC]$.
a) Montrer que $|c - \omega| = 6$
b) Montrer que l'ensemble des points $M$ d'affixes $z$ tel que $|z - \omega| = 6$ est le cercle circonscrit au triangle $ABC$.

### Exercice 17 (Examen 2016-Session-Normal)
Résoudre dans l’ensemble $\mathbb{C}$ l’équation :
$$ -4z + 29 = 0 $$
2) On considère, les points $A$ et $B$ d'affixes respectives $w, a$ et $b$ tels que :
$$ w = 2 + 5i, \ a = 5 + 2i et \ b = 5 + 8i $$
a) Soit $u$ le nombre complexe tel que : 
$$ u = b - w $$
b) Vérifier que $u = 3 + 3i$ puis montrer que
$$ \arg(u) \equiv \frac{\pi}{4} [2\pi]. $$
c) Déterminer un argument du nombre complexe $u$.  
c) Vérifier que $a - w = \overline{u}$ puis en déduire que :
$$ \Omega A = \Omega B et \arg\left(\frac{b - w}{a - w}\right) = \frac{\pi}{2} [2\pi]. $$
d) On considère la rotation $R$ de centre $\Omega$ et d'angle $\frac{\pi}{2}$.  
e) Déterminer l’image du point $A$ par la rotation $R$.

### Exercice 18 (Examen 2016-Session-Rattrapage)
1) Résoudre dans $\mathbb{C}$ l'équation :
$$ z^2 - 8z + 41 = 0 $$
2) Dans le plan complexe rapporté à un RON direct $(O, \vec{i}, \vec{j})$, les points $A, B et C$ ont d'affixes respectives $a, b et c$ tels que 
$$ a = 4 + 5i, \ b = 3 + 4i; \ c = 6 + 7i; et \ w = 4 + 7i. $$
a) Calculer $c - \overline{b}$ et en déduire que les points $A$ et $B$ et $C$ sont alignés.  
b) Soit $z$ l’affixe d’un point $M$ du plan et $z'$ l’affixe du point $M'$ image de $M$ par la rotation $R$ de centre $O$ et d’angle $-\frac{\pi}{2}$. Montrer que : $z' = -iz - 3 + 11i$.  
c) Déterminer l'image du point $C$ par la rotation $R$ puis donner une forme trigonométrique du nombre $\frac{a - w}{c - w}$.

### Exercice 19 (Examen 2015-Seson-Normal)
1) Résoudre dans $\mathbb{C}$ l'équation :
$$ z^2 + 10z + 26 = 0 $$
2) Soit, dans RON direct $(O, \vec{e_1}, \vec{e_2})$, les points $A, B, C et \Omega$ d'affixes respectives $a, b, c$ et $\omega$ tels que : 
$$ a = -2 + 2i, \ b = -5 + i; \ c = -5 - i et \ \omega = -3. $$
```

<!-- Page 83 -->

```markdown
# Examens nationaux
## Nombres complexes corrigés
### 2 Bac sciences PC/SVT/ST
#### PAGE 7

a) Montrer que : 

$$
b - \omega = i.
$$

b) En déduire la nature du triangle $\Omega AB$.

2) Soit $D$ image du point $C$ par la translation $T$ de vecteur $\vec{u}$ d'affixe $6 + 4i$.

a) Montrer que l'affixe du point $D$ est $1 + 3i$.

b) Montrer que :

$$
\frac{b - d}{a - d} = 2
$$ 

et en déduire que $A$ est le milieu de $[BD]$.

## Exercice 20 (Examen 2015-Session-Rattrapage)

1. a) Résoudre dans l'ensemble $\mathbb{C}$ l'équation :

$$
z^2 - 8z + 32 = 0.
$$

b) Soit complexe $a$ tel que : $a = 4 + 4i$. Écrire le nombre complexe $a$ sous sa forme trigonométrique puis en déduire que $a^{12}$ est un nombre réel négatif.

2) On considère, dans le plan complexe rapporté à un repère orthonormé direct $(O, \vec{e_1}, \vec{e_2})$, les points $A, B$ et $C$ d’affixes respectives $a, b$ et $c$ telles que :

$$
a = 4 + 4i, \quad b = 2 + 3i \quad et \quad c = 3 + 4i.
$$

Soit l'affixe d'un point $M$ du plan et $z$ l'affixe du point $M'$ image de $M$ par la rotation $R$ de centre $O$ et d'angle $\frac{\pi}{2}$.

a) Montrer que :

$$
z' = z + 7 + i.
$$

b) Vérifier que l'affixe du point $D$ image de $A$ par la rotation $R$ est $3 + 5i$.

c) Montrer que l'ensemble des points $M$ d’affixe $z$ tel que $|z - 3 - 5i| = |z - 4 - 4i|$ est la droite $(BC)$.

## Exercice 21 (Examen 2015-Anullé)

Soit le complexe $z$ tel que :

$$
z = 2 + \sqrt{2} + i\sqrt{2}.
$$

1) Vérifier que $a = 2 (1 + \cos \frac{\pi}{4}) + 2i \sin \frac{\pi}{4}$.

3) a) En linéarisant $\cos^2(\theta)$, où $t$ est un réel, montrer que :

$$
1 + \cos(20) = 2\cos^2(10).
$$

b) Montrer que :

$$
a = 4 \cos^2(\frac{\pi}{8}) \left( \cos(\frac{\pi}{8}) + \sin(\frac{\pi}{8}) \right).
$$

c) Montrer que $a = a - \frac{2 + \sqrt{2}}{2} i$.

4) Dans le plan muni d'un repère orthonormé, on considère les points $A$ et $\Omega$ d’affixes respectives $a$ et $o$ telles que : 

$$
a = 2 + \sqrt{2} + i \sqrt{2} \quad et \quad o = \sqrt{2} et \quad R la rotation de centre $A$ et d'angle $\frac{\pi}{2}$.

## Exercice 22 (Examen 2014-Session-Normal)

1) Résoudre dans $\mathbb{C}$ l'équation :

$$
z^2 - \sqrt{2} z + 2 = 0.
$$

2) Soit le nombre complexe $u$ tel que :

$$
u = \frac{\sqrt{2}}{2} + i \sqrt{6}.
$$

a) Montrer que le module de $u$ est $\sqrt{2}$ et que $\arg u = \frac{\pi}{3} [2\pi]$.

b) En utiliser la forme trigonométrique du nombre $u$, montrer que $u^6$ est un réel.

3) On considère, dans le plan muni d’un repère orthonormé direct $(O, \vec{e_1}, \vec{e_2})$, les deux points $A$ et $B$ d’affixes respectives $a$ et $b$ tel que : $a = -4\sqrt{3} \quad et \quad b = 8$.

Soit l'affixe d'un point $M$ et $z$ l'affixe d'un point $M'$ image de $M$ par la rotation $R$ de centre $O$ et d'angle $\frac{\pi}{3}$.

a) Exprimer $z$ en fonction de $z$.

b) Vérifier que $B$ est l’image de $A$ par la rotation $R$ et déduire que $OAB$ est équilatéral.

## Exercice 23 (Examen 2014- Rattrapage)

1) Résoudre dans l'ensemble $\mathbb{C}$ l'équation :

$$
z^2 - 4z + 5 = 0.
$$

2) Soient les points $A, B, C, D$ et $\Omega$ d’affixes respectives $a = 2 + i, \quad b = 2 - 1, \quad c = i, \quad d = -i \quad et \quad \omega = 1.$

a) Montrer que :

$$
\frac{a - \omega}{b - \omega} = i.
$$

b) En déduire que le triangle $\Omega AB$ est rectangle et isocèle en $\Omega$.

3) On considère la rotation $R$ de centre le point $\Omega$ et d’angle $\frac{\pi}{2}$.
```

<!-- Page 84 -->

```markdown
# Examens nationaux
## Nombres complexes corrigés

### Exercise 24 (Examen 2013-Session-Normal)

On considère, dans le plan muni d’un repère orthonormé direct $(O; \vec{u}, \vec{v})$, les points $A, B$ et $C$ d’affixes respectives $a, b$ et $c$ tel que :
- $a = 7 + 2i$, 
- $b = 4 + 8i$ et 
- $c = -2 + 5i$.

1. a) Vérifier que : $(1 + i)(-3 + 6i) = -9 + 3i$ et montrer que : $\frac{c-a}{b-a} = 1 + i$.
   b) En déduire que : $AC = AB\sqrt{2}$ et donner une mesure de l’angle orienté $\left( \overline{AB}, \overline{AC} \right)$.

2. Soit $R$ la rotation de centre $B$ et d’angle $\frac{\pi}{2}$.
   a) Montrer que l’affixe du point $D$ image du point $A$ par la rotation $R$ est : $d = 10 + 11i$.
   b) Calculer $\frac{d-c}{b-c}$ et en déduire que les points $B, C$ et $D$ sont alignés.

---

### Exercise 26 (Examen 2012-Session-Normal)

1. Résoudre dans l’ensemble $\mathbb{C}$ l’équation :
   $$ x^2 - 12x + 61 = 0 $$
   
2. On considère dans le plan complexe muni d’un repère orthonormé direct $(O, \vec{e_1}, \vec{e_2})$ les points $A, B$ et $C$ d’affixes respectivement $a, b$ et $c$ tels que :
   - $a = 6 - 5i$; 
   - $b = 4 - 2i$ et 
   - $c = 2 + i$.

   a) Calculer $\frac{a-c}{b-c}$ puis déduire que les points $A, B$ et $C$ sont alignés.
   
   b) On considère la translation $T$ de vecteur $\vec{u}$ dont l’affixe est $1 + 5i$. Vérifier que l’affixe du point $D$ image du point $C$ par la translation $T$ est $d = 3 + 6i$.

   c) Montrer que : $\frac{d-c}{b-c} = -1 + i$ et que $3\frac{3}{4}$ est l’argument du nombre complexe $-1 + i$. Déduire une valeur de l’angle orienté $\left( \overline{CB}, \overline{CD} \right)$.

---

### Exercise 25 (Examen 2013-Session-Rattrapage)

1. Résoudre $C_l : z^2 - 8z + 25 = 0$.
   
2. On considère, dans le plan muni d’un repère orthonormé direct $(O, \vec{u}, \vec{v})$, les points $A, B$ et $C$ d’affixes respectives :
   - $a = 4 + 3i$; 
   - $b = 4 - 3i$; 
   - $c = 10 + 3i$.

   Et la translation $T$ de vecteur $\overline{BC}$.
   a) Montrer que l’affixe du point $D$ image du point $A$ par la translation $T$ est : $d = 10 + 9i$.
   
   b) Vérifier que $\frac{b-a}{d-a} = -\frac{1}{2}(1 + i)$ puis écrire le nombre complexe $-\frac{1}{2}(1 + i)$ sous une forme trigonométrique.

   c) Montrer que : $$ (AD, AB) = \frac{5\pi}{4} \left[ 2\pi \right] $$

---

### Exercise 27 (Examen 2012-Session-Rattrapage)

On considère, dans le plan complexe rapporté à un repère orthonormé direct $(O, \vec{u}, \vec{v})$, les points $A, B$ et $C$ d'affixes respectives $a, b$ et $c$ tels que :
- $a = 2 - i$; 
- $b = 6 - 7i$; 
- $c = 8 + 3i$.

1. a) Montrer que $\frac{c-a}{b-a} = i$.
   
   b) Déduire que le triangle ABC est isocèle et rectangle en point $A$.
   
2. Soit $z$ l’affixe d’un point $M$ du plan et $z'$ l’affixe du point $M'$ image de $M$ par la rotation $R$ de centre $\Omega$ le milieu du segment $[BC]$ et d’angle $-\frac{\pi}{2}$.
   a) Vérifier que l’affixe du point $O$ est $\omega = 7 - 2i$.
   
   b) Montrer que : $z' = -iz + 9 + 5i$.
   
   c) Montrer que $C$ est l’image du point $A$ par la rotation $R$.
```

<!-- Page 85 -->

```
# Offre préparation concours 2026 – Prof Fayssal
- Plus 20 séances en vidéos de préparation Médecine
- Plus 20 séances en vidéos pour ENSA-ENSAM-UM6P
- Nouvelle offre à partir de mois 6 avec des séances directes et interactives
- Deux livres de préparation Médecine-ENSAM-ENSAM contiennent des astuces, plus de 20 concours blancs corrigés et la correction des anciens concours

Pour participer : 0681399067

---

## حصص خصيصاً لتحضير الطّلب (20 حصّة)
- حصص للدروس عن بُعد عبر ZOOM و حصص مباشرة (20 حصّة) ENSM - UM6P - ENSA 
- بالكمال.
- كتب بها شاملة في الرياضيات 📚 مع تمارين وفمستندات مفضلة ونوعية + تصحيح الإختبارات السابقة. 
- عرض وحصص مباشرة يومياً ابتداء من شهر 6 لتبتين دقيق.

0681399067

---

# Résultat de Sélection
إنتخابات السنة الفائتة :
جميعكم سُخّرتم على مجهوداتكم
جميعكم سُخّرتم على مجهوداتكم
بخصوص القضاية فقط وتحية لله
نشكركم على الإهتمام

---

Salam prof Ana mn les élèves diawik had l3sam 
Je vous remercie beaucoup beaucoup 3la ga3 3dks efforts li derit m3ana f la classe ❤️❤️
```


<!-- Page 86 -->

```markdown
# Correction des examens nationaux nombres complexes
## 2 Bac sciences PC/SVT/ST
**Page : 01**

www.elboutkhili.jimdofree.com  
Prof FAYSAL : 0681399067  
Prof fayssal

### Examen national 2025-Session-Normal
On considère les points A, B, C, D et Ω d'affixes respectives 

$$ a = 1 + 2i, \quad b = \bar{a}, \quad c = \frac{3(3+t)}{2}, \quad d = \frac{3(1+t)}{2} \quad et \quad \omega = \frac{5}{2}. $$

1) a) Vérifier que $ a + b = 2 $ et déduire que l'affixe de P milieu du segment $ [AB] $ est $ p = 1 $.

b) Montrer que $ a $ et $ b $ sont les solutions de l'équation $ z^2 - 2z + 5 = 0 $ dans l'ensemble $ \mathbb{C} $.

2)a) Vérifier que $ | \omega - a | = | \omega - b | = | \omega - c | $.

b) Déduire que $ \Omega $ est le centre du cercle circonscrit au triangle ABC.

3)a) Vérifier que $ \frac{d - c}{a - b} = \frac{3}{4} $.

b) Montrer que $ d - b = (c - a)e^{i\frac{\pi}{2}} $ puis déduire que les droites $ (DB) $ et $ (AC) $ sont perpendiculaires.

4) Soit l'homothétie de centre C et de rapport $ \frac{2}{3} $ qui transforme chaque point M d'affixe $ z $ en un point M' d'affixe $ z' $. On pose $ h(P) = G. $

a) Vérifier que $ z' = \frac{2}{3} z + \frac{1}{2} i. $

b) Montrer que l'affixe de G est $ \frac{13}{6} + \frac{1}{2} i. $

5) Montrer que $ \Omega, G $ et D sont alignés.

## Solution
Dans le plan complexe rapporté à un repère orthonormé direct $(O, \vec{i}, \vec{j})$, on considère les points A, B, C, D et Ω d'affixes respectives 

$$ a = 1 + 2i, \quad b = \bar{a}, \quad c = \frac{3(3+t)}{2}, \quad d = \frac{3(1+t)}{2} \quad et \quad \omega = \frac{5}{2}. $$

1) a) Vérifier que $ a + b = 2 $ et en déduire que l'affixe de P, milieu du segment $ [AB] $ est $ p = 1 $.

#### Rappels
$$ z + \bar{z} = 2Re(z) $$

L'affixe de I le milieu du segment $ [AB] $ est 

$$ z_I \text{ tel que } : Z_I = \frac{z_A + z_B}{2} $$

Vérifier que $ a + b = 2 $ 

$$ a + b = a + \bar{a} = 2Re(a) = 2 \times 1 = 2 $$

Donc $ a + b = 2 $.

Déduire que l'affixe du point P, milieu du segment $ [AB] $ est $ p = 1 $.

#### Rappel : Module d'un nombre complexe $ z $
Le module de $ z = a + ib $ d'image M est le nombre réel positif noté $ | z | $ défini par 

$$ | z | = OM = \sqrt{zz} = \sqrt{a^2 + b^2} $$

On a : 
$$ | \omega - a | = \left| \frac{5}{2} - (1 + 2i) \right| = \left| \frac{3}{2} - 2i \right| = \sqrt{ \left(\frac{3}{2}\right)^2 + 4} = \sqrt{\frac{9}{4} + 4} $$
Et on a : 
$$ | \omega - b | = | \omega - a | = | \omega - c |. $$

Donc le point $ \Omega $ est le centre du cercle circonscrit au triangle ABC.
```

<!-- Page 87 -->

```markdown
# Correction des examens nationaux nombres complexes
## 2 Bac sciences PC/SVT/ST
**Page : 02**

### a) Vérifier que $z' = \frac{2}{3} z + \frac{3}{2} + \frac{1}{2} i$
On a : $h(M) = M' \iff z' - c = \frac{2}{3} (z - c)$

$$
\Rightarrow z' = \frac{2}{3} z - \frac{3(3 + i)}{2} + \frac{3(3 + i)}{2}
$$

Donc $z' = \frac{2}{3} z + \frac{3 + i}{2}$.

b) Montrer que l'affixe du point G est 
$$
g = \frac{13}{6} + \frac{1}{2} i.
$$
$$
h(P) = G \Rightarrow g = \frac{2}{3} p + \frac{3}{2} + \frac{1}{2} i
$$

$$
\Rightarrow g = \frac{2}{3} \times \frac{3}{2} + \frac{1}{2} i.
$$

Alors $g = \frac{13}{6} + \frac{1}{2} i$ (car p = 1).

5) Montrer que les points $\Omega, G$ et $D$ sont alignés.
**Rappel :**
Les points A, B et C sont alignés $\iff \frac{z_B - z_A}{z_C - z_A} \in \mathbb{R}$

$$
g - \omega = \frac{13-3i}{6 - 3 + i} = -\frac{2 + 3i}{2}
$$

Donc les points $\Omega, G$ et D sont alignés.

### Examen national 2025-Session-Rattrapage
On considère les points A, B, C et D d'affixes 
$$
a = -\sqrt{3} + i, \quad b = -\frac{1}{\sqrt{3}} + b, \quad c = a + a \cdot e^{\bar{c}}.
$$

1) Vérifier que $|a| = 1$ et $arg(\alpha) = \frac{5\pi}{6} [2\pi]$.

2) Vérifier que $\frac{c - d}{c - a}$ et déduire que le triangle ACD est isocèle rectangle en C.

3a) Montrer que $b - d = a - 1 = -\frac{\sqrt{3}-1}{2}(1 - i)$.

4) B) Déduire que A, D et B sont alignés.

5) Soit R la transformation du plan qui transforme chaque point M d'affixe $z$ en $M'$ d'affixe $z' = az$.
   a) Vérifier que R est une rotation dont on déterminera le centre et l'angle.

b) Vérifier que $ad = c$ et déduire que $R(D) = C$.

c) Montrer que $arg(c) = \frac{5\pi}{12} [2\pi]$.
```

<!-- Page 88 -->

```markdown
# Correction des examens nationaux nombres complexes
## 2 Bac sciences PC/SVT/ST
### Page : 03

Solution  
Dans le plan complexe rapporté à un repère orthonormé direct $(O; \overrightarrow{u}, \overrightarrow{v})$, on considère les points $A, B, C$ et $D$ d'affixes respectives 
$$ a = -\frac{\sqrt{3}}{2} + \frac{1}{2} i $$
$$ b = 1 - i\sqrt{3} $$
$$ c = 1 + i $$
$$ d = \overline{c}. $$

1) Vérifier que $|a| = 1$ et que $\text{arg}(a) = \frac{5\pi}{6} [2\pi]$. 

On a : 
$$ a = -\frac{\sqrt{3}}{2} + \frac{1}{2} i $$

Alors $|a| = \left(-\frac{\sqrt{3}}{2}\right)^2 + \left(\frac{1}{2}\right)^2 = \frac{3}{4} + \frac{1}{4} = 1.$ 

Donc $|a| = 1$.  

On a : 
$$ \cos\left(\frac{5\pi}{6}\right) = -\frac{\sqrt{3}}{2} $$
$$ \sin\left(\frac{5\pi}{6}\right) = \frac{1}{2} i $$

Donc $a = \cos\left(\frac{5\pi}{6}\right) + i\sin\left(\frac{5\pi}{6}\right)$.

Donc $\text{arg}(a) = \frac{5\pi}{6} [2\pi]$. 

2) Vérifier que $c - d = c - a$ et déduire que le triangle $ACD$ est isocèle rectangle en $C$. 

On a 
$$ c - d = c - \overline{c} = c - c = 0 $$

Vous obtenez : 
$$ c - a = \frac{c - c}{1 + a - a} = 2i\Im(a) = 2i\frac{1}{2} = i. $$

D'où $c - a = i.$ 

On a : 
$$ |c - d| = |c - a| \Leftrightarrow \frac{DC}{AC} = 1 \Leftrightarrow DC = AC $$

\(\therefore \) le triangle $ACD$ est isocèle en $C$. 

$$ c - d = i \iff (CA, CD) = \text{arg}(i) [2\pi] \implies (CA, CD) = \frac{\pi}{2} [2\pi] \implies \text{le triangle } ACD \text{ est rectangle en } C. $$

3.a. Montrer que $d - a = 1 - i$ et que $b - d = \frac{\sqrt{3}-1}{2} (1 - i)$. 

On a :  
$$ a = d - c = a = 1 + i - \frac{\sqrt{3} - i}{2} = 1 + \overline{a} - \frac{\sqrt{3}}{2} = 1 - i. $$

D'où $d - a = 1 - i$. 

On a : 
$$ b - d = \frac{1 - i\sqrt{3}}{2} - \frac{\sqrt{3}}{2} - 1 + 1 + -\frac{i\sqrt{3}}{2} $$

D'après la question (3.a.), on a 
$$ b - d = \frac{\sqrt{3}-1}{2} (1 - i). $$

Donc les points $A, D$ et $B$ sont alignés. 

4. Soit $R$ la transformation du plan qui transforme chaque point $M$ d'affixe $z$ en $M'$ d'affixe $z'$ telle que $z' = az$. 

4.a. Vérifier que $R$ et $R$ sont une rotation dont on déterminera le centre et l'angle. 

On a d'après (1) : $$ |a| = 1 \implies \text{arg}(a) = \frac{5\pi}{6} [2\pi]. $$

On a 
$$ M' (z') = R(M(z)) \Leftrightarrow z' = az $$ 
$$ \iff (z' - 0) = e^{\frac{5\pi}{6}}(z - 0) $$ 

Le point $O$ est le seul point invariant par la transformation $R$ : 
$$ M = R(M) \iff z = az(z - 1) = 0 \Rightarrow z = 0. $$ 

Donc $R$ est la rotation de centre $O$ et d'angle $\frac{5\pi}{6}$. 

4.b. Vérifier que $ad = c$ et déduire que $R(D) = C$. 

On a : 
$$ d = \overline{c} \implies \text{arg}(ad + \text{arg}(g(c)) = 0[2\pi] $$

$$ ad = c \implies \text{arg}(a) + \text{arg}(g(d)) = \text{arg}(c) [2\pi]. $$

2$\text{arg}(g(c)) = \text{arg}(a)[2].$ 

2$\text{arg}(g(c)) = \frac{5\pi}{6} [2\pi].$ 

4.c. Montrer que $\text{arg}(c) = \frac{5\pi}{12} [2\pi].$

$$ d = c - d \implies \text{arg}(ad + \text{arg}(g(c)) = 0[2\pi] $$
$$ ad = c \implies \text{arg}(ad) + \text{arg}(g(d)) = \text{arg}(c) [2\pi] $$
$$ \implies 2\text{arg}(g(c)) = \text{arg}(g(a)[2] $$
$$ \implies 2\text{arg}(c) = \frac{5\pi}{6} [2\pi]. $$
```

<!-- Page 89 -->

```markdown
# Correction des examens nationaux nombres complexes

## 2 Bac sciences PC/SVT/ST
**Page : 04**

### Exercice 01 (Examen 2024-Session-Normal)

Dans le plan complexe rapporté à un repère orthonormé direct $(O, \vec{u}, \vec{v})$, on considère les points $A$ et $B$ d'affixes respectives 
$$ a = \sqrt{3(1 - i)} \quad \text{et} \quad b = 2 + \sqrt{3} + i $$

1) Vérifier que $|a| = \sqrt{6}$ et que  
$$ \arg(a) = -\frac{\pi}{4} \mod [2\pi] $$

2)a) Montrer que  
$$ \frac{b}{a} = \frac{3 + \sqrt{3}}{6} + \left( \frac{1 + \sqrt{3}}{2} \right) i $$  
puis vérifier que  
$$ b^{24} \text{ est un nombre réel.} $$ 

b) En déduire une forme trigonométrique du complexe $b$ puis vérifier que $b^{24}$ est un nombre réel.

3) Soit $R$ la rotation de centre $O$ et d'angle $\frac{\pi}{6}$ qui transforme chaque point $M$ du plan d'affixe $z$ en un point $M'$ d'affixe $z'$. On pose $R(B) = B', R(A) = A' et R(A') = A''$

a) Vérifier que  
$$ z' = \frac{1}{2} \sqrt{3} + i $$  
et que  
$$ \arg(a) = -\frac{\pi}{12} \mod [2\pi] $$  
où $c$ est l'affixe du point $A'$.

b) Montrer que l'affixe du point $A''$ est  
$$ a'' = \sqrt{6} e^{\frac{\pi}{12} i} $$   
et en déduire que les points $O, A''$ et $B$ sont alignés.

c) Montrer que $b', \text{ l'affixe du point } B'$, vérifie  
$$ b' = \frac{(3 + \sqrt{3})}{3} $$

d) En déduire que le triangle $OAB'$ est rectangle en $O$.

### Solution

Dans le plan complexe rapporté à un repère orthonormé direct $(O, \vec{u}, \vec{v})$, on considère les points $A$ et $B$ d'affixes respectives  
$$ a = \sqrt{3(1 - i)} \quad \text{et} \quad b = 2 + \sqrt{3} + i $$

1) Vérifier que $|a| = \sqrt{6}$ et que  
$$ \arg(a) = -\frac{\pi}{4} \mod [2\pi] $$

$$ |a| = |\sqrt{3(1 - i)}| = |\sqrt{3} | \cdot |1 - i| $$
$$ = \sqrt{3} \cdot \sqrt{1^2 + 1^2} $$
$$ = \sqrt{3} \cdot \sqrt{2} $$
$$ = \sqrt{6} $$

$$ = \sqrt{3(1 - i)} $$
$$ = \sqrt{6} \left( \cos\left(-\frac{\pi}{4}\right) + i\sin\left(-\frac{\pi}{4}\right) \right) $$
$$ = \sqrt{6} e^{-\frac{\pi}{4} i} $$

Donc $|a| = \sqrt{6}$ et $\arg (a) = -\frac{\pi}{4} \mod [2\pi]$.

4) a) Montrer que  
$$ \frac{b}{a} = \frac{3 + \sqrt{3}}{6} + \left( \frac{1 + \sqrt{3}}{2} \right) i $$  
puis vérifier que  
$$ b^{24} \text{ est un nombre réel.} $$

$$
\frac{b}{a} = \frac{2 + \sqrt{3} + i}{\sqrt{3(1 - i)}} = \frac{(2 + \sqrt{3} + i)(\sqrt{3(1 + i)})}{3}
$$
$$
= \frac{3 + \sqrt{3} + \sqrt{3}(2 + \sqrt{3} + i)}{3}
$$
$$
= \frac{(3 + \sqrt{3})(\frac{3 + \sqrt{3}}{6}) + \left( 3i \right)}{3}
$$

Vérifions que  
$$ \frac{b}{a} = \frac{3+\sqrt{3}}{6} + \left( \frac{1 + \sqrt{3}}{2} \right) i $$

$$ b = 3 + \sqrt{3} + 3i $$
$$ = 2 + \frac{3+\sqrt{3}}{6} + \frac{\pi}{3}i $$
```

<!-- Page 90 -->

```
b) En déduire une forme trigonométrique de $b$ puis vérifier que $b^{24}$ est un nombre réel.  
On a : $\frac{b}{a} = \frac{3+\sqrt{3}}{3} \cdot e^{\frac{\pi}{3}i}$  
Donc $b = a \cdot \left( \frac{3 + \sqrt{3}}{3} \cdot e^{\frac{\pi}{3}i} \right)$  
$$ b = \left( 3 + \sqrt{3} \right) \cdot e^{\frac{\pi}{3} i} = \left( \frac{3\sqrt{6} + 18}{3} \right) e^{\frac{\pi}{12} i} $$  
$$ b^{24} = \left( \sqrt{6 + \sqrt{2}} \cdot \left( \cos\left(\frac{\pi}{12}\right) + i \cdot \sin\left(\frac{\pi}{12}\right) \right) \right)^{24} $$  
$$ = \left( \left( \sqrt{6 + \sqrt{2}} \right)^{24} \cdot \left( \cos\left(2\pi\right) + i \cdot \sin(2\pi) \right) \right) $$  

2) Soit $R$ la rotation de centre $O$ et d’angle $\frac{\pi}{6}$ qui transforme chaque point $M$ du plan d'affixe $z$ en un point $M'$ d'affixe $z'$.  
On pose $R(B) = B', R(A) = A' et R(A') = A''$  
a) Vérifier que $z' = \frac{1}{2}(\sqrt{3} + i2)$ et que  
$$ \arg (A') = -\frac{\pi}{12}[2\pi] $$ où $A'$ est l'affixe du point $A'$  
$$ R(M) = M' $$  
$$ z' = e^{\frac{\pi}{6}i} \cdot (z - 0) $$  
$$ z' = e^{\frac{\pi}{12}i} \cdot z $$  
$$ z' = \left( \cos\left(\frac{\pi}{6}\right) + i \cdot \sin\left(\frac{\pi}{6}\right) \right) \cdot z $$  
$$ z' = \left( \frac{\sqrt{3}}{2} + \frac{1}{2}i \right) \cdot z $$  
$$ z' = \frac{1}{2}(\sqrt{3} + i) \cdot z $$  
$$ \arg (A') = A' = \frac{1}{2}(\sqrt{3} + i) \cdot a \cdot [2\pi] $$  
$$ \equiv \frac{\pi}{12} [2\pi] $$  
$$ A'' = \sqrt{6} \cdot \left( \cos\left(\frac{\pi}{12}\right) + i \cdot \sin\left(\frac{\pi}{12}\right) \right) $$  
On en déduit que les points $O$, $A''$ et $B$ sont alignés.  

On a :  
$$ b - 0 = A' - 0 = \left( \frac{\sqrt{2} + \sqrt{6}}{\sqrt{6} \cdot e^{\frac{\pi}{12}}} = \sqrt{2 + \sqrt{6}} $$  
$$ = \sqrt{12} + 6$$  
$$ = \frac{\sqrt{2} + \sqrt{6}}{6} \in \mathbb{R} $$  
Comme $\frac{b - 0}{A' - 0} \in \mathbb{R}$ alors les points $O$, $A''$ et $B$ sont alignés.  
```

<!-- Page 91 -->

```markdown
# Correction des examens nationaux nombres complexes

2 Bac sciences PC/SVT/ST  
Page : 06  

1) a) Vérifier que $|a| = 3$  
b) Montrer que le triangle OAB est isocèle.  
2) a) Vérifier que $\frac{a - c}{b - c} = i$  
b) Déduire la nature du triangle ABC.  
3) a) Déterminer l'affixe du point D image de B par la translation de vecteur CA.  
b) Montrer que ABCD est un carré.  
4) On pose $x_n = \left(\frac{a}{3}\right) ^n \frac{1}{1 - x_n}$ avec un entier naturel non nul.  
a) Vérifier que $x_n x_n = 1$  
b) Montrer que $y_n + Y_n = 1$ puis déduire la partie réelle de $y_n$.  

## Solution

1) On considère dans l'ensemble des nombres complexes $\mathbb{C}$ l'équation $(E) : x^2 - 4x + 9 = 0$  
Rappel: Soit dans $\mathbb{C}$ l'équation $(E) : ax^2 + bx + c = 0$, tels que $a ; b$ et $c$ sont des réels.  
Si $\Delta = b^2 - 4ac < 0$, alors l'équation $(E)$ a deux racines complexes conjuguées $z_1$ et $z_2$ tel que :  
$z_1 = \frac{-b + i \sqrt{-\Delta}}{2a} \quad z_2 = \bar{z_1}$  

1) Vérifier que le discriminant de l'équation $(E)$ est $\Delta = (2i \sqrt{5})^2$.  
$a = 16 - 4 \cdot 9 = -20 = (i2 \sqrt{5})^2$.  

2) Résoudre l'équation $(E)$  
On a $\Delta = -20 = (i2 \sqrt{5})^2$.  
Donc $(E)$ a deux racines complexes conjuguées $z_1$ et $z_2$ tel que :  
$z_1 = \frac{-b + i \sqrt{-\Delta}}{2a} \quad et \quad z_2 = \bar{z_1} = 2 - \sqrt{5}$.  

II) On considère les points A, B et C d'affixes respectives $a = 2 + i \sqrt{5}, b = 2 - i \sqrt{5}$ et $c = 2 - \sqrt{5}$.  
1) a) Vérifier que $|a| = 3$.  
Rappel: Module d'un nombre complexe $z | z |$  
Le module de $z$ est $z = a + b i$ d'image M est le nombre réel positif noté $|z|$ défini par $|z| = OM = \sqrt{a^2 + b^2}$.  
Donc $|a| = |2 + i \sqrt{5}| = \sqrt{4 + 5} = 3$.  
```

<!-- Page 92 -->

```markdown
# Correction des examens nationaux nombres complexes

## 2 Bac sciences PC/SVT/ST

### Page : 07

b) Montrer que le triangle $OAB$ est isocèle.  
On a $OA = |a| = 3$ et $OB = |b| = |a| = 3$  
Donc $OAB = OB$

Donc $OAB$ est isocèle en 0  

5) a) Vérifier que $a - c - b - c = i$

$$
a - c = \frac{2 + i\sqrt{5} - 2 - \sqrt{5}}{2 - \sqrt{5} - 2 + \sqrt{5}} = \frac{\sqrt{5}(1 + i)}{\sqrt{5}(1 - 1)} = \frac{(1 + i)^2}{12 + 12} = \frac{2i}{2} = i
$$

b) Déduire la nature du triangle ABC    
$$
a - c = i \Rightarrow |a - c| = |i| = 1 \text{ et } \arg(a - c) \equiv \arg(i)[2\pi]
$$  
$ \Rightarrow a - c = b - c = 1$ et $\arg(a - c) \equiv \frac{\pi}{2}[2\pi]$  

$ 
\Rightarrow \frac{AC}{BC} = 1 \text{ et } \frac{(CB, CA)} \equiv \frac{\pi}{2}[2\pi] 
$

$\Rightarrow$ le triangle $ABC$ est isocèle et rectangle en C  

6) a) Déterminer l'affixe du point $D$ image de $B$ par la translation de vecteur $CA$  
Rappel : Soit $M'(z')$ l'image de point $M(z)$ par translation $T_u$ de vecteur $\vec{u}$ d'affixe $z_u$

L'écriture complexe de la translation $T_u$  
$$
T_u(M) = M' \Leftrightarrow MM' = \vec{U}  
\Rightarrow z' = z + z_u  
D = t(B) \Leftrightarrow \overline{BD} \Leftrightarrow d - b = a - c  
\Leftrightarrow d = a - c + b  
\Leftrightarrow d = 2 + \sqrt{5}
$$

b) Montrer que $y_n + \bar{y_n} = 1$ puis déduire la partie réelle de $y_n$  
On a : $y_n + \bar{y_n} = \frac{1}{1 - x_n} + \frac{1}{1 - x_n}$  
$$
1
$$
On a $y_n + \bar{y_n} = 1$ et $y_n + \bar{y_n} = 2\text{Re}(y_n)$  

Donc $2\text{Re}(y_n) = 1$  
Donc $\text{Re}(y_n) = \frac{1}{2}  
```

<!-- Page 93 -->

```
# Offre préparation concours 2026 – Prof Fayssal
- Plus 20 séances en vidéos de préparation Médecine
- Plus 20 séances en vidéos pour ENSA-ENSAM-UM6P
- Nouvelle offre à partir de mois 6 avec des séances en directes et interactives
- Deux livres de préparation Médecine-ENSA-ENSAM contient des astuces, plus de 20 concours blancs corrigés et la correction des anciens concours
- Pour participer : 0681399067

---

الخاص ببرنامج التحضير للسنوات (20 حصة) لمدرسة ENSM - UM6P و ENSA:
- يتم تقديم حصص مباشرة عبر زووم (20 حصة) 
- كتب شاملة في الرياضيات مع تصحيحات مفصلة وتمارين نوعية.
- المواعيد السبعائية.
- عرض حصص يومية تبدأ من شهر 6 لتدريب دقيق.
- 0681399067 للتواصل.

---

# Résultat de sélection
hamdullah ana stagiaire القافل
رجال على خير على مجهوداتكم
.ولاد بنعيمة.
نتفضل بتفضيل الجامعة.
يوم الأحد.
Rh kont chrit ktab daik ostad
 وذلك الفرد اتبعكتب ليش
لا أحد يستطيع أن يكمل تسديده.
المعدل.

الكتاب الثالث:" Bahaa 10 3ariha."
انا الى les élèves داك l3am
je vous remercie beaucoup beaucoup وذاك ما يقوم بيه.
7 7ata votre livre de préparation rah 3awni bzaaf.
Merci.
```

<!-- Page 94 -->

```markdown
# Correction des examens nationaux nombres complexes

## 2 Bac sciences PC/SVT/ST
**Page : 08**

**Exercice 03 (Examen 2023-Session-Normale)**  
Dans le plan complexe rapporté à un repère orthonormé $(O, \vec{u}, \vec{v})$, on considère les points $A, A, B, C$ et $D$ d’affixes respectives $a = \sqrt{2} + i\sqrt{2}; \, b = 1 + \sqrt{2} + i; \, c = \bar{b} \text{ et } d = 2i$

1) Écrire le nombre $a$ sous forme trigonométrique

2) a) Vérifier que $b - d = c$

   b) Montrer que $(\sqrt{2} + 1)(b - a) = b - d$ et déduire que les points $A, B$ et $D$ sont alignés

   $$(\sqrt{2} + 1)(b - a) = (\sqrt{2} + 1)(1 + \sqrt{2} + i - \sqrt{2} - i\sqrt{2}) = (\sqrt{2} + 1)(1 + i - i\sqrt{2}) = \sqrt{2} + i + 1 - i\sqrt{2} = 1 + \sqrt{2} + i - i\sqrt{2}$$ 

   Et on a $b - d = c$

   Donc $(\sqrt{2} + 1)(b - a) = b - d$

3) a) Vérifier que $ac = 2b$

   $ac = (\sqrt{2} + i\sqrt{2})(1 + \sqrt{2} - i) = \sqrt{2} + 2i + \sqrt{2} = 2\sqrt{2} + 2i = 2b$

   b) En déduire que $2 \arg(b) \equiv \frac{\pi}{4}[2\pi]$

4) Soit $R$ la rotation de centre $O$ et d’angle $\frac{\pi}{4}$ qui transforme $M$ du plan d’affixe $z$ en un point $M'$ d’affixe $z'$

   a) Montrer que $z' = \frac{1}{2}az$  
   
   b) En déduire que $R(C) = B$ et que $R(A) = D$

   c) Montrer que $\frac{b-a}{c-a} = \frac{(\sqrt{2}-1)}{2} a$, puis déduire une mesure de l’angle $(AC, AB)$.

---

### Correction de l’exercice

Dans le plan complexe rapporté à un repère orthonormé $(O, \vec{u}, \vec{v})$, on considère les points $A, A, B, C$ et $D$ d’affixes respectives $a = \sqrt{2} + i\sqrt{2}; \, b = 1 + \sqrt{2} + i; \, c = \bar{b} \text{ et } d = 2i$

1) Écrire le nombre $a$ sous forme trigonométrique

   On a $a = \sqrt{2^2 + \sqrt{2}^2} = 2$  
   $a = \sqrt{2} \left( \frac{\sqrt{2}}{2} + \frac{\sqrt{2}}{2} i \right) = 2 \left( \cos \frac{\pi}{4} + i \sin \frac{\pi}{4} \right)$

2) a) Vérifier que $b - d = c$  
   
   $b - d = 2i - (1 + \sqrt{2} + i) = 1 + \sqrt{2} - c$

```


<!-- Page 95 -->

```markdown
# Correction des examens nationaux nombres complexes

## 2 Bac sciences PC/SVT/ST

### Page : 9

2) Soit $R$ la rotation de centre $O$ et d'angle $\frac{\pi}{4}$ et qui transforme $M$ du plan d'affixe $z$ en un point $M'$ d'affixe $z'$

Rappel: Soit $M'(z')$ l'image du point $M(z)$ par la rotation $R$ de centre $\Omega(\omega)$ et d'angle $\theta$. L'écriture complexe de la Rotation $R$ est 
$$
R(M) = M' \Leftrightarrow \left( \frac{\Omega M}{\Omega M'} = e^{i \theta [2 \pi]} \right) \Leftrightarrow z' - \omega = e^{i \theta}(z - \omega)
$$

a) Montrer que $z' = \frac{1}{2} az$

$$
R(M) = M' \quad z' - 0 = e^{i \theta}(z - 0) \Leftrightarrow z' = ze^{i \frac{\pi}{4}}
$$
Et on a $a = 2 \left( \cos \frac{\pi}{4} + i \sin \frac{\pi}{4} \right)$

Donc 
$$
e^{i \frac{\pi}{4}} = \frac{1}{2} z' = 1 az
$$

b) En déduire que $R(C) = B$ et que $R(A) = D$

On a $ac = 2b$ donc $b = \frac{1}{2} ac$ et $R(C) = B$

Montrons que $R(A) = D$ :

$$
2aa = \frac{1}{2}(\sqrt{2} + i\sqrt{2}) = 2i = 2i
$$
Donc $d = \frac{1}{2} a^2$ donc $R(A) = D$

2) Montrer que $\frac{b - a}{c - a} = \left( \frac{\sqrt{2} - 1}{2} \right) a$, puis déduire une mesure de l'angle $(AC, AB)$

On a $\quad (\sqrt{2} + 1)(b - a) = b - d$

Et on a $b = \frac{1}{2} ac$ et $d = \frac{1}{2} a^2$

Donc 
$$
(\sqrt{2} + 1)(b - a) = b - d = \frac{1}{2} ac - \frac{1}{2} a^2
$$

Donc 
$$
(\sqrt{2} + 1)(b - a) = \frac{1}{2}(ac - a^2)
$$

Donc 
$$
\frac{b - a}{c - a} = \left( \frac{\sqrt{2} - 1}{2} \right) \quad [2\pi]
$$
Ainsi, 
$$
\arg \left( \frac{\sqrt{2} - 1}{2} \right) a \quad [2\pi]
$$
$$
\equiv 0 + \arg(a)[2\pi] \sqrt{2 - 1} > 0
$$
Donc 
$$
(AC, AB) \equiv \frac{\pi}{4} [2\pi]
$$

### Exercice 04 (Examen 2023-Rattrapage)

1) On considère le nombre complexe 
$$
a = \frac{\sqrt{3}}{2} + \frac{3}{2} i
$$

c) Montrer que 
$$
a = \sqrt{3} \left( \cos \frac{\pi}{3} + i \sin \frac{\pi}{3} \right)
$$

d) En déduire que $a^{2022}$ est un nombre réel.

2) On considère $A$ et $B$ d'affixes respectives $a$ et $\bar{a}$

Déterminer une mesure de l'angle de rotation $R$ de centre $O$ qui transforme $B$ en $A$

3) On considère dans $C$ l'équation $(E)$ :
$$
z^2 - \sqrt{3}z - a = 0 \quad \text{avec } a \text{ est un nombre réel non nul}
$$
On suppose que l'équation $(E)$ admet deux racines conjuguées non réelles $z \text{ et } \bar{z}$

Soit les points $M(z), N(z) et P(\sqrt{3})$ du plan complexe

Sans résoudre l'équation $(E)$

a) Vérifier que $z > 0$ et que $a = zz$

b) Montrer que 
$$
|z| = |-\sqrt{3}|
$$

c) En déduire que les points $M$ et $N$ appartiennent à la médiatrice $(D)$ du segment $[OP]$

a) Déterminer la valeur de $a$ pour laquelle 
$$
|z - \sqrt{3}| = \sqrt{3} \quad \text{et déduire dans ce cas les points d'intersection de la droite $(D)$ et le cercle de centre $P$ et de rayon $\sqrt{3}$
$$
```

<!-- Page 96 -->

```markdown
# Correction des examens nationaux nombres complexes
## 2 Bac sciences PC/SVT/ST
**Page : 11**

2) On considère $A$ et $B$ d’affixes $a$ et $a$ ;  
Déterminer une mesure de l’angle de rotation $R$ de centre $O$ qui transforme $B$ en $A$  
Soit $θ$ l’angle de rotation $R$  
$$ R(B) = A = a - o = ( \overline{a} - o)e^{iθ} $$  
$$ \implies e^{iθ} = \frac{a}{\overline{a}} \implies e^{iθ} = \frac{\sqrt{3}e^{\frac{iπ}{3}}}{\sqrt{3}e^{\frac{iπ}{3}}} $$  
$$ \implies e^{iθ} = e^{-\frac{iπ}{3}} \implies e^{iθ} = e^{\frac{i3π}{3}} $$  
$$ e^{iθ} = e^{-\frac{i2π}{3}} $$  
Donc $\frac{2π}{3}$ est une mesure de l’angle de rotation $R$.

3) On considère dans l’équation $(E)$ : $x^2 - \sqrt{3}x + α = 0$ avec $α$ est un nombre réel non nul.  
On suppose que l’équation $(E)$ admet deux racines conjuguées non réelles $z$ et $\overline{z}$  
Soient les points $M(z)$ ; $N(\overline{z})$ et $P(\sqrt{3})$ du plan complexe.  
**Rappel**  
Soit dans $C$ l’équation $(E) : ax^2 + bx + c = 0$  
tels que $a ; b$ et $c$ sont des réels  
Si $\Delta = b^2 - 4ac < 0$, alors l’équation $(E)$ a deux racines complexes conjuguées  
$$ z_1 \text{ et } z_2 \text{ tel que } : z_1 = \frac{-b+\sqrt{-\Delta}}{2a} \text{ et } z_2 = \overline{z_1} $$  
$$ z_1 + z_2 = -\frac{b}{a} \text{ et } z_1 \cdot z_2 = \frac{c}{a} $$  
Sans résoudre l’équation $(E)$  
a) Vérifier que $α > \frac{3}{4}$ et que $α = \overline{z}$.  
$(E) : z^2 - \sqrt{3}z + α = 0$  
On pose $a = 1 ; b = -\sqrt{3} ; c = α$ ;  
Et $\Delta = b^2 - 4ac$  
Donc $0 < α < z \text{ et } z = \frac{c}{a}$  
Donc $(-3)^{-2} - 4 \times 1 < α < 0$ et $z \text{ et } z = \frac{α}{1}$  
Donc $9 - 4α < 0$ et $z \text{ et } z = \frac{c}{4}$  
Donc $α > \frac{4}{9}$ et $z \text{ et } z = \sqrt{α}$.

b) Montrer que $|z| = |-\sqrt{3}$.  
**Rappel**: $z = |z| - \overline{z} = |z| - |z|$  
On a $z + \overline{z} = -b/a$ donc $z + \sqrt{3}$  
Donc $z - \sqrt{3} = -\overline{z}$  
Donc $|z - \sqrt{3}| = |-\overline{z}|$  
c) En déduire que les points $M(z)$ et $N$ appartiennent à la médiatrice $(Δ)$ de $[OP]$  
**Rappel**: Ensemble des points $M(z)$ du plan  
l’ensemble des points $M$ d’affixe $z$ tel que : $|z - z_A| = |z - z_B|$ est la droite $(D)$  
la médiatrice du segment $[AB]$.  
On a $|z - \sqrt{3}| = |z|$  
Donc $|M - z_P| = |M - z_O|$ et $PM = OM$  
Donc $M$ appartient à la médiatrice $(Δ)$ du segment $[OP]$.  
On a $|z - \sqrt{3}| = |z|$  
Donc $|z - \sqrt{3}| = |z|$  
Donc $|N - z_P| = |N - z_O|$ et $PN = ON$  
Donc $N$ appartient à la médiatrice $(Δ)$ du segment $[OP]$  
d) Déterminer la valeur de $α$ pour laquelle $|z - \sqrt{3}| = \sqrt{3}$ et déduire dans ce cas les points d’intersection de la droite $(D)$ et le cercle de centre $P$ et de rayon $\sqrt{3}.$  
**Rappel**: $z = |z|^2$  
On a $|z - \sqrt{3}| = \sqrt{3} \text{ et } |z - \sqrt{3}| = |z|$  
Donc $|z| = \sqrt{3}$  
Et on a $z = α \text{ donc } |z| = α$  
Donc $α = \sqrt{3}^2 = 3$  
Donc $|z - \sqrt{3}| = \sqrt{3} = |M - z_P| = \sqrt{3} \Rightarrow PM = \sqrt{3}$  
Donc $M$ appartient au cercle de centre $P$ et de rayon $\sqrt{3}$.  
On a $|z - \sqrt{3}| = |z|$ donc $|z - \sqrt{3}| = |z|$  
Donc $|M - z_P| = |M - z_O|$.
```

<!-- Page 97 -->

```markdown
# Correction des examens nationaux nombres complexes
## 2 Bac sciences PC/SVT/ST
### Page : 12

$$ |z - \sqrt{3}| = \sqrt{3} \Leftrightarrow |z - \sqrt{3}| = \sqrt{3} $$
$$ \Leftrightarrow |z - \sqrt{3}| = \sqrt{3} $$
$$ |zN - P| = \sqrt{3} $$
$$ PN = \sqrt{3} $$

Donc $M$ appartient au cercle de centre $P$ et de rayon $\sqrt{3}$.

Et comme $M$ et $N$ appartiennent à la droite $(\Delta)$ alors les points d'intersection de la droite $(\Delta)$ et le cercle de centre $P$ et de rayon $\sqrt{3}$ sont les points $M$ et $N$.

## Exercice 05 (Examen 2022-Session-Normal)

On considère le point d'affixe $a = -1 - i\sqrt{3}$, le point $B$ d'affixe $b = -1 + i\sqrt{3}$ et la translation $t$ de vecteur $OA$.

1. Prouver que l'affixe du point $D$ image du point $B$ par la translation $t$ est $d = -2$.
2. Soit la rotation $R$ de centre $D$ et d'angle $\frac{2\pi}{3}$.
Montrer que l'affixe du point $C$ image du point $B$ par la rotation $R$ est $c = -4$.

Rappel : Soit $M' (z')$ l'image du point $M(z)$ par la rotation $R$ de centre $O(\omega)$ et d'angle $\theta$ l'écriture complexe de la Rotation $R$ est
$$ R(M) = M' \Leftrightarrow \Omega M = \Omega M' $$
$$ (\Omega M, \Omega M') = \theta [2\pi] $$
$$ \Leftrightarrow z' = z e^{i\omega} $$

$$ R(B) = C \Leftrightarrow c = c - d = e^{\frac{2\pi}{3}}(b - d) $$

$$ c = e^{\frac{2\pi}{3}}(b - d) + d $$

$$ \Leftrightarrow c = \frac{1}{2}(-1 + i\sqrt{3})(-1 + i\sqrt{3}) - 2 $$
$$ \Leftrightarrow c = \frac{1}{2}(-1 + i\sqrt{3})(1 + i\sqrt{3}) - 2 $$

$$ \Leftrightarrow c = \frac{1}{2}(-3 - 1) - 2 \Leftrightarrow c = -4 $$

3. a. Écrire le nombre $\frac{b - c}{a - c}$ sous forme trigonométrique.
   b. En déduire que $\left(\frac{b - c}{a - c}\right)^2 = \frac{-c}{-d}$.

Soient $(\Gamma)$ le cercle de centre $D$ et de rayon 2, $(\Gamma')$ le cercle de centre $O$ et de rayon 4 et $M$ un point d'affixe $z$ appartenant aux deux cercles $(\Gamma)$ et $(\Gamma')$.
   
a. Vérifier que $|z| = 2|$  
b. Prouver que $z + z' = -8$ (remarquer que $|z| = 4$)  
c. En déduire que les cercles $(\Gamma)$ et $(\Gamma')$ se coupent en un point unique qu'on déterminera.

## Solution de l'exercice

On considère le point d'affixe $a = -1 - i\sqrt{3}$, le point $B$ d'affixe $b = -1 + i\sqrt{3}$ et la translation $t$ de vecteur $OA$.

1. Prouver que l'affixe de $D$ l'image de $B$ par $t$ est $d = -2$.
```

<!-- Page 98 -->

```markdown
4. Soit $(\mathcal{G})$ le cercle de centre $D$ et de rayon $2$, $(\mathcal{G'})$ le cercle de centre $O$ et de rayon $4$ et $M$ un point d'affixe $z$ appartenant aux deux cercles $(\mathcal{G})$ et $(\mathcal{G'})$.

a. Vérifier que : $|z + 2| = 2$  
$M(z) \in (\mathcal{G}) \Rightarrow MD = 2$  
$$\Leftrightarrow |z - (-2)| = 2$$  
$$\Leftrightarrow |z + 2| = 2$$

b. Prouver que $z + \bar{z} = -8$ (remarquer que $|z| = 4$)  
$$|z + 2| = 2 \Leftrightarrow |z|^2 + 4 = 4$$  
$$\Rightarrow (z + 2)(\bar{z} + 2) = 4$$  
$$\Leftrightarrow zz + 2(z + \bar{z}) + 4 = 4$$  
Et on a $M \in (\mathcal{G'})$  
Donc $|z| = OM = 4 \Rightarrow |z|^2 = 16$  
Donc $zz = 16$.  
D'où $z + \bar{z} + 2(z + \bar{z}) = 4 \Leftrightarrow z + \bar{z} = -8$  

c. En déduire que les cercles $(\mathcal{G})$ et $(\mathcal{G'})$ se coupent en un point unique qu’on déterminera.  
$$z + \bar{z} = -8 \Rightarrow 2Re(z) = -8 \text{ donc } Re(z) = -4$$  
Et on a $|z| = 4$ donc la partie imaginaire de $z$ est $0 \text{ donc } z = -4$ c  
D'où les cercles $(\mathcal{G})$ et $(\mathcal{G'})$ se coupent en un point unique $C(-4)$  

Exercice 06 (Examen 2022-Rattrapage)  
Dans un plan complexe rapporté à un repère orthonormé direct $(O, \vec{i}, \vec{j})$, on considère les points $A, B et C$ d'affixes respectives  
$Z_A = 1 + 5i, \quad Z_B = 1 - 5i \quad et \quad Z_C = 5 - 3i$  
1) Déterminer le nombre complexe $Z_D$ affixe du point $D$ le milieu du segment $[AC]$  
$$Z_D = \frac{1 + 5i + 6 + 2i}{2} = 3 + 2i$$  
2) Soit $h$ l’homothétie de centre $A$ et de rapport $\frac{1}{2}$. Déterminer le nombre complexe $Z_E$ affixe du point $E$ l'image de $B$ par $h$  
$$h(B) = E \Leftrightarrow AE =  \frac{1}{2}AB$$  
$$Z_E = Z_A + \frac{1}{2}(Z_B - Z_A)$$  
$$Z_E = Z_A + \frac{1}{2}(Z_B - Z_A)$$  
$$Z_E = \frac{1}{2}(1 - 1 + 5i) + 1 + 5i$$  
$$Z_E = \frac{1}{2}(-10i) + 1 + 5i$$  
$$Z_E = -5i + 1 + 5i$$  
$$Z_E = 1$$  

3) On considère la rotation $R$ de centre $C$ et d'angle $(-\frac{\pi}{2})$. Déterminer l’image de $B$ par $R$  
$$R(B) = B' \Leftrightarrow b' - Z_C = e^{-i\frac{\pi}{2}}(b - Z_C)$$  
$$b' = i(1 - 5i) + 5 - 3i$$  
$$b' = -i(-4 - 2i) + 5 - 3i$$  
$$b' = 4i - 4 - 3i$$  
$$b' = 3 + i$$  
Donc $R(B) = D$
```

<!-- Page 99 -->

```markdown
# Correction des examens nationaux nombres complexes

## 2 Bac sciences PC/SVT/ST
**Page : 14**

4) Soit $F$ le point d'affixe $Z_F = -1 + i$

a) Vérifier que 

$$
Z_D - Z_A \times Z_F - Z_E \quad \frac{Z_F - Z_A}{Z_D - Z_E} = -1
$$

$$
Z_D - Z_A \times Z_F - Z_E
$$
$$
Z_F - Z_A \quad Z_D - Z_E
$$
$$
= -1 + i - 1 - 5i \quad 3 + i 
$$
$$
= -1 + i - 1 - 5i = -1 - 6i
$$
$$
= 2 - 4i \quad -2 + i = 1 - 2i \quad -2 + i 
$$
$$
= -2 - (1 + 2i) \cdot 2 + i
$$

$$
= -(1 + 2i)(2 - i) = (2 + i)(2 - i) 
$$
$$
= (1 - 4i - 4 + 4i) \quad = -4 + 2i + 1 + i 
$$

$$
1^2 + 2^2 = 2^2 + 2^2 = 1 
$$

$$
= (-3 - 4i) \cdot (-3 - 4i)
$$
$$
= -(-3) - (-4)^2
$$

b) En déduire que 

$$
(\overline{AF} \cdot AD) + (\overline{ED} \cdot EF) \equiv \pi[2\pi]
$$

On a : 
$$
Z_D - Z_A \times Z_F - Z_E \quad \frac{Z_F - Z_A}{Z_D - Z_E} = -1
$$

Donc : 
$$
\arg(Z_D - Z_A \times Z_F - Z_E) \equiv \arg(-1)[2\pi]
$$

$$
\text{Donc : } \arg(Z_D - Z_A) + \arg(Z_F - Z_E) = \pi[2\pi]
$$

c) Déterminer la forme trigonométrique du nombre $\frac{Z_E - Z_F}{Z_A - Z_F}$ en déduire la nature du triangle $AEF$

$$
Z_E - Z_F = 1 + 1 - i \quad 2 - 2i
$$

$$
Z_A - Z_F = 1 + 5i - i \quad 2 + 4i
$$

$$
= (2 - i)(2 - 4i) = 4 - 8i - 2i - 4 = -10i
$$

$$
\frac{1}{4 + 16} = \frac{1}{20}
$$

$$
= -\frac{1}{2}i = \frac{1}{2}(0 - i) 
$$

$$
= \frac{1}{2} (\cos(-\frac{\pi}{2}) + i \sin(- \frac{\pi}{2}))
$$

**Exercice 07 (Examen 2021-Session-Normal)**

1) Résoudre dans l'ensemble $\mathbb{C}$ l'équation :

$$
z^2 - \sqrt{3z} + 1 = 0 
$$

2) Soient les nombres complexes 
$$
a = e^{\frac{\pi i}{6}} \quad \text{ et } \quad b = \frac{3}{2} + i \frac{\sqrt{3}}{2}
$$

a) Écrire $a$ sous la forme algébrique

b) Vérifier que $\overline{ab} = \sqrt{3}$

Dans le plan complexe rapporté à un repère orthonormé direct $(0, \overline{u}, \overline{v})$, on considère les points $A, B$ et $C$ d'affixes respectives $a, b$ et $\overline{a}$ 

3) Montrer que le point $B$ est l'image du point $A$ par une homothétie de centre $O$ dont on déterminera le rapport.

4) Soit $z$ l'affixe d'un point $M$ du plan et $z'$ l'affixe du point $M'$ image de $M$ par la rotation $R$ de centre $A$ et d'angle $\frac{\pi}{7}$ 

a) Écrire $z'$ en fonction de $z$ et $a$ 

b) Soit $d$ l'affixe du point $D$ image de $C$ par la rotation $R$, montrer que $d = a + 1$
```

<!-- Page 100 -->

```markdown
# Correction des examens nationaux nombres complexes
## 2 Bac sciences PC/SVT/ST
Page : 15

Prof FAYSAL : 0681399067
Prof fayssal

---

1) Résoudre dans l’ensemble $\mathbb{C}$ l’équation :  
$$ z^2 - \sqrt{3} z + 1 = 0 $$  
$\Delta = (-\sqrt{3})^2 - 4 \times 1 \times 1 = -1 < 0$  
Alors l’équation (E) a deux racines complexes distinctes conjuguées $z_1$ et $z_2$ données par :  
$$ z_1 = \frac{\sqrt{3}+i}{2} \quad \text{et} \quad z_2 = \frac{\sqrt{3}-i}{2} $$  
Donc $S = \left( \frac{\sqrt{3}}{2} + \frac{1}{2}i , \; \frac{\sqrt{3}}{2} - \frac{1}{2}i \right)$

1) Soient les nombres complexes  
$a = e^{\frac{3\pi}{2}i} \quad \text{et} \quad b = \frac{3}{2} + \frac{\sqrt{3}}{2}i$  
a) Écrire $a$ sous la forme algébrique  
$$ a = e^{\frac{3\pi}{2}i} = \cos\left(\frac{\pi}{2}\right) + i \sin\left(\frac{\pi}{2}\right) = \frac{\sqrt{3}}{2} + \frac{1}{2}i $$

b) Vérifier que $ab = \sqrt{3}$  
$$ ab = \left( \frac{\sqrt{3}}{2} - \frac{1}{2}i \right) \left( \frac{3}{2} + \frac{\sqrt{3}}{2}i \right) $$  
$$ = \sqrt{3} \left( \sqrt{3} \; \frac{3}{2} \; - \; \frac{1}{2}\left( 1 \right) \right) = \sqrt{3} $$

Dans le plan complexe rapporté à un repère orthonormé direct $(O, \; \vec{u}, \; \vec{v})$, on considère les points $A, B$ et $C$ d’affixes respectives $a, b$ et $c$.

2) Montrer que le point $B$ est l’image du point $A$ par une homothétie du centre $O$ dont on déterminera le rapport.  
$$ a = e^{\frac{\pi i}{6}} \sqrt{3} \; a = \sqrt{3} = \sqrt{3}a \rightarrow OB = \sqrt{3}OB $$

Donc le point $B$ est l’image du point $A$ par une homothétie de centre $O$ et de rapport $\sqrt{3}$

4) Soient $z$ l’affixe d’un point $M$ du plan et $z'$ l’affixe du point $M'$ image de $M$ par la rotation $R$ de centre $A$ et d’angle $\frac{\pi}{2}$.  
a) Écrire $z'$ en fonction de $z$ et $a$  
$$ R(M) = M' \Leftrightarrow z' = e^{i\frac{\pi}{2}}(z-a) $$  
$$ \Leftrightarrow z' - a = e^{i\frac{\pi}{2}}(z - a) $$  
$$ \Leftrightarrow z' = i(z-a) + a $$

b) Soit $d$ l’affixe du point $D$ image de $C$ par la rotation $R$, montrer que $d = a + 1$  
$$ R(C) = D \Leftrightarrow d = i(c-a) + a $$  
$$ \Leftrightarrow d = i(\overline{a}-a) + a $$  
$$ \Leftrightarrow d = 1 + a - 1 $$

c) Soit $l$ le point d’affixe le nombre $1$, montrer que $ADIO$ est un losange.  
$$ d = 1 + a \Rightarrow d - a = 1 - 0 $$  
$$ \Rightarrow \overrightarrow{AD} = \overrightarrow{OI} $$  
Donc $ADIO$ est un parallélogramme et on a $AD = |d-a| = |1 - 0| = 1$  
Et $DI = |1 - d| = |-a| = |a| = 1$  
Donc $AD = DI$  
Donc $ADIO$ est un losange

d) Vérifier que $d - b = \frac{\sqrt{3}-1}{2} (1 - i)$ en déduire un argument du nombre $d - b$  
$$ d = b + a - 1 = \frac{\sqrt{3}}{2} + \frac{1}{2}i + 1 - \frac{3}{2} - \frac{\sqrt{3}}{2} i $$  
$$ =\frac{\sqrt{3}}{2} - \frac{1}{2} - \frac{\sqrt{3}}{2}i $$  
$$ =\sqrt{3} \left( \frac{\sqrt{3}-1}{2} \right) $$  
$$ = \sqrt{2} \left( \frac{\sqrt{3}-1}{2\sqrt{2}} \right) $$  
$$ = \sqrt{2} \left( \cos\left(-\frac{\pi}{4}\right) + i \sin\left(-\frac{\pi}{4}\right) \right) $$  
Donc $arg(d-b) = -\frac{\pi}{4} + 2k\pi$
```

<!-- Page 101 -->

```markdown
# Correction des examens nationaux nombres complexes
## 2 Bac sciences PC/SVT/ST
Page : 16

Prof FAYSSAL : 0681399067

### Exercice 08 (Examen 2021-Rattrapage)
1) Résoudre dans $\mathbb{C}$ l’équation $z^2 - 6z + 13 = 0$
2) On considère les points $A, B$ et $C$ d’affixes $a = 3 + 2i, b = 3 - 2i et c = -1 - 2i$

b) Écrire $\frac{c - b}{a - b}$ sous la forme algébrique

$$
\frac{c - b}{a - b} = \frac{-1 - 2i - (3-2i)}{3+2i - (3-2i)} = \frac{-4i}{4i^2} = i
$$

Donc $$ \frac{c - b}{a - b} = \cos \frac{\pi}{2} + i \sin \frac{\pi}{2} $$

b) Dédire la nature du triangle $ABC$

On a :

$$ \left| \frac{c - b}{a - b} \right| = 1 \text{ et } \arg \left( \frac{c - b}{a - b} \right) = \frac{\pi}{2} [2\pi] $$

Donc $BC = BA et (BA, BC) = \frac{\pi}{2} [2\pi]$

D'où le triangle $ABC$ est isocèle rectangle en $B$

3) Soit $R$ la rotation de centre $B$ et d’angle $\frac{\pi}{2}$, et soit $M$ un point d’affixe $z$ et $M'$ d’affixe $z'$ l’image de $M$ par la rotation $R$, et $D$ d’affixe $d = -3 - 4i$

a) Écrire $z'$ en fonction de $z$

On a :

$$ R(M) = M' \iff z' = e^{i \frac{\pi}{2}}(z - b) \iff z' = i(z - (3 + 2i)) = z' = -z + 5i - 6 $$

D'où $z' = -z + 5i + 1$

b) Vérifier que le point $C$ est l’image du point $A$ par la rotation $R$

On a :

$$ ia - 5 + 1 = i(3 + 2i) - 5 + 1 = -1 - 2i = c $$

Donc $C$ est l'image de $A$ par la rotation $R$

4)a) Montrer que les points $A, B$ et $C$ sont alignés

On a :

$$ a - \frac{d - a}{d - b} = -\frac{1 - 2i}{3 - 4i + (3 - 2i)} = 0 $$

Ainsi, les points $A, C$ et $D$ sont alignés

b) Déterminer le rapport d’homothétie de centre $C$ qui transforme $A$ en $D$

c) Déterminer l’affixe de mon point $E$ tel que le quadrilatère $BCDE$ soit un parallélogramme

5)a) Montrer que $ABED$ est un trapèze isocèle

Correction de l’exercice
1) Résoudre dans $\mathbb{C}$ l’équation $z^2 - 6z + 13 = 0$
$$
A = (-6)^2 - 4 \times 1 \times 13 = 36 - 52 = -16 < 0
$$
```

<!-- Page 102 -->

```markdown
## Correction des examens nationaux nombres complexes

**Prof Faysal : 0681399067**

### 2 Bac sciences PC/SVT/ST
Page : 17

#### b) Déterminer le rapport d’homothétie de centre C qui transforme A en D
Soit $k$ le rapport de l’homothétie $h$  
On a : $d - c = k(a - c) \Rightarrow$  
$$ 3 - 4i - (−2i) = \frac{3 + 2i - (−2i)}{d - c} $$  
$$ -2 - 2i = k - 4 + 4i $$  
Donc l'homothétie $h$ est de rapport $k = -\frac{1}{2}$

#### c) Déterminer l'affixe de mon point E tel que le quadrilatère BCDE soit un parallélogramme
On a $BCDE$ est un parallélogramme donc
$$ \frac{BC}{ED} \Leftrightarrow c - b = d - m $$  
$$ m = d - c + b $$  
$$ m = −3 - 4i + 1 + 2i + 3 - 2i $$  
$$ m = 1 - 4i $$  
D'où $m = 1 - 4i$ 

### 5)a) Montrer que $\frac{d - a}{m - b}$ est un nombre réel
On a : $-\frac{a - d}{m - d} = -\frac{-6 - 6i}{-2 - 2i} = 3$ donc $\frac{d - a}{m - b}$ est un nombre réel

#### b) Montrer que ABED est un trapèze isocèle
On a $-\frac{a - d}{m - d} = a - (m - b)$  
Donc $AD = 3BE$.

D'autre part, on a $b - a = -\frac{4i}{4} = -i$ donc $\left|b - a\right| = |m - d|$  
Donc $AB = ED$. Alors $(AD) // (BE)$ et $AB = ED$  
On déduit que ABED est un trapèze isocèle

### Exercice 09 (Examen 2020-Session-Normal)
1) Dans l'ensemble C, soit l'équation :  
$ (E) : z^2 - 2(\sqrt{2} + \sqrt{6})z + 16 = 0 $
a) Vérifier que le discriminant de l’équation $(E)$ est  
$$ \Delta = -4(\sqrt{6} - \sqrt{2})^2 $$  
$$ \Delta = (-2(\sqrt{6} - \sqrt{2}))^2 - 4 \cdot 16 $$  
$$ = 4(6 + 2\sqrt{6} + 2) - 64 $$  
$$ = 4(8 + 2\sqrt{12}) - 64 $$  
$$ = 32 + 8\sqrt{12} - 64 $$  
$$ = -32 + 8\sqrt{12} $$  

Et d’autre part :  
$$ \Delta = -4(\sqrt{6} - \sqrt{2})^2 $$  
$$ = -4(-6 - 2\sqrt{6} + 2) $$  
$$ = -4(-8 + 2\sqrt{12}) $$  
Donc $\Delta = -4(-(\sqrt{2} - \sqrt{6})^2)$  

b) En déduire les solutions de $(E)$  
On a $\Delta = -4(\sqrt{6} - \sqrt{2})^2 < 0$  
Donc l’équation $(E)$ admet deux solutions complexes conjuguées sont :  
$$ z_1 = 2(\sqrt{2} + \sqrt{6}) + 2(\sqrt{6} - \sqrt{2})i $$  
$$ = \sqrt{2} + \sqrt{6} + (\sqrt{6} - \sqrt{2})i $$  
Et $z_2 = \overline{z_1} = \sqrt{2} - \sqrt{6} - (\sqrt{6} - \sqrt{2})i$  
  
2) Soit $a = (\sqrt{6} + \sqrt{2})$,  
$b = 1 + i\sqrt{3} \text{ et } c = \sqrt{2} + \sqrt{2}$,  
vérifier que $ac = 4b$  
```

<!-- Page 103 -->

```markdown
# Correction des examens nationaux nombres complexes
## 2 Bac sciences PC/SVT/ST
**Page : 18**

a) Vérifier que $bc = a$, puis en déduire que $ac = 4b$

$$
bc = (1 + i\sqrt{3})(\sqrt{2} - i\sqrt{2}) 
= \sqrt{2} - i\sqrt{2} + i(\sqrt{6} + \sqrt{6}) 
= ( \sqrt{6} + \sqrt{2}) + i( \sqrt{6} - \sqrt{2}) 
= a
$$

On a $bc = a \, \text{donc} \, bc = ac$

Donc $ac = 4b \quad \text{car} \, |c|^2 = |z|^2 = \sqrt{2}^2 + \sqrt{2}^2 = 4$

b) écrire les nombres complexes $b$ et $c$ sous forme trigonométrique.

On a : $b = 1 + i\sqrt{3}$ donc $|c| = \sqrt{12 + \sqrt{3}^2} = 2$

$$
b = 1 + i\sqrt{3} = 2 \left( \cos\left(\frac{\pi}{3}\right) + i\sin\left(\frac{\pi}{3}\right) \right)
$$

On a $c = \sqrt{2} + i\sqrt{2} \, |c| = \sqrt{2^2 + 2^2}$

$$
c = \sqrt{2} + i\sqrt{2} = 2 \left( \cos\left(\frac{\pi}{4}\right) + i\sin\left(\frac{\pi}{4}\right) \right)
$$

c) Déduire que $a = 4 \left( \cos\left(\frac{\pi}{12}\right) + i\sin\left(\frac{\pi}{12}\right) \right)$

On a $ac = 4b$ donc $a = \frac{4}{c}$ 

$$
a = 4 \cdot \frac{e^{i\frac{\pi}{12}}}{2e^{i\frac{\pi}{4}}} = 4e^{i\frac{\pi}{3}}
$$

Donc $a = 4 \left( \cos\left(\frac{\pi}{12}\right) + i\sin\left(\frac{\pi}{12}\right) \right)$

3) On considère les points $B, C$ et $D$ d'affixes respectives $b, c$ et $d$ telle que $d = a^4$

Soit $z$ l'affixe d'un point $M$ du plan et $z'$ l'affixe de $M'$ image de $M$ par la rotation $R$ de centre $O$ et d'angle $\frac{\pi}{12}$

a) Vérifier que $z' = \frac{1}{4}az$

$$
R(M) = M' \iff z' - o = e^{i0}(z - o)
$$
$$
\iff z' = e^{i\frac{\pi}{12}}(z)
$$

Donc $a = 4 \left( \cos\left(\frac{\pi}{12}\right) + i\sin\left(\frac{\pi}{12}\right) \right)$

b) Déterminer l’image du point $C$ par la rotation $R$

$$
R(C) = C' \iff C' = \frac{1}{4}ac
$$

Donc $ac = 4b \quad \text{donc} \, b = \frac{1}{4}ac$

Donc $C' = b'$ d'où $R(C) = B$

c) Déterminer la nature du triangle $OBC$

d) Montrer que $a^4 = 128b$ et en déduire que les points $O, B$ et $D$ sont alignés

$$
a^4 = (4e^{i\frac{\pi}{12}})^4 = (4)^4 \times e^{i\frac{\pi}{3}4} = 256e^{i\frac{\pi}{3}} = 128 \times 2e^{i\frac{\pi}{3}}
$$

On a $a^4 = 128b$ donc $d = 128b$ car $a^4 = d$

Donc $d_c = 128 \in \mathbb{R}$ donc $\frac{d-o}{b-o} = 128 \in \mathbb{R}$

Donc les points $O, B$ et $D$ sont alignés.
```

<!-- Page 104 -->

```markdown
# Correction des examens nationaux nombres complexes
## 2 Bac sciences PC/SVT/ST
### Page : 19

## Exercice 10 (Examen 2020-Rattrapage )
1) Résoudre dans l’ensemble des nombres complexes $\mathbb{C}$ l’équation : $z^2 + \sqrt{2}z + 1 = 0$

II) 1) On le nombre complexe $a = \sqrt{\frac{2}{2}} + \sqrt{\frac{2}{2}}i$
a) Écrire à sous forme trigonométrique et déduire que $a^{2024} \in \mathbb{R}$
b) On pose $b = \cos \frac{\pi}{8} + i \sin \frac{\pi}{8}$ : prouver que $b^2 = a$

$$
b^2 = \left( \cos \frac{\pi}{8} + i \sin \frac{\pi}{8} \right)^2 = \cos \left( 2 \times \frac{\pi}{8} \right) + i \sin \left( 2 \times \frac{\pi}{8} \right)
$$
Donc : $b^2 = a$

2) On considère les points $A(a)$ ; $B(b)$ ; $C(c)$ tel que : $c = 1$ et la rotation $R$ de centre $O$ et d’angle $\frac{\pi}{8}$ et $M'(z')$ l’image de $M(z)$ par $R$

a) Vérifier que : $z' = bz$

b) Déterminer l’image de $C$ par la rotation $R$ et montrer que $A$ est l’image de $B$ par $R$

$$
R(M) = M' \Leftrightarrow z' = z - O \Leftrightarrow z' = bz
$$

b) Déterminer l’image de $C$ par la rotation $R$ et montrer que $A$ est l’image de $B$ par $R(C) = M' \Leftrightarrow z' = b x = b$

Donc : $R(C) = R(B) = M' \Leftrightarrow z' = b^2 \Leftrightarrow z' = a$

Donc : $R(B) = A$

3)a) Montrer que $|a - b| = |b - c|$ et déterminer la nature du triangle $ABC$

On a : $R(C) = B \text{ et } R(B) = A$

Donc $AB = BC$

Car la rotation conserve les distances.

D’où : $|a - b| = |b - c|$ la nature du triangle $ABC$

On a : $AB = BC$ donc le triangle $ABC$ est isocèle en $B$

b) Déterminer une mesure de $(BA;BC)$
1ère méthode :
$$(BA; BC) = \arg \frac{c - b}{a - b}[2\pi]$$

$$
= \arg \frac{1 - b}{b^2 - 1}[2\pi] = \arg(-1)[2\pi] = \frac{\pi - \frac{\pi}{8}}{2\pi} = \frac{7\pi}{8}[2\pi]
$$

```


<!-- Page 105 -->

```markdown
# Correction des examens nationaux nombres complexes

## 2 Bac sciences PC/SVT/ST 
Page : 20

### 2ème méthode :
On a $ R(C) = B \text{ et } R(B) = A \text{ donc } (BC; AB) \equiv \frac{\pi}{8} [2\pi] $
C'est une propriétés de rotation
Donc :
- $(AB; BC) \equiv \frac{\pi}{8} [2\pi]$
- $( -BA; BC) \equiv -\frac{\pi}{2} [2\pi]$
- $(BA; BC) \equiv \frac{\pi}{8} [2\pi]$
- $(BA; BC) \equiv \frac{7\pi}{8} [2\pi]$

4) Soit $ T $ la translation de vecteur $\underline{u} $ et $ D(d) $ l’image de point $ A $ par la translation $ T $ ;
- a) Vérifier que : $ d = b^2 + 1 $
On a $ D(d) $ l'image de point $ A $ par la translation $ T $ de vecteur $\underline{u}(1) $ ;
$$ \overline{AD} = \underline{u} $$
Donc $ d - a = 1 $
Donc $ d = a + 1 $
Donc $ d = b^2 + 1 $
b) Montrer que $ \frac{b^2 + 1}{b} = b + \overline{b} $ et déduire que $ O $ ; 
B et D sont alignés
$$ \frac{b^2 + 1}{b} = \frac{b^2 + \frac{1}{b} + 1}{b} = b + \frac{1}{1} = b + \overline{b} $$
Donc :
$$ d = b + \overline{b} $$
Donc :
$$ \frac{d - O}{b - O} = -2 \cos\left( \frac{\pi}{8} \right) \in \mathbb{R} $$
D'où les points $ O ; B $ et $ D $ sont alignés

### Exercice 11 (Examen 2019-Session-Normal)
1) Résoudre dans l'ensemble $\mathbb{C} $ l'équation $ z^2 - 2z + 4 = 0 $.
2) Dans le plan complexe rapporté à un repère orthonormé direct $(O; \underline{i}; \underline{v}) $, on considère les points $ A, B, C $ et d'affixes respectives : $ a = 1 - i\sqrt{3}, b = 2 + 2i, c = \sqrt{3} + i $ et $ d = -2 + 2\sqrt{3} $.
- a) Vérifier que : $ a - d = -\sqrt{3} (c - d) $.
- b) En déduire que les points $ A $ et $ C $ sont alignés.
3) On considère l’affixe d’un point $ M $ et $ z' $ l'affixe de $ M' $ image de $ M $ par la rotation $ R $ de centre $ O $ et d'angle $ -\frac{\pi}{3} $.
Vérifier que : $ z' = \frac{1}{2} az $.
4. Soient $ H $ l'image du point $ B $ par la rotation $ R $, et $ H $ son affixe et $ P $ le point d'affixe $ p $ tel que $ p = a - c $.
- a) Vérifier que : $ h = ip $.
- b) Montrer que le triangle $ OHP $ est rectangle et isocèle en $ O $.

### Solution de l'exercice
1) Résoudre dans l'ensemble $\mathbb{C} $ des nombres complexes l’équation $ z^2 - 2z + 4 = 0 $.
$$ \Delta = (-2)^2 - 4 \times 4 = -12 < 0 $$
Donc l’équation $(E)$ admet deux solutions complexes conjugués sont :
$$ z_1 = \frac{2 + i\sqrt{12}}{2} = \frac{2 + 2i\sqrt{3}}{2} = 1 + i\sqrt{3} $$
Et $ z_2 = z_1 = 1 - i\sqrt{3} $
Donc $ S = \{ 1 + i\sqrt{3}; 1 - i\sqrt{3} \} $
2) On considère les points $ A, B, C $ et d'affixes : $ a = 1 - i\sqrt{3} $, $ b = 2 + 2i, c = \sqrt{3} + i $ et $ d = -2 + 2\sqrt{3} $.
- a) Vérifier que : $ a - d = -i\sqrt{3} (-2 + 2\sqrt{3}) = 3 - 2\sqrt{3} - i\sqrt{3} $.
```

<!-- Page 106 -->

```markdown
# Correction des examens nationaux nombres complexes
## 2 Bac sciences PC/SVT/ST
Page : 21

D'autre part :
$$ -\sqrt{3(c - d)} = -\sqrt{3(i + 2 - 2\sqrt{3}i)} = -\sqrt{3(-\sqrt{3} + 2 + i)} = 3 - 2\sqrt{3} - i\sqrt{3} $$
Donc $a - d = -\sqrt{3(c - d)}$

b) En déduire que $A, C$ et $D$ sont alignés.
On a $a - d = -\sqrt{3(c - d)}$
Donc $\frac{a - d}{c - d} \in \mathbb{R}$

Donc les points $A, C$ et $D$ sont alignés.

3) On considère l'affixe d'un point $M$ et $z'$ l'affixe de $M'$ image de $M$ par la rotation $R$ de centre $O$ et d'angle $-\frac{\pi}{3}$.
Vérifier que : $z' = \frac{1}{2}az$.
$$ R(M) \iff z' = 0 \text{ et } e^{-\frac{\pi}{3}(z-0)} $$
$$ \iff z' = \left(\cos\left(-\frac{\pi}{3}\right) + \sin\left(-\frac{\pi}{6}\right)\right)z $$
$$ \iff z' = \left(\frac{1}{2} - i\frac{\sqrt{3}}{2}\right)z \iff z' = \frac{1}{2}(1 - i\sqrt{3})z $$

Soit $H'$ l'image du point $B$ par la rotation $R$, et $h$ son affixe et $P$ le point d'affixe $p$ tel que $p = a - c$,
a) Vérifier que : $h = ip$.
On a $R(B) = H \iff h = \frac{1}{2}ab$
$$ h = \frac{1}{2}(1 - i\sqrt{3})(2 + 2i) $$
$$ h = (1 - i\sqrt{3})(1 + i) $$
$$ \iff h = 1 + i - i\sqrt{3} + \sqrt{3} $$
$$ \iff h = (\sqrt{3} + 1) + i(1 - \sqrt{3}) $$

Et on a $ip = i(a - c) = i(1 - i\sqrt{3} - \sqrt{3} - i)$
$$ = i + \sqrt{3} - \sqrt{3}i $$
$$ = (\sqrt{3} + 1) + i(1 - \sqrt{3}) $$
D'où $h = ip$.

## Exercice 12 (Examen 2019-Rattrapage)
1)a) Résoudre dans $\mathbb{C}$ l'ensemble l'équation
$$ z^2 - 3z + 3 = 0 $$
b) On pose $h = \cos\left(\frac{\pi}{12}\right) + i\sin\left(\frac{\pi}{12}\right)$, montrer que $h^4 + 1 = 0$.

3) On considère le point $B$ d'affixe $b$ et $R$ la rotation de centre $O$ et d'angle $\frac{\pi}{2}$.

a) Soit $z$ l'affixe du point $C$ image du point $B$ par la rotation $R$. Montrer que $c = ib$.

b) En déduire la nature du triangle $OBC$.

---

## Solution de l'exercice
1) a) Résoudre dans $\mathbb{C}$ l'ensemble des nombres complexes l'équation $z^2 - 3z + 3 = 0$.
$$ \Delta = (-3)^2 - 4 \cdot 1 \cdot 3 = -3 = -(\sqrt{3})^2 $$
Donc l'équation admet dans $\mathbb{C}$ deux solutions :
$$ z_1 = 3 - \sqrt{3}i \quad \text{et} \quad z_2 = 3 + \sqrt{3}i $$
Par suite, $S = \left\{3 - \sqrt{3}i, 3 + \sqrt{3}i\right\}$
```

<!-- Page 107 -->

```markdown
# Correction des examens nationaux nombres complexes

Prof FAYSAL : 0681399067  
Prof fayssal

## Exercice 13 (Examen 2018-Session-Normal)

1) Résoudre dans l'ensemble $\mathbb{C}$ l'équation :  
   $$2z^2 + 2z + 5=0$$

2) Dans le plan complexe rapporté à un repère orthonormé direct $(0;\overrightarrow{i};\overrightarrow{v})$, on considère la rotation $R$ de centre $O$ et d'angle $\frac{2\pi}{3}$.  
   a) Écrire sous forme trigonométrique le complexe  
   $$d = -\frac{1}{2} + \frac{\sqrt{3}}{2}i$$  
   b) On considère le point $A$ d'affixe  
   $$a = -\frac{3}{2} + \frac{3}{2} i$$  
   et le point $B$ image du point $A$ par la rotation $R$. Soit $b$ l'affixe du point, Montrer que : $b = d \cdot a$.

3) Soit $C$ la translation de vecteur $\overrightarrow{OA}$ et $C$ l'image de $B$ par la translation et $c$ l'affixe du point $C$.  
   a) Vérifier que $c = b + a$ et en déduire que  
   $$c = a \left( \frac{1 + \sqrt{3} i}{2} \right)$$  
   (on pourra utiliser question 2.b)

   b) Déterminer $\arg \left( \frac{c}{a} \right)$ et déduire que le triangle $OAC$ est équilatéral.

## Solution de l'exercice

1) Résoudre dans l'ensemble $\mathbb{C}$ l'équation :  
   $$2z^2 + 2z + 5=0$$  
   Le discriminant $\Delta = b^2 - 4ac = 4 - 40 = -36$  
   On a $\Delta < 0$ donc l'équation admet deux solutions complexes :  
   $$z_1 = \frac{-2 - i\sqrt{36}}{2 \cdot 2} = \frac{-1 - 3i}{2}$$  
   $$z_2 = \frac{-2 + i\sqrt{36}}{2 \cdot 2} = \frac{-1 + 3i}{2}$$  
   D'où $$\left\{ \left( -\frac{1}{2} - \frac{3}{2} i \right), \left( -\frac{1}{2} + \frac{3}{2} i \right) \right\}$$

2) On considère le point $B$ d'affixe $b$ et $R$ la rotation de centre $O$ et d'angle $\frac{\pi}{2}$  
   a) Soit $c$ l'affixe du point $C$ image du point $B$ par la rotation $R$. Montrer que $c = ib$  
   $$R(B) = C \iff c - o = -i e^{i \frac{\pi}{2}}(b - o)$$  
   $$\iff c = (cos \frac{\pi}{2} + isin \frac{\pi}{2})b$$  
   $$c = ib$$  

   b) En déduire la nature du triangle $OBC$ en a :  
   $$c = ib \Rightarrow \frac{|c|}{|b|} = 1  \iff OC = OB \text{ par suite le triangle est isocèle en } O$$  
   et on a :  
   $$\arg \left( \frac{c - o}{b - o} \right) = arg(i) = \frac{\pi}{2} [2\pi]$$  
   $$\Rightarrow \left( \widehat{COB} \right) = \frac{\pi}{2} [2\pi]$$  
   Donc le triangle $OBC$ est rectangle en $O$.
```

<!-- Page 108 -->

```
# Correction des examens nationaux nombres complexes
### 2 Bac sciences PC/SVT/ST
#### Page : 23

2. Dans le plan complexe rapporté à un repère orthonormé direct $(0; \vec{u}, \vec{v})$, on considère la rotation $R$ de centre $O$ et d'angle $\frac{2\pi}{3}$.

a) Écrire sous forme trigonométrique le complexe 
$$
d = -\frac{1}{2} + i \frac{\sqrt{3}}{2}
$$

$$
= -\cos \frac{\pi}{3} + i \sin \frac{\pi}{3}
$$

$$
= \cos \left( \frac{\pi}{3} - \pi \right) + i \sin \left( \frac{\pi}{3} - \pi \right)
$$

$$
= \frac{2\pi}{3} + i \sin \frac{2\pi}{3}
$$

Donc : $d = \cos \frac{2\pi}{3} + i \sin \frac{2\pi}{3}$.

b) On considère le point $A$ d'affixe 
$$
a = -\frac{1}{2} + \frac{3}{2}i
$$ 
et le point $B$ image du point $A$ par la rotation $R$. Soit $b$ l'affixe du point $A$.

Montrer que : $b = d \cdot a$.

Soit $A \left( -\frac{1}{2} + \frac{\sqrt{3}}{2} i \right)$.
$$
B = R(A) \Longleftrightarrow b = a \cdot e^{i \frac{2\pi}{3}}
$$
$$
= b = a \times \left( \cos \frac{2\pi}{3} + i \sin \frac{2\pi}{3} \right)
$$
$$
= b = a \times d.
$$

3. Soit $C$ la translation de vecteur $\overrightarrow{OA}$ et $C$ l'image de $B$ par la translation $t$ et $c$ l'affixe du point $C$.

a) Vérifier que $c = b + a$ et en déduire que 
$$
c = a \left( \frac{1}{2} + \frac{\sqrt{3}}{2} i \right).
$$

#### C = t(B) 
$$
\overrightarrow{OC} = \overrightarrow{OB} + \overrightarrow{OA}
$$

$$
c = b + a
$$
$$
c = d \cdot a + a
$$
$$
c = a \cdot (d + 1).
$$

c) En déduire que $c = a \left( -\frac{1}{2} + i \frac{\sqrt{3}}{2} \cdot 1 \right)$.

### Exercice 14 (Examen 2018-Rattrapage)
Résoudre dans l'ensemble $\mathbb{C}$ l'équation 
$$
z^2 - 2\sqrt{2}z + 4 = 0.
$$

2) Dans le plan complexe rapporté à un repère orthonormé direct $(0; \vec{u}, \vec{v})$, on considère le point $A$ d'affixe 
$$
a = \sqrt{2}(1 - i)
$$
et la rotation $R$ de centre $O$ et d'angle $\frac{\pi}{3}$.

a) Écrire $a$ sous forme trigonométrique.

b) Vérifier que l'affixe du point $B$ image du point $A$ par la rotation $R$ est
$$
b = 2 \left( \cos \left( \frac{\pi}{12} \right) + i \sin \left( \frac{\pi}{12} \right) \right).
$$

3) Soit le point $C$ d'affixe $c = 1 + i$, montrer que $b^2 - c^2 = 2\sqrt{3}$.

b) Soit $t$ la translation de vecteur $\overrightarrow{OC}$ et $D$ l'image du point $B$ par la translation $t$. Montrer que 
$$
OD = |b + c|.
$$

c) En déduire que 
$$
OD \times BC = 2\sqrt{3}.
$$

### Solution de l’exercice
```

<!-- Page 109 -->

```markdown
# Correction des examens nationaux nombres complexes

## 2 Bac sciences PC/SVT/ST
**Page : 24**

1) Résoudre dans l'ensemble $\mathbb{C}$ l'équation 
$$ z^2 - 2\sqrt{2}z + 4 = 0 $$
$$ \Delta = b^2 - 4ac = (-2\sqrt{2})^2 - 4 \cdot 4 $$
$$ = 8 - 16 = -8 < 0 $$

D'où l'équation admet deux solutions complexes conjuguées :
$$ z_1 = 2\sqrt{2} - i\sqrt{8} $$
$$ z_2 = \overline{z_1} = \sqrt{2(1+i)} $$

D'où $S = \{ \sqrt{2(1-i)}; \sqrt{2(1+i)} \}$

2) Dans le plan complexe raporté à un repère orthonormé direct $(O; \vec{i}; \vec{v})$, on considère le point $A$ d'affixe $a = \sqrt{2(1-i)}$ et la rotation $R$ de centre $O$ et d'angle $\frac{\pi}{3}$.

a) Écrire $a$ sous forme trigonométrique.
On a : $a = a \cdot e^{i\theta}$
$$ |a| = |a| = \sqrt{2 \times 1^2} = \sqrt{2} \sqrt{2} = 2 $$
Donc 
$$ a = 2 \left( \cos \left( \frac{\pi}{4} \right) + i \sin \left( \frac{\pi}{4} \right) \right) $$

b) Vérifier que l'affixe du point $B$ image du point $A$ par la rotation $R est$
$$ b = 2 \left( \cos \left( \frac{\pi}{3} \right) + i \sin \left( \frac{\pi}{3} \right) \right) $$
$$ B = R(A) \Longrightarrow b - 0 = e^{i\frac{\pi}{3}}(a - 0) $$
$$ \Longleftrightarrow b = a e^{i\frac{\pi}{3}} $$
$$ \Longleftrightarrow b = 2 \left( \cos \left( \frac{\pi}{4} \right) + i \sin \left( \frac{\pi}{4} \right) \right) \times \left( \cos \left( \frac{\pi}{3} \right) + i \sin \left( \frac{\pi}{3} \right) \right) $$
$$ \Longleftrightarrow b = 2 \left( \cos \left( \frac{\pi}{3} + \frac{\pi}{4} \right) + i \sin \left( \frac{\pi}{3} + \frac{\pi}{4} \right) \right) $$

Donc : $b = 2 \left( \cos \left( \frac{\pi}{3} + \frac{\pi}{12} \right) + i \sin \left( \frac{\pi}{3} + \frac{\pi}{12} \right) \right)$

3) a) Soit le point $C$ d'affixe $c = 1 + i$, montrer que 
$$ b^2 - c^2 = 2\sqrt{3} $$

$$ b^2 - c^2 = 2^2 \times \left( \cos \left( \frac{\pi}{12} \right) \right)^2 - (1 + i)^2 $$
$$ = 4 \left( \cos \left( \frac{\pi}{6} + i \sin \left( \frac{\pi}{6} \right) \right) \right) - \left( (1 + i^2) \right) $$
$$ = 4 \times \sqrt{3} + 4 \times \frac{1}{2} - (12 + 2i + i^2) $$
$$ = 2\sqrt{3} $$

Donc : $b^2 - c^2 = 2\sqrt{3}$

**Exercice 15 (Examen 2017-Session-Normal)**

Soient les complexes $a$ et $b$ tels que 
$$ a = \sqrt{3} + i $$
$$ b = \sqrt{3} - 1 + \left( \sqrt{3} + 1 \right) i $$

1.a. Vérifier que $b = (1 + i)a$
1.b. En déduire que 
$$ |b| = 2\sqrt{2} $$ avec $arg(b) = \frac{5\pi}{2} \, [2\pi] $$

1.c. Déduire de ce qui précède que :
$$ c\left( \frac{5\pi}{2} \right) = \sqrt{-\sqrt{2}} $$
2. Le plan est muni d'un repère orthonormé. 

Soient les points $A$ et $B$ d'affixe $c = -A + i\sqrt{3}$. 
a. Vérifier que $c = ia$, en déduire que 
$$ OA = OC et que \left( \overline{A}, \overline{C} \right) = \frac{\pi}{2} \, [2\pi] $$

b. Montrer que le point $B$ est l’image du point $A$ par la translation de vecteur $\vec{OC}$. 

c. En déduire la nature du quadrilatère $OABC$.

**Solution de l'exercice**

Soient les complexes $a$ et $b$ tels que 
$$ a = \sqrt{3} + i \, \text{ et } \, b = \sqrt{3} -1 + \left( \sqrt{3} + 1 \right)i $$

1.a. Vérifier que $b = (1 + i)a$
$$ (1 + i)a = (1 + i)(\sqrt{3} + i\sqrt{3}) $$
$$ = \sqrt{3} + i\sqrt{3} - 1 + \sqrt{3}i = \sqrt{3} -1 + (1 + \sqrt{3})i $$

b. En déduire que 
$$ |b| = \frac{5\pi}{2} $$ avec 
$$ |(1 + i)a| = |1 + i| |a| = \sqrt{1^2 + 1^2} = \sqrt{2} |a| $$
$$ = \sqrt{2} \sqrt{3} = 2\sqrt{2} $$
```

<!-- Page 110 -->

```markdown
# Correction des examens nationaux nombres complexes

## 2 Bac sciences PC/SVT/ST
### Page : 25

On a 
$$ 1 + i = \sqrt{\frac{\sqrt{2}}{2} - \sqrt{2}{2} i} $$ 
$$ = \sqrt{2} \left( \cos \left( \frac{\pi}{4} \right) + i \sin \left( \frac{\pi}{4} \right) \right) = [\sqrt{2}; \frac{\pi}{4}] $$

$a = \sqrt{3} + i = 2 \left( \cos \left( \frac{\pi}{6} \right) + i \sin \left( \frac{\pi}{6} \right) \right) = [2; \frac{\pi}{6}]$

D'où 
$$ b = (1 + i) \alpha = \left[ \sqrt{2}; \frac{\pi}{4} \right] \times [2; \frac{\pi}{6}] $$
$$ = [2\sqrt{2}; \frac{\pi}{4} + \frac{\pi}{6}] = [2\sqrt{2}; \frac{5\pi}{12}] $$

Ainsi arg $(b) = \frac{5\pi}{12} [2\pi]$

### 1.c. Dédire de ce qui précède que 
$$ \cos \left( \frac{5\pi}{12} \right) = \frac{\sqrt{6} - \sqrt{4}}{4} $$

$$ b = \sqrt{3} - 1 + (\sqrt{3} + 1)i $$

$$ = 2\sqrt{2} \left( \cos \left( \frac{5\pi}{12} \right) + i \sin \left( \frac{5\pi}{12} \right) \right) $$

$$ = 2\sqrt{2} \cos \left( \frac{5\pi}{12} \right) + 2\sqrt{2} \sin \left( \frac{5\pi}{12} \right) i $$

D'où $ 2\sqrt{2} \cos \left( \frac{5\pi}{12} \right) = \sqrt{3} - 1 $ donc 

$$ \cos \left( \frac{5\pi}{12} \right) = \frac{\sqrt{3} - 1}{2\sqrt{2}} $$

## 2. Soient les points A et B d’affixe 
$$ c = -A + i\sqrt{3} $$

### a. Vérifier que $ c = ia $, en déduire que $ OA = OC $ et que $(OA, OC) = \frac{\pi}{2} [2\pi] $

On a 

$$ ia = i(\sqrt{3} + i) = iv - 1 + i\sqrt{3} = c $$

D'où $ c = ia $

On a 
$$ OC = |c| = |a| = ||i|| = 1 \times |a| = OA $$

On a 
$$ (OA, OC) = \arg \left( \frac{c}{A} \right) = \arg \left( \frac{ia}{a} \right) [2\pi] $$

$$ \Rightarrow \arg (i)[2\pi] = \frac{\pi}{2} [2\pi] $$

Ainsi $(OA, OC) = \frac{\pi}{2} [2\pi]$

### Exercice 16 (Examen 2017-Rattrapage)

1. Résoudre dans $\mathbb{C}$ l'équation $x^2 + 4x + 8 = 0$
2. On considère, les points A, B et C d’affixes respectives $a, b et c$ tel que :
   $$
   a = -2 + 2i, \; b = 4 - 4i et c = 4 + 8i.
   $$
   a) Soit $z'$ l’affixe d’un point M du plan et $z$ l’affixe du point M' l’image de M par la rotation R de centre A et d’angle $-\frac{\pi}{2}$.
   Montrer que : $z' = -iz - 4$.
   b) Vérifier que le point B' l’image du point C par la rotation R et en déduire la nature du triangle ABC.
   3) Soit $z$ l’affixe du point $\Omega$ milieu du segment $[BC]$.
   a) Montrer que : $|c - \omega| = 6$.
   b) Montrer que l’ensemble des points M d’affixes z tel que $|z - \omega| = 6$ est le cercle circonscrit au triangle ABC.

### Solution

1. Résoudre dans $\mathbb{C}$ l'équation $x^2 + 4x + 8 = 0$.
   On a : $A = 4^2 - 4 \times 8 = -16 < 0$.
   Donc l'équation admet deux solutions complexes :
   $$
   z_1 = \frac{-4 - i\sqrt{16}}{2} = -4 - 4i \quad \text{et} \quad z_2 = \frac{-4 + i\sqrt{16}}{2} = -2 - 2i et z_2.
   $$
   Alors $S = \{-2 - 2i; -2 + 2i\}$.
```

<!-- Page 111 -->

```markdown
# Correction des examens nationaux nombres complexes
## 2 Bac sciences PC/SVT/ST
**Page : 26**

2) On considère, les points A, B et C d'affixes respectives $a, b$ et $c$ tel que :
- $a = -2 - 2i$, $b = -4 - 4i$ et $c = 4 + 8i$.

a) Soit $z$ l'affixe d'un point M du plan et $z'$ l'affixe du point M' l'image de M par la rotation R de centre A et d'angle $-\frac{\pi}{2}$. Montrer que :  
$$ z' = -iz - 4. $$  
R(M) = M'  $\iff$ $z' = -i(z - a)$  
$\iff$ $z' = (-2 + 2i) - i(-2 - 2i)$  
$$ z' = -iz - 2 - 2 + 2i $$  
$$ z' = -iz - 4 $$  
D'où $z' = -iz - 4$.

b) Vérifier que le point B' l'image du point C par la rotation R et en déduire la nature du triangle ABC.  
On a $z' = -iz - 4$.  
Donc $-ic - 4 = -i(4 + 8i) - 4 = -4i + 8 - 4 = -4 - 4i = b$,  
Donc R(C) = B.  
On a : R(C) = B, donc  
$$ \frac{AC}{(AC,AB)} = AB = -\frac{\pi}{2} [2\pi] $$  
Alors le triangle ABC est un triangle rectangle isocèle au point A.

3) Soit $\omega$ l'affixe du point $\Omega$ milieu du segment [BC].  
a) Montrer que : $|c - \omega| = 6$.  
Donc $\omega = \frac{b + c}{2} = \frac{-4 - 4i + 8i}{2} = 4 + 2i$.  
Donc $|c - \omega| = |(4 + 8i) - (4 + 2i)| = |6i| = 6$.

b) Montrer que l'ensemble des points M d'affixes z tel que $|z - \omega| = 6$ est le cercle circonscrit au triangle ABC.  
On a $|c - \omega| = 6 \subset \Omega = 6$, donc l'ensemble des points M est le cercle de centre $\Omega$ et de rayon 6.  
$\omega$ est le milieu du segment [BC],  
Donc $\angle \Omega C = 6$  
D'autre part, $|z - \omega| = |z - (4 + 2i)| = 6$.  
Finalement, l'ensemble des points M est le cercle circonscrit au triangle ABC.

# Exercice 17 (Examen 2016-Session-Normal)

1) Résoudre dans l'ensemble $\mathbb{C}$ l'équation :  
$$ z^2 - 4z + 29 = 0. $$  
$\Delta = b^2 - 4ac$  
$$ = (-4)^2 - 4 \times 1 \times 29 $$  
$$ = 16 - 116 $$  
$$ = -100 < 0 $$  
Donc l'équation admet deux solutions complexes :  
$$ Z_1 = \frac{-b - i\sqrt{-\Delta}}{2a} = \frac{-(-4) - i\sqrt{100}}{2 \times 1} = \frac{4 - 10i}{2} = 2 - 5i $$  
Et $Z_2 = 2 + 5i$.

Donc $S = \{2 - 5i ; 2 + 5i\}$.  
2) On considère, les points $\Omega , A et B$ d'affixes respectives $w , a$ et $b$ tels que $w = 2 + 5i$  
$a = 5 + 2i $ et $b = 5 + 8i$.  
a) Soit $u$ le nombre complexe tel que :  
$$ u = b - w. $$  
Vérifier que $u = 3 + 3i$ puis montrer que  
$$ arg(u) = \frac{\pi}{4} [2\pi]. $$  
b) Déterminer un argument du nombre complexe $\overline{u}$.  
c) Vérifier que $a - w = u$ puis en déduire que :  
$$ \Omega = \overline{B} \text{ et } arg \left( \frac{b - w}{a - w} \right) = \frac{\pi}{2} [2\pi]. $$  
d) On considère la rotation R de centre $\Omega$ et d'angle $\frac{\pi}{2}$.  
Déterminer l’image du point A par la rotation R.
```

<!-- Page 112 -->

```markdown
# Correction des examens nationaux nombres complexes

## 2 Bac sciences
### Page 27

u = b - ω  
= 5 + 8i - (2 + 5i)  
= 5 + 8i - 2 - 5i  
= 3 + 3i  

On a $|u| = 3 + 3i = \sqrt{3^2 + 3^2} = \sqrt{9 + 9} = \sqrt{18} = 3\sqrt{2}.$  
Donc : $u = 3\sqrt{2} \, e^{i\frac{\pi}{4}}$

#### b) Déterminer un argument du nombre complexe $u$.
On a : $\arg \, u = -\arg \, u = \frac{\pi}{4}$

c) Vérifier que $a - w = u$ puis en déduire que : $\Omega A = \Omega B$ et $\arg \left(\frac{b - \omega}{a - w}\right) \equiv \frac{\pi}{2} [2\pi]$  
$a - \omega = 5 + 2i - (2 + 5i)$  
= $5 + 2i - 2 - 5i$  
= $5 - 2 + 2i - 5i$  
= $3 - 3i$  
= $u$  

Déduisons que : $\Omega A = \Omega B$ et  
$\arg \left(\frac{b - \omega}{a - \omega}\right) \equiv \frac{\pi}{2} [2\pi]$  
On a : $u = b - \omega$ alors, $|u| = |b - \omega| = B\Omega.$  
On a : $\tilde{u} = a - \omega$ alors, $|\tilde{u}| = |a - \omega| = A\Omega.$  
Puisque $|u| = |\tilde{u}|$ alors, $\Omega A = B\Omega.$  
Donc, $\Omega A = \Omega B.$

$\arg \left(\frac{b - \omega}{a - \omega}\right) = \arg (b - \omega) - \arg (a - \omega)[2\pi]$  
= $\frac{\pi}{4} - (-\frac{\pi}{4}) [2\pi]$  
= $\frac{\pi}{4} + \frac{\pi}{4} [2\pi]$  
= $\frac{2\pi}{2} [2\pi]$  
= $2\pi [2\pi]$  
= $4 [2\pi]$  
= $\frac{\pi}{2} [2\pi]$

d) On considère la rotation $R$ de centre $\Omega$ et d’angle $\frac{\pi}{2}$.  
Déterminer l’image du point $A$ par la rotation $R$.  
On a :  
$\frac{b - \omega}{a - \omega} = 1 \, \arg \left(\frac{b - \omega}{a - \omega}\right) = \frac{\pi}{2} [2\pi]$  
Donc :  
$b - \omega = \frac{|b - \omega|}{|a - \omega|} \left( \cos \frac{\pi}{2} + i \sin \frac{\pi}{2} \right)$  
= $1 \times i$  
= $i$

Donc, $b - \omega = i (a - \omega) = e^{i\frac{\pi}{2}}(a - \omega)$  
Donc, l'image du point $A$ par la rotation $R$ est le point $B$.

### Exercice 18 (Examen 2016-Rattrapage)
1) Résoudre $\mathbb{C}$ l’équation : $z^2 - 8z + 41 = 0.$  
2) On considère, dans le plan complexe rapporté à un repère orthonormé direct $(O, \overrightarrow{u}, \overrightarrow{v})$, les points $A, B \in C$ et $z$ d’affixes respectives $a, b$ et $c$ tels que :  
$a = 4 + 5i, \; b = 3 + 4i; \; c = 6 + 7i$ et $w = 4 + 7i$. 

a) Calculer $\frac{c - b}{a - b}$ et en déduire que les points $A$ et $B$ et $C$ sont alignés.  
b) Soit $z$ l’affixe d’un point $M$ du plan et $z’$ l’affixe du point $M’$ image de $M$ par la rotation $R$ de centre $\Omega$ et d’angle $-\frac{\pi}{2}$.  
c) Montrer que : $z’ = -iz - 3 + 11i. $  
d) Déterminer l’image du point $C$ par la rotation $R$ puis donner une forme trigonométrique du nombre $\frac{a - w}{c - w}$.  
```

<!-- Page 113 -->

```markdown
# Correction des examens nationaux nombres complexes

## 2 Bac sciences PC/SVT/ST 
**Page : 28**

## Exercice 19 (Examen 2015-Session-Normal)

1) Résoudre dans $\mathbb{C}$ l'équation :  
$$ z^2 + 10z + 26 = 0 $$

2) Soit, dans le plan complexe rapporté à un repère orthonormé direct $(O, \mathbf{e_1}, \mathbf{e_2})$, les points $A, B, C$ et $\omega$ d'affixes respectives $a, b, c$ et $\omega$ tels que :  
$$ a = -2 + 2i, \quad b = -5 + i, \quad c = -5 - i \text{ et } \omega = -3. $$

a) Montrer que :  
$$ \frac{b - \omega}{a - \omega} = i. $$

b) En déduire la nature du triangle $\Omega AB$.

2) Soit $D$ image du point $C$ par la translation $T$ de vecteur $\mathbf{u}$ d'affixe $6 + 4i$  
c) Montrer que l'affixe $d$ du point $D$ est  
$$ 1 + 3i. $$

d) Montrer que :  
$$ \frac{b - d}{a - d} = 2$$  
et en déduire que $A$ est le milieu de $[BD]$.

## Solution

1) Résoudre dans $\mathbb{C}$ l’équation :  
$$ z^2 + 10z + 26 = 0 $$

On a :  
$$ A = b^2 - 4ac = 10^2 - 4 \times 1 \times 26 = 100 - 104 = -4 $$

Comme $ \Delta \leq 0 $ alors l'équation admet deux solutions distinctes dans $\mathbb{C}$ :  
$$ z_1 = \frac{-b - i\sqrt{-\Delta}}{2a} = \frac{-10 - i\sqrt{-(4)}}{2 \times 1} = \frac{-10 - i\sqrt{4}}{2} = -5 - i $$  

Et $z_2 = Z_1 = -5 + i$.  
Donc : $s = \{-5 - i, -5 + i\}$.

2) Soit, les points $A, B, C$ et $\omega$ d'affixes respectives $a, b, c$ et $\omega$ tels que  
$$ a = -2 + 2i, \quad b = -5 + i, \quad c = -5 - i \text{ et } \omega = -3. $$

a) Montrer que :  
$$ \frac{b - \omega}{a - \omega} = i. $$
$$ b - \omega = -5 + i + 3 = -2 + i $$  
$$ a - \omega = -2 + 2i + 3 = 1 + 2i $$  
$$ \Rightarrow \frac{-2 + i}{1 + 2i} = i $$

b) Montrer que :  
$$ \frac{b - d}{a - d} = 2.$$  
$$ b - d = -5 + i - (1 + 3i) = -6 - 2i $$  
$$ a - d = -2 + 2i - (1 + 3i) = -3 - i $$  
$$ \Rightarrow \frac{-6 - 2i}{-3 - i} = 2 $$
```

<!-- Page 114 -->

```markdown
# Correction des examens nationaux nombres complexes
2 Bac sciences PC/SVT/ST  
Page : 29

## b) Déterminer l’ensemble des points $M$ d’affixe $z$ tel que $|z - 2i| = 2$

**Solution**

Soit $a = 2 + \sqrt{2} + i\sqrt{2}$.  
1) Montrer que le module du nombre complexe $a$ est $2\sqrt{2} + \sqrt{2}$

$$ |a| = |2 + \sqrt{2} + i\sqrt{2}| $$
$$ = \sqrt{(2 + \sqrt{2})^2 + \sqrt{2}^2} $$
$$ = \sqrt{(2 + 4\sqrt{2} + 2) + 2} $$
$$ = \sqrt{8 + 4\sqrt{2}} $$
$$ = \frac{2\sqrt{2} + 2}{4^{2}} $$

2) Vérifier que $a = 2 \left( 1 + \cos \frac{\pi}{4} \right) + 2i \sin \frac{\pi}{4}$

$$ 2 \left( 1 + \cos \frac{\pi}{4} \right) + 2i \sin \frac{\pi}{4} = 2 \left( 1 + \frac{\sqrt{2}}{2} \right) + 2i \frac{\sqrt{2}}{2} $$
$$ = 2 + \sqrt{2} + i\sqrt{2} = a $$

3a) En linéarisant $\cos^2(\theta)$, où $\theta$ est un réel, montrer que $1 + \cos(2\theta) = 2\cos^2(\theta)$

D'après la Formule d'Euler, on a :

$$ \cos^2 \theta = \left( \frac{e^{i\theta} + e^{-i\theta}}{2} \right)^2 $$
$$ = \frac{1}{4} \left( (e^{i\theta})^2 + 2e^{i\theta} e^{-i\theta} + (e^{-i\theta})^2 \right) $$
$$ = \frac{1}{4} \left( e^{2i\theta} + 2 + e^{-2i\theta} \right) $$
$$ = \frac{1}{4} \left( 2 + e^{2i\theta} + e^{-2i\theta} \right) $$
$$ = \frac{1}{4} \left( 2 + 2\cos(2\theta) \right) $$

Donc : 

$$ \cos^2 \theta = \frac{1}{2} (1 + \cos(2\theta)) $$

Alors : $1 + \cos(2\theta) = 2\cos^2(\theta)$.
```

<!-- Page 115 -->

```markdown
b) Montrer que $ a = 4 \cos^{2} \left( \frac{\pi}{8} \right) + 4i \sin \left( \frac{\pi}{8} \right) $

On rappelle que : $ \sin \left( 20^\circ \right) = 2 \cos 8^\circ \sin \theta $

$a = 2 \left( 1 + \cos \left( \frac{\pi}{4} \right) \right) + 2i \sin \left( \frac{\pi}{8} \right)$  
$$ = 2 \left( 1 + \cos \left( 2 \frac{\pi}{8} \right) \right) + 2i \sin \left( \frac{\pi}{8} \right) $$  
$$ = 2 \cos^{2} \left( \frac{\pi}{8} \right) + 2i \sin \left( \frac{\pi}{8} \right) \cos \left( \frac{\pi}{8} \right) $$  
$$ = 4 \cos^{2} \left( \frac{\pi}{8} \right) + 4i \sin \left( \frac{\pi}{8} \right) $$

c) Montrer que $ a = 4 \cos \left( \frac{\pi}{8} \right) \left( \cos \left( \frac{\pi}{8} \right) + i \sin \left( \frac{\pi}{8} \right) \right) $ est l’écriture trigonométrique de $ a $, puis démontrer que $ a^{4} = \left( 2\sqrt{2} + \sqrt{2} \right)^{4} i $

$$ a = 4 \cos^{2} \left( \frac{\pi}{8} \right) + 4i \sin \left( \frac{\pi}{8} \right) $$  
$$ = 4 \cos \left( \frac{\pi}{8} \right) \left[ \cos \left( \frac{\pi}{8} \right) + i \sin \left( \frac{\pi}{8} \right) \right] $$  

D'autre part: $ 0 < \frac{\pi}{8} < \frac{\pi}{2} $ d'où :  
$$ |a| = 4 \cos \left( \frac{\pi}{8} \right) $$  
Donc : $ 4 \cos \left( \frac{\pi}{8} \right) \left( \cos \left( \frac{\pi}{8} \right) + i \sin \left( \frac{\pi}{8} \right) \right) $ est la forme trigonométrique du nombre 6 montrer que :  
$$ a^{4} = \left( 2 \sqrt{2} + \sqrt{2} \right)^{4} i $$  

On a : $ a = 4 \cos \left( \frac{\pi}{8} \right) \left( \cos \left( \frac{\pi}{8} \right) + i \sin \left( \frac{\pi}{8} \right) \right) $  
D'après les questions précédentes on a : $ |a| = 2\sqrt{2} + \sqrt{2} \, |a| = 4 \cos \left( \frac{\pi}{2} \right) $$  
Donc : $ 2\sqrt{2} + \sqrt{2} > 0 $

Démontrer que $ a^{4} = \left( 2\sqrt{2} + \sqrt{2} \right)^{4} i $

$$ a^{4} = \left( 4 \cos \left( \frac{\pi}{8} \right) \left( \cos \left( \frac{\pi}{8} \right) + i \sin \left( \frac{\pi}{8} \right) \right) \right)^{4} $$  
$$ = \left( 4 \cos \left( \frac{\pi}{8} \right) \right)^{4} \left[ \cos \left( 4 \cdot \frac{\pi}{8} \right) + i \sin \left( 4 \cdot \frac{\pi}{8} \right) \right] $$  
$$ = \left( 4 \cos \left( \frac{\pi}{8} \right) \right)^{4} \left[ \cos \left( \frac{\pi}{2} \right) + i \sin \left( \frac{\pi}{2} \right) \right] $$  
$$ = \left( 4 \cos \left( \frac{\pi}{8} \right) \right)^{4} \cdot i $$  
$$ = 4 \cos \left( \frac{\pi}{8} \right)^{4} i $$  

4) Dans le plan muni d’un repère orthonormé, on considère les points A et O d’affixes respectives $ a et o $ telles que : $ a = 2 + \sqrt{2} + i \sqrt{2} $ et $ o = \sqrt{2} et R $ la rotation de centre A et d’angle $ \frac{\pi}{2} $.

a) Vérifier que l’affixe $ b $ de l’image du point A par la rotation R est $ 2i $.
On pose que le point $ B $ d’affixe b est l'image du point A par la rotation R.

On prouve que $ b = 2i $  
On a $ R(A) = B $  
Donc :  
$$ b - \sqrt{2} = (a - \sqrt{2}) e^{i \frac{\pi}{2}} $$  
Donc :  
$$ b - \sqrt{2} = (a - \sqrt{2}) \left( \cos \left( \frac{\pi}{2} \right) + i \sin \left( \frac{\pi}{2} \right) \right) $$  
$$ b = (a - \sqrt{2}) + i\sqrt{2} $$  
$$ b = (a - \sqrt{2}) + i\sqrt{2} $$  
$$ b = 2i + i\sqrt{2} $$
$$ b = 2i + i\sqrt{2} - \sqrt{2} $$  
$$ b = 2i + i\sqrt{2} - \sqrt{2} $$  
$$ \iff b = 2i $$  

D'où : $ b = 2i $

b) Déterminer l’ensemble des points M d’affixe z tel que $ |z - 2i| = 2 $.  
On a : $ |z - 2i| = 2 \iff |z - b| = 2 $  
Donc : $ BM = 2 $  

D'où : l'ensemble des points M d'affixe $ z $ qui vérifie $ |z - 2i| = 2 $ est le cercle de centre le point B et de rayon 2.
```

<!-- Page 116 -->

```markdown
# Offre préparation concours 2026 – Prof Fayssal

- Plus 20 séances en vidéos de préparation Médecine
- Plus 20 séances en vidéos pour ENSA-ENSAM-UM6P
- Nouvelle offre à partir de mois 6 avec des séances en directes et interactives
- Deux livres de préparation Médecine-ENSAM-ENSAM contiennent des astuces, plus de 20 concours blancs corrigés et la correction des anciens concours

Pour participer : 0681399067

---

## الخاص بالتحضير لمسابقة الطب
- حصص خاصة بالتحضير لمسابقة للعودة إلى الطب (20 حصص) + دورات عبر زوم (20 حصص) ENSM – UM6P – ENSA.
  
- جميع المضامين بالكامل.
  
- كتيبات شاملة في الرياضيات 📚 مع تصحيحات مفصّلة وتمارين نوعية + تصحيح المبادرات السابقة.
  
- عرض حصص مباشرة يومياً ابتدأ من شهر 6 لمدة 60 دقيقة.

0718399067 📞

---
```

<!-- Page 117 -->

```markdown
# Prof Faysal

## Résumés de cours 
### Probabilités 
#### Deuxième bac sciences PC /SVT/SE

Prof fayssal  
0681399067  
Prof Faysal
```

<!-- Page 118 -->

```markdown
# Préparation à l'examen national de baccalauréat
## Fiche 09 : Calcul de probabilités
**Prof : FAYSSAL**  
**Page : 11**

### A) Dénombrement
1) Cardinal d’un ensemble fini  
Le nombre d’éléments d’un ensemble fini est appelé le cardinal de $E$, noté par $\text{Card}(E)$.
  
2) Principe fondamental de dénombrement  
Soit $E$ une expérience dont les résultats nécessitent $k$ choix,  
Si le 1$^{\text{er}}$ choix se fait de $n_1$ façons différentes,  
Le 2$^{\text{ème}}$ choix se fait de $n_2$ façons différentes,  
Le $k^{\text{ième}}$ choix se fait de $n_k$ façons différentes,  
Alors le nombre de résultats possibles est donné par le produit :  
$$ n_1 \times n_2 \times \ldots \times n_k $$

3) Arrangements.  
a) Arrangements sans répétition.  
Arrangements sans répétition de $p$ parmi $n$ dans $A_n^p = n (n-1) (n-2) \ldots (n-p+1)$.  
On a : $A_n^p = \frac{n!}{(n-p)!}$ ; $A_n^1 = n$.

Cas particulier : Permutations.  
$$ n! = n (n-1) \times 2 \times 1 ; \quad 0! = 1 $$

b) Arrangements avec répétition.  
Le nombre d’arrangements avec répétition de $p$ éléments pris parmi $n$ est noté $n^p$.

4) Combinaisons.  
$$ C_n^p = \frac{A_n^p}{p!} = \frac{n!}{p! \times (n-p)!} $$

Remarques :  
$$ C_n^1 = C_n^{n-1} = n ; \quad C_n^1 = C_n^{1} = 1 \quad \text{et} \quad C_n^p = C_n^{n-p} $$

5) Type de tirage et importance d’ordre.  
- **Type de tirage** | **Nombre de tirages** | **Importance de l’ordre**  
Avec remise | $n^p$ | Important  
Sans remise | $A_n^p$ | Important  
Simultané | $C_n^p$ | Sans importance  

Nombre de possibilité d’arranger $p$ éléments non distincts (Coefficient d’ordre)  
Si on a $p_1$ éléments de type $A$ et $p_2$ éléments de type $B$ et $p_3$ éléments de type $C$ tel que  
$$ p_1 + p_2 + p_3 = p $$  
Alors le nombre de possibilités d’arranger les $p$ éléments dans $p$ places est  
$$ \frac{p!}{p_1! \times p_2! \times p_3!} $$

---

### B) Probabilité d’un évènement.
1) Propriétés :  
$$ P(\Omega) = 1 \quad \text{et} \quad P(\emptyset) = 0 $$  
$$ 0 \leq P(A) \leq 1. $$  
$$ P(\bar{A}) = 1 - P(A) $$  
$$ P(A \cup B) = P(A) + P(B) - P(A \cap B) $$  
Hypothèse d’équilibre :  
$$ P(A) = \frac{\text{Card}(A)}{\text{Card}(\Omega)} $$

2) Probabilité conditionnelle.  
Propriété :  
La probabilité de l’événement $B$ sachant que $A$ est réalisé est le nombre noté $P_A(B)$ ou $P(B/A)$ défini par :  
$$ P_A(B) = \frac{P(A \cap B)}{P(A)} $$

Arbre des possibilités :  
$$ P(A \cap B) = P(A) \times P(B/A) $$  
$$ P(B) = P(B \cap A) + P(B \cap \bar{A}) $$  
Donc $$ P(B) = P(A) \times P_A(B) + P(\bar{A}) \times P_{\bar{A}}(B). $$  
Cette relation est appelée loi des probabilités totales.

3) Indépendance de deux événements  
Définition  
* On dit que les événements $A$ et $B$ sont indépendants si : $P(A \cap B) = P(A) \times P(B)$.  
Propriété  
* Les événements $A$ et $B$ sont indépendants si et seulement $P(A) = P(B) ; \quad \text{avec } P \neq 0 $.
```

<!-- Page 119 -->

```markdown
# Préparation à l’examen national de baccalauréat
## Fiche 09 : Calcul de probabilités
**Prof : FAYSSAL**  
**Page : 12**

4) Épreuves répétées.  
Soit A un événement de probabilité $p$.  
La probabilité de réaliser exactement $k$ fois l’événement A est : $C_n^k p^k (1 - p)^{n - k}$ où $n$ est le nombre de répétition de l’épreuve dans les mêmes conditions.

5) Variable aléatoire - Loi de probabilité d’une variable aléatoire.  
a) Définitions :  
✓ Toute fonction définie sur l’univers $\Omega$ à valeur dans $\mathbb{R}$ est appelée variable aléatoire, notée $X$ ou $Y$ ou...  
Les valeurs prises par la variable aléatoire $X$ notées $\Omega(X)$.  
✓ Soit $X$ une variable aléatoire définie sur un univers $\Omega$ associé à une expérience aléatoire telle que : $X(\Omega) = \{x_1, x_2, \ldots, x_n\}$.  
Déterminer la loi de probabilité de la variable aléatoire $X$.  
C’est calculer la probabilité de chacun des événements $\{X = x_i\}$ où $i \in \{1, 2, \ldots, n\}$.  
On résume la loi de probabilité de $X$ par le tableau suivant.

| $x_i$ | $x_1$ | $x_2$ | ... | $x_n$ |
|-------|-------|-------|-----|-------|
| $P(X = x_i)$ | $p_1$ | $p_2$ | ... | $p_n$ |

b) Espérance mathématique - Variance et écart-type.  
Soit $X$ une variable aléatoire définie sur un univers $\Omega$ associé.  
✓ L’espérance mathématique de la variable aléatoire $X$ est le nombre réel noté $E(X)$ défini par :  
$$ E(X) = \sum_{i=1}^{n} x_ip_i = x_1p_1 + x_2p_2 + \ldots + x_np_n $$

✓ La variance de la variable aléatoire $X$ est le nombre réel noté $V(X)$ défini par :  
$$ V(X) = E(X^2) - (E(X))^2 $$  
Avec $E(X^2) = \sum_{i=1}^{n} x_i^2p_i$

✓ L’écart-type de $X$ est :  
$$ \sigma(X) = \sqrt{V(X)} $$  
3) Loi binomiale.  
Soit une expérience aléatoire formée d’une répétition $n$ fois de manière indépendante d’une même épreuve à deux issues sont : A succès de probabilité $p$, et $\bar{A}$ échec de probabilité $q = 1 - p$.  
Soit $X$ la variable aléatoire égale au nombre de fois que le succès se réalise au cours de cette expérience.  
✓ On dit que la variable aléatoire $X$ suit la loi binomiale de paramètres $n$ et $p$, notée $X \sim B(n, p)$.  
✓ La loi de probabilité de la variable aléatoire $X$ est appelée loi binomiale de paramètres $n$ et $p$.  

**Propriété.**  
Soit $X$ une variable aléatoire suit une loi binomiale de paramètres $n$ et $p$, on a :  
✓ Les valeurs prises par la variable aléatoire $X$ sont : $\{0, 1, 2, ..., n\}$  
$$ \forall k \in \{0, 1, 2, ..., n\} : P(X = k) = C_n^k p^k (1 - p)^{n - k} $$  
✓ L’espérance de la variable aléatoire $X$ est : $E(X) = np$.  
✓ La variance de la variable aléatoire $X$ est :  
$$ V(X) = npq = np(1 - p) = E(X)(1 - p) $$  
L’écart-type de $X$ est :  
$$ \sigma(X) = \sqrt{V(X)} = \sqrt{np(1 - p)} $$
```

<!-- Page 120 -->

```markdown
# Offre préparation concours 2026 – Prof Fayssal
- Plus 20 séances en vidéos de préparation Médecine
- Plus 20 séances en vidéos pour ENSA-ENSAM-UM6P
- Nouvelle offre à partir de mois 6 avec des séances en directes et interactives
- Deux livres de préparation Médecine-ENSA-ENSAM contiennent des astuces, plus de 20 concours blancs corrigés et la correction des anciens concours

Pour participer : 0681399067

---

### معلومات عن الحصص 
حصص خاصة بمادة الطب (20 حصة) على فيسبوك للرجوع إليها 
حصص لمادة الرياضيات (20 حصة) عبر ZOOM 
بكامل:
- كتيبات شاملة في الرياضيات ✅ مع تصحيحات مفصلة وتمارين نوعية + تصحيح التمارين السابقة.
- عرض حصص مباشرة يوميا ابتداء من شهر 6 لمدة 60 دقيقة

0681399067 للتواصل: 📧 

---

نتائج الإختيار
--> Feuilletez le document. ADMISSION À LA PREMIÈRE ANNÉE DE FORMATION DIDER EN DOCTORAT EN MÉDECINE ET PHARMACIE À OULDA.

---

Rh kont chtit k tab diak o ostad 
L. maths j3t iht 12 qts 3la 14 
Merci❤️
```

<!-- Page 121 -->

```
# Examens nationaux corrigés
## Probabilités  deuxième bac sc
### PC/SVT/ST

Examens nationaux corrigés de 2011 à 2025 Calcul de probabilités

**Deuxième bac sciences**  
PC/SVT/ST

## Partie 3 :
### Examens nationaux
#### Probabilités

**Collection FMATHS**  
**Prof faissal**  
[www.elboutkhili.jimdo.com](http://www.elboutkhili.jimdo.com)
```

<!-- Page 122 -->

```markdown
# Examens nationaux
**Probabilités corrigés de 2011 à 2025**

## 2 Bac sciences
**PC/SVT/ST**

---

### Exercice (Examen 2025-Session-Normal)
Une urne contient six boules indiscernables au toucher:  
Quatre boules blanches numérotées : 0;1;1 et deux boules noires numérotées : 0;1.  
On tire au hasard et simultanément deux boules de l'urne.

On considère les événements suivants :  
A : « les deux boules tirées portent le numéro 1 »  
B : « les deux boules tirées sont de même couleur »

1) Montrer que $p(A) = \frac{2}{5}$  
2) Montrer que $p(B) = \frac{7}{15}$  
3) Les événements A et B sont-ils indépendants ? Justifier la réponse.  
4) On répète l'expérience précédente trois fois successives. On considère la variable aléatoire $X$ indiquant le nombre de fois que l'on réalise l'événement A.  
a) Recopier et compléter le tableau ci-dessous, représentant la loi de probabilité de $X$

| $X = x_i$ | 0 | 1 | 2 | 3 |
|-----------|---|---|---|---|
| $p(X = x_i)$ | $\frac{27}{125}$ |   |   |   |

b) Calculer l'espérance mathématique $E(X)$ de la variable aléatoire $X$.

---

### Exercice (Examen 2024-Session-Normal)
Une urne contient sept boules : quatre boules portant le numéro 1, deux boules portant le numéro 2 et une boule portant le numéro 3. Toutes les boules sont indiscernables au toucher.  
On tire simultanément au hasard deux boules de cette urne.

1) Montrer que $p(A) = \frac{1}{3}$ où A est l’événement "les deux boules tirées portent le même numéro"  
2) Montrer que $p(B) = \frac{5}{21}$ où B est l’événement "La somme des numéros des boules tirées est 4"  
3) Calculer $p(A \cap B)$  
4) Les événements A et B sont-ils indépendants ? Justifier.

---

### Exercice (Examen 2025--Rattrapage)
Un sac contient 4 boules blanches et 3 boules noires. (Les boules sont indiscernables au toucher).

Un jeu consiste à tirer successivement et sans remise deux boules du sac.  
Les règles du jeu sont comme suit :  
Si les deux boules tirées sont blanches, on note : +5 .  
Si les deux boules tirées sont noires, on note : -5 .  
Si les deux boules tirées sont de couleurs différentes, on note : 0 .  
On considère les événements : $G \cap not \ Z$; $Z « not 0 »$  
$N_1 « La première boule tirée est noire »; $B_2 « la deuxième boule tirée est blanche »

---

### Exercice (Examen 2024--Rattrapage)
Une urne contient huit boules: quatre boules blanches, trois boules noires et une boule verte. Toutes les boules sont indiscernables au toucher. On tire au hasard successivement et sans remise trois boules de l'urne.

1) Vérifier que le nombre de tirages possibles est égal à 336 .  
2) Calculer la probabilité de l’événement A : "Tirer trois boules blanches"  
3) Montrer que la probabilité de l’événement B : "Tirer trois boules de même couleur" est $p(B) = \frac{5}{56}$  
4) Calculer la probabilité de l’événement C : "Obtenir au moins deux couleurs différentes"
```

<!-- Page 123 -->

```markdown
# Examens nationaux
## Probabilités corrigés de 2011 à 2025
### 2 Bac sciences PC/SVT/ST
PAGE 2

### Exercice 03 (Examen 2023-Session-Normal)
Une urne $U_1$ contient six boules portant les nombres $0; 1; 1; 2; 2$ et une urne $U_2$ contient cinq boules portant les nombres $1; 1; 2; 2$. On suppose que sont indiscernables au toucher.
On tire une boule de $U_1$ et on note le nombre à qu’elle porte, puis on la met dans l'urne $U_2$, on suite on tire une boule de $U_2$ et on note le nombre b qu’elle porte.
On considère les événements suivants :
a) La boule tirée de $U_1$ porte le nombre $1 $ ; $B$: "le produit ab est égal à $2$"

1) a) Calculer $P(A)$
b) Montrer que $P(B) = \frac{1}{4}$ (on peut utiliser l'arbre des possibilités)

2) Calculer $P(A/B)$ : la probabilité de $A$ sachant que l’événement $B$ est réalisé.  
Soit $X$ la variable aléatoire qui associe à chaque résultat de l'expérience, le produit $ab$ 

a) Montrer que $p(X = 0) = \frac{1}{3}$  
b) Donner la loi de probabilité de $X$ 

c) Soit les événements $M$: "Le produit ab est pair non nul" et $N$: "le produit ab est égal à $1$" Montrer que les événements $M$ et $N$ sont équiprobables.

### Exercice 05 (Examen 2022-Session-Normal)
Une urne contient dix boules : trois boules blanches, trois boules vertes et quatre boules rouges indiscernables au toucher. On tire au hasard simultanément trois boules de l’urne.

1. Montrer que $P(A) = \frac{1}{6}$ où $A$ est l’événement « N’obtenir aucune boule rouge ».
2. Calculer $P(B)$, où $B$ l’événement « Obtenir trois boules blanches ou trois boules vertes ».
3. Montrer que $P(C) = \frac{1}{2}$ ; où $C$ est l’événement « Obtenir exactement une boule rouge ».
4. Calculer $P(D)$ ; où $D$ est l’événement « Obtenir au moins deux boules rouges ».

### Exercice 06 (Examen 2022-Rattrapage)
Une urne contient trois boules blanches, quatre boules rouges et cinq boules vertes, indiscernables au toucher. On tire au hasard et simultanément trois boules de l’urne.
On considère les événements suivants : $A$: Obtenir exactement deux boules rouges ; $B$: "Obtenir exactement une boule verte".
```

<!-- Page 124 -->

```markdown
# Examens nationaux
## Probabilités corrigés de 2011 à 2025
### 2 Bac sciences PC/SVT/ST
PAGE 3

www.elboutkhili.jimdo free
Prof FAYSAL : 0681399067
Prof fayssal

---

1) a) Montrer que $P(A) = \frac{12}{55}$ et que $P(B) = \frac{21}{44}$  
b) Calculer que $P(A/B)$ : la probabilité de l'événement A sachant que l'événement B est réalisé. Les événements A et B sont-ils ?  
Indépendants ?  

2) Soit la variable aléatoire $X$ qui associe à chaque tirage le nombre de boules vertes tirées.  
a) Déterminé la loi de la probabilité $X$.  
b) calculer la probabilité d'obtenir au moins deux boules vertes  

### Exercice 07 (Examen 2019-Session-Normal)
Une urne contient dix boules : trois boules vertes, six boules rouges et une boule noire indiscernables au toucher.  
On tire au hasard et simultanément trois boules de l'urne.  
On considère les événements suivants :  
A : « Obtenir trois boules vertes. »  
B : « Obtenir trois boules de même couleur. »  
C : « Obtenir au moins deux boules de même couleur. »  

1) Montrer que $p(A) = \frac{1}{120}$ et $p(B) = \frac{7}{40}$  
2) Calculer $p(C)$.  

### Exercice 08 (Examen 2019-Session-Rattrapage)
Une urne contient une boule rouge, deux boules blanches et trois boules noires indiscernables au toucher. On tire au hasard successivement et avec remise trois boules de l'urne.  
Soient les événements suivants :  
A : « Les trois boules tirées sont de même couleur »  
B : « Il n’y a aucune boule blanche parmi les boules tirées »  
C : « Il y a exactement deux boules blanches parmi les boules tirées »  

1) Montrer que $p(A) = \frac{1}{6}$ et $p(B) = \frac{8}{27}$  
2) Calculer $p(C)$.  

### Exercice 09 (Examen 2018-Session-Normal)
Une urne contient 9 boules indiscernables au toucher : cinq boules rouges portant les nombres 1;1; 2; 2; et quatre boules blanches portant les nombres 1;2; 2.  
On considère l'expérience suivante : on tire au hasard et simultanément trois boules de l'urne. Soient les événements  
A : "les trois boules tirées sont de même couleur"  
B : "les trois boules tirées portent le même nombre"  

1) Montrer que : $p(A) = \frac{1}{6}$ et $p(B) = \frac{1}{4}$ et  
$p(C) = \frac{1}{42}$  

2) On répète l’expérience précédente trois fois avec remise dans l'une des trois boules tirées après chaque tirage, et on considère la variable aléatoire $X$ qui est égale au nombre de fois de réalisation de l'événement A.  
a) Déterminer les paramètres de la variable aléatoire $X$.  
b) Montrer que $p(X = 1) = \frac{25}{72}$ et calculer $p(X = 2)$.  

### Exercice 10 (Examen 2018-SRattrapage)
Une urne contient 12 boules indiscernables au toucher : 3 boules rouges portant chacune le nombre 1, et 3 boules rouges portant chacune le nombre 2, et 6 boules vertes portant chacune le nombre 2.  
On tire au hasard et simultanément deux boules de l'urne. On considère les événements suivants :  
A : "Obtenir deux boules portant le même nombre".
```

<!-- Page 125 -->

```markdown
# Examens nationaux
## Probabilités corrigés de 2011 à 2025

### 2 Bac sciences PC/SVT/ST PAGE 4

B : "Obtenir deux boules de couleurs différentes"  
C : "Obtenir deux boules portant deux nombres dont la somme est égale à 3"  
1) Montrer que $p(A) = \frac{13}{22}$ et $p(B) = \frac{6}{11}$ et calculer $p(C)$.

2)a) Montrer que $p(A \cap B) = \frac{3}{11}$  
b) Les événements A et B sont-ils indépendants ? Justifier la réponse.  
Sachant que l'événement B est réalisé, calculer la probabilité d'obtenir deux boules portant le même nombre.

### Exercice 11 (Examen 2017-Session-Normal)

Un sac contient 8 boules indiscernables au toucher. Chaque des 8 boules est marquée d'un nombre comme l'indique la figure ci-contre.

1. On tire simultanément et au hasard 3 boules du sac.  
   A : « aucune des trois boules tirées ne porte le numéro 0 »  
   B : « le produit des nombres portés par les trois boules tirées est égal à 8 »  
   Montrer que : $p(A) = \frac{5}{14}$ et $p(B) = \frac{1}{7}$.

2. Soit X la variable aléatoire liant égal au produit des nombres portés par les trois boules tirées.  
   a. Montrer que $p(X = 16) = \frac{3}{28}$.  
   b. Le tableau ci-contre représente la loi de la variable aléatoire X.

| $X$ | $p(X)$ |
|-----|--------|
|  3  | $\frac{3}{28}$ |

Copier ce tableau et compléter le sur la copie en justifiant les réponses.

### Exercice 12 (Examen 2017-Rattrapage)

Une urne contient dix boules indiscernables au toucher : cinq boules blanches, trois boules rouges et deux boules vertes. On tire au hasard deux boules de l’urne.  
1) Soit les événements A : "les deux boules tirées sont rouges".  
   Montrer que : $p(A) = \frac{2}{15}$.

2) Soit X la variable aléatoire qui à chaque tirage de deux boules associe le nombre de boules rouges restantes dans l’urne.  
   a) Montrer que l’ensemble des valeurs prises par la variable aléatoire X est $\{2; 3; 4\}$.  
   b) Montrer que : $p(X = 3) = \frac{8}{15}$ puis déterminer la loi de probabilité de $X$.

### Exercice 13 (Examen 2016-Session-Normal)

Une urne contient 10 boules : quatre boules rouges et six boules vertes (les boules sont indiscernables au toucher). On tire simultanément et au hasard deux boules de l’urne.  
1) Soit les événements A : "les deux boules tirées sont rouges".  
   Montrer que : $p(A) = \frac{2}{15}$.  
2) Soit X la variable aléatoire qui à chaque tirage de deux boules associe le nombre de boules rouges restantes dans l’urne.  
   a) Montrer que : $p(X = 3) = \frac{8}{15}$ puis déterminer la loi de probabilité de $X$.
```

<!-- Page 126 -->

```markdown
# Examens nationaux
## Probabilités corrigés de 2011 à 2025
### 2 Bac sciences PC/SVT/ST
#### PAGE 5

### Exercice 14 (Examen 2016-Rattrapage)
Une urne contient 10 boules portant les nombres 1 ; 2 ; 2 ; 3 ; 3 ; 4 ; 4 ; 4 ; 4 (Les boules sont indiscernables au toucher)  
On considère l'expérience suivante : on tire au hasard, successivement et sans remise, deux boules de l'urne.  
1) Soit A l'événement : " Obtenir deux boules portant des nombres pairs".  
Montrer que $p(A) = \frac{1}{3}$  
2) On répète l'expérience précédente trois fois de suite, en remettant dans l'urne les deux boules tirées après chaque expérience.  
Soit $X$ la variable aléatoire égale au nombre de fois où l'événement A est réalisé.  
Montrer que $p(X = 1) = \frac{4}{9}$ puis déterminer la loi de probabilité de la variable aléatoire $X$.

### Exercice 15 (Examen 2016-Session-Annulé)
Une urne $U_1$ contient 7 boules indiscernables au toucher : 4 Boules rouges et 3 boules vertes.  
Une urne $U_2$ contient 5 boules indiscernables au toucher : 3 Boules rouges et 2 boules vertes.  
1) On considère l’expérience suivante : on tire simultanément trois boules de $U_1$.  
On considère les deux événements :  
$A : « Obtenir une boule rouge et deux boules vertes »  
$B : « les trois boules tirées sont de même couleur »  
1) Montrer que : $P(A) = \frac{12}{35}$ et $P(B) = \frac{1}{7}$  
2) On considère l’expérience suivante : On tire simultanément deux boules de l’urne $U_1$, puis on tire une seule boule de l’urne $U_2$. Soit $C$ l’événement : « les trois boules tirées sont rouges »  
Montrer que : $P(C) = \frac{6}{35}$

### Exercice 16 (Examen 2015-Session-Normale)
Une urne contient huit boules : 3 boules rouges, 3 boules vertes et 2 boules blanches (les boules sont indiscernables au toucher).  
On tire au hasard, successivement et sans remise deux boules de l'urne.  
On considère l’événement A suivant : "tirer au moins une boule blanche" et l’événement B suivant : "tirer deux boules de même couleur".  
1) Montrer que : $p(A) = \frac{13}{28}$ et que $p(B) = \frac{1}{4}$  
2) Soit $X$ la variable aléatoire qui égale au nombre de boules blanches tirées.  
a) Montrer que $p(X = 2) = \frac{1}{28}$.  
b) Déterminer la loi de probabilité de la variable aléatoire $X$ et calculer l'espérance mathématique $E(X)$.

### Exercice 17 (Examen 2024-Session-Normal)
Une urne contient 5 jetons : deux jetons blancs, deux jetons verts et un rouge (les jetons sont indiscernables au toucher).  
On tire au hasard successivement et avec remise trois jetons de l'urne.  
Soit A :"les trois jetons tirés sont de même couleur".  
1) Montrer que $p(A) = \frac{17}{125}$.  
2) Soit $X$ la variable aléatoire qui est égale au nombre de jeton(s) blanc(s) tirés.  
Déterminer la loi de probabilité de la variable aléatoire $X$.
```

<!-- Page 127 -->

```markdown
# Offre préparation concours 2026 – Prof Fayssal
- Plus 20 séances en vidéos de préparation Médecine
- Plus 20 séances en vidéos pour ENSA-ENSAM-UM6P
- Nouvelle offre à partir de mois 6 avec des séances en directes et interactives
- Deux livres de préparation Médecine-ENSA-ENSAM contiennent des astuces, plus de 20 concours blancs corrigés et la correction des anciens concours

Pour participer : 06813999067

---

## حصص خاصة بمادة الطب (20 حصص) على فصيلوس للرجوع إليها
- حصص لمباريات (20 حصص) ENSM – UM6P – ENSA و специальные
- كتب متنوعة شاملة في الرياضيات 📖 مع تصحيح للمباريات السابقة.
- عرض حصص مباشرة يوميا ابتداء من شهر 6 لمدة 30 دقيقة

06813999067: التواصل 📞
```

<!-- Page 128 -->

```markdown
# Examens nationaux
## Probabilités corrigés de 2011 à 2025

### Exercice (Examen 2025-Session-Normal)

Une urne contient six boules indiscernables au toucher : Quatre boules blanches numérotées : 0;1;1;1 et deux boules noires numérotées : 0;1. On tire au hasard et simultanément deux boules de l'urne.

On considère les événements suivants :
- A : « les deux boules tirées portent le numéro 1
- B : "Les deux boules tirées sont de même couleur"

1) Montrer que $p(A) = \frac{2}{5}$  
2) Montrer que $p(B) = \frac{7}{15}$  
3) Les événements A et B sont-ils indépendants ? Justifier la réponse.  
4) On répète l'expérience précédente trois fois successives. On considère la variable aléatoire $X$ indiquant le nombre de fois que l'on réalise l'événement A.  
   a) Recopier et compléter le tableau ci-dessous, représentant la loi de probabilité de $X$

| X=$x_i$ | 0   | 1   | 2   | 3   |
|---------|-----|-----|-----|-----|
| $p(X=x_i)$ | $\frac{27}{125}$ |  |  |  |

b) Calculer l'espérance mathématique $E(X)$ de la variable aléatoire $X$.

### Correction de l’exercice

Une urne contient six boules indiscernables au toucher :
Quatre boules blanches numérotées : 0; 1; 1; 1 et deux boules noires numérotées : 0; 1. On tire au hasard et simultanément deux boules de l'urne.

1) a) Montrer que $p(A) = \frac{2}{5}$  
A"Les deux boules tirées portent le numéro 1  
Les boules sont indiscernables au toucher donc on est dans une situation d'équilibre. Alors

$$ p(A) = \frac{card(A)}{card(\Omega)} = \frac{\binom{4}{2}}{\binom{6}{2}} = \frac{6}{15} = \frac{2}{5} $$  

b. Montrer que $p(B) = \frac{7}{15}$  
$$ p(B) = \frac{card(B)}{card(\Omega)} = \frac{\binom{C_{4}^{2}} + \binom{C_{2}^{2}}}{\binom{C_{6}^{2}}} = \frac{6 + 1}{15} = \frac{7}{15} $$  

c) Les événements A et B sont-ils indépendants? Justifier.  
$$ p(A \cap B) = \frac{card(A \cap B)}{card(\Omega)} = \frac{C_{3}^{2}}{C_{6}^{2}} = \frac{3}{15} = \frac{1}{5} $$  
et $p(A) \times p(B) = \frac{2}{5} \times \frac{7}{15} = \frac{14}{75}$  

Puisque $\frac{1}{5} \neq \frac{14}{75}$, alors les événements A et B ne sont pas indépendants.

2) On répète l'expérience précédente trois fois successives. On considère la variable aléatoire $X$ indiquant le nombre de fois que l'on réalise l'événement A.  
a) Recopier et compléter le tableau ci-dessous, représentant la loi de probabilité de $X$
Si $k \in \{0, 1, 2, 3\}$ on a  
$$ p(X = k) = C_{3}^{k}p^k(1 - p)^{3 - k} $$  
Donc $p(X = 1) = C_{3}^{1}p^1(1 - p)^{3 - 1}$
$$ = 3 \times \frac{2}{5} \times \left(\frac{3}{5}\right)^{2} = \frac{54}{125} $$  
$$ p(X = 2) = C_{3}^{2} \left( \frac{2}{5} \right)^{2} \left( \frac{3}{5} \right)^{1} = 3 \times \frac{4}{25} \times \frac{3}{5} = \frac{36}{125} $$  
$$ p(X = 3) = C_{3}^{3} \left( \frac{2}{5} \right)^{3} = 1 \times \left( \frac{2}{5} \right)^{3} = \frac{8}{125} $$  

On complète le tableau précédent.  
| $x_k$        | 0               | 1                   | 2                   | 3               |
|--------------|-----------------|---------------------|---------------------|-----------------|
| $p(X = x_k)$ | $\frac{27}{125}$| $\frac{54}{125}$    | $\frac{36}{125}$    | $\frac{8}{125}$ |

b) Calculer l'espérance $E(X)$ de $X$.  
$$ E(X) = \sum x_k \cdot p(X = x_k) = 0 \times \frac{27}{125} + 1 \times \frac{54}{125} + 2 \times \frac{36}{125} + 3 \times \frac{8}{125} = \frac{6}{5} $$
```

<!-- Page 129 -->

```markdown
# Examens nationaux
## Probabilités corrigés de 2011 à 2025

### Exercice (Examen 2025--Rattrapage)
Un sac contient 4 boules blanches et 3 boules noires. (Les boules sont indiscernables au toucher).  
Un jeu consiste à tirer successivement et sans remise deux boules du sac.  
Les règles du jeu sont comme suit :  
- Si les deux boules tirées sont blanches, on note : +5.  
- Si les deux boules tirées sont noires, on note : -5.  
- Si les deux boules tirées sont de couleurs différentes, on note : 0.  

On considère les événements : $G \text{ « noter 0 »}$; $Z \text{ « noter 5 »}$  
$N_1 \text{ « La première boule tirée est noire»}; B_2 \text{ la deuxième boule tirée est blanche}$

1) a) Calculer $p(G)$, la probabilité de l'événement $G$.  
Puisque les boules sont indiscernables au toucher et le tirage se fait au hasard, alors on a à équiperobabilité. En plus puisque le tirage est successif sans remise, alors  
$\Omega = A_2^2 = 42$ et $G$ est l'événement «Les deux boules tirées sont blanches», donc $card(G) = A_2^2 = 12$  
D'où $p(G) = \frac{card(G)}{card(\Omega)} = \frac{12}{42} = \frac{2}{7}$  

b) Montrer que la probabilité de l'événement $Z$ est $p(Z) = \frac{4}{7}$.  
On a $Z$ est l'événement «Les boules tirées sont de couleurs différentes»,  
$Card(Z) = 2 \times A_1^4 \times A_1^3 = 2 \times 4 \times 3 = 24$  
D'où $p(Z) = \frac{card(Z)}{card(\Omega)} = \frac{24}{42} = \frac{4}{7}$  

2)a) Calculer la probabilité $p(N_1 \cap B_2)$.  
On a $N_1 \cap B_2$ est l'événement «La première boule tirée est noire et la deuxième boule tirée est blanche», donc  
$card(N_1 \cap B_2) = A_3^1 \times A_4^1 = 3 \times 4 = 12$  
D'où $p(N_1 \cap B_2) = \frac{card(N_1 \cap B_2)}{card(\Omega)} = \frac{12}{42} = \frac{2}{7}$  

b) Montrer que $p(B_2) = \frac{4}{7}$.  
On a $B_2$ est l'événement «Les deux boules tirées sont blanches», ou «La première est noire et la deuxième est blanche»  
Donc $B_2 = G \cup (N_1 \cap B_2)$.  
Or les événements $G$ et $(N_1 \cap B_2)$ sont incompatibles,  
D'où $p(B_2) = p(G) + p(N_1 \cap B_2) = \frac{2}{7} + \frac{2}{7} = \frac{4}{7}$  

c) Déduire la probabilité de «noter 0» sachant que la deuxième boule tirée est blanche.  
On a $(B_2 \cap Z) = (N_1 \cap B_2)$.  
$$
p_{B_2}(Z) = \frac{p(B_2 \cap Z)}{p(Z)}
$$
```


<!-- Page 130 -->

```markdown
# Examens nationaux
## Probabilités corrigés de 2011 à 2025
### 2 Bac sciences PC/SVT/ST
### PAGE 8

### Exercice 01 (Examen 2024-Session-Normal)
Une urne contient sept boules : quatre boules portant le numéro 1, deux boules portant le numéro 2 et une boule portant le numéro 3. Toutes les boules sont indiscernables au toucher.  
On tire simultanément au hasard deux boules de cette urne.

1) Montrer que $p(A) = \frac{1}{3}$ où $A$ est l'événement "les deux boules tirées portent le même numéro"

2) Montrer que $p(B) = \frac{5}{21}$ où $B$ est l'événement "La somme des numéros des boules tirées est 4".  
   $B :$ Tirées deux poules portent les nombres 1 et 3 ou bien 2 et 2  
   Donc card $(B) = C_1^2 \times C_1^2 = 4 + 1 = 5$  
   Donc : $p(B) = \frac{card(B)}{card(\omega)} = \frac{5}{21}$

3) Calculer $p(A \cap B)$, $A \cap B$ : tirées deux boules de même couleur dont la somme égale à 4 (les deux boules tirées portent le nombre 2)  
   card $(A \cap B) = C_2^2 = 1$  
   Donc : $P(A \cap B) = \frac{card(A \cap B)}{card(\omega)} = \frac{1}{21}$

4) Les événements $A$ et $B$ sont-ils indépendants ? Justifier.  
   On a $P(A) \times P(B) = \frac{1}{3} \times \frac{5}{21} = \frac{5}{63} \neq P(A \cap B)$  
   Donc $A$ et $B$ ne sont pas indépendants.

### Correction de l'exercice
Une urne contient sept boules : quatre boules portant le numéro 1, deux boules portant le numéro 2 et une boule portant le numéro 3. Toutes les boules sont indiscernables au toucher.  
On tire simultanément au hasard deux boules de cette urne.  
Donc : card $(\Omega) = C_2^7 = 21$  
Puisque les boules sont indiscernables au toucher donc : $P(A) = \frac{card(A)}{card(\Omega)}$  
$A :$ tirée deux boules portant le nombre 2, où bien 1  
card $(A) = C_2^4 + C_2^2 = 6 + 1 = 7$  
Donc : $P(A) = \frac{card(A)}{card(\omega)} = \frac{7}{21} = \frac{1}{3}$

### Exercice 02 (Examen 2024-Session-Rattrapage)
Une urne contient huit boules : quatre boules blanches, trois boules noires et une boule verte. Toutes les boules sont indiscernables au toucher. On tire au hasard successivement et sans remise trois boules de l'urne.

1) Vérifier que le nombre de tirages possibles est égal à 336.  
2) Calculer la probabilité de l'événement $A$ : "Tirer trois boules blanches"  
3) Montrer que la probabilité de l'événement $B$ : "Tirer trois boules de même couleur" est $p(B) = \frac{5}{56}$.  
4) Calculer la probabilité de l'événement $C$ : "Obtenir au moins deux couleurs différentes".
```

<!-- Page 131 -->

```markdown
# Examens nationaux
## Probabilités corrigées de 2011 à 2025
### Prof FAYSAL : 0681399067
### 2 Bac sciences PC/SVT/ST
### PAGE 9

## Exercice 03 (Examen 2023-Session-Normal)
Une urne $U_1$ contient six boules portant les nombres $0 ;0 ;1 ;1 ;1 ;2$ et une urne $U_2$ contient cinq boules portant les nombres $1 ;1 ;1 ;2 ;2$.

On suppose que sont indiscernables au toucher. On tire une boule de $U_1$ et on note le nombre à qu’elle porte, puis on la met dans l’urne $U_2$, on suite on tire une boule de $U_2$ et on note le nombre b qu’elle porte.

On considère les événements suivants :
- $A$: La boule tirée de $U_1$ porte le nombre 1 ;
- $B$: “ le produit ab est égal à 2 ”

3) a) Calculer $P(A)$  
b) Montrer que $P(B) = \frac{1}{4}$ (on peut utiliser l’arbre des possibilités)  
4) Calculer $P(A/B)$ : la probabilité de $A$ sachant que l’événement $B$ est réalisé.  
5) Soit $X$ la variable aléatoire qui associe à chaque résultat de l’expérience, le produit $ab$
a) Montrer que $P(X = 0) = \frac{1}{3}$  
b) Donner la loi de probabilité de $X$  
c) Soit les événements $M$: "Le produit ab est pair non nul" et $N$: "le produit ab est égal à 1" Montrer que les événements $M$ et $N$ sont équiprobables

## Correction de l’exercice 3 (2 points) :
Une urne $U_1$ contient six boules portant les nombres $0 ;0 ;1 ;1 ;1 ;2$ et une urne $U_2$ contient cinq boules portant les nombres $1 ;1 ;1 ;2 ;2$.

On tire une boule de $U_1$ et on note le nombre à qu’elle porte, puis on la met dans l’urne $U_2$, on suite on tire une boule de $U_2$ et on note le nombre b qu’elle porte.

On considère les événements suivants :
- $A$: "La boule tirée de $U_1$ porte le nombre 1 "
- $B$: " le produit ab est égal à 2 "

1) Calculer $P(A)$  
$A$: " La boule tirée de $U_1$ porte le nombre 1 "  
1ère méthode : $p(A) = \frac{3}{6} = \frac{1}{2}$  
2ème méthode : L’événement $A$ est $1$ ou $1 ;2$  
$p(A) = \frac{3}{6} + \frac{3}{6} \cdot \frac{1}{5} = \frac{1}{36} = \frac{1}{6}$

## Exercice 02 (Examen 2024-Session-Rattrapage)
Une urne contient huit boules: quatre boules blanches, trois boules noires et une boule verte. Toutes les boules sont indiscernables au toucher. On tire au hasard successivement et sans remise trois boules de l'urne.
1) Vérifier que le nombre de tirages possibles est égal à 336.
2) Calculer la probabilité de l’événement $A$: "Tirer trois boules blanches"  
3) Montrer que la probabilité de l’événement $B$: "Tirer trois boules de même couleur" est 
$$ p(B) = \frac{5}{56} $$
4) Calculer la probabilité de l’événement $C$: "Obtenir au moins deux couleurs différentes"
```

<!-- Page 132 -->

```markdown
# Examens nationaux
## Probabilités corrigés de 2011 à 2025

### 2 Bac sciences PC/SVT/ST PAGE 10

b) Montrer que $P(B) = \frac{1}{4}$ 
( on peut utiliser l'arbre des possibilités )

$$
\begin{array}{c}
3 \quad 2 \quad 1 \\
1 \quad 3 \quad 6 \\
6 \quad 3 \quad 1 \\
\end{array}
$$

5) Soit $X$ la variable aléatoire qui associe à chaque résultat de l'expérience, le produit $ab$  
a) Montrer que $p(X = 0) = \frac{1}{3}$.  
L'événement $X = 0$ correspond à tirer une boule portant le nombre 0 de l'une $U_1$ et une boule quelconque de l'une $U_2$  
Donc $card (X = 0) = C_1^2 \times C_6^6 = 12$, par suite $p(X = 0) = \frac{12}{36}$.  
Remarque :  
On peut avoir le même résultat en utilisant l'arbre des possibilités.  
Alors $p(X = 0) = \frac{1}{3}$.

b) Donner la loi de probabilité de $X$  
On a $X(\Omega) = \{0; 1; 2; 4\}$  
$$
p(X = 0) = \frac{1}{3}
$$  
$$
p(X = 1) = \frac{card (X = 1)}{card (\Omega)} = \frac{C_3^1 \times C_4^4}{36} = \frac{12}{36} = \frac{1}{3}
$$  
$$
p(X = 2) = p(B) = \frac{1}{4}
$$  
$$
p(X = 4) = \frac{card (X = 4)}{card (\Omega)} = \frac{C_1^1 \times C_3^1}{36} = \frac{3}{36} = \frac{1}{12}
$$

D'où la loi de $X$ est :  

c) Soit les événements $M$: "Le produit $ab$ est pair non nul" et $N$: "le produit $ab$ est égal à 1".  
Montrer que les événements $M$ et $N$ sont équiprobables.  
Montrons que $p(M) = p(N)$.  
L'événement $M$ est équivalent à trouver que $ab = 2$, ou $ab = 4$ c-à-d. les événements $X = 2$ ou $X = 4$.  
Donc $M = (X = 2) \cup (X = 4)$.  
Et comme $(X = 2) \cap (X = 4) = \emptyset$,  
Alors $p(M) = p(X = 2) + p(X = 4)$.  
$$
p(M) = \frac{1}{4} + \frac{1}{12} = \frac{4}{12} = \frac{1}{3}
$$  
$$
p(N) = p(X = 1) = \frac{1}{3}
$$  
Donc $p(M) = p(N)$, et par suite les événements $M$ et $N$ sont équiprobables.

3) Calculer que $P(A/B)$  
Première méthode  
L'événement $A \cap B$ est réalisé lorsque les deux événements $A$ et $B$ sont réalisés à la fois c-à-d. lorsqu'on tire une boule portant le nombre 1 de l'une $U_1$ et une boule portant le nombre 2 de l'une $U_2$.  
Donc $(A \cap B)$ est $1$.  
$$
P(A \cap B) = \frac{3}{6} + \frac{2}{6} = \frac{1}{6}
$$  
Donc : $P(A/B) = \frac{P(A \cap B)}{P(B)} = \frac{1/6}{1/4} = \frac{4}{6} = \frac{2}{3}$.

Deuxième méthode (arbre des possibilités)  
On a : $p(A/B) = \frac{p(A)}{p(B)}$.  
D'après l'arbre des possibilités, on a  
$$
p(A/B) = \frac{1}{2} = \frac{1}{6} = \frac{4}{6}
$$  
Donc : $p(A/B) = \frac{2}{3}$.
```

<!-- Page 133 -->

```
# Examens nationaux
## Probabilités corrigées de 2011 à 2025

### 2 Bac sciences PC/SVT/ST

---

### Exercice 04 (Examen 2023- Rattrapage)

1. Une urne contient quatre boules blanches et 2 boules noires indiscernables au toucher
2. On tire au hasard simultanément deux boules de l'urne
3. On considère les deux événements :
   - a) Calculer la probabilité de l’événement $A$ "tirer au moins une boule noire"
     - 1ère méthode :
       - $A : “NB ou NN”$
       - $\text{Card}(A) = C^1_2 \times C^1_4 + C^2_2 = 2 \times 4 + 1 = 9$
       - $P(A) = \frac{\text{Card}(A)}{C^2_6} = \frac{9}{15} = \frac{3}{5}$
     - 2ème méthode :
       - L’événement contraire de $A$ est : $B\bar{}$
       - $\bar{A} : “Aucune boule tirée n’est noire”$
       - Donc $\text{Card}(\bar{A}) = C^2_4 = \frac{4 \times 3}{1 \times 2} = 6$
       - Par suite $p(A) = \frac{\text{Card}(A)}{\text{Card}(\Omega)} = \frac{6}{15} = \frac{2}{5}$
       - Enfin : $p(A) = 1 - p(\bar{A}) = 1 - \frac{2}{5} = \frac{3}{5}$
   - a) Calculer la probabilité de l’événement $B$ : "Obtenir deux boules de même couleurs"
     - $P(B) = \frac{\text{Card}(B)}{C^2_6} = \frac{C^2_4 + C^2_2}{C^2_6} = \frac{7}{15}$
   - c) On répète cette expérience cinq fois en remettant dans l'urne les boules tirées, après chaque tirage
     - Quelle est la probabilité pour que l’événement $B$ soit réalisé trois fois $p(Y=3) = C^3_5 p(B)^3 (1 - p(B))^2$
       - $= 10 \times \left( \frac{7}{15} \right)^3 \times \left( \frac{8}{15} \right)^2 = 10 \times 7^3 \times 8^2 = 10 \times \frac{7^3}{15^3} \times \frac{8^2}{15^2} = 43904 / 158875$
     
4. 2) Dans cette question, on tire des boules de l’urne une après l’autre, et sans remise et on arrête le tirage lorsqu’on obtient une boule blanche pour la première fois
   - Soit $X$ la variable aléatoire qui est égale au nombre de tirages effectués dans cette expérience
   - a) Justifier que les valeurs prises par $X$ sont : 1; 2 et 3
   - b) Montrer que $p(X=2) = \frac{4}{15}$ ; $(X=2)$ signifie que la première boule tirée est noire et la seconde boule tirée est blanche
   - c) Quelle est la probabilité d'obtenir au moins une boule noire?
  
---

### Correction de l’exercice

1. Une urne contient quatre boules blanches et 2 boules noires indiscernables au toucher
2. On tire au hasard simultanément deux boules de l'urne
   - L’univers $\Omega$ associé à cette expérience aléatoire est l’ensemble des combinaisons de deux boules parmi six boules
   - Donc le nombre des possibilités est 
   $$ \text{Card}(\Omega) = C^2_6 = \frac{6!}{2! \cdot (6-2)!} = 15 $$
```

<!-- Page 134 -->

```markdown
# Examens nationaux  
## Probabilités corrigées de 2011 à 2025  
### 2 Bac sciences PC/SVT/ST  
#### PAGE 12  

### a) Justifier que les valeurs prises par $X$ sont 1; 2 et 3  
> Si la première boule tirée est blanche, on arrête donc l'expérience au premier tirage, donc $X$ peut avoir la valeur 1  
> Si la première boule tirée est noire et la seconde est blanche, on arrête donc l'expérience au deuxième tirage, donc $X$ peut avoir la valeur 2  
> Si les deux premières boules tirées sont noires, alors forcément la troisième est blanche, on arrête donc l'expérience au troisième tirage, donc $X$ peut avoir la valeur 3  
D'où : $X(\Omega) = \{1; 2; 3\}$  

### b) Montrer que $p(X = 2) = \frac{4}{15}; (X = 2)$ signifie que la première boule tirée est noire et la seconde boule tirée est blanche $X = 2)$ “NB”  
$$ 
\text{Card}((X = 2)) = A_{41}^2 \times A_{41}^4 = 2 \times 4 = 8  
$$  
$$ 
P(X = 2) = \frac{Card((X = 2))}{A_{42}^6} = \frac{8}{6 \times 5} = \frac{4}{15}  
$$  

### c) Déterminer la loi de probabilité de $X$  
$X = 1$ signifie que la première boule tirée est blanche :  
$$ 
p(X = 1) = \frac{A_{41}^4}{A_{46}^6} = \frac{4}{6} = \frac{2}{3}  
$$  
$X = 2$ déjà calculé dans la question précédente : $p(X = 2) = \frac{4}{15}$  
$X = 3$ signifie que les deux premières boules tirées sont noires et la troisième boule tirée est blanche :  
$$ 
p(X = 3) = \frac{A_{41}^2 \times A_{41}^3 \times A_{41}^4}{A_{46}^6} = \frac{2 \times 6 \times 1}{1 \times 30} = \frac{1}{15}  
$$  

### d) Quelle est la probabilité d'obtenir au moins une boule noire?  
$$ D' \text{Obtenir au moins une boule noire} $$  
1ère méthode : NB ou NNB  
$$ 
P(D) = P(X = 2) + P(X = 3) = \frac{4}{15} + \frac{1}{15} = \frac{5}{15} = \frac{1}{3}  
$$  
2ème méthode : L'événement contraire de $D$ est : BB  
$$ 
\overline{D} = \frac{A_{41}^4}{A_{41}^6} = \frac{4}{6} = \frac{2}{3}  
$$  
Enfin :  
$$ 
p(D) = 1 - p(\overline{D}) = 1 - \frac{2}{3} = \frac{1}{3}  
$$  

### Exercice 05 (Examen 2022-Session-Normal)  
Une urne contient dix boules : trois boules blanches, trois boules vertes et quatre boules rouges indiscernables au toucher. On tire au hasard simultanément trois boules de l'urne.  
1. Montrer que $p(A) = \frac{1}{6}$ où $A$ est l’événement « N’obtenir aucune boule rouge ».  
2. Calculer $p(B)$ où $B$ l'événement « Obtenir trois boules blanches ou trois boules vertes ».  
3. Montrer que $p(C) = \frac{1}{2}$ où $C$ est l’événement « Obtenir exactement une boule rouge ».  
4. Calculer $p(D)$ où $D$ est l’événement « Obtenir au moins deux boules rouges ».  

### Solution de l’exercice 03  
L'univers $\Omega$ associé à cette expérience aléatoire est l'ensemble des combinaisons de trois boules parmi dix boules  
Donc le nombre des possibilités est  
$$ 
Card(\Omega) = \binom{10}{3} = \frac{10 \times 9 \times 8}{3 \times 2} = 120  
$$  
1. Montrer que $p(A) = \frac{1}{6}$ où $A$ est l’événement « N’obtenir aucune boule rouge ».  
Donc $Card(A) = \binom{6}{3} = \frac{6\times5\times4}{3 \times 2} = 20$  
Par suite 
$$ 
p(A) = \frac{Card(A)}{Card(\Omega)} = \frac{20}{120} = \frac{1}{6}  
$$  
```

<!-- Page 135 -->

```markdown
# Examens nationaux
## Probabilités corrigées de 2011 à 2025

**Prof FAYSAL : 0681399067**

### Solution de l'exercice 04 (3 Points)

Une urne contient trois boules blanches, quatre boules rouges et cinq boules vertes.

On tire au hasard et simultanément trois boules de l'urne.

1) a) Montrer que $P(A) = \frac{12}{55}$ et que $P(B) = \frac{21}{44}$  
   $$ Card(\Omega) = C^{3}_{12} = \frac{12 \times 11 \times 10}{3 \times 2} = 220 $$  
   A : "Obtenir exactement deux boules rouges" $(R ; R ; R)$  
   $$ Card(A) = C^{4}_{2} \times C^{1}_{5} = 48 $$  
   Par suite, $p(A) = \frac{Card(A)}{Card(\Omega)} = \frac{48}{220} = \frac{12}{55}$  

   B : "Obtenir exactement une boule verte" $(V ; \bar{V} ; \bar{V})$  
   $$ Card(B) = C^{1}_{5} \times C^{2}_{4} = 105 $$  
   Par suite $p(B) = \frac{Card(B)}{Card(\Omega)} = \frac{105}{220} = \frac{21}{44}$  

b) Calculer que $P(A/B)$ : la probabilité de l'événement A sachant que l'événement B est réalisé.  
On a $A \cap B$ "Obtenir deux boules rouges et une boule verte"  
$$ Card(A \cap B) = C^{2}_{4} \times C^{1}_{5} = 30 $$  
$$ \Rightarrow P(A \cap B) = \frac{30}{220} = \frac{3}{22} $$  
Donc :  
$$ P(A/B) = \frac{P(A \cap B)}{P(B)} = \frac{\frac{3}{22}}{\frac{21}{44}} = \frac{2}{7} $$  
On a : $P(A/B) \neq P(A)$ donc A et B ne sont pas indépendants.

### Exercice 06 (Examen 2022 - Rattrapage)

Une urne contient trois boules blanches, quatre boules rouges et cinq boules vertes, indiscernables au toucher.

On tire au hasard et simultanément trois boules de l’urne.

On considère les événements suivants : A : "Obtenir exactement deux boules rouges"  
B : "Obtenir exactement une boule verte"

1) a) Montrer que $P(A) = \frac{12}{55}$ et que $P(B) = \frac{21}{44}$  
b) Calculer que $P(A/B)$ : la probabilité de l’événement A sachant que l’événement B est réalisé. Les événements A et B sont-ils ? Indépendants ?  
2) Soit la variable aléatoire $X$ qui associe à chaque tirage le nombre de boules vertes tirées.  
a) Déterminé la loi de la probabilité $X$.  
b) calculer la probabilité d'obtenir au moins deux boules vertes.
```

<!-- Page 136 -->

```markdown
## Examens nationaux
### Intégrales corrigés de 2011 à 2025
**2 Bac sciences PC/SVT/ST**  
**PAGE 14**

#### 2) Soit la variable aléatoire $X$ qui associe à chaque tirage le nombre de boules vertes tirées.  
a) Déterminé la loi de la probabilité $X$.  
Les valeurs prises par $X$ sont : $0; 1; 2; 3$  
$X = 0 \{VVV\}; X = 1 \{VVR\}; X = 2 \{VVR\}; X = 3 \{VVV\}$

On a : $P(X = 0) = \frac{c^3_7}{\text{card}(\Omega)} = \frac{35}{220} = \frac{7}{44}$  
$P(X = 1) = P(B) = \frac{21}{44}$  
$P(X = 2) = \frac{c^2_5 \cdot c^1_7}{\text{card}(\Omega)} = \frac{7}{22}$  
$P(X = 3) = \frac{c^3_5}{\text{card}(\Omega)} = \frac{10}{22}$

Donc la loi de probabilité de $X$ est le tableau :

| $x_i$ | $P(X = x_i)$ |
|-------|---------------|
| $0$   | $\frac{7}{44}$|
| $1$   | $\frac{21}{44}$|
| $2$   | $\frac{7}{22}$|
| $3$   | $\frac{1}{22}$|

b) calculer la probabilité d'obtenir au moins deux boules vertes.

$$ P(X \geq 2) = P(X = 2) + P(X = 3) = \frac{7}{2} + \frac{1}{2} = \frac{8}{4} = \frac{4}{4} $$

### Exercice 07 (Examen 2019-Session-Normal)
Une urne contient dix boules : trois boules vertes, six boules rouges et une boule noire indiscernables au toucher.  
On tire au hasard et simultanément trois boules de l'urne.  
On considère les événements suivants :  
A : « Obtenir trois boules vertes. »  
B : « Obtenir trois boules de même couleur. »  
C : « Obtenir au moins deux boules de même couleur. »

1) Montrer que $p(A) = \frac{1}{120}$ et $p(B) = \frac{7}{40}$

**Solution de l’exercice :**  
On tire simultanément trois boules de l'urne  
L'univers $\Omega$ associé à cette expérience aléatoire est l'ensemble des combinaisons de trois boules parmi dix boules  
Donc le nombre des possibilités est  
$$ \text{Card}(\Omega) = C^{3}_{10} = \frac{9 \times 8 \times 10}{3 \times 2 \times 1} = 120 $$

A : « Obtenir trois boules vertes. »  
$$ p(A) = \frac{\text{Card}(A)}{\text{Card}(\Omega)} = \frac{C^3_{3}}{120} = \frac{1}{120} $$

B : « Obtenir trois boules de même couleur. »  
$$(VVV)$ ou $(RRR)$$   
$$ p(B) = \frac{\text{Card}(B)}{\text{Card}(\Omega)} = \frac{C^3_{3} + C^3_{6}}{120} = \frac{1 + 20}{120} = \frac{21}{120} = \frac{7}{40} $$

2) Calculer $P(C)$  
« Obtenir au moins deux boules de même couleur. »  
L’événement contraire de $B$ est :  
$\bar{C}$ « Obtenir trois boules différentes deux à deux »  
Donc $\text{Card}(\bar{C}) = C^1_{2} \times C^1_{6} \times C^1_{1} = 18$  
Par suite $p(\bar{C}) = \frac{\text{Card}(\bar{C})}{\text{Card}(\Omega)} = \frac{18}{120} = \frac{3}{20}$  
Enfin : $p(C) = 1 - p(\bar{C}) = 1 - \frac{3}{20} = \frac{17}{20}$
```

<!-- Page 137 -->

```markdown
# Examens nationaux
## Probabilités corrigés de 2011 à 2025
### 2 Bac sciences PC/SVT/ST
**PAGE 15**

### Exercice 08 (Examen 2019-Session-Rattrapage)

Une urne contient une boule rouge, deux boules blanches et trois boules noires indiscernables au toucher. On tire au hasard successivement et avec remise trois boules de l'urne.  
Soient les événements suivants :  
- A : "Les trois boules tirées sont de même couleur"  
- B : "Il n’y a aucune boule blanche parmi les boules tirées"  
- C : "Il y a exactement deux boules blanches parmi les boules tirées"  

3) Montrer que $p(A) = \frac{1}{6}$ et $p(B) = \frac{8}{27}$  
4) Calculer $p(C)$  

**Solution**  
Une urne contient une boule rouge, deux boules blanches et trois boules noires indiscernables au toucher. On tire au hasard successivement et avec remise trois boules de l'urne : L'univers $\Omega$ associé à cette expérience aléatoire est l’ensemble des arrangements de trois boules parmi six boules.  
Donc le nombre des possibilités est  
$$ \text{Card}(\Omega) = 6^3 = 6 \times 6 \times 6 = 216 $$

Soient les événements suivants :  
1) Montrer que $p(A) = \frac{1}{6}$ et $p(B) = \frac{8}{27}$  
A : "Les trois boules tirées sont de même couleur"  
( RRR ) ou ( BBB ) ou ( NNN )  
Donc $\text{Card}(A) = 1^3 + 2^3 + 3^3 = 36$  
Par suite $p(A) = \frac{36}{216} = \frac{1}{6}$  

B : "Il n’y a aucune boule blanche parmi les boules tirées"  
Donc : $p(B) = \frac{\text{Card}(B)}{\text{Card}(\Omega)} = \frac{43}{216} = \frac{64}{216} = \frac{8}{27}$  

1) Calculer $p(C)$  
C : "Il y a exactement deux boules blanches parmi les boules tirées" : ( BBB ) ou ( BBB ) ou ( BBB )  

Donc $\text{Card}(C) = 3(2^2 \times 1^1) = 24$  
Par suite $p(C) = \frac{\text{Card}(C)}{\text{Card}(\Omega)} = \frac{24}{216}$  

---

### Exercice 09 (Examen 2018-Session-Normal)

Une urne contient 9 boules indiscernables au toucher : cinq boules rouges portant les nombres 1;1; 2;2; 2 et quatre boules blanches portant les nombres 1;2; 2.  
On considère l'expérience suivante : on tire au hasard et simultanément trois boules de l'urne. Soient les événements  
- A : "les trois boules tirées sont de même couleur"  
- B : "les trois boules tirées portent le même nombre"  
- C : "les trois boules tirées sont de même couleur et portent le même nombre"  

1) Montrer que : $p(A) = \frac{1}{6}$ et $p(B) = \frac{1}{4}$ et $p(C) = \frac{1}{42}$  
2) On répète l’expérience précédente trois fois avec remise dans l'urne des trois boules tirées après chaque tirage, et on considère la variable aléatoire $X$ qui est égale au nombre de fois de réalisation de l’événement A.  
a) Déterminer les paramètres de la variable aléatoire $X$.  
b) Montrer que $p(X = 1) = \frac{25}{72}$ et calculer $p(X = 2)$.
```

<!-- Page 138 -->

```markdown
# Examens nationaux 
## Probabilités corrigés de 2011 à 2025
### 2 Bac sciences PC/SVT/ST
#### PAGE 16

### Correction de l'exercice
Une urne contient 9 boules indiscernables au toucher : cinq boules rouges portant les nombres 1;1; 2; 2 et quatre boules blanches portant les nombres 1;2; 2.

On considère l'expérience suivante : on tire au hasard et simultanément trois boules de l'urne. On tire simultanément 3 boules de la caisse.

Card $\Omega = C_3^9 = 84$

1) Montrons que : 
$$ p(A) = \frac{1}{6}, p(B) = \frac{1}{4} \text{ et } p(C) = \frac{1}{42} $$

**A « Les trois boules tirés sont de même couleur »**

Card $A = C_3^5 + C_3^4 = 10 + 4 = 14$

$$ P(A) = \frac{Card A}{Card \Omega} = \frac{14}{84} = \frac{1}{6} $$

Donc : $P(A) = \frac{1}{6}$

**B « Les trois boules tirés portent le même numéros »**

Card $B = C_3^3 + C_6^3 = 21$

$$ P(B) = \frac{Card B}{Card \Omega} = \frac{21}{84} = \frac{1}{4} $$

Donc : $P(B) = \frac{1}{4}$

**C « Les trois boules tirés sont de même couleur et portent le même numéros »**

Card $C = C_3^3 + C_3^3 = 2$

$$ P(C) = \frac{Card C}{Card \Omega} = \frac{2}{84} = \frac{1}{42} $$

Donc : $P(C) = \frac{1}{42}$

2) Soit $X$ la variable aléatoire liée à « Nombre de fois que l'événement est réalisé ».
a) Déterminons les paramètres de la variable aléatoire $X$ :

Les paramètres de la variable $X$ sont :
* $n = 3$ (Nombre de fois qu'on répète l'expérience)
* $p = P(A) = \frac{1}{6}$ (La probabilité de l’événement)

b) Montrons que : 
$$ p(X = 1) = \frac{25}{72} $$

et calculons $p(X = 2)$ :

$$ P(X = 1) = C_n^1 \times p^1 \times (1 - p)^{n-1} = n \times p \times (1 - p)^{n-1} $$

$$ = 3 \times \frac{1}{6} \times \left(1 - \frac{1}{6}\right)^{3-1} $$ 

$$ = \frac{1}{2} \left( \frac{5}{6} \right)^2 $$

$$ = \frac{25}{72} $$

Donc : $P(X = 1) = \frac{25}{72}$

$$ P(X = 2) = C_n^2 \times p^2 \times (1 - p)^{n-2} $$

$$ = C_3^2 \times p^2 \times (1 - p)^{3-2} $$

$$ = 3 \times \left(\frac{1}{6}\right)^{2} \times \left(1 - \frac{1}{6}\right)^{1} $$

$$ = 3 \times \frac{1}{36} \times \frac{5}{6} $$

$$ = \frac{5}{72} $$

Donc : $P(X = 2) = \frac{5}{72}$

### Exercice 10 (Examen 2018 Rattrapage)

Une urne contient 12 boules indiscernables au toucher : 3 boules rouges portant chacune le nombre 1, et 3 boules rouges portant chacune le nombre 2, et 6 boules vertes portant chacune le nombre 2.

On tire au hasard et simultanément deux boules de l'urne. On considère les événements suivants :
* A : "Obtenir deux boules portant le même nombre" ;
* B : "Obtenir deux boules de couleurs différentes"
* C : "Obtenir deux boules portant deux nombres dont la somme est égale à 3"

1) Montre que $p(A) = \frac{13}{22}$ et $p(B) = \frac{6}{11}$ et calcule $p(C)$.

2) a) Montre que $P(A \cap B) = \frac{3}{11}$

b) Les événements $A$ et $B$ sont-ils indépendants ? Justifie la réponse.

3) Sachant que l'événement $A$ est réalisé, calcule la probabilité d'obtenir deux boules portant le même nombre.
```

<!-- Page 139 -->

```markdown
# Examens nationaux
## Probabilités corrigées de 2011 à 2025
### 2 Bac sciences PC/SVT/ST
#### PAGE 17

### Solution
On tire au hasard, simultanément deux boules de l'urne, donc Card (Ω) = $C_{22}^{2} = 66$

1 - Montrons que : $p(A) = \frac{13}{22}$, $p(B) = \frac{6}{11}$ et calculons $p(C)$.
   A : "Obtenir deux boules portant le même nombre" ;
   Card (A) = $C_{3}^{2} + C_{2}^{2} = 39 \{1, 2\}$.
   Donc : $P(A) = \frac{Card(A)}{Card(Ω)} = \frac{39}{66}$

   D'où : $P(A) = \frac{13}{22}$

   B : "Obtenir deux boules de couleurs différentes" ; $\{R, V\}$.
   Card B = $C_{6}^{1} \times C_{6}^{1} = 36$
   Donc : $P(B) = \frac{Card(B)}{Card(Ω)} = \frac{36}{66} = \frac{6}{11}$

   C : "Obtenir deux boules portant deux nombres dont la somme est égale à 3" $\{1, 2\}$.
   Card (C) = $C_{3}^{1} \times C_{1}^{1} = 27$
   Donc : $P(C) = \frac{Card(C)}{Card(Ω)} = \frac{27}{66} = \frac{9}{22}$

2) a) Montrons que : $p(A \cap B) = \frac{3}{11}$.
   On a : $(A \cap B)$ : "Obtenir 2 boules qui portent le même numéro et de couleurs différentes" $\{R_2, V_2\}$.
   Card $(A \cap B) = C_{3}^{1} \times C_{6}^{1} = 18$.
   Donc : $P(A \cap B) = \frac{Card(A \cap B)}{Card(Ω)} = \frac{18}{66}$

   D'où : $P(A \cap B) = \frac{3}{11}$

   b) Les événements A et B sont-ils indépendants ? Justifier la réponse.
   On a : $P(A) \times P(B) = \frac{13}{22} \times \frac{6}{11} = \frac{3}{11}$.
   Donc : $P(A) \times P(B) \neq P(A \cap B)$ 

   D'où les événements A et B ne sont pas indépendants.

3 - Sachant que l'événement B est réalisé, calculons la probabilité de tirer deux boules qui portent le même nombre :
   l'événement "Sachant que B est réalisé ; obtenir deux boules qui portent le même numéro" c'est l'événement A sachant B ;

### Exercice 11 (Examen 2017-Session-Normal)
Un sac contient 8 boules indiscernables au toucher. Chacune des 8 boules est marquée d’un nombre comme l’indique la figure ci-contre.

2. On tire simultanément et au hasard 3 boules du sac.
   A : « aucune des trois boules tirées ne porte le numéro 0 »
   B : « le produit des nombre portés par les trois boules tirées est égal à 8 »
   Montrer que : $p(A) = \frac{5}{14}$ et $p(B) = \frac{1}{7}$

   2. Soit $X$ la variable aléatoire liant égal au produit des nombres portés par les trois boules tirées.
   a. Montrer que $p(X = 16) = \frac{3}{28}$.
   b. Le tableau ci-contre représente la loi de la variable aléatoire X.

   Copier ce tableau et compléter le sur la copie en justifiant les réponses.

### Correction
1) On tire simultanément et au hasard 3 boules du sac.
   Montrer que : $p(A) = \frac{5}{14}$ et $p(B) = \frac{1}{7}$.

   Comme les boules sont indiscernables et le tirage se fait au hasard, alors on l'hypothèse d'équiprobabilité.
```

<!-- Page 140 -->

```markdown
# Examens nationaux
## Probabilités corrigées de 2011 à 2025
### 2 Bac sciences PC/SVT/ST
#### PAGE 18

---

A : « aucune des trois boules tirées ne porte le numéro 0 »  
Pour que $A$ soit réalisé on doit tirer trois boules parmi les six boules qui ne portent pas le nombre 0, donc :  
$$
p(A) = \frac{ \text{card}(A) }{ \text{card}(\Omega) } = \frac{ \binom{3}{3} \cdot 6 \times 5 \times 4}{ \binom{8}{3} \cdot 6} = \frac{5}{14}
$$

B : « le produit des nombres portés par les trois boules tirées est égal à 8 »  
Pour que $B$ soit réalisé on doit tirer trois boules parmi les quatre boules qui portent nombre 2 ou trois boules portent les nombres 1,2,4. Donc :  
$$
p(B) = \frac{ \text{card}(B) }{ \text{card}(\Omega) } = \frac{ \binom{3}{1} \cdot \binom{1}{4} \cdot \binom{1}{1} \cdot 4 + 4 + 4}{ \binom{8}{3} } = \frac{8}{7} \cdot \frac{1}{7} = \frac{8}{8 \cdot 7 \cdot 6}
$$

2 - On a $X$ la variable aléatoire qui à chaque tirage associe le produit des nombres portés par les trois boules tirées.  
a) Montrons que : $p(X = 16) = \frac{3}{28}$  
On a $2 \times 2 \times 4 = 16$, alors :  
$$
p(X = 16) = \frac{ \text{card}(X = 16) }{ \text{card}(\Omega) } = \frac{ \binom{2}{3} \cdot \binom{8}{k} \cdot \binom{1}{1} }{ \binom{8}{3} } = \frac{3}{28}
$$

b. Le tableau ci-contre représente la loi de probabilité de la variable aléatoire $X$  

| $x_i$ | 4 | 8 | 16 |
|-------|---|---|----|
| $p(X = x_i)$ | $\frac{9}{14}$ | $\frac{3}{28}$ | $? $ |

Copier ce tableau et compléter le sur la copie en justifiant les réponses.

---

#### Exercice 12 (Examen 2017 - Rattrapage)
Une urne contient dix boules indiscernables au toucher : cinq boules blanches, trois boules rouges et deux boules vertes. On tire au hasard, simultanément, quatre boules de l'urne.  
1- Soit $A$ l'événement : "Parmi les quatre boules tirées, il y a une seule boule verte seulement".  
Et $B$ l'événement : "Parmi les quatre boules tirées, il y a exactement trois boules de même couleur".  
Montrer que $p(A) = \frac{8}{15}$ et que $p(B) = \frac{19}{70}$.  
2 - Soit $X$ la variable aléatoire qui à chaque tirage associe le nombre de boules vertes.  
a) Montrer que $p(X = 2) = \frac{2}{15}$.  
b) Déterminer la loi de probabilité de la variable aléatoire $X$ et montrer que l'espérance mathématique est égale à $\frac{4}{5}$.
```

<!-- Page 141 -->

```markdown
# Examens nationaux
## Probabilités corrigés de 2011 à 2025

### Correction

On tire au hasard, simultanément, quatre boules de l'urne.
1) Montrons que $P(A) = \frac{8}{15}$ et $P(B) = \frac{19}{70}$ :
A : "Parmi les quatre boules tirées, une seule boule est verte"
( $ A = 'V \overline{R} \overline{R} \overline{R} \overline{R}' $)

On a une carte $(\Omega)$ :
$$ \text{Card}(\Omega) = C^4_{10} = 210 $$
$$ \text{Card} (A) = C^1_2 \times C^3_8 = 2 \times 56 = 112 $$
Donc $P(A) = \frac{\text{card}(A)}{\text{card}(\Omega)} = \frac{112}{210} = \frac{8}{15}$ 

B : "Parmi les quatre boules tirées, il y a exactement trois boules de même couleur"
( $ B = 'RRR' \text{ Ou } 'BBB' $)

Car $d(B) = C^3_3 \times C^1_7 + C^3_5 \times C^1_5 = 1 \times 7 + 10 \times 5 = 57$
Donc $P(B) = \frac{\text{card}(B)}{\text{card}(\Omega)} = \frac{57}{210} = \frac{19}{70}$ 

Alors $P(B) = \frac{19}{70}$. 

---

2) Soit $X$ la variable aléatoire qui à chaque tirage associe le nombre de boules vertes tirées.

a) Montrons que $P(X = 2) = \frac{2}{15}$ 
L'événement $(X = 2)$ correspond à tirer deux boules vertes et deux boules non vertes:
$$ P(X = 2) = \frac{\text{card}(X = 2)}{\text{card}(\Omega)} = \frac{C^2_2 \times C^2_8}{210} = \frac{1 \times 28}{210} = \frac{2}{15} $$

b) Donner la loi de probabilité de $X$ et montrer que $E(X) = \frac{4}{5}$.
On a $ \Omega = \{0 ; 1; 2\} $
L'événement $(X = 0)$ correspond à tirer quatre boules non vertes. {$X = 0 = 'V \overline{R} \overline{R} \overline{R}'$}
L'événement $(X = 1)$ correspond à tirer une seule boule verte.
Donc $\{X = 1\} = A = 'V \overline{R} \overline{R} \overline{R}'$.

Alors $P(X = 1) = P(A) = \frac{C^4_2}{Card(\Omega)}$. 
$$ P(X = 1) = \frac{6}{45} $$

$$ P(X = 2) = \frac{2}{15} $$

---

### Exercice 13 (Examen 2016-Session-Normal)
Une urne contient 10 boules : quatre boules rouges et six boules vertes (les boules sont indiscernables au toucher).
On tire simultanément deux boules de l’urne.
1) Soit les événements A : "les deux boules tirées sont rouges ".
Montrer que : $p(A) = \frac{2}{15}$

2) Soit $X$ la variable aléatoire qui à chaque tirage de deux boules associe le nombre de boules rouges restantes dans l’urne.
a) Montrer que l’ensemble des valeurs prises par la variable aléatoire $X$ est $\{2; 3; 4\}$.
b) Montrer que : $p(X = 3) = \frac{15}{28}$ puis déterminer la loi de probabilité de $X$.
```

<!-- Page 142 -->

```markdown
# Examens nationaux
## Probabilités corrigés de 2011 à 2025
### 2 Bac sciences PC/SVT/ST PAGE 20

## Exercice 14 (Examen 2016-Session-Rattrapage)

Une urne contient 10 boules portant les nombres 1; 2; 2; 3; 3; 3; 4; 4; 4; 4 (Les boules sont indiscernables au toucher)  
On considère l'expérience suivante : on tire au hasard, successivement et sans remise, deux boules de l'urne.

1) Soit $A$ l'événement : "Obtenir deux boules portant deux nombres pairs". Montrer que $p(A) = \frac{1}{3}$

2) On répète l'expérience précédente trois fois de suite, en remettant dans l'urne les deux boules tirées après chaque expérience. Soit $X$ la variable aléatoire égale au nombre de fois où l'événement $A$ est réalisé. Montrer que $p(X = 1) = \frac{4}{9}$ puis déterminer la loi de probabilité de la variable aléatoire $X$.

### Correction

Une urne contient 10 boules portant les nombres 1; 2; 2; 3; 3; 3; 4; 4; 4; 4 (Les boules sont indiscernables au toucher)  
On considère l'expérience suivante : on tire au hasard, successivement et sans remise, deux boules de l'urne.

1) Soit $A$ l'événement : "Obtenir deux boules portant deux nombres pairs". Montrons que $p(A) = \frac{1}{3}$.

On a  
$$
\text{card}(\Omega) = A_{10} \binom{2}{0} \cdot \binom{3}{2} = 10! \times 9 = 90.
$$

Donc  
$$
p(A) = \frac{\text{card}(A)}{\text{card}(\Omega)} = \frac{30}{90} = \frac{1}{3}.
$$

### Déterminons la loi de probabilité de $X$.

On a : 
$$ p(X = 2) = p(A) = \frac{2}{15}. $$  
Et $$ p(X = 3) = \frac{8}{15}. $$  
Et $$ p(X = 4) = \frac{\text{Card}(X = 4)}{\text{Card}(\Omega)} = \frac{6}{45} = \frac{2}{15} = \frac{1}{3}. $$

| $X = x_i$ | 2 | 3 | 4 |
|-----------|---|---|---|
| $P(X = x_i)$ | $\frac{2}{15}$ | $\frac{8}{15}$ | $\frac{2}{15}$ |
```

<!-- Page 143 -->

```markdown
## Examens nationaux
### Probabilités corrigées de 2011 à 2025
#### 2 Bac sciences PC/SVT/ST
#### PAGE 21

### 2) On répète l'expérience précédente trois fois de suite, en remettant dans l'une les deux boules tirées après chaque expérience.
Soit $X$ la variable aléatoire égale au nombre de fois où l'événement $A$ est réalisé.  
Montrons que $p(X = 1) = \frac{4}{9}$ puis déterminer la loi de probabilité de la variable aléatoire $X$.  
On répète la même expérience 3 fois de suite dans les mêmes conditions, donc la variable aléatoire $X$ suit une loi binomiale de paramètres $n = 3$ et $p = \frac{1}{3}$.

$$ p(X = k) = C_n^k p^k (1-p)^{n-k} $$
$$ p(X = 1) = C_3^1 \left( \frac{1}{3} \right)^1 \left( 1 - \frac{1}{3} \right)^{3-1} $$
$$ = 3 \times \frac{1}{3} \times \frac{4}{9} = \frac{4}{9} $$

$$ p(X = 0) = C_3^0 \left( \frac{1}{3} \right)^0 \left( 1 - \frac{1}{3} \right)^{3-0} $$
$$ = 1 \times 1 \times \left( \frac{2}{3} \right)^3 = \frac{8}{27} $$

$$ p(X = 2) = C_3^2 \left( \frac{1}{3} \right)^2 \left( 1 - \frac{1}{3} \right)^{3-2} $$
$$ = 3 \times \left( \frac{1}{9} \right) \times \left( \frac{2}{3} \right) = \frac{2}{9} $$

$$ p(X = 3) = C_3^3 \left( \frac{1}{3} \right)^3 \left( 1 - \frac{1}{3} \right)^{3-3} $$
$$ = 1 \times \left( \frac{1}{27} \right) \times 1 = \frac{1}{27} $$

| $x_i$ | 0   | 1  | 2  | 3 | 
|-------|-----|----|----|---|
| $P(X = x_i)$ | $\frac{8}{27}$ | $\frac{12}{27}$ | $\frac{6}{27}$ | $\frac{1}{27}$ |

### Exercice 15 (Examen 2016-Session-Annulé)
Une urne $U_1$ contient 7 boules indiscernables au toucher : 4 Boules rouges et 3 boules vertes.  
Une urne $U_2$ contient 5 boules indiscernables au toucher : 3 Boules rouges et 2 boules vertes.

1) On considère l’expérience suivante : on tire simultanément trois boules de $U_1$  
On considère les deux événements :
- $A : « Obtenir une boule rouge et deux boules vertes » 
- $B : « les trois boules tirées sont de même couleur »  
Montrer que : $P(A) = \frac{12}{35}$ et $P(B) = \frac{1}{7}$

2) On considère l’expérience suivante : On tire simultanément deux boules de l'urne $U_1$, puis on tire une seule boule de l'urne $U_2$. Soit $C$ l’événement : « les trois boules tirées sont rouges »  
Montrer que : $P(C) = \frac{6}{35}$

### Correction de l’exercice
Une urne $U_1$ contient 7 boules indiscernables au toucher : 4 Boules rouges et 3 boules vertes.  
Une urne $U_2$ contient 5 boules indiscernables au toucher : 3 Boules rouges et 2 boules vertes.

1) On considère l’expérience suivante : on tire simultanément trois boules de $U_1$.  
On considère les deux événements :
- $A : « Obtenir une boule rouge et deux boules vertes » 
- $B : « les trois boules tirées sont de même couleur »  
Montrer que : $P(A) = \frac{12}{35}$ et $P(B) = \frac{1}{7}$

On calcule Card $\Omega$ : ( le nombre des tirages possible)
```

<!-- Page 144 -->

```markdown
# Examens nationaux  
## Probabilités  corrigés de 2011 à 2025  
### 2 Bac sciences PC/SVT/ST  
#### PAGE 22  

Tirer simultanément trois boules parmi les sept boules de l'urne $U_1$ présente une combinaison de 3 parmi 7 d'où le nombres de tirages possibles est :

$$ \text{Card } \Omega = C^3_7 = \frac{7!}{3! \times 4!} = \frac{7 \times 6 \times 5}{3 \times 2 \times 1} = 35 $$

A : "On obtient une seule boule rouge et deux boules vertes"  
Tirées une boules rouges parmi 4 boules rouges de l'urne $U_1$ il se fait par $C^4_1$ = 4 façons différentes;  
Tirées deux boules vertes parmi 3 boules vertes de l'urne $U_1$ il se fait par $C^3_2$ = 3 façons différentes.

Donc le nombre de tirages qui réalise l'évènement $A$ est : 

$$ \text{card } A = C^4_1 \times C^3_2 = 4 \times 3 = 12 $$

Donc : 

$$ p(A) = \frac{\text{card } A}{\text{card } \Omega} = \frac{C^4_1 \times C^3_2}{C^3_7} = \frac{4 \times 3}{35} = \frac{12}{35} $$

Montrons que : $p(B) = \frac{1}{7}$  

L'événement B : "On obtient trois boules de même couleur"  
Donc les 3 boules tirées sont vertes ou les 3 boules tirées sont rouges.  
Les 3 boules tirées simultanément sont vertes parmi 3 boules vertes de $U_1$ on a : 

$$ C^3_3 = 1 $$

Les 3 boules tirées simultanément sont rouges parmi 4 boules rouges de $U_1$ on a : 

$$ C^4_3 = 4 $$

D'où : 

$$ \text{card } B = C^3_3 + C^4_3 = 1 + 4 = 5 $$

Donc : 

$$ p(B) = \frac{\text{card } B}{\text{card } \Omega} = \frac{C^3_3 + C^4_3}{C^3_7} = \frac{1 + 4}{35} = \frac{5}{35} = \frac{1}{7} $$

2) On considère l'expérience suivante : On tire au hasard et simultanément deux boules de l'urne $U_1$ puis on tire une boule de l'urne $U_2$, soit l'événement $C$ : "On obtient trois boules rouges".

Montrer que : $p(C) = \frac{6}{35}$  

On calcule card $\Omega$ (car on a une autre expérience)  
On tire simultanément deux boules parmi 7 boules de l'urne $U_1$ il se fait par $C^2_7 = 21$ façons différentes.  
On tire une boule de l'urne $U_2$ il se fait par $C^1_5 = 5$ façons différentes.  
Donc : 

$$ \text{card } \Omega = C^2_7 \times C^1_5 = 21 \times 5 = 105 $$

Soit l'événement $C$ : "On obtient trois boules rouges" donc "on tire simultanément deux boules rouges de l'urne $U_1$ et une boule rouge de l'urne $U_2$".  
On tire simultanément deux boules rouges parmi 4 boules rouges de l'urne $U_1$ il se fait par $C^2_4 = 6$ façons différentes.  
On tire une boule rouge parmi 3 boules rouges de l'urne $U_2$ il se fait par $C^1_3 = 3$ façons différentes.  
Donc : 

$$ p(C) = \frac{\text{card } C}{\text{card } \Omega} = \frac{C^2_4 \times C^1_3}{C^2_7 \times C^1_5} = \frac{6 \times 3}{105} = \frac{6}{35} $$  

## Exercice 16 (Examen 2015-Session-Normale)  

Une urne contient huit boules : 3 boules rouges, 3 boules vertes et 2 boules blanches (les boules sont indiscernables au toucher).  
On tire au hasard, successivement et sans remise deux boules de l'urne.  
On considère l'événement A suivant : "tirer au moins une boule blanche" et l'événement B suivant : "tirer deux boules de même couleur".  
1) Montrer que : $p(A) = \frac{13}{28}$ et $p(B) = \frac{1}{4}$  
2) Soit $X$ la variable aléatoire qui égale au nombre de boules blanches tirées.  
a) Montrer que $p(X = 2) = \frac{1}{28}$.  
b) Déterminer la loi de probabilité de la variable aléatoire $X$ et calculer l'espérance mathématique $E(X)$.
```

<!-- Page 145 -->

```markdown
# Examens nationaux
## Probabilités corrigés de 2011 à 2025

### Correction de l’exercice
1) Calculons $P(A)$ :  
   A : "tirer au moins une boule blanche"  
   Méthode (1)  
   A : "2 \times (B et \overline{B})"  
   Alors :  
   $$ P(A) = \frac{card(A)}{card(\Omega)} = \frac{2 \times (2 \times A_1^2 \times A_1^6) + A_2^2}{56} = \frac{2 \times 2 \times 6 + 2}{56} = \frac{26}{56} = \frac{13}{28} $$  

   Méthode (2)  
   A : "n'obtenir aucune boule blanche" c.a.d : $A^c$ : " $\overline{B}, \overline{B}$ "  
   Alors :  
   $$ P(A^c) = \frac{card(A^c)}{card(\Omega)} = \frac{A_2^2}{56} = \frac{6 \times 5}{56} = \frac{30}{56} = \frac{15}{28} $$  
   Donc :  
   $$ P(A) = 1 - P(A^c) = 1 - \frac{15}{28} = \frac{28 - 15}{28} = \frac{13}{28} $$  

   B"tirer deux boules de même couleur"  
   B : "R; R) ou (B; B) ou (V; V)"  
   $$ P(B) = \frac{card(B)}{card(\Omega)} = \frac{A_3^2 + A_2^2 + A_3^2}{56} = \frac{3 \times 2 \times 2 + 1 \times 3 \times 2}{56} = \frac{14}{56} = \frac{1}{4} $$  

2) Soit $X$ est la variable aléatoire qui est égal au nombre de boules blanches tirées.  
   $(X = 0)$ : "obtenir aucune boule blanche tirée".  
   $(X = 1)$ : "obtenir exactement une seule boule blanche".  
   $(X = 2)$ : "obtenir exactement deux boules blanches".  
   Alors les valeurs de $X$ sont $0; 1; 2$  
   a) Calculons $P(X = 2)$ :  
   $$ P(X = 2) = \frac{A_2^2}{56} = \frac{2}{56} = \frac{1}{28} $$  

b) Déterminer la loi de probabilité de la variable aléatoire $X$ et calculer l'espérance mathématique $E(X)$.  
$$ P(X = 0) = P(A^c) = \frac{15}{28}. $$  
Calculons $P(X = 1)$ :  
Méthode (1) :  
$(X = 1)$ : "2 \times (B et \overline{B})"  
Alors :  
$$ P(X = 1) = \frac{2 \times A_1^2 \times A_1^6}{56} = \frac{2 \times 2 \times 6}{56} = \frac{24}{56} = \frac{12}{28} = \frac{3}{7} $$  
Méthode (2)  
$$ P(X = 1) = 1 - P(X = 0) - P(X = 2) = 1 - \frac{15}{28} - \frac{1}{28} = 1 - \frac{16}{28} = \frac{12}{28} = \frac{3}{7} $$  

Donc la loi de probabilité :  
| $a_i$ | 0  | 1  | 2  |
|-------|----|----|----|
| $P(X = a_i)$ | $\frac{15}{28}$ | $\frac{12}{28}$ | $\frac{1}{28}$ |

L'espérance mathématique $E(X)$ :  
$$ E(X) = 0 \times \frac{15}{28} + 1 \times \frac{12}{28} + 2 \times \frac{1}{28} = \frac{14}{28} = \frac{1}{2}. $$  

### Exercice 17 (Examen 2024-Session-Normal)  
Une urne contient 5 jetons : deux jetons blancs, deux jetons verts et un rouge (les jetons sont indistinguables au toucher).  
On tire au hasard successivement et avec remise trois jetons de l'urne.  
Soit A : "les trois jetons tirés sont de même couleur".  
1) Montrer que $p(A) = \frac{17}{125}$.  
2) Soit $X$ la variable aléatoire qui est égale au nombre de jeton(s) blanc(s) tirés.  
   Déterminer la loi de probabilité de la variable aléatoire $X$.
```

<!-- Page 146 -->

```markdown
# Examens nationaux
## Probabilités corrigés de 2011 à 2025
### 2 Bac sciences PC/SVT/ST

### Correction de l’exercice

Une urne contient 5 jetons : deux jetons blancs, deux verts et un rouge (les jetons sont indiscernables au toucher).
On tire au hasard successivement et avec remise trois jetons de l’urne.

1) Soit l'événement $A$: "les trois jetons tirés sont de même couleur".

Montrons que $p(A) = \frac{17}{125}$.

On considère l'univers $\Omega$, Le tirage est successivement et avec remise donc card $(\Omega) = 5^3 = 125$.

$A$: $(B, B, B)$ ou $(V, V, V)$ ou $(R, R, R)$

$$ P(A) = \frac{card(A)}{card(\Omega)} $$

On a
$$ card(A) = 2^3 + 2^3 + 1^3 = 8 + 8 + 1 = 17 $$
Donc :
$$ P(A) = \frac{17}{125} $$

2) Soit $X$ la variable aléatoire qui est égale au nombre de jeton(s) blanc(s) tirés.

Déterminons la loi de probabilité de la variable aléatoire $X$.

Donc : les valeurs prises par la variable aléatoire $X$ sont: 0, 1, 2 et 3.

La loi de probabilité de $X$ :

$$ p(X = 0) = \frac{3^3}{125} = \frac{27}{125} ; \ (B, B, B) $$

$$ p(X = 1) = \frac{3 \cdot 2^1 \cdot 3^2}{125} = \frac{54}{125} $$

$$ p(X = 2) = \frac{3^2 \cdot 2^2}{125} = \frac{36}{125} ; \ B, B \ ou \ B, B, B, B $$

| $X = x_i$ | 0  | 1  | 2  | 3  |
|-----------|----|----|----|----|
| $P(X = x_i)$ | $\frac{27}{125}$ | $\frac{54}{125}$ | $\frac{36}{125}$ | $\frac{8}{125}$ |
```

<!-- Page 147 -->

```markdown
### Offre préparation concours 2026 – Prof Fayssal
- Plus 20 séances en vidéos de préparation Médecine
- Plus 20 séances en vidéos pour ENSA-ENSAM-UM6P
- Nouvelle offre à partir de mois 6 avec des séances en directes et interactives
- Deux livres de préparation Médecine-ENSA-ENSAM contiennent des astuces, plus de 20 concours blancs corrigés et la correction des anciens concours

Pour participer : 0681399067

---

**حصص خاصة لمباراة الطب (20 حصص) على منصة فيسبوك للرجوع إليها.**
**حصص لرؤية ZOOM عبر (20 حصص) ENSM - UM6P - ENSA.**
**بشكل كامل.**
- كتب شاملة في الرياضيات 📚 مع تصحيح وتطبيقات مفصلة. 
- الإعدادات السابقة.
- عرض و حصص مباشرة يوميا تبدأ من شهر 6 لتدريب دقيق.

0681399067 التواصل: ✉️ 
```

<!-- Page 148 -->

```markdown
# Prof Fayssal

## Résumés de cours
### Calcul d’intégrales
#### Deuxième bac sciences PC /SVT/SE

Prof fayssal  
0681399067  
Prof Fayssal  
```

<!-- Page 149 -->

```markdown
# Préparation à l’examen national de baccalauréat
## Fiche 04 : Etude des fonctions Primitives-Intégrales
**Prof : FAYSSAL**  
**Page : 05**

### 1) Définition d’une Primitive d’une fonction
On dit que la fonction $F$ est une primitive de $f$ si $F$ est dérivable sur $I$ et :  
$$ \forall x \in I, \; F'(x) = f(x) $$

#### Primitive des fonctions usuelles ; $r \in \mathbb{Q} / \{1\}$
- $ \int k \; dx = kx \; ; \; \int x^r \; dx = \frac{x^{r+1}}{r+1} $
- $ \int \frac{a}{x^2} \; dx = -\frac{a}{x} $
- $ \int \frac{1}{\sqrt{x}} \; dx = 2\sqrt{x} $
- $ \int e^x \; dx = e^x $
- $ \int a^x \; dx = \frac{1}{\ln(a)} a^x $
- $ \int \frac{k}{ax+b} \; dx = \frac{k}{a} \ln(ax + b) $
- $ \int \cos(x) \; dx = \sin(x) $
- $ \int \sin(x) \; dx = -\cos(x) $

### 2) Définition d’intégrale d’une fonction
Soit $F$ une primitive de $f$ sur $[a ; b]$  
L’intégrale de la fonction $f$ de $a$ à $b$ est le nombre réel noté par $$ \int_a^b f(x) \; dx $$ tel que :  
$$ \int_a^b f(x) \; dx = [F(x)]_a^b = F(b) - F(a) $$

**Remarque :**
- $$ \int_a^b f(x) \; dx = \int_b^a f(y) \; dy $$
- $$ \int_a^b f(x) \; dx = -\int_b^a f(x) \; dx $$

### 3) Propriétés d’intégrale :
- Linéarité de l’intégrale  
$$ \int_a^b f(x) + g(x) \; dx = \int_a^b f(x) \; dx + \int_a^b g(x) \; dx $$  
$$ \int_a^b k f(x) \; dx = k \int_a^b f(x) \; dx \; ; k \in \mathbb{R} $$  
- Relation de CHELS  
$$ \int_a^b f(x) \; dx = \int_c^a f(x) \; dx + \int_b^c f(x) \; dx $$

### 4) Intégration par parties
$$ \int_a^b u \; v' \; dx = [u v]_a^b - \int_a^b u' \; v \; dx $$

### 5) Aire d’un domaine plan
L’aire du domaine délimité par la courbe $(C_f)$ et l’axe des abscisses et les droites d’équations $x = a$ et $x = b$ est :  
$$ A(f) = \left(\int_a^b f(x) \; dx\right) \cdot u.a $$  
Avec $u.a$ est l’unité d’aire $1.a = ||\vec{u}|| \times ||\vec{l}||$  
Si : $f > 0 \; sur \; [a ; b]$ alors :  
$$ A(f) = \left(\int_a^b f(x) \; dx\right) \cdot u.a $$  
Si : $f < 0 \; sur \; [a ; b]$ alors :  
$$ A(f) = -\left(\int_a^b f(x) \; dx\right) \cdot u.a $$  


### Volume d’un solide de révolution
L’espace est rapporté à $\mathbb{R}^3 \; (0, \vec{i}, \vec{j}, \vec{k})$  
Le volume de solide de révolution engendré par la rotation de $(C_f)$ par rapport à $(Ox)$ (tour complet) sur $[a ; b]$ est :  
$$ V(f) = \int_a^b \pi (f(x))^2 \; dx \times u.V $$  
L’unité de volume est : $u.V = ||\vec{j}|| \times ||\vec{k}||$
```

<!-- Page 150 -->

```markdown
# Offre préparation concours 2026 – Prof Fayssal

- Plus 20 séances en vidéos de préparation Médecine
- Plus 20 séances en vidéos pour ENSA-ENSAM-UM6P
- Nouvelle offre à partir de mois 6 avec des séances en directes et interactives
- Deux livres de préparation Médecine-ENSA-ENSAM contiennent des astuces, plus de 20 concours blancs corrigés et la correction des anciens concours

Pour participer : 0681399067

---

## تفاصيل العرض
- حصص خاصة بمراجعة كلية الطب (20 حصة) على فيسبوك للدخول للإحتبار.
- حصص لمباريات ENSM - UM6P (20 حصة) عبر ZOOM.
- كتيبات شاملة في الرياضيات 📚 مع تصحيحـات مفصّلة وتمارين نوعية + تصحيح العبارات السابقة.
- عرض حصص مباشرة يوميا بإبتداء من شهر 6 لمدة 6 دقائق.

0681399067 للتواصل: 📧

---

RESULTATS DE SELECTION

- FELICITATIONS MOHAMED JADID
- OBTENTION DE LA PREMIERE ANNEE DE FORMATION EN DOCTORAT EN MEDECINE A LA FACULTE DE MEDECINE ET DE PHARMACIE D’OUJDA.

---

سلام عليكم أنا من التلاميذ داويك  
Je vous remercie beaucoup beaucoup rah ga3 doss efforts li deriti ma3na f classe ❤️  
O 7ta votre livre de préparation rah sawni bzaaf
```

<!-- Page 151 -->

```markdown
# Examens nationaux corrigés
## Intégrale de 2014 à 2024  deuxième bac sc PC/SVT/ST

### Examens nationaux corrigés de 2015 à 2024 Intégrales
#### Deuxième bac sciences PC/SVT/ST

## Partie 3 :
### Examens nationaux Intégrales

Collection FMATHS  
Prof fayssal  
www.elboutkhili.jimdosite.com
```

<!-- Page 152 -->

```markdown
# Examens nationaux
## Intégrales corrigées de 2011 à 2025
### 2 Bac sciences PC/SVT/ST

---

# Exercice 01 (Examen 2024-Session-Normal )
Soient les deux fonctions $u$ et $v$ définies sur $\mathbb{R}$ : $u(x) = e^x$ et $v(x) = x$

1. Tracer dans un même repère les courbes $(C_u)$ et $(C_v)$ des fonctions $u$ et $v$
2. Justifier graphiquement que $e^x - x > 0$ pour tout $x \in \mathbb{R}$
3. Calculer l'aire de la partie du plan délimité par la courbe $(C_u)$, la courbe $(C_v)$ et les droites d'équations $x = 0$ et $x = 1$.

---

# Exercice 02 (Examen 2024-Session-Rattrapage )
On considère la fonction définie sur $\mathbb{R}$ par $f(x) = e^{-x}\ln(1 + e^x)$.

Soit $(C_f)$ sa courbe dans un repère orthonormé $(O, \vec{i}, \vec{j})$.

Soit $\lambda$ un réel strictement positif.

1. Vérifier que : $$ \frac{1}{e^{x + 1}} = \frac{e^{-x}}{e^{-x} + 1} $$, pour tout $x \in \mathbb{R}$
2. Montrer que :
$$ \int_0^1 \frac{1}{e^{x + 1}} dx = \ln(2) - \ln(1 + e^2) $$
3. Montrer que :
$$ \int_0^{\lambda} f(x) dx = \ln(2) - f(\lambda) + \int_0^{\lambda} \frac{1}{e^{x + 1}} dx. $$
(Remarquer que $f(x) = \frac{1}{e^{x + 1}} - f'(x)$)

5. Déduire en fonction de $\lambda$, l'aire $A_{\lambda}$ de la partie du plan délimité par la courbe $(C_f)$, l'axe des abscisses et les droites d'équations $x = 0$ et $x = \lambda$.
6. Calculer $\lim_{\lambda \to +\infty} A_{\lambda}$.

---

# Exercice 03 (Examen 2023-Session-Normal )
Soit $f$ la fonction numérique définie sur $]0, +\infty[$ par 
$$ f(x) = 2 - \frac{2}{x} + (1 - \ln x)^2 $$
Et $(C)$ sa courbe représentative dans un repère orthonormé $(O, \vec{i}, \vec{j})$ (unité : 1cm)

1. La courbe $(C_g)$ ci-contre est la représentation graphique de la fonction $g : x \mapsto f(x) - x$ et qui s'annule en $x = 1$ ($\alpha \approx 0,3$).

Soit $(\Delta)$ la droite d'équation $y=x$
### a) À partir de la courbe $(C_g)$, déterminer le signe de la fonction $g$ sur $]0, +\infty[$.
### b) Déduire que la droite $(\Delta)$ est en dessous de $(C)$ sur l'intervalle $[\alpha; 1]$ et au-dessus de $(C)$ sur les intervalles $]0, \alpha[ $ et $[1; +\infty[$.

### 2) Vérifier que : $x \mapsto 2x - x\ln(x)$ est une primitive de : $x \mapsto 1 - \ln(x)$ sur $[1; \alpha]$.
### b) Par une intégrale par parties montrer que :
$$ \int_1^{\alpha} (1 - \ln x) dx = 5(1 - \alpha) + \alpha(4 - \ln \alpha) $$
En déduire en fonction de $\lambda$ l'aire du domaine délimité par la courbe $(C)$ et l'axe des abscisses et les droites d'équations $x = \alpha$ et $x = 1$.
```

<!-- Page 153 -->

```markdown
# Examens nationaux 
## Intégrales corrigées de 2011 à 2025

### Exercise 04 (Examen 2023-Session-Rattrapage)
Soit $f$ une fonction définie sur $[2;3]$ par :
$$f(x) = 1 + (x - 2)^2 \ln(x - 2)$$
(c) La courbe de $f$ dans un repère orthonormé $(O; \vec{i}; \vec{j})$ d’unité 1cm
Soit $\varepsilon \in [2;3)$

a) Par une intégrale par partie montrer que :
$$\int_{3}^{\alpha} (x - 2)^2 \ln(x - 2) dx = -\frac{1}{9} + \frac{1}{3}(\alpha - 2)^3\left(\frac{1}{3} - \ln(\alpha - 2)\right)$$

b) En déduire en fonction de l’aire $A(\alpha)$ du domaine délimité par la courbe $(C)$ les droites d’équations $y = 1 ; x = \alpha$ et $x = 3$  
Calculer $\lim_{x \to 2} A(\alpha)$

### Exercise 05 (Examen 2022-Session-Normal)
On considère la fonction $h$ définie sur $\mathbb{R}$ par :
$$h(x) = (x + 1)e^x$$
a. Vérifier que $x \mapsto x e^x$ est une primitive de la fonction sur $\mathbb{R}$; puis calculer 
$$I = \int_{0}^{1} h(x) dx$$
b. À l'aide d'une intégration par parties calculer 
$$I = \int_{0}^{1}(x + 1)e^x dx$$

### Exercise 06 (Examen 2022-Session-Rattrapage)
$f$ la fonction définie sur $[0, +\infty[$ par :
$$f(x) = x^4(\ln(x) - 1)^2; \, x > 0$$
$$f(0) = 0$$

1) On pose 
$$I = \int_{1}^{e} x^4(\ln(x) - 1) dx,$$ 
en utilisant une intégrale par partie, montrer que :
$$I = \frac{6 - e^5}{25}$$ 

Soit la fonction $h$ définie sur $[0, +\infty[$ par 
$$h(x) = x^5(\ln(x) - 1)^2$$

a) Vérifier que $h'(x) = 5f(x) + 2x^4(\ln(x) - 1)$  
b) Déduire que 
$$I = \int_{1}^{5} f(x) dx = -\frac{1}{5} - \frac{2}{I}$$ 
c) Calculer l’aire du domaine délimité par la courbe $(C)$ et l’axe des abscisses et les droites d’équations $x = 1$ et $x = e$ (unité : 1cm)

### Exercise 07 (Examen 2019-Session-Normal)
Soit $f$ la fonction numérique définie sur $[0; +\infty[$ par :
$$f(x) = x + \frac{1}{2} - \ln(x)$$
Et $(C)$ sa courbe représentative dans un repère orthonormé $(O; \vec{i}; \vec{j})$ (unité : 1 cm).

1. a) Montrer que pour tout $x \in [0; +\infty[$,
$$f(x) - x = -\frac{1}{2}(\ln(x) - 1)^2$$ et déduire la position relative de $(C)$ et $(D)$

2. a) Montrer que la fonction $H : x \mapsto x \ln x - x$ est une primitive de $h : x \mapsto \ln x$ sur $]0; +\infty[$.  
b) À l'aide d'une intégration par parties montrer que 
$$\int_{1}^{e} (\ln x)^2 dx = e - 2.$$ 

c) Calculer en cm$^2$ l’aire du domaine plan limité par $(C)$ et $(D)$ les droites d'équations $x = 1$ et $x = e.$

### Exercise 08 (Examen 2019-Session-Rattrapage)
Soit $f$ la fonction numérique définie sur $\mathbb{R}^*$ par :
$$f(x) = 2 + 8\left(\frac{x - 2}{x}\right)^2 e^{x-4}$$
Et $(C)$ sa courbe représentative dans un repère orthonormé $(O, \vec{i}, \vec{j})$ (unité : 1 cm).

a) Vérifier que la fonction $H : x \mapsto \frac{1}{x} e^{x-4}$ est une fonction primitive de la fonction $h : x \mapsto \frac{x - 1}{x^2} e^{x-4}$ pour tout $x \in \mathbb{R}^*$

b) Vérifier que $f(x) = 2 + 8e^{x-4} - \frac{32(x - 1)}{x^2} e^{x-4}$ pour tout $x \in \mathbb{R}^*$

c) Calculer l’intégrale 
$$\int_{2}^{4} e^{x-4} dx$$

d) Calculer en cm$^2$ l’aire du domaine plan limité par $(C)$ l’axe $(Ox)$ et les droites d’équation $x = 2$ et $x = 4$.
```

<!-- Page 154 -->

```markdown
# Examens nationaux
## Intégrales corrigées de 2011 à 2025

### 2 Bac sciences PC/SVT/ST 
PAGE 3

#### Exercice 09 (Examen 2018-Session-Normal)
Soit $f$ la fonction définie sur $[0,+\infty[$ par :
$$ f(x) = (x^2 - x)e^{-x} + x $$
Et $(C_f)$ sa courbe représentative dans un repère orthonormé $(O,\vec{i},\vec{j})$ (unité : 1 cm)

1) Montrer que $(C_f)$ est en dessous de la droite $(D): y = x$ sur l'intervalle $[0,1]$

2) Montrer que la fonction 
$$ h: x \mapsto (x^2 + 2x + 2)e^{-x} $$ est une primitive de la fonction $h: x \mapsto -x^2 e^{-x}$ sur $[0,1]$

3) Déduire que : 
$$ \int_0^1 x^2 e^{-x} dx = \frac{-2e^{-2}}{e} $$ 

4) Par intégration par parties, montrer que 
$$ \int_0^1 xe^{-x} dx = \frac{-e^{-2}}{e} $$ 

5) Déduire l'aire du domaine délimité par $(C_f)$, la droite $(D)$ et les droites d'équations $x=0$ et $x=1$.

#### Exercice 11 (Examen 2017-Session-Normal)
Soit la fonction $f$ définie sur $]0,+\infty[$ par :
$$ f(x) = x + \left( 1 - \frac{2}{x} \right) \ln x $$
$(C_f)$ est la courbe de $f$ dans un repère orthonormé d'unité 1 cm.

1. Résoudre dans l'intervalle $]0 + \infty[$, l'équation 
$$ \left( 1 - \frac{2}{x} \right) \ln x = 0 $$ 

b. En déduire que la courbe $(C_f)$ coupe la droite $(D)$ en deux points dont on déterminera les coordonnées.

c. Montrer que $f(x) \leq x$ pour tout $x$ appartenant à l'intervalle $[1, 2]$

2.a. Montrer que 
$$ \int_1^2 \frac{\ln x}{x} dx = \frac{1}{2} (\ln 2)^2 $$

b. Vérifier que $H: x \mapsto 2 \ln x - x$ est une primitive de 
$$ h: x \mapsto - \frac{2}{x} - 1 $$ sur $]0 + \infty[$.

c. Montrer, en utilisant une intégration par parties, que 
$$ \int_1^2 \left( \frac{2}{x} \right) \ln x \, dx = (1 - \ln 2)^2. $$ 

d. Calculer, en cm², l'aire du domaine limité par la courbe $(C_f)$, la droite $(D)$ et les droites d'équations $x = 1$ et $x = 2$.

#### Exercice 10 (Examen 2018-Session-Rattrapage)
Soit $f$ la fonction définie sur $]0,+\infty[$ par :
$$ f(x) = x + \left( 1 - \frac{2}{x} \right) \ln(x) $$
Et $(C)$ sa courbe représentative dans un repère orthonormé $(O,\vec{i},\vec{j})$ (unité : 1 cm)

1) Montrer que $(C_f)$ la courbe de $f$ est en dessous de la droite $(D): y = x$ sur l'intervalle $[1,2]$

2) Par intégration par parties, montrer que 
$$ \int_1^2 \left( \frac{2}{x} - 1 \right) \ln x \, dx = (1 - \ln 2)^2 $$ 

3) Déduire l'aire du domaine plan délimité par $(C_f)$, la droite $(D)$ et les droites d'équations $x = 1$ et $x = 2$.

#### Exercice 12 (Examen 2016-Session-Normal)
On considère la fonction numérique $f$ définie sur $\mathbb{R}$ par :
$$ f(x) = 2x - 2 + e^{2x} - 4x $$
$(C_f)$ la courbe de $f$ dans un repère orthonormé ($||\vec{i}|| = \vec{j}|| = 1cm$).

1) Soit la droite $(D)$ d'équation $y = 2x - 2$.

Montrer que la courbe $(C_f)$ est au-dessus de la droite $(D)$ sur l'intervalle $\ln(4); +\infty[$ et qu'elle est en-dessous de la droite $(D)$ sur l'intervalle $]-\infty; \ln(4]$.

2)a) Montrer que 
$$ \int_0^{\ln(4)} f^{(4)}(e^{2x - 4x}) dx = \frac{-9}{2}. $$ 

b) Calculer, en cm², l'aire du domaine plan limité par la courbe $(C_f)$, la droite $(D)$, l'axe des ordonnées et la droite d'équation $x = \ln(4)$.
```

<!-- Page 155 -->

```markdown
# Examens nationaux
## Intégrales corrigées de 2011 à 2025

### 2 Bac sciences PC/SVT/ST PAGE 4

#### Exercice 13 (Examen 2015-Session-Annulé)
On considère la fonction $f$ définie par :
$$ f(x) = \frac{1}{x(1 - \ln x)} $$
et $(C_f)$ est la courbe représentative de $f$ dans un repère orthonormé $(O ; \vec{i} ; \vec{j} ; \vec{k})$ d’unité 2cm.  
Et la fonction $g$ définit sur $]0, +\infty[$ par :
$$ g(x) = 1 - x^2(1 - \ln x) $$
$(C_g)$ est la courbe représentative de $g$ dans un repère orthonormé (voir figure)

1) a) Déterminer graphiquement le nombre de solutions de l’équation $(E): x \in [0 ; +\infty[ ; g(x) = 0$  
b) On donne le tableau de valeurs :
| $x$ | 2.1 | 2.2 | 2.3 | 2.4 |
|-----|-----|-----|-----|-----|
| $g(x)$ | -0.14 | -0.02 | 0.12 | 0.28 |
Montrer que l’équation $(E)$ admet une solution $\alpha$ telle que $2, 2 < \alpha < 2, 3$  
2)a) Montrer que $f(x) - x = -\frac{g(x)}{x(1-\ln x)}$ pour tout $x \in D_f$.  
b) Montrer que la droite $(\Delta): y = x$ coupe la courbe $(C_f)$ en deux points d’abscisses $1$ et $\alpha$.  
c) À partir de la courbe $(C_g)$, Déterminer le signe de $g(x)$ sur l’intervalle $[1, \alpha]$ et montrer que $f(x) - x \leq 0$ pour tout $x \in [1, \alpha]$  
3)a) Montrer que $$ \int_{1}^{\sqrt{e}} \frac{1}{x(1-\ln x)} dx = \ln 2. $$  
b) Calculer, en cm$^2$, l’aire du domaine limité par la courbe $(C_f)$, la droite $(D)$ et les droites d’équations $x = 1$ et $x = e$.

---

#### Exercice 14 (Examen 2015-Session-Normal)
On considère la fonction numérique $f$ définie sur $[0 ; +\infty[$ par :
$$ f(x) = \frac{x}{e^x - 2x} $$
et soit $(C)$ la courbe représentative de la fonction $f$ dans un repère orthonormé $(O ; \vec{i} ; \vec{j})$ (unité 1cm).

1) Montrer que $$ \frac{x e^{-x}}{e^x - 2x} \leq \frac{x}{e - 2} $$ pour tout $x \in [0 ; +\infty[$  
2)a) En utilisant une intégration par parties, montrer que $$ \int_{0}^{1} x e^{-x} dx = 1 - \frac{2}{e}. $$  
b) Soit, en cm$^2$, $A(E)$ l’aire du domaine plan limité par la courbe $(C)$, l’axe des abscisses et les deux droites d’équations $x = 0$ et $x = 1$. Montrer que $$ 1 - \frac{2}{e} \leq A(E) \leq \frac{1}{e - 2}. $$

---

#### Exercice 15 (Examen 2015-Session-Rattrapage)
On considère la fonction numérique $f$ définie sur $]0 ; +\infty[$ par :
$$ f(x) = 3 - \frac{1}{x^2} - \frac{2 \ln x}{x} $$
Et soit $(C)$ la courbe représentative de la fonction $f$ dans un repère orthonormé $(O ; \vec{i} ; \vec{j})$ ($||\vec{j}|| = 1cm$).

1) On admet que $f$ est strictement croissante sur $[1 ; e]$.  
Montrer que pour tout $x \in [1 ; e]$ on a $f(x) \geq 0$  
a) Montrer que $$ \int_{1}^{e} \frac{2 \ln x}{x} dx = 1. $$  
b) Calculer, en cm$^2$, l’aire du domaine plan limité par la courbe $(C)$, l’axe des abscisses et les deux droites d’équations $x = 1$ et $x = e$.
```

<!-- Page 156 -->

```markdown
# Examens nationaux
## Intégrales corrigées de 2011 à 2025
### 2 Bac sciences PC/SVT/ST

---

### Exercice 01 (Examen 2024-Session-Normale)

Soient les deux fonctions $u$ et $v$ définies sur $\mathbb{R}$ par : $u(x) = e^x$ et $v(x) = x$

1) Tracer dans un même repère les courbes $(C_u)$ et $(C_v)$ des fonctions $u$ et $v$  
2) Justifier graphiquement que $e^x - x > 0$ pour tout $x \in \mathbb{R}$  
3) Calculer l'aire de la partie du plan délimitée par la courbe $(C_u)$, la courbe $(C_v)$ et les droites d'équations $x = 0$ et $x = 1$

#### Correction de l'exercice

Soient les deux fonctions $u$ et $v$ définies sur $\mathbb{R}$ par : $u(x) = e^x$ et $v(x) = x$

1) Tracer dans un même repère les courbes $(C_u)$ et $(C_v)$ des fonctions $u$ et $v$  
2) Justifier graphiquement que $e^x - x > 0$ pour tout $x \in \mathbb{R}$  
On a pour tout $x \in \mathbb{R}$ ; $(C_u)$ est en dessus de $(C_v)$  
Donc pour tout $x \in \mathbb{R}$ : $u(x) - v(x) > 0$  
Alors pour tout $x \in \mathbb{R}$ : $e^x - x > 0$

3) Calculer l'aire de la partie du plan délimitée par la courbe $(C_u)$, la courbe $(C_v)$ et les droites d'équations $x = 0$ et $x = 1$  

$$ A(u,v) = \int_0^1 |u(x) - v(x)| \, dx \cdot u \cdot a $$
$$ = \int_0^1 |e^x - x| \, dx \cdot u \cdot a $$
$$ = \int_0^1 e^x - x \, dx \quad \text{car } e^x - x > 0 $$
$$ = \left[ e^x - \frac{x^2}{2} \right]_0^1 \cdot u \cdot a $$
$$ = \left( e - \frac{1}{2} - (e^0 - 0) \right) \cdot u \cdot a $$
$$ A = \left( e - \frac{3}{2} \right) \cdot u \cdot a $$

---

### Exercice 02 (Examen 2024-Session-Rattrapage)

On considère la fonction définie sur $\mathbb{R}$ par : $f(x) = e^{-x} \ln(1 + e^x)$  
Soit $(C_f)$ sa courbe dans un repère orthonormé $(O, \vec{i}, \vec{j})$.  
Soit $\lambda$ un réel strictement positif.

1) Vérifier que:  
$$ \frac{1}{e^{x+1}} = \frac{e^{-x}}{e^{-x}+1}, \quad \text{pour tout } x \in \mathbb{R} $$

2) Montrer que:  
$$ \int_0^\lambda \frac{1}{e^x + 1} \, dx = \ln(2) - \ln(1 + e^\lambda) $$

3) Montrer que:  
$$ \int_0^\lambda f(x) \, dx = \ln(2) - f(\lambda) + \int_0^\lambda \frac{1}{e^{x+1}} \, dx $$

(Remarquer que $f(x) = \frac{1}{e^{x+1}} - f'(x)$)

5) Déduire en fonction de $\lambda$, l'aire $A_\lambda$ de la partie du plan délimitée par la courbe $(C_f)$, l'axe des abscisses et les droites d'équations $x = 0$ et $x = \lambda$.  
5) Calculer $\lim_{\lambda \to +\infty} A_\lambda$.
```

<!-- Page 157 -->

```markdown
# Examens nationaux
## Intégrales corrigés de 2011 à 2025
### 2 Bac sciences PC/SVT/ST

### Correction de l'exercice 2
1) Vérifier que : 

$$ 
\frac{1}{e^{x}+1} = \frac{e^{-x}}{e^{-x}+1} 
$$ 

pour tout $x \in \mathbb{R}$ 

$$ 
\frac{1}{e^{x}+1} = \frac{1}{e^{(1 + e^{-x})}} = \frac{e^{-x}}{e^{-x}+1} 
$$ 

b) Montrer que : 

$$ 
\int_{0}^{1} \frac{1}{e^{x}+1} \, dx = \ln(2) - \ln(1 + e^{4}) 
$$ 

$$ 
\int_{0}^{1} \frac{1}{e^{x}+1} \, dx = \int_{0}^{\infty} \frac{e^{-x}}{e^{-x}+1} \, dx 
$$ 

$$ 
= -[\ln(e^{-x}+1)]_{0}^{1} = \ln(2) - \ln(1 + e^{4}) 
$$ 

2) Montrer que : 

$$ 
\int_{0}^{1} f(x) \, dx = \ln(2) - (2) + \int_{0}^{1} \frac{1}{e^{x}+1} \, dx 
$$ 

(Remarque $f(x) = \frac{1}{e^{x}+1} - f'(x)$)

On a $f(x) = \frac{1}{e^{x}+1} - f'(x)$

Donc 

$$ 
\int_{0}^{1} f(x) \, dx = -\int_{0}^{1} f'(x) \, dx + \int_{0}^{1} \frac{1}{e^{x}+1} \, dx 
$$ 

$$ 
= -[\int_{0}^{1} f'(x)dx + \int_{0}^{1} \frac{1}{e^{x}+1} \, dx 
$$ 

$$ 
= \int_{0}^{1} f(x) \, dx = \ln(2) - (2)
$$ 

3) Déduire en fonction de $\lambda$, l'aire $A_{\lambda}$ de la partie du plan délimitée par la courbe $(C_{f})$, l'axe des abscisses et les droites d'équations $x = 0$ et $x = \lambda$. 

$$ 
A = \int_{0}^{\lambda} |f(x)| \, dx \, u.a = \int_{0}^{\lambda} f(x) \, dx \, u.a 
$$ 

$$ 
= \ln(2) - f(\lambda) + \int_{0}^{1} \frac{1}{e^{x}+1} \, dx 
$$ 

4) Calculer $\lim_{\lambda \to +\infty} A_{\lambda}$. 

$$ 
\lim_{\lambda \to +\infty} A_{\lambda} = \lim_{\lambda \to +\infty} 2\ln(2) - f(\lambda) 
$$ 

$$ 
= -\ln(1 + e^{4}) = 2\ln(2) 
$$ 

Car 

$$ 
\lim_{\lambda \to +\infty} 0 = 0 
$$ 

### Exercice 03 (Examen 2023-Session-Normal)
Soit $f$ la fonction numérique définie sur $]0, +\infty[$ par 

$$ 
f(x) = 2 - \frac{2}{x} + (1 - \ln x)^{2} 
$$ 

Et $(C)$ sa courbe représentative dans un repère orthonormé $(O, i, j)$ (unité : 1cm)

1) La courbe $(C_{g})$ ci-contre est la représentation graphique de la fonction 

$$ 
g : x \mapsto f(x) - x \text{ et qui s'annule en } \alpha \in \{0, 3\}
$$ 

Soit $(A)$ la droite d'équation $y = x$

a) À partir de la courbe $(C_{g})$, déterminer le signe de la fonction $g$ sur $]0, +\infty[$ 

b) Déduire que la droite $(A)$ est en dessous de $(C)$ sur l'intervalle $[\alpha; 1]$ et au-dessus de $(C)$ sur les intervalles $]0, \alpha[ \text{ et } [1; +\infty[$ 

2)a) Vérifier que : $x \mapsto 2x - \ln(x)$ est une primitive de : $x \mapsto 1 - \ln(x)$ sur $[1; \alpha]$

b) Par une intégrale par partie montrer que 

$$ 
\int_{0}^{1}(1 - \ln x) \, dx = 5(1 - \alpha) + \alpha(4 - \ln \alpha) 
$$ 

c) En déduire en fonction de $\alpha$ l'aire du domaine délimité par la courbe $(C)$ et l'axe des abscisses et les droites d'équations $x = \alpha$ et $x = 1$. 

### Correction de l'exercice
```

<!-- Page 158 -->

```markdown
# Examens nationaux
## Intégrales corrigées de 2011 à 2025
### 2 Bac sciences PC/SVT/ST PAGE 7

1) La courbe $(C_g)$ ci-contre est la représentation graphique de la fonction $g : x \mapsto f(x)$ et qui s'annule en $\alpha$ et $1$ ($\alpha \approx 0, 3$)

Soit $(\Delta)$ la droite d’équation $y=x$

a) A partir de la courbe $(C_g)$, déterminer le signe de la fonction $g$ sur $]0; +\infty[$

La courbe $(C_g)$ est au-dessous de l'axe des abscisses sur l'intervalle $[\alpha; 1]$  
Donc $\forall x \in [\alpha; 1] : g(x) \geq 0$

La courbe $(C_g)$ est au-dessus de l'axe des abscisses sur $]0, \alpha [ \cup [1; +\infty[$ : $g(x) < 0$

b) Déduire que la droite $(\Delta)$ est en dessous de $(C)$ sur l'intervalle $[\alpha; 1]$ et au-dessus de $(C)$ sur les intervalles $]0, \alpha [ et [1; +\infty[$

On a $\forall x \in [\alpha; 1] : g(x) > 0$  
Donc la droite $(\Delta)$ est en dessous de $(C)$ sur l'intervalle $[\alpha; 1]$

On a $\forall x \in ]0, \alpha[$ : $g(x) < 0$  
Donc $\forall x \in [0, \alpha[ \cup [1; +\infty[ : f(x) - x < 0$

Donc la droite $(\Delta)$ est au-dessus de $(C)$ sur les intervalles $]0, \alpha[$ et $[\alpha; 1]$

2) a) Vérifier que $H : x \mapsto 2x - x \ln(x)$ est une primitive de $x \mapsto 1 - \ln(x)$ sur $[\alpha; 1]$

La fonction $x \mapsto 2x - x \ln(x)$ est dérivable sur $[1; \alpha]$ car c'est une somme de deux fonctions dérivables sur $[1; \alpha]$  
Et on a :  
$$ H'(x) = (2x - x \ln(x))' = 2 - (\ln x + 1) = 1 - \ln(x) $$

Donc $H : x \mapsto 2x - x \ln(x)$ est primitive de $x \mapsto 1 - \ln(x)$ sur $[\alpha; 1]$

b) Par une intégrale par parties montrer  
$$ \int_1^\alpha (1 - \ln x)^2 dx = 5(1 - \alpha) + \alpha(4 - \ln \alpha) $$

Posons  
$$ 
\begin{cases} 
u(x) = (1 - \ln x)^2 \\ 
v'(x) = 1 
\end{cases} 
$$ alors  
$$ 
\begin{cases} 
u'(x) = -2(1 - \ln x) \\ 
v(x) = x 
\end{cases} 
$$

Il s’ensuit donc :  
$$ I = \int_1^\alpha (1 - \ln x)^2 dx $$  
$$ = [x(1 - \ln x)^2]_{1}^{\alpha} + 2 \int_1^\alpha 1 - \ln x dx $$  
$$ = 1 - \alpha(1 - \ln \alpha) + 2 \int_1^\alpha 1 - \ln x dx $$
$$ = 1 - \alpha(1 - \ln \alpha) + 2[2x - x \ln(x)]_{1}^{\alpha} $$  
$$ = 1 - \alpha(1 - \ln \alpha) + 2 - 2\alpha + \alpha \ln \alpha $$  
$$ = 1 - \alpha + 2 \alpha \ln \alpha + 4 - 4 \alpha + 2 \alpha = 5 - 5\alpha + \alpha(4 - \ln \alpha) $$
```

<!-- Page 159 -->

```markdown
# Examens nationaux
## Intégrales corrigées de 2011 à 2025
### 2 Bac sciences PC/SVT/ST
#### PAGE 8

Correction de l’exercice

Soit $\alpha \in [2; 3[$;  
a) Par une intégrale par partie montrer que :  
$$ I = \int_3^\alpha (x - 2)^2 \ln(x - 2) \, dx = -\frac{1}{9} + \frac{1}{3} (\alpha - 2) $$
2) $ \left( \frac{1}{3} - \ln(\alpha - 2) \right) $

$$ I = \int_3^\alpha (x - 2)^2 \ln(x - 2) \, dx $$

Posons 
$$
\begin{cases}
u(x) = \ln(x - 2) \\
v'(x) = (x - 2)^2
\end{cases}
$$
alors 
$$ u'(x) = \frac{1}{x - 2} \quad v(x) = \frac{1}{3} (x - 2)^3 $$

Il s'ensuit donc :
$$ I = \int_3^\alpha (x - 2)^2 \ln(x - 2) \, dx $$
$$
= \left[ \frac{1}{3} (x - 2)^3 \ln(x - 2) \right]_3^\alpha - \frac{1}{3} \int_3^\alpha (x - 2)^3 \, dx
$$
$$
= \left[ \frac{1}{3} (x - 2)^3 \ln(x - 2) \right]_3^\alpha - \frac{1}{9} [(x - 2)^3]_{3}^{\alpha}
$$
$$
= -\frac{1}{3} (\alpha - 2)^3 \ln(\alpha - 2) + \frac{1}{9} (1 - (2 - \alpha)^3)
$$
$$
= -\frac{1}{9} + \frac{1}{9}(\alpha - 2)^3 \left( \frac{1}{3} - \ln(\alpha - 2) \right)
$$

c) En déduire en fonction de $\alpha$ l’aire $A(\alpha)$ du domaine délimité par la courbe $(C)$ les droites d’équations $y = 1 ; x = \alpha$ et $x = 3$  
Soit $\alpha \in [2; 3]$: 
$$ f(x) = 1 + (x - 2)^2 \ln(x - 2) $$
(C) la courbe de $f$ dans un repère orthonormé $(O; \vec{i}; \vec{j})$ d’unité 1 cm

a) Par une intégrale par partie montrer que :  
$$ \int_3^\alpha (x - 2)^2 \ln(x - 2) \, dx $$
b) En déduire en fonction de $\alpha$ l’aire $A(\alpha)$ du domaine délimité par la courbe $(C)$ les droites d’équations $y = 1 ; x = \alpha$ et $x = 3$  
c) Calculer $\lim_{x \to 2^+} A(\alpha)$
```

<!-- Page 160 -->

```markdown
# Examens nationaux 
## Intégrales corrigées de 2014 à 2025

**Prof FAYSAL : 0681399067**  
**Prof Fayssal**

---

Soit $\alpha \in [2; 3]$  
On sait que $A(\alpha) = \int_{3}^{\alpha} |f(x) - y| \, dx \times u.a$  
Donc  
$$ |f(x) - y| = 1 - 1 + \int_{3}^{\alpha} (x - 2)^2 \ln(x - 2) $$
$$ = \left|\int_{3}^{\alpha} (x - 2)^2 \ln(x - 2)\right|  $$
$$ = \int_{3}^{\alpha} (x - 2)^2 \ln(x - 2) $$  
Car $(x - 2)^2 \ln(x - 2) > 0 \, \text{sur} \, [2; 3]$  
Et on a $u.a = \| \|\| \| \| = 1 \, cm^2$  
$$ A(\alpha) = \int_{3}^{\alpha} |f(x) - y| \, dx \, \times \, cm^2 $$
$$ = \int_{3}^{\alpha} (x - 2)^2 \ln(x - 2) \, dx \, \times \, cm^2 $$  
$$ = \int_{3}^{\alpha} -(x - 2)^2 \ln(x - 2) \, dx \, \times \, cm^2 $$  
$$ = -\left[-\frac{1}{9} + \frac{1}{3}(\alpha - 2)^3\left(\frac{1}{3} - \ln(\alpha - 2)\right)\right] \, cm^2 $$
$$ = \left[\frac{1}{9} - \frac{1}{3}(\alpha - 2)^3\left(\frac{1}{3} - \ln(\alpha - 2)\right)\right] \, cm^2 $$

c) Calculer $\lim_{x \to 2^+} A(x)$  
$$ \lim_{x \to 2^+} A(x) = \lim_{x \to 2^-} \frac{1}{9} - \frac{1}{3}(\alpha - 2)^3(3 - \ln(\alpha - 2)) $$  
On pose $t = \alpha - 2$  
Alors $x \to 2^+ \text{ donc } t \to 0^+$  
$$ = \lim_{t \to 0} \frac{1}{9} - \frac{1}{3} t^3 (3 - \ln t) $$  
$$ = \lim_{t \to 0} \frac{1}{9} - \frac{1}{9} t^3 \int t = \frac{1}{9} $$

---

# Solution de l’exercice

On considère la fonction $h$ définie sur $\mathbb{R}$ par :  
$$ h(x) = (x + 1)e^x $$

a) Vérifier que $x \mapsto xe^x$ est une primitive de la fonction $h$ sur $\mathbb{R}$ ; puis calculer $I = \int_{-1}^{0} h(x) \, dx$.  

Soit $x \in \mathbb{R}$, on pose $H(x) = xe^x$  
La fonction $H$ est dérivable sur $\mathbb{R}$ et on a :  
$$ H'(x) = 1 \times e^x + xe^x $$  
$$ = (x + 1)e^x $$  
$$ = h(x) $$  
Donc $x \mapsto xe^x$ est une primitive de la fonction $h$  
$$ I = \int_{-1}^{0} h(x) \, dx = [H(x)]_{-1}^{0} $$  
$$ = H(0) - H(-1) $$  
$$ = 0 - (-e^{-1}) = e^{-1} $$

b) À l’aide d’une intégration par parties calculer $J = \int_{-1}^{0} (x + 1)^2 e^x \, dx$ ; Posons  
$$ u(x) = (x + 1)^2 $$  
$$ v'(x) = e^x $$  
alors  
$$ u'(x) = 2(x + 1)(x) = 2(x + 1) $$  
$$ v(x) = e^x $$  
Il s’ensuit donc :  
$$ J = \int_{-1}^{0} (x + 1)^2 e^x \, dx $$  
$$ = \left[(x + 1)^2 e^x\right]_{-1}^{0} - \int_{-1}^{0} 2(x + 1)e^x \, dx $$  
$$ = 1 - 2 \int_{-1}^{0} (x + 1)e^x \, dx $$  
$$ = 1 - 2 \cdot 21 $$  
$$ = 1 - e^{-1} $$

---

**Exercice 05 (Examen 2022-Session-Normal)**
a. Vérifier que $h(x) = (x + 1)e^x$  
b. À l’aide d’une intégration par parties calculer  
$$ I = \int_{-1}^{0} (x + 1)e^x \, dx $$
```

<!-- Page 161 -->

```markdown
# Examens nationaux 
## Intégrales corrigées de 2011 à 2025

**Prof FAYSAL :** 0681399067  
**Prof fayssal**  

## Exercice 06 (Examen 2022-Session-Rattrapage)  
Soit $f$ la fonction numérique définie sur $[0, +\infty[$ par
$$
f(x) = 
\begin{cases} 
x^4(\ln x - 1)^2 & ; x > 0 \\
0 & 
\end{cases}
$$

Et ($C$) sa courbe représentative dans un repère orthonormé $(O, \vec{i}, \vec{j})$ (unité : 1cm)  
1) On pose $I = \int_1^e x^4(\ln x - 1) \, dx$, en utilisant une intégrale par partie, montrer que 
$$
I = \frac{6 - e^5}{25}
$$

2) On considère la fonction $h$ définit sur l’intervalle $]0, +\infty[$ par
$$
h(x) = x^5(\ln x - 1)^2
$$
a) Vérifier que $h'(x) = 5f(x) + 2x^4(\ln x - 1)$  

$$
h'(x) = 5x^4(\ln x - 1)^2 + 2x^5 \cdot \frac{1}{x}(\ln x - 1)
= 5f(x) + 2x^4(\ln x - 1)
$$

b) Déduire que 
$$
\int_1^e f(x) \, dx = -\frac{1}{5} I
$$  

Sur $h'(x) = 5f(x) + 2x^4(\ln x - 1)$  
Donc $f(x) = \frac{1}{5} h'(x) - \frac{2}{5} x^4(\ln x - 1)$  
Donc : 
$$
\int_1^e f(x) \, dx = \frac{1}{5} \int_1^e h'(x) \, dx - \frac{2}{5} \int_1^e 2x^4(\ln x - 1) \, dx
$$  

$$
= \frac{1}{5} [h(x)]_1^e - \frac{2}{5} I
$$  

$$
= \frac{1}{5} (0 - 1) - \frac{2}{5} I
$$

$$
= -\frac{1}{5} - \frac{2}{5} I
$$

3) b) Calculer l’air du domaine délimité par la courbe $(C)$ et l’axe des abscisses et les droites d’équations $x = 1$ et $x = e$

On a $(C_f)$ est en dessus de $(Ox)$; $y = x$ sur l’intervalle $[1, e]$.  
Donc $\forall x \in [1; e]: |f(x)| = f(x)$  
$$
A = \int_1^e |f(x)| \, dx \times u.a.
= \int_1^e f(x) \, dx \times cm^2
= \left(-\frac{1}{5} - \frac{2}{5} I\right) cm^2
$$  

$$
= \left(-\frac{1}{5} - \frac{2}{5} \left(\frac{6 - e^5}{25}\right)\right) cm^2
$$  

$$
= \left(\frac{2}{5} \left(\frac{e^5 - 6}{25}\right)\right) cm^2
$$
```

<!-- Page 162 -->

```markdown
# Examens nationaux
## Intégrales corrigées de 2011 à 2025
### 2 Bac sciences PC/SVT/ST
PAGE 1 1

## Exercice 07 (Examen 2019-Session-Normal)
Soit $ f $ la fonction numérique définie sur $[0; +\infty[ ;$
$$ f(x) = x + \frac{1}{2} - \ln x + \frac{1}{2} (\ln x)^2. $$
Et $(C)$ sa courbe représentative dans un repère orthonormé $(O; \, i; \, j)$ (unité : $ 1 \, cm $).
1. a) Montrer que pour tout $ x \in [0; +\infty[ $
$$ f(x) - x = \frac{1}{2} (\ln x - 1)^2 $$
et déduire la position relative de $(C)$ et $(\Delta)$.  
b) Montrer que la fonction $ H : x \mapsto x \ln x - x $ est une primitive de $ h : x \mapsto \ln x $ sur $ ]0; +\infty[ $  
b) À l'aide d'une intégration par parties montrer que 
$$ \int_1^{e} (\ln x)^2 \, dx = e - 2. $$
c) Calculer en $ cm^2 $ l'aire du domaine plan limité par $(C)$ et $(\Delta)$ les droites d'équations $ x = 1 $ et $ x = e $.

### Correction de l’exercice
1) Montrer que pour tout $ x \in ]0; +\infty[ $
$$ f(x) - x = \frac{1}{2} (\ln x - 1)^2 $$
et déduire la position relative de $(C)$ et $(\Delta)$.  
$$ f(x) - x = \frac{1}{2} - \ln x + \frac{1}{2} (\ln x)^2 $$
$$ = \frac{1}{2} (1 - 2 \ln x + (\ln x)^2) $$
$$ = \frac{1}{2} (1 - \ln x)^2 \geq 0 $$
Donc la courbe $(C)$ est en dessous de la droite $(\Delta)$ sur $ ]0; +\infty[ $  
De plus $ f(x) - x = 0 $
$$ \Leftrightarrow \, (\ln x - 1)^2 = 0 $$
$$ \Leftrightarrow \, x = e $$
Donc la courbe $(C)$ est tangente à la droite $(\Delta)$ au point $ A(e ; e) $

### 2)a) Montrer $ H : x \mapsto x \ln (x) - x $ est une primitive de la fonction $ h : x \mapsto \ln(x) $ sur $ ]1; +\infty[ $
b) Par parties montrer que 
$$ \int_1^{e} (\ln x)^2 \, dx = e - 2. $$

Posons $ u = (\ln x)^2 \; \text{alors} \; u'(x) = \frac{2 \ln(x)}{x} \; \text{et} \; v(x) = x $  
Alors 
$$ \int_1^{e} (\ln x)^2 \, dx = \left[ x (\ln x)^2 \right]_{1}^{e} - \int_1^{e} 2 \ln(x) \, dx $$
$$ = (e - 0) - 2 \int_1^{e} \ln(x) \, dx $$
$$ = (e - 0) - 2 \left[ x \ln(x) - x \right]_{1}^{e} $$
$$ = (e - 0) - 2(0 - (-1)) $$
$$ = e - 2(0 - (-1)) $$
$$ = e - 2. $$

c) Calculer en $ cm^2 $ l'aire du domaine plan limité par $(C)$ et $(\Delta)$ les droites d'équations $ x = 1 $ et $ x = e $.
Soit $ x \in [1; e] \, \, \, f(x) - x \geq 0 $ donc 
$$ |f(x) - x| = f(x) - x $$
$$ A = \int_1^{e} (f(x) - x)\, dx \, u.a. $$
$$ = \int_1^{e} \frac{1}{2} - \ln(x) + \frac{1}{2} (\ln x)^2 \, dx $$
$$ = \left[ \frac{1}{2} x \right]_{1}^{e} - \int_1^{e} \ln(x) \, dx + \frac{1}{2} \int_1^{e} (\ln x)^2 \, dx $$
$$ = \left( \frac{1}{2} e - \frac{1}{2} \cdot 1 \right) - [x \ln(x) - x]_{1}^{e} + \frac{1}{2} (e - 2)  $$
$$ = \left( \frac{e - 1}{2} - (e - 1 + 1) + \frac{1}{2} (e - 2) \right) \, cm^2 $$
$$ = (e - \frac{5}{2}) \, cm^2 $$
```

<!-- Page 163 -->

```markdown
# Examens nationaux
## Intégrales corrigées de 2011 à 2025
### 2 Bac sciences PC/SVT/ST PAGE 12

## Exercice 08 (Examen 2019 - Session - Rattrapage)

Soit $f$ la fonction numérique définie sur $\mathbb{R}^*$ par :
$$ f(x) = 2 + 8 \left( \frac{x - 2}{x} \right)^2 e^{-4} $$
Et (C) sa courbe représentative dans un repère orthonormé $(O,\ i,\ j)$ (unité : 1 cm)
a) Vérifier que la fonction $H : x \mapsto -\frac{1}{x} e^{-4} $ est une fonction primitive de la fonction $h : x \mapsto \frac{x^{-1}}{x^2} e^{-4} $ sur $[2, 4]$  
b) Vérifier que $f(x) = 2 + 8 e^{-4} - 32 \left( \frac{x - 1}{x} \right)^2 e^{-4}$ pour tout $x \in \mathbb{R}^*$  
c) Calculer l'intégrale $$ \int_2^4 e^{-4}dx $$  
d) Calculer en cm² l’aire du domaine plan limité par (C) l’axe (Ox) et les droites d'équation $x = 2$ et $x = 4$

### Correction de l'exercice

1) a) Vérifions que la fonction $H : x \mapsto \frac{1}{x} e^{-4}$ est une fonction primitive de la fonction $h : x \mapsto \frac{x^{-1}}{x^2} e^{-4}$ sur l'intervalle $[2, 4]$

Soit $x \in [2, 4]$, on a : $H(x) = \frac{1}{x} e^{-4}$
derivable sur $\mathbb{R}^*$ et on a :
$$ H'(x) = \left( \frac{1}{x} e^{-4} \right)' = \left( \frac{1}{x} \right) e^{-4} + \frac{1}{x} \left( e^{-4} \right)' $$
$$ H'(x) = -\frac{1}{x^2} e^{4} + \frac{1}{x} e^{-4} \left( -4 \right) $$

$$ H'(x) = \frac{-1}{x^2} e^{4} + 4\frac{1}{x} e^{-4} $$

Donc : $H$ est une primitive de la fonction $h$ sur $[2, 4]$

### c) Calculons l'intégrale
$$ \int_2^4 e^{-4}dx = \int_2^4 e^{-4}dx = \int_2^4 (e^{-4})dx $$
$$ = [e^{-4}]_2^4 = e^{-2} - e^{-2} = 1 - \frac{1}{e^2} $$

### d) Soit $A$ l'aire, en cm², calculer l’aire du domaine plan limité par (C), l’axe des abscisses et les droites dont d’équations $x = 2$ et $x = 4$.

$$ A = \left( \int_2^4 |f(x)|dx \right) \text{ cm}^2 \ \text{ou} \ \forall x \in [2,4], f(x) \geq 0 $$
$$ = \int_2^4 f(x)dx = \int_2^4 \left( 2 + 8 e^{-4} - 32 \left( \frac{x - 1}{x} \right)^2 e^{-4} \right) dx $$
$$ = \int_2^4 \left( 2 + 8 e^{-4} - 32 \frac{(x - 1)^2}{x^2} e^{-4} \right) dx $$
$$ = \left[ 2x + 8e^{-4}x - 32 \int_2^4 \frac{(x - 1)^2}{x^2} e^{-4} dx \right]_2^4 $$

$$ A = \left[ 2x + e^{-4} \left( 8 \frac{(x-2)^{4}}{2} \right) \right]_2^4 $$

$$ = 8 + (8 - 8) - \left(4 + e^{-2}(8 - 10)\right) $$
$$ = 8 - 4 + 8 e^{-2}= 4 + 4 e^{-2} \ \text{cm}^2 $$

D'où : $A = \left( 4 + \frac{8}{e^2} \right) cm^2$
```

<!-- Page 164 -->

```markdown
# Examens nationaux
## Intégrales corrigées de 2011 à 2025
### 2 Bac sciences PC/SVT/ST
#### PAGE 13

## Exercice 09 (Examen 2018-Session-Normal)

Soit $f$ la fonction définie sur $[0,+\infty[$ par :
$$
f(x) = (x^{2} - x)e^{-x} + x
$$
Et $C$ sa courbe représentative dans un repère orthonormé $(O, i, j)$ (unité : 1 cm)

1) Montrer que $(Cf)$ est en dessous de la droite $(D)$ ; $y = x$ sur l'intervalle $[0, 1]$

2) Montrer que la fonction $H : x \mapsto (x^{2} + 2x + 2)e^{-x}$ est une primitive de la fonction $h : x \mapsto -x^{2}e^{-x}$ sur $[0, 1]$

3) Déduire que : 
$$
\int_{0}^{1} x^{2} e^{-x} dx = \frac{2e^{-5}}{e}
$$

4) Par intégration par parties, montrer que 
$$
\int_{0}^{1} xe^{-x} dx = \frac{-e^{-2}}{e}
$$
Posons $u(x) = x$ et $v'(x) = e^{-x}$ alors $\; u'(x) = 1$ et $v(x) = -e^{-x}$

Il s'ensuit donc :
$$
\int_{0}^{1} xe^{-x} dx = [-e^{-x}]_{0}^{1} + \int_{0}^{1} e^{-x} dx
$$
$$
= -e^{-1} - [e^{-x}]_{0}^{1} = -e^{-1} - 1 + 1 = -2e^{-1} + 1 = \frac{e - 2}{e}
$$

5) Déduire l'aire du domaine délimité par $(Cf)$, la droite $(D)$ et les droites d’équations $x=0$ et $x=1$

On a $(Cf)$ est en dessous de $(D)$ ; $y = x$ sur l'intervalle $[0, 1]$

Donc $\forall x \in [0, 1] : |f(x) - y| = y - f(x)$

$$
A = \int_{0}^{1} |f(x) - y| dx \; u.a
 = \int_{0}^{1} y - f(x) dx \; u.a
 = \int_{0}^{1} -(x^{2} - x)e^{-x} dx.cm^{2}
 = \left(\int_{0}^{1} xe^{-x} dx - \int_{0}^{1} x^{2} e^{-x} dx\right) cm^{2}
$$
$$
= \left(\frac{e - 2}{e} - \frac{2e - 5}{e}\right) cm^{2}
= \frac{(3 - e)}{e} cm^{2}
$$
```

<!-- Page 165 -->

```markdown
# Examens nationaux
## Intégrales corrigées de 2011 à 2025

### 2 Bac sciences PC/SVT/ST  
**PAGE 14**

#### Exercices 10 (Examen 2018-Session-Rattrapage)

Soit $f$ la fonction définie sur $]0,+\infty[$ par :  
$$ f(x) = x + \left( 1 - \frac{2}{x} \right) \ln(x) $$  
et (C) sa courbe représentative dans un repère orthonormal $(O, i, j)$ (unité : 1 cm)

1) Montrer que $(Cf)$ la courbe de $f$ est en dessous de la droite $(D)$ ; $y = x$ sur l'intervalle $[1, 2]$

2) Par intégration par parties, montrer que  
$$ \int_1^2 \left( \frac{2}{x - 1} \right) \ln x \, dx = (1 - \ln 2)^2 $$

3) Déduire l'aire du domaine plan délimité par $(Cf)$, la droite $(D)$ et les droits d'équations $x = 1$ et $x = 2$

---

### Solution

Soit $f$ la fonction définie sur $]0,+\infty[$ par :  
$$ f(x) = x + \left( 1 - \frac{2}{x} \right) \ln(x) $$  

1) Montrer que $(Cf)$ la courbe de $f$ est en dessous de la droite $(D)$ ; $y = x$ sur l'intervalle $[1, 2]$  
Soit $x \in [1, 2]$  
$$ f(x) - x = + \left( 1 - \frac{2}{x} \right) \ln(x) - x $$  
$$ = \left( \frac{x - 2}{x} \right) \ln(x) $$  
Pour $1 \leq x \leq 2$, $0 \leq \ln(x) \leq 0 \Rightarrow f(x) - x \leq 0$  
Donc $(Cf)$ est en dessous de $(D)$ ; $y = x$ sur l'intervalle $[1, 2]$

2) Par intégration par parties, montrer que  
$$ \int_1^2 \left( \frac{2}{x - 1} \right) \ln x \, dx = (1 - \ln 2)^2 $$  

Posons  
$$ u(x) = \ln(x) $$  
$$ v'(x) = \frac{2}{x - 1} \Rightarrow v(x) = 2 \ln(x) - x $$

3) Déduire l'aire du domaine plan délimité par $(Cf)$, la droite $(D)$ et les droits d'équations $x = 1$ et $x = 2$  
On a $(Cf)$ est en dessous de $(D)$ ; $y = x$ sur l'intervalle $[1, 2]$  
Donc $\forall x \in [1, 2]$ :  
$$ A = \int_0^2 |f(x) - y| \, dx \cdot u \cdot a $$  
$$ = \int_0^2 y - f(x) \, dx \cdot u \cdot a $$  
$$ = \int_0^2 \left( 1 - \frac{2}{x} \right) \ln(x) \, \text{cm}^2 $$  
$$ = \int_0^2 \left( \frac{2}{x} - 1 \right) \ln(x) \, dx \cdot \text{cm}^2 $$  
$$ = (1 - \ln 2)^2 \, \text{cm}^2 $$
```

<!-- Page 166 -->

```markdown
# Examens nationaux
## Intégrales corrigées de 2014 à 2025

### 2 Bac sciences PC/SVT/ST PAGE 15

#### Exercice 11 (Examen 2017-Session-Normal)
On considère la fonction $f$ définie sur $|0,+\infty[$ par : $f(x) = x + \left(1 - \frac{2}{x}\right) \ln x$  
$(C_f)$ Est la courbe représentative de $f$ dans un repère orthonormé $(O; \vec{i}; \vec{j})$ d’unité 1cm

1. a. Résoudre dans l’intervalle $|0 + \infty[$, l’équation $\left(1 - \frac{2}{x}\right)\ln x = 0$  
b. En déduire que la courbe $(C_f)$ coupe la droite $(D)$ en deux points dont on déterminera les coordonnées.  
c. Montrer que $f(x) \leq x$ pour tout $x \in [1; 2]$  
1.a. Montrer que $$ \int_{1}^{2} \frac{\ln x}{x} \, dx = \frac{1}{2} (\ln 2)^{2} $$  
b. Vérifier que $H: x \rightarrow 2 \ln x - x$ est une primitive de  
$h: x \rightarrow \frac{-2}{x} - 1$ sur $|0 + \infty|$.  
c. Montrer, en utilisant une intégration par parties, que $$ \int_{1}^{2} \left( \frac{2}{x} - 1\right) \ln x \, dx = (1 - \ln 2)^{2}. $$  
d. Calculer, en $cm^{2}$, l’aire du domaine limité par la courbe $(C_f)$, la droite $(D)$ et les droites d’équations $x = 1$ et $x = 2$.

### Correction de l’exercice
1. a) Résolvons dans $]0, +\infty[$ l’équation :  
$$ \left(1 - \frac{2}{x}\right)\ln x = 0 $$  
$$ \left(1 - \frac{2}{x}\right)\ln x = 0 \Leftrightarrow 1 - \frac{2}{x} = 0 \text{ ou } \ln x = 0 $$  
$$  x - 2 = 0 \text{ ou } x = e^{0} $$  
$$ \Leftrightarrow x = 2 \text{ ou } x = 1 $$  
D'où l'équation $$ \left(1 - \frac{2}{x}\right) \ln x = 0 $$ admet deux solutions dans $|0, +\infty|$ qui sont 1 et 2.

b) Déduisons que la courbe $(C)$ coupe la droite $(D)$ en deux points dont on déterminera les coordonnées.  
$f(x) - x = \left(1 - \frac{2}{x}\right) \ln x$  
D'où $f(x) - x = 0 \Leftrightarrow x = 2$ ou $x = 1$  
Ainsi la courbe $(C)$ coupe la droite $(D)$ en deux points $A(1, 1)$ et $B(2, 2)$.

c) Montrons que $f(x) \leq x$ pour tout $x \in [1; 2]$  
On a $f(x) - x = \left(1 - \frac{2}{x}\right) \ln x$ le tableau de signe de $f(x) - x$ est :  

\[
\begin{array}{|c|c|c|c|c|}
\hline
x & 1 & 2 & 0 & +\infty \\
\hline
1 - \frac{2}{x} & + & - & - & - \\
\hline
\ln x & 0 & + & + & + \\
\hline
\end{array}
\]

Donc $f(x) \leq x$ pour tout $x \in [1; 2]$  
6) a) Montrons que $$ \int_{1}^{2} \frac{\ln x}{x} \, dx = \int_{1}^{2} \ln' (x) \ln x \, dx $$  
$$ = \int_{1}^{2} \frac{1}{2} ((\ln (x))^{2})' \, dx $$  
$$ = \left[\frac{1}{2} (\ln (x))^{2}\right]_{1}^{2} $$  
$$ = \frac{1}{2}(\ln 2)^{2} - 0 $$  
$$ = \frac{1}{2}(\ln 2)^{2} $$
```

<!-- Page 167 -->

```markdown
# Examens nationaux Intégrales corrigées de 2014 à 2025

## 2 Bac sciences PC/SVT/ST PAGE 16

### Exercice 12
(Examen 2016-Session-Normale)

On considère la fonction numérique $f$ définie sur $\mathbb{R}$ par :
$$
f(x) = 2x - 2 + e^{2x} - 4e^x
$$
Et $(C_f)$ la courbe représentative de la fonction $f$ dans un repère orthonormé $(O; \mathit{i}; \mathit{j})$ ($\|\mathit{i}\| = \|\mathit{j}\| = 1cm$).
1) Soit la droite $(D)$ d'équation 
$$
y = 2x - 2
$$
Montrer que la courbe $(C_f)$ est au-dessus de la droite $(D)$ sur l’intervalle $]ln(4); +\infty[$ et qu’elle est en-dessous de la droite $(D)$ sur l’intervalle $]-\infty; ln(4]$.
2a) Montrer que $\int_{0}^{ln(4)}(2e^{2x}-4e^x)dx = -\frac{9}{2}$.

b) Calculer, en cm², l'aire du domaine plan limité par la courbe $(C_f)$, la droite $(D)$, l'axe des ordonnées et la droite d'équation $x = ln(4)$.

### Correction de l’exercice

On considère la fonction numérique $f$ définie sur $\mathbb{R}$ par :
$$
f(x) = 2x - 2 + e^{2x} - 4e^x
$$
1) a) Montrons que la courbe $(C_f)$ est au-dessus de la droite $(D)$ sur l’intervalle $]ln\ 4; +\infty[$ [et qu'elle est en-dessous de la droite $(D)$ sur l’intervalle $]-\infty, ln\ 4[$.
Soit $x \in \mathbb{R}$.
$$
f(x) - (2x - 2) = 2x - 2 + e^{2x} - 4e^x - (2x - 2) = e^{2x} - 4e^x
$$
Puisque $e^x > 0$ alors, le signe de $f(x) - (2x - 2)$ est le signe de $e^{x} - 4$.
Sur l’intervalle $]ln\ 4; +\infty[$
$$
x > ln\ 4 \Rightarrow e^x > 4 \Rightarrow e^x - 4 > 0 \Rightarrow f(x) - (2x - 2) > 0
$$
Donc, la courbe $(C_f)$ est au-dessus de la droite $(D)$ sur l'intervalle $]ln\ 4; +\infty[$.

```


<!-- Page 168 -->

```markdown
# Examens nationaux
## Intégrales corrigées de 2014 à 2025
### 2 Bac sciences PC/SVT/ST

#### Exercise 13 (Examen 2015-Session-Annulé)

On considère la fonction définie par : 
$$ f(x) = \frac{1}{x(1 - \ln x)} $$
et $(C_f)$ est la courbe représentative de $f$ dans un repère orthonormé $(O; \vec{i}; \vec{j})$ d’unité 2 cm. 
Et la fonction $g$ définit sur $]0, +\infty[$ par : 
$$ g(x) = 1 - x^2(1 - \ln x) $$
$(C_g)$ est la courbe représentative de $g$ dans un repère orthonormé (voir figure) 

1) a) Déterminer graphiquement le nombre de solutions de l'équation 
$ (E) : x \in ]0, +\infty[ ; g(x) = 0 $  
b) On donne le tableau de valeurs :  
| $x$  | 2   | 2,1 | 2,2 | 2,3 | 2,4 |
|-------|-----|-----|-----|-----|-----|
| $g(x)$ | -0,14 | -0,02 | 0,12 | 0,28 |

Montrer que l’équation $(E)$ admet une solution $\alpha$ telle que $2 < \alpha < 2,3$  
2a) Montrer que $f(x) - x = -\frac{g(x)}{x(1 - \ln x)}$ pour tout $x \in D_f$.  
b) Montrer que la droite $(\Delta)$ : $y = x$ coupe la courbe $(C_f)$ en deux points d’abscisses 1 et $\alpha$.  
c) À partir de la courbe $(C_g)$, Déterminer le signe de $g(x)$ sur l'intervalle $[1, \alpha]$ et montrer que $f(x) - x \leq 0$ pour tout $x \in [1, \alpha]$  
3) a) Montrer que $$ \int_{1}^{\sqrt{e}} \frac{1}{x(1 - \ln x)} \, dx = \ln 2 $$  

b) Calculer, en cm², l'aire du domaine limité par la courbe $(C_f)$, la droite $(\Delta)$ et les droites d’équations $x = 1$ et $x = e$.
```

<!-- Page 169 -->

```markdown
# Examens nationaux
## Intégrales corrigées de 2014 à 2025
### 2 Bac sciences PC/SVT/ST
#### PAGE 18

**Correction de l'exercice**

Soit la fonction $f$ définie par : 

$$ f(x) = \frac{1}{x(1-\ln x)} $$ 

et $(C_f)$ est la courbe représentative de $f$ dans un repère orthonormé $(O; \vec{i}; \vec{j}; \vec{k})$ d’unité 2cm. On considère la fonction $g$ définie sur $]0,+\infty[$ par : 

$$ g(x) = 1 - x^2(1 - \ln x) $$ 

$(C_g)$ est la courbe représentative de $g$ dans un repère orthonormé ( voir figure )

1) a) Déterminer graphiquement le nombre de solutions de l'équation : $(E): x \in [0 ; g(x) = 0]$.

On cherche l'intersection de la courbe $(C_g)$ avec l'axe des abscisses, graphiquement le nombre des points d'intersection est 2. Donc : l'équation $(E)$ a deux solutions.

b) On donne le tableau de valeurs : 

| $x$  | 2  | 2.1 | 2.2 | 2.3 | 2.4 |
|------|----|-----|-----|-----|-----|
| $g(x)$ | -0.14 | -0.02 | 0.12 | 0.28 | |

Graphiquement la fonction $g$ est continue sur l'intervalle $[2;2.3]$. D'après le tableau : 

$$ g(2,2) \times g(2,3) = -0.02 \times 0.12 < 0. $$ 

En appliquant le théorème des valeurs intermédiaires, il existe un réel $\alpha \in ]2;2.3[$ tel que : $g(\alpha) = 0$. Donc : l'équation $(E)$ admet une solution $\alpha$ tel que : $2 < \alpha < 2.3$.

2) a) Montrer que $f(x) - x = -\frac{g(x)}{x(1 - \ln x)}$ pour tout $x \in D_f$.

$$ f(x) - x = \frac{1}{x(1 - \ln x)} - x = \frac{-g(x)}{x(1 - \ln x)} $$ 

Donc : $f(x) - x = -\frac{g(x)}{x(1 - \ln x)}$ pour tout $x \in D_f$.

b) Montrer que la droite $(\Delta)$ d'équation $y = x$ coupe la courbe $(C_f)$ en deux points d'abscisses respectives 1 et $\alpha$.

On étudie l'intersection de la courbe $(C_f)$ et la droite d'équation $y = x$, pour cela on résout l'équation : 

$$ f(x) = x \text{  pour tout  } x \in D_f $$

$$ f(x) = x \iff g(x) = 0 $$ 

Graphiquement on a deux solutions et d'après ce qui précède $g(\alpha) = 0$ et $g(1) = 0$. Donc la droite $(\Delta)$ d'équation : $y = x$ coupe la courbe $(C_f)$ en deux points respectives d'abscisses 1 et $\alpha$.

c) À partir de la courbe $(C_g)$, déterminer le signe de $g$ sur $[1; \alpha]$ et montrer que 

$$ f(x) - x \leq 0 $$ 

pour tout $x \in [1; \alpha]$.

Déterminer le signe de $g$ sur $[1; \alpha]$

Sur l'intervalle $[1; \alpha]$, on a la courbe $(C_g)$ est au-dessous de l'axe des abscisses, d'où $g(x) \leq 0$ pour tout $x \in [1; \alpha]$.

b) Calculer en $cm^2$ l'aire du domaine plan délimité par la courbe $(C_f)$ et la droite $(A)$ et les droites d'équations $x = 1$ et $x = \sqrt{e}$. 

On a : $u_a = || \vec{i} || \vec{j} || = 4 cm^2$ et on a : 

$$ A = \int_{1}^{\sqrt{e}} |f(x) - x|dx \times u.a $$ 

$$ = \left( \int_{1}^{\sqrt{e}} (x - f(x))dx \right) \times 4 \,cm^2 $$ 

$$ = 4 \int_{1}^{\sqrt{e}} \left( x - \frac{1}{x(1 - \ln x)} \right) dx \,cm^2 $$ 

$$ = 4 \left[ \frac{1}{2} x^2 \right]_{1}^{\sqrt{e}} - 4 \int_{1}^{\sqrt{e}} \frac{1}{x(1 - \ln x)} \,dx \,cm^2 $$ 

$$ = 4 \left[ \frac{1}{2} \cdot (\sqrt{e})^2 - 4 \cdot 1 \right] $$ 

$$ = 4 \left( \frac{e}{2} - 4 \cdot 1 \right) \,cm^2 $$ 

$$ = -4 \ln 2 + 2 - 2 \,cm^2 $$ 
```

<!-- Page 170 -->

```markdown
# Examens nationaux
## Intégrales corrigées de 2014 à 2025
### 2 Bac sciences PC/SVT/ST

Montrer que $f(x) - x \leq 0$ pour tout $x$ de $[1; \alpha]$  
Sur l'intervalle $[1; \alpha]$ on a $g(x) \leq 0$ et  
$$ f(x) = \frac{1}{x(1 - \ln x)} \geq 1 > 0 $$  
(d'après tableau de variations de la fonction $f$ sur $[1; e]$ et on a :  
$[1; \alpha] \subset [1; e]$ d'où :  
$$ f(x) - x = -g(x) = \frac{1}{x(1 - \ln x)} \times g(x) \leq 0 $$  
pour tout $x$ de $[1; \alpha]$

3)a) Montrer que :  
$$ \int_{1}^{\sqrt{e}} \frac{1}{x(1 - \ln x)} \, dx = \ln 2 $$  
(remarquer que  
$$ \frac{1}{x(1 - \ln x)} = \frac{1}{1 - \ln x} $$  
pour tout $x$ de $D_f$)

Soit :  
$$ I = \int_{1}^{\sqrt{e}} \frac{1}{x(1 - \ln x)} \, dx $$  
$$ = \int_{1}^{\sqrt{e}} \frac{1}{1 - \ln x} \, dx $$  
$$ = \int_{1}^{\sqrt{e}} \frac{-(1 - \ln x)'}{(1 - \ln x)} \, dx $$  
$$ = -[\ln |1 - \ln x|]_{1}^{\sqrt{e}} $$  
$$ = -\left(-(\ln |1 - \ln \sqrt{e}|) - (\ln |1 - \ln 1|)\right) $$  
$$ = -\left(-\left(\ln \left|1 - \frac{1}{2}\right|\right) = -\ln 2\right) $$  
$$ = \ln 2 $$  
$$ \left(\ln |1 - \ln \sqrt{e}| = \ln |1 - \frac{1}{2} \ln e|\right) $$  

Donc :  
$$ \int_{1}^{\sqrt{e}} \frac{1}{x(1 - \ln x)} \, dx = \ln 2 $$
```

<!-- Page 171 -->

```markdown
# Deuxième bac sciences PC/SVT/ST

## Résumés de cours Logarithme et étude des fonctions
### Deuxième bac sciences PC/SVT/ST

- **Fiche 1 :** Etude des fonctions logarithme népérien
- **Fiche 2 :** Etude des fonctions ; Dérivabilité et continuité
- **Fiche 3 :** Branches infinies

**Collection FMATHS**  
**Prof fayssal**  
[www.elboutkhili.jimdo.com](http://www.elboutkhili.jimdo.com)
```

<!-- Page 172 -->

```markdown
# Préparation
**Fiche 01 : Etude des fonctions Logarithme népérien**  
**Prof : FAYSSAL**  
**Page : 01**

## Etude de La fonction logarithme népérien
1) Domaine de définition $D_{ln} = ]0; +\infty[$  
2) Le sens des variations de la fonction $ln$  
On a pour tout $x \in ]0; +\infty[$ : $ln'(x) = \frac{1}{x} > 0$  
Donc la fonction $ln$ est strictement croissante sur $]0; +\infty[$  
3) Le signe de la fonction $ln$ sur $]0; +\infty[$  
On a $ln(1) = 0$  
- Sur l'intervalle $[1; +\infty[$  
  - On a $ln$ est str croissante sur $[1; +\infty[$ donc $x \geq 1 \Longleftrightarrow ln(x) \geq ln(1) \Longleftrightarrow ln(x) \geq 0$  
- Sur l'intervalle $]0; 1[$  
  - On a $ln$ est str croissante sur $]0; 1[$ donc $0 < x < 1 \Longleftrightarrow ln(x) < 0$  

**Conclusion : (le tableau de signe de ln )**  
| $x$  | $0$ | $1$ | $+\infty$ |
|------|-----|-----|-----------|
| $ln(x)$ | $-$ | $0$ | $+$ |

4) Equation de la tangente de $(Cf)$ en $1$  
$(T)$ : $y = ln'(1)(x - 1) + ln(1)$  
$(T)$ : $y = x - 1$

5) Les branches infinies de la courbe $(Cf)$  
On a $\lim_{x \to +\infty} ln(x) = +\infty$, donc la droite d'équation $x = 0$ (l'axe des ordonnées) est un asymptote verticale à $(Cf)$  
On a $\lim_{x \to 0^+} ln(x) = -\infty$ et $\lim_{x \to +\infty} ln(x) = +\infty$  
Donc $(Cf)$ admet une branche parabolique de direction l'axe des abscisses $(Ox)$ au voisinage de $-\infty$  

6) La courbe de la fonction $ln$
```

<!-- Page 173 -->

```markdown
# Préparation
## Etude des fonctions
### Fiche 02 : Continuité -Dérivabilité
**Page : 02**

1) Continuité d’une fonction : $a \in D_f$
- $f$ est continue en $a \Leftrightarrow \lim_{x \to a} f(x) = f(a)$
- $f$ est continue à droite de $a \Leftrightarrow \lim_{x \to a^+} f(x) = f(a)$
- $f$ est continue à gauche $\Leftrightarrow \lim_{x \to a^-} f(x) = f(a)$
- La fonction $f$ est continue en $a$ si et seulement si elle est
  continue à droite de $a$ et à gauche de $a$

**Continuité sur un intervalle I**
- Les polynômes sont continus sur $\mathbb{R}$
- Les fcts rationnelles sont continues sur $D_f$
- La somme ; le produit de deux fonctions continues sur $I$ 
  est continue sur $I$
- La fonction $\frac{u}{v}$ est continue sur l'intervalle I 
  si et seulement si $v \neq 0$
- Si $u$ est continue et positive sur $I$ alors $\sqrt{u}$ 
  est continue sur $I$

2) Dérivabilité d'une fonction en $a \in D_f$
- $f$ dérivable en $a$ $\Leftrightarrow \lim_{x \to a} \frac{f(x)-f(a)}{x-a}= f'(a)$

**Interprétation géométrique :**
- $(Cf)$ admet une tangente au point $A(a;f(a))$ 
  d’équation $(T): y = f'(a)(x-a) + f(a)$
- $\lim_{x \to a} \frac{f(x)-f(a)}{x-a} = +\infty$ donc $f'$ n’est pas dérivable en $a$

**Interprétation géométrique :**
- $(Cf)$ admet une droite tangente verticale au point $A(a; f(a))$ dirigée vers le haut

**Fonctions dérivées des fonctions usuelles**
- Les polynômes sont dérivables sur $\mathbb{R}$ et : 
  $(ax + b)' = a ; \ (a x^n)' = a n x^{n-1}$
- Si $u$ est dérivable alors $(u^n)' = n u^{n-1} u'$
- $ \left( \frac{-a}{\sqrt{x}} \right)' = -\frac{a}{2x^{3/2}} ; \ x \neq 0 $
- $ \left( \sqrt{x} \right)' = \frac{1}{2\sqrt{x}} ; \ u > 0 $

- $u$ et $v$ deux fonctions dérivables sur $I$ alors
  $(u \cdot v)' = u'v + uv'$
- $(uv)' = u'v + uv'$ ; $\neq 0$

3) T.V. et Fonction réciproque
- Si $f$ est continue et strictement monotone sur un intervalle $[a;b]$ et 
  $f(a) \times f(b) < 0$ Alors l’équation $f(x) = 0$ 
  admet une unique solution dans ]a;b[
- Si une fonction continue et strictement monotone sur un intervalle $I$,
  alors la fonction $f$ admet une fonction réciproque, notée $f^{-1}$, définie sur $J = f(I)$
  
**Par la relation** $f^{-1}(x) \Leftrightarrow f(f^{-1}(x)) = x \quad \forall x \in I$

*Les courbes de $f$ et de $f^{-1}$ sont symétriques par rapport à la droite d'équation $y=x$*

**Dérivabilité de $f^{-1}$ en $b$ avec $b = f(a)$**
- Si $f$ est dérivable en $a$ et $f'(a) \neq 0$ alors $f^{-1}$ est dérivable en $b$ et $(f^{-1})' (b) = \frac{1}{f'(a)}$

4) Convexité de $(Cf)$ et les Points d’inflexions
- Si $f'' > 0$ alors $(Cf)$ est convexe $\cup$
- Si $f'' < 0$ alors $(Cf)$ est concave $\cap$
- Si $f''$ s'annule et change le signe en $a$ alors $A(a;f(a))$ est un point d'inflexion

5) Position relative de $(Cf)$ et $(D)$
- La droite $(D)$ d’équation $y = ax + b$
- On étudie le signe de $f(x) - (ax + b)$
  - Si $f(x) > (ax + b)$ alors la courbe $(Cf)$ est au-dessus de $(D)$
  - Si $f(x) < (ax + b)$ alors la courbe $(Cf)$ est au-dessous de $(D)$

6) Les éléments de symétrie de $(Cf)$
- La droite d’équation $(D) : x = a$ est un axe de symétrie de $(Cf)$ si pour tout $x \in D_f$ 
  $ (2a - x) \in D_f \text{ et } f(2a - x) = f(x) $
- La fonction est paire si $\forall x \in D_f$ :
  $f(-x) = f(x)$
- $(0y)$ est un axe de symétrie de $(Cf)$
- Le point $A(a;f(a))$ est centre de symétrie de $(Cf)$ si pour tout $x \in D_f$ :
  $(2a - x) \in D_f \text{ et } f(2a - x) + f(x) = 2b$

La fonction est impaire si $\forall x \in D_f$ :
  $f(-x) = -f(x)$
  
Le point $o$ est centre de symétrie de $(Cf)$
```

<!-- Page 174 -->

```markdown
# Fiche 3 : ETUDE DES FONCTIONS  BRANCHES INFINIE  Page 03

## La limite

### Interprétation géométrique

Si $ \lim_{x \to a} f(x) = \infty $  
Alors la droite (D) d’équation $ x = a $ est asymptote verticale à $(C_f)$

Si $ \lim_{x \to +\infty} f(x) = L $  
Alors la droite (D) : $ y = L $ est asymptote horizontale à $(C_f)$ voisinage de $ +\infty $

Si $ \lim_{x \to +\infty} f(x) = \infty $ et $ \lim_{x \to +\infty} (f(x) - (ax + b)) = 0 $  
Alors droite $(\Delta): y = ax + b $ est asymptote oblique à $(C_f)$ voisinage de $ +\infty $

Si $ \lim_{x \to +\infty} f(x) = \infty $, On calcule $ \lim_{x \to +\infty} \frac{f(x)}{x} $  
Alors $(C_f)$ admet une branche parabolique de Direction la droite $(O_x)$ Au voisinage de $ +\infty $

Si $ \lim_{x \to +\infty} \frac{f(x)}{x} = 0 $  
Alors $(C_f)$ admet une branche parabolique de Direction $(O_y)$ Au voisinage de $ +\infty $

Si $ \lim_{x \to +\infty} \frac{f(x)}{x} = \infty $  
Alors $(C_f)$ admet une branche parabolique de Direction $(O_y)$ Au voisinage de $ +\infty $

Si $ \lim_{x \to +\infty} \frac{f(x)}{x} = a \ , (avec \ a \neq 0) $  
On calcule $ \lim_{x \to +\infty} f(x) - ax $

Si :  
$\lim_{x \to +\infty} f(x) - ax = \infty $  
Alors $(C_f)$ admet une branche parabolique de direction la droite d’équation $(\Delta): y = ax $ au voisinage de $ +\infty $

Si :  
$\lim_{x \to +\infty} f(x) - ax = b $  
Alors la droite d’équation $(\Delta): y = ax + b $ est asymptote oblique à $(C_f)$ voisinage de $ +\infty $
```

<!-- Page 175 -->

```markdown
# Offre préparation concours 2026 – Prof Fayssal
- Plus 20 séances en vidéos de préparation Médecine
- Plus 20 séances en vidéos pour ENSA-ENSAM-UM6P
- Nouvelle offre à partir de mois 6 avec des séances en directes et interactives
- Deux livres de préparation Médecine-ENSA-ENSAM contiennent des astuces, plus de 20 concours blancs corrigés et la correction des anciens concours

Pour participer : 0681399067

---

# عرض خاص للطلبة (20 حصة) عبر فيسبوك للرجوع للإجابة
- حصة لمتابعة دروس (20 حصة) ENSM – UM6P و ENSA عبر ZOOM
- كتيبات شاملة في الرياضيات 📚 مع تصحيح أنواع + تصحيح العبارات السابقة
- عرض و حصص مباشر يوميا ابتداء من شهر 6 لتدني دقيقة

0681399067 للتواصل 📧 

---

## Résultat de Sélection
- جزاك الله خير على مجموعتك
- نقدم لك و نفضل القناة الثانية لله
- اللهم اجعلنا نساعد المتعلمين و الحامدي لله

---

سلام عليكم أنا من الطلاب داويك 
- Je vous remercie beaucoup beaucoup الجا غا قعد بدأ سنا جانا في classe ❤️
- او 7ta votre livre de préparation rah sawni bzaaf
```

<!-- Page 176 -->

```markdown
# Correction des examens nationaux Logarithme Népérien

## Correction des examens nationaux logarithme népérien
### Deuxième bac sciences
PC/SVT/ST

## Correction d’examens nationaux de 2025 à 2008
### Logarithme népérien 5

---

Collection FMATHS  
Prof fayssal  
www.elboutkhili.jimdoftree.com
```

<!-- Page 177 -->

```
# Sujets des examens nationaux
## Logarithme népérien
### 2 Bac sciences PC/SVT/ST
### Examen national 2025 session normale

---

**Partie I:**

Le graphique représente les courbes $(C_g)$ et $(C_h)$ des fonctions $g: x \mapsto x^2$ et $h: x \mapsto 2\ln(x) - (ln \, x)^2$ sur $]0, +\infty[$ dans un même repère orthonormé.

1. a) Justifier graphiquement que pour tout $x$ de $]0, +\infty[$; $g(x) - h(x) > 0$  
   b) Déduire que pour tout $x$ de $]0, +\infty[$: $$ 2(\ln x) - (ln \, x)^2 < 1 $$

2. a) Vérifier que la fonction $h: x \mapsto x \ln x - x$ est une primitive de la fonction $x \mapsto \ln x$ sur l’intervalle $]0, +\infty[$.  
   b) Résoudre sur l’intervalle $]0, +\infty[$ l’équation $h(x) = 0$ et en déduire les deux points d’intersection de la courbe $(C_k)$ avec l’axe des abscisses.

---

**Partie II:**

On considère la fonction numérique $f$ définie sur $]0, +\infty[$ par: $$ f(x) = x - \frac{(ln \, x)^2}{x} $$ Soit $(C_f)$ sa courbe représentante dans un repère orthonormé $(O; i, j)$.

1. a) Vérifier que $\lim_{x \to 0^+} f(x) = -\infty$ et donner une interprétation géométrique de ce résultat.  
   b) Montrer que $\lim_{x \to +\infty} \frac{(ln \, x)^2}{x} = 0$ (On peut poser $t = \sqrt{x}$, puis calculer $\lim_{x \to +\infty} f(x)$).  
   c) Déduire que la droite d’équation $y = x$ est une asymptote oblique de la courbe $(C_f)$ au voisinage de $+\infty$.

2. a) Montrer que pour tout $x$ de $]0, +\infty[$: $$ f'(x) = 1 - \frac{2 \ln x - (ln \, x)^2}{x^2} $$  
   b) Montrer que la fonction $f$ est strictement croissante sur l’intervalle $]0, +\infty[$.  

---

**Partie III:**

Soit $(u_n)$ la suite numérique définie par: $$ u_0 = e \quad et \quad u_{n+1} = f(u_n) \quad pour \, tout \, n \in \mathbb{N}. $$ 
1. Montrer par récurrence que $1 < u_n$ pour tout $n \in \mathbb{N}$.

2. a) Montrer que la suite $(u_n)$ est décroissante. (On utilise la question Partie II-3-c)  
   b) En déduire que la suite $(u_n)$ est convergente.  
   c) Déterminer la limite de la suite $(u_n)$.
```

<!-- Page 178 -->

```markdown
# Sujets des examens nationaux
## Logarithme népérien

### Examen national 2023 session normale
Soit $f$ la fonction numérique définie sur ]0, +∞[ par
$$
f(x) = 2 - \frac{2}{x} + (1 - \ln x)^2
$$
Et $(C)$ sa courbe représentative dans un repère orthonormé $(O, i, j)$ (unité : 1cm)

1) a) Vérifier que pour tout $x \in ]0, +∞[$ :
$$
f(x) = \frac{3x - 2 + 2\ln x + (ln x)^2}{x}
$$
b) Montrer que $\lim_{x \to 0^-} x \ln x = 0$ et $\lim_{x \to +\infty} \frac{\ln x^2}{x} = 0$  
c) En déduire que $\lim_{x \to 0^+} f(x) = -\infty$ puis interpréter géométriquement le résultat  
d) Calculer $\lim_{x \to +\infty} f(x)$ puis déterminer la branche infinie de $(C)$ au voisinage de $+\infty$

2) Montrer que $f'(x) = \frac{2(1 - \ln x)}{x^2}$ pour tout $x \in ]0, +∞[$  
3) En exploitant le tableau de variation ci-dessous, de la fonction dérivée $f'$ sur $]0, -\infty[$

   ![Tableau de variation](#)
   a) Prouver que $f$ est strictement croissante sur $]0, +\infty[$ puis dresser le tableau de variation de $f$  
   b) Donner le tableau de signe de la dérivée seconde $f''$ de la fonction $f$ sur $]0, +\infty[$  
   c) En déduire la concavité de $(C)$ en précisant les abscisses de ses deux points d'inflexions  

4) La courbe $(C_g)$ ci-contre est la représentation graphique de la fonction
$$
g:x \mapsto f(x) - x \text{ qui s'annule en } \alpha \text{ et } 1 \text{ (avec } \alpha \approx 0,3\text{)}
$$
Soit $(A)$ la droite d'équation $y = x$  
a) À partir de la courbe $(C)$, déterminer le signe de la fonction $g$ sur $]0, +\infty[$  
b) Déduire que la droite $(A)$ est en dessous de $(C)$ sur l'intervalle $[\alpha; 1[ et au-dessus de $(C)$ sur les intervalles $]0, \alpha[$ et $]1; +\infty[$  

### Examen national 2022 session rattrapage
Soit $f$ la fonction numérique définie sur $[0, +\infty[$ par
$$
f(x) = x^4(\ln x - 1)^2 ; x > 0
$$
et $f(0) = 0$  
Et $(C)$ sa courbe représentative dans un repère orthonormé $(O, i, j)$ (unité : 1cm)

1) Calculer $\lim_{x \to 0^+} f(x)$ puis déterminer la branche infinie de $(C)$ au voisinage de $+\infty$  
2) a) Montrer que $f$ est continue à droite en 0  
b) Étudier la dérivabilité de $f$ à droite en 0 puis interpréter le résultat géométriquement  

3) a) Montrer que
$$
f'(x) = 2x^3(\ln x - 1)(2 \ln x - 1) \text{ pour tout } x \in ]0, +\infty[
$$
b) Dresser le tableau de variation de $f$  
4) a) Sachant que $f''(x) = 2x^2(2 \ln x - 5) \text{ pour tout } x \in ]0, +\infty[$, étudier le signe de $f''(x)$ sur $]0, +\infty[$  
b) Déduire que la courbe $(C)$ admet deux points d'inflexion dont on déterminera les abscisses  

5) a) Construire la courbe $(C)$ dans le repère $(O, i, j)$ (on prend : $ \sqrt{e} \approx 1,6$ et $e^2 \approx 7,2$)  
b) En utilisant la courbe $(C)$, déterminer le nombre de solutions de l'équation
$$
x^2(\ln x - 1) = -1
$$
6) On considère la fonction $g$ définie sur $\mathbb{R}$ par
$$
g(x) = f(|x|)  
$$
a) Montrer que la fonction $g$ est paire  
b) Construire $(C_g)$ la courbe représentative de $g$ dans le même repère $(O, i, j)$
```

<!-- Page 179 -->

```markdown
# Sujets des examens nationaux
## Logarithme népérien

### Examens national 2021 session normale
Soit la fonction $f$ définie sur $[0, +\infty[$ par :
$$
f(0) = 0 \text{ et } f(x) = 2x \ln(x) - 2 \text{ si } x > 0
$$
Et $(C_f)$ sa courbe représentative dans un repère orthonormé $(O, i, j)$ (unité : 1cm)

1) Montrer que $f$ est continue à droite au point 0
2) a) Calculer $$ \lim_{x \to 0^+} f(x) $$
   b) Calculer $$ \lim_{x \to +\infty} f(x) $$ puis interpréter géométriquement le résultat
3) a) Calculer $$ \lim_{x \to 0^+} \frac{f(x)}{x} $$ puis interpréter géométriquement le résultat  
   b) Calculer $f'(x)$ pour tout $x \in ]0, +\infty[$
   c) Dresser le tableau de variations de la fonction $f$ sur $[0, +\infty[$
4) a) Résoudre dans l'intervalle $]0, +\infty[$ les équations $f(x) = 0$ et $f(x) = x$  
   b) Construire $(C_f)$ dans le repère $(O, i, j)$. On prendra $e^2 = 4.5$
5) a) Déterminer le minimum de $f$ sur $]0, +\infty[$  
   b) En déduire pour tout $x \in ]0, +\infty[$ que $$ \ln(x) < \frac{1}{x} $$
6) Soit $g$ la restriction de la fonction $f$ à l'intervalle $[1, +\infty[$  
   a) Montrer que la fonction $g$ admet une fonction réciproque $g^{-1}$ définie sur un intervalle $I$ qu'on déterminera.  
   b) Construire dans le même repère $(O, i)$ la courbe représentative de la fonction $g^{-1}$
7) On considère la fonction $h$ définie sur $\mathbb{R}$ par :  
$$
h(x) = x^3 + 3x ; \quad x < 0 \\
h(x) = 2x \ln(x) - 2 ; \quad x > 0
$$
   a) Étudier la continuité de $h$ au point 0  
   b) Étudier la dérivabilité de la fonction $h$ à gauche au point 0 puis interpréter géométriquement le résultat.  
   c) La fonction $h$ est-elle dérivable au point 0 ? justifier.

### Examens national 2021 session rattrapage
On considère la fonction numérique $h$ définie sur $]0; +\infty[$ par : $h(x) = \alpha + \ln x$

1) Montrer que $h$ est strictement croissante sur $]0; +\infty[$
2) Déterminer $h(0; +\infty)$
3) Déduire que l'équation $h(x) = 0$ admet une unique solution $\alpha \in ]0; +\infty[$
4) Montrer que $0 < \alpha < 1$
5) a) Vérifier que $$ h\left( \frac{1}{\alpha} \right) = \alpha + \frac{1}{\alpha} > 2 $$
6) Déduire que $$ h\left( \frac{1}{\alpha} \right) > 2 $$

### Examens national 2020 session normale
On considère la fonction numérique $g$ définie sur $]0, +\infty[$ par $g(x) = 2\sqrt{x} - 2 - \ln(x)$

1) a) Montrer pour tout $x \in ]0, +\infty[$ que 
$$ g'(x) = \frac{\sqrt{x-1}}{x} $$
   
   b) Montrer que $g$ est croissante sur $]1, +\infty[$  
   c) En déduire pour $x \in [1, +\infty[$ que $0 < \ln(x) \leq 2\sqrt{x}$
   (Remarquer que $2\sqrt{x} - 2 \leq 2\sqrt{x}$)
   
   d) Montrer pour tout $x \in [1, +\infty[$ que $0 < \left( \frac{\ln x^3}{x^2} \right)$ et en déduire 
   $$ \lim_{x \to +\infty} \frac{\ln(x^3)}{x^2} $$
   
2) Montrer que $x \mapsto \left(-1 + \frac{4}{\sqrt{x} - \ln(x)}\right)$ est une primitive de $g$ sur $]0, +\infty[$

### Examens national 2019 session normale
Première partie :
Soit $f$ la fonction numérique définie sur $]0; +\infty[$ par : 
$$
f(x) = x + \frac{1}{2} - \ln x + \frac{1}{2}x^2
$$
1) Calculer $$ \lim_{x \to +\infty} f(x) $$ puis interpréter ce résultat géométriquement.
2) a) Vérifier que pour tout $x \in ]0; +\infty[$,
$$ f(x) = x + \frac{1}{2} - \left(\frac{1}{2} \ln x - 1\right) $$
   
   b) En déduire que $$ \lim_{x \to +\infty} f(x) = +\infty $$
```

<!-- Page 180 -->

```markdown
# Sujets des examens nationaux
## Logarithme népérien
### Prof FAYSAL : 0681399067
### 2 Bac sciences PC/SVT/ST
### Page 04

1) Voici la fonction $f$ définie sur l'intervalle $]0; +\infty[$ : 
$$ f(x) = x - \frac{1}{2} + \frac{(lnx)^2}{x^2} $$
Soit $(C)$ la courbe représentative de la fonction $f$ dans un repère orthonormé $(O; i; j)$. 

a) Vérifier que $\lim_{x \to +\infty} f(x) = -\infty$

b) Montrer que la droite $(D)$ d'équation $y = x - \frac{1}{2}$ est une asymptote à $(C)$ au voisinage de $+\infty$.

c) Déterminer la position relative de la droite $(D)$ et de la courbe $(C)$.

2) Montrer que $\lim_{x \to 0^+} f(x) = +\infty$ et interpréter géométriquement le résultat.

3) a) Montrer que $f'(x) = \frac{g(x)}{x^3}$ pour tout $x$ appartenant à l'intervalle $]0; +\infty[$.

b) Montrer que la fonction $f$ est décroissante sur $[0, 1]$ et croissante sur $[1, +\infty[$.

c) Dresser le tableau de variations de la fonction $f$ sur l'intervalle $]0; +\infty[$.

4. a) Montrer que $f''(x) = -\frac{2-lnx}{x^2}$ pour tout $x > 0; +\infty[$.

b) En déduire que $(C)$ admet un point d'inflexion dont on déterminera les coordonnées.

5. a) Montrer que pour tout $x > 0; +\infty$, $f(x) - x = -\frac{1}{2}(lnx - 1)^2$ et déduire la position relative de $(C)$ et $(D)$.

b) Construire $(\Delta)$ et $(C)$ dans le même repère $(O; i; j)$.

6. a) Montrer que la fonction $H : x \mapsto ln x - x$ est une primitive de $h : x \mapsto lnx$ sur $]0; +\infty[$.

## Deuxième partie :
Soit $(u_n)$ une suite numérique définie par : 
$$ u_0 = 1 \text{ et } u_{n+1} = f(u_n) $$ pour tout $n \in \mathbb{N}$.

1.a) Montrer par récurrence que $1 \leq u_n \leq e$ pour tout $n \in \mathbb{N}$.

b) Montrer que la suite $(u_n)$ est croissante.

c) En déduire que la suite $(u_n)$ est convergente.

2. Calculer la limite de la suite $(u_n)$.

## Examen national 2018 session rattrapage
1) Soit $g(x) = x^3 - 1 - 2ln2x + 2ln x$.

Le tableau ci-contre est le tableau de variations de la fonction $g$ sur $]0; +\infty[$.

1) Calculer $g'(1)$.

2) À partir de ce tableau, déterminer le signe de $g(x)$ sur chacun des intervalles $]1, +\infty[$ et $[1, +\infty[$.
```

<!-- Page 181 -->

```markdown
# Sujets des examens nationaux
## Logarithme népérien 
### 2 Bac sciences PC/SVT/ST 
### Page 05

### Examen national 2017 session normale
**Partie I :** On considère la fonction $g$ définie sur $]0, +\infty[$ par : $g(x) = x^2 - x - 2 + 2 \ln x$
1. Calculer $g(1)$  
2. En partant du tableau de variation de $g$

$$
g(x) \leq 0 \quad \text{Pour tout } x \in [0, 1]
$$
$$
g(x) \geq 0 \quad \text{Pour tout } x \in [1, +\infty[
$$

**Partie II :** On considère la fonction $f$ définie sur $]0, +\infty[$ par : $f(x) = x + \left(1 - \frac{1}{x}\right) \ln x$  
$(C_f)$ Est la courbe représentative de $f$ dans un repère orthonormé $(O; \vec{i}; \vec{j})$ d'unité 1cm
1. Montrer que $\lim_{x \to 0^+} f(x) = +\infty$ et interpréter le résultat géométriquement.
2.a. Montrer que $\lim_{x \to +\infty} f(x) = +\infty$  
2.b. Montrer que $(C_f)$ admet une branche parabolique de direction $(D) : y = x \to +\infty$  
3.a. Montrer que $f'(x) = \frac{g(x)}{x^2}$ pour tout $x \in [0, +\infty[$  
3.b. Etudier les variations de $f$ sur $]0; +\infty[$  
3.c. Tracer son tableau de variation sur $]0; +\infty[$  
4.a. Résoudre dans l'intervalle $]0; +\infty[$, l'équation 

$$
\left( 1 - \frac{1}{x} \right) \ln x = 0
$$

4.b. En déduire que la courbe $(C_f)$ coupe la droite $(D)$ en deux points dont on déterminera les coordonnées.  
4.c. Montrer que $f(x) \leq x$ pour tout $x$ appartenant à l’intervalle $[1,2]$, en déduire la position relative de la courbe $(C_f)$ et la droite $(D)$ sur $[1, 2]$.  
5. Tracer sur le même repère $(O; \vec{i}; \vec{j})$, la droite $(T)$ et la courbe $(C_f)$ dans le repère $(O; \vec{i}; \vec{j})$.  

### Examen national 2016 session rattrapage
**Partie I :** Soit $g$ la fonction numérique définie sur $]0; +\infty[$ par : $g(x) = \frac{2}{x} - 1 + 2 \ln(x)$.  
Le tableau ci-dessous est le tableau de variations de la fonction $g$ sur $]0; +\infty[$.
1. Calculer $g(1)$.  
2. Déduire à partir du tableau que : 

$$
g(x) > 0 \quad \text{pour tout } x \in ]0; +\infty[
$$

**Partie II :** On considère la fonction numérique $f$ définie sur $]0; +\infty[$ par : $f(x) = 3 - 3x + 2( x + 1)\ln(x)$, et soit $(C_f)$ la courbe représentative de la fonction $f$ dans un repère orthonormé $(O; \vec{i}; \vec{j})$ (unité 2cm).  
1.a) Montrer que $\lim_{x \to 0^+} f(x) = -\infty$ et donner une interprétation géométrique à ce résultat.  
b) Montrer que la droite $(D)$ d'équation $y = 2x - 2$ est une asymptote à la courbe $(C_f)$ au voisinage de $-\infty$.  
2.a) Montrer que $\lim_{x \to +\infty} f(x) = +\infty$ (pour calculer cette limite on pourra écrire $f(x)$ sous forme $f(x) = x \left[3 - 3 + 2 \left(1 + \frac{1}{x} \ln(x)\right)\right]$.  
b) Montrer que la courbe $(C_f)$ admet une branche parabolique de direction l'axe des ordonnées au voisinage de $+\infty$.  
3.a) Montrer que $f'(x) = g(x)$ pour tout $x \geq 0 ; +\infty[$.  
b) En déduire que la fonction $f$ est strictement croissante sur $]0; +\infty[$ et dresser le tableau de variations de $f$ sur $]0; +\infty[$.  
4.a) Montrer que $I(1) ; 0)$ est un point d'inflexion de la courbe $(C_f)$.  
b) Montrer que $y = x - 1$ est une équation cartésienne de $(D)$ tangent à la courbe $(C)$ au point $I$.  
6) Résoudre graphiquement l'équation :

$$
(x + 1) \ln(x) \geq \frac{3}{2} (x - 1) \quad \text{pour } x \in ]0; +\infty[
$$
```

<!-- Page 182 -->

```markdown
# Sujets des examens nationaux

## Logarithme népérien

### Examen national 2015 session rattrapage

1) Soit $g$ la fonction définie sur $]0; +\infty[$ par :
$$ g(x) = 1 - x + x \ln x. $$
1) a) Montrer que $g'(x) = -1 + \ln x$ ; sur $]0; +\infty[$.  
b) Montrer que la fonction $g$ est décroissante sur $]0; 1]$ et croissante sur $[1; +\infty[$.  
2) Calculer $g(1)$ et en déduire que :  
$$ g(x) \geq 0 \text{ pour tout } x \in ]0; +\infty[. $$  
II) Soit la fct défini sur $]0; +\infty[$ par:  
$$ f(x) = 3 - \frac{1}{x^2} - 2 \ln x $$  
1) Montrer que 
$$ \lim_{x \to 0^+} f(x) = -\infty $$
et interpréter géométriquement  
2) Montrer que 
$$ \lim_{x \to +\infty} f(x) = 3 $$
et en déduire la branche inférieure de la courbe $C$ au voisinage de $+\infty,$  

3) a) Montrer que $f'(x) = \frac{2g(x)}{x^3}$ sur $]0; +\infty[$.  
b) Montrer que la fonction $f$ est décroissante sur $]0, 1[$ et croissante sur $[1, e[$ et sur $]e; +\infty[$.  
c) Dresser le tableau de variations de la fonction $f$ sur $D_f$  
### Partie II
On considère la fonction $g$ définie sur $]0; +\infty[$ par : 
$$ g(x) = 1 - x^2(1 - \ln x) $$  
$(C_g)$ est la courbe représentative de $g$ dans un repère orthonormé (voir figure)  
1)a) Déterminer graphiquement le nombre de solutions de l’équation : $(E): x \in ]0; +\infty[; g(x) = 0$  
b) On donne le tableau de valeurs :  
$$
\begin{array}{|c|c|c|c|c|c|}
\hline
x & 2,1 & 2,2 & 2,3 & 2,4 \\
\hline
g(x) & -0,14 & -0,02 & 0,12 & 0,28 \\
\hline
\end{array}
$$  
2)a) Montrer que $f(x) = - \frac{g(x)}{x(1 - \ln x)}$ pour tout $x \in D_f.$  
b) Montrer que la droite $(D)$ d’équation $y = x$ coupe la courbe $(C_f)$ en deux points d’abscisses respectives $1$ et $\alpha$.  
c) À partir de la courbe $(C_g)$, déterminer le signe de $g$ sur $[1; \alpha]$ et montrer que $f(x) \leq 0$ pour tout $x \in [1; \alpha]$  
3) Construire dans le même repère $(O; \vec{i}; \vec{j})$, la courbe $(C_f)$ et la droite $(D)$  
### Partie III :
On considère la suite $(U_n)$ définie par : $U_0 = 2$ et $U_{n+1} = f(U_n)$ pour tout $n \in \mathbb{N}.$  
1) Montrer par récurrence que pour tout $n \in \mathbb{N}; 1 < U_n < \alpha$  
2) Montrer que la suite $(U_n)$ est décroissante.  
3) En déduire que la suite $(U_n)$ est convergente et calculer sa limite.  

### Examen national 2015 session Annulé
Soit la fonction $f$ définie par :  
$$ f(x) = \frac{-1}{x(1 - \ln x)} $$  
et $(C_f)$ est la courbe de $f$ dans un repère orthonormé $(O; \vec{i}; \vec{j})$ d’unité 2cm.  
### Partie I
1) Montrer que $D_f = ]0; e[ \cup ]e; +\infty[$  
2)a) Calculer $\lim_{x \to e^-} f(x)$ et $\lim_{x \to e^+} f(x)$ puis donner une interprétation géométrique de ces résultats.  
b) Calculer : 
$$ \lim_{x \to 0^+} f(x) $$ 
puis en déduire que la courbe $(C_f)$ admet une asymptote au voisinage de $+\infty$  
```

<!-- Page 183 -->

```markdown
# www.elboutkhili.jimdofree.com
Prof FAYSAL : 0681399067

## Sujets des examens nationaux
### Logarithme népérien

### Examen national 2014 session normale
I- Soit $g$ la fonction numérique $g$ définie sur $]0, +\infty[$ par : $g(x) = 1 - \frac{1}{x^2} + \ln x$

1) Montrer que $g'(x) = \frac{2}{x^3} - \frac{1}{x^2}$ pour tout $x$ de $]0, +\infty[$ et en déduire que la fonction $g$ est croissante sur $]0, +\infty[$.

2) Vérifier que $g(1) = 0$ puis en déduire que $g(x) < 0$ pour tout $x \in ]0, 1]$ et que $g(x) \geq 0$ pour tout $x \in [1, +\infty[$.

II) On considère la fonction numérique $f$ définie sur $]0, +\infty[$ par 

$$f(x) = (1 + \ln x)^2 + \frac{1}{x^2}$$ 

soit (C) la courbe représentative de la fonction $f$ dans un repère orthonormé $(O, i, j)$. (unité 1cm)

1) Montrer que $\lim_{x \to 0^+} f(x) = +\infty$ et donner une interprétation géométrique de ce résultat.

2) a) Calculer $\lim_{x \to +\infty} f(x)$.

b) Montrer que $\lim_{x \to +\infty} \frac{(1 + \ln x)^2}{x} = 0$ (on pourra poser $t = \sqrt{x}$) puis montrer que :

$$\lim_{x \to +\infty} \frac{f(x)}{x} = 0.$$

b) Déterminer la branche infinie de la courbe (C) au voisinage de $+\infty$.

3) a) Montrer que $f'(x) = \frac{2g(x)}{x}$ pour tout $x$ de $]0, +\infty[$ puis en déduire que la fonction $f$ est décroissante sur $]0, 1]$ et croissante sur $[1, +\infty[$.

b) Dresser le tableau de variations de la fonction $f$ sur l'intervalle $]0, +\infty[$ puis en déduire que $f(x) \geq 2$ pour tout $x \in ]0, +\infty[$.

4) Construire (C) dans le repère $(O, i, j)$ (On admettra que la courbe (C) possède un seul point d'inflexion que l’on ne demande pas de déterminer).

---

### Examen national 2013 session Rattrapage
I- On considère la fonction numérique $g$ définie sur l'intervalle $]0, +\infty[$ par :

1) Vérifier que $2x^2 - x - 1 = (2x + 1)(x - 1)$ pour tout $x \in \mathbb{R}$.

2) Vérifier que $g'(x) = \frac{2x^2 - x - 1}{x}$ pour tout $x$ de l'intervalle $]0, +\infty[$ et en déduire que la fonction $g$ est décroissante sur l'intervalle $]0, 1]$ et qu'elle est croissante sur l'intervalle $[1, +\infty[$.

3) Montrer que $g(x) \geq 0$ pour tout $x \in ]0, +\infty[$ (Remarque que $g(1) = 0$).

Soit $f$ la fonction numérique définie sur $]0, +\infty[$ par : $f(x) = x^2 - 1 - (ln x)^2$ et soit (C) la courbe représentative de la fonction $f$ dans un repère orthonormé $(O, i, j)$. (unité 1cm)

1) a) Montrer que $\lim_{x \to 0^+} f(x) = -\infty$ et donner une interprétation géométrique de ce résultat.

b) Montrer que $\lim_{x \to +\infty} f(x) = +\infty$ (Remarque que $f(x) = x^2 \left( 1 - \frac{(ln x)^2}{x^2} \right)$).

c) En déduire que la courbe (C) admet, au voisinage de $-\infty$, une branche parabolique dont on précisera la direction.

2) a) Montrer que $f'(x) = 2 \frac{(x^2 - \ln x)}{x}$ pour tout $x$ de $]0, +\infty[$.

b) Vérifier que $g\left(\frac{x}{x}\right) = \frac{x^2 - \ln x}{x}$ pour tout $x$ de l'intervalle $]0, +\infty[$ et en déduire que la fonction $f$ est croissante sur $]0, +\infty[$.

3) a) Montrer que $y = 2x - 2$ est une équation cartésienne de la droite (T) au point (1, 0).

b) Construire, dans le même repère $(O, i, j)$, la droite (T) et le cercle (C) (On admettra que A est le seul point d'inflexion de la courbe (C)).
```

<!-- Page 184 -->

```markdown
# Sujet des examens nationaux
## Logarithme népérien

### Examen national 2012 session normale
#### Première partie :
On considère la fonction $g$ définie sur $]0,+\infty[$ par :
$$ g(x) = x^2 - 1 + 2x \ln x $$
1) Montrer que $(x^2 - 1)$ et $2x \ln x$ ont le même signe sur l'intervalle $]0,1[$ puis en déduire que $g(x) \leq 0$ pour tout $x \in [0,1]$  
2) Montrer que $(x^2 - 1)$ et $2x \ln x$ ont le même signe sur l'intervalle $[1,+\infty[$ et déduire que $g(x) \geq 0$ pour tout $x \in [1,+\infty[$

#### Deuxième partie :
On considère la fonction $f$ définie sur $]0,+\infty[$ par :
$$ f(x) = (x^2 - 1) \ln x $$
et soit $(C)$ la courbe représentative de $f$ dans un repère orthonormé $(O,i,j)$ (unité est 3cm)
1) a) Montrer que : $\lim_{x \to 0^+} f(x) = +\infty$, puis interpréter géométriquement le résultat obtenu.
b) Calculer $\lim_{x \to +\infty} f(x)$ puis montrer que 
$$ \lim_{x \to +\infty} \frac{f(x)}{x} = -\infty $$
(on pourra écrire $\frac{f(x)}{x}$ sous la forme $\frac{(x^2-1)}{x} \ln x$ et en déduire que la courbe $(C)$ admet une branche parabolique au voisinage de $+\infty$ dont on précisera sa direction)
2) a) Montrer que : $f' (x) = \frac{g(x)}{x^2}$ pour tout $x \in ]0,+\infty[$ et interpréter géométriquement le résultat $f' (1) = 0$  
b) Déduire que la fonction $f$ est décroissante sur l’intervalle $]0,1]$ et croissante sur l’intervalle $[1,+\infty[$  
c) Donner le tableau de variation de la fonction $f$ sur $]0,+\infty[$ puis montrer que $f(x) \geq 0$ pour tout $x \in ]0,+\infty[$  
4) Construire $(C_f)$ dans le repère orthonormé $(O,i,j)$.

---

### Examen national 2011 session rattrape
#### Première partie :
On considère la fonction $g$ définie sur $I = ]0,+\infty[$ par :
$$ g(x) = x - 1 + \ln(x) $$

#### Première partie :
1) a) Montrer que $g'(x) = -\frac{1}{x}$ pour tout $x \in I$.  
b) Montrer que la fonction $g$ est croissante sur $I$.  
2) En déduire que $g(x) \geq 0$ sur $[1; +\infty[$ et que $g(x) \leq 0$ sur $]0; 1]$.  
(remarquer que $g(1)=0$)

#### Deuxième partie :
Soit la fonction numérique définie sur $I$ par :
$$ f(x) = \frac{x - 1}{x} \ln x $$
et soit $(C_f)$ la courbe représentative de $f$ dans un repère orthonormé $(O, \overrightarrow{i}, \overrightarrow{j})$ (unité 1cm)
1) a) Montrer que $\lim_{x \to 0^+} f(x) = +\infty$ et donner une interprétation géométrique de ce résultat.  
b) Montrer que $\lim_{x \to +\infty} f(x) = +\infty$ et $\lim_{x \to +\infty} \frac{f(x)}{x} = 0$.  
(remarquer que $\frac{f(x)}{x} = \frac{(x - 1)}{x^2} \ln x$)

2) a) Montrer que $f'(x) = \frac{g(x)}{x^2}$ pour tout $x \in I$.  
b) En déduire que la fonction $f$ est croissante sur $[1; +\infty[$ et décroissante sur $]0; 1]$.  
c) Dresser le tableau de variation de la fonction $f$ sur $I$.  
3) Construire $(C_f)$ (on admettra que la courbe $(C_f)$ possède un seul point d'inflexion d'abscisse comprise entre 1.5 et 2).
```

<!-- Page 185 -->

```markdown
# Sujets des examens nationaux
## Logarithme népérien
### 2 Bac sciences PC/SVT/ST
#### Page 09

### Examen national 2010 session rattrapage 
I) On considère la fonction numérique $g$ définie sur $[0; +\infty[$ :  
$$ g(x) = x^3 - x - 2 \ln x + 3 $$

1) a) Vérifier que pour tout $x \in [0; +\infty[$ :  
$$ 3x^3 - x = (x - 1)(3x^2 + 3x + 2) $$  
b) Montrer que $g'(x) = \frac{(x-1)(3x^2+3x+2)}{x}$ pour tout $x \in [0; +\infty[$.  

2) a) Vérifier que $\frac{3x^2 + 3x + 2}{x} \geq 0$ pour tout $x\in [0; +[.  
b) En déduire que le signe de $g'(x)$ est celui de le signe de $1 - x$ sur $]0; +\infty[$.  

3) a) Montrer que la fonction $g$ est décroissante sur $[1; +\infty[$.  
b) Montrer que $g(x) \to 0$ pour tout $x \in [0; +\infty[$ (remarquer que $g(1) > 0$).  

II) Soit la fonction numérique définie sur $]0; +\infty[$ par :  
$$ f(x) = x - 1 + \frac{x - 1 + \ln x}{x^2} $$  
Soit $(C_f)$ la courbe représentative de la fonction $f$ dans un repère orthonormé $(O; \vec{i}; \vec{j})$ (on prend $||\vec{u}|| = 1cm$)  
1) Montrer que $f'(x) = \frac{g(x)}{x^3}$ pour tout $x \in ]0; +\infty[$, puis déduire que la fonction $f$ est croissante sur $]0; +\infty[$.  

2) a) Montrer que $$ \lim_{x \to 0} f(x) = -\infty $$ puis interpréter géométriquement le résultat.  
b) Montrer que $$ \lim_{x \to +\infty} \frac{x - 1 + \ln x}{x^2} = 0 $$ puis que  
$$ \lim_{x \to +\infty} f(x) = +\infty $$ (on rappelle que $$ \lim_{x \to +\infty} \ln x = +\infty $$).  
c) Montrer que la droite $(D)$ d’équation $y = x - 1$ est une asymptote oblique de la courbe $(C)$ au voisinage de $+\infty$.  
3) Montrer que $y = 3(x - 1)$ est une équation de la droite tangente à la courbe $(C)$ au point de coordonnée $(1; 0)$.  
4) Construire la droite $(D)$ et la courbe $(C)$ (on admet que la courbe $(C)$ a un unique point d’inflexion dont on ne demandera pas de déterminer).  

---

### Examen national 2008 session normale
II) On considère la fonction numérique $g$ définie sur $]0; +\infty[$ par :  
$$ g(x) = x - 2 \ln x $$  

1) a) Calculer $g'(x)$ pour tout $x \in ]0; +\infty[$.  
b) Montrer que $g$ est décroissante sur $[2; +\infty[$.  
2) En déduire que $g(x) > 0$ pour tout $x \in ]0; +\infty[$ (remarquer que $g(2) > 0$).  

II) On considère la fonction numérique $f$ définie sur l’intervalle $]0; +\infty[$ par :  
$$ f(x) = x - (lnx)^2 $$  
Soit $(C_f)$ la courbe représentative de la fonction $f$ dans un repère orthonormé $(O; \vec{i}; \vec{j})$  
1) Calculer $$ \lim_{x \to 0} f(x) $$ puis interpréter géométriquement le résultat.  
2) a) Montrer que $$ \lim_{x \to +\infty} \frac{(\ln x)^2}{x} = 0 $$ (poser $$ t = \sqrt{x} $$, on rappelle que $$ \lim_{t \to +\infty} \frac{\ln t}{t} = 0 $$)  
b) En déduire que $$ \lim_{x \to +\infty} f(x) = +\infty $$ (remarquer que $f(x) = x (1 - \frac{(\ln x)^2}{x})$).  
c) Calculer $$ \lim_{x \to +\infty} (f(x) - x) $$ puis déduire que $(C_f)$ admet une branche parabolique de direction la droite $(D)$ d’équation $y = x$ au voisinage de $+\infty$.  
d) Montrer que $(C_f)$ se trouve au-dessous de la droite $(D)$.  

3) a) Montrer que $$ f' (x) = \frac{g(x)}{x} $$ pour tout $x \in ]0; +\infty[$ et montrer que $f$ est strictement croissante sur $]0; +\infty[$.  
b) Dresser le tableau de variation de $f$.  
c) Montrer que $y = x$ est l’équation de la tangente à $(C_f)$ au point d’abscisse $1$.  
4) Montrer que l’équation $f(x) = 0$ admet une seule solution $\alpha$ dans $]0; +\infty[$ tel que $$ \frac{1}{4} < \alpha < \frac{1}{2} $$.  
(On admet que $(\ln 2)^2 < \frac{1}{2} $).  
5) Tracer la droite $(D)$ et la courbe $(C_f)$ dans le repère $(O; \vec{i}; \vec{j})$.  
(On admet que $I(e; e - 1)$ est un point d’inflexion à $(C_f)$, on prendra $e \approx 2.7$).
```

<!-- Page 186 -->

```markdown
# Correction des examens nationaux
## Logarithme népérien
**Prof FAYSAL**: 0681399067

### Examen national 2025 session normale

---

## Partie I:
Le graphique représente les courbes $C_g$ et $C_h$

$$
g : x \mapsto x^2 \quad et \quad h : x \mapsto 2(\ln x) - ( \ln x)^2
$$

1a) Justifier graphiquement que pour tout $x \in [0, +\infty[$ : $g(x) - h(x) > 0$  
La courbe $C_g$ se trouve au-dessus de la courbe $C_h$ et se coupent en aucun point par conséquent pour tout $x \in [0, +\infty[$ : $g(x) > h(x)$.  
D'où pour tout $x \in [0, +\infty[$ : $g(x) - h(x) > 0$.  

b) Déduire que pour tout $x \in [0, +\infty[$ : $\left[ \frac{2(\ln x) - (\ln x)^2}{x^2} < 1\right]$  
D'après la question précédente on a pour tout $x \in [0, +\infty[$ : $g(x) > h(x)$, donc pour tout $x \in [0, +\infty[$ : $x^2 > h(x)$, d'où pour tout $x \in [0, +\infty[$ :  $\left[ \frac{h(x)}{x^2} < 1 \right.$. Par suite pour tout $x \in [0, +\infty[$ : $\left[ \frac{2(\ln x) - (\ln x)^2}{x^2} < 1\right]$. (Remarquons que pour tout $x \in [0, +\infty[$ : $2 - \ln x > 0$).

2) a) Vérifier que la fonction $H : x \mapsto x \ln x - x$ est une primitive de la fonction $x \mapsto \ln x$ sur l'intervalle $]0, +\infty[$.  

La fonction $H$ est dérivable sur l'intervalle $]0, +\infty[$ [comme produit et somme de fonctions dérivables sur $]0, +\infty[$ et on a pour tout $x \in ]0, +\infty[$ : $H'(x) = (x) \ln x + x (\ln x)' - (x)' = \ln x + 1 - 1 = \ln x$.

Alors la fonction $H$ est une primitive de la fonction $x \mapsto \ln x$ sur $]0, +\infty[$.

b) Résoudre sur l'intervalle $]0, +\infty[$ l'équation $h(x) = 0$ et en déduire les deux points d'intersection de la courbe $C_k$ avec l'axe des abscisses.  

Soit $e \in ]0, +\infty[$ tels que $h(e) = 0 \Leftrightarrow \ln x = 0 \implies x= 1 \quad ou \quad 2 - \ln x = 0 \Leftrightarrow x = 2 \quad ou \quad x = 1 \quad ou \quad x = e^2$.

Donc $S = \{1, 2\}$.  
Par conséquent la courbe $C_h$ coupe l'axe des abscisses en deux points $A(1, 0)$ et $B(e^2, 0)$.

---

## Partie II:
On considère la fonction numérique $f$ définie sur $]0, +\infty[$ par : $f(x) = -\frac{(\ln x)^2}{x}$.  
Soit $C_f$ sa courbe représentative dans un repère orthonormé $(O; \mathbf{i}, \mathbf{j})$.  

1a) Vérifier que $\lim_{x \to 0^+} f(x) = -\infty$ et donner une interprétation géométrique de ce résultat.  
On a : 

$$
\lim_{x \to 0^+} \ln x^2 = -\infty \quad et \quad \lim_{x \to 0^+} \frac{1}{x} = +\infty
$$  
Donc $$ \lim_{x \to 0^+} \frac{-(\ln x)^2}{x} = -\infty $$.  

D'où $$ \lim_{x \to 0^+} f(x) = -\infty $$.

b) Montrer que $$ \lim_{x \to +\infty} \frac{(\ln x)^2}{x} = 0 $$ (On peut poser $t = \sqrt{x}$, puis calculer $\lim_{x \to +\infty} f(x)$.  
En appliquant le changement de variables suivant : $t = \sqrt{x} \longrightarrow t^2 = x \quad \Rightarrow \quad x \to +\infty \Leftrightarrow t \to +\infty.$

Donc $$ \lim_{x \to +\infty} \frac{(\ln x)^2}{x} = \lim_{t \to +\infty} \frac{4(\ln t)^2}{t^2}$$

$$ = 4 \times 0^2 = 0 \text{ (car } \lim_{t \to +\infty} \ln t = 0 \text{)}. $$
Alors $$ \lim_{x \to +\infty} f(x) = +\infty$$.

c) Déduire que la droite d'équation $y = x$ est une asymptote oblique de $C_f$ au voisinage de $+\infty$.  
On a : 

$$ \lim_{x \to +\infty} (f(x) - x) = \lim_{x \to +\infty} \left( -\frac{(\ln x)^2}{x} - x \right) = -\infty. $$  
Par conséquent la droite d'équation $y = x$ est une asymptote oblique de $C_f$ au voisinage de $+\infty$.
```

<!-- Page 187 -->

```markdown
## Correction des examens nationaux
### Logarithme népérien
#### Prof Fayssal : 0681399067
### 2 Bac sciences PC/SVT/ST
### Page 02

2) a) Montrer que pour tout x de ]0, +∞[, $f'(x) = 1 - \frac{2 \ln x - (\ln x)^2}{x^2}$  
Soit $x \in ]0, +∞[$ on a  
$$ f'(x) = 1 - \frac{2 \ln x - (\ln x)^2}{x^2} = 1 - \frac{2 \ln x - (\ln x)^2}{x^2} $$  
D'où $\forall x \in ]0, +∞[, \; f'(x) = 1 - \frac{2 \ln x - (\ln x)^2}{x^2} $  

b) Montrer que la fonction f est strictement croissante sur l'intervalle ]0, +∞[.  
(On peut utiliser la question Partie 1-1-b)  
Soit $x \in ]0, +∞[$, $f'(x) = 1 - \frac{2 \ln x - (\ln x)^2}{x^2}$  
D'après la question 1-1-b, on a $\forall x \in ]0, +∞[, \; f'(x) > 0$ par suite la fonction f est strictement croissante sur ]0, +∞[.  

3) a) Montrer que l'équation $f(x) = 0$ admet une unique solution $\alpha$ dans ]0, +∞[.  
On a vu que la fonction f est continue et strictement croissante sur ]0, +∞[ et $0 \in f(0, +∞) = -\infty, +\infty[$, alors d'après un corollaire du TVI, l'équation $f(x) = 0$ admet une unique solution $\alpha$ dans ]0, +∞[.  

b) Vérifier que $e^{-1} < \alpha < 1$ et montrer que $\ln(\alpha) = -\alpha$.  
On a  
$$ f(e^{-1}) = e^{-1} - \frac{(\ln(e^{-1}))^2}{e^{-1}} = e^{-1} - 1 = 1 - e^{-2} $$  
Donc $f(e^{-1}) < 0, \; f(1) = 1, \; donc f(1) > 0.$  
Alors $f(e^{-1}) < f(1)$ et comme f est strictement croissante alors $e^{-1} < \alpha < 1$.  
Et on a  
$$ f(\alpha) = \alpha < \alpha - \frac{(\ln(\alpha))^2}{\alpha} $$  
$$ \Leftrightarrow \; (\ln(\alpha))^2 = 0 $$  
$$ \Leftrightarrow \; \ln(\alpha) - \alpha = 0 $$  
$$ \Rightarrow \; \ln(\alpha) = -\alpha $$  
D'où $\ln \alpha = -\alpha$.  

c) Montrer que $f(x) \leq x$ pour tout x de ]0, +∞[.  
Soit $x \in ]0, +∞[$, donc $\forall x \in ]0, +∞[, \; f(x) - x = - \frac{(\ln x)^2}{x}$ ou  
$$ \forall x \in ]0, +∞[, \; f(x) - x < 0. $$  
D'où $\forall x \in ]0, +∞[, \; f(x) < 0$.  

d) Montrer que $y$ est l'équation de la tangente (T) à la courbe $(C_f)$ au point d'abscisse 1.  
L'équation réduite de la tangente (T) à la courbe $(C_f)$ au point d'abscisse 1 est :  
$$ y = f'(1)(x - 1) + f(1), $$  
et comme $f(1) = 1 - 0 = 1$ et $f'(1) = 1 - 0 = 1$, alors $(T): \; y = x - 1$  
D'où $y = x$ est l'équation de la tangente (T) à $(C_f)$ au point d'abscisse 1.  

4) Le graphique représente la courbe $(C_f)$ dans le repère orthonormé $(O; \; i; \; j)$.  
Soit $\varphi$ la restriction de f sur l'intervalle ]0, 1[.  

a) Montrer que $\varphi$ admet une fonction réciproque $\varphi^{-1}$ définie sur un intervalle J que l'on déterminera.  
On a la fonction f est continue et strictement croissante sur ]0, +∞[, donc $\varphi$ est continue et strictement croissante sur l'intervalle ]0, 1[$ alors la fonction $\varphi$ admet une fonction réciproque $\varphi^{-1}$ définie sur l'intervalle  
$$ J = \varphi(]0, 1[) = \lim_{x \to 0^{-}} f(x), \; f(1) = -\infty, \; 1]. $$
```

<!-- Page 188 -->

```markdown
# Correction des examens nationaux
## Logarithme népérien
Prof FAYSAL : 0681399067  
Page 03

### Partie II

b) Montrer que $\varphi^{-1}$ est dérivable en 0 et que 
$$
(\varphi^{-1})'(0) = \frac{\alpha}{2 + 2\alpha}
$$
On a $\alpha \in [0, 1]$ et $\varphi(0) = \alpha$ et 
On a $\varphi$ est dérivable en $\alpha$ et :
$$
\varphi'(\alpha) = f'(\alpha) = 1 - 2\ln( \alpha) - (\ln( \alpha))^2
$$
$$
\varphi'(\alpha) = \frac{-2\alpha - (\alpha)^2}{(\alpha)^2}
$$
$$
= \frac{-2\alpha}{\alpha} + 2 + \alpha = \frac{2 + 2\alpha}{\alpha}
$$
Et comme $\alpha > 0$ alors $\varphi'(\alpha) \neq 0$ par conséquent la fonction $\varphi^{-1}$ est dérivable en 0 et en $a$ 
$$
(\varphi^{-1})'(0) = \frac{1}{\varphi'(\alpha)} = \frac{\alpha}{2 + 2\alpha}
$$
c) Recopier la courbe de $\varphi$ et construire la courbe de $\varphi^{-1}$ dans le repère $(0; i; \bar{y})$

### Partie III

1) Montrer par récurrence que $1 < u_n$ pour tout $n \in \mathbb{N}$.  
Pour $n = 0$ on $u_0 = e$ donc $u_0 > 1$. Héritée : Soit $n \in \mathbb{N}$ supposons que $u_n > 1$ et montrons que $u_{n+1} > 1$.  
D'après (HR) on a $u_n > 1$ et comme la fonction $f$ est strictement croissante sur $\mathbb{R}$ alors $f(u_n) > f(1)$ donc $u_{n+1} > 1$ car $f(1) = 1$.  
D'où $\forall n \in \mathbb{N}; u_n > 1$.

2) a) Montrer que la suite $(u_n)$ est décroissante. (On utilise la question Partie II-3-c)  
D'après la question II-3-c.
On a $\forall x \in [0; +\infty]; f(x) < x$  
Donc $\forall x \in [1; +\infty[; f(x) < x$  
Et on sait que $\forall n \in \mathbb{N}; u_n > 1$,  
Alors $\forall n \in \mathbb{N}; u_{n+1} \leq u_n$.  
Par conséquent la suite $(u_n)$ est décroissante.

b) En déduire que la suite $(u_n)$ est convergente.  
Puisque la suite $(u_n)$ est minorée par 1 et est décroissante alors elle est convergente.

c) Déterminer la limite de la suite $(u_n)$.  
La suite $(u_n)$ est définie par :  
$$
u_0 = e \quad \text{et} \quad u_{n+1} = f(u_n), \quad \forall n \in \mathbb{N}
$$
f est continue sur $[1, +\infty[$ et  
$$
f(1, +\infty[) = [1, +\infty[
$$
alors la limite de la suite $(u_n)$ est convergente.  
La suite $(u_n)$ est la solution dans l'intervalle $[1; +\infty[$ de l'équation $f(x) = x$.  
On a  
$$
f(x) = x \Leftrightarrow x - \frac{(\ln x)^2}{x} = x  
\Leftrightarrow (\ln x)^2 = 0  
\Leftrightarrow x = 0
$$
$$
\Leftrightarrow x = 1
$$
Et comme $1 \in [1; +\infty[$ alors $\lim_{n \to +\infty} u_n = 1$.
```

<!-- Page 189 -->

```markdown
# Correction des examens nationaux
## Logarithme népérien

**Examen national 2023 session normale**

Soit $f$ la fonction numérique définie sur $]0, +\infty[$ avec $f(x) = 2 - \frac{2}{x} + (1 - \ln x)^2$  
Et $(C)$ sa courbe représentative dans un repère orthonormé $(O, \, \vec{i}, \, \vec{j})$ (unité : 1cm)

### 1a) Vérifier que pour tout $x \in ]0, +\infty[$ :
$$ f(x) = \frac{3x - 2 + 2x \ln x + x (\ln x)^2}{x} $$

$$ f(x) = 2 - \frac{2}{x} + (1 - \ln x)^2 $$
$$ = 2x - 2 + x (1 - \ln x)^2 $$
$$ = \frac{2x - 2 + x (1 - 2 \ln x + (\ln x)^2)}{x} $$
$$ = \frac{3x - 2 - 2x \ln x + x (\ln x)^2}{x} $$
$$ = \frac{3x - 2 - 2x \ln x + x (\ln x)^2}{x} $$

### b) Montrer que 
$$ \lim_{x \to 0^+} x (\ln x)^2 = 0 $$

$$ \lim_{x \to 0^+} x(\ln x)^2 = \lim_{x \to 0^+} (\sqrt{x})^2 \, (\ln (\sqrt{x}))^2 $$
$$ = \lim_{x \to 0^+} (\sqrt{x})^2 (2 \ln \sqrt{x})^2 $$
$$ = \lim_{x \to 0^+} \frac{(2\sqrt{x})^2}{\sqrt{x}} $$
$$ = \lim_{x \to 0^+} 2 X \ln X = 0 $$

**On pose $X = \sqrt{x}$ donc $x = X^2$ ;**  
ou $x \to 0^+ \Leftrightarrow X \to 0^+$  
$$ \lim_{x \to 0^+} x (\ln x)^2 = \lim_{x \to 0^+} (2 X)^2 = 0 ; \quad \text{(car } \lim_{x \to 0^+} X \ln X = 0) $$

### c) En déduire que 
$$ \lim_{x \to 0^+} f(x) = -\infty $$  
puis interpréter géométriquement le résultat
$$ \lim_{x \to 0^+} f(x) = \lim \frac{3x - 2 - 2x \ln x + x (\ln x)^2}{x} $$
$$ = -2 \, \text{et} \, 0^+-\infty $$

Car :  
$$ \lim_{x \to 0^+} 3x - 2 = -2 $$  
$$ \lim_{x \to 0^+} x \ln x = -\infty \, \text{et} \, \lim_{x \to 0^+} (\ln x)^2 = 0 $$

**Donc la droite d’équation $x = 0$ c-à-dire l’axe des abscisses est asymptote verticale à $(C)$**
```

<!-- Page 190 -->

```markdown
www.elboutkhili.jimdofree.com  
Prof FAYSAL : 0681399067  
Prof fayssal  

# Correction des examens nationaux  
# Logarithme népérien  
# 2 Bac sciences PC/SVT/ST  
# Page 05  

d) Calculer $$ \lim_{x \to +\infty} f(x) $$ puis déterminer la branche infinie de (C) au voisinage de $+\infty$  
$$ \lim_{x \to +\infty} f(x) = \lim_{x \to +\infty} 2 - \frac{2}{x} + \frac{(1 - \ln x)^2}{x} = +\infty $$  
Car $$ \lim_{x \to +\infty} (1 - \ln x)^2 = +\infty $$  
$$ \lim_{x \to +\infty} \frac{2}{x} = 0 $$  

Donc $$ \lim_{x \to +\infty} f(x) = \lim_{x \to +\infty} \frac{x}{x} $$  

$$ = \lim_{x \to +\infty} \frac{3x - 2 - 2\ln x + x(ln x)^2}{x^2} $$  
$$ = \lim_{x \to +\infty} \frac{3 - \frac{2}{x^2} + 2\ln x + (ln x)^2}{x} = 0 $$  

Car $$ \lim_{x \to +\infty} \frac{3}{x^2} = 0; \lim_{x \to +\infty} 2\ln x = +\infty $$  

D'où $$ \lim_{x \to +\infty} f(x) = 0 $$  

Donc la courbe (Cf) admet une branche parabolique suivant la droite (Ox) voisinage de $+\infty$  

2) Montrer que $$ f'(x) = \frac{2(1 - x + \ln x)}{x^2} $$ pour tout $x$ de l'intervalle $]0, +\infty[$  

Rappel  
- La fonction ln est défini et dérivable sur l'intervalle $]0, +\infty[$  
- Pour tout $x \in ]0, +\infty[$ : $$ ln'(x) = \frac{1}{x} $$  
- $$ \left( \frac{1}{x} \right)' = -\frac{1}{x^2} \text{ et } (u^n)' = n u^{n-1} $$  

La fonction est dérivable sur l'intervalle $]0, +\infty[$ car c’est une somme et composée des fonctions dérivables sur l'intervalle $]0, +\infty[$  
Soit $x \in $ l'intervalle $]0, +\infty[$  
$$ f'(x) = \left( 2 - \frac{2}{x} + (1 - \ln x)^2 \right)' $$  
$$ = 0 + \frac{2}{x^2} + (1 - \ln x)^1 $$  
$$ = \frac{2}{x^2} - 2 \cdot (1 - \ln x) $$  
$$ = \frac{2}{x^2} - \frac{2(1 - x + \ln x)}{x^2} $$  

3) En exploitant le tableau de variation ci-dessous, de la fonction dérivée $f'$ sur $]0, +\infty[$  

a) Prouver que $f$ est strictement croissante sur $]0, +\infty[$ puis dresser le tableau de variation de $f$  
D’après le tableau on a $0$ est une valeur minimale de $f'$ sur l’intervalle $]0, β[$  
Donc $ \forall x \in ]0, β[: f'(x) \geq 0 $  

Et on a $f([{β}; +\infty[) = ]0; f(β)[$  
Donc $ \forall x \in [β; +\infty[: f'(x) > 0 $  
Donc $ \forall x \in ]0, +\infty[: f'(x) \geq 0 $  
Donc $f$ est strictement croissante sur $]0, +\infty[$  

b) Donner le tableau de signe de la dérivée seconde $$ f''(x) $$ de la fonction $f$ sur $]0, +\infty[$  
On a $f'$ est strictement décroissante sur les intervalles $]0, 1[$ et $[β; +\infty[$ donc  
Donc $ \forall x \in ]0, 1[ \cup [β; +\infty[: f''(x) < 0 $  
On a $f'$ est strictement croissante sur les intervalles $[1; β[$ donc  
Donc $ \forall x \in [1; β[: f''(x) > 0 $  

D’où le tableau de signe de $f''$ est :  
```

<!-- Page 191 -->

```markdown
# Correction des examens nationaux
## Logarithme népérien
### Prof Fayssal : 0681399067
### 2 Bac sciences PC/SVT/ST 
### Page 06

c) En déduire la concavité de la courbe $(C)$ en précisant les abscisses de ses deux points d’inflexions  
D’après la question précédente on a :

|    | Concavité        | Point d'inflexion |
|----|-------------------|-------------------|
| $a$ | $f''$ s'annule en 1 et en $\beta$ en changeant le signe donc les points d'inflexion de $(C)$ sont les points d'abscisses 1 et $\beta$ |

1) La courbe $(C_g)$ ci-contre est la représentation graphique de la fonction $g: x \mapsto f(x) - x$ et qui s'annule en 1 et 1 $(\alpha \approx 0, 3)$  
Soit $(\Delta)$ la droite d’équation $y=x$

b) Déduire que la droite $(\Delta)$ est en dessous de $(C)$ sur l’intervalle $[\alpha; 1] et au-dessous de $(C)$ sur les intervalles $[0, \alpha[$ et $[1; +\infty[$  
On a $\forall x \in [\alpha; 1]: g(x) \geq 0$  
Donc $\forall x \in [\alpha; 1]: f(x) - x \geq 0$  
Donc la droite $(\Delta)$ est en dessous de $(C)$ sur l’intervalle $[\alpha; 1]$

On a $\forall x \in [0, \alpha [ \cup [1; +\infty[$: $g(x) < 0$  
Donc $\forall x \in [0, \alpha [ \cup [1; +\infty[$: f(x) - x < 0$  
Donc la droite $(\Delta)$ est en au-dessus de $(C)$ sur les intervalles $[0, \alpha[$ et $[1; +\infty[$

5) Construire la courbe $(C)$ et $(\Delta)$ dans le repère $(O, \mathbf{i}, \mathbf{j})$  
(on prend: $\alpha \approx 0, 3$ et $f(\beta) \approx 1, 9$)

6) Vérifier que $H: x \mapsto 2x - x \ln(x)$ est une primitive de : $x \mapsto 1 - \ln(x)$ sur $[1; \alpha]$  
La fonction $x \mapsto 2x - x \ln(x)$ est dérivable sur $[1; \alpha]$ car c'est une somme de deux fonctions dérivables sur $[1; \alpha]$  
ET on a :

$$ H'(x) = (2x - x \ln(x))' = 2 - ( \ln x + \frac{x}{x} ) = 1 - \ln(x) $$

Donc $H: x \mapsto 2x - x \ln(x)$ est une primitive de : $x \mapsto 1 - \ln(x)$ sur $[1; \alpha]$
```

<!-- Page 192 -->

```markdown
### Correction des examens nationaux
#### Logarithme népérien
#### Prof FAYSAL : 0681399067

### Examen national 2022 session rattrapage
Soit $f$ la fonction numérique définie sur $[0, +\infty[ \quad f(x) = x^4(lnx - 1)^2 ; \quad x > 0$ 

1) Calculer $\lim_{x \to +\infty} f(x)$ puis déterminer la branche infinie de $f(x)$ au voisinage de $+\infty$.

$$\lim_{x \to +\infty} f(x) = \lim_{x \to +\infty} x^4(lnx - 1)^2 = +\infty$$

**Car** $\lim_{x \to +\infty} x^4 = +\infty$ et $\lim_{x \to +\infty} ln(x) = +\infty$ 

$$ f(x) = \lim_{x \to +\infty} x^4(lnx - 1)^2 = +\infty$$  

**Car** $\lim_{x \to +\infty} x^3 = +\infty$ et $\lim_{x \to +\infty} ln(x) = +\infty$ 

On a $\lim_{x \to +\infty} f(x) = +\infty$ donc (c) admet une branche parabolique de direction $(Oy)$ au voisinage de $+\infty$

2) a) Montrer que $f$ est continue à droite en $0$ 

$$\lim_{x \to 0^+} f(x) = \lim_{x \to 0^+} x^4(lnx - 1)^2 = \lim_{x \to 0^+} (lnx)^2 - 2\ln(x) + 1$$

**Car** $\lim_{x \to 0^+} (xlnx)^2 = 0$ et $\lim_{x \to 0^+} x^4 = 0$

Donc 

$$\lim_{x \to 0^+} f(x) = f(0)$$

D'où $f$ est continue à droite en $0$

b) Étudier la dérivabilité de $f$ à droite en $0$ puis interpréter le résultat géométriquement.

$$f'(x) = \lim_{x \to 0^+} \frac{f(x) - f(0)}{x} = \lim_{x \to 0^+} \frac{x^4(lnx - 1)^2}{x} = \lim_{x \to 0^+} x^3(lnx + 1)$$ 

**Car** $\lim_{x \to 0^+} (xlnx)^2 = 0$ et $\lim_{x \to 0^+} x^3(lnx) = 0$

Donc $f'$ est dérivable à droite de $0$ et $f'(0) = 0$

**Interprétation géométrique**: La courbe (c) admet une demi-tangente horizontale à droite du point $(0 ;0)$
```

<!-- Page 193 -->

```markdown
2) $M_f'(x) = 2x^3(ln x - 1)(2 ln x - 1)$  
On a la fonction $f$ est dérivable sur $]0,+\infty[$ car c'est une composée et produit des fonctions dérivable sur $]0,+\infty[$  
Soit $x \in ]0,+\infty[$  
$$ f'(x) = (x^4(ln x - 1)^2)' = 4x^3(ln x - 1)^2 + 2x^4(1)(ln x - 1) $$  
$$ = 4x^3(ln x - 1)^2 + 2x^4 \frac{1}{x}(ln x - 1) $$  
$$ = 4x^3(ln x - 1)^2 + 2x^3(ln x - 1) $$  
$$ = 2x^3(ln x - 1)(2 ln x - 1) $$  

b) Dresser le tableau de variation de $f$  
Soit $x \in ]0,+\infty[$ donc $2x^3 > 0$  
$$ f'(x) = 0 \iff 2x^3(ln x - 1)(2 ln x - 1) = 0 $$  
$$ \iff ln(x) - 1 = 0 \text{ ou } 2ln(x) - 1 = 0 $$  
car $x > 0 \Rightarrow ln(x) = 1 \text{ ou } ln(x) = \frac{1}{2}$  
$$ x = e \text{ ou } x = e^{\frac{1}{2}} \text{ ou } x = \sqrt{e} $$  

4)a) Sachant que $f''(x) = 2x^2(6 ln x - 5) \ln x$, étudier le signe de $f''(x)$ sur $]0,+\infty[$  
Soit $x \in ]0,+\infty[$ donc $2x^2 > 0$  
$$ f''(x) = 0 \iff 2x^2(6 ln x - 5) ln x = 0 $$  
$$ \iff 6ln(x) - 5 = 0 \text{ ou } ln(x) = 0 $$  
$$ \iff ln(x) = \frac{5}{6} \text{ ou } x = e^{\frac{5}{6}} \text{ ou } x = 1 $$  

b) Déduire que la courbe $(C)$ admet deux points d'inflexion dont on déterminera les abscisses  
On a $f''$ s'annule et change de signe en $e^{\frac{5}{6}}$ et en $1$ donc $(C)$ admet deux points d'inflexion d'abscisses $e^{\frac{5}{6}}$ et $1$  

5) a) Construire la courbe $(C)$  

b) En utilisant la courbe $(C)$, déterminer le nombre de solutions de l'équation $x^2(ln x - 1) = -1$  
L'équation $x^2(ln x - 1) = -1$ est définie si $x \in ]0,+\infty[$  
De plus on a $x^2(ln x - 1) < 0$ donc $ln x - 1 < 0$ donc $0 < x < e$  
Soit $x \in ]0, e[$  
$$ x^2(ln x - 1) = -1 \iff x^2(ln x - 1) = -1 $$  
$$ \iff x^4(ln x - 1)^2 = 1 $$  
$$ \iff f(x) = 1 $$  
Donc le nombre de solutions de l'équation est le nombre de points d'intersection de $(C)$ avec la droite d'équation $y = 1$ dans $]0, e[$  
D'où l'équation $x^2(ln x - 1) = -1$ admet deux solutions  
On considère la fonction $g$ définie sur $\mathbb{R}$ par $g(x) = f(|x|)$  
a) Montrer que la fonction $g$ est paire  
Soit $x \in \mathbb{R}$  
On a $-x \in \mathbb{R}$  
Et on a : $g(-x) = f(-|x|) = |-x|^1(ln|-x| - 1)^2 = f(|x|) = g(x)$  
Donc la fonction $g$ est paire  
```

<!-- Page 194 -->

```markdown
## Correction des examens nationaux
### Logarithme népérien
### Page 09

b) Construire $(C_g)$ la courbe représentative de $g$ dans le même repère $(O, \vec{i}, \vec{j})$  
Si $x \in [0; +\infty[$ on a $g(x) = f(|x|) = f(x)$ donc la courbe $(C_g)$ est confondue avec la courbe $(C)$ de $f$ sur $[0; +\infty[$  
Et on a la fonction $g$ paire donc $(C_g)$ est symétrique par rapport à la droite $(Oy)$

### 3 - a) Déduisons que l'équation $h(x) = 0$ admet une solution unique $u$ sur $]0; +\infty[$  
Comme $h$ est continue et strictement croissante sur $]0; +\infty[$ et $0 \in h(0; +\infty) = \mathbb{R}$. D'après le T.V.I l'équation $h(x) = 0$ admet une solution unique $u$ dans $]0; +\infty[$  
b) Montrons que $0 < \alpha < 1$  
On a $\lim_{x \to 0^+} h(x) = -\infty$ et $h(1) = 1$ donc $0 \in h(]0; 1])$  
Alors $\alpha \in [0; 1[, par conséquent $0 < \alpha < 1$

### 4 - a) Vérifions que $h\left(\frac{1}{\alpha}\right) = 0$ est solution de l'équation $h(x) = 0$ donc $h\left(0\right) \Leftrightarrow \ln(\alpha) = 0 \Leftrightarrow \alpha = -\ln(\alpha)$  
D'autre part : $h\left(\frac{1}{\alpha}\right) = \frac{1}{\alpha} + \ln\left(\frac{1}{\alpha}\right) = \frac{1}{\alpha} - \ln(\alpha)$.  

D'où $h\left(\frac{1}{\alpha}\right) = \alpha + \frac{1}{\alpha} > 2$

b) Déduisons que $h\left(\frac{1}{\alpha}\right) > 2$  
On a $h\left(\frac{1}{\alpha}\right) - 2 = \alpha + \frac{1}{\alpha} - 2 = \frac{(\alpha - 1)^2}{\alpha} > 0$,  
D'où $h\left(\frac{1}{\alpha}\right) > 2$.

### Examen national 2021 session rattrapage
On considère la fonction numérique $h$ définie sur $]0; +\infty[$ [par : $h(x) = x + \ln x$  
1) Montrer que $h$ est strictement croissante sur $]0; +\infty[$  
La fonction $h$ est dérivable sur $]0; +\infty[$ comme somme de deux fonctions usuelles dérivables  
Et pour tout $x > 0$ on a :  
$h'(x) = 1 + \frac{1}{x} - \frac{x+1}{x} > 0 \quad (car : x > 0)$  

D'où $h$ est strictement croissante sur $]0; +\infty[$  
2) - Déterminons $h(0; +\infty)$  
Puisque $h$ est dérivable et strictement croissante sur $]0; +\infty[$  
Alors continue et strictement croissante sur $]0; +\infty[$

Donc $h(0; +\infty) = \lim_{x \to 0^+} h(x); \lim_{x \to +\infty}$  
Et on a $\lim_{x \to 0^+} h(x) = \lim_{x \to 0^+} x + \ln(x) = -\infty$ et $\lim_{x \to +\infty} h(x) = \lim_{x \to +\infty} x + \ln(x) = +\infty$  
D'où $h(0; +\infty) = [-\infty; +\infty] \subset \mathbb{R}$

### Examen national 2020 session normale
On considère la fonction $g$ définie sur $]0; +\infty[$ par $g(x) = 2\sqrt{x - 2} - \ln(x)$  
1)a) Montrer pour tout $x \in ]0; +\infty[$ que  
$g'(x) = \frac{\sqrt{x - 1}}{x}$  

La fonction $g$ est dérivable sur $]0; +\infty[$ car c'est une somme des fonctions dérivables sur $]0; +\infty[$  
Soit $x \in ]0; +\infty[$  

On a $g'(x) = (2\sqrt{x - 2} - \ln(x))' = 2 \cdot \frac{1}{2\sqrt{x - 2}} \cdot 1 - \frac{1}{x} = \frac{2}{\sqrt{x - 2}} - \frac{1}{x}$
```

<!-- Page 195 -->

```markdown
## Correction des examens nationaux
### Logarithme népérien

#### 2 Bac sciences PC/SVT/ST

**Page 10**

b) Montrer que $g$ est croissante sur $[1, +\infty[$  
Soit $x \in [1, +\infty[$  
Donc $x \geq 1 \Rightarrow \sqrt{x} \geq 1 \Rightarrow \sqrt{x} - 1 \geq 0$  
Donc $g'(x) = \frac{\sqrt{x} - \ln(x)}{x} \geq 0$  
Donc $g$ est croissante sur $[1, +\infty[$  
c) En déduire pour tout $x \in [1, +\infty[$ que $0 \leq \ln(x) \leq 2\sqrt{x}$  
(Remarque que $2\sqrt{x} - 2 \leq 2\sqrt{x}$)  
Soit $x \in [1, +\infty[$  
Donc $x \geq 1 \Rightarrow g(x) \geq g(1)$ car $g$ est croissante sur $[1, +\infty[$  
Donc $2\sqrt{x} - 2 - \ln(x) \geq 0$  
Donc $\ln(x) \leq 2\sqrt{x}$  
Et on a $x \geq 1$ donc $\ln(x) \geq 0$  
Donc pour tout $x \in [1, +\infty[$ que $0 \leq \ln(x) \leq 2\sqrt{x}$  

d) Montrer pour tout $x \geq 1$ que  
$$0 \leq \frac{(\ln(x))^3}{x^2} \leq \frac{8}{\sqrt{x}}$$  
et en déduire  
$$\lim_{x \to +\infty} \frac{(\ln(x))^3}{x^2} = 0$$  
Soit $x \in [1, +\infty[$  
On a $0 \leq \ln(x) \leq 2\sqrt{x}$  
Donc $0 \leq (\ln(x))^3 \leq (2\sqrt{x})^3$  
Donc $0 \leq \frac{(\ln(x))^3}{x^2} \leq \frac{8\sqrt{x^3}}{x^2}$  
Donc $0 \leq \frac{(\ln(x))^3}{x^2} \leq \frac{8}{\sqrt{x}}$  
En déduire  
$$\lim_{x \to +\infty} \frac{(\ln(x))^3}{x^2} = 0$$  

## 2) Montrer que  
$$G: x \mapsto \left( -1 + \frac{4}{3} \sqrt{x} - \ln(x) \right)$$  
est une primitive de $g$ sur $]0, +\infty[$  
La fonction $G$ est dérivable sur $]0, +\infty[$ car c’est une somme et produit des fonctions dérivables sur $]0, +\infty[$  
Soit $x \in ]0, +\infty[$  

### Examen national 2019 session normale
Première partie :  
Soit $f$ la fonction numérique définie sur $]0; +\infty[$ par : $f(x) = x + \frac{1}{2} \ln x + \frac{1}{2} (\ln x)^2$  
1) Calculer $\lim_{x \to 0^+} f(x)$ puis interpréter ce résultat géométriquement.  
$$\lim_{x \to 0^+} f(x) = \lim_{x \to 0^+} \left( x + \frac{1}{2} \ln x + \frac{1}{2} (\ln x)^2 \right) = +\infty$$  
Car : $\lim_{x \to 0^+} \ln(x) = -\infty$ et $\lim_{x \to 0^+} (\ln x)^2 = +\infty$  
Donc la droite d'équation $x = 0$ c-à-dire l’axe des abscisses est asymptote verticale à (Cf)  

2) a) Vérifier que pour tout $x \in ]0; +\infty[$,  
$$f(x) = x + \frac{1}{2} (\ln x - 1)\ln x + \frac{1}{2} (\ln x)^2$$  
b) En déduire que $\lim_{x \to +\infty} f(x) = +\infty$.  
$$\lim_{x \to +\infty} f(x) = \lim_{x \to +\infty} \left( x + \frac{1}{2} (\ln x - 1) \ln x + \frac{1}{2} (\ln x)^2 \right) = +\infty$$  
Car : $\lim_{x \to +\infty} \ln(x) = +\infty$ et $\lim_{x \to +\infty} \frac{1}{2} (\ln x)^2 = +\infty$  

c) Montrer que pour tout $x \in ]0; +\infty[$  
$$\frac{(\ln x)^2}{\sqrt{x}}$$  
et déduire que  
$$\lim_{x \to +\infty} \frac{(\ln x)^2}{x} = 0$$  
On pose $X = x^2$ donc $x \to +\infty \Leftrightarrow X \to +\infty$  
$$\lim_{x \to +\infty} \frac{(\ln x)^2}{X} = \lim_{X \to +\infty} \frac{4(\ln(\sqrt{x}))^2}{X} = 0; \text{ Car } 2\ln X \to 0$$  
```


<!-- Page 196 -->

```markdown
# Correction des examens nationaux
## Logarithme népérien
### 2 Bac sciences PC/SVT/ST
#### Page 10

d) Montrer que (C) admet au voisinage de $+\infty$ une branche parabolique de direction asymptotique la droite $(\Delta)$ d'équation $y = x$

$$
f(x) = \lim_{x \to +\infty} \frac{x + \frac{1}{2} \ln x - \frac{1}{2} \ln^2 x}{x} = \lim_{x \to +\infty} \left( \frac{1}{2x} \ln(x) + \frac{1}{2x} \right) = 1
$$

Car : 

$$
\lim_{x \to +\infty} x = 0 \quad et \quad \lim_{x \to +\infty} (\ln x)^2 = 0
$$

et 

$$
\lim_{x \to +\infty} f(x) - x = \lim_{x \to +\infty} \frac{1}{x^2} \left( -1 + \ln x + \frac{1}{2} (\ln x)^2 \right) = \lim_{x \to +\infty} -\ln(1 - \ln(x)) = +\infty
$$

Car 

$$
\lim_{x \to +\infty} \ln x = +\infty
$$

Donc la courbe $(Cf)$ admet une branche parabolique suivant la droite $(\Delta)$ d'équation $y = x$ au voisinage de $+\infty$.

c) Dresser le tableau de variations de la fonction $f$.

On a pour tout $x \in ]0 ; +\infty[$, $f' (x) = \frac{-1 + \ln x}{x}$

Et on a pour $x \in ]0 ; 1[$, $(x - 1) + \ln x \leq 0$  
Donc $f$ est strictement décroissante sur $]0 ; 1]$ et pour tout $x \in [1 ; +\infty[$, $(x - 1) + \ln x \geq 0$  
Donc $f$ est strictement croissante sur $[1 ; +\infty[$  
On dresse le tableau de variations de $f$.

4.a) Montrer que $f '' (x) = \frac{-2 - \ln x}{x^2}$

Soit $x \in ]0 ; +\infty[$, on a $f' (x) = \frac{-1 + \ln x}{x}$  
La fonction $f$ est dérivable sur $]0 ; +\infty[$ car c’est un quotient des fonctions dérivables sur $]0 ; +\infty[$.

$$
f''(x) = \frac{x - 1 + \ln x}{x} 
= \frac{(x - 1 + \ln x) x' - (x - 1 + \ln x) x^2}{x^2}
= \frac{(1 + \frac{1}{x}) x - x + 1 - \ln x}{x^2}
= \frac{x + 1 - \ln x}{x^2} = \frac{2 - \ln x}{x^2}
$$

b) En déduire que $(C)$ admet un point d'inflexion dont on déterminera les coordonnées.

On a $f ''(x) = \frac{-2 - \ln x}{x^2}$ pour tout $x \in ]0 ; +\infty[$.

Donc $f''$ s'annule et change de signe en $e^2$  
Donc $I(e^2 ; e^2) = (e^2 ; e^2 + 1/2)$ point d’inflexion de la courbe $(C)$.

## Rappel : 
$(\ln x)' = \frac{1}{x} ; \quad (u^n)' = nu^{n-1}$ 

On a $f(x) = x + \frac{1}{2} - \ln x + \frac{1}{2} (\ln x)^2$ donc 

$$
f'(x) = 1 - \frac{1}{x} + \frac{1}{2} \cdot 2 \cdot \frac{1}{x} \ln(x) = 1 - \frac{1}{x} + \ln(x)
$$

$$
= x - 1 + \ln x
$$
```

<!-- Page 197 -->

```markdown
# Correction des examens nationaux
## Logarithme népérien
### 2 Bac sciences PC/SVT/ST
#### Page 11

### 5. a) Montrer que pour tout $x \in ]0; +\infty[$, 
$f(x) - x = -\frac{1}{2}(lnx - 1)^2$ et déduire la position relative de $(C)$ et $(\Delta)$.

$$ f(x) - x = -\frac{1}{2} - lnx + \frac{1}{2}(lnx)^2 $$
$$ = \frac{1}{2}(1 - 2lnx + (lnx)^2) $$
$$ = \frac{1}{2}(1 - lnx)^2 \geq 0 $$

Donc la courbe $(C)$ est en dessous de la droite $(\Delta)$ sur $]0; +\infty[$.  
De plus $f(x) - x = 0 \Leftrightarrow (lnx - 1)^2 = 0 \Leftrightarrow x = e$.

Donc la courbe $(C)$ est tangente à la droite $(\Delta)$ au point $A(e ; e)$.

### 2) Construire $(\Delta)$ et $(C)$ dans le même repère $(0; \, \mathrm{i})$.

---

### Deuxième partie :
Soit $(u_n)$ une suite numérique définie par : $u_0 = 1$ et $u_{n+1} = f(u_n)$ pour tout $n \in \mathbb{N}$.

1. a) Montrer par récurrence que $1 \leq u_n \leq e$ pour tout $n \in \mathbb{N}$.
   - Pour $n=0$ on a $1 \leq u_0 = 1 \leq e$.
   - La propriété est donc vraie pour $n = 0$.
   - Soit $n$ un entier naturel.
   
   Supposons que $1 \leq u_n \leq e$ et montrons que $1 \leq u_{n+1} \leq e$.
   On sait que la fonction $f$ est strictement croissante sur l'intervalle $[1; e]$ et $1 \leq u_n \leq e$, donc :
   $$ 1 < u_n < e \implies 1 < f(u_n) < f(e) $$
   $$ \implies 3 < u_{n+1} < e $$

   D'après le principe de récurrence, on a : $(\forall n \in \mathbb{N}) \, 1 \leq u_n \leq e$.

1. b) Montrer que la suite $(u_n)$ est croissante.
   Soit $n \in \mathbb{N}$, on a : $(\forall x \in [1; e]) \, f(x) - x \geq 0$ et $u_n \in [1; e]$.
   Donc on pose $x = u_n$.
   On trouve $f(u_n) - u_n \geq 0$ donc $f(u_n) \geq u_n$.

   Donc : $u_{n+1} \geq u_n$ ;  
   D'où la suite $(u_n)$ est croissante.

1. c) Déduire que la suite $(u_n)$ est convergente.  
   La suite $(u_n)$ est croissante et majorée par $e$, donc elle est convergente.

### 2) Calculer la limite de la suite $(u_n)$.
- La fonction $f$ est continue sur l'intervalle $[1; e]$ car elle est dérivable sur $[1; e]$.
- $$ f([1; e]) = f(0); f(1) = f(1)_{|[3/2; e]} \subseteq [1; e] $$
- $u_0 = 1 \in [1; e]$.
- La suite $(u_n)$ est convergente.
  
Alors la limite de la suite $(u_n)$ est $L$ la solution de l'équation $f(x) = x$.

$$ f(x) = -\frac{1}{2}(lnx - 1)^2 = 0 $$
$$ \Leftrightarrow \, lnx = 1 \Leftrightarrow x = e $$

Donc la limite de la suite $(u_n)$ est $e$.

### 6) Montrer $H: x \mapsto xln(x) - x$ est une primitive de la fonction $h: x \mapsto ln(x)$.
On a fonction $h$ est dérivable sur $]1; +\infty[$.  
$$ H'(x) = (xln(x) - x)' = 1 \times ln(x) + x \times \frac{1}{x} - 1 = ln(x) + 1 - 1 = ln(x) $$

Donc $H: x \mapsto xln(x) - x$ est une primitive de la fonction $h: x \mapsto ln(x)$ sur $]1; +\infty[$.
```

<!-- Page 198 -->

```markdown
# Correction des examens nationaux
## Logarithme népérien
### 2 Bac sciences PC/SVT/ST
#### Page 12

Examens national 2018 session rattrapage

I) Soit $g$ la fonction définie sur $]0, +\infty[$ par :
$$ g(x) = x^3 - 1 - 2ln2 + 2ln x $$
Le tableau ci-contre est le tableau de variations de la fonction $g$ sur $]0, +\infty[$

1) Calculer $g(1)$
On a : $g(1) = 1^3 - 1 - 2ln2 + 2ln1 = 0$

2 - Déterminons le signe de $g(x)$ sur chacun des intervalles $]0; 1]$ et $[1; +\infty[$ :
D'après le tableau de variation de $g$, la fonction est strictement croissante sur $]0; +\infty[$ et comme on a $g(1) = 0$ alors on a :
$$ \forall x \in ]0; 1] \Rightarrow x \leq 1 \Rightarrow g(x) \leq 0, \quad \forall x \in [1; +\infty[ \Rightarrow x \geq 1 \Rightarrow g(x) \geq 0. $$

Partie II
Soit $f$ définie sur l'intervalle $]0, +\infty[$ par :
$$ f(x) = x - \frac{1}{2} + \frac{1}{2x^2} + \left( \frac{ln x}{x} \right)^2 $$

1 - a) Vérifions que : 
$$ \lim_{x \to +\infty} f(x) = +\infty $$
On a : 
$$ \lim_{x \to +\infty} f(x) = \lim_{x \to +\infty} \left( x - \frac{1}{2} + \frac{1}{2x^2} + \left( \frac{ln x}{x} \right)^2 \right) = +\infty $$

b) Montrons que la droite (D) d'équation $y = x - \frac{1}{2}$ est une asymptote à la courbe (C) au voisinage de $+\infty$ :
$$ \lim_{x \to +\infty} \left| f(x) - (x - \frac{1}{2}) \right| = \lim_{x \to +\infty} \left( \frac{1}{2x^2} + \left( \frac{ln x}{x} \right)^2 \right) = 0 $$
D'où la droite (D) d'équation : $y = x - \frac{1}{2}$ est une asymptote oblique à la courbe (C) au voisinage de $+\infty$.

c) Déterminons la position relative de la droite (D) au $C$ :
Soit $x \in ]0; +\infty[$
Étudions le signe de $f(x) - (x - \frac{1}{2})$ :
$$ f(x) - (x - \frac{1}{2}) = \left( \frac{1}{2x^2} + \left( \frac{ln x}{x} \right)^2 \right) > 0 $$

b) Montrons que la fonction $f$ est décroissante sur $]0; 1]$ et croissante sur $[1; +\infty[$ :
D'après la question Partie 1-2, on a :
$$ \forall x \in ]0; 1], \, g(x) \leq 0 \Rightarrow f'(x) \leq 0. $$
$$ \forall x \in [1; +\infty[ \, g(x) \geq 0 \Rightarrow f'(x) \geq 0. $$

Donc $f$ est décroissante sur l'intervalle $]0, 1]$ et croissante sur l'intervalle $[1, +\infty[$.

c) Dresser le tableau de variations de la fonction $f$ sur l'intervalle $]0, +\infty[$
```

<!-- Page 199 -->

```
# Correction des examens nationaux
## Logarithme népérien
### 2 Bac sciences PC/SVT/ST
#### Page 13

4) Construire dans le repère $(O; \vec{i}; \vec{j})$ la droite $(D)$ et le courbe $(C)$ (unité : 1 cm)

2 - Soit la suite numérique $(U_n)$ définie par :
$$
\begin{cases}
U_0 = e \\
U_{n+1} = f(U_n) \quad \forall n \in \mathbb{N}
\end{cases}
$$

a) Montrons par récurrence que $1 \leq U_n \leq e$ pour tout entier naturel $n$.

Pour $n = 0$ On a : $1 \leq U_0 = e$ donc la propriété est vraie pour n'est vraie pour n = 0.  
Soit $n \in \mathbb{N}$, Supposons que $1 \leq U_n \leq e$ et montrons que : $0 \leq U_{n+1} \leq e$

On a : $1 \leq U_n \leq e$ et comme $f$ est croissante sur $[1, +\infty[$ alors :  
$$
1 \leq U_n \leq e \Rightarrow (1) \leq f(U_n) \leq f(e) \Rightarrow 1 \leq U_{n+1} \leq f(e) \quad (\forall x \in [1,+\infty[)
$$
Donc : $0 \leq U_{n+1} \leq e$ 

On a montré par récurrence que $1 \leq U_n \leq e$ pour tout entier naturel $n$.

c) Montrons que la suite $(u_n)$ est décroissante.

(D'après la question Partie III-1-b) on a : $h'(x) < 0$ sur $[1, +\infty[$.  
Et comme $1 \leq U_n \leq e$ ; alors :  
$$
h(U_n) \leq f(U_n) - U_n < 0  
$$
Donc $(\forall n \in \mathbb{N}) U_{n+1} \leq U_n$  
D'où la suite $(U_n)$ est décroissante.

d) Déduisons que la suite $(u_n)$ est convergente et déterminons sa limite.

La suite $(U_n)$ est minorée par 1 et décroissante donc elle est convergente.

On a :  
$$
f(U_n) = U_{n+1} 
$$
$$
f([1; e]) \subset [1; e]
$$  
$f$ est continue sur $[1; e]$  
$U_0 \in [1; e]$  
$(U_n)$ est convergente.

Donc la limite de la suite $L$ est solution de l'équation $f(x) = x$  
$$
f(x) = x \iff h(x) = 0 
$$
D'après le graphique de $h$, on a $x = 1$ est la seule solution.  
D'où : $\lim_{n \to +\infty} U_n = 1$.
```

<!-- Page 200 -->

```markdown
# Correction des examens nationaux
## Logarithme népérien
### Examen national 2017 session normale

### Partie I :
On considère la fonction $g$ définie sur $]0,+\infty[$ par : 
$$ g(x) = x^2 + x - 2 + 2 \ln x $$

1. Calculer $g(1)$  
   $$ g(1) = 1^2 + 1 - 2 + 2 \ln 1 = 0 $$  
   En partant du tableau de variation de $g$  

Ci-contre,  
Montrer que :  
$$ g(x) \leq 0 \quad Pour \; tout \; x \in [0,1] $$  
$$ g(x) \geq 0 \quad Pour \; tout \; x \in [1,+\infty[ $$  
Soit : $x \in [0; 1] \Rightarrow g(x) < g(1)$  
$$ g(x) \leq 0 $$  
Soit : $x \in [1; +\infty[ \Rightarrow 1 \leq x$  
$$ g(1) \leq g(x) \Rightarrow 0 \leq g(x) $$  
On dresse le tableau de signe de $g$ sur $]0; +\infty[$  
  
| $x$  | $0$ | $1$ | $+\infty$ |
|-------|-----|-----|-----------|
| $g(x)$|  $-$| $0$ |  $+$      |

### Partie II :
On considère la fonction $f$ définie sur $]0,+\infty[$ par : 
$$ f(x) = x + \left( 1 - \frac{2}{x} \right) \ln x $$  

1. Montrer que $\lim_{x \to 0^+} f(x) = -\infty$ et interpréter le résultat géométriquement.  

On a :  
$$ \lim_{x \to 0^+} f(x) = \lim_{x \to 0^+} x \left( 1 - \frac{2}{x} \right) \ln x = 0 $$  
Car $\lim_{x \to 0} \left( 1 - \frac{2}{x} \right) \ln x = -\infty$ 

Interprétation géométrique :  
la courbe $(C)$ admet à droite une asymptote verticale d'équation $x = 0$.  

2) a) Montrons que : $\lim_{x \to +\infty} f(x) = +\infty$.  
$$ \lim_{x \to +\infty} f(x) = \lim_{x \to +\infty} \left( 1 - \frac{2}{x} \right) \ln x = 1 $$  
$$ \lim_{x \to +\infty} f(x) = +\infty $$  

Car $\lim_{x \to +\infty} \ln x = +\infty$ et $\lim_{x \to +\infty} \frac{2}{x} = 0$.  
Ainsi la courbe $(C)$ admet au voisinage de $+\infty$ une branche parabolique de direction asymptotique celle de la droite $(D)$ d'équation $y = x$. 

3) a) Montrons que $f'(x) = \frac{g(x)}{x^2}$, pour tout $x$ appartenant à l'intervalle $]0,+\infty[$.  
Soit $x \in ]0; +\infty[$ on a :  
$$ f'(x) = \left( x + \left( 1 - \frac{2}{x} \right) \ln x \right)' $$  
$$ = 1 + \frac{2}{x^2} \ln x + \left( 1 - \frac{2}{x} \right) \frac{1}{x} $$  
$$ = x^2 + x - 2 + 2 \ln x $$  
$$ = \frac{g(x)}{x^2} $$
```

<!-- Page 201 -->

```markdown
b) Montrons que $f$ est décroissante sur l'intervalle $[0; 1]$ et croissante sur l'intervalle $[1; +\infty[$.

On a $f(x) = \frac{g(x)}{x^2}$, donc le signe de $f'$ est celui de $g$.

D'après la question I-2 on a
$$
\forall x \in [0; 1]; g'(x) \leq 0 \text{ et } \forall x \in [1; +\infty[; g'(x) \geq 0
$$
Ainsi $f$ est décroissante sur l'intervalle $[0; 1]$ et croissante sur l'intervalle $[1; +\infty[$.

c) Dressons le tableau de variations de $f$ sur l'intervalle $]0; +\infty[$.

\[
\begin{array}{|c|c|c|}
\hline
x & f'(x) & f(x) \\
\hline
0 & - & 1 \\
\hline
1 & 0 & 1 \\
\hline
+\infty & + & + \\
\hline
\end{array}
\]

4)a) Résolvons dans l'intervalle $]0; +\infty[$ l'équation : 
$$
\left( 1 - \frac{2}{x} \right) \ln x = 0.
$$

Soit $x > 0$, on a :
$$
\left( 1 - \frac{2}{x} \right) \ln x = 0 \iff \ln x = 0 \text{ ou } x = 0 \text{ ou } x = e^0
$$
$$
\iff x = 2 \text{ ou } x = 1.
$$

D'où l'équation $\left( 1 - \frac{2}{x} \right) \ln x = 0$ admet deux solutions dans $]0; +\infty[$ qui sont 1 et 2.

b) Déduisons que la courbe (C) coupe la droite (D) en deux points A(1, 1) et B(2, 2).

$$
f(x) - x = \left( 1 - \frac{2}{x} \right) \ln x
$$

D'où $f(x) - x = 0 \implies 2$ ou $x = 1$.

Ainsi la courbe (C) coupe la droite (D) en deux points A(1, 1) et B(2, 2).

c) Montrons que $f(x) \leq x$ pour tout $x \in [1; 2]$ et déduisons la position relative de la courbe (C) et la droite (D) sur l'intervalle $[1; 2]$.

III- On considère la suite numérique $(u_n)$ définie par : $u_0 = \sqrt{3}$ et $u_{n+1} = f(u_n)$ pour tout entier naturel $n$.
1) Montrons par récurrence que $1 \leq u_n \leq 2$ pour tout entier naturel $n$.

Pour $n=0$, on a $u_0 = \sqrt{3}$ donc $1 \leq u_0 \leq 2$.
Donc la proposition est vraie pour $n=0$.

Soit $n$ un entier naturel, supposons $1 \leq u_n \leq 2$ et montrons que $1 \leq u_{n+1} \leq 2$.

On a $1 \leq u_n \leq 2$ est strictement croissante sur $[1, 2]$ donc $f(1) \leq f(u_n) \leq f(2)$.

D'où $1 \leq u_{n+1} \leq 2$.

Car $f(1) = 1, f(2) = 2 et f(U_n) = u_{n+1}$.

Finalement $1 \leq u_n \leq 2$ pour tout entier naturel $n$.
```

<!-- Page 202 -->

```markdown
## Correction des examens nationaux
### Logarithme népérien
#### 2 Bac sciences PC/SVT/ST
##### Page 16

2) Montrons que la suite $(u_n)$ est décroissante.
D'après la question II-4-c) $f(x) \leq x$ pour tout $x \in [1; 2]$  
Or d'après la question précédente on a $\forall n \in \mathbb{N}; 1 \leq s_n \leq 2$  
Donc $n \in \mathbb{N}; (u_n) \leq u_n$  
D'où $\forall n \in \mathbb{N}; u_{n+1} \leq u_n$  
Ainsi la suite $(u_n)$ est décroissante  
3) Déduisons que la suite $(u_n)$ est convergente puis déterminons sa limite.  
On a $f$ continue sur $[1, 2]$ et $f(c) \in I$ et comme la suite $(u_n)$ est décroissante et minorée par 1 alors elle est convergente.  
De plus sa limite est une solution de l'équation $f(x) = x$  
Or d'après la question II-4-b  
$$ f(x) = x \Leftrightarrow x = 1 \text{ ou } x = 2 $$  
Or $(u_n)$ est décroissante. Alors $\lim_{n \to \infty} u_n = 1$

Examens national 2016 session rattrapage  
Soit $g$ la fonction définie sur $[0; +\infty[$ par:  
$$ g(x) = 1 - x + x \ln x $$  
1) a) Montrer que $g'(x) = \ln x$ sur $]0; +\infty[$  
$$ g'(x) = (1 - x + x \ln x)' = -1 + \ln x + x \frac{1}{x} = -1 + \ln x + 1 = \ln x $$  
Donc $\forall x \in ]0; +\infty[$; $g'(x) = \ln x$  
b) Montrons que $g$ est décroissante sur $[0; 1]$ et croissante sur $[1; +\infty[$.  
Le signe de $g'(x)$ c'est le signe de $\ln x$, et puisque $\forall x \in ]0; 1[$; $\ln x < 0$  
Alors $\forall x \in [0; 1]; g'(x) \leq 0$  
Donc $g$ est décroissante sur $[0; 1]$ et puisque $\forall x \in [1; +\infty[$; $\ln x \geq 0$  
Alors $\forall x \in [1; +\infty[$; $g'(x) \geq 0$  
Donc $g$ croissante sur $[1; +\infty[$.  
2) - Calculons $g(1)$ et déduisons que $g(2) = 0$  
$$ g(1) = 1 - 1 + 1 \ln 1 = 1 - 1 + 0 = 0 $$  
et puisque $g$ admet un minimum à 1;  
Alors $\forall x \in [0; +\infty[$; $g(x) \geq g(1)$  
Alors $\forall x \geq 1; g(x) \geq 0$
```

<!-- Page 203 -->

```markdown
# Correction des examens nationaux
## Logarithme népérien
### Prof FAYSAL : 0681399067
### 2 Bac sciences PC/SVT/ST
### Page 18

b) Interprétation géométrique du résultat
- $f' (1) = \frac{2g(1)}{1^2} = 0$ et comme $f(1) = 2$, Donc $(C_f)$ admet une tangente horizontale $(T)$ au point $(1,2)$.  
c) Montrons que la fonction $f$ est croissante sur $]0; +\infty[$.
- On a : $\forall x \in ]0; +\infty[$, $f'(x) = \frac{2g(x)}{x^3}$.  
Soit $x \in ]0; +\infty[$, $g(x) > 0$.  
Et d'après la question 2) partie I,  
On a : $\forall x \in ]0; +\infty[$, $g(x) \geq 0$.  
Donc $\forall x \in ]0; +\infty[$, $f'(x) \geq 0$.  
Donc : la fonction $f$ est croissante sur $]0; +\infty[$.  

4 - Construisons, dans le repère $(O, \vec{i}, \vec{j})$, la courbe $(C)$. (On prendra $f(0, 3) = 0$)

6 - Soit $h$ la fonction numérique définie sur $\mathbb{R}^*$ par : $h(x) = 3 - \frac{1}{x^2} - \ln \left(\frac{|x|}{x}\right)$.

a) Montrons que la fonction $h$ est paire et que $h(x) = f(x)$ pour tout $x \in ]0; +\infty[$.  
Montrons que la fonction $h$ est paire :
- On a $D_h = \mathbb{R}^*$,  
Donc pour tout $x \in \mathbb{R}$, on a $-x \in \mathbb{R}^*$.  
Soit $x \in \mathbb{R}^*$. On a :  
$$ h(-x) = 3 - \frac{1}{(-x)^2} - \ln\left(\frac{(-x)^2}{-|x|}\right) = 3 - \frac{1}{x^2} - \ln(x^2) = h(x) $$  

Alors $h(-x) = h(x)$ pour tout $x \in D_h$. Donc la fonction $h$ est paire.  

Correction du problème d'examen 2015 session annulée
On considère la fonction $f$ à variable réelle définie par : $f(x) = \frac{1}{x(1 - \ln x)}$ et $(C_f)$ est la courbe représentative de $f$ dans un repère orthonormé $(O; \vec{i}; \vec{j}; \vec{k})$ d’unité 2cm.  
Partie I
1) Soit $D_f$ le domaine de définition de la fonction $f$. Montrer que $D_f = ]0; e[ \cup ]e; +\infty[$  
$x \in D_f \iff (x \neq 0$ et $x(1 - \ln x) \neq 0)$  
$$ \iff x > 0 \text{ et } 1 - \ln x \neq 0 $$
$$ \iff x > 0 \text{ et } \ln x \neq 1 $$
$$ \iff x > 0 \text{ et } x \neq e $$  
$$ \iff x \in ]0; e[ \cup ]e; +\infty[ $$  
Donc : $D_f = ]0; e[ \cup ]e; +\infty[$
```

<!-- Page 204 -->

```markdown
## Correction des examens nationaux
### Logarithme népérien
**Prof FAYSSAL : 0681399067**  
**2 Bac sciences PC/SVT/ST**  
**Page 19**

2)a) Calculer $\lim_{x \to e^+} f(x)$ et $\lim_{x \to e^-} f(x)$ puis donner une interprétation géométrique des résultats.  
On détermine le signe de $1 - \ln x$  
$$
\begin{array}{|c|c|c|}
\hline
x & 0 & e \\
\hline
1 - \ln x & + & - \\
\hline
\end{array}
$$

$$
\lim_{x \to e^+} f(x) = \lim_{x \to e^+} \frac{1}{x(1 - \ln x)} = -\infty \text{ car } \lim_{x \to e^+} 1 - \ln x = 0 \text{ et } \lim_{x \to e^+} x = e
$$

$$
\lim_{x \to e^-} f(x) = \lim_{x \to e^-} \frac{1}{x(1 - \ln x)} = +\infty \text{ car } \lim_{x \to e^-} 1 - \ln x = 0
$$

**Interpréter géométriquement ces deux résultats :**  
On a :  
$$
\lim_{x \to e^+} f(x) = -\infty \text{ et } \lim_{x \to e^-} f(x) = +\infty
$$
D'où la droite $(D)$ d'équation $y = e$ est une asymptote verticale à $C_f$.  

b) Calculer : $\lim_{x \to +\infty} f(x)$, puis en déduire que la courbe $(C_f)$ admet une asymptote au voisinage de $+\infty$ dont on déterminera sa direction.  

Calculer $\lim_{x \to +\infty} f(x)$  
$$
\lim_{x \to +\infty} f(x) = \lim_{x \to +\infty} \frac{1}{x(1 - \ln x)} = 0 \text{ car } \lim_{x \to +\infty} 1 - \ln x = -\infty
$$  
D'où : $\lim_{x \to +\infty} f(x) = 0$  

**Interpréter géométriquement ce résultat :**  
On a $\lim_{x \to +\infty} f(x) = 0$.  
D'où $(C_f)$ admet une asymptote horizontale d'équation $y = 0$ au voisinage de $+\infty$.  

c) Montrer que $\lim_{x \to 0^+} f(x) = +\infty$  
$$
\lim_{x \to 0^+} f(x) = \lim_{x \to 0^+} \frac{1}{1 - \ln x} = +\infty
$$
car $\lim_{x \to 0^+} 1 - \ln x = +\infty$.  

### 3)a) Montrer que : $f'(x) = \frac{-\ln x}{x^2(1 - \ln x)^2}$ pour tout $x \in D_f$  
On a :  
$$
f'(x) = \left(\frac{1}{x(1 - \ln x)}\right)' = \frac{-(x(1 - \ln x))'}{(x(1 - \ln x))^2}
$$
où  
$$
(x(1 - \ln x))' = 1 - \ln x + x \cdot \frac{-1}{x} = -\ln x
$$  
Donc : $f'(x) = \frac{-\ln x}{x^2(1 - \ln x)^2}$ pour tout $x \in D_f$.  

b) Montrer que la fonction $f$ est décroissante sur $]0, 1[$ et croissante sur $[1, e]$ et sur $]e, +\infty[$  
Le signe de $f'(x)$ est le signe de $\ln x$ sur $D_f$.  
Sachant que : $\ln x \leq 0$ sur l'intervalle $]0, 1[$ donc $f'(x) \leq 0$ d'où $f$ est strictement décroissante sur $]0, 1[$.  
Sachant que : $\ln x \geq 0$ sur l'intervalle $[1, +\infty[$ donc $f'(x) \geq 0$ sur chacun des intervalles $[1, e]$ et $]e, +\infty[$ d'où $f$ est strictement croissante sur chacun des intervalles $[1, e]$ et $]e, +\infty[$.  

c) Dresser le tableau de variations de la fonction $f$ sur $D_f$  
```
$$
\begin{array}{|c|c|c|}
\hline
x & 0 & e \\
\hline
f' & 0 & + \\
\hline
\end{array}
$$
```

<!-- Page 205 -->

```markdown
# Correction des examens nationaux
## Logarithme népérien
### 2 Bac sciences PC/SVT/ST
#### Page 20

**Partie II**  
On considère la fonction $g$ définie sur $]0, +\infty[$ par : $g(x) = 1 - x^2(1 - \ln x)$  
$(C_g)$ est la courbe représentative de $g$ dans un repère orthonormé (voir figure)

1) a) Déterminer graphiquement le nombre de solutions de l'équation $(E): x \in [0, +\infty[; g(x) = 0$  
On cherche l'intersection de la courbe $(C_g)$ avec l'axe des abscisses, graphiquement le nombre des points d'intersection est 2. Donc : l'équation $(E)$ a deux solutions.  
b) On donne le tableau de valeurs :

| $x$   | $2.1$ | $2.2$ | $2.3$ | $2.4$ |
|-------|-------|-------|-------|-------|
| $g(x)$ | $-0.14$ | $-0.02$ | $0.12$ | $0.28$ |

Graphiquement la fonction $g$ est continue sur l'intervalle $[2, 2.2; 3]$.  
D'après le tableau :  
$g(2.2) \times g(2.3) = -0.02 < 0$.  
En appliquant le théorème des valeurs intermédiaires, il existe un réel $\alpha \in [2; 2.3[$ tel que : $g(\alpha) = 0$  
Donc : l'équation $(E)$ admet une solution $\alpha$ tel que : $2.2 < \alpha < 2.3$

2) a) Montrer que $f(x) - x = -\frac{g(x)}{x(1 - \ln x)}$ pour tout $x \in D_f$.  
$$ f(x) - x = \frac{1}{x(1 - \ln x)} - x = \frac{1 - x^2(1 - \ln x)}{x(1 - \ln x)} = g(x)$$  
Donc : $f(x) - x = -\frac{g(x)}{x(1 - \ln x)}$ pour tout $x \in D_f$.  

b) Montrer que la droite $(\Delta)$ d'équation $y = x$ coupe la courbe $(C_f)$ en deux points d'abscisses respectives $1$ et $\alpha$.  
On étudie l'intersection de la courbe $(C_f)$ et la droite d'équation $y = x$, pour cela on résout l'équation : $f(x) = x$ pour tout $x \in D_f$  
$$ f(x) = x \Leftrightarrow f(x) - x = 0 \Leftrightarrow g(x) = 0 $$  
Graphiquement on a deux solutions et d'après ce qui précède $g(\alpha) = 0$ et $g(1) = 0$.  
Donc la droite $(\Delta)$ d'équation : $y = x$ coupe la courbe $(C_f)$ en deux points respectifs d'abscisses $1$ et $\alpha$.  
c) À partir de la courbe $(C_g)$, déterminer le signe de $g$ sur $[1; \alpha]$ et montrer que $f(x) - x \leq 0$ pour tout $x \in [1; \alpha]$.  
Déterminer le signe de $g$ sur $[1; \alpha]$ :  
Sur l'intervalle $[1; \alpha]$ on a $C_g$ est au-dessous de l'axe des abscisses, d'où $g(x) \leq 0$ pour tout $x \in [1; \alpha]$.  
Montrer que $f(x) - x \leq 0$ pour tout $x \in [1; \alpha]$  
Sur l'intervalle $[1; \alpha]$ on a $g(x) \leq 0$ et $f(x) = \frac{1}{x(1 - \ln x)} \geq 1 > 0$ (d'après tableau de variations de la fonction $f$ sur $[1; e]$ et on a :  
$$ f(x) - x = -\frac{g(x)}{x(1 - \ln x)} = \frac{1}{x(1 - \ln x)} \times g(x) \leq 0 $$  
pour tout $x \in [1; \alpha]$.  
3) Construire dans le même repère $(O; \ii{j})$ la courbe $(C_f)$ et la droite $(\Delta)$.
```

<!-- Page 206 -->

```markdown
# Partie III

On considère la suite $(u_n)$ définie par :
$$ u_0 = 2 \quad et \quad u_{n+1} = f(u_n) \quad pour \quad tout \quad n \in \mathbb{N} $$

1) Montrer par récurrence que : $1 \leq u_n \leq \alpha$ pour tout $n \in \mathbb{N}$

Pour $n = 0$ on a : $1 \leq u_0 = 2 \leq \alpha$ (avec : $2, 2 < \alpha < 2, 3$) qui est vrai pour $n = 0$

On suppose que $1 \leq u_n \leq \alpha$

On montre $1 \leq u_{n+1} \leq \alpha$

D'après l'hypothèse de récurrence on a : 
$$ 1 \leq u_n \leq \alpha $$
Donc : $1 \leq u_n \implies f(1) \leq f(u_n) \leq f(\alpha) \quad (car \quad la \quad fonction \quad f \quad est \quad croissante \quad sur \quad [1; \alpha])$$

$$ \Rightarrow 1 \leq u_{n+1} \leq \alpha $$

Donc : $1 \leq u_n \leq \alpha$ pour tout $n \in \mathbb{N}$

2) Montrer que la suite $(u_n)$ est décroissante. (utiliser le résultat de la question II.2. c)

Soit $n \in \mathbb{N}$, on pose : $x = u_n$ et on a

$$ u_n \in [1; \alpha] \quad car \quad 1 \leq u_n \leq \alpha $$

D'après le résultat de la question II.2.c on a : 
$$ f(x) - x \leq 0 \quad pour \quad tout \, x \in [1; \alpha] $$

D'où : $x \in [1; \alpha] \Rightarrow f(x) \leq x$

$$ \Rightarrow f(u_n) \leq u_n $$
$$ \Rightarrow u_{n+1} \leq u_n $$

Donc : la suite $(u_n)$ est décroissante.

3) En déduire que la suite $(u_n)$ est convergente et déterminer sa limite.

- La suite $(u_n)$ est décroissante ;
- La suite $(u_n)$ est minorée par 1.

Donc la suite $(u_n)$ est convergente.

La fonction $f$ est continue sur $I = [1; \alpha]$ et 
$$ f(I) = f(1; \alpha) = [f(1); f(\alpha)] = [1; \alpha] \subset [1; \alpha] $$

On a $u_0 = 2 \in [1; \alpha]$

Donc $(u_n)$ est convergente vers $l \quad avec \quad l \in \mathbb{R}$

Donc $l$ est solution de l'équation : $f(x) = x$

On a $f(x) = x \iff x = 1 \quad ou \quad x = \alpha$

comme $(u_n)$ est décroissante pour tout $n \in \mathbb{N}$, d'où : $u_n \leq u_0 \Rightarrow l \leq 1$

Donc : $l = 1$
```

<!-- Page 207 -->

```markdown
# Résumés de cours
## Fonction exponentielle - Ln – Étude des fonctions
### Deuxième bac sciences PC /SVT/SE

Prof fayssal  
06813999067
```

<!-- Page 208 -->

```markdown
# Préparation à l’examen national du baccalauréat

## Fiche 01 : Etude des fonctions Logarithme-exponentielle
### Prof : FAYSSAL
### Page : 01

### A) 1) Fonction logarithme népérien
- La primitive de $x \mapsto \frac{1}{x} \; ]0, +\infty[$ qui s’annule en $1$ est appelée fonction logarithme népérien on la note par $\ln$.
- La fonction $\ln$ est définie et dérivable sur l’intervalle $]0, +\infty[$ et $\ln(1) = 0$.
  
Pour tout $x \in ]0, +\infty[$ :
- $ \ln'(x) = \frac{1}{x} $
  
On a : $\ln(e) = 1$ avec le nombre $e$ est un nombre irrationnel ; $e \approx 2,7$

2) Propriétés algébriques de la fonction $\ln$
- $\ln(x \times y) = \ln(x) + \ln(y) \; ; \; x,y \in]0,+\infty[$
- $\ln\left(\frac{x}{y}\right) = \ln(x) - \ln(y) \; ; \; \ln(1) = 0 - \ln(x)$ 
- $\ln(x^r) = r \ln(x) \; ; \; r \in \mathbb{Q}$

3) Équations et inéquations
- $\ln(x) = \ln(y) \iff x = y \; ; \; x,y \in]0,+\infty[$
- $\ln(x) < \ln(y) \iff x < y$
- $\ln(x) = a \iff x = e^a \; \text{avec } a \in \mathbb{R}$

4) Signe de fonction ln sur $]0,+\infty[$
- $\ln(x) > 0 \iff x > 1$
- $\ln(x) < 0 \iff 0 < x < 1$
- $\ln(x) = 0 \iff x = 1$

Conclusion : (le tableau de signe de $\ln$)

| $x$      | 0            | 1            | $+\infty$       |
|----------|--------------|--------------|------------------|
| $\ln(x)$ | $-$          | $0$          | $+$              |

5) Limites de la fonction ln
- FI : $\begin{array}{cc} \lim_{x \to 0^+} \ln(x) = -\infty ; & \lim_{x \to +\infty} \ln(x) = +\infty \end{array}$
- $\lim_{x \to 0^+} \ln(x) = -\infty$
- $\lim_{x \to +\infty} \ln(x) = +\infty$
- $\lim_{x \to 0^+} x \ln(x) = 0$
  
Exemple de méthode de changement de variable pour calcul des limites

Calculons la limite

On pose $t = \sqrt{x}$ donc
Et on a $x \to 0^+ \Rightarrow t \to 0^+$

$$ \lim_{x \to 0^+} \frac{\ln(x)}{\sqrt{x}} = \lim_{t \to 0^+} \frac{2 \ln(t)}{t} = 2 \cdot 0 = 0 $$

---

### 6) Dérivée de la fonction $\ln(U)$ avec $U \neq 0$
- Si $U$ est dérivable sur $I$ alors $\ln(|U(x)|)$ est dérivable sur $I$ et $ \ln'(|U(x)|) = \frac{U'(x)}{U(x)} $

### Primitives
Les primitives de la fonction $x \mapsto \frac{U'(x)}{U(x)}$ sur $I$ sont les fonctions $x \mapsto \ln(|U(x)|) + c \; ; \; c \in \mathbb{R}$

### B) 1) Fonction exponentielle
- La fonction réciproque de la fonction ln est appelée fonction exponentielle, elle est définie et dérivable sur $\mathbb{R}$.

Pour tout $x \in \mathbb{R}$ : $\exp(x) = e^x$

- Pour tout $x \in \mathbb{R} : \; e^0 = 1$

- Si $U$ est dérivable sur l'intervalle alors
$$ \ln(e^{U(x)})' = U'(x)e^{U(x)} $$

2) Propriétés algébriques de la fonction $\exp$
- $e^{x+y} = e^x e^y \; ; \; e^x \neq 0 ; \; e^{-x} = \frac{1}{e^x}$
- $e^{-y} = \frac{1}{e^y} \; \text{et } e^{x} = e^x \; ; \; r \in \mathbb{Q}$

3) Équations et inéquations
- $e^x = e^y \iff x = y \; ; \; e^x \geq 0 \; \text{et } \ln(e^x) = x \; ; \; x \in \mathbb{R}$
- $\ln(e^a) = a \; ; a > 0$ et $e^x = a \iff x = \ln(a) \; ; a > 0$

4) Limites de la fonction exp
- FI : 
$$ \begin{array}{ccc} \lim_{x \to 0} \frac{0}{0} & ; & \lim_{x \to 0^+} e^x = +\infty \end{array} $$
- $\lim_{x \to -\infty} e^x = 0$
- $\lim_{x \to +\infty} e^x = +\infty$
  
Logarithme de base $e$ et $a > 0$

$$ \forall x \in ]0, +\infty[ : \log_a(x) = \frac{\ln(x)}{\ln(a)} $$
$$ \forall x \in \mathbb{R} : a^x = e^{\ln(a)x} $$

5) Primitives
- Les primitives de la fonction $x \mapsto U'(x)e^{U(x)}$ sur $I$ sont les fonctions $x \mapsto e^{U(x)} + c \; ; c \in \mathbb{R}$
- Soit $a$ un réel non nul : Les primitives de la fonction $x \mapsto e^{ax} \; x \in \mathbb{R}$ sont les fonctions $x \mapsto \frac{1}{a} e^{ax} + c \; c \in \mathbb{R}$
```

<!-- Page 209 -->

```markdown
Préparation à l’examen  
nationale du baccalauréat  
Fiche 02 : Etude des fonctions  
Continuité - Dérivabilité  
Prof : FAYSSAL  
Page : 02  

1) Continuité d’une fonction : $a \in D_f$  
- $f$ est continue en $a \iff \lim_{x \to a} f(x) = f(a)$  
- $f$ est continue à droite de $a \iff \lim_{x \to a^+} f(x) = f(a)$  
- $f$ est continue à gauche de $a \iff \lim_{x \to a^-} f(x) = f(a)$  
- La fonction $f$ est continue en $a \iff f$ est continue à droite de $a$ et à gauche de $a$  

**Continuité sur un intervalle I**  
- Les polynômes sont continus sur $\mathbb{R}$  
- Les fonctions rationnelles sont continues sur $D_f$  
- La somme ; le produit de deux fonctions continues $f$ et $g$ est continue sur $I$  
- La fonction $\frac{u}{v}$ est continue sur l’intervalle $I$  
  - si $v \neq 0$  
  - Si $u$ est continue et positive sur $I$ alors $\sqrt{u}$ est continue sur $I$  

2) Dérivabilité d’une fonction en $a \in D_f$  
- $f$ est dérivable en $a \iff \lim_{x \to a} \frac{f(x)-f(a)}{x-a} = f'(a)$  
**Interprétation géométrique :**  
- (Cf) admet une tangente au point $A(a ; f(a))$ d’équation $(T) : y = f'(a)(x - a) + f(a)$  
- $$\lim_{x \to a} \frac{f(x)-f(a)}{x-a} = +\infty \Rightarrow f' n'est pas dérivable en $a$ $$  
**Interprétation géométrique :**  
- (Cf) admet une demi tangente verticale au point $A(a ; f(a))$ dirigée vers le haut  

**Fonctions dérivées des fonctions usuelles**  
- Les polynômes sont dérivables sur $\mathbb{R}$ et :  
  - $a(x + b)' = a \cdot (x^n)' = a \cdot nx^{n-1}$  
- Si $u$ est dérivable alors $(u^n)' = nu^{n-1}u'$  
- $$\left( \frac{1}{x} \right)' = \frac{-1}{x^2}, \quad x \neq 0 ; \quad \left( \sqrt{x} \right)' = \frac{1}{2\sqrt{x}}, \quad u > 0 $$  
- Si $u$ et $v$ sont dérivables sur $I$ alors  
  - $(uv)' = u'v + uv'$  
  - $(\frac{1}{v})' = \frac{-v'u}{v^2}, \quad v \neq 0$  
- Les fonctions sin ; cos sont dérivables sur $\mathbb{R}$  
  - $(\sin x)' = \cos x ; \quad (\cos x)' = -\sin x$  
  - $(\tan x)' = 1 + \tan^2 x ; \quad (u(v))' = u'v + uv'$  

**Lien entre la dérivabilité et la continuité**  
- $f$ est dérivable sur $I \Rightarrow f$ est continue sur $I$  

3) T.V.I et Fonction réciproque  
- Si $f$ est continue et strictement monotone sur un intervalle $[a; b]$ alors  
  - $f(a) \cdot f(b) < 0$ Alors l’équation $f(x) = 0$ admet une unique solution $x \in ]a; b[$  
  - *Les courbes de $f$ et de $f^{-1}$ sont symétriques par rapport à la droite d’équation $y=x$*  

**Dérivabilité de $f^{-1}$ en $b = f(a)$**  
- Si $f$ est dérivable en $a$ et $f'(a) > 0$ alors $f^{-1}$ est dérivable en $b$ et $(f^{-1})'(b) = \frac{1}{f'(a)}$  

4) Convexité de $C(f)$ et Points d’inflexions  
- Si $f''(x) \geq 0$ alors $(Cf)$ est convexe $\cup$  
- Si $f''(x) \leq 0$ alors $(Cf)$ est concave $\cap$  
- Si $f''$ s'annule et change de signe en $a$ alors $A(a ; f(a))$ est un point d’inflexion  

5) POSITION RELATIVE de $C(f)$ et $(A)$  
- Pour étudier la position relative de $C(f)$ est la droite $(d)$ d’équation $y = ax + b$  
  - On étudie le signe de $f(x) - (ax + b)$  
  - Si $f(x) - (ax + b) > 0$ alors la courbe $(Cf)$ est au-dessus de $(d)$  
  - Si $f(x) - (ax + b) < 0$ alors la courbe $(Cf)$ est en dessous de $(d)$  

6) Les éléments de symétrie de $C(f)$  
- La droite d’équation $d : x = a$ est un axe de symétrie de $(Cf)$ si pour tout $x \in D_f$  
  - $(2a - x) \in D_f$ et $f(2a - x) = f(x)$  
- La fonction $f$ est paire si $\forall x \in D_f$ :  
  - $(-x) \in D_f$ et $f(-x) = f(x)$  
- Le point $A(a ; b)$ est centre de symétrie de $C(f)$ si pour tout $x \in D_f$ :  
  - $(2a - x) \in D_f$ et $f(2a - x) + f(x) = 2b$  
- La fonction est impaire si $\forall x \in D_f$ :  
  - $(-x) \in D_f$ et $f(-x) = -f(x)$  
- Le point $0$ est centre de symétrie de $C(f)$  
```

<!-- Page 210 -->

```markdown
# Fiche 2 : ETUDE DES FONCTIONS BRANCHES INFINIE
## La limite

### Si $ \lim_{x \to a} f(x) = \infty $
Alors la droite (D) d’équation $ x = a $ est asymptote verticale à $(C_f)$

### Si $ \lim_{x \to +\infty} f(x) = L $
Alors la droite (D) : $ y = L $ est asymptote horizontale à $(C_f)$ voisine de $ +\infty $

### Si $ \lim_{x \to +\infty} f(x) = \infty $ et $ \lim_{x \to +\infty} (f(x) - (ax + b)) = 0 $
Alors droite($(D)$): $ y = ax + b $ est asymptote oblique à $(C_f)$ voisine de $ +\infty $

### Si $ \lim_{x \to +\infty} f(x) = \infty $, On calcule $ \lim_{x \to +\infty} \frac{f(x)}{x} $
Alors $(C_f)$ admet une branche parabolique de Direction la droite $(O_x)$ Au voisinage de $ +\infty $

### Si $ \lim_{x \to +\infty} \frac{f(x)}{x} = 0 $
Alors $(C_f)$ admet une branche parabolique de Direction la droite $(O_x)$ Au voisinage de $ +\infty $

### Si $ \lim_{x \to +\infty} \frac{f(x)}{x} = \infty $
Alors $(C_f)$ admet une branche parabolique de Direction $(O_y)$ Au voisinage de $ +\infty $

### Si $ \lim_{x \to +\infty} \frac{f(x)}{x} = a \, (avec \, a \neq 0) $
On calcule $ \lim_{x \to +\infty} f(x) - ax $

### Si :
$ \lim_{x \to +\infty} f(x) - ax = \infty $
Alors $(C_f)$ admet une branche parabolique de direction la droite d’équation $(D)$: $ y = ax $ au voisinage de $ +\infty $

### Si :
$ \lim_{x \to +\infty} f(x) - ax = b $
Alors la droite d’équation $(D)$: $ y = ax + b $ est asymptote oblique à $(C_f)$ voisine de $ +\infty $
```

<!-- Page 211 -->

```
# Offre préparation concours 2026 – Prof Fayssal
- Plus 20 séances en vidéos de préparation Médecine
- Plus 20 séances en vidéos pour ENSA-ENSAM-UM6P
- Nouvelle offre à partir de mois 6 avec des séances en directes et interactives
- Deux livres de préparation Médecine-ENSA-ENSAM contenant des astuces, plus de 20 concours blancs corrigés et la correction des anciens concours

Pour participer : 0681399067

---

التحضير لمباراة كلیة الطب (20 حصة) على فيسبوك للرجوع للإعادة 
التحضير لمباراة الهندسة (20 حصة) عبر ZOOM 
بشكل كامل.
- كتیب شاملة في الرياضیات 📝 مع تصحیحات مفصلة وتمارين نوعیة + تصحیح العبارات السابقة.
- عرض و حصص مباشرة يوميًا إبتداء من شهر 6 لتتبیّن دقیقتين 

0681399067 للتواصل: 📧 

---

Rh kont chrit l ktab diak a ostad

L. maths jth 12 qsts 3la 14

---

من السیادة الفاضلة 
جملن لخبر مثل على مجموعتك 
تدخل من فضلك الناجحة إبتداء انتحانات نهاية السنة

اللهم وفقنا 
اللهم الحمد 
```

<!-- Page 212 -->

```markdown
# Examens nationaux corrigés exponentielle de 2025 à 2011
## Deuxième bac sc PC/SVT/ST

Examens nationaux corrigés de 2011 à 2025 Fonction exponentielle

### Deuxième bac sciences
PC/SVT/ST

# Examens nationaux
## Fonction exponentielle

Collection FMATHS  
Prof fayssal  
www.elboutkhili.jimdofree.com
```

<!-- Page 213 -->

```markdown
# Examens nationaux Exponentielle corrigés de 2011 à 2025

**Notation :** $(C_f)$ est la courbe de la fonction $f$ dans un repère orthonormé $(O ; \vec{i} ; \vec{j})$. (RON)

## Examens national 2025 - Rattrapage
On considère la fonction $f$ définie sur $\mathbb{R}$ par :
$$ f(x) = x - 1 + \frac{4}{e^{x+2}} $$

1) Calculer $f(0)$ et $(f(2))$

2) a) Calculer $\lim_{x \to +\infty} f(x)$ et $\lim_{x \to -\infty} f(x)$

b) Vérifier que $\lim_{x \to +\infty} (f(x) - (x - 1)) = 0$ puis interpréter géométriquement ce résultat.

3) a) Vérifier que pour tout $x \in \mathbb{R}$,
$$ f(x) = x + 1 - \frac{2e^x}{e^x + 2} $$

b) Calculer $\lim_{x \to -\infty} \frac{e^x}{e^{x+2}}$ puis déduire que la droite d'équation $y = x + 1$ est une asymptote oblique à la courbe $(C_f)$ au voisinage de $-\infty$.

c) Montrer que pour tout $x \in \mathbb{R}$, 
$$ -1 < f(x) < 1 $$

4) a) Montrer que pour tout $x \in \mathbb{R}$, 
$$ f'(x) = \frac{2e^x + 4}{(e^x + 2)^2} $$

b) Déduire que la fonction $f$ est strictement croissante sur $\mathbb{R}$.

5) a) Montrer que pour tout $m \in \mathbb{R}$, l'équation $f(x) = m$ admet une solution unique dans $\mathbb{R}$.

b) Soit l'unique solution de l'équation $f(x) = 0$.

6) a) Montrer que pour tout $x \in \mathbb{R}$, 
$$ f''(x) = \frac{4e^x(e^x - 2)}{(e^x + 2)^3} $$

b) Etudier le signe de $e^x - 2$ sur $\mathbb{R}$.

c) Déduire que la courbe $(C_f)$ admet un point d'inflexion que l'on déterminera.

d) Montrer que $y = \frac{1}{2} x + \frac{n}{2}$ est l'équation de la tangente à $(C_f)$ au point d'abscisse en 2.

7) Construire la courbe $(C_f)$.

---

## Examens national 2024 - Normale
Partie I :
Soient les deux fonctions $u$ et $v$ définies sur $\mathbb{R}$ par : $u(x) = e^x$ et $v(x) = x$.

1) Tracer dans un même repère les courbes $(C_u)$ et $(C_v)$ des fonctions $u$ et $v$.

2) Justifier graphiquement que $e^x - x > 0$ pour tout $x \in \mathbb{R}$.

Partie II :
On considère la fonction $f$ définie par 
$$ f(x) = x + 1 - \ln(e^x - x) $$

1) a) Vérifier que $f$ est définie sur $\mathbb{R}$.

b) Montrer que pour tout $x \in \mathbb{R}$, 
$$ f(x) = 1 - \ln(1 - xe^{-x}) $$

c) En déduire que $\lim_{x \to -\infty} f(x) = 1$, puis interpréter géométriquement ce résultat.

2) a) Calculer $\lim_{x \to -\infty} f(x)$

b) Vérifier que pour tout $x < 0$, 
$$ f(x) = x + 1 - \ln(-x) - \ln \left( 1 - \frac{1}{xe^{-x}} \right) $$

c) Calculer $\lim_{x \to -\infty} \frac{f(x)}{x}$ puis déduire que la courbe $(C_f)$ admet une branche parabolique de direction la droite d'équation $y = x$ au voisinage de $-\infty$.

3) a) Montrer que pour tout $x \in \mathbb{R}$,
$$ f'(x) = \frac{1 - x}{e^x - x} $$

b) Etudier le signe de la fonction dérivée de $f$, puis déduire le tableau de variations de $f$ sur $\mathbb{R}$.

c) Montrer que l'équation $f(x) = 0$ admet une solution unique dans l'intervalle $|1, 0|$.

4) La courbe $(C_f)$ ci-dessous est la représentation graphique de $f$ dans un repère orthonormé.
```

<!-- Page 214 -->

```markdown
# Examens nationaux
## Exponentielle corrigés de 2011 à 2025
2 Bac sciences PC/SVT/ST
PAGE 2

a) Justifier graphiquement que l'équation $f(x) = x$ admet deux solutions $\alpha$ et $\beta$.  
b) Montrer que $e^{\alpha} - e^{\beta} = \alpha - \beta$  
5) Soit $g$ la restriction de $f$ sur $I = ] -\infty, 1]$  
a) Montrer que $g$ admet une fonction réciproque $g^{-1}$ définie sur un intervall $J$ que l'on déterminera.  
b) Vérifier que $g^{-1}$ est dérivable en 1 et calculer $g^{-1}(1)$  

---

# Examen national 2024 - Rattrapage
1) La figure ci-contre représente les courbes $(C_g)$ et $(C_h)$ des fonctions $g : x \mapsto \frac{x}{1+x}$ et $h : x \mapsto \ln (1+x)$ sur l'intervale $] -1; +\infty [$ et la droite d'équation $y = x$ dans un même repère orthonormé.

1) a) À partir de cette figure, justifier que $\frac{x}{1+x} \leq \ln (1+x) \leq x$, pour tout $x \in ] -1; +\infty[$.  
b) En déduire que $\forall x \in] -1 + x[\ ; \ln (1+x) - x \geq 0$,  

---

c) Prover que $e^x - (1 + e^x)\ln(1 + e^x) \geq 0, \forall x \in \mathbb{R}$.  
2) Soit $(u_n)$ une suite définie par $u_0 = 1$ et la relation $u_{n+1} = g(u_n)$ pour $n \in \mathbb{N}$.  
a) Montrer par récurrence que $\forall n \in \mathbb{N} : 0 < u_n \leq 1$.  
b) Montrer que la suite $(u_n)$ est décroissante. (utiliser la question 1a)).  
c) En déduire que la suite $(u_n)$ est convergente.  
d) Déterminer la limite de $(u_n)$.  

1) On considère la fonction numérique définie sur $\mathbb{R}$ par : $f(x) = e^{-x}\ln(1 + e^x)$.  
Soit $(C_f)$ sa courbe représentative dans un repère orthonormé $(O, \vec{i}, \vec{j})$.  
1) Calculer $f(0)$ et vérifier que $f(x) > 0$ pour tout $x \in \mathbb{R}$.  
2) Montrer $\lim_{x \to -\infty} f(x) = 1$, puis donner l'interprétation géométriquement.  
3) Montrer que $\lim_{x \to +\infty} f(x) = 0$, puis donner l'interprétation géométriquement.  
4) a) Montrer que $\forall x \in \mathbb{R} :$  
$$ f'(x) = \frac{1}{e^x + 1} - e^{-x}\ln(1 + e^x)$$  
b) Vérifier que $\forall x \in \mathbb{R} :$  
$$ f'(x) = \frac{e^x - (1 + e^x)\ln(1 + e^x)}{e^x(1 + e^x)} $$  
c) Déduire que $f$ est strictement décroissante sur $\mathbb{R}$ (On peut utiliser 1c) de la partie I)  
5) a) Déterminer l'équation de la tangente $(T)$ au point d'abscisse 0.  
b) Vérifier que la tangente $(T)$ passe par le point $A \left(1, \frac{1}{2}\right)$.  
c) Construire $(T)$ et $(C_f)$ dans un repère orthonormé $(O, \vec{i}, \vec{j})$. (On prend $l=2 \; \& \; 7$).  
6) a) Montrer que $f$ admet une fonction réciproque $f^{-1}$ définie sur un intervalle $J$ que l'on déterminera.  
b) Vérifier que $f^{-1}$ est dérivable en 2 puis calculer $(f^{-1})'(2)$.
```

<!-- Page 215 -->

```markdown
# Examens nationaux
## Exponentielle corrigés de 2011 à 2025

### Examens national 2023 - Rattrapage
Soit $f$ une fonction définie sur $\mathbb{R}$ par :
$$
f(x) = \begin{cases}
(x - 1)^2 e^{(2 - x)} & : x \leq 2 \\
1 + (x - 2)^2 \ln(x - 2) & : x > 2
\end{cases}
$$
1) Montrer que la fonction $f$ est continue en 2

2) a) Vérifier que pour tout $x < 2$ et $x \neq 0$ :
$$
f(x) - f(2) = \frac{xe^{(2-x)} - 1}{x - 2} 
$$
b) Montrer que $f$ est dérivable à gauche en 2 et que $f'(2) = 0$ puis interpréter le résultat géométriquement

3) a) Vérifier que pour tout $x \leq 2$ :
$$
f(x) = x(x - 2)e^{(2-x)} + e^{(2-x)}
$$
b) Calculer $\lim_{x \to -\infty} f(x)$ puis interpréter le résultat géométriquement

c) Calculer $\lim_{x \to +\infty} f(x)$ et $\lim_{x \to +\infty} \frac{f(x)}{x}$ puis en déduire la branche infinie de $(C_f)$ au voisinage de $+\infty$

4) a) Montrer que : $(\forall x \in ]-\infty ; 2] )$ :
$$
f'(x) = 2(x - 1)(2 - x)e^{(2-x)}
$$
b) Montrer que $(\forall x \in [2 ; +\infty[)$ :
$$
f'(x) = (x - 2)(1 + 2\ln(x - 2))
$$
c) Résoudre dans l’intervalle ]2; +\infty[ l’inéquation $1 + 2\ln(x - 2) \leq 0$

d) Etudier le signe de $f'(x)$ sur $\mathbb{R}$ puis dresser le tableau de variation de $f$ sur $\mathbb{R}$ en justifiant votre réponse

5) Construire la courbe $(c)$ dans le repère $(O, i, j)$ (On prend : $f(3) = 1 ; 2 + \frac{1}{\sqrt{2}} \approx 2,6$ et $f\left(2 + \frac{1}{\sqrt{2}}\right) \approx 0,8$)

---

### Examens nationale 2022 - Normale
On considère la fonction numérique $f$ définie sur $\mathbb{R}$ par :
$$
f(x) = \left( \frac{x}{e^{2 - 1}} \right)^2
$$

1. Calculer $\lim_{x \to +\infty} f(x)$ et $\lim_{x \to -\infty} f(x)$.

2. Calculer $\lim_{x \to +\infty} \frac{f(x)}{x}$ et interpréter géométriquement le résultat.

3. a. Montrer que la droite $(\Delta)$ d'équation $y = x$ est asymptote à la courbe $(C)$ au voisinage de $-\infty$.

b. Etudier le signe de $(f(x) - x)$ pour tout $x \in \mathbb{R}$ et en déduire la position relative de la courbe $(C)$ et la droite $(\Delta)$.

4. a. Montrer que :
$$
f'(x) = \left( \frac{x}{e^{2 - 1}} \right)^2 + \frac{x}{e^{2}} \left( \frac{x}{e^{2 - 1}} \right)
$$
b. Vérifier que $\left( \frac{x}{e^{2 - 1}} \right) \to 0$ pour tout $x \in \mathbb{R}$ puis en déduire le signe de la fonction dérivée $f'$ sur $\mathbb{R}$.

c. Dresser le tableau des variations de la fonction $f$ sur $\mathbb{R}$.

5. a) Montrer que $f''(x) = \frac{1}{2} \frac{x}{e^{2}} g(x)$ ; où
$$
g(x) = (2x + 4)\frac{x}{e^{2}} - x - 4,
$$
pour tout $x \in \mathbb{R}$.

b) À partir de la courbe ci-contre de la fonction $g$, déterminer le signe de $g(x)$ sur $\mathbb{R}$ (remarque : $g(x) = 0$).

c) Etudier la concavité de la courbe $(C)$ et déterminer les abscisses des deux points d'inflexion.
```

<!-- Page 216 -->

```markdown
# Examens nationaux
## Exponentielle corrigés de 2011 à 2025
### 2 Bac sciences PC/SVT/ST

### PAGE 4

6) Construire la courbe (C) dans le repère $(0, i, j)$ (On prend : $\ln(4) \approx 1.4 ; \alpha \approx -4.5$ et $f(\alpha) = -3.5$)  
7) Montrer que la fonction $f$ admet une fonction réciproque $f^{-1}$ définie sur $\mathbb{R}$.  
8) Calculer $(f^{-1})'(\ln 4)$  
8) Soit $(u_n)$ la suite numérique définie par : $u_0 = 1$ et $u_{n+1} = f(u_n)$ pour tout $n \in \mathbb{N}$  
   a) Montrer par récurrence que $0 < u_n < 1$ pour tout $n \in \mathbb{N}$  
   b) Montrer que la suite $(u_n)$ est décroissante  
   c) En déduire que $(u_n)$ est convergente  
   d) Calculer la limite de la suite $(u_n)$  

### Examen nationale 2021 - Rattrapage
On considère la fonction numérique $f$ définie sur $\mathbb{R}$ par : $f(x) = 2 - xe^{-x} + 1$  
1) Calculer $\lim_{x \to +\infty} f(x)$ puis interpréter le résultat géométriquement  
2a) $\lim_{x \to -\infty} f(x)$  
b) Montrer que $\lim_{x \to -\infty} \frac{f(x)}{x} = -\infty$ puis interpréter le résultat géométriquement  
3a) Montrer que pour tout $x \in \mathbb{R}$ : $f'(x) = (x - 1)e^{-x+1}$  
b) Dresser le tableau de variation de $f$  
4a) Calculer $f''(x)$ pour tout $x \in \mathbb{R}$  
b) Montrer $(C)$ admet un point d'inflexion d'abscisse 2.  
5) Tracer la courbe (C) dans le repère $(0, i, j)$. (on prend $f(2) = 1.25$)  
6) Déterminer la valeur minimale de $f$ puis déduire que pour tout $x \in \mathbb{R}$ : $e^{-x} \geq 2$ soit $g$ la restriction de $f$ sur $]-\infty; 1]$  
   a) Montrer que $g$ admet une fonction réciproque sur un intervalle/ que l'on déterminera.  
   b) Tracer la courbe représentative de la fonction $g^{-1}(x)$ dans le même repère $(0, i, j)$  
   c) À partir de la courbe de $g^{-1}$ déterminer  
   $$ \lim_{x \to +\infty} g^{-1}(x) $$
   
### Examen nationale 2020 - Normale
On considère la fonction $f$ définie sur $\mathbb{R}$ par 
$$ f(x) = -x + \frac{5}{2} - \frac{1}{2} e^{-2}(e^{-x} - 4) $$  
1) Montrer que $\lim_{x \to -\infty} f(x) = -\infty$ et  
$$ \lim_{x \to +\infty} f(x) = +\infty $$  
2) a) Montrer que la droite $(D)$ d'équation $y = -x + \frac{5}{2}$ est une asymptote à la courbe $(C_f)$ au voisinage de $-\infty$  
b) Résoudre l’équation $e^{-x^2} - 4 = 0$ puis montrer que la courbe $(C_p)$ est au dessus de $(D)$ sur l’intervalle $]-\infty, 2 + \ln(4)]$ et en dessous de $(D)$ sur l’intervalle $[2 + \ln(4), +\infty[$  
3) Montrer que  
$$ \lim_{x \to +\infty} \frac{f(x)}{x} = -\infty $$  
puis interpréter géométriquement le résultat  
4) a) Montrer pour tout $x \in \mathbb{R}$ que  
$$ f'(x) = - (e^{-x} - 1)^2 $$  
b) Dresser le tableau de variations de la fonction $f$  
5) Calculer $f''(x)$ pour tout $x \in \mathbb{R}$ puis montrer que $A(2, 2)$ est un point d'inflexion de $(C_p)$  
6) Montrer que l’équation $f(x) = 0$ admet une solution unique $u$ telle que $2 + \ln(3) < \alpha < 2 + \ln(4)$  
7) Construire $(A)$ et $(C_f)$ dans le repère $(0, i, j)$ ci-dessous (On prend $\ln(2) \approx 0.7$ et $\ln(3) \approx 1.1$)  
8) a) Montrer que la fonction $f$ admet une fonction réciproque $f^{-1}$ définie sur $\mathbb{R}$  
b) Construire dans le même repère $(0, i, j)$ la courbe représentative de la fonction $f^{-1}$ (Remarque que la droite $(D)$ est perpendiculaire à la première bissectrice du repère)  
c) Calculer $(f^{-1})'(2 - \ln(3))$ (Remarquer que $(f^{-1})(2 - \ln(3)) = 2 + \ln(3)$)  
```

<!-- Page 217 -->

```markdown
# Examens nationaux 
## Exponentielle corrigés de 2011 à 2025
### 2 Bac sciences PC/SVT/ST 

#### Exercice : Examen nationale 2020 - Rattrapage
Soit $u$ la fonction définie sur $\mathbb{R}$ par : 
$$ u(x) = e^x - 2x - 2 - 3e^{-x} $$ 
1) Montrer que pour tout $x \in \mathbb{R}$ : 
$$ u'(x) = \frac{(e^{x}-1)^2 + 2}{e^x} $$  
2) Dresser le tableau de variations de la fonction $u$ (le calcul des limites n’est pas nécessaire)  
3) Déduire le signe du fonction $u$ sur $\mathbb{R}$  
(Notez que $u(0)=0$)  
4) Soit la fonction numérique $v$ définie sur $\mathbb{R}$ par :  
$$ v(x) = 2e^{2x} - 2xe^{2x} - 3 $$  
a) Vérifier que $v(x) = e^xu(x)$ pour tout $x \in \mathbb{R}$ .  
b) Déduire le signe du fonction $v$ sur $\mathbb{R}$.  
5) Montrer que la fonction $w$ définie par  
$$ w(x) = \frac{1}{2}2^x + (4 - 2x)e^x - 3 $$  
est la fonction primitive de la fonction $v$ sur $\mathbb{R}$.  

---

#### Problème : Examen nationale 2020 – Rattrapage
1) Soit $g$ la fonction définie sur l’intervalle $[0; +\infty[$ par :  
$$ g(x) = e^{-x} + \frac{1}{x} - 2 $$  
1) Montrer que $g'(x) < 0$ pour tout $x \in [0; +\infty[$.  
2) Dresser le tableau de variations de la fonction $g$ sur l’intervalle $[0; +\infty[$ (Notez que $g(1)=0$)  
3) On considère la fonction numérique $f$ définie sur l’intervalle $[0; +\infty[$ par :  
$$ f(x) = (1 - x)e^{-x} - x^2 + 5x - 3 - 2\ln x $$  
1) Montrer que $\lim_{x \to 0^+} f(x) = +\infty$ puis interpréter ce résultat géométriquement.  
2a) Vérifier que $\lim_{x \to +\infty} f(x) = -\infty$.  
b) Montrer que $\lim_{x \to +\infty} f(x) = -\infty$ puis interpréter ce résultat géométriquement.  
3a) Montrer que $f'(x) = (8(x-2)(x^2-2x-4)e^{x-4})$ pour tout $x \in [0; +\infty[$.

---

#### Problème : Examen nationale 2019 – Rattrapage
##### Première partie
Soit $f$ la fonction numérique définie sur $\mathbb{R}^*$ par : 
$$ f(x) = 2 + 8 \left(\frac{x-2}{x}\right)^2 e^{x-4} $$  
Et $(C)$ sa courbe représentative dans un repère orthonormé $(O; \vec{i}; \vec{j})$ (unité : 1 cm)  
1) a) Vérifier que $\lim_{x \to -\infty} f(x) = 2$ et interpréter le résultat géométriquement.  
b) Vérifier que $f(x) \to +\infty$ et interpréter le résultat géométriquement.  
2) a) Calculer $\lim_{x \to +\infty} f(x)$  
b) Montrer que la courbe $(C)$ admet une branche parabolique de direction l’axe des ordonnées au voisinage $+0$.  
3) a) Montrer que $f'(x) = \frac{8(x-2)(x^2-2x-4)e^{x-4}}{x^3}$ pour tout $x \in \mathbb{R}^*$, $x^2 - 2x + 4 > 0$.
```

<!-- Page 218 -->

```markdown
# Examens nationaux 
## Exponentielle corrigés de 2011 à 2025
### 2 Bac sciences PC/SVT/ST PAGE 6

c) Montrer que la fonction $f$ est strictement décroissante sur $]0, 2[$ et strictement croissante sur chaque des intervalles $] -\infty, 0]$ et $[2, +\infty[$  
d) Dresser le tableau de variation de la fonction $f$ sur $\mathbb{R}^*$  
4) Construire la courbe $(C)$ dans le repère $(O, \vec{i}, \vec{j})$  

5) a) Vérifier que la fonction $H: x \mapsto \frac{1}{x} e^{-x^4}$ est une fonction primitive de la fonction $h: x \mapsto \frac{x^{-1}}{x^4}$ sur $[2, 4]$  
b) Vérifier que 
$$ f(x) = 2 + 8e^{-x^4} - 32 \frac{(x-1)}{x^2} e^{-x^4} \text{ pour tout } x \in \mathbb{R}^* $$  

## Deuxième partie :
On considère la fonction $g$ définie sur $[2, 4]$ par $g(x) = (8 - 2) e^{-x^4} - x^2$  
a) Calculer $g(4)$  
b) Vérifier que pour tout $x \in [2, 4]$ :  
$$ g(x) = -(x - 2) 2 e^{-x^4} + x^2 (e^{-x^4} - 1) $$  
c) Vérifier que pour tout $x \in [2, 4]$ :  
$$ e^{-x^4} - 1 \leq 0 \text{ puis en déduire que pour tout x de l'intervalle [2, 4] : } g(x) \leq 0 $$  

2) a) En déduire que pour tout $x \in [2, 4] : f(x) - x = -\frac{x^{-2}}{x} g(x)$  
b) En déduire que pour tout $x \in [2, 4] : f(x) \leq x$

## Examen nationale 2018 - session Normale
Soit $g$ la fonction numérique définie sur $\mathbb{R}$ par :  
$$ g(x) = e^{-x^2} + 3x - 1 $$  
Le tableau ci-contre est le tableau de variations de la fonction $g$.  

1) Vérifier que $g'(0) = 0$.  

2) Déterminons le signe de $g(x)$ sur chacun des intervalles $] -\infty, 0[$ et $[0; +\infty[$ :  
II) Soit $f$ la fonction numérique définie sur $\mathbb{R}$ par : $f(x) = (x^2 - x)e^{-x} + x$.  
et $(C)$ sa courbe représentée dans un repère orthonormé $(O; \vec{i}; \vec{j})$ (unité : 1 cm).  

a) Vérifier que $f(x) = \frac{x^2}{e^{-x}} + x$ pour tout $x \in \mathbb{R}$ puis montrer que  
$$ \lim_{x \to +\infty} f(x) = +\infty. $$  
b) Calculer $\lim_{x \to +\infty} (f(x) - x)$ puis en déduire que $(C)$ admet une asymptote $(D)$ au voisinage de $+\infty$ d'équation $y = x.$  
c) Vérifier que $f(x) = \frac{x^2 - x + x e^x}{e^x}$ pour tout de $\mathbb{R}$ puis calculer $\lim_{x \to -\infty} f(x)$.  
d) Montrer que  
$$ \lim_{x \to -\infty} \frac{f(x)}{x} = -\infty $$  
et interpréter le résultat géométriquement.  

2. a) Montrer que $f(x) - x = x^2 - x$ ont le même signe pour tout $x \in \mathbb{R}$.  
b) En déduire que $(C)$ est au-dessous de $(D)$ sur chacun des intervalles $] -\infty; 0[$ et $[1; +\infty[$ et en dessous de $(D)$ sur l'intervalle $[0; 1]$.  
3. a) Montrer que $f'(x) = g(x)e^{-x}$ pour tout $x \in \mathbb{R}$.  
b) En déduire que la fonction $f$ est décroissante sur $] -\infty; 0]$ et croissante sur $[0; +\infty[$.  
c) Dresser le tableau de variations de la fonction $f$.  
4. a) Vérifier que $f''(x) = (x^2 - 5x + 4)e^{-x}$ pour tout $x \in \mathbb{R}$.  
b) En déduire que $(C)$ admet deux points d'inflexion d'abscisses respectives 1 et 4.  
5. Construire $(D)$ et $(C)$ dans le même repère $(0; \vec{i}; \vec{j})$.(on prend $f(4) \approx 4.2)$.
```

<!-- Page 219 -->

```markdown
# Examens nationaux Exponentielle corrigés de 2011 à 2025

## Examen nationale 2016-session Normale

1) On considère la fonction numérique $f$ définie sur $\mathbb{R}$ par : $f(x) = 2x - 2 + 2e^x - 4e^x$

   a) Montrer que $\lim_{x \to -\infty} f(x) = -\infty$.

   b) Montrer que la droite (D) d'équation $y = 2x - 2$ est une asymptote à la courbe $(C_f)$ au voisinage de $-\infty$.

   2.a) Montrer que $\lim_{x \to +\infty} f(x) = +\infty$.

   b) Montrer que $\lim_{x \to +\infty} \frac{f(x)}{x} = +\infty$ et interpréter géométriquement le résultat.

   3.a) Montrer que $f'(x) = 2(e^x - 1)^2$ pour tout $x \in \mathbb{R}$.

   b) Dresser le tableau de variations de la fonction $f$ sur $\mathbb{R}$. (remarquer que $f'(0) = 0$)

   c) Montrer qu'il existe un unique réel $a$ de l'intervalle $]1; \ln(4)[$ tel que $f(a) = 0$.

   4.a) Montrer que la courbe $(C_f)$ est au-dessus de la droite (D) sur l'intervalle $]ln(4); +\infty[$ et qu'elle est en dessous de la droite (D) sur l'intervalle $]-\infty; ln(4)[$.

   b) Montrer que la courbe $(C_f)$ possède un seul point d'inflexion de coordonnées $(0; -5)$.

   c) Tracer la droite (D) et la courbe $(C_f)$ dans le même repère $(O; \text{i}; \text{j})$.
   
   (on prendra $(4) \approx 1.4$, $1 \text{ et } a \approx 1.3$)

   1.a) Résoudre l'équation différentielle $(E)$ : $y' - 3y' + 2y = 0$.

   b) Déterminer la solution $g$ de l'équation $(E)$ qui vérifie les deux conditions :
   $g(0) = -3$ et $g'(0) = -2$.

2. Soit $h$ la fonction définie sur l'intervalle $]ln(4); +\infty[$ par $h(x) = ln(2e^{2x} - 4e^x)$.
   
   a) Montrer que la fonction $h$ admet une fonction réciproque $h^{-1}$ que l'on peut définir sur $\mathbb{R}$.
   
   Vérifier que $h(ln(5)) = ln(5)$ puis déterminer $(h^{-1}(ln(5)))$.

## Examen nationale 2015-session Normale

1) Soit $g$ la fonction numérique définie sur $\mathbb{R}$ par : $g(x) = e^x - 2x$.

   1. Calculer $g'(x)$ pour tout $x \in \mathbb{R}$ puis en déduire que $g$ est décroissante sur l'intervalle $]-\infty; ln(2)[$ et croissante sur l'intervalle $[ln(2); +\infty[$.

   2. Vérifier que $g(ln(2)) = 2(1 - ln(2))$ puis déterminer le signe de $g(ln(2))$.

   3. En déduire que $g(x) > 0$ pour tout $x \in \mathbb{R}$.

II) On considère la fonction numérique $f$ définie sur $\mathbb{R}$ par : $f(x) = \frac{x}{e^{2x}}$.

   1.a) Montrer que $\lim_{x \to +\infty} f(x) = 0$ et $\lim_{x \to -\infty} f(x) = -\frac{1}{2}$.

   (Remarquer que $e^x - 2x = x \frac{e^x}{e^{2x}}$ pour tout $x \in \mathbb{R}$)

   b) Interpréter géométriquement chacun des deux derniers résultats.

   2.a) Montrer que $f'(x) = \frac{(1-x)e^x}{(e^{2x})^2}$ pour tout $x \in \mathbb{R}$.

   b) Étudier le signe de $f'(x)$ sur $\mathbb{R}$ puis dresser le tableau de variations de la fonction $f$ sur $\mathbb{R}$.

   c) Montrer que $y = x$ est une équation de la droite (T) tangente à la courbe $(C)$ au point O d'origine du repère.

   3) Tracer dans le même repère $(O; \text{i}; \text{j})$, la droite (T) et la courbe $(C)$.
   
   (on prendra $1 - e^{-2} \approx 1.4$ et on admettra que la courbe $(C)$ a deux points d'inflexion l'abscisse de l'un appartenant à l'intervalle $[0; 1[$ et l'abscisse de l'autre est supérieur à $\frac{3}{2}$. )

   4.a) Montrer que $xe^{-x} \leq \frac{x}{e^{2x}} - \frac{1}{e^{2-x}}$ pour tout $x \in [0; +\infty[$.

III) Soit $h$ la fonction numérique définie sur l'intervalle $]-\infty; 0]$ par $h(x) = f(x)$.

   1) Montrer que la fonction $h$ admet une fonction réciproque $h^{-1}$ définie sur un intervalle $I$ que l'on précisera.

   2) Tracer, dans le même repère $(O; \text{i}; \text{j})$, la courbe $(C^{-1})$ représentative de la fonction $h^{-1}$.
```

<!-- Page 220 -->

```markdown
# Examens nationaux
## Exponentielle corrigés de 2011 à 2025

### Examen nationale 2014 - Rattrapage
On considère la fonction $f$ définie sur $\mathbb{R}$ par 
$$ f(x) = (e^x - 1)e^x $$

1) Montrer que $\lim_{x \to -\infty} f(x) = 0$ et donner une interprétation géométrique de ce résultat. 

2) a) Montrer que: $\lim_{x \to +\infty} f(x) = +\infty$  
b) En déduire que la courbe $(C_f)$ admet au voisinage de $+\infty$ une branche parabolique dont on précisera la direction. 

3) a) Montrer que: $f' (x) = e^x(e^x - 1 + 2e^x)$ pour tout $x \in \mathbb{R}$ puis vérifier que $f'(0) = 0$  
b) Montrer que: $e^x - 1 \geq 0$ pour tout $x \in [0,+\infty[$ et que $e^x - 1 \leq 0$ pour tout $x \in ]-\infty,0]$  
c) Montrer que la fonction $f$ est croissante sur $[0,+\infty[$ et qu'elle est décroissante sur $]-\infty,0]$ puis dresser le tableau de variation de la fonction $f$ sur $\mathbb{R}$.

4) a) Montrer que l'équation $f(x) = 0$ admet une solution unique $\alpha$ dans l'intervalle $[0,+\infty[$ et que $\frac{1}{2}e^{\alpha} < 1 < \alpha$ (on admettra que $\frac{1}{2} e^{x} < 1$)  
b) Construire $(C_f)$ dans le repère orthonormé $(O, \vec{i}, \vec{j})$ (on admet que la courbe $(C_f)$ admet un seul point d'inflexion qu'on ne demande pas de déterminer).

### Examen nationale 2011 - Normale
b) On considère la fonction $g$ définie sur $\mathbb{R}$ par: $g(x) = (1 - x)e^x - 1$

1) a) Montrer que: $g'(x) = -xe^x$ pour tout $x \in \mathbb{R}$.  
b) Montrer que la fonction $g$ est décroissante sur l'intervalle $[0,+\infty[$ et croissante sur l'intervalle $]-\infty,0]$ et vérifier que $g(0) = 0$.  
2) Déduire que: $g(x) \leq 0$ pour tout $x \in \mathbb{R}$.

3) a) Montrer que la courbe $(C)$ possède un point d'inflexion unique de coordonnées $(0, 2)$.  
b) Construire la droite $(D)$ et la courbe $(C)$ dans le même repère $(O; \vec{i}; \vec{j})$.
```

<!-- Page 221 -->

```markdown
# Offre préparation concours 2026 – Prof Fayssal
- Plus 20 séances en vidéos de préparation Médecine
- Plus 20 séances en vidéos pour ENSA-ENSAM-UM6P
- Nouvelle offre à partir de mois 6 avec des séances en directes et interactives
- Deux livres de préparation Médecine-ENSAM-ENSAM contiennent des astuces, plus de 20 concours blancs corrigés et la correction des anciens concours

Pour participer : 0681399067

---

## نص خاص بتقديم الطب (20 حصة) للإسترجاع للهيئة
- حصص لمبادرات في الطب (20 حصة) ENSM - UM6P - ENSA و ميزة ZOOM 
- كُتُب شاملة في الرياضيات 📚 مع تصحيحات مفضلة وتمارين نوعية + تصحيح المبادرات السابقة.
- عرض وحصص مباشرة يتم إعطاؤها يوميا من شهر 6 لمدة 6 دقائق.

0681399067 التواصل: 
```

<!-- Page 222 -->

```markdown
# Examens nationaux Exponentielle de 2011 à 2025

## Correction de l’Examen nationale 2025 - Session de Rattrapage

On considère la fonction $f$ définie sur $\mathbb{R}$ par 
$$ f(x) = x - 1 + \frac{4}{e^x + 2} $$

1. Calculer $f(0)$ et $f(\ln 2)$.
   - $f(0) = 0 - 1 + \frac{4}{e^0 + 2} = -1 + \frac{4}{1 + 2} = -1 + \frac{4}{3} = \frac{1}{3}.$
   - Donc $f(0) = \frac{1}{3}$.
   - $f(\ln 2) = \ln 2 - 1 + \frac{4}{e^{\ln 2} + 2} = \ln 2 - 1 + \frac{4}{2 + 2} = \ln 2 - 1 + 1 = \ln 2$.

2. a. Calculer $\lim_{x \to -\infty} f(x)$ et $\lim_{x \to +\infty} f(x)$.
   - On a : 
     $$ \lim_{x \to -\infty} (x - 1) = -\infty $$
     $$ \lim_{x \to -\infty} e^x + 2 = 2 $$
     Donc 
     $$ \lim_{x \to -\infty} f(x) = -\infty $$
   - On a : 
     $$ \lim_{x \to +\infty} e^x + 2 = +\infty $$
     Donc 
     $$ \lim_{x \to +\infty} f(x) = +\infty $$

2. b. Vérifier que $\lim_{x \to +\infty} (f(x) - (x - 1)) = 0$ puis interpréter géométriquement ce résultat.
   - On a $f(x) = (x - 1) + \frac{4}{e^x + 2}$
   - Donc 
   $$ \lim_{x \to +\infty} (f(x) - (x - 1)) = \lim_{x \to +\infty} \frac{4}{e^x + 2} = 0 $$

--- 

3. b) Calculer $\lim_{x \to -\infty} \frac{e^x}{x + 2}$ puis déduire que la droite d'équation $y = x + 1$ est une asymptote oblique à la courbe $(C_f)$ au voisinage de $-\infty$.
   - On a 
     $$ \lim_{x \to -\infty} e^x = 0 \Rightarrow \lim_{x \to -\infty} \frac{e^x}{x + 2} = 0. $$
   - On a 
     $$ \lim_{x \to -\infty} (f(x) - (x + 1)) = \lim_{x \to -\infty} \frac{2e^x}{e^x + 2} = 2 \times \lim_{x \to -\infty} \frac{e^x}{x + 2} = 0 $$

---

3. c) Montrer que pour tout $x \in \mathbb{R}$, $-1 < f(x) - x < 1$.
   - Soit $x \in \mathbb{R}$, 
   - $f(x) = x - 1 + \frac{4}{e^x + 2} \Rightarrow f(x) - x = -1 + \frac{4}{e^x + 2}$. 
   - Or $ \frac{4}{e^x + 2} > 0 $ donc $f(x) - x > -1.$
   - D'où $ \forall x \in \mathbb{R}, f(x) - x > -1 $.
   - Par conséquent $ \forall x \in \mathbb{R}, f(x) - x - 1 < 1 $.

4. a. Montrer que pour tout $x \in \mathbb{R}$, 
   $$ f'(x) = \frac{e^{x} + 4}{(e^x + 2)^2}. $$

   Soit $x \in \mathbb{R}$ ;
   $$ f'(x) = (x - 1)' + \left( \frac{4}{e^x + 2} \right)' $$
   $$ = 1 - \frac{-4(e^x)'}{(e^x + 2)^2}. $$
   Donc 
   $$ f'(x) = 1 - \frac{4e^x}{(e^x + 2)^2} =  \frac{(e^x + 2) - 4e^x}{(e^x + 2)^2} = \frac{e^x + 4 - 4e^x}{(e^x + 2)^2} = \frac{e^x + 4 - 4e^x}{(e^x + 2)^2}. $$

   Donc $ \forall x \in \mathbb{R}, f'(x) = \frac{e^{x} + 4}{(e^x + 2)^2} $.
```

<!-- Page 223 -->

```markdown
# Examens nationaux Exponentielle de 2011 à 2025

## 2 Bac sciences PC/SVT/ST
### Page : 02

4b). Déduire que la fonction $f$ est strictement croissante sur $\mathbb{R}$.
5a) Montrer que pour tout $m \in \mathbb{R}$, l'équation $f(x) = m$ admet une solution unique dans $\mathbb{R}$.
Soit $m \in \mathbb{R}$.
On a :
- $f$ est continue sur $\mathbb{R}$ car elle est dérivable sur $\mathbb{R}$
- $f$ est strictement croissante sur $\mathbb{R}$
$m \in f(\mathbb{R}) = \lim_{x \to -\infty} f(x)[ = -\infty, +\infty[$.
Alors, d'après le théorème des valeurs intermédiaires (TVI), l'équation $f(x) = m$ admet une unique solution dans $\mathbb{R}$.
5b). Soit $a$ l'unique solution de l'équation $f(x) = 0$. Vérifier que $-1 < \alpha < 0$ et montrer que $e^{\alpha} = \frac{2^{(1+\alpha)}}{4}$

$$
f(-1) = -2 + \frac{4}{e} - 1 - 1 + e^{1 + \alpha} = -2 + \frac{4}{e} + \frac{1 + 2e}{1 + 2e}
$$
$$
-2 = -2 + \frac{2}{1 + 2e}
$$

Donc $f(-1) < 0$.
On a $f(0) = \frac{1}{3}$ alors $f(0) > 0$.
Par conséquent $f(-1) < 0 < f(0)$, et $a$ est l'unique solution de l'équation $f(x) = 0$ alors $f(-1) < f(a) < f(0)$ et comme la fonction $f$ est strictement croissante, alors $-1 < a < 0$.
On a $f(\alpha) = 0 \Rightarrow e^{\alpha} = 0$

$$
\Rightarrow e^{\alpha} \text{ et al }.
$$

6a). Montrer que pour tout $x \in \mathbb{R}$,

$$
f''(x) = \frac{4 e^{x} (e^{x} - 2)}{(e^{x})^{3}}.
$$

Soit $x \in \mathbb{R}$, on a :

$$
f''(x) = \left( \frac{e^{2x} + 4}{(e^{x})^{2}} \right)'
$$
$$
= \frac{(e^{2x} + 4)'}{(e^{x})^{2}} - \frac{(e^{x})^{2}'}{(e^{x})^{2}} \cdot (e^{2x} + 4) \\
= \frac{(e^{x} + 4)'}{(e^{x})^{2}} - 2 e^{x}(e^{x} + 4) (e^{x})^{2} 
$$

Donc :

$$
f''(x) = \frac{2 e^{2x}(e^{x} + 2) - 2 e^{x}(e^{x} + 4)}{(e^{x})^{2}}.
$$

6b). Etudier le signe de $e^{x} - 2$ sur $\mathbb{R}$.
$$
e^{x} - 2 = 0 \Leftrightarrow x = \ln 2 \\
e^{x} - 2 > 0 \Leftrightarrow x > \ln 2 \\
e^{x} - 2 < 0 \Leftrightarrow x < \ln 2
$$

6c). Déduire que la courbe $(C_f)$ admet un point d'inflexion que l'on déterminera.
On a $f''(x) = \frac{4 e^{x}(e^{x} - 2)}{(e^{x})^{3}}$.
Et on a $(\forall x \in \mathbb{R}), \quad 4 e^{x} > 0$.
Donc le signe de $f''$ est celui de $e^{x} - 2$.
Alors la dérivée seconde $f''$ s'annule en $\ln 2$ en changeant de signe, donc la courbe $C_f$ admet un point d'inflexion $K(\ln 2, 2)$.

6d). Montrer que $y = -\frac{1}{2} x + \ln 2$ est l'équation de la tangente à $(C_f)$ au point d'abscisse en 2.
L'équation de la tangente à la courbe $C_f$ au point d'abscisse en 2 est :

$$
y = f'(ln(2))(x - ln(2)) + f(ln(2)).
$$

Et on a :
$$
f'(2) = \ln 2 + 4.
$$
$$
f''(2) = \frac{e^{\ln 2} + 4}{(2)^{2}}.
$$
Donc :

$$
y = f'( \ln 2)(x - 2) + f(\ln 2) \\
y = -\frac{1}{2} (x - \ln 2) + 2 = \frac{1}{2}(x - 2).
$$
```

<!-- Page 224 -->

```markdown
# Examens nationaux Exponentielle de 2011 à 2025

## 2 Bac sciences PC/SVT/ST
### Page : 03

7) Construire la courbe $(C_f)$

b) Montrer que pour tout $x \in \mathbb{R}$,
$$ f(x) = 1 - \ln(1 - xe^{-x}) $$
Soit $x \in \mathbb{R}$
$$ f(x) = x + 1 - \ln\left( e^{x} \left( 1 - \frac{x}{e^{x}} \right) \right) $$
$$ = x + 1 - \left( \ln(e^{x}) + \ln\left( 1 - \frac{x}{e^{x}} \right) \right) $$
$$ = x + 1 - x - \ln(1 - xe^{-x}) $$
$$ = 1 - \ln(1 - xe^{-x}) $$

c) En déduire que $\lim_{x \to +\infty} f(x) = 1$, puis interpréter géométriquement ce résultat.

On pose $t = -x$ si $x \to +\infty$ on a $t \to -\infty$  
Comme $\lim_{x \to +\infty} -xe^{-x} = \lim_{t \to -\infty} te^{t} = 0$  
Donc $\lim_{x \to +\infty} 1 - xe^{-x} = 1$  
D'où : $\lim_{x \to +\infty} (1 - xe^{-x}) = 0$  
Par suite $\lim_{x \to +\infty} -\ln(1 - xe^{-x}) = 1$  
Comme $\lim_{x \to +\infty} f(x) = 1$

### Interprétation géométrique
Alors la courbe de la fonction $f$ admet une asymptote horizontale d'équation $y = 1$ au voisinage de $+\infty$.

2)a) Calculer $\lim_{x \to -\infty} f(x)$  
On pose $t = -x$ si $x \to -\infty$ on a $t \to +\infty$  
Comme $\lim_{x \to -\infty} -xe^{-x} = \lim_{t \to +\infty} te^{-t} = +\infty$ car : $\lim_{t \to +\infty} e^{t} = +\infty$  
Donc : $\lim_{x \to -\infty} 1 - xe^{-x} = -\infty$  
D'où : $\lim_{x \to -\infty} (1 - xe^{-x}) = -\infty$  
Par suite $\lim_{x \to -\infty} -\ln(1 - xe^{-x}) = -\infty$  
Donc : $\lim_{x \to -\infty} f(x) = -\infty$

b) Vérifier que pour tout $x < 0$,
$$ f(x) = x + 1 - \ln( -x) - \ln\left(1 - \frac{1}{xe^{-x}} \right) $$  
Soit $x < 0$  
$$ f(x) = x + 1 - \ln( -x) $$
$$ = x + 1 - \ln\left( -\left( \frac{e^{-x}}{-x} + 1 \right) \right) $$
$$ f(x) = x + 1 - \ln( -x) - \ln\left(1 - \frac{1}{xe^{-x}} \right) $$
Donc : $f(x) = x + 1 - \ln( -x) - \ln\left(1 - \frac{1}{xe^{-x}} \right)$
```

<!-- Page 225 -->

```markdown
# Examens nationaux Exponentielle de 2011 à 2025

## 2 Bac sciences PC/SVT/ST
**Page : 04**

### c) Calculer $$\lim_{x \to -\infty} \frac{f(x)}{x}$$ puis déduire que la courbe $(C_f)$ admet une branche parabolique de direction la droite d'équation $y = x$ au voisinage de $-\infty$

$$
\lim_{x \to -\infty} f(x) = \lim_{x \to -\infty} \frac{1 + \frac{1}{x} \ln(-x) - \ln(1 - \frac{1}{xe^{-x}})}{x}
$$
Comme $$\lim_{x \to -\infty} \frac{1}{x} = 0$$ et $$\lim_{x \to -\infty} \ln(-x) = \lim_{t \to +\infty} t e^t = +\infty,$$  
D'où $$\lim_{x \to -\infty} -\frac{1}{xe^{-x}} = 0$$ alors  
$$\lim_{x \to -\infty} \frac{-\ln(1 - \frac{1}{xe^{-x}})}{x} = 0$$.

Donc,  
$$\lim_{x \to -\infty} \frac{f(x)}{x} = 1$$  

Or : $$\lim_{f(x)} - x = \lim_{x \to -\infty} \ln(1 - xe^{-x}) = -\infty$$ car $$\lim_{x \to -\infty} \ln(1 - xe^{-x}) = -\infty$$  

Donc $(C_f)$ admet une branche parabolique de direction la droite d'équation $y = x$ au voisinage de $-\infty$.

### 3)a) Montrer que pour tout $x \in \mathbb{R}$ :

$$ f'(x) = \frac{1 - x}{e^x - x} $$  
Soit $x \in \mathbb{R}$  
On a $f$ est dérivable sur $\mathbb{R}$ car c’est une somme et composée des fonctions dérivables sur $\mathbb{R}$.

$$ f'(x) = (x + 1 - \ln(e^x - x))' $$
$$ = 1 - (e^x - x)' $$
$$ = 1 - \frac{e^x - 1}{e^x - x} $$
$$ = \frac{e^x - x + 1}{1 - x} $$

### c) Montrer que l'équation $f(x) = 0$ admet une solution unique dans l'intervalle ]1, 0[

La fonction $f$ est continue sur $\mathbb{R}$ (car $f$ est dérivable sur $\mathbb{R}$), et donc continue sur ]-1; 0[ $f$ est strictement croissante sur [-1; 0] (voir tableau de variation de $f$).

* $f(-1) = -1 + 1 - \ln(e^{-1} + 1) = -\ln(\frac{1}{e} + 1)$
* $\frac{1}{e + 1} > 0$ 
* $f(0) = 0 + 1 - \ln(e^0 - 0) = 1 > 0$

Donc, d'après le théorème des valeurs intermédiaires (T.V.I), l'équation $f(x) = 0$ admet une solution unique dans ]1, 0[.

### 4) La courbe $(C_f)$ ci-dessous est la courbe de $f$ dans un repère orthonormé.
```

<!-- Page 226 -->

```markdown
# www.elboutkhili.jimdofree.com
Prof FAYSAL : 06813999067

## Examens nationaux Exponentielle de 2011 à 2025

### 2 Bac sciences PC/SVT/ST
Page : 05

a) Justifier graphiquement que l'équation $f(x) = x$ admet deux solutions $\alpha$ et $\beta$.
D'après la figure que la courbe $(C_g)$ de la fonction $f$ coupe la droite d'équation $y = x$ en deux points d'abscisses $\alpha$ et $\beta$.
Donc l'équation $f(x) = x$ admet deux solutions $\alpha$ et $\beta$.

b) Montrer que : $e^{\alpha} - e^{\beta} = \alpha - \beta$  
On a $\alpha$ et $\beta$ sont solutions de l'équation 
$$ f(x) = x, \text{ donc } f(\alpha) = \alpha $$
(*) $\Rightarrow f(\alpha) - \alpha = 0$  
$$ \Rightarrow 1 - \ln(e^{\alpha} - \alpha) = 0 $$  
$$ \Rightarrow e^{\alpha} - \alpha = 1 $$  
$$ \Rightarrow e^{\alpha} - e = e $$  

(**) $\Rightarrow f(\beta) = \beta$  
$$ f(\beta) - \beta = 0 $$  
$$ \Rightarrow 1 - \ln(e^{\beta} - \beta) = 0 $$  
$$ \Rightarrow \ln(e^{\beta} - \beta) = 0 $$  
$$ \Rightarrow e^{\beta} - \beta = e $$  

De (*) et (**) on a $e^{\alpha} - e^{\beta} = \alpha - \beta$.

5) Soit $g$ la restriction de $f$ sur $I = ] - \infty, 1]$  
a) Montrer que $g$ admet une fonction réciproque $g^{-1}$ définie sur un intervalle $J$ que l'on déterminera.  
On a $g$ est continu sur $]-\infty, 1]$ (car dérivable sur $]-\infty, 1]$)  
Et $g$ est strictement croissante sur $]-\infty, 1]$  
Donc $g$ admet une fonction réciproque $g^{-1}$ définie sur un intervalle $J$ tel que :  
$$ J = g(-\infty, 1] = \lim_{x \to -\infty} g(x) = -\infty; 2 - \ln(e - 1) $$  
Enfin $J = ] -\infty; 2 - \ln(e - 1]$  

b) Vérifier que $g^{-1}$ est dérivable en 1 et calculer $(g^{-1})'(1)$  
$$ (g^{-1})'(1) = \frac{1}{g'(g^{-1}(1))} = \frac{1}{g'(0)} = \frac{1}{0 - e^0} = 1 $$  
Donc $g^{-1}$ est dérivable en 1.

Et on a :  
$$ (g^{-1})'(1) = 1 $$
  
1) A partir de cette figure, justifier que :  
$$ \frac{x}{1+x} \leq \ln(1+x) \leq x, \text{ pour tout } x \in ] -1; +\infty[. $$  
La courbe $(C_h)$ est en dessous de la droite d'équation $y = x$ sur $] -1; +\infty [$.  
Donc $ \forall x \in ] -1; +\infty[: h(x) \leq x $  
Donc $ \forall x \in ] -1; +\infty[: \ln(1+x) \geq \frac{x}{1+x} $  

b) En déduire que  
$$ \forall x \in ] -1; +\infty[: (1+x) \ln(1+x) - x \geq 0,$$  
Soit $x \in ] -; +\infty[: $  
On a $\ln(1+x) \geq \frac{x}{1+x} \Rightarrow e^{1+x} > 0$  
Donc $(1+x) \ln(1+x) \geq x > 0$.  
Vérifier que $- (1 + e^{1}) < 0$,  
On a $\forall x \in \mathbb{R}: e^{x} \in ] -1; +\infty[$ $\Rightarrow \forall x \in ]-1; +\infty[: (1+x) \ln(1+x) \leq 0$  
2) Soit $(u_n)$ une suite numérique définie par $u_0 = 1$ et la relation $u_{n+1} = g(u_n)$.
```

<!-- Page 227 -->

```markdown
# Examens nationaux Exponentielle de 2011 à 2025

## Prof FAYSAL : 0681399067

### a) Montrer par récurrence que 
$$\forall n \in \mathbb{N} : 0 < u_n \leq 1.$$
- Pour $n=0$ on a $0 < u_0 = 1 \leq 1$
- Donc la proposition est vraie pour $n = 0$
Soit $n \in \mathbb{N}$
- Supposons que $0 < u_n \leq 1$ et montrons que $0 < u_{n+1} \leq 1$.

On a la fonction $g$ est strictement croissante sur l'intervalle $[0; 1]$ donc :
$$ 0 < u_n \leq g(u_n) < g(1) \leq 1 $$
$$ \Rightarrow 0 < u_{n+1} \leq \frac{1}{2}; \quad g(0) = 0 et g(1) = \frac{1}{2} $$
$$ \Rightarrow 0 < u_{n+1} \leq 1 \quad \text{car} \quad 1 < 1 $$

D'après le principe de récurrence, on a :
$$ \forall n \in \mathbb{N}: 0 < u_n \leq 1 $$

### b) Montrer que la suite $(u_n)$ est décroissante. (utiliser la question 1a))
On a d’après la question 3) 
$$ \forall x \in [0; 1]: g'(x) \leq x $$
Et on a $u_n \in [0; 1]$
Donc $f(u_n) \leq u_n$
Donc $u_{n+1} \leq u_n$

### c) En déduire que la suite $(u_n)$ est convergente.
La suite $(u_n)$ est décroissante et minorée par 0 donc convergente.

### d) Déterminer la limite de $(u_n)$.
- La suite $(u_n)$ est croissante convergente.
- La fonction $g$ est continue sur $I = [0; 1]$
$$ * g([0; 1]) = [g(0); g(\frac{1}{e^{-1}})] = [0; \frac{1}{2}] \subseteq [0; 1] $$
$$ u_0 = 1 \in [0; 1] $$

Alors la limite de $(u_n)$ est $L$ la solution de l’équation :
$$ g(x) = x \quad \text{dans } I $$
$$ g(x) = x^2 = x \quad \Rightarrow \quad x(1 + x) = x $$
$$ \Leftrightarrow x^2 - x = 0 $$
$$ \Rightarrow x = 0 $$

Donc la limite est $0$.

### II) On considère la fonction numérique définie sur $\mathbb{R}$ par : $f(x) = e^{-x} \ln(1 + e^x)$.
Soit $(C_f)$ sa courbe représentative dans un repère orthonormé $(O; \vec{i}, \vec{j})$.
1) Calculer $f(0)$ et vérifier que $f(x) > 0$ pour tout $x \in \mathbb{R}$.
$$ f(0) = e^0(1 + e^0) = \ln(2) $$
Soit $x \in \mathbb{R}$
On a $e^x > 0 \Rightarrow 1 + e^x > 1$
Donc $\ln(1 + e^x) > \ln(1)$
Donc $\ln(1 + e^x) > 0$
Et $e^{-x} > 0$
D'où $f(x) > 0 \quad \text{pour tout } x \in \mathbb{R}$.

2) Montrer que $\lim_{x \to -\infty} f(x) = 1$, puis donner l'interprétation géométriquement.
$$ \lim_{x \to -\infty} f(x) = \lim_{x \to -\infty} e^{-x} \ln(1 + e^x) = \frac{\ln(1 + e^x)}{e^x} $$
On pose $t = e^x$
Alors $x \to -\infty$ donc $t \to 0$
Donc $\lim_{x \to -\infty} f(x) = \lim_{t \to 0} \frac{\ln(1+t)}{t} = 1$

3) Montrer que $\lim_{x \to +\infty} f(x) = 0$, puis donner l'interprétation géométriquement.
$$ \lim_{x \to +\infty} f(x) = \lim_{x \to +\infty} e^{-x} \ln(1 + e^x) $$
$$ = \lim_{x \to +\infty} \frac{\ln(e^x(1 + e^{-x}))}{e^x} $$
$$ = \lim_{x \to +\infty} \frac{x e^x + \ln(1 + e^{-x})}{e^x} $$
$$ = \lim_{x \to +\infty} \frac{1}{1 + \frac{1}{e^x}} = 0 $$
```

<!-- Page 228 -->

```markdown
# Examens nationaux
## Exponentielle de 2011 à 2025
### 2 Bac sciences PC/SVT/ST
#### Page : 06

4) a) Montrer que $\forall x \in \mathbb{R} ; f'(x) = \frac{1}{e^x + 1 - e^{-x}\ln(1 + e^x)}$

La fonction $f$ est dérivable sur $\mathbb{R}$ comme composée des fonctions dérivables sur $\mathbb{R}$.

**Rappels :**
$$[\ln(u)]' = \frac{u'}{u} \quad \text{et} \quad (e^y)' = U'e^u$$
$$ \text{et} \quad (uv)' = u'v + uv' $$

Soit $x \in \mathbb{R}$

$$ f'(x) = (e^{-x}\ln(1 + e^x))' $$
$$ = -e^{-x}\ln(1 + e^x) + e^{-x}\frac{e^x}{e^x + 1} $$
$$ = -\frac{e^{-x}\ln(1 + e^x)}{e^x + 1} $$
$$ = \frac{1}{e^x + 1 - e^{-x}\ln(1 + e^x)} $$

b) Vérifier que $\forall x \in \mathbb{R} ; f'(x) = \frac{e^{-x}(1 + e^x)\ln(1 + e^x)}{e^{(1 + e^x)}}$

c) Déduire que $f$ est strictement décroissante sur $\mathbb{R}$ (On peut utiliser 1)c) de la partie I)

On a $\forall x \in \mathbb{R} ; e^x - (1 + e^x)\ln(1 + e^x) \leq 0$

Et $\forall x \in \mathbb{R} ; e^{(1 + e^x)} \geq 0$

Donc $f'(x) \leq 0$

Donc $f$ est strictement décroissante sur $\mathbb{R}$

5) a) Déterminer l’équation de la tangente $T$ au point d'abscisse 0.
$$ (T) : y = f'(0)(x - 0) + f(0) $$

$$ (T) : y = \left( \frac{1}{2} - \ln(2) \right) x + \ln(2) $$

b) Vérifier que la tangente $T$ passe par le point $A\left(1, \frac{1}{2}\right)$

On a 
$$\left( \frac{1}{2} - \ln(2) \right) \cdot 1 + \ln(2) = \frac{1}{2}$$

Donc $(T)$ passe par le point $A\left(1, \frac{1}{2}\right)$

6) a) Montrer que $f$ admet une fonction réciproque $f^{-1}$ définie sur un intervalle $J$ que l'on déterminera.
- $f$ est dérivable sur $\mathbb{R}$ donc elle est continue sur $\mathbb{R}$
- La fonction $f$ est strictement décroissante sur $\mathbb{R}$

Donc $f$ admet une fonction réciproque $f^{-1}$ définie sur $J = f([-∞, +∞]) = [0, 1]$

b) Vérifier que $f^{-1}$ est dérivable en $\ln(2)$ puis calculer $(f^{-1})'(\ln(2))$

On a $f(0) = \ln(2)$

Et la fonction $f$ est dérivable en 0 et $f'(0) = \frac{1}{2} - \ln(2) \neq 0$

Donc $f^{-1}$ est dérivable en $\ln(2)$

Et
$$(f^{-1})'(\ln(2)) = \frac{1}{f'(0)} = \frac{1}{\frac{1}{2} - \ln(2)} = \frac{1}{\frac{1}{2} - \ln(2)}$$
```

<!-- Page 229 -->

```markdown
# Examens nationaux Exponentielle de 2011 à 2025
## 2 Bac sciences PC/SVT/ST
### Page : 07

### Correction d’examen 2023 Rattrapage
Soit $f$ une fonction définie sur $\mathbb{R}$ par :
$$
f(x) = 
\begin{cases} 
(x - 1)^2 e^{x(2-x)} & : x \leq 2 \\ 
1 + (x - 2)^2 \ln(x - 2) & : x > 2 
\end{cases}
$$

1) Montrer que la fonction $f$ est continue en 2

On a 
$$ 
f(2) = (2 - 1)^2 e^{2(2-2)} = 1 
$$
et 
$$ 
\lim_{x \to 2^-} f(x) = \lim_{x \to 2^-} (2 - 1)^2 e^{2(2 - x)} = 1 = f(2) 
$$

Donc $f$ est continue à gauche en 2 :

$$ 
\lim_{x \to 2^-} f(x) = \lim_{x \to 2^-} 1 + (x - 2)^2 \ln(x - 2) 
$$

On pose $t = x - 2$.

On a $x \to 2^-$ donc $t \to 0^+$ donc 
$$ 
\lim_{x \to 2^-} f(x) = \lim_{t \to 0^+} 1 + t^2 \ln(t) = 1 
$$
Car $\lim_{t \to 0} t^2 \ln(t) = 0$.

Donc $f$ est continue à droite en 2. D’où $f$ est continue en 2.

2) a) Vérifier que pour tout $x < 2$ et $x \neq 0 :$
$$ 
f(x) - f(2) = \frac{xe^{x(2-x)} - x e^{(2-x)} - 1}{x - 2} 
$$

1ère méthode :
$$ 
xe^{(2-x)} - 1 = \frac{xe^{(2-x)} - e^{(2-x)} - 1}{x(2-x)} = \frac{x(2 - x) e^{(2-x)} + e^{(2-x)} - 1}{x(2 - x)} 
$$
On pose $t = x - 2$.

Donc si $x \to 2^-$ :
$$ 
\lim_{x \to 2^-} f(a) = 2e^0 = 2 
$$

On a $x \to 2^-$ donc $t \to 0^+$ donc 
$$ 
\lim_{x \to 2^-} \frac{e^{(2 - x)} - 1}{x(2 - x)} = \lim_{t \to 0} \frac{e^{(2 - x)} - 1}{e^{(2-x)}} = 1 
$$
Donc : 
$$ 
\lim_{x \to 2^-} x e^{(2 - x)} - 1 = 2 
$$
D’où 
$$ 
\lim_{x \to 2^-} \frac{f(x) - f(2)}{x - 2} = f'(2) = 0 
$$ 

b) Montrer que $f$ est dérivable à gauche en 2.
Rappel :
$$ 
f \text{ dérivable en } a \iff \lim_{x \to a} \frac{f(x) - f(a)}{x - a} = f'(a) 
$$

Interprétation géométrique :
$(Cf)$ admet au point $A(a; f(a))$ une tangente d’équation $(T): y = f'(a)(x - a) + f(a)$

$$ 
\lim_{x \to 2^-} \frac{f(x) - f(2)}{x - 2} 
$$

Sur le calcul :
$$ 
\lim_{x \to 2^-} = \frac{e^{(2-x)} - 1}{x(2 - x)} 
$$

On a $\lim_{x \to 2^-} e^{(2 - x)} = 2e^0 = 2$.

Donc $f'_{g}(2) = 0$.

a) Montrer que $f$ est dérivable en 2 et que $f'(2) = 0$ puis interpréter le résultat géométriquement :
$$ 
\frac{f(x) - f(2)}{x - 2} = \lim_{x \to 2^+} 1 + (x - 2)^2 \ln(x - 2) - 1 
$$ 

On pose $x = 2 + t$. 

Avec $t = x - 2$.

Donc si $x \to 2^+$ alors $t \to 0^+$.
```

<!-- Page 230 -->

```markdown
# www.elboutkhili.jimdo.com  
Prof FAYSAL : 0681399067

## Examens nationaux Exponentielle de 2011 à 2025  
### 2 Bac sciences PC/SVT/ST  
#### Page : 08

D'où $f$ est dérivable à droite en 2 et $f'_d(2) = 0$  
On a $f'_d(2) = f'_g(2) = 0$ donc $f$ est dérivable en 2 et $f'(2) = 0$  

### Interprétation géométrique  
$(C)$ admet au point $A(2 ; 1)$ une tangente d'équation $(T)$ : $y = f'(2)(x - 2) + f(2)$  
Donc $(T)$ : $y = 1$  

3) a) Vérifier que pour tout $x < 2$ :  
$$  
f(x) = (x - 1)² e^{2(x-2)} + e^{(2-x)}  
$$  
Et pour $x \to -\infty$ :  
$$  
f(x) = x(x - 2)e^{(2-x)}  
$$  

b) Calculer $\lim_{x \to -\infty} f(x)$ puis interpréter le résultat géométrique  
$$  
\lim_{x \to -\infty} f(x) = \lim_{x \to -\infty} x(x-2)e^{(2-x)} + e^{(2-x)}  
$$  

On pose $t = x \to -\infty$  
On a $x \to -\infty$ donc $t \to -\infty$  
$$  
\lim_{x \to -\infty} f(x) = \lim_{t \to -\infty} te + e^{(2-t)} = 0  
$$  
Car $\lim_{t \to -\infty} te = 0$ et $\lim_{t \to -\infty} e^{(2-t)} = 0$  

### Interprétation géométrique  
On a $\lim_{x \to -\infty} f(x) = 0$ donc la droite d'équation $y=0$ (l'axe des abscisses) est une asymptote horizontale à $(C)$ au voisinage de $-\infty$  

c) Calculer $f(x)$ et $\lim_{x \to +\infty} \frac{f(x)}{x}$ puis en déduire la branche infinie de $(C_f)$ au voisinage de $+\infty$  
$$  
\lim_{x \to +\infty} f(x) = \lim_{x \to +\infty} 1 + (x - 2)² \ln(x - 2) \to +\infty  
$$  
Car $\lim_{t^2 \to +\infty} e^{(t)} = +\infty$ et $\lim_{ln(t) \to +\infty}$  
$$  
\frac{f(x)}{x} = \frac{1 + (x - 2)² \ln(x - 2)}{x}  
$$  

On a $x \to +\infty$ donc $t \to +\infty$  
$$  
\lim_{x \to +\infty} f(x) = \lim_{x \to +\infty} 1 + t² \ln(x - 2) = +\infty  
$$  
Car $\lim_{t^2 \to +\infty}=+\infty$ et $\lim_{ln(t) \to +\infty}$  

### Résoudre dans l'intervalle $]2 ; +\infty[$ l'inéquation $1 + 2ln(x - 2) \leq 0$  
Soit $x \in ]2 ; +\infty[$  
$$  
1 + 2ln(x - 2) \leq 0 \Leftrightarrow ln(x - 2) \leq -\frac{1}{2}  
$$  
Ce qui donne :  
$$  
x - 2 \leq e^{-\frac{1}{2}}  
$$  
Donc :  
$$  
x \leq 2 + \frac{1}{\sqrt{e}}  
$$  

Donc $S = ]2 ; 2 + \frac{1}{\sqrt{e}}[$
```

<!-- Page 231 -->

```markdown
# Examens nationaux Exponentielle de 2011 à 2025

## 2 Bac sciences PC/SVT/ST
### Page : 9

d) Etudier le signe de $f'(x)$ sur $\mathbb{R}$ puis dresser le tableau de variation de $f$ sur $\mathbb{R}$ en justifiant votre réponse  
Soit $x \in ]-\infty ; 2]$

On a $f'(x) = 2x(1 - 2)e^{x(2 - x)}$  
On a $e^{x(2-x)} > 0$ et $(2 - x) > 0$  
Donc le signe de $f'$ est celui de $x( - 1)$

Soit $x \in [2 ; +\infty[$  
On a $f'(x) = (x - 2)(1 + 2ln(x - 2))$  
On a $x - 2 > 0$  
Donc le signe de $f'$ sur $]2 ; +\infty[$ est celui de $1 + 2ln(x - 2)$

D'où le tableau de variations de $f$

5) Construire la courbe $(C)$ dans le repère

---

## Correction d’examen 2022 normale

La fonction $f$ définie sur $\mathbb{R}$ par :  
$$ f(x) = x \left( \frac{x}{e^2 - 1} \right)^2 $$

1. Calculer $\lim_{x \to +\infty} f(x)$ et $\lim_{x \to -\infty} f(x)$  
$$\lim_{x \to +\infty} f(x) = \lim_{x \to +\infty} x \left( \frac{x}{e^2 - 1} \right)^2 = +\infty$$  
Car: $\lim_{x \to +\infty} x = +\infty$ et $\lim_{x \to +\infty} e^2 = \lim_{x \to +\infty} \sqrt{x} = +\infty$

$$\lim_{x \to -\infty} f(x) = \lim_{x \to -\infty} x \left( \frac{x}{e^2 - 1} \right)^2 = -\infty$$  
Car: $\lim_{x \to -\infty} x = -\infty$ et $\lim_{x \to -\infty} \left( \frac{e^2 - 1}{e^2} \right)^2 = (0 - 1)^2 = 1$

2. Calculer $\lim_{x \to +\infty} \frac{f(x)}{x}$ et interpréter géométriquement le résultat  
$$\lim_{x \to +\infty} \frac{f(x)}{x} = \lim_{x \to +\infty} x \left( \frac{x}{e^2 - 1} \right)^2 = +\infty$$  
Donc $(C_f)$ admet branche parabolique de direction $(O_y)$ au voisinage de $+\infty$

3. a. Montrer que la droite $(\Delta)$ d’équation $y = x$ est asymptote à la courbe $(C)$ au voisinage de $-\infty$  
$$\lim_{x \to -\infty} f(x) - x = \lim_{x \to -\infty} x \left( \frac{x}{e^2 - 1} \right)^2 - x $$  
$$ = \lim_{x \to -\infty} x \left( \left( \frac{x}{e^2} \right)^2 - 2e^2 + 1 \right) $$  
$$ = \lim_{x \to -\infty} \left[ \left( \frac{x^2}{e^2} - 2e^2 - 1 \right) \right] = 0 $$  
Car: $\lim_{x \to -\infty} x^2 = 0$ et $\lim_{x \to -\infty} e^2 = 0$

Donc la droite $(\Delta)$ d’équation $y = x$ est asymptote à la courbe $(C)$ au voisinage de $-\infty$  
b. Etudier le signe de $f(x) - x$ pour $x \in \mathbb{R}$ et en déduire la position relative de la courbe $(C)$ et la droite $(\Delta)$
```

<!-- Page 232 -->

```markdown
# Examens nationaux Exponentielle de 2011 à 2025

## 2 Bac sciences PC/SVT/ST
**Page : 10**

Soit $x \in \mathbb{R}$  
$f(x) - x = x e^{\frac{x}{2}}(e^2 - 2)$, d'après la question précédente  

$$ f(x) - x = 0 \iff x = 0 \, \text{ ou } \, (e^2 - 2) = 0 \text{ car } e^2 > 0 $$  
$$ \iff x = 0 \, \text{ ou } \, e^2 = 2 $$  
$$ \iff x = 0 \, \text{ ou } \, x = 0 \, \text{ ou } \, \ln(e^2) = \ln(2) $$  
$$ \iff x = 0 \, \text{ ou } \, x = 2 \ln(2) $$

D'où le tableau suivant

b. Vérifier que $x \left( \frac{x}{e^2 - 1} \right) \geq 0 \, \text{ pour tout } x \in \mathbb{R}$ puis en déduire le signe de la fonction dérivée $f' \, \text{ sur } \mathbb{R}$

Soit $x \in [0; +\infty[$  
$$ x > 0 \iff \frac{x}{2} \geq 0 \iff \frac{x}{e^2 - 1} \geq 0 $$  
$$ \iff x(e^2 - 1) \geq 0 $$  
Soit $x \in ]-\infty; 0]$  
$$ x \leq 0 \text{ et } \frac{x}{2} \leq 0 $$  
$$ \iff \frac{x}{e^2} \leq 1 $$  
$$ \iff \frac{x}{e^2 - 1} \leq 0 $$

D'où $ \forall x \in \mathbb{R} : x \left( e^2 - 1 \right) \geq 0 $

c. Dresser le tableau des variations de la fonction $f$ sur $\mathbb{R}$  
La fonction $f$ est strictement croissante sur $\mathbb{R}$

$$
\begin{array}{|c|c|c|c|}
\hline
x & -\infty & 0 & +\infty \\
\hline
f'(x) & + & + & + \\
\hline
f(x) & -\infty & 0 & +\infty \\
\hline
\end{array}
$$

5. a) Montrer que $f''(x) = \frac{1}{2} \frac{x}{e^2} g(x) ;$ où  
$$ g(x) = (2x + 4)e^{\frac{x}{2}} - x - 4 $$

Soit $x \in \mathbb{R}$  
On a $f'(x) = \left( \frac{x}{e^2 - 1} \right)^2 + x e^{\frac{x}{2}}(e^2 - 1) $  

D'où :
$$
f''(x) = 2 \left( e^{\frac{x}{2}} - 1 \right)^2 + x \left( e^{\frac{x}{2}} \right)^1
$$
```

<!-- Page 233 -->

```markdown
# Examens nationaux Exponentielle de 2011 à 2025

## 2 Bac sciences PC/SVT/ST
Page : 11

$$
\frac{1}{2} \frac{e^{2x}}{(2e^{2x} - 2)} + \frac{1}{2} \frac{x}{(2e^{2} - 2)}
$$
$$
= \frac{1}{2} \frac{e^{2x}}{(2e^{2x} - 1)} = \frac{1}{2} e^{2} (2e^{2} - 2 + 2xe^{2} - x) = \frac{1}{2} e^{2} (2x + 4)e^{2x - 4} = \frac{1}{2} g(x)
$$

**b)** À partir de la courbe ci-contre de la fonction $g$, déterminer le signe de $g(x)$ sur $\mathbb{R}$ (remarque : $g(\alpha) = 0$)

D'après la courbe on a :
$$
\forall x \in \mathbb{R} : ]-\infty; \alpha] : g(x) \geq 0
$$
$$
\forall x \in \mathbb{R} : [\alpha; 0] : g(x) \leq 0
$$
$$
\forall x \in \mathbb{R} : [\alpha; +\infty[ : g(x) \geq 0
$$

**c)** Étudier la concavité de la courbe (C) et déterminer les abscisses des deux points d’inflexions.

Soit $ x \in \mathbb{R} $ on a $ f''(x) = \frac{1}{2} e^{2x} $ donc le signe de $ f'' $ est celui de $ g $

On a $\forall x \in ]-\infty; \alpha] : g(x) \geq 0 $ donc la fonction $ f $ est convexe sur l’intervalle $ ]-\infty; \alpha] $ et l’intervalle $ [\alpha; +\infty[ $

Et on a $ \forall x \in \mathbb{R} : [0; 0] : f''(x) < 0 $ donc la fonction $ f $ est concave sur l’intervalle $ [\alpha; 0] $ ; 
La fonction $ f $ s'annule en $ \alpha $ et 0 en changeant de signe 
D’où les points d’abscisses $ x $ sont des points d’inflexions de (C)

---

# Correction d’examen 2021 - Rattrapage

Soit $ f $ la fonction numérique définie sur $\mathbb{R}$ par $ f(x) = 2 - xe^{-x+1} $

1) Calculons $\lim_{x \to +\infty} f(x)$ et interprétons le résultat géométriquement

$$
\lim_{x \to +\infty} f(x) = \lim_{x \to +\infty} 2 - xe^{-x+1} = \lim_{x \to +\infty} 2 - xe^{-x} = 0 \quad (\text{pour : } t = -x)
$$
$$
D'où \lim_{x \to +\infty} f(x) = 2
$$

√ Interprétons le résultat géométriquement

On a $ \lim_{x \to +\infty} f(x) = 2 $ donc $ y = 2 $ une asymptote horizontale à (C) au voisinage de $ +\infty $

2) a) Calculons $\lim_{x \to -\infty} f(x)$ 

$$
\lim_{x \to -\infty} f(x) = \lim_{x \to -\infty} 2 - xe^{-x+1}
$$
Or
$$
\lim_{x \to -\infty} -xe^{-x+1} = \lim_{x \to -\infty} -xe^{-x+1} = +\infty
$$
$$
\lim_{x \to -\infty} f(x) = +\infty
$$
Donc $f(x) = +\infty$
```

<!-- Page 234 -->

```markdown
# Examens nationaux Exponentielle de 2011 à 2025
## 2 Bac sciences PC/SVT/ST
### Page : 12

b) Montrons que $\lim_{x \to -\infty} f(x) = -\infty$, et interprétons le résultat géométriquement  
✓ Montrons que $\lim_{x \to -\infty} f(x) = -\infty$  

On a $\lim_{x \to -\infty} \frac{2 - xe^{-x+1}}{x} = \lim_{x \to -\infty} \frac{2 - e^{-x+1}}{x}$.  
Or $\lim_{x \to -\infty} e^{-x+1} = +\infty$ et $\lim_{x \to -\infty} \frac{2}{x} = 0$.  
Donc $\lim_{x \to -\infty} f(x) = -\infty$.  

Interprétons le résultat géométriquement  
Puisque $\lim_{x \to -\infty} f(x) = +\infty$ et $\lim_{x \to -\infty} f(x) = -\infty$,  
Alors $(C)$ admet une branche parabolique de direction l'axe $(Oy)$ au voisinage de $-\infty$  

3 - a) Montrons que pour tout $x \in \mathbb{R}$ on a :  
$$ f'(x) = (x - 1)e^{-x+1} $$  
La fonction $x \mapsto e^{-x+1}$ est dérivable sur $\mathbb{R}$ (comme composée de deux fonctions dérivables).  

Donc $x \mapsto -xe^{-x+1}$ est dérivable sur $\mathbb{R}$ comme produit de deux fonctions dérivables.  
D'où $f$ est dérivable sur $\mathbb{R}$ et on a :  
Pour tout $x \in \mathbb{R}$:  
$$ f'(x) = (2 - xe^{-x+1})' = -1 \times e^{-x+1} - x \times (1)e^{-x+1} $$  
$$ = -e^{-x+1} + xe^{-x+1} $$  

Alors $f''(x) = (x - 1)e^{-x+1}$ pour tout $x \in \mathbb{R}$  

b) Dressons le tableau de variations de la fonction $f$.  
Puisque $e^{-x+1} > 0$ pour tout $x \in \mathbb{R}$, alors le signe de $f'(x)$ est celui de $1 - x$  

4 - a) Calculer $f''(x)$ pour tout $x \in \mathbb{R}$  

On a $f'(x) = (x - 1)e^{-x+1}$  
Donc  
$$ f''(x) = ((-1)e^{-x+1})' = 1 \times e^{-x+1} + (1 - 1)e^{-x+1} $$  
$$ = (1 - x)e^{-x+1} $$  
D'où $f''(x) = (2 - xe^{-x+1})$ pour tout $x \in \mathbb{R}$  

6 - Déterminons la valeur minimale de $f$ et déduisons que $e^{-1} \geq x$ pour tout $x \in \mathbb{R}$  
Déterminons la valeur minimale de la fonction $f$  

D'après les questions précédentes, on a $f(1) = 1$ est la valeur minimale de $f$ sur $\mathbb{R}$  
Puisque $1$ est la valeur minimale de $f$ sur $\mathbb{R}$ alors $f(x) \geq f(1)$ pour tout $x \in \mathbb{R}$  
Et on a $f(x) \geq f(1) \implies 2 - xe^{-x+1} \geq 1$  
$$ \Leftrightarrow 1 \geq xe^{-x+1} \Leftrightarrow 1 \geq e^{-1} \geq x e^{-1} \geq x $$  
D'où $e^{-1} \geq x$ pour tout $x \in \mathbb{R}$
```

<!-- Page 235 -->

```markdown
# Examens nationaux Exponentielle de 2011 à 2025

## Correction d’examen 2020 Normale

On considère la fonction numérique $f$ définie sur $\mathbb{R}$ par 
$$ f(x) = -x + \frac{5}{2} - \frac{1}{2} e^{x-2} (e^{x-2} - 4) $$

1) Montrer que $\lim_{x \to -\infty} f(x) = +\infty$ et 
$$ \lim_{x \to +\infty} f(x) = -\infty $$

$$ \lim_{x \to -\infty} f(x) = \lim_{x \to -\infty} \left(-x + \frac{5}{2} - \frac{1}{2} e^{x-2} (e^{x-2}-4)\right) = +\infty $$

Car $\lim_{x \to -\infty} -x = +\infty$ et $\lim_{x \to -\infty} \frac{1}{2} e^{x-2} = 0$  
Et $\lim_{x \to -\infty} (e^{x-2} - 4) = 0$

Donc la droite $(\Delta)$ d’équation $y = -x + \frac{5}{2}$ est une asymptote à la courbe $(C_f)$ au voisinage de $-\infty$

On a $\lim_{x \to -\infty} f(x) = +\infty$ et on a :
$$ \lim_{x \to -\infty} f(x) = \lim_{x \to +\infty} \frac{1}{2} e^{x-2} (e^{x-2} - 4) = 0 $$

Car $\lim_{x \to -\infty} \frac{1}{2} e^{x-2} = 0$ et $\lim_{x \to +\infty} (e^{x-2} - 4) = +\infty$

### 2a) Démontrer que la droite $(\Delta)$ d’équation $y = -x + \frac{5}{2}$ est une asymptote à la courbe $(C_f)$ au voisinage de $-\infty$

b) Résoudre l’équation $e^{x-2} - 4 = 0$ puis montrer que la courbe $(C_f)$ est au-dessus de $(\Delta)$ sur l’intervalle ]$-\infty$, $2 + \ln(4)[$ et en dessous de $(\Delta)$ sur l’intervalle $[2 + \ln(4), +\infty[$ 

$$ e^{x-2} - 4 = 0 \iff e^{x-2} = 4 $$  
$$ \iff x - 2 = \ln(4) $$  
$$ \iff x = 2 + \ln(4) $$

On a $f(x) = \left(-x + \frac{5}{2} - \frac{1}{2} e^{x-2} (e^{x-2} - 4)\right)$

Donc la courbe $(C_f)$ est au-dessus de $(\Delta)$ sur l’intervalle $] -\infty$, 2 + \ln(4)[$ et en dessous de $(\Delta)$ sur l’intervalle $[2 + \ln(4), +\infty[$

3) Montrer que $\lim_{x \to +\infty} \frac{f(x)}{x} = -\frac{1}{2}$ puis interpréter géométriquement le résultat

$$ \lim_{x \to +\infty} f(x) = \lim_{x \to +\infty} \left(- x + \frac{5}{2} - \frac{1}{2} e^{x-2}(e^{x-2} - 4)\right) $$  
$$ = -\infty $$

Et $\lim_{x \to +\infty} (e^{x-2}) = +\infty$

Donc $(C_f)$ admet branche parabolique de direction $(O_y)$ au voisinage de $+\infty$

### 4a) Montrer pour tout $x \in \mathbb{R}$ que $f'(x) = - (e^{x-2} - 1)$

La fonction $f$ est dérivable sur $\mathbb{R}$ car c’est une somme et produit des fonctions dérivables sur $\mathbb{R}$
$$ f'(x) = \left[-x + \frac{5}{2} - \frac{1}{2} e^{x-2}(e^{x-2} - 4)\right]' $$  
$$ = -1 - \frac{1}{2} e^{x-2}(e^{x-2} - 4) $$  
$$ = -1 - \frac{1}{2}(e^{x-2})^2 + 2 e^{x-2} - 1 $$  
$$ = -((e^{x-2})^2 - 2 e^{x-2} - 1) = - (e^{x-2} - 1)^2 $$

b) Dresser le tableau de variations de $f$

Soit $x \in \mathbb{R}$ on a $f'(x) = - (e^{x-2} - 1)^2 < 0$

| $x$   | $f'(x)$ | $f(x)$  |
|-------|---------|----------|
|       |         |          |
```

<!-- Page 236 -->

```markdown
# Examens nationaux Exponentielle de 2011 à 2025

## 2 Bac sciences PC/SVT/ST 
### Page : 14

5) Calculer $f''(x)$ pour tout $x \in \mathbb{R}$ puis montrer que $A(2, 2)$ est un point d'inflexion de $(C_f)$  
Soit $x \in \mathbb{R}$  
$$
f''(x) = \left[-(e^{-x^2} - 1)^2\right]' 
= -2(e^{-x^2} - 1)'(e^{-x^2} - 1)^{-1} 
= -2e^{-2}(e^{-x^2} - 1) 
$$
$$
e^{-x^2} - 1 = 0 \iff e^{-x^2} = 1 
\iff x - 2 = 0 
\iff x = 2 
$$

\[
\begin{array}{|c|c|c|c|}
\hline
x & -\infty & 2 & +\infty \\
\hline
-2e^{-2} & - & 0 & + \\
\hline
e^{-2} - 1 & - & 0 & + \\
\hline
f''(x) & + & 0 & - \\
\hline
\end{array}
\]

On a $f'$ n'annule et change de signe en 2 donc $A(2, f(2))$ c-t-dire $A(2, 2)$ est un point d'inflexion de $(C_f)$

6) Montrer que l'équation $f(x) = 0$ admet une solution unique $\alpha$ telle 

$$
2 + \ln 3 < \alpha < 2 + \ln 4 
$$

La fonction $f$ est dérivable sur $\mathbb{R}$ donc elle est continue sur $\mathbb{R}$  
Donc elle est continue sur $[2 + \ln 3; 2 + \ln 4]$  
Et on a $f$ est strictement décroissante sur $[2 + \ln 3; 2 + \ln 4]$  
Et $f(2 + \ln 2)f(2 + \ln 4) < 0$

Donc l'équation $f(x) = 0$ admet une solution unique $\alpha$ telle que $2 + \ln 3 < \alpha < 2 + \ln 4$

8) a) Montrer que la fonction $f$ admet une fonction réciproque $f^{-1}$ définie sur $\mathbb{R}$  
La fonction $f$ est dérivable sur $\mathbb{R}$ donc elle est continue sur $\mathbb{R}$  
La fonction $f$ est dérivable sur $\mathbb{R}$ donc elle est continue sur $\mathbb{R}$  
Et on $f$ est strictement décroissante sur $\mathbb{R}$  
Donc la fonction $f$ admet une fonction réciproque $f^{-1}$ définie sur $f(\mathbb{R}) = \mathbb{R}$  
b) Construire $(\Delta)$ et $(C_f)$ dans le repère $(O; \vec{i}, \vec{j})$ ci-dessous (On prend $\ln(2) \approx 0.7$ et $\ln(3) \approx 1.1$) puis $(Cf^{-1})$  
(Remarque que $(\Delta)$ est perpendiculaire à la première bissectrice du repère)

Les courbes de $h$ et de $h^{-1}$ sont symétriques par rapport à la droite d'équation $y = x$  
c) Calculer $(f^{-1})'(2 - \ln(3))$ (Remarquer que $f^{-1}(2 - \ln(3)) = 2 + \ln(3)$)  
On a $f^{-1}(2 - \ln(3)) = 2 + \ln(3)$  

Et la fonction $f$ est dérivable en $2 + \ln(3)$  
Et $f'(2 + \ln(3)) = -4 \neq 0$  
Donc $f^{-1}$ est dérivable en $2 - \ln(3)$ et  
$$(f^{-1})'(2 - \ln(3)) = \frac{1}{f'(2 + \ln(3))} = -\frac{1}{4}$$
```

<!-- Page 237 -->

```markdown
# Examens nationaux Exponentielle de 2011 à 2025

## Correction d’exercice : Examen nationale 2020 - Rattrapage

Soit $u$ la fonction définie sur $\mathbb{R}$ par :
$$ u(x) = e^x - 2x + 2 - 3e^{-x} $$

1) Montrer que pour tout $x \in \mathbb{R}$ :
$$ u'(x) = \frac{(e^{-x}-1)^2 + 2}{e^x} $$

Soit $x \in \mathbb{R}$ :
$$ u'(x) = (e^x - 2x + 2 - 3e^{-x})' $$
$$ = e^x - 2 + 3e^{-x} $$
$$ = \frac{e^x}{e^{2x}} - 2e^{-2x} + 3e^{-x} $$
$$ = e^x $$
$$ = \frac{(e^x)^{2} - 2e^x + 1 + 2}{e^x} $$

Donc : $ \forall x \in \mathbb{R}, u'(x) = \frac{(e^{-x}-1)^2 + 2}{e^x} > 0 $

b) Posons le tableau de variation de la fonction $u$ :
On a : $\forall x \in \mathbb{R}, u'(x) = \frac{(e^{-x}-1)^2 + 2}{e^x} > 0$

| $x$          | $-\infty$ | 0        | $+\infty$ |
|--------------|-----------|----------|-----------|
| $u'(x)$     |           | $0$      |           |
| $u(x)$      |           | $u(0)$   |           |

c) Déduisons le signe de la fonction $u$ :
Pour $x \in [-\infty; 0]$ on a : $x \leq 0$ ;
Puisque $u$ est croissante sur $[-\infty; 0]$ :
Donc : $u(x) \leq u(0) = 0$

Pour $x \in [0; +\infty[$ on a : $x \geq 0$ ;
Puisque $u$ est croissante sur $[0; +\infty[$ :
Donc : $u(x) \geq u(0) = 0$

| $x$          | 0        | 1        |
|--------------|----------|----------|
| $u(x)$      | $u(0)$   | $0$      |

3) a) Vérifions que : $V(x) = e^xu(x)$ :
Soit $x \in \mathbb{R}$ :
$$ V(x) = e^{2x} - 2xe^x + 2e^x $$
$$ = e^x(e^{-2x} - 2 - 3e^{-x}) $$
$$ = e^xu(x) $$

D'où : $V(x) = e^xu(x)$

b) En déduire le signe de la fonction $V$ sur $\mathbb{R}$ :
Puisque $u \forall x \in \mathbb{R}, e^x > 0$, donc le signe de 
$V(x)$ est le même que celui de $u(x)$.

3) a) Montrons que la fonction $W$ est une primitive de la fonction $V$ sur $\mathbb{R}$ :
$$ W'(x) = \left( \frac{1}{2} e^{2x} + (4 - 2x)e^x + 2e^x - 3x \right)' $$
$$ = \frac{1}{2} \cdot 2e^{2x} + 4e^x(e^{-x}) - 2e^x + 2e^x - 3 $$
$$ = e^{2x} + 2e^x - 2e^x - 3 $$
$$ = W'(x) = e^{2x} - 2e^x - 3 = V(x) $$

D'où : $W(x)$ est une primitive de $V(x)$ sur $\mathbb{R}$

## Correction du Problème : Examen nationale 2020 - Rattrapage

1) Soit $g$ la fonction définie sur l’intervalle $]0; +\infty[$ par : $g(x) = e^{-x} + \frac{1}{x} - 2$
1) Montrer que $g'(x) < 0$ pour tout $x \in ]0; +\infty[$.

Soit $x \in ]0; +\infty[$,
$$ g'(x) = (e^{-x} + \frac{1}{x} - 2)' $$
$$ = -e^{-x} - \frac{1}{x^2} + 1 $$

Et $\forall x \in ]0; +\infty[, x^2e^{-x} + 1 > 0$ et $x^2 > 0$, donc $-e^{-x^2 + 1} < 0$.

Alors : $\forall x \in ]0; +\infty[, g'(x) < 0$

2) Déduisons le tableau de signe de $g(x)$ :
Pour $x \in [0; 1]$ ou : $x \leq 1$ ;
Puisque $g$ est décroissante sur $[0; 1]$ :
Donc : $g(x) > g(1) = 0$
```

<!-- Page 238 -->

```markdown
# Examens nationaux 
## Exponentielle de 2011 à 2025

### 2 Bac sciences PC/SVT/ST
**Page : 16**

Donc : $\forall x \in [0; 1], g(x) \geq 0$  
Pour $x \in [1; +\infty[ \Rightarrow g(x) \leq g(1) = 0$  
Tableau de signe :

| $x$ | $g(x)$ |
|-----|-------|
| $0$ | $+$   |
| $1$ | $0$   |
| $+\infty$ | $-$ |

II) On considère la fonction numérique $f$ définie sur l'intervalle $[0; +\infty[$ par :  
$$ f(x) = (1 - x)e^{1-x} - x^2 + 5x - 3 - 2\ln x $$

1) Montrer que $\lim_{x \to 0^+} f(x) = +\infty$ puis interpréter ce résultat géométriquement.  
$$ \lim_{x \to 0} f(x) = \lim_{x \to 0} (1 - x)e^{1-x} - x^2 + 5x - 3 - 2\ln x = +\infty $$  
Car $\lim_{x \to 0} \ln(x) = -\infty$  
Donc $(C)$ admet une asymptote verticale d'équation $x = 0$ 

2 - a) Montrons que $\lim_{x \to +\infty} f(x) = +\infty$ :  
$$ \lim_{x \to +\infty} f(x) = \lim_{x \to +\infty} (1 - x)e^{1-x} - x^2 + 5x - 3 - 2\ln(x) $$  
On pose $t = 1 - x \Rightarrow x = 1 - t$  
Donc si $x \to +\infty$ alors $t \to -\infty$  
Alors :  
$$ \lim_{t \to -\infty} te^{t} = \lim_{t \to -\infty} (5 - t)(-3 - 2\ln(1 - t)) $$  
$$ = \lim_{t \to -\infty} te^{t} + 5(1 - t) - 3 - 2\ln(1 - t) = -\infty $$  
Car $\lim_{t \to -\infty} te^{t} = 0$  
et $\lim_{t \to -\infty} \frac{5}{1 - t} = 0$

b) Montrons que $\lim_{x \to +\infty} f(x) = -\infty$ :  
$$ \lim_{x \to +\infty} f(x) = \lim_{x \to +\infty} (1 - x)e^{1-x} - x^2 + 5x - 3 - 2\ln x $$  
$$ = \lim_{x \to +\infty} (1 - x)e^{1-x} - x^2 + 5x - 3 - 2\ln x $$  

3 - a) Calcul du dérivée :  
Soit $x \in [0; +\infty[$  
$$ f'(x) = ((1 - x)e^{1-x} - x^2 + 5x - 3 - 2\ln(x))' $$  
$$ = -e^{1-x}(1 - x)e^{-x} - 2x + 5 - \frac{2}{x} $$  
$$ = -2e^{1-x} + xe^{1-x} - 2x + 5 - \frac{2}{x} $$  
$$ = (x - 2)e^{1-x} + x(e^{1-x} - 2) $$

Donc : $\forall x \in [0; +\infty[, f'(x) = (x - 2)g(x)$  
b) Montrer que $f$ est décroissante sur $[0; 1]$ et croissante sur $[1; 2]$  
Puisque le signe de $g$ est déterminé (d'après la question I-2) donc le signe de $f'(x)$ est donnée par le tableau suivant :

| $x$ | $g(x)$ |
|-----|-------|
| $0$ | $-$   |
| $1$ | $0$   |
| $2$ | $+$   |

D'après le tableau précédent sur les intervalles $[0; 1]$ et $[2; +\infty[$, on a $f'(x) < 0$ donc la fonction $f$ est décroissante sur les intervalles $[0; 1]$ et $[2; +\infty[$ et dans l'intervalle $[1; 2]$ la dérivée $f' < 0$, donc $f$ est croissante sur $[1; 2]$.
```

<!-- Page 239 -->

```markdown
# Examens nationaux Exponentielle de 2011 à 2025
## 2 Bac sciences PC/SVT/ST
**Page : 17**

c) Dresser le tableau de variations de la fonction $f$ sur l'intervalle $]0; +\infty[$ (prenez $f(2)=1,25$)

4) Montrer que l'équation $f(x) = 0$ admet une seule solution dans l'intervalle $]3, 4[$ tel que $f(4) \approx -1,9$ et $f(3) \approx 0,5$.

5) Construire $(C)$ dans le repère $(O; \vec{i} \; \vec{j})$

La fonction $f$ est une fonction continue sur $]0; +\infty[$ et en particulier sur $]3; 4[$ et la fonction $f$ est strictement décroissante sur $]3; 4[$ et le $f(3) \times f(4) < 0$  
Donc d'après le théorème des valeurs intermédiaires (TVI) : l'équation $f(x) = 0$ admet une solution unique dans l'intervalle $]3; 4[$.

5) Construire $(C)$ dans le repère $(O; \vec{i} \; \vec{j})$

---

III) On pose $h(x) = f(x) - x$ pour tout $x$ de $[1, 2]$  
1) a) Depuis le tableau de variation ci-dessus, montrer que $f(x) < x$ pour tout $x$ de $[1, 2]$  

\[
\begin{array}{c|c}
x & h(x) \\
\hline
1 & h(1) \\
2 & h(2) \\
\end{array}
\]

dans l'intervalle $[1; 2]$ la fonction admet un maximum pour $x = 0$  
Donc $h(x) \leq 0 \Leftrightarrow f(x) - x \leq 0 \;\forall x \in [1; 2], \; f(x) \leq x$

b) Montrer que 1 est la seule solution de l'équation $f(x) = x$ sur $[1, 2]$.  
On a la fonction $h$ est continue et strictement décroissante sur $[1; 2]$ et comme $0 \in h([1; 2])$; donc l'équation $h(x) = 0$ admet unique solution dans l'intervalle $[1; 2]$  
Or $h(1) = 0$ alors 1 est l'unique solution de l'équation $h(x) = 0$ dans l'intervalle $[1; 2]$  
Donc l'équation $f(x) = x$ admet 1 comme une unique solution dans l'intervalle $[1; 2]$.
```

<!-- Page 240 -->

```markdown
# Examens nationaux Exponentielle de 2011 à 2025

## Correction du Problème : Examen nationale 2019- Rattrapage

Première partie : Soit la fonction numérique définie sur $\mathbb{R}^*$ par :

$$ f(x) = 2 + 8 \left( \frac{x - 2}{x} \right)^2 e^{-4} $$

### 1)a) Vérifier que $\lim_{x \to -\infty} f(x) = 2$ et interpréter le résultat géométriquement

$$ \lim_{x \to -\infty} f(x) = \lim_{x \to -\infty} \left( 2 + 8 \left( \frac{x - 2}{x} \right)^2 e^{-4} \right) $$

$$ = \lim_{x \to -\infty} \left( 2 + 8 \left( \frac{x - 2}{x} \right)^2 e^{-4} \right) = 2 + 8 \cdot 1 \cdot 0 = 2; $$ 

Car $\lim_{x \to -\infty} e^x = 0$

**Interprétation géométrique :**

$$ \lim_{x \to -\infty} f(x) = 2, \text{ donc la droite d'équation } y = 2 \text{ est une asymptote horizontale à la courbe } (C_f) \text{ au voisinage de } -\infty $$

### 2)a) Calculons $\lim_{x \to +\infty} f(x)$

$$ \lim_{x \to +\infty} f(x) = \lim_{x \to +\infty} \left( 2 + 8 \left( \frac{x - 2}{x} \right)^2 e^{-4} \right) $$

$$ = \lim_{x \to +\infty} \left( 2 + 8 \left( 1 - \frac{2}{x} \right)^2 e^{-4} \right) = "2 + 8 \cdot 1 \cdot (+\infty)" = +\infty $$ 

Car $\lim_{x \to +\infty} \left( 1 - \frac{2}{x} \right)^2 = 1$ et $\lim_{x \to +\infty} e^x = +\infty$

**b)** Montrons que la courbe $(C_f)$ admet une branche parabolique de direction l'axe des ordonnées au voisinage de $+\infty$.

On a : 

$$ \lim_{x \to +\infty} \frac{f(x)}{x} = \lim_{x \to +\infty} \frac{2 + 8 \left( \frac{x - 2}{x} \right)^2 e^{-4}}{x} $$

$$ = \lim_{x \to +\infty} \frac{\left( 2 + 8 \left( 1 - \frac{2}{x} \right)^2 e^{-4} \right)}{x} = \frac{"0 + 8 \cdot 1 \cdot (+\infty)e^{-4}"}{+\infty} = +\infty $$

**Car** 

$$ \lim_{x \to +\infty} \left( 1 - \frac{2}{x} \right)^2 = 1 \text{ et } \lim_{x \to +\infty} e^x = +\infty $$ 

$$ \lim_{x \to +\infty} f(x) = +\infty \text{ donc la courbe } (C_f) \text{ admet une branche parabolique de direction l'axe des ordonnées au voisinage de } +\infty. $$
```

<!-- Page 241 -->

```markdown
www.elboutkhili.jimdofree.com  
Prof FAYSAL : 0681399067  
Prof fayssal  

# Examens nationaux  
## Exponentielle de 2011 à 2025  
## 2 Bac sciences PC/SVT/ST  
### Page : 19  

3)a) Montrer que $f'(x) = \frac{8(x-2)(x^2-2x+4)e^x}{x^3}$ pour tout $x \in \mathbb{R}^*$  
Soit $x \in \mathbb{R}^*$,  
$$  
f'(x) = 2+\frac{(x-2)^2}{x^2} e^x + 8\frac{(x-2)}{x^2}(x-2)e^x + 8\frac{(x-2)^2}{x} e^{(x)} + (e^x) e^{-4}  
$$  
$$  
= 16\left(\frac{(x-2)'-x'(x)}{x^2}\right)e^{(x)} + 8\left(\frac{(x-2)'-x^2}{x}\right)e^{x-4}  
$$  
$$  
= 16\left(\frac{(x-2)}{x^2}\right)e^{(x)} + 8\left(\frac{(x-2)}{x}\right)e^{x-4}  
$$  
= 8 $\left(\frac{4(x-2)+x(x-2)}{x^2}\right)e^{x-4}$  
= $$\frac{8}{x^3}[(x-2)(4+x-2)]e^{x-4}$$  

D'où : $\forall x \in [0,2], f'(x)<0$ donc $f$ est strictement décroissante sur $]0,2[$  

$\forall x \in (-\infty, 0[ \cup [2, +\infty[)$, $f'(x) \geq 0$ donc strictement $f$ est croissante sur chacun des intervalles $]-\infty, 0[$ et $[2, +\infty[$  

d) Dressons le tableau de variation de la fonction $f$ sur $\mathbb{R}^*$  

| $x$  | $-\infty$  | 0 | 2 | $+\infty$ |  
|------|------------|---|---|------------|  
| $f'(x)$ | + | - | 0 | + |  
| $f(x)$ | $-\infty$ | 0 | 2 | $+\infty$ |  

6) Construire la courbe $(C)$ dans le repère $(O, \; i \; j)$
```

<!-- Page 242 -->

```markdown
www.elbouthkhili.jimdofree.com  
Prof FAYSAL : 0681399067  

# Examens nationaux Exponentielle de 2011 à 2025  
## 2 Bac sciences PC/SVT/ST  
### Page : 20  

3)a) Vérifions que la fonction $H : x \mapsto e^{x-4} \frac{1}{x}$ est une fonction primitive de la fonction  
$$ h : x \mapsto x^{-1} e^{x-4} $$ sur l’intervalle $[2, 4]$  
Soit $x \in [2, 4]$, on a : $H(x) = e^{x-4} \frac{1}{x}$ dérivable sur $\mathbb{R}^+$ et on a :  
$$ H'(x) = \left( \frac{1}{x^{-1}} \right)' e^{x-4} + \left( \frac{1}{x} \right) e^{x-4} $$  
$$ = \frac{1}{x^2} e^{x-4} - 4 e^{x-4} \frac{1}{x} $$  
$$ = \frac{1}{x^2} e^{x-4} - 4 e^{x-4} \frac{1}{x} $$  
$$ = e^{x-4} \left( \frac{1}{x^2} - \frac{4}{x} \right) $$  
$$ = e^{x-4} \left( \frac{1 - 4x}{x^2} \right) $$  

Donc : $H$ est une primitive de la fonction $h$ sur $[2, 4]$  

Vérifions que $$ f(x) = 2 + 8 e^{x-4} - 32 \frac{(x-1)}{x^2} $$ pour tout $x \in \mathbb{R}^+$  
Soit $x \in \mathbb{R}^+$,  
$$ f(x) = 2 + 8 e^{x-4} - 32 \frac{(x-1)}{x^2} e^{x-4} $$  
$$ f(x) = 2 + 8 e^{x-4} + 32 \frac{(1 - 4x)}{x^2} e^{x-4} $$  

b) Déduisons que pour tout $x$ de l’intervalle $[2, 4]$, $f(x) \leq x$  
On sait que $\forall x \in [2, 4], g(x) < 0$ et $\forall x \in [2, 4], x^{-2} < 0$ d’où :  
$$ \frac{(x - 2)}{x^2} g(x) \leq 0 $$  

3)c) Vérifions que pour tout $x$ de l’intervalle $[2, 4]$, : $e^{x-1} \leq 0 $ puis en déduire que pour tout $x$ de l’intervalle $[2, 4]$, $g(x) < 0$  
On a :  
$$ x \in [2, 4] \Rightarrow 2 \leq 4 \leq 4 - 2 \leq 2 e^{x-4} < 1 = e^{x-1} - 1 $$  

D'où : $g(x) = -(x-4)e^{x-1} \leq 0$  

2)a) Vérifions que pour tout $x$ de l’intervalle $[2, 4]$, $f(x) = \frac{(x - 2)}{x^2} g(x)$  
Soit $x \in [2, 4]$, $f(x) - x = 2 + 8 \frac{(x-2)^2}{x^2} e^{x-4} - (x-2) $  
$$ f(x) - x = (x-2) \left( \frac{(x-2)}{x^2} (8 e^{x-4} - 1) \right) $$  
$$ f(x) - x = \frac{(x - 2)}{x^2} g(x) $$  

b) Déduisons que pour tout $x$ de l’intervalle $[2, 4], f(x) \leq x$  
On sait que $\forall x \in [2, 4], g(x) < 0$ et  
$$ \forall x \in [2, 4], x^{-2} \geq 0 \Rightarrow \left( \frac{x - 2}{x^2} \right) g(x) \leq 0 $$  
par suite : $\forall x \in [2, 4], f(x) - x \leq 0 \Rightarrow f(x) \leq x$
```

<!-- Page 243 -->

```markdown
# Examens nationaux Exponentielle de 2011 à 2025

## Prof FAYSAL : 0681399067

### Correction d’examen 2018 session normale

Soit $ g $ la fonction numérique définie sur $\mathbb{R}$ par : $ g(x) = e^x - x^2 + 3x - 1 $.

Le tableau ci-contre est le tableau de variations de la fonction $ g $.

1) Vérifier que : $ g(0) = 0 $.
$$ 
g(0) = e^0 - 0^2 + 3 \times 0 - 1 = 1 - 1 = 0 
$$

2) Déterminons le signe de $ g(x) $ sur chacun des intervalles $ ] -\infty ; 0] $ et $ [0 ; +\infty[ $ :
D'après le tableau de variation de $ g $, la fonction est strictement croissante sur $\mathbb{R}$ et comme on a $ g(0) = 0 $ :
Soit $ x \in ] -\infty ; 0] $ :

$$
x \leq 0 \Rightarrow g(x) \leq 0 \Rightarrow g(x) \leq 0 
$$
Donc : $( \forall x \in ] -\infty ; 0] ) \, g(x) \leq 0 $

Soit $ x \in [0; +\infty[ $ :

$$
x \geq 0 \Rightarrow g(x) \geq g(0) \Rightarrow g(x) \geq 0 
$$
Donc $( \forall x \in [0; +\infty[ ) \, g(x) \geq 0 $

## Partie II

Soit $ f $ la fonction numérique définie sur $\mathbb{R}$ par : $ f(x) = (x^2 - x)e^{-x} + x $ et $ C $ sa courbe représentative dans un repère orthonormé $(O, x, y)$ (unité : 1 cm)

1 - a) Vérifions que $ f(x) = \frac{x^2 - x}{e^x} + x $, pour tout $ x \in \mathbb{R} $, puis montrons que $\lim_{x \to +\infty} f(x) = +\infty $ :
Soit $ x \in \mathbb{R} $.
Vérifions que $ f(x) = \frac{x^2 - x}{e^x} + x $ :

$$
\frac{x^2 - x}{e^x} + x = \frac{x^2 - x + xe^x}{e^x} = \frac{(x^2 - x)e^x + x}{e^x} = f(x) 
$$

Montrons que $\lim_{x \to +\infty} f(x) = +\infty $ :
$$ 
\lim_{x \to +\infty} f(x) = \lim_{x \to +\infty} \left( \frac{x^2 - x}{e^x} + x \right) = +\infty \quad ( \text{Car : } \lim_{x \to +\infty} xe^x = 0 \, \text{et} \, \lim_{x \to +\infty} \frac{1}{e^x} = 0 ) 
$$

b) Calculons $\lim_{x \to +\infty} (f(x) - x)$, puis en déduisons que la courbe $(D)$ admet une asymptote $(C_f)$ au voisinage de $ +\infty $.

On a :
$$ 
\lim_{x \to +\infty} (f(x) - x) = \lim_{x \to +\infty} \left( \frac{x^2}{e^x} - \frac{x}{e^x} \right) = \lim_{x \to +\infty} \frac{x^2 - x}{e^x} = 0 
$$

On en déduit que $(C_f)$ admet la droite $(D)$ d'équation $ y = x $ comme asymptote oblique au voisinage de $ +\infty $.

c) Vérifions que $ f(x) = \frac{x^2 - x + xe^x}{e^x} $, pour tout $ x $ de $ \mathbb{R} $, puis calculons $\lim_{x \to -\infty} f(x) $ :
Soit $ x \in \mathbb{R} $.
Calculons $\lim_{x \to -\infty} f(x) $ :
$$
\lim_{x \to -\infty} f(x) = \lim_{x \to -\infty} \frac{x^2 - x + xe^x}{e^x} 
$$
$$ 
= +\infty \quad ( \text{Car : } \lim_{x \to -\infty} xe^x = 0 \, \text{et} \, \lim_{x \to -\infty} \frac{1}{e^x} = +\infty )
$$

d) Montrons que $\lim_{x \to -\infty} \frac{f(x)}{x} = -\infty $, puis interprétons géométriquement le résultat.

$$ 
\lim_{x \to -\infty} \frac{f(x)}{x} = \lim_{x \to -\infty} \left( \frac{\frac{x^2 - x}{e^x}}{x} + 1 \right) = \text{(Car : } \lim_{x \to -\infty} \frac{x^2}{e^x} = 0 \text{)} = -\infty 
$$

Interpréter géométriquement : $(C_f)$ admet une branche parabolique au voisinage de $ -\infty $ de direction l'axe des ordonnées.

2-a) Vérifions que $ f(x) = -x^2 + x $ ont le même signe pour tout $ x \in \mathbb{R} $ : 
On a : $( \forall x \in \mathbb{R} \, f(x) - x = (x^2 - x)e^{-x} )$
Comme $ x \in \mathbb{R} \Rightarrow x > 0 $;
Alors $ f(x) - x = (x^2 - x)e^{-x} $.
```

<!-- Page 244 -->

```markdown
# Examen national Exponentielle de 2011 à 2025

## 2 Bac sciences PC/SVT/ST 
Page : 22

**b)** Déduisons que $(C)$ est au-dessus de $(D)$ sur chacun des intervalles $[-\infty; 0]$ et $[1; +\infty[$ et en dessous de $(D)$ sur l'intervalle $[0; 1]$ :
$$ x^2 - x = 0 \Rightarrow (x - 1) = 0 $$
$$ \Rightarrow x = 0 \text{ ou } x = 1 $$

Le tableau de signe de $x^2 - x$ :

| $x$          | $-\infty$ | $0$ | $1$ | $+\infty$ |
|--------------|-----------|-----|-----|-----------|
| $x^2 - x$    | $-$       | $0$ | $+$ | $+$       |

Soit $x \in ] -\infty; 0] \cup [1; +\infty[$ :
$$ : [x^2 - x \ge 0 \Rightarrow f(x) \ge 0 $$
Donc $(C_f)$ est au-dessus de la droite $(D)$ sur $]-\infty; 0] \cup [1; +\infty[$.

$$ (\forall x \in [0; 1]) x^2 - x \le 0 \Rightarrow f(x) \le 0 $$
Donc $(C_f)$ est en dessous de la droite $(D)$ sur $[0; 1]$.

**3)** Montrons que $f'(x) = g(x)e^{-x}$ pour tout $x \in \mathbb{R}$ :
$$ f'(x) = \left((x^2 - x)e^{-x}\right)' $$
$$ = (x^2 - x)' e^{-x} + (x^2 - x)(e^{-x})' $$
$$ = (2x - 1)e^{-x} + (x^2 - x)(-e^{-x}) + 1 $$
$$ = (2x - 1)e^{-x} - (x^2 - x)e^{-x} + 1 $$
$$ = (3x - x^2 - 1)e^{-x} $$
$$ = g(x)e^{-x} $$

Donc $(\forall x \in \mathbb{R}) f'(x) = g(x) \cdot e^{-x}$.

**b)** En déduisons que la fonction $f$ est décroissante sur $[-\infty; 0]$ et croissante sur $[0; +\infty[$.

D'après la question I - 2) :
On a : $(\forall x \in ] -\infty; 0]) g(x) \le 0$ 
et $(\forall x \in [0; +\infty[) g(x) \ge 0$.

On en déduit que la fonction $f$ est décroissante sur l'intervalle $]-\infty; 0]$ et croissante sur l'intervalle $[0; +\infty[$.

**c)** Dressons le tableau de variation de $f$:

| $x$             | $-\infty$ | $0$  | $1$  | $+\infty$ |
|-----------------|-----------|------|------|-----------|
| $f'(x)$         | $-$       | $0$  | $+$  |           |
| $f(x)$          |           |      |      |           |

## 4a)** Vérifions que $f''(x) = (x^2 - 5x + 4)e^{-x}$ pour tout $x$ de $\mathbb{R}$ :
On a pour tout $x$ dans $\mathbb{R}$ :
$$ f''(x) = (g(x)e^{-x})' $$
$$ = g'(x) e^{-x} + g(x)(-e^{-x}) $$
$$ = (e^{x^2 - 3x - 1})(e^{-x}) $$
$$ = (x^2 - 5x + 4)e^{-x} $$

**b)** Déduisons que la courbe $(C)$ admet deux points d'inflexion d'abscisses successives 1 et 4.

On a : $(x^2 - 5x + 4) = (x - 1)(x - 4)$. Donc $f''(x)$ s'annule et change de signe pour $x = 1$ et $x = 4$ alors les points d'abscisse respectifs 1 et 4 sont deux points d'inflexion de la courbe $(C_f)$.

**5)** Construction graphique de $(C_f)$ et $(D)$ dans le même repère $(o, i, j)$.

**6a)** Montrer que $H : x \mapsto (x^2 + 2x + 2)e^{-x}$ est une primitive de la fonction $h : x \mapsto -x^2 e^{-x}$.

La fonction $H$ est dérivable sur $[0; 1]$.
Soit $x \in [0; 1]$ :
$$ H'(x) = \left[(x^2 + 2x + 2)e^{-x}\right]' $$
$$ = (2x + 2)e^{-x} - (x^2 + 2x + 2)e^{-x} $$
$$ = -x^2 e^{-x} $$
$$ = h(x) $$

Donc $H : x \mapsto (x^2 + 2x + 2)e^{-x}$ est une primitive de $h : x \mapsto -x^2 e^{-x}$.
```

<!-- Page 245 -->

```markdown
# Examens nationaux Exponentielle de 2011 à 2025 

## 2 Bac sciences PC/SVT/ST 
### Page : 23

### Correction d’examen 2016 session normale

On considère la fonction numérique $f$ définie sur $\mathbb{R}$ par : $f(x) = 2x - 2 + e^{2x} - 4e^x$.

et soit $(C_f)$ la courbe représentative de la fonction $f$ dans un repère orthonormé $(O;\vec{i};\vec{j})$ (unité : 1 cm).

## Partie I
1a) Montrons que $\lim_{x \to -\infty} f(x) = -\infty$.
On a : 
$$
\lim_{x \to -\infty} f(x) = \lim_{x \to -\infty} (2x - 2 + e^{2x} - 4e^x) = -\infty
$$
Car, 
$$
\lim_{x \to -\infty} 2x = -\infty
$$
$$
\lim_{x \to -\infty} e^{2x} = 0
$$
$$
\lim_{x \to -\infty} -4e^x = 0
$$
Donc, $\lim_{x \to -\infty} f(x) = -\infty$.

b) Montrons que la droite $(D)$ d’équation $y = 2x - 2$ est une asymptote à la courbe $(C_f)$ au voisinage de $-\infty$.
$$
\lim_{x \to -\infty} (f(x) - (2x - 2)) = 
$$
$$
\lim_{x \to -\infty} (2x - 2 + e^{2x} - 4e^x - (2x - 2)) = 
$$
$$
\lim_{x \to -\infty} e^{2x} - 4e^x = 0
$$
Car, 
$$
\lim_{x \to -\infty} e^{2x} = 0
$$
$$
\lim_{x \to -\infty} e^x = 0
$$
Donc, la droite $(D) : y = 2x - 2$ est une asymptote à la courbe $(C_f)$ au voisinage de $-\infty$.

2)a) Montrons que $\lim_{x \to +\infty} f(x) = +\infty$.
$$
\lim_{x \to +\infty} f(x) = \lim_{x \to +\infty} (2x - 2 + e^{2x} - 4e^x) = +\infty
$$
Car, 
$$
\lim_{x \to +\infty} 2x = +\infty
$$
$$
\lim_{x \to +\infty} e^{2x} = +\infty
$$
$$
\lim_{x \to +\infty} -4e^x = +\infty
$$
Donc, $\lim_{x \to +\infty} f(x) = +\infty$.

b) Montrons que $\lim_{x \to +\infty} \frac{f(x)}{x} = +\infty$ puis interprétons géométriquement le résultat.
$$
f(x) = \frac{2x - 2 + e^{2x} - 4e^x}{x}
$$
$$
\lim_{x \to +\infty} f(x) = \lim_{x \to +\infty} 2 - \frac{2}{x} + \frac{e^{2x}}{x} - 4\frac{e^x}{x} =
$$
$$
\lim_{x \to +\infty} \left( \lim_{x \to +\infty} 2 - 4e^x\frac{e^{-x}}{x} \right) = +\infty
$$
Donc, $\lim_{x \to +\infty} f(x) = +\infty$.

3)a) Montrons que $f'(x) = 2(e^x - 1)^2$ pour tout $x \in \mathbb{R}$. 
La fonction $f$ est dérivable sur $\mathbb{R}$.
Soit $x \in \mathbb{R}$,
$$
f'(x) = (2x - 2 + e^{2x} - 4e^x)' 
= (2x - 2)' + (e^{2x})' - (4e^x)' 
$$
$$
= 2 + (2e^{2x}) - 4e^x
$$
$$
= 2 + 2e^{2x} - 4e^x 
= 2e^{2x} - 2
$$
Donc, 
$$
f'(x) = 2(e^{2x} - e^x)
$$
pour tout $x \in \mathbb{R}$.

b) Dressons le tableau de variations de la fonction $f$ sur $\mathbb{R}$.
On a : $f'(x) > 0$ pour tout $x \in \mathbb{R}$.
Et
$$
f'(x) = 0 \iff (e^x - 1)^2 = 0
$$
$$
\iff e^x - 1 = 0 \iff x = 0
$$
Alors, le tableau de variations de la fonction $f$ sur $\mathbb{R}$ est le suivant :
```
> f'(x) 
> |   0
> |___________
>  f(x)  
>  |
>  |
```

c) Montrons qu'il existe un unique réel $\alpha$ de l'intervalle $]1, ln 4[$ tel que : $f(\alpha) = 0$.
On a : $f$ est continue et strictement croissante sur $\mathbb{R}$ en particulier sur l'intervalle $]1; ln 4[$.
$$
f(1) = e^{2} - 4e = e(4) \approx -3.51 < 0
$$
$$
f(ln 4) = 2ln 4 - 2 = (ln 4 - 1) \approx 0.77 > 0
$$
Alors, d'après le théorème des valeurs intermédiaires il existe un unique réel $\alpha$ de l'intervalle $]1, ln 4[$ tel que : $f(\alpha) = 0$.
```

<!-- Page 246 -->

```markdown
# Examens nationaux Exponentielle de 2011 à 2025
## 2 Bac sciences PC/SVT/ST
**Page : 24**

---

### 4)a) Montrons que la courbe $(C_f)$ est au-dessus de la droite $(D)$ sur l'intervalle ]ln 4, +∞[ et qu'elle est en-dessous de la droite $(D)$ sur l'intervalle ]−∞, ln 4[.

Soit $x \in \mathbb{R}$.

$$
f(x) = (2x - 2) = 2x - 2 + e^{2x} - 4e^x - (2x - 2) = e^{x} - 4e^x = e^x(e - 4)
$$

Puisque $e^x > 0$ alors, le signe de $f(x) - (2x - 2)$ est le signe de $e^x - 4$.

On a : $e^x - 4 = 0 \Rightarrow x = \ln 4$ 

Sur l'intervalle ]ln 4, +∞[

$$
x > \ln 4 \Rightarrow e^x > 4 \Rightarrow e^x - 4 > 0 \Rightarrow f(x) - (2x - 2) > 0
$$

Donc, la courbe $(C_f)$ est au-dessus de la droite $(D)$ sur l'intervalle ]ln 4, +∞[.

Sur l'intervalle ]−∞, ln 4[

$$
x < \ln 4 \Rightarrow e^x < 4 \Rightarrow e^x - 4 < 0 \Rightarrow f(x) - (2x - 2) < 0
$$

Donc, la courbe $(C_f)$ est en-dessous de la droite $(D)$ sur l'intervalle ]−∞, ln 4[.

### b) Montrons que la courbe $(C_f)$ admet un seul point d'inflexion de coordonnées $(0,−5)$.

On a : $f''(x) = 4e^{x}(e^{x} - 1)$

$$
e^x - 1 = 0 \Rightarrow e^x = 1 \Rightarrow x = 0
$$

Donc $f''$ s'annule et change de signe en 0 d'où le point de coordonnées $(0; f(0))$ est un point d'inflexion.

$$
f(0) = -5 \text{ alors, le point de coordonnées } (0; -5) \text{ est un point d'inflexion.}
$$

**Remarque :** Puisque la fonction dérivée $f'$ s'annule en 0 ne changent pas de signe, alors le point de coordonnées $(0; f(0))$ est un point d'inflexion. Mais cette propriété ne donne pas l'unicité du point d'inflexion.

---

### Partie II

1)a) Résolvons l'équation différentielle $(E) : y'' - 3y' + 2y = 0.$

On a : l'équation caractéristique de $(E)$ est :

$$
r^2 - 3r + 2 = 0
$$

Puisque $\Delta = (-3)^2 - 4 \cdot 1 \cdot 2 = 1 > 0.$ Alors, l'équation caractéristique admet deux solutions distinctes :

$$
r_1 = \frac{-(-3) - \sqrt{1}}{2 \cdot 1} = \frac{3 - 1}{2} = 1
$$

$$
r_2 = \frac{-(-3) + \sqrt{1}}{2 \cdot 1} = \frac{3 + 1}{2} = 2
$$

Donc, les solutions de l'équation différentielle $(E)$ sont les fonctions $x \mapsto ae^{r_1x} + be^{r_2x}$ avec $(a, b) \in \mathbb{R}^2$.

c'est-à-dire : les fonction $x \mapsto ae^{x} + be^{2x}$ avec $(a, b) \in \mathbb{R}^2$.

b) Déterminons la solution $g$ de l'équation $(E)$ qui vérifie les deux conditions : $g(0) = -3$ et $g'(0) = -2$.

On a : la fonction $g$ solution de l'équation $(E)$, $g(x) = ae^{x} + be^{2x}$ avec $(a, b) \in \mathbb{R}^2$.
```

<!-- Page 247 -->

```markdown
# Examens nationaux Exponentielle de 2011 à 2025

## Prof FAYSAL : 0681399067

Déterminons les valeurs de $\alpha$ et $\beta$.

On a : la fonction $g$ est dérivable sur $\mathbb{R}$ et sa fonction dérivée $g' (x) = \alpha e^x + 2\beta e^2x$.

Alors, 
$$
g(0) = -3 \quad \Rightarrow \quad 
\begin{cases}
\alpha + \beta = -3 \\
\alpha + 2\beta = -2 
\end{cases}
$$

Montrons que la fonction $h$ admet une fonction réciproque $h^{-1}$ et que $h^{-1}$ est définie sur $\mathbb{R}$. 

On a : 
$$
h(x) = \ln(e^{2x} - 4e^x - 2).
$$

On a : la fonction $g$ est continue et strictement positive sur l'intervalle ]ln 4, +\infty[. 

Car, la fonction $g$ est une solution de l'équation $(E)$, alors il est deux fois dérivable sur $\mathbb{R}$ et se trouve au-dessus de la droite $(D)$ sur l'intervalle ]ln 4, +\infty[ et la fonction $h$ est continue sur l'intervalle ] 0, +\infty[ (en particulier continue sur l'intervalle ] ln 4, +\infty[$.

On a : la fonction $h$ est dérivable sur ]ln 4, +\infty[$ et sa fonction dérivée :
$$
h'(x) = \left( \ln(e^{2x} - 4e^x) \right)' = \frac{(e^{2x} - 4e^x)'}{(e^{2x} - 4e^x)} = \frac{2e^{2x} - 4e^x}{e^{2x} - 4e^x}.
$$

Sur l'intervalle ]ln 4, +\infty[ on a : $e^x - 2 > 0$ et $e^x - 4 > 0$ alors, $h'(x) > 0$ pour tout $x \in ]ln 4, +\infty[$.

Donc la fonction $h$ est strictement croissante sur l'intervalle ]ln 4, +\infty[$.

Puisque la fonction $h$ est continue et strictement croissante sur l'intervalle ]ln 4, +\infty[$, alors la fonction $h^{-1}$ admet une fonction réciproque notée $J$ :

$$
J = h(h(\ln 4, +\infty)) = \lim_{x \to -\infty} h(x) = \lim_{x \to +\infty} h(x) = \mathbb{R}.
$$

Déterminons que $h(\ln 5) = \ln 5$ puis déterminons $(h^{-1})'(ln 5)$.

On a : la fonction $h$ est dérivable en $\ln 5$ et $h'(\ln 5) = 6 \neq 0$.

Alors, la fonction $h^{-1}$ est dérivable en $\ln 5 et on a :
$$ 
(h^{-1})'(\ln 5) = \frac{1}{h'(\ln 5)} = \frac{1}{6}.
$$

Donc, $h(\ln 5) = \ln 5$ et $(h^{-1})'(\ln 5) = \frac{1}{6}$.
```

<!-- Page 248 -->

```markdown
# Examens nationaux Exponentielle de 2011 à 2025

## 2 Bac sciences PC/SVT/ST

### Page : 26

### Examen nationale 2015-session Normale

I) soit $g$ la fonction numérique définie sur $\mathbb{R}$ par : $g(x) = e^x - 2x$.

1. Calculer $g'(x)$ pour tout $x \in \mathbb{R}$ puis en déduire que $g$ est décroissante sur l'intervalle $]ln(2); +\infty[$ et croissante sur l'intervalle $]-\infty; ln(2)[$.

Soit $x \in \mathbb{R}$ ; on a :
$$
g'(x) = (e^x - 2x)' = e^x - 2
$$
et $x = ln(2)$.

Pour $x = ln(2)$ on a : $g'(ln(2)) = 0$

Si $x < ln(2)$ alors $e^x < e^{ln(2)} = 2$ donc $g'(x) \geq 0$.

Donc $g$ est croissante sur $]ln(2); +\infty[$.

Six $x \in ln(2)$ alors $2 \Longleftrightarrow g'(x) \leq 0$

Alors $(\forall x \in ]-\infty; ln(2)[$) $g'(x) < 0$. 

2. Vérifier que $g(ln(2)) = 2(1 - ln(2))$ puis déterminer le signe de $g(ln(2))$.

$$
g(ln(2)) = e^{ln(2)} - 2 ln(2) = 2 - 2 ln(2) = 2(1 - ln(2))
$$

$2 - 2ln(2) = 2(1 - ln(2))$ et puisque $ln(2) \simeq 0.69$ alors $g(ln(2)) > 0$.

3. En déduire que $g(x) > 0$ pour tout $x \in \mathbb{R}$.

On a : $g(ln(2))$ est la valeur minimale de $g$, et puisque $g(ln(2)) > 0$.

Alors $(\forall x \in \mathbb{R}) : g(x) > 0$.

II) On considère la fonction numérique f définie sur $\mathbb{R}$ par : $f(x) = \frac{-x}{e^x - 2x}$.

1) a) Montrer que $\lim_{x \to +\infty} f(x) = 0$ et $\lim_{x \to -\infty} f(x) = -\frac{1}{2}$.
   
(Remarquer que $e^x - 2x = x \left( \frac{e^x}{x} - 2 \right)$)

$$
\lim_{x \to +\infty} f(x) = \lim_{x \to +\infty} \frac{-x}{e^x - 2x} = \lim_{x \to +\infty} \frac{-x}{e^x} = 0
$$

$$
\lim_{x \to -\infty} f(x) = \lim_{x \to -\infty} \frac{-x}{e^x - 2x} = \lim_{x \to -\infty} \frac{1}{-2} = -\frac{1}{2}
$$

**Car:** $\lim_{x \to +\infty} e^x = +\infty$

$\lim_{x \to -\infty} f(x) = \lim_{x \to -\infty} f(x)$.

Car: $\lim_{x \to -\infty} e^x = 0$.

b) Interpréter géométriquement chacun des deux derniers résultats.

On a : $\lim_{x \to +\infty} f(x) = 0$.

Alors $y = 0$ est une asymptote horizontale à $(C_f)$ au voisinage de $+\infty$.

On a : $\lim_{x \to -\infty} f(x) = -\frac{1}{2}$.

Alors $y = -\frac{1}{2}$ est une asymptote horizontale à $(C_f)$ au voisinage de $-\infty$.

2) a) Montrer que $f'(x) = \frac{(1-x)e^x}{(e^x - 2x)^2}$ pour tout $x \in \mathbb{R}$.

Soit $x \in \mathbb{R}$ :
$$
f'(x) = \frac{(-1)(e^x - 2x)' - (-x)(e^x - 2x)'}{(e^x - 2x)^2}
$$
$$(e^x - 2x)^2 = e^x - 2x$$

$= e^x - 2x - x(e^x - 2)$$
$$= e^x - 2 - e^x + 2x$$

$$= e^x(1 - x)$$.

Alors $(\forall x \in \mathbb{R}) : f'(x) = \frac{e^{x(1-x)}}{(e^x - 2x)^2} > 0$.

b) Étudier le signe de $f'(x)$ sur $\mathbb{R}$ puis dresser le tableau de variations de la fonction $f$ sur $\mathbb{R}$.

On a : $(\forall x \in \mathbb{R}) : e^x > 0 et (e^x - 2x)^2 > 0$.

Alors le signe de $f'(x)$ dépend au signe de $(1 - x)$.

Pour $x = 1$ on a : $f'(1) = 0$.

* si $x < 1$ alors $1 - x > 0$.

Alors $(\forall x \in [1; +\infty[) : f'(x) < 0$.

Si $x \leq 1$ alors $1 - x > 0 \Rightarrow f'(x) > 0$ donc $f$ est strictement croissante sur $]-\infty; 1]$.
```

<!-- Page 249 -->

```markdown
# Examens nationaux

## Exponentielle de 2011 à 2025

### 2 Bac sciences PC/SVT/ST

#### Page : 27

D’où tableau de variations de la fonction $ f $ :

| $x$        | $0$   | $+\infty$  |
|------------|-------|------------|
| $f'(x)$    | $-$   | $+$        |
| $f(x)$     | $1.39$| $+\infty$  |

c) Montrer que $ y = x $ est une équation de la droite $(T)$ tangente à la courbe $(C)$ au point $ O $ origine du repère.

la droite $(T)$ est tangente à la courbe $(C f)$ au point $O(0;0)$.

Alors : $ T : y = f'(0)(x - 0) + f(0) $

et on a : $ f'(0) = \frac{(1-0)e^0}{(e^0-0)} = 1 $

et : $ f(0) = 0  $

Donc : $ y = x $ est l'équation de la tangente $(T)$.

3) Tracer dans le même repère $(O; \hat{i}; \hat{j})$, la droite $(T)$ et la courbe $(C)$.

(on prendra $ \frac{1}{e-2} < 1,4 $ et on admettra que la courbe $(C)$ a deux points d’inflexion l’abscisse de l’un appartient à l’intervalle $[0; 1[$ et l’abscisse de l’autre est supérieur à $\frac{3}{2}$.)

4.a) Montrer que $ xe^{-x} - \frac{x}{e-2} \leq \frac{1}{e-2} $ pour tout $ x $ de l'intervalle $[0; +\infty[$

Pour tout $ x $ de $ [0; +\infty[ $ on a : $ e^{-2x} \leq e^x $ et puisque $(\forall x \in \mathbb{R}): g(x) = e^x - 2x > 0 $ d'après la question $(P_1 - 3)$, c-à-d :

$$ e^x - 2x \neq 0 $$

Alors : $ \frac{1}{e^x} < \frac{e^{-2x}}{1} $ c-à-d : $ e^{-x} < \frac{1}{e-2} $ d'où : $ e^{-x} < \frac{x}{e-2} $ pour tout $ x$ de $ [0 ; +\infty[$.

Alors : $(\forall x \in \mathbb{R}): f(x) \leq f(1) $

d'où :

$ \frac{x}{e^{-2x}} \leq \frac{1}{e-2} $

pour tout $ x$ de $ [0; +\infty[$.

III) Soit $ h $ la fonction numérique définie sur l’intervalle $ [-\infty; 0] $ par $ h(x) = f(x) $.

1) Montrer que la fonction $ h $ admet une fonction réciproque $ h^{-1} $ définie sur un intervalle $ ] que l'on précisera $.

On a pour tout $ x \in ]-\infty; 0]$: $ h(x) = f(x) $.

Alors d'après le tableau de variation de la fonction $ f $ on a $ h $ est continue et strictement croissante sur $ ]-\infty; 0] $.

D'où la fonction $ h $ admet une fonction réciproque $ h^{-1} $ définie sur :

$$ J = h([- \infty; 0]) = \lim_{x \to -\infty} h(x); h(0) = \left| \frac{-1}{2}; 0 \right| $$

2) Tracer, dans le même repère $(O; \hat{i}; \hat{j})$, la courbe $(C_{h^{-1}})$ représentative de la fonction $ h^{-1} $ (Voir la figure).
```

<!-- Page 250 -->

```markdown
# Examens nationaux Exponentielle de 2011 à 2025

## Correction du problème d’examen 2011 session normale

I. On considère la fonction $g$ définie sur $\mathbb{R}$ par :
$$ g(x) = (1 - x)e^x - 1 $$

### 1. a) Montrer que : $g'(x) = -xe^x$ pour tout $x \in \mathbb{R}$

**Rappels :**
- Pour tout $x \in \mathbb{R}$ : $e^x > 0$ et $e^0 = 1$
- $$ (e^x)' = e^x \quad \text{et} \quad (e^{u(x)})' = U'(x)e^{u(x)} $$
- $u'v' = u'v + u v'$

Pour tout $x \in \mathbb{R}$, on a : $g(x)=(1-x)e^x-1$
$$ g'(x) = \left( ((1 - x)e^x - 1) \right)' $$
$$ = (1 - x)e^x + (1 - x)(e^x)' $$
$$ = -e^x + (1 - x)e^x $$
$$ = -e^x + (1-x)e^x $$
$$ = -e^x + e^x xe^x = -xe^x $$
$$ \forall x \in \mathbb{R}, \quad g'(x) = -xe^x $$

### b) Montrer que la fonction $g$ est décroissante sur $[0,+\infty[$ et croissante sur l’intervalle $]-\infty, 0]$ et vérifier que $g(0) = 0$

Pour tout $x \in [0,+\infty[$, on a : $-xe^x \leq 0$ donc :
$$ \forall x \in [0,+\infty[, \quad g'(x) \leq 0 \quad \text{par suite } g \text{ décroissante sur } [0,+\infty[ $$

Pour tout $x \in ]-\infty, 0]$, on a : $-xe^x \geq 0$ donc :
$$ \forall x \in ]-\infty, 0], \quad g'(x) \geq 0 \quad \text{par suite } g \text{ croissante sur } [0,+\infty[ $$

Et on a : $g(0) = (1-0)e^0 - 1 = 1 - 1 = 0$

### 2. En déduire que : $g(x) \leq 0$ pour tout $x \in \mathbb{R}$

1ère méthode :
Le nombre $g(0)=0$ est une valeur maximale de la fonction $g$ sur $\mathbb{R}$
$$ \Rightarrow \forall x \in \mathbb{R}, \quad g(x) \leq 0 $$

2ème méthode :
Soit $x \in \mathbb{R}$, on a deux cas à distinguer :
- Si $x \geq 0$, alors $g(x) \leq g(0) = 0$ car $g$ décroissante sur $[0,+\infty[$ donc :
$$ \forall x \geq 0, \quad g(x) \leq 0 $$

- Si $x \leq 0$ alors $g(x) \geq g(0) = 0$ car $g$ croissante sur $[0,+\infty[$ donc :
$$ \forall x \leq 0, \quad g(x) \leq 0 $$

Dans les deux cas on a : $g(x) \leq 0$ par suite :
$$ \forall x \in \mathbb{R}, \quad g(x) \leq 0 $$
```

<!-- Page 251 -->

```markdown
# Examens nationaux Exponentielle de 2011 à 2025

## 2 Bac sciences PC/SVT/ST 

### Page : 29

## Deuxième partie :
II. Soit $f$ la fonction numérique définie sur $\mathbb{R}$ par :
$$
f(x) = (2 - x)e^x - x et \ (C) \text{ la courbe représentative de la fonction } f \text{ dans un repère orthonormé } (O; \vec{i}; \vec{j}) ; \text{ (unité : 1 cm)}
$$

### Rappels : Limites de la fonction exp
- Formes indéterminées :
  - $0 \cdot \infty$
  - $0 \infty$
  - $+\infty - (+\infty)$
  - $\lim e^x = 0$ ; $\lim e^x = +\infty$
  - $\lim x e^x = 0$ ; $\lim \frac{e^x}{x} = +\infty$

1. a) Montrer que : 
$$
\lim_{x \to +\infty} f(x) = -\infty.
$$

$$
\lim_{x \to +\infty} f(x) = \lim_{x \to +\infty} (2 - x)e^x - x = -\infty.
$$

Car $\lim_{x \to +\infty} (2 - x) = -\infty$ et $\lim_{x \to +\infty} e^x = +\infty$ alors $\lim_{x \to +\infty} -x = -\infty$.

b) Montrer que :
$$
\lim_{x \to +\infty} f(x) = -\infty \text{ puis en déduire que la courbe } (C) \text{ admet au voisinage de } +\infty, \text{ une branche parabolique}
$$

$$
\lim_{x \to +\infty} \frac{f(x)}{x} = \lim_{x \to +\infty} \frac{(2 - x)e^x - x}{x} = \lim_{x \to +\infty} \left( \frac{(2 - 1)e^x - 1}{1} \right)
$$

$$
= '' (0 - 1) \times (+\infty - 1)'' = '' -'' \infty = -\infty
$$

Car $\lim_{x \to +\infty} \frac{2}{x} = -1$ et $\lim_{x \to +\infty} e^x = +\infty$

D'où $\lim_{x \to +\infty} f(x) = -\infty$ et on a $\lim_{x \to +\infty} f(x) = -\infty$

Donc : $(C_f)$ admet une branche parabolique de direction l’axe des ordonnées au voisinage de $+\infty$.

2) a) Montrer que : 
$$
\lim_{x \to -\infty} f(x) = +\infty.
$$
Puis calculer $$ \lim_{x \to -\infty} [f(x) + x]. $$ (On rappelle que : $\lim_{x \to -\infty} x e^x = 0$).
$$
\lim_{x \to -\infty} (f(x) + x) = \lim_{x \to -\infty} (2 - x)e^x = \lim_{x \to -\infty} (2e^x - xe^x) = 0 - 0 = 0
$$

### Carré : 
$$
\lim_{x \to -\infty} (2e^x) = 0 et \lim_{x \to -\infty} (xe^x) = 0
$$
Donc $(C_f)$ admet un asymptote oblique d’équation $y = -x$ au voisinage de $-\infty$.

### 2. a) Montrer que : $f'(x) = g(x)$
La fonction $f$ est dérivable sur $\mathbb{R}$ car c’est un produit et somme des fonctions dérivables sur $\mathbb{R}$.

Soit $x \in \mathbb{R}$
$$
f'(x) = \left[(2 - x)e^x - x\right]'
$$
$$
= \left[(2 - x)e^x\right]' - 1
$$
$$
= -e^x + (2 - x)e^x - 1
$$
$$
= (2 - x)e^x - 1 = g(x).
$$ 
b) Vérifier que $f'(0) = 0$ et interpréter géométriquement le résultat :

On a $f'(0) = g(0) = 0$

Donc $(C_f)$ admet une tangente horizontale au point $A(0 ; 2)$.

On peut dire aussi que la courbe $(C_f)$ représentative admet une tangente d’équation 
$$
y = f'(0)(x - 0) + f(0) \quad c - t - dire d'équation \ y = 2
$$
c) Montrer que la fonction $f$ est strictement décroissante sur $\mathbb{R}$, puis dresser le tableau de variations de la fonction $f$.

On a : $\forall x \in \mathbb{R}, f'(x) = g(x)$ donc le signe de $f'(x)$ est celui de $g(x)$

Ou : $\forall x \in \mathbb{R}, g(x) \geq 0$ donc : $f' \text{ est décroissante sur } \mathbb{R}$.

D’où le tableau de variation suivant :

| $x$  | $-\infty$ | $+\infty$ |
|------|-----------|-----------|
| $f'$ |     0     |    -      |
| $f(x)$ |     -∞  |   +∞     |
```

<!-- Page 252 -->

```markdown
# www.elboutkhili.jimdofree.com
## Prof FAYSAL : 0681399067
### Prof fayssal

# Examens nationaux Exponentielle de 2011 à 2025
## 2 Bac sciences PC/SVT/ST
### Page : 20

3. Montrer que l'équation $f(x) = 0$ admet une solution unique $\alpha$ dans $\mathbb{R}$ et que $\frac{3}{2} < \alpha < 2$ (On admettra que $e^2 > 3$)

Rappel : Corollaires du théorème des valeurs intermédiaires
- 1) Si la fonction $f$ est continue et strictement monotone sur l'intervalle $I$ et $0 \in f(I)$
Alors l’équation $f(x) = 0$ admet une unique solution $\alpha$ dans $I$.
- 2) Si $f$ est une fonction continue sur $[a; b]$ et $f(a) < f(b) < 0$ ; alors l’équation $f(x) = 0$ admet au moins une solution $\alpha$ dans $[a; b]$.

On a $f$ est continue strictement décroissante sur $IR = f(IR) = IR$

D'après le théorème des valeurs intermédiaires l’équation $f(x) = 0$ admet une unique solution $\alpha$ dans $IR$.

On a : $f(2) = -2$ et $f(\frac{3}{2}) = \frac{1}{2}(e^2 - 3) > 0$ (on admettra que : $e^2 > 3$)

Donc : $f(2) \cdot f(\frac{3}{2}) < 0 \Rightarrow \frac{3}{2} < \alpha < 2$

4. a) Résoudre dans $\mathbb{R}$ l'équation :
$$ f(x) + x = 0 $$ 
et en déduire que $(D)$ et $(C)$ se coupent au point $A(2, -2)$
$$ f(x) + x \iff (2 - x)e^x - x + x = 0 $$
$$ \iff (2 - x)e^x = 0 $$
$$(2 - x) \iff x = 2 (e^x \neq 0)$$

Et on a $f(2) = -2$ Par conséquent $(C_f)$ et $(D)$ se coupent au point $A(2, -2)$.

b) Etudier le signe de $f(x) + x$ sur $\mathbb{R}$

On a : $f(x) + x = (2 - x)e^x$ donc le signe de $f(x) + x$ est celui de $(2 - x)$.

| $x$ | $-\infty$ | $0$ | $+\infty$ |
|-----|-----------|-----|-----------|
| $2 - x$ | + | 0 | - |

5. a) Montrer que la courbe $(C)$ possède un point d'inflexion unique de coordonnées $(0, 2)$

On a de ce qui précède : $\forall x \in \mathbb{R}$, $g'(x) = -e^{-x}$ et $\forall x \in \mathbb{R}, f'(x) = g(x)$

Donc : $\forall x \in \mathbb{R}, f''(x) = g'(x) = -e^{-x}$

| $x$ | $-\infty$ | $0$ | $+\infty$ |
|-----|-----------|-----|-----------|
| $f''(x)$ | - | 0 | + |

Donc $f''$ s'annule en changeant de signe au point d'abscisse $0$ par suite : $(C_f)$ possède un point d'inflexion unique de coordonnées $(0, 2)$ puisque : $f(0) = 2$.
```

<!-- Page 253 -->

```markdown
# Examens nationaux
## Exponentielle de 2011 à 2025

### 2 Bac sciences
#### PC/SVT/ST
**Page : 31**

b) Construire la droite $(D)$ et la courbe $(C)$ dans le même repère $(O; \vec{i} ; \vec{j})$

$$ y = -x $$
```

<!-- Page 254 -->

```
Offre préparation concours 2026 - Prof Fayssal
- Plus 20 séances en vidéos de préparation Médecine
- Plus 20 séances en vidéos pour ENSA-ENSAM-UM6P
- Nouvelle offre à partir de mois 6 avec des séances en directes et interactives
- Deux livres de préparation Médecine-ENSA-ENSAM contiennent des astuces, plus de 20 concours blancs corrigés et la correction des anciens concours

Pour participer : 0681399067

---

خصائص تمديد كافة الطب (20 حصة) على فسيو وسيلة للرجوع إليها
- 20 حصة عبر ZOOM ومباشرة
- كتب شاملة في الرياضيات مع تصحيحاته وممارسات نوعية
- العرض السابقة.
- عرض وخصص مباشرة يوميًا بدءًا من شهر 6 لــ 60 دقيقة

0681399067 للتواصل:

---

نتيجة الانتقاء
حمد لله، اختيارك قد قُبل. 
نشكر لك إجابتك على جميع أسئلتك.
حسب ما تم إرساله في الجواب:  
ترشحك يتماشى مع القاعدة والواحد لله الحمد
```
