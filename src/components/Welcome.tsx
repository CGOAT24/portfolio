import profile from "../assets/profile.jpg";

export default function Welcome() {
	return <div className="hero min-h-screen">
		<div className="hero-content flex-col lg:flex-row-reverse">
			<img
				src={profile.src}
				className="max-w-sm rounded-lg shadow-2xl"
			    alt="Profile picture"
			/>
			<div >
				<h1 className="text-5xl font-bold">Welcome! 👋</h1>
				<p className="py-6">
					I'm Chad! I'm a full stack developer and this is my portfolio.
				</p>
				<div className="flex flex-col gap-4 mt-4">
					<a href="mailto:chad.gauthier32@gmail.com" className="btn btn-primary w-full">Email me</a>
					<a href="https://www.linkedin.com/in/chad-gauthier-83b42722b/" target="_blank"
					   className="btn btn-secondary w-full">LinkedIn</a>
					<a href="https://github.com/cgoat24" target="_blank" className="btn btn-accent w-full">GitHub</a>
				</div>
			</div>
		</div>
	</div>
}