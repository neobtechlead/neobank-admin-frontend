import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {useDropzone} from 'react-dropzone';
import Image from 'next/image';
import UploadFile from '@/assets/svgs/UploadFile.svg';
import {useFormContext,} from 'react-hook-form';
import {extractErrorMessage} from "@/utils/functions";

const baseStyle: React.CSSProperties = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderWidth: 2,
    padding: '30px',
    borderRadius: 5,
    borderStyle: 'dashed',
    backgroundColor: '#fff',
    color: '#bdbdbd',
    outline: 'none',
    transition: 'border .24s ease-in-out',
};

const focusedStyle = {
    borderColor: '#2196f3',
};

const acceptStyle = {
    borderColor: '#00e676',
};

const rejectStyle = {
    borderColor: '#ff1744',
};

interface Props {
    label: string;
    name: string;
    required?: boolean
}

const FormFileUploadWithLabel = ({label, name, required = false}: Props) => {
    const {
        register,
        unregister,
        setValue,
        formState: {errors},
    } = useFormContext()


    const [uploadedFile, setUploadedFile] = useState<File>()

    const onDrop = useCallback(
        (droppedFiles: any) => {
            const file = droppedFiles[0]
            setValue(name, file, {shouldValidate: true})
            setUploadedFile(file)
        },
        [setValue, name],
    )

    useEffect(() => {

        if (required) {
            register(name, {required: {value: true, message: `${label} is required`}})
        }
        register(name)
        return () => {
            unregister(name)
        }
    }, [register, unregister, name, required])

    const {
        getRootProps,
        getInputProps,
        isFocused,
        isDragAccept,
        isDragReject,
    } = useDropzone({
        accept: {
            'image/*': ['.jpeg', '.png'],
            'application/pdf': [],
        },
        onDrop,
    });

    const style = useMemo(
        () => ({
            ...baseStyle,
            ...(isFocused ? focusedStyle : {}),
            ...(isDragAccept ? acceptStyle : {}),
            ...(isDragReject ? rejectStyle : {}),
        }),
        [isFocused, isDragAccept, isDragReject]
    );


    return (
        <div className="flex flex-col gap-1">
            <label htmlFor={name} className="text-xs font-bold text-gray-600">
                {label} {required && <span className="text-red-500 font-black">*</span>}
            </label>
            <div {...getRootProps({style})}>
                <input id={name} {...getInputProps()} />
                <div className="flex flex-col justify-center gap-2 items-center text-center">
                    {
                        uploadedFile ? <div className='grid gap-1 grid-cols-4 mt-2'>


                            <div key={uploadedFile.name}>
                                <img
                                    src={URL.createObjectURL(uploadedFile)}
                                    alt={uploadedFile.name}
                                    style={{width: '100px', height: '100px'}}
                                />
                            </div>
                            )

                        </div> : <>

                            <span><Image src={UploadFile} alt=""/></span>
                            <span className="text-sm text-darkPurple-900">Choose Upload file</span>
                            <span className="text-sm text-black">Max file size: <span className="font-bold">5mb</span>.Supports: pdf, png, jpeg.</span>
                        </>
                    }


                </div>
            </div>
            <span className="text-xs text-red-700 text-left ">{extractErrorMessage(name, errors)}</span>
        </div>
    )

};

export default FormFileUploadWithLabel;
