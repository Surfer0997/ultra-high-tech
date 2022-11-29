import { useSelector } from "react-redux"
import { RootState } from "../../store/store"
import { Form1 } from "./Form1/Form1"
import { Form2 } from "./Form2/Form2"
import { Form3 } from "./Form3/Form3"

const forms = {
    1: <Form1/>,
    2: <Form2/>,
    3: <Form3/>
}

const OrderForms = () => {

    const currentFormIndex = useSelector((state:RootState)=>state.orderForm.currentForm);

    return <>
        {forms[currentFormIndex as 1 || 2 || 3]}
    </>
}

export default OrderForms;