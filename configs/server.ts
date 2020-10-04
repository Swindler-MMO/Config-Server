class Resource {
	id: number; // Item id of the node
	minAmount: number; // Minimal number of items given when a node is mined
	maxAmount: number; // Minimal number of items given when a node is mined
	hitsRequired: number; // Amount of hit required to mine a node

	constructor(id: number, minAmount: number, maxAmount: number, hitsRequired: number) {
		this.id = id;
		this.minAmount = minAmount;
		this.maxAmount = maxAmount;
		this.hitsRequired = hitsRequired;
	}

}

export default {

	updatesPerSeconds: 10, // Server updates per second
	resourceInteractCooldown: 400, // In ms
	resourceRespawnTime: 10000, // In ms

	resources: <Resource[]>[
		new Resource(0, 3, 6, 10),
		new Resource(1, 3, 6, 10),
	]

};
