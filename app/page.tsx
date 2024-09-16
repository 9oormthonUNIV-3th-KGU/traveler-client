import { Button } from '~/components/ui/button'

export default function Home() {
  return (
    <>
      <Button size="lg">Button</Button>
      <Button>Button</Button>
      <Button size="sm">Button</Button>
      <Button size="xs">Button</Button>
      <Button variant="secondary" size="lg">
        Button
      </Button>
      <Button variant="secondary">Button</Button>
      <Button variant="secondary" size="sm">
        Button
      </Button>
      <Button variant="secondary" size="xs">
        Button
      </Button>
      <Button variant="destructive" size="lg">
        Button
      </Button>
      <Button variant="destructive">Button</Button>
      <Button variant="destructive" size="sm">
        Button
      </Button>
      <Button variant="destructive" size="xs">
        Button
      </Button>
      <Button disabled>Button</Button>
    </>
  )
}
