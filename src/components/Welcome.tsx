import profile from "../assets/profile.jpg";

export default function Welcome() {
	return <div className="hero bg-base-200 min-h-screen">
		<div className="hero-content flex-col lg:flex-row-reverse">
			<img
				src={profile.src}
				className="max-w-sm rounded-lg shadow-2xl"
			    alt="Profile picture"
			/>
			<div >
				<h1 className="text-5xl font-bold">Welcome! 👋</h1>
				<p className="py-6">
					I'm Chad! I'm a full stack developer and this is my portfolio
				</p>
			</div>
		</div>
	</div>
}