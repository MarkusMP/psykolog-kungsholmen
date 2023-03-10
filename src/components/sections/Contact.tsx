import { IContactPayload } from "@/types/sections";
import { Transition } from "@headlessui/react";
import React, { useState } from "react";
import { useInView } from "react-intersection-observer";

const Contact = ({ btnText }: IContactPayload) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");
  const { ref, inView } = useInView({
    rootMargin: "15px",
    triggerOnce: true,
  });

  const submitHandler = (e: any) => {
    e.preventDefault();
  };

  return (
    <section className="py-6 flex h-full" ref={ref}>
      <Transition
        show={inView}
        as="form"
        enter="transition-opacity duration-[800ms]"
        enterFrom="opacity-10"
        enterTo="opacity-100"
        className="w-full"
        unmount={false}
        onSubmit={submitHandler}
      >
        <div className="flex flex-col pb-4">
          <label
            htmlFor="name"
            className="font-semibold montserrat pb-2 text-dark"
          >
            Namn <span className="text-primary">*</span>
          </label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            name="name"
            placeholder="Namn"
            className="border-2 rounded-[20px] border-primary p-3"
            required
          />
        </div>
        <div className="flex flex-col pb-4">
          <label
            htmlFor="email"
            className="font-semibold montserrat pb-2 text-dark"
          >
            E-mail <span className="text-primary">*</span>
          </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name="email"
            placeholder="E-mail"
            className="border-2 rounded-[20px] border-primary p-3"
            required
          />
        </div>
        <div className="flex flex-col pb-4">
          <label
            htmlFor="number"
            className="font-semibold montserrat pb-2 text-dark"
          >
            Telefonnummer
          </label>
          <input
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            type="text"
            name="number"
            placeholder="Telefonnummer"
            className="border-2  rounded-[20px] border-primary p-3"
          />
        </div>
        <div className="flex flex-col pb-4">
          <label
            htmlFor="message"
            className="font-semibold montserrat pb-2 text-dark"
          >
            Vad kan jag hj??lpa dig med?
          </label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            name="message"
            placeholder="Meddelande"
            className="border-2 rounded-[20px] border-primary p-3"
            rows={4}
          />
        </div>
        <button
          type="submit"
          onSubmit={submitHandler}
          className="montserrat mt-2 text-center block w-full md:w-1/4 rounded-full bg-primary px-9 py-[14px] tracking-wider text-white transition-colors hover:bg-secondary"
        >
          {btnText && btnText}
        </button>
      </Transition>
    </section>
  );
};

export default Contact;
