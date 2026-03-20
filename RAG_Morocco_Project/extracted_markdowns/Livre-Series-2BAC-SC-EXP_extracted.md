

<!-- Page 1 -->

```markdown
# Livre des séries Corrigées

## Sommaire de livre des séries corrigées

### Séries du semestre 1
- Série corrigée 0 : Mise à niveau
- Série corrigée 1 : Continuité d’une fonction
- Série corrigée 2 : Dérivabilité d’une fonction
- Série corrigée 3 : Etude des fonctions
- Série corrigée 4 : Limite d’une suite
- Série corrigée 5 : Primitve d’une fonction
- Série corrigée 6 : Fonction logarithme népérienne
- Série corrigée 7 : Nombres complexes

### Séries du semestre 2
- Série corrigée 8 : Fonction exponentielle
- Série corrigée 9 : Equations différentielles
- Série corrigée 10 : Calcul d'intégrales
- Série corrigée 11 : Produits scalaires dans l’espace
- Série corrigée 12 : Produit vectoriel
- Série corrigée 13 : Calcul de probabilités
```

<!-- Page 2 -->

```
# Niveau : Deuxième bac sciences PC/SVT/STE

## Rappels de cours sur les limites et dérivation
```

<!-- Page 3 -->

```markdown
# Lycée ibno el haytam oujda  
## Rappel 1 : Signe +Limite d’une fonction  
**Prof : Fayssal**  
**2bac SC**  

## I) Signe de $f(x) = ax + b ; a \neq 0$  
$$ f(x) = 0 \iff ax + b = 0 \Rightarrow x = -\frac{b}{a} $$  
- $a > 0 \Rightarrow$  
  - $-\infty \quad -\frac{b}{a} \quad +0$  
- $a < 0 \Rightarrow$  
  - $+\infty \quad -\frac{b}{a} \quad -0$  

### II) Signe de $f(x) = ax^2 + bx + c ; a \neq 0 ; \Delta = b^2 - 4ac$  
**Première cas $\Delta > 0$ :** On pose $x_1 = -\frac{b - \sqrt{\Delta}}{2a}$ et $x_2 = -\frac{b + \sqrt{\Delta}}{2a}$  
Le tableau de signe de $f$ sur $\mathbb{R}$ est :  
$$ 
\begin{array}{|c|c|c|c|} 
\hline 
x & -\infty & x_1 & x_2 & +\infty \\ 
\hline 
\text{Signe de } f(x) & \uparrow & 0 & \downarrow & 0 \\ 
\hline 
\end{array} 
$$  

**Deuxième cas $\Delta = 0$ :** On pose $x_0 = -\frac{b}{2a}$  
Le tableau de signe de $f$ sur $\mathbb{R}$ est :  
$$ 
\begin{array}{|c|c|c|c|} 
\hline 
x & -\infty & x_0 & +\infty \\ 
\hline 
\text{Signe de } f(x) & \uparrow & 0 & \downarrow \\ 
\hline 
\end{array} 
$$  

**Troisième cas $\Delta < 0$ :**  
$$ 
\begin{array}{|c|c|c|} 
\hline 
x & -\infty & +\infty \\ 
\hline 
\text{Signe de } f(x) & \text{Signe de } a \\ 
\hline 
\end{array} 
$$  

## III) Limites d’une fonction  
**Propriétés : Soit $n \in \mathbb{N}^*$**  
- $$ \lim_{x \to +\infty} x^n = +\infty $$  
- $$ \lim_{x \to +\infty} \sqrt{x} = +\infty $$  
- $$ \lim_{x \to +\infty} x^2 = +\infty $$  
- $$ \lim_{x \to +\infty} 1 = 0 $$  

**Remarque :**  
- $$ \lim_{x \to -\infty} x^n = -\infty; \quad \lim_{x \to -\infty} 1 = 0 $$  

### Propriétés à retenir :  
- $$ \lim_{x \to +\infty} P(x) = \lim_{x \to -\infty} P(x) = \lim_{x \to +\infty} \left( \text{terme de plus haut degré de } P \right) $$  
- Si $$ \lim_{x \to -\infty} f(x) = l $$ et $$ l \to \sqrt{f(x)} = \sqrt{l} $$ alors  
- $$ \lim_{x \to 0} \sin x = 1; \quad \lim_{x \to 0} \tan x = 1 $$  

- Si $$ g(x) \leq f(x) $$ et $$ \lim_{x \to -\infty} g(x) = -\infty $$ alors  
- $$ \lim_{x \to -\infty} f(x) = +\infty $$  
- Si $$ g \leq f $$ alors $$ \lim_{x \to -\infty} g(x) = l $$ alors $$ \lim_{x \to -\infty} f(x) = l $$  
```

<!-- Page 4 -->

```markdown
# Prof : Fayssal
## Rappel 2 : Dérivabilité d'une fonction

### A) Dérivabilité d'une fonction en un point
1) Si $ \lim_{x \to a} \frac{f(x) - f(a)}{x - a} = l $ ou $ \lim_{h \to 0} \frac{f(h + a) - f(a)}{h} = l ; (l \in \mathbb{R}) $
Alors la fonction $ f $ est dérivable en $ a $ et on a : $ f'(a) = l $

**Interprétation géométrique :**
Si la fonction $ f $ est dérivable en $ a $, alors la courbe $(Cf)$ admet une droite tangente $(T)$ au point $ A(a ; f(a)) $ d'équation :
$ (T): y = f'(a)(x - a) + f(a) $

2) Dérivabilité à gauche et à droite de $ a $ et Interprétation géométrique :
Si $ \lim_{x \to a^-} \frac{f(x) - f(a)}{x - a} = l $, alors $ f $ est dérivable à droite de $ a $ et $ l = f'_d(a) $
Inter géo : $(Cf)$ admet une demi-tangente au point $ A(a ; f(a)) $ d'équation : $ y = f'(a)(x - a) + f(a) \ \text{tel que} \ x > a $

Si $ \lim_{x \to a^+} \frac{f(x) - f(a)}{x - a} = l $ alors $ f $ est dérivable à gauche de $ a $ et $ l = f'_g(a) $
Inter géo : $(Cf)$ admet une demi-tangente au point $ A(a ; f(a)) $ d'équation : $ y = f'_g(a)(x - a) + f(a) \ \text{tel que} \ x < a $

**Propriété :** Si $ f'_d(a) = f'_g(a) $ alors la fonction $ f $ est dérivable en $ a $

3) Tangente parallèle à l'axe des ordonnées (verticale)
Si $ \lim_{x \to a} \frac{f(x) - f(a)}{x - a} = + \infty $ alors la courbe $(Cf)$ admet au point $ A(a ; f(a)) $ une demi-tangente verticale dirigée vers le haut

Si $ \lim_{x \to a} \frac{f(x) - f(a)}{x - a} = - \infty $ alors la courbe $(Cf)$ admet au point $ A(a ; f(a)) $ une demi-tangente verticale dirigée vers le bas

---

## B) $ u $ et $ v $ des fonctions dérivables sur l'intervalle $ I $ et $ k $ un cst ; n entier

| la fonction $ f $ | $ D_f ; Condition $ | $ D'f $ |
|-------------------|--------------------|--------|
| 1) $ f(x) = k $ | $ D_f = \mathbb{R} $ | $ f'(x) = 0 $ |
| 2) $ f(x) = kx $ | $ D_f = \mathbb{R} $ | $ f'(x) = k $ |
| 3) $ f(x) = x^n $ | $ D_f = \mathbb{R} $ | $ f'(x) = nx^{n-1} $ |
| 4) $ f(x) = \frac{1}{x} $ | $ D_f = \mathbb{R}^* \ \backslash \ [0 ; +\infty[$ | $ f'(x) = -\frac{1}{x^2} $ |
| 5) $ f(x) = \sqrt{x} ; D_f = \mathbb{R}^+ $ | $ D_f = [0 ; +\infty[$ | $ f'(x) = \frac{1}{2\sqrt{x}} $ |
| 6) $ f = u + v $ | $ D_f = I $ | $ f' = u' + v' $ |
| 7) $ f = ku $ | $ D_f = I $ | $ f' = ku' $ |
| 8) $ f = uv $ | $ D_f = I $ | $ f' = u'v + uv' $ |
| 9) $ f(x) = \frac{u}{v} ; v \neq 0 $ |  | $ f'(x) = \frac{u'v - uv'}{v^2} $ |
| 10) $ f(x) = \frac{1}{v} ; v \neq 0 $ |  | $ f'(x) = -\frac{v'}{v^2} $ |
| 11) $ f(x) = \sqrt{u} ; u > 0 $ |  | $ f'(x) = \frac{u'}{2\sqrt{u}} $ |
| 12) $ f(x) = u^n $ |  | $ D_f' = I $ |
| 13) $ f(x) = \sin x $ | $ D_f = \mathbb{R} $ | $ f'(x) = \cos x $ |
| 14) $ f(x) = \cos x $ | $ D_f = \mathbb{R} $ | $ f'(x) = -\sin x $ |
| 15) $ f(x) = \tan x ; x \neq \frac{\pi}{2} + k\pi $ |  | $ f'(x) = 1 + \tan^2 x $ |
| 16) $ f(x) = \sin(ax + b) $ | $ D_f' = I $ | $ f'(x) = a \cos(ax + b) $ |
| 17) $ f(x) = \cos(ax + b) $ | $ D_f' = I $ | $ f'(x) = -a \sin(ax + b) $ |

**Propriété :** $ f $ une fonction dérivable sur un intervalle $ I \iff \forall x \in I; f'(x) \geq 0 \Rightarrow $ la fonction $ f $ est croissante sur $ I \\
\forall x \in I; f'(x) \leq 0 \Rightarrow $ la fonction $ f $ est décroissante sur $ I $
```

<!-- Page 5 -->

```markdown
> Si  $\lim_{x \to a} \frac{f(x) - f(a)}{x - a} = -\infty$ alors la courbe $(Cf)$ de $f$ admet au point $A(a, f(a))$ une demi-tangente verticale dirigée vers le haut 

> $(\forall x \in I); \; f'(x) = 0 \Leftrightarrow$ la fonction $f$ est constante sur $I$
```

<!-- Page 6 -->

```markdown
# Deuxième bac sciences
## PC/SVT/STE

---

## Série corrigée 1
### Révision : Notions de base

---

admin  
Prof fayssal  
06813999067  
www.elbouthkili.jimdofree.com
```

<!-- Page 7 -->

```markdown
# Révision pour deuxième Bac sc exp
## Série 01
### 2 Bac sc PC/SVT/STE
#### Page 01

### Exercic 01 : Calculer les limites suivantes :
1) $\lim_{x \to 1} \frac{2x^3 + x^2 - 3}{x + 1}$  
2) $\lim_{x \to 1} \frac{2x + 3}{x - 1}$  
3) $\lim_{x \to 1} \frac{x^2 - x - 3}{x^2 - 3x + 2}$  
4) $\lim_{x \to 1} \frac{1}{\sqrt{1 - x}}$  
5) $\lim_{x \to 3} \left( \frac{x - 1}{\sqrt{x - 1}} \right)$  
6) $\lim_{x \to +\infty} \sqrt{x}$  

### Exercic 02 : Calculer les limites suivantes :
1) $\lim_{x \to +\infty} \frac{3x^2 + 2x - 6}{x^3 + 7}$  
2) $\lim_{x \to +\infty} \frac{2x^2 - 3}{x^2 + 5}$  
3) $\lim_{x \to +\infty} \frac{2x^2 + 3x - 6}{3x^3 - 6x^5}$  
4) $\lim_{x \to +\infty} \frac{x^2 - 3x - 6}{x - 2}$  
5) $\lim_{x \to -3} \frac{x^2 - 9}{x^2 - 4}$  
6) $\lim_{x \to -3} \frac{2x^2 + 3}{x - 9}$  
7) $\lim_{x \to 0} \frac{1}{x^2 - 9}$  
8) $\lim_{x \to +\infty} 2x^3 - 2x^5$  

### Exercic 03 : Calculer les limites suivantes :
1) $\lim_{x \to 5} \sqrt{x - 1} - 2$  
2) $\lim_{x \to 0} \frac{x}{\sqrt{1 + x}}$  
3) $\lim_{x \to +\infty} \sqrt{x^2 - 3x + 1}$  
4) $\lim_{x \to +\infty} \sqrt{2x - 3} + 1 + 2x$  

### Exercic 04
Soit $f$ une fonction définie sur $\mathbb{R}$ par son graphe :  
1) Déterminer  
$$ \lim_{x \to +\infty} f(x) ; \lim_{x \to -\infty} f(x) $$  
$$ \lim_{f(x) \to f(x)} $$  

2) Dresser le tableau des variations de la fonction de $f$

### Exercic 05
Soit $f$ la fonction définie par  
$$ f(x) = x^2 - 4x ; \, x \in [-\infty, 1] $$  
$$ f(x) = x - 3 ; \, x \in ]1, 3[ \cup ]3, +\infty[ $$  
Calculer $f(x)$ et $\lim_{x \to +\infty} f(x)$ ; $\lim_{x \to -\infty} f(x)$ ; $\lim_{x \to 3} f(x)$ et $\lim_{x \to 1} f(x)$

### Exercic 06
Soit $f$ la fonction numérique définie par :   
$$ f(x) = \frac{x^2 - 6x + 5}{x - 5} ; \, x \neq 5 $$  
1) Vérifier que $\lim_{x \to 5} f(x) = f(5)$  
2) Montrer que $f$ est dérivable en $5$  
3) Déterminer l’équation de (T) la tangente à (C$f$) en $5$  

### Exercic 07
Calculer $f'(x)$ :  
1) $f(x) = 3x^3 - 2x^2 + 3x + 2\sqrt{x - 1}$  
2) $f(x) = (2x^2 - 5x)(3 - 2)$  
3) $f(x) = \frac{6x - 5}{x^2 + 1}$  
4) $f(x) = \frac{2}{\sqrt{-1}}$  
5) $f(x) = \sqrt{3x^2 + 2x + 1}$  
6) $f(x) = (2x^2 + 3x - 3)^4$  

### Exercic 08
Soit $f$ une fonction définie sur $\mathbb{R}$ par :  
$$ f(x) = x^3 + x + 1 $$  
1) Calculer $\lim_{x \to +\infty} f(x)$ et $\lim_{x \to -\infty} f(x)$  
2) Calculer $f'(x)$ sur $\mathbb{R}$ puis étudier les variations de $f$

### Exercic 09
Soit $f$ une fonction définie sur $\mathbb{R}$ par :  
$$ f(x) = 2x^3 - 3x^2 + 2 $$  
Calculer $f'(x)$ puis étudier les variations de $f$

### Exercic 10
Soit $f$ une fonction tel que $f(x) = x - 2\sqrt{x}$  
1) Déterminer $D_f$ puis calculer $\lim_{x \to +\infty} f(x)$  
2) Étudier la dérivabilité de $f$ à droite de $0$  
3) Donner une interprétation géométrique du résultat  
4) Montrer que $f' (x) = \frac{1}{\sqrt{x}(1 + f(x))}$ pour tout $x \in [0 ; +\infty[$  
5) Étudier les variations de $f$ sur $D_f$  
6) Dresser le tableau des variations de $f$
```

<!-- Page 8 -->

```markdown
# Révision pour deuxième Bac sc exp
## Série 02
### 2 Bac sc PC/SVT/STE
#### Page 01

## Exercice 11
Soit $f$ une fonction défini par son graphe :

![Graph of function](link-to-graph)

Déterminer graphiquement :
1) L’ensemble de définition de la fonction $f$  
2) L’image de -5 ; -4 ; -3 ; 3 ; 4 et 7 par $f$  
3) Les antécédents de 2 par la fonction $f$.  
4) Donner les variations de la fonction.  
5) Donner les extrêmes de $f$ en précisant où ils sont atteints.  
6) Résumer les résultats précédents dans un tableau de variations  
7) Déterminer le nombre des solutions de l’équation $f(x) = 0$

## Exercice 12
Soit $f$ une fonction dont le tableau de variation suivant :

| $x$ | $-\infty$ | $-3$ | $0$ | $3$ | $+\infty$ |
|-----|-----------|------|-----|-----|-----------|
| $f(x)$ | $+\infty$ |   2  |  1  | -1  | $-\infty$ |

Déterminer $D_f$ l’ensemble de définition de $f$ ; $f(-3)$ ; $f(0)$ ; 

$$
\lim_{x \to +\infty} f(x) ; \quad \lim_{x \to -\infty} f(x) ; \quad \lim_{x \to -3} f(x) \quad et \quad \lim_{x \to 3} f(x)
$$

## Exercice 13
$f$ et $g$ deux fonctions défini sur $]0 ; -\infty[$ par leurs graphe ci-contre

1) Dresser la table de variations de $f$ et $g$  
2) Résoudre les équations $f(x) = 0$ ; $f(x) = 3$  
Et $g(x) = f(x)$  
3) Résoudre les inéquations : $f(x) < 3$ ; $f(x) < g(x)$ et $f(x) \geq g(x)$

## Exercice 14
Soit $f$ une fonction défini par la courbe suivante :

![Graph of function](link-to-graph)

1) Déterminer graphiquement 

$$
\lim_{x \to -3} f(x) ; \quad \lim_{x \to +\infty} f(x) ; \quad \lim_{x \to -1} \frac{1}{f(x)} \quad et \quad \lim_{x \to 0} 2f(x)+5
$$

2) Déterminer $f' \left(\frac{1}{2}\right) ; \quad f' \left(-\frac{1}{2}\right) ; \quad f''(2) \quad et \quad f g'(2)$
```

<!-- Page 9 -->

```markdown
# Prof : Fayssal | Site web : www.elbouthkili.jimdo.free
## Corrigée de Série 01 : Révision 2 BAC SCIENCE | Page : 01

### Exercice 01 : Calculer les limites suivantes :
1) $$ \lim_{x \to 1} 2x^3 + x^2 - 3 = 0 $$ ; 
2) $$ \lim_{x \to 1} 2x + 3 = 5 $$ et $$ \lim_{x \to 1} x - 1 = 0 $$ ;
3) $$ \lim_{x \to 1} x^2 - x - 3 $$ ; 
4) $$ \lim_{x \to 1} \frac{x^2 - 3}{-x^2 + 3x - 2} $$ ; 
5) $$ \lim_{x \to 1} \left( \frac{x - 1}{\sqrt{x} - 1} \right) $$ ; 
6) $$ \lim_{x \to +\infty} x + \sqrt{x} $$

### Solution de l’exercice 01
1) On a : $$ \lim_{x \to 1} 2x^3 + x^2 - 3 = 0 $$ et $$ \lim_{x \to 1} x + 1 = 2 $$
Donc : $$ \lim_{x \to 1} \frac{2x^3 + x^2 - 3}{2x + 3} = \frac{0}{2} = 0 $$

2) $$ \lim_{x \to 1} x - 1 = 0 $$
On a : $$ \lim_{x \to 1} 2x + 3 = 5 $$
Donc il faut savoir le signe de $$ x - 1 $$ à gauche de 1.
Résolvons l’équation : $$ x - 1 = 0 $$ donc $$ x = 1 $$

Le tableau de signe de $$ x - 1 $$
```
|   x   | -∞ |  1  | +∞ |
|-------|-----|-----|-----|
|  x-1  |  -  |  0  |  +  |
```
Donc $$ \lim_{x \to 1} = 0 $$ et on a : $$ \lim_{x \to 1} 2x + 3 = 5 $$

3) On a : $$ \lim_{x \to 1} x^2 - 3 = -3 $$ et $$ \lim_{x \to 1} x^2 - 3x + 2 = 0 $$
Donc il faut savoir le signe de $$ x^2 - 3x + 2 $$ à gauche de 1.
Résolvons l’équation : $$ x^2 - 3x + 2 = 0 $$
$$ \Delta = (-3)^2 - 4 \cdot 1 \cdot 2 = 4 $$

Donc les solutions sont : 
$$ x = \frac{3 + \sqrt{1}}{2 \cdot 1} = 2 $$ ou $$ x = \frac{3 - \sqrt{1}}{2 \cdot 1} = 1 $$

### Exercice 02
Calculer les limites suivantes :
1) $$ \lim_{x \to +\infty} -3x^3 + 2x^2 - 6x + 1 = -\infty $$
2) $$ \lim_{x \to +\infty} -3x^3 + 2x^7 - 6x + 1 $$
3) $$ \lim_{x \to 0} 2x^3 + x^2 - 3 = 0 $$ ;
4) $$ \lim_{x \to +\infty} 2x^5 - 2 $$
5) $$ \lim_{x \to 0} 2x^2 - 3 $$
6) $$ \lim_{x \to 0} 2x^3 + x^2 - 3 $$
7) $$ \lim_{x \to +\infty} x^4 - 6x + 5 $$
8) $$ \lim_{x \to 0} x - 1 $$
Il s’agit d’une forme indéterminée du type "∞".
```

<!-- Page 10 -->

```markdown
# Prof : Fayssal  | Site web : www.elboutkhili.jimdo free
## Corrigée de Série 01 : Révision | 2 BAC SCIENCE | Page : 02

1ère méthode : La fonction est une fonction rationnelle dont on peut utiliser un théorème de cours comme suit :
$$
\lim_{x \to +\infty} \frac{2x^3 - x^2 - 3}{-6x + 5} = \lim_{x \to +\infty} \frac{2x^3}{x^4} = \lim_{x \to +\infty} \frac{x^3}{x^4} = 0
$$

2ème méthode : Par factorisation par le plus haut degré
$$
\lim_{x \to +\infty} \frac{2x^3 - x^2 - 3}{-6x + 5} = \lim_{x \to +\infty} \frac{3(x^{2} + \frac{1}{3} - \frac{3}{x^3})}{x^4(1 - \frac{6}{x^4})} = 0
$$

4) 
$$
\lim_{x \to +\infty} \frac{2x^5 + x^2 - 3}{-6x + 5} = \lim_{x \to +\infty} \frac{2x^5}{x^4} = 2
$$

5)
$$
\lim_{x \to +\infty} \frac{x^3 - 6x + 5}{2x^3 + x^2 - 3} = 2
$$

6)
On a :
$$
\lim_{x \to -2} x^2 - 4 = 0 \quad \text{et} \quad \lim_{x \to -2} x - 2 = 0
$$
Donc il s'agit d'une forme indéterminée du type $\frac{0}{0}$.
 
• Levons l'indétermination à l'aide d’une factorisation par $x - 2$ :
$$
\lim_{x \to -2} \frac{x^2 - 4}{x - 2} = \lim_{x \to -2} (x + 2) = -2 + 2 = 0
$$

7)
$$
\lim_{x \to -3} \frac{x^2 - 9}{x^3 - 27} = \lim_{x \to -3} \frac{(x - 3)(x + 3)}{(x - 3)(x^2 + 3x + 9)} = \lim_{x \to -3} \frac{x + 3}{x^2 + 3x + 9} = \frac{6}{27} = \frac{2}{9}
$$

8) On a :
$$
\lim_{x \to -1} (2x^3 + x^2 - 3) \quad \text{et} \quad \lim_{x \to -1} x - 1 = 0
$$
Donc il s'agit d'une forme indéterminée du type $\frac{0}{0}$. 
• Levons l'indétermination à l'aide d’une factorisation par $x - 1$ :
1ère méthode : Factorisation par a division euclidienne
$$
\begin{array}{r|rr}
x - 1 & 2x^3 + x^2 - 3 \\
      & 2x^3 + 2x^2 \\
\hline
      & 0 + 3x - 3 \\
      & -3x + 3 \\
\hline
      & 0 + 0
\end{array}
$$

On obtient : 
$$
2x^3 + x^2 - 3 = (x - 1)(2x^2 + 3x + 3)
$$

2ème méthode : Factorisation par algorithme de HORNER :
$$
\begin{array}{r|rrr}
x - 1 & 2  & 1 & 0 & -3 \\
       & 2  & 1 & 0 & 1 \\
\hline
       & 2  & 3 & 3 & 0 \\
\end{array}
$$
On obtient : 
$$
2x^3 + x^2 - 3 = (x - 1)(2x^2 + 3x + 3)
$$

Donc : 
$$
\lim_{x \to -1} \frac{2x^3 + x^2 - 3}{x - 1} = \lim_{x \to -1} \frac{(x - 1)(2x^2 + 3x + 3)}{x - 1} = \lim_{x \to -1} 2x^2 + 3x + 3 = 8
$$
```

<!-- Page 11 -->

```markdown
# Prof : Fayssal   Site web : www.elboutkhili.jimdo.com

## Exercic 03 : Calculer les limites suivantes

1) $$ \lim_{x \to 5} \frac{\sqrt{x - 1} - 2}{x - 5} $$ ; 
2) $$ \lim_{x \to 0} \frac{x}{\sqrt{1 + x} - 1} $$ ;
3) $$ \lim_{x \to +\infty} \left( x^2 - 3x + 1 \right) $$
4) $$ \lim_{x \to +\infty} \left( x - 2\sqrt{x} \right) $$
5) $$ \lim_{x \to +\infty} \left( \sqrt{x^2 - 3x + 1} + 2x \right) $$

## Solution de l'exercice 03

1) 
$$ 
\lim_{x \to 5} \frac{\sqrt{x - 1} - 2}{x - 5} = \frac{\sqrt{5 - 1} - 2}{5 - 5} = 0 
$$
On a : 
$$ 
\lim_{x \to 5} \sqrt{x - 1} - 2 = 0 \text{ et } \lim_{x \to 5} x - 5 = 0 
$$
Donc il s'agit d'une forme indéterminée du type "$\frac{0}{0}$". 

Ainsi : 
$$ 
\lim_{x \to 5} \frac{\sqrt{x - 1} - 2}{x - 5} = \lim_{x \to 5} \frac{(\sqrt{x - 1} - 2)(\sqrt{x - 1} + 2)}{(x - 5)(\sqrt{x - 1} + 2)} = \lim_{x \to 5} \frac{x - 5}{(x - 5)(\sqrt{x - 1} + 2)} 
$$
On obtient :

$$ 
= \lim_{x \to 5} \frac{1}{\sqrt{x - 1} + 2} = \frac{1}{\sqrt{4} + 2} = \frac{1}{4}
$$ 

2) 
$$ 
\lim_{x \to 0} \frac{x}{1 + x - 1} = \lim_{x \to 0} \frac{x}{(1 + x - 1)(1 + x + 1)} = \lim_{x \to 0} \frac{x(1 + x + 1)}{x}
$$ 
$$ 
= \lim_{x \to 0} (1 + x + 1) = 2 
$$ 

3) 
$$ 
\lim_{x \to +\infty} \left( x^2 - 3x + 1 \right) = \lim_{x \to +\infty} x^2 \left( 1 - \frac{3}{x} + \frac{1}{x^2} \right) = +\infty 
$$

4) 
$$ 
\lim_{x \to +\infty} x - 2\sqrt{x} = \lim_{x \to +\infty} x(1 - \frac{2\sqrt{x}}{x}) = \lim_{x \to +\infty} x(1 - \frac{2}{\sqrt{x}}) = +\infty 
$$ 

5) 
$$ 
\lim_{x \to +\infty} \left( \sqrt{x^2 - 3x + 1} + 2x \right) 
$$
$$ 
= \lim_{x \to +\infty} \left( \sqrt{x^2(1 - \frac{3}{x} + \frac{1}{x^2})} + 2x \right) 
$$ 
$$ 
= \lim_{x \to +\infty} \left( x\sqrt{1 - \frac{3}{x} + \frac{1}{x^2}} + 2x \right) = +\infty 
$$ 
```

<!-- Page 12 -->

```markdown
5)  \[
\lim_{x\to-\infty} \sqrt{x^2 - 3x + 1 - 2x} = \lim_{x\to-\infty} \sqrt{x^2(1 - \frac{3}{x} + \frac{1}{x^2}) + 2x}
\]
\[
= \lim_{x\to-\infty} \sqrt{x^2} \times \lim_{x\to-\infty} \left(1 - \frac{3}{x} + \frac{1}{x^2}\right)^{1/2} + 2x
\]
\[
= \lim_{x\to-\infty} -x \sqrt{1 - \frac{3}{x} + 2} = \lim_{x\to-\infty} -x\left(1 - \frac{3}{x^2} - 2\right)
\]
\[
= -\infty
\]

Car \(\lim_{x\to -\infty} -x = +\infty\) et \(\lim_{x\to -\infty} \frac{3}{x} = 0\) et \(\lim_{x\to -\infty} \frac{1}{x^2} = 0\)

---

**Exercice 04**  
Soit une fonction définie sur $\mathbb{R}$ par son graphe :  
1) Déterminer  
\[
\lim_{x\to+\infty} f(x); \lim_{x\to-\infty} f(x); \lim_{x\to 0^+} f(x) \text{ et } \lim_{x\to 0^-} f(x)
\]

2) Dresser le tableau des variations de la fonction $f$  

**Solution de l’exercice 04**  
\[
\lim_{x\to+\infty} f(x) = 0; \quad f(x) = 0; \quad \lim_{x\to 0^-} f(x) = +\infty; \quad \lim_{x\to 0^+} f(x) = -\infty
\]

Le tableau des variations de la fonction $f$ sur $\mathbb{R}$ :

\[
\begin{array}{c|c|c|c}
x & -\infty & 0 & +\infty \\
\hline
f(x) & 0 & -\infty & +\infty \\
\end{array}
\]

---

**Exercice 05**  
Soit \(f\) la fonction définie par  
\[
f(x) = x^2 - 4x; \, x \in ]-\infty, 1]
\]  
\[
f(x) = x - 3 + \frac{2}{x - 3}; \, x \in ]1, 3[ \cup ]3, +\infty[
\]

Calculer \(\lim_{x\to-\infty} f(x)\) et \(\lim_{x\to+\infty} f(x)\):  
\[
\lim_{x\to-\infty} f(x) = \lim_{x\to-\infty} x^2 - 4x = -\infty
\]
\[
\lim_{x\to+\infty} f(x) = \lim_{x\to+\infty}  x - 3 + \frac{2}{x - 3} = +\infty
\]

**Donc il faut savoir le signe de \(x - 3\)**  
Résolvons l’équation : \(x - 3 = 0 \text{ donc } x = 3\)

Le tableau de signe de \(x - 3\) :

\[
\begin{array}{c|c|c}
x & -\infty & 3 & +\infty \\
\hline
x - 3 & - & 0 & + \\
\end{array}
\]

Donc \(\lim_{x\to 3} x - 3 = 0^+\)  
\[
\lim_{x\to 3^-} f(x) = \lim_{x\to 3^-} x - 3 + \frac{2}{x - 3} = \frac{2}{0^+} = +\infty
\]
\[
\lim_{x\to 3^+} f(x) = \lim_{x\to 3^+} x - 3 + \frac{2}{x - 3} = -\frac{2}{0^+} = -\infty
\]

\(f(x)???\)  
\[
\lim_{x\to 1} f(x) = \lim_{x\to 1} \frac{x^2 - 4x}{x - 1} = -3
\]

Ainsi,  
\[
\lim_{x\to 1} f(x) = -3
\]
```

<!-- Page 13 -->

```markdown
# Exercic 06
Soit $f$ la fonction numérique définie par : 
$$ f(x) = \frac{x^2 - 6x + 5}{x - 5}; \quad f(5) = 4 $$

1) Vérifier que $\lim_{x \to 5} f(x) = f(5)$  
2) Montrer que $f$ est dérivable en 5  
3) Déterminer l’équation de $(T)$ la tangente à $(Cf)$ en 5  

## Solution :
1) Vérifier que $\lim_{x \to 5} f(x) = f(5)$  
$$ \lim_{x \to 5} f(x) = \lim_{x \to 5}\frac{x^2 - 6x + 5}{x - 5} = \lim_{x \to 5} \frac{(x - 5)(x - 1)}{x - 5} = \lim_{x \to 5} (x - 1) = 4 $$  
Donc $\lim_{x \to 5} f(x) = f(5)$  

On dit que la fonction $f$ est continue en 5  

2) Montrer que $f$ est dérivable en $x_0 = 5$  
$$ \lim_{x \to 5} \frac{f(x) - f(5)}{x - 5} $$  
$$ \lim_{x \to 5} \frac{\frac{x^2 - 6x + 5}{x - 5} - 4}{x - 5} = \lim_{x \to 5} \frac{x^2 - 6x + 5 - 4(x - 5)}{(x - 5)(x - 5)} = \lim_{x \to 5} \frac{x - 1 - 4}{x - 5} = \lim_{x \to 5} \frac{(x - 1) - 4}{x - 5} = 1 \in \mathbb{R} $$  
Donc la fonction $f$ est dérivable en 5 et $f'(5) = 1$  

3) Déterminer l’équation de $(T)$ la tangente à $(Cf)$ en 5  
La droite d’équation $y = f'(5)(x - 5) + f(5)$  
Donc : $(T): y = x - 1$  

# Exercic 07
Calculer $f'(x)$: 
1) $f(x) = 3x^3 - 2x^2 + 3x + 2\sqrt{x - 3} + 1$  
2) $f(x) = (2x^2 - 5x)(3x - 2)$  
3) $f(x) = \frac{6x - 5}{x^2 + 1}$  
4) $f(x) = \frac{2}{\sqrt{x - 1}}$  
5) $f(x) = \sqrt{x^2 + 2x + 1}$  
6) $f(x) = (2x^2 + 3x - 3)^4$  

## Solution de l'exercice 07
```

<!-- Page 14 -->

```markdown
# Prof : Fayssal | Site web : www.elboutkhili.jimdofree.com
## Corrigée de Série 01 : Révision | 2 BAC SCIENCE | Page : 06

### Exercic 09
Soit une fonction défini sur $\mathbb{R}$ : $f(x) = 2x^3 - 3x^2 + 2$

1) Calculer $f'(x)$ sur $\mathbb{R}$  
2) Etudier les variations de $f$ puis dresser le tableau de variations

#### Solution

1) Calculer $f'$ sur $\mathbb{R}$  
La fonction $f$ est dérivable sur $\mathbb{R}$ et on a pour tout $x$ dans IR  
$$ f'(x) = 6x^2 - 6x = 6x(x - 1) $$

2) Etudier les variations de $f$ puis dresser le tableau de variations  
$$ f'(x) = 0 \iff 6x(x - 1) = 0 \iff x = 0 \text{ ou } x = 1 $$

| $x$    | $-\infty$ | 0 | 1  | $+\infty$ |
|--------|-----------|---|----|-----------|
| $f'(x)$| +         | 0 | -  | +         |

Donc la fonction $f$ est croissante sur les intervalles $]-\infty; 0]$ et $[1; +\infty[$ et décroissante sur l'intervalle $[0; 1]$.  
On dresse le tableau de variations de $f$.

### Exercic 08
Soit $f$ une fonction définit sur $\mathbb{R}$ : $f(x) = x^3 + x + 1$

1) Calculer $\lim_{x \to +\infty} f(x)$ et $\lim_{x \to -\infty} f(x)$  
2) Calculer $f'(x)$ sur $\mathbb{R}$ puis étudier les variations de $f$  
3) Déterminer l’équation de $(T)$ la tangente à $(Cf)$ en 0

#### Solution
1) 
$$ \lim_{x \to +\infty} f(x) = \lim_{x \to +\infty} (x^3 + x + 1) = +\infty $$  
* $\lim_{f(x)} = \lim_{x \to -\infty} (x^3) = -\infty$  

2) Calculer $f'(x)$ sur $\mathbb{R}$ puis étudier les variations de $f$  
La fonction $f$ est dérivable sur $\mathbb{R}$ et on a pour tout $x$ dans $\mathbb{R}$  
$$ f'(x) = 3x^2 + 1 > 0 $$  
Donc la fonction $f$ est strictement croissante sur $\mathbb{R}$.

3) Déterminer l’équation de $(T)$ la tangente à $(Cf)$ en 0  
La droite (T) d'équation $y = f'(0)(x - 0) + f(0)$  
On a $f'(0) = 3 \cdot 0^2 + 1 = 1$ et $f(0) = 1$  
Donc $(T): y = x + 1$
```

<!-- Page 15 -->

```markdown
# Prof : Fayssal  
Site web : www.elboutkhili.jimdo.com  

## Exercice 10

Soit $f$ une fonction telle que : $f(x) = x - 2\sqrt{x}$  
1) Déterminer $D_f$ et Calculer $\lim_{x \to +\infty} f(x)$  
2) a) Etudier la dérivabilité de $f$ à droite de 0  
b) Donner une interprétation géométrique  
3) a) Déterminer $f'$ puis étudier les variations de $f$ sur $D_f$  
a) Dresser le tableau de variations de $f$  
b) Déterminer les extrêmes de $f$

## Solution

1) $x \in D_f \iff x \ge 0 \quad \text{. Donc : } D_f = [0; +\infty[$  
$$ \lim_{x \to +\infty} f(x) = \lim_{x \to +\infty} \left( x - 2\sqrt{x} \right) $$  
$$ = \lim_{x \to +\infty} x \left( 1 - \frac{2\sqrt{x}}{x} \right) $$  
$$ = \lim_{x \to +\infty} x \left( 1 - \frac{2}{\sqrt{x}} \right) = +\infty $$  

Car $\lim_{x \to +\infty} x = + \infty$ et $\lim_{x \to +\infty} \frac{1}{\sqrt{x}} = 0$

2) a)  
$$ \lim_{x \to 0^+} f(x) - f(0) = \lim_{x \to 0^+} \frac{x - 2\sqrt{x}}{x - 0} $$  
$$ = \lim_{x \to 0^+} \frac{x}{\sqrt{x}} - 2 = -\infty $$  
Donc la fonction $f$ n’est pas dérivable à droite de 0  
b) Interprétation géométrique  
Donc la courbe $(C_f)$ admet une demi-tangente verticale en 0 dirigée vers le bas  

3) a) Soit $x \in ]0; +\infty[$,  
On a $f'(x) = \frac{x - 1}{\sqrt{x}(1+\sqrt{x})}$  

Donc $\sqrt{x} (1 + \sqrt{x}) > 0$ donc le signe de $f'$ sur $]0; +\infty[$ est le signe de $x - 1$ qui s’annule en 1  

| $x$ | 0 | 1 | +$\infty$ |
|------|---|---|----------|
| $f'(x)$ | - | 0 | + |
  
Donc la fonction $f$ est croissante sur $]1; +\infty[$ et décroissante sur $]0; 1[$  
b) On dresse le tableau de variations de $f$  

| $x$ | 0 | 1 | +$\infty$ |
|------|---|---|----------|
| $f'(x)$ | - | 0 | + |
| $f(x)$ | $f(0) = 0$ | $-\infty$ | +$\infty$ |

## Remarque

On a $f$ s’annule et change le signe en 1 donc $f$ admet une valeur minimale -1 qui est atteint en 1
```

<!-- Page 16 -->

```markdown
# Exercices de Mathématiques et Physique

## Exercice 11
Soit $f$ une fonction définie par son graphe :

![Graphe de la fonction f](image_placeholder)

Déterminer graphiquement :
1) L’ensemble de définition de la fonction $f$  
2) L’image de -5 ; -4 ; -3 ; 3 ; 4 et 7 par $f$.  
3) Les antécédents de 2 par la fonction $f$.  
4) Donner les variations de la fonction.  
5) Donner les extrêmes de $f$ en précisant où ils sont atteints.  
6) Résumer les résultats précédents dans un tableau de variations.  
7) Déterminer le nombre des solutions de l’équation $f(x) = 0$.

### Solution
1) L’ensemble de définition de la fonction $f$ est l’intervalle $[-5; 7]$  
2) L’image de -5 ; -4 ; -3 ; 3 et 4 par la fonction $f$.  
   $$ f(-5) = 2 ; f(-4) = -4 \text{ et } f(-3) = 0 ; f(4) = -2 $$  
3) Les antécédents de 2 par la fonction $f$ sont -2 ; 2 ;  
4) La fonction $f$ est croissante sur les intervalles $[-4; 0] et [5 ; 7]$. Elle est décroissante sur les intervalles $[-5; -4] et [0 ; 5]$.

5) Le maximum de $f$ est 3,5.  
   Il est atteint en $x = 0$.  
   Le minimum de $f$ est -4.  
   Il est atteint en $x = -4$.  
6) Résumer les résultats précédents dans un tableau de variations :

| $x$     | $-5$ | $-4$ | $-3$ | $0$ | $3$ | $5$ | $7$   |
|---------|------|------|------|-----|-----|-----|-------|
| $f(x)$  | $2$  | $-4$ | $0$  | $3.5$  | $-1$ | $-2.5$ |  |

7) Déterminer le nombre des solutions de l’équation $f(x) = 0$  
   La courbe $(Cf)$ de $f$ coupe l’axe des abscisses en trois points donc le nombre des solutions de l’équation $f(x) = 0$ est trois solutions.

---

## Exercice 12
Soit $f$ une fonction dont le tableau de variation suivant :

| $x$          | $-\infty$ | $-3$ | $0$ | $3$ | $+\infty$ |
|--------------|-----------|------|-----|-----|------------|
| $f(x)$      | $+\infty$ | $-2$ | $1$ | $-\infty$  |

Déterminer $D_f$ l’ensemble de définition de $f$ ; $f(-3) ; f(0)$ ;  
$$ \lim_{x \to +\infty} f(x); \lim_{x \to -\infty} f(x) ; \lim_{x \to -3^+} f(x) ; \lim_{x \to -3^-} f(x) $$

### Solution
$$ D_f = ]-\infty ; 3] \cup ]3 ; +\infty[ $$  
$$ f(-3) = -2 ; f(0) = 1; $$  
$$ \lim_{x \to +\infty} f(x) = -1 ; \lim_{x \to -\infty} f(x) = +\infty $$  
$$ \lim_{x \to -3^+} f(x) = -2 ; \lim_{x \to -3^-} f(x) = -\infty $$  
```

<!-- Page 17 -->

```markdown
# Prof: fayssal
Site web www.elboutkhili.jimdo.com

## Exercise 13

### Solution

1) **Dresser la table de variations de $f$**  
On voit que la fonction $f$ est croissante sur l’intervalle $[2; +\infty[$ et décroissante sur $|0; 2]$  
D’où le tableau de variation de $f$ sur $|0; +\infty[$

| $x$ | $0$ | $2$ | $+\infty$ |
|-----|-----|-----|----------|
| $f(x)$ | $0$ | $3$ |          |

**Dresser la table de variations de $g$**  
On voit que la fonction $g$ est décroissante sur l’intervalle $|0; +\infty[$  
Car si $x < y$ alors $g(x) > g(y)$

| $x$ | $0$ | $+\infty$ |
|-----|-----|-----------|
| $g(x)$ |   |           |

3) **Résoudre graphiquement l’équation**  
$$ f(x) = 0; \quad f(x) = 3; \quad \text{et} \quad g(x) = f(x) $$

### Rappel 4:
- Graphiquement les solutions de l’équation $f(x) = k$ sont les abscisses des points d’intersections de $(C_f)$ avec la droite d’équation $y = k$
- Les solutions de l’équation $f(x) = g(x)$ sont les abscisses des points d’intersections des courbes $(C_f)$ et $(C_g)$

**Résolution d’équation $f(x) = 0$ ;**  
On a la courbe $(C_f)$ coupe la droite d’équations $y = 0$ en un point unique d’abscisse $2$ donc $S = \{2\}$

**Résolution d’équation $f(x) = 3$ ;**  
On a la courbe $(C_f)$ coupe la droite d’équations $y = 3$ en deux points d’abscisses $1$ et $4$ donc $S = \{1,4\}$

**Résolution d’équation $g(x) = f(x)$ ;**  
On a les courbes $(C_f)$ et $(C_g)$ sont sécante en un point unique d’abscisse $3$ donc $S = \{3\}$

4) **Résoudre graphiquement les inéquations**  
$$ f(x) < 3; \quad f(x) < g(x) \quad \text{et} \quad f(x) > g(x) $$

### Rappel 05 : Positions relatives de deux courbes,
- Si $f(x) \geq g(x)$ sur un intervalle $I$ alors la courbe $(C_f)$ est située en dessus de $(C_g)$
- Si $f(x) < g(x)$ sur un intervalle $I$ alors $(C_f)$ est située en dessous de $(C_g)$ sur $I$

**Résolution d’inéquation $f(x) < 3$ ;**  
On a la courbe $(C_f)$ est située en dessous de la droite d’équation $y = 3$ sur l’intervalle $|1; 4|$ donc $S = ]1; 4[$

**Résolution d’inéquation $f(x) < g(x)$ ;**  
On a la courbe $(C_f)$ est située en dessous de la courbe $(C_g)$ sur l’intervalle $|0; 3|$ donc $S = |0; 3|$

**Résolution d’inéquation $f(x) \geq g(x)$ ;**  
On a la courbe $(C_f)$ est située en dessus de la courbe $(C_g)$ sur l’intervalle $|3; +\infty[$ donc $S = [3; +\infty[$
```

<!-- Page 18 -->

```markdown
# Prof: fayssal
## Site web www.elboutkhili.jimdofree.com
### Exercice 14 : Soit $f$ une fonction définie par la courbe suivante

#### Solution
1) 
$$ \lim_{x \to +\infty} f(x) = +\infty; \quad \lim_{x \to -\infty} f(x) = -2.5; $$
$$ \lim_{x \to 3^-} f(x) = -\infty; \quad \lim_{x \to 3^+} f(x) = +\infty. $$

On a 
$$ \lim_{x \to +\infty} f(x) = +\infty \quad \text{donc} \quad \lim_{x \to +\infty} \frac{1}{f(x)} = 0 $$

$$ \lim_{x \to -\infty} \frac{1}{2f(x) + 5} = \lim_{x \to -\infty} \frac{1}{2(f(x) + 2.5)} = 0 $$

On a 
$$ \lim_{x \to -\infty} f(x) = -2.5 \quad \text{donc} \quad \lim_{x \to -\infty} (f(x) + 2.5) = 0 $$

Or la courbe est en dessus de la droite d'équations $y = -2.5$ donc 
$$ f(x) + 2.5 > 0 \quad \text{donc} \quad \lim_{x \to -\infty} \frac{1}{2f(x) + 5} = 0^+ $$

D’où 
$$ \lim_{x \to -\infty} \frac{1}{2f(x) + 5} = \lim_{x \to -\infty} \frac{1}{2(f(x) + 2.5)} = -\frac{n}{1} = +\infty $$

2) La tangente en $\frac{1}{2}$ est horizontale donc $f'(\frac{1}{2}) = 0$.  
La tangente en $-\frac{1}{2}$ passant par les deux points en $A(-\frac{1}{2}; 3; 0)$ et $B(-1; 0)$ 

Et on a que $f'(-\frac{1}{2})$ est le coefficient directeur de la tangente en $-\frac{1}{2}$ 
$$ \therefore f'(-\frac{1}{2}) = \frac{3 - 2}{0 - (-1)} = \frac{1}{1} = 1 $$

Donc 
$$ \lim_{x \to 2^+} \frac{f(x) - f(2)}{x - 2} = f'(2) $$

##### 1ère méthode : 
Rappel : la tangente en $A(a; f'(a))$ est vecteur directeur $u(1; f'(a))$  
$$ f'(2) = 2 \quad \text{Car le vecteur} \quad u(1; 2) \quad \text{est un vecteur directeur de demi-tangente à droite en 2} $$

##### 2ème méthode : la demi-tangente en 2 passant par les deux points en $A(2; 2)$ et $B(3; 4)$ donc
$$ f'(2) = \frac{4 - 2}{3 - 2} = 2 $$

##### $f' (2) ???$
###### 1ère méthode : 
Rappel : la tangente en $A(a; f'(a))$ est vecteur directeur $u(1; f'(a))$  
$$ f'(2) = 2 \quad \text{Car le vecteur} \quad u(-1; 0; 5) \quad \text{est un vecteur directeur de demi-tangente à gauche en 2 donc} \quad f_g'(2) = -0.5 $$

###### 2ème méthode : 
La demi-tangente à gauche en 2 passant par les deux points en $A(2; 2)$ et $C(1; 2.5)$ donc 
$$ f_g'(2) = \frac{2.5 - 2}{1 - 2} = \frac{0.5}{-1} = -0.5 $$
```

<!-- Page 19 -->

```markdown
# Niveau : Deuxième bac sciences PC /SVT /STE

## Série corrigée 2
Révision : Notions de base

Collection FMATHS  
Prof fayssal  
06813999067  
www.elboutkhili.jimdofree.com
```

<!-- Page 20 -->

```markdown
# Révision pour deuxième Bac sc exp
## Série 02 : Calculs des limites et dérivation
### 2 Bac sc Page 01

## Exercice 01
Calculer les limites suivantes :
1) $$ \lim_{x \to 0} \frac{1 - \sqrt{x}}{x} $$
2) $$ \lim_{x \to 3} \frac{3\sqrt{x} - 1}{1 - \cos x} $$
3) $$ \lim_{x \to 0} \frac{1 - \cos 2x}{x \sin 2x} $$
4) $$ \lim_{x \to +\infty} \frac{\sqrt{x^2 + 2} + \sqrt{2 - \sqrt{x}}}{x} $$
5) $$ \lim_{x \to +\infty} (x^2 - 3x + 1 - x) $$
6) $$ \lim_{x \to \frac{\pi}{2}} \frac{1 - \sin x}{(\frac{\pi}{2} - x)^2} $$
7) $$ \lim_{x \to 0} \frac{\tan^2(x) - 1}{\sin^2(x)} $$
8) $$ \lim_{x \to 0} \frac{\sqrt{1 + x} + \sqrt{1 - x} - 2}{x^2} $$
9) $$ \lim_{x \to +\infty} \left( x + \sqrt{x} - \sqrt{x + \sqrt{x}} \right) $$
10) $$ \lim_{x \to +\infty} \left( x + \sin x \right) $$
11) $$ \lim_{x \to +\infty} \frac{x \cos x}{x^2 + 1} $$

## Exercice 02
Soit la fonction définie par $f(x) = \frac{x}{|x-1|} - \frac{3x - 1}{|x^2 - 1|}$
1) Déterminer $D_f$, puis écrire la fonction $f$ son valeur absolue
2) Calculer $$ \lim_{x \to 1^{-}} f(x) $$ et $$ \lim_{x \to 1^{+}} f(x) $$

## Exercice 03
Soit $f$ une fonction définie sur $\mathbb{R}^*$ par :
$$ f(x) = \frac{2 + \sin(x)}{2 + \sqrt{x}} ; \; x > 0 $$
$$ f(x) = \frac{1 - \cos^2(x)}{x^2} ; \; x < 0 $$
1) Calculer $$ \lim_{x \to 0} f(x) $$
2) Montrer que $\forall x \in \mathbb{R}^+$, $|f(x)| \leq \frac{3}{\sqrt{x}}$, puis en déduire $$ \lim_{x \to +\infty} f(x) $$

## Exercice 04
Soit $f$ une fonction définie par :
$$ f(x) = \frac{3x^2 - 4x - 4}{x^2 - 2x} ; \; x > 2 $$
$$ f(x) = \frac{2x^2 + 5}{3 - x^2} ; \; x < 2 $$
1) Déterminer $D_f$ l'ensemble de définition
2) Calculer les limites suivantes : $$ \lim_{x \to +\infty} f(x) ; \; \lim_{x \to 2} f(x) $$

## Exercice 05
1) Soit $f$ la fct tels que : $$ f(x) = \frac{a(\sqrt{x-1} - 1)}{x - 2} ; \; a : b \in \mathbb{R} , \; si \; x < 2 $$
2) Une fct tels que : $$ g(x) = \sqrt{3}x^2 + 2x + b ; \; b \in \mathbb{R} $$
Déterminer $a$ et $b$ pour que $g$ admette une limite finie en 2

## Exercice 06
On considère la fonction $f$ définie par $$ f(x) = \frac{2}{\sqrt{3+1}} $$
1) Déterminer $D_f$ et calculer les limites aux bornes de $D_f$
2) Étudier les variations de $f$.

## Exercice 07
Soit une fonction définie sur $\mathbb{R}$ par :
$$ f(x) = \frac{x^3}{x^4 + 1} ; \; x \geq 1 $$
$$ f(x) = x - 1 + 2\sqrt{1 - x} ; \; x < 1 $$
1) Calculer $$ \lim_{x \to +\infty} f(x) $$ puis montrer que: $$ \lim_{x \to -\infty} f(x) = -\infty $$
2a) Étudier la dérivabilité de $f$ à droite de 1 puis interpréter le résultat géométriquement
3) a) Montrer que $f$ est strictement croissante sur $[1, +\infty[$
b) Montrer que : $\forall x \in [-\infty ; 1] , f'(x) = -\frac{1}{\sqrt{(1 + (1-x))}}$
c) Dresser le tableau de variations de $f$ sur $\mathbb{R}$.

## Exercice 08
Soit $g$ une fonctions définies sur $[0; \pi]$ par : $$ f(x) = x \cos x - \sin x $$
1) a) Calculer $f'(x)$ sur $[0; \pi]$, puis étudier la monotonie $f$
b) En déduire le signe de $f$ sur $[0; \pi]$

2) Soit $g'$ une fonction définie sur $[0; \pi]$ par : $$ g'(x) = \frac{\sin x}{x} $$
a) Soit $a, b \in [0; \pi]$, en déduire que : $$ \frac{a}{b} \leq \frac{\sin a}{\sin b} $$
```

<!-- Page 21 -->

```markdown
# Exercice 01

Calculer les limites suivantes :

1) lim $\frac{1 - \sqrt{-1 + \sin x}}{x}$

2) lim $\frac{3\sqrt{x} - 1}{x \to -1}$

3) lim $\frac{1 - \cos 3x}{x \sin 2x}$ 

4) lim $\sqrt{x + 2 + \sqrt{x} - \sqrt{2 - x}}$ 

5) lim $\sqrt{2x - 3x + 1 - x}$

6) lim $\frac{\sin x}{x}$

7) lim $\frac{1}{\tan^2(x)} - \frac{1}{\sin^2(x)}$

8) lim $\frac{\sqrt{1 + x} + \sqrt{1 - x} - 2}{x^2}$

9) lim $\sqrt{x + \sqrt{x} - \sqrt{x} - \ldots}$

10) lim $x + \sin x$

11) lim $\frac{x \cos x}{x^2 + 1}$

# Solution de l’exercice 02

1) lim $\frac{1 - \sqrt{1 + \sin x}}{x}$

Il s'agit d'une forme indéterminée du type $\frac{0}{0}$.

$$
\lim_{x \to 0} \frac{1 - \sqrt{1 + \sin x}}{x} = \lim_{x \to 0} \frac{(1 - \sqrt{1 + \sin x})(1 + \sqrt{1 + \sin x})}{x(1 + \sqrt{1 + \sin x})}
= \lim_{x \to 0} \frac{(1)^2 - (\sin x)}{x(1 + \sqrt{1 + \sin x})}
= \lim_{x \to 0} \frac{(1 - \sin x)}{x(1 + \sqrt{1 + \sin x})}
$$

= $\lim_{x \to 0} \frac{-\cos x}{1 + \sqrt{1 + \sin x}} = -\frac{1}{2}$.

Car $\lim_{x \to 0} \frac{\sin x}{x} = 1$.

2) lim $\frac{1 - \cos 3x}{x \sin 2x}$ 

Il s'agit d'une forme indéterminée du type $\frac{0}{0}$.

$$
\lim_{x \to 0} \frac{1 - \cos(3x)}{(3x)^2} = \lim_{x \to 0} \frac{1 - \cos(3x)}{(3x)^2} \cdot \frac{x \sin 2x}{2x}
= \lim_{x \to 0} \frac{(1 - \cos(3x))}{(3x)^2} \cdot \frac{(3)(2 \cdot 2)}{2x}
$$

= $\frac{1}{2} \cdot \frac{9}{4} = \frac{9}{8}$.
```

<!-- Page 22 -->

```markdown
### Révision pour deuxième Bac Sc exp
**Correction du série 2**

4) 
$$
\lim_{x \to +\infty} \frac{\sqrt{x + 2 + \sqrt{x}}}{\sqrt{x - 2 - \sqrt{x}}} = \lim_{x \to +\infty} \frac{(\sqrt{x + 2 + \sqrt{x}})(\sqrt{x - 2 + \sqrt{x}})}{-2} = -\infty
$$

5) 
$$
\lim_{x \to -\infty} \sqrt{x^2 - 3x + 1 - x} = \lim_{x \to -\infty} \frac{(x^2 - 3x + 1 - 2x)(\sqrt{x^2 - 3x + 1 + x})}{\sqrt{x^2 - 3x + 1 + x}} = \lim_{x \to -\infty} (x^2 - x^2) = 0
$$

6) 
$$
\lim_{x \to \frac{\pi}{2}} \frac{1 - \sin x}{( \frac{\pi}{2} - x)^2}
$$
On pose $X = \frac{\pi}{2} - x \text{ donc } x = \frac{\pi}{2} - X$  
Et on a : $x \to \frac{\pi}{2} \iff X \to 0$  
$$
\lim_{x \to \frac{\pi}{2}} \frac{1 - \sin x}{(\frac{\pi}{2} - x)^2} = \lim_{X \to 0} \frac{1 - \cos(X)}{X^2} = \frac{1}{2}
$$

7) 
$$
\lim_{x \to 0} \frac{\tan^2(x)}{\sin^2(x)} = \lim_{x \to 0} \frac{\cos^2(x)}{\sin^2(x)} = \lim_{x \to 0} \frac{-\sin^2(x)}{\sin^2(x)} = -1
$$

8) 
$$
\lim_{x \to 0} \frac{\sqrt{1 + x + \sqrt{1 - x} - 2}}{x^2} = \lim_{x \to 0} \frac{1 + x + 2\sqrt{1 + x - 1 - x} - 4}{x^2(1 + x + \sqrt{1 - x} + 2)} = \lim_{x \to 0} \frac{2\sqrt{1 - x^2} - 2}{4(1 + x + \sqrt{1 - x} + 2)} = -\frac{1}{4} 
$$
```

<!-- Page 23 -->

```markdown
# Révision pour deuxième Bac Sc exp
## Correction du série 2
### Page 4
### 2 Bac Sc

9) 
$$ 
\lim_{x \to +\infty} \sqrt{x + \sqrt{x} - \sqrt{x + \sqrt{x}}} 
= \lim_{x \to +\infty} 
\frac{\sqrt{x + \sqrt{x} - \sqrt{x}}}{\sqrt{x}} 
= \lim_{x \to +\infty} 
\frac{( \sqrt{x + \sqrt{x} + \sqrt{x}})( \sqrt{x + 1})}{\sqrt{x}} 
= \lim_{x \to +\infty} \frac{1}{\sqrt{x} + 1} 
= 0 
$$

10) 
$$ 
\lim_{x \to +\infty} \left( x + \sin x \right) 
$$

Rappels:
Soient $f$ et $g$ des fonctions définies sur un intervalle $I$  
- Si $\forall x \in I: f(x) \leq g(x)$ et $\lim_{x \to a} f(x) = +\infty$  
Alors $\lim_{x \to a} g(x) = +\infty$

- Si $\forall x \in I: f(x) \leq g(x)$ et $\lim_{x \to a} g(x) = -\infty$  
Alors $\lim_{x \to a} f(x) = -\infty$

(Théorème d'encadrement):
Soient $f, g$ et $h$ trois fonctions définies sur un intervalle $I$,  
Si $\forall x \in I: g(x) \leq f(x) \leq h(x)$ et $\lim_{x \to a} g(x) = \lim_{x \to a} h(x) = l$  
Alors $\lim_{x \to a} f(x) = l$

11)
$$ 
\lim_{x \to +\infty} \frac{x \cos x}{x^2 + 1} 
$$

12) 
$$ 
\lim_{x \to +\infty} \cos x \text{ n'existe pas.}
$$

Donc sous la forme donnée, la limite cherchée est indéterminée.

Levens l'indétermination:
- Pour tout $x, -1 \leq \cos x \leq 1$ donc: $-\frac{x}{x^2 + 1} \leq \frac{x \cos x}{x^2 + 1} \leq \frac{x}{x^2 + 1}$ et donc:

Soit: 
$$ -\frac{1}{x} \leq \frac{x \cos x}{x^2 + 1} \leq \frac{1}{x} $$

Orsin $1 \leq \sin x \leq 1$ donc $\lim_{x \to +\infty} -1 = 0$ et $\lim_{x \to +\infty} \frac{1}{x} = 0$.

D'après le théorème des gendarmeres, on a: 
$$ \lim_{x \to +\infty} \frac{x \cos x}{x^2 + 1} = 0. $$
```

<!-- Page 24 -->

```markdown
# Exercic 02
Soit la fonction définit par $f(x) = \frac{x}{|x-1|} - \frac{3x-1}{|x^2-1|}$

1) Déterminer $D_f$ l'ensemble de définition de $f$

$$
x \in D_f \Leftrightarrow |x - 1| \neq 0 \text{ et } |x^2 - 1| \neq 0 
\Leftrightarrow x \neq 1 \text{ et } x^2 - 1 \neq 0 
\Leftrightarrow x \neq 1 \text{ et } x \neq -1 
$$
Donc $D_f = ]-\infty; -1[ \cup ]1; +\infty[$

2) Ecrire la fonction $f$ son valeur absolue

En utilisant la définition de la valeur absolue on trouve

$$
|X| = 
\begin{cases} 
x & \text{si } x > 0 \\ 
-x & \text{si } x < 0 
\end{cases}
$$

# Solution de l’exercice 02
Soit la fonction définit par $f(x) = \frac{x}{|x-1|} - \frac{3x-1}{|x^2-1|}$

1) Déterminer $D_f$ l'ensemble de définition de $f$

$$
x \in D_f \Leftrightarrow |x - 1| \neq 0 \text{ et } |x^2 - 1| \neq 0 
\Leftrightarrow x \neq 1 \text{ et } x^2 - 1 \neq 0 
\Leftrightarrow x \neq 1 \text{ et } x \neq -1 
$$
Donc $D_f = ]-\infty; -1[ \cup ]1; +\infty[$

2) Ecrire la fonction $f$ son valeur absolue

En utilisant la définition de la valeur absolue on trouve

$$
|X| = 
\begin{cases} 
x & \text{si } x > 0 \\ 
-x & \text{si } x < 0 
\end{cases}
$$

3) Calculer $\lim_{x \to 1} f(x)$ et $\lim_{x \to -1} f(x)$

On a $\lim_{x \to 1^+} f(x) = \lim_{x \to 1^+} \frac{x - 1}{1 + x} = 0$

et $\lim_{x \to 1^-} f(x) = \lim_{x \to 1^-} 1 - \frac{1 - x}{1 + x} = 0$

Donc $\lim_{x \to 1} f(x) = 0$

On a $\lim_{x \to -1^+} f(x) = \lim_{x \to (-1)^+} \frac{1 - x}{1 + x} = +\infty$

et $\lim_{x \to -1^-} f(x) = \lim_{x \to (-1)^-} \frac{x^2 + 4x - 1}{1 + x} = +\infty$

Donc $\lim_{x \to -1} f(x) = +\infty$
```

<!-- Page 25 -->

```markdown
# Exercic 03

Soit $f$ une fonction définie sur $\mathbb{R}^*$ par :

$$
f(x) =
\begin{cases}
\frac{2 + \sin(x)}{2 + \sqrt{x}} ; & x > 0 \\
\frac{1 - \cos^2(x)}{x^2} ; & x < 0
\end{cases}
$$

1) Calculer $\lim_{x \to 0} f(x)$  
2) Montrer que $\forall x \in \mathbb{R}^+ : |f(x)| \leq \frac{3}{\sqrt{x}}$, puis en déduire $\lim_{x \to +\infty} f(x)$.

## Solution

1) 
* $\lim_{x \to 0^+} f(x) = \lim_{x \to 0^+} \frac{2 + \sin(x)}{2 + \sqrt{x}} = \frac{2 + 0}{2 + 0} = 1$

* $\lim_{x \to 0^-} f(x) = \lim_{x \to 0^-} \frac{-x^2}{\sin^2(x)} = \lim_{x \to 0^-} \frac{-x^2}{x^2} = (1)^2 = 1$

Car : $\sin^2(x) + \cos^2(x) = 1 \Rightarrow 1 - \cos^2(x) = \sin^2(x)$  
Donc lim $\limits_{x \to 0^+} f(x) = \lim_{x \to 0^-} f(x) = 1$

2) $|f(x)| = \left| \frac{2 + \sin(x)}{2 + \sqrt{x}} \right| \leq \frac{2 + \sqrt{1}}{2 + \sqrt{x}} \leq \frac{3}{\sqrt{x}}$

* On a : $\lim_{x \to +\infty} \frac{3}{\sqrt{x}} = \lim_{x \to +\infty} -\frac{3}{\sqrt{x}} = 0$  
Donc d'après théorème d'encadrement on a  
$$ \lim_{x \to +\infty} f(x) = 0 $$

# Exercic 04

$f$ une fonction définie par :

$$
f(x) =
\begin{cases}
\frac{3x^2 - 4x - 4}{x^2 - x - 2} ; & x > 2 \\
\frac{\sqrt{x^2 + 5 - 3}}{\sqrt{x + 2 - 2}} ; & x < 2
\end{cases}
$$

1) Déterminer $D_f$ l'ensemble de définition  
2) Calculer les limites suivantes : $\lim_{x \to +\infty} f(x)$ ; $\lim_{x \to 2} f(x)$.

## Solution

1) Considérons les fonctions $u : x \to \frac{3x^2 - 4x - 4}{x^2 - x - 2}$ et $v : x \to \frac{\sqrt{x^2 + 5 - 3}}{\sqrt{x + 2 - 2}}$  
$x \in D_u \Leftrightarrow x^2 - x - 2 \neq 0 \land x \neq 2 \land x \neq -1$  
Donc $D_u = ]-\infty ; -1[ \cup ]2 ; +\infty[$  
➔ Donc la restriction de $f$ sur $]2 ; +\infty[$ est définie sur :  
$D_u \cap ]2 ; +\infty[ = ]2 ; +\infty[$  

$x \in D_v \Leftrightarrow x^2 + 5 \geq 0 \land x \geq 2 \text{ et } \sqrt{x + 2 - 2} \neq 0$  
⇔ $x \geq 2 \text{ ou } \sqrt{x} \neq 2$  
⇔ $x \geq 2 \text{ ou } x \neq 4$  
Donc $D_v = [-2 ; 2[ \cup ]2 ; +\infty[$  
Donc la restriction de $f$ sur $[-\infty ; -2[ ; 2[ $ est définie sur :  
$D_v \cap ]-\infty ; -2[ ; 2[ = [-2 ; 2[$

Donc $D_f = [-2 ; 2[ \cup ]2 ; +\infty[$ ; car $f(2) = \frac{8}{3}$  

D'où $D_f = [-2 ; +\infty[$
```

<!-- Page 26 -->

```markdown
Prof FAYSAL : 0681399067  
Site web : www.elboutkhili.jimdofree.com  

Révision pour deuxième Bac Sc EXP  
Correction du série 2  
Page 07  
2 Bac Sc  

## Exercic 05  
1) Soit $f$ la fonction définie sur $\left[\frac{3}{2}, +\infty\right[ - \{2\}$ par :  
$$
f(x) = \begin{cases} 
\frac{a(\sqrt{x-1}-1)}{x-2} & \text{si } x < 2 \\ 
\frac{2}{\sqrt{2x-3}-b} & \text{si } x \geq 2 
\end{cases}, \quad a, b \in \mathbb{R}. 
$$  
Déterminer $a$ et $b$ pour que $f$ admette une limite finie en 2.  
2) Soit $g$ la fonction définie par :  
$$
g(x) = \sqrt{x^3 + 2x^2 + 3 - ax\sqrt{x + b}, \; a, b \in \mathbb{R}.} 
$$  
Déterminer $a$ et $b$ pour que $g$ admette une limite finie en $+\infty$.  

## Solution :  
1) Soit $f$ la fct sur $\left[\frac{3}{2}, +\infty\right[ - \{2\}$ par :  
Si $b + 1$, alors $\lim_{x \to 2^+} f(x) = \infty$  
On suppose $b = 1$ et on multiplie $f$ par sa conjuguée,  

On obtient  
$$ 
f(x) = \begin{cases} 
\frac{a}{\sqrt{x-1}+1} & \text{si } x < 2 \\ 
\frac{2}{\sqrt{3-b}-x} & \text{si } x > 2 
\end{cases} 
$$  
Donc $f$ admet une limite finie en 2 si $a = 2$ et $b = 1$.  

2) Soit $g(x) = \sqrt{x^3 + 2x^2 + 3 - ax\sqrt{x + b}, a, b \in \mathbb{R}.$  
La fonction $g$ admet une limite finie en $+\infty$ si et seulement si :  
Si $a \leq 1$, alors $\lim_{x \to +\infty} g(x) = +\infty$.  
On suppose $a > 0$ et on multiplie $g$ par sa conjuguée, on obtient :  
$$
g(x) = \sqrt{x^3 + 2x^2 + 3 - ax\sqrt{x + b} = (1 - a^2)x^3 + (2 - a^2b)x^2 + 3 
$$  
Donc $g$ admet une limite finie en $+\infty$ si $a = 1, b = 2$.  
```

<!-- Page 27 -->

```markdown
# Exercice 06

On considère la fonction f définie par $f(x) = \frac{2x}{\sqrt{3x+1}}$

1) Déterminer $D_f$ et calculer les limites aux bornes de $D_f$

2) Étudier les variations de f.

## Solution

On considère la fonction f définie par $f(x) = \frac{2x}{\sqrt{3x+1}}$

1) Déterminer $D_f$ et calculer les limites aux bornes de $D_f$

La fonction f est définie pour $2x \geq 0$ et $3x + 1 \neq 0$

Donc la fonction f est définie pour $2x \geq 0$ et $x \neq -\frac{1}{3}$

On dresse le tableau de signe de $\frac{2x}{3x+1}$ :

| $x$        | $-\infty$ | $-\frac{1}{3}$ | $0$     | $+\infty$ |
|------------|-----------|----------------|---------|-----------|
| $2x$      | -         | 0              | +       | +         |
| $3x + 1$  | -         | 0              | +       | +         |
| $\frac{2x}{3x+1}$ | + | 0              | -       | +         |

Donc la fonction f est définie sur 

$$ D_f = ]-\infty; -\frac{1}{3}] \cup [0; +\infty[ $$

Calcul des limites :

$$ \lim_{x \to -\frac{1}{3}^-} f(x) = \lim_{x \to -\frac{1}{3}^-} \frac{2x}{\sqrt{3x+1}} = +\infty $$

( Car $\lim_{x \to -\frac{1}{3}} 2x = -\frac{2}{3}$ et $\lim_{x \to -\frac{1}{3}} 3x + 1 = 0' $ )

$$ \lim_{x \to 0} f(x) = \lim_{x \to 0} \frac{2x}{3x+1} = \frac{2}{3} $$

2) Étudier les variations de f.

On pose : $u(x) = \frac{2x}{3x+1}$

$$ u'(x) = \frac{2(3x+1) - 3 \cdot 2x}{(3x+1)^2} = \frac{6x + 2 - 6x}{(3x+1)^2} = \frac{2}{(3x+1)^2} $$

Donc $f'(x) = \frac{u'(x)}{2\sqrt{u(x)}} = \frac{2}{(3x+1)^2\sqrt{\frac{2x}{3x+1}}} = \frac{2}{(3x+1)^{\frac{5}{2}}} > 0$.

On dresse le tableau de variations :

| $x$       | $-\infty$ | $-\frac{1}{3}$ | $0$      | $+\infty$ |
|-----------|-----------|----------------|----------|-----------|
| $f'(x)$   | +         | / / / / / / / / / / |  +      | / / / / / / / / / +   |
| $f(x)$    | $+\infty$ | $\frac{2}{3}$ | $0$     | $+\infty$ |
```

<!-- Page 28 -->

```markdown
# Exercice 07

$f$ une fonction définie sur $\mathbb{R}$ par 

$$
f(x) = \begin{cases} 
\frac{x^3-1}{x^3+1} ; & x \geq 1 \\ 
x - 1 + 2\sqrt{1-x} ; & x < 1 
\end{cases}$$

1) Calculer $\lim_{x \to +\infty} f(x)$ puis montrer que: $\lim_{x \to -\infty} f(x) = -\infty$

2) a) Étudier la dérivabilité de $f$ à droite de $1$ puis interpréter les résultats géométriquement  
b) Étudier la dérivabilité de $f$ à gauche de $1$ puis interpréter les résultats géométriquement

3) a) Montrer que $f$ est strictement croissante sur $[1, +\infty[$  
b) Montrer que $\forall x \in ]-\infty ; 1[ ; f'(x) = \frac{-x}{\sqrt{-(1+\sqrt{1-x})}}$  
c) Dresser le tableau des variations de $f$ sur $\mathbb{R}$

# Solution :

$f(x) = \begin{cases} 
\frac{x^3-1}{x^3+1} ; & x \geq 1 \\ 
x - 1 + 2\sqrt{1-x} ; & x < 1 
\end{cases}$

1) Calculer $\lim_{x \to +\infty} f(x)$ puis montrer que: $\lim_{x \to -\infty} f(x) = -\infty$

$$
\lim_{x \to +\infty} f(x) = \lim_{x \to +\infty} \frac{x^3-1}{x^3+1} = \lim_{x \to +\infty} \frac{x^3}{x^3} = 1
$$

Montrer que: $\lim_{x \to -\infty} f(x) = -\infty$

$$
\lim_{x \to -\infty} f(x) = \lim_{x \to -\infty} (x - 1 + 2|x|) = \lim_{x \to -\infty} \left( 1 - 2 - 2|x|\right) = -\infty
$$

2) a) Étudier la dérivabilité de $f$ à droite de $1$ puis interpréter les résultats géométriquement

$$
\lim_{x \to 1^+} \frac{f(x) - f(1)}{x - 1} = \lim_{x \to 1^+} \frac{\frac{x^3 - 1}{x^3 + 1} - 1}{x - 1} = \lim_{x \to 1^+} \frac{\frac{x^3 - 1 - (x^3 + 1)(x - 1)}{(x^3 + 1)(x - 1)}} = \lim_{x \to 1^+}\frac{x^3 - 1}{x^3 + 1} = \lim_{x \to 1^+} \frac{x^2 + x + 1}{x^3} = \frac{3}{2}
$$

Donc la fonction $f$ est dérivable à droite de $1$ et $f'_d(1) = \frac{3}{2}$

b) Étudier la dérivabilité de $f$ à gauche de $1$ puis interpréter les résultats géométriquement

$$
\lim_{x \to 1^-} \frac{f(x) - f(1)}{x - 1} = \lim_{x \to 1^-} \frac{x - 1 + 2\sqrt{1-x} - 1}{x - 1} = \lim_{x \to 1^-} \frac{- 1 + 2\sqrt{1-x}}{x - 1} 
$$

$$
= \lim_{x \to 1^-} \frac{- 1 + 2|x|}{1 - \sqrt{x}} = \lim_{x \to 1^-} \frac{1 - 2}{\sqrt{1 - x}} = -\infty
$$

Donc la fonction $f$ n'est pas dérivable à gauche de $1$  
Donc la courbe $(C_f)$ admet une demi-tangente verticale en $1$ dirigée vers le haut.
```

<!-- Page 29 -->

```markdown
3) a) Montrer que $f$ est strictement croissante sur $[1, +\infty[$  
Soit $x \in [1; +\infty[$  
$f$ est dérivable sur $[1; +\infty[$ (fonction rationnelle)  
$f'(x) = \frac{3x^2(3 + 1) - 3x^2(3 - 1)}{(x^3 + 1)^2} = \frac{6x^2}{(x^3 + 1)^2} > 0$  
Donc la fonction $f$ est strictement croissante sur $[1, +\infty[$  

b) Montrer que $\forall x \in ]-\infty ; 1[ ; f'(x) = \frac{-x}{\sqrt{-x(1 + 1-x)}}$  
Soit $x \in ]-\infty ; 1[$  
$f$ est dérivable sur $]-\infty ; 1[$ (Somme de deux fonctions)  
$f'(x) = 1 + 2\frac{-1}{2\sqrt{1-x}} = 1 - \frac{1}{\sqrt{1-x}} = \frac{\sqrt{1-x} - 1}{\sqrt{1-x}}$  
$$ = \frac{(1-\sqrt{1-x})(\sqrt{1-x} + 1)}{-x} = \frac{\sqrt{1-x}(1 + \sqrt{1-x})}{-x} $$  

c) Dresser le tableau de variations de $f$ sur $\mathbb{R}$  
On a $f$ est strictement croissante sur $[1, +\infty[$  
Soit $x \in ]-\infty ; 1[$  
On a $f'(x) = \frac{-x}{\sqrt{1-x(1+1-x)}}$  
Donc $\sqrt{1 - x (1 + 1 - x)} > 0$ donc le signe de $f' \in ]-\infty ; 1[$ signe de $-x$ qui s'annule en $0$  

---

D’où le tableau de variations de $f$ sur $\mathbb{R}$

| $x$           | $-\infty$ | $0$ | $1$ | $+\infty$ |
|---------------|-----------|-----|-----|-----------|
| $f'(x)$       | $+$       | $0$ | $-$ | $+$       |
| $f(x)$       | $-\infty$ | $0$ | $?$ | $+\infty$ |

---

Exercice 08  
1) Une fonction définie sur $[0; \pi]$ par : $f(x) = x \cos x - \sin x$  
a) Calculer $f'(x)$ sur $[0; \pi]$ puis étudier la monotonie de la fonction $f$  
b) En déduire le signe de $f$ sur $[0; \pi]$  
2) Une fonction définie sur $]0; \pi[$ par : $g(x) = \frac{\sin x}{x}$  
a) Calculer $g'(x)$ sur $]0; \pi[$ puis étudier les variations de $g$  
b) Soient $a, b \in [0; \pi]$, en déduire que $a < b \implies \frac{\sin a}{a} < \frac{\sin b}{b}$  

Solution  
1) Une fonction définie sur $[0; \pi]$ par : $f(x) = x \cos x - \sin x$  
a) Calculer $f'(x)$ sur $[0; \pi]$ puis étudier la monotonie de la fonction $f$  
Soit $x \in [0; \pi]$  
$f$ est dérivable sur $[0; \pi]$ (Somme et produit de deux fonctions)  
Rappels :  
$(u.v)' = u'v + uv'$ ; et $\sin'(x) = \cos(x)$  
et $\cos'(x) = -\sin(x)$  
```

<!-- Page 30 -->

```markdown
## Donc on trouve :

$$
f'(x) = \cos x - x \sin x - \cos x
= -x \sin x
$$

### Etudier les variations de $f$

Soit $x \in [0; \pi]$,  
On a $f'(x) = -x \sin x$  
On a : $-x < 0$ et $\sin x > 0$  
donc $f'(x) < 0$

D’où la fonction $f$ est strictement décrochissante sur $[0; \pi]$

| $x$ | $0$ | $\pi$ |
|-----|-----|-------|
| $f'(x)$ | $-$ | $-$ |
| $f(x)$ | $f(0) = 0$ | $f(\pi) = -\pi$ |

### b) Etude de signe de fonction $f$ sur $[0; \pi]$

Soit $x \in [0; \pi]$,  
$x \in [0; \pi] \implies 0 \leq x \leq \pi$  
$$
\Rightarrow f(\pi) \leq f(x) \leq f(0) ; \text{ car } f \text{ est décroissante sur } I
$$
$$
\Rightarrow -\pi \leq f(x) \leq 0
$$
D’où $\forall x \in [0; \pi] : f(x) \leq 0$

---

## 2) a) Calculer $g'(x)$ sur $[0; \pi]$ puis étudier les variations de $g$

Soit $x \in [0; \pi[$,  
$g$ est dérivable sur $[0; \pi[$ (Somme et produit de deux fonctions)

$$
g'(x) = \frac{\sin x - x \cos x}{x^2} = -\frac{f(x)}{x^2}
$$

### Etudions les variations de $g$

Soit $x \in [0; \pi[$,  
On a : $g'(x) = -\frac{f(x)}{x^2}$  
On a : $x^2 > 0$ et on a : $f(x) < 0$  
donc : $g'(x) > 0$  

D’où la fonction $g$ est strictement croissante sur $[0; \pi]$

### b) Soient $a; b \in [0; \pi]$ tels que $a < b$

$a < b \Rightarrow g(a) < g(b) ; \text{ car } g \text{ est croissante sur } [0; \pi]$

$$
\Rightarrow \frac{\sin a}{a} < \frac{\sin b}{b} \Rightarrow \frac{\sin a}{\sin b} < \frac{a}{b}
$$
```

<!-- Page 31 -->

```markdown
# Niveau : Deuxième bac sciences PC /SVT /STE

## Résumé de cours
### Continuité d’une fonction

Plan de chapitre 1 : Continuité d’une fonction
- Cours détaillé
- Résumé de cours
- Série d’exercices
- Correction détaillée des exercices

Collection FMATHS  
Prof fayssal  
06813999067  
www.elbouthkili.jimdo.free.com
```

<!-- Page 32 -->

```markdown
# Prof : fayssal 
## Site web : www.elboutkhili.jimdo.com

## Résumé 01 : Continuité d’une fonction 

### 1) Continuité d’une fonction en un point

**Continuité d’une fonction en un point d’abscisse $x_0$**  
Soit $f$ une fonction définie sur un intervalle ouvert $I$ et $x_0 \in I$  
La fonction $f$ est continue en $x_0 \iff \lim_{x \to x_0} f(x) = f(x_0)$

**Continuité d’une fonction à droite et à gauche d’un point $a$**  
- La fonction $f$ est continue à droite de $a \iff \lim_{x \to a^+} f(x) = f(a)$  
- La fonction $f$ est continue à gauche de $a \iff \lim_{x \to a^-} f(x) = f(a)$  
La fonction $f$ est continue en $a \iff f$ est continue à droite et à gauche du point $a$

### 2) Continuité d’une fonction sur un intervalle

$f$ une fonction définie sur un intervalle $[a; b]$  
- La fonction $f$ est continue sur l’intervalle ouvert $]a; b[$ si elle est continue en chaque point de l’intervalle $]a; b[$  
- La fonction $f$ est continue sur l’intervalle $[a; b]$ si f est continue sur l’intervalle $]a; b[$ et continue à droite de $a$ et à gauche de $b$

**Exemples des fonctions usuelles continues sur un intervalle**  
1) Toute fonction polynomiale est continue sur $\mathbb{R}$  
2) Les fonctions rationnelles sont continues en tout intervalles inclus dans leurs domaines de définitions  
3) La fonction $x \to \sqrt{x}$ est continue sur $[0; +\infty [$  
4) Les fonctions $x \to \cos x$ et $x \to \sin x$ sont continues sur $\mathbb{R}$  
5) La fonction $x \to \tan x$ est continue sur tout intervalle inclus dans l’ensemble $\mathbb{R} \setminus \{ \frac{-\pi}{2} + k\pi / k \in \mathbb{Z} \}$  
6) La fonction $x \to |x|$ est continue sur $\mathbb{R}$

### 3) Image d’un intervalle - Théorème des valeurs intermédiaires

**Image d’un intervalle par une fonction continue**  
- L’image d’un intervalle par une fonction continue est un intervalle

Si $f$ est continue sur un segment $[a, b]$ et $M$ est le maximum de $f$ sur $[a, b]$ et $m$ est le minimum de $f$ sur $[a, b]$. Alors $f([a, b]) = [m, M]$
```

<!-- Page 33 -->

```markdown
# Prof : fayssal
Site web : www.elboutkhili.jimdo.free

## Résumé 01 : Continuité d'une fonction
### 2 Bac sx   Page 02

### 1) Fonction continue sur $I$ et $f$ strictement décroissante

Soit $f : [a; b] \to \mathbb{R}$, alors :

- $f(a; b) = [f(a); f(b)]$
- $f(b; +\infty) = [f(b); \lim_{x \to +\infty} f(x)]$
- $f(a; b] = [f(a); \lim_{x \to b^-} f(x)]$
- $f[a; b] = [\lim_{x \to a^+} f(x); f(b)]$
- $f(-\infty; b] = [f(b); \lim_{x \to -\infty} f(x)]$

### Théorème des valeurs intermédiaires (TVI) 
Si $f$ une fonction continue sur $[a; b]$, alors pour tout réel $k$ compris entre $f(a)$ et $f(b)$, il existe un réel $c$ dans $[a; b]$ tel que $f(c) = k$

En d'autres termes : l'équation $f(x) = k$ d'inconnue $x$ admet au moins une solution dans $[a; b]$ pour tout $k$ compris entre $f(a)$ et $f(b)$

### Corollaire 01
Si $f$ une fonction continue sur $[a; b]$ et $f(a) \cdot f(b) < 0 ;$ alors l'équation $f(x) = 0$ admet au moins une solution $\alpha$ dans ]a; b[.

- De plus si $f$ est strictement monotone sur $[a; b]$ alors $\alpha$ est unique

### Corollaire 02
Si la fonction $f$ est continue et strictement monotone sur l'intervalle $I$ tel que $k \in f(I)$ alors l'équation $f(x) = k$ admet une unique solution $\alpha$ dans $I$.

### 4) Fonction Réciproque d’une fonction continue et strictement monotone
Si $f$ une fonction continue et strictement monotone sur $I$ ; alors la fonction $f$ admet une fonction réciproque, notée $f^{-1}$ définie sur l'intervalle ]$f(a)$ ; $f(b)[$.

### Propriétés de fonction réciproque $f^{-1}$

Si $f$ est continue et strictement monotone sur $I$, alors :

1. $f^{-1}(x) = y \iff f(y) = x \ \forall \ x \in f(I) \ \forall \ y \in I$
2. $f^{-1}$ est continue sur $f(I)$ et à même sens de variation que $f$
3. Les courbes représentatives de $f$ et de $f^{-1}$, sont symétriques par rapport la droite d'équation $y = x$ $\forall \ x \in I ; \ f^{-1}(x) = x ; \forall \ x \in f(I)$

### 5) Fonction racine n-ième
La fonction $x \to x^n$ est continue etstrictement monotone sur $[0; +\infty[$ donc admet une fonction réciproque sur $[0; +\infty[$. Cette fonction est appelée la fonction racine n-ième, et elle est notée par : $x \to \sqrt[n]{x}$.

#### Propriété : Soient $x$ et $y$ dans $[0; +\infty[$

1) $x^n = y \iff x = \sqrt[n]{y}$
2) $\sqrt[2]{x} = \sqrt{x} = 1\sqrt{x} = x^{1/2}$
3) $\lim_{x \to +\infty} \sqrt[n]{x} = +\infty$
4) $\sqrt[n]{(\sqrt[m]{x})^m} = \sqrt[n]{x}$
5) $\sqrt[n]{x} = x^{1/n}$
6) $\sqrt[n]{x^m} = x^{\frac{m}{n}}$
7) $\sqrt[n]{x} \cdot \sqrt[n]{y} = \sqrt[n]{xy}$

### Puissances rationnelles d’un nombre réel strictement positif
Soit $p$ un réel strictement positif et $p \in \mathbb{Z}$ et $q \in \mathbb{N}^*$ on a :
$$
\sqrt[q]{a^p} = a^{\frac{p}{q}}
$$
```

<!-- Page 34 -->

```markdown
# Niveau : Deuxième bac sciences PC /SVT /STE

## Série corrigée 1
### Continuité d’une fonction

**Plan de chapitre 1 : Continuité d’une fonction**
- Cours détaillé
- Résumé de cours
- Série d’exercices
- Correction détaillée des exercices

**Collection FMATHS**  
Prof fayssal  
06813999067  
www.elbouthkili.jimdofree.com
```

<!-- Page 35 -->

```markdown
# Prof : Fayçal
Site web : www.elbouthkili.jimdofree.com

## Série d’exercices 1 : Limite et continuité  
### 2 Bac SX 

### Exercice 01
Etudier la continuité des fonctions suivantes en $x_0$ :
1) $$ f(x) = \frac{x - 4}{\sqrt{2} - x} ; x \neq 4 $$  ; 
2) $f(4) = 4$
3) $$ f(x) = \frac{\sin(\sqrt{3}x)}{12} ; x > 0 $$
   $$ f(x) = \sqrt{-2 + \sqrt{\cos^2 x}} ; x < 0 ; \text{ en } 0 $$
   $$ f(0) = \frac{\sqrt{3}}{12} $$
4) $$ f(x) = \frac{x^2 - 1}{|x - 1|} ; x \neq 1 $$
   $$ f(1) = 2 $$

### Exercice 02
1) Soit $f$ une fonction définie sur $\mathbb{R} : \quad f(x) = \frac{\sin(\pi x)}{x - 3} ; x \neq 3$
   - Déterminer la valeur du réel $a$ pour que $f$ soit continue en 3
2) Soit une fonction définie sur $\mathbb{R}$ par : $$ f(x) = \frac{x^3 + x^2 - a}{x - 1} $$
   - Déterminer les réels $a$ et $b$ pour que $f$ soit continue en 1

### Exercice 03
Etudier la continuité de la fonction $f$ sur $I$ dans les cas suivants :
1) $$ f(x) = x^3 + \sqrt{2}x^2 + x - 3 ; I = \mathbb{R} $$
2) $$ f(x) = \frac{x + 1}{x^2 + 3} ; I = \mathbb{R} $$
3) $$ f(x) = 2\sqrt{x + x^3} + 3 ; I = [0, +\infty[ $$
4) $$ f(x) = \sqrt{x - 3} ; I = \mathbb{R} $$

### Exercice 04
Si $f$ une fonction définie sur $[-2; +\infty[$ par :
$$ f(x) = \begin{cases} 
\frac{3x^2 - 4x - 4}{x^2 - 2} ; x > 2 \\ 
f(x) = \sqrt{x^2 + 5 - 3} ; -2 \leq x < 2 
\end{cases} $$

1) Montrer que $f$ est continue en 2.
2) Montrer que $f$ est continue sur l’intervalle $[-2; +\infty[$

### Exercice 05
Soit $f$ une fonction définie par $$ f(x) = \frac{3x - 5}{x - 2} $$
1) Déterminer $D_f$ et calculer $\lim_{x \to +\infty} f(x)$, $\lim_{x \to -\infty} f(x)$, $\lim_{x \to 2^+} f(x)$ ; $\lim_{x \to 2^-} f(x)$.
2) Déterminer $f(-\infty, 2] , (2, +\infty)$ et $f([3, 4])$

### Exercice 06
1) Montrer que l’équation $x^{2025} + \sqrt{x - 1} = 0$ admet une solution unique dans l’intervalle $]0; 1]$.
2) Montrer que l’équation $\sin(x) + \frac{1}{2} = 0$ admet une solution unique $\alpha$ dans l’intervalle $[-\frac{\pi}{6}, 0]$.
3) Montrons que l’équation $x^5 + x^3 + x = 1$ admet une unique solution $\alpha$ dans $\mathbb{R}$ puis vérifier que $0 < \alpha < 1$.
4) Montrer que l’équation $x^3 - 1 = 7 = 0$, admet une solution unique $\alpha$ dans l’intervalle $]0, +\infty[$ puis vérifier que $\alpha \in [\frac{3}{2}, 2]$.

### Exercice 07
Soit la fonction numérique définie sur $\mathbb{R}$ par : $$ f(x) = x^3 - 3x^2 - 5 $$
1) Etudier le sens des variations de $f$ sur $\mathbb{R}$.
2) Montrer que l’équation $f(x) = 0$ admet une seule solution $\alpha$ dans $\mathbb{R}$ puis vérifier que $\alpha \in [2; 4]$.
3) Par la méthode de dichotomie, donner un encadrement de $\alpha$ d’amplitude $0, 5$.
4) Etudier le signe de $f(x)$ pour tout $x \in \mathbb{R}$.

### Exercice 08
Si une fonction définie par le tableau de variations, ci-dessous.
Déterminer le nombre de solution des équations suivantes puis encadrer ces solutions.
|  $x$   | $-4$ | $-3$ |  $-1$ |  $1$ |
|--------|------|------|-------|------|
| $f(x)$ |  $18$ | $0$  | $-3$  | $3$  |
```

<!-- Page 36 -->

```markdown
# Prof : Fayçsal
## Site web : www.elbouthkili.jimdofree.com
## Série d’exercices 1 : Limite et continuité 2 Bac SX

### Exercice 09
$f$ une fonction définie sur $I = [1; +\infty[ \; : \; f(x) = x^2 - 2x + 3$
1) Montrons que $f$ admet une fonction réciproque $f^{-1}$ définie sur $J$ que l’on déterminera  
2) Déterminer la fonction $f^{-1}$ pour tout $x$ dans $J$

### Exercice 10
Soit $f$ la fonction définie sur $[0; +\infty[ \; : \; f(x) = -\sqrt{x}$
1) Calculer $\lim_{x \to +\infty} f(x)$ puis étudier le sens des variations de $f$  
2) Soit $g$ la restriction de $f$ sur $I = [\frac{1}{4}; +\infty[$  
   a) Montrer que $g$ admet une fonction réciproque $g^{-1}$ définie sur $J$ que l’on déterminera  
   b) Déterminer la fonction $g^{-1}$ la fonction réciproque de $g$  
   c) Résoudre dans $I = [\frac{1}{4}; +\infty[$, l’équation (E) : $g(x) = 6$

### Exercice 11
Soit $h$ une fonction définie sur $]-1; 1[$ par : $h(x) = \frac{-2x}{1-x^2}$
1) Calculer $\lim_{x \to -1^+} h(x)$ et $\lim_{x \to 1^-} h(x)$ puis étudier les variations de $h$  
2) Montrer que $h$ admet une fonction réciproque $h^{-1}$ sur $J$ (à déte...)

### Exercice 12
1) a) Comparer $\sqrt{3}$ et $\sqrt{4}$  
   b) Mettre les nombres en ordre croissant : $\sqrt{2} ; \sqrt{3} ; \sqrt{4} \text{ et } 6$  
2) Résoudre dans $\mathbb{R}$ les équations suivantes (E1) : $(x - 3)^4 - 16 = 0$  
   (E2) : $3\sqrt{2} - 2x^2 + 3 = 0 \; \text{(E3): } 3\sqrt{3} - 2x - 1 = 0$  
3) Résoudre dans $\mathbb{R}$ les inéquations (I) : $(x - 3)^3 < 7 ; \; 2 - 3x < 0$

### Exercice 13
Calculer les limites suivantes :  
1) $\lim_{x \to 9} \sqrt{3x - 32}$ ;  
2) $\lim_{x \to +0} \sqrt{x+1} \cdot 3$ ;  
3) $\lim_{x \to -1} \sqrt{2 - x} - 1$ ;  
4) $\lim_{x \to 2^+} \frac{1}{x^2 - 2}$ ;  
5) $\lim_{x \to +\infty} \sqrt{3x^3 - 8x^2}$ ;  
6) $\lim_{x \to +\infty} x^3 - x^2 - 2$ ;  
7) $\lim_{x \to +\infty} \sqrt{3x^2 - x^2 + 5x^1}$

### Exercice 14
Montrer que :  
$$ \frac{\sqrt{105} \times \sqrt{62}}{\sqrt{152} \times \sqrt{24}} = 1 ; \; et \; \frac{3\sqrt{2} \times \sqrt{4}}{2\sqrt{1/82} \times \sqrt{3/\sqrt{32}}} = \frac{1}{2 \sqrt{2}} $$

### Exercice 15
Soit $g$ une fonction définie par : $f(x) = 2 - \sqrt{3x^2 - 1}$
1) Déterminer $D_f$ puis calculer $\lim_{x \to +\infty} f(x)$  
2) Soit $g$ la restriction de la fonction $f$ sur $I = [1; +\infty[$  
   a) Étudier le sens de variation de $g$ sur $I$  
   b) Montrer que $g$ admet une fonction réciproque $g^{-1}$ sur $J$ que l’on déterminera  
   c) Déterminer $g^{-1}(x)$ pour tout $x \in J$  
3) a) Montrer que l'équation $g(x) = x$ admet une unique solution $\alpha_tel\; 1 < \alpha < 2$  
   b) En utilisant la méthode de dichotomie, trouver un encadrement de $\alpha$ d’amplitude 0.5

### Exercice 16
Soit $f$ la fonction définie sur $\mathbb{R}$ par : $f(x) = x^3 - x^2 + 3x + 1$
1) a) Montrer que $f$ est strictement croissante sur $\mathbb{R}$  
   b) Montrer que $f$ admet une fonction réciproque $f^{-1}$ définie sur un intervalle $J$ à déterminer  
   c) Résoudre dans $\mathbb{R}$ l’équation : $f^{-1}(x) = 0$  
2) a) Montrer que l’équation $f(x) = 0$ admet une unique solution $\alpha$ dans $\mathbb{R}$ puis vérifier que $-\frac{1}{2} < \alpha < 0$  
   b) Calculer $f^{-1}(\frac{1}{4})$ puis en déduire un encadrement de $\alpha$ d’amplitude 0.25  
   c) Montrer que $\sqrt{\alpha + 1} = -\frac{2\alpha}{\alpha + 1}$  
   d) En déduire que $\alpha < -\frac{1}{4} < 0$  
   e) Résoudre dans $\mathbb{R}$ l’équation (E) : $x^9 - x^6 + 3x^3 + 1 = 0$
```

<!-- Page 37 -->

```markdown
# Exercic 01

Étudier la continuité des fonctions suivantes en $x_0$ :

1) 
$$
f(x) = \begin{cases} 
\frac{x - 4}{\sqrt{ - 2}} ; & x \neq 4 \\ 
f(4) = 4 
\end{cases}
$$

2) 
$$
f(x) = \begin{cases} 
\frac{2x + 4}{6 - 3x} ; & x \leq 1 \\ 
f(x) = \frac{x^3 - 6x^2 + 11x - 6}{x - 1} ; & x > 1 
\end{cases}
$$

3) 
$$
f(x) = \begin{cases} 
\frac{\sin(3x)}{12} ; & x > 0 \\ 
f(x) = \frac{\sqrt{-2 + \cos x}}{x^2} ; & x < 0 ; \, x_0 = 0 ; \, 4 \\ 
f(0) = \frac{\sqrt{3}}{12} 
\end{cases}
$$

**Solution :**

1) Soit la fonction $f$ définie par : 
$$
f(x) = \frac{x - 4}{\sqrt{-2}} ; \, x \neq 4 
$$ 
$$
f(4) = 4 
$$

Étudier la continuité de $f$ en $4$.

$$
\lim_{x \to 4} f(x) = \lim_{x \to 4} \frac{x - 4}{\sqrt{-2}} 
$$
$$
= \lim_{x \to 4} (x - 4)(\sqrt{-2} + 2) 
$$
$$
= \frac{(x - 4)}{\sqrt{-2}} 
$$
$$
= 4 
$$

Donc 
$$
\lim_{x \to 4} f(x) = f(4) 
$$
D’où $f$ est continue en $4$.

2) Soit $f$ une fonction définie par : 
$$
f(x) = \frac{2x + 4}{6 - 3x} ; \, x \leq 1 
$$
$$
f(x) = \frac{x^3 - 6x^2 + 11x - 6}{x - 1} ; \, x > 1 
$$

Étudier la continuité de $f$ en $1$. 

On a $f(1) = \frac{2 + 4}{6 - 3} = 2$.

$$
\lim_{x \to 1^{-}} f(x) = \lim_{x \to 1^{-}} \frac{x^3 - 6x^2 + 11x - 6}{x - 1}
$$
$$
= \lim_{x \to 1^{-}} (x - 1)(x^2 - 5x + 6) 
$$
$$
= 2 = f(1) 
$$

Donc 
$$
\lim_{x \to 1^{+}} f(x) = f(1) 
$$
D’où $f$ est continue à droite de $1$.

3) Soit la fonction $f$ définie par :
$$
f(x) = \lim_{x \to 0^{+}} f(x) = \lim_{x \to 0^{+}} \frac{\sin(3x)}{12} 
$$
$$
= \lim_{x \to 0^{+}} \frac{-\sqrt{3}}{12} 
$$
$$
= -\frac{\sqrt{3}}{12} = f(0) 
$$

Donc 
$$
\lim_{x \to 0^{+}} f(x) = f(0) 
$$
D’où $f$ est continue à droite de $0$.
```

<!-- Page 38 -->

```markdown
# Prof : fayssal
## Site web : www.elboukhtili.jimdofree.com
### Corrigés de série1 : Limite et continuité 2 Bac Sx Page 02

## Exercice 02

1) Soit $f$ une fonction définie sur $\mathbb{R}$ : 
$$ 
f(x) = \frac{\sin(\pi x)}{x - 1} ; \;\; x \neq 1 
$$ 
$f(3) = a$

Déterminer la valeur du réel $a$ pour que $f$ soit continue en 3.

2) Soit $f$ une fonction définie sur $\mathbb{R}$ par : 
$$ 
f(x) = \frac{x^3+x^2+x-a}{x - 1} ; \;\; x \neq 1 
$$ 
$f(1) = b$

Déterminer les réels $a$ et $b$ pour que $f$ soit continue en 1.

## Solution :

1) Soit $f$ une fonction définie sur $\mathbb{R}$ : 
$$ 
f(x) = \frac{\sin(\pi x)}{x - 1} ; \;\; x \neq 1 
$$ 
$f(1) = a$

Déterminer la valeur du réel $a$ pour que $f$ soit continue en 1, il faut que 
$$ 
\lim_{x \to 1} f(x) = f(1) = a 
$$ 
On pose : $X = x - 1$ donc $x = X + 1$, d'où : $ x \to 1 \; \Leftrightarrow \; X \to 0$

$$ 
\lim_{f(x)} = \lim_{x \to 1} f(x) = \lim_{x \to 1} \frac{\sin(\pi(x - 1))}{x - 1} 
$$ 

$$ 
= \lim_{x \to 0} \frac{X}{\sin(\pi X)} = \lim_{x \to 0} \frac{1}{\pi} = -1 \times \pi = -\pi = a 
$$

2) Soit $f$ une fonction définie sur $\mathbb{R}$ par : 
$$ 
f(x) = \frac{x^3+x^2+x-a}{x - 1} ; \;\; x \neq 1 
$$ 
$f(1) = b$

Déterminer les réels $a$ et $b$ pour que $f$ soit continue en 1.

$$ 
\lim_{x \to 1} \frac{x^3 + x^2 + x - a}{x - 1} = 0 
$$

Si $3 - a \neq 0$ alors 
$$ 
\lim_{x \to 1} f(x) = \lim_{x \to 1} \frac{(x - 1)(x^2 + 2x + 2)}{x - 1} = \lim_{x \to 1} (x^2 + 2x + 2) = 5 = f(1) = b 
$$

D'où $f$ est continue à gauche de 1.

$$ 
\lim_{x \to 1^{-}} f(x) = \lim_{x \to 1^{-}} \frac{x^2 - 1}{x - 1} = \lim_{x \to 1} = -2 = f(1) 
$$

Conclusion : $f$ est discontinue en 0.
```

<!-- Page 39 -->

```markdown
# Prof : fayssal  
Site web : www.elboutkhili.jimdofree.com  

## Exercice 03
Etudier la continuité de la fonction $f$ sur $I$ dans les cas suivants :  
1) $f(x) = x^3 + \sqrt{2}x^2 + x - 3$, $I = [0 ; 1]$  
2) $f(x) = \frac{x+1}{x^2+3}$, $I = [0; +\infty[$  
3) $f(x) = 2\sqrt{x} + x^3 + 3$, $I = [0; +\infty[$  
4) $f(x) = \sqrt{x^2 - x + 3}$, $I = [0; +\infty[$  

**Solution :**  
1) Montrer que $f : x \mapsto x^3 + \sqrt{2}x^2 + x - 3$ est continue sur $[0; 1]$  
La fonction $f : x \mapsto x^3 + \sqrt{2}x^2 + x - 3$ est continue sur $\mathbb{R}$, car c'est un polynôme, en particulier sur $[0 ; 1]$; car $[0; 1] \subset \mathbb{R}$  

2) Montrons que la fonction $f : x \mapsto 2\sqrt{x} + x^3 + 3$ est continue sur $[0; +\infty[$  
   - On a la fonction $u : x \mapsto 2\sqrt{x}$ est continue sur $[0; +\infty[$  
   - Et on a la fonction $v : x \mapsto x^3 + 3$ est continue sur $\mathbb{R}$, car c'est un polynôme en particulier sur $[0; +\infty[$  
   Donc la fonction $f = u + v$ est continue sur $[0; +\infty[$  

3) Montrons que la fonction $f : x \mapsto \frac{x+1}{x^2+3}$ est continue sur $\mathbb{R}$  
   1ère méthode :  
   $f$ est une fonction rationnelle donc elle est continue sur son domaine de définition qui est $\mathbb{R} \backslash \{x ; x^2 + 3 \neq 0 \}$  
   2ème méthode :  
   On a la fonction $u : x \mapsto x - 1$ est continue sur $\mathbb{R}$  
   - On a la fonction $v : x \mapsto x^2 + 3$ est continue sur $\mathbb{R}$, (polynôme) ;  
   - Et on a $\forall x \in \mathbb{R}$, $x^2 + 3 > 0$  
   Donc la fonction $f = \frac{u}{v}$ est continue sur $\mathbb{R}$  

4) Montrons que la fonction $f : x \mapsto \sqrt{x^2 - x + 3}$ est continue sur $\mathbb{R}$  
   On a la fonction $v : x \mapsto x^2 - x + 3$ est continue sur $\mathbb{R}$ (polynôme)  
   Et on a $(\forall x \in \mathbb{R})$, $x^2 - x + 3 > 0$; car le discriminant de $x^2 - x + 3$ est négatif  
   Donc $f = \sqrt{u}$ est continue sur $\mathbb{R}$  

---

## Exercice 04
Soit $f$ une fonction définie sur $[2 ; +\infty[$ par  
$$
f(x) = 
\begin{cases} 
\frac{3x^2 - 4x - 4}{x^2 - x - 2} ; & x > 2 \\ 
\sqrt{x^2 + 5 - 3} ; & 2 \leq x < 2 
\end{cases}
$$  

1) Montrer que $f$ est continue en 2.  
2) Montrer que $f$ est continue sur l'intervalle $]−2 ; +\infty[$  

**Solution :**  
1) Montrer que $f$ est continue en 2.  
$$ 
\lim_{x \to 2^+} f(x) = \lim_{x \to 2^+} \frac{3x^2 - 4x - 4}{x^2 - x - 2} 
$$  
$$ 
= \lim_{x \to 2^+} \frac{3x^2 - 4x - 4}{(x-2)(3x+2)} 
$$  
$$ 
= \lim_{x \to 2^+} \frac{(x-2)(x+1)}{(x-2)(3x+2)} 
$$  
$$ 
= \lim_{x \to 2^+} \frac{3x + 2}{x + 1} 
$$  
$$ 
= \frac{8}{3} 
$$  
$$ 
= f(2)  
$$  
Donc $f$ est continue à droite de 2.  

$$ 
\lim_{x \to 2^-} f(x) = \lim_{x \to 2^-} \sqrt{x^2 + 5 - 3} 
$$  
$$ 
= \sqrt{2^2 + 2 - 2} 
$$  
$$ 
= \lim_{x \to 2^-} (x^2 - 2)(\sqrt{x^2 + 5 + 3}) 
$$  
$$ 
= \lim_{x \to 2^-} (x - 2)(x^2 + 2) 
$$  
$$ 
= \lim_{x \to 2} (x - 2)(\sqrt{x^2 + 5 + 3}) 
$$  
```

<!-- Page 40 -->

```markdown
Prof : fayssal  
Site web : www.elboutkhili.jimdofree.com  
Corrigés de série 1 : Limite et continuité 2 Bac SX  
Page 04  

# Exercice 05  

Soient $f$ une fonction définie par $f(x) = \frac{3x - 5}{x - 2}$  
1) Déterminer $\mathcal{D}_f$ et calculer $\lim_{x \to +\infty} f(x)$, $\lim_{x \to -\infty} f(x)$ ; $\lim_{x \to 2^+} f(x)$  
2) Déterminer $f(-\infty), f(2), f(2, +\infty)$ et $f([3,4])$  

## Solution :  
Soient $f$ une fonction définie par $f(x) = \frac{3x - 5}{x - 2}$  
1) Déterminer $\mathcal{D}_f$ et calculer $\lim_{x \to +\infty} f(x)$, $\lim_{x \to -\infty} f(x)$ ; $\lim_{x \to 2^+} f(x)$  

$$
x \in \mathcal{D}_f \iff x - 2 \neq 0 \iff x \neq 2 
$$  
Donc $\mathcal{D}_f = ]-\infty; 2[ \cup ]2; +\infty[$  

$$
\lim_{x \to +\infty} f(x) = \lim_{x \to +\infty} \frac{3x - 5}{x - 2} = 3 
$$  

$$
\lim_{x \to -\infty} f(x) = \lim_{x \to -\infty} \frac{3x - 5}{x - 2} = 3 
$$  

$$
\lim_{x \to 2^+} f(x) = \lim_{x \to 2^+} \frac{3x - 5}{x - 2} = +\infty \; \text{car} \; x > 2 
$$  

$$
\lim_{x \to 2^-} f(x) = \lim_{x \to 2^-} \frac{3x - 5}{x - 2} = -\infty \; \text{car} \; x < 2 
$$  

2) Déterminer $f(-\infty), f(2), f(2, +\infty)$ et $f([3,4])$  

On a $f$ est dérivable sur $]-\infty; 2[ \; et \; ]2; +\infty[$ car c'est une fonction rationnelle  
Et pour tout $x \in \mathcal{D}_f$:  

$$
f'(x) = \frac{3 \cdot (x - 2) - (3x - 5) \cdot 1}{(x - 2)^2} = \frac{-6 + 5}{(x - 2)^2} = \frac{-1}{(x - 2)^2} < 0 
$$  

Donc $f$ est strictement décroissante sur $]-\infty; 2[ \; et \; ]2; +\infty[$  
$$
f(2; +\infty) = \lim_{x \to +\infty} f(x) = 3; +\infty 
$$  
$$
f(-\infty) = \lim_{x \to -\infty} f(x) = 3 
$$  
$$
f(2) = \lim_{x \to 2^-} f(x) = -\infty; \; f(3) = \frac{7}{2}; \; f(4) = 4 
$$  
```

<!-- Page 41 -->

```markdown
# Prof : fayssal  
Site web : www.elboutkhili.jimdofree.com  

## Exercise 06

1) Montrer que l’équation $\sqrt{x} + x^{2025} - 1 = 0$ admet une solution unique dans l’intervalle $[0; 1[$

2) Montrer que l’équation $\sin(x) + x + \frac{1}{2} = 0$, admet une solution unique $\alpha$ dans l’intervalle $\left[ -\frac{\pi}{6}, 0 \right]$

3) Montrons que l’équation $x^5 + x^3 + x = 1$ admet une unique solution $\alpha$ dans $\mathbb{R}$ puis vérifier que $0 < \alpha < 1$

4) Montrer que l’équation $x^3 - \frac{1}{x} - 7 = 0$, admet une solution unique $\alpha$ dans l’intervalle $[0, +\infty)$ puis vérifier que $\alpha \in \left[ \frac{3}{2}, 2 \right]$

### Solution :

1) Montrer que l’équation $\sqrt{x} + x^{2025} - 1 = 0$ admet une solution unique dans l’intervalle $[0; 1[$  
On pose pour tout $x \in [0; 1] : f(x) = \sqrt{x} + x^{2025} - 1$  
On a la fonction $u : x \mapsto \sqrt{x}$ est continue sur $[0; 1]$  
Et on a la fonction $v : x \mapsto x^{2025} - 1$ est continue sur $[0; 1]$, car c’est un polynôme  
D’où la fonction $f$ est continue sur $[0; 1]$ comme somme des fonctions continues,  
De plus $f(0) = -1$ et $f(1) = 0$  
Donc $f(0) \cdot f(1) < 0$  
La fonction $f$ est dérivable sur $]0; 1[$  
Alors $f'(x) = \frac{1}{2\sqrt{x}} + 2025x^{2024} > 0$  
Alors $f$ est strictement croissante sur $[0; 1]$.  
Donc d’après le théorème des valeurs intermédiaires, l’équation $f(x) = 0$ admet une unique solution dans l’intervalle $[0; 1[$  

2) Montrer que l’équation $\sin(x) + x + \frac{1}{2} = 0$, admet une solution unique $\alpha$ dans l’intervalle $\left[ -\frac{\pi}{6}, 0 \right]$  
On pose pour tout $x \in \left[-\frac{\pi}{6}, 0\right] : f(x) = \sin(x) + x + \frac{1}{2} = 0$  
On a la fonction $u : x \mapsto -\sin(x)$ est continue sur $\left[-\frac{\pi}{6}, 0 \right]$  
Et on a la fonction $v : x \mapsto x + \frac{1}{2}$ est continue sur $\left[-\frac{\pi}{6}, 0 \right]$  
Donc la fonction $f$ est continue sur $\left[-\frac{\pi}{6}, 0 \right]$ comme somme des fonctions continues,  
Et on a $f\left(-\frac{\pi}{6}\right) = -\frac{1}{2}$ et $f(0) = \frac{1}{2} > 0$  
La fonction $f$ est dérivable sur $\mathbb{R}$; et pour tout $x \in \mathbb{R}$ on a :  
$f'(x) = \cos(x) + 1 \geq 0 \text{ car } -1 \leq \cos(x) \leq 1$  
Alors $f$ est strictement croissante sur $\left[-\frac{\pi}{6}, 0\right]$  
Donc d’après le théorème des valeurs intermédiaires, l’équation $f(x) = 0$ admet une unique solution dans l’intervalle $\left[-\frac{\pi}{6}, 0\right]$  

3) Montrons que l’équation $x^5 + x^3 + x = 1$ admet une unique solution $\alpha$ dans $\mathbb{R}$ puis vérifier que $0 < \alpha < 1$  
On pose pour tout $x \in \mathbb{R} : f(x) = x^5 + x^3 + x - 1$  
$f$ est continue sur $\mathbb{R}$  
$f$ est dérivable sur $\mathbb{R}$ ; et pour tout $x \in \mathbb{R}$ on a :  
$f'(x) = 5x^4 + 3x^2 + 1 > 0$  
Donc $f$ est strictement croissante sur $\mathbb{R}$. Et de plus on a :  
$$ \lim_{x \to +\infty} f(x) = +\infty \quad \text{et} \quad \lim_{x \to -\infty} f(x) = -\infty $$  
Alors $f(\mathbb{R}) = \left] \lim_{x \to -\infty} f(x); \lim_{x \to +\infty} f(x) \right[ = \mathbb{R}$  
Donc $0 \in f(\mathbb{R})$ donc $f(x) = 0$ admet une unique solution $\alpha$ dans $\mathbb{R}$ vérifier que $0 < \alpha < 1$  
```


<!-- Page 42 -->

```markdown
# Corrigés de série 1 : Limite et continuité 2 Bac SX

4) Montrer que l'équation $x^3 - \frac{1}{x} - 7 = 0$, admet une solution unique $\alpha$ dans l'intervalle $]0, +\infty[$ puis vérifier que $\alpha \in \left[\frac{2}{3}, 2\right]$.

On pose pour tout $x \in ]0, +\infty[$ :
$$
f(x) = x^3 - \frac{1}{x} - 7
$$
- On a la fonction $u : x \mapsto x$ est continue sur $]0, +\infty[$.
- Et on a la fonction $v : x \mapsto x^3 - 7$ est continue sur $\mathbb{R}$, car c'est un polynôme en particulier sur $]0, +\infty[$.
Donc $f$ est continue sur $]0, +\infty[$.
- $f$ est dérivable sur $]0, +\infty[$ ; et $f'(x) = 3x^2 + \frac{1}{x^2} > 0$.

Donc $f$ est strictement croissante sur $]0, +\infty[$. Et de plus on a :
$$
\lim_{x \to +\infty} f(x) = \lim_{x \to +\infty} \left( x^3 - \frac{1}{x} - 7 \right) = +\infty
$$
$$
\lim_{x \to 0^+} f(x) = \lim_{x \to 0^+} \left( x^3 - \frac{1}{x} - 7 \right) = -\infty
$$
Alors $f(0, +\infty) = ]-\infty; +\infty[$ donc $0 \in f(\mathbb{R})$.

Donc $f(x) = 0$ admet une unique solution dans $]0, +\infty[$ vérifier que $\alpha \in \left[\frac{2}{3}, 2\right]$.

On a $f$ est continue sur $\left[\frac{2}{3}, 2\right]$ et strictement croissante sur $\left[\frac{2}{3}, 2\right]$.

Et on a :
$$
f\left(\frac{3}{2}\right) = \frac{27}{8} - 2 - 7 < 0 \quad \text{et} \quad f(2) = 8 - 7 - \frac{1}{2} > 0
$$
Donc $f\left(\frac{3}{2}\right) < 0$ donc $\alpha \in \left[\frac{2}{3}, 2\right]$.

## Exercice 07

Soit $f$ la fonction numérique définie sur $\mathbb{R}$ par : $f(x) = x^3 - 3x^2 - 5$ 
1) Etudier le sens des variations de $f$ sur $\mathbb{R}$.
2) Montrer que l'équation $f(x) = 0$ admet une seule solution $\alpha$ dans $\mathbb{R}$ puis vérifier que $\alpha \in [2; 4]$.
3) Par la méthode de dichotomie, donner un encadrement de $\alpha$ d’amplitude $0.5$.
4) Etudier le signe de $f(x)$ pour tout $x \in \mathbb{R}$.
```

<!-- Page 43 -->

```markdown
### 3) Par la méthode de dichotomie, donner un encadrement de $\alpha$ d’amplitude $0, 5$ 
On a le centre de l’intervalle $[2; 4]$ est $c = \frac{4 + 2}{2} = 3$ 
On a $f(c) = f(3) = -5$ ; Et on a $f(4) = 11$  
Donc $f(3) < f(4) < 0$, donc $3 < \alpha < 4$

Et on a l’amplitude de l’intervalle $[3; 4]$ est $l = 4 - 3 = 1$ 
On a le centre de l’intervalle $[3; 4]$ est $c = \frac{4 + 3}{2} = \frac{7}{2}$  
On a $f(c) = f\left(\frac{7}{2}\right) = 124,5$ ; Et on a $f(3) = -5$  
Donc $f(3) \times f\left(\frac{7}{2}\right) < 0$, donc $3 < \alpha < \frac{7}{2}$ 

Et on a l’amplitude de l’intervalle $[1; 0]$ est $l = 1 - \frac{7}{2} = -3 = 0, 5$

### 4) Etudier le signe de $f$ sur $\mathbb{R}$ 
On a $-5$ est une valeur maximale de $f$ sur $-\infty; 2 [$  
Donc $\forall x \in -\infty; 2[, f(x) < -5$  
Donc $\forall x \in ]-\infty; 2[, f(x) < 0$

Soit $x \in [2; \alpha]$ 
Donc $x \leq \alpha$ et on a $f$ est strictement croissante sur $[2; \alpha]$  
Donc $f(x) \leq f(\alpha)$  
Et on a $x$ solution de l’équation $f(x) = 0$ donc $f(\alpha) = 0$  
D’où $f(x) < 0$

Soit $x \in [\alpha; +\infty[$  
Donc $x \geq \alpha$ et on a $f$ est strictement croissante sur $[\alpha, +\infty[$  
Donc $f(x) \geq f(\alpha)$  
Et on a $x$ solution de l’équation $f(x) = 0$ donc $f(\alpha) = 0$  
D’où $f(x) \geq 0$

Le tableau de signe de $f$ sur $\mathbb{R}$ 
\[
\begin{array}{|c|c|c|c|}
\hline
x & -\infty & \alpha & +\infty \\
\hline
f(x) & - & 0 & + \\
\hline
\end{array}
\]
```

<!-- Page 44 -->

```markdown
# Prof : fayssal
Site web : www.elboutkhili.jimdofree.com

# Exercices

## Exercice 09
Soit $f$ une fonction définie sur $I = [1; +\infty[$ par : $f(x) = x^2 - 2x + 5$

1. Montrons que $f$ admet une fonction réciproque $f^{-1}$ définie sur un intervalle $J$ que l'on déterminera
2. Déterminer la fonction $f^{-1}$

### Solution :
1. la fonction $f$ est continue sur $[1; +\infty[$ (car c’est un polynôme) 
   - est dérivable sur $]1; +\infty[$ 
   - et on a pour tout $x \in ]1; +\infty[$ : $f'(x) = 2x - 2$ 
   - On a $x \in [1; +\infty[$ 
     - Donc $2x > 2 \quad \Rightarrow \quad 2x - 2 > 0$

  Donc $f$ est strictement croissante sur $[1; +\infty[$
  
  Alors la fonction $f$ admet une fonction réciproque $f^{-1}$ définie sur $I$ :
  $I = f(I) = f(1); \lim_{x \to +\infty} f(x) = [4; +\infty[$

2. Déterminer la fonction $f^{-1}$, la fonction réciproque de $f$

Avec $f$ défini sur $I = [1; +\infty[$ par : $f(x) = x^2 - 2x + 5$

Soit $x \in J = [4; +\infty[$ et $y \in I = [1; +\infty[$ tel que $y = f^{-1}(x)$, on a :
$$ y = f^{-1}(x) \Rightarrow f(y) = x $$
$$ \Rightarrow y^2 - 2y + 5 = x $$
$$ \Rightarrow y^2 - 2y + 5 - x = 0 $$
$$ \Rightarrow y^2 - 2y + (5 - x) = 0 $$

Soit $y = 1 \pm \sqrt{4 - x}$ ou $y = 1 - \sqrt{4 - x}$ (car $y - 1 > 0$)
$$ y = \sqrt{4 - 4} + 1 $$

Donc $f^{-1}(x) = \sqrt{x - 4} + 1$ pour tout $x \in [4; +\infty[$

## Exercice 10

Soit $f$ la fonction définie sur $[0; +\infty[$ par : $f(x) = x - \sqrt{x}$

1. Calculer $\lim_{x \to +\infty} f(x)$ puis étudier le sens des variations de $f$

2. Soit $g$ la restriction de $f$ sur $I = [\frac{1}{4}; +\infty[$
   a) Montrer que $g$ admet une fonction réciproque $g^{-1}$ définie sur $J$ que l’on déterminera
   b) Déterminer la fonction $g^{-1}$ la fonction réciproque de $g$
   c) Résoudre dans $I = [\frac{1}{4}; +\infty[ \quad \text{l'équation (E) : } g(x) = 6$

### Solution :
Soit $f$ la fonction définie sur $[0; +\infty[$ par : $f(x) = x - \sqrt{x}$

1. Calculer $\lim_{x \to +\infty} f(x)$ puis étudier le sens des variations de $f$

$$ \lim_{x \to +\infty} f(x) = \lim_{x \to +\infty} (x - \sqrt{x}) $$
$$ = \lim_{x \to +\infty} x(1 - \frac{1}{\sqrt{x}}) $$
$$ = \lim_{x \to +\infty} x(1 - \frac{\sqrt{x}}{x})^2 $$
$$ = \lim_{x \to +\infty} (1 - \frac{1}{\sqrt{x}}) $$
$$ = +\infty $$

Soit $x \in [0; +\infty[$ :
$$ f'(x) = 1 - \frac{1}{2\sqrt{x}} $$
$$ f'(x) = 1 - \frac{1}{2\sqrt{x}} > 0 $$
$$ \text{pour tout } x > 0 $$

Ainsi, $f$ est strictement croissante sur $[0; +\infty[$
```

<!-- Page 45 -->

```markdown
# Prof : fayssal
## Site web : www.elbouthkili.jimdofree.com
### Corrigés de série 1 : Limite et continuité 2 Bac SX

On a : $2 \sqrt{x} (2\sqrt{x} + 1) > 0$

- $f'(x) = 0 \Rightarrow 4x - 1 = 0$
$$
\Rightarrow x = \frac{1}{4}
$$

On dresse le tableau de variation de $f$

| $x$        | 0      | $\frac{1}{4}$ | $+\infty$ |
|------------|--------|---------------|-----------|
| $f'(x)$    | -      | 0             | +         |
| $f(x)$     | $f(0) = 0$ | $f\left(\frac{1}{4}\right) = -\frac{1}{4}$ | $+\infty$ |

## 2) a) Montrons que la restriction de $f$ sur $I = \left[\frac{1}{4}; +\infty\right[$ admet une fonction réciproque $g^{-1}$ définie sur $J$ que l'on déterminera ($g(x) = f(x) = x - \sqrt{x}$)

- la fonction $x \to x$ est continue sur $I = \left[\frac{1}{4}; +\infty\right[$
- la fonction $x \to -\sqrt{x}$ est continue sur $I = \left[\frac{1}{4}; +\infty\right[$

Donc la fonction $g$ est continue sur $I = \left[\frac{1}{4}; +\infty\right[$ (car elle est somme de deux fonctions continues sur)

D'après (1) on a $g$ est strictement croissante sur $I = \left[\frac{1}{4}; +\infty\right[$

Et on a vu que $g$ est continue sur $I = \left[\frac{1}{4}; +\infty\right[$

Alors la fonction $g$ admet une fonction réciproque $g^{-1}$ définie sur :

$$ J = g(I) = g\left(\left[\frac{1}{4}; +\infty\right[\right) $$

$$
= \left[g\left(\frac{1}{4}\right); \lim_{x \to +\infty} g(x)\right] 
= \left[-\frac{1}{4}; +\infty\right[
$$

$$
\Rightarrow \left( \sqrt{y} - \frac{1}{2} \right)^2 = y + \frac{1}{4}
$$

Ainsi, $\sqrt{y} = \sqrt{x + \frac{1}{4} + \frac{1}{2}}$

Donc $g^{-1}(x) = \left( x + \frac{1}{4} + \frac{1}{2} \right)^2$ pour tout $x \in J = [-\frac{1}{4}; +\infty[$

### c) Résoudre dans $I = \left[\frac{1}{4}; +\infty\right[$, l'équation (E) : $g(x) = 6 \Leftrightarrow x = g^{-1}(6)$

$$
\Leftrightarrow x =  \left( 6 + \frac{1}{4} + \frac{1}{2} \right)^2 = 9
$$
```

<!-- Page 46 -->

```markdown
# Prof : fayssal  
Site web : www.elbouthkili.jimdofree.com  

# Exercice 11

Soit $h$ une fonction définie sur ]−1; 1[ par : $h(x) = \frac{2x}{1−x^2}$  

1) Calculer $\lim_{x \to -1^+} h(x)$ et $\lim_{x \to 1^-} h(x)$ puis étudier les variations de $h$  
2) Montrer que $h$ admet une fonction réciproque $h^{-1}$ sur ]à déte...  
3) Déterminer $h^{-1}(x)$ pour tout $x \in J$  

## Solution :  
Soit $h$ une fonction définie sur ]−1; 1[ par : $h(x) = \frac{2x}{1−x^2}$  

1) Calculer $\lim_{x \to -1^+} h(x)$ et $\lim_{x \to 1^-} h(x)$ puis étudier les variations de $h$  
Tableau de signe de $1 - x^2$

| $x$     | 0        | -1       | 1    | +∞     |
|---------|----------|----------|------|--------|
| $1 - x^2$ | −        | 0        | +    | −      |

$$
\lim_{x \to -1^+} h(x) = \frac{2x}{1−x^2} = \frac{2 \cdot (-1)}{1 - (-1)^2} = -\infty
$$

$$
\lim_{x \to 1^-} h(x) = \lim_{x \to 1^-} \left(1 - x^2\right) = 0^+ \Rightarrow +\infty
$$

2) Montrer que $h$ admet une fonction réciproque $h^{-1}$ sur $J$ (à déte...

La fonction $h = \frac{2x}{1−x^2}$ est continue son domaine de définition qui est : ]−∞; −1[ ∪ ]−1; 1[ ∪ +∞[ car c'est une fonction rationnelle  
Donc la fonction $h$ est continue sur ]−1; 1[  

Soit $x \in ]−1; 1[$  
$$
h'(x) = \frac{2x}{(1−x^2)^2} = \frac{2}{(1−x^2)^2} > 0
$$

Donc $h$ est strictement croissante sur ]−1; 1[  
Alors la fonction $g$ admet une fonction réciproque $h^{-1}$ définie sur : $J = h(I)$
$$
= h(−1; 1[ = \left[ \lim_{x \to -1^+} h(x); \lim_{x \to 1^-} h(x) \right] = ]−∞; +∞[
$$  

3) Déterminer $h^{-1}(x)$ pour tout $x \in J$  
Soit $x \in J \in \mathbb{R}$ et $y \in ]−1; 1[$ tel que $y = h^{-1}(x) \Leftrightarrow h(y) = x$  
$$
\Leftrightarrow \frac{2y}{1 - y^2} = x
$$  

$$
\Leftrightarrow 2y = x(1 - y^2)  
\Rightarrow xy^2 + 2y - x = 0
$$  

Si $x = 0$ alors $y = 0$  
Donc $h^{-1}(0) = 0$

Si $x \neq 0$  
$$
\Delta = 4 + 4x^2 > 0
$$  

Donc $y = -\frac{2 + \sqrt{4 + 4x^2}}{2x} \quad \text{ou} \quad y = -\frac{2 - \sqrt{4 + 4x^2}}{2x}$$  

Donc $y_1(x) = \frac{1}{1 + x^2 - 1} \quad \text{ou} \quad y_2(x) = -\frac{1 + x^2 - 1}{x}$  

Sur $h \left( \frac{1}{2} \right) = \frac{1}{1 - \frac{1}{4}} = \frac{4}{3} \rightarrow$ donc $h^{-1} \left( \frac{4}{3} \right) = \frac{1}{2}$  

$$
y_1 \left( \frac{4}{3} \right) = \sqrt{1 + \frac{16}{9} - 1} = \sqrt{\frac{4}{3}} = \frac{2}{\sqrt{3}} = \frac{5}{3} - 1 = \frac{2}{3} = \frac{1}{2}
$$  

D'où $h^{-1}(x) = \frac{1}{1 + x^2 - 1} $ si $x \in \mathbb{R}^*$ et $h^{-1}(0) = 0$
```

<!-- Page 47 -->

```markdown
# Prof : fayssal
Site web : www.elbouthkili.jimdofree.com

## Exercice 12

1) a) Comparer $\sqrt{ \frac{3}{2}}$ et $\frac{3}{2}$

b) Mettre les nombres en ordre croissant : $\sqrt{2} ; \sqrt{3} ; \sqrt{4} et \sqrt{6}$

2) Résoudre dans $\mathbb{R}$ les équations suivantes $(E_1) : (x - 3)^4 - 16 = 0$ 

$(E_2) : \sqrt{x + 2 - 4 \sqrt{x + 2 + 3 = 0}$ 

$(E_3) : \sqrt{1- 2x = \sqrt{x + 1}$

**Solution :**

1) a) Comparer $\sqrt{ \frac{3}{2}}$ et $\frac{3}{2}$

On a : $\sqrt{3} = \frac{5 \sqrt{3}}{3} = \frac{15}{27}$ et $\frac{3}{2} = \frac{5 \sqrt{3}}{2} = \frac{15}{32}$

Donc : $\sqrt{ \frac{3}{2}} < \frac{3}{2}$

b) Mettre les nombres en ordre croissant : $\sqrt{2} ; \sqrt{3} ; \sqrt{4} et \sqrt{6}$

$$\sqrt{2} = \frac{2}{\sqrt{26}} = \frac{2}{64}$$

$$\sqrt{3} = \frac{4}{3 \sqrt{3}} = \frac{12}{81}$$

$$\sqrt{4} = \frac{4}{3 \sqrt{4}} = \frac{16}{64}$$

$$\sqrt{6} = \frac{6}{2 \sqrt{26}} = \frac{12}{64}$$

Donc : $\sqrt{6} < \sqrt{2} = \sqrt{4} < \sqrt{3}$

2) Résoudre dans $\mathbb{R}$ les équations suivantes $(E_1) : (x - 3)^4 - 16 = 0$

$(E) \iff (x - 3)^4 - 16 = 0$

$$\iff (x - 3)^4 = 16$$

$$\iff |x - 3| = 2 \text{ ou } x - 3 = -2$$

Donc $S = \{5 ; 1\}$

Les deux solutions sont dans $D_{E_2}$

Donc $S = \{-1 ; 3 - 2\}$

$(E_3) : \sqrt{1 - 2x} = \sqrt{x + 1}$

$x \in D_{E_3} \iff 1 - 2x \geq 0 \text{ et } x + 2 \geq 0$

$$\iff x \leq \frac{1}{2} \text{ et } x \geq -2$$

Donc le domaine de $(E_3)$ est : $D_{(E_3)} = \left [-2; \frac{1}{2} \right]$

$(E_3) \sqrt{1 - 2x} = \sqrt{x + 1}$

$$\sqrt{(1 - 2x)^2} = \sqrt{(x + 1)^3}$$
$$(1 - 2x)^2 = (x + 1)^3$$

$$-1 - 4x + 4x^2 = x^3 + 3x^2 + 3x + 1$$
 
$$x^3 - x^2 + 7x = 0 \iff x(x^2 - 7) = 0$$

$$x = 0 \text{ ou } x^2 - 7 = 0$$
 
Donc $S = \{0\}$
```

<!-- Page 48 -->

```markdown
# Prof : fayssal
Site web : www.elboutkhili.jimdofree.com

## Corrigés de série 1 : Limite et continuité 2 Bac SX
**Page 12**

3) Résoudre dans $\mathbb{R}$ les inéquations : $(x - 3)^3 < 7 ; \; 2 - \sqrt{x + 1} < 0$

$(I_1) : \; (x - 3)^3 < 7$

$(I_1) \Leftrightarrow \sqrt[3]{(x - 3)^3} < \sqrt[3]{7}$

$\Leftrightarrow \; x - 3 < \sqrt[3]{7}$

$\Leftrightarrow \; x < \sqrt[3]{7} + 3$

Ainsi $S = ]-\infty ; \sqrt[3]{7} + 3[$

$(I_2) : \; \sqrt{x + 1} < 0 \; \Rightarrow \; x \in D(I_2) \; x + 1 \geq 0$

Donc le domaine de $(I_2)$ est : $D(I_2) = [-1 ; +\infty[$

$(I_2) \Leftrightarrow 2 - \sqrt{x + 1} < 0$

$\Leftrightarrow \; 2 < \sqrt{x + 1}$

$\Leftrightarrow \; 4 < x + 1$

$\Leftrightarrow \; 3 < x$

$7 < x \; \text{et} \; x \in [7 ; +\infty[ = [7 ; +\infty[$

## Exercice 13

Calculer les limites suivantes :

1) $\lim_{x \to 9} \frac{\sqrt[3]{x - 2} - 2}{x - 9} \;$
2) $\lim_{x \to +\infty} \frac{\sqrt[3]{x^2 - 3}}{3} \;$
3) $\lim_{x \to 1} \frac{\sqrt{x - 1}}{x^2 - 2} \;$
4) $\lim_{x \to 1} \frac{\sqrt[3]{x - 2}}{x - 2} \;$
5) $\lim_{x \to +\infty} \frac{\sqrt[3]{x^3 + x - 8x}}{x} \;$
6) $\lim_{x \to +\infty} \sqrt[3]{\frac{x^5 + 5\sqrt{x + 1}}{x+1}} \;$
7) $\lim_{x \to +\infty} \frac{\sqrt[3]{3} x^2 - x}{x^2} \;$

**Solution :**

1) 
$$
\lim_{x \to 9} \frac{\sqrt[3]{x - 1} - 2}{x - 9} = \lim_{x \to 9} \frac{\sqrt[3]{x - 2} - \sqrt[3]{1}}{x - 9} 
$$
$$
= \lim_{x \to 9} \frac{(x-9)}{(x-9)(\sqrt[3]{1})} = \sqrt[3]{8} - 2 = 0, \, et \, \lim_{x \to 9} = 0 
$$

2)
$$
\lim_{x \to +\infty} \frac{\sqrt{x + 1}}{\sqrt{2} + 3} = \lim_{x \to +\infty} \frac{\sqrt{x + 1}}{x^2 - 3} = 0 
$$

Il s’agit d’une forme indéterminée du type "$\frac{+\infty}{+\infty}$".

3) 
$$
\lim_{x \to 1} \frac{\sqrt{x + 1}}{\sqrt{2} + 3} 
$$
$$
= \lim_{x \to 1} \frac{(6)(x + 1)}{(6)(x^2 + 3)^2} 
$$
$$
= 0 
$$

Car : 
$$
\lim_{x + 1} = \lim_{x \to +\infty} \frac{(x + 1)^3}{(x^2 + 3)^2} = 0 
$$

4) 
$$
\lim_{x \to 1} \frac{\sqrt[3]{x^2 - 1}}{x - 1} = \frac{\sqrt[3]{(x - 1)^2 - 1}}{(x - 1)^2 - 1} 
$$
$$
= \frac{(\sqrt[]{(x - 1)(x^2 + x + 1} - 1)}{(x - 1)(\sqrt{x + 1})} 
$$
$$
= \displaystyle\lim_{x \to 1} = \frac{(x^2) + \sqrt{8} + 2} = 0 
$$
```

<!-- Page 49 -->

```markdown
### Prof : fayssal  
**Site web :** www.elbouthkili.jimdofree.com  
**Corrigés de série1 : Limite et continuité 2 Bac SX**  
**Page 13**  

4) 
$$ \lim_{x \to 2^+} \sqrt{x} - 2 $$  
$$ \lim_{x \to 2^+} \sqrt{x} - 2 = \sqrt{1} - 2 = -1, \text{ et } \lim_{x \to 2^+} x - 2 = 0^+ $$  
Donc :  
$$ \lim_{x \to 2^+} \frac{\sqrt{x} - 1}{x - 2} = -\infty $$  

5)  
$$ \lim_{x \to +\infty} \frac{\sqrt{x^3 + x - 8x}}{x} $$  
$$ \lim_{x \to +\infty} \sqrt{x^3(1 + \frac{x}{x^3}) - 8x} $$  
$$ = \lim_{x \to +\infty} \frac{x \cdot \sqrt{1 + \frac{1}{x^2} - 8}}{x} $$  
$$ = \lim_{x \to +\infty} \sqrt{3(1 + \frac{1}{x^2} - 8)} $$  
$$ = 1 - 8 = -7 $$  

6)  
$$ \lim_{x \to +\infty} \frac{4\sqrt{x} + 5\sqrt{x} + 1}{\sqrt{3x} + \sqrt{5x} + 1} $$  
$$ \lim_{x \to 9} \sqrt{x} + \sqrt{x} + 1 = +\infty, \text{ et } \lim_{x \to 9} 3\sqrt{x} + \sqrt{x} + 1 = +\infty $$  
Il s'agit d'une forme indéterminée du type "∞/∞".  
$$ \lim_{x \to +\infty} \frac{4\sqrt{x} + \sqrt{x} + 1}{\sqrt{3x} + 1} $$  
$$ \lim_{x \to +\infty} \frac{(12\sqrt{x})^3 + \frac{(12\sqrt{x})^4}{1}} $$  
$$ = \lim_{x \to +\infty} (12\sqrt{x})^4 \left( 1 + (12\sqrt{x})^3 + 1 \right) $$  
$$ = \lim_{x \to +\infty} \sqrt{3x^3 + x^2 - x} $$  

7)  
$$ \lim_{x \to +\infty} \left( \sqrt[3]{\sqrt{x^3 + x^2 - x}} - x^3 \right) $$  
$$ = \lim_{x \to +\infty} \frac{\sqrt{x^3 + x^2 + 2}}{\sqrt{x^3 + x^2 + 2}} $$  
$$ = x^2 $$  
$$ \lim_{x \to +\infty} \frac{1}{x^2} $$  
$$ = 1 = \lim_{x \to +\infty} \sqrt[3]{3 + 1} = \frac{1}{3} $$  
```

<!-- Page 50 -->

```markdown
# Exercice 14

Montrer que 
$$
\frac{\sqrt[3]{105} \cdot \sqrt[3]{62}}{\sqrt[3]{152} \cdot \sqrt[3]{24}} = 10 
$$
et 
$$
\frac{\sqrt[3]{2x} \cdot \sqrt[4]{4}}{2 \cdot \sqrt[3]{\frac{1}{82}} \cdot \sqrt[4]{32}} = \frac{1}{2 \sqrt{2}}
$$

**Solution :**

$$
\frac{\sqrt[3]{105} \cdot \sqrt[3]{62}}{\sqrt[3]{152} \cdot \sqrt[3]{24}} = \frac{(2 \cdot 5)^{\frac{5}{3}} \cdot (2 \cdot 3)^{\frac{2}{3}}}{(3 \cdot 2)^{\frac{3}{3}} \cdot 2^{\frac{4}{3}}} 
$$
$$
= \frac{2^{\frac{5}{3}} \cdot 5^{\frac{5}{3}} \cdot 3^{\frac{2}{3}}}{3^{\frac{3}{3}} \cdot 2^{\frac{4}{3}}} 
$$
$$
= \frac{2^{\frac{1}{3}} \cdot 5^{\frac{5}{3}}}{3^{\frac{1}{3}}} 
$$
$$
= 10
$$

* 
$$
\frac{\sqrt[3]{2} \cdot \sqrt[4]{4}}{2 \cdot \sqrt[3]{\frac{1}{82}} \cdot \sqrt[4]{32}} 
= \frac{\sqrt[3]{2} \cdot \sqrt[4]{4}}{2 \cdot (2^{\frac{1}{3}})^{\frac{1}{3}} \cdot \sqrt[4]{32}} 
$$
$$
= \frac{\sqrt[3]{2} \cdot \sqrt[4]{4}}{2 \cdot (2^{\frac{1}{3}})^{\frac{1}{3}} \cdot 2^{\frac{4}{4}}} 
$$
$$
= 2
$$

# Exercice 15

Soit $f$ une fct définie par : $f(x) = 2 - \sqrt{3x^2 - 1}$

1) Déterminer $D_f$, puis calculer $\lim_{x \to +\infty} f(x)$ 

2) Soit $g$ la restriction de $f$ sur $I = [1; +\infty[$
   a) Etudier le sens de variations de $g$ sur $I$ 
   b) Montrer que $g$ admet une fonction réciproque $g^{-1}$ sur $J$ que l'on déterminera 
   c) Déterminer $g^{-1}(x)$ pour tous $x \in J$ 
   
3)a) Montrer que l'équation $g(x) = x$ admet une unique solution $\alpha$ tel que : $1 < \alpha < 2$ 
   b) En utilisant la méthode de dichotomie trouver un encadrement de $\alpha$ d'amplitude $0.5$. 

**Solution :**

Soit $f$ une fct définie par : $f(x) = 2 - \sqrt{3x^2 - 1}$ 

1) Déterminer $D_f$, puis calculer $\lim_{x \to +\infty} f(x)$ 

**Rappel :**
$$
|x| \geq a \iff -a \leq x \leq a \quad \text{ou} \quad x \geq 0 \text{ avec } a > 0
$$
$$
|x| \leq a \iff -a \leq x \leq a 
$$

$$
x \in D_f \iff x^2 - 1 \geq 0 \iff |x| \geq 1 \iff x \geq 1
$$

Donc : $D_f = [-\infty; -1] \cup [1; +\infty]$ 

$$
\lim_{x \to +\infty} f(x) = \lim_{x \to +\infty} (2 - \sqrt{3x^2 - 1}) = -\infty \quad \text{car } \lim_{x \to +\infty} x^2 - 1 = +\infty 
$$

2) Soit $g$ la restriction de $f$ sur $I = [1; +\infty[$ $ 
$$
\text{Soient } x,y \in [1; +\infty[ \text{ tel que : } x < y 
$$
$$
\Rightarrow x^2 < y^2 \Rightarrow x^2 - 1 < y^2 - 1 
$$
$$
\Rightarrow \sqrt{3x^2 - 1} < \sqrt{3y^2 - 1} \Rightarrow  g(x) > g(y)
$$

D’où $g$ est strictement décroissante sur $[1; +\infty[$.
```

<!-- Page 51 -->

```markdown
b) Montrer que $g$ admet une fonction réciproque $g^{-1}$ sur $J$ que l'on déterminera
* La fonction $x: \to x^2 - 1$ est continue sur $I = [1; +\infty[$
Et $\forall x \in [1; +\infty[$ : $x^2 - 1 \geq 0$

Donc la fonction $x: \to \sqrt{x^2 - 1}$ est continue sur $I = [1; +\infty[$
D'où $g: x \to 2 - 3\sqrt{x^2 - 1}$ est continue sur $[1; +\infty[$ 
La fonction est strictement décroissante sur $[1; +\infty[$
Donc $g$ admet une fonction réciproque $g^{-1}$ sur $J$

c) Déterminer $g^{-1}(x)$ pour tous $x \in J$

Soit $x \in [-\infty; 2]$ cherchons $y \in [1; +\infty[$ tel que $y = g^{-1}(x)$ ; 
$y = g^{-1}(x) \Rightarrow g(y) = x$
$$
\Rightarrow 2 - 3y^2 - 1 = x 
\Rightarrow 3y^2 - 1 = 2 - x 
\Rightarrow \left(\sqrt{3y^2 - 1}\right)^2 = (2 - x)^3; 
$$
$$
y^2 = 1 - (2 - x)^3 
\Rightarrow y = \sqrt{(2 - x)^3 + 1} ; \quad y \in [1; +\infty[
$$

D'où : $g^{-1}(x) = \sqrt{(2 - x)^3 + 1}$ pour tout $x \in [-\infty; 2]$

3)a Montrer que l'équation $g(x) = x$ admet une unique solution $\alpha$ tel que $1 < \alpha < 2$
Considérons la fonction $h$ définie par $h(x) = g(x) - x$ 
La fonction $g$ est continue sur $[1; +\infty[$

Et la fonction $x: \to x$ est continue sur $[1; +\infty[$ 
D'où la fonction $h$ est strictement décroissante sur $[1; +\infty[$
Car c'est une somme de deux fonctions strictement décroissante sur $[1; +\infty[$

$$
h(1) = g(1) - 1 = 2 - 1 = 1 > 0 
$$
$$
h(2) = g(2) - 2 = 1 - 2 = -1 < 0 
$$
Donc $h(1) \times h(2) < 0$

D'où l'équation $h(x) = 0$ admet une unique solution $\alpha$ tel que $1 < \alpha < 2$.
b) En utilisant la méthode de dichotomie trouver un encadrement de $\alpha$ d'amplitude 0.5
On a $1 < \alpha < 2$

Le centre de l’intervalle $[1; 2]$ est $c = \frac{1+2}{2} = \frac{3}{2}$
Au $h(c) = h(\frac{3}{2}) = \frac{1}{6}$ ; 
Et on a $h(1) = -1$

Donc $h(\frac{3}{2}) \times h(1) < 0 ;$
Donc $1 < \alpha < \frac{3}{2}$ et on a l’amplitude $l = \frac{3}{2} - 1 = 0$
```

<!-- Page 52 -->

```markdown
## Prof : fayssal
### Site web : www.elboutkhili.jimdofree.com

# Exercise 16

Soit $f$ la fonction définie sur $\mathbb{R}$ par : $f(x) = x^3 - x^2 + 3x + 1$

1. a) Montrer que $f$ est strictement croissante sur $\mathbb{R}$  
   b) Montrer que $f$ admet une fonction réciproque $f^{-1}$ définie sur un intervalle $J$ à déterminer  
   c) Résoudre dans $\mathbb{R}$ l’équation : $f^{-1}(x) = 0$

2. a) Montrer que l’équation $f(x) = 0$ admet une unique solution $\alpha$ dans $\mathbb{R}$ puis vérifier que $-\frac{1}{2} < \alpha < 0$  
   b) Calculer $f\left(-\frac{1}{4}\right)$ puis en déduire un encadrement de $\alpha$ d’amplitude $0,25$  
   c) Montrer que $\sqrt{ x + 1} = -\frac{2\alpha}{\alpha + 1} - \frac{1}{4\sqrt{2}}$  
   d) En déduire que $\alpha < -\frac{1}{4}$ 

3. Résoudre dans $\mathbb{R}$ l’équation $(E) : x^9 - x^6 + 3x^3 + 1 = 0$

## Solution 

Soit $f$ la fonction définie sur $\mathbb{R}$ par : $f(x) = x^3 - x^2 + 3x + 1$

1. a) Montrer que $f$ est strictement croissante sur $\mathbb{R}$  
   La fonction est dérivable sur $\mathbb{R}$ car c’est un polynôme, et pour tout $x$ dans $\mathbb{R}$ on a $f'(x) = 3x^2 - 2x + 3$  
   On a $\Delta = -4 - 4 \times 3 = -32 < 0$  
   Donc le signe de $3x^2 - 2x + 3$ est le signe de $a = 3 > 0$  
   Donc $f'(x) = 3x^2 - 2x + 3 > 0$ pour tout $x \in \mathbb{R}$  
   Donc $f$ est strictement croissante sur $\mathbb{R}$  

   b) Montrer que $f$ admet une fonction réciproque $f^{-1}$ définie sur $J$ :  
   * La fonction $f$ est continue sur $\mathbb{R}$ (Polynôme)  
   * La fonction $f$ est strictement croissante sur $\mathbb{R}$  
   D’où $f$ admet une fonction réciproque $f^{-1}$ définie sur $J$ et :  
   $$ J = f(\mathbb{R}) = \lim_{x \to -\infty} f(x); \lim_{x \to +\infty} f(x) = \mathbb{R} $$

   c) Résoudre dans $\mathbb{R}$ l’équation : $f^{-1}(x) = 0$  
   $$ f^{-1}(x) = 0 \iff f(f^{-1}(x)) = f(0) $$  
   $$ \iff x = f(0) $$  
   Donc $x = 1$  

2. a) Montrer que l’équation $f(x) = 0$ admet une unique solution $\alpha$ dans $\mathbb{R}$  
   * La fonction $f$ est continue sur $\mathbb{R}$ car c’est un polynôme  
   * La fonction $f$ est strictement croissante sur $\mathbb{R}$  
   $f(0) = 1 \text{ et } f\left(-\frac{1}{2}\right) = -\frac{1}{4} - \frac{3}{4} = -\frac{7}{8} < 0$  
   Donc $-\frac{1}{2} < \alpha < 0$  

   b) Calculer $f\left(-\frac{1}{4}\right)$ puis en déduire un encadrement de $\alpha$ d’amplitude $0,25$  
   $$ f\left(-\frac{1}{4}\right) = -\frac{1}{4} = -\frac{1}{64} + 3 + 1 = \frac{-1 - 4 - 48 + 64}{64} = \frac{10}{64} > 0 $$  
   Donc $f\left(-\frac{1}{2}\right) < f\left(-\frac{1}{4}\right) < 0$  
   Donc $-\frac{1}{2} < \alpha < -\frac{1}{4}$ 
```

<!-- Page 53 -->

```markdown
### Prof : fayssal
Site web : www.elbouthkili.jimdoofree.com

### Corrigés de série 1 : Limite et continuité 2 Bac SX
#### Page 17

c) Montrer que $\sqrt{\alpha + 1} = -\frac{2\alpha}{\alpha + 1}$

Soit $f(\alpha) = 0 \iff \alpha^3 - \alpha^2 + 3\alpha + 1 = 0$
$$ \iff \alpha^3 - \alpha^2 + 4\alpha + 3 + 1 = 4\alpha^2 $$
$$ \iff \alpha^3 + 3\alpha^2 + 3\alpha + 1 = 4\alpha^2 $$
$$ \iff (\alpha + 1)^3 = 4\alpha^2 $$
$$ \iff \alpha + 1 = \frac{4\alpha^2}{(\alpha + 1)^2} $$
$$ \iff \sqrt{\alpha + 1} = \frac{2|\alpha|}{\alpha + 1} $$
$$ \iff \sqrt{\alpha + 1} = -\frac{2\alpha}{\alpha + 1} \quad \text{car } \alpha < 0 $$

d) En déduire que $\alpha < -\frac{1}{4\sqrt{2}}$

On a $\sqrt{\alpha + 1} = -\frac{2\alpha}{\alpha + 1}$
Donc $\alpha + 1 = -\frac{2\alpha^2}{(\alpha+1)^2}$
Donc $(\alpha + 1)^3 = 4\alpha^2$

D'autre part on a $-\frac{1}{2} < \alpha < 1$

Donc $\frac{1}{2} < \alpha + 1$

Donc $\frac{1}{8} < 4\alpha^2$

Donc $\frac{1}{32} < \alpha^2$

Donc $|\alpha| < 1$

Donc $-\frac{1}{4\sqrt{2}} < -\alpha \quad \text{car } \alpha < 0$

Alors $\alpha < -\frac{1}{4\sqrt{2}}$

3) Résoudre dans $\mathbb{R}$ l'équation $(E) : x^9 - x^6 + 3x^3 + 1 = 0$
$$ \iff (x^3)^3 - (x^3)^2 + 3x^3 + 1 = 0 $$
$$ \iff X^3 - X^2 + 3X + 1 = 0 \quad \text{avec } X = x^3$$

$$ \iff f(X) = 0 \quad \text{avec } X = x^3 $$
$$ \iff X = \alpha \quad \text{avec } X = x^3 $$
$$ \iff x^3 = \alpha \quad ; \quad \alpha < 0 $$
$$ \iff (-x)^3 = -\alpha \quad ; \quad \alpha < 0 $$
$$ \iff -x = \sqrt[3]{-\alpha} $$
$$ \iff x = -\sqrt[3]{-\alpha} $$
$$ \iff x = -\sqrt[3]{-\alpha} $$

Donc $S = \{-\sqrt[3]{-\alpha}\}$
```

<!-- Page 54 -->

```markdown
# Résumé de cours 1
## Dérivabilité d'une fonction

### Plan de chapitre 2 : Dérivabilité d'une fonction
- Cours détaillé
- Résumé de cours
- Série d'exercices
- Correction détaillée des exercices

Collection FMATHS  
Prof fayssal  
06813999067  
www.elboutkhili.jimdofree.com
```

<!-- Page 55 -->

```markdown
# Prof : Fayssal
### Résumé de cours : Dérivabilité d’une fonction $(L \in \mathbb{R})$

A) Dérivabilité d’une fonction au point d’abscisse $a$

$$ 
\lim_{x \to a} \frac{f(x) - f(a)}{x - a} = l \quad \text{alors la fonction } f \text{ est dérivable en } a \text{ et } f'(a) = l 
$$

$$ 
\lim_{x \to a^+} \frac{f(x) - f(a)}{x - a} = l \quad \text{alors la fonction } f \text{ est dérivable à droite de } a 
$$

$$ 
\lim_{x \to a^-} \frac{f(x) - f(a)}{x - a} = l \quad \text{alors la fonction } f \text{ est dérivable à gauche de } a 
$$

**Propriété :** Si $f'_{d}(a) = f'_{g}(a)$ alors la fonction $f$ est dérivable en $a$.

B) Interprétation géométrique :
1) Si $f$ est dérivable en $a$ alors la courbe (Cf) admet une droite tangente au point $A(a ;f(a))$ d’équation : 
$$ y = f'(a)(x - a) + f(a) $$

2) Si $f$ est dérivable à gauche de $a$ (Cf) admet une demi-tangente au point $A(a ;f(a))$ d’équation : 
$$ y = f'_{d}(a)(x - a) + f(a) \quad \text{telle que } x > a $$

3) Si $f$ est dérivable à droite de $a$ (Cf) admet une demi-tangente au point $A(a ;f(a))$ d’équation : 
$$ y = f'_{g}(a)(x - a) + f(a) \quad \text{telle que } x < a $$

4) non dérivable en $a$ : (Cf) admet en $A$ une Demi-tangente verticale
- $$ \lim_{x \to a^-} \frac{f(x) - f(a)}{x - a} = +\infty $$ alors la courbe (Cf) de $f$ admet au point $A(a ;f(a))$ une demi-tangente verticale dirigée vers le haut
- $$ \lim_{x \to a^+} \frac{f(x) - f(a)}{x - a} = -\infty $$ alors la courbe (Cf) de $f$ admet au point $A(a ;f(a))$ une demi-tangente verticale dirigée vers le bas

**Propriété :** (lien entre dérivabilité et continuité)  
Si la fonction $f$ est dérivable sur l’intervalle $I$ alors elle est continue sur $I$.

C) Dérivabilité de fonction réciproque $f^{-1}$ en point $b$ avec $b = f(a)$  ; $f'(a) \neq 0$  
Si $f$ est dérivable en $a$ et $f'(a) \neq 0$  
Alors  
$$ f^{-1} \text{ est dérivable en } b ; \text{ et on a : } (f^{-1})'(b) = \frac{1}{f'(a)} $$

# Dérivées des fonctions usuelles
$u$ et $v$ deux fonctions dérivables sur un intervalle $I$ et $k$ une constante

la fonction $f$

1) $f(x) = k$  
   Condition $D_f = D_f = \mathbb{R}$  
   Dérivée $f'(x) = 0$

2) $f(x) = kx$  
   Condition $D_f = D_f = \mathbb{R}$  
   Dérivée $f'(x) = k$ 

3) $f(x) = x^n ; (n \in \mathbb{N}^*)$  
   Condition $D_f = D_f = \mathbb{R}$  
   Dérivée $f'(x) = n x^{n-1}$ 

4) $f(x) = \frac{1}{x}$  
   Condition sur $]0; +\infty[$ ou $]-\infty; 0]$  
   $D_f = \mathbb{R}^+$  
   Dérivée $f'(x) = -\frac{1}{x^2}$ 

5) $f(x) = \sqrt{x}$  
   Condition $D_f = [0; +\infty[$  
   Dérivée $f'(x) = \frac{1}{2\sqrt{x}}$ 

6) $f = u + v$  
   Condition $D_f = D_f = I$  
   Dérivée $f' = u' + v'$ 

7) $f = ku$  
   Condition $D_f = D_f = I$  
   Dérivée $f' = ku'$

8) $f = u.v$  
   Condition $D_f = D_f = I$  
   Dérivée $f' = u'v + u.v'$ 

9) $f(x) = \frac{u}{v}$  
   $v \neq 0$  
   Condition $D_f = D_f = I$  
   Dérivée $u'.v - u.v' = \frac{u'.v - u.v'}{v^2}$ 

10) $f(x) = \frac{1}{v}$  
    $v \neq 0$  
    Condition $D_f = D_f = I$  
    Dérivée $f' = -\frac{v'}{v^2}$ 

11) $f(x) = \sqrt{u}$  
    Condition $u > 0$  
    Dérivée $f' = \frac{u'}{2\sqrt{u}}$ 

12) $f(x) = \sqrt[3]{u}$  
    Condition $u > 0$  
    Dérivée $f' = \frac{u'}{3\sqrt[3]{u^2}}$ 

13) $f(x) = u^n$  
    Condition $D_f = D_f = I$  
    Dérivée $f' = n.u^{n-1}$ 

14) $f(x) = \sin(x)$  
    Condition $D_f = D_f = \mathbb{R}$  
    Dérivée $f'(x) = \cos(x)$ 

15) $f(x) = \cos(x)$  
    Condition $D_f = D_f = \mathbb{R}$  
    Dérivée $f'(x) = -\sin(x)$ 

16) $f(x) = \tan(x)$  
    Condition $D_f = D_f = I ; x \neq \frac{\pi}{2} + k\pi, k \in \mathbb{Z}$  
    Dérivée $f'(x) = 1 + \tan^2(x)$ 

17) $f(x) = \sin(ax + b)$  
    Condition $D_f = D_f = \mathbb{R}$  
    Dérivée $f'(x) = a\cos(ax + b)$ 

18) $f(x) = \cos(ax + b)$  
    Condition $D_f = D_f = \mathbb{R}$  
    Dérivée $f'(x) = -a\sin(ax + b)$ 
```

<!-- Page 56 -->

```markdown
# Niveau : Deuxième bac sciences PC /SVT /STE

## Série corrigée 2 : 
### Dérivable d'une fonction

### Plan de chapitre 2 : Dérivable d'une fonction
- Cours détaillé
- Résumé de cours
- Série d’exercices
- Correction détaillée des exercices

admin  
Prof fayssal  
06813999067  
www.elbouthkili.jimdo.free.com
```

<!-- Page 57 -->

```markdown
# prof : fayssal
Site web : www.elboutkhili.jimdo.free

## Série 2 : Dérivabilité d'une fonction ; 2 Bac sc
Page 01

### Exercice 01
Soit $f$ la fonction numérique définie par :
$$
f(x) = \frac{x^2 - 6x + 5}{x - 5} ; \, x \ne 5 \\
f(5) = 4
$$
1) Etudier la continuité de $f$ en $x_0 = 5$  
2) Montrer que $f$ est dérivable en $x_0 = 5$  
3) Déterminer l'équation (T) la tangente à (Cf) en 5  

### Exercice 02
Soit la fonction $f$ définie sur $\mathbb{R}$ par :
$$
f(x) = 
\begin{cases} 
x^2 + \frac{1}{x} & si \, x \ge 1 \\
f(x) = x^3 - 2x + 1 & si \, x < 1 
\end{cases}
$$
Etudier la dérivabilité de $f$ en $a=1$ puis donner une interprétation géométrique de chaque résultat obtenu  

### Exercice 03
Déterminer $D_f$ puis calculer $f^{\prime}(x)$
1) $f(x) = (2x^2 - 5x)(3x - 2) ;$  
2) $f(x) = \frac{6x-5}{x^2+1}$  
3) $f(x) = \sqrt[3]{x^2 + 2x + 1};$  
4) $f(x) = (2x^2 + 3x - 3)^4$  
5) $f(x) = \sqrt[3]{x} ;$  
6) $f(x) = \sqrt[4]{x^5} ;$  
7) $f(x) = \frac{1}{4} + \cos^2(x)$  

### Exercice 04
Soit $f$ une fonction telle que $f(x) = x - 2\sqrt{x}$
1) Déterminer $D_f$ et calculer $\lim_{x \to +\infty} f(x)$  
2) a) Etudier la dérivabilité de $f$ à droite de 0  
b) Donner une interprétation géométrique  
3) a) Déterminer $f^{\prime}$ puis étudier les variations de $f$  
b) Dresser le tableau de variations de $f$  

4) Soit $g$ la restriction de $f$ sur $I = [1, +\infty[$  
a) Montrer que $g$ admet une fonction réciproque $g^{-1}$ définie sur un intervalle $]a, b[$ à déterminer  
b) Déterminer $g^{-1}(x)$ pour tout $x \in E$  

### Exercice 05
Soit $f$ la fonction définie sur $I = [1, +\infty[$ par :
$$
f(x) = x^3 - 3x - 3
$$
1) Montrer que $f$ admet une fonction réciproque $f^{-1}$ définie sur un intervalle $]a, b[$ à déterminer  

### Exercice 06
Soit $f$ une fonction définie sur $\mathbb{R}$ par :
$$
f(x) = \frac{x^3 - 1}{x^3 + 1} ; \, x \ge 1
$$
$$
f(x) = x - 1 + 2\sqrt{1-x} ; \, x < 1
$$
1) Calculer $\lim_{x \to +\infty} f(x)$ puis montrer que : $\lim_{x \to -\infty} f(x) = -\infty$  
2) a) Etudier la dérivabilité de $f$ à droite de 1 puis interpréter......  
b) Montrer que $f$ est strictement croissante sur $[1, +\infty[$  
3) a) Montrer que : $\forall x \in ]-\infty, 1] ; f'(x) = \frac{-x}{\sqrt{1 - x}(1 + \sqrt{1 - x})}$  
b) Dresser le tableau de variations de $f$ sur $\mathbb{R}$  

4) Soit $g$ la restriction de $f$ sur $I = [1, +\infty[$  
a) Montrer que $g$ admet une fonction réciproque $g^{-1}$ définie sur un intervalle $]a, b[$ que l'on déterminera  
b) Déterminer $g^{-1}(x)$ pour tout $x \in J$  

### Exercice 07
Soit $f$ la fonction définie sur $I = [0, +\infty[$ par : $f(x) = 3\sqrt{x} + 1 - x$
1) Calculer $\lim_{x \to +\infty} f(x)$ puis étudier le sens des variations de $f$  
2) Montrer que l'équation $f(x) = 0$ admet une solution unique dans l'intervalle $]5,6[$  
3) a) Montrer que l'équation $f(x) = x$ admet une solution unique dans l'intervalle $[2, 3]$  
4) a) Montrer que $f$ admet une fonction réciproque $f^{-1}$ définie sur un intervalle $]a, b[$  
b) Montrer que $f^{-1}$ est dérivable en $\alpha$ et $(f^{-1})^{\prime}(\alpha) = \frac{4\alpha^2}{9 - 4\alpha^2}$
```

<!-- Page 58 -->

```markdown
# Prof : fayssal  
## Site web : www.elboutkhili.jimdofree.com  
### Corrigés de série 2 : Dérivabilité ; 2 bac BIOF  
### Page 01

## Exercic 01
Soit $f$ la fonction numérique définie par :  
$$ f(x) = \frac{x^2 - 6x + 5}{x - 5} ; x \neq 5 $$  
$f(5) = 4$

1) Etudier la continuité de $f$ en $x_0 = 5$  
2) Montrer que $f$ est dérivable en $x_0 = 5$  
3) Déterminer l’équation de $(T)$ la tangente à $(C_f)$ en 5  

### Solution :  
1) Etudier la continuité de $f$ en $x_0 = 5$  
$$ \lim_{x \to 5} f(x) = \lim_{x \to 5} \frac{x^2 - 6x + 5}{x - 5} = \lim_{x \to 5} \frac{x - 5}{(x - 5)(x - 1)} = \lim_{x \to 5} x - 1 = 4 $$  
Donc $\lim_{x \to 5} f(x) = f(5)$  

2) Montrer que $f$ est dérivable en $x_0 = 5$  
$$ f(x) - f(5) = \frac{x^2 - 6x + 5 - 4}{x - 5} = \frac{x - 5}{(x - 5)} = 1 \in \mathbb{R} $$  
Donc la fonction $f$ est dérivable en 5 et $f'(5) = 1$

3) Déterminer l’équation $(T)$ de la tangente à $(C_f)$ en 5  
La droite $(T)$ d'équation $y = f'(5)(x - 5) + f(5)$  
Donc : $(T): y = x - 1$

---

## Exercic 02
On considère la fonction $f$ définie sur $\mathbb{R}$ par :  
$$ f(x) = x^2 + \frac{1}{x} \quad \text{si } x \geq 1 $$  
$$ f(x) = x^3 - 2x + 1 \quad \text{si } 1 < x < 1 $$  

Etudier la dérivabilité de $f$ en $a=1$ puis donner une interprétation géométrique de chaque résultat obtenu.

### Solution :
$$ f(x) - f(1) = \lim_{x \to 1^+} \frac{x^2 + \frac{1}{1} - 2}{x - 1} = \lim_{x \to 1^+} \frac{x^2 - 1}{x - 1} = \lim_{x \to 1^+} (x + 1) = 2 $$  
D’où la fonction $f$ est dérivable à droite en 1. et $f'(1) = 1$  

**Interprétation géométrique**  
Donc la courbe representative de $f$ admet une demi-tangente  
$(T)$ d'équation $(T): y = f'(1)(x - 1) + f(1) ; x > 1$  
$(T): y = x + 1 ; x > 1$

**Dérivabilité à gauche en $a=1$**  
$$ f(x) - f(1) = \lim_{x \to 1^-} \frac{x^3 - 2x + 1 - 1}{x - 1} = \lim_{x \to 1^-} \frac{x^3 - 2x}{x - 1} = \lim_{x \to 1^-} \frac{x^3 - 2x - (0)}{x - 1} = \infty $$  
D’où la fonction $f$ n’est pas dérivable à gauche en 1.  

**Interprétation géométrique**  
La courbe representative de $f$ admet une demi-tangente verticale à gauche en point d’abscisse 1, dirigée vers le bas.

### Conclusion : 
la fonction $f$ n’est pas dérivable en $a=1$  
```

<!-- Page 59 -->

```markdown
# Exercic 03
Montrer que $f$ est dérivable sur $D_f$ puis calculer $f'(x)$

1) $f(x) = (2x^2 - 5x)(3x - 2) ;$ 
2) $f(x) = \frac{6x-5}{x^2+1}$
3) $f(x) = \sqrt{3x^2 + 2x + 1}$
4) $f(x) = (2x^2 + 3x - 3)^4$
5) $f(x) = \frac{1}{\sqrt{x}};$
6) $f(x) = \frac{4}{5}x^5;$
7) $f(x) = \sqrt[4]{1 + \cos^2(x)}$

## Solution

1) $f(x) = (2x^2 - 5x)(3x - 2)$ 
$f$ est dérivable sur $\mathbb{R}$ car c'est une polynome 
$$f'(x) = u'(x)v(x) + u(x)v'(x)$$
$$= (4x - 5)(3x - 2) + (2x^2 - 5x) \cdot 3$$
$$= 12x^2 - 8x - 15x + 10 + 6x^2 - 15x$$
$$= 18x^2 - 38x + 10$$

2) $f(x) = \frac{6x-5}{x^2+1};$ $f$ est dérivable sur $\mathbb{R}$ (c'est un quotient de deux fonctions dérivables sur $\mathbb{R}$ et $(\forall x \in \mathbb{R}): x^2 + 1 \neq 0)$
$$f(x)=\frac{u(x)}{v(x)}$$ avec $u(x) = 6x - 5$ et $v(x) = 6$
$$v'(x) = x^2 + 1 \Rightarrow v'(x) = 2x$$

Donc : 
$$f'(x) = \frac{u'(x)v(x) - u(x)v'(x)}{v(x)^2}$$
$$= \frac{6(x^2+1) - (6x-5)(2x)}{(x^2+1)^2}$$
$$= \frac{6x^2 + 6 - 12x^2 + 10x}{(x^2+1)^2}$$
$$= \frac{-6x^2+10x+6}{(x^2+1)^2}$$

3) $f(x) = \sqrt{3x^2 + 2x + 1}$ 
$f$ est dérivable sur $\mathbb{R}$ car la fonction $x \mapsto 3x^2 + 2x + 1$ est dérivable sur $\mathbb{R}$ et $(\forall x \in \mathbb{R}): 3x^2 + 2x + 1 > 0$
On pose : $f(x) = \sqrt{u(x)}$
Ainsi $u(x) = 3x^2 + 2x + 1 \Rightarrow u'(x) = 6x + 2$
Donc : 
$$f'(x) = \frac{u'(x)}{2\sqrt{u(x)}} = \frac{6x + 2}{2\sqrt{3x^2 + 2x + 1}}$$

4) $g(x) = (2x^2 + 3x - 3)^4$ 
Avec $u(x) = 2x^2 + 3x - 3 \Rightarrow u'(x) = 4x + 3$
Donc : 
$$g'(x) = 4u'(x)u(x)^3$$
$$= 4(4x + 3)(2x^2 + 3x - 3)^3$$

5) La fonction $f$ est dérivable sur $[0; +\infty[$
$$f'(x) = \frac{1}{3\sqrt{x^2}}$$

6) On a la fonction $u: x \mapsto x^5$ est dérivable et strictement positive sur $[0; +\infty[$, de plus $u'(x) = 5x^4$
La fonction $f$ est dérivable sur $[0; +\infty[$
$$f'(x) = \frac{5x^4}{4\sqrt{x^5}} = \frac{5x^4}{4\sqrt{15}}$$

7) On a la fonction $u: x \mapsto 1 + \cos^2(x)$ est dérivable et strictement positive sur $\mathbb{R}$, de plus $u'(x) = -2\sin(x)\cos(x)$
Donc la fonction $f$ est dérivable sur $\mathbb{R}$
$$f'(x) = \frac{-2\sin(x)\cos(x)}{4\sqrt{(1 + \cos^2(x))^3}}$$
```

<!-- Page 60 -->

```markdown
# Exercic 04

$f$ une fonction tel que : $f(x) = x - 2\sqrt{x}$

1) Déterminer $D_f$ et Calculer $\lim_{x \to +\infty} f(x)$  
2) a) Etudier la dérivabilité de $f$ à droite de $0$  
   b) Donner une interprétation géométrique  
3) a) Déterminer $f'$ puis étudier les variations de $f$ sur $D_f$  
   b) Dresser le tableau de variations de $f$  
   c) Déterminer les extrema de $f$  
4) Soit $g$ la restriction de $f$ sur $I = [1; +\infty[$  
   a) Montrer que $g$ admet une fonction réciproque $g^{-1}$ définie sur un intervalle $J$ que l'on déterminera  
   b) Déterminer $g^{-1}(x)$ pour tout $x \in J$

## Solution

1) $x \in D_f \Leftrightarrow x \geq 0 \quad \Rightarrow \quad D_f = [0; +\infty[$  
   $$ \lim_{x \to +\infty} f(x) = \lim_{x \to +\infty} (x - 2\sqrt{x}) $$  
   $$ = \lim_{x \to +\infty} x (1 - \frac{2}{\sqrt{x}}) $$  
   $$ = \lim_{x \to +\infty} x (1 - \frac{2}{x}) $$  
   $$ = +\infty $$  

Car $\lim_{x \to +\infty} x = +\infty$ et $\lim_{x \to +\infty} \frac{1}{\sqrt{x}} = 0$

2) a) $ \lim_{x \to 0^+} \frac{f(x) - f(0)}{x - 0} = \lim_{x \to 0^+} \frac{x - 2\sqrt{x}}{x} $$  
$$ = \lim_{x \to 0^+} (1 - \frac{2}{\sqrt{x}}) = -\infty $$  

2) b) $f'(x) = 1 - \frac{1}{2\sqrt{x}}$$  
Soit $x \in [0; +\infty[$  
On a $f'(x) = \frac{x - 1}{\sqrt{x(1 + \sqrt{x})}}$  
Donc $\sqrt{x(1 + \sqrt{x})} > 0 \quad \Rightarrow \quad$ donc le signe de $f'$ sur $[0; +\infty[$ est le signe de $x - 1$ qui s'annule en $1$  

|  $x$  |  $0$  |  $1$  |  $+\infty$  |
|-------|-------|-------|-------------|
|  $f'(x)$  |  $-$  |  $0$  |  $+$   |

Donc la fonction $f$ est croissante sur $]1; +\infty[$ et décroissante sur $[0; 1[$

b) On dresse le tableau de variations de $f$

|  $x$  |  $0$  |  $1$  |  $+\infty$  |
|-------|-------|-------|-------------|
|  $f'(x)$  |  $-$  |  $0$  |  $+$   |
|  $f(0)$  |  $0$  |  $f(1) = -1$  |  $+\infty$  |
```

<!-- Page 61 -->

```markdown
4)a)* La fonction $g$ est dérivable sur $I$ donc elle est continue sur $I$
* La fonction $g$ est strictement croissante sur $I$  
D'où $g$ admet une fonction réciproque $g^{-1}$ définie sur $J$ et :  
$$ J = g([1, +\infty)) = \left[ g(1); \lim_{x \to +\infty} f(x) \right] = [-1; +\infty[ $$  
b) Soit $x \in [1; +\infty[$ cherchons $y \in [1; +\infty[$ tel que $y = g^{-1}(x)$;  
$$ y = g^{-1}(x) \iff \sqrt{y - 2} - 2\sqrt{y} + (1)^2 = x(1)^2; $$  
$$ \iff (\sqrt{y - 1})^2 = x + 1; $$  
$$ \iff \sqrt{y - 1} = x + 1 \quad ( \text{ car } x + 1 \geq 0) $$  
$$ \iff y = \sqrt{x + 1} + 1 $$  
$$ y = ( \sqrt{x + 1} )^2 $$  
$$ g^{-1}(x) = \left( \sqrt{x + \frac{17}{4}} - \frac{1}{2} \right) $$ 
pour tout $x \in [-1; +\infty[$  

## Exercic 05  
Soit $f$ la fonction définie sur $I = [1, +\infty[ \text{ par : } f(x) = x^3 - 3x - 3$  
1) Montrer que $f$ admet une fonction réciproque $f^{-1}$ définie sur un intervalle $J$ à déterminer  
2) Montrer que l'équation $f(x) = 0$ admet une unique solution $\alpha$ telle que $2 < \alpha < 3$ puis déterminer le signe de $f$ sur $[1, +\infty[$  
3) Montrer que $f^{-1}$ est dérivable en $0$ et : $(f^{-1})'(0) = \frac{1}{3(\alpha^2 - 1)}$  

### Solution  
Soit $f$ la fonction définie sur $I = [1, +\infty[ \text{ par : } f(x) = x^3 - 3x - 3$  
1) Montrer que $f$ admet une fonction réciproque $f^{-1}$ définie sur un intervalle $J$ à déterminer  

2) Montrer que l'équation $f(x) = 0$ admet une unique solution $\alpha$ telle que $2 < \alpha < 3$ et on a la fonction $f$ strictement croissante sur l'intervalle $[1; \alpha]$  
Donc $1 \leq \alpha < \alpha$ et on a la fonction $f$ strictement croissante sur l'intervalle $[1; \alpha]$  
Donc $f(x) \leq f(\alpha)$  
Et on a à solution de l'équation $f(x) = 0$ donc $f(\alpha) = 0$  
D'où $f(x) \leq 0$  
Soit $x \in [\alpha; +\infty[$  
Donc $x \geq \alpha$ et on a la fonction $f$ strictement croissante sur l'intervalle $[\alpha; +\infty[$  
Donc $f(x) \geq f(\alpha)$  
D'où $f(x) \geq 0$  

3) Montrer que $f^{-1}$ est dérivable en $0$ et : $(f^{-1})'(0) = \alpha$  
Car : $2 < \alpha < 3$ donc $3\alpha^2 - 1 < 8 < 9 < 3(\alpha^2 - 1) < 24$  
Donc $f^{-1}$ est dérivable en $0$ et on a : $(f^{-1})'(0) = \frac{1}{3(\alpha^2 - 1)}$  
```

<!-- Page 62 -->

```markdown
# Exercice 06

Soit une fonction définie sur $\mathbb{R}$ par :

$$
f(x) = \frac{x^3 - 1}{x + 1} ; \quad x \geq 1
$$
$$
f(x) = x - 1 + 2\sqrt{1 - x} ; \quad x < 1
$$

1) Calculer $\lim_{x \to +\infty} f(x)$ puis montrer que : $\lim_{x \to -\infty} f(x) = -\infty$  
2) a) Etudier la dérivabilité de $f$ à droite de 1 puis interpréter les résultats géométriquement  
b) Etudier la dérivabilité de $f$ à gauche de 1 puis interpréter les résultats géométriquement  
3) a) Montrer que $f$ est strictement croissante sur $[1, +\infty[$  
b) Montrer que $\forall x \in ]-\infty ; 1[ ; f'(x) = \frac{-x}{\sqrt{-1 + (1 + x)}}$  
c) Dresser le tableau de variations de $f$ sur $\mathbb{R}$  
4) Soit $g$ la restriction de $f$ sur $I = [1, +\infty[$  
a) Montrer que $g$ admet une fonction réciproque $g^{-1}$ définie sur un intervalle $]a ; b[$ que l'on déterminera  
b) Déterminer $g^{-1}(x)$ pour tout $x \in J$  

## Solution :

Soit une fonction définie sur $\mathbb{R}$ par :

$$
f(x) = \frac{x^3 - 1}{x + 1} ; \quad x \geq 1
$$
$$
f(x) = x - 1 + 2\sqrt{1 - x} ; \quad x < 1
$$

1) Calculer $\lim_{x \to +\infty} f(x)$ puis montrer que : $\lim_{x \to -\infty} f(x) = -\infty$
$$
\lim_{x \to +\infty} f(x) = \lim_{x \to +\infty} \frac{x^3 - 1}{x + 1} = \lim_{x \to +\infty} x^2 = 1
$$

Montrer que : $\lim_{x \to -\infty} f(x) = -\infty$  
$$
\lim_{x \to -\infty} f(x) = \lim_{x \to -\infty} x - 1 + 2\sqrt{1 - x} =  \lim_{x \to -\infty} \left(1 - 2\frac{1}{x^2}\right) = 0
$$

Donc la fonction $f$ est dérivable à droite de 1 et $f'_d(1) = \frac{3}{2}$.

b) Etudier la dérivabilité de $f$ à gauche de 1 puis interpréter les résultats géométriquement.
$$
\lim_{x \to 1^-} f(x) - f(1) = \lim_{x \to 1^-} \frac{x - 1 + 2\sqrt{1 - x}}{x - 1} = \lim_{x \to 1^-} \frac{x - 1}{x-1} + \frac{2\sqrt{1 - x}}{x - 1}
$$
$$
\lim_{x \to 1^-} f(x) = \lim_{x \to 1^-} \frac{2\sqrt{1 - x}}{x - 1} = \lim_{x \to 1^-} \frac{2\sqrt{1 - x}}{x - 1} = -\infty
$$

Donc la fonction $f$ n'est pas dérivable à gauche de 1.

Donc la courbe $(C_f)$ admet une demi-tangente verticale en 1 dirigée vers le haut.
```

<!-- Page 63 -->

```markdown
# 3) a) Montrer que $f$ est strictement croissante sur $[1, +\infty[$
Soit $x \in [1; +\infty[$  
$f$ est dérivable sur $]1; +\infty[$ (fonction rationnelle)  
$$ f'(x) = \frac{3x^2(x^3 + 1) - 3x^2(3x - 1)}{(x^3 + 1)^2} = \frac{6x^2}{(x^3 + 1)^2} > 0 $$  
Donc la fonction $f$ est strictement croissante sur $[1, +\infty[$

b) Montrer que $\forall x \in ]-\infty ; 1[; f'(x) = \frac{-1}{\sqrt{-x(1 + (1-x))}}$
$f$ est dérivable sur $]-\infty ;1[$ (Somme de deux fonctions)  
$$ f'(x) = 1 + 2 \cdot \frac{-1}{2\sqrt{1 - x}} = -\frac{1}{\sqrt{1 - x}} $$  
$$ f'(x) = \frac{\sqrt{1 - x} - 1}{\sqrt{1 - x}} = \frac{(\sqrt{1 - x} - 1)(\sqrt{1 - x} + 1)}{(1 - x)(1 + \sqrt{1 - x})} = -\frac{x}{\sqrt{1 - x(1 + \sqrt{1 - x})}} $$  
Donc $1 - x(1 + \sqrt{1 - x}) > 0$ donc le signe de $f'$ sur $]-\infty ; 1[$ est le signe de $-x$ qui s'annule en $0$  
D’où le tableau de variations de $f$ sur $\mathbb{R}$

| $x$     | $-\infty$ | $0$ | $1$        | $+\infty$ |
|---------|-----------|-----|------------|------------|
| $f'(x)$ | +         | 0   | -          | +          |
| $f(x)$  | $-\infty$ | 0   | 1          | +$\infty$  |

c) On a $f$ est strictement croissante sur $[1, +\infty[$  
Soit $x \in ]-\infty ; 1[; f$  
On a $f'(x) = \frac{-1}{\sqrt{-x(1 + (1-x))}}$  
Donc $\sqrt{1 - x(1 + 1 - x)} > 0$ donc le signe de $f'$ sur $]-\infty ; 1[$ est le signe de $-x$ qui s’annule en $0$  

D’où le tableau de variations de $f$ sur $\mathbb{R}$

# 4) a)* La fonction $g$ est dérivable sur $I$ donc elle est continue sur $I$  
* La fonction $g$ est strictement croissante sur $I$  
D’où $g$ admet une fonction réciproque $g^{-1}$ définie sur $J$ et :  
$$ J = g([1, +\infty[) = [g(1); +\infty[; \lim_{x \to +\infty} f(x) = \infty $$  

b) Soit $x \in [0; 1[; cherchons $y \in [1; +\infty[$ tel que $y = g^{-1}(x)$ ;  
$$ y^3 - 1 = x \Longleftrightarrow $$  
$$ y^3 + 1 - 1 = x \longleftrightarrow $$  
$$ y^3 + 1 = \frac{2}{y^3 + 1 - 1} $$  
$$ y^3 + 1 = 1 - x \Longleftrightarrow y^3 + 1 = \frac{2}{1 - x} $$  

On a : $0 \leq x < 1 \Rightarrow -1 < -x < 0 \Rightarrow 0 < 1 - x \leq 1$  
$$ \Rightarrow \frac{1}{1 - x} \geq 1 \Longleftrightarrow \frac{2}{1 - x} \geq 2 \Rightarrow 2 \geq \frac{2}{1 - x} $$  
Donc $(*) \Rightarrow y = \frac{3}{1 - x} - 1$  
D’où : $g^{-1}(x) = \frac{3}{1 - x} - 1$ pour tout $x \in [0; 1[$
```

<!-- Page 64 -->

```markdown
# Prof : fayssal
Site web : www.elbouthkili.jimdofree.com

## Exercice 07
Soit $f$ la fonction définie sur $I = [0, +\infty[$ par : $f(x) = 3\sqrt{x} + 1 - x$

1) Calculer $\lim_{x \to +\infty} f(x)$

2) Montrer que $f'(x) = \frac{1 - 3\sqrt{x}}{3x + 1}$ pour tout $x \in I$ puis en déduire que la fonction $f$ est strictement décroissante sur $I$

3) Montrer que l’équation $f(x) = 0$ admet une solution unique $\beta$ dans l’intervalle $|5, 6|$

4) a) Montrer que l’équation $f(x) = x$ admet une solution unique $\alpha$ dans l’intervalle $|2, 3|$
   
   b) Vérifier que $\sqrt{3} + 1 = \frac{2}{3} \alpha$

5) a) Montrer que $f$ admet une fonction réciproque $f^{-1}$ définie sur un intervalle $I$ à déterminer

   b) Montrer que $f^{-1}$ est dérivable en $\alpha$ et $(f^{-1})'(\alpha) = \frac{-4\alpha^2}{9-4\alpha^2}$

## Solution de l’exercice 3
Soit $f$ la fonction définie sur $I = [0, +\infty[$ par : $f(x) = 3\sqrt{x} + 1 - x$

1) Calculer $\lim_{x \to +\infty} f(x)$
$$
\lim_{x \to +\infty} f(x) = 3\sqrt{x} + 1 - x
$$
$$
= \lim_{x \to +\infty} 3\sqrt{x}\left(1 - \frac{x}{3\sqrt{x}} \right)
$$
$$
= \lim_{x \to +\infty} 3\sqrt{x} \left( 3^{\frac{1}{2}}(x^{-\frac{1}{2}}) \right) = -\infty
$$

Car $\lim_{x \to +\infty} x = +\infty$ et $\lim_{x \to +\infty} 3\sqrt{x} \cdot \left(1 - \frac{1}{x^3}\right) = -1 < 0$

2) Calculer $f'(x)$ sur $I$ puis étudier le sens des variations de $f$
La fonction $x : \mapsto x + 1$ est dérivable sur $I$ et $\forall x \in I : x + 1 > 0$

Donc la fonction $x : \mapsto 3\sqrt{x}$ est dérivable sur $I$

La fonction $x : \mapsto -x$ est dérivable sur $I$

Soit $x \in I$
$$
f'(x) = \left(3\sqrt{x} + 1 - x\right)' = \frac{3(x - 1)}{3\sqrt{x} + 1} - 1
$$
$$
= \frac{1}{\sqrt{x + 1}} - 1 = -\frac{1}{\sqrt{x} + 1}
$$

Donc $f$ est strictement décroissante sur $I$

3) Montrer que l’équation $f(x) = 0$ admet une solution unique $\beta$ dans l’intervalle $|5, 6|$

* La fonction $f$ est dérivable sur l’intervalle $[5, 6]$ donc elle est continue sur $[5, 6]$

* La fonction $f$ est strictement décroissante sur $[5, 6]$

$$
f(5) = 3\sqrt{6} - 5 = \frac{3}{6} - 3\sqrt{6} > 0
$$
$$
f(6) = 3\sqrt{7} - 2 < 0 \text{ car } \sqrt{7} < 3
$$
Donc l’équation $f(x) = 0$ admet une solution unique $\beta$ dans l’intervalle $|5, 6|$
```

<!-- Page 65 -->

```markdown
4) a) Montrer que l'équation $f(x) = x$ admet une solution unique $\alpha$ dans l'intervalle $]2, 3]$

Pour tout $x \in [2, 3]$, on pose $g(x) = f(x) - x$  
La fonction $f$ est continue sur $[2, 3]$  
La fonction $x \mapsto x$ est continue sur $[2, 3]$  
* D'où $g$ est continue sur $[2, 3]$

La fonction $f$ est strictement décroissante sur $[2, 3]$  
La fonction $x \mapsto x$ est strictement décroissante sur $[2, 3]$  
$$
g(2) = 3\sqrt{3} - 4 = 3\sqrt{3} \times 27 - 3\sqrt{43} > 0 \quad \text{car } 3 \times 27 > 43
$$
Et $g(3) = 3\left(\sqrt{4 - 2}\right) < 0$  
$$
\sqrt{4} = 2
$$
* Donc $g(3) < g(2) < 0$

Donc l'équation $g(x) = 0$ admet une solution unique $\alpha$ dans l'intervalle $]2, 3]$  
D'où l'équation $f(x) = x$ admet une solution unique $\alpha$ dans l'intervalle $]2, 3]$.

b) Vérifier que $f(\alpha) = \alpha \Rightarrow \alpha = \frac{3\sqrt{\alpha + 1} - \alpha}{3\sqrt{\alpha + 1} - \alpha} \Rightarrow 3\sqrt{\alpha + 1} = 2/3 \alpha$

5) a) Montrer que $f$ admet une fonction réciproque $f^{-1}$ définie sur un intervalle à déterminer

* La fonction $f$ est continue sur $I$ car elle est dérivable sur $I$  
* La fonction $f$ est strictement décroissante sur $I$  
Donc $g$ admet une fonction réciproque $f^{-1}$ sur $J$

$$
J = f([0; +\infty[) = \left[ \lim_{x \to +\infty} f(x) \right] = ]-\infty; 3]
$$

b) Montrer que $f^{-1}$ est dérivable en $\alpha$ et $(f^{-1})'(\alpha) = \frac{-4\alpha^2}{9 - 4\alpha^2}$  

Rappel :  
Dérivabilité de fonction réciproque $f^{-1}$ en point $b$ avec $b = f(\alpha)$  
Si $f$ est dérivable en $a$ et $f'(a) \neq 0$  
Alors $f^{-1}$ est dérivable en $b$ ; et on a : $(f^{-1})'(b) = \frac{1}{f'(a)}$

On a $f(\alpha) = \alpha$ donc $f^{-1}(\alpha) = \alpha$  
La fonction $f$ est dérivable en $\alpha$ et on a 

$$
f'(\alpha) = \frac{1 - \frac{3}{\alpha + 1}}{\sqrt{\alpha + 1}^2}
$$

De plus on a $3\sqrt{\alpha + 1} + 1 = \frac{2}{3} \alpha$  
Donc $f'(\alpha) = \frac{1 - \left(\frac{2}{3} \alpha\right)^2}{9 - 4 \alpha^2}$

Donc $f'(\alpha) = \frac{9 - 4\alpha^2}{4\alpha^2} \neq 0$  
D'où $f^{-1}$ est dérivable en $\alpha$ et :

$$
(f^{-1})'(\alpha) = \frac{1}{9 - 4\alpha^2}
$$
```

<!-- Page 66 -->

```markdown
# Deuxième bac sciences PC /SVT /ST

## Résumé 3 : Etude des fonctions
### Deuxième bac sciences PC /SVT /ST

### Plan de chapitre 3 : Etude des fonctions
- Cours détaillé
- Résumé de cours
- Série d’exercices
- Correction détaillée des exercices
```

<!-- Page 67 -->

```markdown
# Résumé 3 : 
## Etude des fonctions 
### Deuxième bac science expérimentale

Prof Fayssal  
https://elboutkhili.jimdo.com/
```

<!-- Page 68 -->

```markdown
# Résumé 01 : ETUDE DES FONCTIONS
## BRANCHES INFINIES
### 2BAC SC 
#### PROF : FAYSSAL

### Convexité de $C(f)$ et les Points d'inflexions
Si $f'' \geq 0$ sur $I$ alors $C(f)$ est convexe sur $I \cup$  
Si $f'' \leq 0$ sur $I$ alors $C(f)$ est concave sur $I \cap$  
Si $f''$ s'annule et change le signe en $a$ alors le point $A(x_0; f(x_0))$ est point d'inflexion de $C(f)$ travers l tangente en $A(x_0; f(x_0))$

### Position relative de $C(f)$ et une droite $(\Delta)$
la position relative de $C(f)$ et $(\Delta) : y = ax + b$ dépend du signe de $f(x) - (ax + b)$
$$
\begin{array}{ccc}
x & (f(x) - (ax + b)) & x_0 \\
0 & - & + \\
\text{Position relative de } (C(f) \text{ et } (\Delta) & (C(f) \text{ est au dessous de } (A(x_0; f(x_0)) & (C(f) \text{ est au dessus de } (A(x_0; f(x_0)) \\
\end{array}
$$

### Points d’intersections de $C(f)$ avec $(Ox)$ et T.V.I
les points d’intersection de $C(f)$ avec l’axe des abscisses $(Ox)$ sont les points dont les abscisses sont les solutions de l’équation $f(x) = 0$

#### Théorème
Si $f$ est continue et strictement monotone sur un intervalle I $0 \leq f(I)$ Alors l’équation $f(x) = 0$ admet une unique solution dans I

### Interprétation géométrique : $C(f)$ coupe l’axe des abscisses $(Ox)$ au point $A(\alpha; 0)$ et $\alpha \in I$

#### ($C^{-1}$) la courbe de la fonction réciproque $f^{-1}$
** Les courbes $(C(f)$ et $(C^{-1})$ sont symétriques par rapport à la droite ; $(\Delta) : y = x$ **

### Éléments de symétrie
Le point $(a; b)$ est centre de symétrie de $C(f)$ si $(\forall x \in D_f)$  
$$ (2a - x) \in D_f $$  
$$ f(2a - x) + f(x) = 2b $$

La droite d'équation $(D) : y = L$ est asymptote horizontale à $C(f)$ au voisinage de $\infty$

La droite $(\Delta) : y = ax + b$ est asymptote oblique à $C(f)$ au voisinage de $\infty$  
$$ \lim_{x \to \infty} f(x) - (ax) = b $$
$$ \lim_{x \to \infty} f(x) = \infty $$

### $(C_f)$ admet branche.P de direction la droite d'équation $(\Delta) : y = ax$ Au voisinage de $\infty$

### $(C_f)$ admet branche parabolique de Direction $(O_y)$ Au voisinage de $0$

### $(C_f)$ admet une branche parabolique de Direction la droite $(O_x)$ Au voisinage de $\infty$

La droite $(D)$ d'équation $x = a$ est asymptote verticale à $C(f)$
```

<!-- Page 69 -->

```markdown
# Niveau : Deuxième bac sciences PC /SVT /STE

## Série corrigé 3 : Etude des fonctions
### Deuxième bac sciences PC /SVT /ST

### Plan de chapitre 3 : Etude des fonctions
- Cours détaillé
- Résumé de cours
- Série d’exercices
- Correction détaillée des exercices

admin  
Prof fayssal  
06813999067  
www.elbouthkili.jimdofree.com
```

<!-- Page 70 -->

```
# Série 3 :
## Etude des fonctions
### Deuxième bac science expérimentale

Prof Fayssal   
https://elboutkhili.jimdofree.com/
```

<!-- Page 71 -->

```
# Prof : fayssal
# Site web : www.elboutkhili.jimdo.com
# Série 03 : Etude des fonctions
# 2 Bac SX  Page 1/2

## Exercice 01
1) Déterminer $D_f$ puis étudier la nature des branches infinies de la courbe $(C_f)$ dans chaque cas :
   a) $f(x) = 2x^3 - 3x^2 + 2 ; \quad b) \ f(x) = \frac{3 - 2x^2}{(1+x^2)^2} ; \quad c) \ f(x) = 2x - \sqrt{x} $

2) On considère la fonction $f$ définie par $f(x) = x^3 + x^2$ Étudier la concavité de la courbe $(C_f)$ en précisant les points d'inflexions de $(C_f)$ s'il existe.

## Exercice 02
1) On considère la fonction $f$ définie par : $f(x) = \sqrt{x^2 + 6x + 5}$
   a) Déterminer $D_f$ l'ensemble de définition de $f$
   b) Montrer que la droite $(D)$ d'équation $x = -3$ est un axe de symétrie de la courbe $(C_f)$
   c) En déduire $D_e$ le domaine d'étude de $f$

2) On considère la fonction $f$ définie par : $f(x) = \frac{3 - x}{x^2 + 2}$ Montrons que $\Omega(-2, 3)$ est un point de symétrie de la courbe $(C_f)$.

## Exercice 03
Soit $f$ une fonction définie sur $\mathbb{R}$ par $f(x) = 2x^3 - 3x^2 + 2$
1) Etudier les branches infinies de $(C_f)$
2) Calculer $f'$ sur $\mathbb{R}$ puis dresser le tableau de variations de $f$
3) Etudier la convexité de $(C_f)$, en précisant le point d'inflexion.
4) Montrer que le point $A \left( \frac{1}{2}, \frac{3}{2} \right)$ est le centre de symétrie de $(C_f)$.
5) Montrer que $f(x) = 0$ admet une unique solution $\alpha \in [-1, 0[$.
6) Tracer $(C_f)$ dans un repère orthonormé.

## Exercice 04
Soit $f$ la fonction définie sur $\mathbb{R}$ par $f(x) = \frac{3x^4 + 1}{3x^3}$.
1) Etudier la parité de la fonction $f$ et déduire $D_e$ le domaine d'étude de la fonction $f$.

## Exercice 05
Soit $f$ est une fonction telle que $f(x) = x - \frac{1}{\sqrt{-2}}$.
1) Vérifier que $D_f = ]2; +\infty[$.
2)a) Calculer $\lim_{x \to 2^+} f(x)$ puis interpréter le résultat géométriquement.
   b) Calculer $\lim_{x \to +\infty} f(x)$ puis montrer que la droite $(\Delta) : y = x$ est asymptote oblique à $(C_f)$ au voisinage de $+\infty$.
3) Déterminer la position de $(C_f)$ et $(\Delta)$.
3)a) Montrer que $\forall x \in ]2; +\infty[ ; f'(x) = 1 + \frac{1}{2(\sqrt{-2})^3}$.
4) B) Dresser le tableau de variations de $f$.
5) Montrer que $f$ admet une fonction réciproque $f^{-1}$ définie sur un intervalle $] a; b[$.
6) Calculer $f(3)$ puis tracer $(C_f)$ et $(C_f^{-1})$.
7) Montrer que $f^{-1}$ est dérivable en $2$ et calculer $(f^{-1})'(2)$.
```

<!-- Page 72 -->

```markdown
# Prof : fayssal
# Site web : www.elbouthkili.jimdofree.com
# Série 0 3 : Etude des fonctions 2 Bac SX
# Page 2/2

## Exercice 06

Soit $ f $ une fonction définie sur $\mathbb{R}$ par

$$ f(x) = \frac{x^3 - 1}{x^3 + 1} ; \quad x \geq 1 $$
$$ f(x) = x - 1 + 2\sqrt{1 - x} ; \quad x < 1 $$

1) Calculer $\lim_{x \to +\infty} f(x)$ et interpréter le résultat géométriquement.

2) a) Montrer que $\lim_{x \to -\infty} f(x) = -\infty$

b) Étudier la branche infinie de $(C_f)$ au voisinage de $-\infty$.

3) a) Étudier la dérivabilité de $f$ à droite de $1$ puis interpréter le résultat géométriquement.

b) Étudier la dérivabilité de $f$ à gauche de $1$ puis interpréter le résultat géométriquement.

4) a) Montrer que $f$ est strictement croissante sur $[1, +\infty[$

b) Montrer que $\forall x \in ]-\infty ; 1[ ; \quad f'(x) = \frac{-x}{-\sqrt{1+(1-x)}}$.

c) Dresser le tableau de variations de $f$ sur $\mathbb{R}$.

5) Résoudre l’équation $f(x) = 0 ; \quad x \in ]-\infty ; 1[$.

6) Tracer $(C_f)$ dans un repère orthonormé $(O ; i ; j)$.

7) Soit $g$ la restriction de $f$ sur l'intervalle $I = ]1 ; +\infty[$.

a) Montrer que $g$ admet une fonction réciproque $g^{-1}$ définie sur 

b) Déterminer $g^{-1}(\frac{1}{2})$.

c) Montrer que $g^{-1}$ est dérivable en $\frac{1}{2}$ puis calculer $(g^{-1})'(\frac{1}{2})$.

## Exercice 07

Soit $g$ une fct tel que : $ g(x) = 6x - 8x\sqrt{x - \frac{1}{2}} $

1) Déterminer $D_f$ puis calculer $\lim_{x \to +\infty} g(x)$.

2) Calculer $g'(x)$ pour tout $x \in [0 ; +\infty[$.

3) Dresser le tableau de variation de $g$.

4) Montrer que $\forall x \in [0 ; +\infty[ ; \quad g(x) \leq 0$.
```

<!-- Page 73 -->

```markdown
# 2bac biof
## ETUDE DES FONCTIONS
### Activité : Construction de la courbe $(C_f)$ et $(C_{f^{-1}})$

## Exercice 1 :
Soit $f$ une fonction continue et définie sur $]1; +\infty[$ par sa table de variation suivante :

| $x$  | 1                |
|------|------------------|
| $f'(x)$ | +            |
| $f(x)$ | $\to +\infty$ |

1) Sachant que $\lim_{x \to +\infty} f(x) - x = 0$, déterminer la nature des deux branches infinies de $(C_f)$.

2) Tracer $(C_f)$ dans un repère orthonormé $(O; \vec{i} \vec{j})$.  
On donne $f(1,5) = -3 ; f(2) = 0 ; f(3) = 2$.

3) Vérifier que $f$ admet une fonction réciproque $f^{-1}$ définie sur un intervalle $]a;b]$ à déterminer.

4) Tracer $(C_{f^{-1}})$ le graphe de $f^{-1}$ dans $(O; \vec{i} \vec{j})$.

## Exercice 2 :
Soit $f$ continue et définie sur $]−\infty; +\infty[$ par sa table de variation :

| $x$  | $-\infty$       |
|------|------------------|
| $f'(x)$ | +          |
| $f(x)$ | $\to +\infty$ |

1) Sachant que $\lim_{x \to +\infty} \frac{f(x)}{x} = +\infty$, déterminer les deux branches infinies de $(C_f)$.

2) Tracer $(C_f)$ dans un repère orthonormé $(O; \vec{i} \vec{j})$.  
On donne $f(-1) = -1 ; 0$ point d’inflexion de $(C_f)$ ; $f(1) = 1 ; f(2) = 4$.

## Exercice 3 :
Soit $f$ continue et définie sur $[0; +\infty[$ par sa table de variation :

| $x$  | 0                | 1            |
|------|------------------|--------------|
| $f'(x)$ | -          | 0            |
| $f(x)$ | $0$          | $+\infty$    |

1) Sachant que $\lim_{x \to +\infty} \frac{f(x)}{x} = 1$ et $\lim_{x \to +\infty} f(x) - x = -\infty$, déterminer la branche infinie de $(C_f)$.

2) Tracer $(C_f)$ dans un repère orthonormé $(O; \vec{i} \vec{j})$.  
On donne $f(3) = 0 ; f(4) = 1$.

3) Soit $g$ la restriction de $f$ sur $[1, +\infty[$. Tracer $(C_{g^{-1}})$ le graphe de $g^{-1}$.

## Exercice 4 :
Soit $f$ une fonction définie par sa table des variations :

| $x$  | $-\infty$       | 0            | 1            |
|------|------------------|--------------|--------------|
| $f'(x)$ | 0          | +            | -            |
| $f(x)$ | $-\infty$   | 0            | $+\infty$    |

1) Etudier les branches infinies de $(C_f)$ sachant que $\lim_{x \to +\infty} \frac{f(x)}{x} = 0$ et $\lim_{x \to +\infty} f(x) - (x + 1) = 0$.

2) Tracer $(C_f)$ dans un repère orthonormé $(O; \vec{i} \vec{j})$.  
On donne $f(-3) = -1 ; f(-2) = 0 ; f(-1) = 2$ et $f\left(\frac{1}{2}\right) = 5 ; f(2) = 3.5$.
```

<!-- Page 74 -->

```markdown
# Corrigé de série 3

## Etude des fonctions

### Deuxième bac science expérimentale

**Prof Fayssal**  
[https://elboutkhili.jimdofree.com/](https://elboutkhili.jimdofree.com/)
```

<!-- Page 75 -->

```markdown
# Prof : fayssal 
Site web : www.elbouthkili.jimdofree.com 

## Série 03 : Etude des fonctions COR 2 Bac SX Page 1/2

### Exercice 01
3) Déterminer $D_f$ puis étudier la nature des branches infinies de la courbe $(C_f)$ dans chaque cas :
a) $f(x) = 2x^3 - 3x^2 + 2 ; \quad b) \; f(x) = \frac{3 - 2x^2}{(1+x)^2} ; \quad c) \; f(x) = 2x - \sqrt{x}$  

4) On considère la fonction $f$ définie par $f(x) = x^3 + x^2$  
Étudier la concavité de la courbe $(C_f)$ en précisant les points d'inflexions de $(C_f)$ s'il existe.

### Exercice 02
3) On considère la fonction $f$ définie par : $f(x) = \sqrt{x^2 + 6x + 5$  
d) Déterminer $D_f$ l'ensemble de définition de $f$  
e) Montrer que la droite $(D)$ d'équation $x = -3$ est un axe de symétrie de la courbe $(C_f)$  
f) En déduire $D_e$ le domaine d'étude de $f$  

4) On considère la fonction $f$ définie par : $f(x) = \frac{3-x}{x^2 + 2}$  
Montrons que $\Omega(-2,3)$ est un point de symétrie de la courbe $(C_f)$.

### Exercice 03
Soit $f$ une fonction définie sur $\mathbb{R}$ par : $f(x) = 2x^3 - 3x^2 + 2$  
1) Étudier les branches infinies de $(C_f)$  
2) Calculer $f'$ sur $\mathbb{R}$ puis dresser le tableau de variations de $f$  
3) Étudier la convexité de $(C_f)$, en précisant les points d'inflexion.  
4) Montrer que le point $A\left(\frac{1}{2}, \frac{3}{2}\right)$ est le centre de symétrie de $(C_f)$  
5) Montrer que $f(x) = 0$ admet une unique solution $\alpha \in [-1,0[$  
6) Tracer $(C_f)$ dans un repère orthonormal.

### Exercice 04
Soit $f$ la fonction définie sur $\mathbb{R}^*$ par : $f(x) = \frac{3x^4 + 1}{3x^3}$  
2) Étudier la parité de la fonction $f$ et déduire $D_e$ le domaine d'étude de la fonction $f$.

### Exercice 05
Soit $f$ est une fonction tel que $f(x) = x - \frac{1}{\sqrt{x-2}}$  
1) Vérifier que $D_f = ]2, +\infty[$  
2) a) Calculer $\lim_{x \to 2^+} f(x)$ et interpréter le résultat géométriquement  
b) Calculer $\lim_{x \to +\infty} f(x)$ puis montrer que la droite $(D) : y = x$ est asymptote oblique à $(C_f)$ au voisinage de $+\infty$  
3) Déterminer la position de $(C_f)$ et $(D)$  
3)a) Montrer que $\forall x \in ]2, +\infty[ ; \, f'(x) = 1 + \frac{1}{2(\sqrt{x-2})^3}$  
b) Dresser le tableau de variations de $f$  
4) Montrer que l'équation $f(x) = 0$ admet une unique solution dans $]2, 3]$  
5) Montrer que $f$ admet une fonction réciproque $f^{-1}$ définie sur un intervalle $]a, b]$ à déterminer  
6) Calculer $f(3)$ puis tracer $(C_f)$ et $(C_f^{-1})$  
7) Montrer que $f^{-1}$ est dérivable en $2$ et calculer $f^{-1}'(2)$
```

<!-- Page 76 -->

```markdown
# Exercices 06

Soit $f$ une fonction définie sur $\mathbb{R}$ par
$$ 
f(x) = \frac{x^3 - 1}{x^3 + 1} ; \quad x \geq 1 
$$
$$ 
f(x) = x - 1 + 2\sqrt{1 - x} ; \quad x < 1 
$$

1) Calculer $\lim_{x \to +\infty} f(x)$ et interpréter le résultat géométriquement.
   
2) a) Montrer que $\lim_{x \to -\infty} f(x) = -\infty$  
   b) Étudier la dérivabilité de $f$ à droite de 1 puis interpréter le résultat géométriquement.  
   c) Étudier la dérivabilité de $f$ à gauche de 1 puis interpréter le résultat géométriquement.  

3) a) Montrer que $f$ est strictement croissante sur $[1, +\infty[$  
   b) Montrer que $\forall x \in ]-\infty, 1[ ; f'(x) = \frac{-x}{\sqrt{1 + (1 - x)}}$  
   c) Dresser le tableau de variations de $f$ sur $\mathbb{R}$  

4) Résoudre l'équation $f(x) = 0 ; \quad x \in ]-\infty, 1[ ; [1,$  
5) Tracer $(Cf)$ dans un repère orthonormé $(O; \; i ; \; j)$  
6) Soit $g$ la restriction de $f$ sur l'intervalle $I = ]1, +\infty[$  
   a) Montrer que $g$ admet une fonction réciproque $g^{-1}$ définie sur  

$$ 
a) \quad \text{Déterminer } g^{-1}\left(\frac{1}{2}\right) 
$$  
b) Montrer que $g^{-1}$ est dérivable en $\frac{1}{2}$ puis calculer $(g^{-1})'\left(\frac{1}{2}\right)$

# Exercices 07

Soit $g$ une fct tel que : $g(x) = 6x - 8x\sqrt{x - \frac{1}{2}}$  
1) Déterminer $D_g$ puis calculer $\lim_{x \to +\infty} g(x)$  
2) Calculer $g'(x)$ pour tout $x \in [0, +\infty[$  
3) Dresser le tableau de variation de $g$  
4) Montrer que $\forall x \in [0; +\infty[ ; \; g(x) \leq 0$  

# Exercices 08

Soit $f$ une fct tel que : $f(x) = \frac{1}{x^2 + x} + \sqrt{2 + x}$  
1) Déterminer $D_f$ et Calculer $f(x)$  
2) Calculer $\lim_{x \to 0^+} f(x)$ et interpréter le résultat géométriquement...  
3) Montrer que la droite $(D) : x = -\frac{1}{2}$ est un axe de symétrie de $(Cf)$ et déduire $D_e$ le domaine d'étude de $f$  
4) a) Montrer que pour tout $x$ dans $]0, +\infty[$ :  
   $$ 
   f'(x) = -2(x + 1)\left(\frac{1}{(x^2 + x)^2} + \frac{1}{2\sqrt{2 + x}} \right) 
   $$  
b) Dresser le tableau de variation de $f$ sur $D_e$  
5) Étudier la branche infinie de $(Cf)$ au voisinage de $+\infty$  
6) Résoudre dans $]0, +\infty[$ l'équation $f(x) = 0$  
7) Tracer $(Cf)$ dans un repère orthonormé
```

<!-- Page 77 -->

```markdown
# Prof : fayssal 
# Site web : www.elboutkhili.jimdofree.com 

## Exercise 01

1) Déterminer $D_f$ puis étudier la nature des branches infinies de la courbe $C_f$ dans chaque cas : 
   a) $f(x) = 2x^3 - 3x^2 + 2$  
   b) $f(x) = \frac{3 - 2x^2}{(1+x)^2}$  
   c) $f(x) = 2x - \sqrt{x}$  
   d) $f(x) = x + \sqrt{x^2 + 1}$  

2) On considère la fonction $f$ définie par $f(x) = x^3 + x^2$  
   Étudier la concavité de la courbe $(C_f)$ puis déterminer les points d’inflexion de $(C_f)$ s’il existe.  

3) Soit $f$ une fonction définie sur $\mathbb{R}$ par $f(x) = \frac{1}{12}x^4 - 2x^2 + x + \frac{2}{3}$  
   Étudier la convexité de $(C_f)$ en précisant leurs points d’inflexions.  

## Solution :

1a)  
   $f(x) = 2x^3 - 3x^2 + 2$  
   $D_f = \mathbb{R} = ] -\infty, +\infty[$  
   * $ \lim_{x \to +\infty} f(x) = \lim_{x \to +\infty} 2x^3 - 3x^2 + 2 = +\infty$  
   * $ \lim_{x \to -\infty} f(x) = \lim_{x \to -\infty} 2x^3 - 3x^2 + 2 = -\infty$  
   * $ \lim_{x \to 0} f(x) = 2 \cdot 0^3 - 3 \cdot 0^2 + 2 = 2$  

   Donc la courbe $(C_f)$ admet une branche parabolique dirigée vers l'axe des ordonnées au voisinage de $+\infty$  
   * $ \lim_{f(x)} = \lim_{x \to -1} f(x) = \lim_{x \to -2} = -\infty$  
   * $ \lim_{x \to -\infty} \frac{f(x)}{x} = \lim_{x \to -\infty} \frac{2x^3 - 3x^2 + 2}{x} = \lim_{x \to -\infty} 2x^2 = -\infty $  
   
   Donc la courbe $(C_f)$ admet une branche parabolique dirigée vers l'axe des ordonnées au voisinage de $-\infty$.  

   b) $x \in D_f \Leftrightarrow (1 + x)^2 \neq 0$  
   D'où $1 + x \neq 0 \Leftrightarrow x \neq -1$  
   Donc $D_f = ]- \infty, -1[ \cup -1, +\infty[$  

   Calcul de $ \lim_{x \to +\infty} f(x)$ et $ \lim_{x \to -\infty}$:  
   $$ \lim_{x \to -\infty} f(x) = \lim_{x \to -\infty} \frac{3 - 2x^2}{(1+x)^2} = -2 \text{ et } \lim_{x \to +\infty} f(x) = \lim_{x \to +\infty} \frac{3 - 2x^2}{(1+x)^2} = -2 $$  

   Donc la droite d'équation $y = -2$ est une asymptote horizontale à la courbe $(C_f)$ au voisinage de $+\infty$ et $-\infty$.  

   c) $x \in D_f \Rightarrow x \ge 0$ donc $D_f = [0, +\infty[$  
   On calcule $ \lim_{x \to +\infty} f(x)$:  
   $$ \lim_{x \to +\infty} f(x) = \lim_{x \to +\infty} 2x - \sqrt{x} = +\infty $$  

   On calcul alors $ \lim f(x)$:  
   $$ \lim_{x \to +\infty} f(x) = 2x - \sqrt{x} = 2x - 2x = \lim_{x \to +\infty} 2x \text{ donc } = 2 $$  

   Donc la courbe $(C_f)$ admet une branche parabolique de direction de la droite d'équation $y = 2x$ au voisinage de $+\infty$.
```

<!-- Page 78 -->

```markdown
Prof : fayssal  
Site web : www.elboutkhili.jimdofree.com  

# Correction de série 3 : Etude des fcts  
## 2 Bac SX  
Page 02  

2) On considère la fonction f définie par $f(x) = x^3 + x^2$  
Étudier la concavité de la courbe $(C_f)$  

La fonction f est dérivable deux fois sur IR  
Soit $x$ dans IR,  
On a : $f'(x) = 3x^2 + 2x$ et $f''(x) = 6x + 2$  
$f''(x) = 0 \iff x = -\frac{1}{3}$  

| $x$       | $-\infty$ | $-\frac{1}{3}$ | $0$   | $+\infty$ |
|-----------|-----------|----------------|-------|-----------|
| $f''(x)$  | $-$       | $0$            | $+$   | $+$       |

La convexité de la courbe $(C_f)$  
$\cap$ le point $A\left(-\frac{1}{3}; f\left(-\frac{1}{3}\right)\right) $ est point d'inflexion  

**Exercice 02**  

1) On considère la fonction f définie par : $f(x) = \sqrt{x^2 + 6x + 5}$  
a) Déterminer $D_f$  
b) Montrons que la droite D d'équation $x = -3$ est un axe de symétrie de la courbe $(C_f)$  
c) En déduire $D_e$ le domaine d'étude de f  

2) On considère la fonction f définie par : $f(x) = \frac{3x - 1}{x + 2}$  
Montrons que $\Omega(-2, 3)$ est un point de symétrie de la courbe $(C_f)$  

**Solution :**  
1) a) On a :  
$x \in D_f \iff x^2 + 6x + 5 \geq 0$  
$D_f = ]-\infty; -5] \cup [-1; +\infty[$  

b) Soit $x \in D_f$  
$x \in D_f \iff (x < -5 \text{ ou } x > -1)$  
$$ \iff (-6 - x > -1 \lor -6 - x < -5) $$  
$$ \iff (-6 - x) \in D_f $$  

D'autre part, pour tout $x \in D_f$ :  
$$ f(-6 - x) = \sqrt{(-6 - x)^2 + 6(-6 - x) + 5} = f(x) $$  
Donc la droite $(D) : x = -3$ est un axe de symétrie de la courbe $(C_f)$  
$D_e = D_f \cap [-3; +\infty[ = [-1; +\infty[$  

2) On considère la fonction f définie par : $f(x) = \frac{3x - 1}{x + 2}$  
Montrons que $\Omega(-2, 3)$ est un point de symétrie de la courbe $(C_f)$  
$x \in D_f \iff x \neq -2$  
Le domaine de définition de f est $D_f = \mathbb{R} - \{-2\}$  

Soit $x \in D_f$  
* $x \in D_f \iff x \neq -2$  
* $x \in D_f \iff -4 - x = -2 \iff  -4 - x \in D_f$  
* $f(-4 - x) = \frac{3x + 13}{x + 2} = \frac{6(x + 2)}{x + 2} - 1 + 3x = 6 - f(x)$  

Donc, le point $\Omega(-2, 3)$ est un centre de symétrie de $(C_f)$  
On peut montrer que * $f(2a - x) + f(x) = 2b$  
$D_e = D_f \cap [-2; +\infty[ = [-1; -2; +\infty[$  
```

<!-- Page 79 -->

```markdown
# Prof: fayssal
## Site web: www.elbouthkili.jimdofree.com

### Exercise 3
Soit $ f $ une fonction définie sur $ \mathbb{R} $ par : $ f(x) = 2x^3 - 3x^2 + 2 $

1) Etudier les branches infinies de $(Cf)$  
2) Calculer $ f' $ sur $ \mathbb{R} $ puis dresser le tableau de variations de $ f $  
3) Etudier la convexité $(Cf)$, en précisant le point d'inflexions de $(Cf)$ s'il existe  
4) Montrer que le point $ A \left( \frac{1}{2}, \frac{3}{2} \right) $ est le centre de symétrie de $(Cf)$  
5) Montrer que l’équation $ f(x) = 0 $ admet une unique solution $ \alpha $ dans $ ]-1, 0[ $ et interpréter le résultat géométriquement  
6) Tracer $(Cf)$ dans un repère orthonormé  

### Solution :
1) Etudier les branches infinies de $(Cf)$  
* $$ \lim_{x \to +\infty} f(x) = \lim_{x \to +\infty} 2x^3 - 3x^2 + 2 = +\infty $$  
* $$ \lim_{x \to -\infty} f(x) = \lim_{x \to -\infty} 2x^3 - 3x^2 + 2 = 2\lim_{x \to -\infty}  x^3 = -\infty $$  

Donc la courbe $(Cf)$ admet une branche parabolique dirigée vers l'axe des ordonnées au voisinage de $ +\infty $  

* $$ \lim_{x \to +\infty} f'(x) = \lim_{x \to +\infty}  \frac{2x^3}{x} = \lim_{x \to +\infty} 2x^2 = +\infty $$  
* $$ \lim_{x \to -\infty} f'(x) = \lim_{x \to -\infty} \frac{2x^3}{x} = \lim_{x \to -\infty} 2x^2 = +\infty $$  

Donc la courbe $(Cf)$ admet une branche parabolique dirigée vers l'axe des ordonnées au voisinage de $ -\infty $  

2) Calculer $ f' $ sur $ \mathbb{R} $ puis dresser le tableau de variations de $ f $  
La fonction $ f' $ est dérivable sur $ \mathbb{R} $ et on a pour tout $ x $ dans $ \mathbb{R} $  
$$ f''(x) = 12x - 6 = 6(2x - 1) $$  
$$ f''(x) = 0 \Leftrightarrow 6(2x - 1) = 0 \Leftrightarrow x = \frac{1}{2} $$  

d’où le tableau de concavité suivant :  
$$
\begin{array}{|c|c|c|c|}
\hline
x & -\infty & \frac{1}{2} & +\infty \\
\hline
f''(x) & - & 0 & + \\
\hline
\end{array}
$$  

La convexité de la courbe $(Cf)$ :  
* concave $ \cap $ le point $ A \left( \frac{1}{2}, \frac{3}{2} \right) $ est point d'inflexion  
* convexe $ \cup $  

4) Montrer que le point $ A \left( \frac{1}{2}, \frac{3}{2} \right) $ est le centre de symétrie de $(Cf)$  
Soit $ x \in \mathbb{R} $  
* $ x \in \mathbb{R} \Leftrightarrow (1 - x) \in \mathbb{R} $  
* $$ f(1 - x) + f(x) = 2(1 - x)^2 - 3(1 - x)^2 + 2 + 2x^3 - 3x^2 + 2 $$  
$$ = 2 + 6x - 6x^2 - 2x^3 - 3 + 2 + 2x^3 - 3x^2 + 2 $$  
$$ = 3 = 2 \times \frac{3}{2} $$  

Donc, le point $ A \left( \frac{1}{2}, \frac{3}{2} \right) $ est un centre de symétrie de $(Cf)$
```

<!-- Page 80 -->

```markdown
5) Montrer que l'équation $f(x) = 0$ admet une unique solution $\alpha$ dans ]−1, 0[ et interpréter le résultat géométriquement
- La fonction $f$ est continue sur l’intervalle $[-1; 0]$
- La fonction $f$ est strictement croissante sur $[-1; 0]$
- Et ona : $f(-1) = -3$ et $f(0) = 2$ donc $f(-1) \times f(0) < 0$

D’où d’après T.V.I l’équation $f(x) = 0$ admet une unique solution $\alpha$ dans ]−1, 0[.

Interprétation géométrique
La courbe $(Cf)$ coupe l'axe des abscisses en un point unique d’abscisse $\alpha$ tel que $\alpha \in ]−1, 0[$.

6) Tracer $(Cf)$ dans un repère orthonormé

Exercice 04
$f$ est la fonction définie sur $\mathbb{R}^*$ par :
$$
f(x) = \frac{3x^4 + 1}{3x^3}
$$

1) Etudier la parité de la fonction $f$ et déduire $D_e$ le domaine d’étude de la fonction $f$.
2) Calculer $\lim_{x \to 0^+} f(x)$ puis interpréter le résultat géométriquement 
3) a. Calculer $\lim_{x \to +\infty} f(x)$ puis montrer que la droite (D) d’équation $y = x$ est un asymptote oblique à (Cf) au voisinage de $+\infty$ 
4) a. Etudier la position relative de $(Cf)$ et la droite (D) sur $D_e$.
b. Donner le tableau de variation de la fonction $f$ sur $\mathbb{R}^*$.
5) Tracer $(Cf)$ la courbe représentant la fonction $f$.
6) Considérons la fonction $g$ définie par $g(x) = \frac{3x^4 + 1}{3|x|^3}$.

a. Etudier la parité de la fonction $g$.
b. Tracer $(Cg)$ la courbe de $g$ en justifiant votre réponse.

Solution :
1) Soit $x \in \mathbb{R}^*$.
$$
x \in \mathbb{R}^* \iff x \neq 0 \iff -x \neq 0 \iff -x \in \mathbb{R}^*
$$
$$
f(-x) = \frac{3(-x)^4 + 1}{3(-x)^3} = \frac{3x^4 + 1}{-3x^3} = -f(x)
$$
Donc la fonction $f$ est impaire.

D’où on peut réduire l’étude $f$ seulement sur $D_e = \mathbb{R}^* \cap [0; +\infty[ = [0; +\infty[$.

Donc $D_e = ]0; +\infty[$.
Remarque : La courbe $(Cf)$ est symétrique par rapport à $O$.
```

<!-- Page 81 -->

```markdown
Prof : fayssal  
Site web : www.elbouthkili.jimdofree.com  

Correction de série 3 : Etude des fcts  
2 Bac SX  
Page 05  

2) $\lim_{x \to 0^+} f(x) = \lim_{x \to 0^-} f(x) = +\infty$, car $\lim_{x \to 0^+} 3x^4 + 1 = 1$ et $\lim_{x \to 0^-} 3x^3 = 0^+$  
Donc la droite d’équations $x = 0$ c-à-dire l’axe des ordonnées est une asymptote verticale à $(C_f)$  

1. a. Calculer $\lim_{x \to +\infty} f(x)$ puis montrer que la droite $(D)$ d'équation  
$y = x$ est une asymptote oblique à $(C_f)$ au voisinage de $+\infty$  

$$\lim_{x \to +\infty} f(x) = \lim_{x \to +\infty} \frac{3x^4 + 1}{3x^3} = \lim_{x \to +\infty} \frac{3x^4}{3x^3} = \lim_{x \to +\infty} x = +\infty$$  

b. Etudier la position relative de $(C_f)$ et la droite $(D)$ sur $D_E$  
Soit $x \in ]0; +\infty[$, on a : $f(x) = \frac{1}{3x^3} > 0$  
Donc $(C_f)$ est située au dessus de la droite $(D)$ sur $]0; +\infty[$  

4) a) Calculer la dérivée de la fonction $f$  
La fonction $f$ est dérivable sur tout intervalle inclus dans $\mathbb{R}^*$, Car c'est une fonction rationnelle  

$$f'(x) = \frac{12x^3 \cdot 3x^3 - (3x^4 + 1) \cdot 9x^2}{(3x^2)^2} = \frac{9x^2(4x^4 - 3x^4 - 1)}{x^4}$$  

b) Soit $x \in \mathbb{R}^*$  
On a $x^2 + 1 > 0$ et $x > 0$, donc le signe de $f'$ c'est le signe de $x^2 - 1$  
$$f'(x) = 0 \Rightarrow x^2 - 1 = 0 \Rightarrow x = 1 \text{ ou } x = -1$$  

5) a) Soit $x \in \mathbb{R}^*$  
$x \in \mathbb{R}^* \Leftrightarrow x \neq 0$  
$$-x \neq 0 \Leftrightarrow -x \in \mathbb{R}^*$$  
$$g(-x) = \frac{3(-x)^4 + 1}{3|-x|^3} = \frac{3x^4 + 1}{3|x|^3} = g(x)$$  
Donc la fonction $g$ est paire  
```

<!-- Page 82 -->

```markdown
Prof : fayssal  
Site web : www.elboutkhili.jimdo free.com  
Correction de série 3 : Etude des fcts 2 Bac SX Page 06

**b.** Tracer $(C_g)$ la courbe de $g$ en justifiant votre réponse  
Soit $x \in [0; +\infty[$, on a : $g(x) = f(x)$  
Donc la courbe $(C_g)$ est confondue à $(C_f)$ $]0; +\infty[$  
Et comme la fonction $g$ est paire donc la courbe $(C_g)$ est symétrique par rapport à l'axe des ordonnées

**Exercice 06**  
$f$ une fonction définie sur $\mathbb{R}$ par  
$$
f(x) = \begin{cases}
\frac{x^3 - 1}{x^3 + 1} & ; x \geq 1 \\
x - 1 + 2\sqrt{1 - x} & ; x < 1
\end{cases}
$$

1) Calculer $\lim_{x \to +\infty} f(x)$ et Interpréter le résultat géométriquement  
2) a) Montrer que : $\lim_{x \to -\infty} f(x) = -\infty$  
3) a) Etudier la dérivabilité de $f$ à droite de $1$ puis interpréter les résultats géométriquement  
   b) Etudier la dérivabilité de $f$ à gauche de $1$ puis interpréter les résultats géométriquement

4) a) Montrer que $f$ est strictement croissante sur $[1, +\infty[$  
   b) Montrer que $\forall x \in ]-\infty ; 1[ ; f' (x) = -\frac{x}{\sqrt{1-x}}$  
   c) Dresser le tableau de variations de $f$ sur $\mathbb{R}$  
5) Résoudre l’équation $f(x) = 0 ;  x \in ] -\infty; 1[$, puis interpréter le résultat géométriquement   
6) Tracer $(C_f)$ dans un repère orthonormé $(O; i; j)$  
   Soit $g$ la restriction de $f$ sur l'intervalle $I = [1, +\infty[$  
   a) Montrer que $g$ admet une fonction réciproque $g^{-1}$ définie sur un intervalle $J$ à déterminer  
   b) Déterminer $g^{-1}(\frac{1}{2})$  
   c) Montrer que $g^{-1}$ est dérivable en $\frac{1}{2}$ puis calculer $(g^{-1})'(\frac{1}{2})$

**Solution :**  
1) Calculer $\lim_{x \to +\infty} f(x)$ et Interpréter le résultat géométriquement  
$$
\lim_{x \to +\infty} f(x) = \lim_{x \to +\infty} \frac{x^3 - 1}{x^3 + 1} = \lim_{x \to +\infty} \frac{x^3}{x^3} = 1  
$$  
Donc la droite $(D)$ d’équation $y = 1$ est une asymptote horizontale à $(C_f)$ au voisinage de $+\infty$

2) a) Montrer que : $\lim_{x \to -\infty} f(x) = -\infty$  
$$
\lim_{x \to -\infty} f(x) = \lim_{x \to -\infty} \left(x - 1 + 2\sqrt{1 - x}\right) = \lim_{x \to -\infty}(x - 1 + 2|x|)  
$$  
$$
= \lim_{x \to -\infty} \left( x(1 - \frac{1}{|x|} - \frac{2}{|x|}) \right) = -\infty
$$  
Car lim $x \to -\infty$ et $x(1 - \frac{1}{|x|}) = 0
```

<!-- Page 83 -->

```markdown
## Prof : fayssal  
### Site web : www.elboutkhili.jimdofree.com  
### Correction de série 3 : Etude des fcts  
### 2 Bac SX  
### Page 07  

b) $$ \lim_{x \to -\infty} \frac{f(x)}{x} = \lim_{x \to -\infty} \frac{x \left( 1 - \frac{1 - x}{2} - 2 \sqrt{1 - x} \right)}{x} $$  
$$ = \lim_{x \to -\infty} \left( 1 - 2 + \frac{1 - x}{x^2} \right) $$  
$$ = \lim_{x \to -\infty} 1 - 2 - \frac{1}{x} = -1 $$  

$$ \lim_{x \to -\infty} f(x) - x = \lim_{x \to -\infty} f(x) = -\infty $$  

On a : $$ \lim_{x \to -\infty} f(x) = -\infty \text{ et } \lim_{x \to -\infty} (f(x) - x) = -\infty $$  

Donc la courbe $(C_f)$ admet une branche parabolique de direction la droite $(\Delta)$ d’équation $y = x$ au voisinage de $-\infty$  

3) a) $$ \lim_{x \to 1^+} \frac{f(x) - f(1)}{x - 1} = \lim_{x \to 1^+} \frac{\frac{x^3 - 1}{x - 1 (x^2 + 1)}}{x - 1} $$  
$$ = \lim_{x \to 1^+} \frac{x^3 - 1}{(x - 1)(x^2 + 1)} $$  
$$ = \frac{x^2 + x + 1}{3} = \frac{3}{2} $$  

Donc la fonction $f$ est dérivable à droite de 1 et $f' (1) = \frac{3}{2}$  

Donc la courbe $(C_f)$ admet une demi-tangente en 1 d’équation :  
$$ y = f' (1)(x - 1) + f(1) $$  

Donc : $$ y = \frac{3}{2}(x - 1) + f(1) $$  

b) $$ \lim_{x \to 1^-} \frac{f(x) - f(1)}{x - 1} = \lim_{x \to 1^-} \frac{x - 1}{x - 1} = \lim_{x \to 1^-} \frac{2\sqrt{1 - x}}{x - 1} $$  
$$ = \lim_{x \to 1^-} 2 \frac{1}{\sqrt{|1 - x|}} = -\infty $$  

Donc la fonction $f$ n’est pas dérivable à gauche de 1.  

Donc la courbe $(C_f)$ admet une tangente verticale en 1 dirigée vers le haut.  

4) a) Soit $x \in ]1; +\infty[$  
$f$ est dérivable sur $]1; +\infty[$ [fonction rationnelle]  
$$ f'(x) = \frac{3x^2(x^3 + 1) - 3x^2(2 - 1)}{(x^3 + 1)^2} $$  
$$ = \frac{6x^2}{(x^3 + 1)^2} > 0 $$  

Donc la fonction $f$ est strictement croissante sur $[1; +\infty[$.  

b) Montrer que : $\forall x \in ] -\infty; 1] ; f'(x) = -\frac{x}{\sqrt{-x(1 + \sqrt{1 - x})}}$  

Soit $x \in ] -\infty; 1]$ [Somme de deux fonctions]  
$$ f'(x) = 1 + \frac{-1}{2\sqrt{1 - x}} = 1 - \frac{1}{\sqrt{1 - x}} $$  
$$ = \frac{\sqrt{1 - x} - 1}{\sqrt{1 - x}(1 + \sqrt{1 - x})} = -\frac{x}{\sqrt{1 - x}(1 + \sqrt{1 - x})} $$  

c) On a $f’(x) = \frac{-x}{\sqrt{1 - x}(1 + \sqrt{1 - x})} > 0$ donc le signe de $f' sur] -\infty; 1]$ est :  

D’où le tableau de variations de $f$ sur $\mathbb{R}$  

| $x$ | $-\infty$ | $0$ | $1$ | $+\infty$ |  
|---|---|---|---|---|  
| $f'(x)$ | + | 0 | + | |  
| $f(x)$ | $-\infty$ |  | 1 | $+\infty$ |  
```

<!-- Page 84 -->

```markdown
# Prof : fayssal
Site web : www.elboutkhili.jimdofree.com

## 5) Résoudre l’équation $f(x) = 0 ; x \in ]-\infty ; 1[,$ puis interpréter le résultat géométriquement
$f(x) = 0 ; x \in ]-\infty ; 1[ \Leftrightarrow x - 1 + 2\sqrt{1-x} = 0$
$$ \Rightarrow (1-x) - 1 + 2\sqrt{1-x} = 0 $$
$$ \Rightarrow -\sqrt{1-x} = 0 \, ou \, 1-x=2 $$
$$ \sqrt{1-x} = 0 \, ou \, \sqrt{1-x} = 2 $$
$$ 1-x = 0 \, ou \, 1-x = 2 $$
$$ x = 1 \, ou \, x = -3 $$

Donc $S = \{-3\}$
Interprétation géométrique :
$(Cf)$ coupe l'axe des abscisses au point d'abscisse -3

## 6) Tracer $(Cf)$ dans un repère orthonormé $(O; \vec{i}, \vec{j})$

---

## Correction de série 3 : Etude des fcts
2 Bac SX Page 08

## 8) Soit $g$ la restriction de $f$ sur $I = ]1; +\infty[$
a) Montrer que $g$ admet une fonction réciproque $g^{-1}$ définie sur un intervalle $J$ à déterminer
- la fonction $f$ est dérivable sur $]1, +\infty[$ donc elle est continue sur $]1, +\infty[$, d'où la fonction $g$ est continue sur $]1, +\infty[$
- la fonction $f$ est strictement croissante sur $]1, +\infty[$ donc $g$ est strictement croissante sur $]1, +\infty[$

D'où $g$ admet une fonction réciproque $g^{-1}$ définie sur un intervalle $J$ et on a : $J = f(I)$
$$ J = g(I) = g(1, +\infty) = |g(x)|_{|0, 1|} $$

b) Déterminer $g^{-1}(\frac{1}{2})$
$$ g^{-1}(\frac{1}{2}) = y \Rightarrow g(y) = 1 $$
$$ \Rightarrow \frac{y^3 - 1}{y^3 + 1} = \frac{1}{2} $$
$$ \Rightarrow y^3 + 1 - 1 = 1 $$
$$ \Rightarrow y^3 + 1 = \frac{1}{2} $$
$$ \Rightarrow 1 - \frac{2}{y^3 + 1} = \frac{1}{2} $$
$$ \Rightarrow y^3 + 1 = 4 \Leftrightarrow y^3 = 3 $$
Donc $g^{-1}(\frac{1}{2}) = \sqrt[3]{3}$

c) La fonction $g$ est dérivable en $\sqrt[3]{4}$ et on a :
$$ g'(\sqrt[3]{3}) = \frac{6(\sqrt[3]{3})^2}{(\sqrt[3]{3})^2} = \frac{6\sqrt{9}}{16} \neq 0 $$

D’où la fonction $g^{-1}$ est dérivable en $\frac{1}{2}$
$$ (g^{-1})'(\frac{1}{2}) = \frac{1}{g'(\sqrt[3]{3})} = \frac{1}{\frac{1}{16\sqrt[3]{9}}} = \frac{16}{6\sqrt[3]{9}} $$
```

<!-- Page 85 -->

```markdown
# Prof : fayssal
Site web : www.elboutkhili.jimdofree.com

## Exercice 05

$f$ est une fonction tel que $f(x) = x - \frac{1}{\sqrt{x-2}}$

1) Vérifier que $D_f = ]2, +\infty[$  
2)a) Calculer $\lim_{x \to +\infty} f(x)$ et interpréter le résultat géométriquement  
b) Calculer $\lim_{x \to +\infty} f(x)$ puis montrer que la droite $(\Delta) : y = x$ est asymptote oblique à $(C_f)$ au voisinage de $+\infty$  
c) Déterminer la position de $(C_f)$ et $(\Delta)$  
3)a) Montrer que $\forall x \in ]2, +\infty[, \, f'(x) = 1 + \frac{1}{2\sqrt{x-2}^3}$  
b) Dresser la table de variations de $f$  
4) Montrer que l'équation $f(x) = 0$ admet une unique solution $\alpha$ dans $]2, 3[$  
5) Montrer qu'elle admet une fonction réciproque $f^{-1}$ définie sur un intervalle $J$ à déterminer  
6) Calculer $f(3)$ puis tracer $(\Delta) ; (C_f)$ et $(C_f^{-1})$  
7) Montrer que $f^{-1}$ est dérivable en 2 et calculer $f^{-1}(2)$  

### Solution :

1) $x \in D_f \iff \sqrt{x-2} \neq 0 \; et \; x - 2 > 0$  
   $\iff \; x - 2 > 0$  
   $\Rightarrow \; x > 2$  
   Donc, $D_f = ]2, +\infty[$  

2)a) $\lim_{x \to +\infty} f(x) = \lim_{x \to +\infty} \left(x - \frac{1}{\sqrt{x-2}}\right) = -\infty$  
   Car: $\lim_{x \to +\infty} \left( \sqrt{x-2} = +\infty \right)$  
   Interprétation géométrique de $\lim_{x \to +\infty} f(x) = -\infty$  

   b) $\lim_{x \to +\infty} f(x) = \lim_{x \to +\infty} \left(x - \frac{1}{\sqrt{x-2}}\right) = +\infty$  

   Car: $\lim_{x \to +\infty} x = +\infty$ et $\lim_{x \to +\infty} \frac{1}{\sqrt{x-2}} = 0$  

3)a) Montrer que $\forall x \in ]2, +\infty[, \; f'(x) = 1 + \frac{1}{2\sqrt{x-2}^3}$  
   Rappel : $\left(\frac{1}{U}\right)' = -\frac{U'}{U^2}$ et $\sqrt{U}' = \frac{U'}{2\sqrt{U}}$  
   Soit $x \in ]2, +\infty[$  
   $f'(x) = 1 - \frac{1}{2\sqrt{x-2}^2} = 1 + \frac{1}{2\sqrt{x-2}^3}$  

   b) On dresse la table de variations de $f$  
   Donc la fonction $f$ est strictement croissante sur $]2, +\infty[$  
```


<!-- Page 86 -->

```markdown
4) Montrer que l’équation $f(x) = 0$ admet une unique solution $\alpha \in [2, 3]$

- La fonction $f$ est continue sur l'intervalle $[2; 3]$ 
- La fonction $f$ est strictement croissante sur $[2, 3]$ 
- Et on a : $f([2, 3]) = \lim_{x \to 2^+} f(x), \lim_{x \to 3^-} f(x) = ]-\infty; 2[$ 
  Donc $0 \in f([2, 3])$

D’où l’équation $f(x) = 0$ admet une unique solution $\alpha \in [2, 3]$

Interprétation géométrique

La courbe $(Cf)$ coupe l’axe des abscisses en un point unique d’abscisse $\alpha$ tel que $\alpha \in [2, 3]$

5) Montrer que $f$ admet une fonction réciproque $f^{-1}$ définie sur un intervalle $J$ à déterminer

- La fonction $f$ est dérivable sur $]2, +\infty[$ donc elle est continue sur $]2, [$
- La fonction $f$ est strictement croissante sur $]2, +\infty[$ 
  D’où $f$ admet une fonction réciproque $f^{-1}$ définie sur un intervalle $J = f([)$

$$ J = f(I) = f([2, +\infty[) = \lim_{x \to 2^+} f(x), \lim_{x \to +\infty} f(x) $$
$$ = ]-\infty; +\infty[ $$

6) Calculer $f(3)$ puis tracer $(Cf)$ et $(Cf^{-1})$

On a $f(3) = 2$

Construction de $(Cf^{-1})$

Les courbes $(Cf)$ et $(Cf^{-1})$ sont symétriques par rapport à la droite $(D): y = x$

On a la droite $(D)$ d’équations $x = 2$ est asymptote verticale à $(Cf)$ donc la droite $(D')$ d’équations $y = 2$ est asymptote horizontale à $(Cf^{-1})$

7) Montrer que $f^{-1}$ est dérivable en $2$ et calculer $(f^{-1})'(2)$

On a $f(3) = 2$

La fonction $f$ est dérivable en $3$ et on a 

$$ f'(3) = 1 + \frac{1}{2\sqrt{3 - 2^3}} \neq 0 $$

D’où la fonction $f^{-1}$ est dérivable en $2$ et on a : 

$$ (f^{-1})'(2) = \frac{1}{f'(3)} = \frac{1}{\frac{3}{2}} = \frac{2}{3} $$
```

<!-- Page 87 -->

```markdown
# Deuxième bac sciences PC /SVT /ST

## Résumé 4 : Limite d'une suite
### Deuxième bac sciences PC /SVT /ST

### Plan de chapitre 4 : Limite d'une suite
- Cours détaillé
- Résumé de cours
- Série d'exercices
- Correction détaillée des exercices
```

<!-- Page 88 -->

```markdown
# Résumé 4 : 
## Limite d’une suite
### Deuxième bac science expérimentale

Prof Fayssal  
https://elboutkhili.jimdofree.com/
```

<!-- Page 89 -->

```markdown
# Lycée IBNO EL HAYTAM OUJDA
## Résumé de cours : SUITE NUMERIQUE
### 2bac BIOF  Prof : FAYSSAL

0) Raisonnement par récurrence  
Soit $n_0$ un entier fixé et $n$ un entier naturel.  
Pour montrer la proposition $\forall n \geq n_0 : P(n)$  
on suit le principe de récurrence suivant :  
- Pour $n = n_0$, on vérifie que $P(n)$ est vraie,  
- Soit $n$ entier fixé tel que $n \geq n_0$  
On suppose que $P(n)$ est vraie  
Et on montre que $P(n + 1)$ est vraie  
Alors $\forall n \geq n_0 : P(n)$ définit vraie  

1) Suite croissante ; décroissante  
$(U_n)_{n \in \mathbb{N}}$ une suite de premier terme $U_0$  
$$ U_{n+1} - U_n > 0 \Rightarrow (U_n) \text{ est croissante} $$  
$$ U_{n+1} - U_n < 0 \Rightarrow (U_n) \text{ est décroissante} $$  
$$ U_{n+1} - U_n = 0 \Rightarrow (U_n) \text{ est constante} $$  

**Résultat**  
$(U_n)$ est croissante alors $(\forall n \in \mathbb{N} : n \geq U_0)$  
$(U_n)$ est décroissante alors $\forall n \in \mathbb{N} : U_n \leq U_0$  

2) Suite majorée ; minorée ; bornée  
$$ U_n > a \Rightarrow (U_n) \text{ est minorée par } a $$  
$$ U_n < b \Rightarrow (U_n) \text{ est majorée par } b $$  
$$ a < U_n < b \Rightarrow (U_n) \text{ est bornée} $$  

3) Suite convergente  
$$ \lim_{n \to +\infty} U_n = L \in \mathbb{R} \text{ on dit que la suite } (U_n) \text{ est convergente} $$  
- Toute suite croissante et majorée est convergente  
- Toute suite décroissante et minorée est convergente  

5) Limites des suites usuelles  
$$ \lim_{n \to +\infty} n = +\infty ; \lim_{n \to +\infty} n^2 = +\infty $$  
$$ \lim_{n \to +\infty} \sqrt{n} = +\infty ; \lim_{n \to +\infty} n^p = +\infty \quad ; p \in \mathbb{N} $$  
$$ \lim_{n \to +\infty} 1 = 0 \quad ; \lim_{n \to +\infty} \frac{1}{\sqrt{n}} = 0 $$  
$$ \lim_{n \to +\infty} \frac{1}{n} = 0 \quad ; \lim_{n \to +\infty} \frac{1}{n^p} = 0 \quad ; p \in \mathbb{N} $$  

4) Suite géométrique - arithmétique  
$(U_n)_{n \in \mathbb{N}}$ une suite de premier terme $U_0$ et $r$ un entier tel que $0 \leq p \leq n$  
**$(U_n) \text{ géométrique} \qquad (U_n) \text{ arithmétique}**  
**Définition :**  
$$ U_{n+1} = q U_n $$  

$$ U_{n+1} - U_n = r $$  

$$ U_n \text{ en fonction de } n $$  
$$ U_n = U_p \times q^{n-p} $$  
**Cas particulier :**  
$$ U_n = U_0 \times q^n $$  

**Somme des termes**  
$$ S_n = U_p + ... + U_n $$  
$$ S_n = U_p \frac{1 - q^{n-p+1}}{1 - q} $$  
**Cas particulier :**  
$$ S_n = U_0 \frac{1 - q^{n+1}}{1 - q} $$  

$a ; b \in \mathbb{R}$ sont trois termes consécutifs  
$$ a \times c = b^2 $$  
$$ a + c = 2b $$  

6) Limite de la suite géométrique $(q^n)$  
$$ -1 < q < 1 \Rightarrow \lim_{n \to +\infty} q^n = 0 $$  
$$ q > 1 \Rightarrow \lim_{n \to +\infty} q^n = +\infty $$  
$$ q < -1 \Rightarrow (q^n) \text{ n'admet pas de limite} $$  

7) Limite d'une suite et l'ordre  
$$ 
\lim_{n \to +\infty} V_n = +\infty \Rightarrow \lim_{n \to +\infty} V_n = -\infty   
$$  
$$ 
V_n < U_n \Rightarrow \lim_{n \to +\infty} V_n = l \Rightarrow \lim_{n \to +\infty} U_n = l 
$$  
$$ 
|U_n - l| \Rightarrow \lim_{n \to +\infty} U_n = l 
$$  
$$ 
\lim_{n \to +\infty} V_n = 0 \Rightarrow \lim_{n \to +\infty} U_n = l 
$$  

8) La suite $(V_n)$ définie par : $V_n = f(U_n)$  
Si la fonction $f$ est continue en $l$ et  
$$ 
\lim_{n \to +\infty} U_n = l \Rightarrow \lim_{n \to +\infty} V_n = f(l) 
$$  

9) La suite $(U_n)$ liée à une fonction $f$, définit par :  
$$ U_{n+1} = f(U_n) $$  
Si $f$ une fonction définie sur un intervalle $I$ et $(U_n)$ une suite définie par $(\forall n \in \mathbb{N}) : U_{n+1} = f(U_n) \text{ avec } U_0 \in I$  
alors si :  
- $f$ est continue sur l’intervalle $I$  
- $f(I) \subset I$  
Alors la limite de la suite $(U_n)$ est la solution de l’équation $f(x) = x$  
```

<!-- Page 90 -->

```markdown
# Deuxième bac sciences PC /SVT /ST

## Série corrigée 4 : Limite d’une suite
**Deuxième bac sciences PC /SVT /ST**

### Plan de chapitre 4 : Limite d’une suite
- Cours détaillé
- Résumé de cours
- Série d’exercices
- Correction détaillée des exercices
```

<!-- Page 91 -->

```
# Série 4 :
## Limite d'une suite
### Deuxième bac science expérimentale

Prof Fayssal  
https://elboutkhili.jimdofree.com/
```

<!-- Page 92 -->

```markdown
# Prof : Fayssal  
Site web : www.elboutkhili.jimdofree.com  
**Série 04 : Limite d'une suite numérique**  
2bac BIOF  

## Exercice 01  
Déterminer les limites suivantes :  
a) $$ \lim_{n \to +\infty} n^2 - 5n + 1 $$ ;  
b) $$ \lim_{n \to +\infty} n - \sqrt{n} $$ ;  
c) $$ \lim_{n \to +\infty} \frac{5n^2 + 4}{2n^3 + n} $$ ;  
d) $$ \lim_{n \to +\infty} \left( -\frac{1}{2} \right)^n $$ ;  
e) $$ \lim_{n \to +\infty} \frac{5 + 6\left( \frac{2}{3} \right)^n}{n} $$ ;  
f) $$ \lim_{n \to +\infty} 2^n - 3^n $$ ;  

## Exercice 02  
Soit la suite $(u_n)$ tel que $u_{n+1} = 2u_n + 3$ et $u_0 = 0$ avec $n \in \mathbb{N}$  
1) Montrer que : $(\forall n \in \mathbb{N}) \; u_n \geq n$  
2) Déduire la limite de $(u_n)$  

## Exercice 03  
Soit la suite $(u_n)$ définie par $(\forall n \in \mathbb{N}) : u_{n+1} = \frac{1}{3}u_n + 2$ et $u_0 = 2$.  
1) Montrer que : $(\forall n \in \mathbb{N}) \; u_n \leq 3$  
2) Etudier la monotonie de $(u_n)$ et déduire qu'elle converge.  
3) En déduire que : $(\forall n \in \mathbb{N}) \; u_n \geq 2$  
4) Pour tout $n$ dans $\mathbb{N}$ on pose : $v_n = u_n - 3$  
a) Montrer que $(v_n)$ est une suite géométrique  
b) Exprimer $v_n$ en fonction de $n$  
c) Calculer $u_n$ en fonction de $n$ puis préciser la limite de $(u_n)$  
5) Pour tout $n$ dans $\mathbb{N}$ on pose : $S_n = v_0 + v_1 + \ldots + v_n - 1 + v_n$  
Calculer $S_n$ en fonction de $n$ et préciser la limite de $(S_n)$  
Pour tout $n$ dans $\mathbb{N}$ on pose : $T_n = u_0 + u_1 + \ldots + u_n$  
Calculer $T_n$ en fonction de $n$ puis préciser la limite de $(T_n)$  

## Exercice 04  
Soit $(U_n)$ une suite tel que : $(\forall n \in \mathbb{N}) : U_{n+1} = \frac{3U_n}{21 + U_n}$ et $U_0 = 1$  
1) Montrer que : $(\forall n \in \mathbb{N}) \; U_n > 0$  
2) Montrer que : $(\forall n \in \mathbb{N}) \; U_{n+1} \leq \frac{1}{2}U_n$  
3) En déduire la monotonie de $(U_n)$  
4) Montrer que $(v_n \in \mathbb{N})$ et calculer la limite de $(U_n)$  
5) On pose : $(v_n \in \mathbb{N}) : v_n = \sqrt{9 - 2U_n}$, calculer la limite de $(v_n)$  

## Exercice 05  
Soit $(u_n)$ une suite tel que : $(\forall n \in \mathbb{N}) : u_{n+1} = 1 - \frac{9}{u_n + 5}$ et $u_0 = 1$  
1) Montrer par récurrence que : $(\forall n \in \mathbb{N}) \; 2 < u_n < 4$.  
2) Etudier la monotonie de $(u_n)$ et déduire qu'elle converge.  
3) Pour tout $n \in \mathbb{N}$, on pose : $v_n = \frac{u_n - 4}{u_n - 2}$.  
a) Montrer que: $(\forall n \in \mathbb{N}) : 4 - u_{n+1} \leq \frac{4}{5}(4 - u_n)$  
b) En déduire que: $(\forall n \in \mathbb{N}) \; 4 - u_n \leq \left( \frac{4}{5} \right)^n$  
c) Déduire que $(u_n)$ est convergente.  

## Exercice 06  
Soit $f$ une fonction définie sur $\mathbb{R}^+$ par : $f(x) = \frac{x}{\sqrt{1+x^2}}$  
1)a) Montrer que: $(\forall x \in \mathbb{R}^+) : f(x) \leq x$.  
b) Montrer que $f$ est strictement croissante sur $\mathbb{R}^+$.  
2) Soit la suite $(u_n)$ définie par : $(\forall n \in \mathbb{N}) \; 0 < u_0 < 1$ et $u_{n+1} = \frac{1}{2}f(u_n)$.  
a) Montrer que la suite $(u_n)$ est décroissante.  
b) Déduire que $(u_n)$ est convergente puis déterminer sa limite.  

## Exercice 07  
Soit la suite tel que : $(\forall n \in \mathbb{N}) : u_{n+1} = \sqrt{2u_n + 3}$ et $u_0 = 1$.  
1) Montrer que : $(\forall n \in \mathbb{N}) \; 1 \leq u_n \leq 3$.  
2) Montrer que $(u_n)$ est croissante.  
3) Déduire que $(u_n)$ est convergente et déterminer sa limite.  

## Exercice 08  
Soit $(u_n)$ la suite tel que : $(\forall n \in \mathbb{N}) : u_{n+1} = \sqrt{2u_n + 3}$ et $u_0 = 1$.  
1) Montrer que : $(\forall n \in \mathbb{N}) \; 1 \leq u_n \leq 3$.  
2) Montrer que $(u_n)$ est croissante.  
3) Déduire que $(u_n)$ est convergente et déterminer sa limite.  
```

<!-- Page 93 -->

```markdown
# Corrigé de série 4

## Limite d’une suite

### Deuxième bac science expérimentale

* Prof Fayssal  
* https://elboutkhili.jimdofree.com/
```

<!-- Page 94 -->

```markdown
## Prof : Fayssal
### Site web : www.elboutkhili.jimdofree.com
# Série 04 : Limite d'une suite numérique
## 2bac BIOF

### Exercice 01
Déterminer les limites suivantes :
a) $ \lim_{n \to +\infty} n^2 - 5n + 1 $ ;  
b) $ \lim_{n \to +\infty} n - 3\sqrt{n} $ ;  
c) $ \lim_{n \to +\infty} \frac{5n^2 + 4}{4n^2 + 3} $ ;  
d) $ \lim_{n \to +\infty} \left(1 - \frac{1}{2}\right)^n $ ;  
e) $ \lim_{n \to +\infty} 2^n - 3^n $ ;  
f) $ \lim_{n \to +\infty} \left( \frac{5 + 6\left(\frac{2}{3}\right)^n}{3} \right) $.

### Exercice 02
Soit la suite $(u_n)$ tel que $u_{n+1} = 2u_n + 3$ et $u_0 = 0$ avec $ n \in \mathbb{N} $  
1) Montrer que : $(\forall n \in \mathbb{N}) \, u_n \geq 0$  
2) Déduire la limite de $(u_n)$

### Exercice 03
Soit la suite $(u_n)$ définie par $(\forall n \in \mathbb{N}) : u_{n+1} = \frac{1}{3}u_n + 2$ et $u_0 = 2$.  
1) Montrer que : $(\forall n \in \mathbb{N}) \, u_n \leq 3$  
2) Etudier la monotonie de $(u_n)$ et déduire qu'elle converge.  
3) En déduire que : $(\forall n \in \mathbb{N}) \, u_n \geq 2$  
4) Pour tout $n \in \mathbb{N}$ on pose : $v_n = u_n - 3$  
   a) Montrer que $(v_n)$ est une suite géométrique  
   b) Exprimer $v_n$ en fonction de $n$  
5) Calculer $u_n$ en fonction de $n$ puis préciser la limite de $(u_n)$  
6) Pour tout $n$ dans $IN$ on pose : $S_n = v_0 + v_1 + \cdots + v_{n-1} + v_n$  
   Calculer $S_n$ en fonction de $n$ puis préciser la limite de $(S_n)$  
7) Pour tout $n$ dans $IN$ on pose : $T_n = u_0 + u_1 + \cdots + u_{n-1} + u_n$  
   Calculer $T_n$ en fonction de $n$ puis préciser la limite de $(T_n)$

### Exercice 04
Soit $(U_n)$ une suite tel que : $(\forall n \in \mathbb{N}) \, v_n = \frac{3u_n}{21 + u_n}$ et $U_0 = 1$  
1) Montrer que : $(\forall n \in \mathbb{N}) \, U_n > 0$  
2) Montrer que : $(\forall n \in \mathbb{N}) \, U_{n+1} \leq \frac{1}{2} U_n$  
3) En déduire la monotonie de $(U_n)$  
4) Montrer que $(\forall n \in \mathbb{N}) \, 0 < U_n \leq \frac{1}{2}$ et calculer la limite de $(U_n)$  
5) On pose : $(\forall n \in \mathbb{N}) : v_n = \sqrt{n - 2U_n}$, calculer la limite de $(v_n)$

### Exercice 05
$(u_n)$ une suite tel que : $(\forall n \in \mathbb{N})$, $u_{n+1} = 1 - \frac{9}{u_n + 5}$ et $u_0 = 1$  
1) Montrer par récurrence que : $(\forall n \in \mathbb{N}) : 2 < u_n < 4$.  
2) Etudier la monotonie de $(u_n)$ et déduire qu’elle converge.  
3) Pour tout $n \in \mathbb{N}$, on pose: $v_n = \frac{u_n - 4}{u_n - 2}$  
   a) Exprimer $v_n$ en fonction de $n$ et déterminer $\lim_{n \to +\infty} u_n$.  
   b) Montrer que: $(\forall n \in \mathbb{N}) : 4 - u_{n+1} = \frac{4}{5}(4 - u_n)$.  
   c) Déduire une autre fois $\lim_{n \to +\infty} u_n$.

### Exercice 06
$f$ une fonction définie sur $\mathbb{R}^+$ par : $f(x) = \frac{x}{1 + x^2}$  
1) a) Montrer que: $(\forall x \in \mathbb{R}^+) : f(x) \leq x$.  
   b) Montrer que $f$ est strictement croissante sur $\mathbb{R}^+$.  
2) Soit la suite $(u_n)$ définie par : $(\forall n \in \mathbb{N}) \, 0 < u_n < 1$ et $u_{n+1} = f(u_n)$.  
   a) Montrer que la suite $(u_n)$ est décroissante.  
   b) Déduire que $(u_n)$ est convergente puis déterminer sa limite.

### Exercice 07
$(u_n)$ la suite tel que : $(\forall n \in \mathbb{N}) : u_{n+1} = \sqrt{2u_n + 3}$ et $u_0 = 1$.  
1) Montrer que : $(\forall n \in \mathbb{N}) \, 1 < u_n \leq 3$.  
2) Montrer que $(u_n)$ est croissante.  
3) Montrer que $(u_n)$ est convergente et déterminer sa limite.

### Exercice 08
Soit $(u_n)$ la suite tel que : $(\forall n \in \mathbb{N}) \, u_{n+1} = \sqrt{2u_n + 3}$ et $u_0 = 1$.  
1) Montrer que : $(\forall n \in \mathbb{N}) \, 1 < u_n \leq 3$.  
2) Montrer que $(u_n)$ est croissante.  
3) Montrer que $(u_n)$ est convergente et déterminer sa limite.
```

<!-- Page 95 -->

```markdown
# Prof : Fayssal
### Site web : www.elbouthkili.jimdofree.com
## Exercice 01
Déterminer les limites suivantes :
a) $\lim_{n \to +\infty} n^2 - 5n + 1$ ;  
b) $\lim_{n \to +\infty} n - 3\sqrt{n}$ ;  
c) $\lim_{n \to +\infty} \frac{5n^2 + 4}{4n^2 + 3n}$ ;  
d) $\lim_{n \to +\infty} (1 + \left(-\frac{1}{2}\right)^n)$ ;  
e) $\lim_{n \to +\infty} \frac{5 + 6 \left(\frac{2}{3}\right)^n}{1 - \left(\frac{2}{3}\right)^n}$ ;  
f) $\lim_{n \to +\infty} 2^n - 3^n$

## Solution :
a) $\lim_{n \to +\infty} n^2 - 5n + 1 = \lim_{n \to +\infty} n^2$ et $\lim_{n \to +\infty} -5n + 1 = -\infty$  
Il s'agit d'une forme indéterminée du type "$\infty - \infty$".  
\textit{Levons l’indétermination en factorisant par le plus haut degré :}  
$$\lim_{n \to +\infty} n^2 - 5n + 1 = \lim_{n \to +\infty} n^2 \left( 1 - \frac{5n}{n^2} + \frac{1}{n^2} \right)$$  
$$ = \lim_{n \to +\infty} n^2 \left( 1 - \frac{5}{n} + \frac{1}{n^2} \right)$$  
= $1 \cdot \infty = +\infty$

b) $\lim_{n \to -\infty} n = -\infty$ et $\lim_{n \to +\infty} 3\sqrt{n} = +\infty$  
Il s'agit d'une forme indéterminée du type "$\infty - \infty$".  
$$\lim_{n \to +\infty} n - 3\sqrt{n} = \lim_{n \to +\infty} n \left( 1 - \frac{3\sqrt{n}}{n} \right)$$  
$$ = \lim_{n \to +\infty} n \left( 1 - \frac{3}{\sqrt{n}} \right)$$  
= $1 \cdot \infty = +\infty$

c) $\lim_{n \to +\infty} \frac{5n^2 + 4}{4n^2 + 3n}$ 
et $ \lim_{n \to +\infty} n^2 + 4$  
Il s'agit d'une forme indéterminée de type "$\frac{\infty}{\infty}$".  
\textit{Levons l’indétermination en factorisant le numérateur et le dénominateur par le monôme de plus haut degré :}  
$$\lim_{n \to +\infty} \frac{5n^2 + 4}{4n^2 + 3n} = \lim_{n \to +\infty} \frac{5 + \frac{4}{n^2}}{4 + \frac{3}{n}} = \frac{5}{4}$$

d) $\lim_{n \to +\infty} (1 + \left(-\frac{1}{2}\right)^n)$  
On a $\lim_{n \to +\infty} \left(-\frac{1}{2}\right)^n = 0, \text{ Car } -1 < -\frac{1}{2} < 1$.  
Donc $\lim_{n \to +\infty} \left(1 + \left(-\frac{1}{2}\right)^n\right) = 1$.

e) $\lim_{n \to +\infty} \frac{5 + 6 \left(\frac{2}{3}\right)^n}{1 - \left(\frac{2}{3}\right)^n}$  
On a $\lim_{n \to +\infty} \left(\frac{2}{3}\right)^n = 0, \text{ Car } -1 < -\frac{2}{3} < 1$.  
Donc $\lim_{n \to +\infty} \frac{5 + 6 \left(\frac{2}{3}\right)^n}{1 - \left(\frac{2}{3}\right)^n} = \frac{5 + 0}{1 - 0} = 5$.

f) $\lim_{n \to +\infty} 2^n - 3^n = -\infty$.
```


<!-- Page 96 -->

```markdown
# Prof : Fayssal
Site web : www.elboutkhili.jimdofree.com  
Corrigée de série 04 : Limite d’une suite 2bac Sx  
Page 02

f)  $$ \lim_{n \to +\infty} 2^n - 3^n = \lim_{n \to +\infty} \frac{2^n}{3^n} - 1 = 3^{n} \left( \left(\frac{2}{3}\right)^{n} - 1 \right) $$

Il s'agit d'une forme indéterminée de type $\infty - \infty$ ; Levons l'indétermination :

$$ 2^n - 3^n = 3^n \left( \left(\frac{2}{3}\right)^{n} - 1 \right) $$
Or $$ \lim_{n \to +\infty} \left(\frac{2}{3}\right)^{n} = 0, \, Car \, 1 < 2^2 < 3 $$

Donc $$ \lim_{n \to +\infty} 3^n \left( \left(\frac{2}{3}\right)^{n} - 1 \right) = -1 $$

Ou $$ \lim_{n \to +\infty} 3^n - 1 > 1 $$

Donc par limite d'un produit : $$ \lim_{n \to +\infty} 3^n \left( \left(\frac{2}{3}\right)^{n} - 1 \right) = -\infty $$

Soit : $$ \lim_{n \to +\infty} 2^n - 3^n = -\infty $$

## Exercice 02

Soit la suite $(u_n)$ définie pour tout entier naturel $n$ par :

$$ u_{n+1} = 2 u_n + 3 \quad et \quad u_0 = 0 $$

1) Montrer que : $(\forall n \in \mathbb{N}) \; u_n \ge n$  
2) Déduire la limite de $(u_n)$  

**Solution :**

1) Montrons par récurrence que : $(\forall n \in \mathbb{N}) \; u_n \ge n$  
  > Pour $n=0 \; u_0 = 0 \ge 0$  
La propriété est donc vraie pour $n = 0$  
Soit $n$ un entier naturel,  
  Supposons que $u_n \ge n$ et montrons que $u_{n+1} \ge n + 1$.

On a :  
$$ u_n \ge n \Rightarrow 2u_n \ge 2n $$  
et donc  
$$ 2u_n + 3 \ge 2n + 3. $$  
d'où :  
$$ u_{n+1} = 2u_n + 3 \ge 2n + 3 \ge n + 1 $$

Donc $u_{n+1} \ge n + 1$

D'après le principe de récurrence, on a $(\forall n \in \mathbb{N}) \; u_n \ge n$

## Exercice 03

Soit la suite $(u_n)$ définie par $(\forall n \in \mathbb{N}) \; u_{n+1} = \frac{1}{3} u_n + 2 \quad et \quad u_0 = 2.$

1) Montrer que : $(\forall n \in \mathbb{N}) \; u_n \le 3$  
2) Etudier la monotonie de $(u_n)$ et déduire qu'elle converge.  
3) En déduire que : $(\forall n \in \mathbb{N}) \; u_n \ge 2$  
4) Pour tout $n \in \mathbb{N}$ on pose :  
  a) Montrer que $(v_n)$ est une suite géométrique  
  b) Exprimer $v_n$ en fonction de $n$  
  c) Calculer $u_n$ en fonction de $n$ puis préciser la limite de $(u_n)$  
5) Pour tout $n \in \mathbb{N}$ on pose :  $S_n = v_0 + v_1 + \cdots + v_{n-1} + v_n$  
Calculer $S_n$ en fonction de $n$ puis préciser la limite de $(S_n)$  
6) Pour tout $n \in \mathbb{N}$ on pose : $T_n = u_1 + u_2 + \cdots + u_{n-1} + u_n$  
Calculer $T_n$ en fonction de $n$ puis préciser la limite de $(T_n)$  

**Solution :**

1) Démontrer par récurrence que la suite $(u_n)$ est majorée par 3.  
Pour $n=0\; u_0 = 2 < 3$  
La propriété est donc vraie pour $n = 0$  
Soit $n$ un entier naturel,  
Supposons que $u_n < 3$ et montrons que $u_{n+1} < 3$.

On a :  
$$ u_n < 3 \Rightarrow \frac{1}{3} u_n < \frac{1}{3} \cdot 3 = 1 $$  
et donc  
$$ u_{n+1} = \frac{1}{3} u_n + 2 < 1 + 2 = 3; $$  
D'après le principe de récurrence, on a : $(\forall n \in \mathbb{N})\; u_n < 3$

2) Soit $n$ un entier naturel,  
$$ u_{n+1} - u_n = \frac{1}{3} u_n + 2 - u_n = \left(\frac{1}{3} - 1\right) u_n + 2 = -\frac{2}{3} u_n + 2 $$

Donc $u_{n+1} - u_n = \frac{1}{3} u_n + 2 - 0 = -\frac{2}{3}(u_n - 3) < 0$ (car $u_n < 3$).  
Ainsi $(u_n)$ est décroissante.

3) Soit un entier naturel,  
$$ u_{n+1} - u_n = -\frac{2}{3}(u_n - 3) $$  
$u_{n+1} - u_n$ est donc toujours positif

Soit un entier naturel,  
$$ u_n + 1 - u_{n+1} = \frac{1}{3} u_n + 2 - 1 $$  
$$ \Rightarrow u_{n+1} - 3 < 0 $$

On a donc toujours la limite $\lim_{n \to +\infty} u_n = 3$.

Soit un entier naturel,  
$$ u_{n+1} - u_n = 1 - \frac{2}{3} (u_n) + 1 $$

$$ u_{n+1} - u_n = -\frac{2}{3}(u_n - 1) $$

Soit un entier naturel,  
$$ u_{n+1} = u_n - 1 - \frac{2}{3}(u_n - 1 + 2) $$
```

<!-- Page 97 -->

```markdown
# Prof : Fayçal
Site web : www.elbouthkili.jimdofree.com

## Corrigé de série 04 : Limite d’une suite 2bac Sx
Page 03

$$ u_n < 3 \Rightarrow u_n - 3 < 0 \Rightarrow -\frac{2}{3} < (u_n - 3) > 0 \Rightarrow u_{n+1} - u_n > 0 $$

Donc la suite $(u_n)$ est croissante.  
On a la suite $(u_n)$ est majorée par 3 et croissante donc elle est convergente.  

3) En déduire que : $(\forall n \in \mathbb{N}) : u_n \geq 2$  
On a la suite $(u_n)$ est croissante donc $(\forall n \in \mathbb{N}) : u_0 \geq 2$  

4) Pour tout $n \in \mathbb{N}$ on pose : $v_n = u_n - 3$  
a) Montrer que $(v_n)$ est une suite géométrique.  

Soit $n$ un entier naturel,  
$$ v_{n+1} = u_{n+1} - 3 $$
$$ = \frac{1}{3}u_n + 2 - 3 $$
$$ = \frac{1}{3}u_n - 1 $$
$$ = \frac{1}{3}(u_n - 3) $$
$$ = \frac{1}{3}v_n $$

Donc la suite $(v_n)$ est géométrique de raison $q = \frac{1}{3}$ et de premier terme $v_0 = u_0 - 3 = 2 - 3 = -1$.  

b) Exprimer $v_n$ en fonction de $n$.  
On a la suite $(v_n)$ est géométrique de raison $q = \frac{1}{3}$ et de premier terme $v_0 = -1$.  
Donc  
$$ v_n = v_0 \times (q)^n $$
$$ v_n = -1 \times \left(\frac{1}{3}\right)^n $$

c) Calculer $u_n$ en fonction de $n$ puis préciser la limite de $(u_n)$.  
On a  
$$ v_n = u_n - 3 $$
Donc  
$$ u_n = 3 + v_n $$
Donc  
$$ u_n = 3 - \left(\frac{1}{3}\right)^n $$

5) Pour tout $n \in \mathbb{N}$ on pose : $S_n = v_0 + v_1 + \cdots + v_{n-1} + v_n$.  
Calculer $S_n$ en fonction de $n$ puis préciser la limite de $(S_n)$.  
On a la suite $(v_n)$ est géométrique de raison $q = \frac{1}{3}$ et de premier terme $v_0 = -1$  
$$ S_n = v_0 \times \frac{1 - (q)^{n}}{1 - q} $$
Donc  
$$ S_n = -1 \times \frac{1 - \left(-\frac{1}{3}\right)^{n}}{\frac{2}{3}} $$
$$ = -\frac{3}{2}\left(1 - \left(-\frac{1}{3}\right)^{n+1}\right) $$

$$ \lim_{n \to +\infty} S_n = \lim_{n \to +\infty} -\frac{3}{2}\left(1 - \left(-\frac{1}{3}\right)^{n+1}\right) = -\frac{3}{2} $$

6) Pour tout $n \in \mathbb{N}$ on pose : $T_n = u_0 + u_1 + \cdots + u_{n-1} + u_n$.  
Calculer $T_n$ en fonction de $n$ puis préciser la limite de $(T_n)$.  
On a $u_n = 3 + v_n$ donc :  
$$ T_n = u_0 + u_1 + \cdots + u_{n-1} + u_n $$
$$ = 3 + v_0 + 3 + v_1 + \cdots + 3 + v_{n-1} + v_n $$
$$ = 3(n + 1) + S_n $$

Donc  
$$ T_n = 3(n + 1) - \frac{3}{2}\left(1 - \left(-\frac{1}{3}\right)^{n+1}\right) $$

$$ \lim_{n \to +\infty} T_n = \lim_{n \to +\infty} 3(n + 1) - \frac{3}{2}\left(1 - \left(-\frac{1}{3}\right)^{n+1}\right) = +\infty $$  

Car $$ \lim_{n \to +\infty} 3(n + 1) = +\infty $$ et $$ \lim_{n \to +\infty} S_n = -\frac{3}{2} $$  
```

<!-- Page 98 -->

```markdown
# Prof : Fayssal
**Site web :** www.elbouthkili.jimdofree.com

## Exercice 04

Soit $(u_n)$ une suite tel que : $(\forall n \in \mathbb{N}) : u_{n+1} = \frac{3u_n}{21+u_n}$ et $u_0 = 1$

1) Montrer que ; $(\forall n \in \mathbb{N}) ; u_n > 0$  
2) Montrer que ; $(\forall n \in \mathbb{N}) ; u_{n+1} \leq \frac{1}{7} u_n$  
3) En déduire la monotonie de $(u_n)$  
4) Montrer que $(\forall n \in \mathbb{N}) ; 0 < u_n \leq \left( \frac{2}{3} \right)^n$ puis calculer la limite de $(u_n)$  
5) On pose : $(\forall n \in \mathbb{N}) : v_n = \sqrt{9 - 2u_n} ,$ Calculer la limite de $(v_n)$

### Solution :

1) Pour $n=0$ on a $u_0 = 1 > 0$ donc la proposition est vraie pour $n = 0$  
   Soit $n$ un entier naturel  
   Supposons que $u_n > 0$ et montrons que $u_{n+1} > 0$.  
   * On a : $u_{n+1} = \frac{3u_n}{21 + u_n}$  
     Et on a : $u_n > 0$ donc $3u_n > 0$ et $21 + u_n > 0$  
     Donc $\frac{3u_n}{21 + u_n} > 0$  
     Donc $u_{n+1} > 0.$ D'après le principe de récurrence, on a $(\forall n \in \mathbb{N}) : u_n > 0$

2) 1ère méthode : (la différence)  
   $u_{n+1} = \frac{1}{7} u_n = \frac{3u_n}{21 + u_n} = \frac{7 \times 3u_n - (21 + u_n)u_n}{7(21 + u_n)}$  
   $$ = \frac{21u_n - 21u_n - u_n^2}{7(21 + u_n)} = \frac{-u_n^2}{7(21 + u_n)} < 0 $$  
   Donc $u_{n+1} - \frac{1}{7} u_n \leq 0$  
   D'où $(\forall n \in \mathbb{N}); u_{n+1} \leq \frac{1}{7} u_n$

3) 2ème méthode : (l'encadrement)  
   On a : $u_n > 0$ donc $21 + u_n \geq 21$  
   Donc :  
   $$ \frac{1}{21 + u_n} \leq \frac{1}{21} $$  
   Donc :  
   $$ \frac{3}{21 + u_n} \leq \frac{3}{21} $$  
   Donc :  
   $$ \frac{3}{21 + u_n} < \frac{1}{7} $$  
   D'où : $u_{n+1} \leq \frac{1}{7} u_n ; $ car $u_n > 0$  
```

<!-- Page 99 -->

```markdown
# Prof : Fayssal
## Site web : www.elboutkhili.jimdofree.com
## Corrigé de série 04 : Limite d’une suite 2bac Sx 
### Page 05

3) Soit $n \in \mathbb{N}$ 

on a : $u_{n+1} \leq \frac{1}{7}u_n$ et $u_n > 0$

Donc : $u_{n+1} \leq \frac{1}{7}u_n \leq u_n$

Donc : $u_{n+1} \leq u_n$

Donc la suite $(u_n)$ est décroissante.

1) Montrons que : $\forall n \in \mathbb{N} ; 0 < u_n \leq \left( \frac{1}{7} \right)^{n}$

On a : $(\forall n \in \mathbb{N}) ; 0 < u_n \text{ il suffit de montrer que } u_n \leq \left( \frac{1}{7} \right)^{n}$

1ère méthode : (par récurrence)

- Pour $n=0$ on a $u_0 = 1 \leq \left( \frac{1}{7} \right)^{0} = 1$

La propriété est donc vraie pour $n = 0$

Soit $n$ un entier naturel, 

Supposons que $u_n \leq \left( \frac{1}{7} \right)^{n}$ montrons que $u_{n+1} \leq \left( \frac{1}{7} \right)^{n+1}.$

On a : $u_n \leq \left( \frac{1}{7} \right)^{n} \Rightarrow \frac{1}{7} u_n \leq \left( \frac{1}{7} \right)^{n+1}$

Et on a d’après la question précédente $u_{n+1} \leq \frac{1}{7} u_n$

Donc $u_{n+1} \leq \left( \frac{1}{7} \right)^{n+1}$. 

D'où : $u_{n+1} \leq \left( \frac{1}{7} \right)^{n+1}$

D’après le principe de récurrence, on a $\forall n \in \mathbb{N}; u_n \leq \left( \frac{1}{7} \right)^{n}$

2ème méthode :

On a : $(\forall n \in \mathbb{N}) : u_{n+1} \leq \frac{1}{7}u_n$

Pour $n=0$ on a : $u_1 \leq \frac{1}{7}u_0$

Pour $n=1$ on a : $u_2 \leq \frac{1}{7}u_1$

...

Pour $n-2$ on a : $u_{n-1} \leq \frac{1}{7}u_{n-2}$

Pour $n-1$ on a : $u_n \leq \frac{1}{7}u_{n-1}$

On multiplie les inégalités terme à terme car sont positives, on trouve : 

$$u_1 \times u_2 \times ... \times u_{n-1} \leq \frac{1}{7}u_0 \times \frac{1}{7}u_1 \times ... \times \frac{1}{7}u_{n-1} \times \frac{1}{7}u_n$$

C-à-dire : $u_n \leq \left( \frac{1}{7} \right)^{n}$

D’où $(\forall n \in \mathbb{N}); 0 < u_n \leq \left( \frac{1}{7} \right)^{n}$

Dédite $\lim_{n \to +\infty} u_n.$

On a : $(\forall n \in \mathbb{N}); 0 < u_n \leq \left( \frac{1}{7} \right)^{n}$

Et on a : $-1 < \frac{1}{7} < 1$ donc 

$$\lim_{n \to +\infty} \left( \frac{1}{7} \right)^{n} = 0$$

Donc d’après théorème d’encadrement on a : $\lim_{n \to +\infty} u_n = 0$

5) On pose : $(\forall n \in \mathbb{N}) : v_n = \sqrt{9 - 2u_n}$. Calculer la limite de $(v_n)$

On a : $v_n = \sqrt{9 - 2u_n} = f(u_n)$ tel que : $x \mapsto \sqrt{9 - 2x}$

Et on a la fonction $f$ est continue en $0$ et $\lim_{n \to +\infty} u_n = 0$

Donc $$\lim_{n \to +\infty} v_n = f(0) = \sqrt{9} = 3$$
```

<!-- Page 100 -->

```markdown
# Prof : Fayssal
### Site web : www.elboutkhili.jimdofree.com

## Exercice 05

Soit $(u_n)$ une suite telle que : $(\forall n \in \mathbb{N})$, $u_{n+1} = 1 - \frac{9}{u_{n+5}}$ et $u_0 = 1$

1) Montrer que : $(\forall n \in \mathbb{N})\: u_n > -2$
2) Montrer que $(u_n)$ est convergeante
3) Pour tout $n$ dans $\mathbb{N}$ on pose : $v_n = \frac{1}{u_{n+2}}$

a) Montrer que $(v_n)$ est une suite arithmétique  
b) Calculer $u_n$ en fonction de $n$ puis préciser la limite de $(u_n)$

**Solution :**

1) Démontrons par récurrence que $(\forall n \in \mathbb{N})\: u_n > -2$  
   > Pour $n=0$ on a $u_0 = 1 > -2$  
   La propriété est donc vraie pour $n = 0$  
   > Soit $n$ un entier naturel,  
   Supposons que $u_n > -2$ et montrons que $u_{n+1} > -2$.

$$
u_{n+1} + 2 = 1 - \frac{9}{u_{n+5}} + 2 = 3 - \frac{9}{u_{n+5}} 
$$

$$
= 3 - \frac{3(u_n + 5) - 9}{u_n + 5} = \frac{3(u_n + 5) - 9}{u_n + 5} 
$$

$$
= \frac{3u_n + 6}{u_n + 5} 
$$

On a $u_n > -2 \Rightarrow u_n + 5 > 3 \Rightarrow u_n > 0$  
Et on a $u_n > -2 \Rightarrow u_n + 2 > 0 \Rightarrow 3(u_n + 2) > 0$  
Donc $3(u_{n+2}) \Rightarrow u_{n+1} + 2 > 0 \Rightarrow u_{n+1} > -2$  
D'après le principe de récurrence, on a : $(\forall n \in \mathbb{N})\: u_n > -2$

2) Soit $n$ un entier naturel,  
$$
u_{n+1} - u_n = 1 - \frac{9}{u_n} - u_n 
$$
$$
= \frac{u_n + 5 - 9 - u_n(u_n + 5)}{u_n + 5} 
$$
$$
= \frac{-4 - u_n^2 - 4u_n}{u_n + 5} 
$$
$$
= \frac{-(u_n + 2)^2}{u_n + 5} < 0
$$
Donc : $u_{n+1} - u_n < 0$  
Donc la suite $(u_n)$ est décroissante

La suite $(u_n)$ est décroissante et minorée par -2 donc elle est convergeante.

3)a) Montrer que $(v_n)$ est une suite arithmétique  
$$
v_{n+1} - v_n = \frac{1}{u_{n+1} + 2} - \frac{1}{u_n + 2} 
$$
$$
= \frac{1}{3(u_{n+2})} - \frac{1}{u_n + 2}
$$
$$
= \frac{u_n + 5}{3(u_n + 2)} 
$$
$$
= \frac{1}{3(u_n + 2)} 
$$

Donc $(v_n)$ est arithmétique de raison $r = \frac{1}{3}$ et $v_0 = \frac{1}{u_0 + 2} = \frac{1}{3}$

b) Soit $n$ un entier naturel,  
la suite $(v_n)$ est arithmétique de raison $r = \frac{1}{3}$ et $v_0 = \frac{1}{3}$.  
$$
v_n = v_0 + r(n - 0) 
$$
$$
= \frac{1}{3} + \frac{1}{3}n 
$$
$$
= \frac{1}{3}(1 + n) 
$$
```

<!-- Page 101 -->

```markdown
Prof : Fayssal  
Site web : www.elboutkhili.jimdofree.com  
Corrigé de série 04 : Limite d'une suite 2bac Sx  
Page 07  

Solution :  
1) Pour $n=0$ on a $2 < u_0 = 3 < 4$ donc la PV pour $n = 0$  
Supposons que $2 < u_n < 4$ et montrons que $2 < u_{n+1} < 4$.  
* $$u_{n+1} - 2 = \frac{8(u_{n-1})}{u_{n+2}} - 2 = \frac{8(u_n - 2)}{u_n + 2}$$  
$$= \frac{6u_n - 12}{u_n + 2} = \frac{6(u_n - 2)}{u_n + 2}$$  
On a $u_n > 2$ donc $u_n + 2 > 4$.  
Donc $u_n + 2 > 0$  
Et $u_n > 2$  

donc $u_n - 2 > 0$  
Donc $6(u_n - 2) > 0$  
Donc : $$\frac{6(u_n - 2)}{u_n + 2} > 0$$  
Donc $u_{n+1} - 2 > 0$  
Donc $u_{n+1} > 2$.  
D'où $2 < u_{n+1} < 4$  

2) Etudier la monotonie de $(u_n)$ et déduire qu’elle converge.  

3) Pour tout $n \in \mathbb{N}$, on pose : $v_n = \frac{u_n - 4}{u_n - 2}$  
a-Montrer que la suite $(v_n)$ est géométrique.  
b- Exprimer $v_n$ en fonction de $n$ et déterminer $\lim_{n \to +\infty} u_n$.  

4) a-Montrer que : $(\forall n \in \mathbb{N}); \; 4 - u_{n+1} \leq \frac{4}{5}(4 - u_n)$  
b-En déduire que : $(\forall n \in \mathbb{N}); \; 4 - u_n \leq \left( \frac{4}{5} \right)^n$  
c-Déduire une autre fois $\lim_{n \to +\infty} u_n$.  
```

<!-- Page 102 -->

```markdown
## Corrigé de série 04 : Limite d’une suite 2bac Sx

2) Soit $n$ un entier naturel,  
$$ u_{n+1} - u_n = \frac{8(u_n - 1)}{u_n + 2} = \frac{8(u_n - 1) - u_{n}^2 - 2u_n}{u_n + 2} = \frac{8u_n - 8 - u_{n}^2 - 2u_n}{u_n + 2} = \frac{- (u_n^2 - 6u_n + 8)}{u_n + 2} $$  
Donc : $u_{n+1} - u_n > 0$  
Donc la suite $(u_n)$ est croissante  
La suite $(u_n)$ est croissante et majorée par 4 donc elle est convergente  

3)a) Montrer que $(v_n)$ est une suite géométrique  
$$ v_{n+1} = \frac{u_{n+1} - 4}{u_{n+1} - 2} = \frac{u_n + 2}{6(u_n - 2)} = \frac{6(u_n - 4)}{6(u_n - 2)} = \frac{u_n - 4}{u_n - 2} = \frac{2}{3}v_n $$  
Donc $(v_n)$ est géométrique de raison $q = \frac{2}{3}$ et $v_0 = \frac{u_0 - 4}{u_0 - 2} = -1$  

a) $v_n$ en fonction de $n$  
La suite $(v_n)$ est géométrique de raison $q = \frac{2}{3}$ et $v_0 = -1$  
Donc $$ v_n = v_0 \cdot q^n = - \left( \frac{2}{3} \right)^n $$  

* $u_n$ en fonction de $n$  
$$ v_n = \frac{u_n - 4}{u_n - 2} \Rightarrow u_n(v_n - 2) = u_n - 4 $$  
$\Rightarrow u_n(v_n - 1) = 2v_n - 4$  
$\Rightarrow u_n = \frac{2v_n - 4}{v_n - 1}$  

* la limite de la suite $(u_n)$  
On a : $- 1 < z \leq \frac{2}{3} < 1$ donc  
$$ \lim_{n \to +\infty} \left( \frac{2}{3} \right)^n = 0 $$  
D’où : $$ \lim_{n \to +\infty} u_n = \lim_{n \to +\infty} \left( -\frac{(2/3)^n - 4}{-1} \right) = 4; $$  

4)a) Soit $n$ un entier naturel,  
1ère méthode : (la différence)  
$4 - u_{n+1} - \frac{4}{5}(4 - u_n) = \frac{4(4 - u_n)}{u_n + 2} = \frac{4(4 - u_n)}{u_n + 2} = 4(4 - u_n)$  
$1 = \frac{4(4 - u_n) \cdot 5}{(4 - u_n)(3 - u_n)}$  
Donc : $4 - u_{n+1} - \frac{4}{5} (4 - u_n) \leq 0$  

D’où $(\forall n \in \mathbb{N}) : 4 - u_{n+1} \leq \frac{4}{5}(4 - u_n)$  
```

<!-- Page 103 -->

```markdown
# Prof : Fayssal  
## Site web : www.elboutkhili.jimdofree.com  

## 2ème méthode : (l'encadrement)  
On a d'après la question 1) : $4 - u_{n+1} = \frac{4(4 - u_n)}{u_n + 2}$  

En a la suite $(u_n)$ est croissante donc $u_n \geq u_0$ c-à-dire $u_n \geq 3$  
Donc $u_n + 2 \geq 5$  
Donc : $ \frac{1}{u_n + 2} \leq \frac{1}{5}$  
Et on a $u_n \geq 4$ donc $4 - u_n > 0$  
Donc $4(4 - u_n) > 0$  

D'où : $ \frac{1}{u_n + 2} \times 4(4 - u_n) \leq \frac{1}{5} \times 4(4 - u_n)$  
DONC : $ \frac{4(4 - u_n)}{u_n + 2} \leq \frac{4}{5} (4 - u_n)$  
D'où $4 - u_{n+1} \leq \frac{4}{5} (4 - u_n)$  

### b- En déduire que: $(\forall n \in \mathbb{N}); 4 - u_n \leq \left( \frac{4}{5} \right)^n$  
1ère méthode : (par récurrence)  
➤ Pour $n=0$ on a $4 - u_0 = 4 - 3 = 1 = \left( \frac{4}{5} \right)^0$  
La propriété est donc vraie pour $n = 0$  
➤ Soit $n$ un entier naturel,  
Supposons que $4 - u_n \leq \left( \frac{4}{5} \right)^n$ montrons que $4 - u_{n+1} \leq \left( \frac{4}{5} \right)^{n+1}$.  
On a $4 - u_n \left( \frac{4}{5} \right)^n \Rightarrow  4 - u_{n+1} \leq \frac{4}{5}(4 - u_n)$  
Et on a d'après la question précédente $4 - u_{n+1} \leq \frac{4}{5} (4 - u_n)$  
Donc $4 - u_{n+1} \leq \left( \frac{4}{5} \right)^{n+1}$  

➤ D'après le principe de récurrence, on a $(\forall n \in \mathbb{N}); 4 - u_n \leq \left( \frac{4}{5} \right)^n$  

### c-Dédite une autre fois $\lim_{n \to \infty} u_n$.  
On a $u_n \geq 4$ donc $4 - u_n > 0$  
Donc : $(\forall n \in \mathbb{N}); 0 < 4 - u_n \leq \left( \frac{4}{5} \right)^n$  
Et on a : $-1 < \frac{4}{5} < 1$ donc $\lim_{n \to \infty} \left( \frac{4}{5} \right)^n = 0$  
D'où $\lim_{n \to \infty} u_n = 4$
```

<!-- Page 104 -->

```markdown
# Prof : Fayssal
Site web : www.elboutkhili.jimdofree.com

## Exercice 07
$f$ définie sur $\mathbb{R}^+$ par : $f(x) = \frac{x}{\sqrt{1+x^2}}$

1) a-Montrer que $(\forall x \in \mathbb{R}^+): f(x) \leq x$.
   b-Montrer que $f$ est strictement croissante sur $\mathbb{R}^+$.

2) On considère la suite $(u_n)$ définie par:
$$u_0 = \frac{1}{2} \quad \text{et} \quad u_{n+1} = f(u_n) \quad \text{pour tout } n \in \mathbb{N}$$
   a-Montrer que $(\forall n \in \mathbb{N}) : 0 < u_n < 1$.
   b-Montrer que la suite $(u_n)$ est décroissante.
   c-En déduire que $(u_n)$ est convergente puis déterminer sa limite.

## Solution :
1) a) Soit $x \in \mathbb{R}^+$ 
$$
f(x) - x = \frac{x}{\sqrt{1+x^2}} - x 
= \frac{x - x\sqrt{1+x^2}}{\sqrt{1+x^2}} 
= \frac{x^2 - x^2\sqrt{1+x^2}}{1+x^2} 
= \frac{x^2(1+x^2)}{(x + x\sqrt{1+x^2})} 
= \frac{-x^4}{(x + x\sqrt{1+x^2})} \leq 0
$$
Donc : $f(x) - x \leq 0$; D'où : $(\forall x \in \mathbb{R}^+): f(x) \leq x$

b) Soit $x \in \mathbb{R}^+$ 
$$
f'(x) = \frac{(1 \times \sqrt{1+x^2}) - (x \times \frac{2x}{2\sqrt{1+x^2}})}{(1+x^2)} 
= \frac{\sqrt{1+x^2} - \frac{x^2}{\sqrt{1+x^2}}}{1+x^2} 
= \frac{1+x^2 - x^2}{(1+x^2)\sqrt{1+x^2}} 
= \frac{1}{(1+x^2)\sqrt{1+x^2}} > 0
$$
Donc la fonction $f$ est strictement croissante sur $\mathbb{R}^+$.

3) a) Démontrer par récurrence que $(\forall n \in \mathbb{N}) : 0 < u_n \leq 1$ 
   Pour $n=0$ on a $0 < u_0 = \frac{1}{2} \leq 1$.
   La propriété est donc vraie pour $n=0$.
   Soit $n$ un entier naturel, supposons que $0 < u_n \leq 1$ et montrons que $0 < u_{n+1} \leq 1$.

On sait que la fonction $f$ est strictement croissante sur l'intervalle $[0; 1]$ et $0 \leq u_n \leq 1$, donc :
$$
0 < u_n \leq 1 \implies f(0) \leq f(u_n) \leq f(1) 
\implies 0 < u_{n+1} \leq \frac{1}{2} \quad ; \quad \text{car } \frac{1}{2} < 1
$$
D'après le principe de récurrence, on a : $(\forall n \in \mathbb{N}) \quad 0 < u_n \leq 1$.

b) Soit $n$ un entier naturel, 
On a : $(\forall x \in [0; 1]): f(x) < x$, d'après 1)a) et $u_n \in [0; 1]$ (d'après 3)a)
Donc on pose $x = u_n$, on trouve $f(u_n) < u_n$ 
Donc : $u_{n+1} < u_n$, d'où la suite $(u_n)$ est décroissante.
```

<!-- Page 105 -->

```markdown
c) la suite $(u_n)$ est décroissante et minorée par 0 donc elle est convergente.
- La fonction $f$ est continue sur l’intervalle $[0; 1]$ ; car elle est dérivable sur $[0; 1]$
- $f([0; 1]) = [f(0); f(1)] = [0; \frac{1}{2}] \subset [0; 1]$
- $u_0 = \frac{1}{2} \in [0; 1]$

La suite $(u_n)$ est convergente.
Alors la limite de la suite $(u_n)$ est $L$ la solution de l’équation 

$$f(x) = x$$
$$f(x) = x \iff f(x) - x = 0$$
$$\iff -x^4 = 0 ; \text{ car } f(x) - x \text{ déjà calculé}$$
$$\iff (x + \sqrt{1 + x^2})\sqrt{1 + x^2} = 0$$
$$\iff -x^4 = 0$$
$$\iff x = 0$$

Donc la limite de la suite $(u_n)$ est 0.

## Exercice 08

$(u_n)$ définit la suite tel que ; $(n \in \mathbb{N}) ; u_{n+1} = \sqrt{2u_n + 3} \text{ et } u_0 = 1.$
1) Montrer que $(\forall n \in \mathbb{N}) ; 1 \leq u_n \leq 3$
2) Montrer que $(u_n)$ est croissante
3) Déduire que $(u_n)$ est convergente et déterminer sa limite.

### Solution

1) Démontrer par récurrence que $(\forall n \in \mathbb{N}) ; 1 \leq u_n \leq 3.$
- Pour $n = 0$ on a $1 \leq u_0 = 1 \leq 3$.
La propriété est donc vraie pour $n = 0$.
Soit $n$ un entier naturel.
Supposons que $1 \leq u_n \leq 3$ et montrons que $1 \leq u_{n+1} \leq 3$.
Considérons la fonction définie par : $f : [1; 3] \to \mathbb{R}$ et $f(x) = \sqrt{2x + 3}$.
On a $f’(x) = \frac{2}{2\sqrt{2x + 3}} > 0$.
Donc la fonction $f$ est strictement croissante sur $[1; 3]$.

$$1 \leq u_n \leq 3 \Rightarrow f(1) \leq f(u_n) \leq f(3)$$
$$\Rightarrow \sqrt{2} \leq u_{n+1} \leq \sqrt{5} \text{ car } f \text{ est croissante.}$$

Donc $1 \leq u_{n+1} \leq 3$.

2) La suite $(u_n)$ est croissante.
3) la suite $(u_n)$ est croissante et majorée par 3 donc convergente.
Considérons la fonction définie sur $[1; 3]$ par : $f : x \mapsto \sqrt{2x + 3}$.
La suite $(u_n)$ est définie par $u_0 = 1$ et $u_{n+1} = f(u_n)$.

- $f$ est continue sur l’intervalle $[1; 3]$, car dérivable sur $[1; 3]$.
- $f([1; 3]) = [f(1); f(3)] = [\sqrt{2}; \sqrt{5}] \subset [1; 3]$.
- $u_0 = 1 \in [1; 3]$.
- La suite $(u_n)$ est convergente.

Alors la limite de la suite $(u_n)$ est $L$ la solution de l’équation

$$f(x) = x$$
$$f(x) = x \iff \sqrt{2x + 3} = x \Rightarrow 2x + 3 = x^2$$
$$\Rightarrow x^2 - 2x - 3 = 0$$
$$\Rightarrow (x - 3)(x + 1) = 0.$$

Et on a la suite $(u_n)$ est croissante donc la limite est 3.
```

<!-- Page 106 -->

```markdown
# Deuxième bac sciences PC /SVT /ST

## Résumé : Primitives d'une fonction
### Deuxième bac sciences PC /SVT /ST

### Plan de chapitre 4 : Primitives
- Cours détaillé
- Résumé de cours
- Série d'exercices
- Correction détaillée des exercices

admin  
Prof fayssal  
06813999067  
www.elboutkhili.jimdofree.com
```

<!-- Page 107 -->

```markdown
# Résumé 5 : 
## Primitives d'une fonction
### Deuxième bac science expérimentale

Prof Fayssal  
https://elboutkhili.jimdo.com/
```

<!-- Page 108 -->

```markdown
# Primitives d’une fonction

Soit $f$ est une fonction continue sur un intervalle $I$. 
On appelle primitive de $f$ sur $I$, une fonction $F$ dérivable sur $I$ telle que $F' = f$.

## Primitives des fonctions usuelles

| Fonction                  | Primitives                       | Sur I         |
|--------------------------|----------------------------------|---------------|
| $f(x) = a, a \in \mathbb{R}$ | $F(x) = ax + C$               | $\mathbb{R}$  |
| $f(x) = x^n$            | $F(x) = \frac{1}{n + 1} x^{n+1} + C$ | $\mathbb{R}$  |
| $f(x) = x^r$            | $F(x) = \frac{1}{r + 1} x^{r+1} + C$ | $]0; +\infty[ \cup ]-\infty; 0[$ |
| $f(x) = \frac{1}{x^2}$  | $F(x) = -\frac{1}{x} + C$    | $]0; +\infty[ \cup ]-\infty; 0[$ |
| $f(x) = \frac{1}{2\sqrt{x}}$ | $F(x) = \sqrt{x} + C$     | $]0; +\infty[$ |
| $f(x) = \cos(x)$        | $F(x) = \sin(x) + C$         | $\mathbb{R}$  |
| $f(x) = \sin(x)$        | $F(x) = -\cos(x) + C$        | $\mathbb{R}$  |
| $f(x) = 1 + \tan^2(x)$  | $F(x) = \tan(x) + C$         | $] -\frac{\pi}{2} + k\pi; \frac{\pi}{2} + k\pi[; k \in \mathbb{Z}$ |
| $f(x) = \sin(ax + b)$   | $F(x) = -\frac{1}{a} \cos(ax + b) + c$ | $\mathbb{R}$  |
| $f(x) = \cos(ax + b)$   | $F(x) = \frac{1}{a} \sin(ax + b) + c$ | $\mathbb{R}$  |

## Linéarité des primitives

Soit $f$ et $g$ sont deux fonctions continues sur un intervalle $I$. 
Si $F$ est une primitive de $f$ et $G$ une primitive de $g$ sur $I$ alors :
- $F + G$ est une primitive de $f + g$,
- $kF$ est une primitive de $kf$ avec $k$ réel.

## Opérations et fonctions composées

Soit $u$ et $v$ sont des fonctions dérivables sur un intervalle $I$ et $U$ et $V$ sont leurs primitives sur $I$ et $k$ des constantes.

| Fonction                  | Primitives                       | Condition     |
|--------------------------|----------------------------------|---------------|
| $f = u'u$                | $F = \frac{u^2}{2}$            | Sur $I$       |
| $f = u'u^n$              | $F = \frac{1}{n + 1} u^{n+1} + C$ | Sur $I$       |
| $f(x) = \frac{u'}{2\sqrt{u}}$ | $F = \sqrt{u} + C$          | $v > 0$ sur $I$|
| $f = u'$                 | $F = \frac{1}{u}$              | $u \neq 0$ sur $I$ |
| $f = u'v - uv'$          | $F = \frac{-u}{v} + C$        | $v \neq 0$ sur $I$ |
| $f = u'v + uv'$          | $F = u.v + C$                  | Sur $I$       |
| $f(x) = u'u$            | $F = \frac{1}{r + 1} u^{r+1} + C$ | $u \neq 0$   |
```

<!-- Page 109 -->

```markdown
# Deuxième bac sciences PC /SVT /ST

## Série corrigé 5 : Primitives d’une fonction
### Deuxième bac sciences PC /SVT /ST

### Plan de chapitre 4 : Primitives
- Cours détaillé
- Résumé de cours
- Série d’exercices
- Correction détaillée des exercices

admin  
Prof fayssal  
06813999067  
www.elboutkhili.jimdo.com
```

<!-- Page 110 -->

```
# Série corrigée 5

## Primitives d’une fonction

### Deuxième bac science expérimentale

[Prof Fayssal](https://elboutkhili.jimdo.com/)
```

<!-- Page 111 -->

```markdown
## Exercices 01
1) Déterminer les fonctions primitives de la fonction $f$ sur définie par $f(x) = 3x^2 - 2$  
2) Déterminer la fonction primitive $G$ qui vérifie $G(1) = 2$

## Exercices 02
Déterminer une primitive $F$ de la fonction $f$ sur l’intervalle I.
1) $f(x) = x^3 - 2x$ sur $I = \mathbb{R}$ ;  
2) $f(x) = 3x^2 - \frac{3}{x^2}$ sur $I = [0 ; +\infty[$  
3) $f(x) = (2x - 5)(x^2 - 5x + 4)$ ;  
4) $f(x) = \frac{2x^3+x}{\sqrt{4+x^2+1}}$ sur $I = \mathbb{R}$  
5) $f(x) = \sqrt{x}$ ; sur $I = \mathbb{R}^+$ ;  
6) $f(x) = \cos(x) \sin^2(x)$ ; sur $I = \mathbb{R}$  
7) $f(x) = \cos^3(x)$ , sur $I = \mathbb{R}$ ;  
8) $f(x) = \frac{x}{(x+2)^4}$ sur $I = ]-2 ; +\infty[$  
9) $f(x) = x(x + 2)^6$ ; sur $I = \mathbb{R}$ ;  

## Exercices 03
$f$ la fonction numérique définie sur $I = [1 ; +\infty[$ par:  
$f(x) = \frac{2x + 5}{(x-1)^3}$  
1) Déterminer les réels $a$ et $b$ tels que:  
$$f(x) = \frac{a}{(x-1)^2} + \frac{b}{(x-1)^3}$$  
2) En déduire la primitive $F$ de la fonction $f$ qui s'annule en 2.

## Exercices 04
Dans chacun des cas suivants, Déterminer une primitive de la fonction $f$ sur l’intervalle I  
a) $f(x) = (2x + 1)(x^2 + x + 1)^2$ et $I = \mathbb{R}$ .  
b) $f(x) = (3x^2 + 1)\sqrt{x^3 + x + 3}$ et $I = \mathbb{R}$  
c) $f(x) = -\frac{x^{-1}}{(x^2-2x-3)^4}$ et $I = ]-1 ; 3[$  
d) $f(x) = \frac{2}{\sqrt{2x+1}}$ et $I = ]-\frac{1}{2} ; +\infty[$  
e) $f(x) = \frac{3}{\sqrt[3]{x}} + \sqrt{x} + 1$ et $I = [0 ; +\infty[$  
f) $f(x) = \frac{1}{\sqrt{x+1}} + \frac{3\sqrt{x - 1}}{x+1}$ et $I = [1 ; +\infty[$  
g) $f(x) = \sin\left(3x - \frac{7\pi}{6}\right) + \cos(5x) - 1$ et $I = \mathbb{R}$  
h) $f(x) = (2x + 1)\sqrt{x^2 + x + 1}$ et $I = \mathbb{R}$  

## Exercices 05
Soit la fonction $f$ définie sur l’intervalle $I = [1 ; +\infty[$ par:  
$$f(x) = \frac{x^5 - 2x^3 + 5x}{(x^2 - 1)^2}$$  
a) Justifier que la fonction $f$ admet une fonction primitive définie sur l’intervalle I  
b) Vérifier que pour tout $x \in I$:  
$$f(x) = x + \frac{1}{(x - 1)^2} - \frac{1}{(x + 1)^2}$$  
c) En déduire les fonctions primitives de la fonction $f$ sur l’intervalle I .  
d) Déterminer la primitive $F$ de la fonction $f$ qui s’annule en 2.
```

<!-- Page 112 -->

```markdown
# Prof : fayssal  
Site web : www.elbouthkili.jimdofree.com  

## Série 05: Primitives d'une fonction ; 2 Bac sc  
**Page 01**

### Exercice 01
1) Déterminer les fonctions primitives de la fonction $f$ sur $\mathbb{R}$ définie par $f(x) = 3x^2 - 2$  
2) Déterminer la fonction primitive $G$ qui vérifie $G(1) = 2$

#### Solution
1) Toute fonction de la forme $F_C(x) = x^3 - 2x + C$, avec $C \in \mathbb{R}$,  
   Sont des primitives de $f$.  
   Car $\forall x \in \mathbb{R}: F'_C(x) = 3x^2 - 2 = f(x)$  
2) $G(1) = 2$ et $G$ est une primitive de $f$ : $1^3 - 2 \cdot 1 + C = 2$  
   $\Rightarrow C = 3$  
   $\Rightarrow G(x) = x^3 - 2x + 3$

### Exercice 2
Déterminer une primitive $F$ de la fonction $f$ sur l'intervalle $I$.  
1) $f(x) = x^3 - 2x$ sur $I = \mathbb{R}$ ;  
2) $f(x) = 3x^2 - \frac{3}{x^2}$ sur $I = [0; +\infty[$  

3) $f(x) = (2x - 5)(x^2 - 5x + 4)$ ;  
4) $f(x) = \frac{2x^3 + x}{\sqrt{x^4 + 2x + 1}}$ sur $I = \mathbb{R}$  

5) $f(x) = \sqrt{x}$ ; sur $I = \mathbb{R}^+$ ;  
6) $f(x) = \cos(x) \sin^2(x)$ ;  
7) $f(x) = \cos^3(x)$, sur $I = \mathbb{R}$ ;  
8) $f(x) = -\frac{x}{(x+2)^4}$ sur $I = [-2; +\infty[$  

9) $f(x) = (x + 2)^6$ ; sur $I = \mathbb{R}$  

#### Solution
1) $f(x) = x^3 - 2x$ ;  
   $F(x) = \frac{1}{4} x^4 - x^2 + C$, avec $C \in \mathbb{R}$,  

2) $f(x) = 3x^2 - \frac{3}{x^2}$  
   Donc $F(x) = x^3 - 3 \times \left(-\frac{1}{x}\right) + C$, avec $C \in \mathbb{R}$,  

3) $f(x) = (2x - 5)(x^2 - 5x + 4)$ ;  
   Une primitive de $u' u$ est de la forme $\frac{1}{2} u^2$  

   Donc $F(x) = \frac{1}{2}(x^2 - 5x + 4)^2 + C$, avec $C \in \mathbb{R}$,  

4) $f(x) = \frac{2x^3 + x}{\sqrt{x^4 + 2x + 1}}$ de type $u' u(x) = x^4 + x^2 + 1 \Rightarrow u'(x) = 4x^3 + 2x$  

   Une primitive de $u'$ est de la forme $2\sqrt{u}$  
   $F(x) = \frac{1}{2} 2\sqrt{x^4 + x^2 + 1} + C = \sqrt{x^4 + x^2 + 1} + C$, avec $C \in \mathbb{R}$,  

5) $f(x) = \sqrt{x}$ ;  
   Donc $F(x) = \frac{2}{3} x^{\frac{3}{2}} + C$,  

6) $f(x) = \cos(x) \sin^2(x)$ de type $u' u^2$ avec $u(x) = \sin(x)$  
   Une primitive de $u'' u^2$ est de la forme $\frac{1}{3} u^3$  

   D'où $F(x) = \frac{1}{3} \sin^3(x) + C$, avec $C \in \mathbb{R}$  

7) $f(x) = \cos^3(x) = \cos(x) \cos^2(x)$  
   $= \cos(x)(1 - \sin^2(x))$  
   $= \cos(x) - \cos(x) \sin^2(x)$

   Une primitive de $u'' u^2$ est de la forme $\frac{1}{3} u^3$  

   D'où $F(x) = \sin(x) - \frac{1}{3} \sin^3(x) + C$, avec $C \in \mathbb{R}$
```

<!-- Page 113 -->

```markdown
# Prof: fayssal
## Site web : www.elbouthkili.jimdofree.com

## Série 05: Primitives d’une fonction ; 2 Bac sc
### Page 02

8) $f(x) = \frac{-x}{(x^2)^{2}}$ sur $I=[-2; +\infty[$  
$$ f(x) = \frac{-x^2 + 2}{(x^2)^{2}} = \frac{2}{(x^2)^{4}} $$  
$$ f(x) = (x + 2) - 2(x^2)^{-4} $$  
Une primitive de $u^{n}$ est de la forme $\frac{1}{n+1} u^{n+1}$  
$$ F(x) = \frac{-1}{2}(x^2 - 2)^{-2} + \frac{1}{2}(x^2)^{-3} + C, \quad avec\ C \in \mathbb{R}, $$  
$$ F(x) = (x + 2)^{2} $$  
$$ = [(x + 2) - 2(x^2)^{6} $$  
$$ = (x + 2)^{7} - 2(x^2)^{6} $$  
$$ F(x) = \frac{1}{8}(x^2)^{8} - \frac{7}{2}(x + 2)^{7} + C, \quad avec\ C \in \mathbb{R} $$  

9) $f(x) = \frac{x^5 - 2x^3 + 5x}{(x^2 - 1)^{2}}$  
### Exercice 05  

Soit la fonction $f$ définie sur $I = ]1; +\infty[$ par $f(x) = \frac{x^5 - 2x^3 + 5x}{(x^2 - 1)^{2}}$  

1) Justifier que $f$ admet une fonction primitive définie sur $I$  
2) Vérifier que pour tout $x \in I: f(x) = x + \frac{1}{(x - 1)^{2}} - \frac{1}{(x + 1)^{2}}$  
3) En déduire les fonctions primitives de la fonction $f$ sur l'intervalle $I$.  
4) Déterminer la primitive $F$ de la fonction $f$ qui s’annule en 2.  

### Correction de l’exercice 05  

Soit la fonction $f$ définie sur $I = ]1; +\infty[$ par $f(x) = \frac{x^5 - 2x^3 + 5x}{(x^2 - 1)^{2}}$  
1) Justifier que la fonction $f$ admet une fonction primitive définie sur $I$  
La fonction $x \mapsto \frac{x^5 - 2x^3 + 5x}{(x^2 - 1)^{2}}$ est une fonction rationnelle donc elle est continue sur $]-\infty; 1[ \cup ]1; +\infty[$, donc $f$ est continue sur $I = ]1; +\infty[$  
D’où la fonction $f$ admet une fonction primitive définie sur $I$  

2) Vérifier que pour tout $x \in I : f(x) = x + \frac{1}{(x - 1)^{2}} - \frac{1}{(x + 1)^{2}}$  
$$ f(x) = x + \frac{1}{(x - 1)^{2}} - \frac{1}{(x + 1)^{2}} $$  
Donc les fonctions primitives de la fonction $f$ sur $I$ sont  
$$ F_c(x) = \frac{x^2}{2} + \frac{1}{(x - 1)^{-1}} + C, \quad avec\ C \in \mathbb{R} $$  
Donc :  
$$ F_c(x) = \frac{x^2}{2} - 1 + \frac{1}{x + 1} + C, \quad avec\ C \in \mathbb{R} $$  

4) Déterminer la primitive $F$ de la fonction $f$ qui s’annule en 2.  
On a $F$ la primitive de la fonction $f$ qui s’annule en 2.  
$$ F(2) = 0 $$  
$$ \Rightarrow F(2) = \frac{2^2}{2} - \frac{1}{2 - 1} + \frac{1}{2 + 1} + C = 0 $$  
$$ 2 - 1 + \frac{1}{3} + C = 0 $$  
$$ C = -\frac{4}{3} $$  
Donc :  
$$ F(x) = \frac{x^2}{2} - 1 + \frac{1}{x - 1} - \frac{4}{3} $$  
```

<!-- Page 114 -->

```markdown
# Deuxième bac sciences PC /SVT /ST

## Résumé 6 : Logarithme népérien
### Deuxième bac sciences PC /SVT /ST

### Plan de chapitre 6 : Logarithme népérien
- Cours détaillé
- Résumé de cours
- Série d’exercices
- Correction détaillée des exercices
```

<!-- Page 115 -->

```markdown
# Résumé 6 : 
## Fonction logarithmique népérien

### Deuxième bac science expérimentale

[Prof Fayssal](https://elboutkhili.jimdofree.com/)
```

<!-- Page 116 -->

```markdown
# www.elboutkhili.jimdofree.com
## Résumé de cours 6
### Logarithme népérien
**Prof : FAYSSAL 2 BAC BIOF**

#### Définition du fonction logarithme népérien
- La primitive de $x \mapsto \frac{1}{x}$ sur $]0, +\infty[$ qui s'annule en 1 est appelée fonction logarithme népérien ou la note par $\ln$
- La fonction $\ln$ est définit et dérivable sur l'intervalle $]0, +\infty[$ et $\ln(1) = 0$
- Pour tout $x \in ]0, +\infty[$ : $\ln(e) = 1$ avec le nombre $e$ est un nombre irrationnel ; $e \approx 2,7$

#### Propriétés algébriques de la fonction $\ln$
- $ \ln(x \cdot y) = \ln(x) + \ln(y) $
- $ \ln\left(\frac{x}{y}\right) = \ln(x) - \ln(y) $
- $ \ln(1) = 0 $
- $ \ln(x^r) = r \ln(x), \, r \in \mathbb{Q} $

#### Équations et inégalités
- $\ln(x) = \ln(y) \iff x = y$
- $\ln(x) < \ln(y)$
- $\ln(x) > k \iff x > e^k$
- $\ln(x) = a \iff x = e^a$

#### Limites de la fonction $\ln$
- $\lim_{x \to 0^+} \ln(x) = -\infty$ ; $\lim_{x \to +\infty} \ln(x) = +\infty$
- $\lim_{x \to 0^+} \ln(x) = 0^-$ ; $\lim_{x \to +\infty} \ln(x) = +\infty$

#### Exemple de méthode de changement de variable pour calcul des limites
**Calculons la limite :**
$$ \lim_{x \to +\infty} \frac{\ln(x)}{\sqrt{x}} $$

### Étude de La fonction logarithme népérien
1. Domaine de définition est $D_n = ]0, +\infty[$
2. Le sens des variations de la fonction $\ln$
   - On a pour tout $x \in ]0, +\infty[$ : $ \ln'(x) = \frac{1}{x} > 0$
   - Donc la fonction $\ln$ est strictement croissante sur $]0, +\infty[$
3. Le signe de la fonction $\ln$ sur $]0, +\infty[$
   - Sur l'intervalle $[1, +\infty[$
   - On a est strict croissante sur $[1, +\infty[$ donc $x \geq 1 \iff \ln(x) \geq \ln(1)$
   - Sur l'intervalle $]0, 1]$ donc $0 < x \leq 1 \implies \ln(x) \leq \ln(1)$
4. Équation de la tangente de $(Cf)$ en 1
   - $(T)$ : $y = \ln'(1)(x - 1) + \ln(1)$
   - $(T)$ : $y = -1$
5. Les branches infinies de la courbe $(Cf)$
   - On a $\lim_{x \to 0^+} \ln(x) = -\infty$, donc la droite d'équation $x = 0$ (l'axe des ordonnées) est un asymptote verticale à $(+\infty)$
   - On a $\lim_{x \to +\infty} \ln(x) = +\infty$ et $\ln(x) = 0$
   - Donc $(Cf)$ admet une branche parabolique de direction l'axe des abscisses $(Ox)$ au voisinage de $+\infty$
6. La courbe de la fonction $\ln$

#### Dérivée de la fonction $\ln(U)$ avec $U \neq 0$
- Si $U$ est dérivable sur $I$ alors $\ln(U)$ est dérivable sur $I$ et $ \ln'(U(x)) = \frac{u'(x)}{u(x)} $

#### Primitives
- Les primitives de la fonction $x \mapsto \frac{u'(x)}{u(x)}$ sur $I$ sont les fonctions :
$$ x \mapsto \ln(\lvert U(x) \rvert) + c \; ; \; c \in \mathbb{R} $$
- Les primitives de la fonction $x \mapsto x^{r+1}$ sur $\mathbb{R}$ sont les fonctions :
$$ x \mapsto \frac{x^{r+1}}{r+1} + c \; ; \; c \in \mathbb{R} \; avec \; r \in \mathbb{R} \setminus \{-1\} $$
```

<!-- Page 117 -->

```markdown
# Deuxième bac sciences PC /SVT /ST

## Série corrigée 6 : Logarithme népérien
### Deuxième bac sciences PC /SVT /ST

### Plan de chapitre 6 : Logarithme népérien
- Cours détaillé
- Résumé de cours
- Série d’exercices
- Correction détaillée des exercices
```

<!-- Page 118 -->

```markdown
# Série 6 :
## Fonction logarithme népérien
### Deuxième bac science expérimentale

### Prof Fayssal
[https://elboutkhili.jimdofree.com/](https://elboutkhili.jimdofree.com/)
```

<!-- Page 119 -->

```markdown
# Série 6 : Fonction logarithme népérien 2Bac-Biof

## Exercice 01
Déterminer l’ensemble de définition des fonctions suivantes  
1) $f(x) = \ln(2 - x) + \ln(x + 3)$ ;  
2) $f(x) = \ln(x^2 - 5x + 6)$ ;  
3) $f(x) = -\frac{x^3}{1 - \ln x}$ ;  
4) $f(x) = \sqrt{2 - \ln x}$  

## Exercice 02
Résoudre dans $\mathbb{R}$ les équations suivantes  
(E1): $\ln(x - 1) = 0$ ;  
(E2): $3 - \ln x = 0$ ;  
(E3): $x^2 + x + 1 = 0$ ;  
(E4): $(x + 2) \ln(x - 3) = 0$ ;  
(E5): $\ln^2(x) + \ln(x) - 2 = 0$ ;  
(E6): $\ln(x - 3) + \ln(9 - x) = 0$  

## Exercice 03
Résoudre dans $\mathbb{R}$ les inéquations suivantes  
(I1): $\ln(x) \geq 1$ ;  
(I2): $\ln(3 - x) - \ln(x + 1) \leq 0$ ;  
(I3): $\ln\left(1 - \frac{2}{x}\right) \geq 0$ ;  
(I4): $\ln^2(x) - 3\ln(x) + 2 < 0$  

## Exercice 04
Résoudre dans $\mathbb{R}^2$ les systèmes suivants :  
(S1):  
$$
\begin{cases}
3\ln x + 7\ln y = 4 \\
2\ln x + 5\ln y = 3
\end{cases}
$$  
(S2):  
$$
\begin{cases}
\ln x + \ln y = -10 \\
\ln x + \ln y = 3
\end{cases}
$$  

## Exercice 05
Calculer les limites suivantes :  
a) $\lim_{x \to +\infty} x - \ln x$ ;  
b) $\lim_{x \to 0^+} \ln^2(x)$ ;  
c) $\lim_{x \to +\infty} \ln x$ ;  
d) $\lim_{x \to +\infty} \frac{x}{1 - x}$ ;  
e) $\lim_{x \to +\infty} f(x^2) - x$ ;  
f) $\lim_{x \to 0^+} \ln(x)^3$ ;  

## Exercice 06
Soit la fonction $f$ définie sur $]0 ; +\infty[$ par $f(x) = 1 - x + \ln x$  
1) Étudier les branches infinies de $(Cf)$  
2) Étudier la position relative de $(Cf)$ et la droite : $y = -x$  
3) Déterminer les variations de la fonction $f$  

## Exercice 08
Soit une fonction définie sur $]0 ; +\infty[$ par $g(x) = x - \ln(x)$  
1) Déterminer $\lim_{x \to 0^+} g(x)$ et $\lim_{x \to +\infty} g(x)$  
2) Calculer $g'(x)$ ; puis dresser le tableau des variations de $g$  
3) Montrer que : $\forall x \in ]0 ; +\infty[, \, g'(x) > 0$  
B) Si $f$ une fonction définie sur $]0 ; +\infty[$ par $f(x) = \ln(x) + \frac{1}{x} + \ln(x)$  
1) Déterminer $\lim_{x \to 0^+} f(x)$ et étudier la branche infinie de $(Cf)$ au voisinage de $+\infty$  
3a) Montrer que $\forall x \in ]0 ; +\infty[$ : $f'(x) = g(x)$  
b) Dresser le tableau de variation de $f$  
c) Déterminer l’équation de la tangente $(T)$ au point $A(1 ; 1)$  
5) Montrer que l’équation $f(x) = 0$ admet une unique solution $\alpha \in \left]\frac{1}{2} ; 1\right[$ (On prend $f\left(\frac{1}{2}\right) = -0,2$)  
6) Tracer $(T)$ et $(Cf)$ et $(Cf^{-1})$ dans un repère orthonormé $(O ; \vec{i} ; \vec{j})$  

## Exercice 09
Soit la fonction $f$ définie sur $]-2 ; 1[$ par $f(x) = \ln\left( \frac{x+2}{1-x} \right)$  
1)a) Montrer que $D_f = ]-2 ; 1[$ ;  
1)b) Calculer $\lim_{x \to -2^+} f(x)$ et $\lim_{x \to 1^-} f(x)$ pour interpréter les deux résultats géométriquement  
2)a) Montrer que $f$ est dérivable sur $]-2 ; 1[$  
b) Déterminer le sens de variation de la fonction $f$  
3) Montrer que l’équation $f(x) = 0$ admet une unique solution $\alpha \in ]-1 ; 0[$  
4) Tracer la courbe représentative de $f$  
```

<!-- Page 120 -->

```markdown
# Prof: fayssal  
**Site web : www.elboutkhili.jimdofree.com**  

## Exercise 10

### A) Soit $g$ la fonction définie sur $]0; +\infty[$ par $g(x) = 1 + x + \ln x$

1) Calculer $\lim_{x \to 0^+} g(x)$ et $\lim_{x \to +\infty} g(x)$.

2) a) Montrer que $g$ est strictement croissante sur $]0; +\infty[$  
   b) Montrer que l'équation $g(x) = 0$ admet une unique solution $\alpha$ dans $]0; +\infty[$ et \[ \frac{1}{e} < \alpha < 1 \] (On donne $g\left( \frac{1}{e} \right) = -e^{-1} \approx -0,4$)

3) Déduire le signe de $g(x)$ pour tout $x \in ]0; +\infty[$.

### B) Soit $f$ la fonction définie sur $[0; +\infty[$ par :  
\f(x) = 
\begin{cases}
4 \ln x, & x > 0 \\
f(0) = 0 &
\end{cases}

Et $(C_f)$ sa courbe dans un repère orthonormé $(O; \vec{i}; \vec{j})$. (unité 2cm)

1) a) Montrer que $f$ est continue à droite en 0.  
   b) Montrer que $\lim_{x \to +\infty} f(x) = -\infty$ et que $\lim_{x \to 0^+} \frac{f(x)}{x} = 0$, puis interpréter graphiquement le résultat.

2) a) Montrer que $\lim_{x \to 0^+} \frac{f(x)}{x} = +\infty$, puis interpréter le résultat géométriquement.  
   b) Montrer que pour tout $x \in [0; +\infty[$ : $f'(x) = \frac{4\ln x}{(1+x)^2}$  
   c) Déduire que $f$ est strictement croissante sur l'intervalle $[\alpha; +\infty[$ et strictement décroissante sur l'intervalle $[0; \alpha]$.  
   d) Montrer que $f(\alpha) = -4\alpha$ et dresser le tableau de variations de $f$.

3) a) Montrer que pour tout $x \in ]0; +\infty[$ : $f''(x) = \frac{4(1-x^2-2x\ln x)}{x(x+1)^3}$.  
   b) Étudier le signe de $1 - x^2 - 2x\ln x$ sur $]0; +\infty[$ et en déduire que le point d'abscisse 1 est l'unique point d'inflexion de $(C_f)$.  
   c) Donner l'équation de la tangente $(T)$ à $(C_f)$ au point d'abscisse 1.

4) Tracer $(T)$ et $(C_f)$ dans le repère $(O; \vec{i}; \vec{j})$. (unité $2 \text{cm}$)

5) Soit $(U_n)$ tel que : $U_0 = \frac{1}{e}$ et $U_{n+1} = f(U_n)$  
   1) Montrer que : $\forall n \in \mathbb{N}\; 0 < U_n \leq U_{n+1} \leq \frac{1}{e-1}$.  
   2) Montrer que la suite $(U_n)$ est croissante.  
   3) Déduire que $(U_n)$ est convergente et calculer la limite de $(U_n)$.

## Exercise 11

### A) Soit $g$ une fonction définie sur $]0; +\infty[$ par :  
$$ g(x) = \ln\left( 1 + \frac{1}{x} \right) - \frac{1}{x + 1} $$

1) Déterminer $\lim_{x \to 0^+} g(x)$ et Calculer $\lim_{x \to +\infty} g(x)$.  
2) Montrer que $g'(x) = -\frac{1}{x(x+1)^2}$ sur $]0; +\infty[$.  
3) Dresser son tableau de variation sur $]0; +\infty[$.  
4) Montrer que : $\forall x \in [0; +\infty[\; g(x) > 0$.

### B) Soit $f$ une fonction définie sur $[0; +\infty[$ par :  
$$ f(x) = x \ln\left( 1 + \frac{1}{x} \right) ; \; si > 0 \text{ et } f(0) = 0 $$

1) Montrer que $f$ est continue à droite de 0.  
2) Montrer que $\lim_{x \to +\infty} f(x) = 1$, puis interpréter le résultat géométriquement.  
3) Étudier la dérivabilité de $f$ en 0 à droite puis interpréter le résultat géométriquement.  
4) a) Montrer que $f$ est dérivable sur $]0; +\infty[$ et que $\forall x \in ]0; +\infty[ \; f'(x) = g(x)$.  
   b) Dresser le tableau de variation de $f$ sur $]0; +\infty[$.  
5) Étudier la convexité de la courbe $(C_f)$.  
6) Tracer $(C_f)$ dans un repère orthonormé $(O; \vec{i}; \vec{j})$ (unité 2 cm).

7) Soit $(U_n)$ tel que : $U_0 = \frac{1}{e}$ et $U_{n+1} = f(U_n)$  
   1) Montrer que : $\forall n \in \mathbb{N} \; 0 < U_n \leq U_{n+1} \leq \frac{1}{e-1}$.  
   2) Montrer que la suite $(U_n)$ est croissante.  
   3) Déduire que $(U_n)$ est convergente et calculer la limite de $(U_n)$.
```

<!-- Page 121 -->

```markdown
# Prof: fayssal
Site web : www.elboutkhili.jimdo.free

## Exercices corrigés 6 : Fonction logarithme 2BAC-BIOF

### Exercice 01
Déterminer l'ensemble de définition des fonctions suivantes  
1) $f(x) = \ln(2 - x) + \ln(x + 3)$ ;  
2) $f(x) = \ln(x^2 - 5x + 5)$  
3) $f(x) = \frac{x \ln x}{1 - \ln x}$ ;  
4) $f(x) = \frac{x^3}{\ln x}$ ;  
5) $f(x) = \sqrt{2 - \ln x}$  

**Solution :**  
1) $f(x)$  
$$ x \in D_f \Leftrightarrow 2 - x > 0 \text{ et } x + 3 > 0 $$  
$$ \Leftrightarrow x < 2 \text{ et } x > -3 $$  
Donc : $D_f = ]-\infty; 2 [ \cup ]-3; +\infty [ $  

2) $f(x) = \ln(x^2 - 5x + 5)$  
$$ x \in D_f \Leftrightarrow x^2 - 5x + 6 > 0 $$  
On résout l'équation $x^2 - 5x + 6$  
$$ \Delta = 1 > 0 $$ donc $x = 2 \text{ ou } x = 3$  
On dresse le tableau de signe de $x^2 - 5x + 6$

$$
\begin{array}{c|cccc}
x & -\infty & 2 & 3 & +\infty \\
\hline
x^2 - 5x + 6 & + & 0 & - & + \\
\end{array}
$$  
Donc : $D_f = ]-\infty; 2 [ \cup ]3; +\infty [ $  

3) $f(x) = \frac{x \ln x}{1 - \ln x}$ ;  
$$ x \in D_f \Leftrightarrow x > 0 \text{ et } 1 - \ln x > 0 $$  
$$ \Leftrightarrow x > 0 \text{ et } \ln x < 1 $$  
$$ \Leftrightarrow x > 0 \text{ et } x < e $$  
Donc : $D_f = ]0; 1[ \cup ]e; +\infty [ $

4) $x \in D_f \Leftrightarrow x > 0 \text{ et } x \ln x > 0$  
$$ \Leftrightarrow x > 0 \text{ et } (x = 0 \text{ ou } \ln x > 0) $$  
$$ \Leftrightarrow x > 0 \text{ et } x < e $$  
Donc : $D_f = ]0; 1[ ; 1 \text{ ou } +\infty [ $

5) $f(x) = \sqrt{2 - \ln x}$  
$$ x \in D_f \Leftrightarrow 2 - \ln x > 0 $$  
$$ \Leftrightarrow \ln x < 2 $$  
$$ \Leftrightarrow x > 0 \text{ et } x < e^2 $$  
Donc : $D_f = ]-\infty; e^2 [ \cap ]0; e^2 ] = ]0; e^2 [ $

### Exercice 02
Résoudre dans $\mathbb{R}$ les équations suivantes  
$(E_1): \ln(x - 1) = 0$ ;  
$(E_2): 3 - \ln x = 0$ ;  
$(E_3): \ln(x^2 + x + 1) = 0$ ;  
$(E_4): (x + 2) \ln(x - 3) = 0$ ;  
$(E_5): \ln(2x) + \ln(x) - 2 = 0$ ;  
$(E_6): \ln(x - 3) + \ln(9 - x) = 0$  

**Solution :**  
$(E_1): \ln(x - 1) = 0$  
On note par $D_E$ l'ensemble de définition de l'équation  
$$ x \in D_E \Leftrightarrow x - 1 > 0 $$  
$$ \Leftrightarrow x > 1 $$  
Donc : $D_E = ]1; +\infty [$  
$$ \ln(x - 1) = 0 \Leftrightarrow \ln(x - 1) = \ln 1 $$  
$$ \Leftrightarrow x - 1 = 1 $$  
$$ \Leftrightarrow x = 2 $$  

On note par $S'$ l'ensemble des solutions de l'équation  
Donc : $S' = \{2\}$  

$(E_2): 3 - \ln x = 0$  
$$ x \in D_E \Leftrightarrow x > 0 $$  
Donc : $D_E = ]0; +\infty [$  
$$ 3 - \ln x = 0 \Leftrightarrow \ln x = 3 $$  
$$ \Leftrightarrow x = e^3 $$  
Donc : $S = \{e^3\}$  
```

<!-- Page 122 -->

```markdown
Prof : fayssal  
Site web : www.elboutkhili.jimdofree.com  
Série corrigée 6 : Fonction logarithme 2BAC-BIOF  
Page 02  

(E3) : $\ln(x^2 + x + 1) = 0$  
On note par $D_E$ l’ensemble de définition de l’équation  
$x \in D_E \iff x^2 + x + 1 > 0$  
Donc : $D_E = \mathbb{R}$ ;  
car $(\forall x \in \mathbb{R}): x^2 + x + 1 > 0 ; \Delta = -3 < 0$  
$\ln(x^2 + x + 1) = 0 \iff \ln(x^2 + x + 1) = \ln 1$  
$\iff x^2 + x + 1 = 1 \iff x^2 + x = 0$  
$\iff x(x + 1) = 0$  
Donc : $S = \{1 ; -1\}$  

(E4) : $(x + 2) \ln(x - 3) = 0$  
On note par $D_E$ l’ensemble de définition de l’équation  
$x \in D_E \iff x - 3 > 0$  
$\iff x > 3$  
Donc : $D_E = [3 ; +\infty[$  
$(x + 2)(x - 3) = 0 \iff \text{soit } x - 3 = 0$  
$\iff x = 2 \text{ ou } x - 3 = 1 \iff x = 4$  
Donc : $S = \{4\}$  

(E5) : $\ln^2(x) + \ln(x) - 2 = 0$  
$x \in D_E \text{ avec } x > 0$  
Donc : $D_E = ]0; +\infty[$  
$\ln^2(x) + \ln(x) - 2 = 0 \iff (\ln x)^2 + \ln x - 2 = 0$  
On pose $y = \ln(x)$, donc :  
$\Delta = 1 - 4 \times 1 \times (-2) = 9$  
$y = \frac{-1 \pm \sqrt{9}}{2} = \frac{-1 \pm 3}{2}$  
$y = 1 \text{ ou } y = -2$  
Donc : $x = e^1 \text{ ou } x = e^{-2}$  
Donc : $S = \{e ; e^{-2}\}$  

(E6) : $\ln(x - 3) + \ln(9 - x) = 0$  
Ensemble de définition :  
$x - 3 > 0 \text{ et } 9 - x > 0$ donc $x > 3$ et $x < 9$  
L’équation est définie sur l’intervalle $]3 ; 9[$.  
Donc : $D_I = ]3 ; 9[$.  
$\ln(x - 3) + \ln(9 - x) = 0 \iff \ln((x - 3)(9 - x)) = 0$  
$\iff \ln((x - 3)(9 - x)) = \ln 1$  
$\iff (x - 3)(9 - x) = 1$  
$\iff 9x - x^2 - 27 = 1$  
$\iff -x^2 + 12x - 28 = 0$  
$\Delta = 12^2 - 4 \times (-1) \times (-28) = 32$  
$x = \frac{-12 \pm \sqrt{32}}{-2} = 6 - 2\sqrt{2} \text{ ou } x = \frac{-12 - \sqrt{32}}{-2} = 6 + 2\sqrt{2}$  
Les solutions sont donc $6 - 2\sqrt{2}$ et $6 + 2\sqrt{2}$ car elles appartiennent bien à l’ensemble de définition $]3 ; 9[$.  
Donc : $S = \{6 - 2\sqrt{2} ; 6 + 2\sqrt{2}\}$  

Exercice 03  

(I1) : $\ln(x) - 1 \geq 0$ ;  
(I2) : $\ln(3 - x) - \ln(x + 1) \leq 0$ ;  
(I3) : $\ln(1 - \frac{2}{x}) > 0$ ;  
(I4) : $\ln^2(x) - 3\ln(x) + 2 < 0$  

Solution :  
(I1) : $\ln(x) - 1 \geq 0$  
On note par $D_I$ l’ensemble de définition de l’équation  
$x \in D_I \iff x > 0$  
Donc : $D_I = ]0; +\infty[$  
$\ln(x) - 1 \geq 0 \iff \ln(x) \geq \ln(e)$  
$\iff x \geq e$  
Ainsi : $x \in [e ; +\infty[$  
Donc : $S = [e; +\infty[$
```

<!-- Page 123 -->

```markdown
# Prof : fayssal 
Site web : www.elboutkhili.jimdofree.com

## Série corrigée 6 : Fonction logarithme 2BAC-BIOF 
Page 03

### (I2) : \( \ln(3 - x) - \ln(x + 1) \leq 0 \)
L'inéquation est définie si : \( 3 - x > 0 \) et \( x + 1 > 0 \)  
Donc \( x < 3 \) et \( x > -1 \)  
L'inéquation est définie sur : \( [-1 ; 3] \).

On restreint donc la recherche des solutions à cet intervalle.  
\[
\ln(3 - x) - \ln(x + 1) \leq 0 \Leftrightarrow \ln(3 - x) \leq \ln(x + 1) 
\Leftrightarrow 3 - x \leq x + 1 
\]
\(\Leftrightarrow 2 \leq 2x\)  
\(\Leftrightarrow 1 \leq x\)  

L'ensemble solution est donc \( -1 ; 3 \cap [1 ; +\infty[ \)  
Donc \( S = [1 ; 3[ \)

### (I3) : \( \ln\left(1 - \frac{2}{x}\right) > 0 \)
L'inéquation est définie si \( 1 - \frac{2}{x} > 0 \) ; Donc \( x - 2 > 0 \)  
\[
\begin{array}{|c|c|c|c|c|}
\hline
x & -\infty & 0 & 2 & +\infty \\ \hline
 & - & 0 & + & + \\
x - 2 & - & 0 & + & + \\ \hline
\end{array}
\]
Donc : \( D_I = ] -\infty ; 0 [ \cup ]2 ; +\infty [ \)  
\[
\ln\left(1 - \frac{2}{x}\right) > 0 \Leftrightarrow \ln\left(1 - \frac{2}{x}\right) > \ln(1) 
\]
\(\Leftrightarrow 1 - \frac{2}{x} > 1\)  
\(\Leftrightarrow -\frac{2}{x} > 0\)  
\(\Leftrightarrow 2 < 0\)  
\(\Leftrightarrow x < 0\)  

L'ensemble solution est donc \( ] -\infty ; 0 [ \).

### (I4) : \( \ln^2(x) - 3\ln(x) + 2 < 0 \)
\( x \in D_I \Leftrightarrow x > 0 \)  
Donc : \( D_I = ]0 ; +\infty[ \)  
Résolvons l’équation \( \ln^2(x) - 3\ln(x) + 2 = 0 \)  
On pose \( z = \ln(x) \), donc :  
\[
z^2 - 3z + 2 = 0 \Leftrightarrow (z - 1)(z - 2) = 0
\]
\( z = 1 \) ou \( z = 2 \)  
\(\ln(x) = 1\) ou \(\ln(x) = 2\)  
\( x = e \) ou \( x = e^2\)

### Tableau de signe de \( \ln^2(x) - 3\ln(x) + 2 \)
\[
\begin{array}{|c|c|c|c|c|c|}
\hline
x & 0 & e & e^2 & +\infty \\ \hline
\ln^2(x) - 3\ln(x) + 2 & + & 0 & - & + \\ \hline
\end{array}
\]
Donc les solutions de l’inéquation \( \ln^2(x) - 3\ln(x) + 2 < 0 \) sont \( S = ]e ; e^{2} [ \)

## Exercice 04
Résoudre dans \( \mathbb{R}^2 \) les systèmes suivants :  
\((S_1) : (3\ln x + 7\ln y = 4) \quad (S_2) : (2\ln x + 5\ln y = 3)\)

### Solution :
\((S_1) : (3\ln x + 7\ln y = 4) \quad (2\ln x + 5\ln y = 3)\)  
1ère méthode :
\[
\begin{cases}
3\ln x + 7\ln y = 4 \\ 
2\ln x + 5\ln y = 3
\end{cases}
\]
```

<!-- Page 124 -->

```markdown
# Série corrigée 6 : Fonction logarithme 2BAC-BIOF Page 04

**Prof : fayssal**  
**Site web : www.elboutkhili.jimdo.com**  

### (S1) :
$$
\begin{cases}
\ln x \cdot \ln y = -10 \\
\ln x + \ln y = 3
\end{cases}
$$

### (S2) :
$(S_2)$ est défini si $x > 0$ et $y > 0$.

1ère méthode :  
On pose $X = \ln(x)$ et $Y = \ln(y)$ donc
$$
\begin{cases}
\ln x \cdot \ln y = -10 \\
\ln x + \ln y = 3
\end{cases}
$$

**Rappel :**  
Pour déterminer deux réels $x$ et $y$ tels que $x+y = S$ et $x \cdot y = P$ avec $S$ et $P$ donnés.

On résoud l’équation $t^2 - St + P = 0$.

Donc on résoud l’équation
$$
t^2 - 3t - 10 = 0
$$
$$
\Delta = (-3)^2 - 4 \cdot 1 \cdot (-10) = 49
$$
$$
X = \frac{3 - \sqrt{49}}{2} \quad \text{et} \quad Y = \frac{3 + \sqrt{49}}{2}
$$

$$
X = -2 \quad \text{et} \quad Y = 5
$$
$$
\ln x = -2 \quad \text{et} \quad \ln y = 5
$$

Donc $S = \{(e^{-2}, e^5); (e^5, e^{-2})\}$.

2ème méthode :  
On pose $X = \ln(x)$ et $Y = \ln(y)$ donc
$$
\begin{cases}
3\ln x + 7\ln y = 4 \\
2\ln x + 5\ln y = 3
\end{cases}
$$

Par la méthode de déterminant on a :
$$
D = \begin{vmatrix}
3 & 7 \\
2 & 5
\end{vmatrix} = 15 - 14 = 1
$$

$$
D_x = \begin{vmatrix}
4 & 7 \\
3 & 5
\end{vmatrix} = 20 - 21 = -1
$$

$$
D_y = \begin{vmatrix}
3 & 4 \\
2 & 3
\end{vmatrix} = 9 - 8 = 1
$$

Donc $X = \frac{D_x}{D} = -1 \quad \text{et} \quad Y = \frac{D_y}{D} = 1$.

Donc $\ln x = -1 \quad \text{et} \quad \ln y = 1$.

Donc $x = e^{-1} \quad \text{et} \quad y = e$.

Donc $S = \{(e^{-1}, e)\}$.

2ème méthode :  
$$
\begin{cases}
\ln x \cdot \ln y = -10 \\
\ln x + \ln y = 3
\end{cases}
$$

$$
\Leftrightarrow \quad \ln y - \ln 2y + 10 = 0 \quad \Leftrightarrow \quad \ln 2y - 3\ln y - 10 = 0
$$

$$
\Leftrightarrow \quad \begin{cases}
\ln x = 3 - \ln y \\
y = e^{-2} \text{ ou } y = e^5
\end{cases}
$$

$$
\ln x = 3 - \ln y.
$$

$$
\begin{cases}
y = e^{-2} \\
\ln x = 3 - \ln y \Rightarrow \ln x = 5 \Rightarrow x = e^5
\end{cases}
$$

Donc $S = \{(e^5, e^{-2}), (e^{-2}, e^5)\}$.
```

<!-- Page 125 -->

```markdown
# Prof : fayssal 
Site web : www.elboutkhili.jimdofree.com

# Exercice 05

Calculer les limites suivantes :
a) $$ \lim_{x \to +\infty} x - \ln x $$ ; 
b) $$ \lim_{x \to 0^{+}} \frac{\ln^2(x)}{x} $$ ; 
c) $$ \lim_{x \to +\infty} \ln x $$ ; 
d) $$ \lim_{x \to 0^{+}} \frac{1}{x^2} + \ln x $$ ; 
e) $$ \lim_{x \to 0^{+}} \frac{1}{x} \ln(\sqrt{x}) $$ ; 
f) $$ \lim_{x \to +\infty} \ln(x^2 + 1) - x $$ ; 
g) $$ \lim_{x \to +\infty} \frac{\ln^2(x)}{x} $$ ; 
h) $$ \lim_{x \to 0^{+}} \ln x $$ ; 
i) $$ \lim_{x \to +0} x^3 $$ ; 
j) $$ \lim_{x \to +\infty} x \ln(x) $$ ; 
k) $$ \lim_{x \to 0^{+}} x^3 $$ 

## Solution :

### Rappel (F.I.) :
$$ \frac{0}{0} ; \quad \infty - \infty ; \quad 0 \cdot \infty ; \quad +0 \cdot -\infty $$

a) Il s'agit d'une forme indéterminée de type "+∞−∞".
Levons l'indétermination :
$$ \lim_{x \to +\infty} x - \ln x = \lim_{x \to +\infty} \left(1 - \frac{\ln x}{x}\right) $$
$$ = \lim_{x \to +\infty} \left(1 - \frac{\ln x}{x}\right) $$
Et comme $$ \lim_{x \to +\infty} \frac{\ln x}{x} = 0 $$ et $$ \lim_{x \to +\infty} 1 - \frac{\ln x}{x} = 1 $$.
Donc : $$ \lim_{x \to +\infty} x - \ln x = +\infty $$.

b) On a : $$ \lim_{x \to 0^{+}} \ln^2(x) = +\infty $$ 
Donc 
$$ \lim_{x \to 0^{+}} \frac{\ln^2(x)}{x} = \frac{+\infty}{0^{+}} = +\infty $$.

c) Il s'agit d'une forme indéterminée de type "−∞".
Levons l'indétermination :
$$ \lim_{x \to +\infty} \ln x - 1 = \lim_{x \to +\infty} \frac{\ln x}{1 - 1/x} $$
Comme $$ \lim_{x \to +\infty} 1 - 1/x = 1 $$, alors :
$$ \lim_{x \to +\infty} \ln x = +\infty $$.

d) Il s'agit d'une forme indéterminée de type "+∞−∞".
$$ \lim_{x \to 0^{+}} \frac{1}{x^2} + \ln x = \lim_{x \to 0^{+}} \frac{1 + x^2 \ln x}{x^2} $$
$$ = \lim_{x \to 0^{+}} x^2 = 1 + \frac{1}{0^{2}} = +\infty $$.

e) 
$$ \lim_{x \to 0^{+}} \frac{1}{x} \ln x = \lim_{x \to 0^{+}} \frac{\ln x}{\frac{1}{x}} $$
$$ = \lim_{x \to 0^{+}} x \ln x = -\infty $$.

f) Il s'agit d'une forme indéterminée de type "+∞−∞".
$$ \lim_{x \to +\infty} \ln(x^2 + 1) - x = \lim_{x \to +\infty} \left[\frac{\ln(x^2 + 1)}{1} - x\right] $$
$$ = \lim_{x \to +\infty} \frac{\ln(x^2 + 1)}{x} - 1 $$
$$ = -\infty $$.

Car :
$$ \lim_{x \to +\infty} x = +\infty $$ et 
$$ \lim_{x \to +\infty} \frac{2\ln x}{x} = 0 $$ et 
$$ \lim_{x \to +\infty} \frac{\ln(1 + \frac{1}{x^2})}{x} = 0 $$.
```

<!-- Page 126 -->

```markdown
i) Il s'agit d'une forme indéterminée de type "+∞,0".
On pose $X = \frac{1}{x}$ donc $x = \frac{1}{X}$ ; 
ou $x \to +\infty \Rightarrow X \to 0^+$

$$
\lim_{x \to +\infty} x \ln(1 + \frac{1}{x}) = \lim_{X \to 0^+} \frac{1}{X} \ln(1 + X) = \lim_{X \to 0^+} \frac{\ln(1 + X)}{X} = 1
$$

Car $\lim_{x \to +\infty} \frac{1}{x} = 0$ et $\lim_{x \to 0} \ln(1 + X) = 1$

h) 
$$
\lim_{x \to +\infty} \frac{(\ln x)^2}{x} = \lim_{x \to +\infty} \frac{(2 \ln x)^2}{\sqrt{x}} = \lim_{x \to +\infty} \frac{2 \ln \sqrt{x}}{\sqrt{x}}
$$

On pose $X = \sqrt{x}$ donc $x = X^2$ ; 
ou $x \to +\infty \Rightarrow X \to +\infty$

$$
\lim_{x \to +\infty} \frac{(\ln x)^2}{x} = \lim_{X \to +\infty} \frac{2 \ln X}{\sqrt{x}} = 0
$$

Car $\lim_{x \to +\infty} \frac{2 \ln X}{X^2} = 0$

k) 
$$
\lim_{x \to 0^+} x(\ln x)^3 = \lim_{x \to 0^+} \frac{(\sqrt[3]{x})^3}{3\ln(\sqrt[3]{x})^3} = \lim_{x \to 0^+} (3 \sqrt{x} \ln \sqrt{x})^3
$$
; (car $\lim_{x \to 0^+} \ln x = 0$)

Soit la fonction $f$ définie sur $]0 ; +\infty[$ par $f(x) = 1 - x + \ln x$
1) Etudier les branches infinies de $(Cf)$
2) Etudier la position relative de $(Cf)$ et la droite : $(\Delta) : y = -x$
3) Déterminer les variations de la fonction $f$
4) Etudier la convexité de la fonction $f$ 
5) Tracer $(D)$ et $(Cf)$ dans un repère orthonormé $(O ; \vec{i} ; \vec{j})$

Solution :
1) Etudier les branches infinies de $(Cf)$
$$
\lim_{x \to 0^+} f(x) = \lim_{x \to 0^+} (1 - x + \ln x) = -\infty
$$

Car : $\lim_{x \to 0^+} 1 - x = 1$ et $\lim_{x \to +\infty} \ln x = +\infty$

Donc la droite d'équation $x = 0$ c-à-dire l'axe des abscisses est asymptotes verticale à $(Cf)$
$$
\lim_{x \to +\infty} f(x) = \lim_{x \to +\infty} \left( 1 - x + \frac{\ln x}{x} \right) = -\infty
$$

Car $\lim_{x \to +\infty} 1 - x = +\infty$ et $\lim_{x \to +\infty} \frac{\ln x}{x} = 0$
```

<!-- Page 127 -->

```markdown
# Prof : fayssal
## Site web : www.elboutkhili.jimdofree.com
### Série corrigée 6 : Fonction logarithme 2BAC-BIOF  Page 07

$$
\lim_{x \to +\infty} \frac{f(x)}{x} = \lim_{x \to +\infty} \frac{1 - x + \ln x}{x}
= \lim_{x \to +\infty} x \left( \frac{1 - 1 + \frac{\ln x}{x}}{1} \right) = \lim_{x \to +\infty} \frac{1}{1 - 1 + \frac{\ln x}{x}} = -1
$$

$$
\lim_{x \to +\infty} f(x) - (-x) = \lim_{x \to +\infty} \left( 1 - x + \ln(x) + x \right) = \lim_{x \to +\infty} 1 + \ln(x) = +\infty
$$

Donc la courbe $(Cf)$ admet une branche parabolique suivant la droite $(A)$ d’équation $y = -x$ au voisinage de $+\infty$

### 2) Étudier la position relative de $(Cf)$ et la droite : $(\Delta) : y = -x$

$$
f(x) - (-x) = 1 - x + \ln(x) + x = 1 + \ln(x)
$$

Cherchons le signe de $2 + 2 \ln(x)$ sur $]0 ; +\infty[$

$$
1 + 2 \ln(x) = 0 \Rightarrow \ln(x) = -1 \Rightarrow x = e^{-1} \Rightarrow x = \frac{1}{e}
$$

| x      | 0     | $\frac{1}{e}$ | +∞   |
|--------|-------|---------------|-------|
| $f(x) + x$ | || 0    | -       | +     |

**Position relative :**  
$(Cf)$ est en dessous de $(A_{(\frac{1}{e}; -\frac{1}{e})})$  
$(Cf)$ est en dessus de $(\Delta)$

### 3) Sur $]0 ; +\infty[$ est dérivable et on a :

$$
f'(x) = -1 + \frac{1 - x}{x}
$$

Comme $x > 0$, $f'(x)$ est du signe de $1 - x$

### 4) Sur $]0 ; +\infty[$, on a $f'$ est dérivable de plus :

$$
f''(x) = -1 \times x - (1 - x) \times 1 = \frac{-x^2 - 1 + x}{x^2} = \frac{-1 + x}{x^2} < 0
$$

On en déduit que $(Cf)$ la courbe de $f$ est concave sur $]0 ; +\infty[$.

### 5) Tracer $(D)$ et $(Cf)$ dans un repère orthonormé $(O ; \vec{i} ; \vec{j})$
```

<!-- Page 128 -->

```markdown
### Prof: fayssal  
Site web : www.elboutkhili.jimdofree.com  
**Exercice 08**

**A)** Soit une fonction définie sur $]0; +\infty[$ par $g(x) = x - \ln(x)$  
1) Déterminer $\lim_{x \to 0^+} g(x)$ et $\lim_{x \to +\infty} g(x)$  
2) Calculer $g'(x)$ ; puis dresser le tableau des variations de $g$  
3) Montrer que $\forall x \in ]0; +\infty[, \ g''(x) > 0$

**B)** If une fonction définie sur $]0; +\infty[$ par $f(x) = \ln(x) + \frac{1}{x} + \frac{\ln(x)}{x}$  
1) Déterminer $\lim_{x \to 0^+} f(x)$ et interpréter le résultat géométrique  
2) Calculer $\lim_{x \to +\infty} f(x)$ et étudier la branche infinie de $(Cf)$ au voisinage de $+\infty$

3) a) Montrer que $\forall x \in ]0; +\infty[, \ f' (x) = \frac{g(x)}{x^2}$  
b) Dresser le tableau de variation de $f$  
c) Déterminer l’équation de la tangente $(T)$ au point $A(1;1)$  
4) Montrer que $f$ admet une fct réciproque $f^{-1}$, définie sur $]0; +\infty[$ que l’on précisera  
5) Montrer que l’équation $f(x) = 0$ admet une unique solution $\alpha$ dans $[\frac{1}{2}, 1[$ ; (On prend $f(\frac{1}{2}) = -0.2$)

6) Tracer $(T)$ et $(Cf)$ dans un repère orthonormé $(O; \vec{i}; \vec{j})$

**Solution :**  

**B)** Soit une fonction définie sur $]0; +\infty[$ par $g(x) = x - \ln(x)$  
1) Déterminer $\lim_{x \to 0^+} g(x)$ et $\lim_{x \to +\infty} g(x)$

Car $\lim_{x \to 0^+} x = 0$ et $\lim_{x \to 0^+} \ln(x) = -\infty$

$$ \lim_{x \to 0^+} g(x) = \lim_{x \to 0^+} \left( x \left( 1 - \ln \frac{x}{x} \right) \right) = +\infty $$

Car $\lim_{x \to +\infty} x = +\infty$ et $\lim_{x \to +\infty} \ln(x) = +\infty$  
2) Calculer $g'(x)$ ; puis dresser le tableau des variations de $g$  
```


<!-- Page 129 -->

```markdown
# Prof: fayssal
## Site web : www.elboutkhili.jimdofree.com
### Série corrigée 6 : Fonction logarithme 2BAC-BIOF
#### Page 09

$$
\lim_{x \to +\infty} \frac{f(x)}{x} = \lim_{x \to +\infty} \frac{\ln(x) + 1}{x} + \lim_{x \to +\infty} \frac{\ln(x)}{x} 
$$
$$
= \lim_{x \to +\infty} x = 0 \quad \text{et} \quad \lim_{x \to +\infty} \frac{1}{x^2} = 0
$$

Donc la courbe (Cf) admet une branche parabolique suivant l'axe des abscisses au voisinage de $-\infty$.

### 3)a Montrer que $\forall x \in ]0, +\infty[$ : $f'(x) = \frac{g(x)}{x^2}$
La fonction f est dérivable sur $]0, +\infty[$ comme somme des fonctions dérivables sur $]0, +\infty[$.

Rappel : 
$$
(\ln x)' = \frac{1}{x}; \quad \left( \frac{1}{x} \right)' = -\frac{1}{x^2}; \quad \left( \frac{u}{v} \right)' = \frac{uv' - u'v}{v^2}
$$

$$
f'(x) = \frac{1}{x} - \frac{1}{x^2} + x \cdot \left(-\ln(x)\right) \cdot \frac{1}{x^2} 
$$
$$
= \frac{x - 1 - \ln(x)}{x^2}
$$
$$
= \frac{g(x)}{x^2}
$$

### b) Dresser le tableau de variation de f
On a : $\forall x \in ]0, +\infty[$ et $\forall x \in ]0, +\infty[$ : $g(x) > 0$

Donc la fonction f est strictement croissante sur $]0, +\infty[$.

#### c) Déterminer l'équation de la tangente (T) au point A(1;1)
(T) : $y = f'(1)(x - 1) + f(1)$
$$
y = 1(x - 1) + 1
$$
(T) : $y = x$

### 4) Montrer que f admet une fonction réciproque $f^{-1}$, définie sur]1, +∞[ que l'on précisera
- $f$ est dérivable sur $]0, +\infty[$ donc elle est continue sur $]0, +\infty[$
- La fonction f est strictement croissante sur $]0, +\infty[$

Donc f admet une fct réciproque $f^{-1}$, définie sur $]1, +\infty[$.

$$
J = f^{-1}([0, +\infty[) = \left[ \lim_{x \to 0^+} f(x), \lim_{x \to +\infty} f(x) \right] = ]-\infty, +\infty[
$$

### 5) Montrer que l'équation $f(x) = 0$ admet une unique solution $\alpha$
Dans $]1/2, 1[$, on prend $f(1/2) = -0.2$

La fonction f est continue sur $]0, -\infty[$ en particulier $[1, 2]$.

### 6) Tracer (T) et (Cf) et (Cf^{-1}) dans un repère orthonormé $(O; e_1; e_2)$
(Cf) et (Cf^{-1}) sont symétriques par rapport à la droite (T): $y = x$.

La droite d'équation $x = 0$ est asymptote verticale à (Cf).

La droite d'équation $y = 0$ est asymptote horizontale à (Cf^{-1}).
```

<!-- Page 130 -->

```markdown
**Prof : fayssal**  
**Site web : www.elboutkhili.jimdofree.com**  
**Série corrigée 6 : Fonction logarithme 2BAC-BIOF**  
**Page 10**

### Exercice 09

Soit la fonction $f$ définie sur ]−2 ; 1] par $f(x) = \ln\left(\frac{x+2}{1-x}\right)$

1) a) Montrer que $D_f = ]−2 ; 1[$  
   b) Calculer $\lim_{x \to -2^+} f(x)$ et $\lim_{x \to 1^-} f(x)$ puis interpréter les deux résultats géométriquement  

2) a) Montrer que $f$ est dérivable sur ]−2 ; 1[  
   b) Déterminer le sens de variation de la fonction $f$  

3) Montrer que l’équation $f(x) = 0$ admet une unique solution $\alpha$ dans ]−1, 0[  
4) Tracer la courbe représentative de $f$.

### Solution :

1) a) $x \in D_f \iff \frac{x+2}{1-x} > 0$ ; On dresse le tableau de signe de  
   $$
   \begin{array}{|c|c|c|c|}
   \hline
   x & -2 & 1 & +\infty \\
   \hline
   x+2 & 0 & + & + \\
   \hline
   1-x & - & 0 & + \\
   \hline
   \end{array}
   $$  
   $D_f = ]−2 ; 1[ $

b) Par composition de limites, on a :  
$$
\lim_{x \to -2^+} \frac{x + 2}{1 - x} = 0^+ \text{ donc } f(x) = -\infty  
$$  
$$
\lim_{x \to 1^-} \frac{x + 2}{1 - x} = +\infty \text{ donc } \lim_{x \to 1^-} f(x) = +\infty 
$$  
La courbe de fonction $f$ admet deux asymptotes verticales d’équations : $x = -2$ et $x = 1$.

2) a) la fonction $u : x \mapsto \frac{x + 2}{1 - x}$ est dérivable sur ]−2 ; 1[ car c’est une fonction rationnelle elle est toujours dérivable sur tout intervalle inclus dans son domaine de définition qui est $]−\infty ; 1[ \cup ]1; +\infty[$  
   Donc la fonction $f$ est dérivable sur ]−2 ; 1[  

b) Soit : ]−2 ; 1[  
$$
u'(x) = \frac{1}{(1 - x)(x + 2)} \times (-1)  
$$  
$$
= -\frac{1 + x}{(1 - x)^2}  
$$  
Donc : $f'(x) = \frac{u'(x)}{u(x)}$  
$$
f' (x) = -\frac{(1 + x)^3}{(1 - x)^2 u(x)}
$$  
u est strictement positive sur ]−2 ; 1[ et donc $f' > 0$.

Donc la fonction $f$ est strictement croissante sur ]−2 ; 1[.
```

<!-- Page 131 -->

```markdown
# Série corrigée 6 : Fonction logarithme 2BAC-BIOF

## Exercice 10

### A) Soit $g$ la fonction définie sur $]0; +\infty[$ par $g(x) = 1 + x + \ln x$
1) Calculer $\lim_{x \to 0^+} g(x)$ et $\lim_{x \to +\infty} g(x)$.
2) a) Montrer que l’équation $g(x) = 0$ admet une unique solution $\alpha \in ]0; +\infty[$ et que $\frac{1}{g'(\alpha)} = -\frac{1}{2}$. (On donne $g'(\frac{1}{2}) = -4,0$)
3) Déduire le signe de $g'(x)$ pour tout $x \in ]0; +\infty[$

### B) Soit $f$ la fonction définie sur $[0; +\infty[$ par : 
$$
f(x) = \frac{4x}{1+x} ; \quad x > 0 \\
f(0) = 0
$$
Et $(C_f)$ sa courbe dans un repère orthonormé $(O; \vec{i}; \vec{j})$. (unité 2cm)
1) a) Montrer que $f$ est continue à droite en $0$.
   b) Montrer que $\lim_{x \to +\infty} f(x) = +\infty$ et que $\lim_{x \to 0} f(x) = 0$, puis interpréter graphiquement le résultat.
2) a) Montrer que $\lim_{x \to 0^+} \frac{f(x)}{x} = +\infty$, puis interpréter le résultat donné.
   b) Montrer que pour tout $x \in ]0; +\infty[$ : $f'(x) = \frac{4g(x)}{(x+1)^2}$
   c) Déduire que $f$ est strictement croissante sur l’intervalle $[0; +\infty[$ et strictement décroissante sur l’intervalle $[0; 0[$.
   d) Montrer que $f(\alpha) = -4\alpha$ et dresser le tableau de variations de $f$.
3) a) Montrager que pour tout $x \in ]0; +\infty[$ : $f''(x) = \frac{4(1 - x^2 - 2\ln x)}{(x+1)^3}$
   b) Étudier le signe de $1 - x^2$ et $-2\ln x$ sur $]0; +\infty[$ et en déduire que le point d’abscisse $1$ est l’unique point d’inflexion de $(C_f)$.
   c) Donner l’équation de la tangente $(T)$ à $(C_f)$ au point d’abscisse $1$.
4) Tracer $(T)$ et $(C_f)$ dans le repère $(O; \vec{i}; \vec{j})$. (on donne $\alpha \approx 0.25$)
   
### C) Soit $h$ la restriction de $f$ sur l’intervalle $[α; +\infty[$.
1) Montrer que $h$ admet une fonction réciproque $h^{-1}$ définie/$ à déterminer.
2) Montrer que $h^{-1}$ est dérivable en $0$ puis Calculer $(h^{-1})'(0)$.
```

<!-- Page 132 -->

```markdown
# Prof : fayçal  
Site web : www.elboutkhili.jimdofree.com  

## Série corrigée 6 : Fonction logarithme 2BAC-BIOF  
Page 12

### A) Soit $g$ la fonction définie sur $J = ]0; +\infty[$ par $g(x) = 1 + x + \ln x$  

#### 1) Calculer $\lim_{x \to 0^+} g(x)$ et $\lim_{x \to +\infty} g(x)$.  

$$ \lim_{x \to 0^+} g(x) = \lim_{x \to 0^+} 1 + x + \ln x = -\infty $$  
Car : $\lim_{x \to 0^+} x = 0$ et $\lim_{x \to 0^+} \ln x = -\infty$  

$$ \lim_{x \to +\infty} g(x) = \lim_{x \to +\infty} 1 + x + \ln x = +\infty $$  
Car : $\lim_{x \to +\infty} x = +\infty$  

#### 2) a) Montrer que $g$ est strictement croissante sur $J$.  

$g$ est dérivable sur $J$ ; $]0; +\infty[$ comme somme de deux fonctions dérivables sur $J$ ; $]0; +\infty[$ et on a :  

$$ g'(x) = 1 + \frac{1}{x} > 0 $$  

$g$ est strictement croissante sur $J$ ; $]0; +\infty[$  

b) Montrer que l’équation $g(x) = 0$ admet une unique solution $\alpha$ dans $J$ ; $]0; +\infty[$ avec $\frac{1}{5} < \alpha < \frac{1}{2}$ (On donne $g\left(\frac{1}{5}\right) = -0,4$)  

On a $g$ est dérivable sur $J$ ; $]0; +\infty[$ et elle est continue sur $J$ ; $]0; +\infty[$  
Et on a $g(0) = ]-\infty; +\infty[$  

Donc $0 \in g(J)$  

D’où l’équation $g(x) = 0$ admet une unique solution $\alpha \in J$ ; $]0; +\infty[$  

Vérifions que $\frac{1}{5} < \alpha < \frac{1}{2}$  

On a $g$ est continue sur $[ \frac{1}{5} ; \frac{1}{2} ]$  
Et $g$ est strictement croissante sur $[ \frac{1}{5} ; \frac{1}{2} ]$  

ET : $g\left(\frac{1}{5}\right) = -0,4$ et $g\left(\frac{1}{2}\right) = 1 + \frac{1}{2} + \ln\frac{1}{2} = \ln(e) - \ln 2 + 1 > 0$  

Donc : $g\left(\frac{1}{5}\right) \times g\left(\frac{1}{2}\right) < 0$  

Donc : $$ \frac{1}{5} < \alpha < \frac{1}{2} $$  

### 3) Déduire le signe de $g(x)$ pour tout $x \in ]0; +\infty[$  

On distingue deux cas ; $x \in ]0; \alpha]$ et $x \in [\alpha; +\infty[$  

Soit : $x \in ]0; \alpha]$  
$0 < x \leq \alpha \implies g(x) < g(\alpha) \implies g(x) \leq 0$  

Soit : $x \in [\alpha; +\infty[$  
$\alpha \leq x \implies g(x) \geq g(\alpha) \implies g(x) > 0$  

On dresse le tableau de signe de $g$ sur $]0; +\infty[$  

| $x$        | $0$       | $\alpha$   | $+\infty$  |
|------------|-----------|------------|------------|
| $g(x)$     | $-$       | $0$        | $+$        |

### B) Soit $f$ la fonction définie sur $[0; +\infty[$ par : $f(x) = \frac{4x \ln x}{1 + x}$ et $f(0) = 0$  

#### 1) a) Montrer que $f$ est continue à droite en $0$.  

$$ f_f(x) = \lim_{x \to 0^+} f(x) = \lim_{x \to 0^+} \frac{4x \ln x}{1 + x} = 0 $$  
Car : $\lim_{x \to 0^+} \ln x = 0$ et $\lim_{x \to 0^+} 1 + x = 1$  
Donc $f(0) = f_f(0)$ donc $f$ est continue à droite de $0$.  

b) Montrer que $f(x) \to +\infty$ et que $\lim_{x \to +\infty} \frac{f(x)}{x} = 0$, puis interpréter graphiquement le résultat.  

Dans : $$ f(x) = \frac{4x \ln x}{1 + x} $$  
$$ \lim_{x \to 0^+} \frac{4x \ln x}{x} = \frac{4 \ln x}{1 + 1} = 4 \ln x \to -\infty $$  

Car : $\lim_{x \to +\infty} \ln x = +\infty$ donc $\frac{1}{x} \to 0$.
```

<!-- Page 133 -->

```markdown
**Prof : fayssal**  
**Site web : www.elboutkhili.jimdo.com**  
**Série corrigée 6 : Fonction logarithme 2BAC-BIOF**  
**Page 13**

1. $ f(x) = \lim_{x \to +\infty} \frac{4 \ln x}{1+x} $

   $$ \lim_{x \to +\infty} x = 0 $$  
   $$ \lim_{x \to +\infty} \frac{4 \ln x}{x(1+x)} = \lim_{x \to +\infty} \frac{4 \ln x}{x} \times \frac{1}{1 + x} = 0 $$

   Car : $$ \lim_{x \to +\infty} \ln x = 0 $$ et $$ \lim_{x \to +\infty} \frac{1}{x} = 0 $$  

**Interprétation géométrique :**  
On a : $$ \lim_{x \to +\infty} f(x) = -\infty $$ et $$ \lim_{x \to +\infty} f(x) = 0 $$  
Donc la courbe $(Cf)$ admet une branche parabolique suivant l’axe des abscisses au voisinage de $+\infty$

2. a) Montrer que $$ \lim_{x \to 0^+} \frac{f(x)}{4 \ln x} = +\infty $$, puis interpréter le résultat géom

   $$ \lim_{x \to 0^+} f(x) = 4 \ln x $$  
   $$ \lim_{x \to 0^+} (1 + x) = 1 $$  

   Car : $$ \lim_{x \to 0^+} \ln x = -\infty $$ et $$ 1 + 1 = 1 $$  
   Donc $$ \lim_{x \to 0^+} \frac{f(x)}{x - 0} = -\infty $$

   Donc n'est pas dérivable à droite de 0  
   **Interprétation géométrique :**  
   la courbe $(Cf)$ admet une demi tangente verticale au point $A(0;0)$ dirigée vers le bas

b) Montrer que pour tout $$ x \in [0; +\infty[ $$ : $$ f'(x) = \frac{4g(x)}{(x+1)^2} $$  
On la fonction $f$ est dérivable sur $[0; +\infty[$ comme quotient de deux fonctions dérivable sur $[0; +\infty[$

Rappel : $$ \left( \frac{u}{v} \right)' = \frac{u'v - uv'}{v^2} $$ ; $$ (uv)' = u'v + uv' $$ ; $$ (\ln x)' = \frac{1}{x} $$

Soit $$ x \in [0; +\infty[ $$

$$ f'(x) = \frac{(4 \ln x + 4x \cdot \frac{1}{x})(x - 1) - (4 \ln x \cdot x \cdot 1)}{(x + 1)^2} $$

$$ f'(x) = \frac{(4 \ln x + 4)(x + 1) - 4x \ln x}{(x + 1)^2} $$

$$ f'(x) = \frac{4 \ln x + 4 + 4 - 4 \ln x}{(x + 1)^2} $$  

$$ = \frac{4g(x)}{(x + 1)^2} $$

c) Déduire que $f$ est strictement croissante sur l’intervalle $$ [\alpha; +\infty[ $$ et strictement décroissante sur l’intervalle $$ [0; \alpha[ $$  

On a : pour tout $$ x \in [0; +\infty[ $$ : $$ f'(x) = \frac{4g(x)}{(x+1)^2} $$ et $$ (x + 1)^2 > 0 $$  

Donc le signe de $$ f' $$ est le signe de $$ g $$ sur $$ [0; +\infty[ $$  
Et on a d’après la partie A) le signe de $$ g $$ sur $$ [0; +\infty[ $$ :  
$$ \begin{array}{|c|c|c|}
\hline
x & 0 & \alpha & -\infty \\
\hline
g(x) & - & 0 & + \\
\hline
\end{array} $$  
Donc $f$ est strictement croissante sur l’intervalle $$ [\alpha; +\infty[ $$ et strictement décroissante sur l’intervalle $$ [0; \alpha[ $$
```

<!-- Page 134 -->

```markdown
d) Montrons que $f(x) = -4\alpha$

On a : $f(\alpha) = \frac{4\alpha \ln \alpha}{1 + \alpha}$

Et d’après la partie A) le le $g$ est solution de l’équation $g(x) = 0$

Donc $g(\alpha) = 4\alpha \ln \alpha \Rightarrow 1 + \alpha = -\ln(\alpha)$

Donc : $f(\alpha) = \frac{4\alpha \ln \alpha}{1 + \alpha} = -4\alpha$

On dresse le tableau de variations de $f$

| $x$   | $0$ | $\alpha$ | $+\infty$ |
|-------|-----|----------|-----------|
| $f'(x)$ | $-$ | $0$ | $+$ |
| $f(x)$ | $0$ | $-$4$\alpha$ | $-$ |

3)a) Montrer que pour tout $x \in [0; +\infty[$ : $f''(x) = \frac{4(1-x^2-2x\ln x)}{x(x+1)^3}$

Rappel : $\left( \frac{u}{v} \right)' = \frac{u'v - uv'}{v^2}$ ; $(u^n)' = nu^{n-1} ; \, (\ln x)' = \frac{1}{x}$

On a : $f'(x) = \frac{4(ln x + x + 1)}{(x + 1)^2}$

Donc $f''(x) = \frac{4(1 + x) - 4(ln x + x + 1) \cdot 2 x \cdot (x + 1)^{1}}{(x + 1)^4}$

Donc :
$$
f''(x) = \frac{4(1 + x) - 8(ln x + x + 1)(x + 1)}{(x + 1)^4}
$$

Donc :
$$
f''(x) = \frac{4(1 + x) - 8(ln x + x + 1)}{(x + 1)^3}
$$

Donc :
$$
f''(x) = \frac{4[ x^2 + 2x + 1 - 2 (x \ln x + 2x^2 + 2x)]}{x(x + 1)^3}
$$

Donc :
$$
f''(x) = \frac{4[ x^2 + 2x + 1 - 2 (x \ln x + 2x^2 + 2x)]}{x(x + 1)^3}
$$

Donc : 

$$
f''(x) = \frac{4[ x^2 + 2x + 1 - (2 x \ln x + 2 x^2 + 2 x)]}{x(x + 1)^3}
$$

Donc : $f''(x) = \frac{4[x^2 + 2x + 1 - 2(x \ln x + 2x^2 + 2x)]}{x(x + 1)^3}$

Donc $f''(x) = \frac{4[ x^2 + 2x + 1 - 2(x \ln x + 2x^2 + 2x)]}{x(x + 1)^3}$

```


<!-- Page 135 -->

```markdown
c) Donner l'équation de la tangente $(T)$ à $(C_f)$ au point d'abscisse 1  
$(T): \quad y = f'(1)(x - 1) + f(1)$  
$y = 2 \times (x - 1) + 0$  
Donc $(T): \quad y = 2x - 2$  

4) Tracer $(T)$ et $(C_f)$ dans le repère $(O; \vec{i}; \vec{j})$ (on donne $\alpha \approx 0.25$)  

On a $\alpha \approx 0.25$ donc $f(\alpha) = -4\alpha \approx -1$  

C) Soit $h$ la restriction de $f$ sur l'intervalle $[\alpha; +\infty[$.  
Donc $\forall x \in [\alpha; +\infty[$ : $h(x) = f(x)$  

1) Montrer que $h$ admet une fonction réciproque $h^{-1}$ définie $J$ à déterminer  
$\bullet \ f$ est dérivable sur $]0; +\infty[$ donc elle est continue sur $]0; +\infty[$  
On particulier sur $[\alpha; +\infty[$ donc elle est continue sur $[\alpha; +\infty[$.  
$\bullet \ $La fonction $f$ est strictement croissante sur $] \alpha; +\infty[$  
Donc la fonction $h$ est str croissante sur $] \alpha; +\infty[$  

Donc $f$ admet une fct réciproque $f^{-1}$, définie sur $J = h([\alpha; +\infty[)$  
$$ J = h([\alpha; +\infty[) = [h(\alpha); \lim_{x \to +\infty} h(x)] $$  
$$ = ]-4\alpha; +\infty[ $$  

2) Montrer que $h^{-1}$ est dérivable en 0 puis Calculer $(h^{-1})'(0)$.  
On a : $h(1) = 1 \quad donc \quad h^{-1}(0) = 1$  

La fonction $h$ est dérivable en 1 et on a : $h'(1) = 2 \neq 0$  

Donc la fonction $h^{-1}$ est dérivable en 0 et on a :  
$$(h^{-1})'(0) = \frac{1}{h'(1)} = \frac{1}{2}$$
```

<!-- Page 136 -->

```markdown
## Série corrigée 6 : Fonction logarithme 2BAC-BIOF

### Exercice 09

A) Soit $g$ une fonction définie sur $]0 ; +\infty[$ par

$$ 
g(x) = \ln\left( 1 + \frac{1}{x} \right) - \frac{1}{x + 1} 
$$

1) Déterminer $\lim_{x \to +\infty} g(x)$ et Calculer $\lim_{x \to +\infty} g(x)$

2) Montrer que $g' (x) = \frac{-1}{x(x+1)^2}$ sur $]0; +\infty[$ 

3) Dresser son tableau de variation sur $]0; +\infty[$ 

4) Montrer que $\forall x \in [0; +\infty[ : \quad g'(x) > 0$

B) Soit $f$ une fonction définie sur $[0; +\infty[$ par :

$$ 
f(x) = x \ln\left( 1 + \frac{1}{x} \right) ; \quad  si \; x \neq 0 \; et \; f(0) = 0 
$$

1) Montrer que $f$ est continue en $0$ à droite 

2) Montrer que $\lim_{x \to +\infty} f(x) = 1$, puis interpréter le résultat géométriquement 

3) Étudier la dérivabilité de $f$ en $0$ à droite puis interpréter le résultat géométriquement 

4a) Montrer que $f$ est dérivable sur $]0; +\infty[$ et que $\forall x \in ]0; +\infty[ : \; f'(x) = g(x)$

c) Dresser le tableau de variation de $f$ sur $]0; +\infty[$ 

5) Étudier la convexité de la courbe $(Cf)$

6) Tracer $(Cf)$ dans un repère orthonormé $(O; \; i; \; j)$ (unité 2 cm)

C) Soit $(U_n)$ tel que : $U_0 = \frac{1}{e}$ et $U_{n+1} = f(U_n)$

1) Montrer que : $\forall n \in \mathbb{N} \; 0 \leq U_n \leq \frac{1}{e - 1}$

2) Montrer que la suite $(U_n)$ est croissante 

3) Dédire que $(U_n)$ est convergente et calculer la limite de $(U_n)$

### Solution :

A) 1) 

$$ 
\lim_{x \to +\infty} g(x) = \lim_{x \to +\infty} \left( \ln\left( 1 + \frac{1}{x} \right) - \frac{1}{x + 1} \right) = +\infty 
$$

Car 

$$ 
\lim_{x \to 0^+} \ln\left( 1 + \frac{1}{x} \right) = \ln(1) = 0 \quad et \quad \lim_{x \to +\infty} \frac{1}{x + 1} = 0 
$$

A) 2) Rappels :

$$ 
[\ln(u)]' = \frac{u'}{u} \quad et \quad \left( \frac{1}{x} \right)' = -\frac{1}{x^2} \quad et \quad \left( \frac{1}{u} \right)' = -\frac{u'}{u^2} 
$$

Soit $x \in ]0; +\infty[$ 

$$ 
g'(x) = \frac{-1}{x^2} \cdot \frac{1}{1 + \frac{1}{x}} = \frac{-1}{(x + 1)^2} 
$$

Donc $\forall x \in ]0; +\infty[ : \quad g'(x) < 0$

3) On a $\forall x \in ]0; +\infty[ : \quad g'(x) < 0$

Donc la fonction $g$ est strictement décroissante sur $]0; +\infty[$  
```

<!-- Page 137 -->

```markdown
4) On a $ g(0) ; +\infty[ = \lim_{x \to +\infty} g(x) ; \lim_{x \to 0^+} g(x) = |0 ; +\infty[$
Donc pour tout $x \in [0 ; +\infty[$ : $g(x) > 0$

B) Montrons que $f$ est continue en $0$ à droite
$$
\lim_{x \to 0^+} f(x) = \lim_{x \to 0^+} x \ln \left(1 + \frac{1}{x}\right)
= \lim_{x \to 0^+} x \ln(x + 1) - x \ln(x) = 0
$$
Car $\lim_{x \to 0^+} \ln(x + 1) = 0 \cdot \ln(1) = 0$ et $\lim_{x \to 0^+} x \ln(x) = 0$
Donc $\lim_{x \to 0^+} f(x) = f(0)$
D'où $f$ est continue à droite de $0$

2)
$$
\lim_{x \to +\infty} f(x) = \lim_{x \to +\infty} x \ln \left(1 + \frac{1}{x}\right)
$$
On pose $x = \frac{1}{t}$ donc $x \to +\infty \Rightarrow t \to 0^+$
$$
\lim_{x \to +\infty} x \ln \left(1 + \frac{1}{x}\right) = 1
$$
Car $\lim_{x \to +\infty} \frac{1}{x} = 0$ et $\lim_{x \to 0} \ln(1+X) = 1$
Donc $\lim_{x \to +\infty} f(x) = 1$

Interprétation géométrique :
La droite (D) d'équation y=1 est asymptote horizontale à la courbe (Cf) au voisinage de $+\infty$

3)
$$
\lim_{x \to 0^+} \frac{f(x) - f(0)}{x - 0} = \lim_{x \to 0^+} \frac{f(x)}{x} = \lim_{x \to 0^+} \frac{x \ln \left(1 + \frac{1}{x}\right)}{x}
= \lim_{x \to 0^+} \ln \left(1 + \frac{1}{x}\right) = +\infty
$$
Donc $f$ n'est pas dérivable à droite de $0$

4)a) Montrons que $f$ est dérivable sur $]0 ; +\infty[$
La fonction $x \mapsto 1 + \frac{1}{x}$ est dérivable sur $]0 ; +\infty[$ car c'est une fonction rationnelle elle toujours dérivable sur tout intervalle inclus dans son domaine de définition qui est $]-\infty ; 0[ \cup ]0 ; +\infty[$

Donc la fonction $x \mapsto \ln(1 + \frac{1}{x})$ est dérivable sur $]0 ; +\infty[$
Donc la fonction $f$ est dérivable sur $]0 ; +\infty[$

Rappels :
$ (uv)' = u'v + uv' $ et $ [\ln(u)]' = \frac{u'}{u} $ et $ \left(\frac{1}{x}\right)' = -\frac{1}{x^2} $
Soit $ x \in [0 ; +\infty[$
$$
f'(x) = 1 \times \ln \left(1 + \frac{1}{x}\right) - x \times \frac{-\frac{1}{x^2}}{1 + \frac{1}{x}} 
= \ln \left(1 + \frac{1}{x}\right) - \frac{1}{1 + \frac{1}{x}}
= \ln \left(1 + \frac{1}{x}\right) - 1
$$
Ainsi $ \forall x \in [0 ; +\infty[$ : $ f'(x) = g(x) $
```

<!-- Page 138 -->

```markdown
### Prof : fayssal
**Site web** : www.elboutkhili.jimdo.free.com

### Série corrigée 6 : Fonction logarithme 2BAC-BIOF 
**Page 18**

c) On a : $\forall x \in ]0, +\infty[ : g(x) > 0$  
Donc $\forall x \in ]0, +\infty[ ; f'(x) > 0$  
Donc la fonction $f$ est strictement croissante sur $]0, +\infty[$  

$$
\begin{array}{c|c}
0 & +\infty \\
\hline
x & + \\
 & f'(x) \\
0 & 1 \\
 & f(x) \\
\end{array}
$$

5) On a $\forall x \in ]0, +\infty[ : f'(x) = g(x)$  
Donc $\forall x \in ]0, +\infty[ ; f''(x) = g'(x)$  
Donc $\forall x \in ]0, +\infty[ : f''(x) = -\frac{1}{x(x+1)^2} < 0$  
Donc la courbe $(Cf)$ est concave sur $]0, +\infty[$  

6) Tracer $(Cf)$ dans $(0; i;j)$  

**C) 1)** Démontre par récurrence que $\forall n \in \mathbb{N} \ 0 \leq U_n \leq \frac{1}{e-1}$  
Pour $n=0$ on a $1 \leq u_0 = \frac{1}{e - 1} \leq \frac{1}{e-1}$  
Donc la proposition est vraie pour $n = 0$  

Soit $n \in \mathbb{N}$  
$$
\text{Supposons que } 0 \leq U_n \leq \frac{1}{e-1} \text{ et montrons que } 0 \leq U_{n+1} \leq \frac{1}{e-1}
$$  

$$
0 \leq u_n \leq \frac{1}{e-1} \Rightarrow f(0) \leq f(u_n) \leq 0 \Rightarrow U_{n+1} \leq \frac{1}{e-1}
$$  

Car : $f\left( \frac{1}{e-1} \right) = \frac{1}{e-1} \ln \left( 1 + \frac{1}{e-1} \right) = \frac{1}{e-1}$  

D'après le principe de récurrence, on a : $(\forall n \in \mathbb{N}) \ 0 \leq U_n \leq \frac{1}{e-1}$  

2) $U_{n+1} - U_n = u_n \ln\left(1 + \frac{1}{u_n}\right) - u_n\left(\ln\left(1 + \frac{1}{n}\right) - 1\right)$  
$$
0 \leq U_n \leq \frac{1}{e - 1} \Rightarrow 2e - 1 \Rightarrow 1 + 1 \geq \ln\left(1 + U_n\right) = \ln\left(1 + U_n\right)
$$  

Donc  

$$
\ln\left( \frac{1}{u_n + 1} \right) - 1 \geq 0 \Rightarrow u_{n+1} + U_n \Rightarrow \text{ à la suite } (U_n) \text{est croissante}
$$  

3) Déduire que $(U_n)$ est convergente et calculer la limite de $(U_n)$  
$(U_n)$ est croissante et majorée par $\frac{1}{e-1}$ donc convergente.  

$f$ est continue sur l’intervalle $[0; \frac{1}{e-1}]$ et elle est dérivable sur I  

$$
f\left( \left[ 0; \frac{1}{e-1} \right] \right) = [f(0); f\left( \frac{1}{e-1} \right)] = [0; \frac{1}{e-1}]
$$  

Alors la limite de $(U_n)$ est $L$ la solution de l’équation $f(x) = x$  

$$
f(x) = x \ln\left(1 + \frac{1}{x}\right) - x = 0 \Leftrightarrow \ln\left(1 + \frac{1}{x}\right) - 1 = 0 
$$  

$$
\Leftrightarrow x = 0 \land 1 + \frac{1}{x} = 0 \Leftrightarrow x = 0 
$$  

Et on a la suite $(U_n)$ est croissante donc la limite est $\frac{1}{e - 1}$
```

<!-- Page 139 -->

```markdown
# Deuxième bac sciences PC /SVT /ST

## Résumé : Nombres complexe (I)
### Deuxième bac sciences PC /SVT /ST

### Plan de chapitre : Nombres complexes (II)
- Cours détaillé
- Résumé de cours
- Série d'exercices
- Correction détaillée des exercices

admin  
Prof fayssal  
06813999067  
www.elboutkhili.jimdo.com
```

<!-- Page 140 -->

```markdown
# Résumé : NOMBRES COMPLEXES (Partie I)

## A) Ensemble des nombres complexe $z$
$$ C = \{z = a + ib \;|\; a \in \mathbb{R} \; et \; i^2 = -1\} $$
- L'écriture $a + ib$ s'appelle la forme algébrique du nombre $z = a + ib$

## 1) Conjugué d'un nombre complexe $z : \bar{z}$
$$ z = a + ib \iff \bar{z} = a - ib ; \; z \text{ le conjugué de } z $$
- Propriété du conjugué d'un complexe :
$$ z + z' = z + z' ; \; z xz' = z x z' ; \; \bar{z} = \frac{z}{z'} $$
$$ \bar{z'} = \frac{z^2}{z} ; \; zz = a^2 + b^2 ; \; z^n = (z^2)^n $$
$$ z \in \mathbb{R} \iff z = z ; \; z \in \mathbb{I} \iff z = -z $$

## 2) Représentation géométrique d’un complexe
Soit $A(Z_A)$, $B(Z_B)$ et $C(Z_C)$ des points dans le plan :
- L’affixe du vecteur $\overline{AB}$ est : $Z_{AB} = Z_B - Z_A$
- L’affixe de le milieu du segment $[AB]$ est, en note : $Z_I = \frac{Z_B + Z_A}{2}$
- Points $A$, $B$ et $C$ sont alignés $\iff \frac{Z_B - Z_A}{Z_C - Z_A} \in \mathbb{R}$

## 3) Module d’un nombre complexe $z : |z|$
Le module de $z = a + ib$ d’image $M$ est le nombre réel positif noté $|z|$ défini par
$$ |z| = OM = \sqrt{a^2 + b^2} $$
Propriété de module et Distance :
$$ |z| = |z| = |z| - \bar{z} = \sqrt{a^2 + b^2} $$
- $ |z'| = |z| |z'| ;$ \; $ |z^n| = |z|^n ;$ \; $ |z + z'| \leq |z| + |z'| $
- Soient $A(Z_A)$ et $B(Z_B)$ deux points alors la distance $AB$ définit par : $ AB = Z_B - Z_A $

## B) Argument d’un complexe $z : \arg(z)$
On appelle argument de $z$ une mesure $\theta$, en radian de l’angle orienté $(e_1, OM)$ 
$$ \arg(z) = \left(\frac{e_1}{OM}\right)[2\pi] $$

## 1) Opérations sur l'argument
$$ 
\begin{align*}
\arg(z'z) & = \arg(z) + \arg(z')[2\pi] \\
\arg\left(\frac{z}{z'}\right) & = \arg(z) - \arg(z')[2\pi] \\
\arg(z) & = -\arg(z)[2\pi] \\
\arg(z^n) & = n \arg(z)[2\pi] \\
\arg(z^2) & = \arg(z)[2\pi] \\
\arg(-z) & = \pi + \arg(z)[2\pi]
\end{align*}
$$

## 2) Forme trigonométrique d’un complexe
$$ z = a + ib = |z| \left( \cos(\theta) + i \sin(\theta) \right) $$
avec $ \cos(\theta) = \frac{a}{|z|}, \; \sin(\theta) = \frac{b}{|z|} $
L’écriture : $ z = |z| \left( \cos(\theta) + i \sin(\theta) \right) $ est appelé forme trigonométrique du complexe $z$ avec $ \theta $ un argument de $z$

### Détermination du forme trigonométrique
#### Cas particulier $a; b \in \mathbb{R}^*$
- $a \in \mathbb{R}^* \Rightarrow \arg(z) = 0 [2\pi]; \; |z| = a$
- $b \in \mathbb{R}^* \Rightarrow \arg(z) = \pi [2\pi]; \; |z| = b$
### Cas général : $z = a + ib ; a; b \in \mathbb{R}^*$
1. On calcule $|z|$ le module de $z$
2. Factorisation : $z' = a + ib = |z| \left( \frac{a}{|z|} - \frac{b}{|z|} i \right)$
3. On cherche $\theta$ un argument $z$ tel que $\cos(\theta) = \frac{a}{|z|}$ et $\sin(\theta) = \frac{b}{|z|}$ en utilisant tableau et le cercle suivant :

## 3) Opérations sur la forme trigonométrique
On pose $ z = |z| \left( \cos(\theta) + i \sin(\theta) \right) = [r, \theta] $
Et : $ z' = z' \left( \cos(\theta') + i \sin(\theta') \right) = [r', \theta'] $
$$ 
\begin{align*}
zz' & = [r, \theta][r', \theta'] = [rr', \theta + \theta'] \\
z' & = \left[\frac{r}{r'}, [r', \theta' - \theta] \right] \\
z^{-1} & = [\frac{1}{r}, -\theta] \\
z^n & = [r^n, n\theta]
\end{align*}
$$

## 4) Interprétation géométrique d’argument
$$ (AB, AC) \iff \arg\left(\frac{Z_C - Z_A}{Z_B - Z_A}\right) = 2\pi $$
$$ (AB, DC) \iff \arg\left(\frac{Z_C - Z_D}{Z_B - Z_A}\right) = 2\pi $$

* $A, B, C$ et $D$ sont cocycliques (appartenant au même cercle) $\iff (Z_C - Z_A)(Z_B - Z_D) \in \mathbb{R}$
```

<!-- Page 141 -->

```markdown
# Deuxième bac sciences PC /SVT /ST

## Série corrigée : Nombres complexes (I)
### Deuxième bac sciences PC /SVT /ST

### Plan de chapitre 7 : Nombres complexes (I)

- Cours détaillé
- Résumé de cours
- Série d’exercices
- Correction détaillée des exercices
```

<!-- Page 142 -->

```markdown
# Prof : fayssal
Site web : www.elboutkhili.jimdofree.com

## Exercice 01
Ecrire les nombres complexes suivants sous forme algébrique :  
$$
z_1 = (2 - 3i)^2 ; \quad z_2 = (3 - i)(1 + i) ; \quad z_3 = \frac{1}{4 - 2i} ; \quad z_4 = \frac{1 + i}{2 - i}
$$

## Exercice 02
1) On pose $ j = -\frac{1}{2} + \frac{\sqrt{3}}{2} i $. Calculer $ j^2 $  
2) Montrer que : $ j^2 + 1 = 0 $ puis en déduire que $ j^3 = 1 $  
3) Mettre le nombre $ j^{2023} $ sous forme algébrique

## Exercice 03
Soient les points $ A(-2 + 3i), B(2 + 4i), C(5 + 3i), D(1 + 2i); E(-7) $  
1) Démontrer que le quadrilatère $ ABCD $ est un parallélogramme.  
2) Calculer l’affixe de son centre $ O $.  
3) Montrer que les points $ D, C $ et $ E $ sont alignés

## Exercice 04
Soient $ A(a) ; B(b) et C(c) $ des points d’affixes :  
$$
a = 2 - i ; \quad b = 1 - 2i ; \quad c = -3i et \quad d = \sqrt{2 - \sqrt{2} + i\sqrt{2} + \sqrt{2}}
$$
1) Calculer les distances $ AB ; OA ; OB $ et $ OD $  
2) En déduire la nature de triangle $ OAB $  
3) Montrer que $ A, B $ et $ C $ sont alignés puis en déduire que $ AC = 2AB $  
4) Montrer que $ O ; E(1+i) ; F(1 - i) $ et $ H(2) $ sont cocycliques

## Exercice 05
1) Résoudre dans $ \mathbb{C} $ l’équation suivante : $(E_1): z = 2z + 4i - 1$  
2) Résoudre dans $ \mathbb{C} $ l’équation : $(E_2): 3iz - z = 8i$

## Exercice 06
M un point d’affixe z. Dans chaque cas, déterminer et représenter  
1) L’ensemble des points $ M $ tels que $ |z - 2i| = 3 $  
2) L’ensemble des points $ M $ tels que $ |z - 1| = 5 $  
3) L’ensemble des points $ M $ tels que $ |z - 3 + i| = |z| $ 

## Exercice 07
1) Déterminer l’ensemble des points $ M(z) $ pour lesquels $ \frac{z - i}{z + 1} \in \mathbb{R} $  
2) Déterminer l’ensemble des points $ M(z) $ pour lesquels 

## Exercice 08
1) Déterminer un argument de chaque affixe des points $ A, B $ et $ C $.  
2) Placer les points $ D $ et $ E $ d’affixes respectives $ z_D $ et $ z_E $ telles que : 
$$
|z_D| = 2 et \arg(z_D) = -\frac{2\pi}{3} \quad [2\pi]
$$
$$
|z_E| = 3 et \arg(z_E) = \frac{3\pi}{4} \quad [2\pi]
$$

## Exercice 09
$$
z_1, z_2 \text{ des complexes tels que } \arg(z_1) = \frac{\pi}{2} [2\pi] \text{ et } \arg(z_2) = \frac{\pi}{4} [2\pi]
$$
1) Déterminer un argument de $ z = z_1z_2 ; z' = \overline{z_1z_2} ; z'' = (z_2)^4 $  
2) Déterminer un argument de $ z_3 $ dans les deux cas suivants :  
a) $ \frac{z_3}{z_2} = \frac{z_1}{z_1} $ et b) $ z_3 \times z_2 = 4z_1$

## Exercice 10
Écrire les complexes suivants sous forme trigonométrique :  
$$
z_1 = \sqrt{3} + i ; \quad z_2 = -4i ; \quad z_3 = 2 - 2i ; \quad z_4 = i  
$$
$$
z_5 = -2 ; \quad z_6 = -3 - 3i ; \quad z_7 = -1 + \frac{\sqrt{3}}{2}i  
$$

## Exercice 11
Soient $ z_1 $ et $ z_2 $ deux nombres complexes non nuls tels que :  
$$
z_1 = 3\left( \cos\frac{\pi}{4} + i\sin\frac{\pi}{4} \right) = [3; \frac{\pi}{4}]
$$
$$
z_2 = 1 - \sqrt{3}  
$$
Déterminer la forme trigonométrique de $ z_2 ; z_1z_2 $ et $ z_1^{(z_2)^3} $

## Exercice 12
On pose : $ a = 1 + i\sqrt{3} $ et $ b = 1 + i $  
1) Écrire $ a^{\frac{5}{3}} $ sous forme trigonométrique  
2) Écrire $ \frac{a}{b} $ sous forme algébrique puis déduire $ \sin \frac{\pi}{12} $ et $ \cos \frac{\pi}{12} $  
3) Montrer que $ a^{2022} \in \mathbb{R} $ et $ \left( \frac{5}{48} + \left( \frac{b}{\sqrt{2}} \right)^2 = 2 \right)
```

<!-- Page 143 -->

```markdown
# Prof: Fayçal
Site web : www.elboutkhili.jimdofree.com
Série d’exercices 1 : Nombres complexes-partie 2 BAC Sc

## Exercice 13
On pose $ b = (1 - \sqrt{3}) + i(1 + \sqrt{3}) $ et $ a = (1 + i)b $
1) Montrer que $ a = -2\sqrt{3} + 2i $ puis calculer $ |a| $
2) Ecrire $ a $ puis sous la forme trigonométrique
3) En déduire les valeurs exactes de $ \sin \frac{7\pi}{12} $ et $ \cos \frac{7\pi}{12} $

## Exercice 14
On pose $ a = \sqrt{2} + \sqrt{2}i - \sqrt{2} $
1) Ecrire $ a^2 $ sous la forme algébrique
2) Ecrire $ a^2 $ sous forme trigonométrique
3) Déduire $ a $ sous forme trigonométrique
4) Calculer $ \sin \frac{7\pi}{8} $ ; $ \cos \frac{7\pi}{8} $

## Exercice 15
On pose $ a = 2 + \sqrt{3} + i $
1) Montrer que $ a = \left( \frac{-\sqrt{3}}{2} + \frac{1}{2}i \right) \bar{a} $ puis calculer $ |a| $
2) Ecrire $ a $ sous la forme trigonométrique
3) En déduire les valeurs exactes de $ \sin \frac{\pi}{12} $ et $ \cos \frac{\pi}{12} $
4) Montrer que $ a^6 = i \left( 2\sqrt{2} + \sqrt{3} \right)^6 $

## Exercice 16
Soient les points $ A(a) ; B(b) et C(c) $ tel que
$ a = 2 ; b = -1 + i $ et $ c = 3 + 3i $
Vérifier que $ c - a = -1 $ puis en déduire la nature du triangle ABC

## Exercice 17
Soient les points $ A(a) ; B(b) et C(c) tel que
$ a = \sqrt{3} - i ; b = -\sqrt{3} + 2i $ et $ c = -a $
1) Vérifier que $ \frac{c - a}{b - a} = -\frac{\sqrt{3}}{2} $
2) Ecrire le nombre $ \frac{1}{2} - \frac{\sqrt{3}}{2}i $ sous forme trigonométrique
3) En déduire la nature du triangle ABC

## Exercice 18
On considère dans le plan complexe les points $ A(a) ; B(b) ; C(c) $ tel que $ a = \sqrt{3} + i ; b = \sqrt{3} - 1 - (\sqrt{3} + 1)i $ et $ c = -1 + i\sqrt{3} $
1) Déterminer la forme trigonométrique de $ 1 + i $ et de $ a $
2) Montrer que $ b = (1 + i)\bar{a} $ puis déterminer la forme trigonométrique de $ b $
3) Calculer $ \cos \frac{5\pi}{12} $
4) Vérifier que $ c = ia $ puis en déduire la nature du triangle OAC
5) Montrer que le quadrilatère OABC est carré

## Exercice 19
On considère dans le plan complexe les points $ A(a) ; B(b) ; C(c) $ tel que $ a = 1 + 2i ; b = 3 + 3i $ et $ c = 4 + 5i $
1) Déterminer l’affixe de $ D $ tel que $ ABCD $ un parallélogramme
2) Vérifier que $ c - a = 3i(b - d) $ puis en déduire que les droites $(AC)$ et $(BD)$ sont perpendiculaires
3) Montrer que le quadrilatère $ ABCD $ est losange
4) Déterminer l’affixe de $ E $ le symétrique de $ B $ par rapport à $ A $
5) En déduire le centre et le rayon de $(C)$ le cercle circonscrit au triangle $ EBD $

## Exercice 20
On considère le point $ M $ d’affixe $ z $ et $ M' $ le point d’affixe $ z' = \frac{1}{2}(z + 1) $
1) Déterminer le nombre complexe $ z $ pour que les points $ M $ et $ M' $ soient confondus
2) On suppose que $ M $ diffèrent des points $ A $ et $ B $ d’affixes respectifs $ 1 $ et $ -1 $ ; Montrer que $ \frac{z' + 1}{z' - 1} = \frac{(z + 1)^2}{z - 1} $
3) Soit la droite $(\Delta)$ le médiatrice du segment $ [AB] $ Montrtrer que si $ M $ appartient à $(\Delta)$ alors $ M' $ appartient à $(\Delta)$
4) Soit $(C)$ le cercle de diamètre $ [AB] $ ; Montrer que si $ M $ appartient à $(C)$ alors les points $ A ; B $ et $ M' $ sont alignés
```

<!-- Page 144 -->

```markdown
# Exercice 01
Ecrire les nombres complexes suivants sous forme algébrique :
$$
z_1 = (2 - 3i)^2 ; \quad z_2 = (3 - i)(-1 + i) ; \quad z_3 = \frac{1}{4 - 2i} ; \quad z_4 = \frac{1 + i}{2 - i}
$$

## Solution
$$
z_1 = (2 - 3i)^2 = 4 - 12i + 9 = 4 - 12i - 9 
$$
$$
z_2 = (3 - 2i)(-1 + 5i) = -3 + 15i + 2i - 10i^2 
$$
$$
= -3 + 15i + 2 + 10 = 7 + 17i 
$$
$$
z_3 = \frac{1}{4 - 2i} = \frac{4 + 2i}{(4 - 2i)(4 + 2i)} = \frac{4 + 2i}{16 + 4} = \frac{4 + 2i}{20} 
$$
$$
= \frac{1}{5} + \frac{1}{10}i
$$
$$
z_4 = \frac{1 + i}{2 - i} = \frac{(1 + i)(2 + i)}{(2 - i)(2 + i)} = \frac{2 + i + 2i - 1}{4 + 1} = \frac{1 + 3i}{5} 
$$

# Exercice 02
1) On pose $ j = -\frac{1}{2} + \frac{\sqrt{3}}{2} i $ . Calculer $ j^2 $
2) Montrer que : $ j^2 + j + 1 = 0 $ puis en déduire que $ j^3 = 1 $
3) Mettre le nombre $ j^{2023} $ sous forme algébrique 

## Solution
1) 
$$
j^2 = \left(-\frac{1}{2} + \frac{\sqrt{3}}{2} i\right)^2 = -\frac{1}{4} - 2 \cdot \frac{1}{2} \cdot \frac{\sqrt{3}}{2} i + \left(\frac{\sqrt{3}}{2} i\right)^2 = -\frac{1}{4} - \frac{\sqrt{3}}{2} i - \frac{3}{4} 
$$
Donc $ j^2 = -1 - \frac{\sqrt{3}}{2} i $

# Exercice 03
Soient les points $ A (-2 + 3i), B (2 + 4i), C (5 + 3i), D (1 + 2i); E(-7) $
1) Démontrer que le quadrilatère $ ABCD $ est un parallélogramme.
2) Calculer l'affixe de son centre O.
3) Montrer que les points $ D, C $ et $ E $ sont alignées 

## Solution
1) - On va démontrer que les vecteurs $ \overrightarrow{AB} $ et $ \overrightarrow{DC} $ sont égaux.
Affixe de $ \overrightarrow{AB}: z_{AB} = z_B - z_A = 2 + 4i - (-2 + 3i) = 4 + i $
Affixe de $ \overrightarrow{DC}: z_{DC} = z_C - z_D = 5 + 3i - (1 + 2i) = 4 + i $
Donc $ \overrightarrow{AB} = \overrightarrow{DC} $ et donc $ ABCD $ est un parallélogramme.
Le centre du parallélogramme est le milieu de $ [AC]. $
Son affixe est :
$$
z_1 = \frac{z_A + z_C}{2} = \frac{-2 + 3i + 5 + 3i}{2} = \frac{3 + 6i}{2} = \frac{3}{2} + 3i 
$$

2) L'affixe de $ D $ est $ z_D = 4 + i $
L'affixe de $ \overrightarrow{E} $ est $ z_E = z_E - z_D = -7 - (1 + 2i) = -8 - 2i $
Donc : $ z_{DE} = -2 \overrightarrow{DC} $ et donc $ \overrightarrow{DE} = -2 \overrightarrow{DC} $.
Les vecteurs $ \overrightarrow{DC} $ et $ \overrightarrow{DE} $ sont colinéaires et donc les points $ D, C $ et $ E $ sont alignés.

## Remarque : On peut montrer par exemple que $ \frac{z_D - z_C}{z_E - C} \in \mathbb{R} $
```

<!-- Page 145 -->

```markdown
# Exercices

## Exercice 04

Soient $A(a)$, $B(b)$ et $C(c)$ et $D(d)$ des points d’affixes :
$$ a = 2 - 1i ; \quad b = 1 - 2i ; \quad c = -3i et \quad d = \sqrt{2 - \sqrt{2}} + i\sqrt{2 + \sqrt{2}} $$

5) Calculer les distances $AB$, $OA$, $OB$ et $OD$  
6) En déduire la nature de triangle $OAB$  
7) Montrer $A$, $B$ et $C$ sont alignés puis en déduire que $AC = 2AB$  
8) Montrer que $O$, $E(1+i)$ ; $F(1-i)$ et $H(2)$ sont cocycliques  

### Solution 

1) 
$$ AB = |b - a| = |1 - 2i - (2 - 1i)| = |1 - 1i| = \sqrt{(-1)^2 + (-1)^2} = \sqrt{2} $$  
$$ OA = |a - o| = |2 - 1i| = \sqrt{(2)^2 + (-1)^2} = \sqrt{5} $$  
$$ OB = |b - o| = |1 - 2i - (1 - 1i)| = \sqrt{(1)^2 + (-2)^2} = \sqrt{5} $$  
$$ OD = |d - o| = | \sqrt{2 - \sqrt{2}} + i\sqrt{2 + \sqrt{2}} - o| = $$  
$$ = \sqrt{2 - \sqrt{2} + 2 + \sqrt{2}} = \sqrt{4} = 2 $$

2) En déduire la nature de triangle OAB  
On a $OA = OB = \sqrt{5}$ d’où le triangle $OAB$ est isocèle en $O$  

3) 
$$ \frac{c - a}{b - a} = \frac{-3i - 2 + i}{-1 - 2i} = \frac{-2 - 2i}{-1 - 2i} = 2 \in \mathbb{R} $$  
Donc les points $A$, $B$ et $C$ sont alignés  
$$ \frac{c - a}{b - a} = 2 \iff |c - a| = |2| \iff |b - a| = 2 $$  
$$ AC = 2AB $$  

---

## Corrigée de série : Nombres complexes-partie (I) 

### Page 02

4) Montrons que les points $O$, $E(1 + i)$ ; $F(1 - i)$ et $H(2)$ sont cocycliques
$$ e - o = f - h $$
$$ f - o = e - h $$

$$ 
1 + i - 0 = 1 + i - 2 
\quad 1 - 1 - 0 = 1 - i - 2 
$$
$$ 
1 + i - (-1 - i) = - (1 + i)^2 = (-1 - i)^2 = 1 + 2i - 1 = \frac{2i}{2} = -2i 
$$
$$ 
= -1 \in \mathbb{R} 
$$  
Donc les points $O$, $E(1 + i)$, $F(1 - i)$ et $H(2)$ sont cocycliques  

---

## Exercice 05

1) $ \bar{z} = 3z + 4i - 1 \iff \bar{z} = 2z + 4i - 1 \iff z = 2z - 4i - 1 $  
$$ \iff z = 1 + 4i $$  
Donc $S = \{1 + 4i\}$  

2) $z$ un élément de $\mathbb{C}$, on pose $z = x + iy$, $(x,y) \in \mathbb{R}^2$  
$$ 3iz - z = 8i \iff 3(x + iy) - (x + iy) = 8i $$  
$$ 3x - x - x - 8i = 0 $$  
$$ 3y - 8 = 0 $$  
$$ x = -3y \quad et \quad (8 - 8y) = 0 $$  

Donc $x = -3y$ et $y = -1$  
$$ z = 3 - i $$  
Donc $S = \{3 - i\}$
```

<!-- Page 146 -->

```markdown
# Prof : fayssal 
Site web : www.elboutkhili.jimdofree.com

## Exercice 06

Soit $M$ un point d'affixe $z$. Dans chaque cas, déterminer et représenter 
1) L'ensemble des points $M$ tels que $|z - 2i| = 3$.
2) L'ensemble des points $M$ tels que $|z - 3| = 1$.
3) L'ensemble des points $M$ tels que $|z - 3 + i| = |z - 5|$.

### Solution

1) Soit $A$ le point d'affixe $2i$ alors $|z - 2i| = 3$ s'écrit $AM = 3$.
En effet : $|z - 2i| = AM$.
L'ensemble des points $M$ est le cercle de centre $A(2i)$ et de rayon 3.

2ème méthode : (méthode algébrique)

Soit encore : $|z - 2i|^2 = 9$ 
On pose $z = x + iy$, alors l’équation s’écrit :
$$
|x + iy - 2i|^2 = 9 
$$
$$
|x + i(y - 2)|^2 = 9 
$$
$$
x^2 + (y - 2)^2 = 9 
$$
L'ensemble des points $M$ est le cercle de centre $A(2i)$ et de rayon 3.

2) $|z - 3| = |(z + 3i)| = |i| \times |z + 3i| = |z - (-3i)|$
Donc $|z - 3| = 1 \Leftrightarrow |z - (-3i)| = 1$.
Soit $A$ le point d'affixe $-3i$ alors $|z - 3| = |z - (-3i)|$ s'écrit $AM = 1$.
L'ensemble des points $M$ est le cercle de centre $A(-3i)$ et de rayon 1.

3) $|z - 3 + i| = |z - 5| \Leftrightarrow |z - 3 + i| = |z - 3 - i| = |z - (3 + i)|$.
Donc $|z - 3 + i| = |z - 5|$.
Équivaut à $|z - (3 + i)| = |z - 5|$.
Soit $A$ le point d'affixe $3 + i$ et $B$ le point d'affixe 5 alors $|z - 3 + i| = |z - 5|$ s'écrit $AM = BM$.

Donc l'ensemble des points $M$ est la droite $(D)$ le médiatrice du segment $[AB]$.

2ème méthode : (méthode algébrique)

$|z - 3 + i| = |z - 5| \Leftrightarrow |z - (3 + i)| = |z - 5|$.
Soit encore $|z - (3 + i)|^2 = |z - 5|^2$.
On pose $z = x + iy$, alors l’équation s’écrit :
$$
|x + iy - (3 + i)|^2 = |x + iy - 5|^2 
$$
$$
|x - 3 + i(y - 1)|^2 = |x - 5 + iy|^2 
$$
$$
|z - 3|^2 = (x - 3)^2 + (y - 1)^2 = |z - 5|^2 = (x - 5)^2 + y^2
$$
$$
x^2 - 6x + 9 + y^2 - 2y + 1 = x^2 - 10x + 25 + y^2
$$
$$
6x - 8y + 15 = 0 
$$
```

<!-- Page 147 -->

```markdown
# Prof : fayssal
## Site web : www.elboutkhili.jimdofree.com

### Exercice 07
3) Déterminer l’ensemble des points $M(z)$ pour lesquels
$$ z - i \in \mathbb{R} $$
4) Déterminer l’ensemble des points $M(z)$ pour lesquels
$$ z + 1 $$
$$ z - i $$
$$ z + 1 \in \mathbb{R} $$

**Solution**
On pose $ z = x + iy$, $(x,y) \in \mathbb{IR}^2$ tel que $ z \neq -1$  
$$ z - i = x + iy - i = x + i(y - 1) $$
$$ z + 1 = x + iy + 1 = (x + 1) + iy $$
$$ \Rightarrow [x + i(y - 1)][x - i(y + 1)] $$
$$ = x^2 + (y + 1)^2 $$
$$ = x^2 - iy(y + 1) + ix(y + 1) $$

1) Donc :
$$ \frac{z - i}{z + 1} \in \mathbb{R} \iff x^2 + y^2 - 1 = 0 \text{ et } z \neq -1 $$
Donc l’ensemble des points $M(z)$ est le cercle $(C)$ de centre $O$ et de rayon 1 privé du point A d’affixe -1.

2)
$$ \frac{z - i}{z + 1} \in \mathbb{R} \iff x(y^2 - 1) = 0 \text{ et } z \neq -1 $$
$$ \Rightarrow (x - 1)(y + 1) = 0 \text{ et } z \neq -1 $$
$$ \iff x = 0 \text{ ou } 1 \text{ ou } y = -1 \text{ et } z \neq 1 $$

Donc l’ensemble des points $M(z)$ est la réunion des droites $(D_1)$, $(D_2)$ et $(D_3)$ d’équations $(D_1): x = 0$ ; $(D_3): y = 1$ ; $(D_2): y = -1$ privé du point A d’affixe -1.

---

### Exercice 08

1) Déterminer un argument de chaque affixe des points A, B et C.  
Définit sur le cercle ci-contre.

2) Placer les points D et E d’affixes respectives $z_D$ et $z_E$ telles que :
$$ |z_D| = 2 \text{ et } \arg(z_D) = -\frac{2\pi}{3} [2\pi]. $$
$$ |z_E| = 3 \text{ et } \arg(z_E) = \frac{3\pi}{4} [2\pi]. $$

**Solution**
1) 
$$ \arg(z_A) = \frac{\pi}{4} [2\pi] $$
$$ \arg(z_B) = -\frac{\pi}{3} [2\pi] $$
$$ \arg(z_C) = \pi [2\pi] $$

2) Le point D appartient au cercle de rayon 2 car $|z_D| = 2$.

Le point E appartient au cercle de rayon 3 car $|z_E| = 3$.
```

<!-- Page 148 -->

```markdown
# Prof : fayssal
Site web : www.elboutkhili.jimdofree.com

## Exercice 09

$z_1, z_2$ des complexes tels que $\arg(z_1) = \frac{\pi}{2} [2\pi]$ et $\arg(z_2) \equiv \frac{\pi}{4} [2\pi]$

3) Déterminer un argument de $z = z_1 z_2$ ; $z' = \frac{z_1}{z_2}$ ; $z'' = (z_2)^4$

4) Déterminer un argument de $z_3$ dans les deux cas suivants :
- a) $\frac{z_3}{z_2} = z_1^2$ et b) $z_3 \times z_2 = 4 z_1$

### Solution

1) $\arg(z_1 z_2) \equiv \arg(z_1) + \arg(z_2) [2\pi]$
$$
\equiv \frac{\pi}{2} + \frac{\pi}{4} [2\pi]
$$
$$
\equiv \frac{3\pi}{4} [2\pi]
$$

$\arg\left(\frac{z_1}{z_2}\right) = \arg(z_1) - \arg(z_2) [2\pi]$
$$
\equiv \frac{\pi}{2} - \frac{\pi}{4} [2\pi]
$$
$$
\equiv \frac{\pi}{4} [2\pi]
$$

$\arg((z_2)^4) = 4 \arg(z_2) [2\pi]$
$$
\equiv 4 \times \frac{\pi}{4} [2\pi]
$$
$$
\equiv \pi [2\pi]
$$

2)a) $\frac{z_3}{z_2} = z_1^2 \Rightarrow \arg\left(\frac{z_3}{z_2}\right) \equiv \arg(z_1^2) [2\pi]$
$$
\Rightarrow \arg(z_3) - \arg(z_2) \equiv 2 \arg(z_1^1) [2\pi]
$$
$$
\Rightarrow \arg(z_3) \equiv 2 \arg(z_1) - \arg(z_2) [2\pi]
$$
$$
\Rightarrow \arg(z_3) \equiv 2 \times \frac{\pi}{2} - \frac{\pi}{4} [2\pi] \Rightarrow \arg(g(z_3)) \equiv \frac{3\pi}{4} [2\pi]
$$

b) $z_3 \times z_2 = 4 z_1 \Rightarrow \arg(z_3 \times z_2) = \arg(4 z_1) \Rightarrow \arg(z_3) + \arg(z_2) = \arg(4) + \arg(z_1^1) [2\pi]$
$$
\Rightarrow \arg(z_3) - \arg(z_2) = \arg(4) + \arg(z_1^1) [2\pi]
$$
$$
\Rightarrow \arg(z_3) \equiv -\arg(z_2) + \arg(4) + \arg(z_1^1) [2\pi]
$$
$$
\Rightarrow \arg(z_3) = -\frac{\pi}{4} + 0 + \frac{\pi}{2} [2\pi]
$$
$$
\Rightarrow \arg(z_3) \equiv \frac{\pi}{4} [2\pi]
$$

## Exercice 10

Écrire les complexes suivants sous forme trigonométrique :
$z_1 = \sqrt{3} + i$ ; $z_2 = -4i$ ; $z_3 = 2 - 2i$ ; $z_4 = i$

$z_5 = -2$ ; $z_6 = -3 - 3i$ ; $z_7 = -1 + \frac{\sqrt{3}}{2} i$

### Solution

$z_1 = 2\sqrt{3} + 2 i$
- On commence par calculer le module de $z_1 = \sqrt{3} + i$
$$
|z_1| = \sqrt{3^2 + 1^2} = \sqrt{3 + 1} = 2
$$

- En factorisant $z_1$ par $|z_1|$, on trouve $z_1 = \sqrt{3} + i = 2(\frac{\sqrt{3}}{2} + \frac{1}{2} i)$
- On cherche un argument $\theta$ de $z_1$ tel que $cos(\theta) = \frac{\sqrt{3}}{2}$ et $sin(\theta) = \frac{1}{2}$
$$
\theta = \frac{\pi}{6}, \text{ convient, en effet : } cos(\frac{\pi}{6}) = \frac{\sqrt{3}}{2} \text{ et } sin(\frac{\pi}{6}) = \frac{1}{2}
$$
$$
\Rightarrow z_1 = 2(\frac{\sqrt{3}}{2} + \frac{1}{2} i) = 2(cos(\frac{\pi}{6}) + i sin(\frac{\pi}{6})) = [2, \frac{\pi}{6}]
$$

$z_2 = -4i \quad |z_2| = |-4i| = 4$

Géométriquement on peut affirmer que : $\arg(z_2) = -\frac{\pi}{2} [2\pi] = [4, -\frac{\pi}{2}]$
```

<!-- Page 149 -->

```markdown
# Prof : fayssal
Site web : www.elboutkhili.jimdo.com

## Corrigée de série : Nombres complexes-partie (I)  Page 06

- $z_3 = 2 - 2i$

- On commence par calculer le module de $z_3 = 2 - 2i$ :
$$ |z_3| = \sqrt{2^2 + (-2)^2} = \sqrt{8} = 2\sqrt{2} $$

- En factorisant $z_3$ par $|z_3|$, on trouve
$$ z_3 = 2 - 2i = 2\sqrt{2}\left( \frac{1}{\sqrt{2}} - \frac{1}{\sqrt{2}} i \right) $$

- On cherche un argument $\theta$ de $z_3$ tel que
$$ \cos \theta = \frac{1}{\sqrt{2}} \quad \text{et} \quad \sin \theta = -\frac{1}{\sqrt{2}} $$

Donc $\theta = -\frac{\pi}{4}$, convient,

en effet : 
$$ \cos\left(-\frac{\pi}{4}\right) = \frac{1}{\sqrt{2}} \quad \text{et} \quad \sin\left(-\frac{\pi}{4}\right) = -\frac{1}{\sqrt{2}} $$

- Donc
$$ z_3 = 2 - 2i = 2\sqrt{2} \left( \frac{1}{\sqrt{2}} - i\frac{1}{\sqrt{2}} \right) = 2\sqrt{2}\left( \cos\left(-\frac{\pi}{4}\right) + i \sin\left(-\frac{\pi}{4}\right) \right) = [2\sqrt{2}, -\frac{\pi}{4}]. $$

- $z_4 = i$ 
  - on a ; $|z_4| = |i| = 1$
  
Géométriquement on peut affirmer que : $\arg(z_4) = \frac{\pi}{2} [2\pi].$

Donc : $z_4 = \cos\left(\frac{\pi}{2}\right) + i\sin\left(\frac{\pi}{2}\right) = [1, \frac{\pi}{2}].$

- $z_5 = -2 \quad \text{on a} \quad |z_5| = |-2| = 2$

Géométriquement on peut affirmer que : $\arg(z_5) = \pi[2\pi].$

Donc : $z_5 = 2\left(\cos(\pi) + i\sin(\pi)\right) = [2, \pi].$

- $z_6 = -3 - 3i$
  
On a ; $$ |z_6| = \sqrt{(-3)^2 + (-3)^2} = \sqrt{18} = 3\sqrt{2} $$

$$ z_6 = -3 - 3i = 3\sqrt{2}\left( -\frac{1}{\sqrt{2}} - \frac{1}{\sqrt{2}} i \right) $$

On cherche un argument $\theta$ de $z_6$ tel que
$$ \cos \theta = -\frac{1}{\sqrt{2}} \quad \text{et} \quad \sin \theta = -\frac{1}{\sqrt{2}} $$

Donc : $\theta = \pi + \frac{\pi}{4} = \frac{5\pi}{4}$ convient

Et donc :
$$ z_6 = 3\sqrt{2}\left( \cos\left(\frac{5\pi}{4}\right) + i\sin\left(\frac{5\pi}{4}\right) \right) = \left[ 3\sqrt{2}, \frac{5\pi}{4} \right]. $$

- $z_7 = -\frac{1}{2} + i\frac{\sqrt{3}}{2}$
  
On a ; $$ |z_7| = \sqrt{\left(-\frac{1}{2}\right)^2 + \left(\frac{\sqrt{3}}{2}\right)^2} = \sqrt{\frac{1}{4} + \frac{3}{4}} = \sqrt{1} = 1 $$

On cherche un argument $\theta$ de $z_7$ tel que
$$ \cos \theta = -\frac{1}{2} \quad \text{et} \quad \sin \theta = \frac{\sqrt{3}}{2} $$

Donc : $\theta = \pi - \frac{\pi}{3} = \frac{2\pi}{3}$ convien

Et donc :
$$ z_7 = \cos\left(\frac{2\pi}{3}\right) + i\sin\left(\frac{2\pi}{3}\right) = [1, \frac{2\pi}{3}]. $$
```

<!-- Page 150 -->

```markdown
# Prof : fayssal
# Site web : www.elboutkhiil.jimdofree.com

## Exercice 11
Soient $z_1$ et $z_2$ deux nombres complexes non nuls tels que :
$$
z_1 = 3 \left( \cos \frac{\pi}{4} + i \sin \frac{\pi}{4} \right) = \left[ 3; \frac{\pi}{4} \right] \quad et \quad z_2 = 1 - i\sqrt{3}
$$
Déterminer la forme trigonométrique de $z_2$, $z_1z_2$ et $z_1 \left( \frac{z_2}{z_1} \right)^3$

### Solution
Commençons par déterminer la forme trigonométrique de 
$$
z_2 = 1 - i\sqrt{3} ; \quad \text{on a} \quad |z| = \sqrt{(1)^2 + (-\sqrt{3})^2} = 2
$$
$$
z_2 = 1 - i\sqrt{3} = 2 \left( \frac{1}{2} - i \frac{\sqrt{3}}{2} \right)
$$
On cherche un argument de $z_2$ tel que $\cos \theta = -\frac{1}{2}$ et $\sin \theta = -\frac{\sqrt{3}}{2}$

Donc $\theta = -\frac{\pi}{3}$ convient

Et donc 
$$
z_2 = \sqrt{2} \left( \cos \left( -\frac{\pi}{3} \right) + i \sin \left( -\frac{\pi}{3} \right) \right) = \left[ 2; -\frac{\pi}{3} \right]
$$
$$
z = z_1z_2 = |z_1||z_2| \left( \cos \left( \frac{\pi}{4} + \left(-\frac{\pi}{3}\right) \right) + i \sin \left( \frac{\pi}{4} + \left(-\frac{\pi}{3}\right) \right) \right) = \left[ 6; -\frac{\pi}{12} \right]
$$
$$
z' = \frac{z_1}{\left( \frac{z_2}{z_1} \right)^3}
$$
$$
= \left[ \frac{3}{8}; -\frac{\pi}{4} \right]
$$
$$
= \left[ 3; -\frac{\pi}{4} \right]
$$

## Exercice 12
On pose : $a = 1 + i\sqrt{3}$ et $b = 1 + i$

1) Écrire sous forme trigonométrique $a$ et $b$ et en déduire la forme trigonométrique de $\frac{a}{b}$

2) Écrire $\frac{a}{b}$ sous la forme algébrique puis en déduire les valeurs exactes de $\sin \frac{\pi}{12}$ et $\cos \frac{\pi}{12}$

3) Montrer que $a^{2022} \in \mathbb{R}$ et $\left( \frac{a}{2} \right)^{48} + \left( \frac{b}{\sqrt{2}} \right)^{48} = 2$
```

<!-- Page 151 -->

```markdown
# Prof: fayssal
Site web : www.elboutkhili.jimdofree.com

## Exercice 13
On pose $ b = (1 - \sqrt{3}) + i(1 + \sqrt{3}) $ et $ a = (1 + i)b $

1) Montrer que $ a = -2\sqrt{3} + 2i $ puis calculer $ |a| $
2) Ecrire $ a $ puis $ b $ sous la forme trigonométrique
3) En déduire les valeurs exactes de $ \sin \frac{7\pi}{12} $ et $ \cos \frac{7\pi}{12} $

### Solution
On pose $ b = (1 - \sqrt{3}) + i(1 + \sqrt{3}) $ et $ a = (1 + i)b $

2) Montrer que $ a = -2\sqrt{3} + 2i $ puis calculer $ |a| $  
$$ a = (1 + i)b = (1 + i)(1 - \sqrt{3}) + (1 + \sqrt{3}) = (1 - \sqrt{3}) + i(1 + \sqrt{3}) - (1 + \sqrt{3}) $$
$$ = -1 + \sqrt{3} + i(1 + \sqrt{3}) - (1 + \sqrt{3}) $$
$$ = -\sqrt{3} + i + i\sqrt{3} - 1 - \sqrt{3} $$
$$ = -2\sqrt{3} + 2i $$  
$$ |a| = |-2\sqrt{3} + 2i| = \sqrt{(-2\sqrt{3})^2 + (2)^2} = \sqrt{12 + 4} = \sqrt{16} = 4 $$

3) Ecrire $ a $ puis $ b $ sous la forme trigonométrique  
$$ a = -2\sqrt{3} + 2i $$  
$$ 4 = -\frac{\sqrt{3}}{2} + \frac{1}{2}i $$

On cherche un argument $ \theta $ de $ a $ tel que $ \cos \theta = -\frac{\sqrt{3}}{2} $ et $ \sin \theta = \frac{1}{2} $  
Donc : $ \theta = \pi - \frac{\pi}{6} = \frac{5\pi}{6} $ convient  
Et donc : $ a = 4 \left( \cos \frac{5\pi}{6} + i \sin \frac{5\pi}{6} \right) = [4, \frac{5\pi}{6}] $

On a : $ b = (1 + i)b \Rightarrow b = \frac{a}{1 + i} $ 

De plus on a : $ 1 + i = \sqrt{2}(\frac{1}{\sqrt{2}} + i \frac{1}{\sqrt{2}}) = \sqrt{2} (\cos \frac{\pi}{4} + i \sin \frac{\pi}{4}) $  
$$ b = \frac{\sqrt{2}}{2} (\cos \frac{\pi}{4} + i \sin \frac{\pi}{4}) $$

## Exercice 14
On pose $ a = \sqrt{2} + \sqrt{2} + i\sqrt{2 - \sqrt{2}} $

1) Ecrire $ a^2 $ sous la forme algébrique  
2) Ecrire $ a^2 $ sous forme trigonométrique  
3) Déduire $ a $ sous forme trigonométrique  
4) Calculer $ \sin \frac{7\pi}{8} $, $ \cos \frac{7\pi}{8} $

### Solution
1) 
$$ a^2 = \left( \sqrt{2 + \sqrt{2}} + i\sqrt{2 - \sqrt{2}} \right)^2 = $$  
$$ = ( \sqrt{2 + \sqrt{2}} )^2 + 2\sqrt{2 + \sqrt{2}}i\sqrt{2 - \sqrt{2}} + (i\sqrt{2 - \sqrt{2}})^2 $$
$$ = 2 + \sqrt{2} + i(2\sqrt{2}\sqrt{2} + i(-1)(2 - \sqrt{2})) $$
$$ = 2 + 2 + 2i\sqrt{2} - \sqrt{2} = 2 + 2i\sqrt{2} - 2 + \sqrt{2} $$
$$ = \frac{2 + 2i}{\sqrt{2}} = \frac{2}{2 + 2i} $$
```

<!-- Page 152 -->

```markdown
# Corrigée de série : Nombres complexes-partie (I) Page 09

## Exercice 15

On pose $ a = 2 + \sqrt{3} + i $

1) Montrer que $ a = \left( \frac{\sqrt{3}}{2} + \frac{1}{2} i \right) \bar{a} $ puis calculer $ |a| $

2) $ |a|^2 = |2\sqrt{2} + 2i\sqrt{2}| = \left( (2\sqrt{2})^2 + (2\sqrt{2})^2 \right) 
= \sqrt{8 + 8} = \sqrt{16} = 4 $

   $ a^2 = 2\sqrt{2} + 2i\sqrt{2} = 4\left( \frac{\sqrt{2}}{4} + \frac{\sqrt{2}}{4} i \right) 
   = 4\left( \cos\left(\frac{\pi}{4}\right) + i \sin\left(\frac{\pi}{4}\right) \right) $

3) On a : $ \arg(a^2) = \frac{\pi}{4} [2\pi] $ et on a : $ |a|^2 = 4 $

   Donc : $ 2 \arg(a) \equiv \frac{\pi}{2} [2\pi] $ et $ |a|^2 = 4 $

   $ \arg(a) = \frac{\pi}{8} [2\pi]$ car $ \text{Re}(a) > 0 $ et $ \text{Im}(a) > 0 $ et $ |a| = \sqrt{4} = 2 $

   Donc : $ a = 2\left( \cos\left(\frac{\pi}{8}\right) + i \sin\left(\frac{\pi}{8}\right) \right) $

4) Calculons $ \sin\left(\frac{7\pi}{8}\right), \cos\left(\frac{7\pi}{8}\right) $

   On a : $ a = a = \left( \cos\left(\frac{\pi}{8}\right) + i \sin\left(\frac{\pi}{8}\right) \right) $

   Donc : $ a = 2\cos\left(\frac{\pi}{8}\right) + i 2\sin\left(\frac{\pi}{8}\right) $

   Et on a : $ b = \sqrt{2 + \sqrt{2}} + i\sqrt{2} $

   Donc : $ 2\cos\left(\frac{\pi}{8}\right) = -\sqrt{2 + \sqrt{2}} $ et $ 2\sin\left(\frac{\pi}{8}\right) = \sqrt{2 - \sqrt{2}} $

   Donc : $ \cos\left(\frac{\pi}{8}\right) = \frac{\sqrt{2 + \sqrt{2}}}{2} $ et $ \sin\left(\frac{\pi}{8}\right) = \frac{\sqrt{2 - \sqrt{2}}}{2} $

   Donc : $ \cos\left(\frac{7\pi}{8}\right) = \cos\left(\pi - \frac{\pi}{8}\right) = -\cos\left(\frac{\pi}{8}\right) = -\frac{\sqrt{2 + \sqrt{2}}}{2} $

   Et : $ \sin\left(\frac{7\pi}{8}\right) = \sin\left(\pi - \frac{\pi}{8}\right) = \sin\left(\frac{\pi}{8}\right) = \frac{\sqrt{2 - \sqrt{2}}}{2} $

5) Montrer que $ a^6 = i\left( 2\sqrt{2} + \sqrt{3} \right)^6 $

## Solution

On pose $ a = 2 + \sqrt{3} + i $

1) Montrer que $ a = \left( \frac{\sqrt{3}}{2} + \frac{1}{2} i \right) \bar{a} $ puis calculer $ |a| $

   $$ \left( \frac{\sqrt{3}}{2} + \frac{1}{2} i \right) \bar{a} = \left( \frac{\sqrt{3}}{2} + \frac{1}{2} i \right)(2 + \sqrt{3} - i) $$
   $$ = \left( \frac{\sqrt{3}}{2} + \frac{1}{2} i \right) (2 + \sqrt{3} - i) $$
   $$ = \sqrt{3} + i + \frac{3}{2} - \frac{\sqrt{3}}{2} i = 2 + \sqrt{3} + i = a $$

   $ |a| = |2 + \sqrt{3} + i| = \sqrt{(2 + \sqrt{3})^2 + (1)^2} $

   $$ = \sqrt{4 + 4\sqrt{3} + 3 + 1} $$
   $$ = \sqrt{8 + 4\sqrt{3}} $$
   $$ = 4\sqrt{3} $$
   $$ = 2\sqrt{2 + \sqrt{3}} $$
```

<!-- Page 153 -->

```markdown
# Prof: fayssal  Site web : www.elboutkhili.jimdo.free.com

## 2) Ecrire a sous la forme trigonométrique

On a : 
$$ a = \left( \sqrt{3}{2} + \frac{1}{2} i \right)a $$

Donc : 
$$ \text{arg}(a) = \text{arg}\left( \sqrt{3}{2} + \frac{1}{2} i \right) [2\pi] $$

Donc : 
$$ \text{arg}(a) = \text{arg}\left( \cos\frac{\pi}{6} + i \sin\frac{\pi}{6} \right) - \text{arg}a [2\pi] $$

Donc : 
$$ \text{arg}(a) + \text{arg}(a) = \frac{\pi}{6} [2\pi] $$

Donc : 
$$ 2 \text{arg}(a) \equiv \frac{\pi}{6} [2\pi] $$

Donc : 
$$ \text{arg}(a) = \frac{\pi}{12} [2] $$

D’où : 
$$ a = 2\sqrt{2} + \sqrt{3}\left( \cos\frac{\pi}{12} + i \sin\frac{\pi}{12} \right) $$

## 3) En déduire les valeurs exactes de $\sin \frac{\pi}{12}$ et $\cos \frac{\pi}{12}$

On a : 
$$ a = 2\sqrt{2} + \sqrt{3}\cos\frac{\pi}{12} + i\sqrt{3}\sin\frac{\pi}{12} $$

Donc : 
$$ a = 2\sqrt{2} + \sqrt{3}\cos\frac{\pi}{12} + 2i\sqrt{3}\sin\frac{\pi}{12} $$

Et on a : 
$$ a = 2 + \sqrt{3} + i $$

Donc : 
$$ 2\sqrt{2} + \sqrt{3}\cos\frac{\pi}{12} = 2 + \sqrt{3} \quad \text{et} \quad 2\sqrt{2} + \sqrt{3}\sin\frac{\pi}{12} = 1 $$

Donc : 
$$ \cos\left( \frac{\pi}{12} \right) = \frac{2\sqrt{2} + \sqrt{3}}{2 + \sqrt{3}} \quad \text{et} \quad \sin\left( \frac{\pi}{12} \right) = \frac{1}{2\sqrt{2} + \sqrt{3}} $$

## 4) Montrer que $a^6 = i(2\sqrt{2} + \sqrt{3})^6$

$$ a^6 = \left( 2\sqrt{2} + \sqrt{3}\left( \cos\frac{\pi}{12} + i \sin\frac{\pi}{12} \right) \right)^6 $$

$$ a^6 = \left( 2\sqrt{2} + \sqrt{3} \left( \cos(6\frac{\pi}{12}) + i \sin(6\frac{\pi}{12}) \right) \right)^6 $$

$$ a^6 = \left( 2\sqrt{2} + \sqrt{3} \left( \cos\frac{\pi}{2} + i \sin\frac{\pi}{2} \right) \right)^6 $$

$$ a^6 = \left( 2\sqrt{2} + \sqrt{3}(0 + i) \right)^6$$

$$ a^6 = i(2\sqrt{2} + \sqrt{3})^6 $$

## Exercice 16

Soient les points $A(a) ; B(b)$ et $C(c)$ tel que 
$$ a = 2 ; \; b = -1 + i \; \text{et} \; c = 3 + 3i $$

Vérifier que $\frac{c-a}{b-a} = -i$ puis en déduire la nature du triangle ABC.

### Solution

$$ c - a = 3 + 3i - 2 = 1 + 3i $$

$$ b - a = -1 - 2 - 3i = -3 - i $$

Donc : 
$$ \frac{c-a}{b-a} = \frac{1 + 3i}{-3 - i} = \frac{10}{10} = -i $$

$$ c - a = -i \Rightarrow |c-a| = |-i| \Rightarrow \text{etarg}\left(\frac{c-a}{b-a}\right) = \text{arg}(-i)[2\pi] $$

$$ \Rightarrow |c-a| = 1 \; \text{et} \; |b-a| = 1 $$

$$ \Rightarrow AC = AB et (AB, AC) = \frac{\pi}{2} [2\pi] $$

$$ \Rightarrow AC = AB \; \text{et} \; (AB, AC) = \frac{\pi}{2} [2\pi] $$

$$ \Rightarrow \text{le triangle ABC est isocèle et rectangle en A} $$
```

<!-- Page 154 -->

```markdown
# Prof: fayssal
## Site web : www.elboutkhili.jimdo.com
### Corrigée de série : Nombres complexes-partie (I) | Page 11

## Exercice 17
Soient les points $A(a) ; B(b) et C(c)$ tel que
1) Vérifier que $ \frac{c-a}{b-a} = -\frac{1}{2} \sqrt{3} $
2) Ecrire le nombre $\frac{1}{2} - \frac{\sqrt{3}}{2}i$ sous forme trigonométrique

### Solution
1) 
$$ c - a = \sqrt{3} + 3i - \sqrt{3} + i = 4i $$
$$ b - a = -\sqrt{3} + i - \sqrt{3} + i = -2\sqrt{3} + 2i $$
$$ \frac{2i\sqrt{3} - 2}{4} = -\frac{1}{2} + i\frac{\sqrt{3}}{2} $$

2) 
$$ \left| \frac{1}{2} - \frac{\sqrt{3}}{2}i \right| = \sqrt{\left(-\frac{1}{2}\right)^2 + \left(\frac{\sqrt{3}}{2}\right)^2} = 1 $$

On cherche un argument $\theta$ de $z_3$ tel que $\cos \theta = -\frac{1}{2}$ et $\sin \theta = -\frac{\sqrt{3}}{2}$

Donc $\theta = -\frac{\pi}{3}$

Et donc : $ z_3 = \sqrt{2} \left( \cos\left(-\frac{\pi}{3}\right) + i\sin\left(-\frac{\pi}{3}\right) \right) = [1, -\frac{\pi}{3}] $

3) La nature du triangle ABC
$$ \frac{c-a}{b-a} = 1 \iff \left| c-a \right| = \left| b-a \right| = 1 $$
$$ \implies \left| c - a \right| = 1 \quad et \quad \text{arg}\left( c-a \right) = -\frac{\pi}{3} [2\pi] $$
$$ \implies AB = 1 \quad et \quad \text{arg}\left( c-a \right) = \frac{\pi}{3} [2\pi] $$
$$ \implies AC = AB \quad et \quad (AB, AC) = \frac{1}{2} [2\pi] $$

$\implies$ le triangle ABC est équilatéral

---

## Exercice 18
On considère dans le plan complexe les points $A(a) ; B(b) ; C(c)$ tel que 
$$ a = \sqrt{3} + i ; b = \sqrt{3} - 1 + \left( \sqrt{3} \right)i \quad et \quad c = -1 + i\sqrt{3} $$

1) Déterminer la forme trigonométrique de $1 + i$ et de $a$
2) Montrer que $b = (1 + i)a$ puis déterminer la forme trigonométrique de $b$
3) Calculer $\cos \frac{5\pi}{12}$
4) Vérifier que $c = ia$ puis en déduire la nature du triangle $OAC$
5) Montrer que le quadrilatère $OABC$ est un carré 

### Solution
1) 
$$ 1 + i = \sqrt{2} \left( \cos \frac{\pi}{4} + i\sin \frac{\pi}{4} \right) = [\sqrt{2}; \frac{\pi}{4}] $$
$$ a = \sqrt{3} + i = 2 \left( \cos \frac{\pi}{6} + i\sin \frac{\pi}{6} \right) = [2; \frac{\pi}{6}] $$

2) Montrer que $b = (1 + i)a$ puis déterminer la forme trigonométrique de $b$
$$ b = (1 + i)a = [\sqrt{2}; \frac{\pi}{4}] = \left[2\sqrt{2}; \frac{5\pi}{12}\right] $$
$$ b = 2\sqrt{2}\left( \cos \frac{5\pi}{12} + i\sin \frac{5\pi}{12} \right) $$

3) Déduire la valeur de $\cos \frac{5\pi}{12}$
On a : $ a : b = 2\sqrt{2} \cos \frac{5\pi}{12} + i \sin \frac{5\pi}{12} $ 
$$ et \quad b = \sqrt{3} - 1 + \left( \sqrt{3} + 1\right)i $$
Donc : $ 2\sqrt{2}\cos \frac{5\pi}{12} = \sqrt{3} - 1 $
$$ \implies \cos \frac{5\pi}{12} = \frac{\sqrt{3} - 1}{2\sqrt{2}} $$
```

<!-- Page 155 -->

```markdown
4) Vérifier que $c = ia$ puis en déduire la nature du triangle $OAC$  
$ia = i(\sqrt{3} + i) = -1 + i\sqrt{3} = c$  
Donc : $c = ia$  
$c = ia \implies \frac{c}{a} = i = |c - 0| = |-| \text{ et } \arg\left(\frac{c - 0}{a - 0}\right) \equiv \arg(i)[2\pi]$  
$\implies \frac{|c - 0|}{|b - 0|} = 1$ et $\arg\left(\frac{c - 0}{a - 0}\right) = \frac{\pi}{2}[2\pi]$  
$\implies OC = OA \text{ et } (OA, OC) = \frac{\pi}{2}[2\pi]$  
$\implies$ le triangle $OAC$ est isocèle et rectangle en O  

5) Montrer que le quadrilatère $OABC$ est un carré  
* Montrons que le quadrilatère $OABC$ est un parallélogramme  
Donc montrons que $\overline{AB} = \overline{OC}$  
$z_{AB} = b - a = \sqrt{3} - (1 + \sqrt{3} i) = \sqrt{3} - i$  
$= \sqrt{3} - 1 + i\sqrt{3} - \sqrt{3} - i$  
$= -1 + i\sqrt{3}$  
$= z_{OC}$  
Donc : $\overline{AB} = \overline{OC}$  
Donc $OABC$ est un parallélogramme  
Et on a $ (OA, OC) = \frac{\pi}{2}[2\pi]$ donc $OABC$ est un rectangle  
De plus on a : $OC = OA$ donc le quadrilatère $OABC$ est un carré  

Exercice 19  
On considère dans le plan complexe les points $A(a) ; B(b) ; C(c)$ tel que $a = 2 + 3i ; b = 3 + 3i et c = 4 + 5i$  
1) Déterminer l’affixe de $D$ tel que $ABCD$ un parallélogramme  
2) Vérifier que $c - a = 3i(b - d)$  
On a : $c - a = 4 + 5i - 1 - 2i = 3 + 3i$  
Et on a : $3i(b - d) = 3i(3 + 3i - 2 - 4i) = 3i(1 - i) = 3 + 3i$  
Donc : $c - a = 3i(b - d)$  
Donc :  
$$ c - a = 3i $$  
Donc : $\arg\left( \frac{c - a}{b - d} \right) \equiv \arg(3i)[2\pi]$  
Donc : $(DB, AC)$ et $(BD)$ sont perpendiculaire  
3) Montrer que le quadrilatère $ABCD$ est losange  
On a le quadrilatère $ABCD$ est un parallélogramme  
Et on a les diagonales de $ABCD$ les droites $(AC)$ et $(BD)$ sont perpendiculaires  
Donc le quadrilatère $ABCD$ est losange
```

<!-- Page 156 -->

```markdown
Prof : fayssal  
Site web : www.elboutkhili.jimdofree.com  

### 4) Déterminer l'affixe de E le symétrique de B par rapport à A  
$$ E \text{ est le symétrique de } B \Rightarrow \overline{AE} = \overline{BA}$$  
$$ \Rightarrow e - a = a - b$$  
$$ \Rightarrow e = 2a - b$$  
$$ e = 2(1 + 2i) - 3 - 3i$$  
$$ e = -1 + i$$  

### 5) En déduire le centre et le rayon de (C) le cercle circonscrit au triangle EBD  
Ona : $E \text{ le symétrique de } B \text{ donc } AE = AB$  
Et on a un ABCD un losange $AB = AD$  
D'où $AE = AB = AD$  

Donc les points $B; E \text{ et } D \text{ appartiennent au même cercle } (C) \text{ de centre } A$  
et de rayon $R = AB = |b - a| = |3 + 3i - 1 - 2i| = |2 + i| = \sqrt{5}$  

### Exercice 20  
On considère le point $M$ d'affixe le nombre complexe $z$  
et $M'$ le point d'affixe $z' = \frac{1}{2}(z + \frac{1}{z})$  

1) Déterminer le nombre complexe $z$ pour que les points $M \text{ et } M'$ soient confondus  

2) On suppose que M différent des points A et B d'affixes respectifs $1 \text{ et } -1 ; \text{ Montrer que } \frac{z' + 1}{z' - 1} = \left( \frac{z + 1}{z - 1} \right)^2$  

3) Soit la droite $(D)$ le médiatrice du segment $[AB]$  
Montrer que si M appartient à $(D)$ alors $M' appartient à (D)$  

4) Soit $(C)$ le cercle de diametre $[AB] ; \text{ Montrer que si M appartient au } (C) \text{ alors les points } A; B \text{ et } M' \text{ sont alignés$  

### Solution  
1) $M = M' \Leftrightarrow z = z' \Leftrightarrow z = \frac{1}{2}(z + \frac{1}{z})$  
$$\Rightarrow z = 1 \text{ ou } z = -1$$  

2) $z' + 1 = \frac{1}{2}(z + \frac{1}{z}) + 1$  
$$z' - 1 = \frac{1}{2}(z + \frac{1}{z}) - 1$$  
$$\Rightarrow \frac{|z + 1|}{|z - 1|} = 1 \Rightarrow (z - 1)(z + 1) = (z' - 1)(z' + 1)$$  

3) $M \text{ appartient à } (A) \Rightarrow AM = BM$  
$$\Rightarrow \frac{BM}{AM} = 1 ; \text{ car } M \neq A$$  
$$|z + 1| = |z - 1| = 1 \Rightarrow \left( z - \frac{1}{z + 1} \right) = 1$$  

4) $M$ appartient au cercle $(C) \Rightarrow (AM; BM) \equiv \frac{\pi}{2} [2\pi]$  
$$\Rightarrow \arg \left(\frac{z + 1}{z - 1}\right) = \frac{\pi}{2}[2\pi]$$  
$$2 \arg \left(\frac{z + 1}{z - 1}\right) \equiv \pi [2\pi]$$  
$$\Rightarrow \arg \left( z + 1 \right)^2 = \pi [2\pi]$$  

$$\Rightarrow \arg \left( \frac{z' + 1}{z' - 1} \right) \equiv \pi [2\pi] ; \text{ car } \frac{z' + 1}{z' - 1} = \left( \frac{z + 1}{z - 1} \right)^2$$  
$$\Rightarrow (AM; BM') \equiv \pi [2\pi]$$  
$$\Rightarrow \text{ les points } A; B \text{ et } M' \text{ sont alignés$$  
```

<!-- Page 157 -->

```markdown
Deuxième bac sciences PC /SVT /ST

# Résumé : Nombres complexes (II)

## Plan de chapitre : Nombres complexes (II)
- Cours détaillé
- Résumé de cours
- Série d'exercices
- Correction détaillée des exercices
```

<!-- Page 158 -->

```markdown
# Résumé : NOMBRES COMPLEXES (Partie 1)
## A) Ensemble des nombres complexe 
$$ C = \{ z = a + ib \, | \, (a;b) \in \mathbb{R}^{2} \, \text{et} \, i^{2} = -1 \} $$
- L’écriture $ a + ib $ s’appelle la forme algébrique du nombre $ z = a + ib $.

1) Conjugué d’un nombre complexe $ z : \overline{z} $
$$ z = a + ib \implies \overline{z} = a - ib ; \, z \text{ le conjugué de } z $$
- Propriété de conjugué d’un complexe 
$$ z + z' = z + z' ; \, xz + xz' = xz' ; \, \overline{z} = \frac{z}{z'} $$
$$ z \overline{z} = z a^2 + b^2 ; \, z^{n} = (z)^{n} $$
- $ z \in \mathbb{R} \implies z = z ; \, z \in \mathbb{I} \implies z = -z $

2) Représentation géométrique d’un complexe

Soit $ A(z_A); \, B(z_B) $ et $ C(z_C) $ des points du plan :
- L’affixe du vecteur $ AB $ est : $ \overline{AB} = z_B - z_A $
- L’affixe de $ I $ le milieu du segment $ [AB] $ est $ z_I = \frac{z_B + z_A}{2} $
- Points $ A, B $ et $ C $ sont alignés $ z_B - z_A \in \mathbb{R} $

3) Module d’un nombre complexe $ z : | z | $
Le module de $ z = a + ib $ d'image $ M $ est le nombre réel positif noté $ | z | $ défini par 
$$ | z | = OM = \sqrt{z z} = \sqrt{a^2 + b^2} $$
- Propriété de module et Distance
$$ | z - z' | = | z' - z | = | z - z' | = \sqrt{a^2 + b^2} $$
$$ | z_n | = | z |^n ; \, | z + z' | \leq | z | + | z' | $$

## B) Argument d’un complexe $ z : \arg(z) $
On appelle argument de $ z $ une mesure $ \theta $, en radian de l’angle orienté $ (e_1, OM) $
$$ \arg(z) = \left( \frac{e_1}{|z|} \right) [2\pi] $$

1) Opérations sur l’argument
$$ \arg(z'z) = \arg(z') + \arg(z) [2\pi] $$
$$ \arg\left(\frac{z'}{z}\right) = \arg(z') - \arg(z) [2\pi] $$
$$ \arg(z) = -\arg(z) [2\pi] $$
$$ \arg(z^{n}) = n \arg(z) [2\pi] $$
$$ \arg(-z) = \pi + \arg(z) [2\pi] $$

2) Forme trigonométrique d’un complexe 
$$ z = a + ib = |z| \, \left( \cos(\theta) + i \sin(\theta) \right) $$
avec $ cos(\theta) = \frac{a}{|z|} $ et $ sin(\theta) = \frac{b}{|z|} $.
L’écriture : $ z = |z| \, \left( \cos(\theta) + i \sin(\theta) \right) $ est appelé forme trigonométrique du complexe $ z $ avec $ \theta $ un argument de $ z $.
Détermination du forme trigonométrique
- Cas particulier : $ a; b \in \mathbb{R}^{*} $ 
$$ z = a \in \mathbb{R}^{+} \implies \arg(z) \in [0; 2\pi[ \text{ et } | z | = a $$
$$ z = ib \in \mathbb{R}^{+} \implies \arg(z) = \frac{\pi}{2}[2\pi] \text{ et } | z | = b $$

3) Opérations sur la forme trigonométrique 
On pose $ z = | z | \left( \cos(\theta) + i \sin(\theta) \right) = [r, \theta] $.
Et : $ z' = | z' | \left( \cos(\theta') + i \sin(\theta') \right) = [r', \theta'] $
$$ zz' = [r, \theta][r', \theta'] = [rr', \theta + \theta'] $$ 
$$ z' = \frac{1}{[r_0]} \left[ \frac{[r',\theta']}{[r', \theta'- \theta]} \right] $$ 
$$ z^n = [r, \theta]^{n} = [r^{n}, n\theta] $$

4) Interprétation géométrique d’argument  
$$ (AB, AC) = \arg\left(\frac{z_C - z_A}{z_B - z_A}\right)[2\pi] $$
$$ (AB, DC) = \arg\left(\frac{z_C - z_D}{z_B - z_A}\right)[2\pi] $$
$$ (AB) \, (DC) = \arg \left( \frac{z_C - z_D}{z_B - z_A} \right) \in [0; \pi] $$

*A, B, C et D sont cocycliques (apparent au même cercle) $\implies (z_C - z_B) \times (z_C - z_D) \in \mathbb{R}$
```

<!-- Page 159 -->

```markdown
# www.elboutkhili.jimdo.free.com

## Résumé : NOMBRES COMPLEXES (Partie II)

### C) Notation exponentielle $e^{i\theta}$
On note $e^{i\theta}$ le complexe de module 1 et d'argument $\theta$ donc $e^{i\theta} = \cos(\theta) + i\sin(\theta)$.

1. Forme exponentielle : $z = r e^{i\theta}$
   $$ z = |z| \left( \cos(\theta) + i\sin(\theta) \right) = |z| e^{i\theta} $$
   L’écriture $z = |z| e^{i\theta}$ est appelée forme exponentielle du complexe $z$.

2. Opérations sur la forme exponentielle
   Soient $z = re^{i\theta}$ et $z' = r'e^{i\theta'}$ :
   $$ |e^{i\theta}| = 1 ; \quad \arg(e^{i\theta}) \equiv [0; 2\pi] $$
   $$ zz' = rre^{i(\theta + \theta')} $$
   $$ \frac{z}{z'} = \frac{r}{r'} e^{i(\theta - \theta')} $$
   $$ e^{i\theta} = e^{-i\theta} ; \quad -e^{-i\theta} = e^{i(\theta - \pi)} $$

   **Formule de MOIVRE**  
   $$(z)^n = \left(re^{i\theta}\right)^n = r^n e^{in\theta}$$  
   $$(\cos(\theta) + i\sin(\theta))^n = \cos(n\theta) + i\sin(n\theta)$$

3. Formule D’EULER  
   $$\cos(\theta) = \frac{e^{i\theta} + e^{-i\theta}}{2}$$  
   $$\sin(\theta) = \frac{e^{i\theta} - e^{-i\theta}}{2i}$$

### D) Résolution d'équations du second degré
Soit dans $C$ l’équation $(E) : az^2 + bz + c = 0$ tels que $a ; b$ et $c$ sont des réels.  
On note $\Delta = b^2 - 4ac$ son discriminant.  
Si $\Delta < 0$, alors l'équation $(E)$ a deux racines complexes distinctes conjuguées $z_1$ et $z_2$ telles que :
$$ z_1 = \frac{-b + i\sqrt{-\Delta}}{2a} \quad \text{et} \quad z_2 = \frac{-b - i\sqrt{-\Delta}}{2a} $$

### E) Transformation dans le plan
#### Translation $T_{\mathbf{u}}$ de vecteur $\mathbf{u}$
Soit $M'(z')$ l'image du point $M(z)$ par translation $T_{\mathbf{u}}$ de vecteur $\mathbf{u}$ d'affixe $z_{\mathbf{u}}$.
$$ T_{\mathbf{u}}(M) = M' = MM' = \mathbf{U} $$

L’écriture complexe du translation $T_{\mathbf{u}}$
$$ z' = z + z_{\mathbf{u}} $$

#### Homothétie de centre $\Omega(\omega)$ et de rapport $k$
Soit $M'(z')$ l'image de $M(z)$ par l'homothétie $h$ de centre $\Omega(\omega)$ et de rapport $k$.
$$ h(M) = M' \Leftrightarrow \Omega M' = k \Omega M $$

$$ z' - \omega = k(z - \omega) $$

#### Rotation $R$ de centre $\Omega(\omega)$ et d'angle $\theta$
Soit $M'(z')$ l'image du point $M(z)$ par la Rotation $R$ de centre $\Omega(\omega)$ et d'angle $\theta$.
$$ R(M) = M' \Leftrightarrow \begin{cases} \Omega M' = \Omega M \\ (\Omega M', \Omega M) = \theta [2\pi] \end{cases} $$

### ABC triangle isocèle et rectangle en $A$
$$ AB = AC \quad \text{et} \quad (AB, AC) = \frac{1}{2}[\pi] $$

### ABC triangle Équilatéral
$$ AB = AC \quad \text{et} \quad (AB, AC) = \frac{\pi}{3} [\pi] $$

### ABCD est un Parallélogramme
1. $AB = DC$
2. Les diagonales ont même milieu

### ABCD est un Losange
1. Parallélogramme dont les diagonales sont perpendiculaires
2. Parallélogramme et $AB = AD$

### ABCD est un Rectangle
1. Parallélogramme qui a un angle droit
2. Parallélogramme dont les diagonales sont isométriques

### ABCD est un Carré
1. Rectangle et losange
2. $$ AB = DC \text{ et } (AB, AD) = \frac{\pi}{2}[\pi] \text{ et } AB = AD $$

### Ensemble des points $M(z)$
$$ \text{l'ensemble des points } M \text{ d'affixe } z \text{ tel que } |z - z_A| = r \text{ est un cercle de centre } A(z_A) \text{ de rayon } r > 0 $$  
$$ \text{l'ensemble des points } M \text{ d'affixe } z \text{ tel que } |z - z_A| = |z - z_B| \text{ est la droite } (D) \text{ le médiatrice du segment } [AB] $$
```

<!-- Page 160 -->

```markdown
# Deuxième bac sciences PC /SVT /ST

## Série corrigée : Nombre complexe (II)
### Deuxième bac sciences PC /SVT /ST

### Plan de chapitre : Nombres complexes (II)
- Cours détaillé
- Résumé de cours
- Série d’exercices
- Correction détaillée des exercices

admin  
Prof fayssal  
06813999067  
www.elbouthkili.jimdo.com
```

<!-- Page 161 -->

```markdown
Prof : Fayssal  |  Site web : www.elbouthkili.jimdo.com
# Série d’exercices 2 : Nombres complexes - (II)  2BAC-BIOF

## Exercice 01
1) Déterminer la forme exponentielle de $z = 1 + i\sqrt{3}$.
2) En déduire la forme exponentielle des nombres suivants :
   a) $iz$ ;  b) $\frac{1}{z}$ ;  c) $\left(1 + i\sqrt{3}\right)^{12}$
3) Écrire les nombres complexes suivants sous la forme algébrique :
   a) $z = e^{\frac{\pi}{6} i}$  b) $z = 4e^{\frac{\pi}{4} i}$

## Exercice 02
Dans le plan considère les deux points $A$ et $B$ d’affixes :
$a = 1 - i$ et $b = 2 + 2i$ et la translation $t$ de vecteur $\overline{OA}$
1) Déterminer l’affixe de point $C$ l’image du point $B$ par $t$ 
2) Déduire la nature du quadrilatère $OABC$
3) Déterminer l’affixe de $D$ tel que $(D) = D’ \text{ et } D’(2 - 3i)$

## Exercice 03
On considère l’homothétie de centre $\Omega (-3i)$ et de rapport $k=2$
1) Déterminer l’affixe de $B$ l’image de point $A(1 + i)$ par $h$
2) Déduire que $A$ est le milieu de $[\overline{B} A]$

## Exercice 04
A) Résoudre dans $\mathbb{C}$ l’équation suivante : $(E) : z^2 + z + 1 = 0$
B) On considère la rotation $r$ de centre $O$ et d’angle $\frac{\pi}{3}$ 
$M(z)$ un point du plan complexe et $M’(z')$ son image par $R$.
1) Donner l’écriture complexe de la rotation
2) Déterminer l’affixe de $A’$ l’image de point $A(2-i)$ par la rotation
3) Déduire la nature de triangle $OAA’$

## Exercice 05
A) Résoudre dans $\mathbb{C}$ l’équation suivante : $(E) : 2z^2 - 2\sqrt{3}z + 2 = 0$
B) On considérera la rotation de centre $O$ d’affixe $\omega = 1 + i$ et $M’(z')$ l’image de $M(z)$ par la rotation $R$.
Et $A(a)$ ; $B(b)$ deux points tels que : $a = 4 + i$ et $b = 8 + 3i$

## Exercice 06
1) Vérifier que : $z’ = -iz - 1 + 3i$
2) Vérifier que $c = -i$ est l’affixe de $C$ l’image de $A$ par $R$
3) En déduire la nature du triangle $OAC$
4) Montrer que : $b - c = 2(a - c)$
5) En déduire que les points $A$, $B$ et $C$ sont alignés

C) On considère les points $E$ ; $F$ et $G$ d’affixes respectifs :
$z_E = 1 + i$ et $z_F = 1 - i$ et $z_G = -i\sqrt{3}$
1) Soit $N$ l’image de $F$ par l’homothétie de centre $G$ et de rapport $2$ 
Montrer que : $z_N = 2 + i(\sqrt{3 - 3})$
2) $R$ la rotation de centre $O$ et d’angle $\frac{\pi}{2}$ 
est l’image de $N$ par $R$
Montrer que : $z_A = \sqrt{3}$ et $z_C = 2 - \sqrt{3} + 2i$
3) $T$ la translation de vecteur $u$ d’affixe $2i$ et $D$ l’image du point $N$ et $D$ est l’image de $G$ par $T$
Montrer que : $z_B = 2 + i\sqrt{3} et z_D = (2 - \sqrt{3})i$
4) a) Montrer que $E$ est le milieu de $[AC]$ et $[BD]$
b) Vérifier que $\frac{z_C - z_E}{z_B - z_E}$ ; puis en déduire la nature du triangle $BCE$
c) Déduire que le quadrilatère $ABCD$ est un carré
```

<!-- Page 162 -->

```markdown
# Prof : Fayssal | Site web : www.elboukhili.jimdofree.com
## Série d’exercices 2 : Nombres complexes - (II) 2BAC-BIOF

### Exercice 07
Soit l’homothétie de h centre S d’affixe $s = -5 + 5i$ et de rapport 2 et les pts $A(a) ; B(b) ; E(e)$ tel que  
$a = -2 + 4i ; \quad b = -4 + 2i ; \quad e = -2 + 3i$

1) Déterminer l’affixe $d$ de l’affixe de D’image de B par l’homothétie h  
2) Montrer que les points $A ; B ; C ; D$ appartiennent au même cercle  
3) Déterminer $p$ l’affixe de P milieu de $[AC]$  
4) a) Montrer que $\frac{e^{-p}}{b-d} = \frac{1}{d}$ puis en déduire que $DB = 2PE$  
   b) En déduire que la droite $(DB)$ et $(PE)$ sont perpendiculaires  
5) Déterminer l’ensemble des points $M(z)$ tel que $|z + 2 - 4i| = 5$

### Exercice 08
1) On le nombre complexe $a = \frac{\sqrt{2}}{2} + \frac{\sqrt{2}}{2}i$  
   a) Ecrire a sous forme trigonométrique et déduire que $a^{2024} \in \mathbb{R}$  
   b) On pose $b = \cos \frac{\pi}{8} + i \sin \frac{\pi}{8}$ : prouver que $b^2 = a$  
2) Dans le repère orthonormé $(O; \vec{u} ; \vec{v})$, on considère les points $A(a) ; B(b) ; C(c)$ tel que : $c = 1$ et la rotation R de centre O et d’angle $\frac{\pi}{8}$ et $M'(z)$ l’image de $M(z)$ par R  
   a) Vérifier que : $z' = bz$  
   b) Déterminer l’image de C par la rotation R et montrer que A est l’image de B par R  
3) a) Montrer que $|a - b| = |b - c|$ et déterminer la nature du triangle ABC  
   b) Déterminer une mesure de $[\overline{BA}; \overline{BC}]$  
4) Soit T la translation de vecteur $\vec{u}$ et D(d) l’image de point A par la translation T :  
   a) Vérifier que : $d = b^2 + 1$  
   b) Montrer que $\frac{b^2 + 1}{b} = b + \bar{b}$ et déduire que O ; B et D sont alignés  

### Exercice 09
1) Linéariser l’expression $(\sin(x))^2$ puis $\cos^3 x$.  
2) En déduire une primitive de la fonction $x \mapsto \cos^3 x$.  

### Exercice 10
1) Montrer que pour tout $a$ et $b$ dans $\mathbb{R}$ on a :  
   a) $e^{ia} + e^{ib} = 2 \cos \left( \frac{a-b}{2} \right) e^{\frac{a+b}{2}}$  
   b) $e^{ia} - e^{ib} = 2i \sin \left( \frac{a-b}{2} \right) e^{\frac{a+b}{2}}$  
2) Ecrire sous forme exponentielle les nombres suivants :  
   $z = 1 + \frac{1}{2} + i \frac{\sqrt{3}}{2} ; \quad z' = 2 - \sqrt{2} - i \sqrt{2}$  

### Exercice 11
1) Déterminer la nature de la transformation f qui associe chaque point $M(z)$ par son image $M'(z')$ tel que $z' = z - 3i$  
2) Déterminer la nature de la transformation f qui associe chaque point $M(z)$ par son image $M'(z')$ tel que $z' = 4z - 3i$  
3) Déterminer la nature de la transformation f qui associe chaque point $M(z)$ par son image $M'(z')$ tel que $f(z) = z' = iz + 2 - i$  

### Exercice 12
1) En utilisant la formule de d’EULER linéariser $\cos^2(x)$ puis déduire que $2 \cos^2(x) = 1 + \cos(2x)$.  
2) Développer $(\cos x + \sin x)^2$ avec deux méthodes différentes puis déduire que $\sin(2x) = 2 \sin x \cos x$.  
3) On considère le nombre complexe $a = 2 + \sqrt{3} i$  
   Montrer que $|a| = 2\sqrt{2 + \sqrt{3}}$  
4) Vérifier que $a = 2 \left( 1 + \cos \left( \frac{\pi}{6} \right) \right) + 2i \sin \left( \frac{\pi}{6} \right)$.  
5) Montrer que $a = 4 \cos^2 \left( \frac{\pi}{12} \right) + 4 i \cos \left( \frac{\pi}{12} \right) \sin \left( \frac{\pi}{12} \right)$.  
6) Déduire la forme trigonométrique de a.  
7) Montrer que $a^6 = (2\sqrt{2 + \sqrt{3}})^3 i$  
```

<!-- Page 163 -->

```markdown
# Prof : Fayçal
Site web : www.elboutkhili.jimdofree.com

## Exercice 01
1) Déterminer la forme exponentielle de $z = 1 + i\sqrt{3}$.  
2) En déduire la forme exponentielle des nombres suivants :  
   a) $iz$ ;  
   b) $i\bar{z}$ ;  
   c) $-\frac{2}{i}z$ ;  
   d) $(1 + i\sqrt{3})^{12}$  
3) Écrire les nombres complexes suivants sous la forme algébrique :  
   a) $z = e^{i\frac{\pi}{6}}$  
   b) $z = 4e^{i\frac{\pi}{4}}$  

**Solution**  
1) $z = 1 + i\sqrt{3} = 2\left( \frac{1}{2} + i\frac{\sqrt{3}}{2} \right) = 2\left( \cos \frac{\pi}{3} + i\sin \frac{\pi}{3} \right) = 2e^{i\frac{\pi}{3}}$  
2)  
   a) $iz = 2ie^{i\frac{\pi}{3}} = 2e^{i\left(\frac{\pi}{3} + \frac{\pi}{2}\right)} = 2e^{i\frac{5\pi}{6}}$  
   b) $i\bar{z} = 2ie^{-i\frac{\pi}{3}} = 2e^{-i\left(\frac{\pi}{3} - \frac{\pi}{2}\right)} = 2e^{-i\frac{\pi}{6}}$  
   c) $-\frac{2}{i}z = 2(-iz) = 2(-2e^{i\frac{\pi}{3}}) = -2i\cdot 2e^{i\frac{\pi}{3}} = -2e^{i\left(\frac{\pi}{3} + \frac{\pi}{2}\right)} = -2e^{i\frac{5\pi}{6}}$  
   d) $(1 + i\sqrt{3})^{12} = \left(2e^{i\frac{\pi}{3}}\right)^{12} = 2^{12}e^{i\cdot 4\pi} = 2^{12} = 4096$  

3)  
   a) $z = e^{i\frac{\pi}{6}} = \cos \left( \frac{\pi}{6} \right) + i \sin \left( \frac{\pi}{6} \right) = \frac{\sqrt{3}}{2} + i\frac{1}{2}$  
   b) $z = 4e^{i\frac{\pi}{4}} = 4\left(\cos \left( \frac{\pi}{4} \right) + i \sin \left( \frac{\pi}{4} \right)\right) = 4\left(\frac{\sqrt{2}}{2} + i\frac{\sqrt{2}}{2}\right) = 2\sqrt{2} + 2\sqrt{2}i$  

## Exercice 02
Dans le plan considère les deux points A et B d'affixes :  
$a = 1 - i$ et $b = 2 + 2i$ et la translation t de vecteur $OA$  
1) Déterminer l'affixe de point C l’image du point B par $t$  
2) Édruire la nature du quadrilatère OACB  
3) Déterminer l'affixe de D tel que $t(D) = D'$ et $D' = (2 - 3i)$  

**Solution**  
1) $t(B) = C \implies BC = OA$  
$\iff c - b = a - b$  
$\iff c = 1 - i + 2 + 2i \implies c = 3 + i$  

## Exercice 03
On considère l’homothétie de centre $\Omega(-3i)$ et de rapport $k=2$  
1) Déterminer b l’affixe de B l’image de point A(1 + i) par $h$  
2) Déduire que A est le milieu du $[\Omega B]$  

**Solution**  
$h(A) = B \iff \Omega B = 2 \Omega A$  
$\iff b - z_A = k(a - z_Q)$  
$\iff b - (-3i) = 2(1 + i - (-3i))$  
$\iff b = 2(1 + 4i) + 3i = 2 + 11i$  

## Exercice 04
C) Résoudre dans $\mathbb{C}$ l’équation suivante : $(E_m): z^2 + z + 1 = 0$  
D) On considère la rotation R de centre O et d'angle $\frac{\pi}{3}$  
M(z) un point du plan complexe et M’(z’) son image par r.  
4) Donner l’écriture complexe de la rotation  
5) Déterminer l'affixe de A’ l’image de point A(2-i) par la rotation  
6) Déduire la nature du triangle OAA’  

**Solution**  
A) $\Delta = 1^2 - 4 \cdot 1 \cdot 1 = -3 < 0$  
Alors l’équation $(E)$ a deux racines complexes distinctes conjuguées $z_1 et z_2$ données par :  
$z_1 = -\frac{1}{2} + \frac{\sqrt{3}}{2}i$ ; $z_2 = -\frac{1}{2} - \frac{\sqrt{3}}{2}i$  

$S = \left(-\frac{1}{2} + \frac{3}{2}i\right)$
```

<!-- Page 164 -->

```markdown
B) 
1) R(M) = M' ⇔ z' − z₀ = e^{iθ}(z − z₀)
  ⇔ z' − 0 = e^{i\frac{\pi}{3}}(z − 0)
  ⇔ z' = (cos\frac{\pi}{3} + i sin\frac{\pi}{3})z
  ⇔ z' = \left( \frac{1}{2} + i \frac{\sqrt{3}}{2} \right)z

2) R(A) = A' ⇔ a' = \left( \frac{1}{2} + i \frac{\sqrt{3}}{2} \right)a
   ⇔ a' = \left( \frac{1}{2} + i \frac{\sqrt{3}}{2} \right)(2 - i)
   ⇔ a' = 1 - 1i + i \sqrt{3} + \sqrt{3}/2
   ⇔ a' = \left( 1 + \frac{\sqrt{3}}{2} \right) + \left( \sqrt{3} - 1 \right)i

3) On a ; R(A) = A' donc \frac{OA'}{OA} = \frac{\pi}{3}[2\pi]
   D'où le triangle OAA' est équilatéral

**Exercice 05**

C) Résoudre dans $\mathbb{C}$ l’équation suivante : (E): $2z^2 - 2\sqrt{3}z + 2 = 0$

D) On considère R la rotation de centre $\Omega$ d'affixe $\omega = 1 + 2i$ d'angle $-\frac{\pi}{2}$ et $M'(z)$ est l’image de $M(z)$ par la rotation R.
Et A(a); B(b) deux points tel que : $a = 4 + i$ et $b = 8 + 3i$

6) Vérifier que : $z' = -iz - 1 + 3i$

7) Vérifier que $c = -i$ est l'affixe de C.

8) En déduire la nature du triangle $\Omega AC$

9) Montrer que : $b - c = 2(a - c)$
   On a : $b - c = 2(a - c)$
   Donc : $2(a - c) = 2 \in \mathbb{R}$

10) En déduire que les points A ; B et C sont alignés

**Solution**
```

<!-- Page 165 -->

```markdown
# Exercices 06

**B)** On considère dans $\mathbb{C}$ l’équation :
$$(E): x^2 - 2(1 - \sqrt{2})z + 2(2 - \sqrt{2}) = 0$$
1) Vérifier que $\Delta = -4$
2) En déduire les solutions $z_1$ et $z_2$ de $(E)$

**B)** 
1) On pose : $u = -\sqrt{2} - i$ ; calculer $|u|$
2) Montrer que $(1 + i)u = -\sqrt{2} \overline{u}$
3) Déduire que $2\arg(u) \equiv \frac{3\pi}{4} [2\pi]$

**C)** On considère les points $E ; F$ et $G$ d’affixes respectifs :
$$z_E = 1 + i \quad \text{et} \quad z_F = 1 - i \quad \text{et} \quad z_G = -i\sqrt{3}$$ 
1) Soit $N$ l’image du point $F$ par l’homothétie de centre $G$ et de rapport $2$.
Montrer que : $z_N = 2 + i(\sqrt{3} - 2)$.
2) R la rotation de centre $O$ et d’angle $\frac{\pi}{2}$ et $A$ l’image du point $G$ et $C$ est l’image de $N$ par $R$.
Montrer que : $z_A = \sqrt{3}$ et $z_C = 2 - \sqrt{3} + 2i$.
3) T la translation de vecteur $\overrightarrow{u}$ d’affixe $2i$ et $B$ l’image du point $N$ et $D$ est l’image de $G$ par $T$.
Montrer que : $z_B = 2 + i\sqrt{3}$ et $z_D = (2 - \sqrt{3})$.
4) a) Montrer que $E$ est le milieu de $[AC]$ et $[BD]$.
b) Vérifier que $\frac{z_C - z_E}{z_B - z_E} = i$, puis en déduire la nature du triangle $BCE$.

**c)** Déduire que le quadrilatère $ABCD$ est un carré.

# Solution

A) 1) 
$$\Delta = [-2(1 - \sqrt{2})]^2 - 4 \times 1 \times 2(2 - \sqrt{2})$$
$$\Delta = [4(1 - \sqrt{2})^2] - 8(2 - \sqrt{2})$$
$$\Delta = 4(1 - 2\sqrt{2} + 2) - 16 + 8\sqrt{2}$$
$$\Delta = 12 - 8\sqrt{2} - 16 + 8\sqrt{2}$$
$$\Delta = -4 < 0$$

2) $-4 < 0$ ; alors l’équation $(E)$ a deux racines complexes distinctes $z_1$ et $z_2$ données par :
$$z_1 = \frac{2(1 - \sqrt{2}) + i}{2} = 1 - \sqrt{2} + i$$
$$z_2 = \frac{2(1 - \sqrt{2}) - i}{2} = 1 - \sqrt{2} - i$$

B) 1) 
$$|u| = \sqrt{(1 - \sqrt{2})^2 + (-1)^2} = \sqrt{1 - 2\sqrt{2} + 2 + 1}$$
$$|u| = \sqrt{4 - 2\sqrt{2}}$$

2) 
$$(1 + i)u = (1 + i)(1 - \sqrt{2} - i) = 1 - \sqrt{2} - i + i\sqrt{2} + 1 = 2 - \sqrt{2} - iv + 1$$

$$ = 2 - \sqrt{2} + i(\sqrt{2} - 1)$$

De $(*)$ et $(**)$ on a : $(1 + i)u = -\sqrt{2} \overline{u}$

3) a) 
$$(1 + i)u = -\sqrt{2} \overline{u}$$
$$\arg((1 + i)u) = \arg([-2 \sqrt{2} \times \overline{u}][2\pi])$$
$$\Longleftrightarrow \arg(1 + i) + \arg(u) = \arg(-\sqrt{2}) + \arg(\overline{u})[2\pi]$$
\[
\Longleftrightarrow \arg\left(\sqrt{2}(1 + i) + \frac{1}{\sqrt{2}}\right) + \arg\left(\frac{1}{\sqrt{2}}\right) \equiv \arg(-\sqrt{2}) + \arg(\overline{u})[2\pi]
\]
$$2 \arg(u) \equiv \frac{3\pi}{4} [2\pi]$$
$$2 \arg(u) \equiv \frac{\pi}{4} [2\pi]$$
```

<!-- Page 166 -->

```markdown
C) On considère les points $E ; F$ et $G$ d’affixes respectifs :
$$ z_E = 1 + i \quad \text{et} \quad z_F = 1 - 1 i \quad z_G = -i\sqrt{3} $$

C)1) $h(F) = N \longrightarrow GN = 2 GF \longrightarrow z_N = z_G - 2(z_F - z_G)$
$$ \Longleftrightarrow z_N = 2(z_F - z_G) + z_G $$
$$ \Longleftrightarrow z_N = 2(1 - i + i\sqrt{3}) - i\sqrt{3} $$
$$ \Longleftrightarrow z_N = 2 - 2i + i\sqrt{3} - \sqrt{3} $$
$$ \Longleftrightarrow z_N = 2 - 2i + i(\sqrt{3} - 2) $$

2) $R(G) = A \longrightarrow z_A = z_O = e^{i \frac{\pi}{2}}(z_G - z_O)$
$$ \Longleftrightarrow z_A = i z_G ; \quad \text{car} \quad e^{i \frac{\pi}{2}} = i $$
$$ \Longleftrightarrow z_A = -\sqrt{3} $$

$R(N) = C \Longrightarrow z_C = i z_N$
$$ \Longleftrightarrow z_C = i(2 + i(\sqrt{3} - 2)) $$
$$ \Longleftrightarrow z_C = 2i - (1 - \sqrt{3})2 $$
$$ \Longleftrightarrow z_C = 2i - \sqrt{3} + 2 $$

3) $T(N) = B \Longrightarrow NB = \vec{u}$
$$ \Longleftrightarrow z_B - z_N = z_{\vec{u}} $$
$$ \Longleftrightarrow z_B = z_U + z_N $$
$$ \Longleftrightarrow z_B = 2i + 2 + i(\sqrt{3} - 2) = 2 + i\sqrt{3} $$

$T(G) = D \Longrightarrow GD = \vec{u}$
$$ \Longleftrightarrow z_D - z_G = z_{\vec{u}} $$
$$ \Longleftrightarrow z_D = z_U + z_G $$
$$ \Longleftrightarrow z_D = 2i - i\sqrt{3} = (2 - \sqrt{3})i $$

4) a) 
$$ z_A + z_C = \frac{\sqrt{3} + z_C + 2 + 2i}{2} = \frac{2(1 + i)}{2} = 1 + i = z_E $$

E est le milieu de $[AC]$

b) 
$$ z_C - z_E = (2 - \sqrt{3} + 2i) - (1 + i) = (1 - \sqrt{3}) + (1)i ; (**) $$
$$ i(z_B - z_E) = i(2i - \sqrt{3} - 1) = 2i - \sqrt{3} + 1 + 1 = i\sqrt{3} + i ; (*) $$

Donc :
$$ z_C - z_E = i \Longleftrightarrow \text{arg} \frac{z_C - z_E}{z_B - z_E} = \text{arg} (i)[2\pi] $$
$$ \Longleftrightarrow (EB; EC) = \frac{\pi}{2}[2\pi] ; (*) $$

$$ z_C - z_E = i \Longleftrightarrow \left|\frac{z_C - z_E}{z_B - z_E}\right| = |i| $$
$$ \Longleftrightarrow |z_C - z_E| = 1 \Longleftrightarrow |z_B - z_E| = 1 $$
$$ EC = 1 \Longleftrightarrow EC = EB ; (**) $$

De $(*)$ et $(**)$ on a : le triangle $BCE$ est isocèle et rectangle en $E$

c) Déduire que le quadrilatère $ABCD$ est un carré
- On a : $[AC]$ et $[BD]$ sont de même milieu donc le quadrilatère $ABCD$ est un parallélogramme.
- Et on a $(EB; EC) = \frac{\pi}{2}[2\pi]$ donc $(EB)$ et $(EC)$ sont perpendiculaires donc $ABCD$ est un losange.
- Et on a $EC = EB$ et $E$ est le milieu de $[AC]$ et $[BD]$ donc $AC=BD$.
D’où $ABCD$ est un carré.
```

<!-- Page 167 -->

```markdown
# Exercice 07

Soit l’homothétie de centre $S$ d’affixe $s = -5 + 5i$ et de rapport $2$ et les pts $A(a) ; B(b) ; E(e)$ tel que  
$a = -2 + 4i ; b = -4 + 2i ; e = -2 + 2i$

1) Déterminer l’affixe de $C$ image de $A$ et d’affixe de $D$ image de $B$ par l’homothétie $h$

2) Montrer que les points $A ; B ; C ; D$ appartiennent au même cercle

3) Déterminer $p$ l’affixe de $P$ le milieu de $[AC]$

4) a) Montrer que $\frac{e-p}{b-d}=\frac{1}{2}$ puis en déduire que $DB = 2PE$  
   b) En déduire que les droites $(DB)$ et $(PE)$ sont perpendiculaires

5) Déterminer l’ensemble des points $M(z)$ tel que $|z + 2 - 4i| = 5$

# Solution

Soit l’homothétie $h$ de centre $S$ d’affixe $s = -5 + 5i$ et de rapport $3$ et les pts $A(a) ; B(b) ; E(e)$ tel que  
$a = -2 + 4i ; b = -4 + 2i ; e = -2 + 3i$

1) Déterminer $C$ l’image de $A$ et $D$ l’affixe de $B$ par l’homothétie $h$  
$$ h(A) = C \iff \overline{SC} = 2 \overline{SA} $$  
$$ c = s - 2(a - s) $$  
$$ c = 2(a - s) + s $$  
$$ c = 2(2 - 4i + 5 - 5i) - 5 + 5i $$  
$$ c = 2(3 - i) - 5 + 5i $$  
$$ c = 1 + 3i $$  
  
$$ h(B) = D \iff \overline{SD} = 2 \overline{SB} $$  
$$ d = s - 2(b - s) $$  
$$ d = 2(b - s) + s $$  
$$ d = 2(-4 + 2i - (-5 + 5i)) - 5 + 5i $$  
$$ d = 2(1 - 3i) - 5 + 5i $$  
$$ d = 2(1 - 3i) - 5 + 5i $$  
$$ d = -3 - i $$  

2) Montrer que les points $A ; B ; C ; D$ appartiennent au même cercle  
$$ a - b = c - d = -2 + 4i - (-4 + 2i) = 1 + 3i $$  
$$ c - b = \frac{8(1+i)^2}{(5+i)(1+5i)} = 8(1 + 2i - 1) = 16i $$  
Donc les points $A ; B ; C ; D$ appartiennent au même cercle

3) Déterminer $p$ l’affixe de $P$ le milieu de $[AC]$  
$$ p = \frac{a + c}{2} = \frac{-2 + 4i + 1 + 3i}{2} = \frac{-1 + 7i}{2} $$  

3) a) Montrer que $\frac{e-p}{b-d} = \frac{1}{2}$ et en déduire que $DB = 2PE$  
On a : $2(e - p) = 2(-2 + 3i + \frac{7}{2}i) = 2(-\frac{3}{2} - i) = -3 - i$  
Et : $(b - d)i = (-4 + 2i - (-3 - i)) = (-1 + 3i) = -3 - i$  
Donc : $2(e - p) = -(b - d)i$  
Donc : $\frac{e - p}{b - d} = \frac{1}{2}i$
```

<!-- Page 168 -->

```markdown
### 2ème méthode :

$$ 
e - p = -2 + 3i + \frac{1}{2} - \frac{7}{2} i = \frac{-3 - i}{2} 
$$ 

$$ 
b - d = -4 + 2i + 3 + i = -1 + 3i 
$$ 

$$ 
= \frac{1}{2} \left( \frac{(-3 - i)}{(-1 + 3i)} \right) 
= \frac{1}{2} \left( \frac{(3 + 9i - i - 3)}{10} \right) 
= \frac{1}{2} \left( \frac{10i}{10} \right) 
= \frac{1}{2} i 
$$ 

EN déduire que 

$$ 
DB = 2PE 
$$ 

$$ 
e - p = \frac{1}{2} i \Rightarrow \left| e - p \right| = \frac{1}{2} \left| b - d \right| 
\Rightarrow \left| e - p \right| = \frac{1}{2} \times \left| i \right| 
$$ 

$$ 
PE = \frac{1}{2} 
$$ 

$$ 
\Rightarrow DB = 2PE 
$$ 

b) En déduire que les droite (DB) et (PE) sont perpendiculaires 

$$ 
e - p = \frac{1}{2} i \Rightarrow \text{arg}\left( e - p \overline{b - d} \right) = \text{arg}\left( \frac{1}{2} i\right) [2\pi] 
$$ 

$$ 
\Rightarrow (DB; PE) = \frac{\pi}{2} [2\pi] 
$$ 

Donc les droite (DB) et (PE) sont perpendiculaires.

### 5) Déterminer l’ensemble des points M(z) tel que $ |z + 2 - 4i| = 5 $

$$ 
|z + 2 - 4i| = 5 \Rightarrow |z - (-2 + 4i)| = 5 
$$ 

$$ 
|z - a| = 5 
$$ 

$$ 
AM = 5 
$$ 

L’ensemble des points $M$ est le cercle de centre $A$ et de rayon $5$.

### Exercices 08

1) On le nombre complexe 

$$ 
a = \frac{\sqrt{2}}{2} + \frac{\sqrt{2}}{2} i 
$$ 

a) Ecrire à sous forme trigonométrique et déduire que $ a^{2024} \in \mathbb{R} $ 

$$ 
b = \cos\left( \frac{\pi}{8} \right) + i \sin\left( \frac{\pi}{8} \right) \Rightarrow \text{prouver que } b^2 = a 
$$ 

2) Dans le repère orthonormé $(O; \overrightarrow{u}, \overrightarrow{v})$, on considère les points $A(a) ; B(b) ; C(c)$ tel que : $c = 1$ et la rotation $R$ de centre $O$ et d’angle $\frac{\pi}{8}$ et $M'(z')$ l’image de $M(z)$ par $R$ 

a) Vérifier que : $ z' = bz $ 

b) Déterminer l’image de $C$ par la rotation $R$ et montrer que $A$ est l’image de $B$ par $R$ 

3)a) Montrer que $ |a - b| = |b - c| $ et déterminer la nature du triangle $ABC$ 

b) Déterminer une mesure de $[\overline{BA}; \overline{BC}]$ 

4) Soit $T$ la translation de vecteur $\overrightarrow{u}$ de $D(d)$ l’image de point $A$ par la translation $T$ ; 

a) Vérifier que : $ d = b^2 + 1 $ 

b) Montrer que 

$$ 
\frac{b^2 + 1}{b} = b + b \text{ et déduire que } O ; B et D sont alignés 
$$ 
```

<!-- Page 169 -->

```markdown
2) Dans le repère orthonormé $(O; \mathbf{u}; \mathbf{v})$, on considère les points $A(a) ; B(b) ; C(c)$ tel que : $c = 1 \; et \; R$ est la rotation $R$ de centre $O$ et d’angle $\frac{\pi}{8}$ et $M(z')$ l’image de $M(z)$ par $R$

2)a) Vérifier que : $z' = bz$

$$
R(M) = M' \Leftrightarrow z' - o = e^{i \frac{\pi}{8}}(z - o)
$$
$$
\Rightarrow z' = bz
$$

b) Déterminer l’image de $C$ par la rotation $R$ et montrer que $A$ est l’image de $B$ par $R$

$$
R(C) = M' \Leftrightarrow z' = bc
$$
$$
\Rightarrow z' = b \times 1
$$
$$
\Rightarrow z' = b^2
$$
$$
\Rightarrow z' = a
$$
$$
\Rightarrow R(B) = A
$$

3)a) Montrer que $|a - b| = |b - c|$ et déterminer la nature du triangle $ABC$

$$
Ona : R(C) = B \; et \; R(B) = A \; donc \; AB = BC
$$

Car la rotation conserve les distances

D’où $|a - b| = |b - c|$

la nature du triangle $ABC$

On a : $AB = BC$ donc le triangle $ABC$ est isocèle en $B$

b) Déterminer une mesure de $(\overline{BA}; \overline{BC})$

1ère méthode :

$$
(\overline{BA}; \overline{BC}) \equiv \arg \left(\frac{c - b}{a - b}\right)[2\pi]
$$
$$
\equiv \arg\left(\frac{1 - b}{b^2 - b}\right)[2\pi]
$$
$$
\equiv \arg\left(1 - b\right)[b(b - 1)]
$$

4) Soit $T$ la translation de vecteur $\mathbf{u}$ et $D(d)$ l’image de point $A$ par la translation $T$ ;

a) Vérifier que : $d = b^2 + 1$

On a $D(d)$ l’image de point $A$ par la translation $T$ de vecteur $\mathbf{u}(1)$ ;

$$
\frac{\overline{AD}}{\overline{D \; O}} = \mathbf{u}
$$
$$
\Rightarrow d - a = 1
$$
$$
\Rightarrow d = a + 1
$$
$$
\Rightarrow d = b^2 + 1
$$
```

<!-- Page 170 -->

```markdown
b) Montrer que 

$$ \frac{b^2 + 1}{b} = b + \bar{b} $$ 

et déduire que O ; B et D sont alignés 

$$ \frac{b^2 + 1}{b} = \frac{b^2}{b} + \frac{1}{b} = b + \frac{1}{b} $$

$$ = b + \frac{1}{\cos \frac{\pi}{8} + i \sin \frac{\pi}{8}} $$

$$ = b + \cos \left(-\frac{\pi}{8}\right) + i \sin \left(-\frac{\pi}{8}\right) $$

$$ = b + \cos \left(\frac{\pi}{8}\right) - i \sin \left(\frac{\pi}{8}\right) $$

$$ = b + \bar{b} $$

On a : 

$$ \frac{b^2 + 1}{b} = b + \bar{b} $$

Donc : 

$$ \frac{d}{b} = \cos \left(\frac{\pi}{8}\right) + i \sin \left(\frac{\pi}{8}\right) + \cos \left(\frac{\pi}{8}\right) - i \sin \left(\frac{\pi}{8}\right) $$ 

Donc : 

$$ \frac{d - o}{b - o} 2 \cos \left(\frac{\pi}{8}\right) \in \mathbb{R} $$

D’où les points O ; B et D sont alignés

### Exercice 09

1) Linéariser l’expression $(\sin(x))^2$ puis $\cos^3 x$.
2) En déduire une primitive de la fonction $x \mapsto \cos^3 x$.

**Solution**

1) On applique une formule d’Euler :

$$ \sin^2 x = \frac{(e^{ix} - e^{-ix})^2}{2i^2} = -\frac{1}{4}((e^{ix})^2 - (e^{-ix})^2 + 2e^{ix}e^{-ix}), $$

$$ = -\frac{1}{4}(e^{2ix} + e^{-2ix} - 2e^{ix}e^{-ix}) $$

$$ = -\frac{1}{4}(2\cos(2x) - 2e^0) $$

Donc :  $$(\sin x)^2 = -\frac{1}{2} \cos(2x) + \frac{1}{2} $$

b) On applique une formule d’Euler :

$$ \cos^3 x = \frac{(e^{ix} + e^{-ix})^3}{2} $$

$$ = \frac{1}{8}((e^{ix})^3 + 3(e^{ix})^2 e^{-ix} + 3e^{ix} e^{-2ix} + (e^{-ix})^3) $$

Donc : 

$$ \cos^3 x = \frac{1}{8}(e^{3ix} + 3e^{2ix}e^{-ix} + 3e^{ix}e^{-2ix} + e^{-3ix}) $$

$$ = \frac{1}{8}(e^{3ix} + 3e^{ix} + 3e^{-ix} + e^{-3ix}) $$

$$ = \frac{1}{8}(\cos 3x + i \sin 3x + 3 \cos 3x + 3i \sin 3x - 3 \sin 3x - i \sin 3x - \cos 3x) $$

$$ = \frac{1}{8}(\cos 3x + 3\cos 3x + 3\cos 3x) $$

$$ = \frac{1}{8}(2 \cos 3x + 3 \cos 3x) $$

$$ = \frac{1}{4}(\cos 3x + \cos 3x) $$

2) Ainsi, chercher une primitive de $\cos^3 x$ revient à chercher une primitive de $\frac{1}{4}(\cos 3x + \cos 3x)$.

Une primitive de la fonction $x \mapsto \frac{1}{4}(\cos 3x + 3\sin x + \frac{3}{4}\sin x)$ est la fonction $x \mapsto \frac{1}{4}(\frac{1}{3} \sin 3x + 3\sin x + \frac{3}{4}\sin x)$

### Exercice 10

1) Montrer que pour tout $a$ et $b$ dans $\mathbb{R}$ on a :

a) $e^{ia} + e^{ib} = 2 \cos\left(\frac{a+b}{2}\right)e^{i\frac{a+b}{2}}$

b) $e^{ia} - e^{ib} = 2i \sin\left(\frac{a-b}{2}\right)e^{i\frac{a+b}{2}}$

2) Écrire sous forme exponentielle les nombres suivants :

$$ z = 1 + \frac{1}{2} + i \sqrt{\frac{3}{2}} ; z' = 2 - \sqrt{2} - i \sqrt{2} $$
```

<!-- Page 171 -->

```markdown
# Correction de série: Nombres complexes - (II) SC 

## Exercice 11 

1) Déterminer la nature de la transformation $f$ qui associe chaque point $M(z)$ par son image $M'(z')$ tel que $z' = z - 3i$  
2) Déterminer la nature de la transformation $f$ qui associe chaque point $M(z)$ par son image $M'(z')$ tel que $z' = 4z - 3i$  
3) Déterminer la nature de la transformation $f$ qui associe chaque point $M(z)$ par son image $M'(z')$ tel que $f(z) = z' = iz + 2 - i$  

## Solution 

1) a) 
$$ e^{ia} + e^{ib} = e^{\frac{a+b}{2}} \left( e^{\frac{a-b}{2}} + e^{-\frac{a-b}{2}} \right) = 2 \cos \left( \frac{a-b}{2} \right) e^{\frac{a+b}{2}} $$  
Donc : $e^{ia} + e^{ib} = 2\cos \left( \frac{a-b}{2} \right) e^{\frac{a+b}{2}}$  

b) 
$$ e^{ia} - e^{ib} = e^{\frac{a+b}{2}} \left( e^{\frac{a-b}{2}} - e^{-\frac{a-b}{2}} \right) = 2i \sin \left( \frac{a-b}{2} \right) e^{\frac{a+b}{2}} $$  
Donc : $e^{ia} - e^{ib} = 2i \sin \left( \frac{a-b}{2} \right) e^{\frac{a+b}{2}}$  

2) 
$$ z = 1 + \frac{1}{2}i\sqrt{3} = e^0 e^{\frac{\pi}{3}i} $$  

$$ z' = e^{\frac{\pi}{6}} \left( e^{-\frac{\pi}{6}} + e^{\frac{\pi}{6}} \right) = e^{\frac{\pi}{6}} \cdot 2 \cos \left( \frac{\pi}{6} \right) $$  

$$ z' = 2 \cos \left( \frac{\pi}{6} \right) e^{\frac{\pi}{6}} $$ est la forme exponentielle de $z$  

3) 
$$ z' = -2 - \sqrt{2} - i\sqrt{2} = 2 \left[ 1 - \frac{\sqrt{2}}{2} + i\frac{\sqrt{2}}{2} \right] $$  
$$ = 2\ e^{\frac{\pi}{4}i} $$  
$$ = 2 e^{-\frac{\pi}{4}i}$$  

$$ = -4 i \sin \left(\frac{\pi}{8}\right)e^{\frac{\pi}{8}i}; \quad ( \text{car } e^{-\frac{\pi}{8}} = -2i \sin \left(\frac{\pi}{8}\right) ) $$  

$$ z' = e^{\frac{\pi}{8}} e^{\frac{\pi}{2}} = 4 \sin \left( \frac{\pi}{8} \right)e^{\frac{\pi}{2} - \frac{3\pi}{8}} $$  
$$ 4 \sin \left( \frac{\pi}{8} \right) > 0 \quad \Rightarrow \quad 4 \sin \left( \frac{\pi}{8} \right) e^{-\frac{3\pi}{8}i} $$  
```


<!-- Page 172 -->

```markdown
# Prof : Fayssal
## Site web : www.elboutkhili.jimdofree.com

## Exercice 12

1) En utilisant la formule de d'EULER linéariser $cos^2(x)$ puis déduire que $2 \cos^2(x) = 1 + \cos(2x)$  
2) Développer $(cos x + isin x)^2$ avec deux méthodes différentes puis déduire que $sin(2x) = 2 \cos x sin x$  
3) On considère le nombre complexe $a = 2 + \sqrt{3} + i$  
   Montrer que $|a| = 2\sqrt{2 + \sqrt{3}}$  
4) Vérifier que $a = 2 \, (1 + \cos(\frac{\pi}{6})) + 2i \, sin(\frac{\pi}{12})$  
5) Montrer que $a = 4 \cos^2(\frac{\pi}{12}) + 4i \cos(\frac{\pi}{12}) \sin(\frac{\pi}{12})$  
6) Déduire la forme trigonométrique de $a$  
7) Montrer que $a^6 = (2\sqrt{2 + \sqrt{3}})^6 i$  

## Solution

1) En utilisant la formule de d'EULER linéariser $cos^2(x)$ puis déduire que $2 \cos^2(x) = 1 + \cos(2x)$  
On applique une formule d’Euler :  
$$
\cos^2 x = \left( \frac{e^{ix} + e^{-ix}}{2} \right)^2 = \frac{1}{4} \left( (e^{ix})^2 + (e^{-ix})^2 + 2e^{ix}e^{-ix} \right)
$$  
$$
= \frac{1}{4} (e^{2ix} + e^{-2ix} + 2) = \frac{1}{4} (2 \cos(2x) + 2)
$$  
$$
= \frac{1}{2} \cos(2x) + \frac{1}{2}
$$  
Donc : $(\cos(x))^2 = \cos(2x) + 1$  
Donc : $2 \cos^2(x) = 1 + \cos(2x)$  

2) Développer $(cos x + isin x)^2$ avec deux méthodes différentes puis déduire que $sin(2x) = 2 \cos x sin x$  
Selon la formule de Moivre :  
$$(cos x + i sin x)^2 = \cos(2x) + i sin(2x)$$  
Et par la formule $(a + b)^2 = a^2 + 2ab + b^2$:  
$$(cos x + i sin x)^2 = \cos^2 x + i^2 sin^2 x + 2i cos x sin x$$  
$$
= \cos^2 x - sin^2 x + i 2 \cos x sin x
$$  
Donc : $\cos(2x) + i sin(2x) = \cos^2 x - sin^2 x + i 2 \cos x sin x$  
En déduit que : $\cos(2x) = \cos^2 x - sin^2 x$  
Et que : $sin(2x) = 2 \cos x sin x$  

3) On considère le nombre complexe $a = 2 + \sqrt{3} + i$  
   Montrer que $|a| = 2\sqrt{2 + \sqrt{3}}$  
$$
|a| = |2 + \sqrt{3} + i| = \sqrt{(2 + \sqrt{3})^2 + 1}
$$  
$$
= \sqrt{4 + 4\sqrt{3} + 3 + 1}
$$  
$$
= \sqrt{8 + 4\sqrt{3}} = \sqrt{4(2 + \sqrt{3})}
$$  
$$
= 2\sqrt{2 + \sqrt{3}} 
$$  
```

<!-- Page 173 -->

```markdown
4) Vérifier que $ a = 2 \left( 1 + \cos \left( \frac{\pi}{6} \right) \right) + 2 i \sin \left( \frac{\pi}{6} \right) $

1ère méthode :
$$
2 \left( 1 + \cos \left( \frac{\pi}{6} \right) \right) + 2 i \sin \left( \frac{\pi}{6} \right) = 2 \left( 1 + \frac{\sqrt{3}}{2} \right) + 2 i \cdot \frac{1}{2}
$$
$$
= 2 \cdot \frac{\sqrt{3}}{2} + i = a
$$

2ème méthode :
$$
a = 2 + \sqrt{3} + i = 2 + 2 \left( \frac{\sqrt{3}}{2} + \frac{1}{2} i \right)
$$
$$
= 2 + 2 \left( \cos \left( \frac{\pi}{6} \right) + i \sin \left( \frac{\pi}{6} \right) \right)
$$
$$
= 2 \left( 1 + \cos \left( \frac{\pi}{6} \right) \right) + 2 i \sin \left( \frac{\pi}{6} \right)
$$

5) Montrer que $ a = 4 \cos^2 \left( \frac{\pi}{12} \right) + 4 i \cos \left( \frac{\pi}{12} \right) \sin \left( \frac{\pi}{12} \right) $

On a : $ a = 2 \left( 1 + \cos \left( \frac{\pi}{6} \right) \right) + 2 i \sin \left( \frac{\pi}{6} \right) $

Donc : $ a = 2 \left( 1 + \cos \left( 2 \times \frac{\pi}{12} \right) \right) + 2 i \sin \left( 2 \times \frac{\pi}{12} \right) $

Et on a $ 2 \cos^2(x) = 1 + \cos(2x) $ et $ \sin(2x) = 2 \cos x \sin x $

Donc : $ a = 2 \left( 2 \cos^2 \left( \frac{\pi}{12} \right) \right) + 2 \left( 2 \cos \left( \frac{\pi}{12} \right) \sin \left( \frac{\pi}{12} \right) \right) $

Donc : $ a = 4 \cos^2 \left( \frac{\pi}{12} \right) + 4 i \sin \left( \frac{\pi}{12} \right) $

Correction de série : Nombres complexes - (II) SC  Page : 11

11) Déduire la forme trigonométrique de $ a $

On a : $ a = 4 \cos^2 \left( \frac{\pi}{12} \right) + 4 i \cos \left( \frac{\pi}{12} \right) \sin \left( \frac{\pi}{12} \right) $

On a : $ a = 4 \cos \left( \frac{\pi}{12} \right) \left( \cos \left( \frac{\pi}{12} \right) + i \sin \left( \frac{\pi}{12} \right) \right) $

On a : $ \frac{\pi}{12} \in ]0, \frac{\pi}{2}[$ donc $ 4 \cos \left( \frac{\pi}{12} \right) > 0 $

D’où $ 4 \cos \left( \frac{\pi}{12} \right) \left( \cos \left( \frac{\pi}{12} \right) + i \sin \left( \frac{\pi}{12} \right) \right) $ est l’écriture trigonométrique de $ a $

12) Montrer que : $ a^6 = \left( 2\sqrt{2 + \sqrt{3}} \right)^6 i $

$$
a^6 = \left( 2\sqrt{2 + \sqrt{3}} e^{i \frac{\pi}{12}} \right)^6
$$
$$
= \left( 2\sqrt{2 + \sqrt{3}} \right)^6 \left( e^{i \frac{\pi}{12}} \right)^6
$$
$$
= \left( 2\sqrt{2 + \sqrt{3}} \right)^6 e^{i \frac{6\pi}{12}}
$$
$$
= \left( 2\sqrt{2 + \sqrt{3}} \right)^6 e^{i \frac{\pi}{2}}
$$
$$
= \left( 2\sqrt{2 + \sqrt{3}} \right)^6 \left( \cos \frac{\pi}{2} + i \sin \frac{\pi}{2} \right)
$$
$$
= \left( 2\sqrt{2 + \sqrt{3}} \right)^6 i
```

<!-- Page 174 -->

```markdown
# Deuxième bac sciences PC
## /SVT /STE

### Résumé : Fonction exponentielle et étude des fonctions
#### Deuxième bac sciences PC /SVT /STE

### Plan de chapitre : Fonction exponentielle
- Cours détaillé
- Résumé de cours
- Série d’exercices
- Correction détaillée des exercices

admin   
Prof fayssal  
06813999067  
www.elbouthkili.jimdofree.com  
```

<!-- Page 175 -->

```markdown
# www.elbouhtkhili.jimdofree.com
## Résumé : Fonction exponentielle & ln
### 2bac PC/SVT/ST biof
#### Prof: fayssal

### Définition : La fonction exponentielle
- La fonction réciproque de la fonction ln est appelée ft exponentielle, elle est définie et dérivable Sur IR
- Pour tout $x \in \text{IR}$ : $exp(x) = e^x$
- Pour tout $x \in \text{IR}$ : $e^x > 0$ et $e^0 = 1$
- $(e^x)' = e^x \cdot \left( e^{u(x)} \right)' = (e^x) e^{u(x)} = U'(x) e^{u(x)}$

### Propriétés algébriques de la fonction exp
- $e^{x+y} = e^x e^y$ ; $e^x \cdot e^y = e^{x+y}$
- $e^{-x} = \frac{1}{e^x}$
- $e^{-x} = \frac{e^x}{e^{2x}}$ et $(e^x)' = e^x$ ; $r \in \mathbb{Q}$

### Équations et inéquations
- $e^x = e^y \iff x = y$ ; $e^x < e^y \iff x < y$
- $\ln(e^x) = x$ et $\ln(a) = a ; a \geq 0$

### Limites de la fonction exp
- $Fl : \left\{ \begin{array}{l} \lim_{x \to -\infty} e^x = 0 \\ \lim_{x \to +\infty} e^x = +\infty \end{array} \right. $
- $\lim_{x \to \infty} x e^x = 0$ ; $\lim_{x \to +\infty} x e^{-x} = 0$
- $\lim_{x \to 0} x e^{-x} = 1$

### Rappel : Continuité d'une fonction en un point
- $f$ est continue en $a \iff \lim_{x \to a} f(x) = f(a)$
- $f$ est continue à droite de $a \iff \lim_{x \to a^+} f(x) = f(a)$
- $f$ est continue à gauche de $a \iff \lim_{x \to a^-} f(x) = f(a)$
- La fonction $f$ est continue en $a \iff$ est f est continue à droite et à gauche du point a

### Définition fonction logarithme népérien
- La primitive de $x \mapsto \frac{1}{x}$ sur $]0, +\infty[$ qui s'annule en 1 est appelée fonction logarithme népérien on la note par ln
- La fonction ln est définie et dérivable sur l'intervalle $]0, +\infty[$ et $\ln(1) = 0$
- Pour tout $x \in ]0, +\infty[$ : $\ln'(x) = \frac{1}{x}$
- On a : $\ln(e) = 1$ avec le nombre $e$ est un nombre irrationnel ; $e \approx 2,718$

### Propriétés algébriques de la fonction ln
- $\ln(x \cdot y) = \ln(x) + \ln(y)$
- $\ln\left( \frac{x}{y} \right) = \ln(x) - \ln(y)$ ; $\ln(1) = 0$
- $\ln(x^r) = r \ln(x)$ ; $r \in \mathbb{Q}$

### Équations et inéquations
- $\ln(x) = ln(y) \iff x = y$
- $\ln(x) < \ln(y) \iff x < y$
- $\ln(1) = 0$ ; $\ln(x) \to 1 = +\infty$

### Limites de la fonction ln
- $\lim_{x \to 0^+} \ln(x) = -\infty$ ; $\lim_{x \to +\infty} \ln(x) = +\infty$
- $\lim_{x \to 0} x\ln(x) = 0$ ; $\lim_{x \to 0} x^r \ln(x) = 0$
- $\lim_{x \to 1} \frac{\ln(x)}{x-1} = 1$

### Dérivée de la fonction ln(U) avec $U \neq 0$
- Si $U$ est dérivable sur $I$ alors $ln(U)$ est dérivable sur $I$ et on a : $(\ln(U(x)))' = \frac{U'(x)}{U(x)}$

### Les éléments de symétrie de (Cf)
#### Axe de symétrie de (Cf)
- La droite d'équation $(D) : x = a$ est un axe de symétrie de (Cf) si $\forall x \in D : (2a - x) \in D$ et $f(2a - x) = f(x)$

#### Cas particulier
- La fonction $f$ est paire si $\forall x \in D : (-x) \in D$ et $f(-x) = f(x)$
- La droite (Oy) est un axe de symétrie de (Cf)

#### Centre de symétrie de (Cf)
- Le point $A(a ; b)$ est centre de symétrie de (Cf) si $\forall x \in D: (2a - x) \in D$ et $f(2a - x) + f(x) = 2b$

#### Cas particulier
- La fonction est impaire si $\forall x \in D : (-x) \in D$ et $f(-x) = -f(x)$
- Le point $O$ est centre de symétrie de (Cf)
```

<!-- Page 176 -->

```markdown
# Deuxième bac sciences PC /SVT /STE

## Série corrigée : Fonction exponentielle
Deuxième bac sciences PC /SVT /STE

### Plan de chapitre : Fonction exponentielle
- Cours détaillé
- Résumé de cours
- Série d’exercices
- Correction détaillée des exercices
```

<!-- Page 177 -->

```markdown
# Prof : Fayssal
## Site web : www.elboutkhili.jimdofree.com

# Série d’exercices : Fonction exponentielle
## 2 BAC BIOF

## Exercice 01
1) Résoudre dans $\mathbb{IR}$ les équations suivantes :
   - $(E_1) : e^{x+2} = 3$
   - $(E_2) : e^{x^3-x} = 1$
   - $(E_3) : e^{2x} + e^x - 2 = 0$
   - $(E_4) : e^{x^2-3} - e^{-2x} = 0$

2) Résoudre dans $\mathbb{IR}$ les inéquations suivantes :
   - $(I_1) : e^{3x-5} > e$
   - $(I_2) : e^{x^2-2x} < 1$
   - $(I_3) : e^{2x - 3e^x + 2} < 0$
   - $(I_4) : e^{-e^x - 2x} > \frac{1}{e}$

## Exercice 02
Calculer les limites suivantes :
1) $\lim_{x \to +\infty} e^x - x - 1$  
2) $\lim_{x \to -\infty} (x^2 - 3x + 2)e^x$  
3) $\lim_{x \to 0} \frac{1}{x^3}$  
4) $\lim_{x \to +\infty} \frac{(x-2)^2}{e^4}$  
5) $\lim_{x \to -\infty} \frac{e^{-2x}}{e^{-4}}$  
6) $\lim_{x \to 0} e^{2x-e^x}$  
7) $\lim_{x \to +\infty} \frac{e^{x-1}}{x+1}$  
8) $\lim_{x \to -1} \frac{e^x}{x-1}$  
9) $\lim_{x \to +\infty} \left( 1 + \frac{1}{x} \right)^x$  

## Exercice 03
Soit $f$ la fonction définie sur $\mathbb{R}$ par $f(x) = (x + 1)e^x$.
1) Etudier les braches infinies de la courbe de la fonction $f$.
2) Etudier les variations de $f$ et dresser son tableau de variation.
3) Déterminer une équation de la tangente à la courbe en 0.
4) Tracer la courbe représentative de la fonction $f$.

## Exercice 04
Soit une fonction définie sur $I = [0; +\infty[ \text{ par } g(x) = 1 - e^{-\frac{1}{2} x}$. 
1) Montrer que $g$ est strictement décroissante sur $[0; +\infty[$.
2) Montrer que : $\forall x \in [0; +\infty[ : 1 - e^{-\frac{1}{x^2}} < -\frac{1}{2x}$ et déduire $\lim_{x \to 0^+} e^{-\frac{1}{x^2} - x} = -\frac{1}{2x}$.

## Exercice 05
A) Soit $g$ une fonction définie sur $]0; +\infty[$ par : $g(x) = x \ln x - x + 1$.
1) Calculer $\lim_{x \to 0^+} g(x)$ et $\lim_{x \to +\infty} g(x)$.
2) Montrer que : $\forall x \in ]0; +\infty[$ : $g'(x) = \ln(x)$.
3) Dresser le tableau de variations de $g$ sur $]0; +\infty[$.
B) If une fonction définie sur $I = ]1; +\infty[$ par : $f(x) = (ln x - 1) e^{x-1}$.
1) Montrer que $\lim_{x \to +\infty} f(x) = -\infty$ et interpréter le résultat géométriquement.
2) Etudier la branche infinie de $(C_f)$ au voisinage de $+\infty$.
3) a) Montrer que : $\forall x \in [0; +\infty[$, $f'(x) = \frac{g(x)}{x} e^{x-1}$.
4) Dresser le tableau de variation de $f$ justifiant votre réponse.
5) Déterminer l’équation de la tangente $(T)$ à $(C_f)$ au point 1.
6) Soit une fonction définie sur $I$ par : $h(x) = 2x + x^2 \ln x - x^2 - 1$.
   - a) Calculer $h(1)$ puis déterminer le signe de $h$ sur $I = ]0; +\infty[$.
   - b) Montrer que : $\forall x \in [0; +\infty[$, $h''(x) = \frac{h(x)}{x^2} e^{x-1}$.
7) Tracer $(C_f)$ et $(C_f^{-1})$ dans un repère orthonormé $(O; \vec{i} \vec{j})$.
```

<!-- Page 178 -->

```markdown
# Prof : Fayssal
# Site web : www.elboutkhili.jimdofree.com

## Exercice 06

**A)** Soit $g$ la fonction définie sur $\mathbb{R}$ par $g(x) = (1 - x)e^{2 - x} + 1$

1) Montrer que $\lim_{x \to -\infty} g(x) = -\infty$ et $\lim_{x \to +\infty} g(x) = 1$

2) Montrer que $\forall x \in \mathbb{R}$ ; $g'(x) = (x - 2)e^{2 - x}$

3) Dresser le tableau de variations de $g$

**B)** Soit $f$ une fonction définie sur $\mathbb{R}$ par : $f(x) = x - 2 + x e^{2 - x}$

1) Montrer que $\lim_{x \to -\infty} f(x) = -\infty$ et $\lim_{x \to +\infty} f(x) = +\infty$

2) a) Montrer que : $\forall x \in \mathbb{R}$ ; $f'(x) = g(x)$

b) Dresser le tableau de variation de $f$

3) a) Montrer que la droite $(D) : y = x - 2$ est asymptote oblique de $(C_f)$ au voisinage de $+\infty$

b) Etudier la position relative de $(C_f)$ par rapport à $(D)$

4) Montrer que $\lim_{x \to -\infty} f(x) = +\infty$ puis en déduire la branche infinie de $(C_f)$ au voisinage de $-\infty$

5) a) Montrer que $(C_f)$ admet un point d’inflexion unique de coordonnées $(2; 2)$

b) Déterminer l’équation de la tangente $(T)$ au point d’abscisse $2$

6) Montrer que l’équation $f(x) = 0$ admet une unique solution dans $\mathbb{R}$ et que : $0 < \alpha < 1$

7) Tracer $(C_f)$ dans un repère $(O; \hat{i}; \hat{j})$

## Exercice 07

On considère la fonction $f$ définie par

$$ f(x) = 2x + \frac{e^x}{e^x - 1} $$

1) Vérifier que $D_f = \mathbb{R}^*$

2) Calculer $\lim_{x \to 0^+} f(x)$ et $\lim_{x \to 0^-} f(x)$, puis interpréter graphiquement les résultats obtenus.

---

## Exercice 08

Soit $f$ une fonction définie par : $f(x) = x + \ln(|e^x - 1|)$

1) Déterminer $D_f$ puis calculer $f(-\ln 2)$ ; $\lim_{x \to +\infty} f(x)$ et $\lim_{x \to -\infty} f(x)$.

2) Montrer que : $\forall x \in D_f ; f'(x) = \frac{2e^{x-1}}{e^x - 1}$, puis dresser le tableau de variations de la fonction $f$

3) Montrer que la droite $(D) : y = 2x$ est asymptote oblique de $(C_f)$ au voisinage de $+\infty$

4) a) Montrer que la droite $(D') : y = x$ est asymptote oblique de $(C_f)$ au voisinage de $-\infty$

b) Etudier la position relative de $(C_f)$ et $(D')$ sur $]-\infty ; 0[$

6) Montrer que l’équation $f(x) = 0$ admet une unique solution $\alpha$ tel que $\alpha \in [0; \ln(2)]$

7) Tracer $(C_f)$ dans un repère orthonormé $(O; \hat{i}; \hat{j})$
```

<!-- Page 179 -->

```markdown
# Prof : Fayssal  
## Site web : www.elboutkhili.jimdo.com  
# Exercice 01  

3) Résoudre dans $\mathbb{R}$ les équations suivantes :  
$(E_1) : e^{x+2} = 3$ ; $(E_2) : e^{x^3-x} = 1$  
$(E_3) : e^{2x} + e^{2 - 2} = 0$ ; $(E_4) : e^{2 - 3} - e^{-2x} = 0$  

4) Résoudre dans $\mathbb{R}$ les inéquations suivantes :  
$(I_1) : e^{3x - 5} > e$ ; $(I_2) : e^{2 - 2x} < 1$  
$(I_3) : e^{2x} - 3e^x + 2 < 0$ ; $(I_4) : e^{2 - x} - e^{-2x} > \frac{1}{e^2}$  

## Solution :  

$(E_1) \iff e^{x+2} = 3$  
$$ \iff e^{x+3} = e^{\ln(3)} $$  
$$ \iff x + 2 = \ln 3 $$  
$$ \iff x = \ln(3) - 2 $$  
Donc $S = \{\ln(3) - 2\}$  

$(E_2) \iff e^{x^3 - x} = e^0 \iff x^3 - x = 0$  
$$ \iff x(x^2 - 1) = 0 $$  
$$ \iff x = 0 \text{ ou } x = -1 $$  
Donc $S = \{-1; 0; 1\}$  

$(E_3) \iff 2^{x} + e^x - 2 = 0$  
On pose : $X = e^x$  
$(E_1) \iff X^2 + X - 2 = 0$  
Le discriminant de l’équation est $\Delta = 9 > 0$  
Donc l’équation $X^2 + X - 2$ a deux solutions sont :  

$$ X = 1 \text{ ou } X = -2 $$  
Donc $e^x = 1 \text{ ou } e^x = -2$ n’admet pas de solution.  
Donc $x = 0$  
D'où $S = \{0\}$  

$(E_4) \iff e^{2x - 3} - e^{-2x} = 0$  
$$ \iff e^{2x - 3} = e^{-2x} $$  
$$ \iff x^2 - 3 = -2x $$  
$$ \iff x^2 + 2x - 3 = 0 $$  
$$ \Delta = 2^2 - 4 \cdot 1 \cdot (-3) = 16 $$  
Donc $x = \frac{-2 - \sqrt{16}}{2 \cdot 1} = -3 \text{ ou } x = \frac{-2 + \sqrt{16}}{2 \cdot 1} = 1$  
Les solutions sont -3 et 1.

$(I_1) \iff e^{3x - 5} > e \iff e^{3x - 5} > e^1$  
$$ \iff 3x - 5 > 1 $$  
$$ \iff 3x > 6 $$  
$$ \iff x > 2 $$  
$$ x \in ]2; +\infty[ $$  
Donc $S = ]2; +\infty[$
```

<!-- Page 180 -->

```markdown
Prof : Fayssal  
Site web : www.elboutkhili.jimdofree.com  
Correction de série : Exponentielle  
2 BAC BIOF  
Page 02  

$(I_2) \iff e^{x^2-2x} < 1$  
$$ \iff e^{x^2-2x} < e^0 $$  
$$ \iff x^2 - 2x < 0 $$  
$$ \iff x^2 - 2x + 1 < 1 $$  
$$ \iff (x - 1)^2 \leq |x - 1| < 1 $$  
$$ -1 < x - 1 < 1 $$  
$$ 0 < x < 2 $$  
$$ \iff x \in [0; 2[ $$  
Donc $S = ]0; 2[$  

$(I_3) \iff e^{2x} - 3e^x + 2 < 0$  
$$ \iff (e^x)^2 - 3e^x + 2 < 0 $$  
➤ Résolvons l’équation $(e^x)^2 - 3e^x + 2 = 0$  
On pose : $X = e^x$  
$$(E_1) \quad X^2 - 3X + 2 = 0$$  
Le discriminant de l’équation $\Delta = 1 > 0$  
Donc l’équation $X^2 - 3X + 2 = 0$ admet deux solutions sont :  
$$ X = 1 \quad \text{ou} \quad X = 2 $$  
Donc $e^x = 1 \quad \text{ou} \quad e^x = 2$  
Donc $x = 0 \quad \text{ou} \quad x = \ln(2)$  
➤ Le tableau de signe de $e^{2x} - 3e^x + 2$  
$$ 
\begin{array}{c|c|c|c|c}
x & -\infty & 0 & \ln(2) & +\infty \\
\hline
e^{2x} - 3e^x + 2 & + & 0 & - & + \\
\end{array} 
$$  
Donc $S = ]-\infty; -2[ \cup ]-1; +\infty[$  

$(I_4) \iff e^{x^2+x} e^{2x} > \frac{1}{e^2}$  
$$ \iff e^{x^2+3x} > e^{-2} $$  
$$ \iff x^2 + 3x > -2 $$  
$$ \iff x^2 + 3x + 2 > 0 $$  
Le discriminant de l’équation $x^2 + 3x + 2 = 0$ est $\Delta = 1 > 0$  
Donc l’équation $x^2 + 3x + 2 = 0$ admet deux solutions sont :  
$$ x = -1 \quad \text{ou} \quad x = -2 $$  
➤ Le tableau de signe de $x^2 + 3x + 2$  
$$ 
\begin{array}{c|c|c|c|c}
x & -\infty & -2 & -1 & +\infty \\
\hline
x^2 + 3x + 2 & + & 0 & - & 0 \\
\end{array} 
$$  
Donc $S = ]-\infty; -2[ \cup ]-1; +\infty[$  
```

<!-- Page 181 -->

```markdown
# Prof : Fayssal  
Site web : www.elbouthkili.jimdofree.com  
## Exercice 02

Calculer les limites suivantes :  
1) $ \lim_{x \to +\infty} e^x - 1 $  
2) $ \lim_{x \to -\infty} (x^2 - 3x + 2)e^x $  
3) $ \lim_{x \to 0^+} \frac{x}{e^x} $  
4) $ \lim_{x \to 0} (x^{-2}) e^{-4} $  
5) $ \lim_{x \to 0} (X - 2)^2 e^{-4} $  
6) $ \lim_{x \to 0} \frac{e^{2x} - e^{3x}}{x} $  
7) $ \lim_{x \to +\infty} \frac{e^x - 1}{e^x + 1} $  
8) $ \lim_{x \to +\infty} \frac{e^x - x}{e^x - 1} $  
9) $ \lim_{x \to +\infty} \left(1 + \frac{1}{x}\right)^x $  

## Solution :  

1) Il s'agit d'une forme indéterminée de type "$+\infty - \infty$".  
$$ \lim_{x \to +\infty} e^x - 1 = \lim_{x \to +\infty} \left(\frac{e^x}{x - 1} - 1\right) = 1 - \infty $$  

2) Il s'agit d'une forme indéterminée de type "$+\infty \cdot 0$".  
$$ \lim_{x \to -\infty} (x^2 - 3x + 2)e^x = \lim_{x \to -\infty} (-3x^2 + 2e^x) = 0 $$  

3) Il s'agit d'une forme indéterminée de type "$0/0$".  
On pose $X = \frac{1}{x}$ donc $ x = 0^+ \Leftrightarrow x \to +\infty $  
$$ \lim_{x \to 0^+} \frac{1}{x} = \lim_{x \to +\infty} e^X = e^{+\infty} $$  

4) Il s'agit d'une forme indéterminée de type "$\infty - \infty$".  
$$ \lim_{x \to 0} (x - 2)e^{-4} = 1 \text{ et } e^{-4} > 0 $$  

5) Il s'agit d'une forme indéterminée de type "$\infty - \infty$".  
$$ \lim_{x \to 0} (X - 2)^2 e^{-4} = \infty $$  

6) Il s'agit d'une forme indéterminée de type "$\frac{0}{0}$".  
$$ \lim_{x \to 0} \frac{e^{2x} - e^{3x}}{x} = \lim_{x \to 0} e^{2x}-1 = -1 $$  

7) Il s'agit d'une forme indéterminée de type "$\frac{0}{1}$".  
$$ \lim_{x \to +\infty} \frac{1}{e^x} = 0 $$  

8)  
$$ \lim_{x \to +\infty} \frac{e^x - x}{e^x - 1} = 1 - 0 = 1 $$  

9)  
On pose $X = \frac{1}{x}$ donc $ x = 0^+ \Leftrightarrow x \to +\infty $  
$$ \lim_{x \to +\infty} e^X \ln \left(1+\frac{1}{x}\right) = \lim_{x \to +\infty} e^X \ln(1 + X) = e $$  
D'où $$ \lim_{x \to +\infty} \left(1 + \frac{1}{x}\right)^x = e $$  
```

<!-- Page 182 -->

```markdown
# Prof : Fayssal
Site web : www.elboutkhili.jimdo.free.com

## Exercise 3

Soit $f$ la fonction définie sur $\mathbb{R}$ par $f(x) = (x + 1)e^x$.
1) Etudier les branches infinies de la courbe de la fonction $f$.
2) Calculer la dérivée de la fonction $f$, puis dresser son tableau de variations.
3) Déterminer une équation de la tangente à la courbe en 0.
4) Tracer la courbe représentative de la fonction $f$.

### Solution :
1) 
$$ \lim_{x \to -\infty} f(x) = \lim_{x \to -\infty} (x + 1)e^x $$
$$ = \lim_{x \to -\infty} xe^x + e^x = 0 $$

Car $$ \lim_{x \to -\infty} xe^x = 0 $$ et $$ \lim_{x \to -\infty} e^x = 0 $$

Donc la droite d’équation $y = 0$, c-à-dire l’axe des abscisses est une asymptote horizontale à la courbe de $f$ au voisinage de $-\infty$.

$$ \lim_{x \to +\infty} f(x) = \lim_{x \to +\infty} (x + 1)e^x $$
$$ = +\infty $$

Car $$ \lim_{x \to +\infty} (x + 1) = +\infty $$ et $$ \lim_{x \to +\infty} e^x = +\infty $$

Donc la courbe (Cf) admet une branche parabolique de direction l'axe des ordonnées au voisinage de $+\infty$.

2) 
$$ f'(x) = e^x + (x + 1)e^x $$
$$ = (x + 2)e^x $$

Comme $e^x > 0$, $f'(x)$ est du signe de $x + 2$.

$f$ est donc décroissante sur l'intervalle $]-\infty ; -2]$ et croissante sur l'intervalle $[-2 ; +\infty[$.

Et on dresse le tableau de variations :

| $x$  | $-\infty$ | $-2$ | $+\infty$ |
|------|-----------|------|-----------|
| $f'(x)$ | $-$       | $0$  | $+$       |
| $f(x)$ | $0$       | $-\mathrm{e}^{-2}$ | $+\infty$ |
```

<!-- Page 183 -->

```markdown
# Prof : Fayssal
Site web : www.elboutkhili.jimdofree.com  
Correction de série : Exponentielle  
2 BAC BIOF  
Page 05

## 3)
$f(0) = 1$ et $f'(0) = 2$  
Une équation de la tangente à la courbe en 0 est donc :  
$$ y = f'(0)(x - 0) + f(0), $$  
Donc $y = 2x + 1$

## 4)

### Exercice 04
$g$ une fonction définie sur $I = [0; +\infty[$ par $g(x) = 1 - e^{-\frac{1}{2} x - \frac{1}{2} x}$  

1) Montrer que $g$ est strictement décroissante sur $[0; +\infty[$  
2) Montrer que : $(\forall x \in [0; +\infty[) : \frac{1 - e^{-\frac{1}{2} x - x}}{x^2} < -\frac{1}{2x}$ et déduire  
$$ \lim_{x \to 0+} \frac{1 - e^{-\frac{1}{2} x - x}}{x^2} = -\infty $$

### Solution
1) la fonction $g$ est dérivable sur $[0; +\infty[$  
Et on a : $\forall x \in I ; g'(x) = \frac{1}{2} e^{-\frac{1}{2} x - \frac{1}{2} (e^{-\frac{1}{2} x - 1)}$  
$x \geq 0 \leftrightarrow -\frac{1}{2} x \leq 0$  
$\Rightarrow e^{-\frac{1}{2} x} \leq e^0$  
$\Rightarrow e^{-\frac{1}{2} x - 1} \leq 0$  
$\frac{1}{2} (e^{-\frac{1}{2} x - 1}) \leq 0$  
Donc $g'(x) \leq 0$

2) Soit $x \in [0; +\infty[$  
$x > 0$ et $g$ est strictement décroissante sur $[0; +\infty[$ $\Rightarrow g(x) < g(0)$  
$\Rightarrow g(x) < 0 \Rightarrow 1 - e^{-\frac{1}{2} x} < -\frac{1}{2} x$  
$\Rightarrow 1 - e^{-\frac{1}{2} x - x} < -\frac{1}{2} x$  
$$ \Rightarrow \frac{1 - e^{-\frac{1}{2} x - x}}{x^2} < -\frac{1}{2x} $$  
On a : $(\forall x \in [0; +\infty[) : \frac{1 - e^{-\frac{1}{2} x - x}}{x^2} < -\frac{1}{2x}$  
et déduire  
$$ \lim_{x \to 0+} \frac{1 - e^{-\frac{1}{2} x - x}}{x^2} = -\infty $$
```

<!-- Page 184 -->

```markdown
# Prof : fayssal
Site web : www.elbouthkili.jimdofree.com

## Exercice 05

A) Soit $g$ une fonction définie sur $]0; +\infty[$ par : $g(x) = x \ln x - x + 1$

1) Calculer $\lim_{x \to 0^+} g(x)$ et $\lim_{x \to +\infty} g(x)$

2) Montrer que : $\forall x \in ]0; +\infty[$, $g'(x) = \ln(x)$

3) Dresser le tableau de variations de $g$ sur $]0; +\infty[$

4) Montrer que : $\forall x \in ]0; +\infty[,\ g(x) \geq 0$

B) Soit une fonction définie sur $I = ]0; +\infty[$ par : $f(x) = (ln x - 1) e^{x - 1}$

1) Montrer que $\lim_{f(x)} = -\infty$ et interpréter le résultat géométriquement

2) Étudier la branche infinie de $(C_f)$ au voisinage de $+\infty$

3) a) Montrer que : $\forall x \in ]0; +\infty[$, $f'(x) = \frac{g(x)}{x} e^{x-1}$  
b) Dresser le tableau de variation de $f$ en justifiant votre réponse

4) Déterminer l'équation de la tangente $(T)$ de $(C_f)$ au point 1

5) Soit une fonction définie sur $I$ par : $h(x) = 2x + x^2 \ln x - x^2$  
Le tableau suivant présente les variations de $h$ sur $I = ]0; +\infty[$

| $x$  | $0$  | $+\infty$ |
|------|------|-----------|
| $h(x)$ | $-\infty$ | $+\infty$ |

6) Calculer $h(1)$ puis déterminer le signe de $h$ sur $I = ]0; +\infty[$

7) Montrer que : $\forall x \in ]0; +\infty[,\ f''(x) = \frac{h(x)}{x^2} e^{x-1}$

8) Étudier la convexité de $(C_f)$ puis justifier que la courbe $(C_f)$ admet un point d'inflexion unique au point d'abscisse 1

5) Résoudre dans l'équation $f(x) = 0$ puis interpréter le résultat géométriquement

6) Montrer que $f$ admet une fonction réciproque $f^{-1}$ sur un intervalle à déterminer

7) Tracer $(C_f)$ et $(C^{-1})$ dans un repère orthonormé $(O; \vec{i}; \vec{j})$

---

## Correction de série : Exponentielle

### Solution

A) Soit $g$ une fonction définie sur $]0; +\infty[$ par : $g(x) = x \ln x - x + 1$

1) Calculer $\lim_{x \to 0^+} g(x)$ et $\lim_{x \to +\infty} g(x)$

$$
\lim_{x \to 0^+} g(x) = \lim_{x \to 0^+} x \ln x - x + 1 = 1
$$

Car $\lim_{x \to 0^+} x \ln x = 0$ et $-x + 1 = 1$

$$
\lim_{x \to +\infty} g(x) = \lim_{x \to +\infty} x \ln x - x + 1 = +\infty
$$

2) Montrer que : $\forall x \in ]0; +\infty[$, $g'(x) = \ln(x)$

3) Dresser le tableau de variations de $g$ sur $]0; +\infty[$

Soit $x \in ]0; +\infty[$

$$
g'(x) = 1 \times \ln(x) + x \times \frac{1}{x} - 1 + 0
$$

$$
= \ln(x) + 1 - 1 = \ln(x)
$$

Donc : $\forall x \in ]0; +\infty[,\ g'(x) = \ln(x)$

4) Montrer que : $\forall x \in ]0; +\infty[,\ g(x) \geq 0$

Le nombre 0 est une valeur minimale de la fonction $g$ sur $]0; +\infty[$  
Donc : $\forall x \in ]0; +\infty[,\ g(x) \geq 0$
```

<!-- Page 185 -->

```markdown
# Prof : fayssal   
Lycée ABD EL MOUMENE OUJDA 2BAC-SM  
Cours : Fonction exponentielle  Page 07  

B) $f$ une fonction définie sur $]0 ; +\infty[$ par : $f(x) = (ln x - 1) e^{x-1}$  

1) Montrer que $\lim_{x \to 0^+} f(x) = -\infty$  
$$ \lim_{x \to 0^+} f(x) = \lim_{x \to 0^+} (ln x - 1) e^{x-1} = -\infty $$  
Car : $\lim_{x \to 0^+} ln x = -\infty$ et $\lim_{x \to 0^+} e^{x-1} = e^{-1} > 0$  

Interpréter le résultat géométriquement  
On a : $\lim_{x \to 0^+} f(x) = -\infty$ donc la droite d'équation $x = 0$ ; c-à-d l’axe des ordonnées est une asymptote verticale à la courbe $(C_f)$  

2) Etudier la branche infinie de $(C_f)$ au voisinage de $+\infty$  
$$ \lim_{x \to +\infty} f(x) = \lim_{x \to +\infty} (ln x - 1) e^{x-1} = \lim_{x \to +\infty} (ln x - 1) e^{x} = +\infty $$  
Car :  
$$ \lim_{x \to +\infty} (ln x - 1) = +\infty $$ et  $$ \lim_{x \to +\infty} e^{x} = +\infty $$  
On a : $\lim_{x \to +\infty} f(x) = +\infty$   

Donc la courbe $(C_f)$ admet une branche parabolique de direction l’axe des ordonnées au voisinage de $+\infty$  

3) a) Montrer que : $\forall x \in ]0; +\infty[; f'(x) = \frac{g(x)}{x} e^{x-1}$  
La fonction $x \mapsto ln x - 1$ est dérivable sur $]0; +\infty[$  
La fonction $x \mapsto e^{x-1}$ est dérivable sur $]0; +\infty[$  
Donc la fonction $f$ est dérivable sur l’intervalle $]0; +\infty[$ car c’est une somme de deux fonctions dérivables sur $]0; +\infty[$  

b) Dresser le tableau de variation de $f$ en justifiant votre réponse  
Soit $x \in ]0; +\infty[$  
On a : $f'(x) = \frac{g(x)}{x} e^{x-1}$  
Et on a : $x > 0$ et $e^{x-1} > 0$ et d’après la partie A) : $g(x) \geq 0$  
Donc $f'(x) \geq 0$  

D'où la fonction $f$ est strictement croissante sur $]0; +\infty[$  

| $x$ | $0$  | $+\infty$ |
|-----|------|-----------|
| $f'(x)$ | + |  + |
| $f(x)$ | $-\infty$ |  $+\infty$ |

c) Déterminer l’équation de la tangente $(T)$ de $(C_f)$ au point 1  
$(T) : y = f'(1)(x - 1) + f(1)$  
On a : $f'(1) = g(1) e^{1-1} = g(1) = 0$ et $f(1) = -1$  
Donc : $(T) : y = -1$
```

<!-- Page 186 -->

```markdown
# Prof : fayssal
## Site web : www.elbouthkili.jimdofree.com
### Correction de série : Exponentielle 2 BAC BIOF Page 08

4) Soit $h$ une fonction définie sur $I$ par : $h(x) = 2x + x^2 \ln x - x^2 - 1$

a) Calculer $h(1)$ puis déterminer le signe de $h$ sur $I = [0; +\infty[$
$$ h(x) = 2 + \ln 1 - 1 = 0 $$

On distingue deux cas : $x \in [0; 1]$ et $x \in [1; +\infty[$

Soit : $x \in [0; 1]$  
$x \in [0; 1] \Rightarrow x \leq 1$ et $h$ est strictement croissante sur $]0; 1[$  
$$ \Rightarrow h(x) \leq h(1) $$  
$$ \Rightarrow h(x) \leq 0 $$

Soit : $x \in [1; +\infty[$  
$x \in [1; +\infty[ \Rightarrow 1 \leq x$ et $h$ est strict croissante sur $[1; +\infty[$  
$$ \Rightarrow h(1) \leq h(x) $$  
$$ 0 < h(x) $$

On dresse le tableau de signe de $h$ sur $]0; +\infty[$

\[
\begin{array}{|c|c|c|}
\hline
x & 0 & 1 \\
\hline
h(x) & - & 0 & + \\
\hline
\end{array}
\]

b) Montrer que : $\forall x \in [0; +\infty[$ : $h''(x) = \frac{h(x)}{x^2} e^{x-1}$
On a : $h' = e^{x-1} g(x)$ avec 
$$ g(x) = \frac{1}{x} $$

Donc : 
$$ h''(x) = \left[ e^{x-1} g'(x) + e^{x-1} g(x) \right]x - e^{x-1} g(x) $$
$$ h''(x) = \frac{e^{x-1} (x \ln x - 1)}{x^2} $$

$$ h''(x) = \frac{e^{x-1} (2x + x^2 \ln x - x - 1)}{x^2} $$

$$ h''(x) = \frac{e^{x-1} h(x)}{x^2} $$

c) Etudier la convexité de $(Cf)$ puis justifier que la courbe $(Cf)$ admet un point d'inflexion unique au point d'abscisse 1

On a : 
$$ h''(x) = \frac{e^{x-1} h(x)}{x^2} $$ 
de plus $e^{x-1} > 0$ et $x^2 > 0$

Donc le signe de $h''$ est le signe de $h$ sur $]0; +\infty[$

On a : $h''$ s'annule et change de signe en 1 donc le point $A(1; 0)$ est un point d'inflexion de $(Cf)$

5) Résoudre dans $I$ l’équation $f(x) = 0$ puis interpréter le résultat géométriquement
$$ f(x) = 0 \Leftrightarrow (ln x - 1) e^{x-1} = 0 $$
$$ \Leftrightarrow ln x - 1 = 0 \quad \text{car } e^{x-1} > 0$$  
$$ \Leftrightarrow ln x = 1 $$
$$ \Leftrightarrow x = e $$

**Interprétation géométrique**  
La courbe $(Cf)$ coupe l'axe des abscisses au point $A(e; 0)$

6) Montrer que $f$ admet une fonction réciproque $f^{-1}$ sur un intervalle $]a; b[$ à déterminer

La fonction $f$ est dérivable sur l'intervalle $[0; +\infty[$ donc elle est continue sur $[0; +\infty[$

Donc la fonction $f$ est strictement croissante sur $]0; +\infty[$  
Ainsi la fonction $f$ admet une fonction réciproque $f^{-1}$ définie sur un intervalle $]J$ tel que $J = f(0; +\infty[) = ]-\infty; +\infty[$
```

<!-- Page 187 -->

```markdown
# 7) Tracer et $(Cf)$ et $(Cf^{-1})$ dans un repère orthonormé $(O; \vec{i}; \vec{j})$

## Correction de série : Exponentielle

### Exercice 06

A) Soit $g$ la fonction définie sur $\mathbb{R}$ par $g(x) = (1 - x)e^{2 - x} + 1$
1) Montrer que $\lim_{x \to -\infty} g(x) = +\infty$ et $\lim_{x \to +\infty} g(x) = 1$
2) Montrer que : $\forall x \in \mathbb{R}; \; g'(x) = (x - 2)e^{2 - x}$
3) Dresser le tableau de variations de $g$
4) Montrer que : $\forall x \in \mathbb{R} : g(x) \geq 0$

B) Soit $f$ une fonction définie sur $\mathbb{R}$ par $f(x) = x - 2 + x e^{-x}$
1) Montrer que $\lim_{x \to -\infty} f(x) = -\infty$ et $\lim_{x \to +\infty} f(x) = +\infty$
2) a) Montrer que : $\forall x \in \mathbb{R}; \; f'(x) = g(x)$  
   b) Dresser le tableau de variation de $f$

3) a) Montrer que la droite $(\Delta) : y = x - 2$ est asymptote oblique de $(Cf)$ au voisinage de $+\infty$  
   b) Étudier la position relative de $(Cf)$ par rapport à $(\Delta)$  

4) Montrer que $\lim_{x \to -\infty} \frac{f(x)}{x} = -\infty$ puis en déduire la branche infinie de $(Cf)$ au voisinage de $-\infty$

5) a) Montrer que $(Cf)$ admet un point d'inflexion unique de coordonnées $(2; 2)$  
   b) Déterminer l'équation de la tangente $(T)$ au point 2  
   6) Montrer que l'équation $f(x) = 0$ admet une unique solution dans $\mathbb{R}$ et que : $0 < \alpha < 1$

7) Tracer $(Cf)$ dans un repère $(O; \vec{i}; \vec{j})$ ; (On admet que $\alpha \approx 0.3$)

## Solution

A) Soit $g$ la fonction définie sur $\mathbb{R}$ par $g(x) = (1 - x)e^{2 - x} + 1$

1) Montrer que $\lim_{x \to -\infty} g(x) = +\infty$ et $\lim_{x \to +\infty} g(x) = 1$
   $$ 
   \lim_{x \to -\infty} g(x) = \lim_{x \to -\infty} (1 - x)e^{2 - x} + 1 
   $$
   On a : $\lim_{x \to -\infty} 2 - x = +\infty$ donc $e^{2 - x} = +\infty$ et $1 - x \to +\infty$  
   Donc : $\lim_{x \to -\infty} g(x) = +\infty$  
   $$ 
   \lim_{x \to +\infty} g(x) = \lim_{x \to +\infty} (1 - x)e^{2 - x} + 1 
   $$
```

<!-- Page 188 -->

```markdown
# Prof : fayssal 
Site web : www.elboutkhili.jimdo.free.com

1) $$ \lim_{x \to +\infty} g(x) = \lim_{x \to +\infty} (1 - x)e^{2 - x} + 1 $$

   $$ = \lim_{x \to +\infty} \frac{e^2}{e^x} \left( - e^2 + \frac{x}{x} + 1 \right) $$

   $$ = 1 $$

   (Car: $$ \lim_{x \to +\infty} e^x = +\infty $$ donc $$ \lim_{x \to +\infty} e^2 \cdot e^x = 0 $$)

   et $$ \lim_{x \to +\infty} \frac{e^x}{x} = +\infty $$ donc $$ \lim_{x \to +\infty} \frac{1}{e^x} = 0 $$

2) Montrer que :  $$ \forall x \in \mathbb{R}; \; g'(x) = (x - 2)e^{2 - x} $$

   Soit $$ x \in \mathbb{R} $$

   $$ g'(x) = -1 \cdot x e^{-x} + (1 - x) \cdot (-e^{-2 - x}) + 0 $$

   $$ = -e^{-2 - x} (1 - x) $$

   $$ = -e^{-2 - x} + x e^{2 - x} $$

   $$ = (x - 2)e^{2 - x} $$

3) Dresser le tableau de variations de g

   On a $$ x \in ] -\infty; 2]; \; x - 2 \leq 0 $$ et $$ \forall x \in [2; +\infty[; \; x - 2 \geq 0 $$, donc

   $$ \begin{array}{c|ccc}
   x & -\infty & 2 & +\infty \\
   \hline
   g'(x) & - & 0 & + \\
   g(x) & 1 & \rightarrow & +\infty \\
   g(2) & \\
   \end{array} $$

4) Montrer que : $$ \forall x \in \mathbb{R}; \; g(x) \geq 0 $$

   Le nombre $$ 0 $$ est une valeur minimale de la fonction $$ g $$ sur $$ \mathbb{R} $$.

   Donc : $$ \forall x \in \mathbb{R}; \; g(x) \geq 0 $$
```

<!-- Page 189 -->

```markdown
## Correction de série : Exponentielle 2 BAC BIOF Page 11

### b) Dresser le tableau de variation de $f$

Soit $x \in \mathbb{R}$

On a : $f'(x) = g(x)$

D'après la partie A) : $g(x) \geq 0$

Donc $f'(x) \geq 0$

D'où la fonction $f$ est strictement croissante sur $\mathbb{R}$

| $x$        | $-\infty$ | $+\infty$ |
|------------|-----------|-----------|
| $f'(x)$    | +         |           |
| $f(x)$    |           | $+\infty$ |

### 3) a) Montrer que la droite $(\Delta) : y = x - 2$ est asymptote oblique de $(C_f)$ au voisinage de $+\infty$

On a : $\lim_{x \to +\infty} f(x) = +\infty$

* $\lim_{x \to +\infty} f(x) - (x - 2) = \lim_{x \to +\infty} x e^{2-x} - (x - 2)$
  
  $= \lim_{x \to +\infty} e^{2-x} (x - (x - 2))$

  $= \lim_{x \to +\infty} e^{2-x} \cdot 2$

  $= \lim_{x \to +\infty} e^{2} \cdot \frac{1}{e^{x}} = 0$

Car $\lim_{x \to +\infty} \frac{e^x}{x} = +\infty$ donc $\lim_{x \to +\infty} \frac{1}{x} = 0$

On a : $\lim_{x \to +\infty} f(x) = +\infty$ et $\lim_{x \to +\infty} (x - 2) = 0$ ;

donc la droite $(\Delta) : y = x - 2$ est asymptote oblique de $(C_f)$ au voisinage de $+\infty$

### 4) Montrer que $\lim_{x \to -\infty} \frac{f(x)}{x} = +\infty$ puis en déduire la branche infinie de $(C_f)$ au voisinage de $-\infty$

On a :

$$ \lim_{x \to -\infty} \frac{f(x)}{x} = \lim_{x \to -\infty} \frac{x - 2 + x e^{2-x}}{x} $$

$$ = \lim_{x \to -\infty} \left( 1 - \frac{2}{x} + e^{2-x} \right) $$

$$ = +\infty $$

Car $\lim_{x \to -\infty} 2 - x = +\infty$ donc $\lim_{x \to -\infty} e^{2-x} = +\infty$ et $\lim_{x \to -\infty} \frac{2}{x} = 0$

On a : $\lim_{x \to -\infty} f(x) = +\infty$ et $\lim_{x \to -\infty} \frac{f(x)}{x} = +\infty$

Donc la courbe $(C_f)$ admet une branche parabolique de direction l'axe des ordonnées au voisinage de $-\infty$
```

<!-- Page 190 -->

```markdown
5) a) Montrer que $(C_f)$ admet un point d'inflexion unique de coordonnées $(2; 2)$  
On a : $f''(x) = g'(x) = (x - 2)e^{-x}$  
On a $\forall x \in ]-\infty; 2]; \, x - 2 \leq 0 \; \text{et} \; \forall x \in [2; +\infty[; \, x - 2 \geq 0, \, donc :$ 

\[
\begin{array}{|c|c|c|c|}
\hline
x & -\infty & 2 & +\infty \\
\hline
f''(x) & - & 0 & + \\
\hline
\end{array}
\]

On a : $f''$ s'annule et change de signe en $2$ donc le point $A(2; f(2))$ c-à-dire est une point d'inflexion de $(C_f)$  
b) Déterminer l'équation de la tangente $(T)$ au point $2$  
$(T): y = f'(2)(x - 2) + f(2)$  
On a : $f'(2) = g(2) = 2 \; \text{et} \; f(2) = 2$  
Donc : $(T): y = 2$  

6) Montrer que l'équation $f(x) = 0$ admet une unique solution $\alpha$ dans $\mathbb{R}$ et que : $0 < \alpha < 1$  
- La fonction $f$ est continue sur l'intervalle $\mathbb{R}$  
- La fonction $f$ est strictement croissante sur $\mathbb{R}$  
Et on a : $\lim_{x \to +\infty} f(x) = -\infty \; \text{et} \; \lim_{x \to -\infty} f(x) = +\infty \; \text{donc} \; f(\mathbb{R}) = \mathbb{R}$  

Donc $0 \in f(\mathbb{R})$  
D'où l'équation $f(x) = 0$ admet une unique solution $\alpha$ dans $\mathbb{R}$  
- La fonction $f$ est continue sur l'intervalle $[0; 1]$  
- La fonction $f$ est strictement croissante sur $[0; 1]$  
Et on a : $f(0) = -2 \; \text{et} \; f(1) = e - 2 \; \text{donc} \; f(0) \times f(1) < 0$  
Donc : $\alpha \in ]0; 1[$  

Interprétation géométrique  
La courbe $(C_f)$ coupe l'axe des abscisses en un point unique d'abscisse $\alpha$ tel que $\alpha \in ]0; 1[$  
```

<!-- Page 191 -->

```markdown
# Prof : fayssal  
**Site web :** www.elbouthkili.jimdofree.com  
## Exercice 07  

On considère la fonction $f$ définie par $f(x) = 2x + \frac{e^x}{e^x - 1}$  

1) Vérifier que $D_f = \mathbb{R}^*$  
2) Calculer $\lim_{x \to 0^+} f(x)$ et $\lim_{x \to 0^-} f(x)$, puis interpréter graphiquement les résultats obtenus.  
   - a) Calculer $\lim_{x \to +\infty} f(x)$ et $\lim_{x \to -\infty} f(x)$, puis interpréter graphiquement les résultats obtenus.  
   - b) Montrer que : $\lim_{x \to +\infty} f(x) = +\infty$  
   - c) Montrer que la droite $(D)$ d’équation $y = 2x + 1$ est une asymptote oblique à $(C_f)$ au voisinage de $+\infty$.  
   - d) Etudier la position relative de $(C_f)$ et $(D)$ sur $[0, +\infty[$  
4) a) Montrer que pour tout $x \in \mathbb{R}$ : $f'(x) = \frac{2e^{2x}-5e^{x}+2}{(e^x-1)^2}$  
   - b) Etudier le signe de $f'(x)$ puis dresser le tableau de variations de la fonction $f$.  
5) Montrer que le point $A(0; \frac{1}{2})$ est centre de symétrie de $(C_f)$  
6) Construire la courbe $(C_f)$ dans le repère $(O, \vec{i}, \vec{j})$.  

## Solution  

On considère la fonction $f$ définie par $f(x) = 2x + \frac{e^x}{e^x - 1}$  

1) Vérifier que $D_f = \mathbb{R}^*$  
   - $x \in D_f \iff e^x - 1 \neq 0$  
   - $\iff e^x \neq 1$  
   - $\iff \ln(e^x) \neq \ln(1)$  
   - $\iff x \neq 0$  
   - Donc : $D_f = \mathbb{R}^*$  

2) Calculer $\lim_{x \to 0^+} f(x)$ et $\lim_{x \to 0^-} f(x)$, puis interpréter graphiquement les résultats obtenus.  
   - $\lim_{x \to 0^+} f(x) = \lim_{x \to 0^+} 2x + \frac{e^x}{e^x - 1} = \frac{0 + 1}{0} = +\infty$  
   - $\lim_{x \to 0^-} f(x) = \lim_{x \to 0^-} 2x + \frac{e^x}{e^x - 1} = \frac{0 + 1}{0} = -\infty$  
   - On a : $\lim_{x \to 0^+} f(x) = +\infty$ donc la droite d’équation $x = 0$ ; c-à-d que l'axe des ordonnées est une asymptote verticale à la courbe $(C_f)$  

3) a) Calculer $\lim_{x \to +\infty} f(x)$ et $\lim_{x \to -\infty} f(x)$, puis interpréter graphiquement les résultats obtenus.  
   - $\lim_{x \to +\infty} f(x) = \lim_{x \to +\infty} 2x + \frac{e^x}{e^x - 1} = +\infty$  
   - $\lim_{x \to -\infty} f(x) = \lim_{x \to -\infty} 2x + \frac{e^x}{e^x - 1} = 0$  
   - Car $\lim_{x \to -\infty} e^x = 0$ donc $\frac{e^x}{e^x - 1} = 0$  
   - Ainsi $\lim_{x \to -\infty} f(x) = -\infty$  

   - on a : $\lim_{x \to -\infty} f(x) = -\infty$ ainsi $\lim_{x \to -\infty} f(x) - 2x = 0$ donc la droite $(\Delta)$ d’équation $y = 2x$ est asymptote à $(C_f)$ au voisinage de $-\infty$  
```

<!-- Page 192 -->

```markdown
## b) Montrer que $ \lim_{x \to +\infty} f(x) = +\infty. $

$$ 
\lim_{x \to +\infty} f(x) = \lim_{x \to +\infty} 2x + \frac{e^x}{e^x - 1} 
= \lim_{x \to +\infty} 2x + \frac{1}{1 - \frac{1}{e^x}} 
= +\infty 
$$

$$ 
\left( \text{car } \lim_{x \to +\infty} e^x = +\infty \text{ donc } \lim_{x \to +\infty} \frac{1}{e^x} = 0 \right) 
$$

## c) Montrer que la droite $(D)$ d’équation $ y = 2x + 1 $ est une asymptote oblique à $(C_f)$ au voisinage de $ +\infty. $

$$ 
\lim_{x \to +\infty} \left( f(x) - (2x + 1) \right) = \lim_{x \to +\infty} \left( 2x + \frac{e^x}{e^x - 1} - (2x + 1) \right) 
$$

$$ 
= \lim_{x \to +\infty} \left( \frac{e^x}{e^x - 1} - 1 \right) 
= \lim_{x \to +\infty} \frac{e^x - e^x}{e^x - 1} 
= 0 
$$

$$ 
\left( \text{Car } \lim_{x \to +\infty} \frac{1}{e^x} = 0 \right) 
$$

On a : $ \lim_{x \to +\infty} f(x) = +\infty $ et $ \lim_{x \to -\infty} f(x) - (2x + 1) = 0 $ donc la droite $(D)$ d’équation $ y = 2x + 1 $ est asymptote à $(C_f)$ au voisinage de $ +\infty $

## d) Etudier la position relative de $(C_f)$ et $(D)$ sur $ ]0, +\infty[$

Soit $ x \in ]0, +\infty[$

$$ 
f(x) - (2x + 1) = 2x + \frac{e^x}{e^x - 1} - (2x + 1) 
= \frac{e^x - 1}{e^x - 1} 
$$

$$ 
= \frac{e^x - 1}{e^x - 1} = \frac{1}{\frac{e^x - 1}{e^x - 1}} 
= \frac{e^x}{1} > 0 \text{ pour } x > 0 \Rightarrow e^x > 1 \Rightarrow f(x) - (2x + 1) > 0 
$$

Donc sur l’intervalle $ ]0, +\infty[$, la courbe $(C_f)$ est située en dessus de la droite $(D)$ 

## 4) a) Montrer que pour tout $ x \in \mathbb{R}^* : f'(x) = \frac{2e^{2x} - 5e^x + 2}{(e^x - 1)^2} $

Soit $ x \in \mathbb{R}^* $

$$ 
f'(x) = (2x + 1) + \frac{e^x(e^x - 1) - (e^x \cdot e^x)}{(e^x)^2} 
$$

$$ 
f'(x) = 2 + \frac{e^{2x} - e^x - e^{2x}}{(e^x - 1)^2} 
= \frac{2e^{2x} - e^x}{(e^x - 1)^2} 
$$

$$ 
= \frac{2e^{2x} - 5e^x + 2}{(e^x - 1)^2} 
$$
```

<!-- Page 193 -->

```markdown
b) Etudier le signe de $f'(x)$ puis dresser le tableau de variations de la fonction $f$

Soit $x \in \mathbb{R}^*$ ;  
On : $f'(x) = \frac{2e^{2x} - 5e^{x} + 2}{(e^{x} - 1)^{2}} > 0$  
$f'(x) = 0 \Rightarrow 2e^{2x} - 5e^{x} + 2 = 0$  
$$ \Rightarrow (2e^{x})^{2} - 5e^{x} + 2 = 0 $$  
On pose $X = e^{x}$, donc :  
$f'(x) = 0 \Rightarrow 2(X)^{2} - 5X + 2 = 0$  
$\Delta = 25 - 4 \times 2 \times 2 = 9$ ; donc :  
$$ X = \frac{5 + \sqrt{9}}{2 \times 2} \quad \text{ou} \quad X = \frac{5 - \sqrt{9}}{2 \times 2} $$  
$$ X = 2 \quad \text{ou} \quad X = \frac{1}{2} $$  
$$ e^{x} = 2 \quad \text{ou} \quad e^{x} = \frac{1}{2} $$  
$$ x = \ln(2) \quad \text{ou} \quad x = \ln\left(\frac{1}{2}\right) $$  

\[
\begin{array}{|c|c|c|c|c|}
\hline
x & -\infty & \ln\left(\frac{1}{2}\right) & 0 & \ln(2) & +\infty \\
\hline
f'(x) & + & 0 & - & 0 & + \\
\hline
f(x) & -\infty & f\left(\frac{1}{2}\right) & -\infty & 0 & f(\ln(2)) \\
\hline
\end{array}
\]

5) Montrer que le point $A(0; -\frac{1}{2})$ est centre de symétrie de $(C_f)$

Rappel : Le point $A(a, b)$ est un centre de symétrie de la courbe $(C_f)$, si pour tout $x \in D_f : (2a - x) \in D_f$ et $f(2a - x) + f(x) = 2b$.

Dans notre exercice on a : $a = 0$ et $b = \frac{1}{2}$ donc $2a - x = -x$

* $f(-x) + f(x) = -2x + \frac{e^{-x}}{e^{-x} - 1} + 2x + \frac{e^{x}}{e^{x} - 1} = $  
$$ = \frac{e^{-x}}{e^{-x}(1 - \frac{1}{e^{-x}})} + \frac{e^{x}}{e^{x} - 1} = $$  
$$ = \frac{1}{(1 - \frac{1}{e^{-x}})} + \frac{e^{x}}{e^{x} - 1} = $$  
$$ = \frac{1}{1 - e^{x}} + \frac{e^{x}}{e^{x} - 1} = $$  
$$ = \frac{-1}{e^{-x} - 1} + \frac{e^{x}}{e^{x} - 1} = $$  
$$ = \frac{e^{x} - 1}{e^{x} - 1} = 1 $$  
$$ = 2 \times \frac{1}{2} = 2b $$
```

<!-- Page 194 -->

```markdown
# Prof : Fayssal
Site web : www.elboutkhili.jimdofree.com
Correction de série : Exponentielle 2 BAC BIOF

## Exercice 08

Soit $f$ une fonction définie par : $f(x) = x + \ln(|e^x - 1|)$

1) Déterminer $D_f$ puis calculer $f(-\ln 2); \lim_{x \to +\infty} f(x)$ et $\lim_{x \to -\infty} f(x)$
2) Montrer que $\lim_{x \to 0} f(x)$ puis interpréter le résultat géométriquement
3) Montrer que : $\forall x \in D_f : f'(x) = \frac{2e^{x-1}}{e^x - 1}$, puis dresser le tableau de variations de la fonction $f$
4) a) Montrer que la droite $(\Delta) : y = 2x$ est asymptote oblique de $(C_f)$ au voisinage de $+\infty$
   b) Etudier la position relative de $(C_f)$ et $(\Delta)$ sur $]0 ; +\infty[$
5) a) Montrer que la droite $(\Delta') : y = x$ est asymptote oblique de $(C_f)$ au voisinage de $-\infty$
   b) Etudier la position relative de $(C_f)$ et $(\Delta')$ sur $]-\infty ; 0[$
6) Montrer que l'équation $f(x) = 0$ admet une unique solution $\alpha$ tel que $\alpha \in ]0; \ln(2)[$
7) Tracer $(C_f)$ dans un repère orthonormé $(O; \vec{i}; \vec{j})$

## Solution

1) $x \in D_f \iff |e^x - 1| > 0 \iff e^x - 1 \neq 0 \iff e^x \neq 1 \iff x \neq 0$

Donc $D_f = \mathbb{R}^*$

$$ f(-\ln 2) = -\ln 2 + \ln(|e^{-\ln 2} - 1|) $$
$$ = -\ln 2 + \ln(|\frac{1}{2} - 1|) $$
$$ = -\ln 2 + \ln(1 - \frac{1}{2}) $$
$$ = -\ln 2 + \ln(\frac{1}{2}) = -\ln 2 - \ln(2) = -\ln(1) = -2\ln 2 $$

- On a $\lim_{x \to +\infty} f(x) = +\infty$
- Donc $\lim_{x \to +\infty} f(x) = \lim_{x \to +\infty} (x + \ln(|e^x - 1|))$

- On a $\lim_{x \to -\infty} f(x) = -\infty$ et $\lim_{x \to -\infty} |e^x - 1| = 1$ car $e^x = 0$

Donc $\lim_{x \to -\infty} f(x) = \lim_{x \to -\infty} \ln(|e^x - 1|) = -\infty$
```

<!-- Page 195 -->

```markdown
2) On a lim_{x \to 0} x = 0 et \lim_{x \to 0} e^{x} \ln(e^{x} - 1) = -\infty
\Rightarrow \text{ Donc } \lim_{x \to 0} \left( x + \ln(e^{x} - 1) \right) = -\infty

Interprétation géométrique :
On a : \lim_{x \to 0} f(x) = -\infty ; donc la droite d'équation x = 0, c-à-dire
l'axe des ordonnées est une asymptote verticale à la courbe de f

3) Soit $x \in \mathbb{R}^*$
$$ f'(x) = 1 + \frac{e^{x}}{e^{x} - 1} = \frac{2e^{x}}{e^{x} - 1} $$
Rappel : \ln(|u|) = \frac{u'}{u}

Le tableau de variation de f :

\[
\begin{array}{|c|c|c|c|}
\hline
x & -\infty & -\ln(2) & +\infty \\
\hline
2e^{x} - 1 = 0 & \Leftrightarrow & e^{x} = \frac{1}{2} \Leftrightarrow & x = -\ln(2) \\
\hline
e^{x} - 1 = 0 & \Leftrightarrow & x = 0 & \\
\hline
\end{array}
\]

4)a) On a \lim_{x \to +\infty} f(x) = +\infty
\Rightarrow
\lim_{x \to +\infty} f(x) - 2x = \lim_{x \to +\infty} \left( \ln(e^{x} - 1) - x \right)
=
\lim_{x \to +\infty} (|e^{x}|) - x
=
\lim_{x \to +\infty} \ln(1) - x 
=
\lim_{x \to +\infty} 0 - x 
= -\infty


Donc la droite (\Delta) : y = 2x est asymptote oblique de (Cf) au voisinage de +\infty

4)b) Soit $x \in ]-\infty; 0[$, donc \ln(e^{x}-1) = 1 - e^{x}
f(x) - x = \ln(|e^{x}-1|) = \ln(1 - e^{x})
On a : e^{x} > 0 \Rightarrow e^{x} < 1 \Rightarrow \ln(1 - e^{x}) < 0 \Leftrightarrow f(x) - x < 0
Donc (Cf) est en dessous de la droite (\Delta) sur ]-\infty; 0[

6) *f est dérivable sur ]0; \ln(2)[ donc elle est continue sur ]0; \ln(2)[
* *f est strictement croissante sur ]0; \ln(2)[
f(0); \ln(2) = ]-\infty; \ln(2)[
* Donc 0 \in f(0); \ln(2)[
D'où f'(x) = 0 admet une unique solution a tel que a \in ]0; \ln(2)[
```

<!-- Page 196 -->

```markdown
# Deuxième bac sciences PC /SVT /STE

## Cours et série corrigée Équations différentielles
### Deuxième bac sciences PC /SVT /STE

### Plan de chapitre : Équations différentielles
- Cours détaillé
- Résumé de cours
- Série d’exercices
- Correction détaillée des exercices

admin  
Prof fayssal  
06813999067  
www.elboutkhili.jimdofree.com
```

<!-- Page 197 -->

```markdown
# Prof : Fayssal  
## Site web : www.elboutkhili.jimdofree.com

# Cours et Série : Équations différentielles 2 BAC SC

## Équations différentielles de premier ordre : $y' = ay + b$

1) L'équation $(E) : y' = ay + b$ tel que $a$ et $b$ deux constantes réelles est appelée équation différentielle linéaire d'ordre 1 ; où $y$ est la fonction inconnue et $y'$ sa fonction dérivée.  
On appelle solution de l’équation $(E)$, toute fonction $f$ qui vérifie $f'(x) = af(x) + b$

### Résolution de l’équation : $(E) : y' = ay + b$

1) Les solutions de l’équation $y' = ay$ sont les fonctions y définies sur $\mathbb{R}$ par : $y(x) = ke^{ax}$ ou $k$ est une constante réelle.  
2) Les solutions de l’équation $y' = ay + b$ sont les fonctions y définies sur $\mathbb{R}$ par : $y(x) = ke^{ax} - \frac{b}{a}$ ou $k$ est une constante.  
3) Soit $x_0 \in \mathbb{R}$ et $y_0 \in \mathbb{R}$  
Il existe une solution unique $y$ de $(E)$ qui vérifie $y(x_0) = y_0$.

### Exemple

1) Résoudre dans $\mathbb{R}$ l’équation différentielle suivantes :  
$(E_1) : y' + 2y = 3 \iff y' = -2y + 3$  
La solution générale de l’équation $(E_1)$ ; sont les fonctions y définies sur $\mathbb{R}$ par :  
$y(x) = ke^{-2x} + \frac{3}{2}$  
2) Déterminer la solution de $(E_1)$ qui vérifie $f(1) = 2$

$$
f(1) = 5 \iff ke^{-2} + \frac{3}{2} = 5 \iff ke^{-2} = 7 - \frac{3}{2} = \frac{7}{2}
$$

$$
\iff k = \frac{7}{2} e^{2}
$$

Donc ; $f(x) = \frac{7}{2} e^{2} e^{-2x} + \frac{3}{2}$
```

<!-- Page 198 -->

```markdown
# Prof : Fayssal
Site web : www.elbouthkili.jimdofree.com

## Exercice 01

1) a) Résoudre dans $\mathbb{R}$ l’équation différentielle  
   $(E_1); \; y'' - 3y' + 2y = 0$  
   b) Déterminer la fonction $f$ solution de $(E_3)$ qui vérifie  
   $f(0) = 3 \; et \; f'(0) = 8$

2) a) Résoudre dans $\mathbb{R}$ l’équation différentielle  
   $(E_2); \; y'' - 6y' + 9y = 0$  
   b) Déterminer la fonction $f$ solution de $(E_2)$ qui vérifie  
   $f(0) = -1 \; et \; f'(0) = 5$

3) a) Résoudre dans $\mathbb{R}$ l’équation différentielle  
   $(E_3); \; y'' - 2y' + 5y = 0$  
   b) Déterminer la fonction $f$ solution de $(E_2)$ qui vérifie  
   $f(0) = 5 \; et \; f'(0) = 9$

## Solution

1) L’équation caractéristique associée à $(E_1)$ est $r^2 - 3r + 2 = 0$  
   On a $\Delta = 3^2 - 4 \times 1 \times 2 = 1 > 0$  
   Donc l’équation caractéristique $r^2 - 3r + 2 = 0$, admet deux  
   solutions réelles sont $r_1 = \frac{3 - \sqrt{1}}{2} = 1$ et $r_2 = \frac{3 + \sqrt{1}}{2} = 2$  
   Et par suite les solutions de l’équation $(E_1)$ sont les fonctions $y$  
   définie sur $\mathbb{R}$ par :  
   $y(x) = ae^x + be^{2x} \; ; \; \alpha, \beta \in \mathbb{R}$  
   
   b) On a $f(x) = ae^x + b e^{2x} \; ; \; \alpha, \beta \in \mathbb{R}$  
   Déterminons $\alpha$ et $\beta$ tels que $f(0) = 3$ et $f'(0) = 8$  
   On a ; $f'(x) = ae^x + 2be^{2x} \; ; \; \alpha, \beta \in \mathbb{R}$  
   $f(0) = a + b = 3$  
   $f'(0) = a + 2b = 8$  
   $\begin{cases} 
   a + b = 3 \\ 
   a + 2b = 8 
   \end{cases}$  
   D’où $f(x) = -2e^x + 5e^{2x}$


2) L’équation caractéristique associée à $(E_2)$ est $r^2 - 6r + 9 = 0$  
   On a $\Delta = 6^2 - 4 \times 1 \times 9 = 0$  
   Donc l’équation caractéristique $r^2 - 6r + 9 = 0$, admet une  
   solution réel unique $r_0 = \frac{6}{2 \times 1} = 3$  
   Et par suite les solutions de l’équation $(E_2)$ sont les fonctions $y$  
   définie sur $\mathbb{R}$ par :  
   $y(x) = ( \alpha + \beta x ) e^{3x} \; ; \; \alpha, \beta \in \mathbb{R}$  
   
   b) On a $f(x) = (\alpha + \beta) e^{3x} \; ; \; \alpha, \beta \in \mathbb{R}$  
   Déterminons $\alpha$ et $\beta$ tels que $f(0) = -1$ et $f'(0) = 5$  
   On a ; $f'(x) = \alpha e^{3x} + 3(\alpha + \beta)e^{3x} \; ; \; \alpha, \beta \in \mathbb{R}$  
   $f(0) = \alpha = -1$  
   $f'(0) = 3(\alpha + \beta) = 5$  
   $\Rightarrow \alpha + \beta = -1$  
   $\Rightarrow \beta = -1 - \alpha = 3$  
   Donc $f(x) = (8x - 1)e^{3x}$


3) L’équation caractéristique associée à $(E_3)$ est $r^2 - 2r + 5 = 0$  
   On a $\Delta = 2^2 - 4 \times 1 \times 5 = -16 < 0$  
   Donc l’équation caractéristique $r^2 - 2r + 5 = 0$, admet deux  
   solutions complexes sont $z_1 = 1 + i\sqrt{16} = 1 + 2i$ et $z_2 = z_1$  
   Donc les solutions de l’équation $(E_3)$ sont les fonctions ou définie  
   sur $\mathbb{R}$ par :  
   $y(x) = (\alpha \cos(2x) + \beta \sin(2x)) e^{x} \; ; \; \alpha, \beta \in \mathbb{R}$  
   
   b) On a $f(x) = (\alpha \cos(2x) + \beta \sin(2x)) e^{x} \; ; \; \alpha, \beta \in \mathbb{R}$  
   Déterminons $\alpha$ et $\beta$ tels que $f(0) = 5$ et $f'(0) = 9$  
   $f'(x) = (-2 \alpha \sin(2x) + 2 \beta \cos(2x)) e^{x} + (\alpha \cos(2x) + \beta \sin(2x)) e^{x}$  
   $f(0) = \alpha = 5$  
   $f'(0) = 2\beta + 5 = 9$  
   $\Rightarrow 2\beta + 5 = 9 \Rightarrow \beta = 2$  
   D’où $f(x) = (5 \cos(2x) + 2 \sin(2x)) e^{x}$
```

<!-- Page 199 -->

```markdown
# Deuxième bac sciences PC /SVT /ST

## Résumé de cours : Calcul d'intégrale
### Deuxième bac sciences PC /SVT /ST

### Plan de chapitre : Calcule d’intégrale
- Cours détaillé
- Résumé de cours
- Série d’exercices
- Correction détaillée des exercices

admin  
Prof fayssal  
06813999067  
www.elbouthkili.jimdo.com
```

<!-- Page 200 -->

```markdown
# Résumé : CALCUL D'INTÉGRALE  
## PROF : FAYSSAL  
### 1) Primitive d’une fonction (r ∈ ℝ\{-1})  
$$  
\int 1 = x ; \quad f(k) = kx  
$$  
$$  
\int \sqrt{x} = \frac{2}{3} x^{\frac{3}{2}} ; \quad x^r = \frac{x^{r+1}}{r+1}  
$$  
$$  
\int U'(x) \times U(x) = e^{U(x)} ; \quad \int e^{-x} = -e^{-x}  
$$  
$$  
\int \frac{1}{x} = \ln(|x|) ; \quad \frac{U'(x)}{U(x)} = \ln(|U(x)|)  
$$  
$$  
\int \sin x = -\cos x ; \quad \cos x = \sin x  
$$  
$$  
\int \cos(x) = \frac{1}{a} \sin(ax + b)  
$$  
$$  
\int \sin(ax + b) = -\frac{1}{a} \cos(ax + b)  
$$  

### 2) Définition d'intégrale d’une fonction  
Soit $f$ une primitive de $f$ sur $[a; b]$  
L’intégrale de la fonction $f$ de $a$ à $b$ est le nombre réel noté par $\int_{a}^{b} f(x) dx$ tel que :  
$$  
\int_{a}^{b} f(x) dx = [F(x)]_{a}^{b} = F(b) - F(a)  
$$  
**Remarque :**  
$$  
\int_{a}^{b} f dx = -\int_{b}^{a} f dy  
$$  
$$  
\int_{a}^{b} f dx = -\int_{b}^{a} f(x) dx  
$$  
$$  
\int_{a}^{a} f dx = 0  
$$  
$$  
\int_{a}^{b} k dx = k[b - a]  
$$  

### 3) Propriétés d’intégrale :  
**La linéarité de l’intégrale :**  
$$  
\int_{a}^{b} f(x) + g(x) dx = \int_{a}^{b} f(x) dx + \int_{a}^{b} g(x) dx  
$$  
$$  
\int_{a}^{b} k f(x) dx = k \int_{a}^{b} f(x) dx ; \quad k \in \mathbb{R}  
$$  
**Relation de CHELS**  
$$  
\int_{a}^{b} f(x) dx = \int_{c}^{f(a)} dx + \int_{c}^{f(b)} dx  
$$  
**L’intégrale et l’ordre :**  
Si $\forall x \in [a; b]; f(x) > 0$ alors $\int_{a}^{b} f(x) dx > 0$  
Si $f(x) > g(x)$ alors $\int_{a}^{b} f(x) dx > \int_{a}^{b} g(x) dx  
$$  
$$  
\int_{a}^{b} g(x) dx \leq \int_{b}^{a} |g(x)| dx  
$$  

### 4) Valeur moyenne d’une fonction :  
Si $f$ est une fonction continue sur $[a; b]$ alors il existe au moins un réel $c \in [a; b]$ tel que :  
$$  
f(c) = \frac{1}{b - a} \int_{a}^{b} f(x) dx  
$$  
$$  
\frac{1}{b - a} \int_{a}^{b} f(x)dx ,\text{ est appelé la valeur moyenne de fonction sur } [a; b]  
$$  

### 5) Intégration par parties :  
**Méthode ou bien disposition :**  
$$  
u'(x) = \dots  
$$  
$$  
v'(x) = \dots  
$$  
$$  
v(x) = \dots  
$$  

### 6) Aire d’un domaine plan  
L'aire du domaine délimité par la courbe $(C_f)$ et l'axe des abscisses et les droites d'équations $x = a$ et $x = b$ est :  
$$  
A(f) = \left(\int_{a}^{b} f(x) dx\right) \times u.A  
$$  
Avec $u.A$ est l’unité d’aire (1u.A = ||\mathbf{i}|| \times ||\mathbf{j}||)  
$$  
Si \: f > 0 \: sur \: [a; b] ; \: alors :  
A(f) = \left(\int_{a}^{b} f(x) dx\right) u.A  
$$  
$$  
si \: f < 0 \: sur \: [c; b] \: alors :  
A = \int_{c}^{a} f(x) dx + \int_{b}^{c} f(x) dx  
$$  
D le domaine délimité par $(C_f)$ et $(G_g)$ et les droites d’équations $x = a$ et $x = b$ alors l’aire de domaine D est  
$$  
A = \left(\int_{a}^{b} |f(x) - g(x)| dx\right) u.A  
$$  

### 7) Volume d’un solide de révolution  
L'espace est rapporté à R.O.N $(0, \ \mathbf{i}, \ \mathbf{j}, \ \mathbf{k})$  
Le volume de solide de révolution engendré par la rotation de $(C_f)$ par rapport à $(O)$ (tour complet) sur $[a; b]$ est ;  
$$  
V(f) = \int_{a}^{b} \pi (T(f(x))^2 dx) \times u.V  
$$  
l'unité de volume est $u.V = ||\mathbf{i}|| \times ||\mathbf{j}|| \times ||\mathbf{k}||  
$$  
```

<!-- Page 201 -->

```markdown
# Deuxième bac sciences PC /SVT /STE

## Série corrigée : Calcul d’intégrale
### Deuxième bac sciences PC /SVT /STE

### Plan de chapitre : Calcul d’intégrale
- Cours détaillé
- Résumé de cours
- Série d’exercices
- Correction détaillée des exercices
```

<!-- Page 202 -->

```markdown
# Prof : fayssal 
# Site web : www.elboutkhili.jimdofree.com 
# Série 08 : Intégrale d'une fonction 
# 2 bac biof 
# Page 01 

## Exercice 01

Calculer les intégrales suivantes : 
$$ A = \int_{1}^{\frac{1}{2}} \frac{1}{x} dx ; \quad B = \int_{0}^{1} e^{-x} dx $$

$$ C = \int_{1}^{3} \sqrt{x + 1} dx ; \quad D = \int_{-3}^{2} |x| dx ; \quad E = \int_{2}^{e^{4}} \frac{\ln(x)}{x} dx $$

$$ F = \int_{1}^{\pi} \cos(2x) dx ; \quad G = \int_{1}^{4} \frac{3}{x^2 + 1} dx ; \quad H = \int_{2}^{5} (3x^2 - 4x - 5 dx) $$

$$ K = \int_{-1}^{1} e^{-2x} dx ; \quad M = \int_{-1}^{3} \frac{e^x}{e^x + 3} dx ; \quad N = \int_{-\ln(2)}^{\ln(2)} |e^{-x} - 1|dx $$

$$ O = \int_{2}^{1} \frac{1}{\ln(x)} dx ; \quad P = \int_{0}^{\frac{3\pi}{3}} \tan(x) dx ; \quad Q = \int_{0}^{1} \frac{2x - 1}{2x + 1} dx $$

## Exercice 02

1) On pose : 
$$ K = \int_{0}^{\ln(2)} \frac{e^t - 1}{e^{t} + 1} dt \quad \text{et} \quad L = \int_{0}^{\ln(2)} \frac{1}{e^t + 1} dt $$
Calculer K + L et 2L puis en déduire les valeurs de K et L 

2) On pose : 
$$ I = \int_{0}^{\pi} \frac{\cos x}{\cos x + \sin x} dx \quad \text{et} \quad J = \int_{0}^{\frac{\pi}{2}} \frac{\sin x}{\cos x + \sin x} dx $$
Calculer I + J et I - J puis en déduire les valeurs de I et J 

## Exercice 03

En utilisant la formule d’intégration par parties, Calculer les intégrales suivantes : 
$$ A = \int_{0}^{1} \frac{\ln(3)}{\ln(x)} dx ; \quad B = \int_{0}^{-\ln(2)} e^{-x} dx $$

$$ C = \int_{1}^{1} \frac{1}{\ln(x)}dx ; \quad D = \int_{0}^{1} \cos(x) dx $$

$$ E = \int_{2}^{e^{2}} e^{x}dx ; \quad F = \int_{0}^{2} e^{2} e^{-x} dx ; \quad G = \int_{1}^{-1} \ln(x + 2) dx $$

$$ K = \int_{1}^{1} \sin(\ln(x)) dx $$

## Exercice 04

Le plan est apporté à un repère orthogonal $(O, \vec{i}, \vec{j})$ avec $||\vec{i}|| = 3 cm$ et $||\vec{j}|| = 2 cm$ 

1) Soit f définie sur $[0, +\infty[$ : $f(x) = \frac{1}{x(x + 1)}$ et $Cf$ sa courbe 
   a) Vérifier que : $\nabla x \in [0, +\infty[$ : $f(x) = \frac{1}{x} - \frac{1}{x + 1}$ 
   b) Calculer $A$, l'aire du domaine plan limité par la courbe $(Cf)$ , la droite (ox) et les droites $x=1$ et $x=2$ 

2) Soit g la fonction définie par : $g(x) = \sin(x)$ et $(Cg)$ sa courbe 
   Calculer l'aire du domaine délimité par $(Cg)$ et les droites d'équations : $x = \frac{\pi}{2}$ et $x = -\frac{\pi}{2}$ 

## Exercice 05

Le plan est apporté à un repère orthonormé $(O, \vec{i}, \vec{j})$ ; $||\vec{i}|| = 1 cm$ 

Soit f la fonction définie sur $[0, +\infty[$ : $f(x) = x + \left( 1 - \frac{1}{2} \right) \ln(x)$ 
1) Montrer que $(Cf)$ la courbe de f est en dessous de la droite $(D)$ ; $y = x$ sur l’intervalle $[1, 2]$

2) Montrer que : $$ \int_{1}^{2} \left( \frac{2}{x - 1} \ln(x) \right)^2 $$

3) Déduire l'aire du domaine plan délimité par $(Cf)$, la droite $(D)$ et les droites d'équations $x = 1$ et $x = 2$ 

## Exercice 06

Soit f la fonction définie sur $[0, +\infty[$ : $f(x) = (x^2 - x) e^{-x} + x$ 
1) Montrer que $(Cf)$ est en dessous de la droite $(D)$ ; $y = x$ sur l’intervalle $[0, 1]$ 
2) Montrer que la fonction $H : x \mapsto -x^2 + 2x - 2 e^{-x}$ est une primitive de la fonction $h : x \mapsto -2 x e^{-x}$ sur $[0, 1]$ 

3) Déduire que : $$ \int_{0}^{1} x^2 e^{-x} dx = \frac{2 e^{-5}}{e} $$ 

4) Par intégration par parties, montrer que $$ \int_{0}^{1} e^{-x} dx = \frac{e^{-2}}{e} $$ 

5) Déduire l'aire du domaine délimité par $(Cf)$, la droite $(D)$ et les droites d'équations $x = 0$ et $x = 1$ 
```


<!-- Page 203 -->

```markdown
Prof : fayssal  
Site web : www.elbouthkili.jimdofree.com  
Série : Intégrale d'une fonction  2 bac biof  Page 02

## Exercice 07
Soit $ f $ une fonction définie sur $ ]0; +\infty[ $ par : $ f(x) = \frac{1 + \ln x}{x^2} $ ; $(Ch)$ la courbe de $ f $ dans un repère orthonormé (unité1 cm)  
Soient $ n \in \mathbb{N} $, on désigne par $ I_n $ l'aire du domaine limité par la courbe $(Cf)$, la droite $(Ox)$ et les droites : $ x = \frac{1}{e} $ et $ x = e $.

1) Montrer que $ F : x \to -\frac{2 - \ln x}{x} $ et une primitive de $ f $ sur $ ]0; +\infty[$  
2) Montrer que $ \forall x \in \left[\frac{1}{e}, +\infty\right[ , \: f(x) \geq 0 $  
3) Calculer $ I_n $ en fonction de $ n $ puis déterminer $ \lim_{n \to +\infty} I_n $

## Exercice 08
1) Vérifier que : $ \int_{1}^{2} \ln (x) dx \geq 0 $

a) Vérifier que $ \forall t \in [1; +\infty[ , \: \frac{1}{t^2} \leq t \leq 1 $  
b) En déduire que $ \forall x \in [1; +\infty[ , \: 1 - \frac{1}{x} \leq \ln (x) $  
3) a) Montrer que : $(\forall t \in \mathbb{R}^+, \: 1 - t \leq \frac{1}{1+t} \leq 1) $  
b) En déduire que : $ \forall x \in \mathbb{R}^+, \: -\frac{x^2}{2} \leq \ln(1+x) \leq x $  
c) Déterminer un encadrement de l'intégrale $ I = \int_{0}^{1} \ln(1+t) \, dt $

## Exercice 09
Soit $ n \in \mathbb{N} $, considérons la suite $(I_n)_{n \in \mathbb{N}}$ tel que : $ I_n = \int_{1}^{2} \frac{1}{1+x^2} dx $

1) Etudier le sens de variation de la suite $(I_n)_{n \in \mathbb{N}}$  
2) Montrer que la suite $(I_n)_{n \in \mathbb{N}}$ est convergeante  
3) Montrer que $(\forall n \in \mathbb{N}) \: 0 \leq I_n \leq \frac{1}{n}$  
4) En déduire la limite de la suite $(I_n)_{n \in \mathbb{N}}$

## Exercice 10
1) Linéariser $ \cos^3 x $ puis calculer $ \int_{0}^{\frac{\pi}{4}} \cos^3 (x) dx $  
2) Calculer les intégrales : $ A = \int_{0}^{1} \frac{x^3 + x + 4}{x + 1} \, dx ; \: B = \int_{2}^{3} \frac{5x + 1}{x^2 + 2} \, dx $

## Exercice 11
Soit $ f $ une fonction définie sur $ ]0; +\infty[ $ par :  
$$ f(x) = -\frac{1}{4} x^2 + 4x + \left( \frac{1}{2} x^2 - 4x \right) \ln x $$  
Et $(Cf)$ sont graphes dans un repère orthonormé $(O; \vec{i}; \vec{j})$ d'unité 1 cm et Soit la fonction $ h $ définie sur $ [1; e] $ par :  
$$ h(x) = -\frac{1}{4} x^2 + 4x \quad (Ch) $$  
et son graphe dans le repère $(O; \vec{i}; \vec{j})$

1) Montrer que $ \forall x \in [1; e[ , \: f(x) - h(x) \leq 0 $  
2) Par une intégration par parties montrer que  
$$ \int_{1}^{2} x^2 - 4x \ln x \, dx = 2e^3 - 18e^2 - 17 $$  
3) Calculer en $ cm^2 $, l'aire du domaine plan limité par les courbes $(Cf)$ et $(Ch)$ et les droites d'équations $ x = 1 $ et $ x = e $

## Exercice 12
L'espace est rapporté à R.O.N $(O, \vec{i}, \vec{j}, \vec{k})$ avec $ ||\vec{l}|| = 1cm $  
Calculer en $ cm^3 $ le volume de solide de révolution engendré par la rotation de $(Cf)$ par rapport à $(Ox)$ (tour complet) sur $ I $  
1) $ f(x) = e^{x} sur \: I = [0; 1] ; \: 2) \quad g(x) = \sqrt{1-x^2} sur \: I = [-1; 1] $

## Exercice 13
Soit l'équation différentielle : $(E) : y'' - 4y' + 13y = 0$  
1) Résoudre dans IR l'équation $(E)$  
2) Déterminer la solution $ g(t) $ tel que : $ g(0) = 0 $ et $ g'(0) = 3 $  
3) Déduire que $ \int_{0}^{\pi} \sin(3x) e^{2x} dx = \frac{3}{13} (1 + 2\pi) $  
4) Calculer l'intégrale $ \int_{0}^{\pi} \cos(3x) e^{2x} dx $

## Exercice 14
Soit $ \omega \in \mathbb{R}^+ $, et la fonction $ f $ définie sur $ \mathbb{R} $ par : $ f(t) = \cos^2(\omega t) $  
Calculer la valeur moyenne de $ f $ sur l'intervalle $ [0; \frac{\pi}{\omega}] $
```

<!-- Page 204 -->

```markdown
# Prof : fayssal
# Site web : www.elboutkhili.jimdofree.com
# Exercices 01

Calculer les intégrales suivantes : $A = \int_{1}^{e} \frac{1}{x} dx$ ; $B = \int_{0}^{1} \sqrt{x} + 1 dx$

$$ C = \int_{0}^{1} e^{-x}dx $$
$$ D = \int_{-3}^{0} |x| dx$$
$$ E = \int_{2}^{4} \frac{\ln(x)}{x} dx $$

$$ F = \int_{0}^{\frac{\pi}{4}} \cos(2x) dx $$
$$ G = \int_{2}^{5} 3x^{2} + 4x - 5 dx $$
$$ H = \int_{2}^{5} 3x^{2} + 4x - 5 dx$$
$$ K = \int_{-1}^{1} e^{-2x}dx $$
$$ M = \int_{-1}^{0} \frac{e^{x}}{e^{x} + 1}dx $$
$$ N = \int_{-\ln(2)}^{0} \left| e^{x} - 1 \right|dx $$
$$ O = \int_{0}^{\frac{3\pi}{2}} \tan(x) dx $$
$$ Q = \int_{0}^{1} \frac{2x - 1}{e^{2x} + 1} dx $$

## Solution

$$ A = \int_{1}^{e} \frac{1}{x} dx = [\ln(x)]_{1}^{e} = \ln(e) - \ln(1) = 1 - 0 = 0 $$

$$ B = \int_{0}^{1} \left( x + (x + 1)\sqrt{x} \right)dx = \int_{0}^{1}(x + 1) (x + 1)dx = [\frac{2}{3} x^{3}]_{0}^{1} = \frac{2}{3} (1^3 - 0) = \frac{2}{3} $$

$$ C = \int_{0}^{1} e^{-x}dx = -e^{-x} \bigg|_{0}^{1} = -e^{-1} + e^{0} = 1 - \frac{1}{e} $$

$$ D = \int_{-3}^{0} |x| dx = [-\frac{x^2}{2}]_{-3}^{0} = [-\frac{0^2}{2} + \frac{(-3)^2}{2}] = \frac{9}{2} $$

$$ E = \int_{2}^{4} \frac{\ln(x)}{x} dx = \left[ \frac{(\ln(x))^2}{2} \right]_{2}^{4} = \frac{(\ln(4))^2}{2} - \frac{(\ln(2))^2}{2} = \frac{[(2\ln(2))^2 - (\ln(2))^2]}{2} = \frac{3(\ln(2))^2}{2} $$

$$ F = \int_{0}^{\frac{\pi}{4}} \cos(2x) dx = \frac{1}{2} \sin(2x) \bigg|_{0}^{\frac{\pi}{4}} = \frac{1}{2}(\sin(\frac{\pi}{2}) - \sin(0)) = \frac{1}{2}(1 - 0) = \frac{1}{2} $$

$$ G = \int_{2}^{5} 3x^{2} + 4x - 5 dx = [x^{3} + 2x^{2} - 5x]_{2}^{5} = [(5^{3} + 2 \cdot 5^{2} - 5 \cdot 5) - (2^{3} + 2 \cdot 2^{2} - 5 \cdot 2)] = 144 $$

$$ K = \int_{-1}^{1} e^{-2x}dx = \frac{1}{2}e^{-2} - \frac{1}{2}e^{-2(-1)} = \frac{1}{2}(e^{-2} - e^{2}) $$

$$ M = \int_{0}^{1} \frac{e^{x}}{e^{x} + 3}dx = \ln(e + 3) - \ln(0) = \ln(e + 3) $$

$$ N = \int_{-\ln(2)}^{0} \left| e^{x} - 1 \right|dx = \int_{-\ln(2)}^{0} (1 - e^{x})dx = [x - e^{x}]_{-\ln(2)}^{0} = [0 - 1] - [-\ln(2) - e^{-ln(2)}] = [0 - (-\ln(2) - \frac{1}{2})] $$

$$ O = \int_{0}^{\frac{3\pi}{2}} \tan(x)dx = \ln(\tan(x) + (1)) \bigg|_{0}^{\frac{3\pi}{2}} = \text{undefined} $$

$$ Q = \int_{0}^{1} \frac{2x - 1}{e^{2x} + 1} dx = [\frac{e^{2x} - 1}{2}] \bigg|_{0}^{1} = \frac{e^{2} - 1}{2} $$
```

<!-- Page 205 -->

```markdown
Prof : fayssal  
Site web : www.elbouthkili.jimdo.com  

# Correction de série : Intégrale  
## 2 bac biof  
### Page 02  

$$ O = \int_{0}^{2} \frac{1}{x \ln(x)} \, dx = \int_{0}^{2} (\ln x)' \cdot \frac{1}{\ln(x)} \, dx $$  
$$ = \int_{0}^{2} \ln(\ln x) \, dx = [\ln(\ln x)]_{0}^{2} = \ln(\ln(e)) - \ln(\ln(2)) = -\ln(2) $$  

$$ P = \int_{0}^{\frac{\pi}{3}} \frac{\sin x}{\cos x} \, dx = \int_{0}^{\frac{\pi}{3}} \frac{-\cos x'}{\cos x} \, dx $$  
$$ = [-\ln(\cos x)]_{0}^{\frac{\pi}{3}} = \ln(2) $$  

$$ Q = \int_{0}^{1} \frac{2^{x} - 1}{2^{x} + 1} \, dx = \int_{0}^{1} \frac{e^{x} e^{-x}}{e^{x} + e^{-x}} \, dx = \int_{0}^{1} \frac{e^{x} e^{-x}}{e^{x} + e^{-x}} \, dx $$  
$$ = \int_{0}^{1} \frac{(e^{x} + e^{-x})'}{e^{x} + e^{-x}} \, dx = [\ln(e^{x} + e^{-x})]_{0}^{1} $$  
$$ = \ln(e^1 + e^{-1}) - \ln(e^0 + e^{-0}) = \ln(1 + e^{-1}) $$  

### Exercice 02  

1) On pose :  
$$ K = \int_{0}^{1} \frac{e^{t} - 1}{e^{t} + 1} \, dt \quad et \quad L = \int_{0}^{1} \frac{1}{e^{t} + 1} \, dt $$  
Calculer $K + L$ et $2L$ puis en déduire les valeurs de $K$ et $L$.

2) On pose :  
$$ I = \int_{0}^{\frac{\pi}{3}} \frac{\cos x}{\cos x + \sin x} \, dx \quad et \quad J = \int_{0}^{\frac{\pi}{3}} \frac{\sin x}{\cos x + \sin x} \, dx $$  
Calculer $I + J$ et $I - J$ puis en déduire les valeurs de $I$ et $J$.

### Solution  

1)  
$$ K + L = \int_{0}^{1} \frac{e^{t} - 1}{e^{t} + 1} \, dt + \int_{0}^{1} \frac{1}{e^{t} + 1} \, dt $$  
$$ = \int_{0}^{1} \frac{e^{t} - 1 + 1}{e^{t} + 1} \, dt = \int_{0}^{1} \frac{e^{t}}{e^{t} + 1} \, dt $$  
$$ = [\ln(e^{t} + 1)]_{0}^{1} = \ln(2) - \ln(1) = \ln(2) $$  

$$ K + 2L = \ln(3) - \ln(2) $$  
$$ \Rightarrow \{ K + 2L = \ln(2): (K + 2(L2)) = \ln(2)\} $$  
$$ \Rightarrow \{ K = 2\ln(2) - \ln(3) \} $$  
$$ L = 2\ln(3) - 3 \ln(2) $$  

2)  
$$ I + J = \int_{0}^{\frac{\pi}{3}} \cos x \, dx + \int_{0}^{\frac{\pi}{3}} \sin x \, dx $$  
$$ = \int_{0}^{\frac{\pi}{3}} \frac{\cos x + \sin x}{\cos x + \sin x} \, dx $$  
$$ = [x]_{0}^{\frac{\pi}{3}} = \frac{\pi}{3} $$  

$$ I - J = [\ln(\cos x + \sin x)]_{0}^{\frac{\pi}{3}} = \ln(1) - \ln(2) = \frac{1}{2} - J $$  
$$ I + J = \frac{\pi}{3} $$  
$$ I + J = \frac{\pi}{3} $$  
```

<!-- Page 206 -->

```markdown
# Exercices 03

En utilisant la formule d’intégration par parties, Calculer les intégrales suivantes :

$$ A = \int_{ln(3)}^{ln(2)} xe^{-x}dx ; \quad B = \int_{0}^{-ln(2)} xe^{-x}dx ; \quad C = \int_{1}^{e} x \ln(x)dx $$  
$$ D = \int_{0}^{\pi} x \cos(x)dx ; \quad E = \int_{e}^{2} e^{2} \ln(x)dx ; \quad F = \int_{0}^{1} x^{2} e^{x}dx $$  
$$ G = \int_{-1}^{0} ln(x) \cdot (2)dx ; \quad K = \int_{1}^{e} \sin(ln(x))dx $$  

## Solution

Calculons l’intégrale : \( A = \int_{ln(3)}^{ln(2)} xe^{-x}dx \)

Posons 
$$ u(x) = x \quad v'(x) = e^{-x} $$ alors 
$$ v(x) = e^{-x} $$

Il s’ensuit donc :
$$ A = \int_{ln(3)}^{ln(2)} xe^{-x}dx = [xe^{-x}]_{ln(3)}^{ln(2)} = [xe^{-x}]_{ln(2)} - [xe^{-x}]_{ln(3)} $$
$$ = 3ln(3) - 2ln(2) - 1 $$
$$ = 3ln(3) - 2ln(2) - 1 $$

Calculons l’intégrale : \( B = \int_{0}^{-ln(2)} xe^{-x}dx \)

Posons 
$$ u(x) = x \quad v'(x) = e^{-x} $$ alors 
$$ v(x) = -e^{-x} $$

Il s’ensuit donc :
$$ A = \int_{0}^{-ln(2)} xe^{-x}dx = [-xe^{-x}]_{-ln(2)} + \int_{0}^{-ln(2)} e^{-x}dx $$
$$ = [-xe^{-x}]_{-ln(2)} - [e^{-x}]_{0}^{-ln(2)} $$
$$ = -2ln(2) - 1 $$
$$ = -2ln(2) + 1 $$

Calculons l’intégrale : \( C = \int_{1}^{e} x \ln(x)dx \)

Posons 
$$ u(x) = \ln(x) \quad v'(x) = x $$ alors 
$$ u'(x) = \frac{1}{x} \quad v(x) = \frac{x^2}{2} $$

Il s’ensuit donc :
$$ I = \frac{1}{2} [x^2 \ln(x)]_{1}^{e} - \int_{1}^{e} \frac{1}{x} \cdot \frac{x^2}{2} dx $$
$$ = \frac{1}{2} [x^2 \ln(x)]_{1}^{e} - \frac{1}{2} \int_{1}^{e} x dx $$
$$ = \frac{1}{2} [x^2 \ln(x)]_{1}^{e} - \frac{1}{2} [\frac{x^2}{2}]_{1}^{e} $$
$$ = \frac{1}{2} [x^2 \ln(x)]_{1}^{e} - \frac{1}{2}(\frac{e^2}{2} - \frac{1}{2}) $$
$$ = \frac{1}{2} [x^2 \ln(x)]_{1}^{e} - \frac{1}{4}(e^2 + 1) $$

Calculons l’intégrale : \( D = \int_{0}^{\pi} x \cos x dx \)

Posons 
$$ u(x) = x \quad v'(x) = \cos x $$ alors 
$$ v(x) = \sin x $$

Il s’ensuit donc :
$$ I = [x \sin x]_{0}^{\pi} - \int_{0}^{\pi} \sin x dx $$
$$ = 0 - [-\cos x]_{0}^{\pi} $$
$$ = -(-\cos(\pi) + \cos(0)) $$
$$ = (1 - 1) $$
$$ = -2 $$
```

<!-- Page 207 -->

```markdown
# Prof : fayssal 
Site web : www.elboutkhili.jimdofree.com 

## Correction de série : Intégrale 2 bac biof 

### Page 04

#### Calculons l’intégrale E = $\int_{e}^{2} \ln(x)dx$
Posons 
$$
\begin{cases}
u(x) = \ln(x) \\
v'(x) = 1 \\
v(x) = x
\end{cases}
$$

Il s’ensuit donc :
$$
F = \int_{e}^{2} \ln(x)dx = [x \ln(x)]_{e}^{2} - \int_{1}^{2} x \cdot dx
$$

$$
= [x \ln(x)]_{e}^{2} - \int_{1}^{2} 1 \, dx
$$

$$
= 2e^{2} - e - [x]_{e}^{2}
$$

$$
= 2e^{2} - e - e^{2} + e
$$

$$
= e^{2}
$$

#### Calculons l’intégrale : $F = \int_{0}^{1} x^{2} e^{x}dx$
Posons 
$$
\begin{cases}
u(x) = x^{2} \\
v'(x) = e^{x} \\
v(x) = e^{x}
\end{cases}
$$

Il s’ensuit donc : 
$$
D = [x^{2} e^{x}]_{0}^{1} - \int_{0}^{1} 2x e^{x}dx
$$

$$
= e - 2A
$$

$$
= e - 2
$$

Car $A = \int_{0}^{1} e^{x}dx = 1$

#### Calculons l’intégrale G = $\int_{-1}^{e} \ln(x + 2)dx$
Posons 
$$
\begin{cases}
u(x) = \ln(x + 2) \\
v'(x) = 1
\end{cases}
$$

$$
v(x) = x + 2
$$

$$
F = [ (x + 2) \ln(x + 2) ]_{-1}^{e} - \int_{-1}^{e} \frac{1}{x + 2} (x + 2) \, dx
$$

$$
= [ (x + 2) \ln(x + 2) ]_{-1}^{e} - \int_{-1}^{e} 1dx
$$

$$
= [(e + 2)\ln(e + 2) - (-1 + 2)\ln(1)] - [e + 1]
$$

$$
= (e + 2)\ln(e + 2) - (e + 1)
$$
```

<!-- Page 208 -->

```markdown
# Prof : fayssal
# Site web : www.elboutkhili.jimdofree.com

## Exercice 04

Le plan est apporté à un repère orthogonal $(O, \vec{i}, \vec{j})$ avec $\|\vec{i}\| = 3 \text{ cm}$ et $\|\vec{j}\| = 2 \text{ cm}$.

1) Soit $f$ définie sur $]0, +\infty[$ par : $f(x) = \frac{1}{x+1}$ et $(Cf)$ sa courbe
   c) Vérifier que : $\forall x \in ]0, +\infty[$ : $f'(x) = -\frac{1}{(x+1)^2}$
   d) Calculer $A$, l'aire du domaine plan limité par la courbe $(Cf)$, la droite $(ox)$ et les droites $x=1$ et $x=2$.

2) Soit $g$ la fonction définie par : $g(x) = \sin(x)$ et $(Cg)$ sa courbe. Calculer l’aire du domaine délimité par la courbe de $g$ et les droites d’équations : $x = \frac{\pi}{2}$ et $x = -\frac{\pi}{2}$.

### Solution

1) On a : $\forall x \in ]0, +\infty[$ : $f(x) = \frac{1}{x + 1} = \frac{1}{x + (1)} > 0$

$$ A = \int_{1}^{2} |f(x)| dx \ \text{u.a} = \int_{1}^{2} f(x) \ dx \ dx$$
$$= \int_{1}^{2} \frac{1}{x} dx \ \|\vec{i}\| \|\vec{j}\|$$ 
$$= [\ln(x) - \ln(1)] \Big|_1^2 \times 2 \text{ cm} \times 3 \text{ cm}$$
$$= \ln\left( \frac{2}{3} \right) + \ln(2) \times 6 \text{ cm}^2 = 6 \ln\left( \frac{4}{3} \right) \text{ cm}^2$$

2) On a : $\forall x \in \left]0, \frac{\pi}{2}\right]$ : $sin x \geq 0$ ; $sin x \leq 0$

$$ A = \int_{0}^{\frac{\pi}{2}} |g(x)| dx = \left( \int_{0}^{\frac{\pi}{2}} -\sin x dx + \int_{0}^{\frac{\pi}{2}} \sin x dx \right) \times \text{u.a}$$
$$= \left[ \cos x - [+ \cos x] \Big|_{0}^{\frac{\pi}{2}} \right] \times 6 \text{ cm}^2$$
$$= ((1 - 0) - (0 - 1)) \times 6 \text{cm}^2 = 12 \text{cm}^2$$


## Exercice 05

Le plan est apporté à un repère orthonormé $(O, \vec{i}, \vec{j})$ ; $\|\vec{i}\| = 1 \text{ cm}$.

Soit $f$ la fonction définie sur $]0, +\infty[$ par : $f(x) = x + (1 - \frac{2}{x}) \ln(x)$

1) Montrer que $(Cf)$ la courbe de $f$ est en dessous de la droite $(D)$ ; $y = x$ sur l’intervalle $[1, 2]$.

2) Par intégration par parties, montrer que 

$$ \int_{1}^{2} \left(\frac{2}{x - 1}\right) \ln x \ dx = (1 - \ln(2))^2$$

3) Déduire l’aire du domaine plan délimité par $(Cf)$, la droite $(D)$ et les droites d’équations $x = 1$ et $x = 2$.

### Solution

Soit $f$ la fonction définie sur $]0, +\infty[$ par : $f(x) = x + (1 - \frac{2}{x}) \ln(x)$

1) Montrer que $(Cf)$ la courbe de $f$ est en-dessous de la droite $(D)$ ; $y = x$ sur l’intervalle $[1, 2]$.
   Soit $x \in [1, 2]$

   $$f(x) - x = x + \left( 1 - \frac{2}{x} \right) \ln(x) - x$$
   $$= \left( \frac{-2}{x} \right) \ln(x)$$
   $$1 \leq x \leq 2 \Rightarrow x > 0 \text{ et } x - 2 \leq 0$$

   $$\Rightarrow \left( \frac{-2}{x} \right) \ln(x) \leq 0$$

   Donc $(Cf)$ est en dessous de $(D)$ ; $y = x$ sur l’intervalle $[1, 2]$.
```

<!-- Page 209 -->

```markdown
2) Par intégration par parties, montrer que 

$$ \int_1^2 \frac{(2}{x - 1}) \ln x \, dx = (1 - \ln 2)^2 $$

Posons $u(x) = \ln(x)$ et $v'(x) = \frac{2}{x - 1}$ alors

$$ u'(x) = \frac{1}{x} $$  
$$ v(x) = 2 \ln(x) - x $$

Il s'ensuit donc :

$$ \int_1^2 \frac{(2}{x - 1}) \ln x \, dx = \left[ (2 \ln(x) - x) \ln(x) \right]_1^2 - \int_1^2 \frac{2 \ln(x)}{x} \, dx $$

$$ = (2 \ln 2 - 2) - \int_1^2 \frac{2 \ln(x)}{x} \, dx $$

$$ = 2 \ln^2 2 - 2 \ln 2 - \left[ 2 \frac{\ln^2(x)}{2} - x \right]_1^2 $$

$$ = 2 \ln^2 2 - 2 \ln 2 - \left[ \ln^2(x) - x \right]_1^2 $$

$$ = 2 \ln^2 2 - 2 \ln 2 - (1 - \ln^2 2) $$

$$ = (1 - \ln 2)^2 $$


3) Déduire l'aire du domaine plan délimité par $(Cf)$, la droite $(D)$ et les droites d’équations $x = 1$ et $x = 2$.

On a $(Cf)$ est en dessous de $(D)$; $y = x$ sur l'intervalle $[1, 2]$

Donc $\forall x \in [1,2]: |f(x) - y| = y - f(x)$

$$ A = \int_0^2 |f(x) - y| dx \, u.a. $$

$$ = \int_0^2 (1 - \frac{2}{x}) \ln x \, cm^2 $$

$$ = \int_0^2 (2 - 1) \ln x \, dx $$

$$ = (1 - \ln 2)^2 \, cm^2 $$


4) Par intégration par parties, montrer que 

$$ \int_0^1 xe^{-x} \, dx = \frac{e^{-2}}{e} $$

Déduire l'aire du domaine délimité par $(Cf)$, la droite $(D)$ et les droites d’équations $x=0$ et $x=1$

Solution

Soit $f$ la fonction définie sur $[0, +\infty[$ par : $f(x) = (x^2 - x)e^{-x} + x$

1) Montrer que $(Cf)$ est en dessous de la droite $(D)$; $y = x$ sur l'intervalle $[0, 1]$

Soit $x \in [0, 1]$

$$ f(x) - x = (x^2 - x)e^{-x} + x - x $$ 
$$ = (x^2 - x)e^{-x} $$ 
$$ = x(x - 1)e^{-x} $$

$$ 0 \leq x \leq 1 \Rightarrow 0 \leq x - 1 \Rightarrow x(x - 1)e^{-x} \leq 0 \Rightarrow f(x) \leq x $$

Donc $(Cf)$ est en dessous de $(D)$; $y = x$ sur l'intervalle $[0, 1]$.

2) Montrer que la fonction $H : x \mapsto (x^2 + 2x + 2)e^{-x}$ est une primitive de la fonction $h : x \mapsto -x^2 e^{-x}$

Soit $x \in [0, 1]$

$$ H'(x) = [(x^2 + 2x + 2)e^{-x}]' $$ 
$$ = (2x + 2)e^{-x} - (x^2 + 2x + 2)e^{-x} $$ 
$$ = -x^2 e^{-x} - h(x) $$ 

Donc $H : x \mapsto (x^2 + 2x + 2)e^{-x}$ est une primitive de $h : x \mapsto -x^2 e^{-x}$.
```

<!-- Page 210 -->

```markdown
### 3) Déduire que : 

$$ \int_{0}^{1} x^2 e^{-x} dx = \frac{2e-5}{e} $$

On a $h : x \mapsto (x^2 + 2x + 2)e^{-x}$ est une primitive de $h : x \mapsto -x^2 e^{-x}$

Donc : 

$$ \int_{0}^{1} x^2 e^{-x} dx = -\left[(x^2 + 2x + 2)e^{-x}\right]_{0}^{1} $$

$$ = -5 e^{-1} + \frac{2}{e} = \frac{2e - 5}{e} $$

### 4) Par intégration par parties, montrer que 

$$ \int_{0}^{1} x e^{-x} dx = -\frac{e - 2}{e} $$ 

Posons $u(x) = x$ alors $u'(x) = 1$ et $v'(x) = e^{-x}$

Il s'ensuit donc : 

$$ \int_{0}^{1} x e^{-x} dx = \left[-x e^{-x}\right]_{0}^{1} + \int_{0}^{1} e^{-x} dx $$

$$ = -e^{-1} - [e^{-x}]_{0}^{1} = -e^{-1} - e^{-1} + 1 $$

$$ = -2e^{-1} + 1 = \frac{e - 2}{e} $$

### 5) Déduire l'aire du domaine délimité par $(Cf)$, la droite $(D)$ et les droites d’équations $x=0$ et $x=1$

On a $(Cf)$ est en dessous de $(D)$ ; $y = x$ sur l’intervalle $[0, 1]$

Donc $\forall x \in [0, 1] : |f(x) - y| = y - f(x)$

Aire :

$$ A = \int_{0}^{1} |f(x) - y| dx \u.a = \int_{0}^{1} y - f(x) dx \u.a $$

$$ = \int_{0}^{1} (x^2 - x)e^{-x} dx \cdot cm^2 $$

$$ = \left( \int_{0}^{1} x e^{-x} dx - \int_{0}^{1} x^2 e^{-x} dx \right) \cdot cm^2 $$

$$ = \left( \frac{e - 2}{e} - \frac{2e - 5}{e} \right) cm^2 $$

$$ = \left( \frac{3 - e}{e} \right) cm^2 $$

### Exercice 07

Soit $f$ une fonction définie sur $]0; +\infty[$ ; $f(x) = \frac{1 + \ln x}{x^2}$ ; $(Ch)$ la courbe de $f$ dans un repère orthonormé (unité 1 cm)

Soit $n \in \mathbb{N}^*$, on désigne par $I_n$ l’aire du domaine limité par la courbe $(Cf)$ la droite $(Ox)$ et les droites ; $x = \frac{1}{e} ; x = n$

1) Montrer que la fonction $F : x \mapsto -\frac{2 - \ln x}{x}$ et une primitive de la fonction $f$ sur $]0; +\infty[$  
2) Calculer $I_n$ en fonction de $n$
3) Déterminer $\lim_{n \to +\infty} I_n$

### Solution

1) Soit $x \in ]0; +\infty[$

$$ F'(x) = \left[-2 - \ln x \right]' = -\frac{1}{x} x + (2 + \ln x) = 1 + \frac{\ln x}{x^2} = f(x) $$

Donc $F : x \mapsto -\frac{2 - \ln x}{x}$ et une primitive de la fonction $f$ sur $]0; +\infty[$

$$ x \geq \frac{1}{e} \Rightarrow \ln(x) \geq \ln \left( \frac{1}{e} \right) = -1 $$

$$ \Rightarrow \ln(x) + 1 > 0 \Rightarrow f(x) > 0 $$ 

$$ I_n = \int_{\frac{1}{e}}^{1} f(x) dx \u.a = \int_{\frac{1}{e}}^{n} f(x) dx \u.a $$

$$ = \int_{\frac{1}{e}}^{1} \left[-2 - \ln x \right]_{1}^{n} cm^2 $$

$$ = \left( -\frac{2 - \ln n}{n} - \left(-2 - 1\right) \right) \times cm^2 $$

$$ = \frac{-2 \ln n - n - 2 + 1}{n} \times cm^2 $$

$$ = \left( \frac{-2 - \ln n}{n} \right) \times cm^2 $$

3) $\lim_{n \to +\infty} I_n = \lim_{n \to +\infty} e - \frac{2}{n} \cdot \frac{ln n}{n}$ 

Car : $\lim_{n \to +\infty} 2 + \frac{1}{n} = 0$ et $\lim_{n \to +\infty} f(x) = 0$
```

<!-- Page 211 -->

```markdown
# Prof : fayssal  
Site web : www.elboutkhili.jimdofree.com  

## Correction de série : Intégrale 2 bac biof Page 08  

### Exercice 08
1) Vérifier que : $$\int_2^1 \ln(x) dx \geq 0$$  
2) Vérifier que $ \forall t \in [1, +\infty[; \, t \leq \frac{1}{t^2} \leq 1$  
Puis en déduire que $ \forall x \in [1, +\infty[; \,\frac{1 - \frac{1}{x}}{1+t} \leq \ln(x)$  

3)a) Montrer que: $ \forall t \in \mathbb{R}^+; \, 1 - t \leq \frac{1}{1+t} \leq 1$  
b) En déduire que: $ \forall t \in \mathbb{R}^+; \, -\frac{x^2}{2} \leq \ln(1+x) \leq x$  
c) Déterminer un encadrement de l’intégrale $$I = \int_0^1 \ln(1+x) \, dx$$  

### Solution
1) On a : $ \forall x \in [1,2]; \, \ln(x) \geq 0$ donc $$\int_1^2 \ln(x) dx \geq 0$$  
2) On a $ \forall t \in [1,+\infty[; \, t \leq t^2$ donc $ \forall t \in [1; \frac{1}{t^2} \leq 1$  

On a $$\int_1^2 x^{1-t} dx \leq \int_1^{x} \frac{1}{-1}x^{1} \leq \int_1^2 [\ln t]_1^x$$ d’où $ \forall x \in [1,+\infty[; \, \ln(x)$  

3)a) Montrer que: $ \forall t \in \mathbb{R}^+; \, 1 - t \leq \frac{1}{1+t} \leq 1$  
Soit $ t \in \mathbb{R}^+$, donc $ t + t \geq 1$ donc $$\frac{1}{1 + t} \leq 1$$  

Et on a $ t^2 \geq 0$ donc $ -t^2 \leq 1 - t^2 \leq 1$  

Donc $$\int_0^1 -t \, dx \leq \int_1^2 -\frac{x^2}{2} \leq \ln(1 + x) \leq x$$  

D’où $ \forall x \in \mathbb{R}^+; \, x - \frac{x^2}{2} \leq \ln(1+x) \leq x$  

### Exercice 09
Soit $n \in \mathbb{N}$, considérons la suite $(I_n)_{n \in \mathbb{N}}$ telle que :  
$$I_n = \int_2^1 \frac{1}{(1+x^2)^n} dx$$  

1) Etudier le sens de variation de la suite $(I_n)_{n \in \mathbb{N}}$  
2) Montrer que la suite $(I_n)_{n \in \mathbb{N}}$ est convergeante  
3) Montrer que $ \forall n \in \mathbb{N}: 0 \leq I_n \leq \frac{1}{2^n}$  
4) En déduire la limite de la suite $(I_n)_{n \in \mathbb{N}}$  

### Solution
1) Soit $n \in \mathbb{N}$, la suite $(I_n)_{n \in \mathbb{N}}$ tel que : $$ I_n = \int_2^1 \frac{1}{(1+x^2)^n} dx$$  
Etudier le sens de variation de la suite $(I_n)_{n \in \mathbb{N}}$  
Soit $n \in \mathbb{N}$  

$$I_{n+1} - I_n = \int_2^1 \frac{1}{(1+x^2)^{n+1}} dx - \int_2^1 \frac{1}{(1+x^2)^n} dx$$  

$$= \int_2^1 \left(\frac{1}{(1+x^2)^{n+1}} - \frac{1}{(1+x^2)^{n}} \right) dx$$  

$$= \int_2^1 \frac{-x^2}{(1+x^2)^{n+1}} dx$$  

2) Montrer que la suite $(I_n)_{n \in \mathbb{N}}$ est convergente  
3) Montrer que $ \forall n \in \mathbb{N}: 0 \leq I_n \leq \frac{1}{2^n}$  
4) En déduire la limite de la suite $(I_n)_{n \in \mathbb{N}}$  
```

<!-- Page 212 -->

```
# Prof : fayssal
Site web : www.elboutkhili.jimdofree.com
Correction de série : Intégrale 2 bac bio Page 09

## Exercice 10.

1) Linéariser $ \cos^3 x $ puis calculer $ \int_0^{\frac{\pi}{4}} \cos^3 (x) \,dx $.

2) Calculer les intégrales : $ A = \int_0^{1} \frac{x^3 + 4}{x + 1} \,dx $ ; $ B = \int_2^{3} \frac{5x + x - 2}{x^2 + 2} \,dx $.

### Solution

Linéariser le polynôme trigonométrique $ \cos^3 x $.

On applique une formule d’Euler :
$$ \cos^3 x = \left( \frac{e^{ix} + e^{-ix}}{2} \right)^3 = \frac{1}{8} \left( (e^{ix})^3 + 3(e^{ix})^2 e^{-ix} + 3e^{ix} (e^{-ix})^2 + (e^{-ix})^3 \right) $$

Donc : $ \cos^3 x = \frac{1}{8} \left( e^{3ix} + 3e^{ix} e^{-2ix} + 3e^{-ix} e^{2ix} + e^{-3ix} \right) $$

$$ = \frac{1}{8} \left( \cos 3x + i \sin 3x + 3 \cos x + 3i \sin x - 3 \sin x - \cos 3x \right) $$

$$ = \frac{1}{8} \left( ( \cos 3x + 3 \cos x) + i ( \sin 3x - 3 \sin x ) \right) $$

Une primitive de la fonction $ x \mapsto \frac{1}{4} ( \frac{1}{3} \sin 3x + 3 \sin x ) $ est

$$ \int_0^{\frac{\pi}{4}} \cos^3 (x) \,dx = \frac{1}{12} \sin 3x + \frac{3}{4} \sin x \bigg|_0^{\frac{\pi}{4}} $$

$$ = \frac{1}{12} \left( \frac{3\sqrt{2}}{4} - \frac{3\pi}{4} + \frac{\pi}{4} \right) $$

$$ = \frac{1}{12} \left( \frac{3\sqrt{2}}{4} + \frac{\pi}{4} \right) $$

$$ = \frac{\sqrt{2} + 3}{24} $$
```

<!-- Page 213 -->

```markdown
# Prof : fayssal
## Site web : www.elboutkhili.jimdofree.com
### Correction de série : Intégrale
#### 2 bac biof
#### Page 10

2) Calculer les intégrales : $ A = \int_{0}^{1} \frac{x^3 + x + 4}{x + 1} \, dx ; \, B = \int_{2}^{3} \frac{5x + 1}{x^2 + x - 2} \, dx $

On pose : $ f(x) = \frac{x^3 + x + 4}{x + 1} $ sur $ I = [0; 1] $

$$ 
\begin{array}{rcl}
x^3 + x + 4 & = & (x + 1)(x^2 - x + 2) \\
0 & = & -x^2 + 4 \\
0 & = & x^2 - 4 \\
2x + 2 & = & 0 + 2 \\
\end{array}
$$

Donc : $ x^3 + x + 4 = (x + 1)(x^2 - x + 2) + 2 $

Donc : 

$$ 
\frac{x^3 + x + 4}{x + 1} = \frac{(x + 1)(x^2 - x + 2) + 2}{x + 1} = x^2 - x + 2 + \frac{2}{x + 1} 
$$

Donc une primitive est : 

$$ 
F(x) = \frac{x^3}{3} - \frac{x^2}{2} + 2x + 2 \ln(x + 1) 
$$

$$ 
A = \int_{0}^{1} \frac{x^3 + x + 4}{x + 1} \, dx 
$$

$$ 
= \left[ \frac{x^3}{3} - \frac{x^2}{2} + 2x + 2 \ln(x + 1) \right]_{0}^{1} 
$$

$$ 
= \frac{1}{3} - \frac{1}{2} + 2 \ln(2) 
$$

$$ 
= -\frac{1}{6} - 2 \ln(2) 
$$

B = $\int_{2}^{3} \frac{5x + 1}{x^2 + x - 2} \, dx$

On pose $ g(x) = \frac{5x + 1}{x^2 + x - 2} = \frac{5x + 1}{(x - 1)(x + 2)} $ sur $ I = [2;3] $

Donc il existe deux réels $ a $ et $ b $ tel que : $ g(x) = \frac{a}{x - 1} + \frac{b}{x + 2} $

$$ 
g(x) = \frac{a}{x - 1} + \frac{b}{x + 2}
$$

Cherchons $ a $ et $ b $ :

$$ 
g(x) = \frac{a}{x - 1} + \frac{b}{x + 2} = \frac{ax + 2a + bx - b}{(x - 1)(x + 2)} 
$$

$$ 
= \frac{(a + b)x + 2a - b}{(x - 1)(x + 2)} 
$$

Et on a : $ g(x) = \frac{5x + 1}{x^2 + x - 2} $

Donc : 
$$ 
\begin{cases}
a + b = 5 \\
2a - b = 1 
\end{cases}
$$ 

$$ 
\begin{cases}
3b = 9 ; 2L_1 - L_2 \\
2a - b = 1 
\end{cases}
$$ 

$$ 
\begin{cases}
b = 3 ; \\
2a - 3 = 1 
\end{cases}
$$ 

Donc : 

$$ 
g(x) = \frac{2}{x - 1} + \frac{3}{x + 2} 
$$

Donc une primitive de $ g $ est :

$$ 
G(x) = 2 \ln(x - 1) + 3 \ln(x + 2) 
$$

$$ 
B = \int_{2}^{3} \frac{5x + 1}{x^2 + x - 2} \, dx 
$$

$$ 
= \left[ 2 \ln(x - 1) + 3 \ln(x + 2) \right]_{2}^{3} 
$$

$$ 
= 2 \ln(2) + 3 \ln(5) - 0 + 3 \ln(4) 
$$

$$ 
= 8 \ln(2) + 3 \ln(5) 
$$
```

<!-- Page 214 -->

```markdown
# Prof : fayssal
Site web : www.elboutkhili.jimdofree.com

## Exercice 11

Soit $f$ une fonction définie sur $]0; +\infty[$ par :
$$ 
f(x) = -\frac{1}{4}x^2 + 4x + \left(\frac{1}{2}x^2 - 4x\right) \ln x 
$$
Et $(C_f)$ son graphe dans un repère orthonormé $(O ; \vec{i} ; \vec{j})$ d’unité 1 cm et Soit la fonction $h$ définie sur $[1 ; e]$ par :
$$ 
h(x) = -\frac{1}{4}x^2 + 4x  \text{ et } (C_h) \text{ son graphe dans le repère } (O ; \vec{i} ; \vec{j}) 
$$
1) Montrer que : $\forall x \in [1 ; e], f(x) - h(x) \leq 0$
2) Par une intégration par parties montrer que 
$$ 
\int_1^e \left(\frac{1}{2}x^2 - 4x\right) \ln x \, dx = \frac{2e^3 - 18e^2 - 17}{18} 
$$
3) Calculer en $cm^2$, l'aire du domaine plan limité par les courbes $(C_f)$ et $(C_h)$ et les droites d'équations $x = 1$ et $x = e$.

## Solution

Soit la fonction $h$ définie sur $[1 ; e]$ par :
$$ 
h(x) = -\frac{1}{4}x^2 + 4x \text{ et } (C_h) \text{ son graphe dans le repère } (O ; \vec{i} ; \vec{j}) 
$$
1) Montrer que : $\forall x \in [1 ; e], f(x) - h(x) \leq 0$
Soit $[1 ; e]$
$$ 
f(x) - h(x) = -\frac{1}{4}x^2 + 4x - \left(\frac{1}{2}x^2 - 4x\right) \ln x + 1 \cdot 4x - 4x 
$$
$$ 
= \left(\frac{1}{2}x^2 - 4x\right) \ln x = \frac{1}{2}(x^2 - 8) \ln x 
$$
On a $x \geq 1$
Donc $1 \geq 0 \text{ et } x \geq e $
Donc $(x - 8) \leq 0 \text{ et } x \geq 0$

2) Par une intégration par parties montrer que 
$$ 
\int_1^e \left(\frac{1}{2}x^2 - 4x\right) \ln x \, dx = \frac{2e^3 - 18e^2 - 17}{18} 
$$
Soit $x \in [1, e]$
On a 
$$ A = \int_1^e f(x) - h(x) dx \, u.a. $$
Et on a $f(x) - h(x) \leq 0$

Donc 
$$ A = \int_1^e f(x) - h(x) \, dx = \int_1^e f(x) - h(x) dx = \int_1^e f(x) - h(x) \, u.a. = \int_1^e \, dx $$

Ainsi :
$$ I = \int_1^e \left(\frac{1}{2}x^2 - 4x\right) \ln x \, dx $$ 
$$ = \int_1^e \left(\frac{1}{2}x^2 - 4x\right) \, dx $$

$$ = \frac{2e^3 - 18e^2 - 17}{18} \, cm^2 $$

En résumé :
$$ \int_1^e \left(\frac{1}{2}x^2 - 4x\right) \ln x \, dx = \frac{2e^3 - 18e^2 - 17}{18} \, cm^2 $$
$$ = \frac{18e^2 + 17 - 2e^3}{18} \, cm^2 $$
```

<!-- Page 215 -->

```markdown
# Prof : fayssal
## Site web : www.elboutkhili.jimdofree.com
### Page 12

## Exercice 12
L'espace est rapporté à R.O.N $(\vec{i}, \vec{j}, \vec{k})$ avec $\lVert \vec{u} \rVert = 1 \, cm$  
Calculer en $cm^3$ le volume de solide de révolution engendré par la rotation de $C(f)$ par rapport à $(Ox)$ (tour complet) sur $I$  
1) $f(x) = e^x$ sur $I = [0; 1]$ ; 2) $g(x) = \sqrt{1 - x^2}$ sur $I = [-1; 1]$

### Solution
1) Le volume du solide engendré par la rotation de la courbe de la fonction $x \to e^x$ sur $[0; 1]$ est donné par :  
$$ V = \pi \int_0^1 (f(x))^2 \, dx \, cm^3 $$  
$$ = \pi \int_0^1 (e^x)^2 \, dx = \pi e^2 dx \, cm^3 - \frac{\pi}{2}[e^2]_1^0 = \pi(\frac{e^2 - 1}{2}) \, cm^3 $$

2) Le volume du solide engendré par la rotation de la courbe de la fonction $x \to \sqrt{1 - x^2}$ sur $[-1, 1]$  
Autour de l'axe des abscisses un tour complet est donné par :  
$$ V = \pi \int_{-1}^{1} (g(x))^2 \, dx \, cm^3 $$  
$$ = \pi \int_{-1}^{1} (\sqrt{1 - x^2})^2 \, dx \, cm^3 $$  
$$ = \pi \int_{-1}^{1} (1 - x^2) \, dx = \pi (1 - x^2)^2 \bigg|_{-1}^{1} = \frac{4\pi}{3} \, cm^3 $$

---

## Exercice 13
Soit l'équation différentielle :  
$(E): y'' - 4y' + 13y = 0$  
1) Résoudre dans $\mathbb{R}$ l'équation $(E)$  
2) Déterminer la solution $g$ de $(E)$ tel que :  
$g(0) = 0$ et $g'(0) = 3$  
3) Déduire que $$ \int_0^{\pi} \sin(3x)e^{2x} \, dx = \frac{3}{13}(1 + e^{2\pi}) $$  
4) Calculer l'intégrale $$ \int_0^{\pi} \cos(3x)e^{2x} \, dx $$  

### Solution d'exercice 13
Soit l'équation différentielle : $(E): y'' - 4y' + 13y = 0$  
1) Résoudre dans $\mathbb{R}$ l'équation $(E)$  
L'équation caractéristique associée à $(E)$ est  
$$ r^2 - 4r + 13 = 0 $$  
On a  
$$ \Delta = (-4)^2 - 4 \times 1 \times 13 = -36 < 0 $$  

Donc l'équation caractéristique $r^2 - 4r + 13 = 0$ admet deux solutions complexes sont $z_1 = \frac{4 + i\sqrt{36}}{2} = 2 + 3i$ et $z_2 = \overline{z_1}$  

Donc les solutions de l'équation $(E)$ sont les fonctions et définit sur $\mathbb{R}$ par :  
$$ y(x) = (\cos(3x) + \beta\sin(3x))e^{2x} \quad ; \beta \in \mathbb{R} $$
```

<!-- Page 216 -->

```markdown
# Correction de série : Intégrale
## Site web : www.elbouthkili.jimdofree.com 
### Page 13

2) Déterminer la solution $g$ de $(E)$ tel que :
$$
g(0) = 0 \quad \text{et} \quad g'(0) = 3
$$
On a $g(x) = (a \cos(3x) + b \sin(3x)) e^{2x} ; \quad \alpha, \beta \in \mathbb{R}$
Déterminons $\alpha$ et $\beta$ tels que $g(0) = 0 \quad \text{et} \quad g'(0) = 3$ 
$$
g' = (-3a \sin(3x) + 3b \cos(3x)) e^{2x} + 2e^{2x} (a \cos(3x) + b \sin(3x))
$$
$$
\begin{aligned}
g(0) &= 0 \\
g'(0) &= 3 \\
\end{aligned}
\Leftrightarrow 
\begin{aligned}
& \begin{cases}
\alpha = 0 \\
3\beta + 2a \cos(0) = 3
\end{cases} \\
& \Leftrightarrow 
\begin{cases}
\alpha = 0 \\
3\beta = 3
\end{cases} \\
& \Leftrightarrow 
\begin{cases}
\alpha = 0 \\
\beta = 1
\end{cases}
\end{aligned}
$$
D'où $g(x) = \sin(3x) e^{2x}$ 

3) Vérifier que $g'(\pi) = -3e^{2\pi}$ puis en déduire que :
$$
\int_{0}^{\pi} g(x) \, dx = \frac{3}{13} (1 + e^{2\pi})
$$
On a : $g(x) = \sin(3x)e^{2x}$
Donc : $g'(x) = 3\cos(3x)e^{2x} + 2e^{2x}\sin(3x)$
Donc $g'(\pi) = 3\cos(3\pi)e^{2\pi} + 2e^{2\pi}\sin(3\pi) = -3e^{2\pi}$

On a g est une solution de $(E)$
Donc $g''(x) - 4g'(x) + 13g(x) = 0$
Donc $g(x) = \frac{1}{13} (4g'(x) - g''(x))$

$$
I = \int_{0}^{\pi} g(x) \, dx = \int_{0}^{\pi} \frac{1}{13} (4g'(x) - g''(x)) \, dx
$$
$$
= \frac{4}{13} \int_{0}^{\pi} g'(x) \, dx - \frac{1}{13} \int_{0}^{\pi} g''(x) \, dx
$$
$$
= \frac{4}{13} \left[ g(x) \right]_{0}^{\pi} - \frac{1}{13} \left[ g'(\pi) - g'(0) \right]
$$
$$
= \frac{4}{13} \left( g(\pi) - g(0) \right) - \frac{1}{13} (g'(\pi) - g'(0))
$$
$$
= \frac{4}{13} ( \sin(3\pi)e^{2\pi} - 0) - 1/13 (-3e^{2\pi} - 3)
$$
$$
= \frac{4}{13} (0 - 0) + \frac{1}{13} (3e^{2\pi} + 3)
$$
$$
= \frac{3}{13} (1 + e^{2\pi})
$$

4) Par une intégration par parties calculer $J = \int_{0}^{\pi} \cos(3x) e^{2x} \, dx$
Posons 
$$
\begin{cases}
u(x) = e^{2x} \\
v'(x) = \cos(3x)
\end{cases}
$$ 
alors 
$$
\begin{cases}
u'(x) = 2e^{2x} \\
v(x) = \frac{1}{3} \sin(3x)
\end{cases}
$$
Il s’ensuit donc :
$$
J = \left[ -\frac{1}{3} e^{2x}\sin(3x) \right]_{0}^{\pi} + \frac{2}{3} \int_{0}^{\pi} \sin(3x)e^{2x} \, dx
$$
$$
= 0 + \frac{2}{3} \int_{0}^{\pi} g(x) \, dx
$$
$$
= \frac{2}{3} \cdot \frac{3}{13} (1 + e^{2\pi}) = \frac{2}{13} (1 + e^{2\pi})
$$
```

<!-- Page 217 -->

```markdown
# Deuxièmes bac sciences
## PC/SVT/ST

## Résumé : Produit scalaire dans l'espace
## Deuxièmes bac sciences PC/SVT/ST

- Cours détaillé
- Résumé de cours
- Série corrigée
```

<!-- Page 218 -->

```markdown
# www.elboutkhili.jimdofree.com
## Résumé : GEOMETRIE DANS L'ESPACE
### Prof : FAYSSAL 2bac SC PC/SVT/ST

### Condition de colinéarité de deux vecteurs
Soient $\vec{U}(x; y; z)$ et $\vec{V}(x'; y'; z')$ deux vecteurs  
$\vec{U} \ \text{et} \ \vec{V}$ sont colinéaires si $\exists \alpha \in \mathbb{R}: \ \vec{U} = \alpha \vec{V}$  
$$ \Delta x = \frac{y}{z} ; \Delta y = \frac{x}{z} ; \Delta z = 0 $$

### Vecteurs coplanaires
$\vec{U}(x; y; z) ; \ \vec{V}(x'; y'; z') \ \text{et} \ \vec{W}(x''; y''; z'')$ Les vecteurs $\vec{U} \ \text{et} \ \vec{W}$ sont coplanaires si $det(\vec{U}, \vec{V}, \vec{W}) = 0$

### Norme d’un vecteur et distance entre deux points
$A(x_A; y_A; z_A) \ \text{et} \ B(x_B; y_B; z_B)$  
Soit $(x; y; z)$ un vecteur dans l'espace:  
$$ ||\vec{V}|| = \sqrt{x^2 + y^2 + z^2} $$  
$$ \vec{AB} = (x_B - x_A; y_B - y_A; z_B - z_A) $$  
$$ \vec{AB} = (x_B - x_A)^2 + (y_B - y_A)^2 + (z_B - z_A)^2 $$  
Coordonnées de le milieu de $[AB]$ est :  
$$ \left( \frac{x_A + x_B}{2}, \frac{y_A + y_B}{2}, \frac{z_A + z_B}{2} \right) $$

### Formule trigonométrique du produit scalaire
Soient $\vec{U} \ \text{et} \ \vec{V}$ deux vecteurs dans l'espace donc : $\vec{U} = \vec{AB} \ \text{et} \ \vec{V} = \vec{AC}$  
Le produit scalaire de $\vec{U} \ \text{et} \ \vec{V}$ dans l'espace est le nombre réel noté $\vec{U} \cdot \vec{V}$ et défini par:  
$$ \vec{U} \cdot \vec{V} = ||\vec{U}|| \times ||\vec{V}|| \times \cos(\angle (AB; AC)) $$

### Formule analytique du produit scalaire
Soient $\vec{U}(x; y; z)$ et $\vec{V}(x'; y'; z')$ on a :  
$$ \vec{U} \cdot \vec{V} = x \cdot x' + y \cdot y' + z \cdot z' $$

### DROITE DANS L’ESPACE
Soit $(D)$ la droite qui passant par le point $A(x_A; y_A; z_A)$ et de vecteur directeur $\vec{U}(a; b; c)$  
Une représentation paramétrique de $(D)$  
$$ x = x_A + at $$  
$$ y = y_A + bt $$  
$$ z = z_A + ct $$  
$(t \in \mathbb{R})$

### Position relative de deux droites
$(D)$ une droite de vecteur directeur $\vec{U} \ \text{et} \ (D')$ une droite de vecteur directeur $\vec{V}$  
$$(D) // (D') \ \text{ssi} \ \vec{U} \ \text{et} \ \vec{V} \ \text{sont colinéaires}$$  
$$(D) \perp (D') \ \text{ssi} \ \vec{U} \ \text{et} \ \vec{V} \ \text{sont orthogonaux}$$

### Plan dans l’espace - Vecteur normale
Tout vecteur $\vec{n}$ non nul sa direction est perpendiculaire au plan $(P)$ s'appelle vecteur normal au plan $(P)$  
Toute équation cartésienne de la forme : $(P): ax + by + cz + d = 0$  
Le vecteur $\vec{n} = (a; b; c)$ est un vecteur normal au plan $(P)$: $ax + by + cz + d = 0$  
A un point $M(x; y; z)$ dans l'espace l'ensemble des points $M(x; y; z)$ où  
$$ AM \cdot \vec{n} = 0 $$ est un plan $(P)$ passant par $A$ et de vecteur normale $\vec{n}$

### Position relative de deux plans
Soient $(P)$ Un plan de vecteur normale $\vec{n}$ et $(Q)$ un plan de vecteur normal $\vec{n}'$  
$$(P)/(Q) \ \text{ssi} \ \vec{n} \ \text{et} \ \vec{n}' \ \text{sont colinéaires}$$  
$$(P) \perp (Q) \ \text{ssi} \ \vec{n} \ \text{et} \ \vec{V} \ \text{sont orthogonaux}$$

### Position relative d’un plan et une droite
$(D)$ une droite de vecteur directeur $\vec{U}$ et $(P)$ Un plan de vecteur normale $\vec{n}$  
$$(P) \perp (D) \ \text{ssi} \ \vec{n} \ \text{et} \ \vec{U} \ \text{sont colinéaires}$$  
$$(P)/(D) \ \text{ssi} \ \vec{U} \ \text{et} \ \vec{V} \ \text{sont orthogonaux}$$
```

<!-- Page 219 -->

```markdown
# DISTANCE D’UN POINT à UN PLAN
Soient $(P) : ax + by + cz + d = 0$ un plan et $A(x_A; y_A; z_A)$ un point de l’espace et $H$ la projection orthogonale de $A$ sur le plan $(P)$

La distance de point $A$ au plan $(P)$ est :
$$
d(A; (P)) = AH = \frac{|ax_A + by_A + cz_A + d|}{\sqrt{a^2 + b^2 + c^2}}
$$

## Sphère dans l’espace
Soit $(S)$ la sphère de centre $\Omega(a; b; c)$ et de rayon $R$ l’équation cartésienne de $(S)$ est :
$$
(x - a)^2 + (y - b)^2 + (z - c)^2 = r^2
$$
- L’équation cartésienne de la sphère $(S)$ définit par son diamètre $[AB]$ est donnée par $M(x; y; z) \in (S) \Longleftrightarrow AM.BM = 0$

### Proposition : l’ensemble des points $M$
L’ensemble des points $M(x; y; z)$ de l’espace tel que :
$$(S) : x^2 + y^2 + z^2 + ax + by + cz + d = 0$$
est un sphère si $D = a^2 + b^2 + c^2 - 4d > 0$
- Son centre est le point $\left(-\frac{a}{2}; -\frac{b}{2}; -\frac{c}{2}\right)$
- Son rayon est $r = \sqrt{\frac{D}{2}}$

# Position relative d'une sphère et un plan
Soit $(S)$ une sphère de centre $\Omega$ et de rayon $R$ et $(P)$ un plan et la distance entre le centre $\Omega$ est le plan $(P) : d = d(\Omega; (P))$

- $d > R$ Dans ce cas le plan ne coupe pas la sphère
- $d = R$ Dans ce cas le plan est tangent à la sphère en un point $H$
- $d < R$ Dans ce cas le plan coupe la sphère

Suivant un cercle $(C)$ de centre $C$ et de rayon $r$ tel que : $r = \sqrt{R^2 - d^2}$

# Position relative d’une sphère et une droite
Soit $(S)$ une sphère de centre $\Omega$ et de rayon $R$ et $(\Delta)$ la droite passant par le point $A$ et de vecteur directeur $\vec{u}(\alpha; \beta; \gamma)$

Pour déterminer les coordonnées des points d’intersections de sphère $(S)$ et la droite $(\Delta)$ on résout le système suivant :
$$
\begin{cases}
x = x_A + \alpha t \\ 
y = y_A + \beta t \\ 
z = z_A + \gamma t 
\end{cases}
$$
$$(S) : (x - x_\Omega)^2 + (y - y_\Omega)^2 + (z - z_\Omega)^2 = R^2$$
```

<!-- Page 220 -->

```markdown
# Deuxièmes bac sciences
## PC/SVT/ST

### Série corrigée : Produit scalaire dans l'espace
#### Deuxièmes bac sciences PC/SVT/ST

- Cours détaillé
- Résumé de cours
- Série corrigée
```

<!-- Page 221 -->

```markdown
# Prof : Fayssal  Site web : www.elbouthkili.jimdofree.com  Série : Produit scalaire dans l'espace  2BAC-PC  Page 01

L'espace est rapporté à un repère orthonormé direct $(O, \vec{i}, \vec{j}, \vec{k})$

## Exercice 01
Soient $A(-1; -3; -2)$, $B(0; 4; 2)$, $C(2; -1) $ et $D(1; 1; 1)$ des points
1) Montrer que $(AB) \parallel (CD)$
2) Déterminer une représentation paramétrique de la droite $(AC)$
3) Vérifier que le point $B(2; -2; -1)$ appartient $(AC)$
4) Vérifier que le point $E(1; 2; -3)$ n’appartient pas $(AC)$

## Exercice 02
Soient $A(1; -2; -1)$, $B(3; 3; 0)$ et $C(6; 0; 0)$ des points dans l’espace
1) Vérifier que les points $O ; B$ et $C$ ne sont pas alignés
2) Montrer que le triangle $OBC$ est rectangle et isocèle en $B$
3) Vérifier que les points $O ; A ; B$ et $C$ ne sont pas coplanaires

## Exercice 03
Déterminer une équation cartésienne des plans suivants
1) Le plan $(P)$ passant par le point $A(1; -1; 0)$est de vecteur normal $\vec{n}(3; 2; -1)$
2) Le plan $(Q)$ passant par le point $O$ est de vecteur normal $\vec{k}$

## Exercice 04
Soient les plans ; $(P) : 2x + y - z + 1 = 0$ et 
$(Q) : x + \frac{1}{2} - \frac{1}{2} z = 0$ et $(R) : -3y - z + 3 = 0$
1) Montrer que $(P) // (Q)$ et que $(P) \perp (R)$
2) En déduire la position relative des plans $(Q)$ et $(R)$
3) Déterminer une représentation paramétrique de la droite $(D)$ l'intersection des plans $(P)$ et $(R)$

## Exercice 05
Soit le plan$(P): 4x - 2y + z + 1 = 0$ et la droite $(D)$ :
$$ 
\begin{cases}
x = 1 - t \\
y = -1 + \frac{1}{2}t \\
z = -1 + \frac{1}{4}t 
\end{cases}
$$
1) Montrer que $(P)$ et $(D)$ sont orthogonaux 
2) Déterminer les coordonnées de $H$ l'intersection de $(P)$ et $(D)$

## Exercice 06
Soit $(P)$ le plan défini par l’équation $(P) : 2x + 3y - z + 4 = 0$
1) Calculer la distance de point $A(1; 0; 1)$ au plan $(P)$ 
2) Déterminer que le point $A$ n’appartient pas au plan $(P)$
3) Déterminer une représentation paramétrique de la droite $(D)$ passant par le point $A$, et orthogonale au plan $(P)$.
4) En déduire les coordonnées du point $H$ le projet orthogonal du point $A$ sur le plan $(P)$.

## Exercice 07
1) Déterminer l’équation cartésienne du sphère $(S)$ de centre $\Omega(2; -1; 1)$ et de rayon $R=5$
2) Déterminer une équation de sphère $(S)$ de centre $A(4; -1 ; 0)$ et passant par le point $B(3 ; 5 ; 1)$
3) Soit l'ensemble $(S)$ d’équation $x^2 + y^2 + z^2 - 2x + 4y - 11 = 0$ Montrer que l'ensemble $E$ est une sphère dont on déterminera les caractéristiques (centre, rayon). avec deux méthodes
4) Soient les points $A(1; -2; 1)$ et $B(1; -2; 1)$, déterminer une équation de sphère $(S)$ de diamètre $[AB]$ avec deux méthodes

## Exercice 08
Soit $(S)$ la sphère d'équation $(S) : x^2 + y^2 + z^2 - 4x - 5 = 0$ Et le plan $(P)$ d’équation cartésienne : $(P) : 2x - y - 2z + 5 = 0$
1) Déterminer $\Omega$ le centre de la sphère $(S)$ et son rayon $R$.
2) Calculer $d(\Omega; (P))$ puis en déduire que le plan $(P)$ est tangente à la sphère $(S)$ en un point $H$.
3) Déterminer les coordonnées du point de contact $H$.

## Exercice 09
Soit $(S)$ la sphère de centre $\Omega(1; 1; -1)$ et de rayon $R = 3$ et $(P)$ le plan $(P) : x - y = 0$
1) Calculer $d(\Omega; (P))$ puis en déduire que le plan $(P)$ coupe la sphère $(S)$ suivant un cercle $(C)$
2) Déterminer les coordonnées du point $H$ le centre du cercle $(C)$ et son rayon $r$
3) Vérifier que le point $A(3; 3; 0) \in (S)$
4) Déterminer l’équation du plan $(Q)$ tangente à la sphère $(S)$ en $A$.
```

<!-- Page 222 -->

```markdown
# Prof : fayssal
# Site web : www.elboutkhili.jimdofree.com 
# Série: Produit scalaire dans l’espace 2BAC-PC/SVT 
# Page 02

## Exercice 10
Soit la droite $(D)$ définie par la droite $(D) :$
$$
\begin{cases}
x = 1 + t \\
y = -1 - t \quad (t \in \mathbb{R}) \\
z = -t
\end{cases}
$$
Déterminer l’intersection de la droite $(D)$ avec la sphère $(S)$ dans chaque cas : 

a) $(S) : x^2 + y^2 + z^2 + 2x - 1 = 0$

b) $(S) : x^2 + y^2 + z^2 - 2x + 2y - 1 = 0$

## Exercice 11
Soient les points $A(2 ; 2 ; 2) ; B(2 ; 4 ; 0)$ et $C(6 ; 2 ; -2)$, $(S)$ la sphère de centre $\Omega(3 ; 3 ; 3)$ et de rayon $r = \sqrt{3}$ 

1) a) Montrer que les points $A ; B$ et $C$ ne sont pas alignés

b) Montrer que $\vec{n} (1 ; 1 ; 1)$ est un vecteur normal au plan $(ABC)$

c) Vérifier que $x + y + z - 6 = 0$ est une équation cartésienne du plan $(ABC)$

2) a) Montrer que le plan $(ABC)$ est tangent à la sphère $(S)$ et que $A \in (S)$

b) Déterminer le triplet des coordonnées du point de contact de $(ABC)$ et $(S)$

3) Soit $M (a ; b ; c)$ un point du plan $(ABC)$ tels que $a ; b$ et $c$ sont des réels 

a) Montrer que $QM > r$

b) En déduire que $a^2 + b^2 + c^2 \geq 12$

## Exercice 12
L’espace est mené d’un repère orthonormé $(O ; \vec{i} ; \vec{j} ; \vec{k})$. Soient les points $A(-1 ; 0 ; 0)$ et $B(1 ; 2 ; 0)$ et le plan $(P)$ d’équation $2x + 2y - z + 3 = 0$

3) a) Vérifier que le vecteur $\overrightarrow{AB}$ est normal au plan $(P)$

b) Déterminer une représentation paramétrique de la droite $(AB)$

## Exercice 13
1) On considère les points $A(0 ; 1 ; 1), B(1 ; 0 ; 1), C(1 ; 1 ; 0)$

a) Montrer que $x + y + z - 2 = 0$ est une équation cartésienne du plan $(ABC)$.

b) Déterminer une équation cartésienne de la sphère $(S)$ de centre $O$ et tangent à $(ABC)$

c) Déterminer les coordonnées de $l$ le point de contact de $(S)$ et $(ABC)$

2) Soit $\alpha$ un réel, on considère les points $E(-\alpha; -\frac{2}{\sqrt{3}}; \alpha)$ et $F(-\alpha; -\frac{2}{\sqrt{3}}; \alpha)$ et $(S_\alpha)$ l’ensemble des points $M$ de l’espace tel que : $ME^2 + \overrightarrow{ME} . \overrightarrow{EF} = 0$

a) Montrer que $(S_\alpha)$ est la sphère de diamètre $[EF]$

b) Montrer que pour tout réel $\alpha$, la sphère $(S_\alpha)$ est tangent au plan $(ABC)$

c) On notera $J$ le point de contact de $(S_\alpha)$ et $(ABC)$, déterminer la valeur $\alpha$ pour que $IJ = \sqrt{2}$
```

<!-- Page 223 -->

```markdown
# Prof : Fayssal
Site web : www.elbouthkili.jimdofree.com

## Exercice 01
Soient $A(-1; -3; -2)$, $B(0; 4; 2)$, $C(2; 2; -1)$ et $D(1; 1; 1)$ quatre points dans l’espace

1) Montrer que $(AB) \perp (CD)$
2) Déterminer une représentation paramétrique de la droite $(AC)$
3) Vérifier que le point $B(2; -2; -1)$ appartient $(AC)$
4) Vérifier que le point $E(1; 2; -3)$ n’appartient pas $(AC)$

## Exercice 05
1) Montrer que $(AB) \perp (CD)$

La droite $(AB)$ de vecteur directeur 
$$
\begin{pmatrix}
0 - (-1) \\
4 - (-3) \\
(2) - (-2)
\end{pmatrix}
=
\begin{pmatrix}
1 \\
7 \\
4
\end{pmatrix}
$$

La droite $(CD)$ de vecteur directeur 
$$
\begin{pmatrix}
1 - (2) \\
1 - (2) \\
(1) - (-1)
\end{pmatrix}
=
\begin{pmatrix}
-1 \\
-1 \\
2
\end{pmatrix}
$$

$$
\overline{AB} \cdot \overline{CD} = 
\begin{pmatrix}
\frac{1}{4} \\
\frac{-1}{2}
\end{pmatrix}
\cdot
\begin{pmatrix}
1 \\
-1
\end{pmatrix}
=
-1 - 7 + 8 = 0
$$

Donc : $(AB) \perp (CD)$

2) Déterminer une représentation paramétrique de la droite $(AC)$

La droite $(AC)$ passe par $A(-1; -3; -2)$ et de vecteur directeur
$$
\overline{AC} = 
\begin{pmatrix}
2 - (-1) \\
2 - (-3) \\
(-1) - (-2)
\end{pmatrix}
=
\begin{pmatrix}
3 \\
5 \\
1
\end{pmatrix}
$$

Pour la représentation paramétrique de la droite $(AC)$ :
$$
\begin{cases}
x = -1 + 3t \\
y = -3 + 5t \\
z = -2 + t \\
(t \in \mathbb{R})
\end{cases}
$$

3) Vérifier que le point $B(2; -2; -1)$ appartient à $(AC)$

$$
B(2; -2; -1) \text{ appartient } (AC) \text{ alors il existe } (t \in \mathbb{R}) \text{ tel que}
$$
$$
\begin{cases}
2 = -1 + 3t \\
-2 = -3 + 5t \\
-1 = -2 + t
\end{cases}
$$
$$
\Rightarrow
\begin{cases}
3 = 3t \\
5 = 5t \\
1 = t
\end{cases}
$$
$$
t = 1
$$
Donc le point $B$ appartient à la droite $(AC)$

4) Vérifier que le point $E(1; 2; -3)$ n’appartient pas à $(AC)$

Si $E(1; 2; -3)$ appartient $(AC)$ alors il existe $(t \in \mathbb{R})$ tel que
$$
\begin{cases}
1 = -1 + 3t \\
2 = -3 + 5t \\
-3 = -2 + t
\end{cases}
$$
$$
\Rightarrow
\begin{cases}
2 = 3t \\
5 = 5t \\
-1 = t
\end{cases}
$$
$$
\Rightarrow
\begin{cases}
t = \frac{2}{3} \\
t = 1 \\
t = -1
\end{cases}
$$
```

<!-- Page 224 -->

```markdown
**Prof : Fayssal**  
**Site web : www.elboutkhili.jimdofree.com**  

# Exercice 02
Soient $A(1; -2; -1)$, $B(3; 3; 0)$ et $C(6; 0; 0)$ des points dans l’espace  
4) Vérifier que les points $O$ ; $B$ et $C$ ne sont pas alignés  
5) Montrer que le triangle $OBC$ est rectangle et isocèle en $B$  
6) Vérifier que les points $O$ ; $A$ ; $B$ et $C$ ne sont pas coplanaires  

## Solution
Soient $A(1; -2; -1)$, $B(3; 3; 0)$ et $C(6; 0; 0)$ des points  
1) Vérifier que les points $O$ ; $B$ et $C$ ne sont pas alignés  
Coordonnées de $BO$ est $(0 - 3 ; 0 - 3 ; 0 - (-3))$ donc $(-3; -3; 3)$

$$
\Delta_z = \frac{-3 - 3}{3 - 3} = 9 + 9 = 18 \neq 0
$$

Donc les vecteurs $\overrightarrow{BO}$ et $\overrightarrow{BC}$ ne sont pas colinéaires  
D’où les points $O$ ; $B$ ; $C$ ne sont pas alignés  
2) Montrer que le triangle $OBC$ est rectangle est isocèle en $B$  

$$
BO = \sqrt{(-3)^2 + (-3)^2 + 0^2} = \sqrt{18}
$$  
$$
BC = \sqrt{(3)^2 + (-3)^2 + 0^2} = \sqrt{18}
$$  

Donc le triangle $OBC$ est isocèle en $B$

$$
\overrightarrow{BO} \cdot \overrightarrow{BC} = \frac{(-3) - (3) \times (-3) + 0 = 0
$$  

Donc les vecteurs $BB$ et $\overrightarrow{AC}$ sont orthogonaux  
Donc le triangle $ABC$ est rectangle en $B$  
D’où le triangle $ABC$ est isocèle rectangle en $B$  
3) Vérifier que les points $O$ ; $A$ ; $B$ et $C$ ne sont pas coplanaires  

$$
\text{det}(OA ; OB ; OC) =  
\begin{vmatrix} 
1 & -2 & -3 \\ 
3 & 3 & 0 \\ 
6 & 0 & 0 
\end{vmatrix} 
= 1 \times 0 \times 6 - 0 \times (-2) \times 3 - 3 \times 0 \times 3 = 1 \times (0 - 0) + 2(0 + 0) - (18) = 18 \neq 0
$$  

Donc les vecteurs $\overrightarrow{OA}$ ; $\overrightarrow{OB}$ et $\overrightarrow{OC}$ ne sont pas coplanaires  
D’où que les points $O$ ; $A$ ; $B$ et $C$ ne sont pas coplanaires  

# Exercice 03
Déterminer une équation cartésienne des plans suivants  
1) Le plan $(P)$ passant par le point $A(1; -1; 0)$ est de vecteur normale $\vec{n}(3; 2; -1)$  
2) Le plan $(Q)$ passant par le point $O$ et de vecteur normale $\vec{k}(0; 0; 1)$  

## Solution
1) Le plan $(P)$ passant par le point $A(1; -1; 0)$ est de vecteur normale $\vec{n}(3; 2; -1)$  
1ère méthode :  
Comme $\vec{n}(3; 2; -1)$ est un vecteur normal au $(P)$, une équation cartésienne de $(P)$ est de la forme $3x + 2y - z + d = 0$  
Le point $A(1; -1; 0)$ appartient au plan, donc :  
$$
3 \times (1) + 2 \times (-1) - (0) + d = 0 \text{ et } d = -1
$$  

Une équation cartésienne de $(P)$ est : $3x + 2y - z - 1 = 0$.

2) Le plan $(Q)$ passant par le point $O(0; 0; 0)$ est de vecteur normale $\vec{k}(0; 0; 1)$  
$$
M(x; y; z) \text{ est un point de } (P) \text{ si et seulement si } \overrightarrow{AM} \left( x - 1 y + 1 z -0 \right)
$$  
$$
\begin{pmatrix} 
3 \\ 
2 
\end{pmatrix} \text{ sont orthogonaux}.
$$  

Donc $\overrightarrow{AM} \cdot \vec{n} = 0$  
Donc $3(x - 1) + 2(y + 1) - z = 0$  
Donc $3x + 2y - z - 1 = 0$

Une équation cartésienne de $(P)$ est : $3x + 2y - z - 1 = 0$  
2) Le plan $(Q)$ passant par le point $O(0; 0; 0)$ est de vecteur normale $\vec{k}(0; 0; 1)$  

$$
M(x; y; z) \text{ est un point de } (P) \text{ si et seulement si } \overrightarrow{OM} \left( x - 0 y - 0 z - 0 \right)
$$  
$$
\begin{pmatrix} 
0 \\ 
0 
\end{pmatrix} \text{ sont orthogonaux}. 
$$  

Donc $\overrightarrow{OM} \cdot \vec{k} = 0$ donc $z = 0$  
```

<!-- Page 225 -->

```markdown
# Prof : Fayssal
**Site web : www.elboutkhili.jimdofree.com**

## Exercice 04

Soient les plans ; $(P) : 2x + y - z + 1 = 0$ et $(Q) : x + \frac{1}{2}y - \frac{1}{2}z = 0$ et $(R) : x - 3y - z + 3 = 0$

1) Montrer que $(P) \perp (Q)$  
2) Montrer que $(P) \perp (R)$  
3) En déduire la position relative des plans $(Q)$ et $(R)$  
4) Déterminer une représentation paramétrique de la droite $(D)$ l'intersection des plan $(P)$ et $(R)$

## Correction

1) Montrer que $(P) \perp (Q)$  
On a $\vec{n_1} (2; 1; -1)$ et est un vecteur normal au plan $(P)$  
On a $\vec{n_2} (1; \frac{1}{2}; -\frac{1}{2})$ est un vecteur normal au plan $(Q)$  

$$ \Delta_x = \begin{vmatrix}
1 & 1 & 0 \\
-1 & -1 & 1 \\
-1 & \frac{1}{2} & -\frac{1}{2}
\end{vmatrix} = 0; \quad \Delta_y = \begin{vmatrix}
1 & 1 & 1 \\
-1 & -1 & -1 \\
-1 & 1 & -\frac{1}{2}
\end{vmatrix} = 0; \quad \Delta_z = \begin{vmatrix}
2 & 1 & 1 \\
1 & 1 & 1 \\
-1 & \frac{1}{2} & -\frac{1}{2}
\end{vmatrix} = 0$$

Donc les vecteurs $\vec{n_1}$ et $\vec{n_2}$ sont colinéaires  
Donc $(P) \perp (Q)$

1) Montrer que $(P) \perp (R)$  
On a $\vec{n_3} (2; 1; -1)$ et est un vecteur normal au plan $(P)$  
On a $\vec{n_4} (1; -3; -1)$ est un vecteur normal au plan $(R)$  

$$ \vec{n_3} \cdot \vec{n_4} = \begin{pmatrix}
2 \\
1 \\
-1
\end{pmatrix} \cdot \begin{pmatrix}
1 \\
-3 \\
-1
\end{pmatrix} = 2 - 3 + 1 = 0$$

Donc $\vec{n_3}$ et $\vec{n_4}$ sont orthogonaux  
Donc $(P) \perp (R)$

3) En déduire la position relative des plans $(Q)$ et $(R)$  
On a $(P) \perp (Q)$ et $(P) \perp (R)$  
Donc $(Q) \perp (R)$

4) Déterminer une représentation paramétrique de la droite $(D)$ l'intersection des plan $(P)$ et $(R)$ est :

$$ (D): 
\begin{cases}
x = -\frac{6}{7} + \frac{2}{7}t \\
y = \frac{5}{7} - \frac{1}{7}t \\
z = t 
\end{cases} \quad (t \in \mathbb{R}) $$
```

<!-- Page 226 -->

```markdown
# Prof : Fayssal
## Site web : www.elboutkhili.jimdofree.com

### Exercice 05
Soit le plan $(P) : 4x - 2y + z + 1 = 0$

Et la droite $(D) : \begin{cases}
x = 1 - t \\
y = -1 + \frac{1}{2} t \\
z = -\frac{1}{4} t
\end{cases} ; \; (t \in \mathbb{R})$

3) Montrer que $(P)$ et $(D)$ sont orthogonaux

4) Déterminer les coordonnées de points H d'intersection de $(P)$ et $(D)$

### Correction
1) On a $\vec{n} (4; -2; 1) \; e$ est un vecteur normal au plan $(P)$

On a $\vec{u} (-1; \frac{1}{2}; -\frac{1}{4})$ est un vecteur directeur de la droite $(D)$

$$
\Delta x = \left| \begin{array}{ccc}
-2 & 1 & -1 \\
1 & -\frac{1}{4} & 0 \\
\end{array} \right| = 0; \; \Delta y = \left| \begin{array}{ccc}
4 & -1 & 1 \\
1 & -2 & 0 \\
\end{array} \right| = 0; \; \Delta z = \left| \begin{array}{ccc}
4 & -2 & -1 \\
1 & -2 & 0 \\
\end{array} \right| = 0 
$$

Donc les vecteurs $\vec{n}$ et $\vec{u}$ sont colinéaires

Donc $(P)$ et $(Q)$ sont orthogonaux

2) $(D)$ et $(P)$ sont séquentes en $H(x; y; z)$ alors les coordonnées :
$$(x; y; z) \; vérifie \; le \; système :$$
$$
\begin{cases}
x = 1 - t \\
y = -1 + \frac{1}{2} t \\
z = -\frac{1}{4} t \\
4x - 2y + z + 1 = 0
\end{cases}
$$

Donc on remplace $x = 1 - t ; \; y = -1 + \frac{1}{2} t \; et \; z = -\frac{1}{4} t$ dans
$$
4(1 - t) - 2(-1 + \frac{1}{2} t) + 1 = 0
$$
On trouve : $4(1 - t) - 2(-1 + \frac{1}{2} t) + 1 = 0$

Donc $4 - 4t + 2 + \frac{1}{2}t + 1 = 0$

Donc $-\frac{4}{21} t = -7$

Donc $t = 7 \times \left(\frac{4}{21}\right)$

Donc $t = \frac{4}{3}$

On remplace $t = \frac{4}{3}$ dans 
$$
\begin{cases}
x = 1 - t \\
y = -1 + \frac{1}{2} t \\
z = -\frac{1}{4} t
\end{cases}
$$

On trouve :
$$
\begin{cases}
x = 1 - \frac{4}{3} \\
y = -1 + \frac{1}{2} \cdot \frac{4}{3} \\
z = -\frac{1}{4} \cdot \frac{4}{3}
\end{cases}
$$

Donc $(D)$ et $(P)$ sont séquentes en $H(-\frac{1}{3}; -\frac{1}{3}; -\frac{1}{3})$.
```

<!-- Page 227 -->

```markdown
# Prof : Fayssal
## Site web : www.elbouthkili.jimdofree.com

# Exercice 06

Soit $(P)$ le plan défini par l'équation $(P) : 2x + 3y - z + 4 = 0$  
1) Calculer la distance de point $A(1; 0; 1)$ au plan $(P)$ et en déduire que le point $A$ n’appartient pas au plan $(P)$.  
2) Déterminer une représentation paramétrique de la droite $(D)$ passant par le point $A$, et orthogonale au plan $(P)$.  
3) En déduire les coordonnées du point $H$ le projeté orthogonal du point $A$ sur le plan $(P)$.

# Correction

Soit $(P)$ le plan défini par l'équation $(P) : 2x + 3y - z + 4 = 0$  
1) Calculer la distance de point $A(1; 0; 1)$ au plan $(P)$ et en déduire que le point $A$ n’appartient pas au plan $(P)$.  
$$
d(A; (P)) = \frac{| (2 \times 1) - (3 \times 0) - (1) + 4 |}{\sqrt{2^2 + 3^2 + (-1)^2}} = \frac{|\sqrt{5}|}{\sqrt{12}} = \frac{5}{\sqrt{12}} \neq 0
$$
Donc le point $A$ n’appartient pas au plan $(P)$.  
2) Déterminer une représentation paramétrique de la droite $(D)$ passant par le point $A$, et orthogonale au plan $(P)$.  
La droite $(D)$ passant par le point $A$, et orthogonale au plan $(P)$.  
$$
\vec{n} = \begin{pmatrix}
2 \\
3 \\
-1
\end{pmatrix} \text{ le vecteur normal au } (P) \text{ est un vecteur directeur de la droite } (D)
$$
Donc une représentation paramétrique de la droite $(D)$ est :  
$$(D) : \begin{cases}
x = 1 - 2t \\
y = 0 + 3t \\
z = 1 - t
\end{cases} \quad (t \in \mathbb{R})$$  
3) En déduire les coordonnées du point $H$ le projeté orthogonal du point $A$ sur le plan $(P)$.  
Les coordonnées du point $H$ le projeté orthogonal du point $A$ sur le plan $(P)$ est l’intersection de $(D)$ et $(P)$.

Alors les coordonnées $(x; y; z)$ de $H$ vérifient le systèmes :  
$$
\begin{cases}
x = 1 - 2t \\
y = 0 + 3t \\
z = 1 - t \\
2x + 3y - z + 4 = 0
\end{cases}
$$  
Donc on remplace $x = 1 - 2t ; y = 3t$ et $z = 1 - t$ dans $2x + 3y - z + 4 = 0$ :  
$$
2(1 - 2t) + 3(3t) - (1 - t) + 4 = 0
$$  
Donc $2(1 - 2t) + 9t - 1 + 4 = 0$  
Donc $2 - 4t + 9t - 1 + 4 = 0$  
Donc $4t = 6$  
Donc $t = \frac{6}{4} = \frac{3}{2}$  
On remplace $t = \frac{2}{3}$ dans :  
$$
\begin{cases}
x = 1 - 2 \times \frac{3}{2} \\
y = 0 + 3 \times \frac{3}{2} \\
z = 1 - \frac{3}{2}
\end{cases}
$$  
On trouve :  
$$
\begin{cases}
x = -2 \\
y = -\frac{9}{2} \\
z = -\frac{1}{2}
\end{cases}
$$  
Donc  
$$
H\left(-2; \frac{9}{2}; -\frac{1}{2}\right)
$$
```

<!-- Page 228 -->

```markdown
# Prof : Fayçal  
Site web : www.elbouthkili.jimdofree.com  

## Exercice 07

5) Déterminer l’équation cartésienne du sphère $(S)$ de centre $\Omega(2; -1; 1)$ et de rayon $R=5$

6) Déterminer une équation de sphère $(S)$ de centre $A(4; -1; 0)$ et passant par le point $B(3 ; 5 ; 1)$

7) Soit l'ensemble $(S)$ d'équation $x^2 + y^2 + z^2 - 2x + 4y - 11 = 0$  
Montrer que l'ensemble $E$ est un sphère dont on déterminera les caractéristiques (centre, rayon). avec deux méthodes

8) Déterminer une équation de sphère $(S)$ de diamètre $[AB]$ avec deux méthodes tel que $A(1;-2;1)$ et $B(1;-2;1)$

## Solution de l’exercice

1) Déterminer l’équation cartésienne du sphère $(S)$ de centre $\Omega(2; -1; 1)$ et de rayon $R=5$  
Une équation cartésienne de la sphère $(S)$ est  
$$(x - 2)^2 + (y + 1)^2 + (z - 1)^2 = 25.$$

2) Commençons par déterminer le carré du rayon du sphère $(S)$  
$$r^2 = AB^2 = (3 - 4)^2 + (5 - (-1))^2 + (1 - 0)^2 = 38$$  
Une équation cartésienne de la sphère $(S)$ est  
$$(x - 4)^2 + (y + 1)^2 + (z - 0)^2 = 38.$$

3) Soit l'ensemble $E$ d'équation : $x^2 + y^2 + z^2 - 2x - 10y + 17 = 0$  
Montrer que l'ensemble $E$ est un sphère dont on déterminera les caractéristiques (centre, rayon). avec deux méthodes  
$$x^2 - 2x + (y^2 + 4y) + z^2 + 17 = 0$$  
$$(x - 1)^2 + (y + 2)^2 + z^2 = 4$$  
L'ensemble $(S)$ est la sphère de centre le point de coordonnées $(1 ; -2 ; 0)$ et de rayon $4.$

4) Déterminer une équation de sphère $(S)$ de diamètre $[AB]$ avec deux méthodes tel que $A(1;-2;1)$ et $B(1;-2;1)$

2ème méthode :  
$$(S) : x^2 + y^2 + z^2 - 2x + 4y - 11 = 0$$  
On pose $a = -2 ; b = 4 ; c = 0$ et $d = -11$  
$$a^2 + b^2 + c^2 - 4d = (-2)^2 + 4^2 + 0 \times 11 = 64 > 0$$  
Donc l’ensemble $(S)$ est une sphère de centre $\Omega\left(\frac{a}{2}; \frac{-b}{2}; \frac{-c}{2}\right) = (1; -2; 0)$ et de rayon $r = \sqrt{\frac{a^2+b^2+c^2-4d}{2}} = \frac{8}{2} = 4$

4) Déterminer une équation de sphère $(S)$ de diamètre $[AB]$ avec deux méthodes tel que $A(1;-2;1)$ et $B(1;-2;1)$  
1ère méthode  
Le milieu du segment $[AB]$ est le centre de sphère donc  
$$\Omega \left(\frac{-1+1}{2}, \frac{2+2}{2}, \frac{1+1}{2}\right)$$  
c-t-dire $\Omega(0 ; 2 ; 1)$  
Le rayon de sphère est  
$$r = \frac{AB}{2} = \sqrt{\frac{(-1 - 1)^2 + (2 - 2)^2 + (1 - 1)^2}{2}} = 1$$  
M$(x; y; z) \in (S)$ donc $x^2 + (y - 2)^2 + (z - 1)^2 = 1$

2ème méthode :  
M$(x; y; z) \in (C) \iff \overrightarrow{AM}.\overrightarrow{BM} = 0$  
$$\begin{pmatrix}x - 1 \\ y - 2 \\ z - 1\end{pmatrix} \cdot \begin{pmatrix}x + 1 \\ y - 2 \\ z - 1\end{pmatrix} = 0$$  
$$(x - 1)(x + 1) + (y - 2)(y - 2) + (z - 1)(z - 1) = 0$$  
$$x^2 - 1 + (y - 2)^2 + (z - 1)^2 = 0$$  
$$x^2 + (y - 2)^2 + (z - 1)^2 = 1$$
```

<!-- Page 229 -->

```markdown
# Prof: Fayçal
### Site web: www.elboutkhili.jimdofree.com

## Exercice 08
Soit $(S)$ la sphère d’équation $(S): x^2 + y^2 + z^2 - 4x - 5 = 0$  
Et le plan $(P)$ d’équation cartésienne : $(P): 2x - y - 2z + 5 = 0$

4) Déterminer $\Omega$ le centre de la sphère $(S)$ et son rayon $R$.  
5) Calculer $d(\Omega; (P))$ puis en déduire que le plan $(P)$ est tangent à la sphère $(S)$ en un point $H$.  
6) Déterminer les coordonnées du point de contact $H$.

### Solution de l’exercice
1) Déterminer $\Omega$ le centre de la sphère $(S)$ et son rayon $R$.  
On pose $a = -4 ; b = 0 ; c = 0 et d = -5$  
$$ a^2 + b^2 + c^2 - 4d = (-4)^2 + 0^2 + 0^2 + 5 = 36 > 0 $$  
Donc l’ensemble $(S)$ est une sphère de centre $\Omega(-\frac{a}{2}; -\frac{b}{2}; -\frac{c}{2})$  
Donc $\Omega(2; 0; 0)$ et de rayon $r = \sqrt{a^2+b^2+c^2-4d} = \sqrt{\frac{36}{4}} = \frac{6}{2} = 3$  

2) Calculer $d(\Omega; (P))$ puis en déduire que le plan $(P)$ est tangent à la sphère $(S)$ en un point $H$  
$$ d(\Omega; (P)) = \frac{|(2 \times 2) - (0) - (0) + 5|}{\sqrt{2^2 + (-1)^2 + (-2)^2}} = \frac{|9|}{\sqrt{9}} = 3 $$  
Donc $d(\Omega; (P)) = r$

3) Déterminer les coordonnées du point de contact $H$  
$ (x; y; z)$ les coordonnées de $H$ vérifie  
$$ \left\{ \begin{array}{l}
\Omega(H): \\
x = 2 + 2t \\
y = 0 - t \\
z = 0 - 2t
\end{array} \right. $$  
$ (P): 2x - y - 2z + 5 = 0$  
Donc $2(2 + 2t) + (t) + 4t + 5 = 0$  
Donc $9 + 9t = 0$  
Donc $t = -1$ on remplace dans  
$$ \left\{ \begin{array}{l}
x = 2 + 2t \\
y = -t \\
z = -2t
\end{array} \right. $$
## Exercice 09
Soit $(S)$ la sphère de centre $\Omega(1; 1; -1)$ est de rayon $R = 3 et (P)$ le plan $(P): x + y - z = 0$

1) Calculer $d(\Omega; (P))$ puis en déduire que le plan $(P)$ coupe la sphère $(S)$ suivant un cercle $(C)$  
$$ d(\Omega; (P)) = \frac{|(1) + (1) + (1)|}{\sqrt{1^2 + 1^2 + (-1)^2}} = \frac{3}{\sqrt{3}} = \sqrt{3} $$  
Donc $d(\Omega; (P)) < r$

Donc le plan $(P)$ coupe la sphère $(S)$ suivant un cercle $(C)$  
2) Déterminer les coordonnées du point $H$ le centre du cercle $(C)$ et son rayon $r$  
le rayon $r$ de cercle $(C)$ est $r = \sqrt{R^2 - d^2} = \sqrt{3^2 - 3^2} = \sqrt{0} = 0$

$ (x; y; z)$ les coordonnées de $H$ vérifie  
$$ \left\{ \begin{array}{l}
\Omega(H): \\
y = 1 + t ; (t \in I) \\
z = -1 - t
\end{array} \right. $$  
$(P): x + y - z = 0$  
Donc $(1 + t) + (1 + t) + (1) = 0$ donc $3t + 3 = 0$  
Donc $t = -1$ on remplace dans  
$$ \left\{ \begin{array}{l}
x = 1 + t \\
y = 1 + t \\
z = 0
\end{array} \right. $$
```


<!-- Page 230 -->

```markdown
# Prof : Fayssal
Site web : www.elboutkhili.jimdofree.com

## Corrigé de série Produit scalaire dans l’espace  Page 08

3) a) Vérifier que le point $A(3, 3, 0) \in (S)$

$$
\Omega A = \sqrt{(3 - 1)^{2} + (3 - 1)^{2} + (0 + 1)^{2}} = \sqrt{9} = 3
$$

Donc $\Omega A = R \; donc A(3, 3, 0) \in (S)$

b) Déterminer l’équation du plan $(Q)$ tangente au sphère $(S)$ en $A$

Soit $M(x; y; z)$ est un point de $(Q)$

Donc $$\overline{AM} = \begin{pmatrix} x - 3 \\ y - 3 \\ z - 0 \end{pmatrix}$$ sont orthogonaux. ($\Omega A$ est vecteur normal au plan $(P)$)

Donc $AM \cdot \Omega A = 0$

Donc 

$$
2(x - 3) + 2(y - 3) + z = 0
$$

Donc $2x + 2y + z - 12 = 0$

Une équation cartésienne de $(Q)$ est : $2x + 2y + z - 12 = 0$

### Rappels
Pour déterminer les coordonnées des points d’intersections de sphère $(S)$ et la droite $(\Delta)$

On résout le système suivant :

$$
\begin{cases}
x = x_A + \alpha t \\
y = y_A + \beta t \; (t \in \mathbb{R}) \\
z = z_A + \gamma t
\end{cases}
$$

$$(S) : (x - x_Q)^2 + (y - y_Q)^2 + (z - z_Q)^2 = R^2$$

## Exercice 10

Soit la droite $(D)$ défini par la droite $(D)$ :

$$ 
\begin{cases}
x = 1 + t \\
y = -1 - t \; (t \in \mathbb{R}) \\
z = -t
\end{cases}
$$

Déterminer l’intersection de la droite $(D)$ avec la sphère $(S)$ dans chaque cas : 
a) $ (S) : x^2 + y^2 + z^2 - 2x - 1 = 0 $

b) $ (S) : x^2 + y^2 + z^2 - 2x + 2y - 1 = 0 $

### Solution de l’exercice

a) On résout le système suivant :
$$
\begin{cases}
(x = 1 + t) \\
(y = -1 - t) \; (t \in \mathbb{R}) \\
(z = -t)
\end{cases}
$$

Donc $ (1 + t)^{2} - (-1 - t)^{2} + (-t)^{2} + 2(1 + t) - 3 = 0 $

Donc $1 + 2t + t^{2} + 2t + t^{2} + 2 + 2t + 2t - 1 = 0$

Donc $3t^{2} + 6t + 3 = 0 \implies 3(t^{2} + 2t + 1) = 0$

Donc $ (t + 1)^{2} = 0 \; donc \; t = -1 $

Donc la droite $(D)$ est tangente à la sphère $(S)$ en un point $H$

$$
\begin{cases}
x = 1 + t \\
y = -1 - 1 = 0 \\
z = -t
\end{cases}
$$

Donc 
$$
\begin{cases}
x = 1 - 1 = 0 \\
y = -1 + 1 = 0 \\
z = 1 
\end{cases} \; donc H(0; 0; 1)
$$

b) On résout le système suivant :

$$
\begin{cases}
(x = 1 + t) \\
(y = -1 - t) \; (t \in \mathbb{R}) \\
(z = -t)
\end{cases}
$$

Donc $(1 + t)^{2} - (-1 - t)^{2} + (-t)^{2} - 2(1 + t) + 2(-1 - t) - 1 = 0$

Donc $1 + 2t + t^{2} - (-1)^{2} + 2(1 + t) + 2 + 2t - 2 - 2t - 1 = 0$

Donc $3t^{2} - 3 = 0 \implies 3(t^{2} - 1) = 0$

Donc pour $t = -1$ on a 
$$
\begin{cases}
x = 1 + 1 = 2 \\
y = -1 - 1 = -2 \\
z = 1 
\end{cases} \; donc A(2; -2; 1)
$$
```


<!-- Page 231 -->

```markdown
## Prof : Fayssal
### Site web : www.elbouthkili.jimdo.com
### Exercice 11

Soient les points $A (2 ; 2 ; 2) ; B (2 ; 4 ; 0) $ et $ C (6 ; 2 ; -2)$ et $(S)$ la sphère de centre $\Omega(3 ; 3 ; 3)$ et de rayon $r = \sqrt{3}$

1) a) Montrer que les points $A ; B$ et $C$ ne sont pas alignés  
   b) Montrer que $\vec{n} (1 ; 1 ; 1)$ est un vecteur normal au plan $(ABC)$  
   c) Vérifier que $x + y + z - 6 = 0$ est une équation cartésienne du plan $(ABC)$  

2) a) Montrer que le plan $(ABC)$ est tangent à la sphère $(S)$ et que $A \in (S)$  
   b) Déterminer le triplet des coordonnées du point de contact de $(ABC)$ et $(S)$  
   c) Soit $M (\alpha ; b ; c)$ un point du plan $(ABC)$ tel que $a ; b$ et $c$ sont des réels  
   a) Montrer que $\Omega M \geq r$  
   b) En déduire que $a^2 + b^2 + c^2 \geq 12$  

### Solution de l’exercice

L’espace est mené d’un repère orthonormé  
Soient les points $A (2 ; 2 ; 2) ; B (2 ; 4 ; 0) $ et $ C (6 ; 2 ; -2)$ et $(S)$ la sphère de centre $\Omega(3 ; 3 ; 3)$ et de rayon $r = \sqrt{3}$  

1) a) Montrer que les points $A ; B$ et $C$ ne sont pas alignés  

**Rappel :**  
Condition de colinéarité de deux vecteurs  
Soient $\vec{U}(x ; y ; z)$ et $\vec{V}(x' ; y' ; z')$ deux vecteurs  
$\vec{U}$ et $\vec{V}$ sont colinéaires si $\Delta_x = \Delta_y = \Delta_z = 0$  
$$ \Delta_x = \left| \begin{array}{ccc} y & y' & z' \\ z & z' & z' \\ x' & x' & z' \end{array} \right| $$  
$$ \Delta_y = \left| \begin{array}{ccc} x & y & z' \\ x' & y' & z' \\ x'' & y'' & z' \end{array} \right| $$  
$$ \Delta_z = \left| \begin{array}{ccc} x & y & z \\ x' & y' & z' \\ x'' & y & z \end{array} \right| $$  

On a $\vec{AB} \left( \begin{array}{c} 0 \\ 2 \\ -2 \end{array} \right)$ et $\vec{AC} \left( \begin{array}{c} 4 \\ 0 \\ -4 \end{array} \right)$  

Donc $\Delta_x = \begin{vmatrix} 2 & 0 \\ -4 & -4 \end{vmatrix} = -8 \neq 0$  

Donc les vecteurs $\vec{AB}$ et $\vec{AC}$ ne sont pas colinéaires donc $A$ et $B$ et $C$ ne sont pas alignés  

D’où les points $A$ et $B$ et $C$ forment un plan  

b) Montrer que $\vec{n} (1 ; 1 ; 1)$ est un vecteur normal au plan $(ABC)$  

Les vecteurs $\vec{AB}$ et $\vec{AC}$ ne sont pas colinéaires donc sont des vecteurs directeurs du plan $(ABC)$ donc il suffit de montrer que :  
$$ \vec{n} \perp \vec{AB} \text{ et } \vec{n} \perp \vec{AC} $$  

$$ \vec{n} \cdot \vec{AB} = \begin{pmatrix} 1 \\ 1 \\ 1 \end{pmatrix} \cdot \begin{pmatrix} 1 \\ 0 \\ -2 \end{pmatrix} = 2 - 2 = 0 $$  

Donc $\vec{n} \perp \vec{AB}$  

$$ \vec{n} \cdot \vec{AC} = \begin{pmatrix} 1 \\ 1 \\ 1 \end{pmatrix} \cdot \begin{pmatrix} 4 \\ 0 \\ -4 \end{pmatrix} = 4 - 4 = 0 $$  

Donc $\vec{n} \perp \vec{AC}$  

c) Vérifier que $x + y + z - 6 = 0$ est une équation cartésienne du plan $(ABC)$  
Soit $M(x ; y ; z) \in (ABC)$  
On a le vecteur $\vec{n} \left( \begin{array}{c} 1 \\ 1 \\ 1 \end{array} \right)$ est normale à $(ABC)$  

Donc $(ABC)$ : $1 \cdot x + 1 \cdot y + 1 \cdot z + d = 0$  
Et on a $A(2, 2, 2) \in (ABC)$ donc on remplace les coordonnées de $A$ dans $2 + 2 + 2 + d = 0$ donc $6 + d = 0$ donc $d = -6$  

Donc $(ABC)$ : $x + y + z - 6 = 0$  

2) a) Montrer que le plan $(ABC)$ est tangent à la sphère $(S)$ et que $A \in (S)$  
```

<!-- Page 232 -->

```markdown
# Prof : Fayssal
## Site web : www.elboutkhili.jimdofree.com

Corrigé de série Produit scalaire dans l’espace Page 10

On a $\Omega(3 ; 3 ; 3)$ et $(ABC) : x + y + z - 6 = 0$

$$ d(\Omega ; (ABC)) = \frac{|3 + 3 + 3 - 6|}{\sqrt{1^2 + 1^2 + 1^2}} = \frac{3}{\sqrt{3}} = \sqrt{3} $$

Donc $d(\Omega ; (ABC)) = r$

Donc $(ABC)$ est tangent à la sphère $(S)$

Montrons que $A \in (S)$

On a $\overline{A}(1 ; 1 ; 1)$

Donc $A = \sqrt{12 + 12 + 12} = \sqrt{3}$

Donc $A \in (S)$

b) Déterminer le triplet des coordonnées de point de contact de $(ABC)$ et $(S)$

1ère méthode
On a $A \in (S)$ et $A \in (ABC)$

Donc le plan $(ABC)$ est tangent à la sphère $(S)$ au point $A$

2ème méthode
Rappel :
Pour déterminer les coordonnées de $H$ on résoud le système
$$
\begin{cases}
(x = x_0 + at ; ( \Omega H): y = y_0 + bt ; (t \in \mathbb{R}) \\
z = z_0 + ct
\end{cases}
$$
suivant :
$$
(P) : ax + by + cz + d = 0
$$

$(x;y;z)$ les coordonnées de $H$ vérifie le système
$$
\begin{cases}
(x \in \Omega H): y = 3 + t ; (t \in \mathbb{R}) \\
z = 3 + t
\end{cases}
$$
 système
$$
(ABC) : x + y + z - 6 = 0
$$

Donc $3 + t + 3 + t + 3 + t - 6 = 0$

Donc $3t + 3 = 0$

Donc $t = -1$

On remplace $-1$ dans :
$$
x = 3 + t ; y = 3 + t ; z = 3 + t
$$
On trouve
$$
\begin{cases}
x = 3 - 1 = 2 \\
y = 3 - 1 = 2 \\
z = 3 - 1 = 2
\end{cases}
$$

Donc $H(2;2;2)$

Donc $H=A$

3) Soit $M (a ; b ; c)$ un point du plan $(ABC)$ tels que $a ; b ; c$ sont des réels

a) Montrer que $\Omega M \geq r$

On a $M (a ; b ; c)$ un point du plan $(ABC)$

Donc $a + b + c - 6 = 0$

On a $d(\Omega ; (ABC)) = \Omega A = r$ la plus petite distance entre $\Omega$ et $(ABC)$

Donc $\Omega M \geq \Omega A$

Donc $\Omega M \geq r$

b) En déduire que $a^2 + b^2 + c^2 \geq 12$

On a $\Omega M = \sqrt{(a - 3)^2 + (b - 3)^2 + (c - 3)^2}$

Donc $d(\Omega M)^2 = (a - 3)^2 + (b - 3)^2 + (c - 3)^2$

Donc $d(\Omega M)^2 = a^2 + b^2 + c^2 - 6(a + b + c) + 27$

Et on a $\Omega M \geq \sqrt{3}$

Donc $d^2 \geq 3$

Donc $a^2 + b^2 + c^2 - 9 \geq 3$

Donc $a^2 + b^2 + c^2 \geq 12$
```

<!-- Page 233 -->

```markdown
# Prof : Fayssal
Site web : www.elboutkhili.jimdofree.com

## Corrigé de série Produit scalaire dans l’espace Page 11

### Exercice 12

Soient les points $A (-1 , 0 ; 1)$ et $B (1 ; 2 ; 0)$ et le plan $(P)$ d’équation $2x + 2y - z + 3 = 0$

1. a) Vérifier que le vecteur $ \overrightarrow{AB} $ est normal au plan $(P)$  
   b) Déterminer une représentation paramétrique de la droite $(AB)$

2. Soit $(S)$ la sphère de centre $\Omega(1 ; \frac{1}{2} ; \frac{3}{2})$ et de rayon $r = \frac{3}{2}$
   a) Déterminer une équation cartésienne de la sphère $(S)$  
   b) Montrer que la sphère $(S)$ est tangente au plan $(P)$ en un point $I$  
   c) Montrer que la droite $(AB)$ est tangente à la sphère $(S)$ au point $C(0 ; 1 ; \frac{1}{2})$

3. Soit $(Q)$ le plan parallèle à $(P)$ et tangente à $(S)$ en un point $J$  
   (On ne demande pas de déterminer les coordonnées de $J$)  
   c) Montrer que les points $I ; \Omega ; J$ sont alignés  
   En déduire que $ \overline{\Omega I} = -\frac{9}{4} $

### Solution de l’exercice

Soient les points $A (-1 , 0 ; 1)$ ; $B (1 ; 2 ; 0)$ et le plan $(P)$ d’équation $2x + 2y - z + 3 = 0$

1. a) Vérifier que $ \overrightarrow{AB} $ est normal à $(P)$ : $2x + 2y - z + 3 = 0$  
   On a $ \overrightarrow{AB}(2 , 2 , -1)$  
   Donc le vecteur $ \overrightarrow{AB} $ est normal au plan $(P)$  
   b) Déterminer une représentation paramétrique de la droite $(AB)$  
   On a la droite $(AB)$ passe par $B (1 ; 2 ; 0)$ et de vecteur directeur $\overrightarrow{AB}(2 , 2 , -1)$  
   $$
   \begin{cases}
   x = 1 + 2t \\
   y = 2 + 2t \\
   z = -t
   \end{cases}
   \quad (t \in \mathbb{R})
   $$

2. Soit $(S)$ la sphère de centre $\Omega(1 ; \frac{1}{2} ; \frac{3}{2})$ et de rayon $r = \frac{3}{2}$  
   Déterminer une équation cartésienne de la sphère $(S)$  
   $$
   (x - x_0)^2 + (y - y_0)^2 + (z - z_0)^2 = r^2
   $$  
   $(S)$ : $(x - 1)^2 + (y - \frac{1}{2})^2 + (z - \frac{3}{2})^2 = \frac{3}{2}^2$  
   $(S)$ : $(x - 1)^2 + (y - \frac{1}{2})^2 + (z - \frac{3}{2})^2 = \frac{9}{4}$  
   b) Montrer que la sphère $(S)$ est tangente au plan $(P)$ en un point $I$  
   On a $\Omega(1 ; \frac{1}{2} ; \frac{3}{2})$ et $(P) 2x + 2y - z + 3 = 0$  
   $d((P)) = \frac{|2x_0 + 2y_0 - z_0 + 3|}{\sqrt{2^2 + 2^2 + (-1)^2}} = \frac{|2 + 1 - \frac{3}{2} + 3|}{\sqrt{2^2 + 2^2 + 1}} = \frac{9}{6} = r$  
   Donc la sphère $(S)$ est tangente au plan $(P)$ en un point $I$

   c) Montrer que $(AB)$ est tangente à $(S)$ en un point $C (0 ; 1 ; \frac{1}{2})$  
   $(x ; y ; z)$ les coordonnées de $C$ vérifie le système  
   $$
   \begin{cases}
   x = 1 + 2t \\
   y = 2 + 2t \\
   z = -t
   \end{cases}
   $$  
   Donc  
   $$(1 + 2t - 1)^2 + (2 + 2t - \frac{1}{2})^2 + (z - \frac{3}{2})^2 = \frac{9}{4}$$  
   Donc $4t^2 + \frac{9}{4} + 6t + 4t^2 + t^2 + 2t + 1 = \frac{9}{4}$  
   Donc $9t^2 + 9t + \frac{9}{4} = 0$ donc $t^2 + t + \frac{1}{4} = 0$
```

<!-- Page 234 -->

```markdown
Prof : Fayssal  
Site web : www.elbouthkili.jimdo.free.com  
Corrigé de série Produit scalaire dans l’espace  
Page 12  

2ème méthode :  
Rappel :  
Si les vecteurs $\vec{AB}$ et $\vec{AH}$ ont le même sens alors :  
$\vec{u} \cdot \vec{v} = \vec{AB} \cdot \vec{AC} = \vec{AB} \cdot \vec{AH} = \vec{AB} \times \vec{AH}$  
Si $\vec{AB}$ et $\vec{AH}$ ont un sens opposé alors :  
$\vec{u} \cdot \vec{v} = \vec{AB} \cdot \vec{AC} = \vec{AB} \cdot \vec{AH} = -\vec{AB} \times \vec{AH}$  
On a les vecteurs $\vec{OI}$ et $\vec{OJ}$ sont colinéaires  
De sens opposés donc : $\vec{OI} \cdot \vec{OJ} = -\vec{OI} \times \vec{OJ}$  

### Exercice 13  
1) On considère les points $A(0; 1; 1)$, $B(1; 0; 1)$, $C(1; 1; 0)$  
a) Montrer que $x + y + z - 2 = 0$ est une équation cartésienne du plan $(ABC)$.  
b) Déterminer une équation cartésienne de la sphère $(S)$ de centre $O$ et tangent à $(ABC)$  
c) Déterminer les coordonnées de $I$ le point de contact de $(S)$ et $(ABC)$  
2) Soit $\alpha$ un réel, on considère les points $E(-\alpha; -\frac{2}{\sqrt{3}} ; \alpha)$ et $(S_\alpha)$ l’ensemble des points $M$ de l’espace tel que : $ME^2 + ME \cdot EF = 0$  
a) Montrer que $(S_\alpha)$ est la sphère de diamètre $[EF]$  
b) Montrer que pour tout réel $\alpha$, la sphère $(S_\alpha)$ est tangent au plan $(ABC)$  
c) On notera $J$ le point de contact de $(S_\alpha)$ et $(ABC)$,  
d) Déterminer la valeur $\alpha$ pour que $IJ = \sqrt{2}$
```

<!-- Page 235 -->

```markdown
# Correction de l'exercice 3

1) On considère les points $A(0; 1; 1)$, $B(1; 0; 1)$, $C(1; 1; 0)$  
a) Montrer que $x + y + z - 2 = 0$ est une équation cartésienne du plan $(ABC)$.  
On a $AB\left(\begin{pmatrix} -1 \\ -2 \end{pmatrix}\right)$ et $AC\left(\begin{pmatrix} -1 \\ 0 \\ 1 \end{pmatrix}\right)$  
Donc $\Delta x = \left| \begin{pmatrix} 1 & -1 \\ -1 & 0 \end{pmatrix} \right| = -1 \neq 0$  
D'où les vecteurs $\overrightarrow{AB}$ et $\overrightarrow{AC}$ ne sont pas colinéaires donc $A; B; C$ ne sont pas alignés.  
D'où les points $A$ et $B$ et $C$ forment un plan.  
Et on a $A \in (ABC)$ car $0 + 1 + 1 - 2 = 0$  
Et $B \in (ABC)$ car $0 + 1 + 1 - 2 = 0$  
Et $C \in (ABC)$ car $0 + 1 + 1 - 2 = 0$  
D'où $x + y + z - 2 = 0$ est une équation cartésienne du plan $(ABC)$.  

b) Déterminer une équation cartésienne de la sphère $(S)$ de centre $O$ et tangente à $(ABC)$.  
$$R = d(O; (ABC)) = \frac{|0 + 0 + 0 - 2|}{\sqrt{1^2 + 1^2 + 1^2}} = \frac{2}{\sqrt{3}}$$  
$(S): (x - 0)^2 + (y - 0)^2 + (z - 0)^2 = \left(\frac{2}{\sqrt{3}}\right)^2$  
Donc $(S): x^2 + y^2 + z^2 = \frac{4}{3}$  

c) Déterminer les coordonnées de le point de contact de $(S)$ et $(ABC)$.  
$(x; y; z)$ les coordonnées de l vérifie le système  
$$\begin{cases} x = 0 + t \\ y = 0 + t \\ z = 0 + t \\ (ABC) : x + y + z - 2 = 0 \end{cases}$$  
Donc $t + t + t - 2 = 0$ donc $3t - 2 = 0$  
Donc $t = \frac{2}{3}$ donc $I\left(\frac{2}{3}; \frac{2}{3}; \frac{2}{3}\right)$  

3) Soit $\alpha$ un réel, on considère les points $E\left(-\alpha; -\frac{2}{\sqrt{3}} \cdot \alpha\right)$ et $F\left(-\alpha; -\frac{2}{\sqrt{3}} \cdot \alpha\right)$ et $(S_\alpha)$ l’ensemble des points $M$ de l’espace tel que $ME^2 + ME \cdot EF = 0$  
a) Montrer que $(S_\alpha)$ est la sphère de diamètre $[EF]$.  
Soit $M \in (S_\alpha)$  
$$ME^2 + ME \cdot EF = 0 \iff ME^2 + ME \cdot (EM + MF) = 0$$  
$$\iff ME^2 + ME \cdot (EM + MF) = 0$$  
$$\iff ME^2 + ME \cdot (EM + MF) = 0$$  
$$\iff ME^2 + ME^2 + ME \cdot MF = 0$$  
$$\iff ME \cdot MF = 0, \text{ car } ME^2 = ME^2$$  
Donc $(S_\alpha)$ est la sphère de diamètre $[EF]$.
```

<!-- Page 236 -->

```markdown
b) Montrer que pour tout réel $ \alpha $, la sphère $ (S_\alpha) $ est tangent au plan $(ABC)$

Soit $ \Omega_\alpha $ le centre de $ (S_\alpha) $ et Soit $ R_\alpha $ son rayon  
On a $ \Omega_\alpha $ le centre de $ (S_\alpha) $ est le milieu du segment $ [EF] $ donc  
$$ R_\alpha = \frac{EF}{2} = \frac{\sqrt{2 + \left(\frac{4}{\sqrt{3}}\right)^2} + 0^2}{2} = \frac{2}{\sqrt{3}} $$  
$$ d(\Omega_i ; (ABC)) = \frac{| -\alpha + 2|}{\sqrt{1^2 + 12 + 12}} = \frac{2}{\sqrt{3}} = R_\alpha $$  
Donc pour tout réel $ \alpha $, la sphère $ (S_\alpha) $ est tangent au plan $(ABC)$

c) On notera $ J $ le point de contact de $ (S_\alpha) $ et de $(ABC)$,  
Déterminer la valeur $ \alpha $ pour que $ IJ = \sqrt{2} $ 

On a $ J $ le point de contact de $ (S_\alpha) $ et de $(ABC)$  
$(x;y;z)$ les coordonnées de $ J $ vérifie le système  
$$ \begin{cases}
x = -\alpha + t \\
y = 0 + t \\
z = \alpha + t - 2 = 0  
\end{cases} \quad (t \in \mathbb{R}) $$  
Donc $ -\alpha + t + t + t - 2 = 0 $  
Donc $ 3t - 2 = 0 $  
Donc $ t = \frac{2}{3} $  
Donc $ J(\frac{2}{3} - \alpha; \frac{2}{3} + \alpha) $ et on a  
$$ IJ = \sqrt{2} + 0^2 + \alpha^2 = \sqrt{2\alpha} = \sqrt{2|\alpha|} $$  
$$ | \alpha | = 1 \Leftrightarrow \alpha = 1 \text{ ou } \alpha = -1 $$
```

<!-- Page 237 -->

```markdown
# Deuxièmes bac sciences
## PC/SVT/ST

### Résumé : Produit vectoriel et produit scalaire dans l’espace
#### Deuxièmes bac sciences PC/SVT/ST

- Cours détaillé
- Résumé de cours
- Série corrigée

admin  
Prof fayssal  
06813999067  
www.elboutkhili.jimdofree.com
```

<!-- Page 238 -->

```markdown
# Résumé : GEOMETRIE DANS L’ESPACE
Prof : FAYSSAL 2BAC/PC/SVT/ST

---

## Condition de colinéarité de deux vecteurs
Soient $\vec{U}(x; y; z)$ et $\vec{V}(x'; y'; z')$ deux vecteurs  
$\vec{U} \text{ et } \vec{V} sont colinéaires \iff \exists \alpha \in \mathbb{R} : \vec{U} = \alpha \vec{V}$  
$$ \Delta = \begin{vmatrix} y' & y & z' \\ x' & x & z \\ x & y & z \end{vmatrix} = 0 $$

### Vecteurs coplanaires
$\vec{U}(x; y; z); \vec{V}(x'; y'; z'); \vec{W}(x''; y''; z'')$ Les vecteurs $\vec{U} , \vec{V} \text{ et } \vec{W}$ sont coplanaires ssí $det(\alpha; \beta; \gamma) = 0$  
Les vecteurs $\vec{U} , \vec{V} \text{ et } \vec{W}$ sont coplanaires ssí $det(\vec{U}, \vec{V}, \vec{W}) = 0$

---

## Norme d’un vecteur et distance entre deux points
$A(x_A; y_A; z_A)$ et $B(x_B; y_B; z_B)$  
Soit $(x; y; z)$ un vecteur dans l'espace:  
$$ ||\vec{V}|| = \sqrt{x^2 + y^2 + z^2} $$  
$$ \vec{AB}(x_B - x_A; y_B - y_A; z_B - z_A) $$  
$$ AB = \sqrt{(x_B - x_A)^2 + (y_B - y_A)^2 + (z_B - z_A)^2} $$  
Coordonnées de l'le milieu de $[AB]$ est :  
$$ \left( \frac{x_A+x_B}{2}, \frac{y_A+y_B}{2}, \frac{z_A+z_B}{2} \right) $$

## Formule trigonométrique du produit scalaire
Soient $\vec{U} \text{ et } \vec{V}$ des vecteurs dans l'espace donc :  
$$ \vec{U} \cdot \vec{V} = ||\vec{U}|| \cdot ||\vec{V}|| \cdot \cos(\angle(AB; AC)) $$  
$$ \vec{U} \cdot \vec{V} = \vec{AB} \cdot \vec{AC} $$

---

## Formule analytique du produit scalaire
Soient $\vec{U}(x; y; z)$ et $\vec{V}(x'; y'; z')$ on a :  
$$ \vec{U} \cdot \vec{V} = x'x + yy' + zz' $$  
$$ \vec{U} \perp \vec{V} \iff \vec{U} \cdot \vec{V} = 0 $$

## DROITE DANS L’ESPACE
Soit $(D)$ la droite qui passant par le point $A(x_A; y_A; z_A)$ et de vecteur directeur $\vec{U}(a; b; c)$  
Une représentation paramétrique de $(D)$  
$$ (x = x_A + at $$  
$$ y = y_A + bt; \quad (t \in \mathbb{R}) $$  
$$ z = z_A + ct) $$

### Position relative de deux droites
$(D)$ une droite de vecteur directeur $\vec{U}$ et $(D')$ une droite de vecteur directeur $\vec{V}$  
$$(D)/(D') \iff \vec{U} \text{ et } \vec{V} sont colinéaires $$  
$$(D) \perp (D') \iff \vec{U} \text{ et } \vec{V} sont orthogonaux $$

### Plan dans l’espace - Vecteur normale
Tout vecteur $\vec{n}$ non nul as direction est perpendicular au plan $(P)$ s'appelle vecteur normale au plan $(P)$  
Toute plan a une équation cartésienne de la forme :  
$$ (P) : ax + by + cz + d = 0 $$  
Le vecteur $\vec{n}(a; b; c)$ est un vecteur normal au plan $(P) : ax + by + cz + d = 0$  
À un point $M(x; y; z)$ de l'espace  
L'ensemble des points $M(x; y; z)$ de l'espace tel que $\vec{AM}. \vec{n} = 0$ est un plan $(P)$ passant par $A$ et de vecteur normale $\vec{n}$

---

## Position relative de deux plans
Soient $(P)$ Un plan de vecteur normale $\vec{n}$ et $(Q)$ un plan de vecteur normal $\vec{n'}$  
$$(P)//(Q) \text{ssi } \vec{n} \text{ et } \vec{n'} sont colinéaires$$  
$$(P) \perp (Q) \text{ssi } \vec{n} \text{ et } \vec{n'} sont orthogonaux$$

## Position relative d’un plan et une droite
$(D)$ une droite de vecteur directeur $\vec{U}$ et $(P)$ Un plan de vecteur normale $\vec{n}$  
$$(P) \perp (D) \text{ssi } \vec{n} \text{ et } \vec{U} sont colinéaires$$  
$$(P)//(D) \text{ssi } \vec{n} \text{ et } \vec{U} sont orthogonaux$$
```

<!-- Page 239 -->

```markdown
# DISTANCE D’UN POINT à UN PLAN

Soient $(P) : \alpha x + \beta y + \gamma z + d = 0$ un plan et $A(x_A; y_A; z_A)$ un point de l’espace et $H$ la projection orthogonale de $A$ sur le plan $(P)$

La distance de point A au plan $(P)$ est :
$$ d(A; (P)) = AH = \frac{|\alpha x_A + \beta y_A + \gamma z_A + d|}{\sqrt{\alpha^2 + \beta^2 + \gamma^2}} $$

## Sphère dans l’espace

Soit $(S)$ la sphère de centre $\Omega(a; b; c)$ et de rayon $r$ l’équation cartésienne de $(S)$ est :
$$ (x - a)^2 + (y - b)^2 + (z - c)^2 = r^2 $$

L’équation cartésienne de la sphère (S) définie par son diamètre $[AB]$ est donnée par $M(x; y; z) \in (S) \iff AM.BM = 0$

### Proposition : l’ensemble des points M

L’ensemble des points $M(x; y; z)$ de l’espace tel que :
$$ (S) : x^2 + y^2 + z^2 + \alpha x + \beta y + \gamma z + d = 0 $$
est un sphère si $D = \alpha^2 + \beta^2 + \gamma^2 - 4d > 0$

- Son centre est le point $\Omega \left( -\frac{\alpha}{2}; -\frac{\beta}{2}; -\frac{\gamma}{2} \right)$
- Son rayon est $r = \sqrt{\frac{D}{4}}$

## Position relative d’une sphère et un plan

Soit $(S)$ une sphère de centre $\Omega$ et de rayon $R$ $(P)$ un plan et $d$ la distance entre le centre $\Omega$ et le plan $(P) : d = d(\Omega; (P))$

$$ d > R $$
Dans ce cas le plan ne coupe pas la sphère

$$ d = R $$
Dans ce cas le plan est tangent à la sphère en un point $H$

$$ d < R $$
Dans ce cas le plan coupe la sphère

## Position relative d’une sphère et une droite

Soit $(S)$ une sphère de centre $\Omega$ et de rayon $R$ et $(\Delta)$ la droite passant par le point $A$ et de vecteur directeur $\vec{u}(\alpha; \beta; \gamma)$

Pour déterminer les coordonnées des points d’intersections de sphère $(S)$ et la droite $(\Delta)$ en résolvant le système suivant :
$$
\begin{cases}
(x = x_A + \alpha t; \; t \in \mathbb{R}) \\
(y = y_A + \beta t) \\
(z = z_A + \gamma t)
\end{cases}
$$
$$(S): (x - x_0)^2 + (y - y_0)^2 + (z - z_0)^2 = R^2$$

### Expression analytique du produit vectoriel

$$ \vec{u} \wedge \vec{v} = \begin{vmatrix}
\hat{i} & \hat{j} & \hat{k} \\
y & y' & z' \\
|x| & |x'| & |y'| \\
\end{vmatrix} $$

- $\vec{u}$ et $\vec{v}$ sont colinéaires si $\vec{u} \wedge \vec{v} = \vec{0}$
- $A; B$ et $C$ sont alignés si $AB \land AC = \vec{0}$
- Le vecteur $AB \land AC$ est un vecteur normal au plan $(ABC)$

## Distance d’un point $\Omega$ à une droite $(D)$

La droite qui passe par $A$ et de vecteur directeur $\vec{u}$ et $\Omega$ un point de l’espace

Alors
$$ d(\Omega; (D)) = \frac{|\Omega \land \vec{u}|}{||\vec{u}||} $$

## Aire d’un triangle ABC

$$ S_{ABC} = \frac{|AB \land AC|}{2} $$
```

<!-- Page 240 -->

```markdown
# Deuxièmes bac sciences PC/SVT/ST

## Série corrigée : Produit vectoriel et produit scalaire dans l'espace
### Deuxièmes bac sciences PC/SVT/ST

- Cours détaillé
- Résumé de cours
- Série corrigée
```

<!-- Page 241 -->

```markdown
# Prof : fayssal  
## Site web : www.elboutkhili.jimdofree.com  
## Série: Géométrie dans l’espace 2BAC/PC/SVT  
### Page 01  

## Exercice 01
On considère les points $A(0; -1; 1)$ et $B(-1; 1; 3)$ et $C(0; 1; 5)$ et $(S)$ l’ensemble des points $M(x; y; z)$ tels que 

$$
x^2 + y^2 + z^2 - 2xy + 12z + 22 = 0
$$

1) Montrer que $AB \perp AC = 4i + 4j - 2k$ et déduire que les points $A$ et $B$ et $C$ forment un plan

b) Montrer que $2x + 2y - z + 3 = 0$ est une équation cartésienne du plan $(ABC)$

2)a) Montrer que $(S)$ est une sphère de centre $\Omega(1; -1; -6)$ et de rayon $R = 4$

b) Calculer $\Omega \cap (ABC)$ et déduire que le plan $(ABC)$ coupe la sphère $(S)$ selon un cercle de rayon $r = \sqrt{7}$ 

3) a) Déterminer la représentation paramétrique de $(D)$ passant par le point $\Omega$ est orthogonale au plan $(ABC)$

b) Déterminer le triplet de coordonnées du point $H$ centre du cercle $(C)$  

## Exercice 02
On considère dans l’espace les points : $A(1; 0; 1); B(0; -4; 4); C(3; -4; 5)$, et la sphère $(S)$ dont une équation cartésienne 

$$
x^2 + y^2 + z^2 - 4x + 4y - 6z + 8 = 0
$$

1)a) Montrer que $(S)$ est de centre $\Omega(2; -2; 3)$ et de rayon 3

b) Vérifier que $A \in (S)$ pons écrire une équation cartésienne du plan $(P)$ tangente à $(S)$ en $A$.

2)a) Montrer que $AB \perp AC = -4i + 10j + 12k$, et déduire que 

$$
2x - 5y - 6z + 4 = 0
$$ 

est une équation du plan $(ABC)$

b) Montrer que $(ABC)$ et $(S)$ sont orthogonaux

c) Montrer que le plan $(ABC)$ coupe la sphère $(S)$ suivant un cercle $(Γ)$ dont on déterminera son centre $H$ et son rayon 

3) Montrer que $(Γ)$ est le cercle circonscrit au triangle $ABC$  

## Exercice 03
On considère les points $A(1; 2; 1), B(1; 3; 1) et C(1; 0; 1)$ la sphère de centre $\Omega(-3; 0; 1)$ et de rayon $2\sqrt{2}$

1) Montrer que $OA \cap OB = -i + k$ puis en déduire que $x - z = 0$ est une équation cartésienne au plan $(OAB)$.

2)a) Montrer que le plan $(OAB)$ est tangent à la sphère $(S)$ en un point $H$

b) Déterminer les coordonnées du point de contact $H$

Soit $(Δ)$ la droite passant par le point $C$ et de vecteur directeur $\vec{u}(2; 0; -2)$

a) Déterminer une représentation paramétrique de $(Δ)$ 

b) Déterminer une équation cartésienne de $(S)$

c) Montrer que la droite $(Δ)$ est tangente à la sphère $(S)$ puis déterminer les coordonnées de point de contact  

## Exercice 04
On considère les points $A(3; -2; 2), B(-1; 6; 4)$ et $C(5; 4; 4)$ et $(S)$ sphère de diamètre $[AB]$

1) Vérifier que le triangle $ABC$ est rectangle en $C$ puis en déduire que $C$ appartient à $(S)$

2) Montrer que l’équation de sphère $(S)$ est : 

$$
(x - 1)^2 + (y - 2)^2 + (z - 3)^2 = 21
$$

3) Déterminer une équation cartésienne du plan $(P)$ tangente à $(S)$ au point $C$

Soit $(Δ)$ la droite passant par le point $D(4; 3; 2)$ et de vecteur directeur $\vec{u}(1; 0; 3)$

a) Montrer que $(\Omega; (Δ)) = \sqrt{11}$ où $\Omega$ est le centre de $(S)$

b) Déterminer les coordonnées des points d’intersection de la droite $(Δ)$ et la sphère $(S)$ s’il existe

5) Soit le plan : $x - 4y + 2z = 0$  
Trouver les valeurs de $d$ pour que $(Q)$ soit tangente à $(S)$
```

<!-- Page 242 -->

```markdown
# Prof : fayssal
# Site web : www.elboutkhili.jimdofree.com
# Série : Géométrie dans l’espace 2BAC/PC/SVT 

## Exercice 05
On considère la sphère $(S)$ d’équation cartésienne:
$$ x^2 + y^2 + z^2 - 2x - 2y - 2z - 1 = 0 $$
Et le plan $(P)$ d’équation cartésienne : $y - z = 0$.
1) a) Montrer que le centre de $(S)$ est $(1; 1; 1)$ et que son rayon $R = 2$.
   
   b) Calculer $d(\Omega; (P))$ et en déduire le plan $(P)$ coupe la sphère $(S)$ selon un cercle $(C)$.

   c) Déterminer le centre et le rayon du cercle $(C)$.
  
2) Soit $(\Delta)$ la droite passant par $A(1; -2; 2)$ et orthogonal au $(P)$
   
   a) Montrer que $\vec{u}(0; 1; -1)$ est un vecteur directeur de la droite $(\Delta)$.
   
   b) Montrer que $|\Omega \land \vec{u}| = \sqrt{2}||\vec{u}||$ et en déduire que la droite $(\Delta)$ coupe la sphère $(S)$ en deux points.
   
   b) Déterminer le triple des coordonnées de chacun des points d’intersection de la droite $(\Delta)$ et la sphère $(S)$.

## Exercice 06
Soit $(S)$ l’ensemble des points $M(x; y; z)$ de l’espace tels que:
$$ x^2 + y^2 + z^2 + x - \frac{1}{4} = 0 $$
et $(P)$ le plan d’équation : $y + z - 1 = 0$.

1) Montrer que $(S)$ est une sphère dont on déterminera le centre $\Omega$ et le rayon $R$.

2) Montrer que le plan $(P)$ est tangent à la sphère $(S)$ et déterminer leur point d’intersection.

3) Soit $(Q)$ le plan d’équation : $2x - y + z + 1 = 0.$ Montrer que : $(P) \cap (Q)$.

4) Soit la droite $(D)$ l’intersection des plans $(P)$ et $(Q)$.
   Déterminer une représentation paramétrique de la droite $(D)$.

5) a) Montrer que la droite $(D)$ est tangente à la sphère $(S)$ en un point à déterminer.

   b) Montrer que le plan $(Q)$ coupe la sphère $(S)$ selon un cercle dont on précisera le centre et le rayon.

## Exercice 07
Soient les points $A(0; 0; 1); B(1; 1; 2); C(2; 1; 2)$.

1) a) Vérifier que: $\overline{AB} \parallel \overline{AC} = \vec{i} - 2\vec{j} - 2\vec{k}$.

   b) En déduire $x - 2y - 2z + 7 = 0$ est une équation cartésienne du plan $(ABC)$.

2) Soient les points $E(5; 1; 4)$ et $F(-1; 12)$ et $(S)$ l’ensemble des points $M$ vérifiant : $\overline{ME}. \overline{MF} = 0$.

   Montrer que $(S)$ est la sphère de centre $\Omega(2; 1; 8)$ de rayon $5$.
   
   b) Calculer $d(\Omega; (ABC))$ distance du point $O$ au plan $(ABC)$.
   
   c) En déduire que le plan $(ABC)$ coupe la sphère $(S)$ suivant un cercle $(\Gamma)$ de rayon $r = 4$.

## Exercice 08
On considère les points : $A(1; 1; 0); B(0; 2; 0); C(0; 0; 3)$.

1) a) Déterminer les coordonnées de $\overline{AB} \land \overline{AC}$.

   b) Calculer l’aire du triangle $ABC$.

   c) Calculer la distance du point $B$ à la droite $(AC)$.

2) Soit $(D)$ la droite passant par $C$ de vecteur directeur $\vec{u}(1; 1; -3)$.
   
   Montrer que : $(D) \perp (AB)$.

3) Soit $(P)$ d’équation cartésienne : $2x + y - 2z + 1 = 0$.
   
   Et $(S_\alpha)$ la sphère d’équation cartésienne :
$$ x^2 + y^2 + z^2 - x - 2y + \frac{5}{4} - \alpha = 0 $$
Avec $\alpha$ est un réel strictement positif.
   
   a) Déterminer en fonction de $\alpha$, le centre $\Omega$ et le rayon $R$ de la sphère $(S_\alpha)$.

   b) Déterminer la valeur de $\alpha$ pour laquelle le plan $(P)$ est tangente à la sphère $(S_\alpha)$ puis déterminer les coordonnées du point de contact.
```

<!-- Page 243 -->

```markdown
# Exercices 01
L'espace est mené d'un repère orthonormé $(O, \vec{i}, \vec{j}, \vec{k})$.  
On considère les points $A (0 ; -1 ; 1)$ et $B (-1 ; 1 ; 3)$ et $C (0 ; 1 ; 5)$ et $(S)$ l'ensemble des points $M(x ; y ; z)$ tels que 

$$ 
x^2 + y^2 + z^2 - 2x + 2y + 12z + 22 = 0 
$$

1) a) Montrer que $\overline{AB} \land \overline{AC} = 4\vec{i} + 4\vec{j} - 2\vec{k}$ et déduire que les points $A$ et $B$ et $C$ en forment un plan  
b) Montrer que $2x + 2y - 2z + 3 = 0$ est une équation cartésienne du plan $(ABC)$

2) a) Montrer que $(S)$ est une sphère de centre $\Omega(1 ; -1 ; -6)$ et de rayon $R = 4$  
b) Calculer $d(\Omega ; (ABC))$ et déduire que le plan $(ABC)$ coupe la sphère $(S)$ suivant un cercle de rayon $r = \sqrt{7}$  
3) a) Déterminer la représentation paramétrique de $(D)$ passant par le point $\Omega$ est orthogonale au plan $(ABC)$  
b) Déterminer le triplet de coordonnées du point $H$ centre du cercle $(C)$

# Solution de l'exercice 1
On considère les points $A (0 ; -1 ; 1)$ et $B (-1 ; 1 ; 3)$ et $C (0 ; 1 ; 5)$.  
1. a) Montrer que $\overline{AB} \land \overline{AC} = 4\vec{i} + 4\vec{j} - 2\vec{k}$ et déduire que les points $A$ et $B$ et $C$ ne sont pas alignés

On a 

$$ 
\overline{AB} \land \overline{AC} = \begin{vmatrix} 
-1 & 1 & 3 \\ 
0 & -1 & 1 \\ 
0 & 1 & 5 
\end{vmatrix} = \begin{vmatrix} 
\frac{-1}{2} & 2 & 0 \\ 
0 & -1 & 4 \\ 
\vec{k} & 4i + 4j - 2k 
\end{vmatrix} 
$$

On a $\overline{AB} \land \overline{AC}$ sont colinéaires donc les points $A$ et $B$ et $C$ ne sont pas alignés  
D’où les points $A$ et $B$ et $C$ forment un plan

b. En déduire que $2x + 2y - 2z + 3 = 0$ est une équation cartésienne du plan $(ABC)$  
Soit $M(x ; y ; z) \in (ABC)$

On a le vecteur $\overline{AB} \land \overline{AC} \left( \begin{array}{c} 4 \\ 4 \\ -2 \end{array} \right)$ est normale au plan $(ABC)$

Donc $(ABC) : 4x + 4y - 2z + d = 0$  
Donc $(ABC): 4x + 4y - 2z + d = 0$  
Et on a $A(0 ; -1 ; 1) \in (ABC)$ donc on remplace les coordonnées de $A$

dans $0 - 4 - 2 + d = 0$ donc $-6 + d = 0$ donc $d = 6$  
Donc $(ABC) : 2x + 2y - z + 3 = 0$  

2)a) Montrer que $(S)$ est une sphère de centre $\Omega(1 ; -1 ; -6)$ et de rayon $R=4$  
Soit $M(x ; y ; z) \in (S)$ 

$$ 
x^2 + y^2 + z^2 - 2x + 2y + 12z + 22 = 0 
$$

$$ 
x^2 - 2x + 1 + y^2 + 2y + 1 + (z + 6)^2 = 4^2 
$$

Donc $(S)$ : $(x - 1)^2 + (y + 1)^2 + (z + 6)^2 = 4^2$  
Donc $(S)$ est une sphère de centre $\Omega(1 ; -1 ; -6)$ et de rayon $R=4$ 

2ème méthode
On pose $a = -2 ; b = 2 ; c = 12 et d = 22$  
$$ 
a^2 + b^2 + c^2 - 4d = (-2)^2 + 2^2 + 12^2 - 4 \times 22 = 64 > 0 
$$

Donc l'ensemble $(S)$ est une sphère de centre $\Omega\left(-\frac{a}{2} ; -\frac{b}{2} ; -\frac{c}{2}\right)$  
$$ 
\Omega(1 ; -1 ; -6) \text{ et de rayon } r = \sqrt{a^2 + b^2 + c^2 - 4d} = \sqrt{64} = 8 = 4 
$$

b) calculer $d(\Omega ; (ABC))$ et déduire que le plan $(ABC)$ coupe la sphère $(S)$ suivant un cercle de rayon $r=\sqrt{7}$  
$$ 
d(\Omega ; (ABC)) = \frac{|2 - 2 + 6 + 3|}{\sqrt{2^2 + 2^2 + (-1)^2}} = \frac{9}{\sqrt{9}} < R = 4 
$$
```

<!-- Page 244 -->

```markdown
Prof : fayssal  
Site web : www.elbouthkili.jimdofree.com  

Donc le plan (ABC) coupe la sphère (S) suivant un cercle de rayon  
$$ r = \sqrt{R^2 - d^2} $$  
$$ = \sqrt{4^2 - \sqrt{7}} $$  

3) a. Déterminer une représentation paramétrique de la droite (D) passant par le point $\Omega$ et perpendiculaire au plan (ABC)  
La droite (D) et perpendiculaire au plan (ABC) donc le vecteur $ \overrightarrow{AB} \wedge \overrightarrow{AC}(2; 2; -1)$ est directeur à la droite (D)  
Soit $M(x; y; z) \in (D)$  
$ (D) : \begin{cases}  
x = 1 + 2t \\  
y = -1 + 2t \\  
z = -6 - t  
\end{cases} \quad (t \in \mathbb{R})$  
Donc $(D)$ :  
$$ M(x; y; z) = \begin{cases}  
x = 1 + 2t \\  
y = -1 + 2t \\  
z = -6 - t  
\end{cases} $$  
est une représentation paramétrique de la droite (D)  

b- Déterminer les coordonnées du point H centre du cercle (C)  
$(x; y; z)$ les coordonnées de H vérifient  
$$ \begin{cases}  
x = 1 + 2t \\  
y = -1 + 2t \\  
z = -6 - t  
\end{cases} $$  
avec $(\Omega)$:  
$$ \begin{cases}  
y = -1 + 2t \\  
z = -6 - t  
\end{cases} $$  
et $(P) : 2x + 2y - 3 = 0$  

Donc $2(1 + 2t) + 2(-1 + 2t) - (6 - 6t) + 3 = 0$  
Donc $9t + 9 = 0 \quad \Longrightarrow \quad t = -1$  
on remplace $t = -1$ dans  
$$ \begin{cases}  
x = 1 + 2t \\  
y = -1 + 2t \\  
z = -6 - t  
\end{cases} $$  
On trouve  
$$ \begin{cases}  
x = 1 - 2 = -1 \\  
y = -1 - 2 = -3 \\  
z = -6 + 1 = -5  
\end{cases} $$  
donc $H(-1; -3; -5)$  

Exercice 02  
On considère dans l'espace les points : $A(1; 0; 1); B(0; -4; 4); C(3; -4; 5)$, et la sphère $(S)$ dont une équation cartésienne:  
$$ x^2 + y^2 + z^2 - 4x + 4y - 6z + 8 = 0 $$  

1) a) Montrer que $(S)$ est de centre $\Omega(2; -2; 3)$ et de rayon 3  
1) b) Vérifier que $A \in (S)$ puis écrire une équation cartésienne du plan (P) tangente à $(S)$ en $A$.  
2) a) Montrer que: $ \overrightarrow{AB} \cdot \overrightarrow{AC} = -4i + 10j + 12k $, et déduire que $ 2x - 5y - 6z + 4 = 0 $ est une équation du plan (ABC)  
b) Montrer que $(ABC)$ et $(P)$ sont orthogonaux  
c) Montrer que le plan (ABC) coupe la sphère $(S)$ suivant un cercle $(\Gamma)$ dont on déterminera son centre H et son rayon  
3) Montrer que $(\Gamma)$ est le cercle circonscrit au triangle $ABC$  

Solution de l’exercice 02  
On considère dans l’espace les points : $A(1; 0; 1); B(0; -4; 4); C(3; -4; 5)$, et la sphère $(S)$ dont une équation cartésienne:  
$$ x^2 + y^2 + z^2 - 4x + 4y - 6z + 8 = 0 $$  

1) a) Montrer que le centre de $(S)$ est $\Omega(2; -2; 3)$ et son rayon 3  
Soit $M(x; y; z) \in (S)$  
1ère méthode :  
$$ x^2 + y^2 + z^2 - 4x + 4y - 6z + 8 = 0 \Leftrightarrow $$  
$$ x^2 - 4x + y^2 + 4y + z^2 - 6z + 2^2 = 2^2 + 2^2 + 3^2 = 0 $$  
Donc $(S): (x - 2)^2 + (y + 2)^2 + (z - 3)^2 = 3^2 $$  
Donc $(S)$ est une sphère de centre $\Omega(2; -2; 3)$ et de rayon R=3  

2ème méthode  
On pose $a = -4; b = 4; c = -6 et d = 8$  
$$ a^2 + b^2 + c^2 - 4d = (-4)^2 + (-6)^2 - 4(8) = 36 > 0 $$  
Donc l’ensemble $(S)$ est une sphère de centre  
$$ \Omega(-\frac{a}{2}; -\frac{b}{2}; -\frac{c}{2}) = 3 $$  
Donc $\Omega(2; -2; 3)$ et de rayon $r = \frac{\sqrt{36}}{2} = 6 = 3 $  
```

<!-- Page 245 -->

```markdown
b) Vérifier que A(1; 0; 1) ∈ (S) puis écrire une équation cartésienne du plan (P) tangente à (S) en A.

1ère méthode :
On a : $1^2 + 0^2 + 1^2 - 4 - 0 + 6 - 8 = 0$ donc $A(1; 0; 1) \in (S)$

2ème méthode :
$$ \Omega A = \sqrt{(1 - 2)^2 + (0 + 2)^2 + (1 - 3)^2} = \sqrt{9} = 3 $$
Donc $\Delta A = R \, \text{d} A (1; 0; 1) \in (S)$

Une équation cartésienne du plan (P) tangente à (S) en A.
Soit $M(x; y; z)$ est un point de (Q)

Donc $AM \left( \begin{matrix} x - 1 \\ y - 0 \\ z - 1 \end{matrix} \right)$ et $\Omega A \left( \begin{matrix} -1 \\ -2 \\ -2 \end{matrix} \right)$ sont orthogonaux, car $\Omega A$ est vecteur normal au plan (P)

Donc $AM . \Omega A = 0$
$$\left( x - 1 \right) \cdot \left( -1 \right) + \left( y - 0 \right) \cdot \left( -2 \right) + \left( z - 1 \right) \cdot \left( -2 \right) = 0$$
Donc $-(x - 1) + 2y - 2(z - 1) = 0$
Donc $-x + 2y + 3 = 0$

Une équation cartésienne de (P) est : $-x + 2y + 3 = 0$

2) a) Montrer que : $AB \land AC = -\frac{4}{3} \mathbf{i} - \frac{1}{3} \mathbf{j} + 2 \mathbf{k}$ et déduire que $2x - 5y - 6z + 4 = 0$ est une équation cartésienne du plan (ABC)

On a $A(1; 0; 1); B(0; -4; 4); C(3; -4; 5)$, donc
$$AB \land AC = \begin{vmatrix} -\frac{1}{3} & 2 & 1 \\ -4 & -4 & 1 \\ 2 & -4 & 1 \end{vmatrix} = -4 \mathbf{i} + 10 \mathbf{j} + 12 \mathbf{k}$$
En déduire que $2x - 5y - 6z + 4 = 0$ est une équation cartésienne du plan (ABC)

On a le vecteur $AB \land AC \left( -\frac{4}{3}, -\frac{1}{3}, 2 \right)$ est normale au plan (ABC)

Donc le vecteur $\mathbf{n} = \left( \begin{matrix} \frac{2}{-5} \\ -6 \end{matrix} \right)$ est normale au plan (ABC)

Et le vecteur $\Omega A \left( \begin{matrix} 2 \\ -1 \\ -2 \end{matrix} \right)$ est normale au plan (ABC)

$n . \Omega A = \left( \begin{matrix} 2 \\ -5 \\ -6 \end{matrix} \right)$
$$\mathbf{n} . \Omega A = \left( \begin{matrix} 2 \\ -5 \\ -6 \end{matrix} \right) . \left( \begin{matrix} 2 \\ -1 \\ -2 \end{matrix} \right) = -2 - 10 + 12 = 0$$

Donc les vecteurs $\mathbf{n}$ et $\Omega A$ sont orthogonaux.

D'où les plans (ABC) et (P) sont orthogonaux.

c) Montrer que le plan (ABC) coupe la sphère (S) suivant un cercle $(\Gamma)$ dont on déterminera son centre H et son rayon
$$d(\Omega; (ABC)) = |(2 \times 2) + (5 \times 2) - (6 \times 3) + 4| = 0 = R = 3$$

Donc le plan (ABC) coupe la sphère (S) suivant un cercle de même rayon que (S) donc $r = \sqrt{R^2 - R^2} = R = 3$

Et comme $d(\Omega; (C) = 0$ donc le centre de cercle (C) est $\Omega(2; -2; 3)$ le centre du sphère (S)

On a le cercle $(\Gamma)$ est de centre $\Omega(2; -2; 3)$ et de rayon $R = 3$ et :

Et comme $d(\Omega; (ABC) = 0 \in (S)$
$$\Omega A = \sqrt{1^2 - 2^2 + (0 + 2)^2 + (1 - 3)^2} = 3$$ donc $A \in (S)$
$$\Omega B = \sqrt{(0 - 2)^2 + (-4 + 2)^2 + (4 - 3)^2} = \sqrt{9} = 3 \text{ donc } B \in (S)$$
$$\Omega C = \sqrt{(3 - 2)^2 + (-4 + 2)^2 + (5 - 3)^2} = \sqrt{9} = 3 \text{ donc } C \in (S)$$
D’où $(\Gamma)$ est le cercle circonscrit au triangle ABC
```

<!-- Page 246 -->

```markdown
# Corrigé de série : Géométrie dans l’espace

## Exercise 03
On considère les points \( A(1; 2; 1) \), \( B(1; 3; 1) \) et \( C(1; 0; 1) \) et (S) la sphère de centre \( \Omega(-3; 0; 1) \) et de rayon \( 2\sqrt{2} \)

1) Montrer que \( \overrightarrow{OA} \wedge \overrightarrow{OB} = -\mathbf{i} + \mathbf{k} \) puis en déduire que 
   $$ x - z = 0 $$ 
   est une équation cartésienne au plan (OAB).

2)a) Montrer que le plan (OAB) est tangent à la sphère (S) en un point H  
b) Déterminer les coordonnées du point de contact H

3) Soit (Δ) la droite passant par le point \( C(1; 0; 1) \) et de vecteur directeur \( \mathbf{u}(2; 0; -2) \)
a) Déterminer une représentation paramétrique de (Δ)  
b) Déterminer une équation cartésienne de (S)  
c) Montrer que la droite (Δ) est tangente à la sphère (S) puis déterminer les coordonnées de point de contact

## Solution d'exercice 3
On considère les points \( A(1; 2; 1) \), \( B(1; 3; 1) \) et \( C(1; 0; 1) \) et (S) la sphère de centre \( \Omega(-3; 0; 1) \) et de rayon \( 2\sqrt{2} \)

1) Montrer que \( \overrightarrow{OA} \wedge \overrightarrow{OB} = -\mathbf{i} + \mathbf{k} \) puis en déduire que 
   $$ x - z = 0 $$

   $$ \overrightarrow{OA} \wedge \overrightarrow{OB} = \begin{pmatrix}
   1 & 2 & 1 \\
   1 & 3 & 1 \\
   1 & 1 & 1
   \end{pmatrix} = |2 1 1| \begin{pmatrix}
   1 & 1 & 1 \\
   1 & 3 & 1 \\
   1 & 2 & 1
   \end{pmatrix} = -\mathbf{i} + \mathbf{k} $$

Soit \( M(x; y; z) \) \( \in (OAB) \)

On a le vecteur \( \overrightarrow{OA} \wedge \overrightarrow{OB} = \begin{pmatrix} 0 \\ 1 \\ 0 \end{pmatrix} \) est normal au plan (ABC)

Donc \( (OAB): -x + z + d = 0 \)  
Et on a \( 0(0, 0, 0) \in (OAB) \) donc on remplace les coordonnées de 0

Donc \( 0 + 0 + d = 0 \)  
D'où \( (OAB): -x + z = 0 \)

3) Soit (Δ) la droite passant par le point \( C(1; 0; 1) \) et de vecteur directeur \( \mathbf{u}(2; 0; -2) \)  
a) Déterminer une représentation paramétrique de (Δ)  
On a (Δ) la droite passant par le point \( C(1; 0; 1) \) et de vecteur directeur \( \mathbf{u}(2; 0; -2) \) donc :

$$ \begin{pmatrix}
x \\
y \\
z
\end{pmatrix} =
\begin{pmatrix}
1 \\
0 \\
1
\end{pmatrix} + t \begin{pmatrix}
2 \\
0 \\
-2
\end{pmatrix}, \quad (t \in \mathbb{R}) $$

b) Déterminer une équation cartésienne de (S)  
On a (S) la sphère de centre \( \Omega(-3; 0; 1) \) et de rayon \( 2\sqrt{2} \) donc :  
Soit \( M(x; y; z) \in (S) \)

$$ D(S): (x + 3)^2 + (y - 0)^2 + (z - 1)^2 = (2\sqrt{2})^2 $$  
Donc \( D(S): (x + 3)^2 + y^2 + (z - 1)^2 = 8 \)
```

<!-- Page 247 -->

```markdown
### Prof : fayssal
### Site web : www.elboutkhili.jimdofree.com

#### Corrigée de série : Géométrie dans l’espace 2B Page 05

c) Montrer que la droite $(\Delta)$ est tangente à la sphère $(S)$ puis déterminer les coordonnées de point de contact  
Soit $(x; y; z)$ les coordonnées de $K$ l'intersection de $(S)$ et $(\Delta)$  
Donc $(x; y; z)$ vérifie :  
$$
\begin{cases}
x = 1 + 2t \\
y = 0 \\
z = 1 - 2t \\
(t \in \mathbb{R})
\end{cases}
$$
Donc $(S): (x+3)^{2} + y^{2} + (z-1)^{2} = 8$  
Donc $(4 + 2t)^{2} + 0^{2} + (1 - 2t - 1)^{2} = 8$  
Donc $16 + 16t + 4t^{2} + 0 - 0 = 0$  
Donc $8 + 16t + 16t^{2} = 0 \implies 8(t + 2t + 1) = 0$  
Donc $(t + 1)^{2} = 0 \implies t = -1$  
Donc la droite $(\Delta)$ est tangente à la sphère $(S)$ en un point $K$  

On remplace $t = -1$ dans :
$$
\begin{cases}
x = 1 + 2t \\
y = 0 \\
z = 1 - 2t
\end{cases}
$$  
Donc :  
$$
\begin{cases}
x = 1 - 2 = -1 \\
y = 0 \\
z = 1 + 2 = 3
\end{cases}
$$  
Donc $K(-1; 0; 3)$  

---

### Exercice 04
On considère les points $A(3;-2;2)$, $B(-1; 6; 4)$ et $C(5; 4; 4)$ et $(S)$ la sphère de diamètre $[AB]$  
1) Vérifier que le triangle $ABC$ est rectangle en $C$ puis en déduire que $C$ appartient à $(S)$  
On a $CA \left( \begin{pmatrix} -2 \\ -6 \\ 2 \end{pmatrix} \right)$ et $CB \left( \begin{pmatrix} -6 \\ 2 \\ 0 \end{pmatrix} \right)$, donc  
$$
CA.CB = \left( \begin{pmatrix} -2 \\ -6 \\ 2 \end{pmatrix} \right) \cdot \left( \begin{pmatrix} -6 \\ 2 \\ 0 \end{pmatrix} \right) = -12 + 12 + 0 = 0
$$  
Donc $CA$ et $CB$ sont orthogonaux  
Donc le triangle $ABC$ est rectangle en $C$  

On a $CA.CB = 0$ et on sait que l'ensemble des point $M$ tel que  
$$
MA.MB = 0 \text{ et la sphère de diamètre $[AB]$}
$$  
D'où $C$ appartient à $(S)$  
2) Montrer que l'équation de sphère $(S)$ est :  
$$(x - 1)^{2} + (y - 2)^{2} + (z - 3)^{2} = 21$$  
Soit $M(x; y; z) \in (S)$  
$$
M(x; y; z) \in (C) \iff AM.BM = 0
$$  
$$
\begin{cases}
x - 3 \\
y - 2 \\
z - 4
\end{cases}
$$  
Soit $(A)$ la droite passante par le point $D(4; 3; 2)$ et de vecteur directeur $(1; 1; 3)$  
a) Montrer que $d(\Omega; (\Delta)) = \sqrt{11}$ où $e$ est le centre de $(S)$
```

<!-- Page 248 -->

```markdown
Prof : fayssal  
Site web : www.elboutkhili.jimdofree.com  

Corrigée de série : Géométrie dans l’espace 2B Page 06    

$$ (x - 1)^2 - 1 + (y - 2)^2 - 4 + (z - 3)^2 - 9 = -7 $$  
$$ (x - 1)^2 + (y - 2)^2 + (z - 3)^2 = 21 $$  

3) Déterminer une équation du plan (P) tangente à (S) au point C  
On a (S): $$ (x - 1)^2 + (y - 2)^2 + (z - 3)^2 = 21 $$  
Donc (S) est une sphère de centre $\Omega(1; 2 ; 3)$ et de rayon $R = \sqrt{21}$  

Le vecteur $\Omega(4 - 2) = \begin{pmatrix} 2 \\ 1 \\ 2 \end{pmatrix}$ est normal au plan (P)  

Comme $\Omega(4 - 2) = \begin{pmatrix} 2 \\ 1 \\ 2 \end{pmatrix}$ est un vecteur normal au (P), une  
équation cartésienne de (P) est de la forme $4x + 2y + z + d = 0$  
Le point C(5; 4; 4) appartient au plan, donc :  
$$ 4 \times (5) + 2 \times (4) + (4) + d = 0 \text{ et donc : } d = -32. $$  
D’où : $4x + 2y + z - 32 = 0$  

4) Soit (A) la droite passant par le point D(4; 3; 2) et de vecteur directeur $\mathbf{u} = \begin{pmatrix} 1 \\ 0 \\ 3 \end{pmatrix}$  
a) Montrer que $d(\Omega ; (A)) = \sqrt{11}$ où $ \Omega $ est le centre de (S)  
$$ \Omega D \land \mathbf{u} = \begin{pmatrix} \frac{(3 - 1)}{-1} \\ \frac{(0 - 3)}{1} \\ \frac{(1 - 3)}{3} \end{pmatrix} = \begin{pmatrix} 2 \\ -3 \\ -2 \end{pmatrix} $$  
$$ \Rightarrow d(\Omega ; (A)) = \frac{|\mathbf{u} \land \mathbf{D}|}{||\mathbf{u}||} = \frac{\sqrt{3^2 + (-10)^2 + (-1)^2}}{\sqrt{1^2 + 0^2 + 3^2}} = \sqrt{110} $$  
Et on a : $||\mathbf{u}|| = \sqrt{1^2 + 0^2 + 3^2} = \sqrt{10}$  
Donc :  
$$ d(\Omega ; (A)) = \frac{|| \Omega D \land \mathbf{u} ||}{||\mathbf{u}||} = \sqrt{\frac{110}{10}} = \sqrt{11} $$  

b) Déterminer les coordonnées des points d’intersections de la droite (A) et la sphère (S) s’il existe  
On a :  
$$ d(\Omega ; (A)) = \sqrt{11} < \sqrt{21} $$  

5) Soit le plan (Q): $x - 4y + 2z + d = 0$  
Trouver les valeurs de d pour que (Q) soit tangente à (S)  
On a (Q) soit tangente à (S) donc $d(\Omega ; (P)) = R = \sqrt{21}$  
$$ \frac{ |1 - 8 + 6 + d|}{\sqrt{12 + (-4)^2 + 2^2}} = \sqrt{21} $$  
Donc : $d - 1 = 21$ ou $d - 1 = -21$  
Donc : $d = 22$ ou $d = -20$  
```

<!-- Page 249 -->

```markdown
# Deuxièmes bac sciences
## PC/SVT/ST

### Résumé : Calcul de probabilités
#### Deuxièmes bac sciences PC/SVT/ST

- Cours détaillé
- Résumé de cours
- Série corrigée

admin  
Prof fayssal  
06813999067  
www.elbouthkili.jimdo.free.com
```

<!-- Page 250 -->

```markdown
# Prof: Fayssal  
**Site web :** www.elboutkhili.jimdofree.com  
## Résumé de cours : Probabilités  
### 2BAC-SC | Page 01  

### A) Dénombrement  
1) **Cardinal d’un ensemble fini**  
Soit $E$ un ensemble fini de $n$ éléments distincts $E = \{x_1, x_2, \ldots, x_n\}$  
Le nombre d’éléments $n$ est appelé le cardinal de $E$, noté $Card(E)$  

2) **Principe fondamental de dénombrement**  
Soit $E$ une expérience dont les résultats nécessitent $k$ choix.  
Si le premier choix se fait de $n_1$ façons différentes  
Le deuxième choix se fait de $n_2$ façons différentes, ...  
......  
Le $k^{ième}$ choix se fait de $n_k$ façons différentes,  
Alors le nombre de résultats possibles est donné par le produit :  
$$ n_1 \times n_2 \times \ldots \times n_k $$  

3) **Arrangements**  
a) **Arrangements sans répétition.**  
Soient $n$ et $p$ deux entiers naturels non nuls.  
✓ Le nombre d’arrangements sans répétition de $p$ éléments pris parmi $n$ est noté $A_n^p$, et on a :  
$$ A_n^p = n(n - 1)(n - 2) \cdots (n - p + 1) $$  
**Remarques :** On pose par convention $0! = 1$.  
✓ Soient $n$ et $p$ deux entiers naturels non nuls tels que : $p \leq n$,  
On a :  
$$ A_n^p = \frac{n!}{(n - p)!} ; \quad A_n^n = n! ; \quad A_n^1 = n. $$  

**Cas particulier : Permutations.**  
Soit $n$ un entier naturel non nul.  
✓ Tout arrangement sans répétition de $n$ éléments est appelé permutation de $n$ éléments.  
✓ Le nombre de permutations de $n$ éléments est noté $n!$, se lit factoriellement, et on a : $n! = n(n - 1) \times 2 \times 1.$  

b) **Arrangements avec répétition.**  
Le nombre d’arrangements avec répétition de $p$ éléments pris parmi $n$ est $n^p$  

### 4) Combinaisons.  
Soit $n$ un entier naturel, et soit $E$ un ensemble de cardinal $n$.  
✓ Le nombre de combinaison de $p$ éléments de $E$ pris parmi $n$ éléments est noté $C_n^p$, et on a :  
$$ C_n^p = \frac{A_n^p}{p!} = \frac{n!}{p!(n - p)!} $$  
**Remarques :**  
$$ C_1 = C_n^{n - 1} = n ; \quad C_n^0 = 1 \text{ et } C_p^n = C_n^{-p} $$  

5) **Type de tirage et importance d’ordre.**  
| Type de tirage | Nombre de tirages possibles | Importance de l’ordre |
|----------------|-----------------------------|-----------------------|
| Avec remise    | $n^p$                       | Important             |
| Sans remise    | $A_n^p$                     | Important             |
| Simultané      | $C_p^n$                     | Sans importance       |

**Nombre de possibilité d’arranger $p$ éléments (Coefficient d’ordre)**  
Si on a $p_1$ éléments de type $A$ et $p_2$ éléments de type $B$ et $p_3$ éléments de type $C$ tel que $p_1 + p_2 + p_3 = p$  
Alors le nombre de possibilité d’arranger les $p$ éléments est :  
$$ \frac{p!}{p_1! \times p_2! \times p_3!} $$  

### B) Probabilité d’un évènement.  
1) **Propriétés :** Soit $\Omega$ l’univers d’une expérience aléatoire, on a :  
➢ $P(\Omega) = 1$ et $P(\emptyset) = 0$.  
➢ Pour tout évènement $A \in \Omega$, on a : $0 \leq P(A) \leq 1$  
➢ Pour tout évènement $A \in \Omega$, on a :  
$$ P(A \cup B) = P(A) + P(B) - P(A \cap B) $$  
➢ Si $A$ et $B$ deux évènements incompatibles de $\Omega$ ; $(A \cap B = \emptyset)$, alors :  
$$ P(A \cup B) = P(A) + P(B) $$  

2) **Hypothèse d’équiprobabilité.**  
Soit $\Omega$ l’univers d’une expérience aléatoire, la probabilité de l’évènement $A \subset \Omega$ est :  
$$ P(A) = \frac{Card(A)}{Card(\Omega)} $$
```

<!-- Page 251 -->

```markdown
### 3) Probabilité conditionnelle.
Soient A et B deux événements associés à une même expérience aléatoire tes que : $ P(A) \neq 0 $.
La probabilité de l'événement B sachant que l'événement A est réalisé est noté $ P_{A}(B) $ ou $ P(B | A) $ défini par : 
$$ P_{A}(B) = \frac{P(A \cap B)}{P(A)} $$

Remarques : On a : $ P(B) = P(B \cap A) + P(B \cap A^{C}) $  
Donc $ P(B) = P(A) \times P_{A}(B) + P(A^{C}) \times P_{A^{C}}(B) $  
Cette relation est appelée lois des probabilités totales.

### 4) Indépendance de deux événements.
Soient A et B deux événements associés à une même expérience.  
On dit que les événements A et B sont indépendants si  
$$ P(A \cap B) = P(A) \times P(B). $$

> Les événements A et B sont indépendants si et seulement  
$ P_{A}(B) = P(B) ; \quad avec \, P(A) \neq 0 $.

### 5) Épreuves répétées.
Soit A un événement associé à une expérience de probabilité p.  
On répète l’expérience n fois dans les mêmes conditions.  
Alors la probabilité de réaliser exactement k fois l’événement A est :  
$$ C_{n}^{k} p^{k} (1 - p)^{n - k} $$, pour tout k ∈ {0, 1, 2, …, n}  

### C) Variable aléatoire - Loi de probabilité d’une variable aléatoire.

1) Définitions :  
Toute fonction définie sur l’univers $ \Omega $ à valeur dans $ \mathbb{R} $ est appelée variable aléatoire, notée $ X $ ou $ Z $...  
Les valeurs prises par la variable aléatoire $ X $ notées $ \Omega(X) $.

Soit $ X $ une variable aléatoire définie sur un univers $\Omega $ associé à une expérience aléatoire telle que :  
$$ X(\Omega) = \{x_{1}, x_{2}, …, x_{n}\}. $$  
Déterminer la loi de probabilité de la variable aléatoire $ X $,  
C'est calculer la probabilité de chacun des événements $ \{X = x_{j} \} $ avec $ j ∈ {1, 2, …, n} $.

On résume la loi de probabilité de $ X $ par le tableau suivant :  
$$
\begin{array}{|c|c|c|c|c|c|}
\hline
x_{i} & x_{1} & x_{2} & \ldots & x_{n} \\
\hline
p_{1} & p_{2} & \ldots & p_{n} \\
\hline
\end{array}
$$

### 2) Espérance mathématique - Variance et écart-type.
Soit $ X $ une variable aléatoire définie sur un univers $ \Omega $ associé  
L’espérance mathématique de la variable aléatoire $ X $ est le nombre réel noté $ E(X) $ définit par :  
$$ E(X) = \sum_{i=1}^{n} x_{i} p_{i} = x_{1}p_{1} + x_{2}p_{2} + … + x_{n}p_{n}. $$

✓ La variance de la variable aléatoire $ X $ est le nombre réel noté  
$$ V(X) définit par : V(X) = E(X^{2}) - (E(X))^{2} $$  
Avec $ E(X^{2}) = \sum_{i=1}^{n} x_{i}^{2} p_{i} = x_{1}^{2} p_{1} + x_{2}^{2} p_{2} + … + x_{n}^{2} p_{n}. $$  

✓ L'écart-type de $ X $ est :  
$$ \sigma(X) = \sqrt{V(X)} $$  

### 3) Loi binomiale.
Soit une expérience aléatoire formée d’une répétition n fois de manières indépendantes d’une même épreuve à deux issues sont :  
À succès de probabilité $ p $, et à échec de probabilité $ q = 1 - p $.  
Soit $ X $ la variable aléatoire égale au nombre de fois que le succès se réalise au cours de cette expérience.  
On dit que la variable aléatoire $ X $ suit la loi binomiale de paramètres n et p, notée $ X \sim B(n, p) $.

La loi de probabilité de la variable aléatoire $ X $ est appelée loi binomiale de paramètres n et p.

**Propriété.**  
Soit $ X $ une variable aléatoire suit une loi binomiale de paramètres n et p, on a :  
- Les valeurs prises par la variable aléatoire $ X $ sont : {$0, 1, 2, …, n$}  
- Pour k ∈ {0, 1, 2, …, n} : $ P(X = k) = C_{n}^{k} p^{k} (1 - p)^{n - k} $.  
- L’espérance de la variable aléatoire $ X $ est : $ E(X) = np $.  
- La variance de la variable aléatoire $ X $ est : $ V(X) = npq = np(1 - p) = E(X)(1 - p) $.  
- L’écart-type de $ X $ est : $$ \sigma(X) = \sqrt{V(X)} = \sqrt{np(1 - p)} $$
```

<!-- Page 252 -->

```markdown
# Deuxièmes bac sciences
## PC/SVT/ST

### Série corrigée : Calcul de probabilités
#### Deuxièmes bac sciences PC/SVT/ST

- Cours détaillé
- Résumé de cours
- Série corrigée

admin  
Prof fayssal  
06813999067  
www.elboutkhili.jimdo.com
```

<!-- Page 253 -->

```markdown
# Série : Calcul de probabilités 2BAC-SC Page 01

## Exercice 01
Un sac contient 9 boules : 4 boules jaunes numérotées 1,1,1,2  
Trois boules rouges numérotées 1,1, et 2  
Deux boules vertes numérotées 1,2.  
Les boules sont indiscernables au toucher.  
On tire au hasard simultanément trois boules du sac.  
1) Déterminer le nombre de résultats possibles.  
2) Déterminer la probabilité de chacun des événements :  
   A : « Obtenir 3 boules jaunes ».  
   B : « Obtenir 1 boule de chaque couleur ».  
   C : « Obtenir 3 boules de même couleur ».  
   D : « Obtenir 3 boules qui portent le même numéro ».  
   E : « Obtenir une boule exactement verte ».  
   F : « Obtenir un moins une boule verte ».  
3) Calculer $p(C \cap D)$ et $p(C \cup D)$  

## Exercice 02
Une urne contient 10 boules : 3 jaunes, 2 vertes et 5 rouges.  
Les boules sont indiscernables au toucher.  
On tire au hasard successivement et sans remise 3 boules de l'urne.  
1) Déterminer le nombre de tirages  
2) Déterminer la probabilité de chacun des événements suivants :  
   A : « Obtenir 3 boules rouges »  
   B : « Obtenir 3 boules jaunes ».  
   C : « Obtenir 3 boules de même couleur ».  
   D : « Obtenir 2 boules jaunes et 1 boule verte ».  
   E : « Obtenir 1 boule de chaque couleur ».  
   F : « Obtenir au moins 1 boule jaune ».  
   G : « Obtenir exactement 2 couleurs ».  
3) On tire au hasard successivement et avec remise 3 boules de l’urne, déterminer la probabilité des événements précédentes  

## Exercice 03
On lance un dé à 6 faces puis une pièce de monnaie  
Considérons les deux événements suivants  
A : « La pièce a donné face » et B : « Le dé a donné 3 ou 5 »  
1) Calculer $p(A)$ ; $p(B)$ et $P(A \cap B)$ et $P_b(A)$  
2) Les événements A et B sont-ils indépendants ?  

## Exercice 04
Un sac contient 11 boules : 5 blanches numérotées 1,1,1,0,0 ;  
Quatre rouges numérotées 1,1,0,0 et 2 vertes numérotées 1,0.  
Toutes les boules sont indiscernables au toucher.  
On tire au hasard successivement et sans remise 3 boules du sac.  
1) Déterminer la probabilité de chacun des événements :  
   A : « Obtenir 3 boules de même couleur ».  
   B : « Obtenir 3 boules qui portent le même numéro ».  
   C : « Obtenir 1 boule de chaque couleur ».  
2) Calculer la probabilité d’obtenir 3 boules qui portent le même numéro sachant qu’elles sont de mêmes couleurs  

## Exercice 05
On lance un dé à 6 faces , et considérons les événements suivants :  
A : « Le dé a donné 3 ou 5 »  
1) Calculer $p(A)$  
2) On répète cette expérience 5 fois de suite  
3) Quelle est la probabilité que l’événement A soit réalisé trois fois exactement ?  

## Exercice 06
On lance 3 fois de suite une pièce de monnaie.  
Soit $X$ la variable aléatoire égale au nombre de fois dont le côté F apparaît.  
1) Déterminons les valeurs prise par la variable aléatoire $X$ :  
2) Calculer l’espérance mathématique $E(X)$ et la variance $V(X)$ puis l’écart type $\sigma(X)$.
```

<!-- Page 254 -->

```markdown
# Prof : Fayçal   
Site web : www.elboutkhili.jimdofree.com  
Série : Calcul de probabilités  
2BAC-SC  
Page 02  

## Exercice 07  
On lance simultanément deux dés à 6 faces  
Soit $X$ la variable aléatoire égale à la plus grande des deux valeurs.  
1) Établir la loi de probabilité de $X$.  
2) Calculer l’espérance mathématique $E(X)$ et la variance $V(X)$ puis l'écart type $\sigma(X)$.  

## Exercice 08  
Un sac contient 6 jetons indistinguables au toucher et numérotés : 1 ; 1 ; 1 ; 0 ; 2.  
On tire au hasard, successivement et sans remise 3 jetons du sac.  
On considère les événements suivants :  
A : « La somme des numéros obtenus est égale à 3 »  
B : « Le premier jeton tiré porte le numéro 2 »  
a) Montrer que : $P(A) = \frac{1}{5}$ et $P(B) = \frac{1}{6}$  
b) Calculer $P_B(A)$. Les événements $A$ et $B$ sont-ils indépendants ?  
2) Soit $X$ la variable aléatoire associée à la somme des numéros portés par les trois jetons tirés.  
a) Déterminer la loi de probabilité de la variable $X$.  
b) Calculer $E(X)$ et la variance $V(X)$ puis l’écart type $\sigma(X)$.  

## Exercice 09  
Une urne contient 10 boules portant les numéros : 1 ; 2 ; 2 ; 3 ; 3 ; 4 ; 4 ; 4 ; 4. Ces boules sont indistinguables au toucher.  
On tire successivement et sans remise 2 boules de l’urne.  
1) Soit $A$ : « Obtenir deux boules portant des numéros pairs », montrer que : $P(A) = \frac{1}{3}$  
2) On répète l’expérience précédente trois fois de suite en remettant chaque fois les deux boules tirées dans l’urne.  
Soit $X$ la variable aléatoire égal à nombre de réalisation de l’événement $A$.  
a) Montrer que : $P(X = 1) = \frac{4}{9}$  
b) Déterminer la loi de probabilité de $X$.  
c) Calculer $E(X)$ et la variance $V(X)$ puis l’écart type $\sigma(X)$.  

## Exercice 10  
Un sac $S_1$ contient 4 boules rouges et 2 boules noires.  
Un sac $S_2$ contient 2 boules rouges et une boule noire.  
Toutes les boules sont indistinguables au toucher.  
On choisit au hasard l’un des sacs, puis on tire une boule de ce sac.  
On considère les événements :  
1) Calculer la probabilité de choisir le sac $S_1$ et obtenir une boule rouge.  
2) Calculer la probabilité d’obtenir une boule rouge.  
3) En déduire la probabilité d’obtenir une boule noire.  
4) Sachant que la boule tirée est noire, quelle est la probabilité qu’elle soit tirée du sac $S_1$ ?  

## Exercice 11  
Un sac contient : 5 boules rouges numérotées : 0 ; 1 ; 1 ; 1 ; 2 ; et 4 boules vertes numérotées : 0 ; 1 ; 1 ; 2.  
On tire simultanément 3 boules de ce sac.  
1) On considère les événements suivants :  
A : « Obtenir 3 boules portant des numéros pairs »  
B : « Obtenir 3 boules dont la somme des numéros est égale à 3 »  
C : « Obtenir 3 boules vertes »  
a) Montrer que : $P(A) = \frac{1}{21}$ et $P(B) = \frac{5}{14}$  
b) Montrer que : $P(B \cap C) = \frac{1}{42}$ et en déduire que $P_B(C) = \frac{1}{15}$  
Soit $X$ la variable aléatoire qui, à chaque tirage, associe le produit des numéros obtenus.  
a) Justifier que $X(\Omega) = \{0 ; 1 ; 2 ; 4\}$.  
b) Montrer que : $P(X = 0) = \frac{7}{12}$  
c) Calculer $P(X = 1)$, puis déterminer la loi de probabilité $X$.  
```

<!-- Page 255 -->

```markdown
# Prof: Fayssal
Site web : www.elboutkhili.jimdofree.com

## Exercise 01
Un sac contient 9 boules : 4 boules jaunes numérotées 1,1,1,2  
Trois boules rouges numérotées 1,1 et 2  
Deux boules vertes numérotées 1,2.  
Les boules sont indiscernables au toucher.  
On tire au hasard simultanément trois boules du sac.

1) Déterminer le nombre de résultats possibles.  
2) Déterminer la probabilité de chacun des événements :  
   A « Obtenir 3 boules jaunes ».  
   B « Obtenir 1 boule de chaque couleur ».  
   C : « Obtenir 3 boules de même couleur ».  
   D : « Obtenir 3 boules qui portent le même numéro ».  
   E : « Obtenir une boule exactement verte ».  
   F : « Obtenir un moins une boule verte ».  
6) Calculer $p(C \cap D)$ et $p(C \cup D)$  

## Solution

1) Déterminer le nombre de résultats possibles.  
L’univers $\Omega$ associé à cette expérience aléatoire est l’ensemble des combinaisons de trois boules parmi neuf boules contenues dans le sac.  
Donc le nombre des possibilités est $Card(\Omega) = {C^3_9} = 84$  

2) Déterminer la probabilité de chacun des événements :  
A « Obtenir 3 boules jaunes ».  
L’événement A est réalisé lorsqu’on tire trois boules jaunes $(J ; J ; J)$  
Donc $Card(A) = {C^4_3} = 4$  
Par suite $p(A) = \frac{Card(A)}{Card(\Omega)} = \frac{4}{84}$  

B « Obtenir 1 boule de chaque couleur ».  
L’événement B est réalisé lorsqu’on tire 1 boule jaune et 1 boule rouge et une boule verte $(J ; R ; V)$  
Donc $Card(B) = {C^1_4} \times {C^3_3} \times {C^2_1} = 24$  
Par suite $p(B) = \frac{Card(B)}{Card(\Omega)} = \frac{24}{84}$  

C : « Obtenir 3 boules de même couleur ».  
L’événement C est réalisé lors tire trois boules jaunes ou trois boules rouges $(J ; J ; J)$ ou $(R ; R ; R)$  
Donc $Card(C) = {C^3_4} + {C^3_3} = 5$  
Par suite $p(A) = \frac{Card(A)}{Card(\Omega)} = \frac{5}{84}$  

D : « Obtenir 3 boules qui portent le même numéro ».  
L’événement D est réalisé lorsqu’on tire trois boules qui portent le numéro 1 ou trois boules qui portent le numéro 2  
$(1 ; 1 ; 1)$ ou $(2 ; 2 ; 2)$,  
Donc $Card(D) = {C^3_3} + {C^3_3} = 6 \times 5 \times 4 \div 6 + 1 = 21$  
Par suite $p(D) = \frac{Card(D)}{Card(\Omega)} = \frac{21}{84} = \frac{1}{4}$  

E : « Obtenir une boule exactement verte ».  
L’événement E est réalisé lorsqu’on tire une boule verte et deux boules non vertes $(V ; \bar{V} ; \bar{V})$  
Donc $Card(E) = {C^2_1} \times {C^2_2} = 42$  
Par suite $p(E) = \frac{Card(E)}{Card(\Omega)} = \frac{42}{84} = \frac{1}{2}$  
```

<!-- Page 256 -->

```markdown
# Prof : Fayssal 
Site web : www.elboutkhili.jimdo.com 

## Correction de série : Probabilités 
2BAC-SC Page 02

### F : « Obtenir un moins une boule verte ».

L'événement contraire de F est : 
$$ \overline{F} : \text{Aucune boule tirée n’est verte} $$
Donc $ \text{Card}(\overline{F}) = {C^3_7} = 35 $

Par suite : $ p(F) = \frac{\text{Card}(F)}{\text{Card}(\Omega)} = \frac{35}{84} = \frac{5}{12} $

Enfin : $ p(F) = 1 - p(\overline{F}) = 1 - \frac{5}{12} = \frac{7}{12} $

3) Calculer $p(C \cap D)$ et $p(D \cup D)$

L'événement $C \cap D$ est réalisé lorsqu'on tire trois boules jaunes qui portent le numéro 1,
Donc $ \text{Card}(C \cap D) = {C^3_1} = 1 $

Par suite :
$$ p(C \cap D) = \frac{\text{Card}(C \cap D)}{\text{Card}(\Omega)} = \frac{1}{84} $$

Calculer $p(C \cup D)$,
On sait que $p(C \cup D) = p(C) + p(D) - p(C \cap D)$
Donc 
$$ p(C \cup D) = \frac{5}{84} + \frac{21}{84} - \frac{1}{84} = \frac{25}{84} $$

---

### Exercice 02

Une urne contient 10 boules : 3 jaunes, 2 vertes et 5 rouges.
Les boules sont indiscernables au toucher.

On tire au hasard successivement et sans remise 3 boules de l’urne.
4) Déterminer le nombre de tirages possibles.
5) Déterminer la probabilité de chacun des événements :
- A « Obtenir 3 boules rouges ».
- B « Obtenir 3 boules jaunes » ;
- C « obtenir 3 boules de même couleur» (J ; J ; J) ou (R ; R ; R)

Donc $ \text{Card}(A) = {C^3_3} = 60 $

Par suite  $ p(A) = \frac{\text{Card}(A)}{\text{Card}(\Omega)}$
B « Obtenir 3 boules jaunes » ; 
$$ \text{Card}(B) = {C^3_3} = 6 $$
Par suite $p(B) = \frac{\text{Card}(B)}{\text{Card}(\Omega)} = \frac{6}{720} = \frac{1}{120} $

C « obtenir 3 boules de même couleur» (J ; J ; J) ou (R ; R ; R)

Donc $ p(C) = \frac{\text{Card}(C)}{\text{Card}(\Omega)} = \frac{{C^3_3}+{C^3_5}}{720} = \frac{66}{720} = \frac{11}{120} $
```

<!-- Page 257 -->

```markdown
# Prof : Fayssal
## Site web : www.elboutkhili.jimdofree.com
## Correction de série : Probabilités
### 2BAC-SC  Page 03

D « obtenir 2 boules jaunes et 1 boule verte ». (J ; J ; V)

Le coefficient d'ordre est $ \frac{3!}{2! \times 1!} = 3 $

Donc $ \text{Card}(D) = \frac{3!}{2! \times 1!} (A_3^2 \times A_2^1) = 36 $

Par suite $ p(D) = \frac{\text{Card}(D)}{\text{Card}(\Omega)} = \frac{36}{720} = \frac{1}{20} $

E « obtenir 1 boule de chaque couleur ». (J ; R ; V)

Le coefficient d'ordre est $ \frac{3!}{1! \times 1! \times 1!} = 6 $

Donc $ \text{Card}(E) = 6 (A_3^1 \times A_2^1 \times A_1^1) = 180 $

Par suite $ p(E) = \frac{\text{Card}(E)}{\text{Card}(\Omega)} = \frac{180}{720} = \frac{1}{4} $

F « obtenir au moins 1 boule jaune ».

L'événement complémentaire de E est :

$ \bar{F} « Aucune boule tirée n’est jaune », $ donc $ \text{Card}(F) = A_3^7 = 210 $

Par suite $ p(F) = \frac{\text{Card}(F)}{\text{Card}(\Omega)} = \frac{210}{720} = \frac{7}{24} $

Donc $ p(F) = 1 - p(\bar{F}) = 1 - \frac{7}{24} = \frac{17}{24} $

G « obtenir exactement 2 couleurs. ».

L'événement contraire de G est :

$ \bar{G} « Obtenir un couleur ou obtenir 3 couleurs » , $

Donc $ P(G) = P(C \cup E) = \frac{11}{120} + \frac{41}{120} = \frac{52}{120} $

Donc $ p(G) = 1 - p(\bar{G}) = 1 - \frac{79}{120} = \frac{41}{120} $

3) On tire au hasard successivement et avec remise 3 boules de l’une.
Déterminer la probabilité des événements précédentes.
```

<!-- Page 258 -->

```markdown
## Exercice 03

On lance un dé à 6 faces puis une pièce de monnaie  
Considérons les deux événements suivants  
A " La pièce a donné face " et B " Le dé a donné 3 ou 5 "

3) Calculer $p(A)$ ; $p(B)$ et $P(A \cap B)$ et $P_A(B)$ et $P_B(A)$  
4) Les événements A et B sont-ils indépendants ?

### Solution

1) $Card(\Omega) = 6 \times 2 = 12$  
   Donc $P(A) = \frac{Card(A)}{Card(\Omega)} = \frac{6}{12} = \frac{1}{2}$  

   $P(B) = \frac{Card(B)}{Card(\Omega)} = \frac{2 + 2}{12} = \frac{4}{12} = \frac{1}{3}$  

   $P(A \cap B) = \frac{Card(A \cap B)}{Card(\Omega)} = \frac{2}{12} = \frac{1}{6}$  

   $P_A(B) = \frac{p(A \cap B)}{p(A)} = \frac{\frac{1}{6}}{\frac{1}{2}} = \frac{1}{3}$ et $P_B(A) = \frac{p(A \cap B)}{p(B)} = \frac{\frac{1}{6}}{\frac{1}{3}} = \frac{1}{2}$  

23) Les événements A et B sont-ils indépendants ?  
On a : $P_A(B) = \frac{1}{3}$ et $P(B) = \frac{1}{3}$ Donc $P_A(B) = P(B)$.  
Donc Les événements A et B sont indépendants

## Exercice 04

Un sac contient 11 boules : 5 blanches numérotées 1,1,1,0,0 ; 4 rouges numérotées 1,1,0,0 et 2 vertes numérotées 1,0.  
Toutes les boules sont indiscernables au toucher.

On tire au hasard successivement et sans remise 3 boules du sac.

3) Déterminer la probabilité de chacun des événements :  
A " obtenir 3 boules de même couleur ".  
B " obtenir 3 boules qui portent le même numéro ".  
C " obtenir 1 boule de chaque couleur ".

4) Calculer la probabilité d'obtenir 3 boules qui portent le même numéro sachant qu'elles sont de même couleur.

### Solution

1) Déterminer la probabilité de chacun des événements :  
A " obtenir 3 boules de même couleur ". ($B ; B ; B$) ou ($R ; R ; R$)  

Le nombre des possibilités est $Card(\Omega) = A_{13}^3 = 990$  
Donc $p(A) = \frac{Card(A)}{Card(\Omega)} = \frac{A_4^3 + A_5^3 + 60}{990} = \frac{24 + 60}{990} = \frac{84}{990}$  

B " 3 boules qui portent le même numéro. " (1 ; 1 ; 1) ou (0 ; 0 ; 0)  
$p(B) = \frac{Card(B)}{Card(\Omega)} = \frac{A_3^2 + A_3^3}{990} = \frac{120 + 60}{990} = \frac{180}{990} = \frac{2}{11}$  

C " obtenir 1 boule de chaque couleur ". ($J ; R ; V$)  
$p(C) = \frac{Card(C)}{Card(\Omega)} = \frac{6(A_4^1 \times A_5^1 \times A_2^1)}{990} = \frac{240}{990}$  

2) Calculer la probabilité d'obtenir 3 boules qui portent le même numéro sachant qu'elles sont de même couleur.  
$P_A(B) = \frac{p(A \cap B)}{p(A)} = \frac{\frac{A_3^3}{990}}{\frac{84}{990}} = \frac{3}{84} = \frac{1}{28}$  

## Exercice 05

On lance un dé à 6 faces  
Considérons les événements suivant : A " Le dé a donné 3 ou 5 "  
1) Calculer $p(A)$  

### Solution

1) Calculer $p(A)$ ; On a : $P(A) = \frac{Card(A)}{Card(\Omega)} = \frac{2}{6} = \frac{1}{3}$  
$p(A) = C_3^2(\frac{1}{3})^2 (1 - \frac{1}{3})^5 = 5! \cdot \frac{1}{2!} 3^2 = C_3^2 \cdot (\frac{1}{3})^2 \cdot (1 - \frac{1}{3})^5$
```

<!-- Page 259 -->

```markdown
## Exercices 06

On lance 3 fois de suite une pièce de monnaie.  
Soit $X$ la variable aléatoire égale au nombre de fois dont le côté $F$ apparaît.  
4) Déterminons les valeurs prise par la variable aléatoire $X$:  
5) Déterminons la loi de probabilité de variable aléatoire $X$.  
6) Calculer l’espérance mathématique $E(X)$ et la variance $V(X)$ puis l’écart type $\sigma(X)$.

### Solution

On lance 3 fois de suite une pièce de monnaie.  
Soit $X$ la variable aléatoire égale au nombre de fois dont le côté $F$ apparaît.  
1) Déterminons les valeurs prise par la variable aléatoire $X$:  
- $(X = 0) : Obtenir le côté P 3 fois.  
- $(X = 1) : Obtenir le côté F 1 seule fois.  
- $(X = 2) : Obtenir le côté F 2 fois.  
- $(X = 3) : Obtenir le côté F 3 fois.  

D'où $\Omega = \{0; 1; 2; 3\}$.  
2) Déterminons la loi de probabilité de variable aléatoire $X$.  
On a : $Card(\Omega) = 2^3 = 8.$  
- $P(X = 0) = \frac{1}{8} = \frac{1}{2^3}$  
- $P(X = 1) = \frac{3!}{1!2!} \times \frac{1}{8} = \frac{3}{8}$  
- $P(X = 2) = \frac{3!}{2!1!} \times \frac{1}{8} = \frac{3}{8}$  
- $P(X = 3) = \frac{1}{8} = \frac{1}{2^3}$  

D’où le tableau de la loi de probabilité de variable aléatoire $X$.

| $x_i$ | 0 | 1 | 2 | 3 |
|-------|---|---|---|---|
| $P(X = x_i)$ | $\frac{1}{8}$ | $\frac{3}{8}$ | $\frac{3}{8}$ | $\frac{1}{8}$ |

3) Calculer l’espérance mathématique $E(X)$ et la variance $V(X)$ puis l’écart type $\sigma(X)$.

$$ E(X) = \sum_{i=1}^{4} x_i P_i = x_1 P_1 + x_2 P_2 + \ldots + x_n P_n $$
$$ = 0 \times \frac{1}{8} + 1 \times \frac{3}{8} + 2 \times \frac{3}{8} + 3 \times \frac{1}{8} $$  
$$ = \frac{12}{8} = \frac{3}{2} $$

On a :  
$$ E(X^2) = \sum_{i=1}^{6} x_i^2 P_i = x_1^2 P_1 + x_2^2 P_2 + \ldots + x_n^2 P_n $$  
$$ E(X^2) = 0^2 \times \frac{1}{8} + 1^2 \times \frac{3}{8} + 2^2 \times \frac{3}{8} + 3^2 \times \frac{1}{8} = \frac{19}{8} $$

Donc  
$$ V(X) = E(X^2) - (E(X))^2 $$  
$$ = \frac{19}{8} - \left(\frac{3}{2}\right)^2 $$  
$$ = \frac{19}{8} - \frac{9}{4} $$  
$$ = \frac{1}{8} $$

✓ L’écart-type de la variable aléatoire $X$  
$$ \sigma(X) = \sqrt{V(X)} = \sqrt{\frac{1}{8}} $$ 
```

<!-- Page 260 -->

```markdown
# Prof : Fayçal
**Site web : www.elboutkhili.jimdofree.com**

## Exercice 07

On lance simultanément deux dés à 6 faces et on note les valeurs obtenues.

Soit $X$ la variable aléatoire égale à la plus grande des deux valeurs.
3) Établir la loi de probabilité de $X$.
4) Calculer l’espérance mathématique $E(X)$ et la variance $V(X)$ puis l’écart type $\sigma(X)$.

### Solution

1) Établir la loi de probabilité de $X$.
La variable aléatoire $X$ peut prendre les valeurs 1, 2, 3, 4, 5 et 6. Par exemple, si on obtient la combinaison (2 ; 5), la plus grande valeur est 5 et on a : $X = 5$.
- La plus grande des deux valeurs est 1, on obtient la combinaison : $(1 ; 1)$ ; donc $P(X = 1) = \frac{1}{36}$
- La plus grande des deux valeurs est 2, on obtient les combinaisons : $(1 ; 2)$, $(2 ; 1)$ ou $(2 ; 2)$.
$$ P(X = 2) = \frac{3}{36} = \frac{1}{12} $$
- La plus grande des deux valeurs est 3, on obtient les combinaisons : $(1 ; 3)$, $(3 ; 1)$, $(2 ; 3)$, $(3 ; 2)$ ou $(3 ; 3)$.
$$ P(X = 3) = \frac{5}{36} $$
- La plus grande des deux valeurs est 4, on obtient les combinaisons : $(1 ; 4)$, $(4 ; 1)$, $(2 ; 4)$, $(4 ; 2)$, $(3 ; 4)$, $(4 ; 3)$ ou $(4 ; 4)$.
$$ P(X = 4) = \frac{7}{36} $$
- La plus grande des deux valeurs est 5, on obtient les combinaisons : $(1 ; 5)$, $(5 ; 1)$, $(2 ; 5)$, $(5 ; 2)$, $(3 ; 5)$, $(5 ; 3)$, $(4 ; 5)$ ou $(5 ; 4)$.
$$ P(X = 5) = \frac{9}{36} = \frac{1}{4} $$
- La plus grande des deux valeurs est 6, si on obtient les combinaisons : $(1 ; 6)$, $(6 ; 1)$, $(2 ; 6)$, $(6 ; 2)$, $(3 ; 6)$, $(6 ; 3)$, $(4 ; 6)$, $(5 ; 6)$, $(6 ; 5)$ ou $(6 ; 6)$.
$$ P(X = 6) = \frac{11}{36} $$

On peut résumer les résultats dans le tableau de la loi de probabilité de $X$ :

| $x_i$ | 1 | 2  | 3  | 4  | 5  | 6  |
|-------|---|----|----|----|----|----|
| $P(X = x_i)$ | $\frac{1}{36}$ | $\frac{1}{12}$ | $\frac{5}{36}$ | $\frac{7}{36}$ | $\frac{1}{4}$ | $\frac{11}{36}$ |

**Remarque :**
On vérifie que la somme des probabilités est égale à 1 :
$$ \frac{1}{36} + \frac{1}{12} + \frac{5}{36} + \frac{7}{36} + \frac{1}{4} + \frac{11}{36} = 1 $$

2) Calculer l’espérance mathématique $E(X)$ et la variance $V(X)$ puis l’écart type $\sigma(X)$.
$$ E(X) = \sum_{i=1}^{6} x_i P_i = x_1 p_1 + x_2 p_2 + \cdots + x_n p_n $$
$$ = 1 \times \frac{1}{36} + 2 \times \frac{1}{12} + 3 \times \frac{5}{36} + 4 \times \frac{7}{36} + 5 \times \frac{1}{4} + 6 \times \frac{11}{36} $$

On a :
$$ E(X^2) = \sum_{i=1}^{6} x_i^2 P_i = x_1^2 p_1 + x_2^2 p_2 + \cdots + x_n^2 p_n $$

$$ E(X^2) = 1^2 \times \frac{1}{36} + 2^2 \times \frac{1}{12} + 3^2 \times \frac{5}{36} + 4^2 \times \frac{7}{36} + 5^2 \times \frac{1}{4} + 6^2 \times \frac{11}{36} $$

Calculez:
$$ V(X) = E(X^2) - (E(X))^2 $$
✓ L’écart-type de la variable aléatoire $X$ :
$$ \sigma(X) = \sqrt{V(X)} $$
```

<!-- Page 261 -->

```markdown
# Prof : Fayssal  
Site web : www.elbouthkili.jimdo.com  

## Exercice 08

Un sac contient 6 jets indiscernables au toucher et numérotés : $1 ; 1 ; 1 ; 1 ; 0 ; 2$.  
On tire au hasard, successivement et sans remise 3 jets du sac.  
On considère les événements suivants :  
A : « La somme des numéros obtenus est égale à 3 »  
B : « Le premier jeton porte le numéro 2 »  

1) a) Montrer que : $P(A) = \frac{2}{5}$ et $P(B) = \frac{1}{6}$  
b) Calculer $P_B(A)$. Les événements A et B sont-ils indépendants ?  
Soit X la variable aléatoire associée à la somme des numéros portés par les trois jets tirés.  
a) Déterminer la loi de probabilité de la variable X.  
b) Calculer $E(X)$ et la variance $V(X)$ puis l'écart type $\sigma(X)$.

## Solution 

Un sac contient 6 jets indiscernables au toucher et numérotés : $1 ; 1 ; 1 ; 1 ; 0 ; 2$.  
On tire au hasard, successivement et sans remise 3 jets du sac.  
On considère les événements suivants :  
A : « La somme des numéros obtenus est égale à 3 »  
B : « Le premier jeton porte le numéro 2 »  

1) a) Montrer que : $P(A) = \frac{2}{5}$ et $P(B) = \frac{1}{3}$  
Le nombre des possibilités est $Card(\Omega) = A^3_6 = 120$  
- A : « La somme des numéros obtenus est égale à 3 » Obtenir $(1 ; 1 ; 1)$ ou obtenir $(2 ; 0 ; 1)$ :  
$$ p(A) = \frac{Card(A)}{Card(\Omega)} = \frac{A^4_3 + 6(A^1_4 \times A^1_1)}{120} = \frac{48}{120} = \frac{2}{5} $$  
- B : « Le premier jeton porte le numéro 2 » $(2 ; X; X)$  
Donc $Card(B) = A^1_1 \times A^2_5 = 1 \times 5 \times 4$  

Donc par suite $p(B) = \frac{Card(A)}{Card(B)} = \frac{20}{120} = \frac{1}{6}$.  
b) Calculer $P_B(A)$. Les événements A et B sont-ils indépendants ?  
$$ P(A \cap B) = \frac{p(A \cap B)}{p(B)} = \frac{15}{6} = \frac{6}{15} = \frac{3}{5} $$

Les événements A et B sont indépendants si $P_B(A) = P(A)$.  
On a : $P_B(A) = \frac{3}{5}$ et $p(A) = \frac{1}{5}$.  
Donc les événements A et B ne sont pas indépendants.  

2) Soit X la variable aléatoire associée à la somme des numéros portés par les trois jets tirés.  
a) Déterminer la loi de probabilité de la variable X.  
Les valeurs prises par la variable aléatoire X :  
- $X = 2$ : Obtenir $(1 ; 1 ; 0)$  
$$ P(X = 2) = \frac{Card(X = 2)}{Card(\Omega)} = \frac{3(A^2_4 \times A^1_1)}{120} = \frac{36}{120} $$  
- $X = 3$ : Obtenir $(1 ; 1 ; 1)$ ou obtenir $(2 ; 1 ; 0)$  
$$ P(X = 3) = \frac{Card(X = 3)}{Card(\Omega)} = \frac{A^4_3}{Card(\Omega)} = \frac{A^3_4 + 6(A^4_2 \times A^1_1 \times A^1_4)}{120} = \frac{48}{120} $$  
- $X = 4$ : Obtenir $(1 ; 1 ; 2)$  
$$ P(X = 4) = \frac{1}{1 ; 2} $$  
D’où le tableau de la loi de probabilité de variable aléatoire X.  
$$
\begin{array}{|c|c|}
\hline
x_i & P(X = x_i) \\
\hline
2 & 36 \\
3 & 120 \\
4 & 120 \\
\hline
\end{array}
$$
```

<!-- Page 262 -->

```markdown
# Prof : Fayssal
Site web : www.elboutkhili.jimdo.com

## Exercice 09
Une urne contient 10 boules portant les numéros :  
1 ; 2 ; 2 ; 3 ; 3 ; 4 ; 4 ; 4 ; 4 ; 4. Ces boules sont indiscernables au toucher.  
On tire au hasard, successivement et sans remise deux boules de l’urne.  

1) Soit l’événement :  
A : « Obtenir deux boules portant deux numéros pairs »  
Montrer que : $P(A) = \frac{1}{3}$

2) On répète l’expérience précédente trois fois de suite en remettant chaque fois les deux boules tirées dans l’urne.  
Soit $X$ la variable aléatoire égale au nombre de réalisation de l’événement A.  
d) Montrer que : $P(X = 1) = \frac{4}{9}$  
e) Déterminer la loi de probabilité de la variable $X$.  
f) Calculer l’espérance mathématique $E(X)$ et la variance $V(X)$ puis l’écart type $\sigma(X)$.

## Solution
1) Soit l’événement :  
A : « Obtenir deux boules portant deux numéros pairs »  
Montrer que : $P(A) = \frac{1}{3}$

L’univers $\Omega$ associé à cette expérience aléatoire est l’ensemble des arrangements sans répétitions de deux boules parmi dix boules contenues dans le sac  

Donc le nombre des possibilités est $Card(\Omega) = A^{10}_3$

Donc $Card(A) = A^{2}_6$

Par suite $p(A) = \frac{Card(A)}{Card(\Omega)} = \frac{A^{2}_6}{A^{2}_{10}} = \frac{1}{3}$

2) La variable aléatoire $X$ suit la loi binomiale de paramètres $n = 3$ et $p = \frac{1}{3}$, notée $X \sim B \left( 3 ; \frac{1}{3} \right)$ : $\forall k \in \{0, 1, 2, 3\}$ : $P(X = k) = C^n_k p^k (1 - p)^{n - k}$  
a) Montrer que : $P(X = 1) = \frac{4}{9}$  

$$
P(X = 1) = C^1_3 \left( \frac{1}{3} \right) ^1 \left( 1 - \frac{1}{3} \right)^{3 - 1} = 3! / 1! 2! \left( \frac{1}{3} \right) ^1 \left( \frac{2}{3} \right) ^2 = \frac{4}{9}
$$

b) Déterminer la loi de probabilité de la variable $X$.  
$$
P(X = 0) = C^0_3 \left( \frac{1}{3} \right) ^0 \left( \frac{2}{3} \right) ^3 = \frac{8}{27}  
$$
$$
P(X = 2) = C^2_3 \left( \frac{1}{3} \right) ^2 \left( \frac{2}{3} \right) ^1 = \frac{6}{27} = \frac{2}{9}  
$$
$$
P(X = 3) = C^3_3 \left( \frac{1}{3} \right) ^3 \left( \frac{2}{3} \right) ^0 = \frac{1}{27}  
$$

| $x_i$ | 0  | 1  | 2  | 3  |
|-------|----|----|----|----|
| $P(X = x_i)$ | $\frac{8}{27}$ | $\frac{12}{27}$ | $\frac{6}{27}$ | $\frac{1}{27}$ |

c) Calculer l’espérance mathématique $E(X)$ et la variance $V(X)$ puis l’écart type $\sigma(X)$.  
- L’espérance mathématique de la variable aléatoire $X$ est :  
$$E(X) = np = 3 \times \frac{1}{3} = 1$$  

- La variance de la variable aléatoire $X$ est :  
$$V(X) = npq = np(1 - p) = E(X)(1 - p) = 1 \times \left( 1 - \frac{1}{3} \right) = \frac{2}{3}$$  

- L’écart-type de la variable aléatoire $X$ est :  
$$\sigma(X) = \sqrt{V(X)} = \sqrt{np(1 - p)} = \sqrt{\frac{2}{3}}$$
```

<!-- Page 263 -->

```markdown
# Correction de série : Probabilités

## Solution d'exercice 10

Un sac $S_1$ contient 4 boules rouges et 2 boules noires.  
Un sac $S_2$ contient 2 boules rouges et une boule noire.  
On choisit au hasard l'un des sacs, puis on en tire une boule.

On considère les événements :  
$S_1$: « choisir le sac $S_1$ »; $S_2$: « choisir le sac $S_2$ »  
$R$: « Obtenir une boule rouge »  
$N$: « Obtenir une boule noire ».

### Rappel de cours :

#### Probabilité conditionnelle :  
La probabilité de l’événement B sachant que de l’événement A est réalisé est le nombre noté $P_A(B)$ défini par :  
$$ P_A(B) = \frac{P(A \cap B)}{P(A)} $$

#### Loi des probabilités totales :  
On a : $P(B) = P(B \cap A) + P(B \cap \overline{A})$  
Donc $P(B) = P(A) \times P_A(B) + P(\overline{A}) \times P_{\overline{A}}(B)$.

---

### Schématisons d'abord l’expérience de l'exercice :

Le sac $S_1$ contient 4 boules rouges et 2 boules noires.  
Le sac $S_2$ contient 2 boules rouges et une boule noire.  

1) Calculer la probabilité de choisir le sac $S_1$ et obtenir une boule rouge :  
$$ P(S_1 \cap R) = P(S_1) \times P_{S_1}(R) = \frac{1}{2} \times \frac{4}{6} = \frac{2}{3} $$

2) Calculer la probabilité d’obtenir une boule rouge :  
$$ P(R) = P(S_1 \cap R) + P(S_2 \cap R) = P(S_1) \times P_{S_1}(R) + P(S_2) \times P_{S_2}(R) = \frac{1}{2} \times \frac{4}{6} + \frac{1}{2} \times \frac{2}{3} $$
$$ = \frac{2}{3} + \frac{1}{3} = \frac{2}{3} $$

3) En déduire la probabilité d’obtenir une boule noire.  
On a l’événement $N$: « obtenir une boule noire » est l’événement contraire de $R$ : « obtenir une boule rouge », donc  
$$ P(N) = 1 - P(R) = 1 - \frac{2}{3} = \frac{1}{3} $$

4) Sachant que la boule tirée est noire, quelle est la probabilité qu’elle soit tirée du sac $S_1$ ?  
$$ P_{N}(S_1) = \frac{P(N \cap S_1)}{P(N)} = \frac{P(S_1) \times P_{S_1}(N)}{P(N)} = \frac{\frac{1}{2} \times \frac{2}{6}}{\frac{1}{3}} = \frac{1}{2} $$
```