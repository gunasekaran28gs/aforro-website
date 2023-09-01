import Link from "next/link";
import Head from "next/head";
import { createClient } from "contentful";
import BlogCard from "../../components/BlogCard";

export async function getStaticProps() {
	const client = createClient({
		space: process.env.CONTENTFUL_SPACE_ID,
		accessToken: process.env.CONTENTFUL_ACCESS_KEY,
	});

	const res = await client.getEntries({ content_type: "blogPost" });

	return {
		props: {
			blogs: res.items
		},
		revalidate: 1
	};
}

export default function Recipes({ blogs }) {
	return (
		<div className="page-content">
      <Head>
				<title>Blogs</title>
				<meta name="description" content="" />
			</Head>
      <h1 className="text-3xl m-10 bold text-center">Blogs</h1>
      <div className="recipe-list">

      
			{blogs.map((blog) => (
				<BlogCard key={blog.sys.id} blog={blog} />
			))}

			<style jsx>{`
				.recipe-list {
					display: grid;
					grid-template-columns: 1fr 1fr 1fr;
					grid-gap: 20px;
				}
				@media screen and (max-width: 768px) {
					.recipe-list {
						grid-template-columns: 1fr ;
					}
				}
			`}</style>
      </div>
		</div>
	);
}
