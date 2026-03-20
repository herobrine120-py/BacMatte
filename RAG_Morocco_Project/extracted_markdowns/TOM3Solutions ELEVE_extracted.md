

<!-- Page 1 -->

```markdown
# PHYSIQUE CHIMIE
Cours détaillés, exercices résolus et devoirs corrigés

## Tome 3

### MÉCANIQUE CHIMIE

Prof: HABIB Ahmed
```

<!-- Page 2 -->

```markdown
## sommaire

### Physique
- Les lois de Newton...........................................................3
- Chute verticale d’un corps solide....................................21
- Mouvements plans............................................................32
- Mouvement des stellites artificiels et des planètes........69
- Mouvement de rotation d’un corps solide autour d’un axe fixe....................................................82
- Systèmes mécaniques oscillants.........................................93
- L’atome et la mécanique de Newton............................122

### Chimie
- Exemples de transformations forcées...........................131
- Contrôle de l’évolution d’un système Chimique........143

### Devoirs............................................................174
### Bibliographies utilisées ......................................148
```

<!-- Page 3 -->

```markdown
# Les lois de Newton

## Objectifs
🌼 Connaître les régimes d’oscillations.  
🌼 Connaître l’influence de la capacité et de la résistance sur les oscillations.  
🌼 Savoir établir l’équation différentielle et sa solution dans le cas d’absence amortissement.  
🌼 Savoir établir l’équation différentielle dans le cas des amortissements faibles.  
🌼 Connaître le rôle du générateur d’entretien des oscillations.  

## Axes du cours
📝 Décharge d’un condensateur dans une bobine  
- Régimes d’oscillations.  
- L’équation différentielle.  

### Les oscillations libres non amorties dans un circuit LC série  
- L’équation différentielle.  
- La solution de l’équation différentielle.  
- L’expression de la charge du condensateur.  
- L’expression de l’intensité du courant.  

### Échange de l’énergie entre le condensateur et la bobine  
- L’énergie dans le circuit LC.  
- L’énergie dans le circuit RLC.  

## Entretien des oscillations
```

<!-- Page 4 -->

```markdown
# Notions générales sur le mouvement

## 1️⃣ Relativité du mouvement

On a vu précédemment que le mouvement et le repos sont des concepts relatifs, c'est-à-dire le mouvement d'un corps ne peut être étudié que par rapport à un corps de référence (référentiel) On dit qu'un corps est en mouvement par rapport à un autre corps pris comme référentiel si sa position change par rapport à ce référentiel. Le référentiel est un corps solide indéformable par rapport auquel on étudie le mouvement d'un autre corps, en distingue trois types de référentiel.

- Le référentiel terrestre : est construit à partir de n'importe quel solide de référence fixe par rapport à la surface de la Terre. Ce référentiel est utilisé pour étudier les mouvements des objets à la surface de la Terre.
  
- Le référentiel géocentrique : est un référentiel lié au centre de la Terre. Ce référentiel est utilisé pour étudier les mouvements des objets autour de la Terre (satellites artificiels, avions, navette spatiale, et la Lune).

- Le référentiel héliocentrique : est un référentiel lié au centre du Soleil. Ce référentiel est utilisé pour étudier les mouvements des planètes autour du Soleil.

## 2️⃣ Repérage du mouvement

Pour décrire avec précision le mouvement d'un corps on doit associer au référentiel un repère d'espace et un repère de temps.

- **Repère d’espace**

**1er Cas :** Mouvement rectiligne : Pour repérer les positions d’un mobile en mouvement rectiligne par rapport à un référentiel choisi, on utilise un repère d’espace $R(O, \vec{i})$ d’origine $O$ d’axe $(Ox)$ orienté dans le sens du mouvement. Dans ce cas le vecteur position s'écrit : 
$$ 
\vec{OG} = \vec{x_G} \cdot \hat{i} 
$$ 
et $\hat{i}$ est un vecteur unitaire et 
$$ 
OG = \sqrt{x_G^2} = |\vec{x_G}|. 
$$ 

**2ème Cas :** Mouvement plan : Pour repérer les positions d’un mobile en mouvement curviligne par rapport à un référentiel choisi, on utilise un repère d’espace $R(O, \vec{i}, \vec{j})$ d’origine $O$ d’axes $(Ox)$ et $(Oy)$ orientés dans le sens du mouvement. Dans ce cas le vecteur position s'écrit : 
$$ 
\vec{OG} = \vec{x_G} \cdot \hat{i} + \vec{y_G} \cdot \hat{j} 
$$ 
où $\hat{i}$ et $\hat{j}$ sont des vecteurs unitaires et 
$$ 
OG = \sqrt{x_G^2 + y_G^2}.
$$ 

**3ème Cas :** Mouvement dans l’espace : Pour repérer les positions d’un mobile en mouvement dans l’espace par rapport à un référentiel choisi, on utilise un repère d’espace $R(O, \vec{i}, \vec{j}, \vec{k})$ d’origine $O$ d’axes $(Ox)$, $(Oy)$ et $(Oz)$ orientés dans le sens du mouvement, dans ce cas le vecteur position s'écrit :
$$ 
\vec{OG} = \vec{x_G} \cdot \hat{i} + \vec{y_G} \cdot \hat{j} + \vec{z_G} \cdot \hat{k} 
$$ 
et 
$$ 
OG = \sqrt{x_G^2 + y_G^2 + z_G^2}.
$$ 

- **Repère de temps**

Au cours de ce mouvement le mobile occupe des différentes positions se coordonnent variant en fonction du temps. Pour déterminer la position du mobile à un instant donné on doit choisir une origine du temps $t = 0$ qui correspond à la position initiale du mobile et une horloge pour mesurer le temps ; c'est ce qu'on appelle repère de temps.
```

<!-- Page 5 -->

```markdown
# ③ La trajectoire

La trajectoire d'un point matériel est l'ensemble des positions successives occupées par ce point au cours de son mouvement par rapport à un référentiel choisi.  
La trajectoire d'un point mobile est relative au référentiel par rapport auquel on étudie le mouvement.

# ④ Le vecteur vitesse

Dans un référentiel donné, le vecteur vitesse instantanée du centre d'inertie $G$ d'un corps solide est égal à la dérivée par rapport au temps du vecteur position : 
$$ \vec{V_G} = \frac{d\vec{G}}{dt} $$

On a : 
$$ \vec{V_G} = \frac{d\vec{G}}{dt} \text{ avec } \vec{G} = x_G \hat{i} + y_G \hat{j} + z_G \hat{k} $$

Donc : 
$$ \vec{V_G} = \frac{dx_G}{dt} \hat{i} + \frac{dy_G}{dt} \hat{j} + \frac{dz_G}{dt} \hat{k} $$

Alors : 
$$ \vec{V_G} = \dot{x_G} \hat{i} + \dot{y_G} \hat{j} + \dot{z_G} \hat{k} $$

avec $\hat{i}, \hat{j}, \hat{k}$ sont des vecteurs unitaires constants.  
Donc : 
$$ V_G = \sqrt{\dot{x_G}^2 + \dot{y_G}^2 + \dot{z_G}^2} $$

- **Remarque**  
  L'unité de la vitesse dans le (S.I) est : mètre par seconde m.s$^{-1}$  
  Le vecteur vitesse est toujours tangent à la trajectoire.

# ⑤ Le vecteur accélération

## Définition

Dans un référentiel donné, le vecteur accélération du centre d'inertie $G$ d'un corps solide est égal à la dérivée par rapport au temps du vecteur vitesse : 
$$ \vec{a_G} = \frac{d\vec{V_G}}{dt} $$

On a : 
$$ \vec{a_G} = \frac{d\vec{V_G}}{dt} \text{ avec } \vec{V_G} = x_G \hat{i} + y_G \hat{j} + z_G \hat{k} $$

Donc : 
$$ \vec{a_G} = \frac{dx_G}{dt} \hat{i} + \frac{dy_G}{dt} \hat{j} + \frac{dz_G}{dt} \hat{k} $$

Alors : 
$$ \vec{a_G} = \dot{x_G} \hat{i} + \dot{y_G} \hat{j} + \dot{z_G} \hat{k} $$

L'unité de l'accélération dans le (S.I) est : mètre par seconde carré m.s$^{-2}$.

- **Remarque**  
  Si on revient au vecteur position, le vecteur accélération est la dérivée seconde du vecteur position en fonction du temps : 
$$ \vec{a_G} = \frac{d^2\vec{G}}{dt^2} $$

# ⑥ Le vecteur accélération dans la base de Frenet

Le repère de Frenet $R(G, \vec{u}, \vec{n})$ est un repère local orthonormé lié au mobile $G$.  
Le vecteur unitaire $\vec{u}$ est tangent à la trajectoire au point $G$ et orienté dans le sens du mouvement.  
Le vecteur unitaire $\vec{n}$ est normal et dirigé vers le centre de courbure de la trajectoire ; il est perpendiculaire à $\vec{u}$.  

- Puisque le vecteur vitesse est toujours tangent à la trajectoire donc : 
$$ \vec{V_G} = v \vec{u} $$

Le vecteur accélération dans la base de Frenet est : 
$$ \vec{a_G} = a_t \vec{u} + a_n \vec{n} $$

- $a_t = \frac{V^2}{r}$ : est l'accélération tangente.  
- $a_n = \frac{V^2}{R}$ : est l'accélération normale.  
- $r$ : est le rayon de courbure.
```

<!-- Page 6 -->

```markdown
## II

Le mouvement rectiligne uniforme et le mouvement rectiligne uniformément varié

Le mouvement de $G$ est rectiligne si sa trajectoire est une droite.  
On choisit un repère d’espace $R(O, \mathbf{i})$ d’origine $O$ d’axe $(Ox)$ orienté dans le sens du mouvement.

- Le vecteur position est : $ \mathbf{r} = x_g \mathbf{i} $
- Le vecteur vitesse est : $ \mathbf{V_g} = V_g \mathbf{i} $
- Le vecteur accélération est : $ \mathbf{a_g} = a_g \mathbf{i} $

### Le mouvement rectiligne uniforme

Le mouvement rectiligne uniforme est caractérisé par :
- Une trajectoire rectiligne.
- Une accélération nulle : $ \mathbf{a_g} = \mathbf{0} $
- Une vitesse constante : $ \mathbf{V_g} = \text{cte} $ ou $ V_x = V_0 = \text{(V}_0 \text{ est la vitesse initiale)} $
- L’équation horaire du mouvement est : $ x_g(t) = V_g t + x_0 $
- $x_0$ est l’abscisse à l’origine des dates $(t_0 = 0s)$

### Le mouvement rectiligne uniformément varié

Le mouvement rectiligne uniformément varié est caractérisé par :
- Une trajectoire rectiligne.
- Une accélération constante : $ \mathbf{a_g} = \text{cte} $ avec $ a_x = a_{40} $
- L’équation horaire de la vitesse : $ \mathbf{V_x}(t) = a_x t + V_{0x} $ avec $ V_{0x} = \text{(V}_0 \text{ est la vitesse initiale)} $
- L’équation horaire de l’abscisse : $$ x_g(t) = \frac{a_x}{2} t^2 + V_{0x} t + x_0 $$ avec $x_0$ est l’abscisse $t_0 = 0s$.

## III

Les lois de NEWTON

### 1. Forces intérieures et forces extérieures

Après avoir précisé le système étudié :

- **Forces intérieures** : sont des forces qui s’exercent sur le système étudié par des corps qui appartiennent au système .
- **Forces extérieures** : sont des forces qui s’exercent sur le système étudié par des corps qui n’appartiennent pas au système .

#### Remarque
- Un système est dit isolé s’il n’est soumis à aucune force.  
- Un système est dit pseudo-isolé si les forces auxquelles il est soumis se compensent.

### 2. Première loi de NEWTON « Principe d’inertie »

Dans un référentiel galiléen, si la somme vectorielle des forces extérieures appliquées à un corps solide est nulle ($\sum \mathbf{F_{ext}} = \mathbf{0}$), alors le vecteur vitesse $\mathbf{V_g}$ de son centre d’inertie $G$ est constant ($\mathbf{V_g} = \text{cte}$) c-à-d que $G$ est au repos ou en mouvement rectiligne uniforme.  
La réciproque est vraie aussi. D’où $$ \sum \mathbf{F_{ext}} = \mathbf{0} \implies \mathbf{V_g} = \text{cte} $$

#### Remarque
- Le repère galiléen est un repère dans lequel le principe d’inertie est vérifié.
- On considère chaque repère en translation uniforme par rapport à un repère galiléen.

- Le principe d’inertie n’est vérifié que dans les repères galiléens.

### 3. Deuxième loi de NEWTON « Relation fondamentale de la dynamique »

Dans un référentiel galiléen, la somme vectorielle des forces extérieures appliquées à un corps solide est égale au produit de sa masse $m$ et l’accélération $\mathbf{a_g}$ de son centre d’inertie : $$ \sum \mathbf{F_{ext}} = m \cdot \mathbf{a_g} $$

### Application de la deuxième loi de NEWTON

En général, la deuxième loi de NEWTON sert à déterminer la nature et les équations du mouvement du centre d’inertie d’un mobile connaissant les forces qui s’appliquent sur lui.  
Pour résoudre un problème de dynamique en utilisant la deuxième loi de NEWTON, on doit toujours suivre les étapes suivantes :
```

<!-- Page 7 -->

```markdown
## Préciser le système étudié.
- Faire le bilan des forces extérieures exercées sur le système.
- Représenter ses forces.
- Écrire la relation fondamentale de la dynamique « la deuxième loi de NEWTON ».
- Projeter cette relation après avoir choisi un repère orthonormé convenable lié à un référentiel Galiléen.

### ➃ Troisième loi de NEWTON « Principe d’action et de la réaction »
Lorsqu’un corps A exerce une force $\vec{F}_{A/B}$ sur un corps B, alors le corps B exerce aussi une force $\vec{F}_{B/A}$ sur le corps A telle que : 

$$ \vec{F}_{A/B} = -\vec{F}_{B/A} $$

## Exercice 1
Les coordonnées du centre d’inertie G d’un mobile lors de son mouvement dans un repère cartésien $R(O, \hat{i}, \hat{j}, \hat{k})$ sont : 
- $x(t) = -5t$, $y(t) = 3t^2$, $z(t) = 10$.
1. Donner l’expression du vecteur position $\vec{OG}$, puis calculer sa norme à l’instant $t = 2s$.
2. Déterminer les coordonnées du vecteur vitesse $\vec{V}_{G}$ du centre d’inertie G, puis calculer sa norme à l’instant $t = 2s$.
3. Déterminer les coordonnées du vecteur accélération $\vec{a}_{G}$ du centre d’inertie G, puis calculer sa norme à l’instant $t = 2s$.
4. Calculer la composante tangente et la composante normale de l’accélération dans la base de Frenet à l’instant $t = 2s$. Déduire la valeur du rayon de courbure à cet instant.

## Exercice 2
La courbe ci-contre représente les variations de la vitesse d’un point mobile M au cours de son mouvement rectiligne.
Étudions le mouvement du mobile M dans un repère $R(O, \hat{i})$ d’axe $(Ox)$ orienté selon le sens du mouvement.
1. Quelle est la nature du mouvement du mobile M ?
2. Déterminer la valeur de l’accélération de celle de la vitesse initiale.
3. Déterminer l’équation de la vitesse du mobile M.
4. Déterminer l’équation horaire de l’abscisse $x(t)$ du mobile M. On donne $x(0) = 0m$.
5. Le mobile M atteint une position A à l’instant $t_A = 20s$.
   - a – Calculer la valeur de la vitesse $V_A$.
   - b – Calculer la distance $OA$.

## Exercice 3
L’équation horaire de la vitesse d’un corps ponctuels (S) en mouvement rectiligne est : $v_x(t) = -3t + 2$.
Étudions le mouvement du corps (S) dans un repère $R(O, \hat{i})$ d’axe $(Ox)$.
1. Quelle est la nature du mouvement du corps (S) ?
2. Déterminer la valeur de l’accélération de celle de la vitesse initiale.
3. Déterminer l’équation de l’abscisse $x(t)$ du corps (S). On donne $x(0) = 0$.
4. Le corps (S) s’arrête en un point A à l’instant $t_A$.
   - a – Calculer la valeur de la date $t_A$.
   - b – Calculer la distance $OS$.

## Exercice 4
L’équation horaire du mouvement d’un point matériel M en mouvement rectiligne est : $x(t) = -5t^2 + 33t + 8$ tel que $x$ est en mètre (m) et t seconde (s).
Étudions le mouvement du corps (S) dans un repère $R(O, \hat{i})$ d’axe $(Ox)$.
1. Déterminer la valeur de l’accélération, la valeur de la vitesse initiale et celle de l’abscisse initial du point M.
2. Déterminer la valeur de l’accélération de celle de la vitesse initiale.
3. Calculer la vitesse du point M à l’instant $t' = 2s$.
```

<!-- Page 8 -->

```markdown
# Exercice 5
Les équations horaires de la vitesse d’un point mobile \( G \) dans un repère \( R(O, \vec{i}, \vec{j}, \vec{k}) \) sont : 
\( V_x(t) = 2t + 3 \), \( V_y(t) = 4 \) et \( V_z(t) = 0 \).

1. Calculer la valeur de la vitesse \( V_G \) à l’instant \( t = 3s \).
2. Déterminer les équations horaires du mouvement du point \( G \) sachant qu’il part à \( t = 0 \) d’un point \( A(0, 2, -1) \).
3. Calculer la distance \( OG \) à l’instant \( t = 3s \).
4. Calculer l’accélération du point \( G \).

# Exercice 6
Les équations horaires d’un point mobile \( G \) en mouvement circulaire par rapport un repère \( R(O, \vec{i}, \vec{j}) \) sont : 
\( x(t) = R \cdot \cos(\omega t) \) et \( y(t) = R \cdot \sin(\omega t) \) tel que : \( R = 20cm \ et \ \omega = 40rad.s^{-1} \).

1. Déterminer les expressions des composantes \( V_x(t) \) et \( V_y(t) \) de la vitesse du point \( G \).
2. Déduire l’expression de la vitesse \( V_G \) du point \( G \) en fonction de \( \omega \) et \( R \), puis calculer sa valeur.
3. Déterminer les expressions des composantes \( a_x(t) \) et \( a_y(t) \) de l’accélération du point \( G \).
4. Déduire l’expression de l’accélération \( a_G \) du point \( G \) en fonction de \( \omega \) et \( R \), puis calculer sa valeur.
5. Retrouver l’expression de l’accélération \( a_G \) du point \( G \) en fonction de \( \omega \) et \( R \).

# Exercice 7
On considère un point \( G \) en mouvement rectiligne uniformément varié. La courbe ci-contre représente les variations de l’abscisse \( x_G \) d’un point mobile \( G \) en fonction du temps.

Étudions le mouvement du mobile \( G \) dans un repère \( R(O, \vec{i}) \) d’axe \( Ox \) orienté selon le sens du mouvement. Les droites \( (D_0) \) et \( (D_1) \) sont les tangentes à la courbe \( x_G(t) \) respectivement aux instants \( t_0 = 0s \) et \( t_1 = 2s \).

1. Donner les expressions des équations horaires du mouvement du point \( G \).
2. En exploitant la figure ci-contre déterminer : 
   - L’abscisse initiale du point \( G \).
   - La vitesse initiale du point \( G \).
   - L’accélération du point \( G \).
3. Déduire l’expression \( x_G \) de celle de en fonction du temps.
4. Le corps \( S \) s’arrête en un point \( A \) à l’instant \( t_A \).
   - a – Calculer la valeur de l’instant \( t_A \).
   - b – Calculer la distance \( OA \).

# Exercice 8
Le document ci-contre représente les variations de la vitesse \( V_G \) du centre d’inertie d’un corps solide lors de son mouvement rectiligne dans trois phases \( OA, AB \) et \( BC \).

Étudions le mouvement de \( G \) par rapport à un repère \( R(O, \vec{i}) \). 
Répondre aux questions suivantes pour chacune des trois phases :

1. Déterminer la nature du mouvement de \( G \).
2. Déterminer la valeur de l’accélération \( a_x \).
3. Déterminer les équations horaires du mouvement de \( G \).
4. Calculer la longueur de cette phase.
5. Calculer la valeur de la résultante des forces appliquées au solide.
6. Déterminer les équations horaires du mouvement de \( G \).

Données : \( m = 2,5kg \ ; \ x(0) = 0 \)
```

<!-- Page 9 -->

```markdown
## Exercice 9
On considère un corps solide $(S)$ de masse $m$ en mouvement sur un plan horizontal sans frottements sous l’action d’une force constante $\vec{F}$ dont la direction est confondue avec l’axe $(Ox)$.

1. En appliquant la deuxième loi de Newton, déterminer l'accélération $a_x$ du centre d'inertie du solide $(S)$.
2. Quelle est la nature du mouvement du corps $(S)$ ?
3. Le solide $(S)$ part d’abscisse $x_0 = 0$ à $t = 0s$ avec une vitesse $V_0 = 3 \, \text{m.s}^{-1}$. Déterminer les équations horaires du mouvement de $G$.
4. Le centre $G$ du solide $(S)$ passe par un point $A$ avec une vitesse $V_A = 13 \, \text{m.s}^{-1}$.
   - a - Déterminer $t_A$ la date de passage de $G$ par le point $A$.
   - b - Déduire la valeur de la distance $OA$.

**Données :** $m = 0.5 \, \text{Kg} ; \, F = 2.5 \, \text{N}$

## Exercice 10
Un corps solide $(S)$ de masse $m$ en mouvement sur un plan horizontal sous l’action d’une force constante $\vec{F}$ dont la direction est confondue avec l’axe $(Ox)$. La figure ci-contre. À l’instant $t = 0; \, G$ est confondue avec le point $A$, d’abscisse $x_A = 5 \, \text{m}$. Étudions le mouvement de $G$ dans un repère $R(O, \vec{i}, \vec{j})$ lié à un référentiel terrestre supposé galiléen. La courbe ci-contre représente l’évolution de la vitesse $V_G$ du point $G$ du solide $(S)$, en fonction du temps.

1. En exploitant la courbe déterminer :
   - a - La nature du mouvement de $G$.
   - b - La valeur de la vitesse initiale $V_A$.
   - c - L’accélération $a_x$ de $G$.
2. En appliquant la deuxième loi de Newton, déterminer les composantes de $\vec{R}$ la réaction du plan, et déduire la valeur du coefficient de frottement $K$.
3. Le centre $G$ du solide $(S)$ s’arrête au $B$ à un instant $t_B$.
   - a - Déterminer la valeur de $t_B$.
   - b - Calculer la valeur de la distance $AB$ et déduire la distance $OB$.

**Données :** $m = 1 \, \text{Kg} ; \, F = 3 \, \text{N} ; \, g = 10 \, \text{N.Kg}^{-1}$

## Exercice 11
Soit un solide $(S)$ de centre d’inertie $G$ et de masse $m$, pouvant glisser sans frottement sur un plan incliné d’un angle $\alpha = 30^\circ$ de l’horizontal. À l’instant $t = 0$, $G$ quitte le point $O$ (origine du repère), sans vitesse initiale.

1. En appliquant la deuxième loi de Newton, déterminer l’accélération $a_x$ du centre d’inertie du solide $(S)$.
2. Quelle est la nature du mouvement du centre d’inertie du corps $(S)$ ?
3. Le solide $(S)$ part d’abscisse $x_0 = 0$ à $t = 0s$ avec une vitesse $V_0 = 10 \, \text{m.s}^{-1}$. Déterminer les équations horaires du mouvement de $G$.
4. Le centre $G$ du solide $(S)$ passe par un point $A$ avec une vitesse $V_A = 30 \, \text{m.s}^{-1}$.
   - a - Déterminer $t_A$ la date de passage de $G$ par le point $A$.
   - b - Déduire la valeur de la distance $OA$.
5. Calculer le travail du poids $\vec{P}$ entre les positions $O$ et $A$.

**Données :** $m = 1.5 \, \text{Kg} ; \, g = 10 \, \text{N.Kg}^{-1}$
```

<!-- Page 10 -->

```markdown
# Exercice 12

Un corps solide \( S \) de masse \( m \) est en mouvement sans frottement sur un plan incliné d'un angle \( \alpha = 40^\circ \) par rapport à l'horizontal, sous l'action d'une force constante \( \vec{F} \) dont la direction est confondue avec l'axe \( (Ox) \). À l'instant \( t = 0 \) ; \( G \) est confondu avec le point \( A \), d'abscisse \( x_A = 6 m \). Étudions le mouvement de \( G \) dans un repère \( R(O, \hat{i}, \hat{j}) \) lié à un référentiel terrestre supposé galiléen.

1. En appliquant la deuxième loi de Newton, déterminer :
   - a - L'équation différentielle du mouvement.
   - b - La réaction \( R \) au plan incliné.

2. Le solide \( S \) part du point \( A \) d'abscisse \( x_A = 6 m \) à \( t = 0 s \) sans vitesse initiale. Déterminer les équations horaires du mouvement de \( G \).

3. Le centre \( G \) du solide \( S \) passe par un point \( B \) d'abscisse \( x_B = 60 m \).
   - a - Déterminer \( t_B \) le date de passage de \( G \) par le point \( B \).
   - b - Déduire la valeur de la vitesse en point \( B \).

4. Calculer le travail de la force \( \vec{F} \) entre les positions \( A \) et \( B \).

5. Calculer le travail du point \( P \) entre les positions \( A \) et \( B \).

6. En appliquant le théorème de l'énergie cinétique entre les positions \( A \) et \( B \), retrouver la valeur de la vitesse en point \( B \). 

   Données : \( m = 2 Kg ; \vec{F} = 16 N ; g = 10 N.Kg^{-1} \)

# Exercice 13

Le ski, comme sport, est considéré parmi les meilleures activités de loisir pendant l'hiver ; c’est un sport d’aventure, de consistance physique et de souplesse. Cet exercice consiste à étudier le mouvement d’un skieur sur une piste formée par deux parties
- Une pente AB inclinée avec une angle \( \alpha = 30^\circ \) par rapport au plan horizontal.
- Une piste BC horizontale.

Données :
- Masse du skieur et ses accessoires : \( m = 80kg \)
- L’intensité du champ de pesanteur : \( g = 10 N.Kg^{-1} \)
- La longueur de pente AB est : \( AB = 40m \)

## I-Etude du mouvement sur la pente AB

Étudions le mouvement de \( G \) centre d'inertie du skieur dans un repère \( R'(A, \hat{i}', \hat{j'}) \) lié à un référentiel terrestre supposé galiléen. Les frottements supposés négligeables.

1. En appliquant la deuxième loi de Newton, trouver l'accélération \( \alpha' \) en fonction de \( g \) et \( \alpha \) et calculer sa valeur.
  
2. Déterminer la nature du mouvement de \( G \).

3. Sachant que le skieur part à l’instant \( t = 0 \) ; du point \( A \) sans vitesse initiale :
   - a - Déterminer l'équation horaire du mouvement.
   - b - Calculer \( t_B \) instant où \( G \) atteint le point \( B \).
   - c - Déduire la valeur de \( V_B' \) la vitesse de \( G \) au point \( B \).

## II-Etude du mouvement sur la piste BC

Le centre d'inertie \( G \) du skieur passe par le point \( B \) à un instant considéré comme une nouvelle origine des temps \( (t = 0) \). Étudions le mouvement de \( G \) dans le repère \( R(B, \hat{i}, \hat{j}) \).

1. Par un système d’acquisition convenable on obtient la variation des vitesse \( V_x \) de \( G \) en fonction du temps.
   - En exploitant le graphe de figure \( \circ \), déterminer la valeur l’accélération \( \alpha_x \).

2. Le skieur s’arrête à un point \( C \).
   - a - Déterminer à quel instant le skieur s’arrête-t-il ?
   - b - Calculer la distance \( BC \).

3. En appliquant la deuxième loi de Newton, calculer la valeur de \( R_T \) la composante tangente et la composante normale \( R_N \) de la réaction de piste \( BC \).

4. Déduire la valeur de \( R \) liée à la réaction de piste \( BC \) et celle de l'angle de frottement \( \varphi \).
```

<!-- Page 11 -->

```markdown
# Exercice 14

Un solide $(S)$ de petites dimensions et de masse se déplace sur une raie fermée de deux parties:
- Une partie $AB$ horizontale de longueur $L = 4m$
- Une partie $BC$ circulaire de rayon $r = 60cm$

## Données
- Masse du corps $(S)$: $m = 3kg$
- L'intensité du champ de pesanteur: $g = 10N.Kg^{-1}$

## I-Étude du mouvement du corps sur la partie AB
Le centre d'inertie du solide $(S)$ part du point $A$ à un instant $t_0 = 0$ avec une vitesse $V_A$. Pour cette partie le solide $(S)$ est soumis à une force $\vec{F}$ d’intensité constante et dont la direction forme un angle $\alpha = 15°$ avec l’horizontal.

Sur cette partie, les frottements sont assimilés à une force constante d’intensité $f$ et de coefficient $K = 0,6$. Étudions le mouvement du centre d’inertie $G$ du solide $(S)$ dans un repère $(O, \vec{i}, \vec{j})$.

Un système informatique convenable a permis de tracer la courbe de la figure $②$ qui représente les variations de la vitesse $V_G$ en fonction du temps.

1. En exploitant la courbe de la figure déterminer :
   - a – La nature du mouvement du point $G$.
   - b – La valeur de la vitesse $V_A$ et celle de l’accélération $a_x$.
2. En appliquant la deuxième loi de Newton, déterminer l’intensité de la force $\vec{F}$ et de la réaction $\vec{R_{AB}}$ de la partie $AB$.
3. Le centre $G$ du solide $(S)$ passe par un point $B$ à un instant $t_B = 6s$.
   - a – Déterminer la valeur $V_B$.
   - b – Montrer que la longueur de la partie $AB$ peut s'écrire sous la forme suivante: $L = \frac{V_B^2 - V_A^2}{2a_x}$, puis calculer sa valeur.

## II-Étude du mouvement du corps $(S)$ sur la partie BC
Sur cette partie, la force $\vec{F}$ est éliminée et les frottements sont nuls. On étudie le mouvement de $G$ dans repère un repère de Frenet $(R', \vec{u}, \vec{n})$ tel que $\vec{u}$ est tangent à la trajectoire de $G$ et orienté selon le sens du mouvement et $\vec{n}$ est normale à la trajectoire et orienté vers le centre de la trajectoire.

À un instant $t$, le vecteur $O'G$ forme un angle $\theta$ avec la verticale passant par $O'$.
Par application de la deuxième loi de Newton montre que l’intensité du de la réaction du la partie $BC$ peut s'écrire sous la forme suivante: 
$$ R_{BC} = \frac{m}{r} \left( V^2 + g.r.\cos(\theta) \right) $$

Le point $G$ passe par un point $E$ repéré par son abscisse angulaire $\theta_E = 30°$ avec une vitesse $V_E = 2,1m.s^{-1}$.
1. Calculer la valeur de l’intensité $R_{BC}$.
2. Calculer l’accélération du centre d’inertie du solide au point $E$.

# Exercice 15

Un skieur parcourt une pente $AB$ inclinée un angle $\alpha$ avec le plan horizontal grâce à un câble qui lui applique une force $\vec{F}$ d’intensité $F$ faisant un angle $\beta$ avec la direction de pente $AB$.

## Données
- Masse du skieur et ses accessoires: $m = 75kg$
- L’intensité du champ de pesanteur: $g = 10N.Kg^{-1}$
- Les angles d'inclinaisons:
  - $\alpha = 30°$
  - $\beta = 20°$
- La tension du câble: $T = 680N$

## G
Le centre d'inertie du skieur part du point $A$ à un instant $t_0 = 0$.
```

<!-- Page 12 -->

```markdown
Un système informatique convenable a permis de tracer la courbe de la figure qui représente les variations de la vitesse $V_g$ en fonction du temps.

En exploitant la courbe de la figure déterminer :
1. $a$ – La nature du mouvement du point $G$.
2. $b$ – La valeur de l’accélération $a_x$.
3. En appliquant la deuxième loi de Newton, déterminer 
   - a) Montrer que le mouvement du skieur sur la pente $AB$ se fait avec frottement.
   - b) Calculer l’intensité de la réaction $\vec{R}$.
4. Le centre $G$ du skieur atteint le point avec une vitesse $V_E = 2 \, \text{m.s}^{-1}$. Trouver l’expression $L$ en fonction $V_B$ et $a_x$, mais calculer sa valeur.

# Correction

### Exercice 1

Le vecteur position : $\vec{OG} = -5t\vec{i} + 3t^{2}\vec{j} + 10k$

Calculons la distance $OG$.

On a : $OG = \sqrt{x_G^2 + y_G^2 + z_G^2}$

Donc : $OG = \sqrt{25t^2 + 9t^4 + 100}$

À $t = 2s$, on a : $OG = \sqrt{25 \times 2^2 + 9 \times 2^4 + 100}$

D'où : $OG = 18,55 m$

Les coordonnées du vecteur

$$\vec{V_G} = \begin{pmatrix}
V_x & V_y & V_z
\end{pmatrix} = \begin{pmatrix}
x_G & y_G & z_G
\end{pmatrix} = \begin{pmatrix}
-5 & 6t & 0
\end{pmatrix}$$

Calculons la valeur de la vitesse à $t = 2s$.

On a : $V_G = \sqrt{V_x^2 + V_y^2 + V_z^2}$

Donc : $V_G = \sqrt{25 + 36t^2}$

À $t = 2s$ on trouve : $V_G = \sqrt{25 + 36 \times 4}$

D'où : $V_G = 13 \, m.s^{-1}$

Les coordonnées du vecteur

$$ \vec{a_G} = \begin{pmatrix}
a_x & a_y & a_z
\end{pmatrix} = \begin{pmatrix}
\frac{x_G}{t} & y_G & z_G
\end{pmatrix} = \begin{pmatrix}
\frac{-5}{t} & 6 & 0
\end{pmatrix} $$

Accélération: $a_G = \begin{pmatrix} a_x \\ a_y \\ a_z \end{pmatrix}$

### Exercice 2

Le mouvement du $M$ mobile est rectiligne uniformément varié, car sa trajectoire est rectiligne et sa vitesse $V_m = f(t)$ est affine.

Déterminant la valeur de l’accélération et celle de la vitesse initiale.

D’après la courbe on a : $V_0 = 4 \, m.s^{-1}$

Et $a_x = 2 \, m.s^{-1}$

1. Déterminons l’équation horaire de la vitesse.

On a : $V_m = a_x t + V_0$

Avec $V_0 = 4 \, m.s^{-1}$ et $a_x = 2 \, m.s^{-1}$

Donc : $V_m = 2t + 4$

2. Déterminons l’équation de l’abscisse est : $x(t)$

On a : $x(t) = a_x \frac{t^2}{2} + V_0 t + x(0)$ avec $x(0) = 0$

Donc : $x(t) = t^2 + 4t$

### a) 

Calculons la valeur de $V_A$

On a : $V_m = 2t + 4$

Au point A on trouve : $V_A = 2t_A + 4$.

A.N. : $V_A = 2 \times 20 + 4$.

On trouve : $V_A = 44 \, m.s^{-1}$

### b) 

Calculons la distance $OA$.

On a : $x(t) = t^2 + 4t$.

Au point A on trouve: $x_A = t_A^2 + 4t_A$.

Et puisque : $OA = x_A - x_0 = x_A$.

Donc : $OA = (20)^2 + 4 \times 20 = 480 m$

On trouve : $OA = 480 m$
```

<!-- Page 13 -->

```markdown
# Exercice 3

1. La trajectoire du corps $S$ est rectiligne, l'équation de sa vitesse est affine. Donc son mouvement est rectiligne uniformément varié.
2. Déterminons l'accélération du corps $S$ et sa vitesse initiale.
   - On a : $V(t) = -3t + 2$
   - On sait que $V(t) = a \cdot t + V_0$
   - On trouve : $a_x = -3 \, \mathrm{m \, s^{-2}}; \, V_0 = 2 \, \mathrm{m \, s^{-1}}$
3. Déterminons l'équation horaire du mouvement de $(S)$.
   - On a : $X(t) = -3 \cdot \frac{t^2}{2} + 2t + x_0$
   - Par intégration, on trouve : $x(t) = -\frac{3}{2}t^2 + 2t + x_0$
4. a. Calculons la valeur de la date $t_a$ où le corps $(S)$ s'arrête au point $A$.
   - Alors : $V_a = 0$
   - D'où : $t_a = \frac{2}{3} \approx 0,67 \, \mathrm{s}$
   b. Calculons la distance $OA$
   - On a : $OA = x_3$
   - Donc : $x_A = -\frac{3}{2} \left( \frac{2}{3} \right)^2 + 2 t_A$
   - A.N.: $x_A = -\frac{3}{2} (0,67)^2 + 2 \cdot 0,67 \approx 0,67 \, \mathrm{m}$

# Exercice 4

1. L'équation horaire du mouvement de $M$: $x(t) = -5t^2 + 33t + 8$
   - Et on sait que : $x(t) = \frac{1}{2} a_x t^2 + V_0 t + x_0$
   - Par analogie on trouve: $x_0 = 8 m; \, V_0 = 33 \, \mathrm{m \, s^{-1}}; \, a_x = -10 \, \mathrm{m \, s^{-2}}$
2. Déterminons l'équation horaire de la vitesse du point $M$.
   - On a : $x(t) = -5t^2 + 33t + 8$
   - Et on sait que : $V_x = \frac{dx}{dt} \Rightarrow V_x = -10t + 33$
3. Calculons la vitesse du point $M$ à l'instant $t = 2s$
   - À $t = 2s$, on trouve : $V_x = -10t + 33 = 13 \, \mathrm{m \, s^{-1}}$

# Exercice 5

1. Calculons la valeur de la vitesse de $G$ à $t = 3 \, \mathrm{s}$
   - On a : $V_x = 2t + 3; \, V_y = 4t \, \mathrm{et} \, V_z = 0$.
   - Et on a : $V_G = \sqrt{V_x^2 + V_y^2 + V_z^2}$
   - Donc : $V_G = \sqrt{(2t + 3)^2 + 4^2}$
   - À $t = 3 \, \mathrm{s}$, on trouve : $V_G = \sqrt{(2 \cdot 3 + 3)^2 + 4^2}$
   - On trouve: $V_G \approx 9,85 \, \mathrm{m \, s^{-1}}$
2. Déterminons les équations horaires du mouvement du mobile $G$.
   - $V_x = \frac{dx}{dt}; \; V_y = \frac{dy}{dt}; \; V_z = \frac{dz}{dt}$
   - Par intégration, on trouve :
   $$
   \begin{cases}
   x = t^2 + 3t + x_0 \\
   y = 4t + y_0 \\
   z = z_0
   \end{cases}
   $$

# Exercice 6

1. Déterminons les composantes $V_x(t)$ et $V_y(t)$.
   - On a : $
   \begin{cases}
   x = R \cos(\omega t) \\
   y = R \sin(\omega t)
   \end{cases}
   $
   - Et on sait que : $V_G \Rightarrow V_x = \frac{dx}{dt}; \, V_y = \frac{dy}{dt}$
2. Donc : $V_G = \sqrt{V_x^2 + V_y^2}$
   - On a : $V_G = \sqrt{(-R \sin(\omega t))^2 + (R \cos(\omega t))^2}$
   - $V_G = \sqrt{(R\omega)^2 \sin^2(\omega t) + (R\omega)^2 \cos^2(\omega t)}$
   - Avec $\sin^2(\omega t) + \cos^2(\omega t) = 1$, donc : $V_G = (R\omega) \, \Rightarrow $  
```


<!-- Page 14 -->

```markdown
A.N : $V_G = 20 \times 10^{-2} \times 40 = 8 \, m \cdot s^{-1}$  
1️⃣ Déterminons les expressions des composantes $a_x(t)$ et $a_y(t)$.  
On a : $V_G = -R\omega \cos(\omega t)$  
$$ V_x = -R\omega \cos(\omega t) $$  
$$ V_y = R\omega \sin(\omega t) $$  
Et on sait que :  
$$ a_c = \frac{V_x}{dt} = a_x $$  
$$ a_y = \frac{V_y}{dt} $$  
Donc :  
$$ a_x = -R\omega^2 \cos(\omega t) $$  
$$ a_y = -R\omega^2 \sin(\omega t) $$  

2️⃣ Déterminons l'expression et la valeur de $a_G$.  
On a :  
$$ \bar{a}_G = \begin{cases}  
a_x = -R\omega^2 \cos(\omega t) \\  
a_y = -R\omega^2 \sin(\omega t)  
\end{cases} $$  
Et on a :  
$$ a_c = \sqrt{a_x^2 + a_y^2} $$  
$$ a_G = \sqrt{(-R\omega^2 \cos(\omega t))^2 + (-R\omega^2 \sin(\omega t))^2} $$  
Avec : $ \cos^2(\theta) + \sin^2(\theta) = 1 $  
On trouve :  
$$ a_G = \sqrt{(R\omega)^2} = R\omega $$  
A.N : $a_G = 20 \times 10^{-2} \times (40) = 320 \, m \cdot s^{-2}$  

3️⃣ Déterminons les composantes $a_u$ et $a_n$ de l'accélération dans la base de Frenet.  
Dans la base de Frenet, on a :  
$$ \bar{a}_c = \begin{cases}  
\frac{V_G}{dt} \\  
a_n = \frac{V^2}{R}  
\end{cases} $$  
Et puisque : $V_G = R\omega$  
Donc :  
$$ a_u = 0 $$ et $$ a_n = \frac{(R\omega)^2}{R} = R\omega $$  
Retrouvons l'expression de $a_G$.  
On a :  
$$ a_G = \sqrt{a_u^2 + a_n^2} $$  
$$ a_G = \sqrt{0^2 + (R\omega)^2} $$  
D'où :  
$$ a_G = R\omega $$  

---

**Exercice 7**  

1️⃣ Le mouvement de $G$ est rectiligne uniformément varié.  
On a :  
$$ V_x = a_x t + V_0 t + x_0 $$  

2️⃣ Déterminons $V_0$, $x_0$, et $a_x$.  
D'après la courbe, on a : $x_0 = 2 \, m$  
Et on sait que :  
$$ V_0 = \frac{dx}{dt}\Big|_{t=0} = k_1\, où \, k_1 est \, le \, coefficient \, de \, (D_0) \, la \, tangente \, à \, la \, courbe \, $x_G = f(t)$ à \, t=0 $$  
Et $V_1 = 2 \, m \cdot s^{-1}$.  
$$ k_1 = \frac{20-24}{2 - 1} = 18 \, m \cdot s^{-1} $$  
Donc : $V_0 = 18 \, m \cdot s^{-1}$ et $V_1 = 2 \, m \cdot s^{-1}$  
Et puisque $V_1 = a_x t + V_0$  
Donc : $a_x = V_1 - V_0$  
Donc :  
$$ a_x = -\frac{2}{18} = -8 \, m \cdot s^{-2} $$  

3️⃣ Finalement, on trouve $a_x = -8 \, m \cdot s^{-2}$, $V_0 = 18 \, m \cdot s^{-1}$ et $x_0 = 2 \, m$.  

Dédions les expressions $x_G$ et $V_G$ en fonction du temps.  
On a :  
$$ V_G = a_x t + V_0 t + x_0 $$  
Avec $a_x = -8 \, m \cdot s^{-2}$, $V_0 = 18 \, m \cdot s^{-1}$ et $x_0 = 2 \, m$  
Donc :  
$$ V_G = -8t + 18 \, et \, x_G = -4t^2 + 18t + 2 $$  

Calculons l'instant $t_A$.  
Le point $G$ s'arrête au point $A$, donc $V_A = 0$.  
Alors : $-8t + 18 = 0 \Rightarrow t_A = \frac{18}{8} = 2.25 \, s$.  

4️⃣ Calculons la distance $OA$.  
On a :  
$$ OA = x_A - x_0 $$  
Donc :  
$$ OA = -4t^2 + 18t + 2 - 0 $$  
A.N : $OA = -4 \times (2.25)^2 + 18 \times 2.25 = 20,25 \, m$.  

---

**Exercice 8**  

1️⃣ Dans la phase $OA (0 \leq t \leq 10s)$.  
Le mouvement de $G$ est rectiligne uniformément varié (accéléré), car sa trajectoire est rectiligne et sa vitesse $V_G = f(t)$ est affine.  
D'après la courbe, on a :  
$$ a_x = \frac{16-4}{10-0} = 1.2 \, m \cdot s^{-2} $$  

Les équations du mouvement :  
- Équation de la vitesse :  
On a :  
$$ V_G = a_x t + C_1 \, avec \, V_0 = 4 \, m \cdot s^{-1} $$  
À $t = 0$: $V_0 = 1.2 \times 0 + C_1$  
Donc : $C_1 = V_0 = 4 \, m \cdot s^{-1}$  

- Équation de l'abscisse $x$:  
On a :  
$$ x_G = \frac{a_x t^2}{2} + V_0 t + C_2 = 0 $$  
Donc : $x(0) = 1.2 \times 0^2 + 4 \times 0 + C_2 = 0$.  
Alors : $C_2 = 0$.

Pour retourner : $x_G = 0, 6t^2 + 4t + 0$.  

Calculons la résultante des forces exercées sur le corps $S$ dans la phase $AB$.  
D'après la deuxième loi de Newton, on a :  
$$ F_1 = ma_G $$  
Par projection sur l'axe du mouvement, on trouve :  
$$ F_1 = ma_x \, A.N : F_1 = 2.5 \times 1.2 = 3 \, N $$ 

2️⃣ Dans la phase $AB (10 \leq t \leq 15s)$.  
Le mouvement de $G$ est rectiligne uniforme.  
Car sa trajectoire est rectiligne et sa vitesse $V_G$ est constante.  
Puisque $V$ est constant, donc : $a_x = 0$.  
```

<!-- Page 15 -->

```markdown
On a : $x_G = V_G t + C_3, \; avec \; C_3 = 100 \; m \; et \; t_A = 10 \; s.$  
Donc : $x_4 = 16 \times 10 + C_3$  
Alors : $C_3 = 100 - 160 - 60 \; m.$  
D'où : $x_G = 16 \; t.$  

## Calcul du distance $AB$ :  
On a : $AB = x_B - x_A, \; avec \; x_B = 16 \; t_B - 60.$  
Donc : $AB = 16 \; t_B - 60 - x_A$  
A.N. : $AB = 16 \times 15 - 60 - x_A = 80 \; m$  

Calculons la résultante des forces exercées sur le corps $(S)$ dans cette phase :  
D'après la deuxième loi de Newton, on a :  
$F_2 = m a_{G2}, \; avec \; a_{G2} = 0.$  

III. Sur la phase $BC$ pour $15 \leq t \leq 20 :$  
1. Le mouvement de $G$ est rectiligne uniformément varié (retardé), car sa trajectoire est rectiligne et sa vitesse $V_G = f(t)$ est affine.  
D'après la figure, on a : $a_{x3} = \frac{16 - 0}{15 - 20} = -3,2 \; m.s^{-2}$  

Les équations horaires du mouvement :  
- Équation de la vitesse :  
$$ V_G = a_{x3} t + C_4, \; avec \; V_B = 16 \; m.s^{-1} \; t_B = 15 \; s.$$  
Donc : $C_4 = V_B - a_{x3} t_B$  
Alors : $C_4 = 16 - (-3,2) \times 15 = 64 \; m.s^{-1}.$  
D.N. : $V_G = -3,2 t + 64.$  

- Pour l'abscisse $x_C$ :  
On a :  
$$x_C = -3,2 \frac{t^2}{2} + 64 t + C_5 \; avec \; x_B = 180 m.$$  
Donc : $x_B = -3,2 \frac{t_B^2}{2} + 64 t_B + C_5$  
Alors : $C_5 = 64 - 3,2 \frac{15^2}{2} - 64 = -420.$  

A.N. : $C_5 = -420.$  

On trouve : $x_G = -1,6 t^2 + 64 t - 420$  
1. Calculons la distance $BC$ :  
On a : $BC = x_C - x_B,$  
Avec $x_C = -1,6 t^2 + 64 t - 420 \; et \; x_B = 180.$  
Donc : $x_C = -1,6 (20)^2 + 64 \times 20 - 420 - x_B.$  
On trouve : $BC = 40 \; m$  

Calculons la résultante des forces exercées sur $G$ durant la phase $BC$ :  
D'après la 2ème loi de Newton, on a : $F_3 = m a_{x3}.$  
Par projection sur l'axe $(Ox)$, on trouve :  
$$F_{x3} = m a_{x3}.$$  
A.N. : $F_{x3} = 2.5 \times (-3,2) = -8 \; N.$  
Donc : $F_3 = 8 \; N$  

# Exercice 9  
1. Déterminons l'accélération $a_x :$  
- Le système étudié $(Le \; corps \; (S))$.  
- Les forces exercées sur $S$ sont :  
  - $\vec{P} : \; Poids \; de \; (S).$  
  - $\vec{R} : \; Réaction \; du \; plan.$  

La représentation de ces forces  
D'après la relation fondamentale de la dynamique, on a : $\vec{P} + \vec{R} + \vec{F} = m \vec{a}.$  
Par projection sur l'axe $(Ox)$, on a : $F_x = m a_x.$  
Donc : $a_x = \frac{F_x}{m}.$  
Alors : $a_x = 2.5 \; m.s^{-2}$  

- Le mouvement du corps $(S)$ est rectiligne uniformément varié, car sa trajectoire est rectiligne et son accélération $a_x = cte.$  

Les équations horaires du mouvement :  
- Équation de la vitesse :  
On a : $V_G = a_t t + V_0 \; avec \; a_x = 5 \; m.s^{-2} \; et \; V_0 = 3 \; m.s^{-1}.$  
Donc : $V_G = 5 t + 3.$  
- Équation de la position $x_G$ :  
On a : $x_G = \frac{a_t}{2} t^2 + V_0 t + x_0 = 0.$  
Donc : $x_G = 2.5 t^2 + 3 t.$  

a - Calculons la date $t_a :$  
On a : $V_G = 5 + 3.$  
Au point $A$, on trouve $V_A = 5 t_A + 3$  
Donc : $t_a = \frac{V_A - 3}{5}.$ A.N. : $t_a = \frac{13 - 3}{5} = 2 \; s$  

b - Calculons la distance $OA :$  
On a : $OA = x_4 - x_0 \; avec \; x_0 = 0.$  
Donc : $OA = 2.5 t_A^2 + 3 t_A$. A.N. : $OA = 2.5 (2)^2 + 3 \times 2 = 16 \; m$  

# Exercice 10  
a - Le point $G$ est en mouvement rectiligne uniformément accéléré (retardé), car sa trajectoire est rectiligne et sa vitesse $V_G = f(t)$ est affine.  
b - D'après la courbe, on a : $V_A = 20 \; m.s^{-1}.$  
c - D'après la courbe, on a : $a_x = \frac{20 - 10}{0 - 5}.$  
On trouve : $a_x = -2 \; m.s^{-2}$  

### Déterminons la composante de $\vec{R}$ et la valeur du coefficient de frottement :  
- Système étudié $(Le \; corps \; S)$ :  
- Les forces appliquées à $S$ sont :  
  - $\vec{P} : \; Poids \; de \; (S).$  
  - $\vec{R} : \; Réaction \; du \; plan.$  
  - $\vec{F} : \; Force \; constante.$  
```

<!-- Page 16 -->

```markdown
# La représentation de ces forces

$$
\mathbf{P} + \mathbf{R} + \mathbf{F} = m \mathbf{a}_c
$$

D'après la 2ème loi de Newton, on a :
- Par projection sur les axes du repère $(\mathbf{i}, \mathbf{j})$, on trouve :
$$
\begin{align*}
- \mathbf{F} + \mathbf{R} = 0, \\
\mathbf{R} - \mathbf{F} = m a_x.
\end{align*}
$$
Donc :
$$
\mathbf{R_N} = \mathbf{P}
$$
$$
\begin{align*}
\mathbf{R_T} = \mathbf{F - m a_x}. \\
\mathbf{R_N} = 1 \times 10 = 10 N \\
\mathbf{R_T} = 3 - (-2 \times 1) = 5 N
\end{align*}
$$
A.N. : 

- 

## 1. Calculons du coefficient de frottement $(k)$ :
On a : $k = \frac{R_T}{R_N}$

$$
\begin{align*}
k & = \frac{5}{10} = 0,5
\end{align*}
$$

### a – Calculons la date $t_B$ :
On a : $V_B = a_x t_B + V_0$.
Au point B, on trouve : $V_B = a_x t_B + V_0$.
Donc :
$$
t_B = \frac{V_B - V_0}{a_x}
$$
A.N. :
$$
t_B = \frac{0 - 20}{-2} = 10 s
$$

### b – Calculons la distance $AB$ :

$$
x_G = \frac{a_x t^2}{2} + V_0 t + x_0.
$$
Donc :
$$
x_G = -\frac{1}{2}t^2 + 20t + 5.
$$
Alors :
$$
x_G = -t^2 + 20t + 5.
$$
Au point B :
$$
x_B = -t_B^2 + 20t_B + 5
$$
A.N. :
$$
x_B = -(10)^2 + 20 \times 10 + 5 = 105 m
$$
Et puis :
$$
AB = x_B - x_A.
$$
Donc :
$$
AB = 105 - 5 = 100 m
$$

---

# Exercice 11

Le centre d'inertie du solide $(S)$ est en mouvement rectiligne uniformément varié, car sa trajectoire est rectiligne et son accélération est constante $(a_x = cte)$.

Les équations horaires du mouvement de $\mathbf{G}$ :
- Équation de la vitesse :
On a : $V_G = a_x t + V_0$, avec $V_0 = 10 \, \mathrm{m.s^{-1}}$ et $a_x = 5 \, \mathrm{m.s^{-2}}$.
Donc : 
$$
V_G = 5t + 10.
$$

- Équation de l'abscisse $x_G$ :
On a :
$$ 
x_G = \frac{a_x t^2}{2} + V_0 t + x_0, \quad x_0 = 0.
$$
Donc :
$$
x_G = \frac{1}{2}t^2 + 10t.
$$

### a – Calculons la date $t_A$ :
On a : $A = V_A = 5t + 10$.
$$
t_A = \frac{V - 0}{a_x} = \frac{30 - 10}{5} = 4s
$$

### b – Calcul de la distance $OA$ :
On a : $OA = x_A - x_0$, avec $x_0 = 0$.
Donc :
$$
OA = 2,5 x^2 + 10t.
$$
A.N. :
$$
OA = 2,5 \cdot (4)^2 + 10 \cdot 4 = 80 m
$$

### c – Calculons le travail du poids de $(S)$ durant le déplacement $OA$ :
On a : 
$$
W_0(\mathbf{P}) = mgh \, \text{avec } h = OA \cdot \sin(\alpha).
$$
Donc :
$$
W_0(\mathbf{P}) = mg \cdot OA \cdot \sin(\alpha).
$$
A.N. :
$$
W_0(\mathbf{P}) = 1,5 \times 10 \times 80 \times \sin(30°) = 600 J
$$
```

<!-- Page 17 -->

```markdown
- Par application de la relation fondamentale de la 
  dynamique on a : $\overrightarrow{R} + \overrightarrow{P} + \overrightarrow{F} = m \overrightarrow{g}$
  
- En projetant sur l'axe $(Ox)$, on a :
  $$ F - P \sin(\alpha) = ma_x $$
  
  Donc : $F - mg \sin(\alpha) = m \frac{d^2 x}{dt^2}$  
  Alors $\frac{d^2 x}{dt^2} + \frac{mg \sin(\alpha)}{m} = 0$  
  
  b – Détermination de la valeur de la réaction du 
  plan incliné :
  Par projection de la relation $\overrightarrow{R} + \overrightarrow{P} + \overrightarrow{F} = m \overrightarrow{a_g}$ 
  sur l'axe $(Oy)$, on trouve : $$ R - P \cos(\alpha) + R = 0 $$  
  Donc : $R = P \cos(\alpha)$ avec $P = mg$.  
  Alors : $R = mg \cos(\alpha)$.
  On trouve : $R = 2 \times 10 \times \cos(40^\circ)$.

- A.N. : $R = 15,32N$.

### Détermination les équations horaires du mouvement
1. L'équation de la vitesse $V_g$ :
   Puisque le centre d'inertie du solide est en 
   mouvement rectiligne uniformément varié, 
   donc : 
   $$ V_g = a_x t + V_a avec V_a = 0 $$  
   et $a_x = -g \sin(\alpha) + \frac{F}{m}$.  
   
   A.N. : $a_x = -10 \times \sin(40^\circ) + \frac{16}{2} = 1,57 \, \text{m.s}^{-2}$.
   
2. Équation de l’abscisse $x_g$ :
   $$ x_g = \frac{a_x t^2}{2} + V_a t + x_a = 6 \, m $$
   Donc : $x_g = \frac{1,57t^2}{2} + 6$.

   a – Détermination de la date $t_B$ :
   On a : $x_g = \frac{1,57t^2}{2} + 6$.
   Au point $B$, on trouve : $x_B = 1,57\frac{t_B^2}{2} + 6$.
   
   Donc : $t_B = \sqrt{\frac{40}{2.5}}$.
   
   A.N. : $t_B = 4s$.

3. b – Calculons la valeur de la vitesse $V_B$ :
   On a : 
   $$ \Delta E_c = W_{\overrightarrow{P}} + W_{\overrightarrow{F}} + W_{\overrightarrow{R}} $$
   Avec $W_{\overrightarrow{R}} = 0 \, \text{car} \, \overrightarrow{R} || \overrightarrow{AB}$.
   
   Donc : 
   $$ \frac{1}{2} mv^2 - V^2_a = W_{\overrightarrow{P}} + W_{\overrightarrow{F}} $$
   Alors : $$ V_B^2 = \frac{2}{m} (W_{\overrightarrow{P}} + W_{\overrightarrow{F}}) $$

   D'où : 
   $$ V_B = \sqrt{\frac{2}{m} (-694 + 864) + V_A^2} $$
   A.N. : $V_B = \sqrt{\frac{2}{m} (-694 + 864) + 0} = 13 \, \text{m.s}^{-1}$.

---

#### Exercise 13

I - Étude du mouvement du skieur sur la piste $AB$

1. Détermination de l'accélération $a_x$ :
   - Le système étudié est : le skieur et ses accessoires.
   - Les forces exercées sur ce système sont :
     - $\overrightarrow{P}$ : poids du skieur et ses accessoires.
     - $\overrightarrow{R_{AB}}$: réaction de la pente.
   - La représentation des forces est donnée par le 
   schéma ci-dessous.
   
   Par application de la 2ème loi de Newton, on a :
   $$ \overrightarrow{P} + \overrightarrow{R_{AB}} = m \overrightarrow{g} $$
  
2. Par projection sur l'axe $(Ax')$, on trouve :
   $$ P \sin(\alpha) = ma' $$  
   Donc : 
   $$ a' = g \sin(\alpha) $$  
   A.N. : $a' = g \sin(30^\circ) = 5 \, \text{m.s}^{-2}$.

3. a – Les équations horaires du mouvement de $G$ :
   1. L'équation de la vitesse $V_g$ :
      On a : 
      $$ V_g = a' t + V_a $$
      Donc : $V_g = 5t$.
      
   2. L'équation de l'abscisse $x_g$ :
      On a : 
      $$ x'_g = \frac{a'_g t^2}{2} + x_a = 0 $$  
      D'où : $x_g = 2,5t^2$.
  
   b – Calculons la date $t_B$ :
      On a : $x'_g = 2,5t_B$.  
      Au point $B$, on a : $x_B = 2,5t_B$ avec $x_B = AB$.
      
   Alors : $t_B = \frac{40}{2.5}$.
  
   A.N. : $t_B = 4s$.

c – Calculons la valeur de la vitesse $V_B$ :
   On a : $V_g = 2 \, \text{m.s}^{-1}$.
   Au point $B$, on trouve : $V'_B = 2 \, \text{m.s}^{-1}$.
```

<!-- Page 18 -->

```markdown
## II - Étude du mouvement du skieur sur la piste BC

1. D'après la courbe de la figure (ⓧ), on a :
   $$ a_x = \frac{20 - 15}{0 - 2} = -2.5 \, \text{m.s}^{-2} $$

2. a - Déterminons la date d'arrêt du skieur
   - Au point C, on a $V_C = 0$.
   - Donc : $-2.5t + 20 = 0 \Rightarrow t = 8 \text{s}$

b - Calculons la distance BC :
   - On a: 
   $$ x_C = \frac{a_x t_C^2}{2} + V_B t_C + x_B $$
   avec $x_B = 0$.
   - On sait que : $BC = x_C - x_B$.
   - D'où : $BC = 80 \, \text{m}$

3. Calculons les composantes $R_T$ et $R_N$ de la réaction de la piste BC :
   - Les forces exercées sur le skieur et ses accessoires sont :
     - $\vec{P}$ : poids du skieur.
     - $\vec{R}$ : réaction de la piste.

   - Par application de la 2e loi de Newton, on a :
   $$ \vec{P} + \vec{R} = m \vec{a}_C $$
   
   - Par projection de cette relation sur les axes $(Bx)$ et $(By)$, on trouve :
   $$ -R_T = m a_x $$
   $$ R_N - P = 0 $$
   
   Donc :
   $$ \begin{cases}
   R_T = -m a_x = -80 \times (-2.5) = 200 \, \text{N} \\
   R_N = mg = 80 \times 10 = 800 \, \text{N}
   \end{cases} $$

4. Calculons la valeur de $R$ et celle de l'angle $\varphi$ :
   - On a : 
   $$ R = \sqrt{R_T^2 + R_N^2} \quad \text{et} \quad \varphi = \arctan\left(\frac{R_T}{R_N}\right) $$
   - A.N. : $R = \sqrt{200^2 + 800^2} \approx 824 \, \text{N} \quad \text{et} \quad \varphi \approx \arctan\left(\frac{200}{800}\right) \approx 14^\circ$

---

## Excercice 14

1. a - Le centre d'inertie du solide est en mouvement rectiligne uniformément varié, car sa trajectoire est rectiligne et sa vitesse $V_g = f(t)$ est affine.
   
   b - D'après la courbe de la figure (ⓧ), on a :
   $$ V_A = 3 \, \text{m.s}^{-1} \quad \text{et} \quad a_x = \frac{3 - 2.3}{0 - 6} = 3.33 \, \text{m.s}^{-2} $$

2. Calculons l'intensité de la force $\vec{F}$ et celle de la réaction $\vec{R}_{AB}$ :
   - Le système étudié : Le solide $(S)$.
   - Les forces exercées sur le corps $(S)$ :
     - $\vec{P}$ : poids de $(S)$.
     - $\vec{R}_{AB}$ : réaction de la portée $AB$.
     - $\vec{F}$ : force constante.
   
   - La représentation des forces :
   
   - Par application de la 2e loi de Newton, on a :
   $$ \vec{P} + \vec{R}_{AB} + \vec{F} = m \vec{a}_g $$
   
   - Par projection sur les axes $Ax$ et $Ay$, on trouve :
   $$ F \sin(\alpha) - R_T = m a_x $$
   $$ R_N = -F \sin(\alpha) + P $$
   $$ R_T = F \cos(\alpha) - m g $$
   
3. Calculons $R_T$ et $R_N$ :
   - On a : 
   $$ \begin{cases}
   R_T = F \cos(\alpha) - m a_x \\
   R_N = -F \sin(\alpha) + mg.
   \end{cases} $$
   - A.N. : $R_T = 24.96 \cdot \cos(15°) - 3 \times 3.33$
   $$ R_N = 24.96 \cdot \sin(15°) + 3 \times 10 $$

4. On trouve :
   $$ R_T \approx 14.12 \, \text{N} $$
   $$ R_N \approx 23.54 \, \text{N} $$

5. Calculons la valeur de $R_{AB}$ :
   - On a : 
   $$ R_{AB} = R_T^2 + R_N^2 $$
   - A.N. : $R_{AB} = 23.54^2 + 14.12^2 \approx 27.45 \, \text{N}$

6. a - D'après la courbe de la figure, on a :
   $$ V_B = 23 \, \text{m.s}^{-1} $$

b - Montrons que : 
$$ L = \frac{V_B^2 - V_A^2}{2a_x} $$

---

**ÉLECTRON**  
**&**  
**2BAC-PC-SM**  
**&**  
**Mécanique**
```

<!-- Page 19 -->

```markdown
# II-Étude du mouvement du corps (S) sur la partie BC

## Montrons que 

$$ L = \frac{1}{2a_x} \left( V_B^2 + V^2_A - 2 V_A V_B \right) + \frac{1}{2a_x} \left( 2a_x V_A V_B - 2a_x V^2_A \right) $$

$$ L = \frac{1}{2a_x} \left( V_B^2 + V^2_A - 2 V_A V_B \right) $$

$$ L = \frac{1}{2a_x} \left( V_B^2 - V^2_A \right) $$

$$ L = \frac{V_B^2 - V^2_A}{2a_x} \quad \text{A.N.: } L = \frac{23^2 - 32^2}{2 \times 3,33} = 78,08 m $$

## Étude du mouvement du corps (S) sur la partie BC.

### Le système étudié : Le corps (S).

* Les forces exercées sur (S) sont :
  * $\vec{P}$ : poids de (S)
  * $\vec{R}_{BC}$ : réaction de la partie BC.

* Par application de la deuxième loi de Newton : 
  $$ \vec{P} + \vec{R}_{BC} = ma_c. $$

On projette sur la direction de vecteur $\vec{n}$ on trouve : 
$$ -P \cos(\theta) + \vec{R}_{BC} = ma_n $$

Donc :
$$ -mg \cos(\theta) + \vec{R}_{BC} = \frac{mv^2}{r} $$

Alors : 
$$ \vec{R}_{BC} = \frac{m}{r} \left( \frac{v^2}{r} + mg \cos(\theta) \right) $$

D'où : 
$$ \vec{R}_{BC} = \frac{m}{R} \left( V^2 + g r \cos(\theta) \right) $$

**A.N.:** $ \vec{R}_{BC} = \frac{3}{60 \times 10^{-3}} \left[ 12 + 10 \times 60 \times 10^{-2} \cdot \cos(30°) \right] = 48 N $

### Calculons l'accélération $\vec{G}$ au point E :

* Calculons la valeur de la composante tangentielle $a_{ue}$ de l’accélération au point E :
  
Par projection de la relation $$ \vec{P} + \vec{R}_{BC} = ma_c $$ sur la direction de $\vec{u}$, on trouve : 
$$ -a_{ue} = -g \sin(\theta) $$ 

**A.N.:** $ a_{ue} = -g \sin(30°) = -10 \cdot \frac{1}{2} = -5 m.s^{-2} $

* Calculons la valeur de la composante normale $a_{ne}$ de l’accélération au point E :

$$ a_{ne} = \frac{V^2}{r} \quad \text{A.N.: } a_{ne} = \frac{2^2}{0,6} = 7,35 m.s^{-2} $$

* Calculons la valeur de $a_{eG}$ :

On a : 
$$ a_{e} = \sqrt{a^2_{ue} + a^2_{ne}} $$ 

**A.N.:** $ a_{e} = \sqrt{(-5)^2 + (7,35)^2} = 8,89 m.s^{-2} $

# Exercice 15

### a - Le centre d'inertie du skieur est en mouvement rectiligne uniformément varié, car sa trajectoire est rectiligne et sa vitesse $v_G = f(t)$ est linéaire.

### b - Calculons $a_{x}$ :

D'après la courbe, on a : 
$$ a_{x} : \frac{0 - 9}{0 - 4} = 2,25 m.s^{-2} $$

### a - Montrons que le mouvement du skieur se fait avec frottement :

* Le système étudié : Le skieur et ses accessoires.
  * Les forces exercées sur le système :
    * $\vec{P}$ : Poids du système.
    * $\vec{R}$ : Réaction de la pente AB.
    * $\vec{F}$ : Tension du câble.

* La représentation des forces dans le schéma ci-contre :

Par application de la 2e loi de Newton, on a : 
$$ \vec{P} + \vec{R} + \vec{F} = ma_r. $$

Par projection sur l'axe (AX), on trouve : 
$$ -P \sin(\alpha) - R \cos(\beta) = ma_x $$ avec $ P = mg $

D'où : 
$$ R = F \cos(\beta) - P \sin(\alpha) - ma_x $$

**A.N.:**  $ R = 680 \cos(20°) - 75 \sin(30°) + 2,25 $

On trouve : 
$$ R = 95,2 N $$

Puisque $ R \leq 0$, le mouvement du skieur sur la pente AB se fait avec frottement.
```

<!-- Page 20 -->

```markdown
b – Calculons la valeur de $R$ :
On projette la relation $\vec{P} + \vec{R} + \vec{F} = m\vec{a}_x$ sur l'axe $A_y$, on trouve : $-P\cos(\alpha) + R_N + F\sin(\beta) = 0$.
D'où : $R_N = P\cos(\alpha) - F\sin(\beta)$. A.N. : $R_N = 75 \times 100\cos(30°) - 680\sin(20°)$.
On trouve : $R_N \approx 416,9 \, N$.

Et on sait que $R = \sqrt{R_N^2 + f^2}$ :
Donc : $R = \sqrt{416,92 + 95,22} \approx 427,6N$.

## Trouvons l'expression de $L$ :
Les équations horaire du mouvement sont : $v_x = a_x t$ et $x = \frac{a_x t^2}{2}$.

Au point $B$, ces équations deviennent :
$$
\begin{cases}
 v_B^2 = a_x t_B^2 \quad (1) \\
 x_B = \frac{a_x t_B^2}{2}
\end{cases}
$$

Donc :
$$
\frac{x_B}{\sqrt{v_B^2}} \longleftrightarrow \frac{x_B}{\sqrt{v_B^2}} = \frac{a_x t_B^2}{2} \times \frac{1}{a_x^2 t_B^2} \quad \text{avec } x_B = L
$$

D'où :
$$
L = \frac{v_B^2}{2 a_x}
$$

A.N. : $L = \frac{10,82^2}{2 \times 2,25} = 25,92\, m$
```

<!-- Page 21 -->

```markdown
# Chute verticale d’un corps solide

## Objectifs
- Connaître les caractéristiques du mouvement d’un solide en chute libre
- Savoir appliquer la deuxième loi de Newton pour établir les équations horaires du mouvement d’un solide en chute libre.
- Connaître les forces exercées par un fluide sur un solide immergé dedans.
- Savoir appliquer la deuxième loi de Newton pour établir l’équation différentielle du mouvement d’un solide dans un fluide.
- Savoir exploiter la méthode d’Euler pour résoudre l’équation différentielle du mouvement.

## Axes du cours

### Chute libre verticale d’un corps solide
- Le champ de pesanteur uniforme.
- La chute libre.
- Étude du mouvement d’un solide en chute libre verticale.

### Chute libre verticale d’un corps solide
- La poussée d’Archimède.
- La force de frottement fluide.
- Étude du mouvement d’un solide dans un fluide.
- Résolution de l’équation différentielle par la méthode d’Euler.

ÉLECTRON & 2BAC-PC- SM & Mécanique 21
```

<!-- Page 22 -->

```markdown
# I Chute libre verticale d’un corps solide

1. Le champ de pesanteur uniforme  
   Dans un domaine de l’espace dont les dimensions sont limitées à quelques kilomètres, le vecteur $\vec{g}$ est quasiment le même en tout point : le champ de pesanteur $g$ est uniforme.  
   Les caractéristiques du vecteur $\vec{g}$ en un point $M$ de l’espace  
   - Direction : la verticale passant par $M$  
   - Sens : de $M$ vers le bas  
   - Intensité : $g = 9,81 \, \text{m.s}^{-2}$  

2. La chute libre  
   Un corps solide est en chute libre s’il est soumis uniquement à son poids.  
   Lorsque la trajectoire du corps en chute libre est verticale on dit que le corps est en chute libre verticale.

3. Étude du mouvement d’un solide en chute libre verticale  
   - L’accélération du mouvement : L’accélération $\overline{a}_{G}$ du centre d’inertie $G$ d’un corps s solide en chute libre verticale est égale au vecteur de champ de pesanteur : $\overline{a}_{G} = \overline{g}$.  
   L’accélération du mouvement : Puisque la trajectoire du centre d’inertie est constante $\overline{a}_{G} = cte$ et sa trajectoire est rectiligne, donc son mouvement est rectiligne uniformément varié.  
   - Le mouvement de $G$ est uniformément accéléré lorsque la vitesse initiale se dirige vers le bas ou elle est nulle.  
   - Le mouvement de $G$ est uniformément ralenti lorsque le solide est la vitesse initiale se dirige vers le haut.  
   - Les équations horaires du mouvement : Les équations horaires du mouvement d’un corps solide en chute libre verticale par rapport un repère $R(O, \mathcal{K})$ d’axe $(OZ)$ orienté vers le bas sont :   
     $$ v_z(t) = g \cdot t + v_{0z} $$  
     $$ z(t) = \frac{1}{2} g t^2 + v_{0z} + z_0 $$  

# II Chute libre verticale d’un corps solide

1. La poussée d’Archimède  
   **Définition**  
   Tout corps immergé totalement ou partiellement dans un fluide (liquide ou gaz) est soumis de la part de celui-ci à une force pressante $\overline{F_A}$ appelée poussée d’Archimède.

   **Définition**  
   - Point application : centre de la partie immergée du solide.  
   - Direction : verticale.  
   - Sens : vers le haut  
   - Intensité : $\overline{F_A} = m_f \cdot g = \rho_f \cdot V_s \cdot g$  
     - $\overline{F_A}$ : poussée d’Archimède en $N$  
     - $m_f$ : masse du fluide déplacé en $kg$  
     - $V_s$ : volume du solide (ou volume du fluide déplacé) en $m^3$  
     - $g$ : intensité de pesanteur en $m \cdot s^{-2}$  

2. La force de frottement fluide  
   **Définition**  
   La force de frottement fluide $\overline{f}$ est une force de contact répartie, appliquée par un fluide sur un solide qui se déplace par rapport à lui.
```

<!-- Page 23 -->

```markdown
## Définition
- Point application: centre d'inertie du solide.
- Direction: direction du mouvement.
- Sens: opposé à celui du mouvement.
- Intensité: $f = K \cdot v^n$
  - $v$: la vitesse du centre d'inertie du solide en m.s\(^{-1}\)
  - $K$: est une constante qui dépend de la nature du fluide, et de la forme et les dimensions et l'état de la surface du solide.
  - $n$: est un nombre entier ($n = 1$ si la vitesse est faible ; et $n = 2$ si la vitesse est grande)

### Étude du mouvement d’un solide dans un fluide
#### L’équation différentielle du mouvement
- Le système étudié {La bille}
  - $\vec{P}$: Poids de la bille
  - $\vec{F}_A$: Poussée d’Archimède
  - $\vec{f}$: Force de frottement fluide

D’après le principe fondamental de la dynamique 

$$
\vec{P} + \vec{F}_A + \vec{f} = m \vec{a}
$$

Par projection sur l’axe $(Oz)$ on aura: 

$$
P - F_A - f = m a_G
$$

$$
\rho v g - \rho_f V_g - k v^2 = \rho v \frac{d v_c}{d t}
$$

$$
\frac{g(\rho - \rho_f)}{\rho} = \frac{dv_g}{dt}$$ 

$$
\frac{dv_c}{dt} = -B v_g^2 + A \text{ et } B = \frac{k}{\rho v}$$

- $v_G$: la vitesse du centre d’inertie du solide.
- $V$: le volume du solide.
- $K$: un facteur caractérisant la nature du fluide (sa viscosité ou sa masse volumique), la forme du solide, les dimensions et l’état de la surface du solide.
- $\rho_f$: la masse volumique du fluide.
- $\rho$: la masse volumique du solide.
- $g$: l’intensité du champ de pesanteur.

#### La vitesse limite
On a l’équation différentielle du mouvement: 

$$
\frac{dv_c}{dt} = -B v_g^2 + A
$$ 

En régime permanent on a: 

$$
\frac{dv_c}{dt} = 0 \Leftrightarrow -B v_g + A = 0
$$ 

Donc, l’expression de la vitesse limite est: 

$$
v_L = \sqrt{\frac{A}{B}} = \sqrt{\frac{(\rho - \rho_f) g v}{K}}
$$

#### L’accélération initiale
On a l’équation différentielle du mouvement est: 

$$
\frac{dv_c}{dt} = -B v_g^2 + A
$$ 

à $t = 0$ l'équation différentielle devient: 

$$
a_0 = -B v_0^2 + A
$$ 

Et puisque: $v_0 = 0$ donc l’équation différentielle devient: 

$$
a_0 = A = \frac{(\rho - \rho_f) g}{\rho}
$$ 

#### La constante du temps
Graphique, la asymptote à la courbe $v_G = f(t)$ et la tangente à $t = 0$ se croisent à un instant $t = \tau$ appelée constante du temps.

La constante du temps $\tau$ permet d’estimer la durée du régime transitoire tel que: $\Delta t = 5\tau$

### Résolution de l’équation différentielle par la méthode d’Euler
L méthode d’Euler est une méthode numérique itérative permettant de donner une solution approchée de l’équation différentielle du mouvement de $G$, lors d'une chute verticale avec frottement. Pour résoudre l’équation différentielle du mouvement par la méthode d’Euler il faut connaître:

- L’équation différentielle: 

$$
\frac{dv_c}{dt} = -B v_g + A
$$

- La vitesse initiale $v_0$.
- Le pas de résolution: $t = t_i + \Delta t$

On peut déterminer les valeurs de la vitesse et de l’accélérations en utilisant les deux équations suivantes:

- À un instant donné $t_i$: $a_i = A - B v_i$.
- L’expression de la vitesse: $v_{i+1} = a_i + v_i$
```

<!-- Page 24 -->

```markdown
# Exercice 1
On lâche une bille d’acier de mas sans vitesse initiale, dans l’air à partir d’un point O situé à une distance $H = 15 m$ du sol. 
Étudions le mouvement de la bille dans un repère $R(O, \overline{K})$ lié à un référentiel terrestre supposé galiléen (la figure ci-contre) . On donne : $g = 9, 81 \, \text{m.s}^{-2}$. 
On néglige l’action de l’air sur la bille. 
- En appliquant la deuxième loi de Newton trouver l’expression et la valeur de l’accélération $a_z$. 
- On néglige la résistance de l’air. 
- Quelle la nature de mouvement de la bille ? 
- Déterminer les équations horaires du mouvement. 
- Déterminer le moment où la bille touche le sol. 
- Calculer la vitesse de la bille lorsqu’elle touche le sol. 

# Exercice 2
On étudie le mouvement du centre d’inertie $G$ d’un solide $(S)$ en chute libre, lancé avec une vitesse initiale de valeur : $v_0 = 8 \, \text{m.s}^{-1}$. 
Étudions le mouvement de $G$ centre d’inertie du solide dans repère $R(O, \overline{K})$ lié à un référentiel terrestre supposé galiléen (la figure ci-contre). On donne : $g = 9, 81 \, \text{m.s}^{-2}$. 
- En appliquant la deuxième loi de Newton déterminer la composante $a_z$ de l’accélération. 
- Établir les équations horaires de la vitesse et de la position du centre d’inertie du solide dans les deux cas suivants : 
  - a - Premier cas : $v_0$ est orientée vers le haut et $z_0 = 2 \, m$. 
  - b - Deuxième cas : $v_0$ est orientée vers le bas et $z_0 = -3 \, m$. 

# Exercice 3
Un élève de terminale veut étudier le mouvement de la fléchette d’un pistolet. D’une altitude $y_0 = 1,75 \, m$, il lance la fléchette verticalement vers le haut avec une vitesse initiale $v_0 = 5 \, \text{m.s}^{-1}$. On considère l’action de l’air est négligeable. 
Étudions le mouvement de $G$ centre d’inertie de la fléchette dans repère $R(O, \overline{j})$ lié à un référentiel terrestre supposé galiléen (la figure ci-contre). 
- Déterminer la composant $a_y$ de l’accélération du centre d’inertie de la fléchette, en choisissant un repère d’axe $(OY)$ vertical et orienté vers le haut. 
- Établir les expressions de la vitesse $v(t)$ et de position $y(t)$, du centre d’inertie $G$ de la fléchette. 
- Quelle la valeur de la vitesse au sommet de la trajectoire ? 
- En déduire la date $t_s$, à laquelle la fléchette atteint le sommet de la trajectoire. 
- Calculer la valeur de la hauteur $h$, atteinte par le centre d’inertie de la fléchette. 
- À quelle date la fléchette touchera-t-elle le sol ? . On donne : $g = 9, 81 \, \text{m.s}^{-2}$. 

# Exercice 4
En exploitant un film réalisé lors d’une mission Apollo, on a enregistré le mouvement vertical du centre d’inertie d’un solide en chute libre à partir d’un point $O$ proche de la surface de la lune. 
On repère l’évolution de la vitesse $v_G$ de $G$ au cours du temps suivant un axe vertical orienté vers le bas. 
L’exploitation de cet enregistrement conduit au graphique ci-contre. La date $t = 0$ correspond au début de l’enregistrement. 
- Déterminer la valeur de l’accélération $a_z$ et celle de la vitesse initiale $v_{0z}$ de $G$. 
- Dans quel sens le mobile a-t-il été lancé ? 
- Déterminer la valeur approximative de l’intensité de la pesanteur à la surface de la lune. 
- Le solide est lancé d’un point dont le cote est : $z_0 = 5 \, m$. 
- Établir l’expression de l’abscisse $z(t)$ de $G$ lors de son mouvement.
```

<!-- Page 25 -->

```markdown
# Exercice 5

Le but de cet exercice est de déterminer la profondeur $H$ d'un puits. Pour cela, on laisse tomber, à un instant $t = 0$, une bille métallique de masse $m$ du bord du puits.  
Étu­di­ons le mou­vement de $G$ centre d'inertie de la bille dans repère $R(O, \vec{K})$ lié à un réfé­ren­tiel ter­restre sup­posé galiléen (la figure ci-contre)  
Un capteur sonore trouvé au point $O$, on capte le son produit par l'impact de la bille avec la surface libre de l’eau à un instant $t_r = 3, 4s$  
1. En appliquant la deuxième loi de Newton déterminer la composante $a_z$ de l’accélération. L’action de l’air sur la bille est supposée négligeable.  
2. Établir l’expression littérale de l’équation vérifiée par $H$ en fonction des données.  
3. Calculer la profondeur $H$.  
   Données : $g = 10 \text{ m.s}^{-2}$ ; $v_{air} = 340 \text{ m.s}^{-1}$  

# Exercice 6

On étudie le mouvement du centre d’inertie $G$ d'une bille métallique en chute libre, lancée avec une vitesse initiale de valeur : $v_{0z}$.  
Étu­di­ons le mou­vement de $G$ centre d’inertie de la bille dans repère $R(O, \vec{K})$ lié à un réfé­ren­tiel ter­restre sup­posé galiléen (la figure ①).  
La courbe de la figure ② montre l’évolution temporelle de la vitesse $v_z$ du centre d’inertie $G$ de la bille.  

1. En appliquant la deuxième loi de Newton exprimer la composante $a_z$ de l’accélération en fonction de $g$.  
2. Déterminer les équations horaires des mouvements.  
3. En exploitant la courbe de la figure ② déterminer:  
   a – Le sens de lancé de 1 bille.  
   b – La valeur de $v_{0z}$  
   c – La valeur de l’intensité de la pesanteur.  
   d – La date où le point $G$ atteint le sommet de sa trajectoire.  
4. Calculer la hauteur maximale que la bille atteint lors de son mouvement. On donne $z_0 = 2m$  
5. À quelle date la bille touchera-t-elle le sol ?  
6. Calculer la vitesse de la bille lorsqu’elle touche le sol.  
   
ÉLECTRON & 2BAC-PC- SM & Mécanique
```

<!-- Page 26 -->

```markdown
## Exercice 7

Pour savoir la valeur de l’intensité de la pesanteur à la surface d’une planète $(P)$, le professeur et ses élèves utilisent une simulation basée sur la chute libre verticale d’une bille métallique à partir d’un point proche de la surface de la planète.  
À un instant $t_0 = 0 \, \text{le}$, le professeur fonctionne la simulation et la bille se la lâche avec une vitesse initiale.

Étudions le mouvement de $G$ centre d’inertie de la bille dans repère $R(O, K)$ lié à la surface de la planète supposé galiléen (la figure ①).  
La courbe de la figure ② montre l’évolution temporel de la cote $z$ du centre d’inertie $G$ de la bille.  
Les droites $(D_0)$ et $(D_1)$ sont respectivement les tangentes à la courbe $z = f(t)$ aux instant $t_0 = 0$ et $t_1 = 2 \, \text{s}$.

1. En appliquant la deuxième loi de Newton exprimer l’accélération $a_z$ du centre d’inertie $G$ de la bille en fonction de $g_P$. Où $g_P$ est l’intensité de la pesanteur de la planète.  
2. Déterminer les expressions des équations horaires du mouvement 'inertie $G$ de la bille.  
   En exploitant la courbe de la figure ② déterminer:  
   $a$ – La valeur de $z_A$  
   $b$ – La valeur de $v_0$ à l’instant $t_0$ et celle de la vitesse $v_1$ à l’instant $t_1$.  
3. En se basant sur le tableau ci-dessous déterminer le nom de la planète $(P)$.  
4. Calculer la hauteur maximale atteinte par la bille lors de son mouvement.  
5. À quelle date la bille touchera –t-elle le sol ?  
6. Calculer la vitesse de la bille lorsqu’elle touche le sol.

| Planète  | Terre | Jupiter | Venus | Mars |
|----------|-------|---------|-------|------|
| Intensité de la pesanteur en $m.s^{-2}$ | 9,91  | 24,8  | 8,9   | 3,7  |

## Exercice 8

On considère une bille de fer de masse $m = 100g$ et de volume $V = 12,7cm^3$ et une masse $m = 100g$.

1. Calculer le poids de la bille.  
2. La bille est placée dans l’air dont la masse volumique est : $\rho_{air} = 1,3Kg.m^{-3}$.  
   a) – Calculer la poussée d’Archimède qui s’exerce sue la bille dans l’air.  
   b) – Comparer la poussée d’Archimède et le poids.  
3. La bille tombe dans un liquide dont la masse volumique est : $\rho_{liq} = 920Kg.m^{-3}$.  
   a) – Calculer la poussée d’Archimède qui s’exerce sue la bille dans le liquide.  
   b) – Comparer la poussée d’Archimède et le poids.  
On donne : l’intensité de chapagne est : $g = 8,91m/s^3$.
```

<!-- Page 27 -->

```markdown
# Exercice 9

Une goutte d'eau supposées sphérique de volume $V = 0,26cm^3$, tombe sans vitesse initiale de la base d'un nuage à hauteur $h = 2500m$ au-dessous du sol.  
On prendra, comme origine des temps, l’instant où la goutte quitte la base de nuage, et comme origine de l’espace, l’endroit où la goutte quitte le nuage.

1. En néglige l'action de l'air sur la goutte d'eau et on suppose qu'il y a aucun vent.  
   a - Établir la loi horaire de son mouvement du centre d'inertie de la goutte d'eau.  
   b - Calculer la vitesse de la goutte lorsqu’elle atteint le sol ; cela vous paraît-il acceptable ?  
   c - En fait, la goutte arrive au sol avec une vitesse : $v_L = 14m.s^{-1}$. Expliquer la différence entre cette valeur et celle précédente.

2. Donner l’expression de la poussée d’Archimède, et calculer sa valeur.  
   Comparer la valeur de la poussée d’Archimède avec celle du poids. Commenter le résultat.

3. On modélise les frottements qui s’exercent sur la goutte par une force unique d’expression $\vec{f} = -k\vec{v}$, où $k$ est un coefficient à déterminer.  
   a - Établir l'équation différentielle du mouvement du centre d'inertie de la goutte d'eau.  
   b - En déduire l’expression de la vitesse limite $v_L$ du centre d'inertie de la goutte d'eau.  
   c - Calculer la valeur de $k$ et celle du temps caractéristique $\tau$.  
   d - Au bout de quelle durée, le centre d'inertie de la goutte d'eau atteint-elle sa vitesse limite.

**Données :**  
$\rho_{eau} = 10^3kg.m^{-3}$ ; $\rho_{air} = 1,2kg.m^{-3}$ ; $g = 10m.s^{-2}$

# Exercice 10

Le but de cet exercice est de modéliser la force de frottement visqueux exercée par une huile de moteur sur une bille métallique, à partir de l’étude du mouvement de la chute verticale de cette bille dans une éprouvette graduée remplie d'huile. (la figure 1)

**Données :**  
- Volume de la bille : $V = 8,2 \times 10^{-6}m^3$  
- Masse volumique de la bille : $\rho_1 = 7,87 \times 10^3kg.m^{-3}$  
- Masse volumique de l'huile de moteur : $\rho_2 = 8,9 \times 10^2kg.m^{-3}$  
- L'intensité du champ de pesanteur : $g = 9,81m.s^{-2}$  
- L’intensité de la force de frottement : $f = k v^2$  
- L’intensité de la poussée d’Archimède : $F_A = \rho_2 V g$

On lâche la bille sans vitesse initial à un instant $t = 0s$.  
Par un système d’acquisition convenable on obtient les variations de $v_G$ la vitesse de $G$ centre d'inertie de la bille en fonction du temps (la courbe de la figure 2)

En appliquant la deuxième loi de Newton montrer que l’équation différentielle du mouvement s’écrit sous la forme suivante :

$$ \frac{d v_G}{d t} + 3,25v_G = 8.7. $$

1. Déterminer l’accélération initiale $a_0$.  
2. Déterminer l'expression de la vitesse limite $v_L$ en fonction de $k$.  
3. En exploitant la courbe déterminer :  
   a - La valeur la vitesse limite $v_L$.  
   b - Temps caractéristique $\tau$.  
4. Déduire la valeur de $k$.  
5. En utilisant la méthode d'Euler, calculer les vitesses $v_1$ et $v_2$. On donne le pas de calcul $Δt = 2 \times 10^{-3}s$.
```

<!-- Page 28 -->

```markdown
# Exercice 11

Le ballon ballon-sonde, est un ballon à gaz utilisé dans les domaines de la météorologie et de l'astronautique, un ballon libre non habité, utilisé pour faire des mesures locales dans l’atmosphère. Son principal intérêt est de pouvoir faire à très faible coût, des mesures à des altitudes d’environ $30 \, km$ à $50 \, km$, ce qui ne peut être envisagé avec un avion. Ce ballon-sonde a été inventé par Gustave Hermite en 1892.

On considère un ballon sonde de volume $V$ gonflé à l’hélium.  
L’ensemble balloon-station de mesure possède une masse de $m = 3.38 \, kg.$  
Le volume de la station de mesure sera considéré négligeable devant celui du ballon.

Le ballon est lâché depuis le sol sans vitesse initiale, étudions le mouvement de $G$ centre d'inertie de l'ensemble station-ballon dans un repère $R(0,K)$ lié un référentiel terrestre supposé galiléen, et on supposera qu’il y a aucun vent.

## Données
- Volume du ballon : $V = 3 \, m^3$
- Masse volumique de l’air : $\rho_{air} = 1.3 \, kg/m^3$
- L’intensité de champ de pesanteur : $g = 9.81 \, N/kg$
- L’intensité de la force de frottement : $f = kV_c$
- L’intensité de la poussée d’Archimède : $F_A = \rho_{air} V_g g$

Un système d’acquisition lié à la sonde donne la courbe de la figure qui représente les variations de la vitesse de $G$ en fonction du temps.

Q: En appliquant la deuxième loi de Newton montrer que l’équation différentielle du mouvement s’écrit sous la forme : 
$$
\frac{dV_G}{dt} + A V_G = B,
$$
en précisant les expressions de : $A \in \mathbb{R}$ et $B$ en fonction de $m, \rho_{air}, g, V$ et $k$.

1. Déterminer l’expression de la vitesse limite $v_L$ et celle de l’accélération initiale $a_0$ en fonction de $A$ et $B$ puis en fonction de : $g, m, V$ et $\rho_{air}$.
2. Calculer la valeur de $a_0$.
3. En exploitant la courbe déterminer la vitesse limite $v_L$ et déduire la valeur de la constante du temps.
4. Déterminer l’expression de $k$ en fonction de $B$ et $v_L$ et $m$. Calculer la valeur de $k$ en précisant son unité dans le système international.
5. En utilisant la méthode d’Euler, calculer les vitesses $v_1$ et $v_2$. On donne le pas de calcul $\Delta t = 5 \times 10^{-1} s$.

# Exercice 12

Le but de cet exercice est de déterminer le coefficient de viscosité $\eta$ et la masse volumique $\rho$ d'une bille d'huile d'olive, à partir de l'étude du mouvement de la chute verticale d'une bille de fer dans une éprouvette graduée remplie de l'huile d'. (la figure $0$)  
Étudions le mouvement de $G$ centre d’inertie de la bille dans un repère $R(0,K)$ lié un référentiel terrestre supposé galiléen.

## Données
- Rayon de la bille : $r = 4 \, mm$
- Volume de la bille : $V = \frac{4}{3} \pi r^3$
- Masse de la bille : $m = 2.11 \, kg$
- L’intensité de champ de pesanteur : $g = 9.81 \, m.s^{-2}$
- L’intensité de la force de frottement : $f = 6 \pi r \eta v_G$
- L’intensité de la poussée d’Archimède : $F_A = \rho \cdot V \cdot g$

La courbe de la figure montre les variations de l'accélération $\displaystyle \vec{a} \, G$ du centre d'inertie $G$ de la bille en fonction de sa vitesse $v_G$.
```

<!-- Page 29 -->

```markdown
1. En appliquant la deuxième loi de Newton montrer que l’équation différentielle du mouvement s’écrit sous la forme :

$$ \frac{dvc}{dt} + 2 \nu_g = A, $$

en précisant le expression de $A$ en fonction de $m, \rho, g$ et $r$, et celle de $A$ en fonction de $m, r$ et $\eta$.

2. Déterminer l’expression de la vitesse limite $v_L$ et celle de l’accélération initiale $a_0$ en fonction de $A$ et puis en fonction de $s, m, r$ et $\rho$.

3. En exploitant la courbe déterminer la valeur de la vitesse limite $v_L$ et celle de l’accélération initiale $a_0$.

4. Calculer la valeur de la masse volumique de l’huile étudiée et celle du coefficient de sa viscosité.

5. Le tableau ci-dessous donne les valeurs de $v_c$ et de la vitesse aux instants différents.

   | Temps (s) | $t_0$ | $t_1 = 2 \times 10^{-2}$ | $t_2 = 4 \times 10^{-2}$ | $t_3 = 6 \times 10^{-2}$ | $t_4 = 8 \times 10^{-2}$ |
   |-----------|-------|---------------------------|---------------------------|---------------------------|---------------------------|
   | Vitesse en (m.s\(^{-1}\))  | 0     | 0,173                     | 0,490                     | 0,635                     |
   | Accélération en (m.s\(^{-2}\)) | 8,67  | 8,165                     | 7,689                     | 7,239                     |

---

**Exercice 13**

Un corps solide $(S)$ de centre d'inertie $G$ et de masse $m = 8 kg$, glisse sur un plan incliné d'un angle $\alpha$ par rapport à l'horizontal. Lors de son mouvement, le corps $(S)$ est soumis à une force de frottement visqueux dont l'expression est : 

$$ \vec{f} = -k \vec{v_g} $$

Étudions le mouvement de $G$ dans un repère $R(O, \vec{i}, \vec{j})$ lié à un référentiel terrestre supposé galiléen. À l’instant $t = 0$, $G$ quitte le point $O$ (origine du repère), sans vitesse initial.

On donne l’intensité de champ de pesanteur : $g = 10 m.s^{-2}$.

1. En appliquant la deuxième loi de Newton montrer que l’équation différentielle du mouvement s’écrit sous la forme :

$$ \frac{dv_c}{dt} + A v_g = g \sin(\alpha), $$

en précisant l’expression de $A$ en fonction $K$ et $g$.

2. Déterminer l’expression de la vitesse limite $v_L$ en fonction de $g, m, k$ et celle de $a_0$ en fonction de $g, \alpha$.

3. La solution de l’équation différentielle peut s’écrire sous la forme : 

$$ v_g = \beta(1 - e^{-\gamma t}). $$

Déterminer l’expression de $\tau$ et celle de $g$ pour soit solution de l’équation.

4. Montrer que l’accélération du mouvement peut s’écrire sous la forme suivante :

$$ a_g = a_{0e} e^{-t/\tau} $$

5. La courbe de la figure donne la variation de l’accélération en fonction du temps. En exploitant cette courbe, déterminer la valeur de l’accélération initiale et celle de $g$.

6. Calculer la valeur de la vitesse limite $v_L$ et celle de l'angle $\alpha$. Déduire la valeur du coefficient de frottement.
```

<!-- Page 30 -->

```markdown
# Correction

## Exercice 1
1. Déterminons l'accélération $a_z$ :
   - Le système étudié : La bille.
   - Les forces exercées sur la bille :
     - $\vec{P}$ : Poids de la bille.
   - La représentation de la force :

     ![Force](lien_image_force)

   - Par application de la 2$^{ème}$ loi de Newton, on a : $\vec{P} = m \vec{g}$.
   - Par projection sur l'axe $(Oz)$, on a : $P = m a_z$.
     Donc : $m a_z = m g$.  
     D'où : $a_z = g$.  
     A.N. : $a_z = 9,8 \, m.s^{-2}$.

2. Puisque la trajectoire de la bille est rectiligne, et son accélération $a_z$ est constante, donc son mouvement est rectiligne uniformément varié.

3. Les équations horaires du mouvement :

   $$ 
   v_z = gt + v_{0z} \text{ et } z = \frac{gt^2}{2} + v_{0z}t + z_0,
   $$ 
   avec $v_{0z} = 0$ et $z_0 = 0$.
   Donc : $v_z = 9,8 t$ et $z = \frac{9,8 t^2}{2}$.

4. Déterminons la date $t_s$ où la bille touche le sol :
   - On a : $z = -\frac{9,81}{2}$.
   - Au sol, on a : $H = -\frac{9,81 t^2}{2}$.
   - D'où : $t^2 = \frac{2H}{9,81}$.
     Alors : $t_s = \sqrt{\frac{2H}{9,81}} \approx 1,75$.

5. Calculons la vitesse d'impact de la bille au sol :
   - On a : $v_z = 9,81 t$.
   - Au sol, On trouve : $v_s = 9,81 t_s$.
   A.N. : $v_s = 9,81 \times 1,75 \approx 17,16 \, m.s^{-1}$.

## Exercice 2
1. Déterminons l'accélération $a_z$ :
   - Le système étudié : Le solide $(S)$.
   - La force exercée sur $(S)$ :
     - $\vec{P}$ : Poids du solide.
   - Par application de la 2$^{ème}$ loi de Newton, on a : $\vec{P} = m \vec{g}$.
   - Par projection sur l'axe $(Oz)$, on a : $P = m a_z$.
     Donc : $mg = m a_z$.  
     D'où : $a_z = g = 9,81 \, m.s^{-2}$.

2. Déterminons les équations horaires du mouvement :
   - a) Premier cas : $v_{0z} = v_{0z}$ et $z_G = a_z t^2$.

     On a : $v_z = a_z t + v_{0z}$ et $z_G = \frac{a_z t^2}{2} + v_{0z} t + z_0$.
     Donc : $v_z = 9,81 t - 8$ et $z_G = \frac{9,81 t^2}{2} - 3$.
     
   - b) Deuxième cas : $v_{0z} = 0$ et $z_G = -3$.

     On a : $v_z = a_z t + v_{0z}$ et $z_G = \frac{a_z t^2}{2} + v_{0z} t + z_0$.
     Donc : $v_z = 9,81 t$ et $z_G = \frac{9.81 t^2}{2} - 3 + 8 - 3$.

## Exercice 3
1. Déterminons l'accélération $a_z$ :
   - Le système étudié : La fléchette.
   - La force exercée sur la fléchette :
     - $\vec{P}$ : Son poids.
   - Par application de la 2$^{ème}$ loi de Newton, on a : $\vec{P} = m \vec{g}$.
   - Par projection sur l'axe $(Oy)$, on trouve :
     - $-mg = m a_y$.
     D'où : $a_y = -g$ A.N. : $a_y = -9,81 \, m.s^{-2}$.

2. Les équations horaires du mouvement sont :

   $$ 
   v_y = a_y t + v_{0y} + y_0.
   $$ 
   Avec $a_y = -9,81 \, m.s^{-2}, v_{0y} = 5 \, m.s^{-1}$, et $y_0 = 1,75$.

   Donc : $v_y = -9,81 t + 5 + y_G = \frac{-9,81 t^2}{2} + 5 t + 1,75$.

3. Au sommet $S$, on a : $v_s = 0$.

4. On trouve $t_s = \frac{5}{9.81} \approx 0,51$.

5. Calculons la hauteur maximale atteinte par le centre d'inertie de la fléchette :

   On a :

   $$ 
   y_G = \frac{-9.81 t^2}{2} + 5 t + 1.75.
   $$ 

   Au sommet, on a : $h = \frac{-9.81(0.51)^2}{2} + 5 \times 0.51 + 1.75$.

   A.N. : $h = -\frac{9.81}{2} \times 0.51^2 + 5 \times 0.51 + 1.75$.

6. Le centre d'inertie de la fléchette touche le sol à $t_{sol}$ tel que :

   $$ 
   t_{sol} = \frac{-10 + 5}{-9.81} = 0.5.
   $$ 

   D'où : $D = 10^2 - 4(-9.81) \times 3.5 = 237.3$.

   Puisque $D > 0$, cette équation possède deux solutions.

   $t_{sol1} = \frac{-10 + \sqrt{237.3}}{2 \times 9.81} = -2.7 \, s$.

   $t_{sol2} = \frac{-10 - \sqrt{237.3}}{2 \times 9.81} = 1.29 \, s$.

   Puisque $t > 0$, donc la solution convenable est : $t_{sol2} \approx 1.29 \, s$.
```

<!-- Page 31 -->

```markdown
# Exercice 4

1. Déterminons la valeur de $v_{02}$ et celle de $a_z$ :  
   D'après le graphique, on a : $v_{02} = -2 \, \text{ms}^{-1}$  
   et $a_z = \frac{-2 - 0}{-0.125} = 1.6 \, \text{ms}^{-2}$

   Puisque $v_{02} < 0$, et l'axe $(Oz)$ se dirige vers le bas, donc le solide a été lancé initialement vers le haut.

2. Déterminons l'intensité de la pesanteur à la surface de la lune :  
   Le solide $(S)$ est en chute libre, donc il est soumis uniquement à son poids $P_L$.

3. Déterminons l’accélération $a_z$ de la bille :  
   - La bille est soumise à son poids uniquement.  
   - Par application de la 2ème loi de Newton, on a : $\vec{P} = m \vec{g}$.  
   - Par projection sur l’axe $(Oz)$, on obtient : $mg = m a_z$.  
   D'où : $a_z = -g$.

4. L’équation horaire du mouvement est:  
   $z_G = \frac{1}{2} a_z t^2 + v_{02} t + z_0$.  
   Avec $a_z = g, \, v_{02} = -2 \, \text{ms}^{-1}$ et $z_0 = 5$.  
   Donc : $z_G = 0.8 t^2 + 5$.

---

# Exercice 5

On remplace $t_{h}$ dans l’expression de $H$, on trouve:  
$$H = \frac{g}{2} \left( t_r - \frac{H}{v_{air}} \right)^2$$  
$$\Rightarrow 2H \frac{1}{v_{air}^2} = t^2_r - 2t_r \frac{H}{v_{air}} + \frac{H^2}{v_{air}^2}$$  
$$H + t^2_r = 0$$  

Calculons la valeur de $H$ :  
On a : $\frac{H^2}{v_{air}^2} = \left( t_r - \frac{H}{v_{air}} \right)^2$  
Avec $v_{air} = 340 \, \text{ms}^{-1}, \, g = 10 \, \text{ms}^{-2}$ et $t_r = 3.4 \, \text{s}$,  
Donc : $\frac{H^2}{340^2} = (3.4 - 1) H + 3.4^2 = 0$  
$$8.65 \times 10^{-6} = 0.22 H + 11.56 = 0$$  
On trouve : $A = 4.8 \times 10^{-2}$.  
$$\Rightarrow \Delta > 0, \text{ donc cette équation admet deux solutions :}$$  
$$H_1 = \frac{0.22 - 4.8 \times 10^{-2}}{2 \times 8.65 \times 10^{-6}} \approx 2.54 \times 10^4 \, m$$  
$$H_2 = \frac{0.22 + 4.8 \times 10^{-2}}{2 \times 8.65 \times 10^{-6}} \approx 52.66 \, m$$  

La solution convenable est $H = H_2 = 52.66 \, m$  
(Car $H_1 = 25.4 \, Km$ n'est pas convenable.)

---

# Exercice 6

1. Déterminons l'accélération $a_z$ :  
   - La bille est en chute libre, donc elle est soumise à son poids $\vec{P}$.  
   - D'après la 2ème loi de Newton, on a : $\vec{P} = m \vec{g}$.  
   - Par projection sur l'axe $(Oz)$, on obtient :  
   $$- \vec{P} = m \vec{a}$$  
   Donc : $a_z = -g$.

2. a) On reprend la courbe, on a : $v_{02} = 20 \, \text{ms}^{-1}$  
   Puisque $v_{02} > 0$ et l’axe $(Oz)$ est dirigé vers le haut, la bille a été lancée initialement vers le bas.

3. b) D'après la courbe, on a : $a_z = -10 \, \text{ms}^{-2}$  
   Et puisque $a_z = -g$, donc : $g = 9.1 \, \text{ms}^{-2}$.

4. c) Au sommet de la trajectoire, la vitesse au centre d'inertie de la bille est nulle $(v_z(t_s) = 0)$  
   D'après la courbe, on trouve : $t_s = 2 \, s$.

---

# Les équations horaires du mouvement :

On a : $z = a_z t + v_{02} z_G + \frac{1}{2} a_z t^2 + v_{02} t + z_0$  
Avec : $a_z = -10 \, \text{ms}^{-2}, \, v_{02} = 20 \, \text{ms}^{-1}$ et $z_0 = 2 \, m$.  
Donc : $v_z = -10 t + 20 et z_G = -5 t^2 + 20 t + 2 = 22 \, m$  

D'après la courbe, on a : $t_{sol} = 4 \, s$  
```


<!-- Page 32 -->

```markdown
# Exercice 7

1.  La bille est en chute libre, donc elle soumise à son poids $\vec{P}$ uniquement.
    - D'après la 2ème loi de Newton, on a : $\vec{P} = m \vec{g}$.
    - Par projection sur l'axe (Oz), on obtient : 
      $$-mg = m a_z$$
      Donc : $a_z = -g_p$

2.  Les équations horaires du mouvement sont :
    $$v_z = gt + v_{0z}$$
    $$z = \frac{gt^2}{2} + v_{0z}t + z_0$$
    a - D’après la courbe de la figure (⚪), on obtient : $z_A = 10 \, m$

3.  b - Calculons $v_0$ et $v_1$ :
    - Calculons $v_0$ :
      La droite $(D_0)$ à $t = 0$, donc :
      $$\frac{dz_g}{dt}\bigg|_{t=0} = k_0 \text{ où } k_0 \text{ est le coefficient directeur de } (D_0)$$
      Et puisque $v_z = \frac{dz_g}{dt}$, donc $v_0 = \frac{dz_g}{dt}\bigg|_{t=0}$
      D'où : $v_0 = k_0$  
      A.N. : $v_0 \approx 10.5 - 4.3 \approx 40.62 \, m.s^{-1}$

    - Calculons $v_1$ :
      La droite $(D_1)$ et tangent à la courbe 
      $$z_g = f(t) \text{ à } t = 2 \, s, \quad \text{ donc } \quad \frac{dz}{dt}\bigg|_{t=2}= k_1 \text{ où } k_1 \text{ est le coefficient directeur de } (D_1)$$
      donc : $v_1 = \frac{dz}{dt}\bigg|_{t=2} = k_1$

Et puisque $v_z = \frac{dz_g}{dt}$, donc $v_1 = \frac{dz_g}{dt}\bigg|_{t=1} = k_1$

4.  A.N. : $v_1 = \frac{40.5 - 45}{-2 - 1.5} \approx -9 \, m.s^{-1}$

5.  Déterminons le nom de la planète $(P)$ :
    Donc : $v_z = a_z t + v_0$
    Donc : $v_1 = a_z t_1 + v_0$
    Alors : $a_z = \frac{v_1 - v_0}{t_1 - 0}$
    A.N. : $a_z = -2 \, \approx -24.8 \, m.s^{-2}$

    Et puisque $g_p = -a_z$, 
    On obtient : $g_p = 24.8 \, m.s^{-2}$

6.  D'après le tableau des planètes, la planète $P$ est Jupiter

7.  Calcul de la hauteur maximale :
    D'après la courbe, on a : $h_{max} = 42 \, m$
    Au sol, on a : $z_g = 0$
    D'après la courbe de la figure (⚪), on trouve : $t_{sol} = 3.52 \, s$

8.  On a : $v_{sol} = a_z t_{sol} + v_0$
    Au sol : $v_{sol} = a_z t_{sol} + v_0$
    A.N. : $v_{sol} = 24.8 \, k \, 3.52 + 40.62$

9.  On trouve : $v_{sol} \approx -127.92 \, m.s^{-1}$

# Exercice 8

1.  Calculons le poids de la bille :
    On a : $P = m \cdot g$.
    A.N. : $P = 100 \times 10^{-3} \times 9.81 = 0.981 \, N$

2.  a - Calculons l’intensité de la poussée d’Archimède :
    On a : $F_A = pair \cdot V \cdot g$.
    A.N. : $F_A = 1.3 \times 10^{3} \cdot 12.7 \times 10^{-6} \times 9.81$  
    On trouve : $F_A = 1.62 \times 10^{-4} \, N$

3.  b - On a : 
    $$\frac{P}{F_A} = \frac{9.81 \times 10^{-1}}{1.62 \times 10^{-4}} = 6.05 \times 10^3$$
    On constate que $P \gg F_A$.

# Exercice 9

1.  a - La goutte est en chute libre, donc elle est soumise à son poids $\vec{P}$ uniquement.
    D’après la 2e loi de Newton, on a : $\vec{P} = m \vec{g}$.
    Par projection sur l'axe (Oz), on a : $m g = max$.
    Donc : $a_z = g$.
  
    Le mouvement du centre d'inertie de la goutte d’eau est rectiligne uniformément varié. Son équation du mouvement est : 
    $$z_g = \frac{gt^2}{2} + v_{0z} t + z_0$$
    Avec : $v_{0z} = 0$

    Est $z_g = 0$ donc : $z_g = \frac{gt^2}{2}$.

2.  b - Calculons la vitesse de la goutte lorsqu'elle atteint le sol.
    On a : $v_z = gt + v_{0z} = 0$.
    Donc : $v_z = g$.
    Alors, on trouve : $v_{sol} = \frac{g z_{sol}}{2}$.

3.  Donc :  
    $$t_{sol} = \sqrt{\frac{2 h}{g}}$$
    A.N. : $v_{sol} = \sqrt{2 h \cdot g}$, avec $h = 250 \, m$.

4.  Donc : $v_{sol} = \sqrt{2 \cdot 250 \cdot 9.81}$.
    A.N. : $v_{sol} \approx \sqrt{2 \cdot 10 \cdot 250} = 223.6 \, m.s^{-1}$.  
    => cette valeur de la vitesse n’est pas acceptable car, elle est très élevée!
```

<!-- Page 33 -->

```
c - On a : $v_{sol} = 223.6 \, m.s^{-1}$ et $v_l = 21 \, m.s^{-1}$
    On constate que $v_{sol} > v_l$. Ce résultat montre que l’action de l’air sur la goutte eau ne peut être considérée négligeable devant le poids de la goutte.

On a : $F_A = \rho_{air} \cdot g$
    A.N. : $F_A = 1,2 \times 3,26 \times 10^{-6} \, N$
    On trouve : $F_A = 3,12 \times 10^{-6} \, N$

On a : $P = m \cdot g$, avec $m = \rho_{eau} \cdot V$
    Donc : $P = P_{eau} \cdot V \cdot g.$
    Donc : $P = 10^3 \times 0,26 \times 10^{-6} = 2,6 \times 10^{-3} \, N$
    Alors $P > F_A$. On déduit que la poussée d'Archimède exercée par l’air sur la goutte est négligeable devant son poids.

a - Déterminons l’équation différentielle du mouvement et du centre d’inertie de la goutte d’eau
   - Le système étudié : la goutte d’eau
   - Les forces exercées sur la goutte :
       - $\vec{P}$ : son poids.
       - $\vec{f}$ : la force de frottement.
       - $F_A$ : la poussée d’Archimède (négligeable).

   - La représentation des forces 

$$ 
\text{Nuage}
$$

$$
\vec{g}
$$

$$
F_A
$$

$$
\vec{P}
$$

b - Par application de la 2ème loi de Newton on trouve: 
$$ 
\vec{P} + \vec{f} + \vec{F_A} = m \vec{g}.
$$ 

   Par projection sur l’axe $(Oz)$, on trouve :
$$ 
P - k v^2 = \rho_{eau} \frac{d v_g}{d t}.
$$ 

   - $g = \frac{k v_{eau}}{\rho_{eau}} \frac{d v_g}{d t}$
   - On a : $\frac{d v_g}{d t} = \frac{v_g}{k} \cdot g = g.$

   - On a : $v_l = \frac{\rho_{eau} v_g}{k}$
   - Donc : $k = \frac{\rho_{eau} v_g}{v_l}$
   - A.N : $k = 10^3 \times 0,26 \times 10^{-6} \times 10^{14}$

   On trouve : $k = 1,86 \times 10^{-4}$.
   Et on a : $\frac{1}{\tau} = \frac{\rho_{eau} v_g}{k}$

   Donc : $\tau = \frac{\rho_{eau} v_l}{k}$.
   A.N : $\tau = 10^3 \times 0,26 \times 10^{-6} \times \frac{1}{1,86 \times 10^{-4}}$.
   On trouve : $\tau = 1 \, s$.

d - La goutte d’eau atteint sa vitesse limite au bout d’une durée : $t = 5 \tau$.
   A.N : $\Delta t = 5 \times 1,4 = 7 \, s$.

```

```
Exercice 10

1. Montrons l'équation différentielle du mouvement.
   - Le système étudié : la bille.
   - Les forces exercées sur la bille :
       - $\vec{P}$ : Poids de la bille.
       - $F_A$ : Poussée d'Archimède.
       - $\vec{f}$ : Force de frottement.

   - Représentations des forces :

$$ 
\text{Bille}
$$

$$ 
\vec{g}
$$

$$ 
\vec{P}
$$

$$ 
F_A
$$

- Par application de la loi de Newton, on trouve :
$$ 
\vec{P} + \vec{F_A} + \vec{f} = m \vec{g}.
$$ 

   - Les projections sur l’axe $(Oz)$ donnent :
$$ 
P - F_a - f = m a_g.
$$ 

   - $ \rho_1 V g - \rho_2 V g - k v_g^2 = \rho_1 V \frac{d v_g}{dt} $
   - On a : $\frac{d v_g}{dt} = A \frac{g}{\rho_1} - B \frac{(1 - \rho_2)g}{\rho_1}.$ 

2. Déduisons que l’équation différentielle est :
$$ 
\frac{d v_g}{dt} = 3,25 v_g.
$$ 

   On a : $\frac{d v_g}{dt} = A v_g$ avec $A = \frac{k}{\rho_1}$
   A.N : $A = 7,87 \times 10^3 \cdot 8,2 \times 10^3 \, \Rightarrow 3,25 \, (S.I.)$ 

   Et $B = 7,87 \times 10^3$

   On remplace A et B dans l’équation différentielle, on trouve :
$$ 
\frac{d v_g}{dt} = 3,25 v_g.
$$ 
```

<!-- Page 34 -->

```markdown
# Déterminons l’accélération initiale $a_0$
On a $a_0 + 3,25v_g = 8,7$ avec $v_0 = 0\text{m.s}^{-1}$
Donc: $a_0 = 8,7 \text{m.s}^{-2}$

# Déterminons l’expression de $v_L$
On a $\frac{d v_g}{dt} = 3,25v_g = 8,7$
En régime permanent, on a : $v_g = v_L = cte$ donc: $\frac{d v_g}{dt} = 0$.
Alors l’équation différentielle devient : $3,25v_L = 8,7$

D’où : $v_L = \left( \frac{8,7}{3,25} \right)^{\frac{1}{n}}$

On trouve : $v_L = (2,68)^{\frac{1}{n}}$

a – D’après la courbe de la figure (⊗) on a : $v_L = 2,7\text{m.s}^{-1}$
b – D'après la courbe de la figure (⊗) on a : $\tau = 0,3 \text{s}$

## Déduisons la valeur de n
On a : $v_L = (2,68)^{\frac{1}{n}}$

$$ \ln(v_L) = \ln((2,68)^{\frac{1}{n}}) $$
$$ \Rightarrow \ln(v_L) = \frac{1}{n} \ln(2,68) $$

$$ \Longleftrightarrow n = \frac{\ln(2,68)}{\ln(v_L)} $$

### Calculs de $v_1$ et $v_2$
On a : $\frac{d v_g}{dt} = 8,7 - 3,25v_g$

Donc : $a_i = 8,7 - 3,25v_g$

Et on sait que : $v_{i+1} = a_i\Delta t + v_i$

* Pour $i = 0$ :
$$ a_0 = 8,7; v_0 = 0 $$
Donc : $v_1 = 8,7 - 3,25v_g$

* Pour $i = 1$ :
$$ a_1 = 8,7 - 3,25v_1 \times 10^{-2} $$
On trouve : $a_1 = 8,64 \text{m.s}^{-2}$
Et $v_2 = 8,64 \times 2 \times 10^{-3} + 1,74 \times 10^{-2}$

On trouve : $v_2 = 3,47 \times 10^{-2} \text{m.s}^{-1}$

# Exercice 11
Montrons l'équation différentielle du mouvement:
$$ \frac{d v_g}{dt} + A v_g = B $$ 

Le système étudié : le ballon + la station.
Les forces exercées sur le système sont :
- $\vec{P}$ : Poids de la bille.
- $\vec{F_A}$ : Poussée d'Archimède.
- $\vec{F_f}$ : Force de frottement.

### Représentation des forces :
(Insert Image)

Par application de la $2^{ème}$ loi de Newton, on a :
$$ -mg + \vec{F_A} + \vec{F_f} = m\vec{g} $$

$$ \Rightarrow \frac{d v_g}{dt} + A v_g - k v_g = \frac{m g}{m}$$

### Déterminons les paramètres $v_L$ et celle de $a_0$
On a : $\frac{d v_g}{dt} + A v_g = B$

À $t = 0$, cette équation devient : $a_0 + A v_0 = B$

Donc : $a_0 = B$ avec $B = (pairV)^{-1} g$
A.N. : $a_0 = (1,3\times3 - 1) \times 9,81 \approx 1,51 \text{m.s}^{-2}$ 

En régime permanent, on a : $v_g = v_L = cte$ donc $\frac{d v_g}{dt} = 0$.
L’équation différentielle devient : $Av_L = B$ 

Donc : $v_L = \frac{B}{A} = \frac{k}{m g}$

Alors : $v_L = \frac{1,51}{3,38}$

A.N. : $k = v_L = 1,51\text{m.s}^{-2}$

Calculez les valeurs des vitesses $v_1$ et $v_2$

On a l'équation différentielle du mouvement :
$$ \frac{d v_g}{dt} + A v_g = B $$

Avec $A = 1,28$ et $B = a_0 = 1,51\text{m.s}^{-2}$

Donc l’équation devient : $$ \frac{d v_g}{dt} + 0,38 v = 1,51 $$

Alors : $a_1 = 1,51 - 0,38v_1 + 1$ 

Pour $i = 0$, on a : $a_0 = 8,7 - 0,38v_0$

Et on a : $v_1 = a_1 \Delta t$

Et $v_2 = a_1 + v_1$

v_1 = 1,22 x $10^{-5}$ + $10^{-1}$

$$ = \frac{1,22 \times 5 \times 10^{-1}}{5 \times 10^{-1}} \text{m.s}^{-1} = 2,365 \text{m.s}^{-1}$$
```

<!-- Page 35 -->

```markdown
# Exercice 12

## Montrons l'équation différentielle du mouvement
- Le système étudié : la bille :
  - $\overline{P}$ : Poids de la bille.
  - $\overline{F}_A$ : Poussée d'Archimède.
  - $\overline{f}$ : Force de frottement.
- La représentation des forces

![Diagramme](https://example.com) <!-- Note: As per the rules, I cannot include an image -->

1. À $t_0 = 0$, cette équation devient : $a_0 + \frac{1}{2}v_0 = A$ avec : $v_0 = 0$
   Donc $a_0 = A$ avec : $A = \left(1 - \frac{4\pi r^3}{3m} \rho\right) g$
   Alors : $a_0 = \left(1 - \frac{4\pi r^3}{3m} \right) \rho g$

2. En régime permanent, on a : $v_g = v_L = \text{cte}$, donc 
   $$\frac{dv_c}{dt} = 0$$
   Alors l'équation différentielle devient : $2 r_L = A$

   D'où : $v_L = A$ avec $A = \frac{m}{6\pi \eta r^2}$
   On trouve : $v_L = \left(1 - \frac{4\pi r^3}{3m}\right) g$

   Ou bien : $v_L = \left( \frac{3m - 4\pi r^3}{18m} \right) \rho g$

3. D’après la courbe de la figure (⟳), on a : $v_L = 2,97 \, \text{m} \cdot \text{s}^{-1}$ et $a_0 = 8,67 \, \text{m} \cdot \text{s}^{-2}$

## Calculons la valeur de $\rho$
- Calculons la valeur de $\eta$.
  - On a : $a_0 = \left( -\frac{4\pi r^3}{3m} \right) \rho$
  $$ \Leftrightarrow \quad a_0 \cdot \frac{g}{\frac{4\pi r^3}{3m}} = 1 \Rightarrow \frac{4\pi r^3}{3m} \rho = 1 $$
  $$ \rho = \left( 1 - \frac{a_0}{g} \right) \cdot \frac{3m}{4\pi r^3} $$
  A.N. : $\rho = \frac{(1 - \frac{8,67}{9,81}) \cdot 3 \cdot 2 \times 10^{-3}}{4\pi (4 \times 10^{-3})^3}$

   On trouve : $\rho = 9,15 \times 10^{-2} \, \text{kg} \cdot \text{m}^{-3}$

   - Calcul de la valeur de $\eta$
   $$ v_L = \left( \frac{3m - 4\pi r^3}{18m} \right) g $$
   Donc : 
   $$ \eta = \frac{18 \cdot 1}{\frac{3 \cdot m - 4\pi r^3}{18m} \cdot g} $$

   A.N. : $\eta = \left[3 \times 2.11 \times 10^{-3} - 4 \pi (4 \times 10^{-3})^3 \cdot 9.15 \times 10^{-2}\right] \cdot \frac{1}{18 \cdot 4 \cdot 10^{-3} \cdot 9.81}$

   On trouve : $\eta = 8,17 \times 10^{-4} \, \text{Pa} \cdot \text{s}$

## a – Montrons que l'équation différentielle du mouvement peut s'écrire sous la forme suivante :
$$ \frac{dv_c}{dt} + 2 \, \nu_v = 8,67 $$

D'après la courbe, on a : $a_c = f(v_c)$ et affine d'équation $a_c = \beta v_c + A$ avec $ \beta = 8,67 - 5,78 \approx 2,92 \, \text{s}^{-1} $

Et $A = a_0 = 8,67 \, \text{m} \cdot \text{s}^{-2}$
On remplace $b$ et $A$ par leurs valeurs dans l'équation différentielle :
$$ \frac{dv_c}{dt} + 2 \, \nu_v = 8,67 $$

## b – Calculons $v_2$ et $v_4$
1. On a : $v_1 = a_1 t_1$ et $a_1 = 8,67 - 2,92v_1$
   Pour $t_1 = 1$, on a : $v_2 = a_1 (t_2 - t_1) + v_1$
   A.N. : $v_2 = 8,165 \times 10^{-2} \cdot 10^{-1} + 0,173$

   On trouve : $v_2 = 0,336 \, \text{m} \cdot \text{s}^{-1}$

   Pour $t_4$, on a : $a_4 = 8,67 - 2,92 v_4$

   A.N. : $a_4 = 8,67 - 2,92 \cdot 0,635$

   On trouve : $a_4 = 6,82 \, \text{m} \cdot \text{s}^{-2}$
```


<!-- Page 36 -->

```markdown
# Exercice 13

1. Montrons l'équation différentielle du mouvement :
   - Le système étudié : le corps $(S)$
   - Les forces exercées sur le corps $(S)$ sont :
     - $\vec{P}$ : son poids
     - $\vec{R}$ : réaction du plan incliné
   - La représentation des forces :

   ![force diagram](#)  

   D'après la 2$^{ème}$ loi de Newton, on a :
   $$\vec{P} + \vec{R} = m\vec{a}$$

   Par projection sur l'axe $(Ox)$, on trouve :
   $$P \sin(\alpha) - f = m a_x$$
   $\iff$  
   $$m g \sin(\alpha) - k v_G = m \frac{d v_G}{dt}$$  
   $\iff$  
   $$g \sin(\alpha) - \frac{k}{m} v_G = \frac{d v_G}{dt}$$ avec $A = \frac{k}{m}$.

2. Déterminons l'expression de $v_L$ et celle de $a_0$
   On a l'équation différentielle 
   $$\frac{d^2 v_G}{dt^2} + Av_G = -g \sin(\alpha)$$  
   À $t = 0$, cette équation différente devient :
   $$a_0 + A v_0 = g \sin(\alpha)$$ avec $v_0 = 0$  
   On trouve : $a_0 = g \sin(\alpha)$

   - En régime permanent on a : $v_L = cte \Rightarrow \frac{dv_L}{dt} = 0$  
   Donc : $A v_L = g \sin(\alpha)$ avec $A = \frac{k}{m}$  
   Alors : $v_L = \frac{m g \sin(\alpha)}{k}$

3. Déterminons l'expression de $\tau$ et celle de $\beta$
   On remplace la solution $v_G = \beta(1 - e^{-t/\tau})$ dans l'équation différentielle :
   $$\frac{d v_G}{dt} + Av_G = g \sin(\alpha)$$
   On trouve : 
   $$\frac{\beta}{\tau} e^{-t/\tau} + A \beta e^{-t/\tau} = g \sin(\alpha)$$  
   $\iff$  
   $$\frac{\beta}{\tau} e^{-t/\tau} \left[1 - A\right] = g \sin(\alpha) - A \beta$$

4. Montrons que $a_G = a_0 e^{-t/\tau}$
   On a : 
   $$a_G = \frac{d v_G}{dt}$$ avec $v_G = \beta (1 - e^{-t/\tau})$$  
   Donc : 
   $$ a_G = \beta \frac{d}{dt} e^{-t/\tau}$$ avec $\beta = g \sin(\alpha) \cdot \frac{m}{k} e^{-t/\tau}$

5. D'après la courbe de la figure $\circ$, on a : 
   $$a_0 = 5 \, m/s^2 \, et \, t = 0.8 \, s$$

6. Calculons la valeur de $\alpha$ et celle de $v_L$ :
   - Calculons $\alpha$ :
     - On a : $a_0 = g \sin(\alpha)$
       Donc : $\sin(\alpha) = \frac{a_0}{g}$
       A.N. : $\sin(\alpha) = \frac{5}{10} = 0.5$  
       Donc : $\alpha = 30^\circ$

   - Calculons $v_L$ :
     - On a : $a_0 = \frac{v_L}{\tau}$
       Donc : $v_L = a_0 \cdot \tau$
       A.N. : $v_L = 5 \times 0.8 = 4 \, m.s^{-1}$

7. Déduisons la valeur du coefficient de frottement :
   On a : 
   $$\tau = \frac{m}{k}$$
   Donc : $k = \frac{m}{\tau}$  
   A.N. : $k = \frac{8}{0.8} = 10 \, Kg.s^{-1}$
```

<!-- Page 37 -->

```markdown
# Mouvements plans

## Objectifs
- Savoir appliquer la deuxième loi de Newton pour établir les équations différentielles du mouvement d’un projectile en chute libre parabolique.
- Savoir déterminer les équations horaires et l’équation de la trajectoire du mouvement d’un projectile en chute libre parabolique.
- Connaître les caractéristiques de la force de Lorentz.
- Savoir déterminer l’accélération d’une particule chargée en mouvement dans un champ magnétique uniforme.
- Savoir déterminer la déviation magnétique d’une particule chargée lorsqu’elle pénètre dans une région où règne un champ magnétique.
- Savoir déterminer l’accélération d’une particule chargée en mouvement dans un champ magnétique uniforme.
- Savoir déterminer la déviation magnétique d’une particule chargée lorsqu’elle pénètre dans une région où règne un champ magnétique.

## Axes du cours
### Mouvement d’un projectile dans le champ de pesanteur uniforme
- Définition.
- Étude du mouvement d’un projectile dans le champ de pesanteur uniforme.

### Mouvement d’une particule chargée dans un champ magnétique uniforme
- Le champ magnétique uniforme.
- Influence d’un champ magnétique sur une particule chargée.
- Force magnétique "force de Lorentz"
- Étude du mouvement d’une particule chargée dans un champ magnétique uniforme.
- La déviation magnétique.

### Mouvement d’une particule chargée dans un champ électrique uniforme
- Le champ électrostatique -la force électrostatique "rappel".
- Étude du mouvement d’une particule chargée dans un champ électrostatique uniforme.
```

<!-- Page 38 -->

```markdown
# I. Mouvement d’un projectile dans le champ de pesanteur uniforme

## ☐ Définition
On appelle projectile tout corps solide lancé avec une vitesse initiale près de la surface de la terre.

## ☐ Étude du mouvement d’un projectile dans le champ de pesanteur uniforme
On lance une bille métallique de masse m à l’instant $t = 0$ avec une vitesse $v_0$ faisant un angle $\alpha$ avec le plan horizontal.
On étudie le mouvement de $G$ centre d’inertie de la bille dans un repère $R(O,\mathbf{i},\mathbf{j},\mathbf{k})$ lié à un référentiel terrestre supposé galiléen.
La résistance de l’air est considérée négligeable.

### ❖ Les composantes du vecteur accélération $\mathbf{a_G}$
La bille est en chute libre, d’après la relation fondamentale de la dynamique, on a : 
$$ \mathbf{P} = m \mathbf{a_G} $$
Donc: 
$$ m \mathbf{g} = m \mathbf{a_G} $$
Alors: 
$$ \mathbf{g} = \mathbf{a_G} $$

Par projection dans le repère $R(O,\mathbf{i},\mathbf{j},\mathbf{k})$ on trouve:
$$
\begin{align*}
a_x & = 0 \\
a_y & = -g \\
a_z & = 0
\end{align*}
$$

### ❖ Les composantes du vecteur vitesse $\mathbf{v_G}$
Déterminons les composantes de la vitesse $\mathbf{v_G}$.

On a : 
$$ \mathbf{a_G} = 0 \Rightarrow \begin{cases}
  a_x = 0 \\
  a_y = -g \\
  a_z = 0
\end{cases} $$

Par intégration on obtient: 
$$ \mathbf{v_G} = \begin{pmatrix}
  v_x = v_{0x} \\
  v_y = -gt + v_{0y} \\
  v_z = v_{0z}
\end{pmatrix} $$ 

avec 
$$ 
\begin{cases}
  v_{0x} = v_0 \cos(\alpha) \\
  v_{0y} = v_0 \sin(\alpha) \\
  v_{0z} = 0
\end{cases} $$

On trouve:
$$ 
\mathbf{v_G} = \begin{pmatrix}
  v_x = v_0 \cos(\alpha) \\
  v_y = -gt + v_0 \sin(\alpha) \\
  v_z = 0
\end{pmatrix} 
$$

### ❖ Les composantes du vecteur position $\mathbf{OG}$
On a : 
$$ \mathbf{v_G} = \begin{pmatrix}
  v_x = v_0 \cos(\alpha) \\
  v_y = -gt + v_0 \sin(\alpha) \\
  v_z = 0
\end{pmatrix} \Rightarrow \begin{cases}
  \frac{dx_G}{dt} = v_0 \cos(\alpha) \\
  \frac{dy_G}{dt} = -gt + v_0 \sin(\alpha) \\
  \frac{dz_G}{dt} = 0
\end{cases} $$

Par intégration, on obtient: 
$$ 
\begin{cases}
  x_G = v_0 \cos(\alpha) t + x_0 \\
  y_G = -\frac{1}{2} gt^2 + v_0 \sin(\alpha) t + y_0 \\
  z_G = z_0
\end{cases} $$

### ❖ L’équation de la trajectoire 
Pour établir l’équation de la trajectoire élimine le temps des équations horaires.
$$ 
x_G = v_0 \cos(\alpha) t 
$$ 
On a : 
$$ y_G = -\frac{1}{2} gt^2 + v_0 \sin(\alpha) t $$

D’après l’équation (2) on trouve: 
$$ t = \frac{x_G}{v_0 \cos(\alpha)} $$

On remplace $t$ dans l’équation (2) on trouve:
$$ y_G = -\frac{g}{2v_0^2 \cos^2(\alpha)} x_G^2 + x_G \tan(\alpha) $$
```

<!-- Page 39 -->

```markdown
### ❖ Les coordonnées du sommet de la trajectoire
Au sommet de la trajectoire la composante verticale de est nulle: $v_y = 0$  
Donc: $-g.t_f + v_0.\sin(\alpha) = 0 \Leftrightarrow t_f = \frac{v_0\sin(\alpha)}{g}$

On remplace $t_f$ dans les équations horaires : $OF$

$$
\begin{cases}
x_f = v_0.\cos(\alpha).t_f \\
y_f = -\frac{1}{2} g t_f^2 + v_0.\sin(\alpha).t_f
\end{cases}
$$

La flèche : est l'altitude maximale $h_{max}$ atteinte par le centre d'inertie de la bille lors de son mouvement tel que $h_{max} = y_f$.

### La portée
La portée : est la distance entre le point de lancer $O$ et le point d'impact $P$ de la bille avec le plan horizontal contenant $O$

Au point $P$ on a : $y_P = 0$  
Donc $- \frac{g}{2 v_0^2\cos^2(\alpha)} x_P^2 + x_P \tan(\alpha) = 0$  
$$
-\frac{g}{2 v_0^2\cos^2(\alpha)} x_P + \tan(\alpha) = 0 \\
\Leftrightarrow x_P = 0 \quad ou \quad -\frac{g}{2 v_0^2\cos^2(\alpha)} x_P + \tan(\alpha) = 0
$$  
Donc :  
$$
x_P = 0 \quad ou \quad -\frac{g}{2 v_0^2\cos^2(\alpha)} x_P + \tan(\alpha) = 0 \\
\Leftrightarrow x_P = \frac{v_0^2\sin(2\alpha)}{g} \\
\Leftrightarrow x_P = 2x_f
$$

---

## II Mouvement d’une particule chargée dans un champ magnétique uniforme

### ① Le champ magnétique uniforme
Un champ ... est dit uniforme, s’il est constant en direction, en sens et en valeur.  
L’unité du champ magnétique dans le (S.I) est le tesla (T)  
Le champ magnétique est uniforme entre les bobines de Helmholtz parcourues par un courant électrique.

#### Remarque
Si le vecteur $\vec{B}$ est perpendiculaire au plan de la feuille et dirigé vers l’avant on le représente par: $\overrightarrow{B} \odot$  
Si le vecteur $\vec{B}$ est perpendiculaire au plan de la feuille et dirigé vers l’arrière on le représente par: $\overrightarrow{B} \otimes$

### ② Influence d’un champ magnétique sur une particule chargée
Lorsqu’une particule chargée pénètre dans une région où règne un champ magnétique, elle se dévie.  
Cette déviation montre que la particule est soumise dans le champ magnétique à une force magnétique.

### ③ Force magnétique "force de Lorentz"
#### Définition
Toute particule chargée de vitesse $\vec{V}$ est soumise dans le champ magnétique uniforme $\overrightarrow{B}$ à une force magnétique appelée force de Lorentz donnée par la relation suivante:  
$$ \vec{F} = q.\vec{V} \wedge \vec{B} $$

#### Caractéristiques de la force de Lorentz
- **Point d'application** : la particule supposée ponctuelle
- **Direction** : la droite perpendiculaire aux vecteurs $\vec{V}$ et $\vec{B}$
- **Sens** : donné par la règle des trois doigts de la main droite.
- Le pouce indique le sens de $q.\vec{V}$
- L'index indique le sens de $\vec{B}$
- Le majeur indique le sens de $\vec{F}$.

#### Intensité : $ \vec{F} = B.q.l.\sin(\alpha)$
- $q$ : la charge de la particule en (C)  
- $v$ : la vitesse de la particule en (m.s$^{-1}$)  
- $B$ : l’intensité du champ magnétique en (T)  
- $\alpha$ : l’angle entre $\vec{V}$ et $\vec{B}$
```

<!-- Page 40 -->

```markdown
# Étude du mouvement d’une particule chargée dans un champ magnétique uniforme

Une particule chargée $(q < 0)$ pénètre avec une vitesse $V_0$ dans une région où règne un champ magnétique uniforme $\vec{B}$, de sorte que les vecteurs $\vec{B}$ et $\vec{V_0}$ soient perpendiculaires l’un à l’autre (la figure ci-contre).  
On considère le repère $(R, O, \vec{i}, \vec{j}, \vec{k})$ comme galiléen.  
Le poids de la particule est négligeable devant la force magnétique.

## L’accélération de la particule
- Les forces exercées sur la particule dans le champ magnétique uniforme sont:
  - $P$: Poids de la particule (négligeable)
  - $\vec{F}$: Force de Lorentz
  
D’après la deuxième loi de Newton on a : $\vec{F} = m \vec{a}_g$ avec $\vec{F} = q \, \vec{V} \wedge \vec{B}$.  
Donc: 
$$ \vec{a}_g = \frac{q}{m} \, \vec{V} \wedge \vec{B} $$  
Le vecteur est toujours orthogonal aux vecteurs $\vec{a}_g$ et $\vec{V}$.

## Nature de mouvement
L’accélération dans la base de Frenet $(\vec{u}, \vec{n})$ est: 
$$\vec{a}_g = a_{u} \vec{u} + a_{n} \vec{n}$$  
Puisque $\vec{a}_g \perp \vec{V}$ donc $\vec{a}_g \cdot \vec{u} = 0$ (car $\vec{V} = V \vec{i}$)

Donc: 
$$ a_{n} = -\frac{B V}{m} |\sin(\alpha)| \leftarrow \quad \left( \frac{dV}{dt} = 0 \right) $$  
$$ r = \frac{V}{a_{n}} = \frac{m}{B|\sin(\alpha)|} $$  
Si $\vec{B} \perp \vec{V}$ donc $\alpha = \frac{\pi}{2}$  
Alors on obtient:  
$$ V = V_0 = Cte $$  
$$ r = \frac{m}{B|\sin(\alpha)|} $$

Puisque $V = Cte$ et la trajectoire de la particule est circulaire de rayon constant, alors son mouvement est circulaire.

## La déviation magnétique
Un faisceau de particules identiques de charge $q$ et de masse $m$, pénètre en $O$ dans une région de largeur $l$ où règne un champ magnétique uniforme $\vec{B}$ (la figure ci-contre).  
Dans le champ magnétique, les particules décrivent un arc de cercle de rayon $R$ et sortent du champ au point $S$. À partir de ce point leur mouvement est rectiligne uniforme selon la tangente $IS$ à la trajectoire circulaire. Elles arrivent en $A$ sur l’écran (E) perpendiculaire à $OA$ et situé à la distance $L$ du point $O$.  

On définit la déviation magnétique par ; $D_m = AA'$  

D’après la figure on a
$$ \sin(\alpha) = \frac{\ell}{r} \quad \text{et} \quad \tan(\alpha) = \frac{D_m}{D} $$  
et puisque $\alpha$ est petit on a: $\sin(\alpha) \approx \tan(\alpha)$  

Alors:  
$$ \frac{\ell}{r} \Longrightarrow D_m = \frac{D_m}{L} \text{avec } r = \frac{mv}{|q| \, B} $$  

- La déviation magnétique $D_m$ est la distance entre le point $A$ où la particule touche l'écran en l'absence de champ magnétique et le point $A'$ où elle touche l'écran après avoir traversé le champ magnétique. 
- La déviation: $D_m = \frac{\ell \, |q|}{mv}B$  

La déviation dépend de la masse de la particule, l’intensité du champ magnétique et la vitesse de la particule.
```

<!-- Page 41 -->

```markdown
# I. Mouvement d’une particule chargée dans un champ électrique uniforme

## ① Le champ électrostatique « rappel »

### ❖ Définition
- Tout corps chargé crée un champ électrostatique dans l’espace qui l’entoure.
- On associe au champ électrostatique un vecteur noté $\vec{E}$ et appelé vecteur du champ électrostatique.

### Spectre du champ électrostatique
- Une ligne de champ est une courbe orientée tel qu'en chaque point, le champ électrique lui est tangent. Elle est orientée dans le sens du champ électrique.
- L’ensemble des lignes de champ forme le spectre du champ électrostatique.
- La figure ci-contre montre le spectre du champ électrostatique créé par deux charges électriques.

### ▪️ Le champ électrostatique uniforme
- Le champ électrostatique est uniforme lorsque son vecteur $\vec{E}$ conserve les mêmes caractéristiques (sens, directions et intensité) dans tous ses points: $\vec{E} = \text{cte}$.
- Les lignes du champ électrostatique uniforme sont des droites parallèles entre elles.
- On obtient un champ électrostatique uniforme entre deux plaques métalliques séparées par une distance $d$ entre les quelles est appliquée une tension électrique constante $U_{AB}$ tel que: 

$$ E = \frac{|U_{AB}|}{d} $$

## ② La force électrostatique
Toute particule chargée placée dans une région de l’espace où règne un champ électrostatique $\vec{E}$ est soumise à une force électrostatique $\vec{F}$ tel que: 

$$ \vec{F} = q\vec{E} $$

- $q$: la charge électrique en (C).
- $E$: l’intensité du champ électrostatique en $(V.m^{-1})$ ou $(N.C^{-1})$.
- $\vec{F}$: l’intensité de la force électrostatique en (N).

## ③ Étude du mouvement d’une particule chargée dans un champ électrostatique uniforme
À un instant $t = 0$, une particule $(P)$ de charge électrique $q > 0$ et de masse $m$ pénètre dans l’espace se trouvant entre deux plaques conductrices entre les quelles règne un champ électrostatique uniforme. À cet instant la particule est au point $O$ et sa vitesse initiale $\vec{v}_0$ forme un angle $\alpha$ avec le plan des deux plaques A et B. La figure ci-contre.

Étudions le mouvement de la particule $(P)$ dans un repère $R(O, \vec{i}, \vec{j}, \vec{k})$ lié à un référentiel terrestre supposé galiléen.
### ❖ Le vecteur accélération
Les forces exercées sur la particule $(P)$ dans le champ électrostatique sont:
- $\vec{P}$: Poids de la particule (négligeable)
- $\vec{F}$: Force électrostatique.

- Le poids de la particule chargée est négligeable devant l’intensité de la force électrostatique exercée sur cette particule dans un champ électrostatique.
 
Par application de la relation fondamentale de la dynamique, on a: 

$$ \vec{F} = m\vec{a} $$

Alors: 

$$ \vec{a} = -\frac{q}{m}\vec{E} $$

Le vecteur accélération $\vec{a}$ d’une particule chargée en mouvement dans le champ électrostatique est donné par:

$$ \vec{a} = -\frac{q}{m}\vec{E} $$
```

<!-- Page 42 -->

```markdown
## Les équations différentielle du mouvement
- Par projection du vecteur accélération dans le repère $R(O, \vec{i}, \vec{j}, \vec{k})$ on trouve:
$$
\frac{dx}{dt} = 0 \\
\frac{dy}{dt} = -\frac{qE}{m} \\
\frac{dz}{dt} = 0
$$

## Les composante du vecteur vitesse
- On a :
$$
\vec{v} = 
\begin{cases}
v_x = v_{0x} \\
v_y = -\frac{qE}{m}t + v_{0y} \\
v_z = v_{0z}
\end{cases}
$$
On trouve:
$$
\vec{v} = 
\begin{cases}
v_x = v_0 \cos(\alpha) \\
v_y = v_0 \sin(\alpha) \\
v_z = 0
\end{cases}
$$

## Les équations horaires du mouvement
- On a :
$$
\vec{v} = 
\begin{cases}
v_x = v_0 \cos(\alpha) \\
v_y = -\frac{qE}{m}t + v_0 \sin(\alpha) \\
v_z = 0
\end{cases}
\Leftrightarrow
\begin{cases}
\frac{dx}{dt} = v_0 \cos(\alpha) \\
\frac{dy}{dt} = -\frac{qE}{m}t + v_0 \sin(\alpha) \\
\frac{dz}{dt} = 0
\end{cases}
$$
Par intégration, on obtient:
$$
\begin{cases}
x = v_0 \cos(\alpha) t + x_0 \quad (x_0 = 0) \\
y = -\frac{qE}{2m} t^2 + v_0 \sin(\alpha) t + y_0 \quad (y_0 = 0) \\
z = z_0 \quad (z_0 = 0)
\end{cases}
$$
On trouve:
$$
OP: 
\begin{cases}
x = v_0 \cos(\alpha) t \\
y = -\frac{qE}{2m} t^2 + v_0 \sin(\alpha) t \\
z = 0
\end{cases}
$$

## L’équation de la trajectoire
- Pour établir l’équation de la trajectoire élimine le temps des équations horaires.
On a :
$$
\begin{cases}
x = v_0 \cos(\alpha) t \qquad (1) \\
y = -\frac{qE}{2m} t^2 + v_0 \sin(\alpha) t \qquad (2)\\
z = 0
\end{cases}
$$
D’après l’équation $(1)$ on trouve: 
$$
t = \frac{x}{v_0 \cos(\alpha)}
$$
On remplace $t$ dans l’équation $(2)$ on trouve:
$$
y = -\frac{qE}{2m} \frac{x^2}{v_0^2 \cos^2(\alpha)} + x \tan(\alpha)
$$

## Étude de quelques cas particuliers
- **Premier cas:** Le vecteur vitesse initiale $\vec{v_0}$ parallèle au vecteur du champ électrostatique $\vec{E} (\alpha = 90^\circ)$.
$$
\begin{cases}
v_x = 0 \\
v_y = -\frac{qE}{m} t + v_0 \\
v_z = 0
\end{cases}
$$
Les équations horaires du mouvement deviennent:
$$
\begin{cases}
x = 0 \\
y = -\frac{qE}{2m} t^2 \\
z = 0
\end{cases}
$$
Dans ce cas, le mouvement de la particule dans le champs électrostatique uniforme est rectiligne uniformément varié (accéléré).

- **Deuxième cas:** Le vecteur vitesse initiale $\vec{v_0}$ perpendiculaire au vecteur du champ électrostatique $\vec{E} (\alpha = 0^\circ)$.
$$
\begin{cases}
v_x = v_0 \\
v_y = -\frac{qE}{m} t \\
v_z = 0
\end{cases}
$$
Les équations horaires du mouvement deviennent:
$$
\begin{cases}
x = v_0 t \\
y = -\frac{qE}{2m} t^2 \\
z = 0
\end{cases}
$$
Dans ce cas, le mouvement de la particule est parabolique.
```

<!-- Page 43 -->

```markdown
# Exercice 1

Lors d’une situation militaire défensive, un soldat a tenté d’abattre un hélicoptère. Pour ce faire, le soldat dirige le canon de son véhicule militaire sous un angle $\alpha$ avec le plan horizontal.  
Le canon lance à un instant $t = 0$, une bombe de masse $m$ avec une vitesse initiale $V_0$.  
Etudions le mouvement de $G$ le centre d’inertie de la bombe dans un repère $R(O, \hat{i}, \hat{j})$ lié à un référentiel terrestre supposé galiléen.

## Données
- L’angle d’inclinaison : $\alpha = 45°$
- La distance OM est : $d = 1,5km$
- L’altitude de l’hélicoptère : $h = 500m$
- L’intensité de pesanteur : $g = 10N.kg^{-1}$

1. Exprimer la vitesse $V_0$ dans le repère $R(O, \hat{i}, \hat{j})$  
2. En appliquant la deuxième loi de Newton, exprimer l’accélération $\vec{a}_G$ du centre d’inertie $G$ de la bombe dans le repère $R(O, \hat{i}, \hat{j})$  
3. Déterminer les expressions des équations horaires du mouvement  
4. Déduire l’équation de la trajectoire $y = f(x)$.  
5. Trouver la valeur de la vitesse initiale $V_0$ pour que la bombe abatte l’hélicoptère.  
6. La bombe touche l’hélicoptère à un instant $t_N$. Calculer $t_N$.  
7. Déduire la valeur de $V_N$ la vitesse de $G$ à l’instant $t_N$.

---

# Exercice 2

Pendant une séance d’entraînement et en absence du vent, un joueur de golf a essayé de trouver les conditions initiales pour envoyer une balle de golf de masse $m$ d’un point $O$ . Et le faire tomber dans un trou $Q$, un arbre de hauteur $H$ se trouvant entre le point $O$ et le trou $Q$.

## Données
- Masse de la balle de golf: $m = 45g$
- Accélération de pesanteur: $g = 10m.s^{-2}$
- La hauteur de l’arbre : $h = 4,5m$
- L’abscisse de la racine de l’arbre: $x_K = 15m$
- L’abscisse du trou: $x_Q = 120m$
- La vitesse initiale de la balle: $v_0 = 40m.s^{-1}$
- L'angle d'inclinaison: $\alpha = 20°$

À l’instant $t = 0$, le joueur a envoyé la balle d’un point $O$ avec une vitesse initiale $v_0$ formée un $\alpha$ angle avec le plan horizontal. Etudions le mouvement de $G$ centre d’inertie de la balle dans le repère $R(O, \hat{i}, \hat{j}, \hat{k})$ lié à un référentiel terrestre supposé galiléen.  
L’action de l’air sur la balle est considérée négligeable.

1. Déterminer les composantes de la vitesse initiale $v_0$.  
2. En appliquant la deuxième loi de Newton, déterminer les composantes de l’accélération de $G$ centre d’inertie de la balle.  
3. On se basant sur les résultats de la question précédente et par intégration, trouver les composantes de la vitesse $v_G$.
4. Déterminer les composantes du vecteur position $\overrightarrow{OG}$ du point $G$.  
5. Montrer que l’équation de la trajectoire de $G$ est:  
$$ y = \frac{-g}{2v_0^2\cos^2(\alpha)}x^2 + x\tan(\alpha). $$  
6. On considère un point $B$ sur la trajectoire de $G$ d’abscisse $x_B = OK$ et d’ordonnée $y_B$.  
   - a. Calculer la valeur de $y_B$.  
   - b. Vérifier que la balle dépasse l’arbre sans le toucher.  
7. Trouver les coordonnées du point $P$ d’impact de la ballon avec l’axe des abscisses $(Ox)$. Le ballon est-il passé du trou $Q$ ? Justifier la réponse.

---
```


<!-- Page 44 -->

```markdown
## Exercice 3
On lance, à un instant $t = 0$ et à partir d’un point $A$, un corps solide ($S$) de petites dimensions, de masse $m$ avec une vitesse initiale $v_0$ horizontale. Le solide ($S$) tombe sur le point d'impact $P$ (la figure ∘).

On étudie le mouvement de $G$ centre d'inertie du ballon dans le repère $R(O, \mathbf{i}, \mathbf{j}, \mathbf{k})$ lié à un référentiel terrestre supposé galiléen.
On suppose que le solide est soumis uniquement à son poids.

**Données**
- L’intensité de pesanteur: $g = 10 \, \text{m.s}^{-2}$
- L’ordonnée du point $A$: $y_A = h = 1 \, \text{m}$

1. En appliquant la deuxième loi de Newton, établir les expressions des équations horaires $x(t)$ et $y(t)$ du mouvement de $G$.
2. En déduire l’expression latérale de l’équation de la trajectoire du mouvement de $G$.
3. La courbe de la figure ∘ montre l’évolution temporelle des composantes de la vitesse $v_G$ 
   - a) Identifier les courbes (a) et (b)
   - b) Déterminer la valeur de la vitesse $v_0$ 
4. Le solide arrive au point $t_p$ à l’instant $t_p$. Calculer la valeur de $t_p$
5. Calculer la valeur de la vitesse $v_P$ du point $G$ à au point $P$.
6. Calculer la distance $AP$.

## Exercice 4
Durant un match de basket-ball et à un instant $t = 0$, un joueur lance le ballon à partir d’un point $A$ avec une vitesse $v_A$ formant un angle $\alpha$ avec le plan horizontal passant par $A$ (la figure ∘).

On étudie le mouvement de $G$ centre d’inertie du ballon basket-ball lancé dans le repère $R(O, \mathbf{i}, \mathbf{j})$ lié à un référentiel terrestre supposé galiléen. 
On ne tiendra pas compte des forces exercées par l’air sur le ballon.

**Données**
- $h_A = 2,4 \, \text{m}; \, h_B = 3,10 \, \text{m}; \, h_C = 3,05 \, \text{m}; \, x_C = 6,25 \, \text{m}; \, \alpha = 40°; \, g = 10 \, \text{m.s}^{-2}$
  
1. En appliquant la deuxième loi de Newton, établir les expressions des équations horaires $x(t)$ et $y(t)$ du mouvement de $G$.
2. En déduire l’expression latérale de l’équation de la trajectoire du mouvement de $G$.
3. Déterminer la valeur de la vitesse initiale $v_0$ du ballon pour que celui-ci passe exactement au centre $C$.
4. Calculer la valeur de $v_C$ la vitesse au point $C$ du panneau.
5. Calculer la hauteur maximale par rapport au sol du ballon durant sa trajectoire.
6. Un défenseur $BD$, placé entre l’attaquant et le panneau de basket saute verticalement pour intercepter le ballon; l’extrémité de sa main se trouve en $B$ à l’altitude $h_B$. Déterminer les abscisses des positions où le défenseur doit se trouver pour toucher le ballon du bout des doigts.

## Exercice 5
Un avion de guerre supersonique est animé d’un mouvement rectiligne uniforme à la vitesse $v_0 = 400 \, \text{m.s}^{-1}$ et une altitude $h = 2 \, \text{km}$, son radar a détecté un véhicule de transport de soldats enemis supposé ponctuel, immobile au point $A$, le pilote a décidé de l’attaquer.

En passant par $O$, origine du repère $R(O, \mathbf{i}, \mathbf{j})$, l’avion a lâché, à un instant $t = 0$, une bombe qui après quelques secondes a détruit complètement le véhicule et a tué tous les soldats.
```

<!-- Page 45 -->

```markdown
## En négligeant la résistance de l'air, et en appliquant la deuxième loi de Newton à la bombe déterminer les composants selon l'axe (Ox) et selon (Oy) de l'accélération de son centre d'inertie G.
1. Établir les équations horaires du mouvement de G selon les deux axes.
2. En déduire l'équation de la trajectoire de G relativement au repère R(O, $\hat{i}$, $\hat{j}$).
3. À quelle distance de la verticale passant par O se trouve le véhicule ? On donne $g = 10 \, m.s^{-2}$.
4. Déterminer la date d'arrivée de la bombe au véhicule.
5. Où se trouvait l’avion à la date d’arrivée de la bombe au véhicule ?
6. Déterminer la valeur de ma vitesse de l'impact de la bombe avec le véhicule.

### Exercise 6
À un instant $t_0 = 0$, on lance une bille métallique de masse $m$ à partir d'un point A avec une vitesse initiale $v_A$ formant un angle $\alpha$ avec le plan horizontal. La figure ci-contre.
On étudie le mouvement de G centre d'inertie de la bille dans le repère R(O, $\hat{i}$, $\hat{j}$) à un référentiel terrestre supposé galiléen.

La figure donne l'évolution temporelle des équations horaires $y(t)$ et $x(t)$ du centre d'inertie de la bille.
La droite (D) est la tangente à la courbe $y(t)$ à l’instant $t_0$.
1. En négligeant la résistance de l'air, et en appliquant la deuxième loi de Newton à la bombe déterminer les composants selon l'axe (Ox) et selon (Oy) de l'accélération de son centre d'inertie G.
2. Établir les équations horaires du mouvement de G selon les deux axes.
3. Montrer que l'équation de la trajectoire peut s'écrire sous la forme : 

$$ y(x) = (1 + \tan^2 \alpha) g \frac{x^2}{2 v_A^2} + H $$

4. En exploitant la courbe de la figure déterminer :
   a. La valeur de hauteur H.
   b. La valeur de la vitesse initiale $v_A$.
   c. La valeur de l'angle $\alpha$.
   d. Les coordonnées du sommet de la trajectoire du centre d'inertie de la bille.
5. La bille tombe en un point B sur une table de hauteur $h = 2m$.
   a. Déterminer à quelle date, la bille touche la table.
   b. Calculer la vitesse d'impact de la bille avec la table.
   On rappelle que : 

$$ \cos^2 \alpha = 1 + \tan^2 \alpha $$

et on donne $g = 10 \, m.s^{-2}$.

### Exercise 7
Dans cet exercice, on étudie le mouvement de chute de deux corps (A) et (B) dans le repère R($\hat{i}$, $\hat{j}$) lié à un référentiel terrestre supposé galiléen. Le point O est situé au niveau du sol.

On néglige la poussée d'Archimède devant les autres forces et on prend l’intensité de la pesanteur : $g = 10 \, m.s^{-2}$.

#### I- Étude de la chute d'un corps avec frottement
À un instant choisi comme origine des dates ($t = 0$), on lâche, sans vitesse initiale d'un point H, un corps solide (A) de masse $m_A = 0,5 kg$.

En plus de son poids, le solide (A) est soumis à une force de frottement fluide $\vec{f} = -k \vec{v_A}$ où $\vec{v_A}$ est le vecteur vitesse de $G_A$ à un instant $t$ et K une constante positive (avec $k > 0$).

1. Montrer que l’équation différentielle du mouvement vérifiée par la composante $v_{yA}$ selon l’axe (Oy) du vecteur vitesse $\vec{v_A}(t)$ s'écrit :

$$ m_A \frac{d v_{yA}}{dt} + k v_{yA} + g = 0 $$
```

<!-- Page 46 -->

```markdown
# La courbe de la figure représente l’évolution de $v_{yA}$ au cours du temps. Déterminer la valeur de la vitesse limite et celle de $\tau$ et déduire la valeur de $k$.
- Déterminer, en utilisant la méthode d’Euler, la vitesse $v_{yA} (t_i)$ à un instant $t_i$ sachant que l’accélération à l’instant $t_{i-1}$ est $a_{yA} (t_{i-1}) = -4,089 \, \text{m.s}^{-2}$ et que le pas de calcul est: $\Delta t = 0,01s$.
  
## II-Étude d’un projectile dans le champ de pesanteur
- On considère que le centre d’inertie $G_A$ du corps $(A)$ passe par le point $F$ d’altitude $h_F = 18,5 \, \text{m}$ par rapport au sol, on lance un projectile $(B)$, de masse $m_B$ et de centre d’inertie $G_B$, d’un point $P$ de coordonnées $P(0,h_F)$ avec une vitesse initiale $v_0$ faisant un angle $\alpha (0 < \alpha < \frac{\pi}{2})$ avec l’horizontale (figure 0).
- On choisit cet instant comme nouvelle origine des dates $(t_0 = 0)$ pour le mouvement de $(A)$ et celui de $(B)$.
- On néglige les frottements pour le projectile $(B)$ et on donne : $h_p = 1,8 \, \text{m}$ ; $v = 20 \, \text{m.s}^{-1}$
- Exprimer les coordonnées du point $S$, somme de la trajectoire de $(B)$, en fonction de $t$ et $\alpha$.
- Les deux corps $(A)$ et $(B)$ se rencontrent au point $S$ (on considère que $G_A$ coïncide avec $G_B$ en $S$).
- Déterminer l’angle $\alpha$ correspondant sachant que le corps $(A)$ passe par $F$ avec sa vitesse limite et que les mouvements de $(A)$ et $(B)$ s’effectuent dans le même plan $(\alpha, \beta)$.

## Exercice 8
Dans cet exercice, on étudie le mouvement du corps solide $(S)$ de petites dimensions sur un plan incliné ainsi que son mouvement de chute parabolique dans le champ de pesanteur. L’action de l'air et les frottements sont négligeables sur les deux parties.

### I-Étude du mouvement du corps $(S)$ sur le plan incliné
On envoie le solide $(S)$ avec une vitesse initiale $v_0$ sur une pente $OA$ incliné d’un angle $\alpha$ par rapport au plan horizontal.
- Étudions le mouvement de $G$, centre d’inertie du corps $(S)$ dans un repère $R_1(O, \vec{i_1}, \vec{j_1})$ lié à un référentiel terrestre supposé galiléen. La figure 0
- À l’aide d’une caméra numérique on enregistre le mouvement de $G$. Les résultats obtenus ont permis de tracer la courbe représentant l’évolution de la vitesse $v_G$ en fonction du temps et on obtient l’une des trois courbes ci-dessous.

####  ÉLECTRON &  2BAC-PC- SM & Mécanique
```

<!-- Page 47 -->

```markdown
# Exercice 8

1. Par application de la relation fondamentale de la dynamique exprimer l’accélération $\alpha_{x1}$ en fonction de $g$. Déduire la nature du mouvement.
2. Choisir parmi les rois courbe; celle qui représente les variations de la vitesse $v_G$ en fonction du temps. Justifier votre choix.
3. En exploitant la courbe $g = f(t)$, déterminer les vitesses $v_0$ et $v_A$ et l'accélération $\alpha_1$.
4. Calculer la valeur de l'angle $\alpha$.
5. Trouver l’expression de la distance $OA$ en fonction de $\alpha_{x1}, v_0$ et $v_A$ puis calculer sa valeur.
6. II-Étude du mouvement de chute parabolique du corps $(S)$
   - Le centre d’inertie du corps $(S)$ atteint le point $A$ à un instant comme nouvelle origine des dates $(t_0 = 0)$. Étudions le mouvement de l’axe d’inertie du corps $(S)$ dans un repère $R_2 (l_2, j_2)$ lié à un référentiel terrestre supposé galiléen.
   - En appliquant la deuxième loi de Newton, établir les expressions des équations horaires de la vitesse $v_{x2}(t)$ et $v_{y2}(t)$ en fonction du temps.
7. Établir les expressions des équations horaires du mouvement $x_2(t)$ et $y_2(t)$ en fonction du temps.

   $$ y_2 = -6,67 \times 10^{-2}x_2^2 + 0,58x_2 + 40 $$

8. Déterminer les coordonnées du sommet de la trajectoire du point $G$.
9. Le centre d’inertie $G$ tombe sur l’axe en un point $C$.
   - $b$ - Calculer la distance $BC$.
   - $c$ - Calculer la vitesse de $G$ au point $C$.

# Exercice 9

Pour chacun des cas suivants et en exploitant la règle des trois doigts de la main droite indique le sens du vecteur manquant (la force de Lorentz $\vec{F}$, le vecteur du champ magnétique $\vec{B}$ ou le vecteur vitesse $\vec{V}$)

- $q > 0$ 

  $$ \vec{v} \quad \longrightarrow \quad \vec{B} $$

- $q < 0$

  $$ \vec{v} \quad \longrightarrow \quad \vec{B} \circledast $$

- $q > 0$

  $$ \vec{F} \quad \longrightarrow \quad \vec{v} \quad \longrightarrow \quad \vec{B} $$

- $q < 0$

  $$ \vec{F} \quad \longrightarrow \quad \vec{v} \quad \longrightarrow \quad \vec{B} \circledast $$

# Exercice 10

Un proton se pénètre avec une vitesse $\vec{V}$ dans une zone d’espace où règne un champ magnétique uniforme $\vec{B}$ d'intensité $B = 20mT$. Lors du mouvement de l’électron dans le champ magnétique uniforme, le module de sa vitesse reste constant et son vecteur vitesse $\vec{V}$ reste perpendiculaire au vecteur du champ magnétique $\vec{B}$.

- Charge élémentaire: $e = 1,6 \times 10^{-19}c$
- Données:
  - La vitesse de l’électron dans le champ magnétique: $V = 3,2 \times 10^{4} Km.s^{-1}$
  - La masse de l’électron: $m = 9,1 \times 10^{-31} Kg$
  - L’intensité du champ magnétique: $B = 50mT$
  - L’intensité de la pesanteur: $g = 10N.Kg^{-1}$

1. Calculer l’intensité du poids $\vec{P}$ de l’électron.
2. Calculer l’intensité de la force de Lorentz $\vec{F}$ exercée sur l’électron dans le champ magnétique uniforme.
3. Calculer le rapport $\frac{F}{e}$ et conclure.
4. Calculer la valeur de l’accélération de mouvement de l’électron dans le champ magnétique uniforme.
5. Déduire la valeur du rayon de la trajectoire du mouvement de l’électron dans le champ magnétique uniforme.
```

<!-- Page 48 -->

```markdown
## Exercice 11
Trois particules $(A)$, $(B)$ et $(C)$, pénètrent à la même vitesse $V_0$ dans une zone où règne un champ magnétique uniforme $\vec{B}$ perpendiculaire à la vitesse $V_0$.
La figure ci-contre donne les trajectoires des trois particules dans le champ magnétique uniforme.
- Quelle est la nature de la trajectoire de chaque particule?
- Quelle est le signe de la charge de chaque particule?

## Exercice 12
Un faisceau d’ion d’argent $Ag^{+}$ pénètre avec une vitesse $V_0$ dans une région où règne un champ magnétique uniforme $\vec{B}$, telle que $\vec{B}$ et $V_0$ sont perpendiculaires entre eux (la figure ci-contre).
### Données
- Nombre d'Avogadro : $N_A = 6,02 \times 10^{23} \text{mol}^{-1}$
- Charge élémentaire : $e = 1,6 \times 10^{-19} \text{C}$
- La vitesse de l’ion $Ag^{+}$ : $V_0 = 3,3 \times 10^5 \text{m/s}$
- L’intensité du champ magnétique : $B = 1 \text{T}$
  
1. Déterminer les caractéristiques de la force de Lorentz $\vec{F}$ au point $O$.
2. En appliquant la deuxième de Newton sur l’ion $Ag^{+}$, montrer que son mouvement est circulaire et uniforme, en déterminant l’expression du rayon $R$ sa trajectoire en fonction de $B$, $e$, $V_0$ et $m$.
3. Le rayon de la trajectoire de la particule $Ag^{+}$ est : $R = 36,6 \text{cm}$. Calculer la valeur de sa masse $m$.
4. Déduire la valeur de la masse molaire de la particule $Ag^{+}$ étudiée.

## Exercice 13
Des particules $\alpha(He^{2+})$ animées d’une vitesse $V_0$ pénètrent dans une zone où règne un champ magnétique uniforme $\vec{B}$ perpendiculaire à la vitesse $V_0$.
On suppose que les particules $\alpha$ sont soumises seulement à la force de Lorentz.
### Données
- La masse de $He^{2+}$ : $m = 6,64 \times 10^{-27} \text{kg}$
- La vitesse des particules : $V_0 = 2 \times 10^{3} \text{km/s}$
- L’intensité de champ magnétique : $B = 0,3 \text{T}$
- La charge élémentaire : $e = 1,6 \times 10^{-19} \text{C}$

1. Déterminer les caractéristiques de la force de Lorentz $\vec{F}$ exercée sur la particule $\alpha$ au point $O$.
2. Préciser le sens du vecteur $\vec{B}$.
3. En appliquant la deuxième de Newton sur la particule $\alpha$, montrer que son mouvement est circulaire uniforme, en déterminant l’expression du rayon $R$ sa trajectoire en fonction de $B$, $e$, $V_0$ et $m$.
4. Calculer la valeur de $R$.

## Exercice 14
On veut séparer des ions $^{79}Br^{-}$ et $^{81}Br^{-}$ de masses respectivement $m_1$ et $m_2$. Ces ions pénètrent à partir d’une fente $O$, dans une région, où règne un champ magnétique uniforme $\vec{B}$.
### Données
- Nombre d'Avogadro : $N_A = 6,02 \times 10^{23} \text{mol}^{-1}$
- Charge élémentaire : $e = 1,6 \times 10^{-19} \text{C}$
- La vitesse de l’ion $^{79}Br^{-}$ : $V_1 = 98850 \text{m/s}$
- La vitesse de l’ion $^{81}Br^{-}$ : $V_2 = 97730 \text{m/s}$
- L’intensité du champ magnétique : $B = 0,17 \text{T}$

1. Calculer les masses des ions $m_1$ et $m_2$.
2. Déterminer les caractéristiques de la force de Lorentz $\vec{F_1}$, exercée sur l’ion $^{79}Br^{-}$ au point $O$.
3. Déterminer le sens du vecteur de champ magnétique $\vec{B}$.
4. En appliquant la deuxième de Newton sur l’ion $^{79}Br^{-}$, montrer que son mouvement est circulaire uniforme, en déterminant l’expression du rayon $R_1$ sa trajectoire en fonction de $B$, $e$, $V_1$ et $m$.
5. Déduire l’expression du rayon $R_2$ de la trajectoire de ion $^{81}Br^{-}$.
6. Calculer la distance $MN$ séparant les points d'impact des deux ions.
```

<!-- Page 49 -->

```markdown
## Exercice 15

Deux particules chargées $Li^+$ et $X^{2+}$, sont introduites en un point $O$, avec la même vitesse initiale $\vec{V}$, dans un espace où règne un champ magnétique uniforme $\vec{B}$, perpendiculaire au vecteur $\vec{V}$. On considère que les particules $Li^+$ et $X^{2+}$ sont soumises seulement à la force de Lorentz.

La figure ci-contre représente les trajectoires de deux particules dans le champ $\vec{B}$.
- Données
  - La masse de $Li^+: m_{Li} = 6,015u$
  - La vitesse des particules : $V = 89700 \text{ m/s}$
  - L’intensité de champ magnétique : $B = 0,5 \text{ T}$
  - La charge élémentaire : $e = 1,6 \times 10^{-19} \text{ C}$
  
1. Déterminer les caractéristiques de la force de Lorentz $F_1$ exercée sur la particule $Li^+$ au point $O$.
2. Préciser le sens du vecteur $\vec{B}$.
3. En appliquant la deuxième de Newton sur l’ion $Li^+$, montrer que son mouvement est circulaire uniforme, en déterminant l’expression du rayon de $R_1$ sa trajectoire en fonction de $B$, $e$, $V$ et $m_1$.
4. En exploitant les données de la figure ci-contre, déterminer le rapport $\frac{R_2}{R_1}$, avec $R_2$ est le rayon de la trajectoire de la particule $X^{2+}$.
5. Sachant que la particule $X^{2+}$, se trouve parmi les trois ions proposés dans le tableau ci-dessus. Identifier en justifiant la réponse la particule $X^{2+}$.

## Exercice 16

Le spectrographe de masse sert à séparer les isotopes d'un élément chimique. Cet exercice consiste à séparer les deux ions $^{22}Na^+$ et $^{24}Na^+$ de sodium $Na$.

Les isotopes de sodium sont ionisés dans la chambre d'ionisation en produisant deux ions $^{22}Na^+$ et $^{24}Na^+$ qui arrivent à une fente $O_1$ avec une vitesse négligeable. Elles sont accélérées dans la chambre d'accélération, puis pénètrent avec les vitesses respectivement $V_1$ et $V_2$ la chambre de déviation où règne un champ magnétique uniforme $\vec{B}$.
- Données
  - La masse de $^{22}Na^+: m_1 = 36,5 \times 10^{-27} \text{ Kg}$
  - La masse de $^{24}Na^+: m_2 = 39,8 \times 10^{-27} \text{ Kg}$
  - La vitesse de $^{22}Na^+: V_1 = 93600 \text{ m/s}$
  - La vitesse de $^{24}Na^+: V_2 = 89700 \text{ m/s}$
  - L’intensité de champ magnétique : $B = 0,2 \text{ T}$
  - La charge élémentaire : $e = 1,6 \times 10^{-19} \text{ C}$

1. Déterminer les caractéristiques de la force de Lorentz $F_1$ exercée sur l'ion $^{22}Na^+$ au point $O_2$.
2. En appliquant la deuxième loi de Newton, montrer que le mouvement de la particule $^{22}Na^+$ dans la chambre de déviation est circulaire et uniforme de rayon $R_1 = \frac{m_1 V_1}{eB}$. (Le poids de la particule est négligeable)
3. Déduire l'expression du rayon de courbure de la particule $^{24}Na^+$.
4. Les particules $^{22}Na^+$ et $^{24}Na^+$ sont détectées aux points respects $A_1$ et $A_2$, calculer la distance $A_1A_2$.
5. En utilisant la règle du trois doigts de la main droite, indiquer sur le schéma le sens du vecteur de champ magnétique $\vec{B}$.
6. Calculer la valeur de la vitesse de rotation $w_{1}$ et celle de la période $T_{1}$ du mouvement de la particule $^{22}Na^+$.

## Exercice 17

Un faisceau d'électrons homocinétique pénètre à la même vitesse $\vec{V}$ en un point $O$ d'une région de largeur $\ell$. Dans cette région règne un champ magnétique uniforme de vecteur $\vec{B}$ (voir la figure suivante).
1. Préciser le sens du vecteur $\vec{B}$.
2. Donner l'expression de la puissance de la force de Lorentz puis calculer sa valeur. Déduire que la valeur de la vitesse d'un électron dans le champ magnétique uniforme est constante? (Le poids de la particule est négligeable).
3. Exprimer l'accélération de rotation dans la base de Frenet. Déduire l'expression du rayon de sa trajectoire en fonction de $B$, $e$, $V$ et $m$.
```

<!-- Page 50 -->

```markdown
### Montrer que: 

$$ \sin \alpha = \frac{e \cdot E \cdot B}{m \cdot v} $$

On suppose que $L \ll \ell$ ( $\ell \ll L$ ) exprimer la déviation $D_m$ en fonction de $e$ et $L$.

On admet que $e$ est très petit ($\tan \alpha \approx \sin \alpha$). 

Exprimer la déviation $D_m$ en fonction $B, e, V, m, \ell$ et $L$, puis calculer sa valeur.

#### Données :
- La masse de l'électron: $m = 9,1 \times 10^{-31} \text{kg}$
- La vitesse de l'électron: $V = 2,3 \times 10^{7} \text{m.s}^{-1}$
- L'intensité du champ magnétique: $B = 30 \text{mT}$
- La charge élémentaire: $e = 1,6 \times 10^{-19} \text{C}$
- Les distances: $\ell = 2 \text{cm}, L = 80 \text{cm}$

---

### Exercice 18

On place dans le vide deux plaques métalliques $A$ et $B$ distantes de $d$. Entre ces deux plaques on établit une tension électrique $U_{AB}$.

À un instant $t = 0$, un électron pénètre au point $O$ avec une vitesse initiale $V_0 = V_0^i$.

On étudie le mouvement de l'électron dans un repère orthonormé $R(O, \overrightarrow{i}, \overrightarrow{j})$ tel que son axe $(Ox)$ soit dans le plan médian des deux plaques. La figure ci-contre.

1. Reproduire la figure et représenter sur laquelle le vecteur champ électrique $\overrightarrow{E}$.
2. Exprimer le vecteur champ électrique $\overrightarrow{E}$ dans le repère $R(O, \overrightarrow{i}, \overrightarrow{j})$.
3. Montrer que le poids de l'électron est négligeable devant la force électrique.
4. Par application de la relation fondamentale de la dynamique, déterminer les composantes de l'accélération $\overrightarrow{a}$ dans le repère $R(O, \overrightarrow{i}, \overrightarrow{j})$.
5. Déterminer les coordonnées du vecteur vitesse de l'électron $\overrightarrow{V}$ dans le repère $R(O, \overrightarrow{i}, \overrightarrow{j})$.
6. Déterminer les équations horaires du mouvement $x(t)$ et $y(t)$ de l'électron dans le repère $R(O, \overrightarrow{i}, \overrightarrow{j})$.
7. Déduire que l'équation de la trajectoire de l'électron dans le champ électrique est: 
   $$y(x) = \frac{e \cdot U_{AB}}{2 \cdot m \cdot V_0^2} x^2$$
8. L'électron qui le champ électrique en un point $S$. Déterminer les coordonnées du point $S$ ainsi que la valeur de la vitesse de l'électron en ce point.

#### Données :
- La masse de l'électron: $m = 9,1 \times 10^{-31} \text{kg}$
- La vitesse initiale de l’électron: $V_0 = 4 \times 10^{7} \text{m.s}^{-1}$
- La tension entre les deux plaques: $U_{AB} = 2 \text{kV}$
- La charge élémentaire: $e = 1,6 \times 10^{-19} \text{C}$
- La distance entre les plaques: $d = 5 \text{cm}$
- L’intensité de la pesanteur: $g = 10 \text{m.s}^{-2}$

---

### Exercice 19

On place dans le vide deux plaques métalliques $P_1$ et $P_2$ séparées par une distance de $d = 10 \text{cm}$. Entre ces deux plaques on applique une tension électrique $U = 12 \text{kV}$.

À un instant $t = 0$, un faisceau de particules $\alpha(He^{2+})$ pénètre en $O$ entre ces deux plaques $P_1$ et $P_2$ avec une vitesse initiale $V_0 = V_0^i$ orthogonale au plan des plaques.

On néglige le poids de la particule $\alpha(He^{2+})$ devant la force électrique et étudier son mouvement dans un repère orthonormé $R(O, \overrightarrow{i}, \overrightarrow{j})$.

1. Reproduire la figure et représenter sur laquelle le vecteur champ électrique $\overrightarrow{E}$.
2. Exprimer la force électrique $\overrightarrow{F}$ dans le repère $R(O, \overrightarrow{i}, \overrightarrow{j})$.
3. Par application de la relation fondamentale de la dynamique, déterminer l’expression de l’accélération $a_x$ en fonction de $U, m, e$ et $d$. Déduire la nature du mouvement de la particule $\alpha(He^{2+})$.
```

<!-- Page 51 -->

```markdown
### Exercice 20

1. Déterminer l'équation horaire du mouvement $x(t)$ et $V_x(t)$.

2. Exprimer la vitesse du passage de $\alpha(He^{2+})$ par l'orifice $S$ en fonction de $V_0$ et $m$. Calculer sa valeur.
   - **Données :**
     - La masse de la particule $\alpha(He^{2+})$: $m = 6,64 \times 10^{-27} \text{ Kg}$.
     - La vitesse de l'électron: $V = 15 \text{ km.s}^{-1}$.
     - La tension entre les deux plaques: $U = 1,2 \text{ kV}$.
     - La charge élémentaire: $e = 1,6 \times 10^{-19} \text{ C}$.
     - La distance entre les plaques: $d = 10 \text{ cm}$.

---

On applique dans le vide, entre deux plaques conductrices, une tension électrique $U_{AB}$.
À un instant $t = 0$, un faisceau d'électrons pénètre au point $O$ avec une vitesse initiale $V_0 = V_{0i}$ orthogonale au plan des plaques. Ce faisceau atteint la plaque $B$ avec une vitesse nulle.
On néglige le poids de l'électron devant la force électrique et on étudie son mouvement dans un repère orthonormé $R(O, \vec{i}, \vec{j})$.

3. Déterminer le signe de la tension $U_{AB}$.

4. Exprimer le vecteur champ électrique $\vec{E}$ dans le repère $R(O, \vec{i}, \vec{j})$.

5. Par application de la relation fondamentale de la dynamique, déterminer l’expression de l’accélération $a_x$ en fonction de $U_{AB}, m, d$ et $O$. Où est la distance séparant les deux plaques.

6. Trouver l’expression des heures du mouvement $x(t)$ et $V_x(t)$.

7. Trouver l'expression de la vitesse $V_0$ en fonction de $U_{AB}, m$ et $e$. Calculer la valeur de $V_0$.
   - **Données :**
     - La masse de l'électron: $m = 9,1 \times 10^{-31} \text{ Kg}$.
     - La tension entre les plaques: $|U_{AB}| = 2 \text{ kV}$.
     - La charge élémentaire: $e = 1,6 \times 10^{-19} \text{ C}$.

---

### Exercice 21

Le dispositif schématisé dans la figure ci-contre permet d’étudier l’accélération et la déviation d’un faisceau d’électrons. À l’intérieur de ce dispositif règne un vide poussé.
On néglige le poids de l'électron devant les forces électriques et on étudie son mouvement dans un repère orthonormé $R(O, \vec{i}, \vec{j})$.

- **Données :**
  - La masse de l'électron: $m = 9,1 \times 10^{-31} \text{ Kg}$.
  - La distance entre $P_1$ et $P_2$: $d_1 = 3 \text{ cm}$.
  - La tension entre les plaques $P_1$ et $P_2$: $|U_1| = 4 \text{ kV}$.
  - La distance entre les plaques $P_3$ et $P_4$: $d_2 = 20 \text{ cm}$.
  - La tension entre les plaques $P_3$ et $P_4$: $|U_2| = 18 \text{ kV}$.
  - La charge élémentaire: $e = 1,6 \times 10^{-19} \text{ C}$.

I- Étude du mouvement dans la chambre d’accélération
1. À un instant $t = 0$, les électrons pénètrent en point $O$ entre les deux plaques métalliques $P_1$ et $P_2$ séparées par une distance $d_1$ avec une vitesse nulle. Entre ces deux plaques on applique une tension électrique $U_1$.
Ces électrons atteignent la plaque $A$ avec une vitesse $V_A$.

2. Déterminer le signe de la tension $U_1$.

3. Par application de la relation fondamentale de la dynamique, déterminer l’expression de l’accélération $a_1$ en fonction de $U_1, m, d_1$ et $e$.

4. Déterminer les équations horaires du mouvement $x(t)$ et $V_x(t)$.

5. Trouver l'expression de la vitesse $V_A$ de l'électron à l’orifice $A$, en fonction de $U_1, m$ et $e$, puis calculer sa valeur.

6. Calculer $t_a$ la durée de passage de l'électron par l'orifice $A$.

II- Étude du mouvement dans la chambre de déviation
Les électrons pénétrent en $A$ entre les deux plaques métalliques $P_3$ et $P_4$ séparées par une distance $d_2$. Entre ces deux plaques, l'on applique une tension électrique $U_2$.
```

<!-- Page 52 -->

```markdown
# ÉLECTRON & 2BAC-PC-SM

## Correction

### Exercice 1

1. L’expression de la vitesse $\vec{V}_0$ dans le repère $\mathcal{R}(O,\vec{i},\vec{j})$:
   - $V_{0x} = V_0 \cos(\alpha)$
   - $V_{0y} = V_0 \sin(\alpha)$
   - $V_{0z} = 0$

2. L’accélération $\vec{a}_G$ du centre d’inertie $G$ de la bombe dans le repère $\mathcal{R}(O,\vec{i},\vec{j})$:
   - La bombe est en chute libre, d’après la relation fondamentale de la dynamique, on a: $\vec{P} = m\vec{a}_G$
   - Donc: $m\vec{g} = m\vec{a}_G \Rightarrow \vec{g} = \vec{a}_G$

3. Par projection dans le repère $\mathcal{R}(O,\vec{i},\vec{j},\vec{K})$:
   - On trouve: 
     - $a_x = 0$
     - $a_y = -g$
     - $a_z = 0$

4. Déterminons les expressions des équations horaires du mouvement:
   - Les composantes du vecteur vitesse $\vec{V}_G$:
     - $V_x = V_{0x}$
     - $V_y = V_{0y} + V_0y$
     - $V_z = V_{0z}$

   Par intégration on obtient: $\vec{V}_G$
   - $\left\{\begin{array}{l}
   V_x = V_0 \cos(\alpha) \\
   V_y = -gt + V_0 \sin(\alpha) \\
   V_z = 0
   \end{array}\right.$

5. On trouve: $\vec{v}_G$
   - $\left\{\begin{array}{l}
   V_x = V_0 \cos(\alpha) \\
   V_y = -gt + V_0 \sin(\alpha) \\
   V_z = 0
   \end{array}\right.$

6. Les composantes du position $\vec{S}_G$:
   - On a: $\frac{dx_G}{dt} = V_x = V_0 \cos(\alpha)$
   - $\frac{dy_G}{dt} = -g + V_0 \sin(\alpha)$
   - $\frac{dz_G}{dt} = 0$

### (a)
- $\int_{0}^{t} V_x dt$
- $\int_{0}^{t} V_y dt$
- $\int_{0}^{t} V_z dt$

### (b)
1. Par intégration, on obtient:
   - $x_G = V_0 \cos(\alpha) \cdot t + x_0$
   - $y_G = -\frac{1}{2} gt^2 + V_0 \sin(\alpha) \cdot t + y_0$
   - $z_G = z_0$
   - Avec:
     - $x_0 = 0$
     - $y_0 = 0$
     - $z_0 = 0$

2. Déduisons l’équation de la trajectoire $y = f(x)$.
   - Pour établir l’équation de la trajectoire élimine le temps des équations horaires.
   - On a: $y_G = -\frac{g}{2V_0^2\cos^2(\alpha)} x_G^2 + x_G \tan(\alpha)$

3. D’après l’équation (a) on trouve: 
   - $y_G = \frac{-g}{2V_0^2\cos^2(\alpha)} x_G^2 + x_G \tan(\alpha)$
   - On remplace $t$ dans l’équation (b) on trouve: 
   - $y_G = \frac{-g}{2V_0^2\cos^2(\alpha)} x_G^2 + x_G \tan(\alpha)$

4. Trouvons la valeur de la vitesse initiale $V_0$ pour que la bombe abatte l’hélicoptère.
   - Pour abattre l’hélicoptère doit passer par son centre d’inertie $N$ de coordonnées $y_N = h$ et $y_N = h$.

5. On remplace et dans l’équation de trajectoire, on trouve: 
   $$ h = -\frac{g}{2V_0^2\cos^2(\alpha)} a^2 + d.tan(\alpha) $$

6. On obtient:
   - $V_0^2 = \frac{g\cdot d\cdot tan(\alpha) - h}{\frac{g \cdot d}{2V_0^2\cos^2(\alpha)}}$

7. A.N.: $V_0 = \sqrt{2}$

8. Sur le temps $t_N$:
   - On a: $x_G = V_0 \cos(\alpha) \cdot t$

9. Au point N, on trouve: 
   - $d = V_0 \cos(\alpha) \cdot t_N$

10. Donc: $t_N = \frac{d}{150 \cdot cos(45)}$
    - A.N.: $t_N = 14.14 s$

11. Calculons la valeur de $V_N$.
    - On a: $V_x = V_0 \cos(\alpha)$
    - Au point N, on trouve: 
    - $V_y = -gt + V_0 \sin(\alpha)$
```

<!-- Page 53 -->

```markdown
Au point $N$, on trouve :
$$
V_x = V_0 \cos(\alpha) \\
V_y = -g t_N + V_0 \sin(\alpha)
$$
A.N. : $V_x = 150 \cos(45°) = 106.1 \, \text{m.s}^{-1}$  
Et $V_y = -10 \times 14,4 + 150 \sin(45°) = -35,33 \, \text{m.s}^{-1}$

Donc : 
$$
V_N = \sqrt{V_x^2 + V_y^2} 
$$
A.N. : $V_N = \sqrt{106,12 + (-35,33)^2}$  
On trouve : $V_N = 111,8 \, \text{m.s}^{-1}$

# Exercice 2

1. L’expression de la vitesse $\vec{V}_0$ dans le repère $R(O, \vec{i}, \vec{j})$ :
$$
\begin{cases}
V_{0x} = V_0 \cos(\alpha) \\
V_{0y} = V_0 \sin(\alpha) \\
V_{0z} = 0
\end{cases}
$$

2. L’accélération $\vec{a}_G$ du centre d’inertie $G$ de la balle dans le repère $R(O, \vec{i}, \vec{j})$ :
- La balle est en chute libre, d’après la relation fondamentale de la dynamique, on a : 
$$
\vec{P} = m \vec{a}_G 
$$ 
Donc : $m\vec{g} = m\vec{a}_G$  
Alors : $\vec{g} = \vec{a}_G$.

- Par projection dans le repère $R(O, \vec{i}, \vec{j}, \vec{K})$ :
$$
\begin{cases}
a_x = 0 \\
a_y = -g \\
a_z = 0
\end{cases}
$$

3. Déterminons les composantes de la vitesse $\vec{v}_G$ :
On a :
$$
\begin{cases}
a_x = 0 \\
a_y = -g \\
a_z = 0
\end{cases}
$$

Par intégration on obtient : 
$$
\vec{v}_G = 
\begin{cases}
v_{0x} = v_{0} \cos(\alpha) \\
v_{0y} = -gt + v_{0} \sin(\alpha) \\
v_{z} = v_{0z} = 0
\end{cases}
$$
Avec : $v_0^0 = v_0 \cos(\alpha)$
$$
\begin{cases}
V_x = v_0 \cos(\alpha) \\
V_y = -gt + v_0 \sin(\alpha) \\
V_z = 0
\end{cases}
$$

4. Déterminons les composantes du vecteur position $\vec{OG}$ :
On a :
$$
\begin{cases}
V_x = V_0 \cos(\alpha) \\
V_y = -gt + V_0 \sin(\alpha) \\
V_z = 0
\end{cases}
$$

Par intégration, on obtient :
$$
\begin{cases}
x_G = v_0 \cos(\alpha) \cdot t \\
y_G = -\frac{1}{2} gt^2 + v_0 \sin(\alpha) \cdot t + y_0 \text{ avec } x_0 = 0 \\
z_G = z_0 = 0
\end{cases}
$$

D’où :
$$
\begin{cases}
x_G = v_0 \cos(\alpha) \cdot t \\
y_G = -\frac{g}{2v_0^2 \cos^2(\alpha)} x_G^2 + x_G \tan(\alpha)
\end{cases}
$$

5. Pour établir l’équation de la trajectoire élimine le temps des équations horaires.  
On a : 
$$
\begin{cases}
x_G = v_0 \cos(\alpha) \cdot t \text{ (a)} \\
y_G = -\frac{1}{2} gt^2 + v_0 \sin(\alpha) \cdot t \text{ (b)}
\end{cases}
$$

D'après l'équation (a) on trouve : 
$$
t = \frac{x_G}{v_0 \cos(\alpha)}
$$
On remplace $t$ dans l'équation (b) et on trouve :
$$
y_G = -\frac{g}{2v_0^2 \cos^2(\alpha)} x_G^2 + x_G \tan(\alpha)
$$

6. Calculons $y_B$ :
Au point $B$ cette équation devient :
$$
y_B = \frac{-g}{2v^2 \cos^2(\alpha)} x_B^2 + x_B \tan(\alpha)
$$
A.N. : $y_B = \frac{2 \times 40^2 \cos^2(20°)}{10}$  

7. Trouvons les coordonnées du point $P$ :
Le point $P$ se trouve sur l’axe des abscisses, donc :
$$
y_P = 0
$$
Et on a :
$$
y_P = \frac{g}{2v^2 \cos^2(\alpha)} x_P^2 + x_P \tan(\alpha) = 0
$$
C'est à dire :
$$
x_P \left[ \frac{g}{2v^2 \cos^2(\alpha)} x_P + \tan(\alpha) \right] = 0
$$
Alors :
$$
x_P = 0 \quad \text{ou} \quad \frac{g}{2v^2 \cos^2(\alpha)} x_P + \tan(\alpha) = 0
$$
D'où :
$$
x_P = \frac{2v^2 \cos^2(\alpha) \tan(\alpha)}{g}
$$

On a bien : 
$$
x_P = \frac{40^2 \sin(20°)}{g}
$$
A.N. : $x_P \approx 102,85$
```

<!-- Page 54 -->

```markdown
# Exercice 3

1. Les équations horaires du mouvement
   - **Les composantes du vecteur accélération $\mathbf{a_G}$**
     - Le solide $(S)$ est en chute libre, d'après la relation fondamentale de la dynamique, on a : $\mathbf{P} = m \mathbf{a_G}$
     Donc : $\mathbf{m} \cdot \mathbf{g} = m \mathbf{a_G}$
     Alors : $\mathbf{g} = \mathbf{a_G}$.
   - Par projection dans le repère $\mathcal{R}(O, \mathbf{i}, \mathbf{j}, \mathbf{K})$
     on trouve:
     $$ a_x = 0 $$
     $$ a_y = -g $$
     $$ a_z = 0 $$

   - **Les composantes du vecteur vitesse $\mathbf{V_G}$**
     On a : $\mathbf{a_G} = 0 \Longleftrightarrow \left(\frac{dx}{dt} = 0, \frac{dy}{dt} = -g, \frac{dz}{dt} = 0\right)$
     Par intégration on obtient: 
     $$ \mathbf{V_G} = \begin{cases}
     v_x = v_0 \\
     v_y = -gt + v_{0y} \\
     v_z = v_{0z}
     \end{cases} $$

   Avec $v_0 = \sqrt{v_{0x}^2 + v_{0y}^2 + v_{0z}^2} = 0$
   On trouve: 
   $$ \mathbf{V_G} = \begin{cases}
   v_x = v_0 \\
   v_y = -g \cdot t \\
   v_z = 0
   \end{cases} $$

   - **Les composantes du vecteur position $\mathbf{O_G}$**
     On a : 
     $$ \frac{dx_G}{dt} = v_0 $$
     $$ \frac{dy_G}{dt} = -g \cdot t $$
     $$ \frac{dz_G}{dt} = 0 $$
     Par intégration, on obtient: 
     $$ \mathbf{O_G} = \begin{cases}
     x_G = v_0 t + x_A \\
     y_G = -\frac{1}{2} gt^2 + y_A \\
     z_G = z_A
     \end{cases} $$

     Avec $(x_A = 0, y_A = h \text{ donc } \mathbf{O_G} = \begin{cases}
     x_G = v_0 t \\
     y_G = -\frac{1}{2} gt^2 + h \\
     z_G = 0
     \end{cases})$

2. Dédions l'équation de la trajectoire $y = f(x)$. Pour établir l'équation de la trajectoire élimine le temps des équations horaires.
   On a :
   $$ \begin{cases}
   x_G = v_0 \cdot t \quad (* )\\
   y_G = -\frac{1}{2} gt^2 + h \quad (**) 
   \end{cases} $$

   D’après l’équation (**), on trouve: $t = \frac{x_G}{v_0}$.
   On remplace dans l’équation $(**)$ on trouve:
   $$ y_G = -\frac{g}{2v_0^2} x_G^2 + h $$

3. a - Identification des courbes (a) et (b)
   - On a : $V_x = V_0 = cte$, donc sa courbe associée est la courbe (a).
   - Et on a : $V_y = -gt$, qui est une fonction linéaire, donc sa courbe associée est la courbe (b).
   
   b - D’après la courbe, on a : $V_0 = 16 \text{ m.s}^{-1}$.

4. Calculons la valeur de $t_P$.
   On a : $y_G = -\frac{gt^2}{2} + h$.
   Au point $P$, on trouve: $y_P = -\frac{g t_P^2}{2} + h$.
   Donc: $$ \frac{gt^2}{2} = y_A - y_P = 2(y_A - y_P) $$
   Alors : $$ t^2_P = \frac{2(y_A - y_P)}{g} $$

   D'où : $$ t_P = \sqrt{\frac{2(y_A - y_P)}{g}} $$
   A.N. : $t_P = \frac{8}{10} = 0.45 s$.
   On obtient: $t_P \approx 0.45$ s.

5. Calculons la valeur de $\mathbf{V_P}$. 
   On a : 
   $$ \begin{cases}
   v_x = v_0 \\
   v_y = -g \cdot t_P 
   \end{cases} $$
   Au point $P$, on trouve: 
   $$ v_x = v_0 $$
   Donc : 
   $$ v_y = -10 \cdot 0.45 = -4.5 \text{ m.s}^{-1} $$

   Alors : $$ \mathbf{V_P} = \sqrt{v_x^2 + v_y^2} = \sqrt{16^2 + (-4.5)^2} $$
   On obtient: $\mathbf{V_P} \approx 16.6 \text{ m.s}^{-1}$.

6. Calculons la distance $AP$.
   On a : 
   $$ A_P = (y_P - y_A)^2 + (x_P - x_A)^2 $$
   Avec : $x_P = V_0 \cdot t_P$ et $y_A = h$ et $x_A = 0$. 
   Donc : 
   $$ A_P = \sqrt{h^2 + (V_0 \cdot t_P)^2} $$
   A.N. : $A_P = \sqrt{12^2 + (16 \cdot 0.45)^2}$.
   On obtient: $A_P \approx 7.27$ m.
```

<!-- Page 55 -->

```markdown
### Exercice 4

1. **Les équations horaires du mouvement**
   - **Les composantes du vecteur accélération $\vec{a_G}$**
     - La balle est en chute libre, d’après la relation fondamentale de la dynamique, on a: $\vec{P} = m\vec{a_G}$
     - Donc: $m\vec{g} = m\vec{a_G}$
     - Alors: $\vec{g} = \vec{a_G}$

   - **Par projection dans le repère $R(O, i, j, k)$**
     - on trouve:
       - $a_{x_G} = 0$
       - $a_{y_G} = -g$
       - $a_{z_G} = 0$
     - 
     $$
     \Leftrightarrow 
     \begin{aligned}
     \frac{dx_G}{dt} = 0 \\
     \frac{dy_G}{dt} = -g \\
     \frac{dz_G}{dt} = 0
     \end{aligned}
     $$

   - **Par intégration on obtient: $\vec{v_G}$**
     $$
     \begin{aligned}
     v_{0x} & = v_0 \cos(\alpha) \\
     v_{0y} & = v_0 \sin(\alpha) \\
     v_{0z} & = 0
     \end{aligned}
     $$

     - On trouve:
     $$
     \begin{aligned}
     v_{x} & = v_0 \cos(\alpha) \\
     v_{y} & = -gt + v_0 \sin(\alpha) \\
     v_{z} & = 0
     \end{aligned}
     $$

   - **Les composantes du vecteur position $\vec{O_G}$**
     - On a: $\vec{O_G}$
     $$
     \begin{aligned}
     v_{x} & = v_0 \cos(\alpha) \\
     v_{y} & = -gt + v_0 \sin(\alpha) \\
     v_{z} & = 0
     \end{aligned}
     $$

     - On a: $\vec{O_G}$
     - Par intégration, on obtient:
     $$
     \begin{aligned}
     \begin{cases}
     x_G = v_0 \cos(\alpha) \cdot t + x_A \\
     y_G = -\frac{1}{2}gt^2 + v_0 \sin(\alpha) \cdot t + y_A \\
     z_G = z_A
     \end{cases}
     \end{aligned}
     $$
     avec
     $$
     \begin{aligned}
     x_A = 0 \\
     y_A = h_A \\
     z_A = 0
     \end{aligned}
     $$

     - Alors:
     $$
     \begin{aligned}
     x_G & = v_0 \cos(\alpha) \cdot t \\
     y_G & = -\frac{1}{2}gt^2 + v_0 \sin(\alpha) \cdot t + h_A \\
     z_G & = z_A
     \end{aligned}
     $$

2. **Dédions l’équation de la trajectoire $y = f(x)$**
   - Pour établir l’équation de la trajectoire élimine le temps des équations horaires. On a:
   $$
   \begin{aligned}
   x_G & = v_0 \cos(\alpha) \quad (a) \\
   y_G & = -\frac{1}{2}gt^2 + v_0 \sin(\alpha) \cdot t + h_A \quad (b)
   \end{aligned}
   $$

   - D’après l’équation $(a)$ on trouve: 
   $t = \frac{x_G}{v_0 \cos(\alpha)}$

   - On remplace $t$ dans l’équation $(b)$ on trouve:
   $$
   y_G = -\frac{g}{2v_0^2 \cos^2(\alpha)} x_G^2 + x_G \tan(\alpha) + h_A
   $$

3. **Calculons la valeur de $v_0$**
   - On a: $y = -\frac{g x^2}{2v_0^2 \cos^2(\alpha)} + x_G \tan(\alpha) + h_A$
   - Au point C, cette relation devient:
   $$
   y_C = \frac{g}{2v_0 \cos^2(\alpha)} x_C^2 \tan(\alpha) + h_A - h_c
   $$
   - D’où:
   $$
   \frac{g}{2v_0^2 \cos^2(\alpha)} = 1
   $$
   - $v_0^2 = \frac{g x_C^2}{2 \cos^2(\alpha)(x_C \tan(\alpha) + h_A - h_c)}$
   - $v_0 \approx 8.51 \, \text{m.s}^{-1}$

4. **Calculons la valeur de la vitesse $v_C$**
   - Premièrement, calculons $t_C$.
   - On a: $x_C = v_0 \cos(\alpha) \cdot t_C$
   - Donc: $t_C = \frac{c}{v_0 \cos(\alpha)}$
   - A.N. $t_C \approx 0.96 \, s$

5. **Calculons $v_C$**
   - Au point C, on trouve:
   $$
   \begin{aligned}
   v_x & = v_0 \cos(\alpha) \\
   v_y & = -gt + v_0 \sin(\alpha)
   \end{aligned}
   $$

   - Donc:
   $$
   \begin{aligned}
   v_x & = 8.51 \cos(40) \\
   v_y & = -10 \, g + 8.51 \sin(40)
   \end{aligned}
   $$

   - On trouve:
   $$
   \begin{aligned}
   v_x & = 6.52 \\
   v_y & = 4.13
   \end{aligned}
   $$
   - A.N. $v_C \approx \sqrt{(6.52)^2 + (4.13)^2} \approx 7.72 \, \text{m.s}^{-1}$
```

<!-- Page 56 -->

```markdown
### 5. Calculons la hauteur maximale de la balle
Au sommet de la trajectoire, on a : $v_y = 0$

Donc : $-g \, t_s + v_0 \sin(\alpha) = 0$

Alors : $t_s = \frac{v_0 \sin(\alpha)}{g} \quad (*)$

Et, on a : $h_{\max} = y_s \, S$ et le sommet de la trajectoire

Donc : $h_{\max} = \frac{g \, (v_0 \sin(\alpha))^2}{2} + h_A \quad (**)$

On remplace $(**)$ dans $(**)$, on trouve : $h_{\max} = \frac{g}{2 v_0^2 \sin^2(\alpha)} + h_A$

$$
\Longleftrightarrow h_{\max} = \frac{v_0^2 \sin^2(\alpha)}{2g} + h_A
$$

A.N. $h_{\max} = \frac{(9,25) \times \sin^2(40)}{2 \times 10} \approx 2,4 \text{ m} \approx 3,9 \text{ m}$

### 6. Déterminons les abscisses des positions du défenseur pour que ses doigts touchent la balle.
On a : $y_G = -\frac{g x_D^2}{2 v_0^2 \cos^2(\alpha)} + x_D \tan(\alpha) + h_A$

Au point B, on trouve : $y_B = R = -\frac{g x_B^2}{2 v_0^2 \cos^2(\alpha)} + x_D \tan(\alpha) + h_A - h_C$

En remplaçant $x_D$, $v_0$, $g$, et $h_A$ par leurs valeurs, on a :

$$
-10 \, x_D^2 = \frac{-g x_B^2}{2 v_0^2 \cos^2(40)} + x_D \tan(40) + 2,4 - 3,1 + 0,125 = 0
$$

$$
2 \times (8,51) \times \cos^2(40) = -0,12 x_D^2 + 0,84 x_D - 0,575 = 0
$$

$$
\Delta = (-0,84)^2 - 4 \times (-0,12) \times (0,12) \approx (-0,575) \approx 0,43
$$

Puisque $\Delta > 0$, cette équation admet deux solutions : 

$x_{D1} = \frac{-(-0,84) \pm \sqrt{0,43}}{2 \times (-0,12)} \approx 0,77 \, m$

$x_{D2} = \frac{-0,84 \pm \sqrt{0,43}}{2 \times (-0,12)} \approx 6,23 \, m$

Donc, le défenseur doit se trouver au point d’abscisse $x_{D1} = 0,77 \, m$ ou au point $x_{D2} = 6,23 \, m$ pour qu’il touche la balle avec ses doigts.

### Exercice 5
Les composantes du vecteur accélération $\vec{a}_G$

- La bombe est en chute libre, d’après la relation fondamentale de la dynamique, on a : $\vec{P} = m \vec{a}_G$

Donc : $m \vec{g} = m \vec{a}_G$

- Par projection dans le repère $R(0,\hat{i},\hat{j},\hat{k})$

on trouve :
$$
\begin{align*}
a_x & = 0 \\
a_y & = g \\
a_z & = 0 
\end{align*}
$$

Les équations horaires du mouvement

Les composantes du vecteur vitesse $\vec{V}_G$

- On a : $\vec{a}_G$

$$
\begin{align*}
a_x & = 0 \\
a_y & = g \\
a_z & = 0 
\end{align*}
$$

Par intégration on obtient :

$$
\begin{align*}
\vec{v} & = \vec{v_0} \\
v_x & = v_0 \\
v_y & = g \, t \\
v_z & = 0
\end{align*}
$$

Avec $\vec{v_0} = (v_{0x}, v_{0y}, v_{0z})$

On a : $\vec{v_0} = (v_x, v_y, 0)$ donc : $\vec{V}_G = \begin{pmatrix}
v_x \\
v_y \\
v_z
\end{pmatrix}$
```

<!-- Page 57 -->

```markdown
# Déduisons l'équation de la trajectoire $y = f(x)$.
Pour établir l'équation de la trajectoire élimine le temps des équations horaires.

On a : $0 = x_G = v_0 \cdot t \; ( * )$

On a : 
$$
y_G = \frac{1}{2} gt^2 + h \; ( ** )
$$

D'après l'équation $( *)$ on trouve : $t = \frac{x_G}{v_0}$  
On remplace $t$ dans l'équation $( **)$ on trouve: 
$$
y_G = \frac{-g}{2v_0^2}x_G^2 + h
$$

## Déterminons l'abscisse du véhicule.
On a : $y(x) = kx^2$

Au point A, on a : $y_A = h$.

Donc : $x_A^2 = \frac{2h}{\frac{g}{2}}$ avec $2h = 2 \cdot 2 x_G h$

Alors : $x_A^2 = \frac{g}{2v_0^2}x_G h$

Donc : $x_A = \sqrt{\frac{g}{2v_0^2}x_G h}$  
A.N. : $x_A = \sqrt{\frac{2 \cdot (400) \cdot 2 \cdot 10^3}{10}} = 8 \times 10^3 \, m$

## Déterminons la date d'arrivée de la bombe au véhicule.
Au point A, on a : $x_A = V_0 \cdot t_A$.

Donc : $t_A = \frac{x_A}{V_0}$  
A.N. : $t_A = \frac{8 \times 10^3}{400} = 20 \, s$

L'avion est en mouvement rectiligne uniforme à la vitesse $V_0$.

Donc : $V_0 = \frac{d}{dt}$ avec $\Delta t = t_A - t_0$.

Alors : $d = V_0 \cdot (t_A - t_0)$  
A.N. : $d = 400 \times (20) = 8 \times 10^3 = x_A$

D'où l'avion se trouve à l'altitude $h = 2km$ du véhicule à la date $t_A = 20 \, s$.

## Calculons la vitesse d'impact de la bombe avec le véhicule.
On a : 
$$
\begin{cases}
v_x = v_0 \\
v_y = g \cdot t
\end{cases}
$$

Au point A, on trouve : 

Donc: $v_A = \sqrt{v_0^2 + (g \cdot t_A)^2}$

On trouve: 
$$
v_A = \sqrt{(400)^2 + (10 \cdot 20)^2}
$$  
A.N. : $v_A = \sqrt{(400)^2 + (200)^2}$

On trouve: $v_A = 4.47 \times 10^2 \, m.s^{-1}$

# Exercice 6
Les composantes du vecteur accélération $\vec{a}_G$

- La bille est en chute libre, d'après la relation fondamentale de la dynamique, on a : $\overrightarrow{P} = m \vec{a}_G$

Donc : $m \cdot \vec{g} = m \vec{a}_G$  
Alors : $\vec{g} = \vec{a}_G$

- Par projection dans le repère $R(O, \hat{i}, \hat{j}, \hat{k})$

On a : 
$$
\begin{cases}
a_x = 0 \\
a_y = -g \\
a_z = 0
\end{cases}
$$

## Les équations horaires du mouvement

Les composantes du vecteur vitesse $\vec{V_G}$

On a : 
$$
\begin{cases}
a_x = 0 \\
\vec{a}_G = \Rightarrow \frac{dx}{dt} = 0 \\
a_y = -g \\
a_z = 0
\end{cases}
$$

Par intégration on obtient:
$$
\begin{cases}
\vec{v_G} : v_x = v_0 \\
v_y = -gt + v_0 \\
v_z = v_0
\end{cases}
$$

Avec $v_{0A} : v_0 = v_A \cos(\alpha)$  
On trouve: 
$$
\begin{cases}
v_x = v_A \cdot \cos(\alpha) \\
v_y = -gt + v_A \cdot \sin(\alpha) \\
v_z = 0
\end{cases}
$$

## Par intégration on obtient:
D'où : 

$$
\overrightarrow{OG} : \begin{cases}
x_G = v_A \cdot \cos(\alpha) \cdot t + x_A \\
y_G = -\frac{1}{2} gt^2 + v_0 \cdot \sin(\alpha) \cdot t + H \\
z_G = z_A
\end{cases}
$$

D'où : $y_G = -\frac{1}{2} gt^2 + v_A \sin(\alpha) \cdot t + H$

# Déduisons l'équation de la trajectoire $y = f(x)$.
Pour établir l'équation de la trajectoire élimine le temps des équations horaires.

On a : 

$$
\overrightarrow{OG} : \begin{cases}
y_G = \frac{1}{2} gt^2 + v_0 \cdot \sin(\alpha) \cdot t + H \\
z_G = z_A
\end{cases}
$$

D'après l'équation $(\star)$ on trouve: $t = \frac{x_G}{v_A \cos(\alpha)}$  
On remplace $t$ dans l'équation $( **)$ on trouve: 
$$
y_G = -\frac{g}{2v_A^2 \cos^2(\alpha)} x_G^2 + H
$$
Et on sait que: $\cos^2(\alpha) = 1 + \tan^2(\alpha)$.

On trouve : $y(x) = (1 + \tan^2(\alpha)) \cdot \frac{x^2}{H} + \tan \alpha \cdot H$

a – D’après la courbe, on a : $H = y(0) = 3 \, m$  
b – Déterminons la valeur de $v_A$.

On a : 
$$
x(t) = V_0 \cdot t \\
Donc: \; V_0 = 0.24 \, \Longrightarrow \; 8.75 \, m.s^{-1}
$$
```

<!-- Page 58 -->

```
# Exercices 7

## I-Étude de la chute d'un corps avec frottement
1. Montrons l'équation différentielle du mouvement du corps (A)
   - Le système étudié : le corps (A).
   - Les forces exercées sur le corps (A) :
     - $P_A$: Poids du corps (A).
     - $F_A$: La poussée d'Archimède (négligeable).
     - $f$: La force de frottement fluide.
   - Par projection sur l'axe $(Oy)$, on trouve :
     $$ -P_A - kV_A = m \frac{dV_A}{dt} $$
     $$ \Rightarrow -mAg - kV_A = m \frac{dV_A}{dt} $$
     $$ \Rightarrow -g - \frac{k}{m_A} V_A = \frac{dV_A}{dt} $$

2. D'après la courbe, on trouve $V_I = -1 \text{ m.s}^{-1}$ et $t = 0, 1 \text{ s}$.
   - On sait que : $t = \frac{m}{k}$.
   - Donc : $k = \frac{m}{t}$. A.N. : $k \approx 5 \text{ kg.s}^{-1}$.

3. Calculons la vitesse $V_y(t_1)$ à l’instant $t_1$ :
   - On a : $V_I = a_1 - 1.4t - (g + a_1)$.
   - Et on a : $a_1 = 1.9 + 1 + V_I$.
   - Donc : $-1 = V_I = g + a_i$.
   - D'où : $V_I = -1 - \tau(g + a_i) \quad (**)$
   - On remplace $(**)$ dans ($*$), on trouve :
   $$ V_I = a_1 = a_i - 1.4t - (g + a_i -1) $$
   - On trouve : $V_f \approx -0.63 \text{ m.s}^{-1}$.

### a
- Déterminons la date de l'impact de la bille avec la table.
   - On a : $y(t) = - \frac{gt^2}{2} + v_0yt + H$.
   - En $B$, on trouve :
   $$ y_B = - \frac{gt_B^2}{2} + v_0yt_B + H $$
   - Avec $y_B = h$ donc : $h = -\frac{gt_B^2}{2} + v_0yt + H$.
   - Alors : $-\frac{gt_B^2}{2} + v_0yt + (H - h) = 0$.
   - On remplace $g, v_0, H,$ et par leurs valeurs, on trouve :
   $$ -\frac{10^2}{2} + 4t_B + H = 0 $$
   - Donc : $-5t_B^2 + 4t_B + 1 = 0$.
   - $\Delta = 42 + 4 \times 5 \times 1 = 36$.
   - Cette équation admet deux solutions $(t_B > 0)$ qui sont :
     $$ t_{B1} = \frac{-4 \pm \sqrt{36}}{2 \times (-5)} = -0.2 \text{ s} $$
     $$ t_{B2} = \frac{-4 - \sqrt{36}}{2 \times (-5)} = 0.8 \text{ s} $$
   - Puisque $t_B > 0$, alors : $t_B = 1 \text{ s}$.

### b
- Calculons la vitesse de l'impact de la bille avec la table.
   - On a :
   $$ \begin{cases}
   V_x = V_A \cos(\alpha) \\
   V_y = -g t + v_0y \\
   V_z = 0 
   \end{cases} $$
   - Au point $B$, on trouve :
   $$ \begin{cases}
   V_x = V_A \cos(\alpha) \\
   V_y = -g t + v_0y 
   \end{cases} $$
   - Donc : 
   $$ V_B = \left( V_A \cos(\alpha) \right)^2 + \left(-g t + v_0y \right)^2 $$
   - A.N. : $V_B = \sqrt{8.752 + (-10 \times 1 + 4)^2} = 10.61 \text{ m.s}^{-1}$.
```

<!-- Page 59 -->

```markdown
## II-Étude d'un projectile dans le champ de pesanteur

### Les composantes du vecteur vitesse position $OB$

On a :
$$
\begin{cases}
v_x = v_0 \cos(\alpha) \\
v_y = -gt + v_0 \sin(\alpha) \\
v_z = 0
\end{cases}
$$
⇔
$$
\begin{cases}
\frac{dx_G}{dt} = v_x = v_0 \cos(\alpha) \\
\frac{dy_G}{dt} = -gt + v_0 \sin(\alpha) \\
\frac{dz_G}{dt} = 0
\end{cases}
$$

Par intégration, on obtient :
$$
\begin{cases}
x_B = v_0 \cos(\alpha) \cdot t + x_A \\
y_B = -\frac{1}{2}gt^2 + v_0 \sin(\alpha) \cdot t + y_A \\
z_B = z_A
\end{cases}
$$

avec 
$$
\begin{cases}
x_P = 0 \\
y_P = h_P \\
z_P = 0
\end{cases}
$$

Alors : 
$$
OB \Rightarrow 
\begin{cases}
x_B = v_0 \cos(\alpha) \cdot t \\
y_B = -\frac{1}{2}gt^2 + v_0 \sin(\alpha) \cdot t + h_P \\
z_B = 0
\end{cases}
$$

### Déterminons les expressions des coordonnées du sommet de la trajectoire :
- Au sommet $S$, on a : $y_B(t_S) = 0$  
Donc : $-gt_S + v_0 \sin(\alpha) = 0$  
Alors : $t_S = \frac{v_0 \sin(\alpha)}{g} \quad (a)$

Et : 
$$
\begin{cases}
x_S = v_0 \cos(\alpha) \cdot t_S \quad (b) \\
y_S = -gt_S^2 + v_0 \sin(\alpha) \cdot t_S + h_P \quad (c)
\end{cases}
$$

On remplace l'équation $(a)$ dans les équations $(b)$ et $(c)$, on trouve :
$$
\begin{cases}
x_S = \frac{v_0^2 \sin(2\alpha)}{g} \\
y_S = -\frac{v_0^2 \sin^2(\alpha)}{2g} + h_P
\end{cases}
$$

On remplace $h_P$, $v_0$, et on trouve :
$$
\begin{cases}
x_S = 20 \sin(2\alpha) \\
y_S = 20 \sin^2(\alpha) + 1.8
\end{cases}
$$

### Déterminons la valeur de l'angle $\alpha$ :
Le corps $A$ est en mouvement rectiligne uniforme, dont l'équation horaire est $y_A(t) = V_t \cdot t + y_0$ avec $y_0 = h_F$  
Donc au point $S$ on trouve $y_A(t_S) = V_t \cdot t_S + h_F$

Alors : 
$$
y_A(t_S) = \frac{V \cdot \sin(\alpha)}{g} + h_F
$$
A.N.: $y_A(t_S) = -1 \cdot 20 \sin(\alpha) + 18.5$

D'où : $y_A(t_S) = -2 \sin(\alpha) + 18.5$  
Et on a : $y_B(t_S) 20 \sin^2(\alpha) + 1.8$

Et puisque les deux corps se rencontrent au sommet $S$, donc : $y_A(t_S) = y_B(t_S)$  
$$
\Leftrightarrow -2 \sin(\alpha) + 18.5 = 20 \sin^2(\alpha) + 1.8 
$$
$$
\Leftrightarrow 20 \sin^2(\alpha) + 2 \sin(\alpha) - 16.7 = 0 
$$
Alors : $D = 22 - 4 \cdot 20 \cdot (-16.7) = 1316$

Puisque $D > 0$, cette équation admet des solutions qui sont :
$$
\begin{cases}
\sin(\alpha_1) = \frac{-2 + \sqrt{1316}}{2 \cdot 20} \approx 0.86 \\
\sin(\alpha_2) = \frac{-2 - \sqrt{1316}}{2 \cdot 20} \approx -0.96 
\end{cases}
$$
Puisque $0 < \alpha < \frac{\pi}{2}$, la solution convenable est : $ \sin(\alpha) \approx 0.86 \Rightarrow \alpha \approx 60^\circ$

---

## I-Étude du mouvement du corps $(S)$ sur le plan incliné
### 1. Déterminons l'accélération $\alpha_1$ :
- Le système étudié : le corps $(S)$.
- Les forces exercées sur $(S)$ :
$$
\vec{P} : \text{Poids de } S. \\
\vec{R} : \text{Réaction de la piste } OA.
$$

- Par application de la relation fondamentale de la dynamique on a : 
$$
\vec{P} + \vec{R} = m \vec{g}
$$

- Par projection sur l'axe $(O_x)$, on trouve :
$$
-P \cos(\alpha) = m a_1 - \alpha_1 = -g \cos(\alpha).
$$

- Puisque $\alpha_1 = \text{cte}$, le centre d'inertie du corps $(S)$ est en mouvement rectiligne uniformément varié (ralenti car $\alpha_1 < 0$).

### 2. Le centre d'inertie du corps $(S)$, part avec une vitesse $V_0 \neq 0$, et est en mouvement rectiligne uniformément ralenti, donc la courbe $v_x = f(t)$ est la courbe $(\circ)$. 

---

### D'après la courbe $(\circ)$, on a : $V_0 = 30 \text{m.s}^{-1}$, $V_A = 10 \text{m.s}^{-1}$ et $\alpha_1 = \frac{30 - 10}{2 - 0} = -5 \text{m.s}^{-2}$.

### Calculons la valeur de $\alpha$ :
- On a : $\alpha_1 = -g \cos(\alpha)$.  
Donc: $$\cos(\alpha) = \frac{\alpha_1 - 9}{-5} = 0.5.$$  
D'où : $\alpha \approx 60^\circ$.

### 3. Trouvons l'expression de la distance $OA$ :
- Les équations horaires du mouvement sont :
$$
x_1 = x_{A1} t + V_0 t \quad x_0 = 0
$$
- Au point $A$, on a :
$$
\left(V_A = \alpha_1 t_A + V_0\right) \Rightarrow x_A = \frac{\alpha_1 t^2}{2} + V_0 t = 0
$$
```

<!-- Page 60 -->

```markdown
$$
t_a = \frac{V_a - V_0}{a_{x1}} \quad (*)
$$
$$
x_a = \frac{a_{x1}}{2} t_a^2 + V_0 t_a \quad (**)
$$
On remplace $(*)$ dans $(**)$, on trouve :
$$
x_a = \frac{a_{x1}}{2} \left( \frac{V_a - V_0}{a_{x1}} \right)^2 + \frac{V_a - V_0}{a_{x1}} 
$$
$$
\Leftrightarrow x_a = \frac{a_{x1}}{2} \left( \frac{V_a^2 - 2V_a V_0 + V_0^2}{a_{x1}^2} \right) + \frac{V_0(V_a - V_0)}{a_{x1}} 
$$
$$
\Rightarrow x_a = \frac{1}{2 a_{x1}} \left[ V_a^2 - 2V_a V_0 + V_0^2 \right]
$$
$$
\Leftrightarrow x_a = \frac{V_a^2 - V_0^2}{2 a_{x1}} 
$$
$$
x_a = \frac{V_a^2 - V_0^2}{2 a_{x1}} \quad \text{avec } OA = x_a - x_0 = x_a \text{ car } x_0 = 0 
$$
$$
\Rightarrow OA = \frac{V_a^2 - V_0^2}{2 a_{x1}} 
$$
$$
A.N. : OA = \frac{120^2 - 30^2}{2 \times (5)} = 80 \text{ m}
$$

## II-Étude du mouvement de chute parabolique du corps (S)

### Déterminations des équations horaires du mouvement
- Système étudié : le corps $(S)$.
- La force exercée sur $(S)$ : son poids $\vec{P} = m \vec{g}$.
- D'après la relation fondamentale de la dynamique :
$$
\vec{P} = m \vec{a}
$$

- Par projection dans le repère $R_2(O, \vec{i_2}, \vec{j_2})$ :
$$
\begin{cases}
a_{x2} = 0 \\
a_{y2} = -g \Rightarrow \frac{d^2x}{dt^2} = 0 \\
\frac{d^2y}{dt^2} = -g
\end{cases}
$$

- Par intégration, on trouve :
$$
\begin{cases}
v_{x2} = C_1 \\
v_{y2} = -gt + C_2
\end{cases}
$$
À $t = 0$, on a : $v_{0x} = V_a \sin(\alpha)$ et $v_{0y} = V_a \cos(\alpha)$
Donc : $C_1 = V_a \sin(\alpha)$ et $C_2 = V_a \cos(\alpha)$.

D'où :
$$
\begin{cases}
v_{x2} = V_a \sin(\alpha) \\
v_{y2} = -gt + V_a \cos(\alpha)
\end{cases}
$$

### Montrons que l'équation de la trajectoire
On a :
$$
\begin{cases}
v_{x2} = V_a \sin(\alpha) \\
v_{y2} = -gt + V_a \cos(\alpha)
\end{cases}
$$
Par intégration, on trouve :
$$
\begin{cases}
x_2 = V_a \sin(\alpha) \cdot t + x_a2 \\
y_2 = -\frac{gt^2}{2} + V_a \cos(\alpha) \cdot t + y_a2
\end{cases}
$$
Avec $x_a2 = 0$ et $y_a2 = OA \cos(\alpha)$

On a :
$$
x_2 = V_a \sin(\alpha) \cdot t + 0 
$$
$$
y_2 = -\frac{gt^2}{2} + V_a \cos(\alpha) \cdot t + OA
$$

On remplace $t = \frac{x_2}{V_a \sin(\alpha)}$ dans l’équation de $y_2$, on trouve :
$$
y_2 = -\frac{g}{2 V_a^2 \sin^2(\alpha)} x_2^2 + \frac{x_2}{V_a \sin(\alpha)} + OA \cos(\alpha)
$$
D'où : $ y_2 = -\frac{g}{2 V_a^2 \sin^2(\alpha)} x_2^2 + \frac{x_2}{V_a \sin(\alpha)} + OA \cos(\alpha)$

### Détermination des coordonnées du sommet de la trajectoire
Au sommet $S$, on a :
$$
\frac{dy}{dx} = 0 
$$
$$
\Rightarrow -6,67 \times 10^{-2} + 0,58 = 0
$$

$$
x_5 = -\frac{0,58}{-6,67 \times 10^{-2}} = 4,36 \text{ m} 
$$
On remplace $x_5$ dans l’équation de la trajectoire :
$$
y_s = -6,67 \times 10^{-2} x_5^2 + 0,58 x_5 + 40 
$$
On trouve : $y_s = 41,26 \text{ m}$

### a -- Calculons la distance BC
Au point $C$, on a $y_C = 0$.
Donc :
$$
-6,67 \times 10^{-2} x_C^2 + 0,58 x_C + 40 = 0 
$$
Donc : $0,58 - 4 \cdot 40 \cdot (-6,67 \times 10^{-2}) = 11$

Puisque $\Delta > 0$, cette équation admet deux solutions :
$$
\begin{cases}
x_{C1} = \frac{-0,58 - \sqrt{11}}{2 \times (-6,67 \times 10^{-2})} = -20,51 \text{ m} \\
x_{C2} = \frac{-0,58 + \sqrt{11}}{2 \times (-6,67 \times 10^{-2})} = 39,85 \text{ m}
\end{cases}
$$
La solution convenable est $x_{C2} = 39,85 \text{ m}$, car $x_C > 0$

### b -- Calculons la vitesse de $G$ en $C$
On a : $x_C = V_a \sin(\alpha) \cdot t_C$
Donc : 
$$
t_C = \frac{x_C}{V_a \sin(\alpha)}
$$
$$
A.N. : t_C = \frac{39,85}{10 \sin(60)} = 4,6 \text{ s}
$$
Et sait que :
$$
v_C = \sqrt{v_{Cx}^2 + v_{Cy}^2}
$$
avec : $v_{Cx} = V_a \sin(\alpha)$ et $v_{Cy} = -g t + V_a \cos(\alpha)$.
$$
v_{C} = \sqrt{(V_a \sin(60))^2 + (-g t + V_a \cos(60))^2}
$$
$$
v_C = \sqrt{(10 \sin(60))^2 + (-10 \cdot 4,6 + 10 \cdot 0,5)^2}
$$
On trouve : $v_C = 41.9 \, \text{m/s} 
$$
```

<!-- Page 61 -->

```markdown
# Exercice 9
1. Indiquons le sens du vecteur manquant (la force de Lorentz $\vec{F}$, le vecteur du champ magnétique $\vec{B}$ ou le vecteur vitesse $\vec{V}$)

   - $q > 0$
     - $\vec{F}$
     - $\vec{V}$
     - $\vec{B}$
  
   - $q < 0$
     - $\vec{F}$
     - $\vec{V}$
     - $\vec{B}$

# Exercice 10
1. Calculons le poids de l'électron
   - On a : $P = m \cdot g$
   - A.N : $P = 9,1 \times 10^{-31} \times 10 = 9,1 \times 10^{-30} \text{ N}$

2. Calculons l’intensité de la force de Lorentz
   - On a : $\vec{F} = \vec{V} \cdot \vec{B} \cdot |q| \cdot \sin(\alpha)$, avec $q = -e$ et $\alpha = \frac{\pi}{2}$
   - Alors : $\vec{F} = \vec{V} \cdot \vec{B} \cdot e$
   - A.N : $F = 3,2 \times 10^7 \times 10^{-3} \times 1,6 \times 10^{-19}$
   - On trouve : $F = 2,56 \times 10^{-13} \text{ N}$

3. Calculons le rapport $\frac{\vec{F}}{F_{13}}$
   - On a : $\frac{\vec{F}}{F_{P}} = 2,8 \times 10^{16}$
   - On constate que $F_{P} \gg \vec{F}$, donc on déduit que le poids de l’électron est négligeable devant la force de Lorentz

4. Calculons la valeur de l’accélération du mouvement de l’électron
   - D’après la relation fondamentale de la dynamique, on a: $\vec{F} = m \cdot \vec{a}$ ( $\vec{P}$ est négligeable devant $\vec{F}$)
   - Donc : $F = m \cdot a$
   - Alors : $a = \frac{F}{m}$. A.N. : $a = \frac{2,56 \times 10^{-13}}{9,1 \times 10^{-31}} = 2,8 \times 10^{17} m.s^{-2}$

5. Déduisons la valeur du rayon de la trajectoire de l’électron.
   - L’accélération dans le repère de Frenet est : $\vec{a} = \vec{a}_{u} \cdot \hat{u} + \vec{a}_{n} \cdot \hat{n}$.
   - Avec : $\vec{a}_{u} = \frac{dv}{dt} = 0 \text{ car } (V = cte)$ et $\vec{a}_{n} = \frac{v^{2}}{R}$.
   - Donc : $\vec{a} = \vec{a}_{n} \cdot \hat{n}$.
   - Alors : $a = \frac{R v^{2}}{a}$

   - D’où : $R = \frac{(3,2 \times 10^{7})^{2}}{2,8 \times 10^{17}} = 3,64 \times 10^{-2} m$

# Exercice 11
1. La trajectoire de la particule $B$ est rectiligne, tandis que, les trajectoires des deux particules $A$ et $C$ sont circulaires.
  
   - Identifions le signe de charge de chaque particule :
     - La particule $B$ est neutre, car elle ne subit pas de déviation dans le champ magnétique.
     - La particule $C$ a une charge positive,
     - La charge $A$ a une charge négative.

# Exercice 12
1. Déterminons les caractéristiques de la force de Lorentz au point $O$ :
   - Le point d'application : Point O.
   - La direction : La verticale passant par O.
   - Le sens : Vers le bas.
   - Intensité : $\vec{F} = \vec{B} \cdot \vec{V} \cdot e$
   - A.N. : $F = 1 \times 3 \times 10^{5} \times 1,6 \times 10^{-19}$
   - On trouve : $F = 5,28 \times 10^{-14} \text{ N}$

2. Montrons que le mouvement de la particule négative $Ag^{-}$ est circulaire uniforme.
   - Le système étudié : la particule $Ag^{+}$.
   - Les forces exercées sur cette particule sont :
     - $\vec{P}$ : son poids (négligeable).
     - $\vec{F}$ : la force de Lorentz.
   - Par application de la relation fondamentale de la dynamique dans la base de Frenet, on a : $\vec{F} = m \cdot \vec{a}$ avec $\vec{a} = \vec{a}_{u} + \vec{a}_{n} \cdot \hat{n}$.
   - Alors : $\vec{F} = m \cdot \vec{a}_{n} \cdot \hat{n} \text{ et } m \cdot \vec{a}_{u} = 0$.
```

<!-- Page 62 -->

```markdown
On déduit que le mouvement de l’ion $Ag^+$ est circulaire uniforme.
Calculons la masse de l’ion $Ag^+$
On a : $R = \frac{m_0}{Be} \frac{R}{V_0}$
A.N : $m = \frac{36,6 \times 10^{-2} \times 1,6 \times 10^{-19}}{3,3 \times 10^5}$

Dédions la valeur de la masse molaire de $Ag^+$
On a : $M(Ag^+) = m \cdot N_A$
A.N : $M(Ag^+) = 1,77 \times 10^{-25} \times 6,02 \times 10^{23}$
On trouve : $M(Ag^+) = 106,8 \times 10^{-3} kg.mol^{-1} = 106,8 \, g.mol^{-1}$

# Exercie 13

1. Les caractéristiques de la force de Lorentz au point $O$ :
   - Le point d’application : Le point $O$.
   - La direction : La droite verticale passant par $O$.
   - Le sens : Vers le bas.
   - L’intensité : $F = B q v$, avec $q = 2e$
   On trouve : $F = 0,3 \times 2 \times 1,6 \times 10^{-19} \times 2 \times 10^6$
   On trouve : $F = 1,92 \times 10^{-13} N$.
   
   D’après la règle des trois doigts de la main droite, on trouve que le vecteur $\vec{B}$ se dirige vers l’avant de la feuille $\vec{B}$.

2. Montrons que le mouvement de la particule $\alpha$ est circulaire uniforme :
   - Le système étudié : La particule $\alpha$.
   - Les forces exercées sur cette particule :
     - $\vec{F}$: Force de Lorentz.
     - $\vec{P}$: Son poids (négligeable).
     
   D'après la deuxième loi de Newton, on a : $\vec{F} = m \vec{a}$.

   Par projection sur la base de Frenet, on trouve :

   $$ \{ \vec{F_u} = m a_u \\ \vec{F_n} = m a_n \} $$

   Et puisque $\vec{F} = m \vec{u}$ et $\vec{v} = V_u \vec{u}$, donc $\vec{F} = m \vec{u}$

   Alors : $m a_u = 0$

   D'où :
   $$ F = ma_n $$
   avec $a_n = \frac{dv}{dt} = \frac{v^2}{R} $$

   Alors :
   $$ \frac{dv}{dt} = 2BVe = \frac{v^2}{R} $$

   D'où :
   $$ V = V_0 = cste $$
   $$ R = \frac{mv_0}{2Be} = cte $$

   On déduit que le mouvement de la particule $\alpha$ dans le champ magnétique uniforme est circulaire uniforme.

3. Calculons la valeur de $R$ :
   On a : $R = \frac{m_0}{2Be}$
   A.N : $R = \frac{6,64 \times 10^{-27} \times 2 \times 10^{3} \times 10^{-19}}{2 \times 0,3 \times 1,6 \times 10^{-19}} \approx 0,14 \, m \approx 14 \, cm$

# Exercie 14

1. Calculons les masses $m_1$ et $m_2$
   On a : $m_1 = \frac{M(79Br^-)}{N_A} \, avec \, M(79Br^-) = 799 \, g.mol^{-1}$
   A.N : $m = \frac{6,02 \times 10^{23}}{79} = 1,31 \times 10^{-22} \, g$

   Et : $m_2 = \frac{M(81Br^-)}{N_A} \, avec \, M(81Br^-) = 81g.mol^{-1}$
   A.N : $m_2 = \frac{N_A}{81} \approx 1,35 \times 10^{-22} g$

2. Déterminons les caractéristiques de la force $\vec{F_1}$ au point $O$ :
   - Le point d'application : $O$.
   - La direction : La verticale passant par $O$.
   - Le sens : Vers le bas.
   - L’intensité : $\vec{F_1} = B |q| = e$
   Donc : $\vec{F_1} = B e$. 

   A.N : $\vec{F_1} = 0,1 \times 98850 \times 1,6 \times 10^{-19}$
   On trouve : $F \approx 1,58 \times 10^{-15} N$

3. Par application de la règle de trois doigts de la main on trouve : $\vec{B}$.

4. Montrons que le mouvement de la particule $^{79}Br^-$ est circulaire uniforme :
   - Le système étudié : La particule $^{79}Br^-$.
   - Les forces exercées sur la particule $^{79}Br^-$ :
     - $\vec{P_1}$: Poids de la particule $^{79}Br^-$.
     - $\vec{F}$: Force de Lorentz exercée sur $^{79}Br^-$.
   
   Par application de la deuxième loi de Newton, on a :
   $$ \vec{F_1} = m_1 \vec{a_u} + m_1 \vec{a_n} $$

   Donc : $\vec{F_1} = m_1 a_u \hat{i} + m_1 a_n \hat{n}$

   Et puisque $\vec{F_1} = B \vec{e}$ et $F_1 = 1 \vec{v_1}$ (car $\vec{V_1} = V_u$)

   Alors : $F_1 = F_1 \vec{n_1}$ d’où : $F_1 = m_1 a_u \hat{i} + m_1 a_n \hat{n} \implies$

   $$ m_1 a_u = 0 $$
   $F_1 = m_1 a_n$

   $$ \implies \frac{dv}{dt} = 0 $$
   $$ V_1 = V_{01} = cte$$
   $$ R_1 = \frac{m_1 V_01}{Be} $$

   On déduit que le mouvement de la particule $^{79}Br^-$ dans le champ magnétique uniforme est circulaire uniforme de rayon $R_1$.

5. On a : $R_1 = \frac{m_1}{Be}$

   Par analogie, on trouve : $R_2 = \frac{m_2}{Be}$

6. Calculons la distance $MN$ :
   On a : $MN = |D_1 - D_2| \, avec \, D = 2R$
   Donc : $MN = |2R_1 - 2R_2|$

   Alors : $MN = 2 |m_1 v_{01} - m_2 v_{02}|$

   A.N : $MN = 0,1 \times 6 \times 10^{-19} \times 1,31 \times 10^{-22} \times 10^{-3} \times 98850 = 1,34 \times 10^{-22} \times 10^{-3} \times 97730$.
```

<!-- Page 63 -->

```markdown
# Exercice 15

1. Déterminons les caractéristiques de la force $F_1$ exercée sur la particule $Li^+$ au point $O$ :
   - Le point d'application : $O$.
   - La direction : La verticale passant par $O$.
   - Le sens : Vers le bas.
   - L'intensité : $F_1 = B|q|$ avec $|q| = e$
     Donc : $F_1 = BVe$  
     A.N. : $F_1 = 0, 5 \times 89700 \times 1,6 \times 10^{-19}$  
     On trouve : $F \approx 1,18 \times 10^{-15} \, N$

2. Par application de la règle de trois doigts de la main droite, on trouve que le vecteur $B$ se dirige vers l'avant de la feuille $B0$.

3. Montrons que le mouvement de la particule $Li^+$ est circulaire uniforme.
   - Le système étudié : La particule $Li^+$.
   - Les forces exercées sur la particule $Li^+$ sont :
     - $P_1$ : Poids de la particule $^7Br^-$
     - $F_1$ : Force de Lorentz exercée sur $Li^+$.
   - Par application de la 2ème loi de Newton, on a :
     $F_1 = m_{Li}a_1$.
   - Dans la base de Frenet, on a : $a = a_t\vec{u}_t + a_n\vec{n}$
     Donc : $F_1 = m_{Li}a_t \vec{u}_t + m_{Li}a_n\vec{n}$.
     Et puisque $F_1 \perp B$ et $F_1 \parallel \vec{n}$ (car $V_1 = V_u$)
     Alors : $F_1 = F_n \vec{n}$
     On trouve : $F_1 n_1 = m_{Li}a_u u_t + m_{Li}$
     $\Rightarrow \, m_{Li}a_u = 0 \, \text{avec} \, a_n = \frac{dV}{dt} \, \text{et} \, V^2 = \frac{R_1}{1}$

4. Déduisons l'expression de $R_2$ :
   - On a : $R_1 = \frac{m_{Li}V_1}{B_e}$
   - Par analogie, on trouve : $R_2 = \frac{m_xV}{2b_e}$

5. Calculons le rapport $\frac{R_2}{R_1}$ :
   D’après la figure, on a : $R_1 = 3$ et $R_2 = 6$.
   Donc : $\frac{R_2}{R_1} = \frac{6}{3} = 2$

6. Identifions la particule $X^2$ :
   - On a : $R_2 = 2 \, \text{avec} \, R_2 = \frac{m_xV}{2b_e}$
     Donc : $\frac{m_xV}{2b_e} = 2$
     $\Rightarrow \, 2m_u = 2m_x \, \Rightarrow \, m_x = 4m_{Li}$.
     A.N. : $m_x \approx 4 \times 6,015 \approx 24,06$
     Cette valeur est proche de la valeur : $m_x \approx 6,015 \, 23,85$.

# Exercice 16

1. Déterminons les caractéristiques de la force $F_1$ au point $O$ :
   - Le point d'application : $O$.
   - La direction : La verticale passant par $O$.
   - Le sens : Vers le bas.
   - L'intensité : $F_1 = B|q|$ avec $|q| = e$
     Donc : $F_1 = BVe$  
     A.N. : $F_1 = 0, 2 \times 93600 \times 1,6 \times 10^{-19}$  
     On trouve : $F \approx 3 \times 10^{-15} \, N$

2. Montrons que le mouvement de la particule $^{22}Na^+$ est circulaire uniforme.
   - Le système étudié : La particule $^{22}Na^+$.
   - Les forces exercées sur la particule $^{22}Na^+$ :
     - $P_1$ : Poids de la particule $^{22}Na^+$.
     - $F_1$ : Force de Lorentz exercée sur $^{22}Na^+$.
   - Par application de la 2ème loi de Newton, on a :
     $F_1 = m_{Na}a_1$.
   - Dans la base de Frenet, on a : $a = a_t\vec{u}_t + a_n\vec{n}$
     Donc : $F_1 = m_{Na}a_t \vec{u}_t + m_{Na}a_n\vec{n}$.
     Et puisque $F_1 \perp B$ et $F_1 \parallel \vec{n}$ (car $V_1 = V_u$)
     Alors : $F_1 = F_n \vec{n}$
     On trouve : $F_{1n1} = m_{Na}a_u u_t + m_{Na} a_n \vec{n}$
     $\Rightarrow \, m_a = 0 \, \text{avec} \, a_n = \frac{dV}{dt} \, \text{et} \, V^2 = \frac{R_1}{1}$

3. Déduisons l'expression du rayon de la particule $^{24}Na$ :
   - On a : $R_1 = \frac{m_{V_01}}{B_e}$ par analogie, on trouve : $R_2 = \frac{m_{V_02}}{eB}$

4. Calculons la distance $A_1A_2$ :
   - On a : $A_1A_2 = |D_1 - D_2| = 2R$
     $A_2 = |2R_1 - 2R_2|$
   - $A_1A_2 = 2 \frac{|m_{V_01}| - m_{V_02}|}{eB} \Rightarrow A_1A_2 = 2 \frac{m_{1V_01} - m_{2V_02}}{eB}$
   - A.N. : $A_1A_2 \approx 1,6 \times 10^{-27} \approx |36,6 \times 10^{-27} - 38,16 \times 10^{-27} \, 91574|$

5. D’après la règle des trois doigts de la main droite, on trouve que le vecteur $B$ se dirige vers l'avant de la feuille $B0$.
```

<!-- Page 64 -->

```markdown
6. Calculons la valeur de $\omega_1$ et celle de $T_1$  
On a : $V_0 = R_1 \omega_1$  
Donc : $\omega_1 = \frac{V_{01}}{R_1}$ avec : $R_1 = \frac{m_1 V_{01}}{eB}$  
Alors : $\omega_1 = \frac{V_{01} eB}{m_1}$  
D'où : $\omega_1 = \frac{eB}{m_1}$  

### A.N. : $\omega_1 = \frac{1,6 \times 10^{-19} \times 0,2}{36,6 \times 10^{-27}} \approx 8,77 \times 10^5 \text{ rad.s}^{-1}$  
Et on sait que : $T_1 = \frac{2\pi}{\omega_1}$  
### A.N. : $T_1 = \frac{2 \pi}{8,77 \times 10^5} \approx 7,16 \times 10^{-6} \text{ s} \approx 7,16 \mu s$  
On trouve : $T_1 \approx 7,16 \times 10^{-6} \text{ s}$ 

## Exercice 17  
1. Par application de la règle de trois doigts de la main droite, on trouve que le vecteur $\vec{B}$ se dirige vers l'arrière de la feuille $B_6$.  
2. Déterminons la valeur de la puissance de la force de Lorentz, et montrons que le mouvement des électrons dans le champ magnétique est uniforme puis calculer sa valeur.  
   - La valeur de la puissance de la force de Lorentz :  
     $P_F = \vec{F} \cdot \vec{V}$ et on a : $\vec{F} \perp \vec{V}$ (car $\vec{F} = q\vec{V} \wedge \vec{B}$)  
     Donc $P_F = 0$  
3. Montrons que le mouvement de la particule est uniforme :  
   Par application du théorème de l'énergie cinétique lors d'un déplacement infinitésimal on trouve :  
   $$dE_C = \sum dW(\vec{F_{ext}})$$  
   $ \Rightarrow dE_C = dW(\vec{F}) + dW(\vec{P})$  
   $ \Rightarrow dE_C = dW(\vec{F}) \text{ car } \vec{P} \approx 0$  
   $ \Rightarrow \frac{dE_C}{dt} = \frac{dW(\vec{F})}{dt}$  
   $$ \frac{dE_C}{dt} = P_F $$  
   $ \Rightarrow \frac{dE_C}{dt} = 0 \Rightarrow P_F = 0$  
   $E_C = Cte$  
   Et puisque $E_C = \frac{1}{2} mv^2$ alors : $V = cte'$  

### L’expression de l’accélération de l’électron  
- Le système étudié : L’électron.  
  - Les forces exercées sur cette particule sont :  
    - $\vec{P}$ : son poids (négligeable).  
    - $\vec{F}$ : la force de Lorentz.  
  - Par application de la relation fondamentale de la dynamique dans la base de Frenet,  
    On a : $\vec{F} = m \cdot \vec{a}$  
    Avec $\vec{a} = \vec{u} + \vec{a_n} \cdot \vec{u_t} = \frac{d\vec{v}}{dt} = 0$  
    Alors : $\vec{F} = q_n \cdot \vec{v} \wedge \vec{B}$  
    D'où : $a_n = \frac{\vec{F}}{m} = \frac{eV.B}{m}$  

4. Montrons que $\sin(\alpha) = \frac{eB}{mV}$  
   Dans le triangle $SHC$, on a : $\sin(\alpha) = \frac{HS}{SC}$  
   Donc : $\sin(\alpha) = \frac{1}{\frac{eB}{mV}}$  
   Alors : $\sin(\alpha) = \frac{mV}{eB}$  

5. Trouvons l’expression de $D_m$ :  
   On a : $\tan(\alpha) = \frac{D_m}{L} \text{ avec } A = L - OI$  
   Et puisque $L \gg l$ et $l \gg 0$, donc : $L \gg OI$  
   D'où : $L = AI$  
   Enfin, on trouve : $\tan(\alpha) = \frac{D_m}{L}$  

6. On a : $\tan(\alpha) \approx \sin(\alpha)$  
   Donc :  
   $$ \frac{D_m}{L} \approx \sin(\alpha)$$  
   Donc :  
   $$D_m = \frac{L \cdot eB}{mV}$$  
   D'où :  
   $$D_m = \frac{L \cdot eB}{mV}$$  
   ### A.N. : $D_m = \frac{80 \times 10^{-2} \times 2 \times 10^{-2} \times 1,6 \times 10^{-19} \times 30 \times 10^{-3}}{9,1 \times 10^{-31} \times 2,3 \times 10^7} \approx 22,9 m$  

## Exercice 18  
1. Le vecteur champs électrique $\vec{E}$ se dirige vers la plaque dont le potentiel le plus faible, donc vers la plaque $B$.  
2. Le vecteur champs électrique $\vec{E}$ se dirige vers la vers la plaque $B$, donc : $\vec{E} = -\vec{E}$.  
3. Montrons que le poids de la particule est négligeable devant la force électrique :  
   On a : $P = mg$ et $F = |q| \vec{E}$ avec : $E = \frac{U_{AB}}{d}$  
   Donc :  
   $$F = mg d = \frac{q\vec{E}}{d}$$  
   $$\Rightarrow  P = \frac{q\vec{E}}{d} \approx 9,1 \times 10^{-31} \times 10^{-5} \times 10^{-2} = 1,6 \times 10^{-19} \times 2 \times 10^{3}$$  
   On trouve : $P \approx 1,42 \times 10^{-16}$  
4. Puisque $P \ll 1$, le poids $P$ est négligeable devant la force électrique.  
5. Déterminons les composantes de l'accélération :  
   - Le système étudié : l’électron.  
   - Les forces exercées sur cet électron sont :  
     - $\vec{P}$ : son poids (négligeable).  
     - $\vec{F}$ : la force électrique.  
```

<!-- Page 65 -->

```markdown
- Par application de la relation fondamentale de la dynamique, on a : $\vec{F} = m \cdot \vec{a}$
- Par projection dans le repère $R(0,\hat{i},\hat{j})$, on trouve :
$$
0 = m a_x
\begin{cases}
F = ma_y \\
a_x = 0 \\
a_y = \frac{|q|E}{m}
\end{cases} 
\Rightarrow a_x = 0 \Leftrightarrow |a_y| = \frac{|q|E}{m} \text{ avec } |q| = e \text{ et } E = \frac{U_{AB}}{d} 
$$
$$
a_x = 0 \Rightarrow a_y = \frac{e U_{AB}}{dm}
$$

5. Déterminons les composantes $V_x$ et $V_y$ :
- En $O$, on a :
$$
a_x = 0 \\
a_y = \frac{e U_{AB}}{dm}
$$
$$
\frac{dV_x}{dt} = 0 \Rightarrow V_x = V_{0x} = \text{cte} 
$$
$$
\frac{dV_y}{dt} = \frac{e U_{AB}}{dm}
$$
Par intégration, on obtient :
$$
V_x = V_{0x} \\
V_y = \frac{e U_{AB}}{dm} + V_{0y}
$$
Avec $\vec{V_0} = V_{0}(\hat{i})$ donc :
$$
V_x = V_0 \\
V_y = \frac{e U_{AB}}{2dm} t
$$

6. Déterminons les équations horaires du mouvement :
- On a :
$$
\begin{cases}
V_x = V_0 \\
V_y = \frac{e U_{AB}}{dm} t
\end{cases}
\Rightarrow 
\begin{cases}
\frac{dx}{dt} = V_0 \\
\frac{dy}{dt} = \frac{e U_{AB}}{dm}
\end{cases}
$$
Par intégration, on trouve :
$$
\begin{cases}
x = V_0 t + x_0 \\
y = \frac{e U_{AB}}{2dm} t^2 + y_0
\end{cases}
$$
Avec $x_0 = y_0 = 0$ alors :
$$
\begin{cases}
x = V_0 t \\
y = \frac{e U_{AB}}{2dm} t^2
\end{cases}
$$

$$
Démontrons l'équation de la trajectoire :
$$
\begin{cases}
x = V_0 \cdot t \, ( * ) \\
y = \frac{e U_{AB} x^2}{2d \cdot m} \, ( ** )
\end{cases}
$$
D'après l'équation $( *)$, on trouve : $t = \frac{x}{V_0}$. On remplace $t$ par son expression dans l'équation $( **)$, on trouve : $y(x) = \frac{e U_{AB}}{2d m} \left( \frac{x}{V_0} \right)^2$.

7. Déterminons les coordonnées du point $S$ et la valeur de la vitesse :
- Déterminons $y_s$ et $x_s$ :
- On a : $y_s = \frac{d}{2}$
$$
A.N. : y_s = 5 \, cm
$$
Et on a : $y_s = \frac{e U_{AB} x_s^2}{2d m^\frac{1}{2}}$ donc : 
$$
x_s^2 = \frac{2d m V_y}{e U_{AB}}
$$
Alors :
$$
x_s = \sqrt{\frac{2d m V_y^2}{e U_{AB}}}
$$
$$
A.N. : x_s = \frac{2 \cdot 9.1 \times 10^{-31} \times 5 \times 10^{-2} - 2 \cdot (4 \times 10^{7})^2 \cdot 2.5 \times 10^{-2}}{1.6 \times 10^{-19} \times 2.9 \times 10^{-31} \times (4 \times 10^7)}
$$
On trouve : $x_s \approx 0.114 \, m$

- Calculons $V_s$ :
- On a : $V_s = \sqrt{V_x^2 + V_y^2}$
$$
= 
\begin{cases}
V_x = V_0 \\
V_y = \frac{e U_{AB}}{d m}
\end{cases}
$$
Alors :
$$
V_s = \sqrt{V_0^2 + \left(\frac{e U_{AB} ts}{d m}\right)^2}
$$
$$
A.N. : V_s = \left(4 \times 10^7\right)^2 + \left(\frac{1.6 \times 10^{-19} \times 2 \times 10^{3} \cdot 0.114}{5 \times 10^{-2} \cdot 9.1 \times 10^{-31} \cdot (4 \times 10^7)}\right)^2
$$
On trouve : $V_s \approx 4.44 \times 10^7 \, m/s$
```

<!-- Page 66 -->

```markdown
## Par projection sur l'axe $(Ox)$, on trouve :
$$ m_{ax} = \frac{-2eU}{d} $$
Donc : $ a_{x} = \frac{-2e}{m} $

## Déterminons les équations horaires $V_x(t)$ et $x(t)$ :
### L'expression de $V_x(t)$
On a : $ V_x(t) = \frac{-2eU}{d} \cdot t + C $
Donc : $\frac{dV_x}{dt} = \frac{-2eU}{d m} $
Par intégration, on a : $ V_x(0) = \frac{-2eU}{d m} \cdot 0 + V_0 $
Alors : $ V_x(t) = \frac{-2eU}{d m} \cdot t + V_0 $

### L'expression de $x(t)$
On a : $ V_x(t) = \frac{-2eU}{d m} \cdot t + V_0 $
Donc : $\frac{dx}{dt} = \frac{-2eU}{d m} \cdot t + V_0$
Par intégration, on a : $ x(t) = \frac{-eU}{d m} \cdot t^2 + V_0 \cdot t + C' $
Avec $ x(0) = 0, \; C' = 0 $
D'où : $ x(t) = \frac{-eU}{d m} \cdot t^2 + V_0 \cdot t $

## Calculons la vitesse de la particule à l'orifice $S$ :
On a : $ V_x(t) = \frac{-2eU}{d m} \cdot t + V_0 $
Au point $S$, on trouve : $ V_x = \frac{-2eU}{d m} \cdot t_s + V_0 $
Avec $ d = x_s $
Donc : $ d = \frac{-eU}{d m} \cdot t_s^2 + V_0 \cdot t_s (**) $
En remplaçant l'équation $(**)$ dans l'équation $(**)$, on trouve :
$$ d = \frac{eU}{d m} \cdot \left(\frac{(V_x - V_0)^2 m^2}{2eU} \right) + V_0 \cdot \frac{(V_0 - V_x)d m}{2eU} $$
$$ \iff d = \frac{-m d}{4eU} \left[V_0^2 + V_x^2 - 2V_0 V_x + (V_0 - V_x)d m \cdot \frac{1}{2eU}\right]$$
$$ d = \frac{2e}{m} \left[{\sqrt{V_x^2} - 1} \right]$$
$$ V_x^2 = \frac{4eU}{m} $$

$$ V_s = \frac{4eU}{m} V_0^2 $$
$$ A.N. : V_s = \frac{4 \cdot 1.6 \cdot 10^{-19} \cdot 1.2 \cdot 10^{3}}{6.64 \cdot 10^{-27}} + (15 \cdot 10^3)^2 $$
On trouve : $ V_s = 3.4 \times 10^{5} \, ms^{-1} $

## Déduisons la durée du mouvement dans cette particule le champ électrique
On a : $ t_s = \frac{(V_s - V_0) \cdot d \cdot m}{2e - U} $
A.N. : $ t_s = \frac{(3.4 \times 10^{-5}- 15 \cdot 10^{3}) \cdot 10^{-3} \cdot 2.64 \times 10^{-27}}{2 \cdot -e}$
On trouve : $ t_s = 5,62 \times 10^{-7} s $

---

## Exercice 20
Puisque le faisceau d'électron de charge électrique négative atteint la plaque $B$ avec une vitesse nulle, donc cette plaque est celle du potentiel le plus faible. On déduit que $U_{AB} > 0$.

Le vecteur champ électrique $\vec{E}$ se dirige vers la plaque $B$ dont le potentiel est le plus faible. Donc : $\vec{E} = E_i$.

## Déterminons l'expression de l'accélération $a_x$ de l'électron :
1. Le système étudié : l'électron.
2. Les forces exercées sur cet électron : 
   - $\vec{P}$ : son poids (négligeable).
   - $\vec{F}$ : force électrice.
3. Par application de la $2^{ème}$ loi de Newton, on a : $\vec{F} = m\vec{a}$ avec $\vec{F} = -e\vec{E}$.

## Par projection sur l'axe $(Ox)$, on trouve :
$$ -e\vec{E} = m a_{x} $$
D'où : $ a_{x} = \frac{-e \vec{E}}{d} $

## Déterminons les équations horaires du mouvement de l'électron dans le champ électrique :
### L'équation horaire de la vitesse $V_x$ :
On a : $ a_x = \frac{-e}{m} $
Alors : $\frac{dV_x}{dt} = \frac{-e}{m} $

## Par intégration, on trouve : $ V_x = \frac{-e}{m} \cdot t + C $
Et puisque $V_x(0) = V_0$, donc $C = V_0$.
D'où : $ V_x(t) = \frac{-e}{m} t + V_0$
```


<!-- Page 67 -->

```markdown
# Exercice 21

I-Étude du mouvement dans la chambre d’accélération
1. Les électrons sont accélérés entre deux plaques A et B, alors ils se dirigent vers la plaque A, dont le potentiel est le plus élevé. On déduit que $U_1 > 0$.
   
   - Déterminons l’expression de l’accélération $a_x$ :
     - Les forces exercées sur cette particule sont :
       - $\vec{P}$ : son poids (négligeable),
       - $\vec{F_1}$ : la force électrique.
     - Par application de la relation fondamentale de la dynamique, on a : $\vec{F_1} = m \cdot \vec{a_1}$, avec $\vec{F_1} = -e \vec{E_1}$
       Donc : $-e \vec{E_1} = m \cdot \vec{a_1} \Rightarrow \vec{a_1} = -\frac{e \vec{E_1}}{m}$
     - Par projection sur l'axe $(Ox)$, on trouve :
       $$ m a_{x1} = e \cdot E_1 \Rightarrow E_1 = \frac{U_1}{d_1} $$
       $$ \Rightarrow a_{x1} = \frac{e U_1}{m d_1} $$
   
2. Déterminons les équations horaires $V_x(t)$ et $x(t)$ :
   - L'expression de $V_x(t)$ :
     - On a : $a_{x1} = \frac{e U_1}{m d_1}$
       Donc : $\frac{dV_x(t)}{dt} = \frac{e U_1}{m d_1}$
     - Par intégration, on a : $V_x(t) = \frac{e U_1}{m d_1} t + C$
     - Et on a : $V_x(0) = 0 \Rightarrow C = 0$
       Alors : $V_x(t) = \frac{e U_1}{m d_1} t$

   - L'expression de $x(t)$ :
     - On a : $V_x(t) = \frac{e U_1}{m d_1} t$
       $$ \frac{dx(t)}{dt} = \frac{e U_1}{m d_1} $$
     - Par intégration, on a : $x(t) = \frac{e U_1}{2 m d_1} t^2$
       Avec $x(0) = 0$, on a : $C' = 0$
       D'où : $x(t) = \frac{e U_1}{2 m d_1} t^2$

3. Calculons la vitesse de la particule à l'orifice A
   - On a : $V_x(t) = 2 e U_1$
     Au point A, on trouve : $V_A = \frac{e U_1}{m d_1} t_A$
       Donc : $t_A = \sqrt{\frac{4 d_1 m}{e U_1}}$

II-Étude du mouvement dans la chambre de déviation
1. Puisque $U_2 > 0$, et le vecteur champ électrique se dirige toujours vers la plaque dont le potentiel le plus faible, donc : $\vec{E_2} = -\vec{E_2} \hat{j}$
   - Les électrons sont dirigés vers le haut car ils ont une charge négative (ils se dirigent vers la plaque $P_3$, dont le potentiel le plus élevé).
   
2. Déterminons les composantes $a_{x2}$ et $a_{y2}$ de l'accélération :
   - Le système étudié : l'électron.
   - Les forces exercées sur l'électron :
     - $\vec{P}$ : son poids
     - $\vec{F_2}$ : force électrique.
   - Par application de la relation fondamentale de la dynamique, on a : $\vec{F_2} = ma_2$, avec $\vec{F_2} = q \vec{E_2} = -e \hat{j}$
     Donc : $-e \vec{E_2} = ma_{2 \hat{j}}$

3. Déterminons les composantes $V_x(t)$ et $V_y(t)$ de la vitesse $\vec{V}$.
   - On a : $a_{x2} = 0$
   - $a_{y1} = \frac{e U_2}{m d_2}$
   - Sur l'axe : $\frac{dV_y(t)}{dt} = \frac{e U_2}{m d_2}$
```

<!-- Page 68 -->

```markdown
# ÉLECTRON & 2BAC-PC- SM & Mécanique

Par intégration, on trouve :
$$
\begin{cases}
V_x = C_1 \\
V_y = \frac{eU_z}{m d_2} \cdot t + C_2
\end{cases}
$$
À $t = t_A$, on a : $V_x(t_A) = V_A \Rightarrow C_1 = V_A$ et $V_y(0) = 0 \Rightarrow C_2 = -\frac{eU_z}{m d_2} t_A$.

Donc $\forall t \geq t_A$ on trouve : 
$$
V_x = V_A \quad \text{et} \quad V_y = \frac{eU_z}{m d_2} \cdot (t - t_A)
$$

### 1. Déterminons les équations horaires du mouvement.

On a :
$$
\begin{cases}
V_x = \frac{eU_z}{m d_2} \cdot t \\
\frac{dx}{dt} = V_A
\end{cases}
$$
Ainsi, 
$$
\frac{dy}{dt} = \frac{eU_z}{m d_2} \cdot t
$$

Par intégration, on trouve :
$$
\begin{cases}
x(t) = V_A \cdot t + C_3 \\
y(t) = \frac{eU_z}{2 m d_2} \cdot (t - t_A)^2 + C_4
\end{cases}
$$

Avec $x(t_A) = C_3 = d_1 - V_A \cdot t_A$ et $y(t_A) = 0 \Rightarrow C_4 = 0$.

Donc $\forall t \geq t_A$ on trouve :
$$
x(t) = V_A \cdot (t - t_A) + d_1 \quad \text{et} \quad y(t) = \frac{eU_z}{2 m d_2} \cdot (t - t_A)^2
$$

### 2. L'équation de la trajectoire.

On a :
$$
x = V_A \cdot (t - t_A) + d_1 = \frac{x - d_1}{V_A} \quad (a)
$$
Et on a :
$$
y = \frac{eU_z}{2 m d_2} \cdot (t - t_A)^2 \quad (b)
$$

On remplace l’équation dans l’équation on obtient :
$$
y(x) = \frac{eU_z}{2 m d_2} \cdot \left( \frac{x - d_1}{V_A} \right)^2
$$
Donc :
$$
y(x) = \frac{eU_z}{2 m d_2 \cdot V_A^2} \cdot (x - d_1)^2
$$

### 3. Calculons la valeur de $x_B$.

Au point $B$ cette équation devient :
$$
Y_B = \frac{eU_z}{2 m d_2} \cdot (x_B - d_1)^2 \text{ avec } Y_B = \frac{eU_z}{2} 
$$
$$
\Rightarrow d_2 = \frac{eU_z}{2 m \cdot V_A^2} \cdot (x_B - d_1)^2
$$

$$
\Rightarrow \Rightarrow m \cdot d_2 \cdot V_A^2 = eU_z \cdot (x_B - d_1)^2
$$
$$
\Rightarrow (x_B - d_1)^2 = \frac{m d_2 V_A^2}{eU_z}
$$
$$
\Rightarrow x_B - d_1 = \sqrt{\frac{m d_2 V_A^2}{eU_z}}
$$
$$
\Rightarrow x_B = \sqrt{\frac{m d_2 V_A^2}{eU_z}} + d_1
$$
$$
\Rightarrow x_B = \frac{m d_2 V_A^2}{eU_z} + d_1
$$

### A.N.
$$
x_B = \sqrt{\frac{9 \cdot 1.1 \times 10^{-31} \cdot (20 \times 10^{-2})^2 \cdot (3.75 \times 10^7)^2}{1.6 \times 10^{-19} \times 18 \times 10^3}} + 0,03 \approx 0,134 \, m
$$
```

<!-- Page 69 -->

```markdown
# Mouvement des stellites artificiels et des planètes
## Unité 9

### Objectifs
- Savoir choisir un référentiel pour étudier le mouvement d’une planète ou d’un satellite.
- Connaître est savoir appliquer les trois lois de Kepler dans le cas d’une trajectoire circulaire.
- Connaître les propriétés du mouvement circulaire uniforme.
- Connaître la loi de gravitation universelle sous sa forme vectorielle.
- Savoir appliquer la deuxième loi de Newton pour déterminer la nature du mouvement d’une planète ou d’un satellite.
- Connaître les conditions que doit vérifier le mouvement d’un satellite pour qu’il soit géostationnaire.

### Axes du cours
#### Chute Lois de Kepler
- Le référentiel héliocentrique et le référentiel géocentrique.
- Les lois de Kepler.

#### Chute Le mouvement circulaire uniforme
- Définition.
- Propriétés du mouvement circulaire uniforme.
- Les lois de Kepler dans le cas où le mouvement est circulaire uniforme.

#### Chute Le mouvement circulaire uniforme
- Loi d’attraction universelle “rappel”
- Etude du mouvement d’une planète autour du soleil.
- La satellite.
- Les satellites géostationnaires.
```

<!-- Page 70 -->

```markdown
# Lois de Kepler

① Le référentiel héliocentrique et le référentiel géocentrique

- Le référentiel héliocentrique : Est utilisé pour étudier les mouvements des planètes autour du Soleil. Son repère a pour origine le centre du Soleil et ses axes sont dirigés vers trois étoiles lointaines considérées comme fixes pendant la durée des observations.
- Le référentiel géocentrique : Est utilisé pour étudier les mouvements des objets autour de la Terre (satellites artificiels, avions, navette spatiale, la Lune). Son repère a pour origine le centre de la Terre et ses axes sont dirigés vers trois étoiles lointaines considérées comme fixes pendant la durée des observations.

② Les lois de Kepler

- La première loi de Kepler « loi des trajectoires »

Dans le référentiel héliocentrique, la trajectoire du centre d’inertie d’une planète est une ellipse (elliptique) dont le soleil est l’un des foyers.
  
  - Remarques
    - Tout point $M$ de l’ellipse vérifie l'égalité $MF + MF' = 2a$ avec $F$ et $F'$ sont les foyers de l’ellipse et la distance $2a$ est le grand axe.
    - Le cercle est une ellipse particulière dont les deux foyers sont confondus avec le centre $O$.

- La deuxième loi de Kepler « loi des aires »

Le segment de droites reliant les centres de gravité du Soleil $(S)$ et de la planète $(M)$ balaye des aires égales pendant des durées égales. Pendant la durée $\Delta t$, la planète s'est déplacée de la position $P_1$ à la position $P_2$ et le vecteur $S P_a$ balaye l’aire $A_1$ ; et pendant la même durée $\Delta t$, la planète se déplace de la position $P_3$ à la position $P_4$ en balayant l’aire $A_2 telle que : $A_1 = A_2$.
  
  - L’une des conséquences de cette loi est la variation de la vitesse de la planète au cours de son mouvement autour du soleil.
    - La vitesse devient plus grande lorsque la planète se rapproche du soleil « périhélie ».
    - La vitesse devient plus faible lorsque la planète s’éloigne du soleil « aphélie ».

- La troisième loi de Kepler « loi des périodes »

Pour toutes les planètes du système solaires, le rapport du carré de la période de révolution sur le cube du demi-grand axe est constant 

$$
\frac{T^2}{a^3} = K = Cte.
$$

La constante $K$ ne dépend pas de la planète.

② Le mouvement circulaire uniforme

① Définition

Un mobile est en mouvement circulaire uniforme si sa trajectoire est un cercle et la valeur de la vitesse de son centre d’inertie est constante.
```

<!-- Page 71 -->

```markdown
## 2️⃣ Propriétés du mouvement circulaire uniforme

- La relation entre la vitesse angulaire et la vitesse linéaire : $V = r \omega$
- La période du mouvement : $T = \frac{2 \pi}{\omega_0} = \frac{2 \pi r}{V}$
- L’accélération dans la base de Frenet : $\mathbf{a} = a_t \mathbf{u} + a_n \mathbf{n}$
  
  Avec : $a_t = \frac{dV}{dt}$ et $a_n = \frac{V^2}{r}$ donc le vecteur accélération devient : $a = \frac{dV}{dt} = 0$
  
- Le vecteur accélération d’un point $G$ en mouvement circulaire est centipède (dirigé vers le centre de la trajectoire) et module constant.
  
- La deuxième loi de Newton dans base de Frenet : $\mathbf{F} = m \mathbf{a} \Longleftrightarrow \mathbf{F} = m \frac{v^2}{r}$
  
  la résultante des forces extérieures exercées sur un solide en mouvement de rotation circulaire est centrale d’intensité constante.

✔️ Conclusion

Un solide de masse $m$ est en mouvement circulaire uniforme si :
- La résultante $\mathbf{F}$ des forces appliquées à ce solide est centripète (dirigée vers le centre de la trajectoire)
- La valeur de la force $\mathbf{F}$ est : $F = \frac{m v^2}{r} = \text{Cte}$

## 3️⃣ Les lois de Kepler dans le cas où le mouvement est circulaire uniforme

Les trajectoires des planètes autour du soleil peuvent être considérées circulaires, dans ce cas les lois de Kepler deviennent :
- La trajectoire de la planète est circulaire dont le centre est le soleil.
- La vitesse de la planète est constante, donc le mouvement est uniforme.
- $r^2 = K = \text{Cte}$, avec $r$ est le rayon de la trajectoire.

## III Application

### 1️⃣ Loi d’attraction universelle “rappel”

- Énoncer de la loi d’attraction universelle.
- À cause de leurs masses, les corps exercent les uns sur les autres des forces attractives mutuelles.
- Formulation mathématique de la loi de la gravitation universelle.
  
  Deux corps, respectivement de masse $m_a$ et $m_b$, séparés par une distance $d = AB$, exercent l’un sur l’autre des forces attractives, modélisées par :
  
  - $F_{A/B}$ : La force exercée par $A$ sur $B$.
  - $F_{B/A}$ : La force exercée par $B$ sur $A$.
  
  Les forces d’attraction universelle $F_{A/B}$ et $F_{B/A}$ ayant :
  
  - même ligne d’action (direction)
  - deux sens opposés
  
  $F_{A/B} = F_{B/A} = G \frac{m_a m_b}{d^2}$
  
  où $G$ est la constante de gravitation universelle $G = 6,67 \times 10^{-11} \text{Nm}^2\text{Kg}^{-2}$

### 2️⃣ Étude du mouvement d’une planète autour du soleil

Une planète de centre d’inertie $P$ de masse $m_p$ décrit un mouvement autour du soleil de masse $m_s$.

- L’expression de la force d’attraction gravitationnelle exercée par le Soleil sur la planète $P$ est : $\mathbf{F}_{S/P} = \frac{m_s m_p}{r^2} \mathbf{n}$
  
- Déterminons l’expression du vecteur accélération :
  
  - La force exercée sur la planète est : $\mathbf{F}_{S/P} = \frac{m_s m_p}{r^2} \mathbf{n}$
  
  - D’après la deuxième loi de Newton, on a : $\mathbf{F}_{S/P} = m_p \mathbf{a_p}$
```

<!-- Page 72 -->

```
⇒ $G \frac{m_s m_p}{r^2} = m_p \vec{a}_p$
$$\vec{a}_p = G \frac{m_s}{r^2} \hat{n}$$

Le vecteur accélération d’une planète en mouvement autour du Soleil est centripète.  
Le vecteur accélération de la planète dans la base de Frenet est : $\vec{a}_p = \vec{a}_u + \vec{a}_n$.

et d'après la question $\mathscr{E}$, on a :
$$\vec{a}_n = G \frac{m_s}{r^2} \hat{n} \Rightarrow \left( \frac{dV}{dt} = 0 \Rightarrow V = cte \right) \text{ et } r = G \frac{m_s}{V^2}$$

Le mouvement de la planète $P$ autour du soleil est circulaire uniforme de rayon : $r = G \frac{m_s}{V^2}$.

1. L’expression de la vitesse  
On a : $r = G \frac{m_s}{V^2}$  
Donc : $V^2 = G \frac{m_s}{r}$  
Alors : $V = \sqrt{G \frac{m_s}{r}}$

2. L’expression de la période de révolution $T$  
On a : $T = \frac{2\pi r}{V}$  
$$\Rightarrow T = \frac{2\pi}{V} \left( \frac{4\pi^2 r^2}{V^2} \quad \text{avec } V^2 = G \frac{m_s}{r} \right)$$  
$$T^2 = 4\pi^2 \frac{r^3}{G m_s}$$  
$$T = 2\pi \sqrt{\frac{r^3}{G m_s}}$$

3. La satellisation  
La satellisation est une technique qui consiste à mettre un satellite en son orbite autour de la Terre en lui communiquant une vitesse initiale $v_0$ lui permettant d’avoir un mouvement circulaire ou elliptique autour de la Terre. Cette technique est complexe mais pour la simplifier, on considère qu’elle se fait en deux étapes :  
- Porter le satellite par une navette spatiale à un point $P$ situé à une altitude $h > 200 km$ pour éviter les frottements.  
- Libérer le satellite avec une vitesse initiale $v_0$ perpendiculaire au rayon vecteur $\overrightarrow{TP}$ de valeur  
$$v_0 = \sqrt{\frac{GM_r}{R_r + h}}$$

4. Les satellites géostationnaires  
On dit qu’un satellite est géostationnaire si :  
- Il semble immobile pour un observateur terrestre.  
- Il tourne dans le même sens que celui de la Terre autour du même axe de rotation (axe des pôles)  
- Il a une période de révolution égale à la période de rotation de la Terre sur elle-même $T_{sat} = T_{Terre}$.  
Pour satisfaire les conditions citées précédemment, l’orbite circulaire du satellite géostationnaire est donc contenue dans le plan équatorial de la Terre.

## Exercice 1  
0 Répondre par vrai ou faux  
- La période de révolution de la Terre autour du soleil est $T = 68164$s  
- Le satellite géostationnaire est immobile par rapport au référentiel géocentrique.  
- Le satellite géostationnaire est immobile par rapport à un référentiel terrestre.  
- Le référentiel convenable pour l’étude du mouvement orbital de la Terre autour du soleil est le référentiel héliocentrique.  
- L'orbite circulaire du satellite géostationnaire est contenue dans le plan équatorial de la Terre.  
- Le mouvement d'un satellite autour de la Terre est circulaire uniforme lorsqu'un vecteur accélération est centripète.
```

<!-- Page 73 -->

```markdown
## Exercice 2

Le satellite Stella, lancé en 1993, est un satellite géodésique français. Il est utilisé pour mesurer avec précision le champ de gravitation autour de la Terre. Ce satellite tourne sur une orbite circulaire avec une vitesse constante.  
**Données :**  
- Période de la Terre : $T = 86164 s$  
- Le rayon de la Terre : $R_T = 6400 km$  
- Masse de Terre : $M_T = 6 \times 10^{24} Kg$  
- Constante de gravitation : $G = 6,67 \times 10^{-11} (SI)$  
- L'altitude de Stella par rapport à la surface de la Terre : $h = 800 km$  

1. Quelle est la nature du mouvement du satellite Stella?  
2. Donner l’expression de la vitesse orbitale de ce satellite en fonction de $M_T, R_T$ et, puis calculer sa valeur.  
3. Calculer la vitesse angulaire du satellite Stella et déduire la valeur de sa période de révolution.  
4. Peut-on considérer le satellite Stella comme géostationnaire? Justifier la réponse.  

## Exercice 3

Landsat 8 est un satellite d'observation de la Terre américain lancé le 11 février 2013. Il s'agit du huitième satellite du programme Landsat et le septième à atteindre l'orbite avec succès. Ce satellite tourne autour de la Terre à une vitesse constante sur une orbite circulaire de rayon $r$.  
**Données :**  
- Le rayon de la Terre : $R_T = 6380 km$  
- Masse de Terre : $M_T = 6 \times 10^{24} Kg$  
- Constante de gravitation : $G = 6,67 \times 10^{-11} (SI)$  
- La vitesse du satellite LANDSAT par rapport au référentiel géocentrique : $V_S = 7,52 \times 10^3 m.s^{-1}$  

1. Calculer la valeur du rayon orbital $r$ et déduire la valeur de l'altitude $Z$ du satellite par rapport à la surface de la Terre.  
2. Écrire la relation donnant le troisième loi de Kepler.  
3. Calculer la période de révolution de ce satellite.  

## Exercice 4

Un satellite de centre d'inertie $S$ de masse $m_{sat}$ décrit un mouvement autour de la Terre de masse $m_T$.  
1. Donner l’expression de la force d’attraction gravitationnelle $F_{T/sat}$ modélisant l’action de la Terre sur le satellite $S$ (la figure ci-contre).  
2. En appliquant la deuxième loi de Newton, trouver l’expression du vecteur accélération $a_{sat}$ en fonction de $G$ et $m_T$ et $r$ le rayon de l’orbite du satellite tel que : $r = R_T + h$  
3. Montrer que le mouvement du satellite est circulaire uniforme.  
4. Trouver l’expression de la période de révolution $T$ en fonction de $m_T,G$, et $r$.  
5. Montrer que le troisième loi de Kepler s’écrit sous la forme suivante : $$\frac{T^2}{(R_T+h)^3} = \frac{4\pi^2}{Gm_T}$$  

## Exercice 5

Le satellite SYNCROM III, premier satellite vraiment géostationnaire, fut mis sur orbite en 1964. Son mouvement circulaire est étudié dans le référentiel géocentrique considéré comme galiléen.  
1. Définir : satellite géostationnaire; référentiel géocentrique  
2. Appliquer la deuxième loi de Newton. Montrer que le mouvement de SYNCROM III autour de la Terre est uniforme.  
3. Déduire que l’accélération de SYNCROM III est écrite sous la forme suivante: $$a_s = g_0 \frac{R^2}{(R+h)^2}$$  
4. Montrer que la relation de Kepler s’écrit sous la forme suivante: $$\frac{T^2}{(R+h)^3} = \frac{4\pi^2}{Gm_T}$$  
5. Calculer l'altitude de l'orbite du satellite SYNCROM III par rapport à la surface de la Terre.  
6. Calculer la vitesse du satellite autour de la Terre.  

**Données :**  
- Le rayon de la Terre : $R = 6,38 \times 10^3 km$  
- L’intensité de pesanteur à la surface de la Terre : $g_0 = 9,81 \, m.s^{-2}$  
- La période de rotation de la Terre autour de son axe polaire : $T = 86164 s$  
```

<!-- Page 74 -->

```markdown
# Exercice 6

Le satellite marocain « Mohammed VI-A » a été lancé le 07 novembre 2017 par la base spatiale de Kourou en Guyane. Le satellite Mohammed VI-A est principalement utilisé pour les activités de cartographie, le développement régional, la surveillance agricole, la surveillance de l’évolution de l’environnement et de la désertification, ainsi que la surveillance des frontières et des côtes.

## Données :
- Période de Terre : $T = 86164s$
- Le rayon de la Terre : $R_T = 6400km$
- Masse de Terre : $M_T = 6 \times 10^{24}Kg$
- Constante de gravitation : $G = 6,67 \times 10^{-11}(SI)$
- L'altitude du satellite par rapport à la surface de la Terre : $h = 647Km$

1. Quel est le référentiel convenable à l’étude du mouvement du satellite (S) ?
2. Donner l’expression de la force d’attraction gravitationnelle $F_{7/S}$ modélisant l’action de la planète sur le satellite $S$ (la figure ci-contre).
3. En appliquant la deuxième loi de Newton. Montrer que le mouvement du satellite est circulaire uniforme.
4. Trouver l'expression de la période de révolution $T_S$ en fonction de $M_T$, $G$, $R_T$ et $h$.
5. Déduire que la troisième loi de Kepler s’écrit sous la forme : 
   $$ T_S^2 = \frac{4\pi^2}{G M_T} (R_T + h)^3 $$
6. S’assurer que la période de révolution du satellite $(S)$ est : $T_S = 5875s$
7. Le satellite « Mohammed VI » apparaît-il immobile par rapport à un observateur terrestre ? Justifier la réponse.

# Exercice 7

Le pigeon bleu est un satellite artificiel marocain assurant le contrôle des frontières géographiques du royaume et des télécommunications. Il a été instauré par des experts du cabinet royal de télédétection spatiale en collaboration avec experts internationaux. Le pigeon bleu a été mis en orbite le 10 décembre 2001 à une altitude du sol.

On assimile l’orbite de $(S)$ à un cercle de centre $O$, et on étudie son mouvement géocentrique.
- La Terre est considérée comme une sphère à répartition sphérique de masse.
- On néglige les dimensions de $(S)$ devant sa distance au centre de la Terre.

## Données :
- La constante de gravitation universelle : $G = 6,67 \times 10^{-11}(SI)$
- Le rayon de la Terre : $R_T = 6350km$
- L’intensité de pesanteur à la surface de la Terre : $g_0 = 9,8m.s^{-2}$
- La période de rotation de la Terre autour de son axe polaire : $T = 86164s$
- L’altitude du satellite : $h = 1000km$

1. Donner l’expression vectorielle de la force d’attraction universelle modélisant l’action de la Terre sur le satellite $(S)$.
2. Écrire dans le base de Freinet, l’expression du vecteur accélération du mouvement de $(S)$.
3. Par application de la 2ème loi de Newton sur le mouvement du centre d’inertie de $(S)$.
   - a. Montrer que le mouvement de $(S)$ est circulaire uniforme.
   - b. Écrire l’expression de $V_s$ en fonction de $g_0$, $R_T$ et $h$. Calculer sa valeur.
4. Vérifier que la masse de la Terre est : $M_T \approx 6 \times 10^{24}kg$.
5. Montrer que le satellite artificiel n’apparaît pas immobile par rapport à un observateur terrestre.
   - a. Montrer que : $\omega^2 (R_T + z)^3 = cste$ où $z$ est la distance séparant le sol terrestre et $(S)$.
   - b. Trouvez la valeur de $z$.
```

<!-- Page 75 -->

```markdown
# Exercice 8

Mars est l’une des planètes du système solaire qu’on peut détecter facilement dans le ciel à cause de sa luminosité et de sa couleur rouge. Il possède deux satellites : qui sont : Phobos et Deimos. Cet exercice propose la détermination de quelques grandeurs physiques concernant cette planète.

## Données
- Masse du Soleil $M_s = 2 \times 10^{30} \text{Kg}$
- Rayon de Mars $R_M = 3400 \text{km}$
- La constante gravitationnelle $G = 6,6710^{-11} (SI)$
- La période de rotation de Mars autour du Soleil $T_M = 687 \text{jours}$

## I-Etude du mouvement de Mars autour du Soleil
On considère que le mouvement de Mars dans le référentiel héliocentrique est circulaire de rayon $r$.
On suppose que Mars est soumis uniquement à la force de gravitation exercée par le Soleil.

1. Représenter sur le schéma la force $\vec{F}_{S/M}$ exercée par le Soleil sur Mars ainsi que le vecteur vitesse $\vec{V}$ du centre de Mars autour du Soleil.
2. Écrire l’expression vectorielle de la force $\vec{F}_{S/M}$ exercée par le Soleil sur Mars.
3. En appliquant la deuxième loi de Newton montrer que le mouvement de Mars est uniforme.
4. Trouver l’expression du rayon $r$ en fonction de $M_S$, $G$, $T_M$ et calculer sa valeur.
5. Calculer la valeur de la vitesse $V$ de Mars autour du Soleil.

## II-Etude du mouvement de Phobos autour de Mars
On considère que le satellite Phobos est en mouvement circulaire uniforme autour de Mars à la distance $h = 6000 \text{Km}$ de sa surface. La période de ce mouvement est $T_P = 460 \text{min}$.

On néglige les dimensions de Phobos devant les autres dimensions. Étudions le mouvement de Phobos dans un référentiel supposé galiléen dont l'origine est confondue avec le centre de Mars.

1. Écrire la troisième loi de Kepler pour le mouvement de Phobos autour de Mars.
2. Calculer la masse $M_M$ de Mars.

# Exercice 9

Vénus, en tant que planète, est la deuxième planète la plus proche du Soleil, après Mercure. Elle est également connue pour sa luminosité exceptionnellement dense et, elle est souvent visible à l’aube ou au crépuscule, et est surnommée l'Étoile du Berger. Vénus est une planète tellurique, semblable à la Terre, mais avec une atmosphère dense et un effet de serre intense qui la rendent très chaude. Cet exercice propose d’étudier le mouvement de Vénus autour du Soleil.

On admet que le mouvement de Vénus autour du Soleil est circulaire de rayon $r_V$.

## Données
- Masse du Soleil $M_s = 2 \times 10^{30} \text{Kg}$
- Rayon orbital de Vénus $r_V = 1,08 \times 10^{11} \text{m}$
- La constante gravitationnelle $G = 6,6710^{-11} (SI)$
- La période de rotation de Vénus autour du Soleil $T_V = 2,24 \times 10^{2} \text{jours}$

1. Montrer que le mouvement de Vénus autour du Soleil est uniforme.
2. Trouver l’expression de la vitesse orbitale $V_V$ en fonction de $M_S$, $G$ et $r_V$.
3. Déduire la valeur de la vitesse orbitale de Vénus autour du Soleil.
```

<!-- Page 76 -->

```markdown
# Exercice 10

Uranus est la septième planète du système solaire, une géante de glace caractérisée par sa couleur bleu-vert et son axe de rotation très incliné. Découverte par William Herschel en 1781, elle est la première planète découverte à l'aide d'un télescope. Cette planète possède huit en satellites.

- Masse du Soleil $M_S = 2 \times 10^{30} \, \text{Kg}$
- Rayon orbital d'Uranus $r_u = 2,87 \times 10^9 \, \text{m}$
- La constante gravitationnelle $G = 6,6710^{-11} \, \text{SI}$

## I- La vitesse orbitale et la période de mouvement d’Uranus autour du Soleil 

Le mouvement orbital d’Uranus autour du soleil est supposé circulaire de rayon $r_u$. Étudions le mouvement orbital d’Uranus dans le référentiel héliocentrique supposé galiléen.

1. Montrer que le mouvement orbital d’Uranus autour du Soleil est uniforme.
2. Trouver l’expression de la vitesse orbitale $V_u$ en fonction de $M_S$, $G$ et $r_u$. Calculer sa valeur.
3. Montrer que la troisième loi de Kepler peut s'écrire sous la forme: $$ \frac{T^2}{r_u^3} = \frac{4 \pi^2}{G M_S} $$ Où $T_u$ est la période du mouvement d’Uranus autour du soleil.
4. Calculer la valeur de $T_u$.

## II- La masse d’Uranus 

Les cinq satellites les plus massifs d’Uranus ont été découverts entre 1787 et 1948. Le mouvement de ces satellites étudié dans un référentiel lié au centre d’Uranus supposé galiléen. L’étude du mouvement de ces satellites à permis de tracer la courbe ci-contre représentant les variations du carré de la période de révolution en fonction du cube du rayon orbital. on suppose que ces satellites sont en mouvement circulaire uniforme.

1. Montrer que la période du mouvement d’une satellite autour d’Uranus est lié avec le rayon orbital de ce mouvement par la relation suivante: $$ T_{sat}^2 = K $$ en précisant l’expression de $K$ en fonction de $M_u$ et $G$.
2. En expliquant la courbe ci-contre calculer la valeur de la masse $M_u$ d’Uranus.

# Correction

# Exercice 1
1. Répondre par vrai ou faux
   - La période de révolution de la Terre autour du soleil est $T = 68164 \, s$: Vrai
   - Le satellite géostationnaire est immobile par rapport au référentiel géocentrique. Faux
   - Le satellite géostationnaire est immobile par rapport à un référentiel terrestre. Vrai
   - Le référentiel convenable pour l’étude du mouvement orbital de la Terre autour du soleil est le référentiel héliocentrique. Vrai
   - L’orbite circulaire du satellite géostationnaire est contenue dans le plan équatorial de la Terre. Vrai
   - Le mouvement d’un satellite autour de la Terre est circulaire uniforme lorsque son vecteur accélération est centripète. Vrai

# Exercice 2

1. Le satellite Stello est en mouvement circulaire uniforme, car son orbite est circulaire et sa vitesse constante.
   - L’expression de la vitesse du satellite autour de la Terre :

   $$ V_s = \sqrt{\frac{GM_T}{r}} \text{ avec } r = R_T + h $$

   Donc : 

   $$ V_s = \sqrt{\frac{GM_T}{R_T+h}} $$

   A.N. : 

   $$ V_s = \frac{GM_T}{7,46 \times 10^3} \approx 7,46 \times 10^3 \, \text{m.s}^{-1} $$

2. Calculons la vitesse angulaire et la période du mouvement de ce satellite :
   - Calculons la valeur de $\omega_s$ :
   - On a : $\omega_s = \frac{V_s}{R_T+h}$

   A.N. : 

   $$ \omega_s \approx 1,04 \times 10^{-3} \, \text{s}^{-1} $$

   - Calculer la valeur de $T_s$ :

   $$ T_s = \frac{2\pi}{\omega_s} $$
```

<!-- Page 77 -->

```markdown
### Exercice 3

1. Calculons la valeur de $r$ et celle de $Z$ :
   - On a : $V_s = \sqrt{\frac{GM_T}{r}}$
   - Donc : $V^2 = \frac{GM_T}{r}$
   - Alors : $r = \frac{GM_T}{\frac{V^2}{Z}}$
   - A.N. : $r = \frac{6.67 \times 10^{-11} \times 6.1024}{4 \pi^2} \approx 7,08 \times 10^6 m$

2. Calculons la valeur de $Z$ :
   - On a : $r = R_T + Z$
   - Donc : $Z = r - R_T$
   - A.N. : $Z = 7,08 \times 10^6 - 6380 \times 10^3 = 7 \times 10^5 m$

3. La troisième loi de Kepler pour ce satellite :
   - On a : $r = \frac{GM_T}{V^2} \quad (*)$
   - Et on sait que : $V_s = r \omega_s$, avec $\omega_s = \frac{2\pi}{T_s}$
   - Donc : $V_s = \frac{2 \pi}{T_s}$
   - Alors :
     $$ V^2 = \frac{4 \pi^2 r^2}{T_s^2} \quad (**) $$
   - On remplace $(**)$ dans $(*)$, on trouve : $r = \frac{GM_T T_s^2}{4\pi^2 r^2}$
   - Donc : $r^3 = \frac{GM_T T_s^2}{4\pi^2}$
   - Alors : $T_s^2 = \frac{4 \pi^2 r^3}{GM_T}$
   - Donc : $T_s = \sqrt{\frac{4 \pi^2 r^3}{GM_T}}$
   - A.N. : $T_s = \sqrt{\frac{4 \pi^2 (7.08 \times 10^6)^3}{6.67 \times 10^{-11} \times 6.1024}}$
   - On trouve : $T_s \approx 5,92 \times 10^3 s$

### Exercice 4

1. L’expression de la force d'attraction gravitationnelle $F_{T/sat}$ exercée par la Terre sur le satellite est : $F_{T/sat} = G \frac{m_T m_{sat}}{r^2} \vec{n}$
   
2. Déterminons l’expression du vecteur accélération :
   - Le système étudié : le satellite
   - La force exercée sur le satellite est : $F_{T/sat}$
   - D’après la deuxième loi de Newton on a : $F_{T/sat} = m_{sat} a_{sat} \iff G \frac{m_T m_{sat}}{r^2} \vec{n} = m_{sat} a_{sat} \iff a_{sat} = \frac{G m_T}{r^2} \vec{n}$
   
3. Le vecteur accélération d’un satellite en mouvement autour de la Terre est centripète. Le vecteur accélération du satellite dans la base de Frenet est : $a_{sat} = a_t \vec{u} + a_n \vec{n}$
   - et d’après la question 2, on a : $a_{sat} = G \frac{m_T}{r^2} \vec{n}$
   - donc : 
     $$ a_u = \frac{dv}{dt} = 0 $$
     $$ a_n = \frac{V^2}{r} = \frac{G m_T}{r^2} $$
   - $V = cte$
   - $r = \frac{G m_T}{V^2} = cte'$

4. L’expression du période de révolution $T$ :
   - On a : $T^2 = \frac{4 \pi^2 r^3}{G m_T}$
   - Avec $V^2 = \frac{G m_T}{r}$
   - $T^2 = \frac{4 \pi^2 r^3}{G m_T}$
   - Alors : $T = 2 \pi \sqrt{\frac{r^3}{G m_T}}$

5. Montrons que la troisième loi de Kepler s’écrit sous la forme suivante :
   $$ \frac{T^2}{r^3} = \frac{4 \pi^2}{G m_T} $$
   - Donc : $T^2 = \frac{4 \pi^2}{G m_T} \cdot \frac{1}{r^3}$
```

<!-- Page 78 -->

```markdown
# Exercice 5

1. **Définitions**
   - Un satellite géostationnaire est un satellite artificiel qui semble immobile par rapport à un observateur sur Terre, car il tourne autour de la Terre à la même vitesse et dans le même sens que la rotation de la Terre.
   - Le référentiel géocentrique est un référentiel dont l'origine est le centre de la Terre et dont les trois axes pointent vers des étoiles lointaines qui apparaissent fixes.

2. **Montrons que le mouvement de ce satellite est circulaire uniforme :**
   - Le satellite est soumis à la force d'attraction universelle exercée par la Terre.
   - Par application de la deuxième loi de Newton, on a : $F_T/S = m a_s$

     $G \frac{M_T}{(R+h)^2} \vec{n} = m a_s$

   - Par projection dans une base de Frenet, on trouve :
     $$
     m_{au} = 0
     $$
     $$
     m_{an} = - \frac{G M_T}{(R+h)^2} 
     $$
   - Et on a : $a_u = \frac{dV}{dt}$
   - Alors, $V = cste$

3. **Montrons que $a_s = g_0 \left(\frac{R}{R+h}\right)^2$ :**
   - On a : 
     $$
     a_s = -\frac{GM_T}{R^2} \left(\frac{R^2}{(R+h)^2}\right)
     $$
     Donc : 
     $$
     a_s = g_0 \left(\frac{R}{R+h}\right)^2 \text{ avec } g_0 = \frac{GM_T}{R^2}
     $$

4. **Montrons que $T^2 = \frac{4 \pi^2 (R+h)^3}{G M_T}$ :**
   - D'après la question $\star$, on a : $a_n = g_0 \left(\frac{R}{R+h}\right)^2$
   - Donc :
     $$
     v^2 = g_0 \left(\frac{R+h}{R}\right)^2 \quad (*)
     $$
   - Alors : $V^2 = g_0 \frac{4\pi^2 (R+h)^2}{2\pi(R+h)} \sqrt{V}$
   - Donc :
     $$
     T^2 = \frac{4\pi^2 (R+h)^{3}}{g_0 R^2} \quad (**) 
     $$

5. **On remplace (*) dans (**) :**
   - On trouve :
     $$
     T^2 = \frac{4\pi^2 (R+h)^3}{g_0 R^2}
     $$

6. **Calculons la valeur de $h$ :**
   - On a :
     $$
     \frac{T^2}{4\pi^2} = \frac{g_0 R^2}{(R+h)^3}
     $$
     $$(R+h)^3 = \frac{T^2 g_0 R^2}{4\pi^2}$$
   - Alors :
     $$
     h= \left( \frac{T^2 g_0 R^2}{4\pi^2} \right)^{\frac{1}{3}} - R
     $$
   - A. : $h \approx 3,58 \times 10^7 m$

7. **Calculons la vitesse orbitale du satellite :**
   - On a : 
     $$
     V^2 = \frac{g_0 R^2}{R+h}
     $$
     A.N.: $V = 6,38 \times 10^6$
     $$
     On trouve : V \approx 3,07 \times 10^3 \text{ m/s}
     $$

# Exercice 6

1. **Le référentiel convenable à l'étude du mouvement du satellite $S$ est le référentiel géocentrique.**

2. **L'expression de la force $F_T/S$ :**
   - On a : $F_T/S = G \frac{M_T m}{(R+h)^2} \vec{n}$

3. **Montrons que le mouvement du satellite $S$ est uniforme :**
   - Le satellite $S$ est soumis à la force d'attraction universelle $F_T/S$.
   - D'après la deuxième loi de Newton, trouve :
     $$
     G \frac{M_T m}{(R+h)^2} \vec{n} = m \vec{a_s}
     $$
   - Par projection dans la base de Frenet, on trouve :
     $$
     m_{au} = 0
     $$
     $$
     m_{an} = -G \frac{M_T}{(R+h)^2} 
     $$
   - Puisque $a_u = \frac{dV}{dt}$, donc $V = cte$

4. **Trouvons l'expression $T_s$ :**
   - On a : $a_n = G \frac{M_T}{(R+h)^2}$
   - Donc :
     $$
     v^2 = G \frac{M_T}{(R+h)^2}
     $$
     Alors : $V = \frac{G M_T}{R+h} \quad (a)$
   - Et on sait que : $T_s = \frac{2 \pi}{\omega}$ avec $\omega = \frac{V}{r}$
   - Alors : $T_s = \frac{2 \pi}{V}$ avec $r = R + h$
   - Alors : 
     $$
     T_s = 2\pi \frac{(R+h)^{3}}{G M_T} \quad (b)
     $$
   - On remplace $(b)$ dans $(a)$, on trouve :
     $$
     T_s^2 = \frac{4\pi^2 (R+h)^{3}}{G M_T}
     $$
```

<!-- Page 79 -->

```markdown
Alors :

$$ T_s^2 = \frac{4\pi^2}{G M_T} $$

Montrons que $ T_s = 5868 \ s $ 

On a : 

$$ T_s = \frac{4\pi^2 (R_T + h)^3}{G M_T} $$

A.N. : $ T_s = \frac{4\pi^2 (6400 + 6) \times 10^3}{6,67 \times 10^{-11} \times 6 \times 10^{24}} \approx 5868 \ s $

Puisque $ T_s \neq T $, donc le satellite (S) est en mouvement par rapport à un observateur terrestre.

### Exercice 7

L'expression de la force $\vec{F}_{T/S}$ est : 

$$ \vec{F}_{T/S} = -\frac{G m_T M_r}{(R_T + h)^2} \hat{n} $$

L'accélération du satellite dans la base de Frenet est donnée par : 

$$ \vec{a}_s = a_u \hat{u} + a_n \hat{n} $$

Avec 

$$ a_u = \frac{dV_s}{dt} $$ et $$ a_n = \frac{V_s^2}{r} \text{ avec } r = R_T + h $$

Alors : 

$$ \vec{a}_s = \frac{dV_s}{dt} \hat{u} + \frac{V_s^2}{(R_T + h)} \hat{n} $$

a - Montrons que le mouvement du satellite est circulaire uniforme :

* Le satellite est soumis à la force d'attraction universelle $\vec{F}_{T/S}$.

D'après la deuxième loi de Newton, on a : 

$$ \vec{F}_{T/S} = -m_a \vec{g} $$

Donc :

$$ \frac{G m_T M_r}{(R_T + h)^2} \hat{n} = -m_a \vec{g} $$

Donc : 

$$ a_s = G \frac{M_r}{(R_T + h)^2} $$

D'où : 

$$ \frac{dV_s}{dt} = 0 \text{ et } \frac{V_s^2}{(R_T + h)^2} = G \frac{M_r}{(R_T + h)^2} $$

On trouve : 

$$ V_s = cste et \quad V_s^2 = \frac{G M_r}{R_T + h} $$

Puisque $ V_s = cste et $ la trajectoire du satellite est circulaire, donc son mouvement est circulaire uniforme.

b - Trouvons l'expression de $ V_s $ :

D'après la question 3 - a, on a : 

$$ V_s^2 = \frac{G M_r}{R_T + h} $$ 

Alors : 

$$ V_s^2 = g_0 \frac{R_T^2}{R_T + h} $$ avec $ g_0 = \frac{G M_T}{R_T^2} $$

D'où : 

$$ V_s = \frac{\sqrt{g_0} R_T^2}{\sqrt{g_0 (R_T + h)}} $$

A.N. : 

$$ V_s = \frac{9.8 \times (6350 \times 10^3)^2}{\sqrt{(6350 + 1000) \times 10^3}} \approx 7.33 \times 10^3 \ m/s $$ 

Vérifions que $ M_T = 6 \times 10^{24} \ kg $ : 

On a : 

$$ g_0 = \frac{G M_T}{R_T^2} $$ 

Donc : 

$$ M_T = \frac{g_0 R_T^2}{g} $$ 

A.N. : $ M_T = \frac{9.8 \times (6350 \times 10^3)^2}{6} \approx 5.92 \times 10^{24} $$ 

On trouve : 

$$ M_T \approx 6 \times 10^{24} \ kg $$ 

a - Montrons que $ \omega^2 (R_T + h)^2 = cte $ : 

On a : 

$$ V = \sqrt{G M_T} $$ 

Donc : 

$$ V^2 = G M_T \text{ avec } r = R + h $$ 

Donc : 

$$ V^2 = r^2 \omega^2 \ (a) $$

$$ ( a ) \leftrightarrow r^3 \omega^2 = G M_T \text{ avec } r' = R + Z $$ 

$$ \Rightarrow (R + Z)^3 \omega^2 = G M_T $$ 

Et puisque $ G $ et $ M_T $ sont des constantes, alors $ G M_T = cte $ 

Donc : 

$$ (R + Z)^3 \omega^2 = cte $$ 

b - Trouvons la valeur de $ Z $ : 

On a : 

$$ (R_T + Z)^3 \omega^2 = G M_T $$ 

donc : 

$$ (R_T + Z)^3 = \frac{G M_T}{g} $$ avec 

$$ \omega^2 = \frac{G M_T}{4\pi^2} $$ 

D'où : 

$$ Z^3 = \frac{G M_T^2}{4\pi^2} - R_T $$ 

A.N. : 

$$ Z = \sqrt[3]{\left( \frac{6.67 \times 10^{-11} \times 6 \times 10^{24} \times (86164)^2}{4\pi^2} \right)} - 635000 $$ 

On trouve : 

$$ Z \approx 3.59 \times 10^7 \ m $$
```

<!-- Page 80 -->

```markdown
# Exercice 8

## I-Étude du mouvement de Mars autour du Soleil
1. La représentation de la force $F_{S/M}$

   ![image of the formula](image)

2. L'expression de la force $F_{S/M}$ :

   On a : $F_{S/M} = \frac{G M_S M_M}{r^2} \mathbf{n}$

3. Montrons que le mouvement de Mars est uniforme :
   - La planète Mars est soumise à la seule force d'attraction universelle exercée par le Soleil.
   - Par application de la deuxième loi de Newton, on a : $F_{S/M} = M_M \mathbf{a_M}$.

   Donc : $\frac{G M_S M_M}{r^2} \mathbf{n} = M_M \mathbf{a_M}$

   Alors : $\mathbf{a_M} = \frac{G M_S}{r^2} \mathbf{n}$

   Puisque le vecteur accélération $\mathbf{a_M}$ est centripète, de module constant ($a_M = \text{cte}$), donc le mouvement de Mars autour du Soleil est uniforme.

4. Trouver l'expression de $r$ :

   On a : $\mathbf{a_M} = \frac{G M_S}{r^2} \mathbf{n}$

   Par projection sur la direction de $\mathbf{n}$, on trouve :

   $a_n = \frac{G M_S}{r^2}$

5. Donc : 

   $$ V^2 = \frac{G M_S}{r} \quad \Rightarrow \quad V^2 = \frac{4 \pi^2 r^3}{T_M^2} \quad ( \ast ) $$
   Et on sait que $V = \frac{2 \pi r}{T_M}$.
   
   Donc : $V^2 = \frac{4 \pi^2 r^2}{T_M^2} \quad ( \ast \ast )$

   $(*) \; = (**) \; \Rightarrow \; r^3 = \frac{4 \pi^2 G M_S T_M^2}{4 \pi^2}$

   $$ r = \sqrt[3]{\frac{G M_S T_M^2}{4 \pi^2}} $$

   A.N. : $r = 2,28 \times 10^{11} \text{ m}$

6. Calculons la vitesse de Mars autour du Soleil :

   On a : $V = \frac{2 \pi r}{T_M}$

   A.N. : $V = \frac{2 \pi \times 2,28 \times 10^{11}}{687 \times 24 \times 3600} = 3,84 \times 10^4 \text{ m.s}^{-1}$

## II-Étude du mouvement de Phobos autour Mars
1. La troisième loi de Kepler pour le mouvement de Phobos autour de Mars :

   On a : $\frac{T_P^2}{r_P^3} = \frac{4 \pi^2}{G M_M}$

   Donc : 

   $$ T_P^2 = \frac{4 \pi^2 r_P^3}{G M_M} $$

2. Calculons la masse de Mars :

   On a : 

   $$ \frac{T_P^2}{(h + R_M)^3} = \frac{4 \pi^2}{G M_M} $$

   Donc : 

   $$ M_M = \frac{4 \pi^2 (h + R_M)^3}{G T_P^2} $$

   A.N. $M_M = \frac{4 \pi^2 (6000 + 3400) \times 10^3^3}{(6,67 \times 10^{-11}) \times (460 \times 60)^2}$

   On trouve : $M_M \approx 6,45 \times 10^{23} \text{ kg}$

# Exercice 9

1. Montrons que le mouvement de Vénus est uniforme :
   - La planète Vénus est soumise à la force d'attraction universelle $F_{S/V}$ exercée par le Soleil.
   - Par application de la deuxième loi de Newton, on a : $F_{S/V} = M_V \mathbf{a_V}$.

   Donc : 

   $$ \frac{G M_S M_V}{r_V^2} \mathbf{n} = M_V \mathbf{a_V} $$

   Alors : $\mathbf{a_V} = \frac{G M_S}{r_V^2} \mathbf{n}$

   Puisque le vecteur accélération de la planète est centripète et de module constant, alors le mouvement est uniforme.

2. Trouvons l'expression de $V_V$ :

   On a : $\mathbf{a_V} = \frac{G M_S}{r^2} \mathbf{n}$, avec $a_n = \frac{V^2}{r_V}$.

   Alors : 

   $$ \frac{V^2}{r_V} = \frac{G M_S}{r_V^2} \Rightarrow V_V = \sqrt{\frac{G M_S}{r_V}} $$

3. Calculons la valeur de $V_V$ :

   On a : 

   $$ V_V = \sqrt{\frac{6,67 \times 10^{-11} \times 2 \times 10^{30}}{1,08 \times 10^{11}}} \approx 3,51 \times 10^4 \text{ m.s}^{-1} $$
```

<!-- Page 81 -->

```markdown
# Exercice 10

## I- La vitesse orbitale et la période de mouvement d’Uranus autour du Soleil

1. Montrons que le mouvement d’Uranus est uniforme:
   - La planète Uranus est soumise à la force d'attraction universelle $F_{G}$ exercée par le Soleil.
   - Par application de la deuxième loi de Newton, on a : $F_{G} = M_{u} a$
   - Donc : $GM_{s}M_{u} \frac{1}{r_{u}^{2}} = M_{u} \vec{a}$
   - Alors : $\vec{a} = \frac{GM_{s}}{r_{u}^{2}} \vec{n}$
   - Puisque le vecteur accélération de la planète est centripète et de module constant, alors le mouvement est circulaire uniforme.

2. Trouvons l'expression de $V_{u}$ :
   - On a : $\vec{a} = \frac{GM_{s}}{r_{u}^{2}} \vec{n}$
   - Dans la base de Frenet, on trouve : $a_{n} = \frac{GM_{s}}{r_{u}}$
   - Avec $a_{n} = \frac{V_{u}^{2}}{r_{u}}$
   - Alors : $\frac{V_{u}^{2}}{r_{u}} = \frac{GM_{s}}{r_{u}} \implies V_{u} = \sqrt{\frac{GM_{s}}{r_{u}}}$
   - A.N. : $V_{u} = \frac{6.67 \times 10^{-11} \times 2 \times 10^{30}}{2.87 \times 10^{12}} \approx 6,83 \times 10^{3} \, m^{-1}$

3. Montons que la troisième loi de Kepler peut s'écrire sous la forme: $\frac{T_{u}^{2}}{r_{u}^{3}} = \frac{4 \pi^{2}}{G M_{s}}$.
   - On a : $V_{u} = \frac{GM_{s}}{r_{u}}$
   - Donc : $V_{u}^{2} = \frac{GM_{s}}{r_{u}} \, (1)$
   - Et on sait que : $V_{sat} = r_{sat} \omega_{sat} = \frac{2 \pi}{T_{sat}}$
   - Avec $\omega_{sat} = \frac{2 \pi}{T_{sat}}$
   - Alors : $V_{sat} = \frac{2 \pi}{T_{sat}}$
   - D’où : $V^{2} = \frac{4 \pi^{2} r_{sat}^{3}}{T_{sat}^{2}}$
   - $(a) \, (b) \implies \frac{r_{sat}^{3}}{T_{sat}^{2}} = \frac{GM_{u}}{r_{sat}} \implies \frac{r_{sat}^{2}}{T_{sat}^{2}} = \frac{GM_{u}}{4 \pi^{2}}$

4. Puisque $G$ et $M_{u}$ sont constants, alors : $\frac{T_{u}^{2}}{r_{u}^{3}} = k$.

5. D'après la courbe, on a : $k = \frac{130}{(24 \times 3600)^{2}}$ 
   - On trouve : $k = 8,09 \times 10^{-15} \, s^{2} m^{-3}$
   - Et on a : $k = \frac{4 \pi^{2}}{GM_{u}}$
   - Donc : $M_{u} = \frac{4 \pi^{2}}{k}$
   - A.N. : $M_{u} = \frac{6,74 \times 10^{-17} \times 6,67 \times 10^{-11}}$
   - On trouve : $M_{u} \approx 7,32 \times 10^{25} \, kg$
```

<!-- Page 82 -->

```markdown
## Mouvement de rotation d’un corps solide autour d’un axe fixe

### Objectifs
- Savoir repérer un point d’un solide en rotation autour d’un axe fixe par son abscisse angulaire.
- Savoir exprimer les composantes de l’accélération dans la base de Frenet en fonction des grandeurs angulaires.
- Connaître les expressions du moment d’inertie des certains corps solides de formes géométriques simples.
- Connaître et savoir appliquer la relation fondamentale de la dynamique dans le cas de rotation autour d’un axe fixe.
- Réaliser une étude dynamique d’un système mécanique composé de deux solides, l’un est mouvement de translation et l’autre est en mouvement de rotation autour d’un axe fixe.

### Axes du cours
#### Abscisse angulaire – Vitesse angulaire – Accélération angulaire
- Repérage d’un point d’un solide en mouvement de rotation.
- La vitesse angulaire et la vitesse linéaire.
- L’accélération angulaire.
- L’accélération dans base de Frenet.
- Le mouvement de rotation uniformément varié.

#### La relation fondamentale de la dynamique en rotation
- Le moment d’une force.
- La relation fondamentale de la dynamique en rotation.
- Le moment d’inertie d’un corps solide.
```

<!-- Page 83 -->

```markdown
# I  Abdicisse angulaire – Vitesse angulaire – Accélération angulaire

1. Repérage d’un point d’un solide en mouvement de rotation « rappel »
   - **Mouvement de rotation**
     Un solide indéformable est en mouvement de rotation autour d’un axe fixe $(A)$, si tous ses points décrivent des trajectoires circulaires centrées sur l’axe de rotation, sauf les points qui appartiennent à cet axe.
  
   - **L’abscisse angulaire - l’abscisse curviligne**
     On prend l’axe des abscisses $(O)$ comme direction de référence de l’abscisse angulaire et le point $A$ (point d’intersection entre $Ox$ et la trajectoire) comme point de référence de l’abscisse curviligne.
     - On appelle abscisse angulaire d’un point mobile $\overset{\frown}{G}$ à un instant $t$ donné, la valeur algébrique de l’angle $\theta(t) = (Ox, OG)$
     - L’unité de l’abscisse angulaire dans le (S.I) est radian (rad)
     - On appelle abscisse curviligne d’un point mobile $\overset{\frown}{G}$ à un instant $t$ donné, la longueur de l’arc $s(t) = AG$.
     L’unité de l’abscisse curviligne dans le (S.I) est mètre (m)
     - La relation entre l’abscisse angulaire et l’abscisse curviligne est :
     $$ s(t) = r \cdot \theta(t) \quad avec \quad r : \text{ est le rayon de la trajectoire } (r = OG) $$

2. La vitesse angulaire et la vitesse linéaire
   - **La vitesse angulaire** est la dérivée de l’abscisse angulaire par rapport au temps $\dot{\theta} = \frac{d\theta}{dt}$
     L’unité de la vitesse angulaire dans le (S.I) est (rad.s$^{-1}$)

   - **La vitesse curviligne** est la dérivée de l’abscisse curviligne par rapport au temps $v = \frac{ds}{dt}$
     L’unité de la vitesse curviligne dans le (S.I) est (m.s$^{-1}$)
     - La relation entre la vitesse angulaire :
     $$ v = r \cdot \dot{\theta} $$
     Donc : $$ v = r \cdot \frac{d\theta}{dt} \quad d’où : v = r\theta $$

3. L’accélération angulaire
   - **L’accélération angulaire** est la dérivée de la vitesse angulaire par rapport au temps $\ddot{\theta} = \frac{d\dot{\theta}}{dt}$
     Et puisque $\dot{\theta} = \frac{d^2\theta}{dt^2}$
     L’unité de l’accélération angulaire dans le (S.I) est (rad.s$^{-2}$)

4. L’accélération dans base de Frenet
   - **L’accélération dans la base de Frenet** : 
   $$ \vec{a} = a_u \vec{u} + a_n \vec{n} $$
     Avec : $ a_u = \frac{dv}{dt} = r\dot{\theta} $ et $ a_n = \frac{v^2}{r} = \frac{(r\dot{\theta})^2}{r} = r\dot{\theta}^2 $
     Donc : $$ \vec{a} = r\dot{\theta}\vec{u} + r\dot{\theta}^2 \vec{n} $$

5. Le mouvement de rotation uniformément varié
   - Le corps solide est en mouvement de rotation uniformément varié, si son accélération angulaire est une constante non nulle : $\dot{\theta} = cte \neq 0$
   - Les équations horaires du mouvement d’un corps solide en mouvement de rotation uniforme sont :
     - **L’équation horaire de la vitesse angulaire** : 
     $$ \dot{\theta}(t) = \dot{\theta}_0 + \ddot{\theta} \cdot t $$
     - **L’équation horaire de l’abscisse angulaire** : 
     $$ \theta(t) = \frac{1}{2} \ddot{\theta}_0 \cdot t^2 + \dot{\theta}_0 \cdot t + \theta_0 $$
```


<!-- Page 84 -->

```markdown
## II La relation fondamentale de la dynamique en rotation

### 1️⃣ Le moment d’une force
Le moment d’une force $\vec{F}$ par rapport à l'axe de rotation $(∆)$ est le produit de l’intensité $F$ de la force par la distance entre 
la droite d’action (direction) de la force et l’axe $(∆) : \quad M_A(\vec{F}) = ±F.d$  
L’unité du moment dans le S.I est (N.m)  
✦ Remarque  
Si la droite d’action de la force se coupe avec l’axe de rotation $(∆)$,  
ou parallèle avec lui, alors le moment de cette force est nul : $M(\vec{F}) = 0$

### 2️⃣ La relation fondamentale de la dynamique en rotation
Dans un repère lié à un référentiel terrestre, la somme algébrique des moments des forces extérieures exercées sur un solide en mouvement de rotation autour d’un axe fixe $\Delta$ est égale au produit de son moment d'inertie $I_A$ par son accélération angulaire :  
$$ \sum M(\vec{F}_{ex}) = I_A \cdot \theta $$

### 3️⃣ Le moment d’inertie d’un corps solide.
- Le moment d’inertie d’un corps est une grandeur physique qui exprime la résistance de ce corps à la rotation.
- Le tableau suivant donne l’expression du moment d’inertie pour des objets ayant des formes géométriques spécifiques.

| Tige            | Tige             | Ballon         | Cylindre       | Anneau          |
|-----------------|-----------------|----------------|----------------|-----------------|
| $(∆)$           | $(∆)$           | $(∆)$          | $(∆)$          | $(∆)$           |
| $l$             | $l$             |                |                | $r$             |
| $I_A = \frac{1}{3}ml^2$ | $I_A = \frac{1}{12}ml^2$ | $I_A = \frac{2}{5}mr^2$ | $I_A = \frac{1}{2}mr^2$ | $I_A = mr^2$ |

### Exercice 1
La vitesse angulaire du point $M$ d’un solide en mouvement de rotation autour d’un axe est : $\dot{\theta} = 12 \, \text{rad/s}.$  
1️⃣ Calculer l’accélération angulaire $\ddot{\theta}$ du point $M$.  
2️⃣ Quelle est la nature du mouvement du point $M$ ?  
3️⃣ Écrire l’expression de l’abscisse angulaire $\theta(t)$ en fonction du temps, sachant que son abscisse angulaire à l’origine des dates est : $\theta_0 = 2 \, \text{rad}$  
4️⃣ Déterminer le nombre des tours effectués par le point $M$ pendant une durée $\Delta t = 15 \, s$  

### Exercice 2
L’expression de l’abscisse angulaire du point $B$ d’un solide en mouvement de rotation autour d’un axe fixe est : $\theta(t) = 10t^2 + 40.t + 6,$ le temps est en $(s)$ et $\theta$ en $(rad)$.  
1️⃣ Déterminer l’expression de la vitesse angulaire $\dot{\theta}$ du point $B$ en fonction du temps.  
2️⃣ Quelle est la nature du mouvement du point $B$ ?  
3️⃣ Déterminer l’expression de l’accélération angulaire $\ddot{\theta}$ du point $B$ en fonction du temps.  
4️⃣ Le point $B$ situé à une distance $d = 5 \, cm$ de l’axe de rotation.
   - a) Déterminer la distance parcourue par le point entre les instants $t_0 = 0 \, s$ et $t_1 = 3 \, s$.  
   - b) Déterminer l’expression de la vitesse linéaire $v(t)$ du point $B$ en fonction du temps.  
   - c) Donner les expressions des composants du vecteur accélération $a_B$ du point $B$ dans la base de Frenet, en fonction du temps.  
   - d) Calculer l'accélération $a_B$ au l’instant $t = 10 \, s$.
```

<!-- Page 85 -->

```markdown
### Exercice 3

La courbe ci-contre donne les variations de la vitesse angulaire d’un point $M$ du périmètre d’un disque $(D)$ en rotation sans frottement autour d’un axe fixe (A)  
1. Quelle est la nature du mouvement du disque?  
2. En exploitant la courbe ci-contre déterminer la valeur de la vitesse angulaire initiale $\theta_0$ et celle de l’accélération $\theta_M$ angulaire du point $M$.  
3. Déterminer l’équations horraire de l’abscisse angulaire du point $M$.  En notant: $\theta_0 = 0 \text{ rad}$  
4. Calculer les composantes de l’accélération du point $M$ dans un repère de Frenet à l’instant $t_1 = 4 \text{s}$  
5. Lors du mouvement, le disque est soumis à un couple de moment constant $M_A = 0,32 \text{N.m}$  
   a. Calculer le moment d’inertie du disque.  
   b. Déduire la valeur de la masse $m$ du disque.  
   
**Données:**  
- Le rayon du disque: $R = 15 \text{cm}$  
- Le moment d'inertie du disque: $J_A = \frac{1}{2} m R^2$

### Exercice 4

La courbe de la figure ci-contre donne l’évolution temporel de l’abscisse curviligne $s(t)$ d’un point $M$ de la surface latérale d’un cylindre en rotation autour d’un axe $(\Delta)$ confondu avec son axe de révolution.  
La droite $(D_0)$ et la tangente à la courbe $s(t)$ à la date $t_0 = 0 \text{s}$ et $(D_1)$ est sa tangente à la date $t_1 = 20 \text{s}$  
1. Quelle est la nature du mouvement du cylindre?  
2. En exploitant la courbe ci-contre déterminer la valeur de l’abscisse curviligne initiale $s_0$, la valeur de la vitesse initiale $V_0$ et celle de la vitesse $v_1$ à la date $t_1 = 20 \text{s}$ du point $M$.  
3. Calculer la valeur l’accélération tangentielle du point $M$ et déduire la valeur de l’accélération angulaire du disque.  
4. Déterminer l’équation horaire de l’abscisse angulaire du disque.  

Le disque est maintenu en rotation grâce à une force tangentielle $\mathbf{F}$ d’intensité constante, appliquée au point $M$. Montrer que le mouvement du cylindre autour de l’axe $(\Delta)$ se fait sans frottement.  

**Données:**  
- Le rayon du cylindre: $R = 10 \text{cm}$  
- Le moment d'inertie du cylindre: $J_A = \frac{1}{8} m D^2$  
- La masse du cylindre: $m = 1,5 \text{kg}$  
- L’intensité de la force $\mathbf{F}$ est: $F = 0,45 \text{N}$  

### Exercice 5

Un corps $(S)$ de masse $m_S = 0,8 \text{kg}$ est attaché à une corde inextensible et de masse négligeable. La corde est enroulée sans glissement sur une poulie de rayon $r = 10 \text{cm}$ et de masse $m_P = 0,2 \text{kg}$. La poulie est en mouvement de rotation autour de l’axe $(A)$.  
On note $M_C = -0,38 \text{N.m}$ le moment du couple de frottements cylindrique de l’axe de rotation (la figure ci-contre)  

1. En appliquant la 2ème loi de Newton sur le corps $(S)$, Trouver l’expression $T'$ de l'intensité de la force exercée par la corde sur le solide $(S)$.  
2. En appliquant le principe fondamental de la dynamique sur la poulie $(P)$,  
   Trouver l’expression de l’accélération acquise par le corps $(S)$ en fonction $m_P$, $m_S$, $r$.  

**On donne:**  
- $g = 10 \text{m.s}^{-2}$  
```

<!-- Page 86 -->

```markdown
## Exercice 6

On considère un cylindre homogène de rayon $r = 5cm$ pouvant tourner sans frottement autour d'un axe fixe $(A)$. Le moment d'inertie du cylindre par rapport à l'axe $(A)$ est $J_A$. 

On enroule sur le cylindre un fil inextensible et de masse négligeable, et à l'extrémité de ce fil on accroche un corps $(S)$ de masse $m = 50g$.

Le fil est lié au corps $(S)$ comme le montre la figure $\mathrm{(C)}$ ci-contre.

À un instant $t = 0$, on libère le cylindre sans vitesse initiale on étudie le mouvement de $G$ centre d'inertie du corps $(S)$ dans un repère $R(0,K)$ lié à un référentiel terrestre supposé galiléen.

La courbe ci-contre représente les variations de la cote $z$ de $G$ centre d'inertie du corps $(S)$ en fonction du $t^2$.

1. En exploitant la courbe $z = f(t^2)$, déterminer la valeur de l’accélération de $G$.
2. Quelle est la nature du mouvement du corps $(S)$ ?
3. Quelle la distance parcoure le corps $(S)$ à l’instant $t_1 = 1 s$ ?
4. Quelle est la nature du mouvement du cylindre ?
5. Écrire l'expression de l'abscisse angulaire $\theta(t)$ en fonction du temps, sachant que son abscisse angulaire initial est : $\theta_0 = 0 rad$.
6. Calculer le nombre des tours $N$ effectués par le cylindre pendant un intervalle $\Delta t = t_1 - t_0$.
7. En appliquant la deuxième loi de Newton sur le corps $(S)$. Trouver la valeur de l’intensité $T$ de la force exercée par le fil sur le corps $(S)$.
8. En appliquant la relation fondamentale de la dynamique sur le cylindre, déterminer la valeur de $J_A$.

## Exercice 7

La figure $\mathrm{(D)}$ comprend, un corps $(S)$ de masse $m_S = 0.4kg$ capable de glisse sur un plan incliné d’un angle $\alpha = 30°$ par rapport à l'horizontal. Le corps $(S)$ est fixé par l'extrémité inférieure d'un fil inextensible de masse négligeable enroulé sur un cylindre homogène de masse $m_C$ et de rayon $R = 12cm$ capable tourner sans frottement autour d'un axe $(A)$ passé par son centre.

On abandonne le corps $(S)$ du point $O$ sans vitesse initiale, et il glisse sans frottement sur le plan incliné provoquant la rotation du cylindre.

Étudions le mouvement du centre d'inertie $G$ du corps $(S)$ dans le repère $R(0;x;0y)$ et on donne $g = 10m.s^{-2}$. La courbe de la figure $\mathrm{(E)}$ donne les variations de la vitesse $V_G$ de $G$ en fonction du temps.

1. En exploitant la courbe de la figure $\mathrm{(E)}$ déterminer:
   - $a$ - La nature du mouvement de $G$.
   - $b$ - La valeur de l’accélération de $G$.
2. Par application de la deuxième loi de Newton sur le corps $(S)$, exprimer l’intensité de la force exercée par la corde sur ce corps en fonction de $a_x$, $a_y$ et $m$.
3. En appliquant la relation fondamentale de la dynamique sur le cylindre, montrer que le moment d’inertie du cylindre peut s’écrire sous la forme : $J_A = \frac{T R^2}{\alpha_x}$, puis calculer sa valeur.
4. Déduire la valeur de la masse du cylindre.
```

<!-- Page 87 -->

```markdown
# Exercice 8

On considère un corps $(S)$ de masse $m = 0,25 kg$ capable de glisse sans frottement sur un plan incliné d’un angle $α = 30°$ par rapport à l’horizontal. Le corps $(S)$ est fixé par extrémité inférieure d’un fil inextensible de masse négligeable enroulé sur un cylindre homogène de rayon $r = 5 cm$ capable tourner sans frottement autour d’un axe $O$ passant par son centre .

On donne: 
$$ I_A = 2,5 \times 10^{-4} kg.m^{-2}; \quad g = 10 m.s^{-2} $$

## I-Mouvement du corps sur le plan incliné

On libère le corps $(S)$ du point $A$ sans vitesse initiale, et il glisse sans frottement sur le plan incliné provoquant la rotation du cylindre.  
Étudions le mouvement du centre d’inertie $G$ du corps $(S)$ dans le repère $R'(Ax';Ay')$  
- En appliquant la deuxième loi de Newton, déterminer l’accélération de $G$, centre d’inertie du corps $(S)$.  
Déduire la nature du mouvement.

2. Déterminer la valeur de la vitesse $V_0$ de $G$ au point $O$.  
Sachant que $OA = 2m$.

## II-Mouvement de chute du corps $(S)$

Au point $O$, le fil se détache du cylindre à un instant considéré comme origine du temps.  
Le corps $(S)$ tombe au point $C$ d’une altitude: $OD = 4,5 m$

1. Donner les équations horaires du mouvement de $G$ centre d’inertie du corps $(S)$ dans le repère $R(O;x;y)$  
2. Déterminer la durée de chute du corps $(S)$, ainsi la distance $DC$.  
3. Lorsque le fil se détache du cylindre, ce dernier est soumis à un couple de freinage de moment constant $M_A = -0,04 N.m$. Le cylindre s'arrête après avoir effectué un nombre du tours $N$.
   - a – Écrire l’expression de l’abscisse angulaire $\theta(t)$ en fonction du temps. On prend $\theta_0 = 0 rad$  
   - b – Déterminer le nombre de tours $N$ effectué par le cylindre durant le freinage.  

---

# Exercice 9

Le système de la figure ci-contre comprend :
- Une poulie homogène à deux gorges, est constitué de deux roues qui tournent solidairement et sans frottement autour du même axe horizontal $(A)$
- Deux corps $(S_1)$ et $(S_2)$ de masse respectivement $m_1$ et $m_2$
- Deux cordes inextensibles $(f_1)$ et $(f_2)$, de masses négligeables et ne glissent pas sur les gorges de la poulie.  
Le système est abandonné sans vitesse initiale à un instant $t = 0$.  
On étudie le mouvement de $G_1$ et $G_2$ centres d’inerties des deux corps $(S_1)$ et $(S_2)$ dans un repère $R(O;K)$ lié à un référentiel terrestre supposé galiléen. (la figure ci-contre) .

1. En appliquant la deuxième loi de Newton sur les deux corps $(S_1)$ et $(S_2)$, et sur la poulie en rotation. Montrer que l’accélération angulaire de la poulie est: 
$$ \ddot{\theta} = \frac{g(m_2R_1 - m_1R_2)}{m_1R_1^2 + m_2R_2^2} , $$
et calculer sa valeur.

2. Déterminer l’équation horaire $\theta(t)$ du mouvement de la poulie sachant que $\theta(0) = 0 rad$.

3. En déduire l’équation horaire $N(t)$ donnant le nombre de tours effectué par la poulie à un instant $t$. Calculer la valeur de $N$ à instant $t = 3s$.

---

**Données:**
- Les masses des corps $(S_1)$ et $(S_2)$ : $m_1 = 36 kg$ et $m_2 = 12 kg$
- Les rayons des roues: $R_1 = 1,2m$ et $R_2 = 0,4m$.
- Le moment d'inertie de la poulie: $I_A = 40 kg.m^{-2}$
- L'intensité de la pesanteur: $g = 10 m.s^{-2}$
```

<!-- Page 88 -->

```markdown
# Correction

## Exercice 1
1. Calculer l'accélération angulaire du point $M$
   On a : $\hat{\theta} = \frac{d\theta}{dt} = 0$ car $\ddot{\theta} = 0$.
   
   Le point $M$ est en mouvement circulaire uniforme car sa trajectoire est circulaire et sa vitesse angulaire est constante.
   
2. L'équation horaire du mouvement du point $M$
   On a : $\hat{\theta} = 12 \, \text{rad.s}^{-1}$
   Par intégration, on trouve : $\theta(t) = 12t + C$
   À $t_0 = 0$, on a $\theta(0) = 2 \, \text{rad} \Rightarrow C = 2$.
   Alors : $\theta(t) = 12t + 2$.

3. Calculer le nombre de tours effectués pendant une durée $\Delta t = 15 \, s$.
   On sait que : $N = \frac{\theta}{2\pi}$.
   Donc : $N = \frac{12t}{2\pi} \bigg|_{12t=2}$.
   Alors : $N = \frac{12 \cdot 15}{2\pi} \approx 28,65 \, \text{tours}$.

## Exercice 2
1. L'expression de la vitesse angulaire $\hat{\theta}$ du point $B$ est : $\hat{\theta}(t) = 20. t + 40$.
   
   Le point $B$ est en mouvement circulaire uniformément varié.
   
   L’accélération angulaire $\ddot{\theta}$ du point $B$ est : $\ddot{\theta} = 20 \, \text{rad.s}^{-2}$.

2. a – Déterminons la distance parcourue par le point $B$ entre les instants $t_0 = 0 \, s$ et $t_1 = 3 \, s$.
   On a : $D = S(t_1) - S(t_0) = d.\theta(t)$.
   Donc : $D = d.(10.t^2 + 40.t_1 + 6 - 6)$.
   D'où : $D = d.(10 \cdot 1 + 40 \cdot 1 + 6 - 6)$.
   A.N. : $D = 5 \times 10^{-2} \cdot (10 \cdot 9 + 40 \cdot 3)$.
   On trouve : $D = 10 \, m$.

   b – Déterminons l’expression de la vitesse linéaire $v(t)$ du point $B$ en fonction du temps.
   On a : $v(t) = r.\hat{\theta}$ avec $r = d$.
   Donc : $v(t) = t + 2$.
   
   c – Déterminons les expressions des composantes du vecteur accélération $\vec{a}_B$ du point $B$ dans la base de Frenet, en fonction du temps.
   On a : 
   $$
   \vec{a}_B =
   \begin{cases}
   a_t = r \ddot{\theta} \\
   a_n = r \hat{\theta}^2
   \end{cases}
   $$
   Donc : 
   $$
   \vec{a}_B = 
   \begin{cases}
   a_t = 5 \times 10^{-2} \cdot 20 \\
   a_n = 5 \times 10^{-2} \cdot (20 + 40)^2
   \end{cases}
   $$
   D'où : $a_t = 1 \, m.s^{-1}$ et $a_n = (4,47 + 9,94)$.

   A.N. : $a_B = \sqrt{a_t^2 + a_n^2}$.
   On trouve : $a_B = 2,98 \times 10^{3} \, \text{m.s}^{-1}$.

## Exercice 3
1. Le disque $M$ est en mouvement de rotation uniformément varié car $\hat{\theta} = f(t)$ est affine. 
   Déterminons la valeur de $\hat{\theta}_0$ et celle de $\hat{\theta}_M$.
   D’après la courbe, on a : $\hat{\theta}_0 = 2 \, \text{rad.s}^{-1}$ et $\hat{\theta}_M = \frac{60-20}{8-0} = 5 \, \text{rad.s}^{-2}$.
   
2. L'équation horaire $\theta(t)$
   On a : $\hat{\theta} = \dot{\theta}_M + \hat{\theta}_0$.
   Par intégration, on trouve : $\theta(t) = \frac{\omega_0t^2}{2} + \hat{\theta}_0 t$.
   Alors : $\theta(t) = 2.5t^2 + 2t + 0$.
   D'où : $\theta(0) = 2,5t^2 + 2t$.

3. Calculons les composantes de l'accélération du point $M$ dans la base de Frenet.
   * Calculons $a_t$.
   On a : $a_t = \frac{dM}{dt}$ avec $V_M = R\hat{\theta}$.
   Donc : $a_t = 15 \times 10^{-2}$.
   A.N. : $a_t = 15 \times 10^{-2} \approx 0,75 \, \text{rad.s}^{-2}$.

   * Calculons $a_n$.
   A l’instant $t_1 = 40 \, s$, on trouve : $a_n = 15 \times 10^{-2} \times 4 \, \text{rad.s}^{-2}$.
   On trouve : $m = 2|\frac{l}{R^2}|$.
   A.N. : $m = 2 \times 6,4 \times 10^{-2} \approx 5,69 \, \text{kg}$.
```

<!-- Page 89 -->

```markdown
# Exercice 4

1. L'abscisse curviligne du point $M$ est un parabole d'équation : $s(t) = at^2 + bt + c$  
   Donc, le cylindre est en rotation uniformément varié.

2. Déterminons les valeurs de $s_0$, $V_0$ et $V_1$  
   - Déterminons $s_0$  
     D'après la courbe, on a : $s_0 = 20 \, m$  
   - Déterminons $V_0$  
     On a : $V_0 = \frac{ds}{dt} \Rightarrow V_0 = \frac{100-20}{40-0} = 2 \, m.s^{-1}$  
   - Déterminons $V_1$  
     On a : $V_1 = \frac{ds}{dt}_{|t_1} = \frac{460-320}{14-6} = 14 \, m.s^{-1}$  

3. Calculons la valeur de $a_u$ et celle de $\dot{\theta}$  
   On a : $a_u = \frac{dV}{dt} = cte \, ( car \, le \, mouvement \, uniformément \, varié).$  
   Donc : $V(t) = a_u t + V_0$  
   Donc à l’instant $t_1$, on trouve : $V_1 = a_u t_1 + V_0$  
   Alors : $a_u = \frac{V_1 - V_0}{t_1} = \frac{14-2}{20} = 0,6 \, m.s^{-2}$.

   - Calculons $\dot{\theta}$  
     On a : $a_u = R \cdot \dot{\theta}$  
     A.N. : $ \dot{\theta} = \frac{a_u}{R} \, A.N. : \dot{\theta} = \frac{0,6}{10 \times 10^{-2}} = 6 \, rad.s^{-2}$  

**Le cylindre est en mouvement circulaire uniformément varié, donc : $\dot{\theta} = \frac{1}{2} \dot{\theta}_0 t^2 + \theta_0$.**  
Avec : $\dot{\theta} = 6 \, rad.s^{-2}$, $\dot{\theta}_0 = \frac{V_0}{R} = \frac{20}{0,1} = 200 \, rad.s^{-1}$  
Donc : $\theta_0 = \frac{s_0}{R} = \frac{20}{0,1} = 200$  

Montons que la rotation du cylindre autour de l'axe $(A)$ se fait sans frottement  
- Les forces exercées sur le cylindre sont :  
  $P$ : son poids.  
  $R$ : la réaction de l'axe $(A)$.  
  $F$ : force tangentielle.  
- Par application de la deuxième loi de Newton  
  En rotation, on a : $\sum M_A (F) = J \dot{\theta}$  
  Donc : $M_a (P) + M_a (R) + M_a (F) = J A \dot{\theta}$  
  avec $M_a (P) = 0$  
  Alors : $M_a (R) = J A \dot{\theta} - M_a (F)$  
  D’où : $M_a (R) = \frac{1}{2} m R \dot{\theta}^2$  
  A.N. : $M_a (R) = \frac{1}{8} \times 1,5 \times (20 \times 10^{-2})^2 - 0.45 \times 2 \times 10^{-2}$

- On trouve : $M_a (R) = 0 \, N.m$  
  Puisque $M_a (R) = 0 \, N.m$, donc la rotation du cylindre autour de l'axe $(A)$ se fait sans frottement.

# Exercice 5

1. Trouvons l’expression de $T'$  
   - Les forces exercées sur le corps $(S)$ sont :  
     $P_S$ : son poids  
     $T'$ : tension de la corde  
   - Par application de la 2ème loi de Newton sur le corps $(S)$, on a : $P_S + T' = m_S a_g$  
   - Pour projection sur l’axe $(Oz)$, on trouve :  
     $P_S - T' = m_S a_z$  
   Donc : $mg - T' = ma_z$  
   Alors : $T' = mg - m_a$  

2. Trouvons l’expression de $T$  
   - Les forces exercées sur la poulie sont :  
     $P_P$ : son poids  
     $R$ : la réaction de l’axe $(D)$  
     $T$ : tension de la corde  
   - Par application de la 2ème loi de Newton sur la poulie en rotation, on a : $M_a (P_P) + M_a (R)$  
   Avec $M_a (P_P) = 0$ et $M_a (R) = Mc$  
   Donc : $M_a (T) = Mc = J A \dot{\theta}$  
   Alors : $T' = \frac{1}{2} m_P r \dot{\theta} = \frac{m_c}{r}$  
   D’où : $T' = \frac{1}{2} m_p r \ddot{\theta} = Mc$  

3. Trouvons l’expression de l’accélération $a_z$  
   Avec : $T' = m_g (g - a_z) = T' = \frac{1}{2} m_p r^2 - m_c$  
   Puisque la corde est inextensible, de masse négligeable et en glissement pur sur la poulie, alors $T' = T = r \ddot{\theta}$  
   Donc : $m_g - T' = m_z a_z$  
   Donc : $T' = mg - m_c$  
  
4. Déterminons l’expression de $\dot{\theta}(t)$  
   On a : $\dot{\theta} = cte$  
   Par intégration, on trouve : $\dot{\theta}(t) = \dot{\theta}_0 t + \theta_0$  
   À $t_0 = 0$, on a : $\dot{\theta}(0) = 0$, donc $C_1 = 0$  
   Alors : $\dot{\theta}(t) = \dot{\theta}_0 \cdot t^2$  
   Par intégration, on trouve : $\theta(t) = \frac{\dot{\theta}^2}{2} + \theta_0$  
   À $t_0 = 0$, on a : $\theta(0) = 0$  
   Alors : $\theta_{0} = \frac{1}{2}$  
   D’où : $\theta(t) = \frac{a_z}{2} t^2$  
   Avec $a_z = 0,23 \, m.s^{-2}$ et $r = 10 \, cm$.  
   On trouve : $\theta(t) = 1,15 t^2$  

5. Calculons le nombre de tours effectués par le point $M$ entre les instants $t_1$ et $t_2$  
   On a : $N = \frac{1}{2 \pi} (\phi_1 - \phi_0)$  
   Donc : $N = \frac{1}{1,15} \cdot \frac{2\pi}{2 \pi}$  
   A.N. : $N = \frac{1,15}{5} = 4,58 \, tours$  
```

<!-- Page 90 -->

```markdown
# Exercice 6

1. Déterminons l'accélération $a_z$ :
   On a $f(t)$ est linéaire, d'équation $z(t) = kt^2$
   Donc : $a_z = \frac{d^2z(t)}{dt^2}$
   $$ a_z = 2 \, \text{m.s}^{-2} $$
   Et on a : $a_z = 2k$

   A.N. : $a_z = 2 \times 2 = 4 \, \text{m.s}^{-2}$

2. Le corps $(S)$ est en mouvement rectiligne uniformément varié.

3. Calculons la distance parcourue par $(S)$ à la date $t_1 = 1 \, s$ :
   On a : $z(t) = kt^2$
   Donc : $z_1 = kt_1^2 = k \cdot 2^2 = 2 \, m$
   Donc : $d_1 = Z_1 - Z_0 = 2 \, m$

4. Puisque le fil est inextensible et ne glisse pas sur le cylindre, donc $\theta = \frac{z}{r}$.
   Alors, le cylindre est en rotation uniformément variée.

5. L'expression de $\theta(t)$ :
   On a : $\frac{d^2 \theta}{dt^2} = \frac{1}{r^2} \cdot \dot{\theta}_0 + \theta_0$ avec $\theta_0 = 0$ et $\dot{\theta}_0 = 0$.
   Donc : $\theta(t) = \frac{a_z}{2 \cdot r} \cdot t^2$ avec $a_z = 4 \, m.s^{-2}$ et $r = 5 \, cm$.
   Alors : $\theta(t) = 210t^2$.

6. Calculons la valeur de $N$ :
   On a : $N = \frac{40}{2 \pi} \frac{\theta_1 - \theta_0}{2 \pi}$
   Alors : $N = \frac{40}{2 \pi} \approx 6.37 \, tours$.

---

# Exercice 7

1. a – On a : $V_g = f(t)$ et affine, et la trajectoire de $G$ est rectiligne, alors son mouvement est rectiligne uniformément varié.

   b – D'après la courbe $V_g = f(t)$, on trouve :
   $$ a_x = \frac{9 - 6}{0 - 0} = 1.5 \, m.s^{-2} $$

2. Trouvons l'expression de la force exercée par la corde sur $(S)$ :
   Les forces exercées sur $(S)$ sont :
   - $P_s$ : poids de $(S)$.
   - $R$ : réaction du plan incliné.
   - $\mathcal{T}$ : tension de la corde.
   
   Donc : $P_s + R + \mathcal{T} = m_a g$.
   
   Par projection sur l'axe $(Oz)$, on trouve :
   $$ P = P_s \sin(\alpha) - \mathcal{T} = m_a x. $$
   Alors : $\mathcal{T} = m_a g \sin(\alpha) - m_a x$.
   A.N. : $T = 0.4(10 \times \sin(30^{\circ}) - 1.5) = 4 \, N$

   Les forces exercées sur le cylindre sont :
   - $P_c$ : poids du cylindre
   - $R$ : la réaction de l'axe $(A)$
   - $\mathcal{T}$ : tension du fil.

   Par application de la deuxième loi de Newton sur le cylindre en rotation, on trouve :
   $$ M_a(\mathcal{T}) + M_a(R) + M_a(P_c) = J_a \dot{\theta} $$
   Avec $M_a(P_c) = M_a(R) = 0$.
   Donc : $M_a(\mathcal{T}) = J_a \dot{\theta}$.

   Puisque la corde est inextensible, de masse négligeable, et ne glisse pas sur le cylindre, on a :
   $$ \dot{\mathcal{T}} - R = J_a \dot{\theta}. $$
   D'où : $J_a = \frac{\mathcal{T} - T}{R}$.

   A.N. : $J_a \approx 1.34 \times 10^{-2} \, kg.m^2$.

3. Déduisons la valeur de la masse $m_c$ :
   On a : $J_a = \frac{1}{2} m_c R^2$.
   Donc : $m_c = \frac{2 \times J_a}{R^2}$ sont :
   $$ m_c = \frac{2 \times 1.34 \times 10^{-2}}{(12 \times 10^{-2})^2} \approx 1.86 \, kg. $$
   A.N. : $m_c \approx 1.86 \, kg$.
```

<!-- Page 91 -->

```markdown
# Exercice 8

## I-Mouvement du corps sur le plan incliné
Calculons l'accélération du centre d'inertie du corps $(S)$ :
- Application de la 2ème loi de Newton sur le corps $(S)$ en mouvement de translation
  - Les forces exercées sur le corps $(S)$ sont :
    - $P_s$: poids de $(S)$.
    - $R$: réaction du plan incliné,
    - $T$: tension du fil.
  - Par application de la 2ème loi de Newton, on a :
  $$ P_s + R + T = ma $$
  - Par projection sur l'axe $(O')$, on trouve :
  $$ P_s \sin(\alpha) - T = m_s a_{x'} $$
  - Donc : $T = m_s g \sin(\alpha)$
  - Alors : $T = m_s (g \sin(\alpha) - a_{x'}) \, (*)$

- Application de la 2ème loi de Newton sur le cylindre en rotation
  - Les forces exercées sur le cylindre sont :
    - $P_c$: poids du cylindre,
    - $R_a$: réaction de l'axe $(A)$,
    - $T'$: tension du fil.
  - Par application de la 2ème loi de Newton, on a :
  $$ M_a(P_c) + M_a(R_a) + M_a(T') = J \dot{\theta}$$
  - Avec $M_a(P_c) = M_a(R_a) = 0$, Donc : $T' = r J \dot{\theta}$.
  - Puisque le fil est incompressible, de masse négligeable et ne glisse pas sur le cylindre, on a :
  $$ T' = T = \frac{a_{x'}r}{r^2} \, (**) $$
  - On remplaçant $(*)$ dans l'équation $(**)$, on trouve :
  $$ m_s(g \sin(\alpha) - a_{x'}) = \frac{J a_{x'}}{r^2} $$
  $$ \iff -m_s a_{x'} = -\frac{J a_{x'}}{r^2} - m_s g \sin(\alpha) $$
  $$ \iff [m_s + \frac{J}{r^2}] a_{x'} = r^2 m_s g \sin(\alpha) $$
  $$ \implies a_{x'} = \frac{r^2 m_s g \sin(\alpha)}{m_s + \frac{J}{r^2}} $$
  - A.N.: $a_{x'} = \frac{2 \cdot 0.25 \cdot 10 \cdot \sin(30^{\circ})}{(0.05) \cdot 20.25 + 2.5 \cdot 10^{-4}} \approx 3.57 \, m \cdot s^{-2}$

## II-Mouvement de chute du corps $(S)$
$$ \text{Déterminons les équations du mouvement de } G : $$
- Les équations de la vitesse :
  - Le solide $A$ est en chute libre sous l'action de son poids.
  - D'après la 2ème loi de Newton, on a : $\vec{g} = m_a \vec{g}$
  - Par projection dans le repère $R(O, i, j)$, on trouve :
  $$ a_{x} = 0 $$
  $$ a_{y} = g $$
- Par intégration, on trouve :
  $$ v_{x} = c_1 $$
  $$ v_{y} = gt + c_2 $$
  - À $t = 0$, on a $v_{x0} = v_0 \cos(\alpha)$ et $v_{y0} = v_0 \sin(\alpha)$.
  - Donc : $c_1 = v_0 \cos(\alpha), \, c_2 = v_0\sin(\alpha)$.
  - Alors :
  $$ v_{x} = v_0 \cos(\alpha) $$
  $$ v_{y} = gt + v_0 \sin(\alpha) $$

- Les équations des coordonnées du point $G$ :
  - On a :
  $$ v_{x} = v_0 \cos(\alpha) $$
  $$ v_{y} = gt + v_0 \sin(\alpha) $$
  $$ \frac{dx_G}{dt} = v_0 \cos(\alpha) $$
  - Par intégration, on trouve :
  $$ x_G = v_0 \cos(\alpha) t + c_3 $$
  - trouve : 
  $$ y_G = \frac{gt^2}{2} + v_0 \sin(\alpha) t + c_4 $$
  - À $t = 0$, on a $x_G(0) = 0$ et $y_G(0) = 0$, donc $c_3 = c_4 = 0$.
  - Finalement, on trouve :
  $$ x_G = v_0 \cos(\alpha) t $$
  $$ y_G = \frac{gt^2}{2} + v_0 \sin(\alpha) t $$

## 3) Déterminons la durée de chute
- On a $x_G = v_0 \cos(\alpha) t$
- Au point $C$, on trouve $x_C = v_0 \cos(\alpha) t_C$
- Alors : $t_C = \frac{x_C}{v_0 \cos(\alpha)}$
- D'où : $t_C = \frac{4.5}{v_0 \cos(\alpha)} \approx 1.37 \, s$
- Calculons la distance $DC$ :
- On a :
$$ y_G = \frac{gt^2}{2} + v_0 \sin(\alpha) t $$
- Au point $C$, on trouve :
$$ y_C = \frac{g t_C^2}{2} + v_0 \sin(\alpha) t_C $$
- D'où : 
$$ D_C = \frac{g t_C^2}{2} + v_0 \sin(\alpha) t_C $$
- A.N.: $D_C \approx 11 \, m$
```

<!-- Page 92 -->

```markdown
### 8 a - Détermination de l'expression de $\theta(t)$
- L’accélération angulaire :
  - Les forces exercées sur le cylindre durant le freinage sont :
  $$ P_C : \text{poids du cylindre}, $$
  $$ R_A : \text{réaction de l'axe } O, $$
  $$ C : \text{couple de freinage du moment } M_A. $$
  Par application de la deuxième loi de Newton, on a : 
  $$ M_A(P_C) + M_D(R_A) + M_A(J) = J\ddot{\theta}. $$
  Avec : $M_A(P_C) = M_A(R_A) = 0.$
  Donc : $M_A = J_A \cdot \ddot{\theta}.$
  
- A.N. : $\ddot{\theta} = \frac{M_A}{2.5 \times 10^{-4}} \approx -160 \, \text{rad.s}^{-2}$

- Équation horaire de la vitesse angulaire :
  - On a : $\dot{\theta} = -160 \, \text{rad.s}^{-2}.$
  - Par intégration, on trouve : $\dot{\theta} = -160t + \theta_0$ 
    avec $\theta_0 = \frac{V_0}{r}$
    Alors : $\dot{\theta} = -160t + \frac{V_0}{r}.$
  Donc :  
  $$ \theta = -160t + \frac{V_0 \cdot 3.78}{5 \times 10^{-2}} $$
  D'où : 
  $$ \theta = -160t + 75.6 $$

### b
- Calculons le nombre de tours effectués par le cylindre durant le freinage :
  - Calculons la date d’arrêt du cylindre :
    - On a : $\theta_{arrêt} = 0.$
    D'où : $0 = -160t_{arrêt} + 75.6, \, \theta_{arrêt} = 75.6 \approx 0.47 \, \text{s}.$
  
- Calculons le nombre de tours :
  - On a : $N = \frac{| \theta |}{2\pi}.$
  D'où : 
  $$ N = \frac{-80 \cdot 0.47 + 75.6}{2\pi} \approx -\frac{-80 \cdot (0.47) + 75.6 \cdot 0.47}{2\pi} $$ 
  On trouve : $N \approx 2.84 \, \text{tours}.$

### Exercice 9
- Montrons l'expression de l'abscisse angulaire :
  - Application de la deuxième loi de Newton sur la poulie :
    - Les forces exercées sur la poulie sont :
      $$ P_P : \text{poids de la poulie}, $$
      $$ T_1 : \text{tension de la corde } f_1, $$
      $$ T_2 : \text{tension de la corde } f_2, $$
      $$ R : \text{réaction de l’axe } \Delta $$

    - Par application de la 2$^{ème}$ loi de Newton, on a :
      $$ M_A(P_P) + M_A(R) + M_A(T_1) + M_A(T_2) = J\ddot{\theta}. $$
      Avec : $M_A(P_P) = M_A(R) = 0.$
      D'où : $M_A(T_1) + M_A(T_2) = J\ddot{\theta}.$
      Alors : $R_1T_1 - R_2T_2 = J\ddot{\theta} (*)$.

- Application de la deuxième loi de Newton sur les corps $(S_1)$ :
  - Les forces exercées sur le corps $(S_1)$ sont :
    $$ P_1 : \text{poids de } (S_1), $$
    $$ T_1 : \text{tension de la corde } f_1. $$

  - Par application de la deuxième loi de Newton, on a : 
    $$ P_1 + T_1 = m_1g. $$ 
    Projection sur l’axe $Oz$ :
    On trouve : $m_1g - T_1 = m_1a_{z1}$
    D'où : $T_1 = m_1g - m_1a_{z1} \, (**) \, (**)$. 

- Application de la deuxième loi de Newton sur le corps $(S_2)$ :
  - Les forces exercées sur le corps $(S_2)$ sont :
    $$ P_2 : \text{poids de } (S_2), $$
    $$ T_2 : \text{tension de la corde } f_2. $$

  - Par application de la deuxième loi de Newton, on a : 
    $$ P_2 + T_2 = m_2a_{z2}. $$

- Projection sur l’axe $Oz$ :
  - On trouve : $T_2 = m_2g - m_2a_{z2} \, ( ***) $ 
    et $\ddot{\theta} = \frac{a_{z1} - a_{z2}}{R_2}.$ 
    Alors : $R_1T_1 - R_2T_2 = J\ddot{\theta} (*)$ et 
    $T_1 = m_1g - m_1a_{z1} (**)$
    Et $T_2 = m_2g - m_2R_2\ddot{\theta} \, (***)$.

On remplace $(**)(***)$, alors : 
$$ R_1(m_1 - m_1R_1\ddot{\theta}) = R_2(m_2 - m_2R_2\ddot{\theta}) = J\ddot{\theta}.$$
$$ \Rightarrow g(R_1m_1 - R_2m_2) = J\ddot{\theta} \Rightarrow \ddot{\theta} = \frac{g(R_1m_1 - R_2m_2)}{J + m_1R_1^2 + m_2R_2^2} $$

A.N. : $\ddot{\theta} = \frac{4}{36 \times 1.2 \times 0.42} \approx 4 \, \text{rad.s}^{-2} $.

### Déterminons l'équation horaire $\theta(t)$ :
- On a : $\frac{d\theta}{dt}.$
- Par intégration, on trouve : $\ddot{\theta} = \dot{\theta} + C.$
  À $t = 0, \, \theta = 0,$ donc $C = 0$. 
  Alors : $\theta(t) = \ddot{\theta} \cdot \frac{t^2}{2} + \theta_0.$ 
  D'où : $ \theta(t) = \dot{\theta} \cdot t.$
  
- À $t = 0, \, \theta = 0, \, C' = 0$. 
  Alors : $\ddot{\theta} = 4 \, \text{rad.s}^{-2}.$
  À $t = 30 \, \text{s}, \, N = 0.33 \times 30 \, \approx 9.9 \, \text{tours}.$
```

<!-- Page 93 -->

```markdown
# Systèmes mécaniques oscillants
## Unité 9

### Objectifs
- Connaître quelques systèmes mécaniques oscillants.
- Connaître les grandeurs caractérisant le mouvement oscillatoire.
- Connaître les différents régimes d’oscillations.
- Étude dynamique et énergétique de quelques système mécaniques oscillants.
- Connaître le phénomène de résonance mécanique.

### Axes du cours

#### Systèmes mécaniques oscillants
- Définition.
- Exemples de quelques systèmes mécaniques oscillants.
- Caractéristiques du mouvement oscillatoire.
- Amortissement des oscillations mécaniques.

#### Étude dynamique et énergétique d’un pendule élastique
- Étude dynamique d’un pendule élastique horizontal.
- Énergie potentielle élastique.
- Énergie cinétique d’un corps solide en translation.
- Énergie mécanique du système "masse-ressort".

#### Étude dynamique et énergétique d’un pendule de torsion
- Étude dynamique d’un pendule de torsion.
- Énergie potentielle de torsion.
- Énergie cinétique d’un corps en rotation autour d’un axe fixe.
- Énergie mécanique du pendule de torsion.

#### Étude dynamique et énergétique d’un pendule pesant
- Étude dynamique d’un pendule pesant.
- Énergie mécanique du pendule pesant.

#### Étude dynamique et énergétique d’un pendule simple
- Étude dynamique d’un pendule simple.
- Énergie mécanique d’un pendule simple.

#### Étude dynamique et énergétique d’un pendule simple
- Entretien des oscillations mécaniques.
- Phénomène de résonance mécanique.
- Influence de l’amortissement sur le phénomène de résonance mécanique.
```

<!-- Page 94 -->

# Systèmes mécaniques oscillants

## ① Définition
On appelle un système mécanique oscillant (oscillateur mécanique) tout système mécanique qui a un mouvement de va et vient autour de sa position d'équilibre stable.

## ② Exemples de quelques systèmes mécaniques oscillants

| Le pendule élastique | Le pendule simple | Le pendule pesant | Le pendule de torsion |
|---------------------|-------------------|-------------------|-----------------------|
| Il est constitué d’un corps solide de masse $m$ suspendu à un ressort à spires non jointives | Il est constitué d’un corps solide de masse $m$ suspendu à l’extrémité d’un fil inextensible | Il est tout corps solide mobile autour d’un axe ne passant pas par son centre de gravité | Il est constitué d’un corps solide de masse $m$ suspendu à l’extrémité d’un fil inextensible |

## ③ Caractéristiques du mouvement oscillatoire
Un mouvement oscillatoire est caractérisé par :
- Une position d’équilibre stable : C'est la position à laquelle le système tend à y revenir lorsque l’on s’en éloigne légèrement.
- Une période propre $T_0$ : C'est la durée nécessaire à l'oscillateur pour effectuer une oscillation (va et vient).
- Une amplitude $X_m$ ou $\theta_m$ : C'est la valeur maximale positive qui prend la grandeur qui exprime le décalage ou l'inclination de l'oscillateur de sa position d'équilibre stable.

## ④ Amortissement des oscillations mécaniques

### Définition
Le mouvement des oscillations est dit amorti si l’amplitude des oscillations diminue avec le temps jusqu’à ce qu’elle s’annule.
Le phénomène d’amortissement est provoqué par les forces de frottements. Il existe deux types deux frottements :
- Frottement solide qui se fait entre l’oscillateur et un corps solide.
- Frottement fluide qui se fait entre l’oscillateur et un fluide (liquide ou gaz).

## Régimes des oscillations
### Régime périodique
Si les frottements sont négligeables, l’amplitude des oscillations est constante dans le temps. On dit que l’oscillateur n'est pas amorti. Ce régime est caractérisé par une période propre de période $T_0$.

<!-- Page 95 -->

```markdown
# Régime pseudopériodique
Si les frottements sont faibles, l'amplitude des oscillations diminue avec le temps jusqu'à ce qu’elle s’annule. Ce régime est caractérisé par la pseudo-période $T$ avec $T \approx T_0$

# Régime apériodique
Si les frottements sont forts, l'oscillateur revient à sa position d'équilibre sans d'osciller

## II Étude dynamique et énergétique d’un pendule élastique

### 1 Étude dynamique d’un pendule élastique horizontal
#### La tension du ressort « la force de rappel »
Lorsqu’on écarte le ressort de sa position d’équilibre, celui-ci exerce une force, appelée force de rappel, noté $\vec{F}$. Cette force est parallèle à l’axe du ressort, et orienté en sens opposé à la déformation. 

L’intensité de la force de rappel est: 
$$ F = k |\Delta \ell| $$
où :
- $k$: est une constante caractérisant le ressort
- $\Delta \ell$: est l’allongement du ressort en m

#### L’équation différentielle d’un pendule élastique horizontal
On dispose sur une table à coussin d’air horizontale un solide de masse m attaché à l’une des extrémités d’un ressort à spires non jointes de masse négligeable et de constante de raideur $K$, l’autre extrémité du ressort est accrochée en un point $O$ fixe. 

Au repos, le centre d’inertie $G$ de solide $(S)$ est au point $O$ pris comme origine des abscisses sur l’axe horizontal $(Ox)$. On écarte $G$ de sa position d’équilibre suivant l’axe $(Ox)$ d’une distance $d$ vers la droite et on libère sans vitesse initiale à un instant $t = 0$.

- Le système étudié $\{S\}$ :
Les forces exercées sur $(S)$ sont :
- $\vec{P}$: Son poids.
- $\vec{R}$: Réaction du plan.
- $\vec{F}$: Force de rappel exercée par le ressort.

D’après la deuxième loi de Newton on a : 
$$ \vec{P} + \vec{R} + \vec{F} = m \vec{a_G} $$
Par projection l’axe $(Ox)$ on obtient :
$$ -F = -m a $$
$$ -K x_G = m x_G $$

$$ x_G'' + \frac{K}{m} x_G = 0 $$

#### La solution de l’équation différentielle d’un pendule élastique horizontal
La solution de l’équation différentielle :
$$ x_G'' + \frac{K}{m} x_G = 0 $$
est $x_G = X_m \cos\left(\frac{2\pi}{T_0} t + \varphi\right)$ avec $X_m, T_0$ et $\varphi$ sont des

#### constantes à déterminer
Déterminons l’expression de $T_0$:
On a :
$$ x_G = X_m \cos\left(\frac{2\pi}{T_0} t + \varphi\right) $$
$$ x_G'' = -\frac{2\pi}{T_0^2} X_m \cos\left(\frac{2\pi}{T_0} t + \varphi\right) $$
$$ x_G'' + \frac{K}{m} x_G = 0 $$
Et on a :
$$ x_G'' + \frac{K}{m} x_G = 0 $$
Donc :
$$ \frac{2\pi}{T_0} = \sqrt{\frac{K}{m}} $$
$$ T_0 = 2\pi \sqrt{\frac{m}{K}} $$
```

<!-- Page 96 -->

```markdown
##  Déterminer l’expression de $\varphi$ et celle de $X_m$.

$$
x_{c}(0) = X_m \cos(\varphi) = d
$$

On a 

$$
x_{c}(\pi) = \frac{2\pi}{T_0} X_m \sin(\varphi) = 0
$$

Donc 

$$
X_m \cos(\varphi) = d \Rightarrow  \sin(\varphi) = 0
$$

Et d’après l’équation ($a$) on a $a \cos(\varphi) > 0$ (car $X_m > 0$ et $d > 0$)

Donc $\varphi = 0 \Rightarrow \cos(0) = 1$ et $\cos(\pi) = -1$

Et par conséquent on trouve : $X_m = d$

---

## 2  Énergie potentielle élastique

### Définition

L’énergie potentielle élastique $E_{pe}$ d’un pendule élastique est l’énergie qu’il possède grâce à la déformation du ressort, elle est donnée par la relation suivante : 
$$
E_{pe} = \frac{1}{2} K x^2 + C
$$

$C$ : Est une constante qui dépend du choix de l’état de référence de l’énergie potentielle élastique en $(J)$.
- $x$ : Allongement du ressort en $(m)$, avec $x = X_m \cos\left(\frac{2\pi}{T_0} + \varphi\right)$
- $K$: La constante de raideur en $(N/m)$.
- $E_{pe}$ : L’énergie potentielle élastique en $(j)$

### Le travail de la force de rappel

Le travail de la force $\vec{F}$ lors du déplacement de son point d'application d'un point $A$ à un point $B$ est:

$$
W_{AB}(\vec{F}) = \int_{A}^{B} dW(\vec{F})
$$

Alors :

$$
W_{AB}(\vec{F}) = \int_{A}^{B} -k \cdot x \cdot dx = \frac{K}{2} (x_A^2 - x_B^2)
$$

### La relation entre le travail de la force de rappel et la variation de l’énergie potentielle élastique

On a :

$$
E_{pe}(AB) = E_{pe}(B) - E_{pe}(A)
$$

$$
E_{pe}(AB) = \frac{1}{2} K x_B^2 + C - \frac{1}{2} K x_A^2 - C = -\frac{K}{2} (x_A^2 - x_B^2)
$$

$$
\Delta E_{pe}(AB) = -W_{AB}(\vec{F}) \, \text{où} \, \vec{F} \text{ est la force de rappel exercée par le ressort sur le solide}
$$

La variation de l’énergie potentielle élastique ne dépend pas de l'état de référence.

---

## 3 Énergie cinétique d’un corps solide en translation

L’énergie cinétique $E_C$ d’un solide en mouvement de translation est: 

$$
E_C = \frac{1}{2} m v^2.
$$

- $v$ : La vitesse du solide en $(m.s^{-1})$
- $m$: La masse du solide en $(Kg)$.
- $E_C$ : L’énergie cinétique en $(j)$

### Énergie mécanique du système “masse-ressort”

#### Définition

L’énergie mécanique $E_m$ d’un pendule élastique horizontal est égale à la somme de l’énergie potentielle élastique et l’énergie cinétique :
$$
E_m = E_C + E_{pe} = \frac{1}{2} m v^2 + \frac{1}{2} K x^2 + C.
$$

### Cas de oscillations non amorties “sans frottements”:

On a :
$$
E_m = \frac{1}{2} m x^2 + \frac{1}{2} K x^2 + C
$$
donc :
$$
\frac{dE_m}{dt} = 2 m x \frac{dx}{dt} + K x \frac{dx}{dt}
$$
$$
\frac{dE_m}{dt} = m \dot{x}^2 + K x \dot{x} = 0
$$
$$
\Rightarrow \frac{dE_m}{dt} = 0 \Longrightarrow E_m = cte
$$

L’énergie mécanique de pendule élastique se conserve lorsque les frottements sont négligeables.
```

<!-- Page 97 -->

```markdown
# Étude dynamique et énergétique d’un pendule de torsion

## Étude dynamique d’un pendule de torsion

### Couple de torsion

Le système mécanique de la figure ci-contre est appelé pendule de torsion, il est formé d’une barre suspendue à un fil métallique, 
le centre de gravité de la barre étant sur l'axe du fil (l'axe de rotation) et 
l’autre extrémité du fil est fixée à support fixe.  
Lorsqu’on fait tourner la barre autour du fil, celui-ci réagit à la torsion en exerçant un couple de rappel dont le moment est
proportionnel à l’angle de torsion du fil tel que: 

$$ M_c = -C \cdot \theta $$ 

avec :
- $M_c$ : le moment de torsion en : N.m
- $\theta$ : l'angle de torsion en : rad
- $C$ : la constante de torsion, est une grandeur caractérisant 
le fil métallique, son unité est : N.m.rad$^{-1}$

### Équation différentielle

Le système étudié {La barre AB} 
- Les forces exercées sur (S) sont :
  - $\vec{P}$ : Son poids.
  - $\vec{R}$ : Tension de fil.
  - Couple de torsion du moment $M_c = -C\theta$

- En appliquant la deuxième loi de Newton en rotation on a : $M_a(\vec{P}) + M_a(\vec{R}) + M_c = J_A\ddot{\theta}$ 
avec $M_a(\vec{P}) = 0$ et $M_a(\vec{R}) = 0$ (la direction de $\vec{P}$ et celle de $\vec{R}$ passent par l’axe de rotation $\Delta$) 
Donc : $M_c = J_A\ddot{\theta}$ 
$$ \iff -C\theta = J_A\ddot{\theta} $$

### La solution de l’équation différentielle

La solution de l’équation différentielle 

$$ \ddot{\theta} + \frac{C}{J_A} \theta = 0 $$

est $\theta(t) = X_m \cos\left( \frac{2\pi}{T_0} t + \varphi \right)$ avec $ \theta_m$, $T_0$ et $\varphi$ sont des constantes à déterminer.
  
#### Déterminons l’expression de $T_0$

Pour $ \theta = \theta_m \cos\left( \frac{2\pi}{T_0} t \right)$

$$ \dot{\theta} = \frac{2\pi}{T_0} g m \sin\left( \frac{2\pi}{T_0} t + \varphi \right) $$

$$ \ddot{\theta} = -\left(\frac{2\pi}{T_0}\right)^2 \theta_m \cos\left( \frac{2\pi}{T_0} t + \varphi \right) $$

Et on a $ \ddot{\theta} + \frac{C}{J_A} \theta = 0$

Donc :

$$ \left( \frac{2\pi}{T_0} \right)^2 = \frac{C}{J_A} \implies T_0 = 2\pi \sqrt{ \frac{J_A}{C} }$$

#### Déterminons les expressions de $\varphi$ et $\theta_m$

Pour $ \theta(0) = \theta_0 $ :

$$ \theta(0) = \theta_m \cos(\varphi) $$

Pour $ \dot{\theta}(0) = \theta_0 $ :

$$ \dot{\theta}(0) = \frac{2 \pi}{T_0} \theta_m \sin(\varphi) $$

Et d’après l’équation (a) on a $\cos(\varphi) > 0$ (car $\theta_m > 0$ et $ \dot{\theta} > 0$)

Donc $ \varphi = 0$ (cos(0) = 1 et cos(π) = -1)

Et par conséquent on trouve: $ \theta_m = \theta_0 $
```


<!-- Page 98 -->

```markdown
## Énergie potentielle de torsion
### Définition
L’énergie potentielle de torsion $E_{pt}$ est donnée par la relation suivante : $E_{pt} = \frac{1}{2} C \theta^2 + \text{cte.}$
- cte : Est une constante qui dépend du choix de l’état de référence de l’énergie potentielle de torsion en (J).
- $\theta$ : L'abscisse angulaire en (rad), avec $\theta = \theta_m \cos\left(\frac{2\pi}{T_0} + \varphi\right)$
- $C$ : La constante de torsion (N.m.rad$^{-1}$).
- $E_{pt}$ : L’énergie potentielle de torsion en (J)

### Travail du couple de torsion
Le travail du couple de torsion de moment $M_A(C) = -C\theta$ exercée par un fil de torsion sur un solide qui se déplace entre les positions $\theta_A$ et $\theta_B$ est : 
$$ 
W_{AB}(\vec{F}) = \int_{A}^{B} M_A(\vec{F}).d\theta \quad \text{avec } M_A(C) = -C\theta 
$$
Donc :
$$ 
W_{AB}(\vec{F}) = \int_{A}^{B} -C\theta.d\theta = -\frac{1}{2} C \left( \theta_{A}^{2} - \theta_{B}^{2} \right) 
$$

### La relation entre le travail du couple de torsion et la variation de l’énergie potentielle de torsion
On a : $\Delta E_{pt}(AB) = E_{pt}(B) - E_{pt}(A)$
$$
\Leftrightarrow E_{pt}(B) = \frac{1}{2} C \theta_B^{2} + \text{cte} - \frac{1}{2} k \theta^2 - \text{cte} = -\frac{k}{2} \left( \theta_{B}^{2} - \theta_{A}^{2} \right)
$$
$$
\Delta E_{pe}(AB) = -W_{AB}(C) \quad \text{C'est le couple de torsion de moment } M_A(C) = -C\theta
$$
La variation de l’énergie potentielle de torsion ne dépend pas de l’état de référence.

## Énergie cinétique d’un corps en rotation autour d’un axe fixe
L’énergie cinétique $E_C$ d’un corps solide de moment d'inertie $J_A$ en mouvement de rotation autour d’un axe fixe est : 
$$
E_C = \frac{1}{2} J_A \dot{\theta}^2.
$$
- $\dot{\theta}$ : La vitesse angulaire en (rad.s$^{-1}$).
- $J_A$ : Le moment d’inertie en (Kg.m$^{2}$).
- $E_C$ : L’énergie cinétique en $(J)$.

## Énergie mécanique du pendule de torsion
### Définition
L’énergie mécanique $E_m$ d’un pendule de torsion est égale à la somme de l’énergie potentielle de torsion et l’énergie cinétique : 
$$
E_m = E_C + E_{pt} = \frac{1}{2} J_A \dot{\theta}^2 + \frac{1}{2} C \theta^2 + \text{cte}.
$$

### Cas des oscillations non amorties “sans frottements”:
On a : 
$$
\dot{E}_m = \frac{1}{2} J_A \dot{\theta}^2 + \frac{1}{2} C \theta^2 + \text{cte}
$$
Donc :
$$
\dot{E}_m = \frac{1}{2} J_A \cdot 2 \dot{\theta} \ddot{\theta} + \frac{C}{J_A} \theta \ddot{\theta} = 0
$$
$$
\Leftrightarrow J_A \ddot{\theta} + C \theta = 0 \quad \Rightarrow \ddot{\theta} + \frac{C}{J_A} \theta = 0
$$
L’énergie mécanique de pendule de torsion se conserve lorsque les frottements sont négligeables.

### Cas des oscillations amorties “avec frottements”:
L’amplitude des oscillations décroît au cours du temps, le régime est pseudopériodique de pseudo-période $T$.
L’énergie mécanique du système diminue au cours du temps, et elle est dissipée par un transfert thermique.
```


<!-- Page 99 -->

```markdown
# IV Étude dynamique et énergétique d’un pendule pesant

## ① Étude dynamique d’un pendule pesant
- **Équation différentielle**
  On considère un pendule pesant constitué d’un solide $(S)$ homogène de centre d'inertie $J_A$ et de masse. Ce système peut tourner autour d’un axe horizontal $(A)$ (la figure ci-contre ).
  On écarte le solide $(S)$ de sa position initiale d’un angle $\theta_0 > 0$, puis on le libère sans vitesse initiale, il effectue donc un mouvement de va-et-vient autour de sa position d’équilibre. Les frottements sont supposés négligeables et les positions de $G$ centre d'inertie du solide sont repérées par l’abscisse angulaire $\theta$.

- **Le système dynamique {le solide $(S)$}**
  - Les forces exercées sur $(S)$ sont :
    - $\vec{P}$ : Son poids.
    - $\vec{R}$ réaction de l’axe de rotation.

  - En appliquant la deuxième loi de Newton en rotation on a : $M_A(\vec{P}) + M_A(\vec{R}) = J_A \ddot{\theta}$ avec $M_A(\vec{R}) = 0$  
    (la direction de $\vec{R}$ passe par l’axe de rotation $(A)$)  
    Donc : $M_A(\vec{P}) = J_A \ddot{\theta}$ avec : $M_A(\vec{P}) = -mgGH$  
    Avec : $GH = d = \sin(\theta)$  
    Donc : $-mg \sin(\theta) = J_A \ddot{\theta} + \frac{mgd}{J_A} \sin(\theta) = 0$

- **L'expression de la période propre d'oscillation**
  La période propre du pendule pesant est : 
  $$ T_0 = 2\pi \sqrt{\frac{J_A}{mgd}} $$

## ② Énergie potentielle de la pesanteur
- **Définition**
  L’énergie potentielle de la pesanteur $E_{pp}$ d’un pendule pesant est donnée par la relation suivante :  
  $$ E_{pp} = mgz + \text{cte} $$
  - cte : Est une constante qui dépend du choix de l’état de référence de l’énergie potentielle de torsion en $(j)$.
  - $z$ : La côte du centre d'inertie $G$ du solide dans un repère d'axe $(OZ)$, dirigé vers le haut.
  - $m$ : La masse du solide en $(Kg)$.
  - $g$ : L'intensité de la pesanteur en $(N.Kg^{-1})$.
  - $E_{pp}$ : L’énergie potentielle de pesanteur $(j)$.

- **L'expression de $E_{pp}$ en fonction de $m$, $g$, et $\theta$**
  On a :  
  $$ E_{pp} = mgz + \text{cte} $$
  Déterminons l’expression de $z$ en fonction de $\theta$  
  On a : $z = OH = OA - HA \text{ avec } HA = AG \cos(\theta)$  
  Donc : $z = OH - AG \cos(\theta)$ avec $AG = OA = d$ (le rayon de la trajectoire de $G$)  
  Alors $z = d(1 - \cos(\theta))$  
  Finalement on trouve :  
  $$ E_{pp} = mgd(1 - \cos(\theta)) + \text{cte} $$

  - **Cas des oscillations faibles :** $1 - \cos(\theta) \approx \frac{\theta^2}{2}$  
  Donc l’expression de l’énergie potentielle de pesanteur devient :  
  $$ E_{pp} = \frac{1}{2} mgd \theta^2 + \text{cte} $$

- **La relation entre le travail du poids et la variation de l’énergie potentielle de la pesanteur**
  On a :  
  $$ \Delta E_{pp}(AB) = mgz_B - mgz_A - \text{cte} $$  
  $\Leftrightarrow \Delta E_{pp}(AB) = mgz_B - z_A - \text{cte}$  
  donc :  
  $$ \Delta E_{pp}(AB) = -mg(z_A - z_B) = -\vec{W}(\vec{P}) \text{ où } \vec{P}$ est le poids du solide.  
  La variation de l’énergie potentielle de pesanteur ne dépend pas de l’état de référence.
```

<!-- Page 100 -->

```markdown
### Énergie mécanique du pendule pesant

#### Définition
L'énergie mécanique $E_m$ d'un pendule pesant est égale à la somme de l'énergie potentielle de pesanteur et l'énergie cinétique : 
$$
E_m = E_c + E_{pp} = \frac{1}{2}J_A \dot{\theta}^2 + mgz + \text{cte}
$$

#### Cas des oscillations non amorties “sans frottements”
On a : $E_m = \frac{1}{2}J_A \dot{\theta}^2 + Cte$
donc :
$$
\frac{dE_m}{dt} = \frac{1}{2}J_A 2\dot{\theta}\ddot{\theta} + mg\dot{z} = 0
$$
$$
\Longrightarrow \frac{dE_m}{dt} = J_A \dot{\theta}(\ddot{\theta} + \frac{mg}{J_A} \theta) \text{ avec } \ddot{\theta} + \frac{mg}{J_A} \theta = 0
$$
L’énergie mécanique de pendule pesant se conserve lorsque les frottements sont négligeables.

#### Cas des oscillations amorties “avec frottements”
L'amplitude des oscillations décroît au cours du temps, le régime est pseudopériodique de pseudo-période $T$. 
L’énergie mécanique du système diminue au cours du temps, elle est dissipée par un transfert thermique.

---

### Étude dynamique et énergétique d'un pendule simple

#### Étude dynamique d’un pendule simple
##### Équation différentielle
Un pendule simple est constitué d'une bille de masse $m$ et de centre d'inertie $G$. Elle est accrochée à l’extrémité $O$ d'un fil inextensible de longueur $l$ et de masse négligeable. 
On écarte la bille de sa position d’équilibre d'un angle $\theta_0 > 0$ par rapport à la droite verticale passant par le point $O$ et on la lâche sans vitesse initiale à $t = 0$. Les frottements sont supposés négligeables, les positions de $G$ centre d'inertie de la bille sont repérées par l’abscisse angulaire $\theta$.

##### L’expression de la période propre d’oscillation
La période propre du pendule pesant est : 
$$
T_0 = 2\pi \sqrt{\frac{l}{g}}
$$

### Énergie mécanique d’un pendule simple

#### Définition
L'énergie mécanique $E_m$ d'un pendule pesant est égale à la somme de l'énergie potentielle de pesanteur et l'énergie cinétique : 
$$
E_m = E_c + E_{pp} = \frac{1}{2}m{l}^2\dot{\theta}^2 + mgz + \text{cte}
$$

#### Cas des oscillations non amorties “sans frottements”
On a : $E_m = \frac{1}{2}m{l}^2\dot{\theta}^2 + Cte$
Donc:
$$
\frac{dE_m}{dt} = \frac{1}{2}m{l}^2 2\dot{\theta}\ddot{\theta} + 1 mg\dot{z} = 0
$$
$$
\Longrightarrow \frac{dE_m}{dt} = m{l}^2(\dot{\theta} \left(\frac{d^2\theta}{dt^2} + \frac{g}{l}\right) \text{ avec } \ddot{\theta} + \frac{g}{l} \theta = 0
$$
$$
\Longrightarrow \frac{dE_m}{dt} = 0 \text{ donc } E_m = \text{cte}
$$

#### Cas des oscillations amorties “avec frottements”
L'amplitude des oscillations décroît au cours du temps, le régime est pseudopériodique de pseudo-période $T$. 
L’énergie mécanique du système diminue au cours du temps, elle est dissipée par un transfert thermique.
```

<!-- Page 101 -->

```markdown
# La résonance mécanique

1. **Entretien des oscillations mécaniques**  
   Les frottements agissent sur les oscillations mécaniques et leur mouvement devient amorti. En peut entretenir les oscillations en compensant l'énergie dissipée par une méthode convenable à l'oscillateur. On lie l'oscillateur avec un appareil qui fournit l'énergie nécessaire pour que son mouvement soit périodique, cet appareil s'appelle : l'exciteateur qui est un système ayant un mouvement oscillatoire qui impose sa fréquence $f_e$ à l'oscillateur qui est appelé résonateur et le mouvement de ce dernier devient forcé.

2. **Phénomène de résonance mécanique**  
   Dans cet exemple le pendule élastique joue le rôle du résonateur, sa fréquence propre est $f_0$, alors le moteur (disque tournant) joue le rôle de l'exciteateur sa fréquence est $f_e$.  
   En faisant varier la fréquence $f_e$ de l'exciteateur et on obtient la plus grande amplitude du résonateur lorsque la fréquence $f_e$ est égale à la fréquence propre $f_0$ du résonateur. Ce phénomène est appelé résonance mécanique.

3. **Influence de l’amortissement sur le phénomène de résonance mécanique**  
   Dans le cas d’un amortissement faible du résonateur, l'amplitude des oscillations forcées à la résonance prend une valeur grande ; on dit que la résonance est aigüe.  
   Dans le cas d’un amortissement fort du résonateur, l'amplitude des oscillations forcées à la résonance prend une valeur faible ; on dit que la résonance est floue.

## Exercice 1
Un solide $(S)$ de masse $m$ est attaché à l’extrémité d’un ressort à spires non jointives, de masse négligeable et de raideur $K = 20 \, \text{N.m}^{-1}$, l’autre extrémité du ressort est attachée à un support fixe.  
Le système $(S) + \text{ressort}$ est placé sur un plan horizontal. Au repos, le centre d'inertie $G$ du solide est au point $O$, origine du repère $R(O, i)$. À partir de $O$, on écarte le solide $(S')$ d’une distance $d = 3 \, \text{cm}$ dans le sens positif et on le lâche sans vitesse initiale à un instant $t = 0$. Les frottements sont supposés négligeables.

1. Représenter la figure ( ), les forces exercées sur le solide $(S)$ à un instant $t$ quelconque.
2. Établir l’équation différentielle du mouvement de $G$ centre d’inertie du solide $(S)$.
3. La solution de l'équation différentielle vérifiée par l’abscisse $x_G$, est : $x_G(t) = X_m \cos\left( \frac{2\pi}{T_0} t + \varphi \right)$. Trouver les expressions de $T_0$ la période propre du mouvement et de l’amplitude $X_m$ celle et la phase à l'origine des dates $\varphi$.
4. La courbe de la figure ( ) représente les variations de l’accélération $a_G$ de $G$ en fonction de l’élongation $x_G$.  
   En expliquant ce graphique :
   a. Déterminer la valeur de la masse $m$ du solide $(S)$.
   b. Déduire la valeur de la période du mouvement $T_0$.
   c. Exprimer la vitesse $V_G$ du point $G$ en fonction du temps.
```

<!-- Page 102 -->

```markdown
# Exercice 2

Un solide de masse $m = 2,5 \, kg$ attaché à l'une des extrémités d'un ressort à spirales non jointives et de masse négligeable et de constante de raideur $k$, l'autre extrémité du ressort est accrochée en un point $O$ fixe. Au repos, le centre d'inertie $G$ de solide $(S)$ est au point $O$ pris comme origine des abscisses sur l'axe horizontal $(Ox)$. On écarte $G$ de sa position d'équilibre suivant l'axe $(Ox)$ d'une distance $d$ vers la droite et on le libère sans vitesse initiale à l'instant $t = 0$.

1. Faire le bilan des forces exercées sur le solide $(S)$ et les représenter sur le schéma.
2. En appliquant la deuxième loi de Newton déterminer l’équation différentielle du mouvement de $G$ centre d'inertie du solide $(S)$.
3. La solution de l'équation différentielle vérifiée par l'abscisse $x_G$, s’écrit sous la forme suivante :
   $$ x_G(t) = x_m \cos\left(\frac{2\pi}{T_0} t + \varphi\right). $$
   En utilisant l’équation différentielle du mouvement trouver l’expression de $T_0$ la période propre du mouvement.
4. La courbe ci-contre représente les variations de l’abscisse $x_G$ du point $G$ en fonction du temps. En exploitant la courbe déterminer la valeur de la période $T_0$, la valeur $\varphi$ et celle $x_m$.
5. Calculer la valeur de la constante de raideur $K$.

# Exercice 3

On étudie le mouvement d’une barre $AB$ de moment d’inertie $I_A = 4,2 \times 10^{-3} \, kg.m^2$ suspendu à un fil vertical, le centre de masse de la barre étant sur l’axe verticale. On fait tourner la barre d’un angle $\theta_0 > 0$ et on la lâche sans vitesse initiale, à un instant $t = 0$. Lors de son mouvement, la barre est soumise au moment du couple de torsion $M_A = -C\theta$. Les frottements sont supposés négligeables.

Les positions de la barre sont repérées par l'abscisse angulaire $\theta(t)$.

1. Faire le bilan des forces exercées sur la barre $AB$, et les représenter sur le schéma.
2. En appliquant la deuxième loi de Newton en rotation, déterminer l’équation différentielle du mouvement de la barre $AB$.
3. La solution de l'équation différentielle vérifiée par l'abscisse angulaire $\theta$, s’écrit sous la forme suivante :
   $$ \theta(t) = \theta_m \cos\left(\frac{2\pi}{T_0}t + \varphi\right). $$
   En utilisant les conditions initiales et l’équation différentielle du mouvement trouver l’expression de $T_0$ la période propre du mouvement et celle de l’amplitude $\theta_m$ et la valeur la phase $\varphi$.
4. La courbe ci-contre représente les variations de l’abscisse angulaire $\theta$ en fonction du temps. En exploitant la courbe déterminer la valeur de la période $T_0$ et celle de l’amplitude $\theta_m$.
5. Calculer la valeur de rigidité $C$.

# Exercice 4

On considère un pendule pesant constitué d’une barre $AB$ homogène de masse $m$ et de longueur $L$.

Ce système peut tourner autour d'un axe horizontal $(A)$ (la figure ci-contre). On écarte la barre $AB$ de sa position initiale d'un angle $\theta_0 > 0$, puis on le libère sans vitesse initiale, il effectue donc un mouvement de va-et-vient autour de sa position d'équilibre. Les frottements sont supposés négligeables et les positions de $G$ centre d'inertie du solide sont repérées par l’abscisse angulaire $\theta$.

1. Faire le bilan des forces exercées sur le solide $(S)$, et les représenter sur le schéma.
2. En appliquant la deuxième loi de Newton en rotation, déterminer l’équation différentielle du mouvement de $G$ centre d'inertie du solide $(S)$.
3. Dans le cas des oscillations faibles $(0 < \theta < 0,15 \, rad)$.
```


<!-- Page 103 -->

```markdown
### a
- Déterminer l’équation différentielle vérifiée par l’abscisse angulaire $\theta$
- La solution de l’équation différentielle vérifiée par l’abscisse angulaire $\theta$, s’écrit sous la forme suivante: 
$$\theta(t) = \theta_m \cos\left(\frac{2\pi}{T_0} (t + \varphi)\right)$$
En utilisant les conditions initiales et l’équation différentielle du mouvement, trouver l’expression de $T_0$, la période propre, de l’amplitude $\theta_m$ et la valeur la phase $\varphi$.
- Calculer la valeur de la période $T_0$ la période propre du mouvement de la barre.

#### Données:
- L’intensité de pesanteur : $g = 10 \, \text{m.s}^{-2}$
- Le moment d'inertie de la barre par rapport à l’axe ($\Delta$) est : $J_a = \frac{ml^2}{12}$
- La distance $AG$ est : $AG = l = 0,6 \, \text{m}$
- La masse de la barre: $m = 300g$

---

### Exercice 5
On considère un pendule élastique vertical constitué d'un ressort de masse négligeable et de raideur $K = 50 \, \text{N/m}$ et d'une bille de masse $m = 120 \, \text{g}$ (la figure ci-contre).
On écarte la bille verticalement vers le bas à partir de sa position d'équilibre d'une distance $d = 3 \, \text{cm}$ et on lâche sans vitesse initiale.
On étudie le mouvement de $G$ centre d'inertie de la bille dans repère d'axes $(Oz)$ vertical et dirigé vers le bas.
1. En appliquant la deuxième loi de Newton à l'équilibre, déterminer l’expression de l’élongation du ressort à l’équilibre $\Delta l_0$ en fonction de $k$, $m$ et $g$ et calculer sa valeur.
2. Déterminer l’équation différentielle du mouvement.
3. Calculer la valeur de la période propre du mouvement.
4. L’équation horaire du mouvement est: 
$$z_G(t) = z_m \cos\left(\frac{2\pi}{T_0} t\right)$$
Trouver l’expression de la vitesse de $G$ en fonction du temps, puis calculer sa valeur à la date $t_1 = 3,5 \, \text{s}$.

On donne: $g = 10 \, \text{m.s}^{-2}$

---

### Exercice 6
Un solide $(S)$ de masse $m = 0,16 \, \text{kg}$ est attaché à l’extrémité d’un ressort à spires non jointives de masse négligeable et de raideur $K = 30 \, \text{N.m}^{-1}$. 
À l’équilibre, le centre d’inertie $G$ du solide est au point $O$, origine du repère $R(O, \hat{i}, \hat{j})$. À partir de $O$, on écarte le solide $(S)$ d’une distance $X_m = 2 \, \text{cm}$ dans le sens positif et on lâche sans vitesse initiale à un instant $t = 0 \, \text{s}$. Les frottements sont supposés négligeables.
1. En appliquant la deuxième loi de Newton à l’équilibre, déterminez l’expression de l’élongation du ressort à l’équilibre $\Delta l_0$ en fonction de $k$, $m$, $a$ et $g$.
2. Déterminer l’équation différentielle du mouvement.
3. Calculer la valeur de la période propre du mouvement. On donne $g = 10 \, \text{m.s}^{-2}$.
4. L’équation horaire du mouvement est: 
$$x_G(t) = X_m \cos\left(\frac{2\pi}{T_0} t\right)$$
Trouver l’expression de la composante $F_x$ de la force de rappel en fonction du temps, puis calculer sa valeur à la date $t_1 = 3,62 \, \text{s}$.

---

### Exercice 7
Un pendule de torsion est constitué d’un fil métallique vertical, fixé à l’une des extrémités du disque horizontal, homogène de masse $M = 5,6 \, \text{kg}$ et de diamètre $d = 24 \, \text{cm}$. L’autre extrémité du fil est détaché à un support.
Le système $(disque)$ doit tourner autour d’un axe fixe ($\Delta$) matérialisé.
Lorsqu'on applique une force d’intensité $F = 4,23 \, \text{N}$ et de direction tangente à la gante du disque, ce dernier tourne d’un angle $\theta_m = 3,34^\circ$ de position d'équilibre stable. Puis on enlève cette force et on lâche le système sans vitesse initiale.
1. En étudiant l’équilibre du disque, calculer la constante de torsion $C$ du fil.
```

<!-- Page 104 -->

```markdown
# Établir l’équation différentielle du mouvement. On donne : $J_A = \frac{m}{g} \frac{d^2 \theta}{dt^2}$

1. La solution de l’équation différentielle du mouvement est : $\theta(t) = \theta_m \cos\left(\frac{2\pi}{T_0} t\right)$. Déterminer l’expression de la période propre $T_0$ et la calculer.
2. Écrire l’équation horaire du mouvement $\theta(t)$. Quelle est la nature de ce mouvement ?

## Exercice 8

Cet exercice a pour objectif d’étudier le mouvement d’un pendule de torsion et de déterminer quelques grandeurs liées à ce mouvement.

On dispose d’un pendule de torsion constitué d’un fil métallique, de constante de torsion $C$ et d’une tige $MN$ homogène de masse $m = 0,12$ kg et de longueur $L = 20$ cm fixée en son centre d’inertie $G$ à l’une des extrémités du fil.  
L’autre extrémité du fil est liée en un point $P$ d’un support fixe. (la figure ci-contre).

La tige $MN$ de moment d'inertie $I_A = \frac{mL^2}{12}$ peut effectuer un mouvement de rotation sans frottements autour d'un axe $(\Delta)$ confondue avec le fil métallique.  
On écarte la tige de sa position d'équilibre d'un angle et on $\theta_0 > 0$ et on l’envoie avec une vitesse initiale $\dot{\theta}(0)$.

On étudie le mouvement de la tige $MN$ dans un référentiel terrestre supposé galiléen et on repère la position de la tige $MN$ à chaque instant $t$ par son abscisse angulaire $\theta$ par rapport à sa position d’équilibre stable.

La courbe ci-contre représente l’évolution temporelle de la vitesse angulaire $\dot{\theta}$ de la tige.

En appliquant relation fondamentale de la dynamique sur la barre en rotation, établir l’équation différentielle du mouvement.

En exploitant la courbe $f(t)$, déterminer :
- La période propre du mouvement $T_0$.
- L’amplitude de la vitesse angulaire $\theta_m$.
- La vitesse angulaire initiale $\dot{\theta}(0)$.

La solution cette équation différentielle s’écrit sous la forme :
$$ \theta(t) = \theta_m \cos\left(\frac{2\pi}{T_0} t + \varphi\right), \text{ où } T_0 \text{ est la période propre du pendule.} $$
Calculons la valeur de $\theta_m$, la valeur de $\varphi$ et celle de $C$.  
Montrer que l’expression numérique de la vitesse angulaire, exprimée en $rad.s^{-1}$, s’écrit : 
$$ \dot{\theta}(t) = 4 \cos\left(\frac{3\pi}{4} nt + \frac{2\pi}{3}\right) . $$

## Exercice 9

Le gravimètre est un appareil qui permet de déterminer, avec une grande précision, la valeur de l’intensité de pesanteur $g$ en un lieu donné.  
Les domaines d’utilisation des gravimètres sont nombreux : la géologie, l’océanographie, la sismologie, l’étude spatiale, la prospection minière … etc.

On modèle un type de gravimètre par un système mécanique oscillant constitué par :
- Un tige $AB$, de masse négligeable et de longueur $L$, pouvant tourner dans un plan vertical autour d'un axe fixe $(\Delta)$ horizontal passant par l’extrémité $A$.
- Un solide $(S)$, de masse m et de dimensions négligeables, fixé à l’extrémité $B$ de la tige.
- Un ressort spiral, de constante de torsion $C$, qui exerce sur la tige AB un couple de rappel de moment $M_C = -C \theta$ qui désigne l’angle fait avec la verticale ascendante $(Ay)$.

On étudie le mouvement de ce système mécanique dans un repère orthonormé $R(A, \hat{i}, \hat{j})$ lié à un référentiel terrestre supposé galiléen.

### Données
- Masse du solide $(S)$ : $m = 0,05$ kg.
- Longueur de la tige : $L = 0,7$ m.
- Constante de torsion du ressort spiral : $C = 1,31$ N.m/rad.
- Moment d’inertie du système par rapport à l’axe $(\Delta)$ : $I_A = mL^2$.

### Approximations pour les angles faibles : $\sin\theta \approx \theta$ et $\cos\theta \approx 1 - \frac{\theta^2}{2}$.
```

<!-- Page 105 -->

```markdown
On écarte le système mécanique de sa position d'équilibre verticale d’un petit angle $\theta_0$ dans le positif puis on le lâche sans vitesse initiale à un instant pris comme origine des dates $(t = 0)$.
Le système est repéré à chaque instant $t$ par son abscisse angulaire $\theta$, et les frottements sont négligeables.
En appliquant la relation fondamentale de la dynamique dans le cas de rotation, montrer que l'équation différentielle du mouvement du système, pour les faibles oscillations est:

$$
\ddot{\theta} + \left( \frac{c}{m l^2} - \frac{g}{l} \right) \theta = 0 .
$$

1. Par l'analyse dimensionnelle, déterminer la dimension de l'expression $\frac{c}{m l^2} - \frac{g}{l}$.
2. Pour que la solution de l'équation différentielle précédente soit : $\theta(t) = \theta_0 \cos\left( \frac{2\pi}{T_0} t + \varphi \right)$, il faut que la constante de torsion $C$ soit supérieure à une valeur minimale $C_{min}$. Trouver l'expression de $C_{min}$ en fonction de $m$, $L$ et $g$.
3. La courbe ci-contre représente l'évolution de l'abscisse angulaire $θ(t)$ dans le cas où $C < C_{min}$. En exploitant cette courbe déterminer 
   - $a$ — La valeur de la période $T_0$,
   - $b$ — L'amplitude $\theta_0$ . Sinusoïdale de 
   - $c$ — La phase à l'origine $\varphi$.
4. Trouver l'expression de l'intensité de pesanteur $g$ en fonction de $L$, $m$, $C$ et $T_0$ et calculer sa valeur.

### Exercice 10
Le montage ci-contre permet d’étudier les oscillations forcées du système {solide – ressort}. À l’aide d’un fil, on relie l’extrémité supérieur du ressort à un excentrique point du disque moteur. Lorsque ce dernier tourne, il engendre un mouvement oscillatoire vertical du système avec une période égale à la sienne. En traitant les données par un système informatique on obtient la courbe qui représente les variations de l’abscisse $x$ au centre d’inertie du solide en fonction du temps.

#### Données
- Masse du solide : $m = 100g$
- La constante de raideur $K = 40N.m^{-1}$

1. Déterminer la période et l’amplitude des oscillations du système.
2. Quelle est la fréquence de rotation du disque ?
3. Qu’appelle-t-on le système {solide – ressort} ? Et le moteur ?
4. On change la fréquence du disque du moteur et on enregistre comme c’est décrit précédemment, les oscillations du système {solide – ressort} pour chaque fréquence. Puis on trace les variations de l’amplitude $X_m$ de l’abscisse $x$ en fonction de la fréquence $f$ du disque du moteur.
   - $a$ — Déterminer la fréquence $f_e$ et la période $T_e$ des oscillations à la résonance.
   - $b$ — Comparer la fréquence $f_e$ à la fréquence propre $f_0$ des oscillations. Que peut-on déduire?
```

<!-- Page 106 -->

```markdown
# Exercice 11

Un pendule de torsion est constitué d’un fil d’acier de constante de torsion $C$ et une barre homogène $AB$ de longueur $L$ et de masse $m$, suspendue à ce fil en son centre $G$. Son moment d'inertie par rapport à l'axe $(\Delta)$ confondu avec le fil est $I_0 = \frac{mL^2}{12}$. À la même distance $d$ de l'axe $(\Delta)$ on fixe sur la barre deux masselottes $(S_1)$ et $(S_2)$ de masse $m_1 = m_2 = m = 0,15kg$.

Le moment d'inertie de la masselotte $(S_1)$ par rapport à l'axe $(\Delta)$ est : $I_1 = m_1 \cdot d^2$. On écarte la barre de sa position d’équilibre, dans le plan horizontal d’un angle $\theta_m = \frac{\pi}{6} \text{ rad}$ et on l’abandonne sans vitesse initiale à un instant $t = 0$.

1. Exprimer le moment d’inertie $I_A$ du système {la barre $AB$ + $(S_1)$ + $(S_2)$} en fonction de $m$, $L$ et $d$.
2. Établir l’équation différentielle du mouvement du système.
3. La solution de l’équation différentielle du mouvement est: $\theta(t) = \theta_m \cos \left(\frac{2\pi}{T_0} t \right)$. Montrer que la période propre $T_0$ d’oscillations est: $T_0^2 = \frac{8\pi^2 m^2}{C} = \frac{\pi^2 L m}{3C}$.
4. En exploitant la courbe ci-contre $T_0^2 = f(d^2)$. Déterminer les valeurs des $I_0$ et $C$, et en déduire la valeur de longueur $L$ de la barre.

# Exercice 12

Soit un pendule de torsion constitué d’un fil vertical d’axe $(\Delta)$ et de constante de torsion $C$, à l’extrémité duquel est fixée une barre de moment d'inertie $I_A$ par rapport à l'axe $(\Delta)$ passant par son centre d’inertie. 

On donne à ce pendule qui se trouve dans sa position d’équilibre une énergie $E = 22 \text{ mj}$. On observe qu'il oscille autour de la position et il atteint une amplitude maximale $\theta_m = \frac{\pi}{6}$. Les frottements supposés négligeables.

1. Calculer la valeur de la constante de torsion $C$. On donne $E_{pot}(0) = 0$.
2. Calculer la valeur du moment d’inertie $I_A$. Sachant que la période d'oscillations est : $T = 2 s$.
3. Calculer la valeur de la vitesse angulaire de la barre lors de son passage par la position d’équilibre.

# Exercice 13

Les ressorts se trouvent dans plusieurs appareils mécaniques, comme les voitures et les bicyclettes... et produisent des oscillations mécaniques. Cet exercice a pour objectif, l’étude énergétique d’un oscillateur établi constitué d’un solide $(S)$ de masse $m$ fixé à l’extrémité d’un ressort à spires non jointives et de masse négligeable et de raideur $k = 8N.m^{-1}$. 

1. À l’autre extrémité du ressort est fixé à un support.
2. On repère la position de $G$ centre d’inertie du solide $(S)$ à chaque instant $t$, dont le centre $O$ est confondu avec la position de $G$ à l'équilibre. Les frottements supposés négligeables.
3. On écarte le solide $(S)$ horizontalement de sa position d’équilibre dans le sens positif de l’axe $X_0$ et on libère sans vitesse initiale à un instant $t = 0$.
4. On choisit le plan horizontal passant par $G$ comme référence de l’énergie potentielle de pesanteur, et l’état dans lequel le ressort n’est pas déformé comme référence de l’énergie potentielle élastique. À l’aide d’un dispositif informatique adéquat, on obtient les courbes représentant les variations d’énergies cinétique $E_c$, l'énergie potentielle élastique $E_{pe}$ et l'énergie $E_m$ du système au cours du temps.

ÉLECTRON & 2BAC-PC-SM & Mécanique
```

<!-- Page 107 -->

```markdown
1. Indiquer les courbes $(a)$, $(b)$ et $(c)$ Justifier la réponse.
2. Déterminer la valeur de l’énergie mécanique $E_m$ du système oscillant.
3. En déduire la valeur de la distance $X_0$.
4. En utilisant la variation de l’énergie potentielle élastique oscillant, trouve le travail de la force de rappel $F$ exercée par le ressort sur $(S)$ lors du déplacement de $G$ de la position $A$ d’abscisse $X_A = X_0$ vers la position $O$.
5. Déterminer la période propre $T_0$ d’oscillations, et déduire la valeur de la masse du solide $(S)$.
6. Calculer la valeur de la vitesse du solide lors de son passage par le point $O$ pour la deuxième fois.

## Exercice 14

Un pendule pesant est constitué d'une tige homogène $AB$ de masse $m$, de centre d'inertie $G$ et de longueur $L$ pouvant effectuer un mouvement de rotation autour d’un axe horizontal $(A)$ passant par son extrémité $O$.

On étudie le mouvement du pendule dans un repère $R(O,\vec{k})$ lié à un référentiel terrestre supposé galiléen.

On écarte la barre $AB$ de sa position d'équilibre stable d'un petit angle $\theta_0$, dans le sens positif, puis on la lâche avec une vitesse initiale à l'instant $t = 0$. On repère les positions du pendule à chaque instant $t$ par l'abscisse angulaire $\theta$. Lorsque le pendule passe par sa position d'équilibre stable, le centre de $G$ de la barre est confondu avec le point $O$ d'origine du repère.

On néglige tous les frottements et on choisit le plan horizontal passant par $O$ comme état de référence de l’énergie potentielle de pesanteur.

### Données

- La longueur de la tige : $L = 50cm$
- La masse de la barre : $m = 420g$
- Le moment d'inertie du pendule par rapport à l'axe $(A)$ : $I_A = \frac{mL^2}{3}$

- Pour les petites oscillations on admet que $\cos\theta \approx 1 - \frac{\theta^2}{2}$, avec $\theta$ en radian

1. Trouver l’expression de l’énergie du potentiel du pesanteur de ce pendule à un instant $t$, dans le cas des petites oscillations en fonction de $L$, $m$, $g$ et $\theta$.
2. Par une étude énergétique, montrer que l’équation différentielle du mouvement est : $$ \ddot{\theta} + \frac{3g}{2L} \theta = 0 $$
3. La courbe ci-contre représente l’évolution de l’énergie cinétique $E_c$ du pendule au cours du temps . En exploitant ce courbe déterminer la valeur de période propre d’oscillation $T_0$ et celle de $E_{pp}(t = 0)$.
4. Calculer la valeur de l’intensité de pesanteur $g$.
5. Calculer $\theta_0$ et celle de $\varphi$.

## Exercice 15

Cet exercice a pour but de déterminer la position du centre d’inertie $G$ d’un système oscillant et son moment d’inertie $J_A$ à l'aide d'une étude énergétique et dynamique.

Un pendule pesant de centre d'inertie $G$, est constitué par une barre $AB$ de masse $m_1 = 100g$ et d’un corps $(S)$ de masse $m_2 = 300g$ fixé à l’extrémité $B$. On note la masse de ce pendule $m = m_1 + m_2$.

Ce pendule peut tourner autour d’un axe fixe $(A)$ passant par l’extrémité $A$. On écarte le pendule de sa position d’équilibre stable d’un angle $\theta_m$ et on libère sans vitesse initiale à un instant $t = 0$, le pendule effectue un mouvement oscillatoire autour de sa position d’équilibre stable.
```

<!-- Page 108 -->

```markdown
On considère que les frottements sont négligeables, on choisit le plan horizontal passant par \( G_0 \) position de la barre à l’équilibre stable du pendule, comme origine de l’énergie potentielle du pesanteur \( E_p \).  
La courbe ci-dessous représente l’évolution de l’énergie cinétique \( E_c \) en fonction du carré de l’abscisse angulaire \( \theta^2 \).

![Image](#)

Données :  
- L’intensité de la pesanteur : \( g = 9,8 \, m.s^{-2} \)  
- Pour les petites oscillations on admet que : \( \cos \theta \approx 1 - \frac{\theta^2}{2} \) et \( \sin \theta \approx \theta \) avec \( \theta \) en radian

1. Montrer que l’énergie cinétique du pendule est :  
   $$ E_c = A \cdot \theta^2 - B $$  
   en précisant les expressions de \( A \) et \( B \) en fonction de \( m, \, g, \, \theta_m \) et \( d = AG \)
   
2. À l’aide du graphe trouver la valeur de \( d \).

3. En appliquant la relation fondamentale de la dynamique, trouver l’équation différentielle du mouvement du pendule pesant.

4. La solution de l’équation différentielle précédente est :  
   $$ \theta(t) = \theta_m \cos(2 \pi f_0 t) $$  
   Trouver l’expression de la fréquence propre \( f_0 \), en fonction de \( J_a, \, m \) et \( g \).

5. Calculer la valeur du moment d'inertie \( J_a \) du pendule , sachant que \( f_0 = 1 \, Hz \).

## Exercice 16

On fixe un solide \( (S) \) de masse \( m = 100 \, g \) à un ressort horizontal à spires non jointives, de masse négligeable et de constante de raideur \( K \).

Le solide \( (S) \) est accroché à l’une des deux extrémités du ressort, l’autre extrémité est fixée à un support immobile.  
On écarte le solide \( (S) \) horizontalement de sa position d’équilibre dans le sens positif d’une distance \( X_0 \) et on le libère sans vitesse initiale à un instant \( t = 0 \). Le solide \( (S) \) oscille sans frottements sur un plan horizontal (la figure ci-dessous).  
On rénove la position de \( G \) centre d’inertie du solide \( (S) \) à chaque instant \( t \) par son abscisse \( x_G \) dans un repère \( O(0, \, i) \), dont le centre \( O \) est confondu avec la position de \( G \) à l’équilibre.

On choisit le plan horizontal passant par \( G \) comme référence de l’énergie potentielle de pesanteur, et l’état dans lequel le ressort n’est pas déformé comme référence de l’énergie potentielle élastique.  
À l’aide d’un dispositif informatique adéquat, on obtient deux courbes représentant les variations de l’énergie cinétique \( E_c \), et de l’énergie potentielle élastique \( E_p \) en fonction de \( x_G \).

1. Indique parmi les deux courbes \( (a) \) et \( (b) \) la courbe qui représente l’énergie cinétique \( E_c \) et celle qui représente l’énergie potentielle élastique \( E_p \).

2. Déterminer la valeur de l’énergie mécanique \( E_m \) et celle de la vitesse maximale \( V_{max} \).

3. Déterminer les valeurs de \( E_{p \, max} \) et \( X_0 \) et déduire la valeur de la constante de raideur \( K \).

ÉLECTRON  &  2BAC-PC- SM  &  Mécanique  108
```

<!-- Page 109 -->

```markdown
1. Calculer le travail $W(\vec{F})$ de la force de rappel exercée par le ressort sur le solide $(S)$, lorsque $G$ se déplace de la position $A$ d'abscisse $x_A = 0$ à la position $B$ d'abscisse $x_B = \frac{x_0}{2}$.
2. Calculer les abscisses $x_1$ et $x_2$ lorsque $E_C = 2E_{pe}$.

### Exercice 17

Un pendule de torsion est constitué d'un fil en acier, de constante de torsion $C$ et d'une tige $AB$ homogène fixée en son centre d'inertie $G$ à l'une des extrémités du fil.  
L’autre extrémité du fil est fixée à un support fixe. On note $I_a = 2,3 \times 10^{-3} \text{kgm}^2$.  
On étudie le mouvement de la tige $AB$ dans un référentiel terrestre supposé galiléen.  
On repère la position de la tige $AB$ à chaque instant $t$ par son abscisse angulaire $\theta$ par rapport à sa position d'équilibre stable.  
On choisit la position d'équilibre de la tige comme référence de l’énergie potentielle élastique de torsion et le plan horizontal passant par $G$ comme référence de l’énergie potentielle de pesanteur.  
On écarte la barre de sa position d’équilibre d’un angle $\theta_0 > 0$ et on la libère sans vitesse initiale.  
À l’aide d’un dispositif informatique adéquat, on obtient les deux courbes représentant les variations de l’énergie cinétique $E_C$ et l’énergie potentielle élastique de torsion $E_{pt}$.

1. Indiquer parmi les deux courbes $(a)$ et $(b)$ la courbe qui représente les variations de l’énergie cinétique $E_C$ et celui qui représente l’énergie potentielle élastique du torsion $E_{pt}$.
2. Déterminer la valeur de l’énergie mécanique $E_m$ et celle de la vitesse angulaire maximale $\theta_{max}$.
3. Déterminer les valeurs de $E_{ptmax}$ et de $\theta_0$ et déduire la valeur de la constante du raideur $C$.
4. Calculer le travail $W(M_C)$ du moment du couple de torsion, lors du déplacement de l’oscillateur de la position d’abscisse $\theta_1 = 0$ à la position d’abscisse $\theta_2 = 0, \text{ rad}$.  
5. Calculer les abscisses $θ_3$ et $θ_4$ lorsque $E_C = 3E_{pt}$.

### Exercice 18

On étudie dans cet exercice le mouvement d’un système oscillant $(solide - ressort)$ dans une situation où les frottements fluides ne sont pas négligeables.  
On considère un corps solide $(S)$, de masse $m$ et de centre d'inertie $G$, fixé à l’extrémité d’un ressort de masse négligeable et à spire non jointives, et de raideur $K = 20 \text{N/m}$.  
L’autre extrémité du ressort est fixée en $A$ à un support fixe.  
À l’aide d’une tige, on fixe une plaque au corps $(S)$ et on plonge une partie du corps $(S)$ dans un liquide visqueux comme indiqué sur la figure ci-contre.  
On néglige la masse de la tige et de la plaque devant celle du corps $(S)$.  
On repère la position de $G$ centre d’inertie du solide $(S)$ à chaque instant $t$ par son abscisse $x_G$ dans un repère $R(O, \vec{i})$, dont le centre $O$ est confondu avec la position de $G$ à l'équilibre.
On choisit le plan horizontal passant par $G$ comme référence de l’énergie potentielle de pesanteur et l’état dans lequel le ressort n’est pas déformé comme référence de l’énergie potentielle élastique.
```

<!-- Page 110 -->

```markdown
On écarte le solide $(S)$ horizontalement de sa position d’équilibre dans le sens positif d’une distance $X_0$ et on le libère sans vitesse initiale à un instant $t = 0$.

Un appareil de spectre informatique a permis de tracer la courbe de variation de l’abscisse du centre d’inertie $G$ en fonction du temps (la courbe dans la page précédente).

1. Quel est le régime d’oscillations observé ?

2. En calculant la variation de l’énergie potentielle élastique de l’oscillation entre les instantes $t_0 = 0$ et $t_1 = 2, 8s$, trouver le travail $W(F)$ de la force de rappel exercée par le ressort sur le solide $(S)$.

3. Déterminer la variation de l’énergie mécanique $\Delta E_m$ du système entre les instantes $t_0 = 0$ et $t_1 = 2, 8s$ et donner une explication au résultat obtenu.

4. On suppose que la pseudo-période $T$ d’oscillation est égale à la période propre $T_0$ du pendule élastique déterminer la valeur de la masse du solide $(S)$.

## Exercice 19

Un pendule élastique vertical constitué d’un ressort de masse négligeable, de longueur à vide $\ell_0$ et de raideur $k = 12, 5N.m^{-1}$ et d’un corps solide $(S)$ de masse $m$.

On écarte le solide $(S)$ verticalement vers le haut à partir de sa position d’équilibre d’une distance $d$ et on le lâche sans vitesse initiale.

### I-Étude d’équilibre du pendule

1. Déterminer les forces exercées sur le solide $(S)$.
   - On note $\ell_e$ la longueur du ressort à l’équilibre. En étudiant l’équilibre du solide $(S)$ exprimer $\ell_e$ en fonction de $m, g, \ell_0$ et $k$.

### II-Étude des oscillations libres du pendule élastique horizontal

2. On désigne le mouvement de $G$ centre d’inertie du solide $(S)$ dans repère d’axe $(Oz)$ vertical et dirigé vers le bas.
   - Par application de la deuxième loi de Newton l’équation différentielle du mouvement.

3. La solution de l’équation différentielle du mouvement s’écrit sous la forme suivante: $z_G = z_m\cos(\omega_0 t + \varphi)$. En utilisant l’équation différentielle du mouvement trouver l’expression de pulsation propre $\omega_0$ en fonction de $m$ et $k$.

4. La courbe co-contrôle donne les variations de la cote $Z_G$ en fonction du temps. En exploitant la courbe déterminer la valeur de $z_m, \varphi$ et $\omega_0$.

5. Calculer la valeur de la masse du corps $(S)$.

6. Déterminer l’expression de la vitesse du centre d’inertie du corps $(S)$, en fonction du temps, puis calculer sa valeur lors de passage de $G$ par sa position d’équilibre pour la troisième fois.

### III-Aspects énergétiques du pendule élastique horizontal

On choisit le plan horizontal passant par $O$ comme origine de l’énergie potentielle de pesanteur et l’état où le ressort n’est pas déformé comme référence de l’énergie potentielle de la pesanteur.

1. Trouver l’expression de l’énergie potentielle du pendule en fonction de $m, g, z_G$ et $k$.

2. Déterminer l’expression de l’énergie cinétique du pendule.

3. Montrer que l’énergie mécanique du pendule se conserve et calculer sa valeur.

## Exercice 20

Un pendule élastique est constitué d’un solide $(S)$ de masse $m$, attaché à l’extrémité $A$ d’un ressort horizontal de constante de raideur $k = 40N.m^{-1}$. L’autre extrémité $B$ du ressort est fixée à un support fixe nomme figure ci-contre.

On repère la position de $G$ centre d’inertie du solide $(S)$ à chaque instant $t$ dans un repère $R(O, \hat{i}, \hat{j})$, dont le centre $O$ est confondu avec la position de $G$ à l’équilibre.

On déplace le solide $(S)$ à partir de sa position d’équilibre, puis on le libère sans vitesse initiale à un instant $t$.

ÉLECTRON & 2BAC-PC-SM & Mécanique 110
```

<!-- Page 111 -->

```markdown
# I-Étude des oscillations libres non amorties
Tous les frottements sont supposés négligeables.

1. Déterminer l’expression de l’énergie mécanique du corps $(S)$ en fonction de $m$, $k$, $x_G$.
2. En expliquant la conservation de l’énergie mécanique du corps $(S)$, déterminer l’équation différentielle du mouvement de son centre d’inertie $G$.
3. En déduire l’expression de la période propre des oscillations.

# II-Étude des oscillations libres du pendule élastique horizontal
En réalité le contact du solide $(S)$ avec le plan horizontal se fait avec frottement. En tenant compte les conditions initiales précédents, un dispositif d’enregistrement convenable a permis de tracer la courbe ci-contre qui représente les variations de l’abscisse $x_G$ en fonction du temps.

1. Quel est le régime d’oscillation observé ?
2. Déterminer la pseudo-période d’oscillations.
3. Calculer la variation de l’énergie mécanique entre les instants $t_1 = 0.35\,s$ et $t_2 = 0.7\,s$.
4. Déduire la puissance moyenne de la force de rappel entre les instants $t_1$ et $t_2$.
5. On suppose que la pseudo-période $T$ d’oscillation est égale à la période propre $T_0$ du pendule élastique ; déterminer la valeur de la masse $m$ du solide $(S)$.

# Correction
## Exercice 1
1. La représenter la figure 2, les forces exercées sur le solide $(S)$ :
   - $\vec{P}$ : Son poids.
   - $\vec{R}$ : Réaction du plan.
   - $\vec{F}$ : Force de rappel exercée par le ressort.

L’équation différentielle du mouvement de $G$ centre d’inertie du solide $(S)$.

D’après la deuxième loi de Newton on a :
$$ 
\vec{P} + \vec{R} + \vec{F} = 0 
$$
Par projection par l’axe $(Ox)$ on obtient :
$$ 
-F = ma 
$$
$$ 
-Kx_G = mx_G 
$$
$$ 
\ddot{x}_G + \frac{k}{m} x_G = 0 
$$
$$ 
\Rightarrow \left( \frac{2\pi}{T_0} \right)^2 = \frac{k}{m} 
$$
$$ 
\Rightarrow T_0 = 2\pi \sqrt{\frac{m}{k}} 
$$

2. Déterminer l’expression de $\varphi$ et celle de $X_m$.
   - $x_G(0) = X_m \cos(\varphi) = d$
   - $\dot{x}_G(0) = \frac{2\pi}{T_0} X_m \sin(\varphi) = 0$

$$ 
X_m \cos(\varphi) = d 
$$
$$ 
\dot{x}_G = \frac{2\pi}{T_0} X_m \sin(\varphi) = 0 \Rightarrow \varphi = 0 \text{ ou } \varphi = \pi 
$$
D’après l’équation $(a)$ on a $ \cos(\varphi) = 0 $ (car $X_m = 0 $ et $d = 0$).
Donc $\varphi = 0$ ou $\cos(\varphi) = -1$.
Et par conséquent on trouve : $X_m = d$.

3. Déterminons la valeur de $m$.
   - On a : $a = a_x$.
   - On en sait que : $a_x = -\frac{k}{m} x_G$.
   - Donc : 
   $$ 
   a = -\frac{k}{m} x 
   $$
   Donc d'après la courbe, on a : $a = -0.2 - (−0.2) \times 10^2$.
   On trouve : 
   $$ 
   m = \frac{-20}{-10^2} = 2\,kg 
   $$
```

<!-- Page 112 -->

```markdown
# Exercise 2
1. La représenter la figure 2, les forces exercées sur le solide $(S)$
   - Le système étudié {Le solide $(S)$}
   - Les forces exercées sur $(S)$ sont :
     - $\vec{P}$ : Son poids.
     - $\vec{R}$ : Réaction du plan.
     - $\vec{F}$ : Force de rappel exercée par le ressort.

2. L'équation différentielle du mouvement de $G$ centre d'inertie du solide $(S)$.
   - D'après la deuxième loi de Newton on a :
   $$
   \vec{P} + \vec{R} + \vec{F} = m \vec{a_G}
   $$
   - Par projection l’axe $(Ox)$ on obtient :
   $$
   -F = m a_x
   $$
   $$
   \Leftrightarrow -k x_G = m x_G
   $$
   $$
   \Rightarrow \ddot{x_G} + \frac{k}{m} x_G = 0
   $$

3. Déterminons l’expression de $T_0$
   - On a : $x_G = X_m \cos(\frac{2 \pi}{T_0} t + \phi)$
   $$
   \Rightarrow x_G = 2 \pi T_0 \sin(\frac{2 \pi}{T_0} t + \phi)
   $$
   $$
   \Rightarrow \dot{x_G} = -\left(\frac{2 \pi}{T_0}\right)^2 x_G
   $$
   $$
   \Rightarrow x_G = x_G(t)
   $$
   - Et on a : $\ddot{x_G} + \frac{k}{m} x_G = 0$
   $$
   \Rightarrow \left(\frac{2 \pi}{T_0}\right)^2 x_G = 0
   $$
   - D’après la courbe on trouve : $T_0 = 2s$, $\phi = 0$ et $X_m = 5cm$.

4. Calculons la valeur de $k$
   - On a : $(\frac{T_0}{2 \pi})^2 = \frac{m}{k}$
   $$
   \Rightarrow k = \frac{4\pi^2 m}{T_0^2}
   $$
   - A.N. : $k = \frac{4\pi^2 \times 2.5}{2^2} = 24.7 \, N.m^{-1}$.

# Exercise 3
1. Déterminons les forces exercées sur la barre $AB$.
   - Le système étudié {La barre $AB$}
   - Les forces exercées sur $(S)$ sont :
     - $\vec{P}$ : Son poids.
     - $\vec{R}$ : Tension de fil.
     - Couple de torsion du moment $M_c = -C\theta$.
     
2. L'équation différentielle du mouvement de la barre.
   - En appliquant la deuxième loi de Newton en rotation on a : $M_A(\vec{P}) + M_A(\vec{R}) + M_C = J \ddot{\theta}$ avec $M_A(\vec{P}) = 0$ (la direction de $\vec{P}$ et celle de $\vec{R}$ passent par l’axe de rotation $\Delta$).
   $$
   \Rightarrow M_C = J \ddot{\theta}
   $$
   - Donc : $-C \theta = J \ddot{\theta}$.

3. Trouvons l’expression de $T_0$, $\theta_m$ et $\phi$.
   - L’expression de $T_0$
   - On a : $\ddot{\theta} = -\left(\frac{2 \pi}{T_0}\right)^2 \theta$.
   $$
   \Rightarrow \ddot{\theta} + \left(\frac{2 \pi}{T_0}\right)^2 \theta = 0
   $$
   - Et on a : $\ddot{\theta} + \left(\frac{2 \pi}{T_0}\right)^2 \theta = 0$.
   $$
   \Rightarrow \left(\frac{2\pi}{T_0}\right)^2 = \frac{C}{J}
   $$
   - Donc:
   $$
   T_0 = 2 \pi \sqrt{\frac{J}{C}}.
   $$

4. Déterminons les expressions de $\phi$ et $\theta_m$.
   - On a :
   $$
   \theta(0) = \theta_m \cos(\frac{2 \pi}{T_0} t + \phi) \quad (a)
   $$
   $$
   \dot{\theta}(0) = \frac{2 \pi}{T_0} \theta_m \sin(\phi) = 0 \quad (b)
   $$
   - Donc :
   $$
   \theta_m \cos(\phi) = \theta_0
   $$
   $$
   \sin(\phi) = 0 \Rightarrow \phi = 0 \, \text{ou} \, \pi.
   $$
   - Et d’après l’équation (a) on a $\cos(\phi) > 0$ (car $\theta_m > 0$ et $\dot{y} > 0$).
   $$
   \Rightarrow \phi = 0 \, (cos(0) = 1 \, et \, cos(\pi) = -1).
   $$
   - Et par conséquence on trouve : $\theta_m = \theta_0$.
```

<!-- Page 113 -->

```markdown
### Exercise 4

D’après la courbe on trouve: 
$$ T_0 = 4s, \quad \varphi = 0 $$
et $\theta_m = 0, 52 \text{rad}$.  
Calculons la valeur de $C$  
On a : 
$$ C \approx \frac{T_0^2}{4\pi^2} \cdot \frac{l}{c} $$

Les forces exercées sur la barre $AB$ sont :  
$\vec{P}$: son poids.  
$\vec{R}$: la réaction de l'axe de rotation.  
Déterminons l'équation différentielle du mouvement de la barre :  
- On applique la 2\text{ème} loi de Newton sur la barre en rotation, on trouve:  
$$ M_a(\vec{P}) + M_a(\vec{R}) = J \ddot{\theta} (\star) $$  
Avec $M_a(\vec{R}) = 0$ et $M_a(\vec{P}) = -mg \cdot d$  
Avec : $d = AG \cdot \sin(\theta)$  
Alors :  
$$ d : d = \frac{l}{2} $$  
Donc : 
$$ M_a(\vec{P}) = -mg \cdot \frac{l}{2} \sin(\theta) (\star\star) $$  
On remplace l'équation $(\star\star)$ dans l'équation $(\star)$, on trouve : 
$$ -mg \cdot \frac{l}{2} \sin(\theta) = J \ddot{\theta} $$  
Avec : $J = \frac{ml^2}{3}$  
Donc :  
$$ m \frac{l^2}{3} \ddot{\theta} + mg \frac{l}{2} \sin(\theta) = 0 $$  
Alors :  
$$ \ddot{\theta} + \frac{3g}{2l} \sin(\theta) = 0 $$  
Et on a : 
$$ \ddot{\theta} + \frac{3g}{2L} \sin(\theta) = 0 $$  
Puisque $\theta$ est petit, alors $\sin(\theta) \approx \theta$.  
Donc, l'équation différentielle devient : 
$$ \ddot{\theta} + \frac{3g}{2L} \theta = 0 $$  

#### a - On a l'équation différentielle du mouvement est : 
$$ \ddot{\theta} + \frac{3g}{2L} \sin(\theta) = 0 $$  

#### b - Trouvons l’expression de $T_0$, $\theta_m$ et de $\varphi$.  
- L'expression de $T_0$  
On a : 
$$ \theta(0) = \theta_m \cos\left(\frac{2\pi}{T_0} t + \varphi\right) = \theta_0 \quad (a) $$  
$$ \dot{\theta}(0) = \frac{2\pi}{T_0} \theta_m \sin\left(\frac{2\pi}{T_0} t + \varphi\right) = 0 \quad (b) $$  

Donc : 
$$ \theta_m \cos(\varphi) = \theta_0 \quad \rightarrow \quad \varphi = 0 \text{ ou } \pi $$  
Et d’après l’équation $(a)$ on a $\cos(\varphi) > 0$ (car $\theta_m > 0$ et $\theta_0 > 0$)  
Donc $\varphi = 0 \quad (\cos(0) = 1 \text{ et } \cos(\pi) = -1)$  
Et par conséquence on trouve : $\theta_m = \theta_0$  

#### c - Calculons la valeur de $T_0$ :  
On a : 
$$ T_0 = 2\pi \sqrt{\frac{2L}{3g}} $$  
A.N. : $T_0 = 2\pi \frac{2 \times 1.2}{3 \times 10} \approx 2,88s$  
On trouve : $T_0 \approx 2,88s$  

---

### Exercise 5

Déterminons l'expression de $A l_0$ :  
- Les forces exercées sur le solide sont :  
$\vec{P}$: son poids.  
$\vec{F}$: tension du ressort.  
À l'équilibre, on a : 
$$ \sum \vec{F}_{ext} = \vec{0} $$  
Par projection sur $(Oz)$, on trouve : 
$$ P - kA l_0 = 0 $$  
Donc : 
$$ A l_0 = \frac{mg}{k} \text{ avec } P = mg $$  

#### 2 - Déterminons l’équation différentielle du mouvement de la bille :  
D’après la 2\text{ème} loi de Newton, on a : 
$$ \vec{P} + \vec{T} = m\vec{a} $$  
Pour projection sur l'axe $(Oz)$, on trouve : 
$$ mg - kA l = m \ddot{l} $$  
Donc :  
$$ ma_z = mg - k(l - l_0) $$  
$$ ma_z = -k(l - l_e) $$  
$$ ma_z = -kzg - k(l - l_0) $$  
$$ a_z = \frac{-k_z}{m_g} $$  

#### 3 - Calculons la valeur de $T_0$ :  
On a : 
$$ T_0 = 2\pi \sqrt{\frac{m}{k}} $$  

A.N. : $T_0 = 2\pi \sqrt{\frac{0.2}{50}} \approx 0,4s$  

#### 4 - L’expression de la vitesse de $G$  
On a : 
$$ z_g(t) = z_m \cos\left(\frac{2\pi}{T_0} t\right) $$  
Donc : 
$$ V_z(t) = \frac{-2\pi}{T_0} z_m \sin\left(\frac{2\pi}{T_0} t\right) $$  
Alors : 
$$ V_z(t) = \frac{-0,4}{T_0} \cdot 0,03 \sin\left(\frac{2\pi}{0,4} t\right) $$  
À la date $t$ on trouve : 
$$ V_z(t) = \frac{-3\pi}{20} \sin(5\pi t) $$  
A.N. : 
$$ V_z(t) = \frac{-3\pi}{20} \sin(5\pi t) \approx 0,47 \text{ m.s}^{-1} $$
```

<!-- Page 114 -->

```markdown
# Exercice 6

1. Déterminons l’expression de $\Delta l_0$ :
   - Les forces exercées par le corps $(S)$ sont :
     - $\mathbf{P}$ : le poids de $(S)$.
     - $\mathbf{F}$ : tension du ressort.
     - $\mathbf{R}$ : la réaction du plan incliné.
   - À l'équilibre, on a : $\sum \mathbf{F}_{\text{ext}} = 0$
   - Par projection sur l’axe $Ox$, on trouve :
     $$ P \sin(\alpha) - k \Delta l_0 = 0 $$
     Donc : $k \Delta l_0 = mg \sin(\alpha)$
     D’où : $\Delta l_0 = \frac{mg \sin(\alpha)}{k}$
  
2. Déterminons l’équation différentielle du mouvement de $G$ :
   - Par application de la 2ème loi de Newton, on a :
     $$ \mathbf{P} + \mathbf{F} + \mathbf{R} = m_G \mathbf{a}_G $$
   - Par projection sur l’axe $(Ox)$, on obtient :
     $$ P \sin(\alpha) - k \Delta l_0 = m_a x $$
     $$ m_x \ddot{x} = mg \sin(\alpha) - k(l - l_0) $$
     $$ m_x \ddot{x} = mg \sin(\alpha) - k(l - l_e - l_0) $$
     $$ m_x \ddot{x} = mg \sin(\alpha) - k_x \Delta l_0 $$

Avec $k \Delta l_0 = mg\sin(\alpha)$
$$ m_x \ddot{x} = -k_x m_g \sin(\alpha) $$
$$ m_x \ddot{x} + k_x \Delta l_0 = 0 $$

3. Calculons le période du mouvement :
   - On a : $T_0 = 2 \pi \sqrt{\frac{m}{k}}$
   - A.N. : $T_0 = 2\pi \sqrt{\frac{2.5}{30}} \approx 1.81s$

4. Trouvons l’expression de la composante $F_x$ de la force de rappel en fonction du temps :
   - On a : $F_x = -k x_m \cos\left(\frac{2\pi}{T_0} t\right)$
   - Donc : $F_x = -30 \times 0.2 \cos\left(\frac{2\pi}{1.81} t_1\right)$
   - À la date $t_1$ on trouve : $F_{x_1} = -0.6 \cos\left(\frac{2\pi}{1.81} \times 3.62\right) = -0.6 N$

---

# Exercice 7

1. Calculons la valeur de $C$ :
   - Les forces exercées sur le disque sont :
     - $\mathbf{F}$ : force constante.
     - $\mathbf{P}$ : poids du disque.
     - $\mathbf{T}$ : tension du fil.
     - $\mathbf{C}$ : couple de torsion.

   À l'équilibre, on a : $\sum \mathbf{M} \mathbf{A}(F_{\text{ext}}) = 0$
   Avec : $M_A(\mathbf{P}) = M_A(\mathbf{T}) + M_A(\mathbf{C}) = 0$
   Alors : $F \cdot r - C \cdot m = 0$
   Donc : $C = \frac{2Fd}{20m}$

   A.N. : $C = \frac{4.23 \times 24 \times 10^{-2}}{3.34 \times 10^{-2}} \approx 8.71 \, \text{N.m.rad}^{-1}$

2. Déterminons l’équation différentielle du mouvement :
   - Par application de la 2ème loi de Newton sur le disque en rotation, on a :
     $$ M_A(\mathbf{P}) + M_A(\mathbf{T}) + M_c = J_A $$
     $$ -C\theta - J_A \ddot{\theta} $$
     Avec : $J_A = \frac{Md^2}{8}$
     $$ \ddot{\theta} + \frac{8C}{Md^2} \theta = 0 $$

3. Déterminons l'expression de $T_0$ :
   - On a : $\theta(t) = \theta_m \cos\left(\frac{2\pi}{T_0}t\right)$
   - À savoir : 
     $$ \dot{\theta} = \frac{2\pi}{T_0} \sin\left(\frac{2\pi}{T_0}t\right) $$
     $$ \ddot{\theta} = -\left(\frac{2\pi}{T_0}\right)^2 \theta $$
   
   Par analogie, on trouve :
   $$ T_0 = 2 \pi \sqrt{\frac{Md^2}{8C}} $$
   A.N. : $T_0 = \pi d \sqrt{\frac{M}{2C}}$
   On trouve : $T_0 \approx \pi \times 24 \times 10^{-2} \approx 0.43s$

---

# Exercice 8

1. L'équation différentielle du mouvement :
   - Les forces exercées sur la barre sont :
     - $\mathbf{P}$ : poids de la barre,
     - $\mathbf{T}$ : tension du fil,
     - $\mathbf{C}$ : couple de torsion de moment $M_c$.

   On applique la 2ème loi de Newton pour la barre en rotation :
   $$ M_A(\mathbf{P}) + M_A(\mathbf{T}) + M_C = J_A \ddot{\theta} $$ 

   Avec : $J_A \ddot{\theta} = 0 \text{ et } M_C = -C\theta$
   D'où : $J_A = \frac{Ml^2}{12}$ 

   On trouve : $0 + \frac{12C}{Ml^2} = 0$
   D'après la courbe, on a : $T_0 = 1.5 s$, 
   $$ \dot{\theta_m} \approx -2 \text{ rad.s}^{-1} $$

ÉLECTRON  &  2BAC-PC- SM & Mécanique
```


<!-- Page 115 -->

```
# Calculons $\theta_m$, $\varphi$, et $C$ :
- Calculons $\theta_m$ :
    - On a : $\dot{\theta}(t) = \theta_m \cos\left(\frac{2\pi}{T_0} t + \varphi\right)$
    - Donc : $\dot{\theta}(t) = -\frac{2\pi}{T_0} \theta_m \sin\left(\frac{2\pi}{T_0} t + \varphi\right)$
    - Alors : $\ddot{\theta}(t) = -\frac{4\pi^2}{T_0^2} \theta_m \cos\left(\frac{2\pi}{T_0} t + \varphi\right)$

D'où : $\dot{\theta}_0 = \frac{1.5 \times 4}{2\pi} \approx 0.95 \text{ rad}$
Calculons la valeur de $\varphi$ :
- À $t = 0$, on a : $\dot{\theta}(0) = -\theta_m \sin\left(\frac{2\pi}{T_0} + \varphi\right)$
    - Donc : $\sin(\varphi) = -\frac{\dot{\theta}(0)}{\theta_m}$
    - A.N. : $\sin\left(\frac{\pi}{6}\right) = \frac{1}{2}$
    - Alors : $\varphi = \frac{\pi}{6}$
    - Et on a : $\theta_0 = \theta_m \cos\left(\frac{\pi}{6}\right)$
        - Donc : $\cos(\varphi) > 0$, car $\theta_0 > 0$ et $\theta_m > 0$
    - Donc : $\cos(\varphi) = \theta_m \cos\left(\frac{5\pi}{6}\right) = -\frac{\sqrt{3}}{2}$
    - Alors : $\varphi = \frac{\pi}{6}$

# Calculons la valeur de $C$ :
- On a : $\ddot{\theta} = -\frac{(2\pi/T_0)^2 \theta_m \cos\left(\frac{2\pi}{T_0} t + \varphi\right)}{C}$
    - $\iff$ 
    - $$ \int \ddot{\theta} dt = -\frac{(2\pi/T_0)^2}{C} \theta_m \sin\left(\frac{2\pi}{T_0} t + \varphi\right) $$

Et on a : $\dot{\theta}(t) = \theta_m \cos\left(\frac{2\pi}{T_0} t + \frac{\pi}{2}\right)$ avec $T_0 = \frac{3}{2}s$

D'où : $\dot{\theta}(t) = \theta_m \cos\left(\frac{4\pi}{3} t + \frac{2\pi}{3}\right)$

## Exercice 9
- Déterminons l'équation différentielle du mouvement :
    - Les forces extérieures exercées sur le système (corps $S$ + la tige) sont :
        - $\vec{P}$ : son poids.
        - $\vec{C}$ : Le couple de torsion du moment $M_c$.
    - Par application de la loi de rotation, on a : $M_a(\vec{R}) + M_c(\vec{R}) = \vec{P} - \vec{d}$
        - Tel que : $d = AB \sin \theta$
        - Donc : $M_d(\vec{R}) = mgAB \sin(\theta) - C\theta = J_a \dot{\theta}$.
    - On remplace $(**)$ dans $(*)$, on trouve : $mgAB \sin(\theta) - C\theta = J_a \dot{\theta}$.
    - Puisque $C$ est petit, alors $\sin(\theta) \approx \theta$, donc : $mgAB\theta - C\theta = J_a \dot{\theta}$.
        - Avec $AB = L$, et $L = ml^2$, on a : $(mgL - C)\theta = ml^2\ddot{\theta}$
        - $\iff$ $m l^2 \ddot{\theta} + (C - mgL)\theta = 0$,
        - $\iff$ $ \left( C - \frac{mg}{l^2} \right) \theta = 0$

- Déterminons la dimension de l'expression $\frac{C}{ml^2} - \frac{g}{L}$ :
    - On a : $$ [C] = [F] = \left[\frac{[m][g]}{[l^2]} \right] = [L][T^{-2}] $$
    - Donc : $$ [\frac{C}{ml^2}] = [T^{-2}] $$

- Calculons la valeur de $C_{min}$ :
    - On a l'équation différentielle du mouvement : $\ddot{\theta} + \left(\frac{C}{ml^2}-\frac{g}{L}\right)\theta = 0$
    - Cette équation admet une solution sinusoïdale lorsque : $\frac{C}{ml^2} > \frac{g}{L} \iff C > mgL$ 
        - et $C > C_{min}$ avec $C_{min} = mgL$

A.N. : $C_{min} = 0.05 \times 0.7 \times 0.35 \text{ N.m.rad}^{-1}$
- a - D'après la courbe, on trouve : $T_0 = 1s$
- b - D'après la courbe, on trouve : $\theta_0 = 0.15 \text{ rad}$
- c - On a : $\dot{\theta}(t) = \theta_m \cos\left(\frac{2\pi}{T_0} t + \varphi\right)$
    - À $t = 0$, on a : $\dot{\theta}(0) = \theta_m \cos(0) = 1$ D'où : $\varphi = 0$
```

<!-- Page 116 -->

```markdown
# L'expression de $g$

On a : $ \theta(t) = \theta_m \cos \left( \frac{2 \pi}{T_0} t \right)$
Donc : $\dot{\theta}(t) = - \frac{2\pi}{T_0} \theta_m \sin \left( \frac{2\pi}{T_0} t \right)$

Alors : $\ddot{\theta}(t) = - \left( \frac{2\pi}{T_0} \right)^2 \theta_m \cos \left( \frac{2\pi}{T_0} t \right)$

Et on a l'équation différentielle du mouvement:
$$ \ddot{\theta} + \left( \frac{C}{mlZ} - \frac{g}{L} \right) \theta = 0 $$

Par analogue, on trouve : 
$$ \frac{C}{mlZ} - \frac{g}{L} = \left( \frac{2\pi}{T_0} \right)^2 $$
Donc : 
$$ - \frac{g}{L} = \frac{(2\pi)^2}{T_0^2} - \frac{C}{mlZ} $$

A.N. : $ g : 9,8 \, m.s^{-2} $

---

# Exercice 10

D'après le graphique, on a $ T = 0,5s $ et $ x_m = 0,6m $.
La fréquence de rotation du disque :
On a : $ f = \frac{1}{T} $.
A.N. : $ f = \frac{1}{0,5} = 2 \, Hz $

Le système étudié : {$ \text{le corps solide + ressort} $} appelé le résonateur, et le moteur est appelé exciteur.

$a$ - D'après la courbe, on a : $ f = 3,2 \, Hz $

Donc : $ T_e = \frac{1}{3,2} \approx 0,31 s $

---

# Exercice 11

L'expression de $J$ :
On a : $ J = J_1 + J_2 + J_0 $.
Avec : $ J_1 = m_1d_1^2; \, J_2 = m_2d_2^2; \, J_0 = ml^2 $ 

Donc : 
$$ J = m_1 d_1^2 + m_2 d_2^2 + \frac{ml^2}{12} $$
Alors : 
$$ J = 2m^2d + \frac{ml^2}{12} $$

L'équation différentielle du mouvement
Le système étudié : {$ \text{la barre AB + (S1) + (S2)} $}
- Les forces exercées sur ce système sont : 
   - $\vec{P}$ : Poids du système
   - $\vec{T}$ : Tension du fil 
   - $\vec{C}$ : Couple de torsion de moment $M_c = -C\theta$.
  
Par application de la 2e loi de Newton en rotation, on a : 
$$ M_{\vec{P}} + M_{\vec{T}} + M_{\vec{C}} = J\ddot{\theta} $$

Avec : $ M_{\vec{P}} = M_{\vec{T}} = 0 $. 

Alors : 
$$ -C\theta = JA\ddot{\theta} $$

Et puisque $ J = 2m^2d + \frac{ml^2}{12} $ on obtient : 
$$ \ddot{\theta} + \frac{C}{2md^2 + \frac{ml^2}{12}} \theta = 0 $$

Montons que : 
$$ T_2 = \frac{8\pi^2md^2 + x^2mlZ} {3C} $$

On a : $ \theta(t) = \theta_m \cos \left( \frac{2\pi}{T_0} t \right)$
Donc : $\dot{\theta}(t) = - \frac{2\pi}{T_0} \theta_m \sin \left( \frac{2\pi}{T_0} t \right)$

Et on a : 
$$ \ddot{\theta}(t) = - \left( \frac{2\pi}{T_0} \right)^2 \theta_m \cos \left( \frac{2\pi}{T_0} t \right) $$
Cela implique : 
$$ \ddot{\theta} + \left( \frac{C}{2md^2 + x^2mlZ} \right) \theta = 0 $$

A.N. : $ \frac{3C}{\pi^2m} $

---

```


<!-- Page 117 -->

```markdown
# Exercice 12

On a : $E_{pt} = \frac{1}{2} C\varphi^2 + cte$  
Et $E_{pt}(0) = 0 \Rightarrow cte = 0$  
Donc : $E_{p} = \frac{1}{2} C\varphi^2$  

D'où : $E_{pt,max} = \frac{1}{2} C\varphi_{max}^2$  
$$ 2E_{p,pt,max} = \frac{2}{C\varphi_{max}} $$  
A.N. : $C = 2 \times 22 \times 10^{-3} \left( \frac{1}{6} \right)$  

Calculons la valeur de $J_A$  
On a : $T_0 = 2\pi \frac{J_A}{c}$  
Donc : $T^2_0 = 4\pi^2 \frac{J_A}{c}$  
D'où : $J_A = \frac{T^2_0 c}{4\pi^2} \approx 1,62 \times 10^{-2} \text{ kg.m}^2$  

Calculons la vitesse angulaire de la barre lors de sa passe de la position d’équilibre  
On a : $E_m = E_c + E_{pt}$  
À la position d'équilibre, on a : $E_{pt} = 0$.  
Donc : $E_c = E_m = E_m$  
$$ \Rightarrow \frac{1}{2} J_A \theta^2_m = E_m $$  
$$ \Leftrightarrow \theta_m = \sqrt{\frac{2 E_m}{J_A}} $$  
A.N. : $\theta_m = \sqrt{\frac{2 \times 22 \times 10^{-3}}{1,62 \times 10^{-2}}} \approx 1,65 \text{ rad.s}^{-1}$  

# Exercice 13

Identification des courbes (a), (b) et (c)  
- La courbe (a) représente les variations de l'énergie mécanique $E_m = cte$.  
- La courbe (b) représente les variations de l'énergie cinétique car $E_c(0)$ sans vitesse initiale.  
- La courbe (c) représente les variations de l'énergie potentielle élastique $E_{pe}$.  

D'après la courbe, on a : $E_m = 1,6 \, J$  
D'où : $E_m = E_c(0) + E_{pe}(0)$ avec $E_c(0) = 0$  
Donc : $E_m = \frac{1}{2} k X^2_0$  
Alors : $X_0 = \sqrt{\frac{2E_m}{k}}$  
A.N. : $X_0 = \frac{2 \times 1.6 \times 10^{-3}}{8}$  

On trouve : $X_0 \approx 2 \times 10^{-2} \text{ m} \approx 2 \text{ cm}$  

Calculons le travail de la force de rappel lors du déplacement du point A vers le point O  
$$ W_{A \to O}(\vec{F}) = -\Delta E_{pe}(AO) $$  
Donc : $W_{A \to O}(\vec{F}) = [E_{pe}(O) - E_{pe}(A)]$  
A.N. : $W_{AB}(\vec{F}) = [-0 - 1,6] \, = 1,6 \, J$  

# Exercice 14

L’expression de $E_{pp}$  
On a : $E_{pp} = mgz + cte$  
Et $E_{pp}(0) = 0 \Rightarrow cte = 0$, donc : $E_{pp} = mgz \, ( \ast )$  
Avec $z_G = 2AG = A \cos(\theta)$  
Donc : $AG = \left( \frac{L}{2} \right)$  
Alors : $z = \frac{L}{2} (1 - \cos(\theta)) \, ( \ast \ast )$  
On remplace $(\ast)$ dans $(\ast)$, on trouve :  
$$ E_{pp} = mg \left( \frac{L}{2} \right) \left[ 1 - (1 - \cos^2(\theta)) \right] $$  
D'où : $E_{pp} = mg \frac{L}{4} \theta^2$  

Montrons l’équation différentielle du mouvement  
On a : $E_m = E_c + E_{pp}$  
Donc : $E_m = -\frac{1}{2} J_A \theta^2 + mgL \theta^2$  
Puisque les frottements sont négligeables, donc $E_m = cte$  
Alors : $$ \frac{dE_m}{dt} = 0 $$  
$$ \Rightarrow \frac{1}{2} J_A \frac{d\theta^2}{dt} + mg\frac{L}{2} \frac{d\theta^2}{dt} = 0 $$  
$$ \Rightarrow \int J_A \theta \frac{d\theta}{dt} = 0 $$  
$$ \Rightarrow \theta \left( J_A \frac{d\theta}{dt} + mg\frac{L}{2} \theta \right) = 0 $$  
```

<!-- Page 118 -->

```
$$
m l^2 \ddot{\theta} + m g \frac{L}{2} = 0 
$$
$$
\Rightarrow \frac{l^3}{3} \ddot{\theta} + \frac{g}{2} = 0 
$$
$$
\Rightarrow \ddot{\theta} + \frac{3g}{2L} = 0 
$$

D'après la courbe, on a : $T_0 = 0,58 \times 2 = 1,16 s$ 
et $Em(0) = 6,6 \times 10^{-2} J$ et $Ec(0) = 4,95 \times 10^{-2} J$ 
En on sait que : $E_{pp}(0) = Em(0) - Ec(0)$
Donc : $E_{pp}(0) = Em(0) - Ec(0)$
A.N. : $E_{pp}(0) = 6,6 \times 10^{-2} - 4,95 \times 10^{-2}$
On trouve : $E_{pp}(0) = 1,65 \times 10^{-2} J$

1. Calculons la valeur de $g$ et celle de $\theta_m$

On a : $T_0 = 2 \pi \sqrt{\frac{2L}{3g}}$

Donc : $4 \pi^2 = \frac{2L}{3g}$
Alors : $g = \frac{8\pi^2}{3T_0^2}$
A.N. : $g = \frac{8\pi^2 \times 0,50}{3 \times (1,16)^2} \approx 9,8 m.s^{-2}$

2. Calculons la valeur de $\theta_0$ et de $\varphi$

- Calculons $\theta_0$

On a : $E_{pp} = \frac{mgL}{4} \theta_0^2$.
Alors : $\theta_0^2 = \frac{4E_{pp}}{mgL}$.
D'où : $\theta_0 = \sqrt{\frac{4 \times 6,6 \times 10^{-2}}{420 \times 9,8 \times 50 \times 10^{-2}}} \approx 0,18 rad$.

- Calculons $\varphi$

La solution de l'équation différentielle du mouvement est : $\ddot{\theta}(t) = \theta_m \cos(2\pi \frac{t}{T_0} + \varphi)$.
Donc, à $t = 0$, on trouve : $\dot{\theta}(0) = \theta_m \cos(\varphi)$.
Alors : $\cos(\varphi) = \frac{\dot{\theta}(0)}{\theta_m} \Rightarrow A.N. : \cos(\varphi) = \frac{0,18}{0,36} = 0,5 \Rightarrow \varphi = \frac{\pi}{3} \Rightarrow \varphi = \frac{5\pi}{3}$.

Et on a : $\ddot{\theta}(0) = -\frac{2 \pi}{T_0} \theta_m \sin(\varphi)$,
Et puisque $Ec(t)$ est croissant au début du mouvement, donc la valeur absolue de la vitesse de la vitesse angulaire $|\dot{\theta}(t)|$ est aussi croissant au début, alors le sens de $\ddot{\theta}(t)$ est opposé à celui de $\theta_0$.

On déduit que $\dot{\theta}(0) < 0$ car ($\theta > 0$).
D'où : $\sin(\varphi) > 0$.

Alors : $\varphi = \frac{\pi}{3}$ car $\sin(\frac{5\pi}{3}) = -\frac{\sqrt{3}}{2}$ et $\sin(\frac{\pi}{3}) = \frac{\sqrt{3}}{2}$.

---

\textbf{Exercice 15}

Montrons que : $E_c = E_c + E_{pp}$.
Donc : $E_c = Em - E_{pp} (\star)$.
Et on a : $E_{pp} = m g z + cte \, avec \, E_{pp}(z = 0) = 0 \Rightarrow cte = 0.$
Alors : $E_{pp} = mgz \, avec \, z_c = A G_0 - A G_0 \cos(\theta)$
Alors : $E_{pp} = mgA_0(1 - \cos(\theta)) \, avec \, A G_0 = A G = d$.
D'où : $E_{pp} = mgd(1 - \cos(\theta))$.

Et puisque $\theta$ est petit, donc $\cos(\theta) \approx 1 - \frac{\theta^2}{2}$.
Alors : $E_{pp} \approx mgd \left( 1 - \left(1 - \frac{\theta^2}{2}\right) \right) \Rightarrow E_{pp} = \frac{mgd \theta^2}{2} \, (**)$. 

Et puisque les frottements sont négligeables, donc : $Em = E_{pp\text{max}} \Leftrightarrow Em = mgd \frac{\theta_m^2}{2} \, (***)$.

En remplaçant les équations $(**)$ et $(***)$ dans l'équation $(\star)$, on trouve : $E_c = \frac{mgd}{2} \theta^2_m \Rightarrow E_c = A \theta^2 + B \, avec \, A = -\frac{mg}{2} \, et \, B = -\frac{mgd}{2}$.

Déterminons la valeur de $d$.

D'après la courbe, on a : $A = (45-3) \times 10^{-3} - (3-64) \times 10^{-3} \approx 0,69 J \cdot rad^2$.
Et on a : $A = -\frac{mgd}{2}$

Donc : $d = -\frac{-2 \cdot (0,69)}{40 \times 10^{-3} \times 9,8} \approx 0,35 m$.

Déterminons l'équation différentielle du mouvement.

\begin{itemize}
  \item Le système étudié : {le corps $S$ + la barre.}
  \item Les forces extérieures exercées sur ce système sont :
  \begin{itemize}
    \item $\overrightarrow{P}$ : poids du système,
    \item $\overrightarrow{R}$ : réaction de l'axe de rotation.
  \end{itemize}
\end{itemize}
```

<!-- Page 119 -->

```
- Par application de la deuxième loi de Newton sur le pendule en rotation, on trouve : $M_a(\bar{R}) + M_a(\bar{R}) = J_a \dot{\theta}.$
Avec : $M_a(\bar{R})$ et $M_a(\bar{R}) = -mg \sin(\theta)$
Donc : $-mg \sin(\theta) = J_a \dot{\theta}$
Alors : $\dot{\theta} + (2\pi f_0)^2 \theta = 0$
Et on a : $\dot{\theta} + \frac{mg}{J_a} \theta = 0.$
Par analogie, on trouve : $(2\pi f_0)^2 = \frac{mg}{J_a}$
$\Rightarrow f_0 = \frac{1}{2\pi} \sqrt{\frac{mg}{J_a}}$

$$ 
\begin{align*}
\text{Calcul de la valeur de } J_a \\
On a : (2\pi f_0)^2 = \frac{mg}{4\pi^2 r_0^6} \\
\Rightarrow J_a = \frac{400 \times 10^{-3} \times 9.8 \times 0.35}{4\pi^2 (1)^2} \\
A.N.: J_a = \frac{3.47 \times 10^{-2} \text{ kg.m}^2}{4\pi^2}
\end{align*}
$$

### Exercice 16
1. Lorsque $x = x_m$, on a : $E_p = E_{moy} \text{ et } E_c = 0$
Alors la courbe (b) représente les variations de l'énergie cinétique $E_c$ et la courbe (a) représente $E_p = f(x).$
D'après la courbe, on a : $E_m = E_{cmax} \in [0, 2].$
Et on a : $E_{cmax} = \frac{1}{2} mv^2_{max}$
Donc : $v^2_{max} = \frac{2E_{cmax}}{m}$
Alors : $v_{max} = \sqrt{\frac{2E_{cmax}}{m}}$

A.N.: $V_{max} = \frac{2 \times 0.2}{100 \times 10^{-3}} = 3 \text{ m.s}^{-1}$

D'après la courbe, on a : $E_p = 0.2 \text{ J}$
$X_0 = X_m = 0.2 \text{ m}$
Déduisons la valeur de $k$
Et on a : $E_p = \frac{1}{2} kx^2 + ct$
Avec $E_p(0) = 0 \Rightarrow ct = 0.$
Donc : $E_p = \frac{1}{2} kx^2.$
Alors : $E_{pmax} = \frac{1}{2} kx^2_m$
D'où : $k = \frac{2E_{pmax}}{x^2_m} = k = \frac{2 \times 10 \text{ N.m}^{-1}}{(0.2)^2}$

2. Calculons le travail de la force de rappel lors du déplacement de A vers B
On a : $W_{AB}(\vec{F}) = - \frac{k}{2} (x^2_A - x^2_B).$
Donc : $W_{AB}(\vec{F}) = - \frac{k}{2} \left(0 - \left(-\frac{X_0}{2}\right) ^2\right).$
Alors : $W_{AB}(\vec{F}) = - \frac{1}{8} (0.2)^2 = - 5 \times 10^{-2} \text{ J}.$

3. Calculons les abscisses $x_1$ et $x_2$ pour que $E_c = 2E_{pe}.$
On a : $E_m = E_c + E_p$ avec $E_c = 2E_p$  Donc : $E_m = 3E_p.$
On obtient : $E_m = \frac{3}{2} k x^2$ donc : $x^2 = \frac{2E_m}{3k}$
Alors : $x = \pm \sqrt{\frac{2E_m}{3k}}.$
A.N.: $x = \frac{2 \times 0.2}{3 \times 10} \approx 0.11 \text{ m}$
On trouve : $x_1 \approx 0.11 \text{ m} \quad \text{et} \quad x_2 \approx -0.11 \text{ m}$

### Exercice 17
1. Identification des courbes (a) et (b)
Pour $\theta = \theta_m$ on a $E_c = 0$, donc la courbe (a) représente les variations de l'énergie cinétique $E_c$ et la courbe (b) représente les variations de l'énergie potentielle de torsion $E_p.$

2. Détermination de $E_m$ et $\dot{\theta}_{max}$
D'après la courbe, on a : $E_m = 0,8 \text{ J}$
Et on a : $E_c = \frac{1}{2} A \dot{\theta}^2$ donc : $E_{cmax} = \frac{1}{2} \frac{E_{m}}{A} \dot{\theta}_{max}^2$
Alors : $\dot{\theta}_{max} =  \sqrt{\frac{E_{max}}{A}}$
A.N.: $\dot{\theta}_{max} = \frac{2 \times 0.8}{\sqrt{2} \times 10^{-3}} \approx 26.4 \text{ rad.s}^{-1}$

3. Détermination des valeurs de $E_{ptmax}$ et la valeur de $\theta_0$ et celle C
D'après les courbes, on a : $E_{ptmax} = 0,8 \text{ J}$
Et $θ_0 = θ_{m} = 0.4 \text{ rad}$
Calculons la valeur de C
On a : $E_p = \frac{1}{2} C \theta^2$
Pour $\theta = 0, \quad E_p = 0 \Rightarrow ct = 0.$
Donc : $E_p = \frac{1}{2} C \theta^2_A$ alors : $E_{ptmax} = \frac{1}{2} C \theta^2_0$
D'où : $C = \frac{2E_{ptmax}}{\theta_0^2}.$
A.N.: $C = \frac{2 \times 0.8}{(0.4)^2} = 10 \text{ N.m.rad}^{-1}$

4. Calculons le travail du moment de torsion lors le passage de l'angle $\theta_1 = 0$ vers $\theta_2 = 0 \text{ rad}.$
On a : $W_{1-2}(M_c) = \int_{C_1}^{C_2} \frac{1}{2} C (\theta^2 - \theta_2^2).$
Donc : $W_{1-2}(M_c) = \frac{1}{2} \times 10 \times (0 - 0.12^2) = -5 \times 10^{-2} \text{ J}.$
```

<!-- Page 120 -->

```markdown
# Exercices de Physique

## Exercie 18

1. **Calculons $\theta_3$ et $\theta_4$ pour que $E_c = 3E_p$.**
   On a : $E_m = E_c + E_p$ avec $E_c = 3E_p$  
   Donc : $E_n = 4E_p$  
   Alors : $E_p = \frac{E_m}{4} \quad A.N. : E_p = \frac{0.8}{4} = 0.2 \, J$  
   D'après la courbe, on trouve : $\theta_3 = 0.2 \, rad$ et $\theta_4 = -0.2 \, rad$.

2. Le régime d'oscillation est pseudopériodique.  
   - **Calculons les variations de l'énergie potentielle élastique durant le mouvement entre $t = 0$ et $t = 1.2 \, s$.**
   - On a : $E_p = \frac{1}{2} kx^2 + cte$.  
   Pour $x = 0$, on a $E_{pe} = 0$ et $t = 0$.  
   Donc : $E_{pe} = \frac{1}{2} kx^2$  
   Alors : $E_{pe}(t_1) = E_p(t_1) - E_p(t_0)$  
   D'où : $\Delta E_{pe(t_0-t_1)} = \frac{1}{2} k(x_1^2 - x_0^2)$.  
   D'après la courbe, on a : $x_0 = 4 \, cm, x_1 = 3 \, cm$.  
   A.N. : $\Delta E_{pe(t_0-t_1)} = \frac{1}{2} \times 20 \times \left( (0.03)^2 - (0.04)^2 \right)$.  
   On trouve : $\Delta E_{pe(t_0-t_1)} = -7 \times 10^{-3} \, J$.  
   Et on sait que le travail $W(\mathbf{F}) = -\Delta E_{pe}$.  
   Donc : $W(\mathbf{F})(t_0-t_1) = 7 \times 10^{-3} \, J$.

## Exercie 19

$I - Étude d'équilibre du pendule$  
1. Les forces exercées sur le corps $(S)$ en équilibre $\mathbf{P}$. Poids de $(S)$.  
   $\mathbf{F_0} \, : \, \text{Force de rappel.}$  
2. **Trouvons l'expression de la longueur du ressort à l'équilibre.**  
   À l'équilibre, on a : $\mathbf{P} + \mathbf{F_0} = 0$  
   Par projection sur l'axe $(Oz)$, on trouve :  
   $$P - F_0 = 0$$  
   $$mg - kL_0 = 0$$  
   $$\Delta l_0 = \frac{mg}{k}$$  
   $$l_e = l_0 - \frac{mg}{k}$$  
   $$l_e = l_0 + \frac{mg}{k}$$  

II - **Étude des oscillations libres du pendule élastique horizontal**  
1. **Déterminons l'équation différentielle du mouvement.**  
   Par application de la 2ème loi de Newton sur le corps $(S)$ en mouvement, on a :  
   $\mathbf{P} + \mathbf{F} = m \mathbf{a}$  
   Par projection sur l'axe $(Oz)$, on trouve :  
   $$mg - kAL - mzg = 0$$  
   D'où : $mg - k(L - l_e) = mzg$  
   $$mg - k(L - l_e) - k(l_e - l_0) = 0$$  
   $$mg - kL - k(-kL_0) = \Delta l_0$$  
   $$\Rightarrow \, \ddot{z} + g z = 0$$

III - **Aspects énergétiques du pendule élastique horizontal**  
1. **Trouvons l'expression de l'énergie potentielle du pendule.**  
   L'expression de l'énergie potentielle de la pesanteur :  
   $$E_p = E_{m}gz + C_1.$$  
   Pour $z_g = 0$, on a $E_p = 0$, donc $C_1 = 0$.  
   Alors : $E_p = -mgz_g \, (*)$  
```

<!-- Page 121 -->

```markdown
- L'expression de l'énergie potentielle élastique :  
  On a : $E_p = \frac{1}{2} k(\Delta l)^2 + C_2$  
  Pour $ \Delta l = 0$, on a : $E_p = 0$, donc $C_2 = 0$  
  Alors : $E_p = \frac{1}{2} k(\Delta l) \text{ avec } \Delta l = l - l_0$,  
  $\Rightarrow E_p = \frac{1}{2} k(l - l_e + l_e - l_0)^2$  
  $E_p = \frac{1}{2} k(2g) + \Delta l)^2$

- L'énergie potentielle totale du pendule est : $E_p = E_{pp} + E_p$ (***)
  On remplace l'équation (*) et l'équation (**) dans l’équation (***), on trouve :  
  $E_p = -mgz + \frac{1}{2} k z^2 + k z g Al_0 + \frac{1}{2} k \delta^2$  
  $\Leftrightarrow E_p = (kAl_0 - mg)z + \frac{1}{2} k z^2 + kAl_0$  
  Avec $kAl_0 = mg$  
  Donc :  
  $E_p = -\frac{1}{2} k z^2 + \frac{mg}{2k}$  
  D'où : $E_p = -\frac{1}{2} z^2_g$

- L'expression de l'énergie cinétique du pendule  
  On a : $E_c = \frac{1}{2} m v^2$  
  Avec $V_g = zg$  
  Donc : $E_c = \frac{1}{2} m z_g^2$  

- L'énergie mécanique du pendule  
  On a : $E_m = E_c + E_p$  
  Donc : $E_m = \frac{1}{2} m z^2_g + \frac{1}{2} k z^2_g + \frac{mg}{2}  k$  

- Montrons qu’on a que l'énergie mécanique du pendule est constante on a : $\frac{dE_m}{dt} = 0$  
  Donc : $\frac{dE_m}{dt} = m g (m^2 \frac{d z_g}{dt}) + \frac{1}{2} k z_g^2$  
  Et on a : $z_g + m z_g = 0$ (l’équation différentielle du mouvement)  
  Alors : $\frac{dE_m}{dt} = 0$  
  D'où $E_m \text{ cte. l’énergie mécanique du pendule se conserve.}$  

- Calculons la valeur de $E_m$  
  On a : $E_m = E_m(0)$  
  Donc : $E_m = \frac{1}{2} m z^2_g(0) + \frac{1}{2} k z^2_g(0) + \frac{1}{2} k \frac{1}{2}$  
  Alors : $E_m = \frac{1}{2} \times 12, 5 \times (2 \times 10^{-2})^2 + 2 k \frac{1}{2}$  
  Alors : $E_m = 8, 25 \times 10^{-2}\ J$

## Exercice 20

**A.N. :** $E_m(t_1) = \frac{1}{2} \times 40 \times (2, 1 \times 10^{-2})^2$  
On trouve : $E_m(t_1) = 8, 82 \times 10^{-3}$.  
Calculons $E_m(t_2)$  
On a : $E_m(t_2) = \frac{1}{2} k z^2_g(t_2) + \frac{1}{2} m z^2_g(t_2)$ avec $x_g(t_2) = 0$  
**A.N. :** $E_m(t_2) = \frac{1}{2} \times 40 \times (1, 75 \times 10^{-2})^2$  
On trouve : $E_m(t_2) = 6, 12 \times 10^{-3}$.  
Calculons $\Delta E_m(t_1 - t_2)$  
On a : $\Delta E_m(t_1 - t_2) = E_m(t_2) - E_m(t_1)$  
On trouve : $\Delta E_m(t_1 - t_2) = 8, 82 \times 10^{-3} - 6, 12 \times 10^{-3}$  
On trouve : $\Delta E_m(t_1 - t_2) = 2, 7 \times 10^{-3}$.

Dédions la puissance moyenne de la force de rappel  
On a : $P_m = \frac{W_{t_2 - t_1}}{t_2 - t_1}$  
Avec $W_{t_1 - t_2}(\vec{F}) = -\Delta E_{pe(t_1 - t_2)}$  
Et : $\Delta E_{pe(t_1 - t_2)} = \Delta E_{m(t_1 - t_2)}$ car $\Delta E_{c(t_1 - t_2)} = 0$  
Donc : $P_m = \frac{2, 7 \times 10^{-3}}{0, 7 - 0, 35} = 7, 71 \times 10^{-3} W$

Calculons la valeur de $m$  
On a : $T = T_0$  
Donc : $T = 2 \pi \sqrt{\frac{m}{k}}$  
Alors : $\frac{T^2}{4 \pi^2} = \frac{m}{k}$  
D'où : $m = \frac{T^2 \times k}{4 \pi^2} = 0, 124 kg$
```

<!-- Page 122 -->

```markdown
# L’atome et la mécanique de Newton
## Unité 9

### Objectifs
- Connaître l’expression de la force d’attraction électrostatique.
- Savoir que les lois de la mécanique ne sont pas valables à l’échelle atomique.
- Savoir que l’énergie d’un atome est quantifiée.
- Connaître et savoir expliquer la relation : $E = h \cdot v$
- Savoir exploiter un spectre de raie.

### Axes du cours
1. La limite de la mécanique de Newton
   - Loi de Newton et loi de Coulomb
   - La limite de la mécanique de Newton
2. Quantification des échanges énergétiques
   - Notion de la quantification de l’énergie
   - Le photon
   - Les postulats de Bohr
3. Quantification des niveaux d’énergie
   - Quantification des niveaux énergétiques de l’atome
   - Quantification des niveaux énergétiques de la molécule
   - Quantification des niveaux énergétiques du noyau
4. Applications aux rai
   - Définition
   - Spectre atomique
   - Spectre moléculaire
   - Spectre des noyaux
```

<!-- Page 123 -->

```markdown
# La limite de la mécanique de Newton

### ① Loi de Newton et loi de Coulomb
#### ❖ Loi de Newton
Deux corps A et B à répartition sphérique de masses $m_A$ et $m_B$ séparés d’une distance $r$ exercent l’un sur l’autre des forces attractives :
$$
F_{A/B} = -F_{B/A} = -G \frac{m_A m_B}{r^2}
$$
$G$ : est la constante d'attraction universelle et pour valeur :
$$
G = 6,67 \times 10^{-11} \text{m}^2.\text{kg}^{-2}.
$$

#### ❖ Loi de Coulomb
Deux corps ponctuels A et B de charges $q_A$ et $q_B$ séparés d’une distance $r$ exercent l’un sur l’autre des forces électrostatiques :
$$
F_{A/B} = -F_{B/A} = k \frac{q_A q_B}{r^2} \hat{u}_{AB}
$$
$K$: constante universelle avec $K = 9.10^9 \text{N.m}^2.\text{C}^{-2}$ dans le vide.
- Si les charges $q_A$ et $q_B$ ont le même signe, alors les forces $F_{A/B}$ et $F_{B/A}$ sont répulsives.
- Si les charges $q_A$ et $q_B$ ont des signes opposés, alors les forces $F_{A/B}$ et $F_{B/A}$ sont attractives.

### ② La limite de la mécanique de Newton
On considère le système (Terre - Satellite) : La mécanique Newtonienne permet de déterminer la position du satellite autour de la terre, car la hauteur de ce satellite par rapport à la surface de la terre dépend des conditions initiales de son lancement, et puisque ces conditions sont modifiables, alors le rayon orbital du satellite peut prendre toutes les valeurs possibles. D’autre part, si on applique la deuxième loi de Newton à l’électron de l'atome d’hydrogène, on trouve que son mouvement autour du noyau est circulaire uniforme dont le rayon orbital peut prendre toutes les valeurs possibles (selon les conditions initiales), donc deux atomes d’hydrogène peuvent avoir deux volumes différents selon leurs rayons mais en réalité les atomes d’hydrogène ont le même rayon.

**Conclusion** : Malgré la grande ressemblance entre les deux interactions gravitationnelle et électrostatique, les deux systèmes (système solaire et modèle de l’atome) n’ont pas la même structure. La mécanique newtonienne ne permet pas d’expliquer les phénomènes qui se produisent à l’échelle microscopique atomique.

---

# II Quantification des échanges énergétiques

### ① Notion de la quantification de l’énergie
La quantification de l’énergie a été introduite en 1900 par Max Planck pour interpréter le rayonnement émis par des corps lorsqu’ils sont échauffés à une température uniforme : il a postulée que l’énergie échangée entre la matière et un rayonnement électromagnétique ne peut prendre que des valeurs définies et discrètes appelées quanta. On dit que cette énergie est quantifiée.

### ② Le photon
Pour expliquer l’émission d’électron par un métal irradier par la lumière, le savant Albert Einstein propose l’hypothèse que les quanta d’énergie de Max Planck sont transportées par des particules de la lumière appelés photons.

Les photons sont des corpuscules de masse nulle, non chargés, se propageant à la vitesse de la lumière $C = 3.10^8 \text{m.s}^{-1}$ dans le vide.

L’énergie du photon est : 
$$
E = h \cdot v = h \frac{c}{\lambda_0}
$$
- $E$ : l’énergie du photon en (J)
- $h$ : est une constante appelée constante du Planck $h = 6,62 \times 10^{-34} \text{s}$
- $v$ : la fréquence en (Hz)
- $\lambda$ : la longueur d’onde en (m)
- $C$ : la vitesse de la lumière dans le vide.
```

<!-- Page 124 -->

```markdown
# Les postulats de Bohr
En 1913, le physicien Danois Niels Bohr, élève de Ernest Rutherford énonça les postulats suivants afin d’interpréter le spectre de l’atome d’hydrogène.

- Les variations de l’énergie d’un atome sont quantifiées.
- L’atome ne peut être exister que dans des états bien définis appelés « niveaux d’énergie »
- Un photon de fréquence $ \nu $ est émis lorsque l’atome effectue une transition d’un niveau d’énergie $ E_P $ vers un niveau d’énergie inférieur $ E_n $ tel que : 
  $$ E_P - E_n = h \cdot \nu $$

## III Quantification des niveaux d’énergie

### 1. Quantification des niveaux énergétiques de l’atome
- L’énergie d’un niveau donné se caractérise par un nombre $ n $, appelé nombre quantique et qui prend les valeurs : $ 1, 2, 3, \ldots $.
- Le niveau d’énergie dont $ n = 1 $ est appelé le niveau fondamental ; il correspond à l’énergie la plus basse (état stable de l’atome).
- Les niveaux d’énergie dont $ n > 1 $ correspondent aux niveaux excités.
- Le niveau d’énergie dont $ n = \infty $ correspond à l’énergie $ E_0 = 0 $ où l’électron n’est pas lié au noyau. Cette convention implique que tous les autres niveaux ont une énergie négative.
- L’atome peut passer d’un état à un autre état en gagnant ou en perdant de l’énergie.
- Pour expliquer cet échange d’énergie entre l’atome et le milieu extérieur, Bohr a supposé que l’énergie de l’atome soit quantifiée et il a proposé la relation 
  $$ E_n = \frac{E_0}{n^2} $$ 
  qui permet de déterminer les différents niveaux de l’atome d’hydrogène. Avec $ E_0 = 13,6 \text{eV} $.

### 2. Quantification des niveaux énergétiques de la molécule
L’énergie d’une molécule est quantifiée ; elle dépend de ses électrons, des vibrations de la molécule autour de son centre de masse et de sa rotation.
Les noyaux atomiques ont également des niveaux d’énergie quantifiés. C’est pourquoi lors d’une désintégration radioactive un noyau fils peut être produit dans un état excité et se désexciter en émettant un photon $ \gamma $.

### 3. Quantification des niveaux énergétiques du noyau
Les noyaux atomiques, comme les électrons dans les atomes, possèdent des niveaux d’énergie quantifiés. Lorsqu'un noyau subit une désintégration radioactive, il peut être produit dans un état excité, c'est-à-dire avec une énergie supérieure à son état fondamental (état de plus basse énergie). Pour retourner à son état fondamental ou à un niveau d'énergie inférieur, le noyau excité émet l'excès d'énergie sous forme de rayonnement gamma (photon $ \gamma $).

### 4. Conclusion
Les atomes, les molécules et les noyaux possèdent des niveaux d’énergies quantifiées. Lorsque ces entités échangent de l’énergie avec le milieu extérieur, elles transitent d’un niveau d’énergie ($ E_P $) à un niveau d’énergie ($ E_n $) ou réciproquement.
Cette énergie échangée suit la relation de Bohr : 
$$ \Delta E = E_P - E_n \text{ ou } E_P > E_n $$

## IV Applications aux rays

### Définition
Le spectre de la lumière est l’ensemble des rayons lumineux monochromatiques constituant cette lumière.
```

<!-- Page 125 -->

```markdown
## 🌟 Spectre atomique

### 🌬️ Spectre de l’atome d’hydrogène
La figure ci-contre représente les spectra de raies d’absorption (a) et d’émission (b) de l’atome d’hydrogène ; les raies sombres (raies d’absorption) de la figure (a) occupent les mêmes positions que les raies claires de la figure (b) (raies d’émission)

### 🕵️ Interprétation du spectre
- Lorsqu'un atome passe d'un niveau d'énergie $E_p$ à un niveau d'énergie inférieur $E_n$ avec ($E_p > E_n$), l'atome perd de l'énergie qu'il peut émettre sous forme de rayonnement de fréquence $\nu$ telle que : 
$$ \Delta E = E_p - E_n = h \cdot \nu $$
- Plus la différence $E_p - E_n = h \cdot \nu$ est importante, plus la fréquence $\nu$ du rayonnement émis est grande.
- Le spectre d'absorption et le spectre d’émission d’un atome sont complémentaires, car l’atome ne peut absorber que les fréquences qu’il peut émettre. $v_{émission} = v_{absorption}$
- Le spectre d’émission, comme le spectre d’absorption est caractéristique de l’atome : Il permet d’identifier un élément chimique.

### 📏 Détermination de la longueur d’onde d’une radiation émise ou absorbée
On a : 
$$ \Delta E = E_p - E_n = h \cdot \frac{c}{\lambda} $$
Avec : 
$$ E_p = \frac{E_0}{n^2} \text{ et } E_n = \frac{E_0}{n'^2} $$
Donc : 
$$ \frac{h \cdot c}{\lambda} = E_0 \left( \frac{1}{n^2} - \frac{1}{n'^2} \right) $$
Alors : 
$$ \frac{1}{\lambda} = \frac{E_0}{h \cdot c} \left( \frac{1}{n^2} - \frac{1}{n'^2} \right) $$
On pose : $R_H = \frac{E_0}{h \cdot c}$ 
On trouve : 
$$ \frac{1}{\lambda} = R_H \left( \frac{1}{n^2} - \frac{1}{n'^2} \right) $$
$$ R_H = \frac{6,626 \times 10^{-34} \times 3 \times 10^8}{1,0956 \times 10^7 m^{-1}} $$

### 🎆 Les séries du spectre d’émission de l’atome d’hydrogène
Le spectre d’hydrogène est constitué de plusieurs séries de rais spectraux. Chaque série est caractérisée par le même niveau inférieur "n" pour toutes les radiations :
- **Série de Lyman** : elle contient toutes les radiations des états excités $p > 1$ vers l’état fondamental $(n = 1)$.

| E (eV)   |        |
|----------|--------|
| 0        |        |
| -0,54    |        |
| -0,85    |        |
| -1,51    |        |
| -1,39    |        |
| -3,6     |        |

## 🌡️ Spectre moléculaire
Le spectre d’absorption d’une molécule est formé de raies et de domaines d’absorption, d'intensité lumineuse du rayonnement absorbé diminue brusquement. Cela se traduit sur le spectre par un pic au niveau de la fréquence de radiation considérée.
```

<!-- Page 126 -->

```markdown
L’analyse du spectre d’émission d’une molécule permet d’identifier cette molécule du fait qu'il présente des informations concernant les groupes caractéristiques et les liaisons que contient la molécule.

#### ④ Spectre des noyaux
L’énergie des noyaux est aussi quantifiée ; lors d’une désintégration radioactive, le noyau fils résultant est souvent dans un état excité. La désexcitation de tels noyaux conduit à l’émission de photons de très grande énergie (rayonnement $\gamma$) caractéristiques des noyaux émetteurs.

Un noyau est capable d’absorber ou d’émettre un rayonnement $\gamma$ correspondant à une énergie de quelques MeV.

---

### Exercice 1
On considère un atome d’hydrogène $^{1}H$
1. Calculer l’intensité de la force d’attraction universelle $F_g$ entre l’électron et le noyau de l’atome d’hydrogène.
2. Calculer l’intensité de la force d’attraction électrostatique $F_e$ entre l’électron et le noyau de l’atome d’hydrogène.
3. Calculer le rapport $\frac{F_e}{F_g}$. Que peut-on déduire ?
   - Données :
     - La masse de l’électron : $m_e = 9,1 \times 10^{-31} \text{kg}$
     - La constante de gravitation universelle : $G = 6,67 \times 10^{-11} \text{N.m}^2 \text{kg}^{-2}$
     - L’intensité de champ de pesanteur : $g = 10 \text{m.s}^{-2}$
     - La constante de Coulomb : $K = 9 \times 10^9 \text{N.m}^2 \text{C}^{-2}$

---

### Exercice 2
On considère une radiation lumineuse de longueur d’onde dans le vide $\lambda_0 = 670 \text{nm}$
1. Calculer la fréquence de ce faisceau.
2. Calculer en joule ($J$) et en électron-volt (eV) l’énergie du photon associée à cette radiation.
   - On donne : $1 \text{eV} = 1,6 \times 10^{-19} \text{J} ; h = 6,62 \times 10^{-34} \text{J.s}$

---

### Exercice 3
Le spectre ci-dessus est celui d’une lampe à vapeur de sodium.
1. S’agit-il d’un spectre d’émission ou d’absorption ?
2. Déterminer la valeur approximative de la longueur d’émise par un atome de sodium.
3. Calculer la fréquence de la radiation monochromatique associée.
4. Calculer l’énergie du photon correspondant en joule et en eV.
   - Données : $h = 6,62 \times 10^{-34} \text{J.s} ; 1 \text{eV} = 1,6 \times 10^{-19} \text{J} ; c = 3.10^8 \text{m.s}^{-1} ; 1 \text{MeV} = 1,6 \times 10^{-13} \text{J}$

---

### Exercice 4
Un noyau d’uranium $^{234}$ dans un état excité émet un photon de fréquence $v = 3,7 \times 10^{19} \text{Hz}$
1. Calculer la longueur d’onde associée à ce photon ? À quel domaine du spectre électromagnétique appartient-il ?
2. Calculer la valeur de l’énergie associée à ce photon.
   - Données : $c = 3.10^8 \text{m.s}^{-1} ; h = 6,62 \times 10^{-34} \text{J.s}$
```

<!-- Page 127 -->

```markdown
# Exercice 5
L’énergie d’un atome d’hydrogène dans un état est donnée par la relation suivante: 

$$ E_n = -\frac{E_0}{n^2} $$

avec $E_0 = 13,6 \, \text{eV} \, n = 1; 2; 3; \ldots$

**Représenter sur un diagramme les niveaux énergétiques en électron-volts de l’atome d’hydrogène pour $n$ compris entre 1 et 4 en identifiant l'état fondamental et les états excités.**

Un atome d’hydrogène passe d'un niveau $n = 3$ à un niveau $n = 1$.
1. a - Calculer la longueur d'onde dans le vide de la radiation monochromatique associée à cette transition.
b - À quel domaine de spectre électromagnétique cette longueur d’onde appartient-elle?
  
**Données:** 
$$ C = 3 \times 10^8 \, \text{m.s}^{-1}, \, h = 6,62 \times 10^{-34} \, \text{J.s}, \, 1 \, \text{eV} = 1,6 \times 10^{-19} \, \text{J} $$

# Exercice 6
La série de Lyman de l’atome d’hydrogène, contient des radiations invisibles dont trois correspondent aux longueurs d’onde: 
$$ \lambda_1 = 121,5 \, \text{nm}, \, \lambda_2 = 102,5 \, \text{nm} \, \text{et } \lambda_3 = 97,2 \, \text{nm} $$

Les niveaux énergétiques de l’atome d’hydrogène sont donnés par la relation suivante: 

$$ E_n = -\frac{E_0}{n^2} $$

avec $E_0 = 13,6 \, \text{eV}$ et $n$ est un nombre entier positif.

Les trois raies citées correspondent à une transition du niveau $n$ vers l’état fondamental.

1. Rappeler qu’est ce qu’un état fondamental? Et qu’est ce qu’un état excité?
2. Calculer les fréquences des trois raies.
3. Exprimer la relation entre la fréquence $v_n$ et $n$.
4. On déduire les nombres quantiques n des niveaux d’énergie de départ associés aux trois raies.

**Données:** 
$$ C = 3 \times 10^8 \, \text{m.s}^{-1}, \, h = 6,62 \times 10^{-34} \, \text{J.s} $$

# Exercice 7
On utilise les lampes à vapeur de sodium pour éclairer des tunnels routiers. Ces lampes contiennent de la vapeur de sodium à très faible pression. Cette vapeur est excitée par un faisceau d'électrons qui traverse le tube. Les atomes de sodium absorbent l'énergie des électrons. L'énergie est restituée lors du retour à l'état fondamental sous forme de radiations lumineuses. Les lampes à vapeur de sodium émettent surtout de la lumière jaune.

L'analyse du spectre d'émission d'une lampe à vapeur de sodium révèle la présence de raies de longueur d'onde $\lambda$ bien définie. La figure ⓵

1. Quelles sont les longueurs d'onde des raies appartenant au domaine du visible? au domaine des ultraviolets? au domaine de l'infrarouge?
2. S'agit-il d'une lumière polychromatique ou monochromatique? Justifier votre réponse.
3. Quelle est la valeur de la fréquence de la raie de longueur d’onde $\lambda = 589,0 \, \text{nm}$.

La figure ⓶ donne le diagramme des niveaux d'énergie de l'atome de sodium.
1. a - Indiquer sur le diagramme de la figure ⓶, l'état fondamental et les états excités.
b - Calculer l'énergie $E$ en (eV) qui correspond à l'émission de la raie de longueur d’onde $\lambda = 589,0 \, \text{nm}$.
c - Sans justifier, indiquer la flèche notée (1) sur le diagramme de la figure ⓶, la transition correspondante.

L'atome de sodium, considéré maintenant à l'état $E_2$, reçoit une radiation lumineuse d'énergie $E' = 1 \, \text{eV}$.
1. Cette radiation lumineuse peut-elle interagir avec l'atome de sodium à l'état $E_2$? Justifier la réponse.
2. Représenter sur le diagramme de la figure ⓶, la transition correspondant par une flèche notée (2).
3. La raie associée à cette transition est-elle une raie d'émission ou une raie d'absorption? Justifier la réponse.

**Données:** 
$$ C = 3 \times 10^8 \, \text{m.s}^{-1}, \, h = 6,62 \times 10^{-34} \, \text{J.s} $$
```

<!-- Page 128 -->

```markdown
# Correction

## Exercice 1
Calculons la force d’attraction universelle agissant entre l’électron et le noyau :
On a : $F_g = G \frac{m_e m_n}{r^2}$. A.N. : $F_g = 6,67 \times 10^{-11} \frac{9,1 \times 10^{-31} \times 1,67 \times 10^{-27}}{(25 \times 10^{-12})^2} = 1,62 \times 10^{-46} N$

Calculons la force d’attraction électrostatique agissant entre l’électron et le noyau :
On a : $F_e = k \frac{|q_e|q_n|}{r^2}$. A.N. : $F_e = 9 \times 10^9 \times \frac{(1,6 \times 10^{-19})^2}{(25 \times 10^{-12})^2} = 3,69 \times 10^{-7} N$

On a : $\frac{F_e}{F_g} = \frac{3,69 \times 10^{-7}}{1,62 \times 10^{-46}} = 2,28 \times 10^{39}$

On déduit qu’à l’échelle du noyau, la force d’attraction universelle est très négligeable devant la force d’attraction électrostatique.

## Exercice 2
Calculons la fréquence de cette radiation :
On a : $c = \lambda_0 \cdot v$  
Donc : $v = \frac{c}{\lambda_0}$. A.N. : $v = \frac{3 \times 10^8}{670 \times 10^{-9}} = 4,48 \times 10^{14} Hz$

Calculons l’énergie de cette radiation :
On a : $E = h \cdot v$. A.N. : $E = 6,62 \times 10^{-34} \times 4,48 \times 10^{14} = 2,97 \times 10^{-19} J$

En (eV) : $E = \frac{2,97 \times 10^{-19}}{1,6 \times 10^{-19}} \approx 1,86 eV$

## Exercice 3
Ce spectre est celui d’émission.  
D’après le spectre, on trouve $\lambda_0 \approx 590 nm$

Calculons la fréquence de cette radiation :
On a : $c = \lambda_0 \cdot v$  
Donc : $v = \frac{c}{\lambda_0}$. A.N. : $v = \frac{3 \times 10^8}{590 \times 10^{-9}} \approx 5,08 \times 10^{14} Hz$

Calculons l’énergie de cette radiation :
On a : $E = h \cdot v$.  
Donc : $E = \frac{h c}{\lambda}$. A.N. : $E = 6,62 \times 10^{-34} \times 3 \times 10^8 / 590 \times 10^{-9} = 3,37 \times 10^{-19} J$

En (eV) : $E = \frac{3,37 \times 10^{-19}}{1,6 \times 10^{-19}} \approx 2,10 eV$

## Exercice 4
Calculons la longueur d'onde du photon :
On a : $c = \lambda_0 \cdot v$  
Donc : $\lambda_0 = \frac{c}{v}$. A.N. : $\lambda_0 = \frac{3 \times 10^8}{3,7 \times 10^19} \approx 8,1 \times 10^{-12} m$

$\Rightarrow$ Il s'agit d'une onde électromagnétique $\gamma$.

Calculons l’énergie associée à ce photon :
On a : $E = h \cdot v$. A.N. : $E = 6,62 \times 10^{-34} \times 3,7 \times 10^{19} = 2,45 \times 10^{-14} J$

En (MeV) : $E = \frac{2,45 \times 10^{-14}}{1,6 \times 10^{-13}} \approx 0,15 MeV$

## Exercice 5
Les quatre niveaux énergétiques de l'atome d’hydrogène :
On a : $E_n = \frac{E_0}{n^2}$  
Pour $n = 1$, on trouve : $E_1 = \frac{E_0}{2^2} = -13,6 eV$  
Pour $n = 2$, on trouve : $E_2 = \frac{E_0}{4} = -3,4 eV$  
Pour $n = 3$, on trouve : $E_3 = \frac{E_0}{9} = -1,51 eV$  
Pour $n = 4$, on trouve : $E_4 = \frac{E_0}{16} = -0,85 eV$

$a$ – Calculons la longueur d'onde associée à la transition $3 \to 1$ :
On a : $\Delta E = E_1 - E_3 = -13,6 - (-1,51) = -12,09 eV$  
Donc : $\Delta E = -12,09 \times 1,6 \times 10^{-19} = -1,93 \times 10^{-18} J$
```

<!-- Page 129 -->

```markdown
L’énergie de la transition $3 \rightarrow 1$ est $E_{1-3} = |\Delta E|$  
Donc :  
$$ E = \frac{hc}{\lambda} \Rightarrow \lambda_0 = \frac{h \cdot c}{|\Delta E|} $$  
D'où :  
$$ \lambda_0 = \frac{6.62 \times 10^{-34} \times 3 \times 10^8}{1.93 \times 10^{-18}} = 102.7 \times 10^{-9} m \approx 102.7 \, nm $$  
b – On a $\lambda_0 = 102.7 < 40 \, nm$, donc il s’agit d’une radiation $UV$.

## Exercice 6

1. L'état fondamental, c’est l'état d'énergie le plus basse.  
   Un état excité est tout état d'énergie supérieur à celle de l'état fondamental.  
   calculons les fréquences des trois raies :  
   On a :  
   $$ c = \lambda \cdot \nu $$  
   Donc :  
   Pour la première radiation :  
   $$ v_1 = \frac{c}{\lambda_0} \Rightarrow A.N. : \nu_1 = \frac{3 \times 10^8}{121,5 \times 10^{-9}} \approx 2.47 \times 10^{15} \, Hz $$  
   Pour la deuxième radiation :  
   $$ v_2 = \frac{c}{\lambda_2} \Rightarrow A.N. : \nu_2 = \frac{3 \times 10^8}{102,5 \times 10^{-9}} \approx 2.93 \times 10^{15} \, Hz $$  
   Pour la troisième radiation :  
   $$ v_3 = \frac{c}{\lambda_3} \Rightarrow A.N. : \nu_3 = \frac{3 \times 10^8}{97,2 \times 10^{-9}} \approx 3.09 \times 10^{15} \, Hz $$  

2. Déterminons la relation entre $v_n$ et $n$ :  
   À l’énergie de la transition d'un niveau $n$ vers l’état fondamental est :  
   $$ E = |\Delta E| \text{ avec } \Delta E = E_1 - E_n $$  
   $$ h \nu_n = E_0 \left( 1 - \frac{1}{n^2} \right) $$  
   $$ v_n = \frac{E_n}{h \left( 1 - \frac{1}{n^2} \right)} $$  
   Avec : $h = 6.62 \times 10^{-34} \, J.s$ et $E_0 = 13,6 \times 1,6 \times 10^{-19} = 2,176 \times 10^{-18} \, J$  
   Alors :  
   $$ v_n = \frac{2,176 \times 10^{-18}}{6,62 \times 10^{-34}} \left( 1 - \frac{1}{n^2} \right) $$  
   D'où :  
   $$ v_n = 3.287 \times 10^{15} \left( 1 - \frac{1}{n^2} \right) $$  

3. Déduction des nombres quantiques associés aux fréquences $v_1$, $v_2$, et $v_3$ :  
   On a :  
   $$ v_n = 3.287 \times 10^{15} \left( 1 - \frac{1}{n^2} \right) $$  
   Donc :  
   $$ \frac{1}{n^2} = 1 - \frac{v_n}{3.287 \times 10^{15}} $$  

   $$ n = \frac{1}{\sqrt{3.287 \times 10^{15}}} $$  

   - Pour la première radiation on a :  
   $$ n_1 = \frac{1}{\sqrt{v_1}} \Rightarrow A.N. : n_1 = \frac{1}{\sqrt{2.47 \times 10^{15}}} = 2 $$  

   - Pour la deuxième radiation on a :  
   $$ n_2 = \frac{1}{\sqrt{v_2}} \Rightarrow A.N. : n_2 = \frac{1}{\sqrt{2.93 \times 10^{15}}} = 3 $$  

   - Pour la troisième radiation on a :  
   $$ n_3 = \frac{1}{\sqrt{v_3}} \Rightarrow A.N. : n_3 = \frac{1}{\sqrt{3.09 \times 10^{15}}} = 4 $$  
```


<!-- Page 130 -->

```markdown
# Exercice 7

1. Identification des longueurs d’ondes
   - Domaine du visible : longueurs d’onde comprises entre $400 \, \text{nm}$ et $800 \, \text{nm}$, en conséquence :
     - $ \lambda_1 = 568,8 \, \text{nm} $, le doublet $ \lambda_2 = 589 \, \text{nm} $ et $ \lambda' = 589,6 \, \text{nm} $ et $ \lambda_3 = 615,4 \, \text{nm} $
     - Domaine de l'infrarouge IR : longueurs d’onde supérieures à $800 \, \text{nm} : \lambda_4 = 819,5 \, \text{nm}$
     - $ \lambda_5 = 1138,2 \, \text{nm} $
     - Domaine de l'ultraviolet UV : longueurs d’onde inférieures à $400 \, \text{nm} : \lambda_6 = 330,3 \, \text{nm}$

   - Cette lumière est polychromatique, car elle contient plusieurs radiations

2. Calculons la fréquence de la radiation dont la longueur d’onde est : $ \lambda_2 = 589 \, \text{nm} $
   - A.N.: $ v_2 = \frac{c}{\lambda_2} \Rightarrow v_2 = \frac{c}{589 \times 10^{-9}} = 5,09 \times 10^{14} \, \text{Hz} $

3. a - Voir la figure ②  
   b - Calculons l’énergie $ E_2 \, (\text{eV}) $ qui correspond à l’émission la raie de longueur d'onde 
   $ \lambda_2 = 589 \, \text{nm} $ 
   - On a : 
     $$ |E_2| = h \, v_2 $$
   - A.N.: $ |E_2| = 6,62 \times 10^{-34} \times 5,09 \times 10^{14} $ 
   - On trouve: $ |E_2| = 3,37 \times 10^{-19} \, \text{J} $
   - Ou bien: $ |E_2| = \frac{3,37 \times 10^{-19}}{1,6 \times 10^{-19}} = 2,11 \, \text{eV} $

   c - On a : $ E_1 + |E_2| = -5,14 + 2,11 $
   - On trouve: $ E_1 + |E_2| = -3,03 \, \text{eV} = E_2 $
   - Donc il s’agit de la transition de l’état de nombre quantique $ n = 2 $ vers l’état fondamental.  
   - Voir la représentation de la transition dans la figure ②

5. a - On a: $ E_2 + E' = -3,03 + 1,1 = -1,93 \, \text{eV} = E_3 $  
   Par conséquence, l’atome de sodium absorbe cette radiation lumineuse et effectue une transition électronique du niveau $ n = 2 $ au niveau $ n = 3 $.

   b - Voir la représentation de la transition dans la figure ②  
   c - L’atome de sodium gagne de l’énergie, il passe du niveau $ n = 2 $ au niveau $ n = 3 $. Il s’agit d’une absorption.
```

<!-- Page 131 -->

```markdown
# Exemples de transformations forcées
## Unité 8

![Image de processus simplifié de production d'hydrogène vert](link)

### Objectifs
🌻 Définir l’électolyse.  
🌻 Savoir identifier les électrodes d’un électrolyseur et les transformations chimiques qui s’y produisent.  
🌻 Connaître quelques applications courantes et industrielles de l’électrolyse.

### Axes du cours
#### L’électrolyse
- Définitions
- Sens d’évolution spontanée
- Réactions aux électrodes

#### Quelques applications de l’électrolyse
```

<!-- Page 132 -->

```markdown
# L’électrolyse

## 1. Définition
Pour obliger un système chimique à évoluer dans le sens indirect (sens opposé à celui de l’évolution spontanée), on doit amener de l’énergie électrique au système chimique. Ce processus est appelé électrolyse, et la transformation est dite forcée.
- La transformation forcée est une transformation qui se déroule dans le sens opposé à celui de la transformation spontanée.
- L’électrolyse est une transformation due à la circulation d’un courant électrique imposé par un générateur.

## 2. Sens d’évolution du système chimique
Pendant l’électrolyse, le quotient de réaction $Q_r$ s’éloigne toujours de la constante d’équilibre $K$.

$$
Q_{r,i} \quad K \quad Q_r
$$

- Transformation forcée

## 3. Réactions aux électrodes
- L'anode c’est l'électrode liée au pôle positif du générateur, près de laquelle se produit une réaction d’oxydation de demi-équations: 
  $$ M_1 \rightarrow M_{1}^{+} + n_{1}e^{-} $$
  
- La cathode c’est l'électrode liée au pôle négatif du générateur, près de laquelle se produit une réaction de réduction de demi-équations: 
  $$ M_{2}^{2+} + n_{2}e^{-} \rightarrow M_{2} $$

## II. Exemples de quelques applications de l’électrolyse
Malgré le coût élevé de l’énergie consommée, l’électrolyse a de nombreuses applications industrielles.
- La préparation et la purification de nombreux métaux comme le zinc, le cuivre, l'argent, ...
- La préparation de l’eau oxygénée ou du dichlore ou du dihydrogène ...
- La protection métallique: l’électrolyse est utilisée pour recouvrir les métaux avec une couche mince d’un autre métal, comme le zingage ou l'argenture, pour les protéger de la corrosion ou pour améliorer sont aspect.
- Le recharge des accumulateurs des voitures et des téléphones portables,...

## Exercice 1
### Répondre par vrai ou faux
- Lors d’une transformation chimique forcée l’oxydation se produit près de l’électrode lié au pôle négatif du générateur.
- Au cours de l’électrolyse, l’anode est liée au pôle positif du générateur.
- L’électrolyse d'une solution électrolytique peut être réalisée à l’aide d’un GBF, en fixant sa fréquence sur une grande valeur.
- La valeur du quotient de réaction final d’une transformation chimique forcée est égale à la valeur de la constante d’équilibre.
- Lors d’une transformation chimique forcée le quotient de réaction tend vers la constante d’équilibre.
- Pendant l’électrolyse, les cations se déplacent vers la cathode et les anions se déplacent vers l’anode.
- Pendant l’électrolyse, se produit une transformation chimique limitée.
- La transformation forcée d’un système chimique est la transformation inverse de sa transformation chimique spontanée.
- Lors du fonctionnement d'un électrolyseur, il constitue un système chimique à l'état d'équilibre.
```

<!-- Page 133 -->

```markdown
## Exercice 2

On verse dans un tube en $U$ un volume $V = 50 mL$ d’une solution de bromure de cuivre $(Cu^{2+}_{(aq)} + Br^{-}_{(aq)})$ de concentration $C = 5 \times 10^{-1}mol.L^{-1}$ et on réalise le montage suivant, en utilisant deux électrodes de graphite $A$ et $B$.
À l’instant $t = 0$, on ferme l’interrupteur et le générateur débite un courant électrique d’intensité $I = 1,2 A$ pendant une durée $\Delta t = 20 min$.

1. Identifier la cathode et l’anode cet électrolyse.
2. En se basant sur les observations expérimentales, écrire l’équation de la demi-réaction qui se produit près de chaque électrode, et déduire l’équation bilan.
3. Dresser le tableau d’avancement associé à la réaction qui se produit lors de l’électrolyse.
4. Déterminer le bilan de la quantité de matière à la fin de l’électrolyse.
5. Calculer la masse de cuivre produite à la fin de l’électrolyse.

**Donnée :** $M(Cu) = 63,5 g.mol^{-1}; F = 9,65.10^{4}C.mol^{-1}$

---

## Exercice 3

On introduit dans un tube en $U$ une solution aqueuse de chlorure de sodium $(Na^{+} + Cl^{-})$ deux électrodes de graphite plongées dans la solution et reliées chacune à l’une des bornes (positive ou négative) d’un générateur de tension $G$.

### Observations expérimentales :
- Les espèces chimiques en solution : $H_2O, Na^{+}, Cl^{-}$
- Pendant l’électrolyse il y a l’apparition des ions $HO^{-}$ qui rend le milieu basique

L’expérience montre qu’il y a dégagement du dichlore $Cl_2$ au voisinage de l’une des électrodes et $H_2$ au voisinage de l’autre.
- Les électrodes de graphite $(A)$ et $(B)$ ne réagissent pas
- Les couples mis en jeu sont : $Na^{+}/Na ; Cl_{2}/Cl^{-} ; O_{2}/H_2O ; H_2O/H_2$

1. Identifier en justifiant la réponse, l’anode et cathode parmi les électrodes $(A)$ et $(B)$.
2. Indiquer sur le schéma les sens du mouvement des ions dans la solution.
3. Écrire les équations de réaction possibles au voisinage de chaque électrode
4. À partir des observations expérimentales, déduire l’équation bilan de la réaction.

Le générateur $G$ fournit un courant d’intensité $I = 2,5 A$, pendant une durée $\Delta t = 60 min$.
- a. Calculer la quantité d’électricité fournie pendant la durée $\Delta t$.
- b. Calculer le volume de dichlore $V(Cl_2)$ formé pendant la durée $\Delta t$.

**Donnée :** $V_m = 24 L.mol^{-1};$ La constante de Faraday: $F = 9,65.10^{4}C.mol^{-1}$

---

## Exercice 4

L’électrolyte est utilisé pour recouvrir les métaux avec une couche mince d’un autre métal, comme le zingage ou l’argenterie, pour protéger la corrosion ou pour améliorer son aspect.

On veut argenter une pièce métallique, en recouvrant sa surface d’une couche mince de masse $m$. Pour atteindre cet objectif, on réalise le schéma ci-dessous qui constitue l’une des électrodes. La deuxième électrode est graphique (inactique) ne réagit pas dans les conditions de l’expérience.

L’électrolyte utilisé est une solution de nitrate d’argent $(Ag^{+}_{(aq)} + NO_3^{-}_{aq})$ acidifié par l’acide sulfurique.
Seuls les couples $Ag^{+}/Ag$ et $O_2/H_2O$ interviennent dans cet électrolyse.
```

<!-- Page 134 -->

```markdown
# Élément de chimie électrochimique

## Question 1
Quelle est la différence entre la transformation forcée et la transformation spontanée ?

1. La clé doit être la cathode ou l'anode ? Justifier votre réponse.
2. Écrire l'équation de la demi-réaction qui se produit près de chaque électrode, et déduire l'équation globale.
3. L'électrolyse a lieu pendant une durée $\Delta t = 20 \text{ min}$ avec un coût d'intensité constante $I = 4,0 \text{ A}$.
   - a. Dresser le tableau d'avancement associé à la réaction qui se produit près de la cathode.
   - b. Calculer la masse d'argent déposée sur la clef.

Données:
- La masse molaire de l'argent : $M(Ag) = 18 \text{ g.mol}^{-1}$
- La constante de Faraday : $F = 9,65 \times 10^5 \text{ C.mol}^{-1}$

## Exercice 5
On réalise l'électrolyse pour recouvrir une lame rectangulaire mince de fer dont l'épaisseur est négligeable, de longueur $L = 10 \text{ cm}$ et de largeur $l = 6 \text{ cm}$ par une couche de nickel d'épaisseur $e$ sur chacune des deux faces de la lame.

Pour cela on immerge totalement la lame de fer et une tige en platine dans un récipent contenant une solution acide de sulfate de nickel $(\text{Ni}^{2+}(aq) + \text{SO}_4^{2-}(aq))$ de concentration $C = 1,5 \times 10^{-1} \text{ mol.L}^{-1}$ et de volume $V = 1 \text{ L}$.

On relie le pôle négatif du générateur à la lame de fer et son pôle positif à la tige de platine. Un courant d'intensité constante $I = 8,0 \text{ A}$ passe alors dans le circuit pendant une durée $\Delta t = 25 \text{ min}$.
1. Écrire l'équation de la demi-réaction qui se produit près de la cathode et déduire l'équation bilan.
2. Calculer la quantité de matière de nickel déposée sur la lame de fer au bout de la durée $\Delta t$.
3. Calculer la concentration molaire effective des ions de nickel dans la solution à la fin de l'électrolyse.

Données:
- La masse molaire de Nickel : $M(Ni) = 58,1 \text{ g.mol}^{-1}$
- La constante de Faraday : $F = 9,65 \times 10^4 \text{ C.mol}^{-1}$
- Masse volumique de Nickel : $\rho(Ni) = 8 \text{ g.cm}^{-3}$
- Les couples ox/red intervenant dans cette électrolyse : $\text{Ni}^{2+}/\text{Ni}, \text{O}_2/\text{H}_2\text{O}$

## Exercice 6
Le fer-blanc est un produit en acier recouvert d'une couche d'étain. Il est obtenu par voie électrolytique. Ce fer blanc est traditionnellement utilisé pour la fabrication de boîtes de conserve. 

Cet exercice sert à déterminer la masse d'étain nécessaire pour couvrir par électrolyse, un morceau parallélépipédique d'acier. Pour atteindre cet objectif, on verse dans un récipient un volume $V = 200 \text{ mL}$ d'une solution acide d'étain $(\text{Sn}^{2+} + \text{SO}_4^{2-}(aq))$ de concentration $C = 0,32 \text{ mol.L}^{-1}$ puis on y introduit un morceau d'acide de forme et une électrode de graphite.

On relie le morceau d'acier à l'un des pôles d'un générateur de courant continu et l'électrode de graphite à l'autre pôle. La figure ci-contre.
1. Le morceau d'acier doit-il être la cathode ou l'anode ? Justifier la réponse.
2. Écrire la demi-équation de la réaction se produit au voisinage de chaque électrode. En déterminant sa nature (demi-équation d’oxydation ou de réduction). Déduire l’équation bilan de la réaction globale de l’électrolyse.
3. Cette électrolyse a été réalisée pendant une durée $\Delta t = 42 \text{ min}$ et le générateur fournit un courant d'intensité $I = 3 \text{ A}$.
   - a. Calculer la quantité d'électrification fournie par le générateur durant $\Delta t$.
   - b. Dresser le tableau d'avancement qui se produit au cours de cette électrolyse.
   - c. Trouver l'expansion de la masse d'étain produite en fonction de $\Delta t, I, M(Sn), \Delta t$, puis calculer sa valeur.

Données:
- La masse molaire d'étain : $M(Sn) = 118,7 \text{ g.mol}^{-1}$
- La constante de Faraday : $F = 9,65 \times 10^4 \text{ C.mol}^{-1}$
- Masse volumique d'étain : $\rho(Sn) = 7,31 \text{ cm}^{-3}$
- Les couples ox/red intervenant dans cette électrolyse : $\text{Sn}^{2+}/\text{Sn}, \text{O}_2/\text{H}_2\text{O}$
- Les dimensions morceaux d'acier : $l = 3 \text{ cm}, L = 1,2 \text{ cm} et h = 0,4 \text{ cm}$
```

<!-- Page 135 -->

```markdown
# Exercice 7

Plus de 50% de la production mondiale de zinc sont obtenus par électrolyse d'une solution acidifier de sulfate de zinc \((Zn^{2+}_{aq} + SO^{2-}_{4aq})\).
Dans une unité de production de zinc, l’électrolyse est réalisée à l’aide d’un générateur de courant continu délivrant une intensité d'ou courant \(I = 30\text{A}\) pendant une durée \(\Delta t = 3\text{h}\).

- Écrire l'équation de la réaction se produisant lors de cette électrolyse.
- Dresser le tableau d'avancement associé à cette réaction.
- Montrer que la masse de zinc produite lors de cette électrolyse est : \(m = \frac{I.\Delta t}{2F}M(Zn)\), puis calculer sa valeur.
- Calculer le volume de dioxygène dégagé lors de cette électrolyse.

  - Les couples \(ox/\ red\) intervenant dans cette électrolyse: \(Zn^{2+}/Zn ; O_{2}/H_{2}\)

Données :
- La constante de faraday : \(F = 9,65 \times 10^{4} \text{C.mol}^{-1}\)
- La masse molaire de zinc : \(M(Zn) = 65,4 \text{g.mol}^{-1}\)
- Le volume molaire dans les conditions de l'expérience: \(V_M = 24 \text{g.l}^{-1}\)

# Exercice 8

À une température \(T = 450^{\circ}C\) et une pression \(P = 1,013\text{bar}\), on réalise l’électrolyse d’une solution du chlorure de magnésium \((Mg^{2+}_{aq} + 2Cl^{-}_{aq})\).
Cette électrolyse a été réalisée à l’aide deux électrodes \( (A) \) et \( (B) \) de graphite liées aux pôles d’un générateur de courant fournissant une intensité constante \(I = 6 \text{A}\). Notons que l’électrode \(A\) est liée au pôle positif du générateur.

- Nommer les \( (A) \) et \( (B) \). Justifier la réponse.
- Écrire l'équation de la demi-réaction qui se produit près de chaque électrode, et déduire l'équation bilan.
- L’électrolyse est réalisée pendant une durée \(\Delta t = 10\text{h}\)
  
  a - Calculer la quantité d’électricité délivrée par le générateur durant cette électrolyse.  
  b - Dresser le tableau d'avancement associé à la réaction qui se produit au voisinage de l’électrode \( (A) \).  
  c - Calculer la masse de magnésium produite au cours de cette électrolyse.  
  d - Calculer le volume de dichlore formé lors de cette électrolyse.

Données :
- Les couples \(ox/\ red\) intervenant dans cette électrolyse: \(Mg^{2+}/Mg ; Cl_{2}/Cl^{-}\)
- La constante de faraday : \(F = 9,65 \times 10^{4} \text{C.mol}^{-1}\)
- La masse molaire de magnésium : \(M(Mg) = 24 \text{g.mol}^{-1}\)
- Le volume molaire dans les conditions expérimentales: \(V_M = 59,35 \text{g.mol}^{-1}\)

# Exercice 9

Une bague métallique de forme cylindrique de rayon \(R = 1,2\text{cm}\), de largeur \(l = 0,3\text{cm}\) et d'épaisseur négligeable.
On désire recouvrir cette bague de l’intérieur et de l’extérieur, d’une fine couche d’or d’épaisseur \(e\). Pour atteindre cet objectif, on réalise l’électrolyse dont la bague constitue l’une des électrodes. La figure ci-contre.

- La deuxième électrode en graphite inattaquable (ne réagit pas) dans les conditions de l’expérience.

L’électrolyte utilisé est une solution de chlorure d’or \((Au^{3+}_{aq} + 3Cl^{-}_{aq})\).

1. La bague doit-elle être la cathode ou l’anode ? Justifier la réponse.
2. Indiquer sur la figure ci-contre la polarité du générateur et le sens du courant qu’il fournit.
3. Écrire la demi-équation de la réaction se produit au voisinage de la bague, et celle qui se produit au voisinage de l’électrode de graphite.
4. Déduire l'équation bilan de la réaction bilan qui se produit lors de cette électrolyse.  
L’électrolyse est réalisée pendant une durée \(\Delta t = 25\text{min}\) et le générateur fournit un courant d’intensité \(I = 0,5 \text{A}\)

  a - Calculer la quantité d’électricité fournie par le générateur durant cette électrolyse.  
  b - Dresser le tableau d'avancement qui se produit au cours de cette électrolyse.  
  c - Trouver l'expression de la masse doré produite en fonction de \(\Delta t, I, M(Au), \Delta t\), puis calculer sa valeur.

Données :
- Les couples \(ox/\ red\) intervenant dans cette électrolyse: \(Au^{2+}/Au ; Cl_{2}/Cl^{-}\)
- La constante de faraday : \(F = 9,65 \times 10^{4} \text{C.mol}^{-1}\)
- La masse molaire de l’or : \(M(Au) = 197\text{g.mol}^{-1}\)
- Masse volumique de l’or : \(\rho(Au) = 19,3 \text{g.cm}^{-3}\)
```

<!-- Page 136 -->

```markdown
# Exercice 10

On produit industriellement le cadmium \( \text{Cd} \) par électrolyse d'une solution de sulfate de cadmium \( \text{Cd}^{2+}_{(aq)} + \text{SO}^{2-}_{4(aq)} \) et d'acide sulfurique. L'électrolyse est réalisée à l'aide d'un générateur délivrant un courant d'intensité constante \( I \). La figure ci-contre.

- Indiquer sur la figure ci-contre la polarité du générateur et le sens du courant qui y circule.
- Écrire les demi-équations des réactions qui se produisent aux électrodes et déduire l'équation globale d'électrolyse.
- Dresser le tableau d’avancement associé à la réaction globale d'électrolyse.
- Montrer que la masse du cadmium produite à un instant \( t \) est: 

$$ m_{\text{Cd}} = \frac{I \cdot M_{\text{Cd}}}{2 \cdot F} \cdot t $$

- La courbe de la figure ci-dessus donne les variations de la masse du cadmium en fonction du temps. En exploitant cette courbe déterminer:
  - \( a \) - La durée de l'électolyse.
  - \( b \) - La masse du cadmium produite à la fin de l'électrolyse.
  - \( c \) - L’intensité du courant fournie par le générateur pendant l'électrolyse.

6. Calculer la quantité d’électricité fournie par le générateur pendant l'électrolyse.
7. Calculer l’énergie électrique consommée pendant l'électrolyse.
   - \( \bullet \) La masse molaire cadmium: \( M(\text{Cd}) = 112,4 \, \text{g.mol}^{-1} \)
   - \( \bullet \) La constante de faraday: \( F = 9,65 \times 10^4 \, \text{C.mol}^{-1} \)
   - \( \bullet \) La tension aux bornes du générateur: \( U_{PN} = 4 \, \text{V} \)
   - \( \bullet \) Les couples mis en jeu lors de l’électrolyse: \( \text{Cd}^{2+}_{(aq)}/\text{Cd}_{(s)} \) et \( \text{O}_2{(g)}/\text{H}_2\text{O}_{(l)} \)

---

# Correction

## Exercice 1

Répondre par vrai ou faux:

- ❏ Lors d’une transformation chimique forcée l’oxydation se produit près de l’électrode lié au pôle négatif du générateur. **faux**
- ❏ Au cours de l’électrolyse, l’anode est liée au pôle positif du générateur. **vrai**
- ❏ L’électrolyse d’une solution électrolytique peut être réalisée à l’aide d’un GBF, en fixant sa fréquence sur une grande valeur. **faux**
- ❏ La valeur du quotient de réaction final d’une transformation chimique forcée est égale à la valeur de la constante d’équilibre. **faux**
- ❏ Lors d’une transformation chimique forcée le quotient de réaction tend vers la constante d'équilibre. **faux**
- ❏ Pendant l’électrolyse, les cations se déplacent dans la solution, vers la cathode et les anions se déplacent vers l’anode. **vrai**
- ❏ Pendant l’électrolyse, elle se produit une transformation chimique limitée. **vrai**
- ❏ La transformation forcée d’un système chimique est la transformation inverse de sa transformation chimique spontanée. **vrai**
- ❏ Lors du fonctionnement d'un électrolyseur, il est constitué un système chimique à l’état d’équilibre. **faux**

---

# Exercice 2

La cathode est l’électrode \( A \), car il est lié au pôle négatif du générateur et l’anode est l’électrode \( B \), car il est lié au pôle positif du générateur.

Les demi- équations des réactions se produisant aux électrodes:
- Au voisinage de la cathode \( A \) se produit une réduction de demi-équation: 

$$ \text{Cu}^{2+}_{(aq)} + 2\text{e}^- \leftrightarrow \text{Cu} $$

- L’équation bilan de cette réaction: 

$$ \text{Cu}^{2+}_{(aq)} + 2\text{Br}^- \longrightarrow \text{Cu}_{(s)} + 2\text{e}^- $$

Cette transformation chimique n’est pas spontanée car elle est provoquée par le passage du courant électrique dans la solution, nous l’applensons comme une transformation chimique forcée.
```

<!-- Page 137 -->

```markdown
# Le tableau d'avancement associé à la réaction qui se produit lors l’électolyse:

| Équation                                | $Cu^{2+}(aq) + 2Br^{-}(aq) \rightarrow Cu(s) + Br_2(aq)$ | $n(e^{-})$ |
|-----------------------------------------|----------------------------------------------------------|------------|
| État                                    | Avancement                                                | Les quantités de matière en mole (mol) |
| Initial                                 | 0                                                        | $CV$      | 0          | 0          |
| Intermédiaire                           | $x$                                                      | $CV - x$  | $CV - 2x$  | $x$      | $2x$      |
| Final                                   | $x_{max}$                                               | $C_{V} - x_{max}$ | $CV - 2x_{max}$ | $x_{max}$ | $x_{max}$ | $2x_{max}$ |

1. **Déterminons le bilan de la quantité de matière à la fin de l’électolyse.**
   - Calculons la valeur de l'avancement de réaction à la fin de l'électrolyse. D'après le tableau d’avancement on a: $n(e^{-}) = 2x$
   - Donc $x = \frac{n(e^{-})}{2} = \frac{I \Delta t}{F}$

   Alors: 
   $$ x = \frac{1.8}{2 \cdot 1.2 \cdot 20 \cdot 60} = 7.46 \times 10^{-3} \text{mol} $$

   A.N.: $n(e^{-}) = 7.46 \times 10^{-3} \text{mol}$

   - Le bilan de la quantité de matière:
     D’après le tableau d’avancement on a: $n(Cu^{2+}) = CV - x$
     A.N.: $n(Cu^{2+}) = 5 \times 10^{-1} \times 50 \times 10^{-3} - 7,46 \times 10^{-3} = 1,75 \times 10^{-2} \text{mol}$
     Et $n(Br^{-}(aq)) = CV - 2x$
     A.N.: $n(Br^{-}(aq)) = 5 \times 10^{-1} \times 50 \times 10^{-3} - 2 \times 7,46 \times 10^{-3} \approx 1,01 \times 10^{-2} \text{mol}$
     Et $n(Cu) = n(Br_2) = 7,46 \times 10^{-3} \text{mol}$

   Donc $m = M(Cu) \cdot n(Cu)$
   $$ m = M(Cu) \cdot n(Cu) = 63,5 \cdot 7,46 \times 10^{-3} \approx 0,47 g $$

2. **Exercice 3**
   - **Les électrodes**
     - La cathode est l’électrode reliée au pôle négatif du générateur, donc c’est l’électrode (A).
     - L’anode est l’électrode reliée au pôle positif du générateur donc, c’est l’électrode (B).
   - **Mouvement des ions (le schéma ci-contre)**
     - Pendant l’électolyse, les cations (ions positifs) migrent dans le sens du courant électrique, donc vers l’électrode (A)
     - Les anions (ions négatifs) migrent dans le sens opposé à celui du courant électrique, donc vers l’électrode (B)
   - **Les équations de réaction possibles au voisinage des électrodes**
     - Au voisinage de la cathode (A) se produit la réduction, donc les réactions possibles sont : 
     $$ 2H_2O + 2e^{-} \rightarrow H_2 + 2OH^{-} $$
     et 
     $$ Na^{+} + e^{-} \rightarrow Na $$
     - Au voisinage de l’anode (B) se produit l’oxydation, donc les réactions possibles sont:
     $$ 2Cl^{-} \rightarrow Cl_2 + 2e^{-} $$

   D’après les observations expérimentales, pendant l’électrolyse, il y a dégagement des gaz Cl₂ et H₂ et formation des ions HO⁻, les équations des réactions en jeu sont: 
   $$ 2H_2O + 2e^{-} \rightarrow H_2 + 2OH^{-} $$
   et 
   $$ 2Cl^{-} \rightarrow Cl_2 + 2e^{-} $$

   Alors l’équation bilan de la réaction est:
   $$ 2H_2O + 2Cl^{-} \rightarrow H_2 + Cl_2 + 2OH^{-} $$

   Le générateur G fournit un courant d’intensité $I = 2,5 A$, pendant une durée $\Delta t = 60 min$
   - a - Calculons la quantité d’électricité fournie pendant la durée $\Delta t$ est : $Q = I \cdot \Delta t$
   - b - Calculons le volume de dichlore $V(Cl_2)$ formé pendant la durée $\Delta t$.

   **Le tableau d’avancement associé à cette réaction**
```

<!-- Page 138 -->

```markdown
# L'équation de la réaction
$$
2H_2O + 2Cl^- \rightarrow H_2 + Cl_2 + 2H_2O - n(e^-)
$$

## L'état
### L'avancement
|            | Initial | Intermédiaire | Final  |
|------------|---------|---------------|--------|
| En excès   | 0       | CV = $2x$     | $x_{max}$ |
| La quantité de matière en mol | 0       | $CV - 2x$    | $CV - 2x_{max}$  |

- **Calculons l'avancement de la réaction**
  D'après le tableau d'avancement on a : $n(e^-) = 2x$
  
  Donc $x = \frac{n(e^-)}{2} \text{ avec } n(e^-) = \frac{I \Delta t}{F}$
  
  Alors : $x = \frac{2.5 \times 60}{2 \times 965 \times 10^4} \approx 4.66 \times 10^{-2} \text{ mol}$

  A.N.: $V(Cl_2) = x.V_m$ 

  D'après le tableau d'avancement on a : $n(Cl_2) = x$

  Donc $$V(Cl_2) = V_m$$

  Alors : $V(Cl_2) = 4.66 \times 10^{-2} \times 24 \approx 1.12 L$

# Exercice 4
1. Une transformation chimique spontanée se produit naturellement, sans apport d'énergie extérieure, alors qu'une transformation chimique forcée nécessite un apport d'énergie pour se produire, souvent sous forme de courant électrique.
2. Pour recouvrir la clef d'une couche d'argent, elle doit être le siège d'une réduction cathodique, c'est-à-dire que la clef doit être à cathode.
   
## L'équation de la réaction :
- Au voisinage de la cathode La clef, se produit une réduction de demi-équation : 
$$
Ag^+(aq) + e^- \rightarrow Ag(s)
$$
- Au voisinage de l'anode L'électrode de graphite, se produit une oxydation de demi-équation : 
$$
2H_2O(l) \rightarrow O_2(g) + 4H^+(aq) + 4e^-
$$
- a - Le tableau d'avancement associé à la réaction de l'électrolyse :
$$
2H_2O + 4Ag^+(aq) \rightarrow O_2(g) + 4H^+(aq) + 4Ag(s) + n(e^-)
$$

## L'état
### L'avancement
|            | Initial | Intermédiaire | Final  |
|------------|---------|---------------|--------|
| En excès   | 0       | $x$           | $x_{max}$ |
| La quantité de matière en mol | 0       | $n_0(Ag^+) - 4x$ | $n_0(Ag^+) - 4x_{max}$ |

- b - Calculons la masse de l'argent déposé sur la clef
  D'après le tableau d'avancement, on a :
  
  $$n(Ag) = 4x \text{ et } n(e^-) = 2x$$

  Donc : 
  $$n(Ag) = \frac{4}{4}n(e^-) = 2x$$
  
  Alors : $n(Ag) = n(e^-) \text{ avec } n(e^-) = \frac{I \Delta t}{F}$

  A.N.: $m = \frac{n(Ag) \cdot M(Ag)}{F}$ 

  On trouve : 
  $$m = \frac{4 \times 60 \times 10^8}{96500} = 5.37 \text{ g}$$

# Exercice 5
- L'équation de la réaction :
  - Au voisinage de la cathode la plaque, se produit la réduction de demi-équation : 
  $$Ni^{2+}(aq) + 2e^- \rightarrow Ni(s)$$
  - Au voisinage de l'anode l'électrode de platine, se produit l'oxidation de demi-équation : 
  $$2H_2O \rightarrow O_2(g) + 2Ni(g) + 4H^+(aq)$$
  
- Calculer la quantité de matière de Ni déposée sur la plaque.
  
| Le tableau d'avancement : |
```


<!-- Page 139 -->

```markdown
# L’équation de la réaction
$$
2H_2O + 2Ni^{2+}_{(aq)} \rightarrow O_2(g) + 4H^+_{(aq)} + 2Ni(s) + n(e^-)
$$

## L’état
| L’avancement         | La quantité de matière en mol  |
|----------------------|----------------------------------|
| Initial              | 0                                |
| Intermédiaire        | $x$                              |
| Final                | $x_{max}$                       |
| En excès             | $n_0(Ni^{2+})$                  |
|                      | $n_0(Ni^{2+}) - 2x$             |
|                      | $n_0(Ni^{2+}) - 2x_{max}$       |

D'après ce tableau, on a : $n(Ni) = x$ et $n(e^-) = 4x$  
Donc : $n(Ni) = \frac{n(e^-)}{2} = \frac{n(e^-)}{4}$

D’où : $n(Ni) = \frac{I \cdot t}{F} = \frac{1.4}{F}$

A.N. : $n(Ni) = 6,22 \times 10^{-2} \, mol$

## Déduisons l'épaisseur $e$
La masse de nickel déposé est : $m = \rho(Ni) \cdot V$ avec $V = 2e \cdot l$  
Donc : $m = 2e \cdot l \cdot \rho(Ni)$  
Alors : $e = \frac{m}{2l \cdot \rho(Ni)} (*)$  
Et on sait que : $n(Ni) = \frac{m}{M(Ni)}$  
Donc : $m = n(Ni) \cdot M(Ni)(**)$.  
On remplace l'équation $(**) $ dans l'équation $(*)$,  
On trouve : 
$$
e = \frac{n(Ni) \cdot M(Ni)}{2l \cdot \rho(Ni)}
$$

### A.N. : $e = \frac{6,22 \times 10^{-2} \cdot 58,1}{2 \times 10^{10} \times 6 \times 10^{6} \times 8,98 \times 10^{-6}} = 3,38 \times 10^{-5} m$

### Calculons la concentration des ions $Ni^{2+}$ à la fin de l'électrolyse.
D'après le tableau d'avancement, on a :  
$$
n(Ni^{2+}) = CV - 2x
$$
Donc : 
$$
[n(Ni^{2+})] = \frac{CV - 2x}{V} \text{ avec } x = \frac{n(e^-)}{4}
$$

Alors : 
$$
[n(Ni^{2+})] = \frac{CV - 2\frac{I \cdot t}{4F}}{F}
$$
D’où : 
$$
[n(Ni^{2+})] = C - \frac{I \cdot t}{2FV}
$$
A.N. : $[Ni^{2+}] = 1,5 \times 10^{-3} - \frac{8 \times 25 \times 60}{2 \times 96500 \times 1} = 8,78 \times 10^{-4} \, mol \cdot L^{-1}$

On trouve : 
$$
[n(Ni^{2+})] = 8,78 \times 10^{-4} \, mol \cdot L^{-1}
$$

---

## Exercice 6
Pour recouvrir le morceau de fer d'une couche d'étain, il doit être le siège d'une réduction cathodique, c.-à-d. ce morceau doit être la cathode.

### L’équation de la réaction :
$$
Sn^{2+}_{(aq)} + 2e^- \rightarrow Sn(s)
$$
Au voisinage de la cathode « le morceau de fer », se produit une réduction de demi-équation :  
$$
2H_2O \rightarrow O_2 + 4H^+_{(aq)}
$$
L’équation bilan est : 
$$
2Sn^{2+}_{(aq)} + 2H_2O \rightarrow 2Sn(s) + O_2(g) + 4H^+_{(aq)} + n(e^-)
$$

### a - calculons la quantité d’électricité fournie par le générateur.
On a : 
$$
Q = I \cdot t \text{ A.N. : } Q = 1 \cdot t
$$ 
A.N. : $ Q = 3 \times 42 \times 60 = 7,56 \times 10^{3} C$

### b - le tableau d'avancement associé à la réaction globale de l'électrolyse :
$$
2H_2O + 2Sn^{2+}_{(aq)} \rightarrow O_2(g) + 4H^+_{(aq)} + 2Sn(s) + n(e^-)
$$

### c - L’expression de la masse d’étain déposée
D’après le tableau d’avancement, on a : 
$$
n(Sn) = 2x \text{ et } n(e^-) = 4x
$$
Donc : 
$$
n(Sn) = \frac{n(e^-)}{2} \text{ et } n(e^-) = 4x
$$

D’où : 
$$
n(Sn) = \frac{I \cdot t}{F}
$$  
À partir de la valeur (***), on trouve : 
$$ 
n(Sn) = \frac{I \cdot t}{F} \cdot M(Sn)
$$ 
A.N. : $ m = \frac{1,42}{4} \cdot M(Sn) \, (4)$

### d - calculons l’épaisseur de la couche d’étain. 
On a : 
$$
m = \rho(Sn) \cdot V \text{ avec } V = (2l + l + 2h)
$$  
Donc : 
$$ 
m = \rho(Sn) \cdot 2e \cdot (L + h + L)
$$ 
Alors : 
$$
e = \frac{m}{\rho(Sn) \times 2e(L + h + L)}
$$
A.N. : 
$$
e = \frac{2.7 \cdot 31 \cdot (L+H+L)}{4.67} \text{ A.N. : } e = 6,05 \times 10^{-2} \, cm
$$
```

<!-- Page 140 -->

```markdown
# Exercice 7

1. L'équation de la réaction :
   Au voisinage de la cathode, il se produit une réduction de demi-équation : $Zn^{2+} + 2e^- \rightleftharpoons Zn_{(s)}$
   Au voisinage de l'anode, il se produit une oxydation de demi-équation : $2H_2O \rightleftharpoons O_2 + 4H^+_{(aq)} + 4e^-$
   L'équation de la réaction globale de l'électrolyse :
   $$ 2Zn^{2+}_{(aq)} + 2H_2O \rightarrow 2Zn_{(s)} + O_2(g) + 4H^+_{(aq)} + n(e^-) $$

2. Le tableau d'avancement de la réaction globale de l'électrolyse :

   | Équation de la réaction            | $2H_2O + 2Zn^{2+}_{(aq)} \rightarrow O_2 + 4H^+_{(aq)} + 2Zn_{(s)}$ | La quantité de matière en mol |
   |------------------------------------|----------------------------------------------------------------------|-------------------------------|
   | **L'état**                         | **L'avancement**                                                    |                               |
   | Initial                            | 0                                                                  | $n_0(Zn^{2+}) = 0$           |
   | Intermédiaire                      | $x$                                                                | $n_0(Zn^{2+}) - 2x$          |
   | Final                              | $x_{max}$                                                          | $n_0(Zn^{2+}) - 2x_{max}$    |

3. Calculons la masse de zinc produite pendant l'électrolyse :
   D'après le tableau d'avancement, on a : $n(Zn) = 2x et n(e^-) = 4x$
   Donc : $n(Zn) = \frac{n(e^-)}{2}$ avec $n(e^-) = \frac{I \times t}{F}$ et $n(Zn) = \frac{m}{M(Zn)}$
   Alors :
   $$ \frac{I \times t}{F} = 2n(Zn) \implies m = \frac{I \times t}{F} \cdot \frac{M(Zn)}{2F} $$

   D'où : 
   $$ m = \frac{I \times t}{2F} \cdot M(Zn) . A.N.: m = \frac{30 \times 10^3 \times 8 \times 3600 \times 65.4}{2 \times 9.65 \times 10^4} = 2.93 \times 10^5 \, g $$

4. Calculons le volume de $O_2$ formé lors de cette électrolyse :
   D'après le tableau d'avancement, on a : $n(O_2) = x$ et $n(e^-) = \frac{n(e^-)}{4}$
   D'où :
   $$ V(O_2) = \frac{n(e^-)}{4} \cdot \frac{I \times t}{F} $$

   Donc :
   $$ V(O_2) = \frac{30 \times 10^3 \times 8 \times 3600 \times 24}{4 \times 9.65 \times 10^4} = 5.37 \times 10^4 \, L $$

# Exercice 8

1. L'électrode $(A)$ est l'anode, car elle est liée au pôle positif du générateur et l'électrode $(B)$ est la cathode, car elle est liée au pôle négatif du générateur.
   L'équation de la réaction :
   Au voisinage de l'anode, se produit une oxydation de demi-équation : $2Cl^- \rightarrow Cl_2 + 2e^-$.
   Au voisinage de la cathode, se produit une réduction de demi-équation : $Mg^{2+}_{(aq)} + 2e^- \rightarrow Mg_{(s)}$.
   L'équation bilan de l'électrolyse :
   $$ 2Cl^{-}_{(aq)} + Mg^{2+}_{(aq)} \rightarrow Cl_2(g) + Mg_{(s)} $$

   a. Calculons la quantité d'électricité fournie par le générateur durant cette électrolyse :
   On a : $Q = I \times t$. A.N.: $Q = 6 \times 10^6 \times 3600 = 2.16 \times 10^5 \, C$

   b. Le tableau d'avancement associé à la réaction de l'électrolyse :

   | Équation                  | $2Cl^{-}_{(aq)} + Mg^{2+}_{(aq)} \rightarrow Cl_2(g) + Mg_{(s)}$ | $n(e^-)$             |
   |---------------------------|----------------------------------------------------------------------|-----------------------|
   | **L'état**               | **Avancement**                                                      | **Les quantités de matière en mole (mol)** |
   | Initial                  | 0                                                                    | $n_0 = 0$             |
   | Intermédiaire            | $x$                                                                  | $n_0 - 2x$            |
   | Final                    | $x_{max}$                                                            | $x_{max}$             |

   c. Calculons la masse de magnésium produite au cours de l'électrolyse :
   D'après le tableau d'avancement, on a : $n(Mg) = x et n(e^-) = \frac{I \times t}{2F}$
   Donc :
   $$ n(Mg) = \frac{I \times t}{2F} $$
   D'où :
   $$ m = n(Mg) \cdot M(Mg) \implies m = \frac{I \times t \cdot M(Mg)}{2F} $$
   Alors :
   $$ m = \frac{6 \times 10^6 \times 3600 \times 24}{2 \times 9.65 \times 10^4} = 27.2 \, g $$
```

<!-- Page 141 -->

```markdown
d – Calculons le volume de Cl₂ formé au cours de l'électrolyse :  
D'après le tableau d'avancement, on a : $n(Cl_2) = \frac{n(e^-)}{2}$  
Alors :  
$$ V(Cl_2) = \frac{n(Cl_2) \cdot V_m}{F} \text{ avec } n(e^-) = \frac{I \cdot \Delta t}{F} $$  
Donc :  
$$ V(Cl_2) = \frac{I \cdot \Delta t}{2F} : V(Cl_2) = \frac{6 \times 10^{-3} \times 3600 \times 59,35}{2 \times 9,65 \times 10^4} = 66,42 \, L $$

## Exercice 9

Pour recouvrir la bague d'une couche d'or, elle doit être le siège d'une réduction cathodique, c-a-d. cette bague doit être la cathode.  

La polarité du générateur et les sens du courant qui le travers sont indiqués dans la figure ci-contre.  
- La bague constituée la cathode donc elle est liée au pôle négatif du générateur  
- La bague de graphite constituée l'anode, et est lié au pôle positif du générateur.  
- Le courant électrique circule à extérieur du générateur du poile positif vers le pôle négatif.  

Les demi-équations qui se produisent aux électrodes :  
- Au voisinage de la cathode, la bague se produit une réduction : $Au^{3+} + 3e^- \rightleftharpoons Au$.  
- Au voisinage de l'anode, l'électrode de graphite se produit une oxydation : $2Cl^- \rightleftharpoons Cl_2 + 2e^-$.  

a – Calculons la quantité d'électricité fournie par le générateur :  
On a : $Q = I \cdot \Delta t$ A.N. : $Q = 0,5 \times 25 \times 60 = 7,5 \times 10^2 \, C$  
b – Le tableau d'avancement associé à la réaction

| Équation                        | $2Au^{3+}_{(aq)} + 6Cl^{-}_{(aq)} \rightarrow 2Au_{(s)} + 3Cl_2(g)$ | $n(e^-)$  |
|---------------------------------|---------------------------------------------------------------------|-----------|
| État                            | Avancement                   | Les quantités de matière en mole (mol) |
| Initial                         | 0                             | $n_0$         |
| Intermédiaire                   | $x$                           | $n_0 - 2x$   |
| Final                           | $x_{max}$                    | $n_0 - 2x_{max}$ |

c – Trouvons l'expression de la masse d’or produite :  
D'après le tableau d'avancement, on a : $n(Au) = 2x$ et $n(e^-) = 6x$  
Donc :  
$$ \frac{n(Au)}{n(e^-)} = \frac{2x}{6x} = \frac{1}{3} $$  
D'où : $n(Au) = \frac{I \cdot \Delta t}{3F}$  
A.N. : $m(Au) = \frac{n(Au) \cdot M(Au)}{3F} = \frac{I \cdot \Delta t \cdot M(Au)}{3 \times 9,65 \times 10^4}$  
$$ \therefore m = \frac{I \cdot \Delta t \cdot M(Au)}{3 \times 9,65 \times 10^4} = 0,51 \, g $$

d – Montrons l'expression de l'épaisseur $e$ :  
On a : $m = \rho(Au) \cdot V$  avec $V = 2 \times 2\pi R l \cdot e$  
Donc : $m = \rho(Au) \cdot 4\pi R l \cdot e$  
Alors :  
$$ e = \frac{m}{\rho(Au)} = \frac{m}{\pi R l} $$  
A.N. : $e = \frac{0,51}{4 \times 1,20 \times 3,19,3} = 5,84 \times 10^{-3} \, cm$
```

<!-- Page 142 -->

```markdown
# Exercice 10

1. La polarité du générateur et le sens que courant qui le travers sont indiqués dans la figure ci-contre.
   - Lors de l’électrolyse, le cadmium se dépose sur l’électrode (A) grâce à une réaction de réduction cathodique, donc cette électrode est la cathode, et l’électrode (B) est l’anode.
   - Le courant électrique circule à l’extérieur du générateur du pôle positif vers le pôle négatif.

2. L'équation de la réaction :
   Au voisinage de la cathode, il se produit une réduction de demi-équation :
   $$ \text{Cd}^{2+} + 2e^- \rightleftharpoons \text{Cd} $$
   Au voisinage de l'anode, il se produit une oxydation de demi-équation :
   $$ 2\text{H}_2\text{O} \rightleftharpoons \text{O}_2 + 4\text{H}^+ + 4e^- $$
   L'équation de la réaction globale de l'électrolyse est :
   $$ 2\text{H}_2\text{O} + 2\text{Cd}^{2+}_{(aq)} \rightarrow 2\text{Cd}_{(s)} + \text{O}_2_{(g)} + 4\text{H}^+_{(aq)} + n(e^-) $$

| L’état      | L’avancement | La quantité de matière en mol  |
|-------------|--------------|----------------------------------|
| Initial     | 0            | $n_0(\text{Cd}^{2+})$ 0         |
| Intermédiaire| $x$         | $n_0(\text{Cd}^{2+}) - 2x$      |
| Final       | $x_{max}$    | $n_0(\text{Cd}^{2+}) - 2x_{max}$|

3. Montons que $$ m = \frac{I \cdot M(\text{Cd})}{2F} \cdot t $$
   D'après le tableau d'avancement, on a : $n(\text{Cd}) = 2x$ et $n(e^-) = 4x$.
   Donc : $n(\text{Cd}) = \frac{n(e^-)}{2}$ avec $n(e^-) = \frac{I \cdot t}{F}$
   Alors : $$ m(\text{Cd}) = \frac{I \cdot M(\text{Cd})}{2F} $$
   D'où : $$ m = \frac{I \cdot M(\text{Cd})}{2F} \cdot \Delta t = t - t_0 = 0 $$

   Finalement, on trouve :
   $$ m = \frac{I \cdot M(\text{Cd})}{2F} \cdot t $$

   a - D'après la courbe, on a : $\Delta t = 3h$.
   b - D'après la courbe, on a : $m = 0,56 \, g$.
   c - On a : $m = f(t)$ est linéaire d'équation $m = a.t$.
   Et on a : $$ m = \frac{I \cdot M(\text{Cd})}{2F} \cdot t $$
   Donc : $$ \frac{I \cdot M(\text{Cd})}{2F} = a $$
   Alors : $$ I = \frac{2F \cdot a}{M(\text{Cd})} $$

   D'après la courbe, on a : 
   $$ a = \frac{(0-0,56) \times 10^3}{(0-3)\times3600} = 5,18 \times 10^{-2} \, g.s^{-1} $$

   D'où : 
   $$ I = 2 \times 9,6 \times 10^{-2} \times 5,18 \times 10^{-2} \approx 89 \, A $$ 

4. Calculons la quantité d’électricité fournie par le générateur au cours de l'électrolyse :
   On a : $$ Q = I \cdot \Delta t $$
   A.N. : $$ Q = 89 \times 3 \times 3600 = 9,6 \times 10^5 \, C $$ 
   Calculons l'énergie consommée lors de l'électrolyse :
   On a : $$ E = I \cdot U \cdot \Delta t $$
   A.N. : $$ E \approx 3,8 \times 10^6 \, J \approx 3,8 \, MJ $$
```

<!-- Page 143 -->

```markdown
# Contrôle de l’évolution d’un système chimique

## Objectifs
- Savoir écrire l’équation de la réaction d’estérification et d’hydrolyse.
- Connaître les caractéristiques d’une réaction d’estérification ou d’hydrolyse.
- Savoir accélérer une réaction d’estérification ou d’hydrolyse en utilisant un catalyseur ou en augmentant la température du milieu réactionnel.
- Savoir contrôler l’état final d’une réaction d’estérification ou d’hydrolyse par augmentation de la quantité de matière d’un réactif ou par élimination d’un produit.
- Connaître la réaction d’estérification par an hydride d’acide carboxylique, et ses caractéristiques.
- Connaître l’hydrolyse basique et ses caractéristiques.
- Connaître les propriétés du savon.

## Axes du cours 
### Les hydrocarbures saturés « Rappel »
### Quelques Composés organiques oxygénés
- Les alcools
- Les acides carboxyliques
- L’anhydride d’acide carboxylique
- Group d'esters

### Réactions d’estérification et d’hydrolyse
- Réaction d’estérification
- Réaction d’hydrolyse
- L’état d’équilibre estérification-hydrolyse

### Contrôle de la réaction d’estérification et d’hydrolyse
- Contrôle de l’état final, déplacement de l’état d’équilibre
- Rendement d’une réaction d’estérification

### Préparation d’un ester à partir d’anhydride d’acide et un alcool
### L’hydrolyse basique
- Réaction de saponification d’un ester
- Préparation du savon
```

<!-- Page 144 -->

# Les hydrocarbures saturés « Rappel »

## 1. Définitions
- Les alcanes sont des hydrocarbures saturés (ils sont constitués par des atomes de carbone et des atomes d'hydrogène liés entre eux par des liaisons simples $C - C$ et $C - H$)
- La formule brute générale d’un alcane est $C_nH_{2n+2}$ : avec $n$ est un nombre entier tel que $n \geq 1$
  
On distingue entre deux types d’alcanes :
- Les alcanes linéaires
- Les alcanes ramifiés

- Les radicaux alkyles sont des hydrocarbures saturés de formule brute $C_nH_{2n+1}$
- Les cycloalcanes sont des hydrocarbures cycliques saturés, dont la formule brute générale est $C_nH_{2n}$ avec $n$ un nombre entier tel que $n > 2$

## 2. Nomenclature des hydrocarbures
### Nomenclature des alcanes linéaires

Le nom de l’alcanes est formé du suffixe « ane » précédé d’un terme groupe qui correspond au nombre de carbone dans la chaîne.

### Exemples

| Nombre de carbone dans l’alcanes | Nom de l’alcanes | Formule brute | Formule semi-développée | Écriture topologique |
|----------------------------------|------------------|---------------|------------------------|----------------------|
| 1 | Méth | $CH_4$ | $CH_3 - CH_3$ | ↑ |
| 2 | Éth | $C_2H_6$ | $CH_3 - CH_3$ | ↑ |
| 3 | Prop | $C_3H_8$ | $CH_3 - CH_2 - CH_3$ | ↑ |
| 4 | But | $C_4H_{10}$ | $CH_3 - CH_2 - CH_2 - CH_3$ | ↑ |
| 5 | Pent | $C_5H_{12}$ | $CH_3 - CH_2 - CH_2 - CH_2 - CH_3$ | ↑ |
| 6 | Hex | $C_6H_{14}$ | $CH_3 - CH_2 - CH_2 - CH_2 - CH_2 - CH_3$ | ↑ |
| 7 | Hept | $C_7H_{16}$ | $CH_3 - CH_2 - CH_2 - CH_2 - CH_2 - CH_2 - CH_3$ | ↑ |
| 8 | Oct | $C_8H_{18}$ | $CH_3 - CH_2 - CH_2 - CH_2 - CH_2 - CH_2 - CH_2 - CH_3$ | ↑ |

### Nomenclature des radicaux alkyles
- Le nom de l’alkyle s’obtient à partir du nom de l’alcanes correspondant (qui a le même nombre d’atomes de carbone) en remplaçant la terminaison « ane » par « yle ».

<!-- Page 145 -->

```markdown
## Exemples
**Nombre de carbone dans l’alcanes**
1: Méth - Méthane $CH_4$ - Méthyle $CH_3$  
2: Éth - Éthane $C_2H_6$ - Éthyle $C_2H_5$  
3: Pro - Propane $C_3H_8$ - Propyle $C_3H_7$  
4: But - Butane $C_4H_{10}$ - Butyle $C_4H_9$

### Nomenclature des alcans ramifiés
Le nom d’un alcane ramifié est déterminé en appliquant les règles suivantes :
- On cherche la chaîne carbonée la plus longue (représente la chaîne carbonée principale).
- On place en préfixe le nom du groupe alkyle précédé d’un nombre (qui montre la position de l’alkyle dans la chaîne principale) puis on complète par le nom de la chaîne principale.
- S’il y a plusieurs radicaux alkyles, ils sont placés par ordre alphabétique.
- S’il y a les mêmes radicaux sont répétés, on utilise les préfixes multiplicateurs (di, tri, tétra)

## Exemples
**Formule semi-développée de l’alcane ramifié**
\[
\begin{array}{ccc}
H_3C - HC - H & 2-\text{méthylpropane} \\
& H_3C &
\end{array}
\]

\[
\begin{array}{ccc}
C_{H_3} & C - HC - H & 2,2-\text{diméthylpropane} \\
H_3C - & HC - CH_3 &
\end{array}
\]

\[
\begin{array}{ccc}
H_3C - HC - CH_2 - H & 2-\text{méthylbutane} \\
& H_3C &
\end{array}
\]

\[
\begin{array}{ccc}
H_3C - C - H & 3-\text{éthyl-2-méthylhexane} \\
H_3C - CH_2 - CH_2 - CH_3 &
\end{array}
\]

### Nomenclature des cycloalcanes
Le nom d’un cycloalcane est déterminé en utilisant le préfixe « cyclo » suivi par le nom de l’alcane correspondant.

## Exemples
Le cycloalcane | Nom du cycloalcane  
--- | ---  
$H_2C - CH_2$ | Cyclobutane  
$H_2C - CH_2$ | Cyclohexane  
$H_3C$ | $1-\text{éthyl-2,4-diméthylcyclohexane}$  
```


<!-- Page 146 -->

```markdown
## Composés organiques oxygénés

### ① Les alcools

#### Définition
La molécule d'alcool contient le groupement fonctionnel $–OH$ appelé groupement hydroxyde. La formule brute générale des alcools est : $R – OH$ avec $R$ est un groupe alkyle $C_nH_{2n+1}$.

#### Classes d’alcools
- **Alcool primaire** : Est dans lequel le carbone fonctionnel est lié à un autre atome de carbone.
- **Alcool secondaire** : Est dans lequel le carbone fonctionnel est lié à deux autres atomes de carbone.
- **Alcool tertiaire** : Est dans lequel le carbone fonctionnel est lié à trois autres atomes de carbone.

#### Exemples

| Alcool primaire                     | Alcool secondaire                  | Alcool tertiaire                  |
| ----------------------------------- | --------------------------------- | --------------------------------- |
| $H_3C—CH_2—CH_2—OH$                | $H_3C—CH_2—CH—OH$                | $OH$                             |
|                                     | $H_3C—CH_2—CH_2—CH_3$            | $H_3C—C—CH_2—CH_3$               |

#### Nomenclature des alcools
Le nom de l'alcool se déduit du nom de l'alcan correspondant (qui comporte le même nombre d’atomes de carbone) en remplaçant le « e » dans la terminaison du nom de l’alcan par « ol ». Pour les alcools ramifiés, la chaîne carbonée principale est la plus longue chaîne qui comporte le carbone fonctionnel, et pour préciser la position du groupe $–OH$ sur la chaîne carbonée, on utilise le suffixe « ol » précédé du plus petit nombre qui indique la position du carbone fonctionnel sur la chaîne carbonée principale.

#### Exemples

| Alcool                                | Nom de l’alcool             |
| ------------------------------------- | --------------------------- |
| $H_3C—CH_2—OH$                       | Éthanol                     |
| $H_3C—CH_2—CH—OH$                   | Propan-1-ol                |
| $H_3C—CH_2—CH—CH_2—CH_3$            | Pentan-3-ol                |
| $H_3C—CH_2—CH—OH$                   | Butan-2-ol                 |
| $OH$                                  | $3,4$-diméthyhexan-3-ol    |
| $H_3C—C—CH_2—CH_3$                  |                             |
```


<!-- Page 147 -->

```markdown
# Les acides carboxyliques
## Définition
L'acide carboxylique est un composé organique dont la molécule possède le groupement fonctionnel 
- \( \text{COOH} \) ou 
- \( \text{C} - \text{R} - \text{COOH} \) appelé groupement carboxyle.
La formule brute générale des acides carboxyliques est : 
$$ \text{C}_n\text{H}_{2n+1}\text{COOH} $$ 
ou atome d'hydrogène.

## Nomenclature des acides carboxyliques
Le nom de l'acide carboxylique se déduit de celui de l'alcanes correspondant en remplaçant le « e » dans la termination du nom de l'alcanes par « oïque » que l'on fait précéder par le mot « acide ». Dans le cas des acides carboxyliques on commence la numérotation à partir du carbone fonctionnel qui se trouve toujours au bout de la chaîne.

### Exemples
| Acide carboxylique | Nom de l’acide carboxylique       |
|--------------------|-----------------------------------|
| \( \text{H}_3\text{C} - \text{C} - \text{OH} \)  | Acide éthanoïque               |
| \( \text{H}_3\text{C} - \text{CH}_2 - \text{COOH} \) | Acide propanoïque            |
| \( \text{H}_3\text{C} - \text{CH} - \text{CH}_2 - \text{C} - \text{OH} \) | Acide 3-méthylbutanoïque    |

# L'anhydride d'acide carboxylique
## Définition
Anhydride d'acide carboxylique est un composé organique dont la molécule possède le groupement fonctionnel 
$$ \text{C} - \text{O} - \text{O} - \text{C} - \text{O} $$ 
ou 
$$ \text{C} = \text{O} $$ 
La formule générale d’un anhydride d’acides est : 
$$ \text{R} - \text{C} - \text{O} - \text{C} - \text{R} $$ 
avec \( -\text{R} \) est un groupe alkyle ou atome d'hydrogène.

## Préparation d’un anhydride d’acide carboxylique
La préparation de l’anhydride de l’acide carboxylique se fait à partir d’un acide carboxylique par chauffage à \( 700\,^\circ\text{C} \) et en utilisant un déshydratant comme le pentoxyde de phosphore \( \text{P}_4\text{O}_{10} \). Pendant cette réaction il y a élimination d’une molécule d’eau entre molécules d’acide.

## Nomenclature d’un anhydride d’acide carboxylique
Le nom d’anhydride d’acide carboxylique se déduit de celui de l’acide carboxylique correspondant en remplaçant le mot « acide» par le mot « anhydride ».
```

<!-- Page 148 -->

```markdown
## Exemples
| Anhydride d’acide carboxylique | Nom de l’anhydride d’acide carboxylique |
|--------------------------------|---------------------------------------|
| $H_3C - C - O - C - O - C - H_3$ | Anhydride éthanoïque                 |
| $H_3C - CH_2 - C - O - C - H_3$ | Anhydride propanoïque                |

### Group d’esters
#### Définition
Les esters sont des composés organiques odorants et volatils, que l’on trouve en abondance dans les fruits mûrs (banane, ananas, pomme, …) et qui entrent dans la composition des huiles essentielles, comme celle de lavande. Ils sont utilisés dans la fabrication des parfums ou comme aromatisants dans l’industrie alimentaire.

La molécule d’ester contient le groupement fonctionnel: $-COO - C -$ ou $-C - O -$

La formule générale d’un ester est : 
$$ R - C(=O) - O - R' $$
avec $R$ est un groupe alkyle ou atome d’hydrogène et $R'$ est un groupe alkyle.

#### Nomenclature d’un ester
Le nom d’ester se compose de deux parties :
- La première partie : se déduit de celui de l’acide carboxylique correspondant en remplaçant la terminaison « oique » par la terminaison « oate ».
- La deuxième partie : c’est le nom du groupe alkyle $-R'$ lié à l’atome d’oxygène.

## Exemples
| Ester                               | Nom de l’ester                   |
|-------------------------------------|----------------------------------|
| $H-C(=O) - O - CH_2 - CH_3$         | Méthanoate d’éthyle              |
| $H_3C - CH_2 - C(=O) - O - CH_2 - CH_3$ | Butanoate d’éthyle               |
| $C_6H_5 - C(=O) - O - CH_3$        | Benzoate de méthyle              |
| $H_3C - CH - CH_2 - O - CH_2 - CH - CH_3$ | Propanoate de 2-méthylbutyle     |

ÉLECTRON & 2BAC-PC- SM & Chimie 148
```

<!-- Page 149 -->

```markdown
# Réactions d’estérification et d’hydrolyse

## 1️⃣ Réaction d’estérification
La réaction d’un acide carboxylique avec un alcool conduit à la formation d’ester et d’eau.  
Cette réaction s’appelle: estérification.  
L’équation de la réaction : d’estérification est:  

$$ 
\text{Acide} + \text{Alcool} \rightarrow \text{Ester} + \text{Eau} 
$$

L’estérification est une réaction limitée, lente et endothermique.

## 2️⃣ Réaction d’hydrolyse
L’hydrolyse d’un ester est la réaction inverse de l’estérification. La réaction entre un ester et l’eau conduit à la formation d’un acide carboxylique et d’un alcool.  
L’équation de la réaction : d’hydrolyse est:  

$$ 
\text{Ester} + \text{Eau} \rightarrow \text{Acide} + \text{Alcool} 
$$

L’hydrolyse est une réaction limitée, lente et endothermique.

## 3️⃣ L’état d’équilibre estérification-hydrolyse
- Les réactions d’estérification et d’hydrolyse sont l’inverse l’une de l’autre, elles se produisent simultanément.
- Lorsque leurs vitesses sont égales, l’équilibre est atteint.
- Dans l’état d’équilibre l’acide, l’alcool, l’ester et l’eau coexistent:  

$$ 
\text{Acide} + \text{Alcool} \rightleftharpoons \text{Ester} + \text{Eau} 
$$

- On peut exprimer les constantes d’équilibre associées à ces deux réactions inverses:
  - La constante d’équilibre associée à la réaction d’estérification est: 

$$ 
K = \frac{[\text{Ester}]}{[\text{Eau}][\text{Acide}][\text{Alcool}]} 
$$

  - La constante d’équilibre associée à la réaction d’hydrolyse est: 

$$ 
K' = \frac{[\text{Acide}][\text{Alcool}]}{[\text{Ester}][\text{Eau}]} 
$$

- Dans le cas de l’estérification, l’eau n’est pas un solvant, il faut impérativement la faire apparaître dans l’expression de la constante d’équilibre.  
- La constante d’équilibre associée à une réaction d’estérification ou d’hydrolyse est indépendante de la température.

### 📝 Remarque
Si l’on part d’un mélange équimolaire d’acide carboxylique et de l’alcool ou d’ester et d’eau, à l’état d’équilibre les quatre espèces chimiques coexistent dans des proportions qui n’évoluent plus.
```

<!-- Page 150 -->

```markdown
IV. Contrôle de la réaction d’estérification et d’hydrolyse

① Contrôle de la vitesse de réaction
   - Influence de température

Une élévation de la température permet d'augmenter la vitesse d'une réaction d'estérification (ou d'une réaction d'hydrolyse) sans modifier l'état final de cette réaction.

- Remarque
  Pour synthétiser un ester on utilise le chauffage à reflux qui a pour but:
  - Le chauffage du milieu réactionnel.
  - Éviter de perdre une partie des réactifs et des produits par vaporisations.

   - Influence d’un catalyseur

Un catalyseur permet également d'augmenter la vitesse d'une réaction d'estérification (ou d'une réaction d'hydrolyse) sans modifier l'état final de cette réaction.

- Remarque
  D'autre part, la vitesse de réaction est très élevée lorsque la température est élevée et que le catalyseur est utilisé.

② Contrôle de l’état final, déplacement de l’état d’équilibre

Déplacer l’équilibre c’est faire évoluer le mélange vers un nouvel état d’équilibre où les proportions des constituants sont différentes.

On considère le système chimique suivant : 
$$ \text{Acide} + \text{Alcool} \rightleftharpoons \text{Ester} + \text{Eau} $$

la constante d’équilibre associée à ce système est: 
$$ Q_{r,eq} = K = \frac{[\text{Ester}_{\text{eq}}]}{[\text{Eau}_{\text{eq}}][\text{Alcool}_{\text{eq}}]} $$

L'utilisation de l'un des réactifs en excès (alcool ou l'ester) entraîne la diminution du quotient de la réaction $Q_r < K$, ce qui conduit à l'évolution du système vers le sens Ø (sens de l'estérification). 
L'élimination de l'un des produits (l'eau ou l'ester) entraîne aussi la diminution du quotient de la réaction $Q_r < K$, ce qui conduit à l'évolution du système vers le sens Ø (sens de l'estérification).

③ Rendement d’une réaction d’estérification

Le rendement d’une réaction d’estérification est égal le quotient de la quantité de matière de l’ester obtenu expérimentalement $n_{exp}$ par celle maximale de l’ester attendue $n_{max}$

$$ r = \frac{n_{exp}}{n_{max}} $$

Pour améliorer le rendement d’une réaction d’estérification ou d’hydrolyse il faut :
- Utiliser l'un des réactifs en excès.
- Éliminer l'un des produits lors de sa formation.

V. Préparation d’un ester à partir d’anhydride d’acide et un alcool

① Définition

La synthèse des esters à partir des acides carboxyliques est une réaction lente et limitée, elle devient plus rapide et totale lorsque l’acide carboxylique est remplacé par son anhydride.
$$ \text{RCO} - \text{OH} + \text{R'} - \text{OH} \rightarrow \text{RCO} - \text{O} - \text{R'} + \text{H}_2\text{O} $$
```

<!-- Page 151 -->

```markdown
### Remarque
Cette réaction d’estérification ne produit pas d’eau donc l’hydrolyse de l’ester n’est pas possible. C’est la raison pour laquelle l’avancement final est égal à l’avancement maximal.
- **Exemple** : synthèse de l'acide acétylsalicylique « L’aspirine »
  
  Acide acétylsalicylique est un ester synthétisé à partir de l’acide salicylique et de l’anhydride éthanoïque selon l’équation suivante

  $$
  \text{acide salicylique} + \text{anhydride éthanoïque} \rightarrow \text{aspirine ou acide acétylsalicylique} + \text{acide éthanoïque}
  $$

---

## L'hydrolyse basique

### ① Réaction de saponification d’un ester
La réaction de saponification d’un ester est la réaction entre l’ion hydroxyde $ \text{OH}^- $ (issu des bases $ \text{NaOH} $ ou $ \text{KOH} $) et un ester. Elle donne un alcool et l’ion carboxylate (la base conjuguée de l’acide carboxylique)

$$
\text{R} - \text{C} \ - \text{O} \ \text{R}' + \text{HO}^- \rightarrow \text{R} - \text{C} \ - \text{O} + \text{R}' - \text{OH}
$$

---

### Remarque
L’hydrolyse basique de l’ester ne produit pas d’acide carboxylique donc la réaction d’estérification n’est pas possible. C’est la raison pour laquelle l’avancement final est égal à l’avancement maximal.

### ② Préparation du savon
Pour préparer le savon on mélange de l'huile et de soude mis en solution dans l'éthanol et on ajoute des pierres ponces au mélange (pour régulariser l’ébullition), puis on chauffe à reflux (la figure ①) à une température de $ 120^\circ C $ pendant une demi-heure.

#### Montage du chauffage à reflux

![Montage du chauffage à reflux]

#### Montage de filtration

![Montage de filtration]
```

<!-- Page 152 -->

```markdown
Le savon formé est séparé de l'alcool et de l'excès de soude par relargage dans une solution concentrée de chlorure de sodium, car le savon qui est faiblement soluble dans l'eau salée précipite, ce qui permet de le recueillir par filtration (la figure ℤ ).

3️⃣ Saponification des acides gras  
Les savons sont obtenus par réaction de saponification de triesters appelés corps gras ou triglycérides.

$$ 
\begin{align*}
H_2C & -CO- \,R \\
HC & -CO- \,R \\
H_2C & -CO- \,R \\
\end{align*}
+ 3(Na^+ (aq) + HO^-(aq)) \rightarrow \\
H_2C & -OH + 3RCO_2Na 
$$

### Exemple  
La saponification de l'oléine conduit à la formation de loléate de sodium (un savon ) selon l’équation suivante :

$$ 
\begin{align*}
H_2C & -CO-C_{17}H_{33} \\
HC & -CO-C_{17}H_{33} \\
H_2C & -CO- \,C_{17}H_{33} \\
\end{align*}
+ 3(Na^+(aq) + HO^-(aq)) \rightarrow \\
H_2C & -OH + 3C_{17}H_{33}CO_2Na 
$$

### Remarque  
Les acides gras sont des acides carboxyliques $RCOOH$ ayant des chaînes carbonées longues.  
Exemple: Acide oléique $C_{17}H_{33}COOH$  
La réaction d'un glycérol avec un acide gras conduit à un triester.

$$ 
3RCOOH \rightarrow 3H_2O 
$$

4️⃣ Propriétés du savon  
Le savon est un mélange d’ions carboxylates $RCOO^-$ et d’ions de sodium $Na^+$ ( ou de potassium )dont les radicaux $-R$ sont des dérivés d’acides gras à longues chaînes carbonées (plus de 10 atomes de carbone).  
L'ion carboxylate constituant le savon est constitué de deux parties.  
- Une tête soluble dans l’eau $COO^-$ appelée la partie hydrophile.  
- Une longue chaîne carbonée (la queue), insoluble dans l’eau appelée la partie hydrophobe.

Lorsque l'on prépare de l'eau savonneuse, le savon se solubilise dans l’eau grâce aux propriétés hydrophile du groupe carboxylate. En revanche, les chaînes carbonées sont hydrophobes. Elles s’orientent vers l’air ou les uns vers les autres, d’où l’existence de bulles de savons et la formation d’agrégats appelés micelles.
```

<!-- Page 153 -->

```markdown
Lorsqu’on met des vêtements tachés de graisse dans une eau savonneuse, les queues lipophiles du savon s’orientent vers le corps gras. La graisse est décollée des vêtements et se trouve dans la solution piégée à l’intérieur des micelles.

# Contrôle de l’évolution d’un système chimique par un catalyseur

- Un catalyseur est une espèce chimique qui accélère une réaction chimique sans apparaître dans l’équation bilan de cette réaction.
- Lorsque le catalyseur appartient à la même phase que les réactifs, la catalyse est dite homogène.
- Lorsque le catalyseur n’appartient pas à la même phase que les réactifs, la catalyse est dite hétérogène.
- Lorsque le catalyseur est une enzyme, la catalyse est dite enzymatique.
- L’utilisation de certaines catalyseurs sélectifs peut produire des produits différents.

## Exercice 1
Répondre par vrai ou faux
- L’action d’un acide carboxylique sur un alcool est appelée réaction d’estérification.
- La réaction de l’hydrolyse est une transformation chimique rapide.
- L’hydrolyse basique est une réaction limitée.
- On peut augmenter le rendement de la réaction d’estérification en augmentant la température du mélange.
- L’intérêt du chauffage à reflux est d’accélérer la réaction d’estérification ou de l’hydrolyse.
- Lors de la réalisation d’une réaction d’estérification ou d’hydrolyse, on introduit des pierres ponces pour homogénéiser la température dans le ballon.
- Pour augmenter le rendement de la réaction d’estérification en remplace l’acide carboxylique par son anhydride.
- La réaction d’estérification par un anhydride d’acide carboxylique et un alcool, est une réaction totale.
- La réaction de saponification est une transformation chimique limitée.
- L’eau n’intervient pas dans l’expression de la constante d’équilibre associée à la réaction d’estérification ou dans celle de l’hydrolyse.

## Exercice 2
En utilisant des formules semi-développées, écrire l’équation de la réaction d’estérification dans les deux cas suivants, et donner les noms des réactifs et des produits.
- Réaction entre l’acide propanoïque et l’éthanol.
- Réaction d’estérification qui conduit à la formation de l’éthanate de 2-méthyl butyle.

## Exercice 3
En utilisant des formules semi-développées, écrire l’équation de la réaction d’estérification dans les deux cas suivants, et donner les noms des réactifs et des produits.
- En utilisant des formules semi-développées, écrire l’équation de la réaction d’hydrolyse de butanoate d’éthyle.
- En utilisant des formules semi-développées, écrire l’équation de la réaction d’hydrolyse de propanoate de méthyle.
```

<!-- Page 154 -->

```markdown
## Exercice 4

Pour synthétiser un composé organique $E$, on introduit dans un ballon une masse $m_A = 60g$ de l'acide éthanoïque pure, avec une masse $m_B = 32g$ de méthanol, quelques gouttes de l'acide sulfurique concentré, et des pierres ponces.

On chauffe à reflux le mélange réactionnel pendant un certain temps, et il se produit une masse $m_E = 49,58g$ du composé $E$.

1. Quel est le nom de cette réaction? Et quel est le nom du composé $E$ ?
2. Citer deux caractéristiques de cette réaction.
3. Quel est l'intérêt du chauffage à reflux ?
4. En utilisant les formules brutes, écrire l’équation de la réaction qui se produit dans le ballon.
5. Calculer les quantités de matière initiales des réactifs.
6. Calculer le rendement de cette réaction.
7. Calculer la valeur de la constante d’équilibre associée à la réaction étudiée.
   
   Données :
   - La masse molaire du carbone: $M(C) = 12 \text{ g.mol}^{-1}$
   - La masse molaire d’oxygène: $M(O) = 16 \text{ g.mol}^{-1}$
   - La masse molaire d’hydrogène: $M(H) = 1 \text{ g.mol}^{-1}$

## Exercice 5

On mélange dans un ballon $n(E) = 2 \text{ mol}$ de butanoate d'éthyle noté $E$ pur avec $n(Eau) = 2 \text{ mol}$ d’eau distillée on ajoute au mélange, quelques gouttes de l’acide sulfurique concentré, et on chauffe à reflux le mélange réactionnel pendant un certain temps.

Une réaction chimique se produit entre le composé $E$ et l’eau distillée.
À l’équilibre, il se produit une quantité $n(A) = 0,67 \text{ mol}$ de l’acide carboxylique noté $A$.

1. Quel est le nom de cette réaction ?
2. Citer deux caractéristiques de cette réaction.
3. Quel est l'intérêt de l’ajout de l’acide sulfurique à l’état initial ?
4. En utilisant les formules semi-développées, écrire l’équation de la réaction qui se produit entre le composé $E$ et l’eau distillée. Donner les noms des produits de cette réaction.
5. Dresser le tableau d’avancement associé à cette réaction.
6. Calculer la valeur de la constante d’équilibre associée à la réaction étudiée.
7. Calculer le rendement de cette réaction.
8. Proposer deux méthodes pour augmenter le rendement de cette réaction, en conservant les mêmes réactifs.

## Exercice 6

On chauffe à reflux un mélange contenant une quantité de matière $n(A) = 1 \text{ mol}$ d’un acide carboxylique $(A)$, une quantité de matière $n(B) = 2 \text{ mol}$ d’un alcool $(B)$ et quelques gouttes de l’acide sulfurique concentré.
À la fin de la réaction il se forme une quantité de matière $n(E) = 0,6 \text{ mol}$ d’éthanoate de méthyle.

1. Déterminer la formule semi-développée de l’ester formé ?
2. Écrire l’équation de la réaction d’estérification étudiée. Donner le nom et la formule semi-développée de l’acide carboxylique et de l’alcool utilisés.
3. Dresser le tableau d’avancement associé à cette réaction.
4. Calculer la valeur de la constante d’équilibre associée à la réaction étudiée.
5. Calculer le rendement de cette réaction.
6. On refait la même expérience en utilisant de matière $n’(A) = 1 \text{ mol}$ d’un acide carboxylique $(A)$ et une quantité de matière $n’(B) = 2 \text{ mol}$ d’un alcool $(B)$
   - a – Donner en justifiant la réponse la valeur de la constante d’équilibre associée à la réaction étudiée.
   - b – Calculer la valeur de la constante d’équilibre associée à cette réaction dans les conditions initiales.
   - c – Comparer la valeur de $r$ avec celle de $r$ trouvée dans la question 6. Que peut-on conclure ?

## Exercice 7

Le butanoate d'éthyle est un estérifiant savoureux de banane. Cet ester peut-être synthétisé à partir d'une réaction d'estérification entre un acide $(A)$ carboxylique et un alcool $(B)$ selon l’équation suivante :

$$
A + B \rightleftharpoons CH_3-CH_2-CH_2-C(O)-O-CH_2-CH_3 + H_2O
$$

## ÉLECTRONIQUE & 2BAC-PC-SM & Chimie 154
```

<!-- Page 155 -->

```markdown
Pour atteindre cet objectif on introduit dans le ballon du montage de la figure ci-contre, un volume $V_A = 45,7 \, \text{mL}$ de l’acide carboxylique (A) et un volume un volume $V_B = 29,2 \, \text{mL}$ de l’alcool (B) pur et quelques gouttes de l’acide sulfurique concentré. 

1. Donner le nom et la formule semi-développée de l’acide carboxylique et de l’alcool utilisé lors de cette estérification.
2. La figure ci-contre donne le montage expérimental utilisé lors du synthèse du butanoate d’éthyle.
   - a - Les noms des éléments de ce montage.
   - b - Quel est le rôle de l’élément (⊗) de ce montage.
   - c - Préciser l’utilité de ce montage.
3. Vérifier que le mélange utilisé est équimolaire.
4. Construire le tableau d’avancement associé à cette réaction.
5. Trouver l’expression de la constante d’équilibre $K$ associée à cette réaction en fonction son avancement à l’état d’équilibre $x_{eq}$.
6. Calculer la valeur de $x_{eq}$ et déduire le rendement de cette réaction.

Données

| Composé organique  | Acide carboxylique (A) | Alcool (B)  |
|---------------------|---------------------|-------------|
| Masse molaire en g.mol$^{-1}$ | 88 | 46 |
| Masse volumique en g.mL$^{-1}$ | 0,964 | 0,790 |
| La constante d’équilibre associée à la réaction d’estérification étudiée: $K \approx 4$ |

Exercice 8

Pour étudier l'influence de la température sur la vitesse d’une réaction d’estérification on réalise un mélange de volume $V = 44\, \text{mL}$, en apportant une quantité de matière $n' = n$ du méthanol $CH_3OH$ et quelques gouttes de l’acide sulfurique concentré.
- On divise ce mélange en deux volumes égaux $V_1 = V_2 = 22\, \text{mL}$.
- On introduit le volume $V_1$ dans un ballon (B1) et on le chauffe à reflux à une température constante: $T_1 = 40\, ^\circ C$.
- On introduit le volume $V_2$ dans un ballon (B2) et on le chauffe à reflux à une température constante: $T_2 = 80\, ^\circ C$.

Le suivi temporel de cette estérification a permis de tracer la courbe représentant l'évolution de la quantité de matière de l'ester formé en fonction du temps pour chacune des deux températures: la figure ①
- $(C_1)$ est la courbe associée à la température $T_1 = 40\, ^\circ C$ et $(D_1)$ sa tangente à $t_0 = 0$.
- $(C_2)$ est la courbe associée à la température $T_2 = 80\, ^\circ C$ et $(D_2)$ sa tangente à $t_0 = 0$.
```


<!-- Page 156 -->

```markdown
## Écrire l'équation de la réaction étudiée, en donnant le nom de l'ester formé.
1. Dresser le tableau d’avancement associé à cette réaction.
2. En expliquant la figure (0) déterminer pour chacune des deux températures:
   - a – L'avancement de la réaction à l'état d'équilibre et le temps de demi-réaction
   - b – La vitesse volumique de la réaction à la date $t_0 = 0$
   - c – Le rendement de la redémission de la réaction
3. En se basant sur les résultats de la question précédente, déduire l’effet de la température sur la réaction d'estérification.
4. Trouver l'expression de la constante d'équilibre $K$ associée à cette réaction en fonction son avancement à l'état d'équilibre $x_{eq}$ puis calculer sa valeur.

## Exercise 9
On chauffe à reflux un ballon contenant une masse $m_1 = 12 g$ d’un alcool (B) et une masse $m_2 = 20.4 g$ d’un composé organique (A) et quelque goutte de l'acide sulfurique concentré. Au cours du temps il se forme une masse $m_3 = 20.3 g$ d’éthanate de propyle et une quantité de l’acide éthanique.

### Compléter le tableau ci-dessous.
| Composé organique | Propan-1-ol | Composé (A) | Ester                  |
|--------------------|-------------|-------------|------------------------|
| Famille            |             |             | Éthanoate de propyle   |
| Formule semi-développée |        |             |                        |
| Formule brute      |             |             |                        |
| Groupe fonctionnel |             |             |                        |

### 1. Calculer les quantités de matière des réactifs à l’état initial.
### 2. En utilisant les formules semi-développée des composés organiques, écrire l’équation la réaction étudiée.
### 3. Calculer le rendement de cette réaction et déduire ses caractéristiques.
- La masse molaire du carbone: $M(C) = 12 \, \text{g.mol}^{-1}$
- La masse molaire d'oxygène: $M(O) = 16 \, \text{g.mol}^{-1}$
- La masse molaire d'hydrogène: $M(H) = 1 \, \text{g.mol}^{-1}$

## Exercise 10
Pour étudier l’influence de la classe de l’alcool sur le rendement d’une réaction d’estérification, on réalise les deux manipulations suivantes:
1. **Manipulation-I :** réaction entre un acide carboxylique et un alcool primaire
   On chauffe à reflux à une température constante $T = 80^{\circ}C$ un ballon contenant une quantité $n_i(A) = 0.4 \, \text{mol}$ de l’acide méthanoïque et une quantité $n_i(B) = 0.4 \, \text{mol}$ du propan-1-ol (alcool primaire). 
   On donne l'acide méthanoïque restant à la fin de l'estérification et on trouve $n_f(A) = 0.133 \, \text{mol}$.
   - a – Quel est le nom de l’ester formé ?
   - b – Dresser le tableau d'avancement des composés organiques, écrire l’équation la réaction étudiée.
   - c – Calculer le rendement de cette réaction et déduire les caractéristiques.
```

<!-- Page 157 -->

```markdown
### Manipulation-II : réaction entre un acide carboxylique et un alcool secondaire

On chauffe à reflux à une température constante $T = 80^\circ C$ un ballon contenant une quantité $n_{A} = 0,4 \text{mol}$ de l’acide méthanoïque et une quantité $n_{C} = 0,4 \text{mol}$ du propan-2-ol (alcool secondaire)

a - Quel est le nom de l’ester formé?  
b - En utilisant les formules brutes des composés organiques, écrire l’équation la réaction étudiée.  
c - Dresser le tableau d’avancement de la réaction étendue.  
d - Calculer le rendement de cette réaction.  
e - Calculer la valeur de la constante d’équilibre associée à cette réaction.  

Comparar la valeur du rendement trouvée dans la question ( ∘ ) avec celle trouvée dans la question ( ⊕ ). La calasse de l’alcool affecte-t-il le rendement de la réaction d’estérification?

### Exercice 11

Pour synthétiser un ester $E$, on mélange dans un ballon, une quantité de matière $n(A) = 0,7 \text{mol}$ d’acide éthanoïque $CH_{3}COOH$ et une quantité de matière $n(B) = 0,4 \text{mol}$ d’alcool benzylique $C_{6}H_{5} - CH_{2} - OH$.

On ajoute au mélange des pierres ponces et quelques gouttes de l’acide sulfurique concentré, puis on le chauffe à reflux. À la fin de cette estérification il se forme une masse $m(E) = 48 \text{g}$ de l’ester $E$

**Données :**
- La masse molaire du carbone : $M(C) = 12 \text{g.mol}^{-1}$
- La masse molaire d’oxygène : $M(O) = 16 \text{g.mol}^{-1}$
- La masse molaire d’hydrogène : $M(H) = 1 \text{g.mol}^{-1}$

1. Quel est le rôle de l’acide sulfurique et du chauffage à reflux dans cette réaction?  
2. Écrire l’équation de cette estérification.  
3. Dresser le tableau d’avancement de réaction.  
4. Calculer la quantité de matières de l’ester à l’état final. Dédire la valeur de $x_{eq}$.  
5. Exprimer la constante $K_{eq}$ associée à cette réaction en fonction de $x_{eq}$, puis calculer sa valeur.  
6. Calculer le rendement de cette réaction.  
7. Quels sont les moyens permettant d’améliorer le rendement de cette réaction?

Le tableau ci-dessous donne les températures d’ébullition de quelques composés organiques  
a - En exploitant ce tableau, proposer une méthode qui permet d’améliorer le rendement de cette réaction.  
b - Parmi les trois montages ci-dessous lequel pouvant utiliser pour d’améliorer le rendement de cette réaction.

| Composé organique | Acide éthanoïque (A) | Ester (E) | Alcool benzylique (B) |
|-------------------|---------------------|-----------|----------------------|
| Température d’ébullition | $118^\circ C$        | $215^\circ C$ | $205^\circ C$        |
```

<!-- Page 158 -->

```markdown
### Exercice 12
Pour étudier l'influence des quantités de matières initiales des réactifs sur le rendement d'une réaction d'estérification, on prépare, dans deux ballons, deux mélanges de l'acide éthanoïque et de l'éthanol:
- Dans le ballon (1): On introduit une quantité de $n_{01}(A) = 1 \text{ mol}$ de l'acide éthanoïque et une quantité $n_{01}(B) = 1 \text{ mol}$ de l'éthanol et quelques gouttes de l'acide sulfurique concentré.
- Dans le ballon (2): On introduit une quantité de $n_{02}(A) = 1 \text{ mol}$ de l'acide éthanoïque et une quantité $n_{02}(B) = 2 \text{ mol}$ de l'éthanol et quelques gouttes de l'acide sulfurique concentré.

À un instant $t = 0$, on chauffe les deux ballons à une température constante. Le suivi temporel de ces deux transformations a permis de tracer les courbes donnant les variations la quantité de matière de l'acide éthanoïque en fonction du temps dans les deux ballons.

1. Écrire l'équation de la réaction étudiée, en donnant le nom de l'ester formé.
2. Dresser le tableau d'avancement associé à cette réaction.
3. En exploitant la figure (1) déterminer pour chacune des deux ballons:
   - $a$ - L’avancement de la réaction à l’état d’équilibre.
   - $b$ - Le temps de demi-réaction.
   - $c$ - Le rendement de la rédaction de la réaction.
   - $d$ - La valeur de la constante d’équilibre.
4. En se basant sur les résultats de la question précédente, déduire l’effet des quantités de matières initiales sur la réaction d’estérification.

### Exercice 13
1. En utilisant les formules semi-développées, écrire l'équation de la réaction d'estérification totale dans les cas suivants, et donner les noms des réactifs et des produits.
   - a - Réaction d’estérification d’anhydride propanoïque avec le propan-1-ol
   - b - Réaction d’estérification d’anhydride méthanoïque avec l’éthanol
2. En utilisant des formules semi-développées, écrire l'équation de la réaction d'hydrolyse basique dans les cas suivants, et donner les noms des réactifs et des produits.
   - a - Réaction d’hydrolyse basique de méthanoate d’éthyle.
   - b - Réaction d’hydrolyse basique de propanoate de 3-méthyle.

### Exercice 14
L'huile d'olive est un corps gras constituant majoritaire de l'huile d'olive, c'est un triglycéride qui peut être obtenu par la réaction du glycérol avec l'acide oléique.
Pour préparer le savon, on mélange dans une fiole une masse $m_0 = 10 \text{ g}$ d’huile d’olive, et un volume $V = 20 \text{ mL}$ d’une solution d’hydroxyde de sodium de concentration $C = 10 \text{ ,5 m mol} \cdot \text{L}^{-1}$ et un volume $V' = 10 \text{ mL}$ de l’éthanol et des pierres ponces. On chauffe le mélange réactionnel pendant une demi-heure puis on le verse dans une solution saturée de chlorure de sodium. Après une agitation et refroidissement du mélange, on sèche le solide obtenu puis on le pèse et on obtient une masse $m = 8 \text{ g}$.

1. Expliquer pourquoi on reverse le mélange dans une solution de chlorure de sodium.
2. Écrire l'équation de la réaction du glycérol avec l'acide oléique, en précisant la formule de l'oléine.
3. Écrire l'équation de saponification de l'oléine, en déterminant la formule semi-développée du savon.
4. On suppose que l'huile d'olive n’est constituée que d’oléine. Montrer que l’expression du rendement de la réaction de saponification s’écrit sous la forme: 
   $$ r = \frac{m_{mol}}{3 m_{S_a}}$$
   (Calculer l’hydroxyde de sodium et ses excès)

#### Données
- Formule semi-développée du glycérol : $ \text{C}_3\text{H}_8\text{O}_3 \rightarrow \text{CHOH - CHOH - CH}_2\text{OH} $
- Formule semi-développée de l'acide oléique : $ \text{C}_{17}\text{H}_{33} \text{COOH} $
- Masse molaire d’oléine : $ M_{ol} = 884 \text{ g.mol}^{-1} $
- Masse molaire du savon : $ M_{S_a} = 304 \text{ g.mol}^{-1} $
```

<!-- Page 159 -->

```markdown
# Exercice 15

Pour suivre l’évolution temporelle d’une réaction d’hydrolyse, on prépare 8 tubes à essais, chacun contenant une masse $m = 4,37 \times 10^{-1} \, g$ de méthanoate d’éthyle et un volume $V = 10 \, mL$ de l’eau distillée.  
À un instant $t_0 = 0$ on introduit les tubes à essais dans un bain marie de température $T = 40°C$.  
Tous les $10 \, minutes$, on place un tube dans l’eau glacée, puis on titre l’acide carboxylique formé par une solution d’hydroxyde de sodium. Les résultats obtenus ont permis de tracer la courbe de la figure 0 qui représente les variations de la quantité de matière de l’acide carboxylique formé en fonction du temps.

1. En utilisant des formules semi-développées, écrire l’équation de la réaction étudiée et donner les noms des produits.  
2. Calculer les quantités de matière initiales des réactifs.  
3. Dresser le tableau d’avancement associé à cette réaction.  
4. En exploitant la courbe ci-contre déterminer:  
   a. L’avancement maximal de cette réaction.  
   b. Le temps de demi-réaction.  
   c. La vitesse volumique de la réaction à la date $t_1 = 60 \, min$. On donne le volume total du mélange du tube à essai $V_m = 10,48 \, mL$.  
5. Calculer la constante d’équilibre de cette réaction.  
   - La masse molaire du carbone: $M(C) = 12 \, g \cdot mol^{-1}$  
   - La masse molaire d’oxygène: $M(O) = 16 \, g \cdot mol^{-1}$  
   - La masse molaire d’hydrogène: $M(H) = 1 \, g \cdot mol^{-1}$  
   - La masse volumique de l’eau: $\rho = 1 \, g \cdot mL^{-1}$  

# Exercice 16

Le palmitate de glycéryle, est un triester dont la formule semi-développée est donnée ci-contre:  
- Le palmitate de glycéryle est utilisé pour synthétiser un savon appelé le palmitate de sodique.  

On chauffe à reflux un mélange contenant une masse $m = 380 \, g$ de palmitate de glycéryle et d’hydroxyde de potassium $(K^+_{aq} + HO^−_{aq})$ en excès.

En utilisant des formules semi-développées, écrire l’équation de la réaction de saponification étudiée et donner les noms des produits.  
1. Calculer la quantité de matière initiale de glycéryle.  
2. Dresser le tableau d’avancement associé à cette réaction.  
3. Calculer la masse produite au savon, sachant que le rendement de cette synthèse est de 90%.

**Données :**  
- La masse molaire du palmitate de glycéryle : $M = 807, 39 \, g \cdot mol^{-1}$  
- La masse du palmitate de potassium : $M' = 294, 5 \, g \cdot mol^{-1}$
```

<!-- Page 160 -->

```markdown
# Exercice 17
On chauffe à reflux pendant 40 min, un mélange contenant une masse m = 10,2 g d’un ester E et d’hydroxyde de sodium \( NaOH_{\text{aq}} + H_2O_{\text{aq}} \) en excès. Lors de cette réaction il se forme l’éthanol \( C_2H_5OH \) et les ions propanoate \( C_2H_5COO^- \).

À la fin de cette réaction on obtient une masse \( m' = 4,2 \, \text{g} \) d’éthanol.
1. Quel est le nom de cette réaction ? Et quel est le nom de l’ester E ?
2. Quelles sont les caractéristiques de cette réaction ?
3. Écrire l’équation de cette réaction.
4. Trouver l’expression du rendement de cette réaction en fonction de \( m, m', M \) et \( M' \), puis calculer sa valeur.

**Données :**
- La masse molaire de l’ester : \( M = 102 \, \text{g.mol}^{-1} \)
- La masse l’éthanol : \( M' = 46 \, \text{g.mol}^{-1} \)

# Exercice 18
L’éthanate de propyle est un ester, qu’on note E, caractérisé par son odeur de poire. Il est utilisé dans l’industrie de la parfumerie, des arômes, des peintures, des lubrifiants,…

On réalise, à un instant \( t = 0 \), deux mélanges équimolaires de l’ester E et d’une solution aqueuse d’hydroxyde de sodium. Chaque mélange est constitué d’un volume \( V_E \) d’une solution de l’ester de concentration \( C_E = 10^{-2} \, \text{mol.L}^{-1} \) et en volume \( V_B = V_E \) d’une solution aqueuse d’hydroxyde de sodium de même concentration.

Dans ces conditions expérimentales déterminées, chaque mélange est le siège d’une réaction modélisée par l’équation chimique suivante :
$$ E_{\text{aq}} + HO^-(\text{aq}) \rightleftharpoons CH_3COO^-(\text{aq}) + A(l) $$

Pour l’un des mélanges, l’expérience est réalisée à une température \( \theta_1 \), et pour l’autre expérience est réalisée à une température \( \theta_2 \) tel que \( \theta_2 > \theta_1 \).

1. Déterminer la formule semi-développée de l’ester E.
2. Déterminer le nom et la formule semi-développée du composé organique A(l).
3. Quel est le nom de la réaction étudiée ? Et quelles sont ses caractéristiques ?

**Les courbes (C) et (C') de la figure (1) représentent l’évolution temporelle de la concentration \( [CH_3COO^-(\text{aq})] \)** 
à la température \( \theta_1 \) et à la température \( \theta_2 \):

- a) Déterminer le temps de demi-réaction pour chacune des courbes (C) et (C'). Déduire la courbe correspondant à la température \( \theta_2 \).
- b) La droite (D) est la tangente à la courbe (C) à la date \( t_0 = 0 \). Calculer en \( \text{mmol.L}^{-1}.\text{min}^{-1} \) la valeur de la vitesse volumique de la réaction à l’instant \( t_0 = 0 \) correspondant à la courbe (C).

![Graph](attachment://graph.png)
```


<!-- Page 161 -->

# Correction

## Exercice 1
- Répondre par vrai ou faux
  - L’action d’un acide carboxylique sur un alcool est appelée réaction d’estérification: **vrai**
  - La réaction d’hydrolyse est une transformation chimique rapide: **faux**
  - L’hydrolyse basique est une réaction limitée: **faux**
  - On peut augmenter le rendement de la réaction d’estérification en augmentant la température du mélange: **faux**
  - L’intérêt du chauffage à reflux est d’accélérer la réaction d’estérification ou de l’hydrolyse: **vrai**
  - Lors de la réalisation d'une réaction d’estérification ou d’hydrolyse, on introduit des pierres ponces pour homogénéiser la température dans le ballon: **vrai**
  - Pour augmenter le rendement de la réaction d’estérification en remplaçant l’acide carboxylique par son anhydride: **vrai**
  - La réaction d’estérification par un anhydride d’acide carboxylique et un alcool, est une réaction totale: **vrai**
  - La réaction de saponification est une transformation chimique limitée: **faux**
  - L’eau n’intervient pas dans l’expression de la constante d’équilibre associée à la réaction d’estérification ou dans celle de l’hydrolyse: **faux**

## Exercice 2
1. L’équation de la réaction entre l’acide propanoïque et l’éthanol.
   $$
   \text{Acide propanoïque} + \text{Éthanol} \rightleftharpoons \text{Propanoïque d’éthyle} + H_2O
   $$
   
2. L’équation de la réaction d’estérification qui conduit à la formation d’éthanoate de 2-méthylbutyle.
   $$
   \text{Acide éthanoïque} + \text{2-méthylbutan-1-ol} \rightleftharpoons \text{Éthanoate de 2-méthylbutyle} + H_2O
   $$

## Exercice 3
1. L’écrire l’équation de la réaction d’hydrolyse de butanoate d’éthyle.
   $$
   \text{Butanoate d’éthyle} + H_2O \rightleftharpoons \text{Butanol} + \text{Acide butanoïque}
   $$

2. L’écrire l’équation de la réaction d’hydrolyse de propanoate de méthyle.
   $$
   \text{Propanoate de méthyle} \rightleftharpoons \text{Méthanol} + \text{Acide propanoïque}
   $$

- Cette réaction est appelée estérification, et le composé $E$ s’appelle ester.
- Cette réaction est lente et limitée.
- Le chauffage à reflux permet de réaliser la réaction chimique à une température élevée, en évitant la perte des composants du mélange.

<!-- Page 162 -->

```markdown
# L’équation de la réaction d’estérification étudiée:

$$
CH_3 - OH + CH_3 - C^{\prime}O \rightleftharpoons CH_3 - C^{\prime}O + H_2O
$$

## Calculons les quantités de matière des réactifs à l’état initial :
- Donc : $ n_0(A) = \frac{m_A}{M(A)} = \frac{12 \times 2 + 16 \times 2 + 1 \times 4}{60} \, g.mol^{-1}$
- Donc $ n_0(A) = 1 \, mol$

- Calculons $n_0(B)$ :
$$
n_0(B) = \frac{m_B}{M(B)} = \frac{12 + 16 + 1 \times 4}{32} \, g.mol^{-1}
$$
- Donc : $ n_0(B) = 1 \, mol$

## Calculons le rendement de cette réaction :
- On a : $ r = \frac{n_{exp}}{n_{rep}}$
- Donc : $ r = \frac{n_{th}}{n_{e}}$ avec $ n_e = \frac{m_E}{M(E)}$
- Alors : $ r = \frac{n_{th}}{n_0(A)}$ avec : $ M(E) = 12 \times 3 + 16 \times 2 + 1 \times 4 = 74 \, g.mol^{-1}$

- On trouve : $ r = \frac{49,58}{74} = 0,67 = 67 \%$

## Calculons la valeur de la constante d’équilibre associée à cette réaction :
- On a : $ K = \frac{[H_2O]_{eq}}{[Ester]_{eq}}$
- Avec $[H_2O] = [Ester]_{eq}$

- Donc : 
$$
K = \frac{n_{eq}^2}{n_{A(eq)} \times n_{B(eq)}}
$$
- Alors : $ K = \frac{n_{0}(A) - x_{eq}}{n(B) - x_{eq}}$
- D'où: 
$$
K = \frac{n_{0}(A) - x_{eq}}{(n_{0}(A) - n_{B}) - n_e}
$$
- A.N.: $ K = 4,12$

---

# Exercice 5
- Cette réaction est appelée hydrolyse d’un ester.
- Cette réaction est lente et limitée.
- L’acide sulfurique joue le rôle d’un catalyseur.
- L’équation de la réaction d’hydrolyse est :

$$
CH_3 - CH_2 - CH_2 - C^{\prime}O + H_2O \rightleftharpoons CH_3 - CH_2 - CH_2 - C^{\prime}O + CH_3 - CH_2 - OH
$$
- **Acide butanoïque** Éthanol

## Le tableau d’avancement associé à cette réaction :

| Équation bilan             | Ester  |  H2O  |  Acide  |  Alcool  |
|---------------------------|--------|-------|---------|----------|
| État                      | Avancement | Quantité de matière en (mol) |
| Initial                   | 0              | 2            | 0            | 0            |
| Avancement                | x              | 2 - x       | x            | x            |
| Final                     | $x_{eq}$       | 2 - $x_{eq}$ | $x_{eq}$    | $x_{eq}$    |

## Calculons la valeur de la constante d’équilibre :
- On a : $ k = \frac{[Acide]_{eq}}{[Alcool]_{eq}} = \frac{x_{eq}}{V}$
- Et : $ [Ester]_{eq} = \frac{[H_2O]_{eq}}{2-x_{eq}}$
```

<!-- Page 163 -->

```markdown
Donc : $k = \frac{x_{eq}/V^2}{\frac{2-x_{eq}}{v}}$ avec : $x_{eq} = n(A)$  
Alors : $k = \frac{n(A)}{(2-n(A))^2}$. A.N.: $k = \frac{(0.67)^2}{(2-0.67)^2} = 0,25$

Calculons le rendement de cette réaction :  
On a : $r = \frac{n_{exp}}{n_{th}}$ avec : $n_{eq} = n(A)$ et $n_{th} = 2 \text{ mol}$. A.N. : $r = \frac{0.67}{2} = 0.33 \Rightarrow 33 \%$  
Afin d'augmenter le rendement de cette réaction, on peut :  
1. Ajouter un réactif en excès.  
2. Éliminer un produit au cours de la réaction.

### Exercice 6
La formule semi-développée de l'ester :  
L'équation de la réaction d'estérification étudiée :  
$$ CH_3 - C^{O} - OH + CH_3 - CH_{2} - C^{O} - C_{H_3} \rightleftharpoons CH_3 - C^{O} - CH_3 + H_2O $$  
Acide éthanoïque 2-méthylpropan-1-ol

Le tableau d'avancement associé à cette réaction :  
$$ \text{Équation bilan} \quad A + B \rightleftharpoons \text{Ester} + H_2O $$  
| État   | Avancement | Quantité de matière en (mol) |
|--------|------------|-------------------------------|
| Initial| 0          | 1                             |
| Avancement | $x$     | $1-x$                        |
| Final  | $x_{eq}$  | 1                             |

$$ \text{On a : } k = \frac{[Ester]_{eq}[H_2O]_{eq}}{[A]_{eq}[B]_{eq}} $$  
D'après le tableau d'avancement, on a : $[Ester]_{eq} = [H_2O]_{eq} = \frac{x_{eq}}{v}$ et $[A]_{eq} = \frac{1-x_{eq}}{v}$  
Donc : $k = \frac{(\frac{x_{eq}}{v})^2}{(\frac{1-x_{eq}}{v})^2}$  
Alors : $k = \frac{n^2_{eq}}{(1-n_{eq})^2}$  
A.N.: $k = \frac{(0.6)^2}{(1-0.6)^2} = 2,25$

Calculons le rendement de cette réaction :  
On a : $r = \frac{n_{exp}}{n(E)}$ avec $n_{th} = n(A)$  
Donc : $r = \frac{n_{exp}}{n(A)} = 0,6 \Rightarrow 60 \%$

a - La constante d'équilibre de la réaction d'estérification ne dépend pas des quantités de matière initiales des réactifs, alors $k' = k = 2,25$  
b - Calculons la valeur de l'avancement final de cette réaction :  
$$ k' = k' = \frac{x^2_{eq}}{(1-x_{eq})^2} $$  
Ainsi :  
$$ 2,25 = \frac{x^2_{eq}}{(1-x_{eq})^2} $$  
$$ 2,25(1 - x_{eq})^2 = x^2_{eq} $$  
$$ 2,25(1 - 2x_{eq} + x^2_{eq}) = x^2_{eq} $$  
$$ 2,25 - 4,50x_{eq} = 0 $$  
$$ x_{eq} = \frac{2,25}{4,50} = 0,5 $$  

Finalement, $x_{eq} = 6,75 - 4,50 \times 1,25 = 23,06$.
```

<!-- Page 164 -->

```
Puisque $ \Delta > 0 $, cette équation admet deux solutions qui sont : 
$$
\left\{
\begin{array}{l}
x_{eq1} = \frac{6.75 - \sqrt{23.06}}{2 \times 1.25} \approx 0,76 \, mol \\
x_{eq2} = \frac{6.75 + \sqrt{23.06}}{2 \times 1.25} \approx 4,62 \, mol
\end{array}
\right.
$$
Et puisque $ x_{max} = n' (A) = 1 \, mol $  
Donc la solution convenable est $ x_{eq} = 0,76 \, mol (x_{eq} \leq x_{max}) $  
c – Calculons la nouvelle valeur du rendement :  
$$
a : r' = \frac{n_{eq}'_{rep}}{n'_{A}} = \frac{x_{eq}}{n'_{A}} = \frac{0,76}{1} = 0,76 = 76 \, \% 
$$  
d – On a : $ r' = 76 \, \% et \, r = 60 \, \% \Rightarrow r' > r $  
On déduit que l'utilisation d’un réactif en excès par rapport à l’autre est une méthode qui permet d'augmenter le rendement d'une réaction d'estérification.

### Exercise 7

1. Identification des réactifs  
   - L’acide carboxylique ($A$) est l’acide butanoïque, sa formule semi-développée est : 
   $$ \text{CH}_{3}\text{-CH}_{2}\text{-C(=O)-OH} $$
   - L'alcool ($B$) est l’éthanol, sa formule semi-développée est : 
   $$ \text{CH}_{3}\text{-CH}_{2}\text{-OH} $$

a – Les noms des éléments du montage : (1) : Ballon, (2) : Réfrigérant, (3) : Chauffe-ballon, (4) : Entrée de l’eau, (5) : Sortie de l’eau, (6) : Support  

b – Le réfrigérant condense les vapeurs produites par l'ébullition du mélange réactionnel et les ramène sous forme liquide dans le ballon.  

c – Le montage du chauffage à reflux permet de réaliser la réaction chimique à une température élevée, en évitant les pertes des composants du mélange.  

2. Vérifions que le mélange est équimolaire :  
- Calculons $ n_0(A) $ :  
$$
On \, a : n_0(A) = \frac{m_{A}}{M_{A}} \, avec \, m_{A} = \rho (A) \cdot V_{A} 
$$
Donc : 
$$
n_0(A) = \frac{(\rho(A) \cdot V_{A})}{M_{A}} = \frac{(45,7 \times 0,964)}{88,1} \approx 0,5 \, mol
$$

- Calculons $ n_0(B) $ :  
$$
On \, a : n_0(B) = \frac{m_{B}}{M_{B}} \, avec \, m_{B} = \rho(B) \cdot V_{B} 
$$  
Donc : 
$$
n_0(B) = \frac{\rho(B) \cdot V_{B}}{M_{B}} = \frac{M(B)}{\rho(B) \cdot V} = \frac{0,790 \times 29,2}{46,1} \approx 0,5 \, mol 
$$  
Puisque $ n_0(A) = n_0(B) $, le mélange est équimolaire.

3. Le tableau d'avancement  

| Équation bilan | $A$ + $B$ ⇌ Ester + $H_2O$ |
|----------------|------------------------------|
| État           | Avancement                   | Quantité de matière en (mol) |
| Initial        | 0                            | 0,5    | 0,5     | 0   | 0  |
| Avancement     | $x$                          | 0,5 - $x$ | 0,5 - $x$ | $x$ | $x$ |
| Final          | $x_{eq}$                     | 0,5 - $x_{eq}$ | 0,5 - $x_{eq}$ | $x_{eq}$ | $x_{eq}$ |

4. L’expression de la constante d’équilibre  
On a : 
$$ K = \frac{[Ester]_{eq} \cdot [H_2O]_{eq}}{[A]_{eq} \cdot [B]_{eq}} $$  
D’après le tableau d’avancement, on a : 
$$ [Ester]_{eq} = \frac{x_{eq}}{V} , \quad [H_2O]_{eq} = \frac{x_{eq}}{V} \, et \, [A]_{eq} = \frac{0,5 - x_{eq}}{V} $$  
Alors : 
$$ K = \frac{\left( \frac{x_{eq}}{(0,5 - x_{eq})} \right)^2}{\left( \frac{(0,5 - x_{eq})}{V} \right)} $$
donc : 
$$ K = \frac{x_{eq}^2}{(0,5 - x_{eq})^2} $$  
```

<!-- Page 165 -->

```markdown
### 1. Calculons la valeur de $x_{eq}$
On a : $K = \frac{x_{eq}^2}{(0.5 - x_{eq})^2} \implies \sqrt{K} = \frac{x_{eq}}{0.5 - x_{eq}}$

$$\sqrt{K(0.5 - x_{eq})} = x_{eq} \text{ avec } K = 4$$
$\implies \sqrt{(0.5 - x_{eq})} = x_{eq}$
$2(0.5 - x_{eq}) = x_{eq}$
$1 - 2x_{eq} = x_{eq}$
$1 = 3x_{eq}$
$\implies x_{eq} \approx 0.33 \text{ mol}$

### 2. Calculons le rendement de cette réaction
On a : $r = \frac{n_{exp}}{n_{th}} = \frac{x_{eq} et \, n_{0}(A)}{n_{0}(A)}$

Alors : $r = \frac{0.33}{0.5} = 66\%$

---

### Exercice 8
#### 1. L'équation de la réaction d’estérification étudiée
L’ester formé est l’éthanoate de méthyle.

$$\text{ } \text{ } CH_3 - C^0 - OH \, \rightleftharpoons \, CH_3 - C^{0} - O - CH_3 + H_2O$$

#### 2. Le tableau d'avancement associé à cette réaction

| Équation bilan | Acide                           | Alcool          | Ester        | H2O        |
|----------------|----------------------------------|-----------------|--------------|------------|
| État           | Initial $0$                     | $0.45$          | $0$          | $0$        |
| Avancement     | $x$                             | $0.45 - x$      | $0.45 - x$   | $x$       |
| Final          | $x_{eq}$                        | $0.45 - x_{eq}$ | $x_{eq}$     | $x_{eq}$  |

---

#### a. Déterminons l’avancement final et le temps de demi-réaction pour chacune des deux températures:
- Pour la température $T_1$, on trouve $x_{eq1} = 0.3 \, mol$ et $t_{1/2} = 1.5 \, h$ 
- Pour la température $T_2$, on trouve $x_{eq2} = 0.3 \, mol$ et $t_{1/2} = 0.35 \, h$

#### b. Calculons la valeur $v_0$ :
On a : $v = \frac{1}{v} \frac{dx}{dt} |_{t_0}$

À $t_0$ on trouve : $v_0 = \frac{1}{V} \frac{dx}{dt} |_{t_0}$

- Pour la température $T_1$, on a $v_{01} = \frac{1}{22 \times 10^{-3}} \times \frac{0.16-0}{1-0} = 7.27 \, mol.L^{-1}.h^{-1}$
- Pour la température $T_2$, on a $v_{02} = \frac{1}{22 \times 10^{-3}} \times \frac{0.3-0}{1-0} = 13.64 \, mol.L^{-1}.h^{-1}$

#### c. Calculons le rendement de cette réaction :
On a : $r = \frac{n_{exp}}{n_{th}}$ avec $n_{exp} = x_{eq} et \, n_{th} = n$

Donc : $r = \frac{n_{exp}}{n_{eq}}$

Et puisque $x_{eq1} = x_{eq2},$ alors $r_1 = r_2 = \frac{0.3}{0.45} = 0.67$

On déduit que :
- Plus la température s’élève, plus la réaction est rapide.
- La température n’a pas d’effet sur l’état final de la réaction ni sur son rendement.

---

### 3. Calculons la constante d'équilibre de cette réaction
On a : $K = \frac{[Ester]_{eq} [H_2O]_{eq}}{[Alcool]_{eq} [Acide]_{eq}}$

D’après le tableau d’avancement, on a :
$$K = \frac{\frac{x_{eq}}{V} \, \frac{x_{eq}}{V}}{\frac{0.45 - x_{eq}}{V} \, \frac{0.45 - x_{eq}}{V}}$$

Alors : 
$$K = \frac{(0.33)^2}{(0.45 - 0.33)^2} = 4$$

---

**ELECTRON & 2BAC-PC SM & Chimie 165**
```

<!-- Page 166 -->

```markdown
# Exercice 9

1. Voir le tableau ci-dessous.

| Composé organique | Alcool (B)        | Composé (A)                    | Ester                |
|-------------------|------------------|--------------------------------|----------------------|
| Nom               | Propan-1-ol      | Anhydride d’éthanoïque        | Éthanoate de propyle  |
| Formule semi- développée | $C_{3}H_{7}OH$ | $C_{4}H_{6}O_{3}$              | $C_{5}H_{10}O_{2}$    |
| Formule brute     | $C_{3}H_{8}O$    | $C_{4}H_{6}O_{3}$              | $C_{5}H_{10}O_{2}$    |
| Groupe fonctionnel | -OH              | -C(=O) - O-                    | -C(=O) -O-           |

2. Calculons les quantités de matière des réactifs à l'état initial :
   - Calculons $n_{1}$ :
     On a : 
     $$ n_{1} = \frac{m_{1}}{M_{1}} \quad avec \quad M_{1} = 12 \times 3 + 16 + 1 \times 8 = 60 \, g \cdot mol^{-1} $$
     Alors : 
     $$ n_{1} = \frac{12}{60} = 0,2 \, mol $$
   - Calculons $n_{2}$ :
     On a : 
     $$ n_{2} = \frac{m_{2}}{M_{2}} \quad avec \quad M_{2} = 4 \times 12 + 16 \times 3 + 1 \times 6 = 102 \, g \cdot mol^{-1} $$
     Alors : 
     $$ n_{2} = \frac{20.4}{102} = 0,2 \, mol $$

3. Cette réaction est appelée réaction d’estérification. Son équation est :
   $$ C_{3}H_{7}OH + C_{4}H_{6}O_{3} \rightarrow C_{5}H_{10}O_{2} + C_{3}H_{7}OH $$

4. Calculons le rendement de cette réaction :
   On a : 
   $$ r = \frac{n_{exp}}{n_{(Ester)}} \quad et \quad n_{th} = n_{1} = n_{2} $$
   Donc : 
   $$ r = \frac{n_{(Ester)}}{m_{1}} \quad avec \quad (Ester) = \frac{m_{3}}{M_{3}} $$
   Alors : 
   $$ r = \frac{m_{3}}{M_{3}} = 5 \times 12 + 2 \times 16 + 10 \times 1 = 102 \, g \cdot mol^{-1} $$
   D’où : 
   $$ r = \frac{n_{exp}}{n_{th}} \approx 100\% $$
```

<!-- Page 167 -->

```markdown
# Exercice 10

a – L’ester formé est le méthanoate de propyle.  
b – L’équation de la réaction d’estérification étudiée est :  
$$
H- C^\circ O + CH_3 - CH_2 - OH \rightleftharpoons H - C^{\circ}O - CH_2 - CH_3 + H_2O
$$

c – Le tableau d’avancement est :  

| Équation bilan | Acide              | + Alcool          | ⇌         | Ester              | + H₂O         |
|----------------|--------------------|-------------------|-----------|--------------------|---------------|
| État           |                    |                   |           |                    |               |
| Avancement     | Initial            | 0                 | 0         | 0                  | 0             |
|                | 0                  | 0,4               | 0,4       | 0                  | 0             |
| Avancement     | $x$                | 0,4 - $x$        | 0,4 - $x$ | $x$                | $x$           |
| Final          | $x_{eq}$           | 0,4 - $x_{eq}$   | 0,4 - $x_{eq}$ | $x_{eq}$           | $x_{eq}$      |

d – Calculons le rendement de cette réaction  
On a : $r = \frac{n_{exp}}{n_{th}}$ avec $n_{exp} = x_{eq}$ et $n_{th} = n_i(A)$  
Donc : $r = \frac{x_{eq}}{n_i(A)}$  
Et d’après le tableau d’avancement, on a : $n_f(A) = n_i(A) - x_{eq}$  
Donc : $x_{eq} = n_i(A) - n_f(A)$  
D’où :  
$$
n_f(A) = n_i(A) - x_{eq}
$$
A.N. : $r = \frac{0.4 - 0.133}{0.4} = 0.67 = 67 \%$

e – Calculons la valeur de la constante d'équilibre de cette réaction  
On a :  
$$
K = \frac{[Ester]_{eq}}{[H_2O]_{eq}} \left( \frac{[Acide]_{eq}}{[Alcool]_{eq}} \right)
$$  
D’après le tableau d’avancement, on a : $[Ester]_{eq} = \frac{x_{eq}}{V}$ et $[Acide]_{eq} = \frac{n_f(A)}{V}$  
Alors :  
$$
K = \frac{\left( \frac{x_{eq}^{2}}{V^{2}} \right)}{\left( \frac{n_f(A)}{V} \right)^{2}}
$$  
Donc :  
$$
K = \frac{(n_i(A) - n_f(A))^2}{(n_f(A))^2}
$$  
A.N. : $K = \frac{(0.4 - 0.133)^{2}}{0.133^{2}} = 4.03$

a – Le nom de l’ester formé est méthanoate méthylethyle.  
b – L’équation de la réaction de cette estérification est :  
$$
H - C^{\circ}O + CH_3 - CH_3 \rightleftharpoons H - C^{\circ}O - CH_3 + H_2O
$$

c – Le tableau d’avancement de cette réaction est :  

| Équation bilan | Acide              | + Alcool          | ⇌         | Ester              | + H₂O         |
|----------------|--------------------|-------------------|-----------|--------------------|---------------|
| État           |                    |                   |           |                    |               |
| Avancement     | Initial            | 0                 | 0         | 0                  | 0             |
|                | 0                  | 0,4               | 0,4       | 0                  | 0             |
| Avancement     | $x$                | 0,4 - $x$        | 0,4 - $x$ | $x$                | $x$           |
| Final          | $x_{eq}$           | 0,4 - $x_{eq}$   | 0,4 - $x_{eq}$ | $x_{eq}$           | $x_{eq}$      |

d – Calculons le rendement de cette réaction  
On a : $r = \frac{n_{exp}}{n_{th}}$ avec $n_{exp} = x_{eq}$ et $n_{th} = n_i(A)$  
Donc : $r = \frac{x_{eq}}{n_i(A)}$  
```


<!-- Page 168 -->

```
Et d'après le tableau d'avancement, on a : $n'_f(A) = 0,4 - x_{eq}$  
Donc : $x_{eq} = 0,4 - n'_f(A)$  
D'où : $r' = \frac{0,4 - n'_f(A)}{n'_f(A)}$  
A.N. : $r' = \frac{0,4 - n'_f(A)}{0,4} = 0,6 = 60\%$  
e – Calculons la valeur de la constante d'équilibre  

Par analogie avec la question (1-e), on trouve : $K = \left( \frac{n_i(A) - n'_f(A)}{n'_f(A)} \right)^2$  
A.N. : $K = \left( \frac{(0,4 - 0,16)}{0,16} \right)^2 = 2,25$  
Donc pour des mélanges de mêmes quantités de matière et à la même température, le rendement de la réaction dont l'alcool primaire est supérieur à celui dont l'alcool est secondaire.  

# Exercice 11
1. L'acide sulfurique joue le rôle d’un catalyseur.  
2. Le chauffage à reflux permet de réaliser la réaction chimique à une température élevée, en évitant les pertes des composants du mélange.  
3. L’équation de la réaction d’esterification étudiée est : 
$$ CH_3 - C \equiv O + C_6H_5 - CH_2 - OH \rightleftharpoons CH_3 - C \equiv O - O - CH_2 - CH_3 + H_2O $$  
4. Le tableau d’avancement de cette réaction est :  

| Équation bilan | A | B | $\rightleftharpoons$ | Ester | + H₂O |
|----------------|---|---|----------------------|-------|-------|
| État           | Avancement | Quantité de matière en (mol) |
| Initial        | 0 | 0,7 | 0,4 | 0 | 0 |
| Avancement     | $x$ | 0,7 - $x$ | 0,4 - $x$ | $x$ | 0 |
| Final          | $x_{eq}$ | 0,7 - $x_{eq}$ | 0,4 - $x_{eq}$ | $x_{eq}$ | $x_{eq}$ |

5. Calculons $n_f(E)$  
On a : $n_f(E) = \frac{m(E)}{M(E)}$ avec $M(E) = 8 \times 12 + 2 \times 16 + 10 \times 1 = 15$ g.mol$^{-1}$  
Donc : $n_f(E) = \frac{48,0}{150} = 0,29 mol$ d’où : $x_{eq} = n_f(E) = 0,32 mol$  

6. Calculons la constante d’équilibre de cette réaction  
On a :  
$$ K = \frac{[E]_{eq}[H_2O]_{eq}}{[A]_{eq}[B]_{eq}} $$  
Donc : $K = \frac{[A]_{eq} = \frac{0,7 - x_{eq}}{v}, [B]_{eq} = \frac{0,4 - x_{eq}}{v}, [E]_{eq} = \frac{x_{eq}}{v}}$  
Alors : $K = \frac{x_{eq}^2}{(0,7 - x_{eq})(0,4 - x_{eq})}$  
A.N. : $K = \frac{0,32^2}{(0,7 - 0,32)(0,4 - 0,32)} = 3,4$  

7. Calculons le rendement de cette réaction  
On a : $r = \frac{x_{eq}}{n_{exp}} = \frac{n_f(E)}{n(B)} = n(B)$  
Donc : $r = \frac{x_{eq}}{0,4}$  
A.N. : $r = \frac{0,32}{0,4} = 0,8 = 80\%$  

Les moyens permettant d'améliorer le rendement de cette réaction sous changer les réactifs sont :  
- Utiliser un réactif en excès par rapport à l’autre (cas de cet exercice).  
- Utiliser un produit lors de la réaction.  

a – les données de ce tableau permettraient de penser à la distillation fractionnée pour retirer le produit le plus volatil.  
En effet, en réglant la température du mélange dans l’intervalle $100°C < T < 118°C$, donc l’eau s’évapore.
```

<!-- Page 169 -->

```
# L’évaporation de l’eau entraîne une diminution du quotient de réaction ($Q_r < K$), d’où l’équilibre dans le sens de l’estérification jusqu’à consommation du réactif limitant.
b – le montage de la distillation fractionnée est celui de la figure (2)

## Exercise 12
### Équation de la réaction d’estérification étudiée :
L’ester formé est l’éthanoate d’éthyle.

$$
CH_3–C^{\circ}H_2–OH + CH_3–C^{\circ}O^{-} \rightleftharpoons CH_3–C^{\circ}O–CH_2–CH_3 + H_2O
$$

### Tableau d’avancement associé à cette réaction :
| État        | Avancement | Quantité de matière en (mol) |
|-------------|------------|------------------------------|
|             |            |                              |
| Initial     | $0$        | $n_0(A)$                     | $n_0(B)$ | $0$ | $0$ |
| Avancement  | $x$        | $n_0(A) - x$                 | $n_0(B) - x$ | $x$ | $x$ |
| Final       | $x_{eq}$   | $n_0(A) - x_{eq}$           | $n_0(B) - x_{eq}$ | $x_{eq}$ | $x_{eq}$ |

### a – Déterminons l’avancement de la réaction dans les deux cas
* Pour le ballon (1)
    * D’après la courbe, on a : $n_{f_1}(A) \approx 0,33 \, \text{mol}$
    * Et d’après le tableau d’avancement, on a : $n_{f_1}(A) = n_{0_1}(A) - x_{eq1}$
    * Donc : $x_{eq1} = n_{0}(A) - n_{f_1}(A) \, \text{A.N. :} \, x_{eq1} = 1 - 0,33 = 0,67 \, \text{mol}$ 
* Pour le ballon (2)
    * D’après la courbe, on a : $n_{f_2}(A) \approx 0,15 \, \text{mol}$
    * Et d’après le tableau d’avancement, on a : $n_{f_2}(A) = n_{0_2}(A) - x_{eq2}$
    * Donc : $x_{eq2} = n_{0}(A) - n_{f_2}(A) \, \text{A.N. :} \, x_{eq2} = 1 - 0,15 = 0,85 \, \text{mol}$ 

### b – Déterminons le temps de demi-réaction dans les deux cas
D’après le tableau d’avancement, on a : $n(A) = n_{0}(A) - x$
* Donc : $n(A_{1/2}) = n_{0}(A) - x(t_{1/2})$
    * Alors : $n(A_{1/2}) = n_{0}(A) - \frac{x_{eq}}{2}$
* Pour le ballon (1)
    * On trouve : $n_{1}(A_{1/2}) = n_{0}(A) - \frac{x_{eq1}}{2} \, \text{A.N. :} \, n(A)_{1/2} = 1 - \frac{0,67}{2} = 0,665 \, \text{mol}$
    * Par projection sur la courbe correspondante, on trouve : $t_{1/2} = 0,5 \, \text{h}$ 
* Pour le ballon (2), on trouve: $n_{2}(A_{1/2}) = n_{0_2}(A) - \frac{x_{eq2}}{2} \, \text{A.N. :} \, n_{2}(A)_{1/2} = 1 - \frac{0,85}{2} \approx 0,575 \, \text{mol}$
    * Par projection sur la courbe correspondante, on trouve : $t_{1/2} = 0,23 \, \text{h}$ 

### c – Calculons la constante d’équilibre dans les deux cas
* On a : $K = \frac{[E]_{eq}[H_2O]_{eq}}{[A]_{eq}[B]_{eq}}$
D’après le tableau d’avancement : $[E]_{eq} = [H_2O]_{eq} = \frac{x_{eq}}{V} \, \text{et} \, [A]_{eq} = \frac{n_0(A) - x_{eq}}{V}, \, [B]_{eq} = \frac{n_0(B) - x_{eq}}{V}$
* Donc : 
$$
K = \frac{\left( x_{eq} \right)^2}{\left( n_0(A) - x_{eq} \right)\left( n_0(B) - x_{eq} \right)}
$$
* Pour le ballon (1) 
    * On trouve : 
$$
K_1 = \frac{\left( x_{eq1} \right)^2}{\left( n_0(A) - x_{eq1} \right)\left( n_0(B) - x_{eq1} \right)} \, \text{A.N. :} \, K_1 = \frac{(0,67)^2}{(1-0,67)(1-0,67)} = 4,12
$$
* Pour le ballon (2) 
    * On trouve : 
$$
K_2 = \frac{\left( x_{eq2} \right)^2}{\left( n_0(A) - x_{eq2} \right)\left( n_0(B) - x_{eq2} \right)} \, \text{A.N. :} \, K_2 = \frac{(0,85)^2}{(1-0,85)(1-0,85)} = 4,19
$$
```

<!-- Page 170 -->

```markdown
d - Calculons le rendement de la réaction dans les deux cas

On a : $ r = \frac{n_{exp}}{n_{th}}$ avec $n_{eq} = n_{0}(A)$.
Alors : $ r = \frac{x_{eq}}{n_{0}(A)} $.

- Pour le ballon (1), on trouve : $ r_{1} = \frac{x_{eq1}}{n_{0}(A)} = \frac{0.67}{1} = 0.67 = 67 \% $.
- Pour le ballon (2), on trouve : $ r_{2} = \frac{x_{eq2}}{n_{0}(A)} = \frac{0.85}{1} = 0.85 = 85 \% $.

On a : $ r_{1} < r_{2} \approx K_{1} < K_{2} $.

On déduit :
- L’utilisation d’un réactif en excès par rapport à l’autre permet d’augmenter le rendement de la réaction d’estérification.
- La constante d’équilibre ne dépend pas des quantités de matière initiales des réactifs.

### Exercice 13
a - L’équation de la réaction d’estérification d’anhydride propanoïque avec le propan-1-ol

$$ CH_{3} - CH_{2} - C^{\text{=O}} + CH_{3} - CH_{2} - OH \rightarrow CH_{3} - CH_{2} - C^{\text{=O}} - O - CH_{2} - CH_{3} $$

Propan-1-ol

Acide propanoïque

b - L’équation de la réaction d’estérification d’anhydride méthanoïque avec le éthanol

$$ H - C^{\text{=O}} + CH_{3} - CH_{2} - OH \rightarrow H - C^{\text{=O}} - O - CH_{2} - CH_{3} $$

Éthanol

Acide méthanoïque

c - L’équation de la réaction d’hydrolyse basique de méthanoate d’éthyle.

$$ H - C^{\text{=O}} - O - CH_{2} - CH_{3} + HO^{-} \rightarrow H - C^{\text{=O}}^{-} + CH_{3} - CH_{2} - OH $$

Méthanoate d’éthyle

Ion méthanoate

b - L’équation de réaction d’hydrolyse basique de propanoate de 3-méthylbutyle.

$$ CH_{3} - CH_{2} - C^{\text{=O}} + HO^{-} \rightarrow CH_{3} - CH_{2} - C^{\text{=O}} + CH_{3} - CH_{2} - CH_{2} - OH $$

Ion propanoate 3-méthylpropanol
```

<!-- Page 171 -->

```markdown
# Exercice 14

1. Lors de la synthèse du savon, le mélange réactionnel est versé dans une solution saturée de chlorure de sodium pour séparer le savon de la solution, car le chlorure de sodium rend le savon moins soluble dans l’eau. Le processus est appelé relargage.

2. L’équation de la réaction du glycérol avec l’acide oléique est 
   $$
   \begin{align*}
   CH_2O - CO - C_{17}H_{33} \\
   | \\
   CH - CO - C_{17}H_{33} + H_2O \\
   | \\
   CH_2O - CO - C_{17}H_{33}
   \end{align*}
   $$
   Acide oléique

   Oléine

3. L’équation de saponification de l’olèine est
   $$
   \begin{align*}
   CH_2O - CO - C_{17}H_{33} + 3(Na^+ + HO^-) \rightarrow \\
   CH_2 - OH + 3C_{17}H_{33} - COONa \\
   | \\
   CH - OH + 3C_{17}H_{33} - COONa \\
   | \\
   CH_2 - OH
   \end{align*}
   $$
   Oléate de sodium « savon »

4. Montrons que : $r = \frac{x_f}{3n_0}$
   - Le tableau d’avancement associé à la réaction de saponification de l’olène est :

   | Équation bilan           | Oléine + $3(Na^+ + HO^-)$ | $3$Savon + Glycérol |
   |--------------------------|---------------------------|---------------------|
   | État                     | Avancement                | Quantité de matière en (mol) |
   | Initial                  | $0$                       | $n_0$               | $0$ |
   | Avancement               | $x$                       | $n_0 - x$           | $3x$ |
   | Final                    | $x_f$                     | $n_0 - x_f$         | $3x_f$ |

   On sait que : $r = \frac{n_{exp}}{n_{th}}$ avec $n_{exp} = x_f$ et $n_{th} = n_0$.

   Donc : $r = \frac{x_f}{n_0} = \frac{n_f(savon)}{3}$

   Alors : $r = \frac{3n_0}{m_{Mol}}$ avec $n_f(savon) = \frac{m}{M_{sav}}$
   $$
   D’où : r = \frac{m_{sav}}{3m_{Mol_sav}} \approx 0,775 = 77,5 \, \% .
   $$

# Exercice 15

1. L’équation de la réaction étudiée
   $$
   H - C^{\circ} \underline{0} - O - CH_2 - CH_3 + H_2O \rightleftharpoons H - C^{\circ} \underline{0} - OH + CH_3 - CH_2 - OH
   $$

2. Calculons les quantités de matière initiales des réactifs
   - Calculons $n_0(E)$
   - On a : $n_0(E) = \frac{m}{M(E)} = M(E) = 3 \times 12 + 2 \times 16 + 6 \times 1 = 74 \, \text{g.mol}^{-1}$
   $$
   Donc : n_0(E) = \frac{4.3 \times 10^{-1}}{74} \approx 5,9 \times 10^{-3} \, mol
   $$

   - Calculons $n_0(H_2O)$
   - On a : $n_0(H_2O) = \frac{m}{M(H_2O)} = 2 \times 1 + 16 = 18 \, \text{g.mol}^{-1}$
   $$
   Alors : n_0(H_2O) = \frac{1}{10} \approx 5,56 \times 10^{-2} \, mol
   $$
```

<!-- Page 172 -->

# Le tableau d'avancement associé à cette réaction :

**Équation bilan**

$$ \text{Esther} + \text{H}_2\text{O} \rightleftharpoons \text{Acide} + \text{Alcool} $$

| État      | Avancement | Quantité de matière en (mol) |
|-----------|------------|-------------------------------|
| Initial   | 0          | $5,9 \times 10^{-3}$          | $5,56 \times 10^{-2}$ | 0                             |
| Avancement| $x$        | $5,9 \times 10^{-3} - x$      | $5,56 \times 10^{-2}$ | $x$                           |
| Final     |            | $5,9 \times 10^{-3} - x_{eq}$ | $5,56 \times 10^{-2} - x_{eq}$ | $x_{eq}$                     |

1. a – D'après la courbe, on trouve $x_{eq} = 4,7 \, \text{mmol}$
   
   b – Le temps de demi-réaction  
   On a : $t_{1/2} = \frac{x_{eq}}{2} \, \text{N.N.} : x(t_{1/2}) = x_{eq} \Rightarrow t_{1/2} = 2,35 \, \text{mmol}$  
   Par projection sur la courbe, on trouve : $t_{1/2} \approx 28 \, \text{min}$

   c – Calculons la vitesse volumique de la réaction à la date $t_1$  
   On a : $v = \frac{1}{V_m} \cdot \frac{dx}{dt}$ avec $n_A$  
   Donc : $v = \frac{1}{V_m} \cdot \frac{dh_A}{dt}$  
   À la date $t_1$, on trouve: $v_1 = \frac{1}{V_m} \cdot \frac{d_nA}{dt} \big|_{t_1} \, \text{A.N.} : v_1 = \frac{1}{10,48 \times 10^{-3} - (3,8-3) \times 10^{-3}} \cdot \frac{(60-30)}{1} = 2,54 \times 10^{-3} \, \text{mol.min.L}^{-1}$

2. Calculons la constante d'équilibre de cette réaction  
   On a : $$ K = \frac{[\text{Acide}][\text{Alcool}]_{eq}}{[\text{Esther}]_{eq} \cdot [\text{H}_2\text{O}]_{eq}} $$  
   D'après le tableau d'avancement, on a : $$ [\text{Acide}]_{eq} = [\text{Alcool}]_{eq} = \frac{x_{eq}}{V} $$ et $$ [\text{Esther}]_{eq} = \frac{5,9 \times 10^{-3} - x_{eq}}{V} $$  
   Alors :  
   $$ K = \frac{(5,9 \times 10^{-3} - x_{eq})(5,56 \times 10^{-2} - x_{eq})}{V} $$  
   D'où :  
   $$ K = \frac{(4,7 \times 10^{-3})^{2}}{(5,9 \times 10^{-3} - 4,7 \times 10^{-3})} = 0,36 $$

3. Calculons le rendement de cette réaction  
   On a : $$ \eta = \frac{n_{exp}}{n_{eq}} \cdot 100 = \frac{x_{eq}}{n_0(E)} $$  
   Donc : $$ \eta = \frac{4,7 \times 10^{-3}}{5,9 \times 10^{-3}} \approx 0,8 \, \, 80 \% $$

---

# Exercice 16

**L’équation de la réaction de saponification étudiée est :**

$$ \text{CH}_2\text{O} - \text{CO} - \text{C}_{15}\text{H}_{31} + 3(K^+ + \text{HO}^-) \rightarrow \text{CH}_2\text{OH} + 3\text{C}_{15}\text{H}_{31} - \text{COOK} $$

Calculons la quantité de matière initiale de palmitate de potassium glycérol  
On a : $n = \frac{m}{M_p}$  
Donc : $n = \frac{380}{803} \approx 0,47 \, \text{mol}$

**Le tableau d'avancement de cette réaction**

| État      | Avancement | Quantité de matière en (mol) |
|-----------|------------|-------------------------------|
| Initial   | 0          | $n_0$                         | 0                             |
| Avancement| $x$        | $n_0 - x$                    | $3x$                          |
| Final     |            | $n_f$                        | $3x_f$                        |

<!-- Page 173 -->

```markdown
4. Calculons la masse du savon à la fin de la réaction  
On a : $r = \frac{n_{\text{exp}}}{n_{\text{th}}}$ avec $n_{\text{exp}} = x_f$ et $n_{\text{th}} = n$  
Donc : $r = \frac{n}{x_f} ( \ast )$  
Et d'après le tableau d'avancement, on a : $n_f(savon) = 3x_f$  
Alors : $x_f = \frac{m(savon)}{M'}$  
On remplace l'équation $(\ast)$ dans l'équation $(\ast)$, on trouve : $r = \frac{m'}{3M/n}$  
Donc : $m' = 3Mr/n$  
Application numérique : $m' = 3 \times 294, 5 \times 0, 47 \times 0, 9 \approx 373, 7 g$

### Exercice 17  
- Cette réaction est appelée l'hydrolyse basique de l'ester, « la saponification de l'ester »  
- L’ester $E$ est le propanoate d'éthyle de formule chimique :  
Cette réaction est totale et lente.  
- L’équation de cette réaction de saponification étudiée :  
$$ 
CH_3 - CH_2 - C^{\text{O}} 
- O - CH_2 - CH_3 + \text{HO}^{-} \rightarrow CH_3 - CH_2 - C^{\text{O}} - OH - CH_2 - CH_3 
$$  
- L’expression et la valeur du rendement de cette réaction  
On a : $r = \frac{n_{\text{exp}}}{n_{\text{th}}}$ avec $n_f(C_2H_5OH)$ et $n_{\text{th}} = n_0(E)$.  
Donc : $r = \frac{n_f(C_2H_5OH)}{n_0(E)}$ avec : $\frac{m}{M}$ et $n_f(C_2H_5OH) = \frac{m}{M'}$.  
Alors : $r = \frac{m' \cdot M'}{M}$  
A.N.: $r = \frac{4,2 \times 10^2}{10^{2} \cdot 6} \approx 0,913 \approx 91,3 \%$

### Exercice 18  
L’ester utilisé est l’éthanoate de propyle de formule semi-développée :  
Le composé $A$ est un alcool nommé le propan-1-ol. Sa formule chimique est : $CH_3 - CH_2 - CH_2 - OH$  
Cette réaction est appelée l'hydrolyse basique de l'ester, ou la saponification de l'ester. C’est une réaction lente et totale (mais reste rapide par rapport à la réaction d'hydrolyse de l'ester dans l'eau).  
a – Le temps de demi-réaction  
- Pour la courbe $(C)$, on trouve : $t_{1/2} = 5,75 \text{min}$  
- Pour la courbe $(C')$, on trouve : $t'_{1/2} = 1,5 \text{min}$  
- Puisque $t_{1/2} > t'_{1/2}$ et $\theta_2 > \theta_1$, alors la courbe correspondant à la température $\theta_2$ est la courbe $(C')$  
« Plus la température est élevée, plus la réaction est rapide, c'est-à-dire que, plus $t_{1/2}$ est petit. »  

b – Calculons la vitesse volumique à la date $t_0 = 0$  
On a : $v = \frac{1}{V_m} \frac{d x}{dt}$ avec $x = n(CH_3COO^-) = [CH_3COO^-]_{v_m}$  
Donc : $v = \frac{1}{V_m} \frac{d}{dt}[CH_3COO^-]_{t_0}$  
À $t_0 = 0$, on trouve : $v_0 = \left( \frac{d[CH_3COO^-]}{dt} \right)_{t_0}$.  
A.N.: $v_0 = \frac{(4-0)}{(8-0)} = 0,5 \text{mmol} \cdot L^{-1} \cdot min^{-1}$
```

<!-- Page 174 -->

```markdown
# Devoirs

## ÉLECTRON & 2BAC-PC & Devoirs
```

<!-- Page 175 -->

```markdown
# Devoir surveillé N°5 – 1
## Niveau: 1BIOF

## Exercice 1
### Étude du mouvement d’une baille dans le champ de pesanteur

Le ski, comme sport, est considéré parmi les meilleures activités de loisir pendant l'hiver, c'est un sport d'aventure, de consistance physique, et de souplesse.  
Cet exercice vise à étudier le mouvement du centre d'inertie d'un skieur et ses accessoires sur une piste $AB$ ainsi que son mouvement de chute parabolique dans le champ de pesanteur uniforme.

**Données :**
- La masse du skieur et ses accessoires : $m = 80 \, kg$
- L’intensité de pesanteur : $g = 10 \, m.s^{-2}$
- L’angle d’inclinaison : $\alpha = 15^\circ$
- La résistance de l’air est supposée négligeable.

---

### I- Étude du mouvement du skieur sur la piste $AB$

On étudie le mouvement de $G$ centre d’inertie du skieur et ses accessoires dans un repère $R(A,\vec{i},\vec{j})$ lié à un référentiel terrestre supposé galiléen.  
Le centre d’inertie $G$ du skieur quitte la position $A$ avec une vitesse $V_A = 20 \, m.s^{-2}$ à un instant $t_0 = 0$.  
Les frottements sont supposés négligeables sur la piste $AB$.

1. Déterminer les forces extérieures exerçées sur le skieur et ses accessoires pour cette piste.
2. Par application de la deuxième loi de Newton sur le skieur et ses accessoires, trouver l’expression de l’accélération $a_x$ de $G$ en fonction de $g$ et $\alpha$. Déduire la nature du mouvement de $G$ sur cette piste.
3. Établir les équations horaires $V_x(t)$ et $x(t)$ de $G$ sur la piste $AB$.

Le skieur atteint la position $B$ à un instant $t_B = 4, 61 \, s$  
$\alpha$ – Calculer la valeur de la vitesse $V_B$  
$b$ – Calculer la distance $AB$

---

### II- Étude du mouvement de chute parabolique du skieur dans le champ de pesanteur uniforme

On étudie le mouvement de $G$ centre d’inertie du skieur et ses accessoires dans un repère $R(C,\vec{i},\vec{j})$ lié à un référentiel terrestre supposé galiléen.  
Le centre d’inertie $G$ du skieur quitte la position $A$ avec une vitesse $V_B = 8, 07 \, m.s^{-2}$ à un instant $t_B' = 0$ où l’on considère comme une nouvelle origine du temps. On donne $CB = 17, 8 \, m$

1. Exprimer le vecteur $\vec{V_B}$ dans le repère $R(C,\vec{i},\vec{j})$.
2. Par application de la deuxième loi de Newton déterminer les composants $a'_x$ et $a'_y$ de l’accélération de $G$.
3. Trouver les équations horaires de mouvement de $G$ en fonction de $V_B$, $g$, $\alpha$, $t$ et la distance $CB$.
4. Montrer que l’équation de la trajectoire de $G$ est : $y(x) = -8,23 \times 10^{-2} \, x^2 + 2,68 \times 10^{-1} \, x + 17,8$  
Le saut est considéré comme réel si le skieur franchit le drapeau placé au point $D$ de coordonnées $x' = 11,5 \, m$ et $y' = 12, 94 \, m$. Le sautil étudié est-il réussi ? Justifier votre réponse.
```

<!-- Page 176 -->

```markdown
# Exercice 2 Étude du mouvement vertical d’une balle

Cet exercice vise à étudier le mouvement vertical d’une bille métallique de masse $m$ et de volume $V$ dans un puits contenant de l’eau.

Étudions le mouvement de $G$ centre de l'inertie de la bille dans un repère $(O,K)$ lié un référentiel terrestre supposé galiléen. La figure ①

## Données
- Volume de la bille $V = 5,13 \times 10^{-6} \, m^3$
- Masse de la bille $m = 40 \, g$
- Masse volumique de l’eau $\rho = 10^3 \, kg/m^3$
- L’intensité de champ de pesanteur $g = 10 \, m.s^{-2}$

## I-Étude du mouvement de la bille dans l’air
À un instant $t = 0$, une bille part d’un point $O$ sans vitesse initiale. Une caméra numérique fixée à l’ouverture du puits a permis d’enregistrer le mouvement de la bille entre l’ouverture et la surface libre de l’eau. À partir de cet enregistrement on construit la courbe représentant les variations de la vitesse $v_G$ de $G$ en fonction du temps. La figure ②

1. En exploitant la courbe de $G$ déterminer l’accélération $a_z$ de $G$ dans l’air et celle de $v_1$ la vitesse de $G$ à la surface libre de l’eau.
2. Comparer la valeur de $a_z$ avec celle de $g$, et déduire la nature du mouvement de la bille dans l’air.
3. Déterminer l'équation horaire du mouvement.
4. Calculer la distance $H$ entre l’ouverture du puits et la surface libre de l’eau.

## II-Étude du mouvement de la bille dans l’eau
La bille atteint la surface de libre de l’eau à un instant $t_1 = 2,8 \, s$, sur cette partie la bille est soumise plus à son poids $P$ à la poussée d’Archimède $\vec{F_A} = -\rho V \vec{g} \hat{k}$ et à une force de frottement fluide $\vec{f} = -k \, v^2 \hat{k}$, où $k$ est constante positive.

1. En appliquant la deuxième loi de Newton montrer que l’équation différentielle du mouvement s’écrit sous la forme : 
$$ \frac{d^2 x}{dt^2} + b v^2 = A $$, en précisant les expressions de $A$ et $B$ en fonction de $\rho, \, m, \, g, \, k$, et $V$.
2. Déterminer l’expression de l’accélération initial $a_1$ en fonction de $v_1$ à $B$.
3. Déterminer l’expression de la vitesse limite $v_L$ en fonction de $A$ et $B$.
4. L’équation différentielle du mouvement est : 
$$ \frac{dv}{dt} + 0,32 v^2 = 8,72.$$ 
   Calculer la valeur $v_L$ de et celle de $a_1$.
5. Déduire la valeur de $K$.
6. L’équation différentielle du mouvement est : 
$$ \frac{dv}{dt} + 0,32 v^2 = 8,72.$$ 
   Calculer la valeur $v_L$ de et celle de $a_1$.

# Exercice 4 Étude de l’électrolyse d’une solution de chlorure de sodium

On réalise l’électrolyse d’une solution aqueuse de chlorure de sodium $(Na^+ + Cl^-) $ dans un tube de forme U. Deux électrodes de graphite plongées dans la solution et reliées chacune à l'une des bornes (positive ou négative) d’un générateur de tension continue $G$.
Au cours de l’électrolyse, il se forme le dichlore $Cl_2(g)$ au voisinage d’une électrode et du dihydrogène au voisinage de l’autre électrode $H_2(g)$.

1. Quel est l’anode et la cathode dans cette électrolyse?
2. Quels sont les gaz dégagés aux électrodes (A) et (B)?
3. Écrire les demi-équations de réactions qui se produisent aux électrodes. Déduire l’équation de la réaction globale.
4. Le générateur $G$ fournit un courant d’intensité $I = 2 \, A$, pendant une durée $\Delta t = 20 \, min$.
```

<!-- Page 177 -->

```markdown
# Correction

## Exercice 1 

### Étude du mouvement d’une balle dans le champ de pesanteur

1. **Étude du mouvement du skieur sur la piste AB**
   - Les forces exercées sur le skieur et ses accessoires sont :
     - $\vec{P}$ : Poids du skieur et ses accessoires.
     - $\vec{R}$ : La réaction de la piste $AB$.
   
   - Trouvons l'expression de l’accélération $a_x$ :
     - Par application de la 2ème loi de Newton, on a : 
     $$ 
     \vec{P} + \vec{R} = m \vec{a} 
     $$
   - La représentation des forces :

   - Par projection sur $(A, x)$, on a : 
     $$ 
     -\vec{P}\sin(\alpha) = m a_x 
     $$
     Donc : 
     $$ 
     a_x = -g \sin(\alpha) 
     $$

     Alors : le mouvement du centre d'inertie du skieur est rectiligne uniformément varié (ralenti), car sa trajectoire est rectiligne et son accélération est constante $a_x = \text{cte}$ 

2. **Déterminons les équations horaires du mouvement :**
   - Équation de la vitesse $V_x$ :
     - On a : 
     $$ 
     a_x = -g \sin(\alpha) 
     $$
     Donc : 
     $$ 
     \frac{dV_x}{dt} = -g \sin(\alpha) 
     $$

     Par intégration, on trouve :
     $$ 
     V_x = -g \sin(\alpha) \cdot t + C 
     $$ 
     À $t = 0$, on a : $V_x(0) = V_A$

   - Équation de l’abscisse $x(t)$ :
     - On a : 
     $$ 
     V_x(t) = -g \sin(x) + V_A 
     $$

   - **D’où :**
     $$ 
     \frac{dx}{dt} = -g \sin(\alpha) + t + V_A 
     $$

     Par intégration, on trouve :
     $$ 
     x(t) = -g \sin(\alpha) \frac{t^2}{2} + V_A t + C' 
     $$

     À $t = 0$, on a : $x(0) = x_A \Rightarrow C' = 0$

3. **Calculons la valeur de la vitesse $V_B$ :**
   - On a :
     - $V_x = -g \sin(\alpha) + V_A$.
     - Au point $B$, on trouve : 
     $$ 
     V_B = -g \sin(\alpha) \cdot t_B + V_A 
     $$ 
     A.N. : $V_B = -10 \sin(15^\circ) \times 4,61 + 20 = 8,07 \text{ m.s}^{-1}$

   - Calculons la distance $AB$ :
     - On a : 
     $$ 
     x = -g \sin(\alpha) \frac{t^2}{2} + V_A t 
     $$

4. **Au point $B$, on a**:
   $$ 
   x_B = -g \sin(\alpha) \left(\frac{t_B^2}{2}\right) + V_A \cdot t_B 
   $$

   - A.N. : 
   $$ 
   x_B = -g \sin(15^\circ) \left( \frac{(4.612)}{2} \right) + 10 \times 4,6 
   $$

   - Donc : 
   $$ 
   x_B = 64,7 \text{ m} 
   $$
   - Et puisque : $A_B = x_B - x_A $ avec $x_A = 0$ 
   Donc : $AB = 64,7 \text{ m}$

### II. Étude du mouvement de chute parabolique du skieur dans le champ de pesanteur uniforme

1. **On projette le vecteur vitesse $V_B$ dans le repère $R'(C; i'; j')$ :**
   - On trouve : 
   $$ 
   \vec{V}_B = [V_{B_{x}} \quad V_{B_{y}}] = V_B \begin{pmatrix} \cos(\alpha) \\ \sin(\alpha) \end{pmatrix} 
   $$
   
2. **Déterminons les composantes $a_{x}'$ et $a_{y}'$ et l’accélération de $G$**
   - Le système mécanique (skieur et ses accessoires) est en chute libre dans le champ de pesanteur, donc il possède $\vec{P}$ uniquement.
     - Par application de la 2ème loi de Newton, on a : 
     $$ 
     \vec{P} = m \vec{a}_g 
     $$

   - Par projection dans le repère $R'(C; i'; j')$, on trouve : 
     $$ 
     a_{x}' = 0 
     $$
     $$ 
     a_{y}' = -g 
     $$

3. **Trouvons les équations horaires du mouvement :**
   - Les équations de la vitesse :
     - On a : 
     $$ 
     a_{x}' = 0 
     $$
     - On a : 
     $$ 
     \frac{dV_{y}}{dt} = 0 
     $$

   - Donc : 
   $$ 
   V_{y} = C_1 
   $$

   - Par intégration, on trouve : 
   $$ 
   V_{x}' = C_1 
   $$ 
   $$ 
   V_{y}' = -gt + C_2 
   $$

```


<!-- Page 178 -->

```markdown
# Exercice 2
Étude du mouvement vertical d’une balle

## I-Étude du mouvement de la bille dans l’air
D’après la courbe de la figure (◊), on a :
$$
a_z = \frac{20 - 10}{2 - 1} = 28 \text{ m.s}^{-2}
$$
On a : $a_z = 10 \text{ m.s}^{-2}$ et $g = 10 \text{ m.s}^{2}$.
Donc : $a_z = g$

### Déterminons les équations horaires du mouvement.
L’équation horaire de la vitesse
On a : 
$$
a_z = 10
$$
Donc :
$$
\frac{dz}{dt} = 10
$$
Par intégration, on obtient : $v_z = 10t + C$
À $t = 0$, on a : $v_z(0) = 0 \Rightarrow C = 0$
Donc : $v_z = 10t$

L’équation horaire de la cote $z(t)$
On a : $v_z = 10t$
Donc :
$$
\frac{dz}{dt} = 10t
$$
Par intégration, on obtient : $z(t) = \frac{10t^2}{2} + C'$
Alors : $z(0) = 0, \, \text{donc } C' = 0$
On trouve : $z(t) = 5t^2$

### Calculons la distance H
La bille atteint la surface libre de l’eau au moment $t_1$ avec une vitesse $v_1 = 28 \text{ m.s}^{-1}$
On a : $H = z(t_1)$
Donc : $H = 5t_1^2 = 10t_1 \Rightarrow t_1 = \frac{v_1}{10}$
Alors : $H = 5 \left(\frac{V_1}{10}\right)^2 A.N. : H = 5 \left(\frac{28}{10}\right)^2 = 39.2 \text{ m}$

## II-Étude du mouvement de la bille dans l’eau
Montrons l’équation différentielle du mouvement.
- Le système étudié : la bille.
- Les forces exercées sur la bille sont :
  - $P$: Poids de la bille.
  - $F$: Force de frottement fluide.
  - $F_A$: Poussée d'Archimède.

Par application de la 2ème loi de Newton, on a :
$$
\overrightarrow{P} + \overrightarrow{F} + \overrightarrow{F_A} = m\overrightarrow{g}
$$
Par projection sur l’axe $(Oz)$, on trouve :
$$
m a_z = -k v^2 - p v g + mg
$$
$$
\Rightarrow a_g + \frac{k}{m} v^2 = g \left(1 - \frac{p}{\rho} \frac{m}{m}\right)
$$
$$
\Rightarrow \frac{dv_c}{dt} + \frac{k}{m} v^2 = A
$$
Avec : $B = \frac{k}{m} \text{ et } A = g \left(1 - \frac{p}{\rho}\frac{m}{m}\right)$

### Déterminons l’expression de l’accélération $a_1$ à la date $t_1$.
On a : $a_c = A - Bv^2$
À $t_1$, on trouve : $a_1 = A - Bv^2$

### Déterminons l’expression de la vitesse limite
L’équation différentielle est :
$$
\frac{dv_c}{dt} + Bv^2 = A
$$
En régime permanent, on a :
$$
\text{ alors } \frac{dv_c}{dt} = 0
$$
```


<!-- Page 179 -->

```markdown
- Donc l’équation différentielle devient: $Bv^2 = A$
  
  Donc : $v_L = \sqrt{\frac{A}{B}}$

- Calculons la valeur de $v_L$ et celle de $a_1$.

  On a : $\frac{dv_c}{dt} + Bv^2 = 8,72$

  Et on a, par analogie, on trouve : $B = 0,32$ et $A = 8,72 \, \text{m.s}^{-2}$

  - Calculons $v_L$:

    On a : $v_L = \sqrt{\frac{A}{B}}$

---

### Exercice 3

Étude du mouvement orbital d’une planète autour du soleil

1. L’anode est l’électrode (B), car elle est liée au pôle positif du générateur, et la cathode est l’électrode (A), car elle est liée au pôle négatif du générateur.
   
2. Le gaz dégagé à électrode (A), est le dihydrogène $H_2$ et celle dégagée à l’électrode (B), est le dichlore $Cl_2$.

3. L’équation de la réaction :
   
   Au voisinage de l’anode (B) se produit une oxydation de demi-équation : $2Cl_{aq} \rightarrow Cl_2(g) + 2 e^-$
   
   Au voisinage de la cathode (A) se produit une réduction de demi-équation : $2H_2O_{(l)} + 2 e^- \rightarrow H_2(g) + 2 HO_{(aq)}$

   - Équation bilan : $2Cl_{aq} + 2 H_2O_{(l)} \rightarrow Cl_2(g) + H_2(g) + 2 HO_{(aq)} + n(e^-)$
  
4. a – Le tableau d’avancement associé à la réaction globale :

   $$
   \begin{array}{|c|c|c|c|}
   \hline
   \text{L’état} & \text{L’avancement} & \text{La quantité de matière en mol} \\
   \hline
   \text{Initial} & 0 & CV & 0 & 0 \\
   \text{Intermédiaire} & x & n_0 - 2x & x & 2x \\
   \text{Final} & x_{max} & n_0 - 2x_{max} & x_{max} & 2x_{max} \\
   \hline
   \end{array}
   $$

   En excès

b – Trouvons l’expression de l’avancement $x$ 

   D’après le tableau d’avancement, on a : $n(e^-) = 2x$
   
   Donc : $x = \frac{n(e^{-1})}{2} = \frac{I \cdot t}{2F}$

   D’où : $x = \frac{I \cdot t}{2F}$

c – Calculons le volume de $H_2$ formé à la fin de l’électrolyse

   D’après le tableau d’avancement, on a : $n(H_2) = x$, avec $x = \frac{I \cdot t}{2F}$

   Donc : $n(H_2) = \frac{I \cdot t}{2F}$ avec $n(H_2) = \frac{V(H_2)}{V_m}$

   Alors : $V(H_2) = \frac{I \cdot t}{2F} \cdot V_m$

   D’où : 
   $$
   V(H_2) = \frac{I \cdot t}{2F} \cdot V_m \approx 0,3 \, L
   $$
```


<!-- Page 180 -->

```markdown
# Devoir surveillé N° 5 - 2
## Niveau: 2BIOF

### Exercice 1
Étude du mouvement d’un solide sur un plan horizontal

Un solide $(S)$ de masse $m = 0,5 \, kg$ est en mouvement rectiligne sur un plan horizontal sous l’action d’une force constante $\vec{F}$ horizontale. La figure ①  
À l’instant $t = 0$, le point $G$ est confondu avec le point $O$, d’abscisse $x_0 = 0 \, m$.  
Étudions le mouvement de $G$ dans un repère $R(O, \vec{i}, \vec{j})$ lié à un référentiel terrestre supposé galiléen.  

1. En exploitant la courbe de la figure ② déterminer:
   - a – La nature du mouvement (une justification est demandée).
   - b – La valeur de la vitesse initiale $V_0$ et celle de l’accélération $a_x$ de $G$.
2. En appliquant la deuxième loi de Newton, déterminer la composante normale $R_N$ de $\vec{R}$ la réaction du plan.  
3. Sachant que le coefficient du frottement est $K = 0,6$. Calculer la composante tangentielle $R_T$ de la réaction.  
4. Calculer l’intensité de la force $\vec{F}$.  
5. Le centre $G$ de $(S)$ passe par un point $A$ à un instant $t_4$ avec une vitesse $V_A = 40 \, m.s^{-1}$  
   - a – Déterminer la valeur de $t_A$.  
   - b – Calculer la distance $OA$.  
   - On donne: $g = 10 \, m.s^{-2}$.

### Exercice 2
Étude du mouvement d’une boule dans le champ de pesanteur

Un joueur de pétanque lance une boule de masse $m$ à l’instant $t = 0$ avec une vitesse $\vec{v}_0$ faisant un angle $\alpha$ avec le plan horizontal.  
On étudie le mouvement de $G$ centre d’inertie de la boule dans un repère $R(O, \vec{i}, \vec{j}, \vec{K})$ lié à un référentiel terrestre supposé galiléen.  
La résistance de l’air est considérée négligeable.  
La courbe de la figure représente les variations l’ordonnée $y_G$ en fonction de l’abscisse du point $x_G$.

1. En appliquant la deuxième loi de Newton à la boule déterminer les composantes selon l’axe $(Ox)$ et selon $(Oy)$ de l’accélération de son centre d’inertie $G$.
```

<!-- Page 181 -->

```markdown
### Exercice 3
Étude du mouvement d’un parachiste dans l’air

Cet exercice vise à étudier le mouvement d’un parachutiste et son équipement dans l’air. Étudions le mouvement du centre d’inertie $G$ du système $(S)$, constitué du parachutiste et son équipement dans un repère $R(O, K)$ lié à un référentiel terrestre supposé galiléen (figure 0). On considère que la trajectoire de $G$ est verticale et que l’accélération de la pesanteur reste constante.

### Données
- Masse du parachiste et son équipement: $m = 80 kg$
- L’intensité du champ de pesanteur: $g = 10 m.s^{-2}$

#### I- Première phase: chute libre verticale du parachiste
À un instant $t_0 = 0$, le parachutiste qui sans vitesse initiale un hélicoptère en vol stationnaire située à une hauteur $H$ au-dessus du sol. 

Durant cette phase le parachute est fermé et l’action du l’air sur ce dernier est considérée négligeable.

1. Par application de la deuxième loi de Newton exprimer $a_z$ en fonction de l’intensité de pesanteur.
2. Établir les expressions de la vitesse $v_z$ et de position $z(t)$, du centre d'inertie du système $(S)$.
3. Le parachutiste ouvre son parachute lorsque sa vitesse atteint la valeur $v_1 = 35 m.s^{-1}$
   - a - Calculer la durée de cette phase.
   - b - Calculer la distance parcourue par le système $(S)$ durant cette phase.

#### II- Deuxième phase: chute libre verticale avec frottement du parachiste
Le parachutiste ouvre son parachute à un instant que l’on choisit comme nouvelle origine des dates $(t_0 = 0)$ pour cette phase. La figure 2. 

Durant cette phase, le système $(S)$ est soumis à son poids à une force de frottement exercée par l’air dont l’expression est: $\vec{F} = -k v^2 \vec{k}$. 

Un système d’acquisition convenable intégré dans l’équipement du parachiste à permettre de tracer le tableau $a_g$ qui représente les variations de l’accélération $a_c$ de $G$ en fonction du temps $t$.

1. En appliquant la deuxième loi de Newton montrer que l’équation différentielle du mouvement s’écrit sous la forme suivante: 
   $$ \frac{dz}{dt} + A v^2 = g, $$ en précisant l’expression de $A$ en fonction $k$ et $m$.
2. Déterminer l’expression de la vitesse limite $v_l$ en fonction de $g$, $m$ et $k$.
3. En exploitant la courbe de la figure 2 déterminer la valeur de l’accélération initiale $a_{0z}$ et de la constante $A$.
4. Calculer la valeur du coefficient de frottement.
5. Le tableau ci-desous donne les valeurs d’accélération et de vitesse aux instants différents.
```

<!-- Page 182 -->

```markdown
### a 
- Vérifier que l'équation différentielle du mouvement peut s'écrire sous la forme suivante: 
$$ \frac{dv}{dt} = 10 \cdot 0.2v^2 $$

### b 
- En utilisant la méthode d’Euler, compléter le tableau, on calcule la valeur de la vitesse $v_1$ et celle de l’accélération $a_3$.

| Temps en (s) | $t_0$ = 0 | $t_1$ = 0,01 | $t_2$ = 0,02 | $t_3$ = 0,03 |
|--------------|-----------|---------------|---------------|---------------|
| Vitesse en (m.s$^{-1}$) | 35        | 30,62        | 28,84        |
| Accélération en (m.s$^{-2}$) | −235      | −203,2      | −177,52     |

### Exercice 4 
Étude de l’électrolyse d’un solution électrolytique

On effectue l’électrolyse d’une solution aqueuse de nitrate d’argent ($Ag^{+}(aq) + NO_3^{-}(aq)$) acidifiée par une solution aqueuse d’acide nitrique ($H_3O^{+}(aq) + NO_3^{-}(aq)$) en utilisant deux électrodes en graphite. 

Le volume du mélange dans l’électrolyseur est $V = 400 \, \text{ml}$. 

On mesure le pH du mélange avant la fermeture du circuit en vertu $pH = 3$, puis on ferme le circuit à un instant choisi comme origine des dates ($t = 0$). Un courant électrique d’intensité constante $I = 0,3 \, A$ circule alors dans le circuit. 

L’équation bilan de la réaction est: 
$$ 
4Ag^+(aq) + 6H_2O_{(l)} \rightarrow  O_2(g) + 4H_3O^{+}(aq) + 4Ag(s) 
$$

1. Écrire l’équation de la réaction qui se produit à l’anode.
2. À l’aide du tableau d’avancement de la réaction, montrer que l’expression de l’avancement $x$ de la réaction à un instant $t$ est : 
$$ x = \frac{1}{4} (10^{-pH} - 10^{-pH_0}) $$
où $pH_0$ représente la valeur du pH du mélange à cet instant.
3. À un instant $t_1$ le pH du mélange prend la valeur: $pH_1 = 1,5$
    - a) Calculer la valeur de l’avancement à l’instant $t_1$.
    - b) Calculer la date instant $t_1$.
    - c) Calculer la masse de l'argent produite à l’instant $t_1$.
    
**Données :**
- Masse molaire de l'argent: $M(Ag) = 108 \, g \cdot mol^{-1}$
- La constante de Faraday: $F =  9,65 \cdot 10^{4} \cdot C \cdot mol^{-1} $

### Correction 

### Exercice 1 
Étude du mouvement d’un solide sur un plan horizontal

1. En exploitant la courbe déterminer:
   - a) La trajectoire de $(S)$ est rectiligne et l’équation horaire de sa vitesse est affine donc son mouvement rectiligne uniformément varié. 
   - b) Déterminons 1 valeur $V_0$ et celle de $a_x$. D’après le graphe, on a: $V_0 = 10 \, m \cdot s^{-1}$ 
   $$ a_x = \frac{10 - 2}{0 - 5} = -2 \, m \cdot s^{-2} $$

2. Déterminons la valeur de $R_N$.
   - *Le système étudié: Le corps $(S)$*
     - $\vec{P}$ : Son poids.
     - $\vec{R}$ : La réaction du plan horizontal.
     - $\vec{F}$ : Une force constante. 

On représente les forces sur le schéma:

D’après la 2ème loi de Newton: 
$$ \vec{P} + \vec{R} + \vec{F} = m\vec{a} $$ 

Donc: $R_N = P \; avec \; P = m \cdot g$
   
A.N: $R_N = 0,5 \cdot 10 = 5 \, N$

3. Calculons la valeur de $R_T$.
   - On a: $K = \frac{R_N}{R_T}$
   - Donc: $R_T = K \cdot R_N$

A.N: $R_T = 0,6 \; K = 5 \, N$

4. Calculons l’intensité de la force $\vec{F}$.
   - Par projection sur l’axe $(Ox)$ : $F - R_T = m \cdot a_x$
   
   Donc: $F = R_T + m \cdot a_x$ 

   A.N: $F = 3 + 2 \cdot 5 = 4 \, N$

5. a) Déterminons la valeur de $t_4$.
   - On a $V_c = a_x \cdot t + V_0$
   - Au point A cette relation devient: $V_c = a_x \cdot t + V_0$

   Alors: $t_4 = \frac{V_0 - V_c}{a_x} = \frac{40 - 10}{2} = 15 \, s$

b) Calculons la distance $OA$.
   - On a: $x_a = \frac{a_x}{2} t^2 + V_0 \cdot t + x_0$

   Donc: $x_a = x_0 - \frac{a_x}{2} t^2 + V_0 \cdot t$

   Alors: $x_a = x_0 - \frac{2}{2} (15)^2 + 10 \cdot 15 = 375 \, m$
```


<!-- Page 183 -->

```markdown
# Exercice 2
Étude de la modulation et la démodulation d’un signal électrique

1. Déterminons les composantes $a_x$ et $a_y$ de l’accélération $\vec{a}_G$ du centre d'inertie de la boule :
   - La résistance de l’air est négligeable, donc la boule est en chute libre parabolique sous l’action de son poids $\vec{P}$
   - Par application de la 2ème loi de Newton, on a : $\vec{P} = m \vec{a}_G$
   - On projette cette relation sur les axes $(Ox)$ et $(Oy)$, on trouve :
     $$
     \begin{cases}
     a_x = 0 \\
     a_y = -g
     \end{cases}
     $$

2. Les équations horaires du mouvement :
   - Les équations horaires de la vitesse
     - $a_x = 0$
     - $a_y = -g$
   - Par intégration, on trouve :
     $$
     V_x = V_{0x} \quad \text{et} \quad V_y = -gt + V_{0y}
     $$
     avec $V_{0} = \sqrt{V_{0x}^2 + V_{0y}^2}$

   - On trouve :
     $$
     \begin{cases}
     V_x = V_A \cos(\alpha) \\
     V_y = -gt + V_A \sin(\alpha)
     \end{cases}
     $$

3. Les équations du vecteur position
   - On a :
     $$
     \begin{cases}
     V_x = \frac{dx}{dt} = V_A \cos(\alpha) \\
     V_y = \frac{dy}{dt} = -gt + V_A \sin(\alpha)
     \end{cases}
     $$

   - Par intégration, on trouve :
     $$
     \begin{cases}
     x = V_A \cos(\alpha) \cdot t + x_A \\
     y = -\frac{gt^2}{2} + V_A \sin(\alpha) \cdot t + y_A
     \end{cases}
     $$

4. Montrons l’équation de la trajectoire :
   - On a :
     $$
     x = V_A \cos(\alpha) \cdot t + x_A \, (*)
     $$
   -  où :
     $$
     y = -\frac{gt^2}{2} + V_A \sin(\alpha) \cdot t + y_A \, (**)
     $$

   - L’équation $(**)$ donne :
     $$
     y_G = -\frac{g}{2 V_{A} \cos(\alpha)}^2 + V_A \sin(\alpha) \cdot \left(-\frac{x_G - x_A}{V_A \cos(\alpha)}\right) + y_A
     $$

   - On remplace $x_G - x_A$ dans l’équation $(**)$, on trouve :
     $$
     y_G = -\frac{g}{2 V_A \cos(\alpha)}^2 + (x_G - x_A)^2 + (x_G - x_A) \tan(\alpha) + y_A
     $$

5. a - D’après la courbe de la figure $(\odot)$, on a : $x_A = 2 \, m$ et $y_A = 1,5 \, m$
   - b - D’après la courbe de la figure $(\odot)$, on a : $x_S = 9,2 \, m$ et $y_S = 5,1 \, m$
   - c - D’après la courbe, on a : $OP = x_0 = 17,8 \, m$

6. Calculons la valeur de l’angle $a$ :
   - Au sommet de la trajectoire, on a : $V_y(t_S) = 0$
     - Donc : $g t_S + V_A \sin(\alpha) = 0$  
     - Alors : $t_S = \frac{V_A \sin(\alpha)}{g} \, (1)$
   - Et on a : $x_S = V_A \cos(\alpha) \cdot t_S \cdot t_S$  
   
7. On remplace l'équation $(1)$ dans l'équation $(2)$, on trouve :
   $$
   x_S - x_A = \frac{V_A^2 \cos^2(\alpha) \sin(\alpha)}{g} \cdot \frac{2g}{V^2} \cdot (x_S - x_A)
   $$
   (on rappelle que : $\sin(2\alpha) = 2 \cos(\alpha) \sin(\alpha)$.)

   A.N. : $\sin(2\alpha) = 1 \Rightarrow 2\alpha = 90^\circ \Rightarrow \alpha = 45^\circ$

8. a - On a : $x_G = V_A \cos(\alpha) + x_A$
   - Au point P, on obtient :
     $x_P = V_A \cos(\alpha) \cdot t_P + x_A$
     Donc : $t_P = \frac{x_P - x_A}{V_A \cos(\alpha)}$
     Alors : $t_P \approx \frac{17,8 - 2}{12 \cos(45^\circ)} \approx 1,86 \, s$

9. b - Calculons $V_P$ :
   - On a :
     $V_P = \sqrt{V_{P x}^2 + V_{P y}^2}$ avec :
     $V_{P x} = V_A \cos(\alpha)$
     $V_{P y} = -g t_P + V_A \sin(\alpha)$
   - Alors :
     $V_P = \sqrt{(12 \cos(45^\circ))^2 + (-10 x 1,86 + 12 \sin(45^\circ))^2} \approx 13,2 \, m.s^{-1} 
```

<!-- Page 184 -->

```markdown
# Exercice 2
Étude de la pile nickel-cadmium

## I- Première phase: chute libre verticale du parachiste
1. Le système (S) est en chute libre verticale, donc il soumis à son poids uniquement.
   - Par application de la 2ème loi de Newton, on a : 
   $$
   \mathbf{P} = m \mathbf{g}
   $$
   - Par projection sur l'axe $(Oz)$, on trouve :
   $$
   m a_z = \mathbf{P}
   $$
   Donc :
   $$
   a_z = \frac{\mathbf{P}}{m} = g
   $$

2. Les équations horaires du mouvement :
   - On a : $z_0 = g$
   - Donc :
   $$
   \frac{dz}{dt} = g
   $$
   - Par intégration, on trouve : $v_z = gt + C$
   - Et en a : $v_0(z=0) = 0 \Rightarrow C = 0$
   Donc : 
   $$
   v_z = gt
   $$

   - Et puisque $v_z = \frac{dz}{dt}$, donc :
   $$
   \frac{dz}{dt} = g
   $$
   - Par intégration, on trouve : $z = \frac{gt^2}{2} + C'$
   - À $t = 0$, on a $z(0) = 0 \Rightarrow C' = 0$
   Donc : 
   $$
   z = \frac{gt^2}{2}
   $$

   3. a — On a : $v_z = gt$
      - À la date $t_1$, on a : $v_1 = gt_1$
      - Donc : 
      $$
      t_1 = \frac{v_1}{g} = \frac{3.5}{10} = 0.35 \, s
      $$
      A.N.: $t_1 = 3.5 \, s$

      b — On a : $z = \frac{1}{2}gt^2$
      - À la date $t_1 = 3.5 \, s$, on trouve : $z_1 = \frac{1}{2}gt_1^2$
      - Donc : 
      $$
      z_1 = \frac{1}{2} \times 10 \times (3.5)^2 = 61.25 \, m
      $$
      A.N.: $z_1 = 61.25 \, m$
      - Durant cette phase, le système (S) parcourt une distance: $h = 61.25 \, m$.

## II- Deuxième phase: chute libre verticale avec frottement du parachiste
- Montrons l'équation différentielle du mouvement :
  - Les forces excercées sur le système (S) sont :
    - $\mathbf{P}$ : Poids de (S)
    - $\mathbf{F}$ : La force de frottement fluide,
    - $\mathbf{F_A}$ : Poussée d'Archimède (négligeé).
  - Par application de la 2ème loi de Newton on a :
  $$
  \mathbf{P} + \mathbf{F} + \mathbf{F_A} = m a_g
  $$
  - Par projection sur l'axe $(Oz)$, on trouve :
  $$
  mg - kv = m \frac{dv}{dt}.
  $$

# Exercice 4
Étude de l'électrolyse d’une solution électrolytique
1. Au voisinage de l'anode, se produit une oxydation de demi-éqation 
   $$
   6H_2O(l) \rightleftharpoons O_2(g) + 4H^+(aq) + 4e^-
   $$
   - Montrons que : 
   $$
   x = \frac{1}{4}(10^{-pH} - 10^{-pH_0})
   $$
   - Le tableau d'avancement associé à la demi-équation d'oxydant :
   | Équation | $6H_2O(l) \rightleftharpoons O_2(g) + 4H^+(aq) + 4e^-$ |
   |----------|-------------------------------------------------------|
   | État     | Avancement                                            |
   | Initial  | 0                                                     |
   | Intermédiaire | x                                              |
   | Final    | $0, \; x, \; 0, \; 0 + 4x$                          |
```


<!-- Page 185 -->

```markdown
D'après le tableau, on a : $n(H_3O^+) = n_0 + 4x$

Donc : $[H_3O^+]_t = [H_3O^+]_0 + 4x$

$$4x = [H_3O^+]_t - [H_3O^+]_0 \times V$$

$$x = \frac{[H_3O^+]_t - [H_3O^+]_0}{4}$$ avec $[H_3O^+] = 10^{-pH}$

a – Calculons la valeur de $x_1$ :

On a : $x_1 = \frac{1}{4} \sqrt{(10^{-pH} - 10^{-pH_0})}$

A.N. : $x_1 \approx \frac{1}{4} \times (10^{-3}) \approx 3,06 \times 10^{-3} \text{ mol}$

b – Déterminons le date $t_1$ :

D'après le tableau d'avancement, on a : $n(e^-) = 4x$

Donc, à la date $t_1$, on trouve : $n_1(e^-) = 4x_1$ avec $n_1(e^-) = \frac{|-x|\Delta t_1}{F}$

Alors : $$\Delta t_1 = \frac{4x_1 \times 10^4}{0,3} \approx 3,94 \times 10^3 \text{ s}$$

c – On a : $n_1(Ag) = 4x_1$

$$\frac{m_1}{M(Ag)} = 4x_1$$ 

$$\Rightarrow m_1 = 4x_1 \times M(Ag)$$

A.N. : $$m_1 = 4 \times 3,06 \times 10^{-3} \times 108 \approx 1,32 \text{ g}$$
```

<!-- Page 186 -->

```
# Devoir surveillé N° 5 - 3
## Niveau: 2BIOF

### Exercice 1
Étude du mouvement d’un solide sur un plan incliné

Un corps solide $S$ de masse $m = 2 \, \text{kg}$ est en mouvement sur un plan incliné d’un angle $\alpha = 25^\circ$ par rapport à l’horizontal sous l’action d’une force constante $\vec{F}$ dont la direction faisant un angle $\beta = 15^\circ$ l’axe $(O_x)$ la figure.

À l’instant $t = 0 \, \text{s}$, $S$ est confondu avec le point $A$, d’abscisse $x_A = 10 \, \text{m}$.

Étudions le mouvement de $G$ dans un repère $R(O, \vec{i}, \vec{j})$ lié à un référentiel terrestre supposé galiléen

1. En exploitant la courbe de la figure $\circ$ déterminer :
   - $a$ – La nature du mouvement de $G$.
   - $b$ – La valeur de la vitesse initiale $V_A$.
   - $c$ – L’accélération $a_x$ de $G$.
   
2. En appliquant la deuxième loi de Newton, déterminer les composantes de $\vec{R}$ la réaction du plan, et déduire la valeur du coefficient du frottement $K$.

3. Le centre $G$ du solide ($S$) passe par un point $B$ à l’instant $t_B$ avec une vitesse $V_B = 120 \, \text{m.s}^{-1}$ 
   - $a$ – Déterminer la valeur de $t_B$.
   - $b$ – Calculer la valeur de la distance $AB$.

   Donnée : $F = 20 \, \text{N} , \, g = 10 \, \text{m.s}^{-2}$

### Exercice 2
Étude du mouvement vertical d’une bille métallique

Cet exercice propose d’étudier la chute libre verticale d’une bille métallique, ainsi que son mouvement avec frottement dans la glycérine.

Étudions le mouvement de $G$ centre d’inertie de la bille dans un repère $R(O, \vec{j})$ lié à un référentiel terrestre supposé galiléen. La figure $\circ$.

À l’aide d’une caméra numérique on enregistre le mouvement de la bille. Les résultats obtenus ont permis de tracer la courbe de la ligne $\circ$ qui représente les variations de la vitesse de $G$ en fonction du temps. La droite $(D)$ représente la tangente à la courbe $v_G = f(t)$ à la date $t_B = 0,3 \, \text{s}$.

- La masse volumique de la bille: $\rho_1 = 7,8 \times 10^3 \, \text{kg.m}^{-3}$
- Le rayon de la bille: $R = 13 \, \text{mm}$
- Le volume de la bille: $V = \frac{4}{3} \pi r^3$
- La masse volumique de la glycérine: $\rho_2$

```


<!-- Page 187 -->

```markdown
# I-Étude du mouvement de chute libre verticale de la bille
À un instant $t_A = 0 \ \text{s}$ on libère la bille à partir du point A sans vitesse. Le centre d'inertie de la bille suit une trajectoire et atteint le point B à un instant $t_B = 0,3 \ \text{s}$. L’action de l’air sur la bille est supposée négligeable.

En appliquant le deuxième loi de Newton, exprimer l’accélération du centre d’inertie de la bille en fonction du vecteur du chape de pesanteur et déduire la nature du mouvement de la bille.

- Établir les équations horaires du mouvement de la bille.
- En exploitant la figure @ déterminer la valeur de l’intensité de la pesanteur $g$ et celle de la vitesse $v_B$.
- Calculer la distance AB.

## II-Étude du mouvement de la bille dans la glycérine
À un instant $t_B = 0,3 \ \text{s}$, la bille immerge dans la glycérine à la vitesse $v_B$. Plus de son poids, la bille est soumise dans la glycérine à la poussée d’Archimède $\vec{F_A} = -\rho_2Vg \ \hat{e}_V$ et à une force de frottement fluide $$\vec{f} = -6\pi R \vec{v}$$ où $n$ le coefficient de viscosité de glycérine et $R$ est le rayon de la bille.

En appliquant le deuxième loi de Newton montrer que l’équation différentielle du mouvement s’écrit sous la forme suivante: $$\frac{d\vec{x}}{dt} + \lambda \vec{C} = C,$$ en précisant l’expression de $\lambda$ en fonction de $\rho_1, \rho_2$ et $g$.

- Exprimer la vitesse limite $v_L$ en fonction de $\lambda$ et $C$. Déduire que: $$v_L = \frac{zgr^2}{9\pi} (P_1 - P_2)$$
- Déterminer l’expression de l’accélération initiale $a_B$ en fonction de $v_B, \lambda$ et $C$.
- La solution de l’équation différentielle peut s’écrire sous la forme suivante: $$v_G = A e^{-\lambda t} + B.$$
  - a - Déterminer l’expression de $t$, l’expression $B$ et celle de $A$ pour que soit solution de l’équation différentielle.
  - b - Déduire que l’expression de la vitesse $G$ est: $$v_G = (v_B - v_L)e^{\lambda(t_B - t)} + v_L ; \ \forall t \ge t_B$$
- Montrer que la tangente $(D)$ coupe l’axe du temps à un instant $t_B = t + \frac{t_B - t}{v_B - v_L}$.
- En exploitant la courbe de la figure @, déterminer la valeur de $t_B$, la valeur de la vitesse limite $v_L$ et celle de l’accélération $a_B$.
- Calculer la constante du temps $\tau$ et déduire la valeur de $\eta$ le coefficient de viscosité de la glycérine.
- Calculer la constante $C$ et déduire la valeur de la masse volumique $\rho_2$ de la glycérine.

Le tableau ci-dessous donne les valeurs de l’accélération et de la vitesse aux instants différents.

| Temps en $(s)$ | $t_B = 0,3 \ \text{s}$ | $t_1 = 0,32 \ \text{s}$ | $t_2 = 0,34 \ \text{s}$ | $t_3 = 0,36 \ \text{s}$ |
|----------------|------------------------|--------------------------|--------------------------|--------------------------|
| Vitesse en $(m.s^{-1})$  | 3                      | 2,73                     | 2,61                     |                          |
| Accélération en $(m.s^{-2})$ | $-7,14$                | $-6,43$                  | $-5,76$                  |                          |

# Exercice 3 
Étude d’une particule chargée dans un champ magnétique uniforme

Un faisceau de protons homogénéité pénètre à la même vitesse $V_0$ en un point $O$ d’une région de largeur $\ell$. Dans cette région règne un champ magnétique uniforme de vecteur $\vec{B}$ tel que: $$\vec{B} = \vec{B} \| \vec{V_0}$$.
Le faisceau quitte le champ magnétique en $S$ pour tomber sur l’écran en un point $B$.

- La masse du proton: $$m = 1,67 \times 10^{-27} \ \text{kg}$$
- La vitesse du proton: $$V_0 = 2 \times 10^6 \ \text{m.s}^{-1}$$
- L’intensité de champ magnétique: $$B = 4 \ \text{mT}$$
- La charge élémentaire: $$e = 1,6 \times 10^{-19} \ \text{C}$$
- Les distances: $$d = 3 \ \text{cm} ; L = 70 \ \text{cm}$$

1. Préciser le sens du vecteur $\vec{B}$.
2. Appliquer la relation fondamentale de la dynamique montrant que le mouvement d'un proton dans un champ magnétique uniforme est circulaire uniforme, en déterminant l'expression de son rayon.
3. Déduire l’expression du rayon de la trajectoire du proton en fonction de $B$, $e$, $v$, et $m$.
4. Montrez que: $$\sin \alpha = \frac{e \cdot \vec{B}}{m \cdot V_0}$$.
```

<!-- Page 188 -->

```markdown
5. On admet que est très petit $(tan \alpha \approx sin \alpha)$. Exprimer la déviation $D_m$ en fonction $B, e, V_0, m, \ell$ et $L$, puis calculer sa valeur.
   - Quelle est la nature du mouvement du proton sur le trajet $SB$ ?
   - Quelle est la durée mise pour parcourir le trajet $SB$ ?

## Exercice 4 
Étude de l'électrolyse d’une solution aqueuse

On réalise l'électrolyse d’une solution aqueuse de l’acide sulfurique $(2H^{+}_{(aq)} + SO^{2-}_{4(aq)})$ dans un électrolyseur à électrodes de graphite inattaquables.

1. Quelles sont les espèces chimiques présentes dans le mélange au début de l’électrolyse ?
2. Écrire les demi-équations des réactions possibles près de chaque électrode.
3. Au cours de cette électrolyse, on observe uniquement des dégagements gazeux dans les deux électrodes. Écrire l’équation de bilan de la réaction qui se produit au cours de l’électrolyse.

Cette électrolyse a été réalisée pendant une durée $\Delta t = 45 min$ à l’aide d’un générateur délivrant une intensité de courant constant $I = 11 A$.
   a. Calculer la quantité d’électricité consommée pendant cette électrolyse.
   b. Dresser le tableau d’avancement de la réaction globale de cette électrolyse.
   c. Calculer le volume du dioxygène formé au cours de cette électrolyse.

- Les couples $ox/red$ pouvant intervenir dans cette électrolyse : $H^{+}/H_{2} ; O_{2}/H_{2}O ; S_{O_{2}^{-}_{4}}/S_{O_{4}^{2-}}$.

## Données
- La constante de faraday : $F = 9,65 \times 10^{4} \text{C.mol}^{-1}$.
- Le volume molaire dans les conditions expérimentales : $V_M = 24.\text{mol}^{-1}$.

---

## Correction

## Exercice 1 
Étude du mouvement d’un solide sur un plan incliné

1. En exploitant la courbe déterminer :
   a. La trajectoire de $(S)$ est rectiligne et l’équation horaire de sa vitesse est affine donc son
   mouvement rectiligne uniformément varié.
   b. Déterminons la valeur $V_A$.
   D’après le graphe, on a : $V_A = 20 m.s^{-1}$
   c. Déterminons $a_x$.
   On a : $a_x = \frac{20-60}{0-10} = 4 m.s^{-2}$.

2. Déterminons la valeur de $R_N$.
   - Le système étudié: Le corps $(S)$.
   - Les forces extérieures exercées sur $(S)$ :
     - $\overrightarrow{P}$ : Son poids.
     - $\overrightarrow{R}$ : La réaction du plan horizontal.
     - $\overrightarrow{F}$ : une force constante.
   - On représente les forces sur le schéma :

   $$ 
   \begin{align*}
   \text{D'après la } 2^{ème} \text{ loi de Newton: } \overrightarrow{P} + \overrightarrow{R} + \overrightarrow{F} = m\overrightarrow{g} 
   \end{align*}
   $$

   Par projection sur les axes $(Ox)$ et $(Oy)$ on trouve
   $$
   \begin{align*}
   -\overrightarrow{P}.sin(\alpha) - R_T + F.cos(\beta) &= -m.a_x \\
   R_T &= -m.(a_x + g.sin(\alpha)) + F.cos(\beta) \\
   R_N &= m.g.cos(\alpha) - F.sin(\beta)
   \end{align*}
   $$

   A.N. : $R_T = -2 \times (4 + 10 \times sin(25)) + 20 \times cos(15)$
   $R_N = 2 \times 10 \times cos(25) - 20 \times sin(15)$.
   
   On trouve :
   $R_T = 2.87N$.
   $R_N = 12.95$.

   Calculons la valeur du coefficient de frottement $K$.

   $$ K = \frac{R_T}{R_N} = \frac{2.87}{12.95} \approx 0.22 $$

   a. Déterminons la valeur de $t_B$.
   On a : $V_G = a_x.t + V_A$.
   Au point B cette relation devient : $V_B = a_x.t_B + V_A$.
   Alors : $t_B = \frac{V_B - V_A}{a_x}$.
   A.N. : $t_B = \frac{120-20}{4} = 25 s$.

   b. Calculons la distance $AB$.
   On a : $x_G = \frac{a_x}{2} t^2 + V_A.t + x_A$.
   Au point B on trouve : $x_B = \frac{a_x}{2} t_B^2 + V_A.t_B + x_A$.
   Donc : $x_B - x_A = \frac{a_x}{2} t_B^2 + V_A.t_B$.
   Alors : $AB = \frac{1}{2} a_x t_B^2 + V_A.t_B$.
   A.N. : $AB = \frac{1}{2} (25) \times (25)^2 = 1750 m$.
```

<!-- Page 189 -->

```markdown
# Exercice 2 
## Étude du mouvement vertical d’une bille métallique

I-Étude du mouvement de chute libre vertical de la bille
1. Déterminons l'accélération de la bille
    - Le système étudié: La bille.
    - La force exercée sur la bille: Son poids $\vec{P}$.
        - Par application de la 2e loi de Newton, on a: $\vec{P} = m\vec{g}$
        - Par projection sur $(OZ)$, on trouve: $P = ma_z$
        - Donc: $a_z = \frac{P}{m} = g$
    - $\Rightarrow$ Le mouvement de la bille est rectiligne uniformément accéléré.

2. Les équations horaires du mouvement
    - L'équation de la vitesse:
        - Au point A: $a_z = g \Rightarrow \frac{dz}{dt} = g$
        - Par intégration on obtient: $v_z = g t + C_1$
            - À $t_0 = 0$, on a: $v_z(0) = 0$
            - Donc $C_1 = 0$
            - Alors: $v_z = gt$
    - L'équation du vecteur position:
        - On a: $v_z = g t \Rightarrow \frac{dz}{dt} = gt$
        - Par intégration on obtient: $z(t) = \frac{gt^2}{2} + C_2$
            - À $t_0 = 0$, on a: $z = 0$
            - Donc $C_2 = 0$.
            - Alors: $z = \frac{gt^2}{2}$
        
3. D'après la courbe de la figure (2)
    - On a: $g = \frac{3 \text{ m}}{0.3^2 \text{ s}^2} = 10 \text{ m.s}^{-2}$
    - À la date $t_B = 0.3$ s, on a: $V_B = 3 \text{ m.s}^{-1}$
    
4. Calculons la distance AB
    - On a: $z(t) = \frac{gt^2}{2}$
    - À l’instant $t_B$, on trouve $z_B = \frac{gt_B^2}{2}$
    - À.N.: $z_B = \frac{10 \times 0.3^2}{2} = 0.45 \text{ m}$
    - Donc: $AB = z_B - z_A = 0.45 \text{ m}  \quad z_A = 0$

II-Étude du mouvement de la bille dans la glycérine
1. Montrons l'équation différentielle du mouvement
    - Les forces exercées sur la bille sont:
        - $\vec{P}$. Son poids.
        - $\vec{F}_A$: Poussée d'Archimède.
        - $\vec{F}_f$: Force de frottement.
    - Par application de la 2e loi de Newton, on a:
        - $\vec{P} + \vec{F}_A + \vec{F}_f = m\vec{a}$.
        - Par projection sur la pente $(OZ)$, on trouve:
        $$ mg - P_z - 2 \gamma V_g - 6\pi R V_g = m \frac{d v_g}{dt} $$
        $$ \Rightarrow \rho_1 g - 2 \pi R^2 \gamma V_g = \rho_1 \frac{d v_g}{dt} $$
        - Les termes séparés donnent:
        $$ \frac{\rho_1}{\rho_1+2\pi R^3 V_g} = \frac{1}{4/3 \pi R^3} $$

2. Déduisons l'expression de la vitesse limite.
    - On a l'équation différentielle du mouvement:
    $$ \frac{d v_g}{dt} + \lambda v_g = C $$
    - En régime permanent, $v_G = v_L$ et donc $\frac{d v_g}{dt} = 0$
    - Alors: $ \lambda V_L = C $
    - D'où: $v_L = \frac{C}{\lambda}$ avec $ \lambda = \frac{g}{\frac{(1-\rho_2)}{\rho_1}} g$

3. Déterminons l'expression de $a_B$.
    - On a: $C + A v_G = C$
    - Au point B, on trouve: $a_B = C - A v_B$
    - On remplace la solution $v_G = Ae^{-t/\tau} + C$ dans l'équation différentielle:
        - $ \frac{d v_g}{dt} + A e^{-t/\tau} + A e^{-t/\tau} = C $
    - Alors: $ -A e^{-t/\tau} \left(1 - \tau \lambda\right) = C - A v_B $.
    - Pour que cette équation soit vérifiée $\forall t \ge t_B$, il faut que $1 - \tau\lambda = 0$ et $C - AB = 0$.
    - Alors: $\tau = \frac{1}{\lambda} = \frac{C - A}{v_L}$
    
4. Déterminons la valeur de $a_B$, de $v_L$ et celle de $a_B$.
    - D'après la courbe de la figure (2), on a:
    - $t_P = 0.72$ s et $v_L = 1 \text{ m.s}^{-1}$.
    - Et $a_B = -3.24 \text{ m.s}^{-2}$.

ELECTRON & 2BAC-PC-SM & Devoirs
```


<!-- Page 190 -->

```markdown
### 7) Calculons la valeur de $\tau$ et de $\eta$ :
- Calcul de $\tau$ :
  - On a : $t_D = t_B + \frac{V_B - V_L}{V_B - V_L}$
  - Alors : $\tau = \frac{(t_D - t_B)}{(V_B - V_L)}$
  - A.N. : $A.N. : \frac{V_B}{3} \Rightarrow \tau = \frac{(0.72 - 0.33)}{(1.6)} \approx 0,196 \, s$
- Calcul de $\eta$ :
  - On a : $\eta = \frac{A}{\tau}$
  - Donc : $A = \frac{9}{2R_1}$
  - Alors : $\eta = \frac{9}{2R_1} \cdot \frac{1}{\tau}$
  - D'où : $\eta = \frac{2R_1^2g}{9 \cdot 0,196}$
  - A.N. : $\eta = \frac{2 \times (13 \times 10^{-3}) \times 7 \times 8 \times 10^3}{9 \times 0,196} \approx 1,49 \, \text{kg.m}^{-1}.s^{-1}$
  
### 8) Calculons la valeur de $C$ et celle de $P_2$ :
- On a : $v_L = \frac{C}{\tau}$
- Donc : $v_L = C \times \tau$
- Alors : $C = \frac{v_L}{\tau}$
- A.N. : $C \approx 1,8 \, \text{m.s}^{-2} \approx 8,16 \, \text{m.s}^{-2}$

### A.N. : $C \approx \frac{C_{P1} - C_{P2}}{\rho_1} g$

Et on a : 
$$ C_{P1} = (P_1 - P_2) g $$
$$ \frac{C_{P1}}{g} = P_1 - P_2 $$ 
$$ P_2 = P_1 - \frac{C_{P1}}{g} $$ 
$$ P_2 = P_1 \left( 1 - \frac{g}{C_{P1}} \right) $$

### A.N. : $P_2 = 7,8 \times 10^{3} \approx 1,43 \times 10^{3} \, \text{kg.m}^{-3}$

---

### Exercice 3
Étude d’une particule chargée dans un champ magnétique uniforme.

1) D'après la règle des trois doigts de la main droite : 
   On trouve $\vec{B} \otimes$.
   
2) Examinons l'accélération $\vec{a}$ du proton dans le banc de Froment :
   - Le système étudié : Le proton.
   - Les forces exercées sur le proton :
     - $\vec{F} : \text{Force magnétique.}$
     - $P : \text{Poids du proton (négligeable)}$
   - D'après la deuxième loi de Newton, on a : $\vec{F} = m \vec{a}$
   - Puisque $\vec{F} = q\vec{V} \otimes \vec{B}$ donc $\vec{F} \perp \vec{B}$
   - Et on a : $\vec{V} = \sqrt{a} \, \vec{u}$
   - On déduit que : $\vec{F} = m \vec{a}$

3) Par projection la relation $\vec{F} = m \vec{a}$ dans le repère du Frenet, on trouve : 
   - $a_u = 0$
   - $a_{max} = F$ alors : $a_n = \frac{eBv}{m}$

4) Montrons que le mouvement du proton dans le champ magnétique est circulaire uniforme.
   - On a :
     - $a_n = \frac{eBv}{m} = 0$
   - Alors : 
     - $V = cte \quad R = \frac{mv}{eB}$

5) Donc : $\sin(\alpha) = \frac{eB}{m}$
   - Dans le triangle $HSC$, on a : $\sin(\alpha) = \frac{l}{R}$
   - D'où : $\sin(\alpha) = \frac{eB}{m}$

6) Trouvons l’expression de $D_m$ :
   - Dans le triangle $ABI$, on a : $D_m = \frac{AB}{IB}$
   - Avec $IB = L - OI$ et $AB = D_m$
   - Et puisque $l < L$, donc $O \ll C$ car $IB < l$
   - D'où : $\tan(\alpha) = \frac{D_m}{L}$

7) Trouvons l’expression de $D_m$ :
   - On a : 
     $$ D_m = \frac{eB}{m v_0} $$
     $$ D_m = \frac{eBL}{mv_0} $$

8) On déduit que :
   $$ D_m \approx 4,02 \times 10^{-3} \, m $$ 

Le proton quitte le champ magnétique au point $S$, donc la force magnétique est nulle, et puisque le poids du proton est négligeable, alors le mouvement est rectiligne uniforme sur le trajet $SA$.

9) Détermination de la durée de trajet $SA$ :
   Puisque le mouvement du proton sur le trajet $SA$ est rectiligne uniforme donc : 
   $$ D_t = \frac{SA}{V_0} \, (\ast) $$
   Et d'après la figure, on a : $\cos(\alpha) = \frac{l - l'}{SA}$
   D'où : 
   $$ SA = \frac{l - l'}{\cos(\alpha)} $$

10) On remplace l'équation $(\ast)$ :
    On trouve : 
    $$ D_t = \frac{L}{V_0 \cos(\alpha)} = 5,74 \times 10^{-3} \approx 0,33 \, s $$
    Et :
    $$ D_t \approx 3,5 \times 10^{-3} \, s $$
```

<!-- Page 191 -->

```markdown
# Exercice 4
Étude de l’électrolyse d’une solution aqueuse

1. Les espèces chimiques présentes dans le mélange au départ de l'électrolyse sont les ions $H^+$, $SO_4^{2-}$, et l'eau $H_2O$.
2. Les demi-équations possibles aux électrodes :
   - Au voisinage de l'anode se produit l'oxydation : 
     $$ 2H_2O \rightarrow O_2 + 4H^+ + 4e^- $$
     et 
     $$ 2SO_4^{2-} \rightarrow S_2O_2^{2-} + 2e^- $$
   - Au voisinage de la cathode se produit la réduction : 
     $$ 2H^+ + 2e^- \rightarrow H_2 $$

3. Équation bilan de la réaction :  
   Au cours de l'électrolyse il se forme des gaz aux électrodes, donc l’équation bilan de l'électrolyse est : 
   $$ 2H_2O \rightarrow O_2(g) + 4H^+(aq) + 2H_2(g) $$  
   Alors l’équation devient : 
   $$ 2H_2O \rightarrow O_2(g) + 2H_2(g) $$

   a.  $\alpha$ = on a : $Q = I \cdot \Delta t$  
   A.N. : $Q = 11 \, \text{A} \times 45 \, \text{s} \times 60 \, \text{s} = 2.97 \times 10^4 \, C$

   b. le tableau d'avancement associé à la réaction

   | Équation bilan            | $2H_2O \rightarrow O_2(g) + 2H_2(g) + n(e^-)$ |
   |---------------------------|-------------------------------------------------|
   | État                      | Avancement    | Quantité de matière en mol |
   | Initial                   | 0             | 0                           | 
   | Avancement                | $x$           | $2x$                        | $4x$                    |
   | Final                     | $x_{max}$     | $2x_{max}$                 | $4x_{max}$              |

   c. Calculons le volume de $O_2$ formé lors de l’électrolyse :  
   D’après le tableau d’avancement, on a : $n(O_2) = x$ et $n(e^-) = 4x$  
   Donc : 
   $$ n(O_2) = \frac{n(e^-)}{4} \, \text{avec} \, n(O_2) = \frac{Q}{F} $$
   $$ \Rightarrow n(O_2) = \frac{Q}{2F} \, \text{avec} \, n(O_2) = \sqrt{V(O_2)} \, V_m $$  
   $$ \Rightarrow V(O_2) = \frac{Q}{4F} \, V_m $$  
   A.N. : 
   $$ V(O_2) = \frac{2.97 \times 10^4 \times 24}{4 \times 96 \, 500} \approx 1.84 \, L $$
```

<!-- Page 192 -->

```markdown
# Devoir surveillé N° 5 – 4
## Niveau: 1B1OF

### Exercice 1
Étude du mouvement d’un ballon de volleyball dans le champ de pesanteur

Lors d'un match de volleyball un joueur a lancé le ballon à partir d'un point $A$ situé à l'altitude $H$ de la surface de la terre avec une vitesse $V_0$ qui fait un angle $\alpha$ avec l'horizontale, le joueur se trouve à une distance $d$ du filet qui monte de $h$ de la surface de la terre.

On étudie le mouvement de $G$ centre d'inertie du ballon dans un repère $R(O, \vec{i}, \vec{j}, \vec{k})$ lié à un référentiel terrestre supposé galiléen. La résistance de l’air est considérée négligeable. À l’aide d’un programme de traitement de l’imagerie progressive du mouvement du ballon on obtient les courbes $(A)$ et $(B)$ représentant les variations des valeurs algébriques des composantes $V_x(t)$ et $V_y(t)$ de la vitesse $V_G$ du centre d’inertie $G$ du ballon en fonction du temps.

#### Données: 
$H = 1,2 \, m ; h = 1,8 \, m ; d = 4 \, m ; D = 10 \, m ; g = 10 \, m.s^{-2}$

1. En appliquant la deuxième loi de Newton, établir les expressions des composantes $V_x(t)$ et $V_y(t)$ de la vitesse $V_G$.
2. Établir les expressions des équations horaires $x(t)$ et $y(t)$ du mouvement de $G$. En déduire l'expression latérale de l’équation de la trajectoire du mouvement de $G$.
3. En exploitant la courbe ci-contre :
   - a – Identifier les courbes $(A)$ et $(B)$.
   - b – Déterminer la valeur de la vitesse initiale $V_0$.
   - c – Déterminer la valeur de l’angle $\alpha$.
   - d – Déterminer la valeur de $t_s$ , correspond au passage de $G$ du sommet de la trajectoire.
4. Déterminer les coordonnées de $S$ sommet de la trajectoire de $G$.
5. Pour que le lancement du ballon soit correct elle doit satisfaire aux deux conditions suivantes: premièrement le ballon doit passer au-dessus du filet, deuxièmement le ballon doit tomber dans le champ de l’adversaire de longueur $D$. Le lancer étudié est-il correct ? Justifier la réponse.

### Exercice 2
Étude du mouvement d’une particule chargée

Un faisceau d’hélium $He^{2+}$ pénétre avec une vitesse $V_0$ dans une région où règne un champ magnétique uniforme $\vec{B}$, telle que $\vec{B}$ et $\vec{V_0}$ sont perpendiculaires entre eux (la figure ci-contre ).

#### Données:
- Charge élémentaire : $e = 1,6 \times 10^{-19} \, C$
- La masse de l'ion $He^{2+}$ : $m = 6,64 \times 10^{-27} \, kg$
- L’intensité du champ magnétique : $B = 1 \, T$

1. Préciser le sens du vecteur $\vec{B}$.
2. En appliquant la deuxième loi de Newton sur l’ion $He^{2+}$. Montrer que son mouvement est circulaire et déterminer l’expression du rayon $R$ sa trajectoire en fonction de $B$, $e$, $V_0$ et $m$.
3. Calculer la valeur du rayon de la trajectoire de la particule $He^{2+}$.
```

<!-- Page 193 -->

```markdown
# Exercise 3
Étude du mouvement d’une balle dans l’air

Le but de cet exercice est de modéliser la force de frottement visqueux exercée par l’air sur une balle de ping-pong, à partir de l’étude du mouvement de la chute verticale de cette balle dans l’air. (la figure ci-contre)

Étudions le mouvement de G centre d’inertie de la balle dans un repère $R(O, \vec{K})$ lié un référentiel terrestre supposé galiléen.

## Données

- Volume de la balle $V = 2,87 \times 10^{-5} \, \text{m}^3$
- Masse volumique de la balle $\rho_0 = 80,05 \, \text{kg/m}^3$
- Masse volumique de l’air $\rho_a = 1,3 \, \text{kg/m}^3$
- L'intensité du champ de pesanteur $g = 9,81 \, \text{N/kg}$
- L’intensité de la force de frottement $f = k v^2$
- L’intensité de la poussée d’Archimède $F_A = \rho g V$

Par un système d’acquisition convenable on obtient les variations de $v_c$ la vitesse de G centre d’inertie de la balle en fonction du temps (la courbe ci-contre)

En appliquant la deuxième loi de Newton montrer que l'équation différentielle du mouvement de la balle s'écrit sous la forme : 

$$
\frac{d^2 x_c}{dt^2} + B v^n = A,
$$ 

en précisant les expressions de A et B en fonction de $\rho_0, \rho_a, g$, et $V$.

Déduire que l’équation différentielle du mouvement du centre d’inertie de la balle est:

$$
\frac{d^2 x_c}{dt^2} + 0,151 v_c^n = 9,65.
$$

On donne $k = 3,46 \times 10^{-4} \, (SI)$

- Déterminer l’accélération initiale $a_0$ de la balle.
- Déterminer l’expression de la vitesse limite $v_l$ en fonction de n.
- En exploitant la courbe déterminer :
  - $a$ - La valeur la vitesse $v_1$ de la balle.
  - $b$ - Temps caractéristique $\tau$.
- En utilisant la méthode d’Euler, calculer les vitesses $v_1$ et $v_2$. On donne le pas de calcul $\Delta t = 10^{-1} s$.

# Exercise 4
Étude du mouvement orbital d’une planète autour du soleil

Saturne est la sixième planète du système solaire par ordre d'éloignement au Soleil, et la deuxième plus grande par la taille et la masse après Jupiter. Cet exercice vise à étudier le mouvement de Saturne dans le référentiel héliocentrique.

## Données

- Masse du Soleil $M_S = 2 \times 10^{30} \, \text{Kg}$
- La constante gravitationnelle $G = 6,6710^{-11} \, (SI)$
- La période de rotation de Saturne autour du Soleil $T_P = 29,44 \, ans$

- On considère que le mouvement de Saturne dans le référentiel héliocentrique est circulaire de rayon $r$.
- On suppose que Saturne est soumis uniquement à la force de gravitation exercée par le Soleil.
- En appliquant la deuxième loi de Newton montre que le mouvement circulaire de Saturne est uniforme.
- Trouver l’expression du rayon r en fonction de $M_S, \, G, \, T_P$ et calculer sa valeur.
- Calculer la valeur de la vitesse $V$ de Saturne autour du Soleil.

# Correction

## Exercise 1
Étude du mouvement d’un ballon de volleyball

1. Trouvons les composantes de la vitesse $\vec{V}_G$.
   La balle est en chute libre, d’après la relation fondamentale de la dynamique on obtient:

   $$
   \vec{P} = m \vec{a}_G \quad \text{avec } \vec{P} = m \vec{g} 
   $$

   Par projection dans le repère $R(O, \vec{i}, \vec{j}, \vec{k})$

   on trouve :
   - $a_x = 0$
   - $a_y = -g$
   - $a_z = 0$

2. Par intégration on obtient :
   $$
   \vec{v} = \vec{v}_0 + \vec{a} t
   $$

   Avec : 
   - $v_{0x} = v_0 \cos(\alpha)$
   - $v_{0y} = v_0 \sin(\alpha)$
   - $v_{z} = 0$

3. Finalement on trouve :
   $$
   \begin{cases}
   v_{x} = v_0 \cos(\alpha) \\
   v_{y} = -gt + v_0 \sin(\alpha) \\
   v_{z} = 0
   \end{cases}
   $$
```

<!-- Page 194 -->

```markdown
# Trouvons les expressions des équations horaires $x(t)$ et $y(t)$ du mouvement de $G$

On a: 
$$
\vec{G} = \begin{cases}
v_x = v_0 \cos(\alpha) \\
v_y = -g t + v_0 \sin(\alpha) \\
v_z = 0
\end{cases}
$$

Donc : 
$$ 
\frac{dx}{dt} = v_0 \cos(\alpha) 
$$ 
$$
\frac{dz}{dt} = 0 
$$

Par intégration, on obtient :

$$
\begin{cases}
x_G = v_0 \cos(\alpha) \cdot t + x_A \\
y_G = -\frac{1}{2}gt^2 + v_0 \sin(\alpha) \cdot t + y_A \\
z_G = z_A
\end{cases}
$$

Avec : 
$$
y_A = H \\
z_A = 0
$$

Alors :
$$
\begin{cases}
x_G = v_0 \cos(\alpha) \cdot t \quad (a) \\
y_G = -\frac{g}{2v_0^2\cos^2(\alpha)}x_G^2 + \frac{x_G}{v_0 \cos(\alpha)} + H \quad (b) \\
z_G = 0
\end{cases}
$$

Déterminons l'équation de la trajectoire. D'après l'équation (a) on trouve : $t = \frac{x_G}{v_0 \cos(\alpha)}$

On remplace dans l'équation (b) on trouve :
$$
y_G = -\frac{g}{2v_0^2\cos^2(\alpha)}x_G^2 + \frac{x_G}{v_0 \cos(\alpha)} + H
$$

3 a - Identifions les courbes (A) et (B).
D'après la question (0) on constate que la composante $v_x = F(t)$ est constante donc c'est la courbe (A) et la composante $v_y = f(t)$ est fonction affine, donc c'est la courbe (B)

b - Déterminons la vitesse initiale $v_0$ D'après la courbe, on a: $v_0 = 13 \text{ m.s}^{-1}$ et $v_y = 4 \text{ m.s}^{-1}$

On en sait que: $v_0 = \sqrt{v_0^2 + v_{0y}^2}$

A.N.: $v_0 = \sqrt{4^2 + 132 + 13, 60 \text{ m.s}^{-1}$

c - Déterminons la valeur de l'angle $\alpha$

On a: 
$$
v_y = v_0 \sin(\alpha)
$$
Donc: 
$$
\sin(\alpha) = \frac{v_y}{v_0}
$$

A.N.: $\sin(\alpha) = \frac{4}{13} \Rightarrow \alpha \approx 17,1^\circ$

# Exercice 2

Étude du mouvement d'une particule chargée

1. Par application de la règle des trois doigts de la main droite on trouve: 
$$ \text{R} \, \square. $$

2. Montrer que le mouvement de l’ion $He^{2+}$ est circulaire et uniforme:
La particule $He^{2+}$ est soumise à la force de Lorentz $\vec{F}$ de poids de la particule est négligeable $)$ D’après la deuxième loi de Newton on a: 
$$\vec{F} = -m\vec{a} \quad \text{avec} \quad \vec{F} = q\vec{v} \wedge \vec{B}$$

On trouve: 
$$
\begin{cases}
0 = m_a \\
F = ma \\
q \cdot \vec{B} \cdot \sin(\alpha) = \frac{m v^2}{R} 
\end{cases}
$$
$$
V = \text{cte} \Leftrightarrow R = \frac{m v}{q \cdot B} \\
V = V_0
$$
$$
R = \frac{m v_0}{q \cdot B} = \text{cte}
$$
Donc le mouvement de l’ion est circulaire uniforme de rayon $R = \frac{m v_0}{q \cdot B}$
```


<!-- Page 195 -->

```markdown
# Exercice 3 Étude du mouvement d’une balle dans l’air

1. Montons que l’équation différentielle du mouvement de la balle s’écrit sous la forme suivante : 
   $$ \frac{d^2y}{dt^2} + By^2 = A $$
   Le système étudié {La balle}
   - Les forces extérieures exercées sur la balle :
     - $P$: Poids de la balle
     - $F_A$: Poussée d’Archimède
     - $f$: Force de frottement fluide
   - D’après le principe fondamental de la dynamique, on a : 
     $$ P = F_A + f + m\vec{g} $$
   - Par projection sur l’axe (Oz) on obtient :
     $$ P - F_A - f - ma = 0 $$
     $$ \Rightarrow \rho_0 V g - \rho V g - k V^2 = \rho_0 V \frac{d^2y}{dt^2} $$
     $$ \sqrt{g(\rho - \rho_0)} - \frac{k}{\rho_0 V} = \frac{d^2y}{dt^2} $$
     $$ \frac{d^2y}{dt^2} + Bv^2 = A \text{ avec } A = \frac{g(\rho - \rho_0)}{\rho_0} \text{ et } B = \frac{k}{\rho V} $$

2. Déterminons l’expression de la vitesse limite $v_L$.
   On a :
   $$ \frac{dx}{dt} + 0,151 v^2 = 9,65 $$
   En régime permanent cette équation devient :
   $$ \frac{dv}{dt} = 0 $$
   Puisque $v_L = cte\ dans\ cette\ équation : \frac{dv}{dt} = 0$
   Donc l’équation devient : 
   $$ 0,151 v_L^2 = 9,65 $$
   Alors : 
   $$ v_L = \sqrt{\frac{9,65}{0,151}} $$

   3. D’après la courbe, on a : $v_L = 8m.s^{-1}$  
   - D’après la courbe, on a : $t \approx 0,83s.$
   - Déduisons la valeur de $n$.
     On a : 
     $$ v_L = \sqrt{\frac{63,91}{n}} \Rightarrow \ln(v_L) = \frac{1}{n} \ln(63,91) $$
     Alors : 
     $$ n = \frac{\ln(v_L)}{\ln(8)} $$

4. Calculons les vitesses $v_1$ et $v_2$.
   On a : 
   $$ a_1 : (9,65 - 0,151v_1^2) \ (a) $$
   $$ v_{1+1} = v_1\Delta t + v_i \ (b) $$
   - Pour $t = 0$ l’équation (b) devient :
     $$ v_1 = a_0 \Delta t + v_0 $$
     A.N. : $v_1 = 9,65 \times 10^{-1} + 0 = 9,65 \times 10^{-1} m.s^{-1}$
     On trouve : $a_1 = 9,51 m.s^{-2}$

   - Pour $t = 1$ l’équation (b) devient : 
     $$ v_2 = v_1 + a_1\Delta t $$
     On trouve : 
     $$ v_2 = 9,51 \times 10^{-1} + 9,65 \times 10^{-1} $$
     On trouve : $v_2 = 1,92 m.s^{-1}$

# Exercice 4 Étude du mouvement orbital d’une planète autour du soleil

1. Montrons que le mouvement de Saturne est circulaire uniforme.
   - Le système étudié: La planète saturne $P$
   - La force exercée sur la planète est: $F_s/P$
   - D’après la deuxième loi de Newton, on a : 
     $$ F_s/P = M_ap $$
     $$ G M_{s} M_p = \frac{r^2}{r^2} \Rightarrow a_p = \frac{G M_s}{r^2} $$
   - Par projection dans la base de Frenet on trouve :
     $$ a_t = 0 $$
     $$ a_n = \frac{G M_s}{r^2} $$

2. On a donc :
   $$ \Rightarrow v = Cte $$
   $$ a_n = \frac{G M_s}{r^2} $$
   Puisque $V = Cte$ et la trajectoire du centre d’inertie de Saturne est circulaire, alors son mouvement est circulaire uniforme.
  
3. Trouvons l’expression du rayon du mouvement de Saturne autour du Soleil.
   - On a : 
     $$ a_n = \frac{G M_s}{r^2} $$
     $$ r = \frac{G M_s}{r^2} $$
   - Alors : 
     $$ r = GM_s T_p^2 \ (a) $$
   - En notant : 
     $$ D = 2 \pi r T_P $$

On remplace (b) dans (a) on obtient : 
$$ r = \frac{G M_s T^2}{4 \pi^2} $$
```

<!-- Page 196 -->

```
Donc: $r^3 = \frac{g M_S T^2}{4\pi^2}$

Alors: $r = \sqrt[3]{\frac{g M_S T^2}{4\pi^2}}$

A.N.: $r = \sqrt[3]{6.67 \times 10^{-11} \times 10^{30} \times (29.44 \times 365 \times 24 \times 3600)^2 \over 4\pi^2}$

On trouve: $r \approx 1,43 \times 10^{12} \text{ m}$

---

3ᵉ Calculons la valeur de la vitesse linéaire $V$ du mouvement de Saturne au autour du Soleil.

On a: $V = \frac{2\pi r}{T_P}$

A.N.: $V = \frac{2 \times \pi \times 1,43 \times 10^{12}}{29.44 \times 365 \times 24 \times 3600}$

On trouve: $V \approx 9,68 \times 10^3 \text{ m.s}^{-1}$
```

<!-- Page 197 -->

```markdown
# Devoir surveillé N° 5 – 5  
**Niveau: 1BIOF**

## Exercice 1  
Étude du mouvement d’une bille dans le champ de pesanteur

On lance une bille métallique de masse $m$ à l’instant $t = 0$ avec une vitesse $\mathbf{v_0}$ faisant un angle $\alpha$ avec le plan horizontal. On étudie le mouvement de $G$ centre d’inertie de la bille dans un repère $R(O, \mathbf{i}, \mathbf{j})$ lié à un référentiel terrestre supposé galiléen. La résistance de l’air est considérée négligeable (voir la figure ).

À l’aide d’un programme de traitement de l’imagerie progressive du mouvement de la bille on obtient les courbes (A) et (B) représentant les variations des valeurs algébriques des composantes $V_x(t)$ et $V_y(t)$ de la vitesse $\mathbf{V_g}$ du centre d’inertie $G$ de la bille en fonction du temps (la figure ).

1. En appliquant la deuxième loi de Newton, établir les expressions des composantes $V_x(t)$ et $V_y(t)$ de la vitesse $\mathbf{V_g}$ du centre d’inertie $G$ de la bille.
2. Établir les expressions des équations horaires $x(t)$ et $y(t)$ du mouvement de $G$. En déduire l’expression latérale de l’équation de la trajectoire du mouvement de $G$.
3. En exploitant la courbe ci-contre :
   - a – Déterminer la valeur de la vitesse initiale $V_0$  
   - b – Déterminer la valeur de l'angle $\alpha$  
   - c – Déterminer la valeur de date $t_s$, correspond au passage de $G$ du sommet de la trajectoire.  
4. Déterminer les coordonnées de $S$ sommet de la trajectoire de $G$.  
5. Déterminer les coordonnées de $P$ point d’impact de la bille avec l’axe des abscisses $(Ox)$.  
6. Calculer la valeur de la bille en $P$. On donne : $g = 9,81 \, \text{N/kg}$.

## Exercice 2  
Étude du mouvement d’une particule chargée dans un champ magnétique

Un faisceau d’ions $Al^{3+}$ pénètre avec une vitesse $\mathbf{V_0}$ dans une région où règne un champ magnétique uniforme $\mathbf{B}$, telle que $\mathbf{B}$ et $\mathbf{V_0}$ sont perpendiculaires entre eux (la figure ci-contre).

### Données
- Charge élémentaire: $e = 1,6 \times 10^{-19} \text{C}$
- La vitesse de l'ion: $Al^{3+}: V_0 = 4,45 \times 10^5 \, \text{m.s}^{-1}$
- La masse de l'ion: $Al^{3+}: m = 44,82 \times 10^{-27} \text{Kg}$
- L’intensité du champ magnétique: $B = 1,5 \, T$

1. Préciser le sens du vecteur $\mathbf{B}$.
2. En appliquant la deuxième loi de Newton sur l’ion $Al^{3+}$. Montrer que son mouvement est circulaire et en déterminant l’expression du rayon $R$ sa trajectoire en fonction de $B$, $e$, $V_0$.
3. Calculer la valeur du rayon de la trajectoire de la particule $Al^{3+}$.
```

<!-- Page 198 -->

```markdown
# Exercice 3

Étude du mouvement d’une balle dans un liquide

Le but de cet exercice est de modéliser la force de frottement visqueux exercée par le glycérol sur une balle métallique, à partir de l’étude du mouvement de la chute verticale de cette balle dans une éprouvette graduée remplie en glycérol. (La figure ci-contre)

Étudions le mouvement de G centre d’inertie de la bille dans un repère \( R(O,K) \) lié au référentiel terrestre supposé galiléen.

## Données
- Volume de la bille \( V = 5,24 \times 10^{-6} \, m^3 \)
- Masse volumique de la bille \( \rho_1 = 2700 \, kg/m^3 \)
- Masse volumique de glycérol \( \rho_2 = 1260 \, kg/m^3 \)
- L’intensité du champ de pesanteur \( g = 9,81 \, N/kg \)
- L’intensité de la force de frottement \( F = k v^2 \)
- L’intensité de la poussée d’Archimède \( F_A = \rho_2 V g \)

Par un système d’acquisition convergeant on obtient les variations de \( v_G \) la vitesse de G centre d’inertie de la bille en fonction du temps (la courbe ci-contre)

1. En appliquant la deuxième loi de Newton montrer que l’équation différentielle du mouvement s’écrit sous la forme : 

   $$ \frac{d v_G}{dt} + B v_G = A $$

   en précisant les expressions de \( A \) et \( B \) en fonction de \( \rho_1 , \rho_2 , g , k , \) et \( V \).

2. Déduire l’équation différentielle est :

   $$ \frac{d v_G}{dt} = 17,46 \, g + 5,23 .$$

   On donne \( k = 0,247 \, (SI) \).

3. Déterminer l’accélération initiale \( a_0 \).
4. Déterminer l’expression de la vitesse limite \( v_L \) en fonction de \( n \).
5. En exploitant la courbe déterminer :

   - \( a \) – La valeur la vitesse limite \( v_L \).
   - \( b \) – Temps caractéristique \( \tau \).

6. Déduire la valeur de \( n \).
7. En utilisant la méthode d’Euler, calculer les vitesses \( v_1 \) et \( v_2 \). On donne le pas de calcul \( \Delta t = 0,005 \).

---

# Exercice 4

Étude du mouvement orbital d’une planète autour du soleil

Jupiter est la cinquième planète du système solaire par ordre d'éloignement au Soleil, et la plus grande par la taille et la masse. Cet exercice vise à étudier le mouvement de Jupiter dans le référentiel héliocentrique.

## Données
- Masse du Soleil \( M_S = 2 \times 10^{30} \, kg \)
- La constante gravitationnelle \( G = 6,6710 \times 10^{-11} \, (SI) \)
- La période de rotation de Jupiter autour du Soleil \( T_J = 11,86 \, ans \)

On considère que le mouvement de Jupiter dans le référentiel héliocentrique est circulaire de rayon \( r \).

On suppose que Jupiter est soumis uniquement à la force de gravitation exercée par le Soleil.

1. En appliquant la loi de Newton montrer que le mouvement circulaire de Jupiter est uniforme.
2. Trouver l’expression de \( r \) en fonction de \( M_S , G , J \) et calculer sa valeur.
3. Calculer la valeur de la vitesse \( V \) du mouvement de Jupiter autour du Soleil.

---

# Exercice 5

Étude de l’électrolyse d’une solution électrolytique

On réalise l’électrolyse d’une solution aqueuse de nitrate d’argent \( (Ag^+(aq) + NO_3^-(aq)) \), en mettant cette solution dans un électrolyseur en faisant circuler un courant électrique d’intensité \( I = 1,24 \, A \) entre deux électrodes de graphite \( (A) \) et \( (B) \) de l’électrolyseur pendant une durée de \( 75 \, min \).

On observe pendant l’électrolyse la formation d’un dépôt d’argent sur l’électrode \( (B) \ et un dégagement gazeux de dioxygène à niveau d’électrode \( A \).

## Données
- La constante de Faraday : \( F = 96500 \, C \cdot mol^{-1} \)
- Les équations mises en jeu : \( Ag^+(aq)/Ag(s) \) et \( O_2(g)/H_2O(l) \)
- La valeur en mols dans les conditions de l’expérience : \( V_m = 22,4 \, L \cdot mol^{-1} \)
```

<!-- Page 199 -->

```markdown
# Recevoir le numéro de la question et écrire à côté, la réponse juste parmi les réponses proposées, sans aucune justification, ni explication.

## 1. L'électrolyse est une transformation :

- Spontanée
- Rapide
- Forcée
- Acido-basique

### Lors de cette électrolyse l'électrode : (A)

- La cathode
- L'anode
- Siège d'une réduction
- L'électrode négative.

### La réaction qui se produit au niveau de l'électrode (B)

$$ 
Ag^{+}(aq) + e^{-} \Longrightarrow Ag(s) 
$$

$$ 
2H_2O(l) \Longrightarrow O_2(g) + 4H^{+}(aq) + 4e^{-} 
$$

$$ 
Ag(s) \Longrightarrow Ag^{+}(aq) + e^{-} 
$$

### Le volume de dioxygène formé pendant la durée $\Delta t = 75min$ est :

- $V(O_2) \approx 0,31L$
- $V(O_2) \approx 0,31mL$
- $V(O_2) \approx 1,24L$
- $V(O_2) \approx 0,62L$

## Correction

## Exercice 1 : Étude du mouvement d’une balle dans le champ de pesanteur.

### 1. Trouvons les composantes de la vitesse $\vec{V_G}$.

La balle est en chute libre, d’après la relation fondamentale de la dynamique on obtient :

$$ 
\vec{P} = m \vec{a} \quad \text{avec} \quad \vec{P} = m \vec{g} 
$$

Alors : $m\vec{g} = m\vec{a} \Rightarrow \vec{g} = \vec{a}$

Par projection dans le repère $R(O, \hat{i}, \hat{j}, \hat{k})$ :

on trouve :

$$ 
\vec{a} = 
\begin{cases} 
a_x = 0 \\ 
a_y = -g \\ 
a_z = 0 
\end{cases} 
$$

Par intégration on obtient : $\vec{V_G}$

Avec : $\vec{V_0}$

$$ 
\begin{cases} 
v_{0x} = v_0 \cos(\alpha) \\ 
v_{0y} = v_0 \sin(\alpha) \\ 
v_{0z} = 0 
\end{cases} 
$$

On trouve : $\vec{V_G}$

$$ 
\begin{cases} 
v_x = v_0 \cos(\alpha) \\ 
v_y = -gt + v_0 \sin(\alpha) \\ 
v_z = 0 
\end{cases} 
$$

### 2. Trouvons les expressions des équations horaires $x(t)$ et $y(t)$ du mouvement de $G$.

$$ 
\begin{cases} 
v_x = v_0 \cos(\alpha) \\ 
v_y = -gt + v_0 \sin(\alpha) \\ 
v_z = 0 
\end{cases} 
$$

Par intégration, on obtient :

$$ 
\begin{cases} 
x_G = v_0 \cos(\alpha) \cdot t + x_0 \\ 
y_G = -\frac{g}{2} t^2 + v_0 \sin(\alpha) \cdot t + y_0 \\ 
z_G = z_0 
\end{cases} 
$$

### D’après l’équation (a) on trouve : $t = \frac{x_G}{v_0 \cos(\alpha)}$.

### On remplace $t$ dans l’équation (b) on trouve :

$$ 
y_G = \frac{-g}{2v_0^2\cos^2(\alpha)} x_G^2 + \frac{v_0 \sin(\alpha)}{v_0 \cos(\alpha)} x_G + y_0 
$$

### a - Identifions les courbes (A) et (B).

D'après la question 0 on constate que la composante $v_x = F(t)$ et constante donc c'est la courbe (A) et le composant $v_y = f(t)$ est fonction affine; donc c'est la courbe (B)

### b - Déterminons la vitesse initiale $v_0$.

D'après la courbe on a : $v_{0x} = 10, 5 m.s^{-1}$ et $v_{0y} = 17m.s^{-1}$.

On en sait que : 

$$ 
A.N. : v_0 = \sqrt{v_{0x}^2 + v_{0y}^2} 
$$

$$ 
A.N. : v_0 = \sqrt{100 + 172 + 20m.s^{-1}} 
$$

### c - Déterminons la valeur de l’angle $\alpha$.

Sur $a : v_{0y} = v_0 \sin(\alpha)$. Donc:

$$ 
\sin(\alpha) = \frac{v_{0y}}{v_0} 
$$

$$ 
\Rightarrow \sin(\alpha) = \frac{17}{20} \Rightarrow \alpha \approx 58^\circ 
$$

### d - Déterminons la date $t_s$ correspond au passage de $G$ au sommet de la trajectoire.

Au sommet de la trajectoire, le composante $v_y$ est nulle ($v_y = 0$).

Donc d’après la courbe (B) on trouve : $t_s = 1, 7s$.

---

ELECTRON & 2BAC-PC-SM & Devoirs
```


<!-- Page 200 -->

```markdown
### 1. Déterminons les coordonnées du sommet de la trajectoire de G.
On a: 
$$
\begin{align*}
x_s & = v_0 \cdot \cos(\alpha), \\
y_s & = -\frac{1}{2} g t_s^2 + v_0 \cdot \sin(\alpha) \cdot t_s, \\
z_s & = 0.
\end{align*}
$$
Alors:
$$
\begin{align*}
x_s & = 10,5 \times 1,7 = 35,6 \, m, \\
y_s & = -\frac{1}{2} \times 10 \times 1,7^2 = 14,45 \, m, \\
z_s & = 0.
\end{align*}
$$

### 2. Déterminons les coordonnées de P point d'impact de la bille avec l'axe des abscisses (Ox).
Le point P se trouve sur l'axe (Ox).
$$
\begin{align*}
x_P & = 2x_s \\
y_P & = 0 \\
z_P & = 0 
\end{align*}
$$
Donc: $OP = 2x_s$.

### 3. Calculons la valeur de la vitesse de la bille en P.
On a:
$$
\begin{align*}
v_x & = v_0 \cdot \cos(\alpha) \\
v_y & = -g \cdot t_P + v_0 \cdot \sin(\alpha) \, \text{avec} \, t_P = 2t_s \\
v_z & = 0
\end{align*}
$$
A.N.: $v_P$
$$
\begin{align*}
v_x & = 10,5 \, m.s^{-1}, \\
v_y & = -10 \times 2 \times 1,7 + 17 \, = -17 \, m.s^{-1}, \\
v_z & = 0 \, m.s^{-1}.
\end{align*}
$$

Et on sait que:
$$
v_P = \sqrt{v_x^2 + v_y^2} = \sqrt{12^2 + (-17)^2} = 20 \, m.s^{-1}.
$$

### Exercice 2
**Étude du mouvement d’une particule chargée dans un champ magnétique**

1. Par application de la règle des trois doigts de la main droite on trouve: $\vec{B} \cdot \cdot \cdot \cdot$.
2. Montrer que le mouvement l’ion $Al^{3+}$ est circulaire et uniforme:
   La particule $Al^{3+}$ est soumise à la force de Lorentz $\vec{F}$ (le poids de la particule est négligeable) 
   D’après le deuxième loi de Newton on a:
   $$ 
   \vec{F} = m \vec{a} \quad \leftrightarrow \quad 
   \begin{cases}
   \vec{F} = m_a \vec{a} \\
   \vec{F} = q \cdot \vec{V} \cdot \sin(\alpha) = \frac{mV^2}{R}
   \end{cases} 
   $$

   $$ 
   \begin{align*}
   V & = \text{cte} \\
   mV & = q \cdot B
   \end{align*} 
   $$

3. Calculons la valeur du rayon de la trajectoire de la particule $Al^{3+}$.
   On a:
   $$ R = \frac{mV_0}{3 \cdot e \cdot B} $$
   Donc le mouvement de l’ion $Al^{3+}$ est circulaire uniforme de rayon $R = \frac{mV_0}{3 \cdot e \cdot B}$.
   $$
   R = \frac{44.82 \times 10^{-27} \cdot 4.5 \times 10^5}{3 \times 1.6 \times 10^{-19} \times 1.5}.
   $$
   On trouve: $R \approx 4,43 \times 10^{-2} \, m = 4,43 \, cm$.

### Exercice 2
**Étude du mouvement d’une bille dans un liquide**

- Montrons que l’équation différentielle du mouvement de la bille est: 
$$ \frac{d^2x}{dt^2} + Bv_0^2 = A $$
- **Le système étudié {La bille}**
  - Les forces extérieures exercées sur la bille:
    - $\vec{P}$: Poids de la bille 
    - $\vec{F_A}$: Poussée d’Archimède 
    - $\vec{F}$: Force de frottement fluide 
  - D’après le principe fondamental de la dynamique on a: 
  $$ \vec{P} + \vec{F_A} + \vec{F} = m \vec{a} $$
  - Par projection sur l’axe $(Oz)$ on obtient:
  $$ \rho \cdot V_g - \rho \cdot V - kv^2 = \rho_1 \cdot \frac{dv}{dt} $$
  avec $$ \frac{v(\rho_1 - \rho_2)}{\rho_1} - k \cdot \rho_v \cdot \frac{dv}{dt} $$

4. Déduisons l’équation différentielle du mouvement de la bille.
   On a:
   $$ \frac{d^2x}{dt^2} + Bv^2 = A $$
   Avec: $A = \frac{g(\rho_1 - \rho_2)}{\rho_0}$
   Et: $B = k \cdot \frac{p_1}{\rho_1} \approx 17,46 \, (SI).$
   On remplace A et B par leurs valeurs dans l’équation différentielle, on trouve:
   $$ \frac{dx}{dt} + 17,46v^2 = 5.23.$$

5. Déterminons l’accélération initiale $a_0$.
   À $t_0 = 0$ l’équation différentielle devient: $a_0 + 17,46v_0^2 = 5.23 \, A_0 = 0$
   On a: $a_0 = 5.23 \, m.s^{-2}$.

6. Déterminons l’expression de la vitesse limite $v_L$.
   $$ \frac{dv_L}{dt} = 17,46v_L^2 = 5.23 $$
   En régime permanent cette équation devient:
   $$ \frac{dv_L}{dt} + 17,46v_L = 5.23. $$

7. Donc l’équation devient:
   $$ v_L = \sqrt{0.3}.$$
   - D’après la courbe, on a: 
   $$ v_L \approx 57 \, m.s^{-1}. $$
```

<!-- Page 201 -->

```markdown
## 6 Déduisons la valeur de n.
On a: $v_L = \sqrt[3]{3}$ avec $\sqrt[0.3} = (0.31)^{1/n}$
Donc: $\ln(v_L) = \frac{1}{n} \ln(0.3)$  
Alors: 
$$
n = \frac{\ln(v_L)}{\ln(0.3)}
$$
A.N.: $n \approx 7.54$

## Calculons les vitesses $v_1$ et $v_2$.
On a: 
$$
\begin{align*}
a_1 & = 5.23 - 17.46\, (a) \\
v_{t+1} & = a_{u} \Delta t + v_1
\end{align*}
$$
* Pour $i = 0$ l’équation (b) devient $v_1 = a_0 \Delta t + v_0$  
A.N.: $v_1 = 5.23 \times 0.005 + 0 = 2.61 \times 10^{-2}\, m.s^{-1}$

* Pour $i = 1$ l’équation (a) devient 
$$
a_1 = 5.23 - 17.46, A.N.: a_1 = 5.23 - 17.46 \approx 2.61 \times 10^{-2}
$$

* Pour $i = 1$ l’équation (b) devient $v_2 = a_1 \Delta t + v_1$  
A.N.: $v_2 \approx 4.77 \times 0.005 + 2.61 \times 10^{-2}$  
On trouve: $v_2 \approx 5 \times 10^{-2}\, m.s^{-1}$

## Exercice 4 Étude du mouvement orbital d'une planète autour du soleil

### Montrons que le mouvement de Jupiter est circulaire uniforme.
Le système étudié: Jupiter  
La force exercée sur Jupiter est: $F_{S/P}$  
D'après la deuxième loi de Newton, on a: 
$$
F_{S/P} = M a_j \Leftrightarrow \frac{G M_s M}{r^2} = M a_j
$$
$$
\Rightarrow a_j = \frac{G M_s}{r^2} \vec{n}
$$
Par projection dans la base de Frenet on trouve:
$$
a_u = 0 \quad \quad a_n = \frac{G M_s}{r^2}
$$
$$
\text{avec} \quad \frac{dV}{dt} = 0
$$
$$
V = Cte \quad \quad a_n = \frac{G M_s}{r^2}
$$
Puisque $V = Cte$ et la trajectoire du centre d’inertie de la planète est circulaire, alors son mouvement est circulaire uniforme.

### Trouvons l’expression du rayon $r$ de la trajectoire de Jupiter.
On a: 
$$
a_n = \frac{G M_s}{r^2} 
$$
Alors: $r = \frac{G M_s}{a_n^2} \quad (a)$  
Et on a: 
$$
r = v\omega \quad \text{avec} \quad \omega = \frac{2\pi}{T_j}
$$
Donc: 
$$
V = \frac{2\pi r}{T_j}
$$
On remplace (b) dans (a) on obtient:
$$
r^3 = \frac{G M_s T_j^2}{4 \pi^2}
$$
Alors: 
$$
r = \sqrt[3]{\frac{G M_s T_j^2}{4 \pi^2}}
$$
A.N.: 
$$
r \approx 6.6710 \times 10^{30} \left( \frac{11.86 \times 365 \times 24 \times 3600}{4 \pi^2} \right) \approx 7.79 \times 10^{11} m
$$

### Calculons la valeur de la vitesse linéaire $V$ du mouvement de Jupiter au autour du Soleil.
On a:
$$
V = \frac{2 \pi r}{T_j}
$$
A.N.: 
$$
V = \frac{2\pi \times 7.79 \times 10^{11}}{11.86 \times 365 \times 24 \times 3600} \approx 1.31 \times 10^4 m.s^{-1}
$$

## Exercice 5 Étude de l’électrolyse d’une solution électrolytique
1. L’électrolyse est une transformation: *Forcée*
2. Lors de cette électrolyse l’électrode: *(A) est la cathode.*
3. La réaction qui se produit au niveau de l’électrode $(B)$ est: 
$$
2H_2O(l) \rightarrow O_2(g) + 4H^+(aq) + 4e^-
$$
4. Le volume de dioxygène formé pendant la durée $\Delta t = 75 \, min$ est: 
$$
V(O_2) \approx 0.31 L
$$
```

<!-- Page 202 -->

```markdown
# Devoir surveillé N° 5 – 6 
## Niveau: 1BIOF

## Exercice 1 
Étude du mouvement d’une baïlle dans le champ de pesanteur 

Cet exercice consiste à étudier le mouvement du centre d’inertie $G$ du système $(S)$, constitué du skieur et son équipement sur une piste formée de deux parties 
- Une pente $O_1O_2$ incliné d’un angle $\alpha = 60°$ par rapport au plan vertical.
- Une piste $O_2A$ horizontale

### Données
- Masse du skieur et ses accessoires: $m = 76\,kg$
- L’intensité de la pesanteur: $g = 10\,m.s^{-2}$

Le mouvement du skieur a été enregistré par une caméra numérique fixée sur son casque. Les résultats obtenus ont permis de tracer la courbe de la figure qui représente les variations de la vitesse du centre du skieur en fonction du temps.  
La droite $(D)$ est la tangente à la courbe $v_G = f(t)$ à l’instant $t_2$.

### I-Étude du mouvement sur la pente $O_1O_2$
Étudions le mouvement de $G$ centre d’inertie du système $(S)$ dans un repère $R_1(O_1,i_1,j_1)$ lié à un référentiel terrestre supposé galiléen.  
Sur cette pente, le solide $(S)$ est soumis à une force de frottement solide $F_1$ dont le coefficient de frottement est $k_1$.

1. À un instant $t_0 = 0$, le centre d'inertie du système $(S)$ quitte le point $O_1$ avec une vitesse $v_1$  
2. En appliquant le deuxième loi de Newton, montrer que l'accélération du mouvement de $G$ est:  
   $$ \alpha_1 = g \cos(\alpha) - k_1 \sin(\alpha) $$  
3. Déduire la nature du mouvement de $G$.
4. En exploitant la courbe de la figure 2, déterminer l’accélération $\alpha_1$ et celle de la vitesse $v_1$.
5. Calculer la valeur du coefficient de frottement $k_1$ et de l’intensité de la réaction $\vec{R_1}$.  
6. Le centre d’inertie du système atteint le point $O_2$ à un instant $t_2 = 10\,s$.
   - a – Déterminer la valeur de la vitesse $v_2$.
   - b – Montrer la longueur de la pente $O_1O_2$ est: 
     $$ L = \frac{v_2^2 - v_1^2}{2\alpha_1}. $$ 
     Calculer la valeur de $L$.

### II-Étude du mouvement $O_2A$
Étudions le mouvement de $G$ centre d’inertie du système $(S)$ dans un repère $R_2(O_2,i_2,j_2)$ lié à un référentiel terrestre supposé galiléen.  
Sur cette piste, le solide $(S)$ est soumis à une force de frottement $F_2 = -k_2 \vec{v}$.

1. En appliquant le deuxième loi de Newton montrer que l’équation différentielle du mouvement s’écrit sous la forme suivante:
   $$ \frac{d\vec{x}}{dt} + \lambda \vec{v} = 0, $$
   en précisant l’expression de $\lambda$ en fonction $k_2$ et $m$.
   
2. La solution de l'équation différentielle peut s'écrire sous la forme suivante:
   $$ \vec{x} = Ae^{-kt}. $$ 
   Déterminer l’expression de $t$ et de $c$ pour qui solution de l’équation différentielle. Déduire que: 
   $$ v_G = v_2 e^{-\lambda(t - t_2)}. $$

3. Montrer que $(D)$ coupe l’axe du temps à un instant $t = t_2 + \tau$.
4. En exploitant la courbe de la figure, déterminer la valeur de $k_2$ et la vitesse limite $v_L$.
```

<!-- Page 203 -->

```markdown
# Exercice 3
## Étude du mouvement d’une baile dans un liquide

Le spectromètre de masse est un dispositif permettant de séparer les isotopes d’un élément chimique. Dans cet exercices on étudie l’accélération et le séparation des ions $^{16}O^{2-}$ et $^{18}O^{2-}$ de l’oxygène, la figure ci-dessous.

![Figure](#)

### Données :
- La masse de l’ion $^{16}O^{2-}$ : $m_1 = 2,66 \times 10^{-26} \, \text{Kg}$
- La masse de l’ion $^{18}O^{2-}$ : $m_2 = 2,99 \times 10^{-26} \, \text{Kg}$
- La distance entre les plaques A et B : $d = 8 \, \text{cm}$
- La tension entre les plaques A et B : $|U_{AB}| = 40 \, \text{kV}$
- La charge élémentaire : $e = 1,6 \times 10^{-19} \, \text{C}$
- L’intensité du champ magnétique : $B = 0,37 \, \text{T}$

---

## I- Étude du mouvement des ions $O^{2-}$ dans la chambre d’accélération

À un instant $t = 0$, les ions $O^{2-}$ pénètrent en point O entre les deux plaques métalliques A et B séparées par une distance d avec une vitesse nulle. Entre ces deux plaques on applique une tension électrique $U_{AB}$. On néglige le poids de l’électron devant les forces électriques et on étudie son mouvement dans un repère orthonormé $\mathcal{R}(O,\hat{i}, \hat{j})$.

1. Quelle est le signe de la tension $U_{AB}$ ?
2. Déterminer les caractéristiques du vecteur champ électrique $\vec{E}$ dans le repère $\mathcal{R}(O, \hat{i}, \hat{j})$.
3. Par application de la relation fondamentale de la dynamique, déterminer l’expression de l’accélération $a_x$ de l’ion $^{16}O^{2-}$ en fonction de $U_{AB}$, $m_1$ et $e$.
4. Déterminer les équations horaires du mouvement $x_1(t)$ et $V_1(t)$ du mouvement de l’ion $^{16}O^{2-}$.
5. Trouver l’expression de la vitesse $V_{P1}$ de l’ion $^{16}O^{2-}$ à l’orifice P, en fonction de $U_{AB}$, $m_1$ et $e$, puis calculer sa valeur.
6. Déduire l’expression de la vitesse $V_{P2}$ de l’ion $^{18}O^{2-}$ à l’orifice A, en fonction de $U_{AB}$, $m_2$ et $e$, puis calculer sa valeur.

---

## II- Étude du mouvement des ions $O^{2-}$ dans la chambre de déviation

Les ions $O^{2-}$ pénètrent dans la chambre de déviation où règne un champ magnétique uniforme $\vec{B}$.

1. Déterminer les caractéristiques de la force de Lorentz $\vec{F}_1$ exerçée sur l’ion $^{16}O^{2-}$ au point P.
2. En appliquant le deuxième loi de Newton, montrer que le mouvement de l’ion $^{16}O^{2-}$ dans la chambre de déviation est circulaire et uniforme de rayon $R_1 = \frac{m_1 V_{P1}}{2 e B}$.
3. Déduire l’expression du rayon de courbure de la particule $^{18}O^{2-}$.
4. Les ions $^{16}O^{2-}$ et $^{18}O^{2-}$ sont détectés aux points respectivement M et N. Calculer la distance $MN$.

---

ELECTRON & 2BAC-PC-SM & Devoirs
```


<!-- Page 204 -->

```markdown
# Correction

## Exercice 1 
Étude du mouvement d’une balle dans le champ de pesanteur

1. **Étude du mouvement sur la pente $O_1O_2$**
   - Montrons que $a_{x1} = g(\cos(\alpha) - k_1\sin(\alpha))$
   - Les forces appliquées sur le système $(S)$ sont : 
     - $\vec{P}$ : son poids.
     - $\vec{R_1}$ : réaction de la pente $O_1O_2$.
   - La représentation des forces

   ![representation des forces](link_to_image)

   - A.N. : $k_1 = \frac{\cos(60^{\circ}) - 0.6}{\sin(60^{\circ})} \approx 0.51$

   Calculons $R_1$ :
   - On a $R_n = m g \sin(\alpha)$
   - A.N. : $R_n = 80 \text{ N} \cdot \cos(60^{\circ}) \approx 6.93 \times 10^2 \text{ N}$
   - Et on a : $f_1 = k_1 \cdot R_n$
   - A.N. : $f_1 = 0.51 \times 6.93 \times 10^2 \approx 3.53 \times 10^2 \text{ N}$

   Et on sait que :
   - A.N. : $R_1 = \sqrt{(6.93 \times 10^2)^2 + (3.53 \times 10^2)^2}$
   - On trouve : $R_1 \approx 7.78 \times 10^2 \text{ N}$

   a) – D’après la courbe de la figure $(\bigcirc)$, on trouve : 
   $$ V_2 = 8 \text{ m.s}^{-1} $$

   b) – Montrons que : 
   $$ L = \frac{V_2^2 - V_1^2}{2a_{x1}} $$

   - L’équation horaire de la vitesse
     - On a : $a_{x1} = \frac{dx_1}{dt}$
     - Par intégration on trouve : $v_{x1} = a_{x1} t + C_1$ 
     - Et à $t_0 = 0$ on a : $v_{x1}(0) = v_1 \Rightarrow C_1 = v_1$
     - Alors : $v_{x1} = a_{x1} t + v_1$
     - L’équation horaire de l’abscisse $x_1(t)$
     - On a : $\frac{dx_1}{dt} = a_{x1}$
     - Donc : 
     $$ x_1(t) = \frac{a_{x1} t^2}{2} + v_1 t + C_2 $$
     - Et à $t_0 = 0$ on a : $x_1(0) = C_2 = 0$
     - Alors : $x_1(t) = \frac{a_{x1} t^2}{2} + v_1 t$

   - L’expression de $L$ 
     - À la date $t_2$, on a : $v_2 = a_{x1} t_2 + v_1$
     - $\Rightarrow t_2 = \frac{V_2 - V_1}{a_{x1}} \quad (*** )$
     - Et on a :
     $$ x_2 = \frac{a_{x1}}{2} \left( (v_2 - v_1) t_2 \right)^2 + v_1 \left( (v_2 - v_1) \right) $$
     - On remplace l’équation $(***)$ dans l’équation $(****)$ on obtient :

     $$ x_2 = \frac{a_{x1}}{2} \left( (v_2^2 - v_1^2) \frac{1}{a_{x1}^2} \right) + v_1 \left( \frac{(v_2 - v_1)}{a_{x1}} \right) $$

     - Donc : 
     $$ x_2 = \frac{1}{2a_{x1}} \left( v_2^2 - 2v_1 v_2 + v_1^2 \right) + v_1 \frac{(v_2 - v_1)}{a_{x1}} $$

     - $$ x_2 = \frac{V_2^2 - V_1^2}{2a_{x1}} $$
     - Et on a : $L = x_2 - x_1 = x_2$

   D’où : 
   $$ L = \frac{V_2^2 - V_1^2}{2a_{x1}} $$ 

   D'où : 
   $$ L = \frac{8^2 - 2^2}{10 - 0} = 50 \text{ m} $$
```

<!-- Page 205 -->

```markdown
## II-Etude du mouvement sur la pente O2A
- Montrons les équations différentielle du mouvement :
  - Les forces appliquées à $(S)$ sont :
    - $\vec{P}$ : poids de $(S)$,
    - $R_2$ : réaction de la piste $O_2A$.
  - Par application de la 2e loi de Newton :
    - $\vec{P} + \vec{R_2} = m\vec{g}$.

- Par projection sur l’axe $(O_2x_2)$, on trouve :
  $$m a_x = -k_2 v_g$$
  $$\Rightarrow \frac{d v_g}{d t} = -\frac{k_2}{m} v_g = 0$$
  $$\Rightarrow \text{On trouve : } -A e^{-\frac{t}{\tau}} + A\lambda e^{-\frac{t}{\tau}} = 0.$$
  
- Déterminons les expressions de $t$ et $A$ :
  - On remplace la solution $v_g = A e^{-t/\tau}$ dans l’équation différentielle :
    $$\frac{d^2v_g}{d t^2} + \lambda v_g = 0$$
    
- On trouve :
  $$-A e^{-\frac{t}{\tau}} \left( \frac{1}{\tau^2} + \lambda \right) = 0$$
  $$\Rightarrow \tau = \frac{1}{\lambda}.$$

À $t = t_2$, on a :
$$v_g(t_2) = v_2.$$

Donc :
$$A = V_2 e^{\lambda t_2}.$$

- Montrons que la tangente $(D)$ à la courbe $V_g = f(t)$ à la date $t_2 = 8 \, s$ coupe l'axe du temps à un instant $t_3 = t_2 + \tau$ :
    
  - Déterminons l’équation de la tangente $(D)$ :
    On rappelle l'équation de la courbe $C_d$ d'une fonction $f$ au point d'abscisse $x_0$ est donnée par : $y(x) = f'(x_0)(x - x_0) + f(x_0)$  
    Donc, l'équation de la tangente $(D)$ est :
    $$y(t) = \frac{d v_g(t_2)}{d t}(t - t_2) + v_g(t_2)$$
    $$y(t) = -\lambda v_2(t - t_2) + v_2.$$

- Cette tangente coupe l'axe du temps à la date $t_3$, donc $y(t_3) = 0$ :
$$-\lambda v_2(t_3 - t_2) + v_2 = 0.$$
$$\Rightarrow -\lambda v_2(t_3 - t_2) = -v_2$$
$$\Rightarrow -\lambda(t_3 - t_2) = -1$$
$$\Rightarrow t_3 - t_2 = \frac{1}{\lambda}.$$

On en déduit que $(D)$ coupe l'axe du temps à la date :
$$t_3 = t + t_2.$$

---

# Exercice 2 
## Étude du mouvement d’une bille dans un liquide

### I-Étude du mouvement des ions $O^{2-}$ dans la chambre d’accélération
- Puisque les ions $O^{2-}$ de charge électrique négative s'accélèrent de la plaque $A$ vers la plaque $B$, donc la tension $U_{AB}$ est négative.

- Les caractéristiques du champ électrique $\vec{E}$ :
  - La direction : l’axe $(ox)$
  - Le sens : de la plaque $B$ vers la plaque $A$.
  - L’intensité : $E = \frac{U_{AB}}{d}$.
  
- A.N. : $E = 4 \times 10^4 \, \frac{5 \times 10^{-3}}{m^{-1}} = 5 \times 10^5 \, V.m^{-1}$.

### Trouvons l’expression de l’accélération $\alpha_1$ de la particule $16O^{2-}$ :
- Les forces exercées sur la particule $O^{2-}$ sont :
  - $\vec{P}_1$ : Son poids (négligeable).
  - $\vec{F}_e$ : La force électrique.

- Par application de la 2eme loi de Newton, on a :
$$\vec{F} = m\vec{a} : \Rightarrow \vec{F} = -2eE = -2eE_1.$$
  
- Par projection sur l’axe $(ox)$, on trouve :
$$2eE = m\alpha_1.$$
Donc :
$$\alpha_1 = \frac{2eE}{m} = \frac{U_{AB}}{d}.$$

- Alors : $\alpha_1 = \frac{2e}{m}\frac{U_{AB}}{d}$.

- Déterminons les équations horaires de mouvement de la particule $16O^{2-}$ :
  $$\text{L’équation de la courbe } x_1(t):$$

On a :
$$\alpha_1 = \frac{2eU_{AB}}{m d}$$
$$\Rightarrow \frac{dx_1}{dt} = \frac{2eU_{AB}}{m d}.$$

Par intégration, on trouve : $v_x1 = \frac{2 e U_{AB}}{m d} t + C_1$.

À $t_0 = 0$, on a $v_{0} = 0$, alors $C_1 = 0$.

On obtient :
$$v_x1(t) = \frac{2 e U_{AB}}{m d} t.$$

### L’équation de l’abscisse $x_1(t)$ :
On a :
$$\frac{dx_1}{dt} = \frac{2 e U_{AB}}{m d}.$$

On intègre :
$$x_1(t) = \frac{2eU_{AB}}{m d} t^2 + C_2.$$

À $t_0 = 0$, on a $x_1(0) = 0$, alors $C_2 = 0$.

On obtient :
$$x_1(t) = \frac{2 e U_{AB}}{m d} t^2.$$

### Trouvons l’expression de $v_p$, en fonction de $U_{AB}$ et $m_1$ :
- On a : $x_1(t) = t^2 : v_x1 = \frac{2 e U_{AB}}{m d} t$.

À l’origine $P$, ces deux équations deviennent :
$$d = \frac{U_{AB}}{m_1} \;(\star), \; et \; v_p = \frac{U_{AB}}{m_1 d}.$$

L’équation $(\star)$ donne :
$$\frac{2eU_{AB}}{m_1 d} = \frac{U_{AB}}{2e} \Rightarrow d = \frac{U_{AB}}{m_1} \cdot \frac{m_1^2}{2 e^2 v_p^2}.$$

On remplace $t_p$ dans $(**)$, on trouve :
$$d = \frac{U_{AB}}{2 e}.$$
```

<!-- Page 206 -->

```markdown
\Rightarrow v_{P1} = \frac{eU}{m_{1}} 
\qquad v_{P1} = \frac{4.1 \times 10^{-19} \times 4 \times 10^{4}}{2.66 \times 10^{-26}} \approx 9.81 \times 10^{5} \ \text{m.s}^{-1}

A.N. : v_{P1}. 

6. On a la vitesse de la particule $^{18}O^{2-}$ à l’orifice $P : v_{P1} = \sqrt{\frac{4eU}{AB} \frac{1}{m_{1}}}$

Par analogie, on trouve que l'expression de la vitesse de la particule $^{18}O^{2-}$ à l’orifice $P$ est: $v_{P2} = \sqrt{\frac{4eU}{AB} \frac{1}{m_{2}}}$

A.N. : $v_{P2} = \frac{4.1 \times 10^{-19} \times 4 \times 10^{4}}{2.99 \times 10^{-26}} \approx 9.25 \times 10^{5} \ \text{m.s}^{-1}$

II- Étude du mouvement des ions $O^{2-}$ dans la chambre de déviation  
Les caractéristiques de la force de Lorentz exercée sur la particule $^{16}O^{2-}$ :  
- Le point d'application : $P$  
- La direction : La droite verticale passant par $P$  
- Le sens : De $P$ vers le haut  
- L'intensité : $F_{P} = 2 e v_{P} B$  

A.N. : $F_{P} = 2 \times 1.6 \times 10^{-19} \times 9.81 \times 10^{5} \times 0.3 = 9.42 \times 10^{-14} \ \text{N}$

2. Montrons que le mouvement de la particule $^{16}O^{2-}$ est circulaire uniforme :  
Les forces exercées sur la particule $O^{2-}$ sont :
- $\overline{P}$ : Le poids de la particule $O^{2-}$ (négligeable)  
- $\overline{F_{n}}$ : La force de Lorentz  

Par application de la 2ème loi de Newton, on a :  
$$ \overline{F_{1} = m_{1} \overline{a_{1}}} $$
Par projection dans la base de Frenet, on a :  
$$ \begin{cases}  \overline{F_{u} = m_{1} a_{u}} \\  \overline{F_{n} = m_{1} a_{n}} \end{cases} $$

Et puisque : $$ \overline{F_{1}} = q_{1} \overline{V_{1}} \times \overline{B}$$, donc $$ \overline{F_{1} \perp \overline{B}} \ \text{et} \ \overline{F_{1} \perp \overline{u_{1}}} \ \text{car} \ (\overline{V_{1} = V_{1} u }) $$

Alors : $$ m_{1} a_{u} = 0 $$  
$$ F_{1} = m_{1} a_{n} $$  

D’où :  
$$ \frac{dV_{1}}{dt} = 0 $$  
$$ 2 e V_{1} B = m_{1} \frac{V_{1}^{2}}{R_{1}} $$  

$$ V_{1} = V_{P1} = \text{cte} $$  
$$ R_{1} = \frac{m_{1} V_{1}^{2}}{2 e V_{1} B} = \frac{m_{1} V_{1}}{2 e B} $$  

Puisque $V_{1} = \text{cte et} \ R_{1} = \text{cte}, $ le mouvement de la particule $O^{2-}$ dans le champ magnétique est circulaire uniforme.

3. Déduisons le rayon de la trajectoire de la particule $O^{2-}$ dans le champ magnétique :  
- Le rayon de la trajectoire de la particule $^{16}O^{2-}$ dans le champ magnétique uniforme est :  
$$ R_{1} = \frac{m_{1} V_{P1}}{2 e B} $$  

- Par analogie, on trouve le rayon de la particule $^{18}O^{2-}$ dans le champ magnétique :  
$$ R_{2} = \frac{m_{2} V_{P2}}{2 e B} $$  

4. Calculons la distance $MN$ :  
On a :  
$$ MN = |D_{2} - D_{1}| $$  
\Rightarrow MN = 2 |R_{2} - R_{1}| $$  
$$ MN = \frac{m_{2} V_{P2}}{2 eB} - \frac{m_{1} V_{P1}}{2 eB} $$  
$$ MN = \frac{1}{eB} |m_{2} V_{P2} - m_{1} V_{P1}| $$  

A.N. : $ MN = \frac{1}{1.6 \times 10^{-19} \times 0.3} \cdot |2.99 \times 10^{-26} \times 9.25 \times 10^{5} - 2.66 \times 10^{-26} \times 9.81 \times 10^{5}| \approx 3.26 \ \text{cm} $
```

<!-- Page 207 -->

```markdown
# Devoir surveillé N° 6 – 1  
**Niveau: 2BIOF**

## Exercise 1  
Étude d'une réaction d'esterification

Les esters sont des composés organiques odorants et volatils, que l'on trouve en abondance dans les fruits mûrs (banane, ananas, pomme ...) et qui entrent dans la composition des huiles essentielles, comme celle de lavande. Ils sont utilisés dans la fabrication des parfums ou comme aromatisants dans l'industrie alimentaire.

On se propose dans cet exercice d'étudier la réaction d'estérification entre l'acide propanoïque et le méthanol.  
On chauffe à reflux un ballon contenant, une masse $m_1 = 34,78 \: g$ d'acide propanoïque $(A)$ et une masse $m_2 = 15,04 \: g$ de méthanol $(B)$ et quelques gouttes d'acide sulfurique. Il se produit un composé organique $(E)$.

La courbe ci-contre représente les variations de l'avancement de la réaction $x$ en fonction du temps.

1. En utilisant les formules semi-développées, écrire l'équation de la réaction d'estérification étudiée et donner deux caractéristiques de cette réaction.
2. Calculer les quantités de matière initiales des réactifs.
3. Dresser le tableau d'avancement de cette réaction.
4. En exploitant le tableau déterminer:
   - a – L'avancement de la réaction $x_{eq}$ à l'état d'équilibre.
   - b – Le temps de demi-réaction $t_{1/2}$
   - c – La valeur de la vitesse volumique de la réaction à l'instant $t = 0 \: min$. On donne $V_T \approx 53 \: mL$.
5. Calculer le rendement de cette réaction.
6. Calculer la valeur de la constante d'équilibre associée à la réaction étudiée.
7. On refait l'expérience précédente, dans les mêmes conditions expérimentales, en utilisant un mélange de $n'_1 = 0,47 \: mol$ de l'acide propanoïque, et de $n'_2 = 0,94 \: mol$ de méthanol.
   - a – Calculer la valeur de l'avancement $x'_{eq}$ de la réaction à l'état d'équilibre.
   - b – Calculer la nouvelle valeur du rendement de la réaction et conclure.
  
**Données :** $M(A) = 74 \: g . mol^{-1}$ ; $M(B) = 32 \: g . mol^{-1}$

## Exercise 2  
Étude dynamique d'un pendule élastique

On dispose sur une table à coussin d'air horizontal un solide de masse $m$ attaché à l'une des extrémités d'un ressort à spires non jointives, de masse négligeable et de constante de raideur $k = 25 \: N . m^{-1}$, l'autre extrémité du ressort est accrochée en un point $O'$ fixe.

Au repos, $G$ le centre d'inertie du solide $(S)$ est en un point $O$, pris comme origine abscisses sur l'axe horizontal $(Ox)$. On écarte $G$ de sa position d'équilibre suivant l'axe $(Ox)$ d'une distance $x_0$ et on libère sans vitesse initiale à un instant $t = 0$.

1. Faire le bilan des forces exercées sur le solide $(S)$.
2. En appliquant la deuxième loi de Newton déterminer l'équation différentielle du mouvement du $G$ centre d'inertie du solide $(S)$.
3. La solution de l'équation différentielle vérifiée par l'abscisse $x_G$, est: $x_G(t) = X_m \cos \left( \frac{2 \pi}{T_0} t + \varphi \right)$. Trouver l'expression de $T_0$ la période propre du mouvement en fonction de $k$ et $m$.
4. La courbe ci-contre représente les variations de l'abscisse $x_G$ du point $G$ en fonction du temps.
5. En exploitant cette courbe déterminer :
   - a – Dans quel sens le solide $(S)$ a été écarté $t = 0$.
   - b – L'amplitude $X_m$ et la phase à l'origine $\varphi$.
   - c – La valeur de la période $T_0$ et déduire la masse $m$.
6. Établir l'expression de la vitesse $V_x(t)$ en fonction du temps et calculer sa valeur lors du passage de $G$ par le point $O$ pour la deuxième fois.
```

<!-- Page 208 -->

```markdown
# Exercice 3 Étude énergétique d’un pendule de torsion

Un pendule de torsion est constitué d’un fil en acier, de constante de torsion $C$ et d’un disque homogène de rayon $R = 12cm$ et de masse $m = 0.5kg$ fixé en son centre d'inertie $G$ à une des extrémités du fil. L’autre extrémité du fil est fixée à un point O. On note $I_A = \frac{1}{2}mR^2$ le moment du disque $D$ par rapport un axe $(A)$ confondu avec le fil.

On étudie le mouvement du disque $D$ dans un référentiel terrestre supposé galiléen repère la position du disque à chaque instant $t$ par son abscisse angulaire $\theta$ par rapport à sa position d'équilibre stable.

On choisit la position d’équilibre du disque comme référence de l’énergie potentielle élastique de torsion et le plan horizontal passant par $G$ comme référence de l’énergie potentielle de pesanteur.

À l'aide d'un dispositif informatique adéquat, on obtient la courbe représentant les variations de l'énergie potentielle élastique de torsion $E_{pt}$ en fonction du temps.

1. Trouver l'expression de l'énergie mécanique du pendule de torsion à un instant $t$, en fonction de $R$, $m$, $C$, $\theta$ et $\dot{\theta}$.
2. Par une étude énergétique, montre que l’équation différentielle du mouvement du pendule de torsion est : $$ \ddot{\theta} + \frac{C}{mR^2} \theta = 0 $$
3. En exploitant la courbe déterminer :
   - a) La valeur de période propre d’oscillation $T_0$, et déduire la valeur de constante de torsion $C$.
   - b) La valeur de l’amplitude d’oscillations $\theta_m$.
   - c) La valeur de l’amplitude de la vitesse d’oscillation $\dot{\theta}_m$.

# Correction

# Exercice 1 Étude d’une réaction d’estérification

L'équation de la réaction d'estérification étudiée :

$$
\text{Acide propanoïque} + \text{méthanol} \rightleftharpoons \text{Propanoate de méthyle} + H_2O
$$

1. Calculons les quantités de matière initiales des réactifs.
   Pour l’acide propanoïque on a : $n_1 = \frac{m_1}{M(A)}$. A.N.: $n_1 = \frac{34.78}{74} = 0.47mol$
   
   Pour le méthanol on a : $n_2 = \frac{m_2}{M(B)}$. A.N.: $n_2 = \frac{15.04}{32} = 0.47mol$

2. Le tableau d’avancement associé à cette réaction :

| Équation bilan                | A(l)  + B(l)  ⇌ E(l)  + H_2O(l) |
|-------------------------------|-----------------------------------|
| État                          | Avancement                        | Les quantités de matière en mole (mol) |
| Initial                       | 0                                 | $n_1$            $n_2$           0        0        |
| Intermédiaire                 | $x$                               | $n_1 - x$       $n_2 - x$      $x$     $x$     |
| Équilibre                     | $xq$                             | $n_1 - xq$      $n_2 - xq$     $xq$   $xq$   |

ELECTRON & 2BAC-PC-SM & Devoirs
```

<!-- Page 209 -->

```markdown
a - D’après la courbe on a : $n_{eq} \approx 0,31mol$

b - D’après la courbe on a : $t_{f} = 16min$

c - Calculons la vitesse volumique de la réaction à l’instant $t = 0min$.

On a : $v = \frac{1}{V_{r}} \frac{dx}{dt} \bigg|_{t=0}$  
Alors : $t = 0 \text{ min on trouve: } v_{0} = \frac{1}{53 \times 10^{-3}} \frac{(0-0.3)}{(0-20)} \approx 0,28 mol \cdot L^{-1} \cdot min^{-1}$

$$
\text{Calculons le rendement de cette réaction.}
$$  
On a : $r = \frac{n_{eq}}{n_{th}}$  
Donc : $r = \frac{0.31}{0.47} \approx 0,66 \approx 66\%$

$$
\text{Calculons la valeur de la constante d’équilibre associée à la réaction étudiée.}
$$  
On a : $K = \frac{[E]_{eq}}{[H_{2}O]_{eq}} \text{ et } [A]_{eq} = \frac{n_{1}-n_{eq}}{V_{r}} \text{ avec } (n_{1} = n_{2})$  
Et par la table d’avancement on a : $[E]_{eq} = [H_{2}O]_{eq} - \frac{n_{eq}}{V_{r}}$  
Donc :  
$$
K = \frac{(0.31)^{2}}{\frac{(0.47-0.31)^{2}}{(0.31)^{2}}}
$$  
Alors : $K \approx 3,75$.  
A.N.: $K = \frac{(0.31)^{2}}{(0.47-0.31)^{2}}$

a - Calculons la valeur de l’avancement $x'_{eq}$ de la réaction à l’état d’équilibre.  
La constante d’équilibre est indépendante des quantités de matière initiales des réactifs  

$$
K = \frac{(x'_{eq})^2}{(n_{1}-x'_{eq})^{2}}
$$  
Alors :  
$$
(0.47-x'_{eq})(0.94-x'_{eq}) = 3,75 
$$  
$$
x'_{eq} = 2,75(0.47) - 4 - x'_{eq}(0.94 - x'_{eq}) 
$$  
$$
x'_{eq} = 3,75 \text{ et } 0.47 = 0.94 - 3,75 x'.x'_{eq}
$$  
$$
-2,75 x'^{2} + 5,29 - 1,66 = 0
$$  
D = $(5,29-4)(-2,75)(-1,66) = 9,72 > 0$  

Donc cette équation admet deux solutions qui sont :  
$$
\begin{cases}
x'_{eq1} = \frac{-b+\sqrt{D}}{2a} = \frac{-5,29 + 9,72}{2 \times (-2,75)} = 0,39 mol \\
x'_{eq2} = \frac{-b-\sqrt{D}}{2a} = \frac{-5,29 - 9,72}{2 \times (-2,75)} = 1,53 mol
\end{cases}
$$  

Si cette réaction est totale son avancement maximal est : $x'_{max} = n'_{1} = 0,47 mol$ (car $n'_{2} < n'_{1}$)  
puisque $x'_{eq} \leq x'_{max}$, donc la solution convenable est : $x'_{eq} = x'_{eq1} = 0,39 mol$

b - Calculons la nouvelle valeur du rendement :  
On a : $r' = \frac{n_{eq}^{th}}{n_{1}}$  
Donc : $r' = \frac{x_{eq}}{n_{1}} \text{ car } (n'_{1} \geq n'_{2})$  
A.N.: $r' = \frac{0,39}{0,47} \approx 0,83 \approx 83\%$

On constate que $r' > r$ donc l’utilisation d’un réactif en excès par rapport à l’autre permet d’augmenter le rendement de la réaction d’estérification!

## Exercice 2 
Étude dynamique d’un pendule élastique  

1. Déterminons les forces extérieures exercées sur $(S)$  
   - Le système étudié $\{ \text{Le solide } (S) \}$  
   - Les forces exercées sur $(S)$ sont :  
     - $\vec{P}$ : Son poids.  
     - $\vec{R}$ : Réaction du plan .  
     - $\vec{F}$ : Force de rappel exercée par le ressort.  

2. D’après la deuxième loi de Newton  
On a : $\vec{P} + \vec{R} + \vec{F} = m \vec{g}$  
par projection sur l’axe $(Ox)$ on obtient : $-F = m a_{x}$  
$$
x_{g} = X_{m} \cos \left(\frac{2\pi}{T_{0}} \right)  
$$  
On a : $x_{g} = x_{m} \sin \left(\frac{2\pi}{T_{0}} \right + \phi)$  
$$
x_{g} = (x_{m})^{2} \cos \left(\frac{2\pi}{T_{0}} \right + \phi)
$$  
```

<!-- Page 210 -->

```markdown
1. Trouvons l’expression de l’énergie mécanique  
   On a: $E_m = E_c + E_p$  
   Et on a: $E_p = \frac{1}{2} C \theta^2 + \text{cte}$ avec $E_p(0) = 0 \Rightarrow \text{cte} = 0$  
   Alors: $E_p = \frac{1}{2} C \theta^2$  
   Alors: $E_m = \frac{1}{4} mR^2 \dot{\theta}^2 + \frac{1}{2} C \theta^2$  
   On trouve: $E_m = \frac{1}{4} mR^2 \dot{\theta}^2 + \frac{1}{2} C \theta^2$  

2. Montrons que l’équation différentielle du mouvement du pendule du torsion peut s’écrire sous la forme suivante:  
   $$ \ddot{\theta} + \frac{2C}{mR^2} \theta = 0 $$  
   Puisque les oscillations sont périodiques alors l’énergie mécanique du pendule se conserve  
   Donc: $E_m = \text{constante}$  
   Alors: $\frac{dE_m}{dt} = 0$  
   $$ \Rightarrow \frac{1}{4} mR^2 \cdot 2\dot{\theta} \ddot{\theta} + \frac{1}{2} C \cdot 2\theta\dot{\theta} = 0 $$  
   $$ \Leftrightarrow \dot{\theta} \left( \frac{1}{2} mR^2 \ddot{\theta} + C \theta \right) = 0 $$  
   $$ \Rightarrow \dot{\theta} = 0 \quad \text{ou} \quad \frac{1}{2} mR^2 \ddot{\theta} + C \theta = 0 $$  
   $$ \Leftrightarrow \ddot{\theta} + \frac{2C}{mR^2} \theta = 0 $$  

a - D’après la courbe on a: $T_0 = 0,5s$  
Et on a: $T_0 = 2\pi \sqrt{\frac{mR^2}{2C}}$  
Donc: $T_0^2 = \frac{4\pi^2 mR^2}{2C}$  
Alors: $C = \frac{2\pi^2 mR^2}{T_0^2}$  
D.N: $C \approx \frac{2\pi^2 \cdot 0,5 \cdot (0,12)^2}{(0,5)^2} \approx 0,57 \text{N.m.rad}^{-1}$  

b - Calculons la valeur de l’amplitude d’oscillations $\theta_m$  
On a: $E_{ptm} = \frac{1}{2} C \theta_m^2$  
Avec: $E_{ptm} = 21,5 \text{mJ}$ (à partir de la courbe)  
Donc: $\theta_m = \sqrt{\frac{2E_{ptm}}{C}}$  
A.N: $\theta_m = \sqrt{\frac{2 \cdot 21,5 \times 10^{-3}}{0,57}} = 0,27 \text{rad}$  

c - Calculons la valeur de l’amplitude de la vitesse d’oscillation $\dot{\theta}_m$  
On a: $E_m = \frac{1}{4} mR^2 \cdot \dot{\theta}_m^2$ avec $E_{cm} = E_{ptm} = E_m$  
Donc: $\dot{\theta}_m = \frac{4 E_{ptm}}{mR^2}$  
A.N: $\dot{\theta}_m = \frac{4 \cdot 21,5 \times 10^{-3}}{0,5 \cdot (0,12)^2} \approx 3,46 \text{rad.s}^{-1}$  
```

<!-- Page 211 -->

```markdown
# Devoir surveillé N° 6 – 2
## Exercice 1 
### Étude d’une réaction d’estérification

#### I – Nomenclature
- Compléter le tableau ci-dessous

| Composé organique             | Nom               | Famille         | Groupe fonctionnel |
|-------------------------------|-------------------|------------------|---------------------|
| $H_3C—CH_2—CH_3$              |                   |                  |                     |
| $H_3C—CH_2—CH=CH_2—CH_2—CH_3$ |                   |                  |                     |
| $H_3C—CH_2—CH_2—C(OH) —CH_3$  |                   |                  |                     |
| $H_3C—CH_2—C(=O) —OH$         |                   |                  |                     |
| $H_3C—CH_2—C(=O) —O—CH_2—CH_3$|                  |                  |                     |
| $H_3C—CH_2—C(=O) —O—C(=O) —CH_3$|                |                  |                     |

#### II – Réaction d’estérification
On se propose dans cette partie d’étudier la réaction d’estérification entre l’acide butanoïque et le 3-méthylbutan-1-ol. On chauffe à reflux un ballon contenant, un volume $V_A = 11 mL$ de l’acide butanoïque $(A)$, et un volume $V_B = 13 mL$ de 3-méthylbutan-1-ol $(B)$ et quelques gouttes d’acide sulfurique. Il se produit un composé organique $(E)$.

La courbe ci-contre représente les variations de l’avancement de la réaction étudiée en fonction du temps.

1. En utilisant les formules semi-développées, écrire l'équation de la réaction d’estérification étudiée et donner deux caractéristiques de cette réaction.
2. Calculer les quantités de matière des réactifs.
3. Dresser le tableau d’avancement de cette réaction.
4. En exploitant la courbe déterminer:
   - a – L’avancement de la réaction $x_{eq}$ à l'état d'équilibre.
   - b – Le temps de demi-réaction $t_{1/2}$.
   - c – La valeur de la vitesse volumique de la réaction à l’instant $t_1 = 30 min$. On donne
5. Calculer le rendement de la réaction.
6. Calculer la valeur de la constante d’équilibre associée à la réaction étudiée. 

On refait l’expérience précédente, dans les mêmes conditions expérimentales, en utilisant un mélange de $n_A' = 0,12 mol$ de l’acide butanoïque, et $n_B' = 0,24 mol$ de 3-méthylbutan-1-ol:
- a – Montrer que la valeur de l’avancement de la réaction à l’équilibre est : $x_{eq} = 0,1 mol$ 
- b – Calculer la nouvelle valeur du rendement de la réaction et conclure.

#### Données:
- La masse molaire de l’acide butanoïque: $M(A) = 88 mol$
- La masse molaire de 3-méthylbutan-1-ol: $M(B) = 88 mol$
- La masse volumique de l’acide butanoïque: $\rho(A) = 960 \, g \cdot L^{-1}$
- La masse volumique de 3-méthylbutan-1-ol: $\rho(B) = 810 \, g \cdot L^{-1}$
- Le volume du mélange: $V_T = 25 mL$
```

<!-- Page 212 -->

```markdown
## Exercice 2 
Étude dynamique d’un pendule élastique

On dispose sur une table à coussin d'air horizontal un solide de masse $m = 1\,kg$ attaché à l’un des extrémités d’un ressort à spirales non visibles de masse négligeable et de constante de raideur $K$, l’autre extrémité du ressort est accrochée en un point $O$ fixe. Au repos, $G$ centre d'inertie de solide $(S)$ est en $O$, pris comme origine des abscisses sur l’axe horizontal $(Ox)$.  
On écart $G$ de sa position d’équilibre suivant l’axe $(Ox)$ d'une distance $d$ et on le libère sans vitesse initiale à un instant $t = 0$. 
1. Faire le bilan des forces exercées sur le solide $(S)$, et les représenter sur le schéma.  
2. En appliquant le deuxième loi de Newton déterminer l’équation différentielle du mouvement du $G$ centre d'inertie du solide $(S)$. 
   - La solution de l'équation différentielle vérifiée par l’abscisse $x_G$, 
   s'écrit sous la forme: $x_G(t) = x_m cos\left(\frac{2\pi}{T_0} t + \varphi\right)$. Trouver l’expression de $T_0$ la période propre du mouvement.  
   - La courbe ci-contre représente l'oscillation de l’abscisse $x_G$ du point $G$ en fonction du temps. En exploitant la courbe déterminer:  
     - a - Dans quel sens le solide $(S)$ a été écarté à l’instant $t = 0$.  
     - b - L'amplitude $x_m$ et la phase à l'origine $\varphi$.  
     - c - La valeur de la période $T_0$ et déduire la raideur $K$.  
   - Établir l'expression de la vitesse $v_G(t)$ en fonction du temps et calculer sa valeur lors du passage de $G$ par le point pour la troisième fois.

## Exercice 3
Étude énergétique d’un pendule élastique

Cet exercice a pour objectif, l’étude énergétique d’un oscillateur élastique constitué d’un solide $(S)$ de masse $m = 1,5\,kg$ fixé à l’extrémité d’un ressort à spirales non jointives et de masse négligeable et de raideur $K$. L'autre extrémité du ressort est fixée à un support.  
On repère les positions de $G$ centre d’inertie du solide $(S)$ à chaque instant $t$ dans les deux courbes représentant les variations de l’énergie cinétique $E_c$ et l’énergie potentielle élastique $E_{pe}$ du système oscillant l’abscisse $x_G$ (la figure). Les frottements supposés négligeables.  
1. Exprimer l’énergie mécanique du pendule élastique ,en fonction de $K, m, x_G$ et $x_G$.  
2. Par une étude énergétique, établir l’équation différentielle du mouvement du pendule élastique.  
3. En expliquant le graphe déterminer:  
   - a - La courbe qui représente les variations de l’énergie potentielle $E_{pe}$.  
   - b - La valeur l’énergie mécanique du pendule élastique.  
   - c - La valeur de l’amplitude d’oscillations $x_m$.  
   - d - La valeur de la raideur $K$.  
   - e - Déduire la période propre $T_0$.
```

<!-- Page 213 -->

```markdown
# Correction

## Exercice 1
### Étude d’une réaction d’estérification

1. Compléter le tableau ci-dessous

| Composé organique                  | Nom                      | Famille        | Groupe fonctionnel |
|------------------------------------|-------------------------|----------------|--------------------|
| $H_3C—CH_2—CH_3$                   | Propane                 | Alcane         |                    |
| $H_3C—CH_2—CH—CH_2—CH_3$           | 3-éthylbutane           | Alcane         |                    |
| $H_3C—CH_2—CH_2—CH_2—OH$           | Propane-1-ol            | Alcool         | $–OH$              |
| $H_3C—CH_2—CH—COOH$                | Acide 3-méthylbutanoïque | Acide carboxylique |                    |
| $H_3C—CH_2—C—OH$                   | Anhydride propanoïque    | Anhydride      |                    |
| $H_3C—CH_2—C—O—CH_2—CH_3$         | 3-méthylbutanoate d’éthyle| Ester          | $–C$               |

## II – Réaction d’estérification
1. L’équation de la réaction d’estérification étudiée:

$$ 
\text{Acide butanoïque} + \text{3-méthylbutan-1-ol} \rightleftharpoons \text{Butanoate de 3-méthylbutyle} + H_2O 
$$

Cette réaction est lente et limitée.

2. Calculons les quantités de matière initiales des réactifs.
   - Pour l’acide propanoïque on a: 
     $$ n_A = \frac{m_A}{M(A)} $$
     Donc: 
     $$ n_A = \frac{\rho(A)V_A}{M(A)} $$
     $$ n_A = \frac{960 \times 11 \times 10^{-3}}{88} \approx 0,12 \text{ mol} $$

   - Pour l’acide propanoïque on a: 
     $$ n_B = \frac{m_B}{M(B)} $$
     Donc: 
     $$ n_B = \frac{\rho(B)V_B}{M(B)} $$
     $$ n_B = \frac{810 \times 13 \times 10^{-3}}{88} \approx 0,12 \text{ mol} $$

3. Le tableau d’avancement associé à cette réaction:

| Équation bilan                      | $A (l)$ + $B (l)$ ⇌ $E (l)$ + $H_2O (l)$ |
|-------------------------------------|------------------------------------------|
| État                                | Avancement                              | Les quantités de matière en mole (mol) |
| Initial                             | 0                                       | $n_A$ = 0 | $n_B$ = 0 | $x$ = 0 |
| Intermédiaire                       | $x$                                    | $n_A - x$ | $n_B - x$ | $x$ |
| Équilibre                           | $x_{eq}$                               | $n_A - x_{eq}$ | $n_B - x_{eq}$ | $x_{eq}$ |

- a – D’après la courbe on a: $x_{eq} \approx 80 \text{ mol}$
- b – D’après la courbe on a: $t_{1/2} = 14,7 \text{ min}$
```


<!-- Page 214 -->

```markdown
c - Calculons la vitesse volumiqe de la réaction à l’instant $t_1 = 30 \text{min}$.  
On a : $v = \frac{1}{V_R} \frac{dx}{dt}$.  
À $t_1 = 30 \text{ min}$ on trouve : $v_1 \approx 3,47 \times 10^{-2} \text{ mol.L}^{-1}.\text{ min}^{-1}$.

**Calculons le rendement de cette réaction.**  
On a : $r = \frac{n_{\text{exp}}}{n_{\text{th}}}$.  
Donc : $r \approx \frac{80 \times 10^{-3}}{0,12} \approx 0,67 \approx 67 \%$.

**Calculons la valeur de la constante d’équilibre associée à la réaction étudiée.**  
On a : $K = \frac{[\text{H}_2\text{O}]_{eq} - \frac{x_{eq}}{V_R}}{[\text{A}]_{eq} [\text{B}]_{eq}}$ avec $(n_A = n_B)$.  
Donc : $K = \frac{\frac{x_{eq}}{V_R}}{(n_A - x_{eq})^2}$.  
A.N. : $K = \frac{(80 \times 10^{-3})^2}{(0.12 - 80 \times 10^{-3})^2} = 4$.

a - Calculons la valeur de l’avancement $x'_{eq}$ de la réaction à l’état d’équilibre.  
La constante d’équilibre est indépendante des quantités de matière initiales des réactifs.  
Donc : $K = \frac{(x'_{eq})^2}{(n_A - x'_{eq})(n_B - x'_{eq})^2}$.  
Alors : $(0.12 - x'_{eq})(0.24 - x'_{eq}) = 4$  
$x'_{eq} = 4(0,12 - x'_{eq})(0,24 - x'_{eq})$.  
$x'_{eq} = 4 \times 0,12 \times 0,24 - 4 x'_{eq}$  
$-3,24 x'_{eq}^2 + 1,44 x'_{eq} - 115 = 0$.  
$\Delta = (1,44)^2 - 4(-3)(-0,115) \approx 0,69 > 0$.  

Donc cette équation admet deux solutions qui sont :  
$$x'_{eq_1} = \frac{-b \pm \sqrt{\Delta}}{2a} \approx 0,1 \text{ mol}$$  
$$x'_{eq_2} = \frac{-b - \sqrt{\Delta}}{2a} \approx 0,38 \text{ mol}$$.

Si cette réaction est totale son avancement maximal est : $x'_{max} = n_A = 0,12 \text{ mol} (car n_B \geq n_A)$ et puisque $x'_{eq} \leq x'_{max}$, donc la solution convenable est : $x'_{eq} = x'_{eq_1} = 0,1 \text{ mol}$.  

b - Calculons la nouvelle valeur du rendement :  
On a : $r' = \frac{n_{th}}{n_{exp}}$.  
Donc : $r' = \frac{x_{eq} (n_{A}' \geq n'_{B})}{n_{1}}$ A.N. : $r' = \frac{0.1}{0.12} \approx 0.83 \approx 83 \%$.  
On constate que $r' > r$ donc l’utilisation d’un réactif en excès par rapport à l’autre permet d’augmenter le rendement de la réaction d’estérification!

# Exercice 2 Étude dynamique d’un pendule élastique 
## Déterminons les forces extérieures exercées sur (S)
- Le système étudié {Le solide (S)}  
Les forces exercées sur (S) sont :  
$\overrightarrow{P}$ : Son poids.  
$\overrightarrow{R}$.: Réaction du plan.  
$\overrightarrow{F}$ : Force de rappel exercée par le ressort.

D’après la deuxième loi de Newton on a : $\overrightarrow{P} = \overrightarrow{R} + \overrightarrow{F} = m \overrightarrow{g}$.  
Pour projection sur l’axe $(O_x)$ on obtient : $-K \overrightarrow{X} = m \overrightarrow{g}$.  
$x_G = \frac{X_m}{m} \cos\left(\frac{2\pi}{T_0}t + \phi\right)$  
$x_G = \frac{2\pi}{T_0^2} X_m \cos\left(\frac{2\pi}{T_0}t + \phi\right)$.
```

<!-- Page 215 -->

```markdown
# Exercice 3 

Étude énergétique d’un pendule simple

1. Trouvons l’expression de l’énergie mécanique  
   On a: $E_m = E_C + E_p (*)$  
   Et on a: $E_p = \frac{1}{2} k x_G^2 + cte$  
   Avec $E_p(0) = 0 k^0 + cte = 0 \Rightarrow 0$  
   Donc: $E_p = \frac{1}{2} k x_G^2 (**) $  
   On sait que $E_C = \frac{1}{2} m x_G \dot{x_G} (***)$  
   On remplace $(*)$ et $(**)$ dans $(***)$, on trouve:  
   $E_m = \frac{1}{2} k x_G^2 + \frac{1}{2} m \dot{x_G}^2$ 

2. Trouvons l’équation différentielle du mouvement  
   Puisque les oscillations sont périodiques alors l’énergie mécanique du pendule se conserve  
   Donc: $E_m = constante$  
   Alors: $\frac{dE_m}{dt} = 0$  
   $\Rightarrow \frac{1}{2} m 2 \dot{x_G} \ddot{x_G} + \frac{1}{2} k 2 x_G \dot{x_G} = 0$  
   $\Rightarrow m \ddot{x_G} \left( \dot{x_G} + \frac{m}{k} x_G \right) \Rightarrow \dot{x_G} + \frac{m}{k} x_G = 0$  

3. $x_G(t) = -\frac{2 \pi}{T_0} x_m \cos\left(\frac{2 \pi}{T_0} t + \phi\right)$  
   D’où: $\cos(\phi) = \frac{x_G(0)}{x_m} \Rightarrow A.N.: \cos(\phi) = \frac{-2}{-2 - 11} = \phi = \pi$  
   c - Déterminons la valeur de $T_0$ et celle de $K$.  
   D’après la courbe on a: $T_0 : \left( \frac{2 \pi}{T_0} \right)^2 = \frac{K}{m}$  
   Donc: $K = \frac{4 \pi^2}{T_0^2} \times 1$  
   A.N.: $K = \frac{4}{4 \pi^2} \approx 25, 3 N.m^{-1}$  

4. Déterminons l’expression de la vitesse $V_x(t)$  
   Donc: $V_x(t) = \frac{2 \pi}{T_0} x_m \sin\left(\frac{2 \pi}{T_0} t + \pi\right)$  
   Alors: $V_x(t) = \frac{2 \pi}{2.125} x_m \sin\left(\frac{2 \pi}{T_0} (t + \pi)\right)$  
   D’où: $V_x(t) = -0, 15 \sin\left(\frac{2 \pi}{3} (t + \pi)\right)$  
   Le point $G$ passe par sa position d’équilibre pour la troisième fois à l’instant $t_3 = T_0 + \frac{T_0}{4} = \frac{5 T_0}{4}$  
   Donc: $V_x(t_3) = -0, 15 \sin\left(\frac{2 \pi}{2} \frac{5 T_0}{4} + \pi\right)$  
   A.N.: $V_x(t_3) = -0, 15 \sin\left(\frac{5 \pi}{2}\right) = 0, m.s^{-1}$  
```

<!-- Page 216 -->

```markdown
# Devoir surveillé N° 6 − 3
## Niveau: 2BIOF

### Exercice 1 
Étude dynamique d’un pendule pesant

Le pendule étudié est composé d’une barre homogène \( AB \) de masse \( m \), et longueur \( L \), mobile dans un plan vertical autour d’un axe fixe horizontal \( (A) \) passant par son extrémité \( A \). On étudie le mouvement de la barre dans un repère lié à un référentiel terrestre supposé galiléen, et on repère à chaque instant la position de la barre par son abscisse angulaire \( \theta \).

On écrite la barre à sa position d'équilibre stable d'un petit angle \( \theta_0 \) dans le sens positif et on lâche sans vitesse initiale à un instant pris comme origine des dates. On admet que dans le cas des petites oscillations que : \( \sin \theta \approx \theta \), avec \( \theta \) en radian.

- **L’intensité de pesanteur** : \( g = 10 \, \text{m.s}^{-2} \)
  
#### Données :
- La distance \( AG \) est : \( AG = \frac{L}{2} \)
- Le moment d’inertie de la barre par rapport à l’axe \( (A) \) est : \( J_A = \frac{mL^2}{3} \)

1. Déterminer les forces exercées sur la barre au cours de son mouvement.
2. Par application de la relation fondamentale de la dynamique de rotation, établir l’équation différentielle du mouvement du pendule.
3. La solution de l’équation différentielle est \( \theta(t) = \theta_0 \cos\left(\frac{2\pi}{T_0} t\right) \). Trouver l’expression de la période propre \( T_0 \) en fonction de \( L \) et \( g \).
4. Le graphe ci-contre représente les variations de l’abscisse angulaire \( \theta \) du pendule en fonction du temps. En exploitant ce graphe déterminer la valeur de \( T_0 \) et celle de \( \theta_0 \).
5. Calculer la longueur \( L \) de la barre \( AB \).
6. Trouver l’expression de la vitesse angulaire du pendule en fonction du temps.
7. Trouver l’expression de la vitesse linéaire au point \( B \) en fonction du temps, puis calculer sa valeur lors de son passage de sa position d'équilibre pour la deuxième fois.

### Exercice 2 
Étude énergétique d’un pendule élastique

Un solide \( (S) \) de masse \( m \) est attaché à l’extrémité d’un ressort à spires non jointives et de masse négligeable et de raideur \( K \), l’autre extrémité du ressort est attachée à un support fixe. Le système \( (S) + ressort \) est placé sur un plan horizontal. Au repos, le centre d’inertie \( G \) du solide est au point \( O \), origine du repère \( R(O, i) \). À partir de \( O \), on écarte le solide \( (S) \) de \( 2 \, \text{cm} \) dans le sens positif et on le lâche sans vitesse initiale à un instant \( t = 0 \). Les frottements sont supposés négligeables.

On choisit le plan horizontal passant par \( G \) centre d’inertie de \( (S) \) comme origine de l'énergie potentielle du pesanteur \( (E_{pp} = 0) \) et l’état où le ressort n’est pas déformé \( (x_G = 0) \) comme référence de l'énergie potentielle élastique.

1. Déterminer les forces exercées sur le solide \( (S) \) au cours de son mouvement.
2. Établir l’équation différentielle du mouvement de \( G \) centre d’inertie du solide \( (S) \).
3. La courbe ci-contre représente les variations de l’énergie élastique \( E_{pe} \) du ressort en fonction de temps. En exploitant cette courbe déterminer...
```

<!-- Page 217 -->

```markdown
a – La valeur de l’énergie mécanique du corps $(S)$.  
b – La valeur de la période du mouvement $T_0$.  
1. Calculer la constante du raideur $K$ du ressort.  
2. Vérifier que la masse du corps $(S)$ est : $m = 8,11kg$.  
3. Calculer la valeur de la vitesse maximale du centre d’inertie $G$ du corps $(S)$.  
4. Calculer la variation de l’énergie potentielle élastique du ressort entre les instants $t_1 = 1 s$ et $t_2 = 2,5 s$ et déduire la valeur du travail de la force de rappel entre ces deux instants.  
5. Déterminer l’expression de la composante $F_x$ de la force de rappel en fonction du temps puis calculer sa valeur à l’instant $t_0 = 0 s$.

Correction  
**Exercice 1**  
Étude dynamique d’un pendule pesant  
1. Les forces exercées sur la barre $AB$ sont :  
   - $\vec{P}$ : son poids  
   - $\vec{R}$ : la réaction de l’axe $(A)$  
2. L’équation différentielle du mouvement :  
   En appliquant la deuxième loi de Newton sur la barre en rotation :  
   On a : $M(\overline{P}) + M(\overline{R}) = J_A \ddot{\theta} : M(\overline{P}) = -mgd \text{ et } M(\overline{R}) = 0$  
   Donc : $-mgd = J_A \ddot{\theta}$  
   Et d’après la figure, on a : $d = -AG \sin(\theta)$ avec $AG = \frac{L}{2}$  
   Alors : $d = -\frac{L}{2} \sin(\theta)$ $(**)$.  
   On remplace l’équation $(**)$ dans l’équation $(*)$, on trouve : $-mg \frac{L}{2} \sin(\theta) = J_A \ddot{\theta}$ avec $J_A = \frac{mL^2}{3}$.  
   D’où : $-mg + \frac{3g}{2L} \sin(\theta) = 0$  
   Et puisque $\theta$ est petit, on prend $\sin(\theta) \approx \theta$, ce qui donne : $\dot{\theta} + \frac{3g}{2L} \theta = 0$.  
   **Expression de $T_0$ :**  
   On a : $\theta = \theta_0 \cos\left(\frac{2\pi}{T_0} t\right)$  
   Donc : $\dot{\theta} = -\frac{2\pi}{T_0} \theta_0 \sin\left(\frac{2\pi}{T_0} t\right)$  
   Alors : $\ddot{\theta} = -\left(\frac{2\pi}{T_0}\right)^2 \theta_0 \cos\left(\frac{2\pi}{T_0} t\right)$  
   D’où : $\ddot{\theta} = -\left(\frac{2\pi}{T_0}\right)^2 \theta$.  
   Et en l'équation différentielle du mouvement : $\ddot{\theta} + \frac{3g}{2L} \theta = 0$.  
   Par analogie, on trouve : $\left(\frac{2\pi}{T_0}\right)^2 \leftrightarrow \frac{T_0}{2\pi} = \sqrt{\frac{2L}{3g}}$.  
   $\Rightarrow T_0 = 2\pi \sqrt{\frac{2L}{3g}}$.  
   D'après le graphe, on a : $T_0 = 1 s$ et $\theta_0 = 0,125 \text{ rad}$.  
   **Calculons la longueur de la barre :**  
   On a : $\frac{3g}{2L} \left(\frac{2\pi}{T_0}\right)^2 = \frac{2L}{3g} \Rightarrow \frac{T_0^2}{(2\pi)^2}$.  
   D’où : $L = \frac{3gT_0^2}{8\pi^2} \approx 0,4 \text{ m}$.  
   **Trouvons l’expression de la vitesse angulaire de la barre $AB$ :**  
   On a : $d = -\frac{L}{T_0} \theta_0 \sin\left(\frac{2\pi}{T_4} t\right) : \theta_0 = 0,12 \text{ rad et } T_0 = 1s$.  
   Donc : $\dot{\theta} = -0,75 \sin(2\pi t)$.  
   **L’expression de la vitesse linéaire du point $B$ :**  
   On a : $\vec{V}_B = R_B \dot{\theta}(t) \text{ avec } R_B = L \text{ et } AB = L$.
```

<!-- Page 218 -->

```markdown
# Exercice 1

## Étude d’une réaction d’estérification

Les forces exercées sur le corps \( S \) sont :
- \( \vec{P} \) : son poids
- \( \vec{R} \) : la réaction du plan
- \( \vec{F} \) : la tension du ressort.

L’équation différentielle du mouvement :
Par application de la deuxième loi de Newton, on a :
$$ -\vec{P} + \vec{R} + \vec{F} = m\vec{g} $$
Par projection sur l’axe \( (Ox) \), on trouve :
$$ -k x + k x_G = m \ddot{x} $$
D’où : \( m \ddot{x} + k x = 0 \)

a - D’après la courbe, on a :
$$ E_{pe}(0) = 4mJ $$
Et on a :
$$ E_m = E_{pe}(0) + E_c(0) \text{ avec } E_c(0) = \frac{1}{2} m v_0^2 = 0 $$
Donc : \( E_m = 4mJ \)

b - D’après la courbe, on a : 
$$ T_0 = 4s $$

Calculons la valeur de \( k \) :
On a :
$$ E_{pe} = \frac{1}{2} k x^2 + C $$
Pour \( x_G = 0 \), on a \( E_{pe}(0) = 0 \) donc :
$$ E_{pe} = \frac{1}{2} k x^2 $$
À \( t = 0 \), on a :
$$ E_{pe}(0) = \frac{1}{2} k x_0^2 \text{ avec } x_0 = d $$
Donc :
$$ E_{pe}(0) = \frac{1}{2} k d^2 \iff k = \frac{2 E_{pe}(0)}{d^2} \text{ AN: } k = \frac{2 \times 4 \times 10^{-3}}{(2 \times 10^{-2})^2} = 20 \, N.m^{-1} $$

Vérification de la valeur de la masse \( m \) :
$$ T_0 = 2\pi \sqrt{\frac{r_0^2}{4\pi^2}} $$
Donc :
$$ T_0^2 = \frac{r_k^2}{4\pi^2} $$
Alors : 
$$ m = \frac{r_k^2}{4\pi^2} = 8,11 \, kg $$

Calculons la vitesse maximale de \( G \) :
$$ E_{c_{max}} = E_m $$
$$ \frac{1}{2} m v_{max}^2 = E_m $$
$$ v_{max} = \sqrt{\frac{2E_m}{m}} $$
$$ \Leftrightarrow v_{max} = \sqrt{\frac{2 \times 4 \times 10^{-3}}{8,11}} = 3,14 \times 10^{-2} \, m.s^{-1} $$

Calcul de \( \Delta E_{P_{1\to2}} \) et \( W_{t_{1\to2}(F)} \):
- D’après le graphique, on a : \( E_{pe}(t_1) = 0 \, m \) et \( E_{pe}(t_2) = 2 \, mJ \)
Donc : \( \Delta E_{P_{1\to2}} = 2 - 0 = 2 \, mJ \)
- Calculons \( W_{t_1 \to t_2}(F) \):
$$ A = \int_{t_1}^{t_2} (F) \, dt $$
On a :
$$ F_x = -k x_G \text{ avec } x_G = d \cos\left(\frac{2\pi}{T_0} t\right) $$
Donc :
$$ F_x = -20 \times 2 \times 10^{-2} \cos\left(\frac{2\pi}{4} t\right) $$

D’où : 
$$ F_x(0) = -0,4 \cos\left(0\right) = 0,4 \, N $$
```

<!-- Page 219 -->

```markdown
# Devoir surveillé N°6 – 4
## Niveau: 2BIOF

## Exercice 1
### Étude dynamique d’un système mécanique

Un corps $(S)$ de masse $m_s$ est attaché à une corde inextensible et de masse négligeable. La corde est enroulée sans glissement sur une poulie de rayon $r$ et de masse $m_p = \frac{1}{2}m_s$. La poulie pouvant tourner autour d’un axe $(\Delta)$. (la figure $1$). On note $M_c$ le moment du couple de frottements cylindrique de l’axe de rotation $(\Delta)$. 

Le solide $(S)$ est soumis au trajet $OA$ à une force constante $\vec{F}$. 

On néglige les frottements sur le corps $(S)$ et on l’abandonne à un instant $t_0 = 0s$ à partir du point $O$ et il atteint le point $A$ avec une vitesse $V_A$. 

Étudions le mouvement du centre d’inertie $G$ du corps $(S)$ dans un repère $R(O, \vec{i}, \vec{j})$ lié à un référentiel terrestre supposé galiléen. 

La courbe de la figure $2$ donne les variations de la vitesse $V_G$ en fonction du temps.

1. En exploitant la courbe de la figure $2$ déterminer
   - a – La nature du mouvement du centre d’inertie du corps $(S)$
   - b – La valeur de l'accélération $a_{x1}$ de $G$ sur le trajet $OA$ la valeur de la vitesse $V$ et celle l’accélération $a_{x2}$ de $G$ sur le trajet $AB$.
   
2. Déterminer l’équations horaire du mouvement du centre d’inertie du corps $(S)$ sur le trajet $OA$.

3. Calculer la longueur du trajet $AO$ et le nombre de tours effectués par la poulie en parcourant ce trajet. 

4. La force $\vec{F}$ est supprimée au point $A$, et le centre d’inertie $G$ corps s’arrête en $B$. Par application de la deuxième loi de Newton sur le corps $(S)$ en translation et sur la poulie en rotation, montre l’expression du moment du couple de frottements cylindrique de l’axe de rotation $(\Delta)$ peut s’écrire sous la forme suivante:

$$ M_c = \frac{5}{4}r_m s \cdot a_{x2} $$

**Données:**
- Le rayon du disque: $r = 12cm$
- Le moment d'inertie de la poulie: $J_a = \frac{1}{2}m_p \cdot r^2$
- La masse du corps $(S)$: $m_s = 1.4kg$

## Exercice 2
### Étude d’un pendule de torsion

Un pendule de torsion est constitué d’un fil d’acier de constante de torsion $C$ et une tige homogène de longueur $L = 30cm$ et de masse $m = 120g$, suspendue à ce fil en son centre $G$. La tige peut à chaque instant se déplacer autour des deux extrémités une masselet de masse $m = 2m$. La figure $1$.

Son moment d'inertie par rapport à l'axe $(\Delta)$ confondu avec le fil est donné par:

$$ J_0 = m \cdot \frac{L^2}{12} $$

celle de la masselet $S_1$ par rapport à l'axe $(\Delta)$ est:

$$ I_1 = m_{1} \cdot l^2 $$

On écrit le système $(S) = \{la tige AB + (S_1) + (S_2)\}$ dans le sens positif d’un angle $\theta_0$ et on l’abandonne avec vitesse angulaire initiale $(\theta_0 < 0)$ à un instant pris comme origine des angles $= 0$.

Le système $(S)$ est prêt à s’assembler à son abscisse angulaire $\theta$, et les frottements sont négligeables.

1. Exprimer le moment d'inertie $J_a$ du système $(S)$:

$$ J_a = \{la tige AB + (S_1) + (S_2)\} $$

---

ELECTRON & 2BAC-PC-SM
& Devoirs 219
```

<!-- Page 220 -->

```markdown
### Exercice 2

1. Établir l’équation différentielle du mouvement du système $(S)$.
2. La solution de l’équation différentielle du mouvement est : 
   $$ \theta(t) = \theta_m \cos \left( \frac{2\pi}{T_0} t + \varphi \right) $$. Trouver l’expression de la période propre $T_0$ d’oscillations en fonction de $L, m$ et $C$.
3. La courbe de la figure $\theta$ donne l’évolution temporelle de l’abscisse angulaire $\theta$ du système. En exploitant cette courbe déterminer la valeur de $T_0$, la valeur de $\theta_0$ et celle de $\theta_m$.
4. Calculer la valeur de la constante de torsion $C$ et celle de $g$.
5. Déterminer l’expression de la vitesse angulaire en fonction du temps.
6. Calculer la vitesse linéaire de la masselotte $(S_1)$ à l’instant $t_1 = \frac{3}{4} T_0$.

### Exercice 3

Étude déséxication d’un isotope de néon

Lors d’une transformation nucléaire, le noyau fils peut-être obtenu dans un état excité. Il se déséxcite en émettant un photon.  
L’isotope $^{22}Ne$ se déséxcite en émettant un photon d’énergie $E = 1,2746 MeV$.

1. Exprimer l’énergie de ce photon en joule.
2. Calculer la fréquence et la longueur d’onde dans le vide de la radiation émise.
3. À quel domaine du spectre électromagnétique cette radiation appartient-elle ?  
**Données :** $c = 3 \cdot 10^8 \, m.s^{-1}, \, h = 6,62 \cdot 10^{-34} \, J.s; \, 1 eV = 1,6 \cdot 10^{-19} J$.

### Exercice 4

Étude de quelques réactions de l’aspirine

L’acide acétylsalicylique $(AAS)$, plus connu sous le nom commercial d'aspirine, est un antalgique antipyrétique. C'est la substance active de nombreux médicaments aux propriétés antanalgiques, antipyrétiques et anti-inflammatoires.

1. La formule semi-développée de l’aspirine est donnée ci-contre :
   - a) Quels sont les groupes fonctionnels qui se trouvent dans la molécule d’aspirine ?
   - b) Quels rôles, cette molécule peut-elle jouer au cours des transformations chimiques ?

2. L'aspirine a été synthétisée pour la première fois en 1853 par le chimiste allemand Gerhardt, selon une transformation chimique modélisée par l'équation suivante :
   $$ \text{acide salicylique} + \text{CH}_3\text{CO}Cl \rightarrow \text{aspirine} + \text{H}_2\text{O} $$
   - a) Quel est le nom de cette réaction ? et quelles sont ses caractéristiques ?
   - b) Comment possède-t-on l’acide salicylique dans cette réaction ?

3. En 1897, le chimiste allemand Hoffmann arriva à synthétiser l’aspirine à partir d’une réaction d’estérification, en changeant l’acide éthanoïque par son anhydride.
   - a) Écrire l’équation de cette réaction de synthèse.
   - b) Quelles sont les caractéristiques de cette réaction ?
   - c) En reprenant cette réaction est de 90% : Calculer la masse de l’aspirine peut-on obtenir à partir de la réaction d’une masse $m = 40 kg$ d’acide salicylique avec une quantité suffisante de l’anhydride éthanoïque.  
   **Données :** 
   - La masse molaire de l’acide salicylique : $M(A) = 138 \, g.mol^{-1}$
   - La masse molaire de l’aspirine : $M(AS) = 180 \, g.mol^{-1}$
```

<!-- Page 221 -->

```markdown
# Correction

## Exercice 1
### Étude dynamique d’un système mécanique

1. **a** – Sur le trajet \( OA \), le mouvement de \( G \) est rectiligne uniformément accéléré, et sur le trajet \( AB \), le mouvement de \( G \) est rectiligne uniformément ralenti.

   **b** – D'après la courbe, on a : \( V_A = 9,6 \, \text{m.s}^{-1} \)

   et \( a_{x1} = \frac{9,6 - 6,4}{4 - 6} = -1,6 \, \text{m.s}^{-2} \)

   L'équation horaire du mouvement de \( G \) :
   On a : \( V_1 = a_{x1} t \\
   Donc : \frac{dx}{dt} = a_{x1} \)

   Par intégration, on trouve : \( x(t) = \frac{a_{x1}}{2} t^2 + C_1 \)

   À \( t_0 = 0 \), on \( x_0 = 0 \), donc \( C_1 = 0 \)

   Donc : \( x_1 = \frac{1}{2} a_{x1} t^2 \)

   D'où : \( x_1 = 1,2 t^2 \)

2. **Calculons la distance \( OA \)** :
   On a : \( x_1 = 1,2 t^2 \)

   Au point \( A \), on trouve \( OA = x_A : x_A = 1,2 t^2 \) avec \( t_4 = 4 \, \text{s} \)

   d'où : \( OA = 2 \times \frac{4^2}{2} = 19,2 \, \text{m} \)

   **Calculons le nombre de tours effectués pour \( G \)** :
   On a : \( N = \frac{A_0}{2 \pi \cdot r} \)

   Alors : \( N = \frac{OA}{2 \pi r} \)

   D'où : \( N = \frac{19,2}{2 \pi} \approx 25,47 \, \text{tours} \)

   **Trouvons l'expression du moment du couple de frottement** :
   Application de la 2ème loi de Newton sur le corps \( (S) \) :

   - Les forces exercées sur \( S \) sont :
     - \( P_S \) : poids de \( (S) \)
     - \( R_S \) : réaction du plan,
     - \( \vec{T} \) : tension de la corde

   - Par application de la 2ème loi de Newton, on a :
     $$ P_S + R_S + \vec{T} = m_s \vec{g} a_z $$

   - Par projection sur l'axe \( (Ox) \), on trouve :
     $$ -T = m_s a_{x2} $$ 
   D'où : \( T = -m_s a_{x2} \)

   - Application de la deuxième loi de Newton sur la poulie en rotation :
   Les forces exercées sur la poulie sont :
   - \( P_P \) : poids de la poulie,
   - \( R_P \) : réaction de l'axe \( (A) \),
   - \( \vec{T} \) : tension de la corde.

   D'après la deuxième loi de Newton, on a :
   $$ M_a(\vec{P_P}) + M_a(\vec{R_P}) + M_a(\vec{T}) = J \ddot{\theta} $$
   Avec : \( M_a(\vec{P_P}) = 0; M_a(\vec{R_P}) = M_c \) et \( M_a(\vec{T}) = T' - T \).

   Donc : \( M_c + T' = J \ddot{\theta} \) avec \( J = \frac{1}{2} m_p r^2 \)

   Alors : \( T' = \frac{1}{2} m_p r \ddot{\theta} \)

   D'où : \( a_{x2} = r \ddot{\theta} \)

   Donc : \( a_{x2} = \frac{1}{4} m_s a_{x2} = \frac{m_c}{r} \)

   $$ \frac{M_c}{r} = \frac{1}{4} m_s a_{x2} $$

   A.N. : \( M_c = -\frac{5}{4} \times 0,12 \times 1,4 \times 1,6 = -0,336 \, \text{Nm} \)

## Exercice 2
### Étude d’un pendule de torsion

1. **L’expression du moment d’inertie du système \( (S) \)** :
   On a : \( J_a = J_0 + J_1 + J_2 \)

   Donc : 
   $$ J_a = \frac{1}{12} m l^2 + \frac{m l^2}{12} + \frac{m' l^2}{2} $$ avec \( m' = 2m \).

   Alors \( J_a = \frac{m l^2}{12} + \frac{4 m l^2}{12} = \frac{5 m l^2}{12} \)

   D'où : \( J_a = \frac{5}{6} m l^2 \)

2. **L'équation différentielle du mouvement** :
   - Les forces exercées sur le système \( (S) \) :
     - \( \vec{P} \) : poids de \( (S) \)
     - \( \vec{T} \) : la tension du fil,
     - \( \vec{C} \) : couple de torsion de moment \( M_c \)

   - Par application de la deuxième loi de Newton sur le système en rotation, on a :
   $$ M_a(\vec{P}) + M_a(\vec{T}) + M_c = J_a \ddot{\theta} $$

   Avec : \( M_a(\vec{P}) = 0; M_a(\vec{T}) = 0, et M_c = -C \ddot{\theta} $$

   Alors : 
   $$ \ddot{\theta} + \frac{12C}{13m l^2} = 0 $$

   D'où : \( \ddot{\theta} + \frac{12C}{13m l^2} = 0 \)

   Et on a l'équation différentielle du mouvement est :
   $$ \ddot{\theta} + \frac{12C}{13m l^2} = 0 $$

   Par analogie, on trouve :
   $$ \left(\frac{2\pi}{T_0}\right)^2 = \frac{12C}{13m l^2} $$

   D'où : 
   $$ T_0 = 2\pi \sqrt{\frac{13m l^2}{12C}} $$
```

<!-- Page 222 -->

```markdown
# D'après la courbe, on a : $T_0 = 1,2s; \, \theta_0 = 0, \, rad$ et $\theta_m = 0,4 \, rad$

## Calculons la valeur de $C$ et celle de $\varphi$
- Calculons la valeur de $C$
  - On a : $1,07 \, N \cdot m \cdot rad^{-1}$
    - Donc : $\left( \frac{T_0}{T_m} \right)^2 = \frac{13m^2}{12C}$
    - Alors : $C = \frac{13 \cdot 7 m^2 \cdot 4^2}{12 \cdot 37^2}$
    - D’où : $C = 1,07 \, N \cdot m \cdot rad^{-1}$
  
## L'expression de la vitesse angulaire $\dot{\theta}(t)$
- On a : $\dot{\theta}(t) = \frac{2\pi}{T_0} \theta_{m} \sin\left(\frac{2\pi}{T_0} (t + \varphi)\right)$
  - À $t = 0$, on trouve : $\theta_0 = \theta_m \cos\left(0\right)$
  - Alors : $\cos(\phi) = \frac{\theta_0}{\theta_m} = \frac{0,2}{0,6} = \frac{1}{3}$
    - A.N : $\cos(\phi)$
    - Alors : $\varphi = \frac{\pi}{3}$
      - Et on a : $\dot{\theta}_0 = \frac{2\pi}{T_0} \theta_m \sin(\frac{\pi}{3}) < 0$, donc $\sin(\varphi) > 0$
      - Et puisque $\sin\left(\frac{\pi}{3}\right) = \frac{\sqrt{3}}{2}$
        - Alors : $\varphi = \frac{\pi}{3}$

## Calculons la vitesse linéaire $(S_1)$ à l’instant $t_4 = \frac{3}{4} T_0$
- On a : $\dot{\theta}(t_4) = -2,09 \sin\left(\frac{5\pi}{3} + \frac{\pi}{3}\right)$
- Donc : $V_1 = \frac{1}{2} \dot{\theta}(t_1)$
  - Alors : $V_1 = \frac{-30 \times 10^{-2}}{2} = -2,09 \sin\left(\frac{5\pi}{3} + \frac{\pi}{3}\right)$
- On trouve : $V_1 = 0,30 \, m \cdot s^{-1}$

---

## Exercice 3
### Étude de désintégration d’un isotope de néon
- L’énergie du photon en joule :
  - On a : $E = 1,274 \, MeV$ donc : $E = 1,274 \times 10^6 \, 1,6 \times 10^{-19} \, J = 2,04 \times 10^{-13} \, J$
- Calculons la fréquence et la longueur d’onde de la radiation émise :
  - On a : $E = h\nu$
    - Donc : $\nu = \frac{E}{h} = \frac{2,04 \times 10^{-13}}{6,62 \times 10^{-34}} = 3,08 \times 10^{20} \, Hz$
  - Calculons la longueur d’onde de cette radiation :
    - On a : $c = \lambda_0 \nu$
      - On a : $\lambda_0 = \frac{c}{\nu} = \frac{3 \times 10^8}{3,08 \times 10^{20}} = 9,73 \times 10^{-13} \, m$
    - On a : $\lambda_0 = 9,73 \times 10^{-13} \, m$, donc cette radiation appartient au domaine des rayons X.

---

## Exercice 4
### Étude de quelques réactions de l’aspirine
- a - Les groupes fonctionnels qui se trouvent dans la molécule de l'aspirine sont :
  - Le groupe carboxyle $–COOH$, qui caractérise les acides carboxyliques.
  - Le groupe ester $–C=O–$, qui caractérise les esters.

- b - Au cours d'une transformation chimique, l'aspirine peut jouer le rôle d'un acide carboxylique ou le rôle d'un ester, selon les conditions expérimentales.
  
- a - Cette réaction est appelée estérification. Elle est lente et limitée.
- b - Dans cette réaction, l'acide salicylique se comporte comme un alcool.
- a - L’équation de cette réaction de synthèse :

$$ 
\text{acide salicylique} + \text{anhydride éthanoïque} \rightarrow \text{aspirine} + \text{acide éthanoïque} 
$$

- b - Cette réaction est totale.
  
- c - Calculons la masse d'aspirine produite lors de cette réaction de synthèse :
  - On a : $r = \frac{n_{exp}}{n_{AAS}} = \frac{n_{th}}{n_{A}}$
  
  Donc : 
  - $r = \frac{n(A)}{n(AAS)} \Rightarrow \frac{m'(AAS)}{m(AAS)} = \frac{m'(A)}{m(A)}$

  Alors : 
  - $r = \frac{m'}{m(A)} = 9,0 \times 180 \times \frac{40}{138} = 46,96\, kg$

D'où : $m' = m' = \frac{m}{M(A)} = m' = 0,9 \times 180 \times 40 / 138$
```

<!-- Page 223 -->

```markdown
# Devoir surveillé N° 6 – 5
## Niveau: 2BIOF

### Exercice 1
Étude du mouvement d’un système mécanique

On soulève un corps solide $(S)$ de masse $m_1 = 150Kg$ à l’aide d’un moteur, constitué d’une poulie $(P)$ de rayon $R = 40 cm$ et de masse $m_2 = 20kg$, susceptible de tourner sans frottement autour d’un axe fixe $(\Delta)$ passant par son centre, et enrouler par un fil inextensible et de masse négligeable. (figure 0).  
Notons que les frottements sont supposés négligeables et et le fil ne glisse pas sur la gorge de la poulie et le moteurere se trouve en plein coup de moment constant noté $M_m$.  
Étudions le mouvement de $G$ centre d’inertie du corps $(S)$ dans repère $R(O,\overline{K})$ lié à référentiel terrestre supposé galiléen.  
À $t_0 = 0s$ le centre d’inertie $G$ du corps $(S)$ se trouve au point $G_0$ d’altitude $Z_0 = 10m$.  
L’enregistrement du mouvement à permis de tracer la courbe de la figure  qui représente les variations de la vitesse $V_z$ de $G$ centre d’inertie du corps $(S)$ en fonction du temps.  

### Données
- L’intensité de la pesanteur : $g = 10m.s^{-2}$
- Le moment d'inertie de la poulie : $J_a = \frac{1}{2}m_2R^2$

1. En exploitant la courbe de la figure **déterminer** :
   - a – La nature du mouvement du centre d’inertie du solide $(S)$.
   - b – L’accélération $a_z$ du centre d’inertie du solide $(S)$.

2. En appliquant la deuxième loi de Newton sur le corps $(S)$ trouver l’expression de $T_1$ l’intensité de la force exercée par le fil sur le corps $(S)$ en fonction de $m_1$, $g$ et $a_z$ puis calculer sa valeur.

3. Le centre d’inertie $G$ du solide $(S)$ atteignant un point $A$ à instant $t_A$ avec une vitesse $V_A = 16m.s^{-1}$
   - a – Déterminer la valeur de la date $t_A$
   - b – Déterminer l’équation horaire numérique $z_G(t)$ de $G$
   - c – Calculer la distance $OA$

4. En appliquant la relation fondamentale de la dynamique à la poulie en rotation trouver l’expression du moment $M_m$ du couple du moteur en fonction de $m_2$, $T_1$, $a_z$ et $R$ puis calculer sa valeur.

5. Calculer l’accélération augementaire à la poulie et déduire la nature de son mouvement.

6. Écrire l’expression de l’abscisse angulaire $\theta(t)$ de la poulie en fonction du temps, sachant que son abscisse angulaire à l’origine des dates est : $\theta_0 = 15^{\circ}$ et la vitesse angulaire initiale est $\dot{\theta}_0 = 0 rad/s$

7. Calculer le nombre de tours effectués par la poulie entre les instants $t_0 = 0$ et $t_1 = 20s$.

8. Lorsque le centre d’inertie $G$ du corps $(S)$ atteint le point $A$, le fil se brise à un instant que l’on considère comme nouvelle origine des dates $(t = 0)$
   - a – Par application de la deuxième loi de Newton sur le corps $(S)$ dans le repère $R(O,\overline{K})$, calculer l’accélération $a'_z$ de $G$.
   - b – Déterminer les équations horaires numériques du mouvement de $G$.
   - c – Calculer la hauteur maximale atteinte par $G$ lors de son mouvement.
```

<!-- Page 224 -->

```markdown
## Exercice 2 

### Étude d’un pendule pesant

Le pendule pesant de la figure ① est constitué d’une boule de masse $m_1$ et de rayon $R$, fixée à l’extrémité inférieure $B$ d’une tige $AB$ de longueur $L = 4R$ et de masse $m_2 = \frac{m_1}{2}$.

Ce pendule pouvant réaliser un mouvement de rotation oscillatoire autour d’un axe $A$ horizontal passant par l’extrémité $A$ de la tige.

Le moment d’inertie de la tige par rapport à l’axe ($A$) est: 
$$ I_2 = \frac{m_2 l^2}{3} $$
et celle de la boule par rapport à l’axe ($A$) est: 
$$ I_1 = \frac{41m_1 l^2}{40} $$

On écarte le système $(S) = \{ \text{tige } AB + \text{la boule} \}$ dans les sens positive d'un angle $\theta = 0, 1 \text{ rad}$ et on le libère avec sans vitesse initiale à un instant pris comme origine des dates $t_0 = 0$.

Le système $(S)$ est représenté à chaque instant $t$ par son abscisse angulaire $\theta$, et les frottements sont négligeables.

On prend pour les petits angles $ \cos(\theta) \approx 1 - \frac{\theta^2}{2} $ et $ \sin(\theta) \approx \theta $.

1. En exploitant la relation barycentrique, vérifier que : $ AG = L $
2. Exprimer le moment d’inertie $J_a$ du système $(S) = \{ \text{la tige } AB + (S_1) + (S_2) \}$ en fonction de $m_1$ et $L$, puis calculer sa valeur.
3. Montrer que l’équation différentielle du mouvement peut s’écrire sous la forme: 
$$ \ddot{\theta} + \lambda \theta = 0, $$ 
en précisant l’expression de $\lambda$ en fonction de $L, g , m_1$ et $J_a$. Calculer la valeur de $\lambda$.
4. La solution de l’équation différentielle du mouvement est: 
$$ \theta(t) = \theta_m \cos \left( \frac{2\pi}{T_0} t \right). $$ 
Trouver l’expression de $T_0$ en fonction $\lambda$. Puis calculer sa valeur.
5. Calculer la vitesse linéaire du point $G$ à la date $ t = \frac{2}{3}T_0 $.
6. Par application de la deuxième loi de Newton, montrer que l’expression de la réaction de l’axe de rotation en est: 
$$ R = \frac{3}{2} m_1 g \cos(\theta) + L\dot{θ}^2 $$ 
Calculer sa valeur à la date $ t = 0 $.
7. On choisit le plan horizontal contenant la position d’équilibre $G$ référence de l’énergie potentielle de la pesanteur.  
   a. Déterminer l’expression de l’énergie cinétique du système $(S)$.  
   b. Déterminer l’expression de l’énergie potentielle du système $(S)$ en fonction $L, g , \theta$ et $m_1$, puis sa valeur.  
   c. Déduire l’expression de l’énergie mécanique du système $(S)$ en fonction de $\theta_0$ et $L, g$ et $m_1$, puis sa calculer.  

#### Données
- Masse de la boule : $m_1 = 250 \, g$
- Longueur de la tige : $L = 40 \, cm$
- L’intensité de la pesanteur : $g = 10 \, m.s^{-2}$
- La relation barycentrique : $AG = \frac{\Sigma m_i A G_i}{\Sigma m_i}$

---

## Exercice 3 

### Étude de quelques niveaux énergétiques de l’atome de potassium

La figure ci-contre donne une partie du diagramme énergétique de l’atome de potassium. Sur ce diagramme est représentés trois niveaux notés $\alpha, \beta$ et $\gamma$, tel que $\alpha$ est le niveau fondamental et $\beta$ et $\gamma$ sont deux niveaux excités. 

L’énergie d’ionisation de cet atome est égale à $4,34 \, eV$, et l’état ionisé est choisi comme référence d’énergie.

1. Quelle est la valeur de l’énergie $E_{\alpha}$ de l’état fondamental?
2. Calculer l’énergie associée à la transition du niveau $\beta$ au niveau $\alpha$.
3. Calculer l’énergie associée à la transition du niveau $\gamma$ au niveau $\alpha$.
4. On déduire les énergies des niveaux $\beta$ et $\gamma$.

#### Données
- $C = 3 \cdot 10^8 \, m.s^{-1}, \, h = 6,62 \cdot 10^{-34} \, s, \, 1 \, eV = 1,6 \cdot 10^{-19} \, J; \, \lambda_{\gamma} = 770 \, nm$
```

<!-- Page 225 -->

```markdown
# Exercice 4 

Calcule du rendement d'une réaction d'estérification

Cet exercice vise à suivre l’évolution temporelle d’une réaction de synthèse d’un composé organique $E$. Pour atteindre cette objectif, on prépare dix tubes à essais chacun contenant un volume $V_A = 8,6\,mL$ d’un acide carboxylique $(A) \, \text{acide éthanoïque}$ et un volume $V_B = 16,3\,mL$ d’un alcool $(B) \, \text{2-méthylbutan-1-ol}$ et une goutte d’acide sulfurique concentré.  
On met les tubes à essais dans un bain marie de température constante à un instant $t_0 = 0$.  
Toutes les dix minutes on retire un tube à essais et on le met dans l’eau glacée, puis on dose l’acide carboxylique restant par une solution d’hydroxyde de sodium. Les résultats obtenus ont permis de tracer la courbe de la figure 1 qui donne les variations de la quantité de matière de l’acide carboxylique $(A)$ en fonction du temps.

## Données :

| Composé organique | Acide carboxylique (A) | Alcool (B) | Ester (E) |
|-------------------|-------------------------|------------|-----------|
| Masse molaire en $g \cdot mol^{-1}$ | 60 | 88 | 130 |
| Masse volumique en $g \cdot mL^{-1}$ | 1,05 | 0,810 | 0,870 |

1. Compléter le tableau suivant

| Composé organique | Alcool (B) | Acide carboxylique (A) | Composé organique (E) |
|-------------------|------------|-------------------------|------------------------|
| Famille           |            |                         |                        |
| Formule semi-développée |     |                         |                        |
| Formule brute     |            |                         |                        |
| Groupe fonctionnel |            |                         |                        |

2. Quelles est le nom et les caractéristiques de cette réaction de synthèse?  
Écrire l’équation de cette réaction en utilisant les formules brutes des espèces chimiques.  
Vérifier que le mélange du tube est équimolaire.  
En exploitant la courbe ci-contre déterminer:  
- $a \, –$ L’avancement maximal de la réaction étudié  
- $b \, –$ Le temps de demi-réaction.  
- $c \, –$ La vitesse volumique de la réaction aux instants $t_0 = t_1 = 0$. On donne le volume de mélange d’un tube à essais: $V_m \approx 25mL$.

3. Comparer les vitesses $v_0$ et $v_1$ de la vitesse volumique de réaction et déduire.

4. Calculer la valeur de la constante d’équilibre associée à cette réaction de synthèse.  
5. Montrer que le rendement de cette réaction peut s’écrire sous la forme suivante: $r = \frac{\sqrt{K}}{\sqrt{K}+1}$ Puis calculer sa valeur.

6. On chauffe à reflux un mélange $0,15\,mol$ de l’acide carboxylique $(A)$ et $0,30\,mol$ de l’alcool $(B)$  
- $a \, –$ L’avancement maximal de la réaction qui a lieu.  
- $b \, –$ Calculer le rendement de la réaction.  
- $c \, –$ Comparer ce rendement avec celui calculé dans la question 6 et que peut-on déduire?  
7. Proposer des autres méthodes permettant d'améliorer le rendement de cette réaction de synthèse.
```

<!-- Page 226 -->

```markdown
# Correction
## Exercice 1 
### Étude d’une réaction d’estérification

1. $a$ – on a : $v_z = f(t)$ est linéaire et la trajectoire de $G$ est rectiligne, alors son mouvement est rectiligne uniformément varié.  
$b$ – D'après la courbe, on a : $a_z = \frac{16 - 0}{4 - 0} = 4 \, \text{m.s}^{-2}$  
2. Trouvons l'expression de $T_1$  
   * Les forces exercées sur $S$ sont :  
   $\overrightarrow{P_s}$ : Poids de $(S)$  
   $T_1$ : Tension du fil  
   * Par application de la 2ème loi de Newton, on a :  
   $\overrightarrow{P_s} + T_1 = m_1 \overrightarrow{a_c}$  
   * Par projection sur l'axe $(OZ)$, on trouve :  
   $-m_1 g + T_1 = m_1 a_z$  
   D'où : $T_1 = m_1(g + a_z)$  
   A.N. : $T_1 = 150 \times (10 + 4) = 2,1 \times 10^3 \, \text{N}$  
3. $a$ – D'après la courbe, on a : $T_A = 4 \, \text{s}$  
$b$ – l'équation horaire du mouvement de $G$ :  
   On a : $v_z = a_z t$  
   $ \frac{dz}{dt} = a_z t$  
   Par intégration, on trouve : $z(t) = \frac{a_z t^2}{2} + C$  
   À $t = 0$, on a $z(0) = z_0 \Rightarrow C = z_0$.  
   Alors : $z(t) = \frac{a_z t^2}{2} + z_0$  
   Avec $a_z = 4 \, \text{m.s}^{-2}$ et $z_0 = 10 \, \text{m}$  
   D'où : $z(t) = 2t^2 + 10$  

### c – Calculons la distance $D$  
   On a : $z(t) = 2t^2 + 10$  
   Donc : $D = 2t^2 + 10$  
   A.N. : $Z_A = 2 \times 4^2 + 10 = 42 \, \text{m}$  
   D'où : $0A = Z_A = 42 \, \text{m}$  

4. Trouvons l'expression de $M_m$  
   * Les forces exercées sur la poulie sont :  
   $\overrightarrow{P_p}$ : Poids de la poulie  
   $R_1$ : Réaction de l'axe $(\Delta)$  
   $T_2$ : Tension du fil  
   $C$ : Couple moteur du moment $M_m$  
   * Par application de la 2ème loi de Newton sur la poulie en rotation, on trouve :  
   $M_a(\overrightarrow{P_p}) + M_a(R) + M_a(\overrightarrow{T_2}) + M_m = J_A \dot{\theta}$  
   Avec : $M_a(\overrightarrow{P_p}) - M_a(R_1) = 0$  
   et $M_a(T_2) = -T_2 R$  
   Alors : $-T_2 R + M_m = J_A \dot{\theta}$  
   Avec : $J_A = \frac{1}{2} m_2 R^2$  
   D'où : $M_m = T_1$  
   Puisque le fil est inextensible, de masse négligeable, de ne glisse pas sur la gorge de la poulie, donc :  
   $a_z = R \dot{\theta}$  
   A.N. : $M_m = 40 \times 10^{-2}(20 \times 4 + 2 \times 10^3)$  
   On trouve : $M_m = 2,14 \times 10^2 \, \text{N.m}$  

### 5. Calculons l'accélération angulaire de la poulie  
   On a : $a_z = R \dot{\theta}$  
   Donc : $\dot{\theta} = \frac{a_z}{R}$  
   A.N. : $\dot{\theta} = \frac{10 \, \text{rad.s}^{-2}}{4 \, \text{m}}$  
   Puisque $\dot{\theta} = \text{cte}$, donc la poulie est en rotation uniformément variée.  
6. L’équation horaire du mouvement de la poulie  
   On a : $\dot{\theta} = \frac{d\theta}{dt}$  
   Par intégration, on trouve : $\dot{\theta}(t) = \dot{\theta} t + C_1$  
   À $t = 0$, on a $\dot{\theta}(0) = 0 \Rightarrow C_1 = 0$  
   Alors : $\dot{\theta}(t) = \dot{\theta} t$  
   Et on a : $\dot{\theta}(t) = \frac{d\theta}{dt}$  
   Par intégration, on trouve : $\theta(t) = \frac{\dot{\theta}^2}{2} + C_2$  
   À $t = 0$, on a $\theta(0) = 0 \Rightarrow C_2 = 0$  
   Alors : $\theta(t) = \frac{1}{2} \dot{\theta} t^2$  
   D'où : $\theta(t) = \frac{1}{5} t^2$  

### 7. Calculons le nombre de tours effectués par la poulie entre $t_0$ et $t_1 = 20 \, \text{s}$  
   On a : $N = \frac{\Delta \theta}{2\pi}$ avec $\Delta \theta = \theta_1 - \theta_0$  
   Donc : $N = \frac{S_{t_2}}{2\pi}$  
   À l’instant $t_1$, on trouve : $N_1 = \frac{5 \times 20^2}{2\pi}$  
   A.N. : $N_1 = 318 \, \text{tours}$  

### a – Calculons $a_z$  
   * Les forces exercées sur sont : son poids $\overrightarrow{P}$  
   * D'après la deuxième loi de Newton, on a :  
   $\overrightarrow{P} = m_1 \overrightarrow{a_c}$  
   * Par projection sur $(OZ)$, on trouve :  
   $-m_1 g = m_1 a_z$  
   D'où : $a_z' = -g - 10 \, \text{m.s}^{-2}$  
   b – Les équations horaires du mouvement de $G$  
   $z'(t) = a'_z t^2 + V_A t + Z_A$ et $V'(t) = a_z' t + V_A$  
   Avec $a'_z = -10 \, \text{m.s}^{-2}$, $V_A = 16 \, \text{m.s}^{-1}$ et $Z_A = 42 \, \text{m}$  
   donc : $z(t) = z'(t) = -5t^2 + 16t + 42$  
   Et $V_z = -10t + 16$  
   c – Au sommet de la trajectoire de $G$,  
   la composante verticale de la vitesse de $G$ est nulle : $V_z(t_s) = 0$  
   D'où : $-10t_s + 16 = 0$  
   A.N. : $t_s = 1,6 \, \text{s}$  
   Donc : $z(t_s) = -5 \times (1,6)^2 + 16 \times 1,6 + 42$  
   On trouve : $z(t_s) = 54,8 \, \text{m}$  
   D'où : $h_{max} = z(t_s) = 54,8 \, \text{m}$
```

<!-- Page 227 -->

```markdown
# Exercice 2
## Étude d’un pendule pesant

1. Vérifions que $AG = L$  
   D'après le théorème du barycentre, on a :  
   $$ AG = \frac{m_1AG_1 + m_2AG_2}{m_1 + m_2} $$  
   Puisque $AG_1$ et $AG_2$ ont le même sens et la même direction donc :  
   $$ AG = \frac{m_1AG_1 + m_2AG_2}{m_1 + m_2} $$  
   Avec $AG_2 = \frac{L}{2}$ et $AG_1 = L + R$  
   $$ \Leftrightarrow AG = \frac{m_1(L+R) + m_2 \frac{L}{2}}{m_1 + m_2} $$  
   Donc :  
   $$ AG = \frac{5m_1R + m_2}{3m_1} $$  
   $$ \Leftrightarrow AG = \frac{4R}{L} $$  
   $$ \Rightarrow AG = \frac{4R}{L} $$  

2. L’expression du moment d’inertie du système $(S)$  
   On a :  
   $$ J = J_1 + J_2 $$ avec $J_1 = \frac{4m_1L^2}{40}$ et $J_2 = \frac{m_1L^2}{3}$  
   Alors :  
   $$ J = \frac{4m_1L^2}{40} + m_2L^2 $$  
   D'où :  
   $$ J = 1,36 \times 25 \times 10^{-3} \times (40 \times 10^{-2})^2 $$  
   On trouve : $J = 5,44 \times 10^{-2} \text{ kg.m}^2$  

3. L'équation différentielle du mouvement  
   Les forces exercées sur le système $(S)$ sont :  
   $\overrightarrow{P}$ : le poids de $(S)$  
   $\overrightarrow{R}$ : la réaction de l’axe $(\Delta)$.  
   A.N. : Par application de la deuxième loi de Newton en rotation, on a:  
   $$ \overrightarrow{P} + \overrightarrow{R} = m_a \overrightarrow{g} $$  avec $m = m_1 + m_2$  
   Par projection sur la direction de la composante normale $\overrightarrow{n}$ de la base de Frenet, on trouve :  
   $$ -m (m_1 + m_2)g \cos(\theta) = R = (m_1 + m_2) \sqrt{\frac{v^2}{L}} $$  
   Avec $m_2 = \frac{m_1}{2}$.  
   $$ R = \frac{3}{2} m_1 \left[ g \cos(\theta) + \frac{L^2 \theta^2}{L} \right] $$  
   Calculons la valeur de $R$ à $t_0 = 0$.  
   On a :  
   $$ R_0 = \frac{3}{2} \times 250 \times 10^{-3} [g \cos(0) + L \dot{\theta}^2] $$  
   A.N. : On obtient : $R_0 = 3,71 \text{ N}$  

   a - L’expression de $E_c$  
   $$ E_c = \frac{1}{2} J \dot{\theta}^2 $$  

   b - L'expression de $E_{pp}$  
   On a :  
   $$ E_{pp} = mgzg + C $$  
   Avec $E_{pp} = 0$ pour $zg = 0$ et $C = 0$  
   Donc : $E_{pp} = mgzg$  
   Donc :  
   $$ z_g = L - L \cos(\theta) $$  
   D'où :  
   $$ z_g = L \left( 1 - \frac{\theta^2}{2} \right) $$  
   Puisque $\theta$ est petit, $\cos(\theta) \approx 1 - \frac{\theta^2}{2}$  
   $$ z_g = \frac{L \theta^2}{2} $$  
   On remplace l’équation $(**)$ dans l’équation $(*)$.  
   On obtient : $E_p = \frac{m g L}{2} \theta^2$  

   c - L'expression de $E_m$  
   On a :  
   $$ E_m = E_c + E_{pp} $$  
   Puisque les frottements sont négligeables,  
   on a : $E_m = cte$  
   Donc : $E_m (0) = E_m(0)$  
   Alors :  
   $$ E_m = \frac{1}{2} J \dot{\theta}^2 + \frac{m g L \theta^2}{2} $$ avec $\dot{\theta}_{0} = 0$  
   D'où :  
   $$ E_m = \frac{1}{2} \times 250 \times 10^{-3} \times 10 \times 10^{-2} = (0,14)² $$  
   On trouve : $E_m = 7,35 \times 10^{-3}$  
```

<!-- Page 228 -->

```markdown
# Exercice 3
Étude de quelques niveaux énergétiques de l’atome de potassium

On a : $E_{\alpha} = -4,30 \, eV$

Calculons l’énergie associée à la transition $\gamma \rightarrow \alpha$:

On a : $E = h\nu$ avec $\nu = \frac{c}{\lambda_P}$  
Donc : $E = \frac{hc}{\lambda_P} \, \text{A.N.} : E = \frac{6,62 \times 10^{-34} \times 3 \times 10^8}{764,50 \times 10^{-9}} = 2,6 \times 10^{-19} \, J$  
Ou bien : $E_{\gamma} = 1,62 \, eV$

Calculons l’énergie associée à la transition $\beta \rightarrow \alpha$:

On a : $E' = h\nu'$ avec $\nu' = \frac{c}{\lambda_P}$  
Donc : $E' = \frac{hc}{\lambda_P} \, \text{A.N.} : E' = \frac{6,62 \times 10^{-34} \times 3 \times 10^8}{770 \times 10^{-9}} = 2,58 \times 10^{-19} \, J$  
Ou bien : $E' = 1,61 \, eV$

Déduisons les énergies des niveaux $\beta$ et $\gamma$:

- Calculons $E_{\beta}$  
  Donc : $E_{\beta} = E_{\alpha} \, \text{A.N.} : E_{\beta} = -4,34 + 1,61 = -2,73 \, eV$
  
- Calculons $E_{\gamma}$  
On a : $E' = E_{\gamma} - E_{\alpha}$  
Donc : $E_{Y} = E' + E_{\alpha} \, \text{A.N.} : E_{Y} = 1,62 - 4,34 = -2,72 \, eV$

# Exercice 4
Calcule du rendement d’une réaction d’estérification

1. Voir le tableau suivant :

| Composé organique    | Alcohol (B)        | Acide carboxylique (A) | Composé organique (E)   |
|----------------------|--------------------|------------------------|--------------------------|
| Nom                  | 2-méthylbutan-1-ol | Acide éthanoïque      | Éthanoate de 2-méthylbutyle |
| Formule semi-développée |  $CH_3 - CH_2 - CH - CH_2 - OH$ | $CH_3 - C(=O) - OH$ | $CH_3 - C(=O) - O - CH_2 - CH_2 - CH_3$ |
| Formule brute        | $C_5H_{12}O$       | $C_2H_4O_2$            | $C_7H_{14}O_2$           |
| Groupe fonctionnel   | -OH                | -C(=O) OH              | -C(=O) -C               |

2. Cette réaction est appelée réaction d'estérification, elle est lente et limitée.

3. L'équation de cette réaction est :  
$$CH_3 - CH_2 - CH - CH_2 - OH + CH_3 - C(=O) - OH \rightleftharpoons CH_3 - C(=O) - O - CH_2 - CH_2 - CH_3 + H_2O$$

4. Vérifions que le mélange est équimolaire :  
   - Calculons $n_0(A)$ :  
     On a : $n_0(A) = \frac{p(A).V_A}{M(A)} \, \text{A.N.} : n_0(A) = \frac{1,05 \times 8,6}{60} = 0,15 \, mol$  
   - Calculons $n_0(B)$ :  
     On a : $n_0(B) = \frac{p(B).V_B}{M(B)} \, \text{A.N.} : n_0(B) = \frac{0,81 \times 16,3}{88} = 0,15 \, mol$

   Puisque $n_0(A) = n_0(B)$, le mélange est équimolaire.

5. a - Déterminons la valeur de $x_{eq}$ :  
   On a : $n_f(A) = n_0(A) - x_{eq}$  
   Donc : $x_{eq} = n_0(A) - n_f(A)$
```


<!-- Page 229 -->

```markdown
# D'après les courbes, on a : $n_f(A) = 0,05 \, mol$
Alors : $x_{eq} = 0,15 - 0,05 = 0,1 \, mol$

## b – Déterminons la valeur de $t_{1/2}$ :
À un instant $t$, on a : $n(A) = n_0(A) - x$.
À la date $t = t_{1/2}$, on trouve : $n(A)_{1/2} = n_0(A) - x(t_{1/2})$.\\
Donc : $n(A)_{1/2} = n_0(A) - x_{eq} \quad A.N. : n(A)_{1/2} = 0,1 \, mol$.

## c – Calculons la vitesse volumique aux instants $t_0$ et $t_1$ :
* On a : $v = -\frac{dx}{dt}$ avec $x = n_0(A) - n(A)$
Donc : $v = -\frac{1}{V_m} \frac{d(n_0(A) - n(A))}{dt}$\\
Alors : $v = -\frac{1}{V_m} \frac{dn(A)}{dt}$ 

### * Calculons $v_0$ :
À $t_0 = 0$, on trouve : $v_0 = -\frac{1}{V_m} \frac{dn(A)}{dt} \bigg|_{t_0} \quad A.N. : v_0 = -\frac{1}{25 \times 10^{-3}} \times x_{0.15 - 0} \times \frac{0}{0 - 20} = 0,3 \, mol \cdot L^{-1} \cdot min^{-1}$.

### * Calculons $v_1$ :
À la date $t_1 = 40 \, min$, on a : $v_1 = -\frac{1}{V_m} \frac{d(n(A))}{dt} \bigg|_{t_1}$\\
A.N. : $v_1 = -\frac{1}{25 \times 10^{-3}} \times \left(\frac{0,08 - 0,03}{(20 - 80)}\right) = 3,33 \times 10^{-2} \, mol \cdot L^{-1} \cdot min^{-1}$.

* On constate que $v_0 > v_1$.
Déduction : La vitesse volumique de la réaction diminue avec le temps à cause de la diminution des quantités de matière des réactifs.

## Calculons la constante d'équilibre associée à cette réaction :
On a : 

$$ K = \frac{[E]_{eq} \cdot [H_2O]_{eq}}{[A]_{eq} \cdot [B]_{eq}} $$

Avec : $[E]_{eq} = [H_2O]_{eq} = \frac{x_{eq}}{V_m} \, et \, [A]_{eq} = [B]_{eq} = \frac{n_f(A)}{V_m}$

Donc : $k = \frac{\left(\frac{x_{eq}}{V_m}\right)^2}{\frac{n_f(A)}{V_m} \cdot \frac{n_f(A)}{V_m}}$ 

Alors : $k = \frac{(0.1)^2}{(0.05)^2} = 4$.

## Le rendement de cette réaction :
On a : $r = \frac{n_{exp}}{n_{eq}}$ avec $n_{eq} = x_{eq}$ et $n_R = n_0(A) = n_0(E)$.\\
Alors : $r = \frac{x_{eq}}{n_0(A)}$ avec $n_0(A) = n_f(A) + x_{eq}$. 

$$ \Leftrightarrow \frac{1}{r} = 1 + \frac{x_{eq}}{n_f(A)} \, (*) $$

Et on a : $k = \frac{n_f(A)^2}{x_{eq} \cdot n_f(A)}$.

$$ \Leftrightarrow \frac{1}{\sqrt{k}} = \frac{x_{eq}}{n_f(A)} \, (**) $$

On remplace l’équation $(**)$ dans l’équation $(*)$, on obtient :

$$ \frac{1}{r} = 1 + \frac{1}{\sqrt{k}} $$

A.N. : $r = \frac{\sqrt{4}}{4 + 1} = \frac{2}{5} = 0,67 \, 67 \%$.

## a – Calculons l’avancement final de cette réaction :
On a : $k' = \frac{[E]_{eq} \cdot [H_2O]_{eq}}{[A]_{eq} \cdot [B]_{eq}}$ avec : $[E]_{eq} = [H_2O]_{eq} = \frac{x_{eq}}{V_m}$ et $[A]_{eq} = \frac{n_f(A)}{V_m}$ et $[B]_{eq} = \frac{n_r(A)}{V_m}$.
```


<!-- Page 230 -->

```markdown
D'où : $k' = \left( \frac{x'_{eq}}{v_m} \right)^2$

Avec : $n'_{r}(A) = 0.15 - x'_{eq}$ et $n'_{r}(B) = 0.3 - x'_{eq}$

Alors : $k' = \frac{x'_{eq}}{(0.15 - x'_{eq})(0.3 - x'_{eq})}$

Et puisque la constante d'équilibre ne dépend pas des quantités de matières initiales des réactions, donc $k' = k = 4$

D'où : $4 = \frac{x'_{eq}}{(0.15 - x'_{eq})(0.3 - x'_{eq})} \iff 4 \times (0.15 \times 0.3 - 4 \times 0.3 \times x'_{eq} + r \times x'_{eq}^2 = x'_{eq}^2$

$3 x'_{eq}^2 - 1.8 x'_{eq} + 0.18 = 0$

On a $\Delta > 0$, alors cette équation admet deux solutions qui sont :

$$
\left\{ 
x'_{eq1} \approx \frac{1.8 + \sqrt{1.08}}{2 \times 3} \approx 0.47 \, \text{mol} 
\right.
$$

$$
x'_{eq2} \approx \frac{1.8 - \sqrt{1.08}}{2 \times 3} \approx 0.13 \, \text{mol}
$$

b - Calculons le rendement de cette réaction

On a : $r' = \frac{n'_{exp}}{n'h}$ avec $n_{eq} = n'_{0}(A)$

Donc : $r' = \frac{x'_{eq}}{n'_{0}(A)}$

A.N. : $r' = \frac{0.13}{0.15} = 0.87 = 87\%$

c - On a : $r = 67\%$ et $r' = 87\%$

On constate que $r < r'$

Conclusion: L'utilisation d'un réactif en excès par rapport à l'autre est une méthode permettant d'augmenter le rendement d'une réaction d'estérification.

- Autres méthodes permettant d'améliorer le rendement d'une réaction d'estérification :
  - Éliminer un produit lors de sa formation
  - Remplacer l'acide carboxylique par son anhydride
```

<!-- Page 231 -->

```markdown
# Devoir surveillé N° 5 – 2
## Niveau: 2BIOF

### Exercice 1
Étude du mouvement d’un solide sur un plan horizontal

Un solide $(S)$ de masse $m = 0,5 \, kg$ est en mouvement rectiligne sur un plan horizontal sous l’action d’une force constante $\vec{F}$ horizontale. La figure ①
À l’instant $t = 0 \, s$, le point $G$ est confondu avec le point $O$, d’abscisse $x_0 = 0 \, m$.
Étudions le mouvement de $G$ dans un repère $R(O, \vec{i}, \vec{j})$ lié à un référentiel terrestre supposé galiléen.

1. En exploitant la courbe de la figure ② déterminer:
   - a) La nature du mouvement (une justification est demandée).
   - b) La valeur de la vitesse initiale $V_0$ et celle de l’accélération $a_x$ de $G$.

2. En appliquant la deuxième loi de Newton, déterminer la composante normale $R_N$ de $\vec{R}$ la réaction du plan.

3. Sachant que le coefficient de frottement est : $K = 0,6$. Calculer la composante tangentielle $R_T$ de la réaction.

4. Calculer l’intensité de la force $\vec{F}$.

5. Le centre $G$ de $(S)$ passe par un point $A$ à un instant $t_4$ avec une vitesse $V_A = 40 \, m.s^{-1}$
   - a) Déterminer la valeur de $t_4$.
   - b) Calculer la distance $OA$.
   - On donne: $g = 10 \, m.s^{-2}$.

### Exercice 2
Étude du mouvement d’une boule dans le champ de pesanteur

Un joueur de pétanque lance une boule de masse $m$ à l’instant $t = 0$ avec une vitesse $\vec{V_0}$ faisant un angle $\alpha$ avec le plan horizontal.
On étudie le mouvement de $G$ centre d’inertie de la boule dans un repère $R(O, \vec{i}, \vec{j}, \vec{K})$ lié à un référentiel terrestre supposé galiléen.
La résistance de l’air est considérée négligeable.
La courbe de la figure représente les variations l’ordonnée $y_G$ en fonction de l’abscisse du point $x_G$.

1. En appliquant la deuxième loi de Newton à la boule déterminer les composantes selon l’axe $(Ox)$ et selon $(Oy)$ de l’accélération de son centre d’inertie $G$.
```

<!-- Page 232 -->

```markdown
# Établir les équations horaire du mouvement de $G$ selon les deux axes.

1. Montrer que l'équation de la trajectoire peut s'écrire sous la forme:
   $$ y_G = \frac{g}{2v_0^2\cos^2\alpha} \left( (x_G-x_A)^2 + (x_G-x_A) \tan\alpha + y_A \right) $$

2. En exploitant la courbe de la figure² déterminer :
   a. Les coordonnées $x_s$ et $y_s$ du sommet de la trajectoire.  
   b. Le coefficient $k$.  
   c. La distance $OP$  

3. Montrer que: 
   $$ \sin(2\alpha) = \frac{2g(x_s-x_A)}{v^2} $$  
   a. Calculer la valeur de $\alpha$.  
   b. La boule touche le sol au point $P$ à un instant $t_p$.  
      - Calculer la date $t_p$.
      - Calculer la vitesse d'impact de la boule avec le sol.

**Données :**
- L'intensité de la pesanteur: $g = 10 \, \text{m.s}^{-2}$
- La vitesse initiale: $v_A = 12 \, \text{m.s}^{-1}$

---

# Exercice 3
## Étude du mouvement d’un parachutiste dans l’air

Cet exercice vise à étudier le mouvement d'un parachutiste et son équipement dans l’air. Étudions le mouvement du centre d’inertie $G$ du système $(S)$, constitué du parachutiste et son équipement dans un repère $R(0,K)$ lié à un référentiel terrestre supposé galiléen (figure 0). On considère que la trajectoire de $G$ est verticale et que l'accélération de la pesanteur reste constante.

**Données :**
- Masse du parachute et son équipement: $m = 80 \, \text{kg}$
- L'intensité de champ de pesanteur: $g = 10 \, \text{m.s}^{-2}$

### I - Première phase: chute libre verticale du parachute

À un instant $t = 0$, le parachutiste qui sans vitesse initiale un hélicoptère en vol stationnaire située à une hauteur $H$ au-dessus du sol. Durant cette phase le parachute est fermé et l'action du l'air sur celui-ci est considérée négligeable.

1. Par application de la deuxième loi de Newton exprimer $a_z$ en fonction de l’intensité de pesanteur.
2. Établir les expressions de la vitesse $v_z$ et de position $z(t)$, du centre d’inertie du système $(S)$.

- Le parachutiste ouvre son parachute lorsque sa vitesse atteint la valeur $v_1 = 35 \, \text{m.s}^{-1}$
   a. Calculer la durée de cette phase.  
   b. Calculer la distance parcourue par le système $(S)$ durant cette phase.  

### II - Deuxième phase: chute libre verticale avec frottement du parachute

Le parachutiste ouvre son parachute à un instant que l’on choisit comme nouvelle origine des dates $(t_0 = 0)$ pour cette phase. La figure 2. Durant cette phase, le système $(S)$ est soumis pas de son poids à une force de frottement exercée par l’air dont l'expression est:
$$ \vec{F} = -k v_z^2 \vec{k} $$  

Un système d'acquisition convenable intégré dans l'équipement du parachutiste à permettre de tracer le graphique ci-dessous qui représente les variations de l'accélération $a_G$ de $G$ en fonction du temps $t$.

3. En appliquant la deuxième loi de Newton montrer que l'équation différentielle du mouvement s'écrit sous la forme suivante:
$$ \frac{d^2z}{dt^2} + A v_z^2 = g $$  
en précisant l’expression de $A$ en fonction de $k$ et $m$.

4. Déterminer l’expression de la vitesse limite $v_l$ en fonction de $g$, $m$, et $k$.

5. En exploitant la courbe de la figure 2 déterminer la valeur de l’accélération initiale $a_{0}$ et de la constante $A$.
6. Calculer la valeur du coefficient de frottement.

7. Le tableau ci-dessous donne les valeurs d'accélération de la liste aux temps différents.
```

<!-- Page 233 -->

```markdown
# a
- Vérifier que l'équation différentielle du mouvement peut s'écrire sous la forme suivante: 
$$ \frac{dv}{dt} + 0, 2v^2 = 10 $$
- En utilisant la méthode d'Euler, compléter ce tableau, on calculons la valeur de la vitesse $v_1$ et celle de l'accélération $a_3$.

| Temps en (s) | $t_0$ | $t_1$ | $t_2$ | $t_3$ |
|--------------|-------|-------|-------|-------|
| Vitesse en (m.s$^{-1}$) | -35  | -235  | 30,62 | 28,84 |
| Accélération en (m.s$^{-2}$) | -235 | -203,2 | -177,52 | - |

## Exercice 4
### Étude de l'électrolyse d’un solution électrolytique

On effectue l'électrolyse d'une solution aqueuse de nitrate d'argent ($Ag^{+}_{(aq)} + NO_3^{-}_{(aq)}$) acidifiée par une solution aiguese d'acide nitrique ($H_3O^{+}_{(aq)} + NO_3^{-}_{(aq)}$) en utilisant deux électrodes en graphite.  
Le volume du mélange dans l'électrolyseur est $V = 400 \, \text{ml}$.  
On mesure le pH du mélange avant la fermeture du circuit et on trouve $pH = 3$, puis on ferme le circuit à un instant choisi comme origine des dates ($t = 0$). Un courant électrique d’intensité constante $I = 0,3 \, A$ circule alors dans le circuit.  
L’équation bilan de la réaction est:  
$$ Ag^{+}_{(aq)} + 6H_2O_{(l)} \rightarrow O_2(g) + 4H_3O^{+}_{(aq)} + Ag(s) $$

1. Écrire l’équation de la réaction qui se produit à l’anode.  
2. À l’aide du tableau d’avancement de la réaction, montrer que l’expression de l’avancement $x$ de la réaction à un instant $t$ est: 
   $$ x = \frac{1}{4} (10^{-pH} - 10^{-pH_0}) $$
   et $pH_t$ représente la valeur du pH du mélange à cet instant.  
3. À l’instant $t_1$ le pH du mélange prend la valeur: $pH_1 = 1,5$
   - Calculer la valeur de l’avancement à l’instant $t_1$. 
   - Calculer la date instant t1.
   - Calculer la masse de l'argent produite à l’instant $t_1$.
  
### Données
- Masse molaire de l'argent: $M(Ag) = 108 \, \text{g.mol}^{-1}$
- La constante de Faraday: $F = 9,65 \times 10^4 \, \text{C.mol}^{-1}$
- Les couples $ox/red$ intervenant dans cette électrolyse: $Ag^{+}/Ag : O_2/H_2O$

## Correction
### Exercice 1
### Étude du mouvement d’un solide sur un plan horizontal 

1. En exploitant la courbe déterminer:
   - a. La trajectoire de $S$ est rectiligne et l’équation horaire de sa vitesse est affine donc son mouvement rectiligne uniformément varié.
   - b. Déterminons 1 valeur $V_0$ et celle de $a_x$.
     D’après le graphe, on a: $V_0 = 10 \, \text{m.s}^{-1}$
     à $a_x = \frac{10 - 2}{0 - 5} = 2 \, \text{m.s}^{-2}$

2. Déterminons la valeur de $R_N$.
   - Le système étudié: Le corps ($S$) 
   - Les forces extérieures exercées sur ($S$):
     - $\vec{P}$ : Son poids.
     - $\vec{R}$ : La réaction du plan horizontal.
     - $\vec{F}$ : Une force constante.

On représente les forces sur le schéma:

D’après la $2^{ème}$ loi de Newton: 
$$ \vec{P} + \vec{R} + \vec{F} = m \vec{a} $$

Donc: $R_N = P$ avec $P = m \cdot g$
A.N: $R_N = 0,5 \times 10 = 5 \, N$

Calculons la valeur de $R_T$.
- On a: $R = \frac{R_N}{R_T}$
- Donc: $R_T = R_N$

A.N: $R_T = 0,6 \times 5 = 3 \, N$

Calculons l’intensité de la force $\vec{F}$.
- Par projection sur l’axe $(Ox)$ : $ \vec{F} - R_T = ma_x$
Donc: $F = R_T + ma_x$
A.N: $F = 3 + 2 \times 5 = 4 \, N$

3. a - Déterminons la valeur de $t_A$.
- On a $V_C = a_x t_A + V_0$
- Au point A cette relation devient: $V_A = a_x t_A + V_0$
- Alors: $t_A = \frac{V_A - V_0}{a_x} = \frac{-V_0}{\frac{40 - 10}{2}} = 15 \, s$

b - Calculons la distance $OA$.
- On a: $x_A = \frac{a_x}{2} t^2 + V_0 t + x_0$
- Au point A on trouve: $x_A = \frac{40}{2} \times t^2 + V_0t + x_0$
- Donc: $x_A = \frac{a_x - x_0}{2} t^2 + V_0 t$ 
A.N: $O_A = \frac{1}{2} \times (15)^2 + 10 \times 15 = 375 \, m$
```

<!-- Page 234 -->

```markdown
# Exercice 2 
Étude de la modulation et la démodulation d’un signal électrique

1. Déterminons les composants $a_x$ et $a_y$ de l'accélération $\vec{a}_C$ du centre d'inertie de la boule :
   - La résistance de l’air est négligeable, donc la boule est en chute libre parabolique sous l’action de son poids $\vec{P}$
   - Par application de la 2ème loi de Newton, on a : $\vec{P} = m\vec{a}_C$
   - On projette cette relation sur les axes $(Ox)$ et $(Oy)$, on trouve :
   $$
   \begin{cases}
   a_x = 0 \\
   a_y = -g
   \end{cases}
   $$

2. Les équations horaires du mouvement :
   - Les équations horaires de la vitesse
   - On a :
   $$
   a_x = 0 \quad a_y = -g
   $$

   - Par intégration, on trouve :
   $$
   V_x = V_{0x} \\
   V_y = -gt + V_{0y}
   $$
   avec $V_{0} \left\{
   \begin{array}{l}
   V_{0x} = V_A \cos(\alpha) \\
   V_{0y} = V_A \sin(\alpha)
   \end{array}
   \right.$$

   - On trouve :
   $$
   V_y = -gt + V_A \sin(\alpha)
   $$

3. Les équations du vecteur position
   - On a :
   $$
   \begin{cases}
   V_x = \frac{dx}{dt} = V_A \cos(\alpha) \\
   V_y = \frac{dy}{dt} = -gt + V_A \sin(\alpha)
   \end{cases}
   $$

   - Par intégration, on trouve :
   $$
   \begin{cases}
   x = V_A \cos(\alpha) \cdot t + x_A \\
   y = -\frac{gt^2}{2} + V_A \sin(\alpha) \cdot t + y_A
   \end{cases}
   $$

4. Montrons l’équation de la trajectoire :
   - On a :
   $$
   x = V_A \cos(\alpha) \cdot t + x_A \quad (*)
   $$
   - On a :
   $$
   y = -\frac{gt^2}{2} + V_A \sin(\alpha) \cdot t + y_A \quad (**)
   $$

   L’équation $(*)$ donne :
   $$
   t = \frac{x - x_A}{V_A \cos(\alpha)}
   $$

   - On remplace $t$ par $\frac{x - x_A}{V_A \cos(\alpha)}$ dans l'équation $(**)$, on trouve :
   $$
   y_G = -\frac{g}{2} \left( \frac{x_G - x_A}{V_A \cos(\alpha)} \right)^2 + V_A \sin(\alpha) \cdot \left( \frac{x_G - x_A}{V_A \cos(\alpha)} \right) + y_A
   $$

   Alors :
   $$
   y_G = -\frac{g}{2 V_A^2 \cos^2(\alpha)} \left( (x_G - x_A)^2 + (x_G - x_A) \tan(\alpha) + y_A
   \right)
   $$

5. a - D'après la courbe de la figure $(\circ)$, on a : $x_A = 2 \, m$ et $y_A= 1.5 \, m$
   b - D'après la courbe de la figure $(\circ)$, on a : $x_S = 9.2 \, m$ et $y_S = 5.1 \, m$
   c - D'après la courbe, on a : $OP = x_0 = 17.8 \, m$

6. Calculons la valeur de l’angle $\alpha$

   Au sommet de la trajectoire, on a : $V_y(t_s) = 0$
   Donc : $gts + V_A \sin(\alpha) = 0$
   Alors :
   $$
   t_s = \frac{V_A \sin(\alpha)}{g} \quad (1)
   $$
   Et on a : $x_S = V_A \cos(\alpha) \cdot t_s \quad (2)$

   On remplace l’équation (1) dans l’équation (2), on trouve :
   $$
   x_S - x_A = \frac{V_A^2 \cos^2(\alpha) \sin(\alpha)}{g} \quad (1)
   $$
   (on rappelle que : $\sin(2\alpha) = 2 \cos(\alpha) \sin(\alpha)$)

   A.N. : $\sin(2\alpha) = 1 \Rightarrow 2\alpha = 90^\circ \Rightarrow \alpha = 45^\circ$

   a - On a : $x_G = V_A \cos(\alpha) + x_A$
   Au point P, on obtient : $x_P = V_A \cos(\alpha) \cdot t_p + x_A$
   Donc : $t_P = \frac{x_P - x_A}{V_A \cos(\alpha)} \approx 1.86 \, s$

   b - Calculons $V_P$ :
   On a :
   $V_P = \sqrt{V_x^2 + V_y^2} \quad \text{avec :} \\
   V_{xP} = V_A \cos(\alpha) \\
   V_{yP} = -g t_P + V_A \sin(\alpha) \\
   V_P = \sqrt{(V_A \cos(\alpha))^2 + (-g t_P + V_A \sin(\alpha))^2}
   $$

   A.N. : $V_P \approx (12 \cos(45^\circ)^2 - (10 \times 1.86 + 12 \sin(45^\circ))^2 \approx 13.2 \, \text{m.s}^{-1}$
```

<!-- Page 235 -->

```markdown
# Exercice 2  
Étude de la pile nickel-cadium

## I- Première phase: chute libre verticale du parachiste
1. Le système $(S)$ est en chute libre verticale, donc il soumis à son poids uniquement.
   - Par application de la 2ème loi de Newton, on a : $P = m g$
   - Par projection sur l'axe $(Oz)$, on trouve: $m a_z = P$
   Donc : $a_z = \frac{P}{m} = g$

2. Les équations horaires du mouvement :
   - On a : $a_z = g$
   Donc : $\frac{dz}{dt} = g$
   Et en intégrant, on a : $v_z = gt + C$
   Donc : $v_z = gt$
   Et puisque $v_z = \frac{dz}{dt}$, donc : $\frac{dz}{dt} = g$
   
   Par intégration, on trouve : $z = \frac{1}{2}gt^2 + C'$
   À $t = 0$, on a $z(0) = 0 \Rightarrow C' = 0$
   Donc : $z = \frac{1}{2}gt^2$

   a) - On a : $v_z = gt$
   À la date $t_1$, on a : $v_1 = gt_1$

   Donc : $t_1 = \frac{v_1}{g} = \frac{3.5}{10} = 0.35 \ s$

   A.N.: $t_1 = 3.5 \ s$

   b) - On a : $z = \frac{1}{2}gt^2$
   À la date $t_1 = 3.5 \ s$, on trouve : $z_1 = \frac{1}{2}gt_1^2$
   Donc : $z_1 = \frac{1}{2} \times 10 \times (3.5)^2 = 61.25 \ m$
   A.N.: $z_1 = \frac{1}{2} \times 10 \times (3.5)^2 = 61.25 \ m$
   Durant cette phase, le système $(S)$ a parcouru une distance : $h = 61.25 \ m$.

## II- Deuxième phase: chute libre verticale avec frottement du parachiste
* Montrons l'équation différentielle du mouvement :
  * Les forces exercées sur le système $(S)$ sont :
  - $\overrightarrow{P}$ : Poids de $(S)$
  - $\overrightarrow{F_f}$ : La force de frottement fluide,
  - $\overrightarrow{F_A}$ : Poussée d'Archimède (négligeée).

  - Par application de la 2ème loi de Newton on a : 
  $$\overrightarrow{P} + \overrightarrow{F_f} + \overrightarrow{F_A} = m a_g$$
  Par projection sur l'axe $(Oz)$, on trouve:
  $$mg - kv = m \frac{d^2z}{dt^2}.$$

---

# Exercice 4  
Étude de l'électrolyse d’une solution électrolytique

1. Au voisinage de l'anode, se produit une oxydation de demi-équation:  
$$6H_2O(l) \rightleftharpoons O_2(g) + 4H^+(aq) + 4e^-$$

   Montrons que: $x = \frac{1}{4}(10^{-pH} - 10^{-pH})$
   Le tableau d'avancement associé à la demi-équation d'oxydant :
```
```

<!-- Page 236 -->

```markdown
D'après le tableau, on a : $n(H_3O^+) = n_0 + 4x$  
Donc : $[H_3O^+]_t = [H_3O^+]_0 + 4x$  
$4x = [H_3O^+]_t - [H_3O^+]_0 \times V$  
$ \Rightarrow x = \frac{[H_3O^+]_t - [H_3O^+]_0}{4} $ avec $[H_3O^+] = 10^{-pH}$  

### a - Calculons la valeur de $x_1$ :  
On a : $x_1 = \frac{1}{4} \sqrt{(10^{-pH} - 10^{-pH_0})}$  
A.N. : $x_1 \approx \frac{1}{4} \cdot (10^{-3}) \approx 3,06 \times 10^{-3}$ mol  

### b - Déterminons le date $t_1$ :  
D'après le tableau d'avancement, on a : $n(e^-) = 4x$  
Donc, à la date $t_1$, on trouve : $n_1(e^-) = 4x_1$ avec $n_1(e^-) = \frac{|x| \Delta t_1}{F}$  
Alors :  
$$ \Delta t_1 = \frac{4 x_1 \cdot 3,06 \times 10^{-3} \cdot 9,65 \times 10^6}{0,3} \approx 3,94 \times 10^3 \text{ s} $$  

### c - On a :  
$n_1(A_g) = 4x_1$  
$$ \frac{m_1}{M(A_g)} = 4x_1 $$  
$$ \Rightarrow m_1 = 4x_1 \times M(A_g) $$  
A.N. : $m_1 = 4 \times 3,06 \times 10^{-3} \times 108 \approx 1,32 \text{ g}$
```

<!-- Page 237 -->

I'm unable to extract any content from the image.