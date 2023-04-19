import Form from '../components/form/Form.vue';
import Button from '../components/button/Button.vue';
import Input from '../components/input/Input.vue';
import Link from '../components/link/Link.vue';
import Alert from '../components/alert/Alert.vue';
import Radio from '../components/radio/Radio.vue';
import Infotext from '../components/infotext/Infotext.vue';
import Section from '../components/section/Section.vue';
import Card from '../components/card/Card.vue';

export const navigationItems: any = [
	{ path: '/', label: 'Home', component: Form },
	{ path: '/radio', label: 'Radio', component: Radio },
	{ path: '/alert', label: 'Alert', component: Alert },
	{ path: '/infotext', label: 'Infotext', component: Infotext },
	{ path: '/section', label: 'Section', component: Section },
	{ path: '/link', label: 'Link', component: Link },
	{ path: '/button', label: 'Button', component: Button },
	{ path: '/input', label: 'Input', component: Input },
	{ path: '/card', label: 'Card', component: Card }
];