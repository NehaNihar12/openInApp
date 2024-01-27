
export default function SignInBadge({children}) {
  return (
    <span class="inline-flex items-center rounded-[8px] bg-bgcolor-main cursor-pointer md:py-3 py-2 md:px-4 px-1 gap-2 text-xs font-medium text-gray-text-secondary ring-1 ring-inset hover:ring-blue-primary ring-gray-500/10">
      {children}
    </span>
  );
}
