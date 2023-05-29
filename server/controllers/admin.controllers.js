const AddMin = require('../model/Admin')

const postProduct = async (req, res) => {
    const addMin = new AddMin(req.body)
    try {
        await addMin.save()
        res.status(201).send(addMin)
    } catch (error) {
        res.status(400).send(error)
    }
}
const getProduct = async (req, res) => {
    const category = req.query.category;
    try {
      const addMins = await AddMin.find({category:category}).limit(req.query.limit)
      res.status(200).send(addMins);
    } catch (error) {
      res.status(401).send(error);
    }
  };
  
const getOneProduct = async (req, res) => {
    const  _id  = req.params.id;
    try {
        const product = await AddMin.findOne({ _id });
        if (!product) {
            res.status(404).send({ error: 'Product Not Found' });
        } else {
            res.status(200).send(product);
        }
    } catch (error) {
        res.status(500).send(error);
    }
};

module.exports = { postProduct, getProduct, getOneProduct };