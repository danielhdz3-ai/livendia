import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

function redisConfigured(): boolean {
  return !!(process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN);
}

/** Rate limit opcional (Upstash). Sin env configurado → no limita y devuelve success. */

export async function rateLimitRegister(ip: string): Promise<{ ok: boolean }> {
  if (!redisConfigured()) return { ok: true };
  const rl = new Ratelimit({
    redis: Redis.fromEnv(),
    limiter: Ratelimit.slidingWindow(5, "1 h"),
    prefix: "rl:register",
  });
  const { success } = await rl.limit(ip);
  return { ok: success };
}

export async function rateLimitContact(ip: string): Promise<{ ok: boolean }> {
  if (!redisConfigured()) return { ok: true };
  const rl = new Ratelimit({
    redis: Redis.fromEnv(),
    limiter: Ratelimit.slidingWindow(5, "1 d"),
    prefix: "rl:contact",
  });
  const { success } = await rl.limit(ip);
  return { ok: success };
}

export async function rateLimitWelcome(key: string): Promise<{ ok: boolean }> {
  if (!redisConfigured()) return { ok: true };
  const rl = new Ratelimit({
    redis: Redis.fromEnv(),
    limiter: Ratelimit.slidingWindow(10, "1 h"),
    prefix: "rl:welcome",
  });
  const { success } = await rl.limit(key);
  return { ok: success };
}

export async function rateLimitChat(userId: string): Promise<{ ok: boolean }> {
  if (!redisConfigured()) return { ok: true };
  const rl = new Ratelimit({
    redis: Redis.fromEnv(),
    limiter: Ratelimit.slidingWindow(60, "1 h"),
    prefix: "rl:chat",
  });
  const { success } = await rl.limit(userId);
  return { ok: success };
}

export async function rateLimitIncident(userId: string): Promise<{ ok: boolean }> {
  if (!redisConfigured()) return { ok: true };
  const rl = new Ratelimit({
    redis: Redis.fromEnv(),
    limiter: Ratelimit.slidingWindow(30, "1 h"),
    prefix: "rl:incident",
  });
  const { success } = await rl.limit(userId);
  return { ok: success };
}
