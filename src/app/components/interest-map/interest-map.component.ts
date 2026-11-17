import { Component, ElementRef, afterNextRender, computed, signal, viewChild } from '@angular/core';
import { SectionHeaderComponent } from '../section-header/section-header.component';
import {
  INTEREST_AREAS,
  INTEREST_GRID,
  INTEREST_LINES,
  INTEREST_STATIONS,
  MapLine,
  RoutePoint,
} from '../../data/interests';

const CELL = 30;
const CORNER = 45;

interface Station {
  id: string;
  name: string;
  note: string;
  x: number;
  y: number;
  lines: MapLine[];
}

function roundedPath(route: RoutePoint[]): string {
  const pts = route.map((p) => ({ x: p.x * CELL, y: p.y * CELL }));
  let d = `M${pts[0].x} ${pts[0].y}`;
  for (let i = 1; i < pts.length - 1; i++) {
    const [a, b, c] = [pts[i - 1], pts[i], pts[i + 1]];
    const inLen = Math.hypot(b.x - a.x, b.y - a.y);
    const outLen = Math.hypot(c.x - b.x, c.y - b.y);
    const r = Math.min(CORNER, inLen / 2, outLen / 2);
    d += ` L${b.x - ((b.x - a.x) / inLen) * r} ${b.y - ((b.y - a.y) / inLen) * r}`;
    d += ` Q${b.x} ${b.y} ${b.x + ((c.x - b.x) / outLen) * r} ${b.y + ((c.y - b.y) / outLen) * r}`;
  }
  const last = pts[pts.length - 1];
  return `${d} L${last.x} ${last.y}`;
}

function buildStations(): Station[] {
  const stations = new Map<string, Station>();
  for (const line of INTEREST_LINES) {
    for (const point of line.route) {
      if (!point.station) continue;
      const station = stations.get(point.station) ?? {
        id: point.station,
        ...INTEREST_STATIONS[point.station],
        x: point.x * CELL,
        y: point.y * CELL,
        lines: [],
      };
      station.lines.push(line);
      stations.set(point.station, station);
    }
  }
  return [...stations.values()];
}

@Component({
  selector: 'app-interest-map',
  imports: [SectionHeaderComponent],
  templateUrl: './interest-map.component.html',
  styleUrl: './interest-map.component.scss',
})
export class InterestMapComponent {
  readonly width = INTEREST_GRID.cols * CELL;
  readonly height = INTEREST_GRID.rows * CELL;
  readonly cell = CELL;
  readonly areas = INTEREST_AREAS;
  readonly lines = INTEREST_LINES.map((line) => ({ ...line, d: roundedPath(line.route) }));
  readonly stations = buildStations();

  readonly activeStation = signal<Station | null>(null);
  readonly activeLine = signal<MapLine | null>(null);

  private readonly scroller = viewChild.required<ElementRef<HTMLElement>>('scroller');

  readonly focusedLines = computed(() => {
    const station = this.activeStation();
    const line = this.activeLine();
    return station ? station.lines : line ? [line] : null;
  });

  readonly tooltip = computed(() => {
    const station = this.activeStation();
    if (!station) return null;
    const left = (station.x / this.width) * 100;
    const top = (station.y / this.height) * 100;
    return {
      station,
      left,
      top,
      below: top < 30,
      align: left < 20 ? 'start' : left > 80 ? 'end' : 'center',
    };
  });

  constructor() {
    afterNextRender(() => {
      const el = this.scroller().nativeElement;
      el.scrollLeft = (el.scrollWidth - el.clientWidth) / 2;
    });
  }

  isDimmed(lines: MapLine[]): boolean {
    const focused = this.focusedLines();
    return focused !== null && !lines.some((line) => focused.some((f) => f.name === line.name));
  }

  hide(station: Station): void {
    if (this.activeStation() === station) this.activeStation.set(null);
  }
}
