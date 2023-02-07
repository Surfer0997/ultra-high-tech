import styles from '../Form1/Form1.module.css';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FieldError } from 'react-hook-form/dist/types';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { sendSecondForm } from '../orderFormSlice';
import { CLOSING } from 'ws';

interface IFormInputs {
  country: string;
  city: string;
  street: string;
  category: string;
  wishes: string;
  house: string;
}

const schema = yup
  .object({
    country: yup.string().required('Now shipping only to the best country in the world'),
    city: yup.string().required("Your city, of course in not as good as Ternopil, but it's still important for us"),
    street: yup.string().required('How we will deliever your book without your street name?'),
    house: yup.number().positive().integer().required('Enter your house number, we will use it wisely (shhh)'),
    aboutYou: yup.string(),
    wishes: yup.string(),
  })
  .required();

export function Form2() {
  const {
    register,
    handleSubmit,
    formState: { errors: rawFormErrors, touchedFields: touched },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });

  const [data, setData] = useState('');
  const dispatch = useDispatch();

  const formErrors: { [key: string]: undefined | FieldError } = {}; // To get only first error
  const errorKey = Object.keys(rawFormErrors)[0];
  formErrors[errorKey] = rawFormErrors[errorKey as keyof typeof rawFormErrors];

  const mySubmitHandler = (data: IFormInputs) => {
   
    setData(JSON.stringify(data));
    dispatch(sendSecondForm(data));
  };

  return (
    <form className={styles.form1} onSubmit={handleSubmit(mySubmitHandler)}>
      <h2>Now let's fill your full address for stalkers</h2>

      <select className={styles.inputs} {...register('country', { required: true })} defaultValue="Ukraine">
        <option value="Ukraine">Ukraine</option>
      </select>

      <input className={styles.inputs} {...register('city')} placeholder="Fill in your city" />
      <p className={styles.invalidInput}>{touched.city && formErrors?.city?.message}</p>

      <input className={styles.inputs} {...register('street')} placeholder="Fill in your street" />
      <p className={styles.invalidInput}>{touched.street && formErrors?.street?.message}</p>

      <input className={styles.inputs} {...register('house')} placeholder="Fill in your house number" />
      <p className={styles.invalidInput}>{touched.house && formErrors?.house?.message}</p>

      {/* <select className={styles.inputs} {...register('category', { required: true })}>
        <option value="">Select...</option>
        <option value="A">Option A</option>
        <option value="B">Option B</option>
      </select> */}

      <textarea className={styles.inputs} {...register('wishes')} placeholder="Special wishes" />

      <input className={`${styles.inputs} ${styles.submit}`} type="submit" value="Final step" />
    </form>
  );
}
