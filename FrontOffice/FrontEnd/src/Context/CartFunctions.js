import { toast } from "sonner";
const infoStyles = {
	backgroundColor: "white",
	color: "red",
};
// export const loadCart = () => {
// 	let cart = [];

// 	if (localStorage.getItem("cart")) {
// 		cart = JSON.parse(localStorage.getItem("cart"));
// 		return cart;
// 	} else {
// 		console.log("nn tinha");
// 		localStorage.setItem("cart", JSON.stringify(cart));
// 		console.log(JSON.parse(localStorage.getItem("cart")));
// 		return cart;
// 	}
// };

export function EraseAll() {
	localStorage.removeItem("cart");
}
export function removeFromCart(item, cart) {
	let cartFiltered = cart.filter(
		(element) => element.id_produto != item.id_produto
	);
	cart = cartFiltered;
	return cart;
}
export function increase(item, cart) {
	const cartCopy = cart.map((produto) => {
		if (produto.id_produto == item.id_produto)
			({
				...item,
				qtd: produto.qtd++,
			});
		return produto;
	});
	console.log(cartCopy);
	return cartCopy;
}

export function decrease(item, cart) {
	const cartCopy = cart.map((produto) => {
		if (produto.id_produto == item.id_produto && produto.qtd > 0)
			({
				...item,
				qtd: produto.qtd--,
			});
		if (produto.id_produto == item.id_produto && produto.qtd == 0) {
			toast.warning(
				"Se você deseja remover o item, clique no ícone de remover",
				{
					style: infoStyles,
				}
			);
		}
		return produto;
	});
	console.log(cartCopy);

	return cartCopy;
}

export const addToContextCart = (item, context) => {
	let produto = context.cart.find(
		(elemento) => elemento.id_produto == item.id_produto
	);
	if (produto == undefined) {
		console.log("deu undefined");
		let disco = {
			nome_disco: item.nome_disco,
			artista: item.artista,
			id_produto: item.id_produto,
			qtd: 1,
			valor: item.valor,
			imagem: item.imagem,
		};
		console.log("cart: ", context.cart);
		console.log("disco: ", disco);
		context.setCart([...context.cart, disco]);
	}
	if (produto) {
		context.setCart(increase(item, context.cart));
	}
};
