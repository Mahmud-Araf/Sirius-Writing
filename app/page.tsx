import Footer from "@/components/Footer";
import QuestionPage from "@/components/pages/QuestionPage";

export default function page() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow">
        <QuestionPage />
      </div>
      <Footer />
    </div>
  )
};
