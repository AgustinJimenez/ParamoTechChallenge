const limitStr = (str: string = "", limit: number = 50) =>
  str?.length > limit ? str?.slice?.(0, limit) + "..." : str;

export default limitStr;
