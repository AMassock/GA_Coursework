import Bachelor from '../models/Bachelor.js'

const bachelorController = {
  index: (req, res) => {
    Bachelor.find({})
      .then(bachelor => {
        res.json(bachelor)
      })
  },
  showYear: (req, res) => {
    Bachelor.find({year: req.params.year})
      .then(bachelor => {
        res.json(bachelor)
      })
  },
  showName: (req, res) => {
    Bachelor.find({name: req.params.name})
      .then(bachelor => {
        res.json(bachelor)
      })
  },
  create: async(req, res) => {
    console.log(req.body)
    const bachelor = await Bachelor.create(req.body)
      res.json(bachelor)
      
  },
  edit: (req, res) => {
    Bachelor.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true})
      .then(bachelor => {
        res.json(bachelor)
      })
  },
  delete: (req, res) => {
    Bachelor.findOneAndRemove({_id: req.params.id})
      .then(bachelor => {
        res.json(bachelor)
      })
  }
}

export default bachelorController