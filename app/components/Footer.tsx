// components/Footer.tsx

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-center py-6 pt-20">
      <p className="text-gray-600 text-sm">
        &copy; {new Date().getFullYear()} MindFuel. All rights reserved.
      </p>
    </footer>
  );
}
