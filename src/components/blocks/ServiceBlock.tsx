import React from "react";
import { Activity, Banknote, BarChart, Database, HandCoins, Laptop, LayoutGrid, Network, User } from "lucide-react";

const services = [
    {
        icon: <Laptop className="text-white" />,
        title: "Web Design",
        description:
            "We design and develop websites that are visually appealing, user-friendly, and optimized for search engines.",
    },
    {
        icon: <BarChart className="text-white" />,
        title: "Marketing",
        description:
            "We create marketing strategies that help businesses reach their target audience and increase sales.",
    },
    {
        icon: <Database className="text-white" />,
        title: "Graphics",
        description:
            "We design logos, brochures, business cards, and other marketing materials that help businesses stand out from the competition.",
    },
    {
        icon: <Banknote className="text-white" />,
        title: "Data Analysis",
        description:
            "We analyze data to help businesses make informed decisions and improve their operations.",
    },
    {
        icon: <LayoutGrid className="text-white" />,
        title: "App Development",
        description:
            "We develop mobile and web applications that help businesses streamline their operations and reach more customers.",
    },
    {
        icon: <Activity className="text-white" />,
        title: "Accounting",
        description:
            "We provide accounting services that help businesses manage their finances and comply with tax regulations.",
    },
    {
        icon: <HandCoins className="text-white" />,
        title: "Payroll",
        description:
            "We provide payroll services that help businesses pay their employees accurately and on time.",
    },
    {
        icon: <Network className="text-white" />,
        title: "Networking",
        description:
            "We design and implement computer networks that help businesses connect their devices and share information.",
    }
]

const SingleService = ({
    icon,
    title,
    description,
}: {
    icon: JSX.Element;
    title: string;
    description: string;
}) => {
    return (
        <div className="card flex m-0 p-0 flex-col max-w-md shadow-md hover:shadow-xl border-[1px] overflow-hidden">
            <div className="relative ">
                <span className="absolute border-2 right-0 top-0 w-[100px] h-[100px] translate-x-[50%] translate-y-[-50%] rounded-full ">
                </span>
                <span className="absolute border-2 right-0 top-0 w-[75px] h-[75px] translate-x-[50%] translate-y-[-50%] rounded-full ">
                </span>
                <span className="absolute border-2 right-0 top-0 w-[50px] h-[50px] translate-x-[50%] translate-y-[-50%] rounded-full ">
                </span>
                <span className="absolute border-2 right-0 top-0 w-[30px] h-[30px] translate-x-[50%] translate-y-[-50%] rounded-full ">
                </span>
            </div>



            <div className="card-body p-5">
                <div className="flex p-5 pb-0">
                    <div className="relative overflow-hidden h-14 w-14 rounded-2xl  bg-gradient-to-b from-slate-200 to-slate-300 dark:from-slate-700 dark:to-[#171C23] shadow-lg shadow-black/5">
                        <div className="absolute inset-x-4 h-4 -bottom-2 bg-indigo-400 blur-md dark:opacity-80" />
                        <div className="relative h-full w-full rounded-[15px] bg-gradient-radial from-white to-slate-100 dark:from-[#393C45] dark:to-[#171C23] flex justify-center items-center">
                            <div className="absolute inset-x-4 h-4 -bottom-2 bg-indigo-400 blur-lg dark:opacity-80 " />
                            {icon}
                        </div>
                    </div>
                    <h3 className="flex-1 items-center justify-start pl-5 flex m-0 p-0 font-display font-extrabold leading-tight text-lg lg:text-xl dark:drop-shadow-sm">
                        {title}
                    </h3>
                </div>
                <p className="leading-relaxed text-start m-0 p-5 pt-2">
                    {description}
                </p>
            </div>



        </div>
    )
}

const ServiceBlock = () => {
    return (
        <div className="service-container prose max-w-full child:mb-0 text-center ">
            <h1>Our Services</h1>
            <section className="mx-auto w-full max-w-screen-xl pt-8">
                <div className="grid grid-cols-1 gap-12 lg:gap-x-16 md:grid-cols-2 lg:grid-cols-3">
                    {
                        services.map((service, index) => (
                            <SingleService
                                key={index}
                                icon={service.icon}
                                title={service.title}
                                description={service.description}
                            />
                        ))
                    }
                </div>
            </section>
        </div>
    );
};

export default ServiceBlock;
