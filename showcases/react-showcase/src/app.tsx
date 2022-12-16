import { DBButton, DBIcon, DBCard, DBDivider, DBInput } from '../../../output/react/src';

const App = () => {
	const onChangeEvent = (event: any) => {
		console.log("On Change Input event", event, event.target.value);
	}

	const onUpdateValidity = (isValid: boolean) => {
		console.log('input valid?', isValid);
	}

	return (
		<main>
			<h1>React</h1>
			<DBCard>
				<div
					style={{
						display: 'flex',
						gap: '4px',
						alignItems: 'stretch'
					}}>
					<DBDivider variant="vertical" />
					<DBButton variant="secondary">Test</DBButton>
					<DBDivider variant="vertical" />
					<DBButton text="Test" icon="account" />
					<DBIcon className="icon" icon="account" />
				</div>
			</DBCard>

			<div
				style={{
					display: 'flex',
					gap: '1rem',
					margin: '1rem 0'
				}}>
				<section className="db-ui-expressive">
					<DBInput
						description="Das ist die Beschreibung"
						label="Startbahnhof eingeben"
						placeholder="irgendein Text"
						iconBefore="edit"
						variant="error"
						id="input-expr-error"
						value="hello"
					/>

					<DBInput
						description="Valid test"
						label="Mit Event"
						placeholder="irgendein Text"
						iconBefore="edit"
						iconAfter="heart"
						variant="warning"
						id="input-expr-warning"
						required={true}
						onChange={onChangeEvent}
						validityChange={onUpdateValidity}
					/>
				</section>

				<section className="db-ui-regular">
					<DBInput
						label="Startbahnhof eingeben"
						placeholder="irgendein Text"
						iconAfter="heart"
						id="input-reg"
						required={true}
						minLength={5}
					/>
				</section>

				<section className="db-ui-functional">
					<DBInput
						id="db-input-functional-1"
						label="Startbahnhof eingeben"
						placeholder="irgendein Text"
					/>
					<DBInput
						id="db-input-functional-2"
						label="Textinput eingeben disabled"
						placeholder="irgendein Text"
						variant="information"
						disabled={true}
					/>
				</section>
			</div>
		</main>
	);};

export default App;
