import * as yup from 'yup';
import NumberOnly from '../../utils/numberOnly';

const SchemaAddForm = yup.object().shape({
    name:
        yup
            .string()
            .required("Name is a required field"),
    cpf:
        yup
            .string().required('CPF is a required field')
            .test(
                'cpf',
                'CPF must be exactly 11 characters',
                value => { return NumberOnly(value)?.length === 11 },
            ),
    email:
        yup
            .string()
            .matches(/\D+/g, 'only digits here')
            .email()
            .required('Email is a required field'),
    maritalStatus:
        yup
            .number(),
    spouseName:
        yup
            .string()
            .when('maritalStatus', {
                is: 1,
                then:
                    yup
                        .string()
                        .required('Spouse Name is a required field')
            })
})

export default SchemaAddForm;