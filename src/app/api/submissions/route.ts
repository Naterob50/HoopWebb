import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

export async function POST(req: Request) {
  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseKey) {
      return NextResponse.json({ error: 'Missing Supabase environment variables in .env.local' }, { status: 500 });
    }

    const supabase = createClient(supabaseUrl, supabaseKey);
    const body = await req.json();
    const { developerName, email, gameTitle, demoUrl, githubUrl, techStack, description } = body;

    if (!developerName || !email || !gameTitle || !demoUrl || !description) {
      return NextResponse.json({ error: 'Missing required form fields.' }, { status: 400 });
    }

    const { data, error } = await supabase
      .from('game_submissions')
      .insert([
        {
          developer_name: developerName,
          email,
          game_title: gameTitle,
          demo_url: demoUrl,
          github_url: githubUrl || null,
          tech_stack: techStack || null,
          description,
          status: 'PENDING'
        },
      ])
      .select();

    if (error) {
      return NextResponse.json({ error: `Supabase Error: ${error.message}` }, { status: 400 });
    }

    return NextResponse.json({ success: true, submission: data[0] }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: `Server Exception: ${error.message || error.toString()}` }, { status: 500 });
  }
}

export async function GET() {
  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseKey) {
      return NextResponse.json({ error: 'Missing Supabase environment variables.' }, { status: 500 });
    }

    const supabase = createClient(supabaseUrl, supabaseKey);
    const { data, error } = await supabase
      .from('game_submissions')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ submissions: data });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || 'Failed to fetch submissions' }, { status: 500 });
  }
}
