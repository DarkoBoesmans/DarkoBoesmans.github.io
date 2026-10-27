// Public GitHub numbers for "Statistics for nerds", fetched once at build time (no request at runtime).
// If GitHub can't be reached during the build, the last known numbers are used, so the build never fails.
const USER = 'DarkoBoesmans';
const FALLBACK = { repos: 15, top: 'TypeScript', since: 2017 }; // checked October 2026

export interface GithubStats {
  repos: number;
  top: string;
  since: number;
}

interface Repo {
  fork: boolean;
  language: string | null;
}

export async function getGithubStats(): Promise<GithubStats> {
  try {
    const opts = { signal: AbortSignal.timeout(5000), headers: { Accept: 'application/vnd.github+json' } };
    const [user, repos] = await Promise.all([
      fetch(`https://api.github.com/users/${USER}`, opts).then((r) => (r.ok ? r.json() : Promise.reject(r.status))),
      fetch(`https://api.github.com/users/${USER}/repos?per_page=100`, opts).then((r) => (r.ok ? r.json() : Promise.reject(r.status))),
    ]);

    // Most used language = the one most of my own (non-fork) repos are written in.
    const counts = new Map<string, number>();
    for (const repo of repos as Repo[]) {
      if (!repo.fork && repo.language) counts.set(repo.language, (counts.get(repo.language) ?? 0) + 1);
    }
    const top = [...counts.entries()].sort((a, b) => b[1] - a[1])[0]?.[0] ?? FALLBACK.top;

    return { repos: user.public_repos, top, since: new Date(user.created_at).getFullYear() };
  } catch {
    return FALLBACK;
  }
}
