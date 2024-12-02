'use client';
import React, { useState } from 'react'
import { CldUploadWidget, CldImage } from 'next-cloudinary';

interface CloudinaryResults {
    public_id: string;
}


const UploadPage = () => {

    const [publicId, setPublicId] = useState('');
    console.log(publicId);

    return (
        <>
            {publicId && <CldImage src={publicId} width={270} height={270} alt="A coffee image" />}
            <CldUploadWidget
                uploadPreset="byxyw1yx"
                options={{
                    sources: ["local"],
                    multiple: false,
                    maxFiles: 5
                }}
                onError={(error) => console.error("Upload Error:", error)}
                onSuccess={(result) => {
                    const info = result.info as CloudinaryResults;
                    setPublicId(info.public_id);
                }
                }>
                {({ open }) =>
                    <button
                        className="btn btn-primary"
                        onClick={() => open()}
                    >Upload</button>}
            </CldUploadWidget>
        </>
    )
}

export default UploadPage








