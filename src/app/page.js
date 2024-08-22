import { Button, Stack } from "react-bootstrap";
import styles from "./page.module.css";
import Product from "@/components/Product/Product";

export default function Home() {
  return (
    <main>
      <Button as="a" variant="primary">
        page 
      </Button>
      <Product/>
    </main>
  );
}
