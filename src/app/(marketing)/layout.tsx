import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TransitionScreen from "@/components/TransitionScreen";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <TransitionScreen />
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </>
  );
}
