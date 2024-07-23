"use client";

import { QueryClientProvider } from "@tanstack/react-query";
import { createContext, useContext, type ReactNode } from "react";
import { queryClient } from "../lib/react-query/config";

const GlobalContext = createContext({});

export const GlobalProvider = ({
	children,
	data,
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
}: { children: ReactNode; data: any }) => {
	return (
		<GlobalContext.Provider value={data}>
			<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
		</GlobalContext.Provider>
	);
};

export const useGlobalContext = () => {
	const context = useContext(GlobalContext);
	if (!context) {
		throw new Error("useGlobalContext must be used within a GlobalProvider");
	}
	return context;
};
