"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const KONAMI_CODE = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "KeyB",
  "KeyA",
];

const MESSAGES = {
  konami: [
    {
      text: "👾 KONAMI CODE UNLOCKED: You really just did that. You're officially running this portfolio like it's a cheat-enabled PlayStation 2. Enjoy your buffed ego, king. 🕹️",
      emoji: "🎮",
      type: "konami",
    },
    {
      text: "🤨 Bro... how many times you gonna do this? What you hoping to find here? Source code? Secrets? Emotional stability? Ain’t none of that here.",
      emoji: "🧠",
      type: "konami",
    },
    {
      text: "🧃 Here’s a juice box, because you clearly peaked the curiosity stats. 🔓 Bonus: No ads. No cookies. Just unhinged developer energy. Enjoy responsibly.",
      emoji: "🧃",
      type: "konami",
    },
    {
      text: "👑 OKAY FINE. You cracked the final egg. You win the imaginary trophy: ‘Most Likely to Refactor Code at 3AM and Regret It by 3:05AM’.",
      emoji: "🏆",
      type: "konami",
    },
  ],

  secret: [
    {
      text: "🔮 YOU FOUND THE INVISIBLE STAR. What are you? An AI? A goblin? My subconscious with a better aim? Either way, welcome to the inner circle.",
      emoji: "🌟",
      type: "secret",
    },
    {
      text: "🔍 You clicked 1px of space with the precision of a sniper. Go outside and become a neurosurgeon already. Portfolio bonus unlocked: street cred +5.",
      emoji: "🕵️",
      type: "secret",
    },
    {
      text: "🚀 NASA CALLED. They want their observatory back. No one's supposed to find this unless they’ve stared at code for 8 hours straight and gone legally blind.",
      emoji: "👁️",
      type: "secret",
    },
  ],

  specialClick: [
    {
      text: "📦 SECRET UNLOCKED: This whole portfolio is duct-taped with console.logs and vibes. No frameworks were harmed (much) in the making of this chaos.",
      emoji: "🛠️",
      type: "click",
    },
    {
      text: "😅 Real talk: once spent 6 hours debugging a missing `import`, then realized I spelled 'components' as 'compnents'. Had an existential crisis. Never recovered.",
      emoji: "🧩",
      type: "click",
    },
    {
      text: "🐥 Confession: I talk to my rubber duck (my roomate). His name’s Arjun. He knows all my bugs. He’s judging you right now for clicking this. 🫡",
      emoji: "🐤",
      type: "click",
    },
  ],
};

const EasterEggSystem = () => {
  const [currentMessage, setCurrentMessage] = useState<{
    text: string;
    emoji: string;
    type: string;
  } | null>(null);
  const [konamiCount, setKonamiCount] = useState(0);
  const [secretFound, setSecretFound] = useState(false);
  const [specialClickFound, setSpecialClickFound] = useState(false);
  const [keySequence, setKeySequence] = useState<string[]>([]);
  const [showProgressBar, setShowProgressBar] = useState(false);
  const [showCompletionCelebration, setShowCompletionCelebration] =
    useState(false);
  const [celebrationShown, setCelebrationShown] = useState(false);
  const progressBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("easterEggProgress");
      if (saved) {
        const progress = JSON.parse(saved);
        setKonamiCount(progress.konamiCount || 0);
        setSecretFound(progress.secretFound || false);
        setSpecialClickFound(progress.specialClickFound || false);
        setCelebrationShown(progress.celebrationShown || false);
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem(
        "easterEggProgress",
        JSON.stringify({
          konamiCount,
          secretFound,
          specialClickFound,
          celebrationShown,
        })
      );
    }
  }, [konamiCount, secretFound, specialClickFound, celebrationShown]);

  const konamiFound = konamiCount > 0;
  const totalSecrets = 3;
  const foundSecrets = [konamiFound, secretFound, specialClickFound].filter(
    Boolean
  ).length;
  const progressPercentage = (foundSecrets / totalSecrets) * 100;

  const showMessage = useCallback(
    (message: { text: string; emoji: string; type: string }) => {
      setCurrentMessage(message);
      setTimeout(() => setCurrentMessage(null), 6000);
    },
    []
  );

  const closeCompletionCelebration = useCallback(() => {
    setShowCompletionCelebration(false);
    setShowProgressBar(false);
    if (!celebrationShown) {
      setCelebrationShown(true);
    }
  }, [celebrationShown]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        progressBarRef.current &&
        !progressBarRef.current.contains(event.target as Node)
      ) {
        setShowProgressBar(false);
      }
    };

    if (showProgressBar) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showProgressBar]);

  useEffect(() => {
    if (
      foundSecrets === totalSecrets &&
      !showCompletionCelebration &&
      !celebrationShown
    ) {
      setTimeout(() => {
        setShowCompletionCelebration(true);
      }, 2000);
    }
  }, [foundSecrets, totalSecrets, showCompletionCelebration, celebrationShown]);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      const newSequence = [...keySequence, e.code].slice(-KONAMI_CODE.length);
      setKeySequence(newSequence);

      if (newSequence.join("") === KONAMI_CODE.join("")) {
        const messageIndex = Math.min(konamiCount, MESSAGES.konami.length - 1);
        showMessage(MESSAGES.konami[messageIndex]);
        setKonamiCount((prev) => prev + 1);
        setKeySequence([]);
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [keySequence, konamiCount, showMessage]);

  const handleSpecialClick = useCallback(() => {
    if (!specialClickFound) {
      setSpecialClickFound(true);
      const specialMessage =
        MESSAGES.specialClick[
          Math.floor(Math.random() * MESSAGES.specialClick.length)
        ];
      showMessage(specialMessage);
    } else {
      const funnyMessages = [
        {
          text: "🎯 You clicked it... again. This button’s more clicked than your browser’s Stack Overflow history. Still not launching you to Microsoft, tho.",
          emoji: "🎮",
          type: "click",
        },
        {
          text: "🍕 You’re double-dipping like a pizza slice in ranch. Nothing new here bro — just the same delicious chaos on repeat.",
          emoji: "🍕",
          type: "click",
        },
        {
          text: "🧩 Congrats, you solved a solved puzzle. It’s giving: ‘clicked out of boredom, stayed for the validation’. Respectfully unhinged.",
          emoji: "🕵️‍♂️",
          type: "click",
        },
      ];
      const randomMessage =
        funnyMessages[Math.floor(Math.random() * funnyMessages.length)];
      showMessage(randomMessage);
    }
  }, [specialClickFound, showMessage]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      (window as any).triggerSpecialClick = handleSpecialClick;
    }
    return () => {
      if (typeof window !== "undefined") {
        delete (window as any).triggerSpecialClick;
      }
    };
  }, [specialClickFound, handleSpecialClick]);

  const handleSecretStar = () => {
    if (!secretFound) {
      setSecretFound(true);
      const secretMessage =
        MESSAGES.secret[Math.floor(Math.random() * MESSAGES.secret.length)];
      showMessage(secretMessage);
    } else {
      const alreadyFoundMessages = [
        {
          text: "🌟 You already found this star, but go off click king 👑. Olympic-level pixel hunting unlocked. Next up: gold medal in overthinking hover states.",
          emoji: "🖱️",
          type: "secret",
        },
        {
          text: "⭐ Bro this star's been clicked more than ‘remind me later’ on a system update. But hey, we love a committed explorer!",
          emoji: "🔁",
          type: "secret",
        },
        {
          text: "✨ This pixel's already in your stash. You’re basically a frontend Indiana Jones now — just with more caffeine and less cardio.",
          emoji: "🧃",
          type: "secret",
        },
      ];
      const randomMessage =
        alreadyFoundMessages[
          Math.floor(Math.random() * alreadyFoundMessages.length)
        ];
      showMessage(randomMessage);
    }
  };

  return (
    <>
      <AnimatePresence>
        {showProgressBar && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-16 left-4 z-40 hidden md:block"
          >
            <div
              ref={progressBarRef}
              className="bg-gray-800/90 backdrop-blur-sm border border-gray-700 rounded-lg p-3 shadow-lg max-w-xs"
            >
              {foundSecrets === totalSecrets ? (
                <div className="text-center">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono text-emerald-400">
                      🎉 MISSION COMPLETE
                    </span>
                    <button
                      onClick={() => setShowProgressBar(false)}
                      className="text-gray-500 hover:text-gray-300 text-xs"
                    >
                      ✕
                    </button>
                  </div>

                  <div className="relative bg-gray-700 rounded-full h-2 mb-3 overflow-hidden">
                    <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-emerald-400 to-sky-400 rounded-full animate-pulse" />
                  </div>

                  <div className="text-emerald-400 text-sm font-medium mb-2">
                    🏆 All Secrets Found! 🏆
                  </div>

                  <div className="text-gray-300 text-xs leading-relaxed">
                    You liked it, didn&#39;t you? 😏
                    <br />
                    So you like me, huh? 😄
                    <br />
                    <span className="text-emerald-400">
                      Thanks for being curious! ✨
                    </span>
                  </div>
                </div>
              ) : (
                <>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono text-gray-400">
                      🕵️ SECRET HUNTER MODE
                    </span>
                    <button
                      onClick={() => setShowProgressBar(false)}
                      className="text-gray-500 hover:text-gray-300 text-xs"
                    >
                      ✕
                    </button>
                  </div>

                  <div className="relative bg-gray-700 rounded-full h-2 mb-2 overflow-hidden">
                    <motion.div
                      className="absolute top-0 left-0 h-full bg-gradient-to-r from-emerald-400 to-sky-400 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${progressPercentage}%` }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                    />
                  </div>

                  <div className="text-xs text-gray-300 mb-2">
                    {foundSecrets}/{totalSecrets} secrets unleashed 🎯
                  </div>

                  <div className="space-y-1 text-xs">
                    {!konamiFound && (
                      <div className="flex items-center gap-2 text-gray-400">
                        <span className="w-2 h-2 border border-gray-500 rounded-full"></span>
                        <span>Press: ↑↑↓↓←→←→BA (classic gaming vibes) 🕹️</span>
                      </div>
                    )}
                    {!secretFound && (
                      <div className="flex items-center gap-2 text-gray-400">
                        <span className="w-2 h-2 border border-gray-500 rounded-full"></span>
                        <span>
                          Click the tiny glowing dot (top-right corner) ✨
                        </span>
                      </div>
                    )}
                    {!specialClickFound && (
                      <div className="flex items-center gap-2 text-gray-400">
                        <span className="w-2 h-2 border border-gray-500 rounded-full"></span>
                        <span>
                          Find & click the word &quot;DEVELOPER&quot; 💻
                        </span>
                      </div>
                    )}
                  </div>

                  {konamiFound && (
                    <div className="flex items-center gap-2 text-xs text-emerald-400 mt-1">
                      <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                      <span>Gaming legend confirmed! 🎮✓</span>
                    </div>
                  )}
                  {secretFound && (
                    <div className="flex items-center gap-2 text-xs text-emerald-400 mt-1">
                      <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                      <span>Pixel hunter extraordinaire! 🔍✓</span>
                    </div>
                  )}
                  {specialClickFound && (
                    <div className="flex items-center gap-2 text-xs text-emerald-400 mt-1">
                      <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                      <span>Word detective supreme! 🕵️✓</span>
                    </div>
                  )}
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {!showProgressBar && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => setShowProgressBar(true)}
            className={`fixed top-4 left-4 z-40 hidden md:flex backdrop-blur-sm border rounded-full w-8 h-8 items-center justify-center transition-colors ${
              foundSecrets === totalSecrets
                ? "bg-emerald-800/90 border-emerald-600 hover:bg-emerald-700/90"
                : "bg-gray-800/90 border-gray-700 hover:bg-gray-700/90"
            }`}
            title={
              foundSecrets === totalSecrets
                ? "View completion message"
                : "Show secret hunt progress"
            }
          >
            <span className="text-xs">
              {foundSecrets === totalSecrets ? "🏆" : "🎯"}
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showCompletionCelebration && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/80 backdrop-blur-sm cursor-default"
          >
            <motion.div
              initial={{ scale: 0.5, rotate: -10, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              exit={{ scale: 0.5, rotate: 10, opacity: 0 }}
              transition={{ type: "spring", duration: 0.8, bounce: 0.4 }}
              className="relative bg-gradient-to-br from-emerald-400 via-sky-400 to-purple-500 p-1 rounded-2xl max-w-md mx-4"
            >
              <div className="bg-gray-900 rounded-xl p-8 text-center relative overflow-hidden">
                <button
                  onClick={closeCompletionCelebration}
                  className="absolute top-4 right-4 z-30 w-8 h-8 bg-gray-800/80 hover:bg-gray-700/80 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-colors group cursor-pointer select-none"
                  aria-label="Close celebration"
                  style={{ pointerEvents: "auto" }}
                >
                  <span className="text-lg group-hover:rotate-90 transition-transform">
                    ✕
                  </span>
                </button>

                <div className="absolute inset-0 opacity-30 pointer-events-none">
                  {[...Array(20)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 bg-yellow-400 rounded-full pointer-events-none"
                      initial={{
                        x: Math.random() * 400,
                        y: Math.random() * 300,
                        scale: 0,
                      }}
                      animate={{
                        scale: [0, 1, 0],
                        rotate: 360,
                      }}
                      transition={{
                        duration: 2,
                        delay: i * 0.1,
                        repeat: Infinity,
                        repeatDelay: 2,
                      }}
                    />
                  ))}
                </div>

                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 0.6, repeat: 3 }}
                  className="text-6xl mb-4"
                >
                  🎉
                </motion.div>

                <motion.h2
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-2xl font-bold text-emerald-400 mb-2"
                >
                  EASTER EGG LEGEND!
                </motion.h2>

                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-white mb-4"
                >
                  🏆 You found ALL the secrets!
                </motion.p>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className="bg-emerald-900/30 rounded-lg p-4 border border-emerald-400/30"
                >
                  <p className="text-emerald-300 text-sm font-mono mb-2">
                    ACHIEVEMENT UNLOCKED:
                  </p>
                  <p className="text-white text-sm">
                    🕵️ Master Detective
                    <br />
                    🎮 Gaming Legend
                    <br />
                    💻 Word Wizard
                    <br />
                  </p>
                  <p className="text-gray-400 text-xs mt-3">
                    “This dev has the curiosity we love—and probably debugged
                    the Netflix homepage for fun during quarantine.” – Every
                    recruiter, probably 😄
                  </p>
                </motion.div>

                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1, type: "spring", bounce: 0.6 }}
                  className="mt-4 text-4xl"
                >
                  🚀✨🎯
                </motion.div>

                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.5 }}
                  onClick={closeCompletionCelebration}
                  className="relative z-20 mt-6 px-6 py-2 bg-emerald-500 hover:bg-emerald-400 text-white rounded-lg font-medium transition-all duration-200 hover:scale-105 cursor-pointer select-none"
                  style={{ pointerEvents: "auto" }}
                >
                  Back to Portfolio 🎯
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div
        className="fixed top-4 right-4 z-50 cursor-pointer group"
        onClick={handleSecretStar}
        title="🤫"
      >
        <div className="relative">
          <div className="w-2 h-2 bg-yellow-400 rounded-full opacity-30 group-hover:opacity-100 transition-all duration-300 group-hover:animate-spin"></div>
          <div className="absolute inset-0 w-2 h-2 bg-yellow-400 rounded-full animate-pulse opacity-20 group-hover:opacity-60 blur-sm"></div>
          <div className="absolute -top-1 -right-1 w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping"></div>
        </div>
      </div>

      <AnimatePresence>
        {currentMessage && (
          <motion.div
            initial={{ opacity: 0, y: -50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -50, scale: 0.8 }}
            className="fixed top-20 right-4 z-[9999] max-w-sm"
          >
            <div className="bg-gray-900 border-2 border-emerald-400 rounded-lg p-4 shadow-2xl">
              <div className="flex items-center gap-3">
                <span className="text-2xl animate-bounce">
                  {currentMessage.emoji}
                </span>
                <div className="flex-1">
                  <div className="text-emerald-400 text-xs font-mono mb-1">
                    [{currentMessage.type.toUpperCase()}] EASTER EGG TRIGGERED
                  </div>
                  <div className="text-white text-sm font-medium">
                    {currentMessage.text}
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-2 right-4 w-4 h-4 bg-gray-900 border-r-2 border-b-2 border-emerald-400 transform rotate-45"></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default EasterEggSystem;
