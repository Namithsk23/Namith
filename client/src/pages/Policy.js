import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p>Data Collection: Describe the types of data you collect from users.</p>
          <p>Purpose of Data Collection: Explain why you collect user data and how you use it. </p>
          <p>Data Sharing: Clarify whether you share user data with third parties, such as service providers, advertisers.</p>
          <p>Security Measures: Outline the security measures you have in place to protect user data from unauthorized access, disclosure, alteration, or destruction.</p>
          <p>User Rights: Inform users about their rights regarding their personal data. This may include the right to access, correct, or delete their data, as well as the ability to opt out of certain data processing activities, such as marketing communications.</p>
          <p>Cookies and Tracking Technologies: If your website or app uses cookies or other tracking technologies, and how users can manage their preferences, such as opting out of non-essential cookies.</p>
          <p>Updates to Privacy Policy: State that you may update the privacy policy periodically and provide the date of the last update. </p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
