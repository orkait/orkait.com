import "../styles/globals.css";
import "react-vertical-timeline-component/style.min.css";

import "react-whatsapp-widget/dist/index.css";
import UserContext from "../context/UserContext";
import useWindowDimensions from "../components/hooks/useWindowDimensions";

function MyApp({ Component, pageProps }) {
	const { width } = useWindowDimensions();

	return (
		<UserContext.Provider value={{ width }}>
			<Component {...pageProps} />
		</UserContext.Provider>
	);
}

export default MyApp;
