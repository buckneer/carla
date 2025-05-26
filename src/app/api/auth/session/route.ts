import { createClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";

export async function GET() {
	// Initialize server‐side Supabase (reads the cookie)
	const { supabase, response } = await createClient();

	// Grab the current session
	const {
		data: { session },
	} = await supabase.auth.getSession();

	// If no session, clear any cookies and return null
	if (!session) {
		return new Response(JSON.stringify({ user: null, role: null }), {
			status: 200,
			headers: response.headers,
		});
	}

	// Otherwise, fetch the role
	const userId = session.user.id;
	const { data: userRow } = await supabase.from("users").select("role").eq("id", userId).single();

	return new Response(
		JSON.stringify({
			user: session.user,
			role: userRow?.role ?? null,
		}),
		{
			status: 200,
			headers: response.headers,
		}
	);
}
