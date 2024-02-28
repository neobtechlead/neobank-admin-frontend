import {useForm} from "react-hook-form";
import {CustomerReportFormFilter, CustomerReportFormFilterFields} from "@/utils/validations/schema/report";
import {zodResolver} from "@hookform/resolvers/zod";
import {useCustomerReportFilterStore} from "@/stores/report/merchantReport";

const useCustomerReportFilter = () => {


    const {updateStoreParams} = useCustomerReportFilterStore()

    const methods = useForm<CustomerReportFormFilterFields>({
        defaultValues: {
            phoneNumber: "",
            type: {label: 'Select Type', value: ''},
            startDate: "",
            endDate: "",
            status: {label: 'Select Status', value: ''}
        },
        mode: 'onBlur' || 'onSubmit',
        resolver: zodResolver(CustomerReportFormFilter)
    })


    const {handleSubmit, register, reset, formState: {dirtyFields}} = methods

    const onSubmit = (values: CustomerReportFormFilterFields) => {
        const {phoneNumber, status, startDate, endDate, type} = values
        const params = {
            ...(dirtyFields.phoneNumber && {phoneNumber}),
            ...(dirtyFields.type && {type}),
            ...(dirtyFields.status && {status}),
            ...(dirtyFields.startDate && {startDate}),
            ...(dirtyFields.endDate && {endDate})
        }

        updateStoreParams(params)
    }


    return {
        onSubmit,
        register,
        reset,
        handleSubmit,
        methods,
    }


}

export default useCustomerReportFilter;