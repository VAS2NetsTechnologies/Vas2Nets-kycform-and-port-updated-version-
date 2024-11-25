const generateCSVData = (records) => {
    return records.map((record) => {
      // console.log(record);
  
      const {
        id,
        user_id,
        legal_name,
        trade_name,
        type_of_incorporation,
        No_of_employee,
        beneficiary_details,
        board_member_details,
        company_email,
        company_phonenumber,
        company_website,
        country_of_reg,
        date_created,
        date_of_incorporation,
        industryRegulator,
        point_of_contact_details,
        prim_business_address,
        questionnaires,
        reg_address,
        registration_number,
        signatory_details,
        tax_regNo,
        type_of_business,
      } = record;
  
      // Map point_of_contact_details
      const point_of_contact_name = point_of_contact_details ? point_of_contact_details[0] : null;
      const point_of_contact_date = point_of_contact_details ? point_of_contact_details[1] : null;
      const point_of_contact_position = point_of_contact_details ? point_of_contact_details[2] : null;
  
      // Map signatory details
      const signatoryOne = signatory_details?.signatoryOne ? `${signatory_details.signatoryOne.name} - ${signatory_details.signatoryOne.designation}` : null;
      const signatoryTwo = signatory_details?.signatoryTwo ? `${signatory_details.signatoryTwo.name} - ${signatory_details.signatoryTwo.designation}` : null;
  
      return {
        id,
        user_id,
        legal_name,
        trade_name,
        type_of_incorporation,
        No_of_employee,
        beneficiary_details: JSON.stringify(beneficiary_details),
        board_member_details: JSON.stringify(board_member_details),
        company_email,
        company_phonenumber,
        company_website,
        country_of_reg,
        date_created,
        date_of_incorporation,
        industryRegulator,
        point_of_contact_name,
        point_of_contact_date,
        point_of_contact_position,
        prim_business_address,
        questionnaires: JSON.stringify(questionnaires),
        reg_address,
        registration_number,
        signatoryOne,
        signatoryTwo,
        tax_regNo,
        type_of_business,
      };
    });
  };
  
  export const llcCSV = (records) => {
    const csvData = generateCSVData(records);
    return csvData;
  };
  