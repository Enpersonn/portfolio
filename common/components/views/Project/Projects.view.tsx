import type { PreviewPageType } from "@/common/types/page/pages.type";
import PageList from "../../organism/PageList";

type ProjectsViewProps = {
	projects: PreviewPageType[];
};

export default function ProjectsView({ projects }: ProjectsViewProps) {
	return <PageList pages={projects} type="project" />;
}
