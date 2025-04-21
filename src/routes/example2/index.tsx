import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/example2")({
  component: Example2Page,
});

function Example2Page() {
  return <div className='p-2'>Hello from About!</div>;
}
