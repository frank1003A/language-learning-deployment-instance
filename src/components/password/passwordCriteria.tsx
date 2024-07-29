import Image from "next/image";
import correct from "../../../public/passwordCriteria/correctPassword.svg";
import wrong from "../../../public/passwordCriteria/wrongPassword.svg";

export interface passwordCriteriaProps {
  password: string;
}
const PasswordCriteria = ({ password }: passwordCriteriaProps) => {
  const criteria = [
    {
      label: "8 characters",
      isValid: password.length >= 8
    }, 
    {
      label: "Uppercase Letter",
      isValid: /[A-Z]/.test(password)
    },
    {
      label: "Lowercase Letter",
      isValid: /[a-z]/.test(password)
    },
    {
      label: "Special character",
      isValid: /[!@#$%^&*(),.?":{}|<>]/.test(password)
    },
  ];
  return (
    <div className="flex flex-col gap-2">
      {criteria.map((criterion, index) => (
        <div
          key={index}
          className={` flex w-fit items-center gap-1 rounded-[0.5rem]  border-none px-2 py-[0.59rem] ${criterion?.isValid ? "bg-purple-10 text-purple-90" : "bg-neutral-20 text-secondary-110"}`}
        >
          {criterion?.isValid ? (
            <Image src={correct} alt="correctPassword" width="12" height="12" />
          ) : (
            <Image src={wrong} alt="wrongPassword" width="12" height="12" />
          )}
          <p className="text-center text-[0.75rem] font-normal leading-[1.125rem]">
          {criterion?.label}
          </p>
        </div>
      ))}
    </div>
  );
};

export default PasswordCriteria;
