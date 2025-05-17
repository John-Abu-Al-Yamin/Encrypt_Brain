"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center min-h-screen p-4">
          <div className="w-full max-w-md p-8 space-y-6 text-center bg-white rounded-lg shadow-lg dark:bg-gray-800">
            <div className="space-y-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-16 h-16 mx-auto text-red-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
              <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
                Oops! Something went wrong
              </h1>
              <p className="text-gray-600 dark:text-gray-300">
                {error.message || "An unexpected error occurred"}
              </p>
              {error.digest && (
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Error ID: {error.digest}
                </p>
              )}
            </div>
            <button
              onClick={() => reset()}
              className="w-full px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition-colors"
            >
              Try Again
            </button>
            <div className="pt-4 text-sm text-gray-500 border-t border-gray-200 dark:border-gray-700 dark:text-gray-400">
              <p>
                If the problem persists, please contact support or refresh the
                page.
              </p>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}