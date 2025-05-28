export default function ContactComponent() {
	return <div className="card bg-base-100">
		<div className="card-body items-center text-center">
			<h2 className="card-title text-2xl">Contact Me</h2>
			<p className="text-base text-gray-600">Feel free to reach out via the platforms below:</p>

			<div className="flex flex-col gap-4 mt-4">
				<a href="mailto:chad.gauthier32@gmail.com" className="btn btn-primary w-full">Email Me</a>
				<a href="https://www.linkedin.com/in/chad-gauthier-83b42722b/" target="_blank"
				   className="btn btn-secondary w-full">LinkedIn</a>
				<a href="https://github.com/cgoat24" target="_blank" className="btn btn-accent w-full">GitHub</a>
			</div>
		</div>
	</div>
}