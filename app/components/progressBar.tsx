export default function ProgressBar({ step }: { step: number }) {
  const steps = 7;
  const progress = (step / steps) * 100;

  return (
    <div className="w-full">
      <div className="w-full bg-gray-200 rounded-full h-2.5 mt-6 mb-4">
        <div className="bg-blue-900 h-2.5 rounded-full" style={{ width: `${progress}%`, transition: 'width 0.3s ease-in-out' }}></div>
      </div>
      <p className="text-sm text-neutral-600 text-center mb-6">Paso {step} de {steps}</p>
    </div>
  );
}