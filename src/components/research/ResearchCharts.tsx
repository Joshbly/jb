type Domain = readonly [number, number];

const toneClasses = {
  accent: "bg-accent text-background",
  accentSoft: "bg-accent/55 text-background",
  ink: "bg-foreground text-background",
  inkSoft: "bg-foreground/65 text-background",
  muted: "bg-foreground/35 text-foreground",
  pale: "bg-foreground/12 text-foreground",
} as const;

type Tone = keyof typeof toneClasses;

function positionOnScale(value: number, domain: Domain) {
  return ((value - domain[0]) / (domain[1] - domain[0])) * 100;
}

function tickPositionClass(position: number) {
  if (position === 0) {
    return "";
  }
  if (position === 100) {
    return "-translate-x-full";
  }
  return "-translate-x-1/2";
}

function timelineLabelClass(position: number) {
  if (position < 8) {
    return "text-left";
  }
  if (position > 92) {
    return "-translate-x-full text-right";
  }
  return "-translate-x-1/2 text-center";
}

function edgeMarkerClass(position: number) {
  if (position === 0) {
    return "";
  }
  if (position === 100) {
    return "-translate-x-full";
  }
  return "-translate-x-1/2";
}

type AxisProps = {
  domain: Domain;
  ticks: readonly number[];
  suffix?: string;
  labelColumns?: "standard" | "wide";
};

function Axis({ domain, ticks, suffix = "", labelColumns = "standard" }: AxisProps) {
  const columns =
    labelColumns === "wide"
      ? "sm:grid-cols-[minmax(11rem,1.35fr)_minmax(14rem,2fr)_5rem]"
      : "sm:grid-cols-[minmax(9rem,1.1fr)_minmax(14rem,2fr)_5rem]";

  return (
    <div className={`mb-4 hidden gap-4 ${columns} sm:grid`} aria-hidden="true">
      <span />
      <div className="relative h-5 border-t border-foreground/30">
        {ticks.map((tick) => {
          const position = positionOnScale(tick, domain);

          return (
            <span
              key={tick}
              className={`absolute top-1 whitespace-nowrap font-mono text-[10px] tabular-nums text-foreground/45 ${tickPositionClass(position)}`}
              style={{ left: `${position}%` }}
            >
              {tick}
              {suffix}
            </span>
          );
        })}
      </div>
      <span />
    </div>
  );
}

type GridLinesProps = {
  domain: Domain;
  ticks: readonly number[];
};

function GridLines({ domain, ticks }: GridLinesProps) {
  return (
    <>
      {ticks.map((tick) => {
        const position = positionOnScale(tick, domain);

        return (
          <span
            key={tick}
            className={`absolute inset-y-0 border-foreground/10 ${
              position === 100 ? "right-0 border-r" : "border-l"
            }`}
            style={position === 100 ? undefined : { left: `${position}%` }}
          />
        );
      })}
    </>
  );
}

export type ProportionSegment = {
  label: string;
  value: number;
  displayValue?: string;
  tone: Tone;
};

type ProportionChartProps = {
  segments: readonly ProportionSegment[];
  ariaLabel: string;
  inlineThreshold?: number;
};

export function ProportionChart({
  segments,
  ariaLabel,
  inlineThreshold = 18,
}: ProportionChartProps) {
  const total = segments.reduce((sum, segment) => sum + segment.value, 0);
  let offset = 0;
  const segmentPositions = segments.map((segment) => {
    const share = (segment.value / total) * 100;
    const midpoint = offset + share / 2;
    offset += share;
    return { ...segment, share, midpoint };
  });
  const smallSegments = segmentPositions.filter((segment) => segment.share < inlineThreshold);
  const showCallouts = segments.length === 2 && smallSegments.length > 0;

  return (
    <div>
      <span className="sr-only">{ariaLabel}</span>
      {showCallouts ? (
        <div className="relative h-10" aria-hidden="true">
          {segmentPositions
            .filter((segment) => segment.share < inlineThreshold)
            .map((segment) => (
              <div
                key={segment.label}
                className="absolute bottom-0 flex flex-col items-start"
                style={{ left: `${segment.midpoint}%` }}
              >
                <span className="font-mono text-xs font-bold tabular-nums text-accent">
                  {segment.displayValue ?? `${segment.value}%`}
                </span>
                <span className="ml-px h-3 border-l border-accent" />
              </div>
            ))}
        </div>
      ) : null}

      <div className="flex h-11 overflow-hidden border border-foreground/20" aria-hidden="true">
        {segmentPositions.map((segment) => (
          <div
            key={segment.label}
            className={`flex items-center justify-center ${toneClasses[segment.tone]}`}
            style={{ width: `${segment.share}%` }}
          >
            {segment.share >= inlineThreshold ? (
              <span className="px-2 font-mono text-xs font-bold tabular-nums">
                {segment.displayValue ?? `${segment.value}%`}
              </span>
            ) : null}
          </div>
        ))}
      </div>

      <dl className="mt-5 grid gap-x-8 gap-y-3 sm:grid-cols-2">
        {segments.map((segment) => (
          <div
            key={segment.label}
            className="grid grid-cols-[0.75rem_1fr_auto] items-start gap-3 py-1"
          >
            <span className={`mt-1 h-2.5 w-2.5 ${toneClasses[segment.tone]}`} aria-hidden="true" />
            <dt className="font-body text-sm leading-snug text-foreground/70">{segment.label}</dt>
            <dd className="font-mono text-xs font-bold tabular-nums">
              {segment.displayValue ?? `${segment.value}%`}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

type RangeShareChartProps = {
  range: Domain;
  rangeLabel: string;
  complementLabel: string;
  ariaLabel: string;
};

export function RangeShareChart({
  range,
  rangeLabel,
  complementLabel,
  ariaLabel,
}: RangeShareChartProps) {
  return (
    <div>
      <span className="sr-only">{ariaLabel}</span>
      <div className="relative pt-10">
        <div
          className="absolute top-0 h-8 border-x border-t border-accent"
          style={{ left: `${range[0]}%`, width: `${range[1] - range[0]}%` }}
          aria-hidden="true"
        >
          <span className="absolute -top-1 left-1/2 -translate-x-1/2 -translate-y-full whitespace-nowrap font-mono text-xs font-bold text-accent">
            {range[0]}–{range[1]}%
          </span>
        </div>
        <div className="flex h-11 overflow-hidden border border-foreground/20" aria-hidden="true">
          <span className="bg-accent" style={{ width: `${range[0]}%` }} />
          <span className="bg-accent/45" style={{ width: `${range[1] - range[0]}%` }} />
          <span className="flex-1 bg-foreground" />
        </div>
        <div
          className="mt-2 flex justify-between font-mono text-[10px] tabular-nums text-foreground/45"
          aria-hidden="true"
        >
          <span>0%</span>
          <span>50%</span>
          <span>100%</span>
        </div>
      </div>
      <dl className="mt-5 grid gap-px border border-foreground/20 bg-foreground/20 sm:grid-cols-2">
        <div className="bg-background p-4">
          <dt className="font-body text-sm text-foreground/65">{rangeLabel}</dt>
          <dd className="mt-1 font-mono text-xl font-bold tabular-nums">
            {range[0]}–{range[1]}%
          </dd>
        </div>
        <div className="bg-background p-4">
          <dt className="font-body text-sm text-foreground/65">{complementLabel}</dt>
          <dd className="mt-1 font-mono text-xl font-bold tabular-nums">
            {100 - range[1]}–{100 - range[0]}%
          </dd>
        </div>
      </dl>
    </div>
  );
}

export type BarPoint = {
  label: string;
  value: number;
  displayValue?: string;
  detail?: string;
};

type BarChartProps = {
  series: readonly BarPoint[];
  domain: Domain;
  ticks: readonly number[];
  ariaLabel: string;
  suffix?: string;
  mark?: "bar" | "lollipop";
  labelColumns?: "standard" | "wide";
};

export function BarChart({
  series,
  domain,
  ticks,
  ariaLabel,
  suffix = "%",
  mark = "bar",
  labelColumns = "standard",
}: BarChartProps) {
  const columns =
    labelColumns === "wide"
      ? "sm:grid-cols-[minmax(11rem,1.35fr)_minmax(14rem,2fr)_5rem]"
      : "sm:grid-cols-[minmax(9rem,1.1fr)_minmax(14rem,2fr)_5rem]";

  return (
    <div>
      <span className="sr-only">{ariaLabel}</span>
      <Axis domain={domain} ticks={ticks} suffix={suffix} labelColumns={labelColumns} />
      <ul className="space-y-5">
        {series.map((point) => {
          const position = positionOnScale(point.value, domain);

          return (
            <li
              key={point.label}
              className={`grid grid-cols-[1fr_auto] items-center gap-x-3 gap-y-2 sm:gap-x-4 ${columns}`}
            >
              <span className="font-body text-sm font-semibold leading-snug sm:text-base">
                {point.label}
              </span>
              <div className="relative col-span-2 h-4 sm:col-span-1 sm:col-start-2 sm:row-start-1">
                <GridLines domain={domain} ticks={ticks} />
                {mark === "bar" ? (
                  <span
                    className="absolute inset-y-0 left-0 bg-accent"
                    style={{ width: `${position}%` }}
                    aria-hidden="true"
                  />
                ) : (
                  <>
                    <span
                      className="absolute top-1/2 left-0 h-px -translate-y-1/2 bg-accent"
                      style={{ width: `${position}%` }}
                      aria-hidden="true"
                    />
                    <span
                      className="absolute top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 bg-accent"
                      style={{ left: `${position}%` }}
                      aria-hidden="true"
                    />
                  </>
                )}
              </div>
              <span className="col-start-2 row-start-1 text-right font-mono text-xs font-bold tabular-nums sm:col-start-3">
                {point.displayValue ?? `${point.value}${suffix}`}
              </span>
              {point.detail ? (
                <span className="col-span-2 font-mono text-xs leading-relaxed text-foreground/45 sm:col-start-2 sm:col-end-4">
                  {point.detail}
                </span>
              ) : null}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export type ComparisonPoint = {
  label: string;
  first: number;
  second: number;
  firstDisplay?: string;
  secondDisplay?: string;
};

type GroupedBarChartProps = {
  series: readonly ComparisonPoint[];
  firstLabel: string;
  secondLabel: string;
  domain: Domain;
  ticks: readonly number[];
  ariaLabel: string;
  suffix?: string;
};

export function GroupedBarChart({
  series,
  firstLabel,
  secondLabel,
  domain,
  ticks,
  ariaLabel,
  suffix = "%",
}: GroupedBarChartProps) {
  return (
    <div>
      <span className="sr-only">{ariaLabel}</span>
      <SeriesLegend firstLabel={firstLabel} secondLabel={secondLabel} />
      <Axis domain={domain} ticks={ticks} suffix={suffix} labelColumns="wide" />
      <ul className="space-y-6">
        {series.map((point) => (
          <li
            key={point.label}
            className="grid gap-2 sm:grid-cols-[minmax(11rem,1.35fr)_minmax(14rem,2fr)_5rem] sm:items-center sm:gap-x-4"
          >
            <span className="font-body text-sm font-semibold leading-snug sm:text-base">
              {point.label}
            </span>
            <div className="space-y-2 sm:col-start-2">
              <PlotBar value={point.first} domain={domain} ticks={ticks} className="bg-accent" />
              <PlotBar
                value={point.second}
                domain={domain}
                ticks={ticks}
                className="bg-foreground/55"
              />
            </div>
            <div className="flex gap-4 font-mono text-xs font-bold tabular-nums sm:flex-col sm:gap-1 sm:text-right">
              <span className="text-accent">{point.firstDisplay ?? `${point.first}${suffix}`}</span>
              <span>{point.secondDisplay ?? `${point.second}${suffix}`}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

function PlotBar({
  value,
  domain,
  ticks,
  className,
}: {
  value: number;
  domain: Domain;
  ticks: readonly number[];
  className: string;
}) {
  return (
    <div className="relative h-2.5">
      <GridLines domain={domain} ticks={ticks} />
      <span
        className={`absolute inset-y-0 left-0 ${className}`}
        style={{ width: `${positionOnScale(value, domain)}%` }}
        aria-hidden="true"
      />
    </div>
  );
}

function SeriesLegend({ firstLabel, secondLabel }: { firstLabel: string; secondLabel: string }) {
  return (
    <div className="mb-7 flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs uppercase tracking-wider">
      <span className="flex items-center gap-2">
        <span className="h-2 w-5 bg-accent" aria-hidden="true" />
        {firstLabel}
      </span>
      <span className="flex items-center gap-2">
        <span className="h-2 w-5 bg-foreground/55" aria-hidden="true" />
        {secondLabel}
      </span>
    </div>
  );
}

type DumbbellChartProps = GroupedBarChartProps;

export function DumbbellChart({
  series,
  firstLabel,
  secondLabel,
  domain,
  ticks,
  ariaLabel,
  suffix = "%",
}: DumbbellChartProps) {
  return (
    <div>
      <span className="sr-only">{ariaLabel}</span>
      <SeriesLegend firstLabel={firstLabel} secondLabel={secondLabel} />
      <Axis domain={domain} ticks={ticks} suffix={suffix} labelColumns="wide" />
      <ul className="space-y-6">
        {series.map((point) => {
          const firstPosition = positionOnScale(point.first, domain);
          const secondPosition = positionOnScale(point.second, domain);
          const connectorStart = Math.min(firstPosition, secondPosition);

          return (
            <li
              key={point.label}
              className="grid gap-2 sm:grid-cols-[minmax(11rem,1.35fr)_minmax(14rem,2fr)_5rem] sm:items-center sm:gap-x-4"
            >
              <span className="font-body text-sm font-semibold leading-snug sm:text-base">
                {point.label}
              </span>
              <div className="relative h-5 sm:col-start-2">
                <GridLines domain={domain} ticks={ticks} />
                <span
                  className="absolute top-1/2 h-px -translate-y-1/2 bg-foreground/40"
                  style={{
                    left: `${connectorStart}%`,
                    width: `${Math.abs(secondPosition - firstPosition)}%`,
                  }}
                  aria-hidden="true"
                />
                <span
                  className="absolute top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 bg-accent"
                  style={{ left: `${firstPosition}%` }}
                  aria-hidden="true"
                />
                <span
                  className="absolute top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 border-2 border-foreground bg-background"
                  style={{ left: `${secondPosition}%` }}
                  aria-hidden="true"
                />
              </div>
              <div className="flex gap-3 font-mono text-xs font-bold tabular-nums sm:flex-col sm:gap-0 sm:text-right">
                <span className="text-accent">
                  {point.firstDisplay ?? `${point.first}${suffix}`}
                </span>
                <span>{point.secondDisplay ?? `${point.second}${suffix}`}</span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

type DeltaPoint = {
  label: string;
  value: number;
  displayValue?: string;
};

type DivergingBarChartProps = {
  series: readonly DeltaPoint[];
  domain: Domain;
  ticks: readonly number[];
  ariaLabel: string;
  suffix?: string;
};

export function DivergingBarChart({
  series,
  domain,
  ticks,
  ariaLabel,
  suffix = "",
}: DivergingBarChartProps) {
  const zeroPosition = positionOnScale(0, domain);

  return (
    <div>
      <span className="sr-only">{ariaLabel}</span>
      <Axis domain={domain} ticks={ticks} suffix={suffix} labelColumns="wide" />
      <ul className="space-y-5">
        {series.map((point) => {
          const valuePosition = positionOnScale(point.value, domain);

          return (
            <li
              key={point.label}
              className="grid grid-cols-[1fr_auto] items-center gap-x-3 gap-y-2 sm:grid-cols-[minmax(11rem,1.35fr)_minmax(14rem,2fr)_5rem] sm:gap-x-4"
            >
              <span className="font-body text-sm font-semibold leading-snug sm:text-base">
                {point.label}
              </span>
              <div className="relative col-span-2 h-4 sm:col-span-1 sm:col-start-2 sm:row-start-1">
                <GridLines domain={domain} ticks={ticks} />
                <span
                  className="absolute inset-y-[-0.2rem] border-l-2 border-foreground/55"
                  style={{ left: `${zeroPosition}%` }}
                  aria-hidden="true"
                />
                <span
                  className={`absolute inset-y-0 ${point.value >= 0 ? "bg-accent" : "bg-foreground/65"}`}
                  style={{
                    left: `${Math.min(zeroPosition, valuePosition)}%`,
                    width: `${Math.abs(valuePosition - zeroPosition)}%`,
                  }}
                  aria-hidden="true"
                />
              </div>
              <span
                className={`col-start-2 row-start-1 text-right font-mono text-xs font-bold tabular-nums sm:col-start-3 ${
                  point.value >= 0 ? "text-accent" : ""
                }`}
              >
                {point.displayValue ?? `${point.value > 0 ? "+" : ""}${point.value}${suffix}`}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

type RankPoint = {
  label: string;
  rank: number;
};

type RankPlotProps = {
  series: readonly RankPoint[];
  maximumRank: number;
  ticks: readonly number[];
  ariaLabel: string;
  topRank?: number;
};

export function RankPlot({ series, maximumRank, ticks, ariaLabel, topRank = 3 }: RankPlotProps) {
  const domain: Domain = [1, maximumRank];

  return (
    <div>
      <span className="sr-only">{ariaLabel}</span>
      <div className="mb-3 flex justify-end font-mono text-xs uppercase tracking-wider text-foreground/45">
        <span>Lower rank is better</span>
      </div>
      <Axis domain={domain} ticks={ticks} labelColumns="wide" />
      <ul className="space-y-5">
        {series.map((point) => {
          const position = positionOnScale(point.rank, domain);

          return (
            <li
              key={point.label}
              className="grid grid-cols-[1fr_auto] items-center gap-x-3 gap-y-2 sm:grid-cols-[minmax(11rem,1.35fr)_minmax(14rem,2fr)_5rem] sm:gap-x-4"
            >
              <span className="font-body text-sm font-semibold leading-snug sm:text-base">
                {point.label}
              </span>
              <div className="relative col-span-2 h-4 sm:col-span-1 sm:col-start-2 sm:row-start-1">
                <span className="absolute top-1/2 right-0 left-0 h-px -translate-y-1/2 bg-foreground/20" />
                <GridLines domain={domain} ticks={ticks} />
                <span
                  className={`absolute top-1/2 h-3 w-3 -translate-y-1/2 ${edgeMarkerClass(
                    position,
                  )} ${point.rank <= topRank ? "bg-accent" : "bg-foreground"}`}
                  style={{ left: `${position}%` }}
                  aria-hidden="true"
                />
              </div>
              <span
                className={`col-start-2 row-start-1 text-right font-mono text-xs font-bold tabular-nums sm:col-start-3 ${
                  point.rank <= topRank ? "text-accent" : ""
                }`}
              >
                #{point.rank}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

type Stat = {
  value: string;
  label: string;
  note?: string;
};

type StatStripProps = {
  stats: readonly Stat[];
};

export function StatStrip({ stats }: StatStripProps) {
  return (
    <dl className="grid grid-cols-2 gap-px border border-foreground/20 bg-foreground/20">
      {stats.map((stat) => (
        <div key={stat.label} className="bg-background p-5">
          <dd className="font-display text-3xl font-medium tabular-nums md:text-4xl">
            {stat.value}
          </dd>
          <dt className="mt-2 font-body text-sm leading-snug text-foreground/65">{stat.label}</dt>
          {stat.note ? (
            <p className="mt-2 font-mono text-xs leading-relaxed text-foreground/45">{stat.note}</p>
          ) : null}
        </div>
      ))}
    </dl>
  );
}

type TimelineEvent = {
  position: number;
  label: string;
  value: string;
  lane: "above" | "below";
  tone?: "accent" | "ink";
};

type TimelineChartProps = {
  events: readonly TimelineEvent[];
  startLabel: string;
  endLabel: string;
  ariaLabel: string;
};

export function TimelineChart({ events, startLabel, endLabel, ariaLabel }: TimelineChartProps) {
  return (
    <div>
      <span className="sr-only">{ariaLabel}</span>
      <div className="relative h-40" aria-hidden="true">
        <div className="absolute top-20 right-0 left-0 border-t-2 border-foreground" />
        {events.map((event) => (
          <div
            key={`${event.position}-${event.label}`}
            className="absolute top-20"
            style={{ left: `${event.position}%` }}
          >
            <span
              className={`absolute h-3 w-3 -translate-y-1/2 ${edgeMarkerClass(event.position)} ${
                event.tone === "accent" ? "bg-accent" : "bg-foreground"
              }`}
            />
            <div
              className={`absolute w-28 ${
                event.lane === "above" ? "bottom-4" : "top-8"
              } ${timelineLabelClass(event.position)}`}
            >
              <span className="block font-mono text-xs font-bold tabular-nums">{event.value}</span>
              <span className="mt-1 block font-body text-xs leading-snug text-foreground/60">
                {event.label}
              </span>
            </div>
          </div>
        ))}
        <span className="absolute top-24 left-0 font-mono text-[10px] text-foreground/45">
          {startLabel}
        </span>
        <span className="absolute top-24 right-0 font-mono text-[10px] text-foreground/45">
          {endLabel}
        </span>
      </div>
    </div>
  );
}
