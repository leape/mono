import { InputComponent } from '../components/input/input.component';
import { ButtonComponent } from '../components/button/button.component';
import { FormComponent } from '../components/form/form.component';
import { LinkComponent } from '../components/link/link.component';
import { AlertComponent } from '../components/alert/alert.component';
import { RadioComponent } from '../components/radio/radio.component';
import { InfotextComponent } from '../components/infotext/infotext.component';
import { SectionComponent } from '../components/section/section.component';
import { CardComponent } from '../components/card/card.component';

export const NAVIGATION_ITEMS = [
	{ path: 'radio', label: 'Radio', component: RadioComponent },
	{ path: 'alert', label: 'Alert', component: AlertComponent },
	{ path: 'infotext', label: 'Infotext', component: InfotextComponent },
	{ path: 'section', label: 'Section', component: SectionComponent },
	{ path: 'link', label: 'Link', component: LinkComponent },
	{ path: 'button', label: 'Button', component: ButtonComponent },
	{ path: 'input', label: 'Input', component: InputComponent },
	{ path: 'card', label: 'Card', component: CardComponent },
	{ path: '', label: 'Home', component: FormComponent, pathMatch: 'full' }
];