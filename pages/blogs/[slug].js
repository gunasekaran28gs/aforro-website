import { createClient } from "contentful";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Head from "next/head";

const client = createClient({
	space: process.env.CONTENTFUL_SPACE_ID,
	accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

const options = {
    renderNode: {
        [BLOCKS.EMBEDDED_ASSET]: ({ data: { target: { fields }}}) =>
		<div dangerouslySetInnerHTML={{__html:`<img src="${fields.file.url}" height="${fields.file.details.image.height}" width="${fields.file.details.image.width}" alt="${fields.description}"/>`}} />,
    },
};

export const getStaticPaths = async () => {
	const res = await client.getEntries({
		content_type: "blogPost",
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
		content_type: "blogPost",
		"fields.slug": params.slug,
	});

	return {
		props: { blog: items[0] },
		revalidate: 1,
	};
}

export default function RecipeDetails({ blog }) {
	const { featuredImage, blogContent, title } = blog.fields;
	return (
		<div className="page-content">
			<Head>
				<title>{title}</title>
				<meta name="description" content="" />
			</Head>
			<div className="banner">
				<Image
					src={"https:" + featuredImage.fields.file.url}
					width="0"
					height="0"
					alt=""
					sizes="100vw"
					style={{ width: "100%", margin: "0 auto", height: "auto" }}
				/>
				<h1>{title}</h1>
			</div>
			<div className="blog-article">
				<div>{documentToReactComponents(blogContent, options)}</div>
			</div>

			<style jsx>{`
				h2,
				h3 {
					text-transform: uppercase;
				}
				.banner h1 {
					margin: 0;
					background: #fff;
					display: inline-block;
					padding: 20px;
					position: relative;
					top: -60px;
					left: -10px;
					transform: rotateZ(-1deg);
					box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.1);
				}
				.info p {
					margin: 0;
				}
				.info span::after {
					content: ", ";
				}
				.info span:last-child::after {
					content: ".";
				}
			`}</style>
		</div>
	);
}
