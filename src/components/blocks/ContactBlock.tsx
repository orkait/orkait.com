import React, { useState } from "react";
import { Globe, Headset, MapPin, Send } from "lucide-react";

const contactTab = [

    {
        icon: <Headset />,
        title: "Contact Number",
        desription: (
            <>
       
            </>
        ),
    },
    {
        icon: <Send />,
        title: "Email Address",
        desription: `connect@orkait.com`,
    },
    {
        icon: <Globe />,
        title: "Website",
        desription: "orkait.com",
    },
];

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        contact: "",
        message: "",
    });



    const contactChangeHandler = (e) => {
        setFormData({
            ...formData,
            contact: e.target.value
        });
    }

    const emailChangeHandler = (e) => {
        setFormData({
            ...formData,
            email: e.target.value
        });
    }

    const messageChangeHandler = (e) => {
        setFormData({
            ...formData,
            message: e.target.value
        });
    }

    const nameChangeHandler = (e) => {
        setFormData({
            ...formData,
            name: e.target.value
        });
    }

    return (
        <>
            <div >
                <div className="md:w-96 mx-auto text-center prose max-w-full">
                    <h1>Contact US</h1>
                    <div className="text-xl">
                        <p>
                            We are always happy to help you. If you have any questions or need any information, please feel free to contact us.
                        </p>
                    </div>
                </div>
                {/* Cards */}
                <div className="container mx-auto h-auto">
                    <div className="flex gap-5 justify-center flex-wrap h-auto lg:flex-nowrap ">
                        {contactTab.map((x, index) => {
                            return (
                                <div key={index} className="card max-w-md w-full shadow-md border-[1px] hover:shadow-xl h-auto ">
                                    <div className="card-body items-center flex-grow-0  text-center">
                                        <h2 className="card-title p-0 m-0 child:w-14 child:h-14 ">
                                            {x.icon}
                                        </h2>
                                        <p className="text-lg font-bold m-0 p-0">
                                            {x.title}
                                        </p>
                                        <div className=" text-lg font-semibold m-0 p-0">
                                            {x.desription}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
            <div className=" container mx-auto  flex flex-wrap shadow-md border-[1px] hover:shadow-xl my-20 rounded-md p-5">
                <div className="lg:w-1/2 w-full p-4">
                    <form className="rounded-lg ">
                        <div className="flex flex-col">
                            {/* name */}
                            <div className="mx-auto form-control w-full">
                                <label className="label">
                                    <span className="label-text">
                                        Full Name <span className="text-red-600">*</span>
                                    </span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Type here"
                                    value={formData.name}
                                    onChange={nameChangeHandler}
                                    required
                                    className="input input-bordered w-full  "
                                />
                            </div>
                            <div className="mx-auto form-control w-full">
                                <label className="label"
                                >
                                    <span className="label-text">
                                        Contact Number <span className="text-red-600">*</span>
                                    </span>
                                </label>
                                <input
                                    type="text"
                                    value={formData.contact}
                                    onChange={contactChangeHandler}
                                    placeholder="Type here"
                                    className="input input-bordered w-full  "
                                />
                            </div>
                            <div className="mx-auto form-control w-full">
                                <label className="label">
                                    <span className="label-text">
                                        Email Address (optional)
                                    </span>
                                </label>
                                <input
                                    type="text"
                                    value={formData.email}
                                    onChange={emailChangeHandler}
                                    placeholder="Type here"
                                    className="input input-bordered w-full  "
                                />
                            </div>
                            <div className="mx-auto form-control w-full">
                                <label className="label">
                                    <span className="label-text">
                                        Message <span className="text-red-600">*</span>
                                    </span>
                                </label>
                                <textarea
                                    placeholder="Type here"
                                    value={formData.message}
                                    onChange={messageChangeHandler}
                                    className="textarea textarea-bordered w-full min-h-[150px]"
                                />
                            </div>
                            <div className="w-full my-4 flex justify-end ">
                                <button
                                    onClick={(e) => {
                                        e.preventDefault();
                                        alert("Message Sent")
                                    }}
                                    className="btn btn-primary rounded-full w-full">
                                    Send Message
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="lg:w-1/2 w-full p-4">
                    <div className="relative aspect-w-16 h-[50vw] lg:h-full aspect-h-9">
                        <iframe
                            className="absolute inset-0 w-full h-full"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.3798302832124!2d72.88187687423752!3d19.090985882116648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9000984d205%3A0x39059500acbd112f!2sOrkait%20Solutions!5e0!3m2!1sen!2sin!4v1714404522046!5m2!1sen!2sin"
                            allowFullScreen
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;