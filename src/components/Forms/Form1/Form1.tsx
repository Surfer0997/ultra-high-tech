import styles from './Form1.module.css';
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

interface IFormInputs {
    firstName: string
    nickName: string
    aboutYou: string
    email:string
    phone: string
  }
  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
const schema = yup.object({
    firstName: yup.string().required('Введи будь-ласка ім\'я, мила :)'),
    nickName: yup.string().required('Я дуже хочу знати твоє круте таємне ім\'я (っ＾▿＾)っ'),
    email: yup.string().email('( ͡❛ ͜ʖ ͡❛) На цю адресу не вдасться вислати рекламу Оріфлейм').required('( ͡❛ ͜ʖ ͡❛) Дай хоч глянути'),
    phone: yup.string().matches(phoneRegExp, 'Ні, цей номер не продати шахраям :((('),
    aboutYou: yup.string(),
  }).required();

export function Form1() {
  const { register, handleSubmit, formState:{ errors } } = useForm<IFormInputs>({
    resolver: yupResolver(schema)
  });
  const [data, setData] = useState("");

  return (
    <form className={styles.form1} onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
      <h2>A little bit about you</h2>
      <input className={styles.inputs} {...register("firstName")} placeholder="What's your name, sweetie?" />
      <p className={styles.invalidInput}>{errors.firstName?.message}</p>

      <input className={styles.inputs} {...register("nickName")} placeholder="Please give us your super cool nickname" />
      <p className={styles.invalidInput}>{errors.nickName?.message}</p>

      <input className={styles.inputs} {...register("email")} placeholder="We want to send you as much spam as we can ^-^" />
      <p className={styles.invalidInput}>{errors.email?.message}</p>

      <input className={styles.inputs} {...register("phone")} placeholder="Sometimes I want somebody to call me at 3 a.m. We'll do it for you!" />
      <p className={styles.invalidInput}>{errors.phone?.message}</p>

      <textarea className={styles.inputs} {...register("aboutYou")} placeholder="About you" />
      <p>{data}</p>
      <input className={`${styles.inputs} ${styles.submit}`} type="submit" value="Final step" />
    </form>
  );
}
