export default function TrialPapersCard() {
  return (
    <a href="/" className="bg-[#262626] rounded-sm hover:bg-[#202020] py-4 px-6">
      <h2 className="text-2xl font-bold mb-2">Trial AddMath Perak 2023</h2>
      <div className="flex items-center gap-4">
        <span
          className="block w-max rounded-sm py-1 px-3 bg-[#ff573179] text-white font-semibold text-sm">
          Sejarah
        </span>
        <div className="flex items-center gap-2">
          <svg
            className="text-red-600"
            xmlns="http://www.w3.org/2000/svg"
            width="1.5em"
            height="1.5em"
            viewBox="0 0 24 24"
          >
            <rect width="24" height="24" fill="none"></rect>
            <path
              fill="currentColor"
              d="m12 21.35l-1.45-1.32C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53z"
            ></path>
          </svg>
          <span>11.9k</span>
        </div>
      </div>
    </a>
  )
}