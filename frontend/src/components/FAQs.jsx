import { MinusCircle, PlusCircleIcon } from "lucide-react";
import { useState } from "react";

export default function FAQs() {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      id: 1,
      title: "How to contact with riders emergency ?",
      desc: "An FAQ is a list of frequently asked questions (FAQs) and answers on a particular topic (also known as Questions and Answers [Q&A] or Frequently Asked Questions). The format is often used in articles, websites, email lists, and online forums where common questions tend to recur, for example through posts or queries by new users related to common knowledge gaps. The purpose of an FAQ is generally provide information.",
    },
    {
      id: 2,
      title: "App installation failed, how to update system information?",
      desc: "An FAQ is a list of frequently asked questions (FAQs) and answers on a particular topic (also known as Questions and Answers [Q&A] or Frequently Asked Questions). The format is often used in articles, websites, email lists, and online forums where common questions tend to recur, for example through posts or queries by new users related to common knowledge gaps. The purpose of an FAQ is generally provide information.",
    },
    {
      id: 3,
      title: "Website reponse taking time, how to improve?",
      desc: "An FAQ is a list of frequently asked questions (FAQs) and answers on a particular topic (also known as Questions and Answers [Q&A] or Frequently Asked Questions). The format is often used in articles, websites, email lists, and online forums where common questions tend to recur, for example through posts or queries by new users related to common knowledge gaps. The purpose of an FAQ is generally provide information.",
    },
    {
      id: 4,
      title: "New update fixed all bug and issues",
      desc: "An FAQ is a list of frequently asked questions (FAQs) and answers on a particular topic (also known as Questions and Answers [Q&A] or Frequently Asked Questions). The format is often used in articles, websites, email lists, and online forums where common questions tend to recur, for example through posts or queries by new users related to common knowledge gaps. The purpose of an FAQ is generally provide information.",
    },
  ];

  function openFaqByIndex(index) {
    setOpenFaq(openFaq === index ? null : index);
  }
  return (
    <>
      <div className="py-16 w-full flex justify-center items-center">
        <div className="max-w-7xl w-full flex flex-col items-center gap-14">
          <div className="flex flex-col items-center justify-center text-center gap-3">
            <p className="font-light text-orange-500">FREQUENT QUESTION</p>
            <h1 className="font-semibold text-4xl">Do you have any question</h1>
          </div>

          <div className="flex flex-col items-start justify-center gap-3 w-2xl">
            {faqs?.map((faq, index) => (
              <div
                key={faq.id}
                onClick={() => openFaqByIndex(index)}
                className="flex flex-col cursor-pointer py-6 border-b border-gray-300 gap-4 w-2xl"
              >
                <div className="flex justify-start items-center gap-2">
                  {openFaq === index ? (
                    <MinusCircle className="w-8 h-8 text-white fill-green-400" />
                  ) : (
                    <PlusCircleIcon className="w-8 h-8 text-white fill-green-400" />
                  )}
                  <h1 className="font-medium">{faq.title}</h1>
                </div>
                {openFaq === index && (
                  <div className="flex items-center max-w-2xl">
                    <p className="text-sm text-gray-500">{faq.desc}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
