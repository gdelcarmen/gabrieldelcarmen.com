interface TimelineModalProps {
  onClose: () => void;
}

const TimelineModal = ({ onClose }: TimelineModalProps) => (
  <div className="fixed inset-0 z-40 flex items-center justify-center p-4 bg-gray-800 bg-opacity-70">
    <div className="relative max-w-4xl w-full rounded-lg p-6 shadow-xl bg-white">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        aria-label="Close timeline"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <h2 className="text-xl font-light mb-6 text-gray-800">Career Timeline</h2>

      <div className="overflow-x-auto">
        <div className="min-w-max">
          <div className="h-1 bg-gray-200 relative mb-8">
            {[2015, 2017, 2019, 2020, 2021, 2023, 2024, 2025].map((year, index) => (
              <div key={year} className="absolute transform -translate-x-1/2" style={{ left: `${index * 14.28}%` }}>
                <div className="h-3 w-3 rounded-full bg-blue-500 mb-2"></div>
                <span className="text-xs text-gray-600">{year}</span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-4">
            <div className="col-span-2 p-3 rounded bg-blue-50">
              <h3 className="text-sm font-medium text-gray-800">Brandeis University</h3>
              <p className="text-xs text-gray-600">2015-2019</p>
            </div>

            <div className="col-span-2 p-3 rounded bg-green-50">
              <h3 className="text-sm font-medium text-gray-800">McGovern Medical School</h3>
              <p className="text-xs text-gray-600">2020-2024</p>
            </div>

            <div className="col-span-1 p-3 rounded bg-purple-50">
              <h3 className="text-sm font-medium text-gray-800">Albany Medical Center</h3>
              <p className="text-xs text-gray-600">2024-Present</p>
            </div>
          </div>

          <div className="grid grid-cols-7 gap-4 mt-4">
            <div className="col-span-3 p-3 rounded bg-yellow-50">
              <h3 className="text-sm font-medium text-gray-800">Research at Mass General Hospital</h3>
              <p className="text-xs text-gray-600">2017-2019</p>
            </div>

            <div className="col-span-2 p-3 rounded bg-red-50">
              <h3 className="text-sm font-medium text-gray-800">Vilar Lab, MD Anderson</h3>
              <p className="text-xs text-gray-600">2021-2024</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default TimelineModal;
