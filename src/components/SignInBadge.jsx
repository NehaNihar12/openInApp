import GoogleIcon from "assets/icons/GoogleIcon";
import React from "react";

export default function SignInBadge({children}) {
  return (
    <span class="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
      {children}
    </span>
  );
}
