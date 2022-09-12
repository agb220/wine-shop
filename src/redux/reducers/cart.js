const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};

const getTotalPrice = (arr) => arr.reduce((sum, obj) => obj.price + sum, 0);

const cart = (state = initialState, action, id) => {
  //console.log("state", state);
  switch (action.type) {
    case "ADD_PRODUCT_CART": {
      const currentProductItems = !state.items[action.payload.id]
        ? [action.payload]
        : [...state.items[action.payload.id].items, action.payload];

      //console.log("currentProductItems", currentProductItems); //1 вид продукту в корзині (масив об'єктів) немає загального totalPrice

      const newItems = {
        ...state.items,
        [action.payload.id]: {
          items: currentProductItems,
          totalPrice: getTotalPrice(currentProductItems),
        },
      };

      //console.log("newItems", newItems); // корзина всіх продуктів (об'єкт-масив-обєкти) немає загального totalPrice

      const items = Object.values(newItems).map((obj) => obj.items);

      //console.log("items", items); // корзина всіх продуктів (масив-обєктів) немає загального totalPrice

      const allProducts = [].concat.apply([], items);

      //console.log("allProducts", allProducts); // корзина всіх продуктів (масив-обєктів) має length

      const totalPrice = getTotalPrice(allProducts);

      //console.log(" getTotalPrice(allProducts)", getTotalPrice(allProducts)); //функція яка розраховує загальну суму
      //console.log("totalPrice", totalPrice); // виводить загальну суму корзини

      return {
        ...state,
        items: newItems,
        totalCount: allProducts.length,
        totalPrice: totalPrice,
      };
    }

    case "MINUS_CART_ITEM": {
      const oldItems = state.items[action.payload].items;
      const newItems =
        oldItems.length === 1
          ? oldItems
          : state.items[action.payload].items.slice(1);

      const oneBottlePrice = newItems[0].price;
      //const oneBottleCount = newItems.length;

      const currentTotalPrice =
        oldItems.length === 1
          ? state.items[action.payload].totalPrice
          : state.items[action.payload].totalPrice - oneBottlePrice;

      const currentTotalPriceAll =
        oldItems.length === 1
          ? state.totalPrice
          : state.totalPrice - oneBottlePrice;

      const currentTotalCountAll =
        oldItems.length === 1 ? state.totalCount : state.totalCount - 1;

      return {
        ...state,
        items: {
          ...state.items,
          [action.payload]: {
            items: newItems,
            totalPrice: currentTotalPrice,
            totalCount: newItems.length,
          },
        },
        totalPrice: currentTotalPriceAll,
        totalCount: currentTotalCountAll,
      };
    }

    case "PLUS_CART_ITEM": {
      const newItems = [
        ...state.items[action.payload].items,
        state.items[action.payload].items[0],
      ];

      //console.log("newItems", newItems);

      const oneBottlePrice = newItems[0].price;

      const currentTotalPrice =
        state.items[action.payload].totalPrice + oneBottlePrice;

      const currentTotalPriceAll = state.totalPrice + oneBottlePrice;

      const currentTotalCountAll = state.totalCount + 1;

      return {
        ...state,
        items: {
          ...state.items,
          [action.payload]: {
            items: newItems,
            totalPrice: currentTotalPrice,
            totalCount: newItems.length,
          },
        },
        totalPrice: currentTotalPriceAll,
        totalCount: currentTotalCountAll,
      };
    }
    case "REMOVE_CART_ITEM": {
      const newItems = {
        ...state.items,
      };
      const currentTotalPrice = newItems[action.payload].totalPrice;
      const currentTotalCount = newItems[action.payload].items.length;

      delete newItems[action.payload];
      return {
        ...state,
        items: newItems,
        totalPrice: state.totalPrice - currentTotalPrice,
        totalCount: state.totalCount - currentTotalCount,
      };
    }

    case "CLEAR_CART":
      return {
        totalPrice: 0,
        totalCount: 0,
        items: {},
      };

    default:
      return state;
  }
};
export default cart;
