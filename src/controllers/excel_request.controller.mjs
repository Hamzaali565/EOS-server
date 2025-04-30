import moment from "moment";
import { sendMail } from "../helper/mail.helper.mjs";
import { excel_request_model } from "../models/excel_request.model.mjs";
import { emailMessage } from "../public/email.request.mjs";

const excel_request = async (req, res) => {
  try {
    const { username, email, product_detail } = req.body;

    if (![username, email, product_detail].every(Boolean)) {
      return res.status(404).json({ message: "All Parameters are required" });
    }

    const attemps_check = await excel_request_model
      .findOne({ email })
      .sort({ createdAt: -1 });
    if (attemps_check) {
      const isOlderThanOneDay =
        moment().diff(moment(attemps_check?.createdAt), "days") >= 1;
      if (!isOlderThanOneDay) {
        return res.status(401).json({ message: "Request already generated." });
      }
    }
    const response = new excel_request_model({
      email,
      username,
      product_detail,
    });
    await response.save();

    sendMail(
      "alimuhammadhamza402@gmail.com",
      "Request for Items List on excel file.",
      emailMessage(username, email, product_detail)
    );
    res.status(201).json({ message: "Reqquest Has been generated" });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export { excel_request };
