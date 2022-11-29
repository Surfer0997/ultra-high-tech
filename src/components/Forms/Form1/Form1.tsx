import styles from './Form1.module.css';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FieldError } from 'react-hook-form/dist/types';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { sendFirstForm } from '../orderFormSlice';

interface IFormInputs {
  firstName: string;
  nickName: string;
  aboutYou: string;
  email: string;
  phone: string;
}
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const schema = yup
  .object({
    firstName: yup.string().required("Введи будь-ласка ім'я, зірочка :)"),
    nickName: yup.string().required("Я дуже хочу знати твоє круте таємне ім'я (っ＾▿＾)っ"),
    email: yup
      .string()
      .email('( ͡❛ ͜ʖ ͡❛) На цю адресу не вдасться вислати рекламу Оріфлейм')
      .required('( ͡❛ ͜ʖ ͡❛) Дай хоч глянути'),
    phone: yup.string().matches(phoneRegExp, 'Ні, цей номер не продати шахраям :((('),
    aboutYou: yup.string(),
  })
  .required();

export function Form1() {

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors: rawFormErrors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });

  const formErrors: { [key: string]: undefined | FieldError } = {}; // To get only first error
  const errorKey = Object.keys(rawFormErrors)[0];
  formErrors[errorKey] = rawFormErrors[errorKey as keyof typeof rawFormErrors];

  const [data, setData] = useState('');

  console.log(formErrors?.firstName?.message);
  const mySubmitHandler = (data:IFormInputs) => {
    setData(JSON.stringify(data));
    dispatch(sendFirstForm(data));
  }
  return (
    <form className={styles.form1} onSubmit={handleSubmit(mySubmitHandler)}>
      <h2>A little bit about you</h2>
      {/* <Controller
        name="firstName"
        control={control}
        render={({ field }) => (
          <FormInput
            {...field}
            inputConfig={{ placeholder: 'Please give us your super cool nickname' }}
          />
        )}
      /> */}
      <input className={styles.inputs} {...register('firstName')} placeholder="What's your name, sweetie?" />
      <p className={styles.invalidInput}>{formErrors?.firstName?.message}</p>

      <input
        className={styles.inputs}
        {...register('nickName')}
        placeholder="Please give us your super cool nickname"
      />
      <p className={styles.invalidInput}>{formErrors?.nickName?.message}</p>

      <input
        className={styles.inputs}
        {...register('email')}
        placeholder="We want to send you as much spam as we can ^-^"
      />
      <p className={styles.invalidInput}>{formErrors?.email?.message}</p>

      <input
        className={styles.inputs}
        {...register('phone')}
        placeholder="Sometimes I want somebody to call me at 3 a.m. We'll do it for you!"
      />
      <p className={styles.invalidInput}>{formErrors?.phone?.message}</p>

      <textarea className={styles.inputs} {...register('aboutYou')} placeholder="About you" />
      <p>{data}</p>
      <input className={`${styles.inputs} ${styles.submit}`} type="submit" value="Final step" />
    </form>
  );
}
