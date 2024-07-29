export function DisabledPreButton() {
  return (
    <div className="flex h-[48px] w-[48px] items-center justify-center rounded-full bg-transparent-white-10 p-[4px] md:h-[64px] md:w-[64px]">
      <div className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-transparent-black-20 p-[4px] md:h-[56px] md:w-[56px]">
        <div>
          <svg
            className="h-[20px] w-[20px] md:h-[32px] md:w-[32px]"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 2.66699C14.9391 2.66699 13.9217 3.08842 13.1716 3.83857C12.4214 4.58871 12 5.60613 12 6.66699V16.0003C12 17.0612 12.4214 18.0786 13.1716 18.8288C13.9217 19.5789 14.9391 20.0003 16 20.0003C17.0609 20.0003 18.0783 19.5789 18.8284 18.8288C19.5786 18.0786 20 17.0612 20 16.0003V6.66699C20 5.60613 19.5786 4.58871 18.8284 3.83857C18.0783 3.08842 17.0609 2.66699 16 2.66699Z"
              stroke="white"
              strokeOpacity="0.35"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M25.3334 13.333V15.9997C25.3334 18.475 24.3501 20.849 22.5997 22.5993C20.8494 24.3497 18.4754 25.333 16.0001 25.333C13.5247 25.333 11.1508 24.3497 9.40042 22.5993C7.65008 20.849 6.66675 18.475 6.66675 15.9997V13.333"
              stroke="white"
              strokeOpacity="0.35"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16 25.333V29.333"
              stroke="white"
              strokeOpacity="0.35"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
