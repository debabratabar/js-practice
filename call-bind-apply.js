
function cookDish(ingredient, style) {
    const name = 'restaurantName'
  return `${this.name} prepares ${ingredient} in ${style} style !`;
}

const sharmaKitchen = { name: "Sharma jis Kitchen" };
const guptaKitchen = { name: "Gupta jis Kitchen" };

console.log(cookDish.call(sharmaKitchen, "Paneer and spices", "Muglai"));