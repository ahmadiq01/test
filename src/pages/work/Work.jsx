export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <div className="bg-white shadow-lg rounded-2xl p-10 text-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">Work Page</h1>
        <p className="text-lg text-gray-600">🚧 Under Construction 🚧</p>
        <div className="mt-6 animate-bounce">
          <svg
            className="w-16 h-16 text-yellow-500 mx-auto"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 2a10 10 0 1 1-10 10A10.011 10.011 0 0 1 12 2m0 2a8 8 0 1 0 8 8 8.009 8.009 0 0 0-8-8M9 7a1 1 0 0 1 2 0v5a1 1 0 0 1-2 0zm3 8a1.5 1.5 0 1 1-1.5-1.5A1.501 1.501 0 0 1 12 15z" />
          </svg>
        </div>
      </div>
    </div>
  );
}
