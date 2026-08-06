import type { DemandCallbackType } from "dbme/w/lib/core/model/Enums";
export type IDemandCallbacksMap = Map<DemandCallbackType, IDemandCallback>;
export type IDemandCallback = (...args: unknown[]) => unknown;
