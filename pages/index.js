import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { createClient } from "contentful";
import BlogCard from "../components/BlogCard";

export async function getStaticProps() {
	const client = createClient({
		space: process.env.CONTENTFUL_SPACE_ID,
		accessToken: process.env.CONTENTFUL_ACCESS_KEY,
	});

	const res = await client.getEntries({ content_type: "blogPost" });

	return {
		props: {
			blogs: res.items,
			revalidate: 1,
		},
	};
}

export default function Recipes({ blogs }) {
	return (
		<>
			<div
				className="hero w-full p-8 mb-14 lg:p-16 "
				style={{ backgroundImage: "url(/banner-bg-hero.jpg)" }}
			>
				<div className=" bg-opacity-60"></div>
				<div className="hero-content flex-col lg:flex-row text-center text-neutral-content">
					<div className="max-w-xl">
						<h2 className="mb-5 text-5xl h1 font-bold">
							Currently Delivering in{" "}
							<span className="orange-text">Haridwar.</span>
						</h2>
						<h2 className="mb-5 text-4xl h1 font-bold">
							Coming Soon to<span className="orange-text"> Your City...</span>
						</h2>
						<div className="mt-12">
							<h3 className="mb-5 text-2xl font-bold">Download App</h3>
							<div className="flex gap-4 flex-row justify-center lg:flex-row ">
              <a
									href="https://play.google.com/store/apps/details?id=com.Aforro&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
									target="_blank"
								>
								<Image src="/google-play.png" width={150} height={350} alt="" />
                </a>
								<Image src="/apple-store.png" width={140} height={300} alt="" />
							</div>
						</div>
					</div>
					<Image src="/hero-image.png" width={350} height={350} alt="" />
				</div>
			</div>
			<div className="flex flex-col items-center  gap-6 lg:flex-row page-content">
				<div className="flex-1 text-center ml-auto	mr-auto	">
					<Image
						src="/logo-w-o-text.png"
						width={350}
						height={150}
						alt=""
						className="text-center"
					/>
				</div>

				<div className="flex-1">
					<h1 className="text-3xl font-bold text-center lg:text-left">
						About us!
					</h1>
					<p className="py-6 leading-8">
						Why should big cities have all the ease? Why can’t tier 2 cities get
						their groceries delivered at doorstep within minutes? Why only big
						cities are targeted by service providers when it comes to tech and
						comfort? Aforro has answer to them all, and Aforro stands right
						beside tier 2 cities, working continuously to bring ease and comfort
						of ordering groceries online..
					</p>
				</div>
			</div>

			<div className="p-6 bg-light-orange">
				<div className="flex flex-col lg:flex-row page-content gap-6 items-center">
					<div className="flex-1 m-auto">
						<Image src="/image-text-1.png" width={450} height={350} alt="" />
					</div>
					<div className="flex-1">
						<h3 className="mb-5 text-3xl  font-bold text-center">
							Download The App From The Given Link
						</h3>
						<div className="flex gap-4 flex-row justify-center lg:flex-row ">
							<div>
								<a
									href="https://play.google.com/store/apps/details?id=com.Aforro&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
									target="_blank"
								>
									<Image
										src="/google-play.png"
										width={150}
										height={350}
										alt=""
                    
									/>
								</a>
							</div>
							<div>
								<Image src="/apple-store.png" width={140} height={300} alt="" className="m-auto" />
								<p>Comming soon...</p>
							</div>
						</div>
					</div>
				</div>
			</div>

      <div className="p-6 ">
				<div className="flex flex-col-reverse  lg:flex-row page-content gap-6 items-center">
					
					<div className="flex-1">
						<h3 className="mb-5 text-3xl  font-bold text-center">
            Add to cart everything that is in your mind
						</h3>
						
					</div>
          <div className="flex-1">
						<Image src="/add-to-cart.png" width={450} height={350} alt="" className="m-auto" />
					</div>
				</div>
			</div>

      <div className="p-6 bg-light-orange">
				<div className="flex flex-col lg:flex-row page-content gap-6 items-center">
					<div className="flex-1">
						<Image src="/place-an-order.png" width={450} height={350} alt="" />
					</div>
					<div className="flex-1">
						<h3 className="mb-5 text-3xl  font-bold text-center">
            Place an order and relax while we work on fulfilling the order
						</h3>
						
					</div>
				</div>
			</div>

      <div className="p-6 ">
				<div className="flex flex-col-reverse  lg:flex-row page-content gap-6 items-center">
					
					<div className="flex-1">
						<h3 className="mb-5 text-3xl  font-bold text-center">
            Your order will be delivered within 30-60 minutes
						</h3>
						
					</div>
          <div className="flex-1">
						<Image src="/order-delivery.png" width={450} height={350} alt="" className="m-auto" />
					</div>
				</div>
			</div>

			<div className=" page-content">
				<h2 className="text-center m-8 text-3xl font-bold">Blogs</h2>
				<div className="blog-list">
					{blogs.slice(0, 3).map((blog) => (
						<BlogCard key={blog.sys.id} blog={blog} />
					))}

					<style jsx>{`
						.blog-list {
							display: grid;
							grid-template-columns: 1fr 1fr 1fr;
							grid-gap: 20px;
						}
						@media screen and (max-width: 768px) {
							.blog-list {
								grid-template-columns: 1fr;
							}
						}
					`}</style>
				</div>
			</div>
		</>
	);
}
