// src/components/DualMarquee.tsx
import React from "react";
import Marquee from "react-fast-marquee";

interface DualMarqueeProps<T> {
  items: T[];
  cardComponent: React.FC<T>;
  speed?: number;
  gap?: number;
  rows?: 1 | 2; // NEW → choose single or double rows
}

const DualMarquee = <T extends {}>({
  items,
  cardComponent: Card,
  speed = 60,
  gap = 24,
  rows = 2, // default 2 rows (old behavior)
}: DualMarqueeProps<T>) => {
  if (!items || items.length === 0) return null;

  const marqueeItems = [...items, ...items]; // duplicate for smooth scroll

  if (rows === 1) {
    // single row version
    return (
      <Marquee speed={speed} gradient={false} pauseOnHover>
        {marqueeItems.map((item, idx) => (
          <div key={idx} style={{ marginRight: gap }}>
            <Card {...item} />
          </div>
        ))}
      </Marquee>
    );
  }

  // dual row version
  const mid = Math.ceil(items.length / 2);
  const firstRow = [...items.slice(0, mid), ...items.slice(0, mid)];
  const secondRow = [...items.slice(mid), ...items.slice(mid)];

  return (
    <div className="flex flex-col gap-6">
      <Marquee speed={speed} gradient={false} pauseOnHover>
        {firstRow.map((item, idx) => (
          <div key={idx} style={{ marginRight: gap }}>
            <Card {...item} />
          </div>
        ))}
      </Marquee>
      <Marquee direction="right" speed={speed} gradient={false} pauseOnHover>
        {secondRow.map((item, idx) => (
          <div key={idx} style={{ marginRight: gap }}>
            <Card {...item} />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default DualMarquee;
