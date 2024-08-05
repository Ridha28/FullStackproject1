import React, { useState } from 'react';
import "../assets/styles/Taxcal2.css";
import { Link } from 'react-router-dom';


const TaxForm = () => {
  const [values, setValues] = useState({
    lifeInsurance: '',
    ppf: '',
    taxSavingFD: '',
    housingLoanPrincipal: '',
    elss: '',
    selfFamily: '',
    preventiveCheckup: '',
    parentsBelow60: '',
    parentsAbove60: '',
    hra: '',
    nps: '',
    donation: '',
    savingInterest: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  return (
    <div className="form-container">
      <form>
        <h2>Under 80C</h2>
        <div className="form-field">
          <label>Life Insurance Premium</label>
          <input
            type="text"
            name="lifeInsurance"
            value={values.lifeInsurance}
            onChange={handleInputChange}
            placeholder="Enter amount"
          />
        </div>
        <div className="form-field">
          <label>Public Provident Fund</label>
          <input
            type="text"
            name="ppf"
            value={values.ppf}
            onChange={handleInputChange}
            placeholder="Enter amount"
          />
        </div>
        <div className="form-field">
          <label>Tax Saving Fixed Deposit</label>
          <input
            type="text"
            name="taxSavingFD"
            value={values.taxSavingFD}
            onChange={handleInputChange}
            placeholder="Enter amount"
          />
        </div>
        <div className="form-field">
          <label>Repayment of Principal on Housing Loan</label>
          <input
            type="text"
            name="housingLoanPrincipal"
            value={values.housingLoanPrincipal}
            onChange={handleInputChange}
             placeholder="Enter amount"
          />
        </div>
        <div className="form-field">
          <label>Equity Linked Saving Schemes (ELSS)</label>
          <input
            type="text"
            name="elss"
            value={values.elss}
            onChange={handleInputChange}
             placeholder="Enter amount"
          />
        </div>

        <h2>Under 80D</h2>
        <div className="form-field">
          <label>For Self & Family</label>
          <input
            type="text"
            name="selfFamily"
            value={values.selfFamily}
            onChange={handleInputChange}
            placeholder="Enter amount"
          />
        </div>
        <div className="form-field">
          <label>Preventive Health Check-up</label>
          <input
            type="text"
            name="preventiveCheckup"
            value={values.preventiveCheckup}
            onChange={handleInputChange}
            placeholder="Enter amount"
          />
        </div>
        <div className="form-field">
          <label>For Parents (Below 60 years)</label>
          <input
            type="text"
            name="parentsBelow60"
            value={values.parentsBelow60}
            onChange={handleInputChange}
             placeholder="Enter amount"
          />
        </div>
        <div className="form-field">
          <label>For Parents (Above 60 years)</label>
          <input
            type="text"
            name="parentsAbove60"
            value={values.parentsAbove60}
            onChange={handleInputChange}
            placeholder="Enter amount"
          />
        </div>

        <h2>Under Other Deductions</h2>
        <div className="form-field">
          <label>House Rent Allowance (HRA)</label>
          <input
            type="text"
            name="hra"
            value={values.hra}
            onChange={handleInputChange}
             placeholder="Enter amount"
          />
        </div>
        <div className="form-field">
          <label>Employee Contribution to NPS</label>
          <input
            type="text"
            name="nps"
            value={values.nps}
            onChange={handleInputChange}
            placeholder="Enter amount"
          />
        </div>
        <div className="form-field">
          <label>Donations</label>
          <input
            type="text"
            name="donation"
            value={values.donation}
            onChange={handleInputChange}
            placeholder="Enter amount"
          />
        </div>
        <div className="form-field">
          <label>Saving Account Interest</label>
          <input
            type="text"
            name="savingInterest"
            value={values.savingInterest}
            onChange={handleInputChange}
             placeholder="Enter amount"
          />
        </div>
        <Link to='/taxcal3'>
          <button type="submit">Next</button>
        </Link>
      </form>
    </div>
  );
};

export default TaxForm;





