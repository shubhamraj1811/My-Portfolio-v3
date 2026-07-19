import { useState, useEffect } from "react";

function useTypewriter(
   words,
   typingSpeed = 100,
   deletingSpeed = 50,
   pauseTime = 1500,
) {
   const [text, setText] = useState("");
   const [wordIndex, setWordIndex] = useState(0);
   const [isDeleting, setIsDeleting] = useState(false);

   useEffect(() => {
      const currentWord = words[wordIndex % words.length];

      const timeout = setTimeout(
         () => {
            if (!isDeleting) {
               setText(currentWord.slice(0, text.length + 1));
               if (text.length + 1 === currentWord.length) {
                  setTimeout(() => setIsDeleting(true), pauseTime);
               }
            } else {
               setText(currentWord.slice(0, text.length - 1));
               if (text.length - 1 === 0) {
                  setIsDeleting(false);
                  setWordIndex((prev) => prev + 1);
               }
            }
         },
         isDeleting ? deletingSpeed : typingSpeed,
      );

      return () => clearTimeout(timeout);
   }, [
      text,
      isDeleting,
      wordIndex,
      words,
      typingSpeed,
      deletingSpeed,
      pauseTime,
   ]);

   return text;
}

export default useTypewriter;
