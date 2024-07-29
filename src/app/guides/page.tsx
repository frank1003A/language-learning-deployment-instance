"use client";

import { FC } from "react";

const StyleGuide: FC = () => {
  return (
    <main className="flex min-h-screen flex-col items-start gap-7 overflow-hidden p-6 sm:p-12 md:p-24">
      <h2 className="text-2xl font-semibold">Color Guides</h2>
      <div
        className="grid w-full items-start gap-4"
        style={{ gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))" }}
      >
        {/* Primary Colors */}
        <div className="flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-primary-10 px-4 py-4 text-primary-90">
          bg-primary-10, text-primary-90
        </div>
        <div className="flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-primary-30 px-4 py-4 text-primary-90">
          bg-primary-30, text-primary-90
        </div>
        <div className="flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-primary-100 px-4 py-4 text-primary-10">
          bg-primary-100, text-primary-10
        </div>
        <div className="flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-primary-150 px-4 py-4 text-neutral-10">
          bg-primary-150, text-neutral-10
        </div>

        {/* Neutral Colors */}
        <div className="flex w-full items-center justify-center whitespace-nowrap rounded-lg border border-neutral-120 bg-neutral-10 px-4 py-4 text-neutral-90">
          bg-neutral-10, text-neutral-90
        </div>
        <div className="flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-neutral-130 px-4 py-4 text-neutral-10">
          bg-neutral-130, text-neutral-10
        </div>
        <div className="flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-neutral-140 px-4 py-4 text-neutral-10">
          bg-neutral-140, text-neutral-10
        </div>
        <div className="flex w-full items-center justify-center whitespace-nowrap rounded-lg border border-neutral-120 px-4 py-4 text-neutral-90">
          border-neutral-120, text-neutral-90
        </div>

        {/* Critical Colors */}
        <div className="bg-critical flex w-full items-center justify-center whitespace-nowrap rounded-lg px-4 py-4 text-neutral-10">
          bg-critical, text-neutral-10
        </div>

        {/* Secondary Colors */}
        <div className="flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-secondary-100 px-4 py-4 text-neutral-10">
          bg-secondary-100, text-neutral-10
        </div>
        <div className="flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-secondary-90 px-4 py-4 text-neutral-10">
          bg-secondary-90, text-neutral-10
        </div>
      </div>
    </main>
  );
};

export default StyleGuide;
