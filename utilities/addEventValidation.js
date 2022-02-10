import * as Yup from 'yup';

const addEventValidation = Yup.object({
  firstName: Yup.string()
    .required('Required'),
  lastName: Yup.string()
    .required('Required'),
  email: Yup.string()
    .email('Email format is invalid')
    .required('Required'),
  contactNumber: Yup.number()
    .typeError('Must be a number')
    .positive('Cannot be negative')
    .integer('Not a valid number')
    .test(
      'numberLength',
      'Must be 10 digits',
      (value) => !value || (value && value.toString().length === 10),
    )
    .required('Required'),
  birthDate: Yup.date()
    .max(new Date(Date.now() - 441504000000), 'Minimum age required is 14')
    .required('Required'),
  gender: Yup.string()
    .required('Required'),
  panNumber: Yup.string()
    .required('Required')
    .length(10, 'Must be 10 characters')
    .matches(/[A-Z]{3}[ABCFGHLJPT]{1}[A-Z]{1}\d{4}[A-Z]{1}/, 'Invalid Format'),
  landmark: Yup.string().required('Required'),
  city: Yup.string().required('Required'),
  state: Yup.string().required('Required'),
  pinCode: Yup.number()
    .typeError('Must be a number')
    .positive('Cannot be negative')
    .integer('Not a valid number')
    .test(
      'numberLength',
      'Must be 6 digits',
      (value) => !value || (value && value.toString().length === 6),
    ),
});

export default addEventValidation;
