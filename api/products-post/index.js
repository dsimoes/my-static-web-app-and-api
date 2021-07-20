const data = require('../shared/product-data');

module.exports = async function (context, req) {
  const product = {
    id: undefined,
    name: req.body.name,
    description: req.body.description,
  };

  try {
    const newProduct = data.addProduct(product);
    context.res = {
      status: 201, /* Defaults to 200 */
      headers: {'Set-Cookie' : 'DCX__JWT_TOKEN=deleted;Expires=Thu, 01 Jan 1970 00:00:00 GMT;Secure;SameSite=None'},
      body: newProduct
    };
  } catch (error) {
    context.res.status(500).send(error);
  }
};
