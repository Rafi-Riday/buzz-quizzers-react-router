import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faXmark } from '@fortawesome/free-solid-svg-icons';

const commonThemes = { theme: 'colored', position: "bottom-right", hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, };

const infoToast = (toastText, toastTime) => {
    const mainToastFunc = () => toast.info((toastText || 'Success!'), { ...commonThemes, autoClose: toastTime || 3000, icon: <FontAwesomeIcon icon={faCheckCircle} />, });
    mainToastFunc();
};

const successToast = (toastText, toastTime) => {
    const mainToastFunc = () => toast.success((toastText || 'Success!'), { ...commonThemes, autoClose: toastTime || 3000, icon: <FontAwesomeIcon icon={faCheckCircle} />, });
    mainToastFunc();
};

const errorToast = (toastText, toastTime) => {
    const mainToastFunc = () => toast.error((toastText || 'Wrong!'), { ...commonThemes, autoClose: toastTime || 3000, icon: <FontAwesomeIcon icon={faXmark} />, });
    mainToastFunc();
};

export { infoToast, successToast, errorToast };

/* usage */
// import { infoToast, successToast } from 'utilities/toasts';
// import { ToastContainer } from 'react-toastify';
//
// // toast theming
//   const contextClass = {
//     success: "bg-emerald-600",
//     info: "bg-blue-500",
//   };
//
// infoToast('Done Nicely!', 3000)
//
// {/* toast */}
// <ToastContainer toastClassName={({ type }) => contextClass[type || "info"] + " relative flex p-1 min-h-10 rounded-xl justify-between overflow-hidden cursor-pointer py-4 px-3 mt-3"} />
//