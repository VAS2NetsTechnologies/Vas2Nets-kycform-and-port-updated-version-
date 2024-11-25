const generateCSVData = (records) => {
  return records.map((record) => {
    // console.log(record);

    const {
      id,
      user_id,
      business_name,
      business_nature,
      number_of_employee,
      address_of_proprietor,
      business_address,
      business_email,
      business_phone_number,
      business_tax_id_number,
      date_created,
      dateIncorporation,
      registrationCountry,
      name_of_proprietor,
      pepStatus,
      signatory_name,
      socialMedias,
    } = record;

    const pepStatusDetails = pepStatus.map((pep, index) => ({
      [`pep_question_${index + 1}`]: pep.question,
      [`pep_answer_${index + 1}`]: pep.answer,
      [`pep_details_${index + 1}`]: pep.details || null,
    }));

    const pepStatusFlat = Object.assign({}, ...pepStatusDetails);

    const socialMediaDetails = socialMedias.map((social, index) => ({
      [`social_media_handle_${index + 1}`]: social.handle,
      [`social_media_name_${index + 1}`]: social.name,
    }));

    const socialMediaFlat = Object.assign({}, ...socialMediaDetails);

    return {
      id,
      user_id,
      business_name,
      business_nature,
      number_of_employee,
      address_of_proprietor,
      business_address,
      business_email,
      business_phone_number,
      business_tax_id_number,
      date_created,
      dateIncorporation,
      registrationCountry,
      name_of_proprietor,
      ...pepStatusFlat,
      signatory_name,
      ...socialMediaFlat,
    };
  });
};

export const soleCSV = (records) => {
  const csvData = generateCSVData(records);
  return csvData;
};
