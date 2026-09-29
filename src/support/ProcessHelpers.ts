const processOptions = { stdout: "inherit", stderr: "pipe" } as const;

export const runCommand = async (command: readonly string[]): Promise<void> => {
  const child = Bun.spawn([...command], processOptions);

  if ((await child.exited) !== 0) {
    throw new Error(await new Response(child.stderr).text());
  }
};
