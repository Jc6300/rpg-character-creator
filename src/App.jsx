import { useState } from "react";
import noCharacter from "./unils/noCharacter";
import Character from "./components/Character";
import Options from "./components/Options";
import attackOptionsList from "./data/attackOptionsList";
import namesList from "./data/namesList";
import StatusBars from "./components/StatusBar";
import Button from "./components/Button";
import "./App.css";

function App() {
	const [characterData, setCharacterData] = useState({
		hat: false,
		shield: false,
		weapon: "sword",
		name: namesList[7],
		attackOptions: attackOptionsList.slice(0, 6),
		stats: {
			hp: 40,
			mp: 100,
			strength: 100,
		},
	});

	let dataToUse, functionToUse;

	try {
		if (characterData) {
			dataToUse = characterData;
		}
	} catch {
		dataToUse = noCharacter.noData;
	}

	try {
		if (setCharacterData) {
			functionToUse = setCharacterData;
		}
	} catch {
		functionToUse = noCharacter.noFunction;
	}

	return (
		<div className="wrapper">
			<StatusBars characterData={dataToUse} />

			<Character characterData={dataToUse} />

			<Options characterData={dataToUse} />

			<Button setCharacterData={functionToUse} />
		</div>
	);
}

export default App;
