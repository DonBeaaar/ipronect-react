import React from "react";
import { Provider } from "react-redux";
import IpronectRouter from "./routers/IpronectRouter";
import { store } from "./store/store";


const IpronectApp = () => {
	return (
		<>
			{/* Acá se da el contexto para redux */}
			<Provider store={store}>
				<IpronectRouter />
			</Provider>
		</>
	);
};

export default IpronectApp;
