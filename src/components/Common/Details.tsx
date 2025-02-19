import { Tags } from './Tags';

interface CardProps {
  name: string;
  title: string;
  content: string;
  tags?:[];
  Icon?: React.ComponentType<{ size: number; color: string }>;
}

export function Details({ name, title, content , Icon, tags=[]}: CardProps) {
  return (
    <>
      <h2 className="text-sm font-semibold text-secondaryPurple2">
        {name}
      </h2>
      <div className="flex justify-between items-center">
        <p className="text-2xl font-semibold text-gray-900">
          {title}
        </p>
        {Icon && <Icon size={24} color={"#101828"} />}
      </div>
      <p className="text-secondaryGray3 text-base font-normal mb-4 mt-4">
        {content}
      </p>
      <Tags tags={tags} />
    </>
  );
}
