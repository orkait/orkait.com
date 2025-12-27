import React from "react"
import { pageLinks } from "./routes"

// Legacy URLs - kept for reference but not actively used
export const githubRepoURL = "/contact" // Placeholder - update if Orkait has GitHub repo
export const orkaitBenchmarkUrl = "/contact" // Not used anymore
export const orkaitBlogUrl = "/contact" // Blog disabled
export const codeSandboxUrl = "/contact" // Not used anymore
export const zapierLink = "https://hooks.zapier.com/hooks/catch/2793322/3a1gxp2/"
export const playgroundAdsConversionId = "AW-16578154380/3FH_CJrawsgZEIyfiuE9"

export enum cookieConstants {
    USER_CONSENT = "userConsent",
}


// Companies list - add your actual clients here when available
// Format: {name: "Company Name", logo: require("@site/static/icons/companies/logo.png").default}
export const companies: PartnerImage[] = [
    // Add your client companies here:
    // {name: "Client Company 1", logo: require("@site/static/icons/companies/client1.png").default},
    // {name: "Client Company 2", logo: require("@site/static/icons/companies/client2.png").default},
]

export const partnerImages: PartnerImage[] = [
    {
        name: "Digital Ocean",
        logo: require("@site/static/icons/companies/digital-ocean.png").default,
    },
    {
        name: "Vercel",
        logo: require("@site/static/icons/companies/vercel.png").default,
    },
    {
        name: "Fastly",
        logo: require("@site/static/icons/companies/fastly.png").default,
    },
    {
        name: "Cloud Flare",
        logo: require("@site/static/icons/companies/cloudflare.png").default,
    },
    {
        name: "AWS",
        logo: require("@site/static/icons/companies/aws.png").default,
    },
    {
        name: "Google Cloud",
        logo: require("@site/static/icons/companies/google-cloud.png").default,
    },
    {
        name: "Fly",
        logo: require("@site/static/icons/companies/fly-io.png").default,
    },
]

const Highlight = ({ text }: { text: string }) => (
    <>
        <span className="text-content-tiny font-bold sm:text-title-tiny lg:text-title-small bg-orkait-yellow rounded-[4px] sm:rounded-md px-SPACE_01">
            {text}
        </span>
    </>
)

export const features: Feature[] = [
    {
        logo: require("@site/static/images/home/orchestration.png").default,
        title: "Web App Development",
        content: (
            <>
                Orkait specializes in crafting <Highlight text="modern, responsive web applications" /> that deliver exceptional user experiences. We build scalable solutions using cutting-edge technologies, ensuring your web apps perform flawlessly across all devices and platforms.
            </>
        ),
        alt: "Web App Development",
    },
    {
        logo: require("@site/static/images/home/governance.png").default,
        title: "Software Solutions",
        content: (
            <>
                Our team delivers comprehensive <Highlight text="custom software solutions" /> tailored to your business needs. From concept to deployment, we focus on creating robust, maintainable software that drives your business forward and solves real-world challenges.
            </>
        ),
        alt: "Software Solutions",
    },
    {
        logo: require("@site/static/images/home/efficiency.png").default,
        title: "Enterprise Scaling",
        content: (
            <>
                Orkait helps small enterprises <Highlight text="scale and deploy" /> their digital infrastructure efficiently. We provide expert guidance and solutions for growth, ensuring your systems can handle increased demand while maintaining performance and reliability.
            </>
        ),
        alt: "Enterprise Scaling",
    },
    {
        logo: require("@site/static/images/home/extendability.png").default,
        title: "Digital Experiences",
        content: (
            <>
                We craft digital experiences that <Highlight text="inspire and engage" />. Every project is approached with creativity and attention to detail, ensuring your digital presence stands out and connects meaningfully with your audience.
            </>
        ),
        alt: "Digital Experiences",
    },
]

export const moreFeatures: MoreFeatures[] = [
    {
        id: 1,
        title: "Ahead of Time Optimizations",
        logo: require("@site/static/icons/basic/rocket-icon.svg").default,
    },
    {
        id: 2,
        title: "Composable Orchestration Primitives",
        logo: require("@site/static/icons/basic/extension.svg").default,
    },
    {
        id: 3,
        title: "Macro Resiliency Capabilities",
        logo: require("@site/static/icons/basic/shield.svg").default,
    },
    {
        id: 4,
        title: "Protocol agnostic",
        logo: require("@site/static/icons/basic/check-done.svg").default,
    },
    {
        id: 5,
        title: "High Performance",
        logo: require("@site/static/icons/basic/line-chart-up.svg").default,
    },
    {
        id: 6,
        title: "Security",
        logo: require("@site/static/icons/basic/security.svg").default,
    },
    {
        id: 7,
        title: "Edge Compatible",
        logo: require("@site/static/icons/basic/puzzle.svg").default,
    },
    {
        id: 8,
        title: "Compile time Checks",
        logo: require("@site/static/icons/basic/clock.svg").default,
    },
    {
        id: 9,
        logo: require("@site/static/icons/basic/adaptive.svg").default,
        title: "Adaptive performance improvements",
    },
    // {
    //   id: 10,
    //   logo: require("@site/static/icons/basic/rate-limit.svg").default,
    //   title: "Global rate limiting",
    // },
    {
        id: 11,
        logo: require("@site/static/icons/basic/insight.svg").default,
        title: "Telemetry",
    },
    {
        id: 12,
        logo: require("@site/static/icons/basic/connect.svg").default,
        title: "Scripting Flexibility",
    },
]

export const socials: Array<Social & {redirection_url?: string}> = [
    {
        id: 1,
        name: "youtube",
        image: require("@site/static/icons/companies/github-footer.svg").default,
        href: "https://youtube.com/@codewithkai",
        redirection_url: "https://youtube.com/@codewithkai",
    },
    {
        id: 2,
        name: "instagram",
        image: require("@site/static/icons/companies/discord-gray.svg").default,
        href: "https://instagram.com/__superkai__",
        redirection_url: "https://instagram.com/__superkai__",
    },
    {
        id: 3,
        name: "twitter",
        image: require("@site/static/icons/companies/x-gray.svg").default,
        href: "https://twitter.com/__codewithkai__",
        redirection_url: "https://twitter.com/__codewithkai__",
    },
]

export const chooseorkait: ChooseOrkait[] = [
    {
        id: 1,
        title: "Expert Development",
        description: "Work with experienced developers who craft digital experiences that inspire and deliver results.",
        image: require("@site/static/images/home/dev-experience.png").default,
    },
    {
        id: 2,
        title: "Unmatched Speed",
        description: "Leverage highly-optimized infrastructure that delivers lightning-fast response times and massive throughput for your applications.",
        image: require("@site/static/images/home/performance.png").default,
    },
    {
        id: 3,
        title: "Scale Fearlessly",
        description: "Leverage proven best practices that guarantee robustness at any scale for your enterprise.",
        image: require("@site/static/images/home/scale.png").default,
    },
]

export const orkaitFeatures: orkaitFeatures[] = [
    {
        id: 1,
        title: "Powerful Batching Primitive",
        image: require("@site/static/images/choose-orkait/rocket.png").default,
        redirection_url: "/contact",
    },
    {
        id: 2,
        title: "Extensions with plugins and JS support",
        image: require("@site/static/images/choose-orkait/grid.png").default,
        redirection_url: "/contact",
    },
    {
        id: 3,
        title: "Field based Authentication & Authorisation",
        image: require("@site/static/images/choose-orkait/shield-tick.png").default,
        redirection_url: "/contact",
    },
    {
        id: 4,
        title: "Protocol agnostic",
        image: require("@site/static/images/choose-orkait/check-done.png").default,
        redirection_url: "/contact",
    },
    {
        id: 5,
        title: "Performance",
        image: require("@site/static/images/choose-orkait/line-chart-up.png").default,
        redirection_url: "/contact",
    },
    {
        id: 6,
        title: "Security",
        image: require("@site/static/images/choose-orkait/lock.png").default,
        redirection_url: "/contact",
    },
    {
        id: 7,
        title: "Edge Compatible",
        image: require("@site/static/images/choose-orkait/puzzle-piece.png").default,
        redirection_url: "/contact",
    },
    {
        id: 8,
        title: "Compile time checks",
        image: require("@site/static/images/choose-orkait/clock-stopwatch.png").default,
        redirection_url: "/contact",
    },
]

export const benefits: Benefits[] = [
    {
        id: 1,
        title: "Secure",
        description:
            "Orkait follows industry best practices and security standards. Rest easy knowing your digital solutions are built with security as a priority.",
        image: require("@site/static/images/home/secure-icon.png").default,
        redirection_url: "/contact",
    },
    {
        id: 2,
        title: "High-Performance",
        description:
            "Engineered for speed and efficiency. We build systems that handle millions of requests with sub-millisecond latency, ensuring zero compromises on user experience.",
        image: require("@site/static/images/home/performance.png").default,
        redirection_url: "/contact",
    },
    {
        id: 3,
        title: "Quality Assured",
        description:
            "Orkait ensures quality through rigorous testing and verification processes. Deploy new solutions with confidence and reliability.",
        image: require("@site/static/images/home/statically-verified-icon.png").default,
        redirection_url: "/contact",
    },
    {
        id: 4,
        title: "Simple",
        description:
            "Orkait simplifies complex development processes. Get started quickly with our streamlined approach to web apps and software solutions.",
        image: require("@site/static/images/home/simple-icon.png").default,
        redirection_url: "/contact",
    },
    {
        id: 5,
        title: "Customizable",
        description:
            "Tailored solutions to meet your specific requirements. Orkait customizes every aspect of your project to satisfy your unique needs.",
        image: require("@site/static/images/home/customizable-icon.png").default,
        redirection_url: "/contact",
    },
    {
        id: 6,
        title: "Plug & Play",
        description:
            "Seamless integration and deployment solutions. Get started quickly and easily with Orkait's streamlined service delivery.",
        image: require("@site/static/images/home/plug-play-icon.png").default,
        redirection_url: "/docs",
    },
    {
        id: 7,
        title: "Enterprise Ready",
        description:
            "Orkait provides enterprise-grade solutions for scaling and deployment. Trusted by small enterprises for reliable digital transformation.",
        image: require("@site/static/images/home/open-source-icon.png").default,
        redirection_url: "/contact",
    },
]

export const enterpriseFeatures: EnterpriseFeature[] = [
    {
        id: 1,
        logo: require("@site/static/icons/basic/adaptive.svg").default,
        title: "Adaptive performance improvements",
        description: "Adaptive optimisation by analysing the hot queries in your Production environment",
    },
    // {
    //   id: 2,
    //   logo: require("@site/static/icons/basic/rate-limit.svg").default,
    //   title: "Global rate limiting",
    //   description: "Ability to set global rate limits on access of each field of your data graph.",
    // },
    {
        id: 3,
        logo: require("@site/static/icons/basic/reflect.svg").default,
        title: "Managed Solution",
        description: "The change in any GraphQL config gets seamlessly reflected on your GraphQL. ",
    },
    {
        id: 4,
        logo: require("@site/static/icons/basic/insight.svg").default,
        title: "Telemetry",
        description: "Low level insights of execute vs IO time for each query.",
    },
    {
        id: 5,
        logo: require("@site/static/icons/basic/connect.svg").default,
        title: "Scripting Flexibility",
        description: "Ability to write custom resolvers in Javascript.",
    },
]

export const additionalEnterpriseFeatures: AdditionalEnterpriseFeatures[] = [
    {
        id: 1,
        logo: require("@site/static/icons/basic/adaptive.svg").default,
        title: "Circuit breaking",
    },
    {
        id: 2,
        logo: require("@site/static/icons/basic/adaptive.svg").default,
        title: "Custom SLA",
    },
    {
        id: 3,
        logo: require("@site/static/icons/basic/adaptive.svg").default,
        title: "Schema redundancy detection",
    },
    {
        id: 4,
        logo: require("@site/static/icons/basic/adaptive.svg").default,
        title: "Query cost analysis",
    },
    {
        id: 5,
        logo: require("@site/static/icons/basic/adaptive.svg").default,
        title: "Breaking change detection",
    },
    {
        id: 6,
        logo: require("@site/static/icons/basic/adaptive.svg").default,
        title: "Expert 24x7 technical support",
    },
]

// Service Categories for Pricing
export const serviceCategories: ServiceCategory[] = [
    {
        id: "app-development",
        name: "App Development",
        label: "Mobile & Web Apps"
    },
    {
        id: "website-development",
        name: "Website Development",
        label: "Professional Websites"
    },
    {
        id: "software-development",
        name: "Software Development",
        label: "Custom Software"
    }
]

// Pricing Configuration for each service category
export const servicePricing = [
    {
        categoryId: "app-development",
        tiers: [
            {
                id: 1,
                name: "Starter",
                price: {
                    usd: "Starting at $2,500",
                    inr: "Starting at ₹2,00,000"
                },
                priceSubtext: "One-time payment",
                description: "Perfect for MVPs and simple applications",
                features: [
                    { id: 1, name: "Single platform (iOS or Android or Web)" },
                    { id: 2, name: "Up to 5 screens/pages" },
                    { id: 3, name: "Basic UI/UX design" },
                    { id: 4, name: "API integration (up to 3 endpoints)" },
                    { id: 5, name: "30 days post-launch support" }
                ],
                buttonText: "Get Started",
                buttonHref: "/contact",
                highlighted: false
            },
            {
                id: 2,
                name: "Professional",
                price: {
                    usd: "Starting at $7,500",
                    inr: "Starting at ₹6,00,000"
                },
                priceSubtext: "One-time payment",
                description: "Full-featured applications for growing businesses",
                features: [
                    { id: 1, name: "Cross-platform (iOS + Android or Web)" },
                    { id: 2, name: "Up to 15 screens/pages" },
                    { id: 3, name: "Custom UI/UX design" },
                    { id: 4, name: "Full backend integration" },
                    { id: 5, name: "User authentication & authorization" },
                    { id: 6, name: "Push notifications" },
                    { id: 7, name: "90 days post-launch support" }
                ],
                buttonText: "Contact Sales",
                buttonHref: "/contact",
                highlighted: true
            },
            {
                id: 3,
                name: "Enterprise",
                price: {
                    usd: "Custom Pricing",
                    inr: "Custom Pricing"
                },
                priceSubtext: "Contact for quote",
                description: "Scalable solutions for large organizations",
                features: [
                    { id: 1, name: "All Professional features" },
                    { id: 2, name: "Unlimited screens/pages" },
                    { id: 3, name: "Advanced security features" },
                    { id: 4, name: "Real-time features" },
                    { id: 5, name: "Performance optimization" },
                    { id: 6, name: "Dedicated support team" },
                    { id: 7, name: "1 year post-launch support" },
                    { id: 8, name: "Priority maintenance" }
                ],
                buttonText: "Contact Sales",
                buttonHref: "/contact",
                highlighted: false
            }
        ]
    },
    {
        categoryId: "website-development",
        tiers: [
            {
                id: 1,
                name: "Landing Page",
                price: {
                    usd: "Starting at $100",
                    inr: "Starting at ₹5,000"
                },
                priceSubtext: "One-time payment",
                description: "Single page for campaigns and product launches",
                features: [
                    { id: 1, name: "Single responsive page" },
                    { id: 2, name: "Modern design" },
                    { id: 3, name: "Contact form integration" },
                    { id: 4, name: "Basic SEO" },
                    { id: 5, name: "30 days support" }
                ],
                buttonText: "Get Started",
                buttonHref: "/contact",
                highlighted: false
            },
            {
                id: 2,
                name: "Business Website",
                price: {
                    usd: "Starting at $500",
                    inr: "Starting at ₹10,000"
                },
                priceSubtext: "One-time payment",
                description: "Multi-page website for your business",
                features: [
                    { id: 1, name: "Up to 10 pages" },
                    { id: 2, name: "Custom responsive design" },
                    { id: 3, name: "CMS integration" },
                    { id: 4, name: "Contact forms & integrations" },
                    { id: 5, name: "Advanced SEO" },
                    { id: 6, name: "Blog functionality" },
                    { id: 7, name: "60 days support" }
                ],
                buttonText: "Contact Sales",
                buttonHref: "/contact",
                highlighted: true
            },
            {
                id: 3,
                name: "E-Commerce",
                price: {
                    usd: "Starting at $1,000",
                    inr: "Starting at ₹99,999"
                },
                priceSubtext: "One-time payment",
                description: "Full-featured online store",
                features: [
                    { id: 1, name: "All Business Website features" },
                    { id: 2, name: "Product catalog management" },
                    { id: 3, name: "Shopping cart & checkout" },
                    { id: 4, name: "Payment gateway integration" },
                    { id: 5, name: "Order management system" },
                    { id: 6, name: "Inventory tracking" },
                    { id: 7, name: "Customer accounts" },
                    { id: 8, name: "90 days support" }
                ],
                buttonText: "Contact Sales",
                buttonHref: "/contact",
                highlighted: false
            }
        ]
    },
    {
        categoryId: "software-development",
        tiers: [
            {
                id: 1,
                name: "Basic",
                price: {
                    usd: "Starting at $5,000",
                    inr: "Starting at ₹4,00,000"
                },
                priceSubtext: "One-time payment",
                description: "Simple software solutions for specific needs",
                features: [
                    { id: 1, name: "Core functionality implementation" },
                    { id: 2, name: "Basic user interface" },
                    { id: 3, name: "Database integration" },
                    { id: 4, name: "Documentation" },
                    { id: 5, name: "60 days support" }
                ],
                buttonText: "Get Started",
                buttonHref: "/contact",
                highlighted: false
            },
            {
                id: 2,
                name: "Advanced",
                price: {
                    usd: "Starting at $15,000",
                    inr: "Starting at ₹12,00,000"
                },
                priceSubtext: "One-time payment",
                description: "Complex software with advanced features",
                features: [
                    { id: 1, name: "All Basic features" },
                    { id: 2, name: "Advanced functionality" },
                    { id: 3, name: "Custom integrations" },
                    { id: 4, name: "API development" },
                    { id: 5, name: "Security implementation" },
                    { id: 6, name: "Testing & QA" },
                    { id: 7, name: "90 days support" }
                ],
                buttonText: "Contact Sales",
                buttonHref: "/contact",
                highlighted: true
            },
            {
                id: 3,
                name: "Enterprise Solution",
                price: {
                    usd: "Custom Pricing",
                    inr: "Custom Pricing"
                },
                priceSubtext: "Contact for quote",
                description: "Large-scale software systems",
                features: [
                    { id: 1, name: "All Advanced features" },
                    { id: 2, name: "Microservices architecture" },
                    { id: 3, name: "Cloud deployment" },
                    { id: 4, name: "Load balancing & scaling" },
                    { id: 5, name: "Advanced security & compliance" },
                    { id: 6, name: "Monitoring & analytics" },
                    { id: 7, name: "Dedicated team" },
                    { id: 8, name: "1 year support" }
                ],
                buttonText: "Contact Sales",
                buttonHref: "/contact",
                highlighted: false
            }
        ]
    }
]

export const pricingPlans: PricingPlans[] = [
    {
        id: 1,
        name: "Basic plan",
        price: "Free",
        for: "For individuals & small companies",
        features: [
            {
                id: 1,
                name: "Access to all open source features",
            },

            {
                id: 2,
                name: "Basic reporting and analytics",
            },
        ],

        buttonText: "Get Started",
        mostPopular: false,
        href: "/docs/getting-started",
    },
    {
        id: 2,
        name: "Advanced plan",
        price: "$600/year",
        for: "per core",
        billing: "Billed Annually",
        volumeDiscounts: "(Volume discounts available)",
        features: [
            {
                id: 1,
                name: "Access to all open source features",
            },
            {
                id: 2,
                name: "Access to all enterprise features",
            },
            {
                id: 3,
                name: "GraphQL onboarding copilot",
            },
            {
                id: 4,
                name: "Full managed edge deployment",
            },
        ],
        buttonText: "Contact Sales",
        mostPopular: true,
        href: "/contact",
    },
    {
        id: 3,
        name: "Enterprise plan",
        price: "$1000/year",
        for: "per core",
        billing: "Billed Annually",
        volumeDiscounts: "(Volume discounts available)",
        features: [
            {
                id: 1,
                name: "Access to all advanced plan features",
            },
            {
                id: 2,
                name: "Custom SLA",
            },
            {
                id: 3,
                name: "Priority 24x7 Support",
            },
            {
                id: 4,
                name: "Advanced Security & Compliance",
            },
            {
                id: 5,
                name: "On premise deployment",
            },
            {
                id: 6,
                name: "Custom Plugin Development",
            },
        ],
        buttonText: "Contact Sales",
        mostPopular: false,
        href: "/contact",
    },
]

export const radioOptions: RadioOptions[] = [
    { id: "1", name: "Evaluating", value: "evaluating" },
    {
        id: "2",
        name: "Monolith",
        value: "monolith",
    },
    {
        id: "3",
        name: "Multiple Graphql with Bff",
        value: "bff",
    },
    {
        id: "4",
        name: "Federated",
        value: "federated",
    },
]

// Define an enum for theme options
export enum Theme {
    Light = "light",
    Dark = "dark",
    Gray = "gray",
    orkait = "orkait",
}

export const testimonials: CustomerFeedback[] = [
    {
        id: 1,
        citation: `Orkait transformed our web application development process. Their expertise in crafting digital experiences helped us deliver a product that truly inspires our users. The team's attention to detail and commitment to quality is unmatched.`,
        designation: `Project Manager`,
        name: "Client",
        department: "Web Apps",
    },
    {
        id: 2,
        citation: `Working with Orkait for our software solutions was a game-changer. They understood our requirements perfectly and delivered scalable solutions that exceeded our expectations. Their deployment strategies helped us grow seamlessly.`,
        designation: `CTO - Small Enterprise`,
        name: "Client",
        department: "Software Solutions",
    },
    {
        id: 3,
        citation: `Orkait's scaling and deployment solutions enabled our small enterprise to compete with larger players. Their comprehensive approach to enterprise scaling transformed our operational capabilities and opened new growth opportunities.`,
        designation: `Operations Director`,
        name: "Client",
        department: "Enterprise Scaling",
    },
]

export const blogTagsMapping: Record<string, BlogTag[]> = {
    "Technologies and Frameworks": [
        { label: "Angular", permalink: "/blog/tags/angular" },
        { label: "Apollo client", permalink: "/blog/tags/apollo-client" },
        { label: "JavaScript", permalink: "/blog/tags/java-script" },
        { label: "Node.js", permalink: "/blog/tags/node-js" },
        { label: "URQL", permalink: "/blog/tags/urql" },
        { label: "Villus", permalink: "/blog/tags/villus" },
        { label: "Vue", permalink: "/blog/tags/vue" },
    ],
    "Debugging and Tooling": [
        { label: "debugging", permalink: "/blog/tags/debugging" },
        { label: "IDE", permalink: "/blog/tags/ide" },
        { label: "Tooling", permalink: "/blog/tags/tooling" },
    ],
    "API Concepts and Tools": [
        { label: "API", permalink: "/blog/tags/api" },
        { label: "Fetch API", permalink: "/blog/tags/fetch-api" },
        { label: "GraphiQL", permalink: "/blog/tags/graphi-ql" },
        { label: "GraphQL", permalink: "/blog/tags/graph-ql" },
        { label: "OpenAPI", permalink: "/blog/tags/open-api" },
        { label: "Microservice", permalink: "/blog/tags/microservice" },
        { label: "Microservices", permalink: "/blog/tags/microservices" },
        { label: "Backend-for-Frontend", permalink: "/blog/tags/backend-for-frontend" },
    ],
    "Schema and Introspection": [
        { label: "Introspection", permalink: "/blog/tags/introspection" },
        { label: "Schema", permalink: "/blog/tags/schema" },
    ],
    "General Terms": [
        { label: "Performance", permalink: "/blog/tags/performance" },
        { label: "Scalability", permalink: "/blog/tags/scalability" },
        { label: "Security", permalink: "/blog/tags/security" },
        { label: "Strategy", permalink: "/blog/tags/strategy" },
        { label: "Migration", permalink: "/blog/tags/migration" },
        { label: "Design", permalink: "/blog/tags/design" },
        { label: "Flexibility", permalink: "/blog/tags/flexibility" },
    ],
    "Development Practices": [{ label: "Best Practices", permalink: "/blog/tags/best-practices" }],
}

export enum CookiePreferenceCategory {
    NECESSARY = "Necessary",
    ANALYTICS = "Analytics",
    PREFERENCE = "Preference",
    MARKETING = "Marketing",
}

export const reb2bScriptContent = `
!function () {var reb2b = window.reb2b = window.reb2b || [];
    if (reb2b.invoked) return;reb2b.invoked = true;reb2b.methods = ["identify", "collect"];
    reb2b.factory = function (method) {return function () {var args = Array.prototype.slice.call(arguments);
    args.unshift(method);reb2b.push(args);return reb2b;};};
    for (var i = 0; i < reb2b.methods.length; i++) {var key = reb2b.methods[i];reb2b[key] = reb2b.factory(key);}
    reb2b.load = function (key) {var script = document.createElement("script");script.type = "text/javascript";script.async = true;
    script.src = "https://s3-us-west-2.amazonaws.com/b2bjsstore/b/" + key + "/reb2b.js.gz";
    var first = document.getElementsByTagName("script")[0];
    first.parentNode.insertBefore(script, first);};
    reb2b.SNIPPET_VERSION = "1.0.1";reb2b.load("0OV0VHL3P56Z");}();
`
export const gtagScriptContent = `
function gtag(){dataLayer.push(arguments)}window.dataLayer=window.dataLayer||[],gtag("js",new Date),gtag("config","G-JEP3QDWT0G",{})
`

export const footerItems: FooterItem[] = [
    {
        title: "Company",
        items: [
            {
                name: "Privacy Policy",
                link: pageLinks.privacyPolicy,
            },
            // Add more company links here as needed:
            // {
            //   name: "About",
            //   link: pageLinks.about,
            // },
        ],
    },
    // Developers section disabled - no developer API/docs available yet
    // Uncomment when ready to add documentation
    // {
    //   title: "Developers",
    //   items: [
    //     {
    //       name: "Docs",
    //       link: pageLinks.docs,
    //     },
    //   ],
    // },
]

// Team members - Add photos to static/images/team/ folder
export const teamMembers: TeamMember[] = [
    {
        id: 1,
        name: "Kailas Mahavarkar",
        currentRole: "Senior SDE at YodaPlus",
        previousRoles: ["Pinelabs", "Carwale"],
        image: require("@site/static/images/team/kailas_profile_pic.jpg").default,
        redirection_url: "https://linkedin.com/in/kailasmahavarkar",
    },
    {
        id: 2,
        name: "Ritik Bokre",
        currentRole: "SDE-2 at Dassault Systems",
        previousRoles: ["Carwale"],
        image: require("@site/static/images/team/riitk_profile_pic.jpg").default,
        redirection_url: "https://www.linkedin.com/in/ritikbokre/   ",
    },
    {
        id: 3,
        name: "Kamal Maharana",
        currentRole: "SDE-3 at Zype",
        previousRoles: ["Pinelabs", "Quantiphi"],
        image: require("@site/static/images/team/kamal_profile_pic.jpg").default,
        redirection_url: "https://www.linkedin.com/in/kamal-maharana/",
    },
    {
        id: 4,
        name: "Suraj",
        currentRole: "Product Manager & SDE",
        previousRoles: [],
        image: require("@site/static/images/team/suraj_profile_pic.jpg").default,
        redirection_url: "https://www.linkedin.com/in/suraj-yadav03/",
    },
    {
        id: 5,
        name: "Upcoming Hire",
        currentRole: "SDE Intern",
    },
    {
        id: 6,
        name: "Upcoming Hire",
        currentRole: "SDE Intern",
    },
    {
        id: 7,
        name: "Upcoming Hire",
        currentRole: "Marketing",
    },
    {
        id: 8,
        name: "Upcoming Hire",
        currentRole: "Design",
    },
]
