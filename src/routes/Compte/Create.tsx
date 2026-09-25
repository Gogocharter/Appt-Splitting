import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/Compte/Create')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/Compte/Add"!</div>
}
