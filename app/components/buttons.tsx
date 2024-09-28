"use client";

import { extendVariants, Button } from "@nextui-org/react";

export const MyButton = extendVariants(Button, {
  variants: {
    // <- modify/add variants
    color: {
      primary:
        "text-[#cbd5e1] bg-[#FFF] border-[#e2e8f0] border-[3px] border-b-[5px] active:border-b-[3px] ",
      secondary:
        "text-[#cbd5e1] bg-transparent border-[#cbd5e1] border-[3px] border-b-[5px] active:border-b-[3px]",
      active:
        "text-[#FFF] bg-[#a3e635] border-[#84cc16] border-[3px] border-b-[5px] active:border-b-[3px]",
    },
    isDisabled: {
      true: "opacity-50 cursor-not-allowed",
    },
    size: {
      xs: "px-2 min-w-12 h-6 text-tiny gap-1 rounded-small",
      md: "px-4 min-w-20 h-10 text-small gap-2 rounded-small",
      xl: "px-8 min-w-28 h-14 text-xl gap-4 rounded-medium",
    },
    font: {
      bold: "font-extrabold",
    },
  },
  defaultVariants: {
    // <- modify/add default variants
    color: "primary",
    size: "xl",
    font: "bold",
  },
  compoundVariants: [
    // <- modify/add compound variants
    {
      isDisabled: true,
      color: "primary",
      class: "bg-[#84cc16]/80 opacity-100",
    },
  ],
});

export const RoundedButton = extendVariants(Button, {
  variants: {
    // <- modify/add variants
    color: {
      primary:
        "text-[#cbd5e1] bg-[#FFF] border-[#e2e8f0] border-[3px] border-b-[5px] active:border-b-[3px] ",
      secondary:
        "text-[#cbd5e1] bg-transparent border-[#cbd5e1] border-[3px] border-b-[5px] active:border-b-[3px]",
      active:
        "text-[#FFF] bg-[#a3e635] border-[#84cc16] border-[3px] border-b-[5px] active:border-b-[3px]",
    },
    isDisabled: {
      true: "opacity-50 cursor-not-allowed",
    },
    size: {
      xs: "px-2 min-w-12 h-6 text-tiny gap-1 rounded-full",
      md: "px-4 min-w-20 h-10 text-small gap-2 rounded-full",
      xl: "px-7 min-w-10  h-14 text-xl gap-4 rounded-full",
    },
    font: {
      bold: "font-extrabold",
    },
  },
  defaultVariants: {
    // <- modify/add default variants
    color: "primary",
    size: "xl",
    font: "bold",
  },
  compoundVariants: [
    // <- modify/add compound variants
    {
      isDisabled: true,
      color: "primary",
      class: "bg-[#84cc16]/80 opacity-100",
    },
  ],
});