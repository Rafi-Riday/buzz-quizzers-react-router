import React from 'react';
import { ToastContainer } from 'react-toastify';


const Toast = () => {

    const contextClass = {
        success: "bg-[#00867b]",
        info: "bg-blue-500",
    };

    return (
        <div>
            {/* toast */}
            <ToastContainer toastClassName={({ type }) => contextClass[type || "info"] + " relative flex p-1 min-h-10 rounded-xl justify-between overflow-hidden cursor-pointer py-4 px-3 mt-1 sm:mt-2 lg:mt-3"} />
        </div>
    );
};

export default Toast;