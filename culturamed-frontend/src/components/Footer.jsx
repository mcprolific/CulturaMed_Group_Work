export const Footer = () => (
  <footer className="bg-gray-50 text-gray-600 p-6 mt-12 border-t">
    <div className="max-w-6xl mx-auto text-center space-y-2">
      <p className="font-semibold">CulturaMed © {new Date().getFullYear()}</p>
      <div className="space-x-4">
        <a href="#" className="hover:text-blue-700 transition">Privacy</a>
        <a href="#" className="hover:text-blue-700 transition">Terms</a>
        <a href="#" className="hover:text-blue-700 transition">About</a>
      </div>
    </div>
  </footer>
);

export default Footer