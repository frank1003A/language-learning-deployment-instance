"use client";

import { Orbit, PlusIcon } from "lucide-react";
import { FC } from "react";

import CustomButton from "~/components/common/common-button/common-button";

const StyleGuide: FC = () => {
  return (
    <main className="flex min-h-screen flex-col items-start gap-7 overflow-hidden p-6 sm:p-12 md:p-24">
      <h2 className="text-2xl font-semibold">Color Guides</h2>
      <div
        className="grid w-full items-start gap-4"
        style={{ gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))" }}
      >
        {/* Neutral Colors */}
        <div className="text-black flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-neutral-10 px-4 py-4 shadow">
          bg-neutral-10, text-black
        </div>
        <div className="text-black flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-neutral-20 px-4 py-4 shadow">
          bg-neutral-20, text-black
        </div>
        <div className="text-black flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-neutral-30 px-4 py-4 shadow">
          bg-neutral-30, text-black
        </div>
        <div className="text-black flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-neutral-40 px-4 py-4 shadow">
          bg-neutral-40, text-black
        </div>
        <div className="text-black flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-neutral-50 px-4 py-4 shadow">
          bg-neutral-50, text-black
        </div>
        <div className="text-black flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-neutral-60 px-4 py-4 shadow">
          bg-neutral-60, text-black
        </div>
        <div className="text-black flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-neutral-70 px-4 py-4 shadow">
          bg-neutral-70, text-black
        </div>
        <div className="text-black flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-neutral-80 px-4 py-4 shadow">
          bg-neutral-80, text-black
        </div>
        <div className="text-black flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-neutral-90 px-4 py-4 shadow">
          bg-neutral-90, text-black
        </div>
        <div className="flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-neutral-100 px-4 py-4 text-white shadow">
          bg-neutral-100, text-white
        </div>
        <div className="flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-neutral-110 px-4 py-4 text-white shadow">
          bg-neutral-110, text-white
        </div>
        <div className="flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-neutral-120 px-4 py-4 text-white shadow">
          bg-neutral-120, text-white
        </div>
        <div className="flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-neutral-130 px-4 py-4 text-white shadow">
          bg-neutral-130, text-white
        </div>
        <div className="flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-neutral-140 px-4 py-4 text-white shadow">
          bg-neutral-140, text-white
        </div>
        <div className="flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-neutral-150 px-4 py-4 text-white shadow">
          bg-neutral-150, text-white
        </div>
        {/* Primary Colors */}

        <div className="text-black flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-primary-10 px-4 py-4 shadow">
          bg-primary-10, text-black
        </div>
        <div className="text-black flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-primary-20 px-4 py-4 shadow">
          bg-primary-20, text-black
        </div>
        <div className="text-black flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-primary-30 px-4 py-4 shadow">
          bg-primary-30, text-black
        </div>
        <div className="text-black flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-primary-40 px-4 py-4 shadow">
          bg-primary-40, text-black
        </div>
        <div className="text-black flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-primary-50 px-4 py-4 shadow">
          bg-primary-50, text-black
        </div>
        <div className="text-black flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-primary-60 px-4 py-4 shadow">
          bg-primary-60, text-black
        </div>
        <div className="text-black flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-primary-70 px-4 py-4 shadow">
          bg-primary-70, text-black
        </div>
        <div className="text-black flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-primary-80 px-4 py-4 shadow">
          bg-primary-80, text-black
        </div>
        <div className="text-black flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-primary-90 px-4 py-4 shadow">
          bg-primary-90, text-black
        </div>
        <div className="flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-primary-100 px-4 py-4 text-white shadow">
          bg-primary-100, text-white
        </div>
        <div className="flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-primary-110 px-4 py-4 text-white shadow">
          bg-primary-110, text-white
        </div>
        <div className="flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-primary-120 px-4 py-4 text-white shadow">
          bg-primary-120, text-white
        </div>
        <div className="flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-primary-130 px-4 py-4 text-white shadow">
          bg-primary-130, text-white
        </div>
        <div className="flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-primary-140 px-4 py-4 text-white shadow">
          bg-primary-140, text-white
        </div>
        <div className="flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-primary-150 px-4 py-4 text-white shadow">
          bg-primary-150, text-white
        </div>
        {/* Pink Colors */}

        <div className="text-black flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-pink-10 px-4 py-4 shadow">
          bg-pink-10, text-black
        </div>
        <div className="text-black flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-pink-20 px-4 py-4 shadow">
          bg-pink-20, text-black
        </div>
        <div className="text-black flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-pink-30 px-4 py-4 shadow">
          bg-pink-30, text-black
        </div>
        <div className="text-black flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-pink-40 px-4 py-4 shadow">
          bg-pink-40, text-black
        </div>
        <div className="text-black flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-pink-50 px-4 py-4 shadow">
          bg-pink-50, text-black
        </div>
        <div className="text-black flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-pink-60 px-4 py-4 shadow">
          bg-pink-60, text-black
        </div>
        <div className="text-black flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-pink-70 px-4 py-4 shadow">
          bg-pink-70, text-black
        </div>
        <div className="text-black flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-pink-80 px-4 py-4 shadow">
          bg-pink-80, text-black
        </div>
        <div className="text-black flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-pink-90 px-4 py-4 shadow">
          bg-pink-90, text-black
        </div>
        <div className="flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-pink-100 px-4 py-4 text-white shadow">
          bg-pink-100, text-white
        </div>
        <div className="flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-pink-110 px-4 py-4 text-white shadow">
          bg-pink-110, text-white
        </div>
        <div className="flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-pink-120 px-4 py-4 text-white shadow">
          bg-pink-120, text-white
        </div>
        <div className="flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-pink-130 px-4 py-4 text-white shadow">
          bg-pink-130, text-white
        </div>
        <div className="flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-pink-140 px-4 py-4 text-white shadow">
          bg-pink-140, text-white
        </div>
        {/* Purple Colors */}

        <div className="text-black flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-purple-10 px-4 py-4 shadow">
          bg-purple-10, text-black
        </div>
        <div className="text-black flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-purple-20 px-4 py-4 shadow">
          bg-purple-20, text-black
        </div>
        <div className="text-black flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-purple-30 px-4 py-4 shadow">
          bg-purple-30, text-black
        </div>
        <div className="text-black flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-purple-40 px-4 py-4 shadow">
          bg-purple-40, text-black
        </div>
        <div className="text-black flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-purple-50 px-4 py-4 shadow">
          bg-purple-50, text-black
        </div>
        <div className="text-black flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-purple-60 px-4 py-4 shadow">
          bg-purple-60, text-black
        </div>
        <div className="text-black flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-purple-70 px-4 py-4 shadow">
          bg-purple-70, text-black
        </div>
        <div className="text-black flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-purple-80 px-4 py-4 shadow">
          bg-purple-80, text-black
        </div>
        <div className="text-black flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-purple-90 px-4 py-4 shadow">
          bg-purple-90, text-black
        </div>
        <div className="flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-purple-100 px-4 py-4 text-white shadow">
          bg-purple-100, text-white
        </div>
        <div className="flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-purple-110 px-4 py-4 text-white shadow">
          bg-purple-110, text-white
        </div>
        <div className="flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-purple-120 px-4 py-4 text-white shadow">
          bg-purple-120, text-white
        </div>
        <div className="flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-purple-130 px-4 py-4 text-white shadow">
          bg-purple-130, text-white
        </div>
        <div className="flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-purple-140 px-4 py-4 text-white shadow">
          bg-purple-140, text-white
        </div>
        {/* Secondary Colors */}

        <div className="text-black flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-secondary-10 px-4 py-4 shadow">
          bg-secondary-10, text-black
        </div>
        <div className="text-black flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-secondary-20 px-4 py-4 shadow">
          bg-secondary-20, text-black
        </div>
        <div className="text-black flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-secondary-30 px-4 py-4 shadow">
          bg-secondary-30, text-black
        </div>
        <div className="text-black flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-secondary-40 px-4 py-4 shadow">
          bg-secondary-40, text-black
        </div>
        <div className="text-black flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-secondary-50 px-4 py-4 shadow">
          bg-secondary-50, text-black
        </div>
        <div className="text-black flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-secondary-60 px-4 py-4 shadow">
          bg-secondary-60, text-black
        </div>
        <div className="text-black flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-secondary-70 px-4 py-4 shadow">
          bg-secondary-70, text-black
        </div>
        <div className="text-black flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-secondary-80 px-4 py-4 shadow">
          bg-secondary-80, text-black
        </div>
        <div className="text-black flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-secondary-90 px-4 py-4 shadow">
          bg-secondary-90, text-black
        </div>
        <div className="flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-secondary-100 px-4 py-4 text-white shadow">
          bg-secondary-100, text-white
        </div>
        <div className="flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-secondary-110 px-4 py-4 text-white shadow">
          bg-secondary-110, text-white
        </div>
        <div className="flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-secondary-120 px-4 py-4 text-white shadow">
          bg-secondary-120, text-white
        </div>
        {/* Success Colors */}

        <div className="text-black flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-success-10 px-4 py-4 shadow">
          bg-success-10, text-black
        </div>
        <div className="text-black flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-success-20 px-4 py-4 shadow">
          bg-success-20, text-black
        </div>
        <div className="text-black flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-success-30 px-4 py-4 shadow">
          bg-success-30, text-black
        </div>
        <div className="text-black flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-success-40 px-4 py-4 shadow">
          bg-success-40, text-black
        </div>
        <div className="text-black flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-success-50 px-4 py-4 shadow">
          bg-success-50, text-black
        </div>
        <div className="text-black flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-success-60 px-4 py-4 shadow">
          bg-success-60, text-black
        </div>
        <div className="text-black flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-success-70 px-4 py-4 shadow">
          bg-success-70, text-black
        </div>
        <div className="text-black flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-success-80 px-4 py-4 shadow">
          bg-success-80, text-black
        </div>
        <div className="text-black flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-success-90 px-4 py-4 shadow">
          bg-success-90, text-black
        </div>
        <div className="flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-success-100 px-4 py-4 text-white shadow">
          bg-success-100, text-white
        </div>
        <div className="flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-success-120 px-4 py-4 text-white shadow">
          bg-success-120, text-white
        </div>
        <div className="flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-success-130 px-4 py-4 text-white shadow">
          bg-success-130, text-white
        </div>
        <div className="flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-success-140 px-4 py-4 text-white shadow">
          bg-success-140, text-white
        </div>
        <div className="flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-success-150 px-4 py-4 text-white shadow">
          bg-success-150, text-white
        </div>
        <div className="flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-success-160 px-4 py-4 text-white shadow">
          bg-success-160, text-white
        </div>
        {/* Critical Colors */}

        <div className="text-black flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-critical-10 px-4 py-4 shadow">
          bg-critical-10, text-black
        </div>
        <div className="text-black flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-critical-20 px-4 py-4 shadow">
          bg-critical-20, text-black
        </div>
        <div className="text-black flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-critical-30 px-4 py-4 shadow">
          bg-critical-30, text-black
        </div>
        <div className="text-black flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-critical-40 px-4 py-4 shadow">
          bg-critical-40, text-black
        </div>
        <div className="text-black flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-critical-50 px-4 py-4 shadow">
          bg-critical-50, text-black
        </div>
        <div className="text-black flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-critical-60 px-4 py-4 shadow">
          bg-critical-60, text-black
        </div>
        <div className="text-black flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-critical-70 px-4 py-4 shadow">
          bg-critical-70, text-black
        </div>
        <div className="text-black flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-critical-80 px-4 py-4 shadow">
          bg-critical-80, text-black
        </div>
        <div className="text-black flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-critical-90 px-4 py-4 shadow">
          bg-critical-90, text-black
        </div>
        <div className="flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-critical-100 px-4 py-4 text-white shadow">
          bg-critical-100, text-white
        </div>
        <div className="flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-critical-110 px-4 py-4 text-white shadow">
          bg-critical-110, text-white
        </div>
        <div className="flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-critical-120 px-4 py-4 text-white shadow">
          bg-critical-120, text-white
        </div>
        <div className="flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-critical-130 px-4 py-4 text-white shadow">
          bg-critical-130, text-white
        </div>
        <div className="flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-critical-150 px-4 py-4 text-white shadow">
          bg-critical-150, text-white
        </div>
        <div className="flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-critical-160 px-4 py-4 text-white shadow">
          bg-critical-160, text-white
        </div>
        {/* Transparent Black Colors */}

        <div className="text-black flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-transparent-black-5 px-4 py-4 shadow">
          bg-transparent-black-5, text-black
        </div>
        <div className="text-black flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-transparent-black-10 px-4 py-4 shadow">
          bg-transparent-black-10, text-black
        </div>
        <div className="text-black flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-transparent-black-15 px-4 py-4 shadow">
          bg-transparent-black-15, text-black
        </div>
        <div className="text-black flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-transparent-black-20 px-4 py-4 shadow">
          bg-transparent-black-20, text-black
        </div>
        <div className="text-black flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-transparent-black-25 px-4 py-4 shadow">
          bg-transparent-black-25, text-black
        </div>
        <div className="text-black flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-transparent-black-30 px-4 py-4 shadow">
          bg-transparent-black-30, text-black
        </div>
        <div className="text-black flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-transparent-black-35 px-4 py-4 shadow">
          bg-transparent-black-35, text-black
        </div>
        <div className="text-black flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-transparent-black-40 px-4 py-4 shadow">
          bg-transparent-black-40, text-black
        </div>
        <div className="text-black flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-transparent-black-45 px-4 py-4 shadow">
          bg-transparent-black-45, text-black
        </div>
        <div className="text-black flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-transparent-black-50 px-4 py-4 shadow">
          bg-transparent-black-50, text-black
        </div>
        <div className="text-black flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-transparent-black-55 px-4 py-4 shadow">
          bg-transparent-black-55, text-black
        </div>
        <div className="text-black flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-transparent-black-60 px-4 py-4 shadow">
          bg-transparent-black-60, text-black
        </div>
        <div className="text-black flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-transparent-black-65 px-4 py-4 shadow">
          bg-transparent-black-65, text-black
        </div>
        <div className="flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-transparent-black-70 px-4 py-4 text-white shadow">
          bg-transparent-black-70, text-white
        </div>
        <div className="flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-transparent-black-75 px-4 py-4 text-white shadow">
          bg-transparent-black-75, text-white
        </div>
        {/* Transparent White Colors */}

        <div className="flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-transparent-white-10 px-4 py-4 text-white shadow">
          bg-transparent-white-10, text-white
        </div>
        <div className="flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-transparent-white-15 px-4 py-4 text-white shadow">
          bg-transparent-white-15, text-white
        </div>
        <div className="flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-transparent-white-20 px-4 py-4 text-white shadow">
          bg-transparent-white-20, text-white
        </div>
        <div className="flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-transparent-white-25 px-4 py-4 text-white shadow">
          bg-transparent-white-25, text-white
        </div>
        <div className="flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-transparent-white-30 px-4 py-4 text-white shadow">
          bg-transparent-white-30, text-white
        </div>
        <div className="flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-transparent-white-35 px-4 py-4 text-white shadow">
          bg-transparent-white-35, text-white
        </div>
        <div className="flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-transparent-white-40 px-4 py-4 text-white shadow">
          bg-transparent-white-40, text-white
        </div>
        <div className="flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-transparent-white-45 px-4 py-4 text-white shadow">
          bg-transparent-white-45, text-white
        </div>
        <div className="flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-transparent-white-50 px-4 py-4 text-white shadow">
          bg-transparent-white-50, text-white
        </div>
        <div className="flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-transparent-white-55 px-4 py-4 text-white shadow">
          bg-transparent-white-55, text-white
        </div>
        <div className="flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-transparent-white-60 px-4 py-4 text-white shadow">
          bg-transparent-white-60, text-white
        </div>
        <div className="flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-transparent-white-65 px-4 py-4 text-white shadow">
          bg-transparent-white-65, text-white
        </div>
        <div className="flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-transparent-white-70 px-4 py-4 text-white shadow">
          bg-transparent-white-70, text-white
        </div>
      </div>

      <h2 className="text-2xl font-semibold">Button Variants</h2>
      <div
        className="grid w-full grid-cols-5 items-start gap-4"
        style={{ gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))" }}
      >
        <div className="group flex h-full flex-col items-start justify-between rounded-lg border px-5 py-5">
          <h2 className="mb-3 text-2xl font-semibold">Default Button</h2>
          <div className="flex items-center gap-4">
            <CustomButton variant="default">Button CTA</CustomButton>
          </div>
        </div>
        <div className="group flex h-full flex-col items-start justify-between rounded-lg border px-5 py-5">
          <h2 className="mb-3 text-2xl font-semibold">Primary Button</h2>
          <div className="flex items-center gap-4">
            <CustomButton variant="primary">Button CTA</CustomButton>
          </div>
        </div>
        <div className="group flex h-full flex-col items-start justify-between rounded-lg border px-5 py-5">
          <h2 className="mb-3 text-2xl font-semibold">Primary Two Button</h2>
          <div className="flex items-center gap-4">
            <CustomButton variant="primary-two">Button CTA</CustomButton>
          </div>
        </div>
        <div className="group flex h-full flex-col items-start justify-between rounded-lg border px-5 py-5">
          <h2 className="mb-3 text-2xl font-semibold">Critical Button</h2>
          <div className="flex items-center gap-4">
            <CustomButton variant="critical">Button CTA</CustomButton>
          </div>
        </div>
        <div className="group flex h-full flex-col items-start justify-between rounded-lg border px-5 py-5">
          <h2 className="mb-3 text-2xl font-semibold">Loading Button</h2>
          <div className="flex items-center gap-4">
            <CustomButton variant="loading" isLoading={true} />
          </div>
        </div>
        <div className="group flex h-full flex-col items-start justify-between rounded-lg border px-5 py-5">
          <h2 className="mb-3 text-2xl font-semibold">Outline Button</h2>
          <div className="flex items-center gap-4">
            <CustomButton variant="outline">Button CTA</CustomButton>
          </div>
        </div>
        <div className="group flex h-full flex-col items-start justify-between rounded-lg border px-5 py-5">
          <h2 className="mb-3 text-2xl font-semibold">Secondary Button</h2>
          <div className="flex items-center gap-4">
            <CustomButton variant="secondary">Button CTA</CustomButton>
          </div>
        </div>
        <div className="group flex h-full flex-col items-start justify-between rounded-lg border px-5 py-5">
          <h2 className="mb-3 text-2xl font-semibold">Secondary Two Button</h2>
          <div className="flex items-center gap-4">
            <CustomButton variant="secondary-two">Button CTA</CustomButton>
          </div>
        </div>
        <div className="group flex h-full flex-col items-start justify-between rounded-lg border px-5 py-5">
          <h2 className="mb-3 text-2xl font-semibold">Neutral Button</h2>
          <div className="flex items-center gap-4">
            <CustomButton variant="neutral">Button CTA</CustomButton>
          </div>
        </div>
        <div className="group flex h-full flex-col items-start justify-between rounded-lg border px-5 py-5">
          <h2 className="mb-3 text-2xl font-semibold">Link Button</h2>
          <div className="flex items-center gap-4">
            <CustomButton variant="link" size="link">
              Button CTA
            </CustomButton>
          </div>
        </div>
        <div className="group flex h-full flex-col items-start justify-between rounded-lg border px-5 py-5">
          <h2 className="mb-3 text-2xl font-semibold">
            With Icon Default Button
          </h2>
          <div className="flex items-center gap-4">
            <CustomButton isLeftIconVisible={true} icon={<Orbit />}>
              Button CTA
            </CustomButton>
          </div>
        </div>
        <div className="group flex h-full flex-col items-start justify-between rounded-lg border px-5 py-5">
          <h2 className="mb-3 text-2xl font-semibold">
            With Icon Primary Button
          </h2>
          <div className="flex items-center gap-4">
            <CustomButton
              variant="primary"
              isLeftIconVisible={true}
              icon={<Orbit />}
            >
              Button CTA
            </CustomButton>
          </div>
        </div>
        <div className="group flex h-full flex-col items-start justify-between rounded-lg border px-5 py-5">
          <h2 className="mb-3 text-2xl font-semibold">
            Link With Left Icon Button
          </h2>
          <div className="flex items-center gap-4">
            <CustomButton
              variant="link"
              size="link"
              isLeftIconVisible={true}
              icon={<Orbit />}
            >
              Button CTA
            </CustomButton>
          </div>
        </div>
        <div className="group flex h-full flex-col items-start justify-between rounded-lg border px-5 py-5">
          <h2 className="mb-3 text-2xl font-semibold">
            Link With Right Icon Button
          </h2>
          <div className="flex items-center gap-4">
            <CustomButton
              variant="link"
              size="link"
              isRightIconVisible={true}
              icon={<Orbit />}
            >
              Button CTA
            </CustomButton>
          </div>
        </div>
        <div className="group flex h-full flex-col items-start justify-between rounded-lg border px-5 py-5">
          <h2 className="mb-3 text-2xl font-semibold">Icon Only Button</h2>
          <div className="flex items-center gap-4">
            <CustomButton
              variant="outline"
              size="icon"
              isIconOnly={true}
              icon={<PlusIcon />}
            />
          </div>
        </div>
        <div className="group flex h-full flex-col items-start justify-between rounded-lg border px-5 py-5">
          <h2 className="mb-3 text-2xl font-semibold">
            Icon Only Circle Button
          </h2>
          <div className="flex items-center gap-4">
            <CustomButton
              variant="outline"
              size="circle"
              isIconOnly={true}
              icon={<PlusIcon />}
            />
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold">Usage</h2>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <span>Import the custom button component</span>
          <div className="rounded-lg bg-zinc-950 p-4">
            <span className="block font-mono text-sm text-white">
              import <span className="text-blue-400">CustomButton</span> from{" "}
              <span className="text-yellow-400">
                &quot;~/components/common/Button/button&quot;
              </span>
              ;
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <span>Variant Types</span>
          <div className="rounded-lg bg-zinc-950 p-4">
            <span className="block font-mono text-sm text-gray-100">
              <span className="text-pink-400">type Variant</span> {"{"}
            </span>
            <span className="ml-4 block font-mono text-sm text-gray-100">
              &rdquo;default&rdquo; <br />
              &rdquo;primary&rdquo; <br />
              &rdquo;primary-two&rdquo; <br />
              &rdquo;critical&rdquo; <br />
              &rdquo;loading&rdquo; <br />
              &rdquo;outline&rdquo; <br />
              &rdquo;secondary&rdquo; <br />
              &rdquo;secondary-two&rdquo; <br />
              &rdquo;neutral&rdquo; <br />
              &rdquo;link&rdquo;
            </span>
            <span className="block font-mono text-sm text-gray-100">{"}"}</span>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <span>Size Types</span>
          <div className="rounded-lg bg-zinc-950 p-4">
            <span className="block font-mono text-sm text-gray-100">
              <span className="text-pink-400">type Size</span> {"{"}
            </span>
            <span className="ml-4 block font-mono text-sm text-gray-100">
              &rdquo;default&rdquo; <br />
              &rdquo;sm&rdquo; <br />
              &rdquo;lg&rdquo; <br />
              &rdquo;link&rdquo; <br />
              &rdquo;icon&rdquo; <br />
              &rdquo;circle&rdquo;
            </span>
            <span className="block font-mono text-sm text-gray-100">{"}"}</span>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <span>Prop Types</span>
          <div className="rounded-lg bg-zinc-950 p-4">
            <span className="block font-mono text-sm text-gray-100">
              <span className="text-blue-400">type Props</span> {"{"}
            </span>
            <span className="ml-4 block font-mono text-sm text-gray-100">
              variant<span className="text-pink-400">:</span>{" "}
              <span className="text-yellow-400">Variant</span> <br />
              size<span className="text-pink-400">?</span>:{" "}
              <span className="text-yellow-400">Size</span>
              <br />
              isLoading?<span className="text-pink-400">:</span>{" "}
              <span className="text-yellow-400">boolean</span>
              <br />
              isLeftIconVisible?<span className="text-pink-400">:</span>{" "}
              <span className="text-yellow-400">boolean</span>
              <br />
              isRightIconVisible?<span className="text-pink-400">:</span>{" "}
              <span className="text-yellow-400">boolean</span>
              <br />
              isIconOnly?<span className="text-pink-400">:</span>{" "}
              <span className="text-yellow-400">boolean</span>
              <br />
              icon?<span className="text-pink-400">:</span>{" "}
              <span className="text-yellow-400">JSX.Element</span>
              <br />
              children?<span className="text-pink-400">:</span>{" "}
              <span className="text-yellow-400">React.ReactNode</span>
              <br />
            </span>
            <span className="block font-mono text-sm text-gray-100">{"}"}</span>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <span>Example Usage</span>
          <div className="rounded-lg bg-zinc-950 p-4">
            <span className="block font-mono text-sm text-gray-100">
              <span className="text-pink-400">const</span>{" "}
              <span className="text-blue-400">ExampleComponent</span>{" "}
              <span className="text-pink-400">=</span> () {"=>"} {"{"}
            </span>
            <span className="ml-4 block font-mono text-sm text-gray-100">
              <span className="text-pink-400">return</span> (
            </span>
            <span className="ml-8 block font-mono text-sm text-gray-100">
              <span className="text-blue-400">CustomButton</span> <br />
              <span className="ml-4 text-yellow-400">variant</span>{" "}
              <span className="text-pink-400">=</span>{" "}
              <span className="text-green-400">&rdquo;primary&rdquo;</span>{" "}
              <br />
              <span className="ml-4 text-yellow-400">size</span>{" "}
              <span className="text-pink-400">=</span>{" "}
              <span className="text-green-400">&rdquo;lg&rdquo;</span> <br />
              <span className="ml-4 text-yellow-400">isLoading</span>{" "}
              <span className="text-pink-400">=</span>{" "}
              <span className="text-pink-400">{"{"}</span>
              <span className="text-green-400">false</span>
              <span className="text-pink-400">{"}"}</span> <br />
              <span className="ml-4 text-yellow-400">
                isLeftIconVisible
              </span>{" "}
              <span className="text-pink-400">=</span>{" "}
              <span className="text-pink-400">{"{"}</span>
              <span className="text-green-400">true</span>
              <span className="text-pink-400">{"}"}</span> <br />
              <span className="ml-4 text-yellow-400">icon</span>{" "}
              <span className="text-pink-400">=</span> {"{"}
              <span className="text-blue-400">&lt;Orbit /&gt;</span>
              {"}"} <br />
              <span className="ml-4 text-yellow-400">children</span>{" "}
              <span className="text-pink-400">=</span>{" "}
              <span className="text-blue-400">Button CTA</span> <br />
              <span className="text-gray-100">&gt;</span>
            </span>
            <span className="ml-4 block font-mono text-sm text-gray-100">
              )
            </span>
            <span className="block font-mono text-sm text-gray-100">{"}"}</span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default StyleGuide;
