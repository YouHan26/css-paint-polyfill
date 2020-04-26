/** Basically fetch(u).then( r => r.text() ) */
export function fetchText(url, callback) {
	let xhr = new XMLHttpRequest();
	xhr.onreadystatechange = () => {
		if (xhr.readyState===4) {
			callback(xhr.responseText);
		}
	};
	xhr.open('GET', url, true);
	xhr.send();
}

/** Object.defineProperty() ponyfill */
export function defineProperty(obj, name, def) {
	if (Object.defineProperty) {
		Object.defineProperty(obj, name, def);
	}
	else {
		obj[name] = def.get();
	}
}
