import { defineMiddleware } from "astro:middleware";
import { supabase } from "./lib/supabase";

// `context` and `next` are automatically typed
export const onRequest = defineMiddleware(async (context, next) => {
  const accessToken = context.cookies.get("sb-access-token");
  const refreshToken = context.cookies.get("sb-refresh-token");

  if (accessToken && refreshToken) {
    const { data, error } = await supabase.auth.setSession({
      refresh_token: refreshToken.value,
      access_token: accessToken.value,
    });

    if (error) {
      // when session is expired, error is expected
      context.cookies.delete("sb-access-token", { path: "/" });
      context.cookies.delete("sb-refresh-token", { path: "/" });
    }
    
    context.locals.user = data.user;
  }

  return next();
});
