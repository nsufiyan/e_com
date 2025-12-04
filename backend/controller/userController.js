const { UserDAO, ProductDAO, OrderDAO } = require("../dao");

const addUser = async (req, res, next) => {
  try {
    if (req?.file?.originalname) {
      req.body.profilePic = `http://localhost:4000/${req.file.originalname}`;
    }
    res.json({
      success: true,
      message: "User added successfully",
      data: await UserDAO.addUser(req.body),
    });
  } catch (error) {
    res.json({
      success: false,
      message: error?.message,
    });
  }
};

const getUser = async (req, res, next) => {
  try {
    res.json({
      success: true,
      message: "User read successfully",
      data: await UserDAO.getUser(req.query),
    });
  } catch (error) {
    res.json({
      success: false,
      message: error?.message,
    });
  }
};

const updateUser = async (req, res, next) => {
  try {
    res.json({
      success: true,
      message: "User updated successfully",
      data: await UserDAO.updateUser({ _id: req?.params?.id }, req.body),
    });
  } catch (error) {
    res.json({
      success: false,
      message: error?.message,
    });
  }
};

const deleteUser = async (req, res, next) => {
  try {
    res.json({
      success: true,
      message: "User deleted successfully",
      data: await UserDAO.deleteUser(req.body.query),
    });
  } catch (error) {
    res.json({
      success: false,
      message: error?.message,
    });
  }
};

const login = async (req, res, next) => {
  try {
    const { phone, password } = req.body;
    if (!phone || !password) {
      return res.json({ success: false, message: "Credentials missing!" });
    }

    let userData = await UserDAO.getSingleUser(req.body);
    req.session.user = userData;
    res.json({
      success: userData ? true : false,
      message: userData
        ? "User authenticated successfully"
        : "Invalid Credentials",
      data: userData,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error?.message,
    });
  }
};

const validateSession = async (req, res, next) => {
  try {
    res.json(req?.session?.user);
  } catch (error) {
    res.json({
      success: false,
      message: error?.message,
    });
  }
};

const vendorDashboardStats = async (req, res, next) => {
  try {
    let { _id } = req?.query;
    let productIdList = [];
    let grossTotal = 0;
    let products = await ProductDAO.getProduct({
      vendor: _id,
    });

    productIdList = products?.map((product) => {
      return product?._id;
    });

    let [orders, cancelled, delivered, reviews] = await Promise.all([
      OrderDAO.getOrder({
        "item.product": { $in: productIdList },
      }),
      OrderDAO.getOrder({
        "item.product": { $in: productIdList },
        status: "cancelled",
      }),
      OrderDAO.getOrder({
        "item.product": { $in: productIdList },
        status: "delivered",
      }),
      OrderDAO.getOrder({
        rating: { $exists: true },
      }),
    ]);

    for (let i = 0; i < orders?.length; i++) {
      grossTotal += orders?.[i]?.cost;
    }
    res.json({
      success: true,
      message: "Stats fetched successfully",
      data: {
        total: products?.length,
        orders: orders?.length,
        cancelled: cancelled?.length,
        delivered: delivered?.length,
        reviews: reviews?.length,
        grossTotal: grossTotal,
      },
    });
  } catch (error) {
    res.json({
      success: false,
      message: error?.message,
    });
  }
};

const adminDashboardStats = async (req, res, next) => {
  try {
    let grossTotal = 0;

    let [vendors, customers, products, orders, cancelled, delivered, reviews] =
      await Promise.all([
        UserDAO.getUser({
          userType: "vendor",
        }),
        UserDAO.getUser({
          userType: "customer",
        }),
        ProductDAO.getProduct({}),
        OrderDAO.getOrder({}),
        OrderDAO.getOrder({
          status: "cancelled",
        }),
        OrderDAO.getOrder({
          status: "delivered",
        }),
        OrderDAO.getOrder({
          rating: { $exists: true },
        }),
      ]);

    for (let i = 0; i < orders?.length; i++) {
      grossTotal += orders?.[i]?.cost;
    }
    res.json({
      success: true,
      message: "Stats fetched successfully",
      data: {
        vendors: vendors?.length,
        customers: customers?.length,
        total: products?.length,
        orders: orders?.length,
        cancelled: cancelled?.length,
        delivered: delivered?.length,
        reviews: reviews?.length,
        grossTotal: grossTotal,
      },
    });
  } catch (error) {
    res.json({
      success: false,
      message: error?.message,
    });
  }
};

module.exports = {
  addUser,
  getUser,
  updateUser,
  deleteUser,
  login,
  validateSession,
  vendorDashboardStats,
  adminDashboardStats,
};
