
import React from "react"
import Img1 from "../assets/HowItWorks/1.png"
import Img2 from "../assets/HowItWorks/2.png"
import Img3 from "../assets/HowItWorks/3.png"

const Step = ({ number, title, description, image, imagePosition = "right" }) => {
  const isImageLeft = imagePosition === "left"

  return (
    <div
      className={`flex flex-col ${isImageLeft ? "lg:flex-row-reverse" : "lg:flex-row"} items-center justify-between gap-12`}
    >
      {/* Text Content */}
      <div className="flex-1 max-w-xl">
        <div className="flex items-start gap-6">
          {/* Tilted Yellow Square Number */}
          <div className="relative shrink-0 mt-1">
            <div className="w-12 h-12 bg-amber-200 rotate-45 flex items-center justify-center rounded-sm">
              <span className="text-xl font-bold -rotate-45 text-slate-800">{number}</span>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-slate-800 leading-tight">{title}</h3>
            <p className="text-slate-500 leading-relaxed text-lg">{description}</p>
          </div>
        </div>
      </div>

      {/* Image Content */}
      <div className="flex-1 w-full flex justify-center items-center">
        <div className="relative w-full max-w-md aspect-square">
          {/* Subtle background glow/circle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 bg-cyan-50 rounded-full blur-3xl opacity-60" />

          {/* Placeholder for Phone Mockup and Illustration */}
          <img
            src={image || "/placeholder.svg"}
            alt={`Step ${number} illustration`}
            className="relative z-10 w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  )
}

export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: "Sign Up/Login On Mudra Plus And Set Up Your Account",
      description:
        "Provide all your account setup/login requirements and you will be on your way to satisfy your demands and immediate needs.",
      image: Img1,
      imagePosition: "right",
    },
    {
      number: 2,
      title: "Search/Select A Type of Loan you want",
      description:
        "Choose a vendor that fits your budget and payment schedule the best. The rates vary depending on the vendor's interest specifications, carefully review them and select the finest alternative for you. Remember, we're looking out for your convenience.",
      image: Img2,
      imagePosition: "left",
    },
    {
      number: 3,
      title: "Enter The Amount and submit your request",
      description:
        "Fill in the amount that best meets your needs and is simple to repay for you. You're only a few clicks away from the happy future you desire.",
      image: Img3,
      imagePosition: "right",
    },
  ]

  return (
    <section className="py-16 px-6 bg-[#EBE1D1] rounded-b-[8%]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            How To Get <span className="text-[#0D4715]">Loan</span> on <span className="text-[#0D4715]">Mudra Plus</span>
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed">
            We consider your requirements to be our responsibility, so we've put up these simple steps for you to follow
            so you can have a happy future with ease.
          </p>
        </div>

        {/* Steps Container */}
        <div className="space-y-0">
          {steps.map((step) => (
            <Step key={step.number} {...step} />
          ))}
        </div>

        <div className="mt-12 mx-auto text-center max-w-3xl">
            <p className="text-slate-500 text-lg leading-relaxed">
                Satisfy your immediate needs such as paying bills, paying for your orders online or getting quick cash.
            </p>
            <button className="mt-4 px-6 py-3 bg-[#0D4715] text-white font-medium rounded-lg hover:bg-blue-600 transition-colors">
                Get Loan Now
            </button>
        </div>
      </div>
    </section>
  )
}
