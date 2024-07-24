import type { ProjectType } from "@/common/types/page/project/project.type";

export default function ProjectView(project: ProjectType) {
	return (
		<article className=" flex flex-col">
			<pre>{JSON.stringify(project, null, 2)}</pre>
		</article>
	);
}
