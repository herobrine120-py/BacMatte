

<!-- Page 1 -->

```markdown
# PHYSIQUE - CHIMIE
Cours détaillés, exercices résolus et devoirs corrigés

## Tome 2

- Chimie
- Électricité

Prof: HABIB Ahmed
```

<!-- Page 2 -->

```markdown
# sommaire

## Physique
- Dipôle RC........................................................3
- Dipôle RL........................................................22
- Oscillations libres dans un circuit RLC série...............40
- Oscillations forcées dans un circuit RLC série ............60
- Transmission d’informations – Modulation d’amplitude.......72

## Chimie
- Transformations liées aux réactions acidobasiques dans une solution aqueuse.......................................86
- Évolution d’un système chimique-Transformations spontanées dans les piles et récupération d’énergie.........................108

## Devoirs..........................................................125
## Bibliographies utilisées .................................181
```

<!-- Page 3 -->

```markdown
# Dipôle RC

## Objectifs
- Connaître les composants du condensateur et son symbole.
- Connaître la relation entre la charge et l’intensité de courant.
- Connaître la relation entre la charge et la tension aux bornes du condensateur.
- Savoir déterminer la capacité équivalente des condensateurs montés en série ou parallèle.
- Établir l’équation différentielle et sa solution pour un dipôle RC soumis à un échelon de tension.

## Axes du cours
### Le condensateur
- Définition.
- Charge du condensateur.
- Relation entre la charge et l’intensité du courant.
- Relation entre la charge du condensateur et la tension entre ses bornes.

### Association des condensateurs
- Association en série - Association en parallèle.

### Réponse d’un dipôle RC série à un échelon de tension
- Le dipôle RC - Échelon de tension.
- Étude expérimentale de la réponse d’un dipôle RC série à un échelon de tension.
- Étude théorique de la réponse d’un dipôle RC série à un échelon de tension montante.
- Étude théorique de la réponse d’un dipôle RC série à un échelon de tension descendante.
- La constante du temps du dipôle RC.

### L’énergie emmagasinée dans le condensateur
```

<!-- Page 4 -->

```markdown
# I. Le condensateur

## 1. Définition
Le condensateur est un dipôle constitué de deux plaques conductrices, appelées armatures, séparées par un isolant diélectrique.  
Le symbole du condensateur est :

## 2. Charge du condensateur
La charge du condensateur ou la quantité d'électricité emmagasinée dans le condensateur est la charge de l'armature positive du condensateur, son symbole est $q$ et son unité est le coulomb (C) : $q = +q_A = -q_B$

## 3. Relation entre la charge et l’intensité du courant
L’intensité du courant électrique est le débit de porteurs de charge qui traversent la section du conducteur par unité du temps.
- Cas du courant continu : $i(t) = \frac{q}{\Delta t}$
- Cas du courant variable : $i(t) = \frac{dq}{dt}$  
L’unité de l’intensité du courant est l’ampère (A)

## 4. Relation entre la charge du condensateur et la tension entre ses bornes
La charge $q(t)$ du condensateur est proportionnelle avec la tension $u_c(t)$ entre ses bornes, le coefficient de proportionnalité est appelé capacité du condensateur, on la note $C$, son unité en (S.I) est Farad (F) tel que : $q(t) = C \cdot u_c(t)$  
Remarque: La capacité du condensateur est une grandeur positive, elle distingue le condensateur et elle ne dépend pas de la tension entre ses bornes ni de la durée de charge.

---

# II. Association des condensateurs

## 1. Association en série
La capacité du condensateur équivalent à un ensemble de condensateurs de capacités $C_1, C_2, C_3, ...$ et $C_n$ branchés en série est : 
$$ \frac{1}{C} = \frac{1}{C_1} + \frac{1}{C_2} + \frac{1}{C_3} + ... + \frac{1}{C_n} $$  
L'association en série des condensateurs permet d’obtenir un condensateur de capacité plus petite pouvant supporter une tension plus grande qui ne peut pas être supporter pour chaque condensateur s'il est utilisé séparément.

## 2. Association en parallèle
La capacité du condensateur équivalent à un ensemble de condensateurs $C_1, C_2, C_3, ...$ et $C_n$ branchés en parallèle est : 
$$ C = C_1 + C_2 + C_3 + ... + C_n $$  
L'association en parallèle des condensateurs permet d’obtenir un condensateur de capacité plus grande pouvant emmagasiner une charge plus grande sous une tension plus petite.

---

Sous-multiple de Farad
```

<!-- Page 5 -->

```markdown
### III Réponse d'un dipôle RC série à un échelon de tension

1. **Dipôle RC**

   Le dipôle RC série est l’association en série d’un conducteur ohmique de résistance $R$ et d’un condensateur de capacité $C$.

2. **Échelon de tension**

   On dit qu’un dipôle RC est soumis à un échelon de tension si la tension entre ses bornes varie instantanément de zéro jusqu’à une valeur constante $E$ (échelon montant) ou l'inverse (échelon descendant).

   **Échelon montant**

   $$ 
   pour \; t < 0 : u(t) = 0 \\
   pour \; t > 0 : u(t) = E 
   $$

   **Échelon descendant**

   $$ 
   pour \; t < 0 : u(t) = E \\
   pour \; t > 0 : u(t) = 0 
   $$

3. **Étude expérimentale de réponse d’un dipôle RC série à un échelon de tension**

   **Le montage électrique utilisé**

   Pour étudier la réponse d’un dipôle RC à un échelon de tension, utilise le montage électrique schématique dans la figure ci-contre qui comporte :
   - Générateur idéal de tension de f.e.m. $E$
   - Conducteur ohmique de résistance $R$
   - Condensateur déchargé de capacité $C$
   - Interrupteur double $K$
   - Fils de connexion

   **Observations expérimentales**

   - La tension $u_C$ aux bornes du condensateur est une fonction continue.
   - La tension $u_C$ aux bornes du condensateur croît pendant la charge et décroît pendant la décharge.
   - On distingue entre deux régimes :
     - **Régime transient** : pendant lequel la tension $u_C$ croît (ou décroît) et on l’obtient lorsque $t < 5t$.
     - **Régime permanent** : pendant lequel la tension $u_C$ reste constante et à pour valeur $E$ (ou $0$) et on l’obtient lorsque $t \geq 5t$.
   - La durée de charge ou de décharge du condensateur augmente lorsque la valeur de $R$ ou $C$ augmente.

4. **Étude théorique de la réponse d’un dipôle RC série à un échelon de tension montant**

   **Équation différentielle**

   On réalise le montage électrique ci-contre, le condensateur est initialement déchargé à un instant $t = 0$, on ferme l’interrupteur $K$.

   D’après la loi d’additivité des tensions on a : 
   $$ u_C + u_R = E $$
   Et d’après la loi d’Ohm on a :
   $$ u_R = Ri $$

   Donc :
   $$ u_C + Ri = \frac{dq}{dt} $$
   alors :
   $$ u_C + R \frac{dq}{dt} = E $$

   D’où :
   $$ u_C + R \frac{du_C}{dt} = E \iff u_C + RC \frac{du_C}{dt} = E $$

   C’est l’équation différentielle vérifiée par la tension $u_C$ aux bornes du condensateur.
```

<!-- Page 6 -->

```markdown
### La solution de l’équation différentielle
On admet que la solution de l’équation différentielle vérifiée par la tension $u_c$ s’écrit sous la forme suivante : $u_c(t) = A.e^{-mt} + B$ avec $A$, $B$ et $m$ sont des constantes à déterminer.

- On détermine $B$ en utilisant l’équation différentielle :
$$
u_c + RC \frac{du_c}{dt} = E
$$
$A.e^{-mt} + B + RC \frac{d(A.e^{-mt} + B)}{dt} = E$

Alors, on a : $A.e^{-mt} - RCAm.e^{-mt} + B = E - B$

Pour que cette équation soit vérifiée $\forall t \geq 0$ il faut que : $1 - RCm = 0$ et $E - B = 0$

Donc : $m = \frac{1}{RC}, \quad E = B$

Alors la tension aux bornes du condensateur devient : $u_c(t) = A.e^{-t/τ} + E$

À $t = 0$ le condensateur est initialement déchargé donc : $u_c(0) = 0$

Et on a : $u_c(0) = A.e^{0} + E$
$$
A + E = 0 \quad \Rightarrow \quad A = -E
$$
finalement on aura : $u_c(t) = E(1 - e^{-t/τ})$

### L’expression de la charge du condensateur
On sait que $q = C u_c$

Et on a : $u_c(t) = E(1 - e^{-t/τ})$

Donc : $q(t) = C E(1 - e^{-t/τ})$

Ou bien : $q(t) = Q_m(1 - e^{-t/τ})$

$Q_m$: est la charge maximale stockée dans le condensateur tel que : $Q_m = C.E$.

### L’expression de l’intensité du courant
On sait que : $$i = \frac{dq}{dt}$$

Et on a : $q(t) = C E(1 - e^{-t/τ})$

Donc : $$i(t) = \frac{C E e^{-t/τ}}{τ} \quad \text{avec } R C = 1$$

$$i(t) = \frac{E}{R} e^{-t/τ}$$ 

$i$ est l’intensité du courant en régime permanent : $I_p = \frac{E}{R}$.

### Étude théorique de la réponse d’un dipôle RC série à un échelon de tension descendant
#### Équation différentielle
On réalise le montage électrique ci-contre, le condensateur est initialement déchargé. À $t = 0$, on ferme l’interrupteur $K$.

D’après la loi d’additivité des tensions on a : $u_c + u_R = 0$

Et d’après la loi d’Ohm on $u_R = Ri$

Donc : $u_c + Ri = 0 \quad \Rightarrow \quad \frac{dq}{dt} \text{ et } q = Cu_c$

Alors $u_c + R \frac{dq}{dt} = 0$
$$
\Rightarrow \quad u_c + R C \frac{du_c}{dt} = 0
$$

### La solution de l’équation différentielle
On admet que la solution de l’équation différentielle vérifiée par la tension $u_c$ aux bornes du condensateur.
```

<!-- Page 7 -->

```markdown
## On détermine B et m en utilisant l’équation différentielle
On remplace la solution $u_c(t) = A.e^{-mt} + B$ dans l’équation différentielle suivante :
$$
u_c + RC \frac{du_c}{dt} = 0
$$
$$
A.e^{-mt} + B + RC A \frac{d}{dt}(e^{-mt} + B) = 0
$$
$$
A.e^{-mt}(1 - RCm) = -B
$$
Pour que cette équation soit vérifiée $\forall t \geq 0$ il faut que : $1 - RCm = 0$ et $-B = 0$
Donc : $m = \frac{1}{RC} \quad et \quad B = 0$

## On détermine A en utilisant les conditions initiales
À $t = 0$ le condensateur est initialement déchargé donc : $u_c(0) = E$
Alors on a $u_c(0) = A.e^0$
Donc : $E = A$

Finalement on aura : $u_c(t) = E.e^{-t/\tau}$

### L’expression de la charge du condensateur
On sait que $q = C u_c$
Et on a : $u_c(t) = E.e^{-t/\tau}$
Donc : $q(t) = C.E.e^{-t/\tau}$
Ou bien : $q(t) = Q_m e^{-t/\tau}$
$Q_m$ : est la charge maximale stockée dans le condensateur tel que : $Q_m = C.E$

### L’expression de l’intensité du courant
On sait que : $\frac{dq}{dt} = I$
Et on a : $q(t) = C.E e^{-t/\tau}$
Donc : $i(t) = \frac{-C.E}{\tau} e^{-t/\tau}$
$$
i(t) = -\frac{E}{R} e^{-t/\tau}
$$
$I$ est l’intensité du courant initiale : $I_0 = \frac{E}{R}$

## La constante du temps du dipôle RC
### Définition
On définit la constante du temps du dipôle RC série par la relation suivante $\tau = R.C$

### La dimension de la constante du temps
On a : $\tau = R.C \Leftrightarrow [\tau] = [R][C]$
Et on sait que : $R = \frac{u_{RC}}{i} \Leftrightarrow [R] = \frac{[V]}{[I]}$
Et : $i(t) = c \frac{du_c}{dt} \Leftrightarrow [I] = \frac{[C]}{[T]}$

### La détermination graphique de constante du temps
#### Cas de la charge
$\tau$: Représente l’absisse du point d’intersection de la tangente à la courbe $u_c = f(t)$ à $t = 0$ et la asymptote $u_c = E$

#### Cas de la décharge
$\tau$: Représente le point d’intersection de la tangente à la courbe $u_c = f(t)$ à $t = 0$ et l’axe des abscisses
```

<!-- Page 8 -->

```markdown
# Réponse d’un dipôle RC série à un échelon de tension

L’énergie stockée dans le condensateur à un instant $t$ est donnée par la relation suivante: 
$$ Ee = \frac{1}{2} C u_c^2 = \frac{1}{2} \frac{1}{C} q^2 $$
- $Ee$ : l’énergie électrique en joule (J)
- $u_c$ : la tension aux bornes du condensateur en volt (V)
- $C$ : la capacité du condensateur en farad (F)
- $q$ : la charge du condensateur en coulomb (C)

## Exercice 1
Répondre par vrai ou faux
1. Dans un circuit électrique, le condensateur se comporte comme un conducteur ohmique ( il transforme l’énergie électrique en chaleur ).
2. Lors d’une réponse d’un dipôle RC à un échelon de tension, l’intensité du courant qui le traverse décroit avec le temps jusqu’à elle s’annule.
3. Au cours de la charge d’un condensateur , ses armatures stockent une quantité d’électricité positive.
4. L’énergie emmagasinée dans un condensateur croit pendant la charge , et décroit pendant la décharge.
5. Lors d’une réponse d’un dipôle RC à un échelon de tension , la tension entre ses bornes est continue.

## Exercice 2
On dispose d’un condensateur de capacité $C = 10 \mu F$, et la tension entre ses bornes est $u_c = 12V$.
1. Calculer la quantité d’électricité accumuler dans l’armature positive de ce condensateur.
2. Calculer le nombre des électrons accumuler dans l’armature négative du condensateur.
3. Calculer l’énergie électrique emmagasinée dans ce condensateur.
   - Donnée : La charge élémentaire $= 1,6 \times 10^{-19} C$

## Exercice 3
On charge un condensateur sous une tension électrique continue $U = 24V$, en régime permanent l’énergie électrique qui y emmagasinée est : $Ee = 4,8 \times 10^{-4} J$.
1. Calculer la capacité du condensateur.
2. Calculer la quantité d’électricité accumuler dans l’armature positive du condensateur.
3. Calculer le nombre des électrons accumuler dans l’armature négative du condensateur.
   - Donnée : La charge élémentaire $= 1,6 \times 10^{-19} C$

## Exercice 4
Un condensateur déchargé porte les informations suivantes : $(U_{max} = 30V ; 25\mu F)$.
1. On charge ce condensateur à l’aide d’un générateur de courant électrique débutant une intensité $I = 2mA$.
2. Calculer quantité d’électricité que peut-on stockée de ce condensateur.
3. Calculer l’énergie maximale emmagasinée dans ce condensateur.
4. Déterminer la durée pendant laquelle la tension aux bornes du condensateur atteint sa valeur maximale $U_{max}$.

## Exercice 5
Lors du fonctionnement d'un condensateur dans un circuit électrique, l’expression de la tension entre ses bornes est: $u_c = 5t + 3$ avec $t$ le temp en seconde $(s)$ et $u_c$ en volt (V).
1. Déterminer l’expression de la charge $q(t)$ du condensateur, et calculer sa valeur à $t = 4s$.
2. Calculer l’intensité du courant électrique circulant dans le condensateur.
3. La tension électrique maximale que peut supporter ce condensateur est $U_{max} = 100V$.
   - a – Déterminer la durée de fonctionnement maximale dans ce circuit.
   - b – Calculer l’énergie électrique maximale stockée dans ce condensateur.
   - Donnée : La capacité du condensateur $C = 22\mu F$.

ÉLECTRON & 2BAC-PC & Électricité
```

<!-- Page 9 -->

```markdown
# Exercice 6

Le montage électrique ci-contre comporte deux condensateurs montés en série.
1. Calculer la capacité équivalente des deux condensateurs.
2. Pendant une durée $\Delta t$, les deux condensateurs sont parcourus par un courant électrique d’intensité constante $I = 2 mA$.
   a. Sachant que le condensateur de capacité $C_1$ stocke une charge électrique $q_1 = 6 \times 10^{-4} C$. Calculer la tension $u_1$ aux bornes de ce condensateur.
   b. Déterminer la charge électrique $q_2$ stockée dans le condensateur de capacité $C_2$, et déduire la valeur de la tension entre ses bornes.
   c. Montrer que l’expression de l’énergie électrique emmagasinée dans les deux condensateurs est : $E_e = \frac{C_1+C_2}{2} q_1^2$ et calculer sa valeur.
   Données : Les capacités des deux condensateurs : $C_1 = 45 \mu F$ et $C_2 = 30 \mu F$.

# Exercice 7

Le montage électrique ci-contre comporte deux condensateurs montés en parallèle.
1. Calculer la capacité équivalente des deux condensateurs.
2. Pendant une durée $\Delta t = 10 s$, le condensateur de capacité $C_1$ est traversé par un courant électrique d’intensité $I_1 = 10 mA$.
   a. Calculer la valeur de la charge $q_1$ stockée dans le condensateur de capacité $C_1$.
   b. Calculer la valeur de la tension $u_{AB}$.
   c. Calculer la charge électrique $q$ stockée dans les deux condensateurs.
   d. Déduire la valeur de la charge $q_2$ stockée dans le condensateur de capacité $C_2$.
   e. Montrer que l’expression de l’énergie électrique emmagasinée dans les deux condensateurs est : $E_e = \frac{1}{2}(C_1+C_2)(q_1+q_2)^2$ et calculer sa valeur.
   Données : Les capacités des deux condensateurs : $C_1 = 45 \mu F$ et $C_2 = 30 \mu F$.

# Exercice 8

On considère le montage électrique schématisé ci-contre.
Données :
- $C_1 = 2nF$
- $C_2 = 4nF$
- $C_3 = 1nF$
- $C_4 = 3nF$
1. Calculer la capacité équivalente de ce montage.

# Exercice 9

On considère le montage électrique schématisé ci-dessous.
Données :
- $C_1 = 8nF$
- $C_2 = 16nF$
- $C_3 = 10nF$
- $C_4 = 15nF$
- $C_5 = 25nF$
- $C_6 = 20nF$
1. Calculer la capacité équivalente de ce circuit.
2. Ce circuit est alimenté par une tension électrique continue $u_{AB} = 80V$.
   a. Calculer la quantité d’électricité maximale stockée dans ce circuit.
   b. Calculer l’énergie maximale emmagasinée dans ce circuit.
```

<!-- Page 10 -->

```markdown
# Exercice 10
Lors d’une réponse d’un dipôle RC à un échelon de tension, la tension entre ses bornes est : 
$$ u_c(t) = 12e^{-0.25t} $$
où $t$ est le temps en ms et $u_c(t)$ en V

1. Le dipôle est-il soumis à un échelon de tension ascendant ou descendant ? Justifier la réponse.
2. Déterminer l’expression de la charge électrique du condensateur, et calculer sa valeur à l’instant $t_1 = 5ms$.
3. Déterminer l’expression de l'intensité du courant traversant le dipôle et calculer sa valeur à l’instant $t_1$.
4. Déterminer l’expression de l’énergie électrique $E_e$ emmagasinée dans le condensateur.
5. Déterminer la valeur de la constante du temps $\tau$ de ce dipôle.
6. Ce dipôle est constitué du condensateur de capacité $C$, et deux conducteurs ohmiques de même résistance $R$ montés parallèlement les uns aux autres. Calculer la valeur de la résistance $R$.

**Donnée :** Les capacités du condensateur $C = 45\mu F$

# Exercice 11
La figure ci-contre, représente un dipôle RC constitué de deux condensateurs de même capacité $C$ et d’un résistor de résistance $R = 1 K\Omega$.  
Au cours de la réponse de ce dipôle à un échelon de tension, la tension entre ses bornes est : 
$$ u_c(t) = 12(1 - e^{-t}) $$
où $t$ est le temps en ms et $u_c(t)$ en V.

1. Le dipôle est-il soumis à un échelon de tension ascendant ou descendant ? Justifier la réponse.
2. Déterminer la valeur de la constante du temps $\tau$ de ce dipôle et déduire la capacité $C$.
3. Déterminer l’expression de la charge électrique $q(t)$ du condensateur, et calculer sa valeur maximale.
4. Déterminer l’expression de l'intensité du courant $i(t)$ traversant le dipôle et calculer sa valeur initiale.
5. Déterminer l’expression de l’énergie électrique emmagasinée en dipôle, et calculer sa valeur maximale.

# Exercice 12
Pour déterminer la capacité $C$ d’un condensateur on réalise la figure ① qui est formée des éléments suivants :
- Générateur idéal de tension de f.e.m. $E = 20 V$
- Conducteur ohmique de résistance $R = 1 K\Omega$
- Condensateur déchargé de capacité $C$
- Interrupteur $K$ et fils de connexion

À l’instant $t = 0$, on ferme l’interrupteur $K$ et on visualise par un dispositif convenable les variations de tension $u_c$ appliqué aux bornes du condensateur en fonction du temps $t$ et on obtient la courbe de la figure ②.
1. Représenter sur la figure ① dans la convention de récepteurs les tensions $u_c$ et $u_R$.
2. Déterminer l’équation différentielle vérifiée par la tension $u_C$ aux bornes du condensateur.
3. Trouver les expressions de $A$ et $T$ pour que l’expression 
$$ u_c = A(1 - e^{-t/T}) $$
soit solution de l’équation différentielle.
4. Déterminer l’expression de la charge $q(t)$ ainsi que l’intensité $i(t)$.
5. Par l’analyse dimensionnelle, montrer que $\tau$ a une dimension de temps.
6. Déterminer graphiquement la valeur de $\tau$, et déduire la valeur de capacité $C$.
7. Calculer l’énergie électrique $E_e$ stockée dans le condensateur dans le régime permanent.

# Exercice 13
Pour déterminer la capacité $C$ d’un condensateur, on réalise le montage électrique schématique sur la figure ① qui comporte :
- Générateur de tension de f.e.m. $E = 12 V$ et de résistance interne $r$
- Conducteur ohmique de résistance $R$
- Condensateur déchargé de capacité $C$

À l’instant $t = 0$, on ferme l’interrupteur $K$ et par un système d’acquisition comme on visualise la variation de l’intensité $i(t)$ en fonction du temps (on la courbe de la figure ②).
```

<!-- Page 11 -->

```markdown
1. Représenter sur la figure ❶ dans la convention réceptrice les différentes tensions.
2. Déterminer l’équation différentielle vérifiée par la tension $u_C$ aux bornes du condensateur.
3. Trouver les expressions de $A$ et $τ$ pour que l’expression $u_C = A(1 - e^{-t/τ})$ soit solution de l’équation différentielle.
4. L’intensité du courant électrique s’écrit sous la forme $i(t) = I_0 e^{-t/τ}$. Trouver l’expression de l’intensité $I_0$ en fonction de $E$, $R$ et $τ$.
5. En exploitant la courbe de la figure ❹:
   a. Déterminer la valeur de $I_0$ et déduire celle de la résistance $R$.
   b. Déterminer la valeur de $τ$, et déduire la valeur de $C$.

# Exercice 14
Pour déterminer la capacité d’un condensateur, on monte en série aux bornes d’un générateur de courant idéal délivrant un courant d’intensité constante $I = 1,2 \, \text{mA}$, un condensateur de capacité $C$ inconnu et initialement déchargé, un résistor de résistance $R$ inconnue, un interrupteur $K$ ouvert et un oscilloscope pour visualiser les variations de tension $u_C$ aux bornes du condensateur en fonction du temps.
À l’instant $t_0 = 0$, on ferme l’interrupteur $K$ et on mesure aux différents instants la tension $u_C$ ce qui nous permet de tracer la courbe $u_C = f(t)$ de la figure ❷.
1. Déterminer l’armature positive du condensateur.
2. Représenter sur le montage de la figure ❶, les tensions $u_C$ et $u_R$ ainsi que les tensions de l’oscilloscope pour visualiser la tension $u_C$.
3. Établir graphiquement l’équation de la courbe $u_C = f(t)$.
4. En déduire la valeur de la capacité $C$.
5. La tension $u_C$ du condensateur ne doit pas dépasser la valeur $U_{\text{max}} = 56 \, \text{V}$. Déterminer $\Delta t_{\text{max}}$ la durée maximale de la charge.
6. Calculer l’énergie maximale stockée dans le condensateur.
7. Calculer la charge maximale stockée dans ce condensateur.

# Exercice 15
Les condensateurs sont caractérisés par le fait de stockage de l’énergie électrique pour l’utiliser au besoin. Cette propriété permet d’utiliser les condensateurs dans beaucoup d'appareils notamment dans les appareils photographiques.
Cet exercice consiste à étudier la réponse d’un circuit $RC$ à un échelon de tension descendante, pour cela on considère le montage électrique suivant (figure ❷):
- Conducteur ohmique de résistance $R = 1,5 \, \text{k}\Omega$
- Condensateur chargé de capacité $C$
- Interrupteur $K$ et fils de connexion
1. Représenter sur la figure ❶ dans la convention de représenter les tensions $u_C$ et $u_R$.
2. Déterminer l’équation différentielle vérifiée par la tension $u_C$ aux bornes du condensateur.
3. Trouver l’expression pour $u_C(t) = E e^{-t/τ}$ soit solution de l’équation différentielle.
4. Déterminer l’expression de l’intensité $i(t)$.
5. Par l’analyse dimensionnelle, montrer que $τ$ a une dimension du temps.
6. Déterminer graphiquement la valeur de $τ$, et déduire la valeur de $C$.
7. Déterminer à l’instant $t_0$ l’énergie électrique $E_1$ du condensateur qui se règle à 25\% de sa valeur initiale.
```

<!-- Page 12 -->

```markdown
# Exercice 16

Pour étudier la réponse d'un dipôle RC à un échelon de tension descendant, on monte un conducteur de résistance $R = 2 \, k\Omega$ avec un condensateur chargé à l'aide d'un générateur de f.e.m. E (voir la figure 0).

Par application de la loi d'additivité des tensions. Montrer que l'équation différentielle vérifiée par la tension $u_c(t)$ lors de la décharge du condensateur est:
$$
u_c(t) + R \frac{du_c(t)}{dt} = 0,
$$
en déterminant l'expression de $\tau$ en fonction de $R$ et $C$.

Par analyse dimensionnelle montrer que $\tau$ a une dimension de temps.

Vérifier que l'expression $u_c(t) = E e^{-t/\tau}$ est une solution de l'équation différentielle.

Un programme approprié a permis de tracer la courbe de la figure (1) qui représente $\ln(u_c) = f(t)$.
- a - Montrer que $\ln(u_c) = -\frac{t}{\tau} + \ln E$.
- b - Déterminer la valeur de $E$ et celle de $\tau$.
- c - Calculer la valeur de la capacité $C$.
- d - Montrer que l'énergie emmagasinée dans le condensateur est:
$$
E_e(t) = \frac{C E^2}{2} e^{-2t/\tau},
$$
et calculer sa valeur à l’instant $t = 2\tau$.

# Exercice 17

On charge un condensateur sous une tension constante $U = 30 \, V$ à travers une résistance $R = 1 \, k\Omega$ et à l'aide d'un système d'acquisition convenable on visualise les variations la tension $u_c$ aux bornes du condensateur ainsi que les variations de la tension $u_R$ aux bornes de la résistance, et on obtient les courbes représentées dans la figure ci-après.

- a - Dessiner le montage expérimental et représenter sur lequel les tension $u_c$ et $u_R$.
- b - Identifier parmi les deux courbes (1) et (2), la courbe qui représente la tension $u_c$ et celle qui représente la tension $u_R$. Justifier votre réponse.
- c - Déterminer la valeur de la constante du temps $\tau$.
- d - En déduire la valeur de la capacité $C$ du condensateur $\tau$.
- e - Calculer l’énergie emmagasinée dans le condensateur quand la charge est terminée.

# Exercice 18

Pour étudier la réponse d’un dipôle RC à un échelon de tension montant, on monte un conducteur de résistance $R = 100 \, \Omega$ avec un condensateur déchargé et un générateur de idéal de tension de f.e.m. $E$ (voir la figure 0).
À $t = 0$, on ferme l'interrupteur $K$ et à l’aide d’un système d’acquisition convenable on obtient la courbe de la figure (2) qui représente l’évolution de l’énergie électrique du condensateur en fonction du carré de sa charge.
```

<!-- Page 13 -->

```markdown
1. Déterminer l'équation différentielle vérifiée par la charge $q(t)$ du condensateur.
2. Exprimer l'énergie électrique stockée dans le condensateur en fonction de sa capacité $C$ et sa charge $q(t)$.
3. En exploitant la courbe de la figure, déterminer la valeur de l'énergie du condensateur en régime permanent, et celle de la capacité $C$.
4. Calculer la valeur de la constante de temps du dipôle RC étudié.
5. Calculer la valeur de la force électromotrice du générateur.

### Exercice 19
On dispose deux condensateurs déchargés de même capacité $C$. Pour charger ces deux condensateurs, on réalise le électrique schématique dans la figure 1.

À $t = 0$ on ferme ce circuit, et à l’aide d’un système d’acquisition adéquat on obtient la courbe de la figure 2, qui représente l’évolution de l’énergie électrique emmagasinée dans le condensateur en fonction du temps.

1. Exprimer la capacité équivalente des deux condensateurs en fonction de $C$.
2. Montrer que l’équation différentielle vérifiée par l’intensité du courant débitée par le générateur est : 

   $$ i(t) + 2RC \frac{d i(t)}{dt} = 0 $$

3. La solution de cette équation différentielle est : 

   $$ i(t) = I e^{-t/\tau} $$ 

   trouver l'expression de $I$ et de $\tau$ en fonction de $R$, $C$ et $E$.

4. Sachant que l’expression de la tension électrique aux bornes des deux condensateurs est : 

   $$ u_C(t) = E(1 - e^{-t/\tau}) $$ 

   a. Montrer que l’expression de l’énergie électrique emmagasinée dans les deux condensateurs est : 

   $$ E_e(t) = E_{max}(1 - e^{-t/\tau})^2 $$ 

   où $E_{max}$ est l’énergie maximale stockée dans les deux condensateurs.

   b. Calculer la valeur de $E_e(\tau)$.

5. En exploitant la courbe de la figure déterminer la valeur de la constante du temps $\tau$.
   Calculer la valeur de la capacité $C$ et celle de la force électromotrice $E$ du générateur. Donnée : $R = 20 \, \Omega$.

### Exercice 20
On dispose deux condensateurs déchargés de même capacité $C$. Pour charger ces deux condensateurs, on réalise les montages électriques 1 et 2.

1. Calculer la valeur de la constante du temps associée à chaque montage.
2. Quel est le montage qui permet de charger les deux condensateurs plus rapidement ?
3. Calculer l’énergie électrique emmagasinée par les deux condensateurs dans chaque montage. 
   Donner le résultat.

Données : $C = 10 \, \mu F$, $E = 12 \, V$, $R = 1 \, k\Omega$.
```

<!-- Page 14 -->

```markdown
# Correction

## Exercice 1
- Répondre par vrai ou faux
  - Dans un circuit électrique, le condensateur se comporte comme un conducteur ohmique ( il transforme l’énergie électrique en chaleur ): **Faux**
  - Lors d’une réponse d’un dipôle $RC$ à un échelon de tension montant, l’intensité du courant qui le traverse décroît avec le temps jusqu’à ce qu’elle s’annule: **Vrai**
  - Au cours de la charge d’un condensateur, ses deux armatures stockent une quantité d’électricité positive: **Faux**
  - L’énergie emmagasinée dans un condensateur croit pendant la charge, et décroît pendant la décharge: **Vrai**
  - Lors d’une réponse d’un dipôle $RC$ à un échelon de tension, la tension entre ses bornes est continue: **Vrai**

## Exercice 2
1. Calculons la quantité d’électricité stockée dans le condensateur.  
   On a: $ q = C \cdot u_c $  
   A.N.: $q = 10 \times 10^{-6} \times 12 = 1,2 \times 10^{-4} $  
   
2. Calculons le nombre d’électrons accumulés dans l’armature négative du condensateur.  
   On a: $ q = N \cdot e $  
   Donc: $ N = \frac{q}{e} $  
   A.N.: $ N = \frac{1,2 \times 10^{-4}}{1,6 \times 10^{-19}} = 7,5 \times 10^{14} $

3. Calculons l'énergie stockée dans le condensateur.  
   On a: $ E_e = \frac{1}{2}C u_c^2 $  
   A.N.: $ E_e = \frac{1}{2} \times 10^{-6} \times 12^2 = 7,2 \times 10^{-4} $

## Exercice 3
1. Calculons la capacité du condensateur.  
   On a: $ E_e = \frac{1}{2}C u_c^2 $  
   $ C = 2 \frac{E_e}{u_c^2} $  
   A.N.: $ C = \frac{2 \times 4,8 \times 10^{-4}}{242} = 1,67 \times 10^{-6} $

2. Calculons la quantité d’électricité du condensateur.  
   On a: $ q = C \cdot u_c $  
   A.N.: $ q = 1,67 \times 10^{-6} \times 24 = 4,01 \times 10^{-5} $  
   
3. Calculons le nombre d’électrons accumulés dans l’armature négative du condensateur.  
   On a: $ q = N \cdot e $  
   Donc: $ N = \frac{q}{e} $  
   A.N.: $ N = \frac{4,01 \times 10^{-5}}{1,6 \times 10^{-19}} $  
   On trouve: $ N = 2,51 \times 10^{14} $

## Exercice 4
1. Calculons quantité d'électricité que peut-on stockée ce condensateur.  
   On a: $ Q = C \cdot U_{max} $  
   A.N.: $ Q = 25 \times 10^{-6} \times 30 = 7,5 \times 10^{-4} $  

2. Calculons l'énergie électrique maximale emmagasinée dans ce condensateur.  
   On a: $ E = \frac{1}{2}C U_{max}^2 $  
   A.N.: $ E = \frac{1}{2} \times 25 \times 10^{-6} \times (30)^2 $  
   On trouve: $ E = 11,25 \times 10^{-3} J $

3. Calculons la durée pendant laquelle la tension aux bornes du condensateur atteint sa valeur maximale $ U_{max} $.  
   On a: $ Q = I \cdot t $  
   donc: $ t = \frac{Q}{I} $  
   A.N.: $ t = \frac{7,5 \times 10^{-4}}{2 \times 10^{-3}} = 0,375 s $

## Exercice 5
### a – Durée de fonctionnement $ t_{max} $:  
On a: $ u = 5t + 3 $  
Donc: $ t = \frac{u - 3}{5} $  
Alors:  
$$ t_{max} = \frac{5}{100-3} = \frac{5}{97} $$
On trouve: $ t_{max} = 19,4 s $

### b – Déterminons l’énergie électrique maximale emmagasinée dans le condensateur.  
On a: $ E_e = \frac{1}{2} C U_{max}^2 $  
A.N.: $ E_e = \frac{1}{2} \times 2 \times 25 \times 10^{-6} \times (100)^2 = 0,11 $  
```


<!-- Page 15 -->

```markdown
# Exercice 6

1. Calculons la capacité équivalente des deux condensateurs:
   On a : 
   $$ \frac{1}{C_{eq}} = \frac{1}{C_{1}} + \frac{1}{C_{2}} $$
   Donc: $C_{eq} = C_{1}C_{2} \frac{45\times30}{45+30} = 18 \, \mu F$

   a. Calculons la tension $u_1$ aux bornes du condensateur $C_1$ :
   - A.N : $u_1 = \frac{Q_1}{C_1}$
   - $u_1 = \frac{6 \times 10^{-4}}{C_1} \approx 13.3 \, V$

   b. Déterminons la charge électrique $q_2$ stockée dans le condensateur $C_2$ :
   - Puisque les deux condensateurs sont montés en série, alors ils ont la même charge $q_2 = q_1 = 6 \times 10^{-4} \, C$

   On a: 
   $$ u_2 = \frac{q_2}{C_2} $$
   A.N: 
   $$ u_2 = \frac{6 \times 10^{-4}}{30 \times 10^{-6}} \approx 20 \, V $$

   Montrons que l’expression de l’énergie électrique emmagasinée dans les deux condensateurs est : 
   $$ E_e = \frac{C_{1}C_{2}}{2C_{1}+C_{2}} q_1 $$ 
   Donc:
   $$ E_e = \frac{1}{2C_{1}}q_1^2 + \frac{1}{2C_{2}}q_2^2 $$
   Alors:
   $$ E_e = \left( \frac{1}{C_{1} + C_{2}} \right) \frac{q_1^2}{2} $$
   D’où :
   $$ E_e = \frac{C_{1}C_{2}}{2(C_{1}+C_{2})} q_1^2 $$
   A.N: 
   $$ E_e = \frac{(45+30) \times 10^{-6} \times (6 \times 10^{-4})^2}{2 \times 45 \times 30 \times 10^{-12}} = 10^{-2} \, J $$

# Exercice 7

1. Calculons la capacité équivalente des deux condensateurs: On a : 
   $$ C_{eq} = C_{1} + C_{2} $$
   A.N: $C_{eq} = 75 \, \mu F$

   a. Calculons la charge du condensateur de capacité $C_1$ 
   On sait que: 
   $$ q_1 = I_1 \Delta t $$
   - $q_1 = 10 \times 10^{-3} \times 3 \times 10^{-4} = 0.1 \, C$

   b. Calculons la tension $u_{AB}$
   On a: 
   $$ u_{AB} = \frac{q_1}{C_1} $$
   - $u_{AB} \approx \frac{0.1}{45 \times 10^{-6}} = 2222 \, V$

   c. Calculons la charge de deux condensateurs
   On sait que: 
   $$ q = q_{1} + C_{eq} $$
   A.N: $q = 2222 \times 75 \times 10^{-6} = 1.67 \times 10^{-1} \, C$

   d. Les deux condensateurs sont en dérivation
   Donc: 
   $$ q = q_{1} + q_{2} $$
   - A.N: 
   $$ q_2 = q - q_1 $$

   Montrons que:
   $$ E_e = \frac{1}{2(C_{1}+C_{2})}(q_{1}+q_{2})^{2} $$ 
   On a :
   $$ E_e = E_{e1} + E_{e2} $$
   Donc:
   $$ E_e = \frac{1}{2C_{eq}}(q_{1}+q_{2})^{2} $$ 
   A.N: 
   $$ E_e = \frac{1}{2(2(C_{1})^{-1})}(1.67 \times 10^{-1})^{2} = \frac{1.86 \times 10^2}{2 \times 75 \times 10^{-6}} $$

# Exercice 8

1. Calculons la capacité équivalente:
   - Les condensateurs $C_{1}$ et $C_{2}$ sont en série : 
   Donc :
   $$ \frac{1}{C'} = \frac{1}{C_{1}} + \frac{1}{C_{2}} $$
   A.N: $C' = \frac{2 \times 2.4}{2 + 4} = 1.33 \, F$

   - Les condensateurs $C_{3}$ et $C_{4}$ sont en parallèle: 
   Donc: 
   $$ C'' = C_{3} + C_{4} $$

# Exercice 9

1. Calculons la capacité équivalente:
   - Les condensateurs $C_{1}$ et $C_{2}$ sont en parallèle leur capacité équivalente est : 
   $$ C = C_{1} + C_{2} $$
   A.N: $C = 8 + 16 = 24 \, nF$

   - Les condensateurs $C_{3}$ et $C_{4}$ sont en série leur capacité équivalente est : 
   $$ C' = \frac{1}{C_{3}} + \frac{1}{C_{4}} $$
   Tel que: 
   $$ C' = \frac{10 \times 10^{-15}}{24+51} $$

2. Calculons la quantité d’électricité maximale stockée dans ce circuit:
   On sait que: 
   $$ q = u_{AB} \cdot C' $$
```

<!-- Page 16 -->

```markdown
# Electron & 2BAC-PC & Électricité

## Exercice 10

1. Échelon descendant parce que $u_c(t)$ aux bornes du condensateur diminue avec le temps.
2. L'expression de la charge du condensateur:
   Soit: $q(t) = C \cdot u_c(t)$
   Donc: $q(t) = 45 \times 10^{-6} \times 12 \cdot e^{-0.25t}$
   On trouve: $q(t) = 5,4 \times 10^{-4} e^{-0.25t}$
3. Calculons la valeur de $q$ à l’instant $t_1 = 5 \, \text{ms}$:
   On a: $q_1 = 5,4 \times 10^{-4} e^{-0.25 \times 5}$
4. L'expression de l’intensité du courant traversant le condensateur:
   On a: $i(t) = \frac{dq(t)}{dt}$
   Donc: $i(t) = -0.25 \times 5,4 \times 10^{-4} e^{-0.25t}$
   On obtient: $i(t) = 1,35 \times 10^{-4} e^{-0.25t}$
5. Calculons la valeur de $i$ à l’instant $t_1 = 5 \, \text{ms}$:
   On a: $i_1 = 1,35 \times 10^{-4} e^{-0.25 \times 5} \approx 3,87 \times 10^{-5}$
6. On a: $E_e(t) = \frac{1}{2} C u_c^2(t)$
   Alors: 
   $$ E_e(t) = \frac{1}{2} \times 45 \times 10^{-6} \times (12 \cdot e^{-0.25t})^2 $$
   Donc: $E_e(t) = 3,24 \times 10^{-3} e^{-0.5t}$
7. Déterminons la valeur de la constante de temps $\tau$:
   On a: $u_c(t) = U_0 e^{-\frac{t}{\tau}} = 12 e^{-0.25t}$
   D'où: $0.25 = \frac{1}{\tau} \Rightarrow \tau = 4 \, \text{ms}$
8. Calculons la valeur de $R$:
   Les deux conducteurs ohmiques sont montés en dérivation, donc leur résistance équivalente est $R_{eq}$
   Tel quel:
   $$ \frac{1}{R_{eq}} = \frac{1}{R} + \frac{1}{R} $$
   Donc: $R_{eq} = \frac{R}{2}$
   Et on a: $t = R_{eq} \cdot C$
   Donc: 
   $$ R = \frac{2 \cdot 2 \times 10^{-3}}{45 \times 10^{-6}} \approx 177,8 \, \Omega $$

## Exercice 11

1. Le dipôle est soumis à un échelon de tension ascendant. Car la tension $u_c = f(t)$ est une fonction croissante. (passe de 0 à 12V)
2. Déterminons la valeur de $\tau$ et celle de $C$.
   L'expression générale de la tension aux bornes du condensateur lors de la réponse d’un dipôle RC à un échelon de tension montant est: 
   $$ u_c(t) = U_0 (1 - e^{-t/\tau}) $$
   Et on a: $u_c(t) = 12(1 - e^{-t})$
   Donc par analogie on déduit que: $\tau = 1 \, \text{ms}$
   Calculons la valeur de $C$:
   On a: $\tau = R \cdot C \Rightarrow C = \frac{\tau}{R}$
   Alors: $\tau = 2R$
   A.N.: $C = \frac{1 \times 10^{-3}}{2 \times 10^7} = 5 \times 10^{-7}$
3. Déterminons l’expression de la charge:
   On a: $q(t) = C \cdot u_c(t) = C(1 - e^{-t})$
   Donc: $q(t) = 5 \times 10^{-7} \times 12(1 - e^{-t})$
   On trouve: 
   $$ q(t) = 6 \times 10^{-6}(1 - e^{-t}) $$
4. Déterminons l’expression de l’intensité du courant traversant le dipôle RC:
   On a:
   $$ i(t) = \frac{dq(t)}{dt} $$
   Donc: 
   $$ i(t) = \frac{6 \times 10^{-6}}{1 \times 10^{-3}} e^{-t} $$
   On trouve: $i(t) = 6 \times 10^{-3} e^{-t}$
   Calculons: $i(0)$
   On a: $i(0) = 6 \times 10^{-3}$
5. On sait que: 
   $$ E_e(t) = \frac{1}{2} C q(t)^2 $$
   Alors: 
   $$ E_e(t) = \frac{1}{2} \times 1 \times 10^{-6} \times 144((1 - e^{-t}))^2 $$
   Donc: 
   $$ E_e(t) = 7,2 \times 10^{-3}((1 - e^{-t}))^2 $$
   Avec $E_{max} = 7,2 \times 10^{-5}$
```

<!-- Page 17 -->

```markdown
# Exercice 12

1. Voir la représentation des tensions $u_C$ et $u_R$ dans la figure suivante

   ![image]

2. L'équation différentielle vérifiée par $u_C$ :  
   D'après la loi d’additivité des tensions on a : $u_C + u_R = E$  
   Avec : $u_R = R \cdot i(t)$ et $i(t) = C \cdot \frac{du_C(t)}{dt}$  
   Donc : $u_C(t) + R \cdot C \cdot \frac{du_C(t)}{dt} = E$

3. Déterminons l’expression de $A$ et $\tau$ :  
   On remplace la solution $u_C = A(1 - e^{-\frac{t}{\tau}})$ dans l’équation différentielle $u_C(t) + R \cdot C \cdot \frac{du_C(t)}{dt} = E$  
   On trouve : $A(1 - e^{-\frac{t}{\tau}}) + R \cdot C \cdot A \cdot \frac{e^{-\frac{t}{\tau}}}{\tau} = E$  
   Donc :  
   $$ 
   1 - e^{-\frac{t}{\tau}} + \frac{R \cdot C}{\tau} e^{-\frac{t}{\tau}} = \frac{E}{A} - 1 
   $$  
   Pour que cette équation soit vérifiée $\forall t \geq 0$ il faut que :  
   $$ 
   \begin{cases} 
   \frac{E}{A} - 1 = 0 \\ 
   \frac{R \cdot C}{\tau} = 0 
   \end{cases} \Leftrightarrow 
   \begin{cases} 
   \frac{E}{A} = 1 \\ 
   \frac{R \cdot C}{\tau} = 1 
   \end{cases} \Leftrightarrow 
   \begin{cases} 
   A = E \\ 
   \tau = R \cdot C 
   \end{cases} 
   $$

4. Déterminons l’expression de la charge $q(t)$ et celle de l'intensité $i(t)$ :  
   - L’expression de $q$ :  
     On sait que : $q = C \cdot u_C$  
     Et on a : $u_C(t) = E(1 - e^{-\frac{t}{\tau}})$  
     Donc : $q(t) = C \cdot E(1 - e^{-\frac{t}{\tau}})$  
   - L’expression de $i(t)$ :  
     On sait que $i(t) = \frac{dq}{dt}$  
     Et on a : $q(t) = CE(1 - e^{-\frac{t}{\tau}})$ avec $ \tau = RC$  
     Donc :  
     $$ 
     i(t) = C \cdot \frac{E}{\tau} e^{-\frac{t}{\tau}} \Leftrightarrow i(t) = \frac{E}{R} e^{-\frac{t}{\tau}} 
     $$

5. Montrons que $\tau$ a une dimension du temps :  
   On a : $\tau = R \cdot C \quad \text{ et } \quad [\tau] = [R][C]$  
   On en sait que : $R = \frac{u_R}{i(t)} \Leftrightarrow [R] = \frac{[U]}{[I]} \phantom{(} \Leftrightarrow [\tau] = [T]$  
   Et :  
   $$ 
   i(t) = c \cdot \frac{du_C}{dt} \quad [I] = [C][T] 
   $$ 
   Donc : $[C] = \frac{[I]}{[U]}$  
   Donc : $[\tau] = [T]$  
   La dimension de la constante $\tau$ est le temps.

6. Graphiquement on trouve $\tau = 1,2s$  
   Calculons la valeur d $C$ :  
   On a : $C = \frac{1}{R} = 1,2 \times 10^{-3} F$  
   A.N. : $C = 1 \times 10^{-3} F$

7. Calculons l’énergie stockée dans le condensateur dans le régime permanent :  
   On a : $E_e = \frac{1}{2}C u_C^2$ avec $u_C = E$  
   Donc : $E_e = \frac{1}{2} E^2 C$  
   A.N. : $E_e = \frac{1}{2} \times 1,2 \times 10^{-3} (20)^2$  
   On trouve : $E_e = 2,4 \times 10^{-1} J$  

---

# Exercice 13

1. Voir la représentation des tensions $u_C$, $u_R$ et $u_PN$ dans la figure suivante

   ![image]

2. L'équation différentielle vérifiée par $u_C$ :  
   D'après la loi d’additivité des tensions on a : $u_C + u_R = u_{PN}$  
   Avec : $u_R = R \cdot i(t)$ et $u_{PN} = E - R \cdot i(t)$  
   Donc : $u_C(t) + R \cdot i(t) = E - R \cdot i(t)$  
   Alors : $u_C(t) + (R + r) \cdot i(t) = E$ avec $ i(t) = C \cdot \frac{du_C(t)}{dt} $  
   D’où : $u_C(t) + (R + r) \cdot \frac{du_C(t)}{dt} = E$

3. Déterminons l’expression de $A$ et $\tau$ :  
   On remplace la solution $u_C = A(1 - e^{-\frac{t}{\tau}})$ dans l’équation différentielle $u_C(t) + (R + r) \cdot \frac{du_C(t)}{dt} = E$  
   On trouve:  
   $$ 
   A(1 - e^{-\frac{t}{\tau}}) + (R + r) \cdot A \cdot \frac{e^{-\frac{t}{\tau}}}{\tau} = E 
   $$  
   Pour que cette équation soit vérifiée $\forall t \geq 0$ il faut que :  
   $$ 
   \begin{cases} 
   \frac{E}{A} - 1 = 0 \\ 
   \frac{(R + r) \cdot C}{\tau} = 0 
   \end{cases} 
   \Leftrightarrow 
   \begin{cases} 
   \frac{E}{A} = 1 \\ 
   \frac{(R + r) \cdot C}{\tau} = 1 
   \end{cases} 
   \Leftrightarrow 
   \begin{cases} 
   A = E \\ 
   \tau = (R + r) \cdot C 
   \end{cases} 
   $$
```

<!-- Page 18 -->

```markdown
1. L'expression de l'intensité du courant  
   On a : $i(t) = c \frac{duc}{dt} = E(1 - e^{-\frac{t}{\tau}})$  
   Donc : $i(t) = E \frac{c}{R + r} e^{-\frac{t}{\tau}}$  
   Alors : $i(t) = \frac{E}{R + r}c e^{-\frac{t}{\tau}}$  
   D'où : $i(t) = \frac{E}{R + r} (1 - e^{-\frac{t}{\tau}}) $  
   Et puisque $i(t) = I_0 e^{-\frac{t}{\tau}}$  
   Par analogie on trouve : $I_0 = \frac{E}{R + r}$  

2. a - D'après la courbe on a : $I_0 = 12mA$  
   Et on a : $I_0 = \frac{E}{R + r}$  
   Donc : $R = \frac{E}{I_0} - r$  
   A.N. : $R = \frac{12 \times 10^{-3}}{20} = 980 \, \Omega$  
   
   b - D'après la courbe on a : $\tau = 12ms$  
   Et on a : $\tau = (R + r) \cdot C$  
   Donc : $C = \frac{\tau}{R + r}$  
   A.N. : $C = \frac{12 \times 10^{-3}}{980 + 20} = 1,2 \times 10^{-5}F$  

### Exercice 14

1. L'armature positive du condensateur est celle reliée au point A, car le courant I entre par ce point. Donc, l'armature positive est celle connectée au point A.  
2. Voir la représentation de la tension $u_C$

3. La courbe $u_C = f(t)$ est une fonction linéaire d'équation : $u_C(t) = k \cdot t$ où k est la pente de la droite.  
   D'après la courbe on a : $k = \frac{2}{20 \cdot 10^{-3}} = 100 \, V \cdot s^{-1}$  
   Donc : $u_C(t) = 100 t$

4. Déduisons la valeur de la capacité C.  
   On a : $I = \frac{d u_C}{dt}$ avec $u_C = 100 t$.  
   Donc : $I = 100 C$  
   Alors : $C = \frac{I}{100}$  
   A.N. : $C = \frac{1,2 \times 10^{-3}}{100} = 1,2 \times 10^{-5}F$  

5. Déterminons la valeur de $\Delta t$.  
   On a : $u_C(t) = 100 t$.  
   Donc : $U_{max} = 100 \cdot t_{max}$  
   D'où : $t_{max} = \frac{U_{max}}{100}$  
   A.N. : $t_{max} = \frac{56}{100} = 0,56s$  
   On trouve : $\Delta t_{max} = t_{max} - t_0 = 0,56s$  

6. Calculons l'énergie maximale stockée dans le condensateur.  
   On a : $E_{max} = \frac{1}{2} C U_{max}^2$  
   A.N. : $E_{max} = \frac{1}{2} \times 1,2 \times 10^{-5} \times 56^2 = 1,88 \times 10^{-2}J$  

7. Calculons la charge maximale du condensateur.  
   On a : $q_{max} = C \cdot U_{max}$  
   A.N. : $q_{max} = 1,2 \times 10^{-5} \times 56 = 6,72 \times 10^{-4}C$  

### Exercice 15

1. Voir la représentation des tensions $u_C$ et $u_R$ dans la figure suivante.

2. D'après la loi d'additivité des tensions on a : $u_C + u_R = 0$ avec : $u_R = R \cdot i(t)$.  
   Donc : $u_C(t) + R \cdot \frac{duc(t)}{dt} = 0$  
   D'où : $u_C(t) + RC \cdot \frac{d u_C(t)}{dt} = 0$  
   
3. Déterminons l'expression de $\tau$.  
   On remplace la solution $u_C = E e^{-\frac{t}{\tau}}$ dans l'équation différentielle :  
   $u_C(t) + RC \cdot \frac{duc(t)}{dt} = 0$  
   On trouve : $E e^{-\frac{t}{\tau}} (1 - R C) = 0$  
   $\Leftrightarrow E e^{-\frac{t}{\tau}} (1 - RC) = 0$

4. Montrons que $\tau$ a une dimension du temps.  
   On a : $\tau = R \cdot C$  
   Donc : $\left[ \tau \right] = [R][C]$  
   Et on sait que : $R \leftrightarrow [U] [I]^{-1} \quad (1)$  
   Et : $C \leftrightarrow [I]^{-1} [U]$  
   On remplace $(1)$ et $(2)$ et on trouve : $\left[ \tau \right] = \frac{[U]}{[I]} [I]^{-1} \cdot [U] = [T]$  
   La dimension de la constante de $t$ est le temps.
```

<!-- Page 19 -->

```markdown
### 6
Déterminons la valeur de $t$ et celle de $\tau$  
D'après la courbe: on trouve: $t = 1,6 \, \text{ms}$  
Et on a: $\tau = R C$

---

### Exercice 16

#### a
D’après la loi d’additivité des tensions  
on a: $u_C + u_R = 0$ avec: $u_R = R i(t)$  
Donc: $u_C(t) + R i(t) = 0 \Rightarrow i(t) = \frac{d u_C(t)}{dt} $  
D’où: $u_C(t) + R C \frac{d u_C(t)}{dt} = 0$  

Montrons que $\tau$ a une dimension du temps  
On a: $\tau = R C \iff [R] = \frac{[U]}{[I]}$  
Et on sait que: $R = \frac{u_{C}}{i} \Rightarrow [R] = \left[\frac{[U]}{[I]}\right]$  
On remplace $\overset{∘}{E}$ et $ \overset{∘}{D}$ dans $\Phi$  
trouve: $[t] = \left[ \frac{[U]}{[R]} \right] = [U] \left[ R \right]^{-1} [U]$

La dimension de la constante de $\tau$ est le temps  
Vérifions que $u_C(t)$ est une solution de l’équation différentielle.  
On remplace $u_C(t) = E e^{-\frac{t}{\tau}}$  
Dans: $E e^{-\frac{t}{\tau}} - \frac{t e^{-\frac{t}{\tau}}}{\tau} = 0$  
$$ 
\Rightarrow E e^{-\frac{t}{\tau}} - \frac{t e^{-\frac{t}{\tau}}}{\tau} = 0 
$$  
Donc: $u_C(t) = E e^{-\frac{t}{\tau}}$ est une solution de l’équation différentielle.

#### a - Montrer que $\ln(u_C)= E e^{-\frac{t}{\tau}}$  
On a: $u_C(t) = E e^{-\frac{t}{\tau}}$  
$$ 
\ln(u_C) = \ln(E e^{-\frac{t}{\tau}}) 
$$  
$$ 
\ln(u_C) = \ln(E) + \ln(e^{-\frac{t}{\tau}}) 
$$  
$$ 
\ln(u_C) = \ln(E) - \frac{t}{\tau} 
$$  
$$ 
\ln(u_C) = -\frac{t}{\tau} + \ln(E) 
$$  

#### b - Détermination: $E$ et $\tau$ :  
La courbe $\ln(u_C) = f(t)$ est une fonction affine d’équation: $\ln(u_C) = a t + b$  
Et on a: $\ln(u_C) = -\frac{1}{\tau} t + \ln(E)$  

Donc par analogie:  
$$ 
\begin{cases} 
a = -\frac{1}{\tau} \\ 
b = \ln(E) 
\end{cases} 
$$  
D’après la courbe:  
$$ 
\begin{cases} 
\tau = -1 a = 1 \, \text{ms} \\ 
E = e^{b} = 2,3 \approx 10 \, \text{V} 
\end{cases} 
$$  

#### c - Calculons la valeur de $\tau$  
On a: $\tau = R C$  
Donc: $C = \frac{\tau}{R}$  
A.N.: $C = \frac{1 \times 10^{-3}}{2 \times 10^{3}} = 5 \times 10^{-7} \, F$  
Montons que: $E_e(t) = \frac{C E^2}{2} e^{-\frac{2 t}{\tau}}$ avec $u_C(t) = E e^{-\frac{t}{\tau}}$  
On sait que:  
$$ 
E_e(t) = \frac{C E^2}{2} e^{-\frac{2t}{\tau}} 
$$  
Donc:  
$$ 
E_e(t) = \frac{C}{2} \left( E e^{-\frac{t}{\tau}} \right)^2 
$$  
Alors:  
$$ 
E_e(t) = \frac{C E^2}{2 e^{-\frac{t}{\tau}}} 
$$  
D’où:  
$$ 
E_e(t) = \frac{CE^2}{2} e^{-\frac{2t}{\tau}} 
$$  
Calculons: $E_e(2t)$  
On a:  
$$ 
E_e(2t) = \frac{C E^2}{2} e^{-\frac{2 t}{\tau}} 
$$  
Alors:  
$$ 
E_e(2t) = \frac{C E^2}{2} e^{-4} 
$$  
A.N.: $E_e(2t) = \frac{5 \times 10^{-7} \times 10^2}{2} \times e^{-4} = 4,58 \times 10^{-7} \, J$ 

---

### Exercice 17

1. Identification des courbes  
   - Le condensateur est initialement déchargé, donc $u_C(0) = 0 \, V$, alors la courbe $\overset{∘}{D}$ est celle qui représente les variations de la tension $u_C$ en fonction du temps.  
   - La courbe $\overset{∘}{E}$ est celle qui représente les variations de la tension $u_R$ en fonction du temps.  

2. Déterminons la valeur de $\tau$  
   Lors de la réponse d’un dipôle RC à un échelon de tension montant on a: $u_C(\tau) = 0,63 U$  
   Donc: $u_C(\tau) = 0,6 \times 30 = 18,9$  
   Alors par projection orthogonale sur la courbe $\overset{∘}{D}$, puis sur l’axe du temps on obtient: $\tau \approx 5 \, \text{ms}$
```

<!-- Page 20 -->

```markdown
## Déterminons la valeur de $\tau$ et celle de $C$
On a : $\tau = RC$  
Donc : $C = \frac{\tau}{R}$  
A.N.C : $C = 5 \times 10^{-3} \text{ F}$  
Nous calculons l'énergie emmagasinée dans le condensateur à la fin de la charge.

---

## Exercice 18
L'équation différentielle vérifiée par $q(t)$ :  
D'après la loi d'additivité des tensions on a : $u_c + u_r = E$  
Avec : $u_r = R \cdot i(t)$ et $u_c(t) = \frac{q(t)}{C}$ et $i(t) = \frac{dq(t)}{dt}$  
Donc : $q(t) + R \cdot \frac{dq(t)}{dt} = CE$  

L'expression de l'énergie électrique stockée dans le condensateur est : $E_e = \frac{q^2}{2C}$  
D'après la courbe de la figure $\displaystyle 2$ on a :  
$$ E_{ep} = 4mJ = \frac{q^2_{\max}}{2C} = 16 \times 10^{-8} \text{ C}^2 $$  
Et on a : $E_{ep} = \frac{q^2_{\max}}{2C}$  
Donc : $C = \frac{q^2_{\max}}{2E_{ep}}$  

A.N. : $C = \frac{16 \times 10^{-8}}{2 \times 4 \times 10^{-8}} = 2 \times 10^{-5} \text{ F}$  
Calculons la valeur de la constante du temps du dipôle RC étudié.  
On sait que : $\tau = RC$  
A.N. : $\tau = 100 × 2 \times 10^{-3} = 2 \text{ ms}$  
Calculons la valeur de la force électromotrice du générateur.  
On a : $u_c(t) = \frac{q(t)}{C}$  
Donc : $u_{\max} = \frac{q_{\max}}{C}$ avec $u_{\max} = E$  
Alors : $E = \frac{q_{\max}}{C}$  
A.N. : $E = \frac{16 \times 10^{-8}}{2 \times 10^{-5}} = 20V$

---

## Exercice 19
Les deux condensateurs de même capacité sont montés en dérivation, donc leur capacité équivalente est $C_{eq} = 2C$  
L'équation différentielle vérifiée par $i(t)$ :  
D'après la loi d'additivité des tensions on a : $u_c + u_r = E$  
Avec : $u_r = R \cdot i(t)$ et $u_c = \frac{q(t)}{C_{eq}}$  
Donc : $\frac{q(t)}{C_{eq}} + R \cdot i(t) = E$  
Alors : $q(t) + R \cdot C_{eq} \cdot \frac{di(t)}{dt} = 2CE$  
On dérive cette égalité et trouve:  
$$ \frac{dq(t)}{dt} + 2R C_{eq} \cdot \frac{di(t)}{dt} = 0 $$  
Puisque $i(t) = \frac{dq(t)}{dt}$, on obtient:  
$$ i(t) + 2R C_{eq} \cdot \frac{di(t)}{dt} = 0 $$  
Trouvons l'expression de $\tau$ et celle de $R$ et $E$  
On remplace la solution $i(t) = I e^{-\frac{t}{\tau}}$ dans l'équation différentielle $i(t) + 2RC \cdot \frac{di(t)}{dt} = 0$, on trouve:  
$$ -I e^{-\frac{t}{\tau}} \cdot \frac{1}{\tau} - 2R \cdot -\frac{I}{\tau} e^{-\frac{t}{\tau}} = 0 $$  
$$ -\frac{I}{\tau} \left( 1 - 2R \cdot \frac{1}{\tau} \right) = 0 $$  
Donc :  
$$ \tau = 2RC $$  
À $t = 0$ on a : $u_c(0) + u_R(0) = E$ avec $u_c(0) = 0$  
$$ 0 + R \cdot I = E $$  
Alors : $I = \frac{E}{R}$  

---

### a - Montrons que l'énergie emmagasinée dans les deux condensateurs à un instant $t$ est : 
$$ E_c(t) = E_{max}(1 - e^{-\frac{t}{\tau}})^2 $$  
Donc :  
$$ E_e = E_c = \frac{C_{eq}}{2} E(1 - e^{-\frac{t}{\tau}})^2 $$  
avec : $E_{max} = \frac{C_{eq}}{2} E^2$  
Alors :  
$$ E_e = \frac{C_{eq}}{2} E^2 (1 - e^{-\frac{t}{\tau}})^2 $$  
avec $E_{max} = \frac{C_{eq}}{2} E^2$  

### b - Calculer la valeur de $E_{c}(t)$  
On a :  
$$ E(t) = E_{max}(1 - e^{-\frac{t}{\tau}})^2 $$  
Donc :  
$$ E_{c}(t) = E_{max}(1 - e^{-\frac{t}{\tau}})^2 $$  
A.N. : $E_{c}(t) = E_{max}(1 - e^{-\frac{1}{2}})^2$  
Déterminons la valeur de $\tau$  
On a : $E_c(\tau) \approx 5.8 \text{ mJ}$, alors par projection orthogonale sur la courbe, puis sur l'axe du temps, on obtient : $\tau \approx 5 \text{ ms}$  
Calculer la valeur $C$ et celle de $E$  
On a : $\tau = 2RC$  
Donc : $C = \frac{\tau}{2R}$  
A.N.C : $C = 1.25 \times 10^{-5} \text{ F}$  
Et on a : $E_{max} = \frac{C_{eq}}{2} E^2$ avec $C_{eq} = 2C$  
Alors : $E = E_{max}$  
A.N. : $E = \frac{14.4 \times 10^{-3}}{1.25 \times 10^{-5}} = 33.9 \text{ V}$
```

<!-- Page 21 -->

```markdown
# Exercice 20

1. Calculons la valeur de la constante du temps associée à chaque montage.
   - Pour le montage 1 : Dans ce montage les deux condensateurs en série dérivation, donc :
     $$ C_{eq1} = C + C = 2C $$
     Alors la constante du temps associée à ce montage est : 
     $$ \tau_1 = R \times C_{eq1} $$
     D'où : 
     $$ \tau_1 = 2 \times 2 \times 10^{-2} $$
     A.N. : $ \tau_1 = 2 \times 10^{-3} \, s $

   - Pour le montage 2 : les deux condensateurs sont montés en série, donc :
     $$ \frac{1}{C_{eq2}} = \frac{1}{C} + \frac{1}{C} = \frac{2}{C} $$
     Alors : 
     $$ C_{eq2} = \frac{C}{2} $$
     La constante du temps associée à ce montage est : 
     $$ \tau_2 = R \times C_{eq2} $$
     D'où : 
     $$ \tau_2 = R \times \frac{C}{2} $$
     A.N. : $ \tau_2 = \frac{2}{10^3 \times 10^{-6}} = 5 \times 10^{-3} \, s $

2. La durée de charge du condensateur est: 
   $$ \Delta t = 5\tau $$
   et puisque $ \tau_1 > \tau_2 $, donc $ \Delta t_1 > \Delta t_2 $.

On déduit que le montage permet de charger les deux condensateurs plus rapidement.

3. Calculons l'énergie électrique stockée par les deux condensateurs dans chaque montage.
   - On a : 
     $$ E_{p} = \frac{C_{eq}}{2} u_{cmax}^2 \, avec \, u_{cmax} = E $$

   - Pour le montage 1 :
     Donc : 
     $$ E_{p1} = \frac{C_{eq1}}{2} E^2 $$
     Alors : 
     $$ E_{p1} = \frac{C}{2} E^2 $$
     A.N. : $ E_{p1} = 10 \times 10^{-6} \times 12^2 = 1,44 \times 10^{-3}\, J $

   - Pour le montage 2 : 
     on trouve 
     $$ E_{p2} = \frac{C_{eq2}}{2} E^2 $$
     Donc : 
     $$ E_{p2} = \frac{1}{4} \times E $$
     A.N. : $ E_{p2} = \frac{10 \times 10^{-6}}{4} \times 12^2 = 3,6 \times 10^{-4}\, J $

On constate que : $ E_{p1} > E_{p2} $, on déduit l’association en dérivation permet aux condensateurs de stocker plus d’énergie par rapport à l’association en série.
```

<!-- Page 22 -->

```markdown
# Dipôle RL

## Objectifs
- Connaître le symbole de la bobine.
- Connaître l’expression de la tension aux bornes de la bobine.
- Savoir déterminer l’inductance de la bobine et sa résistance interne.
- Établir l’équation différentielle et sa solution pour un dipôle RL soumis à un échelon de tension.
- Savoir déterminer la constante du temps du dipôle RL.
- Connaître l’expression de l’énergie stockée dans la bobine.
- Connaître le comportement d’une bobine dans un circuit électrique.

## Axes du cours
### La bobine
- Définition.
- La tension aux bornes d’une bobine.

### Réponse d’un dipôle RL série à un échelon de tension
- Le dipôle RL.
- Échelon de tension.
- Étude expérimentale de la réponse d’un dipôle RL série à un échelon de tension.
- Étude théorique de la réponse d’un dipôle RL série à un échelon de tension montant “Établissement du courant”.
- Étude théorique de la réponse d’un dipôle RL série à un échelon de tension descendant “Annulation du courant”.
- La constante du temps du dipôle RL.

### L’énergie emmagasinée dans la bobine
```

<!-- Page 23 -->

```markdown
## La bobine

### ① Définition

La bobine est un dipôle constitué d’un enroulement non connecté de fil conducteur de cuivre autour d’un noyau. La bobine est symbolisée par :

$$(L, r) \quad \text{Ou} \quad \begin{array}{c}
L \\
r
\end{array}$$

$L$ : est l’inductance de la bobine son unité en (S.I) est Henry (H)  
$r$ : est la résistance interne de la bobine son unité en (S.I) est Ohm (Ω)  
💡 Remarque  
Dans un circuit électrique, la bobine résiste l’établissement ou l’annulation du courant qui la traverse, cette résistance augmente lorsqu’un noyau de fer forgé est inséré dans la bobine.

### ② La tension aux bornes de la bobine

Pour une bobine sans noyau de fer, et en convention réceptrice, la tension aux bornes de la bobine est :

$$u_L = r \cdot i + L \frac{di}{dt}$$

- $u_L$ : la tension aux bornes de la bobine en (V)  
- $L$ : est l’inductance de la bobine en (H)  
- $r$ : est la résistance interne de la bobine en (Ω)  
- $i$ : l’intensité du courant en (A)  
- $t$ : le temps en (s)  

💡 Remarques  
- En régime permanent la bobine se comporte comme un conducteur ohmique de résistance $r$.  
- La bobine résiste l’établissement ou l’annulation du courant qui la traverse à cause du produit $L \frac{di}{dt}$.  
- Si l’intensité du courant est variée très rapide, la dérivée $\frac{di}{dt}$ prend une valeur très grande et ainsi que $u_L$, d'où elle apparaît une surtension aux bornes de la bobine. Ce phénomène est utilisé par exemple pour provoquer des étincelles aux bornes de la bougie d’un moteur à essence et l’allumage des lampes au néon.

## Réponse d’un dipôle RL série à un échelon de tension

### ① Le dipôle RL

Le dipôle RL série est l’association en série d’un conducteur ohmique de résistance $R$ et d’une bobine d’inductance $L$ et de résistance interne $r$.

### ② Échelon de tension

On dit qu’un dipôle RL est soumis à un échelon de tension si la tension entre ses bornes varie instantanément de zéro jusqu’à une valeur constante $E$ (établissement du courant) où l’inverse (annulation du courant).

|              | Établissement du courant | Annulation du courant |
|--------------|--------------------------|-----------------------|
| pour $t \leq 0$: $u(t) = 0$ | pour $t > 0$: $u(t) = E$ |
| pour $t \leq 0$: $u(t) = E$ | pour $t > 0$: $u(t) = 0$ |
```

<!-- Page 24 -->

```markdown
### Étude expérimentale de réponse d'un dipôle RL série à un échelon de tension

#### Le montage électrique utilisé
Pour étudier la réponse d’un dipôle RL à un échelon de tension, utilise le montage électrique schématique dans la figure ci-contre qui comporte :
- Générateur idéal de tension de f.e.m. $E$
- Conducteur ohmique de résistance $R$
- Bobine d'inductance $L$ et de résistance $r$
- Interrupteur double $K$
- Fils de connexion
- Diode simple 

#### Remarque
La diode est utilisée dans ce montage pour éviter l’apparition d’étincelles dans le circuit résultants d’une surtension aux bornes de la bobine lors de l’ouverture de l’interrupteur $K$

#### Observations expérimentales
- L’intensité du courant $i(t)$ traversant la bobine est une fonction continue.
- On distingue entre deux régimes :
  - **Régime transitoire** : pendant lequel l’intensité du courant $i(t)$ croît (ou décroît) et on l’obtient lorsque $t < 5\tau$
  - **Régime permanent** : pendant lequel l’intensité du courant $i(t)$ reste constante et a pour valeur $\frac{E}{R_T}$ (ou $0$) et on l’obtient lorsque $t > 5\tau$
- La durée de l’établissement ou l’annulation du courant augmente lorsque la valeur de $L$ augmente ou la valeur de $R$ diminue.

### Étude théorique de l’établissement du courant dans un dipôle RL série

#### Équation différentielle
On réalise le montage électrique ci-contre :
À $t = 0$, on ferme l’interrupteur $K$  
D’après la loi d’additivité des tensions on a : $u_{R} + u_{L} = E$  
Et d’après la loi d’Ohm on $u_{R} = Ri$  
Donc : $R i(t) + u_{L} = L \frac{d(i)}{dt} + ri(t)$  
Alors $R i(t) + L \frac{d(i)}{dt} = E$  
Donc $\frac{L}{R} \frac{d(i)}{dt} + i(t) = \frac{E}{R_T + r}$  
$i(t)$ est l’équation différentielle vérifiée par l’intensité du courant $i(t)$ traversant le dipôle RL.

#### La solution de l'équation différentielle
On admet que la solution de l’équation différentielle vérifiée par l’intensité du courant $i(t)$ s’écrit sous la forme suivante : $i(t) = A e^{-mt} + B$ avec $A$, $B$ et $m$ sont des constantes à déterminer
- On détermine $B$ et on institue l’équation différentielle :
On remplace la solution $i(t) = A e^{-mt} + B$ dans l’équation différentielles suivante :
$$i(t) + \frac{L}{R} \frac{d(i)}{dt} = \frac{E}{R_T}$$  
Donc $A e^{-mt} + B +  \frac{L}{R} \left( -m A e^{-mt} \right) = \frac{E}{R_T}$  
Pour que cette équation soit vérifiée $\forall t \geq 0$ il faut que :
1. $-m \frac{E}{R_T} = 0$ et $R - B = 0$  
Donc : $m = \frac{1}{\tau}$ et $B = \frac{E}{R_T}$  
Alors : $i(t) = A e^{-t/\tau} + \frac{E}{R_T}$
```

<!-- Page 25 -->

```markdown
## On détermine A en utilisant les conditions initiales
À $t = 0$ la bobine résiste l’établissement du courant donc : $i(0) = 0$  
Et on a $i(0) = A \cdot e^0 + \frac{E}{R_T}$  
$$ \Rightarrow A + \frac{E}{R_T} = 0 $$  
finalement on aura : $i(t) = \frac{E}{R_T} (1 - e^{-t/\tau})$  

### L’expression de la tension $u_R$ aux bornes de la résistance
On a : $u_R = R i(t) avec \, i(t) = \frac{E}{R_T} (1 - e^{-t/\tau})$  
Donc : $u_R = \frac{R E}{R_T} (1 - e^{-t/\tau})$  

### L’expression de la tension $u_L$ aux bornes de la bobine
On a $u_R + u_L = E$  
Donc : $u_L = E - u_R$ avec $u_R = \frac{R E}{R_T} (1 - e^{-t/\tau})$  
Alors : $u_L = E - \frac{R E}{R_T} (1 - e^{-t/\tau})$  
$$ u_L = \frac{E}{R_T} R e^{-t/\tau} $$  

## Étude théorique de l’annulation du courant dans un dipôle RL série
### Équation différentielle
On place l’interrupteur $K$ en position $1$ jusqu’à ce que le régime permanent soit atteint, puis on le bascule en position $2$ à $t = 0$  
D’après la loi d’additivité des tensions on a : $u_R + u_L = 0$  
Et d’après la loi d’Ohm on a $u_R = R i$  
Donc : $R i(t) + u_L = 0$ avec $u_L = L \frac{di(t)}{dt} + ri(t)$  
Alors $ri(t) + R i(t) + L \frac{di(t)}{dt} = 0$  
$$ \Rightarrow R i(t) + L \frac{di(t)}{dt} = 0 avec \, R + r $$  
$$ \iff i(t) + L \frac{di(t)}{dt} = 0 $$  

C’est l’équation différentielle vérifiée par l’intensité du courant $i(t)$ traversant le dipôle RL.  

### La solution de l’équation différentielle
On admet que la solution de l’équation différentielle vérifiée par l’intensité du courant $i(t)$ s’écrit sous la forme suivante : $i(t) = A \cdot e^{-mt} + B$ avec $A$, $B$ sont des constantes à déterminer.  
- On détermine $B$ et m en utilisant l’équation différentielle  
On remplace la solution $i(t) = A \cdot e^{-mt} + B$ dans l’équation différentielle suivante :  
$$A \cdot e^{-mt} + B = L \frac{di(t)}{dt} = 0$$  
$$ \Rightarrow A \cdot e^{-mt} + B = L \left( -m A \cdot e^{-mt} + 0 \right) $$  
$$ \Rightarrow A \cdot e^{-mt} \left(1 + \frac{L}{R_T}m \right) = B $$  

Pour que cette équation soit vérifiée $\forall t \ge 0$ il faut que : $1 - \frac{E}{R_T} = 0$ et $B = 0$  
Donc : $m = \frac{1}{\tau} \Rightarrow i(t) = A \cdot e^{-t/\tau}$  
On détermine $A$ en utilisant les conditions initiales  
À $t = 0$ résiste l’annulation du courant donc : $i(0) = \frac{E}{R_T}$  
Et on a $i(0) = A \cdot e^0 \Rightarrow A = \frac{E}{R_T}$ finalement on aura :  
$$i(t) = \frac{E}{R_T} e^{-t/\tau}$$  
```

<!-- Page 26 -->

```markdown
### L’expression de la tension aux bornes du conducteur ohmique
D’après la loi d’Ohm on $u_R = Ri$  
On a : $i(t) = \frac{E}{R} e^{-t/\tau}$  
Donc : $u_R = R \frac{E}{R} e^{-t/\tau}$

### L’expression de la tension aux bornes de la bobine
D’après la loi d’additivité des tensions on a :  
$u_L + u_R = 0$  
Donc : $u_L = -u_R$  
D’où : $u_L = -R \frac{E}{R} e^{-t/\tau}$

### La constante du temps du dipôle RL
#### Définition
On définit la constante du temps du dipôle RL série par la relation suivante : $\tau = \frac{L}{R}$

#### La dimension de la constante du temps
On a : $\tau = \frac{L}{R} \Rightarrow [\tau] = \frac{[L]}{[R]}$  
Et on sait que : $R = \frac{u}{i(t)} \Rightarrow [R] = \frac{[U]}{[I]}$  
Donc : $[\tau] = [T]$  
La dimension de la constante du temps $\tau$ est le temps

### La détermination graphique de constante du temps
#### Cas de l’établissement du courant
$\tau$: Représente l’abscisse du point d’intersection de la tangente à la courbe $i = f(t)$ à $t = 0$ et la asymptote $i = \frac{E}{R_T}$

#### Cas de l’annulation du courant
$\tau$: Représente le point d’intersection de la tangente à la courbe $i = f(t)$ à $t = 0$ et l’axe des abscisses.

### L’énergie emmagasinée dans la bobine
L’énergie magnétique emmagasinée dans la bobine à un instant $t$ est donner par la relation suivante :  
$$ E_m = \frac{1}{2} L i(t)^2 $$  
$$ E_m : \text{l’énergie magnétique en joule (J)} $$  
$$ i : \text{l’intensité du courant en (A)} $$  
$$ L : \text{L’inductance de la bobine en (H)} $$

### Exercice 1
1. Répondre par vrai ou faux
   - Lors de l’établissement du courant et en régime permanent, la bobine ce comporte comme un conducteur ohmique de résistance $r$.
   - La durée de charge d’une bobine est indépendante de son coefficient d’induction $L$.
   - L’inductance de $L$ est une grandeur physique qui exprime l’aptitude de la bobine d’emmagasiner une énergie magnétique.
   - Lors de l’établissement du courant dans un dipôle RL, la tension entre ses bornes croît avec le temps.
   - L’énergie stockée dans la bobine est proportionnelle à l’intensité du courant qui la traverse.
   - Lors de l’étude de l’annulation du courant dans un dipôle RL série en ajoute dans le circuit une diode pour emmagasiner de l’énergie magnétique de la bobine.
```

<!-- Page 27 -->

```markdown
## Exercice 2
On dispose une bobine une bobine de résistance interne $r = 6 \ \Omega$ et d’inductance $L = 30 \ mH$. Cette bobine est parcourue par un courant électrique d’intensité $i(t) = 10t + 3$

1. Déterminer l’expression de la tension aux bornes de la bobine en fonction du temps, et calculer sa valeur à l’instant $t = 2 \ s$.
2. Déterminer l’expression de l’énergie magnétique stockée dans la bobine en fonction du temps, et calculer sa valeur à l’instant $t = 2 \ s$.

## Exercice 3
On considère une bobine d’inductance $L = 2 \ mH$ et de résistance interne $r = 12 \ \Omega$. On monte cette bobine aux bornes d’un générateur de courant délivrant une intensité constante $I = 80 \ mA$

1. Calculer la tension $u_L$ aux bornes de la bobine.
2. Calculer l’énergie magnétique stockée dans la bobine.

## Exercice 4
Un dipôle $RL$ est constitué d’un conducteur ohmique de résistance $R = 80 \ \Omega$, et d’une bobine de résistance $r = 20 \ \Omega$, et d’inductance $L$.  
Au cours de la réponse de ce dipôle à un échelon de tension, l’intensité qui traverse la bobine est $i(t) = I(1 - e^{-t/\tau})$ où $\tau$ est le temps en $(ms)$ et $i(t)$ en $(A)$ avec $I = 120 \ mA$

1. Le dipôle est-il soumis à un échelon de tension ascendant ou descendant ? Justifier la réponse.
2. Déterminer l’expression de la tension $u_L(t)$ aux bornes de la bobine en fonction $L, I, r$ et le temps $t$.
3. Déterminer l’expression de la tension $u_R(t)$ aux bornes du conducteur ohmique en fonction $R et le temps t$.
4. Déterminer la valeur de la constante du temps $\tau$ de ce dipôle et déduire l’inductance $L$.
5. Déterminer l’expression de l’énergie magnétique $E_m(t)$ emmagasinée par ce dipôle, et calculer sa valeur maximale.

## Exercice 5
Pour déterminer les caractéristiques d’une bobine, on réalise le montage de la figure ① qui comporte un générateur idéal de tension de f.e.m. $E = 14 \ V$, un conducteur ohmique de résistance $R = 90 \ \Omega$, un interrupteur $K$, et une bobine d’inductance $L$ et de résistance interne $r$.  
À l’instant $t = 0$, on ferme l’interrupteur $K$ et par un système d’acquisition convenable on obtient les variations de l’intensité $i(t)$ en fonction du temps la figure ②

1. Représenter sur la figure ① dans la convention de récupérer les tensions $u_L$ et $u_R$.
2. Déterminer l’équation différentielle vérifiée par l’intensité $i(t)$.
3. Trouver les expressions de $I$ et $\tau$ pour que l’expression $i(t) = I(1 - e^{-t/\tau})$ soit solution de l’équation différentielle.
4. Déterminer l’expression de la tension $u_R(t)$ aux bornes du conducteur ohmique.
5. Déterminer l’expression de la tension $u_L(t)$ aux bornes de la bobine.
6. Par l’analyse dimensionnelle, montrer que $\tau$ a une dimension de temps.
7. En utilisant la courbe de la figure ②, déterminer la constante du temps $\tau$, et l’intensité du courant en régime permanent $I$.
8. Calculer la valeur de la résistance interne $r$ de la bobine et ainsi de l’inductance $L$.
```

<!-- Page 28 -->

```markdown
## Exercice 6

Pour déterminer le coefficient d’induction $L$ d’une bobine, on réalise le montage électrique ci-contre qui comporte ; une bobine de résistance interne négligeable et de coefficient d’induction $L$, un résistor de résistance $R = 100 \, \Omega$, un générateur de tension triangulaire.

À l’aide d’un oscilloscope on visualise les tensions $u_{AM}(t)$ et $u_{BM}(t)$.
1. Montrer sur le schéma ci-dessous comment brancher les entrées $Y_A$ et $Y_B$ pour visualiser les tensions $u_{AM}(t)$.
2. Exprimer la tension $u_{AM}(t)$ en fonction de $R$ et $i(t)$.
3. Exprimer la tension $u_{AM}(t)$ en fonction de $L$ et $\frac{d(i(t))}{dt}$.
4. Déduire que $u_{AM}(t) = -L \frac{d i_{BM}(t)}{dt}$.
5. En exploitant les courbes de la figure, déterminer la valeur de $L$.

**Données**
- La sensibilité verticale pour l’entrée $Y_A$ est : $S_A = 0.3 \, V/div$
- La sensibilité verticale pour l’entrée $Y_B$ est : $S_B = 1 \, V/div$
- La sensibilité horizontale est : $S_x = 1 \, ms/div$

## Exercice 7

Pour étudier la réponse d’un dipôle $RL$ à un échelon de tension descendant, on réalise le montage électrique schématique sur la figure ① qui comporte :
- Générateur idéal de tension de f.e.m. $E = 6 \, V$
- Conducteur ohmique de résistance $R = 50 \, \Omega$
- Bobine d’inductance $L$ et de résistance interne $r$
- Interrupteur $K$
- Diode idéale ($u_p = 0$)

Lorsque le régime permanent est atteint, on ouvre l’interrupteur $K$ à un instant $t = 0$, et par un système d’acquisition convenable, on visualise la variation de l’intensité du courant $i(t)$ en fonction du temps (la courbe de la figure ②).
1. Donner $I_0$ (l’intensité initiale du courant) en fonction de $E$, $r$, $R$.
2. Déterminer l’équation différentielle vérifiée par l’intensité du courant $i(t)$.
3. Trouver l’expression de $\tau$ pour que l’expression $i(t) = I_0 e^{-t/\tau}$ soit solution de l’équation différentielle.
4. En exploitant la courbe de la figure ② déterminer :
   a. La valeur initiale de $I_0$ l’intensité du courant.
   b. La valeur de la constante du temps $\tau$.
5. Calculer la valeur d’inductance $L$ de la bobine et celle de sa résistance interne $r$.
6. Déterminer l’instant $t_0$ où l’énergie emmagasinée dans la bobine est égale à $90\%$ de sa valeur initiale.

## Exercice 8

On considère le montage électrique de la figure ① qui comporte :
- Générateur idéal de tension de f.e.m. $E$
- Conducteur ohmique de résistance $R = 30 \, \Omega$
- Bobine idéale d’inductance $L$
- Interrupteur $K$

Lors de l’interrupteur $K$ à un instant $t = 0$, et à l’aide d’un oscilloscope numérique, on visualise la variation de la tension $u_R$ aux bornes du conducteur ohmique en fonction du temps (la courbe de la figure ②).
```

<!-- Page 29 -->

```markdown
1. Recopier le schéma de la figure (1), et montrer sur laquelle comment brancher les entrées de l'oscilloscope pour visualiser la tension $u_R$.

2. Montrer que l'équation différentielle vérifiée est : $u_R + L \frac{du_R}{dt} = U$, en précisant les expressions de $E$ et $u$ en fonction des paramètres du circuit.

3. Vérifier que $u_R = E(1 - e^{-t/\tau})$ est une solution de l'équation différentielle.

4. En exploitant la courbe de la figure (2) déterminer la valeur de la f.e.m. $E$ du générateur et celle de la constante du temps $\tau$.

5. Calculer la valeur d'inductance $L$ de la bobine et celle de l'intensité du courant en régime permanent.

6. Montrer que l'expression de l'énergie magnétique stockée dans la bobine à un instant $t$ est : 
$$ E_m = \frac{L I^2}{2} \left(1 - e^{-2t/\tau}\right) $$
et calculer sa valeur à l’instant $t = 3\tau$.

## Exercice 9

On réalise le montage électrique, schématisé sur la figure (1), qui comporte :
- Générateur de tension de f.e.m. $E = 6 \, \text{V}$ et de résistance interne $r$.
- Conducteur ohmique de résistance $R = 100 \, \Omega$.
- Une bobine d'inductance $L$ et de résistance négligeable.
- Interrupteur $K$.

1. Identifier la courbe qui représente la tension $u_R(t)$ et celle qui représente $u_{PN}(t)$.

2. Déterminer la valeur de $I_P$; l’intensité du courant électrique en régime permanent.

3. Vérifier que la valeur de la résistance du générateur est : $r = 20 \, \Omega$.

4. Établir l’équation différentielle vérifiée par l’intensité du courant $i(t)$.

5. Trouver les expressions de $I_P$ et $t$ pour que l'expression 
$$ i(t) = I_P(1 - e^{-r/t}) $$ 
soit solution de l’équation différentielle.

6. Déterminer la valeur de la constante du temps $\tau$.

7. Déduire la valeur de l’inductance $L$ de la bobine.

## Exercice 10

Pour étudier l’annulation du courant dans un dipôle $RL$ on considère le montage électrique de la figure (1). Lorsque le régime permanent est atteint, on ouvre l'interrupteur $K$ à un instant $t = 0$, et par un système d’acquisition convenable, on obtient la courbe de la figure (2) qui représente les variations de l’énergie magnétique stockée dans la bobine en fonction du temps. On donne $R = 1 \, \text{k}\Omega$ et $I_0 = 0,1 \, \text{A}$.

1. Déterminer l’équation différentielle vérifiée par la tension $u_R(t)$.

2. Trouver l’expression de $\tau$ pour que l’expression 
$$ u_R(t) = \frac{ER}{R+r} e^{-t/\tau} $$ 
soit solution de l’équation différentielle.

3. En exploitant les courbes de la figure (2) déterminer la valeur de la constante du temps et celle de l'énergie magnétique initiale stockée dans la bobine.

4. Trouver l’expression de l’énergie magnétique initiale stockée dans la bobine en fonction de $I_0, L$.

5. Calculer la valeur de l'inductance $L$ de la bobine et déduire la valeur de sa résistance.
```

<!-- Page 30 -->

```markdown
# Exercice 11

La bobine est un dipôle utilisé dans des plusieurs montages électriques et électronique grâce à ses propriétés électriques, notamment son aptitude de stockée de l’énergie électrique. Cet exercice sert à étudier l’établissement du courant dans un circuit RL pour cela on considère le montage électrique schématisé par la figure 0, et qui comporte :
- Générateur idéal de tension de f.e.m. E
- Conducteur ohmique de résistance R = 40Ω
- Une bobine d’inductance L et de résistance interne r
- Interrupteur K

À l’instant $t = 0$, on ferme l’interrupteur K et on visualise à l’aide d’un oscilloscope à mémoriser les variations de la tension $u_R(t)$ aux bornes de la résistance R et celle de la tension $u_{PN}$ aux bornes du générateur, et on obtient les courbes A et B représentées sur la figure 2.

![Figure 2](link) 

1. Identifier parmi les courbes (A) et (B), la courbe qui représente la tension $u_R(t)$ et celle qui représente la tension $u_{PN}$. Justifier votre choix.
2. Montrer que l’équation différentielle que vérifie par la tension $u_R(t)$ s’écrit sous la forme suivante :
   $$ \frac{du_R(t)}{dt} + u_R(t) = U_P $$
   en déterminant les expressions de $U_P$ et $\lambda$ en fonction des paramètres des circuits.
3. Vérifier que la tension $u_R(t) = U_P(1 - e^{-t/\tau})$ soit solution de l’équation différentielle.
4. Exprimer $$ \left. \frac{du_R(t)}{dt} \right|_{t=0} $$, la dérivée de la tension $u_R(t)$ par rapport au temps à l’instant $t = 0$, en fonction de $E$, $R$ et $L$. Déduire la valeur de l’inductance L.
5. Calculer la valeur de l’intensité du courant traversant le circuit en régime permanent et déduire la valeur de la résistance r de la bobine.

# Exercice 12

Dans un circuit en série, on place un générateur de tension continue, un interrupteur K, un conducteur ohmique de résistance $R = 50Ω$ et une bobine d’inductance $L = 0.18H$ et de résistance interne $r = 10Ω$. On ferme le circuit et à l’aide d’un système informatisé, on visualise la tension $u_L$ aux bornes de la bobine au cours des temps (la figure ci-contre).

1. Rappeler l’expression de la tension $u_L$ aux bornes de la bobine en fonction de l’intensité $i(t)$ qui la traverse.
2. Que devient l’expression de $u_L$ lorsque l’intensité du courant est constante.
3. À partir de quelle date l’intensité du courant devient constante, est établi lorsque $t=0$.
4. Calculer l’intensité du courant $i$ traversant la bobine en régime permanent.
5. Déterminer graphiquement le constant du temps $\tau$ et le comparer à la valeur théorique.
6. Calculer l’énergie emmagasinée dans la bobine en régime permanent.

```


<!-- Page 31 -->

```markdown
## Exercice 13

La bobine est un dipôle constitué d’un enroulement non connecté de fil conducteur de cuivre autour d’un noyau. Cet exercice consiste à étudier l’établissement du courant dans un circuit RL pour cela on considère le montage électrique schématique par la figure ①, et qui comporte :
- Générateur idéal de tension de f.e.m. $E$
- Conducteur ohmique de résistance $R$
- Une bobine d’inductance $L$ et de résistance interne $r$
- Interrupteur $K$

À l’instant $t = 0$, on ferme l’interrupteur $K$ et on visualise à l’aide d’un oscilloscope à mémoire les variations de la tension $u_L$ aux bornes de la bobine et ceux de la tension $u_R(t)$ aux bornes de la résistance $R$, et on obtient les courbes $A$ et $B$ représentées sur la figure ②.

En régime permanent, un ampèremètre branché dans ce circuit indique la valeur $I = 0,2A$

1. Déterminer en justifiant la réponse la courbe représentant les variations de la tension $u_L$ aux bornes de la bobine, et celle représentant les variations de la tension $u_R$ aux bornes du conducteur ohmique.
2. Montrer que l’équation différentielle vérifiée par la tension $u_R(t)$ aux bornes du conducteur ohmique s’écrit sous la forme :
   $$ \frac{L}{(R+r)} \frac{du_R(t)}{dt} + u_R(t) = \frac{ER}{(R+r)} $$
3. Trouver les expressions de $\lambda$ et $U$ pour que la tension $u_R(t) = U(1 - e^{-\lambda t})$ soit solution de l’équation différentielle.
4. En exploitant les courbes de la figure déterminer la valeur de la constante du temps $\tau$ et cette tension $U$ aux bornes du conducteur ohmique en régime permanent ainsi que la valeur de la tension $U_L$ aux bornes de la bobine en régime permanent.
5. Déduire la valeur de la force électromotrice du générateur.
6. Calculer la valeur de la résistance $R$ du conducteur ohmique.
7. Calculer la valeur de la résistance interne $r$ de la bobine et de l’inductance $L$.
8. Exprimer $$ \left.\frac{du_R}{dt}\right|_{t=0} $$, à la dérivée de la tension $u_R(t)$ par rapport au temps à l’instant $t = 0$, en fonction de $I$, $E$, $U$ . Et calculer sa valeur.
9. Calculer l’énergie emmagasinée dans la bobine en régime permanent.

## Exercice 14

Pour étudier l’influence de la résistance à l’établissement du courant électrique dans un dipôle RL on considère le montage électrique schématique par la figure ①, et qui comporte : idéal de tension de f.e.m. $E$, un conducteur ohmique de résistance de résistance réglable, une bobine idéale d’inductance $L$ et un interrupteur $K$. À l’instant $t = 0$, on ferme l’interrupteur $K$, et à l’aide d’un système d’acquisition convenable visualise les variations de l’intensité du courant $i(t)$ traversant le circuit en fonction des valeurs de la résistance $R(K = 200.0 \, \Omega$ et $R_B = 125.2 \, \Omega)$, et on obtient les courbes $A$ et $B$ représentées sur la figure ②.
```


<!-- Page 32 -->

```markdown
# Exercice 14

1. Déterminer l’équation différentielle vérifiée par l’intensité du courant $i(t)$
2. Déterminer l'expression de $m$ et celle de $I$ pour que l'expression de l’intensité du courant $i(t) = I(1 - e^{-mt})$ soit solution de l’équation différentielle.
3. En exploitant les courbes de la figure (2) déterminer :
   - a - La valeur de l’intensité du courant en régime permanent associé à chaque courbe.
   - b - La valeur de la constante du temps associée à la courbe A.
4. Calculer la valeur de f.e.m. du générateur et déduire la valeur de la résistance $R_B$.
5. Calculer la valeur de l’inductance $L$ de la bobine.
6. Calculer la valeur de la constante de temps associée à la courbe B.
7. Quel est l'effet de la résistance sur la durée de charge de la bobine. Justifier la réponse.

On définit la puissance magnétique instantanée de la bobine par la relation suivante : $P_m(t) = \frac{dE_m(t)}{dt}$ où $E_m(t)$ est l’énergie magnétique stockée dans la bobine à l’instant $t$. Montrer que $P_{mA}(\tau_A) = 0, 23R_AI_A^2$ et calculer sa valeur.

---

# Exercice 15

Pour déterminer les caractéristiques d’une bobine on réalise le montage électrique de la figure ⊕ qui contient :
- Générateur de tension de f.e.m. $E$
- Un conducteur ohmique résistance $R = 50 \, \Omega$
- Une bobine idéale d’inductance $L$
- Interrupteur $K$ et une diode idéale $(u_{DP} = 0)$

Lorsqu le régime permanent est atteint, on ouvre l’interrupteur $K$ à un instant $t = 0$.

1. Pourquoi la diode est-elle utilisée dans cette installation ?
2. Déterminer l’équation différentielle vérifiée par la tension $u_L$ aux bornes de la bobine.
3. Trouver l’expression de $u_L = -U e^{- \frac{t}{\tau}}$ soit solution de l’équation différentielle.
4. Un système d’acquisition permettant de tracer la courbe représentant les variations de la tension $u_L$ en fonction du temps (la figure). En exploitant cette courbe déterminer :
   - a - La valeur de la constante de temps
   - b - La valeur de la tension $U$
5. Calculer la valeur de l’inductance $L$.
6. Trouver l’expression de l’intensité du courant traversant le circuit en fonction de $U$, $R$, et le temps $t$.
7. Calculer l’énergie magnétique initiale stockée dans la bobine.
```

<!-- Page 33 -->

```markdown
# Correction

## Exercice 1
- Répondre par vrai ou faux
  - Lors de l’établissement du courant et en régime permanent, la bobine se comporte comme un conducteur ohmique de résistance $r$: vrai
  - La durée de charge d’une bobine est indépendante de son coefficient d’induction $l$: faux
  - L’inductance $L$ est une grandeur physique qui exprime l’aptitude de la bobine d’emmagasiner une énergie magnétique: vrai
  - Lors de l’établissement du courant dans un dipôle $RL$, la tension entre ses bornes croît avec le temps: faux
  - L’énergie stockée dans la bobine est proportionnelle à l’intensité du courant qui la traverse: faux
  - Lors de l’étude de l’annulation du courant dans un dipôle $RL$ série, on ajoute dans le circuit une diode pour emmagasiner de l’énergie magnétique dans la bobine: faux

## Exercice 2
- On sait que : $U_L = ri(t) + L\frac{d(i(t))}{dt}$
  
  Avec $i(t) = 10t + 3$
  
  Donc:
  $$ U_L = (10t + 3) \cdot 6 \cdot 30 \times 10^{-3} \times 10 $$
  Alors: $U_L = 60t + 9$
  
  D'où: $U_L = 60 \cdot 2 + 9.3 = 129.3 \, V$
  
- On sait que $E_m = \frac{1}{2}L i^2(t)$
  
  Donc: $E_m = \frac{1}{2} \cdot 30 \times 10^{-3} \cdot (10t + 3)^2$

  Alors: $E_m = 1.5 \times 10^{-2}(10t + 3)^2$
  
  À $t = 2s$, on trouve $E_m = 1.5 \times 10^{-2}(10 \cdot 2 + 3)^2$
  
  D’où: $E_m = 7.395$

## Exercice 3
- Calculons la tension $U_L$
  
  On sait que $U_L = ri + L\frac{d(i)}{dt}$
  
  Donc: $U_L = rL$
  
  A.N.: $U_L = 12 \cdot 80 \times 10^{-3}$
  
  On trouve: $U_L = 0.96 \, V$
  
- Calculons l’énergie magnétique emmagasinée dans la bobine:
  
  On a: $E_m = \frac{1}{2}L i^2$
  
  A.N.: $E_m = \frac{1}{2} \cdot 2 \times 10^{-3} \cdot (80 \times 10^{-3})^2$
  
  On trouve: $E_m = 6.4 \times 10^{-6}$

## Exercice 4
- L’intensité $i(t)$ traverse la bobine lors de l’échelon de tension est $i(t) = 0.12(1 - e^{-t/2})$
  
  On constate $i = f(t)$ est fonction croissante, donc ce dépôt est soumis à un échelon de tension montant de l’établissement du courant.
  
- Déterminons l'expression de $u_L$
  
  On sait que : $U_L = ri(t) + L\frac{d(i(t))}{dt}$
  
  Donc: $U_L = r(1 - e^{-t/2}) + L e^{-t/2}$
  
  Alors : $U_L = rL(1 - e^{-t}) + L_t e^{-t/2}$
  
  Donc: $U_L = \left(\frac{L}{r}\right) e^{-t/2} + t$

- Déterminons l’expression de $u_R$
  
  D’après la loi d’Ohm, on a: $u_R = R i(t)$
  
  Donc: $U_R = R(1 - e^{-t/2})$

## Exercice 5
- Voir la représentation des tensions $u_L$ et $u_R$ dans la figure suivante:

  ![Figure](figure.png)

- D’après la loi d’additivité des tensions, on a: $u_L + u_R = E$
  
  Avec $U_L = L \frac{di}{dt} + R i(t) = u_R$
  
  Donc: $L \frac{di}{dt} + ri(t) = E$
  
  Alors: $$L \frac{di}{dt} = (R + r)i(t) = E$$
  
- Trouvons les expressions de $i$ et $\tau$
  
  On remplace la solution $i(t) = (1 - e^{-t/\tau})$ dans l’équation différentielle:

  $$ L \frac{di}{dt} + i(t) = E \frac{R}{R + r} $$
```

<!-- Page 34 -->

```markdown
# ÉLECTRON & 2BAC-PC & Électricité

## On trouve:

$$ I = \frac{E}{R + R'} \Rightarrow  R' = \frac{E}{I} - R $$

Pour que cette équation soit vérifiée $ \forall t > 0 $, il faut que 

$$ \left( \frac{L}{R + R'} \right) - I = 0 \Rightarrow \frac{E}{R + R'} = 0 $$

## Trouvons l’expression de la tension $ u_R $

On a : $ u_R = R \, i(t) $

Donc : $ u_R = R \left( 1 - e^{-\frac{t}{\tau}} \right) \, avec \, \tau = \frac{E}{R + R'} $

D'où : 

$$ u_L = E - u_R $$
$$ u_L = E - R \left( 1 - e^{-\frac{t}{\tau}} \right) $$
$$ u_L = \frac{RE}{R + R'} e^{-\frac{t}{\tau}} $$

## Exercices 6

1. Voir la représentation des entrés de l’oscilloscope la figure suivante:

![Image non fournie]

2. On a : $ u_{BM} = -u_R \, avec \, u_R = Ri(t) $

3. On a : $ u_{AM} = u_L $

4. On a : $ u_{AM} = \frac{L \, d(i)}{dt} $

5. On a : $ u_{AM} = \frac{L \, d(i)}{dt} \, avec \, i(t) = \frac{-u_{BM}}{R} $

6. Donc : 

$$ u_{AM} = L \frac{d(i)}{dt} (-\frac{u_{BM}}{R}) $$

Alors : $$ u_{AM} = - \frac{L}{R} \, a $$

Avec : $ a = (3 - 0) \times 10^{-3} $ 

On trouve: $ a = -3 \times 10^{3} \, V A^{-1} $

D'où : $$ u_{AM} = - \frac{u_{AM}}{R} \, a $$

Donc : $ L = - \frac{u_{AM} \times R}{a} $

A.N. : $ L = 0.3 \times 10^{-3} $

On trouve : $ L = 10^{-2} \, H $

## Exercices 7

1. L’expression de l’intensité initiale du courant est:

$$ I_0 = \frac{E}{R + R'} $$

2. D’après la loi d’additivité des tensions on a:

$$ u_L + u_R = 0 \, avec \, u_R = Ri(t) $$

Donc : 

$$ L \frac{d(i)}{dt} + (R + R')i = 0 $$

D'où : $$ \frac{L}{R + R'} \left( -\frac{1}{\tau} \right) + i(t) = 0 $$

## Trouvons l'expression du courant

On remplace la solution $ i(t) = I_0 e^{-\frac{t}{\tau}} $ dans l’équation différentielle suivante:

$$ \frac{L}{R + R'} \left( -\frac{1}{\tau} \right) + I_0 e^{-\frac{t}{\tau}} = 0 $$

$$ \Rightarrow I_0 e^{-\frac{t}{\tau}} = \frac{E}{R + R'} $$

3. D’après la courbe, on a: 

$$ I_0 = 100mA $$

4. D’après la courbe, on a: $ \tau = 3ms $

### Calculons la valeur de $ r $ et celle de $ L $

On a : 

$$ r = \frac{E}{I_0 + R} $$

D'après la courbe, on a: $ I_0 = 100mA $

$$ R + r = \frac{E}{I_0} $$
$$ R = \frac{E}{I_0} - r $$

A.N.: $ r = 50 $

On trouve : $ r = 10 \, \Omega $

Et on a :

$$ r = \frac{100 \times 10^{-3}}{I_0 + R} $$
```

<!-- Page 35 -->

```markdown
# Exercice 8

1. Voir la représentation des entrées de l'oscilloscope la figure suivante:
   
   $$ E - E_{r} - e^{-t/t'} + E_{e} e^{-t/t'} = E $$

   $$ E = E $$

   Donc $ u_{R} = E \left( 1 - e^{-t/t'} \right) $ est une solution de l'équation différentielle.

2. D'après la courbe, on a: $ u_{R}(0) = E = 12V et = 2ms $.

3. Calculons la valeur de $ L $.

   On a: $ \tau = \frac{L}{R} $ donc $ L = \tau R $.

   A.N.: $ L = 2 \times 10^{-3} \times 30 $ on trouve: $ L = 6 \times 10^{-2} H $.

4. Déterminons l'expression de $ E_{m} $.

   On sait que $ E_{m} = \frac{u_{R}}{2} \left( i(t) \right)^{2} $ avec $ i(t) = \frac{u_{R}}{R} $.

   Alors: $ E_{m} = \frac{(u_{R})^{2}}{2R} \left( (1 - e^{-t/t'}) \right)^{2} $.

   Donc: $ E_{m} = \frac{L^{2}}{2R^{2}} \left( (1 - e^{-t/t'}) \right)^{2} $.

   D'où: $ E_{m} = \frac{t^{2}}{2R} \left( (1 - e^{-t})^{2} \right) $.

   À $ t = 3\tau $, on trouve: $ E_{m}(3\tau) = \frac{t^{2}}{2R(1 - e^{-3})^{2} } $.

   A.N.: $ E_{m}(3\tau) = 2 \times 10^{-3} \times 12^{2} (1 - e^{-3})^{2} $.

   On obtient: $ E_{m}(3\tau) \approx 4,33 \times 10^{-3} $.

# Exercice 9

1. Lors de la réponse du dipôle $ RL $ à un échelon de tension montant, l'intensité initiale du courant est nulle: $ i(0) = 0 $.

   Donc $ u_{R}(0) = Ri(0) = 0 $.

   Alors la courbe $ B $ est celle qui représente les variations de la tension $ u_{R} $ en fonction du temps, et la courbe $ B $ représente les variations de la tension $ u_{PN} $ en fonction du temps.

2. En régime permanent on a: $ U_{P} = R I_{P} $.

   Donc: $ I_{P} = \frac{U_{P}}{R} $ et d'après la courbe $ B $ on a: $ U_{P} = 10 V $.

   A.N.: $ I_{P} = \frac{10}{100} = 0,1 A $.

3. La tension du générateur est: $ u_{PN} = E - Ri_{P} $.

   En régime permanent, on trouve: $ U_{PN} = E - R I_{P} $.

   Donc: $ r = \frac{E - U_{PN}}{I_{P}} $.

   A.N.: $ r = \frac{E - U_{PN}}{I_{P}} = \frac{12 - 0,1}{0,1} $.

4. Trouvons les expressions de $ I_{P} $ et $ \tau $.

   On remplace les solutions $ i(t) = I_{P}(1 - e^{-t/t'}) $ dans l'équation $ i(t) = \frac{ L }{ R + r} \frac{ d(i(t))}{dt} = \frac{E}{R} $.

   Alors: $ I_{P} = I_{P}(1 - e^{-t/t'}) + \frac{L}{R + r} \frac{d(i(t))}{dt} = \frac{E}{R + r} $.
```

<!-- Page 36 -->

```markdown
Cette équation est vérifiée si $\forall t > 0$
$$
\Leftrightarrow \quad (R + r) \tau - 1 = 0
$$
$$
\Leftrightarrow \quad \frac{E}{R + r} - I_p = 0
$$
$$
\Leftrightarrow \quad L(R + r) \tau = 1
$$
$$
\Leftrightarrow \quad I_p = \frac{E}{R + r}
$$
$$
\Leftrightarrow \quad (R + r) \tau = L
$$
$$
\Leftrightarrow \quad I_p = \frac{E}{R + r}$$

**Exercice 10**

1. Déterminons l'équation différentielle vérifiée par la tension $u_R$  
   D'après la loi d'additivité des tensions,
   on a : $u_L + u_R = 0$ avec $u_L = L \frac{d i(t)}{dt} + ri(t)$,  
   Donc : $u_R + L \frac{d}{dt}\left( \frac{u_R}{R} \right) + ru_R = 0$  
   $\Rightarrow$ 
   $$ 
   u_R + \frac{L}{R} \frac{d u_R}{dt} + \frac{r}{R} u_R = 0 
   $$
   $\Leftrightarrow$ 
   $$
   u_R \left(1 + \frac{L}{R} \frac{d}{dt} + \frac{r}{R} \right) = 0
   $$
   $\Leftrightarrow$ 
   $$
   u_R (R + r) = 0
   $$

2. Déterminons l'expression de $\tau$  
   En remplaçant la solution $u_R = \frac{E}{R + r} e^{-\frac{t}{\tau}}$ dans 
   l’équation différentielle : $u_R + L \frac{d u_R}{dt} + ri(t) = 0$  
   On trouve : 
   $$
   \frac{E}{R + r} e^{-\frac{t}{\tau}} + L \frac{d}{dt}\left(\frac{E}{R + r} e^{-\frac{t}{\tau}}\right) = 0
   $$  
   Donc: 
   $$
   e^{-\frac{t}{\tau}} \left( \frac{E}{R + r} + L \left(-\frac{E}{R + r \tau} e^{-\frac{t}{\tau}}\right) \right) = 0
   $$

3. D'après la courbe de la figure on trouve: $\tau = 2 ms$  
   Calculons la valeur de $L$  
   On a : $\tau = \frac{L}{R + r}$  
   Donc : $L = \tau(R + r)$  
   A.N : $L = 2 \times 10^{-3} \times (10 + 20) = 0.06 H$

---

$$
\text{Alors:} \quad \frac{E R}{R + r} - \frac{L}{(R + r)\tau} = 0
$$
$$
\Rightarrow \quad 1 - \frac{L}{(R + r)\tau} = 0
$$
$$
\Rightarrow \quad \frac{L}{(R+r)\tau} = 1
$$
$$
\Rightarrow \quad \tau = \frac{L}{R + r}
$$

5. D'après la courbe de la figure (2), on a : la durée du régime transitoire est: $\Delta t = 4.5 ms$  
   Et on sait que $A = 5 \tau$  
   Donc : $\tau = \frac{\Delta t}{5} = \frac{4.5}{5} = 0.9 ms$  
   Et $Em(0) = 64 \mu j$

6. Déterminons l'expression de $Em(0)$  
   On sait que: 
   $$
   Em = -\frac{1}{2} Li(t^2)
   $$  
   Pour $t = 0$, on a: $Em(0) = -\frac{1}{2} Li(0^2)$  

7. Calculons la valeur de $L$ et celle de $r$  
   Calculons $L$  
   On a : $Em(0) = -\frac{1}{2} L I^2_0$  
   Donc : $L = \frac{2 Em(0)}{I^2_0} = \frac{2 \cdot 64 \times 10^{-6}}{(0.1)^2} = 1.28 \times 10^{-2} H$

---

**Exercice 11**

1. La tension aux bornes du générateur est constante (générateur idéal de tension): $u_pn = E = cte$  
   Donc c'est la courbe (A).  
   Alors la courbe (B) représente la tension $u_R$.  
   Montrons l'équation différentielle.  
   D'après la loi d'additivité des tensions,
   on a : $u_R + u_L = u_{pvn} \text{ avec } u_L = \frac{di(t)}{dt}$  
   Alors : $u_R + L \frac{d}{dt} + ri(t) = u_R$  
   Alors $u_R + L \frac{du_R}{dt} + \frac{R}{R + r} u_R = E$

2. $\Rightarrow \quad u_R + L \frac{dur}{dt} = u_p$ et $u_p = \frac{E}{R + r}$  
   Vérifions que $u_R = u_p(1 - e^{-\frac{t}{\tau}})$ est une solution de l'équation différentielle.  
   On a: 
   $$
   u_R = u_p\left(1 - e^{-\frac{t}{\tau}}\right) 
   $$  
   $\Rightarrow$  
   $$
   u_R = u_p\left(1 - e^{-\frac{t}{\tau}}\right) 
   $$ 

3. Donc $u_R = Up\left(1 - e^{-\frac{t}{\tau}}\right)$ est une solution de l'équation différentielle.  
   On a: 
   $$
   \Rightarrow \quad \frac{du_R}{dt} = \frac{1}{\tau} u_p e^{-t/\tau}
   $$  
   À $t = 0$, on obtient: 
   $$
   \frac{du}{dt}\Bigg|_{t=0} = \frac{1}{\tau} u_p
   $$  
   Alors: 
   $$
   du = \frac{1}{\tau} u_p
   $$  
   Donc: 
   $$
   L = \frac{R}{R + r} 
   $$  
```


<!-- Page 37 -->

```markdown
# Exercice 11

Et on a : $ U_p = \frac{ER}{R + r} \Rightarrow R + r = \frac{ER}{U_p}$

On remplace (2) dans (1) on trouve:

$$ \frac{du_{up}}{dt} \bigg|_{t=0} = \frac{U_p}{L} $$

Alors, $ \frac{du_{up}}{dt} \bigg|_{t=0} = \frac{ER}{L} $

D'après la courbe de la figure (☉), on a : 

$$ \frac{du_{up}}{dt} \bigg|_{t=0} = \frac{6 - (0 \times 10^{-3})}{1.5 \times 10^3 \, \text{V.s}^{-1}} \text{ et } E = 12 \, \text{V} $$

Donc : $ L = \frac{\frac{du_{up}}{dt} \bigg|_{t=0} \cdot L}{ER} $

A.N. : $ L = \frac{12 \times 403}{1.5 \times 10^3} = 0.32 \, H$

### Calculons $ I_p $ et $ r $

- Calculons $ I_p $
  
On a : $ U_p = R \cdot I_p $

En régime permanent : $ U_p = R \cdot I_p $

Donc : $ I_p = \frac{U_p}{R} $

Alors : $ r = \frac{RE}{40 \times 12} = R$

A.N. : $ R = \frac{9}{40} = 2.25 \times 10^{-1} \, A$

On trouve : $ I_p = 2.25 \times 10^{-1} \, A$

### Calculons la valeur de $ r $

Donc : $ R + r = \frac{RE}{R + r}$

Alors : $ r = \frac{RE}{U_p} - R$

A.N. : $ R = 40$ 

On trouve : $ r = 13,3 \, \Omega$

# Exercice 12

L’expression de la tension la tension $ u_L $ est: 

$$ u_L = L \cdot \frac{d(i)}{dt} + r \cdot i(t) $$

On a : 

$$ u_L = L \cdot \frac{d(i(t))}{dt} + ri(t) $$

En régime permanent, l’intensité du courant devient constante : $ i(t) = I_p = cte $

Donc : $ \frac{d(i(t))}{dt} = 0 $ 

D'où : $ u_L = r \cdot I_p $

D'après la courbe, on constate, quand le régime permanent est établi au bout de la date : $ \tau = 1.2 \, ms $

En régime permanent, on a : $ u_L = r \cdot I_p $

A.N. : $ I_p = \frac{u_L}{10} = 0.1 \, A$

$$ \tau = 1.2 \, ms $$

D'après la courbe, on a : $ \tau = 1.2 \, ms $

Et on sait que : $ \tau_{ch} = \frac{L}{R + r} $

A.N. : $ \tau_{ch} = \frac{71}{50 + 10} \approx 1.18 \, ms$

On constate que $ \tau \approx \tau_{ch} $

Calculons stockée dans la bobine en régime permanent

On a : $ E_m = \frac{L}{2} i(t)^2 $

En régime permanent, on trouve : $ E_m = \frac{L}{2} I_p^2 $ 

A.N. : $ E_m = \frac{1}{2} \times 71 \times 10^{-3} \times (0.1)^2 $

On trouve : $ E_{mp} = 3.55 \times 10^{-4} \, J$

# Exercice 13

Lors de la réponse d'un dipôle $ RL $ à un échelon de tension, l’intensité du courant initial est nulle : 

$$ i(0) = 0, \text{ donc } u_{p}(0) = R \cdot i(0) = 0 $$

Alors la courbe (A) représente l'évolution temporelle de la tension $ u_R $ et la courbe (B) représente l'évolution temporelle de la tension $ u_L $.

**Déterminons l'équation différentielle vérifiée par la tension $ u_R $**

D'après la loi d'additivité des tensions, on a : 

$$ u_R + u_L = E $$

Avec: $ u_L = r \cdot i(t) + L \cdot \frac{d(i)}{dt} $

Donc : $ u_R + r \cdot i(t) + L \cdot \frac{d(i)}{dt} = E $

Alors : $ u_R + r \cdot I_R + L \cdot \frac{d(u_R)}{dt} = E $

$$ u_R \left( 1 + \frac{R}{L} \right) + L \cdot \frac{d(u_R)}{dt} = E $$

$$ \frac{L}{R + r}  \frac{d(u_R)}{dt} + u_R = E $$

**Déterminons l'expression de $ U_e $celle de $\lambda$**

On remplace la solution : $ U = U_e \left( 1 - e^{-\lambda t} \right) $ dans l'équation différentielle :

$$ u_R + u_L + \frac{L}{R + r} \cdot \frac{du_{R}}{dt} = RE $$

On trouve : $ U = \frac{1 - e^{-\lambda t}}{R+r} $

D'après la figure (☉), on a : $ U = 10 \, V$ et $ U_L = 2 \, V$

Calculons la valeur de $ R $.

On a : $ U = R \cdot I $ 

Donc : $ R = \frac{U}{I} $

A.N. : $ R = 10 \times 2 = 12 \, V$

Ainsi, on a : $ r = 50 \, \Omega$
```

<!-- Page 38 -->

```markdown
# Calculons la valeur de $r$ et $L$.

- Calculons la valeur de $r$ 
  - On a : $U = \frac{R E}{R + r}$
  - Donc : $R + r = \frac{R E}{U}$
  - D'où : $r = \frac{U R}{50 \times 12}$
  - On trouve : $r = 50 \, \Omega$
  
- Calculons $L$.
  - On a : $\tau = R + r$
  - A.N. : $L = \tau (R + r)$
  - An : $L = 5 \times 10^{-3} \times (50 + 10)$
  
- On trouve : $L = 0.3 \, H$

# Calculons la valeur de $\frac{du}{dt}\big|_{t=0}$.
- On a : $u_r = U(1 - e^{-\lambda t})$
  - Donc : $\frac{du}{dt} = A U e^{-\lambda t}$
  - À $t = 0$, on trouve : $\frac{du}{dt}\big|_{t=0} = AU$ avec : $\lambda = \frac{R + r}{L}$
  - D'où : $\frac{du}{dt}\big|_{t=0} = \frac{E}{L}$(1)
  - Et on a : $R + r = \frac{E}{I}$ (2)

- On remplace $(2)$ dans $(1)$ et on trouve : $\frac{du}{dt}\big|_{t=0} = \frac{E}{L I}$

- A.N. : $\frac{du}{dt}\big|_{t=0} = 12 \times 10^{-3} \times 0.2 = 2 \times 10^{3} \, \text{s}^{-1}$

- Calculons l'énergie stockée dans la bobine en régime permanent.
  - On a : $E_{mp} = \frac{1}{2} L I^2$
  - A.N. : $E_{mp} = \frac{1}{2} \times L \times (0.3)^2$
  
- On trouve : $E_{mp} = 6 \times 10^{-3} \, J$


# Exercice 14

1. D'après la loi d'additivité des tensions, on a :
   $$ u_L + u_R = E  \quad \text{avec } u_L = \frac{di}{dt} \text{ et } u_R = Ri(t) $$
   Donc : $ \frac{di}{dt} = Ri(t) = E $
   Alors : $ \frac{L \, di}{R dt} = E $

2. Déterminons l'expression de $m$ et celle de $I$.
   - On remplace la solution $i(t) = I(1 - e^{-mt})$ dans l'équation différentielle:
   $$ \frac{L \, di(t)}{R} = I(t) = \frac{E}{R} $$
   - On trouve : $ \frac{L m I e^{-mt}}{R} \Longrightarrow  \left( R m - 1 \right) e^{-mt} = \frac{E}{R}$
   - Donc :
   $$ \left( R m - 1 \right) = \frac{E}{R} $$ 
   - Pour que cette équation soit vérifiée pour $t \geq 0$, il faut que :
   $$ \left( \frac{L m}{1} = \frac{E}{R} \quad \text{et} \quad  I = \frac{R}{E} \right) $$

3. a - D'après la figure ($\circ$), on a :
   $$ I_a = 120 \, mA \quad I_B = 96 \, mA \quad b - d'après la figure ($\circ$), on a : \tau = 1 \, ms $$

4. Calculons la valeur de $E$ et celle de $R_B$.
   - On a : $I_A = \frac{E}{R_A}$
   - Donc : $E = I_A \times R_A$
   - A.N. : $E = 120 \times 10^{-3} \times 100 = 12 \, V$

- Calculons $R_B$ :
   - On a : $E = I_B \times R_B$
   - Donc : $R_B = \frac{E}{I_B} = \frac{E}{12}$
   - A.N. : $R_B = 125 \, \Omega$

5. Calculons la valeur de $\tau_B : \tau_B = \frac{L}{R_B}$
   - A.N. : $\tau_B = 0.1 \, 125 = 8 \times 10^{-4} = 0.8 \, ms$

- La durée de charge de la bobine est : $\Delta t = 5 \, t$
- Puisque : $\tau_A > \tau_B$, donc $\Delta t_A > \Delta t_B$
- Et on a : $R_B > R_A$

6. On déduit que plus la résistance du circuit est grande, plus la durée de charge est petite.
   - On a : $E_m = \frac{1}{2} L i^2(t)$

- Et $P_m(t) = \frac{dE_m}{dt}$ 
   - Donc : $P_m(t) = L_i \frac{d i(t)}{dt}$
   - Avec : $i(t) = I_A (1 - e^{-mt})$

Donc :
$$ P_m(t) = R_A I_A^2(1 - e^{-mt}) e^{-mt} $$
À $t = \tau_A$, on trouve : $P_m(\tau_A) = R_A I_A^2(1 - e^{-1})^{-1}$

- Alors : $P_m(t) = 0.23 R_A^2$ 
- A.N. : $P_m(\tau_A) = 0.23 \times 100 \times 120 \times 10^{-3} = 0.33 \, W$
```

<!-- Page 39 -->

```markdown
# Exercice 15

1. La diode est utilisée dans ce circuit pour éviter l’apparition d’étincelle au niveau de l’interrupteur lors de l’ouverture du circuit.
2. L'équation différentielle vérifiée par la tension $U_L$ d'après la loi d'Additivité des tensions on a:
   $$ U_L + U_R = Ri(t) $$
   Donc: $U_L + Ri(t) = 0$

   Par dérivation on obtient:
   $$ \frac{dU_L}{dt} + R \frac{di(t)}{dt} = 0 \quad (1) $$

   Et on sait que: $U_L = L \frac{di(t)}{dt}$ donc on a $U_L = (2)$

   On remplace $(2)$ dans $(1)$, on trouve:
   $$ \frac{dU_L}{dt} + \frac{R}{L} U_L = 0 $$

3. Trouvons l'expression de $\tau$:
   En remplaçant la solution $U_L = -U e^{-t/\tau}$ dans l'équation différentielle:
   $$ L \frac{d}{dt}(-U e^{-t/\tau}) + U_L = 0 $$
   Donc:
   $$ L \cdot \frac{-U}{\tau} e^{-t/\tau} + U_L = 0 $$

   On trouve:
   $$ U e^{-t/\tau} \left( \frac{L}{R} e^{-t/\tau} - 1 \right) = 0 $$
   Donc:
   $$ \frac{L}{R} - 1 = 0 $$
   Donc:
   $$ R \cdot \tau = L $$
   Donc:
   $$ \tau = \frac{L}{R} $$

4. a - D'après la courbe, on a: $\tau = 5 \, ms$  
   b - On a: $U_L(0) = -U e^0$  
   Donc: $U_L(0) = -U$  
   Et d'après la courbe, on a: $U_L(0) = -40V$  
   Donc: $U = 40V$

5. Calculons la valeur de $L$:
   On a: $ \tau = \frac{L}{R} $  
   Donc: $L = R \cdot \tau$  
   À.N.: $L = 5 \times 10^{-3} \times 50$  
   On trouve: $L = 0,25 H$

6. Trouvons l'expression de l’intensité $i(t)$:
   On a: $U_R = U \cdot i(t)$  
   Donc: $i(t) = \frac{U}{R} \cdot (3)$  
   Et on a: $U_L + U_R = 0$  
   Donc: $U_R = -U_L$  
   Avec: $U = -U e^{-t/\tau}$  
   Alors: $U_R = -U e^{-t/\tau}$

   On remplace $(4)$ dans $(3)$, on obtient:
   $$ i(t) = \frac{U e^{-t/\tau}}{R} $$  
   À $t = 0$, $i(0) = \frac{U e^0}{R}$  
   Donc: $i(0) = \frac{40}{R}$  
   À.N.: $i(0) = \frac{40}{50}$  
   On trouve: $i(0) = 0,8 A$

7. Calculons l'énergie magnétique initiale de la bobine:
   On a: $E_m = \frac{1}{2} L i(t)^2$  
   Donc: $E_m(0) = \frac{1}{2} L i(0)^2$  
   À.N.: $E_m(0) = \frac{1}{2} \times 0,25 \times (0,8)^2$  
   On trouve:
   $$ E_m(0) = 8 \times 10^{-2} J $$  
```

<!-- Page 40 -->

```markdown
# Oscillations libres dans un circuit RLC série

## Objectifs
- Connaître les régimes d’oscillations.
- Connaître l’influence de la capacité et de la résistance sur les oscillations.
- Savoir établir l’équation différentielle et sa solution dans le cas d’absence amortissement.
- Savoir établir l’équation différentielle dans le cas des amortissements faibles.
- Connaître le rôle du générateur d’entretien des oscillations.

## Axes du cours
### Décharge d’un condensateur dans une bobine
- Régimes d’oscillations.
- L’équation différentielle.

### Les oscillations libres non amorties dans un circuit LC série
- L’équation différentielle.
- La solution de l’équation différentielle.
- L’expression de la charge du condensateur.
- L’expression de l’intensité du courant.

### Echange de l’énergie entre le condensateur et la bobine
- L’énergie dans le circuit LC.
- L’énergie dans le circuit RLC.

### Entretien des oscillations
```

<!-- Page 41 -->

```markdown
## Décharge d’un condensateur dans une bobine

1. **Régimes d’oscillations**
   - **Le montage expérimental**  
   On réalise le montage électrique ci-contre :  
   On place l'interrupteur en position $0$, le condensateur se charge, puis on bascule l'interrupteur à la position $2$.  
   Le condensateur se décharge dans un dipôle $RL$.  
   On obtient des oscillations dont l'amplitude diminue avec le temps (amortissement) donc le circuit RLC est le siège d’oscillations libres amorties.
   
   - **Les régimes d’oscillations**  
   On distingue trois régimes d’oscillations selon la valeur de la résistance totale $R_T$ :
     - **Régime périodique**: La résistance totale est nulle ($R_T = 0$), les oscillations sont périodiques.  
       Le circuit LC alors le siège d’oscillations libres non amorties dont le régime est périodique caractérisé par sa période propre $T_0$.
     - **Régime pseudopériodique**: La résistance totale est faible, l'amplitude des oscillations décroît au cours du temps.  
       Les oscillations s'amortissent et le régime est pseudo-périodique caractérisé par sa période pseudo $T \approx T_0$.
     - **Régime apériodique**: Si la résistance totale du circuit RLC est grande les oscillations disparaissent, car l'amortissement est fort, le condensateur perd sa charge sans oscillations.

2. **L’équation différentielle**  
   On considère le montage électrique ci-contre.  
   Le condensateur est initialement chargé. À $t = 0$, on ferme l'interrupteur $K$ et d’après la loi d’additivité des tensions on a : 
   $$ u_C + u_R + u_L = 0 $$  
   Avec $u_R = R i_L$ et $i_L = r_i\left(\frac{d}{dt}\right)$. 
   Donc : 
   $$ u_C + R i_C + r i_C \left(\frac{d}{dt}\right) = 0 \quad \text{avec} \quad i(t) = \frac{d q_C}{dt} $$  
   Alors : 
   $$ u_C + R_T C \frac{d u_C}{dt} + LC \frac{d^2 u_C}{dt^2} = 0 \quad \text{avec} \quad R_T = R + r $$  
   C'est l'équation différentielle vérifiée par la tension $u_C$ aux bornes du condensateur dans un circuit RLC série.

## Les oscillations libres non amorties dans un circuit LC série

1. **L’équation différentielle**  
   On considère le montage électrique schématique dans la figure ci-contre.  
   Le condensateur est initialement chargé, et à $t = 0$, on ferme l'interrupteur $K$.  
   D’après la loi d’additivité des tensions on a : 
   $$ u_C + u_L = 0 $$  
   avec $u_L = L \frac{d i(t)}{dt}$.  
   Donc : 
   $$ u_C + L \frac{d i(t)}{dt} = 0 \quad \text{avec} \quad i(t) = \frac{d q_C}{dt} $$  
   Alors : 
   $$ u_C + L C \frac{d^2 u_C}{dt^2} = 0 \quad \text{ou bien} \quad \frac{1}{L C} u_C + \frac{d^2 u_C}{dt^2} = 0.$$  
   C'est l’équation différentielle vérifiée par la tension $u_C$ aux bornes du condensateur dans un circuit idéal LC série.
```

<!-- Page 42 -->

```markdown
### Remarque
On remplace la tension $u_C$ par $\frac{q}{C}$ dans l’équation différentielle et on trouve: 
$$ \frac{1}{LC} q + \frac{d^2q}{dt^2} = 0 $$ 
C'est l'équation différentielle vérifiée par la charge $q$ du condensateur dans un circuit idéal LC série.

### La solution de l’équation différentielle
On admet que la solution de l’équation différentielle vérifiée par la tension $u_C$ s'écrit sous la forme suivante : 
$$ u_C(t) = U_m \cdot \cos\left(\frac{2\pi t}{T_0} + \varphi\right) $$ 
où: 
- $U_m$: l'amplitude des oscillations en (V)
- $\varphi$: la phase à l'origine des dates en (s)
- $T_0$: la période propre des oscillations en (s)

On détermine $U_m$ et $\varphi$ en utilisant les conditions initiales. 
On a $u_C(t) = U_m \cdot \cos\left(\frac{2\pi t}{T_0} + \varphi\right)$ et $i(t) = c \frac{du_C(t)}{dt} = -\frac{2\pi U_m}{T_0} \cdot \sin\left(\frac{2\pi t}{T_0} + \varphi\right)$.

Les conditions initiales sont :
- Le condensateur est initialement chargé à l’aide d’un générateur de force électromotrice $E$ donc : $u_C(0) = E$
- La bobine résiste l’établissement du courant lors du fermeture du circuit donc : $i(0) = 0$

Alors :
$$ 
U_m \cdot \cos(\varphi) = E 
$$
$$ 
-\frac{2\pi}{T_0} U_m \cdot \sin(\varphi) = 0 
$$

Et puisque $\cos(0) = 1$ et $\cos(\pi) = -1$, on déduit que : $\varphi = 0$ et par conséquent $U_m \cos(0) = E$.

#### On détermine $T_0$ en utilisant l’équation différentielle
On a :
$$ 
u_C(t) = U_m \cdot \cos\left(\frac{2\pi t}{T_0} + \varphi\right) 
$$ 
$$ 
\frac{d^2u_C(t)}{dt^2} - \left( \frac{2\pi}{T_0} \right)^2 u_C(t) = 0 
$$ 
Et on a : 
$$ 
\frac{1}{LC} u_C + \frac{d^2u_C}{dt^2} = 0 
$$ 
Alors :
$$ 
\left( \frac{2\pi}{T_0} \right)^2 = \frac{1}{LC} $$ 
Donc : 
$$ 
T_0 = 2\pi \sqrt{LC} $$

### L’expression de la charge du condensateur
On a : $q(t) = C u_C(t)$ avec $u_C(t) = E \cdot \cos\left(\frac{2\pi t}{T_0}\right)$ 
Donc $q(t) = CE \cdot \cos\left(\frac{2\pi t}{T_0}\right)$.

Ou bien : $q(t) = Q_m \cdot \cos\left(\frac{2\pi t}{T_0}\right)$ 
Avec $Q_m$ est la charge maximale du condensateur tel que : $Q_m = CE$.

### L’expression de l’intensité du courant
On a : $i(t) = c \frac{dq}{dt}$ avec $u_C(t) = E \cdot \cos\left(\frac{2\pi t}{T_0}\right)$
Alors : 
$$ i(t) = -\frac{2\pi}{T_0} CE \cdot \sin\left(\frac{2\pi t}{T_0}\right) $$ 

Donc : 
$$ i(t) = I_m \cdot \cos\left(\frac{2\pi t}{T_0} + \frac{\pi}{2}\right) $$
Avec $I_m$ est l’intensité maximale circulant dans le circuit tel que: 
$$ I_m = CE \frac{2\pi}{T_0} = CE \frac{2\pi}{\sqrt{LC}} \quad \text{ou bien} \quad I_m = E \sqrt{\frac{C}{L}} $$ 
```

<!-- Page 43 -->

```markdown
### III Échange de l’énergie entre le condensateur et la bobine

#### 1. L’énergie dans un circuit LC

- **Définition**  
  L’énergie totale d’un circuit idéal LC série à un instant $t$ est égale à la somme de l’énergie électrique emmagasinée dans le condensateur et l’énergie magnétique emmagasinée dans la bobine à cet instant :  
  $$ E_t = E_m + E_e \quad avec \quad E_e = \frac{1}{2}C(u_c(t))^2 $$  
  et  
  $$ E_e = \frac{1}{2}L(i(t))^2 $$  
  Donc :  
  $$ E_t = \frac{1}{2}C(u_c(t))^2 + L(i(t))^2 $$

- **Montrons que l’énergie totale du circuit LC se conserve**  
  On a :  
  $$ E_t = \frac{1}{2}C(u_c(t))^2 + L(i(t))^2 $$  
  $$ \Rightarrow \frac{dE_t}{dt} = \frac{1}{2}C(u_c(t)) \frac{du_c(t)}{dt} + L\frac{di(t)}{dt} $$  
  $$ \Leftrightarrow \frac{dE_t}{dt} = C(u_c(t)) \frac{du_c(t)}{dt} + L i(t) \frac{d(u_c(t))}{dt} \quad avec \quad i(t) = c \frac{du_c(t)}{dt} $$  
  $$ \Rightarrow \frac{dE_t}{dt} = C(u_c(t)) \frac{du_c(t)}{dt} + LC \frac{d^2u_c(t)}{dt^2} $$  
  $$ \frac{dE_t}{dt} = \frac{d(i(t))}{dt} + LC \frac{d^2u_c(t)}{dt^2} $$  
  Et puisque $ u_c(t) + LC \frac{d^2u_c(t)}{dt^2} = 0 $ (l’équation différentielle)  
  Donc : $$ \frac{dE_t}{dt} = 0 $$ donc l’énergie totale du circuit LC se conserve ($E_t = Cte$).

#### 2. L’énergie dans un circuit RLC

- **Définition**  
  L’énergie totale d’un circuit idéal LC série à un instant $t$ est égale à la somme de l’énergie électrique emmagasinée dans le condensateur et l’énergie magnétique emmagasinée dans la bobine à cet instant :  
  $$ E_t = E_m + E_e \quad avec \quad E_e = \frac{1}{2}C(u_c(t))^2 $$  
  et  
  $$ E_e = \frac{1}{2}L(i(t))^2 $$  
  Donc :  
  $$ E_t = \frac{1}{2}C(u_c(t))^2 + L(i(t))^2 $$

- **Montrons que l’énergie totale du circuit LC se conserve**  
  On a :  
  $$ E_t = \frac{1}{2}C(u_c(t))^2 + L(i(t))^2 $$  
  $$ \Rightarrow \frac{dE_t}{dt} = \frac{1}{2}C(u_c(t)) \frac{du_c(t)}{dt} + L\frac{di(t)}{dt} $$  
  $$ \Leftrightarrow \frac{dE_t}{dt} = C(u_c(t)) \frac{du_c(t)}{dt} + L i(t) \frac{d(u_c(t))}{dt} \quad avec \quad i(t) = c \frac{du_c(t)}{dt} $$  
  $$ \Rightarrow \frac{dE_t}{dt} = C(u_c(t)) \frac{du_c(t)}{dt} + LC \frac{d^2u_c(t)}{dt^2} $$  
  $$ \frac{dE_t}{dt} = \frac{d(i(t))}{dt} + LC \frac{d^2u_c(t)}{dt^2} $$  
  Et puisque $ u_c(t) + LC \frac{d^2u_c(t)}{dt^2} - R i(t) \frac{du_c(t)}{dt} = 0 $ (D'après l'équation différentielle)  
  Donc :  
  $$ \frac{dE_t}{dt} = -c R \frac{du_c(t)}{dt} = -R i(t)^2 < 0 $$  
  Puisque $\frac{dE_t}{dt} < 0 $ alors l'énergie totale du circuit RLC diminue avec le temps, car elle est dissipée par effet Joule dans les résistances du circuit.
```

<!-- Page 44 -->

```markdown
# IV  Echange de l’énergie entre le condensateur et la bobine

On peut entretenir les oscillations du circuit RLC série et obtenir des oscillations périodiques d'amplitude constant, en utilisant un dispositif qui compense l'énergie dissipée par effet joule.  
Le dispositif d'entretenir est un générateur qui fournit au circuit une tension $u_g$ proportionnelle à l'intensité du courant $u_g = K \cdot i(t)$.

On considère le montage électrique schématique ci-contre.  
Le condensateur est initialement chargé et à $t = 0$ on ferme l'interrupteur $K$.  
D’après la loi d’additivité des tensions on a : $u_c + u_R + u_L = u_g$  
Donc : $u_c + Ri(t) + L \frac{d(i(t))}{dt} = K i(t)$  
Alors : $u_c + (R_T - K) \frac{d(i(t))}{dt} = 0$  
Les oscillations sont sinusoïdales si : $R_T = K$  
Donc l'équation différence devient : 
$$ u_c + LC \frac{d^2u_c}{dt^2} = 0 $$

## Exercice 1
### Répondre par vrai ou faux
- [ ] Le régime périodique est obtenu lorsque la résistance totale est grande: Faux
- [x] Les oscillations sont dites libres car la seule source d'énergie dans le circuit est celle qui est initialement stockée dans le condensateur: Vrai
- [x] Dans circuit RLC série, l'amortissement des oscillations est causé par la dissipation de l’énergie totale du circuit par les résistances: Vrai
- [ ] Pour entretenir les oscillations, on branche en série avec la bobine et le condensateur un générateur de courant délivrant une intensité constante: Faux
- [ ] Dans un circuit LC l’énergie électrique du condensateur est invariante avec le temps: Faux
- [x] Lors de l'entretien des oscillations, le générateur utilisé se comporte dans le circuit comme une résistance négative: Vrai
- [x] Pour entretenir les oscillations on doit utiliser un générateur délivrant une tension électrique $u_g = ai(t)$ : Vrai
- [x] Les oscillations obtenues sont périodiques lorsque le coefficient $a$ est égal à la résistance totale du circuit: Vrai

## Exercice 2
Pour étudier l’amortissement des oscillations dans un circuit RLC, on réalise le montage électrique schématique dans la figure ① qui est formé d'un condensateur de capacité $C$ initialement chargé, d'un conducteur ohmique de résistance $R$ et d'une bobine d'inductance $L = 70 mH$ et de résistance négligeable. À $t_0 = 0 ms$ on ferme l'interrupteur $K$ et à l’aide d’un système d’acquisition convenable on visualise l’évolution de la tension.

1. Recopier le montage expérimental utilisé, représenter sur lequel les différentes tensions électriques.
2. Quel est le régime des oscillations? Justifier la réponse.
3. À quoi doit-on l’amortissement des oscillations?
4. Déterminer le pseudo-période.
5. On suppose que la résistance du circuit est petite et n’a aucune influence sur les oscillations. Calculer la valeur de $C$.
6. Calculer l’énergie totale emmagasinée dans le circuit aux instants $t_0 = 0 ms$ et $t_1 = 50 ms$, et déduire l'énergie dissipée entre ces instants.
```

<!-- Page 45 -->

```markdown
# Exercice 3

Pour étudier l’effet de la résistance $r$ d’une bobine sur l’énergie totale d’un circuit RLC série on monte à un instant $t = 0$, un condensateur de capacité $C = 3,7 \ \mu F$ initialement chargé avec une bobine d’inductance $L$ et de résistance $r$. (la figure ⟶)
Un système d’acquisition convenable a permis de tracer les courbes énergétiques de la figure ⟶.

1. Identifier les courbes (A) et (B). Justifiez votre choix.
2. Indiquer le régime des oscillations.
3. Déterminer la valeur de la pseudo-période $T$ et déduire la valeur de l’inductance $L$.
4. Déterminer l’équation différentielle vérifiable par la charge $u_C$ aux bornes du condensateur.
5. L’énergie totale du circuit RLC à un instant $t$ est égale à la somme de l’énergie électrique stockée dans le condensateur, l’énergie mantique stockée de la bobine.

   a. Exprimer l’énergie $E_T$ en fonction: $C, L, u_C$ et $\frac{du_C}{dt}$.
   
   b. Montrer que l’énergie totale $E_T$ décroît au cours du temps.
   
   c. Calculer l’énergie dissipée entre les instants $t_1 = 10 \, ms$ et $t_2 = 25 \, ms$.

# Exercice 4

On réalise le montage électrique ci-dessous. Une fois le condensateur est totalement chargé, on bascule l’interrupteur $K$ en position $(2)$ à un instant $t = 0$. La courbe ci-dessous représente la variation de la charge du condensateur en fonction du temps.
La droite $(D)$ est la tangente à la courbe $q = f(t)$ à l’instant $t_1 = 5 \times 10^{-3}$.

1. Déterminer l’équation différentielle vérifiée par la charge $q(t)$ du condensateur.
2. Quel est le régime des oscillations.
3. En exploitant la courbe $q = f(t)$ déterminer la valeur de la capacité $C$ du condensateur, et celle de l’inductance $L$ de la bobine.
4. Calculer la valeur de l’intensité du courant qui traverse le circuit à l’instant $t_1 = 5 \times 10^{-3} \ s$.
5. Calculer la variation de l’énergie totale entre les instants $t_1 = 5 \times 10^{-3} \ s$ et $t_2 = 1,2 \times 10^{-3} \ s$. Expliquer le résultat.
```

<!-- Page 46 -->

```markdown
# Exercice 5

Pour étudier les oscillations libre nom amorties dans un circuit LC, on considère le montage électrique schématisé dans la figure ① qui constitue d’un condensateur de capacité $C = 5\,\mu F$ initialement chargé et d’une une bobine idéale d'inductance $L$.  
La figure ② représente l’évolution de la tension $u_C$ aux bornes du condensateur en fonction du temps.

1. Indiquer le régime des oscillations.
2. Déterminer l’équation différentielle vérifiée par la tension $u_C(t)$.
3. La solution de l’équation différentielle est : $u_C(t) = U \cos \left( \frac{2\pi}{T_0} t + \varphi \right)$. Trouver l’expression de la période propre $T_0$ en fonction de $C$ et $L$.
4. Par analyse dimensionnelle montrer que $T_0$ a une dimension du temps.
5. Trouver l’expression de l’intensité du courant $i(t)$, celle de sa dérivé $y(t) = \frac{di(t)}{dt}$.

6. En exploitant la courbe de la figure déterminer:
   - a. La valeur de la période $T_0$.
   - b. La valeur de l'amplitude $U$ des oscillations.
   - c. La valeur de la phase $\varphi$.
   - d. La valeur de la tension $u_A$ à l’instant $t_1 = 2\,ms$.

7. Calculer la valeur $y(t_1)$, et déduire la valeur de l’inductance $L$ de la bobine.
8. On définit l’énergie total du circuit $LC$ à un instant $t$ par la relation: $E_T = E_e + E_m$ où $E_e$ est l’énergie électrique stockée dans le condensateur et $E_m$ est l’énergie magnétique stockée dans la bobine à cet instant.
   - a. Exprimer l’énergie totale $E_T$ en fonction de $C$, $L$, $u_C(t)$ et $\frac{du_C(t)}{dt}$.
   - b. Montrer que l’énergie totale $E_T$ se conserve.
   - c. Calculer la valeur de l’énergie totale $E_T$ du circuit.
   - d. Calculer l’énergie magnétique stockée dans la bobine à l’instant $t_2 = 2\,8ms$.
9. Déterminer l’instant $t_3$ auquel l’énergie stockée dans le condensateur est le triple de celle stockée dans la bobine pour la première fois.

# Exercice 6

L’oscillateur électrique idéal représenté dans la figure ① est constitué d’une bobine idéale d'inductance $L$ et d’un condensateur de capacité $C$ initialement chargé à l’aide d’un générateur de tension de de f.e.m. $E = 20\,V$. À un instant $t = 0$, on ferme l'interrupteur $K$ et par un système d’acquisition approprié on obtient les courbes de la figure ② représentant les différents d’énergie associées à cet oscillateur.
```

<!-- Page 47 -->

```markdown
### Indiquer le régime des oscillations.  
- Attribuer à chaque courbe l'énergie correspondante. Justifier votre choix.  
- En se basant sur une étude énergétique, déterminer l'équation différentielle vérifiée par la charge $q(t)$ du condensateur.  
- En exploitant la figure ➁ déterminer la valeur de la période propre $T_0$ et celle de la capacité $C$ du condensateur. Déduire la valeur de l'inductance $L$ de la bobine.  

## Exercice 7  
On charge totalement un condensateur de capacité $C = 16 \mu F$ sous une tension $U$ puis on le monte en série avec un conducteur ohmique de résistance $R$ et une bobine idéale d'inductance $L$. Voir la figure ①  
1. Déterminer l’équation différentielle vérifiée par la tension $u_L$.  
2. La courbe de la figure ➁ représente les variations de la tension $u_L$ au cours du temps. En exploitant ce courbe déterminer la pseudo-période $T$.  
3. Calculons la valeur de l’inductance $L$ de la bobine.  
4. Calculer $E_1$ l’énergie dissipée entre les instants $t_0 = 0s$ et $t_1 = 0,03s$  
5. On monte en série avec les composants du circuit de la figure ①, un générateur $G$ délivrant une tension proportionnelle avec l’intensité du courant $u_G = k i(t)$, et on obtient des oscillations sinusoïdales lorsque $k = 10 \, A$.  
   a. Quel est le rôle du générateur $G$.  
   b. Déterminer la valeur de la résistance $R$ compense l’énergie.  

## Exercice 8  
On considère l’oscillateur électrique libre et entretenu schématisé dans la figure ① et qui comporte :  
- Un générateur délivrant une tension $u_G = a.i(t)$  
- Une bobine de résistance $r$ et d'inductance $L$.  
- Un condensateur de capacité $C$.  
- Un conducteur ohmique de résistance $R = 50 \, \Omega$  
- Un interrupteur $K$.  

Après avoir chargé le condensateur sous une tension $U = 12V$, on ferme l’interrupteur $K$ à un instant $t = 0$, et à l’aide d’un système d’acquisition conventionnel, on obtient la courbe de la figure ➁ qui représente les variations de l’intensité du courant $i(t)$ circulant dans le circuit en fonction du temps.  
1. Écrire l’équation différentielle vérifiée par la charge $q(t)$ du condensateur.  
2. La solution de l’équation différentielle est :  
   $$ q(t) = q_m \cos \left( \frac{2\pi}{T_0} t + \varphi \right) $$  
   Trouver l’expression de l’intensité du courant $i(t)$ en fonction de $q_m$, $T_0$, $\varphi$ et $t$.  
3. En exploitant la courbe de la figure ➁ :  
   a. Indiquer le régime observé.  
   b. Déterminer les valeurs de $q_m$, $T_0$ et $\varphi$.  
4. Calculer la valeur de la capacité $C$.  
5. Calculer la valeur de l'inductance $L$ et celle de sa résistance $r$.  
6. On donne $E_T = 0,6 \, (SI)$.  

ÉLECTRON & 2BAC-PC & Électricité  
47
```

<!-- Page 48 -->

```markdown
# Exercice 9
Pour étudier les oscillations électriques entretiens, on monte en série une bobine idéale d’inductance $L$, un conducteur ohmique de résistance $R$, un condensateur de capacité $C = 20 \mu F$ initialement chargé sous une tension $U$, et un générateur électrique délivrant une tension électrique $u_G = \lambda i(t)$ où $\lambda$ est une constante positive.

On ferme l’interrupteur $K$ à un instant $t = 0$, et à l’aide d’un système d’acquisition convenable, on obtient la courbe représentant variations de la tension $u_C = f(t)$, celle représentant les variations de la tension $u_C = h(t)$.

1. Schématise le montage électrique utilisé.
2. Attribuer à chaque courbe la tension correspondante.
3. En exploitant les courbes de la figure ci-contre déterminer la valeur de la période propre $T_0$ et celle de la tension $U$.
4. Déterminer l’équation différentielle vérifier par la tension $u_C$ aux bornes du condensateur.
5. La solution de l’équation différentielle est : $u_C(t) = U \cos\left(\frac{2\pi}{T_0} t\right)$.

   a. Montrer que l’expression de l’intensité du courant circulant dans le circuit est : $i(t) = I_0 \cos\left(\frac{2\pi}{T_0} t + \frac{\pi}{2}\right)$.
   
   b. Calculer la valeur de la constante $\lambda$ et celle de l’inductance $L$ de la bobine.

# Exercice 10
On charge totalement un condensateur de capacité $C = 12 \mu F$ et on le monte aux bornes d’une (b) à un instant $t = 0$ voir la figure 1.  
Un système d’acquisition permettant d’obtenir la courbe d’évolution de la tension $u_C$ aux bornes du condensateur ( la figure 2 )

1. Quel est le régime d’oscillations observé ?
2. En exploitant la courbe de la figure 1 déterminer :
   a. La valeur de la résistance interne de la bobine.
   b. La valeur de la $T_0$ période propre et déduire la valeur de l’inductance $L$.
3. En se basant sur une étude énergétique, déterminer l’équation différentielle vérifiée par la tension $u_C$ aux bornes du condensateur.
4. Déterminer l’expression numérique de la tension $u_C$.

# Exercice 11
On considère l’oscillateur électrique schématisé dans la figure 1 et qui contient un condensateur de capacité initialement chargé $C = 10 \mu F$, une bobine d’inductance $L$ et de résistance interne $r$ et un générateur électrique délivrant une tension $u_G = a.i(t)$ avec $a = 82$.

Un système d’acquisition convenable permettant d’obtenir la courbe d’évolution de la tension $\frac{d^2u_C}{dt^2}$ aux bornes du condensateur ( la figure 2 )
```

<!-- Page 49 -->

```markdown
1. Déterminer l’équation différentielle vérifiée par la tension $u_c$

   En exploitant la courbe de la figure ➀ déterminer:
   a. La valeur de la résistance interne de la bobine.
   b. La valeur de l’inductance $L$ de la bobine
   c. Calculer la valeur de la $T_0$ période propre.
   d. Calculer l’énergie totale emmagasinée dans ce circuit.

## Exercise 12

Le condensateur et la bobine changent l’énergie lorsqu’ils sont tous deux.  
Cet exercice sert à étudier les oscillations électriques libres et non amorties pour cela on réalise le montage électrique de la figure  A qui est constitué par :
- Un générateur idéal de tension de f.e.m. $E$
- Un condensateur de capacité $C$
- Bobine idéale d'inductance $L$
- Un interruptuer de doubles positions

Lorsque le régime permanent est atteint, on bascule l’interrupteur $K$ en position ➁ à un instant $t = 0$.
À l’aide d’un système d’acquisition adéquat on obtient la courbe de la figure $B$ qui représente l’évolution de la tension $u_c$ en fonction du temps, celle de la figure qui représente les variations de l’énergie magnétique stockée dans la bobine au cours du temps.

4. $u_c(V)$

   Indiquer le régime observé.
   
5. Déterminer l’équation différentielle vérifiée par la tension $u_c$.
   
6. La solution de l’équation différentielle est : $u_c(t) = U_m \cos(2 \pi f_0 t)$. Trouver l’expression de la fréquence propre $f_0$.

7. En exploitant la courbe de la figure $B$, déterminer : atteint ha
   a. La valeur de la force électromotrice du générateur
   b. La valeur de la fréquence propre des oscillations
   
8. L’énergie $E_m$ stockée dans la bobine à un instant t est : $E_m = \frac{C E^2}{4} (1 - \cos(4 \pi f_0 t))$ . (rappel : $\sin^2(x) = \frac{1 - \cos(2x)}{2}$).
   
   a. Montrer que $E_m = \frac{C E^2}{4} (1 - \cos(4 \pi f_0 t))$.
   
   b. Déduire l’expression de l’énergie maximale $E_{m,max}$ en fonction de $C$ et $E$.

9. En exploitant la courbe de la figure $C$. Déterminer la valeur de l’énergie maximale $E_{m}$ emmagasinée dans la bobine.

10. Calculer la valeur de la capacité $C$ du condensateur.

11. Calculer la valeur de l’inductance $L$ de la bobine.

12. L’énergie magnétique emmagasinée dans la bobine prend: $E_{m1} = 25\% E_{m,max}$ pour la première fois à un instant $t_1$.
   
   a. Trouver l’expression de la date $t_1$ en fonction de $T_0$ puis calculer sa valeur.
   
   b. Exprimer $E_{C1}$ l’énergie électrique emmagasinée dans le condensateur à l’instant $t_1$ puis calculer sa valeur.
```

<!-- Page 50 -->

```markdown
## Exercice 13

Cet exercice sert à étudier l'effet de la résistance sur les oscillations dans un circuit RLC série. Pour cela on charge un condensateur de capacité $C = 48 \mu F$, et on le monte en série dans un circuit contenant un conducteur ohmique de résistance $R$ et une bobine idéale d'inductance $L$. (la figure①)

À un instant $t = 0$ on ferme l'interrupteur $K$ et par un système d'acquisition convenable on visualise les variations de la tension aux bornes du condensateur en fonction du temps (la figure②).

1. Indiquer le régime des oscillations.
2. Montrer que l'équation différentielle vérifiée la tension $u_c$ aux bornes du condensateur est:
   $$ \frac{d^2u_c}{dt^2} + 2\alpha \frac{du_c}{dt} + \beta u_c = 0 $$
   en déterminant les expressions $\alpha$ et $\beta$ en fonction de $R$, $L$ et $C$.
   
   La solution de cette équation différentielle est: 
   $$ u_c(t) = Ae^{-\lambda t} \cos\left(\frac{2 \pi}{T} t + \phi \right) $$

   a. Pour $t \geq 0$. Exprimer le rapport: 
   $$ \frac{u_c(t+T)}{u_c(t)} $$ 
   en fonction de $T$ et $\lambda$.
   
   b. Déterminer la valeur de le pseudopériode $T$ puis calculer la valeur de $\lambda$.
   
   c. En exploitant la courbe de la figure② et les conditions initiales déterminer la valeur de l'amplitude $A$ et celle de la phase initiale $\phi$.

3. Exprimer l'intensité du courant $i(t)$ circulant dans le circuit en fonction du temps $t$ et calculer sa valeur à l’instant $t_1 = 36ms$ ainsi qu’à l’instant $t_2 = 69ms$.

4. Calculer la variation de l'énergie magnétique emmagasinée dans la bobine entre les instants $t_1$ et $t_2$.

5. Calculer la variation de l'énergie électrique emmagasinée dans le condensateur entre les instants $t_1$ et $t_2$.

6. Déduire la variation de l'énergie électrique totale circuit entre les instants $t_1$ et $t_2$. Explique le résultat.

## Exercice 14

On considère l'oscillateur électrique schématisé dans la figure ci-contre et qui comporte :
- Un générateur idéal de tension de e.f.m. $E = 12V$
- Deux condensateurs de capacités $C_1$ et $C_2$
- Bobine d'inductance $L$ et de résistance $r$
- Un conducteur ohmique de résistance $R$
- Un interrupteur de doubles positions

### I-Charge des deux condensateurs

À un instant $t = 0$ on pose l'interrupteur en $\circ$ et par un système d'acquisition convenable on obtient la courbe de la figure (A) qui représente l’évolution de la charge électrique traversant une section du circuit en fonction du temps.

1. Montrer que l'équation différentielle vérifiée par charge électrique traversant le circuit est:
   $$ q(t) + \frac{1}{R} \frac{dq(t)}{dt} = 0 $$
   en précisant l’expression de $R$ et en fonction de $R$, $C_1$ et $C_2$.

2. En exploitant la courbe (A) déterminer :
   a. La valeur de la constante du temps du dipôle $RC$.
   
   b. La valeur de charge électrique traversant le circuit en régime permanent.

3. Calculer les valeurs des capacités $C_1$ et $C_2$ sachant que : $C_1 = 3C_2$.
```

<!-- Page 51 -->

```markdown
# Exercice 1

Répondre par vrai ou faux
- Le régime périodique est obtenu lorsque la résistance totale est grande: Faux
- Les oscillations sont dites libres car la seule source d'énergie dans le circuit est celle qui est initialement stockée dans le condensateur: Vrai
- Dans circuit RLC série, l'amortissement des oscillations est causé par la dissipation de l'énergie totale du circuit par les résistances: Vrai
- Pour entretenir les oscillations, on branche en série avec la bobine et le condensateur un générateur de courant délivrant une intensité constante: Faux
- Dans un circuit LC l'énergie électrique du condensateur est invariante avec le temps: Faux
- Lors de l'entretien des oscillations, le générateur utilisé se comporte dans le circuit comme une résistance négative: Vrai
- Pour entretenir les oscillations on doit utiliser un générateur délivrant une tension électrique $u_G = ai(t)$: Vrai
- Les oscillations obtenues sont périodiques lorsque le coefficient $a$ est égal à la résistance totale du circuit: Vrai

# Exercice 2

1. On représente la tension aux bornes de chaque dipôle par une flèche de sens opposé à celui du courant qui traverse le circuit. 
   Voir la représentation des tensions $u_C$, $u_C$ et $u_C$ dans la figure ci-dessous.

![Circuit RLC](circuit_image_placeholder)

2. L'énergie des oscillations est pseudopériodique car l'amplitude de la tension décroît avec le temps.
3. L'amortissement des oscillations est dû à la dissipation de l'énergie stockée dans le circuit RLC par la résistance $R$ (effet Joule).
4. D'après la courbe de la figure (⟳), on a: $T = 10 \, \text{ms}$
5. Puisque la résistance est faible, donc $T_0 \approx T$
   $$ 
   2\pi\sqrt{LC} = T 
   $$
   Donc: 
   $$ 
   LC = \frac{T^2}{4\pi^2} 
   $$
   D'où : 
   $$ 
   C = \frac{T^2}{4\pi^2 L} 
   $$
   A.N.: $C = \frac{2\pi^2 L}{(10 \times 10^{-3})^2} = 3.62 \times 10^{-5} \, F$

6. Calculons l'énergie stockée dans le circuit à l’instant $t_0 = 0$:
   $$ 
   E_0 = E_C + E_m 
   $$
```

<!-- Page 52 -->

```markdown
# Exercice 2

Donc: 
$$ E_r(0) = \frac{1}{2} Cu^2(0) + \frac{1}{2} Li^2(0) \text{ avec } i(0) = 0 $$
D'où:
$$ E_r(0) = \frac{1}{2} Cu^2(0) $$

A.N. $E_r(0) = \frac{1}{2} \times 3,62 \times 10^{-5} \times 82$  
On trouve: $E_r(0) = 1,16 \times 10^{-3}$  

Calculons $E_r(t_1)$
On a: 
$$ E_r(t_1) = \frac{1}{2} Cu^2(t_1) + \frac{1}{2} Li^2(t_1) \text{ avec } i(t_1) = 0 $$
D'où: 
$$ E_r(t_1) = \frac{1}{2} Cu^2(t_1) $$  

On trouve: $E_r(t_1) = \frac{1}{2} \times 3,62 \times 10^{-5} \times 32$  

On trouve: $E_r(t_1) = 1,63 \times 10^{-4}$  

Calculons l’énergie dissipée dans le circuit entre les instants $t_0$ et $t_1$
On a: 
$$ E_j = E_r(t_1) - E_r(t_0) $$  
Donc: 
$$ E_j = 1,16 \times 10^{-3} - 1,63 \times 10^{-4} $$  
On trouve: $E_j = 9,97 \times 10^{-4} \text{ J}$  

# Exercice 3

Le condensateur est initialement chargé, donc $E_c(0) \neq 0$.  
Alors la courbe (B) représente les variations de l'énergie électrique $E_e$ stockée dans le condensateur en fonction du temps, $t$.  
D'où la courbe (A) représente les variations de l'énergie magnétique stockée dans la bobine en fonction du temps.  

Puisque l'amplitude de l'énergie $E_e$ décroît avec le temps, donc le régime d'oscillations est pseudo-périodique.  

D'après la figure (2) on a: $T = 20 ms$  
Déterminons l'équation différentielle vérifiée par la tension $u_c(t)$.  
D'après la loi d'additivité des tensions on a: 
$$ u_c + u_L = 0 \text{ avec } u_L = L \frac{di}{dt} \text{ et } i(t) = C \frac{duc}{dt} $$  
D'où:
$$ u_c + rC \frac{duc}{dt} + LC \left( \frac{d^2 u_c}{dt^2} \right) = 0 $$  

### a - Trouvons l'expression de $E_r$.

On sait que $E_r = E_e + E_m \text{ avec } E_e = \frac{1}{2} Cu^2$  
Donc: 
$$ E_r = \frac{1}{2} Cu^2 + \frac{1}{2} Li^2 \text{ avec } i = C \frac{duc}{dt} $$  

### b - Montrons que l'énergie du circuit décroît avec le temps.

On a: 
$$ E_r = \frac{1}{2} Cu^2 + \frac{1}{2} LC \left( \frac{duc}{dt} \right)^2 $$  
Donc:
$$ \frac{dE_r}{dt} = \frac{1}{2} C \frac{du_c}{dt} \frac{du_c}{dt} + \frac{1}{2} L \cdot 2C \frac{du_c}{dt} \frac{d^2u_c}{dt^2} $$  
Alors: 
$$ \frac{dE_r}{dt} = C \frac{du_c}{dt} \left( u_c + L \frac{d^2 u_c}{dt^2} \right) (a) $$  
Et on a l’équation différentielle vérifiée par la tension $u_c$: 
$$ u_c + rC \frac{d uc}{dt} + LC \frac{d^2u_c}{dt^2} = 0 $$  
Donc:
$$ u_c + L \frac{d^2 u_c}{dt^2} = -rC \frac{d u_c}{dt} (b) $$  
On remplace (b) dans (a):
$$ \frac{dE_r}{dt} = C \frac{du_c}{dt} \left( - rC \frac{du_c}{dt} \right) $$  
Donc:
$$ \frac{dE_r}{dt} < 0 $$  
On déduit que l'énergie totale du circuit RLC décroît avec le temps.  

### c - Calculons l'énergie dissipée dans le circuit entre les instants $t_1$ et $t_2$.  
On a: 
$$ E_j = E_r(t_1) - E_r(t_2) $$  
On a: 
$$ E_j = E_r(t_1) + E_m(t_1) - E_e(t_2) - E_m(t_2) $$  
A.N: $E_j = 0,92 + 0,56$  
On trouve: $E_j = 0,36 \text{ mJ}$  

# Exercice 4

Déterminons l'équation différentielle vérifiée par la charge $q(t)$.  
D'après la loi d'additivité des tensions on a:
$$ u_c + u_r + u_L = 0 \text{ avec } u_c = \frac{q}{C} \text{ et } u_L = R(i(t)) $$  
Donc: 
$$ \frac{1}{C} \cdot \frac{dq}{dt} + R(i(t)) + L \frac{d^2q}{dt^2} = 0 \text{ avec } i(t) = \frac{dq}{dt} $$  

Alors: 
$$ \frac{1}{C} + (R + r) \cdot \frac{dq}{dt} + L C \frac{d^2q}{dt^2} = 0 $$  

D'où: 
$$ \ddot{q} + (R + r) C \frac{d^2q}{dt^2} = 0 $$  
Le régime d'oscillation est pseudo-périodique.  

D'après la courbe a, on a: 
$$ a_{max} = 120 \mu C \text{ et } T = 6 \times 10^{-3}$$  
Calculons la valeur de C.  
On a: 
$$ a_{max} = CE $$  
Donc: 
$$ C = \frac{a_{max}}{E} \text{ A.N: } C = \frac{120 \times 10^{-6}}{12} = 1 \times 10^{-5} F $$  

Calculons la valeur de L.  
Les oscillations sont faibles, donc $T \approx T_0$.  
On a: 
$$ T = 2\pi \sqrt{L C} \text{ Donc: } T^2 = 4\pi^2 LC $$  
D'où: 
$$ L = \frac{T^2}{4\pi^2 C} \text{ A.N: } L = \frac{(6 \times 10^{-3})^2}{4\pi^2 \times 1 \times 10^{-5}} $$  
On trouve: $L = 9,11 \times 10^{-5} H$
```

<!-- Page 53 -->

```
# Calculons $i(t_1)$.
On sait que : $i(t) = \frac{dql}{dt} = a_1$ où $a_1$ est le coefficient de la tangente à la courbe $q = f(t)$ à l’instant $t_1$.
Donc : $i(t_1) = a_1 = 5 \times 10^{-6} (0.005-0.006)$

# Calculs de $\Delta E_R$ entre $t_1$ et $t_2$ 
- $Calcul de la valeur de $E_R(t_1)$
On a : $E_R(t_1) = \frac{E_c}{1}$ 
Donc : $E_R(t_1) = \frac{1}{2}C u^2(t_1) + \frac{1}{2} L i^2(t_1)$
A.N. : $E_R(t_1) = \frac{14 \times 10^{-6}}{2} + \frac{1}{2} \times 9.11 \times 10^{-31} \times (5 \times 10^{-2})^2$
On trouve : $E_R(t_1) = 1.35 \times 10^{-3} \ J$
- $Calcul de la valeur de $E_R(t_2)$

On a : $E_R(t_2) = \frac{1}{2}C u^2(t_2) + \frac{1}{2} L i^2(t_2)$
A.N. : $E_R(t_2) = \frac{1}{2} \times \frac{80 \times 10^{-6}}{2} + \frac{1}{2} c$
Donc : $E_R(t_2) = \frac{1}{2} \times \frac{80 \times 10^{-6}}{2} = 3.2 \times 10^{-4} \ J$

- $Calcul de \Delta E_R$ entre $t_1$ et $t_2$ 
On a : $\Delta E_R = E_R(t_2)-E_R(t_1)$
A.N. : $\Delta E_R = 3.2 \times 10^{-4} - 1.35 \times 10^{-3}$
On trouve : $\Delta E_R = -1.03 \times 10^{-3} \ J$
On constate que $\Delta E_R < 0$, car l’énergie $E_R$ décroît avec le temps (dissipation de l’énergie par l'effet de joule dans les résistances du circuit).

# Exercice 5
1. Le régime d'oscillations est périodique, car l'amplitude de la tension reste constante dans le temps.
Déterminons l'équation différentielle vérifiée par la tension $u_c$.
D’après la loi d'additivité des tensions,
on a : $u_c + u_L = 0$ avec $u_L = L \frac{di}{dt}$ et $i = c \frac{du_c}{dt}$.
Donc : $u_c + LC \frac{d^2u_c}{dt^2} = 0$

2. Trouvons l’expression de $T_0$.
On a : $u_c(t) = U_m \cos\left(\frac{2 \pi t}{T_0} + \phi \right)$

$$\frac{du_c(t)}{dt} = -\frac{2 \pi}{T_0} U_m \sin\left(\frac{2 \pi t}{T_0} + \phi \right)$$

$$\frac{d^2u_c(t)}{dt^2} = -\left(\frac{2 \pi}{T_0}\right)^2 U_m \cos\left(\frac{2 \pi t}{T_0} + \phi\right)$$

Donc : 
$$\frac{d^2u_c(t)}{dt^2} = -\left(\frac{2 \pi}{T_0}\right)^2 u_c(t) = 0$$

Et on a : 
$$\frac{1}{LC}\left(\frac{2 \pi}{T_0}\right)^2 = 0 \Rightarrow T_0 = 2 \pi \sqrt{LC}$$

3. Montrons que $T_0$ a une dimension de temps
On a : $T_0 = 2 \pi \sqrt{LC}$
D'où : $[T_0] = (L[C])^{1/2} \ (a)$
Et on a : $u_c = C \frac{di}{dt}$
Donc : $[U] = [L][I][T]$

Alors : $[L] = [L]$
(b) 
Et on a : $[I] = [C] = c\ \frac{dt}{du_c}$ alors : $[I] = [L][T]$

On remplace (b) et (c) dans (a), on trouve :
$$[T_0] = \left[\frac{[I]}{[I]} \times [C] \right]^{1/2}$$
Alors : $[T_0] = [T]^2 \Rightarrow [T_0] = [T]$

4. Trouvons les expressions de $i(t)$ et $y(t)$
a. On a : $i(t) = c \frac{du_c}{dt} = u_c = U_m \cos\left(\frac{2 \pi t}{T_0} + \phi \right)$
Donc : $i(t) = -\frac{2 \pi}{T_0} U_m \sin\left(\frac{2 \pi t}{T_0} + \phi \right)$

b. En étudiant la tension $u_c$, on a :
$$y(t) = \frac{d i(t)}{dt}$$
Donc : $y(t) = \left(-\frac{2 \pi}{T_0}\right)^2 C U_m \cos\left(\frac{2 \pi t}{T_0} + \phi\right)$

Alors : $y(t) = -y_m \cos\left(\frac{2 \pi t}{T_0} + \phi\right)$ avec $y_m = \left(\frac{2 \pi}{T_0}\right)^2 C U_m$

a. D'après le cours, on a : $T_0 = 4 \ ms$
b. D'après le cours, on a : $U_m = 24 \ V$
c. D'après le cours, on a : $u_c(0) = 24 \ V$
Et on a : $u_c(t_1) = -24 \ V$
Alors : $u_c(t_1) = 24 \ V$

5. Calculons la valeur de $y(t_1)$ et de $L$
On a : $y(t_1) = \left(-\frac{2 \pi}{T_0}\right)^2 C U_m \cos\left(\frac{2 \pi t_1}{T_0}\right)$
A.N. : $y(t_1) = \left(-\frac{2 \pi}{4 \times 10^{-3}}\right)^2 \times 5 \times 10^{-6} \times 24 \cos\left(\frac{2 \pi}{4 \times 10^{-3}} \times 2\right)$
On trouve : $y(t_1) = -2.96 \times 10^{-2} \ A^{-1}$

Et on a : $u_L(t_1) = L \frac{di(t)}{dt} \Rightarrow L = \frac{u_L(t_1)}{y(t_1)}$
A.N. : $L = \frac{24}{2.96 \times 10^{2}} = 8.1 \times 10^{-2} \ H$

a. $-\ $ Trouvons l’expression de $E_r$.
On a : $E_r = E_e + E_m avec E_e = \frac{1}{2}C u^2_c et E_m = \frac{1}{2} L i^2$
Donc : 
$$E_r = \frac{1}{2} C u_c^2 + \frac{1}{2} L i^2$$
avec : $i = c \ \frac{du_c}{dt}.$

b. Montrons que l’énergie du circuit se conserve.
On a : $E_r = \frac{1}{2}C u^2_c + \frac{1}{2}L \left(\frac{du_c}{dt}\right)^2$
Donc : $$\frac{dE_r}{dt} = 2 \cdot \frac{1}{2} u_c \cdot \frac{d u_c}{dt} + \frac{1}{2} L \cdot \frac{d u_c}{dt} \cdot \frac{d^2 u_c}{dt^2}$$

On remplace (b) dans (a), on trouve : $\frac{dE_r}{dt} = 0$ 
On déduit que l’énergie totale du circuit $LC$ se conserve.
```

<!-- Page 54 -->

```markdown
# Exercice 6
1. Régime périodique.
2. Identifications des courbes (A), (B) et (C) :
   - La courbe (A) représente l'énergie totale du circuit, car elle est constante.
   - Le condensateur est initialement chargé, donc $E_c(t) > 0$; alors la courbe correspondante est (B).
   - D'où la courbe (C) représente l'énergie magnétique emmagasinée dans la bobine.

3. Déterminons l'équation différentielle vérifiée par la charge $q(t)$.
   On sait que: 
   $$E_T = E_e + E_m$$
   Alors: 
   $$E_T = \frac{1}{2c} q^2(t) + \frac{1}{2} L i(t)^2$$
   On a: 
   $$\frac{dE_T}{dt} = \frac{1}{c} 2q(t) \frac{dq}{dt} + 2Li(t) \frac{di(t)}{dt}$$
   Donc:
   $$\frac{dE_T}{dt} = \frac{1}{c} q + L \frac{d^2q}{dt^2} = 0$$
   $\Leftrightarrow \frac{1}{c} q + L \frac{d^2q}{dt^2} = 0 \Rightarrow q + LC \frac{d^2q}{dt^2} = 0$

   D'après la courbe, on a : $E_e(0) = 8 \, mJ$ et $T_0 = 5 \, ms$.
   - Calculons la valeur de $C$ :
     - On a: $E_e(0) = \frac{1}{2} C u_c^2(0)$ avec $u_c(0) = E$.
     - Alors: $E_e(0) = \frac{1}{2} C E^2$.
     - D'où: 
     $$C = \frac{2 E_e(0)}{E^2} = \frac{2 \times 8 \times 10^{-3}}{(20)^2} = 4 \times 10^{-5} F$$
   - Calculons la valeur de $L$ :
     - On a: $T_0 = 2\pi \sqrt{LC}$
     - Donc: $T_0^2 = 4\pi^2 LC$.
     - Alors: 
     $$L = \frac{T_0^2}{4\pi^2 C^2} = \frac{(5 \times 10^{-3})^2}{4\pi^2 \times (4 \times 10^{-5})^2} = 1.58 \times 10^{-2} H$$

# Exercice 7
1. Déterminons l'équation différentielle vérifiée par la tension $u_l$.
   D'après la loi d'additivité des tensions, on a : 
   $$u_l + u_r + u_c = 0$$
   $\Leftrightarrow u_r + R i(t) + u_c = 0$

   D'où :
   $$\frac{d u_l}{dt} + R \frac{di(t)}{dt} + L \frac{d u_c}{dt} = 0$$
   $\Leftrightarrow L \frac{d u_l}{dt} + R \frac{di(t)}{dt} + L \frac{d u_c}{dt} = 0$ avec $u_r = L \frac{di(t)}{dt}$.

   Donc : 
   $$L C \frac{d^2 u_l}{dt^2} + R C \frac{d u_l}{dt} + L C \frac{d u_c}{dt} = 0$$
   $$LC \frac{d^2 u_l}{dt^2} + RC \frac{d u_l}{dt} + u_l = 0$$

   D'après la courbe, on a : $T = 2 \times 10^{-2} s$.
   - Calculons la valeur de $L$ :
     - On a : $T = 2\pi \sqrt{LC}$
     - Donc: 
     $$T = 2 \Rightarrow L = \frac{T^2}{4\pi^2 C} = \frac{\pi^2}{4 \times 2 \times 10^{-2}}$$
   - D'où: 
   $$ L = \frac{L = \frac{2\pi^2}{4 \times 2 \times 10^{-2}} = 0.63 H$$

2. Calculons les valeurs de $E_j$ :
   - On a : $E_j = E_T(0) - E_T(t_1)$
   - A.N.: $E_j: 1.28 \times 10^{-4} - 7.2 \times 10^{-5}$
   - On trouve: 
   $$E_j = 5.6 \times 10^{-5}$$

3. a - Le générateur compense l'énergie dissipée par effet de Joule dans la résistance $R$.
   b - Puisque les oscillations sont devenues périodiques, donc $K = R = 10 \Omega$.

```


<!-- Page 55 -->

```markdown
# Exercise 8

1. Déterminons l'équation différentielle vérifiée par \( q(t) \).
   D'après la loi d'additivité des tensions, on a :
   $$ u_c + u_R + u_L = 0 \quad \text{avec } u_R = Ri(t) $$
   et 
   $$ u_L = L \frac{d(i(t))}{dt} $$
   \Rightarrow $ \frac{q}{R + r} + (R + r) \frac{d(i(t))}{dt} + ri(t) = 0 $
   Alors : 
   $$ \frac{1}{(R + r)} + L \frac{d^2q}{dt^2} = 0 $$
   D'où: \( q + (R + r) \frac{dq}{dt} + LC \frac{d^2q}{dt^2} = 0 \)

2. Trouvons l'expression de \( i(t) \).
   On a : \( i(t) = -\frac{dq}{dt} \)

   a - Le régime est pseudopériodique.  
   b - D'après la courbe, on trouve: \( I_m = 120 \, mA \) et \( T_0 = 20 \, ms \)
   - Calculons \( \varphi \)
     On a : \( i(0) = \frac{2\pi}{T_0} q_m \sin(\varphi) = 0 \)
     Alors: \( \sin(\varphi) = 0 \)
     D'où: \( \varphi = 0 \, ou \, \pi \)
     Et on a: \( q(0) = q_m \cos(\varphi) > 0 \)
     Donc: \( \cos(\varphi) > 0 \)
     Donc: \( \varphi = 0 \)

   - Calculons: \( q_m \)
     \( I_m = \frac{I_m}{T_0} q_m \)
     Donc: 
     $$ q_m = \frac{I_m T_0}{2\pi} = \frac{120 \times 10^{-3} \times 20 \times 10^{-3}}{2\pi} $$
     Ainsi: 
     $$ q_m = 3.82 \times 10^{-4} \, C $$
     On trouve: \( q_m = 3.82 \times 10^{-4} \, C \)

3. Calculons la valeur de \( C \).
   On a : \( q(0) = C u_c(0) \)
   Alors: \( u_{c} = C \cdot u_{c}(0) \) avec \( u_{c}(0) = E \)
   D'où: 
   $$ C = \frac{u_c(0)}{E} $$
   On a: \( 3.82 \times 10^{-4} = 3.18 \times 10^{-5} \, F \)

4. Calcul de la valeur de \( L \).
   On sait que: \( T_0 = 2\pi \sqrt{L C} \)
   Donc: 
   $$ L = \frac{T_0^2}{4\pi^2 C} $$ 
   A.N.: \( L = \frac{(20 \times 10^{-3})^2}{4 \times 2^2} \approx 0.32 \, H \)

   Calculons la valeur de \( r \).
   Puisque les oscillations sont périodiques :
   On a : \( a = R + r \)
   Alors: \( a = r + R \)
   Donc: \( r = a - R \)
   A.N.: \( r = 60 - 50 = 10 \, \Omega \)

5. Calcul de la valeur de \( E_f(t) \).
   On a : \( E_f = E_f(0) \)
   Donc: \( E_T = E_f(0) \)
   Donc: \( E_T = \frac{1}{2} Cu^2 \)
   A.N.: \( E_T = \frac{1}{2} \times 3.18 \times 10^{-5} \times (12)^2 \)
   On trouve: \( E_T = 2.29 \times 10^{-3} \)

# Exercise 9

1. Alors l’équation différentielle devient:
   $$ u_c + L \frac{d^2u_c}{dt^2} = 0 $$

   a - Montrons que \( i(t) = I \cos\left(\frac{2\pi}{T_0} t + \varphi\right) \).
   On a : \( i(0) = \frac{d u_c}{dt} \) avec \( u_c = U \cos\left(\frac{2\pi}{T_0} t\right) \)
   \Rightarrow \( i(t) = -\frac{c}{T_0} \sin\left(\frac{2\pi}{T_0} t\right) \)
   \Rightarrow \( \lambda i(t) = I \cos\left(\frac{2\pi}{T_0} t\right) \) 
   Avec \(-\sin\left(\frac{2\pi}{T_0} t\right) = \cos\left(\frac{2\pi}{T_0} t + \frac{\pi}{2}\right)\)

   b - Calculons la valeur de \( a \) et celle de \( L \).
   On a : \( u_g = i(t) \)
   Donc: \( u_{g\max} = A \) avec \( I = \frac{2\pi C U}{T_0} \)
   Alors: 
   $$ u_{g\max} = \frac{2\pi C U}{T_0} $$
   D'où: 
   $$ A = \frac{u_{g\max} T_0}{2} = \frac{8 \times 12 \times 10^{-3}}{2\pi \times 20 \times 10^{-6}} $$
   Alors: \( \lambda = \frac{L}{C} = 76.4 \, \Omega \)

   Et on a : 
   $$ 2\frac{T_0^2}{4} = \frac{(12 \times 10^{-3})^2}{C} $$
   Donc: 
   $$ L = \frac{T_0^2}{4} = 0.18 \, H $$
   On trouve: \( L = 0.18 \, H \)
```

<!-- Page 56 -->

```markdown
# Exercice 10
1. Le régime d'oscillations est périodique.
   - Puissance les oscillations sont périodiques, donc $r = 0$
   - D'après la courbe, on a: $T_0 = 5 \text{ ms}$
   - Et, on a: $T_0 = 2\pi\sqrt{LC}$
   - Donc: $T_0^2 = 4\pi^2 LC$
   - Alors: $L = \frac{T_0^2}{4\pi^2 \cdot 10^{-3}} = 5.28 \times 10^{-2} \text{ H}$
   - A.N.: $L = \frac{5.28 \times 10^{-2}}{4\pi^2 \times 12 \times 10^{-10}}$

2. Déterminons l'équation différentielle vérifiée par la tension $u_c$
   ⇔ $E_T = E_e + E_m$ avec $E_c = \frac{1}{2}Cu^2$ et $E_m = \frac{1}{2}Li^2$

   $$E_r = \frac{1}{2}Cu^2 + \frac{1}{2}Li^2 \text{ avec } i = c\frac{duc}{dt}$$
   $$\frac{dE_r}{dt} = c \cdot 2u \frac{duc}{dt} + \frac{1}{2}2L \cdot 2c\frac{duc}{dt} \frac{d^2u_c}{dt^2}$$
   Puisque $E_r = Cte \Rightarrow \frac{dE_r}{dt} = 0$

   - On a $u_c(t) = U_m \cos\left(\frac{2\pi}{T_0} t + \varphi\right)$
   - avec $T_0 = 5 \text{ ms}, U_m = 16 \text{ V et } \varphi = 0$
   - Donc: $u_c(t) = 16 \cos\left(\frac{2\pi}{5}t\right)$

# Exercice 11
1. Déterminons l'équation différentielle.
   D'après la loi d'additivité des tensions, on a: 
   $u_c + u_l = u_g$ avec $u_r = L \frac{di}{dt}$ et $u_g = ait(t)$
   - Donc: $u_c + L \frac{d i}{dt} + R i(t) = ait(t) = c \frac{duc}{dt}$
   - Alors: $u_c + L \frac{d^2u_c}{dt^2} = 0 \quad \text{et } f(u_c)$ est linéaire

   d'équation $$L \frac{d^2u_c}{dt^2} + (R - a)c \frac{duc}{dt} = 0$$
   Par analogie, on trouve $k = -\frac{1}{L} \text{ et } r = -\frac{a}{L} = 0$
   - Alors: $r - a = 0 \quad \text{donc } r = a = 8 \Omega$

2. b - D'après la courbe, on a :
   $$k = (0.1 - 1)(10)^5 = -2.5 \times 10^5 s^{-2}$$
   Avec $k = -\frac{1}{LC} \Rightarrow L = -\frac{1}{c \cdot k}$
   - A.N.: $L = 10^{-10} \cdot x(-2.5 \times 10^5)^{-1} = 0.4 H$

   c - Calculons $T_0$
   - On a: $T_0 = 2\pi\sqrt{LC}$
   - A.N.: $T_0 = 2\pi \cdot 0.4 \times 10^{-6}$
   - On trouve: $T_0 = 1.26 \times 10^{-2} s$

3. Calculons l'énergie totale du circuit
   On a : $E_T = E_0(0) + E_m(0)$
   avec $E_m(0) = \frac{1}{2}L i^2(0)$ avec $u_c(0) = u_m$
   Alors: $E_T = \frac{1}{2}Cu_m^2$

   A.N.: $E_T = \frac{1}{2} \times 10^{-6} \times 82^2 = 3.2 \times 10^{-4} J$

# Exercice 12
1. Le régime d'oscillations est périodique.
   L'équation différentielle vérifiée par la tension $u_c$ 
   D'après la loi d'additivité des tensions :
   On a: $u_c + u_l = 0$ avec $u = L \frac{di}{dt}$
   - Donc: $u_c + L \frac{d u}{dt} = 0$ avec $i(t) = c \frac{duc}{dt}$
   - Alors: $u_c + LC \frac{d^2u_c}{dt^2} = 0$

   Et on a: $u_c = U_m \cos(2\pi f_0 t)$
   $$\frac{d^2u_c}{dt^2} = -2\pi^2 f_0^2 U_m \sin(2\pi f_0 t)$$
   Donc: $$u_c + LC \frac{d^2u_c}{dt^2} = 0$$

2. Trouvons l'expression de $f_0$
   On a: $u_c = U_m \cos(2\pi f_0 t)$
   - Et on sait que: $f_0 = \frac{1}{T_0}$

   A.N.: $f_0 = \frac{1}{4 \times 10^{-3}} = 714.3 \text{ Hz}$

3. Montrons que $E_m = \frac{C E^2}{4} (A - \cos(2\pi f_0 t))^2$
   - On a: $E = u_c(0) = 4V$
   - D'après la courbe (B), on a : $T_0 = 1.4 ms$
   - Et on sait que: $f_0 = \frac{1}{T_0}$

   Donc: $$E_m = \frac{1}{2} L i(t)^2 \text{ avec } i(t) = c \frac{duc}{dt}$$
   - Avec: $$\frac{d u_c}{dt} = -2\pi f_0 U_m \sin(2\pi f_0 t)$$
   Donc: 
   $$E_m = \frac{1}{2} L C^2 (2\pi f_0 U_m \sin(2\pi f_0 t))^2$$
   Alors: 
   $$E_m = \frac{1}{2} L C^2 4\pi^2 f_0^2 U_m^2 \sin^2(2\pi f_0 t)$$
   ⇔ $E_m = \frac{1}{2} L C^2 \frac{4\pi^2}{4\pi^2 f_0^2} U_m^2$
```

<!-- Page 57 -->

```markdown
$$
E_m = \frac{1}{2} L C E^2 \sin^2(2 \pi f t)
$$
$$
E_m = \frac{1}{2} C E^2 \left( \frac{1 - \cos(2 \pi f t)}{2} \right)
$$
$$
E_m = \frac{C E^2}{4} \left( 1 - \cos(4 \pi f t) \right)
$$

**b** – Déterminons l'expression de $E_{m, max}$
Sur a: 
$$
E_m = \frac{C E^2}{4} \left( 1 - \cos(4 \pi f t) \right)
$$
Cette énergie prend sa valeur maximale lorsque $\cos(4 \pi f t) = -1$
Donc:
$$
E_{m, max} = \frac{C E^2}{4} \left( 1 - (-1) \right)
$$
Alors: 
$$
E_{m, max} = \frac{C E^2}{2}
$$

D'après la courbe (C), on a: $E_m \approx 0,4 \, \text{J}$
Calculons la valeur de $C$ 
On a: $E_m = \frac{C E^2}{2}$
Donc: 
$$
C = \frac{2 E_{m,max}}{E^2}
$$
A.N.: $C = \frac{2 \times 0,4 \times 10^{-3}}{4^2} = 5 \times 10^{-5} F$

**3** Calculons la valeur de $L$
On a: $T_0 = \frac{2\pi}{\omega} = 2 \pi \sqrt{L C}$
$$
T^2_0 = 4 \pi^2 L C
$$
Alors: 
$$
L = \frac{T^2_0}{4 \pi^2 C}
$$

**Exercice 13**

Le régime d'oscillations est pseudopériodique.
Montrons l'équation différentielle vérifiée pour la tension $u_c$.

D'après la loi d'additivité des tensions, on a: 
$$
u_L + u_R + u_C = 0 \text{ avec } u_R = Ri(t) \text{ et } u_L = L \frac{di(t)}{dt}
$$
$$
\Rightarrow L \frac{d^2 u_C}{dt^2} + R \frac{du_C}{dt} + \frac{1}{C} u_C = 0
$$

a – Trouvons l'expression du rapport
On a: 
$$
u_c(t) = A e^{-\lambda t} \cos \left( \frac{2 \pi t}{T} + \phi \right)
$$
et 
$$
u_c(t + T) = A e^{-\lambda(t + T)} \cos \left( \frac{2 \pi (t + T)}{T} + \phi \right)
$$
$$
u_c(t + T) = A e^{-\lambda t} e^{-\lambda T} \cos \left( \frac{2 \pi t}{T} + 2 \pi + \phi \right) \text{ avec } \cos(x + 2 \pi) = \cos(x)
$$
Alors:
$$
\frac{u_c(t + T)}{u_c(t)} = e^{-\lambda T}
$$

b – Calculons la valeur de $\lambda$.
On a: 
$$
\frac{u_c(t + T)}{u_c(t)} = e^{-\lambda T} \text{ alors } \lambda = -\frac{1}{T} \ln \left( \frac{u_c(t + T)}{u_c(t)} \right)
$$

Et d'après la courbe de la figure (2), on a:  
$$
T = 0,03 \, \text{s} \text{ avec } u_c(0) = 12 \, \text{V et } u_c(T) = 9 \, \text{V} 
$$
$$
\Rightarrow \lambda = \frac{1}{0,03} \ln \left( \frac{12}{9} \right) \approx 9,5 \, \text{s}^{-1}
$$

c – Trouvons la valeur de $A$ et celle de $\phi$.
Les conditions initiales: 
$$
u_c(0) = 12 \, \text{et } i(0) = 0
$$
On a: 
$$
u_c(0) = A e^{-\lambda(0)} \cos \left( \frac{2 \pi (0)}{T} + \phi \right) \implies 12 = A \cos(\phi)
$$
Et aussi: 
$$
i(t) = -CAe^{-\lambda t} \cos \left( \frac{2 \pi t}{T} + \phi \right) - C \cdot 2 \pi A e^{-\lambda t} \sin \left( \frac{2 \pi t}{T} + \phi \right)
$$
D'où: 
$$
u_c(0) = A e^{-\lambda(0)} \Rightarrow i(0) = -CA \cos(\phi) \cdot \frac{2\pi}{T} \Rightarrow A \cdot e^{\lambda t} \cdots \text{ etc. }
$$
```

<!-- Page 58 -->

```markdown
$$
A \cos(\varphi) = 12
$$
$$
i(t) = -CAe^{-\lambda t} \cos\left(\frac{2 \pi}{T} A e^{-\lambda t} \right) - c\frac{2 \pi}{T} Ae^{-\lambda t} \sin(\varphi) = 0
$$
$$
A \cos(\varphi) = 12 \quad (a)
$$
$$
\Delta \cos(\varphi) + \frac{2 \pi}{T} \sin(\varphi) = -\frac{\pi}{2 \pi}
$$
(b) $\iff \quad \frac{2 \pi}{T} \sin(\varphi) = 0 \Rightarrow \tan(\varphi) = 0$
A.N.: $\tan(\varphi) = 0 \Rightarrow \varphi = -4,58 \times 10^{-2} \rightarrow \varphi = -4,58 \times 10^{-2} \text{ rad ou } \varphi = -4,58 \times 10^{-2} + \pi$

Et d'après l'équation (a), on a : $ \cos(\varphi) > 0 $ car $ A > 0 $ et $ u_c(0) > 0 $

Et puisque $\cos(-4,58\times 10^{-2}) = 0,998 et  \cos(-4,58\times 10^{-2} + \pi) = -0,998, $

Alors $\varphi = -4,58 \times 10^{-2} \text{ rad et } A = \frac{u_c(0)}{\cos(\varphi)} \quad A.N.: A \approx 12 \text{ V}$

Calculons la valeur de $L$ et celle de $R$

On a: $T_0 = T$

Donc: $2 \pi \sqrt{L.C} = T$

Alors: $L = \frac{T^2}{4 \pi^2 C} \quad A.N.: L = \frac{(0,03)^2}{4 \pi^2 \times 2,48 \times 10^{-6}} \approx 0,47 \text{ H}$

Et on a: $R = \frac{L}{A} \quad A.N.: R = 2 L A \quad R = 2 \times 0,47 \times 9,59 \approx 9 \Omega$

Trouvons l'expression de $i(t)$

On a: 
$$
i(t) = -CAe^{-\lambda t} \cos\left(\frac{2 \pi}{T} (t + \varphi)\right) - c \frac{2 \pi}{T} Ae^{-\lambda t} \sin\left(\frac{2 \pi}{T} (t + \varphi)\right)
$$
$$
i(t) = -CA \left( e^{-\lambda t} \cos\left(\frac{2 \pi}{T} (t + \varphi)\right) + \frac{2 \pi}{T} e^{-\lambda t} \sin\left(\frac{2 \pi}{T} (t + \varphi)\right) \right)
$$
$$
i(t) = -CA e^{-\lambda t} \left[ \cos\left(\frac{2 \pi}{T} (t + \varphi)\right) + \frac{2 \pi}{T} \sin\left(\frac{2 \pi}{T} (t + \varphi)\right) \right]
$$

Avec: $A = 48 \mu H ; A = 12 \text{ V} ; 9,55 \, s^{-1}, \quad \varphi = -4,58 \times 10^{-2} \text{ rad}; \, T = 0,03 s$

Alors: 
$$
i(t) = -48 \times 10^{-6} \cdot 9,59 \cos\left( \frac{2 \pi}{0,03} (t - 4,58 \times 10^{-2}) \right) + \frac{2 \pi}{0,03} \sin\left( \frac{2 \pi}{0,03} (t - 4,58 \times 10^{-2}) \right)
$$
$$
\Rightarrow i(t) = -5,76 \times 10^{-4} e^{-5,59 \times 10^3} \left[ 9,59 \cos\left( 2,09 \times 10^2 t - 4,58 \times 10^{-2} \right) + 2,09 \times 10^2 \sin\left(2,09 \times 10^2 t - 4,58 \times 10^{-2}\right) \right] 
$$

Calculons $i_1$ à l'instant $t_1 = 36 \, ms$
On a: 
$$
i_1 = -5,76 \times 10^{-4} e^{-5,59 \times 10^3} [9,59 \cos(2,09 \times 10^2 \times 36 \times 10^{-3} - 4,58 \times 10^{-2}) + 2,09 \times 10^2 \sin(2,09 \times 10^2 \times 36 \times 10^{-3} - 4,58 \times 10^{-2})]
$$
On trouve: $i_1 = -8,04 \times 10^{-2} A$

Calculons $i(t)$ à l'instant $t_2 = 69 \, ms$
On a: 
$$
i_2 = -5,76 \times 10^{-4} e^{-5,59 \times 69 \times 10^{-3}} [9,59 \cos(2,09 \times 10^2 \times 69 \times 10^{-3} - 4,58 \times 10^{-2})]
$$
On trouve: $i_2 = -5,97 \times 10^{-2} A$

Calculons la variation de l'énergie magnétique stockée dans la bobine entre les instants $t_1$ et $t_2$.
Donc: 
$$
\Delta E_{m_{t_1 \to t_2}} = \frac{1}{2} Li^2(t_2) - \frac{1}{2} Li^2(t_1) 
$$
Alors: $\Delta E_{m_{t_1 \to t_2}} = \frac{1}{2} L (i^2(t_2) - i^2(t_1))$

A.N.: 

$$\Delta E_{m_{t_1 \to t_2}} = \frac{1}{2} \times 0,47 \times 10^{-2} \times (-8,04 \times 10^{-2})^2 - (-5,97 \times 10^{-2})^2 \approx -6,83 \times 10^{-4}J$$

Calculons la variation de l'énergie électrique stockée dans le condensateur.
D'après la courbe, on trouve: $U_{c_1} = 3V$ et $U_{c_2} = -2V.$

Et on a: 
$$
E_c(t) = \frac{1}{2} CU^2 
$$
Donc: 
$$
\Delta E_{c_{t_1 \to t_2}} = E_c(t_2) - E_c(t_1)
$$
Alors: 
$$
\Delta E_{c_{t_1 \to t_2}} = \frac{1}{2} C \left(U_{c_2}^2 - U_{c_1}^2\right) \quad A.N.: \Delta E_{c_{t_1 \to t_2}} = \frac{1}{2} \times 48 \times 10^{-6} \times [22^2 - 32^2] \approx -1,2 \times 10^{-4}J
$$

Calculons la variation de l'énergie électrique totale du circuit entre les instants $t_1$ et $t_2$.
On a: 
$$
E_{t_1 \to t_2} = E_m + E_e 
$$
Donc: 
$$
\Delta E_{t_1 \to t_2} = \Delta E_{m_{t_1 \to t_2}} + \Delta E_{c_{t_1 \to t_2}} 
$$
A.N.: 
$$
\Delta E_{t_1 \to t_2} = -6,81 \times 10^{-4} - (1,2 \times 10^{-4}) = -8,01 \times 10^{-4}J
$$
On constate que: $\Delta E_{t_1 \to t_2} < 0$

$\Rightarrow$ Explication : L'énergie totale du circuit décroît avec le temps en raison de sa dissipation par effet de Joule dans la résistance.
```

<!-- Page 59 -->

```markdown
# Exercice 14

## I- Etude de la charge du condensateur
1. Montrons l'équation différentielle :
   $$ q + \frac{d q}{dt} + \frac{c_1 + c_2}{c_1 c_2} q_m = 0 $$

   D'après la loi d'additivité des tensions on a :
   $$ u_c + u_L + u_R = E $$
   
   Avec $u_c = \frac{q}{c_1}$, $u_L = R i(t)$ et $u_R = Ri(t)$
   
   Donc :
   $$ \frac{q}{c_1} + R i(t) = \frac{q}{c_2} \text{ avec } i = \frac{d q}{dt} $$
   $$ \Longleftrightarrow \left( \frac{1}{c_1} + \frac{1}{c_2} \right) q + R \frac{d q}{dt} = E $$
   $$ \Longleftrightarrow q + R \frac{d q}{dt} \left( \frac{1}{c_1 + c_2} \right) = E $$
   $$ \Longrightarrow q + R q_m \text{ avec } \frac{R c_1 c_2}{c_1 + c_2} q_m = \frac{c_2}{c_1 + c_2} q_m $$

2. a - D'après la courbe (A) on a : $t = 6 \text{ ms}$
   b - D'après les courbes (A) on a : $q_{max} = 3.6 \times 10^{-4} \text{ C}$

   Calculons la valeur de $C_1$ et celle de $C_2$.
   
   On a :
   $$ q_m = \frac{c_1 c_2 E}{c_1 + c_2} $$
   
   Donc :
   $$ q_m = \frac{3c_1 c_2}{3c_2 + 4c_2} $$
   $$ q_m = \frac{4}{4} \Rightarrow 4 $$

   Donc :
   $$ C_2 = \frac{q_m}{E} = \frac{4}{4 \times 3.6 \times 10^{-4}} = 4 \times 10^{-5} \text{ F} $$
   Et $C_1 = 3C_2 = 1.2 \times 10^{-5} \text{ F}$

3. Calculons les énergies stockées dans les deux condensateurs en régime permanent.
   
   On a : $E_e = \frac{1}{2} C u^2$
   
   a - Dans le condensateur de capacité $C_1$ on trouve :
   $$ E_{1max} = \frac{1}{2} C_1 q_m^2 $$
   
   A.N. : $E_{1max} = \frac{1}{2} (2 \times 10^{-5})^2 (3.6 \times 10^{-4})^2 = 5.4 \times 10^{-4} J$
   
   b - Dans le condensateur de capacité $C_2$ on trouve :
   $$ E_{2max} = \frac{1}{2} C_2 q_m^2 $$
   
   A.N. : $E_{max} = \frac{1}{2} (4 \times 10^{-5})(3.6 \times 10^{-4})^2 = 1.62 \times 10^{-3} J$

## II- Etude des oscillations libres amorties dans un circuit RLC série
1. Le régime d'oscillation est pseudopériodique.
   
   Montrons l'équation différentielle suivante :
   $$ \frac{d^2 q}{dt^2} + \frac{R}{L} \frac{d q}{dt} + \frac{1}{L} q = 0 $$
   
   D'après la loi d'additivité des tensions on a :
   $$ u_L + u_C + u_R = 0 \text{ avec } u_R = Ri = \frac{d q}{dt} $$
   
   $$ \Longrightarrow \frac{L}{C} \frac{d^2 q}{dt^2} + \frac{R}{C} \frac{d q}{dt} + Q = 0 $$
   $$ \Longrightarrow \frac{d^2 q}{dt^2} + \frac{R}{L} \frac{d q}{dt} + \left( \frac{1}{C_1} + \frac{1}{C_2} \right) q = 0 $$

2. Calculons la valeur de $\lambda$ et celle de $r$.
   
   On a : 
   $$ q(t) = Ae^{-\lambda t} \cos\left( \frac{2\pi t}{T} \right) $$
   
   À $t = 0$, on trouve : $q(0) = A = q_m$
   
   Donc :
   $$ q(t) = Ae^{-\lambda t} \cos\left( \frac{2\pi t}{T} \right) $$
   $$ \Rightarrow q(t+T) = Ae^{-\lambda(t+T)} \cos \left( \frac{2\pi(t + T)}{T} \right) $$
   $$ \Rightarrow q(t) = e^{-\lambda T} q(t) $$
   
   D'où : $-\lambda T = \ln \frac{q(t)}{q(0)}$
   
   Et d'après la courbe (B) on a :
   $$ q(0) = 360 \mu C \text{ et } q(T) = 290 \mu C $$
   $$ A : \lambda = -\frac{1}{0.03} \ln \left( \frac{290}{360} \right) $$
   Donc : $r = 2 \cdot Z_L$

   A.N. : $r = 0.76 \cdot 7.21 = 10.96 \Omega$
```

<!-- Page 60 -->

```markdown
# Oscillations forcées dans un circuit RLC série

## Objectifs
🌼 Savoir de déterminer le déphasage entre deux signaux électriques sinusoïdales  
🌼 Connaître les oscillations forcées et savoir les distinguer des oscillations libres.  
🌼 Savoirs identifier le résonateur et l’excitateur dans un circuit RLC Forcé  
🌼 Définir l’impédance du circuit RLC et savoir la calculer.  
🌼 Définir le phénomène de résonance et connaître la condition de sa réalisation.  
🌼 Connaître la bande passante 3dissible.  
🌼 Définir le facteur de qualité et savoir le calculer.  
🌼 Connaître la puissance en régime sinusoïdal.  

## Axes du cours
### Le régime alternatif sinusoïdal
- La tension alternative sinusoïdale.  
- Le courant alternatif sinusoïdal.  
- Le déphasage entre deux courbes sinusoïdales.  
- Détermination de déphasage $\varphi_{u/t}$.  

### Les oscillations forcées dans un circuit RLC série
- Mise en évidence des oscillations forcées.  
- Impédance d’un dipôle RLC.  

### La résonance électrique
- Mise en évidence du phénomène de résonance.  
- Grandeurs caractérisant la résonance.  
- La largeur de la bande passante à 3dificile.  
- Facteur de qualité.  

### La puissance en régime sinusoïdal
- La puissance instantanée.  
- La puissance moyenne.  
```

<!-- Page 61 -->

```markdown
# Le régime alternatif sinusoïdal

## 1 La tension alternative sinusoïdale
La tension alternative sinusoïdale est une tension électrique qui évolue au cours du temps selon une fonction sinusoïdale : 
- $u(t) = u_m \cos(\omega t + \varphi_u)$
  - $u_m$ : L'amplitude de la tension en (V)
  - $\omega$ : La pulsation en $(\text{rad.s}^{-1})$
  - $\omega t + \varphi_u$ : La phase à l'instant t en (rad)
  - $\varphi_u$ : La phase à l'origine des dates en (rad)
- La fréquence d'une tension alternative sinusoïdale est : $N = \frac{\omega}{2\pi}$ en (Hz)
- La période d'une tension alternative sinusoïdale est : $T = \frac{1}{N} = \frac{2\pi}{\omega}$ en (s)
- La tension efficace d'une tension alternative sinusoïdale est définie par la relation suivante : $U = \frac{u_m}{\sqrt{2}}$

## 2 Le courant alternatif sinusoïdal
Le courant électrique dit alternatif sinusoïdal s'il évolue dans le temps selon une fonction sinusoïdale : $i(t) = i_m \cos(\omega t + \varphi_i)$
- $i_m$ : L'amplitude de l'intensité $i(t)$ en (A)
- $\varphi_i$ : La phase à l'origine des dates en (rad)
- L’intensité efficace d’un courant alternatif sinusoïdal est définie par la relation suivante : $I = \frac{i_m}{\sqrt{2}}$

## 3 Le déphasage entre deux courbes sinusoïdales
On considère le courant sinusoïdal alternatif $i(t) = i_m \cos(\omega t + \varphi_i)$ et la tension sinusoïdale alternative : $u(t) = u_m \cos(\omega t + \varphi_u)$
On appelle déphasage ou phase de la tension par rapport au courant, la grandeur algébrique notée $\phi_{u/i}$ tel que :
- $\phi_{u/i} > 0$ : On dit que la tension $u(t)$ est en avance par rapport à l’intensité $i(t)$.
- $\phi_{u/i} < 0$ : On dit que la tension $u(t)$ est en retard par rapport à l’intensité $i(t)$.
- $\phi_{u/i} = \pi$ : On dit que la tension $u(t)$ et l’intensité $i(t)$ sont en opposition de phase.
- $\phi_{u/i} = \frac{\pi}{2}$ : On dit que la tension $u(t)$ et l’intensité $i(t)$ sont en quadrature de phase.

## 4 Détermination de déphasage $\phi_{u/i}$
Pour simplifier l’étude, on prend $\varphi_i = 0$  
Donc : $\phi_{u/i} = \varphi_u$  
Et on a : $u(t) = u_m \cos(\omega t + \varphi_u)$  
Alors : $i(t) = i_m \cos(\omega t + (\varphi_u - \varphi_i))$  
- La grandeur $\tau$ est appelée le décalage horaire et exprimé en (s)  
- Pratiquement, la détermination graphique de $\tau$ permet de déterminer le déphasage $\varphi_u$ tel que : $\tau = T \cdot \omega = \frac{2\pi}{T}$
```

<!-- Page 62 -->

```markdown
## II  Les oscillations forcées dans un circuit RLC série

### 1 Mise en évidence les oscillations forcées

On réalise le montage électrique schématisé dans la figure 1 qui comporte:
- Un GBF alimenté en mode sinusoïdale.
- Un condensateur de capacité $C$.
- Une bobine d'inductance $L$ et de résistance $r$.
- Un conducteur ohmique de résistance $R$.
- Un ampèremètre.
- Un voltmètre.
- Un oscilloscope.

Le GBF délivre au circuit RLC en série une tension alternative sinusoïdale 
$$
u(t) = U_m \cos( \omega t + \varphi )
$$
. 
On visualise à l'aide de l'oscilloscope la tension $u(t)$ aux bornes du dipôle RLC ainsi que la tension $u_R(t)$ aux bornes du conducteur ohmique (la figure 2).

### Résumé
- La tension $u(t)$ et l’intensité de courant $i(t)$ sont deux sinusoïdes de même fréquence $N$.
- La fréquence $N$ des oscillations est imposée par le générateur donc les oscillations sont forcées.
- Le générateur joue le rôle d'un exciteateur : celui qui impose sa fréquence.
- Le dipôle RLC se joue le rôle d'un résonateur.
- Si $N < N_0$, on constate que $i(t)$ est en avance par rapport à $u(t)$.
- Si $N > N_0$, on constate que $i(t)$ est en retard par rapport à $u(t)$.

### 2 Impédance d'un dipôle RLC
- L'impédance $Z$ d’un dipôle est le quotient de la tension efficace $U$ entre ses bornes par l’intensité efficace du courant $I$ qui la traverse :
$$
Z = \frac{U}{I}
$$
- L'impédance $Z$ a la dimension de la résistance.
- L'impédance d'un dipôle dépend de la fréquence de la tension appliquée entre ses bornes.
```

<!-- Page 63 -->

```markdown
# La résonance électrique

## 1. Mise en évidence le phénomène de résonance

On réalise le montage électrique schématisé ci-contre qui comporte :
- Une bobine de résistance $r = 5 \, \Omega$ et d’inductance $L = 25 \, \text{mH}$.
- Un condensateur de capacité $C = 47 \, \mu F$.
- Un conducteur ohmique de résistance variable.
- Une GBF en mode sinusoïdal délivrant une tension électrique d’amplitude $U = 10 \, V$.

On fait varier la fréquence de GBF et à l’aide de l’amperemètre on mesure les valeurs de $I$ l’intensité efficace du courant, l’ensemble des résultats ont permis de tracer la courbe $I$ en fonction de la fréquence $F$ du GBF.

### **Résumé**
- Lorsque la fréquence $N$ de l'excitateur (GBF) est égale à la fréquence propre $N_0$ du résonateur (RLC série), l’intensité efficace $I$ traversant le circuit prend une valeur maximale notée $I_0$, on dit dans que le circuit RLC série est en résonance.
- Si la résistance du résonateur est faible, la résonance est aigue.
- Si la résistance du résonateur est grande, la résonance est floue.

## 2. Grandeurs caractérisant la résonance

- La fréquence à la résonance
  À la résonance, la fréquence de l’excitateur est égale à la fréquence propre du circuit RLC : $N = N_0 = \frac{1}{2 \pi \sqrt{LC}}$.
  
- L’impédance à la résonance
  À la résonance l’impédance du circuit est minimale, elle égale à la résistance totale du circuit RLC : $Z_0 = R + r$.
  La courbe ci-contre représente les variations de l’impédance $Z$ en fonction de la fréquence $N$ de l’excitateur.

- L’intensité efficace du courant à la résonance
  À la résonance, l’intensité efficace du courant est : $I_0 = \frac{U}{R+r}$ ou $U$ est la tension effective aux bornes de l’excitateur.

- Le déphasage à la résonance
  À la résonance, la phase en la tension électrique $u(t)$ aux bornes de l’excitateur et l’intensité du courant $i(t)$ est nulle : $\varphi_{u,i} = 0$.

## 3. La largeur de la bande passante à 3 décibles

On appelle bande passante à 3 décibles d’un circuit RLC est l’intervalle de fréquences $[N_1; N_2]$ de l’excitateur pour lequel l’intensité efficace du courant vérifie l’inégalité suivante : $I < \frac{I_0}{\sqrt{2}}$.
$(I_0$ est l’intensité efficace du courant à la résonance$)$
La largeur de la bande passante est : $\Delta N = N_2 - N_1$.

### Remarques
- Si la résistance $R$ du circuit RLC est faible (amortissement faible), la résonance est aigue et la largeur $\Delta N$ de la bande passante est petite.
```


<!-- Page 64 -->

```markdown
- Si la résistance $R$ du circuit $RLC$ est grande (amortissement fort), la résonance est floue et la largeur $\Delta N$ la bande passant est petite.  
- La largeur de la bande passant est indépendante de la tension efficace imposée.  
- Théoriquement, la largeur de la bande passant d’un circuit $RLC$ forcé est donnée par la relation suivante : $\Delta N = \frac{R}{2 \pi L}$  

### 4️⃣ Facteur de qualité  
Le facteur de qualité d’un circuit $RLC$ forcé est égal au quotient de la fréquence propre $N_0$ des oscillations sur la largeur $\Delta N$ de la bande passant 3 divisible : $Q = \frac{N_0}{\Delta N}$.  
Le facteur de qualité est un nombre sans unité.  
Si la valeur du facteur de qualité est grande, alors le circuit est plus sélectif.  
Puisque $\Delta N = \frac{R}{2 \pi L}$ donc $Q = \frac{2 \pi N_0}{R}$  

---

### IV La puissance en régime sinusoïdal  

1️⃣ La puissance instantanée  
On considère un dipôle électrique $D$ traversé par un courant électrique sinusoïdal $i(t) = \sqrt{2} I \cos(\omega t)$ et la tension entre ses bornes est : $u(t) = \sqrt{2} U \cos(\omega t + \phi)$  
La puissance instantanée reçue par le dipôle est : $P(t) = i(t).u(t)$  
Donc : $P(t) = 2IU \cos(\omega t + \phi) = IU(\cos(\phi) + \cos(2\omega t + \phi)) $  
La puissance instantanée en régime sinusoïdal est une fonction sinusoïdale de fréquence $2N$ et d’amplitude $IU \cos(\phi)$  

2️⃣ La puissance moyenne  
La puissance moyenne d’un dipôle $D$ est égale à la somme des puissances instantanées reçues par ce dipôle durant une période $T : P = \frac{1}{T} \int_0^T P(t) dt$  
Donc : 
$$ P = \frac{IU}{T} \int_0^T \left( \cos(\phi) + \cos(2\omega t + \phi) \right) dt $$
$$ P = \frac{IU}{T} \left( T \cos(\phi) + \frac{1}{2\omega} [\sin(2\omega t + \phi)]_0^T \right) $$
$$ P = IU \cos(\phi) \cdot 1 + IU \frac{1}{2\omega T} [\sin(2\omega T + \phi) - \sin(\phi)] $$
$$ P = IU \cos(\phi) $$

---

### 📝 Exercice 1  
Répondre par vrai ou faux  
- L’impédance du circuit $RLC$ forcée est toujours égale à la résistance du circuit.  
- La tension $u(t)$ aux bornes du résonateur $RLC$ série est en avance par rapport à l’intensité du courant $i(t)$ que traverse si $\phi / I > 0$.  
- À la résonance, l’impédance de circuit $RLC$ série est maximale  
- La largeur de la bande passant augmente lorsqu’on fait diminuer la résistance totale du résonateur $RLC$.  
- À la résonance la fréquence de l’excitateur est le double de celle du résonateur.  
- Le facteur de qualité d’un circuit $RLC$ forcé est inversement proportionnel à sa résistance.  
- La largeur de la bande passant d’un circuit $RLC$ forcé est inversement proportionnel à l’inductance de la bobine.  
```

<!-- Page 65 -->

```markdown
### Exercice 2

On réalise le montage de la figure ci-contre qui comporte:
- Un GBF délivrant une tension sinusoïdale: $u(t) = U_m \cos(2\pi Nt + \frac{\pi}{3})$
- Un conducteur ohmique de résistance $R$
- Une bobine idéale d'inductance $L$
- Un condensateur de capacité $C$
- Un ampèremètre et un voltmètre

On fonctionne le GBF après avoir fixé sa fréquence sur la valeur $N = 50Hz$. La mesure la tension efficace aux bornes du dipôle RLC et l’intensité efficace du courant qui le traverse et donne les valeurs suivantes: $U = 4V$ et $I = 50mA$  
1. Quel est le résonateur et l’excitateur de ce circuit?
2. Calculer la valeur de l’amplitude $U_m$ et celle de l’intensité maximale $I_m$.
3. Calculer l’impédance de ce circuit.
4. Calculer le déphasage $\varphi_{uI}$. On donne $i(0) = I_m$.
5. Laquelle des deux sinusoïdes $u(t)$ et $i(t)$ qui est en avance de phase. Justifier la réponse.
6. Déterminer l’expression de l’intensité du courant $i(t)$ en fonction du temps.

### Exercice 3

Pour étudier l’influence de la fréquence du GBF sur l’impédance du circuit RLC série, on réalise le montage de la figure ci-contre qui comporte:
- Un GBF délivrant une tension sinusoïdale
- Un conducteur ohmique de résistance $R$
- Une bobine idéale d'inductance $L$
- Un condensateur de capacité $C$
- Un ampèremètre et un voltmètre

On fixe la fréquence du GBF sur la valeur $N_1 = 30Hz$ et on fait varier l’amplitude de la tension du GBF et chaque fois on mesure la tension efficace aux bornes du dipôle RLC et l’intensité efficace du courant.  
On refait la même manipulation pour une fréquence $N_2 = 80Hz$. L’ensemble des résultats obtenus ont permis de tracer la courbe $C_1$ associée à la fréquence $N_1$ et la courbe $C_2$ associée à la fréquence $N_2$ (la figure 2).  
1. Déterminer l’impédance du circuit pour chacune des deux fréquences.
2. Pour $N = N_1$, on constate que le déphasage entre la tension aux bornes du générateur et l’intensité du courant qui le traverse est $(\varphi_{uI} = 0 \ \text{rad})$  
   a. Exprimer le produit $LC$ en fonction de $N_1$, puis calculer sa valeur.  
   b. Calculer la valeur de la résistance du conducteur ohmique.

### Exercice 4

Un GBF délivre une tension sinusoïdale: $u(t) = 11.3 \cos(2\pi Nt)$ aux bornes d’un dipôle AB série comportant un conducteur ohmique de résistance $R = 85\ \Omega$, un condensateur de capacité $C = 24\ \mu F$ et une bobine d'inductance $L$ et de résistance $r$.  
On fait varier la fréquence $N$ du GBF et à chaque fois on mesure l’intensité du courant traversant le circuit.  
Les résultats obtenus ont permis de tracer la courbe de:  
1. Déterminer la fréquence propre du dipôle AB.
2. Déterminer l’intensité efficace du courant à la résonance.
3. Déterminer la largeur de bande passante $3dB$ idéale.
4. Déduire la valeur de l’impédance à la résonance et de la valeur de la résistance de la bobine.
5. Calculer la inductance $L$ de la bobine.
6. Calculer la valeur du facteur de qualité.
```

<!-- Page 66 -->

```markdown
## Exercice 5

On considère un dipôle RLC série comporte un condensateur de capacité $C$, un conducteur ohmique de résistance $R$ et une bobine de résistance interne $r = 8 \ \Omega$ et d'inductance $L = 0.2 \ H$. 
On alimente ce dipôle par une tension sinusoïdale $u(t) = 24 \cos(20 \nt t)$ où $t$ est en $(s)$ et $u$ est en $(V)$. 
L’intensité du courant qui traverse le circuit est: $i(t) = 0.44 \cos(20 \nt t)$.

1. Déterminer la fréquence propre des oscillations.
2. Calculer l’impédance du circuit à la résonance.
3. Calculer la valeur de la résistance $R$.
4. Calculer la largeur de la bande désirable.
5. Calculer la valeur du facteur de qualité.
6. Calculer la puissance moyenne consommée par ce dipôle.

## Exercice 6

On réalise le montage de la figure ① qui comporte:

- Un GBF délivrant une tension sinusoïdale : $u_1(t) = U_m \cos(2\pi Nt + \varphi)$
- Un conducteur ohmique de résistance $R = 50 \ \Omega$
- Un condensateur de capacité $C = 40 \ \mu F$
- Une bobine d’inductance $L$ et de résistance $r$
- Interrupteur $K$ et files de connexion

On fixe la fréquence du GBF sur une valeur $N$ et on ferme l’interrupteur $K$. 
À l’aide d’un oscilloscope, on visualise la tension $u_1(t)$ aux bornes du générateur et la tension $u_2(t)$ aux bornes du conducteur ohmique (les courbes de la figure ②).

1. Recopier le schéma de la figure et représenter sur laquelle comment brancher les entrées $Y_1$ et $Y_2$ de l’oscilloscope pour visualiser les tensions $u_1(t)$ et $u_2(t)$.
2. Déterminer la fréquence du GBF.
3. Déterminer la valeur de l’amplitude de l’intensité du courant traversant le dipôle RLC et déduire sa valeur efficace.
4. Déterminer la valeur de l’amplitude de la tension aux bornes du GBF et déduire sa valeur efficace.
5. Calculer le déphasage $\Phi_{u_1 / i}$.
6. Calculer la valeur de l’impédance du circuit et déduire la valeur de la résistance $r$ de la bobine.
7. Lorsqu’on fixe la fréquence du générateur sur une valeur $N' = 42 \ \text{Hz}$, on trouve $\Phi_{u_1 / i} = 0$ et $Z' \approx 73 \ \Omega$.
   - a) Que représente cette fréquence ?
   - b) Calculer la valeur de l’inductance $L$ de la bobine et celle de l’intensité efficace du courant à la résonance (on admet que l’amplitude du générateur reste constante).
   - c) Calculer la largeur de bande $\delta f$.
```

<!-- Page 67 -->

```markdown
# Exercice 7

Un dipôle RLC série comporte un condensateur de capacité $C$, une bobine de résistance interne $r$ et d'inductance $L = 0,6H$ et un conducteur ohmique de résistance $R$ réglable.  
On alimente ce dipôle par un générateur délivrant une tension sinusoïdale $u(t) = 14,14 \cos (2\pi Nt)$ où $t$ est en (s) et $u$ est en (V).  
On fixe la résistance du conducteur sur la valeur $R_1 = 20 \, \Omega$ et fait varier la fréquence $N$ du générateur et à chaque fois mesure l’intensité efficace du courant traversant le circuit.  
On refait la même manipulation en fixant la résistance du conducteur ohmique sur une valeur $R_2$. Les résultats obtenus ont permis de tracer les variations de l’intensité efficace du courant en fonction de la fréquence du générateur pour chacune des deux valeurs de la résistance du conducteur ohmique.

1. Déterminer la fréquence propre des oscillations.
2. Calculer l’impédance $Z_1$ à la résonance (pour la résistance $R_1$) et déduire la résistance de la bobine.
3. Calculer l’impédance $Z_2$ à la résonance (pour la résistance $R_2$) et déduire la valeur de la résistance $R_2$.
4. Calculer la valeur de la capacité du condensateur.
5. Calculer la largeur de la bande passante pour chaque valeur de la résistance.
6. Calculer la valeur du facteur de qualité pour chaque valeur de la résistance.

---

# Exercice 8

On réalise le montage de la figure ① qui comporte:
- Un GBF délivrant une tension sinusoïdale
- Un conducteur ohmique de résistance $R = 80 \, \Omega$
- Une bobine idéale d’inductance $L$
- Un condensateur de capacité $C = 22 \, \mu F$

On fixe la fréquence du GBF sur la valeur $N$ et on ferme l’interrupteur $K$.  
À l’aide d’un oscilloscope, on visualise la tension $u_1(t)$ aux bornes du générateur et la tension $u_2(t)$ aux bornes du conducteur ohmique (les courbes de la figure ②).

1. Dans quel état se trouve ce circuit?
2. Déterminer la fréquence des oscillations. Que représente cette fréquence?
3. Déterminer les amplitudes $U_{m1}$ et $U_{m2}$ des tensions $u_1(t)$ et $u_2(t)$.
4. Calculer l’impédance de ce circuit.
5. Calculer la valeur de l’inductance de la bobine.
6. Trouver l'expression de la résistance de la bobine en fonction de $R$, $U_{m1}$ et $U_{m2}$, puis calculer sa valeur.
7. Déterminer l’expression de l’intensité du courant $i(t)$ en fonction du temps.
```

<!-- Page 68 -->

```markdown
# Exercice 9

On réalise le montage de la figure ① ci-contre qui comporte :
- Un GBF délivrant une tension sinusoïdale
- Un conducteur ohmique de résistance $R = 40 \, \Omega$
- Une bobine d'inductance $L$ et de résistance $r$
- Un condensateur de capacité $C = 6 \, \mu F$

Le générateur délivre une tension alternative sinusoïdale
$$ u(t) = U_m \cos(2 \pi N t + \varphi) $$
de fréquence $N$ réglable. Un courant électrique d'intensité $i(t) = I_m \cos(2 \pi N t + \varphi)$ On fait varier la fréquence de la tension $u(t)$ en gardant son amplitude $U_m$ constant. Les résultats obtenus ont permis de tracer la courbe de la figure ② qui représente les variations de l'impédance $Z$ du circuit en fonction de la fréquence $N$ et celle de la figure ③ qui représente les variations de l'intensité efficace du courant $I$ en fonction de la fréquence $N$.

1. Quel est le résonateur et l'excitateur de ce circuit?
2. Déterminer l'intensité efficace du courant à la résonance.
3. Déterminer la fréquence des oscillations à la résonance et l'impédance du circuit à la résonance.
4. Calculer la valeur de l'intensité maximale $I_m$ à la résonance et celle de l'amplitude $U_m$.
5. Calculer la valeur de l'inductance $L$ de la bobine et celle de la résistance $r$.
6. Calculer la largeur de la bande passante.
7. Calculer le facteur de qualité de ce circuit.

## Correction

# Exercice 1

1. Répondre par vrai ou faux
   - L'impédance du circuit $RLC$ forcé est toujours égale à la résistance du circuit: **Faux**
   - La tension $u(t)$ aux bornes du résonateur $RLC$ série est en avance par rapport à l'intensité du courant $i(t)$ que traverse le $R_{ph}|u| > 0$: **Vrai**
   - À la résonance, l'impédance de circuit $RLC$ série est maximale: **Faux**
   - L'intensité du courant traversant le résonateur $RLC$ série est toujours en phase avec la tension aux bornes du conducteur ohmique: **Vrai**
   - À la résonance la fréquence de l’excitateur est le double de celle du résonateur: **Faux**
   - Le facteur de qualité d’un circuit $RLC$ forcé est inversement proportionnel à sa résistance: **Vrai**
   - La largeur de la bande passante augment lorsque on fait diminuer la résistance totale du résonateur $RLC$: **Vrai**
```


<!-- Page 69 -->

```markdown
# Exercice 2

1. Le résonateur est le dipôle RLC
   L'excitateur est le GBF
2. Calculons la valeur de $U_m$ et $I_m$
   On a : $U_m = \sqrt{2} = 5,66 \, V$
   A.N.: $I_m = 50 \times \sqrt{2} = 70,71 \, mA$
3. Calculons l'impédance du circuit
   On a : $Z = \frac{U}{I}$
   A.N.: $Z = \frac{5,66}{70,71 \times 10^{-3}} = 80 \, \Omega$
4. Calculons $\varphi_{U/I}$
   On a : $i(t) = I_m \cos(2\pi Nt + \varphi_i)$ avec $I_m = 70 \, mA$ et $\varphi_i = 0$.
   Alors : $I_m = I_m \cos(\varphi_i)$
5. D'où : $\varphi_i = 0$
   Et sachant que $\varphi_{U/I} = \varphi_U - \varphi_I$
   Alors $\varphi_{U/I} = \frac{\pi}{3} - 0 = \frac{\pi}{3}$
6. Calculons la valeur de $R$
   On a : $R = Z \cos(\varphi_{U/I})$
   A.N.: $R = 80 \cos(\frac{\pi}{3}) = 40 \, \Omega$
7. Puisque $\varphi_{U/I} > 0$, donc $u(t)$ est en avance de phase par rapport à l'intensité $i(t)$.
8. Déterminons l'expression de $i(t)$ :
   On a : $i(t) = I_m \cos(2\pi Nt + \varphi)$, avec $N = 50 \, Hz$, $I_m = 70 \, 71 \, mA$ et $\varphi_i = 0$.
   Donc : $i(t) = 70,71 \cos(100 \, t)$.

# Exercice 3

1. Déterminons les impédances $Z_1$ et $Z_2$ :
   On a : $Z = \frac{U}{I}$
   Donc : $Z_1 = \frac{U_1}{I_1} = \frac{2 \, -0}{2 - 0}$
   A.N.: $Z_1 = \frac{(40-0) \times 10^{-3}}{(40-0) \times 10^{-3}} = 50 \, \Omega$
   Et $Z_2 = \frac{U_2}{I_2}$
   A.N.: $Z_2 = \frac{2,8 \, -0}{(40-0) \times 10^{-3}} = 70 \, \Omega$
2. a - Trouvons l'expression et la valeur du produit $LC$
   Puisque $\varphi_{U/I} = 0$, donc la fréquence $N_1$ est celle de la résonance.
3. Donc : $N_1 = N_0$ avec $N_0 = \frac{1}{2\pi \sqrt{LC}}$
   Alors : $\sqrt{L \cdot C} = \frac{1}{2\pi N_1}$
   D'où : $LC = \left(2\pi N_1\right)^{2}$
   A.N.: $LC = 2,81 \times 10^{-5}s^2$
4. b - Calculons la valeur de $R$.
   À la résonance, on a : $Z_0 = R_T$ avec $Z_0 = Z_1$.
   Donc : $R + r = Z_1$ avec $r = 0$.
   On trouve : $R = Z_1 = 50 \, \Omega$.

# Exercice 4

1. D'après la courbe, on trouve : $N_0 = 36 \, Hz$.
2. D'après la courbe, on trouve : $I_0 = 88 \, mA$.
3. Calculons la valeur de $\Delta f$ :
   D'après la courbe, on a : $f_1 = 25 \, Hz$ et $f_2 = 50,4 \, Hz$.
   Donc : $\Delta f = f_2 - f_1$.
   A.N.: $\Delta f = 50,4 - 25,2 = 25,2 \, Hz$.
4. Calculons la valeur de $Z_0$ :
   On a : $Z_0 = \frac{U_0}{I_0}$, avec $U_0 = \frac{U_m}{\sqrt{2}}$.
   Alors : $Z_0 = \frac{\sqrt{U}}{I_0} = \frac{11,3}{0,88 \times 10^{-3}} = 90,8 \, \Omega$.
   A.N.: $Z_0 = \frac{\sqrt{2} \times 88 \times 10^{-3}}{0} = 90,8 \, \Omega$.
   Et puisque $Z_0 = R + r$.
5. Donc : $r = Z_0 - R$.
   A.N.: $r = 90,8 - 85 = 5,8 \, \Omega$.
6. Calculons la valeur de l'inductance de la bobine :
   On a : $N_0 = \frac{1}{2\pi \sqrt{L/C}}$.
   Alors : $L = \frac{1}{4\pi^2 N_0^2 C}$.
   Donc : $\sqrt{L \cdot C} = \frac{1}{2\pi N_0}$.
   Alors : $L = \frac{1}{4\pi^2 N_0^2 C}$.
   A.N.: $L = \frac{4 \times 2^2 \times 36^2 \times 24 \times 10^{-6}}{1} = 0,81 \, H$.
7. Calculons la valeur de $Q$ :
   On a : $Q = \frac{I_0}{\Delta f}$.
   Alors : $Q = \frac{36}{\frac{36}{25,2}} = 1,43$.

# Exercice 5

1. D'après l'expression de la tension $u(t)$, on trouve $N = 10 \, Hz$.
   Et puisque $\varphi_{U/I} = 0$, donc $N_0$ est la fréquence propre des oscillations (fréquence de la résonance).
2. Calculons la valeur de $Z_0$ :
   On a : $Z_0 = \frac{U_0}{I_0}$, avec $U_0 = \frac{U_m}{\sqrt{2}}$.
   Donc : $Z_0 = \frac{U_m}{I_m} = \frac{U_m}{I_m} = 54,54 \,  \Omega$.
3. Calculons la valeur de $R$ :
   On a : $R = Z_0 - r$.
4. Alors : $Z_0 = 20 = 54,54 \, mA$.
   A.N.: $R = Z_0 - r$.
5. A.N.: $R = 54,54 - 8 = 46,54 \, \Omega$.
6. Calculons la valeur de $\Delta f$ :
   On sait que : $\Delta f = \frac{R_T}{2\pi}$. A.N.: $\Delta f = 39,46 \, Hz$.
7. Calculons la valeur du facteur de qualité $Q$ :
   On a : $Q = \frac{I_0}{\Delta f}$. A.N.: $Q = \frac{10}{39,46} = 0,25$.
8. Calculons la puissance moyenne consommée dans ce circuit :
   On a : $P_m = R_T I^2$ avec $I_0 = \frac{I_m}{\sqrt{2}}$.
   Donc : $P_m = R I_m^2 = 54,54 \times (0,4)^2 = 5,28 \, W$.
```

<!-- Page 70 -->

```markdown
# Exercice 6

1. Le schéma ci-dessous montre le branchement des entrées $Y_1$ et $Y_2$ de l'oscilloscope pour visualiser les tensions $u_1(t)$ et $u_2(t)$

2. Déterminons la fréquence du GBF:
   D'après la courbe, on a: $T = 25ms$.
   Donc : $N = \frac{1}{T}$.
   A.N.: $N = \frac{1}{25 \times 10^{-3}} = 40Hz$

   D'après la figure, on a: $u_{mz} = 18V$.
   Avec $U_{mz} = I_m \cdot R$.
   A.N.: $I_m = \frac{U_{mz}}{R} = 50 \, , \, 0.36 A$.
   Donc : $I = \frac{0.36}{\sqrt{2}} \approx 0.25 A$

   D'après la figure (2), on a $U_{m1} = 30V$.
   Et on a: $U_1 = \frac{U_{m1}}{\sqrt{2}}$.
   A.N.: $U_1 = \frac{30}{\sqrt{2}} = 21.21 V$

   D'après la figure (3), on a: $t = 2ms$.
   Et on sait que : $|\varphi_{u_1}| = \frac{2 \pi f}{25}$.
   A.N.: $|\varphi_{u_1}|$.

   Et puisque $\varphi_{u_1} = \varphi_{u_2} = \varphi_1 = 0$.

3. a - Puisque $\varphi_{u/l} = 0$, donc $N'$ représente la fréquence de résonance.

   b - Calculons la valeur de $L$ et celle de $I_0$.
   On a: $I_1 = I_0 \cdot Z'$.
   Donc: $I_0 = \frac{U_{1}}{Z_1}$.
   A.N.: $I_0 = \frac{21.21}{73} \approx 0.29 A$.
   - Calculons $L$:
   On a: $N' = \frac{1}{2\pi\sqrt{LC}}$.
   Donc: $L = \frac{1}{4\pi^2N'^2C}$.
   A.N.: $L = \frac{4\pi^2(40)^2(40 \times 10^{-6})}{1} \approx 0.4 H$.

   c - Calculons la largeur de la bande passante.
   On a: $\Delta f = \frac{R}{2\pi L}$.
   A.N.: $\Delta f \approx 29 Hz$.

# Exercice 7

D'après la figure (3), on a: $N_0 = 65H$.
Calculons la valeur de $Z_1$ et celle de $r$.
On a: $Z_1 = \frac{U}{I_0} = \frac{U_{m}}{\sqrt{2}}$.
Donc: $Z_1 = \frac{U_{m}}{I_0} = 325 \Omega$.
A.N.: $Z_1 = \frac{325}{30} \approx 3.76 \Omega$.

Et on a : $Z_1 = r + R_1$.
A.N.: $r = 3.76 - 1.76 = 1 \Omega$.

Calculons la valeur de $Z_2$ et celle de $R_2$.
On a: $Z_2 = \frac{U_{m}}{I_2}$.
A.N.: $Z_2 = \frac{14.14}{\sqrt{2}} \approx 10.76 \Omega$.

Et on a: $Z_2 = R_2 + r$.
Donc : $R_2 = Z_2 - r$.
A.N.: $R_2 = 104.15 - 10.76 \approx 93.4 \Omega$.

Calculons la valeur de la capacité du condensateur.
On a: $N_0 = \frac{1}{2\pi\sqrt{LC}}$.
Donc: $N_0^{2} = \frac{1}{4\pi^{2}LC}$.
```


<!-- Page 71 -->

```markdown
# Exercice 8

1. Puisque les tensions $u_1(t)$ et $u_2(t)$ sont en phase, donc le circuit se trouve à l'état de résonance.  
   D'après la figure (🔵), on trouve : $T_0 = 5 \, \text{ms}$  
   et on sait que : $N_0 = \frac{1}{T_0}$  
   Donc : $N_0 = \frac{1}{5 \times 10^{-3}} = 200 \, \text{Hz}$  
   Cette fréquence est celle de la résonance.  
   
2. D'après la figure (🔵), on a : $U_{m1} = 20 \, \text{V et} \, U_{m2} = 16 \, \text{V}$  
   Calculons l'impédance du circuit :  
   $Z_0 = \frac{U}{I} \, \text{avec} \, I = \frac{U_{m1}}{\sqrt{2}} \, \text{et} \, I_m = \frac{I}{\sqrt{2}}$  
   Donc : $Z_0 = \frac{U_{m1}}{I_m}$  
   Alors : $Z_0 = R \cdot \frac{U_{m1}}{U_{m2}}$  
   D'où : $Z_0 = R \cdot \frac{U_{m1}}{U_{m2}}$  
   A.N. : $Z_0 = \frac{80 \cdot 20}{16} = 100 \, \Omega$  
   
3. Calculons la valeur de $L$ :  
   On a : $N_0 = \frac{1}{2 \pi \sqrt{L C}}$  
   Donc : $L = \frac{1}{(2 \pi N_0)^2 C}$  
   A.N. : $L = \frac{1}{(2 \pi (200)^{2} \cdot 2 \times 10^{-6})} \approx 2,88 \times 10^{-2} \, H$  

---

# Exercice 9

1. Le résonateur : le circuit RLC série  
   L'excitateur : le GBF  
   D'après le compte de la figure (🔵), on trouve : $I_0 = 176 \, \text{mA}$  
   D'après la courbe de la figure (🔵), on trouve : $N_0 = 188 \, \text{Hz et} \, Z_0 = 48 \, \Omega$  
   
2. Calculons la valeur de $I_m$ et $U_m$  
   - Calculons $I_m$  
     On a : $I_m = \sqrt{2} I_0$  
     A.N. : $I_m = \sqrt{2} \times 176 = 248,9 \, \text{mA}$  
   - Calculons $U_m$  
     On a : $U = Z_0 I_0$  
     Donc : $U_{m} = \frac{Z_0 I_{m0}}{\sqrt{2}}$  
     A.N. : $U_m = 48 \times 248,9 \times 10^{-3} = 11,9 \, V$  

3. Calculons la valeur de $L$ et celle de $r$ :  
   - Calculons $L$  
     On a : $N_0 = \frac{1}{2 \pi \sqrt{L C}}$  
     Alors : $L = \frac{1}{(2 \pi N_0)^2 C}$  
     A.N. : $L = \frac{1}{(2 \pi (188)^{2} \cdot 6 \times 10^{-6})} \approx 0,12 \, H$  

4. Calculons $r$ :  
   On a : $Z_0 = R + r$  
   Donc : $r = Z_0 - R$  
   A.N. : $r = 48 - 40 = 8 \, \Omega$  

5. Déterminons la valeur de $\Delta f$ :  
   On a : $\frac{I_0}{\sqrt{2}} = 124 \, \text{mA}$  
   D'après la courbe de la figure (2), on a : $\Delta f \approx 57 \, \text{Hz}$  

6. Calculons la valeur du facteur de qualité $Q$ :  
   On a : $Q = \frac{I_0}{\Delta f}$  
   A.N. : $Q = \frac{188}{57} \approx 3,3$  

ÉLECTRON & 2BAC-PC & Électricité
```

<!-- Page 72 -->

```markdown
# Transmission d’informations – Modulation d’amplitude

## Objectifs
- Connaître la façon selon laquelle les informations sont transmises.
- Connaître quelques propriétés des ondes électromagnétiques utilisées dans la transmission des informations.
- Connaître les différents types de modulation.
- Connaître le rôle du multiplicateur.
- Connaître le dispositif de démodulation et le rôle de ses composants (filtre passe haut, détecteur d’enveloppe).
- Connaître les conditions nécessaires permettant d’avoir une bonne modulation et démodulation d’amplitude.
- Connaître les composants d’un récepteur radio simple.

## Axes du cours
### Ondes électromagnétiques – transmission d’informations
- Le courant alternatif sinusoidal.
- Le déphasage entre deux courbes sinusoïdales.
- Détermination de déphasage $\varphi_{u/i}$.

### Les oscillations forcées dans un circuit RLC série
- Mise en évidence des oscillations forcées.
- Impédance d’un dipôle RLC.

### La résonance électrique
- Mise en évidence le phénomène de résonance.
- Facteur de qualité.

### La puissance en régime sinusoïdal
- La puissance instantanée.
- La puissance moyenne.
```

<!-- Page 73 -->

```markdown
# I Ondes électromagnétiques–transmission d’informations

① **Caractéristiques des ondes électromagnétiques**

Une onde électromagnétique est composée d’un champ magnétique et un champ électrique se propagent tous deux à la même vitesse.  
Les ondes électromagnétiques sont caractérisées par : une fréquence $f$, une longueur d'onde $\lambda$, et une célérité $v$ tel que : $v = \frac{\lambda}{T}$, avec $f = \frac{1}{T}$.

② **La nécessité de la modulation**

On veut transporter un signal (son, image, musique). Ces signaux ont une basse fréquence de l’ordre de $1KHz$, en fait ces signaux ne peuvent pas être transmises directement pour plusieurs raisons :  
- Les ondes de basse fréquence sont fortement amorties.
- Les antennes réceptrices nécessaires pour captes ces ondes sont irréalisables (onde de fréquence $f = 30KHz$ nécessite une antenne de longueur $L = 5Km$).
- L’intervalle des basses fréquences est très étroits qui a pour effet de rendre l’antenne incapable de sélectionner le signal transmis parmi d'autres. Il y aurait brouillage de l’information.

Ainsi l'idée de transmettre les informations par une onde de fréquence élevée est naturellement apparus.  
Les informations à transmettre (signal modulant) sont alors inscrites dans une onde électromagnétique sinusoïdale de haute fréquence (onde porteuse) ; on obtient ainsi un signal modulé.

③ **Les types de modulation**

La porteuse est une onde électromagnétique sinusoïdale : $P(t) = P_m \cos(2\pi Ft + \varphi)$  
La modulation consiste à transmettre le signal en faisant modifier son amplitude $P_m$ ou sa fréquence $F$ ou bien sa phase $\varphi$.

| Modulation de phase       | Modulation de fréquence                   | Modulation d’amplitude                   |
|---------------------------|------------------------------------------|------------------------------------------|
| $u(t)=U_m \cos(2\pi f t+\varphi(t))$ | $u(t)=U_m \cos(2\pi f(t) t+\varphi)$ | $u(t)=U_m(t) \cos(2\pi f t+\varphi)$ |

---

# II La modulation d’amplitude

① **Principe de modulation d’amplitude**

L’information à transmettre est contenue dans un signal électrique $s(t)$ de basse fréquence BF. Pour le transporter, on utilise une onde porteuse de haute fréquence HF.  
L'amplitude de la porteuse est modulée par le signal informatif de basse fréquence BF. Ceci est effectué par un modulateur d'amplitude.
```

<!-- Page 74 -->

```markdown
## ② Le modulateur d’amplitude

Pour moduler l’amplitude de l’onde porteuse on utilise un multiplicateur AD633 (amplificateur opérationnel) qui réalise le produit du signal informatif décalé $[s(t) + U_0]$ (le signal modulating) par le signal porteuse $P(t)$. 

La tension à la sortie du multiplicateur (tension modulée) est: 
$$
u_s(t) = K \cdot [s(t) + U_0] \cdot P(t)
$$
- $K$: est une constante caractérisant le multiplicateur son unité est: $(V^{-1})$ 
- $U_0$: est la composante continue en: $(V)$

**Remarque**  
On a: 
$$
u_s(t) = K \cdot [s(t) + U_0] \cdot P(t) = P_m \cos(2\pi Ft) 
$$
Donc: 
$$
u_s(t) = [K P_m U_0 \cos(2 \pi Ft)]
$$
Alors: 
$$
u_s(t) = (a \cdot s(t) + b) \cos(2 \pi Ft)
$$
Avec: $a = K P_m$ et $b = K P_m U_0$  
L’amplitude de la tension modulée est: 
$$
U_m(t) = a \cdot s(t) + b 
$$
La modulation d’amplitude consiste rendre l’amplitude de la tension modulée une fonction affine de la tension modulante.

## ③ Application: modulation d’amplitude d’une tension sinusoïdale

### Mise en évidence la modulation d’amplitude
On réalise le montage expérimental suivant : 
- Deux générateurs à basse fréquence $GBF_1$ et $GBF_2$ 
- Un oscilloscope 
- Un multiplicateur $AD633$

**Alimentation symétrique (+15V; -15V)**  
Le $GBF_1$ relié à l’entrée $E_1$ du multiplicateur, délivre une tension $u_1(t) = U_0 + s(t)$; telle que $s(t) = s_m \cos(2\pi ft)$ d’amplitude $s_m = 0.5V$ et de fréquence $f = 200Hz$, et $U_0$ est la composante continue telle que: $U_0 = 1.5V$

Le $GBF_2$ relié à l’entrée $E_2$ du multiplicateur, délivre une tension sinusoïdale $u_2(t) = P_m \cos(2\pi Ft)$ avec $P_m = 10V et F = 20KHz$. Le multiplicateur $AD633$ est alimenté par l’alimentation symétrique $(+15V; -15V)$

À l’aide de l’oscilloscope on visualise les tensions $u_1(t)$, $u_2(t)$ et $u_s(t)$ et on obtient les courbes ci-desous.

### L’expression de la tension modulée
La tension à la sortie du multiplicateur est: 
$$
u_s(t) = K u_1(t) \times u_2(t)
$$
Donc: 
$$
u_s(t) = K (U_0 + s(t)) \cdot P_m \cos(2\pi Ft) 
$$
$$
\Rightarrow u_s(t) = K P_m [U_0 + s_m u_0 \cos(2\pi Ft)] \cos(2\pi Ft)
$$
$$
u_s(t) = A [1 + m \cos(2\pi Ft)] \cos(2\pi Ft) \text{ avec } A = K P_m U_0 \text{ et } m = \frac{s_m}{u_0}
$$
```

<!-- Page 75 -->

```markdown
### Résumé
La tension obtenue à la sortie du multiplieur (modulée) lors de modulation d'amplitude d'une tension sinusoïdale est : 
$$ u_s(t) = A I_1 + m \cos(2\pi ft) \cos(2\pi Ft) $$ 
avec :
- $ f $ : la fréquence de la tension modulante.
- $ F $ : la fréquence de la porteuse.
- $ A $ : est constante positive et $ V(t) $ tel que $ A = KP_m U_0 $ avec $ k $ un facteur caractérisant le multiplieur, $ P_m $ l'amplitude de la porteuse, et $ U_0 $ est la composante continue.
- $ m $ : est le taux de modulation tel que : $ m = \frac{s_m}{U_0} $ où $ s_m $ est l'amplitude de la tension modulante.

### Qualité de modulation
On définit le taux de modulation par :
$$ m = \frac{s_m}{U_0} = \frac{U_{max} - U_{min}}{U_{max} + U_{min}} $$
avec :
- $ U_{max} $ : est la valeur maximal de la tension modulée.
- $ U_{min} $ : est la valeur minimale de la tension modulée.
Le taux de modulation $ m $ : est une constante positive sans unité.
Pour réaliser une modulation d'amplitude de bonne qualité, l'enveloppe du signal modulé doit reproduire les variations du signal modulant en termes de forme et de fréquence.
En général la modulation d'amplitude est de bonne qualité si:
- Le taux de modulation est : $ m < 1 \ (c.à.d. \ s_m < U_0) $
- La fréquence de la porteuse est très supérieure à celle de la modulation $ F \gg f $ (ou moins $ F \geq 10 f $)

### Remarque
Lorsque l’oscilloscope est utilisé en mode XY, et on visualise la tension modulante 
$$ (s(t) + U_0) $$ 
et la tension modulée 
$$ (u_s(t)) $$ 
respectivement aux voix X et Y, on constate que :
- L’oscillogramme obtenue a la forme d’un trapèze lorsque la modulation est de bonne qualité.
- L’oscillogramme obtenue n’a pas la forme d’un trapèze lorsque la modulation est de mauvaise qualité.

### III La démodulation d’amplitude
#### ① Principe de démodulation d’amplitude
- La démodulation d’amplitude consiste à récupérer le signal informatif qui est contenu dans la partie supérieure de l’enveloppe du signal modulé en amplitude.
- La démodulation d’amplitude s’opère en deux parties :
  
### Détection d’enveloppe
Le montage utilisé nommé détecteur d'enveloppe est constitué par:
- Une diode qui bloque les alternances négatives
- Un filtre passe-bas (diode RC parallèle) qui élimine la partie restante de la porteuse.

Pour que la détection d’enveloppe est de bonne qualité il faut que la constante du temps du filtre passe bas vérifie la condition suivante : 
$$ T_P \ll RC \leq T_s $$ 
avec 
- $ T_S $ : est la période de la tension modulante.
- $ T_P $ : est la période de la porteuse.
```

<!-- Page 76 -->

```markdown
## ✧ La suppression de la composante continue

Le montage utilisé comporte un filtre passe-haut (dipôle RC série) qui ne laisse passer que les tensions de fréquences élevées et élimine la composante continue (de fréquence nulle).

### ② Le montage de démodulation

![Détection d'enveloppe](image-url)  
![Suppression de $U_0$](image-url)  
$u_e(t)$

## IV La Les éléments d’un récepteur radio AM

### ① Le filtre passe bande

Le filtre passe-bande permet de sélectionner l’onde radio issue de la station choisie.  
Pour sélectionner un signal émet, il faut faire un accord entre la fréquence propre $f_0$ du circuit $LC$ parallèle et la fréquence $F_P$ portee de la station $F_p = f_0 = \frac{1}{2\pi\sqrt{LC}}$  
Cette sélection se fait en faisant varier le coefficient d'induction $L$ de la bobine ou la capacité $C$ du condensateur.

### ② Les éléments d’un récepteur radio AM simple

Un modèle de réception radio (AM) est représenter par le schéma ci-dessous dans lequel on distingue cinq parties :  
- Une antenne réceptrice d’ondes radio qui capte les signaux modulés en amplitude.  
- Un filtre passe-bande pour sélectionner la station souhaitée.  
- Un module d'amplification du signal modulé sélectionné.  
- Un circuit démodulateur d’amplitude formé d’un détecteur d’enveloppe et un filtre passe-haut.  
- Un dispositif d’écoute (haut-parleur).
```

<!-- Page 77 -->

```markdown
# LES ÉLÉMENTS D'UN RÉCEPTEUR RADIO AM

## La réception
  
![Antenne réceptrice](#)
  
## La sélection
## L'amplification
## Circuit de démodulation

---

## Exercice 1
### Répondre par vrai ou faux
- La transmission d’information sur des longues distances se fait par transport de matière et d'énergie.
- Pour transmettre une information de basse fréquence à longues distances, on utilise une onde sonore ou une onde électromagnétique.
- Lors de la modulation, le signal informatif modifie l’une des caractéristiques de l’onde porteuse.
- L’onde électromagnétique captée par une antenne et le signal électrique qui en résulte ont différentes.
- La tension à la sortie du multiplicateur est une fonction affine du signal informatif.
- La modulation est de bonne qualité lorsque la fréquence de la porteuse et celle de la tension modulante sont de même ordre.
- La modulation est de bonne qualité lorsque $u_s = f(u_e)$ à la forme d’un trapèze ($u_e$ est la tension à l’entrée du multiplicateur et $u_s$ la tension à sa sortie).
- Lors de la démodulation la diode élimine la partie négative de la tension modulée.
- Les ondes radio sont sélectionnées à l’aide d’un circuit RLC parallèle et entretenue.
- Le filtre passe bas est utilisé dans le montage de démodulation pour éliminer la composante continue.

---

## Exercice 2
L’expression d’une tension modulée est: 
$$ u(t) = a \cos(200 \pi t) \cos(17 \times 10^{17} \pi t) $$
- De quel type de modulation s'agit-il, une modulation d'amplitude ou de fréquence. Justifier la réponse.
- Déterminer la fréquence de la porteuse et celle du signal modulant.
- Peut-on écouter le signal transmis (s'il s'agit un signal sonore) ?

---

## Exercice 3
L’expression d’un signal modulé est: 
$$ u(t) = 2[1 + 0.8 \cos(160 \pi t)] \cos(25000 \pi t) $$
- Ce signal est-il modulé en amplitude, en fréquence ou en phase ? Justifier votre réponse.
- Déterminer la fréquence $F$ de la porteuse et la fréquence $f$ du signal modulant.
- Déterminer le taux de modulation $m$.
- Que peut-on dire à propos de la qualité de modulation ?

---

## Exercice 4
À l’aide d’un multiplicateur on réalise la modulation d’amplitude d’une porteuse $P(t) = 4 \cos(2 \times 10^4 t)$ par une onde modulante 
$$ u(t) = 2 \cos(4 \times 10^{2} \pi t) + 3. $$
- Trouver l’expression de la tension $V(t)$ à la sortie du multiplicateur et déduire la valeur maximale et la valeur minimale de son amplitude. 
On donne la constante du multiplicateur $K = 1.5V^{-1}$.
- Déterminer la fréquence $F$ de la porteuse et la fréquence $f$ du signal modulant.
- Calculer le taux de modulation $m$.
- Que peut-on dire à propos de la qualité de modulation ? Justifier la réponse.
```

<!-- Page 78 -->

```markdown
# Exercice 5

La figure ci-contre indique les variations d’une tension modulante $u(t) = s(t) + U_0$ et d’une tension modulée en amplitude $u_s(t)$.

- $u(V)$, $u_s(V)$

1. Calculer la fréquence de la porteuse et celle de la modulante.
2. Calculer le taux de modulation $m$.
3. La modulation est-elle de bonne qualité ? Justifier la réponse.
4. Déterminer la tension de décalage $U_0$.
5. L’expression de l’amplitude de la tension modulée est : 
   $$U_s(t) = A[1 + m \cos(2 \pi f t)]$$
   a) Trouver l’expression de la constante $A$ en fonction de $U_{sam}$ et $m$  
   b) Écrire l’expression de la tension modulée en fonction du temps.

---

# Exercice 6

Soit une tension modulée en amplitude : 
$$u_s(t) = A[1 + m \cos(2 \pi f t)] \cos(2 \pi F t)$$
La figure ci-contre représente les variations de la tension $u_s(t)$ en fonction du temps.

- $u_s(V)$

1. Calculer la fréquence de la porteuse $F$ et la fréquence $f$ de la modulante.
2. Déterminer la valeur maximale et la valeur minimale de l’amplitude de la tension modulée.
3. Trouver l’expression du taux de modulation $m$ en fonction de $U_{max}$ et $U_{min}$ puis calculer sa valeur.
4. Que peut-on dire à propos de la qualité de modulation ? Justifier la réponse.
5. Déterminer l’expression de la tension moulée $u_s$, en fonction du temps.

---

ÉLECTRON & 2BAC-PC & Électricité 78
```

<!-- Page 79 -->

```markdown
## Exercice 7

Pour réaliser la modulation d’une porteuse $P(t) = P_m \cos(2\pi Ft)$ par un signal sonore $u(t) = S_m \cos(2\pi ft) + U_0$ on utilise la montarge de la figure ②.

Un oscilloscope utilisé en mode XY permet d’obtenir la courbe de la figure @ et représente $u_s = f(u)$ ou $u$ est la tension modulée et $u_s$ est la tension modulante.

1. Quel est le nom de la composante électronique $X$ utilisée dans le montage ② et quel est son rôle ?
2. Montrer que la tension modulée peut s’écrire sous la forme suivante: $u_s(t) = A[1 + m \cos(2\pi ft)] \cos(2\pi Ft)$. 
   En précisant les expressions de $A$ et $m$ en fonction de $S_m$, $P$, $F$, $k$ et $U_0$.
3. Que peut-on dire à propos de la qualité de modulation ?
4. On pose $a = S_m + U_0$ et $b = -S_m + U_0$. En exploitant la courbe de la figure déterminer les valeurs de $a$, $U_{smin}$ et $U_{smax}$.
5. Calculer la tension de décalage $U_0$ et celle $S_m$.
6. Calculer le taux de modulation.
7. Trouver l’expression de la constante $A$ en fonction de $U_{smin}$ et $U_{smax}$ puis calculer sa valeur.

## Exercice 8

Pour recevoir un signal électromagnétique $u_s(t) = 8[1 + 0.6\cos(2 \times 10^2\pi t)]\cos(10^4\pi t)$ modulé en amplitude, on utilise le montage schématisé dans la figure ①: La figure ci-contre représente les variations de la tension $u_s(t)$ en fonction du temps.

1. Déterminer la fréquence du signal informatif et celle de la porteuse.
2. Déterminer la valeur du taux de modulation $m$. Commenter le résultat.
3. Nommer les trois parties du montage de la figure en précisant le rôle de chaque partie.
4. Déterminer la valeur de l’inductance de la bobine pour que le dipôle $LC$ soit capable sélectionner le signal modulé. On donne $C = 5nF$.
5. Sachant que: $R_1 = 45k\Omega$, déterminer parmi les valeurs suivantes, la valeur de la capacité $C_1$ pour que la détection d’enveloppe soit de bonne qualité: $3nF$, $5nF$, $60nF$, $220nF$, $320nF$.
```

<!-- Page 80 -->

```markdown
# Exercice 9
Pour transmettre un signal de basse fréquence, on réaliser le montage de la figure ①  
On applique à l'entrée $E_1$ de la composante $X$, une tension électrique $u_1(t) = P_m\cos(2000\pi t)$ et à son entrée $E_2$, une tension $u_2(t) = s(t) + S_m\cos(200\pi t)$  
Un système informatique convenable a permis d’obtenir la courbe de la figure ② qui représente $u_s = f(\cos(200\pi t))$

1. Nommer la composante électronique $X$ utilisée dans le montage ① et identifier son rôle ?  
2. Montrer que l’amplitude de la tension modulée peut s’écrire sous la forme suivante: $U_s(t) = a \cos(200\pi t) + b$ en précisant les expressions de $a$ et $b$ en fonction de $K, P_m,$ et $S_m$.  
3. En expliquant la courbe de la figure ② déterminer la valeur de $u_0$ et $S_m$. On donne $P_m = 4V$ et $K = 1V^{-1}$  
4. Déterminer la fréquence de la porteuse et celle de la tension modulante.  
5. Calculer le taux de modulation. Commenter le résultat.  

# Exercice 10
Les ondes sonores audibles ont une faible fréquence, leur transmission à des longues distances nécessite qu’elle soit modulante à une onde électromagnétique de haute fréquence.  
I : La modulation d’amplitude  
Pour étudier la modulation d’amplitude, au cours d’une séance de TP, le professeur a utilisé avec ses élèves; un multiplicateur $(X)$ en appliquant une tension sinusoïdale $u_1(t) = P_m\cos(2\pi Ft)$ à son entrée $E_1$ et une tension $u_2(t) = s_m\cos(2\pi Ft) \quad u_0$ est la composante continue de la tension.  
La courbe de la figure ② représente la tension de sortie $u_s(t) = k \cdot u_1(t), u_2(t)$ visualisée sur l’écran de l’oscilloscope, avec $k$ est une constante positive caractérisant le multiplicateur $(X)$  

1. La modulation d’amplitude  
   - Montrer en précisant les expressions de $A$ et $m$, que la tension modulée $u_s(t)$ s’écrit sous la forme $u_s(t) = A_1 + m\cos(2\pi Ft)\cos(2\pi Ft)$  
   - Trouver l’expression du taux de modulation $m$ en fonction de $U_{min}$ et $U_{max}$.  
2. En exploitant la courbe de la figure ②:  
   - a - Déterminer les fréquences $F$ et $f$.  
   - b - Déterminer le taux de modulation $m$.  
   - c - Que peut-on dire sur la qualité de modulation ?  
3. Expliquer comment vérifier que la modulation est de bonne qualité à l’aide de l’oscilloscope  
II : La démodulation d’amplitude  
Pour recevoir l’onde modulée en amplitude le professeur et ses élèves utilisent le dispositif simplifié ci-contre (figure ③)  
1. Identifier le rôle de chaque partie.  
2. Sachant que $L = 6mH$, calculer la valeur de la capacité $C$ pour que le circuit de la partie I soit capable de sélectionner le signal modulé.  
3. Pour réaliser une détection en enveloppe de bonne qualité, on utilise un condensateur de capacité $C_1 = 20nF$ et un conducteur ohmique de résistance $R_1$. Parmi les valeurs suivantes déterminer la résistance $R_1$: $680K\Omega, 490K\Omega, 20K\Omega, 160K\Omega, 10K\Omega$  
```

<!-- Page 81 -->

```markdown
# Exercice 11
Afin d’obtenir un signal modulé en amplitude, on applique à l’entrée $E_1$ d’un multiplicateur une tension
$$ u_1(t) = s_m \cos(2\pi Ft) + U_0 $$
et à l’entrée $E_2$ une tension 
$$ u_2(t) = P_m \cos(2\pi Ft) . $$
La tension à la sortie du multiplicateur est : $u_s(t) = k \cdot u_1(t) \cdot u_2(t)$

$$
\text{Montrer que } u_s(t) = \frac{2Am}{2} \cos(2\pi f_1 t) + \frac{4m}{2} \cos(2\pi f_2 t) + A \cos(2\pi f_3 t)
$$
en précisant les expressions de $f_1$, $f_2$ et $f_3$ en fonction de $F$ et de $PM$, $U_0$ et $k$.

1. La figure ci-contre le spectre de fréquence formé de trois rails de la tension modulée $U$. Déterminer les valeurs des fréquences $f_1$, $f_2$ et $f_3$ en celle de $m$.
2. Calculer les fréquences $F_f$.
3. Pour une bonne réception du signal modulé, on utilise un circuit bouncircuit (circuit d'accord) formé d’une bobine d’inductance $L = 60mH$ et de résistance négligeable et deux condensateurs montés en série, de capacité $C_1 = 3.5nF$ et $C_2$. Déterminer la valeur de $C_2$.

On donne: 
$$ 
\cos(a) \cdot \cos(b) = \frac{1}{2} \left[ \cos(a + b) + \cos(a - b) \right] 
$$

---

# Correction 

## Exercice 1
0. Répondre par vrai ou faux
- La transmission d’information sur des longues distances se fait par transport de matière et d’énergie. Faux
- Pour transmettre une information de basse fréquence à longues distances, on utilise une onde sonore ou une onde électromagnétique. Faux
- Lors de la modulation, le signal informatif modifie l’une des caractéristiques de l’onde porteuse. Vrai
- L’onde électromagnétique captée par une antenne et le signal électrique qui en résulte ont des fréquences différentes. Faux
- L’amplitude de la tension modulée est une fonction affine de la tension modulée. Vrai
- La modulation est de bonne qualité lorsque la fréquence de la porteuse et celle de la tension modulée son de même ordre. Faux
- La modulation est de bonne qualité lorsque $u_s = f(u_e)$ à la forme d'un trapèze ($u_e$ est la tension à l’entrée du multiplicateur et $u_s$ la tension à sa sortie). Vrai
- Lors de la démodulation la diode élimine la partie négative de la tension modulée. Vrai
- Les ondes radio sont sélectionnées à l’aide d’un circuit RLC parallèle et entretenue. Vrai
- Le filtre passe bas est utilisé dans le montage de démodulation pour éliminer la composante continue. Faux

---

## Exercice 2
1. Il s'agit d'une modulation d'amplitude, car l'amplitude de la tension $u(t)$ varie avec le temps.
2. Déterminons la fréquence de la porteuse et celle du signal modulant : 
   - On a : $ a : 2\pi Ft = 17 \times 10^{17} \pi t $
   - Alors : $ F = \frac{17 \times 10^{17}}{2} $ 
   - D'où : $ F = 8.5 \times 10^{17} \text{ Hz} $
   - La fréquence du signal transformé est: $ F = 8.5 \times 10^{17} \text{ Hz} $
   - Donc $ F \gg 20 \text{ KHz},$ alors, on ne peut pas écouter ce signal.

---

## Exercice 3
1. Le signal est modulé en amplitude, car son amplitude varie avec le temps.
2. Déterminons la fréquence de la porteuse et celle du signal modulé :
   - On a : $ u(t) = 2(1 + m \cos(160 \pi t)) \cos(25000t) $
   - Et on a : $ u(t) = A(1 + m \cos(2\pi Ft)) \cos(2\pi Ft) $
   - Donc $ 2\pi Ft = 160\pi t$ est $ f = 80 \text{ Hz} $
   - D'après l'expression de $ u(t) $, le taux de modulation est : $ m = 0.8 $
   - Puisque $ m < 1 \text{ et } F \gg  $, alors la modulation est de bonne qualité.
```

<!-- Page 82 -->

```markdown
# Exercice 4

## Trouvons l'expression de la tension modulée :
On a : $ v(t) = K \cdot u(t) \times P(t) $

$$ v(t) = 1,5 \times 2\cos(4 \times 10^2\pi t) + 3\cos(2 \times 10^2\pi t) $$
⇔ $ v(t) = 1,5 \times 4 \times 10^2 \left[\frac{2}{3} \cos(4 \times 10^2\pi t) + 1\right] \cos(2 \times 10^4\pi t) $

$$ v(t) = 18 \times \left[\frac{2}{3} \cos(4 \times 10^2\pi t) + 1\right] \cos(2 \times 10^4\pi t) $$

* L'amplitude de la tension modulée est : $ V = 18 \times \frac{2}{3} \cos(4 \times 10^2\pi t) $
* Cet amplitude atteint sa valeur maximale lorsque : $\cos(4 \times 10^2\pi t) = 1$
Donc : $ v_{\max} = 18 \times \frac{2}{3} + 18 = 30V $

* L'amplitude atteint sa valeur minimale lorsque : $\cos(4 \times 10^2\pi t) = -1 $
Donc : $ v_{\min} = 18 \times \left[\frac{2}{3} + 1\right] = 6V $

## Calculons la fréquence de la porteuse et celle de la tension modulée
D'après l'expression de la tension modulée, on a : $ 2 \pi f_t = 4 \times 10^2\pi \Rightarrow f_t = 2 \times 10^2 Hz $

D'après l'expression de la porteuse, on a : $ 2 \pi Ft = 2 \times 10^4\pi \Rightarrow F = 10^4 Hz $

# Exercice 5

## Calculons la fréquence de la porteuse et celle de la tension modulante
D'après la courbe, on a : $ T_s = 2 \times 5 \times 10^{-2} s $ et $ T_p = 1 \times 10^{-3} s $
On a : $ f = \frac{1}{T_s} \Rightarrow f = 1 \times 10^{-2} = 100 Hz $

Et : $ F = \frac{1}{T_p} \Rightarrow F = 1 \times 10^{3} Hz $

## Calculons la valeur du taux de modulation $ m $
D'après la courbe, on a : $ U_{\max} = 9V $ et $ U_{\min} = 3 V $
Et on sait que : $ m = \frac{U_{\max} - U_{\min}}{U_{\max} + U_{\min}} \Rightarrow A.N.: m = \frac{9-3}{9+3} = 0,5 $

La modulation est de bonne qualité car $ m < 1 \text{ et } f' > f $

### a - Trouvons l'expression de $ A $
On a : $ U_s = A[1 + m\cos(2\pi ft)] $
Cet amplitude atteint par valeur maximale lorsque $\cos(2\pi ft) = 1$
Donc : $ U_{\max} = A(1 + m) $

Alors : $ A = \frac{9}{1 + 0.5} = 6 V $

### b - L'expression de la tension modulée est : $ u_t(t) = A[1 + m\cos(2\pi ft)]\cos(2\pi Ft) $
Avec $ A = 6 V, m = 0,5, F = 10^3 Hz, \text{ et } f = 10^2 Hz $
Donc : $ u_s(t) = 6[1 + 0.5\cos(2\times 10^2\pi t)]\cos(2 \times 10^3\pi t) $

# Exercice 6

### a - Calculons les fréquences $ F $ et $ f $
D'après la courbe, on a : $ T_s = 8 ms $ et $ T_p = 0,33 ms $
On a : $ f = \frac{1}{T_s} \Rightarrow A.N.: f = \frac{1}{8 \times 10^{-3}} = 125 Hz $

Et on a : $ F = \frac{1}{T_p} \Rightarrow A.N.: F = \frac{1}{0.33 \times 10^{-3}} = 3 \times 10^3 Hz $

## Déterminons les valeurs de $ U_{\max} $ et $ U_{\min} $
D'après la courbe, on a :
$ U_{\max} = A(1 + m) $ et $ U_{\min} = A(1 - m) $
Donc : $ (U_m + U_0) + (-U_m + U_0) = 6 + 0,8 \Rightarrow 2 U_0 = 6,8 $
Alors : $ U_0 = 3,4 V $

### Trouvons l'expression de m
L’expression de l’amplitude de la tension modulée est : $ U(t) = A[1 + m\cos(2\pi ft)]\cos(2\pi Ft) $
Donc $ u_s(t) $ est maximal si $\cos(2\pi Ft) = 1 $

Alors : $ U_{\max} = A(1 + m) $ et $ U_{\min} = A(1 - m) $
Donc : $ U_{\max} - U_{\min} = 2Am \text{ (b) } $
Alors: $ (b) \Rightarrow \frac{U_{\max} - U_{\min}}{(a)} = \frac{2Am}{U_{\max} + U_{\min}} $

Finalement on trouve : $ m = \frac{U_{\max} - U_{\min}}{U_{\max} + U_{\min}} $
A.N.: $ m = \frac{5.3 - 1.7}{5.3 + 1.7} = 0,51 $
La modulation est de bonne qualité
La modulation est de bonne qualité, car $ m < 1 \text{ et } f' > f $
```

<!-- Page 83 -->

```markdown
# Déterminons l'expression de la tension modulé en fonction du temps.
La modulation est de bonne qualité, car $m < 1 < F \, \$ f.
On a : $u_s(t) = A[1 + m \cos(2\pi Ft)]\cos(2\pi Ft)$
Avec $m = 0.51, \, F = 125 \, Hz, \, F = 3 \times 10^3 \, Hz$,
et $A = \frac{u_{max}}{m + 1} = \frac{5.3}{0.51 + 1} \approx 3.5 \, V$
Donc : $u_s(t) = 3.51 + 0.51 \cos(250\pi t) \cos(6 \times 10^3 t)$

## Exercice 7
1. La composante électronique $X$ est appelée multiplicateur.
   Cette composante permet d'obtenir à sa sortie une tension $u_s(t)$ proportionnelle au produit de la tension modulante $u(t)$ et la porteur $p(t)$.
   
2. La tension à la sortie du multipliateur est :
   $$ u_s(t) = K(u_0 + s(t)) \times p_m \cos(2\pi Ft) $$
   $$ \Leftrightarrow \quad u_s(t) = K_p [u_0 + s_m \cos(2\pi Ft)] \cos(2\pi Ft) $$
   $$ u_s(t) = K_p m_0 \left[1 + \frac{s_m}{u_0} \cos(2\pi Ft)\right] \cos(2\pi Ft) $$
   Avec $A = K_p m_0 et \, m = \frac{s_m}{u_0}$

3. La modulation est de bonne qualité, car la courbe de $u_s(t) = f(u)$ a la forme d’un trapèze
   D’après la courbe $u_s(t) = f(u)$, on a $a = 9 \, V, \, b = 3 \, V, \, S_{max} = 18 \, V et \, S_{min} = 6 \, V$.
   
4. Calculons la valeur de $U_0$ 
   On a : $a = S_m + U_0 - (-S_m + U_0)$
   Donc : $a - b = S_m + U_0 + S_m - U_0$
   Alors : $a - b = 2S_m$
   A.N. : $S_m = \frac{a - b}{2} = 3 \, V$
   
5. Calculons la valeur du taux de modulation :
   On a : $m = \frac{S_m}{U_0}$
   A.N. : $m = \frac{3}{6} = 0.5$

6. Trouvons l’expression de $A$ 
   $$U_s(t) = A[1 + m \cos(2\pi ft)]$$
   Donc : $U_s(t)$ est maximal lorsque $\cos(2\pi ft) = 1$, alors : $U_{max} = A(1 + m)$
   Et $U_s(t)$ est minimal lorsque $\cos(2\pi ft) = -1$, alors : $U_{min} = A(1 - m)$
   
   D'où : $U_{max} + U_{min} = A(1 + m) + A(1 - m)$
   $U_{max} + U_{min} = A + A m + A - A m = 2A$
   Alors : $A = \frac{U_{max} + U_{min}}{2} = 12 \, V$ 

## Exercice 8
1. Déterminons la fréquence du signal modulé et celle de la porteuse.
   On a : $U_s(t) = 8[1 + 0.8 \cos(2 \times 10^2\pi)]\cos(10^4 \pi)$
   Et on sait que : $U_s(t) = A[1 + m \cos(2\pi Ft)]\cos(2\pi Ft)$
   Alors : $2\pi f = 2 \times 10^2 \Rightarrow f = 10^3 \, Hz$ 
   Et on a : $2\pi Ft = 10^4\pi \Leftrightarrow F = \frac{10^4}{2\pi} = 5 \times 10^3 \, Hz$

2. D'après l'expression de la tension modulée, on trouve : $m = 0.6$
   
3. Identification des trois parties du montage
   - La partie I: Appelée le filtre passe-bande, elle comporte:
     - Une antenne réceptrice qui capte les ondes électromagnétiques.
     - Un dipôle $LC$ parallèle qui sélectionne les ondes électromagnétiques de fréquence $F = f$, où $f_0$ est la fréquence propre du dipôle $LC$.
   - La partie II: Appelé détecteur d’enveloppe, elle comporte:
     - Une diode qui sert à éliminer la partie négative de la tension modulée.
     - Un filtre passe-bas (RC parallèle) qui sert à éliminer le reste et la suppression de la composante continue $U_0$.

4. Calculons la valeur de $L$ 
   Le dipôle $LC$ capte le signal modulé, donc : $f_0 = F \; avec \; f_0 = \frac{1}{2\pi \sqrt{LC}}$
   $$ \Rightarrow L = \frac{1}{(2\pi F)^2}$$
   $$ L = \frac{1}{(2\pi F)^2}$$
   A.N. : $L = \frac{(2\pi \times 5 \times 10^3)}{2} \approx 0.2 \, H$

5. La détection d’enveloppe est de bonne qualité lorsque :
   $$ T_p \ll R_1 \ll R_2 \ll S $$
   $$ \Rightarrow \frac{1}{R_1} \ll C_1 \leq \frac{1}{R_1} $$
   
   $$ 5000 \times 45 \times 10^3 \Rightarrow 4.4 \, nF < C_1 < 102 < 45 \times 10^3 $$
   Donc, la valeur de la capacité convenable est : $C_1 = 220 \, nF$
```

<!-- Page 84 -->

```markdown
# Exercice 9

1. La composante électronique $X$ est appelée multiplicateur. Cette composante permet d’obtenir à sa sortie une tension $u_s(t)$ proportionnelle au produit de la tension modulante $u_2(t)$ et la porteur $u_1(t)$.
   Montrons que l’amplitude de la tension modulée est: $u_s(t) = a \cos(200\text{ nt})$
   $ \Rightarrow u_s(t) = k \cdot P_m \cdot [S_m \cdot \cos(200\text{ nt}) + U_0] \cdot \cos(200\text{ nt})$
   Alors, l’amplitude de la tension $u_s(t)$ est: $U_s(t) = k \cdot P_m \cdot [S_m \cdot \cos(200\text{ nt}) + U_0]$
   D’où: $U_s(t) = a \cos(200\pi t)$ avec: $a = k \cdot P_m \cdot U_0$

2. D'après la courbe de la figure (➌), on a: $a = \frac{20 - 3}{1} = 12 \text{ V et } b = 20 \text{ V}$
   Donc: $S_m = \frac{a}{k \cdot P_m} \Rightarrow k = \frac{b}{k \cdot P_m}$
   A.N.: $S_m = \frac{3 \text{ V et } U_0 = 20}{1 \text{ V}} = 5 \text{ V}$

3. Déterminons les fréquences $F$ et $f$.
   D’après l’expression de la porteuse, on a: $2\pi F t = 2000\pi t \Leftrightarrow F = 10^3 \text{ Hz}$
   On a: $2\pi f = 200\text{ nt} \Rightarrow f = 10^2 \text{ Hz}$

4. Calculons la valeur de $m$.
   On a: $m = \frac{S_m}{U_0} \text{ A.N.: } m = \frac{3}{5} = 0,6$
   Puisque $m < 1 \text{ et } F > f$, donc la modulation est de bonne qualité.

# Exercice 10

1. La modulation d’amplitude
   La tension à la sortie du multiplicateur est: $u_s(t) = K_1(u(t) \ast u_2(t)) \Rightarrow p_m \cdot \cos(2\pi Ft)$
   $$ u_s(t) = K_P U_0[U_0 + \delta(t)] \cos(2\pi Ft) $$

   Donc: $u_s(t) = K_P U_0 + S_m \cos(2\pi Ft)$
   $$ u_s(t) = K_P U_0 + \frac{S_m}{U_0} \cos(2\pi Ft) $$
   Donc: $u_s(t) = A_1 + m \cos(2\pi Ft)$

   Avec $A = K_P m U_0$ et de $m = \frac{S_m}{U_0}$

2. Trouvons l’expression de $m$.
   L’expression de l’amplitude de la tension modulée est: $U(t) = A_1 + m \cos(2\pi Ft) \cos(2\pi Ft)$
   Donc $u_s(t)$ est maximal si $m \cos(2\pi t) = 1 \text{ et } u_s(t)$
   Alors: $U_{s_{\text{max}}} = A(1 + m)$ et $U_{s_{\text{min}}} = A(1 - m)$
   Donc: $U_{s_{\text{max}}} + U_{s_{\text{min}}} = A(1 + m) + A(1 - m)$
   $\Rightarrow U_{s_{\text{max}}} + U_{s_{\text{min}}} = 2A$

   Et on a: $U_{s_{\text{max}}} - U_{s_{\text{min}}} = A(1 + m) - A(1 - m) \Rightarrow U_{s_{\text{max}}} - U_{s_{\text{min}}} = 2Am$
   Finalement on trouve: $m = \frac{U_{s_{\text{max}}} - U_{s_{\text{min}}}}{U_{s_{\text{max}}} + U_{s_{\text{min}}}}$

3. À - Déterminons la valeur de $f$ et celle de $F$.
   D’après la courbe de la figure (➌), on a: 
   $$T_s = 10 \text{ ms et } T_P = 1 \text{ ms}$$
   On sait que: $f = \frac{1}{T_s} = F = \frac{1}{T_P}$
   A.N.: $f = \frac{1}{10^3} = 102 \text{ Hz}$
   Et $F = \frac{1}{1 \times 10^{-3}} = 10^3 \text{ Hz}$

4. Calculons la valeur de $C$.
   Le dipôle LC sélectionne le signal modulé lorsque $f_0 = F \Rightarrow C = \frac{1}{2\pi F L}$
   D'où: $A.N.: C = \left(2\pi(10^3)^2\cdot6 \times 10^{-3}\right)^{-1} = 4,22 \times 10^{-6} F$

5. Calculons la valeur de $R_1$.
   La détection de l'enveloppe est de bonne qualité si: $T_P < R_1 < T_s$
   $$ T_P < R_1 < T_s \Rightarrow \Rightarrow 10^{-3} < R_1 < 2 \times 10^{-3}$$
   $5 \times 10^4 < R_1 < 500 k \Rightarrow \text{ Donc la valeur de la résistance convenable est: } R_1 = 490 \text{ k}
```

<!-- Page 85 -->

```markdown
# Exercice 11

Nous montrons l'expression de $u_s(t)$ :
- On a : $u_s(t) = k \cdot u_1(t) + u_2(t)$
- Donc $u_s(t) = k [s_m \cos(2\pi Ft) + U_0] P_m \cos(2\pi Ft)$
  
$$
u_s(t) = k P_m u_0 \left[\frac{s_m}{U_0} \cos(2\pi Ft) + 1\right] \cos(2\pi Ft)
$$

- $u_s(t) = A m \cos(2\pi Ft) + 1 \cos(2\pi Ft)$ avec $A = k P_m U_0$

$$
u_s(t) = A m \cos(2\pi Ft) \cos(2\pi Ft) + A \cos(2\pi Ft)
$$

- $u_s(t) = \frac{Am}{2} \left[ \cos(2\pi(F - f)t) + \cos(2\pi(F + f)t) \right] + A \cos(2\pi Ft)$

$$
u_s(t) = \frac{Am}{2} \cos(2\pi(F - f)t) + \frac{Am}{2} \cos(2\pi(F + f)t) + A \cos(2\pi Ft)
$$

D'après la courbe, on a : $f_1 = 11 \, \text{kHz}, f_2 = 14 \, \text{kHz}, f_3 = 12,5 \, \text{kHz}$ et $f_1 = F - f$ et $f_2 = F + f$ et $f_3 = F$.

Donc : 
- $m = \frac{2^4}{A} = 0,67$

## Calculons $F$ et $f$ :
- On a : $F = f_3 = 12,5 \, \text{kHz}$
- Et : $f_1 = F - f$

Donc : $f = F - f_1$  
A.N. : $f = 12,5 - 11 = 1,5 \, \text{kHz}$

## Calculons la valeur de la capacité $C_2$ :
Le dipôle LC sélectionne le signal modulé lorsque $f = F$.

Donc : 
$$
F = \frac{1}{2\pi \sqrt{L C_q}} \quad \text{donc} \quad C_q = \frac{1}{(2\pi F)^2 L}
$$

A.N. : 

$$
C_q = \left( \frac{(2\pi \cdot 12,5 \cdot 10^3)^2}{60 \times 10^{-3}} \right) \approx 2,7 \times 10^{-9} F = 2,7 \, \text{nF}
$$

Les deux condensateurs sont montés en série donc : 

$$
\frac{1}{C_2} = \frac{1}{C_q} + \frac{1}{C_1}
$$

D'où : 
$$
C_2 = \frac{C_q C_1}{C_q - C_1}
$$
A.N. : 

$$
C_2 = \frac{3,5 \times 2,7}{3,5 - 2,7} = 11,81 \, \text{nF}
$$
```

<!-- Page 86 -->

```markdown
# Transformations liées aux réactions acido-basiques dans une solution aqueuse

## Objectifs
- Connaître la réaction d'autoprotolyse de l'eau et savoir déterminer sa constante d'équilibre.
- Savoir exploiter l'échelle de pH pour classer les solutions acides, basiques et neutres.
- Connaître la constante d'acidité un couple acide/base.
- Savoir déterminer la constante d'équilibre d'une réaction acido-basique en fonctions des constantes d'acidité des couples acide/base.
- Connaître et exploiter la relation 
$$ pH = pK_A + \log\left( \frac{[A^-]}{[HA]} \right) $$
- Réaliser un titrage pH-métrique d'un acide ou d'une base.
- Exploiter la courbe de pH pour déterminer les coordonnées du point d’équivalence.
- Choisir un indicateur coloré convenable pour réaliser un dosage colorimétrique.

## Axes du cours
1. **Le produit ionique de l’eau**
   - L'autoprotolyse de l'eau.
   - Le produit ionique de l'eau.
   - Solutions acides, basiques et neutres.
2. **La constante d'acidité du couple acide/base**
   - Définition.
   - La relation entre la constante d'acidité et le pH.
   - La constante d'équilibre associée à une réaction acido-basique.
3. **Force d'un acide et force d'une base**
   - Comparaison du comportement des acides dans une solution aqueuse.
   - Comparaison du comportement des bases dans une solution aqueuse.
4. **Domaines de prédominances et diagrammes de distribution**
   - Domaines de prédominance. Le produit ionique de l’eau.
   - Domaines de prédominance.
   - Cas des indicateurs colorés.
5. **Titrage acido-basique**
   - Définition.
   - Caractéristique de la réaction du dosage.
   - La relation d’équivalence.
   - Titrage pH-métrique-dosage colorimétrique.
   - Le taux d’avancement associé à la réaction du dosage.
```

<!-- Page 87 -->

```markdown
# Le produit ionique de l’eau

1. L’autoprotolyse de l’eau  
   L'eau pure « eau distillée » possède un pH = 7 à 25°C, donc elle contient des ions oxonium à la concentration $[H_3O^+] = 10^{-7} \text{mol.L}^{-1}$ (une mesure de la conductivité $\sigma$ confirme la présence des ions car celle-ci n’est pas nulle : $\sigma = 5,5 \text{µS.m}^{-1}$ à 25°C). Une solution étant électriquement neutre, l’eau distillée contient également des anions. La présence d'ions résulte d’une réaction acido-basique entre deux molécules d'eau selon l'équation suivante : 
   $$ 2H_2O \rightleftharpoons H_3O^+(aq) + HO^-(aq) $$
   Cette réaction est appelée réaction d’autoprotolyse de l’eau.

2. Le produit ionique de l’eau  
   La constante d’équilibre associée à la réaction d’autoprotolyse de l’eau est appelée le produit ionique de l’eau. Elle est notée $K_e$ et son expression est :
   $$ K_e = [H_3O^+]^1[HO^-]^1 $$
   et on utilise aussi $pK_e = -\log K_e$. À 25°C : $K_e = 10^{-14}$ et $pK_e = 14$.

3. Solutions acides, basiques et neutres  
   On définit le caractère acide, basique ou neutre de la solution en comparant le pH de cette solution au pH de l’eau pure à la même température.

   - La solution est neutre si : 
   $$ [H_3O^+] = [HO^-] $$
   Donc : 
   $$ [H_3O^+]^2 = [H_3O^+][HO^-] $$
   $$ \Rightarrow -\log([H_3O^+]^2) = -\log([H_3O^+][HO^-]) $$
   $$ \Rightarrow -2\log([H_3O^+]) = -\log(K_e) $$
   $$ \Rightarrow 2pH = pK_e $$

   - La solution est acide si : 
   $$ [H_3O^+] > [HO^-] $$
   Donc : 
   $$ [H_3O^+]^2 > [H_3O^+][HO^-] $$
   $$ \Rightarrow -\log([H_3O^+]^2) > -\log([H_3O^+][HO^-]) $$
   $$ \Rightarrow -2\log([H_3O^+]) < -\log(K_e) $$
   $$ \Rightarrow 2pH < pK_e $$

   - La solution est basique si : 
   $$ [H_3O^+] < [HO^-] $$
   Donc : 
   $$ [H_3O^+]^2 < [H_3O^+][HO^-] $$
   $$ \Rightarrow -\log([H_3O^+]^2) < -\log([H_3O^+][HO^-]) $$
   $$ \Rightarrow -2\log([H_3O^+]) > -\log(K_e) $$
   $$ \Rightarrow 2pH > pK_e $$

   Ainsi à 25°C une solution est dite acide si son $pH < 7$, neutre si son $pH = 7$ et basique si $pH > 7$.

   **Remarque**  
   À 0°C, $pK_e = 15$ alors la solution est une solution si son $pH < 7$, neutre si son $pH = 7,5$ et basique si $pH > 7,5$.

---

# La constante d’acidité du couple acide/base

1. Définition  
   L’équation de la réaction qui se produit lors de la dissolution d’un acide $HA_{(aq)}$ dans l’eau est :  
   $$ HA_{(aq)} + H_2O \rightleftharpoons H_3O^+(aq) + A^{-}(aq) $$
   La constante d'équilibre associée à cette réaction est appelée la constante d’acidité : 
   $$ K_A = \frac{[H_3O^+]^1[A^-]^1}{[HA]_{aq}} $$
   On définit aussi $pK_A = -\log K_A$ et $K_A = 10^{-pK_A}$.
   La constante d'acidité d’un couple $HA/A^-$.
```

<!-- Page 88 -->

```markdown
1. La relation entre la constante d’acidité et le pH  
   On a : $K_a = \frac{[H_3O^+]_{eq}[A^-]_{eq}}{[HA]_{eq}} \quad \Longleftrightarrow \quad pK_a = pH - \log\left(\frac{[A^-]_{eq}}{[HA]_{eq}}\right)$  
   $$ \Longleftrightarrow \quad pH = pK_a + \log\left(\frac{[A^-]_{eq}}{[HA]_{eq}}\right) $$  

2. La constante d’équilibre associée à une réaction acide-base  
   On considère la réaction acido-basique entre l’acide $HA_1$ du couple $HA_1/A^-_1$ et la base $A^-_2$ du couple $HA_2/A^-_2$ selon l’équation : $HA_1(aq) + A^-_2(aq) \rightleftharpoons A^-_1(aq) + HA_2(aq)$  
   La constante d’équilibre associée à cette réaction :  
   $$ K = \frac{[A^-_1]_{eq}[HA_2]_{eq}}{[HA_1]_{eq}[A^-_2]_{eq}} $$  
   Donc :  
   $$ K = \frac{[HA_1]_{eq}}{[A^-_1]_{eq}} \cdot \frac{[HA_2]_{eq}}{[A^-_2]_{eq}} $$  
   Ainsi : $$ K = K_{A1} \cdot K_{A2} $$  
   $$ K = 10^{-pK_{A1}} \cdot 10^{-pK_{A2}} = 10^{-pK_{A1}-pK_{A2}} $$  

### III  
**Force d’un acide et force d’une base**  
1. Comparaison du comportement des acides dans une solution aqueuse  
   Pour des solutions queues acides de même concentration, l'acide le plus fort (qui dissocie fortement dans l’eau) est celui dont le taux d’avancement final le plus grand, donc c’est celui pour lequel le pH est le plus faible ou celui de $pK_A$ la plus petite (c-à-d $K_A$ la plus grande)  

2. Comparaison du comportement des bases dans une solution aqueuse  
   Pour des solutions queues basiques de même concentration, la base la plus forte (qui dissocie fortement dans l’eau) est celle dont le taux d’avancement final le plus grand, donc c’est celui pour lequel le pH est le plus grand ou celle de $pK_A$ la plus grande (c-à-d $K_A$ la plus petite)  

   Augmentation de la force de l’acide (à concentration identique)  
   HI  $\quad$  HNO₃  $\quad$  H₂O  $\quad$  HCO₄⁻  $\quad$  HClO  $\quad$  H₂O  $\quad$  C₂H₅OH  
   -10,0  $\quad$  -1,8  $\quad$  3,75  $\quad$  7,50  

   Augmentation de la force de la base (à concentration identique)  

### IV  
**Domaines de prédominance et diagrammes de distribution**  
1. Domaines de prédominance  
   Étudions pour un couple $HA_{aq}/A^-(aq)$ donné l’évolution de la concentration de l’acide et celle de la base en fonction du pH de la solution aqueuse.  
   On sait que $pH = pK_A + \log\left(\frac{[A^-]}{[HA]}\right)$ donc : $\log\left(\frac{[A^-]}{[HA]}\right) = pH - pK_A$ et par suite : $$ \left[\frac{[A^-]}{[HA]}\right] = 10^{pH-pK_A} $$  
   - Si $pH < pK_A$ donc $\frac{[A^-]}{[HA]} < 1$: dans ce cas la base $A^-$ est prédominante dans la solution.  
   - Si $pH > pK_A$ donc $\frac{[A^-]}{[HA]} > 1$: dans ce cas l’acide $HA$ est prédominant dans la solution.  
   - Si $pH = pK_A$ donc $\frac{[A^-]}{[HA]} = 1$: dans ce cas la concentration de la base $A^-$ est identique à la concentration de l’acide $HA$.
```

<!-- Page 89 -->

```markdown
# [acide] > [base]                  pKₐ
## domaine de prédominance de la forme basique 
                       pH

---

## 2️⃣ Domaines de prédominance

Un diagramme de distribution est un diagramme qui représente l'évolution du pourcentage de l'acide $α(HA)$ et celle de la base $α(A^−)$ en fonction du pH de la solution.

Avec : 
$$ 
α(HA) = \frac{[HA]}{[HA] + [A^{-}]} \quad \text{et} \quad α(A^{-}) = \frac{[A^{-}]}{[HA] + [A^{-}]} 
$$

Le diagramme ci-contre représente le diagramme de distribution du couple $CH_3OH / CH_3O^-$.

---

## 3️⃣ Cas des indicateurs colorés

Un indicateur coloré est un couple acide/base, dont la forme acide $HInd$ n'a pas la même teinte que de la forme basique $Ind^−$.

- ### Cas de $[HInd] > 10 \cdot [Ind^{-}]$
  
  $$ 
  \frac{1}{10} < \frac{[HInd]}{[Ind^{-}]} < 10 \quad \Rightarrow 
  \ pK_A + \log \left( \frac{[Ind^{-}]}{[HInd]} \right) < pK_A - \log(10) 
  $$
  
  $$
  \Rightarrow \ pH < pK_A - 1 
  $$

Dans ce cas, la solution possède la teinte de l'acide $HInd$.

- ### Cas de $[Ind^{-}] > 10 \cdot [HInd]$
  
  $$ 
  \frac{1}{10} < \frac{[HInd]}{[Ind^{-}]} < 10 \quad \Rightarrow 
  \log(10) < \log \left( \frac{[Ind^{-}]}{[HInd]} \right) 
  $$
  
  $$
  \Rightarrow \ pK_A + \log(10) < pK_A + \log \left( \frac{[Ind^{-}]}{[HInd]} \right)
  $$
  
  $$
  \Rightarrow \ pK_A + 1 < pH 
  $$

Dans ce cas, la solution possède la teinte de la base $Ind^{-}$.

---

### 📝 Remarque
Lorsque $pK_A - 1 < pH < pK_A + 1$: la solution prend la teinte sensible cette zone est appelée la zone de virage de l'indicateur.

### Exemple: Diagramme de prédominance de bleu de bromothymol

Prépondérance de l’acide $HInd$               Zone de virage            Prépondérance de la base $Ind^-$
0                                                                           6               7.6                        14
___

## V Titrage acido-basique

### 1️⃣ Définition
Le titrage d’une solution acide (ou basique) est la détermination de la concentration de l’acide utilisé (ou de la base utilisée) dans cette solution, en effectuant une réaction totale avec titrant de concentration commune.

### 2️⃣ Caractéristiques de la réaction du dosage
La réaction du titrage doit être :
- **Totale** : le réactif limitant se consomme totalement.
- **Rapide** : la disparition du réactif tirant instantanément.
- **Sélective** : le réactif titrant choisi réagit uniquement avec le réactif titré.

| Méthode de titrage | Variable observée           |
|---------------------|-----------------------------|
| Colorimétrique      | La couleur de la solution    |
| Conductimétrique    | La conductivité de la solution|
| pH-métrique         | Le pH de la solution         |

ÉLECTRON      &    2BAC-PC   &    Chimie      89
```

<!-- Page 90 -->

```markdown
# La relation d’équivalence

Lors du titrage acidobasique, l’équivalence est atteinte lorsque les réactifs (titrant et titré) disparaissent selon les coefficients stoechiométriques correspondant à l’équation de la réaction du titrage.  
On considère l’équation de la réaction du dosage du titré $(A)$ par un titrant $(B)$ : 

$$ aA + bB \rightarrow cC + dD $$

Le tableau d’avancement associé à cette réaction à l’état d’équivalence est :

| Équation          | Avancement | Les quantités de matière en mole (mol) |
|-------------------|------------|----------------------------------------|
|                   |            | $C_A.V_A$                             | $C_B.V_B$ | 0      |
| Initial           | 0          | $C_A.V_A - ax$                        | $C_B.V_B - bx$ | $cx$   | $dx$   |
| Intermédiaire     | $x$        | $C_A.V_A - ax_E$                      | $C_B.V_B - bx_E$ | $cx_E$ | $dx_E$ |
| Équivalence       | $x_E$      | $C_A.V_A - ax_E$                      | $C_B.V_B - bx_E$ | $cx_E$ | $dx_E$ |

- La relation d’équivalence :  
  À l’équivalence les réactifs titré et titrant sont totalement consommés, donc on aura :

$$ 
\begin{cases} 
C_A.V_A - ax_E = 0 \\ 
C_B.V_B - bx_E = 0 
\end{cases} 
\Rightarrow x_E = \frac{C_A.V_A}{a} = \frac{C_B.V_B}{b} 
$$

D’après les deux équations $1$ et $2$ on trouve :

$$ 
\frac{C_A}{a} = \frac{C_B}{b} 
$$

cette relation est appelée la relation d’équivalence.

### Repérage du point d’équivalence

On repère l’équivalence par le changement brusque de la grandeur physique observée ou mesurée lors du titrage (la couleur de la solution, le pH ou la conductivité de la solution).

### Titrage pH-métrique

#### Principe de titrage

Pour titrer une espèce chimique, dans une solution aqueuse, on préleve par pro-pipette un échantillon de cette solution et on l’introduit dans un bécher ; puis on effectue une réaction totale de titrage espèces avec un réactif titrant choisi de concentration connue que l’on introduit dans une burette graduée.  
On étalonne le pH-mètre et on plonge sa sonde dans la solution titrée après avoir fait fonctionner l’agitateur magnétique, on ajoute progressivement des volumes de la solution titrante et on mesure à chaque fois le pH de la solution à l’état final.  
Les mesures effectuées ont permis de tracer la courbe $pH = f(V)$.

### Détermination du point d’équivalence

#### Méthode des tangentes 

On trace deux tangentes $(T_1)$ et $(T_2)$ à la courbe $pH = f(V)$ parallèles entre elles et situées de part et d’autre du point d’équivalence $E$, ensuite on trace la droite $(T)$ parallèles à ces deux tangentes et équidistantes de celles-ci. La droite $(T)$ coupe la courbe de titrage $pH = f(V)$ au point d’équivalence $E$.

#### Méthode de la courbe dérivée

Au point d’abscisse $V_E$ la valeur de la fonction dérivée $\frac{dpH}{dV}$ soit extrême (valeur maximale ou minimale).
```

<!-- Page 91 -->

```markdown
# Dosage colorimétrique

### Principe
Pour suivre le titrage acido-basique en utilisant un indicateur coloré, on ajoute quelques gouttes d’indicateur coloré à la solution titrée, puis on introduit progressivement la solution titrante en agitant le mélange. Lorsque le mélange change de teinte, on arrête immédiatement l'ajout de la solution titrante. Ce changement de teinte montre qu’on est à l’équivalence, et on lit sur la burette la valeur du volume ajouté à l'équivalence.

### Choix de l’indicateur coloré
En général, l’indicateur coloré convient au titrage acido-basique si sa zone de virage contient la valeur de pH (pH du point d'équivalence).

### Le taux d’avancement associé à la réaction du dosage
Le taux d’avancement final associé à la réaction du titrage acido-basique est presque égal à 1 après chaque ajout de volume $V$ de la solution titrante : $\tau = \frac{x}{x_{\text{max}}} \approx 1$. La transformation liée à la réaction du titrage acido-basique est totale.

## Exercice 1
On dispose d’une solution acide de $pH = 3,46$. La constante d’équilibre associée à la réaction d’un $HA$ acide avec l’eau est : $K = 1,8 \times 10^{-4}$

1. Calculer la valeur de $pK_A$ du couple $HA/A^-$
2. Montrer que le pourcentage de l’acide est : $\alpha(HA) = \frac{1}{1+10^{pH-pK_A}} \times 100$. Calculer sa valeur.
3. Déduire le pourcentage de la base $A^-$ dans cette solution.
4. Quelle est l’espèce chimique dominante dans la solution? Justifier la réponse.

## Exercice 2
On dispose d’une solution basique de $pH = 10,75$. La constante d’équilibre associée à la réaction de la base $A^-$ avec l’eau est : $K = 1,62 \times 10^{-5}$

1. Écrire l'équation de la réaction de la base $A^-$ avec l'eau.
2. Trouver l’expression de $pK_A$ du couple $HA/A^-$ en fonction de $K_e$ et $K$. Calculer la valeur de $pK_A$.
3. Montrer que le pourcentage de base dans cette solution est : $\alpha(A^-) = \frac{1}{1+10^{pK_A-pH}}$. Calculer sa valeur.
4. Déduire le pourcentage de l’acide $HA$ dans cette solution.
5. Quelle est l’espèce chimique prédominante dans la solution? Justifier la réponse. On donne : $K_e = 10^{-14}$.

## Exercice 3
On mélange dans un bécher une solution de l’acide méthanoïque $HCOOH$ avec une autre solution de l’ammoniac $NH_3$.

1. Écrire l'équation de la réaction de l’acide méthanoïque et l’ammoniac.
2. Trouver l'expression de la constante d’équilibre associée à cette réaction en fonction de $pK_A1$ et $pK_A2$.
3. Calculer la valeur de la constante d’équilibre associée à cette réaction.
4. Cette transformation est-elle totale ou limitée? Justifier la réponse. On donne : $pK_A1 = pK_A(HCOOH/HCOO^-) = 3,8$ ; $pK_A2 = pK_A(NH_4^+/NH_3) = 9,21$.

## Exercice 4
On considère deux solutions acides $S_1$ et $S_2$ de même concentration $C = 10^{-2} \text{ mol.L}^{-1}$.

- $S_1$ solution d'acide méthanoïque 
  - $K_{A1} = 1,8 \times 10^{-4}$ 
  - $pH_1 = 2,9$ 
  - $\tau_1 = \frac{pK_{A1}}{C}$

- $S_2$ solution d'acide éthanoïque 
  - $K_{A2} = 1,8 \times 10^{-5}$ 
  - $pH_2 = 3,4$ 
  - $\tau_2 = \frac{pK_{A2}}{C}$

1. Dresser le tableau d’avancement associé à la réaction d’un acide $HA$ et l’eau.
2. Exprimer le taux d’avancement final de cette réaction en fonction de $pH$ et $C$.
3. Compléter le tableau ci-dessus.
4. Comment varier le taux d’avancements $\tau$ en fonction des concentrations $pH$ de solution de même concentration.
5. Quelle influence a donc l’acidité $pK_A$ sur la valeur du taux d’avancement.
```

<!-- Page 92 -->

```markdown
## Exercice 5

On considère deux solutions basiques $S_1$ et $S_2$ de même concentration $C = 10^{-2} \text{mol.L}^{-1}$  
- $S_1$ solution de la méthylamine  
  $K_A = 2 \times 10^{-10}$, $pH = 11.4$, $\tau_1 = pK_{A1}$  
- $S_2$ solution d'ammoniac  
  $K_A = 6.3 \times 10^{-10}$, $pH = 10.6$, $\tau_2 = pK_{A2}$  

1. Dresser le tableau d'avancement associé à la réaction d'une base $B$ avec l'eau.
2. Exprimer le taux d'avancement final de cette réaction en fonction de $pH$, $pK_e$ et $C$.
3. Compléter le tableau ci-dessus. On donne $pK_e = 14$.
4. Comment varier le taux d'avancement en fonction $pH$ pour des solutions basiques de même concentration?
5. Quelle influence a la constante d'acidité $pK_A$ sur le taux d'avancement final d'une base avec l'eau?

## Exercice 6

On dispose d'une solution aqueuse de l'acide propanoïque $C_2H_5COOH$ de concentration $C = 5 \times 10^{-2} \text{mol.L}^{-1}$.  
La mesure de $pH$ de cette solution donne la valeur: $pH = 3.09$.  

1. Dresser le tableau d'avancement associé à cette réaction de fonction de $C$, $V$, et $x_{eq}$.
2. Calculer le pourcentage des ions propanoate $C_2H_5COO^-$ dans la solution.
3. Déduire le pourcentage de l'acide propanoïque $C_2H_5COOH$ dans la solution.

## Exercice 7

Une solution $(S)$ de méthylamine $CH_3NH_2$ de concentration $C = 0,2 \text{mol.L}^{-1}$ et de $pH = 12$.  
1. Écrire l'équation de la réaction de méthylamine avec l'eau.
2. Calculer les concentrations de toutes les espèces chimiques en solution.
3. Calculer la constante d'équilibre associée à cette réaction et déduire $pK_A$ du couple $CH_3NH_3^+/CH_3NH_2$.
4. Tracer le diagramme de prédominance du couple $CH_3NH_3^+/CH_3NH_2$. En déduire l'espèce chimique prédominante dans la solution $(S)$. On donne $pK_e = 14$ à $25^{\circ}C$.

## Exercice 8

On dispose deux solutions aqueuses de même concentration molaire $C_A = 10^{-2} \text{mol.L}^{-1}$ :
- Une solution $(S_1)$ d'acide méthanoïque $HCOOH$.
- Une solution $(S_2)$ d'acide benzoïque $C_6H_5COOH$.

La mesure de $pH$ d'un volume $V = 10 \text{ml}$ de chaque solution fournit les résultats dans le tableau ci-contre.

1. Écrire l'équation de la réaction de l’acide méthanoïque avec l’eau.
2. Dresser le tableau d’avancement associé à cette réaction.
3. Calculer le taux d'avancement final de associé à la réaction de l'acide méthanoïque avec l'eau et déduire.
4. À partir de la comparaison des valeurs du $pH$ des solutions aqueuses d’acide méthanoïque et d’acide benzoïque pour quel acide la réaction est plus avancée?
5. Déterminer l’espèce chimique prédominante dans chaque solution.
   - Données : $pK_A(HCOOH/HCOO^-) = 3.8$, et $pK_A(C_6H_5COOH/C_6H_5COO^-) = 4.2$.

## Exercice 9

1. Écrire l'équation de réaction entre :
   - L'acide lactique $C_3H_6O_3$ et l'ion nitrite $NO_2^-$.
   - L'acide formique $HCOOH$ et l'ion hydroxyde $OH^-$.

2. Calculer la constante d'équilibre associée à chacune de ces réactions.
   - Données : $pK_{A1} = pK_A(HCOOH/HCOO^-) = 3.8$, $pK_{A2} = pK_A(C_3H_6O_3/C_3H_5O_3^-) = 3.9$, $pK_A(H_2O/HO^-) = pK_e = 14$.

## Exercice 10

Acide acétylsalicylique, ou aspirine $CH_3C_6H_4O_4$ (sa base conjuguée est l'ion acétylsalicylique, $C_9H_7O_4^-$). C’est la substance active de nombreux médicaments aux propriétés antalgique, antipyrétique et anti-inflammatoire.  
La constante d’acidité de cet acide à $37^{\circ}$ est : $pK_A = 3.5$. $A$ est le température de la mesure de $pH$ pour un patient donné dans les résultats du tableau ci-contre.
1. Quelle est l’espèce chimique prédominante du couple $C_9H_7O_4^-/C_9H_8O_4$ dans le liquide, le sang et le suc gastrique?
2. Exprimer puis calculer le rapport $\left[ C_9H_7O_4^- \right]/\left[ C_9H_8O_4 \right]$ dans le suc gastrique.
3. Calculer les pourcentages de $C_9H_7O_4$ et $C_9H_8O_4$ dans le suc gastrique.
```

<!-- Page 93 -->

```markdown
## Exercice 11

Le BBT (bleu de bromothymol) est un indicateur coloré acido-basique dont la teinte de la forme acide HInd est jaune et celle de sa base conjuguée Ind$^-$ est bleue.  
La figure ci-contre montre le diagramme de distribution de la forme acide et de la forme basique en fonction du pH.

1. Identifier les courbes (a) et (b).
2. Déterminer la valeur de pK$_A$ du couple HInd/Ind$^-$.
3. Quelle est la teinte de l’indicateur dans une solution (S) de pH = 3,5 puis dans une autre solution (S') de pH' = 11.
4. On dispose d’une solution aqueuse de bleu de bromothymol de concentration C = 2 × 10$^{-2}$ mol.L$^{-1}$. La mesure du pH de cette solution donne la valeur suivante : pH = 4,4
   - a – Calculer les pourcentages $\alpha$(HInd) dans cette solution.
   - b – Calculer les pourcentages $\alpha$(Ind$^-$) dans cette solution.
   - c – Quelle est la couleur de cette solution?

## Exercice 12

L'acide hypochloreux est un acide faible instable de formule chimique HClO.  
A fin de déterminer la concentration C$_A$ d’une solution (S$_A$) de l’acide hypochloreux, on prélevé un échantillon de volume V$_A$ = 10mL puis le met dans un bécher. On titré cet échantillon par une solution aqueuse (S$_B$) d’hydroxide de sodium (Na$^+_{aq}$ + OH$^-_{aq}$) de concentration C$_B$ = 2 × 10$^{-2}$ mol.L$^{-1}$  
À l’équivalence, le volume d’hydroxyde de sodium ajouté est: V$_{BE}$ = 12mL.  
1. Dresser le montage expérimental du dosage en indiquant sur lequel la solution titrée et la solution titrante.
2. Écrire l'équation de la réaction du dosage.
3. Déterminer la concentration C$_A$ de la solution aqueuse (S$_A$).
   - a – Déterminer le réactif limitant.
   - b – Dresser le tableau d’avancement associé à la réaction du dosage.
   - c – Montrer que le taux d'avancement final associé à la réaction est: $\tau = 1 - \frac{(V_A+V_B).10^{-pH-pK_e}}{C_GV_B}$.
   - d – Calculer la valeur de $\tau$ et déduire.
   - e – Calculer les pourcentages $\alpha$(HClO) et $\alpha$(ClO$^-$) dans le mélange.
4. Calculer la constante d’équilibre associé à cette réaction.  
On donne : pK$_A$(HClO) = 7,5 et pK$_e$ = 14.

## Exercice 13

L’éthanoate de sodium NaCH$_3$COO est un solide blanc, soluble dans l’eau, de masse molaire M = 82 g.mol$^{-1}$.  
On prépare une solution (S$_1$) d’éthanoate de sodium (Na$^+_{aq}$ + CH$_3$COO$^{-}_{aq}$) en dissolvant une masse m des cristaux d’éthanoate de sodium NaCH$_3$CO dans un volume V = 100 mL de l’eau distillée.  
On titré un échantillon de volume V = 25mL de la solution (S$_1$) par une solution (S$_1$) de l’acide chlorhydrique (H$_3$O$^+_{aq}$ + Cl$^-_{aq}$) de concentration C$_2$ = 1,5 × 10$^{-2}$ mol.L$^{-1}$.  
À l’équivalence, le volume d’acide chlorhydrique ajouté est: V$_{E}$ = 15mL.
1. Quelle sont les caractéristiques de la réaction du dosage?
2. Écrire l'équation de la réaction du dosage.
3. Déterminer la concentration C$_2$ de la solution aqueuse (S$_1$).
4. Déduire la valeur de m.
5. Pour un volume versé V = V$_{E}$ de l’acide chlorhydrique, le pH-mètre indique la valeur: pH = 4,8.
   - a – Déterminer le réactif limitant.
   - b – Dresser le tableau d’avancement associé à la réaction du dosage.
   - c – Montrer que le taux d'avancement final associé à la réaction est: $\tau = 1 - 10^{-pH}(2V_1 + V_E)$.
   - d – Calculer la valeur de $\tau$ et déduire.
   - e – Calculer la constante d’équilibre du couple CH$_3$COOH/CH$_3$COO$^-$.
```


<!-- Page 94 -->

```markdown
# Exercice 14

L'acide méthanoïque (appelé aussi acide formique) est le plus simple des acides carboxyliques, sa formule chimique est HCOOH , sa base conjuguée est l'ion méthanoate(formiate) de formule HCOO⁻. Il s'agit d'un acide flammable qui se présente sous forme de liquide incolore à odeur pénétrante. 
Cet exercice vise à étudier la réaction de l'acide méthanoïque avec l'eau ainsi qu'avec l'hydroxyde de sodium.

## I- Étude de la réaction de l’acide méthanoïque avec l’eau.
On prépare une solution aqueuse (S) de l'acide méthanoïque de concentration $C = 10^{-3}mol.L^{-1}$, et de volume $V$.
La mesure de $pH$ de cette solution à $25°C$ donne la valeur : $pH = 3,46$.
1. Écrire l'équation de la réaction de l’acide méthanoïque avec l’eau.
2. Dresser le tableau d’avancement associé à cette réaction en fonction de $C$, $V$, $x$ et $x_f$.
3. Calculer le taux d’avancement final de la réaction de l’acide méthanoïque avec l’eau, et déduire.
4. Calculer la valeur du quotient de réaction à l’équilibre associé à cette réaction.
5. Déduire la valeur de la constante d’acidité $pK_a$ du couple HCOOH/HCOO⁻.
6. Calculer le pourcentage de l’acide HCOOH et celle de la base HCOO⁻ dans cette solution? Déduire l’espèce chimique prédominante.

## II- Dosage d’une solution d’acide méthanoïque par une solution d’hydroxyde de sodium
Pour déterminer la concentration $C_A$ d’une solution aqueuse $(S_A)$ de l’acide méthanoïque, on titre un volume $V_A = 10mL$ de la solution $(S_A)$ par une solution aqueuse $(S_B)$ d’hydroxyde de sodium $(Na^+_{(aq)} + OH^-_{(aq)})$ de concentration $C_B = 10^{-2}mol.L^{-1}$.
La courbe ci-dessous représente l’évolution de $pH$ en fonction du volume du titrant du ajouté $V_B$.

1. Dresser le montage expérimental du dosage.
2. Écrire l’équation de la réaction du dosage.
3. En exploitant la courbe $pH=f(V_B)$, déterminer les coordonnées du point d’équivalence $E$.
4. Déterminer la concentration $C_A$ de la solution aqueuse $(S_A)$.
5. Calculer la valeur du rapport $\left[ \text{HCOO}^- \right] / \left[ \text{HCOOH} \right]$ pour un volume versé $V_B = 12mL$.
Parmi les indicateurs colorés du tableau ci-dessous, déterminer celui qu’il faut ajouter à la solution pour procéder le plus efficacement possible au titrage précédent par une méthode colorimétrique. Justifier ce choix.

| L’indicateur coloré         | Bleu de bromothymol | Phénolphtaléine | Rouge de crésol |
|---------------------------|---------------------|------------------|------------------|
| Zone de virage            | 6 – 7,6             | 8,2 – 10         | 7,2 – 8,8        |
```

<!-- Page 95 -->

```markdown
# Exercice 15

L’ammoniac est un composé chimique de formule $NH_3$. Dans les conditions normales de température et de pression, c'est un gaz. Il est incolore et irritant (d'odeur piquante à faible dose, il brûle les yeux et les poumons en concentration plus élevée).  
Il est industriellement produit par le procédé Haber-Bosch à partir de diazote et de dihydrogène. C'est l'un des composés les plus synthétisés au monde, utilisé comme réfrigérant, et pour la synthèse de nombreux autres composés (dont un grand t...age d'engrais).  

Cet exercice vise à étudier la réaction de l'ammoniac avec l'eau ainsi qu'avec l’acide chlorhydrique. 

### I-Étude de la réaction de l’ammoniac avec l’eau.
On prépare une solution aqueuse (S) de l’ammoniac de concentration $C = 2 \times 10^{-2} \mathrm{mol.L^{-1}}$, et de volume $V$.  
La mesure de $pH$ de cette solution à 25°C donne la valeur : $pH = 10, 75$  

1. Écrire l'équation de la réaction de l’ammoniac avec l’eau.
2. Dresser le tableau d’avancement associé à cette réaction en fonction de $C$, $x$, et $x_{eq}$.
3. Calculer le taux d’avancement final de la réaction de l’ammoniac avec l’eau, et déduire.
4. Calculer la valeur de la réaction à l'équilibre associée à cette réaction.
5. Décrire la valeur de la constante d'acidité $pK_a$ du couple $NH_4^+/NH_3$. On donne $pK_e = 14$.
6. Déterminer l’espèce chimique prédominante dans la solution. 

### II-Dosage d'une solution de l'ammoniac par une solution d’acide chlorhydrique
Pour déterminer la concentration $C_B$ d'une solution aqueuse $(S_B)$ de l’ammoniac, on titre un volume $V_B = 30 \mathrm{mL}$ de la solution $(S_B)$ par une solution aqueuse $(S_A)$ de l’acide chlorhydrique $(H_3O^+_{(aq)} + Cl^-_{(aq)})$ de concentration $C_A = 2 \times 10^{-2} \mathrm{mol.L^{-1}}$.  
La courbe ci-dessous représente l’évolution de $pH$ en fonction du volume du titrant ajouté $V_A$. 

1. Donner les caractéristiques de la réaction du dosage. 
2. Écrire l'équation de la réaction du dosage. 
3. En exploitant la courbe $pH = f(V_A)$, déterminer les coordonnées du point d’équivalence $E$.
4. Déterminer la concentration $C_B$ de la solution aqueuse $(S_B)$.
5. Pour un volume versé $V_A = \frac{V_E}{3}$ de l’acide chlorhydrique. 
   a. En se basant sur un tableau d’avancement, montrer que : $\tau = 1 - 10^{-pH(3V_B + V_AE)}{C_BV_B}$.
   b. Calculer la valeur de $\tau$ et déduire.
   c. Calculer les pourcentages $\alpha(NH_4^+)$ et $\alpha(NH_3)$ dans le mélange. 

Parmi les indicateurs colorés du tableau ci-dessous, déterminer celui qu’il faut ajouter à la solution pour procéder le plus efficacement possible au titrage précédent par une méthode colorimétrique.

| L’indicateur coloré | Bleu de bromothymol | Rouge de bromophénol | hélianthine |
|---------------------|---------------------|-----------------------|-------------|
| Zone de virage      | 6 – 7,6             | 5,2 – 6,8             | 3,1 – 4,4   |
```

<!-- Page 96 -->

```markdown
# Exercice 16

Le vinaigre est une solution d’acide éthanoïque dans l'eau. Il est caractérisé par son degré d'acidité ($X^o$) qui représente le pourcentage massique de l'acide éthanoïque contenu dans la solution.  
Cet exercice vise à étudier la réaction de l'acide éthanoïque avec l'eau ainsi qu'avec l'hydroxyde de sodium.

## Données :
- La masse molaire de l’acide éthanoïque : $M = 60 \, \text{g.mol}^{-1}$.
- La masse volumique du vinaigre : $\rho = 1,02 \, \text{g.mL}^{-1}$.

## I-Étude de la réaction de l’acide éthanoïque avec l’eau.
On prépare une solution aqueuse ($S_1$) de l'acide éthanoïque de concentration $C = 10^{-2} \, \text{mol.L}^{-1}$ et de volume $V$. 
La mesure de pH de cette solution à 25°C donne la valeur : $pH = 3,4$.

1. Écrire l'équation de la réaction de l'acide éthanoïque avec l'eau.
2. Dresser le tableau d'avancement associé à cette réaction en fonction de $C, V, x,$ et $x_f$.
3. Calculer le taux d'avancement de la réaction de l'acide éthanoïque avec l'eau, et $e$.
4. Calculer la valeur de la constante d'équilibre associée à cette réaction.
5. Déduire la valeur de la constante d'acidité $pK_a$ du couple $CH_3COOH/CH_3COO^-$.
6. Calculer les pourcentages $\alpha(CH_3COOH)$ et $\alpha(CH_3COO^-)$ dans la solution. Commenter les résultats obtenus.

## II-Dosage d'une solution d'acide éthanoïque par une solution d'hydroxyde de sodium
On lit sur l’étiquette du vinaigre commercial ($S_0$) « vinaigre de vin 7° ». On veut vérifier cette indication, en réalisant une dosage pH-métrique.  
Dans le but de réaliser le dosage du vinaigre on procède d’abord à une dilution à 1/100 d’un volume $V_0 = 1 \, \text{mL}$ du vinaigre commercial ($S_0$). Soit ($S_1$) la solution obtenue.  
On prélève un volume $V_A = 5 \, \text{mL}$ de cette solution ($S_1$) et en réalise le dosage pH-métrique avec une solution de soude ($Na^+_{aq} + OH^-_{aq}$), de concentration molaire $C_B = 1,5 \times 10^{-2} \, \text{mol.L}^{-1}$.  
Les mesures ont permis de tracer la courbe $pH = f(V_B)$ de la figure ci-dessous.

1. Quel est le titrant et le titré de ce dosage?
2. Écrire l'équation de la réaction du dosage.
3. En exploitant la courbe $pH = f(V_B)$, déterminer les coordonnées du point d’équivalence $E$.
4. Déterminer la concentration $C_A$ de la solution aqueuse ($S_A$).
5. Vérifier la valeur du degré d'acidité indiqué sur l'étiquette du vinaigre commercial ($S_0$).

## III- Indicateurs colorés
Parmi les indicateurs colorés du tableau ci-dessous, déterminer celui qu'il faut ajouter à la solution pour procéder le plus efficacement possible au titrage précédent par une méthode colorimétrique.

| L’indicateur coloré | Zone de virage |
|---------------------|----------------|
| Bleu de bromothymol | 6 – 7,6        |
| Rouge de crésol     | 7,2 – 8,8      |
| hélianthine         | 3,1 – 4,4      |

```


<!-- Page 97 -->

```markdown
# Correction

## Exercice 1
1. Nous calculons la valeur de $pK_A$  
   L’équation de la réaction de l’acide avec l’eau est:  
   $$ HA + H_2O \rightleftharpoons A^- + H_3O^+ $$  
   La constante d’équilibre associée à cette réaction est:  
   $$ K = \frac{[A^-]_{liq}[H_3O^+]_{liq}}{[HA]_{liq}} = K_A $$  
   Et puisque $pK_A = -\log(K_A)$  
   Donc:  
   $$ pK_A = -\log(K) $$  
   A.N.: $pK_A = -\log(1.8 \times 10^{-4}) = 3.74$  

2. Montrons que: $\alpha(HA) = \frac{1}{1+10^{-pK_A}}$  
   On sait que: $c(HA) = [HA]$  
   Alors: $\alpha(HA) = \frac{1}{1+10^{-pK_A}}$ (a)  
   Et sait que: $pH = pK_A + \log\left(\frac{[A^-]}{[HA]}\right)$  
   Donc:  
   $$ \log\left(\frac{[A^-]}{[HA]}\right) = pH - pK_A $$  
   On remplace (b) dans l’équation (a):  
   on trouve: $\alpha(HA) = \frac{1}{1 + 10^{pH-pK_A}}$  
   A.N.: $\alpha(HA) = \frac{1}{1 + 10^{3.36 - 3.74}}$  
   On trouve: $\alpha(HA) = 65.58 \times 10^{-2} = 65,58\%$  

3. Déduisons la valeur de $c(A^-)$  
   On sait que: $\alpha(A^-) + \alpha(HA) = 1$  
   Donc: $\alpha(A^-) = 1 - \alpha(HA)$  
   Alors: $\alpha(A^-) = 1 - 65.58 \times 10^{-2}$  
   On trouve: $\alpha(A^-) = 3.42 \times 10^{-2} = 34,42\%$  
   Puisque $\alpha(HA) > \alpha(A^-)$ donc l’acide $HA$ prédomine dans la solution!  

## Exercice 2
1. L’équation de la réaction de la base $A^-$ avec l’eau est:  
   $$ A^- + H_2O \rightleftharpoons HA + HO^- $$  
   Trouvons l’expression de $pK_A$  
   On a:  
   $$ K = \frac{[HO^-]_{liq}[HA]_{liq}}{[A^-]_{liq}} $$  
   $\Leftrightarrow$  
   $$ K = \frac{[H_3O^+]_{liq}[HO^-]_{liq}}{[H_3O^+]_{liq}[A^-]_{liq}} $$  
   avec  
   $$ K = [H_3O^+]_{liq}^{2}[HO^-]_{liq} \text{ et } K_A = \frac{[H_3O^+]_{liq}^2[HO^-]_{liq}}{[HA]_{liq}} $$  
   $\Longleftrightarrow$  
   $$ K = \frac{K_e}{K_A} $$  
   $$ K_A = \frac{K_e}{K} \text{ et } pK_A = -\log(K_A) $$  
   $pK_A = -\log\left(\frac{K_e}{K}\right)$  
   A.N.: $pK_A = -\log(10^{-14}/(6.26 \times 10^{-5})) = 9.21$  

2. Montrons que $\alpha(A^-) = \frac{1}{1 + [HA]}$  
   On a:  
   $$ pH = pK_A + \log\left(\frac{[A^-]}{[HA]}\right) $$  
   Donc:  
   $$ \log\left(\frac{[A^-]}{[HA]}\right) = pH - pK_A $$  
   Alors:  
   $$ \frac{[A^-]}{[HA]} = 10^{pK_A - pH} $$  
   En remplaçant l'équation (b) dans l'équation (a),  
   on trouve: $\alpha(A^-) = \frac{1}{1 + 10^{pK_A - pH}}$  
   A.N.: $\alpha(A^-) = \frac{1}{1 + 10^{9.21 - 10.75}}$  
   On trouve: $\alpha(A^-) = 0.97 = 97\%$  

3. Déduisons la valeur de $\alpha(HA)$  
   On sait que: $\alpha(A^-) + \alpha(HA) = 1$  
   Donc: $\alpha(HA) = 1 - \alpha(A^-)$,  
   Alors: $\alpha(HA) = 1 - 0.97$  
   On trouve: $\alpha(HA) = 0.03 = 3\%$  
   Puisque $\alpha(HA) < \alpha(A^-)$, donc la base $A^-$ prédomine dans la solution!  

## Exercice 3
1. L’équation de la réaction de $HCOOH$ avec $NH_3$ est:  
   $$ HCOOH_{(aq)} + NH_3_{(aq)} \rightleftharpoons HCOO^- + NH_4^+ $$  
   Trouvons l’expression de la constante d’équilibre  
   On a:  
   $$ K = \frac{[HCOO^-]_{liq}[NH_4^+]_{liq}}{[HCOOH]_{liq}[NH_3]_{liq}} $$  
   Donc:  
   $$ K = \frac{[HCOO^-]_{liq}}{[HCOOH]_{liq}[NH_3]_{liq}} $$  

2. Alors:  
   $$ K = \frac{K_{a1}}{K_{a2}} $$  
   D’où:  
   $$ K = \frac{10^{pK_{a1}}}{10^{pK_{a2}}} $$  

3. Calculons la valeur de $K$  
   On a:  
   $$ K = \frac{10^{pK_{a1}}}{10^{pK_{a2}}} = \frac{10^{10.8}}{10^{9.21}} = 2.57 \times 10^5 $$  
   Puisque $K > 10^4$, donc cette réaction est totale.
```

<!-- Page 98 -->

```markdown
# Exercice 4 

Le tableau d’avancement associé à la réaction d’un acide $HA$ et l’eau.

| Équation                   | $HA_{(aq)} + H_2O_{(l)} \rightleftharpoons H_3O_{(aq)}^+ + A_{(aq)}$ |
|---------------------------|-----------------------------------------------------------------------------|
| État                      | Avancement           | Les quantités de matière en mole (mol) |
| Initial                   | $0$                  | $CV$                                   |
| Intermédiaire             | $x$                  | $CV - x$                               |
| Final                     | $x_{eq}$             | $CV - x_{eq}$                          |

En excès

|      | $0$   | $x$         | $x_{eq}$       |

1. Le taux d’avancement final associé à cette réaction : $\tau = \frac{x_{eq}}{x_{max}} = \frac{[H_3O]_{eq} \cdot V}{CV} = \frac{[H_3O]_{eq} \cdot 10^{-pH}}{c}$

2. Voir les résultats dans le tableau ci-dessous.

| Solution               | $K_A$              | $pH$ | $\tau$          | $pK_A$ |
|-----------------------|--------------------|------|------------------|--------|
| $S_1$ solution d’acide méthanoïque | $K_{A1} = 1,8 \times 10^{-4}$ | $pH = 2,9$ | $\tau_1 = 1,26 \times 10^{-1}$ | $pK_{A1} = 3,74$ |
| $S_2$ solution d’acide éthanoïque  | $K_{A2} = 1,8 \times 10^{-5}$ | $pH = 3,4$ | $\tau_2 = 3,98 \times 10^{-2}$ | $pK_{A2} = 4,74$ |

3. Pour des solutions de même concentration, on constate que plus $pH$ de la solution est faible, plus le taux d’avancement final de la réaction est élevé.

4. Pour des solutions de même concentration, on constate que plus la constante d’acidité $pK_A$ est petite, plus le taux d’avancement final de la réaction est élevé.

# Exercice 5 

Le tableau d’avancement associé à la réaction d’une base $A^-$ et l’eau.

| Équation                   | $A^−_{(aq)} + H_2O_{(l)} \rightleftharpoons HO^{-}_{(aq)} + HA_{(aq)}$ |
|---------------------------|-----------------------------------------------------------------------------|
| État                      | Avancement           | Les quantités de matière en mole (mol) |
| Initial                   | $0$                  | $CV$                                   |
| Intermédiaire             | $x$                  | $CV - x$                               |
| Final                     | $x_{eq}$             | $CV - x_{eq}$                          |

En excès

|      | $0$   | $x$         | $x_{eq}$       |

1. Le taux d’avancement final associé à cette réaction : $\tau = \frac{x_{eq}}{x_{max}} = \frac{[HO^-]_{eq}}{CV} = \frac{[HO^-]_{eq}}{c}$

On sait que : $K_e = \frac{[HO^-]_{eq}[H_3O^+]_{eq}}{[H_2O]_{eq}} \iff [HO^-]_{eq} = \frac{K_e \cdot [H_3O^+]_{eq}}{[H_2O]_{eq}}$

Donc : $\tau = \frac{10^{pH - pK_e}}{c}$

2. Voir les résultats dans le tableau ci-dessous.

| Solution               | $K_A$              | $pH$ | $\tau$          | $pK_A$ |
|-----------------------|--------------------|------|------------------|--------|
| $S_1$ solution de la méthylamine  | $K_{A1} = 2 \times 10^{-11}$ | $pH = 11,4$ | $\tau_1 = 2,5 \times 10^{-1}$ | $pK_{A1} = 10,7$ |
| $S_2$ solution d’ammoniac          | $K_{A2} = 6,3 \times 10^{-10}$ | $pH = 10,6$ | $\tau_2 = 3,98 \times 10^{-2}$ | $pK_{A2} = 9,20$ |

3. Pour des solutions de même concentration, on constate que plus $pH$ de la solution est grand, plus le taux d’avancement final de la réaction est élevé.

4. Pour des solutions de même concentration, on constate que plus la constante d’acidité $pK_A$ est grande, plus le taux d’avancement final de la réaction est élevé.
```

<!-- Page 99 -->

```markdown
# Exercice 6

Le tableau d'avancement associé à la réaction de l'acide propanoïque $C_2H_5COOH$ avec l'eau
$$ C_2H_5COOH_{(aq)} + H_2O(l) \rightleftharpoons H_3O^+_{(aq)} + C_2H_5COO^-_{(aq)} $$

| Équation                        | $C_2H_5COOH$                   | $H_2O$          | $H_3O^+$          | $C_2H_5COO^-$       |
|---------------------------------|--------------------------------|-----------------|-------------------|---------------------|
| État                            | Avancement                     | Les quantités de matière en mole (mol) |
| Initial                         | 0                              | CV              | 0                 | x                    |
| Intermédiaire                   | x                              | CV - x         | x                  |                      |
| Final                           | $x_{eq}$                      | $CV - x_{eq}$   |

Calculons $\alpha(C_2H_5COOH)$

$$ \alpha(C_2H_5COOH) = \frac{[C_2H_5COOH]_{eq}}{[C_2H_5COOH]_{eq} + [H_3O^+]_{eq}} \quad (a) $$

Et d'après le tableau d'avancement :
$$ [C_2H_5COOH]_{eq} = CV - x_{eq} $$
Avec $x_{eq} = [H_3O^+]_{eq} = V$

Donc :
$$ [C_2H_5COOH]_{eq} = CV - [H_3O^+]_{eq} $$
Alors :
$$ [C_2H_5COOH]_{eq} = c - [H_3O^+]_{eq} \quad (b) $$

Et :
$$ [C_2H_5COO^-]_{eq} = x_{eq} = [H_3O^+]_{eq} \quad (c) $$

On remplace (b) et (c) dans (a), on trouve :
$$ \alpha(C_2H_5COOH) = \frac{c - [H_3O^+]_{eq}}{c - [H_3O^+]_{eq} + [H_3O^+]_{eq}} $$

Alors :
$$ \alpha(C_2H_5COOH) = \frac{c - [H_3O^+]_{eq}}{c} = 1 - \frac{[H_3O^+]_{eq}}{c} $$

Finalement, on obtient :
$$ \alpha(C_2H_5COOH) = 1 - \frac{10^{-3}}{c} $$
A.N.: $\alpha(C_2H_5COOH) = 1 - 10^{-3.09} = 5 \times 10^{-2}$
Alors :
$$ \alpha(C_2H_5COOH) = 9.84 \times 10^{-1} \approx 98.4\% $$

Calculons $\alpha(C_2H_5COO^-)$
On sait que :
$$ \alpha(C_2H_5COO^-) = 1 - \alpha(C_2H_5COOH) $$
A.N.: $\alpha(C_2H_5COO^-) = 1 - 9.84 \times 10^{-1} $
On trouve :
$$ \alpha(C_2H_5COO^-) = 1.6 \times 10^{-2} = 1.6\% $$

# Exercice 7

L'équation de la réaction $CH_3NH_2$ avec l'eau est :
$$ CH_3NH_2_{(aq)} + H_2O(l) \rightleftharpoons CH_3NH_3^+_{(aq)} + HO^-_{(aq)} $$

Le tableau d'avancement associé à cette réaction :

| Équation                        | $CH_3NH_2$                    | $H_2O$          | $CH_3NH_3^+$      | $HO^-$              |
|---------------------------------|--------------------------------|-----------------|-------------------|---------------------|
| État                            | Avancement                     | Les quantités de matière en mole (mol) |
| Initial                         | 0                              | CV              | 0                 | 0                   |
| Intermédiaire                   | x                              | CV - x         | x                  | x                   |
| Final                           | $x_{eq}$                      | $CV - x_{eq}$   | $x_{eq}$          | $x_{eq}$           |

Calculons les concentrations effectives des espèces chimiques présentes dans la solution :

- Pour $HO^-$:
On a :
$$ [HO^-]_{eq} \propto [H_3O^+]_{eq} $$
Alors :
$$ [HO^-]_{eq} = \frac{[H_3O^+]_{eq}}{K_e} $$
D'où :
$$ [HO^-]_{eq} = \frac{10^{-pH}}{K_e} $$
A.N.: $[HO^-]_{eq} = 10^{-14} = 10^{-2} mol.L^{-1}$

- La concentration de $CH_3NH_3^+$ 
D'après le tableau d'avancement, on a :
$$ n_{eq}(CH_3NH_3^+) = n_{eq}(HO^-) = x_{eq} $$
Donc :
$$ [CH_3NH_3^+]_{eq} = 10^{-2} mol.L^{-1} $$

- La concentration de $CH_3NH_2$ 
D'après le tableau d'avancement, on a :
$$ n_{eq}(CH_3NH_2) = CV - x_{eq} $$
Alors :
$$ [CH_3NH_2]_{eq} = C - [HO^-]_{eq} $$

Donc :
$$ [CH_3NH_2]_{eq} = 0.2 - 10^{-2} $$
A.N.: $[CH_3NH_2]_{eq} = 0.19 mol.L^{-1}$

Calculons la valeur de $K_A$ à l'aide de $pK_A$
$$ K = \frac{[HO^-]_{eq}[CH_3NH_3^+]_{eq}}{[CH_3NH_2]_{eq}} $$
A.N.: $K = \frac{10^{-2}}{0.19}$
On trouve :
$$ K = 5.26 \times 10^{-4} $$

Et on a :
$$ K_A = \frac{K_{e}}{K} $$
Donc :
$$ pK_A = -\log(K_A) $$
Alors :
$$ pK_A = pK_e - \log(K) $$
Où : $pK_e = 14 + \log(5.26 \times 10^{-4})$
On trouve :
$$ pK_A = 10.72 $$

Le diagramme de prédominance :
- Prédominance de $CH_3NH_3^+$ à 10.72
- Prédominance de $CH_3NH_2$
```

<!-- Page 100 -->

```markdown
# Exercice 8
L'équation de l'acide méthanoïque avec l'eau: 
$$ \text{HCOOH}(aq) + \text{H}_2\text{O}(l) \rightleftharpoons \text{HCOO}^-(aq) + \text{H}_3\text{O}^+(aq) $$

Le tableau d'avancement associé à cette réaction:
| Équation | HCOOH(aq) + H2O(l) ⇌ HCOO⁻(aq) + H3O⁺(aq) |
|----------|-----------------------------------------------|
| État     | Avancement  | Les quantités de matière en mole (mol) |
| Initial  | 0          | CV                                   |
| Intermédiaire | x    | CV - x                               |
| Final    | x_eq      | CV - x_eq                            |

Calculons le taux d'avancement final de cette réaction.
On sait que : 
$$ \tau_1 = \frac{x_{eq}}{x_{max}} \quad (a) $$
Si la réaction est totale, le réactif limitant est HCOOH donc : 
$$ C_A \cdot V - x_{max} = 0 $$
Alors : $ x_{max} = C_A \cdot V \quad (b) $
D’après le tableau d’avancement, on a : 
$$ x_{eq} = n_{eq}(H_3O^+) $$
Alors : 
$$ x_{eq} = [H_3O^+]_{eq} \cdot V \quad (c) $$

On remplace (b) et (c) dans (a), on obtient:
$$ \tau_1 = 10^{-pH} \cdot \frac{1}{C_A} $$
A.N.: $\tau_1 = 12,59 \times 10^{-2} = 12,59$

Puisque $\tau_1 < 1$, donc cette réaction est limitée.
On a: $pH_1 < pH_2$, donc l'acide méthanoïque est plus fort que l'acide benzoïque !

5. Déterminons l'espèce chimique prédominante dans chaque solution :  
- Dans la solution (S1) :  
  On a $pH_1 < pK_A(HCOOH/HCOO^-)$. Donc l'acide HCOOH prédomine dans cette solution !
- Dans la solution (S2) :  
  On a $pH_2 > pK_A(C_6H_5COOH/C_6H_5COO^-)$ Donc l'acide $C_6H_5COOH$ prédomine dans cette solution !

# Exercice 9
1. Les équations de la réaction :
   - L'équation entre $C_3H_6O_3$ et $N_2O_2$ : 
   $$ C_3H_6O_3 \rightleftharpoons C_3H_5O_3^- + N_2O_2 $$
   
   - L'équation entre $HCO_2H$ et $OH^-$ : 
   $$ HCO_2H + OH^- \rightleftharpoons H_2O +  $$

2. Calculons la constante d'équilibre associée à chaque réaction :
   - Pour la première réaction :  
   On a: 
   $$ K_1 = \frac{[C_3H_5O_3^-]_{eq}}{[HNO_2]_{eq} \cdot [C_3H_6O_3]_{eq}} $$
   $$ K_1 = \frac{[C_3H_5O_3]_{eq} \cdot [H_2O]_{eq}}{[C_3H_6O_3]_{eq} \cdot [H^+]_{eq}} $$
   $$ K_1 = \frac{k_{a1}}{k_{a3}} $$

   A.N.: $K_1 = 10^{-pK_a2} = \frac{10^{-3.9}}{10^{-3.3}}$  
   On trouve: $K_1 = 0,25$  

   - Pour la deuxième réaction :  
   On a: 
   $$ K_2 = \frac{[HCOOH]_{eq} \cdot [OH^-]_{eq}}{[HCOO^-]_{eq} \cdot [H_3O^+]_{eq}} $$  
   On a: 
   $$ K_2 = \frac{k_{a1}}{k_{a3}} $$  
   A.N.: $K_2 = 10^{-10} \times 10^{-14} = 10^{-38} \cdot 10^{-10} = 1,58 \times 10^{10} $

# Exercice 10
1. Déterminons l'espèce chimique prédominante pour le couple $C_6H_8O_4/C_6H_7O_4^-$ :
   - Dans le sang, on a un pH = 6 
   Donc $pH < pK_A$, alors $C_6H_8O_4$ est l'espèce chimique prédominante dans le sang.

   - Dans la salive, on a un pH = 7.2  
   Donc l'espèce chimique prédominante est $C_6H_8O_4$.  

   - Dans le suc gastrique, on a : 
   - Dans le suc gastrique, on a un pH = 1.68  
   Donc $pH < pK_A$.

Calculons le rapport $\frac{[C_6H_7O_4^-]}{[C_6H_8O_4]}$ :
On a: 
$$ pH = pK_A + \log \left( \frac{[C_6H_7O_4^-]}{[C_6H_8O_4]} \right) $$  
Donc: 
$$ \log \left( \frac{[C_6H_7O_4^-]}{[C_6H_8O_4]} \right) = pH - pK_A $$
```

<!-- Page 101 -->

```markdown
# Exercice 11

1. Identification des courbes :
   - La courbe (a) représente les variations du pourcentage de la base Ind⁻ en fonction de pH.
   - La courbe (b) représente les variations du pourcentage de l'acide HInd en fonction de pH.

2. D'après les courbes, on a : $pK_A = 7,1$

3. Identifions la teinte de chaque solution
   - Pour la solution de $pH = 3,5$, on a : $pH < pK_A - 1$  
     Alors la solution prend la teinte de la forme acide HInd (jaune).
   - Pour la solution de $pH' = 11$, on a : $pH' > pK_A + 1$  
     Alors la solution prend la teinte de la forme basique Ind⁻ (bleue).

4. Calculons le pourcentage de la forme acide :  
   a – Calcul du pourcentage de $\alpha(HInd)$  
   On a : $\alpha(HInd) = \frac{[HInd]}{[HInd] + [Ind⁻]}$  
   Donc : $\alpha(HInd) = \frac{[HInd]}{[HInd] + [Ind⁻]}$  
   Alors:  
   $$ \alpha(HInd) = \frac{1}{1 + 10^{pH - pK_A}} $$  
   En remplaçant (2) dans (1), on trouve :  
   $$ \alpha(HInd) = \frac{1}{1 + 10^{10.4-7.1}} $$  
   On trouve : $\alpha(HInd) = 0,998 = 99,8\%$

   b – Calculons le pourcentage de la forme basique :
   - On a : $\alpha(Ind⁻) + \alpha(HInd) = 1$  
   Donc : $\alpha(Ind⁻) = 1 - \alpha(HInd)$  
   A.N. : $\alpha(Ind⁻) = 1 - 0,998$  
   On trouve : $\alpha(Ind⁻) = 0,002 = 0,2\%$

   c – Puisque $\alpha(HInd) \gg \alpha(Ind⁻)$, donc cette solution prend la teinte de la forme acide HInd (la solution est colorée en jaune).

# Exercice 12

1. L'équation de la réaction du dosage :
   $$ HClO_{(aq)} + HO^{-}_{(aq)} \rightarrow ClO^{-}_{(aq)} + H_2O_{(l)} $$

   À l'équivalence, on a : $C_A V_A = C_B V_B E$  
   Donc :  
   $$ C_A = \frac{c_B V_B E}{V_A} $$  
   A.N. : $C_A = \frac{2 \times 10^{-2} \times 12 \times 10^{-3}}{10 \times 10^{-3}}$  
   On trouve : $C_A = 2,4 \times 10^{-2} \, mol \cdot L^{-1}$

2. a – Déterminons le réactif limitant  
   On a : $V_B = 7 \, mL$ et $V_E = 12 \, mL$  
   Puisque $V_B < V_E$, alors le réactif limitant est le titrant $HO^{-}$.

   b – Le tableau d’avancement associé à cette réaction

   | Équation                                        | HClO_{(aq)} + HO^{-}_{(aq)} \rightarrow ClO^{-}_{(aq)} + H_2O_{(l)} |
   |------------------------------------------------|-----------------------------------------------------------------------|
   | État                                           | Avancement   | Les quantités de matière en mole (mol)                             |
   | Initial                                       | 0            | $C_A V_A$      | $C_B V_B$      | 0                                            |
   | Intermédiaire                                  | $x$          | $C_A V_A - x$ | $C_B V_B - x$ | $x$                                          |
   | Final                                         | $x_f$        | $C_A V_A - x_f$ | $C_B V_B - x_f$ | $x_f$                                       |

ÉLECTRON & 2BAC-PC & Chimie
```

<!-- Page 102 -->

```markdown
c – Trouvons l'expression du taux d'avancement final associé à cette réaction.
On sait que $ \tau = \frac{x}{x_{max}} \quad (1)$

- Puisque $HO^-$ est réactif limitant, donc $C_B V_B = x_{max} = 0$
Alors : $x_{max} = C_B V_B \quad (2)$
D'après le tableau d'avancement

on a : $n_f(HO^-) = C_B V_B - x_F$
Donc : $x_F = C_B V_B - n_f(HO^-)$
Avec $[HO^-] = \frac{[H_3O^+]}{K_e}$
On trouve: $x_F = C_B V_B - \frac{10^{-pK_e}(V_A+V_B)}{10^{pH}} \quad (3)$
On remplace $(2)$ et $(3)$ dans $(1)$
On trouve: $ \tau = \frac{C_B V_B - 10^{-pK_e}(V_A+V_B)}{C_B V_B}$
On obtient: $ \tau = 1 - \frac{10^{-pK_e}(V_A+V_B)}{C_B V_B}$
Donc : $ \alpha(HClO) = \frac{1}{1 + 10^{pH - pK_A}} \quad (4)$
Et on a : $pH = pK_A + \log \left(\frac{[ClO^-]}{[HClO]}\right)$
Donc : $[ClO^-] = 10^{pH - pK_A} \quad (5)$
On remplace $(5)$ dans $(4)$, on trouve:
$$\alpha(HClO) = \frac{1}{1 + 10^{7.65 - 7.5}}$$
A.N.: $\alpha(HClO) = 0,414 = 41,4\%$

- Calculons $\alpha(ClO^-)$
On a : $\alpha(ClO^-) + \alpha(HClO) = 1$
Donc: $\alpha(ClO^-) = 1 - \alpha(HClO)$
A.N.: $\alpha(ClO^-) = 1 - 0,414$

5. Calculons la constante d'équilibre associée à cette réaction
On a: 
$$
k = \frac{[ClO^-]}{[HClO][H_3O^+]}
$$
Alors: 
$$
k = \frac{[HClO][H_3O^+]}{[ClO^-][H_3O^+]}
$$
On obtient: $k = \frac{k_A}{k_e}$
D'où : $k = 10^{-pK_A} \cdot 10^{-pK_e}$
A.N.: $k = 10^{-14}$
On trouve: $k = 3,16 \times 10^6$

Exercice 13
1. Les caractéristiques de la réaction du dosage :
    - Rapide – Totale - Unique
L'équation de la réaction du dosage :
$$
H_3O^+(aq) + CH_3COO^-(aq) \rightarrow H_2O(l) + CH_3COOH(aq)
$$
Déterminons la valeur de $C_1$
À l'équivalence, on a : $C_1 V_1 = C_2 V_2$

b – Le degré d'avancement associé à cette réaction
| Équation                      | $H_3O^+(aq) + CH_3COO^-(aq) \rightarrow H_2O(l) + CH_3COOH(aq)$ |
|-------------------------------|-------------------------------------------------------------|
| État                         | Avancement | Les quantités de matière en mole (mol) |
| Initial                       | 0         | $C_B V_B$           | $C_A V_A$ |
| Intermédiaire                 | $x$       | $C_B V_B - x$      | $C_A V_A - x$ |
| Final                         | $x_F$     | $C_B V_B - x_F$    | $C_A V_A - x_F$ |

c – Montrons que : $ \tau = \frac{2x_{10^{-pH}(V_1 + V_2)}}{C_1 V_1}$
On sait que $ \tau = \frac{x}{x_{max}}$
On trouve : 
$$
2C_2 V_2 - x_{max} = 0
$$
Puisque $H_3O^+$ est le réactif limitant, alors $C_2 V_2 - x_{max} = 0$
Donc $x_{max} = C_2 V_2 \quad (2)$
D'après le tableau d'avancement, on a :
$$
n_f(H_3O^+) = C_2 V_2 - x_F
$$
Donc : $x_F = C_2 V_2 - [H_3O^+](V_1 + V_2)$
Alors: $x_F = C_2 V_2 - 10^{-pH}(V_1 + V_2) \quad (3)$
On remplace $(2)$ et $(3)$ dans $(1)$.
On obtient: 
$$
\tau = 1 - \frac{10^{-pH}(V_1 + V_2)}{C_1 V_1}
$$
D'où : $ \tau = 1 - 10^{-pH}(V_1 + V_2)$
Avec $V_e = V_2 e$
D'où: $ \Rightarrow \tau = 1 - \frac{C_1 V_1}{C_2 V_2}$
Alors : $\tau = 1 - \frac{C_1 V_1}{2 \cdot 10^{-pH}(V_1 + V_2)}$
d – On a : $ \tau = 1 - 10^{-pH(V_1 + V_2)}$
$$
C_1 = \frac{C_1 V_1}{2}
$$
A.N.: $C_1 = 10^{-8}(2 \times 25 + 15) \times 10^{-3} \approx 1$
Puisque $1 \tau$ donc la réaction du dosage est totale.
```

<!-- Page 103 -->

```markdown
e – Calculons la valeur de $pK_A$ du couple 
$CH_3COOH/CH_3COO^-$

On sait que $pH = pK_A + \log\left(\frac{[CH_3COO^-]}{[CH_3COOH]}\right)$ (6)

D'après le tableau d'avancement, on a : 
$n_f(CH_3COO^-) = C_1V_1 - C_2\frac{V_E}{2}$

Avec $C_1V_1 = C_2V_2E$

Donc : $n_f(CH_3COO^-) = C_2\frac{V_2E}{2}$

Alors : $[CH_3COO^-] = \frac{C_2V_2E}{V_1 + V_E}$ (7)

Et $n_f(CH_3COOH) = C_2V_2$

Donc : $[CH_3COOH] = \frac{C_2V_2E}{2}$

D'où : $[CH_3COOH] = \frac{C_2V_2E}{2V_1 + V_E}$ (8)

On remplace (7) et (8) dans (6), on trouve : 
$$ pH = pK_A + \log\left(1\right) $$
D'où : $pH = pK_A + \log(1)$

Finalement, on trouve : $pK_A = pH - 4,8$

f – Déduisons la valeur de la constante d'équilibre associée à la réaction du dosage

On a : $K = \frac{[CH_3COO^-][H_3O^+]}{[CH_3COOH]}$

Donc $K = \frac{1}{K_A}$

Alors $K = 10^{pK_A} = 10^{4,8} = 6,3 \times 10^4$

4 – Calculons la valeur de la masse $m$

On a : $n(NaCH_3COO) = C_1V$

Donc : $\frac{m}{M} = C_1V$

Alors : $m = C_1VM$

A.N. : $n = 9 \times 10^{-3} \times 100 \times 10^{-3} \times 82$

On trouve : $m = 7,38 \times 10^{-2} \, g$

## Exercice 14

I – Étude de la réaction de l’acide méthanoïque avec l’eau.

1. L'équation de la réaction de l'acide méthanoïque avec l'eau : 
$$ HCOOH_{(aq)} + H_2O \rightleftharpoons HCOO^-_{(aq)} + H_3O^+_{(aq)} $$

2. Le d'avancement associé à cette réaction

$$ HCOOH_{(aq)} + H_2O \rightleftharpoons H_3O^+_{(aq)} + HCOO^-_{(aq)} $$

État | Avancement | Les quantités de matière en mole (mol)
---|---|---
Initial | $0$ | $CV$
Intermédiaire | $x$ | $CV - x$
Équilibre | $x_{eq}$ | $CV - x_{eq}$

3. Trouvons l'expression de $\tau$ :

On sait que : $\tau = \frac{x_{eq}}{x_{max}}$

Si la réaction est totale, le réactif limitant est $HCOOH$ donc $x_{max} = C \cdot V$

D'après le tableau d'avancement on a : 
$x_{eq} = n_{eq}(H_3O^+)$

Donc : $x_{eq} = [H_3O^+]_{eq}$

On remplace $x_{eq}$ et $x_{max}$ dans l'expression de $\tau$, on trouve : 
$$ \tau = \frac{C}{{[H_3O^+]_{eq}}} $$

Avec $[H_3O^+]_{eq} \Leftrightarrow [H_3O^+]_{eq} = \tau \cdot C$

Donc : $Q_{eq} = \frac{C \cdot \tau}{1 - \tau}$

Enfin on trouve : $Q_{eq} = \frac{C \cdot \tau}{1 - \tau}$

A.N. : $Q_{eq} = (3,47 \times 10^{-1})^{-2} \times 10^{-3}$

Donc : $Q_{eq} = 1,84 \times 10^{-4}$

5. On a : $K_A = k$

Donc : $pK_A = -\log(k)$

A.N. : $pK_A = 3,73$

6. Calculons $α(HCOO^-)$ et $α(HCOOH)$ :

On a : 
$$ α(HCOO^-) = \frac{[HCOO^-]}{[HCOOH] + [HCOO^-]} $$

Avec $[HCOO^-] = [H_3O^+]$

Et $[HCOOH] = C - [H_3O^+]$

Alors : $α(HCOO^-) = \frac{[H_3O^+]}{C}$$
```

<!-- Page 104 -->

```markdown
# 1. Dosage d'une solution d'acide méthanoïque par une solution d'hydroxyde de sodium

D'où : $\alpha(HCOO^-) = \tau$

A.N. : $\alpha(HCOO^-) \approx 0,35 \approx 35\%$

On sait que : $\alpha(HCOOH) + \alpha(HCOO^-) = 1$

Donc : $\alpha(HCOOH) = 1 - \alpha(HCOO^-)$

On trouve : $\alpha(HCOOH) = 65\%$

## II. Le montage du dosage

1. Solution titrante $(Na^+(aq) + HO^-(aq))$
2. Bécher
3. Solution titrée $HCOOH$
4. Barreau aimanté
5. Agitateur magnétique

---

# 2. L'équation de la réaction du dosage :

$$ HCOOH + HO^- \rightarrow HCOO^- + H_2O $$

D'après la courbe, on : $E(V_BE = 10 \text{ mL}, pH_E = 7,6)$

D'après la relation d'équivalence, on a : $C_A V_A = C_B V_{BE}$

Donc : $C_A = \frac{C_B V_{BE}}{V_A}$

On trouve : $C_A = \frac{10^{-3}}{2 \times 10^{-2}}$

$$ C_A = 5 \times 10^{-2} \text{ mol.L}^{-1} $$

5. Calculons $[HCOO^-]$ pour $V_B = \frac{V_{eq}}{2}$

On a : $pH = pK_A + \log \left( \frac{[HCOO^-]}{[HCOOH]} \right)$

Donc : 

$$ \log \left( \frac{[HCOO^-]}{[HCOOH]} \right) = pH - pK_A $$

Alors : 

$$ \frac{[HCOO^-]}{[HCOOH]} = 10^{pH - pK_A} $$

A.N. : $[HCOO^-] = 10^{9 - 3,73}$

On trouve : 

$$ [HCOO^-] = 1,86 \times 10^5 $$

---

6. On a $7,2 < pH_E < 7,6 < 8,8$, donc l'indicateur coloré convenable est le rouge de crésol.

---

# Exercice 15

1. L'équation de la réaction de l'ammoniaque avec l'eau :

$$ NH_3(aq) + H_2O \rightleftharpoons NH_4^+(aq) + HO^-(aq) $$

2. Le tableau d’avancement associé à cette réaction.

| Équation bilan                                  | Etat         | Avancement | Les quantités de matière en mole (mol) |
|------------------------------------------------|--------------|------------|------------------------------------------|
| $NH_3(aq) + H_2O \rightleftharpoons NH_4^+(aq) + HO^-(aq)$ | Initial      | 0          | $CV$                                    |
|                                                | Intermédiaire | $x$        | $CV - x$                                |
|                                                | Équilibre    | $x_{eq}$   | $CV - x_{eq}$                           |

---

3. Calculons le taux d’avancement final associé à cette réaction

On a : $\tau = \frac{x_{eq}}{x_{max}} = \frac{[HO^-]_{eq} V}{CV} = \frac{[HO^-]_{eq}}{C} (1)$

Si cette réaction est totale, le réactif limitant est $HO^-$ donc $CV = x_{max} = 0$

Alors : $CV = x_{max} (2)$

Et d'après le tableau d'avancement on a : $n_{eq}(HO^-) = x_{eq}$

Donc : $x_{eq} = [HO^-]_{eq} \cdot V$

avec $[H_3O^+] = 10^{-ke}$.

Alors : $x_{eq} = \frac{[H_3O^+]_{eq} \cdot V}{[H_3O^+]_{eq} + 10^{-pH}}$

D'où : $\tau = \frac{10^{10,75 - 14}}{2 \times 10^{-2}} = 2,81 \times 10^{-2} = 2,81\%$

Puisque $\tau < 1$ donc cette réaction est limitée.

---

4. Calculons la valeur de $Q_{eq}$ :

On a : 

$$ Q_{eq} = \frac{[HO^-]_{eq}[NH_4^+]_{eq}}{[NH_3]_{eq}} (a) $$

D'après le tableau d'avancement on a : 

$$ [HO^-]_{eq} = [NH_4^+]_{eq} (b) $$

et : $CV - x_{eq} = C - [HO^-]_{eq}$

Donc : $[NH_3]_{eq} = C - [HO^-]_{eq}$

On remplace (b) et (c) dans (a), on trouve : 

$$ Q_{eq} = \frac{[HO^-]_{eq}^2}{C - [HO^-]_{eq}} \cdot C $$

$$ Q_{eq} = \frac{C \cdot \tau}{C - \tau \cdot C} $$
```

<!-- Page 105 -->

```markdown
Finalement on trouve : 
$$ Q_{eq} = \frac{C \cdot \tau}{1 - \tau} $$
D'où : $Q_{eq} = \frac{(2.81 \times 10^{-2})^2 \times 2 \times 10^{-2}}{1 - 2.81 \times 10^{-2}}$
On trouve : $Q_{eq} = 1,63 \times 10^{-5}$

Calculons les valeurs de $pK_A$
On : $K = \frac{[NH_3]_{eq} [H_2O]^2}{[NH_4^+]_{eq}}$
Donc : $K = \frac{[NH_4^+][H_2O]^2}{[NH_3]_{eq}}$

D'où : $k_A = \frac{k_e}{K}$
On obtient : $pK_A = -\log(\frac{k_e}{K})$

On trouve : 
$$ pK_A = -\log\left(\frac{10^{-14}}{1,63 \times 10^{-5}}\right) $$
On a : $pH = 10,75$ et $pK_A = 9,21$
Puisque $pH > pK_A$, donc la base $NH_3$ prédomine dans la solution.

II-Dosage d'une solution de l'ammoniac par une solution d’acide chlorhydrique
1. Les caractéristiques de la réaction du dosage : rapide - sélective - totale
2. L'équation de la réaction du dosage : 
$$ NH_3(aq) + H_3O^+(aq) \rightarrow NH_4^+(aq) + H_2O(l) $$
3. D'après la courbe, on a $V_AE = 22,5 \, mL$ et $pH_E = 5,6$
4. D'après la relation d'équivalence, on a : $C_B V_B = C_A V_A E$
Donc : 
$$ C_B = \frac{C_A V_A E}{V_B} = \frac{2 \times 10^{-2} \times 22,5 \times 10^{-3}}{30 \times 10^{-3}} $$
On trouve : $C_B = 1,5 \times 10^{-2} \, mol \cdot L^{-1}$

$$ \tau - \text{ Montrons que } \tau = 1 - \frac{10^{-pH}}{C_{B}V_B} $$
- Le tableau d'avancement associé à cette réaction

| Équation                                     |               |
|----------------------------------------------|---------------|
| $NH_3(aq) + H_3O^+(aq) \rightarrow NH_4^+(aq) + H_2O(l)$ |           |
| **État**                                     | **Avancement**| **Les quantités de matière en mole (mol)** |
| Initial                                      | 0             | $C_A V_A$   |
| Intermédiaire                                | $x$           | $C_A V_A - x$   |
| Final                                        | $x_f$         | $C_A V_A - x_f$  |
|                                              |               | $C_B V_B - x_f$ |
| **En excès**                                 |               | $x_f$          |

Puisque $V_A < V_E$, donc le réactif limitant est le titrant $H_3O^+$, donc $C_A V_A - x_{max} = 0$
Alors : $x_{max} = C_A V_A (1)$
Et d'après le tableau d'avancement, on a : 
$$ n_{f}(H_3O^+) = C_A V_A - x_f $$
Donc : $x_f = C_A V_A - n_{f}(H_3O^+)$
Alors : $x_f = C_A V_A - [H_3O^+](V_A + V_B)$
D'où : $x_f = C_A V_A - 10^{-pH}(V_A + V_B)$
Et on sait que : 
$$ \frac{x_f}{x_{max}} = (2) \text{ dans } (3) $$
On remplace (1) et (2) dans (3)
On trouve : 
$$ \tau = \frac{C_A V_A - 10^{-pH}(V_A + V_B)}{C_A V_A} $$
Alors : $\tau = 1 - \frac{10^{-pH}(V_A + V_B)}{C_A V_A}$
$$ V_A = \frac{V_E}{3} $$

Et d'après la courbe, pour $V_A = \frac{V_E}{3}$, à : $pH = 9,5$
A.N. : $\tau = 1 - 10^{-9,5}(22,5 + 30) \times 10^{-3}$
On trouve : $C_A = 1,5 \times 10^{-2} \times 30 \times 10^{-3}$

On trouve : $pH_E = 5,6$ 
Puisque $5,2 \leq pH_E \leq 6,8$, donc l'indicateur convenable est le rouge de bromophénol.

### Exercice 16
L'équation de la réaction de $CH_3OH$ avec l'eau : 
$$ CH_3COOH + H_2O \rightarrow CH_3COO^- + H_3O^+ $$
| **Équation bilan**                          |               |
|----------------------------------------------|---------------|
| $CH_3COOH + H_2O \rightarrow CH_3COO^- + H_3O^+$ |           |
| **État**                                     | **Avancement**| **Les quantités de matière en mole (mol)** |
| Initial                                      | 0             | $CV$         |
| Intermédiaire                                | $x$           | $CV - x$     |
| Équilibre                                    | $x_{eq}$      | $CV - x_{eq}$ |
| **En excès**                                 |               | $0$          |
```

<!-- Page 106 -->

```markdown
## Trouvons l'expression de $\tau$ :
- On sait que : $\tau = \frac{x_{eq}}{x_{max}}$
- Si la réaction est totale, le réactif limitant est $CH_3COOH$ donc $x_{max} = C \cdot V$
- D'après le tableau d'avancement on a :
  - $x_{eq} = n_{eq}([H_3O^+])$
  - Donc : $x_{eq} = [H_3O^+]_{eq} \cdot V$
- On remplace $x_{eq}$ et $x_{max}$ dans l'expression de $\tau$, on trouve : 
$$ \tau = \frac{[H_3O^+]_{eq}}{C \cdot V} $$
  
Donc : $[H_3O^+]_{eq} \; avec \; [H_3O^+]_{eq} = 10^{-pH}$  
Alors : $= 10^{-pH}$  
A.N. : $\tau = 10^{-3.4} = 3.98 \times 10^{-2} = 3.98\%$  
Puisque $\tau < 1$ donc cette réaction est limitée

Avec $\tau = [H_3O^+]_{eq} \Leftrightarrow [H_3O^+]_{eq} = \tau \cdot C$  
Donc : $Q_{eq} = \frac{C \cdot x_{eq}}{C - \tau \cdot C}$  
Finalement on trouve : 
$$ Q_{eq} = \frac{C \cdot x^2}{1 - \tau} $$
A.N. : $Q_{eq} = \frac{(3.98 \times 10^{-2})^2 \times 10^{-3}}{1 - 3.98 \times 10^{-2}}$  
On trouve : $Q_{eq} = 1.65 \times 10^{-5}$

### 5 On a : $k = K_A = k$
Donc : $pK_A = -\log(k)$  
A.N. : $pK_A = -\log(Q_{eq}) = 1.65 \times 10^{-5}$  
On trouve : $pK_A = 4.78$

### 6 Calculons $\alpha (CH_3COOH)$ et $\alpha (CH_3COO^-)$
- Calculons la valeur de $\alpha (CH_3COOH)$  
$$ \alpha (CH_3COOH) = \frac{[CH_3COOH]}{[CH_3COOH] + [CH_3COO^-]} $$
- Avec $[CH_3COO^-] = [H_3O^+]_{eq} = 10^{-pH}$  
Et $[CH_3COOH] = C - [H_3O^+] = C - 10^{-pH}$  
Alors : $\alpha (CH_3COO^-) = \frac{10^{-pH}}{10^{-pH} + C - 10^{-pH}}$  
Donc : $\alpha (CH_3COO^-) = \tau$  
A.N. : $\alpha (CH_3COO^-) = 3.98 \times 10^{-2} = 3.98\%$

### Calculons la valeur de $\alpha (CH_3COOH)$
On a : $\alpha (CH_3COOH) = 1 - \alpha (CH_3COO^-)$
On trouve : $\alpha (CH_3COOH) = 96.02\%$

## II-Dosage d'une solution d'acide éthanoïque par une solution d'hydroxyde de sodium
- Le titré est $CH_3COOH$ et le titrant est $OH^-$
- L'équation de la réaction du dosage : 
$$ CH_3COOH_{(aq)} + HO^-_{(aq)} \rightarrow CH_3COO^-_{(aq)} + H_2O_{(l)} $$

D'après la courbe, on a : $A_E \approx 4 mL \; et \; pH \approx 8.3$  
D'après la relation d'équivalence : $C_A V_A = C_B V_B$  
Donc : $C_A = \frac{C_B V_B}{V_A}$  
A.N. : $C_A = \frac{1.5 \times 10^{-2} \times 4 \times 10^{-3}}{5 \times 10^{-2}} = 1.2 \times 10^{-2} \; mol \; L^{-1}$

### 7 Calculons la masse de l'acide éthanoïque dans la solution $(S_0)$
On a : $n_0(CH_3COOH) = C_0 V_0$ avec $C_0 = 100 \; C_A$  
Donc : 
$$\frac{m_0}{M} = 100 C_A V_0$$  
Alors : $m_0 = 100 C_A V_0$  
A.N. : $m_0 = 100 \times 1.2 \times 10^{-2} \times 1 \times 10^{-3} \times 60 = 7.2 \times 10^{-2} \; g$

### 8 Vérifions le degré d'acidité du vinaigre en tenant la solution $(S_0)$
On a : 
$$ x_0 = \frac{m_0}{m_{p}} \cdot 100 \; A.N. : x_0 = \frac{7.2 \times 10^{-2}}{1.02 \times 1} \cdot 100 = 7.06 $$

### a - Le tableau d'avancement associé à la réaction du dosage
| Équation | $H_3COOH_{(aq)} + HO^-_{(aq)} \rightarrow CH_3COO^-_{(aq)} + H_2O_{(l)}$ |
| --- | --- |
| État | Avancement | Les quantités de matière en mole (mol) |
| Initial | 0 | $C_A V_A$ | $C_B V_B$ | 0 |
| Intermédiaire | $x$ | $C_A V_A - x$ | $C_B V_B - x$ | $x$ |
| Final | $x_f$ | $C_A V_A - x_f$ | $C_B V_B - x_f$ | $x_f$ |
```


<!-- Page 107 -->

```markdown
b – Calculons la valeur du taux d'avancement associé à la réaction du dosage.
- On sait que $\tau = \frac{x}{x_{max}}$
- Puisque $V_B < V_E$ donc le réactif limitant est le titrant $HO^-$ donc $x_{max} = C_B V_B$
- Et d'après le tableau d'avancement: $n_f(HO^-) = C_B V_B - x_f$
Alors $x_f = C_B V_B - n_f(HO^-)$
D'où $x_f = C_B V_B - 10^{pH-pK_A} [HO^-]_f$
On remplace $x_{max}$ et $x_f$ dans l'expression du $\tau$ on trouve : 
$$ \tau = \frac{C_B V_B - 10^{pH-pK_A} (V_A + V_B)}{C_B V_B} $$
Alors : $\tau = 1 - 10^{pH-pK_A} \frac{(V_A + V_B)}{C_B V_B}$ avec pH = 5,2
A.N. : $\tau = 1 - 10^{-2} = 1$
Puisque $\tau \approx 1$, cette réaction est totale !

c – Calculons le rapport $\frac{[CH_3COO^-]}{[CH_3COOH]}$
On a : $pH = pK_A + \log \left(\frac{[CH_3COO^-]}{[CH_3COOH]}\right)$
Donc : $\log \left(\frac{[CH_3COO^-]}{[CH_3COOH]}\right) = pH - pK_A$
Alors : $[CH_3COO^-] = 10^{(pH - pK_A)} [CH_3COOH]$
A.N. : $\frac{[CH_3COO^-]}{[CH_3COOH]} = 10^{(5,2 - 4,78)}$
On trouve : $\frac{[CH_3COO^-]}{[CH_3COOH]} = 2,63$

On a : $pH_E = 8,4$
Puisque $7,2 < pH_E < 8,8$, donc l'indicateur coloré convenable est le rouge de Crésol.
```

<!-- Page 108 -->

```markdown
# Évolution d’un système chimique- Transformations spontanées dans les piles et récupération d’énergie

## Objectifs
- Savoir déterminer le sens d’évolution spontanée d’un système chimique.
- Connaître les constituants d’une pile.
- Exploiter le critère d’évolution spontanée pour déterminer le sens d’évolution spontanée d’un système chimique constituant une pile.
- Savoir déterminer la polarité d’une pile.
- Interpréter le fonctionnement d’une pile.
- Savoir déterminer la représentation conventionnelle d’une pile.
- Savoir déterminer la quantité d’électricité débitée par une pile.
- Étudier des piles usuelles.

## Axes du cours
### Le critère d’évolution spontanée d’un système chimique
- Le quotient de réaction- La constante d’équilibre « rappel »
- Critère d’évolution spontanée

### Les piles électrochimiques
- Constitutions d’une pile électrochimique
- Exemple: La pile Daniell
- Caractéristiques d’une pile
- Évolution spontanée d’un système chimique constituant une pile
- La quantité d’électricité fournie d’une pile
```

<!-- Page 109 -->

```markdown
# I Le critère d’évolution spontanée d’un système chimique

### ① Le quotient de réaction- La constante d’équilibre « rappel »

Le quotient de réaction est une **grandeur** caractérisant un système chimique dans un état donné.  
On considère la réaction chimique suivante :  
$$ aA(aq) + bB(aq) \rightleftharpoons cC(aq) + dD(aq) $$

Le quotient de réaction associé à cette réaction est :  
$$ Q_r = \frac{[C]^{c}[D]^{d}}{[A]^{a}[B]^{b}} $$  
où $[A]$, $[B]$, $[C]$, et $[D]$ : sont les concentrations molaires effectives en mol.L$^{-1}$  
$a$, $b$, $c$ et $d$ : sont les coefficients stoechiométriques.  
$Q_r$ : est une grandeur sans unité.

Dans un état d’équilibre d’un système chimique, le quotient de réaction prend une **valeur constante** qui ne dépend que de la température et de la nature des réactifs ; cette valeur est appelée la **constante d’équilibre** :  
$$ K = Q_{r, eq} = \frac{[C]^{c}_{eq}[D]^{d}_{eq}}{[A]^{a}_{eq}[B]^{b}_{eq}} $$

### ② Critère d’évolution spontanée

Pour prédire le sens d’évolution spontanée d’un système chimique, on utilise comme critère d’évolution spontanée la comparaison de la valeur du quotient de réaction initial $Q_{r,i}$ avec la constante d’équilibre $K$ :

- Si $Q_{r,i} < K$ : le système évolue spontanément dans le sens direct jusqu’à ce que $Q_r = K$.
- Si $Q_{r,i} > k$ : le système évolue spontanément dans le sens indirect jusqu’à ce que $Q_r = K$.
- Si $Q_{r,i} = k$ : le système ne s’évolue pas spontanément et il est en équilibre.

### ✧ Diagramme de critère d’évolution spontanée

![Diagramme de critère d’évolution spontanée](https://example.com/diagram)

- $Q_{r,i}$ 
- $K$
  
Le système évolue spontanément dans le sens direct  
Le système évolue spontanément dans le sens indirect  
Le système est en équilibre  

### ⚠️ Remarque

La réaction est considérée totale lorsque $K > 10^{4}$, dans ce cas une seule flèche dans l’équation de réaction.

---

# II Les piles électrochimiques

### ① Constitutions d’une pile électrochimique

**Les constituants d’une pile électrochimique**

Une pile électrochimique est un **générateur** qui transforme de l’énergie chimique fournie par une réaction d’oxydoréduction spontanée en énergie électrique.

En générale une pile est constituée par :  
- Deux plaques métalliques $M_1$ et $M_2$ appelées **électrodes** ; la première plongée dans une solution contenant les ions $M_1^{+}$, et la deuxième plongée dans une solution contenant les ions $M_2^{2+}$.  
- Pont ionique reliant les deux solutions.

### ⚙️ Représentation conventionnelle :

$\Theta \ M_1/M_1^{+} || M_2/M_2^{2+}$
```

<!-- Page 110 -->

```markdown
# Réactions aux électrodes

- Un ampèremètre branché aux bornes de la pile indique le passage du courant électrique de la plaque $M_2$ vers la plaque $M_1$, donc les électrons circulent dans le circuit extérieur de la plaque $M_1$ vers la plaque $M_2$.
- La plaque $M_2$ est le pôle positif de la pile s’appelle la cathode, elle est le siège d’une réduction d'équation: 
$$ M_2^{2+} + n_2 e^- \leftrightarrow M_2 $$
- La plaque $M_1$ est le pôle négatif de la pile s’appelle l’anode, elle est le siège d’une oxydation d'équation: 
$$ M_1 \leftrightarrow M_1^{n+} + n_1 e^- $$
- L’équation bilan de la réaction qui se produit au cours de fonctionnement de la pile est : 
$$ n_2 M_1 + n_1 e^- = M_2^{2+} = n_2 M_1^{n+} + n_1 e^- = M_2 $$

## Le pont ionique

Le pont ionique a deux rôles:
- Il assure la fermeture du circuit électrique par migration des ions sans que les deux solutions se mélangent.
- Il assure la neutralité des deux solutions : lors du fonctionnement de la pile la concentration des ions $M_1^{n+}$ augmente dans la solution du premier compartiment a, et la concentration des ions $M_2^{2+}$ diminue dans la solution du deuxième compartiment et pour assurer la neutralité des deux solutions les anions ($Cl^-$ par exemple) du pont ionique migrent vers le premier compartiment, et les cations ($Na^+$ par exemple) du pont ionique migrent vers la solution du deuxième compartiment.

## Exemple: La pile Daniell
### Description de la pile Daniell

- La pile Daniell est constituée de deux compartiments liés par un pont salin.
- Le premier compartiment se compose d'une plaque de cuivre plongée dans une solution de sulfate de cuivre ($Cu^{2+}_{(aq)}+SO_4^{2-}_{(aq)}$), ce qui constitue la première demi-pile qu’on appelle électrode.
- Le deuxième compartiment se compose d'une plaque de zinc plongée dans une solution de sulfate de zinc ($Zn^{2+}_{(aq)}+SO_4^{2-}_{(aq)}$), ce qui constitue la deuxième demi-pile qu’on appelle aussi électrode.
- Le pont salin (ionique) qui relie les deux solutions constituées d'une solution de chlorure de sodium ($Na^{+}_{(aq)}$) qu’un conducteur électrique.

### Réactions aux électrodes

- La plaque de cuivre est le pôle positif de la pile s’appelle la cathode : est le siège d’une réduction d'équation: 
$$ Cu^{2+}_{(aq)} + 2 e^- \leftrightarrow Cu_s $$
- La plaque de zinc est le pôle négatif de la pile s’appelle l’anode : est le siège d’une oxydation d'équation: 
$$ Zn_s \leftrightarrow Zn^{2+}_{(aq)} + 2 e^- $$
- L’équation bilan de la réaction qui se produit au cours de fonctionnement de la pile est: 
$$ Cu^{2+}_{(aq)} \leftrightarrow Cu_s + Zn^{2+}_{(aq)} $$
- Représentation conventionnelle : 
$$ \large \text{M}_1 / \text{M}_1^{n+}/ / \text{M}_2^{n+}/\text{M}_2 $$
```

<!-- Page 111 -->

```markdown
### ③ Caractéristiques d’une pile

Une pile ou générateur électrochimique est un dipôle actif qui se caractérise par :
- Pôle positif $P$, et pôle négatif noté $N$.
- Une force électromotrice $E$, exprimé en volt $(V)$.
- Une résistance interne $r$, exprimé en ohm $(Ω)$.
- La loi d’Ohm d’une pile est donnée par la relation suivant $u_{PN} = E - r.I$ où $u_{PN}$ est la tension aux bornes de la pile en volt $(V)$.
- La polarité d’une pile est déterminée à l’aide d’un ampèremètre branché en série, ou à l’aide d’un voltmètre branché aux bornes de la pile.

❖ Remarques
- La force électromotrice représente la tension aux bornes de la pile lorsqu’elle est isolée.
- La force électromotrice dépend de la température et des concentrations des ions métalliques dans le compartiment.

### ④ Évolution spontanée d’un système chimique constituant une pile

- Lorsque la pile se fonctionne, elle constitue un système chimique hors équilibre.
- Le critère d’évolution spontanée permet de déterminer le sens d’évolution spontanée du système chimique constituant la pile.
- Au cours de fonctionnement de la pile l’avancement $x$ de la réaction augment donc le quotient de réaction $Q_r$ augment et $I ≠ 0$.
- À l’équilibre la pile ne peut plus débiter de courant $(I = 0)$ et $x = x_{\text{eq}}$ et $Q_r = Q_{r,\text{eq}}$.

### ⑤ La quantité d’électricité fournie d’une pile

La quantité d’électricité débité par une pile pendant une durée $\Delta t$ est :
$$ Q = N.e = n(e^-).N_A.e = n(e^-)F $$
- $N$ est le nombre des électrons qui travers le circuit pendant la durée $\Delta t$.
- $n(e^−)$ est la quantité de matière des électrons traversant le circuit pendant cette durée, 
- $N_A$ est la constante d’Avogadro $N_A = 6,02 \times 10^{23} \text{mol}^{-1}$.
- $e$ : la charge élémentaire : $e = 1,6 \times 10^{-19} C$  
- $F$ : est une constante appelée le faraday, elle représente la valeur absolue de la charge d'une mole d'électrons : $F = 9,65 \times 10^{4} C. \text{mol}^{-1}$.
- Au cours d’une durée de fonctionnement $\Delta t$, la pile débite un courant d’intensité $I$ tel que :
$$ Q = I. \Delta t \text{ avec } I \text{ est en ampère } (A) , \text{ et } \Delta t \text{ en seconde } (s) $$

### ⑥ La capacité d’une pile électrochimique

La capacité d’une pile électrochimique est égale à la charge électrique maximale que la pile peut fournir jusqu'à ce qu'elle soit vidée: $Q_{max} = I. \Delta t_{max}$ tel que $\Delta t_{max}$ est la durée de vie de la pile.
Donc: $$Q_{max} = n(e^-)_{max}.F $$ et $n$ est le nombre d'électrons échangés dans l’équation bilan de la réaction.

### ⑦ Exercice 1

1. La comparaison de la valeur du quotient de réaction initial avec la valeur de la constante d’équilibre permet de prévoir le sens d’évolution spontanée du système chimique.
2. Le système chimique est hors l’équilibre dès l’état lorsqu’e la valeur du quotient de réaction initial est égale à la valeur de la constante d’équilibre.
3. Lors du fonctionnement d’une pile, l’oxydation se produit près de la cathode.
4. Lors du fonctionnement d’une pile, l’oxydation se produit près de la cathode.
5. Le point ionique réalise les solutions des deux compartiments d’une pile peut être remplacer par un conducteur métallique.
6. Lorsque la pile se fonctionne, l’une des solutions des deux compartiments devient chargée positivement et l’autre devient chargée négativement.
7. Lors du fonctionnement de la pile, le courant électrique circule à l’extérieur de la pile de l’anode vers la cathode.
8. La quantité d’électricité fournie par une pile électrochimique est inversement proportionnelle à la durée de fonctionnement de cette pile.

ÉLECTRON & 2BAC-PC & Chimie
```


<!-- Page 112 -->

```markdown
## Exercice 2

- Un volume $V_1 = 15 \, \text{ml}$ d'une solution aqueuse de l'acide méthanoïque $\text{HCOOH}$ de concentration $C_1 = 3 \times 10^{-2} \, \text{mol.L}^{-1}$.
- Un volume $V_2 = 10 \, \text{ml}$ d'une solution aqueuse de méthanoate de sodium $\text{NaHCOO}_{(aq)} + \text{HCOOH}_{(aq)}$ de concentration $C_2 = 1 \times 10^{-2} \, \text{mol.L}^{-1}$.
- Un volume $V_3 = 20 \, \text{ml}$ d'une solution aqueuse de l'ammoniac $\text{NH}_3$ de concentration $C_3 = 2 \times 10^{-3} \, \text{mol.L}^{-1}$.
- Un volume $V_4 = 4 \, \text{ml}$ d'une solution aqueuse de chlorure d'ammonium $(\text{NH}_4^+ + \text{Cl}^-)$ de concentration $C_4 = 4 \times 10^{-2} \, \text{mol.L}^{-1}$.
  
1. Écrire l'équation de la réaction acido-basique qui peut se produire entre l'acide méthanoïque et l'ammoniac.
2. Calculer la valeur de la constante d'équilibre associée à cette réaction.
3. Déterminer le ratio initial du quotient de réaction associé à cette réaction.
4. Déterminer, en justifiant la réponse, le sens d'évolution spontanée du système chimique étudié.

**Donnes :** $pK_A(\text{HCOOH}/\text{HCOO}^-) = 3,8 ; \, pK_A(\text{NH}_4^+/\text{NH}_3) = 9,21$

---

## Exercice 3

On mélange dans un bécher de volume $V$ :

- Un volume $V_1 = 10 \, \text{ml}$ d’une solution aqueuse de chlorure d'aluminium $(\text{Al}^{3+}_{(aq)} + 3 \text{Cl}^-_{(aq)})$ de concentration : $C_1 = 4,5 \times 10^{-2} \, \text{mol.L}^{-1}$.
- Un volume $V_2 = 15 \, \text{ml}$ d’une solution aqueuse de sulfate de zinc $(\text{Zn}^{2+}_{(aq)} + \text{SO}_4^{2-}_{(aq)})$ de concentration $C_2 = 3 \times 10^{-2} \, \text{mol.L}^{-1}$.
- Une plaque de zinc et la lame d'aluminium.

1. Écrire l'équation de la réaction d’oxydoréduction qui peut se produire entre le zinc $\text{Zn}$ et les ions d’aluminium $\text{Al}^{3+}$.
2. Calculer la valeur initiale du quotient de réaction associé à cette réaction.
3. Déterminer en justifiant la réponse, le sens d’évolution spontanée du système chimique étudié.

**Donnes :**
- Les couples mis en jeu sont : $\text{Zn}^{2+}_{(aq)}/\text{Zn}(s)$ et $\text{Al}^{3+}_{(aq)}/\text{Al}(s)$.
- La constante d'équilibre associée à la réaction entre zinc $\text{Zn}$ et les ions d'aluminium $\text{Al}^{3+}$ est : $K = 10^{-90}$.

---

## Exercice 4

À une température $T = 25^\circ \text{C}$, on prépare un volume $V = 100 \, \text{ml}$ d’une solution aqueuse, en apportant :

- Une quantité de matière $n_1 = 2,3 \, \text{mmol}$ de l’ammoniac $\text{NH}_3$.
- Une quantité de matière $n_2 = 5,1 \, \text{mmol}$ de chlorure d’ammonium $(\text{NH}_4^+ + \text{Cl}^-)$.
- Une quantité de matière $n_3 = 2 \, \text{mol}$ du phénol $\text{C}_6\text{H}_5\text{OH}$.
- Une quantité de matière $n_4 = 3 \, \text{mmol}$ phénolate de sodium $(\text{Na}^+ + \text{C}_6\text{H}_5\text{O}^-)$. 

L’ammoniac réagit avec le phénol selon l'équation : 
$$ \text{NH}_3(aq) + \text{C}_6\text{H}_5\text{OH}(aq) \rightleftharpoons \text{NH}_4^+(aq) + \text{C}_6\text{H}_5\text{O}^-(aq) $$

1. Exprimer le quotient de réaction initial en fonction de $n_1$, $n_2$, $n_3$ et $n_4$. Calculer sa valeur.
2. Déterminer en justifiant la réponse, le sens d’évolution spontanée du système chimique étudié.

---

## Exercice 5

On plonge une lame de cuivre et une lame de zinc fraîchement décapées dans une solutions contenant du sulfate de cuivre II $(\text{Cu}^{2+}_{(aq)} + \text{SO}_4^{2-}_{(aq)})$ de $\text{C} = 0,1 \, \text{mol.L}^{-1}$ et de sulfate de zinc II $(\text{Zn}^{2+}_{(aq)} + \text{SO}_4^{2-}_{(aq)})$.

À $25^\circ$, la constante d’équilibre associée à la réaction entre les ions cuivre II et le zinc métallique est : $K = 1,9 \times 10^{37}$. Quel est le sens d’évolution spontanée du système considéré? Le résultat est-il vérifié ?
```

<!-- Page 113 -->

```markdown
# Exercice 6

Le mercure $Hg$ peut réagir avec ses ions $Hg^{2+}_{(aq)}$ selon l’équation suivante : 
$$ Hg_{(l)} + Hg^{2+}_{(aq)} \rightleftharpoons Hg^{2+}_{(aq)} $$

La constante d'équilibre associée à cette réaction est : $K = 10^2$

On introduit une masse $m = 4,012g$ de mercure dans un bécher contenant une solution $(S_1)$ du chlorure de mercure (II) $(Hg^{2+}_{(aq)} + 2Cl^{-}_{(aq)})$ de volume $V_1 = 10mL$ et de concentration $C_1 = 2 \times 10^{-2}mol.L^{-1}$ puis on lui ajoute un volume $V_2 = 20mL$ d'une solution du chlorure de mercure (II) $(Hg^{2+}_{(aq)} + 2Cl^{-}_{(aq)})$ de concentration $C_2 = 4 \times 10^{-2}mol.L^{-1}$.

Notons que le mercure est insoluble dans l’eau.

1. Exprimer le quotient de réaction initiale en fonction de $C_1$, $V_1$, $C_2$, $V_2$, puis calculer sa valeur.
2. Comparer la valeur du quotient de réaction initiale avec celle la constante d’équilibre et déduire le sens d’évolution spontanée de ce système.
3. Dresser le tableau d’avancement associé à cette réaction.
4. Trouver l’expression de la constante d’équilibre de cette réaction en fonction de $C_1$, $V_1$, $C_2$, $V_2$ et $\xi_{aq}$.
5. Calculer la valeur du taux d’avancement final associé à cette réaction. Commenter le résultat obtenu.

**Donnée :** la masse molaire du mercure $M(Hg) = 200,6g.mol^{-1}$.

# Exercice 7

Une pile électrochimique fournit à un circuit électrique un courant électrique d’intensité $I = 21mA$ pendant une durée $\Delta t = 40min$.

1. Calculer la quantité d’électricité fournie par cette pile pendant la durée $\Delta t$.
2. Calculer la quantité de matière des électrons échangés lors de fonctionnement de cette pile pendant la durée $\Delta t$.
3. Calculer l’avancement de la réaction au bout de la durée $\Delta t$ sachant que le nombre d’électrons échangés dans l’équation est : 3. 

**Donnée :** la constante de faraday $F = 9,65 \times 10^{4}C.mol^{-1}$.

# Exercice 8

Dans un bécher $A$, on introduit un volume $V_1 = 100mL$ d’une solution de sulfate de cuivre II $(Cu^{2+}_{(aq)} + SO_4^{2-}_{(aq)})$ de concentration $C_1 = 0,1mol.L^{-1}$ et une plaque de cuivre.

Dans un bécher $B$, on introduit un volume $V_2 = 100mL$ d’une solution de sulfate de zinc II $(Zn^{2+}_{(aq)} + SO_4^{2-}_{(aq)})$ de concentration $C_2 = 0,1mol.L^{-1}$ et une plaque de Zinc.

On relie les solutions des deux béchers par un pont salin qui contient une solution du nitrate de sodium $(Na^+_{(aq)} + NO_3^{-}_{(aq)})$, puis on branche en série entre deux plaques un conducteur ohmique de résistance $R$ et un ampèremètre et un interruptur $K$. (voir la figure ci-contre). 

On ferme l'interrupteur $K$ et on observe que l’ampèremètre montre qu’un courant traverse le circuit et son intensité est : $I = 76mA$.

1. Quels sont les différents porteurs de charges responsables du passage du courant dans le circuit ?
2. Quel est le sens du courant électrique indiqué par l’ampèremètre ?
3. Déterminer en justifiant la réaction chimique se produisant dans chaque bécher.
4. Déduire l’évolution de la réaction qui se produit lors de fonctionnement de cette pile.
5. Déterminer la représentation conventionnelle de cette pile.
6. On laisse cette pile fonctionner pendant une durée $\Delta t = 15min$.
   a. Dresser le tableau d’avancement associé à la réaction qui se produit lors de fonctionnement de cette pile.
   b. Calculer la quantité d’électricité fournie par cette pile pendant la durée $\Delta t$.
   c. Montrer que l’avancement de la réaction au bout de la durée $\Delta t$ peut s’écrire sous la forme suivante : 
   $$ \xi = \frac{I \Delta t}{nF} $$
   puis calculer sa valeur.
   d. Calculer la concentration des ions $Zn^{2+}_{(aq)}$ au bout de la durée $\Delta t$.
   e. Calculer la variation de la masse de la plaque de cuivre au bout de la durée $\Delta t$.

**Données :** 
- La constante de faraday : $F = 9,65 \times 10^{4}C.mol^{-1}$.
- La masse molaire du cuivre : $M(Cu) = 63,55g.mol^{-1}$.
```

<!-- Page 114 -->

```markdown
## Exercice 9

On considère la pile cobalt-argent suivante schématisée ci-contre :
1. Déterminer en justifiant la réponse la polarité de cette pile.
2. Écrire l’équation de la demi-réaction qui se produit près de chaque électrode, et déduire l’équation globale qui se produit lors de fonctionnement de cette pile.
3. Quel est le rôle du pont ionique ?
4. Sachant que la concentration initiale de deux solutions électrolytiques est : $C_1 = 4 \times 10^{-2} \text{mol.L}^{-1}$. Calculer la valeur du quotient de réaction initial associé à cette réaction.
5. Comment évolue ce quotient de réaction lors de fonctionnement de cette pile ?
6. Lors de fonctionnement, la pile débite un courant électrique d’intensité $I = 45\text{mA}$.
   - a – Dresser le tableau d’avancement associé à la réaction qui se produit près de la cathode.
   - b – Trouver l’expression de la durée de $\Delta t_{max}$ en fonction de $V$, $C$, $I$ et $F$, puis calculer sa valeur (on considère que la quantité de matière dans les deux plaques est en excès).
   - c – Calculer la capacité de cette pile. 
     - Données :
       - Le volume des deux à solution : $V = 100 \text{mL}$
       - La constante de faraday : $F = 9,65 \times 10^{4} \text{C.mol}^{-1}$

## Exercice 10

On relie par un pont ionique une demi-pile contenant une plaque de nickel $Ni$ plongée dans une solution de sulfate de nickel $(Ni^{2+}_{(aq)} + SO_4^{2-}_{(aq)})$ de concentration $C_1 = 1 \times 10^{-1} \text{mol.L}^{-1}$, à une autre demi-pile contenant une plaque d’étain $Sn$ plongée dans une solution de sulfate d’étain $(Sn^{2+}_{(aq)} + SO_4^{2-}_{(aq)})$ de concentration $C_2 = 1 \times 10^{-1} \text{mol.L}^{-1}$.
La constante d'équilibre à $25°C$ associée à la réaction : $Ni^{2+}_{(aq)} + Sn(s) \rightleftharpoons Ni(s) + Sn^{2+}_{(aq)} : K = 8,9 \times 10^{-4}$.
1. Prévoir le sens d’évolution du système chimique constituant la pile considérée.
2. Écrire l’équation de la demi-réaction qui se produit près de chaque électrode.
3. Faire un dessin de cette pile et y représenter le mouvement des différents porteurs de charge.
4. Donner le schéma conventionnel de cette pile.
5. Lors de son fonctionnement, la pile débite un courant électrique d’intensité constante $I = 20 \text{mA}$ pendant une durée $\Delta t = 35 \text{min}$.
   - a – Calculer la quantité d’électricité délivrée par la pile pendant cette durée.
   - b – Dresser le tableau d’avancement associé à la réaction qui se produit près de la cathode.
   - c – Calculer la variation de la masse de la plaque $Sn$ d’étain au bout de la durée $\Delta t$.
   - d – Calculer la concentration des ions d’étain $Sn^{2+}_{(aq)}$ au bout de la durée $\Delta t$.
     - Données :
       - Le volume de deux là solution : $V = 100 \text{mL}$
       - La masse molaire d’étain : $M(Sn) = 118,71 \text{g.mol}^{-1}$
       - La constante de faraday : $F = 9,65 \times 10^{4} \text{C.mol}^{-1}$

## Exercice 11

Une pile nickel-zinc comporte deux compartiments :
1. Le premier compartiment est constitué d’une lame de nickel plongée dans une solution de sulfate de nickel $(Ni^{2+}_{(aq)} + SO_4^{2-}_{(aq)})$ de concentration $C_1 = 5 \times 10^{-2} \text{mol.L}^{-1}$ et de volume $V_1 = 100\text{mL}$.
2. Le deuxième compartiment est constitué d’une lame de zinc plongée dans une solution de sulfate de zinc $(Zn^{2+}_{(aq)} + SO_4^{2-}_{(aq)})$ de concentration $C_2 = 5 \times 10^{-2} \text{mol.L}^{-1}$ et de volume $V_2 = 100\text{mL}$.
3. On relie les deux compartiments par un pont ionique contenant une solution de chlorure de sodium et les deux lames par une paire d’un circuit électrique comportant un conducteur ohmique de résistance $R = 502 \text{Ω}$ en voltmètre (voir la figure ci-contre).
   - La constante d’équilibre à $25°C$ associée à la réaction : $Zn^{2+}_{(aq)} + Zn(s) \rightleftharpoons Ni(s) + Zn^{2+}_{(aq)} : K = 1 \times 10^{18}$.
4. Calculez le quotient de réaction initial et déduire le sens de l’évolution du système chimique constituant cette pile.
5. Nommer les éléments $①, ②$ et $③$.
```

<!-- Page 115 -->

```markdown
## Exercice 12
Écrire l'équation de la demi-réaction qui se produit près de chaque électrode.  
Donner la représentation conventionnelle de cette pile.  
Lors de fonctionnement, la pile débite le voltmètre indique la valeur $U_R = 4,8 \text{V}$.  
a - Dresser le tableau d'avancement associé à la réaction qui se produit lors de fonctionnement de la pile.  
b - Trouver l'expression de la durée de vie $\Delta t_{max}$ en fonction de $V_{1},C_{1},U_{R}$ et $F$, puis calculer sa valeur (on considère que la quantité de matière dans les deux plaques est en excès).  
c - Calculer la masse de zinc consommé lors de fonctionnement de cette pile.  

### Données : 
- La masse molaire zinc : $M(Zn) = 65,4 \text{g.mol}^{-1}$  
- La constante de faraday : $F = 9,65 \times 10^{4} \text{C.mol}^{-1}$  

---

## Exercice 13
On considère la pile cobalt-nickel qui est constituée par deux compartiments :
- Le premier compartiment comporte d’une lame de nickel immergée dans une solution de sulfate de nickel 
  $$\text{Ni}^{2+}_{(aq)} + \text{SO}_{4}^{2-}_{(aq)}$$ de concentration $C = 1 \times 10^{-1} \text{mol.L}^{-1}$ et de volume $V = 80 \text{mL}$.  
- Le deuxième compartiment comporte d’une lame de cobalt immergée dans une solution de sulfate de cobalt 
  $$\text{Co}^{2+}_{(aq)} + \text{SO}_{4}^{2-}_{(aq)}$$ de concentration $C = 1 \times 10^{-1} \text{mol.L}^{-1}$ et de volume $V = 80 \text{mL}$.  

On relie les deux compartiments par un pont ionique contenant une solution de potassium et les deux lame par une partie d'un circuit électrique composé d'un conducteur ohmique en ampèremètre.  

La constante d'équilibre à $25 \text{°C}$ associée à la réaction : 
$$\text{Ni}^{2+}_{(aq)} + \text{Co}(s) \rightleftharpoons \text{Ni}(s) + \text{Co}^{2+}_{(aq)}$$ est : $K = 1 \times 10^{2}$.  

1. Calculer le quotient de réaction initial et déduire le sens de l’évolution du système chimique de cette pile.  
2. Nommer les éléments $1, 2$ et $3$.  
3. Donner le schéma conventionnel de cette pile.  
4. Écrire l'équation de la demi-réaction qui se produit près de chaque électrode.  
5. Lors de son fonctionnement, la pile débite un courant électrique d’intensité constante $I = 92 \text{mA}$.  
   a - Dresser le tableau d'avancement associé à la réaction qui se produit lors de fonctionnement de cette pile.  
   b - Pour le pile écrit sous la forme suivante : $x_f = \frac{CV}{(K-1) + K +1}$  
   c - Déduire l'expression de la durée de vie de cette pile en fonction de $I, F, C, V$ et $K$ puis calculer sa valeur.  
   
On donne la constante de faraday : $F = 9,65 \times 10^{4} \text{C.mol}^{-1}$  
```

<!-- Page 116 -->

```markdown
## Exercice 14

Une pile à combustible est un générateur électrochimique produisant une tension électrique.  
Cette pile est constituée de deux compartiments, l’un est contenu une solution de l’éthanol $CH_3OH$ et l’autre contient le dioxygène $O_2$ gazeux. Les deux compartiments sont séparés par un électrolyte acide jouant le rôle d’un pont ionique.

1. Nommer les électrodes A et B.  
2. Écrire l’équation de la demi-réaction qui se produit près de chaque électrode.  
3. Déduire l’équation qui se produit lors du fonctionnement de cette pile.  
4. Donner le schéma conventionnel de cette pile.  
5. Lors de son fonctionnement, la pile débite un courant électrique d’intensité constante $I = 45 mA$ pendant une durée $\Delta t = 3h$.

   a. Calculer la quantité d’électricité délivrée par la pile pendant cette durée.  
   b. Dresser le tableau d’avancement associé à la réaction qui se produit près de l’électrode A.  
   c. Calculer la masse d’éthanol consommée pendant cette durée (on admet que cette réaction est totale).  

**Données :**  
- La masse molaire de l’éthanol: $M = 32 g \cdot mol^{-1}$  
- La constante de faraday: $F = 9,65 \times 10^4 \, C \cdot mol^{-1}$  

## Exercice 15

On considère la pile aluminium-zinc qui est constituée par deux compartiments:  
- Le premier compartiment comporte d'une lame d'aluminium immergée dans une solution de chlorure d'aluminium $(Al^{3+}_{(aq)} + 3Cl^{-}_{(aq)})$ de concentration $C_1 = 2 \times 10^{-2} \, mol \cdot L^{-1}$ et de volume $V = 100 mL$.
  
- Le deuxième compartiment comporte d'une lame de zinc immergée dans une solution de sulfate de zinc $(Zn^{2+}_{(aq)} + SO_4^{2-}_{(aq)})$ de concentration $C_2 = 5 \times 10^{-1} \, mol \cdot L^{-1}$ et de volume $V = 100 mL$.

On relie les deux compartiments par un pont ionique contenant une solution chlorure de potassium et les deux lames par une partie d’un circuit électrique comportant un conducteur ohmique un ampèremètre.  
La constante d'équilibre à $25°C$ associée à la réaction : 

$$ 3Zn^{2+}_{(aq)} + 2Al_{(s)} \rightleftharpoons 3Zn_{(s)} + 2Al^{3+}_{(aq)} \quad K = 1 \times 10^{90} $$

1. Calculer le quotient de réaction initial et déduire le sens de l’évolution du système chimique constituant cette pile.  
2. Indiquer sur le schéma ci-contre le sens du courant électrique.  
3. Donner le schéma conventionnel de cette pile.  
4. La courbe ci-contre représente les variations de la concentration des ions $Zn^{2+}_{(aq)}$ en fonction du temps.

   a. Dresser le tableau d’avancement de la réaction qui se produit lors du fonctionnement de pile  
   b. Montrer que la concentration des ions $Zn^{2+}_{(aq)}$ à un instant $t$ peut s'écrire sous la forme suivante: $[Zn^{2+}] = C_2 + \frac{t}{2F V}$.

En exploitant la courbe de la figure ⓪, déterminer:  
a. La durée de vie de cette pile.  
b. L’intensité du courant fournie par cette pile.  
c. Calculer la capacité de cette pile.  

**Donnée :**  
- La constante de faraday: $F = 9,65 \times 10^4 \, C \cdot mol^{-1}$
```

<!-- Page 117 -->

```markdown
# Correction

## Exercice 1
1. Répondons par vrai ou faux
   - La comparaison de la valeur du quotient de réaction initial avec la valeur de la constante d’équilibre permet de prévoir le sens d’évolution spontanée du système chimique: **vrai**
   - Le système chimique est hors équilibre dès l’état initial lorsque la valeur du quotient de réaction initial est égale à la valeur de la constante d’équilibre: **faux**
   - Lors du fonctionnement d’une pile, l’oxydation se produit près de la cathode: **faux**
   - Lors du fonctionnement d’une pile, l’oxydation se produit près de l’anode: **faux**
   - Lorsque le pile est usée, l’une des solutions des deux compartiments devient chargée positivement et l’autre devient chargée négativement: **faux**
   - Lors du fonctionnement de la pile, le courant électrique circule à l’extérieur de la pile de l’anode vers le cathode: **faux**
   - La quantité d’électricité fournie par une pile électrochimique est inversement proportionnelle à la durée de fonctionnement de cette pile: **faux**

## Exercice 2
1. L’équation de l’acide méthanoïque et l’ammoniac est: $$ \text{HCOOH} + \text{NH}_3 \rightleftharpoons \text{HCOO}^- + \text{NH}_4^+ $$
2. Calculons la valeur de la constante d’équilibre associée à cette réaction.
   - On a : $$ K = \frac{K_a(\text{NH}_4)}{K_a(\text{HCOO}^-)} \Leftrightarrow K = \frac{10^{-3.8}}{10^{-9.21}} = 2,57 \times 10^5 $$
3. Calculons la valeur du quotient de réaction associé à cette réaction à l’état initial.
   - Avec : $$ Q_i = \frac{[\text{HCOO}^-]_i [\text{NH}_4^+]_i}{[\text{HCOOH}]_i} = \frac{c_2 \cdot V_2}{V_r} \cdot \frac{c_3 \cdot V_3}{V_r} \cdot \frac{c_4}{V_r} $$
   - Donc : $$ Q_i = \frac{1 \times 10^{-2} \times 4 \times 10^{-4}}{3 \times 10^{-2} \times 15 \times 2 \times 20} = 0,09 $$
   - Puisque $$ Q_i < K $$ donc le système évolue spontanément dans le sens direct (sens de consommation de l’acide méthanoïque)

## Exercice 3
1. L’équation de la réaction d’oxydoréduction entre le zinc $$ \text{Zn} $$ et les ions d’aluminium $$ \text{Al}^{3+} $$
   - On a : $$ \text{Zn}^{2+}(aq)/\text{Zn}(s) \Rightarrow \text{Zn}^{2+} + 2e^- \text{ et } \text{Al}^{3+}(aq)/\text{Al}(s) \Rightarrow \text{Al}(s) + 3e^- $$
2. Donc l’équation bilan est : $$ 3\text{Zn}(s) + 2\text{Al}^{3+}(aq) \rightarrow 3\text{Zn}^{2+}(aq) + 2\text{Al}(s) $$
3. Calculons la valeur du quotient de réaction associé à cette réaction à l’état initial.
   - Avec : $$ Q_i = \frac{[\text{Zn}^{2+}]^3}{[\text{Al}^{3+}]^2} $$
   - et $$ [\text{Zn}^{2+}] = \frac{c_1 \cdot V_1}{V_r} \text{ et } [\text{Al}^{3+}] = \frac{c_2 \cdot V_2}{V_r} $$
   - Donc : $$ Q_i = \frac{(1.8 \times 10^{-2})^3}{(1.8 \times 10^{-2})^2} = 1,8 \times 10^{-2} $$
   - Puisque $$ Q_i < K $$ donc le système évolue spontanément dans le sens indirect (sens d’oxydation de $$ \text{Al} $$)

## Exercice 4
1. Trouvons l'expression de $$ Q_{ri} $$
   - On a l'équation de la réaction est: $$ \text{NH}_3(aq) + \text{C}_6\text{H}_5\text{OH}(aq) \rightleftharpoons \text{NH}_4(aq) + \text{C}_6\text{H}_5O^{-}(aq) $$
   - Donc: $$ Q_{ri} = \frac{[\text{C}_6\text{H}_5O^{-}]}{[\text{NH}_4][\text{NH}_3]} $$
     - avec : $$ [\text{C}_6\text{H}_5O^{-}] = \frac{n_4}{v} \text{ et } [\text{NH}_4] = \frac{n_3}{v} $$
2. Donc: $$ Q_{ri} = 3.33 \text{ et } K = 16 $$
   - Puisque $$ Q_{ri} < K $$ donc le système évolue spontanément dans le sens direct (sens directe de l’ammoniac $$ \text{NH}_3 $$)
```


<!-- Page 118 -->

```markdown
# Exercice 5
1. Déterminons l’équation de la réaction
   - Pour le couple $Zn^{2+}_{(aq)}/Zn_{(s)}$ on aura : $Zn_{(s)} \rightleftharpoons Zn^{2+}_{(aq)} + 2e^{-}$
   - Pour le couple $Cu^{2+}_{(aq)}/Cu_{(s)}$ on aura : $Cu^{2+}_{(aq)} + 2e^{-} \rightleftharpoons Cu_{(s)}$
   - L'équation bilan de cette réaction : $Cu^{2+}_{(aq)} + Zn_{(s)} \rightleftharpoons Cu_{(s)} + Zn^{2+}_{(aq)}$

2. Calculons la valeur du quotient de réaction initial
   - On a : $Q_{r, i} = \frac{[Zn^{2+}_{(aq)}]}{[Cu^{2+}_{(aq)}]} = \frac{c}{c} = 1$
   - On a : $K = 1,9 \times 10^{37} $ et alors : $Q_{r, i} < K$. D'après le critère d’évolution spontanée, le système évolue spontanément dans le sens direction ce qui est confirmé par les observations expérimentales (sens de réduction des ions $Cu^{2+}_{(aq)}$)

# Exercice 6
1. Trouvons l’expression de $Q_{r}$
   - On a l’équation de la réaction : $Hg_{(l)} + Hg^{2+}_{(aq)} \rightleftharpoons Hg_{2}^{2+}$
   - Donc : $Q_{r} = \frac{[Hg^{2+}]_{l}}{[Hg]_{(l)}^{2}}$, avec : $C_{1}V_{1} = C_{2}V_{2}$
   - Alors : $Q_{r} = \frac{C_{1}V_{1}^{2}}{C_{2}V_{2}} = \frac{2\times10^{-2}\times10^{-3}}{4\times10^{-2}\times10^{-3}} = 0,25$
   - On a : $Q_{r} = 0,25 et K = 10^{2}$
   - Puisque $Q_{r} < K$, le système évolue spontanément dans le sens direct (sens de réaction du mercure $Hg$)

2. Le tableau d’avancement associé à cette réaction :
   | Équation                     | $Hg_{(l)} + Hg^{2+}_{(aq)} \rightleftharpoons Hg_{2}^{2+}_{(aq)}$ |
   |------------------------------|-------------------------------------------------------------------------|
   | État                         | Avancement | Les quantités de matière en mole (mol)                              |
   | Initial                      | 0          | $n_{0}(Hg)$ $C_{2}V_{2}$ $C_{1}V_{1}$                                 |
   | Intermédiaire                | $x$        | $n_{0}(Hg) - x$ $C_{2}V_{2} - x$ $C_{1}V_{1} + x$                    |
   | Final                        | $x_{eq}$   | $n_{0}(Hg) - x_{eq}$ $C_{2}V_{2} - x_{eq}$ $C_{1}V_{1} + x_{eq}$     |

3. Trouver l'expression de $K$ :
   - On a : $K = \frac{[Hg^{2+}]_{eq}}{[Hg]_{eq}^{2}}$
   - D'après le tableau d'avancement : $[Hg^{2+}]_{eq} = \frac{C_{1}V_{1} + x_{eq}}{V_{1} + V_{2}}$
   - Et $[Hg]_{eq} = \frac{C_{2}V_{2} - x_{eq}}{V_{1} + V_{2}}$

4. Calcul de la valeur de $x_{eq}$ :
   - On a : $K = \frac{C_{2}V_{2} - x_{eq}}{C_{1}V_{1} + x_{eq}}$
   - $\Rightarrow K(C_{2}V_{2} - x_{eq}) = C_{1}V_{1} + x_{eq}$
   - $K C_{2}V_{2} - K x_{eq} = C_{1}V_{1} + x_{eq}$
   - $K x_{eq} - x_{eq} = C_{1}V_{1} - K C_{2}V_{2}$
   - $\Rightarrow - (K + 1)x_{eq} = C_{1}V_{1} - K C_{2}V_{2}$
   - $\Rightarrow x_{eq} \approx 7,9 \times 10^{-4} \text{ mol}$
   - On trouve : $x_{eq} \approx 7.9 \times 10^{-4}$
   
5. Calculons le taux d’avancement associé à cette réaction : Déterminons la valeur de $x_{max}$ :
   - Si $Hg$ est le réactif limitant : $n_{0}(Hg) - x_{max1} = 0$
   - Alors : $x_{max1} = n_{0}(Hg)$ avec $n_{0}(Hg) = 2 \times 10^{-2} \text{ mol}$
   - Si $Hg^{2+}$ est le réactif limitant : $C_{2}V_{2} - x_{max2} = 0$
   - Alors : $x_{max2} = 4 \times 10^{-2} - 3 \times 10^{-4} = 8 \times 10^{-4} \text{ mol}$
   - Puisque $x_{max2} < x_{max1}$, alors le réactif limitant est $Hg^{2+}$ et $x_{max} = 8 \times 10^{-4} \text{ mol}$
   - On sait que : $\tau = \frac{x_{eq}}{x_{max}} \approx 0,99 \approx 1$
   - Cette réaction peut être considérée totale.
```

<!-- Page 119 -->

```markdown
## Exercice 7
1. Calculons la quantité d’électricité fournie par la pile :
   On a : $ Q = I \cdot \Delta t $
   A.N. : $ Q = 2 \times 10^{-3} \times 40 \times 60 = 50,4 \, C $

2. Calculons la quantité de matière des électrons déplacés pendant la durée $\Delta t$ :
   On a : $ Q = n(e^-) \cdot F $
   Donc : $ n(e^-) = \frac{Q}{F} $
   A.N. : $ n(e^-) = \frac{50,4}{9,65 \times 10^4} = 5,22 \times 10^{-4} \, mol $

3. Calculons l’avancement de la réaction au bout de la durée $\Delta t$ :
   On a : $ n(e^-) = 3 \cdot x $
   Donc : $ x = \frac{n(e^-)}{3} $
   A.N. : $ x \approx 1,74 \times 10^{-4} \, mol $

## Exercice 8
1. Les porteurs de charge responsables du passage du courant dans cette pile sont :
   - Les électrons dans les plaques, les fils de connexion, dans le conducteur ohmique et dans l’ampèremètre.
   - Les ions dans les solutions et dans le pont ionique.

2. Le courant électrique circule de l’extérieur de la pile de la plaque de cuivre vers la plaque de zinc.
   - Déterminons les deux demi-équations :
     - La cathode (pôle positif) est la plaque de cuivre, près de laquelle se produit une réaction de réduction d’équation : $ \text{Cu}^{2+}(aq) + 2e^- \rightarrow \text{Cu}(s) $
     - L’anode (pôle négatif) est la plaque de zinc, près de laquelle se produit une réaction d’oxydation d’équation : $ \text{Zn}(s) \rightarrow \text{Zn}^{2+}(aq) + 2e^- $

3. Équation de la réaction :
   - À la cathode : $ \text{Cu}^{2+}(aq) + 2e^- \rightarrow \text{Cu}(s) $, à l’anode : $ \text{Zn}(s) \rightarrow \text{Zn}^{2+}(aq) + 2e^- $
   - Donc : $ \text{Cu}^{2+}(aq) + \text{Zn}(s) \rightarrow \text{Cu}(s) + \text{Zn}^{2+}(aq) $

4. La représentation conventionnelle de cette pile : $ \text{Zn}/\text{Zn}^{2+}//\text{Cu}^{2+}/\text{Cu} $

5. a - Tableau d’avancement :

   | Équation                          | $\text{Cu}^{2+}(aq)$ | $\text{Zn}(s)$ | $\text{Cu}(s)$ | $\text{Zn}^{2+}(aq)$ |
   |------------------------------------|-----------------------|----------------|----------------|----------------------|
   | État                               | Initial               | 0              | $C_1 V_1$      | $n_0(\text{Cu})$     |
   |                                   | Intermédiaire         | $x$            | $C_1 V_1 - x$  | $n_0(\text{Zn}) - x$ |
   |                                   | Final                 | $x_f$          | $C_1 V_1 - x_f$| $n_0(\text{Zn}) - x_f$|

6. b - Calcul de la quantité d’électricité fournie par cette pile :
   On a : $ Q = I \cdot \Delta t $
   A.N. : $ Q = 76 \times 10^{-3} \times 15 \times 60 = 68,4 \, C $

7. c - Montrons que $ x = \frac{I \cdot \Delta t}{2F} $ :
   D’après le tableau d’avancement, on a : $ n(e^-) = 2x $
   Donc : $ x = \frac{n(e^-)}{2} $ avec : $ n(e^-) = \frac{I \cdot \Delta t}{F} $
   A.N. : $ x = \frac{2}{2} \cdot n(e^-) \Rightarrow n(e^-) = \frac{I \cdot \Delta t}{F} $

8. d - Calcul de la concentration des ions $\text{Zn}^{2+}$ à la fin de la durée $\Delta t$ :
   D’après le tableau d’avancement, on a : $ n(\text{Zn}^{2+}) = C_2 V_2 + x $
   Donc : $ [\text{Zn}^{2+}] = \frac{0,1 \times 100 \times 10^{-3} + 3,54 \times 10^{-4}}{10 \times 10^{-3}} $

9. e - Calculons la variation de la masse de la plaque de cuivre au bout de la durée $\Delta t$ :
   On a : $ \Delta m(\text{Cu}) = n(\text{Cu}) - n_0(\text{Cu}) \Leftrightarrow n(\text{Cu}) = n_0(\text{Cu}) + x - n_0(\text{Cu}) $
   A.N. : $ \Delta m(\text{Cu}) = x \cdot M(\text{Cu}) $
   A.N. : $ \Delta m(\text{Cu}) = 3,54 \times 10^{-4}\times 63,55 $
   On trouve : $ \Delta m(\text{Cu}) = 2,25 \times 10^{-2} \, g $
```

<!-- Page 120 -->

```markdown
# Exercice 9

1. D’après la figure, on constate que le courant circule à l’extérieur de la pile de la plaque de Ag vers la plaque de Co, donc la plaque de Ag est la cathode et celle de Co est l’anode.
   
2. Les deux demi-équations :
   - Au voisinage de la cathode (Ag), se produit une réduction d’équation : 
   $$ \text{Ag}_{(aq)} + e^- \rightarrow \text{Ag}_{(s)} $$
   - Au voisinage de l'anode (Co), se produit une oxydation d’équation : 
   $$ \text{Co}_{(s)} \rightarrow \text{Co}^{2+}_{(aq)} + 2e^- $$
   
3. L'équation bilan :
   $$ 2\text{Ag}^{+}_{(aq)} + \text{Co}_{(s)} \rightarrow 2\text{Ag}_{(s)} + \text{Co}^{2+}_{(aq)} $$

4. Le pont ionique a deux rôles :
   - Il assure la fermeture du circuit électrique par migration des ions sans que les deux solutions se mélangent.
   - Il assure la neutralité des deux solutions.

5. Calcul du quotient réactionnel $Q_{r}$ :
   - On a : 
   $$ Q_{r} = \frac{[\text{Co}^{2+}]}{[\text{Ag}^{+}]^2} \text{ avec } : [\text{Ag}^{+}] = C $$
   Donc : 
   $$ Q_{r} = \frac{C}{\frac{C}{1}} = 1 $$
   A.N. : $Q_{r} = \frac{1}{4 \times 10^{-2}} = 25 $

6. On a : 
   $$ Q_{r} = \frac{1}{[\text{Co}^{2+}][\text{Ag}^{+}]^2} $$ au cours du fonctionnement de la pile, la concentration $[\text{Ag}^+]$ décroît et celle de $[\text{Co}^{2+}]$ augmente donc $Q_{r}$ augmente avec le temps.

a. Le tableau d'avancement de cette réaction :

| Équation                          | $2\text{Ag}^{+}_{(aq)} + \text{Co}_{(s)} \rightarrow 2\text{Ag}_{(s)} + \text{Co}^{2+}_{(aq)}$ |
|------------------------------------|-------------------------------------------|
| État                               | Avancement                               | Les quantités de matière en mol (mol)   |
| Initial                            | 0                                         | $CV$         | $n_{0}(Co)$ | $0$       |
| Intermédiaire                      | $x$                                       | $CV - 2x$   | $n_{0}(Co) - x$      |
| Final                              | $n_{0}(Ag) - 2x$                        | $CV - 2x$  | $n_{0}(Ag) + 2x$| $CV + x$ | $2x$   |

b. Déterminons les valeurs de $x_{max}$ :
   - On a : 
   $$ Q_{max} = I . \Delta t = n(e)_{max} . F $$
   Donc :
   $$ \Delta t_{max} = \frac{n(e)_{max}}{I} $$
   Et d'après le tableau d'avancement, on a : 
   $$ n(e)_{max} = 2x_{max} $$
   Alors :
   $$ \Delta t_{max} = \frac{2x_{max}}{I} (1) $$
   Et puisque les quantités de matière dans les plaques sont en excès, donc le réactif limitant est $\text{Ag}^+$.
   Donc :
   $$ C \cdot V - 2 \cdot x_{max} = 0 $$

Exercice 10

1. Déterminons le sens de l'évolution spontanée de ce système :
   - On a : 
   $$ Q_{r} = \frac{[\text{Sn}^{2+}]_{i}}{[\text{Ni}^{2+}]_{i}} , \;\; Q_{r} = 10^{-1} = 1 $$
   - Et on a : 
   $$ K = 8,9 \times 10^{-4} $$
   Puisque $K < Q_{r}$, donc le système évolue spontanément dans les sens inverse « sens d'oxydation de Ni ».

2. Déterminons les deux demi-équations de la réaction :
   L'équation de la réaction qui se produit lors du fonctionnement de cette pile est :
   $$ \text{Ni(s)} + \text{Sn}^{2+}_{(aq)} \rightarrow \text{Ni}^{2+}_{(aq)} + \text{Sn(s)} $$
   - Au voisinage de l'anode Ni se produit l'oxydation : 
   $$ \text{Ni} \rightarrow \text{Ni}^{2+} + 2e^- $$
   - Au voisinage de la cathode Sn se produit.
```

<!-- Page 121 -->

```markdown
1. Le schéma conventionnel : $ \text{Ni} / \text{Ni}^{2+} / \text{Sn}^{2+} / \text{Sn} \oplus $
   
   a. – Calculons la quantité d'électricité fournie par la pile :
   On a : $ Q = I \cdot \Delta t $
   A.N. : $ Q = 20 \times 10^{-3} \times 35 \times 60 = 42 \, \text{C} $
  
   b. – Le tableau d'avancement :
   
   | Équation                       |   |   |      |      |
   |--------------------------------|---|---|------|------|
   | $ \text{Sn}^{2+}_{(aq)} + 2e^- \rightarrow \text{Sn}_{(s)} $ |       |      | Les quantités de matière en mole (mol) |
   | État                           | Avancement |   |      |      |
   | Initial                        | 0         | $ C_2V_2 $ | 0    | $ n_0(\text{Sn}) $ |
   | Intermédiaire                  | $ C_2V_2 - x $  | 2x   | $ n_0(\text{Sn}) + x $ |
   | Final                          | $ x_{\text{max}} $ | $ C_2V_2 - x_{\text{max}} $ | $ 2x_{\text{max}} $ | $ n_0(\text{Sn}) + x_{\text{max}} $ |

   c. – Calculons $ \Delta m(\text{Sn}) $ :
   D'après le tableau d'avancement, on a :
   $$ \Delta n(\text{Sn}) = n(\text{Sn}) - n_0(\text{Sn}) $$
   Donc : $ \Delta n(\text{Sn}) = n_0(\text{Sn}) + x - n_0(\text{Sn}) $
   Alors : $ \Delta n(\text{Sn}) = x \quad \text{Avec} \quad \Delta m(\text{Sn}) = \frac{\Delta n(\text{Sn}) \cdot M(\text{Sn})}{M(\text{Sn})} $
   D'où : $ \Delta m(\text{Sn}) = x \cdot M(\text{Sn}) $
   Et on a : $ n(e^-) = 2x $
   On a : $ n = \frac{n(e^-)}{2} = \frac{q}{F} \quad (2) $
   D'où : $ x = \frac{I \cdot \Delta t}{2F} $
   En remplaçant $(2)$ dans $(1)$, on trouve :
   $$ \Delta m(\text{Sn}) = \frac{-I \cdot M(\text{Sn})}{2F} $$
   A.N. : $ \Delta m(\text{Sn}) = 2,58 \times 10^{-2} \, g $

   d. – Calculons la concentration des ions $ \text{Sn}^{2+} $ :
   D'après le tableau d'avancement, on a :
   $$ n(\text{Sn}^{2+}) = C_2 \cdot V - x $$
   Donc : $ [\text{Sn}^{2+}] = \frac{C_2 \cdot V - x}{V} $
   D'où : $ [\text{Sn}^{2+}] = \frac{C_2 - \frac{I \cdot \Delta t}{2F}}{V} $
   On trouve :
   $$ [\text{Sn}^{2+}] = 10^{-1} $$
   A.N. : $ [\text{Sn}^{2+}] = \frac{9,78 \times 10^{-2} \, \text{mol} \cdot L^{-1}}{2 \times 9,65 \times 10^{-4} \cdot 100 \times 10^{-3}} $$

2. Exercice 11

   a. – Calculons la valeur de $ Q_{rl} $ :
   On a : $ Q_{rl} = \frac{[\text{Zn}^{2+}]}{[\text{Ni}^{2+}]} $
   Donc : $ Q_{rl} = \frac{5 \times 10^{-2}}{5 \times 10^{-2}} = 1 $
   A.N. : $ Q_{rl} < K $ , Donc le système évolue spontanément dans le sens direct (sens d'oxydation de Zn).

   b. – Déterminons les noms des éléments (1), (2) et (3) :
   - La plaque de Zn.
   - La solution de sulfate de zinc $(\text{Zn}^{2+} + \text{SO}_4^{2-})$.
   - La plaque de nickel.

   c. – Déterminons les demi-équations des réactions se produisant aux électrodes :
   - Au voisinage de la cathode $ \text{Ni} $ se produit la réduction : $ \text{Ni}^{2+} + 2e^- \rightarrow \text{Ni} $
   - Au voisinage de l'anode $ \text{Zn} $ se produit l'oxydation : $ \text{Zn}_{(s)} \rightarrow \text{Zn}^{2+} + 2e^- $

   La représentation conventionnelle de cette pile est : 
   $$ \text{Zn}_{(s)} / \text{Zn}^{2+}_{(aq)} // \text{Ni}^{2+}_{(aq)} / \text{Ni}_{(s)} \oplus $$
```

<!-- Page 122 -->

```markdown
b - Trouvons l'expression de $\Delta t_{max}$ :
On a : $Q_{max} = I \times \Delta t_{max} = n(e^-)_{max} \times F$
Donc : $\Delta t_{max} = \frac{n(e^-)_{max} \times F}{I}$ avec $I = \frac{u_R}{R}$ alors : $\Delta t_{max} = \frac{n(e^-)_{max} \times F \times R}{u_R} \, (*)$
Étant donné le tableau d'avancement, on a : $n(e^-)_{max} = 2 \times n_{max}$
Alors : $x_{max} = n_{max} = 0$
D'où : $x_{max} = C_1 V_1$
D'où : $n(e^-)_{max} = 2C_1 V_1 \, (**)$
On remplace $(**)$ dans $(*)$ : 
$\Delta t_{max} = \frac{2C_1 V_1 R}{u_R}$
A.N. : $\Delta t_{max} = \frac{2 \times 5 \times 10^{-2} \times 100 \times 3,965 \times 10^{4}}{4.8} = 1 \times 10^{4} \, s$

c - Calculons la masse de Zn consommé durant le fonctionnement de cette pile.
On a : $n_c(Zn) = n_{0}(Zn) - n_{f}(Zn)$
Et d'après le tableau d'avancement, on a : $n_f(Zn) = n_{0}(Zn) - x_{max}$
Alors : $n_c(Zn) = n_{0}(Zn) - (n_{0}(Zn) - x_{max})$
La masse consommée de zinc est donnée par : $m_c(Zn) = x_{max} \times M(Zn)$ avec : $x_{max} = C_1 \times V_1$
D'où : $m_c(Zn) = C_1 \times V_1 \times M(Zn)$
A.N. : $m_c(Zn) = 5 \times 10^{-2} \times 100 \times 65, 4 = 0,327\, g$

### Exercice 12
1. Déterminons les demi-équations des réactions se produisant aux électrodes.
   - Près de la cathode (électrode de graphite) se produit une réduction, selon l'équation :
     $$ \text{MnO}_2 + 2 \text{H}^+ + e^- \rightarrow \text{MnO(OH)} $$
   - Près de l'anode (électrode de zinc) se produit une oxydation, selon l'équation :
     $$ \text{Zn} \rightarrow \text{Zn}^{2+} + 2e^- $$
2. L'équation de la réaction globale :
   On a : $$(\text{MnO}_2 + 2 \text{H}^+ - \text{MnO(OH)}) \times 2 \quad Et \quad \text{Zn} \rightarrow \text{Zn}^{2+} + 2e^-$$
   Donc l'équation bilan de la pile est : $2 \text{MnO}_2 + 2 \text{H}^+ + \text{Zn} \rightarrow 2 \text{MnO(OH)} + \text{Zn}^{2+}$
3. La représentation conventionnelle de cette pile : 
   $$ \text{Zn} / \text{Zn}^{2+} / \text{MnO(OH)} / \text{MnO}_2 \, (\circ) \oplus $$

4. a - Calculons la quantité d'électricité fournie par la pile.
   On a : $Q = I \times \Delta t$
   A.N. : $Q = 56 \times 10^{-3} \times 2 \times 3600 = 403,2\, C$

b - Tableau d'avancement associé à la réaction au voisinage de l'anode

| Équation          | $\text{Zn}(s) \rightarrow \text{Zn}^{2+}_{(aq)} + 2e^-$ |
|-------------------|---------------------------------------------------------|
| État              | Avancement                                             | Les quantités de matière en mole (mol)      |
| Initial           | 0                                                     | $n_0(Zn)$                      | $n_0(Zn^{2+})$ |
| Intermédiaire     | $x$                                                   | $n_0(Zn) - x$                 | $2x$             |
| Final             | $x_{max}$                                            | $n_0(Zn) - x_{max}$          | $n_0(Zn^{2+}) + x_{max}$ | $2x_{max}$           |

c - Calculons la masse de zinc consommée lors du fonctionnement de la pile pendant la durée $\Delta t$.
La quantité de zinc consommée est donnée par : $n_c(Zn) = n_{0}(Zn) - n(Zn)$
D'après le tableau d'avancement, on a : $n(Zn) = n_{0}(Zn) - x$ 
Donc : $n(Zn) = n_{0}(Zn) - x$
Alors : $n_c(Zn) = n_{0}(Zn) - n(Zn) = m_c$ 
D'où : $m_c = x - M(Zn) \, (*)$
Et on a : $n(e^-) = 2 \times x$ avec $n(e^-) = \frac{-\Delta Q}{F}$
On remplace $(**)$ dans $(*)$, on trouve : 
$$m_c = \frac{-\Delta Q}{2 \cdot F} \cdot M(Zn)$$
A.N. : $m_c = 56 \times 10^{-3} \times 3600 \times 65, 41 \times 2.9 \times 10^{4} = 0,14 g$
```

<!-- Page 123 -->

```markdown
# Exercice 13

1.  Calculons la valeur de $Q_{r1}$ :  
    On a : $Q_{r1} = \frac{[Co^{2+}]_{aq}}{[Ni^{2+}]_{aq}}$  
    Donc : $Q_{r1} = \frac{1}{1}$  
    Et on a $K = 10^2$. Puisque $Q_{r1} < K$, ce système évolue spontanément dans le sens direct.

2.  Déterminons les noms des éléments (1), (2) et (3) :  
    (1) La lame de nickel, la cathode  
    (2) La lame de cobalt, l'anode  
    (3) La solution de sulfate de nickel $(Ni^{2+} + SO_{4}^{2-})$  

    La représentation de cette pile :  
    $\text{Co}(s)/\text{Co}^{2+}_{(aq)} \; :: \; \text{Ni}^{2+}_{(aq)}/\text{Ni}(s)$ 

3.  Déterminons les demi-équations se produisant aux électrodes :  
    - Au voisinage de la cathode, se produit une réduction : $Ni^{2+}_{(aq)} + 2e^{-} \rightarrow Ni(s)$  
    - Au voisinage de l'anode, se produit une oxydation : $Co(s) \rightarrow Co^{2+}_{(aq)} + 2e^{-}$  

    a - Le tableau d'avancement associé à la réaction d'oxydation de $Co$ :

    | Équation | $Ni^{2+}_{(aq)} + Co(s) \rightarrow Ni(s) + Co^{2+}_{(aq)}$ | $n(e^{-})$ |
    |----------|-----------------------------------------------------|-------------|
    | État     | Avancement                                  | Les quantités de matière en mole (mol) |
    | Initial  | 0                              | $n_{0}(Co)$     |
    | Intermédiaire | $x$                       | $CV - x$       |
    | Final    | $x_{f}$                      | $n_{0}(Co) - x_{f}$  |

    b - Montrons l'expression de $x_{f}$ :  
    On a : $K = \frac{[Co^{2+}]_{aq}}{[Ni^{2+}]_{aq}}$  
    Et d'après le tableau d'avancement,  
    on a : $[Co^{2+}]_{f} = \frac{C \cdot V - x_{f}}{V}$ et $[Ni^{2+}]_{f} = \frac{C \cdot V - x_{f}}{V}$  
    Donc : $K = \frac{C \cdot V + x_{f}}{C \cdot V - x_{f}}$  

    $K \; \Rightarrow \; K \cdot (C \cdot V - x_{f}) = C \cdot V + x_{f}$  
    $\Rightarrow K \cdot C \cdot V - K \cdot x_{f} = C \cdot V + x_{f}$  
    $\Rightarrow -(K + 1) \cdot x_{f} = C \cdot V - C \cdot V \cdot K$  
    $x_{f} = \frac{-C \cdot V + K \cdot C \cdot V}{K + 1}$

    c - Trouvons l'expression de $\Delta t_{max}$ :  
    On a : $Q_{max} = I \cdot \Delta t_{max} = n(e^{-}) \cdot F$  
    Donc : $\Delta t_{max} = \frac{n(e^{-}) \cdot F}{I}$  
    D'après le tableau d'avancement : $n(e^{-}) = 2 \cdot x_{f}$  
    Donc : $\Delta t_{max} = \frac{2 \cdot x_{f} \cdot F}{I}$ avec : $x_{f} = \frac{C \cdot V \cdot (K - 1)}{K + 1}$  
    On obtient : $$\Delta t_{max} = \frac{2 \cdot F \cdot V \cdot (K - 1)}{(K + 1) \cdot I}$$  

    A.N. : $$\Delta t_{max} = \frac{2 \cdot 9.65 \times 10^5 \times 10^{-1} \cdot 180 \times 10^{-3} \times (10^{2} - 1)}{(10^{2} + 1) \cdot 92 \times 10^{-3}}$$  
    On trouve : $\Delta t_{max} \approx 1,64 \times 10^3 \, s$

# Exercice 14

1.  Déterminons la polarité de cette pile  
    - La cathode est l'électrode B  
    - L'anode c'est l'électrode A  

2.  A - Déterminons les demi-équations des réactions se produisant aux électrodes :  
    - Au voisinage de la cathode B se produit une réduction d'équation : $O_{2} + 4H^{+} + 4e^{-} \rightarrow 2H_{2}O$  
    - L'équation de la réaction qui se produit lors du fonctionnement de cette pile :  
    En additionnant les deux demi-équations (après multiplication pour équilibrer les électrons) :  
    - La demi-équation de réduction : $(O_{2} + 4H^{+} + 4e^{-} \rightarrow 2H_{2}O) \times 3$  
    - La demi-équation d'oxydation : $(CH_{3}OH + H_{2}O \rightarrow CO_{2} + 6H^{+} + 6e^{-}) \times 2$  
    - L'équation bilan est : $30_{2}(g) + 2H_{3}OH(aq) \rightarrow 4H_{2}O + 20C_{2}(g)$

    a - Calculons la quantité d'électricitéfourni par cette pile :  
    On a : $Q = I \cdot \Delta t$  
    A.N. : $Q = 4,5 \times 10^{-3} \times 3 \times 3600 = 486 \, C$
```

<!-- Page 124 -->

```markdown
b - Le tableau d'avancement associé à la réaction qui se produit près de la cathode :

| Équation                        | $2C_2H_5OH + 2H_2O \rightarrow 2C_2O + 12H^+ + 12e^-$ |
|---------------------------------|-----------------------------------------------------|
| État                            | Avancement                                           |
| Initial                         | 0                                                   |
| Intermédiaire                   | $x$                                                 |
| Final                           | $x_f$                                              |
| Les quantités de matière en mole (mol) |
| En excès                        | $n_0 = 2$                                          |
|                                 | $2x$                                               |
| En excès                        | $12x$                                              |

Alors : $n(CH_3OH) = \frac{2n(e^-)}{12}$  
Donc : $m(CH_3OH) = \frac{l}{x\Delta t} 6F$  
On trouve : $m(CH_3OH) = 4.5 \times 10^{-3} \times 3600 \times 32$  
A.N. : $m(CH_3OH) = 2.67 \times 10^{-2} g$  

---

## Exercice 15

On a : $Q_{trl} = \frac{|A|2^{+}|}{|Zn^{2+}|^3}$  
Donc : $Q_{trl} = \frac{C_1^3}{C_2^3} = Q_{trl} = \frac{(2\times10^{-2})^2}{(5\times10^{-1})^3} = 3.2 \times 10^{-3}$  
Et on a : $K = 10^9$. Puisque $Q_{trl} < K$, donc le système évolue spontanément dans le sens direct.  
« Sens de réduction des ions $Zn^{2+}$ »

Le système chimique composant cette pile s’évolue spontanément dans le sens d’oxydation de la plaque d’aluminium, donc cette plaque constitue l’anode de la pile, et la plaque de zinc constitue la cathode de la pile.  

Le courant circule à l’extérieur de la pile de la cathode (plaque de Zn).  
La représentation conventionnelle de cette pile : $\odot \text{Al}(s)/\text{Al}^{3+} // \text{Zn}^{2+}/\text{Zn}(s) \odot$

a - Le tableau d'avancement associé à la réaction qui se produit lors du fonctionnement de la pile :

| Équation                       | $3Zn^{2+}(aq) + 2Al(s) \rightarrow 3Zn(s) + 2Al^{3+}(aq) + n(e^-)$ |
|--------------------------------|--------------------------------------------------------------------|
| État                           | Avancement                                                        |
| Initial                        | 0                                                                |
| Intermédiaire                  | $x$                                                              |
| Final                          | $x_{max}$                                                       |
| Les quantités de matière en mole (mol) |
| $C_2V$                         | $n_0(Al)$                                                       |
| $n_0(Zn)$                      | $C_1V$                                                          |
| 0                              | $0$                                                              |

Finalement, on obtient : $[Zn^{2+}] = C_2 - \frac{I}{F} t$  
A.N. : $[Zn^{2+}] = C_2 - \frac{I}{F} * V$  

b - Montrons que $[Zn^{2+}] = C_2 - \frac{I}{2F \cdot V}$  
Donc, d'après le tableau, on a : $[Zn^{2+}] = C_2 - \frac{3x}{6} = C_2 - \frac{n(e^-)}{V}$  
D'où : $[Zn^{2+}] = C_2 - \frac{3n(e^-)}{6} = C_2 - \frac{IAt}{F}$  
On trouve : $[Zn^{2+}] = C_2 - \frac{IAt}{F}$ avec $At = t - 0$  

a - D’après la courbe de la figure ($\odot$), on a : $[Zn^{2+}] = a + bt$  
Et puisque : $[Zn^{2+}] = \frac{-I}{2F} t + C_2$.  
Donc : $a = -\frac{I}{2F}$  
Alors : $I = -\frac{1}{2F}V$  
Avec : $a = \frac{(0.5 - 0.3)}{(0 - 2) \times 3600} = -8.05 \times 10^{-7} mol \cdot s^{-1}$  
A.N. : $I = -2 \times 9.65 \times 10^{-4} \times 0.1 = -8.05 \times 10^{-7}$  

Calculons la capacité de cette pile :  
On a : $Q_{max} = IAt$  
A.N. : $Q_{max} = 15.54 \times 10^{-3} \times 172.5 \times 3600$  
On trouve : $Q_{max} = 9.65 \times 10^3 C$  
```

<!-- Page 125 -->

# Devoirs

ÉLECTRON & 2BAC-PC & Devoirs

<!-- Page 126 -->

```markdown
# Devoir surveillé N°3 – 1
## Niveau: 2BIOF

### Exercice 1
Étude de la réponse d’un dipôle RC à un échelon de tension descendant

Pour étudier l'influence de la résistance à la réponse d’un dipôle RC à un échelon de tension descendant, on réalise la figure 1 qui est formée des éléments suivants:
- Un condensateur chargé de capacité $C$
- Conducteur ohmique de résistance réglable.

À $t = 0$, on ferme l'interrupteur $K$ et à l'aide d’un système d’acquisition convenable on obtient les courbes de la figure 2 représentant l’évolution de la tension aux bornes du condensateur pour deux valeurs différentes de la résistance telle que :
- La courbe (A) est celle correspondant à la résistance $R_A = 100\Omega$
- La courbe (B) est celle correspondant à la résistance $R_B$

1. Représenter sur la figure 1, comment brancher les entrées de l’oscilloscope pour visualiser la tension $u_C$ aux bornes du condensateur.  
2. Déterminer l’équation différentielle vérifiée par la tension $u_C$.  
3. Trouver l’expression de $\alpha$ pour que l’expression $u_C(t) = Ee^{-at}$ soit solution de l’équation différentielle.  
4. En exploitant les courbes de la figure 2 déterminer les constantes des temps $\tau_A$ et $\tau_B$.  
5. Déterminer la valeur de la capacité $C$, et déduire la valeur de la résistance $R_B$.  
6. Quel est l'effet de la résistance sur la durée de charge du condensateur?

### Exercice 2
Étude de l’établissement du courant dans un dipôle RL série

La bobine est un fil de conducteur enroulé sur lui-même, ayant une forme plus ou moins cylindrique. Cet exercice sert à étudier un dipôle RL à un échelon de tension pour cela on considère le montage électrique schématisé par la figure 1, qui comporte :
- Générateur de tension de e.m.f. $E$ et de résistance $r$ 
- Deux conducteurs ohmiques de même résistance $R = 160\Omega$
- Une bobine idéale d’inductance $L$

À l’instant $t = 0$, on ferme l’interrupteur $K$, et par un système d’acquisition adéquat on obtient la courbe de la figure 2 qui représente l’évolution de $E_m$ l’intensité du courant traversant la bobine en fonction de la tension $u_t$.
```

<!-- Page 127 -->

```markdown
### Recopier le schéma et représenter sur laquelle la tension $u_R$ aux bornes des deux conducteurs ohmiques ainsi que la tension $u_L$ au niveau de la bobine.
1. Déterminer l'équation différentielle vérifiée par l'intensité $i(t)$ débitée par le générateur.
2. Trouver les expressions de $ \tau $ et $ t $ pour que la tension $i(t) = \left(1 - e^{-t/\tau}\right)$ soit solution de l’équation différentielle.
3. En exploitant les courbes de la figure déterminer :
   - a. La valeur de l’intensité du courant en régime permanent.
   - b. La f.e.m. du générateur.
   - c. La résistance $R$ du générateur.
4. Calculer la valeur de la constante de temps du dipôle $RL$, sachant que l’inductance de la bobine est $L = 30 \, \text{mH}$.
5. Trouver l’expression de la tension $u_{L}(t)$ aux bornes de la bobine en fonction $E, \tau$ et le temps $t$.
6. Déterminer l’instant $t_1$ tel que $u_{L}(t_1) = 2UR(t_1)$.
7. Calculer l’énergie emmagasinée dans la bobine à l’instant $t_1$.

### Exercice 3
Étude de quelques réactions de l’acide ascorbique
L’acide ascorbique (vitamine C) de formule $C_6H_8O_6$, est un réducteur naturel que l’on qualifie généralement d’antioxydant .... En pharmacie il est possible de trouver l’acide ascorbique, par exemple sous forme de comprimé de vitamine C500.

I- Étude de la réaction de l’acide ascorbique avec l’eau.
On prépare une solution aqueuse $(S)$ de l’acide ascorbique de concentration $C$, et de volume $V$.
La mesure de $pH$ de cette solution à $25°C$ donne la valeur : $pH = 3,01$. On donne $pK_A = 4,1$.
1. Dresser le tableau d’avancement associé à la réaction de l’acide ascorbique avec l’eau réaction.
2. Montrer que le taux d’avancement final de cette réaction est : $$ \tau = \frac{1}{1 + 10^{pK_A - pH}} $$ calculer et déduire.
3. Déduire la valeur de la concentration $C$ de la solution $(S)$.
4. Calculer la valeur du quotient de réaction à l’équilibre associé à cette réaction.
5. Calculer le rapport $\left[\frac{C_{6}H_{8}O_{6}}{C_{6}H_{8}O_{6}^{-}} \right]$ et déduire l’espèce chimique prédominante dans la solution.

II- Dosage d’une solution d’acide ascorbique par une solution d’hydroxyde de sodium
On admet un comprimé de vitamine C500 dans un volume $V = 200 \, \text{mL}$ de l’eau distillée et on obtient une solution $(S_A)$ de l'acide ascorbique. On titre un volume $V_A = 10 \, \text{mL}$ de la solution $(S_A)$ par une solution $(S_B)$ de hydroxyde de sodium $(Na_{(aq)} + H_2O_{(aq)})$ de concentration $C_B = 2,84 \times 10^{-2} \, \text{mol} \cdot \text{L}^{-1}$.
La courbe ci-dessous représente l’évolution de $pH$ en fonction du volume du titrant ajouté $V_B$.
```

<!-- Page 128 -->

```markdown
# Correction

## Exercice 1
Étude de la réponse d’un dipôle RC à un échelon de tension descendant

1. La figure montre le branchement des entrées de l’oscilloscope pour visualiser la tension $u_C$.
2. Déterminons l’équation différentielle vérifiée par la tension $u_C$.
   D’après la loi d’additivité des tensions on a: $u_C + u_R = 0$ avec: $u_R = R \cdot i(t)$
   Donc: $u_C(t) + R \cdot i(t) = C \cdot \frac{du_C(t)}{dt}$
   D’où: $u_C(t) + R \cdot \frac{du_C(t)}{dt} = 0$
3. Trouvons l’expression de $\alpha$.
   On remplace la solution $u_C = Ee^{-\alpha t}$ dans l’équation différentielle:
   $$u_C(t) + R \cdot C \cdot \frac{du_C(t)}{dt} = 0$$
4. On trouve: $Ee^{-\alpha t} - R C e^{-\alpha t} = 0$ 
   $$Ee^{-\alpha t}(1 - R C \alpha) = 0$$
   $$1 - R C \alpha = 0$$
   $$R C \alpha = 1$$
   $$\alpha = \frac{1}{R C}$$
5. Déterminons la valeur de $\tau_A$ et celle de $\tau_B$ d’après les courbes de la figure 
   $$\tau_A = 2 \, ms \quad \text{et} \quad \tau_B = 1 \, ms$$
6. Déterminons la valeur $C$ et celle de $R_B$ 
   On a: $\tau_A = R_A C$
   Donc: $C = \frac{2 \times 10^{-3}}{R_A}$
   A.N.: $R_B = R_B C$
   Donc: $R_B = \frac{\tau_B}{C}$
   A.N.: $R_B = \frac{1 \times 10^{-3}}{2 \times 10^{-5}} = 50 \Omega$
   La durée de charge du condensateur est $\Delta t = 5R$, donc $\Delta t_A > \Delta t_B$ car $\tau_A > \tau_B$, et puisque $R_A > R_B$
   On conclut que la durée de charge du condensateur est autant plus longue que la valeur de la résistance utilisée est grande!

## Exercice 2
Étude de l’établissement du courant dans un dipôle RL série

1. Voir la représentation des tensions $u_R$ et $u_L$ dans la figure suivante.
   Trouvons l'équation différentielle vérifiée par l’intensité $i(t)$ d’après la loi d’additivité des tensions,
   on a: $u_L + u_R = u_{MN}$
   Avec $u_L = L \cdot \frac{di(t)}{dt}$ et $u_{MN} = E - ri(t)$
   Donc: $$L \cdot \frac{di(t)}{dt} + R \cdot i(t) = E - ri(t)$$
   $$\Rightarrow L \cdot \frac{di(t)}{dt} + R \cdot i(t) = E \, (1)$$
2. Alors: $\frac{1}{R_{eq}} = \frac{1}{R} + \frac{1}{R_{(2)}}$
   On remplace l’équation $(2)$ dans l’équation $(1)$, on trouve: 
   $$\frac{di(t)}{dt} \left( \frac{1}{R} + \frac{1}{R_{(2)}} \right) = E$$
```


<!-- Page 129 -->

```markdown
## Trouvons l'équation différentielle vérifiée par l'intensité $i(t)$

D'après la loi d'additivité des tensions, on a : 
$$ U_L = U_R + U_{PN} $$
Avec $U_L = L \frac{di(t)}{dt}$ et $U_R = E - ri(t)$

Donc : 
$$ L \frac{di(t)}{dt} + R_{eq} i(t) = E - ri(t) $$

Et on a : 
$$ \frac{1}{R_{eq}} = \frac{1}{R} + \frac{1}{R} $$

Alors : 
$$ R_{eq} = \frac{R}{2} \quad (2) $$

On remplace l'équation $(2)$ dans l'équation $(1)$, on trouve : 
$$ \frac{L \frac{di(t)}{dt}}{R + \frac{R}{2}} + i(t) = E $$

## Trouvons l’expression de $I$ et celle de $i$.

On remplace la solutions $i(t) = I(1 - e^{-\frac{t}{\tau}})$ dans l’équation différentielle : 
On trouve : 
$$ \frac{2L}{R+2r} \times I e^{-\frac{t}{\tau}} + I(1 - e^{-\frac{t}{\tau}}) = \frac{2E}{R + 2r} $$

Pour que cette équation soit vérifiée pour $t \geq 0$, il faut que : 
$$ \begin{cases} 
\frac{2L}{R + 2r} - 1 = 0 \\ 
\frac{2E}{R + 2r} = I = \frac{2L}{2E} \\ 
\frac{2L}{R + 2r} = 1 
\end{cases} $$

## a - D’après la courbe on a : $I = 120 mA$ 
## b - On a : $u_L(0) + u_R(0) = E - ri(0)$ 
$$ E = u_L(0) = 12V $$ 
## c - On a : $U_L + U_R = E - ri(t)$ 

$$ u_L = \frac{(R + 2r)}{2} i(t) = E $$ 
$$ \Rightarrow \quad u_L = f(i(t)) \text{ est affine d’équation } $$
$$ u_L = ai(t) + E \text{ avec : } a = -\frac{R}{2} $$

## Calculons la valeur de $a$ 
On a : 
$$ a = \frac{12 - 0}{-120 \times 10^{-3}} $$ 
On trouve : $a = -100 \Omega$

## Calculons la valeur de $a$ 
On a : 
$$ r = -\frac{R}{2} $$

---

### A.N : $r = -\frac{(-100) - 160}{2} = 20 \Omega$

5. Calculons la valeur de $\tau$ 
On a : 
$$ \tau = \frac{2L}{R+2r} = \frac{2 \times 30 \times 10^{-3}}{160 + 20} $$ 
A.N. : $\tau = 3 \times 10^{-4} s$

6. Déterminons l'expression de $u_L$ 
On a : 
$$ u_L = \frac{di}{dt} $$ 
Donc : 
$$ u_L = L e^{-\frac{t}{\tau}} $$ avec $\tau = \frac{2L}{R+2r}$

Donc : 
$$ u_L = \frac{(R + 2r)2E}{2(R+2r)}e^{-\frac{t}{2}} $$
$$ \Rightarrow \quad u_L = Ee^{-\frac{t}{2}} $$

7. Déterminons la valeur de $t_1$ 
On a : 
$$ u_L(t_1) = 2U_{eq}(t_1) $$ 
Donc : 
$$ e^{-\frac{t_1}{\tau}} = 2R_{eq}(t_1) $$ 
avec $I = \frac{2E}{R + 2r}$

$$ e^{-\frac{t_1}{\tau}} = \frac{2R_{eq} - R_{eq} - 2R}{R + 2r} $$

$$ \ln(e^{-\frac{t_1}{\tau}}) = \ln(\frac{2R}{3R + 2r}) $$ 

$$ -\frac{t_1}{\tau} = \ln(\frac{2R}{3R + 2r}) $$
$$ t_1 = -\tau \ln(\frac{2R}{3R + 2r}) $$

### A.N. : $t_1 = 3 \times 10^{-4} \ln(\frac{2 \times 160}{3 \times 160 + 2 \times 20})$

On trouve : $t_1 \approx 1.46 \times 10^{-4} s$

8. Calculons $E_m(t_1)$ 
On a : 
$$ E_m(t) = \frac{1}{2} L i^2(t) $$
À $t = t_1$ on a : 
$$ E_m(t_1) = \frac{1}{2} L i^2(1 - e^{-\frac{t_1}{\tau}}) $$

On trouve : 
$$ E_m(t_1) \approx 3.21 \times 10^{-5} J $$
```

<!-- Page 130 -->

```markdown
# Exercice 3
Étude de quelques réactions de l’acide ascorbique

## I- Étude de la réaction de l’acide ascorbique avec l’eau.
1. Le tableau d’avancement associé à la réaction de l’acide ascorbique $C_6H_8O_6$ avec l’eau

| État         | Avancement | Les quantités de matière en mole (mol) |
|--------------|------------|----------------------------------------|
| Initial      | 0          | $CV$                                   |
| Intermédiaire| $x$        | $CV - x$                               |
| Final        | $x_{eq}$   | $CV - x_{eq}$                         |

2. Montrons que: $ \tau = \frac{t}{10^{pK_a - pH}} $
   On sait que: $ \tau = \frac{x_{eq}}{x_{max}} $
   Si la réaction est totale, le réactif limitant est: $C_6H_8O_6$, donc: $CV - x_{max} = 0$
   Alors: $ x_{max} = CV $
   D'après le tableau d'avancement, on a: $ x_{eq} = [H_3O^+]_{eq}V $
   Alors:  $ \tau = \frac{[H_3O^+]_{eq}}{c} = \frac{CV}{c} $
   D'où: $ \tau = \frac{CV}{c} $

3. Et on a: $ pH = pK_a + \log \left( \frac{[C_6H_7O_6]_{eq}}{[C_6H_8O_6]_{eq}} \right) $
   $ [C_6H_7O_6]_{eq} = [H_3O^+]_{eq} $
   Donc: $ [C_6H_8O_6]_{eq} = c - [H_3O^+]_{eq} $
   Donc: $ 10^{pK_a - pH} = \frac{c - [H_3O^+]}{[H_3O^+]} $
   D'où: $ 10^{pK_a - pH} = \frac{c - 1}{[H_3O^+]} $
   Ou bien: $ 10^{pK_a - pH} = c - 1 \quad (b) $
   On remplace $(b)$ dans $(a)$ on obtient :
   $$ 10^{pK_a - pH} = \frac{1}{1 + 10^{pK_a - pH}} $$

4. Alors: $ 1 - \tau = 10^{pK_a - pH} $
   On trouve: $ \tau = \frac{1}{1 + 10^{pK_a - pH}} $

5. A.N.: $ \tau = 7, 52 \times 10^{-2} $
   Puisque $ \tau < 1 $, donc cette réaction est limitée

6. Calculons la valeur de $c$:
   On a: $ [H_3O^+]_{eq} = [H_3O^+]_{eq} = 10^{-pH} $
   Alors: $ c = \frac{[H_3O^+]_{eq}}{10^{3,01}} $
   Donc: $ 10^{-pK_a} = 1 - 7,52 \times 10^{-2} $
   A.N.: $ \tau = 10^{-4.1} = 8,13 \times 10^{-2} $

## II- Dosage d’une solution d’acide ascorbique par une solution d’hydroxyde de sodium
1. Le montage expérimental du dosage.

2. L'équation de la réaction du dosage est : 
   $$ C_6H_8O_6(aq) + HO^{-}(aq) \rightarrow C_6H_7O_6(aq) + H_2O(l) $$
   Déterminons les coordonnées du point d’équivalence 
   D’après la courbe on a : $ E(V_E = 5mL, pH_E = 7,8) $

3. Calculons la concentration $C_A$ 
   A l'équivalence, on a : $ C_A \cdot V_A = C_B \cdot V_BE $
   Donc: 
   $$ C_A = \frac{C_B \cdot V_BE}{V_A} $$
   A.N.: $ C_A = 2,84 \times 10^{-2} \cdot 5 \times 10^{-3} \cdot 10^{-10} $ 
   A.N.: $ C_A = 1,4 \times 10^{-2} \text{mol.L}^{-1} $
```

<!-- Page 131 -->

```markdown
### Calculons la masse de l'acide ascorbique dans le comprimé

On a : $n = C_A \cdot V$ avec $n = \frac{m}{M}$  
Donc : $m = C_A \times V \times M$  
Alors $m = C_A \times V \times M$  
A.N. : $n = 1,42 \times 10^{-3} \times 200 \times 10^{-3} \times 176$  
On trouve : $m = 0,5 \, g = 500 \, mg$  

Ce comprimé est appelé Vita.C500, car il contient 500 mg de l'acide ascorbique.

### Pour un volume $V_B = 4 \, mL$, calculons le taux d'avancement associé à la réaction du dosage.
- Le tableau d'avancement de la réaction du dosage :

| Équation                     | $C_6H_8O_6(aq) + HO^{-}(aq) \rightarrow C_6H_7O_6^{-}(aq) + H_2O(l)$ |
|------------------------------|-------------------------------------------------------------------------|
| État                         | Avancement    | Les quantités de matière en mole (mol)                             |
| Initial                      | 0             | $C_A \cdot V_A$        | 0                                       |
| Intermédiaire                | $x$          | $C_A \cdot V_A - x$    | $C_B \cdot V_B - x$    | $x$       |
| Final                        | $x_f$         | $C_A \cdot V_A - x_f$  | $C_B \cdot V_B - x_f$  | $x_f$     |

#### Calculons la valeur du taux d'avancement final
On a : $V_B < V_E$, donc le titrant $HO^{-}$ est le réactif limitant, donc : $C_BV_B1 - x_{max} = 0$  
Alors $x_{max} = C_BV_B1 (a)$  
Et d'après le tableau d'avancement on a : $n_f(HO^{-}) = C_BV_BA - x_f$  
Donc : $[HO^{-}](V_A + V_B) = C_BV_B1 - x_f$  
Alors : $x_f = C_BV_B1 - [HO^{-}]\cdot (V_A + V_B) \text{ avec } [H_3O^+] = 10^{-pK_A} \cdot [H_3O^+]$  

On trouve : $x_f = C_BV_B1 - \frac{ke}{[H_3O^+]_1} \cdot (V_A + V_B) $ avec $k_e = 10^{pK_e}$ et $[H_3O^+] = 10^{-pH_1}$  

D'où : $x_f = C_BV_B1 - 10^{pH_1 - pK_e}(V_A + V_B) (b)$  
Et on sait que $t_1 = \frac{x_f}{x_{max}}$  

On remplace (a) et (b) dans (b), on obtient : $$t_1 = \frac{C_BV_B1 - 10^{pH_1 - pK_e}(V_A + V_B)}{C_BV_B1}$$  
Alors, $$\tau_1 = 1 - \frac{10^{pH_1 - pK_e(V_A + V_B)}}{C_BV_B1}$$  
Et d'après la courbe de $pH = f(V_B)$ pour $V_B = 4 \, mL$ on a : $pH_1 = 4,5$  
A.N. : $$\tau_1 = 1 - \frac{10^{4.5 - 11(10^{-4}+10^{-3})}}{2.84 \times 10^{-2} \times 4 \times 10^{-3}} \approx 1$$  

Puisque $\tau_1 = 1$, donc la réaction du dosage est totale.  

### On a : $pH_E = 7,8$
On constate que $7,1 < pH_E < 8,8$, donc l'indicateur coloré convenable est la phénolphtaléine.
```

<!-- Page 132 -->

```markdown
# Devoir surveillé N° 3 - 2
## Niveau: 2BIOF

### Exercice 1
Étude de la réponse d’un dipôle RC à un échelon de tension montant

Pour étudier la réponse d’un dipôle $RC$ à un échelon de tension montant, on réalise la figure ① qui est formée des éléments suivants :
- Deux condensateurs déchargés de capacités respectivement $C_1$ et $C_2$
- Générateur de tension de f.e.m. $E = 5V$ et de résistance $r$
- Conducteur ohmique de résistance $R = 280Ω$

À $t = 0$, on forme l'interrupteur $K$ et à l'aide d’un système acquisition convenable on obtient la courbe de la figure ② qui représente l’évolution de la charge $q(t)$ des deux condensateurs en fonction du carré de sa charge.

1. Exprimer la capacité équivalente des deux condensateurs en fonction de $C_1$ et $C_2$.
2. Déterminer l’équation différentielle vérifiée par la charge $q(t)$ des deux condensateurs.
3. Trouver les expressions de $B$ et $\alpha$ pour que l’expression $q(t) = B(1 - e^{-\alpha t})$ soit solution de l’équation différentielle.
4. Trouver l’expression de l’intensité $i(t)$ du courant et calculer sa valeur initiale.
   En exploitant la courbe de la figure déterminer:
   a. La valeur de l’intensité initiale du courant traversant le circuit.  
   b. La valeur de la constante du temps $\tau$.  
   c. La valeur de la capacité équivalente des deux condensateurs.  
   d. La valeur de la résistance $R$ du générateur.  
   Sachant que $C_1 = 2C_2$, calculer les valeurs des capacités $C_1$ et $C_2$.  
   Montrer que l’énergie électrique emmagasinée dans les deux condensateurs est:  
   $$ E_e = \frac{3}{2} C_1 E^2(1 - e^{-t/\tau})^2 $$  
   et calculer sa valeur à l’instant $t = 2\tau$.

### Exercice 2
Étude de l’établissement du courant dans dipôle RL série

Pour étudier l’annulation du courant dans un dipôle $RL$ on réalise le montage de la figure ① qui comporte:
- Générateur idéal de tension de f.e.m. $E = 12V$
- Un conducteur ohmique de résistance $R = 80Ω$
- Une bobine idéalisée d’inductance $L$ et de résistance interne $r$.
- Une diode idéalisée ($u = 0$)
- Interruptor $K$

Lorsque le régime permanent est atteint, on ouvre l’interrupteur $K$ à un instant $t = 0$ et à l’aide d’un système informatique adéquat on représente la courbe de la figure qui représente $ln(u_R) = f(t)$
1. Comment se comporte le courant dans régime permanent?
2. Montrer que l’équation différentielle vérifiée par la tension $u_R$ s’écrit sous la forme suivante:  
   $$ u_R + L \frac{du_R}{dt} = 0 $$  
   En déterminant l’expression de $u_R$ en fonction $t$, et
3. Vérifier que $u_R = U_e(1 - e^{-t/\tau})$ est une solution de l’équation différentielle 
   $$ u = \frac{RE}{R+r} $$
```

<!-- Page 133 -->

```markdown
1. Montrer que l'expression du courant s'écrit sous la forme suivante : $i(t) = Ie^{-\frac{t}{\tau}}$, en déterminant l'expression de $I$ en fonction $E$, $r$ et $R$  
   a. Montrer que $\ln(u_R) = -\frac{t}{\tau} + \ln(U)$  
   b. Déterminer les valeurs de $U$ et $\tau$.  
   c. Calculer la valeur de l'intensité $I$ courant en régime permanent.  
   d. Calculer la valeur de la résistance $r$.  
   e. Calculer la valeur de l'inductance $L$.  
   f. Calculer l'énergie stockée dans la bobine à l’instant $t = 2t$.

### Exercice 3
**Étude de quelques réactions de l’acide propanoïque**

L’acide propanoïque $C_2H_5C(O)OH$, est utilisé comme conservateur des aliments, son code est E280, on le trouve dans les fromages, les boissons et les conserve. Cet exercice vise à étudier la réaction de l’acide propanoïque avec l'eau ainsi que le dosage de cet acide par solution de l'hydroxyde de sodium.  
1. Dosage d'une solution d'acide propanoïque par une solution d'hydroxyde de sodium  
   Pour déterminer la concentration $C_A$ d'une solution aqueuse $(S_A)$ de l'acide propanoïque, on titre un volume $V_A = 10 mL$ de la solution $(S_A)$ par une solution aqueuse $(S_B)$ d'hydroxyde de sodium $(Na^+_{aq} + HO^-_{aq})$ de concentration $C_B = 10^{-2} mol.L^{-1}$.  
   La courbe ci-dessous représente l’évolution de $pH$ en fonction du volume du titrant ajouté $V_B$.  

2. Donner deux caractéristiques de la réaction du dosage.  
   a. Écrire l’équation de la réaction du dosage.  
   b. Déterminer les coordonnées du point d'équivalence $E$.  
   c. Déterminer la concentration $C_A$ de la solution $(S_A)$.  
   d. Pour un volume versé $V_B1 = 5 mL$ d'hydroxyde de sodium,  
   a. Dresser le tableau d'avancement associé à la réaction du dosage.  
   b. Calculer le rapport $\frac{[C_2H_5C(O)O^-]}{[C_2H_5C(O)OH]}$.  
   c. Déduire la valeur du $pK_A$ du couple $C_2H_5C(O)OH/C_2H_5C(O)O^-$.  
   d. Parmi les indicateurs colorés du tableau ci-dessous, déterminer celui qu'il faut ajouter à la solution pour procéder le plus efficacement possible au titrage précédé par une méthode colorimétrique. Justifier ce choix.  

| L’indicateur coloré   | Bleu de bromothymol | Rouge de bromphénol | phénolphtaléine |
|-----------------------|---------------------|----------------------|------------------|
| Zone de virage        | 6 – 7,6             | 5,2 – 6,8            | 7,2 – 8,8        |
```

<!-- Page 134 -->

```markdown
## II-Étude de la réaction de l’acide propanoïque avec l’ion éthanate
Pour déterminer le taux d’avancement final associé à la réaction de l’acide propanoïque et l’ion éthanate, en préparant une solution (S) de volume $V = 150 \, mL$ en apportant une masse $m = 148 \, mg$ d’acide propanoïque $C_2H_5COOH$ et une masse $m_2 = 328 \, mg$ d’éthanate de sodium $CH_3COONa$.

Soit $n_1$ est la quantité de matière initiale de l’acide propanoïque $C_2H_5COOH$ et $n_2$ est la quantité de matière initiale de sodium $CH_3COO^-$ dans la solution (S).

1. Calculer les quantités de matière initiales $n_1$ et $n_2$ et vérifier que : $n_2 = 2n_1$
2. Établir l’équation de la réaction acido-basique se produisant entre l’acide propanoïque $C_2H_5COOH$ et l’ion éthanate $CH_3COO^-$.
3. Construire le tableau d’avancement associé à cette réaction.
4. Exprimer la constante d’équilibre en fonction de $pK_A$ et $pK_A'$, puis calculer sa valeur.
5. Montrer que la constante d’équilibre associée à cette réaction est : 
$$ K = \frac{(1 - \tau)^2}{(\tau)(2 - \tau)} $$
où $\tau$ est le taux d’avancement final, conclure.
6. Calculer les pourcentages $ \alpha(C_3H_3OOH) $ et $ \alpha(CH_3COO^-) $ à l’état d’équilibre.
7. Déduire la valeur de $pH$ du mélange à l’état d’équilibre.

### Données
- La masse de l’acide propanoïque : $M_1 = 74 \, g \cdot mol^{-1}$
- La masse molaire d’éthanate de sodium : $M_2 = 82 \, g \cdot mol^{-1}$
- La constante d’acidité du couple : $$ K_a = 10^{-pK_A} $$, est : $pK_A = 4,8$

---

## Correction

### Exercice 1
Étude de la réponse d’un dipôle RC à un échelon de tension montant.

1. Les deux condensateurs sont en série, donc leur capacité équivalente est : 
$$ \frac{1}{C_{eq}} = \frac{1}{C_1} + \frac{1}{C_2} $$
   Alors : $C_{eq} = \frac{C_1 C_2}{C_1 + C_2}$.

2. L’équation différentielle vérifiée par la charge $q(t)$ des deux condensateurs 
   D’après la loi d’additivité des tensions
   on a : $u_{C_1} + u_{R} = E - E_{rc}$
   Avec : $u_R = R \cdot i(t)$ et $u_{C_{eq}} = q(t) / C_{eq}$ alors : 
   $$ q(t) = (R + r)C_{eq} \frac{d(q)}{dt} = E $$
   Donc : 
   $$ \frac{q(t)}{(R + r) C_{eq}} \frac{dq(t)}{dt} = E $$
   Alors : 
   $$ q(t) = (R + r)C_{eq} \frac{dq(t)}{dt} = C_{eq} E $$.

3. Déterminons l’expression de $B$ et $\alpha$: 
   On remplace la solution $q(t) = B \cdot e^{-at}$ dans l’équation $q(t) + (R + r)C_{eq} \cdot q(t) = C_{eq}E$
   alors : 
   $$ B(1 - e^{-at}) + (R + r)C_{eq} B \cdot e^{-at} = C_{eq} E $$.
   Pour que cette équation soit vérifiée $\forall t \geq 0$ il faut que :
   $$ \begin{cases}
   C_{eq} E / B = 1 \\
   (R + r) B = C_{eq} E = 1
   \end{cases} $$

4. L’expression de l’intensité du courant traversant les deux condensateurs :
   On a : $i(t) = \frac{dq}{dt}$.

   Donc :
   $$ i(t) = B \cdot \alpha \cdot e^{-at} $$
   Avec $B = C_{eq} E \alpha = \frac{1}{(R + r) C_{eq}}$ 
   Donc : $C_{eq} = \frac{1}{3}C_1$.

5.  Déterminons la valeur de l’intensité initiale dans le circuit. 
   On a : $I_0 = \frac{dq}{dt}\Big|_{t=0}$ 
   D’après la courbe on trouve : 
   $$ I_0 = \frac{(20 - 0) \times 10^{-6}}{(1.2 - 0) \times 10^{-3}} $$
   On obtient : $I_0 = 1,67 \times 10^{-2}$.

6. Déterminons la valeur de la constante du temps. 
   D’après la courbe, on a : $\tau = 1,2 \, ms$.

7. La valeur de la capacité équivalente des deux condensateurs. 
   On a : $q_{max} = C_{eq} E$.
   Donc : $C_{eq} = \frac{q_{max}}{E}$. 
   A.N. : $C_{eq} = 4 \times 10^{-6}$.

8. Déterminons la valeur de la résistance $r$.
   On a : $I_0 = \frac{E}{(R+r)}$.
   Donc : $R + r = \frac{E}{I_0}$.
   Alors : 
   $$ r = \frac{E}{I_0} - R = 280 \, \Omega. $$

9. Calculons les valeurs des capacités $C_1$ et $C_2$.
   On a : $C_{eq} = \frac{C_1 C_2}{C_1 + C_2}$.
   Alors : $C_{eq} = \frac{2}{3} C_2$ et donc : 
   $C_2 = \frac{3}{2} C_{eq}$.
```

<!-- Page 135 -->

```markdown
A.N.: $C_2 = \frac{3}{2} \times 4 \times 10^{-6} = 6 \times 10^{-6} \, F$
Et $C_1 = 2C_2 = 1,2 \times 10^{-5} \, F$
On obtient : $C = 5 \times 10^{-6} \, F = 5 \, \mu F$

Montrons que l’énergie électrique stockée dans les deux condensateurs est: 
$$ E_e = \frac{1}{2} C_2 E^2(1 - e^{-t/\tau}) $$
On a: $E_e(t) = \frac{1}{2 C_{q}} q(t) = C_{eq} E^2(1 - e^{-t/\tau})$
$$ \Leftrightarrow E_e(t) = \frac{1}{2 C_{q}} C_{eq} E^2(1 - e^{-t/\tau})^2 $$
$$ \Leftrightarrow E_e(t) = \frac{1}{3} C_2 E^2(1 - e^{-2t/\tau}) $$

Calculons $E(2\tau)$:
On a: $E_e(2\tau) = \frac{1}{3} C_2 E^2(1 - e^{-2\tau/\tau}) $
Donc: $E_e(2\tau) = \frac{1}{3} C_2 E^2(1 - e^{-2}) $
D'où: $E_e(2\tau) = \frac{2}{3} C_2 E^2$

A.N.: $E_e(2\tau) = 3,74 \times 10^{-5} \, J$

---

**Exercice 2**

Étude de l’établissement du courant dans dipôle RL série

1. On sait que $U = L \frac{dI}{dt} + ri(t)$
   En régime permanent, l’intensité du courant devient constante: $i(t) = I_p = \text{cte}$
   Donc: $u_L = L \frac{dI}{dt} + rI_p$
   D’où: $u_L = rI_p$
   Alors dans ce régime, la bobine se comporte comme un conducteur ohmique de résistance $r$.

   L’équation différentielle
   D’après la loi d’additivité des tensions, on a :
   $$ L \frac{dI}{dt} + rI + u_R = 0 $$
   Alors: $L \frac{dI}{dt} + u_R (\frac{R}{R+r}) = 0$
   $$ \Rightarrow L \frac{dI}{dt} + u_R(\frac{R + r}{R}) = 0 $$
   $$ \Rightarrow \frac{R}{R + r} + u_R = 0 $$

2. Vérifions que $u_R = U e^{-t/\tau}$ est une solution de l'équation différentielle: 
   $$ u_R + \frac{d u_R}{dt} = 0 $$
   On a: $U e^{-t/\tau} + \frac{d}{dt}(U e^{-t/\tau}) = 0 $
   $$ \Rightarrow U e^{-t/\tau} + \frac{U}{\tau} e^{-t/\tau} = 0 $$
   $$ \Rightarrow (1 + \frac{1}{\tau})U e^{-t/\tau} = 0 $$

3. Montrons que $i(t) = I e^{-t/\tau}$.
   On a: $$ i(t) = \frac{u_R}{R} = \frac{U e^{-t/\tau}}{R} $$
   Avec $u_R = RE$ alors: $i(t) = \frac{RE}{R + r}$

   Donc: $$ \Rightarrow i(t) = Ie^{-t/\tau} $$

4. a – Montrons que $ \ln(u_R) = -\frac{1}{\tau} + \ln(U)$
   On a: $u_R = U e^{-t/\tau}$
   Donc: $ \ln(u_R) = \ln(U e^{-t/\tau})$
   Alors: $ \ln(u_R) = \ln(U) + \ln(e^{-t/\tau}) $

   b – La courbe $ \ln(u_R) = f(t)$ est affilée d'équation 
   $$ \ln(u_R) = at + b $$
   Avec : $ a = -\frac{1}{\tau} $
   $ b = \ln(U)$

   D'après la courbe, on a : 
   $$ \begin{align*}
   a & = \frac{2.25 - 0}{(0 - 2.25) \times 10^{-3}} \\
   b & = 2.25 
   \end{align*} $$

   Donc: 
   $$ \tau = -\frac{1}{10^{-3} \, s} $$
   $$ U = 9,5 \, V $$

5. c – Calculons la valeur de $I$
   On a : $u_R = R \cdot i(t)$
   En régime permanent, cette relation devient $U = RI$ 
   Donc: $I = \frac{U}{R}$ 
   A.N.: $I = \frac{9.5}{80} = 0,12 \, A$

6. d – Calculons la valeur de $r$
   On a : $I = \frac{E}{R + r}$
   Donc: $r + R = \frac{E}{I}$
   Alors: $r = \frac{E}{I} - R$
   A.N.: $r = \frac{9.5}{0.12} - 80 = 20 \, \Omega$

7. e – Calculons la valeur de $L$
   On a : $\tau = \frac{L}{R + r}$
   Donc : $L = \tau(R + r)$
   Donc: $$ L = 1 \times 10^{-3} \times (80 + 20) = 0,1 \, H $$

8. Calculons $E_m(2\tau)$
   On a : $E_m(t) = \frac{1}{2} L I(t)^2$
   Donc: $E_m(t) = \frac{1}{2} L (-I e^{-t/\tau})^2$
   Alors à $t = 2\tau$ on trouve: 
   $$ E_m(2\tau) = \frac{1}{2} L (-I e^{-2})^2 $$

   D'où: 
   $$ E_m(2\tau) = \frac{L}{2} (I e^{-2})^2 $$
   A.N.: $E_m(2\tau) = 1,32 \times 10^{-5} \, J $
```

<!-- Page 136 -->

```markdown
# Exercice 3
**Étude de quelques réactions de l’acide propanoïque**

## I-Dosage d’une solution d’acide propanoïque par une solution d’hydroxyde de sodium

1. Les caractéristiques de la réaction du dosage : totale - rapide.
2. L'équation de la réaction du dosage : 
   $$ C_2H_5OOH_{(aq)} + HO^-_{(aq)} \to C_2H_5O_2^{-}_{(aq)} + H_2O_{(l)} $$
3. Les coordonnées du point d'équivalence : 
   $$ E(V)BE = 20 \, mL, \, pH_E = 8,2 $$

D'après la relation d'équivalence, on a : 
$$ C_A V_A = C_B V_B $$
Donc : 
$$ C_A = \frac{C_B V_B}{V_A} $$

### a - le tableau d’avancement associé à la réaction du dosage.

| Équation                                | Avancement | Les quantités de matière en mole (mol) |
|-----------------------------------------|------------|------------------------------------------|
| $$ C_2H_5OOH_{(aq)} + HO^-_{(aq)} \to C_2H_5O_2^{-}_{(aq)} + H_2O_{(l)} $$ |            |                                          |
| État                                   |            |                                          |
| Initial                                | 0          | $C_A V_A$                               |
| Intermédiaire                           | $x$        | $C_B V_B - x$                           |
| Final                                   | $x_f$      | $C_A V_A - x_f$                         |

### b - Calculons le rapport 

$$ \frac{[C_2H_5OOH]_{r}}{[C_2H_5OOH]_{f}} $$

Puisque $V_B < V_BE$, donc le titrant $HO^-$ est le réactif limitant, donc $C_B V_{B1} - x_{max} = 0$. 

Alors $x_{max} = C_B V_{B1}$.

Et à partir de le tableau d’avancement, on a : 
$$ n_f(C_2H_5OOH) = x_{max} = C_A V_A = C_A - C_B V_{B1} $$

Donc : 
$$ [C_2H_5OOH]_{r} = \frac{x_{max}}{V_T} = [C_2H_5OOH]_{f} $$

On remplace (b) et (c) dans, on trouve : 
$$ \frac{[C_2H_5OOH]_{r}}{[C_2H_5OOH]_{f}} = \frac{C_B V_{B1}}{V_T} = \frac{C_A V_A - C_B V_{B1}}{C_B V_{B1}} $$

Avoir :
$$ [C_2H_5OOH]_{r} = \frac{C_B V_{B1}}{C_A - C_B V_{B1}} $$

D’où : 
$$ [C_2H_5OOH]_{f} = \frac{C_B V_{B1}}{C_A - C_B V_{B1}} $$
On trouve :
$$ pK_A = pH_1 + log \left( \frac{[C_2H_5OOH]_{f}}{[C_2H_5OOH]_{r}} \right) $$
A.N.: 
$$ pK_A = 4,4 - log(0,33) = 4,88 $$

### c - Déduisons la valeur de pK_A

On a : 
$$ pH_1 = pK_A + log \left( \frac{[C_2H_5OOH]_{f}}{[C_2H_5OOH]_{r}} \right) $$

Donc : 
$$ pK_A = pH_1 - log \left( \frac{[C_2H_5OOH]_{f}}{[C_2H_5OOH]_{r}} \right) $$
A.N.: 
$$ pH_E = 8,2 $$

On constate que $7,2 < pH_E < 8$, donc l’indicateur coloré convenable est la phénolphtaléine.

## II-Étude de la réaction de l’acide propanoïque avec l’ion éthanoate

1. Calculons les quantités de matières initiales des réactifs :
   On a : 
   $$ n_1 = \frac{m_1}{M_1} = \frac{1,48 \times 10^{-3}}{74} $$
   A.N.: 
   $$ n_1 = 2 \times 10^{-3} mol $$

2. L'équation de la réaction : 
   $$ C_2H_5OOH_{(aq)} + CH_3COO^{-}_{(aq)} \rightleftharpoons C_2H_5O_2^{-}_{(aq)} + CH_3COOH_{(aq)} $$

3. Le tableau d’avancement associé à cette réaction :

| Équation                                | Avancement | Les quantités de matière en mole (mol) |
|-----------------------------------------|------------|------------------------------------------|
| $$ C_2H_5OOH_{(aq)} + CH_3COO^{-}_{(aq)} \to C_2H_5O_2^{-}_{(aq)} + CH_3COOH_{(aq)} $$ |            |                                          |
| État                                   |            |                                          |
| Initial                                | 0          | $n_1$                                   |
| Intermédiaire                           | $x$        | $n_1 - x$                               |
| D'équilibre                             | $x_{eq}$   | $n_1 - x_{eq}$                         | 
```

<!-- Page 137 -->

```markdown
# 1. Trouvons l'expression de la constante d'équilibre :
On a : 
$$ K = \frac{[C_2H_5OO^-]_{eq}[CH_3COOH]_{eq}}{[C_2H_5OH]_{eq}[H_3O^+]_{eq}} $$
Donc : 
$$ K = k_a \frac{K_A}{K_A} $$
Alors : 
$$ K = 10^{-pK_a} \times 10^{-pK_a} = 10^{pK_2 - pK_A} $$
A.N. : $K = 10^{4.8 - 4.9} = 0.79$

## 2. Montrons que :
$$ K = \frac{\tau^2}{(1 - \tau)(2 - \tau)} $$
- On sait que : $\tau = \frac{x_f}{x_{max}}$
- Si la réaction est totale, l'acide $C_2H_5OOH$ est le réactif limitant, donc $n_1 - x_{max} = 0$ 
Alors $x_{max} = n_1$
D'où : 
$$ \tau = \frac{x_f}{n_1} $$
- On a : 
$$ K = \frac{[C_2H_5OO^-]_{eq}[CH_3COOH]_{eq}}{[C_2H_5OH]_{eq}[H_3O^+]_{eq}} $$
D'après le tableau d'avancement, on a :
$$ [C_2H_5OO^-]_{eq} = [CH_3COOH]_{eq} = \frac{x_f}{V} $$
et 
$$ [C_2H_5OH]_{eq} = \frac{n - x_f}{V} $$
et 
$$ [H_3O^+]_{eq} = \frac{n_2 - x_f}{V} $$
Alors l'expression de la constante d'équilibre devient : 
$$ K = \frac{\left( \frac{n_1 - x_f}{V} \right) \left( \frac{n_2 - x_f}{V} \right)}{\left( \frac{x_f}{V} \right) \left( \frac{n_1}{V} \right)} $$
$$ \Leftrightarrow K = \frac{(n_1 - x_f)(n_2 - x_f)}{x_f^2} $$
$$ K = \frac{n_1 - x_f}{n_1}(n_2 - x_f) $$
$$ K = \frac{(n_1 - x_f)^2}{n_1 n_2} $$
$$ K = \frac{(n_1 - x_f)(2 - x_f)}{n_1} $$
avec $n_2 = 2n_1$
$$ K = \frac{(n_1 - x_f)(-x_f)}{n_1} \quad (b) $$

## 3. On remplace (a) dans (b) et on trouve :
$$ K = \frac{\tau^2}{(1 - \tau)(2 - \tau)} $$
  
## 4. Calculons la valeur de $\tau$ 
On a :
$$ K = \frac{\tau^2}{(1 - \tau)(2 - \tau)} $$
$$ \Rightarrow \tau^2 = K(1 - \tau)(2 - \tau) $$
$$ \Rightarrow \tau^2 - K\tau^2 - 2K + K\tau = 0 $$
$$ \tau^2(1 - K) - 3K - 2K = 0 $$
$$ \tau^2(1 - K) + 3K - 2K = 0 $$
$$ \Rightarrow 5K(1 - K) $$
A = 9 $(0.79)^2 + 8 \times 0.79(1 - 0.79) = 6.94$
Puisque A > 0, cette équation possède deux solutions :
$$ t_1 = -\frac{3K + \sqrt{4}{5(K)}}{2(1 - K)} = 0.63 $$
$$ t_2 = -\frac{3K + \sqrt{4}{-5(K)}}{2(1 - K)} = -11.5 $$
Et puisque $0 \leq \tau \leq 1$, donc la solution convenable est $t_1 = 0.63$

## 5. Calculons les pourcentages $\alpha(CH_3COOH)$ et $\alpha(CH_3COO^-)$
Calculons : 
$$ \alpha(CH_3COOH) = \frac{[CH_3COOH]}{[CH_3COOH] + [CH_3COO^-]} $$
On a : 
$$ \alpha(CH_3COOH) = \frac{x_f}{V} $$
Avec : 
$$ [CH_3COOH] = \frac{x_f}{V} $$
$$ [CH_3COO^-] = \frac{n_2 - x_f}{V} $$
$$ \Rightarrow \alpha(CH_3COOH) = \frac{x_f}{x_f + n_2 - x_f} $$
$$ \Leftrightarrow \alpha(CH_3COOH) = \frac{x_f}{V} $$
$$ \Rightarrow \alpha(CH_3COOH) = \frac{x_f}{V} \quad \text{avec } n_2 = 2n_1 $$
A.N. : $\alpha(CH_3COOH) = 0.63 = 0.315 = 31.5\%$
On trouve : 
$$ \alpha(CH_3COOH) = 0.315 = 31,5\% $$
Calculons : 
$$ \alpha(CH_3COO^-) $$
On a : 
$$ \alpha(CH_3COO^-) = \alpha(CH_3COOH) + \alpha(CH_3COOH) - 1 $$
A.N. : $\alpha(CH_3COO^-) = 1 - \alpha(CH_3COOH)$
On trouve : 
$$ \alpha(CH_3COO^-) = 1 - 0.315 = 0.69 = 68,5\% $$

## 6. Calculons la valeur de pH du mélange.
On a : 
$$ pH = pK_A + \log{\left(\frac{[CH_3COOH]}{[CH_3COO^-]}\right)} $$
Et on a : 
$$ \Rightarrow pH = pK_A + \log\left(\frac{[CH_3COOH]}{[CH_3COO^-]}\right) $$
On remplace (c) dans (d), et on trouve :
$$ pH = pK_A + \log{\left(\frac{\alpha(CH_3COO^-)}{\alpha(CH_3COOH)}\right)} $$
A.N. : $pH = 4.8 + 8 + \log\left(\frac{0.685}{0.315}\right) = 5.14$
```


<!-- Page 138 -->

```markdown
# Devoir surveillé N°3 – Niveau: 2BIOF

## Exercice 1 
### Étude de la réponse d’un dipôle RC à un échelon de tension montant

Les condensateurs permettent d’emmagasiner des charges électriques et donc de l'énergie électrique, c’est pourquoi ils sont utilisés dans plusieurs circuits électriques et électroniques. Le montage de la figure ① permet d’étudier la réponse d’un dipôle $RC$ à un échelon de tension montant.

1. Déterminer l’équation différentielle vérifiée par la tension $u_R$ aux bornes du conducteur ohmique.
2. Trouver les expressions de $A$ et $\tau$ pour que l’expression $u_R = A e^{-\frac{t}{\tau}}$ soit solution de l’équation différentielle.
3. Un programme approprié permet de tracer $\ln(u_R) = f(t)$ (la figure ②).
   - a. Montrer que $\ln(u_R) = -\frac{t}{\tau} + \ln E$.
   - b. Déterminer les valeurs de $E$ et $\tau$.
   - c. Calculer la valeur de la capacité $C$. On donne $R = 250 \, \Omega$.
   - d. Déterminer l’énergie stockée dans le condensateur à la date $t = \tau$.

## Exercice 2 
### Détermination de la vitesse d’une balle de pistolet

Pour déterminer la vitesse $V$ d’une balle de pistolet, technique basée sur l'établissement et l’annulation du courant aux bornes d’un dipôle $RL$. Pour cela on réalise un montage électrique de la figure ① et qui contient:

- Générateur idéal de tension de f.e.m. $E = 7.5 \, V$
- Conducteur ohmique de résistance $R = 40 \, \Omega$
- Bobine d'inductance $L$ et résistance interne $r$
- Une diode idéale ($u_D = 0$)
- Un interrupteur K
- Deux feuilles métalliques $AB$ et $CD$
- Fils de connexions

Lorsque le régime permanent est atteint, on tire la balle qui coupera la feuille $AB$ à un instant $t_0 = 0 \, s$.
1. Comment se comporte la bobine en régime permanent ?
2. Montrer que l'équation différentielle vérifiée par la tension $u_R$ s'écrit sous la forme suivante:
   $$ u_R + u_R0 = 0 $$
3. Déterminer l’expression de $\tau$ en fonction $L, r$ et $R$.
4. Vérifier que $u_R = RE e^{-\frac{t}{\tau}}$ est une solution de l’équation différentielle.
5. Déduire l’expression de la tension $u_R$ à l’instant $t_0 = 0 \, s$.
6. On suppose que la balle est en mouvement rectiligne uniforme et qu’elle coupe la feuille $DC$ à un instant $t_1 (t_1 > t_0)$. À l'aide d'un système d’acquisition convenable, on obtient la courbe de la figure ③ qui représente les variations de la tension $u_R$.
```

<!-- Page 139 -->

```markdown
a - Lorsque la balle du pistolet coupe la feuille CD une étincelle s’y produit. Expliquer cette observation.  
b - Déterminer la valeur de la constante du temps $\tau$.  
c - Calculer la valeur de l’inductance $L$ et celle de la résistance $r$.  
d - Déterminer graphiquement la valeur $u_{R_1}$ à l’instant $t_1$ où la balle coupe la feuille CD.  
e - Montrer que: $t_1 = \tau \ln\left(\frac{L}{R_1}\right)$. Calculer $t_1$.  
f - Calculer la vitesse de la balle du pistolet sachant que la distance entre les deux fil AB et CD est de $1,3 \, m$.  
g - Pour mesurer avec précision la vitesse de la balle il faut que la résistance $R$ soit inférieure à une valeur limite $R_{max} \, (t_1 < 5 \, s)$. Trouver l’expression de $R_{max}$ en fonction de $V$, $d$, $L$ et $r$. Calculer la valeur de $R_{max}$.

## Exercice 3
### Étude de quelques réactions de la méthylamine

Méthylamine $CH_3NH_2$ est un composé organique basique, caractérisé par son odeur identique à celles des poissons. Cet exercice a pour but d’étudier la réaction du méthylamine $CH_3NH_2$ avec l’eau et avec l'acide chlorhydrique $(H_3O^+ + Cl^-)$.  
**Données**: Le produit ionique de l’eau à $25^{\circ}C$ est: $K_w = 10^{-14}$ ou $pK_w = 14$  
### Partie I: Réaction de la méthylamine avec l’eau
On prépare une solution $(S)$ de méthylamine $CH_3NH_2$ de volume $V$ et de concentration $C = 2 \times 10^{-2}mol.L^{-1}$. La mesure du pH de cette solution donne $pH = 11,5$.  
1. Écrire l’équation de la réaction du méthylamine $CH_3NH_2$ avec l’eau.  
2. Dresser le tableau d’avancement de cette réaction.  
3. Trouver l’expression du taux d’avancement final $\tau$ en fonction de $C$ et $pH$ et $pK_e$. Calculer $\tau$ et déduire.  
4. Trouver l’expression de la constante d’équilibre $K$ associée à la réaction de la méthylamine avec l’eau en fonction de $C$ et $\tau$. Calculer sa valeur.  
5. Vérifier que la valeur du $pK_A$ du couple $CH_3NH_3^+/CH_3NH_2$ est : $pK_A = 10,8$  
6. Calculer les pourcentages $\alpha(CH_3NH_3^+)$ et $\alpha(CH_3NH_2)$ et déduire l’espèce chimique la prédominante dans cette solution.

### Partie II: Dosage de la méthylamine par une solution d’acide chlorhydrique
On réalise le dosage de la méthylamine $(S_B)$ de méthylamine de volume $V_B = 10 mL$ et de concentration $C_B$ par une solution $(S_A)$ d’acide chlorhydrique $(H_3O^+ + Cl^-)$. La concentration $C_A = 5 \times 10^{-2}mol/L$.  
1. Mesurer le pH du mélange après chaque addition d’un volume d’acide chlorhydrique, les résultats obtenus permettent de tracer la courbe de dosage $pH = f(V_A)$ la figure (0).  
2. Compléter le schéma du dosage ci-contre (figure 0), en donnant le nom de chaque élément.  
3. Écrire l’équation de la réaction du dosage.  
4. Déterminer les coordonnées du point d'équivalence $E$.  
5. Calculer la concentration $C_B$ de la solution $(S_B)$.  
6. Déterminer le volume $V_A$ de la solution d'acide chlorhydrique qu'il faut ajouter pour que: $[CH_3NH_3^+] = [Cl^−]$.  
7. Calculer la constante d'équilibre associée à la réaction du dosage et le dosage.
```


<!-- Page 140 -->

```markdown
# Correction

## Exercice 1

Étude de la réponse d’un dipôle RC à un échelon de tension montant

1. Déterminons l’équation différentielle vérifiée par la tension $u_R$.
   D’après la loi d’additivité des tensions on a: 
   $$ u_C(t) + u_R(t) = E $$
   Donc: 
   $$ u_C(t) + R i(t) = 0 \, \text{avec } i(t) = C \frac{du_C(t)}{dt} $$
   
   Par dérivation on obtient:
   $$ C \frac{du_C(t)}{dt} + R i(t) = 0 $$
   $\Rightarrow C \frac{du_C(t)}{dt} + R i(t) = 0 \, \text{avec } i(t) = \frac{u_R(t)}{R}$
   
   $$ i(t) = C \frac{du_C(t)}{dt} = \frac{u_R(t)}{R} $$
   Donc: 
   $$ u_R(t) + R C \frac{du_C(t)}{dt} = 0 $$

2. Trouvons l’expression de $E$ et de $\tau$
   On remplace la solution $u_R = Ae^{-t/\tau}$ dans l’équation différentielle:
   $$ u_C(t) + R C \frac{du_C(t)}{dt} = 0 $$
   On trouve: 
   $$ Ee^{-t/\tau} - RC e^{-t/\tau} = 0 $$
   Donc: 
   $$ e^{-t/\tau} (1 - \frac{RC}{\tau}) = 0 $$

   Alors:
   $$ \tau = RC $$
   Et à $ t = 0 $ on a: 
   $$ u_C(0) + u_R(0) = E $$

   Donc: 
   $$ 0 + A e^0 = E $$
   Alors: 
   $$ A = E $$

   a. – Montons que: 
   $$ \ln(u_R) = E e^{-t/\tau} $$
   Donc:
   $$ \ln(u_R) = \ln(E e^{-t/\tau}) $$
   Alors:
   $$ \ln(u_R) = \ln(e^{-t/\tau}) + \ln(E) $$
   D'où:
   $$ \ln(u_R) = -\frac{t}{\tau} + \ln(E) $$

   b. – Détermination: $E$ et $\tau$:
   La courbe $\ln(u_C) = f(t)$ est une fonction affine d’équation: 
   $$ \ln(u_C) = a \cdot t + b $$
   Et on a: 
   $$ \ln(u_C) = -\frac{t}{\tau} + \ln(E) $$

   Donc par analogie:
   $$ a = -\frac{1}{\tau} \Rightarrow E = e^b $$

   D’après la courbe: 
   $$ E = 2.5 = 0.5 \cdot 5^{-1} = 2.5 $$

   Alors:
   $$ \tau = -\frac{1}{(-0.25)} = 4 \, \text{ms} $$

   c. – Calculons la valeur de $\tau$.
   On a: 
   $$ \tau = R \cdot C $$
   Donc: 
   $$ C = \frac{\tau}{R} = \frac{4 \times 10^{-3}}{250} = 1.6 \times 10^{-5} F $$
```

<!-- Page 141 -->

```markdown
# Déterminons l'énergie stockée dans le condensateur à la date t = τ

On a : $E_e(t) = \frac{c}{2} u_c(t)^2$ avec $u_c(t) = E - u_R(t)$  
Donc : $E_e(t) = \frac{c}{2} (E - u_R(t))^2$

Alors : $E_e(τ) = \frac{c}{2} (E - u_R(τ))^2$  
D'où : $E_e(τ) = \frac{c}{2} (E - 0,37E)^2$  
A.N. : $E_e(τ) = \frac{c}{2} (12,2 - 0,37 \times 12,2)^2$  
On trouve : $E_e(τ) = 4,73 \times 10^{-4}$

## Exercice 2 - Détermination de la vitesse d’une balle de pistolet

1. En régime permanent, l'intensité du courant traversant le circuit est constante : $i = I$ cte.  
   Donc $u_L = rI + L \frac{di}{dt}$  
   Alors $u_L = rI$  
   Dans ce régime, la bobine se comporte comme un conducteur ohmique de résistance.

2. D'après la loi d'additivité des tensions, on a : $u_L + u_R + u_D = 0$  
   Avec $u_D = 0$ ; $u_R = ri(t)$ ; $u_L = rI(t) + L \frac{di(t)}{dt}$  

   $\Rightarrow rI(t) + L \frac{di(t)}{dt} = 0$  
   $\Rightarrow (R + r)I + L \frac{dI}{dt} = 0$  
   $\Rightarrow \frac{R+r}{R} u_R + L \frac{d u_R}{dt} = 0$  
   $\Rightarrow u_R + L \frac{du_R}{dt} = 0$

3. Vérifions que $u_R = \frac{RE}{R+r} e^{-t/\tau}$ est une solution de l'équation différentielle.  
   On remplace $u_R = \frac{RE}{R+r} e^{-t/\tau}$ dans l'équation

   $u_R + \frac{du_R}{dt} = 0$,  
   On trouve :  
   $\frac{RE}{R+r} e^{-t/\tau} + \left(\frac{RE}{R+r}\right) \left(-\frac{1}{\tau} e^{-t/\tau}\right) = 0$  
   $ \Rightarrow RE + RE - \frac{RE}{R+r} e^{-t/\tau} = 0$  
   $\Rightarrow 0 = 0$  

   Donc $u_R = \frac{RE}{R+r} e^{-t/\tau}$ est une solution de l'équation différentielle.

4. À $t = 0$, on a : $u_R(0) = \frac{RE}{R+r}$

   a - Lorsque la balle coupe le fil CD, l'intensité du courant s'annule instantanément, et donc sa dérivée $\frac{di}{dt}$ prend une valeur très grande, ce qui conduit à l'apparition d'une surtension aux bornes de la bobine entraînant une étincelle dans le point d'impact de la balle et le fil CD.

   b - D'après la courbe, on a : $\tau = 2 ms$

c - On a : $u_R(0) = \frac{RE}{R+r}$  
   Donc : $R + r = \frac{RE}{u_R(0)}$  
   D’où : $(R+r)u_R(1) = \frac{RE}{ER}$ avec $\tau = \frac{L}{R+r} = \frac{L}{\tau}$ 

A.N. : $L = 2 \times 10^{-3} \times (40 + 10) = 0,1H$  
d - D’après la courbe, on a : $U_{R_1} = 1 V$

e - Montrons que $t_1 = \tau ln \left(\frac{2 \cdot E \cdot R}{L \cdot u_{R_1}}\right)$  
   On a : $u_{R_1} = \frac{RE}{R+r}$  

   $\Rightarrow (R + r)u_{R_1} = \frac{RE}{R} = e^{-e/t}$ avec $\tau = \frac{L}{R+r} = R + r = \frac{L}{\tau}$

A.N. : $t_1 = 2ln\left(\frac{t_E \cdot R}{L \cdot u_{R_1}}\right)$  
A.N. : $t_1 = 2 ln (2 \times 10^{-3} \times 7,5 \times 10^{-3}, 0,1 \times 1)$

A.N.: $t_1 = 3,58 ms$

f - On a : $V = \frac{d}{dt}$ avec $d = t_1 - t_0$  
Donc : $V = \frac{1,3}{3,58 \times 10^{-3}} = 3,63 \times 10^{2} \, m \cdot s^{-1}$

g - Pour mesurer la vitesse de la balle avec précision, il faut qu’elle coupe le fil CD durant le régime transitoire.  
Donc il faut que : $\Delta t < 5 \tau$

$\Rightarrow t_1 < 5 \frac{L}{R + r}$  
$\Rightarrow (R + r)t_1 < 5L$  
$\Rightarrow (R + r) < \frac{5L}{d}$  
$R < R_{max}$ avec $R_{max} = \frac{5L}{d} - r$

A.N. : $R_{max} = 129,61 \, \Omega$
```

<!-- Page 142 -->

```markdown
# Exercice 3
### Étude de quelques réactions du méthylamine

## Partie 1 : Réaction du méthylamine avec l’eau
1. L'équation de la réaction $CH_3NH_2 + H_2O \rightleftharpoons CH_3NH_3^+ + OH^-$ est :
   $$
   CH_3NH_2(aq) + H_2O(l) \rightleftharpoons CH_3NH_3^+(aq) + OH^-(aq)
   $$

2. Le tableau d'avancement associé à cette réaction :
   $$
   \begin{array}{|c|c|c|c|}
   \hline
   \text{Équation} & CH_3NH_2(aq) & H_2O(l) & CH_3NH_3^+(aq) + OH^-(aq) \\
   \hline
   \text{État} & \text{Avancement} & \text{Les quantités de matière en mole (mol)} \\
   \hline
   \text{Initial} & 0 & CV & 0 \\
   \text{Intermédiaire} & x & CV - x & x \\
   \text{Final} & x_{eq} & CV - x_{eq} & x_{eq} \\
   \hline
   \end{array}
   $$

3. Trouvons l'expression du taux d'avancement final.
   On sait que : 
   $$
   x_f = \frac{x}{x_{max}} \quad (a)
   $$
   Si cette réaction est totale, alors le réactif limitant est la méthylamine $CH_3NH_2$.
   Donc : 
   $$
   x_{max} = C \cdot V \quad (b)
   $$
   Et d'après le tableau d'avancement on a : 
   $$
   x_f = n_f [HO^-]
   $$
   Alors : 
   $$
   x_f = k_f \cdot V \quad k_e = 10^{-pH_e} \quad [H_3O^+] = 10^{-pH}
   $$
   D'où : 
   $$
   x_f = 10^{-pH_e}c
   $$
   On remplace $(b)$ et $(c)$ dans $(a)$, on obtient :
   A.N. : $10^{-15} = 15,8 \times 10^{-2} = 15,8 \%$

4. Trouvons l'expression du $K$ en fonction de $c$ et $\tau$.
   On a : 
   $$
   [CH_3NH_3^+]_{eq} = [HO^-]_{eq} = [CH_3NH_2]_{eq}
   $$
   D'après le tableau d'avancement on a :
   $$
   [CH_3NH_3^+]_{eq} = [HO^-]_{eq} = [CH_3NH_2]_{eq} = \frac{CV - x_{eq}}{V}
   $$
   Donc : 
   $$
   [CH_3NH_3^+]_{eq} = C - [HO^-]_{eq}
   $$
   L'expression de la constante d'équilibre devient : 
   $$
   K = \frac{[HO^-]_{eq}^2}{[CH_3NH_2]_{eq}}
   $$
   Avec : 
   $$
   [HO^-]_{eq} \quad \text{donc } [HO^-]_{eq} = \tau c
   $$
   On remplace $(e)$ dans $(d)$, on trouve :
   $$
   K = \frac{\tau^2 c}{c - \tau c} 
   $$
   D'où : 
   $$
   K = \frac{\tau^2}{c(1 - \tau)}
   $$

5. Vérifions que $pK \approx 10,8$.
   On a : 
   $$
   K = \frac{[HO^-][CH_3NH_3^+] }{[CH_3NH_2]}
   $$
   $$
   K = k_e \quad K_A = K_a \cdot \frac{1}{K_e} \quad K_A = K_a = -\log(K_A)
   $$
   A.N. : $pK_A = -\log (10^{-14} - 5,93 \times 10^{-4})$
   On trouve : $pK_A \approx 10,8$.

## Partie II : Dosage de la méthylamine par une solution d'acide chlorhydrique

1. Les noms du montage du dosage.
   - Burette graduée
   - Solution titrante $(H_3O^+(aq) + Cl^-(aq))$
   - Sonde de pH-mètre
   - Solution titrée : « méthylamine »
   - Agitateurs magnétiques
   - Support
   - pH-mètre

2. L'équation de la réaction du dosage :
   $$
   CH_3NH_2(aq) + H_3O^+(aq) \rightleftharpoons CH_3NH_3^+(aq) + H_2O(l)
   $$

3. Les coordonnées du point d'équivalence : 
   $E(V) = 6 \, \text{mL} ; pH_E = 6,4$

4. D'après la relation d'équivalence, on a : 
   $$
   C_B \cdot V_B = C_A \cdot V_E \implies C_B = \frac{C_A \cdot V_E}{V_B}
   $$
   A.N. :
   $C_B = 5 \times 10^{-2} \times 6 \times 10^{-3} \implies 3 \times 10^{-2} \, \text{mol L}^{-1}$

5. Déterminons le volume $V_A$ correspondant à $[CH_3NH_3^+] = 4[CH_3NH_2]$.
   On a : 
   - $pH = K_A + log \left( \frac{[CH_3NH_2]}{[CH_3NH_3^+]} \right)$
   - $[CH_3NH_3^+] = 4[CH_3NH_2]$
   
   Donc : 
   $$
   pH = K_A + log(4) 
   $$
   A.N. : 
   $pH = 10,8 + log(4) = 10,2$
   D'après la courbe de $pH = f(V_A)$, on trouve $V_A = 4 \, \text{mL}$.
```

<!-- Page 143 -->

```markdown
### Calculer la constante d'équilibre de la réaction du dosage.

On a : $ K' = \frac{[CH_3NH_3]^{}_{eq}}{[CH_3NH_2]_{eq}[H_3O^+]_{eq}} $

Donc : $ K' = \frac{1}{K_A} \text{ avec } K_A = 10^{-pK_A} $

Alors : $ K' = \frac{1}{10^{-pK_A}} = 10^{pK_A} $

A.N. : $ K' = 10^{10.2} = 6.31 \times 10^{10} $

Puisque $ K' \gg 10^{10} $, donc la réaction du dosage est totale.
```

<!-- Page 144 -->

```markdown
# Devoir surveillé N°3 – 4
## Niveau: 2BIOF

### Exercice 1
Étude de la réponse d’un dipôle RC à un échelon de tension montant

Pour déterminer la capacité d’un condensateur on réalise le montage de la figure ① qui est formé des éléments suivants:
- Générateur idéal de tension de f.e.m. $E = 10V$
- Conducteur ohmique de résistance $R$
- Condensateur déchargé de capacité $C$
- Interrupteur $K$ et fils de connexion

À l’instant $t = 0$, on ferme l’interrupteur $K$

1. Recopier le circuit de la figure et représenter sur le quel les différentes tensions électriques.
2. Déterminer l’équation différentielle vérifiée par la charge $q(t)$ du condensateur.
3. Trouver les expressions de $A$ et $t$ pour que l’expression
   $$ q(t) = A(1 - e^{-\frac{t}{\tau}}) $$
   soit solution de l’équation différentielle.
4. Déterminer l’expression de l’intensité du courant circulant dans le circuit.
5. Un programme approprié a permis de tracer la courbe de la figure ② qui représente: $\ln(i) = f(t)$.
   - a – Montrer que $\ln(i) = -\frac{1}{\tau}t + \ln(\frac{E}{R})$.
   - b – Déterminer les valeurs des $R$ et $\tau$.
6. Calculer la valeur de la capacité $C$ du condensateur.
7. On définit puissance électrique d’un condensateur par la relation suivante: 
   $$ P_e(t) = \frac{dE_e}{dt} $$
   où $E_e(t)$ est l’énergie électrique stockée dans le condensateur à l’instant $t$.
   - a – Montrer que l'énergie stockée dans le condensateur à l’instant $t$ est: 
   $$ E_e(t) = \frac{1}{2}q(t)^2. $$
   - b – Calculer l’énergie emmagasinée dans le condensateur à l’instant $t = \tau$.

### Exercice 2
Étude de l’annulation du courant dans un dipôle RL série

Pour étudier la réponse d’un dipôle RL à un échelon de tension descendant, on réalise le circuit électrique de la figure ① qui comporte: un générateur idéal de tension de f.e.m. $E = 20V$, un conducteur ohmique de résistance $R = 90Ω$, une bobine d’inductance $L$ et résistance interne $r$, un interrupteur $K$ et une diode idéale $D$.

Lorsque le régime permanent est atteint, on ouvre l’interrupteur $K$ à l’instant $t = 0$.

1. On montre que la bobine en régime permanent se comporte comme une résistance.
2. Montrer que l’équation différentielle vérifiée par
   $$ u_R + L\frac{du_R}{dt} = 0 $$
   en déterminant l’expression de $u_R$ en fonction $L, r$ et $R$.
3. Vérifier que $U = U_e e^{-\frac{t}{\tau}}$ est une solution de l’équation suivante: 
$$ U = \frac{R.E}{R+r} $$
```


<!-- Page 145 -->

```markdown
## Exercice 3 
Étude de la réaction de l’acide ascorbique avec l’eau

L'acide méthanoïque (appelé aussi acide formique) est le plus simple des acides carboxyliques. Sa formule chimique est HCOOH. Sa base conjuguée est l'ion méthanoate (formiate) de formule HCOO⁻. Il s'agit d'un acide faible qui se présente sous forme de liquide incolore à odeur pénétrante. Les fournit sont capables de produire une quantité importante d'acide.

- **I- Étude de la réaction de l’acide méthanoïque et l’ammoniac.**
  - On prépare une solution aqueuse (S) de volume $V = 200 mL$ en introduisant dans de l’eau distillée une quantité de matière $n = 5 \; \text{mmol}$ d’acide méthanoïque HCOOH et la même quantité de l’ammoniac NH₃.
  - Établir l’équation de la réaction acido-basique entre l’acide méthanoïque HCOOH et l’ammoniac NH₃.
  - Dresser le tableau d’avancement associé à cette réaction.
  - Exprimer la constante d’équilibre en fonction de $pK_{A1}$ et $pK_{A2}$, puis calculer sa valeur.
  - Montrer que le taux d’avancement final associé à cette réaction peut s’écrire : $ \tau = \frac{\sqrt{K}}{\sqrt{K+1}} $.
  - Calculer la valeur du $ \tau $ taux d’avancement final, conclure.

- **II- Dosage d’une solution de l’acide méthanoïque**
  - Pour déterminer la concentration $C_A$ d’une solution $(S_A)$ de l’acide méthanoïque, on titre un volume $V_A = 15 mL$ de la solution $(S_A)$ par une solution $(S_B)$ de hydroxide de sodium $(NaOH_{aq} + HO(aq))$ de concentration $C_B = 1,5 \times 10^{-2} \; \text{mol.L}^{-1}$.
  - La courbe de la figure ci-dessous représente l’évolution de $pH$ en fonction du volume du titrant ajouté $V_B$.

La courbe de la figure ci-dessous représente l’évolution de $pH$ en fonction du volume du titrant ajouté $V_B$.
```

<!-- Page 146 -->

```markdown
## Écriture de l'équation de la réaction du dosage.

1. Écrire l’équation de la réaction du dosage.
2. En exploitant la courbe $pH = f(V_B)$, déterminer les coordonnées du point d’équivalence $E$.
3. Déterminer la concentration $C_A$ de la solution $(S_A)$ de l’acide formique.
4. Pour un volume $V_B = 4 \, \text{mL}$ de solution titrante ajoutée, montrer que le pourcentage de l’acide formique dans le mélange s’écrit sous la forme suivante: 
   $$\alpha(HCOOH) = \frac{1}{1 + 10^{pH - pK_A}}$$
   puis calculer sa valeur.
5. Parmi les indicateurs colorés du tableau ci-dessous, déterminer celui qu'il faut ajouter à la solution pour procéder le plus efficacement possible au titrage précédent par une méthode colorimétrique.

   | L’indicateur coloré      | Zone de virage |
   |--------------------------|-----------------|
   | Bleu de bromothymol     | 6 – 7,6        |
   | Phénolphtaléine         | 8,2 – 10       |
   | Rouge de crésol         | 7,2 – 8,8      |

## Correction

### Exercice 1

#### Étude de la réponse d’un dipôle RC à un échelon de tension montant

1. La représentation des tensions électriques

   $$ C $$
   ![Image](URL)
   $$ u_C $$
   $$ u_R $$
   $$ E $$

   sur $ i $

2. Déterminons l'équation différentielle vérifiée par la charge $q(t)$:
   D’après la loi d’additivité, on a $u_C + u_R = E$ avec $u_R = Ri(t)$ et $u_C = \frac{q}{C}$.
   Donc: $$ \frac{1}{C} R \, dq  = \frac{d}{dt} E $$
   Alors: $$ q + RC \frac{dq}{dt} = CE $$

3. Trouvons l’expression de $A$ et de $\tau$ :
   On remplace la solution $q(t) = A(1 - e^{-t/\tau})$ dans l’équation différentielle $q + RC \frac{dq}{dt} = CE$
   on trouve:
   $$ A(1 - e^{-t/\tau}) + RC \cdot A\left( -\frac{1}{\tau} e^{-t/\tau} \right) = CE $$
   $$ \Leftrightarrow  A - Ae^{-t/\tau} + RCA \cdot \frac{1}{\tau} e^{-t/\tau} = CE $$
   $$ \Rightarrow A e^{-t/\tau}\left( -R \cdot \frac{1}{CR} \right) = CE $$

   Cette équation est vérifiée pour tout $t > 0$ si:
   $$ \left\{ -\frac{1}{RC} \, = \, 0 \right. $$
   $$ \Rightarrow \frac{R}{C} = 0 $$
   $$ CE - A = CE $$

a. Déterminons l'expression de $i(t)$:
   On a: 
   $$ i(t) = \frac{dq}{dt} $$
   Donc: $i(t) = \frac{C E}{\tau} avec \, \tau = RC$.
   Alors:
   $$ i(t) = \frac{C E}{R e^{-\frac{t}{\tau}}} $$

b. Montrons que $\ln(i(t)) = -\frac{t}{\tau} + \ln(\frac{E}{R})$.
   On a: $$ i(t) = \frac{E}{R} e^{-\frac{t}{\tau}} $$
   $$ \Leftrightarrow \ln(i(t)) = \ln(\frac{E}{R}) - \frac{t}{\tau} $$

b. Calculons les valeurs de $R$ et de $\tau$:
   On a: $\ln(i) = f(t)$ est affine d'équation $\ln(i) = at + b$.
   Donc: $a = -\frac{1}{\tau}$ et $b = \ln(\frac{E}{R})$.
  
   D'après la courbe, on a: $a = 1, 6$ et $-1,6; 6,4 = 0.5, 5 ms^{-1}$.
   Alors: $\tau = -\frac{1}{a}$.

### Exercice 2

#### Étude de l’annulation du courant dans un dipôle RL série

1. Dans le régime permanent, la bobine se comporte comme un conducteur ohmique de résistance $R$.
   Déterminons l'équation différentielle vérifiée par la tension $u_R$:
   D'après la loi d’additivité des tensions, on a: $u_R + L \frac{du_R}{dt} = u_R$.

   Donc: 
   $$ u_R + R \cdot 1 + L \frac{du_R}{dt} = u_R/R $$
```

<!-- Page 147 -->

```markdown
5. a - D'après la courbe, on a :
   $$ u(t) = u_R(0) = 18 \, V $$  
   b - D'après la courbe, on a : $ \tau = 5 \, ms $  
   c - Calculons la valeur de $ I $ :  
   $$ U = RI $$  
   Donc : $$ I = \frac{U}{R} = \frac{18}{90} = 0.2 \, A $$  
   d - Calculons la valeur de $ r $ :  
   Donc : $$ I = \frac{E}{R + r} $$  
   Alors : $$ r = \frac{20}{0.2} - 90 = 10 \, \Omega $$  
   
   e - Calculons la valeur de $ L $ :  
   On a : $$ \tau = \frac{L}{R+r} $$  
   Donc : $$ L = \tau(R + r) $$  
   A.N. : $$ L = 5 \times 10^{-3} (90 + 10) = 0.5 \, H $$  
   
6. Calculons $ E_m(\tau) $ :  
   On a : $$ E_m(\tau) = \frac{1}{2} Li^2 $$  
   Donc :  
   $$ E_m(\tau) = \frac{1}{2} Li^2(\tau) $$  
   A.N. :  
   $$ E_m(\tau) = \frac{1}{2} \times 0.5 \times (0.37 \times 0.2)^2 $$  
   On trouve :  
   $$ E_m(\tau) = 1.37 \times 10^{-3} \, J $$  

### Exercice 3 Étude de quelques réactions de l’acide méthanoïque

I - Étude de la réaction de l’acide méthanoïque et l’ammoniac  
1. L’équation de l'acide méthanoïque avec l'eau :  
   $$ \text{HCOOH}_{(aq)} + \text{NH}_3_{(aq)} \rightleftharpoons \text{HCOO}^-_{(aq)} + \text{NH}_4^+_{(aq)} $$  
2. Le tableau d’avancement associé à cette réaction :  

| Équation          | $\text{HCOOH}_{(aq)}$ | $\text{NH}_3_{(aq)}$ | $\text{HCOO}^-_{(aq)}$ | $\text{NH}_4^+_{(aq)}$ |
|-------------------|-----------------------|----------------------|-------------------------|-------------------------|
| État              |                       |                      |                         |                         |
| Initial          | 0                     | n2                   | 0                       | 0                       |
| Intermédiaire    | x                     | n - x                | x                       | x                       |
| D'équilibre      | x_eq                  | n - x_eq             | x_eq                    | x_eq                    |

3. Trouver l'expression de la constante d'équilibre en fonction de $ pK_A $ et $ pK_A $ :  
On a :  
$$ K = \frac{[\text{HCOO}^-]_{eq} \, [\text{NH}_4^+]_{eq}}{[\text{HCOOH}]_{eq} \, [\text{NH}_3]_{eq}} $$  
$$ K = K_1 \, K_2 \, où\, K_A = 10^{-pK_A} $$  
$$ K = 10^{pK_A - pK_A} $$  
A.N. : $$ K = 10^{2 - 3.8} = 2.51 \times 10^5 $$  

4. Montrons que :  
$$ K = \frac{\sqrt{K}}{1 + \sqrt{K}} $$  
On a :  
$$ K = \frac{[\text{HCOO}^-]_{eq} \, [\text{NH}_4^+]_{eq}}{[\text{HCOOH}]_{eq} \, [\text{NH}_3]_{eq}} $$  
D'après le tableau d'avancement, on a :  
$$ [\text{HCOOH}]_{eq} = [\text{NH}_3]_{eq} = \frac{n - x}{V} $$  
Alors :  
$$ K = \frac{x \, \frac{x}{V}}{(n - x) \, \frac{(n - x)}{V}} $$  
$$ K = \frac{x^2}{(n - x)^2} $$  
$$ x = x_{max} $$  

5. Calcul du valeur de $ \tau $ :  
A.N. :  
$$ \tau = \frac{\sqrt{2.51 \times 10^5}}{1 + \sqrt{2.51 \times 10^5}} \approx 0.998 \approx 1 $$  
Puisque $ \tau \approx 1 $, cette réaction est totale.  

II - Dosage d’une solution de l’acide méthanoïque  
1. Équation de la réaction du dosage :  
   $$ \text{HCOOH}_{(aq)} + \text{H}_2O_{(l)} \rightleftharpoons \text{HCOO}^-_{(aq)} + \text{H}_3O^+_{(l)} $$  
   D'après la courbe on a :  
   $$ E(V_{BE} = 10 \, ml; \, pH_E = 7.6) $$  
2. Déterminons la concentration $ C_A $ :  
D'après la relation d'équivalence, on a :  
$$ C_A V_A = C_V V_{BE} $$  
Donc :  
$$ C_A = \frac{C_V V_{AE}}{V_{BE}} $$  
A.N. :  
$$ C_A = \frac{1.5 \times 10^{-3}}{10 \times 10^{-3}} = 1 \times 10^{-2} \, mol \, L^{-1} $$  

4. Montrons que :  
$$ \alpha(\text{HCOOH}) = \frac{1}{1 + 10^{-pK_A}} $$  
On a :  
$$ \alpha(\text{HCOOH}) = \frac{[\text{HCOOH}]}{[\text{HCOO}^-] + [\text{HCOOH}]} $$  
Et on a :  
$$ pH - pK_A = \log \frac{[\text{HCOO}^-]}{[\text{HCOOH}]} \, (b) $$  
```

<!-- Page 148 -->

```
On remplace (b) dans (a), on trouve :

$$ 
\frac{1}{\alpha(HCOOH)} = 1 + 10^{pH - pK_A} 
$$

Donc : 
$$ 
\alpha(HCOOH) = \frac{1}{1 + 10^{pH - pK_A}} 
$$

Pour $V_B = 4 \, \text{mL}$, on a $pH = 3,6$.

Alors : 
$$ 
\alpha(HCOOH) = \frac{1}{1 + 10^{3 - 6,38}} = 6,13 \times 10^{-1} = 61,3\% 
$$

On a $7,2 < pH_E = 7,6 < 8,8$, donc l'indicateur coloré convenable est le rouge de Crésol.
```

<!-- Page 149 -->

```markdown
# Devoir surveillé N°3 – 5  
## Niveau: 2BIOF  

### Exercice 1 
Étude de la réponse d’un dipôle RC à un échelon de tension montant  

Les condensateurs sont caractérisés par le fait de stockage de l’énergie électrique pour l’utiliser au besoin. Cette propriété permet d’utiliser les condensateurs dans beaucoup d’appareils notamment dans les appareils photographiques.  
Pour déterminer la capacité d’un condensateur on réalise le montage de la figure 1 qui est formée des éléments suivants:  
- Générateur de tension de f.e.m. $E$ et de résistance $r$  
- Conducteur ohmique de résistance $R$  
- Condensateur déchargé de capacité $C$  
- Interrupteur $K$ et fils de connexion  

À l’instant $t = 0$, on ferme l’interrupteur $K$ et à l’aide d’un système d’acquisition convenable on obtient la courbe de la figure 3 qui représente $u_C = f(t)$ et celle de la figure 2 qui représente $u_R = f(t)$.  

1. Recopier le circuit de la figure et représenter sur le quel les différentes tensions électriques.  
2. Déterminer l’équation différentielle vérifiée par la tension aux bornes $u_C$ du condensateur.  
3. Trouver les expressions de $A$ et $t$ pour que l’expression $u_C(t) = A(1 - e^{-t/\tau})$ soit solution de l’équation différentielle.  
4. Montrer que l’expression de l’intensité du courant circulant dans le circuit est: $i(t) = I_0 e^{-t/\tau}$, en exprimant l’intensité initiale $I_0$ en fonction de $R$, $r$ et $E$.  
5. Déduire l’expression de la tension $u_R$ aux bornes du conducteur ohmique.  
6. En exploitant la courbe de la figure 2 déterminer la valeur de l’intensité initiale $I_0$ et celle de la f.e.m. du générateur.  
7. En exploitant la courbe de la figure 1 déterminer la valeur constante du temps $\tau$ du circuit celle de la résistance $R$ du conducteur ohmique.  
8. Calculer la valeur de la résistance $r$ du générateur et celle de la capacité $C$ du condensateur.  
9. Calculer l’énergie emmagasinée dans le condensateur dans le régime permanent.  

### Exercice 2 
Étude de l’établissement du courant dans un dipôle RL série  

Le bobine est un dipôle électrique constitué d’un enroulement non conductif de fil conducteur de cuivre autour d’un cylindre isolé. Le but de cet exercice est d’étudier l’établissement du courant dans un circuit RL, pour cela on réalise le montage de la figure qui comporte:  
- Générateur idéal de tension de f.e.m. $E$  
- Deux bobines $(B_1)$ et $(B_1)$  
- Interrupteur $K$ et fils de connexion  

À l’instant $t = 0$, on ferme l’interrupteur $K$ et à l’aide d’un système d’acquisition conventionnel on obtient les courbes $(C1)$ et $(C2)$ de la figure 2 (représente $u_1 = f(t)$ et $u_2 = g(t)$) et la courbe $(C3)$ de la figure 3 qui représente les variations de l’intensité du courant traversant le circuit en fonction du temps.  
```

<!-- Page 150 -->

```markdown
1. Montrer que l'équation différentielle que vérifie l'intensité du courant s'écrit sous la forme suivante:
   $$ i(t) + \tau \frac{di(t)}{dt} = I $$ en déterminant les expressions de $I$ et $\tau$ en fonction des paramètres des circuit.

2. Vérifier que l'expression $$ i(t) = I \left( 1 - e^{-t/\tau} \right) $$ soit solution de l'équation différentielle.

3. Expresser la tension $u_{L1}(0)$ aux bornes de la bobine $(B_1)$ en fonction de $L_1, r_1, r_2$ et $\tau$.

4. Expresser la tension $u_{L2}(0)$ aux bornes de la bobine $(B_2)$ en fonction de $L_2, r_1, r_2$ et $\tau$.

5. En exploitant la courbe de la figure 3 déterminer la valeur de l'intensité du courant $I$ et celle de la constante du temps $\tau$.
   - La valeur de la tension $u_{L1}(0)$ aux bornes de la bobine $(B_1)$.
   - La valeur de la tension $u_{L2}(0)$ aux bornes de la bobine $(B_2)$.
   - La valeur de la résistance $r_1$ de la bobine $(B_1)$.
   - La valeur de la résistance $r_2$ de la bobine $(B_2)$.
   - La valeur de la f.e.m. du générateur.
   - Calculer la valeur de l'inductance $L_1$ de la bobine $(B_1)$ et celle de l'inductance $L_2$ de la bobine $(B_2)$.
   - Calculer l'énergie magnétique stockée dans les deux bobines en régime permanent.

### Exercice 3
Étude de quelques réactions de l'acide lactique

L'acide lactique est une acide organique $C_3H_6O_3$ qui joue un rôle dans divers processus biochimiques, le lactate $C_3H_5O_3^-$ est la base conjuguée de cet acide. Ce sujet vise à l'étude d'une solution aqueuse de l'acide lactique ainsi que l'étude du contrôle de la fraîcheur d'un lait.

I. Étude d'une solution aqueuse de l'acide lactique

On prépare une solution aqueuse $(S)$ de l'acide lactique de concentration $C = 1 \text{ mol.L}^{-1}$ et de volume $V = 10 \text{ mL}.$
- La mesure de $pH$ de cette solution à $25^\circ C$ donne la valeur: $pH = 1.9$
- Dresser le tableau d'avancement associé à cette réaction en fonction de $C, V, x$, et $x_{eq}$.
- Calculer le taux d'avancement final de la réaction de l'acide lactique avec l'eau, et déduire.
- Trouver l'expression de la constante d'équilibre associée à cette réaction en fonction de $C$ et $pH$.
- Déduire la valeur de la constante d'acidité $pK_a$ du couple $C_3H_6O_3/C_3H_5O_3^-$.
- Calculer la conductivité $\sigma_{eq}$ de cette solution à $25^\circ C$.

Données: Les conductivités molaires ioniques à $25^\circ C$: $H_3O^+ = \lambda_1 = 34.9 \times 10^{-3} \text{ m}^2 \cdot \text{s}^{-1} \cdot \text{mol}^{-1}$ et $C_3H_6O_3 = \lambda_2 = 3.88 \times 10^{-3} \text{ m}^2 \cdot \text{s}^{-1} \cdot \text{mol}^{-1}$.

II. Évaluer l'acidité d'un lait selon la méthode Dornic

Dans le lait, les bactéries provoquent, au cours du temps, la transformation d'une partie du lactose en acide lactique $C_3H_6O_3$.

L'industrie laitière utilise le degré Dornic pour évaluer l'acidité d'un lait. Un degré Dornic $(1^\circ D)$ correspond à $0.1 \text{ g}$ d'acide lactique par litre de lait.
- Pour évaluer l'acidité d'un lait : le conducteur de l'acide d'un lait selon la méthode Dornic. En tirant un volume $V = 2 \text{ mL}$ de lait par une solution aqueuse $(S_B)$ de hydroxyde de sodium $(Na^+_{(aq)} + OH^-_{(aq)})$.

**ÉLECTRON** & **2BAC-PC** & **Devoirs** 150
```

<!-- Page 151 -->

```markdown
La courbe ci-dessous représente l'évolution de $pH$ du mélange en fonction du volume du titrant ajouté $V_B$.

1. Donner deux caractéristiques de la réaction du dosage.
2. Écrire l’équation de la réaction du dosage de l’acide lactique.
3. En exploitant la courbe $pH = f(V_B)$, déterminer les coordonnées du point d’équivalence $E$.
4. Déterminer la concentration $C_A$ de l'acide lactique dosé.
5. Pour être considéré comme frais, un lait doit avoir une acidité inférieure ou égale à $18°D$ (c’est-à-dire qu’un litre de ce lait contient une masse inférieure ou égale à $1.8 g$ de l’acide lactique). Le lait dosé est-il frais ? Justifier la réponse. Donnée : $M(C_3H_6O_3) = 90 g \cdot mol^{-1}$

Correction

Exercice 1  
Étude de la réponse d’un dipôle RC à un échelon de tension montant

1. La représentation des tensions électriques:
   - $u_R$
   - $u_{C}$
   - $u_{PN}$

   Déterminons l’équation différentielle vérifiée par la tension $u_C$:
   D’après la loi d’additivité des tensions, on a:
   $$ u_C + u_R = u_{PN} $$
   Avec $u_R = R i(t)$ et $i(t) = c^{duc} dt$ et $u_{PN} = E - ri(t)$
   Alors: 
   $$ u_C + r i(t) = E - ri(t) $$

2. Déterminons l'expression de $A$ et $\tau$:
   En remplaçant $u_C(t) = A(1 - e^{-t/\tau})$ dans l'équation différentielle, on trouve:
   $$ u_C + (R + r)C \frac{d u_C}{dt} = E $$
   On trouve:
   $$ A e^{-t/\tau} + (R + r)C A e^{-t/\tau} = E $$
   En isolant $E$, on a:
   $$ E = A \left(1 - e^{-t/\tau}\right) $$

   Cette équation est vérifiée pour $t \ge 0$ si:
   $$ \begin{cases}
   E - A = 0 \\
   E = A \\
   \tau = (R + r)C
   \end{cases} $$
```


<!-- Page 152 -->

```markdown
# ÉLECTRON & 2BAC-PC & Devoirs

## Montons que $i(t) = I_0 e^{-t/\tau}$.
On a : $i(t) = \frac{d u_c}{d t}$ avec $u_c = E(1 - e^{-t/\tau})$  
et $R = (R + r)C$  
Donc : $i(t) = \frac{E}{R + r} e^{-t/\tau}$  
Alors : $i(t) = \frac{E}{(R + r)C} e^{-t/\tau}$  
D'où : $i(t) = \frac{E}{R + r} e^{-t/\tau}$  
On obtient : $u_r = R i(t) = \frac{E}{R + r}$ avec $I_0 = \frac{E}{R + r}$  

## Déterminons la valeur de $I_0$ et celle de $E$ :
D'après la courbe de la figure (☉), on a : $E = 24V$ et $I_0 = 0.48A$  
D'après la courbe de la figure (☉), on a : $\tau = 5ms$ ; $u_{R(0)} = 19.2V$ avec $u(0) = R I_0$  
Donc : $R = \frac{u_{R(0)}}{I_0}$  
A.N.: $R = \frac{19.2}{0.48} = 40 \, \Omega$

8. **Calculons la valeur de $r$ et celle de $C$ :**  
On a : $I_0 = \frac{E}{R + r}$  
Donc : $R + r = \frac{E}{I_0}$  
Alors : $r = \frac{E}{24} - R$  
A.N.: $r = 0.48$  
Et on a : $\tau = (R + r) C$  
Donc : $C = \frac{\tau}{5 \times 10^{-3}}$  
A.N.: $C = 4 \times 10^{-4} \, F$  

6. **Calculons l'énergie emmagasinée dans le condensateur au régime permanent** 
On a : $E_e(t) = \frac{1}{2} C u_c(t)^2$  
En régime permanent : $E_{max} = \frac{1}{2} C E^2$  
A.N.: $E_{max} = \frac{1}{2} \times 24^2$  
On trouve : $E_{max} = 2.88 \times 10^{-2} \, J$  

## Exercice 2
### Étude de la réaction de l'acide ascorbique avec l’eau

1. Montons l'équation différentielle : $i(t) + \frac{d(i)}{dt} = I$  
D'après la loi d'additivité des tensions,  
on a : $u_1 + u_2 = E$ avec $u_1 = L_1 \frac{d i}{dt} + r_1 i(t)$  
et $u_2 = L_2 \frac{d i}{dt} + r_2 i(t)$  
Donc : $L_1 \frac{d i}{dt} + r_1 i + L_2 \frac{d i}{dt} + r_2 i = E$  
$$(L_1 + L_2) \frac{d i}{dt} + (r_1 + r_2) i = E$$  

2. Vérifions que $i(t) = I(1 - e^{-t/\tau})$ est une solution de l'équation différentielle  
On remplace la solution $i(t) = I(1 - e^{-t/\tau})$ dans l'équation différentielle :  
$$\frac{d(i)}{dt} + \frac{d(i)}{dt} = I$$  
on trouve : $I(1 - e^{-t/\tau}) + \tau e^{-t/\tau} = I$  
D'où : $I = I$ et $i(t) = I(1 - e^{-t/\tau})$ est une solution de l'équation différentielle.  

3. Trouvons l'expression de $u_1(0)$ :
On a : $u_1 = L_1 \frac{d(i)}{dt} + r_1 i(t)$  
Donc : $u_1 = L_1 \frac{1}{\tau} e^{-t/\tau} + r_1(1 - e^{-t/\tau})$  
À $t = 0$, on trouve $u_1(0) = L_1 \frac{1}{r_1 + r_2} = L_1(0)$  

4. Par analogie, on trouve $u_2(0)$ :  
D'après la courbe de la figure (☉), on a : $\tau = 2ms et 0 = 0.8A$

7. D'après la courbe de la figure (☉), on a :  
$u_{L_1}(0) = 28V$, $u_2(0) = 8V$ et $E = u_1(0) + u_2(0) = 20V$  
Calculons la valeur de $r_1$ et $r_2$ :  
On a : $u_L = L \frac{d(i)}{dt}$  
En régime permanent, on a : $i = cte$. Donc : $u_L = L \frac{dI}{dt} = 0$  
D'où : $u_{r1} = r_1$ et $u_{r2} = r_2$  
On trouve : $r_1 = \frac{u_{L1}}{I} = \frac{8 \, V}{0.8} = 10 \, \Omega$  
A.N.: $r_1 = 0 \, \Omega$ et $r_2 = \frac{20}{0.8} = 25 \Omega$  

8. Calculons la valeur de $L_1$ et celle de $L_2$.  
Calculons la valeur de $L_1$ :  
On a : $u_{L_1}(0) = \frac{L_1 E}{\tau{(r_1+r_2)}}$  
Donc : $L_1 = \frac{E}{12 \times 10^{-3} \times 25} \, H$  

20. Calculons la valeur de $L_2$.  
On a : $L_2 = \frac{L_2}{\tau(r_1+r_2)}$  
Alors : $L_1 = \frac{E}{20 \times (r_1 + r_2)}$  
A.N.: $L_2 = 2 \times 10^{-2} \, H$  

### 8. Calculons l'énergie emmagasinée stockée dans les deux bobines en régime permanent
On a : $E_m = \frac{1}{2} L_1^2 e(t) = L_1 + L_2$  
Alors : $E_m = \frac{1}{2} \times (2.3 \times 10^{-2} \, H)^2$  
A.N.: $E_{max} = 1.6 \times 10^{-2} \, J$  
```

<!-- Page 153 -->

```markdown
# Exercice 3
## Étude de quelques réactions de l'acide lactique

### I- Étude d’une solution aqueuse de l’acide lactique
1. L'équation de la réaction: 
   $$ C_3H_6O_3(aq) + H_2O(aq) \rightleftharpoons H_3O^+(aq) + C_3H_5O_3^-(aq) $$
   
   Équation bilan:
   $$ C_3H_6O_3(aq) + H_2O(aq) \rightleftharpoons H_3O^+(aq) + C_3H_5O_3^-(aq) $$

   | État       | Avancement | Les quantités de matière en mole (mol) |
   |------------|------------|---------------------------------------|
   | Initial    | CV         | 0                                     |
   | Intermédiaire | x      | CV - x                                |
   | Équilibre  | $x_{eq}$  | CV - $x_{eq}$                        |

2. Calculons le taux d'avancement de cette réaction :
   - On sait que : $ \tau = \frac{x_{eq}}{x_{max}} $
   - Si la réaction est totale, le réactif limitant est l'acide lactique $C_3H_6O_3$
   - Donc : $ C \cdot V - x_{max} = 0 $
   - D'où : $ x_{max} = C \cdot V $
   - D'après le tableau d'avancement :
     - On a : $ x_{eq} = n_{eq}([H_3O^+]) $
     - Donc : $ x_{eq} = [H_3O^+]_{eq} \cdot V $
     - On remplace $x_{eq}$ et $x_{max}$ dans l'expression de $\tau$, on trouve :
     $$ \tau = \frac{[H_3O^+]_{eq} \cdot V}{C \cdot V} $$
     $$ \Rightarrow \tau = \frac{[H_3O^+]_{eq}}{C} $$
   - D'où : $ [H_3O^+] = 10^{-pH} $
   - A.N. : $ \tau = \frac{C}{10^{-pH}} $
   - A.N. : $ \tau = 1 - 10^{-1} = 1,26 \times 10^{-2} $

   Puisque $\tau < 1$, cette réaction est limitée.

3. Trouvons l'expression de $Q_{req}$
   - On a : $ Q_{req} = \frac{[H_3O^+]_{eq} \cdot [C_3H_5O_3^-]_{eq}}{[C_3H_6O_3]_{eq}} $ (a)
   - D'après le tableau d'avancement :
     - On a : $ [C_3H_5O_3^-]_{eq} = [H_3O^+]_{eq} $ (b)
     - Et : $ [C_3H_6O_3]_{eq} = C - [C_3H_5O_3]_{eq} $
     - Donc : $ [C_3H_6O_3]_{eq} = C - [H_3O^+]_{eq} $ (c)
   - On remplace (b) et (c) dans (a), on trouve :
   $$ Q_{req} = \frac{[H_3O^+]^2_{eq}}{C - [H_3O^+]_{eq}} $$
   - Donc : 
   $$ Q_{req} = \frac{C - 10^{-pH}}{10^{-2 pH}} $$
   - A.N. : $ Q_{req} = \frac{C - 10^{-pH}}{10^{-2pH}} $

4. Déduisons la valeur de la constante d'acidité $pK_A$ du couple $C_3H_6O_3/C_3H_5O_3^-$
   - On a : $ K_A = Q_{req} \text{ et } pK_A = -\log(K_A) $
   - A.N. : $ pK_A = -\log(Q_{req}) $

5. Calculons $C_A$ selon la méthode Dornic
   - Le dosage est une réaction : totale et unique
   - L'équation de la réaction du dosage :
   $$ C_3H_6O_3(aq) + HO^-(aq) \rightleftharpoons C_3H_5O_3^-(aq) + H_2O(l) $$
   - D'après la courbe pH = f(V), on a :
   $$ E (V_BE = 46 mL; pH_E = 7,6) $$
   
   - Déterminons la valeur de $C_A$. D'après l'équation d'équivalence, on a :
   $$ C_A V_A = C_B V_BE $$
   - Donc, $ C_A = \frac{C_B V_BE}{V_A} $
   - A.N. : $ C_A = \frac{4 \times 10^{-3} \cdot 46 \times 10^{-3}}{8 \times 10^{-3}} $
   - On trouve : $ C_A = 2,3 \times 10^{-2} \, \text{mol} \cdot \text{L}^{-1} $

6. Vérifions la fraîcheur du lait étudié.
   - Calculons la masse de l'acide lactique dans un litre de lait.
   - On a : $ m = C_A \cdot V $
   - D'où : $ m = C_A \cdot V \cdot M(C_3H_6O_3) $
   - Alors, $ m = C_A \cdot V \cdot M(C_3H_6O_3) $.
   - A.N. : $ m = 2,3 \times 10^{-2} \cdot 90 $
   - On trouve : $ m = 2,07 \, g $
   
   Donc le degré Dornic de ce lait est : $ x = 20,7°D $.
   Puisque $ x > 18°D $, ce lait n'est pas frais.
```

<!-- Page 154 -->

```markdown
# Devoir surveillé N°4 – 1  
**Niveau : 2BIOF**

## Exercice 1 Étude d’un détecteur de métaux

Le détecteur de métaux est un oscillateur électrique constitué essentiellement d’un condensateur de capacité $C$, une bobine d’inductance $L$ et de résistance interne $r$. Ce détecteur permet la détection à distance d’existence ou d’absence d’un métal.  
Le principe de fonctionnement du détecteur de métaux est basé sur la variation de la valeur d'inductance $L$ de la bobine ; sachant que la valeur de $L$ augmente lorsqu'on rapproche le détecteur à un morceau de fer, et diminue lorsqu'on rapproche le détecteur à un morceau d'or.

On modélise le détecteur des métaux par un circuit RLC série (figure 2) constitué par :
- Une bobine de résistance $r$ et d’inductance $L_0 = 20\,\text{mH}$
- Un condensateur de capacité $C$ initialement chargé
- Un générateur de tension $u_G = k i(t)$ ou $K = 10\,\Omega$
- Un interrupteur $K$

On ferme l’interrupteur $K$ à un instant $t = 0$. À l’aide d’un système d’acquisition on étudie la variation de la tension $u_C$ en fonction du temps (la figure 3).

1. Nommer le régime des oscillations observées.  
2. Quel est le rôle du générateur $G$ au point de vue énergétique  
3. Déterminer la valeur de $r$ la résistance de la bobine  
4. Établir l’équation différentielle vérifiée par la tension $u_C$  
Sachant que la solution de l’équation différentielle est :
$$ u_C(t) = U_m \cos \left( \frac{2\pi}{T_0} t + \varphi \right) $$

a - Trouver l’expression de $T_0$ en fonction de $L_0$ et $C$.  
b - Déterminer graphiquement $T_0$, $U_m$ et $\varphi$.  
c - Déduire la valeur de la capacité $C$.  
4. Quel est le type d’énergie emmagasinée dans le circuit à l’instant $t_1 = 90\,\mu s$ et calculer sa valeur.  
5. En absence d’un métal au voisinage du détecteur la fréquence indiquée est la fréquence propre $f_0$ et lorsqu’on rapproche un métal la fréquence propre $f_0$  
a - Déterminer la nature (fer ou or) du métal détecté.  

## Exercice 2 Étude de la modulation et la démodulation d’un signal électrique

Pour étudier la modulation d’amplitude, on applique une tension sinusoïdale 
$$ u_1(t) = P_m \cos(2\pi Ft) $$ à l’entrée $E_1$ du modulateur $(X)$ et une tension 
$$ u_2(t) = s(t) + U_0 $$ à son entrée $E_2$, avec $s(t)$ la composante continue de la tension et $s(t) = s_m \cos(2\pi Ft)$ est la tension modulante. (voir la figure 0)  
La courbe de la figure 1 représente la tension de sortie 
$$ u_s(t) = k.u_1(t).u_2(t) $$ visualisée sur l’écran de l’oscilloscope, avec $k$ est une constante positive préalablement choisie au modulateur $(X)$.

1. Montrer en précisant les expressions de $A_m$ et $m$ que la tension modulée s’écrit sous la forme suivante : 
$$ u_s(t) = A_1 \left[ m + \cos(2\pi Ft) \cos(2\pi Ft) \right] $$  
2. Déterminer l’expression de son amplitude  
a - Déterminer les fréquences $F$ et $f$.  
b - Déterminer la valeur de $m$.  
c - Que peut-on dire à propos de la qualité de modulation ?
```

<!-- Page 155 -->

```markdown
# Pour recevoir l’onde modulée en amplitude, on utilise le dispositif simplifié ci-contre.
a - Identifier le rôle de chaque partie.  
b - Trouver la valeur de la capacité $C_0$ pour que la sélection de l’onde soit bonne. On donne $L = 20mH$  
c - Pour réaliser une détection d’enveloppe de bonne qualité, on utilise un condensateur de capacité $C_1 = 30nF$ et un conducteur ohmique de résistance $R_1$. Parmi les valeurs suivantes déterminer la résistance $R_1$ convenable : $680 \, \Omega ; 160 \, K\Omega ; 9 \, K\Omega ; 7 \, K\Omega$.

## Exercice 3
### Étude de la pile nickel-cadium
On réalise à la température $25°C$ la pile nickel-cadium composée de deux compartiments liés entre eux par un pont salin $ \left( k_{aq} + C_{l_{aq}} \right)$. Le premier compartiment est composé d’une plaque de nickel plongée dans une solution de sulfate de nickel $\left( Ni^{2+}_{(aq)} + SO^{2-}_{4(aq)} \right)$ et le deuxième compartiment est composé d’une plaque de cadmium plongée dans une solution de cadmium $\left( Cd^{2+}_{(aq)} + SO^{2-}_{4(aq)} \right)$.  
- Constante de faraday $F = 96500C/mol$  
- La masse molaire $M(Cd) = 112.4 \, g/mol$  
- Les deux solutions ont le même volume $V = 0.2L$ et même concentration $C = 0.1mol/L$  
- La constante d'équilibre associée à la réaction $Ni^{2+}_{(aq)} + Cd(s) \rightleftharpoons Cd^{2+}_{(aq)} + Ni(s)$ est : $K = 4.5 \times 10^5$  

1. Calculer le quotient de la réaction $Q_{r1}$ à l'état initial et déduire le sens d'évolution spontané du système constituant la pile.  
2. Déterminer en justifiant la réponse, la polarité de la pile.  
3. Nommer les éléments $(1), (2)$ et donner le rôle de l’élément $(2)$.  
4. Donner la représentation conventionnelle de cette pile.  

On laisse la pile fonctionner une durée $\Delta t = 45min$. La pile débite un courant d'intensité $I = 0.1A$.  
a - Calculer la quantité d’électricité fournie par la pile pendant la durée $\Delta t$.  
b - Dresser le tableau d’avancement associé à la réaction spontanée de cette pile.  
c - Calculer la variation de la masse d’électrode de cadmium au bout de la durée $\Delta t$.  
d - Calculer les concentrations des ions $Ni^{2+}$ au bout de la durée $\Delta t$.  

## Correction

## Exercice 1
### Étude d’un détecteur de métaux
1. Le régime des oscillations observées est périodique.  
2. Le générateur $G$ compense l’énergie dissipée par la résistance de la bobine à chaque instant.  
3. Puisque les oscillations sont périodiques, donc le coefficient $K$ est égal à la résistance totale du circuit.  
   Alors : $r = K = 10 \, \Omega$   
4. Déterminons l’équation différentielle vérifiée par la tension $u_c$  
   On a : $u_c + rl(t) + L_0 \frac{d}{dt} (t) = K(t)$  
   Donc : $u_c + rI(t) + L_0 \frac{d}{dt}(t) = 0$ avec $r = K$  
   Donc l’équation devient :  
   $$ 
   u_c + rK + L_0 \frac{d^2u_c}{dt^2} = 0 
   $$  
    a - Trouvons l’expression de $T_0$.  
   On a : $u_c(t) = u_m sin(2\pi \frac{t}{T_0} + \phi)$  
   $\Rightarrow \frac{d^2u_c}{dt^2} = -\frac{4\pi^2}{T_0^2} u_m cos(2\pi \frac{t}{T_0} + \phi)$   
   Donc :  
   $$ 
   T_0 = 2\pi \sqrt{\frac{L_0}{C_0}} 
   $$  
   b - Déterminons graphiquement $T_0, U_{m} et \phi$. D’après le graphe on a : $T_0 = 60 \, s$ et $U_m = 12V$  
   Donc : $u_c(0) = \frac{1}{2}u_m cos(\phi)$  
   Donc : $cos(\phi) = \frac{u_c(0)}{u_m}$  
   A.N. : $cos(\phi) = \frac{12}{12} = 1 \Rightarrow \phi = 0 rad$  
   D’après la question $(3)$ on a :  
   $$ 
   C = \frac{T_0^2}{4\pi^2 L_0}  
   $$  
   A.N. : $C = \frac{60^2 \cdot 10^{-6}}{4\pi^2 \cdot 20 \times 10^{-6}} = 4.56 \times 10^{-9}$  
   À l’instant $t = 90 \, \mu s$ on a : $u_c(t_1) = U_m$  
   Donc :  
   $$ 
   \int_{0}^{t_1} dt \, I_1 = \frac{1}{2} C u_m^2 
   $$  
   Alors l’énergie stockée dans le circuit à cet instant est électrique :  
   $$ 
   E_t(t_1) = \frac{1}{2}CU_m^2 
   $$  
   A.N. : $E_t(t_1) = \frac{1}{2} \cdot 4.56 \times 10^{-9} \cdot 12^2$  
   Donc :  
   $$ 
   E_t(t_1) = \frac{1}{2} \cdot 4.56 \times 10^{-9} \cdot 144 = 3.28 \times 10^{-7} 
   $$  
```

<!-- Page 156 -->

```markdown
### $a$ - Déterminons la valeur de $f_0$

On a : $f_0 = \frac{1}{T_0}$  
A.N. : $f_0 = \frac{1}{60 \times 10^{-6}} = 16,7 \times 10^3 Hz = 16,7 \times 10^3 Hz$

$b$ - On a $f > f_0$, donc $L < \frac{1}{2\pi f C}$ le métal détecté est l'or.  

### Exercice 2
Étude de la modulation et la démodulation d’un signal électrique

1. La tension à la sortie du multiplicateur est :

$$
u_s(t) = K(u_0 + u_2(t)) \times P_m \cos(2\pi Ft)
$$

Donc : $u_s(t) = K P_m [u_0 + S_m \cos(2\pi Ft)] \cos(2\pi Ft)$  
$$
\Rightarrow u_s(t) = K P_m u_0 [1 + \frac{S_m}{u_0} \cos(2\pi Ft)] \cos(2\pi Ft)
$$
$$
\Leftrightarrow u_s(t) = A[1 + m \cos(2\pi Ft)] \cos(2\pi Ft)
$$

Avec $A = K P_m u_0$ et $m = \frac{S_m}{u_0}$

2. Déterminons les fréquences $F$ et $f$.

D'après le graphe on trouve :

$$
T_P = 0.25 ms \quad \text{et} \quad T_s = 5 ms
$$

Avec : $F = \frac{1}{T_P} = \frac{1}{T_s}$  
A.N. : $F = 0.25 \times 10^{-3}$ et $f = \frac{1}{5 \times 10^{-3}}$

On trouve : $F = 4 \times 10^{3} Hz$ et $f = 2 \times 10^{2} Hz$

$b$ - Déterminons le taux de modulation $m$.

On a : $m = \frac{U_{smax} - U_{smin}}{U_{smax} + U_{smin}}$  
A.N. : $m = \frac{10.5 + 1.4}{10.5 + 1.4} = 0.76$

$c$ - La modulation étudiée est de bonne qualité lorsque la fréquence de la porteuse est très supérieure à celle de la modulante ($f \gg f$) et $m < 1$.

### Exercice 3
Étude de la pile nickel-cadmium

1. Calculons la valeur $Q_{r1}$
On a : $Q_{r1} = \frac{[Cd^{2+}]}{|Ni^{2+}|}$  
A.N. : $Q_{r1} = \frac{0.1}{0.1} = 1$  
Et on a : $K = 4.5 \times 10^5$

On constate que $Q_{r1} < K$, donc ce système évolue spontanément dans le sens direct (le sens de oxidation de Cd).

2. Déterminons la polarité de la pile.
- La plaque de Cd représente le pôle négatif de la pile (anode), car est le siège d’une réduction d’équation $Cd(s) \rightarrow Cd^{2+} + 2e^{-}$
- La plaque de Ni représente le pôle positif de la pile (cathode), car est le siège d’une oxydation $Ni^{2+}_{(aq)} + 2e^{-} \rightarrow Ni(s)$

$b$ - Letableau d’avancement associé à la réaction spontanée de cette pile.

| État    | Avancement | Les quantités de matière en mole (mol) | $n(e^{-})$ |
|---------|------------|-----------------------------------------|------------|
| Initial | 0          | $CV$                                   | $n_i(Cd)$  |
| Intermédiaire | $x$      | $CV - x$                               | $n_i(Ni)$  |
| Final   | $x_{max}$  | $CV$                                   | $n_i(Ni) + 2x$ |
```

<!-- Page 157 -->

```markdown
c – D’après le tableau d’avancement,  
on a $\Delta n(Cd) = -x$ et $n(e^-) = 2x$  
Donc, $\frac{\Delta m(Cd)}{M(Cd)} = -x$  
Alors : $\Delta m(Cd) = \frac{M(Cd) \cdot n(e^-)}{2F}$  
Et on sait que : $n(e^-) = \frac{Q}{2F}$  
D’où : $\Delta m(Cd) = -\frac{M(Cd) \cdot Q}{2F}$  
A.N.: $\Delta m(Cd) = \frac{112.4 \times 270}{2 \times 96500} \approx -0,16g$

d – Calculer la concentration de $Ni^{2+}$  
On a : $[Ni^{2+}] = \frac{n(Ni^{2+})}{V}$  
Donc : $[Ni^{2+}] = \frac{C}{V - x}$  
Alors : $[Ni^{2+}] = C - \frac{n(e^-)}{2V}$  
D’où : $[Ni^{2+}] = C - \frac{Q}{2VF}$  
A.N.: $[Ni^{2+}] = 0,1 - \frac{270}{2 \times 0,2 \times 96500}$  
On trouve : $[Ni^{2+}] = 9,3 \times 10^{-2} \text{mol.L}^{-1}$
```

<!-- Page 158 -->

```markdown
# Devoir surveillé N°4 – 2
## Niveau: 2BIOF

## Exercice 1
### Étude des oscillations dans circuit RLC série

Les condensateurs, les bobines et les conducteurs ohmiques sont des composants essentiels dans de nombreux montages électriques et électroniques.  
Cet exercice vise à étudier deux parties:  
- **Partie I**: étude des oscillations libres amorties dans un circuit RLC série.  
- **Partie II**: étude des oscillations forcées dans un circuit RLC série.  

### Partie I: étude des oscillations libres amorties dans un circuit RLC série.
On réalise le montage électrique de la figure 1 qui comporte:
- Un conducteur ohmique de résistance $R$
- Un condensateur chargé de capacité $C = 10\mu F$
- Une bobine d'inductance $L$ et de résistance $r = 10\Omega$
- Interrupteur $K$ et fils de connexion

On ferme l'interrupteur $K$ et à l'aide d’un système informatique on trace la courbe de la figure 2 qui représente les variations de la charge du condensateur en fonction du temps.  
1. Quel est le régime de ces oscillations?  
2. Déterminer la pseudo-période $T$.  
3. On suppose que la résistance du circuit est petite et n'a aucune influence sur les oscillations ($T_0 \approx T$).  
   Calculer la valeur de l'inductance $L$ de la bobine.  
4. Déterminer la valeur de la force electromotrice du générateur.  
5. Déterminer l'équation différentielle vérifiée par la charge $q(t)$.  
6. Calculer l'énergie dissipée par l'effet joule dans le circuit entre les instants $t_1 = 6ms$ et $t_2 = 12ms$.

### Partie II: étude des oscillations forcées dans un circuit RLC série.
On ajoute au montage électrique précédent un générateur de basse fréquence, délivrant une tension électrique alternative sinusoïdale d’expression:  
$$ u(t) = 24V\sqrt{2}\cos(2\pi Nt + \varphi) $$ (la figure 3).  
On fait varier la fréquence de la tension $u(t)$ en gardant son amplitude $U_m$ constante. Les résultats obtenus ont permis de tracer la courbe de la figure 4 qui représente les variations de l’impédance $Z$ du circuit en fonction de la fréquence $N$.  
1. Quel est le résonateur et l’excitateur de ce circuit?  
2. Déterminer l’impédance du circuit à la résonance.  
3. Calculer la résistance du conducteur ohmique.  
4. Calculer la valeur de l’intensité efficace qui traverse le circuit à la résonance.
```

<!-- Page 159 -->

```markdown
# Exercice 2
Étude de la modulation et la démodulation d’un signal électrique

Pour étudier la modulation d’amplitude, applique une tension sinusoïdale 
$$ u_1(t) = P_m \cos(2\pi f t) $$ 
à l’entrée d’un multiplicateur et une tension 
$$ u_2(t) = s(t) + U_0 $$ 
à l’entrée $E_2$, avec $U_0$ est la composante continue de la tension et $s(t) = S_m \cos(2\pi f t)$ est la tension modulante (la figure ⊕).  
La courbe de la figure ⊕ représente la tension de sortie 
$$ u_s(t) = k \cdot u_1(t). u_2(t) $$ 
visualisée sur l'écran de l'oscilloscope $X$ et qui est un contact positif caractérisant le multiplicateur $(X)$.

1. Montrer en précisant les expressions de $A$ et $m$, que la tension modulée peut s'écrire sous la forme suivante:
$$ u_b(t) = A_1 \left( 1 + m \cos(2\pi Ft) \right) $$
2. Trouver l’expression du taux de modulation $m$ en fonction de $U_{smin}$ et $U_{smax}$:
   a. Déterminer les fréquences $F$ et $f$.  
   b. Déterminer le taux de modulation $m$.  
   c. Que peut-on dire sur la qualité de modulation ?  
   d. Expliquer comment vérifier que la modulation est de bonne qualité à l’aide de l’oscilloscope.  

3. Pour recevoir l’onde modulée en amplitude, on utilise le dispositif simplifié de la figure ⊕.
   a. Identifier le rôle de chaque partie.  
   b. Trouver la valeur de la capacité $C_0$ pour que la sélection de l'onde soit bonne. On donne $L = 10 \, \text{mH}$.  
   c. Le détector d’enveloppe est composé d’un condensateur de capacité $C_1$ et d’un conducteur ohmique de résistance $R_1 = 20 \, \text{k}\Omega$. Parmi les valeurs suivantes déterminer la valeur de la capacité $C_1$ convenable pour que la détection d’enveloppe soit de bonne qualité: $30 \, \text{nF}$; $420 \, \text{nF}$; $390 \, \text{nF}$.

# Exercice 4
Étude de la pile cuivre-argent

On réalise à la température $25 \, \degree C$ la pile cuivre-argent composée de deux compartiments liés par un pont salin de nitrate de potassium $(K^+(aq) + NO_3^-(aq))$.

Le premier compartiment est composé d'une plaque de cuivre $Cu$ plongée dans une solution de sulfate de cuivre $(Cu^{2+}(aq) + SO_4^{2-}(aq))$ de volume $V_1 = 25 \, \text{ml}$ et de concentration $C_0$.  
Le deuxième compartiment est composé d'une plaque d'argent $Ag$ plongée dans une solution de nitrate d'argent $(Ag^+(aq) + NO_3^-(aq))$ de volume $V_2 = 25 \, \text{ml}$ et de concentration $C_0$.  

On relie les deux plaques par un circuit électrique contenant un conducteur ohmique, un interrupteur $K$.  

## Données
- La masse molaire de $Ag$ : $M(Ag) = 107 \, \text{g} \, \text{mol}^{-1}$  
- La constante d'équilibre de la réaction suivante: $Cu(s) + 2Ag^+(aq) \rightleftharpoons 2Ag(s) + Cu^{2+}(aq)$ est: $K = 2,1 \times 10^{15}$.  
- La constante de Faraday : $F = 96500 \, \text{C mol}^{-1}$.

1. Déterminer, en justifiant la réponse le sens de l’évolution spontanée de cette réaction.  
2. Déterminer, en justifiant la réponse les réactions qui se produisent aux électrodes de cette pile.  
3. À un instant $t$, fermons l'interrupteur $K$, et la pile débite un courant électrique d’intensité constante $I$.
   - La courbe ci-contre représente les variations de la concentration $[Ag^+(aq)]$ au cours du temps.
   - a. Dresser le tableau d’avancement de la réaction.  
   - b. Trouver l'expression de la concentration $[Ag^+(aq)]$ en fonction de $t$, $I$, $F$ et $V$.  
   - c. Calculer la valeur de l’intensité du courant $I$.  
   - d. Calculer les concentrations des ions $Cu^{2+}(aq)$ à l’instant $t = 0,8 \, \text{h}$.  
   - e. Calculer $\Delta m(Ag)$ la variation de la masse de $Ag$ à l’instant $t = 0,8 \, \text{h}$.
```

<!-- Page 160 -->

```markdown
# Correction

## Exercice 1
### Étude des oscillations dans circuit RLC série

1. **Partie I : étude des oscillations libres amorties dans un circuit RLC série.**
   - Le régime des oscillations observées est pseudo-périodique car l’amplitude d’oscillation décroît avec le temps.
   - D'après le graphe, on trouve: $T = 6 \times 10^{-3}s$.
   - Calculons la valeur de $L$:
     - Donc: $T = T_0$ avec $T_0 = 2\pi\sqrt{LC}$
     - Alors: $T = 2\pi\sqrt{ LC } \Longleftrightarrow T^2 = 4\pi^2 LC$
     - A.N.: $L = \frac{ T^2 }{ 4\pi^2C^2 } = \frac{(6 \times 10^{-3})^2}{4\pi^2 \times 10^{-2} \times 10^{-6}} = 9,11 \times 10^{-2}H$.
   
2. **Déterminons la valeur $E$.**
   - On a: $q(0) = C.u_c(t)$ avec $E$.
   - Alors: $q(0) = C.E$.
   - D’où: $E = \frac{q(0)}{C} = \frac{q(0)}{ 12 \times 10^{-6} } = 12V$.
   
3. **Déterminons l’équation différentielle vérifiée par la charge $q$.**
   - D'après la loi d’additivité des tensions:
     - On a: $u_c + u_L = ri(t) + \frac{d(u(t))}{dt} = \frac{dq(t)}{dt}$.
     - Donc: $q(t) + \frac{dq(t)}{dt} + LC \frac{d^2q(t)}{dt^2} = 0$.
   - Calculons l’énergie dissipée par effet joule entre les instants $t_1$ et $t_2$:
     - On a: $E_T(t) = E_m(t) + E_e(t)$.
   
   - Donc: $E_T(t) = \frac{1}{2}L.i(t)^2 + \frac{1}{2C}q(t)^2$.
   - À l’instant $t_1$:
     - A.N.: $E_T(t_1) = \frac{1}{2} \frac{L}{2 \times 10^{-6}} \times (80 \times 10^{-6})^2$.
     - On trouve: $E_T(t_1) = 3,2 \times 10^{-4}$.
   - À l’instant $t_2$:
     - A.N.: $E_T(t_2) = \frac{1}{2} \frac{L}{2 \times 10^{-6}} \times (72 \times 10^{-6})^2$.
     - On trouve: $E_T(t_2) = 2,59 \times 10^{-4}$.
   - L’énergie dissipée par effet joule entre les instants À l’instant $t_1$ et $t_2$:
     - Est: $E_j = E_T(t_1) - E_T(t_2)$.
     - A.N.: $E_j = 3,2 \times 10^{-4} - 2,59 \times 10^{-4}$.
     - On trouve: $E_j = 6,1 \times 10^{-5}$.

4. **Partie II : étude des oscillations forcées dans un circuit RLC série.**
   - Le résonateur est le dipôle RLC série et l’excitateur est le générateur de basse fréquence.
   - Déterminons l’impédance du circuit à la résonance.
     - D'après la courbe de la figure on a: $Z_0 = 105 \, \Omega$.
   - Calculons la résistance du conducteur ohmique.
     - À la résonance on a: $Z_0 = R + r$.
     - A.N.: $R = Z_0 - r$.
     - Donc: $R = 105 - 10 = 95 \, \Omega$.
   - Calculons la valeur de l’intensité efficace qui traverse le circuit à la résonance.
     - À la résonance on a: $I_0 = \frac{U_0}{Z_0} = \frac{24}{105}$.
     - A.N.: $I_0 = 0,24$.
     - On trouve: $I_0 \approx 0,23A$.

## Exercice 2
### Étude de la modulation et la démodulation d’un signal électrique

1. La tension à la sortie du multiplicateur est:
   - $u_s(t) = Ku_1(t) + u_2(t)$.
   - Donc: $u_s(t) = K(U_0 + s(t)) \times P_m \cos(2\pi Ft)$.
     - $\Longleftrightarrow \, u_s(t) = K P_m U_0 + s_m \cos(2\pi Ft) \cos(2\pi Ft)$.
   - $u_s(t) = A_1 + mcos(2\pi Ft)cos(2\pi Ft)$.
   - Avec $A = KP_m U_0$ et $m = \frac{s_m}{U_0}$.

2. Trouvons l’expression de $m$ en fonction de $U_{min}$ et $U_{max}$.
   - D’après la question précédente, l’amplitude du signal modulé est:
     - $U_{max} - U_{min} + m \, U_{max} = A[1 - m]$.
   - Alors: $U_{max} - U_{min} = 2A$.
     - D’où: $m = \frac{U_{max} - U_{min}}{U_{max} + U_{min}} = \frac{U_{max} - U_{min}}{2A}$.

3. a - Déterminons les fréquences F et $T$.
   - D'après le graphe on trouve: $T_P = 8 \, ms$.

4. Avec: $F = \frac{1}{T_P} = \frac{1}{Ts}$.
   - A.N.: $F = \frac{1}{8 \times 10^{-3}}$ et $F = 125Hz$.
   - b - Déterminons le taux de modulation $m$:
     - On a: $m = \frac{U_{max} - U_{min}}{U_{max} + U_{min}}$.
     - À $m = \frac{U_{max} - U_{min}}{14 - 1} = 0,77$.
   
5. c - La modulation étudiée est de bonne qualité car la fréquence de la porteuse est très supérieure à celle de la modulation ($F \gg f$) et $m < 1$.

6. On fait fonctionner l'oscilloscope en mode XY, puis on visualise la tension modulante $(s(t) + U_0)$ et la tension modulée $(u_s(t))$ respectivement aux voix X et Y, on constate que:
   - L’oscillogramme obtenu a la forme d’un trapèze rouge la modulation est de bonne qualité.
```

<!-- Page 161 -->

```markdown
# a - Identifions le rôle de chaque partie.
- La partie I: réception et sélection du signal modulé.
- La partie II: détection de l'enveloppe.
- La partie III: élimination de la composante continue.

b - La selection du signal modulé est de bonne qualité lorsque la fréquence de la station soit égale à celle de la porteuse $f = F$.
Donc: 
$$ C_0 = \frac{1}{2 \pi f L_0} = \frac{1}{4 \pi^2 f^2 L F} $$
A.N.: $C_0 = \frac{1}{4 \pi^2 \times 10^{-3} \times (1.25 \times 10^3)^2} \Rightarrow C_0 = 1,62 \times 10^{-6} F$

c - La détection d'enveloppe de bonne qualité lorsque: 
$$ T_P \ll R_1, C_1 \leq T_s $$  
$$ T_P R_1 \leq 1 \ $$
$$ 0,8 \times 10^{-3} \leq R_1 \leq 10^{-3} $$
$$ 4 \times 10^{-8} F \leq C_1 \leq 4 \times 10^{-7} F $$
Donc la capacité convenable est: $C = 390nF$.

## Exercice 3
### Étude de la pile cuivre-argent
- Déterminons le sens d’évolution spontanée de ce système:
On a: 
$$ Q_{r1} = \frac{[Cu^{2+}]^2}{[Ag^+]^2} $$
A.N.: $Q_{r1} = 10$ Et on: $K = 2,1 \times 10^{15}$. On constate que $Q_{r1} < K$.

Donc ce système évolue spontanément dans le sens direct (le sens d’oxydation de Cu).
- Déterminons les réactions aux électrodes de cette pile.
  - Au voisinage de la plaque de Cu (anode) s’ produit une réduction d'équation: 
  $$ Cu(s) \rightleftharpoons Cu^{2+}(aq) + 2e^- $$
  - Au voisinage de la plaque de Ag (cathode) se produit une oxydation d'équation: 
  $$ Ag^{+}(aq) + e^- \rightleftharpoons Ag(s) \oplus $$

a - Letabel d’avancement associé à la réaction spontanée de cette pile.
$$
\begin{align*}
\text{Équation} & : Cu(s) + 2Ag^{+}(aq) \rightarrow 2Ag(s) + Cu^{2+}(aq) \\
\text{Avancement} & : \\
\text{Initial} & : n_i(Cu) = C_2V_2 \\
& n_i(Ag) = C_1V_1 \quad 0 \\
\text{Intermédiaire} & : n_i(Cu) - x = C_2V_2 - 2x \\
& n_i(Ag) + x = C_1V_1 + x \\
\text{Final} & : x_{max} \quad n_i(Cu - x_{max} = C_2V_2 - 2x_{max} \\
& n_i(Ag) + 2x_{max} = C_1V_1 + x_{max} \\
\end{align*}
$$

b - Trouvons l’expression de la concentration $[Ag^{+}]$.
D'après le tableau d’avancement on a: 
$$ n(Ag^{+}) = C_2V_2 - 2x $$
Donc: $[Ag^{+}] V_2 = C_2V_2 - 2x$  
Alors: 
$$ [Ag^{+}] = \frac{C_2 - \frac{2x}{V_2}}{2} $$
D’où: $[Ag^{+}] = C_2 - \frac{n(e^-)}{V_2}.$

Et puisque: $Q = n(e^-) = I . \Delta t$  
Avec $t = t - t_0 = 0$

Finalement on trouve: $[Ag^{+}] = C_2 - \frac{n(e^-)}{V_2} . t$.

c - Calculons la valeur de l’intensité du courant I.
La courbe $[Ag^{+}] = f(t)$ est une fonction affine d'équation: 
$$ [Ag^{+}] = a . t + b $$
Et on a: $[Ag^{+}] = C_2 - \frac{n}{V_2}.F.$
Donc: 
$$ a = - \frac{1}{V_2.F} $$  
D’après la courbe, on a: 
$$ a = 0,1 - 0,04 \; \Bigg ( \frac{(0 - 0,8 \times 3600)} \Bigg ) $$  
$$ I = -(-2,08 \times 10^{-5} mol.L^{-1}s^{-1}) $$
D’où: $I = -(-2,08 \times 10^{-5}) \times 25 \times 10^{-3} \times 96500$  
On trouve: $I = 5,02 \times 10^{-2} A$.

d - Calculons les concentrations des ions $Cu^{2+}$ à l’instant $t = 0,8h$.
D’après le tableau d’avancement, on a: 
$$ n(Cu^{2+}) = C_1V_1 + x $$  
Alors:
$$ [Cu^{2+}] = \frac{C_1 + \frac{2x_{1}}{V_{1}}}{2} $$
D’où: 
$$ n(Cu^{2+}) = C_1 + \frac{n(e^{-})}{t} = C_2 $$.
On trouve: $[Cu^{2+}] = 0,1 + \frac{5,02 \times 10^{-2}}{25 \times 10^{-3} \times 3600}$.

e - D’après le tableau d’avancement, on a: 
$$ \Delta n(e^-) = 2x $$
Donc: 
$$ \Delta m(Ag) = \frac{M(Ag)}{M(cd)} $$  
D’où: $m(Ag) = M(Ag) . \frac{I}{F}$
On trouve: $m(Ag) = 107 \; g \times 0,5 \times 10^{-2} \times 0,8 \times 3600.$
```

<!-- Page 162 -->

```markdown
# Devoir surveillé N° 4 – 3
## Niveau: 2BIOF

## Exercice 1
### Études des oscillations libres dans circuit RLC série
On considère l'oscillateur électrique schématisé dans la figure ci-contre et qui comporte :
- Un générateur idéal de tension de f.e.m. $E$
- Deux condensateurs de même capacité $C$
- Bobine d'inductance $L$ et de résistance $R$
- Un conducteur ohmique de résistance $R$
- Un interrupteur de doubles positions

### I-Étude de la réponse d’un dipôle RC à un échelon de tension montant
À un instant $t = 0$ on pose l'interrupteur en $O$ et par un système d’acquisition on obtient la courbe de la figure (A) représentant l’évolution de l’intensité du courant débitée par le générateur en fonction du temps.
1. Monter que l’équation différentielle vérifiée par l’intensité du courant traversant le circuit est : $i(t) + \tau \frac{d(i(t))}{dt} = 0$ en précisant l’expression de $\tau$ en fonction de $R$ et $C$.
2. En exploitant la courbe de la figure (A) déterminer :
   - a – La valeur de la constante du temps du dipôle $RC$
   - b – La valeur de l’intensité du courant initial du générateur
3. Calculer la valeur la résistance $R$ et celle de la capacité $C$.
4. Calculer l’énergie électrique maximale emmagasinée dans les deux condensateurs.

### II-Étude des oscillations libres amorties dans un circuit RLC
Une fois le régime permanent est atteint on bascule l’interrupteur $K$ en position $2$ à un instant $t = 0$, et à l’aide d’un système d’acquisition adéquat on obtient la courbe de la figure (B) qui représente l’évolution de la tension $u_C(t)$ en fonction du temps, celle de la figure (C) qui représente les variations de l’intensité du courant $i(t)$ en fonction du temps.
1. Expliquer le régime d'oscillation obtenu.
2. Déterminer l’équation différentielle vérifiée par la tension $u_C(t)$.
3. En exploitant les courbes (B) et (C) déterminer :
   - a – La valeur de la pseudo-période $T_{et}$ déduire la valeur de l’inductance $L$.
   - b – La valeur nature de l’énergie emmagasinée dans le circuit à l’instant $t_1 = 15 \, \text{mss}$.
   - c – La valeur nature de l’énergie emmagasinée dans le circuit à l’instant $t_2 = 52 \, 5ms$.
4. Déduire la valeur de l’énergie dissipée dans le circuit par effet Joule entre les instants $t_1$ et $t_2$.

ÉLECTRON & 2BAC-PC & Devoirs 162
```

<!-- Page 163 -->

```markdown
## Exercice 2

Étude de la réception et la démodulation d'un signal modulé en amplitude

Pour recevoir un signal modulé en amplitude, on utilise le montage électrique de la figure ①. Un système d’acquisition convenable permet de tracer les tensions $u_1(t), u_2(t), u_3(t)$ et $u_4(t)$ et on obtient les courbes des figures ③, ②, ④.

1. Identifier le rôle de chaque partie.
2. Identifier la courbe associée à chacune des tensions $u_1(t), u_2(t), u_3(t)$ et $u_4(t)$.
3. En exploitant les courbes de la figure :
   a. Déterminer les fréquences $F$ et $f$.
   b. Déterminer le taux de modulation $m$.
   c. Que peut-on dire sur la qualité de modulation ?
4. Trouver la valeur de l’inductance $L_0$ pour que la sélection de l’onde soit bonne. On donne $C_0 = 20 \, \text{nF}$.
5. Le détecteur d'enveloppe est composé d'un condensateur de capacité $C_1 = 65 \, \text{nF}$ et d'un conducteur ohmique de résistance $R_1 = 33 \, k\Omega$. Vérifier que la détection est de bonne qualité.
```

<!-- Page 164 -->

```markdown
# Exercice 3 Étude de quelques réactions acido-basiques

I- Détermination de la constante d'acidité du couple HCOOH/HCOO⁻  
Pour déterminer la constante d'acidité du couple HCOOH/HCOO⁻, on titre un volume $V_B = 20 \, \text{mL}$ une solution ($S_B$) de méthanoate de sodium $(\text{Na}^+(aq) + \text{HCOO}^-(aq))$ par une solution aqueuse de l'acide chlorhydrique $(\text{H}_3\text{O}^+(aq) + \text{Cl}^-(aq)$ de concentration $C_A = 4 \times 10^{-2} \, \text{mol.L}^{-1}$.  
L'équivalence du dosage est atteinte lorsqu'on verse un volume $V_{AE} = 10 \, \text{mL}$ de la solution titrante.  
1. Donner deux caractéristiques de la réaction du dosage.  
2. Écrire l'équation de la réaction du dosage.  
3. Exprimer la concentration $C_B$ en fonction de $V_B$, $C_A$ et $V_{AE}$, puis calculer sa valeur.  
4. Lorsqu’on verse un volume $V_1 = \frac{2}{3} V_{AE}$ de la solution titrante, le pH-mètre indique la valeur: $pH_1 = 3,5$.  
   a. Quelle est le résultat final dans ce cas.  
   b. Dresser le tableau d’avancement associé à la réaction du dosage.  
   c. Montrer que le $pK_A$ du couple HCOOH/HCOO⁻ peut s'écrire sous la forme suivante: $pK_A = pH + \log(2)$.  
   Parmi les indicateurs colorés du tableau ci-dessous, déterminer celui qu'il faut ajouter à la solution pour procéder le plus efficacement possible au titrage précédent par une méthode colorimétrique. Justifier ce choix.

   | L’indicateur coloré  | Phénolphtaléine | Rouge de crésol | Hélianthine |
   |----------------------|------------------|------------------|-------------|
   | Zone de virage       | 8,2 – 10        | 7,2 – 8,8        | 3,1 – 4,4   |

II- Détermination du sens de l’évolution spontanée d’un système chimique  
On prépare un volume $V = 100 \, \text{mL}$ d'une solution aqueuse, en apportant:  
- Une quantité de matière $n_1 = 2 \, \text{mmol}$ de l'acide méthanoïque HCOOH  
- Une quantité de matière $n_2 = 4 \, \text{mmol}$ de méthanoate de sodium $(\text{Na}^+(aq) + \text{HCOO}^-(aq))$  
- Une quantité de matière $n_3 = 3 \, \text{mmol}$ de l’ammoniac $NH_3$  
- Une quantité de matière $n_4 = 1 \, \text{mmol}$ de chlorure d’ammonium $(\text{NH}_4^+(aq) + \text{Cl}^-(aq))$  
La constante d'acidité du couple $\text{NH}_4^+/NH_3$ est $pK' = 9,21$  
1. Écrire l’équation de la réaction acido-basique qui se produit entre l'ammoniac et l'acide méthanoïque.  
2. Exprimer la constante d'équilibre de cette réaction en fonction de $pK'$ et $pK_A$, puis calculer sa valeur.  
3. Calculer le quotient réactionnel initial associé à cette réaction et déduire le sens d’évolution spontanée de ce système.  
4. Dresser le tableau d’avancement associé à cette réaction et déterminer la valeur de son avancement maximal.  
5. Calculer la composition du système à l’état final. 

# Correction

Exercice 1 Étude des oscillations libres dans circuit RLC série  
I- Etude de la réponse d’un dipôle RC à un échelon de tension montant  
Montrons que $i(t) + C \frac{d(i)}{dt} = 0$  
D’après la loi d'additivité des tensions, on a:  
$$ u_C + u_R = E = R i(t) $$  
$$ \frac{d(i)}{dt} = -\frac{u_C}{C} $$  
$$ u_C = C \frac{d(i)}{dt} $$  
$$ i(t) + C \frac{d(i)}{dt} = 0 \, avec \, i(t) = Ceq \frac{du_C}{dt} $$  
$$ i(t) + C \frac{d(i)}{dt} = 0 \, avec \, i(t) = Ceq \frac{dU_C}{dt} $$  
a - D'après la courbe $(A)$, on a: $t = 4 \, \text{ms}$  
b - D'après la courbe $(A)$, on a: $I_0 = 0,12A$  
Calculons la valeur $R \, et \, E$:  
On a: $R = \frac{E}{I_0} = 12 \, \Omega$  
A.N. R = 12 € => 1000Ω  
A.N. R = 0,012 => $2 \, R$ donc: $C = \frac{τ}{2R}$  
$$ C = \frac{4 \times 10^{-3}}{2 \times 100} $$  
Calculons l'énergie maximale emmagasinée dans les condensateurs.  
On a: $E_c = \frac{1}{2} Ceq U_c^2 \Rightarrow E_m \ = \frac{1}{2} Ceq U_{\text{max}}^2$  
Alors $U_{c\max} = E_e \, et \, Ceq = 2C$  
Alors: $$ E_{max} = CE^2 $$  
A.N.: $E_{max} = 2 \times 10^{-5} \times 10^{22} = 2,88 \times 10^{-3} \, J$  
II- Etude des oscillations libres amorties dans un circuit RLC  
L'amplitude des oscillations décroît avec le temps, donc ce régime est pseudopériodique. Ce régime est dû à la dissipation de l'énergie électrique du circuit par la résistance de la bobine.  
Déterminons l'équation différentielle vérifiée par la tension $u_c$.  
D'après la loi d'additivité des tensions, on a: $$ u_C + u_L = 0 \, avec \, u_L = r(i) + L \frac{di}{dt} $$  
Donc: $$ u_c + r(i) + L \frac{d(i)}{dt} = 0 $$  
```

<!-- Page 165 -->

```markdown
# Exercice 2

Étude de la réception et la démodulation d’un signal modulé en amplitude

1. Identification des rôles des trois parties :
   - La partie I : Réception et sélection des ondes électromagnétiques.
   - La partie II : Détection d'enveloppe.
   - Suppression de $U_0$.

   Déterminons la courbe associée à chaque tension :
   - La tension $U_1$ représente modulée, donc la courbe correspondante est la courbe $(\circ)$.
   - La diode supprime les tensions négatives, donc la courbe de la tension $U_2$ entre ses bornes est la courbe $(\circ)$.
   - Le filtre passe-bas élimine le reste de la porteuse, donc la tension $U_3$ entre ses bornes est la courbe $(\circ)$.
   - Le filtre passe-haut élimine le composant $U_0$, donc la courbe de la tension $U_4$ entre ses bornes est la courbe $(\circ)$.

   a – D'après la courbe $(\circ)$, on a : $T_s = 2,5 ms$ et $T_p = 0,125 ms$  
   Puisque : $$ f = \frac{1}{T_s} \quad \text{et} \quad F = \frac{1}{T_p} $$  
   On trouve : $$ f = \frac{2,5 \times 10^{-3}}{1} = 400 \, Hz $$  
   et $$ F = \frac{1}{0,125 \times 10^{-3}} = 8 \times 10^3 \, Hz $$

   b – Calculons la valeur de $m$ :  
   D'après la courbe de la figure $(\circ)$, on a : $U_{max} = 5 \, V$ et $U_{smin} = 1 \, V$  
   On sait que : $$ m = \frac{U_{smax} - U_{smin}}{U_{smax} + U_{smin}} $$  
   A.N : $m = \frac{5 - 1}{5 + 1} = 0,67$

   c – Puisque $m \ll 1 \; \text{et} \; F \gg f$, donc la modulation est de bonne qualité.

   La sélection du signal modulé est de bonne qualité lorsque :  
   $$ f_0 = \frac{1}{2 \pi L_0 C_0} $$  
   On a :  
   $$ L_0 = \frac{1}{(2 \pi f_0)^2 C_0} $$  
   A.N. : $$ L_0 = \frac{(2 \pi \times 8 \times 10^3)^2 \times 20 \times 10^{-9}}{1} $$  
   On trouve : $$ L_0 \approx 1,98 \times 10^{-2} $$

   d – Vérifions que la détection de l'enveloppe est de bonne qualité :  
   On a : $t_1 = R_1 G_1$  
   A.N : $t_1 = 34 \times 10^3 \times 65 \times 10^{-9} = 2,21 \times 10^{-3} \, s$  
   Et on a : $T_s = 2,5 \, ms$ et $T_p = 0,125 \, ms$  
   Donc : $T_p \ll t_1$ alors la détection de l'enveloppe est de bonne qualité.

# Exercice 3

Étude de la réception et la démodulation d’un signal modulé en amplitude

1. Deux caractéristiques de la réaction du dosage : Totale-Rapide
   - L'équation de la réaction du dosage : 
   $$ HCOO^-(aq) + H_3O^+ \rightarrow HCOOH(aq) + H_2O(l) $$
   - À l'équivalent, on a : $C_A V_A = C_B V_B$
   Donc : $$ C_B = \frac{C_A V_B}{C_A V_B} = \frac{4 \times 10^{-2} \times 10^{-3}}{2 \times 10^{-3}} $$  
   A.N.: $C_B = 2 \times 10^{-2} \, mol \cdot L^{-1}$

   a – Puisque $V_A < V_E$, donc le réactif limitant.  
   b – Le tableau d'avancement associé à la réaction du dosage :

   | Équation | Avancement | Les quantités de matière en mole (mol) |
   |----------|------------|----------------------------------------|
   | $HCOO^-(aq)$  | Initial    | 0                                      |
   |          | Avancement  | $C_B V_B - x$                          |
   |          | Final      | $x_{max}$                              |
   |          |            | $C_B V_B - x_{max}$                   |
   |          |            | $C_A V_A - x$                          |
```

<!-- Page 166 -->

```markdown
# I- Détermination de la constante d’acidité du couple HCOOH/HCOO^-

c – Montrons que : $pK_A = pH + \log\left( \frac{[HCOO^-]}{[HCOOH]} \right) (*)$  
On a : $pH_1 = pK_A + \log\left( \frac{[HCOO^-]}{[HCOOH]} \right)$  
Et d'après le tableau d'avancement, on a :  
$$ [HCOO^-] = \frac{C_{V_1}x_{max}}{V_A + V_B} $$  
Et  
$$ [HCOOH] = \frac{C_{V_1}x_{max}}{V_A + V_B} $$  
Donc :  
$$ \frac{[HCOO^-]}{[HCOOH]} = \frac{C_{V_1}x_{max}}{C_{V_1}x_{max}} \times \frac{V_A + V_B}{V_A + V_B} $$  
Alors :  
$$ x_{max} = C_{V_A} $$  
On trouve :  
$$ C_{V_B} = C_{V_A} \frac{[HCOO^-]}{[HCOOH]} = \frac{C_{V_A} - C_{V_A}}{C_{V_A}} $$  
Avec : $C_{V_B} = C_{V_A} = \frac{C_{V_A} - C_{V_A}}{C_{V_A}}$

On remplace l'équation $(**)$ dans l'équation $(*)$,  
on trouve : $pH_1 = pK_A - \log\left( \frac{1}{2} \right)$  
Alors : $pK_A = pH_1 + \log(2)$  
D'on : $pK_A = 3,5 + \log(2) = 3,8$  
À l'équivalence la solution est acide, donc $pH < 7$, donc l'indicateur coloré convenable est l’élaithine.

# II- Détermination du sens de l’évolution spontanée d’un système chimique
## Équation de la réaction entre HCOOH et NH3 est : 
$$ HCOOH_{(aq)} + NH_3_{(aq)} \rightarrow HCOO^-_{(aq)} + NH_4^+_{(aq)} $$

Trouvons l’expression de la constante d’équilibre :  
On a : $K = \frac{[HCOO^-]_{eq}[NH_4^+]_{eq}}{[HCOOH]_{eq}[NH_3]_{eq}}$  
$$ K = \frac{ka/k_A}{10^{-pK_A}}$$  
A.N.: $K = 10^{-3.8} = 2,57 \times 10^{-5}$  

## Calculons la valeur de $Q_{r}$
On a :  
$$ Q_r = \frac{[HCOO^-]_{eq}}{[NH_3]_{eq}} $$  
Avec : $[HCOO^-]_{eq} = \frac{n_2}{V} [HCOOH]_{eq} = \frac{n_1}{V} \cdot \frac{n_3}{V} [NH_3]_{eq} = \frac{n_4}{V}$  
Donc :  
$$ Q_{r} = 1 $$  
Alors : $Q_{r} = \frac{4 \times 1}{2 \times 3} = 0,67$  
Puisque $Q_{r} < K$, le système évolue spontanément dans le sens direct (sens de réaction de $NH_3$).

# Le tableau d'avancement :
| Équation                          | État        | Avancement | Les quantités de matière en mole (mol) |
|-----------------------------------|-------------|------------|-----------------------------------------|
|                                   | Initial     | 0          | $n_1$   $n_3$                           |
|                                   | Intermédiaire| $x$       | $n_1 - x$ $n_3 - x$                    |
|                                   | Final       | $x_{max}$  | $n_1 - x_{max}$ $n_3 - x_{max}$       |
|                                   |             | $n_2 + x$ $n_4 + x$                     |
  
- Si $HCOOH$ est le réactif limitant, alors : $x_{max} = n_1 = 2 \, mmol$  
- Si $NH_3$ est le réactif limitant, alors : $x_{max} = n_3 = 3 \, mmol$  
Puisque $x_{max} ≤ x_{max2}$, donc HCOOH est le réactif limitant : $x_{max} = n_1 = 2 \, mmol$.  
D'après le tableau d'avancement :  
On a : $n_{f}(NH_3) = n_3 - 2 = 1 \, mmol$  
$n_f(HCOOH) = 0$ (réactif limitant).  
Et $n_f(HCOO^-) = n_2 + x_{max}. A.N.: n_f(NH_4^+) = 1 + 2 = 3 \, mmol$  
```


<!-- Page 167 -->

```markdown
# Devoir surveillé N° 4 – 4
## Niveau: 2BIOF

## Exercice 1
### Étude des oscillations libres dans circuit RLC série

Les bobines, les conducteurs ohmiques sont des dipôles qui se trouvent dans la plupart des montages électriques et électroniques.  
Le but de cet exercice est d’étudier l’établissement du courant dans un dipôle RL ainsi que l’étude des oscillations libres non amorties dans un circuit LC série.  
Pour cela on réalise électrique schématique dans la figure ① qui comporte :

- Un générateur idéal de tension de f.e.m. $E$
- Un condensateur de capacité $C = 6,48 \, \mu F$
- Une bobine idéale d’inductance $L$
- Un conducteur ohmique de résistance $R$
- Une diode idéale $(u_p = 0)$
- Un interrupteur de doubles positions

### I-Etude de la réponse d’un dipôle RL à un échelon de tension montant
À un instant $t = 0$ on ferme l’interrupteur et par un système d’acquisition on obtient la courbe de la figure ② représentée l’évolution de l’intensité du courant circulant dans le circuit.

1. Montrer que l’équation différentielle vérifiée par l’intensité du courant traversant le circuit est : 
   $$ i(t) + \frac{1}{\tau} \cdot \frac{di(t)}{dt} = 0 $$
   en précisant les expressions de $\tau$ et de $I$ en fonction de $R, L$ et $E$.
   
2. En exploitant la courbe de la figure ② déterminer :  
   a – La valeur de la constante du temps du dipôle RL  
   b – La valeur de l’intensité du courant traversant le circuit en régime permanent.

3. Calculer la valeur de résistance $R$, celle de l’inductance $L$ de la bobine.  
4. Calculer l’énergie magnétique maximale emmagasinée dans la bobine.

### II-Etude des oscillations libres dans un circuit LC série
Une fois le régime permanent atteint on ouvre l’interrupteur $K$ à un instant $t = 0$, et à l’aide d’un système d’acquisition adéquat on obtient les courbes de la figure ③. 

1. Déterminer l’équation différentielle vérifiée par la tension $u_C(t)$.
2. La solution de l’équation différentielle vérifiée par la tension $u_C(t)$ est : 
   $$ u_C(t) = U \cos\left(\frac{2\pi t}{T_0} + \varphi \right) $$  
   Exprimer $U, T_0$ et $\varphi$ en fonction des paramètres du circuit.
   
3. Montrer que l’énergie électrique du condensateur à un instant $t$ est : 
   $$ E_e(t) = \frac{1}{2} C \left(u_C(t)\right)^2. $$
   
4. En exploitant la courbe énergétique :
   a – Attribuer à chaque courbe l’énergie correspondante.  
   b – Déterminer la valeur de l’énergie totale du circuit.

5. Calculer la valeur de la tension $U$ et déduire la valeur de $T_0$ la période propre des oscillations.
```

<!-- Page 168 -->

```markdown
# Exercice 2
Étude des oscillations forcés dans un circuit RLC

On réalise un dipôle RLC en montant série un condensateur de capacité $C$, une bobine de résistance interne $r$ et d'inductance $L = 0,47 \, \text{mH}$ et un conducteur ohmique de résistance $R$ réglable.

On alimente ce dipôle par un générateur délivrant une tension sinusoïdale $u(t) = 18 V_0 \sqrt{2} \cos(2\pi Nt)$ où $t$ est en $(s)$ et $V_0$ est en $(V)$.

On fixe $L$ et $r$ sur la valeur $R_1 = 40 \, \Omega$ et fait varier la fréquence $N$ du générateur et à chaque fois mesure la tension efficace aux bornes du conducteur ohmique. 

On refait la même manipulation en fixant la valeur de la résistance du conducteur ohmique sur la valeur $R_2$. Les résultats obtenus ont permis de tracer les variations la tension efficace aux bornes du conducteur ohmique en fonction de la fréquence du générateur pour chacune des deux valeurs de la résistance du conducteur ohmique.

1. Déterminer la fréquence propre des oscillations et la tension efficace aux bornes du conducteur ohmique à la résonance.
2. Calculer l’intensité efficace du courant traversant le circuit à la résonance pour la résistance $R_1$.
3. Calculer l'impédance $Z_0$ à la résonance et déduire la valeur de la résistance de la bobine.
4. Calculer la valeur de la capacité du condensateur.
5. Calculer la largeur de la bande passante pour chaque valeur de la résistance.
6. Calculer la valeur du facteur de qualité pour chaque valeur de la résistance.
7. On admet que le facteur de qualité est inversement proportionnel à la résistance du circuit. Montrer que:
   $$ Q_1(R_1 + r) = Q_2(R_2 + r). $$
   8. Calculer la valeur de $R_2$.

# Exercice 3
Identification d’une solution d’un acide carboxylique

Pour déterminer la formule chimique et la concentration molaire d’un acide $HA$ on dose un volume $V_A = 10 \, \text{mL}$ de cette solution par une solution aqueuse d’hydroxyde de sodium $(\text{Na}^+_{(aq)} + \text{HO}^-_{(aq)})$ de concentration $C_B = 2 \times 10^{-2} \, \text{mol.L}^{-1}$.

1. Écrire l’équation de la réaction du dosage.
2. L’équidistance de ce dosage est atteinte après avoir ajouté un volume $V_E = 15 \, \text{mL}$ de la solution titrante. Exprimer la concentration $C_A$ en fonction de $V_A$, $C_B$ et $V_E$, puis calculer sa valeur.
3. On suit le $pH$ en fonction du volume de la solution titrante ajoutée. Les mesures obtenues ont permis de tracer la courbe à la figure ci-contre qui représente les variations du $pH$ du mélange en fonction de:
   $$ \log\left(\frac{V_B}{V_E - V_B}\right). $$
   a - Pour un volume versé $V_B < V_E$ de la solution titrante, dresser le tableau d'avancement associé à la réaction.
   b - Pour un volume versé $V_B > V_E$ de la solution titrante, montrer que le $pH$ du mélange peut s'écrire sous la forme:
   $$ pH = pK_A + \log\left(\frac{V_E - V_B}{V_B}\right), \quad pK_A \text{ est la constante d'acidité du couple } HA/A^-. $$
   c - En exploitant la courbe à la figure ci-contre déterminer la valeur de $pK_A$ du couple $HA/A^-$.
```

<!-- Page 169 -->

```markdown
### d 
- En se basant sur le tableau ci-dessous déterminer la formule chimique de l’acide HA

| Couple $HA^-/A^-$ | HCOOH/HCOO⁻ | CH₃OH/CH₃COO⁻ | NH₄⁺/NH₃ |
|-------------------|--------------|-----------------|----------|
| Valeur de $pK_A$  | 3,8          | 4,8             | 9,2      |

- Parmi les indicateurs colorés du tableau ci-dessous, déterminer celui qu’il faut ajouter à la solution pour procéder le plus efficacement possible au titrage précédent par une méthode colorimétrique. Justifier ce choix.

| L’indicateur coloré | Vert de bromocrésol | Rouge de crésol | Hélinthine |
|---------------------|---------------------|-----------------|-------------|
| Zone de virage      | 3,8 – 5,4           | 7,2 – 8,8       | 3,1 – 4,4   |

---

## Correction

### Exercice 1 
Étude des oscillations libres dans circuit RLC série

1. Montrons que :

$$ i(t) + \frac{d(i)}{dt} = I $$

D'après la loi d'additivité des tensions, on a :

$$ u_R + u_L = E $$

avec $u_R = Ri(t)$ et $u_L = L \frac{di}{dt}$

Donc, l'équation devient :

$$ Ri(t) + L \frac{di}{dt} = E $$

Alors :

$$ i(t) \left( R + L \frac{d}{dt} \right) = \frac{E}{R} $$

D'où :

$$ i(t) = \frac{dU_c}{dt} = \frac{1}{LC} $$

2. $a$ - D'après la courbe, on a : $ \tau = 5ms $

$b$ - D'après la courbe, on a : $ I = 0,2A $

Calculons la valeur de $R$ et celle de $L$.

On a : 

$$ I = \frac{E}{R} $$

Donc : 

$$ R = \frac{E}{I} $$

A.N. : $R = \frac{1}{10} \Omega = 50 \Omega$

Et on a : $ \tau = \frac{L}{R} $

Donc : $ L = R \tau $

A.N. : $L = 5 \times 10^{-3} \times 50 = 0,25H$

3. Calculons $E_{max}$

On a : 

$$ E_{max} = \frac{1}{2} L I^2 $$

A.N.: 

$$ E_{max} = \frac{1}{2} \times 0,25 \times (0,2)^2 = 5 \times 10^{-3} $$

---

## II - Etude des oscillations libres dans un circuit LC série

1. Déterminons l’équation différentielle vérifiée par la tension $u_c$.

D'après la loi d'additivité des tensions, on a : 

$$ u_c + u_L = 0 $$ 

Donc :

$$ u_c + L \frac{d^2(u_c)}{dt^2} = 0$$

Et puisque : 

$$ \frac{d^2(u_c)}{dt^2} = -\frac{1}{L} $$

Alors : 

$$ \frac{d^2(u_c)}{dt^2} + \omega^2 u_c = 0 $$

---

Ainsi, l'expression de $E_o(t)$ est :

$$ E_e(t) = \frac{1}{2} L (i^2 - i(t)^2) $$

On a : 

$$ E_e(t) = \frac{1}{2} Cu^2 $$

avec $u_c = Ucos(\frac{2\pi t}{T_0} + \phi)$

Donc :

$$ E_e = \frac{1}{2} L (u_c(\frac{2\pi t}{T_0} + \phi))^2 $$

Avec $cos^2(x) = 1 - sin^2(x)$

Donc : 

$$ E_e = \frac{1}{2} CU^2 (1 - sin^2(\frac{2\pi t}{T_0} + \phi)) $$

Avec : 

$$ E_e = \frac{1}{2} L [i^2 - i(t)^2] $$

```


<!-- Page 170 -->

```markdown
# a – On a: $E_e(t) = \frac{1}{2} (I^2 - i(t)^2)$
Donc lorsque $i(t) = 0$, on trouve: $E_e(t) = E_{emax} = \frac{L I^2}{2}$  
Alors la courbe (A) est celle qui représente les variations de l'énergie électrique $E_e$ et la courbe (B) est celle qui représente les variations de l'énergie magnétique $E_m$.  
b – D'après la courbe, on a: $E_r = 5 \, \text{mJ}$  
Calculons la valeur de $U$ et celle de $T_0$  
On a: $U = \frac{I}{C}$  
A.N.: $U = 0,25 \times \frac{1}{\sqrt{6,48 \times 10^{-6}}} = 39 \, \text{V}$  
Et on a: $T_0 = 2 \pi \sqrt{LC}$  
Donc: $T_0 = 2 \pi (0,25 \times 6,48 \times 10^{-6} = 8 \times 10^{-3} \, \text{s})$

## Exercice 2
### Étude des oscillations forcées dans un circuit RLC
1. Déterminons la valeur de $N_0$ et celle de $U_{R0}$:  
D'après la figure ($\odot$) on trouve: $N_0 = 200 \, \text{Hz}$  
On a: $U_{R10} = 16 \, \text{V}$ et $U_{R20} = 4,8 \, \text{V}$  
2. Calculons l'intensité efficace du courant qui traverse le circuit à la résonance pour la résistance $R_1$  
On a: $I_1 = \frac{U_{R10}}{R_1}$  
$A.N.: I_1 = \frac{16}{40} = 0,4 \, \text{A}$  
3. Calculons la valeur de $Z_0$:  
On a: $Z_0 = 1 \, \text{avec} \, U = \frac{U_m}{\sqrt{2}} = 18 \, \text{V}$  
On a: $Z_0 = 45 \, \Omega$  
Et on a: $Z_1 = R_1 + r$  
A.N.: $r = 45 - 40 = 5 \, \Omega$  
4. Calculons la capacité du condensateur :  
Donc : $N_0 = \frac{1}{2 \pi \sqrt{LC}}$  
Donc : $C = \frac{1}{(2 \pi N_0)^2 L}$  
A.N.: $C \approx (2 \pi \times 100 \times 0,47)^{-2} \approx 5,4 \times 10^{-6} \, \text{F}$  
- Pour la résistance $R_1$  
On a: $U_{R10} = \frac{16}{\sqrt{2}} = 11,3 \, \text{V}$  
D'après la courbe ($C_1$), on trouve: $\Delta f_1 \approx 15 \, \text{Hz}$  

### Exercice 2
### Identification d’une solution d’un acide carboxylique
1. L'équation de la réaction du dosage : $HA_{(aq)} + HO^- \rightarrow A^-(aq) + H_2O_{(l)}$  
2. À l'équivalence, on a: $C_A V_A = C_B V_E$  
Donc : $C_A = \frac{C_B V_E}{V_A}$  
A.N.: $C_A = \frac{C_B \times 12 \times 10^{-3}}{15 \times 10^{-3}} = 3 \times 10^{-2} \, \text{mol} \cdot L^{-1}$  
a – Le tableau d'avancement associé à la réaction du dosage

| Équation                     | $HA_{(aq)}$ | $HO^-$ | $A^-(aq)$ | $H_2O_{(l)}$ |
|------------------------------|--------------|--------|-----------|--------------|
| État                         | Avancement  | 0      | $C_A V_A$ | $C_B V_B$    | 0            |
| Initial                      | 0            | $C_A V_A$ | $C_B V_B$ | 0            |  
| Intermédiaire                | $x$          | $C_A V_A - x$ | $C_B V_B + x$ | $x$          |
| Final                        | $x_{max}$    | $C_A V_A - x_{max}$ | $C_B V_B - x_{max}$ | $x_{max}$    |

ÉLECTRON & 2BAC-PC & Devoirs 170
```

<!-- Page 171 -->

```markdown
b – Montrons que : $pH = pK_A + \log \left( \frac{V_B}{V_E - V_B} \right)$

On a : $pH = pK_A + \log \left( \left| \frac{[A^-]}{[HA]} \right| \right)$
Et d'après le tableau d'avancement, on a : $[A^-] = \frac{x_{max}}{V_A + V_B}$ et $[HA] = \frac{C_A V_A - x_{max}}{V_A + V_B}$

Donc : $pH = pK_A + \log \left( \frac{x_{max}}{C_A V_A - x_{max}} \right)$

- Puisque $V_B < V_E$, donc le réactif limitant est $HO^-$, alors : $C_B V_B - x_{max} = 0$
Donc $x_{max} = C_B V_B$

Alors : $pH = pK_A + \log \left( \frac{C_B V_B}{C_A V_A - C_B V_B} \right)$ avec $C_A V_A = C_B V_B$

$\iff$ $pH = pK_A + \log \left( \frac{C_B V_B}{C_B V_B - C_A V_A} \right)$

$\iff$ $pH = pK_A + \log \left( \frac{V_B}{V_E - V_B} \right)$

c – Déterminons la valeur de $pK_A$

On a : $pH = f \left( \log \left( \frac{V_B}{V_E - V_B} \right) \right)$ est affine d'équation $pH = \log \left( \frac{V_B}{V_E - V_B} \right) + b$

Et on a : $pH = pK_A + \log \left( \frac{V_B}{V_E - V_B} \right)$

D'où : $pK_A = b = 4, 8$ et $a = 1$

d – D'après le tableau suivant, la formule chimique de l’acide $HA$ est $CH_3COOH$

À l’équivalence du dosage, le mélange est basique, donc $pH > 7$ donc l’indicateur coloré convenable est le rouge de crésol.
```

<!-- Page 172 -->

```markdown
# Devoir surveillé N°4 – 5
## Niveau: 2BIOF

## Exercice 1
### Étude des oscillations libres dans circuit RLC série
Cet exercice vise à étudier les oscillations amorties dans un circuit RLC série ainsi que l'entretien de ces oscillations pour cela, on réalise le montage électrique de la figure 0. Qui se compose des éléments suivants :
- Un condensateur de capacité $C$ totalement chargé sous une tension $U = 24V$
- Une bobine d’inductance $L$ et de résistance interne $r = 9\Omega$
- Un générateur $G$ délivrant une tension : $u_G(t) = a.i(t)$
- Un interrupteur $K$ à deux positions

### I- Étude des oscillations libres amorties dans un circuit RLC
On pose l’interrupteur à la position $1$ à un instant $t = 0$, un système d’acquisition convenable a permis d’obtenir les courbes représentant les énergies $E_e$, $E_m$ et $E_t$ (la figure 2)

1. Identifier les courbes A, B et C.
2. Quel est le régime des oscillations.
3. Déterminer l’énergie initiale stockée dans le condensateur, et déduire la capacité du condensateur.
4. Déterminer la pseudo-période $T$, et déduire la valeur de l’inductance $L$.
5. Quelle est la nature de l’énergie stockée dans le circuit à l’instant $t_1 = 2,5ms$.
6. Calculer la variation de l’énergie totale $\Delta E_T$ entre les instants $t_0 = 0ms$ et $t_1 = 2,5ms$.

### II- Étude des oscillations libres entretenues dans un circuit RLC
On recharge le condensateur, puis on bascule l’interrupteur en position $2$ à un instant $t = 0$

1. Quel est le rôle du générateur $G$ au point de vue énergétique.
2. Déterminer la valeur du coefficient $a$.
3. Établir l’équation différentielle vérifiée par la tension $u_c$.
4. Sachant que la solution de l’équation différentielle est: 
   $$ u_c(t) = U_m \cos\left(\frac{2\pi}{T_0} t\right) $$
   trouver l’expression de $T_0$ en fonction de $C$ et $L$.
5. Montrer que l’énergie totale du circuit se conserve et déterminer sa valeur.

### ÉLECTRON & 2BAC-PC & Devoirs 172
```

<!-- Page 173 -->

```markdown
## Exercice 2 
Étude des oscillations forcées dans un circuit RLC

Pour étudier les oscillations forcées dans un circuit RLC, on réalise le montage de la figure qui comporte:
- Un GBF délivrant une tension sinusoïdale : $u(t) = U_m \cos(2 \pi Nt + \phi)$
- Un conducteur ohmique de résistance $R = 30 \, \Omega$
- Un condensateur de capacité $C = 14 \, \mu F$
- Une bobine d'inductance $L$ et de résistance $r$
- Interrupteur $K$ et fils de connexion

On fixe la fréquence du GBF sur une valeur $N$ et on ferme l'interrupteur $K$. À l'aide d'un oscilloscope, on visualise la tension $u(t)$ aux bornes du générateur et la tension $u_R(t)$ aux bornes du conducteur ohmique (les courbes de la figure).

1. Récopier le schéma de la figure et représenter sur celui-ci le montage en branchant les entrées $Y_1$ et $Y_2$ de l'oscilloscope aux tensions $u(t)$ et $u_R(t)$.
2. Déterminer la fréquence des oscillations.
3. Déterminer l’amplitude de l’intensité du courant traversant le dipôle RLC et déduire sa valeur efficace.
4. Déterminer la valeur de l'amplitude de la tension aux bornes du GBF et déduire sa valeur efficace.
5. Calculer le déphasage $ \varphi_{u,I} $.
6. Calculer la valeur de l'impédance du circuit.
7. Lorsqu’on fixe la fréquence du générateur sur une valeur $N' = 52 \, Hz$, on trouve $Q_{uI}' = 0$ et $Z' \approx 33 \, \Omega$  
   a. Que représente cette fréquence ?  
   b. Calculer la valeur de la résistance $r$ de la bobine et celle de l’inductance $L$.  
   c. Calculer la largeur de la bande désidible et déduire la valeur du facteur de qualité.

## Exercice 3 
Étude de la pile cuivre-aluminium

On considère la pile aluminium-zinc qui est constituée par deux compartiments:
- Le premier compartiment comporte une lame d’aluminium immergée dans une solution de chlorure d’aluminium $(Al^{3+} + 3Cl_{aq}^-) $ de concentration $C$ et de volume $V$.
- Le deuxième compartiment comporte une lame de cuivre immergée dans une solution de sulfate de cuivre $(Cu^{2+}_{aq} + SO_4^{2-}_{aq})$ de concentration $C$ et de volume $V$.

On relie les deux compartiments par un pont ionique contenant une solution chlorure de potassium et les deux lames par une partie d’un circuit électrique comportant un conducteur ohmique et un voltmètre qui indique une valeur positive (la figure).

La courbe de la figure représente les variations de la quantité d’électricité fournie par cette pile en fonction du temps.

1. Indiquer sur le schéma ci-contre le sens du courant électrique.
2. Donner le schéma détaillé de cette pile.
3. Écrire l’équation d’électrode qui se produit près de chaque électrode, et déduire l’équation de la pile.
4. En exploitant la courbe de la figure, déterminer la durée de vie de cette pile, l’intensité du courant fournie par cette pile et la capacité de cette pile.
5. Dresser le tableau d’évolution de la réaction qui se produit lors du fonctionnement de la pile.
6. Exprimer la concentration $C$ en fonction de $F$, $V$ et $Q_{max}$, puis calculer sa valeur (la quantité de matière dans les lames en son état).
7. Calculer la variation de la masse de la lame d’aluminium lors du fonctionnement de cette pile.  
   - La masse molaire de l’aluminium: $M(Al) = 27 \, g.mol^{-1}$  
   - La constante de faraday: $F = 9,65 \times 10^4 \, C.mol^{-1}$  
   - Données : $V = 100 \, ml$
```

<!-- Page 174 -->

```markdown
# Correction

## Exercice 1
### Étude des oscillations libres dans circuit RLC série

I- Etude des oscillations libres amorties dans un circuit RLC
1. Identification des courbes A, B et C
   Le condensateur est initialement chargé  
   Donc $E_0(0) = \frac{1}{2}C u^2$ et $E_m(0) = 0$  
   À t = 0, $i(0) = 0$, donc $E_m(0) = 0$

   Alors la courbe (A) représente les variations de l’énergie $E$ et la courbe (B) représente les variations de l’énergie $E_m$ et la courbe (C) représente les variations de l’énergie totale $E_T$ du circuit.  
   L'énergie d'oscillation est pseudopériodique.  
   D'après la figure (🡭): $E_e(0) = 0,72 mJ$  
   Et on a: $E(0) = \frac{1}{2}C u^2(0)$ avec $u_c(0) = u$

   Alors: $E_e(0) = \frac{1}{2} u^2$  
   Donc $C = \frac{2E_e(0)}{u^2} = \frac{2 \cdot 0,72 \times 10^{-3}}{2^2}$  
   A.N.: $C = 2,5 \times 10^{-6} F$  

   D'après la figure (🡭), on a: $T = 2 ms$  
   On a: $T_0 = T$  
   Donc $2\pi\sqrt{LC} = T$  
   Alors $L = \frac{T^2}{4\pi^2C} = \frac{(2 \times 10^{-3})^2}{(2\pi)^2 \cdot 4 \times 2,5 \times 10^{-6}} = 4,05 \times 10^{-2} H$  
   À l’instant $t_1 = 2,5 ms$, on a : $E_1 = 0$  
   Donc l'énergie stockée dans le circuit à cet instant est magnétique.  

2. Calculons $\Delta E_T$ entre les instants $t_0$ et $t_1$  
   On a $\Delta E_T = E_T(t_1) - E_T(t_0)$  
   Donc: $\Delta E_T = E_1 + E_m - E_0 - E_m0$  
   Et d'après les courbes de la figure (🡭), on a : $E_0 = 0,72 mJ$, $E_m0 = 0$, $E_1 = 0$  
   Donc $\Delta E_T = 0,42 - 0,72 = -0,3 mJ$  

II- Etude des oscillations libres entretenues dans un circuit RLC  
1. Le générateur G compose l'énergie dissipée par effet Joule dans la résistance de la bobine à chaque instant.

### Exercice 2
### Étude des oscillations forcées dans un circuit RLC
1. La représentation des entrées de l'oscilloscope est dans la figure suivante
   ![Figure non incluse]

   (L_r, C et R)  
   Soit $u(t)$  
   Soit $u_c(t)$ 

2. D'après la figure (🡭), on a : $T = 10 ms$  
   Et puisque : $N = \frac{1}{T}$  
   Donc : $N = \frac{1}{10 \times 10^{-3}} = 100 Hz$  

3. Calculons les valeurs de $I_m$ et celle de $I$ :  
   Donc : $U_m = I_m \cdot R$.  
   Donc : $I_m = \frac{U_m}{R} = \frac{6 V}{30 \Omega} = 0,2 A$  
   A.N.: $I = \frac{0,2}{\sqrt{2}} \approx 0,14 A$  

ÉLECTRON & 2BAC-PC & Devoirs 174
```

<!-- Page 175 -->

```markdown
### Déterminons les valeurs de $U_{m}$ et celle de $U$ :
D'après la figure (1), on a : $U_{m} = 8 \, V$
Et : $U = \frac{U_{m}}{\sqrt{2}} = 5,66 \, V$

Calculeons $\phi_{u}/i$ :
D'après la figure (2), on a : $T = 2 \, ms$
Et on a : $\frac{\phi_{u}}{i} = \frac{2\pi}{T} = \frac{2\pi}{2 \times 10^{-3}} = 1000 \, rad$
A.N. : $|\phi_{u}/i| = 0,63 \, rad$

Et d'après la figure (1), on constate que $u_{r}(t)$ est en avance de phase par rapport à $u(t)$,
donc : $\phi_{u}/i = -0,63 \, rad$

Calculeons la valeur de l'impédance du circuit :
On a : $Z = \frac{U}{I}$. A.N. : $Z = \frac{5,66}{0,14} \approx 40,43 \, \Omega$

### Exercice 3
#### Étude de la pile cuiv- aluminium
1. Puisque le voltmètre indique une valeur positive et son pole négatif (COM) est lié à la plaque d'aluminium, alors cette plaque constitue l'électrode négatif de la pile (anode).
   Par conséquence le courant circule à l'extérieur de la pile de sa cathode (plaque de) vers son anode (plaque d'aluminium). Voir la représentation dans le schéma ci-contre.
   
2. Le schéma conventionnel de cette pile : 
   $$ \text{Al}_{(s)} / \text{Al}^{3+}_{(aq)} \cdots \text{Cu}^{2+}_{(aq)}/ \text{Cu}_{(s)} $$

   Équation de la réaction :
   - La cathode est la lame de cuivre, au voisinage de laquelle se produit la réduction : $ \text{Cu}^{2+}_{(aq)} + 2e^{-} \rightarrow \text{Cu}_{(s)} $
   - L'anode est la lame d'aluminium, au voisinage de laquelle se produit l'oxydation : $ \text{Al}_{(s)} \rightarrow \text{Al}^{3+}_{(aq)} + 3e^{-} $

3. D'après la courbe de la figure (2), on a : $\Delta t_{max} = 250 \, h, Q_{tot} = 9 \, k\Omega$ et $I = \frac{(9-0) \times 10^{3}}{(250-0) \times 3600} = 0,01 \, A$

4. Le tableau d'avancement :
   $$ 3 \text{Cu}^{2+}_{(aq)} + 2 \text{Al}(s) \rightarrow 3 \text{Cu}_{(s)} + 2 \text{Al}^{3+}_{(aq)} $$

   | État       | Avancement | Les quantités de matière en mole (mol) | $n(e^{-})$ |
   |------------|------------|---------------------------------------|-------------|
   | Initial    | $0$        | $CV$                                  | $0$         |
   | Intermédiaire | $x$    | $CV - 3x$                            | $n_{0}(\text{Al}) - 2x$ |
   | Final      | $x_{max}$  | $CV - 3x_{max}$                     | $n_{0}(\text{Cu}) + 3x_{max}$ |

5. Trouver l'expression de la concentration $C$ :
   Le réactif limitant est l'ion de cuivre $\text{Cu}^{2+}$ (la quantité de matière dans les plaques en excès),
   Donc : $CV - 3x_{max} = 0$ 
   Donc : $CV = 3x_{max}$

   D'où : $C = \frac{3x_{max}}{V}$

   Et d'après le tableau on a : $n(e^{-})_{max} = 6 \, x_{max}$
   Alors : $C = \frac{n(e^{-})_{max}}{6 \, V}$ avec $n(e^{-})_{max} = \frac{Q_{max}}{F}$ 

   $$ C = \frac{Q_{max}}{2 \, V \, F} $$
   $$ C = \frac{Q_{max}}{9 \times 10^{3}} $$

A.N. : $C = 2 \times 10^{-6} \, mol \cdot L^{-1}$

6. Selon le tableau, on a : $\Delta n(\text{Al}) = n_{f}(\text{Al}) - n_{0}(\text{Al})$.
   Donc : $\Delta n(\text{Al}) = n_{0}(\text{Al}) - 2x_{max} - n_{0}(\text{Al})$
   \[
   \Delta n(\text{Al}) = -2 \, x_{max}
   \]
   Avec : $x_{max} = \frac{n(e^{-})_{max} \times Q_{max}}{6 \, F}$
   \[
   \Delta m(\text{Al}) = -2 \, x_{max} M(\text{Al}) 
   \]

Avec : $x_{max} = \frac{n(e^{-})_{max} Q_{max}}{6 \, F}$

A.N. : $\Delta m(\text{Al}) = -\frac{27 \times 9 \times 10^{3}}{6 \times 3 \times 6.5 \times 10^{4}} = 0,84 \, g$
```

<!-- Page 176 -->

```markdown
# Devoir surveillé N°4 - 6
## Niveau: 2BIOF

### Exercice 1 
Étude des oscillations libres dans circuit RLC série

Les bobines les condensateurs sont des dipôles électriques capables stockés l’énergie électrique lorsqu’ils sont branchés aux bornes des générateur. Le but de cet exercice et l’étude de la charge d’un condensateur à l’aide d’un générateur de courant ainsi que l’étude de sa décharge dans une bobine supposée idéale. Pour cela, on réalise le montage électrique de la figure (A).

Qui se compose des éléments suivants :
- Un condensateur de capacité $C$
- Une bobine d’inductance $L$.
- Un interrupteur $K$ à deux positions
- Un générateur de courant délivrant une intensité constante $I = 48mA$

#### I- Étude de la charge du condensateur
On pose l’interrupteur à la position $0$ à un instant $t=0$, un système d’acquisition convenable a permis d’obtenir la courbe représentant l’évolution de la tension $u_c$ aux bornes du condensateur en fonction du temps (la figure B).
1. Déterminer l’expression de la tension $u_c$ en fonction temps.
2. Calculer la capacité $C$ du condensateur.
3. Le condensateur utilisé supporte une tension limite $U_{lim} = 40V$
   - a - Déterminer la durée de charge du condensateur
   - b - Trouver l’expression de l’énergie électrique emmagasinée dans le condensateur en fonction du temps, et calculer sa valeur maximale.

#### II- Étude des oscillations libres dans un circuit LC
Lorsque la tension aux bornes du condensateur, atteint 35% de sa valeur limite on bascule l’interrupteur en position $2$ à un instant $t = 0$
1. Calculer la valeur de la tension initiale aux bornes de la bobine.
2. Montrer que l’équation différentielle vérifie l’intensité du courant
   $$ i(t) $$ circulant dans le circuit est: $$ \frac{d^2i(t)}{dt^2} + \beta u_c = 0 $$ en exprimant $\beta$ en fonction de $L$ et $C$.
3. La solution de cette équation différentielle est :
   $$ i(t) = I_m \cos\left(\frac{2\pi}{T_0}t + \phi\right) $$ . En exploitant les conditions initiales calculer la valeur de $\phi$ et déterminer l’expression de $I_m$ en fonction de $T_0$, $L$ et $U_{lim}$.
4. La courbe de la figure (C) représente l’évolution de l’énergie magnétique emmagasinée dans la bobine en fonction de l’intensité du courant qui la traverse. En exploitant ce courbe :
   - a - Déterminer l'énergie totale de ce circuit.
   - b - Déterminer la valeur de l’intensité maximale $I_m$ et déduire la valeur de l’inductance $L$ de la bobine.

### Exercice 2
Étude de la modulation d’un signal électrique

Pour étudier l’influence de la composante sur la qualité de la modulation d’amplitude, on applique une tension sinusoïdale $u_1(t) = P_m \cos(2\pi Ft)$ à l’entrée $E_1$ du multiplieur $(X)$ et une tension $u_2(t) = s(t) + U_0$ à son entrée $E_2$, avec $s(t)$ la composante continue de la tension et $s(t) = s_m \cos(2\pi st)$ est la tension modulante. ( voir la figure 0)
L’expression de la tension $u$ à la sortie du multiplieur est : $u_s(t) = k u_1(t) u_2(t)$
On fixe la composante continue au niveau $U_01 = 6V$ et on visualise les variations de la tension $u_{s1}(t)$ à la sortie du multiplieur et on
On répète la même manipulation en fixant la composante continue sur la valeur $U_{02} = 2V$. La courbe de la figure $3$ représente les variations de la tension $u_{s2}(t)$ à la sortie du multiplieur.
```

<!-- Page 177 -->

```markdown
### 1
- Montrer en précise les expressions de $A$ et $m$, que la tension modulée $u_s(t)$ s'écrit sous la forme 
  $$u_s(t) = A[1 + m \cos(2\pi F t)] \cos(2\pi Ft)$$
- Trouver l'expression du taux de modulation $m$ en fonction de $U_{smin}$ et $U_{smax}$.
- En exploitant la courbe de la figure 2:
  - a - Déterminer les fréquences $F$ et $f$.
  - b - Déterminer le taux de modulation $m_1$ et déduire la valeur de $s_m$.
- En exploitant la courbe de la figure 3, calculer le taux de modulation $m_2$.
- Que peut-on dire à-propos de la qualité de modulation.

### Exercice 3
#### L'acidité du jus de citron
L'acidité du citron est principalement due à sa teneur en acide citrique, un composant qui lui confère son goût acide caractéristique. L'acide citrique est un acide organique naturellement présent dans de nombreuses plantes, y compris les agrumes comme le citron. L'objectif de cet exercice est de connaître la formule chimique de l'acide citrique, ainsi que de déterminer le pourcentage massique de l'acide citrique dans un jus de citron pur.

On verse dans ce becher un volume de $200 \, ml$, un volume $V_0 = 10 \, ml$ de jus de citron pur et on y ajoute de l'eau distillée jusqu’au trait de jauge et on obtient une solution aqueuse $(S_1)$ dans le jus de citron dont la concentration de l'acide citrique est $C_1$.

On titre un volume $V_1 = 8 \, ml$ de la solution $(S_1)$ par une solution aqueuse $(S_2)$ de hydroxide de sodium $(NaOH_{(aq)})$ de concentration $C_2 = 2 \times 10^{-3} \, mol.L^{-1}$.

La courbe ci-dessous représente l’évolution de $pH$ en fonction du volume du titrant ajouté $V_2$.
```

<!-- Page 178 -->

```markdown
## Données :
- La masse molaire de l’acide citrique : $M(HA) = 192 \, \text{g} \cdot \text{mol}^{-1}$
- Le produit ionique de l’eau : $K_e = 10^{-14}$
- La masse volumique du jus de citron : $\rho = 1 \, \text{g} \cdot \text{mL}^{-1}$

1. Écrire l’équation de réaction de dosage. (On désigne l'acide citrique par $HA$ et sa base conjuguée par $A^{-}$)
2. Déterminer les coordonnées du point d’équivalence.
3. Calculer la concentration $C_1$ de la solution aqueuse $(S_1)$.
4. Calculer la concentration $C_0$ de l’acide citrique dans le jus de citron étudié.
5. Le pourcentage massique de l’acide citrique dans le jus est le rapport de la masse de l’acide citrique présente dans la solution deviser par la masse de cette solution. Calculer le pourcentage massique de l’acide citrique dans le jus étudié.

Pour un volume versé $V_2 = 37.5 \, \text{mL}$ d’hydroxyde de sodium,
- a – Déterminer le réactif limitant.
- b – Dresser le tableau d’avancement associé à la réaction du dosage.
- c – Montrer que le $pH$ du milieu réactionnel peut s'écrire sous la forme suivante : $pH = pK_A + \log\left(\frac{V_{R}}{V_{E} - V_{R}}\right)$.
- d – Dédier la valeur $pK_A$ du couple $HA^{-}$.
- e – En expliquant le tableau ci-dessous déterminer la formule chimique de l’acide citrique.

| Couple           | $HA/A^{-}$         | $HCOOH/HCOO^{-}$ | $C_6H_8O_7/C_6H_7O_7^{-}$ | $NH_4^{+}/NH_3$ |
|------------------|-------------------|------------------|---------------------------|------------------|
| Valeur de $pK_A$ | 3.8               | 3.22             | 9.2                       |                  |

## Correction

### Exercice 1
Étude des oscillations libres dans circuit RLC série

I - Étude de la charge du condensateur
- Déterminons l'expression de la tension $u_c$
  - On a : $u_c = f(t)$ est linéaire d’équation $u_c = a \cdot t$
    - avec $a = (5.0-0.10^{-3} = 4 \times 10^3 \, \text{s}^{-1}$
  - Donc : $u_c = 4 \times 10^3 \cdot t$

- Calculons la valeur de la capacité du condensateur
  - On a : $I = c \frac{duc}{dt}$ avec $u_c = 4 \times 10^3 \cdot t$
  - Donc : $I = 4 \times 10^3$

A.N. : $C = \frac{4 \times 10^3}{48 \times 10^{-3}} = 1.2 \times 10^{-5} \, \text{F}$

a – Déterminons la durée de la charge du condensateur
- On a : $u_c = 4 \times 10^3 \cdot t$
- Donc : $U_{lim} = 4 \times 10^3 \cdot t_{lim}$
- Alors : $t_{lim} = \frac{U_{lim}}{4 \times 10^3} = 1 \times 10^{-2} \, \text{s}$

b – Calculons la valeur de $E_{max}$
- On a : $E_e = \frac{1}{2} C u^2$
- Donc : $E_{max} = \frac{1}{2} C u_{lim}^2$
- Alors : $E_{max} = \frac{1}{2} \cdot 1.2 \times 10^{-5} \cdot (40)^{2}$
- On trouve : $E_{max} = 9.6 \times 10^{-3} \, \text{J}$

II - Étude des oscillations libres dans circuit LC
- Calculer la valeur de $u(0)$
D’après la loi d’additivité des tensions
- On a : $u_c + u_c = 0$
- À $t = 0$, on trouve : $u_l(0) + u_c(0) = 0$
- Donc : $u_l(0) = -u_c(0)$ avec $u_c(0) = 0.35 \, U_{lim}$

Alors : $u_l(0) = -0.3 \, U_{lim}$

On trouve : $u_l(0) = -0.3 \times 40 = -14 \, V$

2. Montrons l’équation différentielle :
On a : $L \frac{d^{2} i(t)}{dt} = 0$
- Donc : $L \frac{d^2 i}{dt^2} + u_c = 0$
- L’équation $(a)$ donne $cos(\phi) = 0$

D’où : $\phi = 0$ ou $\phi = -\frac{\pi}{2}$
D’après l’équation $(b)$, on trouve :
$$ \frac{2\pi}{T_0} L I_m sin\left(\frac{2\pi}{T_0} + \phi\right) $$

À $t = 0$, on a $i(0) = 0$ et $u_l(0) = -0.35 U_{lim}$ 
- Donc : $I_m cos(\phi) = 0$

L’équation $(a)$ donne $cos(\phi) = 0$, donc
$$ \phi = \frac{\pi}{2} $$ 

Et puisque $sin\left(\frac{\pi}{2}\right) = -1$
Alors : $\phi = -\frac{\pi}{2}$

Et d’après l’équation $(b)$, on trouve :
$$ \frac{2\pi}{T_0} I_m = 0.35 U_{lim} $$

Donc : $I_m = 0.35 \frac{U_{lim} T_0}{2\pi}$
- a – D’après la courbe, on a : $E_T = 12 \, \text{mJ}$ et $I_m = 0.2 \, A$
```

<!-- Page 179 -->

```markdown
### Exercice 2
Étude de la modulation d’un signal électrique

1. La tension à la sortie du multiplicateur est: 
   $$ u_s(t) = K u_1(t) \times u_2(t) $$
   $$ u_s(t) = K P [U_0 + s(t) \cos(2 \pi Ft)] \cos(2 \pi Ft) $$
   $$ u_s(t) = K P m U_0 \left[ 1 + \frac{s_m}{U_0} \cos(2 \pi Ft) \right] \cos(2 \pi Ft) $$
   avec $A = K P m U_0$ et $m = \frac{s_m}{U_0}$

2. Trouvons l’expression de $m$
   L’expression de l’amplitude de la tension modulée est: 
   $$ U(t) = A [1 + m \cos(2 \pi ft)] \cos(2 \pi Ft) $$
   Donc $u_s(t)$ est maximal si $\cos(2 \pi ft) = 1$ et $u_s(t)$ est minimale si $\cos(2 \pi ft) = -1$

   Alors: 
   $$ U_{s,max} = A(1 + m) \quad \text{et} \quad U_{s,min} = A(1 - m) $$
   $$ U_{s,max} + U_{s,min} = 2A $$
   Et on a: 
   $$ U_{s,max} - U_{s,min} = 2Am \ \text{(a)}$$
   Alors: 
   $$ \text{(b)} \quad m = \frac{U_{s,max} - U_{s,min}}{U_{s,max} + U_{s,min}} $$

   Finalement on trouve: 
   $$ m = \frac{U_{s,max} - U_{s,min}}{U_{s,max} + U_{s,min}} $$

3. a - D'après la courbe (🔄), on a: 
   $$ T_s = 8 \ ms \quad \text{et} \quad T_p = 0,4 \ ms $$
   Et on a: 
   $$ f = \frac{1}{T_s} \quad \text{et} \quad F = \frac{1}{T_p} $$ 
   Donc: 
   $$ f = \frac{1}{8\times10^{-3}} = 125 \ Hz \quad \text{et} \quad F = \frac{1}{0,4 \times 10^{-3}} = 2,5 \times 10^3 \ Hz $$

   b - Calculons la valeur du modulateur $Sm$  
   D'après la courbe de la figure (🔄), on a: 
   $$ U_{s,max} = 10 \ V \quad \text{et} \quad U_{s,min} = 2 \ V $$
   On sait que: 
   $$ m = \frac{U_{s,max} - U_{s,min}}{U_{s,max} + U_{s,min}} \quad \text{A.N.:} \ m_1 = \frac{10 - 2}{10 + 2} = 0,67 $$

   Calculons $Sm$
   On a: 
   $$ Sm = \frac{s_m}{h_1} $$
   Donc: 
   $$ Sm = \frac{10}{6} \quad \text{A.N.:} \ Sm = 0,67 \times 6 = 4 \ V $$

4. Calculons la valeur de $m_2$.
   On a: 
   $$ m_2 = \frac{U_{s,max} - U_{s,min}}{U_{s,max} + U_{s,min}} $$

   Ensuite: 
   $$ m_2 = \frac{6 - (-1,8)}{6 + (-1,8)} = 1,86 $$

5. Étudions la qualité de modulation dans les deux cas.
   - Premier cas $U_{02} = 4 \ V$: Dans ce cas, on a $m_1 < 1$ et $F \gg f$, donc la modulation est de bonne qualité.
   - Deuxième cas $U_{02 = 2 \ V$: On a $m > 1$, donc la modulation est de mauvaise qualité.

### Exercice 3
L'acidité du jus de citron

1. L’équation de la réaction du dosage est: 
   $$ HA_{(aq)} + HO^{-}_{(aq)} \rightarrow A^{-}_{(aq)} + H_2O_{(l)} $$
   Les coordonnées du point d'équivalence sont: 
   $$ V_E = 50 \ mL, pH_E = 7,2 $$

2. Calculons la concentration $C_1$.  
   D'après la relation d'équivalence, on a: 
   $$ C_1 V_1 = C_2 V_E $$ 
   Donc: 
   $$ C_1 = \frac{C_2 V_E}{V_1} $$  
   A.N.: 
   $$ C_1 = 2 \times 10^{-2} \ mol \cdot L^{-1} $$

3. Calculons la concentration $C_0$.  
   D'après la relation de dilution, on a: 
   $$ C_0 V_0 = C_1 V_1 $$  
   Donc: 
   $$ C_0 = \frac{C_1 V_1}{V_0} $$  
   A.N.: 
   $$ C_0 = \frac{1,25 \times 10^{-2} \times 2 \times 200 \times 10^{-3}}{10 \times 10^{-3}} $$
   $C_0 = 0,25 \ mol \cdot L^{-1}$
```

<!-- Page 180 -->

```markdown
# Calculons le pourcentage de l'acide citrique dans le jus de citron.
On a : $X = \frac{m_{Ac}}{m_{j}}$ tel que :
- $m_{Ac} = $ la masse de l'acide citrique dans le jus, avec : $m_{Ac} = C_0 \cdot V_0$, donc : $m_{Ac} = C_0 V_0 M$
- $m_{j}$ est la masse de Jus avec : $m_{j} = \rho V_0$

Donc : $X = \frac{C_0 V_0}{M} = \frac{0,25 \times 192,12}{1,1 \times 10^3} \approx 4,37 \times 10^{-2} = 4,37 \%$

## a – Puisque $V'_{d} < V_{e}$, le titrant $HO^{-}$ est le réactif limitant  
## b – Tableau d'avancement associé à la réaction du dosage  

| Équation                               | $HA_{(aq)} + HO^{-} \rightarrow A^{-} + H_2O_{(l)}$ |  
|---------------------------------------|--------------------------------------------------|  
| État                                  | Avancement                                        | Les quantités de matière en mole (mol)      |  
| Initial                               | 0                                                | $C_1V_1$                                     | 0                                            |  
| Intermédiaire                         | $x$                                             | $C_1V_1 - x$                                 | $C_2V_2 - x$                                   | $x$                                          |  
| Final                                 | $x_{max}$                                      | $C_1V_1 - x_{max}$                           | $C_2V_2 - x_{max}$                             | $x_{max}$                                    |  

## c – Montrons que : $pH = pK_A + \log \left( \frac{V_2}{V_E - V_2} \right)$  
D'après le tableau d'avancement, on a : $[HA] = \frac{C_1V_1 - x_{max}}{V_1 + V_2}$ et $[A^{-}] = \frac{x_{max}}{V_1 + V_2}$  
Donc :  
$$ \frac{[A^{-}]}{[HA]} = \frac{x_{max}}{C_1V_1 - x_{max}} $$  
Alors :  
$$ \frac{[A^{-}]}{[HA]} = \frac{C_1V_1 - x_{max}}{V_1 + V_2} $$
Et puisque $HO^{-}$ est le réactif limitant, on a $C_2V_2 - x_{max} = 0$.  
D'où $x_{max} = C_2V_2$  
On trouve :  
$$ \frac{[A^{-}]}{[HA]} = \frac{C_2V_2}{C_1V_1 - C_2V_2} $$  
avec $C_1V_1 = C_2V_e$  
$$ \Rightarrow \log\left(\frac{[A^{-}]}{[HA]}\right) = \log\left(\frac{V_2}{V_E - V_2}\right) $$  
$$ \Rightarrow pH = pK_A + \log \left( \frac{V_2}{V_E - V_2} \right) $$  

## d – Déduisons la valeur de $pK_A$ :  
D'après la courbe, on a : pour $V_{2} = 37,5$, $pH = 3,7$  
Et on a : $pH = pK_A + \log\left( \frac{V_2}{V_E - V_2} \right)$  
Donc,  
$$ pK_A = pH - \log \left( \frac{V_2}{37,5} \right) $$  
A.N. : $pK_A = 3,7 - \log \left( \frac{37,5}{50 - 37,5} \right) \approx 3,22$  

## e – D'après le tableau, la formule chimique de l'acide citrique est $C_6H_8O_7$.
```

<!-- Page 181 -->

I'm unable to extract text from the image as requested.