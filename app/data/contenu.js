import pageContent from './model.js';

// attendu (image1, text, image2)

const content = [
    new pageContent (`accueil`, `src=/img/maison.png alt=maison hantée`, `Bienvenue dans l'escape game`, `Nous allons commencer, tu es prêt ?`, `src=`),
    new pageContent (`hall`, `src=/img/hall.png alt=hall`, `Te voilà arrivé dans le hall de cette vieille maison !`, `Il paraît que l'ancienne propriétaire Rose y a caché un trésor...Mais personne n'a jamais réussi à le trouver. Tous les gens qui l'ont exploré sont partis avant la fin... On m'a dit qu'un fantôme hante cette maison... J'espère en tout cas que toi tu n'auras pas peur ! Je te conseille de chercher comme premier indice la photo de la propriétaire, il paraît qu'elle a marqué dessus un indice pour trouver le trésor...`, `src=/img/rose.png style= display:none; alt=photographie de Rose`),
    new pageContent (`salon`, `src=/img/salon.png alt=salon`, `Bravo tu as trouvé cet indice !`, `Te voilà dans le salon, j'ai entendu dire que Rose utilisait souvent son ordinateur et en plus de ça j'ai trouvé ce papier avec un code étrange. As-tu une idée de ce que ça veut dire ? ou de quoi en faire ?`, `src=/img/code.png alt=flèche haut, flèche bas, flèche droite`),
    new pageContent (`escalier`, `src=/img/escalier.png alt=escalier`, `J'espère que tu te souviens du nombre de marches !`, `A toi de jouer pour trouver l'indice au bon endroit !`, `src=/img/indice.png alt=indice`),
    new pageContent (`salle`, `src=/img/salle.png alt=salle`, `La décoration de cette salle laisse à désirer...`, `Mais revenons à nos moutons, il y a un papier sur la table, je me souviens que Rose aimait les maths...Elle m'a dit un jour qu'elle a caché un indice dans l'escalier, le résultat du calcul doit correspondre au numéro d'une marche précise !`, `src=/img/maths.png alt=maths : pythagore, a=3, b=4, c =?`),
    new pageContent (`cave`, `src=/img/cave.png alt=cave`, `Bien joué, cet indice là n'étais pas évident à trouver !`, `Maintenant il faut ouvrir la porte de la cave, j'espère que tu as bien noté le code...`, `src=`),
    new pageContent (`chambre`, `src=/img/chambre.png alt=chambre`, `Rose a vraiment caché des indices partout..`, `Regarde, il y a un mémory, elle qui adorait les jeux de sociétés, il cache forcément un indice !`, `src=`),
    new pageContent (`cave-interieur`, ` src=/img/cave-interieur.png alt=cave intérieur`, `Voilà la cave !`, `Regarde ! il y a une clef juste ici et un plan de la maison...Essayons de trouver quelle pièce elle va ouvrir et allons voir !`, `src=/img/plan.png alt=plan`),
    new pageContent (`grenier`, `src=/img/grenier.png alt=grenier`, `Tu as trouvé le trésor ! bien joué !`, `Rose serait fière de voir que quelqu'un a enfin réussi à comprendre ses indices ! Maintenant il te reste à l'ouvir !`, `src=`)
]

export default content;