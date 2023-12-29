import { useRef } from 'react'

function useThrottle(action: any, throttle: any) {
    const throttleTimer : any = useRef();

    const handleAction = (...param: any) => {
        if (throttleTimer.current) {
            clearTimeout(throttleTimer.current);
        }
        throttleTimer.current = setTimeout(() => {
            action( ...param )
        }, throttle);
    };

    return handleAction
}

export default useThrottle