/**
 * Wait until target() will return non-falsy value
 *
 * @namespace dbme.c.util
 */
export default function waitFor<TResult>(target: CallableFunction, limit?: $waitForSettings): Promise<TResult>;
export type $waitForSettings = {
    times: number;
    timeout: number;
};
