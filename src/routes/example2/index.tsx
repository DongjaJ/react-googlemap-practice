import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/example2/")({
  component: Example2Page,
});

function Example2Page() {
  return <div className='p-2'>Hello from About!</div>;
}
