import Footer from "../components/Footer";
import Main from "../components/Homepage";
import Header from "../components/Header";
import WhatsAppWidget from "react-whatsapp-widget";

export default function Home() {
	return (
		<>
			<Header />
			<Main />
			<WhatsAppWidget phoneNumber="9920962195" />
			<Footer />
		</>
	);
}
