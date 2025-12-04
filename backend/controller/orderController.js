const { OrderDAO, ProductDAO } = require("../dao");

const addOrder = async (req, res, next) => {
  try {
    res.json({
      success: true,
      message: "Order added successfully",
      data: await OrderDAO.addOrder(req.body),
    });
  } catch (error) {
    res.json({
      success: false,
      message: error?.message,
    });
  }
};

const getOrder = async (req, res, next) => {
  try {
    let products = [];
    let ordersData = [];
    if (req?.query?.vendor) {
      products = await ProductDAO.getProduct({
        vendor: req?.query?.vendor,
      });
      products = products?.map((ele) => ele?._id);
      ordersData = await OrderDAO.getOrder({
        "item.product": { $in: products },
      });
    } else {
      ordersData = await OrderDAO.getOrder(req?.query);
    }
    res.json({
      success: true,
      message: "Order read successfully",
      data: ordersData,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error?.message,
    });
  }
};

const updateOrder = async (req, res, next) => {
  try {
    res.json({
      success: true,
      message: "Order updated successfully",
      data: await OrderDAO.updateOrder(req.body.query, req.body.updateData),
    });
  } catch (error) {
    res.json({
      success: false,
      message: error?.message,
    });
  }
};

const deleteOrder = async (req, res, next) => {
  try {
    res.json({
      success: true,
      message: "Order deleted successfully",
      data: await OrderDAO.deleteOrder(req.body.query),
    });
  } catch (error) {
    res.json({
      success: false,
      message: error?.message,
    });
  }
};

module.exports = {
  addOrder,
  getOrder,
  updateOrder,
  deleteOrder,
};
