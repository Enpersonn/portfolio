import AboutView from "@/common/components/views/About.view";
import useLoader from "@/common/hooks/useLoader";
import { ABOUT_QUERY } from "@/common/queries/about.query";
import type AboutType from "@/common/types/page/about.type";

const getHook = async () => {
	return await useLoader<AboutType>(ABOUT_QUERY);
};

export default async function AboutPage() {	
	const initialData = await getHook();

	return <AboutView {...initialData.data} />;
}
