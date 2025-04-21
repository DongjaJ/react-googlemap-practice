import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/example1/")({
  component: Example1Page,
});

function Example1Page() {
  return <div className='p-2'>Hello from About!</div>;
}
