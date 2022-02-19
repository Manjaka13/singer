import "@fortawesome/fontawesome-svg-core/styles.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { config } from "@fortawesome/fontawesome-svg-core";
import {
	faFacebook,
	faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import {
	faEnvelope,
	faBars,
	faShoppingCart,
	faStar,
	faWrench,
	faLock,
	faHeart,
	faCalendarAlt,
	faMapMarkerAlt,
	faPhone,
	faCheckCircle,
	faTimesCircle,
	faCogs,
	faHome
} from "@fortawesome/free-solid-svg-icons";

/*
	Import all icons here
*/

// Manually add fontawesome styles
config.autoAddCss = false;

library.add(
	// Brands
	faFacebook,
	faInstagram,
	// Standard icons
	faEnvelope,
	faBars,
	faShoppingCart,
	faStar,
	faWrench,
	faLock,
	faHeart,
	faCalendarAlt,
	faMapMarkerAlt,
	faPhone,
	faCheckCircle,
	faTimesCircle,
	faCogs,
	faHome
);
