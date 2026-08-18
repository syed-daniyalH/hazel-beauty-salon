"use client";

import { ReactNode, useEffect } from "react";

import { X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

import { cn } from "@/lib/utils";

export function ModalShell({
  open,
  onClose,
  children,
  panelClassName,
}: {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  panelClassName?: string;
}) {
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (open) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKeyDown);
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22 }}
          className="fixed inset-0 z-50 bg-[color:rgba(7,7,7,0.92)] backdrop-blur-[40px]"
          onClick={onClose}
        >
          <div className="hazel-shell flex min-h-screen items-center justify-center py-6 md:py-10">
            <motion.div
              initial={{ y: 20, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 12, opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.24 }}
              className={cn(
                "relative w-full max-h-[calc(100vh-3rem)] overflow-y-auto border border-white/10 bg-[color:var(--hazel-bg)] shadow-[0_30px_120px_rgba(0,0,0,0.5)] md:max-h-[calc(100vh-5rem)]",
                panelClassName,
              )}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={onClose}
                className="absolute right-4 top-4 z-20 inline-flex h-11 w-11 items-center justify-center border border-white/15 bg-[color:var(--hazel-bg)] text-white transition hover:border-[color:var(--hazel-gold)] hover:text-[color:var(--hazel-soft-gold)]"
                aria-label="Close dialog"
              >
                <X className="h-5 w-5" strokeWidth={1.5} />
              </button>
              {children}
            </motion.div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

