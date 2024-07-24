import ProjectView from "@/common/components/views/Project/Project.view";
import useLoader from "@/common/hooks/useLoader";
import { PROJECT_QUERY } from "@/common/queries/project.query";
import type { ProjectType } from "@/common/types/page/project/project.type";
import type { QueryParams } from "next-sanity";

const getHook = async ({ params }: { params: QueryParams }) => {
	return await useLoader<ProjectType>(PROJECT_QUERY, params);
};

export default async function ProjectPage({ params }: { params: QueryParams }) {
	const initialData = await getHook({ params });

	return <ProjectView {...initialData.data} />;
}
