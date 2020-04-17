import React, { useState } from "react";
import FormFooter from "../formFooter";
import moment from "moment";
import { fadeIn } from "react-animations";
import Radium, { StyleRoot } from "radium";
import { Form, Input, Button, Select, Radio, Table } from "antd";
import { Formik } from "formik";
import AnimateForm from "./animateOnDisplay";
import { fileToBase64 } from "../../../../helpers/utils";
import { basicFormValidationSchema } from "./validationSchemas";
import { FormWrapperStyle } from "../../style";

const { Option } = Select;
const { Item } = Form;
const styles = {
  fadeInLeft: {
    animation: "x 1s",
    animationName: Radium.keyframes(fadeIn, "fadeIn"),
  },
};

const DocumentForms = (props) => {
  const {
    values,
    errors,
    tableData,
    touched,
    handleSubmit,
    handleChange,
    isValid,
    setFieldTouched,
    isLoading,
    displayPreviousForm,
  } = props;

  const handleSelectChange = (value, node) => {
    const {
      props: { name },
    } = node;
    handleChange({ target: { value, name } });
    setFieldTouched(name, true, false);
  };
  const handleMultipleSelect = (value, node, index) => {
    const {
      props: { name },
    } = node;

    const valueArray = values[name].split(",").filter((val) => val.length > 0);
    if (valueArray[index]) {
      valueArray[index] = value;
    } else {
      valueArray.push(value);
    }
    const newValue = valueArray.join(",");
    handleChange({ target: { value: newValue, name } });
    setFieldTouched(name, true, false);
  };
  const onDataPick = (_, value, name) => {
    handleChange({ target: { value, name } });
    setFieldTouched(name, true, false);
  };
  const handleInputChange = (e) => {
    handleChange(e);
    setFieldTouched(e.target.name, true, false);
  };
  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    console.log(file.name);
    const base64 = await fileToBase64(file);
    handleChange({ target: { value: base64, name: "B64" } });
    handleChange({ target: { value: file.name, name: "FileNameWithFormat" } });
  };

  const columns = [
    {
      title: "File Name",
      dataIndex: "FileNameWithFormat",
    },
    {
      title: "Document type",
      dataIndex: "DocTypeName",
    },
  ];
  return (
    <StyleRoot>
      <FormWrapperStyle style={styles.bounce}>
        <AnimateForm>
          <Form layout="vertical">
            <Item label="Document Type" />

            <Item>
              <Radio.Group name={"DocTypeName"} onChange={handleChange}>
                <Radio value={"Curriculum Vitae"}>Curriculum Vitae</Radio>
                <Radio value={2}>Others(optional)</Radio>
              </Radio.Group>{" "}
            </Item>

            <Item label="Type Of Document">
              <Input
                onChange={handleInputChange}
                name={`DocTypeName`}
                placeholder="enter document type"
              />
            </Item>
            <Item
              label="File"
              validateStatus={
                touched.PostalAddress && errors.PostalAddress && "error"
              }
              help={touched.PostalAddress && errors && errors.PostalAddress}
            >
              <Input
                onChange={handleFileChange}
                name="Document"
                type={"file"}
                placeholder="Select a file"
              />
            </Item>
            <Item style={{ display: "flex", justifyContent: "flex-end" }}>
              <Button
                onClick={() => handleSubmit()}
                className={"upload_button"}
              >
                Upload Document
              </Button>
            </Item>
            <Item>
              <Table
                columns={columns}
                pagination={false}
                dataSource={
                  tableData.length > 0
                    ? tableData
                    : [{ FileName: "no document has been uploaded yet" }]
                }
              />
            </Item>
          </Form>
        </AnimateForm>
        <FormFooter
          isLoading={isLoading}
          previousButtonAction={displayPreviousForm}
          hasPreviousButton
          width="100%"
          actionText="Save and Continue"
        />
      </FormWrapperStyle>
    </StyleRoot>
  );
};

const DocumentFormView = ({
  initialValues,
  onSubmit,
  displayPreviousForm,
  isLoading,
  tableData,
}) => {
  return (
    <StyleRoot>
      <React.Fragment>
        <Formik
          enableReinitialize={true}
          initialValues={initialValues}
          onSubmit={onSubmit}
          displayPreviousForm={displayPreviousForm}
        >
          {(props) => {
            return (
              <DocumentForms
                {...props}
                isLoading={isLoading}
                displayPreviousForm={displayPreviousForm}
                tableData={tableData}
              />
            );
          }}
        </Formik>
      </React.Fragment>
    </StyleRoot>
  );
};
export default DocumentFormView;
