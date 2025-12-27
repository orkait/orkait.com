import React, { useState } from "react"
import Heading from "@theme/Heading"
import { Theme, serviceCategories, servicePricing } from "@site/src/constants"
import LinkButton from "../shared/LinkButton"
import { analyticsHandler } from "@site/src/utils"

type Currency = "USD" | "INR"

interface PricingTierType {
    id: number
    name: string
    price: {
        usd: string
        inr: string
    }
    priceSubtext?: string
    description?: string
    features: Array<{
        id: number
        name: string
    }>
    buttonText: string
    buttonHref: string
    highlighted?: boolean
}

const NewPricing = () => {
    const [activeCategory, setActiveCategory] = useState(serviceCategories[0].id)
    const [currency, setCurrency] = useState<Currency>("INR")

    const currentPricing = servicePricing.find((pricing) => pricing.categoryId === activeCategory)

    const toggleCurrency = () => {
        const newCurrency = currency === "USD" ? "INR" : "USD"
        setCurrency(newCurrency)
        analyticsHandler("Pricing", "Currency Toggle", newCurrency)
    }

    return (
        <section className="my-SPACE_14 sm:my-24 px-SPACE_04 lg:px-0">
            <div id="pricing" className="scroll-mt-20">
                <Heading
                    as="h2"
                    className="text-title-large sm:text-display-tiny lg:text-display-small text-center mb-SPACE_06 sm:mb-SPACE_10"
                >
                    <span className="rounded sm:rounded-lg bg-orkait-yellow px-SPACE_01">Services</span> tailored to your needs.
                </Heading>
            </div>

            {/* Currency Toggle and Category Tabs Container */}
            <div className="flex flex-col items-center gap-SPACE_06 mb-SPACE_10 sm:mb-SPACE_12">
                {/* Currency Toggle Button */}
                <button
                    onClick={toggleCurrency}
                    className="px-SPACE_06 py-SPACE_03 rounded-lg font-bold text-content-small border-2 border-solid border-orkait-dark-600 bg-white hover:bg-orkait-light-200 transition-all duration-200 flex items-center gap-SPACE_02"
                >
                    <span className={currency === "USD" ? "text-orkait-dark-600" : "text-orkait-dark-200"}>USD</span>
                    <div className="relative inline-block w-12 h-6">
                        <div
                            className={`absolute inset-0 rounded-full transition-colors duration-200 ${currency === "INR" ? "bg-orkait-dark-600" : "bg-orkait-border-light-400"
                                }`}
                        />
                        <div
                            className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform duration-200 ${currency === "INR" ? "transform translate-x-6" : ""
                                }`}
                        />
                    </div>
                    <span className={currency === "INR" ? "text-orkait-dark-600" : "text-orkait-dark-200"}>INR</span>
                </button>

                {/* Category Tabs */}
                <div className="flex flex-wrap justify-center gap-SPACE_04">
                    {serviceCategories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => {
                                setActiveCategory(category.id)
                                analyticsHandler("Pricing", "Category Click", category.name)
                            }}
                            className={`
                px-SPACE_06 py-SPACE_03 rounded-lg font-bold text-content-small sm:text-content-medium
                transition-all duration-200 border-2 border-solid
                ${activeCategory === category.id
                                    ? "bg-orkait-dark-600 text-orkait-light-100 border-orkait-dark-600"
                                    : "bg-white text-orkait-dark-600 border-orkait-border-light-400 hover:border-orkait-dark-600"
                                }
              `}
                        >
                            {category.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Pricing Tiers */}
            {currentPricing && (
                <div className="flex flex-col lg:flex-row items-stretch justify-center gap-SPACE_06 max-w-7xl mx-auto">
                    {((currentPricing.tiers as unknown) as PricingTierType[]).map((tier) => (
                        <div
                            key={tier.id}
                            className={`
                ${tier.highlighted ? "border-orkait-dark-700 shadow-lg scale-100 lg:scale-105" : "border-orkait-border-light-400"}
                border-2 border-solid rounded-2xl flex flex-col justify-between
                py-SPACE_06 px-SPACE_04 sm:px-SPACE_06 relative w-full lg:w-1/3 min-h-[500px]
                transition-all duration-200
              `}
                        >
                            {tier.highlighted && (
                                <div className="absolute -top-3.5 left-[50%] transform -translate-x-[50%] bg-orkait-dark-600 text-orkait-light-100 px-SPACE_04 py-SPACE_01 rounded text-content-tiny font-bold">
                                    Most Popular
                                </div>
                            )}

                            {/* Header */}
                            <div className="flex flex-col mb-SPACE_06">
                                <span className="text-content-medium lg:text-content-large font-bold text-center mb-SPACE_02">
                                    {tier.name}
                                </span>
                                <span className="text-title-large lg:text-display-tiny text-center font-bold mb-SPACE_01">
                                    {currency === "USD" ? tier.price.usd : tier.price.inr}
                                </span>
                                {tier.priceSubtext && (
                                    <span className="text-content-tiny sm:text-content-small text-center text-orkait-dark-100 mb-SPACE_02">
                                        {tier.priceSubtext}
                                    </span>
                                )}
                                {tier.description && (
                                    <p className="text-content-tiny sm:text-content-small text-center text-orkait-dark-200 mt-SPACE_02">
                                        {tier.description}
                                    </p>
                                )}
                            </div>

                            {/* Features */}
                            <div className="flex flex-col gap-SPACE_03 mb-SPACE_06 flex-grow">
                                {tier.features.map((feature) => (
                                    <div key={feature.id} className="flex items-start gap-SPACE_03">
                                        <svg
                                            className="h-5 w-5 flex-shrink-0 mt-0.5 text-green-600"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        </svg>
                                        <span className="text-content-small">{feature.name}</span>
                                    </div>
                                ))}
                            </div>

                            {/* CTA Button */}
                            <div className="text-center">
                                <LinkButton
                                    title={tier.buttonText}
                                    onClick={() => analyticsHandler("Pricing", "Click", `${tier.name} - ${tier.buttonText}`)}
                                    href={tier.buttonHref}
                                    theme={tier.highlighted ? Theme.Dark : Theme.Light}
                                    width="full"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Additional Info */}
            <div className="mt-SPACE_10 sm:mt-SPACE_12 text-center max-w-3xl mx-auto">
                <p className="text-content-small sm:text-content-medium text-orkait-dark-200">
                    All pricing is customizable based on your specific requirements. Contact us for a detailed quote tailored to
                    your project.
                </p>
            </div>
        </section>
    )
}

export default NewPricing

