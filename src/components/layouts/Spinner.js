import React from "react";

export default function Spinner() {
  return (
    <div>
      <div className="demo-only" style={{ height: "6rem", marginTop: "400px" }}>
        <div role="status" className="slds-spinner slds-spinner_medium">
          <span className="slds-assistive-text">Loading</span>
          <div className="slds-spinner__dot-a" />
          <div className="slds-spinner__dot-b" />
        </div>
      </div>
    </div>
  );
}
