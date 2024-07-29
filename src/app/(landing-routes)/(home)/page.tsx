import { CircleDot } from "lucide-react";

import CustomButton from "~/components/common/common-button/common-button";

function page() {
  return (
    <div className="">
      Welcome to our Language Learning platform.
      <CustomButton
        variant="primary"
        icon={<CircleDot />}
        isLeftIconVisible={true}
      >
        Button
      </CustomButton>
    </div>
  );
}
export default page;
