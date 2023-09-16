import {createClient} from "@sanity/client"

const client = createClient({
	projectId: "87eqmke9",
	dataset: "production",
	apiVersion: "2021-10-21",
	useCdn: false,
	token:'skZDntvfiYf6cS6Gyh90Qn9ktE9GUs2wPcyxFe81fKvClGdQ4pOfB3mMngTpINA9nIC8eHdd2i66GPCwNcjS8qQA8oLMWU7wpVSSj4QJGcZNGPczvKTIkqetjLzwxvZTDwuNJBEWh9sJkmkv4uvUguflo94aP7vdPhxHuztc1t947WEa0z3d'
});

export async function load({ params }) {
	const data = await client.fetch(`*[slug.current == "${params.slug}"][0]`);
	const author = await client.fetch(`*[_id == "${data.author._ref}"][0]`)

	if (data) {
		return {
			post: data,
			author
		};
	}
	return {
		status: 500,
		body: new Error("Internal Server Error")
	};
}