import React from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import { FaTimes } from 'react-icons/fa';

const DownloadAppModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center">
      <div className="bg-[#2A211C] text-amber-50 rounded-2xl p-6 w-[90%] max-w-md relative shadow-2xl border border-amber-500/30">

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-amber-300 hover:text-amber-400"
        >
          <FaTimes />
        </button>

        <h2 className="text-2xl font-bold text-center mb-2">
          Download Plateful App
        </h2>

        <p className="text-center text-amber-200 text-sm mb-6">
          Scan the QR code to get the app
          <br />
          <span className="italic">Android & iOS launching soon 🚀</span>
        </p>

        <div className="flex justify-center mb-6 bg-white p-4 rounded-xl">
          <QRCodeCanvas
            value="https://platefulapp.com/app-coming-soon"
            size={180}
          />
        </div>

        <p className="text-center text-xs text-amber-300">
          Stay tuned for the official release
        </p>
      </div>
    </div>
  );
};

export default DownloadAppModal;
