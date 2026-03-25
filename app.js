const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Server del mio blog')
})

app.get('/bacheca', (req, res) => {
    const posts = [
        {
            titolo: "Ciambellone",
            contenuto: "Farina",
            immagine: "images/ciambellone.jpeg",
            tags: ["Zucchero", "Uova", "Aromi"],
        }, 
        {
            titolo: "Cracker",
            contenuto: "Farina",
            immagine: "images/cracker_barbabietola.jpeg",
            tags: ["Farina", "Olio"],
        },
        {
            titolo: "Pane",
            contenuto: "Farina",
            immagine: "images/pane_fritto_dolce.jpeg",
            tags: ["Acqua", "Farina"],
        },
        {
            titolo: "Pasta",
            contenuto: "Farina",
            immagine: "images/pasta_barbabietola.jpeg",
            tags: ["Farina", "Acqua"],
        },
        {
            titolo: "Torta",
            contenuto: "Farina",
            immagine: "images/torta_paesana.jpeg",
            tags: ["Uova", "Zucchero", "Latte", "Burro"],
        }
    ];
    res.json(posts);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})