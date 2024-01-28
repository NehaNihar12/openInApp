
export default function SignInBadge({children}) {
  return (
    <span className="inline-flex items-center rounded-[8px] bg-bgcolor-main cursor-pointer sm:py-4 py-2 sm:px-6 px-1 gap-2 text-xs font-medium text-gray-text-secondary ring-1 ring-inset hover:ring-blue-primary ring-gray-500/10">
      {children}
    </span>
  );
}
