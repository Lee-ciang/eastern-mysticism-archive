import Link from "next/link";

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
};

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav className="mb-10 text-sm text-neutral-500">
      {items.map((item, index) => (
        <span key={`${item.label}-${index}`}>
          {index > 0 && <span className="mx-2">/</span>}

          {item.href ? (
            <Link href={item.href} className="hover:text-neutral-300">
              {item.label}
            </Link>
          ) : (
            <span className="text-neutral-300">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
