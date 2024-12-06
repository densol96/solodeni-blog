import { Button, Title, Flashy } from "@/components";

export default function NotFound() {
  return (
    <div className="not-found">
      <p style={{ fontSize: "150px" }}>🤖</p>
      <Title size="2xl">Page Not Found - 404</Title>
      <Flashy>
        <Button variant="simple" href="/">
          Learn more about what status 404 is 😁
        </Button>
      </Flashy>
      <Button variant="btn" href="/home">
        Return Home
      </Button>
    </div>
  );
}
