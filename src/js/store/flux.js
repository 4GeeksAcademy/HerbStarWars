const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			favorites: [],
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			addFavorite: (name) => {
				const store = getStore();
				const favorites = store.favorites;
				if (!favorites.includes(name)) {
					favorites.push(name);
					setStore({ favorites: favorites });
				}
				console.log("tried to add favorite", name);
			},
			removeFavorite: (name) => {
				const store = getStore();
				const favorites = store.favorites;
				const newFavorites = favorites.filter((favorite) => favorite !== name);
				setStore({ favorites: newFavorites });
			}
		}
	};
};

export default getState;
