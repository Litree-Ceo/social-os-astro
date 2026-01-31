import type { APIRoute } from "astro";
import { supabase } from "../../../lib/supabase";

export const GET: APIRoute = async ({ url, cookies, redirect }) => {
  const authCode = url.searchParams.get("code");

  if (authCode) {
    const { data, error } = await supabase.auth.exchangeCodeForSession(authCode);
    if (!error) {
      const { access_token, refresh_token } = data.session;
      // Store tokens in cookies so the OS stays logged in
      cookies.set("sb-access-token", access_token, { path: "/" });
      cookies.set("sb-refresh-token", refresh_token, { path: "/" });
    }
  }

  return redirect("/");
};