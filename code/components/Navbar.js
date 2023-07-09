import React, { useState, useEffect } from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useRouter } from "next/router";
import Image from "next/image";
import Logosrc from "../public/next.svg";

const Navbar = () => {
	const [nav, setNav] = useState(false);
	const [color, setColor] = useState("transparent");
	const [textColor, setTextColor] = useState("white");
	const router = useRouter();

	const isActive = (pathname) => {
		return router.pathname === pathname
			? "p-10 underline underline-offset-8"
			: "p-10";
	};
	const smallisActive = (pathname) => {
		return router.pathname === pathname
			? "p-4 text-4xl hover:text-gray-600 underline underline-offset-8"
			: "p-4 text-4xl hover:text-gray-600";
	};
	const handleNav = () => {
		setNav(!nav);
	};
	useEffect(() => {
		const changeColor = () => {
			if (window.scrollY >= 90) {
				setColor("#ffffff");
				setTextColor("#000000");
			} else {
				setColor("transparent");
				setTextColor("#ffffff");
			}
		};
		window.addEventListener("scroll", changeColor);
		console.log("scroll");
	}, []);
	return (
		<div
			style={{ backgroundColor: `${color}` }}
			className="fixed left-0 top-0 right-0 w-ful z-10 ease-in duration-300">
			<div className="max-w-[1240px] w-full m-auto flex justify-between items-center p-5 text-white text-xl">
				<Link href="/">
					<Image src={Logosrc} width={100} height={100} alt="logo" />
				</Link>
				<ul style={{ color: `${textColor}` }} className="hidden sm:flex">
					<li className={isActive("/")}>
						<Link
							href="/"
							className="hover:border p-2 hover:rounded-md hover:bg-slate-900/70 duration-200 ease-in hover:text-white">
							Home
						</Link>
					</li>
					<li className={isActive("/scenes")}>
						<Link
							href="/scenes"
							className="hover:border p-2 hover:rounded-md hover:bg-slate-900/70 duration-200 ease-in hover:text-white">
							Scenes
						</Link>
					</li>
					<li className={isActive("/job")}>
						<Link
							href="/job"
							className="hover:border p-2 hover:rounded-md hover:bg-slate-900/70 duration-200 ease-in hover:text-white">
							Job
						</Link>
					</li>
					<li className={isActive("/connect")}>
						<Link
							href="/connect"
							className="hover:border p-2 hover:rounded-md hover:bg-slate-900/70 duration-200 ease-in hover:text-white">
							Connect
						</Link>
					</li>
					<li className={isActive("/about")}>
						<Link
							href="/about"
							className="hover:border p-2 hover:rounded-md hover:bg-slate-900/70 duration-200 ease-in hover:text-white">
							About
						</Link>
					</li>
				</ul>

				<div onClick={handleNav} className="block sm:hidden z-10">
					{nav ? (
						<AiOutlineClose style={{ color: "white" }} size={50} />
					) : (
						<AiOutlineMenu style={{ color: `${textColor}` }} size={50} />
					)}
				</div>
				<div
					className={
						nav
							? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
							: "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
					}>
					{" "}
					<ul>
						<li onClick={handleNav} className={smallisActive("/")}>
							<Link href="/">Home</Link>
						</li>
						<li onClick={handleNav} className={smallisActive("/scenes")}>
							<Link href="/scenes">Scenes</Link>
						</li>
						<li onClick={handleNav} className={smallisActive("/job")}>
							<Link href="/job">Job</Link>
						</li>
						<li onClick={handleNav} className={smallisActive("/connect")}>
							<Link href="/connect">Connect</Link>
						</li>
						<li onClick={handleNav} className={smallisActive("/about")}>
							<Link href="/about">About</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
