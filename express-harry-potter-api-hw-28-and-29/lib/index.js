import express from "express";
import qs from "express";
import Characters from "./models/Characters.js";
import House from "./models/House.js";

const app = express();

app.use(express.json())

app.get('/', async (req, res) => {
    res.redirect('/houses')
})

// app.get('/houses?', async (req, res) => {
//     const houses = await House.find({})
//     res.json(houses)
// })

app.get('/houses', async (req, res) => {
    // console.log(req.query)
    if(req.query) {
        // const query = req.query
        // console.log(query);
        const houses =  await House.find(req.query)
        res.json(houses)
    } else {
        const houses = await House.find({})
        res.json(houses)
    }
})

app.get('/:id', async (req, res) => {
    res.redirect('/houses/:id')
})

app.get('/houses/:id', async (req, res) => {
    const house = await House.findById(req.params.id)
    res.json(house)
})

app.get('/houses/:id/characters', async (req, res) => {
    if(req.query) {
        const characters = await Characters.find(req.query)
        res.json(characters)
    } else {
        const characters = await Characters.find({})
        res.json(characters)
    }
})

app.get('/houses/:id/characters/:id', async (req, res) => {
    const character = await Characters.findById(req.params.id)
    res.json(character)
})


app.post('/houses', async (req, res) => {
    const house = await House.create(req.body)
    res.json(house)
})

app.post('/houses/:id/characters', async (req, res) => {
    const character = await Characters.create(req.body)
    res.json(character)
})

app.put('/houses/:id', async (req, res) => {
    await House.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true }
    ).then(house => {
        res.json(house)
    })
})

app.put('/houses/:id/characters/:id', async (req, res) => {
    await Characters.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true }
    ).then(character => {
        res.json(character)
    })
})


app.delete('/houses/:id', async (req, res) => {
    await House.findOneAndDelete(
        { _id: req.params.id },
        req.body).then(house => {
            res.json(house)
        })
})

app.delete('/houses/:id/characters/:id', async (req, res) => {
    await Characters.findOneAndDelete(
        { _id: req.params.id },
        req.body).then(character => {
            res.json(character)
        })
})

app.listen(3000, () => {
    console.log("Zakk makes punny joke about server running");
})