  import Bachelorette from '../models/Bachelorette.js';

  const bacheloretteController = {
  index: (req, res) => {
    Bachelorette.find({})
      .then(bachelorettes => {
        res.json(bachelorettes)
      })
  },
  showYear: (req, res) => {
    console.log(req.params);
    Bachelorette.find({year: req.params.year})
      .then(bachelorette => {
        res.json(bachelorette)
      })
  },
  showName: (req, res) => {
    Bachelorette.find({name: req.params.name})
      .then(bachelorette => {
        res.json(bachelorette)
      })
  },
  show: (req, res) => {
    Bachelorette.find({name: req.params.name})
      .then(bachelorette => {
        res.json(bachelorette)
      })
  },
  create: (req, res) => {
    // let newBachelorette = req.body
    Bachelorette.create(req.body)
      .then(bachelorette => {
        res.json(bachelorette)
      })
  },
  edit: (req, res) => {
    Bachelorette.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true})
      .then(bachelorette => {
        res.json(bachelorette)
      })
  },
  delete: (req, res) => {
    Bachelorette.findOneAndRemove({_id: req.params.id})
      .then(bachelorette => {
        res.json(bachelorette)
      })
  }
}

export default bacheloretteController