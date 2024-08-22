import { Button, Stack } from "react-bootstrap";
import styles from "./page.module.css";
import Hero from "@/sections/hero";

export default function Home() {
  return (
    <main>
      <Button as="a" variant="primary">
        <Hero />
      </Button>
    </main>
  );
}
