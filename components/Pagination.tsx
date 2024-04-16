import React from 'react'

function Pagination({limit, setLimit, totalPages, activePage}:any) {
    return (
      <ol className="mt-8 flex justify-center gap-1 text-xs font-medium">
        <li>
          <button
            className="inline-flex size-8 items-center justify-center rounded border border-gray-100 disabled:text-gray-500"
            onClick={() => setLimit(limit - 6)}
            disabled={limit === 6}
          >
            <span className="sr-only">Prev Page</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </li>

        {Array.from({ length: totalPages }, (_, i) => {
          return (
            <li key={i}>
              <button
                className={`block size-8 rounded ${activePage === i+1 &&
                  "border-black bg-black text-center leading-8 text-white"
                }`}
                onClick={() => setLimit((i+1)*6)}
              >
                {i + 1}
              </button>
            </li>
          );
        })}

        <li>
          <button
            className="inline-flex size-8 items-center justify-center rounded border border-gray-100 disabled:text-gray-500"
            onClick={() => setLimit(limit+6)}
            disabled={limit > 20}
          >
            <span className="sr-only">Next Page</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </li>
      </ol>
    );
}

export default Pagination
