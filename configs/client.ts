class Item {

	id: number;
	name: string;
	stackSize: number;
	isStackable: boolean;

	constructor(id: number, name: string, stackSize: number, isStackable: boolean) {
		this.id = id;
		this.name = name;
		this.stackSize = stackSize;
		this.isStackable = isStackable;
	}

}

export default {

	interactCooldown: 0.5, // In seconds
	movementUpdateTime: 0.1, // In seconds
	gameServer: "swindler.thebad.xyz:2525",
	items: <Item[]> [
		new Item(0, "Wood", 30, true),
		new Item(1, "Stone", 30, true),
	],

};
