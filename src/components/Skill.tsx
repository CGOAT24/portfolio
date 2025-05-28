export default function Skill({name}: {name :string}) {
	return <div className="p-4 m-3 rounded-2xl font-bold bg-accent drop-shadow-lg">
		{name}
	</div>;
}