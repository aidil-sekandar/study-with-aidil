export default function Tab({ isActive, title, onShow, id }) {

  return (
    <>
      {
        isActive ? (
          <button id={id} className="border-t-4 border-[#ec775c] bg-[#343434] py-2 px-3 rounded-t-sm">{title}</button>
        ) : (
          <button
            id={id}
            onClick={onShow}
            className="text-[#6d6d71] border-t-4 border-[#3b3b3b] bg-[#262626] hover:bg-[#343434] py-2 px-3 rounded-t-sm hover:border-[#ec775c] hover:text-white"
          >
            {title}
          </button>
        )
      }
    </>
  )
}
