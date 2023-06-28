import data from './data/contenu.js'

export const controllers = {
    history : () => {
        const hist = [];
        return hist;
    },

    accueil : (req, res) => {
        res.render('accueil', {
            img1 : data[0].img1,
            title : data[0].title,
            par : data[0].text,
            img2 : data[0].img2,
        })
    },

    room : (req, res) => {
        const reqRoom = req.params.room;
        const room = data.find(room => room.room === reqRoom)

        if (reqRoom === 'cave') {
            res.render('cave', {
                img1 : room.img1,
                title : room.title,
                par : room.text,
                img2 : room.img2,
            })
            
        } else if (reqRoom === 'salon') {
            res.render('salon', {
                img1 : room.img1,
                title : room.title,
                par : room.text,
                img2 : room.img2,
            })
        } else if (reqRoom === 'grenier'){
            res.render('grenier', {
                img1 : room.img1,
                title : room.title,
                par : room.text,
                img2 : room.img2,
            })
        }
        else if (reqRoom === 'escalier'){
            res.render('escalier', {
                img1 : room.img1,
                title : room.title,
                par : room.text,
                img2 : room.img2,
            }) 
        }    
        else if (reqRoom === 'chambre'){
            
            res.render('chambre', {
                img1 : room.img1,
                title : room.title,
                par : room.text,
                img2 : room.img2,
            })
        } else {
            if(room) {
                res.render('partials/tronc', {
                    img1 : room.img1,
                    title : room.title,
                    par : room.text,
                    img2 : room.img2,
                })
            } else {
                res.render('404', {
                    title: 'Erreur 404, page non trouvée',
                    img1: 'src=/img/chat.png'
                })
            }
        }
    }
}
