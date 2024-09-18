import Footer from "@/components/Footer";
import AnswerPage from "@/components/pages/AnswerPage";


export default function page() {
    return (
        <div className="min-h-screen flex flex-col">
            <div className="flex-grow">
                <AnswerPage />
            </div>
            <Footer />
        </div>
    )
};
