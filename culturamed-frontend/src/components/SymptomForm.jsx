import { useState } from "react";

const languages = ["English", "Yoruba", "Hausa", "Igbo", "Pidgin"];

const SymptomForm = ({ onSubmit }) => {
  const [symptoms, setSymptoms] = useState("");
  const [language, setLanguage] = useState("English");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ symptoms, language });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <textarea
        className="w-full p-4 border-2 border-blue-300 rounded-2xl resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-md hover:shadow-lg transition-all"
        placeholder="Describe your symptoms..."
        value={symptoms}
        onChange={(e) => setSymptoms(e.target.value)}
        rows={5}
      />
      <select
        className="border-2 rounded-2xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-md hover:shadow-lg transition-all"
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
      >
        {languages.map((lang) => (
          <option key={lang} value={lang}>{lang}</option>
        ))}
      </select>
      <button
        type="submit"
        className="bg-blue-700 text-white px-6 py-3 rounded-2xl hover:bg-blue-800 transition-all font-semibold shadow-md hover:shadow-lg"
      >
        Analyze Symptoms
      </button>
    </form>
  );
};

export default SymptomForm;
