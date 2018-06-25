import React, { Component } from "react";

class Panel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameValue: props.item.name,
      emailValue: props.item.email,
      cityValue: props.item.city,
      phoneValue: props.item.phone,
      websiteValue: props.item.website,
      companyNameValue: props.item.companyName
    };
  }

  onClose = () => {
    this.props.close();
  };

  onSave = () => {
    this.props.close();
    const data = {
      id: this.props.item.id,
      name: this.state.nameValue,
      email: this.state.emailValue,
      city: this.state.cityValue,
      phone: this.state.phoneValue,
      website: this.state.websiteValue,
      companyName: this.state.companyNameValue
    };
    this.props.updateUser(data);
  };

  handleNameChange = event => {
    this.setState({ nameValue: event.target.value });
  };

  handleEmailChange = event => {
    this.setState({ emailValue: event.target.value });
  };

  handleCityChange = event => {
    this.setState({ cityValue: event.target.value });
  };

  handlePhoneChange = event => {
    this.setState({ phoneValue: event.target.value });
  };

  handleWebsiteChange = event => {
    this.setState({ websiteValue: event.target.value });
  };

  handleCompanyNameChange = event => {
    this.setState({ companyNameValue: event.target.value });
  };

  render() {
    return (
      <div className="Modal">
        <div className="ModalContent">
          <h1>Edit user data</h1>
          <form onSubmit={this.handleSubmit}>
            <label>
              Name:
              <input
                type="text"
                value={this.state.nameValue}
                onChange={this.handleNameChange}
              />
            </label>
            <label>
              Email:
              <input
                type="text"
                value={this.state.emailValue}
                onChange={this.handleEmailChange}
              />
            </label>
            <label>
              City:
              <input
                type="text"
                value={this.state.cityValue}
                onChange={this.handleCityChange}
              />
            </label>
            <label>
              Phone:
              <input
                type="text"
                value={this.state.phoneValue}
                onChange={this.handlePhoneChange}
              />
            </label>
            <label>
              Website:
              <input
                type="text"
                value={this.state.websiteValue}
                onChange={this.handleWebsiteChange}
              />
            </label>
            <label>
              CompanyName:
              <input
                type="text"
                value={this.state.companyNameValue}
                onChange={this.handleCompanyNameChange}
              />
            </label>
          </form>
          <div className="Footer">
            <button onClick={this.onSave}>Save</button>
            <button onClick={this.onClose}>Cancel</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Panel;
