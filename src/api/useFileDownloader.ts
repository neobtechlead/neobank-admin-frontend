import {useState} from 'react';
import http from "@/api/http";
import {toast} from "react-toastify";
import useReportStores from "@/stores/report/reports";
import {format} from "date-fns";

const BASE_URL = `${process.env.NEXT_PUBLIC_ADMIN_BASE_URL}`

const useFileDownloader = () => {
    const [isLoading, setIsLoading] = useState(false);
    const {selectMerchantReportType: type} = useReportStores()

    const downloadFile = async (id: string, rows = 1000, pageNumber = 1) => {
        try {
            setIsLoading(true);
            const response = await http.get(`${BASE_URL}/merchants/${id}/transactions/csv`, {
                params: {type, rows, pageNumber},
                responseType: 'blob',
            });
            const downloadUrl = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = downloadUrl;
            const filename = `${type}_${format(new Date(), "ddMMyyyyHHmmss")}.csv`;
            link.setAttribute('download', filename);
            document.body.appendChild(link);
            link.click();
            link.parentNode?.removeChild(link);
        } catch (error) {
            toast.error('Something went wrong. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return {downloadFile, isLoading};
};

export default useFileDownloader;
