import React from 'react';

const LoadingButton = ({ onClick, isLoading, children }) => {
    return (
        <button
            onClick={onClick}
            disabled={isLoading}
            className={`relative flex items-center justify-center p-3 text-white rounded-lg overflow-hidden mt-5 ${isLoading ? 'bg-blue-500' : 'bg-blue-700 hover:bg-blue-600'}`}
        >
            {isLoading && (
                <span className="absolute inset-0 bg-blue-300 transition-all duration-300 ease-in-out" style={{ width: '100%', height: '100%', animation: 'loadingAnimation 2s linear infinite' }} />
            )}
            <span className={`relative`}>{children}</span>
            <style>
                {`
        @keyframes loadingAnimation {
            0% {
                transform: translateX(0%);
            }
            30% {
                transform: translateX(50%);
            }
            50% {
                transform: translateX(70%);
            }
            52%{
                transform: translateX(74%);
            }
            54%{
                transform: translateX(76%);
            }
            56%{
                transform: translateX(78%);
            }
            58%{
                transform: translateX(80%);
            }
            60%{
                transform: translateX(85%);
            }
            80% {
                transform: translateX(90%);
            }
            100%{
                transform: translateX(100%);
            }
        }
        `}
            </style>
        </button>
    );
};

export default LoadingButton;
