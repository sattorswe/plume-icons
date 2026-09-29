import { mkdir, mkdtemp, rm } from "node:fs/promises";

const removal = { recursive: true, force: true } as const;

export const resetDir = async (dir: string): Promise<void> => {
  await rm(dir, removal);
  await mkdir(dir);
};

export const withTempDir = async <T>(prefix: string, task: (dir: string) => Promise<T>): Promise<T> => {
  const dir = await mkdtemp(prefix);

  try {
    return await task(dir);
  } finally {
    await rm(dir, removal);
  }
};
