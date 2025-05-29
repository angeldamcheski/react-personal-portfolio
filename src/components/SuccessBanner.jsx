import { useEffect } from "react";

export const SuccessBanner = ({ message, show, onClose }) => {
  useEffect(() => {
    if(show){
        const timer = setTimeout(onClose, 3000)
        return ()=>clearTimeout(timer);
    }
  }, [show, onClose]);
  if (!show) return null;
  return (
    <div className="fixed bottom-0 left-0 w-full bg-green-600 text-white text-sm py-0 px-4 text-center z-50 shadow-md">
        <div className="flex justify-center items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
        </svg>
        {message}
        </div>
    </div>
  )
};
