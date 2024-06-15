type ArgListClasses = Record<string, boolean>;

type Args = string | undefined | ArgListClasses;

export const className = (...args: Args[]): string => {
  const composedClass = args.reduce<string>((acc, arg) => {
    if (!arg) acc += '';

    if (typeof arg === 'string') acc += arg + ' ';

    if (typeof arg === 'object')
      for (const [key, value] of Object.entries(arg))
        if (value) acc += key + ' ';

    return acc;
  }, '');

  return composedClass.trim();
};
