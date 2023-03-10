import House from "../models/House.js";
import Character from "../models/Characters.js";
import data from "../data/houses.json" assert { type: "json" };
import charData from "../data/characters.json" assert { type: "json" };

// House.create(data)

async function seed() {
    await House.deleteMany({})

    await House.create(data)

    await Character.create(charData)

    process.exit()
}

seed()