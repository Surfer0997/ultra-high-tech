import styles from './Form1.module.css';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FieldError } from 'react-hook-form/dist/types';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { sendFirstForm } from '../orderFormSlice';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';

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
    firstName: yup.string().required("Please enter your name, shiny star :)"),
    nickName: yup.string().required("I want to know your cool sercet name so hard (っ＾▿＾)っ (That\'s what she said)"),
    email: yup
      .string()
      .email('( ͡❛ ͜ʖ ͡❛) We can\'t send Oriflame adverts to this address')
      .required('( ͡❛ ͜ʖ ͡❛) Lemme just take a look'),
    phone: yup.string().matches(phoneRegExp, 'No, we can\'t sell this number to frauds :((('),
    aboutYou: yup.string(),
  })
  .required();

export function Form1() {

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    setFocus,
    setValue,
    formState: { errors: rawFormErrors, touchedFields: touched },
  } = useForm<IFormInputs>({
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    setFocus("firstName");
  }, [setFocus]);

  const formErrors: { [key: string]: undefined | FieldError } = {}; // To get only first error
  const errorKey = Object.keys(rawFormErrors)[0];
  formErrors[errorKey] = rawFormErrors[errorKey as keyof typeof rawFormErrors];


  const formData:IFormInputs = useSelector((state:RootState)=>state.orderForm.firstForm); // restore saved fields values
  useEffect(()=>{
   Object.entries(formData).forEach(
     ([name, value]) => setValue(name as keyof IFormInputs, value));
  }, [formData, setValue]);

  const mySubmitHandler = (data:IFormInputs) => {
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
      <p className={styles.invalidInput}>{touched.firstName && formErrors?.firstName?.message}</p>

      <input
        className={styles.inputs}
        {...register('nickName')}
        placeholder="Please give us your super cool nickname"
      />
      <p className={styles.invalidInput}>{touched.nickName && formErrors?.nickName?.message}</p>

      <input
        className={styles.inputs}
        {...register('email')}
        placeholder="We want to send you as much spam as we can ^-^"
      />
      <p className={styles.invalidInput}>{touched.email && formErrors?.email?.message}</p>

      <input
        className={styles.inputs}
        {...register('phone')}
        placeholder="Sometimes I want somebody to call me at 3 a.m. We'll do it for you!"
      />
      <p className={styles.invalidInput}>{touched.phone && formErrors?.phone?.message}</p>

      <textarea className={styles.inputs} {...register('aboutYou')} placeholder="About you" />
      
      <input className={`${styles.inputs} ${styles.submit}`} type="submit" value="Next step" />
    </form>
  );
}
