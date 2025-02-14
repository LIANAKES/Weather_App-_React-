import { Formik, Field, Form, ErrorMessage } from 'formik';
import { FormContainer, Input, Button, ErrorText, FormRow } from './styles';

interface WeatherFormProps {
  onSearch: (city: string) => void;
}

const WeatherForm = ({ onSearch }: WeatherFormProps) => {
  const initialValues = { city: '' };

  const validate = (values: { city: string }) => {
    const errors: { city?: string } = {};
    if (!values.city.trim()) {
      alert('Please enter a city name');
    }
    return errors;
  };

  const handleSubmit = (values: { city: string }) => {
    onSearch(values.city); 
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validate={validate}
    >
      {({ values, handleChange, handleBlur }) => (
        <FormContainer>
          <Form>
            <FormRow>
              <Field
                type="text"
                name="city"
                as={Input}
                placeholder="Enter city name"
                value={values.city}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <Button type="submit">Search</Button>
            </FormRow>
            <ErrorMessage name="city" component={ErrorText} />
          </Form>
        </FormContainer>
      )}
    </Formik>
  );
};

export default WeatherForm;
