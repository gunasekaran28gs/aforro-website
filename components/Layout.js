import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa6";

export default function Layout({ children }) {
	return (
		<div className="layout">
			<Head>
				<title>Aforro</title>
				<meta name="description" content="" />
				<link rel="icon" href="/icon.ico" />
				<link
					rel="apple-touch-icon"
					href="/icon.ico"
					type="image/<generated>"
				/>
			</Head>

			<header>
				<div className="shadow">
					<div className="navbar p-3  bg-base-100  container mx-auto">
						<div className="navbar-start ">
							<div className="dropdown">
								<label tabIndex={0} className="btn btn-ghost lg:hidden">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-5 w-5"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M4 6h16M4 12h8m-8 6h16"
										/>
									</svg>
								</label>
								<ul
									tabIndex={0}
									className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
								>
									<li>
										<Link href="/">Home</Link>
									</li>
									<li>
										<Link href="/about">About Us</Link>
									</li>
									<li>
										<Link href="/our-products">Our Productss</Link>
									</li>
									<li>
										<Link href="/careers">Careers</Link>
									</li>
									<li>
										<Link href="/blogs">Blogs</Link>
									</li>
									<li>
										<Link href="/privacy-policy">Privacy</Link>
									</li>
									<li>
										<Link href="/terms-and-conditions">Terms</Link>
									</li>
								</ul>
							</div>
							<Link href="/" className="hidden lg:flex ">
								<Image src="/logo.png" width={150} height={100} alt="" />
							</Link>
						</div>
						<div className="navbar-center lg:hidden">
							<Link href="/" className=" ">
								<Image src="/logo.png" width={120} height={80} alt="" />
							</Link>
						</div>
						<div className="navbar-center hidden lg:flex">
							<ul className="menu menu-horizontal px-1 font-semibold uppercase">
								<li>
									<Link href="/">Home</Link>
								</li>
								<li>
									<Link href="/about">About Us</Link>
								</li>
								<li>
									<Link href="/our-products">Our Productss</Link>
								</li>
								<li>
									<Link href="/careers">Careers</Link>
								</li>
								<li>
									<Link href="/blogs">Blogs</Link>
								</li>
								<li>
									<Link href="/privacy-policy">Privacy</Link>
								</li>
								<li>
									<Link href="/terms-and-conditions">Terms</Link>
								</li>
							</ul>
						</div>
						<div className="navbar-end">
							<a href="https://play.google.com/store/apps/details?id=com.Aforro" target="_blank" className="btn bg-orange-500 text-white">Get App</a>
						</div>
					</div>
				</div>
			</header>

			<div className="">{children}</div>

			<footer className="footer p-10 bg-base-200 text-base-content">
				<div>
					<Image
						src="/logo-w-o-text.png"
						width={150}
						height={150}
						alt=""
						className="text-center"
					/>
					<p>Aforro Groceries Pvt. Ltd.</p>
				</div>
				<div>
					<span className="footer-title">Services</span>
					<Link href="/about" className="link link-hover">
						About Us
					</Link>
					<Link href="/careers" className="link link-hover">
						Careers
					</Link>
					<Link href="/privacy-policy" className="link link-hover">
						Privacy Policy
					</Link>
					<Link href="/terms-and-conditions">Terms & Conditions</Link>
				</div>
				<div className="social-icons">
					<span className="footer-title">Company</span>
					<a href="https://www.instagram.com/aforro_groceries/" target="_blank" className="link link-hover flex gap-2 items-center">
						<span className="fa-icon">
							<FaInstagram />
						</span>
						<span> Instagram</span>{" "}
					</a>
					<a href="https://www.facebook.com/aforrogroceries/"  target="_blank" className="link link-hover flex gap-2 items-center">
						<span className="fa-icon">
							<FaFacebookF />
						</span>
						<span> Facebook</span>
					</a>
					<a href="https://www.linkedin.com/company/aforro-groceries-pvt-ltd/" target="_blank" className="link link-hover flex gap-2 items-center">
						<span className="fa-icon">
							<FaLinkedinIn />
						</span>
						<span> Linkedin</span>
					</a>
				</div>
				<div>
					<div className="">
						<h3 className="mb-5 text-xl font-bold">Download The App Now</h3>
						<div className="flex gap-4 flex-row justify-center lg:flex-row ">
							<div>
								<a href="https://play.google.com/store/apps/details?id=com.Aforro&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1" target="_blank">
									<Image
										src="/google-play.png"
										width={150}
										height={350}
										alt=""
									/>
								</a>
							</div>
							<div>
								<Image src="/apple-store.png" width={140} height={300} alt="" />
								<p>Comming soon...</p>
							</div>
						</div>
					</div>
				</div>
			</footer>

			<footer>
				<p>Copyright ©Aforro Groceries {(new Date().getFullYear())}. All rights reserved</p>
			</footer>
		</div>
	);
}
