export default function FilterBar() {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4">
      <div className="flex items-center space-x-4 text-sm text-neutral-600">
        <button className="flex items-center space-x-2 font-medium hover:text-foreground px-3.5 py-2.5 border rounded-4xl border-neutral-200">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.00506 6H17.0051L11.9951 12.3L7.00506 6ZM4.25506 5.61C6.27506 8.2 10.0051 13 10.0051 13V19C10.0051 19.55 10.4551 20 11.0051 20H13.0051C13.5551 20 14.0051 19.55 14.0051 19V13C14.0051 13 17.7251 8.2 19.7451 5.61C20.2551 4.95 19.7851 4 18.9551 4H5.04506C4.21506 4 3.74506 4.95 4.25506 5.61Z"
              fill="#242528"
            />
          </svg>

          <span>Filter</span>
        </button>
        <button className="flex items-center space-x-1 hover:text-foreground px-3.5 py-2.5 border rounded-4xl border-neutral-200">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.5 4H19.5V20H16.5V4ZM4.5 14H7.5V20H4.5V14ZM10.5 9H13.5V20H10.5V9Z"
              fill="#242528"
            />
          </svg>

          <span>Level</span>
        </button>
        <button className="flex items-center space-x-1 hover:text-foreground px-3.5 py-2.5 border rounded-4xl border-neutral-200">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.5 2L6 11H17L11.5 2ZM11.5 5.84L13.43 9H9.56L11.5 5.84ZM17 13C14.51 13 12.5 15.01 12.5 17.5C12.5 19.99 14.51 22 17 22C19.49 22 21.5 19.99 21.5 17.5C21.5 15.01 19.49 13 17 13ZM17 20C15.62 20 14.5 18.88 14.5 17.5C14.5 16.12 15.62 15 17 15C18.38 15 19.5 16.12 19.5 17.5C19.5 18.88 18.38 20 17 20ZM2.5 21.5H10.5V13.5H2.5V21.5ZM4.5 15.5H8.5V19.5H4.5V15.5Z"
              fill="#242528"
            />
          </svg>

          <span>Category</span>
        </button>
      </div>

      <div className="flex items-center space-x-2 text-sm text-neutral-600">
        <button className="flex items-center space-x-1 hover:text-foreground px-3.5 py-2.5 border rounded-4xl border-neutral-200">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 18H9V16H3V18ZM3 6V8H21V6H3ZM3 13H15V11H3V13Z"
              fill="#242528"
            />
          </svg>

          <span>Most Relevant</span>
        </button>
      </div>
    </div>
  );
}
