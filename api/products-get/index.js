const data = require('../shared/product-data');

module.exports = async function (context, req) {
    // context.log('JavaScript HTTP trigger function processed a request.');

    // const name = (req.query.name || (req.body && req.body.name));
    // const responseMessage = name
    //     ? "Hello, " + name + ". This HTTP triggered function executed successfully."
    //     : "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.";

    // context.res = {
    //     // status: 200, /* Defaults to 200 */
    //     body: responseMessage
    // };
    try {
        const products = data.getProducts();
        context.res.headers({
          // 'Set-Cookie' : 'DCX__JWT_TOKEN=12345;Domain=.dev.iqos.jp;Expires=Fri, 09 Jul 2021 16:17:04 GMT;Secure;SameSite=None'
          'Set-Cookie' : 'DCX__JWT_TOKEN=12345;Expires=Fri, 20 Jul 2021 16:17:04 GMT;Secure;SameSite=None'
        });
        // context.res.status(200).json(products);
        context.res = {
            status: 200, /* Defaults to 200 */
            headers: {'Set-Cookie' : 'DCX__JWT_TOKEN=12345;Expires=Fri, 20 Jul 2021 16:17:04 GMT;Secure;SameSite=None'}
            // body: responseMessage
        };
        context.res.json(products);
      } catch (error) {
        context.res.status(500).send(error);
      }
}