import {z} from 'zod';
import parseDate from 'date-fns/parse';


const selectSchema = z.object({
    label: z.string(),
    value: z.string()
})

const dateRangeValidator = (startDate: string, endDate: string): boolean => {
    if (!startDate && !endDate) {
        return true;
    }

    try {
        const parsedStartDate = parseDate(startDate, 'yyyy-MM-dd', new Date()).getTime();
        const parsedEndDate = parseDate(endDate, 'yyyy-MM-dd', new Date()).getTime();
        return parsedStartDate <= parsedEndDate;
    } catch (ex) {
        return false;
    }
};

export const MerchantReportFormFilter = z.object({
    merchant: selectSchema,
    startDate: z.string(),
    endDate: z.string(),
    status: selectSchema,
}).refine((schema) => dateRangeValidator(schema.startDate, schema.endDate), {
    message: 'end date must be greater than start date',
    path: ['endDate'],
});

export const CustomerReportFormFilter = z.object({
    phoneNumber: z.string(),
    startDate: z.string(),
    endDate: z.string(),
    type: selectSchema,
    status: selectSchema
}).refine((schema) => dateRangeValidator(schema.startDate, schema.endDate), {
    message: 'end date must be greater than start date',
    path: ['endDate'],
});

export type MerchantReportFormFilterFields = z.input<typeof MerchantReportFormFilter>;

export type CustomerReportFormFilterFields = z.input<typeof CustomerReportFormFilter>;
