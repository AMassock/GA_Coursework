import mongoose from './connection.js'
import Bachelor from '../models/Bachelor.js'
import Bachelorette from '../models/Bachelorette.js'
import bachelorData from './bachelors.json' assert { type: "json"}
import bacheloretteData from './bachelorettes.json' assert { type: "json"}


Bachelor.remove({})
Bachelor.collection.insert(bachelorData)
  .then(bachelors => {
    console.log(bachelorData)
  })
  .catch(err => {
    console.log(err)
  })

Bachelorette.remove({})
Bachelorette.collection.insert(bacheloretteData)
  .then(bachelorettes => {
    console.log(bacheloretteData)
  })
  .catch(err => {
    console.log(err)
  })
