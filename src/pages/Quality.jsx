
// rgb(156,163,175)
import { useState } from 'react';
import BackButton from '../components/BackButton';

export default function Quality() {
  // 1. State initialized to 'Default'
  const [activeTab, setActiveTab] = useState('Default');

  // 2. Data Maps
  const videoMap = {
    Default: "1172527614/f22539e836",
    Process: "1172527715/74c32336e5",
    Materials: "1172527654/cff6281142",
    Standard: "1172527764/9dd9417bf4",
    Testing: "1172527865/33415027d4",
    Certification: "1172527820/458a3f8da6",
  };

  const tabs = [
    { id: 'Process', label: 'Construction Process' },
    { id: 'Materials', label: 'Leakage Proofing' },
    { id: 'Standard', label: 'MEP' },
    { id: 'Testing', label: 'Finishing' },
    { id: 'Certification', label: 'IT Infra' },
  ];

  // 3. Helper function to generate URL
  const getVimeoSrc = (id) => {
    const videoData = videoMap[id];
    if (!videoData) return '';

    const [videoId, hash] = videoData.split('/');
    return `https://player.vimeo.com/video/${videoId}?h=${hash}&autoplay=1&controls=1&muted=0&title=0&byline=0&portrait=0&background=0`;
  };

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-black text-white">
      <BackButton />

      {/* Video Container */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <iframe
          key={activeTab}
          src={getVimeoSrc(activeTab)}
          className="w-full aspect-video max-h-[87vh] z-0"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title="Quality Video Content"
        />

        {/* Top Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Bottom Navigation */}
      <div className="absolute bottom-2 left-0 w-full z-20 flex justify-center px-4">
        <div className="w-auto bg-white/5 backdrop-blur-2xl border border-white/10 
        rounded-xl p-1.5 shadow-2xl">
          <div className="flex flex-row items-center justify-center gap-1 md:gap-2 w-max">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative py-2.5 px-4 md:px-6 text-[10px] md:text-[13.8px]
                uppercase transition-all duration-500 rounded-xl whitespace-nowrap
                ${activeTab === tab.id
                    ? 'text-black bg-gradient-to-b from-[rgb(192,192,191)] to-[rgb(152,152,149)] shadow-[0_10px_20px_rgba(179,135,40,0.1)] scale-105'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-white rounded-full animate-pulse" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}