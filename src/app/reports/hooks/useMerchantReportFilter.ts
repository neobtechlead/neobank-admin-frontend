import useGetMerchantsAndRoles, {mapApiDataToReportFormFields} from "@/api/hooks/queries/useGetMerchantsAndRoles";
import {useForm} from "react-hook-form";
import {MerchantReportFormFilter, MerchantReportFormFilterFields} from "@/utils/validations/schema/report";
import {zodResolver} from "@hookform/resolvers/zod";
import {FormFields} from "@/utils/types/form";
import {useMemo} from "react";
import {useMerchantReportFilterStore} from "@/stores/report/merchantReport";

const useMerchantReportFilter = () => {

    const {data, isLoading} = useGetMerchantsAndRoles()
    const {updateStoreParams} = useMerchantReportFilterStore()

    const methods = useForm<MerchantReportFormFilterFields>({
        defaultValues: {
            merchant: {label: 'Select Merchant', value: ''},
            startDate: "",
            endDate: "",
            status: {label: 'Select Status', value: ''}
        },
        mode: 'onBlur' || 'onSubmit',
        resolver: zodResolver(MerchantReportFormFilter)
    })

    const formFields: FormFields[] = useMemo(() => {
        return mapApiDataToReportFormFields(data, isLoading)

    }, [data]);

    const {handleSubmit, formState: {dirtyFields}} = methods

    const onSubmit = (values: MerchantReportFormFilterFields) => {
        const {merchant, status, startDate, endDate} = values
        const params = {
            ...(dirtyFields.merchant && {merchant}),
            ...(dirtyFields.status && {status}),
            ...(dirtyFields.startDate && {startDate}),
            ...(dirtyFields.endDate && {endDate})
        }
        updateStoreParams(params)
    }


    return {
        onSubmit,
        formFields,
        handleSubmit,
        methods,
    }


}

export default useMerchantReportFilter;