"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";

import SectionHeading from "./SectionHeading";
import useSectionInView from "@/hooks/useSectionInView";
import { sendEmail } from "@/actions/sendEmail";
import SubmitButton from "./SubmitButton";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView("Contact");
  const formRef = useRef<HTMLFormElement | null>(null);

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact me</SectionHeading>
      <p className="text-slate-700 -mt-5 dark:text-white/80">
        You can contact me directly at{" "}
        <a className="underline" href="mailto:isuruch92@gmail.com">
          isuruch92@gmail.com
        </a>{" "}
        or through this form
      </p>
      <form
        ref={formRef}
        className="mt-8 flex flex-col gap-4 dark:text-black"
        action={async (formData: FormData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Message sent succesfully!");
          formRef.current?.reset(); // Reset the form fields
        }}
      >
        <input
          className="h-14 rounded-lg borderBlack px-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 dark:outline-none transition-all delay-150"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className="h-52 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 dark:outline-none transition-all delay-150"
          name="message"
          required
          maxLength={5000}
          placeholder="Your message"
        />

        <SubmitButton />
      </form>
    </motion.section>
  );
}
