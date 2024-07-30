import CustomButton from "~/components/common/common-button/common-button";
import HeroSection from "~/components/HeroSection";
import LearningGoalModal from "~/components/modals/LearningGoalModal";

function page() {
  return (
    <div className="relative flex h-full w-full flex-col overflow-x-hidden">
      <HeroSection />
      <div className="mt-10 flex flex-col gap-4 py-5" id="temporary">
        <CustomButton href={"/waitlist"} variant="primary-two">
          Waitlist Page
        </CustomButton>
        <CustomButton href={"/guides"} variant="primary-two">
          Components
        </CustomButton>
      </div>
      <div id="#modal">
        <LearningGoalModal />
      </div>
    </div>
  );
}
export default page;
