'use client';

const LoadingScreen = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="text-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <h2 className="text-2xl font-bold text-gray-800">Cargando Portfolio...</h2>
        <p className="text-gray-600 mt-2">Preparando la experiencia completa...</p>
      </div>
    </div>
  );
};

export default LoadingScreen;