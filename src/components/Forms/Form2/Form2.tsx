import styles from '../Form1/Form1.module.css';
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

interface IFormInputs {
    firstName: string
    category: string
    aboutYou: string
  }

const schema = yup.object({
    firstName: yup.string().required(),
    age: yup.number().positive().integer().required(),
    aboutYou: yup.string(),
  }).required();

export function Form2() {
  const { register, handleSubmit, formState:{ errors, touchedFields } } = useForm<IFormInputs>({
    resolver: yupResolver(schema)
  });
  const [data, setData] = useState("");

  return (
    <form className={styles.form1} onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
      <h2>Now let's fill your full address for stalkers</h2>
      <input className={styles.inputs} {...register("firstName")} placeholder="What's your name, sweetie?" />
      <p className={styles.invalidInput}>{errors.firstName?.message && 'Введи будь-ласка ім\'я, мила :)'}</p>
      <select className={styles.inputs} {...register("category", { required: true })}>
        <option value="">Select...</option>
        <option value="A">Option A</option>
        <option value="B">Option B</option>
      </select>
      <textarea className={styles.inputs} {...register("aboutYou")} placeholder="About you" />
      <p>{data}</p>
      <input className={`${styles.inputs} ${styles.submit}`} type="submit" value="Final step" />
    </form>
  );
}
