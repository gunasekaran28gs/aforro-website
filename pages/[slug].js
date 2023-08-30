import { createClient } from "contentful";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Head from "next/head";

const client = createClient({
	space: process.env.CONTENTFUL_SPACE_ID,
	accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

export const getStaticPaths = async () => {
	const res = await client.getEntries({
		content_type: "pages",
	});

	const paths = res.items.map((item) => {
		return {
			params: { slug: item.fields.slug },
		};
	});

	return {
		paths,
		fallback: false,
	};
};

export async function getStaticProps({ params }) {
	const { items } = await client.getEntries({
		content_type: "pages",
		"fields.slug": params.slug,
	});

	return {
		props: { blog: items[0] },
		revalidate: 1,
	};
}

export default function RecipeDetails({ blog }) {
	const {  pageContent, title, description } = blog.fields;
	return (
		<div className="page-content">
			<Head>
				<title>{title}</title>
				<meta name={description} content="" />
			</Head>
			
          <div className="page-content">
            <h1 className="text-center text-3xl m-8">{title}</h1>
          </div>
      
			<div >
				<div>{documentToReactComponents(pageContent)}</div>
			</div>

		</div>
	);
}
