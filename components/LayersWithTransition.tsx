import React, {
  createContext,
  useContext,
  useRef,
  useState,
  useEffect,
  ReactNode,
} from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import ScrollToPlugin from 'gsap/ScrollToPlugin';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

/* -------------------- */
/* Transition Context */
/* -------------------- */

type TransitionContextType = {
  completed: boolean;
  toggleCompleted: (value: boolean) => void;
};

const TransitionContext = createContext<TransitionContextType>({
  completed: false,
  toggleCompleted: () => {},
});

/* -------------------- */
/* Single Combined Component */
/* -------------------- */

const LayersWithTransition: React.FC = () => {
  const [completed, setCompleted] = useState(false);

  const main = useRef<HTMLMainElement | null>(null);
  const scrollTween = useRef<gsap.core.Tween | null>(null);
  const snapTriggers = useRef<ScrollTrigger[]>([]);

  const toggleCompleted = (value: boolean) => {
    setCompleted(value);
  };

  // Auto-enable transition (optional)
  useEffect(() => {
    toggleCompleted(true);
  }, []);

  const { contextSafe } = useGSAP(
    () => {
      if (!completed) return;

      const panels = gsap.utils.toArray<HTMLElement>('.panel');
      let scrollStarts: number[] = [0];
      let snapScroll: (value: number, direction: number) => number = v => v;

      panels.forEach((panel, i) => {
        snapTriggers.current[i] = ScrollTrigger.create({
          trigger: panel,
          start: 'top top',
        });
      });

      ScrollTrigger.addEventListener('refresh', () => {
        scrollStarts = snapTriggers.current.map(trigger => trigger.start);
        snapScroll = ScrollTrigger.snapDirectional(scrollStarts);
      });

      ScrollTrigger.observe({
        type: 'wheel,touch',
        onChangeY(self) {
          if (!scrollTween.current) {
            const scroll = snapScroll(
              self.scrollY() + self.deltaY,
              self.deltaY > 0 ? 1 : -1
            );
            goToSection(scrollStarts.indexOf(scroll));
          }
        },
      });

      ScrollTrigger.refresh();
    },
    {
      dependencies: [completed],
      scope: main,
      revertOnUpdate: true,
    }
  );

  const goToSection = contextSafe((index: number) => {
    if (!snapTriggers.current[index]) return;

    scrollTween.current = gsap.to(window, {
      scrollTo: {
        y: snapTriggers.current[index].start,
        autoKill: false,
      },
      duration: 1,
      onComplete: () => (scrollTween.current = null),
      overwrite: true,
    });
  });

  return (
    <TransitionContext.Provider value={{ completed, toggleCompleted }}>
      <main ref={main} className="">
        <section className="panel min-h-screen flex items-center justify-center bg-gray-100">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold">Layered Pinning</h1>
            <p className="text-gray-600">
              Use pinning to layer panels on top of each other as you scroll.
            </p>
            <div className="text-sm text-gray-500 animate-bounce">
              Scroll Down ↓
            </div>
          </div>
        </section>

        <section className="w-2xl mx-auto min-h-screen flex items-center  justify-center bg-gray-900 text-white text-5xl font-bold">
          ONE
        </section>

        <section className="panel min-h-screen flex items-center justify-center bg-purple-600 text-white text-5xl font-bold">
          TWO
        </section>

        <section className="panel min-h-screen flex items-center justify-center bg-orange-500 text-white text-5xl font-bold">
          THREE
        </section>

        <section className="panel min-h-screen flex items-center justify-center bg-red-600 text-white text-5xl font-bold">
          FOUR
        </section>
      </main>
    </TransitionContext.Provider>
  );
};

export default LayersWithTransition;
