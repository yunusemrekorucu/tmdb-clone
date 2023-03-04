import React, { ReactNode, useEffect, useState } from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

interface IModalProps {
  open: any;
  setOpen: any;
  children?: ReactNode;
}

export const Modal = (props: IModalProps) => {
  const { open, setOpen, children } = props;

  useEffect(() => {
    const html = document.querySelector("html") as any;
    if (open) {
      html.style.overflow = "hidden";
    } else {
      html.style.overflow = "visible";
    }
  }, [open]);

  const handleOutline = (e: any) => {
    e.target.closest(".content") ? setOpen(true) : setOpen(false);
  };

  return (
    <section
      onClick={(e) => handleOutline(e)}
      className={clsx(styles.modal_container, {
        "opacity-100": open,
        "opacity-0 pointer-events-none": !open,
      })}
    >
      <div
        className={clsx("transition-all", {
          "-translate-y-80": !open,
          "-translate-y-0": open,
        })}
      >
        <div className="content bg-white min-w-[200px] min-h-[80px] rounded-lg">
          {children}
        </div>
      </div>
    </section>
  );
};
