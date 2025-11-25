const { Wishlist } = require("../model");

const addWishlist = async (data) => {
  try {
    return await Wishlist.create(data);
  } catch (err) {
    console.log("ERROR:", err);
    throw new Error(err);
  }
};

const getWishlist = async (query) => {
  try {
    return await Wishlist.find(query)
      .populate([
        {
          path: "item.product",
          model: "product",
          select: "name category productImage price",
          populate: {
            path: "category",
            model: "category",
            select: "name",
          },
        },
      ])
      .exec();
  } catch (error) {
    console.log("ERROR:", error);
    throw new Error(error);
  }
};

const updateWishlist = async (query, updateData) => {
  try {
    return await Wishlist.findOneAndUpdate(query, updateData).exec();
  } catch (error) {
    console.log("ERROR:", error);
    throw new Error(error);
  }
};

const deleteWishlist = async (query) => {
  try {
    let { _id, itemId } = query;
    console.log("query ", query);
    return await Wishlist.updateOne(
      {
        _id: _id,
        // "item.product": itemId
      },
      {
        $pull: { item: { product: itemId } },
      }
    ).exec();
  } catch (error) {
    console.log("ERROR:", error);
    throw new Error(error);
  }
};

module.exports = { addWishlist, getWishlist, updateWishlist, deleteWishlist };
