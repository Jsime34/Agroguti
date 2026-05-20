import React from 'react';

// 12-month availability grid. Uses Intl for localized month names so we don't
// duplicate month strings in translations.js.
//
// Props:
//   availability: { months: number[1-12], peak: number[1-12] }
//   lang: 'es' | 'en'
//   t:   (key) => string
export default function AvailabilityCalendar({ availability, lang, t }) {
  if (!availability || !availability.months || availability.months.length === 0) {
    return null;
  }

  const locale = lang === 'es' ? 'es-ES' : 'en-US';
  const shortFmt = new Intl.DateTimeFormat(locale, { month: 'short' });
  const longFmt = new Intl.DateTimeFormat(locale, { month: 'long' });

  const inSeason = new Set(availability.months);
  const peak = new Set(availability.peak || []);
  const currentMonth = new Date().getMonth() + 1;

  const cellClass = (m) => {
    if (peak.has(m)) {
      return 'bg-[#28623f] text-white border-[#28623f] shadow-md';
    }
    if (inSeason.has(m)) {
      return 'bg-white text-[#28623f] border-[#28623f]/40';
    }
    return 'bg-[#f3ead7] text-[#28623f]/50 border-[#28623f]/15';
  };

  return (
    <section className="max-w-7xl mx-auto px-6 mb-24">
      <div className="bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-lg border border-white/20">
        <div className="flex items-center gap-3 mb-2">
          <i className="fa-solid fa-calendar-days text-[#28623f] text-2xl"></i>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 font-montserrat">
            {t('availability_title')}
          </h2>
        </div>
        <p className="text-sm text-gray-600 mb-6">
          {t('availability_subtitle')}
        </p>

        <div className="grid grid-cols-6 md:grid-cols-12 gap-2 md:gap-3">
          {Array.from({ length: 12 }, (_, i) => {
            const m = i + 1;
            const date = new Date(2024, i, 1);
            const isCurrent = m === currentMonth;
            return (
              <div
                key={m}
                title={longFmt.format(date)}
                className={`relative flex flex-col items-center justify-center py-3 rounded-xl border-2 transition-transform hover:scale-105 ${cellClass(m)} ${isCurrent ? 'ring-2 ring-offset-2 ring-[#b91c1c]' : ''}`}
              >
                <span className="text-xs font-bold uppercase tracking-wide">
                  {shortFmt.format(date).replace('.', '')}
                </span>
                {peak.has(m) && (
                  <i className="fa-solid fa-star text-[10px] mt-1"></i>
                )}
              </div>
            );
          })}
        </div>

        <div className="flex flex-wrap items-center gap-4 mt-6 text-xs text-gray-700">
          <div className="flex items-center gap-2">
            <span className="inline-block w-4 h-4 rounded bg-[#28623f]"></span>
            <span>{t('availability_legend_peak')}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-block w-4 h-4 rounded bg-white border border-[#28623f]/40"></span>
            <span>{t('availability_legend_inseason')}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-block w-4 h-4 rounded bg-[#f3ead7] border border-[#28623f]/15"></span>
            <span>{t('availability_legend_off')}</span>
          </div>
          <div className="flex items-center gap-2 ml-auto">
            <span className="inline-block w-4 h-4 rounded ring-2 ring-[#b91c1c]"></span>
            <span>{t('availability_legend_current')}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
