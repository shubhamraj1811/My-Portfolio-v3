import { useEffect } from "react";
import { certUiIconMap } from "../data/skillIconMap";

function CertificateLightbox({ image, alt, onClose }) {
   useEffect(() => {
      const onKey = (e) => e.key === "Escape" && onClose();
      window.addEventListener("keydown", onKey);
      return () => window.removeEventListener("keydown", onKey);
   }, [onClose]);

   return (
      <div
         className="fixed inset-0 z-200 bg-black/85 backdrop-blur-sm flex items-center justify-center p-6"
         onClick={onClose}
         role="dialog"
         aria-modal="true"
         aria-label="Full size certificate"
      >
         <button
            onClick={onClose}
            aria-label="Close full size view"
            className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors"
         >
            ✕
         </button>
         <div
            className="max-w-3xl max-h-[85vh] w-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
         >
            {image ? (
               <img
                  src={image}
                  alt={alt}
                  className="max-w-full max-h-[85vh] object-contain rounded-lg"
               />
            ) : (
               <div className="w-full aspect-4/3 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/50 text-sm">
                  No image available
               </div>
            )}
         </div>
      </div>
   );
}

export default CertificateLightbox;