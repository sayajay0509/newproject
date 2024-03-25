/**
 * v0 by Vercel.
 * @see https://v0.dev/t/WnTIoEzhsES
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

import DefaultTopBar from "./DefaultTopBar";
import DefualtMainBody from "./DefualtMainBody";
import PaginationSoft from "./PaginationSoft";

export default function Component() {
  return (
    <main className="flex-1 overflow-y-auto">
      <DefaultTopBar />
      <DefualtMainBody />
      {/* <PaginationSoft /> */}
    </main>
  );
}
