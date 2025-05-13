import { listModel } from "../models/list.model.mjs";

const create_list = async (req, res) => {
  try {
    const {
      code,
      name,
      manufacturer,
      part_number,
      sales_price,
      free_stock,
      printer_model,
    } = req.body;

    if (![code, name, manufacturer, sales_price, free_stock].every(Boolean)) {
      return res.status(400).json({ message: "Please fill in all fields" });
    }
    const list = new listModel({
      code,
      name,
      manufacturer,
      part_number,
      sales_price,
      free_stock,
      printer_model,
    });
    await list.save();
    res.status(201).json({ message: "List created successfully", list });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error creating list" });
  }
};

const create_many = async (req, res) => {
  try {
    const { data } = req.body;
    if (!data || !Array.isArray(data) || data?.length === 0) {
      return res
        .status(400)
        .json({ message: "Please provide a list of lists" });
    }
    const empty_field = data?.find(
      (items) =>
        !items?.code ||
        !items?.name ||
        !items?.manufacturer ||
        !items?.free_stock ||
        !items?.sales_price
    );
    if (empty_field) {
      return res.status(400).json({ message: "Please fill in all fields" });
    }
    const lists = await listModel.insertMany(data, { ordered: false });
    res.status(201).json({ message: "Lists created successfully", lists });
    // const lists = data.map((item) => {/
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error creating many list" });
  }
};

const get_data = async (req, res) => {
  try {
    const list = await listModel.find({});
    if (list.length === 0) {
      return res.status(404).json({ message: "No lists found" });
    }
    res.status(200).json({ message: "Lists found", data: list });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error getting data" });
  }
};

const update_many = async (req, res) => {
  try {
    const { data } = req.body;
    if (!data || !Array.isArray(data) || data?.length === 0) {
      return res
        .status(400)
        .json({ message: "Please provide a list of lists" });
    }
    const empty_field = data?.find(
      (items) =>
        !items?.code ||
        !items?.name ||
        !items?.manufacturer ||
        !items?.free_stock ||
        !items?.sales_price
    );

    if (empty_field) {
      return res.status(400).json({ message: "Please fill in all fields" });
    }

    const mappedData = data.map((items) => ({
      ...items,
      status:
        items?.status === "true" || items?.status === "TRUE" ? true : false,
    }));

    const newData = mappedData?.filter((items) => !items?._id);
    const oldData = mappedData?.filter(
      (items) => items?._id && items?.status !== false
    );
    let delete_data = mappedData?.filter((items) => !items?.status);
    if (newData.length !== 0) {
      await listModel.insertMany(newData, { ordered: false });
    }
    if (delete_data.length !== 0) {
      delete_data = delete_data.map((items) => items?._id);
      await listModel.deleteMany({
        _id: {
          $in: delete_data,
        },
      });
    }
    if (oldData?.length === 0) {
      return res
        .status(200)
        .json({ message: "List Uploaded Successfully !!!" });
    }

    const operation = oldData.map((items) => ({
      updateOne: {
        filter: { _id: items._id },
        update: { $set: items },
      },
    }));
    const result = await listModel.bulkWrite(operation);
    res.status(200).json({ message: "Lists updated", data: result });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error updating many list" });
  }
};

export { create_list, create_many, get_data, update_many };
