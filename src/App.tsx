"use client";
import { useState } from "react";
import Adele from "./assets/Adele - Someone Like You (Official Music Video).mp3";
import silence from "./assets/250-milliseconds-of-silence.mp3";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "Nie",
      "Na pewno?",
      "Co jeśli bardzo ładnie przeproszę?",
      "No weeeeeź, mysza <3",
      "Zabiorę cię na EFES... ",
      "...Podwójny!",
      "rozjedziemy nawet starą babę po drodzę",
      "(👍 ͡ᵔ ͜ʖ ͡ᵔ)👍",
      "💪 ( ─ ₒ ─ ) 👊",
      "👉 ( 👁 👄 👁 ) 👉",
      "to co?",
      "👉👈",
      "Lubię cię",
      "Kocham cię",
      "Kuuuuupię kwiaty i cavaliera, i bieliznę",
      "a na ślubie zagra sentino na zywo i beyonce, i adele, wszystko dla cb",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="-mt-16 flex h-screen flex-col items-center justify-center">
      {yesPressed ? (
        <>
          <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />
          <div className="my-4 text-4xl font-bold">WOOOOOOHOOOOO!!!!</div>
        </>
      ) : (
        <>
          <img
            className="h-[200px]"
            src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
          />
          <h1 className="my-4 text-4xl">Przepraszam. Pogódźmy się ❤️💪🏻</h1>
          <div className="flex items-center">
            <button
              className={`mr-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              TAK
            </button>
            <button
              onClick={handleNoClick}
              className=" rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
            >
              {noCount === 0 ? "Nie" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
      <br/>
      <br/>
      <h2>Odtwórz ⬇️</h2>
      <iframe src={silence} allow="autoplay" id="audio" style={{ display: "none" }}></iframe>
       <audio id="audio_tag" src={Adele} controls autoPlay/>
    </div>
  );
}
