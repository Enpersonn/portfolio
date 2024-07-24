import ProjectsView from "@/common/components/views/Project/Projects.view";
import useLoader from "@/common/hooks/useLoader";
import { PAGES_QUERY } from "@/common/queries/pages.query";
import type { PreviewPageType } from "@/common/types/page/pages.type";

export default async function DiscoverProjectsPage() {
	const projects = await useLoader<PreviewPageType[]>(PAGES_QUERY, {
		type: "project",
	});

	return <ProjectsView projects={projects.data} />;
}
