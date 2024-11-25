const generateCSVData = (records) => {
    return records.map((record) => {
      // console.log(record);
  
      const {
        id,
        user_id,
        Id_number,
        address,
        country,
        date_created,
        dob,
        email,
        employer_name,
        expiry_date,
        gender,
        issue_date,
        means_of_id,
        name,
        occupation,
        pepStatus,
        phone_number,
        position_held,
        resident_permit_Number,
        signatoryName,
        socialMedias,
        state_of_origin,
        tax_id_number,
        work_address,
      } = record;
  
      // Map PEP status
      const pepStatusOne = pepStatus?.[0] ? `${pepStatus[0].name} - ${pepStatus[0].status}` : null;
      const pepStatusTwo = pepStatus?.[1] ? `${pepStatus[1].name} - ${pepStatus[1].status}` : null;
  
      // Map social media details
      const socialMediaOne = socialMedias?.[0] ? `${socialMedias[0].platform} - ${socialMedias[0].handle}` : null;
      const socialMediaTwo = socialMedias?.[1] ? `${socialMedias[1].platform} - ${socialMedias[1].handle}` : null;
      const socialMediaThree = socialMedias?.[2] ? `${socialMedias[2].platform} - ${socialMedias[2].handle}` : null;
  
      return {
        id,
        user_id,
        Id_number,
        address,
        country,
        date_created,
        dob,
        email,
        employer_name,
        expiry_date,
        gender,
        issue_date,
        means_of_id,
        name,
        occupation,
        pepStatusOne,
        pepStatusTwo,
        phone_number,
        position_held,
        resident_permit_Number,
        signatoryName,
        socialMediaOne,
        socialMediaTwo,
        socialMediaThree,
        state_of_origin,
        tax_id_number,
        work_address,
      };
    });
  };
  
  export const indiCSV = (records) => {
    const csvData = generateCSVData(records);
    return csvData;
  };
  