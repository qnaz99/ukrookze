import { useState, FC, ReactNode } from "react";

export interface FAQItem {
  question: string;
  answer: ReactNode;
}

export interface FAQAccordionProps {
  data: FAQItem[];
}

interface AccordionItemProps {
  index: number;
  question: string;
  answer: ReactNode;
  isOpen: boolean;
  toggle: (index: number) => void;
}

const AccordionItem: FC<AccordionItemProps> = ({
  index,
  question,
  answer,
  isOpen,
  toggle,
}) => (
  <div>
    <h2>
      <button
        type="button"
        className={`flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 ${
          index === 0 ? "rounded-t-xl" : ""
        } focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3`}
        aria-expanded={isOpen}
        onClick={() => toggle(index)}
      >
        <span>{question}</span>
        <svg
          className={`w-3 h-3 transform transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          } shrink-0`}
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5 5 1 1 5"
          />
        </svg>
      </button>
    </h2>
    {isOpen && (
      <div
        className={`p-5 border ${
          index !== 2 ? "border-b-0" : ""
        } border-gray-200 dark:border-gray-700 dark:bg-gray-900`}
      >
        {answer}
      </div>
    )}
  </div>
);

export const FAQAccordion: FC<FAQAccordionProps> = ({ data }) => {
  const [openStates, setOpenStates] = useState<boolean[]>(
    Array(data.length).fill(false)
  );

  const toggle = (index: number) => {
    setOpenStates((prev) =>
      prev.map((open, i) => (i === index ? !open : open))
    );
  };

  return (
    <div id="accordion-collapse">
      {data.map((item, index) => (
        <AccordionItem
          key={index}
          index={index}
          question={item.question}
          answer={item.answer}
          isOpen={openStates[index]}
          toggle={toggle}
        />
      ))}
    </div>
  );
};
