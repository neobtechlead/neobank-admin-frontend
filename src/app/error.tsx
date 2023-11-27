'use client'

interface Props {
    onRetry: () => void

}

const ErrorPage = ({onRetry}: Props) => {
    return (
        <div className="flex justify-center h-screen mt-8">
            <div className="text-center">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-16 h-16 text-red-500 mb-4"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                    />
                </svg>
                <h1 className="text-2xl font-semibold text-gray-800 mb-2">Oops! Something went wrong.</h1>
                <p className="text-gray-600 mb-4">We encountered an error. Please try again.</p>
                <button
                    className="bg-darkPurple-900 text-white px-4 py-2 rounded-md hover:bg-purple-800 focus:outline-none focus:shadow-outline-blue"
                    onClick={() => {
                        console.log("called")
                        onRetry()

                    }}
                >
                    Retry
                </button>
            </div>
        </div>
    );
};

export default ErrorPage;
