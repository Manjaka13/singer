import "@fortawesome/fontawesome-svg-core/styles.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { config } from "@fortawesome/fontawesome-svg-core";
import {
	faEnvelope,
	faHeart,
	faStar,
	faShoppingCart,
	faMapMarkerAlt,
	faPhone,
	faCalendar,
	faTimesCircle,
	faCheckCircle,
	faCalendarAlt,
	faUser,
	faLock,
	faWrench,
	faBars,
	faEye
} from "@fortawesome/free-solid-svg-icons";
import {
	faFacebook,
	faInstagram
} from "@fortawesome/free-brands-svg-icons";

/*
	Import all icons here
*/

// Manually add fontawesome styles
config.autoAddCss = false;

library.add(
	faFacebook,
	faInstagram,
	faEnvelope,
	faHeart,
	faStar,
	faShoppingCart,
	faMapMarkerAlt,
	faPhone,
	faCalendar,
	faTimesCircle,
	faCheckCircle,
	faCalendarAlt,
	faUser,
	faLock,
	faWrench,
	faBars,
	faEye
);
