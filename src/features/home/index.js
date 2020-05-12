import React, { useState, useEffect } from "react";
import { InfoFormView, CarFormView } from "./components/forms";
import { HomeStyle } from "./style";
import fees from "../../assets/json";

import MainLayout from "../mainview";
import { FacebookShareCount } from "react-share";

const init = {
  membershipType: "",
  meansOfPayment: "",
  location: "",
};

let carInit = {
  vehicleType: "Standard Vehicle",
  price: "",
  bidType: "",
};
let aggregateBreakDown = null;
const HomeView = () => {
  const secure = [
    "Money Order",
    "Wire Transfer",
    "ePay",
    "Cash",
    "Available Funds",
    "Cashier's Check",
    "Company Check",
    "Third Party Financing",
    "CHAPS Transfer",
    "Faster Payments",
    "Payment by BACS Bank Transfer",
    "Payment by International Bank Transfer",
    "Money Mover",
    "Debit(UK)",
  ].map((text) => text.toLowerCase());
  const nonSecure = ["Credit Card", "Debit Card"].map((text) =>
    text.toLowerCase()
  );

  const [memberInfo, setMemeberInfo] = useState(init);
  const [totalCost, setTotalCost] = useState("0.00");
  const changeMemberShipDetails = (info) => {
    console.log("in her");
    setMemeberInfo(info);
  };

  const getFeeType = (memberDetails) => {
    const { membershipType, meansOfPayment } = memberDetails;
    const payment = meansOfPayment.toLowerCase();
    const member = membershipType.toLowerCase();
    const paymentType = nonSecure.includes(payment) ? "unsecure" : "secure";
    const memberTypeA = ["business", "high-volume"].includes(member);
    const memberTypeB = ["consumer", "low-volume"].includes(member);
    if (memberTypeA && paymentType === "secure") {
      return "Fee A";
    } else if (memberTypeB && paymentType === "unsecure") {
      return "Fee B";
    } else if (memberTypeB && paymentType === "secure") {
      return "Fee C";
    } else {
      return "Fee D";
    }
  };
  const extractPrice = (priceString) => {
    const prices = priceString.trim().split("-");
    return [
      parseInt(prices[0].replace(/,/g, ""), 10),
      parseInt(prices[1].replace(/,/g, ""), 10),
    ];
  };
  const findPriceRange = (price, range) => {
    const [minPrice, highestPrice] = extractPrice(range);
    const isTheRightRangeOfAmount = price >= minPrice && price <= highestPrice;
    return isTheRightRangeOfAmount;
  };
  const calculateFees = (data, feeType) => {
    const { bidType, vehicleType, price } = data;
    const { location } = memberInfo;
    const initFee = location === "UK" ? 40 : 59;
    const cost = [initFee, parseInt(price, 10)];
    const thirdPartyFee = 39;
    const breakDown = {
      "Vehicle Price": price,
      "Buyer Fee": 0.0,
      "Virtual Bid Fee": 0.0,
      "Gate Fee": initFee,
    };
    try {
      if (vehicleType === "Crashed Toys") {
        const fee = fees.crashedToys.filter((range) =>
          findPriceRange(price, range["Sale Price Range"])
        )[0];
        const payment = price >= 10000 ? price * fee[feeType] : fee[feeType];
        breakDown["Buyer Fee"] = payment;
        cost.push(payment);
        if (bidType === "third party") {
          breakDown["Virtual Bid Fee"] = thirdPartyFee;
          cost.push(thirdPartyFee);
        } else if (bidType !== "kiosk") {
          const bidCosts =
            bidType === "non-kiosk"
              ? fees.crashedToysNonKiosk
              : fees.crashedToysOnlineLiveBid;
          const bidFee = bidCosts.filter(
            (cost) =>
              cost.price !== "FREE" && findPriceRange(price, cost["Sale Price"])
          );
          if (bidFee.length) {
            breakDown["Virtual Bid Fee"] = bidFee[0].price;
            cost.push(bidFee[0].price);
          }
        }
      } else {
        if (location === "Canada") {
          const secureOrUnsecure = nonSecure.includes(memberInfo.meansOfPayment)
            ? "Non-Secured Funds Fees"
            : "Secured Funds Fees";
          const fee = fees.canada.filter((range) =>
            findPriceRange(price, range["Sale Price Range"])
          )[0];
          const payment =
            price >= 35000.0
              ? price * fee[secureOrUnsecure]
              : fee[secureOrUnsecure];
          breakDown["Buyer Fee"] = payment;

          cost.push(payment);
          if (bidType === "third party") {
            breakDown["Virtual Bid Fee"] = thirdPartyFee;
            cost.push(thirdPartyFee);
          } else if (bidType !== "kiosk") {
            const bidCosts =
              bidType === "non-kiosk"
                ? fees.canadaNonKiosk
                : fees.canadaOnlineBid;
            const bidFee = bidCosts.filter(
              (cost) =>
                cost.price !== "FREE" &&
                findPriceRange(price, cost["Sale Price"])
            );
            if (bidFee.length) {
              breakDown["Virtual Bid Fee"] = bidFee[0].price;
              cost.push(bidFee[0].price);
            }
          }
        } else if (location === "US") {
          const feesArray =
            vehicleType === "Standard Vehicle" ? fees.usStandard : fees.usHeavy;
          const fee = feesArray.filter((range) =>
            findPriceRange(price, range["Sale Price Range"])
          );
          const payment =
            fee[0][feeType] < 1 ? price * fee[0][feeType] : fee[0][feeType];
          breakDown["Buyer Fee"] = payment;
          cost.push(payment);
          if (bidType === "third party") {
            breakDown["Virtual Bid Fee"] = thirdPartyFee;
            cost.push(thirdPartyFee);
          } else if (bidType !== "kiosk") {
            const bidCosts =
              bidType === "non-kiosk" ? fees.usNonKiosk : fees.usOnlineBid;
            const bidFee = bidCosts.filter(
              (cost) =>
                cost.price !== "FREE" &&
                findPriceRange(price, cost["Sale Price"])
            );
            if (bidFee.length) {
              breakDown["Virtual Bid Fee"] = bidFee[0].price;
              cost.push(bidFee[0].price);
            }
          }
        } else {
          const fee = fees.uk.filter((range) =>
            findPriceRange(price, range["Sale Price Range"])
          )[0];
          const payment =
            price >= 10000 ? price * fee[feeType] : parseInt(fee[feeType], 10);
          breakDown["Buyer Fee"] = payment;
          cost.push(payment);
          if (bidType !== "kiosk") {
            const bidCosts =
              bidType === "non-kiosk" ? fees.ukNonKiosk : fees.ukOnlineBid;
            console.log(bidCosts);
            const bidFee = bidCosts.filter(
              (cost) =>
                cost.price !== "FREE" &&
                findPriceRange(price, cost["Sale Price"])
            );
            if (bidFee.length) {
              breakDown["Virtual Bid Fee"] = parseInt(bidFee[0].price, 10);
              cost.push(parseInt(bidFee[0].price, 10));
            }
          }
        }
      }
      const total = cost.reduce((a, b) => a + b);
      return { breakDown, total };
    } catch (error) {
      console.log(error);
    }
  };
  const calculateAllFees = (carInfo, feeType) => {
    const fees = [];
    const totalBreakDown = {
      "Vehicle Price": 0.0,
      "Buyer Fee": 0.0,
      "Virtual Bid Fee": 0.0,
      "Gate Fee": 0.0,
    };
    for (const info of carInfo) {
      const { breakDown, total } = calculateFees(info, feeType);
      for (let [key, value] of Object.entries(breakDown)) {
        totalBreakDown[key] = totalBreakDown[key] + parseInt(value, 10);
      }
      fees.push(total);
    }
    return [totalBreakDown, fees];
  };
  const onCarSubmit = (values) => {
    const { carInfo } = values;
    let total;

    if (
      !memberInfo.meansOfPayment ||
      !memberInfo.membershipType ||
      !memberInfo.location
    ) {
      window.alert(
        "Please input your membership type and payment method and location"
      );
    } else {
      const feeType = getFeeType(memberInfo);
      const [totalBreakDown, fees] = calculateAllFees(carInfo, feeType);
      aggregateBreakDown = totalBreakDown;
      total = fees.reduce((a, b) => a + b, 0);
      setTotalCost(total);
      return;
    }
  };
  const addCommas = (cost) => {
    return cost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  return (
    <MainLayout>
      <HomeStyle>
        <div className="banner">
          <span className="banner_header">Fees</span>
          <span className="banner_text">Calculate your Copart fees</span>
        </div>
        <div className="main_body">
          <div className="membership_info">
            <span className="segment_header">User Information </span>
            <InfoFormView
              onSubmit={changeMemberShipDetails}
              initialValues={init}
            />
          </div>{" "}
          <div
            style={{
              opacity:
                memberInfo.location &&
                memberInfo.meansOfPayment &&
                memberInfo.membershipType
                  ? "1"
                  : "0.2",
            }}
            className={`car_info ${
              memberInfo.location &&
              memberInfo.meansOfPayment &&
              memberInfo.membershipType &&
              "fade-in"
            } `}
          >
            <span className="segment_header">Car Details </span>
            <CarFormView
              onSubmit={onCarSubmit}
              initialValues={{ carInfo: [carInit] }}
              carLocation={memberInfo.location}
            />
          </div>
          <div className="results">
            <span className="segment_header">Total Fee</span>

            <div>
              {aggregateBreakDown &&
                Object.entries(aggregateBreakDown).map(([key, value]) => {
                  return (
                    <div className="amount_wrapper">
                      <span>{key}:</span>
                      <span
                        className={
                          memberInfo.location === "UK" ? "pounds" : "dollars"
                        }
                        style={{ marginLeft: "3px" }}
                      >
                        {addCommas(value)}
                      </span>
                    </div>
                  );
                })}
            </div>
            <div className="amount_wrapper total">
              <span>Total:</span>
              <span
                style={{ marginLeft: "3px" }}
                className={memberInfo.location === "UK" ? "pounds" : "dollars"}
              >
                {addCommas(totalCost)}
              </span>
            </div>
          </div>
        </div>
      </HomeStyle>
    </MainLayout>
  );
};
export default HomeView;
