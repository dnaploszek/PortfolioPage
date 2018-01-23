export default class StringUtilities {
  static classnames = (...args: Array<string>) => {
    if (!args || !args.length) {
      return '';
    }

    return args.reduce((acc: string, arg: string) => `${acc} ${arg}`, '');
  }
}