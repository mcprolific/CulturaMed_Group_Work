import { useState } from "react"; // <- Added
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import SymptomForm from "../components/SymptomForm";

// Animated medical icons
const icons = ["🩺", "💊", "🧪", "❤️", "💉", "🧠", "🩹"];

export const Home = () => {
  const [error, setError] = useState("");

  const handleSymptomSubmit = (data) => {
    if (!data.symptoms.trim()) {
      setError("Please describe your symptoms before submitting.");
      return;
    }

    setError("");
    console.log("Symptoms submitted:", data);
    alert(`Symptoms submitted in ${data.language}: ${data.symptoms}`);
  };

  return (
    <div className="relative min-h-screen flex flex-col bg-gradient-to-r from-blue-100 to-blue-300 overflow-hidden">
      {/* Floating Icons */}
      {icons.map((icon, index) => (
        <div
          key={index}
          className="absolute text-4xl animate-floating" // <- smoother float
          style={{
            top: `${Math.random() * 80}%`,
            left: `${Math.random() * 80}%`,
            animationDelay: `${index * 0.5}s`,
          }}
        >
          {icon}
        </div>
      ))}

      {/* Main Content */}
      <div className="relative z-10 flex-1 flex flex-col">
        <Header />

        <main className="flex-1 p-6 max-w-5xl mx-auto">
          <h2 className="text-5xl font-extrabold text-center mb-8 text-blue-900 animate-fade-in">
            AI-powered Medical Symptom Analysis for Nigerian Languages
          </h2>

          <p className="text-center mb-4 text-lg text-blue-800 animate-slide-up">
            Describe your symptoms in your local language. CulturaMed supports English, Yoruba, Hausa, Igbo, and Pidgin.
          </p>

          {/* Validation message */}
          {error && <div className="text-red-600 font-semibold text-center mb-4">{error}</div>}

          {/* Symptom Form */}
          <div className="bg-white rounded-3xl shadow-2xl p-6 mb-12 animate-fade-in-up">
            <SymptomForm onSubmit={handleSymptomSubmit} />
          </div>

          {/* How it Works */}
          <section className="mt-12 bg-white shadow-lg rounded-2xl p-6 animate-slide-up">
            <h3 className="text-2xl font-bold mb-6 text-blue-700">How It Works</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Voice or Text", desc: "Describe symptoms in your preferred way" },
                { title: "Multilingual", desc: "Supports major Nigerian languages" },
                { title: "AI Analysis", desc: "Medical insights using advanced AI" },
                { title: "Dual Reports", desc: "Simple for patients, detailed for doctors" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="border-l-4 border-blue-500 pl-4 py-3 bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-500 transform hover:-translate-y-1 hover:scale-105"
                >
                  <h4 className="font-semibold text-lg mb-1">{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default Home;
