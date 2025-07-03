'use client';

export default function Interests() {
  return (
    <section className="py-4 md:py-12 max-w-5xl mx-auto">
      <h2 className="text-3xl font-semibold mb-6 text-emerald-400">Interests & Passions</h2>

      <p className="mb-4 text-lg leading-relaxed">
        When I’m not building full-stack web applications, you’ll find me watching cricket passionately — especially cheering for my favorite IPL team, Sunrisers Hyderabad (SRH).
      </p>

      <p className="mb-6 text-lg leading-relaxed">
        I also love diving into web development trends, constantly exploring new technologies and ways to craft clean, fast, and elegant user experiences.
      </p>

      <div>
        <h3 className="text-xl font-semibold mb-2">Checkout my Spotify playlist</h3>
        <iframe
          style={{ borderRadius: '12px' }}
          src="https://open.spotify.com/embed/playlist/7uoiOczGYYilkyIk2JPKqQ?utm_source=generator"
          width="100%"
          height="352"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          title="Shravan's Spotify Playlist"
        ></iframe>
      </div>
    </section>
  );
}
