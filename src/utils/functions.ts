import {AxiosError} from "axios";
import _ from 'lodash'
import {format} from "date-fns";
import parseDate from "date-fns/parse";

export function formatCurrency(amount: number): string {
    return new Intl.NumberFormat('en-GH', {
        style: 'decimal',
    }).format(amount);
}


export function formatCurrencyAlt(amount: number): string {
    return new Intl.NumberFormat('en-GH', {
        style: 'decimal',
        currency: 'GHS',
        minimumFractionDigits: 2, // Set the minimum number of fraction digits to 2
    }).format(amount);
}

export function calculatePageInfo(pageNo: number, pageSize: number, totalElements: number): [number, number, boolean] {
    const pageOffset: number = pageNo * pageSize;
    const numberOfElements: number = Math.min(pageSize, (totalElements - pageOffset));
    const isFirstPage: boolean = pageNo === 0;
    return [pageOffset, numberOfElements, isFirstPage];
}

export function generateAvatarFallBack(name: string): string {
    return name.split(' ')
        .map(word => word[0])
        .filter(char => /[a-zA-Z]/.test(char)) // Filter out non-alphabet characters
        .slice(0, 2)
        .join('')
        .toUpperCase()
}


// Helper function to check if an error is an AxiosError
export const isAxiosError = (error: any): error is AxiosError => {
    return error.isAxiosError === true;
};


export const extractErrorMessage = (name: string, errors: Record<string, any>) => {
    const error = _.get(errors, name);
    return _.get(error, 'message', '');

};

export const convertPesewasToCedis = (pesewas: number): number => {
    return (pesewas / 100)

}

export const getInitials = (firstName: string, lastName: string): string => {
    if (!firstName || !lastName) return "NA"
    return `${firstName[0].toUpperCase()}${lastName[0].toUpperCase()}`;
}





export const generateArray = (arrayLength: number): number[] => {
    let temp: number[] = []
    for (let i = 0; i < arrayLength; i++) {
        temp.push(i)
    }
    return temp
}

export const formatDateAsISO = (dateString: string) => {
    const parsedDate = parseDate(dateString, 'yyyy-MM-dd', new Date());
    return format(parsedDate, "yyyy-MM-dd'T'HH:mm:ss.SSS");
}

export const formatAsIssuerId = (phoneNumber: string) => {
    return "0" + phoneNumber.slice(3)

}

export const getGreeting = (): string => {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();

    if (currentHour < 12) {
        return 'Good Morning';
    } else if (currentHour < 18) {
        return 'Good Afternoon';
    } else {
        return 'Good Evening';
    }
};













