import { Code, type LucideIcon, LucideProps, Star, Type } from "lucide-react";

const SUPPORTED_ICONS: Record<string, LucideIcon> = {
    code: Code,
    design: Type,
    type: Type,
};

interface IconProps extends Omit<LucideProps, 'ref'> {
    icon: string;
}

const Icon = ({ icon, ...props }: IconProps) => {
    const IconComponent = SUPPORTED_ICONS[icon.toLowerCase() as keyof typeof SUPPORTED_ICONS] || Star;
    return <IconComponent {...props} />;
};

export default Icon;
