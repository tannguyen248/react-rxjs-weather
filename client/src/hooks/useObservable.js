import { useCallback, useEffect, useRef, useState } from "react";
import { BehaviorSubject } from "rxjs";
import { Subject } from "rxjs";

export const useObservable = (callback, initValue) => {
  // create the action$ observable only 1 time
  const action$ = useRef(
    initValue ? new BehaviorSubject(initValue) : new Subject()
  ).current;
  // the dipatch function is memoized with useCallback()
  const dispatch = useCallback((v) => action$.next(v), [action$]);
  // store the callback on a ref, ignoring any new callback values
  const fn = useRef(callback).current;

  const [state, setState] = useState();

  useEffect(() => {
    // use the callback to create the new state$ observable
    const state$ = fn(action$);
    const sub = state$.subscribe(setState);

    return () => sub.unsubscribe();
  }, [fn, action$]);

  return [state, dispatch, action$];
};
