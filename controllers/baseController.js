const { SORT_ORDER_HASHMAP } = require("./constants");
class BaseController {
  constructor(model) {
    this.model = model;
  }

  /* All controllers that extend this BASE controller will have access to the below function **/

  async getAll({ query }, res) {
    try {
      const { year, sort } = query;

      const options = {
        where: {},
        order: [],
      };

      if (year) options.where.year = year;
      if (sort) {
        const [property, order] = sort.split(":");

        if (SORT_ORDER_HASHMAP[order]) {
          options.order.push([property, SORT_ORDER_HASHMAP[order]]);
        }
      }

      const output = await this.model.findAll(options);
      return res.json(output);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }
}

module.exports = BaseController;
