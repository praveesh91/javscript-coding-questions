import { useRef } from "react";

function MyUseEffect(effect, deps) {
  const isFirstRender = useRef(true);
  const prevDeps = useRef([]);

  if (isFirstRender.current) {
    isFirstRender.current = false;
    const cleanup = effect();
    return () => {
      if (cleanup && typeof cleanup == "function") {
        cleanup();
      }
    };
  }

  const depsChanged = deps
    ? JSON.stringify(deps) !== JSON.stringify(prevDeps.current)
    : true;

  if (depsChanged) {
    const cleanup = effect();
    return () => {
      if (cleanup && typeof cleanup == "function") {
        cleanup();
      }
    };
  }
  prevDeps.current = deps || [];
}
export default MyUseEffect;
