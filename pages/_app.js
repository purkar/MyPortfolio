import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/argon-design-system-react.css";
import "../styles/styles.css";
import "../styles/vendor/font-awesome/css/font-awesome.min.css";
import "../styles/vendor/nucleo/css/nucleo.css";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function MyApp({ Component, pageProps }) {
	return (
	
	<Component {...pageProps} />
	
	);
}

export default MyApp;
