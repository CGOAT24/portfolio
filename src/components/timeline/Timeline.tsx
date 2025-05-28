import TimelineItem from "./TimelineItem.tsx";
import React from "react";

export default function Timeline({elements}: {elements: Array<any>}) {
	return <ul className="timeline timeline-vertical">
		{elements.map((elem, i) => (
				<TimelineItem
					date={elem.date}
					data={elem.title}
					location={elem.location}
					first={i === 0}
					last={i === elements.length - 1}
				/>
			)
		)}
	</ul>
}