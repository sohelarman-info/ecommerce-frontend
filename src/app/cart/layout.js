import Breadcrums from "@/components/breadcrums/Breadcrums";
import CheckoutHeader from "@/components/checkoutHeader/CheckoutHeader";

export const metadata = {
  title: "Cart",
};
export default function Layout({ children }) {
  return (
    <main>
      <div className="container">
        <Breadcrums />
        <CheckoutHeader />
        {children}
      </div>
    </main>
  );
}
