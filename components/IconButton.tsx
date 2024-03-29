interface Props {
  href: string;
  icon: React.FC<any>;
  label?: string;
}

export const IconButton: React.FC<Props> = ({ href, icon: Icon, label }) => (
  <a className="group -m-1 p-1" aria-label={label} href={href}>
    <Icon className="h-6 w-6 fill-gray-500 transition group-hover:fill-gray-600 dark:fill-gray-400 dark:group-hover:fill-gray-300" />
  </a>
);
