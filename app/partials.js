const accueilContent = `
<head>
  <link rel="stylesheet" href="/public/css/styles.css">
</head>
    <img src='/img/maison.png' alt='maison hantée'>
    <h1>Bienvenue dans l'escape game</h1>
    <p>Nous allons commencer, tu es prêt ?</p>
    <a href='/hall'>Start</a>
    `
const hallContent = `
<img src='/img/hall.png' alt='hall'>
<h1>Te voilà arrivé dans le hall de cette vieille maison !</h1>
<p>Il paraît que l'ancienne propriétaire Rose y a caché un trésor...Mais personne n'a jamais réussi à le trouver.</p>
<p>Tous les gens qui l'ont exploré sont partis avant la fin... il parait qu'un fantôme hante cette maison....</p>
<p>J'espère en tout cas que toi tu n'auras pas peur !<p>
<p>Je te conseille de chercher comme premier indice la photo de la propriétaire, il paraît qu'elle a marqué dessus un indice pour trouver le trésor...</p>
<img src='/img/rose.png' style='display: none; alt='photographie de Rose'>
`

const SalonContent = `
<img src='/img/salon.png' alt='salon'>
<p>Bravo tu as trouvé ce premier indice !</p>
<p>Te voilà dans le salon, j'ai entendu dire que Rose utilisait souvent son ordinateur et en plus de ça j'ai trouvé ce papier avec un code étrange.</p>
<p>As-tu une idée de ce que ça veut dire ? ou de quoi en faire ?</p>
<img src='/img/code.png' alt='flèche haut, flèche bas, flèche droite'>
<script type="text/javascript">
document.onkeydown = checkKey;

let eventHistory =  '';

function checkKey(e) {

    e = e || window.event;
    
    if (e.keyCode == '38') {
      eventHistory = 'a'
      console.log(eventHistory)

    }

    if (e.keyCode == '40') {
      console.log('bas')
      eventHistory += 'b'
      console.log(eventHistory)

    }
    
    if (e.keyCode == '39') {
        console.log('droite')
        eventHistory += 'c'
        console.log(eventHistory)

     }

     if (eventHistory === 'abc') {
      console.log('test')
      alert('Bien joué ! tu as récupéré sur son ordinateur le mot de passe pour aller à la cave : 549374, note-le ! tu en auras besoin pour ouvrir la porte !')
      document.location.href="/cave";
    }
  }
   

</script>
`

const caveContent= `
  <img src='/img/cave.png' alt='salon'>
  <p>Bien joué, cet indice là n'étais pas évident à trouver !</p>
  <p>Maintenant il faut ouvrir la porte de la cave, j'espère que tu as bien noté le code...</p>

  <form>
    <label for="code">Il faut entrer le code ici :</label>
    <textarea id="code" name="code"></textarea>
    <span id='error'>Désolé, tu ne peux pas ouvrir la cave, le code n'est pas bon...</span>

    <input id="submit" type='submit' value='Valider'>
  </form>

  <script type="text/javascript">

  const submit = document.getElementById('submit')
  const error = document.getElementById('error');
  const content = document.getElementById('code');
  console.log(content.value)

  error.style.display = 'none';

  submit.addEventListener('click', (event) => {
    event.preventDefault()
    console.log(content.value)

    if (content.value === '549374') {
      error.style.display = 'none';
      alert ("Bravo tu as réussi à ouvrir la porte, allons voir à l\'intérieur !")
      document.location.href="/cave-interieur";
    } else {
      error.style.display = 'block';
    }
  })
  </script>
`
const caveIntContent = `
<img src='/img/cave-interieur.png' alt='cave intérieur'>
<p> Regarde ! il y a une clef juste ici et un plan de la maison...</p>
<p> Essayons de trouver quelle pièce elle va ouvrir et allons voir !</p>
<img src='/img/plan.png' alt='plan'>

`

const grenier = `
<img src='/img/grenier.png' alt='cave intérieur'>
<p> Tu as trouvé le trésor ! bien joué !</p>
<p> Rose serait fière de voir que quelqu'un a enfin réussi à comprendre ses indices !</p>
`

export {accueilContent, hallContent, SalonContent, caveContent, caveIntContent, grenier}
