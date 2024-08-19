import Breadcrums from "@/components/breadcrums/Breadcrums";
import Checkoutform from "@/components/checkoutform/Checkoutform";
import CheckoutHeader from "@/components/checkoutHeader/CheckoutHeader";
import { Container } from "react-bootstrap";

const Checkout = () => {
  return (
    <>
      <Container>
        <Breadcrums />
        <CheckoutHeader />
        <Checkoutform />
      </Container>
    </>
  );
};

export default Checkout;
