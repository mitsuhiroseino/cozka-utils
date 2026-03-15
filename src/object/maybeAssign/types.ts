import { ForEachValuesOptions } from '../../array/forEachValues';

export type MaybeAssignOptions = ForEachValuesOptions & {
  skipNull?: boolean;
};
