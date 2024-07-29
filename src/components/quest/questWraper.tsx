import React from "react";

const QuestWraper = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="mx-auto w-3/4 rounded-2xl bg-white px-14 py-8 shadow-md">
        <h1 className="text-center text-4xl uppercase leading-[50px]">
          quests
        </h1>
        <div className="font-inter text-center text-sm font-normal leading-6">
          Learn languages by exploring different scenarios.
        </div>

        <div className="mt-4">{children}</div>
      </div>
    </>
  );
};

export default QuestWraper;
