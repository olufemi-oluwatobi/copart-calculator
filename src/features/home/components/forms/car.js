import React, { useState, useEffect } from "react";
import { fadeIn } from "react-animations";
import moment from "moment";
import Radium, { StyleRoot } from "radium";
import { FieldArray, Formik } from "formik";
import { Form, Input, Checkbox, Select, DatePicker } from "antd";
import { carFormInitSchema } from "./validationSchema";
import { FormWrapperStyle } from "./style";
import AnimateView from "../animateOnDisplay";

const { Option } = Select;
const { Item } = Form;
const { TextArea } = Input;

const styles = {
  slideDown: {
    animation: "x 2s",
    animationName: Radium.keyframes(fadeIn, "fadeIn"),
  },
};

const CarForm = (props) => {
  const [vehicleType, setVehicleTypes] = useState([]);
  const [bidTypes, setBidTypes] = useState([]);

  const {
    values,
    errors,
    touched,
    handleSubmit,
    handleChange,
    setFieldTouched,

    displayPreviousForm,
  } = props;
  console.log(values);
  let carInfo = {
    vehicleType: "Standard Vehicle",
    price: "",
    bidType: "",
  };

  useEffect(() => {
    console.log("mount", props.carLocation);
    const vehicleArray = generateVehicleTypeArray();
    const bidArray = generateBidTypeArray();
    setBidTypes(bidArray);
    setVehicleTypes(vehicleArray);
  }, []);
  useEffect(() => {
    let { carLocation } = props;
    console.log("update", props.carLocation);
    const vehicleArray = generateVehicleTypeArray(carLocation);
    const bidArray = generateBidTypeArray(carLocation);
    setBidTypes(bidArray);
    setVehicleTypes(vehicleArray);
  }, [props.carLocation]);
  const generateVehicleTypeArray = (carLocation) => {
    let vehicleArray;
    switch (carLocation) {
      case "UK":
        vehicleArray = ["Standard Vehicle"];
        break;
      case "US":
        vehicleArray = ["Standard Vehicle", "Heavy Vehicle", "Crashed Toys"];
        break;
      case "Canada":
        vehicleArray = ["Standard Vehicle", "Crashed Toys"];
        break;
      default:
        vehicleArray = ["Standard Vehicle", "Heavy Vehicle", "Crashed Toys"];
        break;
    }
    return vehicleArray;
  };
  const generateBidTypeArray = (carLocation) => {
    const bidTypes = ["kiosk", "non-kiosk", "online bid", "third party"];
    if (carLocation === "UK") return bidTypes.splice(0, 3);
    return bidTypes;
  };

  const handleSelectChange = (value, node) => {
    const {
      props: { name },
    } = node;
    handleChange({ target: { value, name } });
    setFieldTouched(name, true, false);
  };

  const handleInputChange = (e) => {
    console.log(e);
    handleChange(e);
    setFieldTouched(e.target.name, true, false);
  };
  const onDataPick = (value, name) => {
    handleChange({ target: { value, name } });
    setFieldTouched(name, true, false);
  };

  const handleRadioChange = (e) => {
    const { name, checked } = e.target;
    handleChange({ target: { value: checked, name } });
    setFieldTouched(name, true, false);
  };

  const getValidationStatus = (touched, errors, key, index) => {
    return (
      touched.carInfo &&
      touched.carInfo[index] &&
      touched.carInfo[index][key] &&
      errors.carInfo &&
      errors.carInfo[index] &&
      errors.carInfo[index][key] &&
      "error"
    );
  };
  const displayFormHelp = (touched, errors, key, index) => {
    const error =
      touched.carInfo &&
      touched.carInfo[index] &&
      touched.carInfo[index][key] &&
      errors.carInfo &&
      errors.carInfo[index] &&
      errors.carInfo[index][key];
    return error;
  };

  const getValue = (index, key) => {
    return values.carInfo && values.carInfo[index][key];
  };
  const isDisabled = (index) => {
    return props.carLocation === "UK" ? true : false;
  };
  const performAction = async (event, action, callback) => {
    let newScrollPosition;
    const scrollLength = 300;
    const { top } = event.target.getBoundingClientRect();
    const scrollTop = document.documentElement.scrollTop;
    const absoluteY = scrollTop + top;
    if (action === "add") {
      newScrollPosition = absoluteY + scrollLength;
      await callback();

      window.scrollTo({
        top: newScrollPosition,
        behavior: "smooth",
      });
    } else if (action === "remove") {
      newScrollPosition = absoluteY - scrollLength;
      callback();
      window.scrollTo({
        top: newScrollPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <FormWrapperStyle>
      <Form layout="vertical">
        <FieldArray
          name="carInfo"
          render={(arrayHelpers) => (
            <div>
              {values.carInfo &&
                values.carInfo.map((_, index) => (
                  <AnimateView key={index}>
                    <div className="form_content">
                      <Item
                        label="Vehicle Type"
                        validateStatus={getValidationStatus(
                          touched,
                          errors,
                          "vehicleType",
                          index
                        )}
                        help={displayFormHelp(
                          touched,
                          errors,
                          "vehicleType",
                          index
                        )}
                      >
                        <Select
                          value={getValue(index, "vehicleType")}
                          onSelect={handleSelectChange}
                          placeholder="enter vehicle type"
                          disabled={isDisabled(index)}
                        >
                          {vehicleType.map((vehicle) => (
                            <Option
                              name={`carInfo[${index}].vehicleType`}
                              value={vehicle}
                            >
                              {vehicle}
                            </Option>
                          ))}
                        </Select>
                      </Item>
                      <Item
                        label="Price"
                        validateStatus={getValidationStatus(
                          touched,
                          errors,
                          "price",
                          index
                        )}
                        help={displayFormHelp(touched, errors, "price", index)}
                      >
                        <Input
                          placeholder="enter price(in dollars)"
                          name={`carInfo[${index}].price`}
                          onChange={handleChange}
                        />
                        {/* <Select
                          defaultValue={getValue(index, "priceRange")}
                          onSelect={handleSelectChange}
                          mode="combobox"
                          placeholder="enter price rane"
                        >
                          {[
                            "$0.01 - $49.99",
                            "$50.00 - $99.99",
                            "$100.00 - $199.99",
                            "$200.00 - $299.99",
                            "$300.00 - $349.99",
                            "$400.00 - $449.99",
                            "$450.00 - $499.99",
                            "$500.00 - $549.99",
                            "$550.00 - $599.99",
                            "$600.00 - $699.99",
                            "$700.00 - $799.99",
                            "$800.00 - $899.99",
                            "$900.00 - $999.99",
                            "$1,000.00 - $1,199.99",
                            "$1,200.00 - $1,299.99",
                            "$1,300.00 - $1,399.99",
                            "$1,400.00 - $1,499.99",
                            "$1,500.00 - $1,599.99",
                            "$1,600.00 - $1,699.99",
                            "$1,700.00 - $1,799.99",
                            "$1,800.00 - $1,999.99",
                            "$2,000.00 - $2,399.99",
                            "$2,400.00 - $2,499.99",
                            "$2,500.00 - $2,999.99",
                            "$3,000.00 - $3,499.99",
                            "$3,500.00 - $3,999.99",
                            "$4,000.00 - $4,499.99",
                            "$4,500.00 - $4,999.99",
                            "$5,000.00 - $5,999.99",
                            "$6,000.00 - $7,499.99",
                            "$7,500.00 - $9,999.99",
                            "$10,000.00 - $14,999.99",
                            "$15,000.00 - $19,999.99",
                            "$20,000.00 - $24,999.99",
                            "$25,000.00 - $29,999.99",
                            "$30,000.00 - $34,999.99",
                            "$35,000.00 - $10,000,000.00",
                            "Homeowners Items",
                          ].map((price) => (
                            <Option
                              name={`carInfo[${index}].priceRange`}
                              value={price}
                            >
                              {price}
                            </Option>
                          ))}
                        </Select> */}
                      </Item>
                      <Item
                        label="Bid type"
                        validateStatus={getValidationStatus(
                          touched,
                          errors,
                          "bidType",
                          index
                        )}
                        help={displayFormHelp(
                          touched,
                          errors,
                          "bidType",
                          index
                        )}
                      >
                        <Select
                          defaultValue={getValue(index, "bidType")}
                          onSelect={handleSelectChange}
                          mode="combobox"
                          placeholder="enter vehicle type"
                        >
                          {bidTypes.map((vehicle) => (
                            <Option
                              name={`carInfo[${index}].bidType`}
                              value={vehicle}
                            >
                              {vehicle}
                            </Option>
                          ))}
                        </Select>
                      </Item>
                      <Item
                        style={{
                          display: "block",
                        }}
                      >
                        {index > 0 && (
                          <span
                            style={{ float: "right" }}
                            onClick={(e) =>
                              performAction(e, "remove", () =>
                                arrayHelpers.remove(index)
                              )
                            }
                            className="remove"
                          >
                            remove
                          </span>
                        )}
                      </Item>
                    </div>
                    <div
                      style={{
                        marginTop: "5px",
                        width: "100%",
                      }}
                    />
                    {index === values.carInfo.length - 1 && (
                      <Item
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <div
                          onClick={(e) =>
                            performAction(e, "add", () =>
                              arrayHelpers.push(carInfo)
                            )
                          }
                          className="add_another"
                        >
                          <img
                            src={require("../../../../assets/images/blue-plus.svg")}
                            style={{ marginRight: "5px" }}
                          />
                          <span>add a new vehicle</span>
                        </div>
                      </Item>
                    )}
                  </AnimateView>
                ))}
            </div>
          )}
        />
        <div
          style={{ cursor: "pointer" }}
          onClick={handleSubmit}
          className="calculate"
        >
          Generate Total Fees
        </div>
      </Form>
    </FormWrapperStyle>
  );
};
const CarFormView = ({
  initialValues,
  onSubmit,
  displayPreviousForm,
  isLoading,
  ...rest
}) => {
  return (
    <StyleRoot>
      <React.Fragment>
        <Formik
          enableReinitialize={true}
          initialValues={initialValues}
          validationSchema={carFormInitSchema}
          onSubmit={onSubmit}
          displayPreviousForm={displayPreviousForm}
        >
          {(props) => {
            return (
              <CarForm
                {...rest}
                {...props}
                isLoading={isLoading}
                displayPreviousForm={displayPreviousForm}
              />
            );
          }}
        </Formik>
      </React.Fragment>
    </StyleRoot>
  );
};
export default CarFormView;
