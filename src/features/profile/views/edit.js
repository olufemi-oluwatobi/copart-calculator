import React, { Component } from "react";
import { Row, Col, Progress } from "antd";
import { ColumnTitles, SideProfileView, ButtonStyle } from "../../style";
import MainView from "../../mainview";
import "./index.css";
import { Link } from "react-router-dom";
import { ConfigContext, withContext } from "../../../config/configContext";
import UploadView from "../components/upload";
import BasicForm from "../views/formView";
import { fileToBase64 } from "../../../helpers/utils";
import {
  ContactFormView,
  BasicFormView,
  WorkFormView,
  QualificationFormView
} from "../components/forms";
import {
  basicFormValidationSchema,
  contactFormValidationSchema,
  qualificationFormValidationSchema,
  workFormValidationSchema
} from "../misc/validationSchemas";

let formInitValues;
class EditProfileView extends Component {
  state = {
    currentView: "basic",
    views: ["uploads", "basic", "contact", "work", "qualification"],
    email: "",
    uploadType: null,
    userData: this.props.value.userData
  };
  id = this.props.match.params.id;

  xx = "yes";
  componentDidMount() {
    this.props.getWorkInformation(this.id);
  }
  componentWillUnmount() {
    const { displayANewFormView } = this.props.value;
    displayANewFormView("basic");
  }

  handleClick = type => {
    this.setState({ uploadType: type });
    this.inputRef.click();
  };
  onUpload = async e => {
    const { uploadType } = this.state;
    const file = e.target.files[0];
    const { name } = file;
    const fileNameArr = name.split(".");
    const extension = fileNameArr[fileNameArr.length - 1];
    const b64 = await fileToBase64(file);
    const extensionType =
      uploadType && uploadType === "cv" ? "cvextension" : "coverextension";
    const type = uploadType && uploadType === "cv" ? "cv64" : "cover64";
    const data = {
      [type]: b64,
      [extensionType]: `.${extension}`
    };
    this.props.value.uploadDocument(this.id, data);
  };

  checkProfileCompletionProgress = () => {
    const { userData } = this.props.value;
    const data = { ...userData };
    delete data.Id;
    delete data.Type;
    const userDataValues = Object.values(data);
    const nonNullUserValues = [];
    userDataValues.forEach(value => {
      if (value) nonNullUserValues.push(value);
    });
    return Math.floor((nonNullUserValues.length / userDataValues.length) * 100);
  };

  componentDidUpdate(prevProps, _) {
    if (prevProps.value.userData !== this.props.value.userData) {
      this.setState({ email: this.props.value.userData.email });
      this.setState({ userData: this.props.value.userData });
    }
    if (prevProps.value.nextView !== this.props.value.nextView) {
      this.setState({ currentView: this.props.value.nextView });
    }
  }

  hasCompletedThisSegment = obj => {
    const values = Object.values(obj);
    const isCompleted = values.includes(null);
    console.log(isCompleted);
    return !isCompleted;
  };
  userDataHasBeenUpdated = values => {
    let hasBeenUpdated = false;
    const { userData } = this.props.value;
    const userValues = Object.values(userData);
    values.forEach(value => {
      if (!userValues.includes(value)) hasBeenUpdated = true;
    });
    return hasBeenUpdated;
  };
  handleSubmit = values => {
    const { userData, updateProfile, displayANewFormView } = this.props.value;
    const {
      match: {
        params: { id }
      }
    } = this.props;
    const { views, currentView } = this.state;
    const { push } = this.props.history;
    const { state: propsState } = this.props.location;
    const currentViewIndex = views.findIndex(view => view === currentView);
    const options = currentView === "qualification" && {
      push,
      path: propsState ? propsState.previousView : "/"
    };
    if (this.userDataHasBeenUpdated(Object.values(values))) {
      if (this.state.currentView === "work") {
        this.props.updateWorkInformation(
          this.props.value.userData.Id,
          values.workExperience
        );
      }
      updateProfile(values, id, views[currentViewIndex + 1], options);
    } else {
      displayANewFormView(
        views[currentViewIndex + 1] || views[currentViewIndex],
        options
      );
    }
  };
  onContinue = () => {
    const { currentView, views } = this.state;
    const index = views.findIndex(view => view === currentView);
    this.setState({ currentView: views[index + 1] });
  };
  contactFormValues = {
    email: this.state.Email || "",
    mobilePhone: "",
    address: ""
  };
  displayPreviousForm = () => {
    const { displayANewFormView } = this.props.value;
    const { currentView, views } = this.state;

    const currentViewIndex = views.findIndex(view => view === currentView);
    displayANewFormView(views[currentViewIndex - 1]);
  };
  renderContent() {
    let contactFormInitValue = {
      Email: this.props.value.userData.Email || "",
      ContactNumber: this.props.value.userData.ContactNumber || "",
      Address: this.props.value.userData.Address || ""
    };

    let basicFormInitValue = {
      FirstName: this.props.value.userData.FirstName || "",
      LastName: this.props.value.userData.LastName || "",
      MiddleName: this.props.value.userData.MiddleName || "",
      Gender: this.props.value.userData.Gender || "",
      DOB: this.props.value.userData.DOB || "",
      Language: this.props.value.userData.Language || "",
      LanguageProficiency: this.props.value.userData.LanguageProficiency || "",
      Nationality: this.props.value.userData.Nationality || ""
    };

    let workInformation = {
      Employer: "",
      JobTitle: "",
      StartDate: "",
      EndDate: "",
      Industry: ""
    };

    // let workFormInitValue = {
    //   CurrentEmployer: this.props.value.userData.CurrentEmployer,
    //   CurrentPositionTitle:
    //     this.props.value.userData.CurrentPositionTitle || "",
    //   CurrentCompensation: this.props.value.userData.CurrentCompensation || "",
    //   InternationalJobExposure:
    //     this.props.value.userData.InternationalJobExposure || "",
    //   YearsInManagementPosition:
    //     this.props.value.userData.YearsInManagementPosition || "",
    //   IndustriesWorkedIn: this.props.value.userData.IndustriesWorkedIn || "",
    //   PreviousEmployer: this.props.value.userData.PreviousEmployer || "",
    //   PositionHeld: this.props.value.userData.PositionHeld || "",
    //   SizeOfTeamManaged: this.props.value.userData.SizeOfTeamManaged || "",
    //   NoticePeriod: this.props.value.userData.NoticePeriod || ""
    // };

    const checkIfUserHasWorkInformation = () => {
      return this.props.workInformation[0]
        ? this.props.workInformation
        : [workInformation];
    };
    let qualificationsInitValue = {
      ITProficiency: this.props.value.userData.ITProficiency || "",
      EducationalQualifications: this.props.value.userData
        .EducationalQualifications,
      ProfessionalQualifications:
        this.props.value.userData.ProfessionalQualifications || "",
      UserEducation: this.props.value.userData.UserEducation || ""
    };

    switch (this.state.currentView) {
      case "uploads":
        return (
          <UploadView
            onUpload={this.handleClick}
            onContinue={this.onContinue}
            uploadType={this.state.uploadType}
            loading={this.props.value.loading}
          />
        );
      case "basic":
        return (
          <BasicForm
            initialValues={basicFormInitValue}
            title="Basic Information"
            component={BasicFormView}
            displayPreviousForm={this.displayPreviousForm}
            validationSchema={basicFormValidationSchema}
            onSubmit={this.handleSubmit}
            isLoading={this.props.value.isLoading}
          />
        );
      case "contact":
        return (
          <BasicForm
            initialValues={contactFormInitValue}
            title="Contact Information"
            component={ContactFormView}
            displayPreviousForm={this.displayPreviousForm}
            validationSchema={contactFormValidationSchema}
            onSubmit={this.handleSubmit}
            isLoading={this.props.value.isLoading}
          />
        );
      case "work":
        return (
          <BasicForm
            initialValues={{ workExperience: checkIfUserHasWorkInformation() }}
            title="Work Information"
            component={WorkFormView}
            displayPreviousForm={this.displayPreviousForm}
            validationSchema={workFormValidationSchema}
            onSubmit={this.handleSubmit}
            isLoading={this.props.value.isLoading}
          />
        );
      case "qualification":
        return (
          <BasicForm
            initialValues={qualificationsInitValue}
            title="Qualification & Cover letter"
            component={QualificationFormView}
            displayPreviousForm={this.displayPreviousForm}
            validationSchema={qualificationFormValidationSchema}
            onSubmit={this.handleSubmit}
            isLoading={this.props.value.isLoading}
          />
        );
    }
  }
  render() {
    const { userData } = this.props.value;
    let isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const progress = [
      {
        text: "Resume upload",
        completed: this.hasCompletedThisSegment({
          CVPath: userData.CVPath
        })
      },
      {
        text: "Basic Information",
        completed: this.hasCompletedThisSegment({
          CurrentEmployer: userData.CurrentEmployer,
          CurrentPositionTitle: userData.CurrentPositionTitle,
          CurrentCompensation: userData.CurrentCompensation,
          InternationalJobExposure: userData.InternationalJobExposure,
          YearsInManagementPosition: userData.YearsInManagementPosition,
          IndustriesWorkedIn: userData.IndustriesWorkedIn,
          PreviousEmployer: userData.PreviousEmployer,
          PositionHeld: userData.PositionHeld,
          SizeOfTeamManaged: userData.SizeOfTeamManaged,
          NoticePeriod: userData.NoticePeriod
        })
      },
      {
        text: "Contact Information",
        completed: this.hasCompletedThisSegment({
          Email: userData.Email,
          ContactNumber: userData.ContactNumber,
          Address: userData.Address
        })
      },
      {
        text: "work information",
        completed: this.hasCompletedThisSegment({
          FirstName: userData.FirstName,
          LastName: userData.LastName,
          MiddleName: userData.MiddleName,
          Gender: userData.Gender,
          DOB: userData.DOB,
          Nationality: userData.Nationality
        })
      },
      {
        text: "Qualification",
        completed: this.hasCompletedThisSegment({
          ITProficiency: userData.ITProficiency,
          EducationalQualifications: userData.EducationalQualifications,
          ProfessionalQualifications: userData.ProfessionalQualifications,
          UserEducation: userData.UserEducation
        })
      }
    ];
    return (
      <MainView>
        <input
          ref={input => {
            this.inputRef = input;
          }}
          onChange={this.onUpload}
          type="file"
          hidden
        />
        <Row
          gutter={24}
          type="flex"
          style={{
            marginTop: "15vh",
            textAlign: "left",
            justifyContent: "center"
          }}
        >
          <Col
            className="action_wrapper"
            flex={"1 1 200px"}
            style={{ padding: "10px" }}
          >
            <div
              className={"nav_text"}
              style={{
                paddingBottom: "2px",
                display: "flex",
                flexDirection: "row",
                borderBottom: "1px solid rgba(22, 40, 40, 0.1)"
              }}
            >
              {!isMobile
                ? [
                    "Uploads",
                    "Basic information",
                    "Contact Information",
                    "Work Information",
                    "Qualification"
                  ].map(text => (
                    <div>
                      <span
                        className={
                          this.state.currentView === text.toLowerCase()
                            ? "current_view"
                            : null
                        }
                        style={{
                          color:
                            this.state.currentView ===
                              text.split(" ")[0].toLowerCase() && "#00A3A1"
                        }}
                      >
                        {text}
                      </span>
                      {text !== "Qualification" && (
                        <img
                          src={require("../../../assets/images/arrow-right.svg")}
                        />
                      )}
                    </div>
                  ))
                : this.state.currentView}
            </div>
            <div style={{ width: "100%", padding: "2px 10px" }}>
              {this.renderContent()}{" "}
              {/*<UploadView onUpload={this.handleClick} />*/}
            </div>
          </Col>
          <Col className="side_view" flex="1 1 200px">
            <div style={{ display: "flex", marginTop: "3px" }}>
              <Progress
                type="dashboard"
                strokeColor={"#F2994A"}
                percent={this.checkProfileCompletionProgress()}
                width={80}
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: "7px",
                  borderBottom: "1px solid rgba(22, 40, 40, 0.1)",
                  marginTop: "10px"
                }}
              >
                <span className="status_text">Profile completion status:</span>
                <span className="completion_stage">Almost there!!! 💪</span>
              </div>
            </div>
            <div>
              {progress.map(list => (
                <div style={{ display: "flex", marginTop: "10px" }}>
                  <img
                    src={require(`../../../assets/images/${
                      list.completed ? "completed" : "incomplete"
                    }.svg`)}
                  />
                  <span className="progress_text">{list.text}</span>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </MainView>
    );
  }
}
export default withContext(EditProfileView);
