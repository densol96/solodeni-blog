import Link from "next/link";
import { LinkTo, Title, Flashy } from "@/components";

export default function NotFound() {
  return (
    <div className="not-found">
      <p style={{ fontSize: "150px" }}>🤖</p>
      <Title size="2xl">Page Not Found - 404</Title>
      <Flashy>
        <LinkTo isBtn={false} href="/">
          Learn more about what status 404 is 😁
        </LinkTo>
      </Flashy>
      <LinkTo href="/home">Return Home</LinkTo>
    </div>
  );
}
