import Footer from "@/components/Footer";
import Main from "@/components/Homepage";
import Header from "@/components/Header";
import React from "react";

export default function Home() {
    return (
        <main className="flex flex-col">
            <Header />
            <Main />
            <Footer />
        </main>
    );
}
