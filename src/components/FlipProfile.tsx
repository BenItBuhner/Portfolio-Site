"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "@/app/page.module.css";

// To change the photo, replace public/profile-photo.jpg (square, 600x600 or larger).
const PHOTO_SRC = "/profile-photo.jpg";
const FLIP_EVERY_MS = 4500;

export default function FlipProfile() {
  const [flipped, setFlipped] = useState(false);
  const [paused, setPaused] = useState(false);
  const [photoFailed, setPhotoFailed] = useState(false);

  useEffect(() => {
    if (paused || photoFailed) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setFlipped((f) => !f), FLIP_EVERY_MS);
    return () => clearInterval(id);
  }, [paused, photoFailed]);

  return (
    <button
      type="button"
      className={styles.flipCard}
      onClick={() => setFlipped((f) => !f)}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-label="Flip profile picture"
    >
      <div
        className={styles.flipCardInner}
        style={{ transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)" }}
      >
        <div className={styles.flipCardFront}>
          <Image
            src="/account-icon.png"
            alt="Bennett Buhner logo"
            width={200}
            height={200}
            className={styles.profileImg}
            priority
          />
        </div>
        <div className={styles.flipCardBack}>
          {!photoFailed && (
            <Image
              src={PHOTO_SRC}
              alt="Bennett Buhner"
              width={200}
              height={200}
              className={styles.profileImg}
              onError={() => setPhotoFailed(true)}
              priority
            />
          )}
        </div>
      </div>
    </button>
  );
}
